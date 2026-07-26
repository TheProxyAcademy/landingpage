import React from "react";
import { Box, Text, VStack, HStack } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

export const slideInUp = keyframes`
  0% { transform: translateY(40px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
`;

export const SectionHeading = ({ eyebrow, title, children, align = "start", ...rest }) => (
  <VStack align={align} gap={3} mb={8} textAlign={align === "center" ? "center" : "left"} {...rest}>
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
      <Text
        fontSize={{ base: "15px", lg: "16px" }}
        color="gray.600"
        lineHeight="1.7"
        maxW="680px"
        mx={align === "center" ? "auto" : undefined}
      >
        {children}
      </Text>
    ) : null}
  </VStack>
);

export const Card = ({ children, ...rest }) => (
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

export const Pill = ({ children, bg = "rgba(5, 156, 2, 0.1)", color = "green.700", ...rest }) => (
  <Box
    as="span"
    display="inline-block"
    bg={bg}
    color={color}
    px={3}
    py={1}
    borderRadius="full"
    fontFamily="'Syne', sans-serif"
    fontSize="11px"
    fontWeight="bold"
    letterSpacing="wide"
    textTransform="uppercase"
    {...rest}
  >
    {children}
  </Box>
);

export const IconTile = ({ children, size = "46px", ...rest }) => (
  <Box
    fontSize="22px"
    w={size}
    h={size}
    flexShrink={0}
    bg="rgba(5, 156, 2, 0.08)"
    borderRadius="12px"
    display="flex"
    alignItems="center"
    justifyContent="center"
    border="1px solid rgba(5, 156, 2, 0.18)"
    {...rest}
  >
    {children}
  </Box>
);

// Icon + heading + body, used for pillars, touchpoints and the prestige grid.
export const FeatureCard = ({ icon, title, body }) => (
  <Card>
    <VStack align="start" gap={3}>
      {icon ? <IconTile>{icon}</IconTile> : null}
      <Text fontFamily="'Syne', sans-serif" fontWeight="bold" fontSize="16px" color="gray.800">
        {title}
      </Text>
      <Text fontSize="14px" color="gray.600" lineHeight="1.6">
        {body}
      </Text>
    </VStack>
  </Card>
);

export const CheckList = ({ items, color = "green.600" }) => (
  <VStack align="stretch" gap={3}>
    {items.map((item) => (
      <HStack key={item} align="start" gap={3}>
        <Text color={color} fontWeight="bold" fontSize="15px" lineHeight="1.7" flexShrink={0}>
          ✓
        </Text>
        <Text fontSize="14px" color="gray.700" lineHeight="1.7">
          {item}
        </Text>
      </HStack>
    ))}
  </VStack>
);
