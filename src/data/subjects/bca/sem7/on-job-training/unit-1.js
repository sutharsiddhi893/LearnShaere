/* =========================================================
   BCA • SEM 7 • On Job Training
   UNIT 1 — Corporate Practice & Advanced Development Workflow
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
   TOPIC 1 — Corporate Structure & Workplace Dynamics
========================================================= */

const corporateDynamics = createTopic(
    "corporate-structure-and-workplace-dynamics",
    "Corporate Structure & Workplace Dynamics",

    [
        definition(
            "On Job Training (OJT)",
            "OJT is a semester-long training program where students work on real organizational tasks as trainees — one level beyond internship, expected to perform like junior employees under mentor supervision."
        ),

        heading("Where You Fit — Typical IT Company Hierarchy"),

        code(
            `CEO / MD
 └─ CTO / VP (Engineering)
     └─ Director / Project Manager        ← owns delivery
         └─ Team Lead / Tech Lead          ← your daily guide
             └─ Senior Dev → Mid Dev → Junior Dev
                 └─ TRAINEE (You) 🎯`,
            "text",
            "You report to Team Lead; escalations go upward"
        ),

        heading("Teams You Will Interact With"),

        table(
            ["Team", "What They Do", "You Interact When"],
            [
                ["Development", "Build features, fix bugs", "Daily — your home team"],
                ["QA / Testing", "Verify your tickets, log bugs", "Your PR fails tests"],
                ["DevOps / IT", "Servers, deployments, access", "Need DB access, VPN, credentials"],
                ["UI/UX Design", "Wireframes, design systems", "Implementing their screens"],
                ["HR", "Policies, attendance, certificates", "Onboarding, leaves, OJT paperwork"],
                ["BA / Product", "Requirements, client needs", "Ticket seems unclear"],
            ]
        ),

        heading("Meetings You'll Attend"),

        table(
            ["Meeting", "Frequency", "Your Role"],
            [
                ["Daily Standup", "Every morning, 15 min", "Speak 3 lines: done / doing / blockers"],
                ["Sprint Planning", "Every 1-2 weeks", "Estimate your tickets honestly"],
                ["Sprint Review / Demo", "End of sprint", "Demo your working feature"],
                ["Retrospective", "End of sprint", "Share one improvement idea"],
                ["1:1 with Mentor", "Weekly", "Ask career + feedback questions"],
            ]
        ),

        heading("Remote, Hybrid & Onsite"),

        list([
            "Onsite — Full office; best for learning by observation.",
            "Hybrid — 2-3 office days; keep notes from in-person days.",
            "Remote — Camera on for meetings; over-communicate in chat since nobody sees you struggle.",
        ]),

        heading("Workplace Policies Trainees Must Respect"),

        list([
            "Timesheets — Log your hours daily if the company requires it.",
            "Leave policy — Inform your lead BEFORE planned absences.",
            "Dress code — Observe and match your team, not the internet.",
            "Confidentiality — Client names, code, salaries: never discussed externally.",
            "Office hours discipline — Punctuality is the cheapest reputation builder.",
        ]),

        note(
            "In Sem 6 internship you learned how to BE an intern. In OJT, you are evaluated as a possible future EMPLOYEE — reliability matters more than raw talent.",
            "tip",
            "Sem 7 Difference"
        ),

        keyPoints([
            "OJT expects trainee-level EMPLOYEE behavior, not just student effort.",
            "You report to a Team Lead; HR handles policy, not your code.",
            "Standup answer is always: yesterday / today / blockers.",
            "Respect timesheets, leaves, dress code, and confidentiality policies.",
            "Over-communicate when remote; observe quietly when onsite.",
        ]),
    ],

    {
        summary:
            "Understand company hierarchy, cross-team interactions, meeting culture, work modes, and the policies expected of trainees during OJT.",
        minutes: 11,
        tags: ["ojt", "corporate", "workplace", "meetings", "important"],

        mcqs: [
            mcq(
                "In a typical IT hierarchy, a trainee's day-to-day guide is usually the:",
                ["CEO", "Team Lead / Tech Lead", "HR Manager", "QA Lead"],
                1,
                "The Team Lead assigns tickets and reviews your work daily."
            ),
            mcq(
                "Your answer in a daily standup should cover:",
                ["Life story", "Yesterday's work, today's plan, and any blockers", "Salary expectations", "Weekend plans"],
                1,
                "Done / Doing / Blockers — the universal 15-minute standup format."
            ),
            mcq(
                "You need database access credentials during OJT. The right team to request is:",
                ["HR", "DevOps / IT", "UI/UX", "Finance"],
                1,
                "DevOps/IT manages infra access, VPNs, and credentials."
            ),
            mcq(
                "When working remotely, the best trainee strategy is:",
                ["Disappear and reappear with results", "Over-communicate status since nobody can see you working", "Keep camera off always", "Work in complete silence"],
                1,
                "Remote visibility = proactive updates; silence is read as inactivity."
            ),
        ],

        questions: [
            qa(
                "Explain the typical organizational structure of an IT company and where an OJT trainee fits.",
                "A typical IT company flows from CEO/MD down to CTO/VP of Engineering, then Directors or Project Managers who own delivery, then Team Leads/Tech Leads who manage developers, and finally the developer chain: Senior → Mid → Junior → Trainee. As an OJT trainee you report to the Team Lead, who assigns your tickets, reviews your pull requests, and writes your evaluation. You'll also interact laterally: QA verifies your work, DevOps grants you access, Designers provide the screens you implement, HR manages your attendance and paperwork, and Business Analysts clarify requirements. Understanding this map tells you exactly WHO to approach for WHAT — the number one skill that separates smooth trainees from lost ones.",
                4
            ),
            qa(
                "How should a trainee behave across the key meetings of a sprint?",
                "(1) Daily Standup: prepare three crisp lines — what I completed yesterday, what I'll do today, and any blocker — never problem-dump; raise deep issues offline after. (2) Sprint Planning: estimate your own tickets honestly using story points, and never commit to work you don't understand. (3) Sprint Review/Demo: demo the WORKING feature, not slides; keep a backup video in case of failure. (4) Retrospective: contribute one genuine improvement observation — trainees who speak up respectfully are remembered. (5) Weekly 1:1 with mentor: come with questions about feedback and growth, not just status. In every meeting, be on time, be brief, and take notes.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — Advanced Git: Branching, PR Reviews & Conflicts
========================================================= */

const advancedGit = createTopic(
    "advanced-git-branching-pr-reviews-conflicts",
    "Advanced Git: Branching, PR Reviews & Conflicts",

    [
        definition(
            "Branching Strategy",
            "A team-wide convention naming how branches are created, named, and merged — so everyone's work integrates predictably."
        ),

        heading("Three Industry Strategies"),

        table(
            ["Strategy", "Branches", "Used By"],
            [
                ["GitHub Flow", "main + short feature branches", "Web apps, startups — simplest"],
                ["Git Flow", "main + develop + feature + release + hotfix", "Versioned products, old enterprises"],
                ["Trunk-Based", "Everyone pushes small changes to main (with flags)", "Google-tier CI/CD maturity"],
            ]
        ),

        note(
            "Most OJT placements use GitHub Flow: branch from main → PR → review → merge → delete branch. Learn it first.",
            "tip",
            "Reality Check"
        ),

        heading("Working a Ticket — The Full Loop"),

        code(
            `git checkout main && git pull                  # 1. sync
git checkout -b feature/STU-142-marks-export    # 2. branch (TicketID-name)

# 3. small commits as you code:
git add . && git commit -m "STU-142: add export route"

git push origin feature/STU-142-marks-export    # 4. publish
# 5. Open PR → review → address comments → merge`,
            "bash",
            "Ticket-to-merge workflow"
        ),

        heading("Merge Conflicts — Don't Panic"),

        text(
            "A conflict happens when two branches changed the SAME lines. Git marks the file for YOU to decide:"
        ),

        code(
            `<<<<<<< HEAD
total = marks + bonus;        // YOUR branch
=======
total = marks * ratio;        // incoming branch
>>>>>>> feature/other

# Resolution steps:
1. Edit the file — keep the correct code, DELETE the markers
2. git add <file>
3. git commit          (merge commit created)
4. git push`,
            "text",
            "Reading conflict markers"
        ),

        heading("Commands That Save Trainees"),

        table(
            ["Command", "Rescue Situation"],
            [
                ["git stash / git stash pop", "Shelve work-in-progress to pull urgently"],
                ["git restore <file>", "Discard local changes to one file"],
                ["git reset --soft HEAD~1", "Undo last commit, keep the changes"],
                ["git revert <sha>", "Safely undo a commit ALREADY PUSHED"],
                ["git reflog", "Find 'lost' commits — almost nothing is truly gone"],
                ["git blame <file>", "Who changed this line, when, in which commit"],
            ]
        ),



        heading("Pull Request Etiquette"),

        list([
            "Small PRs (under ~400 lines) get reviewed; giant PRs get ignored.",
            "Title = ticket ID + summary: 'STU-142: Marks CSV export'.",
            "Description: what, why, screenshots, how to test.",
            "Self-review your diff BEFORE requesting reviewers.",
            "Respond to EVERY comment — 'done', fixed, or a reasoned pushback.",
            "Never force-push (git push -f) to shared branches.",
        ]),

        heading("Giving & Receiving Review Feedback"),

        list([
            "Receiving: comments target the CODE, not you. Fix or discuss — never ignore.",
            "Giving: be specific ('this loop breaks on empty list') not personal ('this is bad').",
            "Approve means you'd take responsibility for this code entering main.",
        ]),

        keyPoints([
            "GitHub Flow (main + short feature branches) dominates modern teams.",
            "Branch names carry the ticket ID: feature/STU-142-description.",
            "Conflicts: edit markers → add → commit; it's a decision, not a disaster.",
            "revert for pushed commits, reset --soft for local mistakes, reflog for lost work.",
            "Small PRs + complete descriptions + responding to every comment = good reputation.",
        ]),
    ],

    {
        summary:
            "Level up from Git basics: branching strategies, ticket workflow, resolving merge conflicts, rescue commands, and PR review culture.",
        minutes: 12,
        tags: ["git", "branching", "pull-request", "merge-conflict", "code-review", "important"],

        mcqs: [
            mcq(
                "Which branching strategy uses just main + short-lived feature branches?",
                ["Git Flow", "GitHub Flow", "Trunk-Based Development", "Waterfall Flow"],
                1,
                "GitHub Flow is the simplest and most common for web teams."
            ),
            mcq(
                "You must undo a commit that is ALREADY pushed to a shared branch. The safe command is:",
                ["git reset --hard", "git revert <sha>", "git commit --amend", "git clean"],
                1,
                "revert creates a NEW commit undoing the old one — history stays intact."
            ),
            mcq(
                "Lines between <<<<<<< HEAD and ======= in a file indicate:",
                ["A syntax error", "A merge conflict awaiting your manual resolution", "A deprecated API", "A TODO"],
                1,
                "Both branches changed the same lines; you choose the final code."
            ),
            mcq(
                "The best practice for PR size is:",
                ["One giant PR per sprint", "Small PRs (few hundred lines) that reviewers can absorb", "PRs without descriptions", "Merging your own PRs instantly"],
                1,
                "Small, well-described PRs get fast, careful reviews."
            ),
        ],

        questions: [
            qa(
                "Compare GitHub Flow, Git Flow, and trunk-based branching strategies.",
                "GitHub Flow: the minimal strategy — main is always deployable; developers branch briefly for each feature/fix, open a PR, merge after review, and delete the branch. Ideal for continuously-deployed web apps and most OJT placements. Git Flow: heavier — a long-lived develop branch, feature branches off it, dedicated release branches, and hotfix branches off main; suits versioned on-premise software with scheduled releases but burdens web teams. Trunk-Based Development: everyone commits tiny changes directly (or very briefly branched) to main, hiding unfinished work behind feature flags; enables maximal speed but demands strong automated testing and CI discipline — common at elite engineering organizations. The trend across the industry is from Git Flow toward GitHub Flow and trunk-based.",
                4
            ),
            qa(
                "Explain how to resolve a Git merge conflict step by step.",
                "A conflict occurs when your branch and the incoming branch modified the same lines. Steps: (1) Run git pull (or git merge branch) — Git halts and lists conflicted files (git status shows them). (2) Open each file and locate the conflict markers: <<<<<<< HEAD section holds YOUR version, ======= separates, >>>>>>> branch holds THEIRS. (3) Manually craft the correct final code — sometimes yours, sometimes theirs, often a merge of both — and delete all three marker lines. (4) Stage the resolved files with git add. (5) Complete the merge with git commit. (6) Push. Prevention helps: pull from main frequently and keep branches short-lived so conflicts stay tiny.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — Agile in Action: Estimation & Sprint Delivery
========================================================= */

const agileExecution = createTopic(
    "agile-in-action-estimation-and-delivery",
    "Agile in Action: Estimation & Sprint Delivery",

    [
        definition(
            "Story Points",
            "Story points are relative units estimating the EFFORT of a task (complexity × volume × uncertainty), not hours — typically from the Fibonacci scale 1, 2, 3, 5, 8, 13."
        ),

        heading("Why Not Just Hours?"),

        list([
            "Humans are bad at absolute time prediction, decent at RELATIVE comparison.",
            "Points absorb uncertainty ('search + fix' tickets have unknown depth).",
            "Velocity (points completed per sprint) becomes a measurable, honest metric.",
        ]),

        heading("Planning Poker"),

        steps([
            "Product Owner reads the ticket aloud; team asks clarifying questions.",
            "Everyone secretly picks a card: 1, 2, 3, 5, 8, or 13.",
            "Reveal simultaneously — highest and lowest explain their reasoning.",
            "Re-vote; converge or take the higher value (safer).",
            "Tickets over 13 points are SPLIT — big = risky.",
        ]),

        heading("Definition of Ready & Definition of Done"),

        table(
            ["Gate", "Question It Answers", "Typical Checklist"],
            [
                ["Definition of Ready", "Should we START this ticket?", "Clear acceptance criteria, designs attached, dependencies known, sized"],
                ["Definition of Done", "Is this ticket FINISHED?", "Code merged, tests pass, reviewed, deployed to staging, documented"],
            ]
        ),

        note(
            "'Works on my machine' is NOT Done. Done means it passed the team's Definition of Done — tests, review, and staging included.",
            "warning",
            "Done Means Done"
        ),

        heading("Velocity & Capacity"),

        code(
            `Sprint 1: committed 20 pts → completed 16   (velocity 16)
Sprint 2: committed 16 pts → completed 15   (velocity 15)
Sprint 3: commit ~15 pts  ← plan to AVERAGE, not to hope

Capacity = velocity − (leaves, meetings, trainee ramp-up time)`,
            "text",
            "Planning by measured velocity"
        ),

        heading("Handling Mid-Sprint Chaos"),

        table(
            ["Situation", "Correct Trainee Response"],
            [
                ["Urgent bug interrupts your feature", "Tell lead, stash work, fix bug on hotfix branch, return"],
                ["Ticket is bigger than estimated", "Raise it in standup IMMEDIATELY — day 2, not day 5"],
                ["Requirements change mid-ticket", "Ask lead to update ticket, re-scope, never silently expand"],
                ["You finish early", "Pick next backlog item, review others' PRs, or write tests"],
            ]
        ),

        heading("Your Ticket Scorecard"),

        list([
            "Picked within a day of assignment.",
            "Branch named with ticket ID.",
            "PR opened with description and screenshots.",
            "Review comments addressed within a working day.",
            "Merged before sprint end — no spillover without explanation.",
        ]),

        keyPoints([
            "Story points measure relative effort via Fibonacci; velocity converts them to delivery rate.",
            "Planning poker surfaces hidden assumptions through discussion.",
            "Definition of Ready guards starting; Definition of Done guards finishing.",
            "Blockers and size-misses must be raised at standup — on day one of discovery.",
            "Finishing early = help others, review PRs, write tests — never idle scrolling.",
        ]),
    ],

    {
        summary:
            "Operate inside a sprint: story points, planning poker, velocity-based planning, DoR/DoD gates, and mid-sprint escalation etiquette.",
        minutes: 12,
        tags: ["agile", "estimation", "story-points", "velocity", "definition-of-done", "important"],

        mcqs: [
            mcq(
                "Story points estimate:",
                ["Exact hours of work", "Relative effort (complexity × volume × uncertainty)", "Monetary cost", "Lines of code"],
                1,
                "Points are relative units on scales like Fibonacci — deliberately not hours."
            ),
            mcq(
                "In planning poker, the highest and lowest bidders explain their estimates to:",
                ["Waste time", "Surface hidden assumptions and knowledge gaps", "Pick a winner", "Avoid voting"],
                1,
                "Estimate divergence is information — discussion reveals unknowns."
            ),
            mcq(
                "'Code merged, tests green, reviewed, on staging' belongs to the:",
                ["Definition of Ready", "Definition of Done", "Sprint goal", "Product vision"],
                1,
                "DoD defines completion; 'works on my machine' doesn't qualify."
            ),
            mcq(
                "Your velocity is 15. For the next sprint you should commit:",
                ["30 points to impress", "Around 15 points based on measured capacity", "0 points", "Whatever the loudest person says"],
                1,
                "Velocity averages history; committing beyond it creates chronic spillover."
            ),
        ],

        questions: [
            qa(
                "Explain story points, planning poker, and velocity with a worked example.",
                "Story points quantify a task's relative effort — combining complexity, volume, and uncertainty — usually on the Fibonacci scale (1,2,3,5,8,13) because bigger gaps force coarse estimates for big items. Planning poker: the team reads a ticket, each member secretly selects a card, all reveal simultaneously; divergent high/low estimates explain reasoning (the low bidder may know a library that halves the work; the high bidder may see an edge case), then the team re-votes to converge. Velocity is the running average of points completed per sprint — if Sprints 1-2 delivered 16 and 15, the team plans ~15 next sprint. Example: a 'add CSV export button' ticket might be estimated 3 (simple route + view), while 'migrate auth to SSO' scores 13 and must be split. Together they turn delivery from guesswork into a measurable system.",
                4
            ),
            qa(
                "Differentiate Definition of Ready and Definition of Done. Why do both exist?",
                "Definition of Ready (DoR) gates STARTING work: a ticket is ready only if acceptance criteria are explicit, designs are attached, dependencies identified, and the team has sized it. Its purpose is preventing wasted sprints on ambiguous tickets — starting unready work guarantees churn. Definition of Done (DoD) gates FINISHING work: code merged to main, automated tests passing, peer review completed, deployed to staging, and documentation updated. Its purpose is quality consistency — 'works on my machine' or 'coded but untested' cannot silently pass as done. Together they bracket every ticket: DoR ensures you build the right thing, DoD ensures you built it right. For trainees, quoting the DoR when a ticket is vague ('could you attach the design?') is a mark of professionalism, not weakness.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — Surviving Real Codebases & Legacy Code
========================================================= */

const legacyCodebases = createTopic(
    "surviving-real-codebases-and-legacy-code",
    "Surviving Real Codebases & Legacy Code",

    [
        definition(
            "Legacy Code",
            "Legacy code is production code that is old, often untested, and feared — nobody fully understands it, yet the business depends on it daily."
        ),

        text(
            "College projects start from zero. Industry projects start from 500,000 lines written over 8 years by people who left. Onboarding to an existing codebase is a distinct skill — learnable."
        ),

        heading("First Week on Any Codebase"),

        steps([
            "RUN the project locally — follow the README exactly; note every hiccup.",
            "Read the folder structure; map folders to features you know exist.",
            "Trace ONE feature end-to-end: button → route → controller → query → response.",
            "Read the last 20 merged PRs — they reveal team conventions.",
            "Draw your own map; keep a personal WIKI/glossary of acronyms.",
        ]),

        heading("Code Archaeology Commands"),

        code(
            `git log --oneline -20             # recent history — what's alive
git log --follow path/to/file     # one file's full story
git blame src/Payments.php        # WHO wrote this line, when, why (commit msg)
git show <sha>                    # full diff of that commit

# Search tactics:
grep -rn "generateInvoice" src/   # find every usage
# IDE: Ctrl+Click into functions; Find Usages on symbols`,
            "bash",
            "Investigating unfamiliar code"
        ),

        heading("Debugging: Dev vs Production"),

        table(
            ["Aspect", "Dev Environment", "Production"],
            [
                ["Reproduce", "Freely, any time", "Only via logs — cannot 'try things'"],
                ["Fix path", "Edit, refresh, test", "Fix on branch → PR → deploy"],
                ["Information", "Full stack traces, Xdebug", "Log lines you must learn to read"],
                ["Golden rule", "Experiment boldly", "Read logs FIRST; change as little as possible"],
            ]
        ),

        heading("The Boy Scout Rule & Safe Changes"),

        code(
            `// Legacy code you're touching anyway?
// Leave every file a little better than you found it —
// BUT in tiny, reviewable steps:

1. NEVER refactor + feature-change in the same PR
2. Add a characterization test BEFORE touching risky logic
   (a test capturing CURRENT behavior, right or wrong)
3. Feature-flag risky changes so they can be switched off
4. Small commits — easy to revert individually`,
            "text",
            "Changing legacy code safely"
        ),

        heading("Reading Logs Like a Pro"),

        code(
            `# The anatomy of an error you'll be asked to investigate:
[2025-03-14 10:22:31] production.ERROR:
  Call to a member function marks() on null
  {"userId":1042,"exception":"[object] (Error(code: 0):
  ...at app/Http/Controllers/ResultController.php:58)"}

# Decoded: student record with some id was NOT found (null),
# then code called ->marks() on it. Check line 58 + why lookup failed.`,
            "text",
            "Error log anatomy"
        ),

        note(
            "The fastest way to earn trust on a legacy system: fix the bug NOBODY wants to touch, with tests proving you didn't break anything else.",
            "tip",
            "Legacy Hero Move"
        ),

        keyPoints([
            "Onboard by running locally + tracing one feature end-to-end.",
            "git blame/log/show and Find Usages are your archaeology tools.",
            "Production bugs are solved from LOGS, not experiments.",
            "Characterization tests before changing risky legacy logic.",
            "Never mix refactoring with feature changes in one PR.",
        ]),
    ],

    {
        summary:
            "Learn to onboard onto unfamiliar codebases: structured first week, code archaeology with git, log-driven debugging, and safe legacy changes.",
        minutes: 12,
        tags: ["legacy-code", "codebase", "debugging", "logs", "onboarding", "important"],

        mcqs: [
            mcq(
                "A characterization test captures:",
                ["Ideal new behavior", "The CURRENT behavior of code, right or wrong, before you change it", "Performance metrics", "User personas"],
                1,
                "It pins down existing behavior so regressions become visible."
            ),
            mcq(
                "Which command reveals who last changed a specific line and in which commit?",
                ["git log --oneline", "git blame", "git stash", "git reflog"],
                1,
                "git blame annotates each line with author and commit."
            ),
            mcq(
                "Production bugs are primarily investigated via:",
                ["Editing files on the server", "Reading logs and monitoring data", "Guessing", "Reinstalling the OS"],
                1,
                "You can't experiment on production — logs are your eyes."
            ),
            mcq(
                "The correct way to refactor legacy code during a feature ticket:",
                ["Rewrite the whole module in the same PR", "Separate PR: characterization test first, then refactor, then feature", "Avoid all refactoring forever", "Refactor without telling anyone"],
                1,
                "Separating concerns keeps each PR reviewable and revertable."
            ),
        ],

        questions: [
            qa(
                "Describe a structured approach for understanding a large unfamiliar codebase in your first week.",
                "(1) Run it locally first — follow the README exactly and record every setup hiccup; you can't understand code you can't execute. (2) Survey the directory structure and mentally map folders to features you know the product has. (3) Trace ONE feature end-to-end — click a button, then follow the request: route definition → controller → service/model → query → response template. One complete vertical slice teaches more architecture than reading random files. (4) Read the last 20 merged pull requests; PR titles, review comments, and diff styles reveal the team's real conventions and current priorities. (5) Build a personal glossary of acronyms (modules, clients, internal codenames). By week's end you should be able to answer: where would a new feature like X live, and which existing code would it touch?",
                4
            ),
            qa(
                "What is legacy code and what precautions must a trainee take when modifying it?",
                "Legacy code is old production code — often untested, poorly documented, and written by departed developers — that the business nonetheless depends on. Precautions: (1) Write a characterization test FIRST, capturing the current behavior (bugs included) so any accidental behavior change becomes visible. (2) Make minimal, surgical changes — never a drive-by rewrite. (3) Separate concerns across PRs: refactoring and feature changes never share a commit. (4) Use feature flags for risky changes so they can be disabled without a rollback deploy. (5) Keep commits small and individually revertible. (6) Study git blame/history to understand WHY weird code exists — usually a past bug fix — before deleting it. (7) Verify against realistic data, since legacy systems often carry surprising edge cases.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 5 — Developer Productivity & Professional Tools
========================================================= */

const developerProductivity = createTopic(
    "developer-productivity-and-professional-tools",
    "Developer Productivity & Professional Tools",

    [
        definition(
            "Developer Productivity",
            "Developer productivity is delivering consistent, quality output sustainably — measured by completed tickets and merged PRs, not by hours looking busy."
        ),

        heading("Your Daily Toolkit"),

        table(
            ["Tool Type", "Examples", "Why It Matters"],
            [
                ["IDE", "VS Code, PhpStorm, IntelliJ", "Debugger, refactoring, extensions = speed"],
                ["API Client", "Postman, Thunder Client", "Test endpoints without a frontend"],
                ["DB Client", "DBeaver, TablePlus, phpMyAdmin", "Inspect real data while debugging"],
                ["Communication", "Slack, Teams", "Where the team actually lives"],
                ["Tracker", "Jira, Trello, Linear", "Your tickets ARE your visible work"],
                ["Terminal", "Git + shell basics", "Deployments, logs, scripts"],
            ]
        ),

        heading("IDE Superpowers Trainees Underuse"),

        list([
            "Debugger breakpoints — stop the world and inspect variables (better than 40 console.logs).",
            "Ctrl+Click / Go to Definition — navigate any function instantly.",
            "Find Usages / Rename Symbol — change code everywhere, safely.",
            "Multi-cursor editing, snippets, and keyboard-only navigation.",
            "Integrated terminal + Git panel — stop alt-tabbing to browsers.",
        ]),

        heading("Timeboxing & Focus"),

        code(
            `Pomodoro for deep work:     25 min focus → 5 min break ×4 → long break

The 30-Minute Rule (debugging):
  0-30 min   → struggle productively: read logs, docs, try hypotheses
  30 min stuck → prepare a STRUCTURED question and ask

Structured question format:
  "Ticket STU-142. Expected X, getting Y.
   Tried: A, B, C. Suspect: Z.
   Can you spare 5 minutes?"`,
            "text",
            "Focus and escalation system"
        ),

        heading("Ticket Hygiene"),

        list([
            "Move the ticket status yourself — In Progress → In Review → Done.",
            "Comment progress on the ticket, not just in chat (chat disappears, tickets persist).",
            "Link your PR in the ticket; link the ticket in the PR.",
            "Never let a ticket sit silent for 2 days without a comment.",
        ]),

        heading("Measuring Your Own Output"),

        table(
            ["Metric", "Healthy Trainee Signal"],
            [
                ["Tickets completed/sprint", "Rising trend over weeks"],
                ["PR cycle time (open→merge)", "Under ~2 days"],
                ["Review comments per PR", "Falling over time (learning)"],
                ["Blocker escalation time", "Under 1 working day"],
                ["Spillover tickets", "Occasional, always explained"],
            ]
        ),

        note(
            "Your tracker profile IS your performance report. Leads read ticket histories, not vibes, when writing OJT evaluations.",
            "info",
            "Invisible Resume"
        ),

        keyPoints([
            "Master the IDE debugger, navigation, and multi-cursor — hours saved weekly.",
            "Pomodoro for focus; the 30-minute rule before asking for help.",
            "Update ticket status and link PRs — tracker history is your visible output.",
            "Track your own metrics: cycle time, spillovers, review comments.",
            "Tools: IDE, Postman, DB client, tracker, terminal — the professional five.",
        ]),
    ],

    {
        summary:
            "Build sustainable output: professional toolchain, IDE superpowers, timeboxing with the 30-minute rule, ticket hygiene, and self-metrics.",
        minutes: 11,
        tags: ["productivity", "ide", "timeboxing", "jira", "developer-tools", "important"],

        mcqs: [
            mcq(
                "The healthiest way to inspect variable state mid-execution is:",
                ["40 console.log statements", "IDE debugger breakpoints", "Printing the whole object everywhere", "Restarting the app repeatedly"],
                1,
                "Breakpoints pause execution and let you inspect live state precisely."
            ),
            mcq(
                "Under the 30-minute rule, after 30 minutes stuck you should:",
                ["Keep struggling silently all day", "Ask a structured question with what you tried", "Abandon the ticket", "Blame the framework"],
                1,
                "Balance independence with escalation — structured questions show thinking."
            ),
            mcq(
                "Why must progress comments go on the TICKET and not just in chat?",
                ["Chat is faster", "Tickets persist as the official record; chat scrolls into oblivion", "Slack is illegal", "Tickets are private"],
                1,
                "Ticket history documents your work for leads, audits, and evaluations."
            ),
            mcq(
                "'PR cycle time' measures:",
                ["Lines of code", "Time from PR opened to merged", "Coffee breaks", "Build duration"],
                1,
                "Short cycle time = small PRs, fast reviews, responsive author."
            ),
        ],

        questions: [
            qa(
                "Explain the professional developer's daily toolkit and how each tool multiplies productivity.",
                "(1) IDE (VS Code/PhpStorm): the force multiplier — debugger breakpoints replace print-statement archaeology, Go-to-Definition navigates instantly, Rename Symbol refactors safely across files, and integrated terminal/Git removes context-switching. (2) API Client (Postman): test backend endpoints in isolation with saved environments — no need to click through the frontend for every check. (3) DB Client (DBeaver): inspect actual data while debugging — half of 'code bugs' are data surprises. (4) Tracker (Jira/Trello): tickets are the single source of truth for what's being done and by whom. (5) Communication (Slack/Teams): where quick clarifications live. The compounding effect matters: each tool saving 15 minutes daily returns whole working weeks per year — the difference between drowning and delivering as a trainee.",
                4
            ),
            qa(
                "What is the 30-minute rule, and what makes a good 'asking for help' question?",
                "The 30-minute rule balances independence against wasted time: when stuck, struggle productively for up to 30 minutes — reading error logs, documentation, and testing hypotheses — because that struggle builds debugging muscle; but at 30 minutes, stop and ask. A good question is structured: (1) Context — ticket ID and what you're building; (2) Symptom — expected behavior vs actual, with the exact error; (3) Evidence of effort — 'I tried A, B, C'; (4) Your hypothesis — 'I suspect the migration didn't run'; (5) A bounded ask — 'can you spare 5 minutes to review my approach?'. This format lets seniors answer in minutes, proves you think before escalating, and over repeated questions actually trains YOU — the explanation of what you tried often reveals the answer mid-sentence.",
                4
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit1Topics = [
    corporateDynamics,
    advancedGit,
    agileExecution,
    legacyCodebases,
    developerProductivity,
];