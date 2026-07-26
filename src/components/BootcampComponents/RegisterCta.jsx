import React, { useEffect, useMemo, useState } from "react";
import { Box, Text, VStack, HStack, Button } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { BOOTCAMP, getNextBatch } from "./bootcampDetails";

const shimmer = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`;

const slideUpIn = keyframes`
  0% { transform: translateY(120%); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
`;

// A plain anchor rather than a router link: the form lives on this same page, so
// this is an in-page jump and the global `scroll-behavior: smooth` handles it.
const REGISTER_HREF = BOOTCAMP.registerAnchor;

const useNextBatch = () => useMemo(() => getNextBatch(), []);

/**
 * The band that closes each section of the bootcamp page. A parent who has just
 * finished reading about batches, tracks or fees should never have to scroll
 * back up to act on it.
 */
export const RegisterCta = ({ title, body, label = "Register now", variant = "solid" }) => {
  const nextBatch = useNextBatch();
  const solid = variant === "solid";

  return (
    <Box
      data-register-cta=""
      bg={solid ? "linear-gradient(135deg, #059C02 0%, #0b7f03 100%)" : "white"}
      border={solid ? "none" : "1px solid"}
      borderColor={solid ? undefined : "green.200"}
      borderRadius="18px"
      p={{ base: 6, lg: 8 }}
      position="relative"
      overflow="hidden"
      boxShadow={solid ? "0 16px 34px rgba(5, 156, 2, 0.22)" : "0 8px 24px rgba(16, 35, 26, 0.05)"}
    >
      {solid ? (
        <Box
          position="absolute"
          top="0"
          left="-100%"
          w="100%"
          h="100%"
          background="linear-gradient(90deg, transparent, rgba(255,255,255,0.16), transparent)"
          animation={`${shimmer} 4s ease-in-out infinite`}
          pointerEvents="none"
        />
      ) : null}

      <HStack
        gap={6}
        justify="space-between"
        align={{ base: "start", md: "center" }}
        flexDirection={{ base: "column", md: "row" }}
        position="relative"
      >
        <VStack align="start" gap={2}>
          <Text
            fontFamily="'Syne', sans-serif"
            fontWeight="bold"
            fontSize={{ base: "18px", lg: "22px" }}
            color={solid ? "white" : "gray.800"}
            textTransform="uppercase"
            lineHeight="1.2"
          >
            {title}
          </Text>
          <Text
            fontSize={{ base: "14px", lg: "15px" }}
            color={solid ? "whiteAlpha.900" : "gray.600"}
            lineHeight="1.6"
            maxW="560px"
          >
            {body}
          </Text>
        </VStack>

        <VStack align={{ base: "start", md: "end" }} gap={2} flexShrink={0}>
          <Button
            as="a"
            href={REGISTER_HREF}
            px={8}
            py={6}
            borderRadius="full"
            bg={solid ? "white" : "linear-gradient(135deg, #059C02 0%, #0b7f03 100%)"}
            color={solid ? "green.700" : "white"}
            fontFamily="'Syne', sans-serif"
            fontWeight="bold"
            textTransform="uppercase"
            letterSpacing="wide"
            fontSize="13px"
            _hover={{
              transform: "translateY(-2px)",
              boxShadow: solid
                ? "0 12px 25px rgba(0,0,0,0.18)"
                : "0 12px 25px rgba(5, 156, 2, 0.35)",
            }}
            transition="all 0.3s ease"
          >
            {label}
          </Button>
          {nextBatch ? (
            <Text fontSize="12px" color={solid ? "whiteAlpha.800" : "gray.500"}>
              {nextBatch.name} starts {nextBatch.startsOn}
            </Text>
          ) : null}
        </VStack>
      </HStack>
    </Box>
  );
};

/**
 * Floating bar that appears once the registration form has scrolled out of
 * view, so the decision stays on screen for the whole page. Stops short of the
 * right edge to leave the WhatsApp button clear.
 */
export const StickyRegisterBar = () => {
  const [visible, setVisible] = useState(false);
  const nextBatch = useNextBatch();

  // Show the bar only when there is no other way to act on screen — neither the
  // form itself nor any of the section CTA bands. Two register buttons competing
  // in one viewport reads as clutter, not urgency.
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return undefined;

    const targets = [
      document.getElementById("register"),
      ...document.querySelectorAll("[data-register-cta]"),
    ].filter(Boolean);

    if (!targets.length) return undefined;

    const onScreen = new Set();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) onScreen.add(entry.target);
          else onScreen.delete(entry.target);
        });
        setVisible(onScreen.size === 0);
      },
      { threshold: 0 }
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  if (!visible) return null;

  return (
    <Box
      position="fixed"
      bottom={{ base: 4, md: 6 }}
      left={{ base: 4, md: 6 }}
      right={{ base: "86px", sm: "200px", md: "215px" }}
      zIndex="banner"
      bg="white"
      borderRadius="full"
      border="1px solid"
      borderColor="green.100"
      boxShadow="0 12px 34px rgba(16, 35, 26, 0.18)"
      px={{ base: 3, md: 5 }}
      py={{ base: 2, md: 3 }}
      animation={`${slideUpIn} 0.35s ease-out`}
    >
      <HStack justify="space-between" gap={4}>
        <VStack align="start" gap={0} display={{ base: "none", sm: "flex" }} minW={0}>
          <Text
            fontFamily="'Syne', sans-serif"
            fontWeight="bold"
            fontSize="13px"
            color="gray.800"
            whiteSpace="nowrap"
          >
            {BOOTCAMP.price} {BOOTCAMP.priceScope}
          </Text>
          <Text fontSize="11px" color="gray.500" whiteSpace="nowrap">
            {nextBatch ? `${nextBatch.name} starts ${nextBatch.startsOn}` : "Registration open"}
          </Text>
        </VStack>
        <Button
          as="a"
          href={REGISTER_HREF}
          w={{ base: "full", sm: "auto" }}
          px={{ base: 5, md: 7 }}
          py={5}
          borderRadius="full"
          bg="linear-gradient(135deg, #059C02 0%, #0b7f03 100%)"
          color="white"
          fontFamily="'Syne', sans-serif"
          fontWeight="bold"
          textTransform="uppercase"
          letterSpacing="wide"
          fontSize="12px"
          flexShrink={0}
          _hover={{ transform: "translateY(-1px)", boxShadow: "0 10px 22px rgba(5, 156, 2, 0.35)" }}
          transition="all 0.3s ease"
        >
          Register now
        </Button>
      </HStack>
    </Box>
  );
};

export default RegisterCta;
