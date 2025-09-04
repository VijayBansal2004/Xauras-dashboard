import React from 'react';

// Chakra imports
import {
  Box,
  Button,
  Flex,
  Icon,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

// Custom components
import Card from '../../../../components/card/Card';
import { userDataAtom } from '../../../../jotai/userData';
import { useAtom } from 'jotai';

export default function WalletCard() {
  // Chakra Color Mode
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const [userData, ] = useAtom(userDataAtom);

  return (
    <Card className="customcard" align="center" direction="column" w="100%">
      <Flex
        px={{ base: '0px', '2xl': '10px' }}
        justifyContent={{
          md: 'space-between',
          sm: 'center',
        }}
        alignItems="center"
        w="100%"
        mb="8px"
      >
        <Text
          color={textColor}
          fontSize={{ md: '22px', sm: '20px' }}
          fontWeight="700"
          lineHeight="100%"
          mb="20px"
        >
          Wallet
        </Text>
      </Flex>
      <Flex
        flexDirection="column"
        align="center"
        justifyContent="center"
        textAlign="center"
        mt="20px"
      >
        <Flex w="100%">
          <Text
            textAlign="center"
            color="secondaryGray.600"
            fontSize="sm"
            fontWeight="500"
            width="100%"
            mb="10px"
          >
            Available to withdraw
          </Text>
        </Flex>
        <Flex align="end">
          <Text
            color={textColor}
            fontSize="38px"
            fontWeight="700"
            lineHeight="100%"
          >
            0
          </Text>
          {/* <Text
            ms="6px"
            color="secondaryGray.600"
            fontSize="sm"
            fontWeight="500"
          >
            USDT
          </Text> */}
        </Flex>
        <Flex align="end">
          <Text
            ms="6px"
            color="secondaryGray.600"
            fontSize="sm"
            fontWeight="500"
          >
            USDT
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
          width="100%"
        >
          Withdraw
        </Button>
        <Text
          fontSize="xs"
          color="secondaryGray.600"
          fontWeight="700"
          mt="30px"
        >
          Note: 10% maintenance fee is deducted for every withdrawal
        </Text>
      </Box>
    </Card>
  );
}
