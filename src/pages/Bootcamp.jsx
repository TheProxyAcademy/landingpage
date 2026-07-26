import { Helmet } from "react-helmet-async";
import BootcampHero from "../components/BootcampComponents/BootcampHero";
import BootcampInfo from "../components/BootcampComponents/BootcampInfo";
import BootcampFaqs from "../components/BootcampComponents/BootcampFaqs";
import { StickyRegisterBar } from "../components/BootcampComponents/RegisterCta";
import {
  BOOTCAMP,
  resolveFaqGroups,
} from "../components/BootcampComponents/bootcampDetails";
import Seo from "../components/Seo";

// Same questions the page renders, handed to search engines so the answers can
// surface before a parent ever reaches the site.
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: resolveFaqGroups(BOOTCAMP).flatMap((group) =>
    group.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.paragraphs.join(" "),
      },
    }))
  ),
};

function Bootcamp({ onFormInteraction, onFormSubmission }) {
  return (
    <div>
      <Seo
        title="Summer Tech Bootcamp 5.0"
        description={`Live online Summer Tech Bootcamp for children aged ${BOOTCAMP.ageRange}. Two three-week batches — 3–21 August and 24 August–11 September 2026. Five tracks, ${BOOTCAMP.price} ${BOOTCAMP.priceScope}.`}
        canonicalPath="/summerbootcamp"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <BootcampHero
        onFormInteraction={onFormInteraction}
        onFormSubmission={onFormSubmission}
      />
      <BootcampInfo />
      <BootcampFaqs />
      <StickyRegisterBar />
    </div>
  );
}

export default Bootcamp;
