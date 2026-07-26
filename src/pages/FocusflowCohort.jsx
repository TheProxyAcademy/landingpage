import { Box } from "@chakra-ui/react";
import { Helmet } from "react-helmet-async";
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
  resolveCohortFaqs,
} from "../components/FocusflowCohort/CohortSections";

// Same questions the page renders, so the answers can surface in search results
// before a parent ever reaches the site.
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: resolveCohortFaqs().map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

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
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
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
