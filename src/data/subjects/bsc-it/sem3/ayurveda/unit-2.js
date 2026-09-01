/* =========================================================
   B.Sc IT • SEM 3 • IKS: Ayurveda
   UNIT 2 — Lifestyle, Digestion, Gunas and Contributions
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

const lifestyle = createTopic(
    "lifestyle-management-through-ayurveda",
    "Lifestyle Management through Ayurveda",
    [
        definition(
            "Dinacharya",
            "Dinacharya is the Ayurvedic daily routine designed to keep doshas balanced through disciplined habits of waking, hygiene, diet, work and sleep."
        ),
        heading("Key Lifestyle Principles"),
        list([
            "Wake up early and maintain regular sleep.",
            "Personal hygiene and oral care.",
            "Exercise according to body type and season.",
            "Eat freshly prepared, suitable food at proper time.",
            "Avoid overeating, suppressed natural urges and excess stress.",
            "Keep a stable daily rhythm.",
        ]),
        heading("Water, Food and Digestion"),
        table(
            ["Factor", "Ayurvedic Guidance"],
            [
                ["Food (Ahara)", "Eat according to Agni (digestive strength), season and dosha"],
                ["Water", "Take as needed; avoid excess cold water during weak digestion"],
                ["Digestion (Agni)", "Strong digestive fire is central to health"],
                ["Incompatible food", "Wrong combinations can create toxins (Ama)"],
            ]
        ),
        note(
            "In Ayurveda, poor digestion is often seen as a root cause of many disorders because undigested material can form Ama (metabolic toxin).",
            "warning",
            "Important"
        ),
        keyPoints([
            "Routine is medicine in Ayurveda.",
            "Digestive strength (Agni) is central.",
            "Food quality, quantity and timing all matter.",
        ]),
    ],
    {
        summary: "Learn Ayurvedic lifestyle management with focus on routine, food, water and digestion.",
        minutes: 11,
        tags: ["dinacharya", "agni", "diet", "lifestyle"],
        mcqs: [
            mcq("Dinacharya means:", ["Seasonal routine", "Daily routine", "Surgical method", "Herbal list"], 1, "Dina = day, charya = routine."),
            mcq("Agni in Ayurveda mainly refers to:", ["Body temperature only", "Digestive/metabolic fire", "Anger", "Exercise"], 1, "Agni is digestive and metabolic power."),
        ],
        questions: [
            qa(
                "Explain lifestyle management in Ayurveda with reference to food and digestion.",
                "Ayurveda manages health through disciplined daily living (Dinacharya), proper diet and strong digestion. Food should match a person's digestive capacity, dosha and season. Eating on time, avoiding overeating, and choosing suitable foods protect Agni (digestive fire). When digestion is weak, Ama can form and lead to disease. Therefore lifestyle guidance includes sleep, exercise, hygiene, mental calmness and correct eating habits together.",
                5
            ),
        ],
    }
);

const gunas = createTopic(
    "satva-rajas-tamas-and-qualities",
    "Satva, Rajas, Tamas and Qualities of a Person",
    [
        definition(
            "Triguna",
            "Satva, Rajas and Tamas are three mental qualities that shape personality, behavior and decision-making."
        ),
        table(
            ["Guna", "Nature", "Healthy Expression", "Excess Effect"],
            [
                ["Satva", "Purity, clarity, balance", "Calmness, wisdom, compassion", "Rarely harmful; supports health"],
                ["Rajas", "Activity, passion, movement", "Motivation, ambition, energy", "Restlessness, anger, stress"],
                ["Tamas", "Inertia, heaviness, stability", "Rest, grounding", "Laziness, ignorance, depression-like dullness"],
            ]
        ),
        text(
            "A balanced person needs all three gunas, but Satva should guide Rajas and Tamas. Ayurveda links mental gunas with lifestyle, food and disease tendency."
        ),
        keyPoints([
            "Satva = clarity; Rajas = activity; Tamas = inertia.",
            "Food and habits influence mental qualities.",
            "Mental balance is part of true health.",
        ]),
    ],
    {
        summary: "Understand Satva, Rajas and Tamas and their role in personality and health.",
        minutes: 9,
        tags: ["satva", "rajas", "tamas", "mind"],
        mcqs: [
            mcq("Which guna represents clarity and calmness?", ["Rajas", "Tamas", "Satva", "Vata"], 2, "Satva is purity and clarity."),
        ],
        questions: [
            qa(
                "Describe Satva, Rajas and Tamas with their effects on a person.",
                "Satva produces clarity, peace, compassion and good judgment. Rajas produces drive, ambition and activity, but in excess causes stress and agitation. Tamas provides rest and stability, but in excess causes dullness, laziness and ignorance. Ayurveda teaches that mental health depends on increasing Satva while keeping Rajas and Tamas under control through diet, routine and ethical living.",
                5
            ),
        ],
    }
);

const pioneers = createTopic(
    "health-care-and-pioneers",
    "Health Care through Ayurveda and Great Contributors",
    [
        heading("Health Care Approach"),
        list([
            "Prevent disease through routine and diet.",
            "Treat root imbalance of doshas.",
            "Use natural methods: herbs, dietetics, purification, rejuvenation.",
            "Personalize care based on Prakriti and condition.",
        ]),
        heading("Important Contributors"),
        table(
            ["Acharya / Text", "Contribution"],
            [
                ["Charaka", "Charaka Samhita; foundation of internal medicine"],
                ["Sushruta", "Sushruta Samhita; major contribution to surgery"],
                ["Vagbhata", "Ashtanga traditions; concise classical compilation"],
                ["Madhav", "Madhava Nidana; classical work on diagnosis/pathology"],
            ]
        ),
        note(
            "For exam, remember at least Charaka, Sushruta, Vagbhata and Madhav with one contribution each.",
            "tip",
            "Exam Tip"
        ),
        keyPoints([
            "Ayurveda emphasizes prevention first.",
            "Charaka, Sushruta, Vagbhata and Madhav are key names.",
            "Treatment is individualized and root-cause oriented.",
        ]),
    ],
    {
        summary: "Review Ayurvedic health-care principles and contributions of major Acharyas.",
        minutes: 10,
        tags: ["charaka", "sushruta", "vagbhata", "madhav", "healthcare"],
        mcqs: [
            mcq("Sushruta is especially associated with:", ["Astronomy", "Surgery", "Grammar", "Music"], 1, "Sushruta Samhita is classical surgical text."),
            mcq("Madhav is known mainly for work on:", ["Surgery tools", "Diagnosis/Nidana", "Temple architecture", "Music theory"], 1, "Madhava Nidana focuses on diagnosis."),
        ],
        questions: [
            qa(
                "Write a short note on the contribution of Charaka and Vagbhata to Ayurveda.",
                "Charaka is associated with Charaka Samhita, a foundational text of internal medicine discussing causes of disease, diagnosis, diet, drugs and ethics of a physician. Vagbhata contributed through classical works in the Ashtanga tradition, presenting Ayurvedic knowledge in a systematic and concise form. Together with other Acharyas, they preserved and organized Ayurveda as a complete health science.",
                5
            ),
        ],
    }
);

export const unit2Topics = [lifestyle, gunas, pioneers];