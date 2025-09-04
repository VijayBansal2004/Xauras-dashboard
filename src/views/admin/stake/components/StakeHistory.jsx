/* eslint-disable */
import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Tab,
  Table,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import Card from "../../../../components/card/Card";
import { useAccount } from "wagmi";
import { useAtom } from "jotai";
import {
  userStakeHistoryaAtom,
  userUnStakeHistoryaAtom,
} from "../../../../jotai/userHistory";
import { getStakeHistory, getUnStakeHistory } from "../../../../api";

export default function StakeHistory() {
  const [type, setType] = useState("stakehistory");
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");

  const explorerUrl = import.meta.env.VITE_EXPLORER_URL;

  const { address } = useAccount();

  // global store
  const [stakeHistory, setStakeHistory] = useAtom(userStakeHistoryaAtom);
  const [unStakeHistory, setUnStakeHistory] = useAtom(userUnStakeHistoryaAtom);

  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  // update page when switching tabs
  useEffect(() => {
    if (type === "stakehistory") {
      setPage(stakeHistory.page || 0);
    } else {
      setPage(unStakeHistory.page || 0);
    }
  }, [type]);

  // stake fetch
  useEffect(() => {
    if (type !== "stakehistory" || !address) return;
    if (stakeHistory.hasMore && !stakeHistory.fetchedData[page]) {
      fetchStakeData(page);
    }
  }, [address, type, page]);

  // unstake fetch
  useEffect(() => {
    if (type !== "unstakehistory" || !address) return;
    if (unStakeHistory.hasMore && !unStakeHistory.fetchedData[page]) {
      fetchUnStakeData(page);
    }
  }, [address, type, page]);

  const fetchStakeData = async (page) => {
    try {
      setIsLoading(true)
      const response = await getStakeHistory(address, page);
      if (response?.status) {
        setStakeHistory((prev) => ({
          ...prev,
          page,
          fetchedData: { ...prev.fetchedData, [page]: response.data || [] },
          hasMore: response.data.length >= 10 ? true : false,
        }));
      } else {
        setStakeHistory((prev) => ({
          ...prev,
          hasMore: false,
        }));
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false)
    }
  };

  const fetchUnStakeData = async (page) => {
    try {
      setIsLoading(true)
      const response = await getUnStakeHistory(address, page);
      if (response?.status) {
        setUnStakeHistory((prev) => ({
          ...prev,
          page,
          fetchedData: { ...prev.fetchedData, [page]: response.data || [] },
          hasMore: response.data.length >= 10 ? true : false,
        }));
      } else {
        setUnStakeHistory((prev) => ({
          ...prev,
          hasMore: false,
        }));
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false)
    }
  };

  // --- Pagination handler ---
  const handlePrev = () => {
    if (page > 0) setPage(page - 1);
  };

  const handleNext = () => {
    const current = type === "stakehistory" ? stakeHistory : unStakeHistory;
    if (current.hasMore) {
      setPage(page + 1);
    }
  };

  // --- Render functions ---
  const renderStakeTable = (data) => (
    <>
      <Table
        variant="simple"
        color="gray.500"
        mb="24px"
        mt="12px"
        className="customtable"
        sx={ {
          "th, td": { border: "none !important" },
          "tbody tr": { bg: "transparent", transition: "background 0.2s ease" },
          "tbody tr:hover": {
            bg: useColorModeValue("gray.100", "whiteAlpha.100"),
          },
        } }
      >
        <Thead>
          <Tr>
            <Th color="gray.400">DATETIME</Th>
            <Th color="gray.400">PACKAGE ID</Th>
            <Th color="gray.400">BOOSTER BONUS</Th>
            <Th color="gray.400">EXPIRED</Th>
            <Th color="gray.400" textAlign="right">
              AMOUNT
            </Th>
            <Th color="gray.400">TX</Th>
          </Tr>
        </Thead>
        <Tbody>
          { data.map((row, idx) => {
            const shortHash = row.transaction_hash?.slice(0, 6) + "..." + row.transaction_hash?.slice(-4);
            return (
              <Tr key={ idx }>
                <Td textColor="white">{ (new Date(row?.processed_at))?.toString().split(' GMT')[0].trim() }</Td>
                <Td textColor="white">{ row?.package_id }</Td>
                <Td textColor="white">{ row?.booster_bonus_achieved == true ? "ACTIVE" : "IN ACTIVE" }</Td>
                <Td textColor="white">{ row?.is_expired == true ? "IN ACTIVE" : "ACTIVE" }</Td>
                <Td textAlign="right" textColor="white">
                  $ { Number(row?.amount_formatted) }
                </Td>
                <Td textColor="#852df3">
                  <a href={ `${explorerUrl}/tx/${row?.transaction_hash}` } target="_blank" rel="noreferrer">
                    { shortHash }
                  </a>
                </Td>
              </Tr>
            );
          }) }
        </Tbody>
      </Table>
      <Flex justify="center" gap="10px" px="20px" py="7px">
        <Button onClick={ handlePrev } isDisabled={ page === 0 }>
          Prev
        </Button>
        <Text alignSelf="center">Page { page + 1 }</Text>
        <Button onClick={ handleNext } isDisabled={ isLoading || !stakeHistory.hasMore }>
          Next
        </Button>
      </Flex>
    </>
  );

  const renderUnStakeTable = (data) => (
    <>
      <Table
        variant="simple"
        color="gray.500"
        mb="24px"
        mt="12px"
        className="customtable"
        sx={ {
          "th, td": { border: "none !important" },
          "tbody tr": { bg: "transparent", transition: "background 0.2s ease" },
          "tbody tr:hover": {
            bg: useColorModeValue("gray.100", "whiteAlpha.100"),
          },
        } }
      >
        <Thead>
          <Tr>
            <Th color="gray.400">DATETIME</Th>
            <Th color="gray.400" textAlign="right">
              AMOUNT
            </Th>
            <Th color="gray.400">TX</Th>
          </Tr>
        </Thead>
        <Tbody>
          { data.map((row, idx) => {
            const shortHash = row?.transaction_hash?.slice(0, 6) + "..." + row?.transaction_hash?.slice(-4);
            return (
              <Tr key={ idx }>
                <Td textColor="white">{ (new Date(row?.processed_at))?.toString().split(' GMT')[0].trim() }</Td>
                <Td textAlign="right" textColor="white">
                  $ { parseFloat(row?.withdrawn_amount)?.toFixed(6) }
                </Td>
                <Td textColor="#852df3">
                  <a href={ `${explorerUrl}/tx/${row?.transaction_hash}` } target="_blank" rel="noreferrer">
                    { shortHash }
                  </a>
                </Td>
              </Tr>
            );
          }) }
        </Tbody>
      </Table>
      <Flex justify="center" gap="10px" px="20px" py="7px">
        <Button onClick={ handlePrev } isDisabled={ page === 0 }>
          Prev
        </Button>
        <Text alignSelf="center">Page { page + 1 }</Text>
        <Button onClick={ handleNext } isDisabled={ isLoading || !unStakeHistory.hasMore }>
          Next
        </Button>
      </Flex>
    </>
  );

  const defaultData =
    type === "stakehistory"
      ? stakeHistory.fetchedData[page] || []
      : unStakeHistory.fetchedData[page] || [];

  return (
    <Card
      className="customcard"
      flexDirection="column"
      w="100%"
      px="0px"
      overflowX={ { sm: "scroll", lg: "hidden" } }
    >
      <Tabs variant="soft-rounded" colorScheme="green">
        <TabList
          mb="1em"
          className="customlinktabs"
          px="25px"
          gap={ { sm: "10px", md: "30px" } }
        >
          <Tab
            fontSize={ { sm: "sm", md: "lg" } }
            fontWeight="700"
            _selected={ { color: "purple.500", bg: "purple.500" } }
            onClick={ () => setType("stakehistory") }
          >
            Stake History
          </Tab>
          <Tab
            fontSize={ { sm: "sm", md: "lg" } }
            fontWeight="700"
            _selected={ { color: "purple.500", bg: "purple.500" } }
            onClick={ () => setType("unstakehistory") }
          >
            Withdrawal History
          </Tab>
        </TabList>
        <hr />
        <TabPanels>
          <TabPanel p="0">{ renderStakeTable(defaultData) }</TabPanel>
          <TabPanel p="0">{ renderUnStakeTable(defaultData) }</TabPanel>
        </TabPanels>
      </Tabs>
    </Card>
  );
}
