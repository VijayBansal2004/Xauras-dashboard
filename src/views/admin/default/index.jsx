import {
  Avatar,
  Box,
  Flex,
  FormLabel,
  Icon,
  Select,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components

import MiniStatistics from "../../../components/card/MiniStatistics";
import IconBox from "../../../components/icons/IconBox";
import React from "react";
import {
  MdTrendingUp,
  MdStackedLineChart,
  MdAccountBalanceWallet,
  MdLeaderboard,
  MdCreditScore,
  MdCardGiftcard,
  MdSavings,
  MdGroups,
} from "react-icons/md";
import PieCard from "../../../views/admin/default/components/PieCard";
import StakingPerformance from "./components/StakingPerformance";
import { useAtom } from "jotai";
import { userDataAtom } from "../../../jotai/userData";
import { TbCoin } from "react-icons/tb";
export default function UserReports() {
  // Chakra Color Mode
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue(
    "linear-gradient(26deg, rgb(148 61 245 / 100%) 6.14%, rgb(9 9 11 / 0%) 77.64%)",
    "linear-gradient(26deg, rgb(148 61 245 / 100%) 6.14%, rgb(9 9 11 / 0%) 77.64%)"
  );
  const [userData] = useAtom(userDataAtom);

  return (
    <Box pt={{ base: "30px", md: "30px", xl: "30px" }}>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap="20px" mb="20px">
        <MiniStatistics
          startContent={
            <IconBox
              w="36px"
              h="36px"
              bg={boxBg}
              icon={
                <Icon w="22px" h="22px" as={MdTrendingUp} color={brandColor} />
              }
            />
          }
          name="Total Packages"
          value={userData.totalPackages}
        // growth="+23%"
        // subtext="from last month"
        />
        <MiniStatistics
          startContent={
            <IconBox
              w="36px"
              h="36px"
              bg={boxBg}
              icon={
                <Icon
                  w="22px"
                  h="22px"
                  as={MdStackedLineChart}
                  color={brandColor}
                />
              }
            />
          }
          name="Total Staked Amount"
          value={`$ ${userData.totalStakedAmount}`}
        // growth="+23%"
        // subtext="from last month"
        />
        <MiniStatistics
          startContent={
            <IconBox
              w="36px"
              h="36px"
              bg={boxBg}
              icon={<Icon w="22px" h="22px" as={TbCoin} color={brandColor} />}
            />
          }
          name="Total Earned"
          value={`$ ${(userData.totalEarned + userData.roiIncome)}`}
        // growth="+23%"
        // subtext="from last month"
        />
        <MiniStatistics
          startContent={
            <IconBox
              w="36px"
              h="36px"
              bg={boxBg}
              icon={
                <Icon w="22px" h="22px" as={MdCreditScore} color={brandColor} />
              }
            />
          }
          name="Total Withdrawn"
          value={`$ ${userData.totalWithdrawn}`}
        // value="$1.9K"
        // subtext="Weighted by staked value"
        />
      </SimpleGrid>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap="20px" mb="20px">
        <MiniStatistics
          startContent={
            <IconBox
              w="36px"
              h="36px"
              bg={boxBg}
              icon={
                <Icon
                  w="22px"
                  h="22px"
                  as={MdCardGiftcard}
                  color={brandColor}
                />
              }
            />
          }
          name="Direct Bonus"
          value={`$ ${userData.directBonus}`}
        // growth="+23%"
        // subtext="from last month"
        />
        <MiniStatistics
          startContent={
            <IconBox
              w="36px"
              h="36px"
              bg={boxBg}
              icon={
                <Icon w="22px" h="22px" as={MdSavings} color={brandColor} />
              }
            />
          }
          name="Staking Bonus"
          value={`$ ${userData.stakingBonus}`}
        // growth="+23%"
        // subtext="from last month"
        />
        <MiniStatistics
          startContent={
            <IconBox
              w="36px"
              h="36px"
              bg={boxBg}
              icon={<Icon w="22px" h="22px" as={MdGroups} color={brandColor} />}
            />
          }
          name="Matching Bonus"
          value={`$ ${userData.matchingBonus}`}
        // growth="+23%"
        // subtext="from last month"
        />
        <MiniStatistics
          startContent={
            <IconBox
              w="36px"
              h="36px"
              bg={boxBg}
              icon={
                <Icon w="22px" h="22px" as={MdLeaderboard} color={brandColor} />
              }
            />
          }
          name="Generation Reward"
          value={`$ ${userData.generationReward}`}
        // value="$1.9K"
        // subtext="Weighted by staked value"
        />
      </SimpleGrid>

      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px" mb="20px">
        {/* <TotalSpent /> */}
        {/* <WalletCard /> */}
        <StakingPerformance />
        <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px">
          {
            userData.isFetched ?
              <>
                <PieCard cardName={"Income Matching Bonus"} cardValue={userData.nextMatchingBonus.business} pieChartDataProgress={[userData.matchingBonusMaxChildVolume, userData.matchingBonusBusiness]} />
                <PieCard cardName={"Generation Reward"} cardValue={userData.nextGenerationReward.business} pieChartDataProgress={[userData.generationRewardMaxChildVolume, userData.generationRewardBusiness]} />
              </> : null
          }
        </SimpleGrid>
      </SimpleGrid>
      {/* <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap="20px" mb="20px">
        <StakingPerformance />
        <CheckTable columnsData={columnsDataCheck} tableData={tableDataCheck} />
      </SimpleGrid> */}
      {/* <SimpleGrid columns={{ base: 1, md: 1, xl: 1 }} gap="20px" mb="20px">
        <ComplexTable
          columnsData={columnsDataComplex}
          tableData={tableDataComplex}
        />
      </SimpleGrid> */}
    </Box>
  );
}
