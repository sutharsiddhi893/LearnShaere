/* =========================================================
   BCA • SEM 3 • IKS: Nirukta
   UNIT 2 — Methods, Word Classes and Relevance
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

const methodsOfExplanation = createTopic(
    "methods-of-word-explanation",
    "Methods of Word Explanation in Nirukta",
    [
        definition(
            "Etymological Explanation",
            "Etymological explanation means deriving the sense of a word from its root, formation and usage so that the intended meaning becomes clear."
        ),
        heading("Common Methods"),
        table(
            ["Method", "What it does"],
            [
                ["Root analysis", "Links word to verbal/nominal root"],
                ["Derivation", "Shows how the form is built"],
                ["Synonym grouping", "Explains through related words"],
                ["Contextual meaning", "Fixes sense according to mantra/passage"],
                ["Multiple possibilities", "Gives alternate derivations when needed"],
            ]
        ),
        heading("Why Multiple Derivations Appear"),
        text(
            "Sometimes a Vedic word can be explained in more than one valid way. Nirukta tradition may record alternative etymologies and then prefer the meaning that best fits context."
        ),
        list([
            "Language is old and layered.",
            "One form may relate to more than one root idea.",
            "Context decides the most suitable meaning.",
        ]),
        note(
            "Nirukta is not random guessing. It is reasoned linguistic interpretation controlled by usage and context.",
            "tip",
            "Important"
        ),
        keyPoints([
            "Root + form + context = meaning.",
            "Alternate etymologies may exist.",
            "Contextual fitness is decisive.",
        ]),
    ],
    {
        summary: "Learn how Nirukta explains difficult words through root, derivation and context.",
        minutes: 11,
        tags: ["etymology", "method", "context", "root"],
        mcqs: [
            mcq("In Nirukta, final word meaning is best fixed by:", ["Only guessing", "Only modern dictionary", "Root analysis with context", "Ignoring usage"], 2, "Root and context together guide meaning."),
        ],
        questions: [
            qa(
                "Explain the method used in Nirukta to determine the meaning of difficult Vedic words.",
                "Nirukta determines meaning through etymological analysis. Scholars examine possible roots, derivational structure, related synonyms and the context of the Vedic passage. When more than one derivation is possible, the meaning that best suits the mantra’s sense is preferred. Thus Nirukta combines linguistic reasoning with textual context rather than arbitrary interpretation.",
                5
            ),
        ],
    }
);

const wordCategories = createTopic(
    "vedic-word-categories-and-challenges",
    "Vedic Word Categories and Challenges",
    [
        heading("Practical Challenges in Vedic Vocabulary"),
        list([
            "Archaic words no longer used in classical speech.",
            "Words with rare forms or irregular usage.",
            "Terms carrying ritual, symbolic or multiple senses.",
            "Need to balance literal derivation and contextual sense.",
        ]),
        heading("Helpful Classifications"),
        table(
            ["Category idea", "Use in study"],
            [
                ["Common words", "Easier to understand from regular usage"],
                ["Obscure/rare words", "Need special etymological help"],
                ["Synonym lists", "Show related semantic fields"],
                ["Context-sensitive terms", "Meaning changes by passage/ritual setting"],
            ]
        ),
        text(
            "This is why Nirukta became necessary as a separate Vedanga: grammar alone is not always enough for difficult Vedic semantics."
        ),
        keyPoints([
            "Not all Vedic words are transparent.",
            "Special explanation is required for rare terms.",
            "Nirukta fills the semantic gap.",
        ]),
    ],
    {
        summary: "Understand why Vedic vocabulary needs special etymological treatment.",
        minutes: 9,
        tags: ["vedic-words", "semantics", "challenges"],
        mcqs: [
            mcq("Nirukta is especially needed when words are:", ["Modern English words", "Obscure/archaic Vedic terms", "Only numbers", "Computer codes"], 1, "It explains difficult Vedic vocabulary."),
        ],
        questions: [
            qa(
                "Why can grammar alone not always explain Vedic words fully?",
                "Grammar explains structure and correct formation of language, but many Vedic words are archaic, rare or context-loaded. Their sense may not be obvious from form alone. Nirukta therefore provides etymology and contextual meaning. Together, Vyakarana and Nirukta give both structural and semantic mastery of Vedic language.",
                4
            ),
        ],
    }
);

const modernRelevance = createTopic(
    "relevance-of-nirukta-today",
    "Relevance of Nirukta Today",
    [
        heading("Modern Significance"),
        list([
            "Foundation for Indian linguistics and philology.",
            "Useful in Sanskrit studies, translation and textual criticism.",
            "Shows scientific habit of defining terms precisely.",
            "Helps students understand how meaning is preserved in tradition.",
            "Encourages careful reading rather than superficial interpretation.",
        ]),
        heading("IKS Learning Outcome"),
        text(
            "From Nirukta, a student learns that ancient Indian knowledge valued not only what is said, but exact meaning of what is said. Precision of language was treated as a serious academic discipline."
        ),
        note(
            "In exams, connect Nirukta with Vedanga framework, Yaska, Nighantu and importance for correct Veda meaning.",
            "tip",
            "Exam Tip"
        ),
        keyPoints([
            "Nirukta remains relevant to linguistics and Sanskrit studies.",
            "It trains precision in meaning.",
            "It is a major IKS contribution to language science.",
        ]),
    ],
    {
        summary: "Relate Nirukta to modern linguistics, Sanskrit study and careful interpretation.",
        minutes: 8,
        tags: ["relevance", "linguistics", "sanskrit", "iks"],
        mcqs: [
            mcq("A modern lesson from Nirukta is:", ["Ignore meanings", "Interpret words carefully and contextually", "Avoid language study", "Only memorize sound"], 1, "Careful contextual word explanation is the key lesson."),
        ],
        questions: [
            qa(
                "Discuss the present-day relevance of Nirukta.",
                "Nirukta is relevant today as a classical model of etymology and semantic analysis. It helps Sanskrit scholars, translators and students understand difficult terms with method rather than guesswork. More broadly, it teaches intellectual discipline: define words carefully, respect context and preserve accurate meaning. This makes Nirukta an important part of Indian Knowledge Systems and language science.",
                5
            ),
        ],
    }
);

export const unit2Topics = [
    methodsOfExplanation,
    wordCategories,
    modernRelevance,
];