/* =========================================================
   BCA • SEM 6 • Business Communication and Etiquettes
   UNIT 2 — Business Etiquettes and Professional Skills
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
   TOPIC 1 — Workplace Etiquettes
========================================================= */

const workplaceEtiquettes = createTopic(
    "workplace-etiquettes",
    "Workplace Etiquettes",

    [
        definition(
            "Business Etiquette",
            "Business etiquette refers to the set of accepted behaviours, manners and customs that govern professional interactions in the workplace. It reflects respect, professionalism and consideration for others."
        ),

        text(
            "Good etiquette is not about rigid rules but about making others comfortable and building positive professional relationships. It covers everything from how you greet colleagues to how you handle conflicts."
        ),

        heading("Importance of Workplace Etiquette"),

        list([
            "Creates a positive and respectful work environment.",
            "Builds professional reputation and credibility.",
            "Improves teamwork and collaboration.",
            "Enhances client and customer relationships.",
            "Reduces workplace conflicts and misunderstandings.",
            "Increases career advancement opportunities.",
            "Reflects organisational culture and values.",
        ]),

        heading("Greeting and Introduction Etiquette"),

        list([
            "Stand up when greeting someone, especially seniors.",
            "Offer a firm but not crushing handshake.",
            "Make eye contact and smile genuinely.",
            "Use the person's name: 'Good morning, Mr. Patel.'",
            "Introduce the junior person to the senior person first.",
            "In business, introduce the client to your boss.",
            "Remember and use people's names correctly.",
            "Use appropriate titles (Mr., Ms., Dr., Prof.) until invited to use first names.",
        ]),

        heading("Office Behaviour"),

        table(
            ["Do", "Don't"],
            [
                ["Be punctual for work and meetings", "Arrive late consistently"],
                ["Keep your workspace clean and organised", "Leave mess in common areas"],
                ["Respect others' privacy and space", "Read others' screens or papers"],
                ["Keep phone on silent in meetings", "Take personal calls at your desk"],
                ["Knock before entering closed offices", "Barge into rooms unannounced"],
                ["Use polite language (please, thank you)", "Use slang or offensive language"],
                ["Share credit for team achievements", "Take credit for others' work"],
                ["Respect diversity and differences", "Make jokes about religion, caste, gender"],
                ["Keep conversations at appropriate volume", "Shout or speak loudly on phone"],
                ["Follow the dress code", "Dress too casually for the workplace"],
            ]
        ),

        heading("Meeting Etiquette"),

        steps([
            "Accept or decline meeting invitations promptly.",
            "Arrive 5 minutes early.",
            "Come prepared with agenda and relevant documents.",
            "Silence your phone and avoid checking it.",
            "Wait for the chairperson to begin.",
            "Speak clearly and stay on topic.",
            "Listen actively when others speak.",
            "Don't interrupt; wait for your turn.",
            "Take notes on action items.",
            "Follow up on assigned tasks after the meeting.",
        ]),

        heading("Telephone Etiquette"),

        table(
            ["Situation", "Etiquette"],
            [
                ["Answering", "Answer within 3 rings with greeting and name"],
                ["Speaking", "Speak clearly, smile (it affects your tone)"],
                ["Putting on hold", "Ask permission, don't keep waiting long"],
                ["Transferring", "Inform the caller before transferring"],
                ["Taking messages", "Note name, number, time and message"],
                ["Ending call", "Let the caller hang up first"],
                ["Mobile", "Don't use speakerphone in public areas"],
                ["Voicemail", "Keep greeting professional and brief"],
            ]
        ),

        heading("Dining Etiquette"),

        list([
            "Wait for the host to sit and start eating.",
            "Place napkin on your lap after sitting.",
            "Use utensils from outside in.",
            "Chew with your mouth closed.",
            "Don't talk with food in your mouth.",
            "Don't reach across the table; ask to pass items.",
            "Keep elbows off the table while eating.",
            "Follow the host's lead on ordering and tipping.",
            "Don't discuss controversial topics during business meals.",
            "Thank the host at the end of the meal.",
        ]),

        heading("Elevator Etiquette"),

        list([
            "Let people exit before you enter.",
            "Hold the door for others.",
            "Face the door, not other passengers.",
            "Keep conversations brief and quiet.",
            "Don't discuss confidential matters in elevators.",
            "Press the floor button for others if you're near the panel.",
        ]),

        note(
            "Etiquette is about making others feel comfortable and respected. When in doubt, observe what senior colleagues do and follow their lead. Good manners are noticed and remembered.",
            "tip",
            "Golden Rule"
        ),

        keyPoints([
            "Etiquette reflects professionalism and respect.",
            "Greet with a firm handshake, eye contact and smile.",
            "Be punctual, prepared and polite in meetings.",
            "Telephone etiquette includes prompt answering and clear speaking.",
            "Dining etiquette is important for business meals and client entertainment.",
        ]),
    ],

    {
        summary:
            "Learn workplace etiquettes including greetings, office behaviour, meeting, telephone and dining etiquette.",
        minutes: 11,
        tags: ["etiquette", "workplace", "meetings", "important"],

        mcqs: [
            mcq(
                "In introductions, you introduce:",
                ["Senior to junior", "Junior to senior", "Randomly", "Alphabetically"],
                1,
                "Introduce the junior person to the senior person."
            ),
            mcq(
                "How quickly should you answer a business call?",
                ["1 ring", "3 rings", "10 rings", "Whenever convenient"],
                1,
                "Answer within 3 rings for professional telephone etiquette."
            ),
            mcq(
                "In a business meal, who starts eating first?",
                ["You", "The youngest", "The host", "Anyone"],
                2,
                "Wait for the host to start eating."
            ),
            mcq(
                "Which is good meeting etiquette?",
                ["Check phone frequently", "Arrive late", "Come prepared", "Interrupt others"],
                2,
                "Coming prepared with agenda and documents is essential."
            ),
        ],

        questions: [
            qa(
                "Explain the importance of workplace etiquette with examples.",
                "Workplace etiquette is the set of accepted behaviours that govern professional interactions. Its importance includes creating a positive work environment where everyone feels respected, building professional reputation that leads to career advancement, improving teamwork through mutual respect and clear communication, enhancing client relationships that drive business success, and reducing conflicts through considerate behaviour. Examples include greeting colleagues with a smile and handshake, being punctual for meetings, keeping phone on silent during discussions, using polite language like 'please' and 'thank you', respecting others' workspace and privacy, and following the dress code. Poor etiquette such as arriving late, interrupting others, using offensive language or discussing confidential matters in public areas damages relationships and professional image. Good etiquette costs nothing but creates lasting positive impressions.",
                4
            ),
            qa(
                "Explain meeting and telephone etiquette.",
                "Meeting etiquette ensures productive and respectful discussions. Before the meeting, accept invitations promptly and prepare the agenda and documents. Arrive 5 minutes early. During the meeting, silence your phone, wait for the chairperson to begin, speak clearly and stay on topic, listen actively without interrupting, and take notes on action items. After the meeting, follow up on assigned tasks. Telephone etiquette is equally important. Answer within 3 rings with a professional greeting: 'Good morning, ABC Company, Amit speaking.' Speak clearly with a smile (it affects your tone). Ask permission before putting callers on hold. When transferring, inform the caller. Take accurate messages with name, number and time. Let the caller hang up first. Keep mobile conversations private and avoid speakerphone in public areas. Both meeting and telephone etiquette reflect your professionalism and the organisation's image.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — Digital Communication and Netiquette
========================================================= */

const digitalNetiquette = createTopic(
    "digital-communication-and-netiquette",
    "Digital Communication and Netiquette",

    [
        definition(
            "Netiquette",
            "Netiquette (network etiquette) is the set of rules and conventions for polite and professional behaviour when communicating online through emails, social media, video calls, messaging apps and forums."
        ),

        text(
            "With the rise of remote work, virtual meetings and digital collaboration, netiquette has become as important as traditional workplace etiquette. Poor digital communication can damage relationships, create misunderstandings and harm professional reputation."
        ),

        heading("Email Netiquette"),

        table(
            ["Rule", "Explanation"],
            [
                ["Clear subject line", "Summarise the email purpose in 5-8 words"],
                ["Professional greeting", "Use Dear, Hello, Good morning"],
                ["Concise body", "Get to the point in first two lines"],
                ["One topic per email", "Don't mix unrelated subjects"],
                ["Professional signature", "Include name, title, company, phone"],
                ["Proofread", "Check spelling, grammar and attachments"],
                ["Reply promptly", "Within 24 hours on business days"],
                ["Use CC wisely", "Only include people who need to know"],
                ["Avoid Reply All", "Unless everyone truly needs to see your reply"],
                ["No emotional emails", "Wait 24 hours before sending angry emails"],
            ]
        ),

        heading("Video Call Etiquette"),

        list([
            "Test your camera, microphone and internet before the call.",
            "Join 2-3 minutes early.",
            "Dress professionally (at least from the waist up).",
            "Choose a clean, well-lit background.",
            "Look at the camera, not the screen, for eye contact.",
            "Mute yourself when not speaking.",
            "Don't eat, chew gum or multitask during the call.",
            "Use the 'raise hand' feature to speak.",
            "Avoid background noise (close windows, silence pets).",
            "Use virtual backgrounds professionally if needed.",
            "Don't record without everyone's consent.",
            "End with a clear summary and next steps.",
        ]),

        heading("Instant Messaging Etiquette (Slack, Teams, WhatsApp)"),

        list([
            "Respect working hours; don't message at midnight.",
            "Use status indicators (Available, Busy, Away).",
            "Keep messages brief and clear.",
            "Use appropriate channels for different topics.",
            "Don't send multiple short messages; combine into one.",
            "Use @mentions sparingly and only when necessary.",
            "Avoid sarcasm; it doesn't translate well in text.",
            "Use emojis professionally and sparingly.",
            "Don't expect instant replies; people may be busy.",
            "Use threads for long discussions to avoid clutter.",
        ]),

        heading("Social Media Etiquette for Professionals"),

        list([
            "Keep personal and professional accounts separate.",
            "Don't post confidential company information.",
            "Think before posting; the internet is permanent.",
            "Don't argue publicly with clients or colleagues.",
            "Share industry-relevant content to build expertise.",
            "Use LinkedIn for professional networking.",
            "Don't overshare personal problems on professional platforms.",
            "Respond to comments and messages professionally.",
            "Credit others when sharing their content.",
            "Avoid controversial political or religious posts on work accounts.",
        ]),

        heading("Online Meeting Best Practices"),

        table(
            ["Before", "During", "After"],
            [
                ["Send agenda in advance", "Mute when not speaking", "Send meeting minutes"],
                ["Test technology", "Use video when possible", "Follow up on action items"],
                ["Share documents early", "Stay focused and engaged", "Share recording if applicable"],
                ["Choose quiet location", "Use chat for questions", "Thank participants"],
                ["Dress professionally", "Be mindful of time", "Update task assignments"],
            ]
        ),

        heading("Core Rules of Netiquette"),

        list([
            "Remember the human: there is a real person behind every screen.",
            "Adhere to the same standards online as in real life.",
            "Know where you are in cyberspace (formal vs informal).",
            "Respect other people's time and bandwidth.",
            "Make yourself look good online (proofread, be professional).",
            "Share expert knowledge generously.",
            "Help keep flame wars under control.",
            "Respect other people's privacy.",
            "Don't abuse your power or position.",
            "Be forgiving of other people's mistakes.",
        ]),

        note(
            "The '24-hour rule' is a powerful netiquette practice: if you receive an email or message that makes you angry, wait 24 hours before responding. Your reply will be more rational and professional.",
            "tip",
            "24-Hour Rule"
        ),

        keyPoints([
            "Netiquette governs all online professional communication.",
            "Email should be clear, concise and proofread.",
            "Video calls require preparation, proper background and muting.",
            "Social media should be used professionally and carefully.",
            "Remember there is a real person behind every screen.",
        ]),
    ],

    {
        summary:
            "Master digital communication etiquette for emails, video calls, messaging, social media and online meetings.",
        minutes: 11,
        tags: ["netiquette", "digital", "email", "video-call", "important"],

        mcqs: [
            mcq(
                "Netiquette means:",
                ["Network security", "Internet etiquette", "Net working", "Network technology"],
                1,
                "Netiquette is network/internet etiquette."
            ),
            mcq(
                "During video calls, you should:",
                ["Eat lunch", "Mute when not speaking", "Use phone", "Turn off camera always"],
                1,
                "Mute yourself when not speaking to reduce background noise."
            ),
            mcq(
                "The 24-hour rule suggests:",
                ["Reply within 24 seconds", "Wait 24 hours before angry replies", "Send 24 emails daily", "Work 24 hours"],
                1,
                "Wait 24 hours before responding to emotionally charged messages."
            ),
            mcq(
                "Which is bad email etiquette?",
                ["Clear subject", "Proofreading", "Reply All for everything", "Professional signature"],
                2,
                "Using Reply All unnecessarily clutters everyone's inbox."
            ),
        ],

        questions: [
            qa(
                "Explain netiquette and its importance in modern business.",
                "Netiquette (network etiquette) is the set of rules for polite and professional behaviour in online communication. With the rise of remote work, virtual meetings, emails and messaging platforms, netiquette has become essential for maintaining professional relationships and organisational efficiency. Key rules include: remembering the human behind every screen, using clear and respectful language, proofreading before sending, respecting others' time by keeping messages concise, maintaining professional tone across all platforms, and protecting privacy and confidentiality. In emails, use clear subject lines, professional greetings and prompt replies. In video calls, test technology, dress professionally, mute when not speaking and maintain eye contact with the camera. In messaging apps, respect working hours and use appropriate channels. Good netiquette prevents misunderstandings, builds trust, enhances collaboration and protects professional reputation in the digital workplace.",
                4
            ),
            qa(
                "What are the best practices for video call etiquette?",
                "Video call etiquette ensures professional and productive virtual meetings. Before the call, test camera, microphone and internet connection, join 2-3 minutes early, prepare the agenda and share documents in advance, and choose a clean, well-lit background. During the call, dress professionally, look at the camera for eye contact, mute yourself when not speaking to eliminate background noise, use the raise hand feature to speak, avoid eating or multitasking, stay focused and engaged, be mindful of time, and use the chat for questions without interrupting. After the call, send meeting minutes summarising key decisions, follow up on action items with deadlines, share the recording if applicable, and thank participants for their time. Common mistakes to avoid include having a messy background, poor lighting, background noise from pets or traffic, looking at your phone during the call, and speaking over others. Good video call etiquette is critical in the era of remote and hybrid work.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — Group Discussion and Interview Skills
========================================================= */

const gdInterview = createTopic(
    "group-discussion-and-interview-skills",
    "Group Discussion and Interview Skills",

    [
        definition(
            "Group Discussion",
            "A group discussion (GD) is a structured exchange of ideas among a group of participants on a given topic, used by organisations to evaluate communication skills, leadership, teamwork and analytical thinking."
        ),

        definition(
            "Interview",
            "An interview is a formal, structured conversation between an employer and a candidate to assess the candidate's qualifications, skills, personality and suitability for a position."
        ),

        heading("Group Discussion (GD)"),

        heading("Purpose of GD"),

        list([
            "Evaluate communication and articulation skills.",
            "Assess leadership and team management ability.",
            "Test knowledge and awareness of current affairs.",
            "Observe behaviour under pressure.",
            "Check listening skills and respect for others.",
            "Gauge creativity and problem-solving approach.",
        ]),

        heading("GD Process"),

        steps([
            "Group of 8-12 candidates is formed.",
            "Topic is given (sometimes chosen by the group).",
            "2-3 minutes preparation time.",
            "15-20 minutes of open discussion.",
            "No designated leader; leadership emerges naturally.",
            "Moderator observes but does not participate.",
            "May end with a summary by a volunteer.",
        ]),

        heading("GD Do's and Don'ts"),

        table(
            ["Do", "Don't"],
            [
                ["Start with a clear, confident point", "Shout or dominate the discussion"],
                ["Listen actively to others", "Interrupt others rudely"],
                ["Support your points with facts", "Make baseless statements"],
                ["Maintain eye contact with the group", "Look only at the moderator"],
                ["Encourage quiet members to speak", "Ignore or mock others' views"],
                ["Stay calm and composed", "Get aggressive or emotional"],
                ["Use data, examples and logic", "Use personal opinions only"],
                ["Summarise key points at the end", "Change the topic abruptly"],
                ["Be flexible and accept good points", "Be rigid and stubborn"],
                ["Speak clearly and audibly", "Mumble or speak too fast"],
            ]
        ),

        heading("GD Opening Strategies"),

        list([
            "Start with a relevant quote or proverb.",
            "Begin with a surprising statistic.",
            "Define the topic and set the context.",
            "Present a balanced view of both sides.",
            "Use a real-life example or case study.",
            "Ask a thought-provoking question to the group.",
        ]),

        heading("Common GD Topics"),

        table(
            ["Category", "Example Topics"],
            [
                ["Social", "Social media: boon or bane, Women empowerment"],
                ["Economic", "Cashless economy, Startup India, GST impact"],
                ["Technology", "AI replacing jobs, Data privacy, 5G impact"],
                ["Education", "Online vs offline education, NEP 2020"],
                ["Abstract", "Red vs Blue, Hard work vs Smart work"],
                ["Current Affairs", "Climate change, Global recession, Geopolitics"],
            ]
        ),

        heading("Interview Skills"),

        heading("Types of Interviews"),

        table(
            ["Type", "Description"],
            [
                ["Face-to-Face", "Traditional in-person interview"],
                ["Telephonic", "Initial screening over phone"],
                ["Video", "Virtual interview via Zoom/Teams"],
                ["Panel", "Multiple interviewers, one candidate"],
                ["Group", "Multiple candidates interviewed together"],
                ["Stress", "Designed to test pressure handling"],
                ["Behavioural", "Past behaviour predicts future performance"],
                ["Technical", "Tests domain-specific knowledge"],
                ["HR", "Assesses personality, culture fit and goals"],
            ]
        ),

        heading("Before the Interview"),

        steps([
            "Research the company: products, culture, recent news.",
            "Study the job description thoroughly.",
            "Prepare answers for common questions.",
            "Practice with mock interviews.",
            "Prepare your documents: resume, certificates, ID.",
            "Plan your outfit (formal and well-groomed).",
            "Plan your route and arrive 15 minutes early.",
            "Prepare 2-3 questions to ask the interviewer.",
        ]),

        heading("Common Interview Questions"),

        table(
            ["Question", "Tips for Answer"],
            [
                ["Tell me about yourself", "Brief professional summary, not life story"],
                ["Why this company?", "Show research and genuine interest"],
                ["Strengths and weaknesses", "Be honest; show improvement for weakness"],
                ["Where do you see yourself in 5 years?", "Show ambition aligned with company"],
                ["Why should we hire you?", "Match your skills to job requirements"],
                ["Tell about a challenge you faced", "Use STAR method (Situation, Task, Action, Result)"],
                ["What is your expected salary?", "Research market rates, give a range"],
                ["Do you have any questions?", "Always ask thoughtful questions"],
            ]
        ),

        heading("STAR Method for Behavioural Questions"),

        table(
            ["Letter", "Meaning", "Example"],
            [
                ["S", "Situation", "During my final year project..."],
                ["T", "Task", "I was responsible for the database..."],
                ["A", "Action", "I redesigned the schema and optimised queries..."],
                ["R", "Result", "Performance improved by 40%..."],
            ]
        ),

        heading("During the Interview"),

        list([
            "Greet with a firm handshake and smile.",
            "Wait to be invited to sit.",
            "Maintain good posture and eye contact.",
            "Listen carefully before answering.",
            "Speak clearly and confidently.",
            "Be honest; don't exaggerate.",
            "Use specific examples to support your answers.",
            "Stay positive; never badmouth previous employers.",
            "Keep answers concise (1-2 minutes per question).",
            "Show enthusiasm for the role and company.",
        ]),

        heading("After the Interview"),

        list([
            "Thank the interviewer for their time.",
            "Send a follow-up thank-you email within 24 hours.",
            "Reflect on your performance and note areas for improvement.",
            "Follow up if you don't hear back within the promised timeline.",
            "Don't be discouraged by rejection; learn and improve.",
        ]),

        note(
            "The STAR method is the most effective way to answer behavioural interview questions. Always prepare 3-5 stories from your academic, internship or project experience that demonstrate your skills.",
            "tip",
            "STAR Method"
        ),

        keyPoints([
            "GD evaluates communication, leadership and teamwork.",
            "Listen actively and support points with facts in GD.",
            "Research the company thoroughly before interviews.",
            "Use the STAR method for behavioural questions.",
            "Send a thank-you email within 24 hours after interview.",
        ]),
    ],

    {
        summary:
            "Develop group discussion techniques and interview skills including preparation, common questions and STAR method.",
        minutes: 13,
        tags: ["gd", "interview", "career", "important"],

        mcqs: [
            mcq(
                "STAR method stands for:",
                ["Skill, Task, Action, Result", "Situation, Task, Action, Result", "Strategy, Time, Analysis, Review", "Strength, Target, Achievement, Reward"],
                1,
                "STAR = Situation, Task, Action, Result."
            ),
            mcq(
                "Ideal time to arrive before an interview:",
                ["5 minutes", "15 minutes", "1 hour", "Exactly on time"],
                1,
                "Arrive 15 minutes early for an interview."
            ),
            mcq(
                "In GD, you should:",
                ["Shout to be heard", "Interrupt others", "Listen actively", "Dominate the discussion"],
                2,
                "Active listening is crucial in group discussions."
            ),
            mcq(
                "Thank-you email should be sent:",
                ["After 1 week", "Within 24 hours", "After 1 month", "Never"],
                1,
                "Send thank-you email within 24 hours of the interview."
            ),
        ],

        questions: [
            qa(
                "Explain the do's and don'ts of group discussion.",
                "Group discussion is a key selection tool that evaluates communication, leadership and teamwork. Do's include: starting with a clear and confident point to make a strong first impression, listening actively to others and building on their ideas, supporting arguments with facts, data and real-life examples, maintaining eye contact with the entire group not just the moderator, encouraging quieter members to participate which shows leadership, staying calm and composed even during heated moments, being flexible and accepting good points from others, and summarising key points at the end. Don'ts include: shouting or dominating the discussion, interrupting others rudely, making baseless statements without evidence, getting aggressive or emotional, being rigid and stubborn, changing the topic abruptly, mumbling or speaking too fast, and mocking others' views. The goal is to demonstrate leadership through respectful, insightful participation rather than aggression. Balance speaking and listening for the best performance.",
                4
            ),
            qa(
                "Explain the STAR method with example.",
                "The STAR method is a structured technique for answering behavioural interview questions such as 'Tell me about a time when you faced a challenge.' STAR stands for Situation, Task, Action and Result. Situation: Set the context by describing where and when the incident happened. Task: Explain your specific responsibility or the challenge you faced. Action: Describe the specific steps you took to address the situation. Result: Share the outcome, ideally with quantifiable results. Example: 'During my final semester project (Situation), I was assigned to lead a team of four to develop an e-commerce website in six weeks (Task). I organised weekly stand-up meetings, divided modules based on team members' strengths, and personally handled the database design and payment gateway integration (Action). We delivered the project two days early with 95% test coverage and received the best project award (Result).' The STAR method makes answers structured, memorable and impactful. Prepare 3-5 STAR stories from academics, internships or projects before interviews.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — Resume Writing and Job Applications
========================================================= */

const resumeWriting = createTopic(
    "resume-writing-and-job-applications",
    "Resume Writing and Job Applications",

    [
        definition(
            "Resume",
            "A resume is a concise, one to two page document that summarises a candidate's education, work experience, skills, achievements and other qualifications relevant to a job application."
        ),

        definition(
            "Cover Letter",
            "A cover letter is a one-page document sent along with a resume that introduces the candidate, explains interest in the position, and highlights relevant qualifications."
        ),

        heading("Purpose of Resume"),

        list([
            "First impression to potential employers.",
            "Marketing document to sell your skills and experience.",
            "Gets you an interview call.",
            "Summarises your professional profile at a glance.",
            "Highlights achievements relevant to the job.",
            "Passes through Applicant Tracking Systems (ATS).",
        ]),

        heading("Types of Resumes"),

        table(
            ["Type", "Best For", "Structure"],
            [
                ["Chronological", "Consistent career growth", "Latest job first, then backwards"],
                ["Functional", "Career changers, gaps in employment", "Focus on skills, not timeline"],
                ["Combination", "Experienced professionals", "Skills summary + chronological history"],
                ["Targeted", "Specific job applications", "Customised for particular role"],
            ]
        ),

        heading("Sections of a Resume"),

        table(
            ["Section", "Content"],
            [
                ["Header", "Name, phone, email, LinkedIn, location"],
                ["Objective/Summary", "2-3 line career goal or professional summary"],
                ["Education", "Degree, institution, year, marks/CGPA"],
                ["Skills", "Technical and soft skills"],
                ["Experience", "Job title, company, duration, achievements"],
                ["Projects", "Academic and personal projects with tech stack"],
                ["Certifications", "Relevant courses and certifications"],
                ["Achievements", "Awards, competitions, publications"],
                ["Extra-curricular", "Sports, leadership roles, volunteering"],
                ["References", "Available on request (or provide 2)"],
            ]
        ),

        heading("Sample Resume Format for BCA Fresher"),

        code(
            `AMIT PATEL
Ahmedabad, Gujarat | +91-9876543210
amit.patel@email.com | linkedin.com/in/amitpatel | github.com/amitpatel

────────────────────────────────────────────────────────
CAREER OBJECTIVE
────────────────────────────────────────────────────────
Passionate BCA graduate with strong foundation in
full-stack web development and problem-solving. Seeking
a Software Developer role to contribute technical
skills and grow in a dynamic organisation.

────────────────────────────────────────────────────────
EDUCATION
────────────────────────────────────────────────────────
Bachelor of Computer Applications (BCA)
L.J. University, Ahmedabad             2022 - 2025
CGPA: 8.5/10

Higher Secondary (Science)               2022
GHSEB, Gujarat                          Percentage: 82%

────────────────────────────────────────────────────────
TECHNICAL SKILLS
────────────────────────────────────────────────────────
Languages    : Java, Python, JavaScript, C++
Web          : HTML, CSS, React, Node.js, Express
Database     : MySQL, MongoDB
Tools        : Git, VS Code, Postman
OS           : Windows, Linux

────────────────────────────────────────────────────────
PROJECTS
────────────────────────────────────────────────────────
E-Commerce Website | React, Node.js, MongoDB
• Built full-stack shopping platform with 50+ products
• Implemented JWT authentication and payment gateway
• Deployed on Vercel with 99% uptime

Student Management System | Java, MySQL
• Developed CRUD application for 200+ student records
• Automated report generation, reducing time by 60%

────────────────────────────────────────────────────────
CERTIFICATIONS
────────────────────────────────────────────────────────
• Full Stack Development - Coursera (2024)
• Python for Data Science - IBM (2024)
• AWS Cloud Practitioner - Amazon (2024)

────────────────────────────────────────────────────────
ACHIEVEMENTS
────────────────────────────────────────────────────────
• Winner, Coding Hackathon 2024 (100+ participants)
• Top 5% in HackerRank Java (5-star badge)
• Led college coding club with 80+ members

────────────────────────────────────────────────────────
EXTRA-CURRICULAR
────────────────────────────────────────────────────────
• Volunteer, NSS (100+ hours community service)
• Coordinator, College Technical Fest 2024

────────────────────────────────────────────────────────
LANGUAGES
────────────────────────────────────────────────────────
English, Hindi, Gujarati`,
            "text",
            "Sample resume for BCA fresher"
        ),

        heading("Resume Writing Tips"),

        list([
            "Keep it to 1 page for freshers, 2 pages for experienced.",
            "Use bullet points instead of long paragraphs.",
            "Start bullets with action verbs (Developed, Managed, Led, Designed).",
            "Quantify achievements with numbers (Increased sales by 30%).",
            "Use reverse chronological order for experience.",
            "Include relevant keywords from job description (for ATS).",
            "Use a clean, professional font (Arial, Calibri, 11-12pt).",
            "Maintain consistent formatting throughout.",
            "Save as PDF to preserve formatting.",
            "Name file professionally (Amit_Patel_Resume.pdf).",
            "Proofread multiple times for spelling and grammar.",
            "Get it reviewed by mentors or seniors.",
        ]),

        heading("Common Resume Mistakes"),

        table(
            ["Mistake", "Fix"],
            [
                ["Spelling/grammar errors", "Use Grammarly, proofread twice"],
                ["Generic objective", "Tailor to specific job"],
                ["Too long (3-4 pages)", "Keep it 1-2 pages"],
                ["Photo (unless required)", "Skip in most Indian tech resumes"],
                ["Fancy fonts/colours", "Use clean professional design"],
                ["Listing all responsibilities", "Focus on achievements and impact"],
                ["No quantifiable results", "Add numbers, percentages, metrics"],
                ["Outdated contact info", "Update phone and email regularly"],
                ["Same resume for all jobs", "Customise for each application"],
                ["Fake information", "Always be honest and verifiable"],
            ]
        ),

        heading("Cover Letter"),

        code(
            `Amit Patel
Ahmedabad, Gujarat
+91-9876543210 | amit.patel@email.com

15 June 2025

The HR Manager
Tech Solutions Pvt. Ltd.
Bangalore

Subject: Application for Software Developer Position

Dear Hiring Manager,

I am writing to express my keen interest in the Software
Developer position at Tech Solutions, as advertised on
LinkedIn. As a BCA graduate from L.J. University with
hands-on experience in full-stack development, I am
excited about the opportunity to contribute to your team.

During my studies, I built multiple projects including a
full-stack e-commerce website using React and Node.js
that handles 50+ products with secure payment integration.
I also completed certifications in Full Stack Development
and AWS, demonstrating my commitment to continuous learning.

What draws me to Tech Solutions is your focus on innovative
cloud-based products and strong engineering culture. I am
particularly impressed by your recent launch of the AI
analytics platform. I would love to contribute to such
groundbreaking work.

I have attached my resume for your review. I would welcome
the opportunity to discuss how my skills align with your
team's needs. Thank you for considering my application.

Sincerely,

Amit Patel

Enclosure: Resume`,
            "text",
            "Sample cover letter"
        ),

        heading("Cover Letter Structure"),

        table(
            ["Paragraph", "Purpose"],
            [
                ["Opening", "Introduce yourself, mention position, source"],
                ["Middle 1", "Highlight relevant qualifications and achievements"],
                ["Middle 2", "Show why you want to join this specific company"],
                ["Closing", "Thank them, request interview, mention resume"],
            ]
        ),

        heading("LinkedIn Profile Tips"),

        list([
            "Use a professional headshot photo.",
            "Write a compelling headline (not just 'Student').",
            "Craft a strong summary with career goals.",
            "List all education, experience and skills.",
            "Get endorsements and recommendations.",
            "Post relevant content and engage with industry.",
            "Connect with alumni, recruiters and professionals.",
            "Follow companies you want to work for.",
            "Keep your profile updated regularly.",
            "Customise your LinkedIn URL (linkedin.com/in/amitpatel).",
        ]),

        note(
            "Most companies use Applicant Tracking Systems (ATS) to filter resumes. To pass ATS, use standard section headings, include keywords from the job description, avoid images and complex tables, and save as .docx or .pdf format.",
            "info",
            "ATS Optimisation"
        ),

        keyPoints([
            "Resume should be concise, targeted and error-free.",
            "Use action verbs and quantify achievements.",
            "Cover letter complements the resume with personalisation.",
            "Tailor both documents for each job application.",
            "LinkedIn is essential for professional networking today.",
        ]),
    ],

    {
        summary:
            "Master resume writing, cover letters and LinkedIn profile creation for successful job applications.",
        minutes: 13,
        tags: ["resume", "cover-letter", "linkedin", "career", "important"],

        mcqs: [
            mcq(
                "Ideal length of a fresher's resume:",
                ["Half page", "1 page", "3 pages", "5 pages"],
                1,
                "Freshers should keep resume to 1 page."
            ),
            mcq(
                "ATS stands for:",
                ["Auto Testing System", "Applicant Tracking System", "Advanced Talent Search", "Application Tool Set"],
                1,
                "ATS is Applicant Tracking System used by companies."
            ),
            mcq(
                "Which format is best for saving resume?",
                [".txt", ".docx or .pdf", ".jpg", ".exe"],
                1,
                "Save resume as .docx or .pdf to preserve formatting."
            ),
            mcq(
                "Cover letter should be:",
                ["1 page", "5 pages", "Same as resume", "Not required"],
                0,
                "Cover letter should be limited to one page."
            ),
        ],

        questions: [
            qa(
                "Explain the essential sections of a resume with tips for each.",
                "A well-structured resume has several key sections. Header includes name, phone, email, LinkedIn URL and location (city, state); avoid full addresses for privacy. Career Objective or Summary is a 2-3 line statement showing your goals and value proposition; customise it for each job. Education lists degree, institution, year and CGPA in reverse chronological order. Skills section includes technical skills (languages, frameworks, tools) and soft skills; use keywords from the job description. Experience section (or Projects for freshers) uses bullet points starting with action verbs like Developed, Led, Designed; quantify achievements with numbers. Certifications add credibility for specific skills. Achievements highlight competitions won, awards received and rankings. Extra-curricular activities show leadership and well-roundedness. Keep the resume to 1 page for freshers, use clean formatting with consistent fonts (11-12pt), save as PDF, and name file professionally like 'Amit_Patel_Resume.pdf'.",
                4
            ),
            qa(
                "What is a cover letter? Explain its structure and importance.",
                "A cover letter is a one-page document sent along with a resume that introduces the candidate and explains their interest in a specific position. It provides context that a resume cannot, showing personality, motivation and fit for the company. Its structure has four parts. The opening paragraph introduces you, mentions the position you're applying for, and states where you found the job. The first middle paragraph highlights your most relevant qualifications and achievements that match the job requirements. The second middle paragraph explains why you want to work at this specific company, showing you've researched them. The closing paragraph thanks them, requests an interview, and mentions your attached resume. Importance: it demonstrates communication skills, shows genuine interest in the company, allows you to explain unique circumstances (career gap, career change), and complements the resume with a personal touch. Even in the era of online applications, cover letters remain important for making a strong first impression and standing out from other candidates.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 5 — Cross-Cultural Communication and Ethics
========================================================= */

const crossCulturalEthics = createTopic(
    "cross-cultural-communication-and-ethics",
    "Cross-Cultural Communication and Ethics",

    [
        definition(
            "Cross-Cultural Communication",
            "Cross-cultural communication is the process of exchanging information between people from different cultural backgrounds, requiring awareness and respect for different customs, values, languages and communication styles."
        ),

        definition(
            "Business Ethics",
            "Business ethics is the study of moral principles and standards that guide behaviour in the world of business, including honesty, fairness, integrity and social responsibility."
        ),

        text(
            "In today's globalised business world, professionals interact with colleagues, clients and partners from diverse cultures. Understanding cultural differences and maintaining ethical standards are essential for success."
        ),

        heading("Importance of Cross-Cultural Communication"),

        list([
            "Globalisation has created multinational workplaces.",
            "Companies operate across countries and continents.",
            "Diverse teams bring innovation and creativity.",
            "Prevents cultural misunderstandings and conflicts.",
            "Builds strong international business relationships.",
            "Essential for global business expansion.",
            "Enhances cultural intelligence (CQ) of employees.",
        ]),

        heading("Cultural Dimensions (Hofstede's Model)"),

        table(
            ["Dimension", "Description", "Example"],
            [
                ["Power Distance", "Acceptance of hierarchy and inequality", "High: India, Japan; Low: Denmark"],
                ["Individualism vs Collectivism", "Focus on self vs group", "US: Individual; Japan: Collective"],
                ["Masculinity vs Femininity", "Competition vs cooperation", "Japan: Masculine; Sweden: Feminine"],
                ["Uncertainty Avoidance", "Tolerance for ambiguity", "High: Greece; Low: Singapore"],
                ["Long-term vs Short-term", "Future planning vs present", "China: Long-term; US: Short-term"],
                ["Indulgence vs Restraint", "Free gratification vs control", "Mexico: Indulgent; Russia: Restraint"],
            ]
        ),

        heading("Cultural Differences in Communication"),

        table(
            ["Aspect", "Western Cultures", "Asian Cultures"],
            [
                ["Communication style", "Direct, explicit", "Indirect, implicit"],
                ["Decision-making", "Individual", "Group consensus"],
                ["Time orientation", "Punctual, linear", "Flexible, cyclical"],
                ["Business meetings", "Task-focused", "Relationship-focused"],
                ["Disagreement", "Openly expressed", "Avoided publicly"],
                ["Eye contact", "Direct = confidence", "May be seen as aggressive"],
                ["Personal space", "Larger", "Smaller"],
                ["Silence", "Uncomfortable", "Sign of thinking"],
            ]
        ),

        heading("Verbal Communication Across Cultures"),

        list([
            "Language differences: use simple English with non-native speakers.",
            "Idioms and slang may not translate (e.g., 'ballpark figure').",
            "Speak slowly and clearly.",
            "Avoid humour that depends on cultural context.",
            "Be careful with abbreviations and technical jargon.",
            "Confirm understanding by paraphrasing.",
            "Use written follow-up for important discussions.",
        ]),

        heading("Non-Verbal Communication Across Cultures"),

        table(
            ["Gesture", "USA/Europe", "Other Cultures"],
            [
                ["Thumbs up", "Approval", "Offensive in Middle East"],
                ["OK sign", "Everything is good", "Offensive in Brazil, Germany"],
                ["Nodding head", "Yes", "'No' in Bulgaria, Greece"],
                ["Direct eye contact", "Confidence", "Disrespectful in Japan"],
                ["Handshake", "Standard greeting", "Bowing preferred in Japan"],
                ["Personal space", "Arm's length", "Closer in Latin America"],
                ["Left hand use", "Neutral", "Considered unclean in Middle East"],
            ]
        ),

        heading("Tips for Cross-Cultural Communication"),

        list([
            "Learn about the culture before interacting.",
            "Avoid stereotypes; treat individuals as unique.",
            "Show respect for different customs and beliefs.",
            "Ask questions if unsure; don't assume.",
            "Be patient with language barriers.",
            "Adapt your communication style to the audience.",
            "Be aware of religious holidays and customs.",
            "Use interpreters for critical negotiations.",
            "Build relationships before doing business (in many cultures).",
            "Follow local etiquette for meetings, meals and gifts.",
        ]),

        heading("Business Ethics"),

        heading("Principles of Business Ethics"),

        table(
            ["Principle", "Meaning"],
            [
                ["Honesty", "Truthfulness in all dealings"],
                ["Integrity", "Consistency between actions and values"],
                ["Fairness", "Just and equitable treatment"],
                ["Transparency", "Open and clear communication"],
                ["Respect", "Value for people and diversity"],
                ["Responsibility", "Accountability for actions"],
                ["Confidentiality", "Protecting sensitive information"],
                ["Loyalty", "Faithful to organisation and stakeholders"],
            ]
        ),

        heading("Common Ethical Issues in Business Communication"),

        list([
            "Misleading advertising and false claims.",
            "Withholding important information from stakeholders.",
            "Plagiarism and copyright violations.",
            "Confidential data leaks.",
            "Discriminatory language or behaviour.",
            "Bribery and corruption.",
            "Insider trading.",
            "Harassment (verbal, sexual, workplace).",
            "Whistleblowing dilemmas.",
            "Conflict of interest.",
        ]),

        heading("Ethical Communication Guidelines"),

        list([
            "Always tell the truth; never mislead or deceive.",
            "Respect confidentiality of sensitive information.",
            "Give proper credit; avoid plagiarism.",
            "Use inclusive, respectful language.",
            "Disclose conflicts of interest.",
            "Report unethical behaviour through proper channels.",
            "Respect intellectual property rights.",
            "Avoid discriminatory language based on race, gender, religion.",
            "Be accountable for your words and actions.",
            "Follow company policies and legal regulations.",
        ]),

        heading("Corporate Social Responsibility (CSR)"),

        definition(
            "CSR",
            "Corporate Social Responsibility is a business approach that contributes to sustainable development by delivering economic, social and environmental benefits to all stakeholders."
        ),

        list([
            "Environmental sustainability (reducing carbon footprint).",
            "Ethical labour practices.",
            "Community development and philanthropy.",
            "Fair trade and supply chain ethics.",
            "Consumer protection and transparency.",
            "Diversity and inclusion initiatives.",
            "Data privacy and cybersecurity.",
        ]),

        heading("Handling Ethical Dilemmas"),

        steps([
            "Identify the ethical issue clearly.",
            "Gather all relevant facts.",
            "Consider affected stakeholders.",
            "Evaluate options against ethical principles.",
            "Consult with mentors or ethics committee.",
            "Choose the most ethical course of action.",
            "Take responsibility for the decision.",
            "Reflect on the outcome for future situations.",
        ]),

        note(
            "Ethics is doing the right thing, even when no one is watching. In today's digital age, unethical behaviour is quickly exposed on social media and can permanently damage careers and companies. Choose integrity over short-term gains.",
            "warning",
            "Integrity Matters"
        ),

        keyPoints([
            "Cross-cultural communication requires awareness and adaptation.",
            "Hofstede's dimensions help understand cultural differences.",
            "Non-verbal gestures can have opposite meanings in different cultures.",
            "Business ethics include honesty, integrity, fairness and respect.",
            "CSR extends ethical responsibility to society and environment.",
        ]),
    ],

    {
        summary:
            "Understand cross-cultural communication, cultural dimensions, business ethics, ethical dilemmas and CSR.",
        minutes: 12,
        tags: ["culture", "ethics", "csr", "diversity", "important"],

        mcqs: [
            mcq(
                "Which cultures prefer indirect communication?",
                ["Western", "Asian", "European", "American"],
                1,
                "Asian cultures tend to prefer indirect communication."
            ),
            mcq(
                "Hofstede's model has how many dimensions?",
                ["4", "5", "6", "7"],
                2,
                "Hofstede's model has 6 cultural dimensions."
            ),
            mcq(
                "CSR stands for:",
                ["Company Sales Report", "Corporate Social Responsibility", "Customer Service Reply", "Cost of Sales Revenue"],
                1,
                "CSR is Corporate Social Responsibility."
            ),
            mcq(
                "Which is NOT a principle of business ethics?",
                ["Honesty", "Integrity", "Deception", "Fairness"],
                2,
                "Deception is opposite of ethical behaviour."
            ),
        ],

        questions: [
            qa(
                "Explain the importance of cross-cultural communication in modern business.",
                "Cross-cultural communication has become crucial in modern business due to globalisation and multinational operations. Its importance includes: enabling companies to expand into international markets by understanding local customs and preferences, facilitating effective collaboration in diverse teams that bring different perspectives and innovation, preventing costly misunderstandings that can damage relationships and business deals, building trust with international clients and partners which is essential for long-term success, and developing cultural intelligence (CQ) among employees which improves their global career prospects. For example, a business gesture like the 'thumbs up' means approval in the US but is offensive in the Middle East; direct eye contact shows confidence in Western cultures but is considered disrespectful in Japan. Understanding Hofstede's cultural dimensions (power distance, individualism, uncertainty avoidance etc.) helps businesses adapt their strategies. Companies that master cross-cultural communication gain competitive advantage in the global marketplace and create inclusive workplaces.",
                4
            ),
            qa(
                "What is business ethics? Explain its key principles.",
                "Business ethics is the study of moral principles and standards that guide behaviour in business, ensuring that companies operate with integrity and responsibility. It applies to all business activities including decision-making, communication, marketing, employee relations and customer interactions. Key principles include: Honesty which means being truthful in all dealings with employees, customers and stakeholders. Integrity means aligning actions with values consistently. Fairness ensures just and equitable treatment of all parties. Transparency involves open and clear communication about company practices. Respect means valuing all people regardless of position or background. Responsibility means being accountable for one's actions and decisions. Confidentiality involves protecting sensitive information such as trade secrets and customer data. Loyalty means being faithful to the organisation and its stakeholders. Following these principles builds trust, enhances reputation, ensures legal compliance and creates a positive work culture. Ethical companies attract better talent, loyal customers and long-term success. In today's digital world, unethical behaviour is quickly exposed and can permanently damage a company's brand.",
                4
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit2Topics = [
    workplaceEtiquettes,
    digitalNetiquette,
    gdInterview,
    resumeWriting,
    crossCulturalEthics,
];