// Shared by the homepage FAQ section and the FAQPage schema in pages/Home.jsx,
// so the rendered questions and the ones handed to search engines stay identical.
// Deliberately general — the bootcamp and programme pages carry their own,
// deeper FAQs and these should not contradict them.
export const HOME_FAQS = [
  {
    question: "What programmes do you offer?",
    answer:
      "Four mastery tracks — Introduction to Coding, Web Development, Game Development, and Design & Brand Strategy — running up to 24 months. We also run a three-week Summer Tech Bootcamp and shorter cohort courses like the FocusFlow web development cohort.",
  },
  {
    question: "What ages do you teach?",
    answer:
      "From age 5. Introduction to Coding is built for ages 5–9, and the Web Development, Game Development and Design tracks run from 9 to 17. Tell us your child's age and we will point you to the right starting place.",
  },
  {
    question: "Are classes online or in person?",
    answer:
      "Classes are live online with a tutor on every session, so your child can join from anywhere with a laptop and internet. We are based in Ibadan and have been running since December 2021.",
  },
  {
    question: "What does my child need to take part?",
    answer:
      "A laptop or desktop computer, a stable internet connection, and headphones if the house is busy during class hours. A phone will not work — your child will be building things, not watching.",
  },
  {
    question: "When does the summer bootcamp run?",
    answer:
      "The 2026 season runs from 3 August to 11 September, split into two three-week batches: 3–21 August and 24 August–11 September. Your child attends one batch, and registration is open now.",
  },
  {
    question: "Do you teach outside the summer holidays?",
    answer:
      "Yes. The mastery programme runs all year round, and we offer personalised and group classes alongside it. The summer bootcamp is an entry point, not the whole offering.",
  },
  {
    question: "Does my child need any experience to start?",
    answer:
      "No. Every track starts from zero and most students arrive having only ever used a phone. If your child can read comfortably and type slowly, that is all that is required.",
  },
  {
    question: "My child doesn't want to code — can they learn something else?",
    answer:
      "Absolutely. A child who is always drawing goes into Design & Brand Strategy; one who loves games goes into Game Development and builds their own. The project is chosen by the child, which is usually what flips the ones who say they are not interested in computers.",
  },
  {
    question: "My child already does IT at school — why do they need this?",
    answer:
      "School IT largely covers using software. We teach building it: writing code, designing interfaces, shipping a project other people can actually open and use. Your child finishes with work in a portfolio, not a passed module.",
  },
  {
    question: "Is my child safe in an online class?",
    answer:
      "A tutor is present for the whole of every session, so no child is ever on a call alone. Students work in accounts we set up and monitor rather than personal ones, and online-safety ground rules are taught from the first weeks.",
  },
];

export const HOME_FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: HOME_FAQS.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};
