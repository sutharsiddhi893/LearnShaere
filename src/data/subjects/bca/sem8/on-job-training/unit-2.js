/* =========================================================
   BCA • SEM 8 • On Job Training
   UNIT 2 — Final Semester Strategy & Career Launch
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
   TOPIC 1 — Final Semester Strategy: Balancing Everything
========================================================= */

const finalSemesterStrategy = createTopic(
    "final-semester-strategy-balancing-everything",
    "Final Semester Strategy: Balancing Everything",

    [
        definition(
            "Final Semester Crunch",
            "The final semester crunch is the collision of four demanding tracks — OJT, final-year project, placement season, and exams — navigated successfully only through deliberate prioritization."
        ),

        heading("The Four Competing Tracks"),

        table(
            ["Track", "Time Demand", "Consequence of Neglect"],
            [
                ["OJT / Training", "Fixed daily hours", "Evaluation + possible job offer lost"],
                ["Final Year Project", "Evenings/weekends", "Degree requirement at risk"],
                ["Placements (tests/interviews)", "Bursty — unpredictable", "Career delayed by a year"],
                ["Exams & coursework", "Seasonal spikes", "Backlogs haunt sem results"],
            ]
        ),

        heading("The Priority Matrix"),

        code(
            `Fixed commitments first (they cannot move):
  OJT hours        9:30–6:30    NON-NEGOTIABLE
  College/exams    timetable    NON-NEGOTIABLE

Flexible blocks (you schedule):
  Project          6:30–8:00 PM daily
  Applications     30 min morning (apply + follow up)
  DSA/interview    1 hr before/after dinner
  Rest             8 hrs sleep — CUT THIS LAST

Dead week rules (exam week):
  OJT leave + project pause → full exam focus
  (inform both mentors EARLY, not the night before)`,
            "text",
            "A schedule that survives reality"
        ),

        note(
            "The single biggest final-semester mistake: treating the job hunt as 'after exams.' Recruiters hire on THEIR calendar. Applications must run parallel — 30 minutes daily — even during project crunch.",
            "warning",
            "Recruiter Calendar Rule"
        ),

        heading("Synergy: Making Tracks Feed Each Other"),

        list([
            "OJT work → project: use real production learnings (with permission, no company code!).",
            "Project → interviews: it becomes your #1 talking point in every technical round.",
            "Interview prep → OJT: DSA patterns improve your daily code quality too.",
            "OJT stories → HR answers: 'a production incident taught me...' beats any theory.",
        ]),

        heading("The Weekly Review Ritual"),

        steps([
            "Sunday night, 20 minutes: review last week's track progress.",
            "Identify the week's ONE critical outcome per track.",
            "Block calendar time for each — unscheduled plans are fantasies.",
            "Adjust honestly: what got skipped, and why?",
        ]),

        heading("Burnout Prevention"),

        list([
            "Sleep is a performance tool, not a luxury — 7-8 hours protects memory for exams AND interview recall.",
            "One full half-day off weekly — sustained 7-day weeks decay into 4 useless days.",
            "Watch warning signs: irritability, appetite change, dread — adjust early.",
        ]),

        keyPoints([
            "Final semester = OJT + project + placements + exams, deliberately scheduled.",
            "Fixed commitments anchor the day; flexible tracks get scheduled blocks.",
            "Applications run parallel always — recruiters don't wait for your exams.",
            "Make tracks feed each other: OJT learnings → project → interview stories.",
            "Sunday weekly review + protected sleep = sustainable crunch.",
        ]),
    ],

    {
        summary:
            "Balance the final semester's four tracks with priority matrices, synergy strategies, weekly reviews, and burnout prevention.",
        minutes: 11,
        tags: ["final-semester", "strategy", "time-management", "placements", "important"],

        mcqs: [
            mcq(
                "The biggest final-semester scheduling mistake is:",
                ["Sleeping 8 hours", "Deferring job applications 'until after exams' — recruiters hire on their own calendar", "Doing a weekly review", "Asking mentors for help"],
                1,
                "Placement cycles close whether or not you're ready; applications run parallel."
            ),
            mcq(
                "Which practice makes final-semester tracks COMPOUND rather than compete?",
                ["Doing each in isolation", "Synergy: OJT learnings feed the project; the project feeds interview answers", "Skipping the project", "Avoiding interviews"],
                1,
                "One body of work serving three tracks — the efficient graduate's secret."
            ),
            mcq(
                "The correct approach to exam week during OJT is:",
                ["Secretly skipping OJT", "Informing both mentors early, taking official leave, pausing project work", "Working overnight every day", "Ignoring exams"],
                1,
                "Early communication converts a conflict into a planned pause."
            ),
            mcq(
                "The Sunday weekly review exists mainly to:",
                ["Add guilt", "Convert vague intentions into scheduled, honest weekly corrections", "Count hours worked", "Replace sleep"],
                1,
                "Unreviewed plans drift; 20 honest minutes weekly keeps four tracks aligned."
            ),
        ],

        questions: [
            qa(
                "Explain the four competing tracks of the final semester and design a realistic weekly plan for them.",
                "The tracks: (1) OJT — fixed 9-to-6 hours with evaluation and possible conversion attached; (2) Final-year project — a degree requirement needing sustained evening/weekend effort; (3) Placements — bursty, unpredictable tests and interviews following the RECRUITER's calendar; (4) Exams — seasonal but unforgiving of neglect. A realistic week: anchor days around the immovable OJT block (9:30–6:30); immediately after, a 90-minute deep-work block for the project (6:30–8:00) — the project is a marathon needing daily mileage, not weekend heroics; 30 minutes each morning for applications and follow-ups (parallel always); one hour of interview prep (DSA patterns or project-story rehearsal) post-dinner; Sunday's 20-minute review recalibrates everything. Exam weeks trigger a pre-agreed mode: official OJT leave, project pause, full exam focus — arranged with mentors weeks ahead, never the night before. Sleep (7-8 h) and one half-day off are protected as performance infrastructure, because four tracks run on one brain.",
                4
            ),
            qa(
                "How can a final-semester student make the four tracks reinforce each other instead of competing?",
                "Through deliberate synergy design: (1) OJT → Project: base the final-year project on genuine production problems encountered during training — a logging dashboard, an internal tool — using the ARCHITECTURE lessons (never company code/confidential data, with mentor permission). The project instantly gains real-world credibility. (2) Project → Interviews: the deployed, documented project becomes the centerpiece of every technical round — 'walk me through something you built' is the most common interview opener, and you'll have a live URL and architecture story ready. (3) Interview prep → OQT quality: DSA practice (hash maps, complexity awareness) visibly improves daily production code — better loops, better data structure choices, sharper code reviews. (4) OJT → HR answers: 'tell me about a challenge' gets answered with a REAL production incident — 'when the deploy failed and I...' — which no textbook candidate can match. One interconnected body of work feeds four masters: the graduate's efficiency multiplier.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — Interview-Ready Portfolio & Personal Brand
========================================================= */

const portfolioBrand = createTopic(
    "interview-ready-portfolio-and-personal-brand",
    "Interview-Ready Portfolio & Personal Brand",

    [
        definition(
            "Personal Brand",
            "A personal brand is what the internet says about you when recruiters search your name — your GitHub, LinkedIn, and project trail, curated deliberately instead of left to chance."
        ),

        heading("The Recruiter's 90-Second Audit"),

        code(
            `Recruiter searches your name. In 90 seconds they check:

1. GitHub      → pinned repos? real commits? READMEs?
2. LinkedIn    → headline, about, projects, recommendations?
3. Google      → anything alarming? anything impressive?

Decision made before you speak a word.
Your brand IS the pre-interview.`,
            "text",
            "The search happens whether you curate or not"
        ),

        heading("The Final GitHub Audit"),

        steps([
            "Pin your 4-6 best repositories — quality curation over quantity.",
            "Every pinned repo: screenshot/GIF in README, live demo link, setup steps, tech stack.",
            "Commit history check — repos with 3 mega-commits look copied; honest incremental history builds trust.",
            "Archive tutorial-clone and abandoned repos.",
            "Profile completeness: photo, bio, location, LinkedIn link.",
            "Green-contribution honesty: consistency beats bursts.",
        ]),

        heading("LinkedIn Optimization"),

        table(
            ["Section", "Winning Content"],
            [
                ["Headline", "'BCA Final Year | Full-Stack (React + Laravel) | Seeking SDE roles' — searchable keywords"],
                ["About", "3 short paragraphs: who, proof (projects/OJT), what you seek"],
                ["Experience", "OJT with 2-3 QUANTIFIED bullets"],
                ["Projects", "Top 3 with links — mirror your GitHub pins"],
                ["Skills", "Real ones only — interviews probe every entry"],
                ["Recommendations", "Request from OJT mentor + 1 guide NOW while memory is fresh"],
            ]
        ),

        heading("The Project Story Arc (Interview Gold)"),

        code(
            `Every pinned project should answer, in 2 minutes:

CONTEXT  — "College events ran on WhatsApp chaos"
DECISION — "Built a Laravel event portal"
OBSTACLE — "Struggled with concurrent seat booking"
ACTION   — "Learned DB transactions + row locking"
RESULT   — "Handled 400 students; live at [URL]"

This COAR structure turns a 'college project'
into a professional narrative.`,
            "text",
            "Context-Obstacle-Action-Result"
        ),

        note(
            "One deployed project with a real user (even 30 students using your app) beats five polished demos nobody uses. Usage is the ultimate proof — chase your first 10 users ruthlessly.",
            "tip",
            "Users > Polish"
        ),

        heading("The Personal Site (Optional but Powerful)"),

        list([
            "One page: name, tagline, 3 projects, resume PDF, contact.",
            "Free hosting: GitHub Pages / Vercel — 2 hours of work, permanent professional address.",
            "Custom domain (~₹800/year) if you can — rahulsharma.dev reads as commitment.",
        ]),

        heading("Content as Compounding Brand"),

        code(
            `Write ONE post/month on LinkedIn:
  "How I fixed an N+1 query in production (OJT story)"

Why it compounds:
  → recruiters see communication skill
  → the post lives forever, working while you sleep
  → writing IS thinking — your own understanding deepens`,
            "text",
            "Small consistent output beats grand intentions"
        ),

        keyPoints([
            "Your brand is what recruiters find in their 90-second pre-interview search.",
            "GitHub: 4-6 curated pins with READMEs, demos, honest commit history.",
            "LinkedIn: keyword headline, quantified OJT bullets, fresh recommendations.",
            "Tell projects as COAR stories: Context, Obstacle, Action, Result.",
            "One deployed project with real users > five unused polished demos.",
        ]),
  ],

{
    summary:
    "Build the interview-ready brand: final GitHub audit, LinkedIn optimization, COAR project storytelling, and compounding content.",
        minutes: 12,
            tags: ["portfolio", "github", "linkedin", "personal-brand", "projects", "important"],

                mcqs: [
                    mcq(
                        "The pre-interview reality is that recruiters form judgments from:",
                        ["Your phone voice", "A 90-second search of GitHub/LinkedIn/Google", "Horoscope", "College marks only"],
                        1,
                        "The audit happens before you speak — curate what they find."
                    ),
                    mcq(
                        "A repo with 3 giant commits the night before submission signals:",
                        ["Hard work", "Possible copied code — honest incremental history builds trust", "Git mastery", "Good planning"],
                        1,
                        "Real development leaves a trail of small, meaningful commits."
                    ),
                    mcq(
                        "In the COAR story structure, the 'O' stands for:",
                        ["Output", "Obstacle — the genuine problem you fought", "Optimization", "Objective"],
                        1,
                        "Context, Obstacle, Action, Result — obstacles make stories believable."
                    ),
                    mcq(
                        "The strongest proof a student project can carry:",
                        ["Beautiful UI screenshots", "Real users actually using it — even 30 people", "Most GitHub stars", "Longest README"],
                        1,
                        "Usage validates every claim; polish proves only polish."
                    ),
                ],

                    questions: [
                        qa(
                            "Describe the final GitHub audit a final-year student should perform before placement season.",
                            "The audit curates what recruiters see in their first 90 seconds. (1) Curation: pin exactly 4-6 best repositories — a recruiter judges your AVERAGE quality, so archive tutorial clones and abandoned experiments; a graveyard of half-finished repos signals unfinished thinking. (2) README standard per pinned repo: a one-line value proposition, screenshot or GIF of it running, LIVE demo link, setup instructions, tech stack, and your specific contributions in team projects. (3) Commit hygiene: repos with three mega-commits dated the submission night look copied; genuine development shows weeks of small, descriptive commits — if history is embarrassing, the honest fix is BUILDING something new properly, not rewriting history. (4) Profile completeness: real photo, bio with role keywords ('Full-Stack | React + Laravel'), location, LinkedIn cross-link. (5) The deploy check: at least one project live on Vercel/Render — a clickable URL converts skeptics. The audit takes one weekend and repositions months of work.",
                            4
                        ),
                        qa(
                            "Explain the COAR structure for presenting projects in interviews, with a full example.",
                            "COAR converts a project listing into a professional narrative: Context (the real problem), Obstacle (the genuine technical fight), Action (your specific decisions), Result (quantified outcome). Example — 'College fest registration ran on WhatsApp chaos; 400 students, duplicate seats, manual reconciliation every night (Context). My naive first version double-booked seats when students clicked simultaneously (Obstacle). I learned database transactions and applied SELECT ... FOR UPDATE row-locking around the booking flow, plus idempotency keys on retries (Action). Result: zero double-bookings across the fest, 400 students registered in 3 days, and the portal is reused by the next batch — live at this URL.' The structure's power: Context proves judgment (picking worthwhile problems), Obstacle proves authenticity (real work always fights something), Action proves skill ownership, and Result proves delivery focus. Interviewers remember stories — COAR makes every pinned repo tell one.",
                            4
                        ),
                    ],
  }
);

/* =========================================================
   TOPIC 3 — Job Offers, Bonds & Joining Decisions
========================================================= */

const offersBonds = createTopic(
    "job-offers-bonds-and-joining-decisions",
    "Job Offers, Bonds & Joining Decisions",

    [
        definition(
            "Offer Letter",
            "An offer letter is the formal employment proposal detailing role, compensation structure, location, and joining terms — the legally significant document every clause of which must be read before signing."
        ),

        heading("Anatomy of an Offer Letter"),

        table(
            ["Component", "Read Carefully For"],
            [
                ["CTC breakup", "Fixed vs variable split; allowances real or notional"],
                ["Joining bonus", "One-time — often with CLAWBACK if you leave early"],
                ["Bond / service agreement", "Duration, penalty amount, what voids it"],
                ["Probation period", "Length, notice terms, evaluation criteria"],
                ["Notice period", "1-3 months — affects your NEXT job mobility"],
                ["Location & transfer clauses", "'Pan-India deployment' = you may be sent anywhere"],
                ["Working hours policy", "'Flexible' meaning 9-hour or 14-hour days?"],
            ]
        ),

        heading("The Multi-Offer Decision Matrix"),

        code(
            `Weight each factor 1-5 by personal importance,
score each offer 1-10, multiply, sum:

Factor          Weight  OfferA  OfferB
Learning/mentorship 5     9       6
Tech stack match     4     8       7
Fixed salary         3     6       9
Bond freedom         4     8       4
Location             3     7       8
                    ─────────────────
TOTALS               ×     141     127

Numbers surface what feelings hide.`,
            "text",
            "Never compare offers on salary alone"
        ),

        heading("Bonds & Service Agreements"),

        code(
            `Typical: "₹2L training cost payable if you
leave within 24 months."

Questions to ask BEFORE signing:
  □ Is the training genuinely worth ₹2L? (ask to see it)
  □ Is the bond refundable pro-rata or full?
  □ What EXACTLY triggers it — resignation only,
    or termination too?
  □ Is the amount recoverable legally in your state?
  □ Does the company have a holding-back-mark-sheets
    practice? (red flag 🚩)

A weak role chained by a bond is a two-year
prison sentence with a fee.`,
            "text",
            "Read the chain before wearing it"
        ),

        note(
            "Background verification (BGV) is standard: education records, employment history, address, sometimes credit/criminal checks. Never fudge dates or designations — discovered lies void offers AND spread across the industry's shared verification vendors.",
            "warning",
            "BGV Truth Rule"
        ),

        heading("Managing Multiple Offers Ethically"),

        steps([
            "Request every offer in writing with full breakup before deciding.",
            "Ask for your genuine consideration window (2-5 days) — politely, once.",
            "Decide; inform declining companies PROMPTLY and gratefully — they may return with better roles.",
            "Never ghost: recruiters change companies; today's ignored HR is next year's interviewer.",
            "Never accept an offer you intend to ditch the moment a better one lands — reneges get remembered.",
        ]),

        heading("Joining Formalities Checklist"),

        list([
            "Documents: marksheets, ID proofs, photos, PAN, bank account, migration certificate.",
            "Medical check where applicable.",
            "Relocation planning: joining location, initial stay, advance salary questions.",
            "First-week logistics: laptop collection, ID creation, buddy assignment.",
        ]),

        keyPoints([
            "Read every clause: variable pay, clawbacks, bonds, notice periods, transfer terms.",
            "Decision matrix beats gut feel — weight what matters, score honestly.",
            "Interrogate bonds: real training value, trigger conditions, refund logic.",
            "BGV verifies everything — absolute truth in every date and designation.",
            "Decline offers promptly and kindly; never ghost, never renege casually.",
        ]),
  ],

{
    summary:
    "Decode offer letters, evaluate bonds and service agreements, compare multiple offers with a weighted matrix, and manage the joining process ethically.",
        minutes: 12,
            tags: ["offer-letter", "bonds", "job-decision", "bgv", "career", "important"],

                mcqs: [
                    mcq(
                        "The clause allowing a company to recover your joining bonus if you exit early is called:",
                        ["Bonus tax", "Clawback clause", "Probation", "Non-compete"],
                        1,
                        "Clawbacks reclaim one-time payments — check the duration and conditions."
                    ),
                    mcq(
                        "The best method for comparing multiple job offers is:",
                        ["Highest CTC always", "A weighted decision matrix covering growth, stack, salary, and freedom", "The closest office", "Whichever replied fastest"],
                        1,
                        "Numbers surface what excitement hides; early-career learning weight usually beats salary."
                    ),
                    mcq(
                        "You exaggerated a project date on your resume. BGV finds it. The likely outcome:",
                        ["Nothing", "Offer withdrawal — verification failures spread across vendor networks", "Higher salary", "Bonus"],
                        1,
                        "Truth in every date/designation; discovered discrepancies void offers and reputation."
                    ),
                    mcq(
                        "After accepting Company A, Company B offers more. The professional path:",
                        ["Ghost Company A on joining day", "Honor acceptance with Company A — build the renegade-free reputation", "Lie to both", "Demand Company A match"],
                        1,
                        "Reneges travel through the small recruiter world; honoring commitments compounds opportunity."
                    ),
                ],

                    questions: [
                        qa(
                            "What clauses in an offer letter deserve the closest scrutiny before signing, and why?",
                            "Seven clauses decide real quality of life: (1) CTC breakup — fixed vs variable split determines what actually arrives monthly; notional allowances (meal cards, 'newspaper allowance') inflate paper CTC; (2) Joining bonus clawback — one-time money often repayable if you exit within 12-24 months, silently converting a 'bonus' into a loan; (3) Bond/service agreement — duration, penalty quantum, exact trigger conditions, and refund logic; a ₹2L bond on a weak role is a paid prison sentence; (4) Probation terms — length, evaluation criteria, and whether notice periods apply differently; (5) Notice period — 3-month notices handicap your NEXT mobility; (6) Location/transfer clause — 'pan-India deployment' overrides every verbal promise about city; (7) Working hours framing — 'flexible' cultures differ wildly. Verbal assurances from HR are worth nothing; only signed clauses are enforceable. Every ambiguity becomes a question — answers in email — before the signature.",
                            4
                        ),
                        qa(
                            "How should a fresher evaluate a bond-based offer against a bond-free one with lower salary?",
                            "Framework — the bond is a PRICE, so ask what it BUYS: (1) Genuine training value: does the company deliver structured, certified learning worth the bond amount (ask to see the actual program — some '₹2L training' is a week of videos, making the bond pure lock-in); (2) Role quality after training: bonded 'software engineer' roles that become indefinite support/testing disappoint thousands yearly — LinkedIn reaches out to current employees for the truth; (3) Opportunity cost: a bond-free ₹3.6L role at a mentorship-rich startup may compound skills to ₹8L in two years, while the bonded ₹4.5L role stagnates at the same number — calculate the 3-year trajectory, not the 1-year sticker; (4) Exit mechanics: pro-rata refunds and clean relieving letters vs full-amount demands and mark-sheet hostage-keeping; (5) Legal standing — bond enforceability varies and unreasonable constraints often fail in court, but litigation is a tax on your youth. Rule of thumb: accept bonds only where training is real, the role is written specifically, and alumni report growth — otherwise the freedom discount is the best investment a fresher makes.",
                            4
                        ),
                    ],
  }
);

/* =========================================================
   TOPIC 4 — First Salary & Financial Foundations
========================================================= */

const firstSalaryFinance = createTopic(
    "first-salary-and-financial-foundations",
    "First Salary & Financial Foundations",

    [
        definition(
            "In-Hand Salary",
            "In-hand (net) salary is the amount credited to your bank account monthly — CTC minus employer contributions, your PF share, professional tax, and income tax (TDS)."
        ),

        heading("Reading Your Payslip"),

        code(
            `CTC ₹4,80,000/yr → the journey of one month:

EARNINGS
  Basic               ₹15,000
  HRA                  ₹6,000
  Special allowances  ₹ 9,000
  Gross monthly      ₹30,000

DEDUCTIONS
  EPF (your 12% of basic)  ₹1,800
  Professional tax          ₹200
  TDS (income tax)        ₹1,000
                       ─────────
NET IN-HAND           ₹26,980 ✅

Also arriving (invisible):
  Employer PF ₹1,800 → your retirement account
  ₹3,000/mo 'variable'  → quarterly, IF ratings unlock it`,
            "text",
            "From CTC to bank credit"
        ),

        heading("Fresher Tax Basics (New Regime, Simplified)"),

        table(
            ["Concept", "What Freshers Must Know"],
            [
                ["Standard deduction", "₹50,000 (salaried) reduces taxable income automatically"],
                ["Basic exemption", "Income below the slab threshold (₹3-7L depending on year) pays zero tax"],
                ["87A rebate", "Marginal relief often wipes out most tax for incomes around ₹7L"],
                ["TDS", "Employer deducts monthly; filed via Form 16 at year-end"],
                ["ITR filing", "Mandatory beyond thresholds — file EVERY year, even for refunds"],
            ]
        ),

        note(
            "Tax slabs and rebates change nearly every budget. The permanent skill is reading your payslip and Form 16 — the numbers there always tell the current truth.",
            "tip",
            "Budgets Change, Paychecks Inform"
        ),

        heading("The 50-30-20 Starter Budget"),

        code(
            `First salary ₹27,000 in-hand:

  50% NEEDS    ₹13,500 → rent, food, transport, bills
  30% WANTS    ₹ 8,100 → outings, gadgets, subscriptions
  20% FUTURE   ₹ 5,400 → savings + investments —
                        AUTOMATED on salary day

Automation is the whole trick:
  Standing instruction → transfer 20% the day
  salary lands. Money you never see is
  money you never miss.`,
            "text",
            "Pay yourself first"
        ),

        heading("The Emergency Fund First"),

        list([
            "Target: 3-6 months of expenses (₹80,000-1,50,000 for most freshers).",
            "Park in a savings account or liquid fund — INSTANT access is the point.",
            "Purpose: job loss, medical surprises, family emergencies — so life's shocks never become loans.",
            "Only AFTER this: consider SIPs, PPF, or other growth instruments.",
        ]),

        heading("First-Salary Traps to Dodge"),

        table(
            ["Trap", "Antidote"],
            [
                ["Lifestyle inflation — 'I earn now, I deserve it'", "Lock savings % BEFORE upgrading anything"],
                ["EMI culture — phone on 24-month EMI at 20%+ effective rates", "Save then buy; EMIs for depreciating toys = paying extra for impatience"],
                ["Crypto/F&O 'quick money' social media schemes", "Ninety percent of F&O traders lose money — SEBI's own data"],
                ["Lending salary to friends/relatives", "Give only what you can gift; salary isn't a bank"],
                ["Zero insurance at 22", "A basic health cover (even ₹5L) is cheaper per year at your age than one hospital day"],
            ]
        ),

        heading("The Wealth Trajectory"),

        code(
            `₹5,400/month invested from age 22,
  at 12% average equity returns:

  Age 27:  ₹4.5 lakh
  Age 32:  ₹12 lakh
  Age 42:  ₹50 lakh
  Age 52:  ₹1.7 crore

₹5,400/month never increased —
TIME did all the heavy lifting.
Starting at 22 vs 27 literally
doubles the final corpus.`,
            "text",
            "Compounding rewards the early"
        ),

        keyPoints([
            "In-hand = CTC minus employer PF, your PF, professional tax, TDS.",
            "New regime: standard deduction + exemptions + 87A rebate shrink fresher tax heavily.",
            "50-30-20 budget with the 20% AUTOMATED on salary day.",
            "Emergency fund (3-6 months) before any investing.",
            "Dodge EMI culture, trading schemes, and lifestyle inflation — compounding starts at 22, not 32.",
        ]),
  ],

{
    summary:
    "Decode payslips and fresher taxes, build the automated 50-30-20 budget, establish the emergency fund, and avoid first-salary traps.",
        minutes: 12,
            tags: ["salary", "payslip", "tax", "budgeting", "personal-finance", "important"],

                mcqs: [
                    mcq(
                        "Your CTC is ₹4.8L but in-hand is ~₹27k/month mainly because:",
                        ["Companies overpromise knowingly", "CTC includes employer PF, variable pay, and benefits that never reach your monthly account", "Tax takes 45%", "Payslips are wrong"],
                        1,
                        "CTC = total company cost; in-hand = what survives all deductions."
                    ),
                    mcq(
                        "In the 50-30-20 budget, the 20% 'future' share works only if:",
                        ["It's whatever remains at month-end", "It's AUTOMATED out on salary day before spending begins", "It buys crypto", "It funds subscriptions"],
                        1,
                        "Pay yourself first via standing instruction — leftover savings never happen."
                    ),
                    mcq(
                        "The FIRST financial milestone before any investing should be:",
                        ["A stock portfolio", "3-6 months of expenses in instantly-accessible savings", "A car loan", "Maximum credit cards"],
                        1,
                        "The emergency fund converts life's shocks into inconveniences instead of debt."
                    ),
                    mcq(
                        "Starting a ₹5,400/month SIP at 22 instead of 27 most dramatically changes:",
                        ["This month's balance", "The FINAL corpus decades later — time is the multiplying variable", "Your tax slab", "Your CTC"],
                        1,
                        "Compounding's exponent is years; five early years can double the endgame."
                    ),
                ],

                    questions: [
                        qa(
                            "Explain the difference between CTC and in-hand salary with a monthly breakdown, plus the fresher's key tax facts.",
                            "CTC (Cost to Company) is the employer's TOTAL annual spend on you; in-hand is what reaches your account. Monthly journey of a ₹4.8L CTC: gross earnings ~₹30,000 (basic ₹15,000 + HRA + allowances), from which deduct: your EPF at 12% of basic (₹1,800 — goes to YOUR retirement account), professional tax (~₹200), and TDS income-tax withholding (~₹1,000) — netting ~₹27,000 credited. Separately, the employer contributes ANOTHER ₹1,800 PF counted inside CTC but never seen monthly, and 'variable pay' (~₹3,000/month) arrives quarterly only if performance gates unlock. Fresher tax facts (new regime): a ₹50,000 standard deduction applies automatically; incomes up to the basic exemption (extended to ₹7L in recent years with the 87A rebate) owe zero or negligible tax — which is why many freshers pay TDS all year then reclaim it as a refund at ITR filing; Form 16 from the employer documents everything for that return. The permanent skill: read the payslip monthly — it is the ground truth of your money.",
                            4
                        ),
                        qa(
                            "Design the complete financial plan for a fresher's first ₹27,000 in-hand salary.",
                            "Step 1 — Automation before anything: on salary day, a standing instruction sweeps 20% (₹5,400) to a separate account; invisible money is never spent. Step 2 — Allocation of the visible ₹21,600: 50% needs (₹13,500: rent if relocated, food, transport, phone/bills) and 30% wants (₹6,500: social life, subscriptions, guilt-free spending — budgets that ban joy collapse). Step 3 — Emergency fund first: the ₹5,400 monthly stream builds toward 3-6 months of expenses (~₹80,000-1,40,000) in a savings sweep or liquid fund — instantly accessible; this precedes ALL investing because its job is converting job-loss/medical shocks into inconveniences. Step 4 — After the fund: start a simple index-fund SIP continuing the same ₹5,400 habit, plus a modest health cover (~₹5L) since age-22 premiums are trivial versus one hospital day. Step 5 — Guardrails: no EMIs for depreciating gadgets (save-then-buy), no F&O/crypto schemes (SEBI data: ~90% of F&O traders lose), lending only giftable amounts. The whole plan is two automations and five rules — running for decades on autopilot.",
                            4
                        ),
                    ],
  }
);

/* =========================================================
   TOPIC 5 — The Road Ahead: Job vs Higher Studies vs Startup
========================================================= */

const roadAhead = createTopic(
    "the-road-ahead-job-vs-higher-studies-vs-startup",
    "The Road Ahead: Job vs Higher Studies vs Startup",

    [
        definition(
            "Career Runway",
            "Your career runway is the 5-year trajectory you deliberately construct now — the compounding sequence of skills, roles, and network that shapes every decade after."
        ),

        heading("The Three Classic Paths"),

        table(
            ["Path", "Best When", "Cost", "Typical 5-Yr Outcome"],
            [
                ["Job (SDE/Analyst)", "You want skills + income + structure", "None — you're PAID to learn", "Senior engineer / analyst; ₹12-25 LPA band"],
                ["Higher Studies (MCA/MSc/MS)", "Target roles demand depth (research, ML science, foreign tech)", "1-3 years + fees", "Specialist entry at higher band"],
                ["Startup / Entrepreneurship", "You have a validated idea + runway + risk appetite", "Savings & stability", "Binary: deep learning or reset"],
            ]
        ),

        note(
            "The honest default for most BCA graduates: JOB FIRST. You earn while learning, discover what you actually enjoy, and every later option (MS abroad needs experience essays; startups need domain insight) grows STRONGER with 2-3 years of industry reality inside you.",
            "tip",
            "Why Job-First Wins Usually"
        ),

        heading("If Choosing Higher Studies"),

        list([
            "MCA (India, 2-3 yr) — the natural BCA extension; target NITs via NIMCET for the best ROI.",
            "MS abroad (US/EU) — strong for AI/research careers; budget ₹30-60L; GRE/TOEFL + strong SOP.",
            "GATE → M.Tech — PSU opportunities plus funded research.",
            "MBA — only AFTER 2+ years work; fresh-MBA value is thin.",
            "Rule: higher study to ESCAPE placement struggles = expensive delay; higher study toward a SPECIFIC role = investment.",
        ]),

        heading("The Startup Question"),

        code(
            `Test before leaping:
  □ Real problem, personally validated (not 'app ideas')
  □ 10 people saying they'd PAY — not just 'nice idea'
  □ 12-18 months personal runway (savings/family)
  □ Co-founder with complementary skills
  □ Failure accepted as tuition, not tragedy

The 24-year-old advantage: no dependents,
no EMIs, maximum recovery time.
The 24-year-old trap: mistaking
a job escape for a startup reason.`,
            "text",
            "Leap with a checklist, not a mood"
        ),

        heading("Lifelong Learning — The Compounding Habit"),

        code(
            `The tech half-life: ~2-3 years before
your stack's frontier moves.

The 5-hour rule (adapted):
  1 hr/day  → docs, courses, deep tutorials
  Weekly    → build SOMETHING tiny
  Monthly   → teach/write one thing publicly
  Yearly    → one significant new domain

Degrees open the first door;
habits open every door after.`,
            "text",
            "Your real degree is your learning rate"
        ),

        heading("Giving Back — The Final Loop"),

        list([
            "Mentor juniors from your college — you'll clarify your own thinking.",
            "Contribute to open source — code that outlives any employer.",
            "Share your journey honestly — someone two steps behind needs your map.",
            "The network you build by helping returns as opportunities forever.",
        ]),

        heading("The 5-Year Frame"),

        code(
            `Year 1: Survive→Thrive — master the team, ship steadily
Year 2: Own — features end-to-end, mentor an intern
Year 3: Deepen — a specialty (backend perf, data, security)
Year 4: Lead — designs, reviews, interviews
Year 5: Choose again — senior IC, management,
        MS, or your own venture — from STRENGTH

Congratulations, graduate. 🎓
The syllabus ends; the learning doesn't.`,
            "text",
            "From BCA to wherever you point"
        ),

        keyPoints([
            "Three paths: job (default, paid learning), higher studies (for specific roles), startup (validated + runway).",
            "Job-first strengthens every later option with experience and income.",
            "Higher study toward a specific role = investment; as escape = expensive delay.",
            "Startup checklist: validated pain, paying users, 12-18 month runway, co-founder.",
            "5-hour learning habits + mentoring + open source compound beyond any degree.",
        ]),
  ],

{
    summary:
    "Decide the post-BCA path — job vs higher studies vs startup — with honest frameworks, lifelong learning habits, and a 5-year growth plan.",
        minutes: 12,
            tags: ["career", "higher-studies", "startup", "lifelong-learning", "graduation", "important"],

                mcqs: [
                    mcq(
                        "For most BCA graduates, the strongest default first move is:",
                        ["Immediate MBA", "A job — earning while building skills, strengthening every later option", "Waiting for a startup idea", "Gap year"],
                        1,
                        "Experience compounds: MS essays, startup insight, and clarity all grow from working."
                    ),
                    mcq(
                        "Higher studies pursued mainly to ESCAPE placement struggles is:",
                        ["An investment", "An expensive delay — pursue them toward a SPECIFIC role instead", "Free", "Always correct"],
                        1,
                        "Direction converts cost into investment; escape just postpones the problem."
                    ),
                    mcq(
                        "Before quitting for a startup, the non-negotiable checks include:",
                        ["A cool name and logo", "Personally validated problem + willingness-to-pay evidence + 12-18 months runway", "Quitting your job angrily", "Buying a domain"],
                        1,
                        "Validation and runway separate founders from daydreamers."
                    ),
                    mcq(
                        "The best long-term predictor of a tech career's ceiling is:",
                        ["First company's logo size", "Your sustained learning rate — habits outperform credentials", "College percentage", "City of work"],
                        1,
                        "Tech's half-life demands reinvestment; degrees open doors one time."
                    ),
                ],

                    questions: [
                        qa(
                            "Compare the three post-BCA paths — job, higher studies, and entrepreneurship — and recommend how a final-year student should choose.",
                            "JOB: zero cost — you're PAID to learn — plus structure, mentorship, and industry truth; 5-year outcome is typically senior-engineer band with real savings; ideal when you need skills, income, or simply don't yet know your specialty. HIGHER STUDIES (MCA/MSc/MS/M.Tech): 1-3 years and significant fees, justified ONLY when target roles demand credentials — research careers, ML-science positions, foreign-market entry; the diagnostic question: pursuing a SPECIFIC role (investment) versus escaping placement pressure (expensive delay — the market waits for nobody's master's). ENTREPRENEURSHIP: highest variance — the deepest learning available or a hard reset; viable only with a personally validated problem, evidence people would PAY, 12-18 months of personal runway, and ideally a complementary co-founder. Choosing framework: (1) audit finances and family obligations; (2) test affinity honestly — did OJT energize you (job), did concepts make you curious for depth (studies), did you keep seeing solutions everywhere (venture)? (3) default job-first when uncertain — because experience strengthens BOTH other paths later, while neither strengthens the job path much. The path chooses itself once you stop auditioning for all three.",
                            4
                        ),
                        qa(
                            "Design a 5-year compounding plan for a BCA graduate starting as a junior developer, including learning habits and community contribution.",
                            "Year 1 — Survive→Thrive: master the team's stack and deploy pipeline, ship small but steadily, build the daily 1-hour learning habit (docs, deep tutorials); goal: trusted reliability. Year 2 — Own: take features end-to-end (spec → deploy → monitor), begin mentoring an intern or junior, start one public output monthly (blog post or open-source PR); goal: visible ownership. Year 3 — Deepen: pick ONE specialty the market values — backend performance, data engineering, security — and go deep via a flagship side project plus internal work; goal: become the team's reference in that niche. Year 4 — Lead: drive designs, run code reviews, conduct interviews, present architecture decisions (ADRs); goal: influence beyond your tasks. Year 5 — Choose again from strength: senior IC track, management, part-time MS, or founding — each door opened by the compounding of four prior years. Cross-cutting habits: the 5-hour rule (daily learning, weekly building, monthly teaching), genuine mentoring of juniors (your thinking sharpens), and honest journey-sharing — the network built by helping returns as opportunities forever. The syllabus ends at BCA; the learning rate IS the career.",
                            4
                        ),
                    ],
  }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit2Topics = [
    finalSemesterStrategy,
    portfolioBrand,
    offersBonds,
    firstSalaryFinance,
    roadAhead,
];