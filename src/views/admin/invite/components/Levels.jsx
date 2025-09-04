import React from "react";

// Chakra imports
import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Text,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
  SimpleGrid,
} from "@chakra-ui/react";

// Custom components
import Card from "../../../../components/card/Card";
import { Link } from "react-router-dom";

export default function Levels({ data }) {
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "white";

  return (
    <Card className="customcard" mb="20px">
      <Heading
        fontSize={{ md: "22px", sm: "20px" }}
        mb="30px"
        color={textColor}
        textAlign={{ md: "left", sm: "center" }}
      >
        Level Breakdown
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 5, lg: 5 }} gap="20px">
        {Array.from({ length: 20 }).map((_, i) => (
          <Card className="customcard pinkborder" p="0">
            <Flex
              my="auto"
              align={{ base: "center", xl: "start" }}
              justify="space-between"
              className="grdcardopp"
              py="10px"
              px="15px"
            >
              <Text fontSize="sm" fontWeight="600">
                {`Level ${i + 1}`}
              </Text>
              {/* <Text
                fontSize="xs"
                fontWeight="500"
                color="#e08cfd"
                display="flex"
                alignItems="center"
                gap="4px"
              >
                <Link to="/admin/tree">View Details</Link>
                <svg
                  width="7"
                  height="11"
                  viewBox="0 0 7 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.10275 4.7936C6.29002 4.9811 6.39521 5.23527 6.39521 5.50027C6.39521 5.76527 6.29002 6.01943 6.10275 6.20693L2.33208 9.97893C2.14449 10.1664 1.89009 10.2717 1.62485 10.2717C1.35961 10.2716 1.10526 10.1662 0.917752 9.9786C0.730244 9.791 0.624938 9.5366 0.625 9.27136C0.625063 9.00613 0.730488 8.75177 0.918085 8.56427L3.98208 5.50027L0.918085 2.43627C0.735836 2.24775 0.634921 1.9952 0.637075 1.733C0.639229 1.4708 0.744279 1.21993 0.929601 1.03444C1.11492 0.848941 1.36569 0.743654 1.62788 0.741253C1.89008 0.738852 2.14273 0.839529 2.33142 1.0216L6.10342 4.79293L6.10275 4.7936Z"
                    fill="#e08cfd"
                  />
                </svg>
              </Text> */}
            </Flex>
            <Flex py="20px" px="15px" gap="10px" direction="column">
              <Flex gap="5px">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.4974 8.33366C9.33835 8.33366 10.8307 6.84128 10.8307 5.00033C10.8307 3.15938 9.33835 1.66699 7.4974 1.66699C5.65645 1.66699 4.16406 3.15938 4.16406 5.00033C4.16406 6.84128 5.65645 8.33366 7.4974 8.33366Z"
                    stroke="#958e9e"
                    stroke-width="1.5"
                  />
                  <path
                    d="M10.4141 3.6175C10.711 3.17008 11.1442 2.83018 11.6493 2.6481C12.1545 2.46602 12.7049 2.45144 13.219 2.60653C13.7331 2.76162 14.1837 3.07813 14.5039 3.5092C14.8241 3.94028 14.997 4.463 14.997 5C14.997 5.537 14.8241 6.05972 14.5039 6.4908C14.1837 6.92187 13.7331 7.23838 13.219 7.39347C12.7049 7.54856 12.1545 7.53398 11.6493 7.3519C11.1442 7.16982 10.711 6.82992 10.4141 6.3825"
                    stroke="#958e9e"
                    stroke-width="1.5"
                  />
                  <path
                    d="M7.4974 17.5007C10.7191 17.5007 13.3307 16.0083 13.3307 14.1673C13.3307 12.3264 10.7191 10.834 7.4974 10.834C4.27573 10.834 1.66406 12.3264 1.66406 14.1673C1.66406 16.0083 4.27573 17.5007 7.4974 17.5007Z"
                    stroke="#958e9e"
                    stroke-width="1.5"
                  />
                  <path
                    d="M15 11.667C16.4617 11.9878 17.5 12.7995 17.5 13.7503C17.5 14.6087 16.655 15.3528 15.4167 15.7253"
                    stroke="#958e9e"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>

                <Text fontSize="sm" fontWeight="400">
                  {data?.[i]?.count || 0}
                </Text>
              </Flex>
              <Flex gap="5px">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_2427_5916)">
                    <path
                      d="M9.9974 18.3337C14.5998 18.3337 18.3307 14.6027 18.3307 10.0003C18.3307 5.39795 14.5998 1.66699 9.9974 1.66699C5.39502 1.66699 1.66406 5.39795 1.66406 10.0003C1.66406 14.6027 5.39502 18.3337 9.9974 18.3337Z"
                      stroke="#958e9e"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10 5V15M12.5 7.91667C12.5 6.76667 11.3808 5.83333 10 5.83333C8.61917 5.83333 7.5 6.76667 7.5 7.91667C7.5 9.06667 8.61917 10 10 10C11.3808 10 12.5 10.9333 12.5 12.0833C12.5 13.2333 11.3808 14.1667 10 14.1667C8.61917 14.1667 7.5 13.2333 7.5 12.0833"
                      stroke="#958e9e"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2427_5916">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <Text fontSize="sm" fontWeight="400">
                  $ {data?.[i]?.income || 0}
                </Text>
              </Flex>
            </Flex>
          </Card>
        ))}
      </SimpleGrid>
    </Card>
  );
}
