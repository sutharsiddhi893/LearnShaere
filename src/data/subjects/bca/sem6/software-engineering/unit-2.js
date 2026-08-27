/* =========================================================
   BCA • SEM 5 • Software Engineering
   UNIT 2 — Software Design, Testing, Quality and Maintenance
========================================================= */

import {
  createTopic,
  heading,
  text,
  list,
  table,
  note,
  definition,
  steps,
  keyPoints,
  mcq,
  qa,
} from "../../../../helpers";

/* =========================================================
   TOPIC 1 — Software Design Concepts
========================================================= */

const softwareDesign = createTopic(
    "software-design-concepts",
    "Software Design Concepts",

    [
        definition(
            "Software Design",
            "Software Design is the process of transforming user requirements into a suitable form that helps programmers write code and implement the software."
        ),

        heading("Design Levels"),

        table(
            ["Level", "Description"],
            [
                ["Architectural Design", "Overall system structure and components"],
                ["High-Level Design", "Modules, their relationships and interfaces"],
                ["Detailed Design", "Internal logic of each module"],
            ]
        ),

        heading("Design Principles"),

        list([
            "Abstraction - Hide unnecessary details.",
            "Modularity - Divide system into independent modules.",
            "Information Hiding - Hide internal details of modules.",
            "Refinement - Add details step by step.",
            "Refactoring - Improve internal structure without changing behaviour.",
            "Separation of Concerns - Different aspects handled separately.",
        ]),

        heading("Modularity"),

        definition(
            "Modularity",
            "Modularity is the process of dividing a software system into small, manageable and independent units called modules."
        ),

        list([
            "Easier to develop and understand.",
            "Simplifies testing and debugging.",
            "Supports parallel development.",
            "Improves maintainability.",
            "Enables code reuse.",
        ]),

        heading("Coupling and Cohesion"),

        definition(
            "Coupling",
            "Coupling is the degree of interdependence between software modules. Lower coupling is better."
        ),

        definition(
            "Cohesion",
            "Cohesion is the degree to which elements inside a module belong together. Higher cohesion is better."
        ),

        table(
            ["Coupling Type", "Description", "Quality"],
            [
                ["Content", "One module modifies data of another", "Worst"],
                ["Common", "Modules share global data", "Bad"],
                ["Control", "One module controls another's flow", "Medium"],
                ["Stamp", "Modules share data structure", "Medium"],
                ["Data", "Modules share simple data", "Good"],
            ]
        ),

        table(
            ["Cohesion Type", "Description", "Quality"],
            [
                ["Coincidental", "No relation between elements", "Worst"],
                ["Logical", "Similar activities grouped", "Bad"],
                ["Temporal", "Executed at same time", "Medium"],
                ["Procedural", "Follow certain sequence", "Medium"],
                ["Communicational", "Operate on same data", "Good"],
                ["Sequential", "Output of one is input of next", "Better"],
                ["Functional", "All elements for single task", "Best"],
            ]
        ),

        heading("Design Approaches"),

        list([
            "Top-Down Design - Start with overall system then divide into modules.",
            "Bottom-Up Design - Start with modules then combine into system.",
            "Function-Oriented Design - Based on functions and data flow.",
            "Object-Oriented Design - Based on objects, classes and relationships.",
        ]),

        note(
            "Good design has low coupling and high cohesion. This makes the software easier to maintain and modify.",
            "tip",
            "Design Rule"
        ),

        keyPoints([
            "Software design transforms requirements into implementation-ready form.",
            "Design has three levels: architectural, high-level and detailed.",
            "Coupling should be low and cohesion should be high.",
            "Functional cohesion is best and content coupling is worst.",
            "Modularity supports better development and maintenance.",
        ]),
    ],

    {
        summary:
            "Study software design concepts, principles, modularity, coupling, cohesion and design approaches.",
        minutes: 13,
        tags: ["design", "coupling", "cohesion", "modularity", "important"],

        mcqs: [
            mcq(
                "Good software design has:",
                ["High coupling, low cohesion", "Low coupling, high cohesion", "High both", "Low both"],
                1,
                "Good design has low coupling and high cohesion."
            ),
            mcq(
                "Which is the best type of cohesion?",
                ["Coincidental", "Logical", "Functional", "Temporal"],
                2,
                "Functional cohesion is the best type."
            ),
            mcq(
                "Which is the worst type of coupling?",
                ["Data", "Control", "Content", "Stamp"],
                2,
                "Content coupling is the worst."
            ),
            mcq(
                "Modularity helps in:",
                ["Slow development", "Independent development", "More bugs", "Higher cost"],
                1,
                "Modularity supports independent parallel development."
            ),
        ],

        questions: [
            qa(
                "Explain Coupling and Cohesion in software design.",
                "Coupling is the degree of interdependence between software modules. It measures how closely connected different modules are. Lower coupling is desirable because it means modules can be changed independently. Types of coupling from worst to best include content, common, control, stamp and data coupling. Cohesion is the degree to which elements inside a module belong together and work towards a single purpose. Higher cohesion is desirable as it indicates a well-focused module. Types of cohesion from worst to best include coincidental, logical, temporal, procedural, communicational, sequential and functional cohesion. Good software design aims for low coupling and high cohesion, which improves maintainability, testability and reusability of the software.",
                4
            ),
            qa(
                "Explain the principles of software design.",
                "Software design follows several important principles. Abstraction hides unnecessary details and shows only relevant information at each level. Modularity divides the system into small, independent and manageable modules that can be developed and tested separately. Information Hiding conceals internal details of modules from other modules, exposing only necessary interfaces. Refinement is a top-down strategy where design is elaborated step by step, adding more detail at each level. Refactoring improves the internal structure of code without changing its external behaviour, keeping the design clean. Separation of Concerns ensures different aspects of the system are handled by different modules. These principles together produce software that is easier to develop, understand, test and maintain over time.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — Structured and Object-Oriented Design
========================================================= */

const structuredOODesign = createTopic(
    "structured-and-object-oriented-design",
    "Structured and Object-Oriented Design",

    [
        heading("Structured Design"),

        definition(
            "Structured Design",
            "Structured Design is a top-down approach that focuses on breaking a system into functions and data flow between them."
        ),

        heading("Data Flow Diagram (DFD)"),

        definition(
            "DFD",
            "A Data Flow Diagram is a graphical representation of the flow of data through an information system, showing processes, data stores, data flows and external entities."
        ),

        heading("DFD Components"),

        table(
            ["Symbol", "Meaning"],
            [
                ["Circle / Rounded Rectangle", "Process that transforms data"],
                ["Arrow", "Data flow direction"],
                ["Open Rectangle", "Data store"],
                ["Rectangle / Square", "External entity"],
            ]
        ),

        heading("DFD Levels"),

        list([
            "Level 0 (Context Diagram) - Shows whole system as single process with external entities.",
            "Level 1 - Breaks the main process into sub-processes.",
            "Level 2 - Further decomposition of Level 1 processes.",
            "Deeper levels add more detail as required.",
        ]),

        heading("Data Dictionary"),

        definition(
            "Data Dictionary",
            "A Data Dictionary is a centralised repository that contains information about data elements used in the system such as name, description, type and source."
        ),

        heading("Object-Oriented Design (OOD)"),

        definition(
            "Object-Oriented Design",
            "Object-Oriented Design is a design approach where a system is modelled as a collection of interacting objects that have data and behaviour."
        ),

        heading("Basic OO Concepts"),

        table(
            ["Concept", "Description"],
            [
                ["Class", "Blueprint or template for objects"],
                ["Object", "Instance of a class"],
                ["Encapsulation", "Binding data and methods together"],
                ["Inheritance", "One class acquires properties of another"],
                ["Polymorphism", "One interface, multiple forms"],
                ["Abstraction", "Hiding implementation details"],
            ]
        ),

        heading("UML (Unified Modeling Language)"),

        definition(
            "UML",
            "UML is a standardised visual modelling language used to specify, visualise, construct and document software systems."
        ),

        heading("Types of UML Diagrams"),

        list([
            "Structural Diagrams - Class, Object, Component, Deployment.",
            "Behavioural Diagrams - Use Case, Sequence, Activity, State.",
        ]),

        heading("Common UML Diagrams"),

        table(
            ["Diagram", "Purpose"],
            [
                ["Use Case", "Shows system functionality from user's view"],
                ["Class Diagram", "Shows classes and their relationships"],
                ["Sequence Diagram", "Shows object interactions over time"],
                ["Activity Diagram", "Shows workflow of activities"],
                ["State Diagram", "Shows states of an object"],
                ["Component Diagram", "Shows physical components"],
            ]
        ),

        heading("Structured vs Object-Oriented Design"),

        table(
            ["Basis", "Structured Design", "OO Design"],
            [
                ["Approach", "Function-oriented", "Object-oriented"],
                ["Focus", "Functions and data flow", "Objects and interactions"],
                ["Data and Function", "Separate", "Combined in objects"],
                ["Reusability", "Limited", "High"],
                ["Maintainability", "Difficult for large systems", "Easier"],
                ["Modelling Tool", "DFD", "UML"],
                ["Example", "C programs", "Java, C++ programs"],
            ]
        ),

        note(
            "OOD is more suitable for large complex systems. Structured design is easier to understand but less flexible for changes.",
            "info",
            "Design Choice"
        ),

        keyPoints([
            "Structured design uses DFD to show data flow.",
            "OOD models system as interacting objects.",
            "UML is the standard modelling language for OOD.",
            "Use Case diagrams show system from user's perspective.",
            "OOD provides better reusability and maintainability.",
        ]),
    ],

    {
        summary:
            "Learn structured design using DFD and object-oriented design using UML diagrams.",
        minutes: 13,
        tags: ["dfd", "uml", "oo-design", "structured-design", "important"],

        mcqs: [
            mcq(
                "DFD stands for:",
                ["Data Flow Diagram", "Data File Directory", "Design Flow Document", "Direct Flow Design"],
                0,
                "DFD is Data Flow Diagram."
            ),
            mcq(
                "Which diagram shows system from user's perspective?",
                ["Class", "Use Case", "Sequence", "Activity"],
                1,
                "Use Case diagram shows system functionality from user's view."
            ),
            mcq(
                "UML is used for:",
                ["Coding", "Modelling", "Debugging", "Testing"],
                1,
                "UML is a modelling language."
            ),
            mcq(
                "Level 0 DFD is also called:",
                ["Detailed diagram", "Context diagram", "Class diagram", "State diagram"],
                1,
                "Level 0 DFD is the Context Diagram."
            ),
        ],

        questions: [
            qa(
                "What is DFD? Explain its components and levels.",
                "A Data Flow Diagram or DFD is a graphical representation of the flow of data through an information system. It shows how data moves from input to output through processes and storage. DFD has four main components. Process is represented by a circle or rounded rectangle and transforms input data into output. Data Flow is shown by arrows indicating direction of data movement. Data Store is represented by an open rectangle and holds data at rest. External Entity is shown as a rectangle or square and represents a source or destination outside the system. DFDs have multiple levels. Level 0 or Context Diagram shows the entire system as a single process interacting with external entities. Level 1 decomposes the main process into sub-processes. Deeper levels add more detail as needed. DFDs help in understanding and communicating system design.",
                4
            ),
            qa(
                "Differentiate between Structured Design and Object-Oriented Design.",
                "Structured Design and Object-Oriented Design are two different approaches to software design. Structured Design is function-oriented and focuses on breaking the system into functions with data flow between them. Data and functions are kept separate. It uses tools like DFDs and works well for procedural languages like C. It offers limited reusability and can be difficult to maintain for large systems. Object-Oriented Design models the system as a collection of interacting objects where data and behaviour are combined into objects. It uses UML diagrams for modelling and supports concepts like inheritance, polymorphism and encapsulation. OOD provides high reusability, better maintainability and is suitable for large, complex systems. It is used with languages like Java, C++ and Python. OOD is generally preferred for modern software development.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — Software Testing
========================================================= */

const softwareTesting = createTopic(
    "software-testing",
    "Software Testing",

    [
        definition(
            "Software Testing",
            "Software Testing is the process of evaluating a software application to detect defects and ensure that it meets specified requirements and works correctly."
        ),

        heading("Objectives of Testing"),

        list([
            "Find defects and errors in software.",
            "Verify software meets requirements.",
            "Ensure software is reliable and secure.",
            "Improve software quality.",
            "Prevent defects from reaching users.",
            "Build confidence in the product.",
        ]),

        heading("Verification vs Validation"),

        table(
            ["Verification", "Validation"],
            [
                ["Are we building the product right?", "Are we building the right product?"],
                ["Checks documents, design, code", "Checks the actual product"],
                ["Static process", "Dynamic process"],
                ["Reviews, walkthroughs, inspections", "Actual testing execution"],
                ["Done by QA team", "Done by testing team"],
            ]
        ),

        heading("Types of Testing"),

        heading("1. Black Box Testing"),

        text(
            "Testing without knowing internal code structure. Tester focuses on inputs and expected outputs."
        ),

        list([
            "Also called functional testing.",
            "Based on requirements.",
            "Tester doesn't need coding knowledge.",
            "Example: Testing login by entering username and password.",
        ]),

        heading("2. White Box Testing"),

        text(
            "Testing with full knowledge of internal code structure and logic."
        ),

        list([
            "Also called structural or glass box testing.",
            "Based on code and control flow.",
            "Requires programming knowledge.",
            "Example: Statement coverage, path coverage.",
        ]),

        heading("3. Grey Box Testing"),

        text(
            "Combination of black box and white box testing with partial knowledge of internals."
        ),

        heading("Testing Levels"),

        table(
            ["Level", "What is tested", "Done by"],
            [
                ["Unit Testing", "Individual modules or functions", "Developer"],
                ["Integration Testing", "Combined modules working together", "Developer/Tester"],
                ["System Testing", "Complete integrated system", "Tester"],
                ["Acceptance Testing", "System meets user needs", "User/Client"],
            ]
        ),

        heading("Unit Testing"),

        text(
            "Tests smallest testable parts of software independently. Usually automated using frameworks like JUnit or PyTest."
        ),

        heading("Integration Testing"),

        list([
            "Big Bang - All modules tested together at once.",
            "Top-Down - Higher modules tested first with stubs.",
            "Bottom-Up - Lower modules tested first with drivers.",
            "Sandwich - Combination of top-down and bottom-up.",
        ]),

        heading("System Testing Types"),

        list([
            "Functional Testing - Tests functions of system.",
            "Performance Testing - Tests speed and response time.",
            "Load Testing - Tests under expected load.",
            "Stress Testing - Tests beyond normal capacity.",
            "Security Testing - Tests for vulnerabilities.",
            "Usability Testing - Tests user friendliness.",
            "Compatibility Testing - Tests across platforms.",
        ]),

        heading("Acceptance Testing"),

        list([
            "Alpha Testing - Done by internal team at developer's site.",
            "Beta Testing - Done by end users at their site.",
        ]),

        heading("Regression Testing"),

        definition(
            "Regression Testing",
            "Regression Testing is re-testing the software after changes to ensure that new changes have not broken existing functionality."
        ),

        heading("Test Case Design"),

        list([
            "Test ID - Unique identifier.",
            "Test Description - What is being tested.",
            "Preconditions - Setup needed.",
            "Test Steps - Steps to execute.",
            "Expected Result - What should happen.",
            "Actual Result - What actually happened.",
            "Status - Pass or Fail.",
        ]),

        note(
            "Testing can only prove the presence of bugs, not their absence. Exhaustive testing is impossible in most real systems.",
            "warning",
            "Testing Reality"
        ),

        keyPoints([
            "Testing finds defects and ensures quality.",
            "Verification is static; validation is dynamic.",
            "Black box tests functionality; white box tests code.",
            "Testing levels: unit, integration, system, acceptance.",
            "Regression testing checks that changes haven't broken existing features.",
        ]),
    ],

    {
        summary:
            "Learn software testing, types, levels, verification vs validation and test case design.",
        minutes: 14,
        tags: ["testing", "black-box", "white-box", "unit-testing", "important"],

        mcqs: [
            mcq(
                "Black box testing focuses on:",
                ["Internal code", "Inputs and outputs", "Database", "Hardware"],
                1,
                "Black box testing focuses on inputs and expected outputs."
            ),
            mcq(
                "Verification is:",
                ["Dynamic", "Static", "Automated", "Manual only"],
                1,
                "Verification is a static process."
            ),
            mcq(
                "Which testing is done by end users?",
                ["Alpha", "Beta", "Unit", "Integration"],
                1,
                "Beta testing is done by end users."
            ),
            mcq(
                "Testing individual modules is:",
                ["Integration testing", "System testing", "Unit testing", "Acceptance testing"],
                2,
                "Unit testing tests individual modules."
            ),
        ],

        questions: [
            qa(
                "Differentiate between Black Box and White Box Testing.",
                "Black Box Testing and White Box Testing are two major approaches to software testing. Black Box Testing is done without knowing the internal code structure of the software. The tester focuses only on inputs and expected outputs based on requirements. It is also called functional testing and does not require programming knowledge. Examples include testing login functionality by entering username and password combinations. White Box Testing is done with full knowledge of internal code structure and logic. The tester examines code paths, conditions and loops. It is also called structural or glass box testing and requires programming knowledge. Examples include statement coverage, branch coverage and path coverage testing. Both approaches complement each other. Black box catches functional issues while white box catches code-level defects. Combining both provides comprehensive test coverage.",
                4
            ),
            qa(
                "Explain the different levels of software testing.",
                "Software testing is performed at four main levels. Unit Testing tests individual modules, functions or classes independently to ensure they work correctly. It is usually done by developers using frameworks like JUnit or PyTest. Integration Testing tests combined modules to verify they work together correctly. Approaches include Big Bang where all modules are integrated at once, Top-Down using stubs for lower modules, Bottom-Up using drivers for higher modules and Sandwich which combines both. System Testing tests the complete integrated system as a whole to verify it meets specified requirements. It includes functional, performance, security and usability testing. Acceptance Testing is done by users or clients to verify the system meets business needs. Alpha testing is done internally while Beta testing is done by real end users. Each level catches different types of defects, ensuring comprehensive quality.",
                4
            ),
            qa(
                "What is Regression Testing? Why is it important?",
                "Regression Testing is the process of re-testing the software after modifications to ensure that recent changes have not introduced new defects or broken existing functionality. It is performed whenever code is changed due to bug fixes, new features, enhancements or configuration changes. Regression testing is important because software changes can have unexpected side effects on other parts of the system that were working correctly. Without regression testing, seemingly small changes can introduce major bugs. It ensures software stability across updates, maintains quality throughout the development lifecycle and builds confidence in releasing new versions. Regression testing is often automated using tools like Selenium, JUnit or TestNG because manually retesting everything after each change is time-consuming. Regular regression testing is essential in Agile and continuous delivery environments where changes happen frequently.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — Software Quality Assurance
========================================================= */

const qualityAssurance = createTopic(
    "software-quality-assurance",
    "Software Quality Assurance",

    [
        definition(
            "Software Quality",
            "Software Quality is the degree to which software meets specified requirements, satisfies user needs and follows industry standards."
        ),

        definition(
            "Software Quality Assurance (SQA)",
            "SQA is a set of planned and systematic activities to ensure that the software development process produces high quality software that meets requirements."
        ),

        heading("Quality Attributes (McCall's Model)"),

        table(
            ["Category", "Attributes"],
            [
                ["Product Operation", "Correctness, Reliability, Efficiency, Integrity, Usability"],
                ["Product Revision", "Maintainability, Flexibility, Testability"],
                ["Product Transition", "Portability, Reusability, Interoperability"],
            ]
        ),

        heading("Key Quality Attributes"),

        list([
            "Correctness - Does what it is supposed to do.",
            "Reliability - Works correctly over time.",
            "Efficiency - Uses resources optimally.",
            "Usability - Easy to learn and use.",
            "Maintainability - Easy to modify.",
            "Portability - Can run on different platforms.",
            "Reusability - Can be reused in other systems.",
            "Testability - Easy to test.",
        ]),

        heading("SQA Activities"),

        list([
            "Setting quality standards and procedures.",
            "Conducting reviews and audits.",
            "Managing configuration.",
            "Managing defects.",
            "Training team members.",
            "Reporting quality metrics.",
        ]),

        heading("Software Reviews"),

        definition(
            "Software Review",
            "A software review is a process where team members examine software artifacts to find defects and suggest improvements."
        ),

        table(
            ["Type", "Description"],
            [
                ["Walkthrough", "Informal, author leads discussion"],
                ["Inspection", "Formal, follows strict process"],
                ["Peer Review", "Colleagues review each other's work"],
                ["Technical Review", "Technical experts review design/code"],
            ]
        ),

        heading("Quality Standards"),

        table(
            ["Standard", "Purpose"],
            [
                ["ISO 9001", "Quality management systems"],
                ["ISO 9126", "Software product quality"],
                ["CMM / CMMI", "Process maturity levels"],
                ["Six Sigma", "Reduce defects using statistics"],
                ["IEEE Standards", "Software engineering practices"],
            ]
        ),

        heading("CMM (Capability Maturity Model)"),

        definition(
            "CMM",
            "Capability Maturity Model is a framework that describes five levels of process maturity for software organizations."
        ),

        table(
            ["Level", "Name", "Description"],
            [
                ["1", "Initial", "Ad-hoc, chaotic processes"],
                ["2", "Repeatable", "Basic project management"],
                ["3", "Defined", "Standard processes documented"],
                ["4", "Managed", "Measured and controlled processes"],
                ["5", "Optimizing", "Continuous process improvement"],
            ]
        ),

        heading("Quality Metrics"),

        list([
            "Defect Density - Defects per KLOC (thousand lines of code).",
            "Defect Removal Efficiency - Percentage of defects found before release.",
            "Mean Time Between Failures (MTBF) - Reliability measure.",
            "Customer Satisfaction Index - User feedback based.",
            "Test Coverage - Percentage of code tested.",
            "Cyclomatic Complexity - Complexity of code.",
        ]),

        note(
            "SQA is different from Testing. Testing finds defects; SQA prevents them by improving processes.",
            "info",
            "Important Distinction"
        ),

        keyPoints([
            "Software quality is measured by how well it meets requirements and user needs.",
            "SQA is process-focused; Quality Control is product-focused.",
            "Reviews and inspections help find defects early.",
            "ISO 9001 and CMM are widely used quality standards.",
            "CMM has 5 maturity levels from Initial to Optimizing.",
        ]),
    ],

    {
        summary:
            "Learn software quality, quality attributes, SQA activities, reviews, standards and CMM.",
        minutes: 13,
        tags: ["quality", "sqa", "cmm", "iso", "important"],

        mcqs: [
            mcq(
                "CMM has how many levels?",
                ["3", "4", "5", "6"],
                2,
                "CMM has 5 maturity levels."
            ),
            mcq(
                "Which is CMM Level 5?",
                ["Initial", "Defined", "Managed", "Optimizing"],
                3,
                "Level 5 is Optimizing."
            ),
            mcq(
                "ISO 9001 is for:",
                ["Product quality", "Quality management systems", "Testing", "Coding"],
                1,
                "ISO 9001 is for quality management systems."
            ),
            mcq(
                "Which is a quality attribute?",
                ["Reliability", "Coupling", "DFD", "SRS"],
                0,
                "Reliability is a software quality attribute."
            ),
        ],

        questions: [
            qa(
                "What is Software Quality Assurance? Explain its activities.",
                "Software Quality Assurance or SQA is a set of planned and systematic activities designed to ensure that the software development process produces high-quality software that meets requirements and user expectations. Unlike testing which finds defects in the product, SQA focuses on preventing defects by improving the development process. Key SQA activities include setting quality standards and procedures for the organization, conducting reviews and audits of processes and deliverables, managing configuration to track changes properly, managing defects through their lifecycle from discovery to closure, training team members on quality practices and tools, and reporting quality metrics to management. SQA is a continuous activity performed throughout the software development lifecycle. It requires management commitment, defined processes and a culture that values quality at every stage.",
                4
            ),
            qa(
                "Explain the CMM (Capability Maturity Model) with its levels.",
                "The Capability Maturity Model or CMM is a framework developed by the Software Engineering Institute that describes five levels of process maturity for software organizations. It helps organizations assess and improve their software development processes. Level 1 is Initial, where processes are ad-hoc, chaotic and dependent on individual efforts, with unpredictable results. Level 2 is Repeatable, where basic project management processes are established to track cost, schedule and functionality, and successful practices can be repeated on similar projects. Level 3 is Defined, where processes are documented, standardized and integrated across the organization. Level 4 is Managed, where detailed measurements of process and product quality are collected, and processes are quantitatively controlled. Level 5 is Optimizing, where continuous process improvement is enabled through quantitative feedback and innovative ideas. Higher CMM levels indicate more mature, predictable and efficient organizations that consistently produce quality software.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 5 — Software Maintenance and Reengineering
========================================================= */

const maintenanceReengineering = createTopic(
    "software-maintenance-and-reengineering",
    "Software Maintenance and Reengineering",

    [
        definition(
            "Software Maintenance",
            "Software Maintenance is the process of modifying a software system after delivery to correct faults, improve performance, adapt to changes or add new features."
        ),

        heading("Types of Software Maintenance"),

        table(
            ["Type", "Description", "Percentage"],
            [
                ["Corrective", "Fix defects and bugs", "About 20%"],
                ["Adaptive", "Adapt to changing environment", "About 25%"],
                ["Perfective", "Improve performance or add features", "About 50%"],
                ["Preventive", "Prevent future problems", "About 5%"],
            ]
        ),

        heading("1. Corrective Maintenance"),

        text(
            "Fixing errors, defects and bugs discovered after software is released. These may be reported by users or found by developers."
        ),

        heading("2. Adaptive Maintenance"),

        text(
            "Modifying software to work in new or changed environments such as new operating systems, hardware or third-party software updates."
        ),

        heading("3. Perfective Maintenance"),

        text(
            "Enhancing functionality, improving performance, adding new features or improving user interface based on user requests."
        ),

        heading("4. Preventive Maintenance"),

        text(
            "Making changes to prevent future problems. Includes code restructuring, updating documentation and improving maintainability."
        ),

        heading("Maintenance Process"),

        steps([
            "Identify maintenance need.",
            "Analyse impact of change.",
            "Design the change.",
            "Implement the change.",
            "Test the modified system.",
            "Deploy the updated version.",
            "Update documentation.",
        ]),

        heading("Challenges in Maintenance"),

        list([
            "Poor documentation of original software.",
            "Original developers may no longer be available.",
            "Outdated technology and tools.",
            "Complex and undocumented code.",
            "Side effects of changes on other modules.",
            "High cost of maintaining legacy systems.",
            "Difficulty in testing after changes.",
        ]),

        heading("Software Reengineering"),

        definition(
            "Software Reengineering",
            "Software Reengineering is the process of examining and modifying existing software to reconstitute it in a new form with improved quality."
        ),

        heading("Reengineering Activities"),

        steps([
            "Inventory Analysis - Identify software to be reengineered.",
            "Document Restructuring - Update documentation.",
            "Reverse Engineering - Understand existing system.",
            "Code Restructuring - Improve code quality.",
            "Data Restructuring - Improve data structures.",
            "Forward Engineering - Rebuild the system.",
        ]),

        heading("Reverse Engineering"),

        definition(
            "Reverse Engineering",
            "Reverse Engineering is the process of analysing existing software to extract design and specification information, moving from code to a higher level of abstraction."
        ),

        list([
            "Understand legacy code with no documentation.",
            "Recover lost design information.",
            "Aid in software modernization.",
            "Used before reengineering.",
            "Can identify security vulnerabilities.",
        ]),

        heading("Forward Engineering"),

        text(
            "Forward Engineering is the traditional process of moving from high-level abstractions and design to physical implementation of the system."
        ),

        heading("Reengineering vs Reverse Engineering"),

        table(
            ["Reengineering", "Reverse Engineering"],
            [
                ["Rebuilds the software", "Analyses existing software"],
                ["Includes reverse and forward engineering", "Only extracts information"],
                ["Produces improved software", "Produces design documents"],
                ["Modifies code", "Doesn't modify code"],
            ]
        ),

        heading("Legacy Systems"),

        definition(
            "Legacy System",
            "A legacy system is an old software system that continues to be used because it still performs its intended functions, even though newer technology exists."
        ),

        list([
            "Often critical to business operations.",
            "Difficult and expensive to replace.",
            "Poor documentation.",
            "Uses outdated technology.",
            "High maintenance cost.",
            "Options: continue maintaining, reengineer or replace.",
        ]),

        note(
            "Maintenance typically consumes 60-80% of total software cost over its lifetime. Investing in maintainability during development pays off later.",
            "warning",
            "Cost Reality"
        ),

        keyPoints([
            "Maintenance has four types: corrective, adaptive, perfective and preventive.",
            "Perfective maintenance is the largest portion.",
            "Reengineering improves existing software quality.",
            "Reverse engineering extracts design from code.",
            "Legacy systems are old but still critical.",
        ]),
    ],

    {
        summary:
            "Study software maintenance types, reengineering, reverse engineering and legacy systems.",
        minutes: 13,
        tags: ["maintenance", "reengineering", "legacy", "important"],

        mcqs: [
            mcq(
                "Fixing bugs after release is:",
                ["Perfective", "Corrective", "Adaptive", "Preventive"],
                1,
                "Corrective maintenance fixes bugs and defects."
            ),
            mcq(
                "Adding new features is:",
                ["Corrective", "Adaptive", "Perfective", "Preventive"],
                2,
                "Perfective maintenance adds features and improvements."
            ),
            mcq(
                "Which maintenance type is largest?",
                ["Corrective", "Adaptive", "Perfective", "Preventive"],
                2,
                "Perfective maintenance is about 50% of total maintenance."
            ),
            mcq(
                "Reverse engineering means:",
                ["Building from design", "Extracting design from code", "Testing", "Coding"],
                1,
                "Reverse engineering extracts design from existing code."
            ),
        ],

        questions: [
            qa(
                "Explain the different types of software maintenance.",
                "Software maintenance is classified into four types based on the reason for modification. Corrective Maintenance involves fixing defects and bugs discovered after software release. These may be reported by users or found internally and account for about 20% of maintenance effort. Adaptive Maintenance modifies software to work in new or changed environments such as new operating systems, hardware upgrades or third-party software changes, accounting for about 25% of effort. Perfective Maintenance enhances software by improving performance, adding new features or improving user interface based on user requests. It is the largest category at about 50% of maintenance work. Preventive Maintenance makes changes to prevent future problems including code restructuring, updating documentation and improving maintainability. It accounts for only about 5% of effort but is important for long-term software health. Understanding these types helps in planning and budgeting maintenance activities.",
                4
            ),
            qa(
                "What is Software Reengineering? Explain its activities.",
                "Software Reengineering is the process of examining and modifying existing software to reconstitute it in a new form with improved quality, better structure and enhanced functionality. It is used when legacy systems need modernization but complete replacement is too risky or expensive. Reengineering activities follow a systematic process. Inventory Analysis identifies which software systems need reengineering based on business value and technical quality. Document Restructuring updates or creates missing documentation for the existing system. Reverse Engineering analyses the existing code to extract design and specification information, moving from code back to higher abstraction. Code Restructuring transforms the code to improve quality, readability and structure without changing functionality. Data Restructuring improves data structures and database schemas. Finally, Forward Engineering rebuilds the system using modern techniques, tools and technologies. Reengineering extends the life of critical legacy systems while improving their quality.",
                4
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit2Topics = [
    softwareDesign,
    structuredOODesign,
    softwareTesting,
    qualityAssurance,
    maintenanceReengineering,
];