import { useEffect, useRef, useState } from "react";
import {
  Badge,
  Box,
  Button,
  Container,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { Link as RouterLink } from "react-router-dom";
import { COHORT } from "./constants";

const floatUp = keyframes`
  0% { transform: translateY(0px); opacity: 0.2; }
  50% { transform: translateY(-20px); opacity: 0.35; }
  100% { transform: translateY(0px); opacity: 0.2; }
`;

const slideInUp = keyframes`
  0% { transform: translateY(50px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
`;

function CohortHero() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Box
      ref={ref}
      id="hero"
      bg="linear-gradient(135deg, #f0fdf4 0%, #dcfce7 50%, #bbf7d0 100%)"
      position="relative"
      overflow="hidden"
      minH={{ base: "auto", lg: "90vh" }}
      pt={{ base: 24, lg: 28 }}
      pb={{ base: 14, lg: 20 }}
    >
      <Box
        position="absolute"
        top="18%"
        left="6%"
        fontSize="14px"
        fontWeight="bold"
        color="rgba(5, 156, 2, 0.12)"
        animation={`${floatUp} 7s ease-in-out infinite`}
        fontFamily="'Syne', sans-serif"
      >
        &lt;FocusFlow&gt;
      </Box>
      <Box
        position="absolute"
        bottom="22%"
        right="8%"
        fontSize="13px"
        fontWeight="bold"
        color="rgba(5, 156, 2, 0.12)"
        animation={`${floatUp} 8s ease-in-out infinite 1.5s`}
        fontFamily="'Syne', sans-serif"
      >
        8 WEEKS
      </Box>

      <Container maxW="1440px" px={{ base: 5, lg: 20 }}>
        <VStack
          align="center"
          textAlign="center"
          spacing={8}
          maxW="900px"
          mx="auto"
          opacity={visible ? 1 : 0}
          animation={visible ? `${slideInUp} 1s ease-out` : "none"}
        >
          <HStack spacing={3} flexWrap="wrap" justify="center">
            <Badge
              bg="rgba(5, 156, 2, 0.1)"
              color="green.700"
              px={4}
              py={2}
              borderRadius="full"
              fontFamily="'Syne', sans-serif"
              fontWeight="bold"
              fontSize="11px"
              textTransform="uppercase"
              letterSpacing="wide"
              border="1px solid rgba(5, 156, 2, 0.3)"
            >
              Founding Cohort · Ages {COHORT.ages}
            </Badge>
            <Badge
              bg="linear-gradient(135deg, #f59e0b 0%, #d97706 100%)"
              color="white"
              px={4}
              py={2}
              borderRadius="full"
              fontFamily="'Syne', sans-serif"
              fontWeight="bold"
              fontSize="11px"
              textTransform="uppercase"
            >
              Intro to Web Development
            </Badge>
          </HStack>

          <Text
            as="h1"
            fontSize={{ base: "30px", md: "42px", lg: "52px" }}
            fontFamily="'Syne', sans-serif"
            fontWeight="bold"
            lineHeight="1.1"
            background="linear-gradient(135deg, #059C02 0%, #0b7f03 100%)"
            backgroundClip="text"
            color="transparent"
            letterSpacing="tight"
          >
            Your Child Will Build a Real App in 10 Weeks — or Your Money Back.
          </Text>

          <Box
            w="80px"
            h="4px"
            bg="linear-gradient(135deg, #059C02 0%, #0b7f03 100%)"
            borderRadius="2px"
          />

          <Text
            fontSize={{ base: "16px", lg: "19px" }}
            color="gray.700"
            lineHeight="1.75"
            maxW="780px"
            fontWeight="500"
          >
            The Proxy Academy is Africa&apos;s future-readiness academy for children
            ages {COHORT.ages}. Our students don&apos;t just learn to code — they build
            real projects, earn real portfolios, and develop the innovation mindset
            the next African economy demands.
          </Text>

          <HStack spacing={4} flexWrap="wrap" justify="center" pt={2}>
            <Button
              as={RouterLink}
              to="/register"
              size="lg"
              px={10}
              py={7}
              borderRadius="full"
              bg="linear-gradient(135deg, #059C02 0%, #0b7f03 100%)"
              color="white"
              fontFamily="'Syne', sans-serif"
              fontWeight="bold"
              textTransform="uppercase"
              letterSpacing="wide"
              fontSize="sm"
              _hover={{
                transform: "translateY(-2px)",
                shadow: "0 12px 35px rgba(5, 156, 2, 0.35)",
              }}
              transition="all 0.3s ease"
            >
              Secure Your Child&apos;s Spot
            </Button>
            <Button
              as="a"
              href={COHORT.demoUrl}
              target="_blank"
              size="lg"
              px={10}
              py={7}
              borderRadius="full"
              variant="outline"
              borderColor="green.600"
              color="green.700"
              fontFamily="'Syne', sans-serif"
              fontWeight="bold"
              textTransform="uppercase"
              letterSpacing="wide"
              fontSize="sm"
              bg="rgba(255,255,255,0.7)"
              _hover={{ bg: "white", transform: "translateY(-2px)" }}
              transition="all 0.3s ease"
            >
              See What Students Build
            </Button>
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
}

export default CohortHero;
