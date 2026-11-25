/* Bilingual copy. Spanish lives in the HTML; this file holds English and
   restores the original Spanish when switching back. */

(function () {
  "use strict";

  var EN = {
    "a11y.skip": "Skip to work",

    "nav.work": "Work",
    "nav.profile": "Profile",
    "nav.track": "Track record",
    "nav.contact": "Contact",

    "cta.talk": "Let's talk",
    "cta.work": "See the systems",
    "cta.cv": "View CV",
    "cta.mail": "Email me",

    "hero.status": "Available for work",
    "hero.title": "Software a university uses every day.",
    "hero.lead": "I'm Lautaro Zacarias, a full stack developer based in Reconquista, Argentina. I design and build the systems behind the UTN's day-to-day operations: budget execution, congress accreditation, room booking and faculty draws.",

    "fact.live.label": "Systems in production",
    "fact.years.label": "Years at UTN FRRq",
    "fact.projects.label": "Documented projects",

    "board.title": "System status",
    "board.sep": "Budget",
    "board.sacq": "Accreditation",
    "board.sre": "Bookings",
    "board.acd": "Draws",
    "board.rag": "Assistant",
    "board.portal": "Portal",
    "board.stats.live": "in production",
    "board.stats.dev": "in development",
    "board.stats.event": "event",
    "board.note": "Institutional systems. Most of the code is private; the case studies are open below.",

    "state.live.short": "Live",
    "state.dev.short": "Dev.",
    "state.live": "In production",
    "state.dev": "In development",
    "state.final": "Final project",
    "state.event.short": "Event",
    "state.event": "Used for one election",

    "work.kicker": "Selected work",
    "work.title": "Real systems, not demos.",
    "work.note": "Seven projects: three in production, two in development, one built for a single election day and the final project for my degree. Each case covers the problem, the decisions and what happened next.",
    "work.private": "Most of this code is private because it belongs to the university and handles real data. Here I document the problem, the technical decisions and the outcome. I'll walk you through the architecture and decisions in an interview.",

    "case.problem": "The problem",
    "case.built": "What I built",
    "case.decision": "Key decision",
    "case.result": "Outcome",

    "mock.note": "Interface recreated for the portfolio with fictional data. The real system UI is in Spanish.",

    "repo.private": "Private code · technical walkthrough on request",
    "repo.public": "View repository",
    "repo.academic": "Academic project · code available on request",

    "p.sep.sub": "Budget Execution System",
    "p.sep.lead": "Invoices arrived through the intake desk or over WhatsApp, and budget execution lived in spreadsheets. We turned it into a single record, with permissions per department and traceability for every invoice.",
    "p.sep.problem": "Before SEP, every invoice was sent to the intake desk or as a PDF over WhatsApp to the secretary who had to approve it. There was little control, and it was often unclear who sent it or what the expense was for.",
    "p.sep.b1": "Income, expense and invoice entry by department, with funds split by destination (University/Foundation) and currency (ARS/USD).",
    "p.sep.b2": "Invoice lifecycle: upload with PDF and attachments, approval with an imputation code, file number and treasury write-off.",
    "p.sep.b3": "Hierarchical roles and conditional views: each user only sees and acts on what they own.",
    "p.sep.b4": "Dashboards with filterable tables, Excel export and financial trend charts.",
    "p.sep.b5": "Docker, Nginx and Apache with HTTPS on a Linux server inside the faculty.",
    "p.sep.decision": "I modelled permissions and validations in the database and the API, not just the UI. If an action doesn't belong to a role, it never runs — even if someone tampers with the view.",
    "p.sep.result": "It has been the central budget execution record since 2024. In 2026 I started SEP v2, a remake with a TypeScript API and a React SPA using Mantine and TanStack Query, splitting the EJS monolith without stopping the live system.",

    "p.sacq.sub": "Congress accreditation and attendance",
    "p.sacq.lead": "A dean and vice-dean election is decided in one day. The system had to accredit councillors, log entries and exits and show quorum live, with no room for error.",
    "p.sacq.problem": "Accreditation was done on paper and the count was updated by hand. Authorities, operators and councillors needed to see the same number at the same time.",
    "p.sacq.b1": "QR access to the application; accreditation by ID number against the participant roll.",
    "p.sacq.b2": "Entry and exit logging with a full history per councillor.",
    "p.sacq.b3": "Public and private dashboards updated over WebSockets the moment attendance changes.",
    "p.sacq.b4": "Operational roles: vote entry for the count and attendance control for the rest of the users.",
    "p.sacq.b5": "Client event and device logging for traceability.",
    "p.sacq.decision": "Attendance state is derived from the latest record, not a counter that can drift. Every movement emits an event and all dashboards recalculate from the same source.",
    "p.sacq.result": "Used on election day in September 2025. Quorum and accreditation were followed on screens inside the room, with no parallel counts.",

    "p.sre.sub": "Events and Room Booking System",
    "p.sre.lead": "Booking a classroom or lab depended on a shared spreadsheet and crossed emails. SRE separated two needs that used to collide: announcing events and booking rooms under clear rules.",
    "p.sre.problem": "Before SRE, bookings lived in a shared Excel file used by many people who could reserve spaces. Anyone could edit it, and it was hard to know which room was actually free.",
    "p.sre.b1": "Separate event and room booking modules, with monthly, weekly and daily calendars.",
    "p.sre.b2": "Automatic or conditional approval per room, with a single inbox for event and booking requests.",
    "p.sre.b3": "Spaces with capacity, assigned resources and real-time availability.",
    "p.sre.b4": "Audit trail for every action, email notifications and admin panels for users, categories and resources.",
    "p.sre.decision": "Overlap validation runs on the backend before confirmation, not only in the calendar. The UI can be stale; the booking cannot be duplicated.",
    "p.sre.result": "It replaced the email chain for bookings and events. It now assigns rooms and publishes activities, with history and approval states.",

    "p.acd.sub": "Topic draw for teaching positions",
    "p.acd.lead": "The topic draw for a teaching competition was done by hand, and the minutes relied on witnesses. ACD makes it reproducible: same seed, same result, verifiable minutes.",
    "p.acd.problem": "The draw had to be transparent and the minutes had to reflect exactly what happened. A manual draw leaves no way to reconstruct it later.",
    "p.acd.b1": "Topics, candidates and metadata, validated before the draw.",
    "p.acd.b2": "Draw with a reproducible seed and a roulette-style animation for the public session.",
    "p.acd.b3": "PDF minutes with the draw data and a public verification QR code.",
    "p.acd.b4": "Audit trail for every action and automatic archiving of the minutes.",
    "p.acd.decision": "The seed is stored with the draw and feeds the same deterministic algorithm as the animation. Anyone can repeat the calculation and compare it with the minutes; transparency doesn't depend on trusting the screen.",
    "p.acd.result": "Used in faculty competitions. Minutes are generated and verified on the spot, then archived with their audit trail.",

    "p.rag.sub": "Institutional assistant with cited sources",
    "p.rag.lead": "An assistant that answers questions about degrees, procedures and the calendar using only the official corpus, and cites the source for every answer. If it can't back a claim, it doesn't invent one.",
    "p.rag.problem": "Information was spread across the website, PDFs and regulations. Reception answered the same questions all day, and each answer depended on who picked up the phone.",
    "p.rag.b1": "Go engine with hybrid search over ~4,000 chunks and generation through local Ollama models.",
    "p.rag.b2": "Strict citation validation: an answer without sources is discarded and shown as “no answer”.",
    "p.rag.b3": "Operations panel to test, review conversations, approve corrections and run the evaluation set.",
    "p.rag.b4": "Embeddable widget with origin allow-listing and a daily LLM quota.",
    "p.rag.decision": "Content lives in Markdown and YAML, separate from code. Changing an answer doesn't need a deploy: the corpus is reindexed. Human corrections only replace the answer once approved.",
    "p.rag.result": "In development with a curated corpus and its own evaluation set. The priority isn't answering more, but never answering what it can't support.",

    "p.portal.sub": "Portal backend and News in EJS",
    "p.portal.lead": "The public site and the Python static generator were delivered by another team member. I built the entire portal backend and the EJS views for News, taking the existing HTML/CSS and wiring it into Node.",
    "p.portal.problem": "The public site was static: publishing a story meant editing data and rebuilding the whole site. The demo panel didn't store anything. The faculty needed to publish without a developer.",
    "p.portal.b1": "Complete portal backend on Node.js/Express 5 + MariaDB: news, international opportunities, search, images and sessions.",
    "p.portal.b2": "Admin panel with login, list, drafts, publish/unpublish and preview.",
    "p.portal.b3": "TipTap editor with rich body, inline images and cover; sanitised HTML and search text generated server-side.",
    "p.portal.b4": "Public EJS list and detail views with their own URL, filters, pagination and gallery.",
    "p.portal.b5": "Image pipeline with Multer/Sharp (WebP, sizes, metadata) and integration with the existing static site design.",
    "p.portal.decision": "The public site stays static; only News runs through Node. The landing doesn't rebuild on every publication, and the module can grow without redesigning the delivered HTML/CSS.",
    "p.portal.result": "Deployed on a test VPS: the news list, articles and opportunities are served by Node, the admin lives behind a private login and images are served by the backend. The home page stays static. It's under review before moving to the institutional domain.",

    "p.bot.sub": "Web and WhatsApp questions in one flow",
    "p.bot.lead": "My final project for the degree: an assistant that unified website and WhatsApp queries, answered with Dialogflow and stored feedback to improve the model.",
    "p.bot.problem": "Reception answered the same basic questions on two channels, with no record of what was asked or which answers worked.",
    "p.bot.b1": "Backend with a minimal Electron UI connecting the web, WhatsApp (Venom-Bot) and Dialogflow ES.",
    "p.bot.b2": "A single query flow with API responses and file storage on Firebase Storage.",
    "p.bot.b3": "Conversation and feedback logs in MySQL to review and improve the assistant.",
    "p.bot.b4": "Automation of basic questions to free up reception time.",
    "p.bot.decision": "I separated conversation logic from the channel. The same engine answers on the web or WhatsApp, and every conversation leaves data to evaluate answer quality.",
    "p.bot.result": "Approved as the final project for the University Diploma in Programming. It was my first complete system in internal production and the starting point for the RAG assistant I build today.",

    "profile.kicker": "Profile",
    "profile.title": "I work close to the process, not just the framework.",
    "profile.p1": "Before writing code, I understand how the workflow actually runs: who enters the data, who approves it, what happens when something goes wrong. Most of these systems replaced spreadsheets, emails and decisions that only existed in someone's head.",
    "profile.p2": "I care about the backend and data modelling, but also about the interface detail that decides whether a system gets used or abandoned. I've worked with JavaScript and Node.js since 2021, with React for new interfaces, and with Go, PostgreSQL and local models when the problem calls for another tool.",
    "profile.p3": "Alongside development, I taught as a teaching assistant in Introduction to Data Analysis. Explaining forces me to organise what I know and to write documentation someone else can follow.",

    "skills.backend": "Backend",
    "skills.frontend": "Frontend",
    "skills.infra": "Infrastructure",
    "skills.data": "Data & AI",
    "skills.tools": "Tools",

    "track.kicker": "Track record",
    "track.title": "From the faculty to the faculty's systems.",
    "track.note": "Technical training, teaching and institutional development in the same place. The years mark the real order of things.",

    "track.edu.title": "University Technician in Programming",
    "track.edu.text": "UTN Facultad Regional Reconquista. Foundations in C/C#, data structures, relational databases and web development. Before that, two years of Agricultural Management, which explains why administrative workflows make sense to me.",
    "track.bot.title": "Web and WhatsApp virtual assistant",
    "track.bot.text": "Final project. First complete system: Node.js, Electron, Dialogflow, Firebase and Venom-Bot, with stored feedback to improve answers.",
    "track.sep.title": "SEP · Budget execution",
    "track.sep.text": "Full stack development and deployment of the system that centralises departmental income, expenses and invoices. Since 2026, the SEP v2 remake with a TypeScript API and React SPA.",
    "track.sacq.title": "SACQ and SRE · real time and bookings",
    "track.sacq.text": "Accreditation and live quorum for the dean election, plus the events and room booking platform that replaced the email chain.",
    "track.teach.title": "Teaching assistant · Introduction to Data Analysis",
    "track.teach.text": "UTN FRRq, University Diploma in Programming. Class preparation, student follow-up and activity coordination.",
    "track.now.title": "ACD, RAG and the portal backend",
    "track.now.text": "Teaching draws with verifiable minutes, a RAG assistant that only answers with sources, and the institutional portal backend, with News in EJS.",

    "contact.kicker": "Contact",
    "contact.title": "Got a system that needs sorting out?",
    "contact.place": "Reconquista, Santa Fe · Argentina",
    "contact.note": "Write to me and we'll set up a call. You can also download the CV as a PDF from the printable version.",

    "footer.note": "Hand-built site: HTML, CSS and JavaScript, no frameworks.",
    "shots.sep.overview": "Overview",
    "shots.sep.invoices": "Invoices",
    "shots.sep.income": "Income",
    "shots.sep.funds": "Funds",
    "shots.sep.flow": "Lifecycle",
    "shots.sre.events": "Events",
    "shots.sre.calendar": "Bookings",
    "shots.sre.approvals": "Approvals",
    "shots.sre.spaces": "Spaces",
    "shots.sre.audit": "Audit",

    "shots.utn.credit": "Public portal and static generator: another team member · Backend + EJS: news, admin and editor.",
    "shots.utn.news": "News",
    "shots.utn.article": "Article",
    "shots.utn.admin": "Admin",
    "shots.utn.editor": "Editor",
    "shots.utn.portal": "Portal",

    "footer.top": "Back to top"
  };

  var META = {
    es: {
      title: "Lautaro Zacarias — Desarrollador full stack",
      description: "Desarrollador full stack en Reconquista, Argentina. Sistemas institucionales para la UTN: ejecución presupuestaria, reservas, sorteos, acreditación de congresos y un asistente con RAG."
    },
    en: {
      title: "Lautaro Zacarias — Full Stack Developer",
      description: "Full stack developer based in Reconquista, Argentina. Institutional systems for UTN: budget execution, room booking, teaching draws, congress accreditation and a RAG assistant."
    }
  };

  var nodes = Array.prototype.slice.call(document.querySelectorAll("[data-i18n]"));
  var originals = new Map();
  nodes.forEach(function (node) {
    originals.set(node, node.textContent);
  });

  var metaDescription = document.querySelector('meta[name="description"]');
  var buttons = Array.prototype.slice.call(document.querySelectorAll(".lang__btn"));

  function apply(lang) {
    var isEn = lang === "en";

    nodes.forEach(function (node) {
      var key = node.getAttribute("data-i18n");
      var original = originals.get(node);
      if (isEn && Object.prototype.hasOwnProperty.call(EN, key)) {
        node.textContent = EN[key];
      } else if (original !== undefined) {
        node.textContent = original;
      }
    });

    document.documentElement.lang = isEn ? "en" : "es";
    document.title = META[isEn ? "en" : "es"].title;
    if (metaDescription) metaDescription.setAttribute("content", META[isEn ? "en" : "es"].description);

    buttons.forEach(function (button) {
      var active = button.getAttribute("data-lang") === lang;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", active ? "true" : "false");
    });

    document.querySelectorAll(".cv-link").forEach(function (link) {
      link.setAttribute("href", isEn ? "cv/cv-en.html" : "cv/cv-es.html");
    });

    try { localStorage.setItem("portfolio-lang", lang); } catch (error) { /* storage blocked */ }

    document.dispatchEvent(new CustomEvent("langchange", { detail: { lang: lang } }));
  }

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      apply(button.getAttribute("data-lang"));
    });
  });

  var stored = null;
  try { stored = localStorage.getItem("portfolio-lang"); } catch (error) { stored = null; }

  var query = new URLSearchParams(window.location.search).get("lang");
  var initial = query === "en" || query === "es" ? query : stored;

  apply(initial === "en" ? "en" : "es");
})();
