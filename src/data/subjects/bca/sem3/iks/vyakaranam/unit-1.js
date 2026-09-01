/* =========================================================
   BCA • SEM 3 • IKS: Vyakaranam
   UNIT 1 — Meaning, Panini and Foundations of Sanskrit Grammar
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
   TOPIC 1 — Meaning and Place of Vyakaranam
========================================================= */

const meaningOfVyakaranam = createTopic(
    "meaning-and-place-of-vyakaranam",
    "Meaning and Place of Vyakaranam among Vedangas",

    [
        definition(
            "Vyakaranam (વ્યાકરણ)",
            "Vyakaranam is the Vedanga of grammar. It analyses the structure of language — sounds, word-formation, compounds, and sentence rules — so that speech remains pure, precise and unambiguous."
        ),

        heading("Mouth of the Vedapurusha"),

        text(
            "In the Vedanga metaphor, Vyakaranam is called the 'Mukha' (Mouth) of the Vedapurusha. Just as the mouth expresses thought clearly, grammar enables clear and correct expression of knowledge."
        ),

        heading("Why Grammar is Essential"),

        list([
            "Protects language from corruption and ambiguity.",
            "Supports correct understanding of Vedic and classical texts.",
            "Provides scientific analysis of word formation (Morphology).",
            "Connects sound (Shiksha), meaning (Nirukta) and usage (Vyakarana).",
            "Builds logical thinking through rule-based language structure.",
        ]),

        heading("Vyakaranam among the Six Vedangas"),

        table(
            ["Vedanga", "Focus"],
            [
                ["Shiksha", "Phonetics / pronunciation"],
                ["Vyakaranam", "Grammar / structure of language"],
                ["Nirukta", "Etymology / word meaning"],
                ["Chandas", "Meter / prosody"],
                ["Jyotisha", "Astronomy / timing"],
                ["Kalpa", "Ritual procedure"],
            ]
        ),

        note(
            "Shiksha deals with how sounds are produced, Nirukta with what words mean, and Vyakaranam with how words are formed and arranged correctly.",
            "tip",
            "Three Language Sciences"
        ),

        keyPoints([
            "Vyakaranam = science of grammar and language structure.",
            "It is the Mouth (Mukha) of the Vedapurusha.",
            "Essential for purity, precision and preservation of Sanskrit.",
        ]),
    ],

    {
        summary: "Understand Vyakaranam as the Vedanga of grammar and its role in preserving precise language.",
        minutes: 10,
        tags: ["vyakaranam", "vedanga", "grammar", "sanskrit", "iks"],

        mcqs: [
            mcq(
                "Vyakaranam mainly deals with:",
                ["Temple architecture", "Grammar and language structure", "Surgery", "Music only"],
                1,
                "Vyakaranam is the Vedanga of grammar."
            ),
            mcq(
                "In the Vedapurusha metaphor, Vyakaranam is:",
                ["Nose", "Eyes", "Mouth", "Ears"],
                2,
                "Vyakaranam is called the Mouth of the Vedapurusha."
            ),
        ],

        questions: [
            qa(
                "What is Vyakaranam? Explain its place among the Vedangas.",
                "Vyakaranam is the Vedanga concerned with grammar — the scientific study of sounds, word-formation, compounds and sentence structure. Among the six Vedangas, it is called the Mouth of the Vedapurusha because it enables clear expression of knowledge. It works with Shiksha (sound) and Nirukta (meaning) to preserve correct understanding and usage of Sanskrit, especially in Vedic and classical literature.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — Panini and Ashtadhyayi
========================================================= */

const paniniAshtadhyayi = createTopic(
    "panini-and-ashtadhyayi",
    "Panini and the Ashtadhyayi",

    [
        definition(
            "Panini",
            "Panini is the greatest ancient Indian grammarian. His masterpiece, the Ashtadhyayi, is a complete rule-based system of Sanskrit grammar composed in concise sutras."
        ),

        heading("Ashtadhyayi — Structure"),

        table(
            ["Feature", "Description"],
            [
                ["Meaning", "Ashta + Adhyayi = Eight Chapters"],
                ["Form", "About 4000 highly compressed grammatical sutras"],
                ["Nature", "Generative, rule-based, algorithmic grammar"],
                ["Scope", "Sounds, roots, affixes, compounds, syntax, derivation"],
            ]
        ),

        heading("Supporting Texts in Paninian System"),

        table(
            ["Text / Component", "Role"],
            [
                ["Ashtadhyayi", "Core sutras of grammar"],
                ["Shiva Sutras / Maheshvara Sutras", "Sound groups used as pratyaharas (compressed notations)"],
                ["Dhatupatha", "List of verbal roots (dhatus)"],
                ["Ganapatha", "Lists of word groups used by rules"],
                ["Unadisutras", "Additional derivational rules for certain nouns"],
            ]
        ),

        heading("Why Panini is Extraordinary"),

        list([
            "Created a complete grammar with minimal, precise rules.",
            "Used meta-language and abbreviations (pratyahara) like modern coding macros.",
            "Rules apply in ordered sequence — similar to algorithms.",
            "Can generate correct word forms systematically from roots + affixes.",
            "Influenced linguistics, philology and computational grammar worldwide.",
        ]),

        note(
            "Modern linguists often describe Panini's system as one of the earliest examples of formal language theory — comparable in spirit to rule engines and generative grammar.",
            "tip",
            "Global Importance"
        ),

        keyPoints([
            "Panini authored Ashtadhyayi (8 chapters of sutras).",
            "Grammar is generative and rule-ordered.",
            "Uses compact notations like pratyaharas.",
            "Foundation of classical Sanskrit linguistics.",
        ]),
    ],

    {
        summary: "Learn about Panini, Ashtadhyayi and the rule-based architecture of Sanskrit grammar.",
        minutes: 12,
        tags: ["panini", "ashtadhyayi", "sutra", "pratyahara", "important"],

        mcqs: [
            mcq(
                "Ashtadhyayi contains approximately how many chapters?",
                ["4", "6", "8", "12"],
                2,
                "Ashtadhyayi means eight chapters."
            ),
            mcq(
                "Who is the author of Ashtadhyayi?",
                ["Yaska", "Panini", "Jaimini", "Gautama"],
                1,
                "Panini authored the Ashtadhyayi."
            ),
            mcq(
                "Dhatupatha is a list of:",
                ["Temple names", "Verbal roots", "Kings", "Meters"],
                1,
                "Dhatupatha lists verbal roots (dhatus)."
            ),
        ],

        questions: [
            qa(
                "Write a short note on Panini and the Ashtadhyayi.",
                "Panini is the foremost ancient Indian grammarian. His Ashtadhyayi is an eight-chapter system of nearly four thousand sutras describing Sanskrit grammar with extraordinary precision. Supported by Shiva Sutras, Dhatupatha and Ganapatha, it provides a generative method to derive correct word forms from roots and affixes. Because of its rule-order, meta-language and compactness, Ashtadhyayi is regarded as one of the greatest achievements in world linguistics and a model of formal rule-based systems.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — Basic Building Blocks of Sanskrit Grammar
========================================================= */

const buildingBlocks = createTopic(
    "building-blocks-of-sanskrit-grammar",
    "Basic Building Blocks of Sanskrit Grammar",

    [
        heading("Core Units of Language"),

        table(
            ["Unit", "Meaning", "Role"],
            [
                ["Varna", "Sound/letter", "Basic phonetic unit"],
                ["Pratyaya", "Affix/suffix", "Added to roots/stems to build forms"],
                ["Dhatu", "Verbal root", "Base of verbs and many derivatives"],
                ["Pratipadika", "Nominal stem", "Base form before case endings"],
                ["Vibhakti", "Case ending", "Shows grammatical relation in sentence"],
                ["Samasa", "Compound", "Combining words into compact expressions"],
            ]
        ),

        heading("From Root to Word — Simple Idea"),

        text(
            "Sanskrit grammar often works like this: start with a root (dhatu) or stem, apply ordered rules and affixes, and generate a finished word form. This is similar to stepwise transformation in algorithms."
        ),

        list([
            "Root/Stem → Affixation → Rule application → Final usable word",
            "Sandhi joins sounds at boundaries according to fixed rules.",
            "Samasa compresses multiple words into one compound unit.",
            "Vibhakti endings indicate subject, object, instrument, location, etc.",
        ]),

        heading("Sandhi (Brief)"),

        definition(
            "Sandhi",
            "Sandhi means euphonic combination — sound changes that occur when words or morphemes join, making speech smooth and continuous."
        ),

        list([
            "Svara Sandhi — vowel combinations",
            "Vyanjana Sandhi — consonant combinations",
            "Visarga Sandhi — changes involving visarga (ḥ)",
        ]),

        keyPoints([
            "Sanskrit words are built systematically from roots and affixes.",
            "Sandhi governs sound joining.",
            "Vibhakti shows grammatical role.",
            "Samasa creates compact compound expressions.",
        ]),
    ],

    {
        summary: "Understand basic grammatical units: dhatu, pratyaya, vibhakti, sandhi and samasa.",
        minutes: 11,
        tags: ["dhatu", "pratyaya", "sandhi", "samasa", "vibhakti"],

        mcqs: [
            mcq(
                "Dhatu in Sanskrit grammar means:",
                ["Case ending", "Verbal root", "Compound word", "Meter"],
                1,
                "Dhatu is the verbal root."
            ),
            mcq(
                "Sandhi mainly deals with:",
                ["Temple design", "Sound combination at junctions", "Astronomy", "Ethics only"],
                1,
                "Sandhi is euphonic combination of sounds."
            ),
        ],

        questions: [
            qa(
                "Explain the basic building blocks of Sanskrit grammar with examples of their roles.",
                "Sanskrit grammar analyses language through units such as varna (sounds), dhatu (verbal roots), pratipadika (nominal stems), pratyaya (affixes), vibhakti (case endings), sandhi (sound combination) and samasa (compounds). Roots and stems provide the base meaning; affixes and endings create usable forms; sandhi smooths pronunciation at boundaries; compounds compress multiple ideas into one word. This modular structure makes Sanskrit highly systematic and precise.",
                5
            ),
        ],
    }
);

export const unit1Topics = [
    meaningOfVyakaranam,
    paniniAshtadhyayi,
    buildingBlocks,
];