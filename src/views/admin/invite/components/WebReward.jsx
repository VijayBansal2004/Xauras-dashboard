import React from 'react';

// Chakra imports
import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Text,
  useClipboard,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';

// Custom components
import Card from '../../../../components/card/Card';
import { useAccount } from 'wagmi';
import { useAtom } from 'jotai';
import { userDataAtom } from '../../../../jotai/userData';

export default function WebReward({ directCount }) {
  // Chakra Color Mode
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const toast = useToast();
  const [userData,] = useAtom(userDataAtom)

  const { address } = useAccount();
  const referralUrl = `https://app.xauras.io?ref=${address}`;
  const { onCopy } = useClipboard(referralUrl);

  return (
    <Card
      className="customcard"
      align="center"
      direction="column"
      w="100%"
      p="25px"
    >
      <Heading
        fontSize={{ md: '22px', sm: '20px' }}
        mb="30px"
        color={textColor}
        textAlign={{ md: 'left', sm: 'center' }}
      >
        Direct Bonus Percent
      </Heading>
      <Flex
        flexDirection="column"
        align="center"
        justifyContent="center"
        textAlign="center"
        mt="20px"
      >
        <Flex align="end">
          <Text
            color="#e08cfd"
            fontSize="38px"
            fontWeight="700"
            lineHeight="100%"
          >
            {
              userData.referralPercentAchieved ? '70%' : '5%'
            }
          </Text>
        </Flex>
        <Flex align="end">
          <Text
            mt="20px"
            color="secondaryGray.600"
            fontSize="md"
            fontWeight="600"
          >
            {
              userData.referralPercentAchieved ?
                <>
                  You are eligible for <span style={{ color: "#e08cfd" }}>70% </span>referral Bonus
                </> :
                <>
                  from 7th referral you will get <span style={{ color: "#e08cfd" }}>70% </span>referral Bonus
                </>
            }
          </Text>
        </Flex>
      </Flex>
      <Box mt="30px">
        <Button
          variant="darkBrand"
          color="white"
          fontSize="sm"
          fontWeight="500"
          borderRadius="70px"
          px="24px"
          py="5px"
          width="80%"
          onClick={() => {
            onCopy();
            toast({
              title: 'Copied!',
              description: 'Referral link has been copied to clipboard.',
              // status: 'success',
              duration: 2000,
              containerStyle: {
                backgroundColor: "#852df3", // Chakra color token or hex
                color: "white"
              },
              isClosable: true,
              position: 'top-right',
            });
          }}
        >
          Refer now
        </Button>
      </Box>
    </Card>
  );
}
