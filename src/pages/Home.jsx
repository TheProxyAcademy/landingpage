import React, { Suspense, lazy } from "react";
import { Helmet } from "react-helmet-async";
import { Box, Container } from "@chakra-ui/react";
import Hero from "../components/Hero";
import WhyUs from "../components/WhyUs";
import OurProgrammes from "../components/OurProgrammes";
import Bootcamp from "../components/Bootcamp";
import DeferredRender from "../components/DeferredRender";
import Seo from "../components/Seo";
// import ProgrammeModal from "../components/ProgrammeModal";

const Testimonials = lazy(() => import("../components/Testimonials"));
const Faqs = lazy(() => import("../components/Faqs"));

// Mirrors the questions rendered by <Faqs />. Scoped to this page so it does not
// compete with the bootcamp page's own FAQPage schema.
const homeFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    [
      "What programs do you offer?",
      "We offer various tech skills including Scratch, web development, data analysis, cyber security, animation, graphics design, with more coming soon.",
    ],
    [
      "When does the summer camp start?",
      "Our summer camp typically runs between July and August every year.",
    ],
    [
      "Do you teach outside of summer holidays?",
      "Yes, our programmes run all year round with personalised and group classes beyond the summer bootcamp.",
    ],
    [
      "What would my child need to prepare?",
      "Learners only need a laptop and a stable internet connection to participate.",
    ],
    [
      "My child doesn't want to code, can they learn something else?",
      "Absolutely. We tailor learning paths with non-coding options such as data analysis, design and animation.",
    ],
    [
      "My child already does IT in school, why do they need this?",
      "Technology moves fast—beyond basic office tools—so we help them explore advanced skills like coding, design and data to stay ahead.",
    ],
  ].map(([name, text]) => ({
    "@type": "Question",
    name,
    acceptedAnswer: { "@type": "Answer", text },
  })),
};

function Home() {
  return (
    <Box>
      <Seo
        title="Home"
        description="Live and virtual tech classes for kids and teens—coding, design, data analysis, cyber security and more. Flexible schedules, expert mentors, and certificates."
        canonicalPath="/"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(homeFaqSchema)}</script>
      </Helmet>
      {/*<ProgrammeModal />*/}
      <Box className="hero">
        <Hero />
      </Box>
      <Box>
        <Bootcamp />
        <WhyUs />
        <OurProgrammes />
        <DeferredRender>
          <Suspense fallback={null}>
            <Testimonials />
            <Faqs />
          </Suspense>
        </DeferredRender>
      </Box>
    </Box>
  );
}

export default Home;
