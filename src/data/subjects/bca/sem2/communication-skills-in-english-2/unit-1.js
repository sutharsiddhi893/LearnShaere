/* =========================================================
   BCA � SEM 2 � Communication Skills in English - II
   UNIT 1 � Advanced Writing Skills and Professional Communication
========================================================= */

import {
  createTopic,
  heading,
  list,
  code,
  table,
  note,
  definition,
  keyPoints,
  mcq,
  qa,
} from "../../../../helpers";

/* =========================================================
   TOPIC 1 � Advanced Writing Techniques
========================================================= */

const advancedWriting = createTopic(
    "advanced-writing-techniques",
    "Advanced Writing Techniques",

    [
        definition(
            "Advanced Writing",
            "Writing that goes beyond basic sentences to use precise vocabulary, varied sentence structure, effective paragraphing and a clear, confident style suitable for academic, professional and creative purposes."
        ),

        heading("The Four Types of Writing"),

        table(
            ["Type", "Purpose", "Example"],
            [
                ["Expository", "Explain or inform", "Textbook, article, report"],
                ["Persuasive", "Convince the reader", "Editorial, advertisement, essay"],
                ["Descriptive", "Paint a picture with words", "Travel writing, poetry"],
                ["Narrative", "Tell a story with events", "Novel, biography, anecdote"],
            ]
        ),

        heading("Sentence Variety"),

        list([
            "Simple sentence � one independent clause: The sun rose.",
            "Compound sentence � two independent clauses joined by and, but, or, so: The sun rose and the birds sang.",
            "Complex sentence � independent clause with a dependent clause: When the sun rose, the birds began to sing.",
            "Compound complex � two independent clauses and at least one dependent clause: When the sun rose, the birds began to sing, and the world felt new.",
        ]),

        heading("Paragraph Structure"),

        table(
            ["Part", "Purpose", "Length"],
            [
                ["Topic sentence", "States the main idea", "First sentence usually"],
                ["Supporting sentences", "Explain with facts, examples, reasons", "Majority of paragraph"],
                ["Concluding sentence", "Summarise or link to next paragraph", "Last sentence"],
            ]
        ),

        heading("Unity, Coherence and Emphasis"),

        list([
            "Unity � every sentence supports the main idea.",
            "Coherence � ideas flow logically with clear connections.",
            "Emphasis � important ideas are highlighted by position, repetition or strong words.",
        ]),

        heading("Cohesive Devices"),

    table(
        ["Purpose", "Examples"],
        [
            ["Addition", "and, also, moreover, furthermore, in addition"],
            ["Contrast", "but, however, on the other hand, nevertheless, although"],
            ["Cause and effect", "because, since, therefore, consequently, as a result"],
            ["Time", "first, then, next, finally, meanwhile, subsequently"],
            ["Example", "for example, for instance, such as, namely"],
            ["Conclusion", "in conclusion, to sum up, therefore, thus"],
        ]
    ),

        heading("Active and Passive Voice"),

code(
    `Active   : The team built the website in two weeks.
Passive  : The website was built by the team in two weeks.

Active voice is usually clearer and stronger.
Passive voice is useful when the action is more
important than the doer, or when the doer is unknown.
`,
    "text",
    "Active vs passive"
),


list([
    "Avoid wordy phrases: due to the fact that ? because.",
    "Use strong verbs: make a decision ? decide.",
    "Cut unnecessary adjectives and adverbs.",
    "Replace long noun phrases with verbs.",
]),


table(
    ["Register", "Use", "Example"],
    [
        ["Formal", "Academic, professional, official", "It is recommended that..."],
        ["Neutral", "Most business, general writing", "We recommend that..."],
        ["Informal", "Friends, casual email, chat", "Why don't we try..."],
    ]
),

    note(
        "Choose the register based on audience and purpose. A cover letter is formal, a chat with a colleague is informal, and a school essay is neutral. Mixing registers usually sounds careless.",
        "tip",
        "Right Register"
    ),


list([
    "Subject verb agreement: He go ? He goes.",
    "Pronoun reference: Each student must bring their book ? bring his or her book (or rewrite to plural).",
    "Dangling modifier: Running quickly, the bus was missed ? As I ran quickly, I missed the bus.",
    "Comma splice: I love coffee, it is hot ? I love coffee; it is hot.",
    "Run on: She is smart she works hard ? She is smart; she works hard.",
]),

    keyPoints([
        "Vary sentence length to create rhythm.",
        "Every paragraph has a topic sentence, support and a close.",
        "Use cohesive devices to link ideas.",
        "Prefer active voice for clarity.",
        "Choose the right register for the audience.",
    ]),
  ],

        {
            summary:
                "Master sentence variety, paragraph structure, cohesive devices, voice, conciseness, register and common errors.",
            minutes: 11,
            tags: ["writing", "paragraph", "register", "important"],

            mcqs: [
                mcq(
                    "A paragraph should have:",
                    ["Many topics", "One main idea", "No conclusion", "All short sentences"],
                    1,
                    "A paragraph has unity, so all sentences support one main idea."
                ),
                mcq(
                    "Which is a compound sentence?",
                    ["The sun rose.", "The sun rose and the birds sang.", "When the sun rose, birds sang.", "Sun rising is a thing."],
                    1,
                    "A compound has two independent clauses joined by a conjunction."
                ),
                mcq(
                    "Active voice emphasises:",
                    ["The receiver", "The action and doer", "The verb to be", "A preposition"],
                    1,
                    "Active voice keeps the doer and action prominent."
                ),
                mcq(
                    "Which word signals contrast?",
                    ["Moreover", "Because", "However", "Finally"],
                    2,
                    "However introduces a contrasting idea."
                ),
                mcq(
                    "Comma splice means:",
                    ["Using too many commas", "Joining two sentences with a comma", "Missing a comma", "Ending with a comma"],
                    1,
                    "Two independent clauses joined only by a comma form a comma splice."
                ),
                mcq(
                    "Which is most formal?",
                    ["Hi there", "What's up", "Dear Sir or Madam", "Hey"],
                    2,
                    "Dear Sir or Madam is the standard formal salutation."
                ),
            ],

            questions: [
                qa(
                    "Explain the four types of writing.",
                    "The four main types of writing are expository, persuasive, descriptive and narrative. Expository writing explains or informs, as in textbooks and reports. Persuasive writing tries to convince the reader to accept an idea or take an action, as in editorials and advertisements. Descriptive writing paints a vivid picture using sensory details, as in travel writing and poetry. Narrative writing tells a connected series of events, as in novels and biographies. Most pieces of writing combine more than one type, but the dominant purpose decides the type.",
                    4
                ),
                qa(
                    "Differentiate between active and passive voice.",
                    "In the active voice the subject performs the action of the verb, such as 'The chef cooked the meal.' In the passive voice the subject is acted upon, such as 'The meal was cooked by the chef.' Active voice is usually clearer, stronger and more direct, and is preferred in most writing. Passive voice is useful when the action or the result is more important than the doer, such as in scientific reports where the experiment matters more than the scientist, or when the doer is unknown.",
                    4
                ),
                qa(
                    "Explain unity and coherence in a paragraph.",
                    "Unity means that all sentences in a paragraph support a single main idea, which is usually stated in the topic sentence. Coherence means that the sentences are logically connected and flow smoothly from one to the next. Unity is achieved by removing any sentence that does not support the main idea. Coherence is achieved by using a clear order such as time, space or importance, by repeating key words, and by using cohesive devices such as 'however', 'therefore' and 'for example' to show the relationship between ideas.",
                    4
                ),
                qa(
                    "What is the correct register for an email to a teacher?",
                    "An email to a teacher is semi formal. The greeting should be polite, such as 'Dear Sir' or 'Dear Madam' or the teacher's name with 'Mr' or 'Ms'. The body should be clear and concise, with no slang, abbreviations or emoticons. The closing should be respectful, such as 'Yours sincerely' or 'Best regards', followed by the full name. The tone should be helpful and respectful, neither too stiff nor too casual.",
                    3
                ),
            ],
        }
    );

/* =========================================================
   TOPIC 2 � Essay and Article Writing
========================================================= */

const essayArticle = createTopic(
    "essay-and-article-writing",
    "Essay and Article Writing",

    [
        definition(
            "Essay",
            "A short piece of writing on a particular subject, usually expressing the writer's personal view in an organised and logical way."
        ),

        definition(
            "Article",
            "A piece of writing published in a newspaper, magazine or website that informs or entertains readers on a topic of current interest."
        ),

        heading("Types of Essays"),

        table(
            ["Type", "Purpose"],
            [
                ["Narrative", "Tells a story"],
                ["Descriptive", "Describes a person, place or thing"],
                ["Expository", "Explains a concept or process"],
                ["Persuasive / Argumentative", "Argues a point of view"],
                ["Compare and contrast", "Shows similarities and differences"],
                ["Cause and effect", "Analyses reasons and results"],
            ]
        ),


    table(
        ["Section", "Purpose"],
        [
            ["Introduction", "Catches attention, gives background, ends with thesis"],
            ["Body", "Develops the argument in several paragraphs"],
            ["Conclusion", "Restates thesis, summarises, gives a final thought"],
        ]
    ),

        code(
            `Title: The Value of Reading

Introduction
  Hook: A reader lives a thousand lives before he dies.
  Background: Reading is one of the oldest skills.
  Thesis: Reading expands the mind and shapes character.

Body 1: Knowledge � every book is a new world.
Body 2: Imagination � stories make us creators.
Body 3: Empathy � fiction lets us walk in another's shoes.

Conclusion
  Restate: Reading is the most powerful tool we have.
  Closing thought: The man who never reads lives only one life.
`,
            "text",
            "Sample essay outline"
        ),


list([
    "Begin with a hook: question, quote, surprising fact or short story.",
    "Provide a few sentences of background.",
    "End with a clear thesis statement that tells the reader what the essay will argue.",
]),


list([
    "Restate the thesis in fresh words.",
    "Summarise the main points briefly.",
    "End with a memorable idea, a call to action or a forward look.",
    "Do not introduce new information in the conclusion.",
]),


code(
    `Title: How Small Habits Build Big Futures

By [Author]

[Lead: a striking opening that pulls the reader in.]

[Body paragraphs that develop the idea, give examples and
quote experts or statistics.]

[Conclusion that leaves the reader with a clear takeaway.]
`,
    "text",
    "Article template"
),


list([
    "A catchy headline that makes the reader curious.",
    "A lead (first paragraph) that hooks attention.",
    "Short paragraphs with clear subheads.",
    "Use of facts, examples and quotes.",
    "A clear point of view and a logical flow.",
    "Written in a style suited to the publication.",
]),

    note(
        "A news article answers Who, What, When, Where, Why and How in the opening paragraph (the 5 Ws and H). A feature article can take more time to build up to the main point and uses a more colourful style.",
        "tip",
        "5 Ws and H"
    ),


list([
    "A short, focused opinion piece sent to a newspaper.",
    "Begins with To The Editor, gives the writer's name and city.",
    "Mentions the article or issue being responded to.",
    "States the opinion clearly in 3 to 5 short paragraphs.",
    "Ends with the writer's full name and contact details.",
]),

    keyPoints([
        "An essay has a clear introduction, body and conclusion.",
        "A thesis statement is the main argument of the essay.",
        "An article needs a catchy headline and a strong lead.",
        "A letter to the editor is short and focused on one issue.",
        "Always match tone and style to the publication and audience.",
        ]),
    ],

    {
        summary:
    "Master essay and article writing, including structure, introductions, conclusions and letters to the editor.",
        minutes: 10,
            tags: ["essay", "article", "writing", "important"],

                mcqs: [
                    mcq(
                        "An essay usually ends with a:",
                        ["Hook", "Body", "Conclusion", "Title"],
                        2,
                        "An essay ends with a conclusion that wraps up the argument."
                    ),
                    mcq(
                        "The thesis statement appears in:",
                        ["Title", "Introduction", "Body", "Bibliography"],
                        1,
                        "The thesis is the last sentence of the introduction."
                    ),
                    mcq(
                        "A news article answers:",
                        ["5 Ws and H", "Only who and what", "Only when", "No questions"],
                        0,
                        "The 5 Ws and H (Who, What, When, Where, Why, How) belong in the lead."
                    ),
                    mcq(
                        "Letter to the editor begins with:",
                        ["Dear Sir", "To The Editor", "Respected Sir", "Hello"],
                        1,
                        "'To The Editor' is the standard opening."
                    ),
                    mcq(
                        "Which is NOT a type of essay?",
                        ["Narrative", "Descriptive", "Persuasive", "Aerodynamic"],
                        3,
                        "Aerodynamic is not an essay type."
                    ),
                    mcq(
                        "A good headline should be:",
                        ["Boring", "Catchy", "Long", "Personal"],
                        1,
                        "A good headline is catchy and makes the reader curious."
                    ),
                ],

                    questions: [
                        qa(
                            "Explain the structure of an essay.",
                            "An essay has three main parts. The introduction catches the reader's attention with a hook, gives a little background and ends with a thesis statement that states the main argument. The body is divided into several paragraphs, each developing one main point with examples, evidence and explanations. Transitions connect the paragraphs so the argument flows smoothly. The conclusion restates the thesis in fresh words, summarises the main points and ends with a memorable thought. No new information should appear in the conclusion.",
                            4
                        ),
                        qa(
                            "Differentiate between an essay and an article.",
                            "An essay is a personal piece of writing on a topic, usually for academic purposes, with a clear thesis and a formal style. An article is a piece of writing published in a newspaper, magazine or website, often for a general audience, and may be informative, opinion based or entertaining. An article has a catchy headline and a strong lead, while an essay usually begins directly with the topic. Both can express an opinion, but an article is shorter and more direct.",
                            4
                        ),
                        qa(
                            "Write a sample outline for an essay on the importance of time management.",
                            "Introduction: hook with a famous quote on time; thesis that time management is the key to success in college and career. Body 1: reduces stress by giving control over tasks. Body 2: improves academic performance because students meet deadlines. Body 3: builds a habit of discipline that helps in the workplace. Conclusion: restate the thesis; end with a call to start managing time today.",
                            3
                        ),
                        qa(
                            "What are the features of a good article?",
                            "A good article has a catchy headline that makes the reader want to know more, a strong lead that hooks attention in the first two sentences, short paragraphs with subheadings for easy reading, and facts, examples and quotes to support the points. It is written in a style suited to the publication, has a clear point of view and a logical flow, and ends with a clear takeaway for the reader.",
                            4
                        ),
                    ],
  }
);

/* =========================================================
   TOPIC 3 � Report and Proposal Writing
========================================================= */

const reportProposal = createTopic(
    "report-and-proposal-writing",
    "Report and Proposal Writing",

    [
        definition(
            "Report",
            "A structured, factual document that presents information, analysis and recommendations on a specific topic for a defined audience, usually in a professional or academic context."
        ),

        definition(
            "Proposal",
            "A document that suggests a plan, project or research and asks for approval, funding or cooperation. It describes what will be done, why, how, by whom and at what cost."
        ),


    table(
        ["Section", "Purpose"],
        [
            ["Title page", "Title, author, date and organisation"],
            ["Acknowledgement", "Thanks to those who helped"],
            ["Table of contents", "List of sections with page numbers"],
            ["Abstract / Executive summary", "Short overview of the report"],
            ["Introduction", "Background, purpose and scope"],
            ["Methodology", "How the information was gathered"],
            ["Findings", "The data and observations"],
            ["Discussion", "Interpretation of the findings"],
            ["Conclusion", "The main inferences"],
            ["Recommendations", "Suggested actions"],
            ["References", "Sources cited"],
            ["Appendices", "Supporting material"],
        ]
    ),


code(
    `Report on the Industrial Visit to Infosys, Pune

Submitted by: Amit Patel, BCA Sem 2
Date: 18 August 2025

1. Introduction
   The students of BCA Sem 2 visited the Infosys
   campus at Pune on 12 August 2025 to learn about
   software development practices in industry.

2. Objective
   To understand the software development life cycle
   and to relate classroom learning to industry practice.

3. Observations
   The company follows the Agile methodology. Each
   project is divided into short sprints of two weeks.
   The quality team tests every module before release.

4. Conclusion
   The visit helped the students understand how
   classroom concepts are applied in the real world.

5. Recommendations
   Such visits should be organised at least twice a year.
`,
    "text",
    "Sample report"
),


list([
    "Factual and based on evidence, not opinion.",
    "Clear, simple and concise language.",
    "Well organised under proper headings.",
    "Objective and free from personal bias.",
    "Reaches definite conclusions and recommendations.",
    "Reaches the right audience at the right time.",
]),


table(
    ["Section", "Purpose"],
    [
        ["Title", "Short and specific"],
        ["Introduction", "Background and context"],
        ["Problem statement", "What issue is being addressed"],
        ["Objectives", "What the project will achieve"],
        ["Methodology", "How the work will be carried out"],
        ["Timeline", "Phases and deadlines"],
        ["Budget", "Estimated cost"],
        ["Expected outcomes", "What will be delivered"],
        ["Conclusion", "Restate the need and ask for approval"],
    ]
),


code(
    `Proposal to Organise a One Day Workshop on Python

Submitted by: BCA Department
Date: 20 August 2025

1. Introduction
   The BCA Department proposes a one day workshop on
   Python programming for second year students.

2. Objectives
   To introduce students to Python syntax, data
   structures and simple projects.

3. Methodology
   The workshop will have four sessions of two hours
   each, with hands on coding exercises after every
   session.

4. Budget
   Trainer fee        : Rs 8,000
   Refreshments       : Rs 4,000
   Materials and kits : Rs 3,000
   Total              : Rs 15,000

5. Expected Outcome
   Students will be able to write small Python programs
   and will be ready for further study.
`,
    "text",
    "Sample proposal"
),

    note(
        "A report answers 'what happened and what does it mean'. A proposal answers 'what we plan to do, why and how'. Both must be precise, well structured and tailored to the audience.",
        "tip",
        "Report vs Proposal"
    ),


list([
    "A short record of what was discussed and decided in a meeting.",
    "Heading: title of meeting, date, time, venue, attendees.",
    "Agenda items with the discussion and decision for each.",
    "Action items with the owner and the deadline.",
    "Closing time, signature of the chairperson and the secretary.",
]),

    keyPoints([
        "A report is factual and structured into standard sections.",
        "A proposal suggests a plan and asks for approval.",
        "Use headings, numbered sections and a clear table of contents.",
        "Match the language to the audience: formal for management, technical for engineers.",
        "Always check facts, numbers and names before submitting.",
        ]),
    ],

    {
        summary:
    "Master report and proposal writing, including structure, sample extracts, characteristics of a good report and minutes of a meeting.",
        minutes: 11,
            tags: ["report", "proposal", "writing", "important"],

                mcqs: [
                    mcq(
                        "A report begins with:",
                        ["Body", "Title page", "References", "Conclusion"],
                        1,
                        "The title page is the first part of a formal report."
                    ),
                    mcq(
                        "The section that lists sources is:",
                        ["Index", "References", "Appendix", "Glossary"],
                        1,
                        "References list all the sources cited in the report."
                    ),
                    mcq(
                        "A proposal asks for:",
                        ["Approval", "Salary", "Resignation", "Punishment"],
                        0,
                        "A proposal asks for approval, funding or cooperation."
                    ),
                    mcq(
                        "Methodology describes:",
                        ["Cost", "How the work was done", "Conclusions", "References"],
                        1,
                        "Methodology describes how information was collected or how work was done."
                    ),
                    mcq(
                        "Minutes of meeting record:",
                        ["Future plans", "Discussions and decisions", "Attendance only", "Salaries"],
                        1,
                        "Minutes record what was discussed and decided."
                    ),
                    mcq(
                        "A good report is:",
                        ["Subjective", "Factual", "Long", "Personal"],
                        1,
                        "Reports are factual and based on evidence."
                    ),
                ],

                    questions: [
                        qa(
                            "Explain the structure of a formal report.",
                            "A formal report has a clear and standard structure. The title page gives the title, author, date and organisation. The acknowledgement thanks those who helped. The table of contents lists all sections with page numbers. The abstract gives a brief overview. The introduction gives the background, purpose and scope. The methodology explains how the information was gathered. The findings present the data, and the discussion interprets them. The conclusion states the main inferences, and the recommendations suggest future actions. The references list all sources, and the appendices contain any supporting material such as questionnaires and raw data.",
                            4
                        ),
                        qa(
                            "Differentiate between a report and a proposal.",
                            "A report is a structured document that records what has already happened and presents the findings, analysis and recommendations. It is usually written after the work is done. A proposal is a forward looking document that describes a planned project and asks for approval, funding or cooperation. It explains what will be done, why, how, by whom, when and at what cost. Reports are factual and neutral, while proposals are persuasive and must convince the reader that the project is worth supporting.",
                            4
                        ),
                        qa(
                            "Write a short proposal to conduct a blood donation camp in your college.",
                            "Title: Proposal to Organise a Blood Donation Camp. Introduction: The NSS Unit proposes a one day blood donation camp in collaboration with the local government hospital. Objective: to collect 100 units of blood and create awareness about voluntary donation. Methodology: posters, social media, registration desk, doctor and nurses from the hospital, certificates for donors. Budget: Rs 5,000 for refreshments, Rs 3,000 for certificates and Rs 2,000 for printing. Expected outcome: blood for the hospital bank and increased awareness. Conclusion: the camp will serve society and we request the Principal's approval.",
                            4
                        ),
                        qa(
                            "What are minutes of a meeting?",
                            "Minutes of a meeting are a written record of what happened in a meeting. They include the title, date, time, venue and the names of those present. For each agenda item, the minutes record the main points of discussion and the decision taken. Action items list who will do what by when. Minutes end with the closing time and the signatures of the chairperson and the secretary. They are an official record and must be accurate, concise and approved at the next meeting.",
                            4
                        ),
                    ],
  }
);

/* =========================================================
   TOPIC 4 � Group Discussion and Debate
========================================================= */

const groupDiscussion = createTopic(
    "group-discussion-and-debate",
    "Group Discussion and Debate",

    [
        definition(
            "Group Discussion",
            "A method of assessment in which a small group of participants discuss a given topic for a fixed time while one or more evaluators observe their communication, reasoning and interpersonal skills."
        ),

        definition(
            "Debate",
            "A structured discussion in which two teams argue for and against a motion according to formal rules, judged on logic, evidence and delivery."
        ),


    table(
        ["Phase", "Task", "Duration"],
        [
            ["Opening", "Topic is announced; first speaker gives a clear opening", "10-15 sec"],
            ["Body", "Participants share views, agree, disagree, build on each other", "8-10 min"],
            ["Closing", "One participant summarises the key points", "1 min"],
        ]
    ),


table(
    ["Skill", "What Evaluators Look For"],
    [
        ["Communication", "Clarity, fluency, correct grammar, good vocabulary"],
        ["Knowledge", "Familiarity with facts, current events and the topic"],
        ["Reasoning", "Logical arguments, balanced view, examples"],
        ["Leadership", "Initiating, guiding, summarising the discussion"],
        ["Team spirit", "Respecting others, building on their points, no interruption"],
        ["Listening", "Responding to what others actually said"],
        ["Body language", "Eye contact, posture, no fidgeting"],
    ]
),


list([
    "Initiate the discussion if you have a clear opening idea.",
    "If you are not initiating, make a strong second point within 30 seconds.",
    "Use facts, statistics and examples to support your points.",
    "Use connecting phrases: I'd like to add, I see your point, however.",
    "Listen carefully and respond to specific points, not general statements.",
    "Avoid raising your voice or interrupting; disagree politely.",
    "Try to summarise the discussion near the end.",
]),

    note(
        "Quality of points matters more than quantity. Three well supported points beat ten scattered comments. Maintain eye contact with the group, not just the evaluator.",
        "exam",
        "GD Tips"
    ),


list([
    "Is technology making us more alone?",
    "Should social media have age limits?",
    "Is online education the future?",
    "Are private schools better than government schools?",
    "Should animals be used in research?",
    "Is work from home the new normal?",
    "Should college attendance be compulsory?",
]),


table(
    ["Speaker", "Role", "Time"],
    [
        ["First proposition", "Defines the motion, presents main arguments", "7 min"],
        ["First opposition", "Rebuts the proposition, presents own case", "7 min"],
        ["Second proposition", "Reconstructs the case, rebuts opposition", "7 min"],
        ["Second opposition", "Reconstructs the case, rebuts proposition", "7 min"],
        ["Reply speech (prop)", "Final summary from proposition side", "4 min"],
        ["Reply speech (opp)", "Final summary from opposition side", "4 min"],
    ]
),


list([
    "Address the chair and the house, not the opponent directly.",
    "Use formal language, no slang or personal attacks.",
    "Back every claim with evidence and examples.",
    "Rebut calmly by quoting and refuting the opponent's words.",
    "Stick to the time limit; the speaker who is shortest wins the audience.",
]),


table(
    ["Purpose", "Phrases"],
    [
        ["Opening", "I rise to speak in favour of / against the motion that..."],
        ["Defining terms", "By ... I mean ..."],
        ["Rebuttal", "My opponent claims ... however ..."],
        ["Adding", "Furthermore, ..."],
        ["Conceding", "While I accept that ..., I still maintain ..."],
        ["Closing", "In conclusion, ..."],
    ]
),

    keyPoints([
        "In a GD, quality of points matters more than quantity.",
        "Always back your argument with facts and examples.",
        "Listen carefully and respond to specific points.",
        "In a debate, stick to your side and follow the format.",
        "Be respectful, calm and well organised at all times.",
        ]),
    ],

    {
        summary:
    "Master group discussion skills, debate format, useful phrases and the etiquette to follow.",
        minutes: 10,
            tags: ["group-discussion", "debate", "speaking", "important"],

                mcqs: [
                    mcq(
                        "Quality of points is more important than:",
                        ["Quantity", "Speed", "Volume", "Humor"],
                        0,
                        "Three well supported points beat ten scattered comments."
                    ),
                    mcq(
                        "In a debate the proposition supports the:",
                        ["Opposite", "Motion", "Rebuttal", "Reply"],
                        1,
                        "The proposition side argues in favour of the motion."
                    ),
                    mcq(
                        "Time for a main debate speech is usually:",
                        ["1 min", "7 min", "20 min", "45 min"],
                        1,
                        "A main debate speech is usually 7 minutes."
                    ),
                    mcq(
                        "Which is NOT a skill in a GD?",
                        ["Communication", "Reasoning", "Sleeping", "Listening"],
                        2,
                        "Sleeping is the opposite of what is expected in a GD."
                    ),
                    mcq(
                        "In a GD you should:",
                        ["Interrupt others", "Maintain eye contact with the group", "Look only at evaluator", "Whisper"],
                        1,
                        "Make eye contact with the group, not just the evaluator."
                    ),
                    mcq(
                        "Rebuttal means:",
                        ["Adding a new point", "Refuting the opponent", "Conceding the point", "Asking a question"],
                        1,
                        "Rebuttal is the act of refuting the opponent's argument."
                    ),
                ],

                    questions: [
                        qa(
                            "Explain the skills assessed in a group discussion.",
                            "Evaluators look for communication skills such as clarity, fluency and a good vocabulary; knowledge of the topic supported by facts and current events; logical reasoning backed by examples; leadership shown by initiating, guiding and summarising; team spirit shown by respecting others and building on their points; active listening shown by responding to what others actually said; and confident body language including eye contact and posture. Together these give a fair picture of how the candidate will behave in a team.",
                            4
                        ),
                        qa(
                            "Differentiate between a group discussion and a debate.",
                            "A group discussion is an informal exchange of ideas among several participants on a given topic, judged on overall communication, reasoning and team spirit. There is no strict turn taking. A debate is a formal, structured contest between two teams arguing for and against a motion, judged on logic, evidence and adherence to the format. Each speaker has a fixed time and order, and the winner is decided by judges. Both develop communication, but a debate demands stronger preparation and rebuttal skills.",
                            4
                        ),
                        qa(
                            "How do you initiate a group discussion effectively?",
                            "To initiate effectively, start with a clear, attention grabbing statement such as a quote, a statistic or a short story. Then briefly define the key terms of the topic. Give a balanced view of the issue and outline the main points you think the group should consider. End by inviting others to share their views. A strong opening gives you the role of a leader for the rest of the discussion and earns you high marks with the evaluators.",
                            3
                        ),
                        qa(
                            "List useful phrases used in a debate.",
                            "Useful debate phrases include 'I rise to speak in favour of the motion that...' for openings, 'By ... I mean ...' for defining terms, 'My opponent claims ... however ...' for rebuttal, 'Furthermore' and 'In addition' for adding points, 'While I accept that ..., I still maintain ...' for conceding a small point, and 'In conclusion, the motion has been proved / disproved' for closing. Using these phrases clearly shows that the speaker follows the formal structure of a debate.",
                            3
                        ),
                    ],
  }
);

/* =========================================================
   TOPIC 5 � Interview Skills and Soft Skills
========================================================= */

const interviewSkills = createTopic(
    "interview-skills-and-soft-skills",
    "Interview Skills and Soft Skills",

    [
        definition(
            "Interview",
            "A formal conversation in which an employer or panel evaluates a candidate's suitability for a job, course or programme, based on questions about background, skills, motivation and personality."
        ),


    table(
        ["Type", "Description"],
        [
            ["Personal", "One on one with the interviewer"],
            ["Panel", "Two or more interviewers and one candidate"],
            ["Group", "Several candidates interviewed together"],
            ["Telephone", "Conducted on phone for initial screening"],
            ["Video", "Conducted online through a video call"],
            ["Technical", "Focused on subject knowledge and problem solving"],
            ["HR", "Focused on personality, motivation and fit"],
            ["Stress", "Deliberately challenging to test composure"],
            ["Behavioural", "Asks about past behaviour to predict future"],
            ["Case study", "Candidate solves a business problem"],
        ]
    ),


table(
    ["Letter", "Stands For", "What to Say"],
    [
        ["S", "Situation", "Set the scene: where, when, who was involved"],
        ["T", "Task", "Explain the task or challenge you faced"],
        ["A", "Action", "Describe the specific actions you took"],
        ["R", "Result", "Share the outcome, ideally with numbers"],
    ]
),

    code(
        `Q: Tell me about a time you solved a difficult problem.

S: In my second year, our final year project crashed two
   days before submission.
T: We had to fix several modules in a very short time.
A: I divided the team, prioritised the critical bugs,
   worked through the night and used version control to
   coordinate changes.
R: We submitted on time and the project received the
   highest grade in the class.
`,
        "text",
        "STAR example"
    ),


table(
    ["Question", "Approach"],
    [
        ["Tell me about yourself", "A 60-90 second professional summary"],
        ["Why should we hire you", "Match your strengths to the job"],
        ["Strengths and weaknesses", "Give real examples and how you improve"],
        ["Where do you see yourself in 5 years", "Show ambition that fits the role"],
        ["Why do you want this job", "Show knowledge of the company"],
        ["Do you have any questions", "Always ask something thoughtful"],
        ["Why should we hire you over others", "Differentiate yourself with evidence"],
    ]
),

    note(
        "Never answer that you have no questions. Asking a thoughtful question about training, team or growth shows genuine interest and curiosity about the role.",
        "warning",
        "Always Ask"
    ),


list([
    "Wear neat, formal clothes: shirt and trousers for men, salwar kameez or formal western wear for women.",
    "Shoes should be polished, hair neat, minimal jewellery and perfume.",
    "Maintain upright posture, comfortable eye contact and a natural smile.",
    "Listen to the question fully, pause to think, then answer.",
    "Avoid fidgeting, looking at the phone or chewing gum.",
]),


table(
    ["Skill", "How It Is Shown"],
    [
        ["Communication", "Clear speech, listening, writing"],
        ["Teamwork", "Helping, sharing credit, supporting others"],
        ["Problem solving", "Analysing, creating, deciding"],
        ["Adaptability", "Learning new tools, handling change"],
        ["Time management", "Meeting deadlines, prioritising"],
        ["Leadership", "Initiative, motivating, taking responsibility"],
        ["Emotional intelligence", "Self awareness, empathy, calm under pressure"],
        ["Critical thinking", "Asking the right questions, evaluating evidence"],
        ["Creativity", "Generating new ideas, seeing old problems in new ways"],
        ["Work ethic", "Showing up, being reliable, doing more than asked"],
    ]
),


list([
    "Thank the interviewer with a brief handshake and a smile.",
    "Send a thank you email within 24 hours, restating interest.",
    "Follow up politely after a week if you have not heard back.",
    "Reflect on what went well and what to improve next time.",
]),

    keyPoints([
        "Prepare for the interview with research and rehearsal.",
        "Use the STAR method for behavioural questions.",
        "Always prepare at least one thoughtful question to ask.",
        "Dress formally and maintain confident body language.",
        "Send a thank you email within 24 hours.",
        ]),
    ],

    {
        summary:
    "Master interview types, the STAR method, common questions, soft skills, body language and follow up.",
        minutes: 10,
            tags: ["interview", "soft-skills", "STAR", "important"],

                mcqs: [
                    mcq(
                        "STAR stands for:",
                        ["Situation Task Action Result", "Start Talk Agree Result", "Set Try Ask Rest", "Simple Time Action Result"],
                        0,
                        "Situation, Task, Action, Result is the STAR format."
                    ),
                    mcq(
                        "Behavioural interviews ask about:",
                        ["Future plans only", "Past behaviour", "Random topics", "Current salary"],
                        1,
                        "Behavioural questions ask about past situations to predict future behaviour."
                    ),
                    mcq(
                        "After an interview you should:",
                        ["Wait silently", "Send a thank you email", "Call the HR", "Visit the office"],
                        1,
                        "A thank you email within 24 hours is standard practice."
                    ),
                    mcq(
                        "Which is NOT a soft skill?",
                        ["Communication", "Teamwork", "Programming syntax", "Adaptability"],
                        2,
                        "Programming syntax is a technical skill, not a soft skill."
                    ),
                    mcq(
                        "When asked about your weakness:",
                        ["Say you have none", "Give a real one and how you improve", "Blame others", "Be silent"],
                        1,
                        "Mention a real weakness and what you are doing to improve."
                    ),
                    mcq(
                        "A panel interview has:",
                        ["One interviewer", "Several interviewers", "No interviewer", "Audience only"],
                        1,
                        "A panel interview has several interviewers and one candidate."
                    ),
                ],

                    questions: [
                        qa(
                            "Explain the STAR method for answering interview questions.",
                            "STAR stands for Situation, Task, Action and Result. It is a structured way to answer behavioural questions that ask about a past experience. First, briefly describe the situation and the context. Then explain the task or challenge you faced. Next, describe the specific actions you took, focusing on your own contribution. Finally, share the result, ideally with measurable impact such as saved time, reduced cost or improved quality. The method keeps the answer focused, specific and impressive.",
                            4
                        ),
                        qa(
                            "Differentiate between a panel interview and a stress interview.",
                            "A panel interview is conducted by two or more interviewers together, who take turns asking the candidate questions on different aspects such as technical knowledge, attitude and motivation. The candidate answers each panel member in turn. A stress interview is designed to test how the candidate reacts under pressure. The interviewer may ask rapid fire, hostile or unexpected questions, may interrupt the answer, or may remain silent for a long time. The goal is not to insult the candidate but to see whether the candidate stays calm, thinks clearly and maintains composure.",
                            4
                        ),
                        qa(
                            "What are soft skills and why do employers value them?",
                            "Soft skills are personal attributes that enable someone to interact effectively with others. They include communication, teamwork, problem solving, adaptability, time management, leadership, emotional intelligence and critical thinking. Employers value them because technical skills alone are not enough to succeed in a team based work environment. A candidate who can communicate clearly, work well with others, learn quickly and handle stress is more likely to grow in the role and contribute to the success of the organisation.",
                            4
                        ),
                        qa(
                            "How should you prepare for a job interview?",
                            "Begin by researching the company, its products, services and recent news so that you can speak intelligently about it. Study the job description and identify the key skills and experience required. Revise your own resume so that you can speak confidently about every point. Prepare answers to common questions such as strengths, weaknesses, why this company and where you see yourself in five years. Prepare two or three thoughtful questions to ask the interviewer. Plan your outfit and route in advance and aim to arrive ten to fifteen minutes early. Finally, do a mock interview with a friend to reduce nervousness.",
                            4
                        ),
                    ],
  }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit1Topics = [
    advancedWriting,
    essayArticle,
    reportProposal,
    groupDiscussion,
    interviewSkills,
];

