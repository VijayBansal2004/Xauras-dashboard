// views/admin/mint/components/AdaiSwap.js
import React from "react";

// Chakra imports
import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  SimpleGrid,
  Text,
  Image,
  useColorModeValue,
  FormControl,
  Input,
  FormLabel,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  useDisclosure,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import token from "../../../../assets/img/token.png";
// Custom components
import Card from "../../../../components/card/Card";
const AdaiSwap = () => {
  // Chakra modal hook
  const { isOpen, onOpen, onClose } = useDisclosure();
  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  return (
    <Box pt={{ base: "30px", md: "30px", xl: "30px" }}>
      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px" mb="20px">
        <Card
          className="customcard"
          direction="column"
          w="100%"
          textAlign="center"
          p={{
            sm: "20px",
            md: "25px",
          }}
        >
          <Heading
            fontSize={{ md: "22px", sm: "20px" }}
            mb="30px"
            color={textColor}
            textAlign="center"
            w="100%"
          >
            Exchange Pool
          </Heading>
          <Flex
            align="center"
            justify={{
              md: "space-between",
              sm: "center",
            }}
            direction={{
              md: "row",
              sm: "column",
            }}
            gap="20px"
          >
            <Box>
              <Flex direction="column" gap="0px">
                <Text color={textColor} fontWeight="600" fontSize="md">
                  A
                </Text>
                <Text color={textColor} fontWeight="600" fontSize="md">
                  5846
                </Text>
              </Flex>
              <Flex flexDir="column" align="center" justify="center" mt="10px">
                <Image
                  src="https://i.giphy.com/8w61HSu6xQjoa2NzKN.webp"
                  alt="image1"
                  width="150px"
                  borderRadius="10px"
                  objectFit="cover"
                  height="200px"
                  mb="10px"
                />
              </Flex>
            </Box>

            <Box>
              <Flex direction="column" gap="0px">
                <Text color={textColor} fontWeight="600" fontSize="md">
                  DAI
                </Text>

                <Text color={textColor} fontWeight="600" fontSize="md">
                  2994155
                </Text>
              </Flex>
              <Flex flexDir="column" align="center" justify="center" mt="10px">
                <Image
                  src="https://i.giphy.com/hFhygTRHt4jvGQo52q.webp"
                  alt="image1"
                  width="150px"
                  borderRadius="10px"
                  objectFit="cover"
                  height="200px"
                  mb="10px"
                />
              </Flex>
            </Box>
          </Flex>
          <Flex align="center" direction="column" justify="center" gap="10px">
            <FormControl mt="40px">
              <Flex className="labelfield rightlabel" py="20px" px="15px">
                <FormLabel>
                  <Flex align="center" gap="15px">
                    <Image
                      src={token}
                      alt="image1"
                      width="30px"
                      borderRadius="50%"
                      objectFit="cover"
                      height="30px"
                    />
                    <Flex direction="column" gap="5px">
                      <Text fontSize="md" fontWeight="600">
                        A
                      </Text>
                      <Text fontSize="xs" whiteSpace="nowrap">
                        Balance: 0.0000
                      </Text>
                    </Flex>
                  </Flex>
                </FormLabel>
                <Flex direction="column" gap="5px">
                  <Input
                    type="text"
                    placeholder="Amount"
                    value="0"
                    className="form-control"
                    textAlign="right"
                  />
                  <Text
                    fontSize="xs"
                    textAlign="right"
                    whiteSpace="nowrap"
                    className="redbadge"
                  >
                    Max
                  </Text>
                </Flex>
              </Flex>
            </FormControl>
            <Button
              variant="darkBrand"
              color="white"
              fontSize="md"
              fontWeight="500"
              borderRadius="120px"
              px="20px"
              py="6px"
              mt="10px"
              width="100%"
              height="50px"
              onClick={onOpen}
            >
              Approve
            </Button>
          </Flex>
        </Card>

        <Card className="customcard" w="100%">
          <Text fontSize="md">
            To ensure the authenticity and effectiveness of Stablecoin A's
            pegged issuance mechanism, and to guarantee the transparency and
            verifiability of the A ecosystem's operations, ORIGIN has
            successfully carried out the following actions on the Polygon PoS
            chain, These serve as on-chain proof of reserve for the A/DAI
            reserve swap pool. Please refer to:
          </Text>
          <Flex mt="20px" direction="row" gap={{ md: "25px", sm: "10px" }}>
            <Button
              variant="darkBrand"
              color="white"
              fontSize="sm"
              fontWeight="500"
              borderRadius="120px"
              px="20px"
              py="6px"
              mt="10px"
              width="100%"
              height="38px"
            >
              Anchor Pool
            </Button>
            <Button
              variant="darkBrand"
              color="white"
              fontSize="sm"
              fontWeight="500"
              borderRadius="120px"
              px="20px"
              py="6px"
              mt="10px"
              width="100%"
              height="38px"
            >
              Contract Audit
            </Button>
          </Flex>
        </Card>
      </SimpleGrid>
      {/* Modal */}
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        closeOnOverlayClick={false}
        className="darkmodal"
      >
        <ModalOverlay />
        <ModalContent borderRadius="20px" p="4" className="custommodal">
          <ModalHeader
            textAlign="center"
            color={textColor}
            className="customheader noborder"
            fontSize="md"
          >
            Approve
            <ModalCloseButton className="closeicon" />
          </ModalHeader>

          <ModalBody className="custommodalbody">
            <Card
              mt="0"
              display="flex"
              gap="20px"
              p="15px 12px"
              flexDirection="column"
              className="customcard"
            >
              <Flex
                align="center"
                direction="row"
                justify="space-between"
                gap="5px"
              >
                <Text
                  fontSize="sm"
                  color={textColor}
                  fontWeight="400"
                  lineHeight="normal"
                >
                  Asset
                </Text>
                <Text
                  fontSize="sm"
                  color={textColor}
                  lineHeight="normal"
                  textAlign="right"
                  fontWeight="500"
                >
                  Polygon (POL)
                </Text>
              </Flex>
              <Flex
                direction="row"
                align="center"
                justify="space-between"
                gap="5px"
              >
                <Text
                  fontSize="sm"
                  color={textColor}
                  fontWeight="400"
                  lineHeight="normal"
                >
                  From
                </Text>
                <Text
                  fontSize="sm"
                  color={textColor}
                  textAlign="right"
                  lineHeight="normal"
                  fontWeight="500"
                >
                  Main Wallet 1
                  <Text
                    fontSize="sm"
                    color="secondaryGray.600"
                    textAlign="right"
                    lineHeight="normal"
                    fontWeight="500"
                  >
                    0x1234...abcd
                  </Text>
                </Text>
              </Flex>
              <Flex
                direction="row"
                align="center"
                justify="space-between"
                gap="5px"
              >
                <Text
                  fontSize="sm"
                  color={textColor}
                  fontWeight="400"
                  lineHeight="normal"
                >
                  Contract Address
                </Text>
                <Text
                  fontSize="sm"
                  color={textColor}
                  textAlign="right"
                  lineHeight="normal"
                  fontWeight="500"
                >
                  0x1234...abcd
                </Text>
              </Flex>
              <Flex
                direction="row"
                align="center"
                justify="space-between"
                gap="5px"
              >
                <Text
                  fontSize="sm"
                  color={textColor}
                  fontWeight="400"
                  lineHeight="normal"
                >
                  Network
                </Text>
                <Text
                  fontSize="sm"
                  color={textColor}
                  textAlign="right"
                  lineHeight="normal"
                  fontWeight="500"
                >
                  Polygon
                </Text>
              </Flex>
              <Flex
                direction="row"
                align="center"
                justify="space-between"
                gap="5px"
              >
                <Text
                  fontSize="sm"
                  color={textColor}
                  fontWeight="400"
                  lineHeight="normal"
                >
                  DApp
                </Text>
                <Text
                  fontSize="sm"
                  color={textColor}
                  textAlign="right"
                  lineHeight="normal"
                  fontWeight="500"
                >
                  rocket.origindefi.io
                </Text>
              </Flex>
            </Card>
            <Card
              mt="20px"
              display="flex"
              gap="10px"
              p="12px"
              flexDirection="column"
              className="customcard"
            >
              <Flex
                direction="row"
                align="center"
                justify="space-between"
                gap="5px"
              >
                <Text
                  fontSize="sm"
                  color={textColor}
                  fontWeight="400"
                  lineHeight="normal"
                >
                  Network Fee
                </Text>
                <Text
                  fontSize="sm"
                  color={textColor}
                  lineHeight="normal"
                  textAlign="right"
                  fontWeight="600"
                >
                  $0.00
                  <Text
                    fontSize="xs"
                    mt="5px"
                    color="secondaryGray.600"
                    lineHeight="normal"
                    textAlign="right"
                    fontWeight="500"
                  >
                    0.00139719 POL
                  </Text>
                </Text>
              </Flex>
            </Card>
          </ModalBody>

          <ModalFooter>
            <Button
              variant="darkBrand"
              color="white"
              fontSize="sm"
              fontWeight="500"
              justifyContent="center"
              borderRadius="70px"
              my="10px"
              px="24px"
              py="5px"
              width="100%"
              aria-label="Approve"
            >
              Approve
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default AdaiSwap;
