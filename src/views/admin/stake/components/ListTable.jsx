import React, { useEffect, useState } from 'react';
import {
  Box,
  Flex,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Checkbox,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
// Custom components
import Card from '../../../../components/card/Card';
import Menu from '../../../../components/menu/MainMenu';
import { useAccount } from 'wagmi';
import { getTokenBalance } from '../../../../utils/contractCalls';
import { formatEther, formatUnits } from 'viem';
import { useAtom } from 'jotai';
import { userDataAtom } from '../../../../jotai/userData';

const tableData = [
  {
    name: 'Available Balance',
    quantity: '0 USDT',
  },
  {
    name: 'Staked Balance',
    quantity: '0 USDT',
  },
  {
    name: 'Number of Packages',
    quantity: '0',
  },
];

const tableDataWithdraw = [
  {
    name: 'Available To Withdraw',
    quantity: '0 USDT',
  },
  {
    name: 'Total ROI Withdrawn',
    quantity: '0 USDT',
  }
];

const tableDataReward = [
  {
    name: 'Next Reward Amount',
    quantity: '0.0000 USDT',
  },
  {
    name: 'Next Reward Yield',
    quantity: '0.2348%',
  },
  {
    name: 'ROI (5-Day Rate)',
    quantity: '3.5806%',
  },
];
function ListTable({ stakeCount }) {
  const textColor = useColorModeValue('gray.700', 'white');
  const borderColor = useColorModeValue('gray.200', '#ffffff02');

  const [usdtBalance, setUsdtBalance] = useState(0);

  const { address } = useAccount();
  const [userData,] = useAtom(userDataAtom);

  useEffect(() => {
    if (address) {
      fetchUsdtBalance();
    }
  }, [address, stakeCount])

  const fetchUsdtBalance = async () => {
    try {
      const response = await getTokenBalance(address);
      if (response?.status) {
        setUsdtBalance(parseFloat(formatUnits(BigInt(response?.balance), 6)).toFixed(6));
      }
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="nopaddingleft">
      <Box>
        <Table
          className="customtable"
          variant="simple"
          color="white"
          mb="10px"
          mt="12px"
        >
          <Tbody>
            {tableData.map((row, idx) => (
              <Tr key={idx}>
                <Td
                  fontWeight="500"
                  fontSize={{ sm: '14px' }}
                  minW={{ sm: '150px', md: '200px', lg: 'auto' }}
                  borderColor="transparent"
                >
                  <Text as="span">{row.name}</Text>
                </Td>

                <Td
                  fontWeight="700"
                  textAlign="right"
                  fontSize={{ sm: '14px' }}
                  minW={{ sm: '150px', md: '200px', lg: 'auto' }}
                  borderColor="transparent"
                >
                  {
                    row.name == 'Available Balance' ? `$ ${usdtBalance}` :
                      row.name == 'Staked Balance' ? `$ ${userData.totalStakedAmount}` :
                        row.name == 'Number of Packages' ? userData.totalPackages :
                          row.quantity
                  }
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
      <hr />
      <Box>
        <Table
          className="customtable"
          variant="simple"
          color="white"
          mb="0"
          mt="12px"
        >
          <Tbody>
            {/* {tableDataReward.map((row, idx) => (
              <Tr key={idx}>
                <Td
                  fontWeight="500"
                  fontSize={{ sm: '14px' }}
                  minW={{ sm: '150px', md: '200px', lg: 'auto' }}
                  borderColor="transparent"
                >
                  <Text as="span">{row.name}</Text>
                </Td>

                <Td
                  fontWeight="700"
                  textAlign="right"
                  fontSize={{ sm: '14px' }}
                  minW={{ sm: '150px', md: '200px', lg: 'auto' }}
                  borderColor="transparent"
                >
                  {row.quantity}
                </Td>
              </Tr>
            ))} */}
          </Tbody>
        </Table>
      </Box>
      <Flex align="center" justify="center">
        <Text
          fontSize="xs"
          color="secondaryGray.500"
          fontWeight="400"
          mt="25px"
          textAlign="justify"
        >
          Note:  You will earn 200% from your staking bonus.  If you sponsor 2 direct refferal with same or above pacakage
          within 7 days then your staking bonus will be 2X
        </Text>
      </Flex>
    </div>
  );
}

export const ListTableWithdraw = () => {
  const textColor = useColorModeValue('gray.700', 'white');
  const borderColor = useColorModeValue('gray.200', '#ffffff02');

  const [userData,] = useAtom(userDataAtom);

  return (
    <div className="nopaddingleft">
      <Box>
        <Table
          className="customtable"
          variant="simple"
          color="white"
          mb="10px"
          mt="12px"
        >
          <Tbody>
            {tableDataWithdraw.map((row, idx) => (
              <Tr key={idx}>
                <Td
                  fontWeight="500"
                  fontSize={{ sm: '14px' }}
                  minW={{ sm: '150px', md: '200px', lg: 'auto' }}
                  borderColor="transparent"
                >
                  <Text as="span">{row.name}</Text>
                </Td>

                <Td
                  fontWeight="700"
                  textAlign="right"
                  fontSize={{ sm: '14px' }}
                  minW={{ sm: '150px', md: '200px', lg: 'auto' }}
                  borderColor="transparent"
                >
                  {
                    row.name == 'Available To Withdraw' ? `$ ${parseFloat((userData.roiIncome - userData.totalWithdrawn).toString()).toFixed(6)}` :
                      row.name == 'Total ROI Withdrawn' ? `$ ${userData.totalWithdrawn}` :
                        row.quantity
                  }
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
      <hr />
      <Box>
        <Table
          className="customtable"
          variant="simple"
          color="white"
          mb="0"
          mt="12px"
        >
          <Tbody>
            {/* {tableDataReward.map((row, idx) => (
              <Tr key={idx}>
                <Td
                  fontWeight="500"
                  fontSize={{ sm: '14px' }}
                  minW={{ sm: '150px', md: '200px', lg: 'auto' }}
                  borderColor="transparent"
                >
                  <Text as="span">{row.name}</Text>
                </Td>

                <Td
                  fontWeight="700"
                  textAlign="right"
                  fontSize={{ sm: '14px' }}
                  minW={{ sm: '150px', md: '200px', lg: 'auto' }}
                  borderColor="transparent"
                >
                  {row.quantity}
                </Td>
              </Tr>
            ))} */}
          </Tbody>
        </Table>
      </Box>
      <Flex align="center" justify="center">
        <Text
          fontSize="xs"
          color="secondaryGray.500"
          fontWeight="400"
          mt="25px"
          textAlign="justify"
        >
          Note: 10% of the requested withdrawal amount will be charged as a maintenance fee.
        </Text>
      </Flex>
    </div>
  );
}

export default ListTable;
