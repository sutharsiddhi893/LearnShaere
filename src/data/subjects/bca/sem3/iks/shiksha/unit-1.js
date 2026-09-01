/* =========================================================
   BCA • SEM 3 • IKS: Shiksha
   UNIT 1 — Meaning, Scope and Six Core Elements of Shiksha
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
   TOPIC 1 — Meaning, Definition and Importance of Shiksha
========================================================= */

const introToShiksha = createTopic(
    "meaning-and-importance-of-shiksha",
    "Meaning, Definition, and Importance of Shiksha",

    [
        definition(
            "Shiksha (શિક્ષા - Phonetics)",
            "Shiksha is the first among the six Vedangas (limbs of the Vedas). It is the ancient Indian science of phonetics, pronunciation, and acoustics, specifically focusing on the accurate recitation and preservation of Vedic hymns."
        ),

        heading("Nose of the Vedapurusha"),

        text(
            "In traditional Indian literature, the six Vedangas are metaphorically compared to parts of the human body (Vedapurusha). Shiksha is designated as the 'Nose' (Ghranam) of the Vedapurusha ('Ghranam tu vedasya shiksha'), as it regulates the breath and air stream necessary for correct vocalization."
        ),

        heading("Need for Shiksha in Vedic Tradition"),

        list([
            "**Oral Transmission (Shruti):** Ancient knowledge was transmitted orally. Precise pronunciation was vital to prevent corruption of texts.",
            "**Semantic Accuracy:** In Sanskrit, a minor shift in accent or pronunciation completely alters the meaning of a word.",
            "**Acoustic Power:** Vedic mantras rely on correct sound frequencies and resonance to achieve their spiritual and psychological effects.",
            "**Standardization:** Established uniform pronunciation rules across different regions of ancient India.",
        ]),

        heading("Major Classical Shiksha Texts"),

        table(
            ["Text Name", "Associated Author / Veda", "Key Focus"],
            [
                ["Paniniya Shiksha", "Maharshi Panini", "The most authoritative and comprehensive text on Sanskrit phonetics."],
                ["Yajnavalkya Shiksha", "Sage Yajnavalkya (Shukla Yajurveda)", "Focuses on pitch accents, tones, and recitation rules for Yajurveda."],
                ["Naradiya Shiksha", "Sage Narada (Samaveda)", "Connects phonetic accents with musical notes (Swaras) of Samaveda."],
                ["Manduki Shiksha", "Atharvaveda tradition", "Phonetic guidelines for Atharvavedic mantras."]
            ]
        ),

        note(
            "A famous story from the Shatapatha Brahmana illustrates the importance of Shiksha: The demon Tvashta intended to chant a mantra to produce a son who would be the 'killer of Indra' (Indra-shatru). Due to a wrong pitch accent (Svara), the meaning inverted to 'one whose killer is Indra', resulting in his son's defeat by Indra!",
            "tip",
            "Famous Historical Example"
        ),

        keyPoints([
            "Shiksha is the Vedanga of Phonetics & Pronunciation.",
            "Known as the 'Nose' (Ghranam) of the Vedapurusha.",
            "Paniniya Shiksha is the primary text of this discipline.",
            "Protects the semantic meaning of mantras by enforcing strict phonetic accuracy.",
        ]),
    ],

    {
        summary: "Understand the meaning, definition, necessity, and major texts of Shiksha as the science of phonetics.",
        minutes: 10,
        tags: ["shiksha", "phonetics", "vedanga", "panini", "iks"],

        mcqs: [
            mcq(
                "In the Vedapurusha metaphor, Shiksha represents which organ?",
                ["Eyes", "Nose (Ghranam)", "Ears", "Mouth"],
                1,
                "Shiksha is known as the Nose (Ghranam) of the Vedapurusha."
            ),
            mcq(
                "Which text is considered the most authoritative work on Sanskrit phonetics?",
                ["Paniniya Shiksha", "Charaka Samhita", "Manusmriti", "Kautilya Arthashastra"],
                0,
                "Paniniya Shiksha is the principal text on Indian phonetics."
            ),
        ],

        questions: [
            qa(
                "What is Shiksha Vedanga? Why was precise pronunciation crucial in ancient India?",
                "Shiksha is the first Vedanga, dealing with the science of phonetics, sound production, and accurate pronunciation of Sanskrit. In ancient India, knowledge was preserved orally (Shruti). Precise pronunciation was crucial because Sanskrit is a phonetic language where a slight error in stress, pitch, or vowel duration changes the entire semantic meaning of a word. Shiksha provided a rigorous scientific framework to preserve Vedic texts without a single syllable's corruption over thousands of years.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — The Six Core Elements (Shat-Angas) of Shiksha
========================================================= */

const sixCoreElements = createTopic(
    "six-core-elements-shat-angas-of-shiksha",
    "The Six Core Elements (Shat-Angas) of Shiksha",

    [
        definition(
            "Shat-Angas of Shiksha",
            "The Taittiriya Upanishad (Shiksha Valli) defines the six fundamental pillars of phonetic study: Varna, Svara, Matra, Balam, Sama, and Santana."
        ),

        heading("Detailed Explanation of the Six Elements"),

        table(
            ["Element (Sanskrit)", "English Concept", "Detailed Explanation"],
            [
                ["1. Varna", "Letters / Phonemes", "Study of individual sounds, categorized into Vowels (Svaras) and Consonants (Vyanjanas)."],
                ["2. Svara", "Pitch / Accent", "Musical pitch and stress accents applied to vowels: Udatta (High tone), Anudatta (Low tone), and Svarita (Circumflex/Combination tone)."],
                ["3. Matra", "Duration / Timing", "The time required to pronounce a vowel: Hrasva (Short - 1 unit), Dirgha (Long - 2 units), and Pluta (Extra-long - 3 units)."],
                ["4. Balam", "Effort / Articulation", "The degree of muscular effort (Prayatna) and point of contact (Sthana) required to produce a sound."],
                ["5. Sama", "Purity & Smoothness", "Maintaining medium speed, rhythm, and clear, harmonious flow of speech without slurring or rushing."],
                ["6. Santana", "Conjunction / Combination", "Rules governing the seamless joining of words and letters during continuous chanting (Sandhi rules)."]
            ]
        ),

        heading("Understanding Vowel Duration (Matra)"),

        text(
            "One Matra is defined as the time taken to blink an eye or a short snap of fingers."
        ),

        list([
            "**Hrasva (Short):** Takes 1 Matra (e.g., 'a', 'i', 'u').",
            "**Dirgha (Long):** Takes 2 Matras (e.g., 'aa', 'ee', 'oo').",
            "**Pluta (Extra-Long):** Takes 3 Matras (e.g., 'Aummm' in chanting).",
            "**Vyanjana (Consonant):** Has half a Matra (1/2 Matra) duration."
        ]),

        keyPoints([
            "6 Pillars: Varna (Letters), Svara (Accent), Matra (Duration), Balam (Effort), Sama (Rhythm), Santana (Junction).",
            "3 Accents: Udatta (High), Anudatta (Low), Svarita (Mixed).",
            "Matra measures phonetic time units (Hrasva=1, Dirgha=2, Pluta=3).",
        ]),
    ],

    {
        summary: "Explore the 6 fundamental pillars of phonetics defined in the Taittiriya Upanishad.",
        minutes: 12,
        tags: ["shat-angas", "varna", "svara", "matra", "taittiriya", "important"],

        mcqs: [
            mcq(
                "Which text explicitly outlines the six core elements (Shat-Angas) of Shiksha?",
                ["Taittiriya Upanishad", "Bhagavad Gita", "Rigveda Samhita", "Yoga Sutras"],
                0,
                "The Shiksha Valli of Taittiriya Upanishad specifies these 6 elements."
            ),
            mcq(
                "What is the duration of a 'Dirgha' (long) vowel in terms of Matras?",
                ["1 Matra", "2 Matras", "3 Matras", "1/2 Matra"],
                1,
                "A Dirgha vowel has a duration of 2 Matras."
            ),
            mcq(
                "Which pitch accent represents the high tone in Vedic recitation?",
                ["Anudatta", "Svarita", "Udatta", "Pluta"],
                2,
                "Udatta represents the high pitch accent."
            ),
        ],

        questions: [
            qa(
                "Explain the six core elements (Shat-Angas) of Shiksha as described in the Taittiriya Upanishad.",
                "The Taittiriya Upanishad enumerates six core elements of phonetics: 1) Varna: The production and classification of vowels and consonants. 2) Svara: Pitch accents (Udatta-high, Anudatta-low, Svarita-combination). 3) Matra: The duration of sound (1 Matra for short, 2 for long, 3 for prolonged vowels). 4) Balam: The physical effort and vocal apparatus used in articulation. 5) Sama: Balanced, fluent, and rhythmic delivery of words. 6) Santana: The principles of word-joining and continuous reading (Sandhi).",
                5
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit1Topics = [introToShiksha, sixCoreElements];