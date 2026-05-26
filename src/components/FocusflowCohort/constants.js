export const SITE_ORIGIN = "https://theproxyacademy.com";

export const FOCUSFLOW_COHORT_SEO = {
  title: "FocusFlow Web Development Cohort",
  description:
    "Your child builds a real app in 8 weeks — or your money back. Introduction to Web Development at The Proxy Academy. Deploy FocusFlow live. Ages 10–17.",
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
  durationWeeks: 10,
  sessionsPerWeek: 1,
  sessionMinutes: 90,
  ages: "10–17",
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

export function whatsAppUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_PRICING = whatsAppUrl(
  "Hi The Proxy Academy! I have questions about the FocusFlow Web Development cohort pricing and payment plans."
);

export const WHATSAPP_ENROL = whatsAppUrl(
  "Hi The Proxy Academy! I'd like to secure a spot for my child in the FocusFlow Web Development cohort."
);
