// Single source of truth for every public fact about Summer Tech Bootcamp 5.0.
// The hero, the info strip and the FAQ all read from here, so a date or a price
// can only be wrong in one place.
//
// TBC marks a detail that has not been confirmed internally yet. Nothing set to
// TBC is ever rendered: an FAQ that lists a TBC key in `requires` is dropped
// from the page entirely rather than published half-answered. Fill the value in
// below and the question appears on the site — no other edit needed.
export const TBC = null;

export const BOOTCAMP = {
  edition: "5.0",
  price: "₦60,000",
  priceScope: "per batch",
  weeksPerBatch: 3,
  sessionsPerWeek: 3,
  ageRange: "5–17",
  registerAnchor: "#register",
  whatsappUrl:
    "https://wa.me/+2349152811014?text=" +
    encodeURIComponent(
      "Hi The Proxy Academy team! I have a question about the Summer Tech Bootcamp."
    ),

  // --- Not yet confirmed -------------------------------------------------
  // Each of these gates at least one FAQ. See `requires` on the entries below.
  classDays: TBC, // e.g. "Mondays, Wednesdays and Fridays"
  classTime: TBC, // e.g. "10:00am – 12:00pm WAT"
  sessionLength: TBC, // e.g. "2 hours"
  sessionsPerBatch: TBC, // e.g. 9
  platform: TBC, // e.g. "Zoom"
  sessionsRecorded: TBC, // true | false
  classCap: TBC, // e.g. 12
  deposit: TBC, // e.g. "₦30,000"
  balanceDueBatch1: TBC, // e.g. "10 August"
  balanceDueBatch2: TBC, // e.g. "31 August"
  refundPolicy: TBC, // TPA's exact wording
  registrationClosesBatch1: TBC, // e.g. "1 August"
  registrationClosesBatch2: TBC, // e.g. "22 August"
};

export const BATCHES = [
  {
    id: "batch-1",
    name: "Batch 1",
    dates: "3 – 21 August 2026",
    note: "Finishes well before schools resume. Best if you are around in August.",
  },
  {
    id: "batch-2",
    name: "Batch 2",
    dates: "24 August – 11 September 2026",
    note: "Same content, later dates. Best if you are travelling in early August.",
  },
];

export const TRACKS = [
  {
    icon: "🤖",
    name: "Artificial Intelligence",
    blurb:
      "How AI actually works, and the CRAFT method for instructing it so it gives back something useful.",
  },
  {
    icon: "💻",
    name: "Web Development",
    blurb: "Build a real website — something people can actually visit.",
  },
  {
    icon: "🎬",
    name: "Animation",
    blurb: "For the child who tells stories and loves cartoons.",
  },
  {
    icon: "✏️",
    name: "Introduction to Coding",
    blurb: "The gentlest entry point. For a child who has never done any of this.",
  },
  {
    icon: "🎨",
    name: "Design & Illustration",
    blurb: "For the child who is always drawing.",
  },
];

// Stated plainly and early on purpose. Classes are live and hands-on, so a
// parent who only finds out about the laptop on day one is a refund, not a
// student.
export const REQUIREMENTS = [
  {
    icon: "💻",
    title: "A laptop or desktop",
    detail: "A phone will not work — they will be building, not watching.",
  },
  {
    icon: "🌐",
    title: "Internet at home",
    detail: "Stable enough to stay on a live call for the session.",
  },
  {
    icon: "🎧",
    title: "Headphones or earphones",
    detail: "Especially if the house is busy during class hours.",
  },
  {
    icon: "🔌",
    title: "Power on class days",
    detail: "A charged laptop, inverter or generator all work.",
  },
];

export const INCLUDED = [
  "Live classes with a tutor — not recorded videos",
  "All learning materials",
  "A real project your child builds themselves",
  "A live Demo Day where they present it to parents",
  "A certificate of completion",
];

// Grouped so a parent can scan to the section they care about. Answers are
// functions of the details above so nothing is hard-coded twice.
export const BOOTCAMP_FAQ_GROUPS = [
  {
    id: "dates",
    title: "Dates, batches and schedule",
    faqs: [
      {
        q: "When does the bootcamp run?",
        a: () => [
          "The season runs from 3 August to 11 September 2026, and inside it we run two batches of three weeks each:",
          "Batch 1 — 3 to 21 August 2026",
          "Batch 2 — 24 August to 11 September 2026",
          "Your child attends one batch, not both. You choose the one that fits your holiday.",
        ],
      },
      {
        q: "How often do classes hold?",
        a: (d) => [
          `${d.sessionsPerWeek} sessions a week, for the ${d.weeksPerBatch} weeks of your batch.`,
          "Every session is live with a tutor on the call.",
        ],
      },
      {
        q: "What days and times are the classes?",
        requires: ["classDays", "classTime", "sessionLength"],
        a: (d) => [
          `${d.classDays} · ${d.classTime}`,
          `Each session runs ${d.sessionLength}.`,
        ],
      },
      {
        q: "Which batch should we pick?",
        a: () => [
          "Both batches cover exactly the same content, so it comes down to your dates.",
          "Batch 1 (3 – 21 August) finishes well before schools resume, which most parents prefer. Batch 2 (24 August – 11 September) suits families travelling in early August.",
        ],
      },
      {
        q: "Is it live, or pre-recorded videos?",
        a: () => [
          "Fully live. There is a tutor on the call every session, seeing your child's screen and answering questions by name.",
          "It is not a recorded course they watch alone — that is exactly the kind of thing children abandon in week one.",
        ],
      },
      {
        q: "What if my child misses a session?",
        requires: ["sessionsRecorded"],
        a: (d) => [
          d.sessionsRecorded
            ? "Every session is recorded, so your child can catch up the same day."
            : "The tutor picks your child up at the start of the next session and sends you a note on what was missed.",
          "Three weeks is tight, though. If you already know about a trip, tell us now and we will put your child in the batch that works.",
        ],
      },
      {
        q: "What platform do you use?",
        requires: ["platform"],
        a: (d) => [
          `Classes hold on ${d.platform}.`,
          "You get the link before the first session, and we run a short tech check beforehand so nobody is troubleshooting on day one.",
        ],
      },
    ],
  },
  {
    id: "tracks",
    title: "Tracks and what your child learns",
    faqs: [
      {
        q: "What tracks can my child choose from?",
        a: () => [
          "Five tracks this season: Artificial Intelligence, Web Development, Animation, Introduction to Coding, and Design & Illustration.",
          "Your child picks one and stays with it for the three weeks — that is how they finish with something built, rather than five things half-started.",
          "Data Analysis is not running this season. It is one we run in our cohort courses through the year.",
        ],
      },
      {
        q: "Which track should my child pick?",
        a: () => [
          "The easiest way to choose is by what they already enjoy:",
          "Always asking how things work → Artificial Intelligence",
          "Wants to build something people can visit → Web Development",
          "Always drawing → Design & Illustration",
          "Tells stories, loves cartoons → Animation",
          "Has never done any of this before → Introduction to Coding",
          "Still unsure? Message us on WhatsApp with what your child does when nobody is telling them what to do, and we will point you to the right one.",
        ],
      },
      {
        q: "Does my child need any experience? They have never coded.",
        a: () => [
          "No experience needed. Every track starts from zero, and most of the children who arrive have only ever used a phone.",
          "If your child has never touched any of this, Introduction to Coding is the gentlest entry point.",
          "If they can read comfortably and type slowly, that is genuinely all that is required. The typing speeds up on its own.",
        ],
      },
      {
        q: "What will they have at the end?",
        a: () => [
          "Three things: a finished project they built themselves, a certificate of completion from The Proxy Academy, and a live Demo Day where they present the project to parents.",
          "Honestly, the certificate matters least. What matters is that your child can open a laptop and show you something that did not exist three weeks earlier.",
        ],
      },
      {
        q: "What is Demo Day?",
        a: () => [
          "The last session of your child's batch. Every child presents their project on the call to parents, tutors and the other students.",
          "It is the part parents tell us they remember. A lot of these children have never presented anything to adults before.",
        ],
      },
      {
        q: "Will my child actually concentrate online?",
        a: () => [
          "An honest answer: some children do drift online, and after the pandemic years a lot of parents are wary. That is fair.",
          "Three things we do about it. Groups are small enough that a tutor notices when a child goes quiet. Your child is building, not watching — every session ends with something on their screen that has to work. And they know from day one that they will present it on Demo Day. Children work differently when someone is going to see it.",
        ],
      },
      {
        q: "Will this help with school work, WAEC or JAMB?",
        a: () => [
          "We will not pretend it is exam preparation — it is not.",
          "What it does do is make children better at explaining what they want clearly, breaking a big task into steps, and checking whether an answer is actually right instead of accepting it. Parents tell us they notice it in how their child approaches assignments.",
          "If what you need right now is exam coaching, this is not it, and we would rather say so.",
        ],
      },
      {
        q: "Will this make my child a programmer or get them a job?",
        a: () => [
          "Not in three weeks, and we would be lying if we said otherwise.",
          "What three weeks does is show a child they can build things with a computer instead of only consuming things on one. That is the switch. The ones who catch it go on to our longer cohort courses — for AI there is a three-step pathway: AI Explorer, AI Creator Lab, then AI Builder Pro.",
          "There is no obligation to continue. But children who want to keep going have somewhere to go.",
        ],
      },
    ],
  },
  {
    id: "requirements",
    title: "Device, internet and power",
    faqs: [
      {
        q: "What device do we need? Can they use a phone?",
        a: () => [
          "Your child will need a laptop or desktop. A phone will not work for this.",
          "They will be building things, and building on a phone screen is genuinely frustrating — they would spend three weeks fighting the device instead of learning.",
          "They will also need headphones or earphones if the house is noisy, plus internet at home.",
          "If the laptop is the blocker, tell us before you pay rather than after. Sometimes there is a way around it, and we would rather know.",
        ],
      },
      {
        q: "What if there is no light during class?",
        a: () => [
          "We plan for it — it is Nigeria.",
          "What we ask is that you plan for power for the length of a session on class days. A charged laptop, an inverter or a generator all work.",
          "If the light or the network goes mid-session, tell the tutor and they will fill the gap at the start of the next class.",
        ],
      },
      {
        q: "Do I need to sit with my child during sessions?",
        a: () => [
          "No. The tutor runs the session and the children work independently.",
          "What helps is being around for the first ten minutes of day one, just in case the link or the audio needs sorting. After that they are fine on their own.",
        ],
      },
      {
        q: "We are not in Ibadan, or we are outside Nigeria. Can we join?",
        a: () => [
          "Yes. The bootcamp is fully online this year, so your child can join from anywhere with a laptop and internet.",
          "If you are outside Nigeria, message us before you pay so we can confirm what the class time works out to in your time zone.",
        ],
      },
    ],
  },
  {
    id: "money",
    title: "Fees and payment",
    faqs: [
      {
        q: "How much is it, and what does that cover?",
        a: (d) => [
          `${d.price} ${d.priceScope} — that is one track, for the three weeks of your batch.`,
          "It covers all the live sessions, learning materials, Demo Day and the certificate.",
          "A payment plan is available if that helps.",
        ],
      },
      {
        q: "Is ₦60,000 per track, or for everything?",
        a: (d) => [
          `${d.price} covers one track, for one batch.`,
          "Within a batch your child stays on one track. Three weeks is enough to finish one real project, and switching halfway means finishing nothing.",
        ],
      },
      {
        q: "Can I pay in instalments?",
        requires: ["deposit"],
        a: (d) => [
          `Yes. ${d.deposit} holds the seat today, and the balance is due by ${
            d.balanceDueBatch1 || "the date we confirm with you"
          } for Batch 1${
            d.balanceDueBatch2 ? `, or ${d.balanceDueBatch2} for Batch 2` : ""
          }.`,
          "The deposit is what actually reserves the seat.",
        ],
      },
      {
        q: "Do you offer a discount for two children?",
        a: () => [
          "Message us on WhatsApp with the ages and tracks and we will tell you exactly what we can do.",
          "Two children is a good idea, by the way — siblings in the same cohort finish their projects at a noticeably higher rate. They keep each other going.",
        ],
      },
      {
        q: "What if my child does not enjoy it? Is it refundable?",
        requires: ["refundPolicy"],
        a: (d) => [
          d.refundPolicy,
          "What we would say either way is this: if your child is not engaging by the end of week one, tell us rather than sitting quietly. Three weeks is short and we can usually fix it — it is normally the project topic, not the child.",
        ],
      },
      {
        q: "How do I register and pay?",
        a: () => [
          "Fill the registration form on this page. Once you submit it we confirm your child's seat and send payment details.",
          "We confirm every payment in writing the same day, by name, and add you to the parent group.",
        ],
      },
    ],
  },
  {
    id: "trust",
    title: "Safety and trust",
    faqs: [
      {
        q: "Is it safe? Who is supervising them online?",
        a: () => [
          "A tutor is on every session, for the whole session. No child is ever on a call alone.",
          "Children use accounts we set up and monitor, not their own personal accounts.",
          "In week one we teach the Proxy AI Code: never type your full name, address, school or photos into an AI tool, and tell a tutor immediately if anything strange appears on screen.",
        ],
      },
      {
        q: "Will AI make my child lazy? Is this teaching them to cheat?",
        a: () => [
          "It is the right question to ask, and it is exactly why we built the AI track the way we did.",
          "A child who types “write my essay” into an AI tool learns nothing. So we teach a method called CRAFT — Context, Role, Action, Format, Tone. It forces them to work out what they actually want before AI can give them anything useful. If they cannot explain their idea clearly, they get a useless answer. The thinking has to come first.",
          "We also spend time on AI getting things wrong. We hand children answers that are confidently incorrect and they have to catch the mistakes.",
          "By the end they are correcting AI, not copying it.",
        ],
      },
      {
        q: "Who is teaching?",
        a: () => [
          "Our founder, Kolade Olusola, has been running The Proxy Academy since December 2021 and still takes classes himself.",
          "Every session runs from a written facilitator manual, so what your child gets does not depend on who is on the call that day.",
        ],
      },
      {
        q: "How do I know this is legitimate?",
        a: () => [
          "The Proxy Academy is CAC-registered and based in Ibadan, and we have been running since December 2021. We have taught over 300 children.",
          "This is our 5th annual summer bootcamp. Four previous editions are on our Instagram — classes, projects and Demo Days, going back years.",
          "If you would like to speak to someone before you pay, message us on WhatsApp and we will arrange it.",
        ],
      },
    ],
  },
];

// Drops any question whose answer depends on a detail we have not confirmed.
export const resolveFaqGroups = (details = BOOTCAMP) =>
  BOOTCAMP_FAQ_GROUPS.map((group) => ({
    ...group,
    faqs: group.faqs
      .filter((faq) =>
        (faq.requires || []).every((key) => details[key] !== TBC && details[key] !== undefined)
      )
      .map((faq) => ({ question: faq.q, paragraphs: faq.a(details) })),
  })).filter((group) => group.faqs.length > 0);
