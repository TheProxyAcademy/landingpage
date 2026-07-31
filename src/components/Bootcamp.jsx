import React, { useEffect, useMemo, useState } from "react";
import { Badge, Box, Container, Flex, HStack, Text, VStack, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { BATCHES } from "./BootcampComponents/bootcampDetails";

const breakdown = (ms) => {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  return [
    { label: "Days", value: Math.floor(totalSeconds / (60 * 60 * 24)) },
    { label: "Hours", value: Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60)) },
    { label: "Minutes", value: Math.floor((totalSeconds % (60 * 60)) / 60) },
    { label: "Seconds", value: totalSeconds % 60 },
  ];
};

const TimeBox = ({ label, value }) => (
  <VStack spacing={1} minW={{ base: "56px", md: "68px" }}>
    <Box
      bg="gray.50"
      border="1px solid"
      borderColor="gray.200"
      borderRadius="12px"
      px={{ base: 3, md: 4 }}
      py={{ base: 2, md: 3 }}
      w="full"
    >
      <Text
        fontSize={{ base: "24px", md: "32px" }}
        fontWeight="bold"
        color="green.700"
        lineHeight="1"
        textAlign="center"
        fontFamily="'Syne', sans-serif"
      >
        {String(value).padStart(2, "0")}
      </Text>
    </Box>
    <Text fontSize="10px" color="gray.500" textTransform="uppercase" letterSpacing="wider">
      {label}
    </Text>
  </VStack>
);

// One card per batch. Both run every season, so both are shown side by side —
// a parent choosing between them can see how long is left on each.
const BatchCountdown = ({ batch, now, isNext }) => {
  const startsAt = new Date(batch.startsAt).getTime();
  const endsAt = new Date(batch.endsAt).getTime();
  const hasStarted = now >= startsAt;
  const hasFinished = now > endsAt;

  return (
    <Box
      flex="1"
      minW={{ base: "full", md: "320px" }}
      bg="white"
      border="1px solid"
      borderColor={isNext ? "green.300" : "gray.200"}
      boxShadow={isNext ? "0 12px 30px rgba(5, 156, 2, 0.12)" : "none"}
      borderRadius="20px"
      px={{ base: 5, md: 7 }}
      py={{ base: 6, md: 7 }}
    >
      <VStack spacing={4}>
        <VStack spacing={1}>
          <HStack spacing={2} flexWrap="wrap" justify="center">
            <Text
              fontFamily="'Syne', sans-serif"
              fontWeight="bold"
              fontSize={{ base: "18px", md: "22px" }}
              color="gray.800"
              textTransform="uppercase"
            >
              {batch.name}
            </Text>
            {isNext && (
              <Badge colorScheme="green" borderRadius="full" px={3} py={1}>
                Starts next
              </Badge>
            )}
          </HStack>
          <Text fontSize={{ base: "14px", md: "15px" }} color="green.700" fontWeight="600">
            {batch.dates}
          </Text>
        </VStack>

        {hasStarted ? (
          <Badge
            colorScheme={hasFinished ? "gray" : "green"}
            variant="subtle"
            px={4}
            py={2}
            borderRadius="full"
          >
            {hasFinished ? "Completed" : "In progress"}
          </Badge>
        ) : (
          <HStack spacing={{ base: 1, md: 2 }} justify="center" flexWrap="nowrap">
            {breakdown(startsAt - now).map((t, idx, all) => (
              <React.Fragment key={t.label}>
                <TimeBox label={t.label} value={t.value} />
                {idx < all.length - 1 && (
                  <Text
                    fontSize={{ base: "22px", md: "28px" }}
                    fontWeight="bold"
                    color="gray.400"
                    lineHeight="1"
                    pb="16px"
                    userSelect="none"
                  >
                    :
                  </Text>
                )}
              </React.Fragment>
            ))}
          </HStack>
        )}

        <Text fontSize="13px" color="gray.600" textAlign="center" lineHeight="1.6">
          {batch.note}
        </Text>
      </VStack>
    </Box>
  );
};

function Bootcamp() {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  // The first batch that has not started yet gets the highlight. Once both are
  // under way there is nothing left to count down to.
  const nextBatchId = useMemo(
    () => BATCHES.find((batch) => new Date(batch.startsAt).getTime() > now)?.id ?? null,
    [now]
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
            Two batches this season
          </Badge>

          <VStack spacing={2}>
            <Text
              fontFamily="'Syne', sans-serif"
              fontWeight="bold"
              fontSize={{ base: "24px", md: "34px" }}
              color="gray.800"
              textTransform="uppercase"
            >
              {nextBatchId ? "Countdown to Summer Tech Bootcamp 5.0" : "Summer Tech Bootcamp 5.0"}
            </Text>
            <Text color="gray.600" maxW="700px" lineHeight="1.6">
              {nextBatchId
                ? "Two three-week batches, five tracks, ₦60,000 per batch. Your child attends one — pick the batch that fits your holiday."
                : "This season's batches are under way. See the page for the next available dates."}
            </Text>
          </VStack>

          <Flex
            w="full"
            maxW="900px"
            gap={{ base: 4, md: 6 }}
            direction={{ base: "column", md: "row" }}
            align="stretch"
          >
            {BATCHES.map((batch) => (
              <BatchCountdown
                key={batch.id}
                batch={batch}
                now={now}
                isNext={batch.id === nextBatchId}
              />
            ))}
          </Flex>

          <HStack spacing={3} pt={2} flexWrap="wrap" justify="center">
            <Button
              as={RouterLink}
              to="/summerbootcamp"
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

            {!nextBatchId && (
              <Badge colorScheme="green" variant="subtle" px={3} py={2} borderRadius="full">
                Bootcamp in progress
              </Badge>
            )}
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
}

export default Bootcamp;
