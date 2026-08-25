/* =========================================================
   BCA • SEM 4 • Integrated Personality Development & Life Skills
   UNIT 1 — Personality Development and Self Awareness
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
   TOPIC 1 — Introduction to Personality Development
========================================================= */

const introToPersonality = createTopic(
    "introduction-to-personality-development",
    "Introduction to Personality Development",

    [
        definition(
            "Personality",
            "Personality is the combination of physical, mental, emotional and social characteristics that make each person unique. It reflects how a person thinks, feels, behaves and interacts with others."
        ),

        definition(
            "Personality Development",
            "Personality development is the continuous process of improving one's inner and outer qualities such as confidence, communication, attitude, appearance and behaviour to become a better and more effective person."
        ),

        text(
            "In today's competitive world, technical skills alone are not enough. Employers look for well-rounded individuals with good communication, positive attitude, teamwork ability and confidence. Personality development helps students prepare for interviews, workplace and life."
        ),

        heading("Determinants of Personality"),

        table(
            ["Factor", "Description"],
            [
                ["Heredity", "Physical traits, intelligence and temperament inherited from parents"],
                ["Family", "Values, beliefs and habits learned from family members"],
                ["Environment", "Society, culture and surroundings that shape behaviour"],
                ["Education", "Knowledge, skills and thinking developed through learning"],
                ["Experience", "Life events and situations that build character"],
                ["Peer Group", "Friends and colleagues who influence attitudes"],
            ]
        ),

        heading("Types of Personality"),

        list([
            "Introvert — Reserved, thoughtful, prefers solitude and deep thinking.",
            "Extrovert — Outgoing, energetic, enjoys social interactions.",
            "Ambivert — Balanced mix of introvert and extrovert traits.",
            "Type A — Competitive, ambitious, time-conscious.",
            "Type B — Relaxed, patient, easy-going.",
        ]),

        heading("Big Five Personality Traits (OCEAN Model)"),

        table(
            ["Trait", "Meaning"],
            [
                ["Openness", "Creativity, curiosity and willingness to try new things"],
                ["Conscientiousness", "Discipline, responsibility and organisation"],
                ["Extraversion", "Sociability, energy and assertiveness"],
                ["Agreeableness", "Kindness, cooperation and trust"],
                ["Neuroticism", "Emotional stability vs anxiety and moodiness"],
            ]
        ),

        heading("Importance of Personality Development"),

        list([
            "Boosts self-confidence and self-esteem.",
            "Improves communication and interpersonal skills.",
            "Helps in career growth and job interviews.",
            "Develops positive attitude and thinking.",
            "Enhances leadership and decision-making abilities.",
            "Improves body language and appearance.",
            "Helps in handling stress and challenges.",
        ]),

        note(
            "Personality development is a lifelong process. It is not about changing who you are, but about improving yourself to reach your full potential.",
            "tip",
            "Remember"
        ),

        keyPoints([
            "Personality includes inner qualities and outer behaviour.",
            "It is shaped by heredity, family, environment and experience.",
            "The Big Five (OCEAN) is the most accepted personality model.",
            "Personality development is essential for personal and professional success.",
            "It improves confidence, communication and career opportunities.",
        ]),
    ],

    {
        summary:
            "Understand the meaning of personality, factors that shape it, personality types and the importance of personality development.",
        minutes: 12,
        tags: ["personality", "self-development", "life-skills", "important"],

        mcqs: [
            mcq(
                "Which of the following is NOT a determinant of personality?",
                ["Heredity", "Family", "Environment", "Weather"],
                3,
                "Weather is not a major determinant of personality."
            ),
            mcq(
                "The Big Five personality model is also called:",
                ["OCEAN", "RIVER", "STARS", "LAKES"],
                0,
                "OCEAN stands for Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism."
            ),
            mcq(
                "A person who is balanced between introvert and extrovert is called:",
                ["Type A", "Ambivert", "Neurotic", "Type B"],
                1,
                "Ambivert has qualities of both introvert and extrovert."
            ),
            mcq(
                "Personality development is:",
                ["A one-time process", "A lifelong process", "Only for children", "Only for adults"],
                1,
                "Personality development is a continuous lifelong process."
            ),
        ],

        questions: [
            qa(
                "What is personality? Explain the factors that determine personality.",
                "Personality is the unique combination of physical, mental, emotional and social characteristics of an individual. It reflects how a person thinks, feels and behaves. The main factors that determine personality are: (1) Heredity — traits inherited from parents; (2) Family — values and habits learned at home; (3) Environment — society and culture around the person; (4) Education — knowledge and skills gained through learning; (5) Experience — life events that shape character; and (6) Peer group — influence of friends and colleagues.",
                4
            ),
            qa(
                "Explain the Big Five personality traits.",
                "The Big Five personality model, also known as OCEAN, describes personality using five main traits. Openness refers to creativity and willingness to try new experiences. Conscientiousness means being disciplined, responsible and organised. Extraversion is about being sociable, energetic and assertive. Agreeableness includes kindness, cooperation and trust. Neuroticism refers to emotional stability, where high neuroticism means anxiety and mood swings while low neuroticism means calmness. This model is widely used in psychology and human resource management.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — Self Awareness and Self Esteem
========================================================= */

const selfAwareness = createTopic(
    "self-awareness-and-self-esteem",
    "Self Awareness and Self Esteem",

    [
        definition(
            "Self Awareness",
            "Self awareness is the ability to understand one's own emotions, thoughts, strengths, weaknesses, values and behaviour, and how they affect others."
        ),

        definition(
            "Self Esteem",
            "Self esteem is the overall opinion a person has about themselves — how much they value, respect and accept themselves."
        ),

        heading("Types of Self Awareness"),

        table(
            ["Type", "Description"],
            [
                ["Internal Self Awareness", "Understanding your own values, passions, thoughts and feelings"],
                ["External Self Awareness", "Understanding how others see you"],
            ]
        ),

        heading("SWOT Analysis for Self Assessment"),

        definition(
            "SWOT Analysis",
            "A self-assessment tool that helps a person identify their Strengths, Weaknesses, Opportunities and Threats."
        ),

        table(
            ["Element", "Meaning", "Example"],
            [
                ["Strengths", "Positive qualities and skills", "Good communication, coding skills"],
                ["Weaknesses", "Areas needing improvement", "Stage fear, poor time management"],
                ["Opportunities", "External chances for growth", "Internship, workshops, courses"],
                ["Threats", "External challenges", "Competition, financial issues"],
            ]
        ),

        heading("Johari Window"),

        definition(
            "Johari Window",
            "A psychological model developed by Joseph Luft and Harrington Ingham that helps people understand themselves and their relationship with others through four quadrants."
        ),

        table(
            ["Quadrant", "Known to Self", "Known to Others"],
            [
                ["Open / Arena", "Yes", "Yes"],
                ["Blind Spot", "No", "Yes"],
                ["Hidden / Facade", "Yes", "No"],
                ["Unknown", "No", "No"],
            ]
        ),

        heading("Building High Self Esteem"),

        steps([
            "Identify and accept your strengths and weaknesses.",
            "Set realistic and achievable goals.",
            "Avoid negative self-talk and replace it with positive affirmations.",
            "Celebrate small achievements.",
            "Surround yourself with positive people.",
            "Take care of physical and mental health.",
            "Learn from failures instead of fearing them.",
        ]),

        heading("High vs Low Self Esteem"),

        table(
            ["High Self Esteem", "Low Self Esteem"],
            [
                ["Confident in decisions", "Doubts own decisions"],
                ["Accepts compliments", "Rejects compliments"],
                ["Handles criticism well", "Feels hurt easily"],
                ["Takes healthy risks", "Avoids challenges"],
                ["Positive attitude", "Negative self-talk"],
            ]
        ),

        note(
            "Self awareness is the foundation of emotional intelligence. Once you know yourself well, you can improve, communicate better and build stronger relationships.",
            "tip",
            "Foundation Skill"
        ),

        keyPoints([
            "Self awareness means understanding your own emotions and behaviour.",
            "Self esteem is how much you value yourself.",
            "SWOT analysis helps assess strengths, weaknesses, opportunities and threats.",
            "Johari Window has four quadrants: Open, Blind, Hidden and Unknown.",
            "High self esteem leads to confidence and better decision making.",
        ]),
    ],

    {
        summary:
            "Learn about self awareness, self esteem, SWOT analysis and the Johari Window model for personal growth.",
        minutes: 11,
        tags: ["self-awareness", "self-esteem", "swot", "johari-window", "important"],

        mcqs: [
            mcq(
                "SWOT stands for:",
                [
                    "Strengths, Weaknesses, Opportunities, Threats",
                    "Skills, Work, Options, Tasks",
                    "Study, Write, Observe, Think",
                    "Speak, Walk, Organise, Talk",
                ],
                0,
                "SWOT stands for Strengths, Weaknesses, Opportunities and Threats."
            ),
            mcq(
                "The Johari Window was developed by:",
                ["Freud", "Luft and Ingham", "Maslow", "Skinner"],
                1,
                "It was developed by Joseph Luft and Harrington Ingham."
            ),
            mcq(
                "Which quadrant of the Johari Window is known to others but not to self?",
                ["Open", "Blind Spot", "Hidden", "Unknown"],
                1,
                "Blind Spot is known to others but not to self."
            ),
            mcq(
                "High self esteem is characterised by:",
                ["Fear of criticism", "Confidence", "Negative thinking", "Avoiding decisions"],
                1,
                "High self esteem means confidence and positive self-image."
            ),
        ],

        questions: [
            qa(
                "What is SWOT analysis? How is it useful for personal development?",
                "SWOT analysis is a self-assessment tool that helps individuals identify their Strengths, Weaknesses, Opportunities and Threats. Strengths are positive qualities like good communication or technical skills. Weaknesses are areas that need improvement such as stage fear or poor time management. Opportunities are external chances for growth like internships or new courses. Threats are external challenges like competition or financial problems. By analysing these four areas, a person can plan how to use strengths, improve weaknesses, grab opportunities and prepare for threats, leading to better career and personal growth.",
                4
            ),
            qa(
                "Explain the Johari Window model.",
                "The Johari Window is a model developed by Joseph Luft and Harrington Ingham to improve self-awareness and interpersonal relationships. It has four quadrants: (1) Open Area — traits known to self and others; (2) Blind Spot — traits known to others but not to self; (3) Hidden Area — traits known to self but hidden from others; (4) Unknown Area — traits unknown to both self and others. By seeking feedback and self-disclosure, a person can expand the Open Area, which leads to better communication and stronger relationships.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — Attitude and Positive Thinking
========================================================= */

const attitudeAndThinking = createTopic(
    "attitude-and-positive-thinking",
    "Attitude and Positive Thinking",

    [
        definition(
            "Attitude",
            "Attitude is a settled way of thinking or feeling about someone or something, which reflects in a person's behaviour."
        ),

        definition(
            "Positive Thinking",
            "Positive thinking is the mental attitude of expecting good and favourable results in every situation, focusing on solutions rather than problems."
        ),

        heading("Components of Attitude (ABC Model)"),

        table(
            ["Component", "Meaning", "Example"],
            [
                ["Affective", "Feelings and emotions", "I like programming"],
                ["Behavioural", "Actions or intentions", "I practise coding daily"],
                ["Cognitive", "Beliefs and thoughts", "Programming builds my career"],
            ]
        ),

        heading("Types of Attitude"),

        list([
            "Positive Attitude — Optimistic, hopeful and confident approach.",
            "Negative Attitude — Pessimistic, doubtful and blaming approach.",
            "Neutral Attitude — Indifferent, neither positive nor negative.",
        ]),

        heading("Positive vs Negative Attitude"),

        table(
            ["Positive Attitude", "Negative Attitude"],
            [
                ["Sees opportunities", "Sees problems"],
                ["I can do it", "I cannot do it"],
                ["Learns from failure", "Blames others for failure"],
                ["Motivates others", "Demotivates others"],
                ["Attracts success", "Repels success"],
            ]
        ),

        heading("Benefits of Positive Thinking"),

        list([
            "Improves mental and physical health.",
            "Reduces stress and anxiety.",
            "Increases productivity and creativity.",
            "Builds stronger relationships.",
            "Helps achieve goals faster.",
            "Improves problem-solving ability.",
            "Boosts confidence and self-esteem.",
        ]),

        heading("How to Develop Positive Attitude"),

        steps([
            "Start each day with gratitude and positive affirmations.",
            "Avoid negative self-talk.",
            "Surround yourself with positive people.",
            "Read motivational books and watch inspiring content.",
            "Focus on solutions, not problems.",
            "Practise meditation and deep breathing.",
            "Learn from failures and move forward.",
            "Help others and stay kind.",
        ]),

        heading("Attitude Change"),

        text(
            "Attitudes can be changed through education, experience, communication and self-reflection. Psychologist Leon Festinger's Cognitive Dissonance Theory explains that when a person's beliefs and actions conflict, they feel discomfort and try to change either their belief or behaviour to reduce it."
        ),

        note(
            "Your attitude, not your aptitude, will determine your altitude. — Zig Ziglar",
            "info",
            "Motivational Quote"
        ),

        keyPoints([
            "Attitude has three components: Affective, Behavioural and Cognitive.",
            "Positive attitude leads to better health, relationships and success.",
            "Negative attitude blocks growth and creates stress.",
            "Positive thinking can be developed through practice.",
            "Attitude is more important than talent for long-term success.",
        ]),
    ],

    {
        summary:
            "Explore attitude, its components, types and the power of positive thinking for personal and professional success.",
        minutes: 11,
        tags: ["attitude", "positive-thinking", "mindset", "important"],

        mcqs: [
            mcq(
                "The three components of attitude are:",
                [
                    "Affective, Behavioural, Cognitive",
                    "Physical, Mental, Social",
                    "Read, Write, Speak",
                    "Think, Feel, Act",
                ],
                0,
                "The ABC model of attitude has Affective, Behavioural and Cognitive components."
            ),
            mcq(
                "Which of the following shows positive attitude?",
                ["I cannot do it", "I will try my best", "It is impossible", "Nobody supports me"],
                1,
                "I will try my best shows a positive and hopeful attitude."
            ),
            mcq(
                "Cognitive Dissonance Theory was given by:",
                ["Freud", "Maslow", "Festinger", "Skinner"],
                2,
                "Leon Festinger gave the Cognitive Dissonance Theory."
            ),
            mcq(
                "Positive thinking helps in:",
                ["Increasing stress", "Reducing productivity", "Reducing stress", "Blaming others"],
                2,
                "Positive thinking reduces stress and improves well-being."
            ),
        ],

        questions: [
            qa(
                "Explain the ABC model of attitude with examples.",
                "The ABC model explains attitude through three components. (A) Affective component refers to feelings and emotions, for example 'I like programming.' (B) Behavioural component refers to actions or intentions, for example 'I practise coding every day.' (C) Cognitive component refers to beliefs and thoughts, for example 'Programming will build my career.' All three components work together to form a person's overall attitude toward a subject, person or situation. Understanding this model helps in analysing and changing attitudes.",
                4
            ),
            qa(
                "Differentiate between positive and negative attitude. Also explain the benefits of positive thinking.",
                "Positive attitude means being optimistic, hopeful and confident. A positive person sees opportunities in problems, learns from failure and motivates others. Negative attitude means being pessimistic and doubtful. A negative person sees problems, blames others and demotivates people. Positive thinking has many benefits: it improves mental and physical health, reduces stress and anxiety, increases productivity, builds stronger relationships, helps achieve goals faster, improves problem-solving ability and boosts self-confidence. Therefore, developing a positive attitude is essential for success and happiness in life.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — Goal Setting and Time Management
========================================================= */

const goalAndTime = createTopic(
    "goal-setting-and-time-management",
    "Goal Setting and Time Management",

    [
        definition(
            "Goal",
            "A goal is a desired result or achievement that a person plans and commits to work toward within a specific time frame."
        ),

        definition(
            "Time Management",
            "Time management is the process of planning and organising how to divide time between different activities to increase efficiency and productivity."
        ),

        heading("Types of Goals"),

        table(
            ["Type", "Duration", "Example"],
            [
                ["Short-term", "Days to weeks", "Complete a project this week"],
                ["Medium-term", "Months", "Learn React in 3 months"],
                ["Long-term", "Years", "Become a software engineer"],
                ["Personal", "Anytime", "Improve health"],
                ["Professional", "Anytime", "Get promoted"],
            ]
        ),

        heading("SMART Goals"),

        definition(
            "SMART Goals",
            "A goal-setting framework that ensures goals are Specific, Measurable, Achievable, Relevant and Time-bound."
        ),

        table(
            ["Letter", "Meaning", "Example"],
            [
                ["S — Specific", "Clear and well-defined", "Learn JavaScript basics"],
                ["M — Measurable", "Can be tracked", "Complete 30 tutorials"],
                ["A — Achievable", "Realistic and possible", "Study 1 hour daily"],
                ["R — Relevant", "Aligned with life goals", "Needed for web development"],
                ["T — Time-bound", "Has a deadline", "Finish in 2 months"],
            ]
        ),

        heading("Benefits of Goal Setting"),

        list([
            "Provides clear direction in life.",
            "Improves focus and concentration.",
            "Increases motivation.",
            "Helps measure progress.",
            "Builds self-confidence.",
            "Reduces confusion and stress.",
        ]),

        heading("Time Management Techniques"),

        table(
            ["Technique", "Description"],
            [
                ["Eisenhower Matrix", "Divide tasks by urgency and importance"],
                ["Pomodoro Technique", "Work 25 minutes, break 5 minutes"],
                ["To-Do List", "Write daily tasks and tick them off"],
                ["Time Blocking", "Assign fixed time slots to tasks"],
                ["80/20 Rule (Pareto)", "80% results come from 20% efforts"],
                ["ABC Analysis", "A=Important, B=Medium, C=Low priority"],
            ]
        ),

        heading("Eisenhower Matrix"),

        table(
            ["Quadrant", "Type", "Action"],
            [
                ["Q1", "Urgent & Important", "Do it now"],
                ["Q2", "Not Urgent but Important", "Schedule it"],
                ["Q3", "Urgent but Not Important", "Delegate it"],
                ["Q4", "Not Urgent & Not Important", "Eliminate it"],
            ]
        ),

        heading("Common Time Wasters"),

        list([
            "Excessive use of social media.",
            "Procrastination or postponing tasks.",
            "Poor planning.",
            "Unnecessary meetings.",
            "Multitasking without focus.",
            "Watching TV or gaming for long hours.",
            "Lack of clear goals.",
        ]),

        heading("Tips for Better Time Management"),

        steps([
            "Set SMART goals every week.",
            "Prioritise tasks using the Eisenhower Matrix.",
            "Avoid multitasking; focus on one task at a time.",
            "Use planners, calendars or apps like Google Calendar.",
            "Take regular short breaks to stay fresh.",
            "Say no to unimportant activities.",
            "Review your day at night and plan the next day.",
        ]),

        note(
            "Time is the most valuable resource. Once lost, it cannot be regained. Managing time well is the key to achieving success in studies and career.",
            "warning",
            "Time is Money"
        ),

        keyPoints([
            "Goals give direction and motivation in life.",
            "SMART goals are Specific, Measurable, Achievable, Relevant, Time-bound.",
            "Time management increases productivity and reduces stress.",
            "Eisenhower Matrix helps prioritise tasks.",
            "Pomodoro Technique improves focus.",
            "Avoiding time wasters is essential for success.",
        ]),
    ],

    {
        summary:
            "Learn to set SMART goals and use time management techniques like the Eisenhower Matrix and Pomodoro to achieve success.",
        minutes: 12,
        tags: ["goals", "smart", "time-management", "productivity", "important"],

        mcqs: [
            mcq(
                "SMART goals should be:",
                [
                    "Simple, Modern, Achievable, Real, Timely",
                    "Specific, Measurable, Achievable, Relevant, Time-bound",
                    "Special, Meaningful, Active, Right, True",
                    "Short, Medium, Advanced, Rare, Tough",
                ],
                1,
                "SMART = Specific, Measurable, Achievable, Relevant, Time-bound."
            ),
            mcq(
                "The Pomodoro Technique typically uses:",
                ["10 min work, 2 min break", "25 min work, 5 min break", "60 min work, 15 min break", "45 min work, 15 min break"],
                1,
                "Pomodoro uses 25 minutes work followed by a 5 minute break."
            ),
            mcq(
                "Eisenhower Matrix divides tasks based on:",
                ["Colour and size", "Urgency and importance", "Cost and time", "Person and place"],
                1,
                "The matrix divides tasks by urgency and importance."
            ),
            mcq(
                "The 80/20 rule is also known as:",
                ["Pareto Principle", "Peter Principle", "Parkinson Law", "Murphy's Law"],
                0,
                "The 80/20 rule is called the Pareto Principle."
            ),
        ],

        questions: [
            qa(
                "What are SMART goals? Explain with an example.",
                "SMART goals is a framework that ensures goals are clearly defined and achievable. SMART stands for: Specific — the goal must be clear and precise; Measurable — you should be able to track progress; Achievable — the goal must be realistic; Relevant — it should be aligned with your life or career; and Time-bound — it must have a deadline. For example, instead of saying 'I want to learn programming,' a SMART goal would be 'I will complete the JavaScript basics course by studying 1 hour daily and finish it in 2 months.' This makes the goal actionable and trackable.",
                4
            ),
            qa(
                "Explain the Eisenhower Matrix for time management.",
                "The Eisenhower Matrix is a time management tool that helps prioritise tasks based on urgency and importance. It has four quadrants: Q1 — Urgent and Important tasks that must be done immediately, such as submitting an assignment due today; Q2 — Not Urgent but Important tasks that should be scheduled, such as learning new skills; Q3 — Urgent but Not Important tasks that should be delegated, such as answering some emails; Q4 — Not Urgent and Not Important tasks that should be eliminated, such as excessive social media use. Using this matrix helps focus on what truly matters and improves productivity.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 5 — Emotional Intelligence and Stress Management
========================================================= */

const emotionalIntelligence = createTopic(
    "emotional-intelligence-and-stress-management",
    "Emotional Intelligence and Stress Management",

    [
        definition(
            "Emotional Intelligence (EI)",
            "Emotional Intelligence is the ability to recognise, understand, manage and use one's own emotions and the emotions of others effectively."
        ),

        definition(
            "Stress",
            "Stress is the body's mental, emotional or physical response to challenging or demanding situations."
        ),

        heading("Five Components of Emotional Intelligence (Goleman Model)"),

        table(
            ["Component", "Meaning"],
            [
                ["Self Awareness", "Recognising your own emotions"],
                ["Self Regulation", "Controlling and managing emotions"],
                ["Motivation", "Inner drive to achieve goals"],
                ["Empathy", "Understanding others' feelings"],
                ["Social Skills", "Managing relationships and communication"],
            ]
        ),

        heading("Importance of Emotional Intelligence"),

        list([
            "Better relationships at work and home.",
            "Effective leadership and teamwork.",
            "Better decision making.",
            "Handling conflicts peacefully.",
            "Reducing stress and anxiety.",
            "Higher career success — often more important than IQ.",
        ]),

        heading("EQ vs IQ"),

        table(
            ["Basis", "IQ", "EQ"],
            [
                ["Full Form", "Intelligence Quotient", "Emotional Quotient"],
                ["Measures", "Logical and reasoning ability", "Emotional and social skills"],
                ["Nature", "Mostly inherited", "Can be developed"],
                ["Focus", "Academic and technical skills", "People and self-management"],
                ["Career Impact", "Helps get the job", "Helps grow in career"],
            ]
        ),

        heading("Stress and its Types"),

        table(
            ["Type", "Description"],
            [
                ["Eustress", "Positive stress that motivates (e.g., exam preparation)"],
                ["Distress", "Negative stress that harms (e.g., excessive pressure)"],
                ["Acute Stress", "Short-term stress from immediate events"],
                ["Chronic Stress", "Long-term stress from ongoing problems"],
            ]
        ),

        heading("Causes of Stress"),

        list([
            "Academic pressure and exams.",
            "Family issues and financial problems.",
            "Career and job uncertainty.",
            "Relationship problems.",
            "Health issues.",
            "Overuse of social media.",
            "Lack of sleep and poor lifestyle.",
        ]),

        heading("Symptoms of Stress"),

        table(
            ["Type", "Symptoms"],
            [
                ["Physical", "Headache, fatigue, sleep problems, body pain"],
                ["Emotional", "Anxiety, anger, sadness, mood swings"],
                ["Behavioural", "Overeating, avoiding people, poor concentration"],
                ["Cognitive", "Forgetfulness, negative thinking, confusion"],
            ]
        ),

        heading("Stress Management Techniques"),

        steps([
            "Practise deep breathing and meditation daily.",
            "Exercise regularly — walking, yoga or sports.",
            "Maintain a healthy sleep schedule (7-8 hours).",
            "Eat balanced and nutritious food.",
            "Talk to family, friends or counsellors.",
            "Manage time well and avoid procrastination.",
            "Take breaks and pursue hobbies.",
            "Limit social media and screen time.",
            "Think positively and practise gratitude.",
        ]),

        heading("Coping Strategies"),

        table(
            ["Strategy", "Description"],
            [
                ["Problem-focused", "Solve the cause of stress directly"],
                ["Emotion-focused", "Manage emotional response to stress"],
                ["Social support", "Share feelings with trusted people"],
                ["Relaxation", "Yoga, meditation, deep breathing"],
                ["Physical activity", "Exercise to release tension"],
            ]
        ),

        note(
            "Not all stress is bad. A little stress (eustress) can motivate you to perform better. The key is to manage it and not let it control you.",
            "info",
            "Good vs Bad Stress"
        ),

        keyPoints([
            "Emotional Intelligence has 5 components: Self Awareness, Self Regulation, Motivation, Empathy and Social Skills.",
            "EQ is often more important than IQ for career success.",
            "Eustress is positive; distress is negative.",
            "Stress has physical, emotional, behavioural and cognitive symptoms.",
            "Meditation, exercise and social support are key stress busters.",
        ]),
    ],

    {
        summary:
            "Understand Emotional Intelligence, its components, types of stress and effective stress management techniques.",
        minutes: 13,
        tags: ["emotional-intelligence", "eq", "stress-management", "important"],

        mcqs: [
            mcq(
                "The five components of EI were given by:",
                ["Freud", "Goleman", "Maslow", "Skinner"],
                1,
                "Daniel Goleman gave the five-component model of Emotional Intelligence."
            ),
            mcq(
                "Positive stress that motivates a person is called:",
                ["Distress", "Eustress", "Chronic", "Acute"],
                1,
                "Eustress is positive stress that motivates."
            ),
            mcq(
                "Empathy means:",
                ["Feeling sorry", "Understanding others' feelings", "Ignoring others", "Being angry"],
                1,
                "Empathy is the ability to understand others' feelings."
            ),
            mcq(
                "Which of the following is NOT a stress management technique?",
                ["Meditation", "Exercise", "Overeating", "Time management"],
                2,
                "Overeating is a symptom of stress, not a management technique."
            ),
        ],

        questions: [
            qa(
                "Explain the five components of Emotional Intelligence by Daniel Goleman.",
                "Daniel Goleman gave five components of Emotional Intelligence. (1) Self Awareness — recognising your own emotions and how they affect your thoughts and behaviour. (2) Self Regulation — controlling impulsive feelings and managing emotions in healthy ways. (3) Motivation — the inner drive to achieve goals with energy and persistence. (4) Empathy — understanding the emotions of others and considering their feelings. (5) Social Skills — managing relationships, communicating clearly, resolving conflicts and working well in teams. Together, these components help a person succeed personally and professionally.",
                4
            ),
            qa(
                "What is stress? Explain different techniques of stress management.",
                "Stress is the body's response to challenging or demanding situations. It can be physical, emotional or mental. While some stress (eustress) can motivate us, too much stress (distress) affects health and performance. Effective stress management techniques include: (1) Deep breathing and meditation to calm the mind; (2) Regular exercise like walking or yoga to release tension; (3) Maintaining a healthy sleep schedule of 7-8 hours; (4) Eating balanced and nutritious food; (5) Talking to family, friends or counsellors for emotional support; (6) Managing time well and avoiding procrastination; (7) Taking breaks and pursuing hobbies; (8) Practising gratitude and positive thinking. These techniques help maintain mental and physical well-being.",
                4
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit1Topics = [
    introToPersonality,
    selfAwareness,
    attitudeAndThinking,
    goalAndTime,
    emotionalIntelligence,
];