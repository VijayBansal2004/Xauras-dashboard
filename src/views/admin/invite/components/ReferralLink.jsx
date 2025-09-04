import React from 'react';
import {
  Box,
  Flex,
  Text,
  Input,
  Button,
  Heading,
  useToast,
  useColorModeValue,
  useClipboard,
} from '@chakra-ui/react';
import Card from '../../../../components/card/Card';
import { useAtom } from 'jotai';
import { userBackendDataAtom } from '../../../../jotai/userData';
import { useAccount } from 'wagmi';

export const ReferralLink = () => {

  const toast = useToast();
  const { address } = useAccount();
  const referralUrl = `https://app.xauras.io?ref=${address}`;
  const { onCopy } = useClipboard(referralUrl);
  const [userBackendData,] = useAtom(userBackendDataAtom);

  const textColor = useColorModeValue('gray.700', 'white');

  // Visual display (truncate middle if too long)
  const truncateMiddle = (str, frontLen = 10, backLen = 20) => {
    return str.length > frontLen + backLen
      ? str.substring(0, frontLen) + '...' + str.substring(str.length - backLen)
      : str;
  };

  const truncateAddress = (addr, frontLen = 6, backLen = 4) => {
    return addr.length > frontLen + backLen
      ? addr.substring(0, frontLen) + '...' + addr.substring(addr.length - backLen)
      : addr;
  };

  const getTruncatedReferralUrl = (url) => {
    const [base, query] = url.split("?ref=");
    if (!query) return url; // no address in URL
    return `${base}?ref=${truncateAddress(query)}`;
  };

  return (
    <Card className="customcard grdcard" direction="column" w="100%" p="25px">
      <Heading
        fontSize={{ md: '22px', sm: '20px' }}
        mb="30px"
        color={textColor}
        textAlign={{ md: 'left', sm: 'center' }}
      >
        Your Referral Link
      </Heading>

      {/* Referrer Field */}
      <Flex gap="20px" flexWrap="wrap" mb="20px">
        <Box flex="1" className="fullflex">
          <Text mb="8px" color={textColor} fontSize="sm" fontWeight="500">
            Your Referrer
          </Text>
          <div className="btn-fld">
            <Input className="form-control" flex="1" value={userBackendData.userData.referral_address} readOnly />
            {/* <Button
              variant="darkBrand"
              color="white"
              fontSize="sm"
              fontWeight="500"
              borderRadius="70px"
              px="24px"
              py="5px"
              aria-label="Join"
            >
              Join
            </Button> */}
          </div>
        </Box>
      </Flex>

      {/* Referral Link Field */}
      <Flex gap="20px" flexWrap="wrap" mb="20px">
        <Box flex="1" className="fullflex">
          <Text mb="8px" color={textColor} fontSize="sm" fontWeight="500">
            Referral Link
          </Text>

          <div className="btn-fld">
            <Input
              value={getTruncatedReferralUrl(referralUrl)}
              readOnly
              className="form-control"
              title={referralUrl} // full link on hover
              flex="1"
            />
            <Button
              variant="darkBrand"
              color="white"
              fontSize="sm"
              fontWeight="500"
              borderRadius="70px"
              px="24px"
              py="5px"
              aria-label="Copy referral link"
              onClick={() => {
                onCopy();
                toast({
                  title: 'Copied!',
                  description: 'Referral link has been copied to clipboard.',
                  duration: 2000,
                  containerStyle: {
                    backgroundColor: "#852df3", // Chakra color token or hex
                    color: "white"
                  },
                  // status: 'success',
                  isClosable: true,
                  position: 'top-right',
                });
              }}
            >
              Copy
            </Button>
          </div>
        </Box>
      </Flex>
    </Card>
  );
};
