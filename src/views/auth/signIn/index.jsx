import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useColorModeValue,
} from '@chakra-ui/react';
// Custom components
import DefaultAuth from '../../../layouts/auth/Default';

function SignIn() {
  const textColor = useColorModeValue('navy.700', 'white');
  const textColorSecondary = 'gray.400';

  // Chakra modal hook
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <DefaultAuth>
      <Flex
        maxW={{ base: '100%', md: 'max-content' }}
        w="100%"
        mx={{ base: 'auto', lg: 'auto' }}
        me="auto"
        h="100%"
        alignItems="center"
        justifyContent="center"
        mt={{ base: '0', md: '10vh' }}
        flexDirection="column"
      >
        <Flex
          zIndex="2"
          alignItems="center"
          direction="column"
          justifyContent="center"
          w={{ base: '100%', md: '420px' }}
          maxW="100%"
          background="transparent"
          borderRadius="15px"
          mx={{ base: 'auto', lg: 'auto' }}
          mb={{ base: '20px', md: 'auto' }}
        >
          {/* Sign In button */}
          <Button
            fontSize="md"
            variant="brand"
            fontWeight="500"
            borderRadius="120px"
            w="100%"
            h="50"
            mb="24px"
            // onClick={onOpen}
          >
            Sign By Wallet
          </Button>
        </Flex>
      </Flex>

      {/* Modal */}
      {/* <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        closeOnOverlayClick={false}
      >
        <ModalOverlay />
        <ModalContent borderRadius="20px" p="4">
          <ModalHeader textAlign="center" color={textColor}>
            Sign In
          </ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <FormControl mb="4">
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="Enter your email" />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input type="password" placeholder="Enter your password" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Login</Button>
          </ModalFooter>
        </ModalContent>
      </Modal> */}
    </DefaultAuth>
  );
}

export default SignIn;
