import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Button,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const CustomModal = ({ isOpen, onClose, title, content, buttonText, link }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg" isCentered>
      <ModalOverlay bg="blackAlpha.600" />
      <ModalContent
        bg="white"
        p={6}
        borderRadius="md"
        shadow="lg"
        maxW="lg"
        w="full"
        position="relative"
      >
        <ModalHeader>
          <Text
            fontSize="2xl"
            fontWeight="bold"
            mb={4}
            fontFamily="'Syne', sans-serif"
            color="gray.800"
          >
            {title}
          </Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text mb={4} color="gray.600">
            {content}
          </Text>
          <Button
            as={Link}
            to={link}
            bg="green.600"
            color="white"
            px={4}
            py={2}
            borderRadius="full"
            _hover={{
              bg: "green.700",
            }}
            onClick={onClose}
          >
            {buttonText}
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CustomModal;
