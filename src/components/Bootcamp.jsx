import React from "react";
import { Box, Flex, Text, Button, Image, Container, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Illustration from "../assets/summer-img.jpg";

function Bootcamp() {
  return (
    <Container maxW="1440px" py={{ base: 20, lg: 20 }} px={{ base: 5, lg: 20 }}>
      <Flex 
        direction={{ base: "column-reverse", lg: "row" }}
        justify="space-between"
        align="center"
        gap={8}
      >
        <Box w={{ base: "83.33%", lg: "33.33%" }} position="relative">
          <Box
            position="absolute"
            bg="green.600"
            w="full"
            h="full"
            borderRadius="xl"
            border="8px"
            borderColor="green.600"
            right="10"
            top="10"
            zIndex={-2}
          />
          <Box
            position="absolute"
            bg="yellow.400"
            w="full"
            h="full"
            right="5"
            top="5"
            borderRadius="xl"
            zIndex={-1}
          />
          <Image
            src={Illustration}
            alt="Image illustrating summer"
            w="full"
            borderRadius="xl"
            zIndex={0}
            shadow="lg"
          />
          {/*<a href="https://www.freepik.com/search?format=search&last_filter=query&last_value=sign+up+section&query=sign+up+section">Image by Drazen Zigic on Freepik</a>*/}
        </Box>
        
        <Box 
          w={{ base: "full", lg: "60%" }}
          textAlign={{ base: "center", lg: "left" }}
          mb={{ base: 10, lg: 0 }}
        >
          <Text
            as="h4"
            fontFamily="title"
            textTransform="uppercase"
            fontWeight="bold"
            color="green.600"
            fontSize={{ base: "xl", lg: "3xl" }}
            mb={3}
          >
            Online Summer Tech Bootcamp Kids Aged 5-17
          </Text>
          <Text
            py={3}
            fontSize={{ base: "sm", lg: "16px" }}
            color="gray.700"
          >
            Don't miss out on our Online Summer Tech Bootcamp, where young
            innovators can dive into the world of technology and creativity!
            Register now to secure your spot and give your child a summer of
            learning, fun, and future-ready skills!
          </Text>
          <Button
            as={Link}
            to="/summerbootcamp"
            py={5}
            px={10}
            bg="green.600"
            color="white"
            borderRadius="full"
            textTransform="uppercase"
            fontSize="sm"
            fontWeight="semibold"
            _hover={{
              shadow: "md",
              transform: "translateY(-4px)",
            }}
            _active={{
              transform: "translateY(4px)",
            }}
            transition="all 0.3s ease-linear"
            css={{
              animation: "pulse 5s ease-in-out infinite",
              "@keyframes pulse": {
                "0%, 100%": { opacity: 1 },
                "50%": { opacity: 0.8 },
              },
            }}
          >
            Register for Bootcamp
          </Button>
        </Box>
      </Flex>
    </Container>
  );
}

export default Bootcamp;
