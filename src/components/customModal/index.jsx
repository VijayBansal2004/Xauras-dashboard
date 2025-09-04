import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react';

function CustomModal({ isOpen, onClose, title, body, footer, size = 'md', isCentered = true }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered={isCentered} size={size}>
      <ModalOverlay />
      <ModalContent>
        {title && <ModalHeader>{title}</ModalHeader>}
        <ModalCloseButton />
        {body && <ModalBody>{body}</ModalBody>}
        {footer && <ModalFooter>{footer}</ModalFooter>}
      </ModalContent>
    </Modal>
  );
}

export default CustomModal;
