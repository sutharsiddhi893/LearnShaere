/* =========================================================
   BCA • SEM 5 • Software Engineering
   UNIT 1 — Software Process, Models and Requirements
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
   TOPIC 1 — Introduction to Software Engineering
========================================================= */

const introSoftwareEngineering = createTopic(
    "introduction-to-software-engineering",
    "Introduction to Software Engineering",

    [
        definition(
            "Software Engineering",
            "Software Engineering is a systematic, disciplined and quantifiable approach to the development, operation and maintenance of software using engineering principles."
        ),

        definition(
            "Software",
            "Software is a collection of computer programs, data, procedures and documentation that performs specific tasks on a computer system."
        ),

        heading("Characteristics of Software"),

        list([
            "Software is developed or engineered, not manufactured.",
            "Software does not wear out but can become obsolete.",
            "Most software is custom-built rather than assembled.",
            "Software is intangible and logical, not physical.",
            "Software is easy to reproduce but hard to design well.",
        ]),

        heading("Types of Software"),

        table(
            ["Type", "Description", "Example"],
            [
                ["System Software", "Manages hardware and services", "Operating System, Drivers"],
                ["Application Software", "Solves user problems", "MS Word, Tally"],
                ["Engineering/Scientific", "Number crunching algorithms", "MATLAB, AutoCAD"],
                ["Embedded Software", "Runs on hardware devices", "Washing machine controller"],
                ["Web Applications", "Runs on browser", "Gmail, Amazon"],
                ["AI Software", "Uses non-numerical algorithms", "Expert systems, ML models"],
            ]
        ),

        heading("Need for Software Engineering"),

        list([
            "To handle large and complex software.",
            "To manage cost and time effectively.",
            "To improve software quality and reliability.",
            "To support changes and maintenance.",
            "To ensure the software meets user requirements.",
            "To reduce software failures and rework.",
        ]),

        heading("Software Crisis"),

        definition(
            "Software Crisis",
            "The situation in the 1960s-70s where software projects were over budget, late, low in quality and difficult to maintain, which led to the emergence of software engineering."
        ),

        list([
            "Projects running over budget.",
            "Projects running over time.",
            "Software of low quality.",
            "Software not meeting requirements.",
            "Projects unmanageable and difficult to maintain.",
        ]),

        heading("Software Engineering vs Programming"),

        table(
            ["Basis", "Programming", "Software Engineering"],
            [
                ["Scope", "Writing code", "Complete development lifecycle"],
                ["Size", "Small programs", "Large complex systems"],
                ["Team", "Usually one person", "Team of developers"],
                ["Documentation", "Minimal", "Detailed"],
                ["Process", "Informal", "Systematic and disciplined"],
                ["Goal", "Working code", "Quality product on time within budget"],
            ]
        ),

        note(
            "Software Engineering is not just coding. It covers the entire process from requirement gathering to deployment and maintenance.",
            "info",
            "Important"
        ),

        keyPoints([
            "Software engineering applies engineering principles to software development.",
            "Software is intangible, developed and can become obsolete.",
            "Software crisis led to the development of software engineering.",
            "Software engineering ensures quality, cost control and timely delivery.",
            "It covers the complete software development lifecycle.",
        ]),
    ],

    {
        summary:
            "Introduction to software engineering, characteristics of software, types, need, software crisis and difference from programming.",
        minutes: 12,
        tags: ["software-engineering", "introduction", "important"],

        mcqs: [
            mcq(
                "Software Engineering is a:",
                ["Random approach", "Systematic approach", "Manual approach", "Trial and error approach"],
                1,
                "Software Engineering is a systematic and disciplined approach."
            ),
            mcq(
                "Software does not:",
                ["Get developed", "Wear out", "Become obsolete", "Have bugs"],
                1,
                "Software does not wear out but can become obsolete."
            ),
            mcq(
                "Which is an example of system software?",
                ["MS Word", "Operating System", "Tally", "Chrome"],
                1,
                "Operating System is system software."
            ),
            mcq(
                "Software Crisis occurred in:",
                ["1940s", "1960s-70s", "1990s", "2010s"],
                1,
                "Software crisis happened in the late 1960s and 1970s."
            ),
        ],

        questions: [
            qa(
                "What is Software Engineering? Explain its need.",
                "Software Engineering is a systematic, disciplined and quantifiable approach to the development, operation and maintenance of software. It applies engineering principles to produce reliable and efficient software. It is needed to manage large and complex software projects, control cost and time, improve quality and reliability, support ongoing maintenance and changes, ensure software meets user requirements, and reduce project failures and rework. Without software engineering, projects often become unmanageable, over budget and low in quality.",
                4
            ),
            qa(
                "Explain the characteristics of software.",
                "Software has several unique characteristics. First, software is developed or engineered, not manufactured like physical products. Second, software does not wear out with usage but can become obsolete due to changing requirements or technology. Third, most software is custom-built for specific needs rather than assembled from existing components. Fourth, software is intangible and logical, not physical, which makes it difficult to visualize and measure. Finally, software is easy to reproduce but very difficult to design and develop well, which is why software engineering discipline is required.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — Software Development Life Cycle (SDLC)
========================================================= */

const sdlc = createTopic(
    "software-development-life-cycle",
    "Software Development Life Cycle (SDLC)",

    [
        definition(
            "SDLC",
            "Software Development Life Cycle is a structured process used by software industries to design, develop, test and deploy high-quality software within time and cost estimates."
        ),

        heading("Phases of SDLC"),

        steps([
            "Requirement Gathering and Analysis - Collect and analyse user requirements.",
            "Feasibility Study - Check technical, economic and operational feasibility.",
            "Design - Create system architecture and detailed design.",
            "Implementation / Coding - Write actual source code.",
            "Testing - Verify and validate the software.",
            "Deployment - Install the software in the user's environment.",
            "Maintenance - Fix bugs and enhance features after release.",
        ]),

        heading("Phase Details"),

        table(
            ["Phase", "Activity", "Output"],
            [
                ["Requirement Analysis", "Gather user needs", "SRS Document"],
                ["Feasibility Study", "Check project viability", "Feasibility Report"],
                ["Design", "System architecture", "Design Document"],
                ["Coding", "Program development", "Source Code"],
                ["Testing", "Find and fix defects", "Test Report"],
                ["Deployment", "Install to production", "Working System"],
                ["Maintenance", "Support and updates", "Updated System"],
            ]
        ),

        heading("Feasibility Study Types"),

        list([
            "Technical Feasibility - Can it be built with available technology?",
            "Economic Feasibility - Is it cost-effective?",
            "Operational Feasibility - Will the users accept and use it?",
            "Legal Feasibility - Does it comply with laws and regulations?",
            "Schedule Feasibility - Can it be completed on time?",
        ]),

        heading("Importance of SDLC"),

        list([
            "Provides a structured approach.",
            "Improves project management.",
            "Reduces project risks.",
            "Ensures quality of deliverables.",
            "Helps in cost and time estimation.",
            "Improves communication among stakeholders.",
        ]),

        note(
            "SDLC is a framework, not a specific model. Different SDLC models like Waterfall, Agile and Spiral implement these phases differently.",
            "tip",
            "Remember"
        ),

        keyPoints([
            "SDLC provides a systematic approach to software development.",
            "It has phases like requirement, design, coding, testing, deployment and maintenance.",
            "SRS is the output of the requirement phase.",
            "Feasibility study is done before actual development.",
            "Maintenance is the longest phase in most projects.",
        ]),
    ],

    {
        summary:
            "Learn Software Development Life Cycle, its phases, feasibility study and importance in software projects.",
        minutes: 12,
        tags: ["sdlc", "phases", "important"],

        mcqs: [
            mcq(
                "SRS is the output of which phase?",
                ["Design", "Requirement Analysis", "Testing", "Coding"],
                1,
                "SRS document is created in the requirement analysis phase."
            ),
            mcq(
                "Which is not a type of feasibility?",
                ["Technical", "Economic", "Operational", "Emotional"],
                3,
                "Emotional feasibility is not a valid type."
            ),
            mcq(
                "Which phase is usually the longest?",
                ["Design", "Coding", "Testing", "Maintenance"],
                3,
                "Maintenance phase continues throughout the software's life."
            ),
            mcq(
                "SDLC stands for:",
                ["System Design Life Cycle", "Software Development Life Cycle", "System Development Logic Cycle", "Software Design Language Cycle"],
                1,
                "SDLC means Software Development Life Cycle."
            ),
        ],

        questions: [
            qa(
                "Explain the phases of SDLC.",
                "SDLC consists of several phases. Requirement Gathering and Analysis collects user needs and produces the SRS document. Feasibility Study checks if the project is technically, economically and operationally viable. Design phase creates the system architecture and detailed design. Coding or Implementation phase involves writing the source code. Testing phase verifies and validates the software to find defects. Deployment phase installs the software in the production environment. Finally, Maintenance phase provides bug fixes, updates and enhancements after release. Each phase has specific deliverables and helps ensure quality.",
                4
            ),
            qa(
                "What is Feasibility Study? Explain its types.",
                "Feasibility Study is an analysis conducted to determine whether a proposed software project is viable. It helps decide whether to proceed with the project. Types include Technical Feasibility which checks if the project can be built with available technology and skills, Economic Feasibility which analyses cost versus benefits, Operational Feasibility which checks whether users will accept and use the system, Legal Feasibility which ensures the project complies with laws and regulations, and Schedule Feasibility which checks whether the project can be completed within the required time. A feasibility report is produced as output.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — Software Process Models
========================================================= */

const processModels = createTopic(
    "software-process-models",
    "Software Process Models",

    [
        definition(
            "Software Process Model",
            "A software process model is an abstract representation of a software development process that describes the sequence of activities involved in developing software."
        ),

        heading("Waterfall Model"),

        text(
            "The Waterfall Model is a linear sequential model where each phase must be completed before the next phase begins. It was one of the earliest SDLC models."
        ),

        list([
            "Requirement Analysis",
            "System Design",
            "Implementation",
            "Integration and Testing",
            "Deployment",
            "Maintenance",
        ]),

        table(
            ["Advantages", "Disadvantages"],
            [
                ["Simple and easy to understand", "Not suitable for changing requirements"],
                ["Clear phases and milestones", "No working software until late stages"],
                ["Easy to manage", "High risk and uncertainty"],
                ["Good for small projects", "Difficult to go back to previous phase"],
                ["Well-documented", "Not suitable for complex projects"],
            ]
        ),

        heading("Iterative Model"),

        text(
            "In the Iterative Model, software is developed in small parts. Each iteration produces a working version that is improved in the next iteration."
        ),

        list([
            "Software is built incrementally.",
            "Each iteration includes all SDLC phases.",
            "User feedback is used to improve the next version.",
            "Suitable for large and complex projects.",
        ]),

        heading("Spiral Model"),

        definition(
            "Spiral Model",
            "The Spiral Model combines iterative development with the systematic aspects of the Waterfall Model, with a strong emphasis on risk analysis."
        ),

        list([
            "Planning - Determine objectives and constraints.",
            "Risk Analysis - Identify and resolve risks.",
            "Engineering - Develop and test the product.",
            "Evaluation - Customer evaluates the output.",
        ]),

        heading("Prototype Model"),

        text(
            "In Prototype Model, a working prototype is built quickly to understand requirements. It is refined based on user feedback before actual development."
        ),

        steps([
            "Requirement gathering",
            "Quick design",
            "Build prototype",
            "User evaluation",
            "Refine prototype",
            "Develop actual product",
        ]),

        heading("Agile Model"),

        definition(
            "Agile Model",
            "Agile is an iterative and incremental software development methodology that focuses on customer collaboration, working software and adapting to change."
        ),

        list([
            "Development happens in short cycles called sprints.",
            "Each sprint produces working software.",
            "Continuous customer feedback.",
            "Welcomes changes even late in development.",
            "Small self-organizing teams.",
            "Focus on individuals and interactions over processes.",
        ]),

        heading("Comparison of Models"),

        table(
            ["Model", "Best For", "Weakness"],
            [
                ["Waterfall", "Small, well-defined projects", "Rigid, no changes allowed"],
                ["Iterative", "Large projects", "Requires good planning"],
                ["Spiral", "High-risk projects", "Expensive, complex"],
                ["Prototype", "Unclear requirements", "May increase cost"],
                ["Agile", "Changing requirements", "Requires experienced team"],
            ]
        ),

        note(
            "There is no single best model. The choice depends on project size, requirements clarity, team experience, budget and time constraints.",
            "tip",
            "Model Selection"
        ),

        keyPoints([
            "Waterfall is linear and sequential.",
            "Iterative builds software in parts.",
            "Spiral focuses on risk analysis.",
            "Prototype helps clarify requirements.",
            "Agile is flexible and iterative with short sprints.",
        ]),
    ],

    {
        summary:
            "Study different software process models including Waterfall, Iterative, Spiral, Prototype and Agile.",
        minutes: 14,
        tags: ["process-models", "waterfall", "agile", "spiral", "important"],

        mcqs: [
            mcq(
                "Which model is linear and sequential?",
                ["Agile", "Spiral", "Waterfall", "Prototype"],
                2,
                "Waterfall is a linear sequential model."
            ),
            mcq(
                "Which model emphasizes risk analysis?",
                ["Waterfall", "Spiral", "Prototype", "V-Model"],
                1,
                "Spiral model has strong focus on risk analysis."
            ),
            mcq(
                "In Agile, development cycles are called:",
                ["Loops", "Sprints", "Iterations", "Phases"],
                1,
                "Agile development cycles are called sprints."
            ),
            mcq(
                "Which model is best when requirements are unclear?",
                ["Waterfall", "Prototype", "Big Bang", "V-Model"],
                1,
                "Prototype model is useful when requirements are unclear."
            ),
        ],

        questions: [
            qa(
                "Explain the Waterfall Model with its advantages and disadvantages.",
                "The Waterfall Model is a linear sequential software development model where each phase must be completed before the next begins. Phases include requirement analysis, system design, implementation, integration and testing, deployment and maintenance. Advantages include simplicity, clear phases and milestones, ease of management, good documentation and suitability for small projects with well-defined requirements. Disadvantages include inability to handle changing requirements, no working software until late stages, high risk, difficulty going back to previous phases and unsuitability for complex or large projects.",
                4
            ),
            qa(
                "Explain the Spiral Model of software development.",
                "The Spiral Model combines iterative development with systematic aspects of the Waterfall Model and places strong emphasis on risk analysis. It consists of four main phases repeated in spirals. Planning phase determines objectives and constraints. Risk Analysis identifies and resolves potential risks. Engineering phase develops and tests the product. Evaluation phase involves customer review of the output. Each spiral represents a new version or increment of the software. The Spiral Model is best suited for large, complex and high-risk projects but is expensive and requires expertise in risk management.",
                4
            ),
            qa(
                "What is Agile Model? Explain its principles.",
                "Agile Model is an iterative and incremental software development methodology that focuses on flexibility, customer collaboration and delivering working software frequently. Development happens in short cycles called sprints, usually 2-4 weeks long. Each sprint produces a potentially shippable product. Key principles include continuous customer collaboration, welcoming changes even late in development, delivering working software frequently, using small self-organizing teams, focusing on individuals and interactions over processes and tools, and emphasizing simplicity. Agile is well-suited for projects with changing requirements and requires an experienced and motivated team.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — Requirement Engineering
========================================================= */

const requirementEngineering = createTopic(
    "requirement-engineering",
    "Requirement Engineering",

    [
        definition(
            "Requirement Engineering",
            "Requirement Engineering is the process of defining, documenting and maintaining software requirements by collecting and analysing needs of stakeholders."
        ),

        heading("Types of Requirements"),

        table(
            ["Type", "Description", "Example"],
            [
                ["Functional", "What the system should do", "User login, generate report"],
                ["Non-Functional", "Quality attributes", "Performance, security, usability"],
                ["User Requirements", "What users want", "Simple interface"],
                ["System Requirements", "Detailed technical needs", "Database schema, APIs"],
                ["Domain Requirements", "From application domain", "Banking regulations"],
            ]
        ),

        heading("Functional vs Non-Functional Requirements"),

        table(
            ["Functional", "Non-Functional"],
            [
                ["Describes what system does", "Describes how system performs"],
                ["Specific features", "Quality attributes"],
                ["Easy to define", "Difficult to measure"],
                ["Login, registration, search", "Speed, reliability, security"],
                ["Must be implemented", "Should be optimized"],
            ]
        ),

        heading("Requirement Engineering Process"),

        steps([
            "Requirement Elicitation - Gather requirements from stakeholders.",
            "Requirement Analysis - Analyse and resolve conflicts.",
            "Requirement Specification - Document in SRS.",
            "Requirement Validation - Ensure requirements are correct.",
            "Requirement Management - Manage changes to requirements.",
        ]),

        heading("Requirement Elicitation Techniques"),

        list([
            "Interviews - One-on-one discussions with stakeholders.",
            "Questionnaires - Written questions distributed to many users.",
            "Observation - Watch users perform their tasks.",
            "Brainstorming - Group idea generation.",
            "Prototyping - Build sample to gather feedback.",
            "Use Cases - Describe user interactions with system.",
            "Workshops - Group meetings with stakeholders.",
        ]),

        heading("SRS (Software Requirements Specification)"),

        definition(
            "SRS",
            "SRS is a formal document that describes what the software will do and how it is expected to perform. It serves as an agreement between developers and clients."
        ),

        heading("Characteristics of Good SRS"),

        list([
            "Correct - Every requirement is accurate.",
            "Complete - All requirements are included.",
            "Consistent - No conflicting requirements.",
            "Unambiguous - Each requirement has only one meaning.",
            "Verifiable - Can be tested and verified.",
            "Modifiable - Easy to update.",
            "Traceable - Can be traced to origin and design.",
            "Ranked - Requirements have importance and stability.",
        ]),

        heading("SRS Structure (IEEE Standard)"),

        list([
            "Introduction - Purpose, scope, definitions.",
            "Overall Description - Product perspective, functions, users.",
            "Specific Requirements - Functional, non-functional, interface.",
            "Appendices - Additional information.",
            "Index - Reference for quick lookup.",
        ]),

        note(
            "A good SRS is the foundation of a successful project. Poor requirements lead to project failure more than any other factor.",
            "warning",
            "Critical"
        ),

        keyPoints([
            "Requirements are of two main types: functional and non-functional.",
            "Requirement engineering has five main activities.",
            "Elicitation techniques include interviews, questionnaires and prototyping.",
            "SRS is the main output document of requirement phase.",
            "Good SRS is correct, complete, consistent and unambiguous.",
        ]),
    ],

    {
        summary:
            "Learn requirement engineering, types of requirements, elicitation techniques and SRS document structure.",
        minutes: 13,
        tags: ["requirements", "srs", "elicitation", "important"],

        mcqs: [
            mcq(
                "Login feature is a:",
                ["Non-functional requirement", "Functional requirement", "System constraint", "User interface"],
                1,
                "Login is a functional requirement as it describes what system does."
            ),
            mcq(
                "Which is a non-functional requirement?",
                ["User can search books", "System must respond in 2 seconds", "Admin can add users", "User can print report"],
                1,
                "Response time is a non-functional requirement."
            ),
            mcq(
                "SRS stands for:",
                ["System Requirement Sheet", "Software Requirements Specification", "Software Report Structure", "System Report Standard"],
                1,
                "SRS means Software Requirements Specification."
            ),
            mcq(
                "Which is NOT a requirement elicitation technique?",
                ["Interview", "Questionnaire", "Compilation", "Prototyping"],
                2,
                "Compilation is not an elicitation technique."
            ),
        ],

        questions: [
            qa(
                "Differentiate between Functional and Non-Functional Requirements.",
                "Functional Requirements describe what the system should do, including specific features and functions like user login, registration, search and reports. They define the behaviour of the system. Non-Functional Requirements describe how the system performs, focusing on quality attributes such as performance, security, reliability, usability and scalability. Functional requirements are easy to define and must be implemented, while non-functional requirements are difficult to measure but should be optimized. For example, allowing a user to search products is functional, but requiring the search to return results within 2 seconds is non-functional. Both are essential for a complete SRS.",
                4
            ),
            qa(
                "What is SRS? Explain the characteristics of a good SRS.",
                "SRS or Software Requirements Specification is a formal document that describes what the software will do and how it should perform. It acts as an agreement between developers and clients. A good SRS has several characteristics. It must be correct, meaning every requirement is accurate. It should be complete, covering all requirements. It must be consistent with no conflicting requirements. It should be unambiguous so each requirement has only one meaning. It must be verifiable so requirements can be tested. It should be modifiable to allow easy updates. It must be traceable to link with design and implementation. Finally, requirements should be ranked by importance and stability. A well-written SRS is the foundation of a successful software project.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 5 — Software Project Management
========================================================= */

const projectManagement = createTopic(
    "software-project-management",
    "Software Project Management",

    [
        definition(
            "Software Project Management",
            "Software Project Management is the process of planning, organizing, staffing, monitoring and controlling software projects to ensure they are delivered on time, within budget and meet quality requirements."
        ),

        heading("Project Management Activities"),

        list([
            "Project Planning - Define scope, tasks and schedule.",
            "Scheduling - Assign timelines to tasks.",
            "Resource Allocation - Assign people and resources.",
            "Risk Management - Identify and mitigate risks.",
            "Cost Estimation - Predict project cost.",
            "Monitoring and Control - Track progress.",
            "Quality Management - Ensure quality standards.",
            "Team Management - Lead and motivate team.",
        ]),

        heading("Role of Project Manager"),

        list([
            "Planning the project.",
            "Selecting and motivating the team.",
            "Monitoring project progress.",
            "Managing risks and issues.",
            "Communicating with stakeholders.",
            "Ensuring quality of deliverables.",
            "Delivering the project on time and within budget.",
        ]),

        heading("Project Planning"),

        text(
            "Project planning involves defining project scope, breaking work into tasks, estimating effort, allocating resources and creating schedules."
        ),

        steps([
            "Define project objectives and scope.",
            "Identify tasks and activities.",
            "Estimate effort and duration.",
            "Identify dependencies between tasks.",
            "Assign resources to tasks.",
            "Create project schedule.",
            "Identify risks and plan mitigation.",
        ]),

        heading("Cost Estimation Techniques"),

        table(
            ["Technique", "Description"],
            [
                ["Expert Judgement", "Based on experienced person's estimate"],
                ["Analogy-based", "Compare with similar past projects"],
                ["Bottom-up", "Estimate each task and add up"],
                ["Top-down", "Estimate whole project then divide"],
                ["Algorithmic (COCOMO)", "Uses mathematical formulas"],
                ["Function Point", "Based on functionality provided"],
            ]
        ),

        heading("COCOMO Model"),

        definition(
            "COCOMO",
            "Constructive Cost Model is an algorithmic cost estimation model developed by Barry Boehm that uses lines of code to estimate effort, time and cost."
        ),

        list([
            "Organic - Small teams, familiar problems, e.g., simple business applications.",
            "Semi-detached - Medium teams, mixed experience, e.g., database management systems.",
            "Embedded - Tight constraints, complex hardware and software, e.g., real-time systems.",
        ]),

        heading("Risk Management"),

        definition(
            "Risk",
            "A risk is an uncertain event or condition that, if it occurs, has a positive or negative effect on project objectives."
        ),

        steps([
            "Risk Identification - List potential risks.",
            "Risk Analysis - Assess probability and impact.",
            "Risk Planning - Plan how to handle each risk.",
            "Risk Monitoring - Track risks during project.",
        ]),

        heading("Types of Risks"),

        list([
            "Project Risks - Budget, schedule, resources.",
            "Technical Risks - Design, implementation, technology.",
            "Business Risks - Market, product, strategy.",
            "People Risks - Team skills, turnover.",
            "Requirement Risks - Changing or unclear requirements.",
        ]),

        heading("Scheduling Tools"),

        list([
            "Gantt Chart - Bar chart showing tasks and timelines.",
            "PERT Chart - Shows tasks, dependencies and critical path.",
            "CPM (Critical Path Method) - Identifies longest path of dependent tasks.",
            "Work Breakdown Structure (WBS) - Hierarchical decomposition of work.",
        ]),

        note(
            "Poor project management is one of the top reasons for software project failure. Good managers balance scope, time, cost and quality.",
            "warning",
            "Key Insight"
        ),

        keyPoints([
            "Project management includes planning, scheduling, monitoring and control.",
            "Project manager balances scope, time, cost and quality.",
            "COCOMO is a popular cost estimation model.",
            "Risk management is a continuous process.",
            "Gantt and PERT charts are used for project scheduling.",
        ]),
    ],

    {
        summary:
            "Study software project management, planning, cost estimation using COCOMO, risk management and scheduling tools.",
        minutes: 13,
        tags: ["project-management", "cocomo", "risk", "scheduling", "important"],

        mcqs: [
            mcq(
                "COCOMO was developed by:",
                ["Boehm", "Booch", "Sommerville", "Pressman"],
                0,
                "COCOMO was developed by Barry Boehm."
            ),
            mcq(
                "Which is not a COCOMO project type?",
                ["Organic", "Semi-detached", "Embedded", "Detached"],
                3,
                "Detached is not a COCOMO type. Types are Organic, Semi-detached and Embedded."
            ),
            mcq(
                "Gantt chart is used for:",
                ["Cost estimation", "Risk analysis", "Scheduling", "Coding"],
                2,
                "Gantt chart is a scheduling tool."
            ),
            mcq(
                "Which is a project management activity?",
                ["Coding", "Debugging", "Risk management", "Compiling"],
                2,
                "Risk management is a project management activity."
            ),
        ],

        questions: [
            qa(
                "Explain the role of a Software Project Manager.",
                "A Software Project Manager plays a critical role in successful project delivery. Their responsibilities include planning the project by defining scope, tasks and schedules. They select and motivate the project team while ensuring proper skill distribution. They monitor project progress against the plan and take corrective actions when needed. They manage risks by identifying, analysing and mitigating potential problems. They communicate regularly with stakeholders including clients, team and management. They ensure quality of deliverables through reviews and testing. Finally, they are responsible for delivering the project on time, within budget and meeting quality requirements. A good project manager balances scope, time, cost and quality throughout the project.",
                4
            ),
            qa(
                "Explain COCOMO model with its types.",
                "COCOMO or Constructive Cost Model is an algorithmic software cost estimation model developed by Barry Boehm in 1981. It uses lines of code as the primary input to estimate effort, development time, team size and cost. COCOMO classifies projects into three types based on complexity. Organic projects are small, with experienced teams working on familiar problems like simple business applications. Semi-detached projects are medium-sized with a mix of experienced and inexperienced developers, such as database management systems. Embedded projects have tight constraints, complex hardware and software integration, and inflexible requirements, like real-time control systems. Each type uses different constants in the effort formula, with organic being simplest and embedded most complex.",
                4
            ),
            qa(
                "What is Risk Management in software projects? Explain its process.",
                "Risk Management is the process of identifying, analysing and controlling risks that may impact a software project. A risk is an uncertain event that can affect project objectives positively or negatively. The risk management process has four main steps. Risk Identification lists all potential risks such as budget overruns, technical challenges or team turnover. Risk Analysis assesses the probability of each risk occurring and its potential impact on the project. Risk Planning develops strategies to handle each risk, either by avoiding, transferring, mitigating or accepting them. Risk Monitoring continuously tracks risks throughout the project and updates mitigation plans as needed. Effective risk management reduces the chance of project failure and helps deliver projects successfully.",
                4
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit1Topics = [
    introSoftwareEngineering,
    sdlc,
    processModels,
    requirementEngineering,
    projectManagement,
];