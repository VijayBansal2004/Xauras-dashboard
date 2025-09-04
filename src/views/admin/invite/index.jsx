import React, { useEffect } from "react";

// imports
import {
  Box,
  Button,
  Flex,
  Grid,
  Link,
  Text,
  Icon,
  useColorModeValue,
  SimpleGrid,
  Heading,
} from "@chakra-ui/react";
import MiniStatistics from "../../../components/card/MiniStatistics";
import { columnsDataComplex } from "../dataTables/variables/columnsData";
import tableDataComplex from "../../../views/admin/default/variables/tableDataComplex.json";
import WebReward from "./components/WebReward";
import { ReferralLink } from "./components/ReferralLink";
import InvitationList from "./components/InvitationList";
import WebRewardList from "./components/WebRewardList";
import Levels from "./components/Levels";
import { useAtom } from "jotai";
import { userDataAtom, userLevelsDataAtom } from "../../../jotai/userData";
import { useAccount } from "wagmi";
import { getUserLevelsContractData } from "../../../utils/contractCalls";
import { formatEther, formatUnits } from "viem";
export default function Invite() {
  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "secondaryGray.600");
  const textColorBrand = useColorModeValue("brand.500", "white");
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue(
    "linear-gradient(26deg, rgb(148 61 245 / 100%) 6.14%, rgb(9 9 11 / 0%) 77.64%)",
    "linear-gradient(26deg, rgb(148 61 245 / 100%) 6.14%, rgb(9 9 11 / 0%) 77.64%)"
  );
  const [userLevelsData, setUserLevelData] = useAtom(userLevelsDataAtom);
  const [userData,] = useAtom(userDataAtom);

  const { address } = useAccount();

  useEffect(() => {
    if (!userLevelsData.isFetched && address) {
      fetchUserLevelsData();
    }
  }, [userLevelsData.isFetched, address])

  const fetchUserLevelsData = async () => {
    try {
      const response = await getUserLevelsContractData(address);
      console.log(response)
      if (response && response.status) {
        const levelsData = {}
        let totalDownline = 0;
        for(let i=0; i<20; i++) {
          levelsData[i] = {count: 0, income: 0}
        }
        response.data[0].map((count, i) => {
          levelsData[i].count = Number(count);
          totalDownline += Number(count);
        })
        response.data[1].map((income, i) => {
          levelsData[i].income = parseFloat(formatUnits(Number(income), 6)).toFixed(6);
        })
        setUserLevelData(prev => ({...prev, levelsData, totalDownline}))
      }
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <Box pt={{ base: "30px", md: "30px", xl: "30px" }}>
      <SimpleGrid columns={{ base: 1, md: 4, lg: 4 }} gap="20px" mb="20px">
        <MiniStatistics name="Total Direct Count" value={userLevelsData?.levelsData?.[0]?.count || 0} />
        <MiniStatistics name="Total Downline" value={userLevelsData.totalDownline} />
        <MiniStatistics name="Direct Bonus" value={`$ ${userData.directBonus}`} />
        <MiniStatistics name="Staking Referral Bonus" value={`$ ${userData.stakingBonus}`} />
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px" mb="20px">
        <WebReward directCount={userLevelsData?.levelsData?.[0]?.count || 0} />
        <ReferralLink />
      </SimpleGrid>
      {/* {Array.from({ length: 4 }).map((_, i) => (
        <SimpleGrid columns={{ base: 1, md: 5, lg: 5 }} gap="20px" mb="20px">
          <MiniStatistics name={`Level ${i * 5 + 1}`} value="0" />
          <MiniStatistics name={`Level ${i * 5 + 2}`} value="0" />
          <MiniStatistics name={`Level ${i * 5 + 3}`} value="0" />
          <MiniStatistics name={`Level ${i * 5 + 4}`} value="0" />
          <MiniStatistics name={`Level ${i * 5 + 5}`} value="0" />
        </SimpleGrid>
      ))} */}
      <Levels data={userLevelsData.levelsData} />

      {/* <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px" mb="20px">
        <InvitationList />
        <WebRewardList
          columnsData={columnsDataComplex}
          tableData={tableDataComplex}
        />
      </SimpleGrid> */}
    </Box>
  );
}
