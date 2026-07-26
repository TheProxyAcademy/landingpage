export const SITE_ORIGIN = "https://theproxyacademy.com";

// Single source for the cohort length: the hero, the FAQ and the search snippet
// all read it, so the page can't advertise two different durations.
const DURATION_WEEKS = 10;
const AGES = "10–17";

export const FOCUSFLOW_COHORT_SEO = {
  title: "FocusFlow Web Development Cohort",
  description: `Your child builds a real app in ${DURATION_WEEKS} weeks — or your money back. Introduction to Web Development at The Proxy Academy. Deploy FocusFlow live. Ages ${AGES}.`,
  canonicalPath: "/focusflow-cohort",
  imagePath: "/focusflow/focusflow-1.png",
  imageAlt:
    "FocusFlow app screenshot — the productivity app students build and deploy at The Proxy Academy",
};

export const FOCUSFLOW_OG_IMAGE = `${SITE_ORIGIN}${FOCUSFLOW_COHORT_SEO.imagePath}`;

export const WHATSAPP_NUMBER = "2349152811014";

export const COHORT = {
  name: "Introduction to Web Development",
  product: "FocusFlow",
  durationWeeks: DURATION_WEEKS,
  sessionsPerWeek: 1,
  sessionMinutes: 90,
  ages: AGES,
  delivery: "Live online classes with expert mentors",
  demoUrl: "https://tpa-foc.netlify.app/",
  guarantee: "money-back",
};

export const PRICING = {
  fullPrice: "₦60,000",
  installmentLabel: "Pay in 2 or 3 installments",
  installmentNote: "Flexible payment plans available — chat with us to choose what works for your family.",
  includes: [
    "10 weeks of live, mentor-led instruction",
    "Build & deploy FocusFlow — a real portfolio project",
    "HTML, CSS, and JavaScript fundamentals",
    "One-on-one support when your child needs extra help",
    "Certificate of completion",
    "Access to our student community after the course",
  ],
};

// Details we have not confirmed internally yet. Anything left as TBC is dropped
// from the FAQ rather than published as a guess — see COHORT_FAQS below. Fill a
// value in and its question appears on the page.
export const TBC = null;

export const COHORT_DETAILS = {
  classDay: TBC, // e.g. "Saturdays"
  classTime: TBC, // e.g. "11:00am WAT"
  nextStartDate: TBC, // e.g. "7 September 2026"
  classCap: TBC, // e.g. 12
  platform: TBC, // e.g. "Zoom"
  depositAmount: TBC, // e.g. "₦30,000"
  // The money-back promise is the headline claim on this page. It needs TPA's
  // exact wording — what qualifies, the deadline to claim, and how it is paid.
  guaranteeTerms: TBC,
};

export function whatsAppUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_PRICING = whatsAppUrl(
  "Hi The Proxy Academy! I have questions about the FocusFlow Web Development cohort pricing and payment plans."
);

export const WHATSAPP_ENROL = whatsAppUrl(
  "Hi The Proxy Academy! I'd like to secure a spot for my child in the FocusFlow Web Development cohort."
);
