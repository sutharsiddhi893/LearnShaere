/* =========================================================
   BCA • SEM 8 • On Job Training
   UNIT 1 — Ownership, Quality & Professional Depth
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
   TOPIC 1 — Production Ownership & Incident Basics
========================================================= */

const productionOwnership = createTopic(
    "production-ownership-and-incident-basics",
    "Production Ownership & Incident Basics",

    [
        definition(
            "Production Ownership",
            "Production ownership is the responsibility every developer carries for the code they ship — monitoring it, fixing it when it breaks at 2 AM, and learning from every failure."
        ),

        heading("The Moment Code Goes Live"),

        code(
            `Development mindset:  "It works"
Production mindset:   "It works... under THIS load?
                       With THIS data? When the
                       network hiccups? On Fridays?"

Production = real users, real money, real consequences.
Your merged PR is no longer a grade —
it's a promise to thousands of users.`,
            "text",
            "The mindset shift"
        ),

        heading("What Happens When Production Breaks"),

        steps([
            "Detection — an alert fires (monitoring tool, user complaint, or frantic Slack message).",
            "Triage — How bad? Sev1 (everything down) vs Sev3 (cosmetic bug). Who's affected?",
            "Mitigation FIRST — roll back, feature-flag off, or scale up. Fixing root cause comes LATER.",
            "Communication — status updates to stakeholders every 30 minutes, even if the news is 'still investigating'.",
            "Resolution — service restored, users informed.",
            "Postmortem — blameless written analysis: timeline, root cause, action items.",
        ]),

        note(
            "Golden incident rule: MITIGATE FIRST, DEBUG SECOND. A rollback takes 5 minutes; root-cause analysis can take hours. Users don't care WHY it broke — they care that it works again.",
            "warning",
            "Mitigate First"
        ),

        heading("Your Role as a Trainee in an Incident"),

        table(
            ["Do", "Don't"],
            [
                ["Report anything abnormal you notice — fast", "Panic-fix on production yourself"],
                ["Gather logs/screenshots/timeline as it happens", "Guess root causes in group channels"],
                ["Take notes for the postmortem", "Blame colleagues (ever)"],
                ["Ask your lead what you can help with", "Stay silent hoping someone noticed"],
            ]
        ),

        heading("Reading Production Signals"),

        code(
            `# Alerts you'll see as a developer:

ERROR RATE     spiking        ? code deployed bad logic?
LATENCY        p99 climbing   ? slow query? DB locks?
CPU/MEMORY     at 90%+        ? traffic spike? leak?
DISK           filling        ? logs not rotating!
5xx ERRORS     appearing      ? server-side failures
QUEUE DEPTH    growing        ? consumer died downstream

# First question always:
"WHAT CHANGED RECENTLY?"
git log --oneline -5    ? 80% of incidents follow a deploy`,
            "text",
            "The detective's checklist"
        ),

        heading("The Blameless Postmortem"),

        text(
            "Google's SRE culture popularized blameless postmortems: the assumption that everyone acted reasonably on the information available. 'Developer X deleted the table' becomes 'the tooling allowed a destructive command without a confirmation step.' The goal is fixing SYSTEMS, not punishing people — so future incidents get reported instantly instead of hidden."
        ),

        heading("Why This Matters for Your Career"),

        list([
            "Engineers who own their failures visibly are trusted with bigger systems.",
            "Incident write-ups are the fastest writing-skill development you'll get.",
            "Calm during chaos is a leadership signal leads remember forever.",
        ]),

        keyPoints([
            "Production ownership = lifelong responsibility for shipped code.",
            "Incident flow: detect ? triage ? mitigate ? communicate ? resolve ? postmortem.",
            "Mitigate (rollback/flag-off) before root-cause debugging.",
            "'What changed recently?' solves most incidents — check deploys first.",
            "Postmortems are blameless: fix systems, not people.",
        ]),
    ],

    {
        summary:
            "Understand production ownership, the incident response lifecycle, your trainee role during outages, and blameless postmortems.",
        minutes: 12,
        tags: ["production", "incidents", "on-call", "postmortem", "ownership", "important"],

        mcqs: [
            mcq(
                "During a production incident, the FIRST priority is:",
                ["Finding the root cause", "Mitigating — rollback or feature-flag off to restore users", "Writing the postmortem", "Assigning blame"],
                1,
                "Restore service first; root-cause analysis happens after users are safe."
            ),
            mcq(
                "The most common first question in incident triage is:",
                ["Who did it?", "What changed recently? (deploys, config, data)", "Should we migrate to AWS?", "Whose salary is this costing?"],
                1,
                "Most incidents follow a change — check git log and recent deploys first."
            ),
            mcq(
                "A blameless postmortem assumes:",
                ["No incident occurred", "Everyone acted reasonably given available information; fix the SYSTEM", "Only juniors made mistakes", "Blame goes to the tools vendor"],
                1,
                "Blameless culture makes people report problems instantly instead of hiding them."
            ),
            mcq(
                "As a trainee during Sev1, the correct action is:",
                ["SSH into production and experiment", "Report observations, gather evidence, ask your lead how to help", "Post guesses in the main channel", "Leave early to avoid stress"],
                1,
                "Support role: evidence, notes, and communication — never cowboy fixes."
            ),
        ],

        questions: [
            qa(
                "Explain the incident response lifecycle and why mitigation precedes debugging.",
                "The lifecycle: (1) Detection — alerts (error rate, latency, saturation) or user reports reveal the problem. (2) Triage — classify severity (Sev1 = major outage) and identify affected users. (3) Mitigation — restore service the FASTEST safe way: roll back the deploy, disable the feature flag, or scale resources — root cause is deliberately deferred. (4) Communication — regular stakeholder updates (every ~30 min) so nobody panics from silence. (5) Resolution — service confirmed healthy. (6) Postmortem — blameless written analysis with timeline, root cause, and prevention actions. Mitigation precedes debugging because of ASYMMETRY: a rollback restores users in minutes while investigation may take hours; every debugging minute extends user pain, revenue loss, and trust damage. 'Understand perfectly, then fix' is a luxury production never grants.",
                4
            ),
            qa(
                "What is a blameless postmortem? Why do elite engineering cultures enforce them?",
                "A blameless postmortem is a written incident analysis that assumes every participant acted reasonably given the information, tools, and pressures they had at the time. Instead of 'Rahul ran the wrong migration,' it reads 'the migration tooling permitted running against production without an environment confirmation guard.' The report captures: timeline of events, impact (users/duration/revenue), root cause, what went well in response, and concrete action items (guards, alerts, runbooks). Elite cultures enforce this because blame DESTROYS the information pipeline: the moment people fear punishment, incidents get hidden, delays grow, and the same failure repeats elsewhere. Blamelessness keeps reporting instantaneous and honest — converting every failure into organization-wide learning. The famous result: engineers at blameless companies page themselves proactively at the first anomaly.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — System Design Thinking for Junior Developers
========================================================= */

const systemDesignThinking = createTopic(
    "system-design-thinking-for-juniors",
    "System Design Thinking for Junior Developers",

    [
        definition(
            "System Design",
            "System design is the process of defining a system's architecture — components, data flow, storage, and scaling strategy — to meet functional requirements and quality goals like performance and reliability."
        ),

        text(
            "You won't lead architecture discussions as a trainee — but engineers who THINK in systems write code that fits the whole, ask smarter questions, and get promoted faster. This topic builds that vocabulary."
        ),

        heading("The Core Building Blocks"),

        code(
            `User ? [Client: web/mobile]
         ? [Load Balancer]         ? spreads traffic
            ? [App Servers × N]    ? stateless, scalable
               ? [Cache: Redis]    ? fast reads
               ? [Database]        ? source of truth
               ? [Queue: SQS/RabbitMQ] ? absorbs bursts
            ? [Object Storage: S3] ? files/images`,
            "text",
            "Every backend ever, roughly"
        ),

        heading("Scaling Vocabulary"),

        table(
            ["Concept", "Meaning", "Example"],
            [
                ["Vertical scaling", "Bigger machine (more CPU/RAM)", "Upgrade to a 64 GB server"],
                ["Horizontal scaling", "MORE machines behind a load balancer", "5 app servers instead of 1"],
                ["Stateless services", "Servers keep no user memory — any can serve any request", "Session stored in Redis, not RAM"],
                ["Caching", "Keep hot data in fast memory", "Product details cached 5 min"],
                ["CDN", "Serve static content near users globally", "Images via CloudFront"],
                ["Queue decoupling", "Slow work done async, not blocking users", "Email after order, via queue"],
            ]
        ),

        heading("A Tiny Design Walkthrough — URL Shortener"),

        steps([
            "REQUIREMENTS — Shorten URLs; redirect fast; 100M URLs; analytics nice-to-have.",
            "API — POST /shorten {url} ? {code}; GET /{code} ? 301 redirect.",
            "STORAGE — Mapping code?longURL: key-value DB (Redis/DynamoDB) — reads dominate!",
            "CODE GENERATION — Random 7-char base62: 627 ˜ 3.5 trillion possibilities.",
            "SCALE READS — Redirects are 1000:1 vs creations ? cache hot codes in memory.",
            "TRADE-OFFS — Custom aliases? (collision handling) — Expiry? (TTL policy)",
        ]),

        note(
            "Interviews and design reviews reward TRADE-OFF ARTICULATION, not perfect answers. 'SQL here because we need transactions; Redis for reads because redirects are 1000:1' beats any memorized architecture diagram.",
            "tip",
            "Trade-offs > Perfection"
        ),

        heading("Back-of-Envelope Estimation"),

        code(
            `Question: "Can one DB server handle 10,000 writes/sec?"

A commodity DB does ~5,000 writes/sec
? 10,000 needs SHARDING or queue buffering

Quick numbers every engineer knows:
  1 day        ˜ 86,400 seconds ˜ 105
  1 million    = 106
  RAM access   ˜ 100 ns
  Disk access  ˜ 10 ms   (100,000× slower!)
  Network hop  ˜ 1-100 ms`,
            "text",
            "Fermi estimation for engineers"
        ),

        heading("Questions to Ask Before Building Anything"),

        list([
            "How many users? Reads vs writes ratio?",
            "What's the growth expectation — 10× next year?",
            "What data? Structured? Relationships? Size?",
            "Latency requirements — page-load critical or background job?",
            "What happens if this component dies? (failure modes)",
            "What must NEVER be lost or duplicated? (consistency needs)",
        ]),

        heading("How Trainees Apply This Daily"),

        list([
            "Before coding a feature: where does my data live? Who else reads it?",
            "In reviews: 'what happens to this loop at 10,000 rows?'",
            "Noticing: 'this endpoint queries the DB per item — N+1 pattern!'",
        ]),

        keyPoints([
            "Architecture = client ? load balancer ? stateless servers ? cache/DB/queue.",
            "Horizontal scaling (more machines) beats vertical at scale.",
            "Caches serve hot reads; queues absorb bursts asynchronously.",
            "Design = requirements ? API ? storage ? scale ? trade-offs.",
            "Back-of-envelope math (105 seconds/day, disk 105× slower than RAM) guides decisions.",
        ]),
  ],

{
    summary:
    "Build system design vocabulary: scaling patterns, caching, queues, a full URL-shortener walkthrough, and estimation thinking.",
        minutes: 13,
            tags: ["system-design", "architecture", "scaling", "caching", "estimation", "important"],

                mcqs: [
                    mcq(
                        "Adding MORE app servers behind a load balancer is called:",
                        ["Vertical scaling", "Horizontal scaling", "Caching", "Sharding the cache"],
                        1,
                        "Horizontal = more machines; vertical = one bigger machine."
                    ),
                    mcq(
                        "Stateless application servers are important because:",
                        ["They use less RAM", "Any server can handle any request — enabling horizontal scaling", "They never fail", "Databases require it"],
                        1,
                        "With no in-memory user state, load balancers can route anywhere."
                    ),
                    mcq(
                        "Sending emails AFTER an order via a message queue rather than inline is an example of:",
                        ["Caching", "Asynchronous decoupling — absorbing bursts and failures", "Sharding", "CDN usage"],
                        1,
                        "Queues separate fast user actions from slow background work."
                    ),
                    mcq(
                        "In the URL shortener design, why choose a key-value store over SQL?",
                        ["SQL cannot store strings", "The workload is simple code?URL lookups at massive read scale — KV stores excel exactly there", "SQL has no indexes", "KV is always cheaper"],
                        1,
                        "Access pattern (billions of simple reads) drives the storage choice."
                    ),
                ],

                    questions: [
                        qa(
                            "Differentiate vertical and horizontal scaling. Why do large systems prefer horizontal?",
                            "Vertical scaling ('scale up') adds resources to ONE machine — a bigger CPU, more RAM; it's simple and needs zero code change, but hits a hard ceiling (no infinite servers), costs grow super-linearly, and remains a SINGLE POINT OF FAILURE: that machine dies, everything dies. Horizontal scaling ('scale out') adds MORE machines behind a load balancer — 1 server becomes 5, then 50; capacity scales nearly linearly with cost, machines failing merely reduces capacity (graceful degradation), and scale is effectively unlimited. Its price: the application must become STATELESS (user sessions move to shared storage like Redis), data may need sharding across databases, and operational complexity (load balancing, deployments to many nodes) grows. Large systems prefer horizontal because internet-scale traffic — millions of concurrent users — simply cannot fit on any single machine, and fault tolerance demands redundancy that vertical can never provide.",
                            4
                        ),
                        qa(
                            "Walk through designing a URL shortener (like bit.ly) with your technology choices and trade-offs.",
                            "Requirements: shorten long URLs, redirect in <100 ms, handle ~100M URLs, high availability. API: POST /shorten accepting a long URL returns a short code; GET /{code} issues a 301 redirect. Code generation: 7 random base62 characters yield 627 ˜ 3.5 trillion combinations — collision-checked on insert (retry on the astronomically rare clash). Storage: the access pattern is billions of tiny key?value reads (redirects outnumber creations perhaps 1000:1), making Redis or DynamoDB ideal — sub-millisecond lookups — with a durable copy in a relational DB for analytics and recovery. Scale reads: cache the hottest codes in application memory too (the 80/20 rule — viral links dominate). Trade-offs articulated: SQL-only would simplify analytics but choke on read volume; custom aliases would need collision UI; expiry needs TTL policies. The design fits one interview paragraph yet demonstrates requirements?API?storage?scale?trade-offs thinking.",
                            4
                        ),
                    ],
  }
);

/* =========================================================
   TOPIC 3 — Client & Stakeholder Communication
========================================================= */

const clientCommunication = createTopic(
    "client-and-stakeholder-communication",
    "Client & Stakeholder Communication",

    [
        definition(
            "Stakeholder",
            "A stakeholder is anyone affected by or with influence over your project — clients, product managers, end users, executives — each needing different information at different altitudes."
        ),

        heading("Know Your Audience — The Altitude Rule"),

        code(
            `EXECUTIVES    ? outcomes & money
                "This saves 4 hours per staff member daily"

MANAGERS      ? status & risk
                "On track; 1 blocker on API access, ETA Friday"

ENGINEERS     ? details & trade-offs
                "JWT expiry at 1h; refresh-token rotation in Redis"

CLIENTS       ? value & progress
                "Login module demo-ready for Thursday's review"

One message, four altitudes. Wrong altitude
= confusion, not communication.`,
            "text",
            "Same project, four translations"
        ),

        heading("Requirement Meetings — Listen Like a Professional"),

        steps([
            "Prepare — read the agenda/ticket beforehand; bring questions.",
            "Capture VERBATIM needs — 'the report must open in 2 seconds,' not 'reports fast.'",
            "Clarify with examples — 'So sorting by newest-first, correct?'",
            "Surface constraints early — 'That requires offline sync — that's 3 extra weeks.'",
            "Summarize action items aloud — name, task, date — before leaving.",
        ]),

        note(
            "The most expensive sentence in software: 'Yes, that's easy' — said before checking. Say 'Let me verify and confirm by tomorrow.' Under-promise, over-deliver.",
            "warning",
            "Never Say 'Easy'"
        ),

        heading("Demoing to Clients"),

        list([
            "Demo the USER JOURNEY (open ? search ? buy), never the database.",
            "Rehearse with seeded data; keep a screen-recording backup.",
            "Announce known gaps BEFORE the client finds them — 'pagination comes next sprint.'",
            "End with next steps and dates — demos that end in silence die.",
        ]),

        heading("Client Email Template"),

        code(
            `Subject: [Project X] Sprint 6 Update — Login & Reports Live

Hi Mehta Sir,

This sprint delivered two of the three
committed modules:

? Login with OTP — complete, on staging
?? Report export — 80%, blocked by SSO
   credentials (requested Feb 12, following
   up today); ETA now Feb 21
? Audit log — starts Feb 22 as planned

Demo video attached. Happy to walk through
live on Thursday's call.

Best regards,
Rahul | BCA Trainee, Team Falcon`,
            "text",
            "Status without surprises"
        ),

        heading("Handling Scope Creep"),

        code(
            `CLIENT: "Small thing — can the report also
          predict next month's numbers?"

WEAK:   "Sure!"            (a month of ML work)
WEAK:   "No."              (relationship damage)

STRONG: "Interesting idea! That's predictive
        analytics — a new feature beyond our
        current scope. I'll ask our lead to
        estimate it; shall we add it to next
        sprint's discussion?

Steps: acknowledge ? name the reality ?
       redirect to the process ? keep the
       relationship warm.`,
            "text",
            "The scope-creep script"
        ),

        heading("Receiving Harsh Feedback"),

        list([
            "Listen fully — no interrupting, no defending.",
            "Thank them — feedback is information competitors never give you.",
            "Separate the message from the tone — extract the actionable core.",
            "Close the loop: 'Understood — fixed and verified by tomorrow.'",
        ]),

        keyPoints([
            "Match message altitude: executives?outcomes, engineers?details, clients?value.",
            "Meetings: capture verbatim requirements, clarify by example, assign action items aloud.",
            "Never promise 'easy' — verify first, then commit with dates.",
            "Demos show user journeys with seeded data + recorded backup.",
            "Scope creep script: acknowledge ? name reality ? redirect to process.",
        ]),
  ],

{
    summary:
    "Communicate across altitudes, run requirement meetings, demo to clients, write status emails, and handle scope creep professionally.",
        minutes: 12,
            tags: ["communication", "clients", "stakeholders", "demos", "scope-creep", "important"],

                mcqs: [
                    mcq(
                        "Explaining to an EXECUTIVE why your module matters, you should lead with:",
                        ["The SQL queries used", "Business outcomes — time/money saved", "Git commit count", "Library versions"],
                        1,
                        "Executives operate at outcome altitude; details belong to engineers."
                    ),
                    mcq(
                        "A client asks for a 'small addition' that's actually two weeks of work. The professional response is:",
                        ["'Sure, easy!'", "'No, that's not in scope.'", "'That's a new feature beyond current scope — I'll have our lead estimate it for next sprint'", "Silence"],
                        2,
                        "Acknowledge ? name reality ? redirect to estimation process — preserves both scope and relationship."
                    ),
                    mcq(
                        "Before leaving any requirement meeting, you must:",
                        ["Prove you were right", "Summarize action items aloud — who does what by when", "Collect everyone's phone numbers", "Send the raw recording"],
                        1,
                        "Spoken action-item summaries prevent the classic 'I thought YOU were doing it'."
                    ),
                    mcq(
                        "The safest response when asked 'Can you add this by Friday?' without checking:",
                        ["'Yes!'", "'Definitely easy!'", "'Let me verify feasibility and confirm by tomorrow'", "'Maybe...'"],
                        2,
                        "Commit only after verification — under-promise, over-deliver."
                    ),
                ],

                    questions: [
                        qa(
                            "Explain the 'altitude rule' of stakeholder communication with examples for each level.",
                            "Effective communication matches the listener's altitude of concern. Executives fly at OUTCOME altitude — they fund projects for business results, so lead with money and time: 'this automation saves each staff member 4 hours daily' — architecture would bore them. Managers cruise at STATUS & RISK altitude: 'on track, one blocker on API credentials, ETA Friday, mitigation underway' — they need facts to steer. Fellow engineers operate at DETAIL altitude: 'JWT expires in 1 hour; refresh tokens rotate via Redis' — precise trade-offs enable collaboration. Clients — those paying — need VALUE & PROGRESS framing: 'two of three committed modules are live; here's a 2-minute demo video' — proof their investment moves. Same project, four translations. Speaking engineering detail to an executive or vague outcomes to an engineer creates confusion — misaltitude communication reads as incompetence even when the content is correct.",
                            4
                        ),
                        qa(
                            "What is scope creep? Describe a professional technique for handling it without damaging the client relationship.",
                            "Scope creep is the gradual expansion of project requirements beyond the agreed contract — each request seeming small ('just add one column') while cumulatively consuming the timeline, budget, and quality. Unmanaged, it causes missed deadlines the TEAM gets blamed for. The professional technique — the redirect script: (1) Acknowledge warmly: 'Interesting idea!' — never dismissive; (2) Name the reality without judgment: 'that's predictive analytics — genuinely a new feature beyond our current scope'; (3) Redirect to process: 'I'll have our lead estimate effort; shall we add it to next sprint's discussion?' — converting an informal ask into a formal, sized decision; (4) Preserve the relationship: the client feels heard, the team keeps its commitments visible, and priorities get negotiated transparently instead of silently absorbed. The deeper prevention: written scope in the ticket/SOW, visible sprint plans, and demoing against agreed deliverables so additions are obviously additions.",
                            4
                        ),
                    ],
  }
);

/* =========================================================
   TOPIC 4 — Code Quality, Testing Culture & Technical Debt
========================================================= */

const codeQualityTesting = createTopic(
    "code-quality-testing-culture-and-tech-debt",
    "Code Quality, Testing Culture & Technical Debt",

    [
        definition(
            "Technical Debt",
            "Technical debt is the future cost imposed by choosing quick, expedient solutions today — like financial debt, it accumulates interest until repaid through refactoring."
        ),

        heading("What 'Quality' Means to a Team"),

        table(
            ["Quality Dimension", "Question It Answers"],
            [
                ["Readability", "Can a teammate modify this in 6 months?"],
                ["Testability", "Can we prove it works — automatically?"],
                ["Maintainability", "Can one change be made in one place?"],
                ["Consistency", "Does it follow team conventions?"],
                ["Safety", "Does it fail gracefully, not catastrophically?"],
            ]
        ),

        text(
            "College code is graded once and forgotten. Professional code lives for YEARS — written once, read dozens of times, modified by people who never met you. Quality is empathy for your future teammates."
        ),

        heading("Your First Unit Tests"),

        code(
            `// Jest example — the shape is identical everywhere
function calculateDiscount(price, percent) {
  if (percent < 0 || percent > 100)
    throw new RangeError("percent must be 0-100");
  return price - (price * percent) / 100;
}

test("applies discount correctly", () => {
  expect(calculateDiscount(1000, 10),.toBe(900);
});

test("zero percent returns original price", () => {
  expect(calculateDiscount(500, 0),.toBe(500);
});

test("rejects invalid percent", () => {
  expect(() => calculateDiscount(500, 150),
    .toThrow(RangeError);
});

// Three tests = change this function FEARLESSLY forever.`,
            "javascript",
            "Tests are executable documentation"
        ),

        heading("Test Pyramid"),

        code(
            `        /  E2E  \\        few, slow, whole journeys
       /---------\\
      /  Integration \\     some — modules working together
     /---------------\\
    /   Unit Tests    \\   MANY, milliseconds, every function
   /-------------------\\

# Trainee reality: write UNIT tests for
# every function you create. That habit
# alone puts you ahead of half the industry.`,
            "text",
            "Where testing effort goes"
        ),

        heading("Giving Great Code Review Comments"),

        table(
            ["Weak Comment", "Strong Comment"],
            [
                ["'This is wrong.'", "'Passing null here crashes when the list is empty — see test case?'"],
                ["'Bad naming.'", "'calculateTotal vs totalAmount — team convention is verbs for functions; ref below.'"],
                ["'Why??'", "Genuine question: 'chose loop over map — is there a perf reason?'"],
                ["[silence, LGTM]", "'Left 2 comments; everything else looks solid — nice guard clause!'"],
            ]
        ),

        note(
            "The compliment rule of reviews: if you can't find anything kind to say, you haven't read carefully enough. Reviews build teams or break them — junior or senior, choose build.",
            "tip",
            "Reviews Are Relationships"
        ),

        heading("Managing Technical Debt Honestly"),

        code(
            `The debt lifecycle:
  Deadline pressure ? shortcut shipped
       ?
  Shortcut works... for months
       ?
  Every new feature bends around it
       ?
  "Simple" tasks now take weeks
       ?
  Repayment (refactor) costs 10× the original shortcut

Honest debt management:
1. NAME it: // HACK: no retry — debt #142
2. TRACK it: ticket in the backlog
3. BUDGET it: ~20% of each sprint repays debt
4. Never pretend it isn't there.`,
            "text",
            "Interest compounds on code too"
        ),

        heading("Quality Tools Teams Use"),

        list([
            "Linters/formatters — ESLint, Prettier: style debates automated away.",
            "Coverage reports — which code paths lack tests (target meaningful %, not 100).",
            "CI gates — PR can't merge with failing tests; quality enforced by machines, not moods.",
            "SonarQube-style scanners — complexity, duplication, code smells.",
        ]),

        keyPoints([
            "Technical debt = expedient-now cost paid later, with interest.",
            "Quality = readability + testability + maintainability for future teammates.",
            "Unit tests make changes fearless; write them for every new function.",
            "Test pyramid: many unit, some integration, few E2E.",
            "Review comments: specific, kind, question-shaped; never silent-approve carelessly.",
            "Manage debt visibly: name it, ticket it, budget ~20% sprint time to repay.",
        ]),
  ],

{
    summary:
    "Adopt team quality culture: unit testing fundamentals, the test pyramid, constructive code reviews, and honest technical debt management.",
        minutes: 13,
            tags: ["code-quality", "unit-testing", "code-review", "technical-debt", "testing", "important"],

                mcqs: [
                    mcq(
                        "Technical debt is best defined as:",
                        ["Borrowed money for servers", "Future cost of today's expedient shortcuts, accumulating interest until refactored", "Bugs in old code", "License fees"],
                        1,
                        "Like financial debt: quick now, expensive later — repaid via refactoring."
                    ),
                    mcq(
                        "In the test pyramid, the LARGEST layer should be:",
                        ["End-to-end tests", "Integration tests", "Unit tests", "Manual testing"],
                        2,
                        "Many fast unit tests at the base; E2E stays few and slow at the top."
                    ),
                    mcq(
                        "The strongest code review comment style is:",
                        ["'Wrong.'", "Specific + evidence + kind: 'null crash on empty list — see this case?'", "Silent approval", "Personal remarks about the author"],
                        1,
                        "Great comments target the code with specifics; kindness keeps teams healthy."
                    ),
                    mcq(
                        "You shipped a hack to meet a deadline. Professional practice is to:",
                        ["Never mention it", "Name it in code, track a debt ticket, budget sprint time to repay", "Refactor secretly at night", "Blame the deadline"],
                        1,
                        "Visible, ticketed debt gets repaid; hidden debt compounds into crisis."
                    ),
                ],

                    questions: [
                        qa(
                            "What is technical debt? Explain its lifecycle and three practices for managing it honestly.",
                            "Technical debt (Ward Cunningham's metaphor) is the accumulated future cost created when expedient shortcuts substitute for proper solutions — hardcoded values, missing error handling, copy-pasted logic. Lifecycle: deadline pressure forces a shortcut ? it works initially ? each new feature must bend around it ? 'simple' tasks start taking weeks ? the eventual cleanup costs 10× the time originally 'saved.' Interest compounds on code exactly like on money. Honest management practices: (1) NAME it where it lives — comments like 'HACK: no retry implemented, see debt #142' make the invisible visible; (2) TRACK it — every shortcut becomes a backlog ticket with estimated repayment cost, so debt is a managed portfolio, not a surprise; (3) BUDGET repayment — mature teams allocate ~20% of each sprint to refactoring, keeping debt service continuous instead of catastrophic. The discipline that separates professionals: never pretending debt isn't there while it silently slows every future task.",
                            4
                        ),
                        qa(
                            "Why are unit tests called 'executable documentation'? Illustrate with a small example.",
                            "Unit tests document behavior PRECISELY because they execute against the real code: test('discount of 10% on ?1000 yields ?900') will fail the moment someone breaks that behavior — the documentation defends itself, unlike comments that silently rot. Example: a calculateDiscount(price, percent) function with three tests — normal case (1000, 10 ? 900), boundary case (500, 0 ? 500), and invalid case (150% ? throws RangeError). Together they encode the FUNCTIONAL SPEC: what's expected, what's tolerated, what's forbidden. Six months later, a teammate modifying the function instantly learns its contract by reading the tests — and if their change violates it, CI fails within seconds. This transforms maintenance psychology: without tests, every change is feared (unknown breakage); with tests, every change is verified (instant feedback) — developers refactor fearlessly precisely because the executable documentation screams the instant reality drifts from specification.",
                            4
                        ),
                    ],
  }
);

/* =========================================================
   TOPIC 5 — Documentation, Knowledge Transfer & Mentoring
========================================================= */

const documentationKT = createTopic(
    "documentation-knowledge-transfer-and-mentoring",
    "Documentation, Knowledge Transfer & Mentoring",

    [
        definition(
            "Knowledge Transfer",
            "Knowledge transfer (KT) is the structured passing of understanding — how systems work and why — from those who hold it to those who need it, through documents, walkthroughs, and pairing."
        ),

        text(
            "The trainee paradox: you're the newest person on the team, yet within weeks YOU hold knowledge nobody else has — the feature you built, the bug you chased. Sharing it isn't extra work; it's your first leadership act."
        ),

        heading("The Documentation Hierarchy"),

        table(
            ["Artifact", "Answers", "Lifespan"],
            [
                ["Code comments", "WHY this odd logic?", "With the code"],
                ["README", "How do I run/use this?", "Project-long"],
                ["Wiki / Confluence", "How does the SYSTEM work?", "Team-long"],
                ["Runbooks", "What do I DO when X breaks?", "Forever (updated)"],
                ["ADR (Architecture Decision Record)", "WHY was this chosen in 2023?", "Historical"],
            ]
        ),

        heading("A README That Actually Helps"),

        code(
            `# Marks Sync Service

Syncs college ERP marks ? student app nightly at 2 AM.

## Setup
  cp .env.example .env    # fill DB_URL, ERP_KEY
  npm install && npm test

## Run
  npm run sync            # manual trigger
  cron: 0 2 * * *         # scheduled

## Troubleshooting
  Marks missing? ? Check ERP_KEY expiry FIRST
  (90% of incidents; rotate via portal /keys)

## Owner
  Team Falcon — #marks-sync channel`,
            "markdown",
            "Five sections, hours saved weekly"
        ),

        heading("The Handover Document (Your OJT Exit Gift)"),

        steps([
            "What I owned — modules, repos, scheduled jobs, dashboards.",
            "How it works — one diagram + the three things that break most.",
            "Credentials & access — where they live (password manager, NEVER the doc).",
            "Pending items — open tickets with status and next steps.",
            "Dangers — 'never run X against production,' tribal knowledge captured.",
            "A 30-minute walkthrough call — recorded for future joiners.",
        ]),

        heading("Mentoring: Your First Report May Be an Intern"),

        code(
            `You're 8 months in; a fresh intern joins.
You are now the 'senior' someone else was to you.

The mentoring loop:
  1. Show, don't tell — pair on a REAL ticket
  2. Then THEY drive, you watch — resist keyboard-grabbing!
  3. Give feedback like reviews: specific + kind
  4. Delegate a small OWNSHIP (a script, a page)
  5. Credit them publicly for wins

Teaching is the fastest way to discover
the gaps in your own understanding.`,
            "text",
            "Knowledge compounds when shared"
        ),

        heading("Brown-Bag Sessions"),

        list([
            "A 20-minute informal talk: 'How our login flow actually works.'",
            "Diagram on a whiteboard; no slides needed.",
            "Teaching a system reveals your understanding level instantly.",
            "Leads notice exactly who makes the team smarter.",
        ]),

        note(
            "Bus factor: the number of people who must NOT get hit by a bus for your project to survive. If any answer is '1' — including for YOUR feature — that's a risk you can personally eliminate this month.",
            "info",
            "The Bus Factor"
        ),

        keyPoints([
            "KT = structured sharing via docs, walkthroughs, and pairing.",
            "Doc hierarchy: comments ? README ? wiki ? runbooks ? ADRs.",
            "Handover docs: owned items, how-it-works, pending items, dangers, walkthrough.",
            "Mentoring loop: show ? let them drive ? specific feedback ? delegate ? credit.",
            "Eliminate bus-factor-1 knowledge — starting with your own feature.",
        ]),
  ],

{
    summary:
    "Master documentation hierarchy, effective READMEs, handover documents, mentoring techniques, and brown-bag knowledge sharing.",
        minutes: 12,
            tags: ["documentation", "knowledge-transfer", "mentoring", "handover", "leadership", "important"],

                mcqs: [
                    mcq(
                        "'Bus factor' measures:",
                        ["Team commute efficiency", "How many people must be unavailable for a project to stall", "Server room temperature", "Code coverage"],
                        1,
                        "Bus factor 1 = one person holds critical knowledge — a serious risk."
                    ),
                    mcq(
                        "The BEST documentation artifact for 'what to do when the sync fails at 2 AM' is:",
                        ["An ADR", "A runbook with troubleshooting steps", "A commit message", "A meeting recording"],
                        1,
                        "Runbooks answer exactly one question: 'what do I DO now?'"
                    ),
                    mcq(
                        "When pairing with a new intern, after demonstrating once you should:",
                        ["Keep doing everything yourself", "Let THEM drive while you watch — resist keyboard-grabbing", "Give them only documentation links", "Assign them coffee duties"],
                        1,
                        "Learning requires hands on keyboard; watching builds observers, not engineers."
                    ),
                    mcq(
                        "Credentials and API keys belong in a handover document:",
                        ["Yes, inline for convenience", "Never — reference the password manager/vault location only", "Only the password", "In a comment"],
                        1,
                        "Docs get shared/screenshotted; secrets live exclusively in vaults."
                    ),
                ],

                    questions: [
                        qa(
                            "What is knowledge transfer, and why is a handover document essential when leaving a project or OJT?",
                            "Knowledge transfer is the structured movement of understanding — system behavior, operational know-how, and historical WHY decisions — from holders to those continuing the work, via documents, walkthroughs, and pairing. It's essential because tacit knowledge dies with departures: the intern who left without KT takes the knowledge that '90% of sync failures are expired ERP keys' — and the next incident burns a full day rediscovering it. A strong handover document contains: (1) inventory of owned components — modules, repos, cron jobs, dashboards; (2) how-it-works — one architecture diagram plus the three most common failure modes; (3) credentials location — pointing to the password manager, never containing secrets; (4) pending work — open tickets with status and next steps; (5) dangers — 'never run X on production' tribal knowledge; (6) a recorded 30-minute walkthrough. Beyond altruism, KT is self-interest: your professional reputation travels with every team you leave behind — and writing it exposes your own blind spots while you can still fix them.",
                            4
                        ),
                        qa(
                            "Describe an effective mentoring approach for a junior developer's first month.",
                            "Month structure built on the mentoring loop: Week 1 — SHOW: pair on a real (small) ticket, narrating reasoning aloud ('I'm checking logs before guessing'); the intern watches competence modeled. Week 2 — THEY DRIVE: swap seats; they type while you guide with questions, not commands — resisting keyboard-grabbing is the mentor's hardest discipline, because errors made safely are the fastest teachers. Week 3 — FEEDBACK + DELEGATE: review their PR with specific, kind comments ('nice guard clause; consider naming this...' ) and hand them a small genuine OWNERSHIP — one script, one page, one alert — because ownership, not tasks, creates engagement. Week 4 — CREDIT PUBLICLY: praise their win in the team channel by name; nothing accelerates a junior like visible recognition, and nothing builds the mentor's standing like a protégé thriving. Throughout: 30-minute weekly 1:1s where THEY set the agenda. The hidden bonus — Feynman's law — teaching exposes every gap in your own understanding, making mentoring the mentor's best training.",
                            4
                        ),
                    ],
  }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit1Topics = [
    productionOwnership,
    systemDesignThinking,
    clientCommunication,
    codeQualityTesting,
    documentationKT,
];
