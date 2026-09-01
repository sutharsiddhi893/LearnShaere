/* =========================================================
   BCA • SEM 3 • IKS: Mimansa
   UNIT 1 — Introduction, Meaning and Core Concepts
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

const meaningOfMimansa = createTopic(
    "meaning-and-scope-of-mimansa",
    "Meaning and Scope of Mimansa",
    [
        definition(
            "Mimansa",
            "Mimansa means deep inquiry, investigation or critical examination. In Indian philosophy, it is the system that interprets Vedic rituals, duties and the meaning of Vedic sentences."
        ),
        heading("Two Branches"),
        table(
            ["Branch", "Also Called", "Focus"],
            [
                ["Purva Mimansa", "Karma Mimansa", "Vedic rituals, duties (dharma), action"],
                ["Uttara Mimansa", "Vedanta", "Knowledge of Brahman and liberation"],
            ]
        ),
        text(
            "In IKS electives, 'Mimansa' usually means Purva Mimansa — the philosophy of Vedic action, ritual order and dharma based on the Veda."
        ),
        heading("Why Mimansa is Important"),
        list([
            "It protects the authority of the Veda as a source of dharma.",
            "It teaches how to interpret Vedic injunctions correctly.",
            "It connects duty (karma) with social and cosmic order.",
            "It develops logical methods of sentence interpretation.",
        ]),
        note(
            "Mimansa is not only ritualism. It is a rigorous system of interpretation, ethics of duty and philosophy of action.",
            "tip",
            "Concept Clarity"
        ),
        keyPoints([
            "Mimansa = inquiry / investigation.",
            "Purva Mimansa focuses on karma and dharma.",
            "Veda is the highest authority for dharma.",
        ]),
    ],
    {
        summary: "Understand the meaning of Mimansa, its two branches and why Purva Mimansa matters in IKS.",
        minutes: 10,
        tags: ["mimansa", "purva-mimansa", "veda", "iks"],
        mcqs: [
            mcq("Mimansa literally means:", ["Worship", "Inquiry/investigation", "Meditation", "Music"], 1, "Mimansa means deep inquiry."),
            mcq("Purva Mimansa mainly deals with:", ["Only astronomy", "Vedic duty and ritual action", "Temple architecture", "Grammar only"], 1, "Purva Mimansa focuses on karma and dharma."),
        ],
        questions: [
            qa(
                "What is Mimansa? Differentiate Purva Mimansa and Uttara Mimansa.",
                "Mimansa means deep investigation. Purva Mimansa (Karma Mimansa) interprets Vedic injunctions related to duties and rituals, taking Veda as the authority for dharma. Uttara Mimansa (Vedanta) focuses on knowledge of Brahman and liberation. Thus Purva Mimansa is action-oriented, while Uttara Mimansa is knowledge-oriented.",
                5
            ),
        ],
    }
);

const foundationalIdeas = createTopic(
    "foundational-ideas-of-purva-mimansa",
    "Foundational Ideas of Purva Mimansa",
    [
        heading("Core Beliefs"),
        list([
            "Veda is eternal and authorless (apaurusheya) in classical Mimansa view.",
            "Dharma is known primarily through Vedic injunctions.",
            "Correct performance of duty maintains order.",
            "Meaning of Vedic sentences must be derived carefully through rules of interpretation.",
        ]),
        heading("Key Terms"),
        table(
            ["Term", "Meaning"],
            [
                ["Dharma", "Duty / righteous action as taught by Veda"],
                ["Karma", "Action, especially ritual and obligatory action"],
                ["Codana", "Vedic injunction that prompts action"],
                ["Arthavada", "Explanatory/eulogistic passages supporting injunctions"],
                ["Mantra", "Vedic sacred utterances used in ritual context"],
            ]
        ),
        heading("Pramanas (Means of Knowledge) in Mimansa"),
        text(
            "Mimansa accepts multiple pramanas, with special emphasis on Shabda (verbal testimony of Veda) for knowing dharma."
        ),
        table(
            ["Pramana", "Role"],
            [
                ["Pratyaksha", "Perception"],
                ["Anumana", "Inference"],
                ["Shabda", "Verbal testimony, especially Veda for dharma"],
                ["Upamana", "Comparison"],
                ["Arthapatti", "Postulation"],
                ["Anupalabdhi", "Non-cognition (in some Mimansa traditions)"],
            ]
        ),
        keyPoints([
            "Dharma is known through Vedic command.",
            "Shabda pramana is central for dharma.",
            "Interpretation rules are essential to avoid wrong ritual meaning.",
        ]),
    ],
    {
        summary: "Learn foundational Mimansa concepts: dharma, karma, Vedic authority and pramanas.",
        minutes: 12,
        tags: ["dharma", "karma", "shabda", "pramana", "important"],
        mcqs: [
            mcq("For knowing dharma, Mimansa gives highest importance to:", ["Only perception", "Only inference", "Shabda (Veda)", "Guesswork"], 2, "Vedic testimony is central for dharma."),
            mcq("Codana means:", ["Story", "Injunction prompting action", "Temple", "Grammar rule only"], 1, "Codana is Vedic injunction."),
        ],
        questions: [
            qa(
                "Explain the importance of Shabda pramana in Purva Mimansa.",
                "Purva Mimansa holds that dharma cannot be fully known by ordinary perception or inference alone, because duty and ritual obligations are revealed through Veda. Therefore Shabda, especially Vedic injunction, is the primary pramana for dharma. Mimansa develops strict methods to interpret these injunctions so that action is performed correctly and meaningfully.",
                5
            ),
        ],
    }
);

const jaiminiAndTexts = createTopic(
    "jaimini-and-mimansa-texts",
    "Jaimini and Important Mimansa Texts",
    [
        definition(
            "Jaimini",
            "Jaimini is the foundational teacher of Purva Mimansa. His Mimansa Sutras systematically discuss dharma, Vedic authority and principles of interpretation."
        ),
        heading("Major Text Tradition"),
        table(
            ["Text / Teacher", "Contribution"],
            [
                ["Jaimini", "Mimansa Sutras — basic aphorisms of Purva Mimansa"],
                ["Shabara", "Major early commentary (Bhashya) on Jaimini"],
                ["Kumarila Bhatta", "Influential Mimansa philosopher; strong defense of Vedic authority"],
                ["Prabhakara", "Another major Mimansa school/interpretation tradition"],
            ]
        ),
        heading("Central Question of Mimansa"),
        text(
            "What is dharma, and how do we correctly understand Vedic statements that prescribe action? Mimansa answers this through linguistic and logical analysis of Vedic texts."
        ),
        keyPoints([
            "Jaimini is the key founder figure of Purva Mimansa.",
            "Commentarial tradition developed detailed interpretation methods.",
            "Mimansa connects language, duty and ritual action.",
        ]),
    ],
    {
        summary: "Know Jaimini, Mimansa Sutras and major teachers in the Mimansa tradition.",
        minutes: 10,
        tags: ["jaimini", "shabara", "kumarila", "texts"],
        mcqs: [
            mcq("Who composed the Mimansa Sutras?", ["Panini", "Jaimini", "Charaka", "Sushruta"], 1, "Jaimini authored Mimansa Sutras."),
        ],
        questions: [
            qa(
                "Write a short note on Jaimini’s contribution to Mimansa.",
                "Jaimini established Purva Mimansa through the Mimansa Sutras. He systematically discussed dharma, the authority of Veda and methods of interpreting Vedic injunctions. Later commentators like Shabara expanded these sutras into a full philosophical and interpretive system. Jaimini’s work made Mimansa a structured school of Indian knowledge focused on duty and correct action.",
                5
            ),
        ],
    }
);

export const unit1Topics = [
    meaningOfMimansa,
    foundationalIdeas,
    jaiminiAndTexts,
];