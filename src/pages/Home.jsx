import Hero from "../components/Hero";
import WhyUs from "../components/WhyUs";
import OurProgrammes from "../components/OurProgrammes";
import Testimonials from "../components/Testimonials";
import Faqs from "../components/Faqs";
// import Bootcamp from "../components/Bootcamp";
// import ProgrammeModal from "../components/ProgrammeModal";

function Home() {
  return (
    <div>
      {/*<ProgrammeModal />*/}
      <div className="hero">
        <Hero />
      </div>
      <div className="container">
        {/*<Bootcamp />*/}
        <WhyUs />
        <OurProgrammes />
        <Testimonials />
        <Faqs />
      </div>
    </div>
  );
}

export default Home;
