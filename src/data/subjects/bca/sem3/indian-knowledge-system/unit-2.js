/* =========================================================
   BCA • SEM 3 • Indian Knowledge System (IKS)
   UNIT 2 — Darshanas: Nyaya, Mimansa, Dharmashastra, Puranas
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
} from "../../../../helpers";

/* =========================================================
   TOPIC 1 — Nyaya Darshan (Logic and Reasoning)
========================================================= */

const nyayaDarshan = createTopic(
    "nyaya-darshan",
    "Nyaya Darshan (Logic and Reasoning)",

    [
        definition(
            "Nyaya Darshan",
            "Nyaya Darshan is one of the six orthodox schools of Hindu philosophy that focuses on logic, reasoning, epistemology and the systematic analysis of knowledge. The word 'Nyaya' means 'that by which the mind is led to a conclusion'."
        ),

        text(
            "Nyaya provides a scientific method for acquiring correct knowledge (Prama) and is considered the science of critical thinking in the Indian tradition. It emphasizes valid reasoning as the path to liberation (moksha)."
        ),

        heading("Founder and Text"),

        table(
            ["Aspect", "Details"],
            [
                ["Founder", "Sage Gautama (also called Akshapada)"],
                ["Primary Text", "Nyaya Sutras"],
                ["Period", "Around 6th century BCE"],
                ["Major Commentary", "Nyaya Bhashya by Vatsyayana"],
                ["Later School", "Navya-Nyaya (Neo-Logic) by Gangesha"],
            ]
        ),

        heading("Sixteen Categories (Padarthas) of Nyaya"),

        list([
            "Pramana — Means of valid knowledge.",
            "Prameya — Objects of knowledge.",
            "Samshaya — Doubt.",
            "Prayojana — Purpose or aim.",
            "Drishtanta — Example or illustration.",
            "Siddhanta — Established doctrine.",
            "Avayava — Members of syllogism.",
            "Tarka — Hypothetical reasoning.",
            "Nirnaya — Ascertainment or conclusion.",
            "Vada — Discussion for truth.",
            "Jalpa — Debate for victory.",
            "Vitanda — Destructive criticism.",
            "Hetvabhasa — Fallacies of reason.",
            "Chala — Quibbling.",
            "Jati — Futile objection.",
            "Nigrahasthana — Point of defeat.",
        ]),

        heading("Four Pramanas (Means of Valid Knowledge)"),

        table(
            ["Pramana", "Meaning", "Example"],
            [
                ["Pratyaksha", "Perception", "Direct observation with senses"],
                ["Anumana", "Inference", "Seeing smoke → inferring fire"],
                ["Upamana", "Comparison", "Learning what a wild cow is by comparison"],
                ["Shabda", "Verbal testimony", "Learning from scriptures or trusted persons"],
            ]
        ),

        heading("Five-Membered Syllogism (Panchavayava)"),

        text(
            "Nyaya's famous five-step method of inference is used to establish a proposition logically."
        ),

        table(
            ["Step", "Sanskrit", "English", "Example"],
            [
                ["1", "Pratijna", "Proposition", "The hill has fire"],
                ["2", "Hetu", "Reason", "Because there is smoke"],
                ["3", "Udaharana", "Example", "Wherever there is smoke, there is fire (like in kitchen)"],
                ["4", "Upanaya", "Application", "This hill has smoke"],
                ["5", "Nigamana", "Conclusion", "Therefore, this hill has fire"],
            ]
        ),

        heading("Types of Inference (Anumana)"),

        table(
            ["Type", "Description", "Example"],
            [
                ["Purvavat", "Cause to effect", "Dark clouds → rain will come"],
                ["Sheshavat", "Effect to cause", "River is full → it rained upstream"],
                ["Samanyatodrishta", "By analogy", "Sun moves because it changes position"],
            ]
        ),

        heading("Fallacies of Reason (Hetvabhasa)"),

        list([
            "Savyabhichara — Inconclusive reason.",
            "Viruddha — Contradictory reason.",
            "Prakaranasama — Counterbalanced reason.",
            "Sadhyasama — Unproved reason.",
            "Kalatita — Mistimed reason.",
        ]),

        heading("Nyaya Theory of Knowledge"),

        list([
            "Knowledge (Jnana) is a quality of the self (Atman).",
            "Valid knowledge (Prama) corresponds to reality.",
            "Invalid knowledge (Aprama) includes doubt, error and hypothetical reasoning.",
            "Liberation (Moksha) is achieved through true knowledge.",
            "God (Ishvara) is the efficient cause of the universe.",
        ]),

        heading("Contribution to Indian Philosophy"),

        list([
            "Developed the systematic method of debate and discussion.",
            "Established logic as an independent discipline.",
            "Influenced all other Indian philosophical schools.",
            "Created the framework for legal reasoning in India.",
            "Provided tools for scientific inquiry and analysis.",
            "Navya-Nyaya influenced modern symbolic logic.",
        ]),

        heading("Comparison with Aristotelian Logic"),

        table(
            ["Aspect", "Nyaya (Indian)", "Aristotle (Western)"],
            [
                ["Syllogism", "5 members", "3 members"],
                ["Includes example", "Yes (Udaharana)", "No"],
                ["Purpose", "Truth and liberation", "Truth"],
                ["Applied to", "Philosophy, law, science", "Philosophy, science"],
                ["Age", "Around 6th century BCE", "4th century BCE"],
            ]
        ),

        note(
            "Nyaya's five-membered syllogism is considered more complete than Aristotle's three-membered one because it includes an actual example (Udaharana), making the argument concrete and verifiable.",
            "tip",
            "Nyaya vs Aristotle"
        ),

        keyPoints([
            "Nyaya is the school of logic and reasoning.",
            "Founded by Gautama; primary text is Nyaya Sutras.",
            "Recognizes four Pramanas: perception, inference, comparison, testimony.",
            "Uses five-membered syllogism for logical proof.",
            "Foundation of Indian logical and analytical thinking.",
        ]),
    ],

    {
        summary:
            "Learn Nyaya Darshan, the Indian school of logic, its Pramanas, syllogism and contribution to philosophy.",
        minutes: 13,
        tags: ["nyaya", "logic", "darshan", "philosophy", "important"],

        mcqs: [
            mcq(
                "Who founded the Nyaya Darshan?",
                ["Kapila", "Gautama", "Patanjali", "Jaimini"],
                1,
                "Nyaya was founded by Sage Gautama (Akshapada)."
            ),
            mcq(
                "How many Pramanas does Nyaya accept?",
                ["2", "3", "4", "6"],
                2,
                "Nyaya accepts 4 Pramanas: Pratyaksha, Anumana, Upamana, Shabda."
            ),
            mcq(
                "How many members are in Nyaya syllogism?",
                ["3", "4", "5", "6"],
                2,
                "Nyaya syllogism has 5 members (Panchavayava)."
            ),
            mcq(
                "Which is NOT a Pramana in Nyaya?",
                ["Pratyaksha", "Anumana", "Shabda", "Kalpana"],
                3,
                "Kalpana (imagination) is not a Pramana. Nyaya accepts Pratyaksha, Anumana, Upamana, Shabda."
            ),
        ],

        questions: [
            qa(
                "What is Nyaya Darshan? Explain its four Pramanas.",
                "Nyaya Darshan is one of the six orthodox schools of Hindu philosophy that focuses on logic, reasoning and epistemology. Founded by Sage Gautama, it provides a scientific method for acquiring valid knowledge (Prama). Nyaya recognizes four Pramanas (means of valid knowledge): Pratyaksha (perception through senses), Anumana (inference like seeing smoke and knowing fire), Upamana (comparison, like learning what a wild cow is through similarity to a domestic cow) and Shabda (verbal testimony from reliable sources like scriptures or trustworthy persons). These four Pramanas form the complete framework for gaining true knowledge.",
                4
            ),
            qa(
                "Explain Nyaya's five-membered syllogism with example.",
                "Nyaya's Panchavayava (five-membered syllogism) is a systematic method of logical proof. The five steps are: (1) Pratijna (Proposition) — 'The hill has fire'; (2) Hetu (Reason) — 'Because there is smoke'; (3) Udaharana (Example) — 'Wherever there is smoke, there is fire, like in a kitchen'; (4) Upanaya (Application) — 'This hill has smoke like the kitchen'; (5) Nigamana (Conclusion) — 'Therefore, this hill has fire'. This is more complete than Aristotle's three-membered syllogism because it includes a concrete example, making the argument verifiable and empirical.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — Mimansa (Vedic Interpretation)
========================================================= */

const mimansa = createTopic(
    "mimansa",
    "Mimansa (Vedic Interpretation)",

    [
        definition(
            "Mimansa",
            "Mimansa is one of the six orthodox schools of Hindu philosophy that deals with the interpretation of Vedic rituals (karma) and the establishment of dharma. The word 'Mimansa' means 'critical investigation' or 'deep reflection'."
        ),

        text(
            "Mimansa is primarily concerned with the correct performance of Vedic rituals and the philosophical justification of dharma. It emphasizes action (karma) as the primary means of achieving spiritual and worldly goals."
        ),

        heading("Two Branches of Mimansa"),

        table(
            ["Branch", "Focus", "Founder"],
            [
                ["Purva Mimansa", "Karma-Kanda (rituals) of Vedas", "Jaimini"],
                ["Uttara Mimansa (Vedanta)", "Jnana-Kanda (knowledge) of Vedas", "Badarayana/Vyasa"],
            ]
        ),

        heading("Purva Mimansa"),

        text(
            "When we refer to 'Mimansa', we generally mean Purva Mimansa. It focuses on the earlier (purva) portion of the Vedas dealing with rituals and duties."
        ),

        table(
            ["Aspect", "Details"],
            [
                ["Founder", "Jaimini"],
                ["Primary Text", "Mimansa Sutras (Jaimini Sutras)"],
                ["Period", "Around 4th century BCE"],
                ["Major Commentary", "Shabara Bhashya by Shabara"],
                ["Sub-schools", "Prabhakara School and Kumarila School"],
            ]
        ),

        heading("Key Principles of Mimansa"),

        list([
            "The Vedas are eternal and self-authoritative (Apaurusheya).",
            "Dharma is defined as what is enjoined by the Vedas.",
            "Rituals (karma) are the primary means of achieving goals.",
            "Every Vedic command has a purpose.",
            "Meaning of words is eternal (Nitya Shabda).",
            "The universe operates on the principle of Apurva (unseen force).",
        ]),

        heading("Apurva — Unseen Potency"),

        definition(
            "Apurva",
            "Apurva is the unseen potency or force generated by the performance of a Vedic ritual, which produces the desired result (fruit) at the appropriate time, even long after the ritual is completed."
        ),

        heading("Mimansa Theory of Knowledge"),

        text(
            "Mimansa accepts six Pramanas (means of valid knowledge), more than Nyaya."
        ),

        table(
            ["Pramana", "Meaning"],
            [
                ["Pratyaksha", "Perception"],
                ["Anumana", "Inference"],
                ["Upamana", "Comparison"],
                ["Shabda", "Verbal testimony (Vedas)"],
                ["Arthapatti", "Postulation/presumption"],
                ["Anupalabdhi", "Non-apprehension (proof of absence)"],
            ]
        ),

        heading("Types of Vedic Statements"),

        table(
            ["Type", "Sanskrit", "Description"],
            [
                ["Injunction", "Vidhi", "Command to perform action"],
                ["Prohibition", "Nishedha", "Command not to perform"],
                ["Description", "Arthavada", "Explanatory statements"],
                ["Hymn", "Mantra", "Prayers and chants"],
                ["Name", "Namadheya", "Naming of rituals"],
            ]
        ),

        heading("Four Purposes (Purushartha)"),

        list([
            "Dharma — Righteousness and moral duty.",
            "Artha — Wealth and material prosperity.",
            "Kama — Legitimate desires and pleasures.",
            "Moksha — Liberation from the cycle of birth and death.",
        ]),

        heading("Mimansa on Dharma"),

        list([
            "Dharma is not perceptible by senses.",
            "It can only be known through Vedic injunctions.",
            "Following dharma leads to worldly prosperity and heaven.",
            "Dharma is universal and eternal.",
            "It applies to all beings according to their nature and role.",
        ]),

        heading("Kumarila Bhatta and Prabhakara"),

        table(
            ["Aspect", "Kumarila School", "Prabhakara School"],
            [
                ["Focus", "Realistic interpretation", "Anvitabhidhana theory"],
                ["Pramanas", "6 pramanas", "5 pramanas (no anupalabdhi)"],
                ["Ritual purpose", "For happiness/heaven", "Because Vedas command"],
                ["Followers", "More popular", "Fewer followers"],
            ]
        ),

        heading("Contribution to Indian Thought"),

        list([
            "Established rules of Vedic interpretation.",
            "Developed principles of language and meaning.",
            "Provided philosophical basis for Hindu law and ethics.",
            "Influenced Indian legal system (Dharmashastra).",
            "Contributed to linguistics and hermeneutics.",
            "Preserved the ritual tradition of the Vedas.",
        ]),

        note(
            "Mimansa is important for BCA students of IKS because it teaches critical analysis, interpretation of texts and systematic reasoning — skills essential for research and problem-solving.",
            "tip",
            "Relevance Today"
        ),

        keyPoints([
            "Mimansa deals with interpretation of Vedic rituals.",
            "Founded by Jaimini; primary text is Mimansa Sutras.",
            "Two branches: Purva Mimansa (karma) and Uttara Mimansa (Vedanta).",
            "Accepts 6 Pramanas including Arthapatti and Anupalabdhi.",
            "Concept of Apurva explains delayed fruits of actions.",
        ]),
    ],

    {
        summary:
            "Learn Mimansa Darshan, its focus on Vedic rituals, dharma, six Pramanas and the concept of Apurva.",
        minutes: 12,
        tags: ["mimansa", "jaimini", "dharma", "vedic", "important"],

        mcqs: [
            mcq(
                "Who founded Purva Mimansa?",
                ["Kapila", "Gautama", "Jaimini", "Vyasa"],
                2,
                "Purva Mimansa was founded by Jaimini."
            ),
            mcq(
                "How many Pramanas does Mimansa accept?",
                ["3", "4", "5", "6"],
                3,
                "Mimansa accepts 6 Pramanas."
            ),
            mcq(
                "Apurva refers to:",
                ["A ritual", "Unseen potency", "A deity", "A Veda"],
                1,
                "Apurva is the unseen force from ritual actions."
            ),
            mcq(
                "Uttara Mimansa is also called:",
                ["Nyaya", "Vedanta", "Yoga", "Samkhya"],
                1,
                "Uttara Mimansa is also known as Vedanta."
            ),
        ],

        questions: [
            qa(
                "What is Mimansa Darshan? Explain its two branches.",
                "Mimansa is one of the six orthodox schools of Hindu philosophy that deals with the interpretation of Vedic rituals and the establishment of dharma. The word 'Mimansa' means 'critical investigation'. It has two main branches: (1) Purva Mimansa, founded by Jaimini, which focuses on the Karma-Kanda (ritual portion) of the Vedas and explains how to perform Vedic rituals correctly; and (2) Uttara Mimansa or Vedanta, founded by Badarayana/Vyasa, which focuses on the Jnana-Kanda (knowledge portion) of the Vedas and deals with the ultimate reality (Brahman). Purva Mimansa emphasizes action (karma), while Uttara Mimansa emphasizes knowledge (jnana).",
                4
            ),
            qa(
                "Explain the six Pramanas of Mimansa.",
                "Mimansa accepts six Pramanas (means of valid knowledge), more than any other school: (1) Pratyaksha (perception through senses); (2) Anumana (inference from evidence); (3) Upamana (comparison and analogy); (4) Shabda (verbal testimony, especially the Vedas); (5) Arthapatti (postulation — when a fact requires an assumption to explain it, like inferring someone eats at night if he is fat but doesn't eat during the day); and (6) Anupalabdhi (non-apprehension — proof of absence, like knowing there is no elephant in a room by not seeing one). These six Pramanas provide a comprehensive framework for acquiring valid knowledge.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — Dharmashastra (Law and Ethics)
========================================================= */

const dharmashastra = createTopic(
    "dharmashastra",
    "Dharmashastra (Law and Ethics)",

    [
        definition(
            "Dharmashastra",
            "Dharmashastra is a genre of Sanskrit texts that deals with dharma — the ethical, moral, social, legal and religious duties of individuals and society. It forms the basis of ancient Indian law and jurisprudence."
        ),

        text(
            "Dharmashastra literally means 'science of dharma'. It covers all aspects of human life including personal conduct, family relations, social duties, civil and criminal law, and governance. It is the foundation of Hindu law and ethics."
        ),

        heading("Meaning of Dharma"),

        list([
            "Righteousness and moral duty.",
            "Natural law that maintains cosmic order.",
            "Ethical conduct in personal and social life.",
            "Religious duties and observances.",
            "Universal principles applicable to all beings.",
            "That which sustains and supports (from root 'dhr' meaning to hold).",
        ]),

        heading("Major Dharmashastra Texts"),

        table(
            ["Text", "Author", "Content"],
            [
                ["Manusmriti", "Manu", "Most comprehensive; social and personal law"],
                ["Yajnavalkya Smriti", "Yajnavalkya", "Systematic legal treatise"],
                ["Narada Smriti", "Narada", "Focuses on judicial procedures"],
                ["Parashara Smriti", "Parashara", "For Kali Yuga"],
                ["Vishnu Smriti", "Vishnu", "Combines dharma and devotion"],
                ["Gautama Dharma Sutra", "Gautama", "Oldest Dharma Sutra"],
            ]
        ),

        heading("Sources of Dharma"),

        table(
            ["Source", "Sanskrit", "Description"],
            [
                ["Vedas", "Shruti", "Highest authority"],
                ["Smritis", "Smriti", "Traditional texts"],
                ["Conduct of good", "Sadachara", "Practices of virtuous persons"],
                ["Self-satisfaction", "Atmatushti", "Conscience of the pure"],
            ]
        ),

        heading("Four Ashramas (Stages of Life)"),

        table(
            ["Ashrama", "Age", "Duty"],
            [
                ["Brahmacharya", "0-25", "Student life, learning, celibacy"],
                ["Grihastha", "25-50", "Householder, family, career"],
                ["Vanaprastha", "50-75", "Retirement, spiritual pursuits"],
                ["Sannyasa", "75+", "Renunciation, seeking moksha"],
            ]
        ),

        heading("Four Purusharthas (Goals of Life)"),

        table(
            ["Purushartha", "Meaning", "Focus"],
            [
                ["Dharma", "Righteousness", "Ethical conduct"],
                ["Artha", "Wealth", "Material prosperity"],
                ["Kama", "Desires", "Legitimate pleasures"],
                ["Moksha", "Liberation", "Spiritual freedom"],
            ]
        ),

        heading("Four Varnas (Social Classes)"),

        text(
            "Dharmashastra describes the Varna system based on qualities (guna) and work (karma), though later it became rigid and hereditary."
        ),

        table(
            ["Varna", "Duty", "Qualities"],
            [
                ["Brahmana", "Study, teaching, priesthood", "Wisdom, purity"],
                ["Kshatriya", "Protection, governance", "Courage, leadership"],
                ["Vaishya", "Trade, agriculture, business", "Industriousness"],
                ["Shudra", "Service, craftsmanship", "Loyalty, service"],
            ]
        ),

        heading("Types of Dharma"),

        list([
            "Sanatana Dharma — Eternal universal duties.",
            "Varnashrama Dharma — Duties based on Varna and Ashrama.",
            "Svadharma — Personal duty based on nature.",
            "Yuga Dharma — Duties suited to the age.",
            "Apad Dharma — Duties in times of emergency.",
            "Rajadharma — Duties of the king/ruler.",
            "Streedharma — Duties of women.",
        ]),

        heading("Ten Cardinal Virtues (Sadharana Dharma)"),

        list([
            "Dhriti — Patience and steadiness.",
            "Kshama — Forgiveness.",
            "Dama — Self-control.",
            "Asteya — Non-stealing.",
            "Shaucha — Purity (internal and external).",
            "Indriyanigraha — Control of senses.",
            "Dhi — Wisdom and intellect.",
            "Vidya — Knowledge.",
            "Satya — Truthfulness.",
            "Akrodha — Absence of anger.",
        ]),

        heading("Legal System in Dharmashastra"),

        list([
            "Vyavahara — Civil and criminal law.",
            "18 titles of law (Vivada-padas) including debt, deposit, sale, boundary disputes.",
            "Elaborate rules of evidence and witnesses.",
            "System of punishments (Danda) based on offense.",
            "Role of the king as protector of dharma.",
            "Courts and judicial procedures.",
        ]),

        heading("Rajadharma (Duties of King)"),

        list([
            "Protect subjects from harm.",
            "Administer justice fairly.",
            "Support righteous conduct.",
            "Punish wrongdoers.",
            "Promote welfare of all.",
            "Uphold varnashrama dharma.",
            "Consult wise advisors.",
        ]),

        heading("Modern Relevance"),

        list([
            "Influenced modern Indian legal system.",
            "Basis for personal laws (marriage, inheritance).",
            "Provides ethical framework for governance.",
            "Emphasizes environmental protection.",
            "Promotes universal values like truth and non-violence.",
            "Balances individual rights with social duties.",
        ]),

        note(
            "Dharmashastra teaches that individual well-being and social welfare are interconnected. True dharma involves fulfilling one's duties while promoting the good of all beings.",
            "tip",
            "Universal Principle"
        ),

        keyPoints([
            "Dharmashastra is the science of dharma (law and ethics).",
            "Manusmriti is the most famous Dharmashastra text.",
            "Four sources of dharma: Vedas, Smritis, Sadachara, Atmatushti.",
            "Four Ashramas: Brahmacharya, Grihastha, Vanaprastha, Sannyasa.",
            "Four Purusharthas: Dharma, Artha, Kama, Moksha.",
        ]),
    ],

    {
        summary:
            "Learn Dharmashastra, its concept of dharma, ashramas, purusharthas and its role as the foundation of ancient Indian law.",
        minutes: 13,
        tags: ["dharmashastra", "dharma", "manusmriti", "ethics", "important"],

        mcqs: [
            mcq(
                "Which is the most famous Dharmashastra text?",
                ["Yajnavalkya Smriti", "Manusmriti", "Narada Smriti", "Vishnu Smriti"],
                1,
                "Manusmriti is the most comprehensive Dharmashastra text."
            ),
            mcq(
                "How many Ashramas are there?",
                ["3", "4", "5", "6"],
                1,
                "There are 4 Ashramas: Brahmacharya, Grihastha, Vanaprastha, Sannyasa."
            ),
            mcq(
                "How many Purusharthas are there?",
                ["3", "4", "5", "6"],
                1,
                "Four Purusharthas: Dharma, Artha, Kama, Moksha."
            ),
            mcq(
                "The first Ashrama is:",
                ["Grihastha", "Brahmacharya", "Vanaprastha", "Sannyasa"],
                1,
                "Brahmacharya (student life) is the first Ashrama."
            ),
        ],

        questions: [
            qa(
                "What is Dharmashastra? Explain the four sources of dharma.",
                "Dharmashastra is the genre of Sanskrit texts that deals with dharma — the ethical, moral, social, legal and religious duties of individuals and society. It literally means 'science of dharma' and forms the basis of ancient Indian law and jurisprudence. The four sources of dharma are: (1) Vedas (Shruti) — the highest authority, considered eternal and revealed; (2) Smritis — traditional texts like Manusmriti and Yajnavalkya Smriti; (3) Sadachara — the conduct of virtuous and learned persons; and (4) Atmatushti — the conscience or inner satisfaction of pure-hearted individuals. When there is conflict, Shruti prevails over Smriti, and Smriti over the others.",
                4
            ),
            qa(
                "Explain the four Ashramas and four Purusharthas.",
                "The four Ashramas are the stages of life: (1) Brahmacharya (0-25) — student life focused on learning and celibacy; (2) Grihastha (25-50) — householder stage focused on family, career and social duties; (3) Vanaprastha (50-75) — gradual retirement and spiritual pursuits; and (4) Sannyasa (75+) — complete renunciation and seeking moksha. The four Purusharthas are the goals of life: (1) Dharma — righteousness and ethical conduct; (2) Artha — wealth and material prosperity; (3) Kama — legitimate desires and pleasures; and (4) Moksha — liberation from the cycle of birth and death. Together, the Ashramas and Purusharthas provide a complete framework for a balanced and meaningful life.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — Puranas
========================================================= */

const puranas = createTopic(
    "puranas",
    "Puranas",

    [
        definition(
            "Puranas",
            "The Puranas are a genre of ancient Indian texts that contain narratives about the history of the universe, genealogies of gods and kings, cosmology, philosophy, geography and traditional lore. The word 'Purana' means 'ancient' or 'old'."
        ),

        text(
            "The Puranas are considered the fifth Veda (Panchama Veda) and were composed to make Vedic knowledge accessible to common people through stories, legends and simple language. They are traditionally attributed to Sage Vyasa."
        ),

        heading("Characteristics of Puranas (Pancha-Lakshana)"),

        text("A Purana traditionally has five characteristics:"),

        table(
            ["Lakshana", "Meaning", "Content"],
            [
                ["Sarga", "Creation", "Origin of the universe"],
                ["Pratisarga", "Re-creation", "Dissolution and re-creation"],
                ["Vamsha", "Genealogy", "Lineage of gods and sages"],
                ["Manvantara", "Cosmic cycles", "Reigns of Manus (progenitors)"],
                ["Vamshanucharita", "Dynasties", "Histories of royal dynasties"],
            ]
        ),

        heading("Eighteen Maha Puranas"),

        text(
            "There are 18 major Puranas (Maha Puranas) classified based on which deity they primarily glorify."
        ),

        table(
            ["Category", "Deity", "Puranas"],
            [
                ["Sattvika", "Vishnu", "Vishnu, Bhagavata, Narada, Garuda, Padma, Varaha"],
                ["Rajasika", "Brahma", "Brahma, Brahmanda, Brahma-vaivarta, Markandeya, Bhavishya, Vamana"],
                ["Tamasika", "Shiva", "Shiva, Linga, Skanda, Agni, Matsya, Kurma"],
            ]
        ),

        heading("Most Important Puranas"),

        table(
            ["Purana", "Focus", "Special Feature"],
            [
                ["Bhagavata Purana", "Life of Krishna", "Most popular; source of devotional Hinduism"],
                ["Vishnu Purana", "Vishnu and his incarnations", "Considered model Purana"],
                ["Shiva Purana", "Life of Shiva", "Legends and worship of Shiva"],
                ["Markandeya Purana", "Devi Mahatmya", "Contains famous Durga Saptashati"],
                ["Bhavishya Purana", "Prophecies", "Predictions of future events"],
                ["Skanda Purana", "Kartikeya", "Largest Purana"],
            ]
        ),

        heading("Eighteen Upa Puranas"),

        text(
            "In addition to the 18 Maha Puranas, there are 18 secondary Puranas called Upa Puranas, including Sanatkumara, Narasimha, Ganesha, Kalki, Vishnudharma and others."
        ),

        heading("Content of Puranas"),

        list([
            "Creation and dissolution of the universe.",
            "Stories of gods, goddesses and their incarnations.",
            "Genealogies of royal dynasties (Suryavamsha, Chandravamsha).",
            "Lives of great sages and saints.",
            "Descriptions of geography (Bharatvarsha, Jambudvipa).",
            "Cosmology (14 lokas, Meru mountain).",
            "Time cycles (Yugas, Manvantaras, Kalpas).",
            "Rituals, vows (vratas) and pilgrimage places (tirthas).",
            "Ethics, dharma and philosophy.",
            "Ayurveda, astrology and other sciences.",
        ]),

        heading("The Four Yugas"),

        table(
            ["Yuga", "Duration", "Characteristic"],
            [
                ["Satya Yuga", "1,728,000 years", "Age of truth; dharma at 100%"],
                ["Treta Yuga", "1,296,000 years", "Ramayana era; dharma at 75%"],
                ["Dvapara Yuga", "864,000 years", "Mahabharata era; dharma at 50%"],
                ["Kali Yuga", "432,000 years", "Current age; dharma at 25%"],
            ]
        ),

        heading("Cosmology in Puranas"),

        list([
            "Universe consists of 14 lokas (7 upper, 7 lower).",
            "Mount Meru is the center of the universe.",
            "Seven continents (dvipas) surround Meru.",
            "Bharatvarsha is our part of Jambudvipa.",
            "Time is cyclic — universe is created and destroyed repeatedly.",
            "One day of Brahma = 4.32 billion years.",
        ]),

        heading("Ten Incarnations of Vishnu (Dashavatara)"),

        list([
            "Matsya — Fish.",
            "Kurma — Tortoise.",
            "Varaha — Boar.",
            "Narasimha — Man-lion.",
            "Vamana — Dwarf.",
            "Parashurama — Warrior with axe.",
            "Rama — Prince of Ayodhya.",
            "Krishna — Divine cowherd.",
            "Buddha — Enlightened one.",
            "Kalki — Future incarnation.",
        ]),

        heading("Importance of Puranas"),

        list([
            "Made Vedic wisdom accessible to common people.",
            "Preserved ancient history and traditions.",
            "Basis of Hindu religious practices.",
            "Source of Indian art, literature and culture.",
            "Inspired classical dance and music.",
            "Preserved geographical and historical information.",
            "Foundation of bhakti (devotion) movement.",
            "Contains scientific and philosophical insights.",
        ]),

        heading("Puranas and Modern Science"),

        list([
            "Cosmic time scales match modern astronomy.",
            "Cyclical universe theory similar to modern cosmology.",
            "Descriptions of atoms in Vaisheshika-influenced Puranas.",
            "Ancient geography reflects real places.",
            "Contains early forms of medical knowledge.",
            "Mathematical concepts embedded in narratives.",
        ]),

        note(
            "The Puranas are not just religious texts but encyclopedias of ancient Indian knowledge, containing history, geography, science, philosophy and culture in the form of engaging stories.",
            "tip",
            "Encyclopedic Nature"
        ),

        keyPoints([
            "Puranas are ancient texts making Vedic wisdom accessible.",
            "There are 18 Maha Puranas and 18 Upa Puranas.",
            "Attributed to Sage Vyasa; called the 'fifth Veda'.",
            "Have five characteristics: Sarga, Pratisarga, Vamsha, Manvantara, Vamshanucharita.",
            "Contain cosmology, history, philosophy and stories.",
        ]),
    ],

    {
        summary:
            "Learn about Puranas, their characteristics, 18 Maha Puranas, cosmology, yugas and cultural importance.",
        minutes: 12,
        tags: ["puranas", "vedic", "cosmology", "mythology", "important"],

        mcqs: [
            mcq(
                "How many Maha Puranas are there?",
                ["12", "16", "18", "20"],
                2,
                "There are 18 Maha Puranas."
            ),
            mcq(
                "Who is traditionally credited with composing the Puranas?",
                ["Valmiki", "Vyasa", "Kalidasa", "Panini"],
                1,
                "Puranas are attributed to Sage Vyasa."
            ),
            mcq(
                "The most popular Purana is:",
                ["Vishnu Purana", "Bhagavata Purana", "Shiva Purana", "Skanda Purana"],
                1,
                "Bhagavata Purana is the most popular Purana."
            ),
            mcq(
                "We are currently in which Yuga?",
                ["Satya", "Treta", "Dvapara", "Kali"],
                3,
                "We are in Kali Yuga according to Puranas."
            ),
        ],

        questions: [
            qa(
                "What are Puranas? Explain their characteristics (Pancha-Lakshana).",
                "The Puranas are a genre of ancient Indian texts containing narratives about the universe, genealogies of gods and kings, cosmology, philosophy and traditional lore. The word 'Purana' means 'ancient'. They are considered the fifth Veda and were composed to make Vedic knowledge accessible to common people. Puranas traditionally have five characteristics called Pancha-Lakshana: (1) Sarga — creation of the universe; (2) Pratisarga — dissolution and re-creation; (3) Vamsha — genealogy of gods and sages; (4) Manvantara — cosmic cycles of Manus; and (5) Vamshanucharita — histories of royal dynasties. These five elements together provide a complete cosmic and historical account.",
                4
            ),
            qa(
                "Describe the classification of 18 Maha Puranas.",
                "The 18 Maha Puranas are classified into three groups based on which deity they primarily glorify: (1) Sattvika Puranas glorify Vishnu and include Vishnu, Bhagavata, Narada, Garuda, Padma and Varaha Puranas; (2) Rajasika Puranas glorify Brahma and include Brahma, Brahmanda, Brahma-vaivarta, Markandeya, Bhavishya and Vamana Puranas; (3) Tamasika Puranas glorify Shiva and include Shiva, Linga, Skanda, Agni, Matsya and Kurma Puranas. The most popular are Bhagavata Purana (life of Krishna), Vishnu Purana (considered the model), Shiva Purana (Shiva's legends), Markandeya Purana (contains Durga Saptashati) and Skanda Purana (the largest). Together they form an encyclopedic collection of Hindu religious, cultural and philosophical wisdom.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 5 — Contributions of IKS to Modern World
========================================================= */

const iksContributions = createTopic(
    "iks-contributions-modern-world",
    "Contributions of IKS to Modern World",

    [
        text(
            "The Indian Knowledge System has made remarkable contributions to almost every field of human knowledge. Many discoveries and innovations that shaped the modern world had their roots in ancient India."
        ),

        heading("Contributions to Mathematics"),

        table(
            ["Contribution", "Contributor", "Impact"],
            [
                ["Zero (0)", "Aryabhata, Brahmagupta", "Foundation of modern mathematics"],
                ["Decimal system", "Ancient Indian mathematicians", "Universal number system"],
                ["Negative numbers", "Brahmagupta", "Algebra and accounting"],
                ["Algebra (Beejaganita)", "Aryabhata, Bhaskara II", "Modern algebra"],
                ["Trigonometry", "Aryabhata", "Sine, cosine functions"],
                ["Value of Pi (π)", "Aryabhata", "3.1416 accurately"],
                ["Pythagorean theorem", "Baudhayana (Shulba Sutras)", "Before Pythagoras"],
                ["Calculus concepts", "Bhaskara II, Madhava", "Infinitesimals, series"],
            ]
        ),

        heading("Contributions to Astronomy"),

        list([
            "Aryabhata proposed Earth rotates on its axis (5th century CE).",
            "Correctly explained lunar and solar eclipses.",
            "Calculated length of solar year: 365.2588 days.",
            "Developed concept of 27 Nakshatras (constellations).",
            "Bhaskara II calculated Earth's diameter accurately.",
            "Panchanga calendar system still used today.",
            "Concept of heliocentric system hints (Yajnavalkya).",
        ]),

        heading("Contributions to Medicine (Ayurveda)"),

        table(
            ["Text", "Author", "Focus"],
            [
                ["Charaka Samhita", "Charaka", "Internal medicine, diagnosis"],
                ["Sushruta Samhita", "Sushruta", "Surgery (father of surgery)"],
                ["Ashtanga Hridaya", "Vagbhata", "Comprehensive Ayurveda"],
            ]
        ),

        list([
            "Sushruta performed plastic surgery, cataract surgery.",
            "Detailed knowledge of anatomy from dissection.",
            "300+ surgical procedures described.",
            "125+ surgical instruments developed.",
            "Concept of three doshas (Vata, Pitta, Kapha).",
            "Herbal medicine with thousands of plants.",
            "Preventive medicine and diet science.",
            "Concept of immunization (variolation).",
        ]),

        heading("Contributions to Physics and Chemistry"),

        list([
            "Kanada proposed atomic theory (Vaisheshika Darshan).",
            "Concept of Paramanu (indivisible atom).",
            "Rasashastra — Indian alchemy and chemistry.",
            "Metallurgy — Iron Pillar of Delhi (rust-free for 1600 years).",
            "Wootz steel (basis of Damascus steel).",
            "Zinc extraction and refining.",
            "Concept of gravity mentioned by Brahmagupta.",
        ]),

        heading("Contributions to Linguistics"),

        list([
            "Panini's Ashtadhyayi — most scientific grammar.",
            "Yaska's Nirukta — first work on etymology.",
            "Sanskrit — mother of many Indian languages.",
            "Influenced Noam Chomsky's Generative Grammar.",
            "Basis of Natural Language Processing (NLP).",
            "Sanskrit ideal for computer programming (NASA study).",
        ]),

        heading("Contributions to Philosophy and Psychology"),

        list([
            "Six Darshanas providing complete philosophical framework.",
            "Yoga — mind-body science recognized worldwide.",
            "Vedanta — non-dualism (Advaita) philosophy.",
            "Buddhist psychology and meditation practices.",
            "Karma and rebirth concepts.",
            "Consciousness studies (Chit).",
            "Ethics based on universal principles.",
        ]),

        heading("Contributions to Arts and Culture"),

        list([
            "Natya Shastra — comprehensive treatise on performing arts.",
            "Classical music (Sangeet) traditions.",
            "Classical dance forms (Bharatanatyam, Kathak, Odissi, etc.).",
            "Sculpture and temple architecture.",
            "Painting traditions (Ajanta, Rajput, Mughal).",
            "Literature (Sanskrit dramas, poetry, epics).",
        ]),

        heading("Contributions to Political Science and Economics"),

        table(
            ["Contribution", "Text/Person", "Impact"],
            [
                ["Arthashastra", "Chanakya (Kautilya)", "Statecraft, economics, warfare"],
                ["Dharmashastra", "Manu and others", "Law and governance"],
                ["Panchayat system", "Ancient India", "Grassroots democracy"],
                ["Guild system", "Shrenis", "Trade organization"],
            ]
        ),

        heading("Contributions to Environment and Sustainability"),

        list([
            "Reverence for nature (rivers, mountains, trees).",
            "Sacred groves for biodiversity conservation.",
            "Concept of Vasudhaiva Kutumbakam (world as one family).",
            "Sustainable agriculture practices.",
            "Water harvesting and management.",
            "Ayurvedic use of medicinal plants.",
            "Yajna — environmental purification.",
        ]),

        heading("Modern Applications of IKS"),

        table(
            ["IKS Concept", "Modern Application"],
            [
                ["Yoga", "Global wellness industry"],
                ["Ayurveda", "Alternative medicine, wellness tourism"],
                ["Meditation", "Stress management, therapy"],
                ["Sanskrit", "Computational linguistics, AI"],
                ["Panchayat", "Local governance in India"],
                ["Vastu Shastra", "Sustainable architecture"],
                ["Nyaya logic", "Legal reasoning, philosophy"],
                ["Zero and decimals", "All modern computing"],
            ]
        ),

        heading("IKS and National Education Policy (NEP) 2020"),

        list([
            "IKS integrated into school and college curricula.",
            "Establishment of IKS Division under Ministry of Education.",
            "Research and documentation of IKS.",
            "Promotion of Indian languages and Sanskrit.",
            "Holistic and multidisciplinary education.",
            "Value-based education rooted in Indian culture.",
            "Focus on Indian art, philosophy and heritage.",
        ]),

        heading("Global Recognition of IKS"),

        list([
            "International Day of Yoga (June 21) declared by UN.",
            "Ayurveda recognized by WHO as traditional medicine.",
            "Meditation practices adopted worldwide.",
            "Indian mathematics history acknowledged globally.",
            "Sanskrit studied in universities worldwide.",
            "Bhagavad Gita translated in most world languages.",
            "Buddhist teachings influence global thought.",
        ]),

        note(
            "The Indian Knowledge System is not merely an academic subject but a living tradition that continues to inspire and contribute to solutions for modern challenges in health, environment, ethics and technology.",
            "tip",
            "Living Heritage"
        ),

        keyPoints([
            "IKS contributed zero, decimal system and algebra to mathematics.",
            "Aryabhata and Bhaskara made major astronomical discoveries.",
            "Sushruta pioneered surgery; Charaka developed medicine.",
            "Panini's grammar influenced modern linguistics and AI.",
            "IKS is being revived through NEP 2020 for holistic education.",
        ]),
    ],

    {
        summary:
            "Explore the vast contributions of IKS to mathematics, science, medicine, philosophy and modern world.",
        minutes: 13,
        tags: ["iks", "contributions", "science", "mathematics", "important"],

        mcqs: [
            mcq(
                "Who is known as the father of surgery in ancient India?",
                ["Charaka", "Sushruta", "Vagbhata", "Patanjali"],
                1,
                "Sushruta is known as the father of surgery."
            ),
            mcq(
                "Who calculated the value of Pi (π)?",
                ["Brahmagupta", "Aryabhata", "Bhaskara", "Panini"],
                1,
                "Aryabhata calculated the value of pi accurately."
            ),
            mcq(
                "Who proposed the atomic theory in ancient India?",
                ["Kapila", "Kanada", "Gautama", "Jaimini"],
                1,
                "Kanada, founder of Vaisheshika, proposed atomic theory."
            ),
            mcq(
                "Which text is called the science of statecraft?",
                ["Manusmriti", "Arthashastra", "Ayurveda", "Nirukta"],
                1,
                "Arthashastra by Chanakya deals with statecraft."
            ),
        ],

        questions: [
            qa(
                "Describe major contributions of India to mathematics and astronomy.",
                "India has made foundational contributions to mathematics and astronomy. In mathematics: the concept of zero and decimal system by Aryabhata and Brahmagupta, negative numbers by Brahmagupta, algebra (Beejaganita) by Bhaskara II, accurate value of pi (3.1416) by Aryabhata, Pythagorean theorem in Shulba Sutras by Baudhayana (before Pythagoras), and early calculus concepts by Madhava. In astronomy: Aryabhata proposed Earth rotates on its axis in the 5th century CE, correctly explained eclipses scientifically, calculated the solar year as 365.2588 days, developed the concept of 27 Nakshatras, and the Panchanga calendar system that is still used today. These contributions form the foundation of modern mathematics and astronomy.",
                4
            ),
            qa(
                "Explain the contributions of IKS to medicine and modern relevance.",
                "The Indian Knowledge System's medical tradition, Ayurveda, has made significant contributions. Sushruta, the father of surgery, described 300+ surgical procedures and 125+ instruments in Sushruta Samhita, including plastic surgery and cataract surgery. Charaka Samhita established internal medicine and diagnostic principles. Vagbhata's Ashtanga Hridaya provided comprehensive Ayurvedic knowledge. Concepts like three doshas (Vata, Pitta, Kapha), preventive medicine, herbal treatments, diet science and early immunization were pioneered in India. Today, Ayurveda is recognized by WHO as traditional medicine, yoga has become a global wellness practice with International Day of Yoga on June 21, and meditation is widely used for stress management. Ayurvedic wellness tourism is a growing global industry, showing the continued relevance of ancient Indian medical wisdom.",
                4
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit2Topics = [
    nyayaDarshan,
    mimansa,
    dharmashastra,
    puranas,
    iksContributions,
];