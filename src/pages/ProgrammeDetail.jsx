import React from "react";
import { Link as RouterLink, Navigate, useParams } from "react-router-dom";
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
import { getTrack, LEVELS, TRACKS } from "../components/Programmes/programmeData";
import { Pill, slideInUp } from "../components/Programmes/shared";

const MonthLabel = ({ children, accent }) => (
  <HStack gap={3} align="center" mt={8} mb={4}>
    <Text
      fontFamily="'Syne', sans-serif"
      fontWeight="bold"
      fontSize="12px"
      letterSpacing="wider"
      textTransform="uppercase"
      color={accent}
    >
      {children}
    </Text>
    <Box flex="1" minW="16px" h="1px" bg="gray.200" />
  </HStack>
);

// The dark block describing what the month actually produces.
const ProductionCycle = ({ cycle }) => (
  <Box
    bg="linear-gradient(135deg, #0f0e0d, #1e1c19)"
    borderRadius="14px"
    p={{ base: 5, lg: 6 }}
    color="white"
    mb={4}
  >
    <VStack align="start" gap={3}>
      <Pill bg="rgba(5, 156, 2, 0.9)" color="white">
        {cycle.badge}
      </Pill>
      <Text fontFamily="'Syne', sans-serif" fontWeight="bold" fontSize={{ base: "17px", lg: "19px" }}>
        {cycle.title}
      </Text>
      <Text fontSize="14px" color="whiteAlpha.700" lineHeight="1.7">
        {cycle.desc}
      </Text>
      {cycle.weeks?.length ? (
        <HStack gap={2} flexWrap="wrap" pt={1}>
          {cycle.weeks.map((week) => (
            <Box
              key={week}
              bg="whiteAlpha.200"
              borderRadius="6px"
              px={3}
              py={1}
              fontSize="12px"
              color="whiteAlpha.900"
            >
              {week}
            </Box>
          ))}
        </HStack>
      ) : null}
      {cycle.asset ? (
        <HStack
          gap={2}
          align="start"
          bg="rgba(200, 151, 42, 0.18)"
          border="1px solid rgba(200, 151, 42, 0.45)"
          borderRadius="8px"
          px={3}
          py={2}
          mt={1}
        >
          <Text fontSize="13px" flexShrink={0}>
            🏆
          </Text>
          <Text fontSize="13px" color="#fcd34d" fontWeight="600" lineHeight="1.5">
            Tangible asset: {cycle.asset}
          </Text>
        </HStack>
      ) : null}
    </VStack>
  </Box>
);

const SessionCard = ({ session, accent }) => (
  <Box bg="white" borderRadius="10px" p={4} border="1px solid" borderColor="gray.200">
    <VStack align="start" gap={2}>
      <Text
        fontSize="10px"
        fontWeight="bold"
        textTransform="uppercase"
        letterSpacing="wider"
        color="gray.400"
      >
        {session.label}
      </Text>
      <Text fontFamily="'Syne', sans-serif" fontWeight="bold" fontSize="14px" color="gray.800">
        {session.title}
      </Text>
      {session.teaches ? (
        <Text fontSize="13px" color="gray.600" lineHeight="1.6">
          <Text as="span" fontWeight="600" color="gray.700">
            Teaches:
          </Text>{" "}
          {session.teaches}
        </Text>
      ) : null}
      {session.does ? (
        <Text fontSize="13px" color="green.700" fontWeight="500" lineHeight="1.6">
          <Text as="span" fontWeight="700">
            Does:
          </Text>{" "}
          {session.does}
        </Text>
      ) : null}
      <HStack gap={2} flexWrap="wrap">
        {session.output ? (
          <Pill bg="#fef3c7" color="#92400e">
            Output: {session.output}
          </Pill>
        ) : null}
        {session.asset ? (
          <Pill bg={accent} color="white">
            Portfolio asset: {session.asset}
          </Pill>
        ) : null}
      </HStack>
    </VStack>
  </Box>
);

const ModuleBlock = ({ module, accent }) => (
  <Box bg="#f7f8f6" borderRadius="12px" p={{ base: 4, lg: 5 }} border="1px solid" borderColor="gray.200" mb={4}>
    <Text
      fontFamily="'Syne', sans-serif"
      fontWeight="bold"
      fontSize="11px"
      textTransform="uppercase"
      letterSpacing="wider"
      color="gray.500"
      mb={1}
    >
      {module.label}
    </Text>
    <Text fontFamily="'Syne', sans-serif" fontWeight="bold" fontSize="15px" color="gray.800" mb={4}>
      {module.title}
    </Text>
    <SimpleGrid columns={{ base: 1, md: 2 }} gap={3}>
      {module.sessions.map((session) => (
        <SessionCard key={session.title} session={session} accent={accent} />
      ))}
    </SimpleGrid>
  </Box>
);

const ExhibitionBox = ({ exhibition, variant = "dashed" }) => (
  <Box
    bg={variant === "solid" ? "linear-gradient(135deg, #fffbeb, #fff7ed)" : "white"}
    border={variant === "solid" ? "2px solid #c8972a" : "2px dashed #c8972a"}
    borderRadius="12px"
    p={{ base: 5, lg: 6 }}
    my={4}
  >
    <Text
      fontFamily="'Syne', sans-serif"
      fontWeight="bold"
      fontSize={{ base: "14px", lg: "15px" }}
      color="#a16207"
      textTransform="uppercase"
      letterSpacing="wide"
      mb={3}
    >
      {variant === "solid" ? "🏆" : "🎤"} {exhibition.title}
    </Text>
    <VStack align="stretch" gap={2}>
      {exhibition.items.map((item) => (
        <HStack key={item} align="start" gap={2}>
          <Text color="#c8972a" fontSize="13px" lineHeight="1.7" flexShrink={0}>
            ●
          </Text>
          <Text fontSize="14px" color="gray.700" lineHeight="1.6">
            {item}
          </Text>
        </HStack>
      ))}
    </VStack>
  </Box>
);

const FounderModule = ({ module }) => (
  <Box
    bg="linear-gradient(135deg, #0f0e0d 0%, #101f16 100%)"
    borderRadius="14px"
    p={{ base: 5, lg: 6 }}
    color="white"
    border="1px solid rgba(5, 156, 2, 0.35)"
    my={6}
  >
    <VStack align="start" gap={3}>
      <Pill bg="green.500" color="white">
        {module.badge}
      </Pill>
      <Text fontFamily="'Syne', sans-serif" fontWeight="bold" fontSize={{ base: "17px", lg: "19px" }}>
        {module.title}
      </Text>
      <Text fontSize="14px" color="whiteAlpha.700" lineHeight="1.7">
        {module.desc}
      </Text>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={3} w="full" pt={1}>
        {module.items.map((item) => (
          <Box
            key={item.title}
            bg="whiteAlpha.100"
            border="1px solid"
            borderColor="whiteAlpha.200"
            borderRadius="10px"
            p={4}
          >
            <Text fontFamily="'Syne', sans-serif" fontWeight="bold" fontSize="14px" mb={1}>
              {item.title}
            </Text>
            <Text fontSize="13px" color="whiteAlpha.600" lineHeight="1.6">
              {item.body}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </VStack>
  </Box>
);

function ProgrammeDetail() {
  const { slug } = useParams();
  const track = getTrack(slug);

  if (!track) return <Navigate to="/programmes" replace />;

  const otherTracks = TRACKS.filter((t) => t.slug !== track.slug);

  return (
    <Box bg="#faf9f7">
      <Seo
        title={track.name}
        description={`${track.name} at The Proxy Academy — ${track.ages}, ${track.cadence}, ${track.duration}. ${track.summary}`}
        canonicalPath={`/programmes/${track.slug}`}
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
            <Pill bg={track.accent} color="white">
              {track.ages}
            </Pill>
            <Text
              as="h1"
              fontFamily="'Syne', sans-serif"
              fontWeight="bold"
              fontSize={{ base: "32px", md: "42px", lg: "50px" }}
              lineHeight="1.05"
              color="white"
              letterSpacing="tight"
            >
              {track.name}
            </Text>
            <Text fontSize={{ base: "15px", lg: "17px" }} color="whiteAlpha.700" maxW="640px" lineHeight="1.7">
              {track.intro}
            </Text>
            <HStack gap={3} flexWrap="wrap" pt={1}>
              <Pill bg="whiteAlpha.200" color="whiteAlpha.900">
                {track.cadence}
              </Pill>
              <Pill bg="whiteAlpha.200" color="whiteAlpha.900">
                {track.duration}
              </Pill>
              {track.hasFounderModules ? (
                <Pill bg="whiteAlpha.200" color="whiteAlpha.900">
                  Founder modules
                </Pill>
              ) : null}
            </HStack>
            <HStack gap={2} flexWrap="wrap" pt={2}>
              {track.tools.map((tool) => (
                <Box
                  key={tool}
                  bg="whiteAlpha.100"
                  border="1px solid"
                  borderColor="whiteAlpha.300"
                  borderRadius="full"
                  px={3}
                  py={1}
                  fontSize="12px"
                  color="whiteAlpha.800"
                >
                  {tool}
                </Box>
              ))}
            </HStack>
          </VStack>
        </Container>
      </Box>

      <Container maxW="1100px" mx="auto" px={{ base: 5, lg: 8 }} py={{ base: 12, lg: 16 }}>
        {/* Level bar */}
        <HStack gap={2} flexWrap="wrap" mb={10}>
          {LEVELS.map((level, index) => {
            const active = track.levels.includes(level.id);
            return (
              <React.Fragment key={level.id}>
                <Box
                  bg={level.bg}
                  border="2px solid"
                  borderColor={level.border}
                  borderRadius="full"
                  px={4}
                  py={2}
                  opacity={active ? 1 : 0.4}
                >
                  <Text
                    fontFamily="'Syne', sans-serif"
                    fontSize="11px"
                    fontWeight="bold"
                    textTransform="uppercase"
                    letterSpacing="wide"
                    color={level.accent}
                  >
                    {level.name}
                  </Text>
                </Box>
                {index < LEVELS.length - 1 ? (
                  <Text color="gray.400" fontSize="14px" display={{ base: "none", md: "block" }}>
                    →
                  </Text>
                ) : null}
              </React.Fragment>
            );
          })}
        </HStack>

        {/* Phases */}
        <Accordion.Root multiple defaultValue={["phase-0"]}>
          {track.phases.map((phase, phaseIndex) => {
            const level = LEVELS.find((l) => l.id === phase.level);
            return (
              <Accordion.Item
                key={phase.num}
                value={`phase-${phaseIndex}`}
                mb={5}
                bg="white"
                border="1px solid"
                borderColor="gray.200"
                borderRadius="16px"
                overflow="hidden"
                boxShadow="0 8px 24px rgba(16, 35, 26, 0.05)"
              >
                <Accordion.ItemTrigger px={{ base: 4, lg: 6 }} py={5} bg="transparent" textAlign="left">
                  <HStack gap={4} align="center" flex="1" flexWrap="wrap">
                    <Box
                      w="42px"
                      h="42px"
                      borderRadius="full"
                      bg={track.accent}
                      color="white"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      fontFamily="'Syne', sans-serif"
                      fontWeight="bold"
                      fontSize="15px"
                      flexShrink={0}
                    >
                      {phase.num}
                    </Box>
                    <VStack align="start" gap={0} flex="1" minW="200px">
                      <Text fontFamily="'Syne', sans-serif" fontWeight="bold" fontSize={{ base: "15px", lg: "17px" }} color="gray.800">
                        {phase.title} ({phase.months})
                      </Text>
                      <Text fontSize="13px" color="gray.500" lineHeight="1.5">
                        Identity: {phase.identity}
                      </Text>
                    </VStack>
                    <Box
                      bg={level.bg}
                      borderRadius="full"
                      px={3}
                      py={1}
                      display={{ base: "none", lg: "block" }}
                    >
                      <Text
                        fontFamily="'Syne', sans-serif"
                        fontSize="10px"
                        fontWeight="bold"
                        textTransform="uppercase"
                        letterSpacing="wide"
                        color={level.accent}
                        whiteSpace="nowrap"
                      >
                        {level.name.split("·")[1]?.trim()} · {level.months}
                      </Text>
                    </Box>
                  </HStack>
                  <Accordion.ItemIndicator color={track.accent} fontSize="20px" />
                </Accordion.ItemTrigger>

                <Accordion.ItemContent>
                  <Accordion.ItemBody
                    px={{ base: 4, lg: 6 }}
                    pb={6}
                    pt={0}
                    borderTop="1px solid"
                    borderColor="gray.200"
                  >
                    <Text fontSize="14px" color="gray.600" lineHeight="1.7" pt={5}>
                      {phase.summary}
                    </Text>

                    {phase.sections.map((section) => (
                      <Box key={section.month}>
                        <MonthLabel accent={track.accent}>{section.month}</MonthLabel>
                        {section.cycle ? <ProductionCycle cycle={section.cycle} /> : null}
                        {section.modules?.map((module) => (
                          <ModuleBlock key={module.label} module={module} accent={track.accent} />
                        ))}
                        {section.exhibition ? <ExhibitionBox exhibition={section.exhibition} /> : null}
                      </Box>
                    ))}

                    {phase.founderModule ? <FounderModule module={phase.founderModule} /> : null}
                    {phase.graduation ? (
                      <ExhibitionBox exhibition={phase.graduation} variant="solid" />
                    ) : null}
                  </Accordion.ItemBody>
                </Accordion.ItemContent>
              </Accordion.Item>
            );
          })}
        </Accordion.Root>

        {/* CTA */}
        <Box
          bg="linear-gradient(135deg, #059C02 0%, #0b7f03 100%)"
          borderRadius="20px"
          p={{ base: 7, lg: 10 }}
          textAlign="center"
          mt={12}
        >
          <VStack gap={4}>
            <Text
              fontFamily="'Syne', sans-serif"
              fontWeight="bold"
              fontSize={{ base: "22px", lg: "28px" }}
              color="white"
              textTransform="uppercase"
              lineHeight="1.2"
            >
              Enrol in {track.name}
            </Text>
            <Text color="whiteAlpha.900" maxW="520px" fontSize={{ base: "14px", lg: "16px" }} lineHeight="1.7">
              {track.ages} · {track.cadence}. Tell us about your child and we will confirm the right
              starting level.
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
                to="/programmes/how-it-works"
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
                How it works
              </Button>
            </HStack>
          </VStack>
        </Box>

        {/* Other tracks */}
        <Box mt={14}>
          <Text
            fontFamily="'Syne', sans-serif"
            fontWeight="bold"
            fontSize={{ base: "18px", lg: "22px" }}
            color="gray.800"
            textTransform="uppercase"
            mb={5}
          >
            Other tracks
          </Text>
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={4}>
            {otherTracks.map((other) => (
              <Box
                key={other.slug}
                as={RouterLink}
                to={`/programmes/${other.slug}`}
                bg={other.bg}
                border="1px solid"
                borderColor={other.border}
                borderRadius="14px"
                p={5}
                transition="all 0.25s ease"
                _hover={{ transform: "translateY(-3px)", borderColor: other.accent, textDecoration: "none" }}
              >
                <Text fontSize="11px" fontWeight="bold" textTransform="uppercase" letterSpacing="wide" color="blackAlpha.600" mb={1}>
                  {other.ages}
                </Text>
                <Text fontFamily="'Syne', sans-serif" fontWeight="bold" fontSize="17px" color={other.accent} mb={1}>
                  {other.name}
                </Text>
                <Text fontSize="13px" color="blackAlpha.700" lineHeight="1.5">
                  {other.duration}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
}

export default ProgrammeDetail;
