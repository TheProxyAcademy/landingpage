import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Container,
  Text,
  VStack,
  HStack,
  SimpleGrid,
  Button,
} from "@chakra-ui/react";
import Seo from "../components/Seo";
import {
  TRACKS,
  LEVELS,
  PILLARS,
  COMPETENCY_LADDER,
  PROGRAMME_STATS,
  ROI_CARDS,
} from "../components/Programmes/programmeData";
import {
  SectionHeading,
  Card,
  Pill,
  FeatureCard,
  slideInUp,
} from "../components/Programmes/shared";

function Programmes() {
  return (
    <Box bg="#faf9f7">
      <Seo
        title="Programmes"
        description="The Elite Mastery Program: four tracks, three competency levels, up to 24 months. Children graduate with a professional portfolio, quarterly public exhibitions and framed credentials."
        canonicalPath="/programmes"
      />

      {/* Hero */}
      <Box
        bg="linear-gradient(135deg, #0f0e0d 0%, #1e1c19 60%, #10231a 100%)"
        py={{ base: 14, lg: 24 }}
        position="relative"
        overflow="hidden"
      >
        <Box
          position="absolute"
          top="-10%"
          right="-5%"
          w="480px"
          h="480px"
          borderRadius="full"
          bg="radial-gradient(circle, rgba(5,156,2,0.35), transparent 65%)"
          pointerEvents="none"
        />
        <Container maxW="1440px" mx="auto" px={{ base: 5, lg: 20 }} position="relative">
          <VStack align="start" gap={5} animation={`${slideInUp} 0.8s ease-out`}>
            <Pill bg="rgba(5, 156, 2, 0.9)" color="white">
              Elite 18–24 Month Mastery Program
            </Pill>
            <Text
              as="h1"
              fontFamily="'Syne', sans-serif"
              fontWeight="bold"
              fontSize={{ base: "34px", md: "48px", lg: "58px" }}
              lineHeight="1.05"
              color="white"
              letterSpacing="tight"
            >
              Build things.
              <br />
              <Text as="span" color="green.400">
                Real things.
              </Text>
            </Text>
            <Text fontSize={{ base: "15px", lg: "18px" }} color="whiteAlpha.700" maxW="620px" lineHeight="1.7">
              A programme where children and teenagers graduate as confident creators with a
              professional portfolio. Every module produces a tangible asset. Every quarter
              culminates in a public Exhibition. Every year compounds their advantage.
            </Text>

            <SimpleGrid columns={{ base: 2, md: 4 }} gap={6} pt={4} w="full" maxW="720px">
              {PROGRAMME_STATS.map((stat) => (
                <VStack key={stat.label} align="start" gap={0}>
                  <Text
                    fontFamily="'Syne', sans-serif"
                    fontWeight="bold"
                    fontSize={{ base: "30px", lg: "38px" }}
                    color="green.400"
                    lineHeight="1"
                  >
                    {stat.value}
                  </Text>
                  <Text
                    fontSize="12px"
                    color="whiteAlpha.600"
                    textTransform="uppercase"
                    letterSpacing="wider"
                  >
                    {stat.label}
                  </Text>
                </VStack>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      <Container maxW="1440px" mx="auto" px={{ base: 5, lg: 20 }} py={{ base: 14, lg: 20 }}>
        <VStack align="stretch" gap={{ base: 16, lg: 24 }}>
          {/* Three levels */}
          <Box>
            <SectionHeading
              eyebrow="How the journey is structured"
              title="Three levels, up to 24 months"
            >
              Students progress through three distinct competency levels. Each one ends with a
              public graduation and a framed credential — not a certificate PDF.
            </SectionHeading>

            <SimpleGrid columns={{ base: 1, md: 3 }} gap={5}>
              {LEVELS.map((level) => (
                <Box
                  key={level.id}
                  bg={level.bg}
                  border="1px solid"
                  borderColor={level.border}
                  borderRadius="16px"
                  p={{ base: 5, lg: 6 }}
                >
                  <VStack align="start" gap={2}>
                    <Text
                      fontFamily="'Syne', sans-serif"
                      fontWeight="bold"
                      fontSize="11px"
                      letterSpacing="wider"
                      textTransform="uppercase"
                      color={level.accent}
                    >
                      {level.name}
                    </Text>
                    <Text
                      fontFamily="'Syne', sans-serif"
                      fontWeight="bold"
                      fontSize={{ base: "20px", lg: "22px" }}
                      color="gray.800"
                    >
                      {level.months}
                    </Text>
                    <Text fontSize="14px" color="gray.700" lineHeight="1.6">
                      {level.blurb}
                    </Text>
                  </VStack>
                </Box>
              ))}
            </SimpleGrid>
          </Box>

          {/* Tracks */}
          <Box id="tracks" scrollMarginTop="90px">
            <SectionHeading eyebrow="Four mastery tracks" title="Choose a path">
              Each track spans up to 24 months across three competency levels. Open any track for
              the full month-by-month curriculum.
            </SectionHeading>

            <SimpleGrid columns={{ base: 1, md: 2 }} gap={5}>
              {TRACKS.map((track) => (
                <Card
                  key={track.slug}
                  as={RouterLink}
                  to={`/programmes/${track.slug}`}
                  display="block"
                  bg={track.bg}
                  borderColor={track.border}
                  _hover={{
                    transform: "translateY(-4px)",
                    boxShadow: "0 18px 38px rgba(16, 35, 26, 0.14)",
                    borderColor: track.accent,
                    textDecoration: "none",
                  }}
                >
                  <VStack align="start" gap={3}>
                    <Text
                      fontFamily="'Syne', sans-serif"
                      fontSize="11px"
                      fontWeight="bold"
                      letterSpacing="wider"
                      textTransform="uppercase"
                      color="blackAlpha.600"
                    >
                      {track.ages}
                    </Text>
                    <Text
                      fontFamily="'Syne', sans-serif"
                      fontWeight="bold"
                      fontSize={{ base: "20px", lg: "24px" }}
                      color={track.accent}
                      letterSpacing="tight"
                    >
                      {track.name}
                    </Text>
                    <Text fontSize="14px" color="blackAlpha.700" lineHeight="1.6">
                      {track.summary}
                    </Text>
                    <HStack gap={3} pt={1} flexWrap="wrap">
                      <Pill bg="blackAlpha.100" color="blackAlpha.800">
                        {track.duration}
                      </Pill>
                      <Text fontSize="13px" fontWeight="600" color={track.accent}>
                        View curriculum →
                      </Text>
                    </HStack>
                  </VStack>
                </Card>
              ))}
            </SimpleGrid>
          </Box>

          {/* Philosophy */}
          <Box>
            <SectionHeading
              eyebrow="Teaching philosophy"
              title="Six principles behind every session"
            >
              Every decision in this curriculum flows from these principles.
            </SectionHeading>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={5}>
              {PILLARS.map((pillar) => (
                <FeatureCard
                  key={pillar.title}
                  icon={pillar.icon}
                  title={pillar.title}
                  body={pillar.body}
                />
              ))}
            </SimpleGrid>
          </Box>

          {/* Competency ladder */}
          <Box>
            <SectionHeading
              eyebrow="Competency progression"
              title="What changes at each level"
            />
            <SimpleGrid columns={{ base: 1, md: 3 }} gap={5}>
              {COMPETENCY_LADDER.map((tier) => {
                const level = LEVELS.find((l) => l.id === tier.id);
                return (
                  <Box
                    key={tier.id}
                    bg={level.bg}
                    border="1px solid"
                    borderColor={level.border}
                    borderRadius="16px"
                    p={{ base: 5, lg: 6 }}
                  >
                    <Text
                      fontFamily="'Syne', sans-serif"
                      fontWeight="bold"
                      fontSize="15px"
                      color={level.accent}
                      mb={3}
                    >
                      {tier.level}
                    </Text>
                    <VStack align="stretch" gap={2}>
                      {tier.points.map((point) => (
                        <HStack key={point} align="start" gap={2}>
                          <Text color={level.accent} fontSize="13px" lineHeight="1.7">
                            ●
                          </Text>
                          <Text fontSize="14px" color="gray.700" lineHeight="1.6">
                            {point}
                          </Text>
                        </HStack>
                      ))}
                    </VStack>
                  </Box>
                );
              })}
            </SimpleGrid>
          </Box>

          {/* Parent ROI teaser */}
          <Box>
            <SectionHeading
              eyebrow="What parents can point to"
              title="Proof, every single quarter"
            >
              The infrastructure that turns individual sessions into a compounding, multi-year
              investment.
            </SectionHeading>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={5}>
              {ROI_CARDS.slice(0, 3).map((card) => (
                <Card key={card.title}>
                  <VStack align="start" gap={2}>
                    <Text fontSize="22px">{card.icon}</Text>
                    <Text fontFamily="'Syne', sans-serif" fontWeight="bold" fontSize="16px" color="gray.800">
                      {card.title}
                    </Text>
                    <Text fontSize="14px" color="gray.600" lineHeight="1.6">
                      {card.body}
                    </Text>
                    <Text
                      fontFamily="'Syne', sans-serif"
                      fontWeight="bold"
                      fontSize="18px"
                      color="green.600"
                      pt={1}
                    >
                      {card.metric}
                    </Text>
                  </VStack>
                </Card>
              ))}
            </SimpleGrid>
            <Button
              as={RouterLink}
              to="/programmes/how-it-works"
              mt={6}
              px={8}
              py={6}
              borderRadius="full"
              bg="white"
              color="green.700"
              border="1px solid"
              borderColor="green.200"
              fontFamily="'Syne', sans-serif"
              fontWeight="bold"
              textTransform="uppercase"
              letterSpacing="wide"
              fontSize="13px"
              _hover={{ bg: "green.50", transform: "translateY(-2px)" }}
            >
              See how the programme works →
            </Button>
          </Box>

          {/* CTA */}
          <Box
            bg="linear-gradient(135deg, #059C02 0%, #0b7f03 100%)"
            borderRadius="20px"
            p={{ base: 8, lg: 12 }}
            textAlign="center"
          >
            <VStack gap={5}>
              <Text
                as="h2"
                fontFamily="'Syne', sans-serif"
                fontWeight="bold"
                fontSize={{ base: "24px", lg: "32px" }}
                color="white"
                textTransform="uppercase"
                lineHeight="1.2"
              >
                Ready to start the journey?
              </Text>
              <Text color="whiteAlpha.900" maxW="560px" fontSize={{ base: "15px", lg: "16px" }} lineHeight="1.7">
                Tell us your child's age and what they love doing, and we will point you to the
                track that fits.
              </Text>
              <HStack gap={3} flexWrap="wrap" justify="center">
                <Button
                  as={RouterLink}
                  to="/register"
                  px={8}
                  py={6}
                  borderRadius="full"
                  bg="white"
                  color="green.700"
                  fontFamily="'Syne', sans-serif"
                  fontWeight="bold"
                  textTransform="uppercase"
                  letterSpacing="wide"
                  fontSize="13px"
                  _hover={{ transform: "translateY(-2px)", boxShadow: "0 12px 25px rgba(0,0,0,0.2)" }}
                >
                  Enrol now
                </Button>
                <Button
                  as={RouterLink}
                  to="/summerbootcamp"
                  px={8}
                  py={6}
                  borderRadius="full"
                  bg="whiteAlpha.200"
                  color="white"
                  border="1px solid"
                  borderColor="whiteAlpha.500"
                  fontFamily="'Syne', sans-serif"
                  fontWeight="bold"
                  textTransform="uppercase"
                  letterSpacing="wide"
                  fontSize="13px"
                  _hover={{ bg: "whiteAlpha.300", transform: "translateY(-2px)" }}
                >
                  Try the summer bootcamp
                </Button>
              </HStack>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}

export default Programmes;
