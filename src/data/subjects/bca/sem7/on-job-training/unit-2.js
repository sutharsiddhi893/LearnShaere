/* =========================================================
   BCA • SEM 7 • On Job Training
   UNIT 2 — OJT Evaluation, Interviews & Career Transition
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
   TOPIC 1 — OJT Academic Requirements & Evaluation
========================================================= */

const ojtRequirements = createTopic(
    "ojt-academic-requirements-and-evaluation",
    "OJT Academic Requirements & Evaluation",

    [
        definition(
            "OJT Log",
            "The OJT log is the official daily/weekly record of tasks performed, hours spent, and learnings gained — the primary evidence your college uses for evaluation."
        ),

        heading("Typical OJT Deliverables"),

        table(
            ["Deliverable", "Frequency", "Signed By"],
            [
                ["Daily log entry (task + hours + learning)", "Daily", "You + mentor spot-check"],
                ["Weekly summary report", "Weekly", "Mentor/Team Lead"],
                ["Mid-training review", "Once mid-semester", "Mentor + faculty"],
                ["Final OJT report", "End of semester", "Guide + HOD"],
                ["Final presentation + viva", "End of semester", "Panel"],
                ["Completion certificate", "End of semester", "Organization"],
            ]
        ),

        heading("A Perfect Daily Log Entry"),

        code(
            `Date: 14-03-2025 | Hours: 6

Task:   STU-142 — Marks CSV export
Work:   Added export route, wrote PHPUnit test for empty dataset,
        opened PR, addressed 2 review comments (naming + edge case)

Learning: CSV streaming in Laravel (lazy collections) —
          avoids memory blowup on large exports.

Blocker: None. (If any: "Access to staging DB pending — DevOps ticket #77")`,
            "text",
            "10 minutes daily, saves your grade"
        ),

        heading("How You Are Actually Evaluated"),

        table(
            ["Criterion", "Typical Weight", "Evidence Used"],
            [
                ["Attendance & discipline", "20%", "Timesheets, login records"],
                ["Task/quality performance", "30%", "Ticket history, PRs, mentor feedback"],
                ["Learning progression", "20%", "Logs — visible difficulty growth"],
                ["Final report & documentation", "20%", "Report quality, structure"],
                ["Presentation & viva", "10%", "Panel assessment"],
            ]
        ),

        heading("Mistakes That Cost Marks"),

        list([
            "Reconstructing the entire log in the last week — mentors notice instantly.",
            "Logs with tasks but ZERO learnings (copy-paste smell).",
            "Report describing the company, not YOUR contribution.",
            "Silence during viva when asked 'what was hardest?' — an honest struggle story scores better than a fake smooth one.",
            "Submitting code/screenshots the mentor can't verify.",
        ]),

        note(
            "Write your log at 6 PM every working day — 10 minutes then beats 10 painful hours in the final week. Your future self writes reports from these entries.",
            "tip",
            "Log Discipline"
        ),

        keyPoints([
            "OJT is graded on logs, mentor reviews, report, and viva — not just code.",
            "Every log entry = task + hours + learning (+ blocker).",
            "Evaluation weights: performance ~30%, attendance ~20%, learning ~20%, report ~20%, viva ~10%.",
            "Never backfill logs — patterns of honesty beat patterns of perfection.",
            "Viva rewards true struggles and their resolutions, not fake smoothness.",
        ]),
    ],

    {
        summary:
            "Master the OJT paperwork: daily logs, weekly reports, evaluation criteria and weights, and the mistakes that cost marks.",
        minutes: 11,
        tags: ["ojt", "log-book", "evaluation", "report", "viva", "important"],

        mcqs: [
            mcq(
                "The best time to write your daily OJT log is:",
                ["Last week of semester", "End of each working day (~10 min)", "Never", "After the viva"],
                1,
                "Daily entries are accurate, verifiable, and build the final report automatically."
            ),
            mcq(
                "A strong log entry contains:",
                ["Only the task name", "Task + hours + learning (+ blockers)", "Random quotes", "Only attendance"],
                1,
                "Task/hours/learning is the complete evidence triple."
            ),
            mcq(
                "In the viva, asked about your hardest problem, the best answer is:",
                ["Nothing was hard", "A genuine struggle + how you diagnosed and resolved it", "Blaming the mentor", "Changing the topic"],
                1,
                "Panels reward problem-solving narratives — that's the entire point of the question."
            ),
            mcq(
                "The single biggest log-book mistake is:",
                ["Neat handwriting", "Backfilling everything in the final week", "Including blockers", "Mentioning tools used"],
                1,
                "Fake retrospective logs lack detail and mentors catch them immediately."
            ),
        ],

        questions: [
            qa(
                "List the standard OJT deliverables and describe the format of a good daily log entry.",
                "Deliverables: daily log entries, weekly summary reports, one mid-training review, a final OJT report, a final presentation with viva, and the organization's completion certificate. A good daily entry has four parts: (1) Date and hours worked — grounding it in verifiable reality; (2) Task — the ticket ID and one-line description (STU-142: Marks CSV export); (3) Work — specifically what YOU did, including tests written and review comments addressed; (4) Learning — the day's genuine takeaway (e.g., 'learned lazy collections prevent memory blowups in exports'), optionally (5) Blockers with their ticket references. Entries take ten minutes daily but compound into the raw material for weekly reports, the final report, and — crucially — truthful viva answers.",
                4
            ),
            qa(
                "Explain the typical OJT evaluation criteria and how a trainee can maximize each.",
                "(1) Attendance & discipline (~20%): timesheet accuracy and punctuality — maximize by logging hours daily and honoring leave protocols. (2) Task performance & quality (~30%): ticket completion rate and code quality — maximize by small PRs, fast review responses, and zero silent tickets. (3) Learning progression (~20%): documented growth in difficulty — maximize by ensuring each week's log shows visibly harder work than the last. (4) Final report (~20%): structure and YOUR contribution — maximize by writing from daily logs and quantifying outcomes ('shipped 3 features, closed 11 tickets'). (5) Presentation/viva (~10%): honest defense of your work — maximize by rehearsing the demo and preparing true stories of struggles and resolutions. The common thread: evaluation follows EVIDENCE — trackers, logs, and report — not impressions.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — Technical Interview Mastery
========================================================= */

const technicalInterviews = createTopic(
    "technical-interview-mastery",
    "Technical Interview Mastery",

    [
        definition(
            "Technical Interview",
            "A technical interview assesses a candidate's problem-solving and coding ability live — typically involving data structures, algorithms, and thinking aloud under observation."
        ),

        heading("The Standard Hiring Funnel"),

        code(
            `Resume screen → Online Assessment (OA)
   → 1-2 Technical rounds (DSA + project)
   → Hiring-manager / system-basics round
   → HR round → OFFER`,
            "text",
            "Freshers pass through 4-5 gates"
        ),

        heading("DSA Topics That Matter for BCA Freshers"),

        table(
            ["Topic", "Must-Know Patterns", "Typical Question"],
            [
                ["Arrays & Strings", "Two pointers, sliding window, prefix sums", "Find pair with given sum"],
                ["Hash Maps", "Frequency counting, lookup optimization", "First non-repeating character"],
                ["Stacks & Queues", "Matching, monotonic stack", "Valid parentheses"],
                ["Recursion & Basic DP", "Fibonacci-style, subsets, memoization", "Climbing stairs (n steps)"],
                ["Linked Lists", "Reversal, cycle detection (fast/slow)", "Detect loop in list"],
                ["Sorting/Searching", "Binary search variants", "Search rotated array"],
            ]
        ),

        heading("The UMPIRE Method (Live Coding)"),

        steps([
            "U — Understand: restate the problem; ask about input sizes, edge cases, duplicates.",
            "M — Match: which pattern/data structure fits?",
            "P — Plan: state your approach OUT LOUD before typing.",
            "I — Implement: clean code, good variable names.",
            "R — Review: trace through an example manually.",
            "E — Evaluate: state time/space complexity; discuss optimizations.",
        ]),

        heading("Solved Example — Think-Aloud Style"),

        code(
            `Q: Return indices of two numbers adding to target.

"Inputs: array + target. Assume exactly one solution? Duplicates?
 Brute force is O(n²) — I'll do better with a hash map:
 one pass, storing value→index; for each x check target−x."

def two_sum(nums, target):
    seen = {}                      # value -> index
    for i, x in enumerate(nums):
        if target - x in seen:
            return [seen[target - x], i]
        seen[x] = i

"Time O(n), space O(n). Empty array → returns None; documented behavior."`,
            "python",
            "Model interview answer"
        ),

        heading("Interviewing WHILE on OJT"),

        list([
            "Inform your college guide — most allow placement leave officially.",
            "Be discreet at the organization; never interview on their time/hardware.",
            "Mine your OJT for stories: 'In my training I fixed a production bug by...'.",
            "If they ask about conversion, be honest — recruiters respect transparency.",
        ]),

        note(
            "Interviewers don't expect perfection — they expect a clear thought process. Silence is the only unforgivable answer; think ALOUD.",
            "tip",
            "Golden Rule"
        ),

        keyPoints([
            "Funnel: OA → technical rounds → manager → HR; each gate filters differently.",
            "Fresher DSA core: arrays, hash maps, strings, stacks, basic recursion.",
            "UMPIRE: Understand → Match → Plan → Implement → Review → Evaluate.",
            "Always state brute force first, then optimize, then complexity.",
            "OJT stories (production bug fixes) are interview gold — collect them.",
        ]),
    ],

    {
        summary:
            "Prepare for hiring: the fresher funnel, essential DSA patterns, the UMPIRE live-coding method, and interviewing while on OJT.",
        minutes: 13,
        tags: ["interview", "dsa", "placement", "problem-solving", "important"],

        mcqs: [
            mcq(
                "The FIRST thing to do when given a coding problem is:",
                ["Start typing code", "Restate the problem and clarify constraints/edge cases", "State complexity", "Ask about salary"],
                1,
                "Understanding precedes everything — wrong assumptions sink correct code."
            ),
            mcq(
                "Solving 'find pair with given sum' in O(n) requires a:",
                ["Nested loop", "Hash map storing value→index", "Stack", "Binary heap"],
                1,
                "One pass: for each x, check if target−x was already seen."
            ),
            mcq(
                "During a live interview, prolonged silence while thinking is:",
                ["Fine — deep thought", "Harmful — think ALOUD so the interviewer follows your reasoning", "A sign of intelligence", "Required etiquette"],
                1,
                "Interviews evaluate reasoning process; silent typing hides everything."
            ),
            mcq(
                "The correct way to handle interviews during OJT is:",
                ["Interview secretly on company time", "Inform your college guide, use personal time/devices, stay discreet", "Refuse all interviews", "Tell your team every detail"],
                1,
                "Official placement channels + discretion preserves both opportunities."
            ),
        ],

        questions: [
            qa(
                "Explain the UMPIRE method for live coding interviews.",
                "UMPIRE structures the interview so the evaluator sees your PROCESS: (1) Understand — restate the problem in your own words and clarify constraints: input sizes, duplicates, negatives, edge cases; interviewers deliberately leave ambiguity. (2) Match — identify the pattern: 'sums suggest hash map, subarrays suggest sliding window'. (3) Plan — articulate your algorithm step-by-step BEFORE coding; get a nod before typing. (4) Implement — clean code with meaningful names, talking through each block. (5) Review — dry-run the code on an example input, catching off-by-ones aloud. (6) Evaluate — state time and space complexity, then discuss how you'd optimize further. This method converts a stressful memory test into a structured conversation — and even a non-perfect solution delivered via UMPIRE routinely beats flawless-but-silent code.",
                4
            ),
            qa(
                "Which DSA topics should BCA freshers prioritize, and why these over exhaustive coverage?",
                "Prioritize: (1) Arrays & Strings with two-pointer and sliding-window patterns — the single most common fresher question family; (2) Hash Maps — the default optimization tool transforming O(n²) to O(n), used in frequency, lookup, and grouping problems; (3) Stacks & Queues — matching problems (valid parentheses) teach LIFO thinking; (4) Recursion with basic memoization — Fibonacci-style problems are the gateway to dynamic programming; (5) Linked Lists — reversal and fast/slow cycle detection; (6) Binary Search — the log-n template. This core covers the overwhelming majority of fresher assessments because they test pattern recognition and complexity intuition, not encyclopedic knowledge. Depth beats breadth: solving 100 problems across these six topics with written pattern-notes outperforms skimming 500 random problems.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — HR Rounds, Offers & Salary Negotiation
========================================================= */

const hrOffers = createTopic(
    "hr-rounds-offers-and-salary-negotiation",
    "HR Rounds, Offers & Salary Negotiation",

    [
        definition(
            "CTC",
            "CTC (Cost to Company) is the TOTAL annual expense on you — including base salary, allowances, bonuses, and employer PF contributions — which is always higher than the money that reaches your bank account."
        ),

        heading("Decoding a Fresher Offer"),

        code(
            `CTC: ₹4,80,000/year breaks down as:

Basic + HRA + allowances      ₹3,60,000   → taxable base flow
Employer PF (12%)               ₹43,200   → retirement, NOT in hand
Performance bonus (variable)    ₹36,000   → conditional!
Gratuity/insurance/other        ₹40,800   → benefits

Monthly in-hand ≈ ₹26,000-28,000
(after YOUR PF cut + tax deduction)

⚠️ "Variable pay" may require ratings to unlock`,
            "text",
            "CTC anatomy — read before signing"
        ),

        heading("Classic HR Questions & Strong Answers"),

        table(
            ["Question", "What They're Testing", "Strong Response Shape"],
            [
                ["Tell me about yourself", "Communication, focus", "90 sec: education → skills → OJT highlight → why this role"],
                ["Strengths / weaknesses", "Self-awareness", "Real strength + example; a genuine weakness + active fix"],
                ["Why our company?", "Research, intent", "Specific product/tech/values + how you fit"],
                ["Where in 5 years?", "Ambition vs flight risk", "Growth path in THIS domain, not 'your job'"],
                ["Any questions for us?", "Genuine interest", "Ask about team, tech stack, mentoring — never 'leaves?'"],
                ["Expected CTC?", "Preparation", "Researched range + openness to overall package"],
            ]
        ),

        heading("Negotiation for Freshers — The Honest Playbook"),

        steps([
            "Never accept on the call — 'Thank you! May I have 2-3 days?'",
            "Get the offer IN WRITING with full breakup before any decision.",
            "Negotiate on FACTS: other offers, market data (Glassdoor/AmbitionBox).",
            "If fixed pay is immovable, negotiate joining bonus, bond terms, or review period.",
            "Respond within the promised window; never ghost — circles are small.",
        ]),

        heading("Evaluating Offers Beyond Salary"),

        table(
            ["Factor", "Why It Outweighs ₹1L More"],
            [
                ["Mentorship & team seniority", "First 2 years' learning compounds for decades"],
                ["Tech stack match", "Career track gets set early; hard to switch later"],
                ["Product vs services company", "Product = deeper ownership; services = variety/clients"],
                ["Bond/training agreements", "₹2L bond for a weak role is a trap — read EVERY line"],
                ["Work mode & location", "Sustainability matters over 5 days a week"],
            ]
        ),

        note(
            "The first salary matters less than the first SKILL CURVE. A role with strong mentors at ₹3.6L beats a dead-end at ₹4.5L within two years — and the gap reverses forever after.",
            "tip",
            "Career Math"
        ),

        keyPoints([
            "CTC ≠ in-hand: subtract employer PF, variable pay, and your deductions.",
            "HR answers follow shapes: 90-second intro, real weakness + fix, researched 'why us'.",
            "Never accept verbally; demand written breakup; decide in 2-3 days.",
            "Negotiate with facts (competing offers, market data), politely.",
            "Mentorship and stack quality beat small salary differences early on.",
        ]),
    ],

    {
        summary:
            "Decode CTC vs in-hand salary, prepare HR question shapes, learn fresher negotiation, and evaluate offers on growth over salary.",
        minutes: 12,
        tags: ["hr-interview", "salary", "negotiation", "offer-letter", "career", "important"],

        mcqs: [
            mcq(
                "CTC is always ______ your in-hand salary because it includes:",
                ["Lower; deductions only", "Higher; employer PF, variable pay, and benefits", "Equal; different label", "Unrelated"],
                1,
                "CTC counts total company cost — much never reaches your account."
            ),
            mcq(
                "Asked 'What's your expected CTC?', the strongest fresher answer is:",
                ["A random huge number", "A researched market range + openness to the overall package", "Whatever you want", "Silence"],
                1,
                "Data-backed ranges show preparation without pricing yourself out."
            ),
            mcq(
                "The correct response upon receiving a verbal offer is:",
                ["Accept instantly", "Thank them and request the written offer with 2-3 days to decide", "Demand double immediately", "Ignore it"],
                1,
                "Written offers reveal the real breakup; time enables comparison."
            ),
            mcq(
                "For a fresher, which factor justifies accepting a slightly LOWER salary?",
                ["Free snacks", "Strong mentorship team and matching tech stack", "Longer commute", "Bigger logo on LinkedIn only"],
                1,
                "Early learning velocity compounds — mentors accelerate careers permanently."
            ),
        ],

        questions: [
            qa(
                "Explain CTC vs in-hand salary with a sample breakdown and traps freshers must spot.",
                "CTC (Cost to Company) is the company's TOTAL annual spend on you, while in-hand is what actually reaches your bank monthly. Sample ₹4.8L CTC: base + allowances ₹3.6L (taxable flow), employer PF ₹43,200 (goes to retirement accounts, never monthly), 'variable/performance bonus' ₹36,000 (conditional on ratings — may pay zero), and gratuity/insurance ₹40,800. Your own 12% PF deduction and TDS further reduce monthly credit to roughly ₹26-28k. Traps to spot: (1) inflated variable components presented as guaranteed; (2) 'one-time joining bonus' amortized into advertised CTC; (3) training bonds requiring repayment if you exit early; (4) CTC quoted 'including all benefits' without itemization. Rule: demand the complete written compensation structure and compute the fixed monthly figure before comparing any two offers.",
                4
            ),
            qa(
                "How should a fresher negotiate a job offer without damaging the relationship?",
                "(1) Express genuine gratitude and enthusiasm FIRST — negotiation is a conversation, not combat. (2) Buy time: 'Thank you so much — may I take two days to review?' Never accept or counter on the spot. (3) Request the complete written offer with salary breakup before deciding anything. (4) Negotiate with FACTS, not feelings: a competing offer letter, or market data from Glassdoor/AmbitionBox for the same role and city. (5) Frame collaboratively: 'Based on my OJT experience with this exact stack and the market range, is there flexibility on the fixed component?' (6) If fixed pay is rigid, negotiate secondary terms: joining bonus, bond removal, early review (6-month appraisal), or remote allowance. (7) Decide within your promised window and communicate either way — rescinding silently or ghosting burns bridges in an industry where recruiters move companies too. Handled this way, negotiation signals professionalism even when the answer stays 'no'.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — Upskilling Roadmap & Certifications
========================================================= */

const upskillingRoadmap = createTopic(
    "upskilling-roadmap-and-certifications",
    "Upskilling Roadmap & Certifications",

    [
        definition(
            "Upskilling",
            "Upskilling is deliberately adding market-relevant skills on a schedule — the deliberate antidote to 'graduated but not employable' — especially during OJT when you see real gaps daily."
        ),

        heading("The Career Track Decision"),

        table(
            ["Track", "Core Skills", "Proof to Build"],
            [
                ["Web Developer", "One full stack (PHP-Laravel / MERN) + SQL + Git + deployment", "2 deployed live projects"],
                ["Data / AI", "Python, SQL, Pandas, statistics, one ML track", "End-to-end analysis notebook + writeup"],
                ["Cloud / DevOps", "Linux, networking, AWS core, Docker, CI/CD", "Infrastructure-as-code repo + certified badge"],
                ["Cyber Security", "Networking, Linux, security+, OWASP practice", "CTF rankings + home lab writeups"],
                ["QA / Testing", "Manual + Selenium/Playwright, API testing", "Test suite for a real open-source repo"],
            ]
        ),

        heading("The Final-Year Roadmap (Alongside OJT)"),

        code(
            `Months 1-2  → Pick ONE track; 1 hr/day; rebuild fundamentals
Months 3-4  → Build flagship project #1 (deployed, documented)
Months 5-6  → Flagship #2 + DSA pattern practice (3/wk)
Months 7-8  → Certifications + interview prep + applications
Rule: OJT hours are sacred; upskill in the 1-hour daily slot
      you defend like a standup meeting.`,
            "text",
            "8-month execution plan"
        ),

        heading("Certifications Worth a Fresher's Money"),

        table(
            ["Certification", "Track", "Cost Signal"],
            [
                ["AWS Cloud Practitioner", "Cloud", "High ROI — cloud demand is enormous"],
                ["CompTIA Security+", "Security", "Standard entry credential"],
                ["Google Data Analytics", "Data", "Beginner-friendly, recognized"],
                ["Meta Front-End Developer", "Web", "Coursera-based, portfolio-driven"],
                ["Free: freeCodeCamp / CS50", "Any", "Zero cost, genuinely respected"],
            ]
        ),

        note(
            "A certification without a PROJECT is a receipt. A project without certification still gets interviews. Priorities: deployed projects > GitHub history > certifications.",
            "info",
            "Proof Hierarchy"
        ),

        heading("Learning Sources That Don't Waste Time"),

        list([
            "Documentation first — reading official docs is an interview superpower.",
            "Structured: CS50, freeCodeCamp, The Odin Project, roadmap.sh.",
            "Practice: LeetCode (interviews), Frontend Mentor (UI), Kaggle (data).",
            "Weekly output habit: 1 blog post or 1 small commit streak — public proof compounds.",
        ]),

        heading("The T-Shaped Rule"),

        code(
            `        [ UX ] [ Cloud ] [ DB ] [ DevOps ]      ← broad awareness
                  ─────────────
                     | Deep skill
                     | (your ONE track)
                     v
              [ Full-Stack Web ]`,
            "text",
            "Breadth to collaborate; depth to be hired"
        ),

        keyPoints([
            "Choose ONE track early; depth beats scattered skills.",
            "1 protected hour daily during OJT outperforms weekend binges.",
            "Proof hierarchy: deployed projects > GitHub history > certifications.",
            "High-ROI certs: AWS CP, Security+, Google Data Analytics.",
            "Free gold: freeCodeCamp, CS50, roadmap.sh, official documentation.",
        ]),
    ],

    {
        summary:
            "Build a final-year upskilling system: track selection, 8-month roadmap with OJT, valuable certifications, and T-shaped skill design.",
        minutes: 11,
        tags: ["upskilling", "certifications", "roadmap", "career", "important"],

        mcqs: [
            mcq(
                "The 'proof hierarchy' for freshers ranks highest first as:",
                ["Certifications > projects > GitHub", "Deployed projects > GitHub history > certifications", "Marks > everything", "Certificates of participation"],
                1,
                "Working, deployed, verifiable work beats paper at every interview."
            ),
            mcq(
                "A 'T-shaped' developer means:",
                ["Knowing nothing deeply", "Deep expertise in one track + working breadth across neighbors", "Ten shallow skills", "Only backend knowledge"],
                1,
                "The vertical bar gets you hired; the horizontal bar keeps you effective."
            ),
            mcq(
                "The best daily upskilling strategy during OJT is:",
                ["10-hour weekend binges", "One protected hour daily, treated like a meeting", "Random video surfing", "Waiting for free time"],
                1,
                "Consistency compounds: 1hr/day = 360+ hours over the final year."
            ),
            mcq(
                "Which certification offers strong cloud-track ROI for a fresher?",
                ["AWS Cloud Practitioner", "Typing certificate", "MS Word expert", "Driving license"],
                0,
                "Cloud skills demand vastly outstrips supply; CP is the standard entry."
            ),
        ],

        questions: [
            qa(
                "Design an 8-month upskilling plan for a BCA final-year student who is simultaneously doing OJT.",
                "Principle: OJT hours are non-negotiable, so plan one protected daily hour plus weekend project blocks. Months 1-2: commit to ONE track (e.g., web development) using a structured source (Odin Project/freeCodeCamp); rebuild fundamentals deliberately — HTML/CSS/JS or Python thoroughly. Months 3-4: flagship project #1 — a real application deployed publicly (Vercel/Render), with a professional README, tests, and a live link; document the build in a blog post. Months 5-6: flagship project #2 at higher complexity (auth, payments, or third-party APIs) plus three DSA practice sessions weekly covering arrays, hash maps, and recursion patterns. Months 7-8: one recognized certification matching the track (AWS CP / Security+ / Google Data Analytics), resume polish with quantified OJT bullets, mock interviews, and active applications. Throughout: maintain the GitHub streak and weekly public output — the compounding evidence that actually gets interviews.",
                4
            ),
            qa(
                "Why do deployed projects beat certifications for freshers, and when ARE certifications worth it?",
                "Deployed projects prove the full professional loop: scoping a problem, building it, handling real-world messiness (deploy configs, env variables, broken builds), and shipping for users to see. An interviewer can click your link, read your code, and quiz your decisions — verification in seconds. Certificates prove attendance and reading comprehension; they cannot demonstrate building, debugging, or finishing. HOWEVER, certifications earn their place when: (1) a track has hard HR filters — many cloud and security job postings literally screen for AWS/Security+ keywords; (2) you're switching into a domain with no academic backing (security, cloud); (3) structured study fits your learning style better than open-ended projects. Optimal strategy: two strong deployed projects first, then one well-chosen certification layered on top for keyword visibility — projects win conversations, certifications win keyword searches.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 5 — Trainee to Employee: Conversion & Early Career
========================================================= */

const careerTransition = createTopic(
    "trainee-to-employee-conversion-and-early-career",
    "Trainee to Employee: Conversion & Early Career",

    [
        definition(
            "Conversion",
            "Conversion is the transition from trainee/intern to full-time employee, typically triggered by a Pre-Placement Offer (PPO) based on OJT performance evaluation."
        ),

        heading("What Triggers a PPO"),

        table(
            ["Signal", "How to Generate It"],
            [
                ["Consistent delivery", "Closed tickets, small clean PRs, sprint after sprint"],
                ["Ownership", "Blockers raised early; zero silent failures"],
                ["Team fit", "Helpful in reviews, positive in retros, coachable in feedback"],
                ["Explicit interest", "Told your lead by month 2-3 that you WANT to convert"],
                ["Advocate", "A mentor who will argue for you in the review meeting"],
            ]
        ),

        note(
            "Companies decide conversions in meetings you're not in. By month 2, ensure (1) your lead knows you want the role, and (2) at least one senior would defend your name in that room.",
            "tip",
            "Invisible Meeting Rule"
        ),

        heading("The Conversion Conversation Script"),

        code(
            `"I've really enjoyed my time here — the team and the
product both excite me. I'd love to continue as a
full-time developer after my training ends.

Could you share what the conversion process looks like,
and what you'd need to see from me in the remaining
months to support my case?"`,
            "text",
            "Asked in a 1:1, month 2-3 — not the final week"
        ),

        heading("If Conversion Doesn't Happen"),

        steps([
            "Ask for SPECIFIC feedback — 'what would have changed the decision?'",
            "Request: completion certificate, LinkedIn recommendation, reference contact.",
            "Document achievements with metrics while memory is fresh.",
            "Channel disappointment into applications within one week — momentum matters.",
            "Stay gracious: same-industry networks reconnect for years.",
        ]),

        heading("Your First 90 Days as an Employee"),

        table(
            ["Phase", "Focus", "Trap to Avoid"],
            [
                ["Days 1-30", "Learn names, systems, deploy pipeline; ship tiny fixes", "Trying to prove genius immediately"],
                ["Days 31-60", "Own small features end-to-end; build review relationships", "Going silent when stuck"],
                ["Days 61-90", "Take a full ticket from spec to production independently", "Saying yes to everything (burnout)"],
            ]
        ),

        heading("First-Salary Financial Basics"),

        list([
            "Salary account + know your pay cycle (many companies pay the 1st for the PRIOR month).",
            "Understand your payslip: Basic, HRA, PF (both shares), TDS/professional tax.",
            "Rule of thumb: save/invest 20% from salary ONE — habits formed on salary one persist.",
            "Keep 3 months' expenses as an emergency fund before lifestyle upgrades.",
        ]),

        heading("The 5-Year Growth Mindset"),

        code(
            `Year 1: Learn how software TEAMS actually work
Year 2: Own features; mentor juniors/joinees
Year 3: Drive designs; interview candidates
Year 4-5: Senior track — OR pivot (higher studies, product, founding)

Skill curve > salary curve, always, in the first 5 years.`,
            "text",
            "Long game thinking"
        ),

        keyPoints([
            "PPOs come from consistent delivery + explicit interest + one internal advocate.",
            "Have the conversion conversation at month 2-3, in a 1:1 — never the final week.",
            "No conversion? Extract feedback, recommendations, and references gracefully.",
            "First 90 days: learn systems → own small features → deliver independently.",
            "Save 20% from salary one; skill curve beats salary curve for 5 years.",
        ]),
    ],

    {
        summary:
            "Convert OJT into employment: PPO signals, the conversion conversation, graceful no-conversion exits, first-90-days plan, and financial basics.",
        minutes: 12,
        tags: ["ppo", "conversion", "career", "first-job", "finance", "important"],

        mcqs: [
            mcq(
                "The ideal time to tell your lead you want a full-time conversion is:",
                ["Your last day", "Around month 2-3 of training, in a 1:1", "The interview itself", "Never — they should guess"],
                1,
                "Early signals let leads plan headcount and advocate in review meetings."
            ),
            mcq(
                "If conversion doesn't happen, your FIRST step should be:",
                ["Badmouth the company online", "Ask for specific feedback on what would have changed the decision", "Stop coming to OJT", "Argue with HR"],
                1,
                "Feedback converts rejection into a targeted gap-list for next attempts."
            ),
            mcq(
                "In your first 90 days as an employee, the smartest focus is:",
                ["Proving you're a genius", "Learning systems and shipping small, then growing scope steadily", "Avoiding all work", "Requesting promotions"],
                1,
                "Credibility compounds through small, reliable deliveries."
            ),
            mcq(
                "The recommended savings habit from your very first salary is:",
                ["0% — enjoy it all", "Save/invest ~20% immediately; habits lock in early", "Save everything including food money", "Only save after year 3"],
                1,
                "Pay-yourself-first from paycheck one builds lifelong financial muscle."
            ),
        ],

        questions: [
            qa(
                "How can an OJT trainee maximize the probability of receiving a Pre-Placement Offer?",
                "Conversions are decided in review meetings the trainee never attends — so engineer the inputs: (1) Consistent delivery: close tickets sprint after sprint with small, clean, well-described PRs — the tracker history becomes your performance file. (2) Ownership signals: raise blockers within a day, never let tickets sit silent, and demo working features at sprint reviews. (3) Team fit: give helpful code reviews, contribute positively in retrospectives, and receive feedback coachably — leads flag people others WANT on the team. (4) Explicit interest: around month 2-3, in a 1:1, tell your lead clearly that you want to convert and ask what they'd need to see from you in the remaining months — this converts you from 'evaluated student' to 'candidate they're tracking'. (5) Build an advocate: a senior who has seen your growth and will defend your name when the decision is made. Combine all five and conversion becomes the natural conclusion of a documented pattern.",
                4
            ),
            qa(
                "Describe the right approach to your first 90 days as a full-time employee, and key financial basics for salary one.",
                "Ninety-day plan: Days 1-30 — learn aggressively: team members' names and roles, the systems, the deploy pipeline; ship tiny fixes to learn the PR flow safely; the trap to avoid is trying to prove genius immediately and breaking trust early. Days 31-60 — own small features end-to-end (spec → branch → PR → staging → production) and build strong review relationships; the trap is going silent when stuck — escalate with the 30-minute rule. Days 61-90 — take a full ticket independently while keeping quality gates; the trap is saying yes to everything and burning out. Financial basics: set up your salary account and learn the pay cycle (month-one often arrives late — plan rent accordingly); learn to read your payslip (Basic, HRA, PF both shares, TDS); automate saving/investing 20% from salary ONE because habits set instantly; and build a 3-month emergency fund before any lifestyle upgrade. The compound theme: reliability — in code, communication, and cash.",
                4
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit2Topics = [
    ojtRequirements,
    technicalInterviews,
    hrOffers,
    upskillingRoadmap,
    careerTransition,
];