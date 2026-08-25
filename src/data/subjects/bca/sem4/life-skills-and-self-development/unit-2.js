/* =========================================================
   BCA • SEM 5 • Life Skills and Self Development
   UNIT 2 — Interpersonal Dynamics, Leadership & Professional Excellence
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
   TOPIC 1 — Advanced Assertiveness & Nonviolent Communication
========================================================= */

const assertivenessNVC = createTopic(
    "assertiveness-and-nonviolent-communication",
    "Advanced Assertiveness & Nonviolent Communication",

    [
        definition(
            "Assertiveness",
            "Assertiveness is the interpersonal communication style in which an individual expresses their feelings, boundaries, rights, and needs directly, honestly, and respectfully, without being passive or aggressive."
        ),

        heading("The Four Communication Styles"),

        table(
            ["Style", "Behavioral Pattern", "Underlying Mindset", "Long-Term Impact"],
            [
                ["Passive", "Suppresses own opinions, avoids conflict, yields to others", "'I do not matter; only your needs matter.'", "Resentment, loss of self-worth, chronic exploitation"],
                ["Aggressive", "Dominates, interrupts, humiliates, ignores others' rights", "'Only I matter; your feelings are irrelevant.'", "Damaged trust, hostility, alienation, fractured teams"],
                ["Passive-Aggressive", "Indirect defiance, sarcastic remarks, subtle sabotage", "'I will pretend to agree, but undermine you later.'", "Toxic culture, hidden friction, passive resistance"],
                ["Assertive", "Direct, calm, empathetic, establishes firm boundaries", "'I matter, and you matter equally.'", "Mutual respect, psychological safety, healthy collaboration"],
            ]
        ),

        heading("The DESC Script for Assertive Boundary Setting"),

        table(
            ["Step", "Meaning", "Example Script"],
            [
                ["D — Describe", "State the objective, factual behavior without emotional judgment", "'Over the past week, you assigned three urgent pull requests after 7 PM...'"],
                ["E — Express", "State how the situation impacts your workflow or well-being", "'...which leaves me exhausted and compromises code review thoroughness.'"],
                ["S — Specify", "Clearly define the specific behavioral change requested", "'I request that all non-emergency review tasks be submitted before 4 PM.'"],
                ["C — Consequences", "State the positive outcome of adopting this change", "'This will allow me to provide detailed feedback and maintain system stability.'"],
            ]
        ),

        heading("Nonviolent Communication (NVC) by Marshall Rosenberg"),

        definition(
            "Nonviolent Communication",
            "A structured four-step communication framework designed to exchange information with empathy, eliminate blame, and resolve grievances collaboratively."
        ),

        steps([
            "1. Observation — State the concrete actions you observe, free of evaluation or judgment.",
            "2. Feeling — Express the honest emotional state evoked (e.g., worried, frustrated, hopeful).",
            "3. Need — Identify the core universal human need driving the emotion (e.g., clarity, respect, safety).",
            "4. Request — Propose a concrete, actionable, positive request without issuing demands.",
        ]),

        heading("Robert Cialdini's Principles of Ethical Persuasion"),

        list([
            "Reciprocity — People feel obligated to return favors and kindnesses given to them.",
            "Scarcity — Opportunities appear more valuable when availability is limited.",
            "Authority — People follow credible, knowledgeable, and certified domain experts.",
            "Consistency — People strive to align with their prior public commitments.",
            "Liking — People are easily persuaded by those who show warmth, similarities, and genuine compliments.",
            "Social Proof — People look to the actions and consensus of peers to guide their own choices.",
        ]),

        keyPoints([
            "Assertiveness balances self-advocacy with mutual respect for others.",
            "The DESC script structures professional boundary enforcement.",
            "Nonviolent Communication operates via: Observation → Feeling → Need → Request.",
            "Passive communication generates resentment; aggressive communication breeds alienation.",
            "Cialdini's persuasion principles should be used ethically to build alignment, not manipulate.",
        ]),
    ],

    {
        summary:
            "Explore the 4 communication styles, the DESC assertiveness script, Marshall Rosenberg's Nonviolent Communication (NVC), and Cialdini's principles of influence.",
        minutes: 13,
        tags: ["assertiveness", "nvc", "communication", "persuasion", "important"],

        mcqs: [
            mcq(
                "In the DESC script for assertive communication, what does 'S' stand for?",
                ["Scream", "Specify the desired change", "Surrender", "Silence"],
                1,
                "Specify clearly outlines the exact, concrete behavioral change being requested."
            ),
            mcq(
                "Which communication style involves indirect hostility and subtle workplace sabotage?",
                ["Passive", "Assertive", "Passive-Aggressive", "Empathetic"],
                2,
                "Passive-aggressive behavior displays covert resentment and indirect resistance."
            ),
            mcq(
                "The first step of Marshall Rosenberg's Nonviolent Communication (NVC) is:",
                ["State a demand", "Make an objective observation without judgment", "Express anger", "Blame the other person"],
                1,
                "NVC starts with an objective observation devoid of judgment or evaluation."
            ),
            mcq(
                "Which of Cialdini's persuasion principles explains why user testimonials increase software adoption?",
                ["Scarcity", "Social Proof", "Authority", "Liking"],
                1,
                "Social Proof relies on validation from peers and other users to build trust."
            ),
        ],

        questions: [
            qa(
                "Explain the four communication styles (Passive, Aggressive, Passive-Aggressive, Assertive) and their impacts on team culture.",
                "Passive communicators fail to state their boundaries, resulting in personal burnout, exploitation, and unaddressed resentment. Aggressive communicators dominate and humiliate others, destroying trust and inducing fear. Passive-Aggressive communicators use sarcasm, intentional delays, and subtle sabotage, creating a toxic, suspicious workplace. Assertive communicators speak openly, empathetically, and directly; they stand up for their rights while respecting others, creating an environment of mutual trust, psychological safety, and clear alignment.",
                4
            ),
            qa(
                "Detail the four steps of Nonviolent Communication (NVC) with an engineering example.",
                "Nonviolent Communication follows four steps: (1) Observation: 'When our production deployment schedule was pushed back three times this week without notice...' (2) Feeling: '...I felt stressed and worried about meeting our client commitments...' (3) Need: '...because I need predictability, clear team coordination, and respect for our agreed timeline.' (4) Request: 'Could we hold a 10-minute standup every morning at 10 AM to confirm deployment readiness before scheduling releases?' This focuses on collaboration rather than blame.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — Conflict Resolution, Negotiation & Mediation
========================================================= */

const conflictNegotiation = createTopic(
    "conflict-resolution-and-negotiation",
    "Conflict Resolution, Negotiation & Mediation",

    [
        definition(
            "Conflict Resolution",
            "The informal or formal process by which two or more conflicting parties reach a peaceful, mutually acceptable agreement to resolve grievances, disputes, or operational differences."
        ),

        heading("The Thomas-Kilmann Conflict Mode Instrument (TKI)"),

        text(
            "The TKI model identifies five distinct conflict-handling styles based on two dimensions: Assertiveness (satisfying own concerns) and Cooperativeness (satisfying others' concerns):"
        ),

        table(
            ["Conflict Style", "Assertiveness / Cooperativeness", "Strategy", "When Appropriate"],
            [
                ["Competing", "High Assertiveness / Low Cooperativeness", "'My way or the highway' (Win-Lose)", "Emergency crises, safety violations, enforcing non-negotiable security protocols"],
                ["Accommodating", "Low Assertiveness / High Cooperativeness", "'Whatever you want' (Lose-Win)", "When the issue matters far more to the other party; to preserve relationships"],
                ["Avoiding", "Low Assertiveness / Low Cooperativeness", "'Let's ignore it' (Lose-Lose)", "When tempers are heated and cooling-off time is needed; minor trivial matters"],
                ["Compromising", "Moderate Assertiveness / Moderate Cooperativeness", "'Split the difference' (Partial Win-Lose)", "When under tight deadlines for temporary settlements of equal-power parties"],
                ["Collaborating", "High Assertiveness / High Cooperativeness", "'Win-Win Integration' (Win-Win)", "Complex strategic problems where both parties' long-term concerns are critical"],
            ]
        ),

        heading("Principled Negotiation (Harvard Negotiation Project)"),

        text(
            "Developed by Roger Fisher and William Ury, Principled Negotiation focuses on four core pillars for mutually beneficial outcomes:"
        ),

        list([
            "1. Separate the People from the Problem — Attack the issue collaboratively without attacking personal character.",
            "2. Focus on Interests, Not Positions — Uncover the underlying needs and motives beneath rigid surface demands.",
            "3. Invent Options for Mutual Gain — Brainstorm win-win creative solutions before deciding on final terms.",
            "4. Insist on Objective Criteria — Base agreements on verifiable external standards (e.g., market rate, industry security benchmarks, legal precedents).",
        ]),

        heading("Key Negotiation Terminology"),

        table(
            ["Term", "Definition", "Example"],
            [
                ["BATNA", "Best Alternative to a Negotiated Agreement (Your best fallback if talks fail)", "Having a backup job offer of $80k when negotiating for $90k elsewhere"],
                ["ZOPA", "Zone of Possible Agreement (The overlapping range between buyer/seller limits)", "Employer willing to pay $80k-$95k; candidate willing to accept $85k-$100k (ZOPA: $85k-$95k)"],
                ["Reservation Price", "The absolute walk-away threshold below which you will reject a deal", "Refusing any employment offer under $75k"],
            ]
        ),

        heading("Third-Party Mediation & De-escalation"),

        steps([
            "Establish ground rules: uninterrupted speaking, respectful language, confidentiality.",
            "Allow each party to state their perspective and core interests without cross-talk.",
            "Identify common shared objectives (e.g., delivering a successful product).",
            "Brainstorm potential compromise options collaboratively.",
            "Formalise a written, time-bound Action Plan with clear accountabilities.",
        ]),

        keyPoints([
            "The Thomas-Kilmann model categorises conflict into Competing, Accommodating, Avoiding, Compromising, and Collaborating.",
            "Principled Negotiation separates people from problems and focuses on interests over positions.",
            "BATNA defines your leverage and walk-away fallback option.",
            "ZOPA is the overlapping zone where a mutually beneficial agreement is possible.",
            "Effective mediation de-escalates emotional friction into objective problem solving.",
        ]),
    ],

    {
        summary:
            "Master the Thomas-Kilmann Conflict Model, Harvard Principled Negotiation, BATNA, ZOPA, and structured mediation strategies.",
        minutes: 13,
        tags: ["conflict-resolution", "negotiation", "batna", "zopa", "tki", "important"],

        mcqs: [
            mcq(
                "What does BATNA stand for in negotiation theory?",
                [
                    "Best Alternative to a Negotiated Agreement",
                    "Basic Action Toward Non-Aggression",
                    "Broad Analysis of Total Network Assets",
                    "Better Agreement Through Neutral Arbitration",
                ],
                0,
                "BATNA is the Best Alternative to a Negotiated Agreement."
            ),
            mcq(
                "Which Thomas-Kilmann conflict mode is high in assertiveness and high in cooperativeness?",
                ["Avoiding", "Competing", "Collaborating", "Accommodating"],
                2,
                "Collaborating seeks a true win-win solution where all parties' concerns are met."
            ),
            mcq(
                "The overlapping range between the buyer's maximum price and the seller's minimum price is:",
                ["BATNA", "ZOPA", "Deadlock Zone", "Reservation Point"],
                1,
                "ZOPA (Zone of Possible Agreement) is the bargaining space where an agreement is feasible."
            ),
            mcq(
                "According to Fisher & Ury's Principled Negotiation, one should focus on:",
                ["Fixed Positions", "Underlying Interests", "Personal attacks", "Winning at all costs"],
                1,
                "Principled negotiation focuses on deep underlying interests rather than surface positions."
            ),
        ],

        questions: [
            qa(
                "Explain the five conflict-handling modes of the Thomas-Kilmann Conflict Model (TKI).",
                "The Thomas-Kilmann model evaluates conflict handling along two axes: Assertiveness and Cooperativeness. (1) Competing (High Assertiveness, Low Cooperativeness): A win-lose approach useful in critical emergencies where decisive action is essential. (2) Accommodating (Low Assertiveness, High Cooperativeness): A lose-win mode where one party yields to protect relationships. (3) Avoiding (Low Assertiveness, Low Cooperativeness): A lose-lose mode used to allow tempers to cool or when issues are trivial. (4) Compromising (Moderate Assertiveness and Cooperativeness): A give-and-take mode to reach quick, temporary agreements. (5) Collaborating (High Assertiveness, High Cooperativeness): A win-win mode where parties integrate their insights to create novel, mutually beneficial solutions.",
                4
            ),
            qa(
                "What are BATNA and ZOPA? Illustrate their importance in salary negotiations.",
                "BATNA (Best Alternative to a Negotiated Agreement) is the strongest fallback option a negotiator possesses if current talks break down. For instance, if an engineer already holds a confirmed job offer of $85k, that offer serves as their BATNA. ZOPA (Zone of Possible Agreement) is the overlapping range where both parties can agree. If the company is willing to pay up to $95k, and the candidate's minimum acceptable salary is $85k, the ZOPA is $85k–$95k. A strong BATNA gives the negotiator confidence to walk away from offers below their reservation threshold, ensuring fair compensation.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — Situational Leadership, Team Dynamics & Delegation
========================================================= */

const leadershipDynamics = createTopic(
    "situational-leadership-team-dynamics",
    "Situational Leadership, Team Dynamics & Delegation",

    [
        definition(
            "Situational Leadership",
            "A leadership model developed by Paul Hersey and Ken Blanchard asserting that no single leadership style is optimal; effective leaders adapt their style to the developmental readiness and competence of the team."
        ),

        heading("The Hersey-Blanchard Situational Leadership Model"),

        table(
            ["Development Level", "Follower Readiness", "Leadership Style", "Behavior Focus"],
            [
                ["D1 (Enthusiastic Beginner)", "Low Competence / High Commitment", "S1: Directing (Telling)", "High Task focus / Low Relationship focus: Clear instructions, close supervision"],
                ["D2 (Disillusioned Learner)", "Some Competence / Low Commitment", "S2: Coaching (Selling)", "High Task focus / High Relationship focus: Explaining reasons, offering encouragement"],
                ["D3 (Capable but Cautious)", "High Competence / Variable Commitment", "S3: Supporting (Participating)", "Low Task focus / High Relationship focus: Shared decisions, building self-reliance"],
                ["D4 (Self-Reliant Achiever)", "High Competence / High Commitment", "S4: Delegating", "Low Task focus / Low Relationship focus: Autonomy, high ownership, minimal oversight"],
            ]
        ),

        heading("Daniel Goleman's 6 Emotional Leadership Styles"),

        table(
            ["Style", "Modus Operandi", "Best When Applied"],
            [
                ["Visionary (Authoritative)", "Inspires by pointing toward a shared grand vision", "When changes require a new direction or clear roadmap"],
                ["Coaching", "Develops people for long-term future capabilities", "To help employees build enduring strengths"],
                ["Affiliative", "Creates emotional harmony and strong interpersonal bonds", "To heal rifts in a fractured team or motivate during high stress"],
                ["Democratic", "Builds consensus through broad team participation", "To buy into decisions or gather valuable input from competent peers"],
                ["Pacesetting", "Sets exceptionally high standards and models excellence", "To get fast results from a highly competent and motivated team"],
                ["Coercive (Commanding)", "Demands immediate compliance with orders", "In emergencies, crisis turnaround, or handling disruptive employees"],
            ]
        ),

        heading("The Art of Effective Delegation"),

        steps([
            "Define the task outcome clearly, including expected deliverables and performance standards.",
            "Select the right team member matching their skill level (D1–D4 readiness).",
            "Grant commensurate authority and resources along with the responsibility.",
            "Establish checkpoints and milestones without micromanaging.",
            "Provide constructive feedback, acknowledge effort, and share credit for success.",
        ]),

        heading("Overcoming Barriers to Delegation"),

        list([
            "'I can do it faster myself' Fallacy — Fails to realize that teaching others scales long-term team capacity.",
            "Fear of Losing Control — Mitigated by establishing clear milestone reviews and automated unit tests.",
            "Insecurity — Exceptional leaders find satisfaction in helping team members step up and surpass them.",
        ]),

        keyPoints([
            "Situational leadership matches management style to follower competence and commitment.",
            "Goleman's 6 leadership styles leverage emotional intelligence for varied organizational contexts.",
            "Effective delegation requires transferring authority, not just dumping tasks.",
            "Micromanagement destroys creativity, morale, and team ownership.",
            "Leaders build scalable capacity by coaching others to operate autonomously.",
        ]),
    ],

    {
        summary:
            "Understand the Hersey-Blanchard Situational Leadership model, Goleman's 6 styles, the delegation process, and team empowerment.",
        minutes: 13,
        tags: ["leadership", "situational-leadership", "delegation", "teamwork", "management", "important"],

        mcqs: [
            mcq(
                "In the Hersey-Blanchard model, which style fits a follower with High Competence and High Commitment (D4)?",
                ["Directing (S1)", "Coaching (S2)", "Supporting (S3)", "Delegating (S4)"],
                3,
                "D4 followers excel under S4 Delegating, which grants autonomy and ownership."
            ),
            mcq(
                "Which leadership style is most appropriate during a severe corporate crisis requiring immediate compliance?",
                ["Democratic", "Affiliative", "Coercive (Commanding)", "Coaching"],
                2,
                "Coercive/Commanding leadership demands immediate compliance during crisis situations."
            ),
            mcq(
                "A major mistake managers make when delegating is:",
                ["Providing clear milestones", "Delegating responsibility without granting matching authority", "Recognising good performance", "Selecting competent staff"],
                1,
                "Delegating responsibility without the authority to make decisions paralyzes team members."
            ),
            mcq(
                "Which Goleman leadership style focuses on building consensus through participation?",
                ["Democratic", "Pacesetting", "Visionary", "Coercive"],
                0,
                "The Democratic style values input and achieves consensus through collaboration."
            ),
        ],

        questions: [
            qa(
                "Explain the Hersey-Blanchard Situational Leadership Model across its four developmental stages.",
                "The Hersey-Blanchard model asserts that leaders must adapt their style based on follower maturity: (1) S1 Directing: For D1 learners (low competence, high commitment), providing clear, structured instructions and close supervision. (2) S2 Coaching: For D2 learners (some competence, low commitment due to difficulties), balancing task guidance with two-way communication and emotional encouragement. (3) S3 Supporting: For D3 performers (high competence, variable confidence), focusing on shared decision-making and empowering self-reliance. (4) S4 Delegating: For D4 achievers (high competence, high commitment), providing full autonomy and strategic goals while stepping back from day-to-day oversight.",
                4
            ),
            qa(
                "What are the key steps for effective delegation, and how can managers avoid micromanagement?",
                "Effective delegation involves: (1) Clearly defining task objectives and acceptance criteria. (2) Selecting team members based on their developmental readiness. (3) Granting the authority and resources needed to execute the task. (4) Agreeing on specific review milestones. To avoid micromanagement, leaders should focus on outcomes rather than dictating step-by-step processes, encourage autonomous problem-solving, and view minor mistakes as coaching opportunities.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — Professional Ethics, Integrity & Workplace Standards
========================================================= */

const professionalEthics = createTopic(
    "professional-ethics-and-workplace-standards",
    "Professional Ethics, Integrity & Workplace Standards",

    [
        definition(
            "Professional Ethics",
            "The codified moral principles, values, and behavioral standards governing the conduct of professionals in their relationships with clients, colleagues, employers, and society."
        ),

        heading("ACM / IEEE Software Engineering Code of Ethics"),

        text(
            "The Association for Computing Machinery (ACM) and IEEE-CS established eight core ethical principles for computer professionals:"
        ),

        table(
            ["Principle", "Ethical Duty", "Practical Scenario"],
            [
                ["1. Public", "Software shall be designed consistently with public safety, health, and welfare", "Refusing to release software with known safety-critical medical sensor bugs"],
                ["2. Client & Employer", "Act in the best interests of client and employer, consistent with public interest", "Protecting company trade secrets and respecting confidential client data"],
                ["3. Product", "Strive for high quality, acceptable costs, and rigorous testing", "Executing comprehensive security auditing prior to production deployments"],
                ["4. Judgment", "Maintain integrity and independence in professional evaluation", "Declining kickbacks or bribes from third-party vendor selection processes"],
                ["5. Management", "Promote ethical management practices in software development", "Refusing to demand unrealistic crunch hours that damage engineer mental health"],
                ["6. Profession", "Advance the integrity and reputation of the profession", "Mentoring newcomers and contributing to open, ethical knowledge sharing"],
                ["7. Colleagues", "Be fair, supportive, and respectful of colleagues", "Giving full attribution to peers' code contributions and designs"],
                ["8. Self", "Participate in lifelong learning and ethical practice", "Continuously learning data privacy and algorithmic fairness standards"],
            ]
        ),

        heading("Ethical Dilemmas in Technology"),

        list([
            "Data Privacy vs Surveillance Capitalism — Balancing business user analytics with user data privacy rights (e.g., GDPR, CCPA).",
            "Algorithmic Bias — Ensuring AI hiring, credit scoring, or facial recognition systems do not discriminate against minorities.",
            "Whistleblowing — Reporting illegal, dangerous, or fraudulent corporate activities to public authorities after internal channels fail.",
            "Intellectual Property (IP) — Respecting open-source licenses (GPL, MIT, Apache) and avoiding unauthorized proprietary code reuse.",
        ]),

        heading("Corporate Social Responsibility (CSR) & ESG"),

        table(
            ["Pillar", "Focus Area", "Tech Industry Example"],
            [
                ["Environmental (E)", "Carbon footprint, e-waste, energy efficiency", "Powering data centres with 100% renewable wind and solar energy"],
                ["Social (S)", "Human rights, diversity, community investment", "Funding coding bootcamps for underprivileged rural students"],
                ["Governance (G)", "Transparent accounting, anti-bribery, ethics oversight", "Independent board oversight and comprehensive annual cybersecurity audits"],
            ]
        ),

        keyPoints([
            "ACM/IEEE code establishes that public safety and welfare supersede employer interests.",
            "Computer scientists have an ethical duty to audit software for security flaws and algorithmic bias.",
            "Whistleblowing is an ethical mechanism of last resort for exposing public harm.",
            "Intellectual property and open-source licenses must be respected strictly.",
            "ESG principles guide modern tech companies toward sustainable, socially responsible practices.",
        ]),
    ],

    {
        summary:
            "Learn the ACM/IEEE Software Engineering Code of Ethics, ethical dilemmas in AI/data privacy, intellectual property, and CSR/ESG standards.",
        minutes: 13,
        tags: ["ethics", "acm-code", "data-privacy", "whistleblowing", "csr", "important"],

        mcqs: [
            mcq(
                "According to the ACM/IEEE Code of Ethics, whose interest holds the highest priority?",
                ["The Employer", "The Shareholder", "The Public Health, Safety, and Welfare", "The Individual Engineer"],
                2,
                "Public health, safety, and welfare take precedence over all commercial interests."
            ),
            mcq(
                "Exposing illegal, fraudulent, or hazardous activities within an organization to authorities is known as:",
                ["Industrial Espionage", "Whistleblowing", "Social Engineering", "Insubordination"],
                1,
                "Whistleblowing is the ethical disclosure of organizational wrongdoing to protect the public."
            ),
            mcq(
                "Under the ESG framework, data centre renewable energy adoption falls under:",
                ["Environmental", "Social", "Governance", "Economic"],
                0,
                "Renewable energy and energy efficiency fall under the Environmental pillar of ESG."
            ),
            mcq(
                "Copying proprietary source code from a former employer into a new project is a violation of:",
                ["Intellectual Property rights", "Network security", "Agile methodology", "Pair programming"],
                0,
                "Using code without authorization violates intellectual property laws and trade secret protections."
            ),
        ],

        questions: [
            qa(
                "Explain the fundamental principles of the ACM/IEEE Software Engineering Code of Ethics.",
                "The ACM/IEEE Software Engineering Code of Ethics establishes eight core principles: (1) Public: Software engineers shall act consistently with public safety, health, and welfare. (2) Client and Employer: Act in the best interest of clients and employers, provided it does not harm the public. (3) Product: Ensure software products meet the highest professional standards through testing. (4) Judgment: Maintain independence and integrity in evaluations. (5) Management: Lead teams with ethical management practices. (6) Profession: Uphold the reputation of software engineering. (7) Colleagues: Treat peers fairly and support their growth. (8) Self: Commit to lifelong professional development and ethical awareness.",
                4
            ),
            qa(
                "What constitutes an ethical dilemma in modern AI? Discuss algorithmic bias and data privacy.",
                "An ethical dilemma occurs when technological choices create tension between moral values: (1) Algorithmic Bias: Machine learning models trained on historical data can perpetuate societal discrimination (e.g., automated hiring algorithms discriminating against female applicants or predictive policing models targeting minority neighborhoods). Engineers have an ethical duty to audit training datasets for fairness. (2) Data Privacy: Systems that harvest vast amounts of personal user data without informed consent compromise individual privacy for ad targeting. Developers must implement privacy-by-design, data minimization, and encryption standards (such as GDPR).",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 5 — Lifelong Learning, Personal Branding & Career Longevity
========================================================= */

const careerLongevity = createTopic(
    "lifelong-learning-and-career-longevity",
    "Lifelong Learning, Personal Branding & Career Longevity",

    [
        definition(
            "Growth Mindset",
            "A concept pioneered by Dr. Carol Dweck stating that human intelligence, talents, and skills can be developed through deliberate practice, resilience, and learning from failure, contrasted with a Fixed Mindset."
        ),

        heading("Growth Mindset vs Fixed Mindset"),

        table(
            ["Dimension", "Fixed Mindset", "Growth Mindset"],
            [
                ["Belief about Talent", "'Intelligence is static; you are either born with it or not.'", "'Skills can be cultivated through deliberate practice and mentorship.'"],
                ["Response to Failure", "Feels defeated, blames others, gives up easily", "Views failure as informative data and an opportunity to iterate"],
                ["Handling Challenges", "Avoids tough challenges to protect ego from failure", "Embraces hard problems to stretch existing capabilities"],
                ["Reaction to Criticism", "Feels personally attacked and becomes defensive", "Extracts constructive lessons from feedback"],
            ]
        ),

        heading("The T-Shaped Professional Model"),

        code(
            `         Broad General Knowledge across Multiple Domains (Horizontal Bar)
[ UI/UX ] [ Cloud Basics ] [ Product Strategy ] [ DevOps ] [ Communication ]
                                |
                                |  Deep Domain Expertise
                                |  in One Core Field
                                |  (Vertical Stem)
                                V
                     [ Full-Stack React & Node.js ]`,
            "text",
            "T-Shaped Professional Profile"
        ),

        heading("Personal Branding for Tech Professionals"),

        steps([
            "Curate an active GitHub profile with well-documented, clean, open-source repositories.",
            "Optimise your LinkedIn profile with quantifiable achievements, technical articles, and recommendations.",
            "Write technical blog posts on platforms like Dev.to or Medium breaking down complex topics.",
            "Participate in tech hackathons, open-source communities, and regional tech meetups.",
            "Seek out mentorship from senior leaders and pay it forward by mentoring juniors.",
        ]),

        heading("Lifelong Learning: Learn, Unlearn & Relearn"),

        text(
            "Futurist Alvin Toffler noted: 'The illiterate of the 21st century will not be those who cannot read and write, but those who cannot learn, unlearn, and relearn.' In the fast-evolving tech landscape, legacy frameworks quickly become obsolete, making continuous upskilling the single most critical factor for career longevity."
        ),

        note(
            "Reputation is what people say about you when you leave the room. Build a brand grounded in technical reliability, ethical consistency, and collaborative generosity.",
            "tip",
            "Professional Reputation"
        ),

        keyPoints([
            "Carol Dweck's Growth Mindset reframes setbacks as stepping stones to mastery.",
            "T-shaped professionals combine broad interdisciplinary literacy with deep specialized skill.",
            "Personal branding is demonstrated through verifiable public work: open source, technical writing, and community leadership.",
            "Career longevity requires the humility to unlearn outdated paradigms and adopt new technologies.",
            "Networking is built on providing value and building genuine relationships, not transactional self-promotion.",
        ]),
    ],

    {
        summary:
            "Understand Carol Dweck's Growth Mindset, T-shaped skill architectures, technical personal branding, and strategies for lifelong career adaptability.",
        minutes: 12,
        tags: ["growth-mindset", "lifelong-learning", "personal-branding", "career-growth", "important"],

        mcqs: [
            mcq(
                "According to Carol Dweck, a Growth Mindset is characterised by:",
                ["The belief that talent is fixed at birth", "The conviction that skills develop through effort and learning", "Avoiding all difficult challenges", "Ignoring constructive criticism"],
                1,
                "A Growth Mindset views abilities as developable through deliberate effort and learning."
            ),
            mcq(
                "A 'T-Shaped Professional' possesses:",
                ["Only shallow knowledge across all fields", "Deep mastery in one core domain combined with broad literacy across related fields", "Expertise only in testing", "Zero technical skills"],
                1,
                "T-shaped professionals combine deep vertical expertise with broad horizontal literacy."
            ),
            mcq(
                "According to Alvin Toffler, 21st-century literacy requires the ability to:",
                ["Memorise legacy documentation", "Learn, unlearn, and relearn", "Work 80 hours a week", "Avoid all technological changes"],
                1,
                "Toffler emphasised continuous learning, unlearning obsolete ideas, and relearning new ones."
            ),
            mcq(
                "Which of the following is the most effective element of a technical personal brand?",
                ["Posting inflated claims on social media", "Demonstrating open-source contributions and technical articles", "Keeping all code secret", "Avoiding peer interaction"],
                1,
                "Publicly verifiable open-source projects and insightful writing demonstrate authentic competence."
            ),
        ],

        questions: [
            qa(
                "Compare a Growth Mindset with a Fixed Mindset. How does this distinction affect a software engineer's career?",
                "A Fixed Mindset assumes that intelligence and coding aptitude are static traits. Engineers with a fixed mindset avoid unfamiliar technical frameworks, fear challenging debugging tasks, take code reviews personally, and feel threatened by talented peers. In contrast, a Growth Mindset views technical capability as a muscle developed through deliberate practice. Growth-minded engineers embrace complex architectural problems, treat production bugs as learning opportunities, value constructive feedback from peer reviews, and proactively upskill in new technologies, sustaining long-term career growth.",
                4
            ),
            qa(
                "What is a 'T-Shaped Professional'? Why is this model ideal for modern technology teams?",
                "A T-shaped professional combines broad horizontal literacy with deep vertical expertise. The horizontal bar represents a working understanding of complementary domains (such as UI/UX design, cloud architecture, product management, automated testing, and business communication). The vertical stem represents deep, world-class mastery in a primary discipline (such as Full-Stack JavaScript or Cyber Security). This structure is ideal because it enables engineers to execute complex technical tasks autonomously while collaborating smoothly across cross-functional product teams.",
                4
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit2Topics = [
    assertivenessNVC,
    conflictNegotiation,
    leadershipDynamics,
    professionalEthics,
    careerLongevity,
];