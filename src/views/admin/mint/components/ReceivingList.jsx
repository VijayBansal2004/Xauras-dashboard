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
  Image,
  useColorModeValue,
} from '@chakra-ui/react';

import nodata from '../../../../assets/img/nodata.png';

const tableData = [
  {
    name: 'Unstaked Balance',
    quantity: '0 USDT',
  },
  {
    name: 'Staked Balance',
    quantity: '0 USDT',
  },
  {
    name: 'Your Warmup Balance (2 epochs)',
    quantity: '0.0000 USDT',
  },
  {
    name: 'Total Rewards Received',
    quantity: '0.0000 USDT',
  },
  {
    name: 'Total Value',
    quantity: '0.0000 USD',
  },
];
function ReceivingList() {
  const textColor = useColorModeValue('gray.700', 'white');
  const borderColor = useColorModeValue('gray.200', '#ffffff02');

  return (
    <div className="nopaddingleft">
      <Box>
        {tableData.length > 0 ? (
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
                    {row.quantity}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        ) : (
          <Flex flexDir="column" align="center" justify="center" py="40px">
            <Image src={nodata} alt="No Data" boxSize="50px" mb="10px" />
            <Text color={textColor} fontWeight="500" fontSize="sm">
              No Data Available
            </Text>
          </Flex>
        )}
      </Box>
    </div>
  );
}

export default ReceivingList;
