/* =========================================================
   BCA • SEM 1 • Communication Skills in English - I
   UNIT 2 — Writing Skills and Speaking Skills
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
   TOPIC 1 — Fundamentals of Writing
========================================================= */

const fundamentalsOfWriting = createTopic(
    "fundamentals-of-writing",
    "Fundamentals of Writing",

    [
        definition(
            "Writing",
            "The productive skill of expressing thoughts, ideas and information in a permanent written form."
        ),

        text(
            "Writing differs from speaking in one crucial respect: the reader is not present. Every doubt must therefore be anticipated and answered within the text itself, because there is no opportunity for immediate clarification."
        ),

        heading("Importance of Writing Skills"),

        list([
            "It creates a permanent and verifiable record.",
            "It carries legal validity in agreements and contracts.",
            "It allows the message to reach many readers at once.",
            "It gives the writer time to organise and refine ideas.",
            "It reflects the professionalism of the writer and the organisation.",
            "It is essential for reports, applications, emails and examinations.",
        ]),

        heading("The Writing Process"),

        steps([
            "Pre writing — identify the purpose, the reader and the main ideas",
            "Planning — arrange the ideas into a logical outline",
            "Drafting — write the first version without worrying about perfection",
            "Revising — improve the content, structure and flow of ideas",
            "Editing — correct grammar, spelling, punctuation and style",
            "Proofreading — read the final copy once more for any remaining error",
        ]),

        note(
            "Never try to write and edit at the same time. Write the complete draft first and then refine it. Attempting both together slows writing and interrupts the flow of thought.",
            "tip",
            "Best Practice"
        ),

        heading("Qualities of Good Writing"),

        table(
            ["Quality", "Meaning"],
            [
                ["Clarity", "The reader understands the meaning at first reading."],
                ["Conciseness", "No unnecessary words are used."],
                ["Coherence", "Ideas follow one another logically."],
                ["Correctness", "Facts, grammar and spelling are accurate."],
                ["Completeness", "All required information is present."],
                ["Courtesy", "The tone is polite and respectful."],
                ["Consideration", "The needs of the reader are kept in mind."],
            ]
        ),

        heading("Paragraph Writing"),

        definition(
            "Paragraph",
            "A group of related sentences that develop one main idea."
        ),

        table(
            ["Part", "Purpose"],
            [
                ["Topic sentence", "States the main idea, usually the first sentence."],
                ["Supporting sentences", "Explain the idea with details, examples and reasons."],
                ["Concluding sentence", "Summarises the idea or links to the next paragraph."],
            ]
        ),

        heading("Qualities of a Good Paragraph"),

        table(
            ["Quality", "Meaning"],
            [
                ["Unity", "The paragraph deals with only one main idea."],
                ["Coherence", "The sentences are logically connected."],
                ["Adequate development", "Enough detail is given to explain the idea."],
                ["Proper length", "Neither too short nor unreasonably long."],
            ]
        ),

        heading("Linking Words"),

        table(
            ["Purpose", "Words and Phrases"],
            [
                ["Addition", "moreover, furthermore, in addition, besides"],
                ["Contrast", "however, nevertheless, on the other hand, whereas"],
                ["Cause", "because, since, as, due to"],
                ["Effect", "therefore, thus, consequently, hence"],
                ["Example", "for example, for instance, such as, namely"],
                ["Sequence", "firstly, then, afterwards, finally"],
                ["Conclusion", "in conclusion, to sum up, in short"],
            ]
        ),

        heading("Common Errors in Writing"),

        table(
            ["Error", "Incorrect", "Correct"],
            [
                ["Subject verb agreement", "He go to college", "He goes to college"],
                ["Article", "I am student", "I am a student"],
                ["Preposition", "Discuss about the topic", "Discuss the topic"],
                ["Tense", "I have wrote the letter", "I have written the letter"],
                ["Double negative", "I did not do nothing", "I did not do anything"],
                ["Redundancy", "Return back the book", "Return the book"],
                ["Spelling", "recieve, seperate", "receive, separate"],
            ]
        ),

        heading("Punctuation Marks"),

        table(
            ["Mark", "Symbol", "Use"],
            [
                ["Full stop", ".", "Ends a complete statement."],
                ["Comma", ",", "Separates items and clauses."],
                ["Question mark", "?", "Ends a direct question."],
                ["Exclamation mark", "!", "Shows strong feeling."],
                ["Colon", ":", "Introduces a list or explanation."],
                ["Semicolon", ";", "Joins two closely related sentences."],
                ["Apostrophe", "'", "Shows possession or a contraction."],
                ["Quotation marks", '" "', "Enclose the exact words spoken."],
                ["Hyphen", "-", "Joins parts of a compound word."],
            ]
        ),

        keyPoints([
            "Writing is a productive skill that produces a permanent record.",
            "The writing process moves from pre writing through drafting to proofreading.",
            "A paragraph develops a single main idea with unity and coherence.",
            "Linking words connect ideas and improve the flow of writing.",
            "Common errors involve agreement, articles, prepositions, tense and spelling.",
        ]),
    ],

    {
        summary:
            "Learn the writing process, qualities of good writing, paragraph construction, linking words and common errors.",
        minutes: 11,
        tags: ["writing", "grammar", "important"],

        mcqs: [
            mcq(
                "The sentence that states the main idea of a paragraph is called the:",
                ["Concluding sentence", "Topic sentence", "Supporting sentence", "Linking sentence"],
                1,
                "The topic sentence states the main idea, usually at the beginning."
            ),
            mcq(
                "A paragraph dealing with only one main idea shows:",
                ["Coherence", "Unity", "Emphasis", "Variety"],
                1,
                "Unity means the paragraph develops a single idea."
            ),
            mcq(
                "Which word shows contrast?",
                ["Moreover", "Therefore", "However", "Furthermore"],
                2,
                "However introduces a contrasting idea."
            ),
            mcq(
                "Which sentence is correct?",
                [
                    "He go to college daily",
                    "He goes to college daily",
                    "He going to college daily",
                    "He gone to college daily",
                ],
                1,
                "A singular subject requires the verb goes."
            ),
            mcq(
                "Which punctuation mark shows possession?",
                ["Comma", "Colon", "Apostrophe", "Hyphen"],
                2,
                "The apostrophe indicates possession or a contraction."
            ),
            mcq(
                "The final stage of the writing process is:",
                ["Drafting", "Revising", "Editing", "Proofreading"],
                3,
                "Proofreading is the last check before the writing is finished."
            ),
        ],

        questions: [
            qa(
                "Explain the writing process.",
                "The writing process begins with pre writing, in which the purpose, the reader and the main ideas are identified. Planning follows, where the ideas are arranged into a logical outline. In the drafting stage the first version is written without worrying about perfection. Revising improves the content, structure and flow of ideas. Editing corrects grammar, spelling, punctuation and style, and finally proofreading is a last careful reading to catch any remaining error.",
                5
            ),
            qa(
                "What is a paragraph? Explain its parts and qualities.",
                "A paragraph is a group of related sentences that develop one main idea. It consists of a topic sentence which states the main idea, supporting sentences which explain it with details, reasons and examples, and a concluding sentence which summarises the idea or leads to the next paragraph. A good paragraph has unity because it deals with one idea, coherence because its sentences are logically connected, adequate development because it gives enough detail, and a proper length.",
                5
            ),
            qa(
                "Explain the qualities of good writing.",
                "Good writing has clarity so that the reader understands it at first reading, and conciseness so that no unnecessary words are used. It shows coherence with ideas following logically, and correctness in facts, grammar and spelling. It is complete, containing all the information the reader needs, courteous in tone, and considerate of the reader by keeping the reader's needs and level of knowledge in mind.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — Letter Writing
========================================================= */

const letterWriting = createTopic(
    "letter-writing",
    "Letter Writing",

    [
        text(
            "Even in the age of instant messaging, the formal letter remains the accepted form of written communication for applications, complaints, enquiries and official correspondence."
        ),

        heading("Types of Letters"),

        table(
            ["Type", "Written To", "Tone"],
            [
                ["Formal", "Officials, companies, editors", "Polite and impersonal"],
                ["Informal", "Family and friends", "Friendly and casual"],
                ["Semi formal", "Teachers, neighbours, acquaintances", "Polite but warm"],
            ]
        ),

        heading("Parts of a Formal Letter"),

        table(
            ["Part", "Content"],
            [
                ["Sender's address", "Written at the top left."],
                ["Date", "Written below the sender's address."],
                ["Receiver's address", "The designation and address of the recipient."],
                ["Subject", "A one line statement of the purpose."],
                ["Salutation", "Dear Sir or Dear Madam."],
                ["Body", "Introduction, main content and conclusion."],
                ["Complimentary close", "Yours faithfully or Yours sincerely."],
                ["Signature", "Signature followed by the name in block letters."],
            ]
        ),

        note(
            "Use Yours faithfully when the letter begins with Dear Sir or Dear Madam, and Yours sincerely when it begins with the name of the person, such as Dear Mr Sharma.",
            "exam",
            "Frequently Asked"
        ),

        heading("Format of a Formal Letter"),

        code(
            `42 Gandhi Road
Surat 395007

15 August 2025

The Principal
Shree Institute of Computer Studies
Surat 395001

Subject: Application for a bonafide certificate

Dear Sir,

I am a student of the first semester of the Bachelor of
Computer Applications programme, bearing roll number 101.

I require a bonafide certificate for the purpose of opening
a bank account and applying for a scholarship. I request you
kindly to issue the certificate at your earliest convenience.

I shall be grateful for your kind consideration.

Yours faithfully,

Signature
AMIT PATEL
Roll No 101`,
            "text",
            "A complete formal letter"
        ),

        heading("Body of the Letter"),

        table(
            ["Paragraph", "Purpose"],
            [
                ["Opening", "States who you are and why you are writing."],
                ["Middle", "Gives the details, reasons or explanation."],
                ["Closing", "Makes the request and thanks the reader."],
            ]
        ),

        heading("Common Types of Formal Letters"),

        table(
            ["Letter", "Purpose"],
            [
                ["Application for leave", "Requesting permission to be absent."],
                ["Application for a job", "Applying for a vacant post."],
                ["Letter of enquiry", "Asking for information about goods or services."],
                ["Order letter", "Placing an order for goods."],
                ["Complaint letter", "Reporting a defect or poor service."],
                ["Letter to the editor", "Expressing an opinion on a public issue."],
                ["Resignation letter", "Informing an employer of your departure."],
            ]
        ),

        heading("Sample Leave Application"),

        code(
            `Subject: Application for two days leave

Dear Sir,

I am a student of the first semester of BCA, bearing roll
number 101. I am suffering from high fever and my doctor has
advised complete rest for two days.

I therefore request you kindly to grant me leave from
16 August 2025 to 17 August 2025.

I shall complete the missed work at the earliest.

Yours faithfully,
AMIT PATEL`,
            "text",
            "A leave application"
        ),

        heading("Sample Complaint Letter"),

        code(
            `Subject: Complaint regarding a defective laptop

Dear Sir,

I purchased a laptop of model XPro 15 from your showroom on
1 August 2025 vide invoice number 4521.

Since the very first day the laptop has been shutting down
automatically after about twenty minutes of use. Your service
centre has examined it twice but the problem persists.

I therefore request you kindly to replace the laptop or refund
the amount paid, as provided in the warranty.

Yours faithfully,
AMIT PATEL`,
            "text",
            "A complaint letter"
        ),

        heading("Informal Letter Format"),

        code(
            `42 Gandhi Road
Surat 395007

15 August 2025

Dear Rahul,

I hope this letter finds you in good health. It has been a
long time since we last met.

I have joined the BCA programme at Shree Institute and I am
enjoying the subjects very much, especially programming.

Do write back and tell me about your college. Convey my
regards to your parents.

Yours affectionately,
Amit`,
            "text",
            "An informal letter to a friend"
        ),

        heading("Formal versus Informal Letters"),

        table(
            ["Basis", "Formal", "Informal"],
            [
                ["Language", "Standard and impersonal", "Conversational and personal"],
                ["Contractions", "Avoided", "Freely used"],
                ["Subject line", "Compulsory", "Not used"],
                ["Salutation", "Dear Sir or Dear Madam", "Dear Rahul"],
                ["Close", "Yours faithfully", "Yours affectionately"],
                ["Length", "Brief and to the point", "May be long and descriptive"],
            ]
        ),

        keyPoints([
            "A formal letter has a fixed structure with a subject line and formal close.",
            "Use Yours faithfully with Dear Sir and Yours sincerely with a named person.",
            "The body has three paragraphs: opening, details and request.",
            "Formal letters avoid contractions and personal remarks.",
            "Informal letters are conversational and need no subject line.",
        ]),
    ],

    {
        summary:
            "Master the format of formal and informal letters with samples of applications and complaints.",
        minutes: 11,
        tags: ["writing", "letter", "important"],

        mcqs: [
            mcq(
                "Which complimentary close is used with Dear Sir?",
                ["Yours sincerely", "Yours faithfully", "Yours truly", "Yours lovingly"],
                1,
                "Yours faithfully is used when the recipient is not named."
            ),
            mcq(
                "Which part of a formal letter states the purpose in one line?",
                ["Salutation", "Subject", "Body", "Signature"],
                1,
                "The subject line briefly states the purpose of the letter."
            ),
            mcq(
                "Contractions such as don't and can't should be:",
                [
                    "Used in formal letters",
                    "Avoided in formal letters",
                    "Used in the subject",
                    "Used in the address",
                ],
                1,
                "Formal writing avoids contractions."
            ),
            mcq(
                "A letter written to a newspaper on a public issue is called a:",
                ["Complaint letter", "Enquiry letter", "Letter to the editor", "Order letter"],
                2,
                "Such a letter is addressed to the editor of the newspaper."
            ),
            mcq(
                "In a formal letter the date is written:",
                [
                    "Below the sender's address",
                    "At the end",
                    "After the salutation",
                    "In the subject line",
                ],
                0,
                "The date follows immediately below the sender's address."
            ),
        ],

        questions: [
            qa(
                "Explain the parts of a formal letter.",
                "A formal letter begins with the sender's address at the top left, followed by the date. Next comes the receiver's address with the designation of the recipient. A subject line states the purpose in one line. The salutation is usually Dear Sir or Dear Madam. The body has three paragraphs covering the introduction, the details and the request. The letter ends with a complimentary close such as Yours faithfully, followed by the signature and the name in block letters.",
                5
            ),
            qa(
                "Differentiate between formal and informal letters.",
                "A formal letter uses standard impersonal language, avoids contractions, includes a compulsory subject line, begins with Dear Sir or Dear Madam and ends with Yours faithfully, and it is kept brief and to the point. An informal letter uses conversational and personal language, freely uses contractions, has no subject line, begins with the first name of the person and ends with an affectionate close, and it may be long and descriptive.",
                4
            ),
            qa(
                "Write an application to the Principal requesting two days leave.",
                "The letter should carry the sender's address and date, followed by the address of the Principal. The subject should read Application for two days leave. After the salutation Dear Sir, the first paragraph should identify the writer by name, course and roll number. The second paragraph should state the reason for the leave, such as illness with medical advice for rest. The third paragraph should request that leave be granted for the specified dates and assure that missed work will be completed. The letter should close with Yours faithfully and the writer's name.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — Email and Report Writing
========================================================= */

const emailAndReports = createTopic(
    "email-and-report-writing",
    "Email and Report Writing",

    [
        heading("Email Writing"),

        definition(
            "Email",
            "An electronic message sent from one computer user to another over a network."
        ),

        heading("Parts of an Email"),

        table(
            ["Field", "Purpose"],
            [
                ["To", "The main recipient of the message."],
                ["Cc", "Carbon copy sent to others for information."],
                ["Bcc", "Blind carbon copy where recipients cannot see one another."],
                ["Subject", "A short line describing the content."],
                ["Body", "The actual message."],
                ["Attachment", "Files sent along with the message."],
                ["Signature", "The sender's name and contact details."],
            ]
        ),

        heading("Structure of a Professional Email"),

        code(
            `To      : principal@institute.edu
Cc      : hod.bca@institute.edu
Subject : Request for a bonafide certificate

Dear Sir,

I am Amit Patel, a first semester BCA student with roll
number 101.

I require a bonafide certificate to open a bank account.
I have attached a copy of my identity card for reference.

I would be grateful if the certificate could be issued by
20 August 2025.

Thank you for your time.

Regards,
Amit Patel
Roll No 101
Mobile 98765 43210`,
            "text",
            "A complete professional email"
        ),

        heading("Rules of Email Etiquette"),

        list(
            [
                "Write a clear and specific subject line.",
                "Use a professional email address, not a casual nickname.",
                "Greet the recipient appropriately.",
                "Keep the message short and focused on one topic.",
                "Use short paragraphs with a blank line between them.",
                "Avoid writing in capital letters, which is read as shouting.",
                "Check the spelling and grammar before sending.",
                "Attach the file before writing the message so it is not forgotten.",
                "Reply to official emails within twenty four hours.",
                "Use Bcc when sending to many recipients to protect their privacy.",
            ],
            true
        ),

        heading("Email versus Letter"),

        table(
            ["Basis", "Email", "Letter"],
            [
                ["Speed", "Instant", "Takes days"],
                ["Cost", "Almost free", "Postage required"],
                ["Attachments", "Files can be attached", "Enclosures posted separately"],
                ["Formality", "Slightly less formal", "Highly formal"],
                ["Record", "Stored digitally", "Stored physically"],
                ["Reach", "Many recipients at once", "One recipient per copy"],
            ]
        ),

        heading("Report Writing"),

        definition(
            "Report",
            "A formal written document that presents information, findings and recommendations on a specific subject in an organised manner."
        ),

        heading("Characteristics of a Good Report"),

        list([
            "It is factual and based on evidence, not opinion.",
            "It is clear and uses simple language.",
            "It is well organised under proper headings.",
            "It is objective and free from personal bias.",
            "It is complete yet concise.",
            "It reaches definite conclusions and recommendations.",
        ]),

        heading("Types of Reports"),

        table(
            ["Type", "Purpose"],
            [
                ["Informational", "Presents facts without analysis."],
                ["Analytical", "Analyses data and draws conclusions."],
                ["Routine", "Prepared regularly such as monthly reports."],
                ["Special", "Prepared for a particular event or problem."],
                ["Technical", "Deals with a scientific or engineering subject."],
                ["Project report", "Describes the work carried out on a project."],
            ]
        ),

        heading("Structure of a Formal Report"),

        table(
            ["Section", "Content"],
            [
                ["Title page", "Title, author, date and organisation."],
                ["Acknowledgement", "Thanks to those who helped."],
                ["Table of contents", "List of sections with page numbers."],
                ["Abstract or Summary", "A brief overview of the whole report."],
                ["Introduction", "Background, purpose and scope."],
                ["Methodology", "How the information was collected."],
                ["Findings", "The data and observations obtained."],
                ["Analysis", "Interpretation of the findings."],
                ["Conclusion", "The main inferences drawn."],
                ["Recommendations", "Suggested actions based on the conclusions."],
                ["References", "Sources consulted."],
                ["Appendix", "Supporting material such as tables and forms."],
            ]
        ),

        heading("Steps in Writing a Report"),

        steps([
            "Define the purpose and identify the reader",
            "Collect data from primary and secondary sources",
            "Organise the data under logical headings",
            "Prepare an outline of the report",
            "Write the first draft section by section",
            "Add tables, charts and diagrams where useful",
            "Revise, edit and proofread the report",
            "Prepare the final copy with proper formatting",
        ]),

        heading("Sample Report Extract"),

        code(
            `Report on the Industrial Visit to TechnoSoft Pvt Ltd

Submitted by : Amit Patel, Roll No 101
Date         : 20 August 2025

1. Introduction
   The first semester BCA students visited TechnoSoft Pvt Ltd
   on 12 August 2025 to observe software development practices
   in a professional environment.

2. Objective
   To understand the software development life cycle and the
   working of different departments in an IT company.

3. Observations
   The company follows the Agile methodology. Work is divided
   into two week sprints. The quality assurance team tests every
   module before release.

4. Conclusion
   The visit provided valuable practical exposure and helped
   the students relate classroom learning to industry practice.

5. Recommendation
   Such visits should be organised at least twice in every
   academic year.`,
            "text",
            "An industrial visit report"
        ),

        note(
            "A report must always be objective. Write the findings were inconclusive rather than I could not find anything useful. Personal pronouns are generally avoided in formal reports.",
            "tip",
            "Style Rule"
        ),

        keyPoints([
            "An email needs a clear subject line and a professional tone.",
            "Bcc hides recipient addresses from one another.",
            "A report presents facts, analysis and recommendations in an organised form.",
            "The main sections are introduction, methodology, findings, conclusion and recommendations.",
            "Reports must be objective and free from personal bias.",
        ]),
    ],

    {
        summary:
            "Learn professional email writing with etiquette rules, and the structure and preparation of formal reports.",
        minutes: 11,
        tags: ["writing", "email", "report", "important"],

        mcqs: [
            mcq(
                "Which field hides recipient addresses from one another?",
                ["To", "Cc", "Bcc", "Subject"],
                2,
                "Bcc stands for blind carbon copy and hides the addresses."
            ),
            mcq(
                "Writing an email entirely in capital letters is interpreted as:",
                ["Emphasis", "Shouting", "Politeness", "Formality"],
                1,
                "Capital letters are read as shouting in email etiquette."
            ),
            mcq(
                "Which section of a report gives a brief overview of the whole document?",
                ["Introduction", "Abstract", "Conclusion", "Appendix"],
                1,
                "The abstract or summary gives a brief overview."
            ),
            mcq(
                "Suggested actions based on the conclusions appear in the:",
                ["Findings", "Methodology", "Recommendations", "References"],
                2,
                "Recommendations propose the action to be taken."
            ),
            mcq(
                "Supporting material such as tables and forms is placed in the:",
                ["Introduction", "Appendix", "Abstract", "Conclusion"],
                1,
                "The appendix holds supporting material."
            ),
            mcq(
                "A report prepared every month is an example of a:",
                ["Special report", "Routine report", "Technical report", "Analytical report"],
                1,
                "Reports prepared at regular intervals are routine reports."
            ),
        ],

        questions: [
            qa(
                "Explain the rules of email etiquette.",
                "An email should carry a clear and specific subject line and should be sent from a professional address. The recipient should be greeted appropriately and the message should be kept short and focused on a single topic. Short paragraphs separated by blank lines improve readability. Writing entirely in capital letters must be avoided because it is read as shouting. Spelling and grammar should be checked before sending, attachments should be added before writing the message, official emails should be answered within a day, and Bcc should be used when writing to many recipients.",
                5
            ),
            qa(
                "What is a report? Explain its characteristics.",
                "A report is a formal written document that presents information, findings and recommendations on a specific subject in an organised manner. A good report is factual and based on evidence rather than opinion, uses clear and simple language, is well organised under proper headings, is objective and free from personal bias, is complete yet concise, and arrives at definite conclusions along with practical recommendations.",
                4
            ),
            qa(
                "Explain the structure of a formal report.",
                "A formal report begins with a title page giving the title, author and date, followed by an acknowledgement and a table of contents. An abstract provides a brief overview. The introduction states the background, purpose and scope. The methodology explains how the information was collected. The findings present the data obtained and the analysis interprets them. The conclusion states the main inferences and the recommendations suggest the action to be taken. References and an appendix appear at the end.",
                5
            ),
            qa(
                "Differentiate between an email and a letter.",
                "An email is delivered instantly and costs virtually nothing, allows files to be attached directly, is slightly less formal in tone, is stored digitally and can reach many recipients at once. A letter takes days to reach the recipient and requires postage, its enclosures are posted separately, it is highly formal, it is stored physically, and a separate copy is needed for each recipient.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — Speaking Skills
========================================================= */

const speakingSkills = createTopic(
    "speaking-skills",
    "Speaking Skills",

    [
        definition(
            "Speaking",
            "The productive skill of expressing thoughts and ideas orally so that the listener understands them clearly."
        ),

        text(
            "Speaking is the most visible communication skill. A candidate may write excellent answers yet fail an interview because of poor spoken communication. Fluency, clarity and confidence together make a good speaker."
        ),

        heading("Elements of Effective Speaking"),

        table(
            ["Element", "Meaning"],
            [
                ["Pronunciation", "Producing the sounds of words correctly."],
                ["Fluency", "Speaking smoothly without unnatural pauses."],
                ["Clarity", "Being easily understood by the listener."],
                ["Pace", "Speaking neither too fast nor too slowly."],
                ["Volume", "Speaking loudly enough for everyone to hear."],
                ["Pitch", "Varying the highness or lowness of the voice."],
                ["Tone", "The emotional colour of the voice."],
                ["Pause", "Brief silences that give the listener time to absorb."],
                ["Stress", "Emphasising the important words."],
                ["Intonation", "The rise and fall of the voice across a sentence."],
            ]
        ),

        note(
            "Intonation carries meaning. Rising intonation at the end usually signals a question, while falling intonation signals a statement or a command.",
            "tip",
            "Voice Modulation"
        ),

        heading("Non Verbal Elements of Speaking"),

        table(
            ["Element", "Guidance"],
            [
                ["Eye contact", "Look at the listener for a few seconds at a time."],
                ["Facial expression", "Keep it pleasant and matched to the content."],
                ["Posture", "Stand or sit straight without stiffness."],
                ["Gestures", "Use hand movements naturally to support the words."],
                ["Appearance", "Dress appropriately for the occasion."],
                ["Proximity", "Maintain a comfortable distance from the listener."],
            ]
        ),

        heading("Everyday Speaking Situations"),

        table(
            ["Situation", "Language to Use"],
            [
                ["Greeting", "Good morning, How do you do, Nice to meet you"],
                ["Introducing yourself", "My name is, I am a student of"],
                ["Introducing others", "May I introduce, This is my friend"],
                ["Requesting", "Could you please, Would you mind"],
                ["Apologising", "I am sorry, I apologise for"],
                ["Thanking", "Thank you very much, I am grateful"],
                ["Agreeing", "I agree, That is right, Exactly"],
                ["Disagreeing politely", "I see your point, but, I am afraid I disagree"],
                ["Asking for repetition", "I beg your pardon, Could you repeat that"],
                ["Taking leave", "It was nice meeting you, Goodbye"],
            ]
        ),

        heading("Telephone Conversation"),

        steps([
            "Answer promptly and identify yourself and your organisation",
            "Greet the caller politely",
            "Listen carefully and note the important points",
            "Speak clearly at a moderate pace",
            "Confirm what has been agreed before ending",
            "Thank the caller and let the caller hang up first",
        ]),

        code(
            `Receptionist : Good morning, Shree Institute. How may I help you?

Caller       : Good morning. May I speak to the BCA coordinator?

Receptionist : May I know who is calling, please?

Caller       : This is Amit Patel, a first semester student.

Receptionist : Please hold the line while I connect you.

Caller       : Thank you.`,
            "text",
            "A model telephone conversation"
        ),

        heading("Public Speaking"),

        definition(
            "Public Speaking",
            "The act of delivering a speech to a live audience with the purpose of informing, persuading or entertaining."
        ),

        table(
            ["Stage", "Task"],
            [
                ["Preparation", "Research the topic and know the audience."],
                ["Organisation", "Arrange the material into introduction, body and conclusion."],
                ["Rehearsal", "Practise aloud, preferably before a mirror."],
                ["Delivery", "Speak confidently with eye contact and modulation."],
                ["Handling questions", "Listen fully, answer briefly and honestly."],
            ]
        ),

        heading("Structure of a Speech"),

        table(
            ["Part", "Purpose", "Share of Time"],
            [
                ["Introduction", "Greet, state the topic and catch attention.", "About ten percent"],
                ["Body", "Present the main points with support.", "About eighty percent"],
                ["Conclusion", "Summarise and close memorably.", "About ten percent"],
            ]
        ),

        heading("Overcoming Stage Fear"),

        list(
            [
                "Prepare thoroughly so that you are confident of the content.",
                "Rehearse aloud several times before the actual delivery.",
                "Breathe deeply and slowly before beginning.",
                "Begin with a sentence you have memorised perfectly.",
                "Look at friendly faces in the audience first.",
                "Accept that mild nervousness is normal and even useful.",
                "Focus on the message rather than on yourself.",
            ],
            true
        ),

        heading("Group Discussion"),

        definition(
            "Group Discussion",
            "A method of assessment in which a group of candidates discuss a given topic while evaluators observe their communication and leadership skills."
        ),

        table(
            ["Skill Assessed", "What Evaluators Look For"],
            [
                ["Knowledge", "Familiarity with the topic and use of facts."],
                ["Communication", "Clarity, fluency and correct language."],
                ["Leadership", "Initiating, guiding and summarising."],
                ["Team spirit", "Respecting others and building on their points."],
                ["Listening", "Responding to what others have said."],
                ["Reasoning", "Logical argument supported by evidence."],
            ]
        ),

        heading("Dos and Don'ts in a Group Discussion"),

        table(
            ["Do", "Do Not"],
            [
                ["Initiate if you are sure of the topic", "Do not speak without knowledge"],
                ["Speak clearly and audibly", "Do not shout or argue aggressively"],
                ["Support points with examples", "Do not repeat what has been said"],
                ["Listen to others attentively", "Do not interrupt a speaker"],
                ["Maintain eye contact with the group", "Do not look only at the evaluator"],
                ["Summarise at the end if possible", "Do not remain completely silent"],
            ]
        ),

        keyPoints([
            "Effective speaking combines pronunciation, fluency, clarity, pace and modulation.",
            "Non verbal elements such as eye contact and posture support the spoken message.",
            "A speech has an introduction, a body and a conclusion.",
            "Stage fear is reduced by preparation, rehearsal and controlled breathing.",
            "Group discussions test knowledge, communication, leadership and team spirit.",
        ]),
    ],

    {
        summary:
            "Develop speaking skills covering pronunciation, voice modulation, telephone etiquette, public speaking and group discussion.",
        minutes: 12,
        tags: ["speaking", "skills", "important"],

        mcqs: [
            mcq(
                "The rise and fall of the voice across a sentence is called:",
                ["Pitch", "Stress", "Intonation", "Tone"],
                2,
                "Intonation is the pattern of rise and fall in the voice."
            ),
            mcq(
                "Speaking smoothly without unnatural pauses is called:",
                ["Clarity", "Fluency", "Pitch", "Volume"],
                1,
                "Fluency is the smooth flow of speech."
            ),
            mcq(
                "In a telephone conversation, who should hang up first?",
                ["The receiver", "The caller", "Either", "The operator"],
                1,
                "Courtesy requires that the caller ends the call."
            ),
            mcq(
                "Approximately what share of a speech should the body occupy?",
                ["Ten percent", "Fifty percent", "Eighty percent", "One hundred percent"],
                2,
                "The body carries the main content and takes about eighty percent."
            ),
            mcq(
                "Which of the following should be avoided in a group discussion?",
                [
                    "Supporting points with examples",
                    "Interrupting other speakers",
                    "Maintaining eye contact",
                    "Summarising at the end",
                ],
                1,
                "Interrupting others shows poor team spirit."
            ),
            mcq(
                "Nervousness before speaking in public is best reduced by:",
                ["Avoiding the topic", "Thorough preparation", "Speaking very fast", "Reading the whole speech"],
                1,
                "Thorough preparation and rehearsal build confidence."
            ),
        ],

        questions: [
            qa(
                "Explain the elements of effective speaking.",
                "Effective speaking requires correct pronunciation so that words are produced accurately, and fluency so that speech flows smoothly without unnatural pauses. Clarity ensures the listener understands easily, while an appropriate pace avoids speaking too fast or too slowly. Adequate volume makes the speaker audible, and variation in pitch and tone keeps the delivery interesting. Pauses give the listener time to absorb, stress highlights important words, and intonation carries meaning through the rise and fall of the voice.",
                5
            ),
            qa(
                "What is a group discussion? What skills are assessed in it?",
                "A group discussion is a method of assessment in which a group of candidates discuss a given topic while evaluators observe them. The skills assessed are knowledge of the topic shown through the use of facts, communication skill shown through clarity and correct language, leadership shown by initiating and summarising, team spirit shown by respecting and building on the points of others, listening ability shown by relevant responses, and reasoning shown through logical argument supported by evidence.",
                5
            ),
            qa(
                "How can stage fear be overcome?",
                "Stage fear is reduced first by thorough preparation, because confidence in the content removes the main cause of anxiety. Rehearsing aloud several times, preferably before a mirror, makes the delivery familiar. Deep slow breathing before beginning calms the body. Starting with a perfectly memorised opening sentence provides a secure beginning. Looking at friendly faces in the audience helps, and it should be remembered that mild nervousness is normal and even improves alertness.",
                4
            ),
            qa(
                "Explain telephone etiquette.",
                "The telephone should be answered promptly and the speaker should identify himself and the organisation. The caller should be greeted politely and listened to carefully, with important points noted down. The speaker should talk clearly at a moderate pace and avoid keeping the caller waiting without explanation. Before ending, whatever has been agreed should be confirmed, the caller should be thanked, and courtesy requires that the caller be allowed to hang up first.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 5 — Presentation and Interview Skills
========================================================= */

const presentationAndInterview = createTopic(
    "presentation-and-interview-skills",
    "Presentation and Interview Skills",

    [
        heading("Oral Presentation"),

        definition(
            "Presentation",
            "A structured oral delivery of information to an audience, usually supported by visual aids."
        ),

        heading("The Four Ps of Presentation"),

        table(
            ["P", "Meaning"],
            [
                ["Plan", "Decide the objective, the audience and the content."],
                ["Prepare", "Research the material and design the visual aids."],
                ["Practise", "Rehearse aloud and time the delivery."],
                ["Present", "Deliver with confidence and engage the audience."],
            ]
        ),

        heading("Planning a Presentation"),

        steps([
            "Define the objective of the presentation",
            "Analyse the audience and their level of knowledge",
            "Collect and select the relevant material",
            "Organise the content into introduction, body and conclusion",
            "Prepare simple and readable visual aids",
            "Rehearse with a clock to fit the time allotted",
            "Anticipate likely questions and prepare answers",
        ]),

        heading("Delivering a Presentation"),

        list([
            "Begin with a greeting and state your name and topic.",
            "Give an outline of what you will cover.",
            "Maintain eye contact across the whole audience.",
            "Speak clearly and vary your tone to hold attention.",
            "Use the visual aids to support, not replace, your words.",
            "Keep to the time allotted.",
            "Summarise the main points before closing.",
            "Invite questions and answer them briefly and honestly.",
        ]),

        heading("Interview Skills"),

        definition(
            "Interview",
            "A formal conversation in which an employer assesses whether a candidate is suitable for a position."
        ),

        heading("Types of Interview"),

        table(
            ["Type", "Description"],
            [
                ["Personal interview", "One interviewer and one candidate."],
                ["Panel interview", "Several interviewers question one candidate."],
                ["Group interview", "Several candidates interviewed together."],
                ["Telephone interview", "Conducted over the phone for initial screening."],
                ["Video interview", "Conducted online through video conferencing."],
                ["Technical interview", "Focused on subject knowledge and problem solving."],
                ["Stress interview", "Deliberately pressurised to test composure."],
            ]
        ),

        heading("Preparing for an Interview"),

        steps([
            "Research the company, its products and its recent news",
            "Study the job description and match it with your skills",
            "Revise your subject fundamentals and your project work",
            "Prepare answers to common questions and rehearse them",
            "Prepare two or three questions to ask the interviewer",
            "Keep your certificates and resume copies ready",
            "Plan your clothing and your route in advance",
        ]),

        heading("Common Interview Questions"),

        table(
            ["Question", "How to Approach It"],
            [
                ["Tell me about yourself", "Give a brief professional summary, not a life story."],
                ["Why should we hire you", "Match your strengths to the requirements of the job."],
                ["What are your strengths", "Give two or three strengths with real examples."],
                ["What are your weaknesses", "Mention a genuine weakness and how you are addressing it."],
                ["Where do you see yourself in five years", "Show ambition that fits the company."],
                ["Why do you want this job", "Show knowledge of the company and genuine interest."],
                ["Do you have any questions", "Always ask something thoughtful about the role."],
            ]
        ),

        note(
            "Never answer that you have no questions for the interviewer. It suggests a lack of interest. Ask about the training provided, the team structure or the technologies used.",
            "warning",
            "Common Mistake"
        ),

        heading("Interview Etiquette"),

        table(
            ["Do", "Do Not"],
            [
                ["Arrive ten to fifteen minutes early", "Do not arrive late"],
                ["Dress formally and neatly", "Do not dress casually"],
                ["Greet and shake hands firmly", "Do not sit before being invited"],
                ["Maintain eye contact", "Do not stare at the floor"],
                ["Listen fully before answering", "Do not interrupt the interviewer"],
                ["Answer honestly", "Do not exaggerate or lie"],
                ["Thank the panel while leaving", "Do not criticise a former employer"],
            ]
        ),

        heading("Resume Writing"),

        definition(
            "Resume",
            "A brief document summarising a candidate's education, skills, experience and achievements."
        ),

        table(
            ["Section", "Content"],
            [
                ["Personal details", "Name, address, phone number and email."],
                ["Career objective", "A short statement of your professional goal."],
                ["Education", "Qualifications in reverse chronological order."],
                ["Technical skills", "Programming languages, tools and software."],
                ["Projects", "Title, technologies used and a brief description."],
                ["Experience", "Internships and part time work if any."],
                ["Achievements", "Certificates, competitions and awards."],
                ["Declaration", "A statement that the details are true."],
            ]
        ),

        heading("Resume Writing Tips"),

        list([
            "Keep it to one or two pages for a fresher.",
            "Use a clean and consistent format.",
            "Use action words such as developed, designed and implemented.",
            "Tailor the resume to each job applied for.",
            "Avoid spelling and grammatical errors completely.",
            "Use a professional email address.",
            "Do not include false information.",
        ]),

        heading("Resume versus Curriculum Vitae"),

        table(
            ["Basis", "Resume", "Curriculum Vitae"],
            [
                ["Length", "One or two pages", "Three or more pages"],
                ["Content", "Skills relevant to a specific job", "Complete academic and professional history"],
                ["Purpose", "Applying for a job in industry", "Academic and research positions"],
                ["Customisation", "Tailored for each application", "Generally remains the same"],
            ]
        ),

        keyPoints([
            "The four Ps of presentation are plan, prepare, practise and present.",
            "Visual aids should support the speaker, not replace the speech.",
            "Interview preparation includes research, rehearsal and readiness of documents.",
            "Always prepare a thoughtful question to ask the interviewer.",
            "A resume is short and job specific while a curriculum vitae is long and complete.",
        ]),
    ],

    {
        summary:
            "Master oral presentations, interview preparation and etiquette, and the writing of an effective resume.",
        minutes: 11,
        tags: ["presentation", "interview", "resume", "important"],

        mcqs: [
            mcq(
                "Which is NOT one of the four Ps of presentation?",
                ["Plan", "Prepare", "Publish", "Present"],
                2,
                "The four Ps are plan, prepare, practise and present."
            ),
            mcq(
                "When asked if you have any questions, you should:",
                [
                    "Say no politely",
                    "Ask a thoughtful question",
                    "Ask about salary only",
                    "Remain silent",
                ],
                1,
                "A thoughtful question shows genuine interest in the role."
            ),
            mcq(
                "An interview conducted by several interviewers at once is called a:",
                ["Group interview", "Panel interview", "Stress interview", "Telephone interview"],
                1,
                "A panel interview has several interviewers and one candidate."
            ),
            mcq(
                "A resume for a fresher should ideally be:",
                ["One or two pages", "Five pages", "Ten pages", "As long as possible"],
                0,
                "A fresher's resume should be brief, at most two pages."
            ),
            mcq(
                "Which document is longer and covers a complete academic history?",
                ["Resume", "Curriculum vitae", "Cover letter", "Application"],
                1,
                "A curriculum vitae is longer and more comprehensive than a resume."
            ),
            mcq(
                "One should arrive for an interview:",
                [
                    "Exactly on time",
                    "Ten to fifteen minutes early",
                    "An hour early",
                    "A few minutes late",
                ],
                1,
                "Arriving slightly early shows punctuality without inconvenience."
            ),
        ],

        questions: [
            qa(
                "Explain the four Ps of an effective presentation.",
                "The first P is plan, which means deciding the objective, analysing the audience and selecting the content. The second is prepare, which involves researching the material and designing simple readable visual aids. The third is practise, which means rehearsing aloud and timing the delivery so that it fits the allotted period. The fourth is present, which means delivering the material confidently with eye contact, clear speech and engagement with the audience.",
                4
            ),
            qa(
                "How should a candidate prepare for an interview?",
                "The candidate should research the company, its products and its recent developments, and study the job description to match it with personal skills. Subject fundamentals and project work should be revised thoroughly. Answers to common questions should be prepared and rehearsed, and two or three thoughtful questions should be ready for the interviewer. Certificates and copies of the resume should be organised in advance, and the clothing and route should be planned so that the candidate arrives early and calm.",
                5
            ),
            qa(
                "What is a resume? Explain its sections.",
                "A resume is a brief document summarising a candidate's education, skills, experience and achievements. It begins with personal details such as name, address, phone number and email, followed by a short career objective. The education section lists qualifications in reverse chronological order. Technical skills list the programming languages and tools known. The projects section describes work done with the technologies used. Experience covers internships, achievements list certificates and awards, and a declaration states that the information is true.",
                5
            ),
            qa(
                "Differentiate between a resume and a curriculum vitae.",
                "A resume is a brief document of one or two pages that highlights only the skills and experience relevant to a particular job, and it is customised for each application, being used mainly in industry. A curriculum vitae is a longer document of three or more pages that presents the complete academic and professional history of the candidate, generally remains the same for every application, and is used mainly for academic and research positions.",
                3
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit2Topics = [
    fundamentalsOfWriting,
    letterWriting,
    emailAndReports,
    speakingSkills,
    presentationAndInterview,
];