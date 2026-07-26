import React, { useMemo } from "react";
import {
  Accordion,
  Box,
  Container,
  Text,
  VStack,
  HStack,
  Link,
} from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { FaWhatsapp } from "react-icons/fa";
import { BOOTCAMP, resolveFaqGroups } from "./bootcampDetails";
import { RegisterCta } from "./RegisterCta";

const slideInUp = keyframes`
  0% { transform: translateY(40px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
`;

const BootcampFaqs = () => {
  const groups = useMemo(() => resolveFaqGroups(BOOTCAMP), []);

  return (
    <Box as="section" id="faqs" scrollMarginTop="90px" bg="#f7faf6" py={{ base: 12, lg: 20 }}>
      <Container maxW="900px" mx="auto" px={{ base: 5, lg: 8 }}>
        <VStack align="stretch" gap={{ base: 10, lg: 14 }}>
          <VStack gap={4} textAlign="center" animation={`${slideInUp} 0.8s ease-out`}>
            <Text
              as="h2"
              fontFamily="'Syne', sans-serif"
              fontWeight="bold"
              textTransform="uppercase"
              fontSize={{ base: "26px", lg: "36px" }}
              lineHeight="1.15"
              background="linear-gradient(135deg, #059C02 0%, #0b7f03 100%)"
              backgroundClip="text"
              color="transparent"
            >
              Bootcamp questions, answered
            </Text>
            <Text fontSize={{ base: "15px", lg: "17px" }} color="gray.600" maxW="620px" lineHeight="1.7">
              Everything parents ask us before they register — dates, tracks, what your child needs
              at home, and how payment works.
            </Text>
          </VStack>

          {groups.map((group, groupIndex) => (
            <Box key={group.id}>
              <Text
                as="h3"
                fontFamily="'Syne', sans-serif"
                fontWeight="bold"
                fontSize={{ base: "17px", lg: "20px" }}
                color="gray.800"
                textTransform="uppercase"
                letterSpacing="wide"
                mb={5}
                pb={3}
                borderBottom="2px solid"
                borderColor="rgba(5, 156, 2, 0.25)"
              >
                {group.title}
              </Text>

              <Accordion.Root multiple>
                {group.faqs.map((faq, index) => (
                  <Accordion.Item
                    key={faq.question}
                    value={`${group.id}-${index}`}
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

              {/* Break the FAQ run partway through — a parent whose question was
                  just answered should be able to act without scrolling on. */}
              {groupIndex === 1 ? (
                <Box mt={8}>
                  <RegisterCta
                    variant="soft"
                    title="Question answered?"
                    body="You can register now and still ask us anything afterwards — we confirm every seat in writing the same day."
                    label="Register now"
                  />
                </Box>
              ) : null}
            </Box>
          ))}

          <RegisterCta
            title="Ready to secure the seat?"
            body="That is everything parents normally ask. The next step is the registration form at the top of this page — it takes a few minutes, and we confirm your child's seat the same day."
            label="Take me to the form"
          />

          {/* Anything not covered above goes straight to a human. */}
          <VStack gap={4} textAlign="center" pt={2}>
            <Text fontSize={{ base: "15px", lg: "17px" }} color="gray.700" fontWeight="500">
              Still have a question?
            </Text>
            <Link
              href={BOOTCAMP.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              bg="linear-gradient(135deg, #25D366, #128C7E)"
              color="white"
              px={8}
              py={4}
              borderRadius="full"
              fontFamily="'Syne', sans-serif"
              fontWeight="bold"
              fontSize={{ base: "14px", lg: "15px" }}
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
        </VStack>
      </Container>
    </Box>
  );
};

export default BootcampFaqs;
