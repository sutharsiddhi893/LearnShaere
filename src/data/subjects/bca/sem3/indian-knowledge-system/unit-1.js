/* =========================================================
   BCA • SEM 3 • Indian Knowledge System (IKS)
   UNIT 1 — Vedangas: Shiksha, Vyakaranam, Nirukta
========================================================= */

import {
    createTopic,
    heading,
    text,
    list,
    code,
    table,
    note,
    definition,
    steps,
    keyPoints,
    mcq,
    qa,
} from "../../../../helpers";

/* =========================================================
   TOPIC 1 — Introduction to Indian Knowledge System
========================================================= */

const introIKS = createTopic(
    "introduction-to-iks",
    "Introduction to Indian Knowledge System",

    [
        definition(
            "Indian Knowledge System (IKS)",
            "The Indian Knowledge System refers to the vast body of knowledge, wisdom and traditions developed in the Indian subcontinent over thousands of years, covering areas such as philosophy, science, mathematics, medicine, art, literature and spirituality."
        ),

        text(
            "IKS represents an integrated view of knowledge where science, philosophy, ethics and spirituality are interconnected. It emphasizes not just theoretical understanding but also practical application in daily life."
        ),

        heading("Sources of Indian Knowledge System"),

        table(
            ["Category", "Texts", "Description"],
            [
                ["Shruti", "Vedas, Upanishads", "Heard/revealed knowledge"],
                ["Smriti", "Manusmriti, Puranas", "Remembered/traditional knowledge"],
                ["Vedanga", "Six auxiliary sciences", "Aids to understanding Vedas"],
                ["Upaveda", "Ayurveda, Dhanurveda, Gandharvaveda, Sthapatyaveda", "Applied sciences"],
                ["Darshanas", "Six schools of philosophy", "Systematic philosophy"],
            ]
        ),

        heading("The Four Vedas"),

        table(
            ["Veda", "Focus", "Content"],
            [
                ["Rigveda", "Hymns and prayers", "Oldest Veda, praise of deities"],
                ["Yajurveda", "Rituals and sacrifices", "Sacrificial formulas"],
                ["Samaveda", "Melodies and chants", "Musical hymns"],
                ["Atharvaveda", "Spells and daily life", "Medicine, magic, philosophy"],
            ]
        ),

        heading("Six Vedangas (Limbs of Vedas)"),

        list([
            "Shiksha — Phonetics and pronunciation.",
            "Vyakaranam — Grammar.",
            "Chandas — Prosody (meter).",
            "Nirukta — Etymology (word derivation).",
            "Jyotisha — Astronomy and astrology.",
            "Kalpa — Rituals and procedures.",
        ]),

        heading("Six Darshanas (Schools of Philosophy)"),

        table(
            ["Darshana", "Founder", "Focus"],
            [
                ["Nyaya", "Gautama", "Logic and epistemology"],
                ["Vaisheshika", "Kanada", "Atomism and physics"],
                ["Samkhya", "Kapila", "Dualism (Purusha-Prakriti)"],
                ["Yoga", "Patanjali", "Meditation and self-realization"],
                ["Mimansa", "Jaimini", "Vedic rituals and duty"],
                ["Vedanta", "Vyasa/Badarayana", "Ultimate reality (Brahman)"],
            ]
        ),

        heading("Importance of IKS Today"),

        list([
            "Preserves ancient wisdom and cultural heritage.",
            "Offers holistic approach to life and knowledge.",
            "Promotes ethical and sustainable living.",
            "Provides foundations of mathematics, medicine, astronomy.",
            "Supports mental and spiritual well-being (Yoga, meditation).",
            "Encourages critical thinking and debate (Nyaya, Mimansa).",
            "Recognized by National Education Policy (NEP) 2020.",
        ]),

        heading("Modern Relevance"),

        text(
            "Many modern discoveries were already discussed in ancient Indian texts — zero and decimal system (Aryabhata), plastic surgery (Sushruta), atomic theory (Kanada), astronomy (Varahamihira), grammar (Panini). IKS is now being integrated into modern education for holistic development."
        ),

        note(
            "IKS is not just history — it is a living tradition of knowledge that continues to influence philosophy, science, medicine, arts and spirituality across the world.",
            "tip",
            "Living Tradition"
        ),

        keyPoints([
            "IKS is India's ancient integrated knowledge tradition.",
            "Sources include Shruti, Smriti, Vedangas and Darshanas.",
            "Four Vedas: Rigveda, Yajurveda, Samaveda, Atharvaveda.",
            "Six Vedangas support Vedic understanding.",
            "Six Darshanas provide systematic philosophy.",
        ]),
    ],

    {
        summary:
            "Introduction to Indian Knowledge System covering Vedas, Vedangas, Darshanas and their modern relevance.",
        minutes: 12,
        tags: ["iks", "vedas", "darshanas", "introduction", "important"],

        mcqs: [
            mcq(
                "How many Vedas are there?",
                ["3", "4", "5", "6"],
                1,
                "There are four Vedas: Rigveda, Yajurveda, Samaveda and Atharvaveda."
            ),
            mcq(
                "How many Vedangas are there?",
                ["4", "5", "6", "8"],
                2,
                "There are six Vedangas: Shiksha, Vyakaranam, Chandas, Nirukta, Jyotisha, Kalpa."
            ),
            mcq(
                "Which is the oldest Veda?",
                ["Yajurveda", "Rigveda", "Samaveda", "Atharvaveda"],
                1,
                "Rigveda is the oldest of the four Vedas."
            ),
            mcq(
                "Who founded the Yoga darshana?",
                ["Kapila", "Patanjali", "Gautama", "Kanada"],
                1,
                "Yoga darshana was founded by Patanjali."
            ),
        ],

        questions: [
            qa(
                "What is Indian Knowledge System (IKS)? Explain its sources.",
                "The Indian Knowledge System refers to the vast body of knowledge developed in the Indian subcontinent over thousands of years, covering philosophy, science, mathematics, medicine, art, literature and spirituality. Its main sources are: Shruti (heard/revealed knowledge such as Vedas and Upanishads), Smriti (remembered knowledge such as Puranas and Smritis), Vedangas (six auxiliary sciences for understanding Vedas), Upavedas (applied sciences like Ayurveda) and Darshanas (six schools of systematic philosophy). IKS integrates science, ethics and spirituality into a holistic worldview.",
                4
            ),
            qa(
                "Explain the six Vedangas.",
                "The six Vedangas are auxiliary sciences that help in understanding and preserving the Vedas. They are: Shiksha (phonetics and pronunciation), Vyakaranam (grammar), Chandas (prosody or meter of Vedic hymns), Nirukta (etymology and word derivation), Jyotisha (astronomy and astrology used for timing rituals) and Kalpa (procedures for rituals and ceremonies). Together, they form the essential framework for correctly reciting, interpreting and applying Vedic knowledge.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — Shiksha (Phonetics)
========================================================= */

const shiksha = createTopic(
    "shiksha-phonetics",
    "Shiksha (Phonetics)",

    [
        definition(
            "Shiksha",
            "Shiksha is the Vedanga that deals with phonetics, pronunciation, articulation and correct chanting of Vedic mantras. It is the science of sounds and their correct utterance."
        ),

        text(
            "Shiksha is called the 'nose' of the Vedas because just as the nose helps in breathing, Shiksha ensures the correct oral transmission of Vedic knowledge from teacher to student across generations."
        ),

        heading("Meaning and Importance"),

        list([
            "Shiksha means 'to teach' or 'instruction' in Sanskrit.",
            "It ensures accurate pronunciation of Vedic mantras.",
            "Prevents distortion of sacred sounds.",
            "Maintains the spiritual power of mantras.",
            "Preserves the oral tradition of the Vedas.",
            "Forms the foundation of Sanskrit language study.",
        ]),

        heading("Main Elements of Shiksha"),

        table(
            ["Element", "Description"],
            [
                ["Varna", "Letters/phonemes of Sanskrit alphabet"],
                ["Svara", "Accent or pitch (Udatta, Anudatta, Svarita)"],
                ["Matra", "Duration of vowels (short, long, prolonged)"],
                ["Bala", "Force of pronunciation"],
                ["Sama", "Uniformity in pronunciation"],
                ["Santana", "Continuity in recitation"],
            ]
        ),

        heading("Classification of Sanskrit Sounds"),

        table(
            ["Category", "Examples", "Description"],
            [
                ["Vowels (Svara)", "अ, आ, इ, ई, उ, ऊ", "13 vowels including short, long, diphthongs"],
                ["Consonants (Vyanjana)", "क, ख, ग, घ, ङ", "33 consonants classified by place"],
                ["Sparsha (Stops)", "क to म", "25 stop consonants in 5 groups"],
                ["Antahstha (Semi-vowels)", "य, र, ल, व", "4 semi-vowels"],
                ["Ushma (Sibilants)", "श, ष, स, ह", "4 sibilants/fricatives"],
            ]
        ),

        heading("Five Places of Articulation (Sthana)"),

        table(
            ["Sthana", "English", "Consonants"],
            [
                ["Kanthya", "Guttural (throat)", "क, ख, ग, घ, ङ, ह"],
                ["Talavya", "Palatal", "च, छ, ज, झ, ञ, य, श"],
                ["Murdhanya", "Retroflex", "ट, ठ, ड, ढ, ण, र, ष"],
                ["Dantya", "Dental", "त, थ, द, ध, न, ल, स"],
                ["Oshthya", "Labial", "प, फ, ब, भ, म"],
            ]
        ),

        heading("Vedic Accents (Svara)"),

        list([
            "Udatta — High pitch (raised tone).",
            "Anudatta — Low pitch (grave tone).",
            "Svarita — Combination of high and low (circumflex).",
        ]),

        heading("Six Faults in Recitation"),

        list([
            "Gitim — Reading like a song.",
            "Shighri — Reading too fast.",
            "Shirah-kampi — Shaking the head while reading.",
            "Likhit-pathaka — Reading only by looking at text.",
            "Anarthajna — Reading without knowing meaning.",
            "Alpakantha — Reading in a very low voice.",
        ]),

        heading("Important Shiksha Texts"),

        table(
            ["Text", "Description"],
            [
                ["Paniniya Shiksha", "Attributed to Panini, most famous Shiksha text"],
                ["Yajnavalkya Shiksha", "Associated with Shukla Yajurveda"],
                ["Naradiya Shiksha", "Associated with Samaveda"],
                ["Vashishthi Shiksha", "Associated with Krishna Yajurveda"],
            ]
        ),

        heading("Modern Applications"),

        list([
            "Basis of Sanskrit phonology and linguistics.",
            "Used in speech therapy and voice training.",
            "Influences modern IPA (International Phonetic Alphabet).",
            "Applied in music, singing and mantra chanting.",
            "Preserves accurate pronunciation in Vedic recitation.",
            "Studied in linguistics and computational linguistics.",
        ]),

        note(
            "The Paniniya Shiksha states: 'One who studies Shiksha and applies it in life attains the highest world.' This shows the great importance given to correct pronunciation in the Indian tradition.",
            "tip",
            "Ancient Wisdom"
        ),

        keyPoints([
            "Shiksha is the Vedanga of phonetics and pronunciation.",
            "It ensures accurate recitation of Vedic mantras.",
            "Sanskrit sounds are classified by place of articulation.",
            "Three accents: Udatta, Anudatta, Svarita.",
            "Paniniya Shiksha is the most famous text.",
        ]),
    ],

    {
        summary:
            "Learn Shiksha, the Vedanga of phonetics, its elements, sound classification and importance.",
        minutes: 12,
        tags: ["shiksha", "phonetics", "vedanga", "sanskrit", "important"],

        mcqs: [
            mcq(
                "Shiksha is called which organ of Vedas?",
                ["Eye", "Nose", "Ear", "Foot"],
                1,
                "Shiksha is called the 'nose' of the Vedas."
            ),
            mcq(
                "How many places of articulation are there in Sanskrit?",
                ["3", "4", "5", "6"],
                2,
                "There are 5 sthanas: Kanthya, Talavya, Murdhanya, Dantya, Oshthya."
            ),
            mcq(
                "Which Shiksha text is most famous?",
                ["Naradiya", "Paniniya", "Yajnavalkya", "Vashishthi"],
                1,
                "Paniniya Shiksha is the most famous."
            ),
            mcq(
                "Udatta is:",
                ["Low pitch", "High pitch", "Combination", "Silent"],
                1,
                "Udatta is a high-pitched accent."
            ),
        ],

        questions: [
            qa(
                "What is Shiksha? Explain its importance and elements.",
                "Shiksha is the Vedanga that deals with phonetics, pronunciation and correct recitation of Vedic mantras. It is called the 'nose' of the Vedas because it ensures accurate oral transmission across generations. Its main elements include: Varna (letters), Svara (accent/pitch), Matra (duration), Bala (force), Sama (uniformity) and Santana (continuity). Shiksha is important because it maintains the spiritual power of mantras, preserves the oral tradition, prevents distortion of sacred sounds and forms the basis of Sanskrit language study.",
                4
            ),
            qa(
                "Explain the classification of Sanskrit sounds by place of articulation.",
                "Sanskrit sounds are classified into five places of articulation (sthana): Kanthya (guttural/throat) includes क, ख, ग, घ, ङ, ह; Talavya (palatal) includes च, छ, ज, झ, ञ, य, श; Murdhanya (retroflex) includes ट, ठ, ड, ढ, ण, र, ष; Dantya (dental) includes त, थ, द, ध, न, ल, स; Oshthya (labial) includes प, फ, ब, भ, म. This classification helps in accurate pronunciation and is the basis of Sanskrit phonology.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — Vyakaranam (Grammar)
========================================================= */

const vyakaranam = createTopic(
    "vyakaranam-grammar",
    "Vyakaranam (Grammar)",

    [
        definition(
            "Vyakaranam",
            "Vyakaranam is the Vedanga that deals with the grammar of the Sanskrit language, providing rules for word formation, sentence structure, tense, gender, number and case."
        ),

        text(
            "Vyakaranam is called the 'mouth' of the Vedas because it enables clear and correct communication. It is considered the most important Vedanga because without proper grammar, meaning cannot be conveyed accurately."
        ),

        heading("Importance of Vyakaranam"),

        list([
            "Ensures correct usage of Sanskrit.",
            "Preserves the meaning of Vedic texts.",
            "Helps in interpretation of scriptures.",
            "Provides scientific structure to language.",
            "Forms basis for other Indian languages.",
            "Influenced modern linguistics globally.",
        ]),

        heading("Panini — Father of Sanskrit Grammar"),

        text(
            "Panini (around 5th-4th century BCE) is the most celebrated grammarian of Sanskrit. His work Ashtadhyayi is considered the most scientific and comprehensive grammar ever written."
        ),

        heading("Ashtadhyayi"),

        definition(
            "Ashtadhyayi",
            "Ashtadhyayi is Panini's masterpiece containing about 4000 sutras (rules) organized in 8 chapters (adhyayas), each having 4 sections (padas). It describes Sanskrit grammar in a systematic, algorithmic manner."
        ),

        table(
            ["Feature", "Details"],
            [
                ["Author", "Panini"],
                ["Chapters", "8 (Ashta = eight)"],
                ["Sections", "4 per chapter (Pada)"],
                ["Total Sutras", "Approximately 4000"],
                ["Style", "Aphoristic (extremely concise)"],
                ["Approach", "Rule-based, algorithmic"],
            ]
        ),

        heading("Three Great Grammarians (Trimuni)"),

        table(
            ["Grammarian", "Work", "Contribution"],
            [
                ["Panini", "Ashtadhyayi", "Basic grammar rules (Sutras)"],
                ["Katyayana", "Vartika", "Commentary and additions to Panini"],
                ["Patanjali", "Mahabhashya", "Detailed commentary on Ashtadhyayi"],
            ]
        ),

        heading("Components of Sanskrit Grammar"),

        table(
            ["Component", "Description"],
            [
                ["Varna", "Alphabets/letters"],
                ["Shabda", "Words"],
                ["Dhatu", "Verb roots (about 2000)"],
                ["Pratyaya", "Suffixes"],
                ["Upasarga", "Prefixes (22 prefixes)"],
                ["Vibhakti", "Case endings (7 cases + vocative)"],
                ["Lakara", "Tenses and moods (10 lakaras)"],
                ["Samasa", "Compound words"],
            ]
        ),

        heading("Seven Cases (Vibhakti)"),

        table(
            ["Vibhakti", "Case", "Function"],
            [
                ["Prathama", "Nominative", "Subject"],
                ["Dvitiya", "Accusative", "Direct object"],
                ["Tritiya", "Instrumental", "By/with"],
                ["Chaturthi", "Dative", "For/to"],
                ["Panchami", "Ablative", "From"],
                ["Shashthi", "Genitive", "Of/possessive"],
                ["Saptami", "Locative", "In/on/at"],
            ]
        ),

        heading("Three Genders and Three Numbers"),

        list([
            "Genders: Pumlinga (masculine), Strilinga (feminine), Napumsakalinga (neuter).",
            "Numbers: Ekavachana (singular), Dvivachana (dual), Bahuvachana (plural).",
            "Sanskrit is unique in having a separate dual number.",
        ]),

        heading("Panini's Innovations"),

        list([
            "Used symbols and abbreviations (similar to modern algebra).",
            "Created Maheshwara Sutras (14 sutras describing Sanskrit alphabet).",
            "Formulated Pratyahara system (grouping of letters).",
            "Introduced context-sensitive rules.",
            "Systematic word formation using roots and suffixes.",
            "Very compact — Ashtadhyayi is small yet complete.",
        ]),

        heading("Modern Applications"),

        list([
            "Influenced Noam Chomsky's Generative Grammar.",
            "Basis of computational linguistics.",
            "Used in Natural Language Processing (NLP).",
            "Studied in Artificial Intelligence for language models.",
            "Foundation for Indian language grammars.",
            "NASA scientist Rick Briggs identified Sanskrit as suitable for AI.",
        ]),

        note(
            "Panini's Ashtadhyayi is considered by many linguists as the greatest work of ancient scholarship. Its algorithmic nature makes it comparable to modern programming languages.",
            "tip",
            "Panini and Modern Computing"
        ),

        keyPoints([
            "Vyakaranam is the Vedanga of grammar.",
            "It is called the 'mouth' of the Vedas.",
            "Panini's Ashtadhyayi is the most famous grammar text.",
            "Panini, Katyayana and Patanjali are the three great grammarians.",
            "Sanskrit grammar influenced modern linguistics and AI.",
        ]),
    ],

    {
        summary:
            "Learn Vyakaranam, Sanskrit grammar, Panini's Ashtadhyayi and its modern relevance.",
        minutes: 12,
        tags: ["vyakaranam", "panini", "grammar", "sanskrit", "important"],

        mcqs: [
            mcq(
                "Who wrote Ashtadhyayi?",
                ["Patanjali", "Panini", "Katyayana", "Yaska"],
                1,
                "Ashtadhyayi was written by Panini."
            ),
            mcq(
                "How many chapters does Ashtadhyayi have?",
                ["4", "6", "8", "10"],
                2,
                "Ashtadhyayi has 8 chapters (Ashta = eight)."
            ),
            mcq(
                "How many cases (vibhakti) are in Sanskrit?",
                ["5", "6", "7", "8"],
                2,
                "Sanskrit has 7 cases."
            ),
            mcq(
                "Vyakaranam is called which organ of Vedas?",
                ["Nose", "Eye", "Mouth", "Foot"],
                2,
                "Vyakaranam is called the 'mouth' of the Vedas."
            ),
        ],

        questions: [
            qa(
                "Who is Panini? Explain Ashtadhyayi.",
                "Panini was an ancient Indian grammarian who lived around the 5th-4th century BCE. He is considered the father of Sanskrit grammar and one of the greatest linguists in history. His masterpiece Ashtadhyayi contains about 4000 sutras organized in 8 chapters (Ashta = eight, Adhyaya = chapter), each with 4 sections (padas). It describes Sanskrit grammar in a systematic, algorithmic and highly compact manner. Ashtadhyayi covers phonetics, morphology, syntax and word formation. It is so scientific that modern linguists compare it to programming languages, and it has influenced modern computational linguistics and AI.",
                4
            ),
            qa(
                "Explain the components of Sanskrit grammar.",
                "Sanskrit grammar has several components: Varna (letters/alphabets), Shabda (words), Dhatu (verb roots — about 2000), Pratyaya (suffixes), Upasarga (22 prefixes), Vibhakti (7 case endings), Lakara (10 tenses and moods) and Samasa (compound words). Sanskrit uses three genders (masculine, feminine, neuter) and three numbers (singular, dual, plural). The dual number is a unique feature of Sanskrit. Words are formed systematically by combining roots, prefixes and suffixes, making Sanskrit a highly structured and precise language.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — Nirukta (Etymology)
========================================================= */

const nirukta = createTopic(
    "nirukta-etymology",
    "Nirukta (Etymology)",

    [
        definition(
            "Nirukta",
            "Nirukta is the Vedanga that deals with etymology — the science of deriving the meanings of Vedic words by analyzing their roots and formation."
        ),

        text(
            "Nirukta is called the 'ear' of the Vedas because it helps in understanding the true meaning of what is heard. It explains difficult and obscure Vedic terms, ensuring that the meaning of Vedic mantras is not lost over time."
        ),

        heading("Meaning and Purpose"),

        list([
            "Nirukta literally means 'explanation' or 'derivation'.",
            "Deals with etymology of Sanskrit and Vedic words.",
            "Explains meanings of difficult Vedic terms.",
            "Traces words back to their verbal roots (dhatus).",
            "Helps in correct interpretation of Vedic mantras.",
            "Preserves the semantic tradition of the Vedas.",
        ]),

        heading("Yaska — Father of Etymology"),

        text(
            "Yaska (around 5th-6th century BCE) is the earliest known etymologist and author of the Nirukta. He is considered the father of Indian etymology and one of the earliest linguists in the world."
        ),

        heading("Nighantu and Nirukta"),

        table(
            ["Text", "Author", "Content"],
            [
                ["Nighantu", "Unknown (ancient)", "List/dictionary of Vedic words"],
                ["Nirukta", "Yaska", "Commentary on Nighantu with derivations"],
            ]
        ),

        heading("Structure of Nirukta"),

        table(
            ["Chapters", "Content"],
            [
                ["Chapter 1-3", "Naighantuka Kanda — synonyms"],
                ["Chapter 4", "Naigama Kanda — obscure Vedic words"],
                ["Chapter 5-12", "Daivata Kanda — words about deities"],
                ["Chapter 13-14", "Later additions/appendices"],
            ]
        ),

        heading("Four Categories of Words (According to Yaska)"),

        table(
            ["Category", "Sanskrit Name", "Description"],
            [
                ["Noun", "Nama", "Names of persons, places, things"],
                ["Verb", "Akhyata", "Action words"],
                ["Prefix", "Upasarga", "Modify verbs (22 prefixes)"],
                ["Particle", "Nipata", "Indeclinable words"],
            ]
        ),

        heading("Method of Etymological Analysis"),

        steps([
            "Identify the word to be analyzed.",
            "Find its verbal root (dhatu).",
            "Understand the prefix (upasarga) if any.",
            "Analyze the suffix (pratyaya).",
            "Combine meaning of root, prefix and suffix.",
            "Contextual meaning within the Vedic mantra.",
        ]),

        heading("Example of Nirukta Analysis"),

        text(
            "Word: Agni (Fire)"
        ),

        list([
            "Root: 'ag' meaning 'to move forward'.",
            "Agni is that which moves forward (flames rise upward).",
            "Alternate derivation: 'agra + ni' meaning 'the leader' (Agni is the first deity invoked in Vedic rituals).",
            "This shows how Nirukta reveals deep meanings behind Vedic words.",
        ]),

        heading("Six Modifications of Words (Bhava-Vikara)"),

        list([
            "Jayate — is born.",
            "Asti — exists.",
            "Vardhate — grows.",
            "Viparinamate — changes.",
            "Apakshiyate — declines.",
            "Vinashyati — is destroyed.",
        ]),

        heading("Importance of Nirukta"),

        list([
            "Preserves the meaning of ancient Vedic terms.",
            "Prevents misinterpretation of scriptures.",
            "Provides insight into linguistic evolution.",
            "Foundation of Sanskrit lexicography.",
            "Helps in understanding Indian philosophy.",
            "Influences modern etymology and semantics.",
        ]),

        heading("Yaska's Contribution to Linguistics"),

        list([
            "First scientific classification of parts of speech.",
            "First etymological dictionary in the world.",
            "Systematic approach to word derivation.",
            "Distinguished between literal and metaphorical meanings.",
            "Recognized multiple derivations for the same word.",
            "Influenced later Sanskrit grammarians and philosophers.",
        ]),

        note(
            "Yaska's Nirukta is considered the world's first work on linguistics and etymology, predating similar works in Greek and other traditions by several centuries.",
            "tip",
            "Historical Significance"
        ),

        keyPoints([
            "Nirukta is the Vedanga of etymology.",
            "Yaska is the author of Nirukta and father of etymology.",
            "It explains difficult Vedic words through root analysis.",
            "Words are classified into nouns, verbs, prefixes and particles.",
            "Nirukta is the world's first work on linguistics.",
        ]),
    ],

    {
        summary:
            "Learn Nirukta, the Vedanga of etymology, Yaska's contribution and methods of word analysis.",
        minutes: 11,
        tags: ["nirukta", "yaska", "etymology", "vedanga", "important"],

        mcqs: [
            mcq(
                "Who wrote the Nirukta?",
                ["Panini", "Yaska", "Patanjali", "Jaimini"],
                1,
                "Nirukta was written by Yaska."
            ),
            mcq(
                "Nirukta deals with:",
                ["Grammar", "Etymology", "Phonetics", "Astronomy"],
                1,
                "Nirukta deals with etymology of Vedic words."
            ),
            mcq(
                "How many categories of words did Yaska identify?",
                ["3", "4", "5", "6"],
                1,
                "Yaska identified 4 categories: Nama, Akhyata, Upasarga, Nipata."
            ),
            mcq(
                "Nirukta is called which organ of Vedas?",
                ["Ear", "Eye", "Nose", "Mouth"],
                0,
                "Nirukta is called the 'ear' of the Vedas."
            ),
        ],

        questions: [
            qa(
                "What is Nirukta? Explain its importance.",
                "Nirukta is the Vedanga that deals with etymology — the science of deriving the meanings of Vedic words by analyzing their roots and formation. It literally means 'explanation' or 'derivation'. Nirukta is called the 'ear' of the Vedas because it helps in understanding the true meaning of what is heard. It is important because it preserves the meaning of ancient Vedic terms, prevents misinterpretation of scriptures, provides insight into linguistic evolution and forms the foundation of Sanskrit lexicography. Yaska's Nirukta is considered the world's first work on etymology and linguistics.",
                4
            ),
            qa(
                "Explain Yaska's classification of words.",
                "Yaska, the author of Nirukta, classified words into four categories: Nama (nouns — names of persons, places and things), Akhyata (verbs — action words), Upasarga (prefixes — 22 prefixes that modify verbs) and Nipata (particles — indeclinable words). This was the first scientific classification of parts of speech in world linguistics, predating similar works by Greek grammarians. Yaska also identified six modifications of being (Bhava-Vikara): jayate (is born), asti (exists), vardhate (grows), viparinamate (changes), apakshiyate (declines) and vinashyati (is destroyed).",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 5 — Chandas and Jyotisha (Overview)
========================================================= */

const chandasJyotisha = createTopic(
    "chandas-jyotisha-overview",
    "Chandas and Jyotisha (Overview)",

    [
        heading("Chandas — Vedic Prosody"),

        definition(
            "Chandas",
            "Chandas is the Vedanga that deals with prosody — the science of Vedic meters (rhythmic patterns) used in composing hymns and mantras."
        ),

        text(
            "Chandas is called the 'feet' of the Vedas because just as feet support the body, meters support the recitation of Vedic hymns. Without proper meter, mantras lose their rhythm and power."
        ),

        heading("Importance of Chandas"),

        list([
            "Ensures rhythmic recitation of Vedic hymns.",
            "Helps in memorization of Vedas.",
            "Maintains the musical quality of mantras.",
            "Preserves the aesthetic beauty of Sanskrit poetry.",
            "Provides framework for classical Sanskrit poetry.",
            "Influenced Indian music and drama.",
        ]),

        heading("Basic Concepts"),

        table(
            ["Term", "Description"],
            [
                ["Akshara", "Syllable"],
                ["Laghu (L)", "Short syllable (1 matra)"],
                ["Guru (G)", "Long syllable (2 matras)"],
                ["Pada", "Quarter of a verse"],
                ["Mantra/Shloka", "Complete verse"],
            ]
        ),

        heading("Seven Main Vedic Meters"),

        table(
            ["Meter", "Syllables per Pada", "Total Syllables"],
            [
                ["Gayatri", "8", "24 (3×8)"],
                ["Ushnik", "8", "28"],
                ["Anushtup", "8", "32 (4×8)"],
                ["Brihati", "9", "36"],
                ["Pankti", "10", "40"],
                ["Trishtup", "11", "44"],
                ["Jagati", "12", "48"],
            ]
        ),

        heading("Gayatri Meter"),

        text(
            "The most famous meter is Gayatri, which is used in the Gayatri Mantra. It has 24 syllables arranged in 3 padas of 8 syllables each. Gayatri Mantra is dedicated to Savitr (the Sun) and is considered the most sacred mantra in Hinduism."
        ),

        heading("Pingala — Father of Chandas"),

        text(
            "Pingala (around 3rd-2nd century BCE) wrote the Chandashastra, the earliest known treatise on prosody. His work contains the first known use of binary numbers (Laghu-Guru) and combinatorics, predating similar Western discoveries by nearly 2000 years."
        ),

        heading("Jyotisha — Vedic Astronomy"),

        definition(
            "Jyotisha",
            "Jyotisha is the Vedanga that deals with astronomy and astrology — the science of celestial bodies, time calculation and its application in Vedic rituals."
        ),

        text(
            "Jyotisha is called the 'eye' of the Vedas because it helps in determining the right time (muhurta) for Vedic rituals and ceremonies. It combines astronomy (Ganita/Siddhanta) and astrology (Hora/Samhita)."
        ),

        heading("Three Branches of Jyotisha (Skandhas)"),

        table(
            ["Branch", "Focus", "Description"],
            [
                ["Siddhanta", "Astronomy", "Mathematical astronomy, planetary motion"],
                ["Samhita", "Mundane astrology", "Weather, earthquakes, comets, omens"],
                ["Hora", "Predictive astrology", "Horoscopes, individual predictions"],
            ]
        ),

        heading("Great Indian Astronomers"),

        table(
            ["Astronomer", "Period", "Contribution"],
            [
                ["Aryabhata", "5th century CE", "Aryabhatiya, calculated pi, rotation of earth"],
                ["Varahamihira", "6th century CE", "Brihat Samhita, Panchasiddhantika"],
                ["Brahmagupta", "7th century CE", "Zero, negative numbers, gravity"],
                ["Bhaskara I", "7th century CE", "Sine tables, planetary positions"],
                ["Bhaskara II", "12th century CE", "Siddhanta Shiromani, calculus concepts"],
            ]
        ),

        heading("Ancient Indian Contributions to Astronomy"),

        list([
            "Discovered zero and decimal system.",
            "Calculated value of pi (π) accurately.",
            "Correctly stated Earth rotates on its axis.",
            "Explained lunar and solar eclipses scientifically.",
            "Calculated length of solar year very precisely.",
            "Developed concept of 27 Nakshatras (constellations).",
            "Panchanga (calendar) system still used today.",
            "Predicted planetary positions with great accuracy.",
        ]),

        heading("The Panchanga (Hindu Calendar)"),

        list([
            "Tithi — Lunar day.",
            "Vara — Weekday.",
            "Nakshatra — Constellation.",
            "Yoga — Combination of Sun and Moon.",
            "Karana — Half of a Tithi.",
        ]),

        heading("Kalpa — Vedic Rituals"),

        definition(
            "Kalpa",
            "Kalpa is the Vedanga that deals with the procedures and rules for performing Vedic rituals, ceremonies and sacrifices."
        ),

        text(
            "Kalpa is called the 'hand' of the Vedas because it represents action. It consists of four categories: Shrauta Sutras (major rituals), Grihya Sutras (household rituals), Dharma Sutras (righteous conduct) and Shulba Sutras (geometry for altar construction)."
        ),

        note(
            "The Shulba Sutras contain the earliest known geometric principles including the Pythagorean theorem, which was known in India long before Pythagoras.",
            "tip",
            "Ancient Mathematics"
        ),

        keyPoints([
            "Chandas is the Vedanga of prosody (meters).",
            "Pingala is the father of Chandas and pioneer of binary system.",
            "Jyotisha is the Vedanga of astronomy and astrology.",
            "Aryabhata, Varahamihira, Brahmagupta were great Indian astronomers.",
            "Kalpa deals with rituals and includes Shulba Sutras for geometry.",
        ]),
    ],

    {
        summary:
            "Overview of Chandas (prosody), Jyotisha (astronomy) and Kalpa (rituals) — three important Vedangas.",
        minutes: 12,
        tags: ["chandas", "jyotisha", "kalpa", "vedanga", "astronomy"],

        mcqs: [
            mcq(
                "Chandas deals with:",
                ["Grammar", "Phonetics", "Meters", "Astronomy"],
                2,
                "Chandas deals with Vedic meters (prosody)."
            ),
            mcq(
                "Who is the father of Chandas?",
                ["Panini", "Pingala", "Yaska", "Aryabhata"],
                1,
                "Pingala wrote the Chandashastra."
            ),
            mcq(
                "Gayatri meter has how many syllables?",
                ["16", "20", "24", "32"],
                2,
                "Gayatri has 24 syllables (3 padas of 8 syllables)."
            ),
            mcq(
                "Jyotisha is called which organ of Vedas?",
                ["Eye", "Nose", "Ear", "Mouth"],
                0,
                "Jyotisha is called the 'eye' of the Vedas."
            ),
        ],

        questions: [
            qa(
                "What is Chandas? Explain its importance and main meters.",
                "Chandas is the Vedanga that deals with prosody — the science of Vedic meters used in composing hymns and mantras. It is called the 'feet' of the Vedas because meters support the recitation. Chandas ensures rhythmic recitation, aids memorization, maintains musical quality and preserves the aesthetic beauty of Sanskrit poetry. The seven main Vedic meters are: Gayatri (24 syllables), Ushnik (28), Anushtup (32), Brihati (36), Pankti (40), Trishtup (44) and Jagati (48). Pingala's Chandashastra is the earliest treatise on prosody and also contains the first known use of binary numbers.",
                4
            ),
            qa(
                "Explain Jyotisha and its contributions.",
                "Jyotisha is the Vedanga that deals with astronomy and astrology. It is called the 'eye' of the Vedas because it helps determine the right time for Vedic rituals. Jyotisha has three branches: Siddhanta (mathematical astronomy), Samhita (mundane astrology) and Hora (predictive astrology). Great Indian astronomers include Aryabhata (calculated pi, stated earth's rotation), Varahamihira (Brihat Samhita), Brahmagupta (zero, negative numbers) and Bhaskara II (calculus concepts). Ancient Indian contributions include the decimal system, accurate calculation of pi, understanding of eclipses, 27 Nakshatras and the Panchanga calendar system still in use today.",
                4
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit1Topics = [
    introIKS,
    shiksha,
    vyakaranam,
    nirukta,
    chandasJyotisha,
];