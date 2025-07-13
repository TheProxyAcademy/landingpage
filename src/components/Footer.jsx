import { Box, Container, Text, HStack, Link, Icon, Flex } from "@chakra-ui/react";
import { BsLinkedin, BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import Logo from "../assets/icon.svg";

export default function Component() {
  return (
    <Box as="footer" bg="gray.50" borderTop="1px" borderColor="gray.200" mt={20}>
      <Container maxW="7xl" py={5} px={{ base: 5, lg: 20 }}>
        <HStack spacing={3} mb={5} fontWeight="semibold">
          <Box as="img" src={Logo} alt="The Proxy Academy Logo" h={10} />
          <Text 
            textTransform="uppercase" 
            fontFamily="Raleway, sans-serif"
            fontSize="2xl"
          >
            The Proxy Academy
          </Text>
        </HStack>
        
        <Box 
          w={{ base: "full", lg: "40%" }} 
          mb={5} 
          fontFamily="Raleway, sans-serif"
        >
          <Text>
            For further enquries or information, Speak to one of our experts to
            help you make the right choice.
          </Text>
          <Text mt={5}>
            <Text as="span" fontWeight="semibold">Send a WhatsApp message:</Text> +2348174453349/+2349152811014 Email:
            Support@theproxyacademy.com
          </Text>
        </Box>
        
        <Box h="1px" bg="gray.200" my={5} />
        
        <Flex 
          w="full" 
          direction={{ base: "column", sm: "row" }} 
          align="center" 
          justify="space-between" 
          pt={5}
        >
          <Text 
            fontFamily="Raleway, sans-serif"
            fontSize="sm"
            color="gray.600"
          >
            © 2025 The Proxy Academy Ltd. All rights reserved.
          </Text>
          
          <HStack spacing={6} mt={{ base: 4, sm: 0 }}>
            <Link 
              href="https://www.facebook.com/theproxyacademy" 
              isExternal
              _hover={{ color: "blue.500" }}
            >
              <Icon as={BsFacebook} boxSize={5} />
            </Link>
            <Link 
              href="https://www.instagram.com/theproxyacademy/" 
              isExternal
              _hover={{ color: "pink.500" }}
            >
              <Icon as={BsInstagram} boxSize={5} />
            </Link>
            <Link 
              href="https://x.com/theproxyacademy" 
              isExternal
              _hover={{ color: "blue.400" }}
            >
              <Icon as={BsTwitter} boxSize={5} />
            </Link>
            <Link 
              href="https://www.linkedin.com/company/the-proxy-academy/" 
              isExternal
              _hover={{ color: "blue.600" }}
            >
              <Icon as={BsLinkedin} boxSize={5} />
            </Link>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}
