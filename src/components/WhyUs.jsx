import React from "react";
import { Box, Flex, VStack, Text, SimpleGrid, Container } from "@chakra-ui/react";

function WhyUs() {
  return (
    <Container maxW="1440px" p={{ base: 5, lg: 20 }}>
      <Flex 
        direction={{ base: "column", lg: "row" }}
        justify="space-between"
        align="center"
        gap={8}
      >
        <Box w={{ base: "full", lg: "75%" }}>
          <Text
            fontFamily="title"
            textTransform="uppercase"
            fontSize={{ base: "18px", lg: "32px" }}
            color="primary.500"
            fontWeight="bold"
            lineHeight="1.1"
            textAlign={{ base: "center", lg: "left" }}
          >
            What's so special about The Proxy Academy?
          </Text>
          <Text
            mt={2}
            color="dark"
            textAlign={{ base: "center", lg: "justify" }}
            w={{ base: "full", lg: "83.33%" }}
            fontSize={{ base: "12px", lg: "16px" }}
          >
            We recognize the gap in the educational system that doesn't quite
            cater for the development of kids. We are bridging the gap by
            facilitating the knowledge of digital skills in ways kids can easily
            relate with - fun and interactive - to effectively function in a
            world that has gone largely digital.
          </Text>
        </Box>
        
        <Box w={{ base: "83.33%", lg: "50%" }} mt={{ base: 10, lg: 0 }}>
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={5}>
            <Box bg="primary.500" p={3} borderRadius="md" color="#DFF8D5">
              <Text fontWeight="bold" fontSize="16px" textTransform="uppercase">
                World-Class Curriculum
              </Text>
              <Text py={1} fontSize="12px">
                We operate with curriculums and models that have been tested and
                have proven effective by experts over the world.
              </Text>
            </Box>
            
            <Box bg="#fcbf00" p={3} borderRadius="md" color="#372c0d">
              <Text fontWeight="bold" fontSize="16px" textTransform="uppercase">
                Flexibility
              </Text>
              <Text py={1} fontSize="12px">
                We operate with strict adherence to the rule of constant practice
                and learning but not at the expense of the wellbeing of our
                students. We consider psychological factors as well as natural
                factors that might affect our sessions.
              </Text>
            </Box>
            
            <Box bg="#4cd5bc" p={3} borderRadius="md" color="#112f29">
              <Text fontWeight="bold" fontSize="16px" textTransform="uppercase">
                Adaptive Learning
              </Text>
              <Text py={1} fontSize="12px">
                We value the quality in our delivery and we offer a one-on-one
                approach for our sessions as well as group classes in order to
                understand each students and move at their pace.
              </Text>
            </Box>
            
            <Box bg="#f00078" p={3} borderRadius="md" color="#ffe3f1">
              <Text fontWeight="bold" fontSize="16px" textTransform="uppercase">
                World-Class Curriculum
              </Text>
              <Text py={1} fontSize="12px">
                We operate with curriculums and models that have been tested and
                have proven effective by experts over the world.
              </Text>
            </Box>
          </SimpleGrid>
        </Box>
      </Flex>
    </Container>
  );
}

export default WhyUs;
