import React from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import {
  Box,
  Container,
  Text,
  VStack,
  HStack,
  SimpleGrid,
  Button,
} from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { FaWhatsapp } from "react-icons/fa";
import Seo from "../components/Seo";

const floatUp = keyframes`
  0% { transform: translateY(0px) rotate(0deg); opacity: 0.3; }
  50% { transform: translateY(-25px) rotate(180deg); opacity: 0.6; }
  100% { transform: translateY(0px) rotate(360deg); opacity: 0.3; }
`;

const slideInUp = keyframes`
  0% { transform: translateY(40px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
`;

const WHATSAPP_URL =
  "https://wa.me/+2349152811014?text=" +
  encodeURIComponent("Hi The Proxy Academy team! I hit a broken link on your site.");

const DESTINATIONS = [
  {
    icon: "🎓",
    title: "Our programmes",
    body: "Four mastery tracks, from first line of code to a graduate portfolio.",
    to: "/programmes",
  },
  {
    icon: "☀️",
    title: "Summer Tech Bootcamp",
    body: "Three weeks, live online, five tracks. Registration is open.",
    to: "/summerbootcamp",
  },
  {
    icon: "📝",
    title: "Enrol your child",
    body: "Complete the short registration form and we'll be in touch.",
    to: "/register",
  },
];

// Rendered by the catch-all route, and by the static 404.html a host serves for
// unknown paths — so it has to stand on its own without any prior page context.
function NotFound() {
  const { pathname } = useLocation();

  return (
    <Box
      bg="linear-gradient(135deg, #f0fdf4 0%, #dcfce7 50%, #bbf7d0 100%)"
      position="relative"
      overflow="hidden"
      minH="80vh"
      py={{ base: 14, lg: 20 }}
    >
      <Seo
        title="Page Not Found"
        description="The page you were looking for doesn't exist. Explore The Proxy Academy's tech programmes for kids and teens instead."
        noindex
      />

      {/* Floating background elements, matching the bootcamp hero */}
      <Box
        position="absolute"
        top="14%"
        left="7%"
        fontSize="16px"
        fontWeight="bold"
        color="rgba(5, 156, 2, 0.15)"
        animation={`${floatUp} 8s ease-in-out infinite`}
        fontFamily="'Syne', sans-serif"
        aria-hidden="true"
      >
        &lt;404&gt;
      </Box>
      <Box
        position="absolute"
        top="28%"
        right="10%"
        fontSize="14px"
        fontWeight="bold"
        color="rgba(5, 156, 2, 0.15)"
        animation={`${floatUp} 6s ease-in-out infinite 2s`}
        fontFamily="'Syne', sans-serif"
        aria-hidden="true"
      >
        NOT FOUND
      </Box>
      <Box
        position="absolute"
        bottom="18%"
        left="12%"
        fontSize="18px"
        fontWeight="bold"
        color="rgba(5, 156, 2, 0.15)"
        animation={`${floatUp} 7s ease-in-out infinite 1s`}
        fontFamily="'Syne', sans-serif"
        aria-hidden="true"
      >
        &lt;/oops&gt;
      </Box>

      <Container maxW="900px" mx="auto" px={{ base: 5, lg: 8 }} position="relative">
        <VStack gap={6} textAlign="center" animation={`${slideInUp} 0.8s ease-out`}>
          <Text
            fontFamily="'Syne', sans-serif"
            fontWeight="bold"
            fontSize={{ base: "80px", md: "120px", lg: "150px" }}
            lineHeight="0.9"
            background="linear-gradient(135deg, #059C02 0%, #0b7f03 100%)"
            backgroundClip="text"
            color="transparent"
            letterSpacing="tight"
          >
            404
          </Text>

          <Box
            w="80px"
            h="4px"
            bg="linear-gradient(135deg, #059C02 0%, #0b7f03 100%)"
            borderRadius="2px"
          />

          <VStack gap={4}>
            <Text
              as="h1"
              fontFamily="'Syne', sans-serif"
              fontWeight="bold"
              fontSize={{ base: "24px", md: "32px" }}
              color="gray.800"
              textTransform="uppercase"
              lineHeight="1.2"
            >
              This page doesn't exist
            </Text>
            <Text
              fontSize={{ base: "15px", lg: "17px" }}
              color="gray.700"
              maxW="560px"
              lineHeight="1.7"
            >
              The link may be out of date, or the address may have a typo in it. Nothing is broken
              on your end — here's where you probably wanted to go.
            </Text>
            {pathname && pathname !== "/" ? (
              <Text
                fontSize="13px"
                color="gray.500"
                fontFamily="monospace"
                bg="whiteAlpha.700"
                border="1px solid"
                borderColor="green.100"
                borderRadius="full"
                px={4}
                py={2}
                maxW="full"
                overflow="hidden"
                textOverflow="ellipsis"
                whiteSpace="nowrap"
              >
                {pathname}
              </Text>
            ) : null}
          </VStack>

          <HStack gap={3} flexWrap="wrap" justify="center" pt={2}>
            <Button
              as={RouterLink}
              to="/"
              px={8}
              py={6}
              borderRadius="full"
              bg="linear-gradient(135deg, #059C02 0%, #0b7f03 100%)"
              color="white"
              fontFamily="'Syne', sans-serif"
              fontWeight="bold"
              textTransform="uppercase"
              letterSpacing="wide"
              fontSize="13px"
              _hover={{
                transform: "translateY(-2px)",
                boxShadow: "0 12px 25px rgba(5, 156, 2, 0.35)",
              }}
              transition="all 0.3s ease"
            >
              Back to home
            </Button>
            <Button
              as="a"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
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
              transition="all 0.3s ease"
            >
              <HStack gap={2}>
                <Box as={FaWhatsapp} boxSize={4} aria-hidden="true" />
                <Text>Tell us what broke</Text>
              </HStack>
            </Button>
          </HStack>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 3 }} gap={4} mt={{ base: 12, lg: 16 }}>
          {DESTINATIONS.map((item, index) => (
            <Box
              key={item.to}
              as={RouterLink}
              to={item.to}
              bg="rgba(255, 255, 255, 0.85)"
              backdropFilter="blur(10px)"
              border="1px solid"
              borderColor="whiteAlpha.700"
              borderRadius="16px"
              p={6}
              textAlign="left"
              boxShadow="0 8px 24px rgba(16, 35, 26, 0.06)"
              transition="all 0.3s ease"
              animation={`${slideInUp} 0.8s ease-out ${0.2 + index * 0.1}s both`}
              _hover={{
                transform: "translateY(-4px)",
                boxShadow: "0 16px 34px rgba(5, 156, 2, 0.18)",
                borderColor: "green.300",
                textDecoration: "none",
              }}
            >
              <VStack align="start" gap={3}>
                <Box
                  fontSize="20px"
                  w="44px"
                  h="44px"
                  bg="rgba(5, 156, 2, 0.1)"
                  borderRadius="12px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  border="1px solid rgba(5, 156, 2, 0.2)"
                >
                  {item.icon}
                </Box>
                <Text
                  fontFamily="'Syne', sans-serif"
                  fontWeight="bold"
                  fontSize="16px"
                  color="gray.800"
                >
                  {item.title}
                </Text>
                <Text fontSize="14px" color="gray.600" lineHeight="1.6">
                  {item.body}
                </Text>
                <Text fontSize="13px" fontWeight="600" color="green.600">
                  Go there →
                </Text>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export default NotFound;
