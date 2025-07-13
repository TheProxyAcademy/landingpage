import React from "react";
import { Box, Flex, Text, Container } from "@chakra-ui/react";
import BootcampForm from "../BootcampForm";

function BootcampHero({ onFormInteraction, onFormSubmission }) {
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
            Summer Tech Bootcamp 3.0
          </Text>
          <Text mb={4} color="gray.600">
            Give your kids a worthwhile summer experience with our ONLINE SUMMER
            TECH BOOTCAMP for children aged 5-17. Our classes will be held thrice
            a week. You also have the option to choose between the morning and
            evening class sessions to fit your schedule. Bootcamp starts from July
            27 - August 26, 2024
          </Text>
          <Text mt={2} color="gray.700">
            <Text as="strong" fontWeight="bold">Special Offer:</Text> Enrol your children and get a whopping
            70% off the original Bootcamp fee of 100,000 Naira
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

export default BootcampHero;
