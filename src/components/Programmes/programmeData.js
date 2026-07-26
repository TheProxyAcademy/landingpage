// Curriculum for the Elite Mastery Program — four tracks, three competency
// levels, up to 24 months. Transcribed from the internal programme document.
//
// Shape of a track:
//   phases[]        one per competency level (Foundation / Architect / Capstone)
//     sections[]    a month or month-range within that phase
//       cycle       the production cycle that month produces
//       modules[]   session-by-session detail, where the curriculum defines it
//       exhibition  the public showcase that closes the month
//     founderModule the tech-entrepreneurship block, where the level has one
//     graduation    the diploma awarded on completing the level

export const LEVELS = [
  {
    id: "foundation",
    name: "Level I · Foundation",
    months: "Months 0–6",
    blurb:
      "Core tool fluency. First live portfolio asset published. Identity: “I can build something real.”",
    accent: "#1e40af",
    bg: "#dbeafe",
    border: "#bfdbfe",
  },
  {
    id: "architect",
    name: "Level II · Architect",
    months: "Months 7–15",
    blurb:
      "Systems thinking. Complex production cycles. Client-grade deliverables. Founder modules begin.",
    accent: "#92400e",
    bg: "#fef3c7",
    border: "#fde68a",
  },
  {
    id: "capstone",
    name: "Level III · Capstone",
    months: "Months 16–24",
    blurb:
      "Mastery-level output. Original IP. Public presentation. Graduate portfolio. Hire-ready credentials.",
    accent: "#065f46",
    bg: "#d1fae5",
    border: "#6ee7b7",
  },
];

export const PILLARS = [
  {
    icon: "🔨",
    title: "Build First, Explain Later",
    body: "Students produce a tangible output in the first 10 minutes. Theory follows direct experience.",
  },
  {
    icon: "🔁",
    title: "Short Feedback Loops",
    body: "Every session closes with a live result. No long build-up periods — momentum is everything.",
  },
  {
    icon: "🎯",
    title: "80% Production Time",
    body: "20 minutes of concept per session, maximum. The rest is building, iterating, and creating.",
  },
  {
    icon: "🎨",
    title: "Ownership-Driven Creativity",
    body: "Students choose themes, names, and aesthetics. Personal ownership transforms compliance into passion.",
  },
  {
    icon: "🏆",
    title: "Prestige Through Public Success",
    body: "Quarterly Exhibitions mean students present to parents, guests, and industry professionals. Pride compounds motivation.",
  },
  {
    icon: "💡",
    title: "Founder Mindset",
    body: "Tracks 2–4 include Tech-Entrepreneurship modules. Students don't just build — they learn to pitch, brand, and think strategically.",
  },
];

export const COMPETENCY_LADDER = [
  {
    level: "Foundation (Months 0–6)",
    id: "foundation",
    points: [
      "Learns by building & modifying",
      "Guided production cycles",
      "First live, shareable asset published",
      "Confidence with core tools",
      "Monthly Exhibition debut",
    ],
  },
  {
    level: "Architect (Months 7–15)",
    id: "architect",
    points: [
      "Combines systems independently",
      "Debugs and iterates without guidance",
      "Designs and scopes original projects",
      "Presents work to external audiences",
      "Founder mindset modules active",
    ],
  },
  {
    level: "Capstone (Months 16–24)",
    id: "capstone",
    points: [
      "Industry-grade original output",
      "Mentors junior students",
      "Client-commissioned real projects",
      "Full portfolio with 8+ live assets",
      "Graduate Exhibition & diploma",
    ],
  },
];

export const PROGRAMME_STATS = [
  { value: "4", label: "Mastery Tracks" },
  { value: "24", label: "Months Max" },
  { value: "8+", label: "Portfolio Assets" },
  { value: "4", label: "Quarterly Exhibitions" },
];

export const TRACKS = [
  // ─────────────────────────────────────────────────────────────────────
  {
    slug: "introduction-to-coding",
    name: "Introduction to Coding",
    shortName: "Intro Coding",
    ages: "Ages 5–9",
    cadence: "2 sessions/week · 45–60 min each",
    duration: "Foundation · 6 Months",
    summary:
      "Block coding → Scratch → Logic games → Animations → Original creations",
    intro:
      "Young learners discover that computers follow instructions — and that they are capable of writing those instructions. Everything is visual, playful, and immediately gratifying.",
    accent: "#1d4ed8",
    bg: "#dbeafe",
    border: "#93c5fd",
    tools: ["Scratch", "Block Coding", "Logic", "Animations", "Computational Thinking"],
    levels: ["foundation"],
    phases: [
      {
        num: 1,
        level: "foundation",
        title: 'Foundation Phase — "Digital Explorer"',
        months: "Months 1–3",
        identity: "I can give a computer instructions and watch it obey",
        summary:
          "Young learners discover that computers follow instructions — and that they are capable of writing those instructions. Everything is visual, playful, and immediately gratifying. Every session produces a shareable animation or game that students can show parents that same day.",
        sections: [
          {
            month: "Month 1 — Scratch: Move, Draw, Animate",
            cycle: {
              badge: "Production Cycle 1",
              title: "My Animated Story",
              desc: "Students create a short 3-scene animated story with characters they design themselves. Background, dialogue, sound effects — all student choices. Exported as a shareable Scratch link parents can open on any device.",
              weeks: [
                "Mod 1: Move & talk",
                "Mod 2: Costumes & sounds",
                "Mod 3: Scenes & story",
                "Mod 4: Polish + Exhibition",
              ],
              asset: "Public Scratch link — shareable on WhatsApp & Instagram",
            },
            modules: [
              {
                label: "Module 1",
                title: "Sprites, Movement & the Stage",
                sessions: [
                  {
                    label: "Session 1",
                    title: "Make a Character Move!",
                    teaches: "Scratch interface, sprite, stage, move blocks, direction.",
                    does: "Makes their chosen character walk, jump, and spin on command",
                    output: "Moving character",
                  },
                  {
                    label: "Session 2",
                    title: "Loops — Make it Dance Forever",
                    teaches: "Forever loop, repeat loop, wait blocks.",
                    does: "Creates a looping dance animation with 2 characters",
                  },
                ],
              },
              {
                label: "Module 2",
                title: "Costumes, Sounds & Personalities",
                sessions: [
                  {
                    label: "Session 1",
                    title: "Design Your Own Character",
                    teaches: "Costume editor, drawing tools, colour fill, multiple costumes.",
                    does: "Designs a fully original character with 3 costume states",
                    asset: "Original sprite",
                  },
                  {
                    label: "Session 2",
                    title: "Add a Voice — Sounds & Music",
                    teaches: "Play sound block, record voice, sound effects library.",
                    does: "Records their own voice as dialogue for their character",
                  },
                ],
              },
              {
                label: "Module 3",
                title: "Scenes, Backdrops & Story Structure",
                sessions: [
                  {
                    label: "Session 1",
                    title: "Build 3 Scenes With Backdrops",
                    teaches: "Backdrop library, switch backdrop, broadcast messages.",
                    does: "Links 3 scenes together with transitions",
                  },
                  {
                    label: "Session 2",
                    title: "Conversations With Speech Bubbles",
                    teaches: "Say block, think block, timing with wait, sequencing.",
                    does: "Adds a two-character conversation to their story",
                  },
                ],
              },
              {
                label: "Module 4",
                title: "Polish + Quarterly Exhibition Prep",
                sessions: [
                  {
                    label: "Session 1",
                    title: "Final Refinements & Title Screen",
                    teaches: "Start screens, credits, project description on Scratch.",
                    does: "Publishes their story with a proper title and their name",
                    asset: "Published Scratch project",
                  },
                  {
                    label: "Session 2",
                    title: "Exhibition Rehearsal — Show & Tell",
                    does: 'Students practice: "My story is about… I used loops to… The hardest part was… The coolest bit is…"',
                  },
                ],
              },
            ],
            exhibition: {
              title: "Month 1 Exhibition",
              items: [
                "Presented: A shareable animated Scratch story with original characters, dialogue, and music",
                "Parents see: Their child's project on screen — accessible by scanning a QR code on their phone",
                "Tangible Asset: Scratch link shared to family WhatsApp group same evening",
              ],
            },
          },
          {
            month: "Month 2 — Logic & Interactivity: Make it a Game",
            cycle: {
              badge: "Production Cycle 2",
              title: "Original Mini-Game",
              desc: "Students design and build their first fully playable game with a win condition, score counter, and a restart button. The game concept, title, and visuals are all their own invention.",
              weeks: [
                "Mod 5: If/then logic",
                "Mod 6: Score & lives",
                "Mod 7: Win/lose screens",
                "Mod 8: Launch",
              ],
              asset: "Playable game link — friends and family can play it online",
            },
          },
          {
            month: "Month 3 — Advanced Scratch: Art & Computational Thinking",
            cycle: {
              badge: "Production Cycle 3 · Phase Capstone",
              title: "Digital Art Showcase + Final Exhibition",
              desc: "Students create an interactive digital artwork using pen blocks, cloning, and variables to produce generative visuals. They present all 3 months of work in the Foundation Graduation Exhibition.",
              weeks: [
                "Mod 9: Pen & drawing",
                "Mod 10: Clones & variables",
                "Mod 11: Generative art",
                "Mod 12: Graduation Exhibition",
              ],
              asset: "Printable digital artwork poster + Scratch project link",
            },
          },
        ],
        graduation: {
          title: 'Foundation Graduation — "Digital Explorer" Certificate',
          items: [
            "Portfolio: 3 published Scratch projects (animated story, playable game, generative art)",
            "Physical Certificate: Printed, signed, frameable — presented at live Quarterly Exhibition",
            "Social Asset: Professional photo with certificate + portfolio link for family social media",
            "Next Step: Eligible to enrol in Track 2, 3, or 4 as an Architect-level learner",
          ],
        },
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  {
    slug: "web-development",
    name: "Web Development",
    shortName: "Web Dev",
    ages: "Ages 9–17",
    cadence: "2 sessions/week · 1 hour each",
    duration: "Full Mastery · 18–24 Months",
    summary: "HTML/CSS → JavaScript → React → Next.js → Full-stack apps",
    intro:
      "Students master static web fundamentals, then component architecture, then full-stack engineering. Every production cycle ends with a live, publicly accessible URL.",
    accent: "#047857",
    bg: "#d1fae5",
    border: "#6ee7b7",
    tools: ["HTML", "CSS", "JavaScript", "React", "Next.js", "APIs"],
    hasFounderModules: true,
    levels: ["foundation", "architect", "capstone"],
    phases: [
      {
        num: 1,
        level: "foundation",
        title: 'Foundation — "Web Explorer"',
        months: "Months 1–6",
        identity:
          "I build websites that real people can visit from anywhere in the world",
        summary:
          "Students master static web fundamentals — HTML structure, CSS aesthetics, and JavaScript interactivity. Every production cycle ends with a live, publicly accessible URL that parents can share on social media.",
        sections: [
          {
            month: "Month 1 — HTML: The Anatomy of the Web",
            cycle: {
              badge: "Production Cycle 1",
              title: 'Personal "About Me" Webpage',
              desc: "Students build and publish a personal webpage about themselves from scratch — no templates, no shortcuts. Published via GitHub Pages and live on the real internet within 4 weeks.",
              weeks: [
                "Mod 1: HTML foundations",
                "Mod 2: Images & links",
                "Mod 3: Structure & layout",
                "Mod 4: Publish & Exhibition",
              ],
              asset: "Live public URL — shareable anywhere, viewable on any device",
            },
            modules: [
              {
                label: "Module 1",
                title: "HTML: Write Your First Webpage",
                sessions: [
                  {
                    label: "Session 1",
                    title: "What IS a Webpage? Build One Now.",
                    teaches: "HTML boilerplate, DOCTYPE, html/head/body, h1, p. VS Code setup.",
                    does: "Types a complete HTML file from memory and opens it in a browser",
                    output: "Live webpage in browser",
                  },
                  {
                    label: "Session 2",
                    title: "Headings, Paragraphs, Bold, Italic",
                    teaches: "h1–h6, p, strong, em, br tags. Text hierarchy.",
                    does: 'Builds a "My Favourite Things" styled text page',
                  },
                ],
              },
              {
                label: "Module 2",
                title: "Images, Links & Navigation",
                sessions: [
                  {
                    label: "Session 1",
                    title: "Add a Photo — Images on the Web",
                    teaches: "img tag, src, alt. Finding royalty-free images. Unsplash.",
                    does: "Adds a profile photo to their About Me page",
                  },
                  {
                    label: "Session 2",
                    title: "Links — Connect the World",
                    teaches: "Anchor tags, href, target=_blank. Absolute vs. relative paths.",
                    does: "Links to their favourite YouTube channel, with proper attribution",
                  },
                ],
              },
              {
                label: "Module 3",
                title: "Semantic Structure — Page Architecture",
                sessions: [
                  {
                    label: "Session 1",
                    title: "Lists, Tables & Organised Content",
                    teaches: "ul, ol, li, table, tr, td. Organising data meaningfully.",
                    does: 'Adds a "Top 10 Favourite Films" list and a facts table',
                  },
                  {
                    label: "Session 2",
                    title: "Header, Footer, Main — Semantic HTML",
                    teaches: "Semantic elements, div layout. SEO-friendly structure.",
                    does: "Restructures page into professional header/main/footer",
                  },
                ],
              },
              {
                label: "Module 4",
                title: "Publish Live + First Quarterly Exhibition",
                sessions: [
                  {
                    label: "Session 1",
                    title: "Deploy to GitHub Pages",
                    teaches: "Git basics, GitHub interface, Pages deployment, custom meta tags.",
                    does: "Deploys their first page to a real public URL",
                    asset: "Live URL on the internet",
                  },
                  {
                    label: "Session 2",
                    title: "Exhibition Day — Present Your Website",
                    does: "Parents scan a QR code and visit the student's live website. Students walk through the code they wrote.",
                  },
                ],
              },
            ],
            exhibition: {
              title: "Month 1 Exhibition",
              items: [
                "Presented: A live personal webpage with a real public URL",
                "Tangible Asset: QR code card printed for the student to give parents — their website forever",
                "Parents see: Their child's page on their own phone, accessible from any country",
              ],
            },
          },
          {
            month: "Month 2 — CSS: Aesthetics, Layout & Visual Identity",
            cycle: {
              badge: "Production Cycle 2",
              title: "Styled Portfolio Page",
              desc: "Students take their raw HTML page and transform it with professional CSS. Custom colour palette, Google Fonts typography, flexbox layout, card components, hover effects. The visual leap is dramatic — and parents notice.",
              weeks: [
                "Mod 5: Colors & fonts",
                "Mod 6: Box model & spacing",
                "Mod 7: Flexbox layouts",
                "Mod 8: Hover + Exhibition",
              ],
              asset: "Screenshot-worthy portfolio — designed for LinkedIn/Instagram share",
            },
          },
          {
            month: "Month 3 — JavaScript: Logic, Events & Interactivity",
            cycle: {
              badge: "Production Cycle 3 · Foundation Milestone",
              title: "Interactive Quiz Website",
              desc: "Students build a fully functional 5-question quiz on any topic they choose — sport, music, history, pop culture. Shows real-time scoring, conditional results messages, and a restart function. Built entirely from scratch with vanilla JavaScript.",
              weeks: [
                "Mod 9: JS basics & DOM",
                "Mod 10: Click events & counters",
                "Mod 11: Quiz logic",
                "Mod 12: Full quiz + Exhibition",
              ],
              asset: "Published interactive quiz — parents can take it on their phone at the Exhibition",
            },
            exhibition: {
              title: "Month 3 Quarterly Exhibition — Foundation Graduation",
              items: [
                "Presented: Working quiz on a live website — parents and guests actually play it",
                'Award: "Web Explorer" Certificate (physical, framed)',
                "Portfolio at Month 3: Live About Me page · Styled Portfolio · Interactive Quiz",
              ],
            },
          },
          {
            month: "Month 4 — Responsive Design & Multi-Page Architecture",
            cycle: {
              badge: "Production Cycle 4",
              title: "3-Page Fan Site — Responsive & Professional",
              desc: "A fan site for any subject they're passionate about — sport, gaming, music, film. Three pages: Home (hero section + featured content), Gallery (CSS Grid), Contact (functional form). Fully responsive on mobile AND desktop.",
              weeks: [
                "Mod 13: Media queries",
                "Mod 14: CSS Grid",
                "Mod 15: Multi-page nav",
                "Mod 16: Launch",
              ],
              asset: "3-page live website — shareable as a portfolio link for any college or competition",
            },
          },
          {
            month: "Month 5 — JavaScript Intermediate: APIs & Real Data",
            cycle: {
              badge: "Production Cycle 5",
              title: "Live Weather App (API-Powered)",
              desc: "Students type any city name and get real, live weather data back from the Open-Meteo API. Displays temperature, condition icons, humidity, and a 3-day forecast. Uses async/await and modern JavaScript patterns.",
              weeks: [
                "Mod 17: Arrays & objects",
                "Mod 18: Fetch & APIs",
                "Mod 19: Display live data",
                "Mod 20: Full app + Demo",
              ],
              asset: "Functional web app pulling real-world data — demonstrates professional capability",
            },
          },
          {
            month: "Month 6 — Foundation Capstone: A Website for a Real Client",
            cycle: {
              badge: "Production Cycle 6 · Foundation Capstone",
              title: "Real-World Commission — Client Site",
              desc: "Students pitch and build a website with a real purpose: a local business, a school club, a community group, or a personal brand. Multi-page, responsive, JavaScript-enhanced, and handed over to a real recipient. This is not a classroom exercise.",
              weeks: [
                "Mod 21: Client brief & wireframe",
                "Mod 22: Build core pages",
                "Mod 23: Interactivity & polish",
                "Mod 24: Launch + Exhibition",
              ],
              asset: "Live commissioned website — a real client, a real brief, a real deliverable",
            },
          },
        ],
        graduation: {
          title: 'Foundation Graduation Exhibition — "Frontend Developer" Diploma',
          items: [
            "Portfolio: 6 live projects — About Me, Quiz, Fan Site, Weather App, Client Commission, more",
            'Physical Award: "Frontend Developer" framed diploma, presented publicly',
            "Social Media Package: Professional photo, project screenshots, portfolio link — ready to post",
          ],
        },
      },
      {
        num: 2,
        level: "architect",
        title: 'Architect — "React Engineer"',
        months: "Months 7–15",
        identity:
          "I build modern web applications with component architecture and live data",
        summary:
          "The defining transition of this level: students abandon static HTML and enter the world of component-based development with React. Modules are longer, projects are more complex, and the Founder Mindset module activates — teaching students to think like product owners, not just coders.",
        sections: [
          {
            month: "Month 7–8 — JavaScript Mastery: The Bridge to React",
            cycle: {
              badge: "Production Cycle 7",
              title: "Advanced To-Do & Habit Tracker App",
              desc: "A full-featured task management application with local storage persistence, category filtering, priority flags, and streak tracking. Built with vanilla ES6+ JavaScript before transitioning to React — students understand WHY React exists because they've felt the pain without it.",
              weeks: [
                "Wk 25–26: Advanced DOM",
                "Wk 27–28: Local Storage & state",
                "Wk 29–30: Array methods",
                "Wk 31–32: App complete",
              ],
              asset: "Deployed app with shareable link — demonstrates JS mastery before frameworks",
            },
          },
          {
            month: "Month 9–11 — React: Component-Based Architecture",
            cycle: {
              badge: "Production Cycle 8",
              title: "React Dashboard Application",
              desc: "Students rebuild their best previous project in React from scratch — experiencing firsthand how components, props, and state management transform their development process. Multiple API integrations, routing with React Router, and a polished UI built with Tailwind CSS.",
              weeks: [
                "Wk 33–36: React fundamentals",
                "Wk 37–40: Hooks & state",
                "Wk 41–44: React Router + APIs",
              ],
              asset: "React app deployed on Vercel — professional URL, fast, modern, component-driven",
            },
          },
          {
            month: "Month 12–13 — Next.js: Full-Stack Thinking",
            cycle: {
              badge: "Production Cycle 9",
              title: "Next.js Blog & Portfolio Platform",
              desc: "Students graduate from client-side React into Next.js — introducing server-side rendering, file-based routing, API routes, and SEO optimisation. The output is a professional developer portfolio they will use for years.",
              weeks: ["Wk 45–48: Next.js fundamentals", "Wk 49–52: SSR & API routes"],
              asset: "Next.js portfolio deployed on Vercel — their professional web identity for job applications and university",
            },
          },
          {
            month: "Month 14–15 — Architect Capstone: Full-Stack App with Real Users",
            cycle: {
              badge: "Production Cycle 10 · Architect Capstone",
              title: "Student-Founded Web Product",
              desc: "Using everything from the Architect level — React components, Next.js routing, API integrations, and the Founder Mindset module — students design, build, and launch a web product they've conceived themselves. Real users. Real feedback. Real iteration. Presented as a 10-minute investor-style pitch at the Quarterly Exhibition.",
              weeks: ["Wk 53–56: Scope & tech planning", "Wk 57–60: Core build sprint"],
              asset: "Live web product with real users — plus a pitch deck and a recorded founder presentation",
            },
          },
        ],
        founderModule: {
          badge: "Tech-Entrepreneurship Module — Architect Level",
          title: "The Founder Mindset: Think Like a Product Owner",
          desc: "Integrated across Months 10–15, this module teaches students to think beyond the code — into strategy, presentation, and value creation.",
          items: [
            {
              title: "Pitch Your Product",
              body: "Create a 3-minute pitch deck for your web app. Problem, solution, audience, monetisation.",
            },
            {
              title: "User Research 101",
              body: "Interview 3 real users. Extract insights. Iterate your design based on what you hear, not what you assume.",
            },
            {
              title: "Growth & Marketing",
              body: "How do users find your app? SEO basics, social media strategy, word-of-mouth loops.",
            },
            {
              title: "Pricing Your Work",
              body: "How to charge for freelance web projects. Scope, proposals, and the ethics of client work.",
            },
          ],
        },
        graduation: {
          title: 'Architect Graduation Exhibition — "React Engineer" Diploma',
          items: [
            "Portfolio: 10 production cycles — from basic HTML to a live Next.js product with users",
            "Founder Pitch: 10-minute presentation to parents, guests, and invited industry professionals",
            "Social Package: Professional headshot, portfolio PDF, GitHub profile card — ready for university applications",
          ],
        },
      },
      {
        num: 3,
        level: "capstone",
        title: 'Capstone — "Full-Stack Engineer"',
        months: "Months 16–24",
        identity:
          "I build production-grade, full-stack applications that solve real problems at scale",
        summary:
          "The apex of the Web Development track. Students operate with near-professional autonomy — managing databases, authentication, deployment pipelines, and AI integrations. The Graduate Exhibition is a public event, not a classroom presentation. This is where years of investment become undeniable.",
        sections: [
          {
            month: "Month 16–18 — Databases, Auth & Back-End Integration",
            cycle: {
              badge: "Production Cycle 11",
              title: "Full-Stack App with Authentication",
              desc: "Students extend their Next.js skills into real full-stack territory: Supabase or Firebase for database management, user authentication with sign-in/sign-up/session handling, and protected routes. The result is a working SaaS-style application.",
              asset: "Live authenticated web app — a genuine SaaS-style product in their portfolio",
            },
          },
          {
            month: "Month 19–21 — AI Integration & Advanced Engineering",
            cycle: {
              badge: "Production Cycle 12",
              title: "AI-Powered Web Application",
              desc: "Students integrate an AI API (OpenAI or Anthropic) into a web application of their own design. The integration must solve a meaningful problem. Examples: an AI study assistant, a business plan generator, a personalised story engine.",
              asset: "AI-integrated web app — a genuinely cutting-edge portfolio piece that stands out in any context",
            },
          },
          {
            month: "Month 22–24 — Graduate Capstone: Original IP & Public Launch",
            cycle: {
              badge: "Production Cycle 13 · Graduate Capstone",
              title: "Student-Owned Web Startup — Public Launch",
              desc: "The culmination of 24 months. Students conceive, build, and publicly launch an original web product — their own intellectual property. This is not an academic exercise: the product is real, marketed, and presented at the Annual Graduate Exhibition to parents, tech professionals, and media.",
              weeks: [
                "Wk 65–68: Product design & spec",
                "Wk 69–76: Full build sprint",
                "Wk 77–84: Polish, testing, launch",
                "Wk 85–96: Public launch prep",
              ],
              asset: "A live, publicly launched product with real users — original IP owned by the student",
            },
          },
        ],
        graduation: {
          title: 'Annual Graduate Exhibition — "Full-Stack Engineer" Diploma',
          items: [
            "10-minute public presentation to parents, industry guests, and media",
            "13 production cycles across 24 months — the most comprehensive youth tech portfolio in Nigeria",
            "Diploma: Physical, framed, signed by the Director — the kind you hang on a wall",
            "Graduate Pack: Professional portfolio PDF · GitHub profile · LinkedIn-ready bio · Recommendation letter",
          ],
        },
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  {
    slug: "game-development",
    name: "Game Development",
    shortName: "Game Dev",
    ages: "Ages 9–17",
    cadence: "2 sessions/week · 1 hour each",
    duration: "Full Mastery · 18–24 Months",
    summary: "Scratch → GDevelop → Godot → Unity → Published & monetised games",
    intro:
      "Game design thinking comes before technical complexity. Students move through four engines, publishing playable games to a real public audience at every stage.",
    accent: "#7c3aed",
    bg: "#ede9fe",
    border: "#c4b5fd",
    tools: ["Scratch", "GDevelop", "Godot", "Unity", "C#"],
    hasFounderModules: true,
    levels: ["foundation", "architect", "capstone"],
    phases: [
      {
        num: 1,
        level: "foundation",
        title: 'Foundation — "Game Designer"',
        months: "Months 1–6",
        identity: "I design and publish games that other people actually play",
        summary:
          "The foundation establishes game design thinking before technical complexity. Students learn Scratch (Months 1–2) then transition to GDevelop (Months 3–4) — a visual, no-code-to-light-code bridge that dramatically reduces frustration and dropout. Godot is introduced in Month 5 as a professional 2D engine, preparing students for Unity without the shock.",
        sections: [
          {
            month: "Month 1–2 — Scratch: Game Logic & Mechanics",
            cycle: {
              badge: "Production Cycle 1",
              title: "Original Platformer Game",
              desc: "Students build a fully original platformer — their own characters, world, and story. Gravity, jumping, enemy collision, score counter, multiple levels, and a proper win/lose screen. Concept, title, and design are entirely student-created.",
              weeks: [
                "Mod 1: Gravity & physics",
                "Mod 2: Enemies & collision",
                "Mod 3: Score & lives",
                "Mod 4: Levels + publish",
              ],
              asset: "Playable Scratch game link — friends can play it from anywhere",
            },
          },
          {
            month: "Month 3–4 — GDevelop: The Visual Game Engine Bridge",
            cycle: {
              badge: "Production Cycle 2",
              title: "2D Space Shooter — Browser-Published",
              desc: "GDevelop bridges the gap between visual block coding and professional engines. Students rebuild their game logic in a real event-based IDE — with sprite sheets, tilemaps, particle effects, and audio management. Published directly to browser via GDevelop's one-click export.",
              weeks: [
                "Mod 5: GDevelop interface",
                "Mod 6: Events & behaviours",
                "Mod 7: Tilemaps & audio",
                "Mod 8: Publish + Exhibition",
              ],
              asset: "Browser-playable game — no download needed, shareable link, professional feel",
            },
            exhibition: {
              title: "Months 1–4 Quarterly Exhibition",
              items: [
                "Presented: Two live, playable games — Scratch platformer and a GDevelop space shooter",
                "Format: Students present as if pitching to a game studio: genre, audience, what makes it fun",
                "Parents play: Games are open on tablets around the room — parents compete for high scores",
              ],
            },
          },
          {
            month: "Month 5–6 — Godot: Professional 2D Engine Introduction",
            cycle: {
              badge: "Production Cycle 3 · Foundation Capstone",
              title: "Original Game Jam Entry — Godot",
              desc: "Godot (GDScript) is the professional bridge before Unity. Students produce a complete Game Jam game in 4 weeks with a tight brief they write themselves. All Godot fundamentals: nodes, scenes, signals, tilemaps, AnimationPlayer. Published on itch.io for a real public audience.",
              weeks: [
                "Mod 9: Godot fundamentals",
                "Mod 10: GDScript & scenes",
                "Mod 11: Full game build",
                "Mod 12: Publish to itch.io",
              ],
              asset: "Published itch.io game — real public URL, play count visible, comments from strangers",
            },
          },
        ],
        graduation: {
          title: 'Foundation Graduation — "Game Designer" Certificate',
          items: [
            "3 published games across 3 different engines — demonstrates engine adaptability",
            "1 itch.io listing with a real public play count",
            'Award: Physical "Game Designer" certificate + itch.io creator badge printed on card',
          ],
        },
      },
      {
        num: 2,
        level: "architect",
        title: 'Architect — "Game Developer"',
        months: "Months 7–15",
        identity:
          "I design complete game systems — mechanics, economy, narrative, and feel",
        summary:
          "Students who've earned their foundation certification graduate into Unity — the industry-standard engine used in real game studios. Because they've already mastered game logic in Scratch, GDevelop, and Godot, the Unity transition is smooth rather than brutal. C# scripting begins here. The Founder Mindset module activates, teaching students how commercial games are actually built and monetised.",
        sections: [
          {
            month: "Month 7–9 — Unity Fundamentals + C# Scripting",
            cycle: {
              badge: "Production Cycle 4",
              title: "Endless Runner in Unity",
              desc: "The classic game mechanic — but built in Unity with C# scripting from scratch. Students implement physics, procedural obstacle generation, progressive difficulty scaling, a persistent high-score system, and particle effects. Deployed to WebGL and embedded on a portfolio page.",
              weeks: [
                "Mod 13: Unity interface",
                "Mod 14: C# scripting basics",
                "Mod 15: Physics & procedural gen",
                "Mod 16: WebGL deploy",
              ],
              asset: "WebGL game embedded on their portfolio site — shareable, playable, impressive",
            },
          },
          {
            month: "Month 10–12 — RPG Systems: Narrative, Economy & World Design",
            cycle: {
              badge: "Production Cycle 5",
              title: "Mini RPG — Original World & Story",
              desc: "Top-down exploration with a world students design from scratch: NPC dialogue trees, an item economy, turn-based combat, a map with multiple areas, and a complete narrative arc with an ending. Students write the lore, design the art, and compose (or source) the music.",
              weeks: [
                "Mod 17: Dialogue systems",
                "Mod 18: Item economy",
                "Mod 19: World design",
                "Mod 20: Full RPG + Exhibition",
              ],
              asset: "Complete RPG on itch.io with a game page, screenshots, and description students wrote",
            },
          },
          {
            month: "Month 13–15 — Architect Capstone: Published & Marketed Game",
            cycle: {
              badge: "Production Cycle 6 · Architect Capstone",
              title: "Commercial-Grade Published Game",
              desc: "Students scope, design, build, polish, and publish a complete game they've conceived using their GDD. A real itch.io listing, a proper game page with screenshots and a trailer, and a marketing push they execute themselves. Play count is tracked. Real players leave reviews.",
              weeks: [
                "Mod 21: Game design doc",
                "Mod 22: Core build",
                "Mod 23: Sound, polish, playtesting",
                "Mod 24: Launch + Exhibition pitch",
              ],
              asset: "Published commercial-grade game with a marketing page — real audience, real play count, real reviews",
            },
          },
        ],
        founderModule: {
          badge: "Tech-Entrepreneurship Module — Architect Level",
          title: "The Game Industry: From Passion to Profession",
          desc: "Across Months 11–15, students learn the business of games — not just the craft.",
          items: [
            {
              title: "Game Design Document",
              body: "Write a professional GDD for your capstone — as studios do before a single line of code is written.",
            },
            {
              title: "Monetisation Models",
              body: "Free-to-play, premium, DLC, crowdfunding. How indie studios sustain themselves.",
            },
            {
              title: "Pitch to a Studio",
              body: "Create a slide deck pitching your game concept as if to a publisher. Why this genre, why now, who is the player?",
            },
            {
              title: "Community Building",
              body: "Game devlogs, Twitter/X presence, itch.io page optimisation. How games find players before they're finished.",
            },
          ],
        },
        graduation: {
          title: 'Architect Graduation Exhibition — "Game Developer" Diploma',
          items: [
            "6 games across 4 engines — a portfolio that proves engine versatility",
            "Investor-style pitch: Students present their game as founders pitching to a publisher",
            "itch.io portfolio: Shareable page with all published games and their play counts",
          ],
        },
      },
      {
        num: 3,
        level: "capstone",
        title: 'Capstone — "Game Studio Lead"',
        months: "Months 16–24",
        identity:
          "I produce original IP, direct development cycles, and present my work to industry",
        summary:
          "At the Capstone level, students function as junior game studio leads. Projects involve teams (where cohort size allows), original IP, and professional presentation to external guests. The Graduate Exhibition is a real event — not a classroom demo.",
        sections: [
          {
            month: "Month 16–18 — Advanced Unity: Shaders, AI & Advanced Systems",
            cycle: {
              badge: "Production Cycle 7",
              title: "3D Game With Custom Shaders & Enemy AI",
              desc: "Students graduate into 3D environments, shader programming (Shader Graph), and NavMesh enemy AI. The production cycle introduces project management tools (Trello, Notion) and sprint methodology — how professional studios ship on time.",
              asset: "3D game demo reel — a 60-second gameplay video publishable to YouTube and LinkedIn",
            },
          },
          {
            month: "Month 19–24 — Graduate Capstone: Original IP & Annual Exhibition",
            cycle: {
              badge: "Production Cycle 8 · Graduate Capstone",
              title: "Student-Owned Original Game — Public Release",
              desc: "Over 6 months, students produce their definitive game — original intellectual property they own. The game is publicly released and marketed. The Annual Graduate Exhibition is a public event to which media and tech professionals are invited. This is a career-launching moment, not a classroom exercise.",
              weeks: [
                "Wk 65–68: GDD & pre-production",
                "Wk 69–80: Production sprint",
                "Wk 81–88: Alpha testing & polish",
                "Wk 89–96: Public launch + Exhibition",
              ],
              asset: "Commercially released game — original IP, real audience, public exhibition presentation, press kit",
            },
          },
        ],
        graduation: {
          title: 'Annual Graduate Exhibition — "Game Studio Lead" Diploma',
          items: [
            "8+ published games spanning 24 months and 4 engines",
            "Original IP: A commercially released game students own the rights to",
            "Graduate Pack: Game portfolio PDF · itch.io creator profile · Press kit · Diploma",
          ],
        },
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  {
    slug: "design-and-brand-strategy",
    name: "Design & Brand Strategy",
    shortName: "Design",
    ages: "Ages 9–17",
    cadence: "2 sessions/week · 1 hour each",
    duration: "Full Mastery · 18–24 Months",
    summary: "Canva → Figma → UX Research → Motion Design → Full Brand Strategy",
    intro:
      "Begins with Canva — accessible, immediate, gratifying. By Month 4 students are in Figma doing real UI/UX work, and by the Capstone they are running full brand commissions.",
    accent: "#be185d",
    bg: "#fce7f3",
    border: "#f9a8d4",
    tools: [
      "Canva",
      "Figma",
      "UX Research",
      "Prototyping",
      "Motion Design",
      "Brand Strategy",
    ],
    hasFounderModules: true,
    levels: ["foundation", "architect", "capstone"],
    phases: [
      {
        num: 1,
        level: "foundation",
        title: 'Foundation — "Visual Creator"',
        months: "Months 1–6",
        identity:
          "I communicate ideas visually and make things look undeniably professional",
        summary:
          "Begins with Canva — accessible, immediate, gratifying. Every session produces a portfolio-worthy visual. By Month 3, students transition into Figma fundamentals, where real UI/UX work begins. Design principles underpin every module: colour theory, typography, hierarchy, composition.",
        sections: [
          {
            month: "Month 1 — Design Fundamentals + Canva: Brand Identity",
            cycle: {
              badge: "Production Cycle 1",
              title: "Personal Brand Identity System",
              desc: "Students design their own personal brand from nothing: a logo mark, a curated 3-colour palette with rationale, a font pair that communicates personality, a social media profile banner, and a business card mockup — all consistent, all intentional, all their own.",
              weeks: [
                "Mod 1: Colour theory",
                "Mod 2: Typography mastery",
                "Mod 3: Logo construction",
                "Mod 4: Full brand kit",
              ],
              asset: "Printed brand kit + social media assets — parents can share the banner live at Exhibition",
            },
            modules: [
              {
                label: "Module 1",
                title: "Colour Theory — The Silent Language of Design",
                sessions: [
                  {
                    label: "Session 1",
                    title: "What Colours Say Without Words",
                    teaches:
                      "Warm/cool, complementary, analogous, triadic palettes. Emotional psychology of colour. How brand colours create subconscious associations.",
                    does: "Redesigns the same poster in 3 different colour moods — cheerful, serious, luxurious",
                    asset: "3 mood-variant posters",
                  },
                  {
                    label: "Session 2",
                    title: "Build Your Signature Palette",
                    teaches:
                      "Coolors.co, the 60-30-10 rule, WCAG contrast ratios, hex codes. Why contrast matters for accessibility.",
                    does: "Creates and locks in their personal 3-colour palette with usage rules documented",
                    asset: "Brand colour system card",
                  },
                ],
              },
              {
                label: "Module 2",
                title: "Typography — Fonts Are the Voice of Your Brand",
                sessions: [
                  {
                    label: "Session 1",
                    title: "Font Families, Hierarchy & Emotional Tone",
                    teaches:
                      "Serif vs. sans-serif vs. display. Font pairing rules. Visual hierarchy: headline → subhead → body.",
                    does: "Designs a quote poster using typography alone — no images, just words, weight, and space",
                  },
                  {
                    label: "Session 2",
                    title: "Select Your Brand Typefaces",
                    teaches:
                      "Google Fonts pairing logic. Contrast between display and body fonts. Line-height and letter-spacing refinements.",
                    does: "Chooses and documents their brand font pair with visual rationale",
                  },
                ],
              },
              {
                label: "Module 3–4",
                title: "Logo Construction & Brand System Assembly",
                sessions: [
                  {
                    label: "Sessions 5–6",
                    title: "Logo Construction — Wordmark, Logomark & Icon",
                    teaches:
                      "Logo types (wordmark, lettermark, abstract mark). Canva Pro logo builder, shape composition, negative space.",
                    does: "Creates 3 logo variants — primary, secondary, and icon version — in their brand colours",
                    asset: "Logo suite (3 variants)",
                  },
                  {
                    label: "Sessions 7–8",
                    title: "Brand Kit Assembly + Exhibition",
                    teaches:
                      "Brand consistency across touchpoints. Profile banners, email signatures, business card design.",
                    does: "Assembles the full brand kit and presents it as their first Exhibition showcase",
                    asset: "Complete brand system — printable and digital",
                  },
                ],
              },
            ],
            exhibition: {
              title: "Month 1 Exhibition",
              items: [
                "Presented: A complete personal brand identity with rationale for every decision",
                "Tangible Asset: Printed brand board displayed at the Exhibition + digital files sent to parents",
                "Parents see: Their child presenting design reasoning — not just showing a pretty poster",
              ],
            },
          },
          {
            month: "Month 2–3 — Applied Design: Campaigns, Presentations & Social Media",
            cycle: {
              badge: "Production Cycle 2",
              title: "3-Platform Social Media Campaign",
              desc: "Students design a consistent social media campaign for a cause, event, or micro-brand they care about. Deliverables span Instagram posts, a Facebook cover, a YouTube thumbnail, and an email header — all using the design system from Month 1. Then they build a presentation deck in Canva to pitch it.",
              weeks: [
                "Mod 5: Social media design rules",
                "Mod 6: Campaign consistency",
                "Mod 7: Presentation design",
                "Mod 8: Campaign + Exhibition",
              ],
              asset: "A designed campaign across 4 platforms — screenshot-worthy, shareable, portfolio-grade",
            },
          },
          {
            month: "Month 4–6 — Figma Foundation: UI Design & Prototyping",
            cycle: {
              badge: "Production Cycle 3 · Foundation Capstone",
              title: "Figma App Prototype — Clickable & Shareable",
              desc: "Students transition into Figma — the industry standard tool for UI/UX design. They design a mobile app for a cause, business, or hobby they care about. Wireframes, high-fidelity screens, a component library, and a clickable prototype that anyone can navigate on their phone.",
              weeks: [
                "Mod 9: Figma interface & frames",
                "Mod 10: Auto-layout & components",
                "Mod 11: High-fidelity UI",
                "Mod 12: Prototype + Exhibition",
              ],
              asset: "Shareable Figma prototype link — parents can navigate the app on their phone at the Exhibition",
            },
          },
        ],
        graduation: {
          title: 'Foundation Graduation — "Visual Creator" Certificate',
          items: [
            "Portfolio: Brand identity system · Social media campaign · Figma app prototype",
            'Award: Physical "Visual Creator" certificate + a printed portfolio booklet of their best work',
          ],
        },
      },
      {
        num: 2,
        level: "architect",
        title: 'Architect — "UX Designer"',
        months: "Months 7–15",
        identity:
          "I research users, design systems, and create experiences that solve real problems",
        summary:
          "Architect-level design is where aesthetics give way to strategy. Students conduct real UX research — interviewing actual users, synthesising findings, and iterating designs based on evidence rather than assumption. Figma deepens into auto-layout, design systems, and advanced prototyping. Motion design is introduced. The Founder Mindset module teaches students to think like brand strategists.",
        sections: [
          {
            month: "Month 7–9 — UX Research: Design That Actually Works",
            cycle: {
              badge: "Production Cycle 4",
              title: "User-Researched App Redesign",
              desc: "Students select an existing app or service with a known usability problem and redesign it — but only after conducting structured user research. Minimum 5 user interviews, an affinity diagram, a defined user persona, and an annotated before/after design comparison. The redesign is tested with real users.",
              weeks: [
                "Mod 13: Research methods",
                "Mod 14: User interviews",
                "Mod 15: Synthesis & insights",
                "Mod 16: Redesign + usability test",
              ],
              asset: "UX case study PDF — the format used in real design portfolio submissions",
            },
          },
          {
            month: "Month 10–12 — Design Systems & Figma Mastery",
            cycle: {
              badge: "Production Cycle 5",
              title: "Full Design System for a Brand",
              desc: "Students build a complete design system from scratch in Figma: a component library (buttons, inputs, cards, modals, navigation), a colour and typography token system, spacing rules, and documentation. The design system is then applied to a full 10-screen app prototype.",
              weeks: [
                "Mod 17: Tokens & variables",
                "Mod 18: Component library",
                "Mod 19: Documentation",
                "Mod 20: Full system + prototype",
              ],
              asset: "Figma design system — shareable, reusable, industry-standard format",
            },
          },
          {
            month: "Month 13 — Motion Design: Bring Interfaces to Life",
            cycle: {
              badge: "Production Cycle 6",
              title: "Animated UI Interactions & Motion Brand Identity",
              desc: "Using Figma's Smart Animate, Jitter, or LottieFiles, students create micro-interactions and animated transitions for their UI components. Then they extend into motion brand identity — a short animated logo reveal and an animated social media post template.",
              weeks: [
                "Mod 21: Smart animate & transitions",
                "Mod 22: Micro-interactions",
                "Mod 23: Animated brand identity",
              ],
              asset: "Animated interaction video + animated logo — publishable to Instagram Reels and portfolio",
            },
          },
          {
            month: "Month 14–15 — Architect Capstone: Full Brand Strategy Commission",
            cycle: {
              badge: "Production Cycle 7 · Architect Capstone",
              title: "Complete Brand Strategy for a Real Client",
              desc: "Students take on a real client brief — a local business, a school, a community organisation, or a student-run venture. They deliver: brand strategy document, logo suite, full design system, marketing collateral, app or website prototype, and a 15-minute brand presentation. This is a real professional commission.",
              weeks: [
                "Mod 25: Discovery & strategy",
                "Mod 26: Visual identity",
                "Mod 27: System & collateral",
                "Mod 28: Presentation + Exhibition",
              ],
              asset: "Full brand strategy deck + design deliverables handed to a real client — a commissioned professional project",
            },
          },
        ],
        founderModule: {
          badge: "Tech-Entrepreneurship Module — Architect Level",
          title: "The Brand Strategist's Mind: Design as Competitive Advantage",
          desc: "Across Months 12–15, students study how brands use design to create value — and how to position themselves as strategic design thinkers, not just tool operators.",
          items: [
            {
              title: "Brand Strategy 101",
              body: "Mission, vision, positioning, and why great brands say no to most opportunities. The Apple method.",
            },
            {
              title: "Design for Business",
              body: "How design increases conversion rates, reduces churn, and builds brand equity. Show the ROI of design.",
            },
            {
              title: "Freelance Design",
              body: "Pricing design projects, writing proposals, managing client expectations, and building a design reputation.",
            },
            {
              title: "Portfolio That Wins",
              body: "How to write case study narratives. How to present work in interviews. The 3-project portfolio framework.",
            },
          ],
        },
        graduation: {
          title: 'Architect Graduation Exhibition — "UX Designer" Diploma',
          items: [
            "7 production cycles from colour theory to a full brand commission",
            "15-minute client presentation delivered in front of parents, guests, and the client themselves",
            "Portfolio PDF: 7 documented case studies in industry-standard format",
          ],
        },
      },
      {
        num: 3,
        level: "capstone",
        title: 'Capstone — "Brand Strategist"',
        months: "Months 16–24",
        identity:
          "I create original brand identities, direct creative teams, and present at industry level",
        summary:
          "Capstone design graduates function as junior creative directors. They lead multi-deliverable commissions, conduct UX research at a professional standard, produce motion-design outputs, and present their work to public audiences that include industry professionals.",
        sections: [
          {
            month: "Month 16–18 — Advanced UX: Service Design & Research at Scale",
            cycle: {
              badge: "Production Cycle 8",
              title: "End-to-End UX Audit & Redesign",
              desc: "Students conduct a comprehensive UX audit of a digital product — including heuristic evaluation, user journey mapping, a competitive analysis, and 10+ user interviews. The audit informs a full redesign delivered as a clickable prototype and a professional UX case study document.",
              asset: "Professional UX audit document + redesign prototype — identical in format to agency deliverables",
            },
          },
          {
            month: "Month 19–21 — Motion Design & Creative Direction",
            cycle: {
              badge: "Production Cycle 9",
              title: "Motion Brand Campaign — Multi-Platform",
              desc: "Students produce a complete animated brand campaign across multiple platforms: an animated logo reveal, a 30-second brand story video, animated social media templates, and a motion style guide. Tools include Jitter, LottieFiles, and Canva Pro animation.",
              asset: "Published animated campaign — brand video on YouTube and Instagram Reels, all linked in portfolio",
            },
          },
          {
            month: "Month 22–24 — Graduate Capstone: Original Brand Venture",
            cycle: {
              badge: "Production Cycle 10 · Graduate Capstone",
              title: "Student-Founded Brand — Full Strategic Identity",
              desc: "The culmination of 24 months. Students conceive and build a complete brand for a venture they have founded — real or aspirational. Brand strategy document, full visual identity system, motion assets, a designed website prototype, and a brand launch event planned and executed by the student. Presented at the Annual Graduate Exhibition.",
              weeks: [
                "Wk 65–72: Brand strategy & research",
                "Wk 73–84: Full identity build",
                "Wk 85–92: Motion & digital assets",
                "Wk 93–96: Exhibition presentation",
              ],
              asset: "Complete brand venture — strategy, identity, motion, digital presence — presented publicly to industry guests",
            },
          },
        ],
        graduation: {
          title: 'Annual Graduate Exhibition — "Brand Strategist" Diploma',
          items: [
            "10 documented production cycles from colour theory to a full brand venture",
            "20-minute strategic presentation to parents, industry guests, and media",
            "Graduate Portfolio: Physical portfolio book + digital PDF + motion design showreel",
          ],
        },
      },
    ],
  },
];

export const getTrack = (slug) => TRACKS.find((track) => track.slug === slug);

// ── Programme FAQs ───────────────────────────────────────────────────────
// TBC marks a detail not confirmed internally yet. A question listing a TBC key
// in `requires` is dropped from the page rather than answered with a guess —
// fill the value in below and the question appears.
export const TBC = null;

export const PROGRAMME_DETAILS = {
  // Tuition is the single most-asked question and nothing on the site states it.
  tuitionPerTerm: TBC, // e.g. "₦120,000 per term"
  tuitionBillingCycle: TBC, // e.g. "termly, three terms a year"
  paymentPlan: TBC, // e.g. "Pay monthly, or in two instalments per term"
  siblingDiscount: TBC, // exact terms, or false if none
  classCap: TBC, // e.g. 10
  platform: TBC, // e.g. "Zoom"
  nextIntake: TBC, // e.g. "September 2026"
  trialSession: TBC, // e.g. "One paid trial session, refundable if you don't continue"
};

export const PROGRAMME_FAQS = [
  {
    q: "How is the programme structured?",
    a: () => [
      "Your child picks one of four tracks and progresses through up to three competency levels: Foundation (months 0–6), Architect (months 7–15) and Capstone (months 16–24).",
      "Each level ends with a public graduation and a framed credential. Introduction to Coding is a six-month Foundation track; the other three run the full 18–24 months.",
      "Sessions are twice a week — 45–60 minutes for Introduction to Coding, an hour for the other tracks.",
    ],
  },
  {
    q: "Does my child have to commit to 24 months?",
    a: () => [
      "No. The levels are designed to be complete in themselves — a child who finishes Foundation at month 6 leaves with a real portfolio, a graduation and a credential, whether or not they continue.",
      "Most families decide one level at a time. We will tell you honestly at each graduation whether your child is ready for, and interested in, the next one.",
    ],
  },
  {
    q: "How much does it cost?",
    requires: ["tuitionPerTerm"],
    a: (d) => [
      `${d.tuitionPerTerm}${d.tuitionBillingCycle ? `, billed ${d.tuitionBillingCycle}` : ""}.`,
      d.paymentPlan ? `Payment plan: ${d.paymentPlan}.` : null,
      "That covers every live session, all materials, the quarterly exhibitions and the credential at each level graduation.",
    ].filter(Boolean),
  },
  {
    q: "Is there a discount for two children?",
    requires: ["siblingDiscount"],
    a: (d) => [
      d.siblingDiscount,
      "Siblings in the same cohort also tend to finish their projects at a noticeably higher rate — they keep each other going.",
    ],
  },
  {
    q: "Which track should my child start with?",
    a: () => [
      "Go by what they already enjoy. Ages 5–9 start with Introduction to Coding regardless of interest — it is the entry point for that age group.",
      "From age 9 up: always asking how things work → Web Development; obsessed with games → Game Development; always drawing → Design & Brand Strategy.",
      "Message us with your child's age and what they do when nobody is telling them what to do, and we will recommend one. A confident recommendation beats a menu.",
    ],
  },
  {
    q: "Can my child switch tracks later?",
    a: () => [
      "Between levels, yes — a child who graduates Foundation in Introduction to Coding can move into any of the other three tracks as an Architect-level learner.",
      "Within a level we keep them on one track. The whole model depends on finishing production cycles, and switching mid-level means finishing nothing.",
    ],
  },
  {
    q: "Does my child need any experience to start?",
    a: () => [
      "No. Every track begins at zero, and most students arrive having only ever used a phone.",
      "If they can read comfortably and type slowly, that is all that is required. The typing speeds up on its own.",
    ],
  },
  {
    q: "What does my child need at home?",
    a: () => [
      "A laptop or desktop computer, a stable internet connection, and headphones if the house is busy during class hours.",
      "A phone will not work. Every session ends with something your child has built running on their own screen, and that is not something you can do on a phone.",
      "You will also want to plan for power for the length of a session on class days.",
    ],
  },
  {
    q: "What days and times do classes run?",
    requires: ["platform"],
    a: (d) => [
      `Sessions run live on ${d.platform}, twice a week. Exact days and times are set per cohort and confirmed with you before your child starts.`,
      "Tell us your household's constraints when you enrol and we will place your child in the cohort that fits.",
    ],
  },
  {
    q: "How many students are in a class?",
    requires: ["classCap"],
    a: (d) => [
      `Cohorts are capped at ${d.classCap}.`,
      "Online, that number matters more than it does in a room — beyond a certain point an instructor cannot see who has gone quiet.",
    ],
  },
  {
    q: "When is the next intake?",
    requires: ["nextIntake"],
    a: (d) => [
      `The next intake is ${d.nextIntake}. Register and we will confirm your child's cohort and starting level before it begins.`,
    ],
  },
  {
    q: "Can we try a session before committing?",
    requires: ["trialSession"],
    a: (d) => [d.trialSession],
  },
  {
    q: "How will I know my child is making progress?",
    a: () => [
      "Four ways, and none of them require you to ask. A weekly build update after each session with a screenshot or link to what was made. A written report card each quarter covering competencies mastered and production cycles completed. A quarterly exhibition where your child presents to you directly. And a shared folder with every project, session note and portfolio asset.",
      "Every three months there is a new publicly accessible asset in their portfolio. Nothing about this programme is invisible.",
    ],
  },
  {
    q: "Will this help with school work or exams?",
    a: () => [
      "We will not claim it is exam preparation — it is not, and anyone promising you that is guessing.",
      "What it does build is the habit of explaining an idea clearly, breaking a large task into steps, and checking whether an answer is actually correct instead of accepting it. Parents tell us they notice it in how their child approaches assignments.",
    ],
  },
  {
    q: "Will this get my child a job?",
    a: () => [
      "Not on its own, and not quickly. What 24 months produces is a portfolio of real, live work, original intellectual property the student owns, and the experience of presenting it to adults who are not their parents.",
      "For a teenager applying to university or a first role, that is a genuinely unusual position to be in. We are honest about it being a starting advantage, not a guarantee.",
    ],
  },
  {
    q: "Is my child safe online during sessions?",
    a: () => [
      "An instructor is present for the whole of every session — no child is ever on a call alone.",
      "Students work in accounts we set up and monitor rather than personal ones, and online-safety ground rules are taught in the first weeks: never put your full name, address, school or photos into a tool, and tell an instructor immediately if anything strange appears on screen.",
    ],
  },
  {
    q: "What are the quarterly exhibitions, and do I have to attend?",
    a: () => [
      "Four times a year, students present their work to parents, guests and — at the higher levels — invited industry professionals. Each runs about 90 minutes.",
      "You are not required to come, but it is the part parents tell us they remember. Many of these children have never presented anything to a room of adults before, and the change in confidence is the thing you cannot see in a project link.",
    ],
  },
  {
    q: "How is this different from a summer bootcamp?",
    a: () => [
      "The bootcamp is three weeks and produces one project — it is the best way to find out whether your child catches the bug.",
      "The mastery programme is the long road: 8+ portfolio assets, up to three credentials, real client commissions, founder modules, and original work the student owns. Plenty of families start with the bootcamp and continue from there.",
    ],
  },
];

export const resolveProgrammeFaqs = (details = PROGRAMME_DETAILS) =>
  PROGRAMME_FAQS.filter((faq) =>
    (faq.requires || []).every(
      (key) => details[key] !== TBC && details[key] !== undefined
    )
  ).map((faq) => ({ question: faq.q, paragraphs: faq.a(details) }));

// ── Programme systems ────────────────────────────────────────────────────
export const ROI_CARDS = [
  {
    icon: "🔗",
    title: "Live Portfolio Assets",
    body: "Every 3 months, a new publicly accessible asset joins the portfolio",
    metric: "1 asset / 3mo",
  },
  {
    icon: "🎓",
    title: "Certified Competency",
    body: "Framed certificates at each level graduation — not PDFs, not stickers",
    metric: "3 diplomas max",
  },
  {
    icon: "🎤",
    title: "Public Presentations",
    body: "Students present professionally to real audiences — builds confidence parents see",
    metric: "8+ per year",
  },
  {
    icon: "📱",
    title: "Weekly Progress Update",
    body: "WhatsApp or email recap: what was built this week, what's next, one project link",
    metric: "Every week",
  },
  {
    icon: "📊",
    title: "Quarterly Report Card",
    body: "Written competency assessment — skills mastered, production cycles completed, next milestone",
    metric: "Every quarter",
  },
  {
    icon: "🏅",
    title: "Graduate Portfolio",
    body: "A real, link-able portfolio that can accompany university applications and job interviews",
    metric: "24-month output",
  },
];

export const EXHIBITION_QUARTERS = [
  {
    title: "Q1 Exhibition — Month 3",
    body: "Foundation milestone. First live public assets. Parents see the first proof of investment.",
  },
  {
    title: "Q2 Exhibition — Month 6",
    body: "Foundation Graduation. Physical certificates awarded. Portfolio of 3+ assets presented.",
  },
  {
    title: "Q3 Exhibition — Month 12",
    body: "Architect milestone. Founder pitches. Complexity of output is visibly impressive.",
  },
  {
    title: "Q4 Exhibition — Month 15–24",
    body: "Architect or Capstone Graduation. Industry guests invited. Annual Graduate Exhibition.",
  },
];

export const EXHIBITION_RUNSHEET = [
  {
    time: "0:00 – 0:10",
    title: "Opening — Context & Framing",
    rows: [
      {
        label: "Facilitator (Lead Instructor)",
        title: "Welcome, programme context, what parents are about to see",
        body: '"This quarter, your children produced X outputs, mastered Y skills, and are about to show you Z. This is not a school project — this is professional work."',
      },
      {
        label: "Environment",
        title: "Production-grade ambiance",
        body: "Background music. Students' project thumbnails on a display screen. The room is set up like a product launch, not a classroom.",
      },
    ],
  },
  {
    time: "0:10 – 1:00",
    title: "Student Presentations — 5–7 Minutes Each",
    rows: [
      {
        label: "Each student",
        title: "Demonstrate → Explain → Invite",
        body: "Demonstrate: Live demo of the project on screen. Explain: Walk through 3 key technical or creative decisions made. Invite: Ask a parent or guest to interact with the project live.",
      },
      {
        label: "Presentation structure",
        title: '"My project is… I built it because… My biggest technical challenge was… The feature I\'m most proud of is… Here\'s what I\'d do next."',
        body: "Students practise this structure in Session 2 of the final module each quarter. It becomes natural over 24 months.",
      },
    ],
  },
  {
    time: "1:00 – 1:15",
    title: "Portfolio & Tangible Asset Showcase",
    rows: [
      {
        label: "Display",
        title: "QR codes and printed project cards for every student",
        body: "Every parent receives a QR code card linking to their child's live portfolio page. They can open every project on their phone.",
      },
      {
        label: "Interaction",
        title: "Parents explore student work independently",
        body: "Parents play games, navigate web apps, click through prototypes — guided by their children. Students are the experts in the room.",
      },
    ],
  },
  {
    time: "1:15 – 1:25",
    title: "Awards Ceremony — Recognition & Certification",
    rows: [
      {
        label: "Certificates",
        title: "Level graduation diplomas awarded publicly for qualifying students",
        body: "Physical certificates, presented in front of parents with applause. No participation trophies — only earned credentials.",
      },
      {
        label: "Peer Recognition",
        title: '"Creator of the Quarter" — voted by cohort',
        body: "One student recognised for exceptional creativity, helpfulness, or technical achievement. Physical award.",
      },
    ],
  },
  {
    time: "1:25 – 1:30",
    title: "What's Next — The Teaser",
    rows: [
      {
        label: "Next Quarter Preview",
        title: "A 60-second preview of what students will build next quarter",
        body: "Show examples of the upcoming production cycle output. Students react visibly. Parents understand exactly what the next investment is building toward.",
      },
      {
        label: "Close",
        title: "Networking and informal celebration",
        body: "Refreshments. Students demonstrate projects to visiting parents, siblings, and guests. The Proxy Academy experience is felt, not just observed.",
      },
    ],
  },
];

export const BADGES = [
  { icon: "🥇", name: "First Build", desc: "Complete your first production cycle" },
  { icon: "🌐", name: "Live & Deployed", desc: "Publish a project with a real public URL" },
  { icon: "💡", name: "Innovator", desc: "Add a feature beyond the original brief" },
  { icon: "🎓", name: "Phase Graduate", desc: "Complete a full mastery level" },
  { icon: "👀", name: "Real Audience", desc: "10+ people interact with your project" },
  { icon: "🎤", name: "Founder Voice", desc: "Deliver a structured product pitch at Exhibition" },
  { icon: "🤝", name: "Mentor", desc: "Help a junior student solve a problem independently" },
  { icon: "📦", name: "Portfolio Ready", desc: "Maintain 5+ documented, shareable assets" },
];

export const STUDENT_TITLES = [
  {
    level: "Level 0",
    name: "Curious Explorer",
    body: "Newly enrolled. Exploring tools. First session excitement.",
  },
  {
    level: "Level 1",
    name: "Foundation Builder",
    body: "First production cycle complete. First live asset published.",
  },
  {
    level: "Level 2",
    name: "Certified Creator",
    body: "Foundation graduated. Building independently. Real portfolio exists.",
  },
  {
    level: "Level 3",
    name: "Architect",
    body: "Multi-system projects. Founder modules active. Clients engaged.",
  },
  {
    level: "Level 4",
    name: "Proxy Graduate",
    body: "24 months complete. Original IP. Hire-ready. The full journey done.",
  },
];

export const PARENT_TOUCHPOINTS = [
  {
    title: "Weekly Build Update",
    body: "A WhatsApp or email message after each session: what was built, a screenshot or link to the output, and what's coming next week.",
  },
  {
    title: "Quarterly Exhibition",
    body: "Four times per year — parents attend, students present, certificates are awarded. The moment investment becomes visible.",
  },
  {
    title: "Parent Portal",
    body: "Shared Google Drive folder with all projects, session notes, progress reports, and portfolio assets. Accessible anytime.",
  },
  {
    title: "Quarterly Report Card",
    body: "Written assessment at the close of each quarter: competencies mastered, production cycles completed, areas of strength, recommended next phase.",
  },
  {
    title: "Build Night Sessions",
    body: "One Saturday per month: students bring parents to build alongside them for 90 minutes. Optional, celebratory, always memorable.",
  },
  {
    title: "Graduate Announcement",
    body: "Level graduates receive a professional social media announcement with their photo, project, and portfolio link — designed for parents to share proudly.",
  },
];

export const PRESTIGE_EXPERIENCE = [
  {
    icon: "🎒",
    title: "Day-One Identity Kit",
    body: "Every student receives a Proxy Academy notebook, sticker pack, and lanyard on enrolment day. Physical belonging in a digital programme.",
  },
  {
    icon: "🖥️",
    title: "Live Portfolio Wall",
    body: "A physical or digital display showing every active student's latest project — updated monthly, visible in the academy space and online.",
  },
  {
    icon: "📱",
    title: "Parent Progress App",
    body: "A custom portal showing badges earned, production cycles completed, next milestones, and all portfolio links — updated weekly by instructors.",
  },
  {
    icon: "🏆",
    title: "Annual Graduate Exhibition",
    body: "A public showcase event where graduates present to external guests, tech professionals, and media. Real stakes. Real pride. Real proof.",
  },
  {
    icon: "📜",
    title: "Credentials That Matter",
    body: "Physical diplomas, not PDFs. Printed. Framed. Signed by the Director. The kind that hang on walls and appear in university application photos.",
  },
  {
    icon: "🤝",
    title: "Industry Guest Sessions",
    body: "Quarterly visits from working tech professionals, designers, and founders. Students ask questions. The career path becomes concrete, not abstract.",
  },
];
