import React, { useMemo } from "react";
import { Accordion, Box, Text, VStack, HStack, Link } from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa";
import { SectionHeading } from "./shared";
import { PROGRAMME_FAQS, resolveProgrammeFaqs } from "./programmeData";

const WHATSAPP_URL =
  "https://wa.me/+2349152811014?text=" +
  encodeURIComponent(
    "Hi The Proxy Academy team! I have a question about the mastery programme."
  );

/**
 * Shared across the programmes pages. `trackName` scopes the intro copy when it
 * sits on a single track's page.
 */
const ProgrammeFaqs = ({ trackName }) => {
  const faqs = useMemo(() => resolveProgrammeFaqs(), []);

  if (!faqs.length) return null;

  return (
    <Box as="section" id="faqs" scrollMarginTop="90px">
      <SectionHeading
        eyebrow="Before you enrol"
        title="Questions parents ask"
      >
        {trackName
          ? `The practical details behind ${trackName} — fees, scheduling, what you need at home, and how we keep you in the loop.`
          : "The practical details behind the mastery programme — fees, scheduling, what you need at home, and how we keep you in the loop."}
      </SectionHeading>

      <Accordion.Root multiple>
        {faqs.map((faq, index) => (
          <Accordion.Item
            key={faq.question}
            value={String(index)}
            mb={3}
            bg="white"
            border="1px solid"
            borderColor="gray.200"
            borderRadius="14px"
            overflow="hidden"
            transition="all 0.25s ease"
            _hover={{ borderColor: "rgba(5, 156, 2, 0.4)" }}
          >
            <Accordion.ItemTrigger
              px={{ base: 4, lg: 6 }}
              py={4}
              fontFamily="'Syne', sans-serif"
              fontWeight="600"
              fontSize={{ base: "15px", lg: "17px" }}
              color="gray.800"
              textAlign="left"
              bg="transparent"
              _hover={{ color: "green.600" }}
            >
              {faq.question}
              <Accordion.ItemIndicator color="green.500" fontSize="18px" />
            </Accordion.ItemTrigger>
            <Accordion.ItemContent>
              <Accordion.ItemBody px={{ base: 4, lg: 6 }} pb={5} pt={0}>
                <VStack
                  align="stretch"
                  gap={3}
                  pl={4}
                  borderLeft="2px solid rgba(5, 156, 2, 0.3)"
                >
                  {faq.paragraphs.map((paragraph, i) => (
                    <Text
                      key={i}
                      fontSize={{ base: "14px", lg: "15.5px" }}
                      color="gray.600"
                      lineHeight="1.7"
                    >
                      {paragraph}
                    </Text>
                  ))}
                </VStack>
              </Accordion.ItemBody>
            </Accordion.ItemContent>
          </Accordion.Item>
        ))}
      </Accordion.Root>

      <VStack gap={4} textAlign="center" pt={8}>
        <Text fontSize={{ base: "15px", lg: "16px" }} color="gray.700" fontWeight="500">
          Something we haven't covered?
        </Text>
        <Link
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          bg="linear-gradient(135deg, #25D366, #128C7E)"
          color="white"
          px={8}
          py={4}
          borderRadius="full"
          fontFamily="'Syne', sans-serif"
          fontWeight="bold"
          fontSize={{ base: "13px", lg: "14px" }}
          textTransform="uppercase"
          letterSpacing="wide"
          textDecoration="none"
          transition="all 0.3s ease"
          _hover={{
            transform: "translateY(-2px)",
            boxShadow: "0 12px 28px rgba(18, 140, 126, 0.35)",
            textDecoration: "none",
          }}
        >
          <HStack gap={3}>
            <Box as={FaWhatsapp} boxSize={5} aria-hidden="true" />
            <Text>Ask us on WhatsApp</Text>
          </HStack>
        </Link>
      </VStack>
    </Box>
  );
};

export { PROGRAMME_FAQS };
export default ProgrammeFaqs;
