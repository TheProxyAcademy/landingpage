import React, { Suspense, lazy } from "react";
import { Box, Container } from "@chakra-ui/react";
import Hero from "../components/Hero";
import WhyUs from "../components/WhyUs";
import OurProgrammes from "../components/OurProgrammes";
import Bootcamp from "../components/Bootcamp";
import DeferredRender from "../components/DeferredRender";
// import ProgrammeModal from "../components/ProgrammeModal";

const Testimonials = lazy(() => import("../components/Testimonials"));
const Faqs = lazy(() => import("../components/Faqs"));

function Home() {
  return (
    <Box>
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
