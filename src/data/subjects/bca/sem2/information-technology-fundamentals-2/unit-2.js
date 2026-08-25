/* =========================================================
   BCA � SEM 2 � Information Technology Fundamentals - II
   UNIT 2 � Database, Programming and IT Management
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
   TOPIC 1 � Database Concepts
========================================================= */

const databaseConcepts = createTopic(
    "database-concepts",
    "Database Concepts",

    [
        definition(
            "Database",
            "An organised collection of structured data, typically stored electronically in a computer system, and managed by a Database Management System (DBMS)."
        ),

        heading("DBMS Features"),

    list([
        "Data definition: create, alter and drop tables.",
        "Data manipulation: insert, update, delete and query.",
        "Data security: authentication, authorisation, encryption.",
        "Data integrity: primary key, foreign key, constraints.",
        "Concurrent access: many users can use the database at once.",
        "Backup and recovery: protect against data loss.",
    ]),


table(
    ["Type", "Description", "Examples"],
    [
        ["Relational", "Tables with rows and columns, SQL", "MySQL, PostgreSQL, Oracle"],
        ["NoSQL Document", "Documents in JSON like format", "MongoDB, CouchDB"],
        ["Key value", "Simple key to value mapping", "Redis, DynamoDB"],
        ["Column family", "Data stored by columns", "Cassandra, HBase"],
        ["Graph", "Nodes and edges for relationships", "Neo4j"],
        ["In memory", "Stored in RAM for speed", "Redis, Memcached"],
        ["Time series", "Optimised for time stamped data", "InfluxDB, TimescaleDB"],
    ]
),


table(
    ["Term", "Description"],
    [
        ["Table", "A collection of rows and columns, also called a relation"],
        ["Row / Record / Tuple", "A single entry in a table"],
        ["Column / Field / Attribute", "A single data item in a row"],
        ["Primary key", "A column whose value uniquely identifies each row"],
        ["Foreign key", "A column that refers to the primary key of another table"],
        ["Schema", "The structure of the database: tables, columns, types"],
        ["Index", "A data structure that speeds up lookups"],
    ]
),

    note(
        "A primary key cannot be NULL and must be unique. A foreign key enforces referential integrity between two tables.",
        "tip",
        "Keys"
    ),


code(
    `-- Create a table
CREATE TABLE Student (
    id    INT PRIMARY KEY,
    name  VARCHAR(50),
    marks INT
);

-- Insert
INSERT INTO Student VALUES (1, 'Amit', 85);

-- Query
SELECT * FROM Student;
SELECT name, marks FROM Student WHERE marks > 50;

-- Update
UPDATE Student SET marks = 90 WHERE id = 1;

-- Delete
DELETE FROM Student WHERE id = 1;
`,
    "sql",
    "Common SQL commands"
),


table(
    ["Category", "Commands", "Purpose"],
    [
        ["DDL", "Data Definition Language", "CREATE, ALTER, DROP"],
        ["DML", "Data Manipulation Language", "INSERT, UPDATE, DELETE"],
        ["DQL", "Data Query Language", "SELECT"],
        ["DCL", "Data Control Language", "GRANT, REVOKE"],
        ["TCL", "Transaction Control Language", "COMMIT, ROLLBACK, SAVEPOINT"],
    ]
),


table(
    ["Property", "Meaning"],
    [
        ["Atomicity", "A transaction is all or nothing"],
        ["Consistency", "Database moves from one valid state to another"],
        ["Isolation", "Concurrent transactions do not interfere with each other"],
        ["Durability", "Once committed, the data survives crashes and power loss"],
    ]
),

    keyPoints([
        "DBMS is software to manage databases.",
        "Relational DBs use tables; NoSQL uses documents or graphs.",
        "Primary key uniquely identifies a row.",
        "SQL has DDL, DML, DQL, DCL and TCL categories.",
        "ACID properties ensure reliable transactions.",
        ]),
    ],

    {
        summary:
    "Master database concepts, DBMS features, relational vs NoSQL, SQL basics and ACID properties.",
        minutes: 11,
            tags: ["database", "sql", "dbms", "important"],

                mcqs: [
                    mcq(
                        "DBMS stands for:",
                        ["Data Backup Management System", "Database Management System", "Digital Base Mapping System", "Data Business Management System"],
                        1,
                        "DBMS is Database Management System."
                    ),
                    mcq(
                        "Primary key is used to:",
                        ["Encrypt data", "Uniquely identify each row", "Speed up queries", "Connect tables"],
                        1,
                        "Primary key uniquely identifies each row in a table."
                    ),
                    mcq(
                        "Which is a NoSQL database?",
                        ["MySQL", "PostgreSQL", "MongoDB", "Oracle"],
                        2,
                        "MongoDB is a popular NoSQL document database."
                    ),
                    mcq(
                        "ACID stands for:",
                        ["Atomicity Consistency Isolation Durability", "Access Control Integrity Data", "Automatic Crash Index Dump", "None"],
                        0,
                        "ACID is Atomicity, Consistency, Isolation, Durability."
                    ),
                    mcq(
                        "SELECT is which category of SQL?",
                        ["DDL", "DML", "DQL", "TCL"],
                        2,
                        "SELECT is a Data Query Language command."
                    ),
                    mcq(
                        "Foreign key is used for:",
                        ["Speed", "Referential integrity", "Encryption", "Backup"],
                        1,
                        "Foreign key enforces referential integrity between tables."
                    ),
                ],

                    questions: [
                        qa(
                            "Differentiate between RDBMS and NoSQL.",
                            "An RDBMS, or Relational Database Management System, stores data in tables with a fixed schema and uses SQL for queries. It supports ACID transactions and is ideal for structured data with clear relationships. Examples are MySQL, PostgreSQL and Oracle. A NoSQL database stores data in flexible formats such as documents, key value pairs, columns or graphs, with a dynamic schema. It scales horizontally across many servers and is ideal for large volumes of unstructured or semi structured data. Examples are MongoDB, Redis and Cassandra.",
                            4
                        ),
                        qa(
                            "Explain the ACID properties of a transaction.",
                            "ACID stands for Atomicity, Consistency, Isolation and Durability. Atomicity means a transaction is all or nothing; either all operations happen or none do. Consistency means the database moves from one valid state to another, so all rules and constraints remain satisfied. Isolation means that concurrent transactions do not interfere with each other, as if they were running one after another. Durability means that once a transaction is committed, its changes survive any subsequent crash or power loss. Together these properties ensure reliable processing of transactions.",
                            4
                        ),
                        qa(
                            "Explain the categories of SQL commands.",
                            "SQL commands are divided into five categories. DDL, or Data Definition Language, defines the structure: CREATE, ALTER, DROP. DML, or Data Manipulation Language, works on the data: INSERT, UPDATE, DELETE. DQL, or Data Query Language, retrieves the data: SELECT. DCL, or Data Control Language, handles permissions: GRANT, REVOKE. TCL, or Transaction Control Language, manages transactions: COMMIT, ROLLBACK, SAVEPOINT. Knowing the categories helps in writing the right command and understanding how a SQL statement is processed.",
                            4
                        ),
                        qa(
                            "What is a primary key? Why is it important?",
                            "A primary key is a column, or set of columns, whose value uniquely identifies each row in a table. It cannot be NULL and must be unique across the table. The primary key is used to refer to a row from another table through a foreign key, ensuring referential integrity. It also speeds up lookups because most databases automatically build an index on the primary key. Choosing the right primary key, such as an auto increment integer or a UUID, is one of the most important decisions in database design.",
                            4
                        ),
                    ],
  }
);

/* =========================================================
   TOPIC 2 � Software Development Life Cycle
========================================================= */

const sdlc = createTopic(
    "software-development-life-cycle",
    "Software Development Life Cycle",

    [
        definition(
            "SDLC",
            "Software Development Life Cycle, a structured process used by software teams to design, develop, test and deploy information systems, with the goal of producing high quality software in a predictable time and budget."
        ),


    list([
        "Requirement analysis � what the user needs.",
        "Feasibility study � can it be done in time and budget?",
        "System design � architecture, data, interface.",
        "Implementation � actual coding.",
        "Testing � find and fix bugs.",
        "Deployment � install in the real environment.",
        "Maintenance � fix issues and add features.",
    ]),


table(
    ["Model", "Description", "When to Use"],
    [
        ["Waterfall", "Sequential phases, each completed before next", "Small, well understood projects"],
        ["Iterative", "Repeated cycles of design, build, test", "Medium projects with some uncertainty"],
        ["Spiral", "Combines iterative with risk analysis at each loop", "Large, risky projects"],
        ["V shaped", "Testing planned parallel to development", "Safety critical systems"],
        ["Agile", "Short sprints, continuous feedback", "Modern web and mobile apps"],
        ["DevOps", "Continuous integration, delivery and deployment", "Cloud native applications"],
    ]
),


code(
    `Requirement
    ?
Design
    ?
Implementation
    ?
Testing
    ?
Deployment
    ?
Maintenance
`,
    "text",
    "Waterfall flow"
),

    list([
        "Easy to understand and manage.",
        "Each phase has clear deliverables.",
        "Best when requirements are stable and well understood.",
        "Disadvantage: no working software until late in the cycle.",
    ]),


definition(
    "Agile",
    "A set of principles for software development in which requirements and solutions evolve through collaboration between self organising, cross functional teams, delivering working software in short iterations called sprints."
),

    table(
        ["Term", "Meaning"],
        [
            ["Sprint", "A short iteration of 1 to 4 weeks"],
            ["Product backlog", "List of all desired features, ordered by priority"],
            ["Sprint backlog", "Features selected for the current sprint"],
            ["Daily standup", "Short 15 minute daily meeting"],
            ["Scrum master", "Person who facilitates the Scrum process"],
            ["Product owner", "Person who represents the user and prioritises the backlog"],
            ["Velocity", "Amount of work a team completes in a sprint"],
            ["Retrospective", "Meeting at the end of sprint to improve"],
        ]
    ),

    note(
        "The Agile Manifesto values individuals and interactions over processes and tools, working software over comprehensive documentation, customer collaboration over contract negotiation, and responding to change over following a plan. The 12 principles of Agile guide the work of every team.",
        "exam",
        "Frequently Asked"
    ),


list([
    "Unit testing � test individual functions or methods.",
    "Integration testing � test interaction between modules.",
    "System testing � test the complete system.",
    "Acceptance testing � test by the user against requirements.",
    "Regression testing � re test after a change to ensure nothing broke.",
    "Performance testing � speed, load and stress tests.",
    "Security testing � find vulnerabilities.",
]),

    table(
        ["Type", "Description"],
        [
            ["Manual", "Tester runs the test by hand"],
            ["Automated", "Test scripts run the test automatically, faster and repeatable"],
        ]
    ),


list([
    "Git is the most widely used version control system.",
    "GitHub, GitLab and Bitbucket are popular Git hosting services.",
    "Key concepts: repository, commit, branch, merge, pull request.",
    "Allows many developers to work on the same code without conflict.",
]),

    keyPoints([
        "SDLC has requirement, design, code, test, deploy, maintain.",
        "Waterfall is sequential; Agile is iterative.",
        "Agile uses short sprints and daily standups.",
        "Testing levels: unit, integration, system, acceptance.",
        "Git is the standard version control system.",
        ]),
    ],

    {
        summary:
    "Master SDLC phases, models, Agile methodology, testing levels and version control basics.",
        minutes: 11,
            tags: ["sdlc", "agile", "testing", "git", "important"],

                mcqs: [
                    mcq(
                        "SDLC stands for:",
                        ["System Development Life Cycle", "Software Design Life Cycle", "Software Development Life Cycle", "Service Development Life Cycle"],
                        2,
                        "SDLC is Software Development Life Cycle."
                    ),
                    mcq(
                        "Waterfall is:",
                        ["Iterative", "Sequential", "Spiral", "Agile"],
                        1,
                        "Waterfall flows sequentially through phases."
                    ),
                    mcq(
                        "A sprint is usually:",
                        ["1 day", "1 to 4 weeks", "3 months", "1 year"],
                        1,
                        "A sprint is a short iteration of 1 to 4 weeks."
                    ),
                    mcq(
                        "Git is used for:",
                        ["Testing", "Version control", "Designing", "Deployment"],
                        1,
                        "Git is a distributed version control system."
                    ),
                    mcq(
                        "Unit testing tests:",
                        ["Whole system", "Individual functions", "User interface", "Network"],
                        1,
                        "Unit testing tests the smallest testable piece of code."
                    ),
                    mcq(
                        "Daily standup is usually:",
                        ["1 hour", "15 minutes", "1 day", "1 week"],
                        1,
                        "The daily standup is a short 15 minute meeting."
                    ),
                ],

                    questions: [
                        qa(
                            "Explain the phases of the SDLC.",
                            "The SDLC has seven main phases. Requirement analysis gathers what the user needs from the system. The feasibility study checks whether the project can be done in the available time and budget. System design produces the architecture, database and interface design. Implementation is the actual coding based on the design. Testing finds and fixes bugs at unit, integration, system and acceptance levels. Deployment installs the working system in the real environment. Maintenance fixes issues and adds new features after the system is live.",
                            4
                        ),
                        qa(
                            "Differentiate between Waterfall and Agile.",
                            "Waterfall is a sequential model in which each phase is completed before the next begins, and requirements are fixed at the start. It works well when requirements are stable and well understood but delivers no working software until late. Agile is iterative, breaking the work into short sprints of 1 to 4 weeks, with continuous feedback from the user and the ability to change requirements at any time. Agile delivers working software early and adapts to change, which is why it has become the standard for modern web and mobile development.",
                            4
                        ),
                        qa(
                            "Explain the key roles and ceremonies in Scrum.",
                            "Scrum is the most popular Agile framework. The Product Owner represents the user and prioritises the product backlog, which is the list of all desired features. The Scrum Master facilitates the process and removes obstacles for the team. The Development Team is self organising and cross functional, typically of 5 to 9 members. The main ceremonies are the Sprint Planning, where work for the sprint is chosen; the Daily Standup, a 15 minute daily meeting; the Sprint Review, where the team demos the work; and the Sprint Retrospective, where the team reflects on how to improve.",
                            4
                        ),
                        qa(
                            "What is version control? Why is Git so popular?",
                            "Version control is a system that tracks changes to files over time, allowing the team to recall a specific version later. Git is a distributed version control system in which every developer has a full copy of the repository on their machine. It is popular because it is fast, supports thousands of parallel branches, handles merging intelligently and works offline. Hosted services such as GitHub, GitLab and Bitbucket have added pull requests, code review, issue tracking and CI/CD, making Git the standard tool for collaboration on modern software projects.",
                            4
                        ),
                    ],
  }
);

/* =========================================================
   TOPIC 3 � Data Analytics Basics
========================================================= */

const dataAnalytics = createTopic(
    "data-analytics-basics",
    "Data Analytics Basics",

    [
        definition(
            "Data Analytics",
            "The science of examining raw data to draw conclusions about the information they contain, typically with the help of specialised systems and software."
        ),


    table(
        ["Type", "Question Answered", "Technique"],
        [
            ["Descriptive", "What happened?", "Reports, dashboards, summaries"],
            ["Diagnostic", "Why did it happen?", "Drill down, correlation, root cause"],
            ["Predictive", "What is likely to happen?", "Regression, classification, ML"],
            ["Prescriptive", "What should we do?", "Optimisation, simulation"],
        ]
    ),


list([
    "Define the question or problem.",
    "Collect the relevant data from sources.",
    "Clean the data: handle missing values, errors, duplicates.",
    "Explore the data using statistics and visualisation.",
    "Build a model or perform deeper analysis.",
    "Communicate the findings through reports and dashboards.",
    "Take action based on the insights.",
]),


table(
    ["Statistic", "Description", "Example"],
    [
        ["Mean", "Average, sum divided by count", "Mean of 2, 4, 6 is 4"],
        ["Median", "Middle value when sorted", "Median of 2, 4, 6 is 4"],
        ["Mode", "Most frequent value", "Mode of 1, 2, 2, 3 is 2"],
        ["Range", "Maximum minus minimum", "Range of 2, 4, 9 is 7"],
        ["Variance", "Average of squared deviations from mean", "�"],
        ["Standard deviation", "Square root of variance", "�"],
        ["Percentile", "Value below which a percentage falls", "90th percentile of test scores"],
    ]
),

    note(
        "Mean is sensitive to outliers, while median is not. For example, the mean of 1, 2, 3, 100 is 26.5, but the median is 2.5, which better represents the typical value. Use median for income and house prices where outliers are common.",
        "tip",
        "Mean vs Median"
    ),


list([
    "Bar chart � compares categories.",
    "Line chart � shows trend over time.",
    "Pie chart � shows parts of a whole.",
    "Histogram � distribution of a numeric variable.",
    "Scatter plot � relationship between two variables.",
    "Heat map � values across two dimensions using colour.",
    "Box plot � distribution showing quartiles and outliers.",
]),


list([
    "Excel � most common entry level tool.",
    "SQL � querying and joining data in databases.",
    "Python � pandas, NumPy, matplotlib, seaborn, scikit-learn.",
    "R � statistical computing and graphics.",
    "Tableau, Power BI � interactive dashboards.",
    "Google Data Studio � free, web based dashboards.",
]),


definition(
    "Machine Learning",
    "A subfield of AI that gives computers the ability to learn from data without being explicitly programmed, by finding patterns and making decisions."
),

    table(
        ["Type", "Description", "Examples"],
        [
            ["Supervised", "Learns from labelled data", "Spam detection, house price prediction"],
            ["Unsupervised", "Finds structure in unlabelled data", "Customer segmentation, anomaly detection"],
            ["Reinforcement", "Learns by trial and error with rewards", "Game playing, robotics"],
        ]
    ),


list([
    "Linear regression � predict a numeric value.",
    "Logistic regression � binary classification.",
    "Decision tree � flowchart like model, easy to interpret.",
    "Random forest � many decision trees combined.",
    "K nearest neighbours � classify by majority of k closest.",
    "K means � clustering into k groups.",
    "Neural network � deep learning for images, text and speech.",
]),

    keyPoints([
        "Analytics has descriptive, diagnostic, predictive and prescriptive types.",
        "Mean, median and mode describe the centre; range and standard deviation describe the spread.",
        "Bar, line and pie are basic charts; scatter and heat maps for relationships.",
        "Supervised learning needs labels; unsupervised does not.",
        "Python with pandas and scikit-learn is the most popular data stack.",
        ]),
    ],

    {
        summary:
    "Master the types of analytics, descriptive statistics, data visualisation, tools and a basic intro to machine learning.",
        minutes: 12,
            tags: ["analytics", "statistics", "visualisation", "ml", "important"],

                mcqs: [
                    mcq(
                        "The mean of 2, 4, 6, 8 is:",
                        ["4", "5", "6", "8"],
                        1,
                        "Sum 20 divided by 4 = 5."
                    ),
                    mcq(
                        "Median is the:",
                        ["Average", "Middle value", "Most frequent", "Range"],
                        1,
                        "Median is the middle value when data is sorted."
                    ),
                    mcq(
                        "Which chart is best for trend over time?",
                        ["Bar", "Line", "Pie", "Histogram"],
                        1,
                        "Line chart shows trend over time."
                    ),
                    mcq(
                        "Supervised learning needs:",
                        ["No data", "Unlabelled data", "Labelled data", "Rewards"],
                        2,
                        "Supervised learning is trained on labelled data."
                    ),
                    mcq(
                        "Which is NOT a data analytics tool?",
                        ["Excel", "Python", "MySQL", "MS Paint"],
                        3,
                        "MS Paint is a drawing tool, not for analytics."
                    ),
                    mcq(
                        "Which is descriptive analytics?",
                        ["Predict sales", "Show last month sales", "Find cause of drop", "Suggest action"],
                        1,
                        "Descriptive shows what happened, like a sales report."
                    ),
                ],

                    questions: [
                        qa(
                            "Differentiate between descriptive, predictive and prescriptive analytics.",
                            "Descriptive analytics answers 'what happened' by summarising past data through reports, dashboards and KPIs. Predictive analytics answers 'what is likely to happen' by using statistical models and machine learning to forecast future values. Prescriptive analytics answers 'what should we do' by recommending actions using optimisation and simulation. Descriptive looks back, predictive looks forward, and prescriptive recommends the best course of action. Together they form a maturity ladder from understanding the past to shaping the future.",
                            4
                        ),
                        qa(
                            "Explain mean, median and mode with example.",
                            "Mean is the arithmetic average, the sum of values divided by the count. For 2, 4, 6, 8, the mean is 5. Median is the middle value when the data is sorted, which is 5 for the same set. Mode is the value that appears most often; in 1, 2, 2, 3, 3, 3, 4 the mode is 3. Mean is sensitive to outliers, while median is robust. Mode is useful for categorical data. Together they describe the central tendency of the data.",
                            4
                        ),
                        qa(
                            "What is data visualisation? Name common chart types.",
                            "Data visualisation is the graphical representation of data and information, using charts, graphs and maps, to make patterns and trends easy to see. Common types are bar charts for comparing categories, line charts for showing trends over time, pie charts for showing parts of a whole, histograms for distribution, scatter plots for relationship between two variables, heat maps for values across two dimensions, and box plots for distribution with quartiles and outliers. Good visualisation simplifies complex data and supports faster, better decisions.",
                            4
                        ),
                        qa(
                            "Differentiate between supervised and unsupervised learning.",
                            "Supervised learning trains a model on labelled data, where the correct output is known for every input, and then uses the model to predict the output for new inputs. Examples are spam detection and house price prediction. Unsupervised learning works on unlabelled data and tries to find hidden structure, such as groups of similar customers (clustering) or unusual transactions (anomaly detection). Supervised is used for prediction; unsupervised is used for exploration. Reinforcement learning is a third type that learns by trial and error with rewards and is used in games and robotics.",
                            4
                        ),
                    ],
  }
);

/* =========================================================
   TOPIC 4 � IT Services and Project Management
========================================================= */

const itServices = createTopic(
    "it-services-and-project-management",
    "IT Services and Project Management",

    [
        definition(
            "IT Project Management",
            "The process of planning, organising, directing and controlling an organisation's information technology resources to achieve specific goals within a defined scope, time and budget."
        ),


    list([
        "Initiation � define the project, get approval.",
        "Planning � scope, schedule, resources, risk, budget.",
        "Execution � do the actual work.",
        "Monitoring and control � track progress and fix deviations.",
        "Closure � deliver, get sign off, document lessons.",
    ]),


table(
    ["Constraint", "Description"],
    [
        ["Scope", "What work will be done"],
        ["Time", "When the work will be done"],
        ["Cost", "How much it will cost"],
        ["Quality", "How good the output will be"],
    ]
),

    text(
        "The three constraints of scope, time and cost form a triangle. Reducing any one usually increases the other two. Quality sits in the middle and is affected by all three."
    ),

    note(
        "A common saying is: fast, good and cheap � pick any two. This is the project management triangle in a nutshell.",
        "tip",
        "Pick Any Two"
    ),


table(
    ["Method", "Best For", "Key Feature"],
    [
        ["Waterfall", "Construction, manufacturing", "Phases are sequential and signed off"],
        ["Agile / Scrum", "Software development", "Short sprints, continuous feedback"],
        ["PRINCE2", "Government and large projects", "Stage gates and strong governance"],
        ["Kanban", "Continuous flow of work", "Visual board, limit WIP"],
        ["Lean", "Waste reduction", "Focus on value and eliminate waste"],
        ["Six Sigma", "Quality improvement", "Reduce defects using DMAIC"],
    ]
),


table(
    ["Role", "Responsibility"],
    [
        ["Project sponsor", "Provides funding and high level direction"],
        ["Project manager", "Plans, executes and closes the project"],
        ["Business analyst", "Gathers and analyses requirements"],
        ["Architect", "Designs the overall technical solution"],
        ["Developers", "Build the software"],
        ["Testers", "Verify that the software meets requirements"],
        ["Operations", "Runs the system in production"],
    ]
),


list([
    "Identify risks: technical, financial, legal, schedule, resource.",
    "Analyse: probability and impact.",
    "Plan response: avoid, reduce, transfer or accept.",
    "Monitor: review regularly and update the risk log.",
]),

    heading("IT Service Management (ITSM)"),

definition(
    "ITIL",
    "Information Technology Infrastructure Library, a set of best practice frameworks for IT service management that focuses on aligning IT services with the needs of the business."
),

    list([
        "Service strategy � what services to offer.",
        "Service design � design of new or changed services.",
        "Service transition � build, test and deploy new services.",
        "Service operation � day to day running of services.",
        "Continual service improvement � improve services over time.",
    ]),


list([
    "Tier 1 � basic support, password reset, common questions.",
    "Tier 2 � technical support, deeper troubleshooting.",
    "Tier 3 � expert support, complex issues, vendor involvement.",
    "Service Level Agreement (SLA) � defines response and resolution times.",
    "Ticketing system � tracks each request from open to close.",
]),

    keyPoints([
        "Projects have initiation, planning, execution, monitoring and closure.",
        "Scope, time, cost and quality are the four main constraints.",
        "Agile and Waterfall are the most common methodologies.",
        "Risk management identifies, analyses and responds to risks.",
        "ITIL is the standard framework for IT service management.",
        ]),
    ],

    {
        summary:
    "Master project life cycle, project triangle, methodologies, roles, risk management and ITIL.",
        minutes: 10,
            tags: ["project", "ITIL", "risk", "important"],

                mcqs: [
                    mcq(
                        "The project triangle has:",
                        ["Scope, time, cost", "Plan, do, check", "Start, run, stop", "People, process, product"],
                        0,
                        "Scope, time and cost are the three sides of the triangle."
                    ),
                    mcq(
                        "Project manager is responsible for:",
                        ["Funding", "Planning, executing, closing", "Coding", "Selling"],
                        1,
                        "The PM plans, executes and closes the project."
                    ),
                    mcq(
                        "ITIL is a:",
                        ["Programming language", "Service management framework", "Hardware", "Network protocol"],
                        1,
                        "ITIL is a framework for IT service management."
                    ),
                    mcq(
                        "Tier 1 support handles:",
                        ["Complex issues", "Basic issues", "Vendor calls", "Hardware repair"],
                        1,
                        "Tier 1 is the first level, handling basic issues."
                    ),
                    mcq(
                        "SLA stands for:",
                        ["System Level Agreement", "Service Level Agreement", "Software License Agreement", "Secure Login Access"],
                        1,
                        "SLA is Service Level Agreement."
                    ),
                    mcq(
                        "Risk response includes:",
                        ["Avoid, reduce, transfer, accept", "Buy, sell, hold", "Plan, do, check", "Code, test, deploy"],
                        0,
                        "The four standard responses to risk are avoid, reduce, transfer, accept."
                    ),
                ],

                    questions: [
                        qa(
                            "Explain the project management triangle.",
                            "The project management triangle, also called the iron triangle, has three sides: scope, time and cost. Scope defines what work will be done, time defines the schedule, and cost defines the budget. Changing any one side usually affects the other two. For example, reducing time without changing scope or cost will reduce quality, which is why quality sits at the centre. The PM must balance all three to deliver a successful project.",
                            4
                        ),
                        qa(
                            "Differentiate between Waterfall and Agile project management.",
                            "Waterfall is a sequential, plan driven methodology in which each phase is completed and signed off before the next begins. It is best for projects with stable requirements, such as construction and manufacturing. Agile is an iterative, change driven methodology in which work is done in short sprints of 1 to 4 weeks, with continuous feedback and the ability to change requirements at any time. It is best for software projects with high uncertainty. Waterfall provides predictability, while Agile provides flexibility.",
                            4
                        ),
                        qa(
                            "Explain risk management in a project.",
                            "Risk management is the process of identifying, analysing and responding to risks that may affect the project. First, the team brainstorms all possible risks: technical, financial, schedule, resource, legal. Each risk is then analysed for its probability of happening and its impact if it happens. For each significant risk, the team chooses one of four responses: avoid by changing the plan, reduce by taking preventive action, transfer by insurance or outsourcing, or accept if the risk is small. The risk log is reviewed regularly and updated as the project progresses.",
                            4
                        ),
                        qa(
                            "What is ITIL? List its main stages.",
                            "ITIL, the Information Technology Infrastructure Library, is a widely adopted framework of best practices for IT service management. It helps organisations align their IT services with the needs of the business. The main stages are Service Strategy, which decides what services to offer; Service Design, which designs new or changed services; Service Transition, which builds, tests and deploys them; Service Operation, which runs the services day to day; and Continual Service Improvement, which measures and improves the services over time. ITIL provides a common vocabulary and process model for IT teams.",
                            4
                        ),
                    ],
  }
);

/* =========================================================
   TOPIC 5 � IT Ethics, Privacy and Future Trends
========================================================= */

const ethics = createTopic(
    "it-ethics-privacy-and-future",
    "IT Ethics, Privacy and Future Trends",

    [
        definition(
            "IT Ethics",
            "The study of moral issues arising from the use of information technology, including privacy, intellectual property, accuracy, accessibility and the digital divide."
        ),


    list([
        "Privacy � collection and use of personal data.",
        "Intellectual property � software, music, movies, books.",
        "Cyberbullying and online harassment.",
        "Addiction to screens and social media.",
        "Misinformation, fake news and deepfakes.",
        "Bias in AI systems.",
        "Environmental impact of data centres.",
    ]),


list([
    "Personal data should be collected with consent and for a specific purpose.",
    "Data should be stored securely and deleted when no longer needed.",
    "Users have the right to know what data is collected and to correct or delete it.",
    "GDPR in Europe and DPDP Act 2023 in India are key privacy laws.",
    "Organisations must appoint a Data Protection Officer (DPO) for compliance.",
]),


definition(
    "Digital Divide",
    "The gap between those who have easy access to digital technology and those who do not, often based on geography, income, education or age."
),

    list([
        "Internet and devices may be unaffordable in rural areas.",
        "Older adults may not have the skills to use digital services.",
        "Women in some regions have less access than men.",
        "Closing the divide needs infrastructure, affordable devices and digital literacy.",
    ]),


table(
    ["Term", "Description"],
    [
        ["Copyright", "Protects original literary, artistic and musical works"],
        ["Patent", "Protects inventions and processes for a limited time"],
        ["Trademark", "Protects brand names, logos and slogans"],
        ["Trade secret", "Protects confidential business information"],
        ["Open source", "Software whose source code is freely available to use and modify"],
    ]
),


list([
    "Proprietary � paid, closed source, cannot be modified (e.g. Windows, MS Office).",
    "Freeware � free of cost but closed source (e.g. Adobe Reader).",
    "Shareware � free to try, paid for continued use.",
    "Open source � free to use, modify and distribute (e.g. Linux, Firefox).",
    "GPL � open source that requires derivative works to also be GPL.",
    "MIT / Apache � permissive open source licences.",
]),


list([
    "Generative AI in every application, from search to design.",
    "Quantum computing moving from research labs to real products.",
    "Web 3.0 based on blockchain, decentralised identity and tokenisation.",
    "Sustainable IT � green data centres and carbon aware computing.",
    "Spatial computing using AR and VR for work, education and entertainment.",
    "Cybersecurity mesh � a flexible, composable architecture for security.",
]),


list([
    "Reduce energy use in data centres through efficient cooling and renewable power.",
    "Design hardware for long life and easy recycling.",
    "Use virtualisation and cloud to consolidate servers.",
    "Adopt circular economy: refurbish, reuse, recycle.",
]),


list([
    "Think before you post.",
    "Respect others online as you would in person.",
    "Do not share or forward harmful content.",
    "Verify information before believing or sharing it.",
    "Use technology to solve problems, not to create them.",
]),

    keyPoints([
        "IT ethics covers privacy, IP, accuracy and access.",
        "GDPR and India's DPDP Act protect personal data.",
        "Digital divide is a serious social challenge.",
        "Open source encourages collaboration and transparency.",
        "Green IT aims to reduce the environmental impact of computing.",
        ]),
    ],

    {
        summary:
    "Master IT ethics, privacy, digital divide, intellectual property, software licences and future trends.",
        minutes: 10,
            tags: ["ethics", "privacy", "IP", "future", "important"],

                mcqs: [
                    mcq(
                        "GDPR is a law from:",
                        ["USA", "Europe", "India", "Japan"],
                        1,
                        "GDPR is the General Data Protection Regulation of the European Union."
                    ),
                    mcq(
                        "A patent protects:",
                        ["Brand name", "Invention", "Song", "Trade secret"],
                        1,
                        "A patent protects an invention for a limited time."
                    ),
                    mcq(
                        "Linux is:",
                        ["Proprietary", "Open source", "Freeware", "Shareware"],
                        1,
                        "Linux is open source, free to use and modify."
                    ),
                    mcq(
                        "Digital divide refers to:",
                        ["Internet speed", "Gap in access to technology", "Bandwidth", "Number of websites"],
                        1,
                        "Digital divide is the gap in access to technology across groups."
                    ),
                    mcq(
                        "DPDP Act 2023 is from:",
                        ["USA", "UK", "India", "China"],
                        2,
                        "The Digital Personal Data Protection Act 2023 is from India."
                    ),
                    mcq(
                        "Green IT focuses on:",
                        ["More screens", "Less energy and waste", "Faster CPU", "Larger data"],
                        1,
                        "Green IT aims to reduce the environmental impact of IT."
                    ),
                ],

                    questions: [
                        qa(
                            "Explain the key ethical issues in IT.",
                            "Information technology raises several ethical issues. Privacy is the most important, because vast amounts of personal data are collected, often without the user's clear consent. Intellectual property is a constant debate, as digital media can be copied perfectly with no quality loss. Online harassment and cyberbullying harm millions, especially the young. Misinformation and deepfakes threaten democracy and trust. AI systems can be biased, leading to unfair decisions. Finally, the energy used by data centres and electronic waste are growing environmental problems. All of these need clear laws and ethical behaviour.",
                            4
                        ),
                        qa(
                            "Differentiate between copyright, patent and trademark.",
                            "Copyright protects original literary, artistic and musical works such as books, songs, paintings and software code, and it lasts for the life of the author plus 60 years in India. A patent protects a new invention or process for 20 years, and it requires that the invention be novel, non obvious and useful. A trademark protects a brand name, logo or slogan that identifies the source of goods or services, and it can last indefinitely as long as it is renewed. Copyright covers expression, patent covers invention, and trademark covers identity.",
                            4
                        ),
                        qa(
                            "What is the digital divide? How can it be reduced?",
                            "The digital divide is the gap between those who have easy access to digital technology and those who do not, based on factors such as geography, income, education, age or gender. It affects access to information, education, jobs and government services. It can be reduced by building broadband infrastructure in rural and remote areas, subsidising devices and internet connections for low income families, teaching digital literacy in schools and community centres, designing local language content, and ensuring that women and the elderly are not left behind in the digital economy.",
                            4
                        ),
                        qa(
                            "What is open source? Name two open source licences.",
                            "Open source software has source code that anyone can freely view, modify, use and distribute. This encourages collaboration, transparency and rapid improvement, and reduces the cost of software. The most common open source licences are the GNU General Public License, or GPL, which requires that any modified version also be open source, and the MIT License, which is permissive and allows the code to be used in proprietary software as long as the copyright notice is preserved. Linux, Firefox, Apache and Python are famous examples of open source projects.",
                            4
                        ),
                    ],
  }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit2Topics = [
    databaseConcepts,
    sdlc,
    dataAnalytics,
    itServices,
    ethics,
];


