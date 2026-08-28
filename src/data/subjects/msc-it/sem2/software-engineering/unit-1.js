/* =========================================================
   MSc-IT • SEM 2 • Software Engineering
   UNIT 1 — Introduction to Software Engineering, SDLC,
            Process Models, SRS and Project Management
========================================================= */

import {
    createTopic,
    heading,
    text,
    list,
    code,
    output,
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

const introductionToSoftwareEngineering = createTopic(
    "introduction-to-software-engineering",
    "Introduction to Software Engineering",

    [
        definition(
            "Software Engineering",
            "Software Engineering is a systematic, disciplined and measurable approach to the development, operation and maintenance of software."
        ),

        text(
            "Software Engineering applies engineering principles to software development so that software is reliable, maintainable, efficient, user-friendly and delivered within time and budget. It is needed because modern software systems are large, complex and used in critical areas such as banking, healthcare, education, transport and government."
        ),

        heading("Program vs Software Product"),

        table(
            ["Aspect", "Program", "Software Product"],
            [
                ["Meaning", "A small set of instructions solving a specific task", "Complete usable system delivered to users"],
                ["Size", "Usually small", "Usually large and complex"],
                ["Users", "Often used by developer or limited users", "Used by many real users"],
                ["Documentation", "May be minimal", "Requires proper documentation"],
                ["Testing", "Basic testing may be enough", "Needs systematic testing"],
                ["Maintenance", "Less formal", "Requires long-term maintenance"],
            ]
        ),

        heading("Need for Software Engineering"),

        list([
            "To manage large and complex software projects.",
            "To improve software quality and reliability.",
            "To reduce development cost and time.",
            "To make software maintainable and scalable.",
            "To handle changing user requirements.",
            "To improve team coordination and documentation.",
            "To reduce project failure risk.",
            "To deliver software that satisfies user needs.",
        ]),

        heading("Software Characteristics"),

        table(
            ["Characteristic", "Meaning"],
            [
                ["Intangible", "Software cannot be physically touched like hardware"],
                ["Developed, not manufactured", "Software is created through design and coding"],
                ["Does not wear out", "Software does not physically degrade, but becomes outdated"],
                ["Highly complex", "Large systems contain many interacting parts"],
                ["Easy to modify but risky", "Changes may introduce defects"],
                ["Requires maintenance", "Needs updates, bug fixes and improvements"],
            ]
        ),

        heading("Software Crisis"),

        definition(
            "Software Crisis",
            "Software crisis refers to the difficulties faced in developing large software systems, such as late delivery, high cost, poor quality, unreliable software and difficulty in maintenance."
        ),

        table(
            ["Problem", "Explanation"],
            [
                ["Cost overrun", "Project exceeds planned budget"],
                ["Schedule delay", "Software is delivered late"],
                ["Poor quality", "Many defects and failures occur"],
                ["Unclear requirements", "Users and developers misunderstand needs"],
                ["Difficult maintenance", "Changes become hard and expensive"],
                ["Low reliability", "Software crashes or gives wrong results"],
            ]
        ),

        heading("Goals of Software Engineering"),

        table(
            ["Goal", "Description"],
            [
                ["Correctness", "Software should meet specified requirements"],
                ["Reliability", "Software should work correctly under expected conditions"],
                ["Efficiency", "Software should use resources properly"],
                ["Usability", "Software should be easy for users to operate"],
                ["Maintainability", "Software should be easy to modify and repair"],
                ["Portability", "Software should run in different environments"],
                ["Scalability", "Software should handle growth in users/data"],
            ]
        ),

        heading("Role of Software Engineer"),

        list([
            "Understand user requirements.",
            "Analyse feasibility and risks.",
            "Design software architecture and modules.",
            "Write clean and maintainable code.",
            "Test and debug software.",
            "Prepare documentation.",
            "Deploy and maintain software.",
            "Work with teams, users and stakeholders.",
        ], true),

        note(
            "Software Engineering is not only programming. It includes requirements, design, planning, testing, quality assurance, maintenance, documentation and project management.",
            "warning",
            "Exam Tip"
        ),

        keyPoints([
            "Software Engineering applies systematic engineering principles to software development.",
            "A software product is more than a program; it includes documentation, testing and maintenance.",
            "The software crisis led to the need for disciplined development methods.",
            "Important software qualities include correctness, reliability, usability and maintainability.",
            "Software Engineering covers the complete life cycle, not only coding.",
        ]),
    ],

    {
        summary:
            "Understand software engineering meaning, need, software crisis, software characteristics and goals of software engineering.",
        minutes: 13,
        tags: ["software-engineering", "introduction", "software-crisis", "important"],

        mcqs: [
            mcq(
                "Software Engineering is:",
                ["A systematic engineering approach to software development", "Only typing code", "Only hardware repair", "Only database backup"],
                0,
                "Software Engineering applies systematic, disciplined and measurable methods to software development."
            ),
            mcq(
                "Software is developed, not:",
                ["Compiled", "Manufactured like hardware", "Tested", "Designed"],
                1,
                "Software is engineered and developed, not manufactured physically like hardware."
            ),
            mcq(
                "Software crisis refers to:",
                ["Problems in developing reliable software on time and within budget", "A keyboard failure", "Only internet speed issue", "Printer problem"],
                0,
                "Software crisis includes delay, cost overrun, poor quality and maintenance difficulty."
            ),
            mcq(
                "Maintainability means:",
                ["Software can be easily modified and repaired", "Software cannot be changed", "Software has no users", "Software is only printed"],
                0,
                "Maintainability is the ease of correcting, improving and adapting software."
            ),
            mcq(
                "A software product usually includes:",
                ["Code, documentation, testing and maintenance support", "Only one line of code", "Only hardware", "Only a logo"],
                0,
                "A product is a complete deliverable, not just source code."
            ),
            mcq(
                "Software Engineering is needed mainly because software systems are:",
                ["Large and complex", "Always perfect", "Never changed", "Only physical machines"],
                0,
                "Modern software is complex and requires disciplined development."
            ),
        ],

        questions: [
            qa(
                "Define Software Engineering. Explain its need.",
                "Software Engineering is a systematic, disciplined and measurable approach to software development, operation and maintenance. It applies engineering principles to build reliable, efficient and maintainable software. It is needed because modern software systems are large, complex and used by many users in important areas such as banking, healthcare and education. Without proper engineering, projects may suffer from unclear requirements, late delivery, cost overruns, poor quality and difficult maintenance. Software Engineering provides methods for requirements analysis, design, coding, testing, documentation, project management and maintenance, helping teams deliver software that satisfies user needs.",
                5
            ),
            qa(
                "Differentiate between a program and a software product.",
                "A program is a set of instructions written to perform a specific task. It may be small and used by the developer or limited users. A software product is a complete system designed for real users and includes source code, documentation, user interface, installation support, testing, maintenance and updates. A program may have limited testing and documentation, while a software product requires systematic testing, quality assurance and long-term support. For example, a simple calculator script is a program, while a banking application with security, reports, database, documentation and support is a software product.",
                5
            ),
            qa(
                "What is software crisis? Explain its causes and effects.",
                "Software crisis refers to the difficulties faced in developing large and complex software systems. Common problems include late delivery, budget overrun, unreliable software, poor performance, unclear requirements and high maintenance cost. Causes include lack of proper planning, incomplete requirements, poor communication, weak design, inadequate testing, unrealistic schedules and changing user needs. Its effects include user dissatisfaction, financial loss, project failure and difficulty in maintaining software. Software Engineering evolved to solve these problems by introducing systematic processes, documentation, project management, testing and quality control.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — Software Development Life Cycle
========================================================= */

const softwareDevelopmentLifeCycle = createTopic(
    "software-development-life-cycle",
    "Software Development Life Cycle",

    [
        definition(
            "Software Development Life Cycle",
            "Software Development Life Cycle, or SDLC, is a structured process used to develop software through phases such as planning, requirements, design, coding, testing, deployment and maintenance."
        ),

        text(
            "SDLC provides a roadmap for software development. It helps teams plan work, control quality, reduce risk and ensure that the final software meets user requirements."
        ),

        heading("Main Phases of SDLC"),

        table(
            ["Phase", "Purpose", "Output"],
            [
                ["Planning", "Define scope, feasibility, cost and schedule", "Project plan"],
                ["Requirement Analysis", "Understand user needs and system requirements", "SRS document"],
                ["Design", "Plan architecture, database, modules and interfaces", "Design document"],
                ["Implementation / Coding", "Convert design into source code", "Program/code"],
                ["Testing", "Find defects and verify requirements", "Test reports"],
                ["Deployment", "Install/release software for users", "Working system"],
                ["Maintenance", "Fix bugs, improve and adapt software", "Updated versions"],
            ]
        ),

        heading("Planning Phase"),

        text(
            "Planning identifies the problem, project scope, objectives, resources, risks, schedule and feasibility. It helps decide whether the project should be started and how it will be managed."
        ),

        heading("Requirement Analysis Phase"),

        text(
            "Requirement analysis collects and studies user needs. It defines what the system should do and what constraints it must satisfy. The main output is the Software Requirements Specification document."
        ),

        heading("Design Phase"),

        text(
            "The design phase converts requirements into a blueprint for construction. It includes architectural design, database design, user interface design, module design and interface design."
        ),

        heading("Implementation Phase"),

        text(
            "In implementation, developers write source code according to design and coding standards. Code should be readable, modular and maintainable."
        ),

        heading("Testing Phase"),

        text(
            "Testing checks whether the software works according to requirements and finds defects before delivery. Testing includes unit testing, integration testing, system testing and acceptance testing."
        ),

        heading("Deployment and Maintenance"),

        table(
            ["Activity", "Meaning"],
            [
                ["Deployment", "Installing or releasing software in production/user environment"],
                ["Corrective maintenance", "Fixing discovered defects"],
                ["Adaptive maintenance", "Modifying software for changed environment"],
                ["Perfective maintenance", "Improving features or performance"],
                ["Preventive maintenance", "Improving maintainability and preventing future problems"],
            ]
        ),

        heading("Verification and Validation"),

        table(
            ["Aspect", "Verification", "Validation"],
            [
                ["Question", "Are we building the product right?", "Are we building the right product?"],
                ["Focus", "Conformance to specifications", "Meeting user needs"],
                ["Activities", "Reviews, inspections, walkthroughs", "Testing, user acceptance"],
                ["When", "Throughout development", "During/after testing with user view"],
            ]
        ),

        heading("Benefits of SDLC"),

        list([
            "Provides structured development process.",
            "Improves planning and project control.",
            "Helps manage cost, schedule and resources.",
            "Improves software quality through reviews and testing.",
            "Reduces development risk.",
            "Improves communication among stakeholders.",
            "Creates proper documentation.",
            "Makes maintenance easier.",
        ]),

        note(
            "SDLC phases are often shown sequentially for understanding, but in real projects some phases may overlap or repeat, especially in iterative and Agile approaches.",
            "tip",
            "Practical Note"
        ),

        keyPoints([
            "SDLC is a structured process for software development.",
            "Main phases are planning, requirements, design, coding, testing, deployment and maintenance.",
            "Requirement analysis produces the SRS document.",
            "Design creates a blueprint for implementation.",
            "Maintenance includes corrective, adaptive, perfective and preventive changes.",
            "Verification checks product correctness against specification; validation checks user satisfaction.",
        ]),
    ],

    {
        summary:
            "Learn SDLC phases, outputs, verification vs validation and types of software maintenance.",
        minutes: 14,
        tags: ["software-engineering", "sdlc", "requirements", "testing", "maintenance"],

        mcqs: [
            mcq(
                "SDLC stands for:",
                ["Software Development Life Cycle", "System Data Logic Code", "Secure Digital Local Computer", "Software Design Link Control"],
                0,
                "SDLC means Software Development Life Cycle."
            ),
            mcq(
                "The main output of requirement analysis is:",
                ["SRS document", "Final invoice", "Printer paper", "Source code only"],
                0,
                "Requirement analysis produces the Software Requirements Specification."
            ),
            mcq(
                "The design phase produces:",
                ["Blueprint of the software", "Only user complaints", "Only executable file", "Only hardware cable"],
                0,
                "Design converts requirements into a plan for construction."
            ),
            mcq(
                "Corrective maintenance means:",
                ["Fixing defects", "Adding random errors", "Deleting all users", "Changing hardware colour"],
                0,
                "Corrective maintenance fixes bugs found after delivery."
            ),
            mcq(
                "Verification asks:",
                ["Are we building the product right?", "Are we building the right product?", "Is the printer working?", "Is internet free?"],
                0,
                "Verification checks conformance to specification."
            ),
            mcq(
                "Validation focuses on:",
                ["Meeting user needs", "Only code indentation", "Only database size", "Only power supply"],
                0,
                "Validation checks whether the product satisfies user expectations."
            ),
        ],

        questions: [
            qa(
                "Explain the Software Development Life Cycle and its phases.",
                "The Software Development Life Cycle is a structured process used to develop software systematically. Its major phases are planning, requirement analysis, design, implementation, testing, deployment and maintenance. Planning defines scope, feasibility, cost, schedule and resources. Requirement analysis identifies user needs and produces the SRS. Design converts requirements into architecture, database, interface and module designs. Implementation converts design into code. Testing finds defects and verifies whether requirements are met. Deployment releases the software to users. Maintenance fixes bugs, adapts to changes and improves performance or features after delivery.",
                5
            ),
            qa(
                "Differentiate between verification and validation.",
                "Verification and validation are quality activities in software development. Verification asks, 'Are we building the product right?' It checks whether work products such as requirements, design and code follow specifications and standards. Reviews, walkthroughs and inspections are verification activities. Validation asks, 'Are we building the right product?' It checks whether the software satisfies user needs and intended use. Testing and user acceptance testing are validation activities. Verification focuses on correctness against specification, while validation focuses on usefulness and satisfaction from the user's point of view.",
                5
            ),
            qa(
                "Explain different types of software maintenance.",
                "Software maintenance is the modification of software after delivery. Corrective maintenance fixes defects discovered during use. Adaptive maintenance modifies software to work in changed environments, such as a new operating system, database or regulation. Perfective maintenance improves performance, usability or adds new features requested by users. Preventive maintenance improves internal structure, documentation or code quality to reduce future problems. Maintenance is important because software must evolve with user needs, technology changes and business requirements. A large part of software cost is often spent on maintenance.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — Software Process Models
========================================================= */

const softwareProcessModels = createTopic(
    "software-process-models",
    "Software Process Models",

    [
        definition(
            "Software Process Model",
            "A software process model is a framework that defines the sequence of activities, tasks and deliverables used to develop software."
        ),

        text(
            "Different projects need different process models. A small project with fixed requirements may use Waterfall, while a project with changing requirements may use Agile or incremental development."
        ),

        heading("Waterfall Model"),

        definition(
            "Waterfall Model",
            "The Waterfall model is a linear sequential process model where each phase is completed before the next phase begins."
        ),

        steps([
            "Requirement analysis.",
            "System and software design.",
            "Implementation/coding.",
            "Integration and testing.",
            "Deployment.",
            "Maintenance.",
        ]),

        table(
            ["Advantages", "Limitations"],
            [
                ["Simple and easy to understand", "Difficult to handle changing requirements"],
                ["Clear phases and documentation", "Working software appears late"],
                ["Good for stable requirements", "Testing occurs after implementation"],
                ["Easy to manage for small projects", "User feedback is delayed"],
            ]
        ),

        heading("Prototype Model"),

        definition(
            "Prototype Model",
            "The Prototype model creates an early working model of the system to understand and refine user requirements."
        ),

        steps([
            "Collect initial requirements.",
            "Build quick prototype.",
            "User evaluates prototype.",
            "Refine requirements based on feedback.",
            "Develop final system.",
        ]),

        text(
            "The prototype model is useful when requirements are unclear. Users can see and interact with a sample system, making it easier to identify missing or incorrect requirements."
        ),

        heading("Incremental Model"),

        definition(
            "Incremental Model",
            "The Incremental model develops software in small parts called increments, where each increment delivers a working subset of functionality."
        ),

        table(
            ["Feature", "Explanation"],
            [
                ["Early delivery", "Basic working software is delivered early"],
                ["Reduced risk", "Each increment can be tested separately"],
                ["User feedback", "Users can respond after each release"],
                ["Flexibility", "Later increments can adjust to changes"],
            ]
        ),

        heading("Spiral Model"),

        definition(
            "Spiral Model",
            "The Spiral model is a risk-driven process model that combines iterative development with systematic risk analysis."
        ),

        table(
            ["Spiral Activity", "Meaning"],
            [
                ["Planning", "Define objectives, alternatives and constraints"],
                ["Risk analysis", "Identify and reduce project risks"],
                ["Engineering", "Develop and verify next product version"],
                ["Evaluation", "Customer evaluates and gives feedback"],
            ]
        ),

        heading("Agile Model"),

        definition(
            "Agile Model",
            "Agile is an iterative and incremental approach that develops software in short cycles with frequent customer collaboration and response to change."
        ),

        table(
            ["Agile Principle", "Meaning"],
            [
                ["Individuals and interactions", "Communication is valued"],
                ["Working software", "Deliver usable software frequently"],
                ["Customer collaboration", "Continuous user feedback"],
                ["Responding to change", "Changes are accepted even late in development"],
            ]
        ),

        heading("Comparison of Process Models"),

        table(
            ["Model", "Best Used When", "Main Limitation"],
            [
                ["Waterfall", "Requirements are stable and clear", "Poor flexibility"],
                ["Prototype", "Requirements are unclear", "Prototype may be mistaken for final product"],
                ["Incremental", "Need early partial delivery", "Requires good planning of increments"],
                ["Spiral", "Large high-risk projects", "Can be costly and complex"],
                ["Agile", "Requirements change frequently", "Needs active customer involvement"],
            ]
        ),

        heading("Choosing a Process Model"),

        list([
            "Requirement clarity and stability.",
            "Project size and complexity.",
            "Risk level.",
            "Customer availability.",
            "Team skill and experience.",
            "Budget and schedule constraints.",
            "Need for documentation and compliance.",
            "Need for early delivery.",
        ]),

        note(
            "No process model is best for every project. The correct model depends on requirements, risks, team, customer involvement and business constraints.",
            "warning",
            "Important"
        ),

        keyPoints([
            "A process model defines how software development activities are organised.",
            "Waterfall is linear and works best with stable requirements.",
            "Prototype model helps clarify unclear requirements.",
            "Incremental model delivers software in parts.",
            "Spiral model focuses on risk analysis.",
            "Agile supports frequent feedback and changing requirements.",
        ]),
    ],

    {
        summary:
            "Understand Waterfall, Prototype, Incremental, Spiral and Agile process models with advantages, limitations and use cases.",
        minutes: 14,
        tags: ["software-engineering", "process-models", "waterfall", "agile", "spiral"],

        mcqs: [
            mcq(
                "The Waterfall model is:",
                ["Linear sequential", "Purely random", "Only for maintenance", "Only for testing"],
                0,
                "Waterfall follows phases sequentially."
            ),
            mcq(
                "Prototype model is useful when:",
                ["Requirements are unclear", "No user exists", "Software is already complete", "Testing is banned"],
                0,
                "A prototype helps users clarify requirements."
            ),
            mcq(
                "Incremental model delivers software:",
                ["In small working parts", "Only at the end after many years", "Without testing", "Without requirements"],
                0,
                "Incremental development releases functional parts step by step."
            ),
            mcq(
                "Spiral model is mainly:",
                ["Risk-driven", "Documentation-free only", "Hardware-only", "No planning model"],
                0,
                "The Spiral model gives special attention to risk analysis."
            ),
            mcq(
                "Agile model emphasises:",
                ["Customer collaboration and response to change", "No communication", "Only fixed requirements", "No working software"],
                0,
                "Agile values feedback, iterations and flexibility."
            ),
            mcq(
                "Which model is least suitable for frequently changing requirements?",
                ["Waterfall", "Agile", "Prototype", "Incremental"],
                0,
                "Waterfall is rigid and assumes stable requirements."
            ),
        ],

        questions: [
            qa(
                "Explain the Waterfall model with advantages and disadvantages.",
                "The Waterfall model is a linear sequential software process model. Development flows through phases such as requirement analysis, design, implementation, testing, deployment and maintenance. Each phase is completed before the next begins. Its advantages are simplicity, clear structure, easy management and strong documentation. It works well when requirements are stable and well understood. Its disadvantages are poor flexibility, late user feedback, late testing and difficulty in handling requirement changes. Since working software appears near the end, errors in requirements may be discovered late and become costly to fix.",
                5
            ),
            qa(
                "Explain Prototype and Incremental process models.",
                "The Prototype model creates an early working model of the system to clarify user requirements. Users evaluate the prototype and provide feedback, which helps refine requirements before final development. It is useful when requirements are unclear, but users may mistake the prototype for the final system. The Incremental model develops software in small functional parts called increments. Each increment delivers a working subset of the system. It allows early delivery, user feedback and reduced risk. However, it requires careful planning to divide the system into meaningful increments.",
                5
            ),
            qa(
                "Compare Spiral and Agile models.",
                "The Spiral model is a risk-driven model that combines iterative development with systematic risk analysis. Each cycle includes planning, risk analysis, engineering and customer evaluation. It is suitable for large, complex and high-risk projects but can be costly and difficult to manage. Agile is an iterative and incremental approach that delivers working software in short cycles. It emphasises customer collaboration, team communication and responding to change. Agile is suitable when requirements change frequently and customers are available for feedback. Spiral focuses strongly on risk management, while Agile focuses on flexibility and frequent delivery.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — Software Requirements and SRS
========================================================= */

const softwareRequirementsAndSrs = createTopic(
    "software-requirements-and-srs",
    "Software Requirements and SRS",

    [
        definition(
            "Software Requirement",
            "A software requirement is a condition, capability or constraint that a software system must satisfy to meet user needs or business objectives."
        ),

        text(
            "Requirements define what the software should do and how well it should perform. Correct requirement understanding is critical because errors in requirements are costly to fix later."
        ),

        heading("Types of Requirements"),

        table(
            ["Type", "Meaning", "Example"],
            [
                ["Functional Requirement", "Describes what the system should do", "User can reset password"],
                ["Non-Functional Requirement", "Describes quality constraints", "System should respond within 2 seconds"],
                ["User Requirement", "High-level need written from user view", "Student should view results"],
                ["System Requirement", "Detailed technical requirement", "System shall store marks in database"],
                ["Domain Requirement", "Requirement from application domain", "Banking transaction must follow RBI rules"],
            ]
        ),

        heading("Functional Requirements"),

        list([
            "User registration and login.",
            "Search product by name.",
            "Generate monthly sales report.",
            "Calculate student grade.",
            "Send email notification.",
            "Allow admin to add, edit or delete records.",
        ]),

        heading("Non-Functional Requirements"),

        table(
            ["Category", "Meaning", "Example"],
            [
                ["Performance", "Speed and resource behaviour", "Page loads within 2 seconds"],
                ["Security", "Protection from unauthorised access", "Passwords must be hashed"],
                ["Reliability", "System works without failure", "99.9% uptime"],
                ["Usability", "Ease of use", "New user can complete registration easily"],
                ["Maintainability", "Ease of modification", "Code should be modular"],
                ["Portability", "Runs in different environments", "Works on Chrome and Firefox"],
                ["Scalability", "Handles growth", "Supports 10,000 users"],
            ]
        ),

        heading("Requirement Engineering Process"),

        steps([
            "Feasibility study.",
            "Requirement elicitation.",
            "Requirement analysis.",
            "Requirement specification.",
            "Requirement validation.",
            "Requirement management.",
        ]),

        heading("Requirement Elicitation Techniques"),

        table(
            ["Technique", "Description"],
            [
                ["Interviews", "Ask stakeholders questions directly"],
                ["Questionnaires", "Collect answers from many users"],
                ["Observation", "Watch users perform existing work"],
                ["Workshops", "Group discussion with stakeholders"],
                ["Document analysis", "Study existing forms, reports and manuals"],
                ["Prototyping", "Use sample system to discover requirements"],
            ]
        ),

        heading("Software Requirements Specification"),

        definition(
            "SRS",
            "Software Requirements Specification, or SRS, is a formal document that describes the functional and non-functional requirements of a software system."
        ),

        heading("Contents of SRS"),

        table(
            ["Section", "Content"],
            [
                ["Introduction", "Purpose, scope, definitions and references"],
                ["Overall description", "Product perspective, users, constraints"],
                ["Functional requirements", "System services and behaviours"],
                ["Non-functional requirements", "Performance, security, reliability, usability"],
                ["External interface requirements", "User, hardware, software and communication interfaces"],
                ["Data requirements", "Database, input/output and storage needs"],
                ["Acceptance criteria", "Conditions for accepting system"],
            ]
        ),

        heading("Characteristics of a Good SRS"),

        table(
            ["Characteristic", "Meaning"],
            [
                ["Correct", "Represents actual user needs"],
                ["Complete", "All necessary requirements are included"],
                ["Unambiguous", "Each requirement has only one meaning"],
                ["Consistent", "No conflicting requirements"],
                ["Verifiable", "Can be tested or checked"],
                ["Modifiable", "Easy to update"],
                ["Traceable", "Requirement can be linked to design, code and tests"],
                ["Prioritised", "Importance of requirements is clear"],
            ]
        ),

        heading("Requirement Traceability"),

        definition(
            "Requirement Traceability",
            "Requirement traceability is the ability to link requirements to related design elements, code modules, test cases and changes."
        ),

        note(
            "A requirement such as 'system should be fast' is weak because it is ambiguous and not easily testable. A better requirement is: 'The search result page shall load within 2 seconds for 95% of requests under normal load.'",
            "tip",
            "Good Requirement"
        ),

        keyPoints([
            "Requirements define what the system must do and constraints it must satisfy.",
            "Functional requirements describe services; non-functional requirements describe quality attributes.",
            "Requirement engineering includes elicitation, analysis, specification, validation and management.",
            "SRS is the formal document describing software requirements.",
            "A good SRS is correct, complete, unambiguous, consistent, verifiable and traceable.",
            "Clear requirements reduce costly changes later.",
        ]),
    ],

    {
        summary:
            "Learn functional/non-functional requirements, requirement engineering, elicitation, SRS contents and characteristics of good SRS.",
        minutes: 14,
        tags: ["software-engineering", "requirements", "srs", "functional-requirements"],

        mcqs: [
            mcq(
                "A functional requirement describes:",
                ["What the system should do", "Only colour of cables", "Only hardware weight", "Only office furniture"],
                0,
                "Functional requirements specify system services and behaviours."
            ),
            mcq(
                "A non-functional requirement describes:",
                ["Quality constraint such as performance or security", "Only login button text", "Only a single calculation", "Only variable names"],
                0,
                "Non-functional requirements define quality attributes."
            ),
            mcq(
                "SRS stands for:",
                ["Software Requirements Specification", "System Runtime Service", "Secure Router Setup", "Software Random Storage"],
                0,
                "SRS means Software Requirements Specification."
            ),
            mcq(
                "A good SRS should be:",
                ["Unambiguous and verifiable", "Confusing and incomplete", "Contradictory", "Impossible to test"],
                0,
                "Good requirements must be clear and testable."
            ),
            mcq(
                "Requirement elicitation means:",
                ["Collecting requirements from stakeholders", "Deleting source code", "Only testing UI colour", "Formatting hard disk"],
                0,
                "Elicitation gathers needs from users and stakeholders."
            ),
            mcq(
                "Traceability links requirements to:",
                ["Design, code and test cases", "Only screen size", "Only printer brand", "Only classroom chairs"],
                0,
                "Traceability tracks requirements through development and testing."
            ),
        ],

        questions: [
            qa(
                "Differentiate between functional and non-functional requirements.",
                "Functional requirements describe what the system should do. They define services, behaviours and functions, such as user login, product search, report generation or password reset. Non-functional requirements describe how well the system should perform or what quality constraints it must satisfy. Examples include performance, security, reliability, usability, maintainability, portability and scalability. For example, 'The user can upload a profile photo' is functional, while 'The upload should complete within 5 seconds for files up to 2 MB' is non-functional. Both are necessary for a successful system.",
                5
            ),
            qa(
                "Explain the requirement engineering process.",
                "Requirement engineering is the process of discovering, analysing, documenting, validating and managing software requirements. It begins with a feasibility study to check whether the project is practical. Requirement elicitation collects needs from stakeholders using interviews, questionnaires, observation, workshops, document analysis or prototyping. Requirement analysis resolves conflicts, removes ambiguity and prioritises requirements. Requirement specification documents requirements formally in the SRS. Requirement validation checks whether requirements are correct, complete and testable. Requirement management handles changes to requirements throughout the project.",
                5
            ),
            qa(
                "What is SRS? Explain characteristics of a good SRS.",
                "SRS stands for Software Requirements Specification. It is a formal document that describes the functional and non-functional requirements of a software system. It acts as an agreement between users, customers and developers. A good SRS should be correct, meaning it reflects real user needs; complete, meaning all necessary requirements are included; unambiguous, meaning each requirement has only one interpretation; consistent, meaning no conflicts exist; verifiable, meaning requirements can be tested; modifiable, meaning it can be updated easily; and traceable, meaning each requirement can be linked to design, code and test cases.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 5 — Software Project Management
========================================================= */

const softwareProjectManagement = createTopic(
    "software-project-management",
    "Software Project Management",

    [
        definition(
            "Software Project Management",
            "Software Project Management is the planning, organising, monitoring and controlling of software project activities to achieve project objectives within scope, time, cost and quality constraints."
        ),

        text(
            "Software projects involve people, technology, requirements, risks, deadlines and budgets. Project management helps coordinate these factors so that the software can be delivered successfully."
        ),

        heading("Project Management Triangle"),

        table(
            ["Constraint", "Meaning"],
            [
                ["Scope", "Features and work to be delivered"],
                ["Time", "Schedule and deadlines"],
                ["Cost", "Budget and resources"],
                ["Quality", "Fitness, correctness and reliability of product"],
            ]
        ),

        note(
            "Changing one project constraint usually affects others. Increasing scope without increasing time or cost often reduces quality.",
            "warning",
            "Project Triangle"
        ),

        heading("Project Planning Activities"),

        list([
            "Define project objectives and scope.",
            "Identify stakeholders.",
            "Estimate effort, cost and duration.",
            "Prepare schedule and milestones.",
            "Assign roles and responsibilities.",
            "Identify risks and mitigation plans.",
            "Plan communication and reporting.",
            "Plan quality assurance and testing.",
            "Prepare documentation and configuration management plan.",
        ], true),

        heading("Software Estimation"),

        definition(
            "Software Estimation",
            "Software estimation is the process of predicting effort, time, cost and resources required to complete a software project."
        ),

        table(
            ["Estimation Item", "Meaning"],
            [
                ["Size estimation", "How large the software is, e.g., LOC or function points"],
                ["Effort estimation", "Person-hours/person-months required"],
                ["Cost estimation", "Money required for people, tools and infrastructure"],
                ["Time estimation", "Calendar duration of project"],
                ["Resource estimation", "People, hardware, software and tools needed"],
            ]
        ),

        heading("Scheduling"),

        definition(
            "Scheduling",
            "Scheduling is the process of arranging project tasks in time order, assigning durations and resources, and setting milestones."
        ),

        table(
            ["Scheduling Tool/Concept", "Use"],
            [
                ["Work Breakdown Structure (WBS)", "Break project into smaller tasks"],
                ["Gantt Chart", "Shows tasks against time on a calendar"],
                ["PERT Chart", "Shows task dependencies and estimated time"],
                ["Milestone", "Important checkpoint or deliverable"],
                ["Critical Path", "Longest dependent task path determining project duration"],
            ]
        ),

        heading("Risk Management"),

        definition(
            "Risk",
            "A risk is a potential future problem that may negatively affect project cost, schedule, quality or scope."
        ),

        steps([
            "Identify possible risks.",
            "Analyse probability and impact.",
            "Prioritise important risks.",
            "Plan risk response or mitigation.",
            "Monitor risks throughout the project.",
            "Take action if risk becomes real.",
        ]),

        table(
            ["Risk Type", "Example", "Mitigation"],
            [
                ["Requirement risk", "Requirements change frequently", "Change control, Agile feedback"],
                ["Technical risk", "New technology may fail", "Prototype, training"],
                ["Schedule risk", "Tasks take longer than expected", "Buffer time, tracking"],
                ["People risk", "Key developer leaves", "Knowledge sharing, documentation"],
                ["Cost risk", "Budget exceeds estimate", "Regular cost monitoring"],
                ["Quality risk", "Many defects found late", "Early testing and reviews"],
            ]
        ),

        heading("Project Monitoring and Control"),

        list([
            "Track actual progress against plan.",
            "Review milestones and deliverables.",
            "Monitor cost and effort.",
            "Track defects and quality metrics.",
            "Manage requirement changes.",
            "Conduct status meetings.",
            "Update risk register.",
            "Take corrective action when deviations occur.",
        ]),

        heading("Software Quality Management"),

        definition(
            "Software Quality",
            "Software quality is the degree to which software satisfies stated and implied requirements and possesses desired attributes such as reliability, usability and maintainability."
        ),

        table(
            ["Activity", "Meaning"],
            [
                ["Quality Assurance", "Process-focused activities to prevent defects"],
                ["Quality Control", "Product-focused activities to detect defects"],
                ["Review", "Manual examination of work products"],
                ["Testing", "Executing software to find defects"],
                ["Standards", "Rules and guidelines for consistent quality"],
            ]
        ),

        heading("Documentation in Project Management"),

        list([
            "Project plan.",
            "SRS document.",
            "Design document.",
            "Test plan and test cases.",
            "Risk register.",
            "Meeting minutes.",
            "User manual.",
            "Maintenance and release notes.",
        ]),

        keyPoints([
            "Software project management controls scope, time, cost and quality.",
            "Planning includes estimation, scheduling, staffing, risk and quality planning.",
            "Estimation predicts effort, cost, duration and resources.",
            "Scheduling uses WBS, Gantt charts, PERT charts and milestones.",
            "Risk management identifies, analyses, mitigates and monitors risks.",
            "Quality assurance prevents defects; quality control detects defects.",
        ]),
    ],

    {
        summary:
            "Learn software project management, planning, estimation, scheduling, risk management, monitoring and quality management.",
        minutes: 14,
        tags: ["software-engineering", "project-management", "estimation", "risk-management", "quality"],

        mcqs: [
            mcq(
                "Software project management mainly involves:",
                ["Planning, monitoring and controlling software project activities", "Only writing comments", "Only buying computers", "Only printing documents"],
                0,
                "Project management coordinates project work within constraints."
            ),
            mcq(
                "The project management triangle includes:",
                ["Scope, time, cost and quality", "Mouse, keyboard, monitor", "HTML, CSS, JS", "RAM, ROM, CPU only"],
                0,
                "Scope, time, cost and quality are key project constraints."
            ),
            mcq(
                "WBS stands for:",
                ["Work Breakdown Structure", "Web Backup Server", "Wireless Boot System", "Write Binary Software"],
                0,
                "WBS breaks project work into manageable tasks."
            ),
            mcq(
                "A Gantt chart is used for:",
                ["Project scheduling", "Password encryption", "Compiler design", "Virus creation"],
                0,
                "Gantt charts show tasks on a timeline."
            ),
            mcq(
                "Risk management begins with:",
                ["Risk identification", "Ignoring all risks", "Final deployment only", "Deleting documentation"],
                0,
                "The first step is identifying possible risks."
            ),
            mcq(
                "Quality assurance is mainly:",
                ["Process-focused defect prevention", "Only product execution", "Only deleting bugs after release", "Only UI colour choice"],
                0,
                "QA focuses on improving processes to prevent defects."
            ),
        ],

        questions: [
            qa(
                "Define software project management and explain its importance.",
                "Software project management is the planning, organising, monitoring and controlling of software project activities to achieve objectives within scope, time, cost and quality constraints. It is important because software projects involve changing requirements, technical complexity, teams, budgets and deadlines. Without management, projects may suffer from delays, cost overruns, poor quality and incomplete features. Project management helps define scope, estimate effort and cost, schedule tasks, assign responsibilities, manage risks, monitor progress, control changes and ensure quality. It improves coordination among developers, testers, managers, customers and users.",
                5
            ),
            qa(
                "Explain software estimation and scheduling.",
                "Software estimation predicts the size, effort, cost, duration and resources required for a project. Size may be estimated using lines of code, function points or story points. Effort estimation predicts person-hours or person-months. Cost estimation includes salaries, tools, infrastructure and other expenses. Scheduling arranges project tasks over time. It uses Work Breakdown Structure to divide work, Gantt charts to show task timelines, PERT charts to show dependencies and milestones to mark important deliverables. Good estimation and scheduling help control project progress and reduce delay.",
                5
            ),
            qa(
                "What is risk management in software projects?",
                "Risk management is the process of identifying, analysing, prioritising, mitigating and monitoring possible future problems that may affect a software project. Risks may be requirement-related, technical, schedule-related, cost-related, people-related or quality-related. For example, requirements may change, a key developer may leave, a new technology may fail or testing may reveal many defects late. Risk management begins by identifying risks, estimating their probability and impact, preparing mitigation plans and monitoring them throughout the project. Effective risk management reduces surprises and improves chances of project success.",
                5
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit1Topics = [
    introductionToSoftwareEngineering,
    softwareDevelopmentLifeCycle,
    softwareProcessModels,
    softwareRequirementsAndSrs,
    softwareProjectManagement,
];