/* =========================================================
   BCA • SEM 6 • Internship
   UNIT 2 — Project Development, Presentation & Career Transition
========================================================= */

import {
  createTopic,
  heading,
  list,
  code,
  table,
  note,
  definition,
  steps,
  keyPoints,
  mcq,
  qa,
} from "../../../../helpers";

/* =========================================================
   TOPIC 1 — Project Planning & Requirement Gathering
========================================================= */

const projectPlanning = createTopic(
    "project-planning-and-requirement-gathering",
    "Project Planning & Requirement Gathering",

    [
        definition(
            "Requirement Gathering",
            "Requirement gathering is the process of collecting, analyzing, and documenting what the proposed system must do and the constraints under which it must operate."
        ),

        heading("Functional vs Non-Functional Requirements"),

        table(
            ["Criteria", "Functional Requirements", "Non-Functional Requirements"],
            [
                ["Define", "WHAT the system does", "HOW WELL the system performs"],
                ["Examples", "User can register, admin can delete records", "Page loads in < 2s; supports 500 users; GDPR compliant"],
                ["Testing", "Verified by functional test cases", "Verified by performance/security testing"],
                ["Changes Affect", "Features and UI", "Architecture and infrastructure"],
            ]
        ),

        heading("Requirement Gathering Techniques"),

        list([
            "Interviews — One-on-one discussions with stakeholders.",
            "Questionnaires — Collecting structured responses from many users.",
            "Observation — Watching users perform current processes.",
            "Document Analysis — Studying existing forms, reports, and manuals.",
            "Prototyping — Building quick mockups to validate understanding.",
            "Brainstorming — Team ideation for feature scope.",
        ]),

        heading("Feasibility Study"),

        table(
            ["Type", "Question Answered"],
            [
                ["Technical", "Can we build it with available technology and skills?"],
                ["Economic", "Do benefits justify the cost?"],
                ["Operational", "Will users actually adopt and use it?"],
                ["Schedule", "Can it be delivered within the timeline?"],
                ["Legal", "Does it comply with laws (data protection, licensing)?"],
            ]
        ),

        heading("Planning Artifacts"),

        code(
            `Project Plan essentials:
1. Scope statement      → what's IN and OUT of the project
2. Work Breakdown
   Structure (WBS)      → project → modules → tasks
3. Timeline / Gantt     → task → duration → dependencies
4. Milestones           → "DB design approved", "v1 demo"
5. Risk register        → "team member unavailable" → backup plan
6. Resource plan        → who works on what`,
            "text",
            "Core components of a project plan"
        ),

        heading("Planning Your Sem 6 Project"),

        steps([
            "Finalize the problem statement with your guide.",
            "List modules and break each into small tasks (max 2-3 days each).",
            "Assign tasks across team members by strength.",
            "Set weekly milestones aligned with submission dates.",
            "Set up the Git repository, branches, and task board on day one.",
            "Review progress every week and re-plan remaining work.",
        ]),

        keyPoints([
            "Functional requirements define behavior; non-functional define quality attributes.",
            "Techniques include interviews, questionnaires, observation, and prototyping.",
            "Feasibility covers technical, economic, operational, schedule, and legal angles.",
            "WBS breaks the project into manageable, assignable tasks.",
            "Plan weekly milestones from day one — never plan at the deadline.",
        ]),
    ],

    {
        summary:
            "Learn requirement types, gathering techniques, feasibility study, WBS, milestones, and planning a semester project from day one.",
        minutes: 12,
        tags: ["planning", "requirements", "feasibility", "wbs", "important"],

        mcqs: [
            mcq(
                "\"The page must load within 2 seconds\" is which type of requirement?",
                ["Functional", "Non-functional", "Database", "User interface"],
                1,
                "Performance constraints are non-functional requirements."
            ),
            mcq(
                "Which feasibility type asks whether benefits justify the cost?",
                ["Technical", "Economic", "Operational", "Legal"],
                1,
                "Economic feasibility compares cost versus expected benefit."
            ),
            mcq(
                "WBS stands for:",
                ["Web Based System", "Work Breakdown Structure", "Wide Band Spectrum", "Workflow Baseline Sheet"],
                1,
                "WBS hierarchically decomposes a project into tasks and subtasks."
            ),
            mcq(
                "Building a quick mockup to validate requirements with users is called:",
                ["Prototyping", "Debugging", "Deployment", "Refactoring"],
                0,
                "Prototyping gives stakeholders something concrete to react to."
            ),
        ],

        questions: [
            qa(
                "Differentiate functional and non-functional requirements with three examples of each.",
                "Functional requirements describe what the system must DO — its features and behaviors. Examples: (1) A student can log in with roll number and password; (2) The admin can generate a monthly attendance report; (3) The system sends an email on successful registration. Non-functional requirements describe HOW WELL the system must perform — quality attributes and constraints. Examples: (1) Login response within 2 seconds; (2) Support 500 concurrent users; (3) Encrypt passwords and comply with data protection rules. Functional gaps break features; non-functional gaps break trust, performance, and security.",
                4
            ),
            qa(
                "Explain the components of a project plan for your Semester 6 in-house project.",
                "A sound project plan contains: (1) Scope Statement — clearly listing in-scope modules and explicitly marking out-of-scope items to prevent scope creep. (2) Work Breakdown Structure — decomposing the project into modules and further into tasks of 2-3 days each, e.g., 'Login module → design DB table → build API → build UI → test'. (3) Timeline/Gantt — mapping tasks to weeks with dependencies. (4) Milestones — verifiable checkpoints such as 'database approved' or 'v1 demo complete'. (5) Risk Register — anticipating risks like a member falling ill or API unavailability, each with a mitigation plan. (6) Resource Allocation — assigning tasks by each member's strengths, and setting up the Git repo and task board on day one.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — Coding Standards, Testing & Quality Assurance
========================================================= */

const codingAndTesting = createTopic(
    "coding-standards-testing-and-qa",
    "Coding Standards, Testing & Quality Assurance",

    [
        definition(
            "Coding Standards",
            "Coding standards are a set of agreed conventions — naming, formatting, structure, and documentation — that keep a codebase consistent and readable across all developers."
        ),

        heading("Why Clean Code Matters in Teams"),

        list([
            "Code is read 10x more often than it is written.",
            "Consistent style lets any teammate modify any file.",
            "Reviewers focus on logic instead of formatting debates.",
            "Reduces onboarding time for new interns and juniors.",
        ]),

        heading("Common Naming Conventions"),

        table(
            ["Element", "Convention", "Example"],
            [
                ["Variables / functions", "camelCase", "studentMarks, calculateTotal()"],
                ["Classes / components", "PascalCase", "StudentService, LoginForm"],
                ["Constants", "UPPER_SNAKE_CASE", "MAX_RETRIES, API_BASE_URL"],
                ["Database tables/columns", "snake_case", "student_details, roll_no"],
                ["Private members", "leading underscore/_prefix", "_internalCache"],
                ["Files (React)", "PascalCase.jsx", "StudentCard.jsx"],
            ]
        ),

        heading("Clean Code: Bad vs Good"),

        code(
            `// ❌ Unclear
function p(a, b) { return a * b * 0.18; }

// ✅ Self-documenting
function calculateGst(price, quantity) {
  const GST_RATE = 0.18;
  return price * quantity * GST_RATE;
}`,
            "javascript",
            "Same logic, different readability"
        ),

        heading("Levels of Testing"),

        table(
            ["Level", "Scope", "Performed By"],
            [
                ["Unit Testing", "Individual functions/methods in isolation", "Developers (and interns)"],
                ["Integration Testing", "Interaction between combined modules", "Developers / QA"],
                ["System Testing", "The complete application end-to-end", "QA team"],
                ["User Acceptance Testing (UAT)", "Validation against real user expectations", "Client / end users"],
            ]
        ),

        heading("Error vs Bug vs Defect vs Failure"),

        list([
            "Error — A human mistake made while writing code.",
            "Bug/Defect — The flaw in code caused by the error.",
            "Failure — The observable wrong behavior when the defect executes.",
        ]),

        heading("Writing a Test Case"),

        code(
            `Test Case ID : TC-LOGIN-04
Title        : Login with wrong password
Precondition : User 'rahul' exists with a valid password
Steps        : 1. Open login page
               2. Enter 'rahul' with wrong password
               3. Click Login
Expected     : Error message "Invalid credentials"; no redirect
Actual       : (filled during execution)
Status       : Pass / Fail`,
            "text",
            "Standard test case format"
        ),

        note(
            "When your pull request fails review, it is not personal — it is quality control. Respond to every comment; never ignore a reviewer.",
            "tip",
            "Code Review Etiquette"
        ),

        keyPoints([
            "Follow team naming conventions: camelCase functions, PascalCase classes, UPPER_SNAKE constants.",
            "Prefer self-documenting code over excessive comments.",
            "Testing levels: Unit → Integration → System → UAT.",
            "A test case defines preconditions, steps, expected, and actual results.",
            "Treat code review comments as free mentorship, not criticism.",
        ]),
    ],

    {
        summary:
            "Learn coding standards and naming conventions, clean code practices, testing levels, defect terminology, and test case writing.",
        minutes: 12,
        tags: ["clean-code", "standards", "testing", "qa", "important"],

        mcqs: [
            mcq(
                "According to common conventions, class names should use:",
                ["snake_case", "camelCase", "PascalCase", "UPPERCASE"],
                2,
                "Classes and components use PascalCase, e.g., StudentService."
            ),
            mcq(
                "Testing a single function in complete isolation is called:",
                ["System testing", "Unit testing", "UAT", "Integration testing"],
                1,
                "Unit testing verifies the smallest testable parts individually."
            ),
            mcq(
                "UAT (User Acceptance Testing) is performed by:",
                ["Only compilers", "The client / end users", "The database", "The CI server"],
                1,
                "UAT validates that the system meets real user expectations before release."
            ),
            mcq(
                "A flaw existing in the code due to a programmer's mistake is a:",
                ["Failure", "Defect (bug)", "Crash", "Feature"],
                1,
                "The human mistake is an error; the resulting code flaw is the defect."
            ),
        ],

        questions: [
            qa(
                "What are coding standards? Why do teams enforce them, with examples of conventions?",
                "Coding standards are agreed rules for naming, formatting, structure, and documentation that keep a codebase uniform regardless of who wrote which file. Teams enforce them because code is read far more than written — consistency allows any developer to open any file and understand it quickly, speeds up code reviews, and reduces onboarding time for new interns. Common conventions include: camelCase for variables and functions (studentMarks, calculateTotal(), PascalCase for classes and React components (StudentService, LoginForm), UPPER_SNAKE_CASE for constants (MAX_RETRIES), and snake_case for database tables and columns (student_details, roll_no). Tools like ESLint and Prettier automate enforcement.",
                4
            ),
            qa(
                "Explain the four levels of software testing with an example scenario.",
                "(1) Unit Testing — verifying one function in isolation, e.g., testing that calculateGst(100, 2) returns 36. (2) Integration Testing — verifying combined modules interact correctly, e.g., the login API actually reads the users table and returns a valid JWT. (3) System Testing — QA runs the entire deployed application end-to-end, e.g., completing the full journey of register → login → download hall ticket on a staging server. (4) User Acceptance Testing (UAT) — real clients or end users validate the system against business expectations and formally approve it before go-live. Each level catches progressively broader classes of defects.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — Deployment & Hosting Fundamentals
========================================================= */

const deploymentHosting = createTopic(
    "deployment-and-hosting-fundamentals",
    "Deployment & Hosting Fundamentals",

    [
        definition(
            "Deployment",
            "Deployment is the process of moving tested, approved software from the development environment to a live production environment where real users can access it."
        ),

        heading("The Environment Pipeline"),

        table(
            ["Environment", "Purpose", "Data"],
            [
                ["Development", "Developers build and self-test features", "Fake/sample data"],
                ["Testing / QA", "QA verifies features against requirements", "Anonymized data"],
                ["Staging", "Final rehearsal — mirrors production exactly", "Production-like data"],
                ["Production", "Live system serving real users", "Real data"],
            ]
        ),

        heading("Hosting Options"),

        table(
            ["Type", "Description", "Best For / Example"],
            [
                ["Shared Hosting", "Many sites on one server; cheapest", "Simple PHP sites (Hostinger)"],
                ["VPS", "Dedicated slice of a server; full control", "Custom Node/PHP apps (DigitalOcean)"],
                ["Cloud Platforms (PaaS)", "Managed runtime; push to deploy", "Vercel, Netlify, Render, Heroku"],
                ["Serverless", "Pay-per-execution functions", "APIs with variable traffic (AWS Lambda)"],
                ["Container Orchestration", "Docker + Kubernetes at scale", "Enterprise microservices"],
            ]
        ),

        heading("Domain, DNS & HTTPS in One Minute"),

        list([
            "Domain Name — human-readable address (myproject.com), purchased from a registrar.",
            "DNS — translates the domain into the server's IP address.",
            "SSL Certificate — enables HTTPS; free via Let's Encrypt on most hosts.",
            "A padlock in the browser = encrypted traffic = user trust.",
        ]),

        heading("Pre-Deployment Checklist"),

        steps([
            "All acceptance test cases pass on staging.",
            "Environment variables (DB URL, secret keys) configured on the server — never committed to Git.",
            "Production build generated (npm run build / optimized artifacts).",
            "Database migrations executed against the production database.",
            "HTTPS/SSL enabled and HTTP redirected to HTTPS.",
            "Error monitoring and backups configured.",
            "Rollback plan documented — how to revert if release fails.",
        ]),

        heading("Sample Deploy Flow (Modern PaaS)"),

        code(
            `git add .
git commit -m "Release v1.0 — stable"
git push origin main
        │
        ▼  (auto-detected by hosting platform)
Build → Run tests → Deploy to global CDN
        │
        ▼
https://myproject.vercel.app  ← LIVE`,
            "text",
            "Push-to-deploy pipeline"
        ),

        note(
            "A deployment without a rollback plan is a ticking bomb. Always know exactly how you would revert to the previous working version.",
            "warning",
            "Deployment Golden Rule"
        ),

        keyPoints([
            "Environments progress: Dev → QA → Staging → Production.",
            "Hosting ranges from shared hosting to serverless and container orchestration.",
            "DNS maps domains to IPs; SSL certificates enable HTTPS.",
            "Secrets live in server environment variables, never in Git.",
            "Every release needs a tested rollback plan.",
        ]),
    ],

    {
        summary:
            "Understand environment pipelines, hosting options, domains/DNS/HTTPS, deployment checklists, and push-to-deploy flows.",
        minutes: 11,
        tags: ["deployment", "hosting", "environments", "https", "important"],

        mcqs: [
            mcq(
                "Which environment is an exact rehearsal of production before go-live?",
                ["Development", "Staging", "Localhost", "Testing sandbox only"],
                1,
                "Staging mirrors production configuration for final verification."
            ),
            mcq(
                "Where should production database passwords be stored?",
                ["Committed in Git", "In README.md", "Server environment variables", "In HTML comments"],
                2,
                "Secrets belong in environment variables on the server — never in the repository."
            ),
            mcq(
                "The system that translates a domain name into a server IP address is:",
                ["SSL", "DNS", "FTP", "SMTP"],
                1,
                "DNS (Domain Name System) resolves names to IP addresses."
            ),
            mcq(
                "Vercel and Netlify are examples of:",
                ["Databases", "PaaS cloud hosting platforms", "Programming languages", "Browsers"],
                1,
                "They are managed Platform-as-a-Service hosts with push-to-deploy pipelines."
            ),
        ],

        questions: [
            qa(
                "Explain the four deployment environments and why code moves through them in order.",
                "(1) Development — developers write and self-test features against fake data; breaking things is expected here. (2) Testing/QA — the build moves to testers who verify it against requirement documents using structured test cases on anonymized data. (3) Staging — a production-identical environment where final checks (performance, integrations, client demos) run against production-like data; nothing goes live without passing staging. (4) Production — the live system serving real users with real data, where stability is sacred. This ordered pipeline ensures defects are caught at the cheapest stage — a bug found in development costs minutes; the same bug in production can cost customers and reputation.",
                4
            ),
            qa(
                "Describe the checklist you would follow before deploying a web application to production.",
                "Before production deployment I verify: (1) All test cases pass on staging, including UAT sign-off. (2) All secrets — database URLs, JWT keys, API keys — are configured as server environment variables and are absent from the Git repository. (3) The optimized production build is generated rather than a development build. (4) Database migrations and schema changes have been applied to the production database with backups taken first. (5) HTTPS is enabled with a valid SSL certificate and HTTP traffic redirects to HTTPS. (6) Error monitoring (e.g., logging service) and automated backups are active. (7) A rollback plan is documented — the previous stable version can be restored within minutes if the release misbehaves.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — Final Presentation, Demo & Viva Voce
========================================================= */

const presentationViva = createTopic(
    "final-presentation-demo-and-viva",
    "Final Presentation, Demo & Viva Voce",

    [
        definition(
            "Viva Voce",
            "Viva voce (oral examination) is a face-to-face defense of your internship project where examiners question your understanding of the work, decisions, and underlying concepts."
        ),

        heading("Presentation Structure (10-12 Slides)"),

        steps([
            "Title slide — project name, your details, guide name.",
            "Problem statement — the real-world problem in 2 lines.",
            "Objectives — 3-4 measurable goals.",
            "Existing solutions & their limitations (optional but impressive).",
            "Proposed system — your solution overview with an architecture diagram.",
            "Technology stack — with one-line justification per choice.",
            "Modules walkthrough — 2-3 slides of key screens/features.",
            "Live demo or recorded demo video (always keep a backup).",
            "Testing summary — test counts, pass rate.",
            "Challenges faced and how you solved them.",
            "Conclusion, learnings, and future scope.",
            "Thank You + References.",
        ]),

        heading("Demo Best Practices"),

        list([
            "Demo the WORKING flow, not code reading.",
            "Prepare seeded data — never rely on live network luck.",
            "Keep a recorded screen video as a backup for failures.",
            "Rehearse the demo 3 times with a stopwatch.",
        ]),

        heading("High-Frequency Viva Questions"),

        list([
            "Explain your system architecture and why you chose it.",
            "Why this database (MySQL/MongoDB)? Compare alternatives.",
            "How does authentication work in your project? (JWT/session flow)",
            "What was the hardest bug you fixed — walk us through it.",
            "How would your system handle 1000 concurrent users?",
            "What did YOU write versus what came from tutorials/libraries?",
            "What security measures did you implement (SQLi, XSS, hashing)?",
            "What would you improve with more time (future scope)?",
        ]),

        heading("Handling Unknown Questions"),

        table(
            ["Situation", "Good Response"],
            [
                ["You don't know the answer", "\"I haven't worked with that yet; based on my understanding of X, I would explore...\""],
                ["You made a mistake in code", "Acknowledge honestly; explain what you learned and how you'd fix it"],
                ["Challenged on a design choice", "Explain your trade-off reasoning instead of defending blindly"],
                ["Asked about teammate's module", "\"My teammate led that module; my contribution was specifically...\""],
            ]
        ),

        note(
            "Examiners detect bluffing within seconds. A confident 'I don't know yet, but here's how I'd find out' scores better than a wrong confident answer.",
            "warning",
            "Viva Truth Rule"
        ),

        keyPoints([
            "Structure: problem → objectives → architecture → stack → demo → testing → challenges → scope.",
            "Demo working software with seeded data; keep a recorded backup.",
            "Know every line of YOUR contribution — examiners probe depth.",
            "Honestly admit unknowns and reason aloud instead of bluffing.",
            "Rehearse with a stopwatch; timing discipline impresses panels.",
        ]),
    ],

    {
        summary:
            "Master final presentation structure, live demo techniques, high-frequency viva questions, and honest answer strategies.",
        minutes: 11,
        tags: ["presentation", "demo", "viva", "important"],

        mcqs: [
            mcq(
                "During the project demo, the safest strategy against network failure is:",
                ["Trust the venue Wi-Fi", "Keep a pre-recorded screen video backup", "Read code from slides", "Skip the demo"],
                1,
                "A recorded demo guarantees you can always showcase the working system."
            ),
            mcq(
                "If asked a viva question you genuinely don't know, the best response is:",
                ["Invent a confident wrong answer", "Admit it and reason about how you'd find out", "Stay silent", "Blame your teammate"],
                1,
                "Honesty plus reasoning ability is exactly what examiners assess."
            ),
            mcq(
                "The correct opening flow of a project presentation is:",
                ["Code walkthrough → Title", "Title → Problem statement → Objectives", "Future scope → Demo", "References → Thank you"],
                1,
                "Establish context first: who you are, the problem, and the goals."
            ),
            mcq(
                "\"How would your system handle 1000 concurrent users?\" primarily tests your understanding of:",
                ["CSS colors", "Non-functional requirements / scalability", "File naming", "Comment styles"],
                1,
                "Scalability questions probe your grasp of performance and architecture trade-offs."
            ),
        ],

        questions: [
            qa(
                "Describe the ideal structure of your final internship project presentation.",
                "An ideal 10-12 slide presentation flows: (1) Title slide with project name, your details, and guide. (2) Problem statement explaining the real-world issue in two lines. (3) Objectives — 3-4 measurable goals. (4) Proposed system overview with an architecture diagram. (5) Technology stack, each choice justified in one line. (6-7) Module walkthrough with key screens. (8) Live demo (with seeded data and a recorded backup video). (9) Testing summary — number of test cases and pass rate. (10) Challenges faced and their solutions — this showcases problem-solving depth. (11) Conclusion, learnings, and future scope. (12) References and thank-you. Rehearse with a stopwatch to finish within the allotted time.",
                4
            ),
            qa(
                "How should you handle a viva question you cannot answer? Give an example strategy.",
                "Never bluff — examiners detect fabricated answers immediately, and a wrong confident answer damages credibility more than an honest admission. The correct strategy is: (1) Acknowledge the gap directly: 'I haven't worked with that specific technology yet.' (2) Demonstrate reasoning from adjacent knowledge: 'But based on how I structured authentication in my project, I would approach it by...' (3) Show learning intent: '...and I would verify it against the official documentation first.' Example: asked about Redis caching you never used, respond: 'I used in-memory session storage, so I understand caching concepts; for Redis specifically I'd evaluate read patterns and TTL strategy.' This displays humility, analytical thinking, and coachability — the exact traits panels reward.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 5 — Portfolio, Resume & Internship-to-Job Conversion
========================================================= */

const careerConversion = createTopic(
    "portfolio-resume-and-job-conversion",
    "Portfolio, Resume & Internship-to-Job Conversion",

    [
        definition(
            "Portfolio",
            "A portfolio is a curated, verifiable collection of your best work — GitHub repositories, live deployed projects, and technical writing — that proves your skills to employers."
        ),

        heading("Curating Your GitHub Portfolio"),

        steps([
            "Pin your 4-6 BEST repositories (quality over quantity).",
            "Every pinned repo gets a professional README: overview, screenshots, tech stack, setup steps.",
            "Add meaningful commit history — examiners and recruiters check it.",
            "Deploy at least one project live (Vercel/Render) and link it in the README.",
            "Remove or archive abandoned tutorial-clone repos.",
            "Complete your profile: photo, bio, skills, LinkedIn link.",
        ]),

        heading("Fresher Resume Essentials"),

        table(
            ["Section", "Rule"],
            [
                ["Header", "Name, phone, professional email, LinkedIn, GitHub links"],
                ["Objective", "2 lines, tailored to the role — not generic"],
                ["Education", "Highest first: BCA, HSC, SSC with year and percentage"],
                ["Technical Skills", "Grouped: Languages / Frameworks / Databases / Tools"],
                ["Projects (STAR format)", "Situation-Task-Action-Result with metrics and links"],
                ["Internship experience", "Role, duration, 2-3 quantified contributions"],
                ["Certifications", "Only relevant, verifiable courses"],
            ]
        ),

        code(
            `❌ "Worked on a website."
✅ "Built and deployed a student portal (React + Node + MySQL)
   serving 3 modules; reduced manual record-keeping for
   120+ students; hosted live with CI via GitHub Actions."`,
            "text",
            "Quantified resume bullet transformation"
        ),

        heading("Converting Internship into a Job"),

        steps([
            "Deliver visible value in the final month — finish strong, not fading out.",
            "Request a mid-final-month 1:1: express genuine interest in a full-time role.",
            "Ask for a recommendation letter / LinkedIn recommendation before leaving.",
            "Document your handover professionally — companies remember clean exits.",
            "Stay in touch: connect with the mentor and team on LinkedIn.",
            "Add the internship to LinkedIn and resume with quantified outcomes.",
            "Prepare for the conversion interview — they will test your project depth.",
        ]),

        note(
            "Recruiters spend under 30 seconds on a fresher resume. Numbers, live links, and a clean GitHub do the talking before you ever speak.",
            "tip",
            "The 30-Second Scan"
        ),

        keyPoints([
            "Pin 4-6 polished repositories — each with a professional README and live link.",
            "Write project bullets in STAR format with measurable outcomes.",
            "Quantify everything: users served, bugs fixed, performance improved.",
            "Ask about full-time conversion in your final month, not the final day.",
            "Secure recommendation letters and LinkedIn recommendations before exit.",
        ]),
    ],

    {
        summary:
            "Build a recruiter-ready GitHub portfolio, write quantified fresher resumes using STAR, and convert internships into job offers.",
        minutes: 11,
        tags: ["portfolio", "resume", "career", "linkedin", "important"],

        mcqs: [
            mcq(
                "How many repositories should you PIN on GitHub for a professional portfolio?",
                ["All 50 including tutorials", "4-6 best, polished ones", "Exactly 1", "None"],
                1,
                "Pin your 4-6 strongest projects; recruiters judge quality, not repo count."
            ),
            mcq(
                "Which resume bullet is stronger for a fresher?",
                ["Worked on a project", "Built a React+Node portal serving 120+ students, deployed live", "Knows computers", "Did internship"],
                1,
                "Quantified results with technologies and scale demonstrate real capability."
            ),
            mcq(
                "STAR format for resume bullets stands for:",
                ["Speed, Time, Area, Range", "Situation, Task, Action, Result", "Study, Test, Apply, Repeat", "System, Tool, App, Runtime"],
                1,
                "STAR frames achievements: context, responsibility, what you did, measurable outcome."
            ),
            mcq(
                "The best time to express interest in a full-time role is:",
                ["The final day while leaving", "Mid-final-month in a planned 1:1", "During the interview itself", "Never"],
                1,
                "Raising it mid-final-month gives the company time to evaluate and process an offer."
            ),
        ],

        questions: [
            qa(
                "How should a fresher build a professional GitHub portfolio after internship?",
                "(1) Curate ruthlessly: pin only your 4-6 best repositories and archive abandoned tutorial clones — recruiters judge average quality, not repository count. (2) Polish every pinned repo with a professional README containing the project overview, screenshots/GIF of it running, tech stack, setup instructions, and a live deployment link. (3) Ensure commit history shows genuine, incremental development — examiners and technical recruiters inspect this for authenticity. (4) Deploy at least one project live on Vercel/Render so recruiters can click and experience it. (5) Complete your GitHub profile with a real photo, bio, and LinkedIn link. This transforms GitHub from a code dump into verifiable proof of skill.",
                4
            ),
            qa(
                "Explain how to convert an internship into a full-time job offer.",
                "(1) Finish strong: deliver visible value in the final month — companies remember endings, and a fading intern rarely gets offers. (2) Request a one-on-one with your mentor/manager around the mid-final-month mark, explicitly expressing interest in a full-time role and asking what criteria they use for conversions. (3) Act on the feedback immediately to demonstrate coachability. (4) Prepare a professional handover document — clean exits build lasting reputation. (5) Before leaving, request a recommendation letter and a LinkedIn recommendation while your work is fresh in everyone's mind. (6) Add the internship to LinkedIn and your resume with quantified achievements. (7) Stay connected with the team and prepare for the conversion interview, which will probe your project contributions in depth.",
                4
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit2Topics = [
    projectPlanning,
    codingAndTesting,
    deploymentHosting,
    presentationViva,
    careerConversion,
];
