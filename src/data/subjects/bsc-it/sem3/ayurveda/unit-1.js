/* =========================================================
   B.Sc IT • SEM 3 • IKS: Ayurveda
   UNIT 1 — Fundamentals of Ayurveda, Tridosha & Holistic Care
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

const ayurvedaMeaning = createTopic(
    "ayurveda-meaning-and-origin",
    "Ayurveda: Meaning, Origin and Scope",
    [
        definition(
            "Ayurveda",
            "Ayurveda is the traditional Indian system of medicine. The word comes from 'Ayu' (life) and 'Veda' (knowledge), meaning the science of life. It aims to maintain health and cure disease through balance of body, mind and environment."
        ),
        heading("Origin"),
        list([
            "Ayurveda is considered a sub-system of Atharvaveda and is also linked with the broader Vedic tradition.",
            "It is one of the oldest living medical systems of the world.",
            "It treats health as a holistic state, not only absence of disease.",
        ]),
        heading("Core Aim"),
        table(
            ["Aim", "Meaning"],
            [
                ["Swasthasya Swasthya Rakshanam", "Protect the health of the healthy"],
                ["Aturasya Vikara Prashamanam", "Cure the disease of the sick"],
            ]
        ),
        heading("Charaka Samhita (Main Points)"),
        list([
            "One of the foundational classical texts of Ayurveda.",
            "Focuses strongly on internal medicine (Kayachikitsa).",
            "Discusses causes of disease, diagnosis, diet, lifestyle and treatment principles.",
            "Emphasizes prevention, daily routine and balance of doshas.",
        ]),
        note(
            "Ayurveda is not only medicine for illness. It is a complete lifestyle science covering food, sleep, habits, mind and environment.",
            "tip",
            "Holistic View"
        ),
        keyPoints([
            "Ayurveda = knowledge of life.",
            "Rooted in Vedic tradition, especially Atharvaveda.",
            "Goal: preserve health and treat disease.",
            "Charaka Samhita is a major classical source.",
        ]),
    ],
    {
        summary: "Understand the meaning, origin and scope of Ayurveda as a holistic life science.",
        minutes: 10,
        tags: ["ayurveda", "iks", "charaka", "basics"],
        mcqs: [
            mcq("Ayurveda literally means:", ["Science of herbs", "Science of life", "Science of surgery", "Science of yoga"], 1, "Ayu = life, Veda = knowledge."),
            mcq("Ayurveda is closely associated with which Veda?", ["Rigveda only", "Samaveda only", "Atharvaveda", "None"], 2, "Ayurveda is regarded as a sub-system linked with Atharvaveda."),
        ],
        questions: [
            qa(
                "Define Ayurveda and explain its main aims.",
                "Ayurveda is the traditional Indian science of life, derived from 'Ayu' (life) and 'Veda' (knowledge). Its two main aims are: 1) to protect the health of a healthy person, and 2) to cure disease in a sick person. It is holistic because it considers body, mind, diet, habits and environment together, not only symptoms of disease.",
                5
            ),
        ],
    }
);

const tridosha = createTopic(
    "concept-of-tridosha",
    "Concept of Tridosha and Its Effect on Body",
    [
        definition(
            "Tridosha",
            "Tridosha means the three fundamental bio-energies of the body: Vata, Pitta and Kapha. Health depends on their balance; disease arises from their imbalance."
        ),
        table(
            ["Dosha", "Main Qualities", "Main Functions", "Imbalance Signs (examples)"],
            [
                ["Vata (Vayu)", "Dry, light, cold, mobile", "Movement, nerve impulse, breathing, elimination", "Anxiety, dryness, irregular digestion, joint pain"],
                ["Pitta", "Hot, sharp, liquid", "Digestion, metabolism, body temperature, vision", "Anger, acidity, inflammation, skin rashes"],
                ["Kapha", "Heavy, stable, oily, cold", "Structure, lubrication, immunity, strength", "Laziness, congestion, weight gain, excess mucus"],
            ]
        ),
        heading("Why Tridosha Matters"),
        list([
            "Every person has a unique dosha combination (Prakriti).",
            "Diet, season, age and lifestyle can increase or decrease doshas.",
            "Treatment aims to restore balance, not only suppress symptoms.",
        ]),
        note(
            "Vata, Pitta and Kapha are functional principles, not just physical substances. They explain physiological patterns.",
            "tip",
            "Concept Clarity"
        ),
        keyPoints([
            "Three doshas: Vata, Pitta, Kapha.",
            "Balance = health; imbalance = disease tendency.",
            "Each dosha governs different body-mind functions.",
        ]),
    ],
    {
        summary: "Learn Vata, Pitta and Kapha, their qualities, functions and effects of imbalance.",
        minutes: 12,
        tags: ["tridosha", "vata", "pitta", "kapha", "important"],
        mcqs: [
            mcq("Which dosha mainly controls movement and nervous activity?", ["Pitta", "Kapha", "Vata", "Rajas"], 2, "Vata governs movement."),
            mcq("Acidity and inflammation are commonly linked with aggravated:", ["Vata", "Pitta", "Kapha", "Satva"], 1, "Pitta is hot and sharp."),
        ],
        questions: [
            qa(
                "Explain Tridosha theory with the effect of each dosha on the body.",
                "Tridosha theory states that body functions are governed by Vata, Pitta and Kapha. Vata controls movement, circulation, breathing and elimination. Pitta controls digestion, metabolism and heat. Kapha provides structure, lubrication, stability and immunity. When these three remain in balance, health is maintained. When any dosha increases or decreases excessively, physical and mental disorders appear. Therefore Ayurvedic diagnosis and lifestyle advice often start with understanding dosha imbalance.",
                5
            ),
        ],
    }
);

const holisticCare = createTopic(
    "holistic-and-psychosomatic-health",
    "Holistic Health Care and Psychosomatic Aspects",
    [
        definition(
            "Holistic Health",
            "Holistic health means complete well-being of body, mind, senses and spirit, not merely absence of physical disease."
        ),
        heading("Psychosomatic Link"),
        text(
            "Ayurveda recognizes that mind and body affect each other. Mental stress can disturb digestion and sleep; physical imbalance can disturb emotions. This mind-body relationship is called the psychosomatic aspect of health."
        ),
        heading("Brief on Diagnosis and Treatment"),
        table(
            ["Aspect", "Ayurvedic Approach"],
            [
                ["Diagnosis", "Observation of pulse, tongue, digestion, sleep, lifestyle, dosha state and disease stage"],
                ["Treatment", "Diet (Ahara), lifestyle (Vihara), herbal medicine, purification, daily/seasonal routine"],
                ["Prevention", "Dinacharya (daily routine), Ritucharya (seasonal routine), balanced food and sleep"],
            ]
        ),
        list([
            "Same disease may need different handling for different Prakriti.",
            "Food is considered medicine when used correctly.",
            "Mental qualities (Satva, Rajas, Tamas) also influence health behavior.",
        ]),
        keyPoints([
            "Ayurveda is preventive + curative.",
            "Mind and body are treated together.",
            "Diet and routine are central to care.",
        ]),
    ],
    {
        summary: "Understand Ayurveda as holistic care including mind-body balance, diagnosis and treatment principles.",
        minutes: 10,
        tags: ["holistic", "psychosomatic", "diagnosis", "treatment"],
        mcqs: [
            mcq("Holistic health mainly means:", ["Only medicine", "Only exercise", "Body-mind-life balance", "Only surgery"], 2, "Holistic care includes full life balance."),
        ],
        questions: [
            qa(
                "What is meant by holistic and psychosomatic health care in Ayurveda?",
                "Holistic care means protecting complete health of body, mind and lifestyle. Psychosomatic aspect means mental states and physical states influence each other. Ayurveda therefore uses diet, daily routine, seasonal discipline, herbal support and mental balance together. Diagnosis considers not only symptoms but also dosha state, habits and environment, while treatment aims to restore natural balance.",
                5
            ),
        ],
    }
);

export const unit1Topics = [ayurvedaMeaning, tridosha, holisticCare];