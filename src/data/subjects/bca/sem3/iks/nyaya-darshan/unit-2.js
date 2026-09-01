/* =========================================================
   BCA • SEM 3 • IKS: Nyaya Darshan
   UNIT 2 — Syllogism, Fallacies, and Modern Relevance
========================================================= */

import {
    createTopic,
    heading,
    text,
    list,
    table,
    note,
    definition,
    keyPoints,
    mcq,
    qa,
} from "../../../../../helpers";

/* =========================================================
   TOPIC 1 — The 5-Membered Syllogism (Panchavayava Vakya)
========================================================= */

const panchavayavaSyllogism = createTopic(
    "five-membered-syllogism-panchavayava",
    "The 5-Membered Syllogism (Panchavayava Vakya)",

    [
        definition(
            "Panchavayava Vakya",
            "Nyaya provides a unique 5-step logical deduction process used to demonstrate a truth to others (Pararthanumana). It combines induction and deduction."
        ),

        heading("The 5 Steps of Nyaya Syllogism"),

        table(
            ["Step (Sanskrit)", "Meaning / Role", "Classic Example"],
            [
                ["1. Pratijna", "Proposition / Statement to be proved", "The mountain has fire."],
                ["2. Hetu", "Reason / Cause for the statement", "Because it has smoke."],
                ["3. Udaharana", "Universal Proposition with Example", "Wherever there is smoke, there is fire, as in a kitchen."],
                ["4. Upanaya", "Application of universal rule to present case", "This mountain also has smoke which is associated with fire."],
                ["5. Nigamana", "Conclusion / Final assertion", "Therefore, this mountain has fire."]
            ]
        ),

        heading("Nyaya Syllogism vs Western Syllogism"),

        text(
            "Aristotelian Western logic uses a 3-step syllogism (Premise 1, Premise 2, Conclusion). Nyaya uses 5 steps because it combines pure logic with real-world empirical verification (Udaharana/Example)."
        ),

        note(
            "Without a concrete example (Udaharana like 'as in a kitchen'), Nyaya logic considers a deduction incomplete. This proves ancient Indian logic was deeply grounded in empirical reality.",
            "tip",
            "Nyaya Logic Specialty"
        ),

        keyPoints([
            "Panchavayava consists of 5 members: Pratijna, Hetu, Udaharana, Upanaya, Nigamana.",
            "It is used for Pararthanumana (convincing others logically).",
            "Unlike Western 3-step logic, Nyaya requires a real-world example.",
        ]),
    ],

    {
        summary: "Learn the famous 5-step Indian logical syllogism (Panchavayava) and compare it with Western logic.",
        minutes: 12,
        tags: ["syllogism", "panchavayava", "hetu", "udaharana", "logic", "important"],

        mcqs: [
            mcq(
                "How many members/steps are there in the Nyaya Syllogism?",
                ["3", "4", "5", "7"],
                2,
                "Nyaya uses a 5-membered syllogism (Panchavayava)."
            ),
            mcq(
                "In 'The mountain has fire because it has smoke', 'because it has smoke' represents:",
                ["Pratijna", "Hetu", "Udaharana", "Nigamana"],
                1,
                "Hetu is the reason or evidence for the proposition."
            ),
        ],

        questions: [
            qa(
                "Explain the 5-Membered Syllogism (Panchavayava) of Nyaya logic with a suitable example.",
                "Nyaya logic uses 5 steps to prove a proposition to others: 1) Pratijna (Proposition): Statement to be proved (e.g., The hill has fire). 2) Hetu (Reason): Cause/reason for statement (e.g., Because it has smoke). 3) Udaharana (Example): Universal rule with an instance (e.g., Wherever there is smoke there is fire, as in a kitchen). 4) Upanaya (Application): Applying the rule to the case (e.g., This hill has smoke which is invariably accompanied by fire). 5) Nigamana (Conclusion): Final assertion (e.g., Therefore, this hill has fire).",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — Logical Fallacies (Hetvabhasa) and Debating Rules
========================================================= */

const fallaciesAndDebate = createTopic(
    "logical-fallacies-hetvabhasa-and-debate",
    "Logical Fallacies (Hetvabhasa) and Debating Rules",

    [
        definition(
            "Hetvabhasa",
            "Hetvabhasa literally means 'fallacious reason' or 'pseudo-reason'. It occurs when a reason appears to be valid (Hetu), but is logically flawed."
        ),

        heading("Debating Methods in Nyaya"),

        text(
            "Nyaya scholars classified debates into three distinct categories based on intention:"
        ),

        table(
            ["Category", "Intention / Nature"],
            [
                ["1. Vada", "Honest discussion between teacher and student aimed solely at discovering Truth."],
                ["2. Jalpa", "Tricky debate where both parties aim to win by any means, fair or unfair."],
                ["3. Vitanda", "Cavil / Destructive criticism where one party only refutes the other without presenting a counter-thesis."]
            ]
        ),

        heading("Types of Hetvabhasa (Fallacies)"),

        list([
            "**Savyabhichara:** Irregular/erratic reason.",
            "**Viruddha:** Contradictory reason (proves the opposite).",
            "**Satpratipaksha:** Inferentially contradicted reason.",
            "**Asiddha:** Unproved reason.",
            "**Badhita:** Sublated/contradicted by direct perception.",
        ]),

        keyPoints([
            "Hetvabhasa = logical fallacies (pseudo-reasons).",
            "Vada is debate for truth; Jalpa is debate for winning; Vitanda is pure refutation.",
        ]),
    ],

    {
        summary: "Understand logical fallacies (Hetvabhasa) and the three types of debates (Vada, Jalpa, Vitanda).",
        minutes: 10,
        tags: ["hetvabhasa", "fallacy", "vada", "jalpa", "vitanda"],

        mcqs: [
            mcq(
                "Which type of debate in Nyaya is an honest discussion aimed purely at seeking Truth?",
                ["Jalpa", "Vitanda", "Vada", "Tarka"],
                2,
                "Vada is a noble discussion aimed strictly at finding truth."
            ),
        ],

        questions: [
            qa(
                "Explain Vada, Jalpa, and Vitanda as debate types in Nyaya philosophy.",
                "Nyaya classifies debate into 3 forms: 1) Vada: An honest, constructive discussion between a teacher and student or seeker, aimed solely at uncovering the truth. 2) Jalpa: An aggressive debate where both sides care only about winning and defending their views using tricks or rhetorical devices. 3) Vitanda: Destructive criticism where the opponent only attempts to destroy the other's argument without establishing any positive thesis of their own.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — Modern Relevance of Nyaya Logic in Computer Science
========================================================= */

const modernRelevanceNyaya = createTopic(
    "modern-relevance-of-nyaya-in-cs",
    "Modern Relevance of Nyaya Logic in Computer Science",

    [
        heading("Nyaya and Computer Science"),

        text(
            "Nyaya logic is remarkably similar to modern Mathematical Logic, Artificial Intelligence (AI), and Knowledge Representation systems used in Computer Science."
        ),

        table(
            ["Nyaya Concept", "Modern Computer Science Equivalent"],
            [
                ["Pramana (Valid Knowledge)", "Data Validation & Verified Inputs"],
                ["Anumana (Inference)", "Inference Engines in AI & Expert Systems"],
                ["Panchavayava (5 Syllogism)", "Algorithmic Rules (If-Then-Else + Verification)"],
                ["Padartha (Categories)", "Object-Oriented Programming (Classes/Entities)"],
                ["Hetvabhasa (Fallacies)", "Bug Detection & Logic Error Checking"],
            ]
        ),

        heading("Nyaya and Artificial Intelligence (AI)"),

        text(
            "Modern Natural Language Processing (NLP) and Expert Systems require structuring human knowledge so computers can reason. Nyaya’s structured language and 5-step inference provide an ideal framework for building AI knowledge bases."
        ),

        keyPoints([
            "Nyaya is the precursor to formal computer logic.",
            "Anumana is used in AI Inference Engines.",
            "Nyaya categories align with Object-Oriented concepts.",
        ]),
    ],

    {
        summary: "Explore how Nyaya logic connects with modern Computer Science, AI, and Expert Systems.",
        minutes: 8,
        tags: ["ai", "computer-science", "logic", "relevance", "iks"],

        mcqs: [
            mcq(
                "Nyaya's concept of Anumana (Inference) is most closely related to which AI component?",
                ["Graphics Card", "Inference Engine", "Hard Drive", "Monitor"],
                1,
                "AI Inference Engines use logical rules similar to Anumana."
            ),
        ],

        questions: [
            qa(
                "How is Nyaya logic relevant to modern Computer Science and Artificial Intelligence?",
                "Nyaya logic provides a highly structured, mathematical approach to reasoning. Its 5-step syllogism (Panchavayava) combines formal logic with empirical data, which is directly applicable to AI Inference Engines, Expert Systems, and Machine Learning algorithms. Its classification of reality (Padarthas) mirrors Object-Oriented System Analysis, while its study of fallacies (Hetvabhasa) parallels bug detection and formal software verification.",
                5
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit2Topics = [
    panchavayavaSyllogism,
    fallaciesAndDebate,
    modernRelevanceNyaya,
];