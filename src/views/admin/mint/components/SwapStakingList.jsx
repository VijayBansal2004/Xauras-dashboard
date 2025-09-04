import React from "react";
import {
  Flex,
  Text,
  Icon,
  useColorModeValue,
  Button,
  Heading,
  Box,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  useDisclosure,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";


import { AiOutlineHome } from "react-icons/ai";

import Card from "../../../../components/card/Card";
import IconBox from "../../../../components/icons/IconBox";

export const SwapStakingList = () => {
  const textColor = useColorModeValue("gray.700", "white");
  const pinkColor = "#e490fc";
  const darkPinkColor = "#b36bff";
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue(
    "linear-gradient(26deg, rgb(148 61 245) 6.14%, rgba(9,9,11,0) 77.64%)",
    "linear-gradient(26deg, rgb(148 61 245) 6.14%, rgba(9,9,11,0) 77.64%)"
  );
  // Chakra modal hook
  const { isOpen, onOpen, onClose } = useDisclosure();
  const menuItems = [
    {
      label: "120",
      unit: "days",
      rate1: "0.65%",
      rate2: "14.66%",
      icon: AiOutlineHome,
    },
    {
      label: "240",
      unit: "days",
      rate1: "1.39%",
      rate2: "2.60%",
      icon: AiOutlineHome,
    },
    {
      label: "360",
      unit: "days",
      rate1: "2.5%",
      rate2: "62.80%",
      icon: AiOutlineHome,
    },
  ];
  const tokenstaking = [
    {
      label: "120",
      unit: "days",
      rate1: "0.65%",
      rate2: "14.66%",
      icon: AiOutlineHome,
    },
  ];

  return (
    <Card
      className="customcard mintcardview"
      direction="column"
      w="100%"
      p="25px"
      gap="12px"
      mt={ {
        sm: "20px",
        md: "30px",
      } }>
      <Heading
        fontSize={ {
          sm: "20px",
          md: "22px",
        } }
        mb="15px"
        color={ textColor }
        textAlign="center"
        w="100%"
        fontWeight="600">
        Claim History
      </Heading>

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
        } }>
        <Thead>
          <Tr>
            <Th color="gray.400">DATETIME</Th>
            <Th color="gray.400">PACKAGE ID</Th>
            <Th color="gray.400">BOOSTER BONUS</Th>
            <Th color="gray.400">EXPIRED</Th>
          </Tr>
        </Thead>
        <Tbody>
          { menuItems?.map((item, idx) => {
            return (
              <>
                <Tr key={ idx }>
                  <Td textColor="white">
                    { item?.label } / { item?.unit }
                  </Td>
                  <Td textColor="white">{ item?.rate1 }</Td>
                  <Td textColor="white">{ item?.rate2 }</Td>
                  <Td textColor="white">
                    <Button
                      variant="darkBrand"
                      color="white"
                      fontSize="sm"
                      fontWeight="500"
                      borderRadius="70px"
                      px="20px"
                      py="6px"
                      minW="50px"
                      height="35px"
                      onClick={ onOpen }>
                      Stake
                    </Button>
                  </Td>
                </Tr>
              </>
            );
          }) }
        </Tbody>
      </Table>

      <Flex justify="center" gap="10px" px="20px" py="7px">
        <Button onClick={ null } isDisabled="true">
          Prev
        </Button>
        <Text alignSelf="center">Page 5</Text>
        <Button onClick={ null } isDisabled="false">
          Next
        </Button>
      </Flex>

      {/* { menuItems.map((item, idx) => (
        <Card
          key={ idx }
          className="customcard grdcard"
          direction="row"
          align="center"
          justify="space-between"
          borderRadius="6px"
          p={ {
            sm: "15px",
            md: "15px",
          } }>
          <Flex align="center" justify="space-between" gap="15px">
            <Flex align="center">
              <IconBox
                w="36px"
                h="36px"
                bg={ boxBg }
                icon={
                  <Icon w="22px" h="22px" as={ item.icon } color={ brandColor } />
                }
                me={ {
                  sm: "5px",
                  md: "10px",
                } }
              />
              <Text fontWeight="bold" fontSize="md" color={ textColor }>
                { item.label }
                <Text
                  as="span"
                  fontWeight="normal"
                  fontSize="sm"
                  color={ textColor }
                  ml="2px">
                  /{ item.unit }
                </Text>
              </Text>
              <Flex
                align="center"
                ml="10px"
                gap={ {
                  md: "8px",
                  sm: "4px",
                } }
                flexWrap={ {
                  sm: "no-wrap",
                } }>
                <Text
                  fontWeight="600"
                  fontSize={ {
                    sm: "sm",
                    md: "md",
                  } }
                  lineHeight="normal"
                  color={ pinkColor }>
                  { item.rate1 }
                </Text>
                <Text
                  fontWeight="600"
                  fontSize={ {
                    sm: "sm",
                    md: "md",
                  } }
                  lineHeight="normal"
                  color={ darkPinkColor }>
                  { item.rate2 }
                </Text>
              </Flex>
            </Flex>

            <Button
              variant="darkBrand"
              color="white"
              fontSize="sm"
              fontWeight="500"
              borderRadius="70px"
              px="20px"
              py="6px"
              minW="50px"
              height="35px"
              onClick={ onOpen }>
              Stake
            </Button>
          </Flex>
        </Card>
      )) } */}

      {/* <Heading
        fontSize={{
          sm: '20px',
          md: '22px',
        }}
        mt="30px"
        mb="15px"
        color={textColor}
        textAlign="center"
        fontWeight="600"
        w="100%"
      >
        Token Staking
      </Heading>
      {tokenstaking.map((item, idx) => (
        <Card
          key={idx}
          className="customcard grdcard fillcard"
          direction="row"
          align="center"
          justify="space-between"
          borderRadius="6px"
          p={{
            sm: '15px',
            md: '15px',
          }}
        >
          <Flex align="center" justify="space-between" gap="15px">
            <Flex align="center">
              <IconBox
                w="36px"
                h="36px"
                bg={boxBg}
                icon={
                  <Icon w="22px" h="22px" as={item.icon} color={brandColor} />
                }
                me={{
                  sm: '5px',
                  md: '10px',
                }}
              />
              <Text fontWeight="bold" fontSize="md" color={textColor}>
                {item.label}
                <Text
                  as="span"
                  fontWeight="normal"
                  fontSize="sm"
                  color={textColor}
                  ml="2px"
                >
                  /{item.unit}
                </Text>
              </Text>
              <Flex
                align="center"
                ml="10px"
                gap={{
                  md: '8px',
                  sm: '4px',
                }}
                flexWrap={{
                  sm: 'no-wrap',
                }}
              >
                <Text
                  fontWeight="600"
                  fontSize={{
                    sm: 'sm',
                    md: 'md',
                  }}
                  lineHeight="normal"
                  color={pinkColor}
                >
                  {item.rate1}
                </Text>
                <Text
                  fontWeight="600"
                  fontSize={{
                    sm: 'sm',
                    md: 'md',
                  }}
                  lineHeight="normal"
                  color={darkPinkColor}
                >
                  {item.rate2}
                </Text>
              </Flex>
            </Flex>

            <Button
              variant="darkBrand"
              color="white"
              fontSize="sm"
              fontWeight="500"
              borderRadius="70px"
              px="20px"
              py="6px"
              minW="50px"
              height="35px"
              onClick={onOpen}
            >
              Stake
            </Button>
          </Flex>
        </Card>
      ))} */}
      {/* Modal */ }
      <Modal
        isOpen={ isOpen }
        onClose={ onClose }
        isCentered
        closeOnOverlayClick={ false }
        className="darkmodal">
        <ModalOverlay />
        <ModalContent borderRadius="20px" p="4" className="custommodal">
          <ModalHeader
            textAlign="center"
            color={ textColor }
            className="customheader"
            fontSize="md">
            Claim A Airdrop Rewards
            <ModalCloseButton className="closeicon" />
          </ModalHeader>

          <ModalBody className="custommodalbody">
            <Flex
              align="center"
              mt="10px"
              gap={ {
                md: "8px",
                sm: "4px",
              } }
              flexDirection="column">
              <Text
                fontWeight="400"
                fontSize="sm"
                lineHeight="normal"
                color={ textColor }>
                AStake Amount
              </Text>
              <Text
                fontWeight="700"
                fontSize="xl"
                lineHeight="normal"
                color={ textColor }>
                $3,170,047.37
              </Text>
            </Flex>
            <Flex
              align="center"
              mt="30px"
              gap={ {
                md: "8px",
                sm: "4px",
              } }
              flexDirection="column">
              <Text
                fontWeight="400"
                fontSize="sm"
                lineHeight="normal"
                color={ textColor }>
                USDT Price
              </Text>
              <Text
                fontWeight="700"
                fontSize="xl"
                lineHeight="normal"
                color={ textColor }>
                $11.4227
              </Text>
            </Flex>
            <FormControl mt="30px" mb="20px">
              <Flex className="labelfield">
                <Input
                  type="text"
                  placeholder="Min 500 DAI"
                  className="form-control"
                />
                <FormLabel>Max &nbsp; | &nbsp; DAI</FormLabel>
              </Flex>
            </FormControl>
            <Button
              variant="darkBrand"
              color="white"
              fontSize="sm"
              fontWeight="500"
              borderRadius="6px"
              px="20px"
              py="6px"
              width="100%"
              height="55px">
              Approve
            </Button>
            <Button
              variant="darkBrand"
              color="white"
              fontSize="sm"
              fontWeight="500"
              mt="20px"
              borderRadius="6px"
              px="20px"
              py="6px"
              width="100%"
              className="outlinebtn"
              height="55px">
              Revoke Approve 0
            </Button>
            <Flex direction="column" mt="25px">
              <Text
                fontSize="13px"
                color="secondaryGray.600"
                fontWeight="500"
                mb="5px">
                Notice:
              </Text>
              <Text fontSize="13px" color="secondaryGray.600" fontWeight="500">
                1. First time participate <strong>12 A Stake?</strong>
              </Text>
              <Text fontSize="13px" color="secondaryGray.600" fontWeight="500">
                2. Please approve Origin to use your DAI for A Stake.
              </Text>
            </Flex>
            <Box mt="25px" display="flex" gap="10px" flexDirection="column">
              <Flex direction="row" justify="space-between" gap="5px">
                <Text
                  fontSize="13px"
                  color={ textColor }
                  fontWeight="600"
                  lineHeight="normal">
                  Your Balance
                </Text>
                <Text
                  fontSize="13px"
                  color={ textColor }
                  lineHeight="normal"
                  textAlign="right"
                  fontWeight="600">
                  0.00 DAI
                </Text>
              </Flex>
              <Flex direction="row" justify="space-between" gap="5px">
                <Text
                  fontSize="13px"
                  color={ textColor }
                  fontWeight="600"
                  lineHeight="normal">
                  Minimum Amount You Should Spent
                </Text>
                <Text
                  fontSize="13px"
                  color={ textColor }
                  textAlign="right"
                  lineHeight="normal"
                  fontWeight="600">
                  500.00 DAI
                </Text>
              </Flex>
            </Box>
          </ModalBody>

          <ModalFooter>
            {/* <Button variant="ghost" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Login</Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Card>
  );
};
