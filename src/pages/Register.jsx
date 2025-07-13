import React from "react";
import { Box, Flex, Text, Image, Link, Container } from "@chakra-ui/react";
import BootcampForm from "../components/BootcampForm";
import RegIllustration from "../assets/reg-illustration.png";

function Register({ onFormInteraction, onFormSubmission }) {
  return (
    <Container maxW="1440px" py={{ base: 10, lg: 20 }} px={{ base: 5, lg: 20 }}>
      <Flex 
        direction={{ base: "column", lg: "row" }}
        justify="space-between"
        align="center"
        gap={8}
      >
        <Box 
          w={{ base: "full", lg: "50%" }}
          position="relative"
          px={{ base: 5, md: 10 }}
          mt={{ base: 0, lg: 40, xl: 0 }}
          borderRight={{ base: "none", lg: "1px solid" }}
          borderColor="gray.200"
        >
          <Text
            as="h2"
            fontSize={{ base: "2xl", xl: "4xl" }}
            textTransform="uppercase"
            mb={2}
            fontWeight="semibold"
            color="gray.800"
          >
            Registration
          </Text>
          <Text mb={4} color="gray.600">
            Please fill the form to get started with our classes
          </Text>
          <Image 
            src={RegIllustration} 
            alt="Illustration"
            w="full"
            maxW="400px"
            mx="auto"
          />
          <Text 
            fontSize="xs" 
            color="gray.300" 
            fontWeight="bold" 
            letterSpacing="widest"
            mt={2}
          >
            <Link 
              href="https://www.freepik.com/free-vector/metaverso-concept-illustration_28771813.htm#fromView=search&page=1&position=20&uuid=3df50b51-3b9f-4425-9556-6a8c4dc587f9&new_detail=true&query=tech+illustration"
              isExternal
              textDecoration="underline"
              color="gray.400"
            >
              Illustration from Freepik
            </Link>
          </Text>
        </Box>
        
        <Box 
          w={{ base: "full", lg: "50%" }}
          textAlign={{ base: "center", lg: "left" }}
          mt={{ base: 10, md: 0 }}
          mb={{ base: 10, md: 0, lg: 0 }}
          py={10}
          px={{ base: 5, md: 10 }}
          bg="gray.100"
          borderRadius="md"
        >
          <BootcampForm
            onFormInteraction={onFormInteraction}
            onFormSubmission={onFormSubmission}
          />
        </Box>
      </Flex>
    </Container>
  );
}

export default Register;
