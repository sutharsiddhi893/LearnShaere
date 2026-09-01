/* =========================================================
   BCA • SEM 3 • IKS: Dharmashastra
   UNIT 2 — Forms of Dharma, Aacharndharma and Dharmashastras
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
   TOPIC 1 — Forms of Dharma at present and Kaliyuga
========================================================= */

const formsOfDharmaKaliyuga = createTopic(
    "forms-of-dharma-kaliyuga",
    "Forms of Dharma at Present and Kaliyuga",

    [
        definition(
            "Yuga Dharma",
            "In Hindu cosmology, time is divided into four ages (Yugas): Satya, Treta, Dvapara, and Kali. Yuga Dharma refers to the specific moral duties and spiritual practices most effective in a particular age."
        ),

        heading("Dharma in Different Yugas"),

        table(
            ["Yuga (Age)", "Primary Form of Dharma"],
            [
                ["Satya Yuga", "Tapa (Meditation and Penance)"],
                ["Treta Yuga", "Jnana (Knowledge)"],
                ["Dvapara Yuga", "Yajna (Vedic Sacrifices)"],
                ["Kali Yuga", "Dana (Charity) and Nama-Sankirtana (Chanting God's name)"],
            ]
        ),

        heading("Dharma in the Present Context (Kaliyuga)"),

        text(
            "According to scriptures like the Parashara Smriti, the rules of Dharma change according to the Yuga. In Kaliyuga (the present age), human lifespan is shorter, and physical/mental capacity is reduced. Therefore, the highest form of Dharma is simplified:"
        ),

        list([
            "**Dana (Charity):** Helping the poor, feeding the hungry, and social service are considered the supreme Dharma today.",
            "**Truthfulness (Satya):** Though difficult in this age, sticking to the truth is highly rewarding.",
            "**Compassion (Daya):** Showing empathy towards humans and animals.",
            "**Swadharma:** Honestly performing one's professional and family duties (e.g., a teacher teaching sincerely, a doctor treating patients honestly)."
        ]),
    ],

    {
        summary: "Understand the concept of Yuga Dharma and why Dana (Charity) and Swadharma are the supreme forms of Dharma in Kaliyuga.",
        minutes: 10,
        tags: ["kaliyuga", "yuga-dharma", "dana", "iks"],

        mcqs: [
            mcq(
                "According to the scriptures, what is the supreme form of Dharma in Kaliyuga?",
                ["Tapa (Meditation)", "Yajna (Sacrifice)", "Dana (Charity)", "Jnana (Knowledge)"],
                2,
                "In Kaliyuga, Dana (charity) is considered the highest form of Dharma."
            ),
        ],

        questions: [
            qa(
                "Explain the concept of Yuga Dharma with a focus on Kaliyuga.",
                "Yuga Dharma refers to the specific ethical duties and spiritual practices prescribed for different ages. In Satya Yuga, the focus was Meditation; in Treta, Knowledge; in Dvapara, Sacrifice. According to texts like Parashara Smriti, in Kaliyuga (the current age), human capacities are limited. Therefore, rigid rituals are replaced by 'Dana' (Charity), compassion, and performing one's daily duties honestly (Swadharma) as the highest forms of Dharma.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — Importance of Aacharndharma
========================================================= */

const aacharndharma = createTopic(
    "importance-of-aacharndharma",
    "Importance of Aacharndharma",

    [
        definition(
            "Aacharndharma",
            "Aachara means 'conduct' or 'behavior'. Aacharndharma is the Dharma of daily righteous conduct, ethics, and good manners."
        ),

        heading("Why is Aacharndharma Important?"),

        text(
            "'Acharah paramo dharmah' — Conduct is the highest Dharma (Manusmriti). Knowledge without good conduct is considered useless."
        ),

        list([
            "**Character Building:** It shapes a person's character through daily habits (speaking politely, respecting elders, hygiene).",
            "**Social Trust:** A person with good Aachara is trusted and respected in society.",
            "**Professional Ethics:** Punctuality, honesty at work, and teamwork are modern forms of Aacharndharma.",
            "**Mental Purity:** Following an ethical routine reduces stress, guilt, and mental conflicts."
        ]),

        keyPoints([
            "Aachara is the practical implementation of Dharma in daily life.",
            "Scriptures state that 'Conduct is the highest Dharma'.",
            "It forms the basis of civil society and professional ethics.",
        ]),
    ],

    {
        summary: "Learn why daily righteous conduct (Aacharndharma) is considered the highest form of Dharma.",
        minutes: 8,
        tags: ["aachara", "conduct", "ethics", "character"],

        mcqs: [
            mcq(
                "What does the phrase 'Acharah paramo dharmah' mean?",
                ["Knowledge is supreme", "Conduct is the highest Dharma", "Wealth is important", "Devotion is supreme"],
                1,
                "It translates to: Righteous conduct is the supreme Dharma."
            ),
        ],

        questions: [
            qa(
                "What is Aacharndharma? Discuss its relevance in modern times.",
                "Aacharndharma refers to the code of daily righteous conduct, good manners, and ethical behavior. The scriptures declare 'Acharah paramo dharmah' (Conduct is the highest Dharma). In modern times, it is highly relevant as it translates to professional ethics, civil behavior, respecting others, maintaining hygiene, and fulfilling civic duties. Even if a person possesses great knowledge, without Aachara (good character), that knowledge is not respected by society.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — Examples of Dharma in the Life of Scholars
========================================================= */

const examplesOfDharma = createTopic(
    "examples-of-dharma-scholars",
    "Examples of Dharma in the Life of Scholars and Legends",

    [
        text(
            "Dharma is best understood not through rulebooks, but by observing the lives of great personalities who lived by it."
        ),

        heading("1. King Harishchandra (Satya - Truthfulness)"),
        text(
            "Harishchandra gave up his kingdom, his wealth, and his family, and worked in a cremation ground, just to uphold his promise and the truth (Satya). He proved that truth is a supreme Dharma."
        ),

        heading("2. Yudhishthira (Dharma-raja - Righteousness)"),
        text(
            "In the Mahabharata, Yudhishthira never deviated from righteousness, even when he lost everything. When offered to go to heaven without his loyal dog, he refused, showing supreme compassion and duty."
        ),

        heading("3. Chhatrapati Shivaji Maharaj (Raja-Dharma)"),
        text(
            "He embodied Raja-Dharma (Duty of a King) by ensuring justice, protecting women, respecting all religions, and working selflessly for the welfare of his subjects (Hindavi Swarajya)."
        ),

        heading("4. Mahatma Gandhi (Ahimsa - Non-violence)"),
        text(
            "In modern times, Gandhi applied the ancient Dharma of Ahimsa (non-violence) and Satya (truth) as political tools to fight oppression, proving that Dharma is practical and powerful."
        ),
    ],

    {
        summary: "Analyze how historical and mythological figures like Harishchandra, Yudhishthira, and Gandhi exemplified the characteristics of Dharma.",
        minutes: 10,
        tags: ["history", "legends", "gandhi", "harishchandra", "satya"],

        mcqs: [
            mcq(
                "Which characteristic of Dharma is King Harishchandra most famous for?",
                ["Kshama (Forgiveness)", "Satya (Truthfulness)", "Dana (Charity)", "Ahimsa (Non-violence)"],
                1,
                "King Harishchandra is legendary for his unwavering adherence to Satya (Truth)."
            ),
        ],

        questions: [
            qa(
                "Give two examples of historical or legendary figures who exemplified the characteristics of Dharma in their lives.",
                "1) King Harishchandra exemplifies 'Satya' (Truth). He sacrificed his kingdom and family to honor his word, proving that truth is the highest duty. 2) Mahatma Gandhi exemplifies 'Ahimsa' (Non-violence) and Satya in modern times. He used these ancient principles of Dharma as practical tools for a national freedom struggle, demonstrating that Dharma is not just for ascetics but can be a powerful force for social justice.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — Introduction to the Major Dharmashastras
========================================================= */

const majorDharmashastras = createTopic(
    "introduction-to-major-dharmashastras",
    "Introduction to the Major Dharmashastras",

    [
        definition(
            "Dharmashastras",
            "Dharmashastras are ancient Indian Sanskrit texts concerning law, ethics, duties, and human conduct. They provide the legal and moral framework for society."
        ),

        heading("The Four Pillars of Dharma (Sources)"),

        list([
            "**Shruti (Vedas):** The primary and highest source of knowledge.",
            "**Smriti (Dharmashastras):** Remembered texts containing laws and rules.",
            "**Sadachara:** The conduct of good and noble people.",
            "**Atma-Tushti:** What satisfies one's own conscience."
        ]),

        heading("Key Major Dharmashastras"),

        table(
            ["Text Name", "Key Focus / Importance"],
            [
                ["Manusmriti", "The oldest and most famous text. Covers creation, societal structure, king's duties, and the 10 characteristics of Dharma."],
                ["Yajnavalkya Smriti", "Highly logical and structured into 3 parts: Aachara (conduct), Vyavahara (civil law), and Prayaschitta (penance)."],
                ["Parashara Smriti", "Considered the most authoritative text for Kaliyuga. Focuses heavily on practical rules and agriculture."],
                ["Narada Smriti", "Focuses purely on Vyavahara (legal proceedings and civil law) rather than religious rituals."],
            ]
        ),

        note(
            "Dharmashastras were not rigid constitutions. They were dynamic guidelines that evolved over time. Different regions in India followed different Smritis based on local customs.",
            "tip",
            "Dynamic Law"
        ),
    ],

    {
        summary: "Gain an overview of the major ancient Indian legal and ethical texts like Manusmriti and Yajnavalkya Smriti.",
        minutes: 12,
        tags: ["dharmashastra", "manusmriti", "smriti", "law"],

        mcqs: [
            mcq(
                "Which Dharmashastra is considered the most relevant and authoritative for the current age (Kaliyuga)?",
                ["Manusmriti", "Narada Smriti", "Parashara Smriti", "Yajnavalkya Smriti"],
                2,
                "Parashara Smriti is specifically noted as the guiding text for Kaliyuga."
            ),
            mcq(
                "According to the ancient texts, which of the following is the highest source of Dharma?",
                ["Smriti", "Shruti (Vedas)", "Sadachara", "King's Order"],
                1,
                "Shruti (Vedas) are the primary and supreme source of Dharma."
            ),
        ],

        questions: [
            qa(
                "What are Dharmashastras? Briefly introduce any two major Dharmashastras.",
                "Dharmashastras are ancient Sanskrit texts that define laws, ethics, and duties for individuals and society. They form the basis of traditional Hindu law. 1) Manusmriti: The most famous and oldest text. It covers cosmic creation, duties of different life stages (Ashramas), civil laws, and the duties of a king. 2) Yajnavalkya Smriti: A more logically structured text divided into three clear parts: Aachara (daily conduct), Vyavahara (civil/criminal law), and Prayaschitta (penance). It is highly respected for its legal clarity.",
                5
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit2Topics = [
    formsOfDharmaKaliyuga,
    aacharndharma,
    examplesOfDharma,
    majorDharmashastras,
];