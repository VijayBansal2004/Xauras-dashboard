// Chakra imports
// Chakra imports
import {
  Flex,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
// Custom components
import Card from "../../components/card/Card";
// Custom icons
import React from "react";

export default function Default(props) {
  const { startContent, endContent, name, growth, value, subtext } = props;
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "white";

  return (
    <Card className="customcard" py="20px">
      <Flex
        my="auto"
        h="100%"
        align={{ base: "center", xl: "start" }}
        justify={{ base: "center", xl: "center" }}
      >
        {startContent}

        <Stat my="auto" ms={startContent ? "18px" : "0px"}>
          <StatLabel
            lineHeight="100%"
            color={textColorSecondary}
            fontWeight="500"
            mb="10px"
            fontSize={{
              base: "sm",
            }}
          >
            {name}
          </StatLabel>
          <StatNumber
            color={textColor}
            fontSize={{
              base: "2xl",
            }}
          >
            {value}
          </StatNumber>
          <Flex align="center">
            {growth && (
              <Text color="green.500" fontSize="xs" fontWeight="700" me="5px">
                {growth}
              </Text>
            )}
            {subtext && (
              <Text color="secondaryGray.600" fontSize="xs" fontWeight="400">
                {subtext}
              </Text>
            )}
          </Flex>
        </Stat>
        <Flex ms="auto" w="max-content">
          {endContent}
        </Flex>
      </Flex>
    </Card>
  );
}
