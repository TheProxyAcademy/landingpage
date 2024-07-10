import React from "react";
import Hero from "../components/Hero";
import WhyUs from "../components/WhyUs";
import OurProgrammes from "../components/OurProgrammes";
import Testimonials from "../components/Testimonials";
import Faqs from "../components/Faqs";
import Bootcamp from "../components/Bootcamp";
import ProgrammeModal from "../components/ProgrammeModal";

function Home() {
  return (
    <div>
      <ProgrammeModal />
      <Hero />
      <Bootcamp />
      <WhyUs />
      <OurProgrammes />
      <Testimonials />
      <Faqs />
    </div>
  );
}

export default Home;
