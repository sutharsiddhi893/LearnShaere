/* =========================================================
   BCA • SEM 5 • Life Skills and Self Development
   UNIT 1 — Self-Mastery, Cognitive Agility & Emotional Resilience
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
   TOPIC 1 — Self-Concept, Self-Esteem & Core Values
========================================================= */

const selfConceptValues = createTopic(
    "self-concept-self-esteem-and-values",
    "Self-Concept, Self-Esteem & Core Values",

    [
        definition(
            "Self-Concept",
            "Self-concept is the overarching perceptual schema an individual holds about their own identity, capabilities, personality traits, and social roles. It answers the fundamental question: 'Who am I?'"
        ),

        definition(
            "Core Values",
            "Core values are deeply ingrained guiding principles and non-negotiable beliefs that dictate behaviour, decision-making, relationship choices, and life priorities."
        ),

        heading("Carl Rogers' Theory of Self"),

        text(
            "Humanistic psychologist Carl Rogers proposed that self-concept is composed of three interconnected components:"
        ),

        table(
            ["Component", "Description", "Example"],
            [
                ["Self-Image", "The view you currently have of yourself", "Seeing oneself as a dedicated programmer"],
                ["Self-Esteem", "The value and self-worth you place on yourself", "Feeling confident in one's capacity to learn"],
                ["Ideal Self", "The person you aspire and wish to become", "Aspiring to be an ethical tech leader"],
            ]
        ),

        heading("Congruence vs Incongruence"),

        list([
            "Congruence — High overlap between the Real Self and the Ideal Self, leading to authenticity, high self-worth, and mental peace.",
            "Incongruence — Large mismatch between who a person actually is and who they wish to be, creating anxiety, defensive behaviours, and low self-esteem.",
        ]),

        heading("Hierarchy of Core Human Values"),

        table(
            ["Value Domain", "Core Principle", "Practical Workplace Application"],
            [
                ["Integrity", "Upholding honesty even when unobserved", "Writing clean code without unacknowledged plagiarised snippets"],
                ["Accountability", "Taking full ownership of outcomes", "Acknowledging software deployment bugs without blaming peers"],
                ["Empathy", "Understanding the emotional context of others", "Designing accessible user interfaces for disabled users"],
                ["Courage", "Acting rightly despite fear or opposition", "Reporting algorithmic bias or data privacy breaches"],
                ["Respect", "Valuing the dignity and rights of all humans", "Honouring diverse cultural viewpoints in global teams"],
            ]
        ),

        heading("Overcoming Imposter Syndrome"),

        definition(
            "Imposter Syndrome",
            "A psychological pattern where high-achieving individuals doubt their accomplishments and harbour an internalised fear of being exposed as a fraud."
        ),

        steps([
            "Acknowledge and normalise feelings of doubt as a natural byproduct of learning.",
            "Separate factual competence from fleeting emotional self-doubt.",
            "Maintain a written 'Victory Journal' tracking verifiable technical and personal milestones.",
            "Reframe failure as informative feedback rather than personal inadequacy.",
            "Seek mentorship from experienced professionals who share their own vulnerabilities.",
        ]),

        note(
            "Self-esteem is not built by external validation or compliments; it is earned internally through daily integrity, self-discipline, and self-honesty.",
            "tip",
            "Internal Locus of Control"
        ),

        keyPoints([
            "Self-concept consists of Self-Image, Self-Esteem, and the Ideal Self.",
            "Congruence occurs when one's real actions align closely with their ideal aspirations.",
            "Core values serve as an internal compass during complex ethical dilemmas.",
            "Imposter syndrome can be dismantled through evidence-based tracking and growth mindsets.",
            "High self-esteem enables courageous risk-taking and psychological safety.",
        ]),
    ],

    {
        summary:
            "Understand self-concept, Carl Rogers' congruence model, personal value hierarchies, and methods to overcome imposter syndrome.",
        minutes: 12,
        tags: ["self-concept", "self-esteem", "core-values", "imposter-syndrome", "important"],

        mcqs: [
            mcq(
                "According to Carl Rogers, a state of congruence exists when:",
                [
                    "The real self is completely suppressed",
                    "There is high alignment between the real self and ideal self",
                    "A person seeks total external validation",
                    "The ideal self has no ambition",
                ],
                1,
                "Congruence is achieved when the actual self-image aligns closely with the ideal self."
            ),
            mcq(
                "Which of the following is NOT one of Carl Rogers' three components of self-concept?",
                ["Self-Image", "Self-Esteem", "Ideal Self", "Subconscious Ego"],
                3,
                "Rogers' model comprises Self-Image, Self-Esteem, and Ideal Self."
            ),
            mcq(
                "The psychological phenomenon where individuals feel undeserving of their success is called:",
                ["Dunning-Kruger Effect", "Imposter Syndrome", "Confirmation Bias", "Halo Effect"],
                1,
                "Imposter syndrome causes competent individuals to feel like intellectual frauds."
            ),
            mcq(
                "Which value is demonstrated when an engineer admits a critical system mistake proactively?",
                ["Complacency", "Accountability", "Egotism", "Secrecy"],
                1,
                "Accountability involves taking full responsibility for one's actions and outcomes."
            ),
        ],

        questions: [
            qa(
                "Explain Carl Rogers' Theory of Self and the concept of Congruence vs Incongruence.",
                "Carl Rogers formulated that self-concept consists of three parts: (1) Self-Image: how we perceive our physical, intellectual, and social traits; (2) Self-Esteem: how much value, approval, and respect we give ourselves; and (3) Ideal Self: the qualities and status we aspire to attain. When a person's Real Self and Ideal Self have a large overlap, they experience 'Congruence', fostering psychological well-being, confidence, and authenticity. Conversely, when a wide gap exists between real performance and unrealistic ideal standards, 'Incongruence' results, leading to distress, anxiety, and defensive rationalisations.",
                4
            ),
            qa(
                "What is Imposter Syndrome? Detail four practical strategies to overcome it.",
                "Imposter Syndrome is an internal psychological state where an individual feels inadequate and doubts their skills despite objective evidence of competence. To overcome it: (1) Maintain a Fact-Based Portfolio: Document achievements, code contributions, and certifications to review during moments of self-doubt. (2) Reframe Failure: View errors as learning iterations rather than proof of incompetence. (3) Talk to Mentors: Sharing doubts with trusted seniors reveals that self-doubt is common across all expertise levels. (4) Separate Feeling from Fact: Remind yourself that 'feeling unprepared' is not equivalent to 'being incompetent.'",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — Critical Thinking & Cognitive Biases
========================================================= */

const criticalThinking = createTopic(
    "critical-thinking-and-cognitive-biases",
    "Critical Thinking & Cognitive Biases",

    [
        definition(
            "Critical Thinking",
            "Critical thinking is the disciplined, self-directed, and evidence-based process of actively conceptualising, analysing, synthesising, and evaluating information to reach a rational, unbiased judgment."
        ),

        heading("The Six Thinking Hats (Edward de Bono)"),

        text(
            "The Six Thinking Hats technique is a cognitive framework designed to encourage multi-perspective parallel thinking and eliminate biased argumentation:"
        ),

        table(
            ["Hat Color", "Focus & Thinking Mode", "Key Question Asked"],
            [
                ["White Hat", "Data, neutral facts and objective metrics", "'What verifiable data do we have, and what is missing?'"],
                ["Red Hat", "Emotions, gut feelings, intuition and instincts", "'What is my immediate emotional reaction to this proposal?'"],
                ["Black Hat", "Caution, risk assessment, weaknesses and fatal flaws", "'What could go wrong, and what are the severe risks?'"],
                ["Yellow Hat", "Optimism, benefits, value proposition and feasibility", "'What are the potential upsides and high-value payoffs?'"],
                ["Green Hat", "Creativity, alternatives, innovation and out-of-the-box ideas", "'What novel solutions have we not yet explored?'"],
                ["Blue Hat", "Process control, metacognition, agendas and synthesis", "'Are we following the right decision-making procedure?'"],
            ]
        ),

        heading("Common Cognitive Biases and Fallacies"),

        table(
            ["Cognitive Bias", "Psychological Mechanism", "Real-World Impact"],
            [
                ["Confirmation Bias", "Searching only for data that validates pre-existing hypotheses while ignoring contradictory facts", "Ignoring benchmark data showing a chosen database architecture performs poorly"],
                ["Anchoring Bias", "Relying disproportionately on the first piece of information encountered", "Accepting an initial inaccurate software project timeline based on a first guess"],
                ["Sunk Cost Fallacy", "Continuing an unproductive endeavor simply because of unrecoverable past investments", "Refusing to abandon a failing legacy codebase after spending 6 months on it"],
                ["Dunning-Kruger Effect", "Cognitive bias where beginners overestimate their expertise while experts underestimate theirs", "A junior coder underestimating the security complexities of building authentication from scratch"],
                ["Halo Effect", "Allowing a single positive trait in someone to influence judgment of unrelated skills", "Assuming an articulate speaker must also be an exceptional system architect"],
            ]
        ),

        heading("The IDEAL Problem-Solving Cycle"),

        steps([
            "I — Identify the root problem rather than just observing superficial symptoms.",
            "D — Define and represent the problem constraints, boundaries, and expected end-state.",
            "E — Explore potential algorithmic and creative strategies without premature judgment.",
            "A — Act by implementing the most viable and cost-effective solution systematically.",
            "L — Look back and evaluate the actual outcome against original success criteria.",
        ]),

        keyPoints([
            "Critical thinking requires questioning underlying assumptions and validating evidence.",
            "Edward de Bono's Six Thinking Hats enables balanced, multi-angle group decisions.",
            "Cognitive biases are systemic thinking errors that lead to flawed engineering decisions.",
            "The Sunk Cost Fallacy leads to wasted time on unviable architectures.",
            "The IDEAL framework structures problem-solving from root-cause identification to review.",
        ]),
    ],

    {
        summary:
            "Explore critical thinking methods, Edward de Bono's Six Thinking Hats, widespread cognitive biases, and structured problem-solving cycles.",
        minutes: 13,
        tags: ["critical-thinking", "six-thinking-hats", "cognitive-biases", "problem-solving", "important"],

        mcqs: [
            mcq(
                "In Edward de Bono's Six Thinking Hats, which hat represents critical risk analysis and caution?",
                ["Yellow Hat", "Red Hat", "Black Hat", "Green Hat"],
                2,
                "The Black Hat evaluates risks, flaws, safety issues, and drawbacks."
            ),
            mcq(
                "Refusing to cancel a failing software project because $50,000 has already been spent is an example of:",
                ["Anchoring Bias", "Sunk Cost Fallacy", "Halo Effect", "Hindsight Bias"],
                1,
                "The Sunk Cost Fallacy occurs when past unrecoverable investments dictate future irrational actions."
            ),
            mcq(
                "The tendency to search only for information that confirms our existing beliefs is:",
                ["Confirmation Bias", "Dunning-Kruger Effect", "Availability Heuristic", "Actor-Observer Bias"],
                0,
                "Confirmation bias filters out contradictory evidence in favor of preferred opinions."
            ),
            mcq(
                "In the IDEAL problem-solving framework, what does 'E' stand for?",
                ["Eliminate errors", "Explore possible strategies", "Execute code", "Evaluate outputs"],
                1,
                "IDEAL: Identify, Define, Explore strategies, Act on a solution, Look back and evaluate."
            ),
        ],

        questions: [
            qa(
                "Explain Edward de Bono's Six Thinking Hats model and its role in structured group deliberation.",
                "The Six Thinking Hats model is a lateral thinking tool designed by Edward de Bono that separates thinking into six distinct modes: (1) White Hat: Analyzes objective facts and verified data. (2) Red Hat: Expresses immediate emotional responses and intuition without justification. (3) Black Hat: Evaluates risks, vulnerabilities, and worst-case scenarios. (4) Yellow Hat: Identifies strategic benefits, opportunities, and positive value. (5) Green Hat: Generates creative, unconventional alternative ideas. (6) Blue Hat: Acts as the facilitator, orchestrating the discussion agenda. This approach eliminates argumentative conflicts and ensures comprehensive evaluation.",
                4
            ),
            qa(
                "Describe three major cognitive biases and how they adversely impact technology teams.",
                "(1) Confirmation Bias: Engineers may search only for articles supporting their preferred tech stack while dismissing reports of critical vulnerabilities or scaling bottlenecks. (2) Sunk Cost Fallacy: A team may keep pouring resources into a poorly performing legacy software module simply because months of labor were already invested, rather than refactoring or replacing it. (3) Dunning-Kruger Effect: Inexperienced developers may severely underestimate project complexity and bypass testing protocols, resulting in production outages.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — Decision-Making & Risk Assessment
========================================================= */

const decisionMaking = createTopic(
    "decision-making-and-risk-assessment",
    "Decision-Making & Risk Assessment",

    [
        definition(
            "Decision-Making",
            "The cognitive process of selecting the most effective and justifiable course of action from among multiple competing alternatives, based on available evidence, values, and risk analysis."
        ),

        heading("Types of Organizational Decisions"),

        table(
            ["Decision Type", "Characteristics", "Typical Scenario"],
            [
                ["Programmed", "Routine, structured, guided by established standard operating procedures", "Issuing database password resets or handling basic API errors"],
                ["Non-Programmed", "Novel, ill-structured, requiring deep judgment and strategic analysis", "Deciding to pivot a company from on-premise hardware to multi-cloud serverless"],
                ["Tactical", "Short to medium term, focused on operational execution", "Selecting between React and Vue for an upcoming web application client"],
                ["Strategic", "Long-term, high impact, shaping fundamental organisational trajectory", "Acquiring a cybersecurity startup to expand product capabilities"],
            ]
        ),

        heading("The Rational Decision-Making Framework"),

        steps([
            "Define the problem accurately, avoiding premature conclusions.",
            "Identify the explicit decision criteria (e.g., performance, cost, security, scalability).",
            "Allocate weights to each criterion based on strategic priority.",
            "Develop an exhaustive list of viable alternative solutions.",
            "Evaluate each alternative objectively against the weighted criteria.",
            "Select, implement, and monitor the highest-scoring alternative.",
        ]),

        heading("Quantitative Decision Matrix Example"),

        table(
            ["Evaluation Criterion", "Weight (1-5)", "Option A (Microservices)", "Option B (Modular Monolith)"],
            [
                ["Development Speed", "4", "6 / 10 (Score: 24)", "9 / 10 (Score: 36)"],
                ["Scalability", "5", "10 / 10 (Score: 50)", "7 / 10 (Score: 35)"],
                ["Infrastructure Cost", "3", "5 / 10 (Score: 15)", "8 / 10 (Score: 24)"],
                ["Total Weighted Score", "—", "89", "95 (Recommended)"],
            ]
        ),

        heading("Risk Assessment & Mitigation Strategies"),

        table(
            ["Strategy", "Action Taken", "Technology Example"],
            [
                ["Avoidance", "Eliminating the risk activity entirely", "Refusing to store sensitive customer payment credentials locally"],
                ["Mitigation", "Reducing the probability or impact of the risk", "Implementing automated end-to-end unit tests and CI/CD pipelines"],
                ["Transfer", "Shifting the financial or operational risk to third parties", "Purchasing cyber-liability insurance or offloading auth to OAuth providers"],
                ["Acceptance", "Acknowledging low-impact residual risk and creating a contingency reserve", "Accepting rare transient network latency while logging retries"],
            ]
        ),

        heading("Decision Pitfalls: Analysis Paralysis & Groupthink"),

        list([
            "Analysis Paralysis — Overthinking and constantly gathering more data until the window of opportunity closes.",
            "Groupthink — The psychological phenomenon where the desire for harmony and consensus in a team suppresses dissenting, critical viewpoints.",
        ]),

        keyPoints([
            "Decisions are categorized into programmed (routine) and non-programmed (strategic).",
            "Weighted Decision Matrices provide objective, mathematically justifiable evaluations.",
            "Risk handling includes Avoidance, Mitigation, Transfer, and Acceptance.",
            "Analysis paralysis causes costly delays; Groupthink leads to unexamined system failures.",
            "Effective leaders balance rational data with timely, decisive action.",
        ]),
    ],

    {
        summary:
            "Learn structured decision-making models, weighted evaluation matrices, risk mitigation categories, and strategies against Groupthink.",
        minutes: 12,
        tags: ["decision-making", "risk-assessment", "decision-matrix", "groupthink", "important"],

        mcqs: [
            mcq(
                "Buying cyber-insurance to cover potential server breach damages is an example of:",
                ["Risk Avoidance", "Risk Transfer", "Risk Mitigation", "Risk Ignorance"],
                1,
                "Risk Transfer shifts financial liability to an external insurance carrier."
            ),
            mcq(
                "The psychological phenomenon where team members remain silent about errors to avoid conflict is:",
                ["Groupthink", "Cognitive Dissonance", "Brainstorming", "Lateral Thinking"],
                0,
                "Groupthink prioritises team conformity over critical, honest evaluation."
            ),
            mcq(
                "Which type of decision is unstructured, infrequent, and high-impact?",
                ["Programmed Decision", "Non-Programmed Decision", "Automated Decision", "Reflex Decision"],
                1,
                "Non-programmed decisions handle unique, complex, and strategic situations."
            ),
            mcq(
                "What happens in 'Analysis Paralysis'?",
                ["Decisions are made with zero data", "Excessive over-analysis delays taking necessary action", "Teams argue aggressively", "Risks are totally eliminated"],
                1,
                "Analysis paralysis is the inability to act due to continuous, excessive over-research."
            ),
        ],

        questions: [
            qa(
                "Explain the step-by-step Rational Decision-Making Model.",
                "The Rational Decision-Making Model consists of six structured steps: (1) Define the Problem: Clearly articulate the core challenge and scope. (2) Identify Decision Criteria: Establish the standards needed for an optimal outcome (e.g., latency, budget, ease of maintenance). (3) Weight the Criteria: Assign numeric importance (e.g., 1 to 5) to each criterion. (4) Generate Alternatives: Brainstorm viable options without premature dismissal. (5) Score Alternatives: Evaluate each option against the weighted criteria. (6) Select and Implement: Execute the highest-scoring alternative and monitor long-term performance.",
                4
            ),
            qa(
                "What is Groupthink? What are its warning signs and prevention strategies?",
                "Groupthink is a psychological phenomenon where team members conform to a prevailing group consensus to avoid discord, suppressing critical questions. Symptoms include: illusion of invulnerability, collective rationalisation of warning signs, pressure on dissenters, and self-censorship. Prevention strategies include: (1) Assigning a designated 'Devil's Advocate' in every major meeting. (2) Leaders withholding their own opinion until the end. (3) Gathering anonymous feedback. (4) Inviting outside experts to review decisions.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — Emotional Resilience, Coping & Mental Health
========================================================= */

const emotionalResilience = createTopic(
    "emotional-resilience-and-mental-health",
    "Emotional Resilience, Coping & Mental Health",

    [
        definition(
            "Emotional Resilience",
            "Emotional resilience is the psychological capacity to adapt constructively to stress, adversity, trauma, and significant life challenges without experiencing long-term psychological breakdown."
        ),

        heading("The 7 Cs Model of Resilience (Ken Ginsburg)"),

        table(
            ["C Factor", "Core Concept", "Individual Reflection"],
            [
                ["Competence", "Knowing that you handle situations effectively", "'I have mastered complex engineering challenges before.'"],
                ["Confidence", "Belief in one's own capabilities and judgment", "'I trust my ability to figure out unknown technical stacks.'"],
                ["Connection", "Strong bonds with peers, family, and mentors", "'I have a supportive network I can turn to during setbacks.'"],
                ["Character", "A strong moral compass and ethical integrity", "'I treat people with empathy even when under pressure.'"],
                ["Contribution", "Understanding that the world is improved by your efforts", "'My daily work brings genuine value to users.'"],
                ["Coping", "Mastering a wide repertoire of healthy stress responses", "'I use exercise and journaling rather than toxic escapism.'"],
                ["Control", "Recognising what is within your direct control", "'I cannot control unexpected outages, but I control my response.'"],
            ]
        ),

        heading("Coping Strategies: Problem-Focused vs Emotion-Focused"),

        table(
            ["Dimension", "Problem-Focused Coping", "Emotion-Focused Coping"],
            [
                ["Mechanism", "Directly altering or eliminating the source of stress", "Managing the internal emotional distress caused by the stressor"],
                ["Best Used When", "The stressor is controllable and changeable", "The stressor is uncontrollable (e.g., sudden bereavement, layoffs)"],
                ["Examples", "Restructuring project scope, upskilling, time-blocking", "Mindfulness meditation, expressive writing, cognitive reframing"],
            ]
        ),

        heading("Cognitive Restructuring (ABCDE Model of CBT)"),

        text(
            "Pioneered by Albert Ellis and Aaron Beck, the ABCDE framework enables individuals to dismantle irrational, catastrophic thought spirals:"
        ),

        list([
            "A (Activating Event) — The objective external trigger (e.g., Code rejected in peer review).",
            "B (Belief) — The internal interpretation (e.g., 'I am an incompetent engineer; I will be fired.').",
            "C (Consequence) — The resulting emotion and behaviour (e.g., Anxiety, isolation, avoiding work).",
            "D (Disputation) — Challenging the irrational belief (e.g., 'Is peer review an attack or standard quality assurance? The reviewer praised my algorithm logic.').",
            "E (Effective New Belief) — Balanced worldview (e.g., 'Critiques improve my code quality; learning from feedback is how I become a senior engineer.').",
        ]),

        heading("Preventing Professional Burnout"),

        steps([
            "Recognise early warning signs: emotional exhaustion, cynicism, and reduced efficacy.",
            "Enforce strict digital boundaries (e.g., turning off work communication apps after 7 PM).",
            "Incorporate daily physical movement to metabolise stress hormones (cortisol).",
            "Prioritise non-negotiable sleep hygiene (7-8 hours of quality rest).",
            "Engage in non-work creative hobbies (music, sports, art, volunteering).",
        ]),

        keyPoints([
            "Resilience is a learned psychological skill, not a static innate trait.",
            "The 7 Cs provide a comprehensive framework for mental toughness.",
            "Problem-focused coping targets controllable triggers; emotion-focused targets internal calm.",
            "The ABCDE model helps dispute irrational, self-defeating thoughts.",
            "Burnout is prevented through firm boundaries, sleep, and supportive peer networks.",
        ]),
    ],

    {
        summary:
            "Understand emotional resilience, the 7 Cs framework, problem vs emotion-focused coping, cognitive restructuring (CBT), and burnout prevention.",
        minutes: 13,
        tags: ["resilience", "mental-health", "cbt", "coping-strategies", "burnout", "important"],

        mcqs: [
            mcq(
                "In the ABCDE model of Cognitive Behavioral Therapy, what does 'D' stand for?",
                ["Denial", "Disputation of irrational beliefs", "Depression", "Distraction"],
                1,
                "Disputation involves actively questioning and challenging irrational self-talk."
            ),
            mcq(
                "Which coping strategy is most effective when dealing with an uncontrollable life crisis?",
                ["Problem-Focused Coping", "Emotion-Focused Coping", "Avoidance Coping", "Aggressive Coping"],
                1,
                "Emotion-focused coping regulates emotional distress when external events cannot be changed."
            ),
            mcq(
                "Which of the following is an early symptom of psychological burnout?",
                ["Increased creativity", "Chronic exhaustion, cynicism, and detachment", "High task enjoyment", "Improved focus"],
                1,
                "Burnout is characterised by emotional exhaustion, cynicism, and decreased personal efficacy."
            ),
            mcq(
                "According to the 7 Cs resilience model, 'Control' refers to:",
                ["Dominating other people", "Recognising personal agency over one's own choices", "Controlling the weather", "Suppression of all feelings"],
                1,
                "Control is understanding that you have agency over your own decisions and reactions."
            ),
        ],

        questions: [
            qa(
                "Explain the ABCDE Cognitive Restructuring model with a clear real-life scenario.",
                "The ABCDE model helps restructure self-defeating thoughts: (A) Activating Event: A student receives a low grade on their initial data structures assignment. (B) Belief: 'I am terrible at programming and will never get a software job.' (C) Consequence: Extreme anxiety, giving up on homework, and skipping lectures. (D) Disputation: 'This is only the first assignment. One setback does not define my career. I simply struggled with pointer arithmetic, which I can practise.' (E) Effective New Belief: 'I need to review pointer mechanics with my professor and practise more problems. With focused effort, I can master this topic.'",
                4
            ),
            qa(
                "Compare Problem-Focused Coping with Emotion-Focused Coping. When should each be applied?",
                "Problem-Focused Coping involves taking direct, actionable steps to alter the external stressor itself, such as breaking a massive coding project into smaller Jira tickets or asking a manager for deadline clarification. It should be applied when the situation is controllable. Emotion-Focused Coping aims to manage and soothe internal emotional distress, such as deep breathing, journaling, mindfulness, and cognitive reframing. It is best applied when the stressor is uncontrollable, such as corporate restructuring or global economic downturns.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 5 — Goal Mastery, Habits & Personal Productivity
========================================================= */

const goalMasteryHabits = createTopic(
    "goal-mastery-habits-productivity",
    "Goal Mastery, Habits & Personal Productivity",

    [
        definition(
            "Habit Loop",
            "The neurological cycle at the core of every habit, consisting of three sequential elements: Cue (Trigger), Routine (Behavior), and Reward (Payoff)."
        ),

        heading("The Four Laws of Behavior Change (James Clear)"),

        table(
            ["Phase", "To Build a Good Habit", "To Break a Bad Habit"],
            [
                ["1. Cue", "Make it Obvious (e.g., Leave programming book on desk)", "Make it Invisible (e.g., Put gaming console inside closet)"],
                ["2. Craving", "Make it Attractive (e.g., Pair coding with favourite coffee)", "Make it Unattractive (e.g., Highlight mental cost of social media scrolling)"],
                ["3. Response", "Make it Easy (e.g., Commit to writing just 5 lines of code)", "Make it Difficult (e.g., Log out of all accounts and use site blockers)"],
                ["4. Reward", "Make it Satisfying (e.g., Track streak visually on GitHub)", "Make it Unsatisfying (e.g., Create an accountability contract with penalties)"],
            ]
        ),

        heading("Advanced Goal Frameworks: OKRs and WOOP"),

        list([
            "OKRs (Objectives and Key Results) — Used by Google and Intel. Objectives are qualitative, inspiring ambitions; Key Results are quantitative, measurable milestones (e.g., Objective: 'Master Cloud Infrastructure', Key Result: 'Pass AWS Solutions Architect Exam by December with 85%+ score').",
            "WOOP Model (Gabriele Oettingen) — Wish (the goal), Outcome (the best result), Obstacle (the internal barrier), Plan (an If-Then contingency: 'If I feel tired after college, then I will code for 20 minutes before resting.').",
        ]),

        heading("Deep Work vs Shallow Work (Cal Newport)"),

        table(
            ["Attribute", "Deep Work", "Shallow Work"],
            [
                ["Cognitive Demand", "High-intensity focus on complex, non-replicable tasks", "Low-intensity logistical or administrative tasks"],
                ["Distraction Level", "Zero distraction; uninterrupted flow state", "Constant interruptions (checking emails, notifications)"],
                ["Value Creation", "Architecting systems, writing complex algorithms, debugging", "Replying to routine emails, formatting slide decks"],
                ["Outcome", "Rare, high-value, hard-to-replicate expertise", "Easily automated, common output"],
            ]
        ),

        heading("Overcoming Procrastination Techniques"),

        steps([
            "The 2-Minute Rule — If an action takes under two minutes, execute it immediately without scheduling.",
            "The 5-Minute Rule — When avoiding a massive task, commit to working on it for just five uninterrupted minutes; momentum will often sustain you.",
            "Eat That Frog (Brian Tracy) — Tackle your hardest, highest-impact task first thing in the morning before fatigue sets in.",
            "Parkinson's Law — 'Work expands to fill the time available for its completion.' Set artificially short deadlines to force focus.",
        ]),

        keyPoints([
            "Habits run on the neurological loop: Cue → Craving → Response → Reward.",
            "James Clear's Four Laws provide an actionable framework for behavioral transformation.",
            "OKRs combine inspirational vision with measurable numerical milestones.",
            "Deep Work is essential for mastering complex technical fields.",
            "Short artificial deadlines (Parkinson's Law) and 5-minute starts defeat chronic procrastination.",
        ]),
    ],

    {
        summary:
            "Master habit formation mechanics, James Clear's laws of behavior change, OKRs, WOOP, Cal Newport's Deep Work, and anti-procrastination rules.",
        minutes: 13,
        tags: ["habits", "productivity", "deep-work", "okrs", "time-mastery", "important"],

        mcqs: [
            mcq(
                "According to James Clear in 'Atomic Habits', the four stages of the habit loop are:",
                ["Idea, Plan, Execute, Review", "Cue, Craving, Response, Reward", "Trigger, Action, Feedback, Goal", "Wish, Outcome, Obstacle, Plan"],
                1,
                "The habit loop consists of Cue, Craving, Response, and Reward."
            ),
            mcq(
                "What is the core principle of Parkinson's Law?",
                ["Habits take 21 days to form", "Work expands to fill the time allotted for its completion", "80% of results come from 20% of effort", "Multi-tasking increases mental speed"],
                1,
                "Parkinson's Law states that tasks expand to consume whatever time is allocated to them."
            ),
            mcq(
                "In Cal Newport's framework, 'Deep Work' refers to:",
                ["Replying to all instant messages within 1 minute", "Professional activities performed in a state of distraction-free concentration", "Working late nights every single day", "Automating mundane office work"],
                1,
                "Deep Work is distraction-free, focused cognitive work that creates high new value."
            ),
            mcq(
                "In the WOOP goal framework, what does the second 'O' stand for?",
                ["Objective", "Obstacle", "Optimization", "Observation"],
                1,
                "WOOP stands for Wish, Outcome, Obstacle, Plan."
            ),
        ],

        questions: [
            qa(
                "Explain James Clear's Four Laws of Behavior Change for creating good habits and breaking bad habits.",
                "James Clear's Four Laws of Behavior Change align with the four stages of the habit loop: (1) Cue: To build a good habit, make the cue obvious (e.g., keep study materials in clear view); to break a bad habit, make it invisible (e.g., remove distracting apps). (2) Craving: Make good habits attractive (bundle coding with listening to music); make bad habits unattractive by focusing on their negative consequences. (3) Response: Make good habits easy by lowering friction (commit to 5 minutes of study); make bad habits difficult by increasing friction (use app locks). (4) Reward: Make good habits immediately satisfying (track daily streaks); make bad habits unsatisfying through accountability partners.",
                4
            ),
            qa(
                "Differentiate between Deep Work and Shallow Work. Provide examples of each in a computer science career.",
                "Deep Work refers to professional activities performed in a state of distraction-free concentration that push cognitive capabilities to their limit. It creates high value, improves skill, and is difficult to replicate (e.g., designing a scalable distributed caching layer, debugging a race condition in multi-threaded code, or learning a new programming paradigm). Shallow Work consists of logistical, non-cognitively demanding tasks often performed while distracted (e.g., responding to routine emails, attending unproductive status meetings, or formatting slide presentations). Maximising Deep Work while batching or automating Shallow Work is essential for technical career growth.",
                4
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit1Topics = [
    selfConceptValues,
    criticalThinking,
    decisionMaking,
    emotionalResilience,
    goalMasteryHabits,
];