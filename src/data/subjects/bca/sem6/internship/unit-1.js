/* =========================================================
   BCA • SEM 6 • Internship
   UNIT 1 — Internship Foundations & Professional Practice
========================================================= */

import {
    createTopic,
    heading,
    text,
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
   TOPIC 1 — Internship Fundamentals & Industry Expectations
========================================================= */

const internshipFundamentals = createTopic(
    "internship-fundamentals-and-expectations",
    "Internship Fundamentals & Industry Expectations",

    [
        definition(
            "Internship",
            "An internship is a structured, time-bound work experience program where students apply academic knowledge in a real professional environment under supervision, bridging the gap between classroom learning and industry practice."
        ),

        heading("Why Internships Matter"),

        list([
            "Converts theoretical knowledge into practical, industry-grade skills.",
            "Provides exposure to real project workflows, deadlines and teamwork.",
            "Builds a professional network of mentors and peers.",
            "Adds credible work experience to your resume.",
            "Often converts into Pre-Placement Offers (PPO) or full-time employment.",
        ]),

        heading("Types of Internships"),

        table(
            ["Type", "Description", "Example"],
            [
                ["In-House / Institutional", "Conducted within the college under faculty guidance", "BCA Sem 6 in-house project development"],
                ["Industry / Corporate", "At a company, working on live products", "Intern at an IT services firm"],
                ["Virtual / Remote", "Completed online with distributed teams", "Open-source contribution programs"],
                ["Paid / Unpaid / Stipend-based", "Based on compensation model", "Stipend-based startup internship"],
                ["Summer / Winter", "Short-term during academic vacations", "6-8 week summer internship"],
            ]
        ),

        heading("The Internship Lifecycle"),

        steps([
            "Selection — Resume screening, technical/aptitude test, interview.",
            "Onboarding — Company orientation, tool setup, NDA signing, mentor assignment.",
            "Learning — Understanding codebase, domain, and team workflow.",
            "Contribution — Completing assigned tasks, tickets, and feature work.",
            "Evaluation — Mid-term and final performance reviews by mentor.",
            "Certification — Internship certificate, report submission, and viva.",
        ]),

        heading("What Companies Expect from Interns"),

        table(
            ["Expectation", "What It Means in Practice"],
            [
                ["Willingness to learn", "Ask questions, take notes, research before asking"],
                ["Punctuality & discipline", "Attend standups on time, meet agreed deadlines"],
                ["Ownership", "Complete assigned tickets; flag blockers early"],
                ["Communication", "Report progress honestly; update status proactively"],
                ["Teamwork", "Respect code review feedback; collaborate, not compete"],
                ["Basic professionalism", "Follow company policies, confidentiality, and dress code"],
            ]
        ),

        heading("Typical Developer Career Ladder"),

        code(
            `Intern → Junior Developer → Developer / Mid-Level
      → Senior Developer → Team Lead → Architect / Manager`,
            "text",
            "Entry to senior progression"
        ),

        note(
            "Your internship is evaluated as much on attitude and consistency as on code output. Reliability beats brilliance for a first impression.",
            "tip",
            "Intern Reality Check"
        ),

        keyPoints([
            "An internship bridges academics and industry practice under supervision.",
            "BCA Sem 6 internship is an in-house project-based lab course.",
            "The lifecycle runs: selection → onboarding → learning → contribution → evaluation → certification.",
            "Companies value learning attitude, ownership, and communication equally with technical skills.",
            "Strong internships frequently convert into full-time job offers (PPO).",
        ]),
    ],

    {
        summary:
            "Understand internship types, the internship lifecycle, industry expectations, and how internships convert into careers.",
        minutes: 10,
        tags: ["internship", "career", "expectations", "important"],

        mcqs: [
            mcq(
                "The BCA Semester 6 internship (US06SEBCA07) is best described as:",
                ["A paid corporate job", "An in-house project development lab course", "An online exam", "A theory subject"],
                1,
                "It is an in-house, project-based lab component of the curriculum."
            ),
            mcq(
                "Which is the correct order of the internship lifecycle?",
                [
                    "Onboarding → Selection → Certification → Contribution",
                    "Selection → Onboarding → Learning → Contribution → Evaluation → Certification",
                    "Certification → Learning → Selection",
                    "Contribution → Selection → Onboarding",
                ],
                1,
                "Selection leads to onboarding, then learning, contribution, evaluation, and certification."
            ),
            mcq(
                "What does PPO stand for in campus recruitment context?",
                ["Public Project Offer", "Pre-Placement Offer", "Primary Process Order", "Post-Probation Option"],
                1,
                "A Pre-Placement Offer is a job offer extended before final placements, often after internships."
            ),
            mcq(
                "Which trait do mentors consistently rank highest for interns?",
                ["Knowing every framework", "Willingness to learn", "Working overnight", "Avoiding questions"],
                1,
                "Learning attitude and coachability are valued above pre-existing knowledge."
            ),
        ],

        questions: [
            qa(
                "What is an internship? Explain its objectives for a BCA student.",
                "An internship is a supervised, structured work experience that lets students apply classroom knowledge in a real professional setting. For a BCA student, its objectives are: (1) converting theoretical programming knowledge into practical software development skills; (2) experiencing real workflows such as version control, code reviews, sprints, and deadlines; (3) building soft skills like communication, teamwork, and time management; (4) creating a professional network of mentors and peers; (5) strengthening the resume with credible experience; and (6) opening pathways to Pre-Placement Offers and full-time employment.",
                4
            ),
            qa(
                "What are the industry expectations from an intern, and how can a student meet them?",
                "Companies expect interns to (1) demonstrate willingness to learn — by researching before asking and taking notes; (2) be punctual and disciplined — attending standups and meeting agreed deadlines; (3) show ownership — completing assigned tickets and raising blockers early instead of hiding problems; (4) communicate proactively — giving honest status updates rather than silence; (5) accept feedback gracefully — treating code review comments as learning, not criticism; and (6) maintain professionalism — following NDAs, confidentiality, and company policies. Meeting these expectations builds trust quickly and often leads to stronger recommendations and offers.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — SDLC & Agile/Scrum in Practice
========================================================= */

const sdlcAgile = createTopic(
    "sdlc-and-agile-scrum-in-practice",
    "SDLC & Agile/Scrum in Practice",

    [
        definition(
            "SDLC",
            "The Software Development Life Cycle is a structured process dividing software creation into distinct phases: Requirement Analysis, Design, Implementation, Testing, Deployment, and Maintenance."
        ),

        heading("The Six SDLC Phases"),

        table(
            ["Phase", "Activity", "Output / Artifact"],
            [
                ["1. Requirement Analysis", "Gathering what the system must do", "SRS (Software Requirement Specification)"],
                ["2. Design", "Architecture, database, and UI planning", "Design documents, ER diagrams, wireframes"],
                ["3. Implementation (Coding)", "Developers write the actual code", "Source code modules"],
                ["4. Testing", "Verifying code against requirements", "Test cases, bug reports"],
                ["5. Deployment", "Releasing to users/production", "Live application"],
                ["6. Maintenance", "Fixes, enhancements, support", "Updated releases"],
            ]
        ),

        heading("Waterfall vs Agile"),

        table(
            ["Criteria", "Waterfall", "Agile"],
            [
                ["Flow", "Linear, one phase at a time", "Iterative, short repeated cycles (sprints)"],
                ["Requirements", "Fixed upfront; change is costly", "Evolving; change is welcomed each sprint"],
                ["Delivery", "One final delivery at the end", "Working software every 1-4 weeks"],
                ["Customer Involvement", "Mainly at start and end", "Continuous feedback every sprint"],
                ["Best For", "Stable, well-defined projects", "Dynamic products like web/mobile apps"],
            ]
        ),

        heading("Scrum — The Most Used Agile Framework"),

        table(
            ["Element", "Members / Items", "Purpose"],
            [
                ["Roles", "Product Owner, Scrum Master, Development Team", "Owner prioritizes work; Master removes blockers; Team builds"],
                ["Events", "Sprint Planning, Daily Standup (15 min), Sprint Review, Retrospective", "Cadence of planning, syncing, demo, and improvement"],
                ["Artifacts", "Product Backlog, Sprint Backlog, Increment", "Ordered wish-list, sprint commitment, shippable output"],
            ]
        ),

        heading("A Typical Sprint (2 Weeks)"),

        steps([
            "Sprint Planning — Team pulls top backlog items into the sprint backlog.",
            "Daily Standup — Each member answers: What did I do? What will I do? Any blockers?",
            "Development — Coding, code review, and testing happen continuously.",
            "Sprint Review — Team demos the working increment to stakeholders.",
            "Retrospective — Team discusses what went well and what to improve next sprint.",
        ]),

        heading("Writing User Stories"),

        code(
            `Format:
As a [type of user],
I want [some goal],
so that [some benefit].

Example:
As a student,
I want to download my hall ticket as PDF,
so that I can print it before the exam.

Acceptance Criteria:
- Ticket shows correct exam dates and seat number
- Works on mobile browsers
- Fails gracefully if student has pending fees`,
            "text",
            "User story with acceptance criteria"
        ),

        note(
            "In your internship, your tasks will almost always arrive as tickets or user stories inside a sprint. Learning Scrum vocabulary (standup, backlog, blocker, increment) before day one is a huge advantage.",
            "tip",
            "Intern Advantage"
        ),

        keyPoints([
            "SDLC phases: Requirements → Design → Coding → Testing → Deployment → Maintenance.",
            "Waterfall is linear; Agile delivers working software in short iterative sprints.",
            "Scrum roles: Product Owner, Scrum Master, Development Team.",
            "The daily standup is a 15-minute sync: done / doing / blockers.",
            "User stories follow: As a... I want... so that... with acceptance criteria.",
        ]),
    ],

    {
        summary:
            "Learn the SDLC phases, Waterfall vs Agile comparison, Scrum roles/events/artifacts, sprint flow, and user story writing.",
        minutes: 12,
        tags: ["sdlc", "agile", "scrum", "sprint", "user-stories", "important"],

        mcqs: [
            mcq(
                "Which SDLC phase produces the SRS document?",
                ["Design", "Requirement Analysis", "Testing", "Maintenance"],
                1,
                "The SRS (Software Requirement Specification) is created during requirement analysis."
            ),
            mcq(
                "In Scrum, who is responsible for removing blockers faced by the team?",
                ["Product Owner", "Scrum Master", "CEO", "QA Lead"],
                1,
                "The Scrum Master facilitates the process and removes impediments/blockers."
            ),
            mcq(
                "What is the recommended time-box for a daily standup?",
                ["1 hour", "30 minutes", "15 minutes", "2 hours"],
                2,
                "The daily scrum/standup is strictly time-boxed to 15 minutes."
            ),
            mcq(
                "A typical Agile sprint length is:",
                ["6 months", "1-4 weeks", "1 day", "1 year"],
                1,
                "Sprints commonly last 1-4 weeks, with 2 weeks being the most common."
            ),
        ],

        questions: [
            qa(
                "Explain the phases of SDLC with the output of each phase.",
                "SDLC divides development into six phases: (1) Requirement Analysis — the team gathers and documents what the system must do, producing the SRS. (2) Design — architects plan the system structure, database schema, and UI, producing design documents, ER diagrams, and wireframes. (3) Implementation — developers write source code modules according to the design. (4) Testing — QA verifies the code against requirements using test cases and logs defects. (5) Deployment — the validated application is released to production for real users. (6) Maintenance — the team fixes post-release bugs and delivers enhancements as updated versions.",
                4
            ),
            qa(
                "Differentiate between Waterfall and Agile models. Why do most modern software companies prefer Agile?",
                "Waterfall is a linear model where each phase completes fully before the next begins; requirements are fixed at the start, the customer is involved mainly at the beginning and end, and working software arrives only at project completion. Agile is iterative — work is broken into short sprints (1-4 weeks), requirements can evolve, the customer gives feedback every sprint, and a working increment of software is delivered continuously. Modern companies prefer Agile because products and markets change rapidly; Agile reduces risk by validating direction frequently, catches defects early through continuous testing, and keeps customers engaged throughout development.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — Version Control with Git & GitHub
========================================================= */

const gitAndGithub = createTopic(
    "version-control-git-and-github",
    "Version Control with Git & GitHub",

    [
        definition(
            "Version Control",
            "Version control is a system that records changes to files over time, allowing developers to recall specific versions, collaborate without overwriting each other's work, and trace every modification."
        ),

        heading("Why Git Is Non-Negotiable in Industry"),

        list([
            "Every team — startup or enterprise — tracks code with Git.",
            "Complete history: who changed what, when, and why.",
            "Branching lets many developers work simultaneously without conflicts.",
            "Code review via Pull Requests maintains quality.",
            "Acts as both backup and collaboration platform (GitHub/GitLab/Bitbucket).",
        ]),

        heading("The Four Git Areas"),

        code(
            `Working Directory  --git add-->  Staging Area
        --git commit-->  Local Repository  --git push-->  Remote (GitHub)

Remote (GitHub)  --git fetch/pull-->  Local Repository
        --git checkout/restore-->  Working Directory`,
            "text",
            "Git data flow between areas"
        ),

        heading("Essential Git Commands"),

        table(
            ["Command", "Purpose"],
            [
                ["git clone <url>", "Download a remote repository to your machine"],
                ["git status", "Show changed files and staging state"],
                ["git add <file> / git add .", "Stage changes for commit"],
                ["git commit -m \"message\"", "Snapshot staged changes with a message"],
                ["git push origin <branch>", "Upload local commits to GitHub"],
                ["git pull origin <branch>", "Fetch and merge remote changes"],
                ["git branch", "List branches; git branch <name> creates one"],
                ["git checkout -b <branch>", "Create and switch to a new branch"],
                ["git merge <branch>", "Merge another branch into the current one"],
                ["git log --oneline", "View compact commit history"],
                ["git diff", "Show unstaged line-by-line changes"],
            ]
        ),

        heading("Feature Branch Workflow (Industry Standard)"),

        steps([
            "Create a branch from main: git checkout -b feature/login-page.",
            "Work in small commits: git add . && git commit -m \"Add login form UI\".",
            "Push your branch: git push origin feature/login-page.",
            "Open a Pull Request (PR) on GitHub describing your change.",
            "Teammates review the code and request changes or approve.",
            "After approval, the PR is merged into main and the branch is deleted.",
        ]),

        heading("Commit Message Best Practices"),

        code(
            `# Good: short imperative summary + optional body
git commit -m "Fix null check in payment API"

# Bad
git commit -m "update"`,
            "bash",
            "Writing meaningful commits"
        ),

        note(
            "Never commit secrets (passwords, API keys, .env files). Add them to .gitignore before your first commit. Once pushed, secrets must be treated as compromised.",
            "warning",
            "Security Rule"
        ),

        keyPoints([
            "Git is a distributed version control system; GitHub hosts Git repositories online.",
            "Files move: Working Directory → Staging → Local Repo → Remote.",
            "Feature branches + Pull Requests are the standard team workflow.",
            "git pull before you start work and before you push to minimize conflicts.",
            "Never commit credentials; use .gitignore for sensitive and generated files.",
        ]),
    ],

    {
        summary:
            "Master version control concepts, Git areas, essential commands, feature branch workflow, pull requests, and commit discipline.",
        minutes: 12,
        tags: ["git", "github", "version-control", "pull-request", "important"],

        mcqs: [
            mcq(
                "Which command stages all modified files for the next commit?",
                ["git push", "git add .", "git commit", "git clone"],
                1,
                "git add . stages every change in the working directory."
            ),
            mcq(
                "What is the correct flow of a change through Git areas?",
                [
                    "Commit → Add → Push",
                    "Working Directory → Staging → Local Repo → Remote",
                    "Remote → Staging → Commit",
                    "Staging → Working Directory → Push",
                ],
                1,
                "Changes are added to staging, committed locally, then pushed to the remote."
            ),
            mcq(
                "A Pull Request (PR) is primarily used for:",
                ["Downloading Git", "Code review and merging changes into a base branch", "Deleting repositories", "Installing packages"],
                1,
                "PRs let teammates review, discuss, and approve changes before merging."
            ),
            mcq(
                "Which file prevents sensitive/generated files from being committed?",
                ["git.config", ".gitignore", "readme.md", "package.json"],
                1,
                ".gitignore lists files and folders Git should never track."
            ),
        ],

        questions: [
            qa(
                "What is version control? Explain the four areas a file passes through in Git.",
                "Version control is a system that records every change to files over time so teams can collaborate safely, revert mistakes, and trace history. In Git, a change moves through four areas: (1) Working Directory — the actual files you edit on disk. (2) Staging Area — selected changes marked for the next commit using git add. (3) Local Repository — permanent snapshots stored on your machine via git commit. (4) Remote Repository — the shared server copy (e.g., GitHub) updated using git push and synchronized back with git pull. This separation lets you craft clean, reviewed commits even while working offline.",
                4
            ),
            qa(
                "Describe the feature branch workflow with the exact Git commands used at each step.",
                "(1) Update main and branch off it: git checkout main && git pull, then git checkout -b feature/student-search. (2) Implement the feature in small increments, staging and committing each: git add . followed by git commit -m 'Add search input UI'. (3) Publish the branch: git push origin feature/student-search. (4) Open a Pull Request on GitHub from the feature branch into main, with a clear description and screenshots. (5) Teammates review, leave comments, and request changes; you push fixes to the same branch, which auto-updates the PR. (6) After approval, the maintainer merges the PR (or you click Merge), and the branch is deleted. This isolates work-in-progress from the stable main branch.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — Professional Communication, Reporting & Ethics
========================================================= */

const professionalPractice = createTopic(
    "professional-communication-reporting-and-ethics",
    "Professional Communication, Reporting & Ethics",

    [
        definition(
            "Professional Communication",
            "Professional communication is the clear, concise, and respectful exchange of information through workplace channels such as email, chat, standups, and documentation."
        ),

        heading("Workplace Communication Channels"),

        table(
            ["Channel", "Use It For", "Do NOT Use It For"],
            [
                ["Email", "Formal updates, approvals, records", "Quick back-and-forth doubts"],
                ["Chat (Slack/Teams)", "Fast questions, coordination", "Official decisions needing records"],
                ["Daily Standup", "Status: done / doing / blockers", "Deep technical discussions"],
                ["Ticket Comments", "Task-specific technical context", "Personal matters"],
                ["Documentation (Wiki/README)", "Permanent team knowledge", "One-time temporary notes"],
            ]
        ),

        heading("The Weekly Internship Report"),

        steps([
            "Week number, date range, and project/module name.",
            "Objectives planned for the week.",
            "Work completed — tasks, tickets, features, or bugs fixed.",
            "Technologies and tools used.",
            "Challenges faced and how you resolved them.",
            "Learning outcomes of the week.",
            "Plan for the next week.",
        ]),

        heading("Professional Email Format"),

        code(
            `Subject: Week 3 Internship Report — BCA Project (Rahul Sharma)

Dear Sir/Madam,

Please find below a summary of my work for Week 3 (10-14 March).

Completed:
- Implemented student login API with validation
- Fixed 2 reported bugs in the registration module

Challenges: Configuring JWT expiry logic; resolved with mentor guidance.

Next week: Build the admin dashboard listing component.

Regards,
Rahul Sharma | BCA Sem 6 | Roll No: 101`,
            "text",
            "Sample weekly report email"
        ),

        heading("Workplace Ethics for Interns"),

        list([
            "Confidentiality — Never share code, client data, or internal documents outside the company (NDA binds you).",
            "Intellectual Property — Code written during internship belongs to the organization.",
            "Honesty — Never fabricate progress in reports or standups.",
            "Punctuality — Be on time for standups, meetings, and deadlines.",
            "Respect — Treat all colleagues — including support and housekeeping staff — equally.",
            "Credit — Acknowledge teammates' and Stack Overflow's help in your work.",
        ]),

        heading("Asking for Help the Right Way"),

        text(
            "Follow the 30-minute rule: struggle on your own for up to 30 minutes. If still stuck, ask a structured question instead of 'it's not working':"
        ),

        code(
            `"I am getting a 500 error when calling /api/login.
What I tried: checked payload format, tested in Postman — same error.
My hypothesis: token secret is undefined in .env.
Can you spare 5 minutes to review my approach?"`,
            "text",
            "A well-structured help request"
        ),

        note(
            "Silence is the biggest intern mistake. Reporting a blocker after 3 lost days damages trust far more than asking for help on day one.",
            "warning",
            "Blocker Rule"
        ),

        keyPoints([
            "Use the right channel: email for records, chat for speed, tickets for task context.",
            "Weekly reports cover: planned, completed, challenges, learnings, next plan.",
            "NDAs protect company code, data, and clients — violations have legal consequences.",
            "Never fake progress; honest status builds mentor trust.",
            "Use the 30-minute rule and ask structured questions with context.",
        ]),
    ],

    {
        summary:
            "Learn workplace communication channels, weekly reporting format, email etiquette, professional ethics, and how to ask for help effectively.",
        minutes: 11,
        tags: ["communication", "ethics", "reporting", "soft-skills", "important"],

        mcqs: [
            mcq(
                "Which channel is most appropriate for an official, record-keeping weekly update?",
                ["Instagram DM", "Email", "Verbal chat in corridor", "Sticky note"],
                1,
                "Email creates a formal, timestamped, retrievable record."
            ),
            mcq(
                "An NDA (Non-Disclosure Agreement) primarily protects:",
                ["The intern's salary", "The company's confidential information", "The college logo", "Internet bandwidth"],
                1,
                "NDAs legally prevent disclosure of confidential company information."
            ),
            mcq(
                "The '30-minute rule' for interns means:",
                ["Take breaks every 30 minutes", "Try solving a problem yourself first, then ask a structured question", "Reply to emails within 30 minutes", "Work only 30 minutes per task"],
                1,
                "Balance independence with knowing when and how to escalate blockers."
            ),
            mcq(
                "You have been stuck on a bug for two days but report 'everything is fine' in standup. This is:",
                ["Good confidence", "A serious professionalism failure — blockers must be raised early", "Team spirit", "Time management"],
                1,
                "Hiding blockers wastes company time and destroys mentor trust."
            ),
        ],

        questions: [
            qa(
                "What should a weekly internship report contain? Draft a sample structure.",
                "A weekly internship report contains: (1) Header — week number, date range, project name, and your details. (2) Planned objectives for the week. (3) Work completed — specific tasks, tickets, or features delivered. (4) Technologies and tools used (e.g., React, MySQL, Git). (5) Challenges faced and their resolutions, including mentor guidance received. (6) Key learnings of the week. (7) The plan for the coming week. This structure demonstrates measurable progress, honest self-assessment, and forward planning — exactly what faculty and companies evaluate.",
                4
            ),
            qa(
                "Explain the workplace ethics an intern must follow during an internship.",
                "An intern must follow: (1) Confidentiality — never leaking source code, client data, or internal discussions; the signed NDA is legally binding. (2) Intellectual property — all code and documents produced during the internship belong to the organization. (3) Honesty — reporting true progress in standups and reports; never fabricating completed work. (4) Punctuality and reliability — attending meetings on time and meeting committed deadlines, or flagging risks early. (5) Respect and inclusivity — professional behavior with every colleague regardless of role. (6) Academic integrity — the internship report must be original; plagiarism leads to disqualification.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 5 — Internship Report Writing & Documentation
========================================================= */

const reportWriting = createTopic(
    "internship-report-writing-and-documentation",
    "Internship Report Writing & Documentation",

    [
        definition(
            "Internship Report",
            "The internship report is a formal academic document submitted at the end of the internship, systematically describing the organization, project, technologies, work performed, and learning outcomes."
        ),

        heading("Standard Internship Report Structure"),

        table(
            ["Section", "Content"],
            [
                ["1. Title Page", "Report title, student name, roll no, guide name, college, year"],
                ["2. Certificate", "Signed by guide/HOD confirming genuine work"],
                ["3. Acknowledgment", "Thanks to guide, mentor, faculty, and family"],
                ["4. Abstract / Executive Summary", "150-250 word overview of project and outcomes"],
                ["5. Introduction & Objectives", "Problem statement and internship objectives"],
                ["6. Company/Institute Profile", "Organization overview (for in-house: department/college lab profile)"],
                ["7. Requirement Analysis", "Functional and non-functional requirements"],
                ["8. System Design", "Architecture, ER diagram, DFDs, wireframes"],
                ["9. Implementation", "Modules, technologies, key code explanation, screenshots"],
                ["10. Testing", "Test cases and results"],
                ["11. Conclusion & Learning Outcomes", "Achievements and skills gained"],
                ["12. References & Appendix", "Cited resources, extra screenshots, user manual"],
            ]
        ),

        heading("Writing the Report — Step by Step"),

        steps([
            "Maintain a daily log during the internship — never write the report from memory at the end.",
            "Write the Abstract and Conclusion LAST, after all chapters exist.",
            "Explain YOUR contribution precisely — modules you built, bugs you fixed.",
            "Include diagrams: architecture, ER, DFD, and UI screenshots with captions.",
            "Number every figure and table; reference them in text (e.g., 'as shown in Fig 4.2').",
            "Proofread for grammar, then check formatting against college guidelines.",
            "Verify originality — plagiarism above the permitted limit leads to rejection.",
        ]),

        heading("A Good README.md (Project Front Page on GitHub)"),

        code(
            `# Student Portal — BCA Sem 6 Project

Live demo: https://student-portal.vercel.app

## Features
- Student login with JWT authentication
- Marks display with semester filter
- Admin panel for record management

## Tech Stack
React | Node.js | Express | MySQL | Git/GitHub

## Setup
1. git clone https://github.com/rahul/student-portal
2. npm install
3. Configure .env (see .env.example)
4. npm run dev

## Author
Rahul Sharma — BCA Semester 6`,
            "markdown",
            "Professional README template"
        ),

        heading("Report Quality Checklist"),

        list([
            "Every chapter opens with a short introduction of 2-3 lines.",
            "Third-person, formal tone — avoid 'I did', prefer 'The module was developed'.",
            "Consistent fonts, headings, and page numbers throughout.",
            "Code shown as short, explained snippets — never 10-page code dumps.",
            "All external sources cited in the References section.",
        ]),

        note(
            "Examiners cross-check the report against your viva answers and git history. A truthful, well-documented average project scores higher than an exaggerated brilliant one.",
            "tip",
            "Examiner Insight"
        ),

        keyPoints([
            "The report has ~12 standard sections from title page to appendix.",
            "Keep a daily log; write the abstract and conclusion last.",
            "Diagrams (ER, DFD, architecture) plus captioned screenshots strengthen chapters.",
            "README.md is your project's professional front page on GitHub.",
            "Plagiarism limits are strict — the report must describe your genuine work.",
        ]),
    ],

    {
        summary:
            "Learn the complete internship report structure, chapter-wise writing strategy, README documentation, and academic quality standards.",
        minutes: 12,
        tags: ["report-writing", "documentation", "readme", "academic", "important"],

        mcqs: [
            mcq(
                "Which report section should be written LAST even though it appears first?",
                ["Introduction", "Abstract / Executive Summary", "Company profile", "References"],
                1,
                "The abstract summarizes the finished report, so it is drafted last."
            ),
            mcq(
                "ER diagram, DFD, and architecture diagrams belong to which report chapter?",
                ["Acknowledgment", "System Design", "Conclusion", "Appendix only"],
                1,
                "Design documentation — architecture, ER diagrams, DFDs — forms the design chapter."
            ),
            mcq(
                "Submitting copied report content from the internet or seniors is:",
                ["Smart work", "Plagiarism — grounds for rejection or disqualification", "Standard practice", "Required by universities"],
                1,
                "Plagiarism violates academic integrity and typically leads to rejection."
            ),
            mcq(
                "On GitHub, the file that introduces your project to visitors is:",
                ["secret.key", "README.md", "notes.txt", "report.pdf"],
                1,
                "README.md is rendered on the repository home page and is the project's face."
            ),
        ],

        questions: [
            qa(
                "List the standard sections of an internship report in order and describe any three.",
                "The standard sections are: Title Page, Certificate, Acknowledgment, Abstract, Introduction & Objectives, Company/Institute Profile, Requirement Analysis, System Design, Implementation, Testing, Conclusion & Learning Outcomes, and References & Appendix. (1) Abstract — a 150-250 word self-contained summary of the problem, approach, technologies, and outcomes, written last. (2) System Design — presents the system architecture, ER diagram, data flow diagrams, and UI wireframes that translate requirements into a buildable blueprint. (3) Implementation — explains the modules actually built, the technology stack used, key logic with short annotated code snippets, and captioned screenshots demonstrating working features.",
                4
            ),
            qa(
                "What documentation practices make a software project professional? Explain the role of README and code documentation.",
                "Professional projects are judged heavily on documentation: (1) README.md — the repository's front page containing the project overview, feature list, tech stack, setup/installation steps, usage instructions, and author credits; it lets any stranger run the project in minutes. (2) Inline documentation — meaningful comments explaining WHY code does something, not WHAT it does. (3) API documentation — endpoint descriptions, request/response examples, often via Swagger/OpenAPI. (4) Commit messages and PR descriptions that narrate project history. Together these make the project maintainable, reusable in your portfolio, and credible during viva and job interviews.",
                4
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit1Topics = [
    internshipFundamentals,
    sdlcAgile,
    gitAndGithub,
    professionalPractice,
    reportWriting,
];