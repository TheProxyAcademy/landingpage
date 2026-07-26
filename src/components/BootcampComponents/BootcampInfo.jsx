import React from "react";
import {
  Box,
  Container,
  Text,
  VStack,
  HStack,
  SimpleGrid,
  Badge,
} from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { BOOTCAMP, BATCHES, TRACKS, REQUIREMENTS, INCLUDED } from "./bootcampDetails";

const slideInUp = keyframes`
  0% { transform: translateY(40px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
`;

const SectionHeading = ({ eyebrow, title, children }) => (
  <VStack align="start" gap={3} mb={8}>
    {eyebrow ? (
      <Text
        fontFamily="'Syne', sans-serif"
        fontSize="12px"
        fontWeight="bold"
        letterSpacing="wider"
        textTransform="uppercase"
        color="green.600"
      >
        {eyebrow}
      </Text>
    ) : null}
    <Text
      as="h2"
      fontFamily="'Syne', sans-serif"
      fontWeight="bold"
      fontSize={{ base: "24px", lg: "32px" }}
      lineHeight="1.15"
      color="gray.800"
      textTransform="uppercase"
    >
      {title}
    </Text>
    {children ? (
      <Text fontSize={{ base: "15px", lg: "16px" }} color="gray.600" lineHeight="1.7" maxW="640px">
        {children}
      </Text>
    ) : null}
  </VStack>
);

const Card = ({ children, ...rest }) => (
  <Box
    bg="white"
    borderRadius="16px"
    border="1px solid"
    borderColor="gray.200"
    boxShadow="0 8px 24px rgba(16, 35, 26, 0.05)"
    p={{ base: 5, lg: 6 }}
    h="full"
    transition="all 0.3s ease"
    _hover={{
      transform: "translateY(-3px)",
      boxShadow: "0 14px 32px rgba(5, 156, 2, 0.14)",
      borderColor: "rgba(5, 156, 2, 0.35)",
    }}
    {...rest}
  >
    {children}
  </Box>
);

const BootcampInfo = () => {
  return (
    <Box
      as="section"
      id="details"
      scrollMarginTop="90px"
      bg="linear-gradient(180deg, #ffffff 0%, #f7faf6 100%)"
      py={{ base: 12, lg: 20 }}
    >
      <Container maxW="1440px" mx="auto" px={{ base: 5, lg: 20 }}>
        <VStack align="stretch" gap={{ base: 14, lg: 20 }}>
          {/* Batches */}
          <Box animation={`${slideInUp} 0.8s ease-out`}>
            <SectionHeading eyebrow="Pick your dates" title="Two batches. Your child attends one.">
              The season runs 3 August to 11 September 2026, split into two three-week batches.
              Both cover exactly the same content — choose whichever fits your holiday.
            </SectionHeading>

            <SimpleGrid columns={{ base: 1, md: 2 }} gap={5}>
              {BATCHES.map((batch) => (
                <Card key={batch.id}>
                  <VStack align="start" gap={3}>
                    <Badge
                      bg="rgba(5, 156, 2, 0.1)"
                      color="green.700"
                      px={3}
                      py={1}
                      borderRadius="full"
                      fontFamily="'Syne', sans-serif"
                      fontSize="11px"
                      fontWeight="bold"
                      letterSpacing="wide"
                      textTransform="uppercase"
                    >
                      {batch.name}
                    </Badge>
                    <Text
                      fontFamily="'Syne', sans-serif"
                      fontWeight="bold"
                      fontSize={{ base: "20px", lg: "24px" }}
                      color="gray.800"
                    >
                      {batch.dates}
                    </Text>
                    <Text fontSize="14px" color="gray.600" lineHeight="1.6">
                      {batch.note}
                    </Text>
                    <Text fontSize="13px" color="green.700" fontWeight="600">
                      {BOOTCAMP.weeksPerBatch} weeks · {BOOTCAMP.sessionsPerWeek} live sessions a
                      week · {BOOTCAMP.price} {BOOTCAMP.priceScope}
                    </Text>
                  </VStack>
                </Card>
              ))}
            </SimpleGrid>
          </Box>

          {/* Tracks */}
          <Box>
            <SectionHeading eyebrow="Five tracks" title="Your child picks one track">
              They stay with it for the full three weeks — that is how they finish with something
              built, rather than five things half-started.
            </SectionHeading>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={5}>
              {TRACKS.map((track) => (
                <Card key={track.name}>
                  <VStack align="start" gap={3}>
                    <Box
                      fontSize="22px"
                      w="46px"
                      h="46px"
                      bg="rgba(5, 156, 2, 0.08)"
                      borderRadius="12px"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      border="1px solid rgba(5, 156, 2, 0.18)"
                    >
                      {track.icon}
                    </Box>
                    <Text
                      fontFamily="'Syne', sans-serif"
                      fontWeight="bold"
                      fontSize="17px"
                      color="gray.800"
                    >
                      {track.name}
                    </Text>
                    <Text fontSize="14px" color="gray.600" lineHeight="1.6">
                      {track.blurb}
                    </Text>
                  </VStack>
                </Card>
              ))}
            </SimpleGrid>
          </Box>

          {/* What you need + what's included */}
          <SimpleGrid columns={{ base: 1, lg: 2 }} gap={{ base: 10, lg: 8 }}>
            <Box>
              <SectionHeading
                eyebrow="Before you register"
                title="What you'll need at home"
              />
              <VStack align="stretch" gap={3}>
                {REQUIREMENTS.map((item) => (
                  <HStack
                    key={item.title}
                    align="start"
                    gap={4}
                    bg="white"
                    border="1px solid"
                    borderColor="gray.200"
                    borderRadius="14px"
                    p={4}
                  >
                    <Box
                      fontSize="18px"
                      w="40px"
                      h="40px"
                      flexShrink={0}
                      bg="rgba(5, 156, 2, 0.08)"
                      borderRadius="full"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      {item.icon}
                    </Box>
                    <VStack align="start" gap={1}>
                      <Text fontWeight="bold" fontSize="15px" color="gray.800">
                        {item.title}
                      </Text>
                      <Text fontSize="14px" color="gray.600" lineHeight="1.6">
                        {item.detail}
                      </Text>
                    </VStack>
                  </HStack>
                ))}
              </VStack>
            </Box>

            <Box>
              <SectionHeading
                eyebrow={`${BOOTCAMP.price} ${BOOTCAMP.priceScope}`}
                title="What the fee covers"
              />
              <Box
                bg="rgba(5, 156, 2, 0.05)"
                border="1px solid rgba(5, 156, 2, 0.2)"
                borderRadius="16px"
                p={{ base: 5, lg: 6 }}
              >
                <VStack align="stretch" gap={4}>
                  {INCLUDED.map((item) => (
                    <HStack key={item} align="start" gap={3}>
                      <Text color="green.600" fontWeight="bold" fontSize="16px" lineHeight="1.6">
                        ✓
                      </Text>
                      <Text fontSize="15px" color="gray.700" lineHeight="1.6">
                        {item}
                      </Text>
                    </HStack>
                  ))}
                </VStack>
              </Box>
              <Text fontSize="13px" color="gray.500" mt={4} lineHeight="1.6">
                A payment plan is available. Message us on WhatsApp if that would help.
              </Text>
            </Box>
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default BootcampInfo;
