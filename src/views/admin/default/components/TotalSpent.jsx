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
import LineChart from '../../../../components/charts/LineChart';
import React from 'react';
import { IoCheckmarkCircle } from 'react-icons/io5';
import { MdBarChart, MdOutlineCalendarToday } from 'react-icons/md';
// Assets
import { RiArrowUpSFill } from 'react-icons/ri';
import {
  lineChartDataTotalSpent,
  lineChartOptionsTotalSpent,
} from '../../../../variables/charts';

export default function TotalSpent(props) {
  const { ...rest } = props;

  // Chakra Color Mode

  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const textColorSecondary = useColorModeValue('secondaryGray.600', 'white');
  const boxBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.100');
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
  return (
    <Card
      className="customcard"
      // justifyContent="center"
      align="start"
      direction="column"
      w="100%"
      mb="0px"
      {...rest}
    >
      <Flex align="center" w="100%">
        <div>
          <Text
            me="auto"
            color="secondaryGray.600"
            fontSize="md"
            fontWeight="500"
            lineHeight="100%"
          >
            Runway Available
          </Text>

          <Text
            color={textColor}
            fontSize="2xl"
            fontWeight="700"
            mt="4px"
            me="12px"
          >
            254.7 Days
          </Text>
        </div>
        <Button
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
        </Button>
      </Flex>
      <Flex w="100%" flexDirection={{ base: 'column', lg: 'row' }}>
        <Box minH="260px" minW="100%" mt="auto">
          <LineChart
            chartData={lineChartDataTotalSpent}
            chartOptions={lineChartOptionsTotalSpent}
          />
        </Box>
      </Flex>
    </Card>
  );
}
