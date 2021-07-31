import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import SignUp from './SignUp';

import React, { Component, useCallback, useEffect, useState } from 'react';

const SignUpLoginModal = ({ modal, handleModal }) => {
  const [isOpen, setIsOpen] = useState();
  const onClose = () => {
    setIsOpen(false);
    handleModal(false);
  }

  const onOpen = () => setIsOpen(true);

  useEffect(() => {
    if (modal === true) {
      onOpen();
    }
  }, []);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent style={{backgroundColor: "transparent"}}>
          <ModalBody style={{padding: "0"}}>
            <SignUp />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SignUpLoginModal;
