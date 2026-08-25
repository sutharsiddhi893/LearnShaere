/* =========================================================
   BCA • SEM 4 • Integrated Personality Development & Life Skills
   UNIT 2 — Life Skills and Professional Development
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
   TOPIC 1 — Communication Skills
========================================================= */

const communicationSkills = createTopic(
    "communication-skills",
    "Communication Skills",

    [
        definition(
            "Communication",
            "Communication is the process of exchanging information, ideas, thoughts and feelings between two or more people through verbal, non-verbal or written means."
        ),

        heading("Process of Communication"),

        steps([
            "Sender — Person who sends the message.",
            "Encoding — Converting thoughts into words or symbols.",
            "Message — The actual content shared.",
            "Channel — Medium used (speech, writing, gestures).",
            "Receiver — Person who receives the message.",
            "Decoding — Understanding the message.",
            "Feedback — Response from receiver to sender.",
        ]),

        heading("Types of Communication"),

        table(
            ["Type", "Description", "Example"],
            [
                ["Verbal", "Using spoken words", "Conversations, meetings"],
                ["Non-Verbal", "Body language, gestures, facial expressions", "Nodding, smiling"],
                ["Written", "Using written words", "Emails, reports, messages"],
                ["Visual", "Using images and visuals", "Charts, videos, symbols"],
                ["Formal", "Professional and structured", "Official emails, presentations"],
                ["Informal", "Casual and friendly", "Chatting with friends"],
            ]
        ),

        heading("7 Cs of Effective Communication"),

        table(
            ["C", "Meaning"],
            [
                ["Clear", "Message should be easy to understand"],
                ["Concise", "Short and to the point"],
                ["Concrete", "Based on facts, not vague"],
                ["Correct", "Free from grammatical errors"],
                ["Coherent", "Logical and well-connected"],
                ["Complete", "Contains all necessary information"],
                ["Courteous", "Polite and respectful"],
            ]
        ),

        heading("Barriers to Communication"),

        list([
            "Language differences.",
            "Noise and distractions.",
            "Cultural differences.",
            "Emotional barriers like anger or fear.",
            "Poor listening skills.",
            "Physical distance.",
            "Use of jargon or technical words.",
            "Prejudice and assumptions.",
        ]),

        heading("Listening Skills"),

        definition(
            "Active Listening",
            "Active listening is the process of fully concentrating, understanding, responding and remembering what is being said."
        ),

        table(
            ["Type", "Description"],
            [
                ["Active Listening", "Fully focused, gives feedback"],
                ["Passive Listening", "Hears but does not respond"],
                ["Selective Listening", "Listens only to what interests"],
                ["Empathetic Listening", "Listens to understand feelings"],
            ]
        ),

        heading("Body Language"),

        text(
            "Body language is a form of non-verbal communication using facial expressions, gestures, posture and eye contact. Research shows that about 55% of communication is body language, 38% is tone of voice and only 7% is actual words."
        ),

        table(
            ["Aspect", "Positive Signal", "Negative Signal"],
            [
                ["Eye contact", "Confidence, interest", "Avoiding — nervousness"],
                ["Posture", "Straight — alert", "Slouched — bored"],
                ["Handshake", "Firm — confident", "Weak — unsure"],
                ["Smile", "Friendly, open", "Frown — unhappy"],
                ["Gestures", "Open palms — honesty", "Crossed arms — defensive"],
            ]
        ),

        note(
            "Communication is not just about speaking. It is about being understood. Listening is equally important.",
            "tip",
            "Golden Rule"
        ),

        keyPoints([
            "Communication has 4 main types: verbal, non-verbal, written and visual.",
            "The 7 Cs make communication effective.",
            "Barriers include language, noise, culture and poor listening.",
            "Active listening improves understanding.",
            "Body language conveys more than words.",
        ]),
    ],

    {
        summary:
            "Learn the process, types and principles of communication, including the 7 Cs, body language and active listening.",
        minutes: 12,
        tags: ["communication", "listening", "body-language", "important"],

        mcqs: [
            mcq(
                "The 7 Cs of communication do NOT include:",
                ["Clear", "Concise", "Complex", "Correct"],
                2,
                "Complex is not part of the 7 Cs; the correct term is Coherent."
            ),
            mcq(
                "Which type of listening involves full concentration and feedback?",
                ["Passive", "Selective", "Active", "Casual"],
                2,
                "Active listening involves full concentration and giving feedback."
            ),
            mcq(
                "Body language is a form of:",
                ["Verbal communication", "Written communication", "Non-verbal communication", "Visual communication"],
                2,
                "Body language is non-verbal communication."
            ),
            mcq(
                "Which is a barrier to communication?",
                ["Clear message", "Active listening", "Language difference", "Feedback"],
                2,
                "Language difference is a common barrier to communication."
            ),
        ],

        questions: [
            qa(
                "Explain the 7 Cs of effective communication.",
                "The 7 Cs are the principles that make communication effective. (1) Clear — the message should be easy to understand. (2) Concise — short and to the point without unnecessary words. (3) Concrete — based on facts and specific details. (4) Correct — free from grammatical and factual errors. (5) Coherent — logical and well-connected. (6) Complete — contains all necessary information. (7) Courteous — polite and respectful in tone. Following these principles ensures the message is understood correctly and creates a positive impact on the receiver.",
                4
            ),
            qa(
                "What are the barriers to communication? How can they be overcome?",
                "Barriers to communication are obstacles that prevent effective message exchange. Common barriers include: language differences, noise and distractions, cultural differences, emotional barriers like anger or fear, poor listening skills, physical distance, use of technical jargon and prejudice. These can be overcome by using simple language, choosing the right medium and time, practising active listening, being culturally sensitive, giving and receiving feedback, controlling emotions and reducing physical or environmental distractions. Effective communication requires effort from both sender and receiver.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — Interpersonal Skills and Teamwork
========================================================= */

const interpersonalTeamwork = createTopic(
    "interpersonal-skills-and-teamwork",
    "Interpersonal Skills and Teamwork",

    [
        definition(
            "Interpersonal Skills",
            "Interpersonal skills are the abilities used to communicate and interact effectively with other people, both individually and in groups."
        ),

        definition(
            "Teamwork",
            "Teamwork is the collaborative effort of a group of people working together to achieve a common goal effectively and efficiently."
        ),

        heading("Important Interpersonal Skills"),

        list([
            "Effective communication.",
            "Active listening.",
            "Empathy and understanding.",
            "Conflict resolution.",
            "Teamwork and cooperation.",
            "Leadership.",
            "Patience and tolerance.",
            "Negotiation.",
            "Respect for diversity.",
        ]),

        heading("Stages of Team Development (Tuckman Model)"),

        table(
            ["Stage", "Description"],
            [
                ["Forming", "Team members meet and know each other"],
                ["Storming", "Conflicts and disagreements arise"],
                ["Norming", "Team resolves issues and starts cooperating"],
                ["Performing", "Team works efficiently toward goals"],
                ["Adjourning", "Team completes task and disbands"],
            ]
        ),

        heading("Qualities of a Good Team Member"),

        list([
            "Reliable and responsible.",
            "Cooperative and supportive.",
            "Good communicator.",
            "Respectful of others.",
            "Flexible and adaptable.",
            "Positive attitude.",
            "Willing to share knowledge.",
            "Accepts feedback gracefully.",
        ]),

        heading("Leadership"),

        definition(
            "Leadership",
            "Leadership is the ability to influence, guide and motivate a group of people toward achieving a common goal."
        ),

        table(
            ["Leadership Style", "Description"],
            [
                ["Autocratic", "Leader makes all decisions"],
                ["Democratic", "Leader involves team in decisions"],
                ["Laissez-Faire", "Leader gives full freedom to team"],
                ["Transformational", "Leader inspires and motivates change"],
                ["Transactional", "Leader uses rewards and punishments"],
                ["Servant", "Leader serves the team first"],
            ]
        ),

        heading("Qualities of a Good Leader"),

        list([
            "Vision and clear goals.",
            "Honesty and integrity.",
            "Good communication skills.",
            "Decision-making ability.",
            "Empathy and compassion.",
            "Confidence.",
            "Ability to inspire others.",
            "Accountability.",
        ]),

        heading("Conflict Resolution"),

        definition(
            "Conflict",
            "Conflict is a disagreement or clash between two or more people due to differences in opinions, interests or values."
        ),

        table(
            ["Style", "Description", "When to Use"],
            [
                ["Avoiding", "Ignore conflict", "When issue is minor"],
                ["Accommodating", "Give in to others", "To maintain relationship"],
                ["Competing", "Push your view", "When quick decision needed"],
                ["Compromising", "Both give up something", "For quick fair solution"],
                ["Collaborating", "Work together for win-win", "For long-term solution"],
            ]
        ),

        heading("Tips for Better Teamwork"),

        steps([
            "Set clear goals and roles.",
            "Communicate openly and regularly.",
            "Respect every team member's opinion.",
            "Share credit for success.",
            "Handle conflicts calmly.",
            "Support team members in difficulties.",
            "Celebrate achievements together.",
        ]),

        note(
            "Alone we can do so little; together we can do so much. — Helen Keller",
            "info",
            "Power of Teamwork"
        ),

        keyPoints([
            "Interpersonal skills help in effective interaction with others.",
            "Tuckman's model has 5 stages: Forming, Storming, Norming, Performing, Adjourning.",
            "Leadership styles include Autocratic, Democratic, Laissez-Faire and Transformational.",
            "Conflict resolution styles: Avoiding, Accommodating, Competing, Compromising, Collaborating.",
            "Good teamwork leads to better results than individual effort.",
        ]),
    ],

    {
        summary:
            "Understand interpersonal skills, team development stages, leadership styles and conflict resolution techniques.",
        minutes: 12,
        tags: ["interpersonal", "teamwork", "leadership", "conflict", "important"],

        mcqs: [
            mcq(
                "The 5 stages of team development were given by:",
                ["Maslow", "Tuckman", "Goleman", "Herzberg"],
                1,
                "Bruce Tuckman gave the 5-stage team development model."
            ),
            mcq(
                "Which leadership style gives full freedom to team?",
                ["Autocratic", "Democratic", "Laissez-Faire", "Transactional"],
                2,
                "Laissez-Faire leadership gives full freedom to the team."
            ),
            mcq(
                "Which conflict resolution style is win-win?",
                ["Avoiding", "Competing", "Collaborating", "Accommodating"],
                2,
                "Collaborating creates a win-win solution for both parties."
            ),
            mcq(
                "The stage where team conflicts arise is:",
                ["Forming", "Storming", "Norming", "Performing"],
                1,
                "Storming is the stage where conflicts and disagreements occur."
            ),
        ],

        questions: [
            qa(
                "Explain Tuckman's five stages of team development.",
                "Bruce Tuckman proposed five stages of team development. (1) Forming — team members meet, introduce themselves and understand the task; they are polite but unsure. (2) Storming — conflicts arise as members share different opinions and struggle for roles. (3) Norming — team resolves conflicts, sets rules and starts cooperating. (4) Performing — team works efficiently and productively toward goals with high trust and coordination. (5) Adjourning — team completes the project and disbands. Understanding these stages helps leaders guide teams through challenges and reach high performance.",
                4
            ),
            qa(
                "What is conflict? Explain the different styles of conflict resolution.",
                "Conflict is a disagreement between two or more people due to differences in opinions, interests or values. There are five common styles of conflict resolution: (1) Avoiding — ignoring the conflict, useful for minor issues; (2) Accommodating — giving in to the other party to maintain the relationship; (3) Competing — pushing your own view, useful when quick decisions are needed; (4) Compromising — both parties give up something for a fair middle solution; (5) Collaborating — working together to find a win-win solution, best for long-term relationships. Choosing the right style depends on the situation and importance of the issue.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — Etiquette and Professional Grooming
========================================================= */

const etiquetteGrooming = createTopic(
    "etiquette-and-professional-grooming",
    "Etiquette and Professional Grooming",

    [
        definition(
            "Etiquette",
            "Etiquette refers to the set of rules and behaviours that are considered polite and acceptable in social or professional situations."
        ),

        definition(
            "Grooming",
            "Grooming is the practice of maintaining a neat, clean and presentable appearance, which creates a positive impression on others."
        ),

        heading("Types of Etiquette"),

        table(
            ["Type", "Description"],
            [
                ["Social Etiquette", "Behaviour in social gatherings"],
                ["Business Etiquette", "Behaviour in workplace"],
                ["Dining Etiquette", "Table manners while eating"],
                ["Telephone Etiquette", "Behaviour during phone calls"],
                ["Email Etiquette", "Rules for writing professional emails"],
                ["Meeting Etiquette", "Behaviour during meetings"],
            ]
        ),

        heading("Business/Workplace Etiquette"),

        list([
            "Reach office on time.",
            "Dress professionally.",
            "Greet colleagues politely.",
            "Respect others' privacy and space.",
            "Keep your workspace clean.",
            "Avoid loud conversations.",
            "Do not use mobile phones during meetings.",
            "Handle disagreements professionally.",
            "Say 'please', 'thank you' and 'sorry' when needed.",
        ]),

        heading("Telephone Etiquette"),

        steps([
            "Answer calls within 3 rings.",
            "Greet with 'Hello' or 'Good morning'.",
            "Introduce yourself clearly.",
            "Speak clearly and politely.",
            "Listen carefully without interrupting.",
            "Take notes if needed.",
            "End with 'Thank you' or 'Have a good day'.",
        ]),

        heading("Email Etiquette"),

        list([
            "Use a clear and specific subject line.",
            "Start with proper greeting (Dear/Hello).",
            "Keep the message short and clear.",
            "Use professional language.",
            "Check spelling and grammar.",
            "Reply promptly (within 24 hours).",
            "Use signature with name and contact.",
            "Avoid ALL CAPS (it looks like shouting).",
        ]),

        heading("Dining Etiquette"),

        list([
            "Wait for everyone to be served before eating.",
            "Place napkin on your lap.",
            "Chew with mouth closed.",
            "Do not talk while eating.",
            "Use utensils properly.",
            "Do not use mobile at dining table.",
            "Say 'thank you' after the meal.",
        ]),

        heading("Personal Grooming"),

        table(
            ["Area", "Tips"],
            [
                ["Hair", "Clean, well-combed, professional style"],
                ["Face", "Clean-shaven or trimmed beard"],
                ["Teeth", "Brush twice daily, fresh breath"],
                ["Nails", "Trimmed and clean"],
                ["Body odour", "Bath daily, use deodorant"],
                ["Clothes", "Neat, ironed, well-fitting"],
                ["Shoes", "Polished and clean"],
            ]
        ),

        heading("Professional Dress Code"),

        table(
            ["Type", "For Men", "For Women"],
            [
                ["Formal", "Suit, tie, formal shoes", "Formal suit, saree, formal shoes"],
                ["Business Casual", "Shirt, trousers, no tie", "Kurti, formal top, trousers"],
                ["Interview", "Light-coloured shirt, dark trousers", "Formal salwar or saree"],
            ]
        ),

        note(
            "First impression is the last impression. Good grooming and etiquette create a positive image within seconds of meeting someone.",
            "tip",
            "First Impression"
        ),

        keyPoints([
            "Etiquette means polite behaviour in social and professional settings.",
            "Grooming means maintaining a neat and clean appearance.",
            "Types include social, business, dining, telephone and email etiquette.",
            "Professional dress code varies by industry and event.",
            "Good etiquette and grooming boost confidence and career growth.",
        ]),
    ],

    {
        summary:
            "Learn about etiquette, grooming, professional dress code and best practices for workplace, telephone, email and dining.",
        minutes: 11,
        tags: ["etiquette", "grooming", "professionalism", "important"],

        mcqs: [
            mcq(
                "Emails should be written in:",
                ["ALL CAPS", "Small casual language", "Professional language", "Slang"],
                2,
                "Emails should always use professional language."
            ),
            mcq(
                "Telephone calls should ideally be answered within:",
                ["1 ring", "3 rings", "10 rings", "After voicemail"],
                1,
                "Calls should be answered within 3 rings."
            ),
            mcq(
                "Which is NOT a workplace etiquette?",
                ["Being punctual", "Loud conversations", "Respecting colleagues", "Clean workspace"],
                1,
                "Loud conversations disturb others and are unprofessional."
            ),
            mcq(
                "First impression is created within:",
                ["10 minutes", "1 hour", "A few seconds", "1 day"],
                2,
                "First impressions are formed within seconds of meeting someone."
            ),
        ],

        questions: [
            qa(
                "What is business etiquette? Explain the important rules to follow at the workplace.",
                "Business etiquette refers to the accepted rules of behaviour in a professional environment. Important workplace etiquette rules include: reaching office on time, dressing professionally according to the dress code, greeting colleagues politely, respecting others' privacy and personal space, keeping the workspace clean and organised, avoiding loud conversations that disturb others, not using mobile phones during meetings, handling disagreements calmly and professionally, and using courteous words like 'please', 'thank you' and 'sorry' when appropriate. Following these etiquettes creates a positive work environment and helps build strong professional relationships.",
                4
            ),
            qa(
                "Explain email etiquette and its importance.",
                "Email etiquette is the set of rules for writing professional and effective emails. Important rules include: using a clear and specific subject line, starting with a proper greeting like 'Dear Sir/Madam', keeping the message short and to the point, using professional and polite language, checking spelling and grammar before sending, replying to emails within 24 hours, ending with a proper closing and signature containing name and contact details, and avoiding ALL CAPS which looks like shouting. Following email etiquette is important because emails represent you and your organisation. Poor email writing can damage professional reputation and create misunderstandings.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — Interview Skills and Group Discussion
========================================================= */

const interviewGD = createTopic(
    "interview-skills-and-group-discussion",
    "Interview Skills and Group Discussion",

    [
        definition(
            "Interview",
            "An interview is a formal meeting in which one or more persons question, consult or evaluate another person, usually for a job or admission."
        ),

        definition(
            "Group Discussion (GD)",
            "Group Discussion is a technique in which a group of people discusses a given topic to share ideas and reach conclusions, often used in selection processes."
        ),

        heading("Types of Interviews"),

        table(
            ["Type", "Description"],
            [
                ["Personal Interview", "One-to-one with interviewer"],
                ["Panel Interview", "Multiple interviewers, one candidate"],
                ["Group Interview", "Multiple candidates together"],
                ["Telephonic Interview", "Interview over phone"],
                ["Video Interview", "Interview over video call"],
                ["Technical Interview", "Focus on technical skills"],
                ["HR Interview", "Focus on personality and fit"],
                ["Stress Interview", "Tests candidate under pressure"],
            ]
        ),

        heading("Interview Preparation"),

        steps([
            "Research the company thoroughly.",
            "Understand the job description.",
            "Update and print your resume.",
            "Prepare answers to common questions.",
            "Practise mock interviews.",
            "Prepare your own questions to ask.",
            "Choose professional attire the night before.",
            "Reach the venue 15-20 minutes early.",
            "Carry required documents in a folder.",
            "Stay calm and confident.",
        ]),

        heading("Common Interview Questions"),

        list([
            "Tell me about yourself.",
            "Why should we hire you?",
            "What are your strengths and weaknesses?",
            "Where do you see yourself in 5 years?",
            "Why do you want to join our company?",
            "Why did you choose this career?",
            "Describe a challenge you faced and how you handled it.",
            "Do you have any questions for us?",
        ]),

        heading("Dos and Donts in Interview"),

        table(
            ["Do", "Don't"],
            [
                ["Dress professionally", "Wear casual/dirty clothes"],
                ["Reach early", "Be late"],
                ["Maintain eye contact", "Look here and there"],
                ["Give a firm handshake", "Give a weak handshake"],
                ["Listen carefully", "Interrupt the interviewer"],
                ["Be honest", "Lie about qualifications"],
                ["Show enthusiasm", "Look bored"],
                ["Say thank you at the end", "Leave without greeting"],
            ]
        ),

        heading("Group Discussion"),

        heading("Purpose of GD"),

        list([
            "Test communication skills.",
            "Check knowledge on current topics.",
            "Evaluate leadership qualities.",
            "Assess teamwork ability.",
            "Judge analytical and reasoning skills.",
            "Check confidence and composure.",
        ]),

        heading("Types of GD Topics"),

        table(
            ["Type", "Example"],
            [
                ["Factual", "Impact of AI on jobs"],
                ["Controversial", "Should exams be online?"],
                ["Abstract", "Colour of happiness"],
                ["Case-based", "Solve a business problem"],
                ["Current Affairs", "Digital India initiative"],
            ]
        ),

        heading("Tips for Effective Group Discussion"),

        steps([
            "Listen carefully to the topic.",
            "Take 30 seconds to organise your thoughts.",
            "Be the first to speak if you have clarity.",
            "Speak clearly and confidently.",
            "Support your points with facts and examples.",
            "Do not interrupt or shout at others.",
            "Give chance to quiet members.",
            "Maintain positive body language.",
            "Conclude the discussion if you get a chance.",
            "Avoid arguments; stay calm.",
        ]),

        heading("Skills Evaluated in GD"),

        table(
            ["Skill", "How it is Judged"],
            [
                ["Communication", "Clarity and fluency of speech"],
                ["Knowledge", "Depth of understanding on topic"],
                ["Leadership", "Guiding the discussion"],
                ["Teamwork", "Working with others"],
                ["Confidence", "Body language and tone"],
                ["Listening", "Responding to others' points"],
                ["Reasoning", "Logical arguments"],
            ]
        ),

        heading("Common Mistakes in GD"),

        list([
            "Speaking too much or too little.",
            "Interrupting others.",
            "Shouting or getting emotional.",
            "Repeating others' points.",
            "Going off-topic.",
            "Being aggressive.",
            "Poor body language.",
        ]),

        note(
            "In GD, quality matters more than quantity. Speaking one meaningful point is better than speaking many irrelevant ones.",
            "tip",
            "GD Success Mantra"
        ),

        keyPoints([
            "Interviews assess personality, skills and job fit.",
            "Preparation, dress and body language are key to interview success.",
            "GD tests communication, teamwork, leadership and knowledge.",
            "Speak clearly, listen well and stay calm in GD.",
            "Never interrupt or dominate the discussion.",
        ]),
    ],

    {
        summary:
            "Master interview preparation, common questions, group discussion techniques and skills evaluated by employers.",
        minutes: 13,
        tags: ["interview", "group-discussion", "career", "important"],

        mcqs: [
            mcq(
                "In an interview, you should reach:",
                ["Exactly on time", "15-20 minutes early", "5 minutes late", "1 hour early"],
                1,
                "Reaching 15-20 minutes early is professional."
            ),
            mcq(
                "Which is NOT a type of interview?",
                ["Panel", "Telephonic", "Technical", "Silent"],
                3,
                "Silent is not a recognised type of interview."
            ),
            mcq(
                "In GD, one should:",
                ["Interrupt others", "Shout loudly", "Listen and speak clearly", "Repeat others' points"],
                2,
                "Listening and speaking clearly are important in GD."
            ),
            mcq(
                "Which skill is NOT evaluated in a Group Discussion?",
                ["Communication", "Leadership", "Cooking", "Teamwork"],
                2,
                "Cooking is not evaluated in a GD."
            ),
        ],

        questions: [
            qa(
                "Explain the steps to prepare for a job interview.",
                "Proper interview preparation is essential for success. The main steps are: (1) Research the company — know its business, products, values and recent news. (2) Understand the job description — know what skills are required. (3) Update your resume and print copies to carry. (4) Prepare answers to common questions like 'Tell me about yourself' and 'Why should we hire you'. (5) Practise mock interviews with friends or mentors. (6) Prepare your own questions to ask the interviewer. (7) Choose professional attire and keep it ready the night before. (8) Reach the venue 15-20 minutes early. (9) Carry required documents in a neat folder. (10) Stay calm, confident and positive. Good preparation reduces nervousness and increases the chances of success.",
                4
            ),
            qa(
                "What is Group Discussion? Explain the skills evaluated and tips for effective GD.",
                "Group Discussion (GD) is a selection technique where a group of candidates discuss a given topic. It is widely used in job selection and college admissions. Skills evaluated in GD include communication, subject knowledge, leadership, teamwork, confidence, listening ability and logical reasoning. Tips for effective GD: (1) Listen to the topic carefully; (2) Take a moment to organise thoughts; (3) Be the first to speak if you have clarity; (4) Speak clearly and confidently; (5) Support points with facts and examples; (6) Do not interrupt or shout; (7) Give chance to quieter members; (8) Maintain positive body language; (9) Try to conclude the discussion; (10) Stay calm and avoid arguments. Remember, quality of contribution matters more than quantity.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 5 — Career Planning and Resume Writing
========================================================= */

const careerResume = createTopic(
    "career-planning-and-resume-writing",
    "Career Planning and Resume Writing",

    [
        definition(
            "Career Planning",
            "Career planning is the process of setting career goals, identifying required skills and creating a step-by-step plan to achieve those goals."
        ),

        definition(
            "Resume",
            "A resume is a formal document that provides a summary of a person's education, skills, experience and achievements, used to apply for jobs."
        ),

        heading("Steps in Career Planning"),

        steps([
            "Self assessment — Identify interests, strengths and values.",
            "Explore career options — Research different fields.",
            "Set short-term and long-term career goals.",
            "Identify skills needed for chosen career.",
            "Get education, training and certifications.",
            "Gain experience through internships and projects.",
            "Build a strong network.",
            "Prepare resume and apply for jobs.",
            "Review and update plan regularly.",
        ]),

        heading("Career Options in IT for BCA Students"),

        table(
            ["Role", "Description"],
            [
                ["Software Developer", "Writes code for applications"],
                ["Web Developer", "Builds websites and web apps"],
                ["Mobile App Developer", "Creates Android/iOS apps"],
                ["Data Analyst", "Analyses data for business insights"],
                ["Cyber Security Expert", "Protects systems from threats"],
                ["UI/UX Designer", "Designs user interfaces"],
                ["Cloud Engineer", "Manages cloud infrastructure"],
                ["Database Administrator", "Manages databases"],
                ["System Analyst", "Analyses IT systems"],
                ["Game Developer", "Develops video games"],
            ]
        ),

        heading("Resume vs CV vs Bio-data"),

        table(
            ["Basis", "Resume", "CV", "Bio-data"],
            [
                ["Full Form", "Summary", "Curriculum Vitae", "Biographical Data"],
                ["Length", "1-2 pages", "Detailed, multiple pages", "1 page"],
                ["Content", "Skills and experience", "Complete career history", "Personal details"],
                ["Used For", "Job applications", "Academic/research jobs", "Marriage, government forms"],
            ]
        ),

        heading("Sections of a Good Resume"),

        list([
            "Contact Information — Name, phone, email, LinkedIn.",
            "Career Objective — Short statement of goals.",
            "Education — Degrees with year and percentage.",
            "Technical Skills — Programming languages, tools.",
            "Projects — Academic and personal projects.",
            "Internships / Experience — With duration and role.",
            "Certifications — Online courses and workshops.",
            "Achievements — Awards, competitions, ranks.",
            "Extra-curricular activities — Sports, clubs.",
            "References — Optional, mentors or professors.",
        ]),

        heading("Sample Resume Structure"),

        code(
            `RAHUL SHARMA
Email: rahul@example.com | Phone: +91 98765 43210
LinkedIn: linkedin.com/in/rahulsharma
GitHub: github.com/rahulsharma

CAREER OBJECTIVE
Motivated BCA student seeking a software developer role to
apply my skills in web development and problem-solving.

EDUCATION
- BCA, XYZ University                       2023-2026
  CGPA: 8.5/10
- HSC, ABC School                           2023
  Percentage: 82%

TECHNICAL SKILLS
- Languages: JavaScript, Python, Java, C++
- Web: HTML, CSS, React, Node.js
- Database: MySQL, MongoDB
- Tools: Git, VS Code, Postman

PROJECTS
1. E-Commerce Website (React, Node.js, MongoDB)
   - Built a full-stack online shopping site.
   - Implemented user login, cart and payment.

2. Student Management System (Java, MySQL)
   - Managed student records with CRUD operations.

INTERNSHIPS
Web Developer Intern | ABC Tech           May-July 2025
- Developed responsive web pages using React.
- Integrated REST APIs and fixed bugs.

CERTIFICATIONS
- JavaScript Complete Course - Udemy
- Google Data Analytics - Coursera

ACHIEVEMENTS
- Winner, College Hackathon 2024
- 2nd Rank in Web Development Competition

EXTRA-CURRICULAR
- Member, Coding Club
- Volunteer, Tech Fest 2024`,
            "text",
            "Sample Resume Format"
        ),

        heading("Tips for Writing a Great Resume"),

        list([
            "Keep it 1-2 pages maximum.",
            "Use a clean and simple format.",
            "Use action verbs like 'Developed', 'Managed', 'Created'.",
            "Highlight achievements with numbers.",
            "Tailor resume for each job.",
            "Use proper grammar and spelling.",
            "Save as PDF for sending.",
            "Do not include false information.",
            "Update regularly.",
            "Add a professional email address.",
        ]),

        heading("Common Resume Mistakes"),

        list([
            "Spelling and grammar errors.",
            "Using fancy fonts and colours.",
            "Including irrelevant information.",
            "Making it too long.",
            "Using unprofessional email.",
            "Copying resumes from others.",
            "Not customising for the job.",
            "Missing contact information.",
        ]),

        heading("Cover Letter"),

        definition(
            "Cover Letter",
            "A cover letter is a one-page document sent along with a resume, explaining why the candidate is a good fit for the job."
        ),

        text(
            "A good cover letter has three parts: Introduction (why you are applying), Body (your skills and why you are suitable), and Closing (thank you and request for interview)."
        ),

        note(
            "Your resume is your first impression on the employer. Spend time to make it perfect. Recruiters spend only 6-8 seconds scanning a resume before deciding.",
            "warning",
            "First Screening"
        ),

        keyPoints([
            "Career planning involves self-assessment, goal setting and skill building.",
            "BCA offers many career options in software, data, cyber security and design.",
            "Resume is a summary; CV is detailed; Bio-data is personal.",
            "A good resume is clear, concise and error-free.",
            "Cover letter supports the resume and explains job interest.",
        ]),
    ],

    {
        summary:
            "Learn career planning, career options for BCA students, resume writing techniques and cover letter basics.",
        minutes: 13,
        tags: ["career", "resume", "cv", "cover-letter", "important"],

        mcqs: [
            mcq(
                "A resume should ideally be:",
                ["10 pages long", "1-2 pages", "5-6 pages", "One paragraph"],
                1,
                "A good resume is 1-2 pages long."
            ),
            mcq(
                "CV stands for:",
                ["Career Vision", "Curriculum Vitae", "Certified Verification", "Company Verification"],
                1,
                "CV means Curriculum Vitae."
            ),
            mcq(
                "Which is NOT a career option for BCA students?",
                ["Software Developer", "Data Analyst", "Doctor", "Web Developer"],
                2,
                "Doctor requires medical qualification, not BCA."
            ),
            mcq(
                "A cover letter is:",
                [
                    "A book cover",
                    "A one-page letter sent with resume",
                    "A magazine cover",
                    "A photo cover",
                ],
                1,
                "A cover letter is sent along with the resume to explain job fit."
            ),
        ],

        questions: [
            qa(
                "What is career planning? Explain its steps.",
                "Career planning is the process of setting professional goals and creating a plan to achieve them. Its main steps are: (1) Self-assessment — identify your interests, strengths, weaknesses and values; (2) Explore career options — research different fields and industries; (3) Set short-term and long-term career goals; (4) Identify skills needed for your chosen career; (5) Get proper education, training and certifications; (6) Gain practical experience through internships and projects; (7) Build a strong professional network; (8) Prepare a good resume and apply for suitable jobs; (9) Review and update your career plan regularly. Career planning helps in making informed decisions and achieving professional success.",
                4
            ),
            qa(
                "Differentiate between Resume, CV and Bio-data.",
                "Resume, CV and Bio-data are all documents used to present personal information but they differ in purpose and content. A Resume is a short 1-2 page summary of skills, education and experience, mainly used for job applications. A CV (Curriculum Vitae) is a detailed document covering complete academic and professional history, often multiple pages long, used mainly for academic and research positions. Bio-data is a one-page document that focuses on personal details like name, age, gender, religion, hobbies and family background, commonly used for marriage proposals and government applications. Resume focuses on skills, CV focuses on career history, and Bio-data focuses on personal information.",
                4
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit2Topics = [
    communicationSkills,
    interpersonalTeamwork,
    etiquetteGrooming,
    interviewGD,
    careerResume,
];