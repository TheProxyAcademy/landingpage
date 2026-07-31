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
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import Seo from "../components/Seo";
import { SectionHeading, Card, Pill, FeatureCard, CheckList, slideInUp } from "../components/Programmes/shared";
import { BOOTCAMP } from "../components/BootcampComponents/bootcampDetails";

// The trust material parents actually decide on. It previously lived only in the
// bootcamp FAQ, where only bootcamp visitors ever saw it.
const STATS = [
  { figure: "300+", label: "Children taught" },
  { figure: "15+", label: "Countries reached" },
  { figure: "5", label: "Annual summer bootcamps" },
  { figure: "2021", label: "Teaching since December" },
];

const PRINCIPLES = [
  {
    icon: "🛠️",
    title: "They build, they don't watch",
    body: "Every session ends with something on the child's own screen that has to work. Recorded courses are the kind of thing children abandon in week one.",
  },
  {
    icon: "👩🏽‍🏫",
    title: "A tutor is always on the call",
    body: "Classes are live, and groups are small enough that a tutor notices when a child goes quiet. No child is ever on a call alone.",
  },
  {
    icon: "📋",
    title: "Written facilitator manuals",
    body: "Every session runs from a written manual, so what your child gets does not depend on who happens to be teaching that day.",
  },
  {
    icon: "🎤",
    title: "They present what they made",
    body: "Each programme ends with a Demo Day where children present their project to parents and peers. Children work differently when someone is going to see it.",
  },
];

const SAFETY = [
  "A tutor supervises every session, for the whole session.",
  "Children work in accounts we create and monitor, not personal accounts.",
  "We teach the Proxy AI Code in week one: never type your full name, address, school or photos into an AI tool, and tell a tutor at once if anything strange appears on screen.",
  "We teach children to check AI's answers rather than copy them — we hand them confidently wrong answers and they have to catch the mistakes.",
];

function About() {
  return (
    <Box bg="#faf9f7">
      <Seo
        title="About Us"
        description="The Proxy Academy is a CAC-registered tech academy in Ibadan, Nigeria, teaching children and teenagers to build with technology since December 2021. Over 300 students taught across 15+ countries."
        canonicalPath="/about"
      />

      {/* Hero */}
      <Box bg="linear-gradient(135deg, #0f0e0d 0%, #1e1c19 65%, #10231a 100%)" py={{ base: 12, lg: 20 }}>
        <Container maxW="1100px" mx="auto" px={{ base: 5, lg: 8 }}>
          <VStack align="start" gap={4} animation={`${slideInUp} 0.8s ease-out`}>
            <Pill bg="rgba(5, 156, 2, 0.9)" color="white">
              About us
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
              We teach children to build with a computer, not just consume on one
            </Text>
            <Text fontSize={{ base: "15px", lg: "17px" }} color="whiteAlpha.700" maxW="680px" lineHeight="1.7">
              The Proxy Academy is a CAC-registered tech academy based in Ibadan, Nigeria. We have been
              running live classes for children and teenagers since December 2021, and we have taught
              over 300 of them.
            </Text>
          </VStack>
        </Container>
      </Box>

      <Container maxW="1100px" mx="auto" px={{ base: 5, lg: 8 }} py={{ base: 12, lg: 18 }}>
        <VStack align="stretch" gap={{ base: 16, lg: 22 }}>
          {/* Stats */}
          <SimpleGrid columns={{ base: 2, lg: 4 }} gap={5}>
            {STATS.map((stat) => (
              <Card key={stat.label} textAlign="center">
                <Text
                  fontFamily="'Syne', sans-serif"
                  fontWeight="bold"
                  fontSize={{ base: "28px", lg: "36px" }}
                  color="green.600"
                  lineHeight="1"
                >
                  {stat.figure}
                </Text>
                <Text fontSize="13px" color="gray.600" mt={2}>
                  {stat.label}
                </Text>
              </Card>
            ))}
          </SimpleGrid>

          {/* Story */}
          <Box>
            <SectionHeading eyebrow="Our story" title="Why we started">
              There is a gap in the educational system where digital skills should be. We are closing it
              in the way children actually learn — by making things.
            </SectionHeading>
            <VStack align="start" gap={4} maxW="760px">
              <Text fontSize={{ base: "15px", lg: "16px" }} color="gray.700" lineHeight="1.8">
                Most Nigerian children meet technology as something that happens to them. They watch on a
                phone, they scroll, they consume. Almost none of them are shown that the same device can
                be used to make something nobody has made before.
              </Text>
              <Text fontSize={{ base: "15px", lg: "16px" }} color="gray.700" lineHeight="1.8">
                Our founder, Kolade Olusola, started The Proxy Academy in December 2021 to close that gap,
                and still takes classes himself. What began as a handful of students has become a full
                mastery programme, an annual summer bootcamp now in its fifth year, and over 300 children
                taught across more than 15 countries.
              </Text>
              <Text fontSize={{ base: "15px", lg: "16px" }} color="gray.700" lineHeight="1.8">
                We are not promising to turn a child into a professional programmer in three weeks, and we
                say so plainly. What we can do is show a child that they can build things with a computer
                instead of only consuming things on one. That switch is the whole point. The children who
                catch it have somewhere to keep going.
              </Text>
            </VStack>
          </Box>

          {/* How we teach */}
          <Box>
            <SectionHeading eyebrow="How we teach" title="Four things we do differently">
              These are not preferences. They are the reasons children finish what they start with us.
            </SectionHeading>
            <SimpleGrid columns={{ base: 1, md: 2 }} gap={5}>
              {PRINCIPLES.map((principle) => (
                <FeatureCard
                  key={principle.title}
                  icon={principle.icon}
                  title={principle.title}
                  body={principle.body}
                />
              ))}
            </SimpleGrid>
          </Box>

          {/* Safety */}
          <Box>
            <SectionHeading eyebrow="Safety" title="How we keep children safe online">
              Classes are online, which means supervision has to be deliberate rather than assumed.
            </SectionHeading>
            <Card maxW="820px">
              <CheckList items={SAFETY} />
            </Card>
          </Box>

          {/* Trust */}
          <Box>
            <SectionHeading eyebrow="Credentials" title="How to check us out">
              You should not have to take any of this on faith before you pay.
            </SectionHeading>
            <SimpleGrid columns={{ base: 1, md: 3 }} gap={5}>
              <FeatureCard
                icon="📜"
                title="CAC-registered"
                body="The Proxy Academy Ltd is registered with the Corporate Affairs Commission and based in Ibadan, Oyo State."
              />
              <FeatureCard
                icon="📸"
                title="Four editions on record"
                body="Classes, projects and Demo Days from previous bootcamps are on our Instagram, going back years."
              />
              <FeatureCard
                icon="💬"
                title="Speak to someone first"
                body="Message us on WhatsApp before you pay and we will arrange a call. We would rather answer your questions than have you guess."
              />
            </SimpleGrid>
          </Box>

          {/* CTA */}
          <Box
            bg="linear-gradient(135deg, #059C02 0%, #0b7f03 100%)"
            borderRadius="18px"
            p={{ base: 6, lg: 10 }}
            boxShadow="0 16px 34px rgba(5, 156, 2, 0.22)"
          >
            <HStack
              gap={6}
              justify="space-between"
              align={{ base: "start", md: "center" }}
              flexDirection={{ base: "column", md: "row" }}
            >
              <VStack align="start" gap={2}>
                <Text
                  fontFamily="'Syne', sans-serif"
                  fontWeight="bold"
                  fontSize={{ base: "20px", lg: "26px" }}
                  color="white"
                  textTransform="uppercase"
                  lineHeight="1.2"
                >
                  Come and see for yourself
                </Text>
                <Text fontSize={{ base: "14px", lg: "15px" }} color="whiteAlpha.900" maxW="560px" lineHeight="1.7">
                  Start with the summer bootcamp, explore the full mastery programme, or just send us a
                  message and ask whatever you need to ask.
                </Text>
              </VStack>
              <Wrap gap={3} flexShrink={0}>
                <WrapItem>
                  <Button
                    as={RouterLink}
                    to="/summerbootcamp"
                    px={7}
                    py={6}
                    borderRadius="full"
                    bg="white"
                    color="green.700"
                    fontFamily="'Syne', sans-serif"
                    fontWeight="bold"
                    textTransform="uppercase"
                    letterSpacing="wide"
                    fontSize="13px"
                    _hover={{ transform: "translateY(-2px)", boxShadow: "0 12px 25px rgba(0,0,0,0.18)" }}
                    transition="all 0.3s ease"
                  >
                    Summer bootcamp
                  </Button>
                </WrapItem>
                <WrapItem>
                  <Button
                    as="a"
                    href={BOOTCAMP.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    px={7}
                    py={6}
                    borderRadius="full"
                    bg="whiteAlpha.200"
                    color="white"
                    border="1px solid rgba(255,255,255,0.5)"
                    fontFamily="'Syne', sans-serif"
                    fontWeight="bold"
                    textTransform="uppercase"
                    letterSpacing="wide"
                    fontSize="13px"
                    _hover={{ transform: "translateY(-2px)", bg: "whiteAlpha.300" }}
                    transition="all 0.3s ease"
                  >
                    Message us
                  </Button>
                </WrapItem>
              </Wrap>
            </HStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}

export default About;
