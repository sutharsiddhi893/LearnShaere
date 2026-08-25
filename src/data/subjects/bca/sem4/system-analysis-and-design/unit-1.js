/* =========================================================
   BCA • SEM 4 • System Analysis and Design
   UNIT 1 — System Concepts, SDLC and Requirements Analysis
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
   TOPIC 1 — Introduction to System and System Analysis
========================================================= */

const introSystem = createTopic(
    "introduction-to-system",
    "Introduction to System and System Analysis",

    [
        definition(
            "System",
            "A system is an organised group of interrelated components that work together to achieve a common goal by accepting inputs, processing them and producing outputs."
        ),

        definition(
            "System Analysis",
            "System Analysis is the process of studying a business problem or system to understand its working, identify its requirements and suggest improvements or a new system."
        ),

        definition(
            "System Design",
            "System Design is the process of defining the architecture, modules, interfaces, data and components of a system to satisfy the specified requirements."
        ),

        heading("Characteristics of a System"),

        list([
            "Organisation — arrangement of components in a structured way.",
            "Interaction — components communicate with each other.",
            "Interdependence — one component depends on another.",
            "Integration — components work together as one whole.",
            "Central Objective — every system has a defined goal.",
        ]),

        heading("Elements of a System"),

        table(
            ["Element", "Description"],
            [
                ["Input", "Data or material entering the system"],
                ["Process", "Activities that transform input into output"],
                ["Output", "Result produced after processing"],
                ["Control", "Monitors and regulates the system"],
                ["Feedback", "Information used to improve performance"],
                ["Environment", "External factors that affect the system"],
                ["Boundary", "Limit that separates system from environment"],
            ]
        ),

        heading("Types of Systems"),

        table(
            ["Type", "Description", "Example"],
            [
                ["Physical vs Abstract", "Tangible or conceptual", "Computer / Theory"],
                ["Open vs Closed", "Interacts with environment or not", "Business / Chemical reaction"],
                ["Deterministic vs Probabilistic", "Predictable or uncertain", "Program / Weather"],
                ["Man-made vs Natural", "Created by humans or nature", "Bank / Solar system"],
                ["Manual vs Automated", "Human operated or machine", "Register / ATM"],
            ]
        ),

        heading("Role of System Analyst"),

        list([
            "Study existing system and identify problems.",
            "Gather requirements from users.",
            "Analyse feasibility of proposed solution.",
            "Design new system architecture.",
            "Coordinate between users, management and developers.",
            "Prepare documentation.",
            "Assist in testing and implementation.",
            "Train end users.",
        ]),

        heading("Skills Required for System Analyst"),

        list([
            "Analytical and problem-solving skills.",
            "Technical knowledge of hardware and software.",
            "Good communication and interpersonal skills.",
            "Understanding of business processes.",
            "Project management ability.",
            "Documentation and presentation skills.",
        ]),

        note(
            "A system analyst acts as a bridge between end users and developers. Strong communication skills are as important as technical knowledge.",
            "tip",
            "Analyst Role"
        ),

        keyPoints([
            "A system is a set of interrelated components with a common goal.",
            "System analysis studies problems and requirements.",
            "System design provides the solution architecture.",
            "Systems can be open, closed, deterministic or probabilistic.",
            "System analyst is a bridge between users and developers.",
        ]),
    ],

    {
        summary:
            "Understand the concept of system, its characteristics, elements, types and the role of system analyst.",
        minutes: 12,
        tags: ["system", "analyst", "sad", "important"],

        mcqs: [
            mcq(
                "A system that interacts with its environment is called:",
                ["Closed", "Open", "Static", "Manual"],
                1,
                "An open system exchanges data with its environment."
            ),
            mcq(
                "Which element monitors system performance?",
                ["Input", "Process", "Control", "Output"],
                2,
                "Control monitors and regulates the system."
            ),
            mcq(
                "System analyst mainly acts as:",
                ["Programmer", "Bridge between user and developer", "Tester", "Manager"],
                1,
                "Analyst connects users with technical team."
            ),
            mcq(
                "A weather forecasting system is an example of:",
                ["Deterministic", "Probabilistic", "Closed", "Abstract"],
                1,
                "Weather systems produce uncertain outcomes."
            ),
        ],

        questions: [
            qa(
                "Define system. Explain its characteristics and elements.",
                "A system is an organised group of interrelated components that work together to achieve a common goal by accepting inputs, processing them and producing outputs. Its characteristics include organisation, interaction, interdependence, integration and central objective. The main elements of a system are input, process, output, control, feedback, environment and boundary. Input provides data, process transforms it, output is the result, control regulates performance, feedback improves the system, environment influences it and boundary separates it from the outside world.",
                4
            ),
            qa(
                "Explain the role and skills required for a system analyst.",
                "A system analyst studies the existing system, identifies problems, gathers user requirements, checks feasibility, designs a new system, coordinates with developers and users, prepares documentation and assists in testing and training. Required skills include analytical thinking, problem solving, communication, interpersonal ability, knowledge of hardware and software, understanding of business processes, project management and documentation skills. The analyst acts as a bridge between users and technical developers.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — System Development Life Cycle (SDLC)
========================================================= */

const sdlc = createTopic(
    "system-development-life-cycle",
    "System Development Life Cycle (SDLC)",

    [
        definition(
            "SDLC",
            "The System Development Life Cycle is a structured sequence of phases used to plan, design, develop, test, implement and maintain an information system."
        ),

        heading("Phases of SDLC"),

        steps([
            "Preliminary Investigation — identify the problem and check basic feasibility.",
            "System Analysis — study existing system and gather requirements.",
            "Feasibility Study — evaluate technical, economic and operational feasibility.",
            "System Design — design architecture, database, UI and processes.",
            "Coding / Development — actual programming of the system.",
            "Testing — verify the system works correctly.",
            "Implementation — deploy system for real use.",
            "Maintenance — fix issues and update the system.",
        ]),

        heading("Detailed Phase Description"),

        table(
            ["Phase", "Main Activities", "Output"],
            [
                ["Investigation", "Identify problem, initial study", "Project request"],
                ["Analysis", "Requirement gathering", "SRS document"],
                ["Feasibility", "Check viability", "Feasibility report"],
                ["Design", "Design system components", "Design document"],
                ["Coding", "Write program", "Source code"],
                ["Testing", "Detect and fix bugs", "Tested software"],
                ["Implementation", "Install and train", "Working system"],
                ["Maintenance", "Support and update", "Updated system"],
            ]
        ),

        heading("SDLC Models"),

        table(
            ["Model", "Description", "Best For"],
            [
                ["Waterfall", "Sequential, one phase after another", "Small, clear requirements"],
                ["Prototype", "Build sample first, then refine", "Unclear requirements"],
                ["Spiral", "Iterative with risk analysis", "Large, risky projects"],
                ["Incremental", "Build in small increments", "Modular systems"],
                ["Agile", "Iterative with quick releases", "Changing requirements"],
                ["RAD", "Rapid Application Development", "Time-critical projects"],
            ]
        ),

        heading("Waterfall Model"),

        list([
            "Simple and easy to understand.",
            "Each phase must complete before next starts.",
            "Documentation is created at each phase.",
            "Difficult to go back to previous phase.",
            "Not suitable for changing requirements.",
        ]),

        heading("Prototype Model"),

        list([
            "A working prototype is built quickly.",
            "User feedback is taken and prototype is improved.",
            "Useful when requirements are unclear.",
            "Reduces risk of misunderstanding.",
            "May increase development time.",
        ]),

        heading("Spiral Model"),

        list([
            "Combines iterative and waterfall features.",
            "Includes risk analysis in every loop.",
            "Suitable for large and complex projects.",
            "Expensive to implement.",
            "Each loop has planning, risk, engineering and evaluation.",
        ]),

        heading("Agile Model"),

        list([
            "Delivers software in small iterations called sprints.",
            "Encourages customer collaboration.",
            "Welcomes changing requirements.",
            "Continuous testing and feedback.",
            "Popular frameworks are Scrum and Kanban.",
        ]),

        note(
            "Choice of SDLC model depends on project size, requirements clarity, risk level, time available and customer involvement.",
            "tip",
            "Model Selection"
        ),

        keyPoints([
            "SDLC provides a structured approach to system development.",
            "Waterfall is sequential and rigid.",
            "Prototype helps when requirements are unclear.",
            "Spiral is best for high-risk large projects.",
            "Agile is best for changing requirements.",
        ]),
    ],

    {
        summary:
            "Study the phases of SDLC and different models such as Waterfall, Prototype, Spiral and Agile.",
        minutes: 14,
        tags: ["sdlc", "waterfall", "agile", "prototype", "important"],

        mcqs: [
            mcq(
                "Which SDLC model is sequential?",
                ["Agile", "Spiral", "Waterfall", "Prototype"],
                2,
                "Waterfall follows a strict sequence."
            ),
            mcq(
                "Which model is best for unclear requirements?",
                ["Waterfall", "Prototype", "V-model", "Big Bang"],
                1,
                "Prototype allows requirement refinement."
            ),
            mcq(
                "Risk analysis is a key feature of which model?",
                ["Spiral", "Waterfall", "RAD", "Agile"],
                0,
                "Spiral includes risk analysis in every loop."
            ),
            mcq(
                "The output of analysis phase is:",
                ["Source code", "SRS document", "Test report", "User manual"],
                1,
                "Analysis phase produces the SRS document."
            ),
        ],

        questions: [
            qa(
                "Explain the phases of SDLC.",
                "SDLC has phases: Preliminary Investigation identifies the problem; System Analysis gathers requirements; Feasibility Study evaluates viability; System Design defines architecture and database; Coding involves actual programming; Testing verifies system correctness; Implementation deploys the system for real use; and Maintenance supports and updates the system after deployment. Each phase produces specific deliverables such as SRS, design document, source code, test report and user manual. This structured approach ensures quality and reduces development risk.",
                4
            ),
            qa(
                "Compare Waterfall, Prototype and Agile models.",
                "Waterfall is sequential where each phase must complete before the next starts. It is simple but rigid and not suitable for changing requirements. Prototype builds a working sample first, gets feedback and refines it. It is useful when requirements are unclear but may take more time. Agile delivers software in small iterations called sprints, welcomes changing requirements, encourages customer collaboration and continuous testing. Agile is best for dynamic projects, Waterfall for fixed ones and Prototype for exploratory ones.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — Feasibility Study
========================================================= */

const feasibility = createTopic(
    "feasibility-study",
    "Feasibility Study",

    [
        definition(
            "Feasibility Study",
            "A feasibility study is the analysis of whether a proposed system is practical to develop in terms of technology, cost, time, operations and legality."
        ),

        heading("Objectives of Feasibility Study"),

        list([
            "Determine whether the system can be built.",
            "Evaluate cost versus benefits.",
            "Check technical resources available.",
            "Assess user acceptance and readiness.",
            "Identify risks and constraints.",
            "Support decision to continue or cancel project.",
        ]),

        heading("Types of Feasibility"),

        table(
            ["Type", "Focus", "Question Answered"],
            [
                ["Technical", "Technology, hardware, software", "Can it be built?"],
                ["Economic", "Cost and benefit", "Is it affordable and profitable?"],
                ["Operational", "Day-to-day use", "Will users accept and use it?"],
                ["Schedule", "Time required", "Can it be built on time?"],
                ["Legal", "Laws and regulations", "Is it legally allowed?"],
                ["Social", "Impact on people", "Is it socially acceptable?"],
            ]
        ),

        heading("Technical Feasibility"),

        list([
            "Checks if required technology is available.",
            "Evaluates hardware and software capability.",
            "Considers technical skills of the team.",
            "Studies system performance requirements.",
            "Reviews compatibility with existing systems.",
        ]),

        heading("Economic Feasibility (Cost-Benefit Analysis)"),

        list([
            "Compares total cost with expected benefits.",
            "Includes development, hardware, software and training cost.",
            "Considers tangible benefits like cost saving.",
            "Considers intangible benefits like customer satisfaction.",
            "Calculates payback period and ROI.",
        ]),

        heading("Cost Types"),

        table(
            ["Cost Type", "Example"],
            [
                ["Development cost", "Salary, hardware, software"],
                ["Operational cost", "Maintenance, electricity, staff"],
                ["Tangible benefit", "Cost reduction, more sales"],
                ["Intangible benefit", "Better decision, customer satisfaction"],
            ]
        ),

        heading("Operational Feasibility"),

        list([
            "Assesses if system will be used effectively.",
            "Evaluates user attitude and training needs.",
            "Checks impact on existing business processes.",
            "Considers change management requirements.",
        ]),

        heading("Schedule Feasibility"),

        list([
            "Determines if project can be completed within deadline.",
            "Considers milestones and delivery dates.",
            "Evaluates team size and productivity.",
            "Assesses risk of delays.",
        ]),

        note(
            "A project may be technically feasible but not economically feasible. All types of feasibility must be considered together before making a decision.",
            "warning",
            "Decision Rule"
        ),

        keyPoints([
            "Feasibility study evaluates project viability.",
            "Technical feasibility checks technology and skills.",
            "Economic feasibility uses cost-benefit analysis.",
            "Operational feasibility checks user acceptance.",
            "Schedule feasibility checks time constraints.",
        ]),
    ],

    {
        summary:
            "Study the concept and types of feasibility including technical, economic, operational and schedule feasibility.",
        minutes: 11,
        tags: ["feasibility", "cost-benefit", "sad", "important"],

        mcqs: [
            mcq(
                "Cost-benefit analysis is part of:",
                ["Technical feasibility", "Economic feasibility", "Legal feasibility", "Schedule feasibility"],
                1,
                "Economic feasibility uses cost-benefit analysis."
            ),
            mcq(
                "Which feasibility checks user acceptance?",
                ["Technical", "Operational", "Legal", "Economic"],
                1,
                "Operational feasibility considers user acceptance."
            ),
            mcq(
                "Payback period is calculated in:",
                ["Technical feasibility", "Economic feasibility", "Social feasibility", "Legal feasibility"],
                1,
                "Payback period is an economic measure."
            ),
            mcq(
                "Which feasibility checks time constraints?",
                ["Schedule", "Technical", "Legal", "Social"],
                0,
                "Schedule feasibility checks time constraints."
            ),
        ],

        questions: [
            qa(
                "What is feasibility study? Explain its types.",
                "A feasibility study is the analysis of whether a proposed system is practical to develop in terms of technology, cost, time, operations and legality. Its main types are technical feasibility which checks if the technology and skills are available; economic feasibility which analyses cost versus benefits; operational feasibility which checks user acceptance and process fit; schedule feasibility which evaluates whether the project can be completed in time; legal feasibility which examines regulatory compliance; and social feasibility which considers the impact on society. All types must be positive for a project to proceed.",
                4
            ),
            qa(
                "Explain economic feasibility and cost-benefit analysis.",
                "Economic feasibility determines whether the benefits of the system justify its cost. It uses cost-benefit analysis which compares total expected cost with expected benefits. Costs include development cost such as salary and hardware, and operational cost such as maintenance and staff. Benefits are tangible like cost reduction and increased sales, or intangible like customer satisfaction and better decision making. Techniques like payback period and Return on Investment are used to measure profitability. A project is economically feasible if benefits exceed costs within an acceptable time.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — Requirement Gathering Techniques
========================================================= */

const requirementGathering = createTopic(
    "requirement-gathering-techniques",
    "Requirement Gathering Techniques",

    [
        definition(
            "Requirement Gathering",
            "Requirement gathering is the process of collecting information from users and stakeholders to understand what the new system must do."
        ),

        heading("Types of Requirements"),

        table(
            ["Type", "Description", "Example"],
            [
                ["Functional", "What the system should do", "Login, generate bill"],
                ["Non-Functional", "How the system performs", "Speed, security, usability"],
                ["User", "Written from user's view", "User can search products"],
                ["System", "Detailed technical description", "System stores data in MySQL"],
                ["Domain", "Related to business domain", "GST calculation rule"],
            ]
        ),

        heading("Fact Finding Techniques"),

        list([
            "Interviews",
            "Questionnaires",
            "Observation",
            "Document review",
            "Group discussion / JAD",
            "Prototyping",
            "Site visits",
        ]),

        heading("1. Interviews"),

        list([
            "Direct interaction with users.",
            "Structured, unstructured or semi-structured.",
            "Useful for detailed information.",
            "Time consuming but effective.",
            "Requires good communication skills.",
        ]),

        heading("2. Questionnaires"),

        list([
            "Set of written questions given to users.",
            "Best for collecting data from many users.",
            "Can be open-ended or close-ended.",
            "Less costly and faster than interview.",
            "Response rate may be low.",
        ]),

        heading("3. Observation"),

        list([
            "Analyst watches users doing their work.",
            "Reveals real problems that users may not mention.",
            "Useful for repetitive tasks.",
            "May cause user discomfort.",
            "Time consuming.",
        ]),

        heading("4. Document Review"),

        list([
            "Analyst studies reports, forms and manuals.",
            "Helps understand existing system.",
            "Provides historical information.",
            "May be outdated.",
        ]),

        heading("5. Joint Application Development (JAD)"),

        list([
            "Users, analysts and managers meet in a workshop.",
            "Requirements are gathered collaboratively.",
            "Reduces time and misunderstanding.",
            "Requires skilled facilitator.",
        ]),

        heading("Software Requirements Specification (SRS)"),

        definition(
            "SRS",
            "SRS is a formal document that describes the functional and non-functional requirements of the proposed system."
        ),

        list([
            "Serves as agreement between users and developers.",
            "Reduces misunderstanding.",
            "Used as a basis for design and testing.",
            "Should be clear, complete, consistent and verifiable.",
        ]),

        heading("Characteristics of Good SRS"),

        list([
            "Correct",
            "Complete",
            "Consistent",
            "Unambiguous",
            "Verifiable",
            "Modifiable",
            "Traceable",
        ]),

        note(
            "A well-written SRS is the foundation of a successful system. Poor requirements are the biggest cause of software project failure.",
            "warning",
            "Critical Success Factor"
        ),

        keyPoints([
            "Requirements can be functional or non-functional.",
            "Interviews give detailed information.",
            "Questionnaires suit large user base.",
            "Observation reveals hidden problems.",
            "SRS documents all system requirements formally.",
        ]),
    ],

    {
        summary:
            "Learn requirement gathering techniques such as interviews, questionnaires, observation and JAD, and importance of SRS.",
        minutes: 12,
        tags: ["requirements", "srs", "interview", "important"],

        mcqs: [
            mcq(
                "Which technique is best for many users?",
                ["Interview", "Questionnaire", "Observation", "JAD"],
                1,
                "Questionnaires collect data from many users quickly."
            ),
            mcq(
                "SRS stands for:",
                ["System Report Sheet", "Software Requirements Specification", "System Rule Set", "Software Review Standard"],
                1,
                "SRS is Software Requirements Specification."
            ),
            mcq(
                "Login functionality is a:",
                ["Non-functional requirement", "Functional requirement", "Domain requirement", "External requirement"],
                1,
                "Login is what the system must do — functional."
            ),
            mcq(
                "Which technique involves watching users work?",
                ["Interview", "Observation", "Questionnaire", "Document review"],
                1,
                "Observation is watching users perform tasks."
            ),
        ],

        questions: [
            qa(
                "Explain different requirement gathering techniques.",
                "Requirement gathering techniques include interviews where analysts directly talk to users to get detailed information; questionnaires which collect data from many users through written questions; observation where analysts watch users working to identify real problems; document review where existing reports and manuals are studied; Joint Application Development where users, analysts and managers meet in workshops to gather requirements collaboratively; and prototyping where a sample system is built to get user feedback. Each technique has its own advantages and is selected based on time, cost, number of users and depth of information required.",
                4
            ),
            qa(
                "What is SRS? Explain its characteristics.",
                "Software Requirements Specification (SRS) is a formal document that describes all functional and non-functional requirements of the proposed system. It serves as an agreement between users and developers and reduces misunderstanding. It is used as a basis for design, coding and testing. A good SRS should be correct, complete, consistent, unambiguous, verifiable, modifiable and traceable. It typically includes introduction, overall description, specific requirements, external interfaces, performance and design constraints. A well-written SRS is critical to project success.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 5 — System Planning and Project Management
========================================================= */

const projectPlanning = createTopic(
    "system-planning-and-project-management",
    "System Planning and Project Management",

    [
        definition(
            "Project Planning",
            "Project planning is the process of defining project objectives, scope, tasks, resources, schedule and cost to complete a system successfully."
        ),

        heading("Elements of Project Planning"),

        list([
            "Scope definition",
            "Task identification",
            "Resource allocation",
            "Time estimation",
            "Cost estimation",
            "Risk analysis",
            "Team organisation",
            "Monitoring and control",
        ]),

        heading("Project Scheduling Tools"),

        table(
            ["Tool", "Purpose"],
            [
                ["Gantt Chart", "Shows tasks over time as horizontal bars"],
                ["PERT Chart", "Shows task dependencies and critical path"],
                ["CPM", "Critical Path Method for scheduling"],
                ["Milestone Chart", "Shows key achievements"],
                ["Work Breakdown Structure", "Breaks project into smaller tasks"],
            ]
        ),

        heading("Gantt Chart"),

        list([
            "Bar chart representing tasks along a timeline.",
            "Easy to understand and prepare.",
            "Shows start date, duration and end date.",
            "Does not show task dependencies clearly.",
            "Useful for small to medium projects.",
        ]),

        heading("PERT Chart"),

        definition(
            "PERT",
            "Program Evaluation and Review Technique is a network diagram that shows project tasks and their dependencies using nodes and arrows."
        ),

        list([
            "Uses events (nodes) and activities (arrows).",
            "Shows sequence and dependencies of tasks.",
            "Identifies critical path.",
            "Uses three time estimates: optimistic, most likely, pessimistic.",
            "Useful for complex projects.",
        ]),

        heading("Critical Path Method (CPM)"),

        list([
            "Determines longest path through project.",
            "Shows minimum time to complete project.",
            "Tasks on critical path cannot be delayed.",
            "Helps in resource optimisation.",
        ]),

        heading("Cost Estimation Techniques"),

        table(
            ["Technique", "Description"],
            [
                ["Expert Judgement", "Based on expert experience"],
                ["Analogy", "Compared with similar past project"],
                ["Bottom-up", "Estimate small tasks and add"],
                ["Top-down", "Estimate whole project and divide"],
                ["COCOMO", "Constructive Cost Model based on lines of code"],
                ["Function Point", "Based on system functions"],
            ]
        ),

        heading("Risk Management"),

        steps([
            "Identify possible risks.",
            "Analyse impact and probability.",
            "Prioritise risks.",
            "Plan mitigation strategies.",
            "Monitor risks continuously.",
            "Take corrective action when needed.",
        ]),

        heading("Types of Risks"),

        table(
            ["Risk", "Example"],
            [
                ["Technical", "New unfamiliar technology"],
                ["Project", "Budget or schedule overrun"],
                ["Business", "Market change or user rejection"],
                ["People", "Team member leaving"],
                ["Requirement", "Frequent requirement change"],
            ]
        ),

        note(
            "Project management is not just about tools. Good communication, team coordination and stakeholder involvement are equally important for success.",
            "tip",
            "Success Factor"
        ),

        keyPoints([
            "Project planning defines scope, time, cost and resources.",
            "Gantt charts show tasks along a timeline.",
            "PERT shows dependencies between tasks.",
            "CPM identifies the longest path in the schedule.",
            "Risk management identifies and controls project risks.",
        ]),
    ],

    {
        summary:
            "Learn project planning, scheduling tools like Gantt and PERT, cost estimation techniques and risk management.",
        minutes: 12,
        tags: ["planning", "gantt", "pert", "risk", "important"],

        mcqs: [
            mcq(
                "Gantt chart is a:",
                ["Network diagram", "Bar chart", "Pie chart", "Flow chart"],
                1,
                "Gantt chart uses horizontal bars to show tasks."
            ),
            mcq(
                "PERT uses:",
                ["Two time estimates", "Three time estimates", "Four time estimates", "One estimate"],
                1,
                "PERT uses optimistic, most likely and pessimistic estimates."
            ),
            mcq(
                "Critical path is the:",
                ["Shortest path", "Longest path", "Random path", "Middle path"],
                1,
                "Critical path is the longest path determining project duration."
            ),
            mcq(
                "COCOMO is a:",
                ["Design tool", "Cost estimation model", "Testing model", "Scheduling tool"],
                1,
                "COCOMO is a cost estimation model."
            ),
        ],

        questions: [
            qa(
                "Explain project scheduling using Gantt and PERT charts.",
                "Project scheduling arranges project tasks over time. A Gantt chart is a bar chart where each task is shown as a horizontal bar along a timeline indicating its start and end. It is easy to understand and prepare but does not clearly show task dependencies. A PERT chart is a network diagram showing tasks as nodes and dependencies as arrows. It uses three time estimates — optimistic, most likely and pessimistic — to calculate expected duration. PERT identifies the critical path which determines minimum project duration. Gantt is best for simple projects while PERT suits complex projects with many dependencies.",
                4
            ),
            qa(
                "Explain risk management in project planning.",
                "Risk management is the process of identifying, analysing and controlling risks that may affect a project. It includes identifying possible risks, analysing their probability and impact, prioritising them, planning mitigation strategies, monitoring them continuously and taking corrective action when needed. Types of risks include technical risks from unfamiliar technology, project risks like budget overrun, business risks like market changes, people risks such as team members leaving, and requirement risks from frequent changes. Effective risk management increases the chance of project success by reducing surprises and preparing for uncertainties.",
                4
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit1Topics = [
    introSystem,
    sdlc,
    feasibility,
    requirementGathering,
    projectPlanning,
];