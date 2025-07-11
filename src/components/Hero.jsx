import React from "react";
import { Box, Flex, VStack, Text, Button, Image, Container } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import BoyIllustration from "../assets/boy.png";

function Hero() {
  return (
    <Box
      h="100vh"
      w="full"
      bgImage="url('/src/assets/hero-bg.png')"
      bgSize="100%"
      bgRepeat="no-repeat"
      position="relative"
      display="flex"
      flexDirection="column"
      justifyContent={{ base: "flex-start", md: "center" }}
      className="hero"
    >
      <Container maxW="1440px" px={{ base: 10, lg: 20 }}>
        <Box w={{ base: "full", md: "50%", xl: "40%" }} mb={5} pt={{ base: 24, md: 0 }}>
          <VStack align="flex-start" spacing={0}>
            <Text
              fontFamily="title"
              color="dark"
              textTransform="uppercase"
              fontWeight="bold"
              lineHeight="1.1"
              fontSize={{ base: "14px", lg: "16px" }}
            >
              Empower the Future:
            </Text>
            <Text
              fontFamily="title"
              color="dark"
              textTransform="uppercase"
              fontWeight="bold"
              lineHeight="1.1"
              fontSize={{ base: "24px", lg: "38px" }}
            >
              Leading Tech Classes for Kids
            </Text>
          </VStack>
          <Text 
            mt={4}
            fontSize={{ base: "12px", lg: "14px" }}
            color="gray.700"
          >
            Join us in shaping the next generation of tech leaders and
            innovators. Start their journey to success today, no matter where
            you are in the world!
          </Text>
        </Box>
        <Button
          as={Link}
          to="/register"
          px={8}
          py={3}
          textTransform="uppercase"
          fontWeight="semibold"
          fontSize="xs"
          borderRadius="full"
          bg="primary.500"
          color="white"
          _hover={{
            shadow: "md",
            transform: "scale(1.1)",
          }}
          transition="all 0.3s ease-linear"
        >
          Enrol
        </Button>
      </Container>
      <Image
        src={BoyIllustration}
        alt="illustration"
        position="absolute"
        right="10%"
        bottom="5%"
        h={{ base: "200px", lg: "420px", "2xl": "750px" }}
        right={{ base: "10%", "2xl": "-25%" }}
        className="bounce-image"
      />
    </Box>
  );
}

export default Hero;
