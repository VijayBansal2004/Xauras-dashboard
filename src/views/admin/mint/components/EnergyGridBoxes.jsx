import React from 'react';
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
} from '@chakra-ui/react';
import { AiOutlineFolder, AiOutlineFile } from 'react-icons/ai';
import { RiShieldCheckLine } from 'react-icons/ri';
import { FaBurn } from 'react-icons/fa';

import Card from '../../../../components/card/Card';
import IconBox from '../../../../components/icons/IconBox';

export const EnergyGridBoxes = () => {
  const textColor = useColorModeValue('gray.700', 'white');
  const brandColor = useColorModeValue('brand.500', 'white');
  const boxBg = useColorModeValue(
    'linear-gradient(26deg, rgb(148 61 245) 6.14%, rgba(9,9,11,0) 77.64%)',
    'linear-gradient(26deg, rgb(148 61 245) 6.14%, rgba(9,9,11,0) 77.64%)',
  );
  // Chakra modal hook
  const { isOpen, onOpen, onClose } = useDisclosure();
  const menuItems = [
    {
      label: 'Pledge USDT',
      description: "Today's Index:",
      unit: '230%',
      icon: () => (
        <Box position="relative">
          <AiOutlineFolder size={32} />
          <RiShieldCheckLine
            size={16}
            style={{
              position: 'absolute',
              bottom: -2,
              right: -2,
              color: 'url(#grad)',
            }}
          />
        </Box>
      ),
    },
    {
      label: 'Burn USDT',
      description: "Today's Index:",
      unit: '460%',
      icon: () => (
        <Box position="relative">
          <AiOutlineFile size={32} />
          <FaBurn
            size={14}
            style={{
              position: 'absolute',
              bottom: -4,
              right: -2,
              color: 'red',
            }}
          />
        </Box>
      ),
    },
  ];

  return (
    <Box
      className=""
      display="flex"
      direction="row"
      flexWrap="wrap"
      justifyContent="space-between"
      w="100%"
      p="0"
      gap="15px"
      mt={{
        sm: '20px',
        md: '30px',
      }}
    >
      {menuItems.map((item, idx) => (
        <Card
          key={idx}
          width={{
            md: '48%',
            sm: '100%',
          }}
          className="customcard"
          direction="row"
          align="center"
          justify="space-between"
          borderRadius="6px"
          p={{
            sm: '25px',
            md: '25px',
          }}
        >
          <Flex align="center" direction="column" justify="center" gap="10px">
            <IconBox
              w="46px"
              h="46px"
              bg={boxBg}
              mb="15px"
              icon={
                <Icon w="32px" h="32px" as={item.icon} color={brandColor} />
              }
            />
            <Text
              fontWeight="bold"
              fontSize="lg"
              color={textColor}
              lineHeight="normal"
            >
              {item.label}
            </Text>
            <Text
              fontWeight="400"
              fontSize={{
                sm: 'sm',
                md: 'md',
              }}
              lineHeight="normal"
              color="secondaryGray.600"
            >
              {item.description} {item.unit}
            </Text>
            <FormControl my="10px">
              <Flex className="labelfield" py="12px" px="12px">
                <Input type="text" placeholder="0" className="form-control" />
                <FormLabel>Max</FormLabel>
              </Flex>
            </FormControl>
            <Button
              variant="darkBrand"
              color="white"
              fontSize="sm"
              fontWeight="500"
              borderRadius="70px"
              px="20px"
              py="6px"
              width="100%"
              height="38px"
              onClick={onOpen}
            >
              Approve
            </Button>
          </Flex>
        </Card>
      ))}

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
