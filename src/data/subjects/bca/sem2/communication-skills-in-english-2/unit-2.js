/* =========================================================
   BCA � SEM 2 � Communication Skills in English - II
   UNIT 2 � Literature, Public Speaking and Cross Cultural Skills
========================================================= */

import {
  createTopic,
  heading,
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
   TOPIC 1 � Reading Comprehension and Literary Appreciation
========================================================= */

const readingComprehension = createTopic(
    "reading-comprehension-and-literary-appreciation",
    "Reading Comprehension and Literary Appreciation",

    [
        definition(
            "Reading Comprehension",
            "The ability to understand, interpret, evaluate and appreciate a written text, both at the level of literal meaning and at the level of implied meaning, tone and literary devices."
        ),

        heading("Types of Comprehension"),

    list([
        "Literal � understanding what is directly stated.",
        "Inferential � reading between the lines to understand the implied meaning.",
        "Critical � judging the accuracy, logic and value of the text.",
        "Creative � applying the ideas of the text to new situations.",
    ]),


list([
    "Skim the passage first to get the main idea.",
    "Read the questions before reading in detail.",
    "Underline or highlight the parts of the passage that answer the questions.",
    "Rephrase the answers in your own words.",
    "Keep the answers short and focused on the question asked.",
    "Check grammar, spelling and punctuation of your answers.",
]),


table(
    ["Device", "Definition", "Example"],
    [
        ["Simile", "Comparison using like or as", "Brave as a lion"],
        ["Metaphor", "Direct comparison without like or as", "Time is money"],
        ["Personification", "Giving human qualities to non human", "The wind whispered"],
        ["Hyperbole", "Exaggeration for effect", "I have told you a million times"],
        ["Alliteration", "Repetition of initial consonant sound", "Big blue balloon"],
        ["Onomatopoeia", "Word that imitates a sound", "Buzz, hiss, click"],
        ["Irony", "Opposite of what is expected", "A fire station burns down"],
        ["Symbol", "Object that stands for a larger idea", "Dove for peace"],
        ["Imagery", "Vivid description using the senses", "The crimson sun dipped below the cold sea"],
        ["Tone", "The writer's attitude toward the subject", "Formal, ironic, sad, hopeful"],
    ]
),

    note(
        "When asked to identify a literary device in an exam, look for the keyword. 'Like' or 'as' means simile. A direct comparison is metaphor. A sound word is onomatopoeia. Opposite of expected is irony. The writer's attitude is tone.",
        "exam",
        "Frequently Asked"
    ),


list([
    "Simile � as brave as a lion.",
    "Metaphor � the world is a stage.",
    "Personification � the leaves danced in the wind.",
    "Hyperbole � my bag weighs a ton.",
    "Oxymoron � a deafening silence.",
    "Pun � a play on words with two meanings.",
    "Antithesis � the best of times, the worst of times.",
    "Euphemism � passed away for died.",
]),


steps([
    "Read the poem twice, aloud if possible.",
    "Identify the speaker, audience and setting.",
    "Note the main theme or message.",
    "Identify the literary devices used.",
    "Comment on the tone and the mood.",
    "Discuss the effect of the poem on the reader.",
]),


list([
    "Identify the narrator: first person, third person limited or omniscient.",
    "Summarise the plot in two or three sentences.",
    "Identify the main characters and their roles.",
    "Identify the conflict and how it is resolved.",
    "Identify the theme or message.",
    "Comment on the setting, the title and the point of view.",
]),

    keyPoints([
        "Literal comprehension asks what is stated.",
        "Inferential comprehension reads between the lines.",
        "Literary devices add colour and depth to writing.",
        "Always identify the speaker, theme and tone in a poem.",
        "Always identify the conflict and theme in a short story.",
        ]),
    ],

    {
        summary:
    "Master reading comprehension, literary devices, and how to analyse a poem and a short story.",
        minutes: 11,
            tags: ["comprehension", "literary-devices", "poem", "important"],

                mcqs: [
                    mcq(
                        "'Brave as a lion' is an example of:",
                        ["Metaphor", "Simile", "Hyperbole", "Personification"],
                        1,
                        "Simile uses 'like' or 'as' to compare."
                    ),
                    mcq(
                        "'The wind whispered' is:",
                        ["Simile", "Metaphor", "Personification", "Hyperbole"],
                        2,
                        "Personification gives human actions to non human things."
                    ),
                    mcq(
                        "Onomatopoeia is:",
                        ["A comparison", "A word that sounds like what it means", "A symbol", "A type of rhyme"],
                        1,
                        "Onomatopoeia imitates sounds, like buzz or hiss."
                    ),
                    mcq(
                        "A story's main message is called:",
                        ["Plot", "Theme", "Setting", "Character"],
                        1,
                        "The theme is the central idea or message of the story."
                    ),
                    mcq(
                        "An oxymoron combines:",
                        ["Two similar ideas", "Two opposite ideas", "Two rhyming words", "Two metaphors"],
                        1,
                        "An oxymoron is a phrase with two contradictory words."
                    ),
                    mcq(
                        "First person narrator uses:",
                        ["He / She", "I / We", "They", "It"],
                        1,
                        "First person uses I or we."
                    ),
                ],

                    questions: [
                        qa(
                            "Differentiate between simile and metaphor.",
                            "A simile is a comparison between two different things using the words 'like' or 'as', such as 'brave as a lion' or 'sleek like a cat'. A metaphor is a direct comparison that says one thing is another, without using 'like' or 'as', such as 'time is money' or 'the world is a stage'. Both are used to make writing vivid, but the metaphor is stronger because it states the equality rather than just the similarity.",
                            4
                        ),
                        qa(
                            "Explain the levels of comprehension with examples.",
                            "The four levels are literal, inferential, critical and creative. Literal comprehension asks what the text directly says, for example, 'What is the name of the main character?' Inferential comprehension reads between the lines, for example, 'Why did the character leave home?' Critical comprehension judges the text, for example, 'Is the argument convincing?' Creative comprehension applies the ideas to a new situation, for example, 'How would the story end if it were set in modern times?' Strong readers move easily between these levels.",
                            4
                        ),
                        qa(
                            "Explain any five literary devices with examples.",
                            "Simile compares two things using like or as: 'as brave as a lion'. Metaphor states that one thing is another: 'time is money'. Personification gives human qualities to non human things: 'the wind whispered'. Hyperbole is a deliberate exaggeration: 'I have told you a million times'. Onomatopoeia is a word that imitates a sound: 'buzz', 'hiss', 'click'. Alliteration is the repetition of an initial consonant sound: 'big blue balloon'. These devices add colour, rhythm and depth to writing.",
                            4
                        ),
                        qa(
                            "How do you analyse a short story?",
                            "To analyse a short story, first identify the point of view, whether it is first person or third person, and the narrator's attitude. Summarise the plot in a few sentences. Identify the main characters and their roles, the setting, the conflict that drives the story and how it is resolved. Look for the theme, the central message that the author is trying to convey. Finally comment on the title, the literary devices used and the overall effect on the reader.",
                            4
                        ),
                    ],
  }
);

/* =========================================================
   TOPIC 2 � Public Speaking and Oral Presentation
========================================================= */

const publicSpeaking = createTopic(
    "public-speaking-and-oral-presentation",
    "Public Speaking and Oral Presentation",

    [
        definition(
            "Public Speaking",
            "The act of delivering a speech to a live audience with the purpose of informing, persuading or entertaining, in a structured and engaging manner."
        ),


    table(
        ["Type", "Purpose"],
        [
            ["Informative", "Explain a topic, give facts, no personal opinion"],
            ["Persuasive", "Convince the audience to accept a viewpoint"],
            ["Entertaining", "Make the audience laugh and enjoy"],
            ["Ceremonial", "Mark a special occasion such as a farewell or welcome"],
            ["Demonstrative", "Show how to do something step by step"],
            ["Oratorical", "Deliver a famous speech such as a commencement address"],
        ]
    ),


table(
    ["Section", "Share", "Purpose"],
    [
        ["Strong opening", "10%", "Hook, greet, state topic"],
        ["Body", "80%", "Main points with evidence and examples"],
        ["Memorable close", "10%", "Summarise, inspire, call to action"],
    ]
),


table(
    ["P", "Meaning", "Key Question"],
    [
        ["Plan", "Decide the purpose, audience and key message", "What do I want the audience to remember?"],
        ["Prepare", "Research and gather evidence", "Do I have facts, examples and stories?"],
        ["Practise", "Rehearse aloud and time the speech", "Have I rehearsed at least three times?"],
        ["Present", "Deliver with confidence and engagement", "Am I making eye contact and varying my voice?"],
    ]
),


list([
    "Prepare thoroughly � confidence comes from being well prepared.",
    "Rehearse aloud several times, in front of a mirror or a friend.",
    "Breathe deeply and slowly before going on stage.",
    "Begin with a sentence you have memorised perfectly.",
    "Look at friendly faces in the audience first.",
    "Use simple, slow gestures and a relaxed posture.",
    "Accept that mild nervousness is normal and even useful.",
]),

    note(
        "Even experienced speakers feel nervous before a talk. The trick is to convert nervous energy into positive energy by focusing on the message, not on yourself.",
        "tip",
        "Channel the Energy"
    ),


table(
    ["Element", "Effect", "Tip"],
    [
        ["Volume", "Audibility", "Loud enough for the back row"],
        ["Pitch", "Interest", "Vary high and low tones"],
        ["Pace", "Clarity", "Slow down for important points"],
        ["Pause", "Emphasis", "Pause after a strong point"],
        ["Tone", "Emotion", "Match tone to the message"],
        ["Stress", "Focus", "Stress key words"],
    ]
),


list([
    "Stand tall, feet shoulder width apart, weight balanced.",
    "Keep hands relaxed at the sides; use open gestures to emphasise points.",
    "Make eye contact with different sections of the audience.",
    "Avoid pacing, rocking or playing with a pen.",
    "Use slides to support, not replace, the speech.",
    "Slides should be simple, with one idea per slide and large font.",
]),


code(
    `"Good morning, everyone. My name is Amit and I am a
student of BCA. Today I want to share a small story that
changed the way I think about failure.

A few years ago, I failed my mathematics exam. I was
ashamed and wanted to give up. But my grandfather told me:
'Failure is not the opposite of success; it is part of
success.'

That sentence stayed with me. Let me explain why..."
`,
    "text",
    "Story style opening"
),

    keyPoints([
        "Plan, prepare, practise, present � the four Ps.",
        "Body should take about 80% of the time.",
        "Use voice modulation to keep the audience engaged.",
        "Eye contact, posture and gestures make up 55% of impact.",
        "Slides support the speaker, not the other way round.",
        ]),
    ],

    {
        summary:
    "Master public speaking, the 4 Ps, voice modulation, body language, dealing with stage fear and slide design.",
        minutes: 10,
            tags: ["public-speaking", "presentation", "voice", "important"],

                mcqs: [
                    mcq(
                        "The body of a speech should take about:",
                        ["10%", "50%", "80%", "100%"],
                        2,
                        "Body takes about 80% of the speech time."
                    ),
                    mcq(
                        "The 4 Ps of preparation are:",
                        ["Plan, Prepare, Practise, Present", "Plan, Pause, Pray, Present", "Plan, Practise, Present, Perform", "Plan, Perform, Publish, Present"],
                        0,
                        "Plan, Prepare, Practise, Present are the four Ps."
                    ),
                    mcq(
                        "A strong opening should:",
                        ["Apologise", "Tell a joke always", "Hook the audience", "Be very long"],
                        2,
                        "An opening should hook the audience with a question, story or fact."
                    ),
                    mcq(
                        "Mild nervousness before speaking is:",
                        ["Abnormal", "Normal", "Embarrassing", "Punishable"],
                        1,
                        "Mild nervousness is normal and can improve performance."
                    ),
                    mcq(
                        "A slide should have:",
                        ["Many ideas", "One idea and large font", "No font", "Only pictures"],
                        1,
                        "One idea per slide with large font is best."
                    ),
                    mcq(
                        "Eye contact should be:",
                        ["Only with the evaluator", "Only with the front row", "Across the audience", "Avoided"],
                        2,
                        "Make eye contact across the whole audience."
                    ),
                ],

                    questions: [
                        qa(
                            "Explain the 4 Ps of public speaking.",
                            "The 4 Ps are Plan, Prepare, Practise and Present. In the Plan stage you decide the purpose, the audience and the single message you want them to remember. In the Prepare stage you research the topic, gather facts and stories, and design simple slides. In the Practise stage you rehearse aloud, time the speech and get feedback. In the Present stage you deliver the speech with confidence, eye contact and good voice modulation. Following the 4 Ps removes most of the anxiety and makes the delivery smooth.",
                            4
                        ),
                        qa(
                            "Explain voice modulation and its elements.",
                            "Voice modulation is the variation of the voice to keep the audience engaged and to emphasise meaning. It includes volume, the loudness of the voice, which should be enough for the back row. Pitch is the highness or lowness of the voice, which should be varied. Pace is the speed of speaking, which should be slowed for important points. Pause is a deliberate silence that adds weight to what was just said. Tone is the emotion in the voice and should match the message. Stress is the emphasis on key words.",
                            4
                        ),
                        qa(
                            "How do you deal with stage fear?",
                            "Stage fear is reduced mainly by preparation and rehearsal. Knowing the material well removes the main source of anxiety. Rehearsing aloud several times, ideally in front of a friend, makes the delivery familiar. Slow deep breathing before going on stage calms the body. Starting with a memorised opening sentence provides a safe beginning. Looking at friendly faces in the audience builds confidence. Most importantly, focus on the message and the audience, not on yourself. Mild nervousness is normal and can actually make the speaker more alert and energetic.",
                            4
                        ),
                        qa(
                            "What is the structure of a good speech?",
                            "A good speech has three main parts. The opening, which takes about 10% of the time, hooks the audience with a question, a story or a striking fact, greets the audience, and states the topic and the main message. The body, which takes about 80% of the time, presents the main points in a logical order, each supported by evidence, examples and short stories. The conclusion, which takes about 10% of the time, summarises the main points, restates the message and ends with a memorable idea or a call to action. Transitions between parts are smooth.",
                            4
                        ),
                    ],
  }
);

/* =========================================================
   TOPIC 3 � Cross Cultural Communication
========================================================= */

const crossCultural = createTopic(
    "cross-cultural-communication",
    "Cross Cultural Communication",

    [
        definition(
            "Cross Cultural Communication",
            "The process of exchanging information between people from different cultural backgrounds, where culture includes language, values, beliefs, customs and communication styles."
        ),


    list([
        "Global workplaces have teams from many countries.",
        "Misunderstandings can lead to lost business or hurt feelings.",
        "Respecting differences builds strong professional relationships.",
        "Multicultural teams are more creative and innovative.",
        "Awareness of culture helps in travel, study and work abroad.",
    ]),

        heading("Dimensions of Culture (Hofstede)"),

table(
    ["Dimension", "What It Measures", "Two Ends"],
    [
        ["Power distance", "Acceptance of unequal power", "High vs Low"],
        ["Individualism", "Focus on self vs group", "Individualist vs Collectivist"],
        ["Masculinity", "Achievement vs care", "Masculine vs Feminine"],
        ["Uncertainty avoidance", "Comfort with ambiguity", "High vs Low"],
        ["Long term orientation", "Future focus vs tradition", "Long term vs Short term"],
        ["Indulgence", "Freedom vs restraint", "Indulgence vs Restraint"],
    ]
),


table(
    ["High Context", "Low Context"],
    [
        ["Meaning in context and relationship", "Meaning in explicit words"],
        ["Indirect communication", "Direct communication"],
        ["Few written rules", "Many written rules"],
        ["Strong group loyalty", "Individual achievement valued"],
        ["Examples: Japan, Arab countries", "Examples: USA, Germany, Scandinavia"],
    ]
),


table(
    ["Style", "Description", "Example Cultures"],
    [
        ["Direct", "Says exactly what is meant", "Germany, USA, Netherlands"],
        ["Indirect", "Suggests rather than states", "Japan, India, UK"],
        ["Elaborate", "Uses rich, expressive language", "Arab, Latin American"],
        ["Succinct", "Uses few, restrained words", "Japan, China, Germany"],
        ["Affective", "Emotion and feeling in speech", "Italy, Mexico"],
        ["Neutral", "Emotion controlled in speech", "Japan, UK"],
    ]
),


list([
    "Assuming your own style is the only right one.",
    "Judging silence as agreement or disagreement � silence means different things in different cultures.",
    "Using humor that may not translate or may offend.",
    "Misreading eye contact: in some cultures, direct eye contact is rude.",
    "Ignoring differences in time orientation: monochronic vs polychronic.",
    "Misinterpreting gestures: a thumbs up is positive in some places and offensive in others.",
]),

    note(
        "When communicating across cultures, be clear, patient and respectful. Avoid idioms and slang that may not translate. Listen more than you speak. Ask for clarification rather than guess. Watch the other person's body language and adapt to it.",
        "tip",
        "Be Curious"
    ),


list([
    "Monochronic cultures value schedules, punctuality and doing one thing at a time: Germany, USA, Japan.",
    "Polychronic cultures value relationships and are comfortable with multiple things happening at once: India, Brazil, Arab countries.",
    "Mixing the two can cause friction; respect the host culture's time style.",
]),


list([
    "Learn a few words of the other person's language.",
    "Be aware of your own cultural biases and assumptions.",
    "Listen actively and paraphrase what the other person said.",
    "Avoid jargon, slang and idioms.",
    "Use clear, simple English and speak a little slower.",
    "Be patient with differences in pace and style.",
    "Show genuine interest in the other person's culture.",
]),

    keyPoints([
        "Culture shapes how we speak, listen and interpret.",
        "High context cultures read between the lines; low context say it directly.",
        "Power distance and individualism are major cultural dimensions.",
        "Avoid idioms, slang and assumptions.",
        "Listen, observe and ask for clarification.",
        ]),
    ],

    {
        summary:
    "Master cross cultural communication, cultural dimensions, communication styles, time orientation and common mistakes.",
        minutes: 10,
            tags: ["cross-cultural", "communication", "culture", "important"],

                mcqs: [
                    mcq(
                        "Hofstede's dimensions include:",
                        ["Power distance", "Gravity", "Height", "Speed"],
                        0,
                        "Power distance is one of Hofstede's cultural dimensions."
                    ),
                    mcq(
                        "High context cultures rely on:",
                        ["Explicit words", "Context and relationship", "Long emails", "Bullet points"],
                        1,
                        "High context cultures read meaning from context and relationship."
                    ),
                    mcq(
                        "Germany is generally:",
                        ["High context", "Low context", "Polychronic only", "Indirect"],
                        1,
                        "Germany is a low context, direct communication culture."
                    ),
                    mcq(
                        "Polychronic cultures value:",
                        ["Strict schedules", "Multiple things at once", "Punctuality", "Time as money"],
                        1,
                        "Polychronic cultures are comfortable with many things happening together."
                    ),
                    mcq(
                        "A thumbs up is:",
                        ["Always positive", "Always negative", "Positive in some and offensive in other cultures", "Same everywhere"],
                        2,
                        "A thumbs up is positive in many places but offensive in some others."
                    ),
                    mcq(
                        "Avoiding cross cultural mistakes includes:",
                        ["Using idioms", "Speaking quickly", "Asking for clarification", "Judging silence"],
                        2,
                        "Always ask for clarification rather than guess the meaning."
                    ),
                ],

                    questions: [
                        qa(
                            "Differentiate between high context and low context cultures.",
                            "High context cultures rely on the surrounding context, relationships, tone and body language to convey meaning. Communication is indirect and few things are written down. Japan, Arab countries and India are examples. Low context cultures rely on explicit, written words; meaning is in the message itself. Communication is direct and many rules are written. USA, Germany and Scandinavia are examples. In a high context meeting, silence and a nod can mean agreement, while in a low context meeting the same silence can mean confusion or disagreement. Recognising the difference prevents misunderstanding.",
                            4
                        ),
                        qa(
                            "Explain Hofstede's cultural dimensions.",
                            "Geert Hofstede identified six dimensions to compare cultures. Power distance measures how much a society accepts unequal distribution of power. Individualism measures focus on the individual versus the group. Masculinity measures preference for achievement and assertiveness versus care and quality of life. Uncertainty avoidance measures how comfortable a society is with ambiguity and risk. Long term orientation measures focus on the future versus respect for tradition. Indulgence measures the freedom to enjoy life versus restraint. These dimensions help predict how people from different cultures will behave at work and in communication.",
                            4
                        ),
                        qa(
                            "What are common cross cultural communication mistakes?",
                            "Common mistakes include assuming one's own communication style is universal, misreading silence as agreement or disagreement, using humour that may not translate, ignoring differences in eye contact, misinterpreting gestures such as thumbs up or hand signs, and ignoring differences in time orientation. Each of these can cause misunderstanding or offence in cross cultural settings. The remedy is awareness, patience and a willingness to ask for clarification rather than guess.",
                            4
                        ),
                        qa(
                            "Write tips for effective cross cultural communication.",
                            "Effective cross cultural communication starts with awareness of one's own cultural assumptions. Learn a few words of the other person's language. Use clear, simple English and avoid idioms and slang. Listen actively and paraphrase to confirm understanding. Watch the other person's body language and adapt your style. Be patient with differences in pace and time orientation. Show genuine curiosity and respect for the other culture, and ask questions when in doubt rather than guess.",
                            4
                        ),
                    ],
  }
);

/* =========================================================
   TOPIC 4 � Professional Etiquette and Email Writing
========================================================= */

const professionalEtiquette = createTopic(
    "professional-etiquette-and-email-writing",
    "Professional Etiquette and Email Writing",

    [
        definition(
            "Etiquette",
            "The customary code of polite behaviour in society or among members of a particular profession. Professional etiquette covers behaviour at work, in meetings, on phone and in written communication."
        ),


    list([
        "Be punctual: arrive on time for meetings and appointments.",
        "Dress appropriately for the workplace culture.",
        "Greet colleagues and visitors warmly.",
        "Listen attentively and avoid interrupting.",
        "Use polite language: please, thank you, may I, would you.",
        "Keep your workspace clean and respect shared spaces.",
        "Respect differences of opinion and avoid gossip.",
        "Use technology appropriately: keep phone on silent, limit personal use.",
    ]),


list([
    "Come prepared: read the agenda and bring relevant documents.",
    "Arrive on time, ideally a few minutes early.",
    "Silence your phone and avoid checking it during the meeting.",
    "Listen to others before speaking.",
    "Stay on topic and keep contributions relevant.",
    "Take brief notes without hiding behind the laptop.",
    "Respect the chair and the time allotted for each item.",
    "Follow up on action items assigned to you.",
]),


list([
    "Answer within three rings and identify yourself and your organisation.",
    "Speak clearly and at a moderate pace.",
    "Listen without interrupting; use the caller's name.",
    "Take notes of important points and action items.",
    "End the call with a summary and a friendly close.",
    "Let the caller hang up first as a courtesy.",
    "Return missed calls within the same business day.",
]),


list([
    "Use a professional email address, not a nickname.",
    "Write a clear and specific subject line.",
    "Greet the recipient appropriately: Dear Sir or Dear Ms Sharma.",
    "Keep the message short, focused and well structured.",
    "Use short paragraphs and a blank line between them.",
    "Avoid writing in capital letters, which is read as shouting.",
    "Check spelling and grammar before sending.",
    "Attach the file before writing the message so you do not forget.",
    "Reply within 24 hours to official emails.",
    "Use Bcc when sending to many recipients to protect their privacy.",
]),

    note(
        "An email is a permanent record. Once sent, it cannot be taken back. Pause for a moment before clicking Send, especially for sensitive messages. Re read, then send.",
        "warning",
        "Permanent Record"
    ),


code(
    `To      : principal@institute.edu
Cc      : hod.bca@institute.edu
Subject : Request for one day leave on 25 August 2025

Dear Sir,

I am Amit Patel, a student of BCA Sem 2, roll number 101.
I would like to request leave for one day on 25 August
2025 because I have to attend a family function.

I have completed the assignment due that day and will
catch up on any missed work on my return.

I would be grateful for your kind approval.

Thank you.

Yours sincerely,
Amit Patel
Roll No 101
`,
    "text",
    "Sample email"
),


list([
    "Test your camera, microphone and internet before the call.",
    "Join from a quiet place with good lighting on your face.",
    "Dress appropriately, even from the waist up.",
    "Mute yourself when not speaking to avoid background noise.",
    "Look at the camera to simulate eye contact.",
    "Raise your hand or use the chat to indicate you want to speak.",
    "Avoid multitasking: do not check email during the call.",
]),


list([
    "Do not post anything you would not say in person.",
    "Respect confidentiality of your employer and clients.",
    "Be kind and constructive; avoid online arguments.",
    "Use privacy settings to control who sees your posts.",
    "Think before you post � the internet never forgets.",
    "Do not mix personal and professional accounts carelessly.",
]),

    keyPoints([
        "Punctuality, politeness and respect are the foundations.",
        "Keep emails short, with a clear subject and proper greeting.",
        "Reply within 24 hours to professional emails.",
        "Match your tone to the channel: email, phone, in person, social media.",
        "Pause before sending anything you may regret later.",
        ]),
    ],

    {
        summary:
    "Master workplace, meeting, telephone, email, video call and social media etiquette with a sample professional email.",
        minutes: 10,
            tags: ["etiquette", "email", "professional", "important"],

                mcqs: [
                    mcq(
                        "Writing in capital letters in an email is read as:",
                        ["Polite", "Emphasis", "Shouting", "Formal"],
                        2,
                        "Capitals in email are read as shouting."
                    ),
                    mcq(
                        "Bcc is used to:",
                        ["Show all recipients", "Hide recipients from each other", "Add an attachment", "Reply to all"],
                        1,
                        "Bcc hides recipient addresses from one another."
                    ),
                    mcq(
                        "On a video call you should:",
                        ["Check email", "Look at the camera", "Use a fancy background", "Eat"],
                        1,
                        "Look at the camera to simulate eye contact."
                    ),
                    mcq(
                        "A polite salutation for an email to a known person is:",
                        ["Hey", "Dear Mr Sharma", "Yo", "Hi there"],
                        1,
                        "Use the formal salutation with the name and title."
                    ),
                    mcq(
                        "Professional emails should be replied within:",
                        ["An hour", "24 hours", "A week", "Never"],
                        1,
                        "Reply to professional emails within 24 hours."
                    ),
                    mcq(
                        "Meeting etiquette includes:",
                        ["Checking the phone", "Arriving on time", "Interrupting", "Gossiping"],
                        1,
                        "Arrive on time and stay attentive during meetings."
                    ),
                ],

                    questions: [
                        qa(
                            "Explain the rules of email etiquette.",
                            "An email should carry a clear and specific subject line and be sent from a professional address. Greet the recipient appropriately and keep the message short and focused on one topic. Use short paragraphs separated by blank lines, and avoid writing in capital letters which is read as shouting. Check spelling and grammar before sending. Attach the file before writing the message so it is not forgotten, and reply to official emails within 24 hours. Use Bcc when sending to many recipients to protect their privacy.",
                            4
                        ),
                        qa(
                            "Differentiate between meeting etiquette and telephone etiquette.",
                            "Meeting etiquette covers behaviour in a face to face or video meeting: arrive on time, read the agenda in advance, silence the phone, listen to others, stay on topic and follow up on action items. Telephone etiquette covers behaviour on a voice call: answer within three rings, identify yourself and your organisation, speak clearly, listen without interrupting, take notes, end with a summary and let the caller hang up first. Both require punctuality, politeness and active listening, but the medium changes the specific rules.",
                            4
                        ),
                        qa(
                            "Write a sample email requesting leave for two days.",
                            "Subject: Request for two days leave from 25 to 26 August 2025. Dear Sir, I am a student of BCA Sem 2, roll number 101. I would like to request leave for two days on 25 and 26 August 2025 because I have a family wedding to attend out of station. I will complete all pending assignments before leaving and will catch up on any missed work on my return. Kindly grant me the leave. Thank you. Yours sincerely, Amit Patel, Roll No 101.",
                            4
                        ),
                        qa(
                            "Why is professional etiquette important?",
                            "Professional etiquette is important because it builds trust, respect and cooperation in the workplace. People who are punctual, polite and well mannered are easier to work with, are given more responsibility and grow faster in their careers. Good etiquette in meetings, on phone, in email and on social media prevents misunderstandings and protects the reputation of both the individual and the organisation. In a global and diverse work environment, etiquette is the glue that holds teams together.",
                            4
                        ),
                    ],
  }
);

/* =========================================================
   TOPIC 5 � Conflict Management and Emotional Intelligence
========================================================= */

const conflictEI = createTopic(
    "conflict-management-and-emotional-intelligence",
    "Conflict Management and Emotional Intelligence",

    [
        definition(
            "Conflict",
            "A serious disagreement or argument between two or more people with incompatible goals, values, interests or perceptions."
        ),

        definition(
            "Emotional Intelligence",
            "The ability to recognise, understand, manage and use one's own emotions and the emotions of others to communicate effectively, reduce stress, empathise and overcome challenges."
        ),


    list([
        "Differences in goals, values or beliefs.",
        "Poor communication and misunderstanding.",
        "Scarce resources such as time, money or attention.",
        "Personality clashes and different working styles.",
        "Unclear roles, responsibilities or expectations.",
        "Change, stress and pressure at work.",
    ]),


table(
    ["Style", "Description", "When to Use"],
    [
        ["Competing", "Win at all costs, assertive and uncooperative", "Emergencies, defending important rights"],
        ["Collaborating", "Win win, assertive and cooperative", "Complex issues, need commitment from all"],
        ["Compromising", "Both give up something, moderate", "Time pressure, equal power"],
        ["Avoiding", "Withdraw or postpone", "Trivial issues, cooling off"],
        ["Accommodating", "Yield to the other, cooperative", "When the issue matters more to the other"],
    ]
),


steps([
    "Stay calm and do not react in anger.",
    "Listen to the other person's point of view without interrupting.",
    "Acknowledge their feelings and show empathy.",
    "State your own point of view clearly and respectfully.",
    "Identify the real issue, not the surface complaint.",
    "Brainstorm solutions together and pick the best one.",
    "Agree on a plan, action and timeline.",
    "Follow up to ensure the agreement is working.",
]),

    note(
        "Most conflicts are not about the obvious issue. They are usually about feelings, respect, fairness or trust. Address the real issue and the conflict often melts away.",
        "tip",
        "Real Issue"
    ),


table(
    ["Component", "Description"],
    [
        ["Self awareness", "Recognise your own emotions as they happen"],
        ["Self regulation", "Manage your emotions, especially negative ones"],
        ["Motivation", "Use emotions to achieve goals, not to give up"],
        ["Empathy", "Understand and share the feelings of others"],
        ["Social skills", "Manage relationships, communicate, lead, cooperate"],
    ]
),


list([
    "Keep a journal of your emotional reactions for a week.",
    "Notice what triggers your anger, joy, fear or sadness.",
    "Ask for honest feedback from people you trust.",
    "Take a personality test such as MBTI to understand your style.",
    "Practice mindfulness: pause and observe your thoughts without judgment.",
]),


list([
    "Listen fully without preparing your reply.",
    "Put yourself in the other person's shoes.",
    "Acknowledge their feelings: 'I can see this is hard for you'.",
    "Ask questions to understand, not to judge.",
    "Avoid the words 'but' and 'should' which often dismiss feelings.",
]),


list([
    "Plan your day and prioritise important tasks.",
    "Take short breaks every hour to refresh.",
    "Use time management: Pomodoro, time blocking, to do lists.",
    "Exercise, sleep well and eat on time.",
    "Talk to a friend, mentor or counsellor if you feel overwhelmed.",
    "Say no politely to tasks that are not your responsibility.",
]),


list([
    "Use I statements: 'I feel X when Y happens because Z'.",
    "Avoid blaming: 'You always ...' sounds like an attack.",
    "Stay on the present issue, do not bring up old grievances.",
    "Watch your tone, facial expression and body language.",
    "Look for common ground and shared goals.",
]),

    keyPoints([
        "Conflict is normal and can be resolved with the right approach.",
        "Listen first, then speak. Empathy is the strongest tool.",
        "Emotional intelligence has five components: awareness, regulation, motivation, empathy and social skills.",
        "I statements express feelings without blaming.",
        "Manage stress with planning, breaks, sleep and exercise.",
        ]),
    ],

    {
        summary:
    "Master conflict resolution, the five styles of conflict management, emotional intelligence, empathy and stress management.",
        minutes: 10,
            tags: ["conflict", "EI", "emotional-intelligence", "important"],

                mcqs: [
                    mcq(
                        "I statement is used to:",
                        ["Blame the other", "Express feelings without blaming", "Win the argument", "End the conversation"],
                        1,
                        "I statements express feelings and needs without blaming."
                    ),
                    mcq(
                        "Win win conflict style is:",
                        ["Competing", "Avoiding", "Collaborating", "Accommodating"],
                        2,
                        "Collaborating seeks a win win outcome for both."
                    ),
                    mcq(
                        "Empathy means:",
                        ["Agreeing with everyone", "Understanding the other person's feelings", "Winning arguments", "Being shy"],
                        1,
                        "Empathy is understanding and sharing the feelings of others."
                    ),
                    mcq(
                        "First step in conflict resolution is:",
                        ["Argue back", "Stay calm and listen", "Walk away", "Call a lawyer"],
                        1,
                        "Stay calm and listen to the other person's view first."
                    ),
                    mcq(
                        "Emotional intelligence has how many components?",
                        ["3", "4", "5", "6"],
                        2,
                        "There are five components of emotional intelligence."
                    ),
                    mcq(
                        "Avoiding is best for:",
                        ["Emergencies", "Trivial issues", "Big decisions", "Family matters"],
                        1,
                        "Avoiding is best for trivial or temporary issues."
                    ),
                ],

                    questions: [
                        qa(
                            "Explain the five styles of conflict resolution.",
                            "The five styles are competing, collaborating, compromising, avoiding and accommodating. Competing is assertive and uncooperative, used for emergencies or when defending an important right. Collaborating is assertive and cooperative, used to find a win win solution. Compromising is moderately assertive and cooperative, used when time is short and both sides need to give something up. Avoiding is unassertive and uncooperative, used for trivial issues or to cool off. Accommodating is cooperative and unassertive, used when the issue matters more to the other person. The best leaders choose the style that fits the situation.",
                            4
                        ),
                        qa(
                            "Explain the components of emotional intelligence.",
                            "Emotional intelligence, or EI, has five components. Self awareness is the ability to recognise your own emotions as they happen. Self regulation is the ability to manage your emotions, especially the negative ones like anger and fear. Motivation is the ability to use emotions to achieve goals and to keep going despite setbacks. Empathy is the ability to understand and share the feelings of others. Social skills are the ability to manage relationships, communicate clearly, lead, resolve conflicts and cooperate. Together they form a powerful predictor of success in life and at work.",
                            4
                        ),
                        qa(
                            "Differentiate between I statement and You statement.",
                            "A You statement blames the other person and usually makes them defensive. For example, 'You never listen to me.' An I statement expresses the speaker's own feelings and needs, which is harder to argue with. For example, 'I feel unheard when I am interrupted.' The I statement takes responsibility for the feeling and invites the other to understand and respond, while the You statement invites a counter attack. In conflict, I statements are a much more effective way to communicate.",
                            4
                        ),
                        qa(
                            "How can you manage stress at work?",
                            "Stress at work can be managed by planning the day and prioritising the most important tasks. Take short breaks every hour, even a five minute walk, to refresh the mind. Use time management techniques like the Pomodoro method or to do lists. Take care of the body with regular exercise, good sleep and timely meals. Talk to a friend, mentor or counsellor if the pressure becomes too much. Learn to say no politely to requests that are not your responsibility. A calm routine is the best defence against burnout.",
                            4
                        ),
                    ],
  }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit2Topics = [
    readingComprehension,
    publicSpeaking,
    crossCultural,
    professionalEtiquette,
    conflictEI,
];


