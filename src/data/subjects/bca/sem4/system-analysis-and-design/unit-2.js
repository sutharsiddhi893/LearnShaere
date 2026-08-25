/* =========================================================
   BCA • SEM 4 • System Analysis and Design
   UNIT 2 — System Design, Modeling, Testing and Implementation
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
   TOPIC 1 — System Design Concepts
========================================================= */

const systemDesign = createTopic(
    "system-design-concepts",
    "System Design Concepts",

    [
        definition(
            "System Design",
            "System design is the process of defining the architecture, modules, interfaces, data and components of a system to satisfy the specified requirements."
        ),

        heading("Objectives of System Design"),

        list([
            "Transform requirements into a working structure.",
            "Define system architecture.",
            "Design database and files.",
            "Design user interface.",
            "Define modules and their interactions.",
            "Ensure performance, security and maintainability.",
        ]),

        heading("Types of System Design"),

        table(
            ["Type", "Description"],
            [
                ["Logical Design", "What the system will do — abstract model"],
                ["Physical Design", "How the system will be built — technical detail"],
                ["Architectural Design", "Overall structure and modules"],
                ["Detailed Design", "Internal design of each module"],
                ["Interface Design", "How users and systems interact"],
                ["Database Design", "How data is organised and stored"],
            ]
        ),

        heading("Logical vs Physical Design"),

        table(
            ["Basis", "Logical Design", "Physical Design"],
            [
                ["Focus", "What system does", "How system works"],
                ["Level", "Abstract", "Concrete"],
                ["Output", "DFD, ER diagram", "Program specs, database schema"],
                ["Technology", "Independent", "Dependent"],
                ["Users", "Analysts and users", "Developers"],
            ]
        ),

        heading("Design Principles"),

        list([
            "Modularity — divide system into small independent modules.",
            "Abstraction — hide internal details.",
            "Coupling — should be low between modules.",
            "Cohesion — should be high within a module.",
            "Reusability — components should be reusable.",
            "Simplicity — design should be easy to understand.",
        ]),

        heading("Coupling and Cohesion"),

        definition(
            "Coupling",
            "The degree of dependency between two modules. Low coupling is desired."
        ),

        definition(
            "Cohesion",
            "The degree to which elements inside a module belong together. High cohesion is desired."
        ),

        table(
            ["Coupling Types", "Cohesion Types"],
            [
                ["Content (worst)", "Coincidental (worst)"],
                ["Common", "Logical"],
                ["External", "Temporal"],
                ["Control", "Procedural"],
                ["Stamp", "Communicational"],
                ["Data (best)", "Sequential"],
                ["-", "Functional (best)"],
            ]
        ),

        heading("Modular Design"),

        list([
            "System is divided into small modules.",
            "Each module performs a specific task.",
            "Modules can be developed independently.",
            "Easy to test, maintain and modify.",
            "Improves reusability.",
        ]),

        heading("Structured Design"),

        list([
            "Top-down approach.",
            "System is decomposed into modules.",
            "Uses structure charts.",
            "Focus on functions.",
            "Suitable for procedural systems.",
        ]),

        note(
            "Good design has low coupling and high cohesion. This means modules should be independent of each other but internally focused on a single purpose.",
            "tip",
            "Design Golden Rule"
        ),

        keyPoints([
            "System design transforms requirements into structure.",
            "Logical design is abstract, physical is technical.",
            "Modularity divides system into independent parts.",
            "Low coupling and high cohesion improve quality.",
            "Structured design uses top-down decomposition.",
        ]),
    ],

    {
        summary:
            "Understand system design concepts, logical vs physical design, modularity, coupling and cohesion.",
        minutes: 12,
        tags: ["design", "coupling", "cohesion", "modular", "important"],

        mcqs: [
            mcq(
                "Good design should have:",
                ["High coupling, low cohesion", "Low coupling, high cohesion", "High both", "Low both"],
                1,
                "Low coupling and high cohesion is the goal."
            ),
            mcq(
                "Logical design focuses on:",
                ["How", "What", "Why", "Where"],
                1,
                "Logical design focuses on what the system should do."
            ),
            mcq(
                "Best cohesion type is:",
                ["Coincidental", "Logical", "Functional", "Temporal"],
                2,
                "Functional cohesion is the best."
            ),
            mcq(
                "Worst coupling type is:",
                ["Data", "Stamp", "Content", "Control"],
                2,
                "Content coupling is the worst."
            ),
        ],

        questions: [
            qa(
                "Differentiate between logical and physical design.",
                "Logical design describes what the system should do without concern for how it will be implemented. It is an abstract representation using tools like DFDs and ER diagrams. It is technology-independent and used by analysts and users. Physical design describes how the system will actually be built. It includes technical details like program specifications, database schema, hardware selection and network topology. It is technology-dependent and used by developers. Logical design comes first and is then converted into physical design during the implementation phase.",
                4
            ),
            qa(
                "Explain coupling and cohesion with types.",
                "Coupling is the degree of dependency between modules. Low coupling is preferred so that changes in one module do not affect others. Types from worst to best are content, common, external, control, stamp and data coupling. Cohesion is the degree to which elements within a module belong together. High cohesion means the module performs a single well-defined task. Types from worst to best are coincidental, logical, temporal, procedural, communicational, sequential and functional cohesion. Good design has low coupling and high cohesion, which improves maintainability, reusability and understandability.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — DFD and ER Diagrams
========================================================= */

const dfdErd = createTopic(
    "dfd-and-er-diagrams",
    "Data Flow Diagrams and ER Diagrams",

    [
        definition(
            "Data Flow Diagram (DFD)",
            "A DFD is a graphical representation that shows how data flows through a system, its sources, destinations, processes and stores."
        ),

        heading("DFD Symbols"),

        table(
            ["Symbol", "Meaning", "Notation"],
            [
                ["External Entity", "Source or destination of data", "Square"],
                ["Process", "Transforms input into output", "Circle or rounded rectangle"],
                ["Data Store", "Storage of data", "Open rectangle"],
                ["Data Flow", "Movement of data", "Arrow"],
            ]
        ),

        heading("Levels of DFD"),

        list([
            "Level 0 (Context Diagram) — shows entire system as one process.",
            "Level 1 — breaks system into main processes.",
            "Level 2 — further breaks each Level 1 process.",
            "Higher levels — more detail as needed.",
        ]),

        heading("Rules for Drawing DFD"),

        list([
            "Each process must have at least one input and one output.",
            "Data cannot flow directly between two data stores.",
            "Data cannot flow directly between two external entities.",
            "Every data flow must have a name.",
            "Processes should be numbered.",
            "Diagram should be balanced across levels.",
        ]),

        heading("Example: Student Registration System"),

        list([
            "External Entity — Student, Admin",
            "Process — Register Student, Generate ID",
            "Data Store — Student Database",
            "Data Flow — Student Details, Confirmation",
        ]),

        heading("Entity Relationship Diagram (ERD)"),

        definition(
            "ERD",
            "ER Diagram is a graphical representation of entities and relationships in a database showing how data is organised."
        ),

        heading("ERD Components"),

        table(
            ["Component", "Symbol", "Description"],
            [
                ["Entity", "Rectangle", "Object like Student, Course"],
                ["Attribute", "Ellipse", "Property like Name, Age"],
                ["Relationship", "Diamond", "Association between entities"],
                ["Primary Key", "Underlined attribute", "Uniquely identifies entity"],
                ["Weak Entity", "Double rectangle", "Depends on another entity"],
            ]
        ),

        heading("Types of Attributes"),

        list([
            "Simple — cannot be divided (Age).",
            "Composite — can be divided (Name into first, last).",
            "Derived — calculated from other attribute (Age from DOB).",
            "Multi-valued — has multiple values (Phone numbers).",
            "Key — uniquely identifies entity (Roll No).",
        ]),

        heading("Cardinality / Relationship Types"),

        table(
            ["Type", "Description", "Example"],
            [
                ["One-to-One (1:1)", "One entity relates to one", "Person - Passport"],
                ["One-to-Many (1:M)", "One entity relates to many", "Teacher - Students"],
                ["Many-to-One (M:1)", "Many entities relate to one", "Employees - Department"],
                ["Many-to-Many (M:N)", "Many relate to many", "Students - Courses"],
            ]
        ),

        heading("Example: Student-Course ERD"),

        list([
            "Entities: Student, Course",
            "Attributes: Student(RollNo, Name, Age), Course(CourseID, Name)",
            "Relationship: Enrolls (M:N)",
            "Primary Keys: RollNo, CourseID",
        ]),

        note(
            "DFD focuses on data flow and processes, while ERD focuses on data structure and relationships. Both are used together during analysis and design.",
            "tip",
            "DFD vs ERD"
        ),

        keyPoints([
            "DFD shows data flow through processes.",
            "DFD uses external entity, process, data store and data flow.",
            "Level 0 is the context diagram.",
            "ERD shows entities, attributes and relationships.",
            "Cardinality defines relationship types like 1:1, 1:M and M:N.",
        ]),
    ],

    {
        summary:
            "Learn Data Flow Diagrams, their symbols and levels along with ER Diagrams and cardinality.",
        minutes: 13,
        tags: ["dfd", "erd", "modeling", "important"],

        mcqs: [
            mcq(
                "In DFD, a process is represented by:",
                ["Square", "Circle", "Diamond", "Triangle"],
                1,
                "Process is shown as circle or rounded rectangle."
            ),
            mcq(
                "Level 0 DFD is called:",
                ["Detail diagram", "Context diagram", "Physical diagram", "Logical diagram"],
                1,
                "Level 0 DFD is the context diagram."
            ),
            mcq(
                "In ERD, entity is represented by:",
                ["Ellipse", "Rectangle", "Diamond", "Circle"],
                1,
                "Entity is shown as a rectangle."
            ),
            mcq(
                "Student-Course relationship is usually:",
                ["1:1", "1:M", "M:1", "M:N"],
                3,
                "A student takes many courses and each course has many students."
            ),
        ],

        questions: [
            qa(
                "Explain DFD with its symbols and levels.",
                "A Data Flow Diagram (DFD) is a graphical representation showing how data flows through a system. Its four symbols are external entity shown as a square representing source or destination, process shown as a circle transforming input to output, data store shown as an open rectangle storing data, and data flow shown as an arrow representing movement of data. DFD is drawn in levels — Level 0 or context diagram shows the whole system as a single process; Level 1 breaks it into main processes; Level 2 further decomposes each Level 1 process. Each level should be balanced with the previous. DFDs help analysts understand and communicate system functionality clearly.",
                4
            ),
            qa(
                "Explain ER Diagram with its components and relationships.",
                "An Entity Relationship Diagram (ERD) shows how data is organised in a database. Its components are entities represented by rectangles like Student or Course; attributes represented by ellipses like Name or Age; relationships represented by diamonds like Enrolls; primary keys shown as underlined attributes that uniquely identify an entity; and weak entities represented by double rectangles that depend on another entity. Attributes may be simple, composite, derived, multi-valued or key. Relationships are classified by cardinality as one-to-one, one-to-many, many-to-one and many-to-many. ERDs are essential for database design and provide a clear visual model of data structure.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — Input, Output and Interface Design
========================================================= */

const ioInterfaceDesign = createTopic(
    "input-output-interface-design",
    "Input, Output and Interface Design",

    [
        definition(
            "Input Design",
            "Input design is the process of designing forms, screens and methods used to enter data into the system in an accurate and efficient way."
        ),

        heading("Objectives of Input Design"),

        list([
            "Ensure accurate data entry.",
            "Reduce data entry errors.",
            "Make process easy for users.",
            "Provide validation.",
            "Ensure security of input.",
        ]),

        heading("Types of Input"),

        list([
            "External input — from users or other systems.",
            "Internal input — generated within the system.",
            "Operational input — used in daily operation.",
            "Computational input — used for calculation.",
        ]),

        heading("Input Design Guidelines"),

        list([
            "Use clear labels.",
            "Group related fields.",
            "Use appropriate input controls like dropdown, radio, checkbox.",
            "Provide default values.",
            "Validate input immediately.",
            "Use consistent layout.",
            "Provide error messages near the field.",
        ]),

        heading("Data Validation"),

        table(
            ["Type", "Description", "Example"],
            [
                ["Presence check", "Field must not be empty", "Name required"],
                ["Range check", "Value in allowed range", "Age 1-120"],
                ["Type check", "Correct data type", "Number only"],
                ["Format check", "Correct format", "Email pattern"],
                ["Length check", "Correct length", "Mobile 10 digits"],
                ["Consistency check", "Values must be consistent", "End date > Start date"],
            ]
        ),

        heading("Output Design"),

        definition(
            "Output Design",
            "Output design is the process of designing reports, screens and documents produced by the system for users and other systems."
        ),

        heading("Types of Output"),

        table(
            ["Type", "Example"],
            [
                ["Screen output", "Web page, dashboard"],
                ["Print output", "Invoice, report"],
                ["Audio output", "Announcement"],
                ["File output", "PDF, Excel export"],
                ["External output", "Email, SMS"],
            ]
        ),

        heading("Output Design Guidelines"),

        list([
            "Present information clearly.",
            "Use headings and grouping.",
            "Include date, time and page numbers.",
            "Use charts and graphs for large data.",
            "Provide summary and totals.",
            "Ensure consistent format.",
            "Support printing and export.",
        ]),

        heading("User Interface (UI) Design"),

        definition(
            "User Interface",
            "The user interface is the means through which users interact with the system, including screens, menus, buttons and controls."
        ),

        heading("Types of User Interfaces"),

        table(
            ["Type", "Description", "Example"],
            [
                ["Command Line (CLI)", "Text-based commands", "MS-DOS, Linux terminal"],
                ["Menu-driven", "User selects from menus", "ATM"],
                ["Form-based", "Fill in forms", "Registration"],
                ["Graphical (GUI)", "Windows, icons, menus", "Windows, macOS"],
                ["Touch", "Touch-based interaction", "Smartphone"],
                ["Voice", "Speech-based", "Alexa, Siri"],
            ]
        ),

        heading("UI Design Principles"),

        list([
            "Simplicity — easy to understand.",
            "Consistency — same style throughout.",
            "Feedback — inform users of actions.",
            "Error prevention and recovery.",
            "User control and freedom.",
            "Accessibility for all users.",
            "Aesthetic and minimalist design.",
            "Help and documentation.",
        ]),

        note(
            "A good user interface is invisible to the user. If users have to think about how to use the system, the design has failed. Follow the principle 'Don't make me think'.",
            "tip",
            "UI Design Rule"
        ),

        keyPoints([
            "Input design ensures accurate and easy data entry.",
            "Validation prevents wrong data from entering system.",
            "Output design presents information effectively.",
            "UI should be simple, consistent and provide feedback.",
            "Different UI types suit different use cases.",
        ]),
    ],

    {
        summary:
            "Learn principles of input, output and user interface design along with validation techniques.",
        minutes: 12,
        tags: ["input", "output", "ui", "validation", "important"],

        mcqs: [
            mcq(
                "Checking if age is between 1 and 120 is:",
                ["Presence check", "Range check", "Type check", "Length check"],
                1,
                "This is a range check."
            ),
            mcq(
                "ATM is an example of:",
                ["GUI", "CLI", "Menu-driven", "Voice"],
                2,
                "ATM uses a menu-driven interface."
            ),
            mcq(
                "Which principle says 'same style throughout'?",
                ["Simplicity", "Consistency", "Feedback", "Aesthetics"],
                1,
                "Consistency means uniform style across the interface."
            ),
            mcq(
                "Email format checking is:",
                ["Length check", "Format check", "Range check", "Presence check"],
                1,
                "Email is verified using a format pattern."
            ),
        ],

        questions: [
            qa(
                "Explain input design and data validation techniques.",
                "Input design is the process of designing forms, screens and methods for entering data into the system accurately and efficiently. Good input design uses clear labels, groups related fields, uses appropriate controls like dropdowns and checkboxes, provides default values and validates input immediately. Common validation techniques include presence check ensuring a field is not empty; range check verifying value falls within allowed limits; type check confirming correct data type; format check verifying correct pattern like email; length check for correct length; and consistency check ensuring values are logically related. Proper input design and validation prevent incorrect data from entering the system.",
                4
            ),
            qa(
                "Explain user interface design principles.",
                "User interface design principles guide creating effective interfaces. Simplicity ensures the interface is easy to understand. Consistency maintains the same style throughout the system. Feedback informs users about the result of their actions. Error prevention and recovery help users avoid and correct mistakes. User control gives freedom to undo actions. Accessibility ensures usability by all users including disabled ones. Aesthetic and minimalist design avoids unnecessary elements. Help and documentation should be easily available. Following these principles creates an intuitive interface where users can complete tasks without confusion or effort.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — System Testing
========================================================= */

const systemTesting = createTopic(
    "system-testing",
    "System Testing",

    [
        definition(
            "Testing",
            "Testing is the process of executing a system to find errors and to verify that it meets the specified requirements."
        ),

        heading("Objectives of Testing"),

        list([
            "Find defects before delivery.",
            "Ensure system meets requirements.",
            "Verify performance and reliability.",
            "Improve quality.",
            "Build user confidence.",
        ]),

        heading("Testing Principles"),

        list([
            "Testing shows presence of defects, not their absence.",
            "Exhaustive testing is impossible.",
            "Early testing saves time and cost.",
            "Defects cluster in critical modules.",
            "Testing is context dependent.",
            "Absence of errors is a fallacy.",
        ]),

        heading("Levels of Testing"),

        table(
            ["Level", "Description"],
            [
                ["Unit Testing", "Test individual modules"],
                ["Integration Testing", "Test combined modules"],
                ["System Testing", "Test complete system"],
                ["Acceptance Testing", "Test by user for acceptance"],
            ]
        ),

        heading("Unit Testing"),

        list([
            "Tests smallest unit of code.",
            "Usually done by developer.",
            "Uses white box techniques.",
            "Ensures individual module works.",
        ]),

        heading("Integration Testing"),

        list([
            "Tests interaction between modules.",
            "Detects interface errors.",
            "Approaches: top-down, bottom-up, sandwich, big-bang.",
        ]),

        heading("System Testing"),

        list([
            "Tests complete integrated system.",
            "Validates end-to-end functionality.",
            "Includes performance, security, usability testing.",
            "Done in an environment similar to production.",
        ]),

        heading("Acceptance Testing"),

        list([
            "Done by end users.",
            "Verifies system meets business needs.",
            "Includes alpha testing (in-house) and beta testing (real users).",
            "Formal acceptance leads to deployment.",
        ]),

        heading("Testing Methods"),

        table(
            ["Method", "Description", "Focus"],
            [
                ["Black Box", "Test without knowing internal code", "Functionality"],
                ["White Box", "Test with knowledge of internal code", "Logic and paths"],
                ["Grey Box", "Partial knowledge of code", "Both"],
            ]
        ),

        heading("Types of Testing"),

        table(
            ["Type", "Purpose"],
            [
                ["Functional", "Verify functions work correctly"],
                ["Performance", "Measure speed and responsiveness"],
                ["Load", "Behaviour under expected load"],
                ["Stress", "Behaviour under extreme load"],
                ["Security", "Detect vulnerabilities"],
                ["Usability", "Ease of use"],
                ["Regression", "Ensure new changes do not break existing features"],
                ["Compatibility", "Works on different platforms"],
            ]
        ),

        heading("Testing Process"),

        steps([
            "Test planning — define scope and strategy.",
            "Test case design — write test cases.",
            "Test environment setup — prepare hardware/software.",
            "Test execution — run test cases.",
            "Defect reporting — log bugs found.",
            "Retesting and regression — verify fixes.",
            "Test closure — evaluate and document.",
        ]),

        note(
            "Testing cannot prove that software has no defects. It can only show that defects exist. Quality must be built in from the start, not tested in at the end.",
            "warning",
            "Testing Truth"
        ),

        keyPoints([
            "Testing verifies system meets requirements.",
            "Unit, integration, system and acceptance are levels of testing.",
            "Black box tests functionality, white box tests logic.",
            "Regression testing ensures changes do not break existing features.",
            "Testing process includes planning, execution and closure.",
        ]),
    ],

    {
        summary:
            "Understand testing objectives, levels, methods, types and process to ensure system quality.",
        minutes: 12,
        tags: ["testing", "unit", "integration", "black-box", "important"],

        mcqs: [
            mcq(
                "Testing individual modules is called:",
                ["System testing", "Unit testing", "Acceptance testing", "Integration testing"],
                1,
                "Unit testing tests individual modules."
            ),
            mcq(
                "Testing without knowing internal code is:",
                ["White box", "Black box", "Grey box", "Green box"],
                1,
                "Black box testing tests functionality without code knowledge."
            ),
            mcq(
                "Beta testing is done by:",
                ["Developers", "Testers", "End users", "Managers"],
                2,
                "Beta testing is done by real end users."
            ),
            mcq(
                "Retesting after fixing bugs is called:",
                ["Load testing", "Regression testing", "Stress testing", "Alpha testing"],
                1,
                "Regression testing verifies that fixes do not break existing features."
            ),
        ],

        questions: [
            qa(
                "Explain different levels of testing.",
                "Testing is done at four main levels. Unit testing tests the smallest unit of code such as a function or module and is usually done by developers using white box techniques. Integration testing tests the interaction between combined modules to detect interface errors using approaches like top-down, bottom-up, sandwich and big-bang. System testing tests the complete integrated system to validate end-to-end functionality including performance, security and usability, usually in a production-like environment. Acceptance testing is done by end users to verify that the system meets business needs. It includes alpha testing done in-house and beta testing done by real users. Each level focuses on different aspects and together they ensure system quality.",
                4
            ),
            qa(
                "Differentiate between Black Box and White Box testing.",
                "Black box testing tests the system without any knowledge of internal code. It focuses on inputs and expected outputs, checking whether functionality meets requirements. It is done by testers and includes functional, usability and acceptance testing. White box testing requires complete knowledge of internal code. It focuses on program logic, code paths, branches and conditions. It is done by developers and includes techniques like statement coverage, branch coverage and path testing. Black box is user-focused while white box is code-focused. Grey box testing combines both, requiring partial knowledge of internal structure. Both approaches are needed for thorough testing.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 5 — System Implementation and Maintenance
========================================================= */

const implementationMaintenance = createTopic(
    "system-implementation-and-maintenance",
    "System Implementation and Maintenance",

    [
        definition(
            "System Implementation",
            "System implementation is the process of installing the new system, converting from the old system, training users and putting the system into operation."
        ),

        heading("Activities in Implementation"),

        list([
            "Hardware and software installation.",
            "Database creation and data conversion.",
            "User training.",
            "System conversion.",
            "Testing in real environment.",
            "Handover and documentation.",
        ]),

        heading("System Conversion Strategies"),

        table(
            ["Strategy", "Description", "Risk"],
            [
                ["Direct / Big Bang", "Old system replaced with new at once", "High"],
                ["Parallel", "Both systems run together for a period", "Low but expensive"],
                ["Phased", "Introduced in phases", "Medium"],
                ["Pilot", "Introduced in one location first", "Low"],
            ]
        ),

        heading("1. Direct Conversion"),

        list([
            "Old system is stopped and new one starts.",
            "Fast and low cost.",
            "High risk if new system fails.",
            "Suitable when old system cannot continue.",
        ]),

        heading("2. Parallel Conversion"),

        list([
            "Old and new systems run together.",
            "Results are compared.",
            "Lowest risk.",
            "Expensive due to double work.",
            "Suitable for critical systems.",
        ]),

        heading("3. Phased Conversion"),

        list([
            "System introduced in stages.",
            "Each phase is tested before next.",
            "Medium risk.",
            "Suitable for large systems.",
            "Takes more time overall.",
        ]),

        heading("4. Pilot Conversion"),

        list([
            "New system used at one location first.",
            "After success, rolled out to other locations.",
            "Reduces risk of large-scale failure.",
            "Suitable for multi-branch organisations.",
        ]),

        heading("User Training"),

        list([
            "Prepare users to use the new system.",
            "Methods include classroom, hands-on, online and manuals.",
            "Training should be role-based.",
            "Follow-up support is important.",
        ]),

        heading("System Maintenance"),

        definition(
            "Maintenance",
            "Maintenance is the process of modifying a system after it is delivered to correct errors, improve performance or adapt to new requirements."
        ),

        heading("Types of Maintenance"),

        table(
            ["Type", "Purpose", "Example"],
            [
                ["Corrective", "Fix bugs", "Fix login error"],
                ["Adaptive", "Adapt to new environment", "Support new OS"],
                ["Perfective", "Improve performance/features", "Add new report"],
                ["Preventive", "Prevent future problems", "Refactor code"],
            ]
        ),

        heading("Documentation"),

        list([
            "System documentation — technical details.",
            "User documentation — how to use system.",
            "Operations documentation — for administrators.",
            "Design documentation — for developers.",
        ]),

        heading("Documentation Importance"),

        list([
            "Helps future maintenance.",
            "Assists new team members.",
            "Reduces dependency on individuals.",
            "Provides reference for users.",
            "Required for audits and compliance.",
        ]),

        note(
            "Maintenance often costs more than development over the system's lifetime. Good documentation, modular design and coding standards make maintenance easier.",
            "warning",
            "Maintenance Cost"
        ),

        keyPoints([
            "Implementation puts the system into real use.",
            "Direct, parallel, phased and pilot are conversion strategies.",
            "Parallel is safest but expensive.",
            "Maintenance types: corrective, adaptive, perfective, preventive.",
            "Documentation is critical for long-term success.",
        ]),
    ],

    {
        summary:
            "Learn implementation strategies, user training, types of maintenance and importance of documentation.",
        minutes: 12,
        tags: ["implementation", "maintenance", "conversion", "important"],

        mcqs: [
            mcq(
                "Which conversion runs old and new systems together?",
                ["Direct", "Parallel", "Phased", "Pilot"],
                1,
                "Parallel conversion runs both systems simultaneously."
            ),
            mcq(
                "Fixing bugs after delivery is:",
                ["Adaptive", "Corrective", "Perfective", "Preventive"],
                1,
                "Corrective maintenance fixes bugs."
            ),
            mcq(
                "Which conversion has highest risk?",
                ["Direct", "Parallel", "Phased", "Pilot"],
                0,
                "Direct conversion has highest risk."
            ),
            mcq(
                "Adding a new feature is:",
                ["Corrective", "Adaptive", "Perfective", "Preventive"],
                2,
                "Perfective maintenance improves or adds features."
            ),
        ],

        questions: [
            qa(
                "Explain different system conversion strategies.",
                "System conversion is the process of switching from the old system to the new one. Direct conversion stops the old system and starts the new one immediately. It is fast and low cost but has high risk. Parallel conversion runs both systems together for some time and compares results. It has the lowest risk but is expensive due to double work. Phased conversion introduces the system in stages, testing each phase before the next. It has medium risk and suits large systems but takes more time. Pilot conversion uses the new system in one location first, then rolls it out to others after success. It reduces the risk of large-scale failure and suits multi-branch organisations. Choice depends on system criticality, budget and risk tolerance.",
                4
            ),
            qa(
                "Explain types of system maintenance.",
                "System maintenance is modifying a system after delivery. There are four main types. Corrective maintenance fixes errors and bugs discovered after deployment. Adaptive maintenance changes the system to work in a new environment such as a new operating system, hardware or regulation. Perfective maintenance improves performance, adds new features or enhances user interface based on user feedback. Preventive maintenance modifies the system to prevent future problems, such as refactoring code to improve maintainability. Maintenance typically consumes more resources than initial development over the system's lifetime, making good design and documentation crucial for reducing maintenance effort.",
                4
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit2Topics = [
    systemDesign,
    dfdErd,
    ioInterfaceDesign,
    systemTesting,
    implementationMaintenance,
];