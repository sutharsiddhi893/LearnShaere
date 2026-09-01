/* =========================================================
   BCA • SEM 3 • IKS: Mimansa
   UNIT 2 — Interpretation, Duty and Relevance
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

const rulesOfInterpretation = createTopic(
    "rules-of-vedic-interpretation",
    "Rules of Vedic Interpretation in Mimansa",
    [
        definition(
            "Hermeneutics in Mimansa",
            "Mimansa develops rules to determine the exact meaning of Vedic sentences so that duty can be performed correctly."
        ),
        heading("Important Interpretive Principles"),
        table(
            ["Principle", "Meaning"],
            [
                ["Shruti", "Direct Vedic statement has highest force"],
                ["Lingua / Context", "Meaning depends on surrounding passage and purpose"],
                ["Upakrama-Upasamhara", "Beginning and end of a passage help fix meaning"],
                ["Abhyasa", "Repetition indicates importance"],
                ["Apoorvata", "New/unique injunction has special significance"],
                ["Phala", "Result/fruit mentioned helps understand purpose"],
            ]
        ),
        heading("Injunction vs Explanation"),
        list([
            "Vidhi / Codana: command to act.",
            "Arthavada: praise, explanation or supportive statements.",
            "Mimansa teaches not to confuse explanatory passages with direct commands.",
        ]),
        note(
            "The practical goal of interpretation is right action. Wrong reading of a Vedic sentence can lead to wrong ritual or wrong duty.",
            "warning",
            "Why Rules Matter"
        ),
        keyPoints([
            "Mimansa is a science of interpretation.",
            "Direct injunction is central.",
            "Context and purpose decide meaning.",
        ]),
    ],
    {
        summary: "Learn how Mimansa interprets Vedic texts using systematic rules.",
        minutes: 12,
        tags: ["interpretation", "vidhi", "arthavada", "hermeneutics"],
        mcqs: [
            mcq("Vidhi in Mimansa mainly means:", ["Story", "Injunction/command", "Poem", "Temple rule only"], 1, "Vidhi is a command to act."),
            mcq("Arthavada passages are mainly:", ["Direct commands", "Supportive/explanatory statements", "Mathematical proofs", "Medical formulas"], 1, "Arthavada supports injunctions."),
        ],
        questions: [
            qa(
                "Explain why Mimansa developed rules of interpretation.",
                "Vedic literature contains commands, mantras, explanations and eulogies. To avoid confusion, Mimansa created rules to identify what is obligatory, what is supportive and what a sentence truly means. These rules use context, repetition, novelty, purpose and directness of statement. The aim is correct understanding of dharma and correct performance of duty.",
                5
            ),
        ],
    }
);

const karmaAndDharma = createTopic(
    "karma-dharma-and-obligation",
    "Karma, Dharma and Obligation",
    [
        heading("Types of Actions (basic view)"),
        table(
            ["Type", "Meaning", "Example idea"],
            [
                ["Nitya Karma", "Daily/obligatory duties", "Regular prescribed duties"],
                ["Naimittika Karma", "Occasional duties", "Duties on special occasions"],
                ["Kamya Karma", "Desire-motivated actions", "Actions done for a specific fruit"],
                ["Nishiddha", "Forbidden actions", "Actions to be avoided"],
            ]
        ),
        text(
            "Mimansa emphasizes that dharma is closely tied to prescribed action. Performing obligatory duties and avoiding forbidden acts sustains personal and social order."
        ),
        heading("Ethics of Duty"),
        list([
            "Duty is not based only on personal like/dislike.",
            "Scriptural injunction gives moral direction.",
            "Intention, correctness and method of action matter.",
            "Action is linked with unseen result (apurva) in classical discussions.",
        ]),
        keyPoints([
            "Dharma is action-centred in Purva Mimansa.",
            "Obligatory and forbidden acts structure ethical life.",
            "Right duty sustains order.",
        ]),
    ],
    {
        summary: "Understand Mimansa’s duty-centred ethics through types of karma and obligation.",
        minutes: 11,
        tags: ["karma", "nitya", "naimittika", "dharma", "ethics"],
        mcqs: [
            mcq("Nitya karma means:", ["Forbidden act", "Optional entertainment", "Regular obligatory duty", "Only funeral rite"], 2, "Nitya = regular obligatory duty."),
        ],
        questions: [
            qa(
                "Describe the Mimansa view of duty with reference to types of karma.",
                "Purva Mimansa presents dharma as closely related to prescribed action. Nitya karmas are regular obligatory duties, naimittika karmas are occasion-based duties, kamya karmas are performed for desired results, and nishiddha actions are forbidden. By classifying actions this way, Mimansa provides a practical ethical structure: do what is enjoined, avoid what is prohibited, and understand the purpose of action through Vedic guidance.",
                5
            ),
        ],
    }
);

const modernRelevance = createTopic(
    "relevance-of-mimansa-today",
    "Relevance of Mimansa in Present Times",
    [
        heading("Modern Relevance"),
        list([
            "Teaches careful interpretation of authoritative texts and rules.",
            "Builds discipline of duty, responsibility and ethical action.",
            "Useful in law, ethics, public administration and textual studies.",
            "Encourages logical reading of instructions before acting.",
            "Supports the idea that social order depends on responsible conduct.",
        ]),
        heading("IKS Perspective"),
        text(
            "In Indian Knowledge Systems, Mimansa represents India’s advanced tradition of hermeneutics and duty-based ethics. It shows that ancient India developed not only rituals, but also precise methods of meaning, obligation and moral reasoning."
        ),
        note(
            "Even outside ritual context, Mimansa’s lesson is universal: understand the rule clearly, know your duty, and act responsibly.",
            "tip",
            "Takeaway"
        ),
        keyPoints([
            "Mimansa = duty + interpretation.",
            "Still relevant for ethics and rule-based reasoning.",
            "Important school within IKS.",
        ]),
    ],
    {
        summary: "Connect Mimansa philosophy with modern ethics, responsibility and interpretive thinking.",
        minutes: 8,
        tags: ["relevance", "ethics", "iks", "duty"],
        mcqs: [
            mcq("A modern lesson from Mimansa is:", ["Ignore rules", "Interpret carefully and act responsibly", "Avoid all duties", "Only worship wealth"], 1, "Careful interpretation and responsible duty are key lessons."),
        ],
        questions: [
            qa(
                "Discuss the present-day relevance of Mimansa.",
                "Mimansa remains relevant because it trains precise interpretation of rules and emphasizes responsible duty. In modern life, whether in law, education, administration or professional ethics, one must understand instructions correctly and act with responsibility. Mimansa’s focus on obligation, clarity of meaning and disciplined action makes it a valuable part of Indian Knowledge Systems even today.",
                5
            ),
        ],
    }
);

export const unit2Topics = [
    rulesOfInterpretation,
    karmaAndDharma,
    modernRelevance,
];