/* =========================================================
   BCA • SEM 3 • IKS: Nirukta
   UNIT 1 — Meaning, Scope and Foundations of Nirukta
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

const meaningOfNirukta = createTopic(
    "meaning-and-scope-of-nirukta",
    "Meaning and Scope of Nirukta",
    [
        definition(
            "Nirukta",
            "Nirukta is one of the six Vedangas. It is the ancient Indian science of etymology and semantic explanation of Vedic words, especially difficult or uncommon terms."
        ),
        heading("Why Nirukta is Needed"),
        list([
            "Many Vedic words are archaic and not used in ordinary speech.",
            "Correct meaning of mantras depends on correct word explanation.",
            "Without etymology, ritual and philosophical interpretation can go wrong.",
            "Nirukta preserves linguistic memory of Vedic Sanskrit.",
        ]),
        heading("Nirukta among Vedangas"),
        table(
            ["Vedanga", "Focus"],
            [
                ["Shiksha", "Phonetics / pronunciation"],
                ["Vyakarana", "Grammar"],
                ["Nirukta", "Etymology / word meaning"],
                ["Chandas", "Meter"],
                ["Jyotisha", "Astronomy / timing"],
                ["Kalpa", "Ritual procedure"],
            ]
        ),
        note(
            "If Vyakarana tells how words are formed and used, Nirukta explains what difficult Vedic words mean and why.",
            "tip",
            "Nirukta vs Vyakarana"
        ),
        keyPoints([
            "Nirukta = Vedic etymology and semantics.",
            "It is a Vedanga supporting correct Veda understanding.",
            "It explains difficult/obscure Vedic words.",
        ]),
    ],
    {
        summary: "Understand Nirukta as the Vedanga of etymology and its role in Vedic interpretation.",
        minutes: 10,
        tags: ["nirukta", "vedanga", "etymology", "veda", "iks"],
        mcqs: [
            mcq("Nirukta mainly deals with:", ["Temple building", "Etymology of Vedic words", "Surgery", "Music only"], 1, "Nirukta explains Vedic word meanings."),
            mcq("Nirukta is one of the:", ["Upanishads only", "Vedangas", "Puranas", "Smritis only"], 1, "It is counted among the six Vedangas."),
        ],
        questions: [
            qa(
                "What is Nirukta? Why is it important in Vedic studies?",
                "Nirukta is the Vedanga concerned with etymology and explanation of Vedic words. Many Vedic terms are ancient and uncommon, so without Nirukta their meanings may be misunderstood. Correct word explanation helps in proper chanting interpretation, ritual understanding and philosophical study of the Veda. Thus Nirukta preserves linguistic and semantic knowledge of the Vedic tradition.",
                5
            ),
        ],
    }
);

const yaskaAndNighantu = createTopic(
    "yaska-nighantu-and-nirukta-text",
    "Yaska, Nighantu and the Nirukta Text",
    [
        definition(
            "Yaska",
            "Yaska is the most famous ancient authority on Nirukta. His work explains Vedic words using etymological analysis and is traditionally linked with the Nighantu word-lists."
        ),
        heading("Nighantu and Nirukta"),
        table(
            ["Text", "Nature"],
            [
                ["Nighantu", "Collection/classified lists of Vedic words and synonyms"],
                ["Nirukta", "Etymological explanation and interpretation of those words"],
            ]
        ),
        text(
            "In simple terms, Nighantu gathers difficult Vedic vocabulary, while Nirukta explains meanings, roots and contextual sense."
        ),
        heading("Yaska’s Contribution"),
        list([
            "Systematized Vedic etymology.",
            "Explained words through roots, derivation and usage.",
            "Discussed methods of interpretation when meaning is obscure.",
            "Preserved ancient linguistic insights for later scholars.",
        ]),
        heading("Basic Method of Etymology"),
        list([
            "Identify the word in Vedic context.",
            "Relate it to possible roots/derivatives.",
            "Compare synonyms and similar usages.",
            "Fix meaning according to sense of the mantra/passage.",
        ]),
        keyPoints([
            "Yaska is central to Nirukta tradition.",
            "Nighantu = word list; Nirukta = explanation.",
            "Meaning is decided with root + context.",
        ]),
    ],
    {
        summary: "Learn about Yaska, Nighantu and how Nirukta explains Vedic vocabulary.",
        minutes: 12,
        tags: ["yaska", "nighantu", "etymology", "important"],
        mcqs: [
            mcq("Who is the chief ancient authority of Nirukta?", ["Panini", "Yaska", "Charaka", "Jaimini"], 1, "Yaska is the main Nirukta authority."),
            mcq("Nighantu is mainly a:", ["Medical text", "Word-list of Vedic terms", "Law code", "Music treatise"], 1, "Nighantu collects Vedic words/synonyms."),
        ],
        questions: [
            qa(
                "Write a short note on Yaska and the relation between Nighantu and Nirukta.",
                "Yaska is the principal ancient scholar of Nirukta. The Nighantu provides classified lists of Vedic words and synonyms, while Nirukta explains their etymology and meanings. Yaska’s method combines linguistic derivation with contextual sense of Vedic passages. This tradition helped preserve the semantic understanding of difficult Vedic vocabulary.",
                5
            ),
        ],
    }
);

const importanceInIks = createTopic(
    "importance-of-nirukta-in-iks",
    "Importance of Nirukta in Indian Knowledge Systems",
    [
        heading("Knowledge Value of Nirukta"),
        list([
            "Protects authentic meaning of sacred texts.",
            "Supports ritual accuracy through correct semantic understanding.",
            "Helps grammar, linguistics and philosophy.",
            "Shows ancient India’s scientific approach to language.",
            "Forms a bridge between sound (Shiksha), form (Vyakarana) and meaning (Nirukta).",
        ]),
        heading("Language Science in Ancient India"),
        table(
            ["Level", "Discipline"],
            [
                ["Sound / Pronunciation", "Shiksha"],
                ["Structure / Grammar", "Vyakarana"],
                ["Meaning / Etymology", "Nirukta"],
            ]
        ),
        text(
            "Together these Vedangas show that Vedic education was not only devotional but also highly linguistic and analytical."
        ),
        keyPoints([
            "Nirukta = science of meaning.",
            "Essential for authentic Veda interpretation.",
            "Major contribution of IKS to linguistics.",
        ]),
    ],
    {
        summary: "Understand why Nirukta is a key linguistic science within IKS.",
        minutes: 9,
        tags: ["iks", "linguistics", "vedanga", "meaning"],
        mcqs: [
            mcq("Nirukta is best described as ancient Indian:", ["Surgery", "Etymological science", "Architecture", "Politics only"], 1, "It is etymology/semantics of Vedic words."),
        ],
        questions: [
            qa(
                "Explain the place of Nirukta in Indian Knowledge Systems.",
                "In IKS, Nirukta occupies a central place as the science of etymology and semantic explanation. It complements Shiksha and Vyakarana by focusing on meaning. Through Nirukta, ancient scholars preserved correct understanding of Vedic language, supported ritual and philosophical interpretation, and demonstrated a systematic linguistic method. It is therefore both a religious-supportive and scientific-linguistic discipline.",
                5
            ),
        ],
    }
);

export const unit1Topics = [
    meaningOfNirukta,
    yaskaAndNighantu,
    importanceInIks,
];