/* =========================================================
   BCA • SEM 3 • IKS: Shiksha
   UNIT 2 — Articulation Mechanics, Vedic Preservation, and Modern NLP Applications
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
   TOPIC 1 — Places and Articulation Efforts of Sounds
========================================================= */

const articulationMechanics = createTopic(
    "places-and-efforts-of-articulation",
    "Places (Sthana) and Efforts (Prayatna) of Articulation",

    [
        definition(
            "Ashta-Sthanani (Eight Vocal Organs)",
            "Paniniya Shiksha identifies eight primary places inside the human body where sounds are articulated: Chest (Uras), Throat (Kanta), Head (Murdha), Tongue-root (Jihvamula), Teeth (Danta), Nose (Nasika), Lips (Oshtha), and Palate (Talu)."
        ),

        heading("Classification of Consonants by Place of Origin (Sthana)"),

        table(
            ["Category (Sanskrit)", "Place of Origin (Sthana)", "Example Sounds"],
            [
                ["Kanthya", "Throat (Guttural)", "ka, kha, ga, gha, nga, a, aa"],
                ["Talavya", "Hard Palate (Palatal)", "cha, chha, ja, jha, nya, i, ee"],
                ["Murdhanya", "Roof of Mouth (Retroflex)", "ta, tha, da, dha, na (ટ, ઠ, ડ, ઢ, ણ)"],
                ["Dantya", "Teeth (Dental)", "ta, tha, da, dha, na (ત, થ, દ, ધ, ન)"],
                ["Oshthya", "Lips (Labial)", "pa, pha, ba, bha, ma, u, oo"]
            ]
        ),

        heading("Internal and External Efforts (Prayatna)"),

        text(
            "To produce a sound, air moves from the lungs. The physical effort required is categorized into Abhyantara Prayatna (Internal effort inside mouth) and Bahya Prayatna (External effort at throat level)."
        ),

        list([
            "**Sprishta (Contact):** Complete contact of tongue with speech organ (Stops/Plosives like k, t, p).",
            "**Ishat-Sprishta (Slight contact):** Semi-vowels (y, r, l, v).",
            "**Ishat-Vivrita (Slightly open):** Fricatives / sibilants (sh, shh, s, h).",
            "**Vivrita (Open):** Vowels."
        ]),

        keyPoints([
            "8 vocal places (Ashta-Sthanani) are identified for sound creation.",
            "Consonants are scientifically mapped to throat, palate, retroflex, teeth, and lips.",
            "Prayatna (Effort) categorizes how vocal cords and air streams interact.",
        ]),
    ],

    {
        summary: "Learn the scientific classification of vocal places (Sthana) and internal/external efforts (Prayatna) in sound production.",
        minutes: 12,
        tags: ["sthana", "prayatna", "articulation", "kanthya", "talavya", "important"],

        mcqs: [
            mcq(
                "Consonants produced from the throat (like k, kh, g, gh) belong to which category?",
                ["Talavya", "Kanthya", "Dantya", "Oshthya"],
                1,
                "Kanthya refers to guttural sounds originating from the throat."
            ),
            mcq(
                "According to Paniniya Shiksha, how many primary vocal places (Sthanas) exist in the body?",
                ["5", "8", "10", "12"],
                1,
                "Paniniya Shiksha enumerates 8 places of sound origin (Ashta-Sthanani)."
            ),
        ],

        questions: [
            qa(
                "Classify Sanskrit consonants based on their place of articulation (Sthana) with examples.",
                "Sanskrit consonants are systematically classified into 5 anatomical groups based on where the air stream is constricted: 1) Kanthya (Guttural - Throat): k, kh, g, gh, n. 2) Talavya (Palatal - Hard Palate): ch, chh, j, jh, ñ. 3) Murdhanya (Retroflex - Roof of mouth): ṭ, ṭh, ḍ, ḍh, ṇ. 4) Dantya (Dental - Teeth): t, th, d, dh, n. 5) Oshthya (Labial - Lips): p, ph, b, bh, m. This scientific arrangement makes the Sanskrit alphabet unique.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — Preservation of Vedic Texts (Patha-Vidhis)
========================================================= */

const vedicPreservationMethod = createTopic(
    "preservation-of-vedas-patha-vidhis",
    "Preservation of Vedic Texts through Recitation Techniques (Patha-Vidhis)",

    [
        heading("The World's Oldest Memory Encryption System"),

        text(
            "To ensure that not a single syllable or tone of the Vedas was altered over millennia, ancient Indian scholars devised 11 sophisticated recitation techniques (Pathas). These include 3 Samhita/Prakriti Pathas and 8 Vikriti Pathas."
        ),

        heading("1. Natural Recitation Modes (Prakriti Pathas)"),

        table(
            ["Mode", "Method of Recitation"],
            [
                ["Samhita Patha", "Continuous recitation of the sentence with natural Sandhi joins."],
                ["Pada Patha", "Recitation where each word is isolated and spoken independently without Sandhi."],
                ["Krama Patha", "Words are recited in pairs: (1-2), (2-3), (3-4), etc."]
            ]
        ),

        heading("2. Complex Permutation Modes (Ashta-Vikriti Pathas)"),

        text(
            "The 8 complex mathematical permutations of recitation act like error-detection algorithms in computer networks:"
        ),

        list([
            "**Jata Patha:** Words recited as (1-2, 2-1, 1-2), (2-3, 3-2, 2-3).",
            "**Ghana Patha:** Most complex: (1-2, 2-1, 1-2-3, 3-2-1, 1-2-3).",
            "**Other Vikritis:** Mala, Shikha, Rekha, Dhvaja, Danda, Ratha."
        ]),

        note(
            "UNESCO recognized the Chanting of Vedas as a 'Masterpiece of the Oral and Intangible Heritage of Humanity' in 2003, acknowledging these unique error-free memory preservation techniques.",
            "tip",
            "UNESCO Recognition"
        ),

        keyPoints([
            "11 total Pathas (3 Prakriti + 8 Vikriti).",
            "Jata and Ghana Pathas act as mathematical error-checking codes for vocal data.",
            "Ensured zero corruption of Vedic texts over 3000+ years without relying on print.",
        ]),
    ],

    {
        summary: "Explore the extraordinary mathematical recitation techniques (Ghana, Jata, Pada Pathas) that preserved Vedic texts perfectly.",
        minutes: 12,
        tags: ["patha-vidhi", "ghana-patha", "pada-patha", "preservation", "unesco"],

        mcqs: [
            mcq(
                "Which recitation mode pairs words forward and backward like (1-2, 2-1, 1-2)?",
                ["Samhita Patha", "Pada Patha", "Jata Patha", "Ghana Patha"],
                2,
                "Jata Patha weaves word pairs forward and backward."
            ),
            mcq(
                "How many total Vikriti Pathas (complex recitation modes) exist in Vedic tradition?",
                ["3", "5", "8", "11"],
                2,
                "There are 8 Vikriti Pathas and 3 Prakriti Pathas (total 11)."
            ),
        ],

        questions: [
            qa(
                "Explain how Pada Patha, Jata Patha, and Ghana Patha helped preserve Vedic knowledge without textual corruption.",
                "To prevent any insertion, deletion, or modification of syllables, scholars created mathematical recitation modes. 1) Pada Patha breaks sentences into individual words, isolating roots. 2) Jata Patha weaves words forward and backward in pairs (Word 1-2, 2-1, 1-2), ensuring adjacent word integrity. 3) Ghana Patha expands this further into triplets (1-2, 2-1, 1-2-3, 3-2-1, 1-2-3). If a reciter makes even a minor mistake in one word, the permutation fails to match. This acted as a human error-detection checksum, preserving ancient texts perfectly.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — Modern Relevance of Shiksha in NLP and Speech Technology
========================================================= */

const modernRelevanceShiksha = createTopic(
    "modern-relevance-of-shiksha-in-nlp",
    "Modern Relevance of Shiksha in Natural Language Processing (NLP) and Speech Tech",

    [
        heading("Shiksha Meets Modern Computer Science"),

        text(
            "The scientific categorization of human vocal mechanics in Shiksha aligns remarkably with modern Speech Processing, Natural Language Processing (NLP), and AI Voice Synthesis."
        ),

        table(
            ["Shiksha Concept", "Modern Computer Science Application"],
            [
                ["Sthana & Prayatna Mapping", "Text-to-Speech (TTS) Acoustic Synthesis & Formant Generation"],
                ["Matra (Time Duration)", "Speech Prosody, Rhythm, & Audio Duration Modeling"],
                ["Svara (Pitch Accents)", "Tone Analysis, Emotion Detection, & Voice Pitch Modulation"],
                ["Ashta-Vikriti Pathas", "Data Integrity, Checksums, and Error-Correcting Codes (ECC)"],
                ["Sandhi (Santana)", "Morphological Parsers & Automatic Speech Recognition (ASR)"]
            ]
        ),

        heading("Why Sanskrit Phonetics is Ideal for AI"),

        list([
            "**100% Phonetic Language:** Unlike English (where 'c' sounds like 's' in city and 'k' in cat), Sanskrit letters represent exactly one unique sound.",
            "**Deterministic Sound Rules:** Code algorithms can model Sanskrit sound transformations with zero ambiguity.",
            "**Voice Assistant Optimization:** Understanding Sthana mechanics enables cleaner speech recognition for multilingual Indian AI models."
        ]),

        keyPoints([
            "Shiksha forms the basis of modern computational phonetics.",
            "Sanskrit's 100% phonetic structure simplifies Text-to-Speech (TTS) engines.",
            "Vedic Pathas inspire error-checking algorithms in computer data streams.",
        ]),
    ],

    {
        summary: "Discover how Shiksha's phonetic principles apply to modern Speech Recognition, TTS, AI Voice Assistants, and NLP.",
        minutes: 8,
        tags: ["nlp", "speech-tech", "ai", "phonetics", "relevance"],

        mcqs: [
            mcq(
                "Why is Sanskrit considered exceptionally suitable for Speech Recognition and NLP?",
                ["It has no vowels", "It is 100% phonetic with deterministic rules", "It uses Latin script", "It has no grammar rules"],
                1,
                "Sanskrit is strictly phonetic; letters map uniquely to distinct sounds."
            ),
        ],

        questions: [
            qa(
                "Discuss the relevance of Shiksha Vedanga to modern Speech Synthesis, Natural Language Processing, and Artificial Intelligence.",
                "Shiksha's scientific breakdown of human speech into exact anatomical origin (Sthana), vocal effort (Prayatna), pitch (Svara), and duration (Matra) matches modern Speech Processing architecture. Modern Text-to-Speech (TTS) and Voice Recognition (ASR) systems rely on phonetic modeling. Because Sanskrit is 100% phonetic with zero spelling ambiguity, Shiksha principles provide ideal logical models for AI voice assistants, speech synthesis, and computational linguistics.",
                5
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit2Topics = [
    articulationMechanics,
    vedicPreservationMethod,
    modernRelevanceShiksha,
];