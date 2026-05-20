import { Box } from "@chakra-ui/react";
import Seo from "../components/Seo";
import CohortHero from "../components/FocusflowCohort/CohortHero";
import {
  ProblemSection,
  SolutionSection,
  FocusflowShowcaseSection,
  TransformationSection,
  HowItWorksSection,
  PricingSection,
  FounderSection,
  CohortFaqSection,
  FinalCtaSection,
} from "../components/FocusflowCohort/CohortSections";

function FocusflowCohort() {
  return (
    <Box>
      <Seo
        title="FocusFlow Web Development Cohort"
        description="Your child builds a real app in 8 weeks. Introduction to Web Development at The Proxy Academy — deploy FocusFlow live and grow a real portfolio. Ages 10–17."
        canonicalPath="/focusflow-cohort"
      />
      <CohortHero />
      <ProblemSection />
      <SolutionSection />
      <FocusflowShowcaseSection />
      <TransformationSection />
      <HowItWorksSection />
      <PricingSection />
      <FounderSection />
      <CohortFaqSection />
      <FinalCtaSection />
    </Box>
  );
}

export default FocusflowCohort;
