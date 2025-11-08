import { Box, Button, HStack, Text } from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "+2349152811014";
const DEFAULT_MESSAGE = encodeURIComponent("Hi The Proxy Academy team! I'd love to ask a few questions.");
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${DEFAULT_MESSAGE}`;

const WhatsAppButton = () => {
  return (
    <Box
      position="fixed"
      bottom={{ base: 4, md: 6 }}
      right={{ base: 4, md: 6 }}
      zIndex="tooltip"
    >
      <Button
        as="a"
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        bg="linear-gradient(135deg, #25D366, #128C7E)"
        color="white"
        borderRadius="full"
        px={{ base: 4, md: 5 }}
        py={{ base: 3, md: 4 }}
        shadow="0 10px 30px rgba(18, 140, 126, 0.4)"
        _hover={{
          transform: "translateY(-2px)",
          shadow: "0 12px 35px rgba(18, 140, 126, 0.5)",
          bg: "linear-gradient(135deg, #1ebe5d, #0f6f63)",
        }}
        _active={{
          transform: "translateY(0)",
          shadow: "0 8px 20px rgba(18, 140, 126, 0.3)",
        }}
        transition="all 0.3s ease"
      >
        <HStack spacing={3}>
          <Box
            as={FaWhatsapp}
            boxSize={{ base: 5, md: 6 }}
            aria-hidden="true"
          />
          <Text
            fontWeight="semibold"
            fontSize={{ base: "sm", md: "md" }}
            display={{ base: "none", sm: "block" }}
          >
            Chat with us
          </Text>
        </HStack>
      </Button>
    </Box>
  );
};

export default WhatsAppButton;

