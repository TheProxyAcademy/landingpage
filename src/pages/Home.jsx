import React, { Suspense, lazy } from "react";
import { Helmet } from "react-helmet-async";
import { Box, Container } from "@chakra-ui/react";
import Hero from "../components/Hero";
import WhyUs from "../components/WhyUs";
import OurProgrammes from "../components/OurProgrammes";
import Bootcamp from "../components/Bootcamp";
import DeferredRender from "../components/DeferredRender";
import Seo from "../components/Seo";
// Scoped to this page so it does not compete with the bootcamp page's own
// FAQPage schema. Built from the same data <Faqs /> renders.
import { HOME_FAQ_SCHEMA } from "../components/homeFaqData";
// import ProgrammeModal from "../components/ProgrammeModal";

const Testimonials = lazy(() => import("../components/Testimonials"));
const Faqs = lazy(() => import("../components/Faqs"));

function Home() {
  return (
    <Box>
      <Seo
        title="Home"
        description="Live online tech classes for kids and teens—introduction to coding, web development, game development and design & brand strategy. Expert mentors, flexible schedules and certificates."
        canonicalPath="/"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(HOME_FAQ_SCHEMA)}</script>
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
