/* =========================================================
   MSc-IT • SEM 2 • Software Engineering
   UNIT 2 — Software Design, Coding and Testing
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
   TOPIC 1 — Software Design Fundamentals
========================================================= */

const softwareDesignFundamentals = createTopic(
    "software-design-fundamentals",
    "Software Design Fundamentals",

    [
        definition(
            "Software Design",
            "Software design is the process of transforming software requirements into a blueprint that describes the system structure, components, interfaces, data and behaviour before coding begins."
        ),

        text(
            "Design acts as a bridge between requirements and implementation. A good design makes software easier to understand, develop, test, maintain and extend. Poor design usually causes high maintenance cost, defects and difficulty in adding new features."
        ),

        heading("Objectives of Software Design"),

        list([
            "Convert requirements into an implementable solution.",
            "Divide the system into modules or components.",
            "Define data structures, interfaces and algorithms.",
            "Reduce complexity through abstraction and modularity.",
            "Improve maintainability, reliability and reusability.",
            "Provide a clear guide for coding and testing.",
            "Identify design risks before implementation.",
        ]),

        heading("Important Design Concepts"),

        table(
            ["Concept", "Meaning", "Example"],
            [
                ["Abstraction", "Showing essential details and hiding unnecessary complexity", "Login service hides password hashing details"],
                ["Modularity", "Dividing system into independent modules", "User module, payment module, report module"],
                ["Information hiding", "Internal details of a module are hidden from others", "Only expose public methods/API"],
                ["Stepwise refinement", "Developing design from high-level to detailed level", "Break 'process order' into validation, payment, invoice"],
                ["Reusability", "Designing components for repeated use", "Common email notification service"],
                ["Maintainability", "Ease of changing and fixing software", "Clear module boundaries"],
            ]
        ),

        heading("Modularity"),

        definition(
            "Modularity",
            "Modularity is the design principle of dividing a software system into smaller, manageable and independent modules."
        ),

        text(
            "A modular system is easier to develop because different team members can work on different modules. It is also easier to test and maintain because changes in one module should have minimum effect on others."
        ),

        heading("Cohesion and Coupling"),

        definition(
            "Cohesion",
            "Cohesion is the degree to which elements inside a module belong together and work toward a single purpose."
        ),

        definition(
            "Coupling",
            "Coupling is the degree of dependency between modules."
        ),

        table(
            ["Design Quality", "Meaning", "Preferred"],
            [
                ["High cohesion", "A module performs one well-defined task", "Good"],
                ["Low cohesion", "A module performs many unrelated tasks", "Bad"],
                ["Low coupling", "Modules are mostly independent", "Good"],
                ["High coupling", "Modules depend heavily on each other", "Bad"],
            ]
        ),

        heading("Example: Cohesion and Coupling"),

        code(
            `Good design idea:

AuthModule
  - login()
  - logout()
  - resetPassword()

ReportModule
  - generateSalesReport()
  - exportPdf()

PaymentModule
  - processPayment()
  - refundPayment()

Each module has a clear responsibility.
Modules communicate through defined interfaces.`,
            "text",
            "High cohesion and low coupling example"
        ),

        heading("Design Quality Attributes"),

        table(
            ["Attribute", "Meaning"],
            [
                ["Correctness", "Design satisfies requirements"],
                ["Completeness", "All required functions are covered"],
                ["Simplicity", "Design is easy to understand"],
                ["Efficiency", "Design uses resources properly"],
                ["Flexibility", "Design supports future changes"],
                ["Testability", "Components can be tested easily"],
                ["Reusability", "Parts can be reused in other systems"],
            ]
        ),

        note(
            "A good software design aims for high cohesion and low coupling. This is one of the most common exam points in software design.",
            "warning",
            "Exam Tip"
        ),

        keyPoints([
            "Software design converts requirements into a blueprint for implementation.",
            "Good design improves maintainability, reliability, testability and reusability.",
            "Abstraction hides unnecessary details.",
            "Modularity divides the system into manageable parts.",
            "High cohesion and low coupling are desirable design qualities.",
            "Design reduces complexity before coding starts.",
        ]),
    ],

    {
        summary:
            "Understand software design, objectives, abstraction, modularity, cohesion, coupling and design quality attributes.",
        minutes: 13,
        tags: ["software-engineering", "software-design", "cohesion", "coupling", "important"],

        mcqs: [
            mcq(
                "Software design converts requirements into:",
                ["A blueprint for implementation", "Only final invoice", "Only hardware diagram", "Only test result"],
                0,
                "Design converts requirements into architecture, modules, interfaces and data design."
            ),
            mcq(
                "Modularity means:",
                ["Dividing software into smaller modules", "Writing all code in one function", "Removing all documentation", "Avoiding testing"],
                0,
                "Modularity breaks a system into manageable parts."
            ),
            mcq(
                "Good design prefers:",
                ["High cohesion and low coupling", "Low cohesion and high coupling", "No modules", "Only global variables"],
                0,
                "High cohesion and low coupling improve maintainability."
            ),
            mcq(
                "Cohesion refers to:",
                ["How closely related responsibilities inside a module are", "Dependency between two different modules", "Database size", "Compiler speed"],
                0,
                "Cohesion measures internal relatedness of module tasks."
            ),
            mcq(
                "Coupling refers to:",
                ["Dependency between modules", "Length of a password", "Number of monitors", "Only UI colour"],
                0,
                "Coupling measures interdependence among modules."
            ),
            mcq(
                "Abstraction means:",
                ["Hiding unnecessary details and showing essentials", "Deleting source code", "Making code unreadable", "Skipping design"],
                0,
                "Abstraction reduces complexity by focusing on essential details."
            ),
        ],

        questions: [
            qa(
                "Define software design and explain its objectives.",
                "Software design is the process of transforming software requirements into a blueprint for implementation. It describes system structure, modules, interfaces, data, algorithms and behaviour. Its objectives are to convert requirements into an implementable solution, divide the system into manageable modules, define data and interfaces, reduce complexity, improve maintainability and reusability, and guide coding and testing. A good design helps developers understand what to build before writing code. It also reduces defects and makes future changes easier.",
                5
            ),
            qa(
                "Explain abstraction, modularity and information hiding.",
                "Abstraction means focusing on essential features while hiding unnecessary details. For example, a login module may expose login() but hide password hashing and session handling. Modularity means dividing software into smaller independent modules, such as user, payment and report modules. It improves development, testing and maintenance. Information hiding means a module hides its internal data and implementation details and exposes only necessary interfaces. Together, these principles reduce complexity, improve maintainability and allow teams to work on different parts of software with fewer side effects.",
                5
            ),
            qa(
                "Differentiate between cohesion and coupling.",
                "Cohesion is the degree to which elements inside a module are related to each other. High cohesion means a module performs one clear responsibility, which is desirable. Low cohesion means a module performs unrelated tasks, making it hard to understand and maintain. Coupling is the degree of dependency between modules. Low coupling means modules are mostly independent and communicate through well-defined interfaces, which is desirable. High coupling means changes in one module may affect many others. Good software design aims for high cohesion and low coupling.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — Architectural and Detailed Design
========================================================= */

const architecturalAndDetailedDesign = createTopic(
    "architectural-and-detailed-design",
    "Architectural and Detailed Design",

    [
        definition(
            "Architectural Design",
            "Architectural design defines the high-level structure of a software system, including major components, their responsibilities and how they interact."
        ),

        definition(
            "Detailed Design",
            "Detailed design describes the internal logic of each module, including algorithms, data structures, interfaces, classes and method-level behaviour."
        ),

        text(
            "Architectural design answers 'What are the major parts of the system?' Detailed design answers 'How will each part work internally?' Both are important before implementation."
        ),

        heading("Architectural Design vs Detailed Design"),

        table(
            ["Aspect", "Architectural Design", "Detailed Design"],
            [
                ["Level", "High-level", "Low-level"],
                ["Focus", "System structure and components", "Internal module logic"],
                ["Output", "Architecture diagram, component design", "Algorithms, class design, pseudocode"],
                ["Question", "What are the major parts?", "How exactly will each part work?"],
                ["Used by", "Architects, senior developers, stakeholders", "Developers and testers"],
            ]
        ),

        heading("Common Architectural Styles"),

        table(
            ["Style", "Description", "Example"],
            [
                ["Layered architecture", "System divided into layers", "Presentation, business, data access"],
                ["Client-server", "Clients request services from server", "Web browser and web server"],
                ["MVC", "Separates model, view and controller", "Web applications"],
                ["Microservices", "Small independent services communicate over APIs", "E-commerce services"],
                ["Pipe and filter", "Data passes through processing stages", "Compiler pipeline"],
                ["Repository architecture", "Shared data store used by components", "IDE or database-centered system"],
            ]
        ),

        heading("Layered Architecture"),

        code(
            `Typical 3-layer architecture:

Presentation Layer
  ↓
Business Logic Layer
  ↓
Data Access Layer
  ↓
Database

Example:
UI → StudentService → StudentRepository → Database`,
            "text",
            "Layered architecture"
        ),

        heading("MVC Architecture"),

        definition(
            "MVC",
            "MVC, or Model-View-Controller, is an architectural pattern that separates data/model, user interface/view and request handling/controller."
        ),

        table(
            ["Part", "Responsibility"],
            [
                ["Model", "Data and business rules"],
                ["View", "User interface or presentation"],
                ["Controller", "Handles input/request and coordinates model/view"],
            ]
        ),

        heading("Data Design"),

        definition(
            "Data Design",
            "Data design defines how data is organised, stored, accessed and related within the software system."
        ),

        list([
            "Database tables or collections.",
            "Entities and relationships.",
            "Data types and constraints.",
            "Indexes and keys.",
            "File formats and storage structures.",
            "Data validation rules.",
        ]),

        heading("Interface Design"),

        definition(
            "Interface Design",
            "Interface design defines how users, modules, systems or devices interact with each other."
        ),

        table(
            ["Interface Type", "Example"],
            [
                ["User interface", "Forms, buttons, menus, screens"],
                ["Module interface", "Functions, method signatures, APIs"],
                ["External system interface", "Payment gateway API, email service"],
                ["Hardware interface", "Printer, sensor, scanner"],
            ]
        ),

        heading("UML Overview"),

        definition(
            "UML",
            "Unified Modeling Language, or UML, is a standard visual modelling language used to describe software structure and behaviour."
        ),

        table(
            ["UML Diagram", "Purpose"],
            [
                ["Use Case Diagram", "Shows users/actors and system functions"],
                ["Class Diagram", "Shows classes, attributes, methods and relationships"],
                ["Sequence Diagram", "Shows object interactions over time"],
                ["Activity Diagram", "Shows workflow or process flow"],
                ["State Diagram", "Shows states and transitions of an object"],
            ]
        ),

        heading("Pseudocode and Flowcharts"),

        table(
            ["Representation", "Use"],
            [
                ["Pseudocode", "Text-like description of algorithm logic"],
                ["Flowchart", "Graphical representation of process steps"],
                ["Decision table", "Represents rules and conditions"],
                ["Decision tree", "Represents decisions in tree form"],
            ]
        ),

        code(
            `Pseudocode example:

START
  INPUT marks
  IF marks >= 40 THEN
      PRINT "Pass"
  ELSE
      PRINT "Fail"
  ENDIF
END`,
            "text",
            "Simple pseudocode"
        ),

        note(
            "Architectural decisions are costly to change later. Important quality attributes such as performance, scalability, security and maintainability should be considered during architecture design.",
            "warning",
            "Design Decision"
        ),

        keyPoints([
            "Architectural design defines the high-level system structure.",
            "Detailed design defines module-level algorithms, classes and interfaces.",
            "Common styles include layered, client-server, MVC and microservices.",
            "Data design defines storage and relationships.",
            "Interface design defines interaction between users, modules and systems.",
            "UML diagrams help visualise software structure and behaviour.",
        ]),
    ],

    {
        summary:
            "Learn architectural design, detailed design, architectural styles, MVC, data design, interface design, UML and pseudocode.",
        minutes: 14,
        tags: ["software-engineering", "architecture", "detailed-design", "uml", "mvc"],

        mcqs: [
            mcq(
                "Architectural design focuses on:",
                ["High-level structure of the system", "Only variable names", "Only compiler errors", "Only typing speed"],
                0,
                "Architecture defines major components and interactions."
            ),
            mcq(
                "Detailed design focuses on:",
                ["Internal logic of modules", "Only project budget", "Only hardware purchase", "Only user complaints"],
                0,
                "Detailed design defines algorithms, data structures and module internals."
            ),
            mcq(
                "MVC stands for:",
                ["Model View Controller", "Main Variable Code", "Module Version Compiler", "Managed Visual Class"],
                0,
                "MVC separates model, view and controller responsibilities."
            ),
            mcq(
                "In MVC, the Model represents:",
                ["Data and business rules", "Only screen colour", "Only keyboard input", "Only network cable"],
                0,
                "The model manages data and business logic."
            ),
            mcq(
                "UML is used for:",
                ["Visual modelling of software", "Only printing code", "Only deleting files", "Only changing fonts"],
                0,
                "UML diagrams model structure and behaviour."
            ),
            mcq(
                "A class diagram shows:",
                ["Classes, attributes, methods and relationships", "Only task schedule", "Only screen size", "Only risk list"],
                0,
                "Class diagrams represent static structure of object-oriented systems."
            ),
        ],

        questions: [
            qa(
                "Differentiate between architectural design and detailed design.",
                "Architectural design is high-level design that defines the major components of a system, their responsibilities and interactions. It decides the overall structure, such as layered architecture, client-server, MVC or microservices. Detailed design is low-level design that describes how each module works internally. It includes algorithms, data structures, class design, method signatures, input/output details and pseudocode. Architectural design answers what the main parts of the system are, while detailed design answers how each part will be implemented. Both guide coding and testing.",
                5
            ),
            qa(
                "Explain MVC architecture.",
                "MVC stands for Model-View-Controller. It is an architectural pattern that separates an application into three parts. The Model represents data and business rules, such as database objects and validation logic. The View represents the user interface or presentation, such as web pages or screens. The Controller handles user input or requests, calls the model and selects the response or view. MVC improves separation of concerns, maintainability and testability. It is commonly used in web applications because UI logic, business logic and request handling are kept separate.",
                5
            ),
            qa(
                "What is UML? Explain common UML diagrams.",
                "UML, or Unified Modeling Language, is a standard visual language used to model software systems. It helps developers and stakeholders understand system structure and behaviour. A use case diagram shows actors and system functions. A class diagram shows classes, attributes, methods and relationships. A sequence diagram shows interactions between objects over time. An activity diagram shows workflow or business process flow. A state diagram shows different states of an object and transitions between them. UML improves communication, documentation and design clarity.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — Coding Standards and Code Quality
========================================================= */

const codingStandardsAndCodeQuality = createTopic(
    "coding-standards-and-code-quality",
    "Coding Standards and Code Quality",

    [
        definition(
            "Coding Standard",
            "A coding standard is a set of rules and guidelines for writing source code in a consistent, readable, reliable and maintainable way."
        ),

        text(
            "Coding is not only about making a program run. Code should be understandable by other developers, easy to test, easy to debug and easy to modify. Coding standards help teams maintain consistency and reduce defects."
        ),

        heading("Need for Coding Standards"),

        list([
            "Improve code readability.",
            "Maintain consistency across a team.",
            "Reduce defects and misunderstandings.",
            "Make debugging and testing easier.",
            "Improve maintainability.",
            "Support code reviews.",
            "Help new team members understand the project.",
            "Improve long-term software quality.",
        ]),

        heading("Common Coding Guidelines"),

        table(
            ["Guideline", "Example"],
            [
                ["Use meaningful names", "studentMarks instead of sm"],
                ["Follow indentation style", "Consistent spaces/tabs"],
                ["Keep functions small", "One function should perform one task"],
                ["Avoid duplicate code", "Extract reusable functions"],
                ["Use comments wisely", "Explain why, not obvious what"],
                ["Handle errors properly", "Do not ignore exceptions"],
                ["Avoid magic numbers", "Use named constants"],
                ["Follow language conventions", "PEP 8 for Python, Java conventions"],
            ]
        ),

        heading("Readable Code Example"),

        code(
            `// Poor naming
function cal(a, b) {
  return a + b;
}

// Better naming
function calculateTotalMarks(theoryMarks, practicalMarks) {
  return theoryMarks + practicalMarks;
}`,
            "javascript",
            "Meaningful names"
        ),

        heading("Code Quality Attributes"),

        table(
            ["Attribute", "Meaning"],
            [
                ["Readability", "Code is easy to understand"],
                ["Maintainability", "Code is easy to change"],
                ["Reliability", "Code works correctly under expected conditions"],
                ["Efficiency", "Code uses time and memory properly"],
                ["Testability", "Code can be tested easily"],
                ["Reusability", "Code can be reused in other parts"],
                ["Security", "Code avoids vulnerabilities"],
            ]
        ),

        heading("Code Review"),

        definition(
            "Code Review",
            "Code review is the systematic examination of source code by one or more developers to find defects, improve quality and ensure standards are followed."
        ),

        table(
            ["Code Review Checks", "Purpose"],
            [
                ["Correctness", "Does code meet requirements?"],
                ["Readability", "Is code easy to understand?"],
                ["Security", "Are there vulnerabilities?"],
                ["Performance", "Is resource use acceptable?"],
                ["Error handling", "Are failures handled properly?"],
                ["Testing", "Are suitable tests included?"],
                ["Standards", "Does code follow team conventions?"],
            ]
        ),

        heading("Refactoring"),

        definition(
            "Refactoring",
            "Refactoring is the process of improving the internal structure of code without changing its external behaviour."
        ),

        text(
            "Refactoring improves design, readability and maintainability. Examples include renaming variables, extracting functions, removing duplicate code, simplifying conditions and splitting large classes."
        ),

        heading("Technical Debt"),

        definition(
            "Technical Debt",
            "Technical debt is the future cost of choosing a quick or poor solution now instead of a better long-term design."
        ),

        table(
            ["Cause", "Effect"],
            [
                ["Quick fixes", "Harder future maintenance"],
                ["Poor documentation", "New developers struggle"],
                ["Duplicate code", "Same bug must be fixed many times"],
                ["No tests", "Changes become risky"],
                ["Poor architecture", "New features become expensive"],
            ]
        ),

        heading("Defensive Coding Practices"),

        list([
            "Validate all inputs.",
            "Handle exceptions and errors clearly.",
            "Avoid hardcoded secrets.",
            "Use secure libraries and keep dependencies updated.",
            "Check boundary conditions.",
            "Do not trust user input.",
            "Log errors without exposing sensitive data.",
            "Write unit tests for critical logic.",
        ], true),

        note(
            "Comments should not be used to hide confusing code. First write clear code; then add comments where they explain important decisions, assumptions or complex logic.",
            "tip",
            "Clean Code"
        ),

        keyPoints([
            "Coding standards improve consistency, readability and maintainability.",
            "Good code uses meaningful names, proper indentation and small functions.",
            "Code review finds defects and improves quality before release.",
            "Refactoring improves internal code structure without changing behaviour.",
            "Technical debt increases future maintenance cost.",
            "Defensive coding reduces defects and security risks.",
        ]),
    ],

    {
        summary:
            "Learn coding standards, readable code, code quality, code review, refactoring, technical debt and defensive coding.",
        minutes: 13,
        tags: ["software-engineering", "coding-standards", "code-quality", "code-review", "refactoring"],

        mcqs: [
            mcq(
                "Coding standards are used to:",
                ["Write consistent and maintainable code", "Make code intentionally confusing", "Avoid all testing", "Remove requirements"],
                0,
                "Coding standards improve readability, consistency and maintainability."
            ),
            mcq(
                "A good variable name should be:",
                ["Meaningful", "Always one letter", "Random", "Same for all variables"],
                0,
                "Meaningful names improve readability."
            ),
            mcq(
                "Code review means:",
                ["Systematic examination of source code", "Deleting all code", "Only running antivirus", "Only writing user manual"],
                0,
                "Code review checks correctness, readability, security and standards."
            ),
            mcq(
                "Refactoring changes:",
                ["Internal structure without changing external behaviour", "User requirements always", "Hardware design", "Final output intentionally"],
                0,
                "Refactoring improves code design while preserving behaviour."
            ),
            mcq(
                "Technical debt means:",
                ["Future cost of poor/quick design choices", "Bank loan only", "Compiler warning only", "Hardware cost only"],
                0,
                "Technical debt makes future maintenance harder."
            ),
            mcq(
                "Defensive coding includes:",
                ["Input validation and error handling", "Ignoring exceptions", "Hardcoding passwords", "No testing"],
                0,
                "Defensive coding anticipates failures and unsafe inputs."
            ),
        ],

        questions: [
            qa(
                "What are coding standards? Explain their importance.",
                "Coding standards are rules and guidelines for writing source code in a consistent and readable way. They define naming conventions, indentation, commenting style, error handling, file organisation and language-specific practices. They are important because software is usually developed and maintained by teams. Consistent code is easier to read, review, test, debug and modify. Coding standards reduce misunderstandings and defects. They also help new developers understand the project faster. Examples include using meaningful names, avoiding duplicate code, keeping functions small and following conventions such as PEP 8 in Python.",
                5
            ),
            qa(
                "Explain code review and refactoring.",
                "Code review is the systematic examination of source code by other developers to find defects and improve quality. It checks whether code is correct, readable, secure, efficient, properly tested and follows coding standards. Code review helps detect problems before release and improves team knowledge. Refactoring is the process of improving internal code structure without changing external behaviour. Examples include renaming variables, extracting methods, removing duplicate code and simplifying conditions. Code review finds improvement areas, while refactoring applies improvements. Both improve maintainability and reduce future defects.",
                5
            ),
            qa(
                "What is technical debt? How can it be reduced?",
                "Technical debt is the future cost created by choosing quick or poor solutions instead of better long-term design. It may result from rushed coding, lack of documentation, duplicate code, poor architecture, no tests or ignoring standards. Technical debt makes future changes slower, riskier and more expensive. It can be reduced by regular refactoring, code reviews, automated tests, clear documentation, following coding standards, improving architecture gradually and fixing known issues instead of repeatedly applying temporary patches. Some technical debt may be accepted for deadlines, but it should be tracked and managed.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — Software Testing Fundamentals
========================================================= */

const softwareTestingFundamentals = createTopic(
    "software-testing-fundamentals",
    "Software Testing Fundamentals",

    [
        definition(
            "Software Testing",
            "Software testing is the process of evaluating software to find defects and verify whether it satisfies specified requirements."
        ),

        text(
            "Testing improves confidence in software quality, but it cannot prove that software has no defects. It can only show the presence of defects, not their complete absence."
        ),

        heading("Objectives of Testing"),

        list([
            "Find defects before delivery.",
            "Verify that software meets requirements.",
            "Validate that software satisfies user needs.",
            "Improve software reliability and quality.",
            "Reduce risk of failure in production.",
            "Provide confidence for release.",
            "Check performance, security and usability where needed.",
        ]),

        heading("Error, Defect, Bug and Failure"),

        table(
            ["Term", "Meaning", "Example"],
            [
                ["Error", "Human mistake made during development", "Developer writes wrong condition"],
                ["Defect / Bug", "Fault in software work product or code", "if marks > 40 instead of marks >= 40"],
                ["Failure", "Software behaves incorrectly during execution", "Student with 40 marks shown as fail"],
                ["Fault", "Another term often used for defect", "Incorrect logic in module"],
            ]
        ),

        heading("Verification and Validation"),

        table(
            ["Aspect", "Verification", "Validation"],
            [
                ["Question", "Are we building the product right?", "Are we building the right product?"],
                ["Focus", "Meets specification/design", "Meets user needs"],
                ["Type", "Mostly static activities", "Mostly dynamic testing"],
                ["Examples", "Review, inspection, walkthrough", "System testing, acceptance testing"],
            ]
        ),

        heading("Testing Principles"),

        table(
            ["Principle", "Meaning"],
            [
                ["Testing shows presence of defects", "It cannot prove complete absence of defects"],
                ["Exhaustive testing is impossible", "Testing all inputs/paths is not practical"],
                ["Early testing saves cost", "Defects found early are cheaper to fix"],
                ["Defect clustering", "Most defects are often found in few modules"],
                ["Pesticide paradox", "Same tests repeated may stop finding new defects"],
                ["Testing is context dependent", "Testing approach depends on application type"],
                ["Absence-of-errors fallacy", "Bug-free software is useless if it does not meet user needs"],
            ]
        ),

        heading("Test Case"),

        definition(
            "Test Case",
            "A test case is a set of input values, execution conditions, steps and expected results designed to verify a specific requirement or behaviour."
        ),

        table(
            ["Test Case Field", "Example"],
            [
                ["Test case ID", "TC_LOGIN_001"],
                ["Objective", "Verify login with valid credentials"],
                ["Precondition", "User account exists"],
                ["Input", "Valid email and password"],
                ["Steps", "Open login page, enter data, click login"],
                ["Expected result", "User dashboard is displayed"],
                ["Actual result", "Recorded during execution"],
                ["Status", "Pass/Fail"],
            ]
        ),

        heading("Test Plan"),

        definition(
            "Test Plan",
            "A test plan is a document that describes testing scope, strategy, resources, schedule, responsibilities, environment, risks and deliverables."
        ),

        heading("Testing Life Cycle"),

        steps([
            "Requirement analysis.",
            "Test planning.",
            "Test case design.",
            "Test environment setup.",
            "Test execution.",
            "Defect reporting.",
            "Retesting and regression testing.",
            "Test closure and reporting.",
        ]),

        note(
            "Testing should start as early as possible. Requirement reviews and design reviews are also testing-related quality activities because they find defects before coding.",
            "tip",
            "Early Testing"
        ),

        keyPoints([
            "Testing evaluates software to find defects and check requirements.",
            "Testing cannot prove that software is defect-free.",
            "Error is a human mistake; defect is a fault in software; failure is incorrect behaviour.",
            "Verification checks conformance to specification; validation checks user needs.",
            "A test case contains inputs, steps and expected results.",
            "A test plan defines testing scope, strategy, resources and schedule.",
        ]),
    ],

    {
        summary:
            "Understand testing objectives, error/defect/failure, verification vs validation, testing principles, test cases and test plans.",
        minutes: 14,
        tags: ["software-engineering", "software-testing", "test-case", "verification", "validation"],

        mcqs: [
            mcq(
                "Software testing is used to:",
                ["Find defects and verify requirements", "Guarantee zero defects always", "Replace coding", "Remove all documentation"],
                0,
                "Testing finds defects and checks whether software meets requirements."
            ),
            mcq(
                "A failure is:",
                ["Incorrect behaviour during execution", "A human mistake before coding", "Only a document", "Only a test plan"],
                0,
                "Failure is visible incorrect behaviour of running software."
            ),
            mcq(
                "Exhaustive testing is:",
                ["Impossible for most real systems", "Always easy", "Required for every input", "Same as coding"],
                0,
                "Testing all combinations of inputs and paths is usually impractical."
            ),
            mcq(
                "A test case includes:",
                ["Input, steps and expected result", "Only developer salary", "Only hardware list", "Only project logo"],
                0,
                "A test case defines how to test a specific behaviour."
            ),
            mcq(
                "A test plan describes:",
                ["Testing scope, strategy, resources and schedule", "Only source code", "Only database rows", "Only user passwords"],
                0,
                "Test plan guides the testing effort."
            ),
            mcq(
                "The pesticide paradox means:",
                ["Same tests repeated may stop finding new defects", "Testing removes insects", "All defects vanish", "No need for new tests"],
                0,
                "Tests need to be reviewed and updated to find new defects."
            ),
        ],

        questions: [
            qa(
                "Define software testing and explain its objectives.",
                "Software testing is the process of evaluating software to find defects and verify whether it meets specified requirements. Its objectives include detecting defects before delivery, verifying functional and non-functional requirements, validating that the system satisfies user needs, improving reliability and quality, reducing production failure risk and providing confidence for release. Testing also checks areas such as performance, usability and security where required. Testing cannot prove that software has no defects; it can only show that defects exist or that tested behaviours work under given conditions.",
                5
            ),
            qa(
                "Differentiate between error, defect and failure.",
                "An error is a human mistake made during requirement analysis, design, coding or testing. For example, a developer misunderstands a requirement. A defect or bug is the fault introduced into a software work product or code because of an error, such as writing marks > 40 instead of marks >= 40. A failure occurs when the software is executed and behaves incorrectly because of a defect, such as showing a student with exactly 40 marks as failed. In short, human error creates defects, and defects may cause failures during execution.",
                5
            ),
            qa(
                "Explain important principles of software testing.",
                "Important testing principles include: testing shows the presence of defects, not their complete absence; exhaustive testing is impossible for most real systems; early testing saves cost because early defects are cheaper to fix; defect clustering means many defects are often found in a few modules; pesticide paradox means repeating the same tests may stop finding new defects; testing is context dependent because different systems need different testing approaches; and absence-of-errors fallacy means software with no known bugs is still useless if it does not satisfy user needs.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 5 — Testing Levels, Techniques and Debugging
========================================================= */

const testingLevelsTechniquesAndDebugging = createTopic(
    "testing-levels-techniques-and-debugging",
    "Testing Levels, Techniques and Debugging",

    [
        heading("Levels of Testing"),

        table(
            ["Testing Level", "Meaning", "Performed By"],
            [
                ["Unit Testing", "Tests individual functions, classes or modules", "Developers"],
                ["Integration Testing", "Tests interaction between combined modules", "Developers/testers"],
                ["System Testing", "Tests complete integrated system", "Testing team"],
                ["Acceptance Testing", "Tests whether system meets user/business needs", "Customer/users"],
                ["Regression Testing", "Retests existing features after changes", "Developers/testers"],
            ]
        ),

        heading("Unit Testing"),

        definition(
            "Unit Testing",
            "Unit testing verifies the smallest testable parts of software, such as functions, methods, classes or modules, in isolation."
        ),

        code(
            `// Example unit test idea

function add(a, b) {
  return a + b;
}

Test cases:
add(2, 3) should return 5
add(-1, 1) should return 0
add(0, 0) should return 0`,
            "javascript",
            "Unit testing concept"
        ),

        heading("Integration Testing"),

        definition(
            "Integration Testing",
            "Integration testing checks whether different modules work correctly together after they are combined."
        ),

        table(
            ["Approach", "Meaning"],
            [
                ["Big bang integration", "Combine all modules at once and test"],
                ["Top-down integration", "Start from top-level modules and use stubs for lower modules"],
                ["Bottom-up integration", "Start from low-level modules and use drivers for higher modules"],
                ["Incremental integration", "Add and test modules step by step"],
            ]
        ),

        heading("System and Acceptance Testing"),

        table(
            ["Testing Type", "Purpose"],
            [
                ["System testing", "Checks complete system against requirements"],
                ["Acceptance testing", "Checks whether customer/user accepts the system"],
                ["Alpha testing", "Performed by internal users at developer site"],
                ["Beta testing", "Performed by selected real users in real environment"],
            ]
        ),

        heading("Black-Box and White-Box Testing"),

        table(
            ["Aspect", "Black-Box Testing", "White-Box Testing"],
            [
                ["Knowledge of code", "Not required", "Required"],
                ["Focus", "Input/output behaviour", "Internal logic and paths"],
                ["Based on", "Requirements/specification", "Source code/design"],
                ["Performed by", "Usually testers", "Usually developers/testers"],
                ["Example", "Login with valid/invalid password", "Test all branches in login function"],
            ]
        ),

        heading("Black-Box Testing Techniques"),

        table(
            ["Technique", "Meaning", "Example"],
            [
                ["Equivalence Partitioning", "Divide input into valid/invalid groups", "Marks: 0–100 valid, <0 invalid, >100 invalid"],
                ["Boundary Value Analysis", "Test values at edges", "0, 1, 99, 100, 101"],
                ["Decision Table Testing", "Test combinations of conditions/actions", "Discount rules"],
                ["State Transition Testing", "Test changes between states", "ATM card states"],
                ["Use Case Testing", "Test user scenarios", "Place order flow"],
            ]
        ),

        heading("White-Box Testing Techniques"),

        table(
            ["Technique", "Meaning"],
            [
                ["Statement coverage", "Every statement is executed at least once"],
                ["Branch/decision coverage", "Every decision outcome is tested"],
                ["Path coverage", "Different execution paths are tested"],
                ["Condition coverage", "Boolean conditions are tested for true/false"],
                ["Loop testing", "Loops are tested for zero, one and many iterations"],
            ]
        ),

        heading("Debugging"),

        definition(
            "Debugging",
            "Debugging is the process of finding the root cause of a defect and correcting it after a failure or incorrect behaviour is observed."
        ),

        steps([
            "Reproduce the defect.",
            "Collect information such as inputs, logs and error messages.",
            "Locate the faulty code or design cause.",
            "Understand why the defect occurred.",
            "Fix the defect carefully.",
            "Retest the failed test case.",
            "Run regression tests to ensure no new defect was introduced.",
            "Document the fix if needed.",
        ]),

        heading("Defect Life Cycle"),

        table(
            ["State", "Meaning"],
            [
                ["New", "Defect is reported"],
                ["Assigned", "Defect is assigned to developer"],
                ["Open", "Developer starts analysis/fix"],
                ["Fixed", "Code has been corrected"],
                ["Retest", "Tester verifies the fix"],
                ["Closed", "Defect is resolved and verified"],
                ["Reopened", "Defect still exists after fix"],
                ["Rejected / Deferred", "Not accepted or postponed"],
            ]
        ),

        heading("Regression Testing"),

        definition(
            "Regression Testing",
            "Regression testing is retesting existing functionality after changes to ensure that previously working features still work correctly."
        ),

        note(
            "Fixing one bug can introduce another bug. That is why retesting and regression testing are both important after every significant change.",
            "warning",
            "Testing Tip"
        ),

        keyPoints([
            "Unit testing checks small modules; integration testing checks module interaction.",
            "System testing checks the complete system; acceptance testing checks user approval.",
            "Black-box testing focuses on behaviour without knowing code.",
            "White-box testing focuses on internal logic and code paths.",
            "Boundary value analysis tests edge values.",
            "Debugging finds and fixes the root cause of defects.",
            "Regression testing ensures old features still work after changes.",
        ]),
    ],

    {
        summary:
            "Learn testing levels, black-box/white-box testing, test design techniques, debugging, defect life cycle and regression testing.",
        minutes: 14,
        tags: ["software-engineering", "testing-levels", "black-box", "white-box", "debugging"],

        mcqs: [
            mcq(
                "Unit testing tests:",
                ["Individual functions or modules", "Only complete organisation", "Only user manual", "Only project budget"],
                0,
                "Unit testing checks smallest testable parts in isolation."
            ),
            mcq(
                "Integration testing checks:",
                ["Interaction between modules", "Only spelling mistakes", "Only final invoice", "Only hardware colour"],
                0,
                "Integration testing verifies combined modules work together."
            ),
            mcq(
                "Black-box testing is based mainly on:",
                ["Requirements and input-output behaviour", "Source code internals only", "Compiler design", "Database backup"],
                0,
                "Black-box testing checks external behaviour without code knowledge."
            ),
            mcq(
                "White-box testing requires knowledge of:",
                ["Internal code logic", "Only user age", "Only office address", "Only marketing budget"],
                0,
                "White-box testing designs tests using program structure."
            ),
            mcq(
                "Boundary value analysis tests:",
                ["Values at the edges of input ranges", "Only random values", "Only colour values", "Only deleted files"],
                0,
                "Boundary testing checks values near limits where defects often occur."
            ),
            mcq(
                "Regression testing is performed to:",
                ["Ensure old features still work after changes", "Delete all old tests", "Avoid retesting", "Change requirements randomly"],
                0,
                "Regression testing catches side effects of modifications."
            ),
        ],

        questions: [
            qa(
                "Explain different levels of software testing.",
                "The main levels of software testing are unit testing, integration testing, system testing, acceptance testing and regression testing. Unit testing checks individual functions, classes or modules in isolation, usually by developers. Integration testing checks whether combined modules interact correctly. System testing tests the complete integrated system against requirements. Acceptance testing is performed from the user's or customer's viewpoint to decide whether the system is acceptable. Regression testing is performed after changes to ensure that previously working functionality has not broken. These levels together improve confidence in software quality.",
                5
            ),
            qa(
                "Differentiate between black-box and white-box testing.",
                "Black-box testing checks software behaviour from the outside without knowledge of internal code. It is based on requirements and focuses on inputs and expected outputs. Examples include equivalence partitioning, boundary value analysis and use case testing. White-box testing requires knowledge of internal code, logic and structure. It focuses on statements, branches, paths, conditions and loops. Developers often perform white-box testing, while testers commonly perform black-box testing. Black-box testing asks whether the software does what it should; white-box testing asks whether internal logic has been adequately tested.",
                5
            ),
            qa(
                "What is debugging? Explain the defect life cycle.",
                "Debugging is the process of finding the root cause of a defect and correcting it after incorrect behaviour is observed. It includes reproducing the defect, collecting logs and inputs, locating faulty code, understanding the cause, fixing it, retesting and running regression tests. The defect life cycle begins when a defect is reported as new. It may be assigned to a developer, opened for analysis, fixed, sent for retesting, and closed if verified. If the defect still exists, it is reopened. Some defects may be rejected if invalid or deferred for future release.",
                5
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit2Topics = [
    softwareDesignFundamentals,
    architecturalAndDetailedDesign,
    codingStandardsAndCodeQuality,
    softwareTestingFundamentals,
    testingLevelsTechniquesAndDebugging,
];