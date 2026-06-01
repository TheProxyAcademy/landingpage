import { Box, Container, Flex, Text } from "@chakra-ui/react";
import Seo from "../components/Seo";
import {
  FOCUSFLOW_COHORT_SEO,
  FOCUSFLOW_OG_IMAGE,
} from "../components/FocusflowCohort/constants";
import FocusflowCohortRegisterForm from "../components/FocusflowCohort/FocusflowCohortRegisterForm";

export default function FocusflowCohortRegister() {
  return (
    <Box>
      <Seo
        title="FocusFlow Cohort Registration"
        description={FOCUSFLOW_COHORT_SEO.description}
        canonicalPath="/focusflow-cohort/register"
        image={FOCUSFLOW_OG_IMAGE}
        imageAlt={FOCUSFLOW_COHORT_SEO.imageAlt}
      />
      <Container
        maxW="1440px"
        pt={{ base: 24, lg: 28 }}
        pb={{ base: 10, lg: 20 }}
        px={{ base: 5, lg: 20 }}
      >
        <Flex direction={{ base: "column", lg: "row" }} gap={10} align="stretch">
          <Box w={{ base: "full", lg: "42%" }} pt={{ base: 2, lg: 10 }}>
            <Text
              as="h1"
              fontFamily="'Syne', sans-serif"
              textTransform="uppercase"
              fontWeight="bold"
              fontSize={{ base: "28px", md: "36px", xl: "42px" }}
              lineHeight="1.15"
              background="linear-gradient(135deg, #059C02 0%, #0b7f03 100%)"
              backgroundClip="text"
              color="transparent"
            >
              FocusFlow Cohort Registration
            </Text>
            <Text mt={4} color="gray.600" lineHeight="1.8">
              Complete this form to reserve your child&apos;s spot, then pay securely via
              Flutterwave. You&apos;ll receive a payment confirmation immediately.
            </Text>
            <Box
              mt={8}
              p={6}
              bg="rgba(5, 156, 2, 0.06)"
              border="1px solid rgba(5, 156, 2, 0.18)"
              borderRadius="16px"
            >
              <Text fontFamily="'Syne', sans-serif" fontWeight="bold" color="green.700">
                What happens next
              </Text>
              <Text mt={2} color="gray.600" fontSize="sm" lineHeight="1.8">
                After payment, we&apos;ll contact you to confirm schedule, onboarding, and
                your child&apos;s start date.
              </Text>
            </Box>
          </Box>

          <Box w={{ base: "full", lg: "58%" }}>
            <FocusflowCohortRegisterForm />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}

