import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Accordion,
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
  ROI_CARDS,
  EXHIBITION_QUARTERS,
  EXHIBITION_RUNSHEET,
  BADGES,
  STUDENT_TITLES,
  PARENT_TOUCHPOINTS,
  PRESTIGE_EXPERIENCE,
} from "../components/Programmes/programmeData";
import { SectionHeading, Card, Pill, FeatureCard, slideInUp } from "../components/Programmes/shared";

function ProgrammeSystems() {
  return (
    <Box bg="#faf9f7">
      <Seo
        title="How the Programme Works"
        description="Quarterly exhibitions, weekly progress updates, framed credentials and a graduate portfolio — the systems that turn individual sessions into a multi-year investment parents can see."
        canonicalPath="/programmes/how-it-works"
      />

      {/* Hero */}
      <Box bg="linear-gradient(135deg, #0f0e0d 0%, #1e1c19 65%, #10231a 100%)" py={{ base: 12, lg: 20 }}>
        <Container maxW="1100px" mx="auto" px={{ base: 5, lg: 8 }}>
          <VStack align="start" gap={4} animation={`${slideInUp} 0.8s ease-out`}>
            <Button
              as={RouterLink}
              to="/programmes"
              variant="plain"
              px={0}
              color="whiteAlpha.700"
              fontSize="13px"
              fontWeight="500"
              _hover={{ color: "white" }}
            >
              ← All programmes
            </Button>
            <Pill bg="rgba(5, 156, 2, 0.9)" color="white">
              Programme systems
            </Pill>
            <Text
              as="h1"
              fontFamily="'Syne', sans-serif"
              fontWeight="bold"
              fontSize={{ base: "30px", md: "40px", lg: "48px" }}
              lineHeight="1.08"
              color="white"
              letterSpacing="tight"
            >
              How the programme works
            </Text>
            <Text fontSize={{ base: "15px", lg: "17px" }} color="whiteAlpha.700" maxW="640px" lineHeight="1.7">
              The infrastructure that transforms individual sessions into a compounding, multi-year
              investment — and makes progress visible to parents at every stage.
            </Text>
          </VStack>
        </Container>
      </Box>

      <Container maxW="1100px" mx="auto" px={{ base: 5, lg: 8 }} py={{ base: 12, lg: 18 }}>
        <VStack align="stretch" gap={{ base: 16, lg: 22 }}>
          {/* Parent ROI */}
          <Box>
            <SectionHeading
              eyebrow="Parental ROI"
              title="What you can point to every 3 months"
            >
              Every quarter produces something concrete — a link, a certificate, a presentation.
              Nothing about this programme is invisible.
            </SectionHeading>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={5}>
              {ROI_CARDS.map((card) => (
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
          </Box>

          {/* Quarterly exhibitions */}
          <Box>
            <SectionHeading
              eyebrow="Quarterly exhibitions"
              title="Four times a year, in public"
            >
              Not optional. Not low-stakes. A genuine public moment of professional pride.
            </SectionHeading>
            <SimpleGrid columns={{ base: 1, md: 2 }} gap={4} mb={8}>
              {EXHIBITION_QUARTERS.map((quarter) => (
                <Box
                  key={quarter.title}
                  bg="linear-gradient(135deg, #fffbeb, #fff7ed)"
                  border="1px solid #f0dcbc"
                  borderRadius="14px"
                  p={5}
                >
                  <Text fontFamily="'Syne', sans-serif" fontWeight="bold" fontSize="15px" color="#a16207" mb={2}>
                    {quarter.title}
                  </Text>
                  <Text fontSize="14px" color="gray.700" lineHeight="1.6">
                    {quarter.body}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>

            {/* Runsheet */}
            <Accordion.Root collapsible>
              <Accordion.Item
                value="runsheet"
                bg="white"
                border="1px solid"
                borderColor="gray.200"
                borderRadius="16px"
                overflow="hidden"
                boxShadow="0 8px 24px rgba(16, 35, 26, 0.05)"
              >
                <Accordion.ItemTrigger px={{ base: 4, lg: 6 }} py={5} bg="transparent" textAlign="left">
                  <VStack align="start" gap={0} flex="1">
                    <Text fontFamily="'Syne', sans-serif" fontWeight="bold" fontSize={{ base: "15px", lg: "17px" }} color="gray.800">
                      Exhibition runsheet (90 minutes)
                    </Text>
                    <Text fontSize="13px" color="gray.500">
                      Prestige format · Celebratory · Professionally facilitated
                    </Text>
                  </VStack>
                  <Accordion.ItemIndicator color="green.500" fontSize="20px" />
                </Accordion.ItemTrigger>
                <Accordion.ItemContent>
                  <Accordion.ItemBody
                    px={{ base: 4, lg: 6 }}
                    pb={6}
                    pt={5}
                    borderTop="1px solid"
                    borderColor="gray.200"
                  >
                    <VStack align="stretch" gap={4}>
                      {EXHIBITION_RUNSHEET.map((slot) => (
                        <Box
                          key={slot.time}
                          bg="#f7f8f6"
                          borderRadius="12px"
                          p={{ base: 4, lg: 5 }}
                          border="1px solid"
                          borderColor="gray.200"
                        >
                          <Text
                            fontFamily="'Syne', sans-serif"
                            fontWeight="bold"
                            fontSize="11px"
                            textTransform="uppercase"
                            letterSpacing="wider"
                            color="green.600"
                            mb={1}
                          >
                            {slot.time}
                          </Text>
                          <Text fontFamily="'Syne', sans-serif" fontWeight="bold" fontSize="15px" color="gray.800" mb={3}>
                            {slot.title}
                          </Text>
                          <SimpleGrid columns={{ base: 1, md: 2 }} gap={3}>
                            {slot.rows.map((row) => (
                              <Box key={row.title} bg="white" borderRadius="10px" p={4} border="1px solid" borderColor="gray.200">
                                <Text
                                  fontSize="10px"
                                  fontWeight="bold"
                                  textTransform="uppercase"
                                  letterSpacing="wider"
                                  color="gray.400"
                                  mb={1}
                                >
                                  {row.label}
                                </Text>
                                <Text fontFamily="'Syne', sans-serif" fontWeight="bold" fontSize="13.5px" color="gray.800" mb={2}>
                                  {row.title}
                                </Text>
                                <Text fontSize="13px" color="gray.600" lineHeight="1.6">
                                  {row.body}
                                </Text>
                              </Box>
                            ))}
                          </SimpleGrid>
                        </Box>
                      ))}
                    </VStack>
                  </Accordion.ItemBody>
                </Accordion.ItemContent>
              </Accordion.Item>
            </Accordion.Root>
          </Box>

          {/* Achievement system */}
          <Box>
            <SectionHeading eyebrow="Achievements" title="Credentials students earn along the way" />
            <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} gap={4}>
              {BADGES.map((badge) => (
                <Card key={badge.name} textAlign="center" p={5}>
                  <VStack gap={2}>
                    <Text fontSize="30px">{badge.icon}</Text>
                    <Text fontFamily="'Syne', sans-serif" fontWeight="bold" fontSize="14px" color="gray.800">
                      {badge.name}
                    </Text>
                    <Text fontSize="12.5px" color="gray.600" lineHeight="1.5">
                      {badge.desc}
                    </Text>
                  </VStack>
                </Card>
              ))}
            </SimpleGrid>
          </Box>

          {/* Student titles */}
          <Box>
            <SectionHeading eyebrow="Mastery titles" title="How a student levels up" />
            <SimpleGrid columns={{ base: 1, md: 3, lg: 5 }} gap={4}>
              {STUDENT_TITLES.map((title) => (
                <Card key={title.name}>
                  <VStack align="start" gap={2}>
                    <Text
                      fontSize="10px"
                      fontWeight="bold"
                      textTransform="uppercase"
                      letterSpacing="wider"
                      color="green.600"
                    >
                      {title.level}
                    </Text>
                    <Text fontFamily="'Syne', sans-serif" fontWeight="bold" fontSize="15px" color="gray.800">
                      {title.name}
                    </Text>
                    <Text fontSize="13px" color="gray.600" lineHeight="1.6">
                      {title.body}
                    </Text>
                  </VStack>
                </Card>
              ))}
            </SimpleGrid>
          </Box>

          {/* Parent touchpoints */}
          <Box>
            <SectionHeading
              eyebrow="Staying in the loop"
              title="Parent engagement touchpoints"
            >
              You will never have to ask what your child did this week.
            </SectionHeading>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={5}>
              {PARENT_TOUCHPOINTS.map((point) => (
                <FeatureCard key={point.title} title={point.title} body={point.body} />
              ))}
            </SimpleGrid>
          </Box>

          {/* Prestige experience */}
          <Box>
            <SectionHeading eyebrow="The experience" title="What makes it feel like an academy" />
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={5}>
              {PRESTIGE_EXPERIENCE.map((item) => (
                <FeatureCard key={item.title} icon={item.icon} title={item.title} body={item.body} />
              ))}
            </SimpleGrid>
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
                fontSize={{ base: "24px", lg: "30px" }}
                color="white"
                textTransform="uppercase"
                lineHeight="1.2"
              >
                Pick a track and get started
              </Text>
              <HStack gap={3} flexWrap="wrap" justify="center">
                <Button
                  as={RouterLink}
                  to="/programmes#tracks"
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
                  Browse the tracks
                </Button>
                <Button
                  as={RouterLink}
                  to="/register"
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
                  Enrol now
                </Button>
              </HStack>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}

export default ProgrammeSystems;
