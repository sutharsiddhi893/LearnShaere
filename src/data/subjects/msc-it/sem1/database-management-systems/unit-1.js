/* =========================================================
   MSc-IT • SEM 1 • Database Management Systems
   UNIT 1 — Introduction
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
   TOPIC 1 — Introduction to Database and DBMS
========================================================= */

const introToDatabaseAndDBMS = createTopic(
    "introduction-to-database-and-dbms",
    "Introduction to Database and DBMS",

    [
        definition(
            "Database",
            "An organised collection of structured data stored electronically in a computer system. A database allows efficient storage, retrieval, modification and deletion of data."
        ),

        definition(
            "DBMS (Database Management System)",
            "A software system that provides an interface for users and applications to create, manage, manipulate and control access to a database. Examples include Oracle, MySQL, PostgreSQL, SQL Server and MongoDB."
        ),

        text(
            "Before the advent of databases, organisations stored data in flat files — text files or spreadsheets. As data volumes grew and multiple users needed simultaneous access, the limitations of file-based storage became obvious. The DBMS was developed to solve these problems by providing centralised, controlled and efficient data management."
        ),

        heading("Characteristics of a Database"),

        list([
            "It is a shared collection of logically related data.",
            "It is designed to meet the information needs of an organisation.",
            "Data is stored in a structured format with minimal redundancy.",
            "It supports concurrent access by multiple users.",
            "It provides security and access control mechanisms.",
            "It ensures data integrity through constraints and rules.",
            "It provides backup and recovery facilities.",
        ]),

        heading("Components of a Database System"),

        table(
            ["Component", "Description"],
            [
                ["Hardware", "The physical devices: servers, storage, network equipment."],
                ["Software", "The DBMS software and application programs."],
                ["Data", "The actual information stored in the database."],
                ["Procedures", "Rules and instructions for using the DBMS."],
                ["Users", "People who interact with the database system."],
            ]
        ),

        heading("Functions of a DBMS"),

        list([
            "Data Definition — defining the structure, types and constraints of data using DDL.",
            "Data Manipulation — inserting, updating, deleting and retrieving data using DML.",
            "Data Security — controlling who can access what data through authentication and authorisation.",
            "Data Integrity — enforcing rules that ensure data accuracy and consistency.",
            "Concurrency Control — managing simultaneous access by multiple users without conflicts.",
            "Backup and Recovery — protecting data against hardware failures and software errors.",
            "Data Dictionary Management — storing metadata about the database structure.",
        ]),

        heading("Popular DBMS Software"),

        table(
            ["DBMS", "Type", "Developer", "License"],
            [
                ["Oracle Database", "Relational", "Oracle Corporation", "Commercial"],
                ["MySQL", "Relational", "Oracle Corporation", "Open Source (GPL)"],
                ["PostgreSQL", "Relational", "PostgreSQL Global Dev Group", "Open Source"],
                ["SQL Server", "Relational", "Microsoft", "Commercial"],
                ["MongoDB", "Document (NoSQL)", "MongoDB Inc.", "Open Source"],
                ["Redis", "Key-Value (NoSQL)", "Redis Ltd.", "Open Source"],
                ["SQLite", "Relational (Embedded)", "SQLite Consortium", "Public Domain"],
            ]
        ),

        heading("Advantages of Using a DBMS"),

        list([
            "Reduces data redundancy and inconsistency.",
            "Enables data sharing among multiple users and applications.",
            "Enforces data integrity and security constraints.",
            "Provides efficient data access through indexing and query optimisation.",
            "Supports concurrent access with transaction management.",
            "Offers backup and recovery mechanisms.",
            "Provides data independence — changes in storage do not affect applications.",
        ]),

        heading("Disadvantages of a DBMS"),

        list([
            "High cost of DBMS software, hardware and trained personnel.",
            "Complexity in design, implementation and administration.",
            "Performance overhead compared to simple file-based systems for small applications.",
            "Risk of centralised failure — if the database server goes down, all users are affected.",
            "Requires regular maintenance, tuning and updates.",
        ]),

        keyPoints([
            "A database is an organised collection of structured data; a DBMS is the software that manages it.",
            "A database system has five components: hardware, software, data, procedures and users.",
            "Key DBMS functions include data definition, manipulation, security, integrity and concurrency control.",
            "DBMS advantages include reduced redundancy, data sharing, integrity enforcement and data independence.",
            "DBMS disadvantages include high cost, complexity and centralised failure risk.",
        ]),
    ],

    {
        summary:
            "Understand what a database and DBMS are, their components, functions, advantages, disadvantages and popular DBMS software.",
        minutes: 11,
        tags: ["dbms", "introduction", "database", "important"],

        mcqs: [
            mcq(
                "A DBMS is:",
                ["A programming language", "Software that manages a database", "A type of hardware", "A data model"],
                1,
                "A DBMS is a software system that provides an interface to create, manage and control access to a database."
            ),
            mcq(
                "Which of the following is NOT a component of a database system?",
                ["Hardware", "Software", "Compiler", "Users"],
                2,
                "The five components are hardware, software, data, procedures and users. A compiler is not a component."
            ),
            mcq(
                "Which DBMS function ensures that multiple users can access data simultaneously without conflicts?",
                ["Data Definition", "Data Security", "Concurrency Control", "Backup and Recovery"],
                2,
                "Concurrency control manages simultaneous access by multiple users to prevent conflicts."
            ),
            mcq(
                "Which of the following is an open-source relational DBMS?",
                ["Oracle Database", "SQL Server", "PostgreSQL", "MongoDB"],
                2,
                "PostgreSQL is an open-source relational DBMS. MongoDB is open-source but NoSQL."
            ),
            mcq(
                "Data independence means:",
                ["Data cannot be accessed", "Changes in storage structure do not affect applications", "Data is stored in multiple places", "Data is encrypted"],
                1,
                "Data independence means that changes at one level of the database architecture do not affect the levels above it."
            ),
            mcq(
                "Which is a disadvantage of using a DBMS?",
                ["Data sharing", "High cost and complexity", "Data integrity", "Reduced redundancy"],
                1,
                "High cost of software, hardware and trained personnel, along with complexity, are disadvantages of DBMS."
            ),
        ],

        questions: [
            qa(
                "Define database and DBMS. Explain the components of a database system.",
                "A database is an organised collection of structured data stored electronically that allows efficient storage, retrieval, modification and deletion of data. A DBMS is a software system that provides an interface for users and applications to create, manage, manipulate and control access to a database. A database system consists of five components: hardware (servers, storage devices), software (the DBMS and application programs), data (the actual information stored), procedures (rules and instructions for using the system) and users (people who interact with the system such as administrators, developers and end users).",
                5
            ),
            qa(
                "Explain the advantages and disadvantages of using a DBMS.",
                "The advantages of a DBMS include reduced data redundancy and inconsistency, enabling data sharing among multiple users, enforcing data integrity and security constraints, providing efficient data access through indexing and query optimisation, supporting concurrent access with transaction management, offering backup and recovery mechanisms, and providing data independence. The disadvantages include high cost of software, hardware and trained personnel, complexity in design and administration, performance overhead for small applications compared to simple file systems, risk of centralised failure if the server goes down, and the need for regular maintenance and tuning.",
                5
            ),
            qa(
                "List and explain any five functions of a DBMS.",
                "Data definition allows defining the structure, types and constraints of data using Data Definition Language. Data manipulation allows inserting, updating, deleting and retrieving data using Data Manipulation Language. Data security controls who can access what data through authentication and authorisation mechanisms. Data integrity enforces rules that ensure data accuracy and consistency, such as primary key and foreign key constraints. Concurrency control manages simultaneous access by multiple users to prevent conflicts and ensure data consistency through locking and transaction management.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — File System versus DBMS
========================================================= */

const fileSystemVsDBMS = createTopic(
    "file-system-versus-dbms",
    "File System versus DBMS",

    [
        text(
            "Before DBMS, organisations used file processing systems where each application maintained its own set of files. Understanding the limitations of file systems helps appreciate why DBMS was developed."
        ),

        heading("File Processing System"),

        definition(
            "File Processing System",
            "An approach where each application program defines and manages its own data files independently. There is no centralised control over data."
        ),

        code(
            `Example: A college using file-based system

Payroll Department:
  → payroll.dat (employee_id, name, salary, department)

Admissions Department:
  → students.dat (student_id, name, course, fees)

Library Department:
  → library.dat (member_id, name, books_issued)

Problem: "name" and "id" are stored in three separate files
with no connection between them.`,
            "text",
            "File-based system in a college"
        ),

        heading("Limitations of File Processing Systems"),

        table(
            ["Limitation", "Description", "Example"],
            [
                ["Data Redundancy", "Same data stored in multiple files", "Student name stored in admissions, library and hostel files"],
                ["Data Inconsistency", "Different copies of the same data may not agree", "Address updated in one file but not in others"],
                ["Difficulty in Accessing Data", "Each new query requires writing a new program", "Finding students with marks above 90 needs a new program"],
                ["Data Isolation", "Data scattered in various files and formats", "Combining payroll and attendance data is difficult"],
                ["Integrity Problems", "No centralised enforcement of constraints", "Nothing prevents entering a negative salary"],
                ["Atomicity Problems", "Partial updates may leave data inconsistent", "Power failure during a bank transfer debits one account but does not credit the other"],
                ["Concurrent Access Anomalies", "Multiple users updating the same file simultaneously", "Two clerks booking the same seat at the same time"],
                ["Security Problems", "Difficult to enforce access controls per data item", "A clerk should see names but not salaries"],
            ]
        ),

        heading("How DBMS Solves These Problems"),

        table(
            ["File System Problem", "DBMS Solution"],
            [
                ["Data Redundancy", "Centralised storage with normalisation reduces duplication"],
                ["Data Inconsistency", "Single copy of data; updates are reflected everywhere"],
                ["Difficulty in Accessing Data", "SQL allows ad-hoc queries without writing new programs"],
                ["Data Isolation", "All data is integrated in one database with relationships"],
                ["Integrity Problems", "Constraints (PK, FK, CHECK) enforce rules automatically"],
                ["Atomicity Problems", "Transactions with ACID properties ensure all-or-nothing"],
                ["Concurrent Access Anomalies", "Locking and isolation levels manage concurrent access"],
                ["Security Problems", "GRANT and REVOKE commands control access at table and column level"],
            ]
        ),

        heading("Comparison Table"),

        table(
            ["Aspect", "File System", "DBMS"],
            [
                ["Data Redundancy", "High — same data in many files", "Low — controlled through normalisation"],
                ["Data Consistency", "Poor — copies may disagree", "High — single source of truth"],
                ["Data Sharing", "Difficult — each app owns its files", "Easy — multiple users and apps share data"],
                ["Query Flexibility", "New program needed for each query", "SQL supports ad-hoc queries"],
                ["Security", "File-level only", "Row-level and column-level access control"],
                ["Concurrency", "Not supported well", "Managed through locking and transactions"],
                ["Backup and Recovery", "Manual and unreliable", "Automated with transaction logs"],
                ["Data Independence", "None — programs depend on file format", "High — logical and physical independence"],
                ["Cost", "Low", "High"],
                ["Complexity", "Simple", "Complex"],
                ["Best For", "Small, single-user applications", "Large, multi-user, data-intensive applications"],
            ]
        ),

        note(
            "File systems are still appropriate for simple, single-user applications with small data volumes, such as a personal to-do list or a configuration file. DBMS is preferred when data is shared, voluminous or requires integrity and security.",
            "tip",
            "When to Use What"
        ),

        keyPoints([
            "File systems store data in independent files, leading to redundancy and inconsistency.",
            "DBMS centralises data management, reducing redundancy and enforcing integrity.",
            "DBMS provides query flexibility through SQL without writing new programs for each query.",
            "DBMS supports concurrent access, security and automated backup and recovery.",
            "File systems are simpler and cheaper, suitable for small single-user applications.",
        ]),
    ],

    {
        summary:
            "Compare file processing systems with DBMS, understand the limitations of file systems and how DBMS addresses each one.",
        minutes: 11,
        tags: ["dbms", "file-system", "comparison", "important"],

        mcqs: [
            mcq(
                "Data redundancy means:",
                ["Data is encrypted", "Same data is stored in multiple places", "Data is deleted", "Data is compressed"],
                1,
                "Data redundancy occurs when the same data is duplicated across multiple files or tables."
            ),
            mcq(
                "In a file system, what happens when a new type of query is needed?",
                ["SQL is used", "A new program must be written", "The DBMS handles it", "The file is deleted"],
                1,
                "File systems lack query languages, so each new query requires writing a new application program."
            ),
            mcq(
                "Which DBMS feature ensures that a bank transfer either fully completes or does not happen at all?",
                ["Concurrency control", "Data independence", "Transaction atomicity", "Data redundancy"],
                2,
                "Atomicity, part of ACID properties, ensures that a transaction is all-or-nothing."
            ),
            mcq(
                "Data inconsistency arises because:",
                ["Data is encrypted", "Different copies of the same data may not agree", "Data is too large", "The DBMS is slow"],
                1,
                "When the same data exists in multiple files and one copy is updated without updating others, inconsistency results."
            ),
            mcq(
                "Which is better suited for a large multi-user application?",
                ["File system", "Spreadsheet", "DBMS", "Text file"],
                2,
                "DBMS is designed for large, multi-user, data-intensive applications with security and concurrency needs."
            ),
        ],

        questions: [
            qa(
                "Explain any five limitations of file processing systems.",
                "Data redundancy occurs because the same data, such as a student's name, is stored in multiple departmental files independently. Data inconsistency arises when one copy is updated but others are not, such as an address change reflected in admissions but not in the library file. Difficulty in accessing data means each new query requires writing a new program because there is no query language. Data isolation means data is scattered across different files in different formats, making it hard to combine. Integrity problems arise because there is no centralised mechanism to enforce constraints such as preventing negative salaries.",
                5
            ),
            qa(
                "How does a DBMS solve the problems of a file processing system?",
                "A DBMS solves data redundancy through centralised storage and normalisation, which minimises duplication. It solves data inconsistency by maintaining a single copy of data so that any update is reflected everywhere. Query flexibility is provided through SQL, which allows ad-hoc queries without writing new programs. Integrity problems are solved by enforcing constraints like primary keys, foreign keys and CHECK constraints. Concurrent access anomalies are managed through locking mechanisms and transaction isolation levels. Security is enforced through GRANT and REVOKE commands that control access at the table and column level.",
                5
            ),
            qa(
                "When would you choose a file system over a DBMS?",
                "A file system is preferable when the application is small, single-user and has a low data volume, such as a personal to-do list, a simple configuration file or a one-time data processing script. File systems are simpler to set up, require no special software or administration, and have lower cost. They are also suitable when data does not need to be shared among multiple users, when there are no complex integrity constraints, and when concurrent access is not required. For anything involving shared data, multiple users, complex queries or security requirements, a DBMS is the better choice.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — Data Models
========================================================= */

const dataModels = createTopic(
    "data-models",
    "Data Models",

    [
        definition(
            "Data Model",
            "A collection of conceptual tools for describing data, data relationships, data semantics and consistency constraints. A data model provides a way to structure and organise data in a database."
        ),

        text(
            "Data models define how data is logically structured, stored and manipulated. They serve as a bridge between the real-world enterprise and the physical storage. Choosing the right data model is one of the most important decisions in database design."
        ),

        heading("Categories of Data Models"),

        table(
            ["Category", "Level", "Purpose", "Examples"],
            [
                ["Conceptual (High-level)", "Close to user perception", "Describes what data is stored and relationships", "ER Model"],
                ["Logical (Representational)", "Implementation-oriented", "Maps conceptual model to a specific DBMS type", "Relational, Network, Hierarchical"],
                ["Physical (Low-level)", "Close to storage", "Describes how data is stored on disk", "B-trees, Hashing, Indexing"],
            ]
        ),

        heading("1. Hierarchical Data Model"),

        definition(
            "Hierarchical Model",
            "A data model that organises data in a tree-like structure with a single root node. Each parent node can have multiple children, but each child has exactly one parent, forming a one-to-many relationship."
        ),

        table(
            ["Feature", "Description"],
            [
                ["Structure", "Tree (inverted)"],
                ["Relationship", "One-to-many only"],
                ["Root", "Single root node"],
                ["Access", "Top-down traversal from root"],
                ["Example DBMS", "IBM IMS"],
                ["Limitation", "Cannot represent many-to-many relationships directly"],
            ]
        ),

        code(
            `Hierarchical Model Example: College

           College
           /      \\
      Science    Commerce
       /   \\        |
    Physics  Chem   Accounts
      |
   Lab`,
            "text",
            "Tree structure of hierarchical model"
        ),

        heading("2. Network Data Model"),

        definition(
            "Network Model",
            "A data model that extends the hierarchical model by allowing a child node to have multiple parents. It uses a graph structure and can represent many-to-many relationships."
        ),

        table(
            ["Feature", "Description"],
            [
                ["Structure", "Graph"],
                ["Relationship", "Many-to-many supported"],
                ["Standard", "CODASYL (Conference on Data Systems Languages)"],
                ["Access", "Through pointers and links"],
                ["Example DBMS", "IDMS, IDS"],
                ["Limitation", "Complex to design and navigate"],
            ]
        ),

        heading("3. Relational Data Model"),

        definition(
            "Relational Model",
            "A data model that represents data as a collection of tables (relations). Each table consists of rows (tuples) and columns (attributes). Proposed by E.F. Codd in 1970, it is the most widely used data model today."
        ),

        table(
            ["Relational Term", "Common Term", "Meaning"],
            [
                ["Relation", "Table", "A two-dimensional structure of rows and columns"],
                ["Tuple", "Row / Record", "A single entry in a table"],
                ["Attribute", "Column / Field", "A property or characteristic of an entity"],
                ["Domain", "Data type", "The set of permitted values for an attribute"],
                ["Degree", "Number of columns", "The number of attributes in a relation"],
                ["Cardinality", "Number of rows", "The number of tuples in a relation"],
                ["Key", "Identifier", "An attribute or set of attributes that uniquely identifies a tuple"],
            ]
        ),

        code(
            `Example: Student Table (Relation)

+----------+---------+--------+-------+
| Roll_No  | Name    | Course | Marks |   ← Attributes (Columns)
+----------+---------+--------+-------+
| M001     | Rahul   | MSc IT |  85   |   ← Tuple (Row)
| M002     | Priya   | MSc IT |  92   |   ← Tuple (Row)
| M003     | Amit    | MSc IT |  78   |   ← Tuple (Row)
+----------+---------+--------+-------+

Degree = 4 (four columns)
Cardinality = 3 (three rows)
Key = Roll_No (uniquely identifies each row)`,
            "text",
            "Relational table example"
        ),

        note(
            "The relational model is the foundation of all modern RDBMS software like MySQL, Oracle, PostgreSQL and SQL Server. Its simplicity, mathematical foundation and support for SQL make it the dominant data model.",
            "exam",
            "Frequently Asked"
        ),

        heading("4. Entity-Relationship (ER) Model"),

        definition(
            "ER Model",
            "A high-level conceptual data model that describes data in terms of entities, attributes and relationships. Proposed by Peter Chen in 1976, it is used during the initial design phase of a database."
        ),

        table(
            ["ER Concept", "Symbol", "Meaning"],
            [
                ["Entity", "Rectangle", "A real-world object or concept (e.g., Student)"],
                ["Attribute", "Oval", "A property of an entity (e.g., Name, Age)"],
                ["Relationship", "Diamond", "An association between entities (e.g., Enrolls)"],
                ["Key Attribute", "Underlined oval", "An attribute that uniquely identifies an entity"],
                ["Multivalued Attribute", "Double oval", "An attribute with multiple values (e.g., Phone numbers)"],
                ["Derived Attribute", "Dashed oval", "An attribute computed from others (e.g., Age from DOB)"],
                ["Weak Entity", "Double rectangle", "An entity that depends on another for identification"],
            ]
        ),

        heading("5. Object-Oriented Data Model"),

        definition(
            "Object-Oriented Model",
            "A data model that represents data as objects, similar to object-oriented programming. It supports encapsulation, inheritance and polymorphism."
        ),

        heading("6. NoSQL Data Models"),

        table(
            ["Type", "Structure", "Example"],
            [
                ["Document", "JSON-like documents", "MongoDB, CouchDB"],
                ["Key-Value", "Simple key-value pairs", "Redis, DynamoDB"],
                ["Column-Family", "Columns grouped into families", "Cassandra, HBase"],
                ["Graph", "Nodes and edges", "Neo4j, Amazon Neptune"],
            ]
        ),

        heading("Comparison of Classical Data Models"),

        table(
            ["Feature", "Hierarchical", "Network", "Relational"],
            [
                ["Structure", "Tree", "Graph", "Tables"],
                ["Relationships", "One-to-many", "Many-to-many", "All types via keys"],
                ["Ease of use", "Moderate", "Complex", "Simple"],
                ["Query language", "Proprietary", "DML (CODASYL)", "SQL"],
                ["Data independence", "Low", "Low", "High"],
                ["Flexibility", "Rigid", "Moderate", "High"],
                ["Popularity", "Legacy", "Legacy", "Dominant"],
            ]
        ),

        keyPoints([
            "Data models describe how data is structured, stored and manipulated in a database.",
            "The hierarchical model uses a tree structure; the network model uses a graph.",
            "The relational model represents data as tables and is the most widely used model today.",
            "The ER model is a conceptual tool used during the initial design phase.",
            "NoSQL models (document, key-value, column-family, graph) handle unstructured and semi-structured data.",
        ]),
    ],

    {
        summary:
            "Learn the major data models: hierarchical, network, relational, ER, object-oriented and NoSQL, with their structures and comparisons.",
        minutes: 12,
        tags: ["dbms", "data-models", "relational", "er-model", "important"],

        mcqs: [
            mcq(
                "Who proposed the relational data model?",
                ["Peter Chen", "E.F. Codd", "Charles Bachman", "James Gray"],
                1,
                "E.F. Codd proposed the relational data model in his 1970 paper."
            ),
            mcq(
                "In the relational model, a row is called a:",
                ["Attribute", "Domain", "Tuple", "Relation"],
                2,
                "A row in a relational table is called a tuple."
            ),
            mcq(
                "The hierarchical model supports which type of relationship?",
                ["Many-to-many", "One-to-one only", "One-to-many", "All types"],
                2,
                "The hierarchical model supports only one-to-many relationships (parent to children)."
            ),
            mcq(
                "In an ER diagram, an entity is represented by a:",
                ["Oval", "Diamond", "Rectangle", "Triangle"],
                2,
                "Entities are represented by rectangles in ER diagrams."
            ),
            mcq(
                "MongoDB is an example of which type of NoSQL database?",
                ["Key-Value", "Graph", "Document", "Column-Family"],
                2,
                "MongoDB stores data as JSON-like documents."
            ),
            mcq(
                "The number of columns in a relation is called its:",
                ["Cardinality", "Degree", "Domain", "Tuple"],
                1,
                "The degree of a relation is the number of attributes (columns) it has."
            ),
        ],

        questions: [
            qa(
                "Explain the relational data model with its key terms.",
                "The relational data model, proposed by E.F. Codd in 1970, represents data as a collection of tables called relations. Each relation consists of rows called tuples and columns called attributes. The domain is the set of permitted values for an attribute. The degree is the number of attributes in a relation, and the cardinality is the number of tuples. A key is an attribute or set of attributes that uniquely identifies each tuple. For example, in a Student table with columns Roll_No, Name, Course and Marks, the degree is 4, each row is a tuple, and Roll_No serves as the key because it uniquely identifies each student.",
                5
            ),
            qa(
                "Compare the hierarchical, network and relational data models.",
                "The hierarchical model organises data in a tree structure with a single root, supporting only one-to-many relationships, and is rigid and difficult to modify. The network model extends the hierarchical model by using a graph structure that supports many-to-many relationships through pointers, but it is complex to design and navigate. The relational model represents data as tables with rows and columns, supports all relationship types through keys, provides high data independence, uses SQL as a standard query language, and is simple and flexible. The relational model is the dominant model today, while hierarchical and network models are considered legacy.",
                5
            ),
            qa(
                "Explain the ER model and its components.",
                "The Entity-Relationship model, proposed by Peter Chen in 1976, is a high-level conceptual data model used during database design. It describes data in terms of entities, attributes and relationships. An entity, represented by a rectangle, is a real-world object such as Student or Course. An attribute, represented by an oval, is a property of an entity such as Name or Age. A relationship, represented by a diamond, is an association between entities such as 'Enrolls'. Key attributes are underlined, multivalued attributes use double ovals, derived attributes use dashed ovals, and weak entities use double rectangles.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — Database Architecture and Data Independence
========================================================= */

const databaseArchitecture = createTopic(
    "database-architecture-and-data-independence",
    "Database Architecture and Data Independence",

    [
        definition(
            "Three-Schema Architecture",
            "A database architecture proposed by the ANSI/SPARC committee that separates the database into three levels: external (user view), conceptual (logical) and internal (physical). This separation provides data independence."
        ),

        text(
            "The three-schema architecture is designed to separate the user applications from the physical database. Each level serves a different purpose and audience, and changes at one level should not require changes at other levels."
        ),

        heading("The Three Levels"),

        table(
            ["Level", "Also Called", "Audience", "Description"],
            [
                ["External", "View level", "End users and application programmers", "Describes only the part of the database relevant to a particular user or application. Multiple external schemas can exist."],
                ["Conceptual", "Logical level", "Database administrators and designers", "Describes the entire database structure including all entities, attributes, relationships and constraints. Only one conceptual schema exists."],
                ["Internal", "Physical level", "System programmers and DBA", "Describes how data is physically stored on disk including file organisation, indexing, compression and encryption."],
            ]
        ),

        code(
            `Three-Schema Architecture Diagram

  ┌─────────────────────────────────────┐
  │         EXTERNAL LEVEL              │
  │  (User Views / External Schemas)    │
  │                                     │
  │  View 1: Student sees name, marks   │
  │  View 2: Admin sees all details     │
  │  View 3: Library sees name, id      │
  └──────────────┬──────────────────────┘
                 │  External/Conceptual Mapping
  ┌──────────────▼──────────────────────┐
  │       CONCEPTUAL LEVEL              │
  │   (Logical / Conceptual Schema)     │
  │                                     │
  │   Tables: Student, Course, Marks    │
  │   Relationships, Constraints, Keys  │
  └──────────────┬──────────────────────┘
                 │  Conceptual/Internal Mapping
  ┌──────────────▼──────────────────────┐
  │        INTERNAL LEVEL               │
  │    (Physical / Internal Schema)     │
  │                                     │
  │   Files, Indexes, B-trees, Blocks   │
  │   Storage allocation, Compression   │
  └─────────────────────────────────────┘`,
            "text",
            "Three-schema architecture"
        ),

        heading("Mappings"),

        definition(
            "Mapping",
            "The correspondence defined between two adjacent levels of the three-schema architecture. Mappings translate requests and results from one level to another."
        ),

        table(
            ["Mapping", "Between", "Purpose"],
            [
                ["External/Conceptual", "External and Conceptual levels", "Translates user view requests into conceptual schema operations"],
                ["Conceptual/Internal", "Conceptual and Internal levels", "Translates logical operations into physical storage operations"],
            ]
        ),

        heading("Data Independence"),

        definition(
            "Data Independence",
            "The ability to change the schema at one level of the database system without having to change the schema at the next higher level. It is the main advantage of the three-schema architecture."
        ),

        heading("Types of Data Independence"),

        table(
            ["Type", "Definition", "Example"],
            [
                [
                    "Logical Data Independence",
                    "The ability to change the conceptual schema without changing external schemas or application programs.",
                    "Adding a new column 'email' to the Student table does not affect existing user views that do not use email."
                ],
                [
                    "Physical Data Independence",
                    "The ability to change the internal schema without changing the conceptual schema or application programs.",
                    "Changing from a B-tree index to a hash index, or moving data to a new disk, does not affect the logical structure."
                ],
            ]
        ),

        note(
            "Physical data independence is easier to achieve than logical data independence because changes at the physical level (storage, indexing) are completely hidden from the logical level by the conceptual/internal mapping.",
            "exam",
            "Frequently Asked"
        ),

        heading("Why Data Independence Matters"),

        list([
            "Applications do not need to be rewritten when the database structure changes.",
            "The DBA can optimise physical storage without affecting users.",
            "New user views can be added without restructuring the entire database.",
            "It reduces maintenance cost and improves system longevity.",
            "It separates the concerns of users, designers and system administrators.",
        ]),

        keyPoints([
            "The three-schema architecture has external (user view), conceptual (logical) and internal (physical) levels.",
            "Mappings between levels translate requests and provide data independence.",
            "Logical data independence allows changing the conceptual schema without affecting external views.",
            "Physical data independence allows changing storage structures without affecting the conceptual schema.",
            "Physical data independence is easier to achieve than logical data independence.",
        ]),
    ],

    {
        summary:
            "Understand the ANSI/SPARC three-schema architecture, the role of mappings, and the two types of data independence.",
        minutes: 11,
        tags: ["dbms", "architecture", "three-schema", "data-independence", "important"],

        mcqs: [
            mcq(
                "The three-schema architecture was proposed by:",
                ["E.F. Codd", "Peter Chen", "ANSI/SPARC committee", "IBM"],
                2,
                "The ANSI/SPARC committee proposed the three-schema architecture."
            ),
            mcq(
                "Which level describes how data is physically stored on disk?",
                ["External", "Conceptual", "Internal", "View"],
                2,
                "The internal (physical) level describes storage structures, indexing and file organisation."
            ),
            mcq(
                "Logical data independence means:",
                ["Changing storage without affecting logical schema", "Changing conceptual schema without affecting external views", "Changing user views without affecting physical storage", "Changing hardware without affecting software"],
                1,
                "Logical data independence allows changes to the conceptual schema without requiring changes to external schemas."
            ),
            mcq(
                "How many conceptual schemas exist in a database?",
                ["Zero", "One", "Multiple", "Depends on users"],
                1,
                "There is exactly one conceptual schema that describes the entire logical structure of the database."
            ),
            mcq(
                "Which type of data independence is easier to achieve?",
                ["Logical", "Physical", "Both are equally easy", "Neither is achievable"],
                1,
                "Physical data independence is easier because physical changes are fully hidden by the conceptual/internal mapping."
            ),
        ],

        questions: [
            qa(
                "Explain the three-schema architecture of a database system.",
                "The three-schema architecture, proposed by the ANSI/SPARC committee, separates a database into three levels. The external level (view level) describes only the part of the database relevant to a particular user or application; multiple external schemas can exist. The conceptual level (logical level) describes the entire database structure including all entities, attributes, relationships and constraints; only one conceptual schema exists. The internal level (physical level) describes how data is physically stored on disk including file organisation, indexing and compression. Mappings between adjacent levels translate requests and results, providing data independence.",
                5
            ),
            qa(
                "Differentiate between logical and physical data independence with examples.",
                "Logical data independence is the ability to change the conceptual schema without changing external schemas or application programs. For example, adding a new column 'email' to the Student table does not affect existing user views that do not reference email. Physical data independence is the ability to change the internal schema without changing the conceptual schema. For example, changing from a B-tree index to a hash index, or moving data files to a different disk, does not affect the logical table structure or any application queries. Physical data independence is easier to achieve because physical changes are completely hidden by the conceptual/internal mapping.",
                5
            ),
            qa(
                "Why is data independence important in a database system?",
                "Data independence is important because it allows changes at one level of the database without requiring changes at higher levels. This means application programs do not need to be rewritten when the database structure changes, reducing maintenance cost. The DBA can optimise physical storage, add indexes or change file organisations without affecting users or applications. New user views can be added without restructuring the entire database. It separates the concerns of end users, database designers and system administrators, allowing each group to work independently. Overall, data independence improves system longevity and reduces the total cost of ownership.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 5 — Database Users and Administrators
========================================================= */

const databaseUsersAndAdmins = createTopic(
    "database-users-and-administrators",
    "Database Users and Administrators",

    [
        text(
            "A database system involves various types of users who interact with the database in different ways. Understanding their roles helps in designing appropriate interfaces, access controls and procedures."
        ),

        heading("Types of Database Users"),

        table(
            ["User Type", "Description", "How They Interact"],
            [
                ["Naive / Casual Users", "Non-technical users who access the database through pre-built applications or forms", "Use menu-driven applications, web forms, ATM interfaces"],
                ["Sophisticated Users", "Technical users who write their own queries using SQL or other query languages", "Write SQL queries directly, use analytical tools"],
                ["Application Programmers", "Software developers who write application programs that interact with the database", "Write code in Java, Python, PHP using database APIs"],
                ["Specialised Users", "Users who write specialised database applications that do not fit the traditional framework", "AI/ML engineers, data scientists, CAD/CAM users"],
                ["Database Administrators (DBA)", "Technical staff responsible for managing and maintaining the database system", "Use administrative tools and SQL commands"],
            ]
        ),

        heading("Database Administrator (DBA)"),

        definition(
            "Database Administrator (DBA)",
            "The person or team responsible for the overall management, control, maintenance and security of the database system. The DBA has the highest level of access and authority."
        ),

        heading("Responsibilities of a DBA"),

        list([
            "Schema Definition — creating and modifying the database schema using DDL.",
            "Storage Structure and Access Method Definition — deciding how data is physically stored and indexed.",
            "Schema and Physical Organisation Modification — restructuring the database as requirements change.",
            "Granting Authorisation — controlling who can access what data using GRANT and REVOKE.",
            "Routine Maintenance — backup, recovery, performance monitoring and tuning.",
            "Ensuring Data Integrity — defining and enforcing constraints and business rules.",
            "Managing User Accounts — creating accounts, setting passwords and assigning roles.",
            "Capacity Planning — forecasting storage and performance needs.",
        ], true),

        heading("Database Languages"),

        table(
            ["Language", "Full Form", "Purpose", "Commands"],
            [
                ["DDL", "Data Definition Language", "Define and modify database structure", "CREATE, ALTER, DROP, TRUNCATE"],
                ["DML", "Data Manipulation Language", "Insert, update, delete and retrieve data", "SELECT, INSERT, UPDATE, DELETE"],
                ["DCL", "Data Control Language", "Control access to data", "GRANT, REVOKE"],
                ["TCL", "Transaction Control Language", "Manage transactions", "COMMIT, ROLLBACK, SAVEPOINT"],
            ]
        ),

        code(
            `-- DDL: Creating a table
CREATE TABLE Student (
    Roll_No VARCHAR(10) PRIMARY KEY,
    Name VARCHAR(50) NOT NULL,
    Course VARCHAR(30),
    Marks INT CHECK (Marks >= 0 AND Marks <= 100)
);

-- DML: Inserting data
INSERT INTO Student VALUES ('M001', 'Rahul', 'MSc IT', 85);

-- DML: Querying data
SELECT Name, Marks FROM Student WHERE Marks > 80;

-- DML: Updating data
UPDATE Student SET Marks = 90 WHERE Roll_No = 'M001';

-- DCL: Granting access
GRANT SELECT ON Student TO librarian;

-- TCL: Committing a transaction
COMMIT;`,
            "sql",
            "Examples of DDL, DML, DCL and TCL commands"
        ),

        note(
            "SELECT is technically a DML command because it retrieves data, though some textbooks classify it separately as DQL (Data Query Language). In most exams, SELECT is considered part of DML.",
            "tip",
            "Classification Note"
        ),

        heading("Database System Structure"),

        table(
            ["Component", "Function"],
            [
                ["Query Processor", "Parses, validates and optimises SQL queries"],
                ["Storage Manager", "Manages disk storage, buffer management and file access"],
                ["Transaction Manager", "Ensures ACID properties of transactions"],
                ["Catalog / Data Dictionary", "Stores metadata about database objects"],
                ["Query Optimiser", "Chooses the most efficient execution plan for a query"],
            ]
        ),

        keyPoints([
            "Database users include naive users, sophisticated users, application programmers, specialised users and DBAs.",
            "The DBA is responsible for schema definition, security, maintenance, integrity and performance tuning.",
            "DDL defines structure (CREATE, ALTER, DROP); DML manipulates data (SELECT, INSERT, UPDATE, DELETE).",
            "DCL controls access (GRANT, REVOKE); TCL manages transactions (COMMIT, ROLLBACK).",
            "The query processor, storage manager and transaction manager are key components of a DBMS.",
        ]),
    ],

    {
        summary:
            "Learn the types of database users, the role and responsibilities of the DBA, and the four categories of database languages.",
        minutes: 10,
        tags: ["dbms", "users", "dba", "sql", "ddl", "dml", "important"],

        mcqs: [
            mcq(
                "A user who writes SQL queries directly is called a:",
                ["Naive user", "Sophisticated user", "Application programmer", "DBA"],
                1,
                "Sophisticated users are technical users who write their own queries using SQL."
            ),
            mcq(
                "Which language is used to create and modify database tables?",
                ["DML", "DCL", "DDL", "TCL"],
                2,
                "DDL (Data Definition Language) includes commands like CREATE, ALTER and DROP."
            ),
            mcq(
                "GRANT and REVOKE are commands of which language?",
                ["DDL", "DML", "DCL", "TCL"],
                2,
                "DCL (Data Control Language) includes GRANT and REVOKE for access control."
            ),
            mcq(
                "Which of the following is NOT a responsibility of the DBA?",
                ["Schema definition", "Writing application UI code", "Granting authorisation", "Backup and recovery"],
                1,
                "Writing application UI code is the job of application programmers, not the DBA."
            ),
            mcq(
                "COMMIT and ROLLBACK belong to:",
                ["DDL", "DML", "DCL", "TCL"],
                3,
                "TCL (Transaction Control Language) includes COMMIT, ROLLBACK and SAVEPOINT."
            ),
            mcq(
                "The component that chooses the most efficient execution plan for a query is the:",
                ["Storage Manager", "Transaction Manager", "Query Optimiser", "Data Dictionary"],
                2,
                "The query optimiser analyses multiple execution plans and selects the most efficient one."
            ),
        ],

        questions: [
            qa(
                "Explain the different types of database users.",
                "Naive or casual users are non-technical users who access the database through pre-built applications, web forms or ATM interfaces without writing any queries. Sophisticated users are technical users such as analysts and engineers who write their own SQL queries to retrieve and analyse data. Application programmers are software developers who write programs in languages like Java, Python or PHP that interact with the database through APIs and embedded SQL. Specialised users work on applications that do not fit the traditional database framework, such as AI/ML engineers and data scientists. The Database Administrator manages the entire database system.",
                5
            ),
            qa(
                "What are the responsibilities of a Database Administrator?",
                "The DBA is responsible for schema definition, which involves creating and modifying the database structure using DDL. The DBA defines storage structures and access methods, deciding how data is physically stored and indexed. Schema and physical organisation modification is done as requirements evolve. The DBA grants and revokes authorisation to control data access. Routine maintenance includes backup, recovery, performance monitoring and tuning. The DBA ensures data integrity by defining and enforcing constraints. User account management involves creating accounts, setting passwords and assigning roles. Capacity planning forecasts future storage and performance needs.",
                5
            ),
            qa(
                "Explain DDL, DML, DCL and TCL with examples of commands.",
                "DDL (Data Definition Language) defines and modifies the database structure. Its commands include CREATE TABLE to create a new table, ALTER TABLE to modify an existing table, and DROP TABLE to delete a table. DML (Data Manipulation Language) manipulates data within tables. Its commands include SELECT to retrieve data, INSERT to add new rows, UPDATE to modify existing rows and DELETE to remove rows. DCL (Data Control Language) controls access to data. Its commands include GRANT to give privileges and REVOKE to remove them. TCL (Transaction Control Language) manages transactions. Its commands include COMMIT to save changes permanently, ROLLBACK to undo changes and SAVEPOINT to set a point within a transaction.",
                5
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit1Topics = [
    introToDatabaseAndDBMS,
    fileSystemVsDBMS,
    dataModels,
    databaseArchitecture,
    databaseUsersAndAdmins,
];