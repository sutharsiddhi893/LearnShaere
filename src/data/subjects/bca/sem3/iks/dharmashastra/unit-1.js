/* =========================================================
   BCA • SEM 3 • IKS: Dharmashastra
   UNIT 1 — Etymology, Meaning and Characteristics of Dharma
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
   TOPIC 1 — Etymology and Meaning of the word Dharma
========================================================= */

const etymologyAndMeaning = createTopic(
    "etymology-and-meaning-of-dharma",
    "Etymology and Meaning of the word Dharma",

    [
        definition(
            "Dharma (ધર્મ)",
            "The word 'Dharma' is derived from the Sanskrit root 'Dhri' (ધૃ), which means 'to hold', 'to maintain', 'to support', or 'to sustain'. Therefore, Dharma is that which holds society, nature, and the universe together."
        ),

        heading("Broad Meaning Across Cultures"),

        text(
            "Dharma is a complex concept that cannot be translated into a single English word. It does not simply mean 'religion'. Depending on the context, it translates to:"
        ),

        list([
            "Duty or Responsibility (e.g., Raja-Dharma: Duty of a King)",
            "Righteousness and Morality",
            "Law and Justice",
            "The innate nature of a thing (e.g., The dharma of fire is to burn)",
            "Cosmic order that sustains the universe",
        ]),

        heading("Dharma in Different Traditions"),

        table(
            ["Tradition", "Interpretation of Dharma"],
            [
                ["Hinduism", "Righteous behavior, cosmic law, and duties based on life stage (Varnashrama)."],
                ["Buddhism", "The teachings of the Buddha (Dhamma) and the universal truth."],
                ["Jainism", "The doctrine of non-violence (Ahimsa) and the nature of reality."],
                ["Sikhism", "Righteous path and moral duty (Dharam)."],
            ]
        ),

        note(
            "Dharma is universal. While 'religion' is often a belief system centered around a specific deity or prophet, Dharma is the eternal law of nature and ethical conduct applicable to all human beings.",
            "tip",
            "Crucial Distinction"
        ),

        keyPoints([
            "Root word: 'Dhri' (to uphold/sustain).",
            "Dharma is not 'religion'; it means duty, righteousness, and cosmic law.",
            "It represents the fundamental nature of an entity.",
        ]),
    ],

    {
        summary: "Understand the Sanskrit roots of the word Dharma and its multifaceted meaning across different Indian traditions.",
        minutes: 10,
        tags: ["dharma", "etymology", "philosophy", "iks"],

        mcqs: [
            mcq(
                "The word 'Dharma' is derived from which Sanskrit root?",
                ["Dharm", "Dhri", "Dha", "Dhyan"],
                1,
                "'Dhri' means to hold, sustain, or support."
            ),
            mcq(
                "What is the most accurate translation of Dharma?",
                ["Religion", "Worship", "Righteous duty and cosmic law", "Rituals"],
                2,
                "Dharma encompasses duty, law, morality, and the sustaining force of the universe."
            ),
        ],

        questions: [
            qa(
                "Explain the etymology and meaning of the word 'Dharma'.",
                "The word 'Dharma' is derived from the Sanskrit root 'Dhri', which means to hold, maintain, or sustain. It refers to the universal principles that uphold society and the cosmos. Unlike the Western concept of 'religion' which implies a specific belief system, Dharma implies duty, righteousness, moral law, and the inherent nature of a thing (e.g., the dharma of water is to flow and cool). In human life, it dictates ethical conduct and responsibilities.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — Characteristics of Dharma
========================================================= */

const characteristicsOfDharma = createTopic(
    "characteristics-of-dharma",
    "Characteristics of Dharma",

    [
        text(
            "Ancient Indian scriptures, particularly the Manusmriti, outline the core characteristics (Lakshanas) of Dharma. These form the foundation of ethical human conduct."
        ),

        heading("The Ten Characteristics of Dharma (Manusmriti)"),

        text(
            "According to Manu, Dharma has 10 defining characteristics (Dasha Lakshana):"
        ),

        table(
            ["Characteristic (Sanskrit)", "Meaning (English)", "Application in Life"],
            [
                ["1. Dhriti", "Patience / Fortitude", "Staying calm and firm during difficult times."],
                ["2. Kshama", "Forgiveness", "Letting go of anger and not seeking revenge."],
                ["3. Dama", "Self-Control", "Controlling one's mind and desires."],
                ["4. Asteya", "Non-Stealing", "Not taking what belongs to others, physically or intellectually."],
                ["5. Shaucha", "Purity", "Cleanliness of body (external) and mind/thoughts (internal)."],
                ["6. Indriyanigraha", "Control of Senses", "Restraining the five senses from excessive worldly pleasures."],
                ["7. Dhi", "Wisdom / Intellect", "Using logic, reason, and positive intellect to make decisions."],
                ["8. Vidya", "Knowledge", "Acquiring spiritual and material knowledge."],
                ["9. Satya", "Truthfulness", "Speaking the truth and living an honest life."],
                ["10. Akrodha", "Absence of Anger", "Maintaining peace and not giving in to rage."],
            ]
        ),

        note(
            "These 10 characteristics are universal. They are not limited to any specific community or religion but are fundamental human values required for a peaceful society.",
            "tip",
            "Universal Values"
        ),

        keyPoints([
            "Dharma is defined by practical human behavior.",
            "Manusmriti defines 10 core traits: Patience, Forgiveness, Self-control, Non-stealing, Purity, Sense-control, Wisdom, Knowledge, Truth, and Absence of anger.",
        ]),
    ],

    {
        summary: "Learn the 10 characteristics (Dasha Lakshanas) of Dharma as described in ancient scriptures like Manusmriti.",
        minutes: 12,
        tags: ["dharma", "lakshana", "manusmriti", "ethics"],

        mcqs: [
            mcq(
                "According to Manusmriti, how many characteristics (Lakshanas) does Dharma have?",
                ["5", "8", "10", "12"],
                2,
                "Manusmriti describes the Dasha Lakshana (10 characteristics) of Dharma."
            ),
            mcq(
                "What does 'Asteya' mean in the context of Dharma?",
                ["Truthfulness", "Non-stealing", "Purity", "Patience"],
                1,
                "Asteya means refraining from stealing."
            ),
        ],

        questions: [
            qa(
                "List and explain any five characteristics of Dharma according to Manusmriti.",
                "According to Manusmriti, five key characteristics of Dharma are: 1) Dhriti (Patience) - maintaining mental stability in tough times. 2) Kshama (Forgiveness) - pardoning others and avoiding revenge. 3) Satya (Truthfulness) - being honest in words and actions. 4) Asteya (Non-stealing) - not taking others' property or ideas. 5) Akrodha (Absence of Anger) - maintaining peace of mind and not losing control due to rage. These traits build a moral and harmonious society.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — Explanation of Dharma by Great Scholars
========================================================= */

const explanationByScholars = createTopic(
    "explanation-by-great-scholars",
    "Explanation of the Word Dharma by Great Scholars",

    [
        text(
            "Throughout history, philosophers, saints, and scholars have interpreted Dharma to guide society."
        ),

        heading("1. Maharshi Vyasa (In Mahabharata)"),
        list([
            "Vyasa defines Dharma as the force that holds the universe together.",
            "Quote: 'Dharanaat dharma ityaahu dharmo dharayate prajaah' (Dharma is so called because it upholds; it is Dharma that sustains the people).",
            "He emphasizes that any action that brings welfare to all beings is Dharma."
        ]),

        heading("2. Swami Vivekananda"),
        list([
            "Swami Vivekananda explained Dharma as the 'manifestation of the divinity already in man'.",
            "He believed that the Dharma of India is spirituality. He taught that doing one's duty selflessly, without expectation of reward (Karma Yoga), is true Dharma.",
        ]),

        heading("3. Dr. S. Radhakrishnan"),
        list([
            "The great philosopher and former President of India described Dharma as the 'principle of righteousness'.",
            "He stated that Dharma is not a static set of rules but an evolving concept that adapts to the needs of society while maintaining core moral values.",
        ]),

        heading("4. Sri Aurobindo"),
        list([
            "He interpreted Dharma as the 'inner law of our being'.",
            "According to him, Swadharma (one's own duty) is the path a person must follow based on their unique nature and talents for spiritual evolution.",
        ]),

        keyPoints([
            "Vyasa: Dharma sustains society.",
            "Vivekananda: Dharma is selfless duty and manifestation of divinity.",
            "Radhakrishnan: It is an evolving principle of righteousness.",
            "Aurobindo: It is the inner law of human evolution (Swadharma).",
        ]),
    ],

    {
        summary: "Explore how great Indian scholars like Vyasa, Vivekananda, and Radhakrishnan interpreted the concept of Dharma.",
        minutes: 10,
        tags: ["scholars", "vivekananda", "vyasa", "philosophy"],

        mcqs: [
            mcq(
                "Who stated that 'Dharma is so called because it upholds and sustains the people'?",
                ["Swami Vivekananda", "Sri Aurobindo", "Maharshi Vyasa", "Chanakya"],
                2,
                "Maharshi Vyasa stated this in the Mahabharata."
            ),
        ],

        questions: [
            qa(
                "How did Swami Vivekananda and Dr. S. Radhakrishnan explain the concept of Dharma?",
                "Swami Vivekananda explained Dharma as the manifestation of inner divinity through selfless duty (Karma Yoga). He believed practical spirituality and serving humanity was true Dharma. Dr. S. Radhakrishnan described Dharma as the 'principle of righteousness'. He viewed it not as a rigid set of dogmas, but as an evolving ethical framework that guides human progress, adapts to societal changes, and maintains social harmony.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — Importance of Dharma in Human Life
========================================================= */

const importanceOfDharma = createTopic(
    "importance-of-dharma-in-human-life",
    "The Importance of Dharma in Human Life",

    [
        text(
            "Dharma is the most critical among the four Purusharthas (goals of human life): Dharma, Artha (wealth), Kama (desire), and Moksha (liberation). Wealth and desires must only be pursued through the path of Dharma."
        ),

        heading("Why is Dharma Essential?"),

        table(
            ["Aspect", "Importance"],
            [
                ["Personal Growth", "Provides inner peace, self-discipline, and a clear sense of purpose."],
                ["Social Harmony", "Prevents chaos (Matsya Nyaya - rule of the big fish eating the small fish) by establishing moral laws."],
                ["Ethical Guide", "Helps in resolving moral dilemmas (Dharma-Sankat) by providing a framework of what is right."],
                ["Environmental Balance", "Dharma teaches respect for nature, rivers, and animals, leading to ecological sustainability."],
                ["Foundation for Moksha", "A life lived according to Dharma purifies the mind, which is a prerequisite for spiritual liberation (Moksha)."],
            ]
        ),

        note(
            "'Yato Dharmas tato Jayah' (Where there is Dharma, there is victory) - This famous motto of the Supreme Court of India highlights that ultimate success and justice lie only on the path of righteousness.",
            "tip",
            "Real World Connection"
        ),
    ],

    {
        summary: "Understand the practical importance of Dharma for personal growth, social harmony, and environmental balance.",
        minutes: 8,
        tags: ["importance", "ethics", "purushartha", "harmony"],

        mcqs: [
            mcq(
                "Among the four Purusharthas, which one forms the foundation for the others?",
                ["Artha", "Kama", "Dharma", "Moksha"],
                2,
                "Dharma is the foundation; wealth and desires must be acquired through Dharma."
            ),
        ],

        questions: [
            qa(
                "Discuss the importance of Dharma in maintaining social harmony and personal growth.",
                "In personal life, Dharma brings self-discipline, inner peace, and clarity in decision-making by outlining a path of righteousness. It purifies the mind and prepares a person for ultimate liberation (Moksha). Socially, Dharma prevents chaos (the law of the jungle) by establishing ethics, justice, and mutual respect. It ensures that people pursue wealth (Artha) and desires (Kama) without harming others, thus sustaining a balanced, peaceful, and cooperative society.",
                5
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit1Topics = [
    etymologyAndMeaning,
    characteristicsOfDharma,
    explanationByScholars,
    importanceOfDharma,
];