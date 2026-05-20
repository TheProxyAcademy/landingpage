import { Box } from "@chakra-ui/react";
import Seo from "../components/Seo";
import { FOCUSFLOW_COHORT_SEO, FOCUSFLOW_OG_IMAGE } from "../components/FocusflowCohort/constants";
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
        title={FOCUSFLOW_COHORT_SEO.title}
        description={FOCUSFLOW_COHORT_SEO.description}
        canonicalPath={FOCUSFLOW_COHORT_SEO.canonicalPath}
        image={FOCUSFLOW_OG_IMAGE}
        imageAlt={FOCUSFLOW_COHORT_SEO.imageAlt}
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
