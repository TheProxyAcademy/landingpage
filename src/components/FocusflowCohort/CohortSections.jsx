import { useEffect, useState } from "react";
import {
  Accordion,
  Box,
  Button,
  HStack,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { Link as RouterLink } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import focusflow1 from "../../assets/focusflow/focusflow-1.png";
import focusflow2 from "../../assets/focusflow/focusflow-2.png";
import focusflow3 from "../../assets/focusflow/focusflow-3.png";
import {
  COHORT,
  PRICING,
  WHATSAPP_ENROL,
  WHATSAPP_PRICING,
} from "./constants";
import {
  GreenBadge,
  SectionTitle,
  SectionWrapper,
  shimmer,
  slideInUp,
  useInView,
} from "./shared";

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
`;

const FOCUSFLOW_IMAGES = [
  { src: focusflow1, alt: "FocusFlow app — task list view" },
  { src: focusflow2, alt: "FocusFlow app — focus session view" },
  { src: focusflow3, alt: "FocusFlow app — dashboard view" },
];

const CAROUSEL_INTERVAL_MS = 2000;

function FocusflowCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % FOCUSFLOW_IMAGES.length);
    }, CAROUSEL_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <Box
      maxW="520px"
      mx="auto"
      animation={`${float} 5s ease-in-out infinite`}
      className="focusflow-carousel"
    >
      <Box
        position="relative"
        borderRadius="20px"
        border="1px solid"
        borderColor="gray.200"
        bg="gray.900"
        shadow="0 24px 48px rgba(0,0,0,0.12)"
        overflow="hidden"
        p={{ base: 3, md: 4 }}
      >
        <Box position="relative" h={{ base: "280px", sm: "320px", md: "360px" }}>
          {FOCUSFLOW_IMAGES.map((img, index) => {
            const isActive = index === activeIndex;
            return (
              <Box
                key={img.alt}
                position="absolute"
                inset={0}
                display="flex"
                alignItems="center"
                justifyContent="center"
                opacity={isActive ? 1 : 0.22}
                transform={isActive ? "scale(1)" : "scale(0.92)"}
                filter={isActive ? "none" : "blur(1px)"}
                transition="opacity 0.5s ease, transform 0.5s ease, filter 0.5s ease"
                zIndex={isActive ? 2 : 1}
                pointerEvents={isActive ? "auto" : "none"}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  maxH="100%"
                  maxW="100%"
                  objectFit="contain"
                  borderRadius="12px"
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                />
              </Box>
            );
          })}
        </Box>

        <HStack justify="center" spacing={2} mt={4} pb={1}>
          {FOCUSFLOW_IMAGES.map((img, index) => (
            <Box
              key={img.alt}
              as="button"
              type="button"
              aria-label={`Show screenshot ${index + 1}`}
              aria-current={index === activeIndex ? "true" : undefined}
              onClick={() => setActiveIndex(index)}
              w={index === activeIndex ? "28px" : "8px"}
              h="8px"
              borderRadius="full"
              bg={index === activeIndex ? "green.400" : "rgba(255,255,255,0.35)"}
              transition="all 0.3s ease"
              cursor="pointer"
              border="none"
              p={0}
            />
          ))}
        </HStack>
      </Box>

      {/* Thumbnail strip — all screenshots visible, active one highlighted */}
      <HStack spacing={3} mt={4} justify="center" flexWrap="wrap">
        {FOCUSFLOW_IMAGES.map((img, index) => (
          <Box
            key={img.alt}
            as="button"
            type="button"
            onClick={() => setActiveIndex(index)}
            flex="1"
            minW={{ base: "88px", md: "100px" }}
            maxW="140px"
            p={1.5}
            borderRadius="12px"
            border="2px solid"
            borderColor={index === activeIndex ? "green.500" : "gray.200"}
            bg="white"
            opacity={index === activeIndex ? 1 : 0.65}
            transform={index === activeIndex ? "scale(1.03)" : "scale(1)"}
            shadow={index === activeIndex ? "0 8px 24px rgba(5,156,2,0.2)" : "sm"}
            transition="all 0.3s ease"
            cursor="pointer"
            overflow="hidden"
          >
            <Image
              src={img.src}
              alt=""
              w="100%"
              h={{ base: "52px", md: "64px" }}
              objectFit="cover"
              objectPosition="top"
              borderRadius="8px"
              loading="lazy"
            />
          </Box>
        ))}
      </HStack>
    </Box>
  );
}

export function ProblemSection() {
  const { ref, visible } = useInView();
  return (
    <SectionWrapper id="problem" bg="gray.900" py={{ base: 16, lg: 24 }}>
      <Box ref={ref}>
        <SectionTitle
          visible={visible}
          variant="light"
          subtitle="Your child's school teaches them to memorize, recite, and pass exams. But the world they will enter needs creators, problem-solvers, and builders — people who can imagine a solution and bring it to life with technology."
        >
          Schools Are Teaching Your Child for a World That No Longer Exists.
        </SectionTitle>
        <Text
          color="gray.300"
          fontSize={{ base: "15px", lg: "17px" }}
          lineHeight="1.8"
          maxW="800px"
          mx="auto"
          textAlign="center"
          animation={visible ? `${slideInUp} 0.8s ease-out 0.2s both` : "none"}
        >
          While traditional schools focus on yesterday&apos;s curriculum, the children who
          will lead tomorrow&apos;s Africa are building skills that no textbook covers. The
          question is:{" "}
          <Text as="span" color="green.300" fontWeight="bold">
            will your child be one of them?
          </Text>
        </Text>
      </Box>
    </SectionWrapper>
  );
}

export function SolutionSection() {
  const { ref, visible } = useInView();
  return (
    <SectionWrapper id="solution" bg="linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)">
      <Box ref={ref}>
        <SectionTitle
          visible={visible}
          subtitle="A structured, mentor-led cohort where your child goes from zero coding experience to deploying a live web application — with accountability, support, and a portfolio they can show the world."
        >
          The Proxy Academy Is the Answer
        </SectionTitle>
        <SimpleGrid columns={{ base: 1, md: 3 }} gap={6} mt={4}>
          {[
            {
              title: "Real project",
              desc: `Every student ships ${COHORT.product} — not a toy exercise.`,
            },
            {
              title: "Live mentorship",
              desc: COHORT.delivery,
            },
            {
              title: "Portfolio-ready",
              desc: "A deployed URL parents can open, use, and share with family.",
            },
          ].map((item) => (
            <Box
              key={item.title}
              p={6}
              bg="rgba(255,255,255,0.9)"
              borderRadius="xl"
              border="1px solid rgba(5, 156, 2, 0.15)"
              shadow="lg"
              _hover={{ transform: "translateY(-4px)", transition: "all 0.3s" }}
            >
              <Text
                fontFamily="'Syne', sans-serif"
                fontWeight="bold"
                color="green.600"
                textTransform="uppercase"
                fontSize="sm"
                mb={3}
              >
                {item.title}
              </Text>
              <Text color="gray.600" lineHeight="1.65" fontSize="sm">
                {item.desc}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </SectionWrapper>
  );
}

export function FocusflowShowcaseSection() {
  const { ref, visible } = useInView();
  const bullets = [
    "FocusFlow helps users manage tasks and stay focused",
    "Built entirely with HTML, CSS, and JavaScript",
    "Every student deploys it live — a real URL they can share",
    "It goes directly into their professional portfolio",
    "Parents can see, use, and share their child's creation",
  ];

  return (
    <SectionWrapper
      id="focusflow-showcase"
      bg="linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 100%)"
    >
      <Box ref={ref}>
        <SectionTitle visible={visible}>What Your Child Will Actually Build</SectionTitle>
        <SimpleGrid columns={{ base: 1, lg: 2 }} gap={12} alignItems="center">
          <FocusflowCarousel />
          <VStack align="stretch" spacing={5}>
            <Text color="gray.700" fontSize={{ base: "15px", lg: "17px" }} lineHeight="1.75">
              In our {COHORT.name} course, every student builds{" "}
              <Text as="span" fontWeight="bold" color="green.700">
                {COHORT.product}
              </Text>{" "}
              — a real, functional productivity application that works in any web browser.
              This is not a tutorial. This is not a copy-paste exercise.
            </Text>
            <VStack align="stretch" spacing={3}>
              {bullets.map((b) => (
                <HStack key={b} align="flex-start" spacing={3}>
                  <Box mt={1.5} w="8px" h="8px" borderRadius="full" bg="green.500" flexShrink={0} />
                  <Text color="gray.600" fontSize="sm" lineHeight="1.6">
                    {b}
                  </Text>
                </HStack>
              ))}
            </VStack>
            <Box
              p={5}
              borderRadius="16px"
              bg="rgba(5, 156, 2, 0.06)"
              border="1px dashed"
              borderColor="green.300"
            >
              <Text fontSize="sm" color="gray.600" mb={2}>
                Demo video & live student builds coming as the founding cohort progresses.
              </Text>
              <Button
                as="a"
                href={COHORT.demoUrl}
                target="_blank"
                size="sm"
                variant="outline"
                borderColor="green.500"
                color="green.700"
                borderRadius="full"
                _hover={{ transform: "translateY(-2px)", shadow: "lg" }}
                transition="all 0.3s ease"
                px={4}
                py={2}
              >
                Preview the app
              </Button>
            </Box>
          </VStack>
        </SimpleGrid>
      </Box>
    </SectionWrapper>
  );
}

export function TransformationSection() {
  const { ref, visible } = useInView();
  const stories = [
    {
      name: "Your child",
      before:
        "Had never written a line of code. Nervous about technology and believed they were \"not a tech person.\"",
      after: `Deployed ${COHORT.product} live after 10 weeks. Their parents shared the link with family abroad. Already asking: What do I build next?`,
    },
  ];

  return (
    <SectionWrapper id="transformation" bg="white">
      <Box ref={ref}>
        <SectionTitle visible={visible}>
          Students Enter as Beginners. They Graduate as Builders.
        </SectionTitle>
        <Text textAlign="center" color="gray.500" fontSize="sm" mb={8} maxW="600px" mx="auto">
          Founding cohort journeys documented in real time — here&apos;s the transformation we
          design every student toward.
        </Text>
        {stories.map((s) => (
          <SimpleGrid key={s.name} columns={{ base: 1, md: 2 }} gap={6} maxW="1000px" mx="auto">
            <Box
              p={8}
              borderRadius="xl"
              bg="gray.50"
              borderLeft="4px solid"
              borderColor="gray.400"
            >
              <GreenBadge>Before</GreenBadge>
              <Text mt={4} color="gray.600" lineHeight="1.7" fontSize="sm">
                <Text as="span" fontWeight="bold" color="gray.800">
                  {s.name}
                </Text>{" "}
                {s.before}
              </Text>
            </Box>
            <Box
              p={8}
              borderRadius="xl"
              bg="green.50"
              borderLeft="4px solid"
              borderColor="green.500"
            >
              <GreenBadge>After 10 weeks</GreenBadge>
              <Text mt={4} color="gray.700" lineHeight="1.7" fontSize="sm">
                {s.after}
              </Text>
            </Box>
          </SimpleGrid>
        ))}
      </Box>
    </SectionWrapper>
  );
}

export function HowItWorksSection() {
  const { ref, visible } = useInView();
  const steps = [
    { n: "01", title: "Enrol", desc: "Secure a spot via our registration form or WhatsApp." },
    {
      n: "02",
      title: "Onboard",
      desc: "We confirm equipment, schedule, and match your child with their cohort.",
    },
    {
      n: "03",
      title: "Build weekly",
      desc: `An exhaustive instructional video followed by ${COHORT.sessionsPerWeek} live session per week building ${COHORT.product} step by step. The video is available until 24 hours after the live session.`,
    },
    {
      n: "04",
      title: "Deploy & celebrate",
      desc: "Your child launches their app live and adds it to their portfolio.",
    },
  ];

  return (
    <SectionWrapper
      id="how-it-works"
      bg="linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #f1f5f9 100%)"
    >
      <Box ref={ref}>
        <SectionTitle visible={visible} subtitle="No confusion. No guesswork. Here's exactly what happens.">
          How It Works
        </SectionTitle>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={6}>
          {steps.map((step, i) => (
            <Box
              key={step.n}
              p={6}
              bg="rgba(255,255,255,0.85)"
              borderRadius="xl"
              border="1px solid rgba(255,255,255,0.5)"
              shadow="md"
              position="relative"
              overflow="hidden"
              opacity={visible ? 1 : 0}
              animation={visible ? `${slideInUp} 0.6s ease-out ${i * 0.1}s both` : "none"}
            >
              <Text
                fontFamily="'Syne', sans-serif"
                fontSize="3xl"
                fontWeight="bold"
                color="green.100"
                position="absolute"
                top={2}
                right={4}
              >
                {step.n}
              </Text>
              <Text
                fontFamily="'Syne', sans-serif"
                fontWeight="bold"
                color="green.700"
                textTransform="uppercase"
                fontSize="sm"
                mb={3}
              >
                {step.title}
              </Text>
              <Text color="gray.600" fontSize="sm" lineHeight="1.65">
                {step.desc}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </SectionWrapper>
  );
}

export function PricingSection() {
  const { ref, visible } = useInView();
  return (
    <SectionWrapper id="pricing" bg="white">
      <Box ref={ref}>
        <SectionTitle
          visible={visible}
          subtitle="Full value first — then a clear investment with flexible options for Nigerian families."
        >
          Invest in Your Child&apos;s Future
        </SectionTitle>
        <SimpleGrid columns={{ base: 1, lg: 2 }} gap={10} maxW="1100px" mx="auto">
          <VStack align="stretch" spacing={4}>
            <Text fontFamily="'Syne', sans-serif" fontWeight="bold" color="green.700" fontSize="sm" textTransform="uppercase">
              What&apos;s included
            </Text>
            {PRICING.includes.map((item) => (
              <HStack key={item} align="flex-start" spacing={3}>
                <Text color="green.500" fontWeight="bold">
                  ✓
                </Text>
                <Text color="gray.600" fontSize="sm" lineHeight="1.6">
                  {item}
                </Text>
              </HStack>
            ))}
          </VStack>
          <Box
            p={8}
            borderRadius="24px"
            bg="linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)"
            border="1px solid rgba(5, 156, 2, 0.25)"
            position="relative"
            overflow="hidden"
          >
            <Box
              position="absolute"
              top={0}
              left={0}
              right={0}
              bottom={0}
              bg="linear-gradient(90deg, transparent, rgba(5, 156, 2, 0.08), transparent)"
              animation={`${shimmer} 3s ease-in-out infinite`}
              pointerEvents="none"
            />
            <VStack align="stretch" spacing={5} position="relative">
              <Text fontFamily="'Syne', sans-serif" fontWeight="bold" color="gray.500" fontSize="sm" textTransform="uppercase">
                Cohort investment
              </Text>
              <Text
                fontSize={{ base: "40px", lg: "48px" }}
                fontFamily="'Syne', sans-serif"
                fontWeight="bold"
                color="green.700"
                lineHeight="1"
              >
                {PRICING.fullPrice}
              </Text>
              <Text color="gray.600" fontSize="sm">
                {PRICING.installmentLabel}. {PRICING.installmentNote}
              </Text>
              <Button
                as={RouterLink}
                to="/register"
                size="lg"
                borderRadius="full"
                bg="linear-gradient(135deg, #059C02 0%, #0b7f03 100%)"
                color="white"
                fontFamily="'Syne', sans-serif"
                fontWeight="bold"
                textTransform="uppercase"
                _hover={{ transform: "translateY(-2px)", shadow: "lg" }}
              >
                Secure Your Child&apos;s Spot
              </Button>
              <Button
                as="a"
                href={WHATSAPP_PRICING}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                borderRadius="full"
                bg="linear-gradient(135deg, #25D366, #128C7E)"
                color="white"
                fontFamily="'Syne', sans-serif"
                fontWeight="bold"
                leftIcon={<FaWhatsapp />}
              >
                Questions about pricing? Chat with us
              </Button>
            </VStack>
          </Box>
        </SimpleGrid>
      </Box>
    </SectionWrapper>
  );
}

export function FounderSection() {
  const { ref, visible } = useInView();
  return (
    <SectionWrapper id="founder" bg="linear-gradient(135deg, rgba(5,156,2,0.04) 0%, rgba(4,127,1,0.06) 100%)">
      <Box ref={ref} maxW="800px" mx="auto">
        <SectionTitle visible={visible}>Built by Educators Who Believe Africa&apos;s Children Deserve More</SectionTitle>
        <Box
          p={8}
          bg="white"
          borderRadius="xl"
          shadow="lg"
          border="1px solid"
          borderColor="green.100"
          animation={visible ? `${slideInUp} 0.8s ease-out` : "none"}
        >
          <HStack spacing={6} align="flex-start" flexDir={{ base: "column", sm: "row" }}>
            <Box
              w="80px"
              h="80px"
              borderRadius="full"
              bg="linear-gradient(135deg, #059C02, #0b7f03)"
              flexShrink={0}
              display="flex"
              alignItems="center"
              justifyContent="center"
              color="white"
              fontFamily="'Syne', sans-serif"
              fontWeight="bold"
              fontSize="2xl"
            >
              PA
            </Box>
            <VStack align="flex-start" spacing={3}>
              <Text fontFamily="'Syne', sans-serif" fontWeight="bold" color="green.700">
                The Proxy Academy Team
              </Text>
              <Text color="gray.600" lineHeight="1.75" fontSize="sm">
                We started The Proxy Academy because we saw brilliant Nigerian children
                being prepared for jobs that won&apos;t exist — while the builders of
                tomorrow&apos;s economy learn elsewhere. This cohort is our commitment:
                your child leaves with proof, not promises.
              </Text>
            </VStack>
          </HStack>
        </Box>
      </Box>
    </SectionWrapper>
  );
}

export function CohortFaqSection() {
  const { ref, visible } = useInView();
  const faqs = [
    {
      q: "Does my child need prior experience?",
      a: "No. Absolute beginners are welcome. We start from the fundamentals and move at a pace that supports every learner.",
    },
    {
      q: "What equipment does my child need?",
      a: "Any laptop or computer with a stable internet connection. We'll guide you through setup if needed.",
    },
    {
      q: "How long is the course?",
      a: `${COHORT.durationWeeks} weeks — ${COHORT.sessionsPerWeek} live sessions per week, ${COHORT.sessionMinutes} minutes each.`,
    },
    {
      q: "Is this online, in-person, or both?",
      a: COHORT.delivery,
    },
    {
      q: "What happens after the course?",
      a: "Your child keeps their live project in their portfolio, stays connected to our community, and can advance into next-level courses.",
    },
    {
      q: "What if my child falls behind?",
      a: "Mentors provide extra support sessions and check-ins. No student is left to struggle alone — we track progress weekly.",
    },
    {
      q: "How is this different from YouTube tutorials?",
      a: "Cohort structure, live accountability, mentor feedback, a deployed portfolio project, and a certificate — not passive watching.",
    },
  ];

  return (
    <SectionWrapper
      id="faq"
      bg="linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #f1f5f9 100%)"
    >
      <Box ref={ref} maxW="900px" mx="auto">
        <SectionTitle visible={visible}>Frequently Asked Questions</SectionTitle>
        <Accordion.Root defaultValue={["0"]} multiple>
          {faqs.map((faq, index) => (
            <Box key={faq.q} mb={4} opacity={visible ? 1 : 0} animation={visible ? `${slideInUp} 0.5s ease-out ${index * 0.05}s both` : "none"}>
              <Accordion.Item
                value={String(index)}
                bg="rgba(255, 255, 255, 0.85)"
                borderRadius="16px"
                border="1px solid rgba(255,255,255,0.5)"
                overflow="hidden"
                shadow="md"
              >
                <Accordion.ItemTrigger
                  p={5}
                  fontFamily="'Syne', sans-serif"
                  fontWeight="600"
                  fontSize={{ base: "15px", lg: "17px" }}
                  color="gray.700"
                  _hover={{ bg: "rgba(5, 156, 2, 0.05)", color: "green.700" }}
                >
                  {faq.q}
                  <Accordion.ItemIndicator color="green.500" />
                </Accordion.ItemTrigger>
                <Accordion.ItemContent>
                  <Accordion.ItemBody p={5} pt={0}>
                    <Text color="gray.600" fontSize="sm" lineHeight="1.65" pl={3} borderLeft="2px solid" borderColor="green.200">
                      {faq.a}
                    </Text>
                  </Accordion.ItemBody>
                </Accordion.ItemContent>
              </Accordion.Item>
            </Box>
          ))}
        </Accordion.Root>
      </Box>
    </SectionWrapper>
  );
}

export function FinalCtaSection() {
  const { ref, visible } = useInView();
  return (
    <SectionWrapper id="enrol" bg="gray.900" py={{ base: 16, lg: 20 }}>
      <Box ref={ref} textAlign="center">
        <Text
          as="h2"
          fontFamily="'Syne', sans-serif"
          fontSize={{ base: "28px", lg: "40px" }}
          fontWeight="bold"
          color="white"
          mb={4}
          animation={visible ? `${slideInUp} 0.8s ease-out` : "none"}
        >
          Ready for Your Child to Become a Builder?
        </Text>
        <Text color="gray.400" maxW="560px" mx="auto" mb={8} lineHeight="1.7" fontSize="md">
          Spots in our founding {COHORT.product} cohort are limited. Secure your child&apos;s
          place today — or message us on WhatsApp with any questions.
        </Text>
        <HStack spacing={4} justify="center" flexWrap="wrap">
          <Button
            as={RouterLink}
            to="/register"
            size="lg"
            px={10}
            borderRadius="full"
            bg="linear-gradient(135deg, #059C02 0%, #0b7f03 100%)"
            color="white"
            fontFamily="'Syne', sans-serif"
            fontWeight="bold"
            textTransform="uppercase"
            _hover={{ transform: "translateY(-2px)" }}
          >
            Secure Your Child&apos;s Spot
          </Button>
          <Button
            as="a"
            href={WHATSAPP_ENROL}
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            px={10}
            borderRadius="full"
            bg="linear-gradient(135deg, #25D366, #128C7E)"
            color="white"
            fontFamily="'Syne', sans-serif"
            fontWeight="bold"
            leftIcon={<FaWhatsapp />}
          >
            Chat on WhatsApp
          </Button>
        </HStack>
        <Button
          as="a"
          href="https://calendly.com/proxyacademyint/30min"
          target="_blank"
          rel="noopener noreferrer"
          variant="ghost"
          color="green.300"
          mt={6}
          size="sm"
          _hover={{ color: "green.600", px: 3, py: 2 }}
          transition="all 0.3s ease"
        >
          Or book a free 30-minute call →
        </Button>
      </Box>
    </SectionWrapper>
  );
}
