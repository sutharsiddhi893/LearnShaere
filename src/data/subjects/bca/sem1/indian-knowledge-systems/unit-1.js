/* =========================================================
   BCA • SEM 1 • Indian Knowledge Systems
   UNIT 1 — Foundations: Philosophy, Yoga and Ayurveda
========================================================= */

import {
    createTopic,
    heading,
    text,
    list,
    code,
    output,
    table,
    note,
    definition,
    steps,
    keyPoints,
    mcq,
    qa,
} from "../../../../helpers";

/* =========================================================
   TOPIC 1 — Indian Knowledge Systems: An Overview
========================================================= */

const iksOverview = createTopic(
    "indian-knowledge-systems-overview",
    "Indian Knowledge Systems: An Overview",

    [
        definition(
            "Indian Knowledge System (IKS)",
            "The body of traditional knowledge, practices and wisdom developed in the Indian subcontinent over thousands of years across philosophy, science, art, medicine, engineering and governance."
        ),

        text(
            "Indian Knowledge Systems represent a holistic and integrated approach to understanding the universe, the self and the relationship between them. They cover every domain of human endeavour, from the most abstract metaphysics to the most practical engineering."
        ),

        heading("Branches of IKS"),

        table(
            ["Branch", "Domain", "Key Texts"],
            [
                ["Darshanas", "Philosophy", "Brahma Sutra, Upanishads, Bhagavad Gita"],
                ["Yoga", "Mind body practice", "Yoga Sutras of Patanjali, Hatha Yoga Pradipika"],
                ["Ayurveda", "Medicine and health", "Charaka Samhita, Sushruta Samhita"],
                ["Jyotisha", "Astronomy and astrology", "Surya Siddhanta, Aryabhatiya"],
                ["Ganita", "Mathematics", "Aryabhatiya, Lilavati, Bakshali manuscript"],
                ["Vastu and Architecture", "Built environment", "Manasara, Mayamatam"],
                ["Krishi", "Agriculture", "Krishi Parashara, Vrikshayurveda"],
                ["Sangeet and Natya", "Music and dance", "Natya Shastra, Sangita Ratnakara"],
                ["Niti and Arthashastra", "Governance and economics", "Arthashastra of Kautilya, Nitisara"],
                ["Kavya and Sahitya", "Literature and poetry", "Ramayana, Mahabharata, Abhijnana Shakuntalam"],
            ]
        ),

        heading("Features of IKS"),

        list([
            "Holistic — integrates body, mind, intellect and spirit.",
            "Sustainable — built on respect for nature and conservation of resources.",
            "Empirical — based on observation, experimentation and reasoning.",
            "Transmitted through the guru shishya parampara of teacher and student.",
            "Encoded in Sanskrit and other Indian languages.",
            "Practical application alongside theoretical foundations.",
        ]),

        note(
            "IKS is not a single subject but a multidisciplinary field. Modern programmes such as the IKS Division of the Ministry of Education have been set up to integrate this knowledge with contemporary education.",
            "tip",
            "Modern Relevance"
        ),

        heading("Shruti and Smriti"),

        table(
            ["Category", "Meaning", "Examples"],
            [
                ["Shruti", "Heard; revealed literature considered eternal and authorless", "Four Vedas, Upanishads, Brahmanas"],
                ["Smriti", "Remembered; literature composed by human authors and based on Shruti", "Itihasas, Puranas, Dharmasutras"],
            ]
        ),

        heading("Importance of IKS Today"),

        list([
            "Provides a sense of cultural identity and pride.",
            "Offers sustainable models for agriculture, architecture and health.",
            "Inspires modern research in mathematics, astronomy and linguistics.",
            "Encourages ethical and value based living through the concept of dharma.",
            "Supports the United Nations Sustainable Development Goals through traditional practices.",
            "Contributes to India's soft power and diplomatic outreach.",
        ]),

        keyPoints([
            "IKS is a holistic and integrated system covering philosophy, science, art and governance.",
            "Shruti refers to revealed literature, Smriti to remembered literature.",
            "Knowledge is transmitted through the guru shishya parampara.",
            "IKS contributes to sustainability, ethics and innovation today.",
            "Modern India is actively reviving and integrating IKS into mainstream education.",
        ]),
    ],

    {
        summary:
            "Understand the scope, branches, features and importance of Indian Knowledge Systems.",
        minutes: 10,
        tags: ["iks", "overview", "foundations", "important"],

        mcqs: [
            mcq(
                "The term IKS stands for:",
                ["Indian Knowledge System", "Internal Knowledge Source", "Indian Kingdom Study", "International Knowledge School"],
                0,
                "IKS stands for Indian Knowledge System."
            ),
            mcq(
                "Which branch of IKS deals with medicine?",
                ["Jyotisha", "Ayurveda", "Ganita", "Vastu"],
                1,
                "Ayurveda is the traditional Indian system of medicine."
            ),
            mcq(
                "The Vedas are classified under:",
                ["Smriti", "Shruti", "Itihasa", "Purana"],
                1,
                "The Vedas are Shruti or revealed literature."
            ),
            mcq(
                "The guru shishya parampara refers to:",
                ["Royal succession", "Teacher student tradition", "Religious festival", "Trade guild"],
                1,
                "It is the tradition of passing knowledge from teacher to student."
            ),
            mcq(
                "The Arthashastra is associated with:",
                ["Medicine", "Governance", "Music", "Astronomy"],
                1,
                "Kautilya's Arthashastra deals with statecraft and economics."
            ),
        ],

        questions: [
            qa(
                "What are Indian Knowledge Systems? List any five branches.",
                "Indian Knowledge Systems is the body of traditional knowledge, practices and wisdom developed in the Indian subcontinent over thousands of years. It covers every domain of human life. The major branches include Darshanas (philosophy), Yoga (mind body practice), Ayurveda (medicine), Jyotisha (astronomy and astrology), Ganita (mathematics), Vastu (architecture), Krishi (agriculture), Sangeet and Natya (music and dance), Niti and Arthashastra (governance and economics) and Kavya (literature).",
                5
            ),
            qa(
                "Differentiate between Shruti and Smriti.",
                "Shruti literally means that which was heard and refers to the revealed literature believed to be eternal and authorless; it includes the four Vedas, the Upanishads, the Brahmanas and the Aranyakas. Smriti means that which was remembered and refers to literature composed by human authors, drawing inspiration from Shruti; it includes the Itihasas (Ramayana and Mahabharata), the Puranas, the Dharmasutras and the great works of poetry and law.",
                4
            ),
            qa(
                "Why are Indian Knowledge Systems important today?",
                "IKS provides a sense of cultural identity, offers sustainable models for agriculture, architecture and health, and inspires modern research in mathematics, astronomy and linguistics. It encourages ethical living through the concept of dharma, supports the UN Sustainable Development Goals, and contributes to India's soft power. By integrating IKS with modern education, students can combine the best of traditional wisdom with contemporary science.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — Vedas, Upanishads and the Bhagavad Gita
========================================================= */

const vedasUpanishadsGita = createTopic(
    "vedas-upanishads-and-bhagavad-gita",
    "Vedas, Upanishads and the Bhagavad Gita",

    [
        heading("The Four Vedas"),

        definition(
            "Veda",
            "The oldest sacred literature of India, meaning knowledge; a body of hymns, rituals and philosophical teachings considered apaurusheya or authorless."
        ),

        table(
            ["Veda", "Main Deity", "Contents", "Branches"],
            [
                ["Rigveda", "Agni, Indra", "Hymns and prayers, 1028 sukta", "21"],
                ["Yajurveda", "Worship of deities through sacrifice", "Sacrificial formulas in prose and verse", "2 (Krishna and Shukla)"],
                ["Samaveda", "Soma and music", "Melodies and chants", "3"],
                ["Atharvaveda", "Life, health and home", "Spells, charms and philosophical hymns", "9"],
            ]
        ),

        note(
            "The Rigveda is the oldest of the four Vedas and contains the famous Gayatri Mantra and the Nasadiya Sukta which contemplates the origin of the universe.",
            "exam",
            "Frequently Asked"
        ),

        heading("Parts of Each Veda"),

        list([
            "Samhita — collection of hymns and mantras.",
            "Brahmanas — prose commentaries explaining rituals.",
            "Aranyakas — forest texts on meditation and symbolism.",
            "Upanishads — philosophical treatises on the nature of reality.",
        ]),

        heading("The Upanishads"),

        definition(
            "Upanishad",
            "The philosophical portions of the Vedas, also called Vedanta, dealing with Brahman, Atman, karma and moksha."
        ),

        text(
            "There are more than 200 Upanishads, of which 108 are traditionally counted. Eleven principal Upanishads are most commonly studied: Isha, Kena, Katha, Prasna, Mundaka, Mandukya, Aitareya, Taittiriya, Chandogya, Brihadaranyaka and Shvetashvatara."
        ),

        heading("Core Teachings of the Upanishads"),

        list([
            "Brahman — the ultimate, formless, eternal reality.",
            "Atman — the inner self or soul of every being.",
            "Aham Brahmasmi — I am Brahman, the self is identical with the ultimate.",
            "Tat tvam asi — Thou art that, every being is one with the ultimate.",
            "Karma — every action has a consequence.",
            "Samsara — the cycle of birth, life, death and rebirth.",
            "Moksha — liberation from the cycle of samsara.",
        ]),

        heading("The Bhagavad Gita"),

        definition(
            "Bhagavad Gita",
            "A 700 verse philosophical poem forming part of the Mahabharata, in which Lord Krishna instructs the warrior Arjuna on duty, devotion and the nature of reality."
        ),

        heading("Three Yogas in the Gita"),

        table(
            ["Yoga", "Means", "Path"],
            [
                ["Karma Yoga", "Union through action", "Perform one's duty selflessly without attachment to the result."],
                ["Bhakti Yoga", "Union through devotion", "Surrender to the divine with love and surrender."],
                ["Jnana Yoga", "Union through knowledge", "Discriminate between the real and the unreal and attain wisdom."],
            ]
        ),

        heading("Key Verses of the Gita"),

        list([
            "Yoga karmasu kaushalam — Yoga is skill in action. (2.50)",
            "Karmanye vadhikaraste ma phaleshu kadachana — You have the right to action alone, never to its fruits. (2.47)",
            "Atmana atmanyeva tushtah — One who is content within the self is the richest. (2.55)",
            "Samatvam yoga uchyate — Equanimity is called yoga. (2.48)",
            "Vasudevah sarvam iti — The divine dwells in everything. (7.19)",
        ]),

        heading("Concept of Dharma"),

        definition(
            "Dharma",
            "The cosmic order, duty, righteousness and the law that sustains the universe and individual life."
        ),

        list([
            "Sanatana dharma — the eternal principles of righteousness.",
            "Svadharma — one's own duty based on nature, stage of life and role.",
            "Ahimsa — non violence in thought, word and deed.",
            "Satya — truthfulness in all aspects of life.",
        ]),

        keyPoints([
            "The four Vedas are Rig, Yajur, Sama and Atharva.",
            "The Upanishads form the philosophical core of the Vedas and teach Brahman, Atman and Moksha.",
            "The Bhagavad Gita teaches Karma, Bhakti and Jnana Yogas.",
            "Dharma is the foundation of right living in Indian thought.",
            "The great statements Aham Brahmasmi and Tat tvam asi express non duality.",
        ]),
    ],

    {
        summary:
            "Learn the structure of the Vedas, the philosophy of the Upanishads and the teachings of the Bhagavad Gita.",
        minutes: 11,
        tags: ["vedas", "upanishads", "gita", "dharma", "important"],

        mcqs: [
            mcq(
                "The oldest Veda is:",
                ["Yajurveda", "Samaveda", "Rigveda", "Atharvaveda"],
                2,
                "The Rigveda is the oldest of the four Vedas."
            ),
            mcq(
                "The philosophical part of the Vedas is called:",
                ["Samhita", "Brahmana", "Aranyaka", "Upanishad"],
                3,
                "The Upanishads form the Vedanta or end portion of the Vedas."
            ),
            mcq(
                "The Bhagavad Gita is a part of the:",
                ["Ramayana", "Mahabharata", "Rigveda", "Upanishad"],
                1,
                "The Gita appears in the Bhishma Parva of the Mahabharata."
            ),
            mcq(
                "The yoga of selfless action is called:",
                ["Bhakti Yoga", "Karma Yoga", "Jnana Yoga", "Raja Yoga"],
                1,
                "Karma Yoga is the path of action without attachment."
            ),
            mcq(
                "Tat tvam asi means:",
                ["I am Brahman", "Thou art that", "The self is one", "All is illusion"],
                1,
                "It is the mahavakya meaning thou art that."
            ),
            mcq(
                "The verse Karmanye vadhikaraste belongs to the:",
                ["Upanishad", "Bhagavad Gita", "Ramayana", "Vedas"],
                1,
                "It is a famous instruction of Lord Krishna in chapter 2 of the Gita."
            ),
        ],

        questions: [
            qa(
                "List the four Vedas and describe their contents briefly.",
                "The four Vedas are Rigveda, Yajurveda, Samaveda and Atharvaveda. The Rigveda is the oldest and contains 1028 hymns addressed to deities such as Agni and Indra. The Yajurveda gives the formulas recited during sacrifices, and it exists in two recensions, Krishna and Shukla. The Samaveda contains the melodies and chants sung during rituals. The Atharvaveda deals with everyday life, health, home and society, and contains spells, charms and philosophical hymns.",
                5
            ),
            qa(
                "What are the main teachings of the Upanishads?",
                "The Upanishads teach the identity of the individual self (Atman) with the universal reality (Brahman), expressed in the great sayings Aham Brahmasmi and Tat tvam asi. They explain the law of karma, the cycle of samsara and the ultimate goal of moksha. The student is urged to seek knowledge through a qualified teacher, meditation and self enquiry, for liberation comes through knowing one's true nature.",
                4
            ),
            qa(
                "Explain the three yogas taught in the Bhagavad Gita.",
                "The Gita teaches that the ultimate goal can be reached through three main paths. Karma Yoga is the path of selfless action in which one performs one's duty without attachment to the result. Bhakti Yoga is the path of loving devotion to the divine, surrendering the ego and cultivating humility. Jnana Yoga is the path of knowledge and discrimination, in which the seeker distinguishes the eternal from the temporary and realises the unity of the self with the divine. The Gita recommends a combination of all three according to the temperament of the seeker.",
                5
            ),
            qa(
                "What is dharma? Why is it important?",
                "Dharma is the cosmic order that sustains the universe and the principle of righteousness that guides individual and social life. It includes duties towards oneself, family, society, nature and the divine. Dharma is important because it provides a stable framework for ethical living, social harmony and spiritual progress, and it is the foundation of the Indian approach to morality and law.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — Indian Philosophy: Schools of Thought
========================================================= */

const indianPhilosophy = createTopic(
    "indian-philosophy-schools-of-thought",
    "Indian Philosophy: Schools of Thought",

    [
        definition(
            "Darshana",
            "A school of Indian philosophy, literally meaning vision or mirror, offering a particular way of seeing reality."
        ),

        heading("The Six Orthodox Schools"),

        table(
            ["Darshana", "Founder", "Key Idea"],
            [
                ["Samkhya", "Kapila", "Reality is made of Purusha (consciousness) and Prakriti (matter)."],
                ["Yoga", "Patanjali", "Disciplined practice of mind and body to realise the Purusha."],
                ["Nyaya", "Gautama", "Knowledge comes through valid means of proof (pramanas)."],
                ["Vaisheshika", "Kanada", "Reality is built from indivisible atoms called paramanu."],
                ["Mimamsa", "Jaimini", "Right ritual and interpretation of the Vedas secures heaven."],
                ["Vedanta", "Vyasa or Badarayana", "Brahman alone is real and the world is its appearance."],
            ]
        ),

        heading("The Four Pramanas (Means of Knowledge in Nyaya)"),

        table(
            ["Pramana", "Meaning", "Example"],
            [
                ["Pratyaksha", "Direct perception", "Seeing fire burning."],
                ["Anumana", "Inference", "Seeing smoke and inferring fire."],
                ["Upamana", "Comparison", "Knowing an animal by comparing with a known one."],
                ["Shabda", "Verbal testimony", "Knowledge from a trustworthy source such as a scripture."],
            ]
        ),

        heading("Samkhya: The Twenty Five Tattvas"),

        list([
            "Purusha — pure consciousness, witness.",
            "Prakriti — primordial matter, the cause of the manifest world.",
            "Mahat — intellect.",
            "Ahamkara — ego, sense of 'I'.",
            "Manas — mind.",
            "Five Jnanendriyas — organs of knowledge: ear, skin, eye, tongue, nose.",
            "Five Karmendriyas — organs of action: speech, hands, feet, reproductive, excretion.",
            "Five Tanmatras — subtle elements: sound, touch, form, taste, smell.",
            "Five Mahabhutas — gross elements: ether, air, fire, water, earth.",
        ]),

        heading("Schools of Vedanta"),

        table(
            ["School", "Founder", "Key Teaching"],
            [
                ["Advaita", "Adi Shankaracharya", "Brahman alone is real; the world is illusion (Maya)."],
                ["Vishishtadvaita", "Ramanujacharya", "Brahman is real, but with attributes; the world is his body."],
                ["Dvaita", "Madhvacharya", "Brahman, the soul and matter are eternally distinct."],
                ["Dvaitadvaita", "Nimbarkacharya", "Both difference and non difference are true."],
                ["Shuddhadvaita", "Vallabhacharya", "Pure non dualism without Maya."],
            ]
        ),

        note(
            "Advaita Vedanta of Adi Shankaracharya is the most widely studied and has profoundly influenced Indian thought, literature and modern teachers.",
            "exam",
            "Frequently Asked"
        ),

        heading("Heterodox Schools"),

        table(
            ["School", "Founder", "Position"],
            [
                ["Charvaka", "Brihaspati", "Only direct perception is valid; denies Vedas, soul and rebirth."],
                ["Buddhism", "Gautama Buddha", "Life is suffering; the path is the Middle Way."],
                ["Jainism", "Mahavira", "Non violence is the highest religion; everything has a soul."],
            ]
        ),

        heading("The Four Noble Truths of Buddhism"),

        list([
            "Dukkha — life is marked by suffering.",
            "Samudaya — the cause of suffering is desire.",
            "Nirodha — suffering can end.",
            "Marga — the path to the end of suffering is the Noble Eightfold Path.",
        ]),

        heading("The Noble Eightfold Path"),

        list([
            "Right View, Right Intention — wisdom.",
            "Right Speech, Right Action, Right Livelihood — ethical conduct.",
            "Right Effort, Right Mindfulness, Right Concentration — mental discipline.",
        ]),

        heading("Jainism: The Three Jewels"),

        list([
            "Samyak Darshana — right faith in the teachings of the Tirthankaras.",
            "Samyak Gnyana — right knowledge of reality.",
            "Samyak Charitra — right conduct based on the five vows of ahimsa, satya, asteya, aparigraha and brahmacharya.",
        ]),

        heading("The Concept of Anekantavada"),

        definition(
            "Anekantavada",
            "The Jain doctrine of multiple viewpoints, holding that truth has many aspects and no single view captures it completely."
        ),

        keyPoints([
            "There are six orthodox (astika) schools and three heterodox (nastika) schools.",
            "Nyaya accepts four pramanas: perception, inference, comparison and testimony.",
            "Samkhya lists twenty five tattvas led by Purusha and Prakriti.",
            "Vedanta has major sub schools: Advaita, Vishishtadvaita and Dvaita.",
            "Anekantavada teaches that truth has many aspects.",
        ]),
    ],

    {
        summary:
            "Survey the major schools of Indian philosophy, their founders, key ideas and the central teachings of Buddhism and Jainism.",
        minutes: 12,
        tags: ["philosophy", "darshana", "vedanta", "important"],

        mcqs: [
            mcq(
                "The number of orthodox schools in Indian philosophy is:",
                ["4", "6", "8", "9"],
                1,
                "There are six astika or orthodox schools."
            ),
            mcq(
                "The Samkhya school was founded by:",
                ["Patanjali", "Kapila", "Gautama", "Kanada"],
                1,
                "Sage Kapila is the traditional founder of Samkhya."
            ),
            mcq(
                "Advaita Vedanta was taught by:",
                ["Ramanujacharya", "Madhvacharya", "Adi Shankaracharya", "Vallabhacharya"],
                2,
                "Adi Shankaracharya is the great teacher of Advaita."
            ),
            mcq(
                "Buddhism's first noble truth is that life is:",
                ["Joy", "Suffering", "Empty", "Eternal"],
                1,
                "Dukkha, or suffering, is the first noble truth."
            ),
            mcq(
                "Anekantavada is a doctrine of:",
                ["Buddhism", "Jainism", "Charvaka", "Samkhya"],
                1,
                "Anekantavada teaches that truth has many aspects."
            ),
            mcq(
                "Inference as a means of knowledge is accepted by which pramana?",
                ["Pratyaksha", "Anumana", "Upamana", "Shabda"],
                1,
                "Anumana is the pramana of inference."
            ),
        ],

        questions: [
            qa(
                "Name the six orthodox schools of Indian philosophy and their founders.",
                "The six orthodox schools are Samkhya founded by Kapila, Yoga founded by Patanjali, Nyaya founded by Gautama, Vaisheshika founded by Kanada, Mimamsa founded by Jaimini, and Vedanta founded by Vyasa or Badarayana. Each school presents a distinct approach to reality, knowledge and liberation while accepting the authority of the Vedas.",
                4
            ),
            qa(
                "Explain the four pramanas of Nyaya.",
                "Nyaya accepts four means of valid knowledge. Pratyaksha is direct perception through the senses, as when one sees fire. Anumana is inference in which a known sign leads to knowledge of an unseen cause, as when smoke leads to the inference of fire. Upamana is comparison, in which an unknown object is understood by reference to a known one. Shabda is verbal testimony from a reliable source such as a trustworthy scripture or teacher. Together these four pramanas form the Nyaya theory of knowledge.",
                4
            ),
            qa(
                "Compare Advaita and Dvaita Vedanta.",
                "Advaita Vedanta of Adi Shankaracharya holds that Brahman alone is real and the world is an appearance caused by Maya; the individual self is identical with Brahman once ignorance is removed. Dvaita Vedanta of Madhvacharya holds that Brahman, the individual souls and the material world are eternally distinct and that devotion to a personal God is the path to liberation. While Advaita emphasises unity, Dvaita emphasises difference and surrender.",
                4
            ),
            qa(
                "Explain the Four Noble Truths and the Eightfold Path of Buddhism.",
                "Buddhism teaches that life is marked by suffering (Dukkha), that the cause of suffering is desire (Samudaya), that suffering can end (Nirodha), and that the path to end suffering is the Noble Eightfold Path (Marga). The Eightfold Path includes Right View and Right Intention under wisdom, Right Speech, Right Action and Right Livelihood under ethical conduct, and Right Effort, Right Mindfulness and Right Concentration under mental discipline. Following this path leads to Nirvana, the end of suffering.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — Yoga: The Union of Body, Mind and Spirit
========================================================= */

const yoga = createTopic(
    "yoga-the-union-of-body-mind-and-spirit",
    "Yoga: The Union of Body, Mind and Spirit",

    [
        definition(
            "Yoga",
            "A group of physical, mental and spiritual practices originating in ancient India, aimed at uniting the individual self with the universal consciousness."
        ),

        text(
            "The word yoga comes from the Sanskrit root yuj meaning to join or to yoke. The first systematic exposition of yoga is found in the Yoga Sutras of Patanjali, written around the second century BCE."
        ),

        heading("Maharishi Patanjali and the Yoga Sutras"),

        text(
            "Patanjali is called the Father of Yoga. His Yoga Sutras consist of 195 aphorisms organised into four padas or chapters: Samadhi Pada on the nature of consciousness, Sadhana Pada on the practice of yoga, Vibhuti Pada on the powers that arise, and Kaivalya Pada on liberation."
        ),

        heading("The Eight Limbs of Yoga (Ashtanga Yoga)"),

        table(
            ["Limb", "Name", "Meaning"],
            [
                ["1", "Yama", "Restraints: non violence, truth, non stealing, celibacy, non hoarding."],
                ["2", "Niyama", "Observances: purity, contentment, austerity, self study, surrender."],
                ["3", "Asana", "Steady and comfortable posture for meditation."],
                ["4", "Pranayama", "Regulation and extension of the breath."],
                ["5", "Pratyahara", "Withdrawal of the senses from their objects."],
                ["6", "Dharana", "Concentration of the mind on a single point."],
                ["7", "Dhyana", "Unbroken meditation on the chosen point."],
                ["8", "Samadhi", "Absorption in which the meditator merges with the object of meditation."],
            ]
        ),

        heading("Types of Yoga"),

        table(
            ["Type", "Focus", "Path"],
            [
                ["Karma Yoga", "Selfless action", "Service without attachment."],
                ["Bhakti Yoga", "Devotion", "Love and surrender to the divine."],
                ["Jnana Yoga", "Knowledge", "Self enquiry and discrimination."],
                ["Raja Yoga", "Mind control", "Ashtanga Yoga of Patanjali."],
                ["Hatha Yoga", "Body and breath", "Asana, Pranayama, Kriyas and Bandhas."],
                ["Kundalini Yoga", "Energy", "Awakening the dormant Kundalini shakti."],
                ["Laya Yoga", "Absorption", "Meditation on the inner sound (nada)."],
            ]
        ),

        note(
            "Modern yoga as practised worldwide is largely Hatha Yoga, with its emphasis on asanas, pranayama and relaxation. International Yoga Day is celebrated on 21 June each year, after a proposal by India accepted by the United Nations in 2014.",
            "tip",
            "Yoga Day"
        ),

        heading("Asanas and Pranayama"),

        table(
            ["Asana", "Benefit"],
            [
                ["Tadasana", "Improves posture, strengthens thighs and ankles."],
                ["Vrikshasana", "Improves balance, strengthens legs."],
                ["Trikonasana", "Stretches spine, relieves back pain."],
                ["Surya Namaskar", "Full body exercise, improves circulation."],
                ["Shavasana", "Deep relaxation, reduces stress."],
            ]
        ),

        table(
            ["Pranayama", "Effect"],
            [
                ["Anulom Vilom", "Balances the two nostrils and calms the mind."],
                ["Kapalabhati", "Cleanses the respiratory passage, energises the body."],
                ["Bhramari", "Reduces anxiety and helps sleep."],
                ["Ujjayi", "Slows the breath, improves concentration."],
            ]
        ),

        heading("Benefits of Yoga"),

        list([
            "Improves flexibility, strength and balance of the body.",
            "Reduces stress, anxiety and depression.",
            "Lowers blood pressure and improves heart health.",
            "Improves concentration, memory and sleep quality.",
            "Supports recovery from chronic illnesses and addiction.",
            "Cultivates emotional balance and inner peace.",
        ]),

        keyPoints([
            "Yoga literally means union of the individual self with the universal self.",
            "Patanjali's Ashtanga Yoga has eight limbs beginning with Yama and Niyama.",
            "Modern Hatha Yoga focuses on asanas, pranayama and relaxation.",
            "Yoga is recognised by the United Nations and celebrated on 21 June each year.",
            "Yoga benefits body, mind and spirit together.",
        ]),
    ],

    {
        summary:
            "Understand the philosophy, types and practices of yoga, with special reference to Patanjali's Ashtanga Yoga.",
        minutes: 10,
        tags: ["yoga", "ashtanga", "patanjali", "important"],

        mcqs: [
            mcq(
                "The Yoga Sutras were written by:",
                ["Vyasa", "Patanjali", "Gautama", "Kanada"],
                1,
                "Maharishi Patanjali is the author of the Yoga Sutras."
            ),
            mcq(
                "Ashtanga Yoga has how many limbs?",
                ["4", "6", "8", "10"],
                2,
                "There are eight limbs of yoga in Patanjali's system."
            ),
            mcq(
                "International Yoga Day is celebrated on:",
                ["1 May", "21 June", "15 August", "2 October"],
                1,
                "It is celebrated on 21 June, the summer solstice."
            ),
            mcq(
                "Dhyana is the limb of:",
                ["Posture", "Breath control", "Meditation", "Withdrawal"],
                2,
                "Dhyana means sustained meditation."
            ),
            mcq(
                "Which pranayama is known as the bee breath?",
                ["Kapalabhati", "Anulom Vilom", "Bhramari", "Ujjayi"],
                2,
                "Bhramari pranayama produces a humming sound like a bee."
            ),
            mcq(
                "Hatha Yoga mainly emphasises:",
                ["Devotion", "Knowledge", "Asana and Pranayama", "Service"],
                2,
                "Hatha Yoga focuses on physical postures and breath control."
            ),
        ],

        questions: [
            qa(
                "Explain the eight limbs of Ashtanga Yoga.",
                "The eight limbs of Patanjali's Ashtanga Yoga are: Yama, the five restraints of non violence, truth, non stealing, celibacy and non hoarding; Niyama, the five observances of purity, contentment, austerity, self study and surrender; Asana, a steady and comfortable posture; Pranayama, regulation of breath; Pratyahara, withdrawal of the senses from their objects; Dharana, concentration; Dhyana, unbroken meditation; and Samadhi, the state of super conscious absorption in which the meditator becomes one with the object of meditation.",
                5
            ),
            qa(
                "What are the different types of yoga? Explain any three.",
                "Indian tradition describes several types of yoga. Karma Yoga is the path of selfless action, in which one performs one's duties without attachment to the results, as taught in the Bhagavad Gita. Bhakti Yoga is the path of devotion, in which the seeker surrenders to the divine with love and humility. Jnana Yoga is the path of knowledge, in which the seeker enquires into the true nature of the self through study, reflection and meditation. Raja Yoga is the path of mind control described by Patanjali. Hatha Yoga emphasises physical postures and breath control.",
                5
            ),
            qa(
                "Why is yoga important in modern life?",
                "Modern life is marked by stress, sedentary habits and constant stimulation. Yoga offers a holistic practice that reduces stress, improves posture and flexibility, lowers blood pressure and enhances concentration and sleep. It is supported by modern research and accepted by the World Health Organization. As an indigenous Indian practice, yoga also provides a low cost, sustainable and culturally rooted approach to health and well being that can be practised by people of all ages.",
                4
            ),
            qa(
                "Write a short note on Patanjali.",
                "Maharishi Patanjali is the traditional author of the Yoga Sutras, a foundational text of yoga philosophy consisting of 195 aphorisms in four chapters. He is also credited with compiling the Mahabhashya, a great commentary on the grammar of Panini, and a work on Ayurveda. Patanjali is venerated as the Father of Yoga for his systematic exposition of the eightfold path that leads from the restless mind to the peaceful state of Samadhi.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 5 — Ayurveda: The Science of Life
========================================================= */

const ayurveda = createTopic(
    "ayurveda-the-science-of-life",
    "Ayurveda: The Science of Life",

    [
        definition(
            "Ayurveda",
            "The traditional Indian system of medicine, meaning the science of life, focusing on the balance of body, mind and spirit for prevention and cure of disease."
        ),

        heading("Founders and Texts"),

        table(
            ["Text", "Author", "Focus"],
            [
                ["Charaka Samhita", "Charaka", "Internal medicine, diagnosis and treatment."],
                ["Sushruta Samhita", "Sushruta", "Surgery, anatomy and operative procedures."],
                ["Ashtanga Hridaya", "Vagbhata", "A concise summary of the earlier two texts."],
            ]
        ),

        note(
            "Sushruta is called the Father of Surgery. He described operations such as rhinoplasty (reconstruction of the nose), cataract surgery and removal of kidney stones more than two thousand years ago.",
            "exam",
            "Frequently Asked"
        ),

        heading("The Panchamahabhuta Theory"),

        text(
            "Ayurveda holds that the entire universe, including the human body, is composed of five great elements: Akasha (ether), Vayu (air), Agni (fire), Jala (water) and Prithvi (earth)."
        ),

        heading("The Three Doshas"),

        definition(
            "Dosha",
            "The three biological humours that govern the physical and mental constitution of every person."
        ),

        table(
            ["Dosha", "Composed of", "Qualities", "Functions"],
            [
                ["Vata", "Air and ether", "Dry, light, cold, mobile", "Movement, breathing, nerve impulses."],
                ["Pitta", "Fire and water", "Hot, sharp, oily, liquid", "Digestion, metabolism, body temperature."],
                ["Kapha", "Water and earth", "Heavy, slow, cool, stable", "Structure, lubrication, immunity."],
            ]
        ),

        heading("Prakriti: Body Constitution"),

        list([
            "Vata Prakriti — slender build, quick mind, prone to anxiety and dry skin.",
            "Pitta Prakriti — medium build, sharp intellect, prone to acidity and inflammation.",
            "Kapha Prakriti — solid build, calm mind, prone to weight gain and congestion.",
            "Dual types such as Vata-Pitta or Pitta-Kapha also occur.",
        ]),

        heading("Concept of Agni and Ama"),

        list([
            "Agni — the digestive fire that transforms food into the seven dhatus or tissues.",
            "Ama — undigested toxic residue that accumulates when Agni is weak.",
            "Strong Agni produces good health; weak Agni produces Ama and disease.",
        ]),

        heading("The Seven Dhatus (Tissues)"),

        list([
            "Rasa — nutrient fluid (plasma).",
            "Rakta — blood.",
            "Mamsa — muscle.",
            "Meda — fat.",
            "Asthi — bone.",
            "Majja — marrow and nerve tissue.",
            "Shukra — reproductive tissue.",
        ]),

        heading("Branches of Ayurveda"),

        list([
            "Kayachikitsa — internal medicine.",
            "Shalya Tantra — surgery.",
            "Shalakya Tantra — ENT and ophthalmology.",
            "Kaumarabhritya — paediatrics.",
            "Bhutavidya — psychiatry.",
            "Agada Tantra — toxicology.",
            "Rasayana — rejuvenation therapy.",
            "Vajikarana — aphrodisiac therapy.",
        ]),

        heading("Diagnosis in Ayurveda"),

        table(
            ["Method", "Description"],
            [
                ["Prashna", "Questioning the patient about symptoms."],
                ["Darshana", "Visual observation of the patient."],
                ["Sparshana", "Palpation and pulse diagnosis (Nadi Pariksha)."],
            ]
        ),

        heading("Treatments in Ayurveda"),

        list([
            "Samshamana — palliative treatment to pacify aggravated doshas.",
            "Samshodhana — purification through Panchakarma.",
            "Panchakarma — five cleansing procedures: Vamana, Virechana, Basti, Nasya and Raktamokshana.",
            "Use of herbal medicines, mineral preparations, diet regulation, yoga and lifestyle change.",
        ]),

        heading("Modern Relevance of Ayurveda"),

        list([
            "Recognised by the World Health Organization as a traditional system of medicine.",
            "Supported by AYUSH, the Ministry of Ayurveda, Yoga and Naturopathy, Unani, Siddha and Homeopathy in India.",
            "Growing global demand for herbal and holistic medicine.",
            "Integration with modern science through research on turmeric, ashwagandha, tulsi and others.",
            "Emphasis on prevention through daily routine (Dinacharya) and seasonal routine (Ritucharya).",
        ]),

        keyPoints([
            "Ayurveda means science of life and focuses on balance of body, mind and spirit.",
            "Charaka Samhita deals with medicine and Sushruta Samhita with surgery.",
            "The three doshas are Vata, Pitta and Kapha.",
            "Panchakarma consists of five purification procedures.",
            "Ayurveda is recognised by WHO and supported by the Indian Ministry of AYUSH.",
        ]),
    ],

    {
        summary:
            "Learn the philosophy, texts, doshas, treatments and modern relevance of Ayurveda.",
        minutes: 11,
        tags: ["ayurveda", "dosha", "wellness", "important"],

        mcqs: [
            mcq(
                "Ayurveda means:",
                ["Science of herbs", "Science of life", "Science of stars", "Science of numbers"],
                1,
                "Ayur means life and Veda means knowledge."
            ),
            mcq(
                "The Sushruta Samhita deals mainly with:",
                ["Internal medicine", "Surgery", "Astronomy", "Music"],
                1,
                "Sushruta is the great treatise on ancient Indian surgery."
            ),
            mcq(
                "The dosha associated with movement is:",
                ["Vata", "Pitta", "Kapha", "Agni"],
                0,
                "Vata governs movement and nerve impulses."
            ),
            mcq(
                "Pitta is composed of:",
                ["Air and ether", "Fire and water", "Water and earth", "Earth and fire"],
                1,
                "Pitta has the qualities of fire and water."
            ),
            mcq(
                "How many procedures are there in Panchakarma?",
                ["3", "4", "5", "6"],
                2,
                "Panchakarma consists of five purification procedures."
            ),
            mcq(
                "AYUSH stands for:",
                ["Ayurveda, Yoga, Unani, Siddha, Homeopathy", "All Yoga Units of Health", "Ayurveda, Yoga, Surgery", "All Youth United Health"],
                0,
                "AYUSH is the Indian ministry supporting the five traditional systems."
            ),
        ],

        questions: [
            qa(
                "Explain the three doshas and their functions.",
                "Ayurveda holds that the body is governed by three doshas. Vata, made of air and ether, is light, dry, cold and mobile; it governs movement, breathing, circulation and nerve impulses. Pitta, made of fire and water, is hot, sharp and oily; it governs digestion, metabolism, body temperature and intelligence. Kapha, made of water and earth, is heavy, slow, cool and stable; it provides structure, lubrication, strength and immunity. Health is the balance of the three doshas according to the constitution of the individual.",
                5
            ),
            qa(
                "Describe the contributions of Charaka and Sushruta.",
                "Charaka, the father of Indian medicine, compiled the Charaka Samhita, a detailed treatise on internal medicine that covers anatomy, physiology, diagnosis, prognosis, treatment and ethical practice. Sushruta, the father of surgery, compiled the Sushruta Samhita, which describes more than 300 surgical procedures and 120 surgical instruments, including rhinoplasty, cataract surgery and the removal of foreign bodies. Together the two texts form the foundation of classical Ayurveda.",
                4
            ),
            qa(
                "What is Panchakarma? Name its five procedures.",
                "Panchakarma is the purification therapy of Ayurveda, consisting of five procedures that eliminate accumulated doshas from the body. Vamana is therapeutic emesis to remove excess Kapha. Virechana is purgation to remove excess Pitta. Basti is medicated enema, the most important treatment for Vata. Nasya is nasal administration of medicines to clear the head. Raktamokshana is the removal of impure blood to treat skin and blood disorders.",
                4
            ),
            qa(
                "Why is Ayurveda relevant in modern times?",
                "Ayurveda is relevant today because it emphasises prevention through daily routine, seasonal routine and diet, which are key to managing modern lifestyle diseases. It uses natural herbs and minimal chemicals, is cost effective and has a holistic approach. The World Health Organization recognises it as a traditional system of medicine. In India it is supported by the Ministry of AYUSH, and worldwide there is growing demand for ayurvedic products and treatments.",
                4
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit1Topics = [
    iksOverview,
    vedasUpanishadsGita,
    indianPhilosophy,
    yoga,
    ayurveda,
];