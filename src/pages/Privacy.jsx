import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Container, Text, VStack, Link as ChakraLink } from "@chakra-ui/react";
import Seo from "../components/Seo";
import { Pill, slideInUp } from "../components/Programmes/shared";

// Bump this whenever the policy text below changes materially.
const LAST_UPDATED = "31 July 2026";

const CONTACT_EMAIL = "support@theproxyacademy.com";
const CONTACT_PHONE = "+234 915 281 1014";

// Each entry is one section. `body` paragraphs render as prose; `list` items
// render as a bulleted list beneath them.
const SECTIONS = [
  {
    id: "who-we-are",
    title: "Who we are",
    body: [
      "The Proxy Academy Ltd (“The Proxy Academy”, “we”, “us”) is a company registered with the Corporate Affairs Commission in Nigeria and based in Ibadan, Oyo State. We run live online technology classes for children and teenagers.",
      "This policy explains what personal information we collect through theproxyacademy.com, why we collect it, who we share it with, and what you can ask us to do about it. It applies to our website and to the classes we run.",
    ],
  },
  {
    id: "children",
    title: "Children's information",
    body: [
      "Our classes are for children aged 5 to 17. We do not ask children to register themselves. Every registration and payment is made by a parent or guardian, and it is the parent or guardian who provides the child's details to us.",
      "The information we hold about a child is deliberately limited to what teaching requires:",
    ],
    list: [
      "The child's name and age, so a tutor can address them by name and place them in the right track.",
      "The track and batch they are enrolled in.",
      "Work the child produces in class — their project files and their Demo Day presentation.",
      "Class accounts we create and manage for them on the tools used in their track.",
    ],
    after: [
      "We do not ask children for their home address, their school, or photographs of themselves, and in week one of every programme we teach them not to enter those details into AI tools either.",
      "Children work in accounts we create and monitor rather than personal accounts. A tutor is present for the whole of every session.",
      "If you believe we hold information about your child that you did not provide or no longer want us to hold, contact us and we will delete it.",
    ],
  },
  {
    id: "what-we-collect",
    title: "What we collect from you",
    list: [
      "Registration details you submit through our forms: the parent or guardian's name, email address and phone number, and the child's name, age and chosen track.",
      "Payment information when you pay for a programme. Card and bank details are entered on our payment provider's own checkout — they never reach our website or our servers. We receive only confirmation of the transaction and the reference.",
      "Messages you send us, by email or on WhatsApp.",
      "Technical and usage information collected automatically when you browse: your approximate location, device and browser type, the pages you visited and how you arrived at the site.",
    ],
  },
  {
    id: "why",
    title: "Why we use it",
    list: [
      "To register your child, confirm a seat and send you class details and links.",
      "To take and confirm payment, and to keep the financial records Nigerian law requires us to keep.",
      "To run classes — including contacting you if your child misses a session or something needs your attention.",
      "To answer questions you send us.",
      "To understand how people find and use the site, so we can improve it, and to measure whether our advertising works.",
    ],
  },
  {
    id: "tracking",
    title: "Analytics, advertising and cookies",
    body: [
      "We use two third-party tools that set cookies or similar identifiers in your browser:",
    ],
    list: [
      "Google Analytics, which tells us in aggregate how many people visit each page and how they got there.",
      "The Meta (Facebook) Pixel, which tells us whether people who saw our adverts on Facebook or Instagram went on to visit the site or start a registration, and lets us show follow-up adverts to people who have visited.",
    ],
    after: [
      "These tools record page visits and a small number of actions — such as opening a registration form. They do not receive your child's name, age or class details.",
      "You can stop both by blocking third-party cookies in your browser settings, by using your browser's Do Not Track or tracking-protection setting, or through the ad preferences in your Facebook or Instagram account. Blocking them does not affect your ability to register or pay.",
    ],
  },
  {
    id: "sharing",
    title: "Who we share it with",
    body: [
      "We do not sell your information, and we do not share it with anyone for their own marketing. We use the following service providers, and only for the purposes above:",
    ],
    list: [
      "Google — our registration forms are Google Forms, and responses are stored in Google Sheets. Google Analytics is also theirs.",
      "Meta Platforms — for the advertising measurement described above.",
      "Flutterwave — our payment processor, which handles card and bank details directly.",
      "Our hosting and email providers, which store the site and carry our messages.",
      "The tools used to teach each track, where we create and manage class accounts for students.",
    ],
    after: [
      "Some of these providers are based outside Nigeria, which means your information may be stored or processed abroad. We only use established providers that commit to protecting it.",
      "We may also disclose information where the law requires it, or where it is necessary to protect a child from harm.",
    ],
  },
  {
    id: "retention",
    title: "How long we keep it",
    list: [
      "Registration and class records: for as long as your child is enrolled, and for up to two years afterwards so we can issue replacement certificates and let returning families skip re-registration.",
      "Payment records: for seven years, as Nigerian tax and company law requires.",
      "Enquiries that do not lead to enrolment: up to twelve months.",
      "Analytics and advertising data: as set by the retention settings of Google and Meta, which are measured in months rather than years.",
    ],
  },
  {
    id: "rights",
    title: "Your rights",
    body: [
      "Under the Nigeria Data Protection Act 2023 you may ask us to do any of the following, on your own behalf or on behalf of your child:",
    ],
    list: [
      "Tell you what information we hold about you or your child, and give you a copy.",
      "Correct anything that is wrong.",
      "Delete information we no longer need to keep.",
      "Stop using it for advertising or analytics.",
      "Withdraw consent you previously gave, at any time.",
    ],
    after: [
      "Email us and we will respond within 30 days. If you are not satisfied with our response, you may complain to the Nigeria Data Protection Commission.",
    ],
  },
  {
    id: "security",
    title: "How we protect it",
    body: [
      "The site is served over an encrypted connection. Access to registration records is limited to the members of our team who need it to run classes and process payments. Card details never touch our systems.",
      "No system is perfectly secure. If a breach affects your information, we will tell you and the Nigeria Data Protection Commission as the law requires.",
    ],
  },
  {
    id: "changes",
    title: "Changes to this policy",
    body: [
      "If we change this policy we will update the date at the top of this page. Where a change materially affects how we use your information, we will tell enrolled families directly.",
    ],
  },
];

const Section = ({ section }) => (
  <VStack as="section" id={section.id} align="start" gap={4} scrollMarginTop="90px">
    <Text
      as="h2"
      fontFamily="'Syne', sans-serif"
      fontWeight="bold"
      fontSize={{ base: "20px", lg: "26px" }}
      color="gray.800"
      lineHeight="1.2"
    >
      {section.title}
    </Text>

    {section.body?.map((paragraph) => (
      <Text key={paragraph} fontSize={{ base: "15px", lg: "16px" }} color="gray.700" lineHeight="1.8">
        {paragraph}
      </Text>
    ))}

    {section.list ? (
      <VStack as="ul" align="start" gap={3} pl={5} w="full">
        {section.list.map((item) => (
          <Text
            as="li"
            key={item}
            fontSize={{ base: "15px", lg: "16px" }}
            color="gray.700"
            lineHeight="1.8"
          >
            {item}
          </Text>
        ))}
      </VStack>
    ) : null}

    {section.after?.map((paragraph) => (
      <Text key={paragraph} fontSize={{ base: "15px", lg: "16px" }} color="gray.700" lineHeight="1.8">
        {paragraph}
      </Text>
    ))}
  </VStack>
);

function Privacy() {
  return (
    <Box bg="#faf9f7">
      <Seo
        title="Privacy Policy"
        description="How The Proxy Academy collects, uses and protects the personal information of parents and children, including analytics, advertising and payment processing."
        canonicalPath="/privacy"
      />

      <Box bg="linear-gradient(135deg, #0f0e0d 0%, #1e1c19 65%, #10231a 100%)" py={{ base: 12, lg: 16 }}>
        <Container maxW="820px" mx="auto" px={{ base: 5, lg: 8 }}>
          <VStack align="start" gap={4} animation={`${slideInUp} 0.8s ease-out`}>
            <Pill bg="rgba(5, 156, 2, 0.9)" color="white">
              Legal
            </Pill>
            <Text
              as="h1"
              fontFamily="'Syne', sans-serif"
              fontWeight="bold"
              fontSize={{ base: "30px", md: "40px" }}
              lineHeight="1.08"
              color="white"
              letterSpacing="tight"
            >
              Privacy policy
            </Text>
            <Text fontSize="14px" color="whiteAlpha.700">
              Last updated {LAST_UPDATED}
            </Text>
          </VStack>
        </Container>
      </Box>

      <Container maxW="820px" mx="auto" px={{ base: 5, lg: 8 }} py={{ base: 12, lg: 16 }}>
        <VStack align="stretch" gap={{ base: 10, lg: 12 }}>
          <Text fontSize={{ base: "16px", lg: "17px" }} color="gray.700" lineHeight="1.8">
            We teach children, so we are asked for information about children. This page sets out exactly
            what we collect, what we do with it and what you can ask us to do about it — in plain language
            rather than legal boilerplate.
          </Text>

          {SECTIONS.map((section) => (
            <Section key={section.id} section={section} />
          ))}

          {/* Contact */}
          <VStack
            as="section"
            id="contact"
            align="start"
            gap={4}
            bg="white"
            borderRadius="16px"
            border="1px solid"
            borderColor="gray.200"
            boxShadow="0 8px 24px rgba(16, 35, 26, 0.05)"
            p={{ base: 5, lg: 8 }}
            scrollMarginTop="90px"
          >
            <Text
              as="h2"
              fontFamily="'Syne', sans-serif"
              fontWeight="bold"
              fontSize={{ base: "20px", lg: "26px" }}
              color="gray.800"
            >
              Contact us
            </Text>
            <Text fontSize={{ base: "15px", lg: "16px" }} color="gray.700" lineHeight="1.8">
              For anything in this policy — including a request to see, correct or delete information —
              reach us at:
            </Text>
            <VStack align="start" gap={2}>
              <ChakraLink
                href={`mailto:${CONTACT_EMAIL}`}
                color="green.600"
                fontWeight="semibold"
                fontSize="15px"
              >
                {CONTACT_EMAIL}
              </ChakraLink>
              <Text fontSize="15px" color="gray.700">
                {CONTACT_PHONE} (WhatsApp)
              </Text>
              <Text fontSize="15px" color="gray.700">
                The Proxy Academy Ltd, Ibadan, Oyo State, Nigeria
              </Text>
            </VStack>
            <Text fontSize="14px" color="gray.600" lineHeight="1.7" pt={2}>
              You can also read{" "}
              <ChakraLink as={RouterLink} to="/about" color="green.600" fontWeight="semibold">
                more about who we are
              </ChakraLink>
              .
            </Text>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
}

export default Privacy;
