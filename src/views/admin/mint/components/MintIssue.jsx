// views/admin/mint/components/MintIssue.js
import React from 'react';

// Chakra imports
import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
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
  SimpleGrid,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

// Custom components
import Card from '../../../../components/card/Card';
import { SwapStakingList } from './SwapStakingList';
import TableTabs from './TableTabs';
import ReceivingList from './ReceivingList';
const MintIssue = () => {
  // Chakra modal hook
  const { isOpen, onOpen, onClose } = useDisclosure();
  // Chakra Color Mode
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  return (
    <Box pt={{ base: '30px', md: '30px', xl: '30px' }}>
      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px" mb="20px">
        <Box position="relative">
          <Card
            className="customcard"
            align="center"
            justifyContent="space-around"
            direction="column"
            w="100%"
            p={{
              sm: '35px 20px',
              md: '40px 25px',
            }}
            overflow="hidden"
          >
            <Flex
              flexDirection="column"
              align="center"
              justifyContent="center"
              textAlign="center"
              position="relative"
              zIndex="1"
            >
              <Flex align="end">
                <Text
                  color={textColor}
                  fontSize="22px"
                  lineHeight="normal"
                  fontWeight="500"
                >
                  Use USDT Mint A<br />{' '}
                  <strong>Mint Privay Protected Token A</strong>
                </Text>
              </Flex>
            </Flex>

            <div className="gradient-bg">
              <svg xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <filter id="goo">
                    <feGaussianBlur
                      in="SourceGraphic"
                      stdDeviation="10"
                      result="blur"
                    />
                    <feColorMatrix
                      in="blur"
                      mode="matrix"
                      values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                      result="goo"
                    />
                    <feBlend in="SourceGraphic" in2="goo" />
                  </filter>
                </defs>
              </svg>
              <div className="gradients-container">
                <div className="g1"></div>
                <div className="g2"></div>
                <div className="g3"></div>
                <div className="g4"></div>
                <div className="g5"></div>
                <div className="interactive"></div>
              </div>
              <div className="gradients-container">
                <div className="g1"></div>
                <div className="g2"></div>
                <div className="g3"></div>
                <div className="g4"></div>
                <div className="g5"></div>
                <div className="interactive"></div>
              </div>
            </div>
          </Card>
          <FormControl mt="40px">
            <Flex className="labelfield" py="20px" px="15px">
              <Input
                type="text"
                placeholder="Amount"
                className="form-control"
              />
              <FormLabel>Max</FormLabel>
            </Flex>
          </FormControl>
          <Flex
            direction="row"
            align="center"
            justify="space-between"
            gap="5px"
            mt="15px"
          >
            <Text
              fontSize="sm"
              color={textColor}
              fontWeight="400"
              lineHeight="normal"
            >
              Balance: 0.0000 USDT
            </Text>
            <Text
              fontSize="sm"
              color={textColor}
              textAlign="right"
              lineHeight="normal"
              fontWeight="400"
            >
              You will get: 0.00A
            </Text>
          </Flex>
          <Button
            variant="darkBrand"
            color="white"
            fontSize="md"
            fontWeight="500"
            borderRadius="120px"
            px="20px"
            py="6px"
            mt="40px"
            width="100%"
            height="55px"
            onClick={onOpen}
          >
            Approve
          </Button>
        </Box>
        <TableTabs tabs={[{ label: 'Mintng Records', content: '' }]} />
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

export default MintIssue;
