import React, { useEffect, useMemo, useState } from "react";
import { Badge, Box, Container, HStack, Text, VStack } from "@chakra-ui/react";
// import { Link as RouterLink } from "react-router-dom";

function Bootcamp() {
  const targetDate = useMemo(() => new Date("2026-08-03T00:00:00"), []);
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const diffMs = targetDate.getTime() - now.getTime();
  const isLive = diffMs > 0;

  const totalSeconds = Math.max(0, Math.floor(diffMs / 1000));
  const days = Math.floor(totalSeconds / (60 * 60 * 24));
  const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const seconds = totalSeconds % 60;

  const tiles = [
    { label: "Days", value: days },
    { label: "Hours", value: hours },
    { label: "Minutes", value: minutes },
    { label: "Seconds", value: seconds },
  ];

  const TimeBox = ({ label, value }) => (
    <VStack spacing={1} minW={{ base: "64px", md: "90px" }}>
      <Box
        bg="gray.50"
        border="1px solid"
        borderColor="gray.200"
        borderRadius="14px"
        px={{ base: 4, md: 6 }}
        py={{ base: 3, md: 4 }}
        w="full"
      >
        <Text
          fontSize={{ base: "28px", md: "44px" }}
          fontWeight="bold"
          color="green.700"
          lineHeight="1"
          textAlign="center"
          fontFamily="'Syne', sans-serif"
        >
          {String(value).padStart(2, "0")}
        </Text>
      </Box>
      <Text fontSize="11px" color="gray.500" textTransform="uppercase" letterSpacing="wider">
        {label}
      </Text>
    </VStack>
  );

  return (
    <Box py={{ base: 10, lg: 16 }} bg="white">
      <Container maxW="1440px" px={{ base: 5, lg: 20 }}>
        <VStack spacing={6} textAlign="center">
          <Badge
            bg="rgba(5, 156, 2, 0.12)"
            color="green.700"
            px={4}
            py={2}
            borderRadius="full"
            fontWeight="bold"
            textTransform="uppercase"
            letterSpacing="wide"
          >
            Next Bootcamp
          </Badge>

          <VStack spacing={2}>
            <Text
              fontFamily="'Syne', sans-serif"
              fontWeight="bold"
              fontSize={{ base: "24px", md: "34px" }}
              color="gray.800"
              textTransform="uppercase"
            >
              Countdown to August 3, 2026
            </Text>
            <Text color="gray.600" maxW="700px" lineHeight="1.6">
              Enrolment is open. Save your spot early.
            </Text>
          </VStack>

          <HStack
            spacing={{ base: 2, md: 3 }}
            justify="center"
            flexWrap="wrap"
            w="full"
            maxW="900px"
          >
            {tiles.map((t, idx) => (
              <React.Fragment key={t.label}>
                <TimeBox label={t.label} value={t.value} />
                {idx < tiles.length - 1 && (
                  <Text
                    fontSize={{ base: "28px", md: "42px" }}
                    fontWeight="bold"
                    color="gray.400"
                    lineHeight="1"
                    px={{ base: 0, md: 1 }}
                    pb="18px"
                    userSelect="none"
                  >
                    :
                  </Text>
                )}
              </React.Fragment>
            ))}
          </HStack>

          {!isLive && (
            <Badge colorScheme="green" variant="subtle" px={3} py={2} borderRadius="full">
              It’s bootcamp day
            </Badge>
          )}

          {/* <HStack spacing={3} pt={2} flexWrap="wrap" justify="center">
            <Button
              as={RouterLink}
              to="/register"
              px={8}
              py={6}
              borderRadius="full"
              bg="linear-gradient(135deg, #059C02 0%, #0b7f03 100%)"
              color="white"
              fontFamily="'Syne', sans-serif"
              fontWeight="bold"
              textTransform="uppercase"
              letterSpacing="wide"
              _hover={{
                transform: "translateY(-2px)",
                boxShadow: "0 12px 25px rgba(5, 156, 2, 0.35)",
              }}
            >
              Enrol now
            </Button>

            {!isLive && (
              <Badge colorScheme="green" variant="subtle" px={3} py={2} borderRadius="full">
                It’s bootcamp day
              </Badge>
            )}
          </HStack> */}
        </VStack>
      </Container>
    </Box>
  );
}

export default Bootcamp;
