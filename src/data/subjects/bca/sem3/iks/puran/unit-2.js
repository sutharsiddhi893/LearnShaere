/* =========================================================
   BCA • SEM 3 • IKS: Puran
   UNIT 2 — Moral Values, Legends, and Modern Relevance
========================================================= */

import {
    createTopic,
    heading,
    text,
    list,
    table,
    note,
    keyPoints,
    mcq,
    qa,
} from "../../../../../helpers";

/* =========================================================
   TOPIC 1 — Moral Values, Social Ethics, and Ecology in Puranas
========================================================= */

const moralValuesPuranas = createTopic(
    "moral-values-and-social-ethics",
    "Moral Values, Social Ethics, and Environmental Ecology",

    [
        heading("Puranic Moral Framework"),

        text(
            "The Puranas emphasize ethics through actionable social practices rather than abstract philosophical arguments."
        ),

        table(
            ["Ethical Concept", "Puranic Guidance / Practice"],
            [
                ["Dana (Charity)", "Sharing wealth, food (Anna Dana), and knowledge with needy members of society."],
                ["Vrata & Niyama", "Self-discipline through vows, fasting, and dedicated daily routines to purify the mind."],
                ["Tirtha Yatra", "Pilgrimage to sacred geographical locations, promoting national integration and cultural unity."],
                ["Seva (Service)", "Serving parents, guests (Atithi Devo Bhava), and society as a form of divine worship."]
            ]
        ),

        heading("Environmental Ethics and Ecology in Puranas"),

        text(
            "The Puranas advocate deep respect for Mother Nature (Bhudevi). Environmental protection is framed as a moral duty:"
        ),

        list([
            "**Tree Cultivation (Vriksha Ropana):** The Varaha Purana states that a person who plants trees will never go to hell.",
            "**Reverence for Rivers:** Rivers like Ganga, Narmada, and Yamuna are revered as divine mothers, discouraging pollution.",
            "**Protection of Animals:** Non-violence and kindness to animals (Pashu-Dharma) are strongly encouraged in Bhagavata and Padma Puranas."
        ]),

        note(
            "Puranic ecology teaches that nature is not a commodity to be exploited, but a sacred web of life in which humans are merely a single component.",
            "tip",
            "Environmental Wisdom"
        ),

        keyPoints([
            "Promotes ethical living through Dana, Vrata, Seva, and Tirtha.",
            "Framed environmental conservation as a sacred moral duty (Dharma).",
            "Discourages river pollution and encourages tree planting.",
        ]),
    ],

    {
        summary: "Examine moral codes, social ethics, and ecological principles taught in the Puranas.",
        minutes: 10,
        tags: ["ethics", "ecology", "dana", "environment", "iks"],

        mcqs: [
            mcq(
                "In Puranic literature, planting trees and protecting water bodies is categorized as:",
                ["A commercial act", "A sacred moral duty (Dharma)", "An optional hobby", "A political task"],
                1,
                "Environmental preservation is considered a sacred moral obligation."
            ),
        ],

        questions: [
            qa(
                "Explain the environmental ethics and ecological values found in the Puranas.",
                "Puranic literature views nature as divine. Texts like Varaha Purana equate planting trees to earning spiritual merit, declaring that those who plant trees ensure environmental and spiritual well-being. Rivers are revered as mothers (Lokamata), forbidding their pollution. Animals are protected under the concept of Pashu-Dharma. Puranas embed conservation into daily rituals, fasts, and vows, creating a sustainable ecological ethos.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — Case Studies: Puranic Legends and Character Models
========================================================= */

const puranicLegends = createTopic(
    "puranic-legends-and-case-studies",
    "Case Studies: Famous Puranic Legends and Values",

    [
        heading("Learning Character through Stories"),

        text(
            "The Puranas use memorable stories to teach timeless human virtues like determination, devotion, sacrifice, and perseverance."
        ),

        table(
            ["Legend / Character", "Purana Source", "Key Character Trait / Moral Lesson"],
            [
                ["Dhruva", "Vishnu Purana", "Unshakable determination (Sankalpa) and focus in achieving goals despite young age."],
                ["Prahlada", "Bhagavata Purana", "Unwavering faith, courage against tyranny, and devotion (Bhakti)."],
                ["Bhagiratha", "Padma / Brahmanda Purana", "Relentless perseverance ('Bhagiratha Prayatna') to bring River Ganga to Earth for public welfare."],
                ["Markandeya", "Markandeya Purana", "Overcoming fear of death through devotion and inner willpower."],
                ["Dadhichi", "Bhagavata Purana", "Ultimate sacrifice of one's own bones to forge weapons for protecting righteous society."]
            ]
        ),

        heading("The Concept of 'Bhagiratha Prayatna'"),

        text(
            "King Bhagiratha performed extreme penance for generations to bring the Ganga down to nourish the parched Earth. Today, 'Bhagiratha Prayatna' is an Indian idiom representing supreme, unyielding effort against impossible odds."
        ),

        keyPoints([
            "Puranic legends serve as practical case studies for human values.",
            "Dhruva = Determination; Prahlada = Faith & Courage; Bhagiratha = Extreme Perseverance.",
            "Dadhichi symbolizes ultimate selflessness and sacrifice for the public good.",
        ]),
    ],

    {
        summary: "Analyze iconic Puranic character models like Dhruva, Prahlada, Bhagiratha, and Dadhichi.",
        minutes: 12,
        tags: ["legends", "bhagiratha", "prahlada", "dhruva", "stories"],

        mcqs: [
            mcq(
                "Which legend's extraordinary perseverance gave rise to the phrase 'Bhagiratha Prayatna'?",
                ["Dhruva", "Bhagiratha", "Dadhichi", "Prahlada"],
                1,
                "King Bhagiratha's monumental effort to bring Ganga to Earth created this idiom."
            ),
            mcq(
                "Sage Dadhichi is remembered in Puranas for which supreme virtue?",
                ["Truthfulness", "Selfless sacrifice of his body/bones for social defense", "Wealth", "Monarchy"],
                1,
                "Sage Dadhichi donated his bones to make the Vajra weapon for defeating evil."
            ),
        ],

        questions: [
            qa(
                "Describe two famous Puranic legends and the moral values they teach to modern youth.",
                "1) Legend of Bhagiratha: Demonstrates extraordinary perseverance ('Bhagiratha Prayatna'). He worked relentlessly across generations to bring River Ganga to Earth for humanity's welfare, teaching youth that no goal is impossible with dedicated effort. 2) Legend of Prahlada: Teaches standing up for truth and faith against tyrannical power. Prahlada remained fearless despite persecution by his tyrant father, showing that moral courage and devotion triumph over physical oppression.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — Modern Relevance and Cultural Impact of Puranas
========================================================= */

const modernRelevancePuranas = createTopic(
    "modern-relevance-and-cultural-impact",
    "Modern Relevance and Cultural Impact of Puranas",

    [
        heading("Puranas in Modern Indian Culture"),

        text(
            "The Puranas continue to shape modern Indian performing arts, festivals, storytelling, and national identity."
        ),

        table(
            ["Domain", "Puranic Contribution & Impact"],
            [
                ["Classical Arts & Dance", "Bharatanatyam, Kathakali, and Odissi rely heavily on stories from Bhagavata and Shiva Puranas."],
                ["Indian Cinema & Television", "Early Indian cinema (Raja Harishchandra) and modern TV shows derive plotlines directly from Puranas."],
                ["Festivals & Fairs", "Major national festivals like Janmashtami, Shivaratri, Navratri, and Kumbh Mela originate from Puranic traditions."],
                ["Storytelling (Katha Tradition)", "Local Pravachan and Harikatha traditions use Puranas to maintain moral education in villages."]
            ]
        ),

        heading("Relevance to Modern Youth"),

        list([
            "**Emotional Resilience:** Stories of overcoming adversity provide mental strength during failures.",
            "**Holistic Wellness:** Combining physical health, mental clarity, and spiritual harmony.",
            "**Cultural Literacy:** Understanding the roots of Indian idioms, art forms, architecture, and festivals."
        ]),

        keyPoints([
            "Puranas are the foundation of Indian dance, theater, cinema, and festivals.",
            "Kumbh Mela, Shivaratri, and Navratri are rooted in Puranic lore.",
            "Provides moral grounding and emotional strength to modern youth.",
        ]),
    ],

    {
        summary: "Understand how Puranic narratives power modern Indian cinema, dance, art, festivals, and cultural continuity.",
        minutes: 10,
        tags: ["culture", "cinema", "festivals", "relevance", "iks"],

        mcqs: [
            mcq(
                "Which traditional Indian art form draws its narratives heavily from the Bhagavata Purana?",
                ["Classical Dance & Theater", "Modern Computer Graphics", "Western Opera", "Digital Marketing"],
                0,
                "Classical dance forms like Kathak, Kuchipudi, and Odissi depict Puranic stories."
            ),
        ],

        questions: [
            qa(
                "Discuss the cultural impact and modern relevance of the Puranas in Indian society.",
                "The Puranas are the backbone of Indian cultural continuity. They supply themes for classical dance (Bharatanatyam, Kathak), folk theater (Ramlila, Yakshagana), and cinema. Major national festivals such as Mahashivratri, Navratri, and Kumbh Mela draw their historical rationale from Puranic texts. For modern society, they offer practical ethical guidance, environmental awareness, and inspiring stories of resilience, bridging ancient heritage with modern living.",
                5
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit2Topics = [
    moralValuesPuranas,
    puranicLegends,
    modernRelevancePuranas,
];
