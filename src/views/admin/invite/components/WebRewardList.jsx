/* eslint-disable */
import React from "react";
import {
  Box,
  Flex,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import Card from "../../../../components/card/Card";

const columnHelper = createColumnHelper();

// Sample Data
const defaultData = [
  { tx: "0xA1B2C3D4E5F6", reward: 1200, block: 1812345 },
  { tx: "0xF9E8D7C6B5A4", reward: 500, block: 1812290 },
  { tx: "0x112233445566", reward: 300, block: 1812001 },
];

export default function WebRewardList() {
  const [sorting, setSorting] = React.useState([]);
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");

  const columns = [
    columnHelper.accessor("tx", {
      id: "tx",
      header: () => (
        <Text fontSize={{ sm: "12px", lg: "12px" }} color="gray.400" w="100%">
          TX
        </Text>
      ),
      cell: (info) => {
        const value = info.getValue();
        const shortHash = value.slice(0, 6) + "..." + value.slice(-4);
        return (
          <Text color={textColor} fontSize="sm" fontWeight="500">
            {shortHash}
          </Text>
        );
      },
    }),
    columnHelper.accessor("reward", {
      id: "reward",
      header: () => (
        <Text fontSize="12px" color="gray.400" w="100%">
          REWARD
        </Text>
      ),
      cell: (info) => (
        <Text color={textColor} fontSize="sm" fontWeight="500">
          ${info.getValue()}
        </Text>
      ),
    }),
    columnHelper.accessor("block", {
      id: "block",
      header: () => (
        <Text
          textAlign="right"
          fontSize={{ sm: "10px", lg: "12px" }}
          color="gray.400"
          w="100%"
        >
          BLOCK
        </Text>
      ),
      cell: (info) => (
        <Text
          color={textColor}
          fontSize="sm"
          fontWeight="500"
          textAlign="right"
        >
          {info.getValue()}
        </Text>
      ),
    }),
  ];

  const [data] = React.useState(() => [...defaultData]);

  const table = useReactTable({
    data,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <Card
      className="customcard"
      flexDirection="column"
      w="100%"
      px="0px"
      overflowX={{ sm: "scroll", lg: "hidden" }}
    >
      {/* Header */}
      <Flex
        px="20px"
        mb="8px"
        justifyContent={{ md: "space-between", sm: "center" }}
        align="center"
      >
        <Text
          color={textColor}
          fontSize={{ md: "22px", sm: "20px" }}
          fontWeight="700"
          lineHeight="100%"
        >
          My Web Reward
        </Text>
      </Flex>

      {/* Table */}
      <Box>
        <Table
          variant="simple"
          color="gray.500"
          mb="24px"
          mt="12px"
          className="customtable"
        >
          <Thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <Tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <Th
                    key={header.id}
                    colSpan={header.colSpan}
                    pe="10px"
                    borderColor={borderColor}
                    cursor="pointer"
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    <Flex
                      justifyContent="flex-start"
                      align="center"
                      fontSize={{ sm: "10px", lg: "12px" }}
                      color="gray.400"
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </Flex>
                  </Th>
                ))}
              </Tr>
            ))}
          </Thead>
          <Tbody>
            {table.getRowModel().rows.map((row) => (
              <Tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <Td
                    key={cell.id}
                    fontSize={{ sm: "14px" }}
                    minW={{ sm: "150px", md: "200px", lg: "auto" }}
                    borderColor="transparent"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Td>
                ))}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Card>
  );
}
