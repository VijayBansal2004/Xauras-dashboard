import React from "react";

// Chakra imports
import { Box, Flex, Heading, Text, useColorModeValue } from "@chakra-ui/react";

// Custom components
import Card from "../../../../components/card/Card";

// Icons
import { FaUser, FaUserAlt, FaUserShield } from "react-icons/fa";

export default function InvitationList() {
  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = useColorModeValue("gray.500", "gray.400");
  const bgColor = useColorModeValue("gray.50", "gray.700");

  const invitations = [
    { level: 1, address: "0x1234...abcd" },
    { level: 2, address: "0x5678...efgh" },
    { level: 3, address: "0x9abc...wxyz" },
  ];

  const getLevelIcon = (level) => {
    switch (level) {
      case 1:
        return <FaUser color="#e08cfd" />; // green
      case 2:
        return <FaUserAlt color="#e08cfd" />; // blue
      case 3:
        return <FaUserShield color="#e08cfd" />; // red
      default:
        return <FaUser />;
    }
  };

  return (
    <Card
      className="customcard"
      align="center"
      direction="column"
      w="100%"
      p="20px"
    >
      <Heading
        fontSize={{ md: "22px", sm: "20px" }}
        mb="30px"
        color={textColor}
        textAlign={{ md: "left", sm: "center" }}
        w="100%"
      >
        Invitation List
      </Heading>

      <Box w="100%">
        {invitations.length === 0 ? (
          <Text color={textColorSecondary}>No invitations yet.</Text>
        ) : (
          <Box>
            {invitations.map(({ level, address }, index) => (
              <Flex
                key={index}
                justify="space-between"
                px="15px"
                py="10px"
                mb="10px"
                className="grdcard"
                bg={bgColor}
                borderRadius="md"
                boxShadow="sm"
                fontSize="sm"
                color={textColor}
                alignItems="center"
              >
                <Flex alignItems="center" gap="8px">
                  {getLevelIcon(level)}
                  <Text>Level {level}</Text>
                </Flex>
                <Text fontWeight="700">{address}</Text>
              </Flex>
            ))}
          </Box>
        )}
      </Box>
    </Card>
  );
}
