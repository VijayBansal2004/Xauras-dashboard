import React from 'react';
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

const tableData = [
  {
    name: 'Total Staking',
    quantity: '25.00 USDT',
  },
  {
    name: 'Total Active Staking',
    quantity: '25.00 USDT',
  },
  {
    name: 'Staking ROI / Second',
    quantity: '25.00 USDT',
  },
];

function CheckTable() {
  const textColor = useColorModeValue('gray.700', 'white');
  const borderColor = useColorModeValue('gray.200', '#ffffff02');

  return (
    <Card
      className="customcard"
      flexDirection="column"
      w="100%"
      px="0px"
      overflowX={{ sm: 'scroll', lg: 'hidden' }}
    >
      <Flex
        px="25px"
        mb="8px"
        justifyContent={{
          md: 'space-between',
          sm: 'center',
        }}
        align="center"
      >
        <Text
          color={textColor}
          fontSize={{ md: '22px', sm: '20px' }}
          fontWeight="700"
          lineHeight="100%"
        >
          Staking
        </Text>
      </Flex>
      <Box>
        <Table
          className="customtable"
          variant="simple"
          color="white"
          mb="0"
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
                  {row.quantity}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
      <Flex
        px="25px"
        mt="40px"
        mb="8px"
        justifyContent={{
          md: 'space-between',
          sm: 'center',
        }}
        align="center"
      >
        <Text
          color={textColor}
          fontSize={{ md: '22px', sm: '20px' }}
          fontWeight="700"
          lineHeight="100%"
        >
          Direct Sponsor
        </Text>
      </Flex>
      <Box>
        <Table
          variant="simple"
          color="white"
          mb="0"
          mt="12px"
          className="customtable"
        >
          <Tbody>
            <Tr>
              <Td
                fontWeight="500"
                fontSize={{ sm: '14px' }}
                minW={{ sm: '150px', md: '200px', lg: 'auto' }}
                borderColor="transparent"
              >
                <Text as="span">Total Income</Text>
              </Td>

              <Td
                fontWeight="700"
                textAlign="right"
                fontSize={{ sm: '14px' }}
                minW={{ sm: '150px', md: '200px', lg: 'auto' }}
                borderColor="transparent"
              >
                17.00 USDT
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
    </Card>
  );
}

export default CheckTable;
