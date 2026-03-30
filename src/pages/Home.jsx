import React from "react";
import { Box, Container } from "@chakra-ui/react";
import Hero from "../components/Hero";
import WhyUs from "../components/WhyUs";
import OurProgrammes from "../components/OurProgrammes";
import Testimonials from "../components/Testimonials";
import Faqs from "../components/Faqs";
import Bootcamp from "../components/Bootcamp";
import DeferredRender from "../components/DeferredRender";
// import ProgrammeModal from "../components/ProgrammeModal";

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
          <Testimonials />
          <Faqs />
        </DeferredRender>
      </Box>
    </Box>
  );
}

export default Home;
