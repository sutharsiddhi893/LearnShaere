/* =========================================================
   BCA • SEM 3 • IKS: Nyaya Darshan
   UNIT 1 — Introduction to Nyaya Darshan and Pramanas
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
   TOPIC 1 — Introduction to Nyaya Darshan
========================================================= */

const introToNyaya = createTopic(
    "introduction-to-nyaya-darshan",
    "Introduction to Nyaya Darshan and Sage Gautama",

    [
        definition(
            "Nyaya Darshan",
            "Nyaya is one of the six orthodox (Astika) schools of Indian philosophy. Founded by Sage Gautama (Akshapada Gautama), it is the school of logic, critical reasoning, and epistemology."
        ),

        heading("Meaning of 'Nyaya'"),

        text(
            "The word 'Nyaya' literally means 'that by which the mind is led to a conclusion' or 'right judgement'. It provides systematic rules for logical reasoning and debate to arrive at truth."
        ),

        heading("Core Objectives of Nyaya"),

        list([
            "To establish valid means of obtaining true knowledge (Pramana).",
            "To eliminate ignorance (Mithyajnana) which leads to suffering.",
            "To achieve Liberation (Moksha / Apavarga) through knowledge of reality.",
            "To provide systematic rules for philosophical debate (Vada).",
        ]),

        heading("Foundational Text: Nyaya Sutras"),

        table(
            ["Aspect", "Details"],
            [
                ["Author", "Sage Gautama (Akshapada Gautama)"],
                ["Main Subject", "Logic, Epistemology (Pramana), 16 Categories (Padarthas)"],
                ["Major Commentators", "Vatsyayana (Nyaya Bhashya), Uddyotakara, Jayanta Bhatta"],
                ["Relation with Vaisheshika", "Nyaya accepts Vaisheshika physics/metaphysics, combining into Nyaya-Vaisheshika."],
            ]
        ),

        note(
            "Nyaya is often called 'Anvikshiki' (the science of critical inquiry) or 'Tarka Shastra' (the science of logic and reasoning).",
            "tip",
            "Other Names of Nyaya"
        ),

        keyPoints([
            "Founded by Sage Gautama; key text is Nyaya Sutras.",
            "Focuses on Logic (Tarka) and Epistemology (Pramana).",
            "Goal: True knowledge leads to Moksha.",
        ]),
    ],

    {
        summary: "Understand the origin, meaning, founder, and core objectives of Nyaya Darshan.",
        minutes: 10,
        tags: ["nyaya", "gautama", "logic", "astika", "iks"],

        mcqs: [
            mcq(
                "Who is the founder of Nyaya Darshan?",
                ["Sage Kanada", "Sage Gautama", "Sage Jaimini", "Sage Kapila"],
                1,
                "Sage Gautama (Akshapada Gautama) authored the Nyaya Sutras."
            ),
            mcq(
                "Nyaya Darshan is also known as:",
                ["Tarka Shastra / Anvikshiki", "Sankhya Shastra", "Yoga Shastra", "Mimansa Shastra"],
                0,
                "Nyaya is widely called Tarka Shastra (Science of Logic) or Anvikshiki."
            ),
        ],

        questions: [
            qa(
                "What is Nyaya Darshan? Explain its founder, main text, and core objectives.",
                "Nyaya Darshan is one of the six orthodox schools of Indian philosophy, founded by Sage Akshapada Gautama through the 'Nyaya Sutras'. Nyaya literally means 'logical reasoning' or 'right judgement'. Its primary objective is to investigate the valid means of acquiring true knowledge (Pramana) and to eliminate false knowledge (Mithyajnana). Nyaya asserts that gaining accurate knowledge of the 16 categories of reality leads to the cessation of suffering and attainment of liberation (Moksha).",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — The Four Pramanas in Nyaya
========================================================= */

const fourPramanas = createTopic(
    "the-four-pramanas-in-nyaya",
    "The Four Pramanas (Means of Valid Knowledge)",

    [
        definition(
            "Pramana",
            "A Pramana is a valid means or source of acquiring accurate knowledge (Prama). Nyaya recognizes four distinct Pramanas."
        ),

        heading("Overview of the Four Pramanas"),

        table(
            ["Pramana (Sanskrit)", "English Meaning", "Description / Definition"],
            [
                ["1. Pratyaksha", "Perception", "Knowledge gained through direct contact of the senses with an object."],
                ["2. Anumana", "Inference", "Knowledge derived from prior observation using logical deduction (cause and effect)."],
                ["3. Upamana", "Comparison / Analogy", "Knowledge gained by comparing an unfamiliar object with a familiar one."],
                ["4. Shabda", "Verbal Testimony", "Knowledge obtained from reliable, trustworthy experts or authentic scriptures (Apta-vakya)."],
            ]
        ),

        heading("1. Pratyaksha (Perception)"),

        text(
            "Pratyaksha is of two types: Laukika (Ordinary sensory perception) and Alaukika (Extraordinary intuitive perception). It is the base of all knowledge."
        ),

        heading("2. Anumana (Inference)"),

        text(
            "Anumana literally means 'knowing after' (Anu = after, Mana = knowledge). It uses an observed mark (Hetu/Sign) to infer an unobserved fact (Sadhya)."
        ),

        heading("3. Upamana (Comparison)"),

        text(
            "Example: A city person is told that a wild cow (Gavaya) looks like a domestic cow. When he sees a wild cow in the forest, he recognizes it using Upamana."
        ),

        heading("4. Shabda (Verbal Testimony)"),

        text(
            "Shabda is valid only if spoken by an 'Apta'—a reliable person who knows the truth and speaks without bias."
        ),

        keyPoints([
            "Nyaya accepts 4 Pramanas: Pratyaksha, Anumana, Upamana, and Shabda.",
            "Pratyaksha is direct sensory perception.",
            "Anumana is logical inference.",
            "Upamana is analogical learning.",
            "Shabda is trustworthy testimony.",
        ]),
    ],

    {
        summary: "Master the 4 valid means of knowledge (Pramanas) accepted by Nyaya philosophy.",
        minutes: 12,
        tags: ["pramana", "pratyaksha", "anumana", "upamana", "shabda", "important"],

        mcqs: [
            mcq(
                "How many Pramanas (means of knowledge) does Nyaya Darshan accept?",
                ["2", "3", "4", "6"],
                2,
                "Nyaya accepts exactly 4 Pramanas: Perception, Inference, Comparison, and Testimony."
            ),
            mcq(
                "Which Pramana involves knowing a wild cow because it resembles a domestic cow?",
                ["Pratyaksha", "Anumana", "Upamana", "Shabda"],
                2,
                "Upamana is knowledge based on comparison/analogy."
            ),
        ],

        questions: [
            qa(
                "List and explain the four Pramanas accepted in Nyaya Darshan with examples.",
                "Nyaya recognizes four Pramanas: 1) Pratyaksha (Perception): Knowledge obtained when senses contact an object (e.g., seeing a red apple). 2) Anumana (Inference): Deductive knowledge derived from an observed sign (e.g., inferring fire on a mountain after seeing smoke). 3) Upamana (Comparison): Learning about an unknown object by its resemblance to a known object (e.g., identifying a wild cow after hearing it looks like a cow). 4) Shabda (Verbal Testimony): Statements of a reliable, honest expert (Apta) or authentic text (e.g., scientific findings or scriptural truth).",
                5
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit1Topics = [introToNyaya, fourPramanas];