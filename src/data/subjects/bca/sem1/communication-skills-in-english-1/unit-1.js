/* =========================================================
   BCA • SEM 1 • Communication Skills in English - I
   UNIT 1 — Reading Skills, Listening and Feedback Skills,
            Forming Words
========================================================= */

import {
  createTopic,
  heading,
  text,
  list,
  table,
  note,
  definition,
  steps,
  keyPoints,
  mcq,
  qa,
} from "../../../../helpers";

/* =========================================================
   TOPIC 1 — Introduction to Communication
========================================================= */

const introductionToCommunication = createTopic(
    "introduction-to-communication",
    "Introduction to Communication",

    [
        definition(
            "Communication",
            "The process of exchanging information, ideas, thoughts and feelings between two or more persons so that the message is understood in the way it was intended."
        ),

        text(
            "The word communication comes from the Latin word communis, which means common. Communication therefore means establishing something in common between the sender and the receiver. It is complete only when the receiver understands the message in the same sense in which the sender meant it."
        ),

        heading("Process of Communication"),

        steps([
            "Sender — the person who has an idea to convey",
            "Encoding — converting the idea into words, symbols or gestures",
            "Message — the actual content that is transmitted",
            "Channel — the medium such as speech, letter, email or telephone",
            "Receiver — the person for whom the message is intended",
            "Decoding — interpreting the message and extracting its meaning",
            "Feedback — the response returned by the receiver to the sender",
        ]),

        note(
            "Communication is a two way process. Without feedback the sender can never be certain that the message has been received and understood correctly.",
            "exam",
            "Frequently Asked"
        ),

        heading("Objectives of Communication"),

        list([
            "To inform others about facts, events and instructions.",
            "To persuade someone to accept an idea or take an action.",
            "To educate and train employees or students.",
            "To motivate and build confidence among team members.",
            "To build relationships and maintain goodwill.",
            "To warn about risks and to give timely instructions.",
        ]),

        heading("Types of Communication"),

        table(
            ["Basis", "Types"],
            [
                ["Medium", "Verbal and Non verbal"],
                ["Direction", "Upward, Downward, Horizontal and Diagonal"],
                ["Formality", "Formal and Informal"],
                ["Number of persons", "Intrapersonal, Interpersonal, Group and Mass"],
            ]
        ),

        heading("Verbal and Non Verbal Communication"),

        table(
            ["Basis", "Verbal", "Non Verbal"],
            [
                ["Meaning", "Uses words spoken or written", "Uses gestures, expressions and posture"],
                ["Forms", "Oral and written", "Body language, tone, appearance"],
                ["Clarity", "Usually precise", "Often open to interpretation"],
                ["Record", "Written form provides a record", "Leaves no record"],
                ["Control", "Easier to control", "Often unconscious"],
            ]
        ),

        heading("Oral versus Written Communication"),

        table(
            ["Basis", "Oral", "Written"],
            [
                ["Speed", "Very fast", "Comparatively slow"],
                ["Feedback", "Immediate", "Delayed"],
                ["Record", "No permanent record", "Permanent record available"],
                ["Cost", "Economical", "More expensive"],
                ["Suitability", "Discussions and meetings", "Contracts and reports"],
                ["Legal validity", "Limited", "Accepted as evidence"],
            ]
        ),

        heading("Formal and Informal Communication"),

        table(
            ["Basis", "Formal", "Informal"],
            [
                ["Path", "Follows the official chain of command", "Flows in any direction"],
                ["Also called", "Official communication", "Grapevine"],
                ["Speed", "Slow", "Very fast"],
                ["Accuracy", "High", "Often distorted"],
                ["Record", "Documented", "Not documented"],
                ["Example", "Circulars and reports", "Casual talk in the canteen"],
            ]
        ),

        heading("Barriers to Communication"),

        table(
            ["Barrier", "Description"],
            [
                ["Physical", "Noise, distance, faulty equipment."],
                ["Language or Semantic", "Difficult words, jargon, poor grammar."],
                ["Psychological", "Anger, stress, fear, prejudice."],
                ["Cultural", "Different customs, beliefs and values."],
                ["Organisational", "Too many levels of hierarchy, unclear rules."],
                ["Perceptual", "Different interpretations of the same message."],
            ]
        ),

        heading("Overcoming Barriers"),

        list([
            "Use simple, clear and familiar language.",
            "Choose the right channel for the message.",
            "Listen actively and encourage feedback.",
            "Avoid making assumptions about the receiver.",
            "Be aware of cultural differences and show respect.",
            "Reduce noise and other physical disturbances.",
        ]),

        heading("The Seven Cs of Effective Communication"),

        table(
            ["Principle", "Meaning"],
            [
                ["Clear", "The message should have a single clear meaning."],
                ["Concise", "Say what is needed in as few words as possible."],
                ["Concrete", "Use specific facts and figures, not vague terms."],
                ["Correct", "Ensure accuracy of facts, grammar and spelling."],
                ["Coherent", "The ideas should be logically connected."],
                ["Complete", "Include all information the receiver needs."],
                ["Courteous", "Be polite and respectful towards the receiver."],
            ]
        ),

        keyPoints([
            "Communication is the exchange of information leading to shared understanding.",
            "The process involves sender, encoding, message, channel, receiver, decoding and feedback.",
            "Communication may be verbal or non verbal, formal or informal.",
            "Barriers may be physical, semantic, psychological, cultural or organisational.",
            "The seven Cs are clear, concise, concrete, correct, coherent, complete and courteous.",
        ]),
    ],

    {
        summary:
            "Understand the meaning, process, types and barriers of communication along with the seven Cs of effectiveness.",
        minutes: 11,
        tags: ["communication", "theory", "important"],

        mcqs: [
            mcq(
                "The word communication is derived from the Latin word:",
                ["Communis", "Communicare", "Common", "Communio"],
                0,
                "It comes from communis which means common."
            ),
            mcq(
                "Converting an idea into words or symbols is called:",
                ["Decoding", "Encoding", "Feedback", "Channel"],
                1,
                "Encoding is the process of converting an idea into a transmittable form."
            ),
            mcq(
                "Which element makes communication a two way process?",
                ["Channel", "Message", "Feedback", "Encoding"],
                2,
                "Feedback returns the response from the receiver to the sender."
            ),
            mcq(
                "Informal communication is also known as:",
                ["Chain", "Grapevine", "Circular", "Memo"],
                1,
                "Informal communication is popularly called the grapevine."
            ),
            mcq(
                "Noise in the surroundings is an example of which barrier?",
                ["Semantic", "Psychological", "Physical", "Cultural"],
                2,
                "Noise is a physical barrier to communication."
            ),
            mcq(
                "Which of the following is NOT one of the seven Cs?",
                ["Clear", "Concise", "Complex", "Courteous"],
                2,
                "The seven Cs require simplicity, not complexity."
            ),
        ],

        questions: [
            qa(
                "Define communication and explain its process.",
                "Communication is the process of exchanging information, ideas and feelings between two or more persons so that the message is understood as intended. The process begins with the sender who has an idea, which is then encoded into words or symbols. The encoded message travels through a channel such as speech or writing to the receiver, who decodes it to extract the meaning. Finally the receiver sends feedback, which confirms whether the message has been understood correctly.",
                5
            ),
            qa(
                "Differentiate between oral and written communication.",
                "Oral communication is very fast and provides immediate feedback, it is economical and suitable for discussions and meetings, but it leaves no permanent record and has limited legal validity. Written communication is comparatively slow and feedback is delayed, and it costs more, but it provides a permanent record, is suitable for contracts and reports, and is accepted as legal evidence.",
                4
            ),
            qa(
                "Explain the barriers to effective communication and how they can be overcome.",
                "Physical barriers include noise, distance and faulty equipment. Semantic or language barriers arise from difficult words and poor grammar. Psychological barriers include anger, stress and prejudice. Cultural barriers arise from differing customs and values, and organisational barriers arise from excessive hierarchy. These can be overcome by using simple language, choosing the right channel, listening actively, encouraging feedback, respecting cultural differences and reducing physical disturbances.",
                5
            ),
            qa(
                "Explain the seven Cs of effective communication.",
                "The message should be clear so that it carries a single meaning, and concise so that it uses as few words as necessary. It should be concrete with specific facts rather than vague statements, and correct in its facts, grammar and spelling. It must be coherent so that the ideas are logically connected, complete so that the receiver has all the information required, and courteous so that it shows respect towards the receiver.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — Reading Skills
========================================================= */

const readingSkills = createTopic(
    "reading-skills",
    "Reading Skills",

    [
        definition(
            "Reading",
            "The process of recognising written words and constructing meaning from a text."
        ),

        text(
            "Reading is a receptive skill, which means the reader receives information rather than producing it. Good reading skills are essential for students because most academic knowledge is acquired through the printed and digital word."
        ),

        heading("Purposes of Reading"),

        list([
            "To gain information and knowledge on a subject.",
            "To follow instructions and complete a task correctly.",
            "To prepare for examinations and assignments.",
            "To keep up with current affairs and developments.",
            "To improve vocabulary, grammar and writing style.",
            "To read for pleasure and relaxation.",
        ]),

        heading("Types of Reading"),

        table(
            ["Type", "Purpose", "Speed"],
            [
                ["Skimming", "To get the general idea of a text quickly.", "Very fast"],
                ["Scanning", "To locate a specific piece of information.", "Very fast"],
                ["Intensive", "To understand every detail thoroughly.", "Slow"],
                ["Extensive", "To read long texts for pleasure or general knowledge.", "Moderate"],
                ["Loud reading", "To read aloud for pronunciation practice.", "Slow"],
                ["Silent reading", "To read for comprehension without speaking.", "Fast"],
            ]
        ),

        heading("Skimming versus Scanning"),

        table(
            ["Basis", "Skimming", "Scanning"],
            [
                ["Purpose", "To grasp the main idea", "To find a specific detail"],
                ["Approach", "Read headings, first and last lines", "Move the eye quickly for a keyword"],
                ["Example", "Deciding whether a book is useful", "Finding a phone number in a directory"],
                ["Coverage", "The whole text superficially", "Only the relevant portion"],
            ]
        ),

        heading("Intensive versus Extensive Reading"),

        table(
            ["Basis", "Intensive Reading", "Extensive Reading"],
            [
                ["Length of text", "Short", "Long"],
                ["Purpose", "Detailed understanding", "General understanding and pleasure"],
                ["Speed", "Slow and careful", "Faster"],
                ["Material", "Textbooks, contracts, technical papers", "Novels, magazines, newspapers"],
                ["Vocabulary", "Every unfamiliar word is looked up", "Meaning is guessed from context"],
            ]
        ),

        heading("The SQ3R Reading Technique"),

        steps([
            "Survey — glance through headings, diagrams and the summary",
            "Question — turn each heading into a question to be answered",
            "Read — read the section carefully to answer those questions",
            "Recite — say the main points aloud or write them in your own words",
            "Review — revise the whole chapter to fix it in memory",
        ]),

        note(
            "SQ3R stands for Survey, Question, Read, Recite and Review. It is one of the most widely recommended techniques for studying textbooks effectively.",
            "tip",
            "Study Technique"
        ),

        heading("Reading Comprehension"),

        definition(
            "Comprehension",
            "The ability to understand, interpret and draw conclusions from what has been read."
        ),

        heading("Levels of Comprehension"),

        table(
            ["Level", "Description"],
            [
                ["Literal", "Understanding what is directly stated in the text."],
                ["Inferential", "Reading between the lines to understand implied meaning."],
                ["Critical", "Judging the accuracy, logic and value of the text."],
                ["Creative", "Applying the ideas of the text to new situations."],
            ]
        ),

        heading("Steps for Answering Comprehension Questions"),

        steps([
            "Read the passage once quickly to get the general sense",
            "Read the questions carefully so you know what to look for",
            "Read the passage again, underlining the relevant portions",
            "Answer in your own words wherever possible",
            "Keep the answers brief and relevant to the question asked",
            "Check the spelling and grammar of your answers",
        ]),

        heading("Common Reading Problems"),

        table(
            ["Problem", "Description", "Remedy"],
            [
                ["Sub vocalisation", "Pronouncing every word mentally", "Practise reading in phrases"],
                ["Regression", "Going back repeatedly to earlier lines", "Use a pointer to guide the eye"],
                ["Narrow eye span", "Reading word by word", "Train the eye to take in groups of words"],
                ["Poor vocabulary", "Frequent unknown words", "Maintain a vocabulary notebook"],
                ["Lack of concentration", "The mind wanders", "Read in a quiet place at fixed times"],
            ]
        ),

        heading("Improving Reading Speed and Skill"),

        list([
            "Read regularly, at least a few pages every day.",
            "Read in meaningful phrases rather than individual words.",
            "Avoid moving the lips or the head while reading.",
            "Build vocabulary by noting and revising new words.",
            "Choose a quiet place with proper lighting.",
            "Vary your reading speed according to the difficulty of the text.",
        ]),

        keyPoints([
            "Reading is a receptive skill used to gain meaning from written text.",
            "Skimming finds the main idea while scanning locates a specific detail.",
            "Intensive reading is slow and detailed; extensive reading is broader and faster.",
            "SQ3R stands for Survey, Question, Read, Recite and Review.",
            "Comprehension has literal, inferential, critical and creative levels.",
        ]),
    ],

    {
        summary:
            "Learn the types of reading, the SQ3R technique, levels of comprehension and ways to improve reading speed.",
        minutes: 10,
        tags: ["reading", "skills", "important"],

        mcqs: [
            mcq(
                "Reading quickly to get the general idea of a text is called:",
                ["Scanning", "Skimming", "Intensive reading", "Loud reading"],
                1,
                "Skimming gives a general overview of the text."
            ),
            mcq(
                "Looking for a telephone number in a directory is an example of:",
                ["Skimming", "Scanning", "Extensive reading", "Critical reading"],
                1,
                "Scanning is used to locate a specific piece of information."
            ),
            mcq(
                "In SQ3R, the letter Q stands for:",
                ["Quick", "Question", "Quote", "Quality"],
                1,
                "The Q in SQ3R stands for Question."
            ),
            mcq(
                "Reading between the lines to understand implied meaning is which level of comprehension?",
                ["Literal", "Inferential", "Critical", "Creative"],
                1,
                "Inferential comprehension deals with implied meaning."
            ),
            mcq(
                "Going back repeatedly to earlier lines while reading is called:",
                ["Regression", "Sub vocalisation", "Fixation", "Skimming"],
                0,
                "Regression is the habit of re reading earlier text unnecessarily."
            ),
            mcq(
                "Which type of reading is best suited to novels and magazines?",
                ["Intensive", "Extensive", "Loud", "Critical"],
                1,
                "Extensive reading covers long texts read for pleasure."
            ),
        ],

        questions: [
            qa(
                "Explain the different types of reading.",
                "Skimming is very fast reading done to grasp the general idea of a text. Scanning is equally fast but is used to locate a specific piece of information such as a date or a name. Intensive reading is slow and careful reading aimed at understanding every detail, and it is used for textbooks and contracts. Extensive reading covers longer texts such as novels and newspapers and is done for general understanding and pleasure. Loud reading is used for pronunciation practice while silent reading is faster and better for comprehension.",
                5
            ),
            qa(
                "Differentiate between skimming and scanning.",
                "Skimming is reading rapidly to obtain the general idea of a passage, and it involves glancing at headings and the first and last lines of paragraphs; an example is deciding whether a book is relevant. Scanning is reading rapidly to locate one specific piece of information, and it involves moving the eyes quickly over the text in search of a keyword; an example is finding a telephone number in a directory. Skimming covers the whole text superficially while scanning covers only the relevant portion.",
                4
            ),
            qa(
                "Explain the SQ3R technique of reading.",
                "SQ3R is a five step study technique. Survey means glancing through the headings, diagrams and summary to get an overview. Question means turning each heading into a question that the reading should answer. Read means reading the section carefully to find those answers. Recite means saying or writing the main points in your own words. Review means revising the entire chapter afterwards so that the material is retained in memory.",
                5
            ),
            qa(
                "What are the common problems in reading and how can they be overcome?",
                "Sub vocalisation is the habit of mentally pronouncing every word, which slows reading, and it is overcome by practising reading in phrases. Regression means repeatedly going back to earlier lines, which can be reduced by using a pointer to guide the eye. A narrow eye span causes word by word reading and is improved by training the eye to take in groups of words. Poor vocabulary is remedied by maintaining a word notebook, and lack of concentration is overcome by reading in a quiet place at fixed times.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — Listening and Feedback Skills
========================================================= */

const listeningSkills = createTopic(
    "listening-and-feedback-skills",
    "Listening and Feedback Skills",

    [
        definition(
            "Listening",
            "The active process of receiving, interpreting, evaluating and responding to spoken messages."
        ),

        text(
            "Listening is the communication skill used most often but taught least. Studies show that a person spends about forty five percent of communication time listening, yet most people remember only about half of what they hear immediately afterwards."
        ),

        heading("Hearing versus Listening"),

        table(
            ["Basis", "Hearing", "Listening"],
            [
                ["Nature", "Physical process", "Mental process"],
                ["Effort", "Involuntary and passive", "Voluntary and active"],
                ["Attention", "Not required", "Essential"],
                ["Understanding", "Not necessary", "The main purpose"],
                ["Skill", "A natural ability", "An acquired skill"],
                ["Example", "Hearing traffic outside", "Listening to a lecture"],
            ]
        ),

        note(
            "Hearing is simply the reception of sound by the ear, whereas listening involves paying attention and making sense of what is heard. Every listener hears, but not every hearer listens.",
            "exam",
            "Frequently Asked"
        ),

        heading("Process of Listening"),

        steps([
            "Receiving — the ear picks up the sound waves",
            "Understanding — the mind decodes the words into meaning",
            "Remembering — the message is stored in memory",
            "Evaluating — the content is judged for accuracy and relevance",
            "Responding — feedback is given through words or gestures",
        ]),

        heading("Types of Listening"),

        table(
            ["Type", "Purpose"],
            [
                ["Discriminative", "Distinguishing between different sounds and tones."],
                ["Comprehensive", "Understanding the content of the message."],
                ["Critical", "Evaluating and judging what is being said."],
                ["Empathetic", "Understanding the feelings of the speaker."],
                ["Appreciative", "Listening for enjoyment such as music."],
                ["Selective", "Paying attention only to parts of interest."],
            ]
        ),

        heading("Active Listening"),

        definition(
            "Active Listening",
            "A technique in which the listener fully concentrates, understands, responds and remembers what the speaker is saying."
        ),

        list([
            "Maintain comfortable eye contact with the speaker.",
            "Avoid interrupting until the speaker has finished.",
            "Nod and use short responses to show attention.",
            "Take brief notes of important points.",
            "Ask relevant questions when the speaker pauses.",
            "Paraphrase the message to confirm your understanding.",
            "Observe the tone and body language, not only the words.",
        ]),

        heading("Barriers to Effective Listening"),

        table(
            ["Barrier", "Description"],
            [
                ["Physical noise", "Sounds in the environment that distract the listener."],
                ["Prejudice", "Deciding in advance that the speaker has nothing useful to say."],
                ["Mental distraction", "Thinking about unrelated matters while listening."],
                ["Information overload", "Too much content delivered too quickly."],
                ["Language difficulty", "Unfamiliar vocabulary or a strong accent."],
                ["Emotional state", "Anger, anxiety or excitement blocking attention."],
                ["Faking attention", "Pretending to listen while the mind is elsewhere."],
            ]
        ),

        heading("Ways to Improve Listening"),

        list(
            [
                "Prepare yourself mentally before an important conversation.",
                "Remove distractions such as the mobile phone.",
                "Focus on the message rather than the appearance of the speaker.",
                "Listen for the main idea instead of every single word.",
                "Do not form your reply while the speaker is still talking.",
                "Summarise mentally at the end of each point.",
                "Practise patience even when you disagree.",
            ],
            true
        ),

        heading("Feedback"),

        definition(
            "Feedback",
            "The response given by the receiver to the sender indicating how the message has been received and understood."
        ),

        heading("Types of Feedback"),

        table(
            ["Type", "Description"],
            [
                ["Positive", "Appreciates and encourages the behaviour."],
                ["Negative", "Points out shortcomings that need correction."],
                ["Constructive", "Highlights weaknesses along with suggestions for improvement."],
                ["Verbal", "Given through spoken or written words."],
                ["Non verbal", "Given through gestures, expressions and posture."],
                ["Immediate", "Given at once, as in face to face conversation."],
                ["Delayed", "Given later, as in a written reply."],
            ]
        ),

        heading("Characteristics of Good Feedback"),

        list([
            "It should be specific rather than general.",
            "It should focus on the behaviour, not on the person.",
            "It should be timely and given as soon as possible.",
            "It should be balanced, mentioning strengths as well as weaknesses.",
            "It should be constructive and offer a way forward.",
            "It should be given privately when it is negative.",
        ]),

        heading("The Sandwich Technique"),

        steps([
            "Begin with genuine appreciation of something done well",
            "State the area that needs improvement with a clear suggestion",
            "Close with encouragement and confidence in the person",
        ]),

        note(
            "Feedback should always describe what was done rather than judge who did it. Saying the report lacked data is constructive; saying you are careless is not.",
            "tip",
            "Best Practice"
        ),

        keyPoints([
            "Hearing is a physical process while listening is an active mental process.",
            "The listening process involves receiving, understanding, remembering, evaluating and responding.",
            "Active listening requires attention, patience and confirmation of understanding.",
            "Feedback completes the communication cycle.",
            "Good feedback is specific, timely, balanced and focused on behaviour.",
        ]),
    ],

    {
        summary:
            "Distinguish hearing from listening, learn active listening techniques and understand how to give effective feedback.",
        minutes: 11,
        tags: ["listening", "feedback", "skills", "important"],

        mcqs: [
            mcq(
                "Hearing is a physical process whereas listening is:",
                ["Also physical", "A mental process", "An involuntary process", "A passive process"],
                1,
                "Listening is an active mental process requiring attention."
            ),
            mcq(
                "Which type of listening is used to understand the feelings of the speaker?",
                ["Critical", "Empathetic", "Appreciative", "Discriminative"],
                1,
                "Empathetic listening focuses on the emotions of the speaker."
            ),
            mcq(
                "Which of the following is NOT a barrier to listening?",
                ["Prejudice", "Noise", "Note taking", "Information overload"],
                2,
                "Note taking actually helps listening rather than hindering it."
            ),
            mcq(
                "Feedback that points out weaknesses along with suggestions is called:",
                ["Positive", "Negative", "Constructive", "Delayed"],
                2,
                "Constructive feedback combines criticism with guidance for improvement."
            ),
            mcq(
                "In the sandwich technique, criticism is placed:",
                ["At the beginning", "In the middle", "At the end", "It is avoided"],
                1,
                "Criticism is placed between two positive statements."
            ),
            mcq(
                "Which is the final step in the listening process?",
                ["Receiving", "Evaluating", "Responding", "Understanding"],
                2,
                "Responding through feedback completes the listening process."
            ),
        ],

        questions: [
            qa(
                "Differentiate between hearing and listening.",
                "Hearing is a physical process in which the ear receives sound waves, and it is involuntary and passive, requiring no attention or understanding. Listening is a mental process in which the listener pays attention, interprets the message and responds to it, and it is voluntary and active. Hearing is a natural ability present from birth whereas listening is a skill that must be learned and practised.",
                4
            ),
            qa(
                "Explain the process of listening.",
                "The process begins with receiving, in which the ear picks up the sound waves. This is followed by understanding, in which the mind decodes the words into meaning. The message is then stored in memory during the remembering stage. In the evaluating stage the listener judges the content for accuracy and relevance. Finally, in the responding stage the listener gives feedback through words or gestures, which completes the cycle.",
                5
            ),
            qa(
                "What is active listening? How can listening skills be improved?",
                "Active listening is a technique in which the listener fully concentrates on, understands, responds to and remembers what the speaker is saying. Listening can be improved by preparing mentally before an important conversation, removing distractions such as the mobile phone, focusing on the message rather than the speaker, listening for the main idea rather than every word, avoiding the temptation to form a reply while the speaker is still talking, and summarising each point mentally.",
                5
            ),
            qa(
                "What is feedback? Explain the characteristics of good feedback.",
                "Feedback is the response given by the receiver to the sender indicating how the message has been received and understood, and it completes the communication cycle. Good feedback is specific rather than general, focuses on the behaviour rather than the person, is given promptly, is balanced by mentioning strengths as well as weaknesses, is constructive by offering a way forward, and is delivered privately when it is negative.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — Forming Words: Prefixes and Suffixes
========================================================= */

const formingWords = createTopic(
    "forming-words-prefixes-and-suffixes",
    "Forming Words: Prefixes and Suffixes",

    [
        definition(
            "Word Formation",
            "The process of creating new words by adding letters to an existing word or by combining words."
        ),

        heading("Parts of a Word"),

        table(
            ["Part", "Meaning", "Example in unhappiness"],
            [
                ["Root", "The base word carrying the core meaning", "happy"],
                ["Prefix", "Letters added before the root", "un"],
                ["Suffix", "Letters added after the root", "ness"],
            ]
        ),

        heading("Prefixes"),

        definition(
            "Prefix",
            "A group of letters added at the beginning of a word to change its meaning."
        ),

        heading("Negative Prefixes"),

        table(
            ["Prefix", "Meaning", "Examples"],
            [
                ["un", "not", "unhappy, unfair, unable"],
                ["in", "not", "incorrect, invisible, inactive"],
                ["im", "not, before m and p", "impossible, impatient, immoral"],
                ["il", "not, before l", "illegal, illogical, illiterate"],
                ["ir", "not, before r", "irregular, irrelevant, irresponsible"],
                ["dis", "opposite of", "disagree, dishonest, disconnect"],
                ["non", "not", "nonsense, nonstop, nonfiction"],
                ["mis", "wrongly", "misunderstand, misuse, misprint"],
            ]
        ),

        note(
            "The choice between in, im, il and ir depends on the first letter of the root word. Use im before m and p, il before l, and ir before r.",
            "tip",
            "Spelling Rule"
        ),

        heading("Other Common Prefixes"),

        table(
            ["Prefix", "Meaning", "Examples"],
            [
                ["re", "again", "rewrite, rebuild, replay"],
                ["pre", "before", "preview, prepaid, predict"],
                ["post", "after", "postgraduate, postpone"],
                ["sub", "under", "submarine, subway, subtitle"],
                ["super", "above", "supervisor, superhuman"],
                ["inter", "between", "international, interact"],
                ["trans", "across", "transfer, transport, translate"],
                ["auto", "self", "automatic, autobiography"],
                ["multi", "many", "multimedia, multipurpose"],
                ["over", "too much", "overload, overtime, overeat"],
                ["under", "too little", "underpaid, underestimate"],
                ["co", "together", "cooperate, coauthor, coexist"],
                ["ex", "former", "ex-employee, ex-president"],
                ["bi", "two", "bicycle, bilingual, bimonthly"],
                ["semi", "half", "semicircle, semifinal"],
            ]
        ),

        heading("Suffixes"),

        definition(
            "Suffix",
            "A group of letters added at the end of a word, usually changing its part of speech."
        ),

        heading("Noun Forming Suffixes"),

        table(
            ["Suffix", "Examples"],
            [
                ["ment", "development, agreement, payment"],
                ["ness", "kindness, happiness, darkness"],
                ["tion or sion", "education, decision, admission"],
                ["ity", "ability, security, activity"],
                ["ance or ence", "performance, difference, importance"],
                ["er or or", "teacher, actor, programmer"],
                ["ist", "scientist, journalist, typist"],
                ["ship", "friendship, leadership, membership"],
                ["hood", "childhood, neighbourhood"],
                ["dom", "freedom, kingdom, wisdom"],
            ]
        ),

        heading("Adjective Forming Suffixes"),

        table(
            ["Suffix", "Meaning", "Examples"],
            [
                ["ful", "full of", "helpful, careful, beautiful"],
                ["less", "without", "careless, hopeless, useless"],
                ["able or ible", "capable of", "readable, visible, flexible"],
                ["ous", "having the quality of", "dangerous, famous, curious"],
                ["ive", "tending to", "creative, active, effective"],
                ["al", "relating to", "national, personal, digital"],
                ["ic", "relating to", "electronic, historic, basic"],
                ["y", "characterised by", "rainy, healthy, noisy"],
            ]
        ),

        heading("Verb and Adverb Forming Suffixes"),

        table(
            ["Suffix", "Forms", "Examples"],
            [
                ["ise or ize", "Verb", "modernise, computerise, realise"],
                ["ify", "Verb", "simplify, classify, notify"],
                ["en", "Verb", "strengthen, widen, darken"],
                ["ate", "Verb", "activate, calculate, motivate"],
                ["ly", "Adverb", "quickly, carefully, easily"],
                ["ward", "Adverb", "forward, backward, upward"],
            ]
        ),

        heading("Word Families"),

        table(
            ["Verb", "Noun", "Adjective", "Adverb"],
            [
                ["succeed", "success", "successful", "successfully"],
                ["create", "creation", "creative", "creatively"],
                ["decide", "decision", "decisive", "decisively"],
                ["inform", "information", "informative", "informatively"],
                ["differ", "difference", "different", "differently"],
                ["compute", "computer", "computational", "computationally"],
            ]
        ),

        heading("Compound Words"),

        definition(
            "Compound Word",
            "A word formed by joining two or more independent words together."
        ),

        table(
            ["Type", "Written As", "Examples"],
            [
                ["Closed", "Joined without a space", "keyboard, software, notebook"],
                ["Hyphenated", "Joined with a hyphen", "well-known, part-time, up-to-date"],
                ["Open", "Written as separate words", "hard disk, high school, post office"],
            ]
        ),

        heading("Other Methods of Word Formation"),

        table(
            ["Method", "Description", "Examples"],
            [
                ["Acronym", "Formed from initial letters, pronounced as a word", "RADAR, LASER, NASA"],
                ["Abbreviation", "Shortened form read letter by letter", "CPU, HTML, USA"],
                ["Clipping", "A longer word shortened", "lab from laboratory, exam from examination"],
                ["Blending", "Two words merged", "smog from smoke and fog, brunch from breakfast and lunch"],
                ["Conversion", "Changing the part of speech without change of form", "email as noun and verb"],
            ]
        ),

        heading("Practice Examples"),

        table(
            ["Root Word", "With Prefix", "With Suffix", "With Both"],
            [
                ["happy", "unhappy", "happiness", "unhappiness"],
                ["use", "misuse", "useful", "misusable"],
                ["comfort", "discomfort", "comfortable", "uncomfortable"],
                ["agree", "disagree", "agreement", "disagreement"],
                ["employ", "unemploy", "employment", "unemployment"],
            ]
        ),

        keyPoints([
            "A prefix is added before a root word and usually changes its meaning.",
            "A suffix is added after a root word and usually changes its part of speech.",
            "Negative prefixes include un, in, im, il, ir, dis, non and mis.",
            "Compound words may be closed, hyphenated or open.",
            "Acronyms are pronounced as words while abbreviations are read letter by letter.",
        ]),
    ],

    {
        summary:
            "Learn how new words are formed using prefixes, suffixes, compounding, acronyms, clipping and blending.",
        minutes: 10,
        tags: ["vocabulary", "grammar", "word-formation", "important"],

        mcqs: [
            mcq(
                "A group of letters added at the beginning of a word is called a:",
                ["Suffix", "Prefix", "Root", "Stem"],
                1,
                "A prefix is attached before the root word."
            ),
            mcq(
                "Which prefix is correct before the word legal?",
                ["un", "im", "il", "ir"],
                2,
                "The prefix il is used before words beginning with the letter l."
            ),
            mcq(
                "The suffix ness usually forms which part of speech?",
                ["Verb", "Noun", "Adjective", "Adverb"],
                1,
                "The suffix ness forms abstract nouns such as kindness."
            ),
            mcq(
                "The word brunch is an example of:",
                ["Clipping", "Blending", "Acronym", "Compounding"],
                1,
                "Brunch is a blend of breakfast and lunch."
            ),
            mcq(
                "RADAR is an example of a:",
                ["Abbreviation", "Acronym", "Blend", "Clipping"],
                1,
                "RADAR is formed from initial letters and is pronounced as a word."
            ),
            mcq(
                "The suffix ly usually forms which part of speech?",
                ["Noun", "Verb", "Adjective", "Adverb"],
                3,
                "The suffix ly generally forms adverbs such as quickly."
            ),
            mcq(
                "Which of the following is a hyphenated compound word?",
                ["keyboard", "well-known", "hard disk", "software"],
                1,
                "Well-known is joined by a hyphen."
            ),
        ],

        questions: [
            qa(
                "What is a prefix? Explain any five negative prefixes with examples.",
                "A prefix is a group of letters added at the beginning of a word to change its meaning. The prefix un means not, as in unhappy. The prefix in also means not, as in incorrect. The prefix im is used before words beginning with m or p, as in impossible. The prefix il is used before words beginning with l, as in illegal. The prefix ir is used before words beginning with r, as in irregular, and dis indicates the opposite, as in disagree.",
                5
            ),
            qa(
                "What is a suffix? Explain the suffixes that form nouns and adjectives.",
                "A suffix is a group of letters added at the end of a word which usually changes its part of speech. Noun forming suffixes include ment as in development, ness as in kindness, tion as in education, ity as in ability and ship as in friendship. Adjective forming suffixes include ful meaning full of as in helpful, less meaning without as in careless, able meaning capable of as in readable, ous as in dangerous and ive as in creative.",
                5
            ),
            qa(
                "What are compound words? Explain their types with examples.",
                "A compound word is formed by joining two or more independent words. Closed compounds are written together without a space, such as keyboard and software. Hyphenated compounds are joined with a hyphen, such as well-known and part-time. Open compounds are written as separate words but function as a single unit, such as hard disk and post office.",
                4
            ),
            qa(
                "Explain acronym, abbreviation, clipping and blending with examples.",
                "An acronym is formed from the initial letters of several words and is pronounced as a single word, such as RADAR and LASER. An abbreviation is also formed from initial letters but is read letter by letter, such as CPU and HTML. Clipping shortens a longer word while keeping its meaning, such as lab from laboratory. Blending merges parts of two words into one, such as smog from smoke and fog.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 5 — Vocabulary Building
========================================================= */

const vocabularyBuilding = createTopic(
    "vocabulary-building",
    "Vocabulary Building",

    [
        text(
            "A strong vocabulary improves reading comprehension, writing quality and confidence in speaking. It is built gradually through regular reading, note keeping and conscious practice."
        ),

        heading("Synonyms"),

        definition("Synonym", "A word having the same or nearly the same meaning as another word."),

        table(
            ["Word", "Synonyms"],
            [
                ["big", "large, huge, enormous, vast"],
                ["happy", "glad, delighted, cheerful, pleased"],
                ["important", "significant, vital, crucial, essential"],
                ["begin", "start, commence, initiate"],
                ["help", "assist, aid, support"],
                ["fast", "quick, rapid, swift, speedy"],
                ["difficult", "hard, tough, complex, challenging"],
                ["clever", "intelligent, smart, brilliant, sharp"],
            ]
        ),

        heading("Antonyms"),

        definition("Antonym", "A word having the opposite meaning to another word."),

        table(
            ["Word", "Antonym", "Word", "Antonym"],
            [
                ["accept", "reject", "ancient", "modern"],
                ["artificial", "natural", "brave", "cowardly"],
                ["create", "destroy", "expand", "contract"],
                ["include", "exclude", "maximum", "minimum"],
                ["permanent", "temporary", "success", "failure"],
                ["victory", "defeat", "wisdom", "folly"],
            ]
        ),

        heading("Homophones"),

        definition(
            "Homophone",
            "Words that sound alike but differ in spelling and meaning."
        ),

        table(
            ["Word Pair", "Meanings"],
            [
                ["accept / except", "to receive / other than"],
                ["affect / effect", "to influence (verb) / result (noun)"],
                ["principal / principle", "head of a college / a rule or belief"],
                ["stationary / stationery", "not moving / writing material"],
                ["their / there / they're", "belonging to them / at that place / they are"],
                ["your / you're", "belonging to you / you are"],
                ["its / it's", "belonging to it / it is"],
                ["weather / whether", "climate / if"],
                ["complement / compliment", "to complete / to praise"],
            ]
        ),

        note(
            "The pairs its and it's, and their and they're, are the most commonly confused words in written English. Remember that an apostrophe here signals a contraction, never possession.",
            "warning",
            "Common Mistake"
        ),

        heading("One Word Substitution"),

        table(
            ["Phrase", "One Word"],
            [
                ["A person who writes computer programs", "Programmer"],
                ["A person who cannot read or write", "Illiterate"],
                ["A person who speaks many languages", "Polyglot"],
                ["A life history written by the person himself", "Autobiography"],
                ["A life history written by someone else", "Biography"],
                ["A remedy for all diseases", "Panacea"],
                ["A speech made without preparation", "Extempore"],
                ["One who loves mankind", "Philanthropist"],
                ["A place where money is coined", "Mint"],
                ["Words written on a tomb", "Epitaph"],
                ["One who is new to a profession", "Novice"],
                ["A government by the people", "Democracy"],
            ]
        ),

        heading("Commonly Confused Words"),

        table(
            ["Pair", "Distinction"],
            [
                ["advice / advise", "advice is a noun, advise is a verb"],
                ["practice / practise", "practice is a noun, practise is a verb"],
                ["lose / loose", "lose means to misplace, loose means not tight"],
                ["among / between", "among for more than two, between for two"],
                ["fewer / less", "fewer for countable, less for uncountable"],
                ["borrow / lend", "borrow is to take, lend is to give"],
                ["beside / besides", "beside means next to, besides means in addition"],
            ]
        ),

        heading("Idioms and Phrases"),

        table(
            ["Idiom", "Meaning"],
            [
                ["A piece of cake", "Something very easy"],
                ["Break the ice", "To start a conversation"],
                ["Burn the midnight oil", "To work late into the night"],
                ["Hit the nail on the head", "To say exactly the right thing"],
                ["In a nutshell", "In brief"],
                ["Once in a blue moon", "Very rarely"],
                ["Pull someone's leg", "To joke with someone"],
                ["Under the weather", "Slightly unwell"],
            ]
        ),

        heading("Technical Vocabulary for Computer Students"),

        table(
            ["Term", "Meaning"],
            [
                ["Algorithm", "A step by step procedure to solve a problem"],
                ["Debug", "To find and remove errors from a program"],
                ["Interface", "The point of interaction between user and system"],
                ["Deploy", "To make software available for use"],
                ["Query", "A request for information from a database"],
                ["Backup", "A duplicate copy kept for safety"],
                ["Bandwidth", "The capacity of a communication channel"],
                ["Encryption", "Converting data into a coded form"],
            ]
        ),

        heading("Ways to Build Vocabulary"),

        list(
            [
                "Read newspapers, magazines and books regularly.",
                "Maintain a notebook of new words with their meanings and a sample sentence.",
                "Learn words in context rather than in isolated lists.",
                "Use a good dictionary and a thesaurus.",
                "Learn common roots, prefixes and suffixes.",
                "Revise the noted words at regular intervals.",
                "Use each new word in speech or writing within a few days.",
            ],
            true
        ),

        keyPoints([
            "Synonyms have similar meanings while antonyms have opposite meanings.",
            "Homophones sound alike but differ in spelling and meaning.",
            "One word substitution replaces a long phrase with a single precise word.",
            "Advice and practice are nouns while advise and practise are verbs.",
            "Vocabulary grows through regular reading, note keeping and active use.",
        ]),
    ],

    {
        summary:
            "Build vocabulary through synonyms, antonyms, homophones, one word substitution and idioms.",
        minutes: 9,
        tags: ["vocabulary", "words", "important"],

        mcqs: [
            mcq(
                "Words with similar meanings are called:",
                ["Antonyms", "Synonyms", "Homophones", "Homographs"],
                1,
                "Synonyms are words with the same or nearly the same meaning."
            ),
            mcq(
                "Which pair are homophones?",
                ["big / large", "accept / except", "hot / cold", "run / ran"],
                1,
                "Accept and except sound similar but have different meanings."
            ),
            mcq(
                "The one word for a life history written by the person himself is:",
                ["Biography", "Autobiography", "Memoir", "Diary"],
                1,
                "An autobiography is written by the subject about himself."
            ),
            mcq(
                "Which is correct?",
                [
                    "Please advice me",
                    "Please advise me",
                    "Please advices me",
                    "Please advising me",
                ],
                1,
                "Advise is the verb; advice is the noun."
            ),
            mcq(
                "The idiom burn the midnight oil means:",
                ["To waste fuel", "To work late at night", "To cause a fire", "To sleep early"],
                1,
                "It means to work or study until late at night."
            ),
            mcq(
                "The antonym of permanent is:",
                ["Constant", "Temporary", "Stable", "Fixed"],
                1,
                "Temporary is the opposite of permanent."
            ),
        ],

        questions: [
            qa(
                "What are synonyms and antonyms? Give five examples of each.",
                "A synonym is a word that has the same or nearly the same meaning as another word, for example big and large, happy and glad, important and vital, begin and start, and help and assist. An antonym is a word with the opposite meaning, for example accept and reject, ancient and modern, create and destroy, permanent and temporary, and success and failure.",
                4
            ),
            qa(
                "What are homophones? Explain any five pairs.",
                "Homophones are words that sound alike but differ in spelling and meaning. The pair accept and except means to receive and other than. The pair affect and effect means to influence and the result. The pair principal and principle means the head of a college and a rule or belief. The pair stationary and stationery means not moving and writing material. The pair its and it's means belonging to it and it is.",
                5
            ),
            qa(
                "Give one word substitution for any five phrases.",
                "A person who cannot read or write is illiterate. A person who speaks many languages is a polyglot. A life history written by the person himself is an autobiography. A speech made without preparation is extempore. One who loves mankind is a philanthropist, and a government by the people is a democracy.",
                5
            ),
            qa(
                "How can vocabulary be improved?",
                "Vocabulary improves through regular reading of newspapers, magazines and books. A notebook should be maintained in which each new word is recorded with its meaning and a sample sentence. Words should be learned in context rather than as isolated lists. A good dictionary and thesaurus should be used, and common roots, prefixes and suffixes should be studied. The noted words must be revised regularly and used in speech or writing within a few days so that they are retained.",
                4
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit1Topics = [
    introductionToCommunication,
    readingSkills,
    listeningSkills,
    formingWords,
    vocabularyBuilding,
];