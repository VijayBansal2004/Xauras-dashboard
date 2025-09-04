// Chakra imports
import { Box, Flex, Text, Select, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "../../../../components/card/Card";
import PieChart from "../../../../components/charts/PieChart";
import { pieChartData, pieChartOptions } from "../../../../variables/charts";
import { VSeparator } from "../../../../components/separator/Separator";
import React from "react";

export default function Conversion(props) {
  const { ...rest } = props;

  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const cardColor = useColorModeValue("white", "navy.700");
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );
  return (
    <Card
      className="customcard"
      p="20px"
      align="center"
      direction="column"
      w="100%"
      {...rest}
    >
      <Flex
        px={{ base: "0px", "2xl": "10px" }}
        justifyContent={{
          md: "center",
          sm: "center",
        }}
        alignItems="center"
        w="100%"
        mb="8px"
      >
        <Text
          color={textColor}
          fontSize={{ md: "18px", sm: "18px" }}
          fontWeight="700"
          lineHeight="100%"
          mb="20px"
          textAlign={"center"}
        >
          {rest.cardName}
        </Text>
      </Flex>

      <Text
        color={textColor}
        className="cardvaluefly"
        fontSize={{ md: "20px", sm: "20px" }}
        fontWeight="700"
        lineHeight="100%"
        mb="20px"
      >
        {rest.cardValue} $
      </Text>

      <PieChart
        h="100%"
        w="100%"
        chartData={rest.pieChartDataProgress}
        chartOptions={pieChartOptions}
      />
      {/* <Flex align="center" justify="center">
        <Text
          fontSize="xs"
          color="secondaryGray.600"
          fontWeight="700"
          mt="15px"
        >
          Note:Pool Income is credited to user's at 12:00 AM UTC.
        </Text>
      </Flex> */}
    </Card>
  );
}
