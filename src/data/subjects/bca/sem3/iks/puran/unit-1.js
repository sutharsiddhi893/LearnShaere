/* =========================================================
   BCA • SEM 3 • IKS: Puran
   UNIT 1 — Introduction, Pancha Lakshana, and Classification of Puranas
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
   TOPIC 1 — Definition, Meaning, and Origin of Puranas
========================================================= */

const introToPuranas = createTopic(
    "definition-and-meaning-of-puranas",
    "Definition, Meaning, and Origin of Puranas",

    [
        definition(
            "Puranas (પુરાણ)",
            "The word 'Purana' literally means 'ancient' or 'old'. Etymologically, 'Pura navam bhavati iti puranam' means that which, despite being ancient, remains eternally new and relevant. They are encyclopedic Sanskrit texts covering cosmology, history, geography, and cultural ethics."
        ),

        heading("Origin and Authorship"),

        text(
            "Traditionally, Maharshi Krishna Dvaipayana Vyasa (Maharshi Vyasa) is considered the compiler and author of the 18 Maha-Puranas. He compiled the vast Vedic wisdom into accessible stories and narrative forms for the general public."
        ),

        heading("Role of Puranas in Indian Tradition"),

        list([
            "**Simplifying Complex Truths:** Translating abstract Vedic and Upanishadic philosophy into relatable stories.",
            "**Cultural Integration:** Unifying diverse regional traditions, local deities, and customs under a shared framework.",
            "**Historical Records:** Preserving genealogies of ancient dynasties (Solar and Lunar dynasties - Surya and Chandra Vamsha).",
            "**Scientific and Geographical Knowledge:** Recording knowledge of astronomy, geography (Bhugola), flora, fauna, and medicine.",
        ]),

        heading("Puranas vs Epics (Itihasa)"),

        table(
            ["Aspect", "Itihasa (Ramayana & Mahabharata)", "Puranas"],
            [
                ["Meaning", "'Thus indeed it happened' (Eye-witness history)", "'Ancient stories and wisdom'"],
                ["Focus", "Life and lineage of specific heroes (Rama, Pandavas)", "Cosmic creation, genealogies, rituals, and universal history"],
                ["Structure", "Epic poem centered on a single central narrative", "Encyclopedic collections covering multiple topics and stories"],
                ["Core Work", "Ramayana by Valmiki, Mahabharata by Vyasa", "18 Maha-Puranas compiled by Maharshi Vyasa"],
            ]
        ),

        note(
            "The Puranas are often referred to as the 'Fifth Veda' (Panchama Veda) because they make Vedic wisdom accessible to every section of society without restriction.",
            "tip",
            "The Fifth Veda"
        ),

        keyPoints([
            "Purana means 'ancient yet ever-new'.",
            "Compiled by Maharshi Ved Vyasa.",
            "Acts as the 'Fifth Veda', making philosophy accessible through stories.",
        ]),
    ],

    {
        summary: "Understand the etymology, origin, compiler, and foundational role of Puranas in Indian civilization.",
        minutes: 10,
        tags: ["puran", "vyasa", "vedas", "itihasa", "iks"],

        mcqs: [
            mcq(
                "Who is traditionally credited with compiling the 18 Maha-Puranas?",
                ["Sage Valmiki", "Maharshi Ved Vyasa", "Sage Agastya", "Sage Gautama"],
                1,
                "Maharshi Ved Vyasa compiled the 18 Maha-Puranas."
            ),
            mcq(
                "Which text tradition is often referred to as the 'Fifth Veda'?",
                ["Dharmashastras", "Puranas", "Vedangas", "Aranyakas"],
                1,
                "Puranas are called the Fifth Veda for popularizing Vedic wisdom."
            ),
        ],

        questions: [
            qa(
                "Define Purana and explain its significance in Indian Knowledge Systems.",
                "The word Purana means 'ancient yet ever-new'. Puranas are encyclopedic Sanskrit texts compiled by Maharshi Ved Vyasa that preserve India's cultural, historical, geographical, and spiritual knowledge. Their main significance lies in making abstract Vedic philosophy understandable to common people through storytelling. They contain records of royal genealogies, creation theories, moral codes, geography, and temple traditions, earning them the title of the 'Fifth Veda'.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — The Pancha Lakshana and Classification
========================================================= */

const panchaLakshana = createTopic(
    "pancha-lakshana-and-classification",
    "Panchachalakshana (Five Characteristics) and Classification",

    [
        definition(
            "Pancha Lakshana",
            "According to Amarakosha and classical scholars, a standard Purana must cover five core topics (Pancha Lakshana): Sarga, Pratisarga, Vamsha, Manvantara, and Vamshanucharita."
        ),

        heading("The Five Characteristics (Pancha Lakshana)"),

        table(
            ["Characteristic", "Meaning", "Description / Content"],
            [
                ["1. Sarga", "Primary Creation", "Creation of the universe from primordial elements (Prakriti, Mahat, Ahankara)."],
                ["2. Pratisarga", "Secondary Creation & Dissolution", "Periodic dissolution (Pralaya) and re-creation of worlds and living beings."],
                ["3. Vamsha", "Genealogy", "Lineage and genealogies of Devas, Patriarchs (Prajapatis), and Sages."],
                ["4. Manvantara", "Cosmic Eras", "Description of the 14 great epochs of time, each ruled by a specific Manu."],
                ["5. Vamshanucharita", "Dynastic Histories", "Detailed histories and deeds of solar (Surya) and lunar (Chandra) royal dynasties."]
            ]
        ),

        heading("Classification of Puranas"),

        text(
            "There are 18 main Puranas (Maha-Puranas) and 18 secondary Puranas (Upa-Puranas). The 18 Maha-Puranas are broadly classified according to the Three Gunas (Satva, Rajas, Tamas) and the deity they highlight."
        ),

        table(
            ["Guna Category", "Dominant Deity", "Associated Maha-Puranas (Examples)"],
            [
                ["Satvik Puranas", "Lord Vishnu", "Vishnu Purana, Srimad Bhagavata Purana, Garuda Purana, Padma Purana, Varaha Purana, Narada Purana"],
                ["Rajasik Puranas", "Lord Brahma", "Brahma Purana, Brahmanda Purana, Brahmavaivarta Purana, Markandeya Purana, Bhavishya Purana, Vamana Purana"],
                ["Tamasik Puranas", "Lord Shiva / Agni", "Shiva Purana, Linga Purana, Skanda Purana, Agni Purana, Matsya Purana, Kurma Purana"]
            ]
        ),

        keyPoints([
            "Pancha Lakshana: Sarga, Pratisarga, Vamsha, Manvantara, Vamshanucharita.",
            "18 Maha-Puranas and 18 Upa-Puranas exist.",
            "Classified by 3 Gunas: Satvik (Vishnu), Rajasik (Brahma), Tamasik (Shiva).",
        ]),
    ],

    {
        summary: "Learn the 5 essential characteristics of Puranas and their classification into 18 Maha-Puranas based on Gunas.",
        minutes: 12,
        tags: ["pancha-lakshana", "sarga", "manvantara", "mahapuranas", "important"],

        mcqs: [
            mcq(
                "How many essential characteristics (Pancha Lakshana) define a classic Purana?",
                ["3", "5", "10", "18"],
                1,
                "A classic Purana is defined by 5 characteristics (Pancha Lakshana)."
            ),
            mcq(
                "Which Pancha Lakshana topic deals with the dynastic histories of kings and heroes?",
                ["Sarga", "Pratisarga", "Manvantara", "Vamshanucharita"],
                3,
                "Vamshanucharita records the history of royal dynasties."
            ),
            mcq(
                "How many total Maha-Puranas are traditionally recognized?",
                ["12", "18", "24", "108"],
                1,
                "There are traditionally 18 Maha-Puranas."
            ),
        ],

        questions: [
            qa(
                "Explain the 'Pancha Lakshana' (Five Characteristics) of Puranas in detail.",
                "The Pancha Lakshana defines the five core themes a standard Purana must contain: 1) Sarga: Primary creation of the universe from fundamental elements. 2) Pratisarga: Secondary creation after periodic cosmic dissolution (Pralaya). 3) Vamsha: Lineage and genealogy of gods, sages, and prajapatis. 4) Manvantara: Cosmic time cycles, detailing the 14 eras governed by different Manus. 5) Vamshanucharita: Genealogies and historical accounts of solar and lunar dynasties of kings. Together, these five features combine cosmology, history, and genealogy.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — Scientific, Geographical, and Historical Insights in Puranas
========================================================= */

const scientificInsightsPuranas = createTopic(
    "scientific-and-historical-insights-in-puranas",
    "Scientific, Geographical, and Historical Insights in Puranas",

    [
        heading("Scientific & Material Knowledge in Puranas"),

        text(
            "Beyond religion, the Puranas are vast repositories of secular sciences, environmental knowledge, and geography."
        ),

        table(
            ["Domain", "Purana Source", "Key Knowledge Preserved"],
            [
                ["Geography (Bhugola)", "Vishnu Purana, Matsya Purana", "Description of continents (Dvipas), oceans, mountain ranges, and rivers of Jambudvipa (India)."],
                ["Astronomy (Jyotisha)", "Surya Purana, Agni Purana", "Movement of planets, solar and lunar eclipses, calculation of time cycles (Yugas)."],
                ["Medicine & Botany (Vrikshayurveda)", "Agni Purana, Garuda Purana", "Herbal remedies, tree cultivation, diagnosis of diseases, and plant care."],
                ["Architecture & Iconography (Vastu)", "Matsya Purana, Agni Purana", "Town planning, temple design rules, sculpture making (Shilpa Shastra)."],
                ["Metallurgy & Chemistry (Rasa Shastra)", "Garuda Purana", "Gems classification (Ratna Pariksha), purification of metals, and alchemy."]
            ]
        ),

        heading("Puranas as Sources of Indian History"),

        text(
            "Modern historians (like V.A. Smith and F.E. Pargiter) have used dynastic lists in the Vishnu, Matsya, and Vayu Puranas to reconstruct ancient Indian history, verifying dynasties such as the Mauryas, Guptas, and Satavahanas."
        ),

        keyPoints([
            "Puranas contain geography (Bhugola), astronomy, and medicine (Vrikshayurveda).",
            "Agni Purana and Matsya Purana contribute to Vastu Shastra and town planning.",
            "Used by historians to reconstruct ancient Indian dynasties.",
        ]),
    ],

    {
        summary: "Discover the scientific, botanical, architectural, and historical data preserved within the Puranic corpus.",
        minutes: 10,
        tags: ["geography", "botany", "history", "vastu", "science", "iks"],

        mcqs: [
            mcq(
                "Which Purana contains extensive information on Vrikshayurveda (Plant Science and Botany)?",
                ["Agni Purana", "Vishnu Purana", "Garuda Purana", "Skanda Purana"],
                0,
                "Agni Purana details plant sciences, farming, and Vrikshayurveda."
            ),
        ],

        questions: [
            qa(
                "Discuss the scientific and historical value of the Puranas beyond religious narrative.",
                "The Puranas serve as comprehensive encyclopedias of ancient Indian knowledge. Historically, the dynastic lists in texts like Vishnu, Matsya, and Vayu Puranas helped historians reconstruct the lineages of Maurya, Satavahana, and Gupta rulers. Scientifically, texts like Agni and Garuda Puranas discuss Vrikshayurveda (plant science), Ratna Pariksha (gemology), town planning, temple architecture (Vastu Shastra), and medicine. They reflect a sophisticated understanding of physical sciences integrated with daily life.",
                5
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit1Topics = [
    introToPuranas,
    panchaLakshana,
    scientificInsightsPuranas,
];