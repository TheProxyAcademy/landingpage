import { useEffect, useRef, useState } from "react";
import { Box, Container, Text, VStack } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

export const slideInUp = keyframes`
  0% { transform: translateY(40px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
`;

export const shimmer = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`;

export function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

export function SectionTitle({ children, subtitle, visible = true, center = true, variant = "default" }) {
  const isLight = variant === "light";

  return (
    <VStack
      spacing={4}
      textAlign={center ? "center" : "left"}
      align={center ? "center" : "flex-start"}
      mb={{ base: 8, lg: 10 }}
    >
      <Text
        as="h2"
        fontFamily="'Syne', sans-serif"
        textTransform="uppercase"
        fontWeight="bold"
        fontSize={{ base: "26px", lg: "38px" }}
        lineHeight="1.15"
        background={isLight ? undefined : "linear-gradient(135deg, #059C02 0%, #0b7f03 100%)"}
        backgroundClip={isLight ? undefined : "text"}
        color={isLight ? "white" : "transparent"}
        animation={visible ? `${slideInUp} 0.8s ease-out` : "none"}
        position="relative"
        _after={
          center
            ? {
                content: '""',
                position: "absolute",
                bottom: "-10px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "72px",
                height: "4px",
                background: isLight
                  ? "linear-gradient(135deg, #86efac 0%, #059C02 100%)"
                  : "linear-gradient(135deg, #059C02 0%, #0b7f03 100%)",
                borderRadius: "2px",
              }
            : undefined
        }
        pb={center ? 3 : 0}
      >
        {children}
      </Text>
      {subtitle ? (
        <Text
          fontSize={{ base: "15px", lg: "18px" }}
          color={isLight ? "gray.300" : "gray.600"}
          maxW="720px"
          lineHeight="1.7"
          animation={visible ? `${slideInUp} 0.8s ease-out 0.15s both` : "none"}
        >
          {subtitle}
        </Text>
      ) : null}
    </VStack>
  );
}

export function SectionWrapper({
  id,
  children,
  bg = "white",
  py = { base: 16, lg: 24 },
  ...rest
}) {
  const { ref, visible } = useInView();

  return (
    <Box
      ref={ref}
      as="section"
      id={id}
      py={py}
      bg={bg}
      position="relative"
      overflow="hidden"
      {...rest}
    >
      <Container maxW="1440px" px={{ base: 5, lg: 20 }} position="relative" zIndex={1}>
        <Box opacity={visible ? 1 : 0.4} transition="opacity 0.6s ease">
          {children}
        </Box>
      </Container>
    </Box>
  );
}

export function GreenBadge({ children }) {
  return (
    <Box
      as="span"
      display="inline-block"
      bg="rgba(5, 156, 2, 0.1)"
      color="green.700"
      px={4}
      py={1.5}
      borderRadius="full"
      fontFamily="'Syne', sans-serif"
      fontWeight="bold"
      fontSize="11px"
      textTransform="uppercase"
      letterSpacing="wider"
      border="1px solid rgba(5, 156, 2, 0.25)"
    >
      {children}
    </Box>
  );
}
