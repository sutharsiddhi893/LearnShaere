/* =========================================================
   BCA • SEM 3 • IKS: Vyakaranam
   UNIT 2 — Karaka, Samasa, Philosophy of Language and Modern Relevance
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
   TOPIC 1 — Karaka Theory (Semantic Roles)
========================================================= */

const karakaTheory = createTopic(
    "karaka-theory-semantic-roles",
    "Karaka Theory — Semantic Roles in Sentence Meaning",

    [
        definition(
            "Karaka",
            "Karaka theory explains the semantic roles of participants in an action — such as agent, object, instrument, location — and links them to sentence structure."
        ),

        heading("Major Karakas (Commonly Taught)"),

        table(
            ["Karaka", "Semantic Role", "Rough Idea"],
            [
                ["Karta", "Agent / Doer", "One who performs the action"],
                ["Karma", "Object", "That which is most affected by the action"],
                ["Karana", "Instrument", "Means by which action is done"],
                ["Sampradana", "Recipient", "One to whom something is given"],
                ["Apadana", "Source/Separation", "From which separation occurs"],
                ["Adhikarana", "Location/Support", "Where/when action is situated"],
            ]
        ),

        heading("Why Karaka is Powerful"),

        list([
            "Focuses on meaning-roles, not only word order.",
            "Helps analyse sentences deeply and unambiguously.",
            "Useful for translation, parsing and linguistic logic.",
            "Shows that Sanskrit grammar is both formal and semantic.",
        ]),

        note(
            "In modern terms, Karaka theory resembles semantic role labeling used in Natural Language Processing (NLP).",
            "tip",
            "CS Connection"
        ),

        keyPoints([
            "Karaka = semantic role of a sentence participant.",
            "Karta, Karma, Karana are among the central roles.",
            "Meaning is structured, not accidental.",
        ]),
    ],

    {
        summary: "Learn Karaka theory as a system of semantic roles connecting grammar and meaning.",
        minutes: 11,
        tags: ["karaka", "karta", "karma", "semantics", "important"],

        mcqs: [
            mcq(
                "In Karaka theory, Karta mainly means:",
                ["Instrument", "Location", "Doer/Agent", "Meter"],
                2,
                "Karta is the agent who performs the action."
            ),
            mcq(
                "Karana represents:",
                ["Recipient", "Instrument/means", "Source only", "Adjective"],
                1,
                "Karana is the instrument by which action is done."
            ),
        ],

        questions: [
            qa(
                "What is Karaka theory? Explain any four karakas with their roles.",
                "Karaka theory describes the semantic roles of entities participating in an action. Four important karakas are: 1) Karta — the doer/agent of action. 2) Karma — the object most affected by the action. 3) Karana — the instrument or means used. 4) Adhikarana — the location or support of the action. This framework helps explain sentence meaning systematically and is one of the deepest contributions of Sanskrit grammar to linguistic theory.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — Samasa (Compound Formation)
========================================================= */

const samasaCompounds = createTopic(
    "samasa-compound-formation",
    "Samasa — Compound Formation in Sanskrit",

    [
        definition(
            "Samasa",
            "Samasa is the process of combining two or more words into a single compound expression, often dropping intermediate endings and creating compact meaning."
        ),

        heading("Major Types of Samasa"),

        table(
            ["Type", "Core Idea", "Example Sense"],
            [
                ["Tatpurusha", "Later word is principal; earlier depends on it", "Relationship like 'of/for/by' compressed"],
                ["Karmadharaya", "Appositional compound (same referent)", "Attribute + noun style compounds"],
                ["Dvandva", "Copulative compound", "X and Y together"],
                ["Bahuvrihi", "Exocentric compound", "Refers to something possessing the described feature"],
                ["Avyayibhava", "Indeclinable compound", "Adverbial/fixed compound sense"],
            ]
        ),

        heading("Why Compounds Matter"),

        list([
            "Make language concise and expressive.",
            "Carry complex ideas in fewer words.",
            "Common in philosophy, poetry, science and technical Sanskrit.",
            "Require precise grammatical understanding to unpack meaning.",
        ]),

        keyPoints([
            "Samasa compresses multiple words into one unit.",
            "Different compound types encode different relations.",
            "Unpacking compounds is a key scholarly skill.",
        ]),
    ],

    {
        summary: "Understand Samasa (compound formation) and major compound types in Sanskrit grammar.",
        minutes: 10,
        tags: ["samasa", "tatpurusha", "dvandva", "bahuvrihi", "compounds"],

        mcqs: [
            mcq(
                "Dvandva compound mainly expresses:",
                ["Only negation", "X and Y together", "Only location", "Only tense"],
                1,
                "Dvandva is a copulative 'and' type compound."
            ),
            mcq(
                "Bahuvrihi compound is generally:",
                ["Exocentric (refers to something else by attribute)", "Only a verb form", "Only a meter", "A number system"],
                0,
                "Bahuvrihi points to an entity possessing the stated features."
            ),
        ],

        questions: [
            qa(
                "What is Samasa? Briefly explain any three types of compounds.",
                "Samasa is compound formation where multiple words combine into one compact expression. Three important types are: 1) Tatpurusha — the final member is principal and earlier members depend on it. 2) Dvandva — coordinates two or more members as 'and'. 3) Bahuvrihi — an exocentric compound that refers to something characterized by the combined attributes. Compounds make Sanskrit precise, dense and expressive.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — Philosophy of Word and Meaning
========================================================= */

const shabdaArtha = createTopic(
    "philosophy-of-word-and-meaning",
    "Philosophy of Word (Shabda) and Meaning (Artha)",

    [
        heading("Grammar beyond Rules"),

        text(
            "Indian grammatical tradition is not only mechanical. It also asks deep questions: What is a word? How does meaning arise? Is meaning fixed by convention, context, or eternal relation?"
        ),

        heading("Key Ideas"),

        list([
            "Shabda (word/sound unit) and Artha (meaning) are analysed together.",
            "Context, expectancy and consistency help determine intended sense.",
            "Grammar protects communication from ambiguity and error.",
            "Correct speech is linked with clear thinking and valid knowledge.",
        ]),

        heading("Sphota Theory (Introductory Idea)"),

        definition(
            "Sphota",
            "In later grammatical philosophy (especially Bhartrhari), Sphota refers to the holistic linguistic unit in which meaning flashes as a whole, beyond only sequenced syllables."
        ),

        text(
            "Even at introductory level, students should know that Sanskrit grammar evolved into a profound philosophy of language, influencing Mimansa, Nyaya and Vedanta debates on meaning."
        ),

        keyPoints([
            "Grammar includes philosophy of meaning.",
            "Word and sense are systematically analysed.",
            "Indian tradition treats language as a path to knowledge.",
        ]),
    ],

    {
        summary: "Get an introductory view of Indian philosophy of language connected with Vyakaranam.",
        minutes: 9,
        tags: ["shabda", "artha", "sphota", "philosophy-of-language"],

        mcqs: [
            mcq(
                "Sphota theory is mainly related to:",
                ["Metallurgy", "Holistic linguistic meaning unit", "Temple architecture", "Medicine only"],
                1,
                "Sphota concerns the flash of holistic verbal meaning."
            ),
        ],

        questions: [
            qa(
                "How does Vyakaranam connect grammar with philosophy of meaning?",
                "Vyakaranam does not stop at word formation; it also examines how meaning is conveyed. Indian grammarians studied the relation of shabda and artha, the role of context, and the conditions of clear communication. Later ideas like Sphota explore meaning as a holistic linguistic insight. Thus grammar becomes both a practical science of correctness and a philosophical enquiry into language and knowledge.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — Modern Relevance in Linguistics and Computer Science
========================================================= */

const modernRelevanceVyakarana = createTopic(
    "modern-relevance-of-vyakaranam",
    "Modern Relevance of Vyakaranam in Linguistics and Computer Science",

    [
        heading("Why the World Still Studies Panini"),

        list([
            "Ashtadhyayi is a masterpiece of formal rule systems.",
            "Highly compact meta-rules resemble programming macros and functions.",
            "Ordered rule application resembles algorithms and production systems.",
            "Excellent model for morphological analysis and generative grammar.",
        ]),

        heading("Applications in Computer Science / NLP"),

        table(
            ["Vyakarana Idea", "Modern Parallel"],
            [
                ["Sutra rule system", "Rule engines / formal grammars"],
                ["Pratyahara compression", "Macros, aliases, symbolic notation"],
                ["Ordered derivation", "Algorithmic transformations"],
                ["Karaka roles", "Semantic role labeling in NLP"],
                ["Sandhi rules", "Morphological segmentation / join models"],
                ["Samasa analysis", "Compound splitting in text processing"],
            ]
        ),

        heading("Value for Students of IKS + IT"),

        text(
            "For BCA/IT students, Vyakaranam demonstrates that ancient India developed rigorous, almost computational models of language long before modern computers. It trains precision, abstraction and structured thinking."
        ),

        note(
            "Exam tip: Always connect Panini → Ashtadhyayi → rule-based system → relevance to linguistics/NLP/AI.",
            "tip",
            "Exam Tip"
        ),

        keyPoints([
            "Paninian grammar is formal and generative.",
            "Strong relevance to NLP, AI and computational linguistics.",
            "Teaches structured, rule-based thinking.",
        ]),
    ],

    {
        summary: "Relate Vyakaranam and Panini’s system to modern linguistics, NLP and computational thinking.",
        minutes: 10,
        tags: ["nlp", "ai", "computational-linguistics", "panini", "relevance"],

        mcqs: [
            mcq(
                "Panini's grammar is often compared to modern:",
                ["Painting styles", "Formal rule-based/algorithmic systems", "Cooking recipes only", "Sports rules only"],
                1,
                "Ashtadhyayi resembles formal generative rule systems."
            ),
            mcq(
                "Karaka analysis is closest to which NLP task?",
                ["Image compression", "Semantic role labeling", "File encryption", "Sorting numbers"],
                1,
                "Karaka roles parallel semantic roles in NLP."
            ),
        ],

        questions: [
            qa(
                "Discuss the modern relevance of Vyakaranam with reference to Computer Science and NLP.",
                "Vyakaranam, especially Panini’s Ashtadhyayi, is highly relevant to modern Computer Science because it is a formal, ordered, generative rule system. Its compact notations, meta-rules and stepwise derivations resemble algorithms and grammar engines. Concepts like sandhi, samasa and karaka support morphological analysis, compound splitting and semantic role labeling in NLP. For IT students, it shows that structured linguistic computation was developed in ancient India and still inspires computational linguistics and AI language processing.",
                5
            ),
        ],
    }
);

export const unit2Topics = [
    karakaTheory,
    samasaCompounds,
    shabdaArtha,
    modernRelevanceVyakarana,
];