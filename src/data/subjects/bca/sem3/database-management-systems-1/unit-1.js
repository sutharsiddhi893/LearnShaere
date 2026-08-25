/* =========================================================
   BCA � SEM 3 � Database Management Systems
   UNIT 1 � Database Concepts, ER Model and Relational Model
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
   TOPIC 1 � Introduction to Databases
========================================================= */

const introductionToDatabases = createTopic(
    "introduction-to-databases",
    "Introduction to Databases",

    [
        definition(
            "Database",
            "An organised collection of structured data, typically stored electronically in a computer system, and managed by a Database Management System (DBMS)."
        ),

        heading("Why Databases?"),

        list([
            "Shared access: many users can use the data at the same time.",
            "Reduced redundancy: data is stored once and reused.",
            "Data integrity: rules ensure the data is accurate and consistent.",
            "Security: only authorised users can read or modify the data.",
            "Backup and recovery: data can be restored after failure.",
            "Query support: powerful languages such as SQL allow complex questions.",
        ]),

        heading("Data vs Information vs Database"),

    table(
        ["Term", "Definition", "Example"],
        [
            ["Data", "Raw facts, figures and symbols", "42, 'Amit', 3.14"],
            ["Information", "Processed data that has meaning", "Amit scored 42 out of 50"],
            ["Database", "Organised collection of related data", "Student database of a college"],
        ]
    ),


table(
    ["Basis", "File System", "DBMS"],
    [
        ["Structure", "Flat files", "Tables, schemas, relations"],
        ["Redundancy", "High, same data in many files", "Low, single source of truth"],
        ["Consistency", "Hard to maintain", "Automatic via constraints"],
        ["Security", "Weak, file level", "Strong, user level, role based"],
        ["Concurrency", "Difficult", "Built in locking and transactions"],
        ["Query", "Manual scanning", "SQL, very powerful"],
        ["Backup", "Manual", "Automatic tools"],
        ["Examples", "Text files, CSV", "MySQL, Oracle, PostgreSQL"],
    ]
),

    note(
        "A DBMS is not the same as a database. The database is the data itself, while the DBMS is the software that lets us create, read, update and delete that data. MySQL is a DBMS, the data inside it is the database.",
        "exam",
        "Frequently Asked"
    ),


list([
    "Data definition: CREATE, ALTER, DROP.",
    "Data manipulation: INSERT, UPDATE, DELETE.",
    "Data retrieval: SELECT with powerful filters and joins.",
    "Data security: authentication, authorisation, encryption.",
    "Concurrency control: many users, one consistent view.",
    "Backup and recovery: protect against data loss.",
    "Integrity: primary key, foreign key, check, not null.",
]),


list([
    "Internal level: physical storage, files, indexes, compression.",
    "Conceptual level: logical structure, tables, relationships, constraints.",
    "External level: view of the database for each user or application.",
    "Data independence: change internal without changing external.",
]),


table(
    ["User", "Role"],
    [
        ["DBA", "Database administrator, manages the entire DBMS"],
        ["Database designer", "Designs the schema and constraints"],
        ["Application developer", "Writes programs that use the database"],
        ["End user", "Queries the database through apps or reports"],
        ["System analyst", "Identifies user needs and translates to requirements"],
    ]
),

    keyPoints([
        "Database = organised collection of data, managed by DBMS.",
        "DBMS provides data definition, manipulation, security and recovery.",
        "Three schema: internal, conceptual and external.",
        "Data independence means changing one level without affecting others.",
        "DBMS solves problems of file systems: redundancy, integrity, security.",
        ]),
    ],

    {
        summary:
    "Understand the meaning of database and DBMS, their advantages over file systems, three schema architecture and the types of users.",
        minutes: 11,
            tags: ["database", "dbms", "architecture", "important"],

                mcqs: [
                    mcq(
                        "DBMS stands for:",
                        ["Database Management System", "Data Backup Management System", "Digital Base Mapping System", "Direct Binary Memory System"],
                        0,
                        "DBMS is Database Management System."
                    ),
                    mcq(
                        "Which is an example of a DBMS?",
                        ["MS Word", "MySQL", "Photoshop", "Excel"],
                        1,
                        "MySQL is a popular DBMS."
                    ),
                    mcq(
                        "Three schema architecture has:",
                        ["1 level", "2 levels", "3 levels", "4 levels"],
                        2,
                        "The three levels are internal, conceptual and external."
                    ),
                    mcq(
                        "Which is NOT a DBMS feature?",
                        ["Data definition", "Data manipulation", "Hardware repair", "Security"],
                        2,
                        "Hardware repair is the job of the system administrator, not the DBMS."
                    ),
                    mcq(
                        "Data redundancy means:",
                        ["Data is secure", "Same data stored in many places", "Data is fast", "Data is free"],
                        1,
                        "Redundancy is the same data being stored in multiple files."
                    ),
                    mcq(
                        "DBA stands for:",
                        ["Database Application", "Database Administrator", "Data Backup Access", "Digital Base Access"],
                        1,
                        "DBA is Database Administrator."
                    ),
                ],

                    questions: [
                        qa(
                            "Differentiate between a database and a DBMS.",
                            "A database is an organised collection of related data, usually stored in a computer system, representing some aspect of the real world such as a college, a hospital or a bank. A DBMS, or Database Management System, is the software that allows us to define, create, maintain and manipulate the database. Examples of databases are the student database of a college or the inventory of a shop. Examples of DBMS are MySQL, Oracle, PostgreSQL and MongoDB. Without a DBMS, the database would just be a pile of files; the DBMS provides the tools to use it safely and efficiently.",
                            4
                        ),
                        qa(
                            "Explain the advantages of a DBMS over a file system.",
                            "A file system stores data in flat files managed by the operating system, while a DBMS provides a structured, powerful and secure way to manage data. The advantages of a DBMS are: reduced redundancy because data is stored once in the database, improved consistency because updates happen in one place, data integrity enforced through keys and constraints, security through user authentication and authorisation, concurrent access through locking, easy backup and recovery, and a powerful query language (SQL) to ask complex questions. File systems suffer from redundancy, inconsistency, weak security, no concurrency and no easy way to query the data.",
                            4
                        ),
                        qa(
                            "Explain the three schema architecture of a DBMS.",
                            "The three schema architecture, proposed by ANSI, separates the database into three levels of abstraction. The internal level describes the physical storage of the data: the files, the indexes, the disk blocks and the compression. The conceptual level describes the logical structure of the whole database: the tables, the columns, the relationships and the constraints, which all users agree on. The external level describes the view of the database that each user or application sees, which may be a subset of the conceptual schema. The benefit is data independence: a change in the internal schema, such as moving to a new disk, does not affect the conceptual or external schemas.",
                            4
                        ),
                        qa(
                            "List the different types of database users.",
                            "The main types are: the Database Administrator (DBA), who is responsible for installing, configuring and maintaining the DBMS, managing users, taking backups and tuning performance; the database designer, who designs the schema, the tables and the constraints based on the requirements; the application developer, who writes the programs that allow end users to interact with the database, using languages such as Java, Python or PHP; the end user, who uses the application to insert, update, query or report on the data without knowing anything about the database internals; and the system analyst, who studies the needs of the organisation and translates them into requirements for the database and the applications.",
                            4
                        ),
                    ],
  }
);

/* =========================================================
   TOPIC 2 � Entity Relationship Model
========================================================= */

const erModel = createTopic(
    "entity-relationship-model",
    "Entity Relationship Model",

    [
        definition(
            "ER Model",
            "A high level conceptual data model proposed by Peter Chen in 1976, used to describe the overall logical structure of a database in terms of entities, attributes and relationships."
        ),


    table(
        ["Component", "Symbol", "Description", "Example"],
        [
            ["Entity", "Rectangle", "Real world object with independent existence", "Student, Course, Book"],
            ["Weak Entity", "Double rectangle", "Depends on another entity for its existence", "Dependent, Account Transaction"],
            ["Attribute", "Oval", "Property of an entity", "name, age, roll number"],
            ["Key attribute", "Oval with underline", "Uniquely identifies an entity", "roll number, ISBN"],
            ["Multivalued attribute", "Double oval", "Can have many values", "phone numbers, hobbies"],
            ["Derived attribute", "Dashed oval", "Can be computed from another", "age from DOB, total"],
            ["Relationship", "Diamond", "Association between entities", "enrolls, writes"],
            ["Weak relationship", "Double diamond", "Links a weak entity to its owner", "contains"],
        ]
    ),


list([
    "Simple (atomic): cannot be divided, e.g. age, roll number.",
    "Composite: can be divided into smaller parts, e.g. name into first, middle, last.",
    "Single valued: only one value, e.g. date of birth.",
    "Multivalued: many values, e.g. phone numbers.",
    "Derived: computed from another attribute, e.g. age from date of birth.",
    "Key: uniquely identifies the entity, e.g. roll number, Aadhar.",
    "Null: not applicable or not known.",
]),

    note(
        "An attribute shown with a dashed oval, like age from date of birth, is a derived attribute. It is not stored but calculated when needed, which keeps the database clean and avoids inconsistency.",
        "tip",
        "Derived Attribute"
    ),


list([
    "Strong entity: has its own key attribute, exists on its own. Drawn as a single rectangle.",
    "Weak entity: depends on a strong entity for its existence, has no key of its own. Drawn as a double rectangle. Identified by a partial key, drawn as a dashed underline.",
    "Example: a Bank Account is a strong entity, but its Transactions are weak because a transaction only makes sense in relation to an account.",
]),


list([
    "One to One (1:1): each A is related to exactly one B and vice versa, e.g. person and passport.",
    "One to Many (1:N): each A is related to many B, but each B is related to one A, e.g. department and employees.",
    "Many to One (N:1): opposite of one to many.",
    "Many to Many (M:N): each A is related to many B and each B to many A, e.g. students and courses.",
]),


list([
    "Cardinality: how many instances of one entity relate to one instance of another.",
    "Participation: total (every instance must participate) or partial (some may not).",
    "A double line from an entity to a relationship means total participation.",
]),


code(
    `         +----------+
         �  STUDENT �
         +----------+
              � roll (PK)
              �
           enrolls
              �
         +----------+         +----------+
         �  COURSE  �         �   BOOK   �
         +----------+         +----------+
              � code (PK)            � isbn (PK)
              �                     �
              +--- uses ------------+

Students enroll in Courses. Courses use Books.
Many to many between Student and Course.
Many to many between Course and Book.
`,
    "text",
    "Sample ER diagram"
),


list([
    "Specialisation: top down, define subclasses from a superclass, e.g. Person ? Student, Teacher.",
    "Generalisation: bottom up, combine similar entities into a superclass.",
    "Aggregation: treat a relationship as a higher level entity.",
    "Inheritance: subclass inherits all attributes of the superclass.",
]),

    keyPoints([
        "ER model has entities, attributes and relationships.",
        "Key attribute is underlined, derived is dashed, multivalued is double oval.",
        "Cardinality: 1:1, 1:N, M:N.",
        "Strong entity has own key; weak entity depends on another.",
        "Specialisation and generalisation extend the basic ER model.",
        ]),
    ],

    {
        summary:
    "Master the ER model: entities, attributes, relationships, cardinality, weak entities and the extended ER features.",
        minutes: 13,
            tags: ["er-model", "entity", "relationship", "important"],

                mcqs: [
                    mcq(
                        "ER model was proposed by:",
                        ["Codd", "Chen", "Boyce", "Codd"],
                        1,
                        "Peter Chen proposed the ER model in 1976."
                    ),
                    mcq(
                        "Entity is represented by:",
                        ["Oval", "Rectangle", "Diamond", "Line"],
                        1,
                        "Entity is a rectangle in an ER diagram."
                    ),
                    mcq(
                        "Relationship is represented by:",
                        ["Oval", "Rectangle", "Diamond", "Double line"],
                        2,
                        "Relationship is a diamond."
                    ),
                    mcq(
                        "Multivalued attribute is shown as:",
                        ["Oval", "Double oval", "Dashed oval", "Underlined oval"],
                        1,
                        "Multivalued attribute uses a double oval."
                    ),
                    mcq(
                        "A weak entity is shown as:",
                        ["Single rectangle", "Double rectangle", "Diamond", "Oval"],
                        1,
                        "Weak entity is a double rectangle."
                    ),
                    mcq(
                        "Many to many relationship is shown as:",
                        ["1:1", "1:N", "M:N", "1"],
                        2,
                        "M:N means many to many."
                    ),
                ],

                    questions: [
                        qa(
                            "Explain the components of the ER model.",
                            "The Entity Relationship model, proposed by Peter Chen in 1976, is a high level conceptual tool used to design the overall structure of a database. Its three main components are entities, attributes and relationships. An entity is a real world object that has an independent existence, such as a Student, a Course or a Book, and is shown as a rectangle. An attribute is a property of an entity, such as name, age or roll number, and is shown as an oval. A relationship is an association between two or more entities, such as a Student enrolls in a Course, and is shown as a diamond. The model also includes weak entities, multivalued and derived attributes, and cardinality, all of which make the design more accurate.",
                            4
                        ),
                        qa(
                            "Differentiate between a strong and a weak entity.",
                            "A strong entity is one that can exist on its own and has a primary key to uniquely identify each of its instances. It is drawn as a single rectangle, e.g. Student with roll number as the key. A weak entity is one that cannot exist without being associated with a strong entity, and it does not have a primary key of its own. It is identified by combining its partial key with the primary key of the owner entity, and it is drawn as a double rectangle, e.g. the Transactions of a Bank Account. The relationship that connects a weak entity to its owner is called an identifying relationship, shown as a double diamond.",
                            4
                        ),
                        qa(
                            "Explain the different types of relationships with examples.",
                            "There are three main types of relationships based on cardinality. In a one to one (1:1) relationship, each instance of entity A is related to exactly one instance of entity B, e.g. each Person has one Passport. In a one to many (1:N) relationship, each instance of A is related to many instances of B, but each B is related to only one A, e.g. one Department has many Employees. In a many to many (M:N) relationship, each A is related to many B and each B to many A, e.g. a Student can enroll in many Courses and each Course can have many Students. The M:N relationship cannot be implemented directly in a relational database and must be converted into two 1:N relationships using a junction table.",
                            4
                        ),
                        qa(
                            "What is specialisation in the ER model?",
                            "Specialisation is a top down approach in the extended ER model in which a superclass is divided into one or more subclasses based on some distinguishing characteristic. The subclasses inherit all the attributes of the superclass and may have additional attributes of their own. For example, the superclass Person can be specialised into Student, Teacher and Staff, each with their own additional attributes. Specialisation models the is a relationship and allows the database to store common information once in the superclass and specific information in the subclass. It supports attribute inheritance and can be total, where every superclass must be one of the subclasses, or partial, where some may not be.",
                            4
                        ),
                    ],
  }
);

/* =========================================================
   TOPIC 3 � Relational Model
========================================================= */

const relationalModel = createTopic(
    "relational-model",
    "Relational Model",

    [
        definition(
            "Relational Model",
            "A data model proposed by E.F. Codd in 1970, in which data is organised in tables, called relations, made of rows (tuples) and columns (attributes), and manipulated using a relational query language such as SQL."
        ),

        heading("Terminology"),

        table(
            ["Formal Term", "Common Term", "Example"],
            [
                ["Relation", "Table", "Student"],
                ["Tuple", "Row or Record", "(1, 'Amit', 89)"],
                ["Attribute", "Column or Field", "roll, name, marks"],
                ["Domain", "Set of allowed values", "Integer, String, Date"],
                ["Cardinality", "Number of tuples", "1000 students"],
                ["Degree", "Number of attributes", "5 columns"],
            ]
        ),


    list([
        "Each cell contains a single atomic value.",
        "All values in a column are of the same domain.",
        "Each row is unique; no two rows are identical.",
        "The order of rows and columns is not significant.",
        "Each attribute has a unique name within the relation.",
    ]),


definition(
    "Key",
    "One or more attributes used to uniquely identify a row in a table."
),

    table(
        ["Key", "Description", "Example"],
        [
            ["Super key", "Any set of attributes that uniquely identifies a row", "roll or roll + name"],
            ["Candidate key", "Minimal super key, no attribute can be removed", "roll"],
            ["Primary key", "Chosen candidate key, cannot be null", "roll"],
            ["Alternate key", "Candidate keys not chosen as primary", "Aadhar"],
            ["Foreign key", "Attribute that refers to the primary key of another table", "dept_id in Employee"],
            ["Composite key", "Primary key made of more than one column", "(roll, course_id) in Enrolment"],
        ]
    ),

    note(
        "A foreign key is what implements the relationship between two tables. The foreign key in the child table must match an existing primary key in the parent table, or be NULL, to maintain referential integrity.",
        "exam",
        "Frequently Asked"
    ),


list([
    "Domain integrity: every attribute must have a valid value from its domain.",
    "Entity integrity: primary key cannot be null.",
    "Referential integrity: foreign key must match a primary key in the parent or be null.",
    "User defined integrity: any rule specific to the application, e.g. marks between 0 and 100.",
]),


steps([
    "Create a table for each strong entity, with its attributes as columns and the key as primary key.",
    "Create a table for each weak entity, with all its attributes plus the primary key of the owner as a composite primary key.",
    "For 1:1 relationship, add the primary key of one side as a foreign key in the other.",
    "For 1:N relationship, add the primary key of the one side as a foreign key in the many side.",
    "For M:N relationship, create a new junction table with the primary keys of both sides, together forming a composite key.",
    "Add the attributes of the relationship, if any, to the table where they belong.",
]),


code(
    `Student(roll, name, age, dept_id)
Department(dept_id, dept_name, hod)
Course(course_id, title, credits)
Enrolment(roll, course_id, grade)   -- M:N junction
`,
    "sql",
    "Tables after conversion"
),


definition(
    "Relational Algebra",
    "A procedural query language that takes one or two relations as input and produces a new relation as output. It forms the basis of SQL."
),

    table(
        ["Operation", "Symbol", "Use"],
        [
            ["Select", "s", "Pick rows that satisfy a condition"],
            ["Project", "p", "Pick specific columns"],
            ["Cartesian product", "�", "Combine every row of A with every row of B"],
            ["Union", "?", "Combine rows of two compatible relations"],
            ["Set difference", "-", "Rows in A but not in B"],
            ["Rename", "?", "Rename an attribute or relation"],
            ["Join", "?", "Combine related rows from two relations"],
            ["Natural join", "?", "Join on common attributes"],
        ]
    ),

    keyPoints([
        "Relational model uses tables made of rows and columns.",
        "Primary key uniquely identifies a row; foreign key links tables.",
        "Referential integrity: FK must match PK in parent or be null.",
        "M:N relationships become a junction table.",
        "Relational algebra is the basis of SQL.",
        ]),
    ],

    {
        summary:
    "Master the relational model: relations, tuples, keys, integrity constraints, ER to table conversion and relational algebra basics.",
        minutes: 13,
            tags: ["relational", "keys", "integrity", "algebra", "important"],

                mcqs: [
                    mcq(
                        "Relational model was proposed by:",
                        ["Peter Chen", "E.F. Codd", "Charles Bachman", "Edgar Codd"],
                        1,
                        "E.F. Codd proposed the relational model in 1970."
                    ),
                    mcq(
                        "A row in a table is called:",
                        ["Attribute", "Tuple", "Domain", "Schema"],
                        1,
                        "A row is a tuple in the relational model."
                    ),
                    mcq(
                        "Primary key cannot be:",
                        ["Unique", "Null", "Indexed", "Numeric"],
                        1,
                        "Primary key cannot be null, by entity integrity rule."
                    ),
                    mcq(
                        "Foreign key is used for:",
                        ["Speed", "Referential integrity", "Encryption", "Backup"],
                        1,
                        "Foreign key enforces referential integrity between tables."
                    ),
                    mcq(
                        "A M:N relationship becomes:",
                        ["One column", "Junction table", "View", "Trigger"],
                        1,
                        "M:N becomes a new junction table with the keys of both sides."
                    ),
                    mcq(
                        "s in relational algebra means:",
                        ["Select", "Project", "Join", "Union"],
                        0,
                        "s (sigma) is the select operation that picks rows."
                    ),
                ],

                    questions: [
                        qa(
                            "Differentiate between primary key, candidate key and super key.",
                            "A super key is any set of one or more attributes that uniquely identifies a row in a relation. It may contain extra attributes that are not strictly needed. A candidate key is a minimal super key, meaning no attribute can be removed without losing the unique identification. A relation can have more than one candidate key, for example both roll and Aadhar could uniquely identify a student. The primary key is the candidate key chosen by the database designer to be the main identifier of the row; it cannot be null and must be unique. The candidate keys that are not chosen are called alternate keys. The primary key is used in foreign key references and indexes.",
                            4
                        ),
                        qa(
                            "Explain referential integrity with an example.",
                            "Referential integrity is a constraint that ensures the relationship between two tables is consistent. It says that the value of a foreign key in the child table must either match an existing primary key in the parent table, or be null. For example, in a Department and Employee relationship, every employee must belong to a department. The dept_id in Employee is a foreign key that refers to dept_id in Department. With referential integrity on, an employee cannot be inserted with a dept_id that does not exist in the Department table, and a department cannot be deleted if it still has employees, unless the foreign key is set to cascade. This prevents orphan rows and keeps the data consistent.",
                            4
                        ),
                        qa(
                            "How do you convert an ER diagram with a many to many relationship into relational tables?",
                            "To convert a many to many relationship, follow three steps. First, create a table for each entity with its attributes, and choose a primary key for each. For example, Student(roll, name) and Course(course_id, title). Second, create a new table, called a junction table or bridge table, whose columns are the primary keys of both entities, and together they form the composite primary key. Add any attribute of the relationship to this table. For example, Enrolment(roll, course_id, grade). The composite key (roll, course_id) ensures that a student does not enrol in the same course twice. The two foreign keys enforce referential integrity with the parent tables. This converts the M:N relationship into two 1:N relationships.",
                            4
                        ),
                        qa(
                            "Explain the basic operations of relational algebra.",
                            "Relational algebra is a procedural language for querying relational databases, and it forms the theoretical foundation of SQL. The six basic operations are: select (s), which picks rows that satisfy a given condition; project (p), which picks specified columns; union (?), which combines rows of two relations that have the same columns; set difference (-), which returns rows in the first relation but not the second; Cartesian product (�), which combines every row of one relation with every row of another; and rename (?), which renames an attribute or a relation. From these primitives, the join (?) can be derived. SQL statements are translated by the query optimiser into a tree of relational algebra operations, which is then executed by the database engine.",
                            4
                        ),
                    ],
  }
);

/* =========================================================
   TOPIC 4 � SQL Basics
========================================================= */

const sqlBasics = createTopic(
    "sql-basics",
    "SQL Basics",

    [
        definition(
            "SQL",
            "Structured Query Language, the standard language for defining, manipulating and querying data in a relational database. Pronounced S Q L or sequel."
        ),


    table(
        ["Sub Language", "Purpose", "Commands"],
        [
            ["DDL", "Data Definition Language", "CREATE, ALTER, DROP, TRUNCATE, RENAME"],
            ["DML", "Data Manipulation Language", "INSERT, UPDATE, DELETE"],
            ["DQL", "Data Query Language", "SELECT"],
            ["DCL", "Data Control Language", "GRANT, REVOKE"],
            ["TCL", "Transaction Control Language", "COMMIT, ROLLBACK, SAVEPOINT"],
        ]
    ),


code(
    `CREATE DATABASE college;

CREATE TABLE Student (
    roll   INT PRIMARY KEY,
    name   VARCHAR(50) NOT NULL,
    age    INT CHECK (age >= 0),
    city   VARCHAR(30) DEFAULT 'Surat',
    dept   INT REFERENCES Department(dept_id)
);

ALTER TABLE Student ADD email VARCHAR(50);
ALTER TABLE Student DROP COLUMN email;
DROP TABLE Student;
TRUNCATE TABLE Student;   -- deletes all rows
`,
    "sql",
    "Common DDL commands"
),


table(
    ["Type", "Use", "Example"],
    [
        ["INT", "Whole numbers", "42"],
        ["DECIMAL(p, s)", "Exact numbers", "DECIMAL(7, 2) for money"],
        ["FLOAT, DOUBLE", "Approximate numbers", "3.14159"],
        ["CHAR(n)", "Fixed length string", "CHAR(2) for state code"],
        ["VARCHAR(n)", "Variable length string", "VARCHAR(50) for name"],
        ["TEXT", "Long text", "Description, bio"],
        ["DATE", "Date in YYYY-MM-DD", "2024-08-15"],
        ["TIME", "Time in HH:MM:SS", "14:30:00"],
        ["DATETIME", "Date and time", "2024-08-15 14:30:00"],
        ["BOOLEAN", "True or false", "TRUE / FALSE"],
        ["BLOB", "Binary large object", "Image, audio"],
    ]
),


code(
    `INSERT INTO Student VALUES
  (1, 'Amit', 20, 'Surat', 101);

UPDATE Student SET city = 'Mumbai' WHERE roll = 1;

DELETE FROM Student WHERE roll = 1;
`,
    "sql",
    "Common DML commands"
),


code(
    `SELECT * FROM Student;
SELECT roll, name FROM Student;
SELECT * FROM Student WHERE age > 18;
SELECT * FROM Student ORDER BY name;
SELECT * FROM Student ORDER BY marks DESC LIMIT 5;
SELECT DISTINCT city FROM Student;
SELECT COUNT(*) FROM Student;
SELECT city, COUNT(*) FROM Student GROUP BY city;
SELECT city, COUNT(*) FROM Student
  GROUP BY city HAVING COUNT(*) > 5;
`,
    "sql",
    "Common SELECT patterns"
),


list([
    "FROM � choose the table.",
    "WHERE � filter rows.",
    "GROUP BY � group rows by columns.",
    "HAVING � filter groups.",
    "SELECT � pick the columns.",
    "DISTINCT � remove duplicates.",
    "ORDER BY � sort the result.",
    "LIMIT � limit the number of rows.",
]),

    note(
        "WHERE filters rows BEFORE grouping; HAVING filters groups AFTER. WHERE cannot use aggregate functions like COUNT or SUM, but HAVING can. Confusing the two is one of the most common SQL mistakes.",
        "warning",
        "WHERE vs HAVING"
    ),


table(
    ["Type", "Operators"],
    [
        ["Arithmetic", "+ - * / %"],
        ["Comparison", "= <> < <= > >= !="],
        ["Logical", "AND, OR, NOT"],
        ["Special", "BETWEEN, IN, LIKE, IS NULL, EXISTS"],
        ["Set", "UNION, INTERSECT, EXCEPT"],
    ]
),


code(
    `SELECT * FROM Student WHERE name LIKE 'A%';   -- starts with A
SELECT * FROM Student WHERE name LIKE '%it';   -- ends with it
SELECT * FROM Student WHERE name LIKE '%am%';  -- contains am
SELECT * FROM Student WHERE name LIKE '_____'; -- exactly 5 chars
`,
    "sql",
    "LIKE patterns"
),

    keyPoints([
        "SQL has DDL, DML, DQL, DCL and TCL.",
        "CREATE TABLE, INSERT, UPDATE, DELETE, SELECT are the basics.",
        "WHERE filters rows, HAVING filters groups.",
        "LIKE uses % for any string and _ for one character.",
        "SELECT execution order: FROM, WHERE, GROUP BY, HAVING, SELECT, ORDER BY, LIMIT.",
        ]),
    ],

    {
        summary:
    "Master SQL basics: DDL, DML, DQL, data types, the SELECT statement, its execution order, operators and LIKE.",
        minutes: 13,
            tags: ["sql", "select", "ddl", "dml", "important"],

                mcqs: [
                    mcq(
                        "Which is a DDL command?",
                        ["INSERT", "SELECT", "CREATE", "UPDATE"],
                        2,
                        "CREATE is a Data Definition Language command."
                    ),
                    mcq(
                        "Which is a DML command?",
                        ["CREATE", "DROP", "INSERT", "GRANT"],
                        2,
                        "INSERT is a Data Manipulation Language command."
                    ),
                    mcq(
                        "WHERE filters:",
                        ["Columns", "Rows", "Groups", "Tables"],
                        1,
                        "WHERE filters rows before grouping."
                    ),
                    mcq(
                        "HAVING filters:",
                        ["Rows", "Columns", "Groups", "Tables"],
                        2,
                        "HAVING filters groups after grouping."
                    ),
                    mcq(
                        "LIKE 'A%' matches:",
                        ["Names ending with A", "Names starting with A", "Names with A anywhere", "Exactly A"],
                        1,
                        "% is the wildcard for any sequence of characters."
                    ),
                    mcq(
                        "DISTINCT keyword is used to:",
                        ["Sort rows", "Remove duplicates", "Count rows", "Update rows"],
                        1,
                        "DISTINCT removes duplicate rows from the result."
                    ),
                ],

                    questions: [
                        qa(
                            "Explain the categories of SQL commands.",
                            "SQL commands are divided into five categories based on their purpose. DDL, or Data Definition Language, defines the structure of the database: CREATE, ALTER, DROP, TRUNCATE and RENAME. DML, or Data Manipulation Language, manipulates the data: INSERT, UPDATE and DELETE. DQL, or Data Query Language, retrieves the data: SELECT. DCL, or Data Control Language, manages permissions: GRANT and REVOKE. TCL, or Transaction Control Language, manages transactions: COMMIT, ROLLBACK and SAVEPOINT. Knowing the categories helps in remembering the commands and in understanding how the SQL engine processes different statements.",
                            4
                        ),
                        qa(
                            "Explain the SELECT statement and its execution order.",
                            "The SELECT statement retrieves data from one or more tables. Its clauses are processed in a specific order by the database engine. First, FROM chooses the source table or tables. Second, WHERE filters the rows based on a condition, using operators such as =, < and >, and special operators such as BETWEEN, IN, LIKE and IS NULL. Third, GROUP BY groups the remaining rows by the values in one or more columns. Fourth, HAVING filters the groups, often using aggregate functions such as COUNT, SUM, AVG, MIN and MAX. Fifth, SELECT picks the columns to display, and DISTINCT removes duplicates. Sixth, ORDER BY sorts the result by one or more columns, ASC or DESC. Finally, LIMIT restricts the number of rows returned. Writing SELECT in this order is a good habit and reduces mistakes.",
                            4
                        ),
                        qa(
                            "Differentiate between WHERE and HAVING.",
                            "WHERE filters individual rows before they are grouped, while HAVING filters groups after the GROUP BY clause has been applied. WHERE cannot use aggregate functions such as COUNT, SUM or AVG, because at that stage the rows have not yet been grouped. HAVING can and often does use aggregate functions, because it is applied to the groups. For example, 'SELECT city, COUNT(*) FROM Student WHERE age > 18 GROUP BY city HAVING COUNT(*) > 5' first keeps only students older than 18, then groups by city, then keeps only cities that have more than 5 such students. Confusing the two is one of the most common SQL mistakes and the cause of many query bugs.",
                            4
                        ),
                        qa(
                            "Explain the LIKE operator and its wildcards.",
                            "The LIKE operator is used in the WHERE clause to match patterns in string values. The percent sign % matches any sequence of zero or more characters, and the underscore _ matches exactly one character. For example, 'name LIKE A%' matches any name starting with A, such as Amit and Anil. 'name LIKE %it%' matches any name that contains it, such as Amit, Nita and Smith. 'name LIKE _____' matches any name with exactly five characters. LIKE is case insensitive in many databases by default, and it is widely used for search features, autocomplete and validating inputs. For more complex patterns, regular expressions provide greater power at the cost of readability.",
                            4
                        ),
                    ],
  }
);

/* =========================================================
   TOPIC 5 � Joins, Subqueries and Views
========================================================= */

const joinsSubqueries = createTopic(
    "joins-subqueries-and-views",
    "Joins, Subqueries and Views",

    [
        definition(
            "Join",
            "An operation in SQL that combines rows from two or more tables based on a related column, usually a primary key and a foreign key."
        ),


    table(
        ["Type", "Returns"],
        [
            ["INNER JOIN", "Rows that have a match in both tables"],
            ["LEFT OUTER JOIN", "All rows from the left table, matched if possible, NULL otherwise"],
            ["RIGHT OUTER JOIN", "All rows from the right table, matched if possible, NULL otherwise"],
            ["FULL OUTER JOIN", "All rows from both tables, matched if possible, NULL otherwise"],
            ["CROSS JOIN", "Cartesian product, every row of A with every row of B"],
            ["SELF JOIN", "A table joined with itself"],
        ]
    ),


code(
    `SELECT s.roll, s.name, d.dept_name
FROM Student s
INNER JOIN Department d
  ON s.dept_id = d.dept_id;
`,
    "sql",
    "INNER JOIN example"
),

    note(
        "INNER JOIN is the most common join. It returns only the rows that have a match in both tables. If a student has no department, or a department has no students, those rows are not returned.",
        "exam",
        "Frequently Asked"
    ),


code(
    `SELECT s.roll, s.name, d.dept_name
FROM Student s
LEFT JOIN Department d
  ON s.dept_id = d.dept_id;
`,
    "sql",
    "LEFT JOIN keeps all students, with NULL department if no match"
),


definition(
    "Subquery",
    "A query nested inside another query, used in the WHERE, FROM or SELECT clause. The inner query runs first and its result is used by the outer query."
),

    code(
        `SELECT name FROM Student
WHERE dept_id = (
    SELECT dept_id FROM Department WHERE name = 'BCA'
);

SELECT name FROM Student
WHERE roll IN (
    SELECT roll FROM Enrolment WHERE course_id = 101
);
`,
        "sql",
        "Subquery examples"
    ),


code(
    `SELECT name FROM Student s
WHERE marks > (
    SELECT AVG(marks) FROM Student
    WHERE dept_id = s.dept_id
);
`,
    "sql",
    "Correlated subquery"
),

    list([
        "A correlated subquery refers to a column of the outer query.",
        "It runs once for each row of the outer query.",
        "Useful for per group comparisons, but can be slow on large data.",
    ]),


code(
    `SELECT roll FROM CSE_Students
UNION
SELECT roll FROM ECE_Students;

SELECT roll FROM CSE_Students
INTERSECT
SELECT roll FROM Scholarship_Students;

SELECT roll FROM CSE_Students
EXCEPT
SELECT roll FROM Scholarship_Students;
`,
    "sql",
    "Set operations"
),


definition(
    "View",
    "A virtual table defined by a SQL query. It does not store data itself; the data is fetched from the underlying tables each time the view is used."
),

    code(
        `CREATE VIEW TopStudents AS
SELECT roll, name, marks
FROM Student
WHERE marks > 80;

SELECT * FROM TopStudents;

DROP VIEW TopStudents;
`,
        "sql",
        "View example"
    ),

    list([
        "Simplify complex queries.",
        "Restrict access to sensitive columns.",
        "Present data in a different shape than the underlying tables.",
        "Updatable views allow INSERT, UPDATE and DELETE if based on a single table.",
    ]),


definition(
    "Index",
    "A data structure that speeds up retrieval of rows based on one or more columns, at the cost of extra storage and slower writes."
),

    code(
        `CREATE INDEX idx_name ON Student(name);
CREATE UNIQUE INDEX idx_roll ON Student(roll);
DROP INDEX idx_name;
`,
        "sql",
        "Index example"
    ),

    keyPoints([
        "INNER JOIN returns only matching rows.",
        "LEFT JOIN keeps all rows of the left table.",
        "Subquery is a query inside another query.",
        "View is a virtual table defined by a SELECT.",
        "Index speeds up reads but slows down writes.",
        ]),
    ],

    {
        summary:
    "Master SQL joins, subqueries, set operations, views and indexes.",
        minutes: 12,
            tags: ["joins", "subquery", "view", "index", "sql", "important"],

                mcqs: [
                    mcq(
                        "INNER JOIN returns:",
                        ["All rows of left table", "All rows of right table", "Matching rows of both", "Cartesian product"],
                        2,
                        "INNER JOIN returns only rows that have a match in both tables."
                    ),
                    mcq(
                        "LEFT JOIN keeps:",
                        ["All rows of right table", "All rows of left table", "Only matching rows", "No rows"],
                        1,
                        "LEFT JOIN keeps all rows of the left table."
                    ),
                    mcq(
                        "A subquery is:",
                        ["A query inside a query", "A type of view", "A stored procedure", "A trigger"],
                        0,
                        "A subquery is a query nested inside another."
                    ),
                    mcq(
                        "A view:",
                        ["Stores data physically", "Is a virtual table", "Is a trigger", "Is an index"],
                        1,
                        "A view is a virtual table that runs the underlying query each time."
                    ),
                    mcq(
                        "An index speeds up:",
                        ["Writes", "Reads", "Both equally", "Deletes only"],
                        1,
                        "Index speeds up reads but slows down writes."
                    ),
                    mcq(
                        "UNION combines:",
                        ["Rows of two queries", "Columns of two queries", "Tables only", "Databases"],
                        0,
                        "UNION combines the rows of two compatible SELECT queries."
                    ),
                ],

                    questions: [
                        qa(
                            "Differentiate between INNER JOIN and LEFT JOIN.",
                            "INNER JOIN returns only the rows that have a match in both tables. If a student has no matching department, that student is not in the result. It is the most restrictive join and is the default join in many SQL dialects. LEFT JOIN returns all rows from the left table, and the matching rows from the right table. If a left row has no match, the right columns are filled with NULL. It is useful when we want to keep all rows of the left table, e.g. all students even if some have not yet been assigned a department. RIGHT JOIN is the mirror of LEFT JOIN. FULL OUTER JOIN returns all rows from both, with NULL where there is no match.",
                            4
                        ),
                        qa(
                            "What is a subquery? Differentiate between subquery and join.",
                            "A subquery is a SELECT query nested inside another query, used in the WHERE, FROM or SELECT clause. The inner query runs first and produces a value or a set of values, which the outer query then uses. A join combines columns from two or more tables into a single result set, using a related column. In most cases, a subquery and a join can produce the same result. Joins are usually faster because the database engine can optimise them better and process them in a single pass, while subqueries may require the engine to run the inner query once per outer row. For complex questions, joins are preferred for performance and readability, but subqueries are more natural for some questions, such as 'find the students in the same department as Amit'.",
                            4
                        ),
                        qa(
                            "Explain the different types of joins with examples.",
                            "There are several types of joins. INNER JOIN returns rows that have a match in both tables, e.g. students with their departments. LEFT OUTER JOIN returns all rows from the left table, with the right columns NULL when there is no match, e.g. all students even those without a department. RIGHT OUTER JOIN is the mirror, returning all rows from the right table. FULL OUTER JOIN returns all rows from both tables, with NULLs on the side that does not match. CROSS JOIN returns the Cartesian product, every row of A combined with every row of B, useful to generate all combinations. SELF JOIN joins a table with itself, useful for hierarchical data such as finding the manager of each employee. The correct join is chosen based on which rows the business question requires.",
                            4
                        ),
                        qa(
                            "What is a view? What are its advantages and limitations?",
                            "A view is a virtual table defined by a SELECT query. It does not store data; the data is fetched from the underlying tables every time the view is queried. The advantages of views are: they simplify complex queries by giving them a name; they restrict access to sensitive columns by exposing only a subset; they present data in a different shape from the underlying tables; and they allow the application to be written against a stable interface even if the underlying tables change. The limitations are: a view cannot be indexed; complex views with joins and aggregations may be slow; and updatable views, which allow INSERT, UPDATE and DELETE, are only possible when the view is based on a single table and does not use aggregation. Views are an essential tool for security and maintainability in any medium to large database.",
                            4
                        ),
                    ],
  }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit1Topics = [
    introductionToDatabases,
    erModel,
    relationalModel,
    sqlBasics,
    joinsSubqueries,
];

