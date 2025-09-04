// Chakra imports
import {
  Box,
  Button,
  Flex,
  Icon,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import Card from '../../../../components/card/Card';
// Custom components
import BarChart from '../../../../components/charts/BarChart';
import React from 'react';
import {
  barChartDataConsumption,
  barChartOptionsConsumption,
} from '../../../../variables/charts';
import { MdBarChart } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { userDataAtom } from '../../../../jotai/userData';
import { useAtom } from 'jotai';

export default function StakingPerformance(props) {
  const { ...rest } = props;
  const navigate = useNavigate();
  const [userData,] = useAtom(userDataAtom);

  // Chakra Color Mode
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const iconColor = useColorModeValue('brand.500', 'white');
  const bgButton = useColorModeValue('secondaryGray.300', 'whiteAlpha.100');
  const bgHover = useColorModeValue(
    { bg: 'secondaryGray.400' },
    { bg: 'whiteAlpha.50' },
  );
  const bgFocus = useColorModeValue(
    { bg: 'secondaryGray.300' },
    { bg: 'whiteAlpha.100' },
  );

  const handleNavigate = (path) => {
    navigate(path); // Navigate to the specified path
  };
  
  return (
    <Card className="customcard" align="" direction="column" w="100%" {...rest}>
      <Flex
        align="center"
        w="100%"
        direction={{ md: 'row', sm: 'column' }}
        justify={{ md: 'space-between', sm: 'center' }}
      >
        <div>
          <Text
            me="auto"
            color="secondaryGray.600"
            fontSize="md"
            fontWeight="500"
            lineHeight="100%"
          >
            Staking Performance
          </Text>

          <Text
            color={textColor}
            fontSize="2xl"
            fontWeight="700"
            mt="4px"
            me="12px"
          >
            $ {userData.totalStakedAmount}
          </Text>
        </div>

        {/* <Button
          ms="auto"
          align="center"
          justifyContent="center"
          bg={bgButton}
          _hover={bgHover}
          _focus={bgFocus}
          _active={bgFocus}
          w="37px"
          h="37px"
          lineHeight="100%"
          borderRadius="10px"
          {...rest}
        >
          <Icon as={MdBarChart} color={iconColor} w="24px" h="24px" />
        </Button> */}
        <Button
          ms="auto"
          margin={{
            md: '0',
            sm: '20px auto',
          }}
          align="center"
          justifyContent="center"
          variant="darkBrand"
          color="white"
          fontSize="sm"
          fontWeight="500"
          borderRadius="70px"
          px="35px"
          py="5px"
          className="animated-btn"
          onClick={() => handleNavigate("/admin/stake")}
        >
          <span>Stake Now</span>
          <div className="liquid"></div>
        </Button>
      </Flex>
      <Flex
        className="listrow"
        gap="10px"
        fontSize="14px"
        fontWeight="700"
        mt="20px"
        direction="column"
        w="100%"
      >
        <Flex justify="space-between" w="100%">
          <Text color="green.500" fontSize="14px" fontWeight="700" me="5px">
            Staking ROI per month (Staking Bonus)
          </Text>
          <Text color="green.500" fontSize="14px" fontWeight="700" me="5px">
            8%
          </Text>
        </Flex>
        <Flex justify="space-between" w="100%">
          <Text color="green.500" fontSize="14px" fontWeight="700" me="5px">
            Staking ROI per month (Booster Bonus)
          </Text>
          <Text color="green.500" fontSize="14px" fontWeight="700" me="5px">
            16%
          </Text>
        </Flex>
        {/* <Flex justify="space-between" w="100%">
          <Text color="green.500" fontSize="14px" fontWeight="700" me="5px">
            Staking Duration
          </Text>
          <Text color="green.500" fontSize="14px" fontWeight="700" me="5px">
            12 months
          </Text>
        </Flex> */}
      </Flex>
      <Box h="180px">
        <BarChart
          chartData={barChartDataConsumption}
          chartOptions={barChartOptionsConsumption}
        />
      </Box>
    </Card>
  );
}
