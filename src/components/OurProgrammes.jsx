import React from "react";
import { Box, Flex, VStack, Text, SimpleGrid, Container, Center } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faCodeMerge,
  faChartSimple,
  faPenNib,
} from "@fortawesome/free-solid-svg-icons";

function OurProgrammes() {
  return (
    <Box p={{ base: 5, lg: 20 }} bg="#DFF8D5">
      <Container maxW="1440px">
        <VStack textAlign="center" spacing={4}>
          <Text
            fontFamily="title"
            textTransform="uppercase"
            fontSize={{ base: "24px", lg: "32px" }}
            color="green.600"
            fontWeight="bold"
            lineHeight="1.1"
          >
            Our Programmes
          </Text>
          <Text
            w={{ base: "full", lg: "60%" }}
            fontSize={{ base: "12px", lg: "16px" }}
            mx="auto"
          >
            The Proxy Academy offers a diverse range of tech programmes designed
            to inspire and empower young minds. Our courses are hands-on,
            interactive, and tailored to various age groups and skill levels.
            Discover the perfect path for your child's tech journey today!
          </Text>
        </VStack>
        
        <SimpleGrid 
          columns={{ base: 1, md: 2, lg: 4 }}
          gap={5}
          mt={10}
        >
          <Center
            bg="white"
            w="full"
            h="64"
            borderRadius="lg"
            p={3}
          >
            <VStack textAlign={{ base: "center", lg: "left" }} spacing={2}>
              <FontAwesomeIcon
                icon={faCode}
                style={{
                  color: "#059C02",
                  fontSize: "clamp(24px, 4vw, 36px)"
                }}
              />
              <Text
                fontWeight="bold"
                fontFamily="title"
                color="green.600"
                fontSize={{ base: "14px", xl: "18px" }}
                textTransform="uppercase"
              >
                Introduction to Coding
              </Text>
              <Text
                fontSize={{ base: "11px", xl: "12px" }}
                color="dark"
              >
                Designed for beginners, this engaging 3-months programme teaches
                the fundamentals of coding through fun, interactive lessons. Using
                kid-friendly programming languages and tools, students will create
                their own projects and develop essential problem-solving skills.
              </Text>
            </VStack>
          </Center>
          
          <Center
            bg="dark"
            w="full"
            h="64"
            borderRadius="lg"
            p={3}
          >
            <VStack textAlign={{ base: "center", lg: "left" }} spacing={2}>
              <FontAwesomeIcon
                icon={faCodeMerge}
                style={{
                  color: "#FFFFFF",
                  fontSize: "clamp(24px, 4vw, 36px)"
                }}
              />
              <Text
                fontWeight="bold"
                fontFamily="title"
                color="white"
                fontSize={{ base: "14px", xl: "18px" }}
                textTransform="uppercase"
              >
                Web Development
              </Text>
              <Text
                fontSize={{ base: "11px", xl: "12px" }}
                color="white"
              >
                Students learn to create stunning websites from scratch, mastering
                essential languages like HTML, CSS, and JavaScript. Through
                hands-on projects,participants will develop the skills to design,
                build, and launch their own web pages, gaining a solid foundation
                in both front-end and back-end development.
              </Text>
            </VStack>
          </Center>
          
          <Center
            bg="green.600"
            w="full"
            h="64"
            borderRadius="lg"
            p={3}
          >
            <VStack textAlign={{ base: "center", lg: "left" }} spacing={2}>
              <FontAwesomeIcon
                icon={faChartSimple}
                style={{
                  color: "#FFFFFF",
                  fontSize: "clamp(24px, 4vw, 36px)"
                }}
              />
              <Text
                fontWeight="bold"
                fontFamily="title"
                color="white"
                fontSize={{ base: "14px", xl: "18px" }}
                textTransform="uppercase"
              >
                Data Analysis
              </Text>
              <Text
                fontSize={{ base: "11px", xl: "12px" }}
                color="white"
              >
                Designed to equip young learners with skills in data
                interpretation and decision-making. Through engaging, hands-on
                projects, students will explore the fundamentals of data
                collection, visualization, and analysis using industry-standard
                tools.
              </Text>
            </VStack>
          </Center>
          
          <Center
            bg="white"
            w="full"
            h="64"
            borderRadius="lg"
            p={3}
          >
            <VStack textAlign={{ base: "center", lg: "left" }} spacing={2}>
              <FontAwesomeIcon
                icon={faPenNib}
                style={{
                  color: "#059C02",
                  fontSize: "clamp(24px, 4vw, 36px)"
                }}
              />
              <Text
                fontWeight="bold"
                color="green.600"
                fontSize={{ base: "14px", xl: "18px" }}
                textTransform="uppercase"
              >
                Digital Design
              </Text>
              <Text
                fontSize={{ base: "11px", xl: "12px" }}
                color="dark"
              >
                This engaging array of courses introduces young learners to the
                exciting world of digital arts, including graphic design,
                animation, and product design. Whether it's creating eye-catching
                graphics, dynamic animations, or innovative digital projects, our
                Digital Design programme nurtures artistic talent and technical
                proficiency.
              </Text>
            </VStack>
          </Center>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export default OurProgrammes;
