// Chakra imports
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
} from "@chakra-ui/react";
import MiniStatistics from "../../../components/card/MiniStatistics";
import IconBox from "../../../components/icons/IconBox";
import {
  MdAddTask,
  MdAttachMoney,
  MdBarChart,
  MdFileCopy,
} from "react-icons/md";
import WeeklyRevenue from "../default/components/StakingPerformance";
import ListTable from "./components/ListTable";
import StakeOverview from "./components/StakeOverview";
import Calculator from "./components/Calculator";
import ComplexTable from "../dataTables/components/ComplexTable";
import { columnsDataComplex } from "../dataTables/variables/columnsData";
import tableDataComplex from "../../../views/admin/default/variables/tableDataComplex.json";
import StakeHistory from "./components/StakeHistory";
import { userDataAtom } from "../../../jotai/userData";
import { useAtom } from "jotai";

export default function Stake() {
  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "secondaryGray.600");
  const textColorBrand = useColorModeValue("brand.500", "white");
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue(
    "linear-gradient(26deg, rgb(148 61 245 / 100%) 6.14%, rgb(9 9 11 / 0%) 77.64%)",
    "linear-gradient(26deg, rgb(148 61 245 / 100%) 6.14%, rgb(9 9 11 / 0%) 77.64%)"
  );
  const [userData] = useAtom(userDataAtom);

  return (
    <Box pt={{ base: "30px", md: "30px", xl: "30px" }}>
      {/* <Text
        color={textColor}
        fontSize="14px"
        fontWeight="700"
        mb="25px"
        textAlign={{ sm: 'center', md: 'left' }}
      >
        6 hrs, 16 mins to next rebase
      </Text> */}
      {/* <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap="20px" mb="20px">
        <MiniStatistics
          name="Direct Bonus"
          value={`${userData.directBonus} USDT`}
        // growth="+23%"
        // subtext="from last month"
        />
        <MiniStatistics
          name="Staking Bonus"
          value={`${userData.stakingBonus} USDT`}
        // growth="+23%"
        // subtext="from last month"
        />
        <MiniStatistics
          name="Matching Bonus"
          value={`${userData.matchingBonus} USDT`}
        // growth="+23%"
        // subtext="from last month"
        />
        <MiniStatistics
          name="Generation Reward"
          value={`${userData.generationReward} USDT`}
        // subtext="Weighted by staked value"
        />
      </SimpleGrid> */}
      <SimpleGrid columns={{ base: 1, md: 1, xl: 1 }} gap="20px" mb="20px">
        <StakeOverview />
        {/* <Calculator /> */}
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 1, xl: 1 }} gap="20px" mb="20px">
        <StakeHistory />
      </SimpleGrid>
    </Box>
  );
}
