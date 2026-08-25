/* =========================================================
   BCA • SEM 6 • Business Communication and Etiquettes
   UNIT 1 — Fundamentals of Business Communication
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
   TOPIC 1 — Introduction to Business Communication
========================================================= */

const introBusinessComm = createTopic(
    "introduction-to-business-communication",
    "Introduction to Business Communication",

    [
        definition(
            "Communication",
            "Communication is the process of exchanging information, ideas, thoughts, feelings and emotions between two or more people through a common system of symbols, signs or behaviour."
        ),

        definition(
            "Business Communication",
            "Business communication is the sharing of information between people within and outside an organisation for the purpose of achieving organisational goals, promoting products, managing operations and building relationships."
        ),

        text(
            "In today's competitive business environment, effective communication is the backbone of every successful organisation. It influences decision-making, productivity, employee morale, customer satisfaction and brand reputation."
        ),

        heading("Importance of Business Communication"),

        list([
            "Facilitates smooth flow of information within the organisation.",
            "Helps in planning, decision-making and problem-solving.",
            "Builds strong relationships with clients, partners and stakeholders.",
            "Improves employee productivity and morale.",
            "Enhances brand image and customer satisfaction.",
            "Reduces misunderstandings, conflicts and errors.",
            "Supports marketing, sales and negotiation efforts.",
            "Essential for leadership, teamwork and organisational growth.",
        ]),

        heading("Communication Process"),

        steps([
            "Sender has an idea or message to convey.",
            "Sender encodes the message into words, symbols or gestures.",
            "Message is transmitted through a channel (email, phone, face-to-face).",
            "Receiver receives the message.",
            "Receiver decodes and interprets the message.",
            "Receiver provides feedback to the sender.",
            "Noise may interfere at any stage of the process.",
        ]),

        heading("Elements of Communication"),

        table(
            ["Element", "Description"],
            [
                ["Sender", "Person who initiates the message"],
                ["Message", "Information or idea being communicated"],
                ["Encoding", "Converting idea into words or symbols"],
                ["Channel", "Medium used (email, phone, meeting)"],
                ["Receiver", "Person who receives the message"],
                ["Decoding", "Interpreting the received message"],
                ["Feedback", "Response from receiver to sender"],
                ["Noise", "Any disturbance that affects communication"],
                ["Context", "Situation or environment of communication"],
            ]
        ),

        heading("Types of Communication"),

        heading("Based on Direction"),

        table(
            ["Type", "Direction", "Example"],
            [
                ["Downward", "Superior to subordinate", "Manager giving instructions"],
                ["Upward", "Subordinate to superior", "Employee submitting report"],
                ["Horizontal", "Same level", "Colleagues discussing project"],
                ["Diagonal", "Different levels and departments", "Developer talking to HR"],
            ]
        ),

        heading("Based on Medium"),

        table(
            ["Type", "Description", "Example"],
            [
                ["Verbal", "Uses spoken words", "Meetings, phone calls, presentations"],
                ["Non-Verbal", "Uses body language", "Gestures, facial expressions, posture"],
                ["Written", "Uses written words", "Emails, letters, reports, memos"],
                ["Visual", "Uses images and graphics", "Charts, infographics, videos"],
            ]
        ),

        heading("Based on Formality"),

        table(
            ["Type", "Description", "Example"],
            [
                ["Formal", "Follows official channels and rules", "Official letters, board meetings"],
                ["Informal", "Casual, no fixed rules", "Water-cooler chat, grapevine"],
            ]
        ),

        heading("7 Cs of Effective Communication"),

        table(
            ["C", "Meaning"],
            [
                ["Clear", "Message should be easy to understand"],
                ["Concise", "Keep it brief and to the point"],
                ["Concrete", "Use specific facts and figures"],
                ["Correct", "Grammar, facts and format must be accurate"],
                ["Coherent", "Logical flow and connection of ideas"],
                ["Complete", "Include all necessary information"],
                ["Courteous", "Be polite, respectful and considerate"],
            ]
        ),

        note(
            "The 7 Cs are the golden rules of business communication. Every email, letter, report and presentation should be checked against these principles before sending.",
            "tip",
            "Golden Rules"
        ),

        keyPoints([
            "Communication is a two-way process with feedback.",
            "Business communication serves organisational goals.",
            "The process includes sender, message, channel, receiver and feedback.",
            "Communication can be verbal, non-verbal, written or visual.",
            "The 7 Cs ensure effective and professional communication.",
        ]),
    ],

    {
        summary:
            "Understand the meaning, process, types and 7 Cs of effective business communication.",
        minutes: 11,
        tags: ["communication", "basics", "7cs", "important"],

        mcqs: [
            mcq(
                "Which is NOT an element of communication?",
                ["Sender", "Receiver", "Profit", "Feedback"],
                2,
                "Profit is not an element of communication process."
            ),
            mcq(
                "Downward communication flows from:",
                ["Subordinate to boss", "Boss to subordinate", "Peer to peer", "Client to company"],
                1,
                "Downward communication flows from superior to subordinate."
            ),
            mcq(
                "Which C means keeping the message brief?",
                ["Clear", "Concrete", "Concise", "Correct"],
                2,
                "Concise means brief and to the point."
            ),
            mcq(
                "Grapevine is an example of:",
                ["Formal communication", "Informal communication", "Written communication", "Visual communication"],
                1,
                "Grapevine is informal communication."
            ),
        ],

        questions: [
            qa(
                "Define business communication and explain its importance.",
                "Business communication is the process of sharing information, ideas and messages within and outside an organisation to achieve business objectives. It includes internal communication among employees and management, and external communication with customers, suppliers, investors and the public. Its importance includes: facilitating smooth information flow for decision-making, improving employee productivity and teamwork, building strong client relationships, enhancing brand image and customer satisfaction, reducing misunderstandings and workplace conflicts, supporting marketing and negotiation, and enabling effective leadership. In today's global and digital business environment, poor communication can lead to lost revenue, damaged reputation and low morale, making it one of the most critical skills for professional success.",
                4
            ),
            qa(
                "Explain the 7 Cs of effective communication.",
                "The 7 Cs are principles that ensure communication is effective and professional. Clear: the message should be simple and easy to understand, avoiding jargon. Concise: keep the message brief without unnecessary words. Concrete: use specific facts, figures and examples rather than vague statements. Correct: ensure grammar, spelling, facts and format are accurate. Coherent: ideas should flow logically and be well-connected. Complete: include all necessary information so the receiver can take action. Courteous: be polite, respectful and considerate of the receiver's feelings and perspective. For example, instead of writing 'Send the stuff ASAP', a 7 Cs compliant message would be 'Please send the Q3 sales report by Friday, 5 PM'. These principles apply to all forms of business communication including emails, letters, reports and presentations.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — Barriers to Communication
========================================================= */

const barriersComm = createTopic(
    "barriers-to-communication",
    "Barriers to Communication",

    [
        definition(
            "Communication Barrier",
            "A communication barrier is any obstacle that prevents the message from being properly sent, received or understood, leading to miscommunication or complete breakdown of communication."
        ),

        text(
            "Understanding barriers is essential because even the best message fails if it cannot reach the receiver in its intended form. Barriers can exist at any stage of the communication process."
        ),

        heading("Types of Communication Barriers"),

        heading("1. Physical Barriers"),

        list([
            "Geographical distance between sender and receiver.",
            "Noise from machines, traffic or construction.",
            "Poor infrastructure such as bad phone lines or slow internet.",
            "Physical obstacles like closed doors or separate floors.",
            "Time zone differences in global organisations.",
            "Poor lighting, uncomfortable temperature or seating.",
        ]),

        heading("2. Language Barriers"),

        list([
            "Use of different languages or dialects.",
            "Complex jargon and technical terminology.",
            "Ambiguous words with multiple meanings.",
            "Poor grammar and vocabulary.",
            "Accents and pronunciation differences.",
            "Use of slang or regional expressions.",
        ]),

        heading("3. Psychological Barriers"),

        list([
            "Prejudices and preconceived notions about the sender.",
            "Emotional state such as anger, fear or stress.",
            "Lack of attention or interest in the message.",
            "Information overload causing confusion.",
            "Selective perception based on personal beliefs.",
            "Distrust or suspicion towards the sender.",
            "Premature evaluation before hearing the full message.",
        ]),

        heading("4. Organisational Barriers"),

        list([
            "Rigid hierarchy and excessive rules.",
            "Too many levels of management causing message distortion.",
            "Unclear organisational policies and procedures.",
            "Lack of proper communication channels.",
            "Information hoarding by managers.",
            "Overloaded communication channels.",
        ]),

        heading("5. Cultural Barriers"),

        list([
            "Different cultural norms and values.",
            "Varying attitudes towards authority and hierarchy.",
            "Different concepts of time (punctuality expectations).",
            "Varied non-verbal communication meanings.",
            "Different approaches to direct vs indirect communication.",
            "Religious and social customs.",
        ]),

        heading("6. Technological Barriers"),

        list([
            "System failures and software crashes.",
            "Lack of digital literacy among employees.",
            "Incompatible software or platforms.",
            "Cybersecurity restrictions blocking communication.",
            "Poor audio/video quality in virtual meetings.",
            "Over-reliance on technology reducing personal interaction.",
        ]),

        heading("7. Semantic Barriers"),

        list([
            "Words with multiple meanings (e.g., 'bank', 'right').",
            "Faulty translations.",
            "Denotation vs connotation differences.",
            "Use of abbreviations unknown to receiver.",
            "Technical terms not understood by laypersons.",
        ]),

        heading("Overcoming Communication Barriers"),

        table(
            ["Barrier", "Solution"],
            [
                ["Physical", "Use better technology, reduce noise, arrange face-to-face meetings"],
                ["Language", "Use simple language, avoid jargon, provide translations"],
                ["Psychological", "Build trust, manage emotions, encourage open dialogue"],
                ["Organisational", "Flatten hierarchy, create clear channels, encourage feedback"],
                ["Cultural", "Provide cross-cultural training, respect diversity"],
                ["Technological", "Train employees, upgrade systems, have backup plans"],
                ["Semantic", "Use clear words, define terms, confirm understanding"],
            ]
        ),

        note(
            "The most effective way to overcome barriers is to encourage two-way communication with active feedback. Always ask 'Did you understand?' and invite questions.",
            "tip",
            "Key Solution"
        ),

        keyPoints([
            "Barriers distort or block the message at any stage.",
            "Physical barriers include noise, distance and infrastructure.",
            "Psychological barriers include emotions, bias and overload.",
            "Cultural barriers arise from different norms and values.",
            "Two-way feedback is the best way to overcome barriers.",
        ]),
    ],

    {
        summary:
            "Learn the types of communication barriers and strategies to overcome them in business settings.",
        minutes: 11,
        tags: ["barriers", "communication", "solutions", "important"],

        mcqs: [
            mcq(
                "Use of jargon is which type of barrier?",
                ["Physical", "Language", "Psychological", "Organisational"],
                1,
                "Jargon creates language barriers."
            ),
            mcq(
                "Information overload is a:",
                ["Physical barrier", "Cultural barrier", "Psychological barrier", "Semantic barrier"],
                2,
                "Information overload is a psychological barrier."
            ),
            mcq(
                "Which is the best way to overcome barriers?",
                ["Speak louder", "Use more jargon", "Encourage feedback", "Avoid communication"],
                2,
                "Two-way feedback helps identify and overcome barriers."
            ),
            mcq(
                "Time zone difference is a:",
                ["Language barrier", "Physical barrier", "Cultural barrier", "Semantic barrier"],
                1,
                "Time zone differences are physical barriers."
            ),
        ],

        questions: [
            qa(
                "Explain different types of communication barriers with examples.",
                "Communication barriers are obstacles that prevent effective message delivery. Physical barriers include noise, distance and poor infrastructure; for example, a factory worker cannot hear instructions over machine noise. Language barriers arise from jargon, complex vocabulary or different languages; a doctor using medical terms with a patient creates confusion. Psychological barriers include emotions, prejudice and information overload; an angry employee may not listen to constructive feedback. Organisational barriers include rigid hierarchy and unclear channels; a message passing through five managers gets distorted. Cultural barriers arise from different norms; a thumbs-up gesture is positive in the US but offensive in some Middle Eastern countries. Technological barriers include system failures and poor connectivity. Semantic barriers involve words with multiple meanings. Understanding these barriers helps organisations design better communication strategies.",
                4
            ),
            qa(
                "Suggest measures to overcome communication barriers.",
                "Several measures can overcome communication barriers. For physical barriers, use video conferencing for remote teams, reduce workplace noise and ensure reliable infrastructure. For language barriers, use simple and clear language, avoid jargon, provide translations and confirm understanding. For psychological barriers, build trust through transparency, manage emotions before important conversations, and break large information into smaller chunks. For organisational barriers, flatten hierarchy, establish clear communication channels, hold regular meetings and encourage open-door policies. For cultural barriers, provide cross-cultural training, respect diversity and adapt communication style to the audience. For technological barriers, train employees on tools, maintain backup systems and balance digital with face-to-face interaction. The most important measure across all barriers is encouraging two-way feedback to ensure the message was correctly understood.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — Written Business Communication
========================================================= */

const writtenComm = createTopic(
    "written-business-communication",
    "Written Business Communication",

    [
        definition(
            "Written Communication",
            "Written communication is any message conveyed through written words, including letters, emails, memos, reports, proposals and notices. It provides a permanent record and is essential for formal business interactions."
        ),

        heading("Advantages of Written Communication"),

        list([
            "Provides a permanent record for future reference.",
            "Can be revised and edited before sending.",
            "Suitable for complex and detailed information.",
            "Legally valid as evidence.",
            "Can reach a large audience simultaneously.",
            "Ensures uniformity of message.",
            "Helps in maintaining organisational documentation.",
        ]),

        heading("Disadvantages"),

        list([
            "Time-consuming to prepare.",
            "No immediate feedback.",
            "Lacks personal touch and emotional expression.",
            "Can be misinterpreted without tone and body language.",
            "Requires good writing skills.",
        ]),

        heading("Business Letter"),

        definition(
            "Business Letter",
            "A formal written document sent from one organisation or person to another for official purposes such as enquiries, orders, complaints, applications and recommendations."
        ),

        heading("Parts of a Business Letter"),

        table(
            ["Part", "Description"],
            [
                ["Letterhead", "Company name, logo, address, contact"],
                ["Date", "Date of writing"],
                ["Inside Address", "Recipient's name, title, address"],
                ["Salutation", "Dear Sir/Madam, Dear Mr. Sharma"],
                ["Subject Line", "Brief purpose of the letter"],
                ["Body", "Introduction, details, conclusion"],
                ["Complimentary Close", "Yours sincerely, Yours faithfully"],
                ["Signature", "Handwritten signature and typed name"],
                ["Enclosures", "List of attached documents"],
            ]
        ),

        heading("Business Letter Format"),

        code(
            `ABC Technologies Pvt. Ltd.
123, Business Park, Ahmedabad - 380015
Phone: +91-79-1234567 | Email: info@abc.com
───────────────────────────────────────────

Date: 15 June 2025

The Manager
XYZ Supplies Ltd.
456, Industrial Area, Surat - 395002

Subject: Enquiry for Bulk Order of Laptops

Dear Sir/Madam,

We are pleased to inform you that our company is
expanding its operations and requires 50 laptops
for our new development team.

We would like to know the following details:
1. Available models and specifications
2. Bulk discount for orders above 25 units
3. Warranty and after-sales service terms
4. Estimated delivery timeline

Kindly send your quotation at the earliest. We
look forward to a long-term business relationship.

Yours sincerely,

(Signature)
Amit Patel
Procurement Manager
ABC Technologies Pvt. Ltd.

Encl: Company Registration Certificate`,
            "text",
            "Business letter format"
        ),

        heading("Types of Business Letters"),

        table(
            ["Type", "Purpose"],
            [
                ["Enquiry Letter", "Request information about products/services"],
                ["Order Letter", "Place an order for goods"],
                ["Complaint Letter", "Report a problem or dissatisfaction"],
                ["Adjustment Letter", "Respond to a complaint"],
                ["Sales Letter", "Promote products or services"],
                ["Application Letter", "Apply for a job or position"],
                ["Recommendation Letter", "Recommend someone for a position"],
                ["Collection Letter", "Request overdue payment"],
                ["Circular Letter", "Send same message to many recipients"],
            ]
        ),

        heading("Business Email"),

        definition(
            "Business Email",
            "An electronic message used for professional communication. It is the most widely used form of written business communication today due to its speed, convenience and low cost."
        ),

        heading("Email Structure"),

        code(
            `To: riya.sharma@company.com
Cc: manager@company.com
Bcc: (use sparingly)
Subject: Q3 Sales Report - Action Required by Friday

Dear Riya,

I hope this email finds you well.

Please find attached the Q3 sales report for your
review. The key highlights are:

• Total revenue: ₹45 Lakhs (12% growth)
• Top product: Cloud Suite Pro
• New clients acquired: 28

Kindly review the report and share your feedback
by Friday, 20 June 2025, so we can finalise the
presentation for the board meeting.

If you have any questions, feel free to reach out.

Best regards,
Amit Patel
Senior Analyst | ABC Technologies
Phone: +91-9876543210`,
            "text",
            "Professional email format"
        ),

        heading("Email Etiquette Rules"),

        list([
            "Use a clear, specific subject line.",
            "Keep the email concise and focused.",
            "Use professional greeting and closing.",
            "Proofread before sending.",
            "Reply within 24 hours.",
            "Use CC and BCC appropriately.",
            "Avoid writing in ALL CAPS (it looks like shouting).",
            "Be careful with 'Reply All'.",
            "Attach files before writing 'Please find attached'.",
            "Use professional email address (not coolguy123@).",
        ]),

        heading("Memo (Memorandum)"),

        code(
            `MEMORANDUM
────────────────────────────────────
To:      All Employees
From:    HR Department
Date:    15 June 2025
Subject: Revised Work-From-Home Policy
────────────────────────────────────

Effective 1 July 2025, the work-from-home policy
has been revised as follows:

1. Employees may work from home up to 2 days/week.
2. Prior approval from team lead is required.
3. Core hours (10 AM - 4 PM) must be maintained.
4. Monthly WFH limit: 8 working days.

Please contact HR for any queries.

Thank you.
HR Department`,
            "text",
            "Memo format"
        ),

        heading("Business Report"),

        table(
            ["Section", "Content"],
            [
                ["Title Page", "Report title, author, date, organisation"],
                ["Executive Summary", "Brief overview of entire report"],
                ["Table of Contents", "List of sections with page numbers"],
                ["Introduction", "Purpose, scope and background"],
                ["Methodology", "How data was collected"],
                ["Findings", "Data analysis and results"],
                ["Conclusions", "Summary of key findings"],
                ["Recommendations", "Suggested actions"],
                ["References", "Sources of information"],
                ["Appendices", "Supporting data, charts, tables"],
            ]
        ),

        note(
            "Always tailor your writing style to the audience. A technical report for engineers differs from a sales proposal for clients. Know your reader before you write.",
            "tip",
            "Audience Awareness"
        ),

        keyPoints([
            "Written communication provides permanent records.",
            "Business letters follow a standard formal format.",
            "Emails should be concise with clear subject lines.",
            "Memos are used for internal communication.",
            "Reports follow a structured format with findings and recommendations.",
        ]),
    ],

    {
        summary:
            "Master written business communication including letters, emails, memos and reports with proper formats.",
        minutes: 13,
        tags: ["written", "letter", "email", "memo", "report", "important"],

        mcqs: [
            mcq(
                "Which is NOT a part of a business letter?",
                ["Salutation", "Subject line", "Hashtag", "Complimentary close"],
                2,
                "Hashtag is not part of a business letter."
            ),
            mcq(
                "Writing in ALL CAPS in email is considered:",
                ["Professional", "Shouting", "Creative", "Required"],
                1,
                "ALL CAPS is perceived as shouting in email."
            ),
            mcq(
                "Memo is primarily used for:",
                ["External communication", "Internal communication", "Legal purposes", "Marketing"],
                1,
                "Memos are used for internal organisational communication."
            ),
            mcq(
                "Which section comes first in a report?",
                ["Findings", "Recommendations", "Executive Summary", "Appendices"],
                2,
                "Executive Summary appears at the beginning of a report."
            ),
        ],

        questions: [
            qa(
                "Explain the format of a business letter with example.",
                "A business letter follows a standard formal format with specific parts. The letterhead contains company name, logo, address and contact details at the top. Below it is the date, followed by the inside address (recipient's name, designation and address). The salutation greets the recipient (Dear Sir/Madam or Dear Mr. Sharma). A subject line briefly states the purpose. The body has three paragraphs: introduction stating the purpose, middle providing details, and conclusion with call to action. The complimentary close (Yours sincerely for known recipient, Yours faithfully for unknown) is followed by signature, typed name and designation. Enclosures are listed if documents are attached. Business letters are used for enquiries, orders, complaints, applications and recommendations. The tone should be formal, polite and professional throughout.",
                4
            ),
            qa(
                "What are the key rules of professional email etiquette?",
                "Professional email etiquette ensures clear and respectful communication. Use a specific subject line that indicates the email's purpose, such as 'Q3 Report - Review by Friday' rather than vague 'Hi'. Use professional greetings (Dear, Hello) and closings (Best regards, Sincerely). Keep the email concise and focused on one topic. Use bullet points for readability. Proofread for grammar and spelling errors before sending. Reply within 24 hours to show professionalism. Use CC for people who need to be informed and BCC sparingly for privacy. Avoid ALL CAPS, excessive exclamation marks and informal language. Be careful with 'Reply All' to avoid spamming. Always attach files before mentioning them. Use a professional email address. Maintain a professional signature with name, designation and contact details.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — Verbal and Non-Verbal Communication
========================================================= */

const verbalNonVerbal = createTopic(
    "verbal-and-non-verbal-communication",
    "Verbal and Non-Verbal Communication",

    [
        definition(
            "Verbal Communication",
            "Verbal communication is the use of spoken or written words to convey a message. In business, it includes face-to-face conversations, phone calls, meetings, presentations and speeches."
        ),

        definition(
            "Non-Verbal Communication",
            "Non-verbal communication is the transmission of messages without words, using body language, facial expressions, gestures, posture, eye contact, tone of voice and physical appearance."
        ),

        heading("Verbal vs Non-Verbal Communication"),

        table(
            ["Basis", "Verbal", "Non-Verbal"],
            [
                ["Medium", "Words (spoken/written)", "Body language, expressions"],
                ["Structure", "Highly structured", "Less structured"],
                ["Evidence", "Can be documented", "Difficult to document"],
                ["Conscious", "Usually conscious", "Often unconscious"],
                ["Impact", "7% (words only)", "93% (tone + body language)"],
                ["Clarity", "More precise", "Can be ambiguous"],
                ["Speed", "Slower", "Instantaneous"],
            ]
        ),

        note(
            "According to Albert Mehrabian's research, in face-to-face communication about feelings and attitudes, words account for only 7%, tone of voice for 38% and body language for 55% of the total message impact.",
            "info",
            "Mehrabian's Rule"
        ),

        heading("Components of Non-Verbal Communication"),

        heading("1. Facial Expressions"),

        list([
            "The face is the most expressive part of the body.",
            "Smile conveys friendliness and approachability.",
            "Frowning indicates confusion or disapproval.",
            "Raised eyebrows show surprise or interest.",
            "Facial expressions are largely universal across cultures.",
        ]),

        heading("2. Eye Contact"),

        list([
            "Maintaining eye contact shows confidence and sincerity.",
            "Avoiding eye contact may suggest dishonesty or nervousness.",
            "Staring too intensely can be intimidating.",
            "Ideal: maintain eye contact 60-70% of the time.",
            "In some cultures, direct eye contact with elders is disrespectful.",
        ]),

        heading("3. Gestures"),

        list([
            "Hand movements that emphasise or replace words.",
            "Thumbs up: approval (but offensive in some cultures).",
            "Open palms: honesty and openness.",
            "Crossed arms: defensiveness or resistance.",
            "Pointing finger: can be seen as aggressive.",
            "Nodding: agreement and active listening.",
        ]),

        heading("4. Posture"),

        list([
            "Upright posture conveys confidence and professionalism.",
            "Slouching suggests disinterest or low energy.",
            "Leaning forward shows engagement and interest.",
            "Leaning back may indicate relaxation or arrogance.",
            "Mirroring the other person's posture builds rapport.",
        ]),

        heading("5. Proxemics (Personal Space)"),

        table(
            ["Zone", "Distance", "Use"],
            [
                ["Intimate", "0 - 1.5 feet", "Close family, partners"],
                ["Personal", "1.5 - 4 feet", "Friends, close colleagues"],
                ["Social", "4 - 12 feet", "Business meetings, acquaintances"],
                ["Public", "12+ feet", "Presentations, speeches"],
            ]
        ),

        heading("6. Paralanguage (Voice Quality)"),

        list([
            "Tone: conveys emotion (warm, cold, sarcastic).",
            "Pitch: high pitch may indicate nervousness.",
            "Volume: loud can be aggressive, soft may lack confidence.",
            "Speed: fast suggests excitement or nervousness.",
            "Pauses: strategic pauses add emphasis and clarity.",
            "Fillers: 'um', 'uh', 'like' reduce credibility.",
        ]),

        heading("7. Appearance and Dress"),

        list([
            "First impressions are formed within 7 seconds.",
            "Professional attire conveys competence and respect.",
            "Grooming reflects attention to detail.",
            "Dress code varies by industry and culture.",
            "Accessories should be minimal and professional.",
        ]),

        heading("Improving Verbal Communication"),

        list([
            "Speak clearly and at a moderate pace.",
            "Use simple, precise language.",
            "Organise thoughts before speaking.",
            "Vary tone and pitch to maintain interest.",
            "Avoid filler words (um, uh, you know).",
            "Use pauses for emphasis.",
            "Adapt vocabulary to the audience.",
            "Practice active listening.",
            "Ask clarifying questions.",
            "Summarise key points at the end.",
        ]),

        heading("Improving Non-Verbal Communication"),

        list([
            "Maintain appropriate eye contact.",
            "Use open body posture.",
            "Smile genuinely during greetings.",
            "Give a firm but not crushing handshake.",
            "Nod to show you are listening.",
            "Avoid crossing arms or legs defensively.",
            "Mirror the other person's body language subtly.",
            "Be aware of cultural differences in gestures.",
            "Control facial expressions during negotiations.",
            "Dress appropriately for the occasion.",
        ]),

        keyPoints([
            "Non-verbal cues carry more weight than words in face-to-face interaction.",
            "Eye contact, posture and gestures reveal true feelings.",
            "Paralanguage (tone, pitch, speed) affects message interpretation.",
            "First impressions are formed within seconds based on appearance.",
            "Cultural awareness is essential for non-verbal communication.",
        ]),
    ],

    {
        summary:
            "Understand verbal and non-verbal communication including body language, eye contact, gestures, proxemics and paralanguage.",
        minutes: 12,
        tags: ["verbal", "non-verbal", "body-language", "important"],

        mcqs: [
            mcq(
                "According to Mehrabian, body language accounts for:",
                ["7%", "38%", "55%", "93%"],
                2,
                "Body language accounts for 55% of message impact."
            ),
            mcq(
                "Crossed arms usually indicate:",
                ["Openness", "Defensiveness", "Happiness", "Confusion"],
                1,
                "Crossed arms suggest defensiveness or resistance."
            ),
            mcq(
                "Social distance zone is:",
                ["0-1.5 feet", "1.5-4 feet", "4-12 feet", "12+ feet"],
                2,
                "Social zone is 4-12 feet for business interactions."
            ),
            mcq(
                "Paralanguage refers to:",
                ["Written words", "Body posture", "Voice quality", "Dress code"],
                2,
                "Paralanguage includes tone, pitch, volume and speed."
            ),
        ],

        questions: [
            qa(
                "Differentiate between verbal and non-verbal communication.",
                "Verbal communication uses spoken or written words to convey messages, while non-verbal communication uses body language, facial expressions, gestures, posture, eye contact and tone of voice. Verbal communication is highly structured, conscious and can be documented easily. Non-verbal communication is often unconscious, instantaneous and difficult to document. According to Mehrabian's research, in face-to-face communication about feelings, words contribute only 7%, tone of voice 38% and body language 55%. Verbal communication is more precise and suitable for complex information, while non-verbal communication reveals true emotions and attitudes. Both work together in face-to-face interactions; when they contradict, people tend to believe the non-verbal cues. Effective communicators align their verbal and non-verbal messages for maximum impact.",
                4
            ),
            qa(
                "Explain the components of non-verbal communication.",
                "Non-verbal communication has several key components. Facial expressions are the most universal, with smiles, frowns and raised eyebrows conveying emotions across cultures. Eye contact shows confidence and sincerity; maintaining it 60-70% of the time is ideal. Gestures like open palms show honesty, while crossed arms indicate defensiveness. Posture communicates attitude; upright posture shows confidence, while slouching suggests disinterest. Proxemics deals with personal space zones: intimate (0-1.5 ft), personal (1.5-4 ft), social (4-12 ft) and public (12+ ft). Paralanguage includes voice qualities like tone, pitch, volume and speed that affect how words are interpreted. Appearance and dress create first impressions within seconds. All these components work together and must be culturally appropriate, as the same gesture can have different meanings in different cultures.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 5 — Presentation and Listening Skills
========================================================= */

const presentationListening = createTopic(
    "presentation-and-listening-skills",
    "Presentation and Listening Skills",

    [
        definition(
            "Presentation",
            "A presentation is a formal method of communicating information, ideas or proposals to an audience using spoken words, visual aids and body language to inform, persuade or inspire."
        ),

        heading("Types of Presentations"),

        table(
            ["Type", "Purpose", "Example"],
            [
                ["Informative", "Share knowledge", "Training session"],
                ["Persuasive", "Convince audience", "Sales pitch"],
                ["Demonstrative", "Show how something works", "Product demo"],
                ["Inspirational", "Motivate audience", "Keynote speech"],
                ["Decision-making", "Help audience decide", "Project proposal"],
            ]
        ),

        heading("Steps to Prepare a Presentation"),

        steps([
            "Analyse the audience: Who are they? What do they know? What do they need?",
            "Define the objective: What do you want the audience to learn or do?",
            "Research and gather content: Collect data, facts, examples and stories.",
            "Organise the structure: Introduction, body and conclusion.",
            "Create visual aids: Slides, charts, images and videos.",
            "Practice delivery: Rehearse timing, tone and body language.",
            "Prepare for Q&A: Anticipate questions and prepare answers.",
            "Check logistics: Venue, equipment, internet and backup plans.",
        ]),

        heading("Presentation Structure"),

        table(
            ["Part", "Duration", "Content"],
            [
                ["Introduction", "10-15%", "Hook, greeting, topic overview, agenda"],
                ["Body", "70-80%", "Main points with evidence, examples, visuals"],
                ["Conclusion", "10-15%", "Summary, call to action, Q&A"],
            ]
        ),

        heading("Introduction Techniques (Hooks)"),

        list([
            "Start with a surprising statistic or fact.",
            "Tell a relevant story or anecdote.",
            "Ask a thought-provoking question.",
            "Use a powerful quote.",
            "Show a striking image or short video.",
            "Present a problem the audience faces.",
        ]),

        heading("Slide Design Tips"),

        list([
            "Follow the 6x6 rule: max 6 bullet points, 6 words each.",
            "Use large, readable fonts (minimum 24pt).",
            "Use high-contrast colours (dark text on light background).",
            "Include relevant images, charts and infographics.",
            "Avoid walls of text; use keywords only.",
            "Maintain consistent design throughout.",
            "Use animations sparingly and purposefully.",
            "Number your slides.",
            "Include your contact information on the last slide.",
        ]),

        heading("Delivery Skills"),

        list([
            "Start with confidence and a warm greeting.",
            "Maintain eye contact with different sections of the audience.",
            "Speak clearly at a moderate pace.",
            "Use pauses for emphasis and to let points sink in.",
            "Vary your tone, pitch and volume.",
            "Use hand gestures naturally.",
            "Move purposefully, don't pace nervously.",
            "Avoid reading from slides or notes.",
            "Handle questions politely and honestly.",
            "End with a strong conclusion and call to action.",
        ]),

        heading("Overcoming Presentation Anxiety"),

        list([
            "Practice extensively (minimum 3 full rehearsals).",
            "Know your content thoroughly.",
            "Arrive early to familiarise yourself with the venue.",
            "Take deep breaths before starting.",
            "Focus on the message, not on yourself.",
            "Remember that the audience wants you to succeed.",
            "Start with a friendly face in the audience.",
            "Accept that some nervousness is normal and even helpful.",
        ]),

        heading("Listening Skills"),

        definition(
            "Listening",
            "Listening is the active process of receiving, interpreting and responding to spoken messages. It is different from hearing, which is merely the physical act of perceiving sound."
        ),

        heading("Hearing vs Listening"),

        table(
            ["Basis", "Hearing", "Listening"],
            [
                ["Nature", "Physical process", "Mental process"],
                ["Effort", "Passive, involuntary", "Active, voluntary"],
                ["Focus", "No concentration needed", "Requires concentration"],
                ["Understanding", "No comprehension", "Full comprehension"],
                ["Skill", "Natural ability", "Learned skill"],
            ]
        ),

        heading("Types of Listening"),

        table(
            ["Type", "Purpose"],
            [
                ["Active Listening", "Fully concentrating and responding"],
                ["Passive Listening", "Hearing without active engagement"],
                ["Critical Listening", "Evaluating and analysing the message"],
                ["Empathetic Listening", "Understanding feelings and emotions"],
                ["Appreciative Listening", "Enjoying music, stories, speeches"],
                ["Comprehensive Listening", "Understanding complex information"],
            ]
        ),

        heading("Active Listening Techniques"),

        list([
            "Maintain eye contact with the speaker.",
            "Nod and use verbal cues ('I see', 'Go on', 'Yes').",
            "Avoid interrupting the speaker.",
            "Paraphrase to confirm understanding.",
            "Ask clarifying questions.",
            "Take notes on key points.",
            "Avoid distractions (phone, side conversations).",
            "Show empathy and withhold judgment.",
            "Summarise the main points at the end.",
            "Provide thoughtful feedback.",
        ]),

        heading("Barriers to Effective Listening"),

        list([
            "Physical distractions (noise, uncomfortable environment).",
            "Psychological distractions (worry, daydreaming).",
            "Prejudging the speaker or topic.",
            "Information overload.",
            "Focusing on details and missing the main point.",
            "Planning your response while the other person speaks.",
            "Emotional reactions to certain words or topics.",
            "Language and accent differences.",
        ]),

        note(
            "Most people listen at only 25-50% efficiency. Improving listening skills can dramatically improve relationships, reduce errors and increase productivity in the workplace.",
            "info",
            "Listening Gap"
        ),

        keyPoints([
            "A good presentation has clear introduction, body and conclusion.",
            "Follow the 6x6 rule for slide design.",
            "Practice is the best cure for presentation anxiety.",
            "Listening is active; hearing is passive.",
            "Active listening involves eye contact, paraphrasing and feedback.",
        ]),
    ],

    {
        summary:
            "Develop presentation skills including preparation, delivery and slide design, plus active listening techniques.",
        minutes: 12,
        tags: ["presentation", "listening", "public-speaking", "important"],

        mcqs: [
            mcq(
                "The 6x6 rule means:",
                ["6 slides, 6 minutes", "6 bullets, 6 words each", "6 fonts, 6 colours", "6 images, 6 charts"],
                1,
                "6x6 rule: maximum 6 bullet points with 6 words each per slide."
            ),
            mcq(
                "Which is NOT a type of listening?",
                ["Active", "Critical", "Casual", "Empathetic"],
                2,
                "Casual is not a recognised type of listening."
            ),
            mcq(
                "Hearing is:",
                ["Active process", "Passive process", "Mental process", "Learned skill"],
                1,
                "Hearing is a passive, involuntary physical process."
            ),
            mcq(
                "Best way to overcome presentation anxiety:",
                ["Avoid presenting", "Read from slides", "Practice extensively", "Speak very fast"],
                2,
                "Extensive practice is the best way to reduce anxiety."
            ),
        ],

        questions: [
            qa(
                "Explain the steps to prepare an effective presentation.",
                "Preparing an effective presentation involves several steps. First, analyse the audience to understand their knowledge level, interests and expectations. Second, define a clear objective for what you want the audience to learn or do. Third, research and gather relevant content including data, examples and stories. Fourth, organise the structure with an engaging introduction (10-15%), detailed body (70-80%) and strong conclusion (10-15%). Fifth, create visual aids following the 6x6 rule with large fonts and high contrast. Sixth, practice delivery multiple times, focusing on timing, tone, body language and transitions. Seventh, prepare for Q&A by anticipating likely questions. Finally, check logistics including venue, projector, microphone and backup plans. A well-prepared presentation builds confidence and ensures the message is delivered effectively to the audience.",
                4
            ),
            qa(
                "Differentiate between hearing and listening. Explain active listening.",
                "Hearing and listening are fundamentally different. Hearing is a passive, involuntary physical process where sound waves are perceived by the ears. It requires no effort or concentration. Listening is an active, voluntary mental process that involves receiving, interpreting and responding to spoken messages. It requires focus, effort and comprehension. Active listening is the highest form of listening where the listener fully engages with the speaker. Techniques include maintaining eye contact, nodding and using verbal cues like 'I see' and 'Go on', avoiding interruptions, paraphrasing the speaker's points to confirm understanding, asking clarifying questions, taking notes and providing thoughtful feedback. Active listening builds trust, reduces misunderstandings and improves workplace relationships. Barriers to listening include distractions, prejudging, information overload and planning responses while the other person is still speaking.",
                4
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit1Topics = [
    introBusinessComm,
    barriersComm,
    writtenComm,
    verbalNonVerbal,
    presentationListening,
];