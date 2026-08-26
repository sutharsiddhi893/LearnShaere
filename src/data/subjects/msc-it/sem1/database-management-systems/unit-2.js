/* =========================================================
   MSc-IT • SEM 1 • Database Management Systems
   UNIT 2 — Structured Query Language (SQL)
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
   TOPIC 1 — Introduction to SQL and DDL Commands
========================================================= */

const introToSQLAndDDL = createTopic(
    "introduction-to-sql-and-ddl-commands",
    "Introduction to SQL and DDL Commands",

    [
        definition(
            "SQL (Structured Query Language)",
            "A standard language for managing and manipulating relational databases. SQL is used to create, modify, query and control access to data stored in relational database management systems."
        ),

        text(
            "SQL was originally developed at IBM by Donald D. Chamberlin and Raymond F. Boyce in the early 1970s. It was first called SEQUEL (Structured English Query Language) and was later renamed to SQL. It became an ANSI standard in 1986 and an ISO standard in 1987. Today, SQL is supported by virtually every relational database system."
        ),

        heading("Features of SQL"),

        list([
            "It is a non-procedural language — you specify what data you want, not how to get it.",
            "It is a standard language supported by all major RDBMS products.",
            "It can be used by a range of users including DBAs, application programmers and end users.",
            "It supports data definition, data manipulation, data control and transaction control.",
            "It can be embedded in host languages like Java, Python, C++ and PHP.",
            "It supports views, stored procedures, triggers and indexes.",
        ]),

        heading("SQL Command Categories"),

        table(
            ["Category", "Full Form", "Purpose", "Key Commands"],
            [
                ["DDL", "Data Definition Language", "Define and modify database structure", "CREATE, ALTER, DROP, TRUNCATE, RENAME"],
                ["DML", "Data Manipulation Language", "Manipulate data within tables", "SELECT, INSERT, UPDATE, DELETE"],
                ["DCL", "Data Control Language", "Control access to data", "GRANT, REVOKE"],
                ["TCL", "Transaction Control Language", "Manage transactions", "COMMIT, ROLLBACK, SAVEPOINT"],
            ]
        ),

        heading("DDL Commands"),

        definition(
            "DDL (Data Definition Language)",
            "A subset of SQL used to define, modify and delete the structure of database objects such as tables, views, indexes and schemas. DDL commands are auto-committed — they take effect immediately and cannot be rolled back."
        ),

        heading("CREATE TABLE"),

        definition(
            "CREATE TABLE",
            "A DDL command used to create a new table in the database by specifying the table name, column names, data types and constraints."
        ),

        code(
            `-- Create a Student table
CREATE TABLE Student (
    Roll_No     VARCHAR(10)   PRIMARY KEY,
    Name        VARCHAR(50)   NOT NULL,
    Course      VARCHAR(30)   DEFAULT 'MSc IT',
    Age         INT           CHECK (Age >= 18 AND Age <= 40),
    Email       VARCHAR(100)  UNIQUE,
    Dept_Id     INT           REFERENCES Department(Dept_Id)
);

-- Create a Department table
CREATE TABLE Department (
    Dept_Id     INT           PRIMARY KEY,
    Dept_Name   VARCHAR(50)   NOT NULL,
    Location    VARCHAR(50)
);`,
            "sql",
            "Creating tables with constraints"
        ),

        heading("Common Data Types in SQL"),

        table(
            ["Data Type", "Description", "Example"],
            [
                ["INT / INTEGER", "Whole numbers", "42, -7, 0"],
                ["SMALLINT", "Smaller range integers", "32000"],
                ["DECIMAL(p,s) / NUMERIC(p,s)", "Exact decimal numbers", "DECIMAL(5,2) → 999.99"],
                ["FLOAT / REAL", "Approximate floating-point numbers", "3.14159"],
                ["CHAR(n)", "Fixed-length string of n characters", "CHAR(10) → 'Hello     '"],
                ["VARCHAR(n)", "Variable-length string up to n characters", "VARCHAR(50) → 'Hello'"],
                ["TEXT", "Large variable-length text", "Long paragraphs"],
                ["DATE", "Date value (YYYY-MM-DD)", "'2025-08-15'"],
                ["TIME", "Time value (HH:MM:SS)", "'14:30:00'"],
                ["DATETIME / TIMESTAMP", "Date and time combined", "'2025-08-15 14:30:00'"],
                ["BOOLEAN", "True or False", "TRUE, FALSE"],
                ["BLOB", "Binary large object", "Images, files"],
            ]
        ),

        heading("Constraints"),

        definition(
            "Constraint",
            "A rule applied to a column or table that restricts the type of data that can be stored, ensuring data integrity and accuracy."
        ),

        table(
            ["Constraint", "Purpose", "Example"],
            [
                ["PRIMARY KEY", "Uniquely identifies each row; cannot be NULL", "Roll_No VARCHAR(10) PRIMARY KEY"],
                ["FOREIGN KEY", "Links to the primary key of another table", "Dept_Id INT REFERENCES Department(Dept_Id)"],
                ["NOT NULL", "Ensures the column cannot have NULL values", "Name VARCHAR(50) NOT NULL"],
                ["UNIQUE", "Ensures all values in the column are different", "Email VARCHAR(100) UNIQUE"],
                ["CHECK", "Ensures values satisfy a specified condition", "Age INT CHECK (Age >= 18)"],
                ["DEFAULT", "Provides a default value if none is specified", "Course VARCHAR(30) DEFAULT 'MSc IT'"],
            ]
        ),

        note(
            "A table can have only one PRIMARY KEY, but it can consist of multiple columns (composite key). A table can have multiple UNIQUE constraints. A FOREIGN KEY must reference a PRIMARY KEY or UNIQUE column in another table.",
            "exam",
            "Frequently Asked"
        ),

        heading("ALTER TABLE"),

        definition(
            "ALTER TABLE",
            "A DDL command used to modify the structure of an existing table by adding, modifying or dropping columns and constraints."
        ),

        code(
            `-- Add a new column
ALTER TABLE Student ADD Phone VARCHAR(15);

-- Modify an existing column
ALTER TABLE Student MODIFY Name VARCHAR(100);

-- Drop a column
ALTER TABLE Student DROP COLUMN Phone;

-- Add a constraint
ALTER TABLE Student ADD CONSTRAINT chk_age CHECK (Age >= 18);

-- Drop a constraint
ALTER TABLE Student DROP CONSTRAINT chk_age;

-- Rename a column (syntax varies by DBMS)
ALTER TABLE Student RENAME COLUMN Name TO Full_Name;`,
            "sql",
            "ALTER TABLE examples"
        ),

        heading("DROP and TRUNCATE"),

        table(
            ["Command", "Purpose", "Rollback?", "Speed", "Removes"],
            [
                ["DROP TABLE", "Deletes the entire table structure and data", "No (DDL)", "Fast", "Table structure + data + indexes"],
                ["TRUNCATE TABLE", "Removes all rows but keeps the table structure", "No (DDL)", "Very fast", "Only data, resets auto-increment"],
                ["DELETE FROM", "Removes rows (can use WHERE clause)", "Yes (DML)", "Slower", "Selected or all rows"],
            ]
        ),

        code(
            `-- Drop a table completely
DROP TABLE Student;

-- Remove all rows but keep structure
TRUNCATE TABLE Student;

-- Delete specific rows (DML, can be rolled back)
DELETE FROM Student WHERE Age > 30;`,
            "sql",
            "DROP, TRUNCATE and DELETE"
        ),

        note(
            "DROP and TRUNCATE are DDL commands and cannot be rolled back in most databases. DELETE is a DML command and can be rolled back if used within a transaction. TRUNCATE is faster than DELETE because it does not log individual row deletions.",
            "warning",
            "Important Distinction"
        ),

        keyPoints([
            "SQL is a non-procedural, standard language for managing relational databases.",
            "DDL commands (CREATE, ALTER, DROP, TRUNCATE) define and modify database structure.",
            "Constraints like PRIMARY KEY, FOREIGN KEY, NOT NULL, UNIQUE and CHECK enforce data integrity.",
            "DROP removes the entire table; TRUNCATE removes all rows but keeps the structure.",
            "DDL commands are auto-committed and cannot be rolled back.",
        ]),
    ],

    {
        summary:
            "Learn SQL basics, command categories, and DDL commands including CREATE TABLE, ALTER TABLE, DROP, TRUNCATE and constraints.",
        minutes: 13,
        tags: ["sql", "ddl", "create-table", "constraints", "important"],

        mcqs: [
            mcq(
                "SQL stands for:",
                ["Simple Query Language", "Structured Query Language", "Standard Query Logic", "Sequential Query Language"],
                1,
                "SQL stands for Structured Query Language."
            ),
            mcq(
                "Which of the following is a DDL command?",
                ["SELECT", "INSERT", "CREATE", "UPDATE"],
                2,
                "CREATE is a DDL command used to define database objects like tables."
            ),
            mcq(
                "A table can have how many PRIMARY KEY constraints?",
                ["Zero", "Exactly one", "Multiple", "Unlimited"],
                1,
                "A table can have exactly one PRIMARY KEY, though it can be a composite of multiple columns."
            ),
            mcq(
                "What does TRUNCATE TABLE do?",
                ["Deletes the table structure", "Removes all rows but keeps the structure", "Adds a new column", "Renames the table"],
                1,
                "TRUNCATE removes all rows from a table but preserves the table structure."
            ),
            mcq(
                "Which constraint ensures that a column cannot have duplicate values?",
                ["NOT NULL", "CHECK", "UNIQUE", "DEFAULT"],
                2,
                "The UNIQUE constraint ensures all values in a column are distinct."
            ),
            mcq(
                "DDL commands are:",
                ["Rolled back easily", "Auto-committed", "Part of DML", "Used to query data"],
                1,
                "DDL commands are auto-committed and take effect immediately."
            ),
        ],

        questions: [
            qa(
                "Explain the different categories of SQL commands with examples.",
                "SQL commands are divided into four categories. DDL (Data Definition Language) defines and modifies database structure with commands like CREATE TABLE, ALTER TABLE, DROP TABLE and TRUNCATE. DML (Data Manipulation Language) manipulates data within tables using SELECT, INSERT, UPDATE and DELETE. DCL (Data Control Language) controls access to data using GRANT to give privileges and REVOKE to remove them. TCL (Transaction Control Language) manages transactions using COMMIT to save changes permanently, ROLLBACK to undo changes and SAVEPOINT to set a restore point within a transaction.",
                5
            ),
            qa(
                "Explain the different types of constraints in SQL with examples.",
                "A PRIMARY KEY uniquely identifies each row and cannot be NULL, for example Roll_No VARCHAR(10) PRIMARY KEY. A FOREIGN KEY links to the primary key of another table, maintaining referential integrity, for example Dept_Id INT REFERENCES Department(Dept_Id). NOT NULL ensures a column cannot have NULL values, for example Name VARCHAR(50) NOT NULL. UNIQUE ensures all values in a column are different, for example Email VARCHAR(100) UNIQUE. CHECK ensures values satisfy a condition, for example Age INT CHECK (Age >= 18). DEFAULT provides a fallback value, for example Course VARCHAR(30) DEFAULT 'MSc IT'.",
                5
            ),
            qa(
                "Differentiate between DROP, TRUNCATE and DELETE.",
                "DROP TABLE is a DDL command that removes the entire table including its structure, data, indexes and constraints; it cannot be rolled back. TRUNCATE TABLE is also a DDL command that removes all rows from a table but keeps the table structure intact; it is very fast because it does not log individual row deletions and resets auto-increment counters; it also cannot be rolled back. DELETE FROM is a DML command that removes rows based on a WHERE condition or all rows if no condition is given; it logs each row deletion, is slower than TRUNCATE, but can be rolled back within a transaction.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — DML Commands: INSERT, UPDATE, DELETE, SELECT
========================================================= */

const dmlCommands = createTopic(
    "dml-commands-insert-update-delete-select",
    "DML Commands: INSERT, UPDATE, DELETE, SELECT",

    [
        definition(
            "DML (Data Manipulation Language)",
            "A subset of SQL used to insert, update, delete and retrieve data within database tables. DML commands operate on the data inside tables without changing the table structure."
        ),

        heading("INSERT"),

        definition(
            "INSERT",
            "A DML command used to add new rows of data into a table."
        ),

        code(
            `-- Insert a complete row
INSERT INTO Student (Roll_No, Name, Course, Age, Email)
VALUES ('M001', 'Rahul', 'MSc IT', 22, 'rahul@email.com');

-- Insert multiple rows
INSERT INTO Student VALUES
('M002', 'Priya', 'MSc IT', 21, 'priya@email.com'),
('M003', 'Amit', 'MSc IT', 23, 'amit@email.com'),
('M004', 'Sneha', 'MSc IT', 22, 'sneha@email.com'),
('M005', 'Karan', 'MSc IT', 24, 'karan@email.com');

-- Insert with default values (Course has DEFAULT 'MSc IT')
INSERT INTO Student (Roll_No, Name, Age, Email)
VALUES ('M006', 'Meera', 21, 'meera@email.com');

-- Insert from another table
INSERT INTO Student_Backup
SELECT * FROM Student WHERE Age > 22;`,
            "sql",
            "INSERT examples"
        ),

        heading("UPDATE"),

        definition(
            "UPDATE",
            "A DML command used to modify existing data in a table. Always use a WHERE clause to avoid updating all rows accidentally."
        ),

        code(
            `-- Update a single column for a specific row
UPDATE Student
SET Age = 23
WHERE Roll_No = 'M001';

-- Update multiple columns
UPDATE Student
SET Course = 'MSc CS', Age = 25
WHERE Roll_No = 'M003';

-- Update using a condition
UPDATE Student
SET Age = Age + 1
WHERE Course = 'MSc IT';

-- WARNING: Without WHERE, ALL rows are updated!
-- UPDATE Student SET Age = 0;  → Sets age to 0 for EVERY student`,
            "sql",
            "UPDATE examples"
        ),

        note(
            "Always include a WHERE clause with UPDATE and DELETE. Without it, the command affects every row in the table, which is almost never what you want and can be catastrophic in production.",
            "warning",
            "Critical"
        ),

        heading("DELETE"),

        definition(
            "DELETE",
            "A DML command used to remove one or more rows from a table. It can be rolled back if used within a transaction."
        ),

        code(
            `-- Delete a specific row
DELETE FROM Student WHERE Roll_No = 'M005';

-- Delete rows matching a condition
DELETE FROM Student WHERE Age > 25;

-- Delete all rows (table structure remains)
DELETE FROM Student;

-- This is different from TRUNCATE:
-- DELETE logs each row, can be rolled back, and can use WHERE
-- TRUNCATE is faster, cannot be rolled back, and removes all rows`,
            "sql",
            "DELETE examples"
        ),

        heading("SELECT — The Query Command"),

        definition(
            "SELECT",
            "The most frequently used SQL command. It retrieves data from one or more tables based on specified criteria."
        ),

        heading("Basic SELECT Syntax"),

        code(
            `SELECT column1, column2, ...
FROM table_name
WHERE condition
GROUP BY column(s)
HAVING condition
ORDER BY column(s) [ASC | DESC];`,
            "sql",
            "General SELECT syntax"
        ),

        heading("SELECT Examples"),

        code(
            `-- Select all columns and all rows
SELECT * FROM Student;

-- Select specific columns
SELECT Name, Age FROM Student;

-- Select with a condition
SELECT Name, Marks FROM Student WHERE Marks > 80;

-- Select with multiple conditions
SELECT Name FROM Student
WHERE Age >= 21 AND Course = 'MSc IT';

-- Select distinct values
SELECT DISTINCT Course FROM Student;

-- Select with sorting
SELECT Name, Marks FROM Student
ORDER BY Marks DESC;

-- Select with limit (MySQL / PostgreSQL)
SELECT Name, Marks FROM Student
ORDER BY Marks DESC
LIMIT 3;`,
            "sql",
            "Basic SELECT queries"
        ),

        heading("WHERE Clause Operators"),

        table(
            ["Operator", "Purpose", "Example"],
            [
                ["=", "Equal to", "WHERE Age = 22"],
                ["<> or !=", "Not equal to", "WHERE Course <> 'MSc IT'"],
                [">, <, >=, <=", "Comparison", "WHERE Marks >= 80"],
                ["BETWEEN", "Within a range (inclusive)", "WHERE Age BETWEEN 20 AND 25"],
                ["IN", "Matches any value in a list", "WHERE Course IN ('MSc IT', 'MSc CS')"],
                ["LIKE", "Pattern matching", "WHERE Name LIKE 'R%'"],
                ["IS NULL", "Checks for NULL values", "WHERE Email IS NULL"],
                ["IS NOT NULL", "Checks for non-NULL values", "WHERE Email IS NOT NULL"],
                ["AND", "Both conditions must be true", "WHERE Age > 20 AND Marks > 80"],
                ["OR", "At least one condition must be true", "WHERE Age < 20 OR Marks > 90"],
                ["NOT", "Negates a condition", "WHERE NOT Course = 'MSc IT'"],
            ]
        ),

        heading("LIKE Pattern Matching"),

        table(
            ["Pattern", "Matches", "Example"],
            [
                ["'R%'", "Starts with R", "'Rahul', 'Riya'"],
                ["'%a'", "Ends with a", 'Priya', 'Sneha'"],
                ["'%ah%'", "Contains 'ah' anywhere", "'Rahul'"],
                    ["'_a%'", "Second character is 'a'", "'Rahul', 'Karan'"],
                    ["'____'", "Exactly 4 characters", "'Amit'"],
                ]
    ),

        code(
            `-- Names starting with 'R'
SELECT Name FROM Student WHERE Name LIKE 'R%';

-- Names ending with 'a'
SELECT Name FROM Student WHERE Name LIKE '%a';

-- Names with exactly 4 characters
SELECT Name FROM Student WHERE Name LIKE '____';`,
            "sql",
            "LIKE pattern matching"
        ),

        heading("ORDER BY"),

        code(
            `-- Ascending order (default)
SELECT Name, Marks FROM Student ORDER BY Marks ASC;

-- Descending order
SELECT Name, Marks FROM Student ORDER BY Marks DESC;

-- Multiple columns
SELECT Name, Age, Marks FROM Student
ORDER BY Age ASC, Marks DESC;`,
            "sql",
            "ORDER BY examples"
        ),

        keyPoints([
            "INSERT adds new rows; UPDATE modifies existing rows; DELETE removes rows.",
            "Always use WHERE with UPDATE and DELETE to avoid affecting all rows.",
            "SELECT retrieves data and supports WHERE, ORDER BY, DISTINCT and LIMIT.",
            "LIKE uses % for any number of characters and _ for exactly one character.",
            "DELETE is DML and can be rolled back; TRUNCATE is DDL and cannot.",
        ]),
    ],

    {
        summary:
            "Master the four DML commands: INSERT for adding data, UPDATE for modifying, DELETE for removing, and SELECT for querying with WHERE, LIKE and ORDER BY.",
        minutes: 13,
        tags: ["sql", "dml", "select", "insert", "update", "delete", "important"],

        mcqs: [
            mcq(
                "Which command is used to add a new row to a table?",
                ["ADD", "INSERT", "APPEND", "CREATE"],
                1,
                "The INSERT command adds new rows of data into a table."
            ),
            mcq(
                "What happens if you use UPDATE without a WHERE clause?",
                ["Only the first row is updated", "An error occurs", "All rows in the table are updated", "No rows are updated"],
                2,
                "Without a WHERE clause, UPDATE modifies every row in the table."
            ),
            mcq(
                "Which pattern matches names starting with 'R'?",
                ["'%R'", "'R%'", "'_R%'", "'R_'"],
                1,
                "'R%' matches any string that starts with R followed by zero or more characters."
            ),
            mcq(
                "The underscore (_) in LIKE matches:",
                ["Zero or more characters", "Exactly one character", "A digit", "A space"],
                1,
                "The underscore wildcard matches exactly one character."
            ),
            mcq(
                "Which clause is used to sort query results?",
                ["GROUP BY", "WHERE", "ORDER BY", "HAVING"],
                2,
                "ORDER BY sorts the result set in ascending or descending order."
            ),
            mcq(
                "SELECT DISTINCT is used to:",
                ["Sort results", "Remove duplicate rows from results", "Count rows", "Join tables"],
                1,
                "DISTINCT eliminates duplicate rows from the query result."
            ),
        ],

        questions: [
            qa(
                "Explain the INSERT, UPDATE and DELETE commands with examples.",
                "INSERT adds new rows to a table. For example, INSERT INTO Student (Roll_No, Name, Age) VALUES ('M001', 'Rahul', 22) adds a new student. Multiple rows can be inserted in one statement by providing multiple value sets. UPDATE modifies existing data. For example, UPDATE Student SET Age = 23 WHERE Roll_No = 'M001' changes Rahul's age to 23. The WHERE clause is critical — without it, all rows are updated. DELETE removes rows. For example, DELETE FROM Student WHERE Roll_No = 'M005' removes one student. Without WHERE, all rows are deleted but the table structure remains. DELETE can be rolled back within a transaction.",
                5
            ),
            qa(
                "Explain the SELECT command with WHERE, LIKE and ORDER BY clauses.",
                "SELECT retrieves data from a table. The basic syntax is SELECT columns FROM table WHERE condition ORDER BY column. The WHERE clause filters rows based on conditions using operators like =, >, <, BETWEEN, IN and IS NULL. The LIKE operator performs pattern matching using % for zero or more characters and _ for exactly one character. For example, WHERE Name LIKE 'R%' finds names starting with R. ORDER BY sorts the results in ascending (ASC, default) or descending (DESC) order. For example, SELECT Name, Marks FROM Student WHERE Marks > 80 ORDER BY Marks DESC returns students with marks above 80 sorted from highest to lowest.",
                5
            ),
            qa(
                "Differentiate between DELETE and TRUNCATE.",
                "DELETE is a DML command that removes rows from a table based on a WHERE condition, or all rows if no condition is given. It logs each row deletion, can be rolled back within a transaction, and can use a WHERE clause to delete specific rows. It is slower because of row-by-row logging. TRUNCATE is a DDL command that removes all rows from a table at once while keeping the table structure. It does not log individual row deletions, making it much faster, but it cannot be rolled back in most databases. TRUNCATE also resets auto-increment counters. Use DELETE when you need to remove specific rows or need rollback capability, and TRUNCATE when you want to quickly empty an entire table.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — Aggregate Functions and GROUP BY
========================================================= */

const aggregateFunctionsAndGroupBy = createTopic(
    "aggregate-functions-and-group-by",
    "Aggregate Functions and GROUP BY",

    [
        definition(
            "Aggregate Function",
            "A function that performs a calculation on a set of values and returns a single summary value. Aggregate functions are commonly used with the GROUP BY clause."
        ),

        heading("Built-in Aggregate Functions"),

        table(
            ["Function", "Purpose", "Example", "Result"],
            [
                ["COUNT()", "Counts the number of rows", "COUNT(*)", "Total rows"],
                ["COUNT(column)", "Counts non-NULL values in a column", "COUNT(Email)", "Rows where Email is not NULL"],
                ["SUM()", "Returns the total sum of a numeric column", "SUM(Marks)", "Total of all marks"],
                ["AVG()", "Returns the average of a numeric column", "AVG(Marks)", "Average marks"],
                ["MIN()", "Returns the smallest value", "MIN(Marks)", "Lowest marks"],
                ["MAX()", "Returns the largest value", "MAX(Marks)", "Highest marks"],
            ]
        ),

        code(
            `-- Count all students
SELECT COUNT(*) AS Total_Students FROM Student;

-- Count students who have an email
SELECT COUNT(Email) AS With_Email FROM Student;

-- Total, average, minimum and maximum marks
SELECT
    SUM(Marks)   AS Total_Marks,
    AVG(Marks)   AS Average_Marks,
    MIN(Marks)   AS Lowest_Marks,
    MAX(Marks)   AS Highest_Marks
FROM Student;

-- Output example:
-- Total_Marks | Average_Marks | Lowest_Marks | Highest_Marks
--     462     |     77.0      |      65      |      92`,
            "sql",
            "Aggregate function examples"
        ),

        note(
            "COUNT(*) counts all rows including those with NULL values. COUNT(column_name) counts only non-NULL values in that column. All other aggregate functions (SUM, AVG, MIN, MAX) ignore NULL values automatically.",
            "exam",
            "Frequently Asked"
        ),

        heading("GROUP BY"),

        definition(
            "GROUP BY",
            "A clause that groups rows with the same values in specified columns into summary rows. It is used with aggregate functions to compute results per group."
        ),

        code(
            `-- Average marks per course
SELECT Course, AVG(Marks) AS Avg_Marks
FROM Student
GROUP BY Course;

-- Number of students per course
SELECT Course, COUNT(*) AS Student_Count
FROM Student
GROUP BY Course;

-- Maximum marks per department
SELECT Dept_Id, MAX(Marks) AS Top_Marks
FROM Student
GROUP BY Dept_Id;

-- Multiple columns in GROUP BY
SELECT Course, Age, COUNT(*) AS Count
FROM Student
GROUP BY Course, Age;`,
            "sql",
            "GROUP BY examples"
        ),

        heading("HAVING"),

        definition(
            "HAVING",
            "A clause used to filter groups created by GROUP BY. It is similar to WHERE but operates on aggregated values rather than individual rows."
        ),

        table(
            ["Aspect", "WHERE", "HAVING"],
            [
                ["Filters", "Individual rows", "Groups (aggregated results)"],
                ["Used with", "SELECT, UPDATE, DELETE", "GROUP BY"],
                ["Can use aggregates?", "No", "Yes"],
                ["Position", "Before GROUP BY", "After GROUP BY"],
                ["Example", "WHERE Age > 20", "HAVING AVG(Marks) > 80"],
            ]
        ),

        code(
            `-- Courses with average marks above 80
SELECT Course, AVG(Marks) AS Avg_Marks
FROM Student
GROUP BY Course
HAVING AVG(Marks) > 80;

-- Departments with more than 5 students
SELECT Dept_Id, COUNT(*) AS Student_Count
FROM Student
GROUP BY Dept_Id
HAVING COUNT(*) > 5;

-- Complete query with WHERE, GROUP BY, HAVING and ORDER BY
SELECT Course, AVG(Marks) AS Avg_Marks, COUNT(*) AS Total
FROM Student
WHERE Age >= 20
GROUP BY Course
HAVING AVG(Marks) > 75
ORDER BY Avg_Marks DESC;`,
            "sql",
            "HAVING clause examples"
        ),

        heading("SQL Query Execution Order"),

        steps([
            "FROM — identifies the source table(s)",
            "WHERE — filters individual rows",
            "GROUP BY — groups the filtered rows",
            "HAVING — filters the groups",
            "SELECT — chooses the columns and expressions to return",
            "ORDER BY — sorts the final result",
            "LIMIT / OFFSET — restricts the number of rows returned",
        ]),

        note(
            "The order in which you write a query (SELECT first) is different from the order in which the database engine executes it (FROM first). Understanding this execution order helps avoid errors, such as trying to use a column alias defined in SELECT inside a WHERE clause.",
            "tip",
            "Execution Order"
        ),

        keyPoints([
            "Aggregate functions (COUNT, SUM, AVG, MIN, MAX) return a single value from a set of rows.",
            "COUNT(*) counts all rows; COUNT(column) counts only non-NULL values.",
            "GROUP BY groups rows with the same values for aggregate calculations.",
            "HAVING filters groups after aggregation; WHERE filters rows before aggregation.",
            "SQL execution order is FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY.",
        ]),
    ],

    {
        summary:
            "Master aggregate functions COUNT, SUM, AVG, MIN, MAX and learn to use GROUP BY and HAVING for grouped analysis.",
        minutes: 12,
        tags: ["sql", "aggregate", "group-by", "having", "important"],

        mcqs: [
            mcq(
                "What does COUNT(*) return?",
                ["Count of non-NULL values", "Total number of rows including NULLs", "Count of unique values", "Count of columns"],
                1,
                "COUNT(*) counts all rows in the table, including those with NULL values."
            ),
            mcq(
                "Which clause is used to filter groups after aggregation?",
                ["WHERE", "GROUP BY", "HAVING", "ORDER BY"],
                2,
                "HAVING filters groups created by GROUP BY based on aggregate conditions."
            ),
            mcq(
                "Can you use aggregate functions in a WHERE clause?",
                ["Yes, always", "No, use HAVING instead", "Only COUNT", "Only with GROUP BY"],
                1,
                "WHERE operates on individual rows before aggregation. Use HAVING for aggregate conditions."
            ),
            mcq(
                "What is the first clause executed in a SQL query?",
                ["SELECT", "WHERE", "FROM", "GROUP BY"],
                2,
                "The FROM clause is executed first to identify the source tables."
            ),
            mcq(
                "AVG(Marks) ignores:",
                ["Zero values", "Negative values", "NULL values", "Duplicate values"],
                2,
                "All aggregate functions except COUNT(*) automatically ignore NULL values."
            ),
        ],

        questions: [
            qa(
                "Explain the five aggregate functions in SQL with examples.",
                "COUNT() returns the number of rows. COUNT(*) counts all rows including NULLs, while COUNT(column) counts only non-NULL values. SUM() returns the total of a numeric column, for example SUM(Marks) gives the total marks of all students. AVG() returns the average of a numeric column, for example AVG(Marks) gives the average marks. MIN() returns the smallest value, for example MIN(Marks) gives the lowest marks. MAX() returns the largest value, for example MAX(Marks) gives the highest marks. All aggregate functions except COUNT(*) ignore NULL values.",
                5
            ),
            qa(
                "Differentiate between WHERE and HAVING with examples.",
                "WHERE filters individual rows before grouping and cannot use aggregate functions. For example, WHERE Age > 20 filters out students younger than 20 before any grouping occurs. HAVING filters groups after aggregation and can use aggregate functions. For example, HAVING AVG(Marks) > 80 filters out groups (such as courses) whose average marks are 80 or below. WHERE is placed before GROUP BY in the query, while HAVING is placed after GROUP BY. In terms of execution, WHERE is applied during the row filtering phase, while HAVING is applied after groups have been formed and aggregate values computed.",
                5
            ),
            qa(
                "Explain the execution order of a SQL query.",
                "Although a SQL query is written starting with SELECT, the database engine executes clauses in a different order. First, FROM identifies the source tables. Second, WHERE filters individual rows based on conditions. Third, GROUP BY groups the remaining rows by specified columns. Fourth, HAVING filters those groups based on aggregate conditions. Fifth, SELECT chooses which columns and expressions to include in the result. Sixth, ORDER BY sorts the final result set. Seventh, LIMIT or OFFSET restricts the number of rows returned. Understanding this order explains why you cannot use a SELECT alias in WHERE but can in ORDER BY.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — Joins and Subqueries
========================================================= */

const joinsAndSubqueries = createTopic(
    "joins-and-subqueries",
    "Joins and Subqueries",

    [
        definition(
            "Join",
            "An SQL operation that combines rows from two or more tables based on a related column between them. Joins are fundamental to relational databases because they allow you to retrieve data spread across multiple tables."
        ),

        text(
            "In a normalised database, data is distributed across multiple tables to reduce redundancy. Joins allow you to reconstruct the complete picture by combining related data from these tables in a single query."
        ),

        heading("Types of Joins"),

        table(
            ["Join Type", "Returns", "Description"],
            [
                ["INNER JOIN", "Matching rows from both tables", "Only rows where the join condition is true in both tables"],
                ["LEFT JOIN (LEFT OUTER)", "All rows from left table + matching from right", "Non-matching right side gets NULL"],
                ["RIGHT JOIN (RIGHT OUTER)", "All rows from right table + matching from left", "Non-matching left side gets NULL"],
                ["FULL JOIN (FULL OUTER)", "All rows from both tables", "Non-matching sides get NULL"],
                ["CROSS JOIN", "Cartesian product of both tables", "Every row of table A paired with every row of table B"],
                ["SELF JOIN", "Table joined with itself", "Useful for hierarchical or comparative data"],
            ]
        ),

        heading("Sample Tables for Examples"),

        code(
            `-- Student table
+---------+-------+---------+
| Roll_No | Name  | Dept_Id |
+---------+-------+---------+
| M001    | Rahul | 1       |
| M002    | Priya | 2       |
| M003    | Amit  | 1       |
| M004    | Sneha | NULL    |
+---------+-------+---------+

-- Department table
+---------+-----------+
| Dept_Id | Dept_Name |
+---------+-----------+
| 1       | IT        |
| 2       | CS        |
| 3       | EC        |
+---------+-----------+`,
            "text",
            "Sample tables for join examples"
        ),

        heading("INNER JOIN"),

        code(
            `SELECT S.Name, D.Dept_Name
FROM Student S
INNER JOIN Department D ON S.Dept_Id = D.Dept_Id;

-- Result:
-- Name  | Dept_Name
-- Rahul | IT
-- Priya | CS
-- Amit  | IT
-- (Sneha excluded — NULL Dept_Id; EC excluded — no students)`,
            "sql",
            "INNER JOIN example"
        ),

        heading("LEFT JOIN"),

        code(
            `SELECT S.Name, D.Dept_Name
FROM Student S
LEFT JOIN Department D ON S.Dept_Id = D.Dept_Id;

-- Result:
-- Name  | Dept_Name
-- Rahul | IT
-- Priya | CS
-- Amit  | IT
-- Sneha | NULL    ← Sneha included even without a department`,
            "sql",
            "LEFT JOIN example"
        ),

        heading("RIGHT JOIN"),

        code(
            `SELECT S.Name, D.Dept_Name
FROM Student S
RIGHT JOIN Department D ON S.Dept_Id = D.Dept_Id;

-- Result:
-- Name  | Dept_Name
-- Rahul | IT
-- Priya | CS
-- Amit  | IT
-- NULL  | EC      ← EC included even without students`,
            "sql",
            "RIGHT JOIN example"
        ),

        heading("FULL OUTER JOIN"),

        code(
            `SELECT S.Name, D.Dept_Name
FROM Student S
FULL OUTER JOIN Department D ON S.Dept_Id = D.Dept_Id;

-- Result:
-- Name  | Dept_Name
-- Rahul | IT
-- Priya | CS
-- Amit  | IT
-- Sneha | NULL    ← from left table
-- NULL  | EC      ← from right table`,
            "sql",
            "FULL OUTER JOIN example"
        ),

        heading("CROSS JOIN"),

        code(
            `SELECT S.Name, D.Dept_Name
FROM Student S
CROSS JOIN Department D;

-- Result: 4 students × 3 departments = 12 rows
-- Every student paired with every department`,
            "sql",
            "CROSS JOIN example"
        ),

        heading("SELF JOIN"),

        code(
            `-- Find pairs of students in the same department
SELECT A.Name AS Student1, B.Name AS Student2, A.Dept_Id
FROM Student A
JOIN Student B ON A.Dept_Id = B.Dept_Id
WHERE A.Roll_No < B.Roll_No;

-- Result:
-- Student1 | Student2 | Dept_Id
-- Rahul    | Amit     | 1`,
            "sql",
            "SELF JOIN example"
        ),

        heading("Subqueries"),

        definition(
            "Subquery",
            "A query nested inside another query. The inner query (subquery) executes first and its result is used by the outer query. Subqueries can appear in SELECT, FROM, WHERE and HAVING clauses."
        ),

        code(
            `-- Scalar subquery (returns one value)
-- Find students with marks above the average
SELECT Name, Marks
FROM Student
WHERE Marks > (SELECT AVG(Marks) FROM Student);

-- Subquery with IN
-- Find students in the IT department
SELECT Name
FROM Student
WHERE Dept_Id IN (
    SELECT Dept_Id FROM Department WHERE Dept_Name = 'IT'
);

-- Subquery with EXISTS
-- Find departments that have at least one student
SELECT Dept_Name
FROM Department D
WHERE EXISTS (
    SELECT 1 FROM Student S WHERE S.Dept_Id = D.Dept_Id
);

-- Subquery in FROM clause (derived table)
SELECT Course, Avg_Marks
FROM (
    SELECT Course, AVG(Marks) AS Avg_Marks
    FROM Student
    GROUP BY Course
) AS Course_Avg
WHERE Avg_Marks > 80;`,
            "sql",
            "Subquery examples"
        ),

        heading("Correlated Subquery"),

        definition(
            "Correlated Subquery",
            "A subquery that references a column from the outer query. It is executed once for each row processed by the outer query, making it slower than a non-correlated subquery."
        ),

        code(
            `-- Find students whose marks are above their department average
SELECT Name, Marks, Dept_Id
FROM Student S1
WHERE Marks > (
    SELECT AVG(Marks)
    FROM Student S2
    WHERE S2.Dept_Id = S1.Dept_Id
);`,
            "sql",
            "Correlated subquery"
        ),

        keyPoints([
            "INNER JOIN returns only matching rows; LEFT/RIGHT JOIN includes all rows from one side.",
            "FULL OUTER JOIN includes all rows from both tables with NULLs for non-matches.",
            "CROSS JOIN produces the Cartesian product of two tables.",
            "Subqueries can be used in WHERE, FROM, SELECT and HAVING clauses.",
            "A correlated subquery references the outer query and executes once per outer row.",
        ]),
    ],

    {
        summary:
            "Master all types of SQL joins (INNER, LEFT, RIGHT, FULL, CROSS, SELF) and learn subqueries including correlated subqueries.",
        minutes: 14,
        tags: ["sql", "joins", "subqueries", "important"],

        mcqs: [
            mcq(
                "An INNER JOIN returns:",
                ["All rows from both tables", "Only matching rows from both tables", "All rows from the left table", "The Cartesian product"],
                1,
                "INNER JOIN returns only rows where the join condition is satisfied in both tables."
            ),
            mcq(
                "A LEFT JOIN includes:",
                ["Only matching rows", "All rows from the right table", "All rows from the left table plus matching from the right", "The Cartesian product"],
                2,
                "LEFT JOIN returns all rows from the left table and matching rows from the right, with NULLs for non-matches."
            ),
            mcq(
                "A CROSS JOIN between a table with 4 rows and a table with 3 rows produces:",
                ["7 rows", "12 rows", "1 row", "4 rows"],
                1,
                "CROSS JOIN produces the Cartesian product: 4 × 3 = 12 rows."
            ),
            mcq(
                "A subquery that references a column from the outer query is called:",
                ["Nested subquery", "Derived table", "Correlated subquery", "Scalar subquery"],
                2,
                "A correlated subquery references the outer query and executes once per outer row."
            ),
            mcq(
                "Which join would you use to find all students, including those not assigned to any department?",
                ["INNER JOIN", "RIGHT JOIN", "LEFT JOIN", "CROSS JOIN"],
                2,
                "LEFT JOIN from Student to Department includes all students, even those with NULL Dept_Id."
            ),
        ],

        questions: [
            qa(
                "Explain the different types of SQL joins with examples.",
                "INNER JOIN returns only rows that have matching values in both tables. For example, joining Student and Department on Dept_Id returns only students who have a valid department. LEFT JOIN returns all rows from the left table and matching rows from the right, with NULLs for non-matches. This is useful to find students without departments. RIGHT JOIN returns all rows from the right table and matching from the left, useful to find departments without students. FULL OUTER JOIN returns all rows from both tables with NULLs where there is no match. CROSS JOIN produces the Cartesian product of both tables. SELF JOIN joins a table with itself, useful for finding pairs of students in the same department.",
                5
            ),
            qa(
                "What is a subquery? Explain its types with examples.",
                "A subquery is a query nested inside another query. The inner query executes first and its result is used by the outer query. A scalar subquery returns a single value, for example WHERE Marks > (SELECT AVG(Marks) FROM Student) finds students above average. A subquery with IN returns a list of values, for example WHERE Dept_Id IN (SELECT Dept_Id FROM Department WHERE Dept_Name = 'IT'). A subquery with EXISTS checks for the existence of rows. A derived table is a subquery in the FROM clause that acts as a temporary table. A correlated subquery references a column from the outer query and executes once for each outer row, for example finding students whose marks exceed their department's average.",
                5
            ),
            qa(
                "Differentiate between a regular subquery and a correlated subquery.",
                "A regular (non-correlated) subquery is independent of the outer query and executes only once. Its result is then used by the outer query. For example, SELECT Name FROM Student WHERE Marks > (SELECT AVG(Marks) FROM Student) computes the average once and compares each student's marks against it. A correlated subquery references a column from the outer query and executes once for each row processed by the outer query. For example, finding students whose marks exceed their department's average requires the subquery to compute the average for each student's specific department. Correlated subqueries are generally slower because of this repeated execution but are necessary for row-by-row comparisons.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 5 — Views, Indexes and Set Operations
========================================================= */

const viewsIndexesAndSetOps = createTopic(
    "views-indexes-and-set-operations",
    "Views, Indexes and Set Operations",

    [
        heading("Views"),

        definition(
            "View",
            "A virtual table based on the result set of a SQL query. A view does not store data itself; it dynamically retrieves data from the underlying tables whenever it is queried."
        ),

        heading("Creating and Using Views"),

        code(
            `-- Create a view
CREATE VIEW IT_Students AS
SELECT Roll_No, Name, Marks
FROM Student
WHERE Course = 'MSc IT';

-- Query the view like a table
SELECT * FROM IT_Students;
SELECT Name, Marks FROM IT_Students WHERE Marks > 80;

-- Create a view with joins
CREATE VIEW Student_Details AS
SELECT S.Name, S.Marks, D.Dept_Name
FROM Student S
JOIN Department D ON S.Dept_Id = D.Dept_Id;

-- Drop a view
DROP VIEW IT_Students;`,
            "sql",
            "Creating and using views"
        ),

        heading("Advantages of Views"),

        list([
            "Simplify complex queries by encapsulating joins and conditions.",
            "Provide security by restricting access to specific columns or rows.",
            "Present data in a format different from the underlying tables.",
            "Provide logical data independence — applications use views even if base tables change.",
            "Can be used to enforce business rules and present aggregated data.",
        ]),

        heading("Types of Views"),

        table(
            ["Type", "Description", "Updatable?"],
            [
                ["Simple View", "Based on a single table, no aggregates or GROUP BY", "Yes (usually)"],
                ["Complex View", "Based on multiple tables, uses joins, aggregates or GROUP BY", "No (usually)"],
            ]
        ),

        note(
            "A view does not occupy storage space for data because it is a virtual table. Only the view definition (the SQL query) is stored in the data dictionary. The data is fetched from the base tables each time the view is queried.",
            "exam",
            "Frequently Asked"
        ),

        heading("Indexes"),

        definition(
            "Index",
            "A database object that improves the speed of data retrieval operations on a table. An index creates a separate data structure (typically a B-tree) that allows the database engine to find rows without scanning the entire table."
        ),

        code(
            `-- Create an index
CREATE INDEX idx_student_name ON Student(Name);

-- Create a unique index
CREATE UNIQUE INDEX idx_student_email ON Student(Email);

-- Create a composite index (multiple columns)
CREATE INDEX idx_course_age ON Student(Course, Age);

-- Drop an index
DROP INDEX idx_student_name;`,
            "sql",
            "Creating and dropping indexes"
        ),

        heading("How Indexes Work"),

        table(
            ["Aspect", "Without Index", "With Index"],
            [
                ["Search method", "Full table scan (reads every row)", "Index lookup (B-tree traversal)"],
                ["Time complexity", "O(n)", "O(log n)"],
                ["Speed for SELECT", "Slow on large tables", "Fast"],
                ["Speed for INSERT/UPDATE/DELETE", "Fast", "Slower (index must be updated)"],
                ["Storage", "No extra storage", "Additional storage for index structure"],
            ]
        ),

        heading("When to Create Indexes"),

        list([
            "Columns frequently used in WHERE clauses.",
            "Columns used in JOIN conditions.",
            "Columns used in ORDER BY or GROUP BY.",
            "Columns with high cardinality (many unique values).",
        ]),

        heading("When NOT to Create Indexes"),

        list([
            "Small tables where a full scan is already fast.",
            "Columns that are frequently updated (index maintenance overhead).",
            "Columns with many NULL values or very few distinct values (low cardinality).",
            "Tables with more write operations than read operations.",
        ]),

        note(
            "Primary keys and UNIQUE constraints automatically create indexes. You do not need to create separate indexes for these columns.",
            "tip",
            "Automatic Indexes"
        ),

        heading("Set Operations"),

        definition(
            "Set Operations",
            "SQL operations that combine the results of two or more SELECT queries into a single result set. Both queries must return the same number of columns with compatible data types."
        ),

        table(
            ["Operation", "Purpose", "Duplicates"],
            [
                ["UNION", "Combines results of two queries, removes duplicates", "Removed"],
                ["UNION ALL", "Combines results of two queries, keeps duplicates", "Kept"],
                ["INTERSECT", "Returns only rows common to both queries", "Removed"],
                ["EXCEPT / MINUS", "Returns rows from the first query that are not in the second", "Removed"],
            ]
        ),

        code(
            `-- UNION: Combine IT and CS students (no duplicates)
SELECT Name FROM Student WHERE Course = 'MSc IT'
UNION
SELECT Name FROM Student WHERE Course = 'MSc CS';

-- UNION ALL: Keep duplicates
SELECT Name FROM Student WHERE Course = 'MSc IT'
UNION ALL
SELECT Name FROM Student WHERE Course = 'MSc CS';

-- INTERSECT: Students who appear in both queries
SELECT Name FROM Student WHERE Age > 21
INTERSECT
SELECT Name FROM Student WHERE Marks > 80;

-- EXCEPT (or MINUS in Oracle): In first but not in second
SELECT Name FROM Student WHERE Course = 'MSc IT'
EXCEPT
SELECT Name FROM Student WHERE Marks < 70;`,
            "sql",
            "Set operation examples"
        ),

        note(
            "For set operations to work, both SELECT statements must return the same number of columns, and corresponding columns must have compatible data types. The column names in the result come from the first SELECT statement.",
            "warning",
            "Rule"
        ),

        keyPoints([
            "A view is a virtual table that does not store data but presents data from base tables.",
            "Views simplify complex queries, provide security and support logical data independence.",
            "Indexes speed up SELECT queries using B-tree lookup but slow down INSERT, UPDATE and DELETE.",
            "Create indexes on columns used frequently in WHERE, JOIN and ORDER BY clauses.",
            "UNION removes duplicates; UNION ALL keeps them. INTERSECT finds common rows; EXCEPT finds differences.",
        ]),
    ],

    {
        summary:
            "Learn views for virtual tables, indexes for query performance, and set operations (UNION, INTERSECT, EXCEPT) for combining query results.",
        minutes: 12,
        tags: ["sql", "views", "indexes", "union", "set-operations", "important"],

        mcqs: [
            mcq(
                "A view in SQL is:",
                ["A physical table", "A virtual table based on a query", "A backup of a table", "An index"],
                1,
                "A view is a virtual table that dynamically retrieves data from base tables."
            ),
            mcq(
                "What is the main advantage of creating an index?",
                ["Reduces storage space", "Speeds up data retrieval", "Prevents NULL values", "Encrypts data"],
                1,
                "Indexes create a data structure that allows fast lookups without scanning the entire table."
            ),
            mcq(
                "Which set operation removes duplicates?",
                ["UNION ALL", "UNION", "CROSS JOIN", "CONCAT"],
                1,
                "UNION combines results and removes duplicate rows. UNION ALL keeps duplicates."
            ),
            mcq(
                "Indexes slow down which operations?",
                ["SELECT", "INSERT, UPDATE, DELETE", "CREATE VIEW", "GRANT"],
                1,
                "Every INSERT, UPDATE or DELETE must also update the index, adding overhead."
            ),
            mcq(
                "What does INTERSECT return?",
                ["All rows from both queries", "Rows common to both queries", "Rows only in the first query", "The Cartesian product"],
                1,
                "INTERSECT returns only the rows that appear in both query results."
            ),
            mcq(
                "A view does not store data. This means it is:",
                ["Useless", "A virtual table", "A temporary table", "A materialised view"],
                1,
                "A view is a virtual table — only its definition is stored, not the data."
            ),
        ],

        questions: [
            qa(
                "What is a view? Explain its advantages.",
                "A view is a virtual table based on the result of a SQL query. It does not store data itself; the data is dynamically retrieved from the underlying base tables each time the view is queried. The advantages of views include simplifying complex queries by encapsulating joins and conditions into a single named object, providing security by restricting user access to specific columns or rows, presenting data in a format different from the base tables, providing logical data independence so that applications can use views even if the underlying table structure changes, and enforcing business rules by presenting only validated or aggregated data.",
                5
            ),
            qa(
                "What is an index? When should you create one and when should you avoid it?",
                "An index is a database object that improves the speed of data retrieval by creating a separate data structure, typically a B-tree, that allows the database to find rows without scanning the entire table. You should create indexes on columns frequently used in WHERE clauses, JOIN conditions, ORDER BY and GROUP BY, and on columns with high cardinality (many unique values). You should avoid creating indexes on small tables where a full scan is already fast, on columns that are frequently updated because the index must be maintained with each change, on columns with many NULL values or very few distinct values, and on tables where write operations significantly outnumber read operations.",
                5
            ),
            qa(
                "Explain the SQL set operations UNION, INTERSECT and EXCEPT with examples.",
                "UNION combines the results of two SELECT queries and removes duplicate rows. For example, selecting names from IT students UNION CS students gives a combined list without duplicates. UNION ALL also combines results but keeps duplicates. INTERSECT returns only the rows that appear in both query results. For example, selecting students older than 21 INTERSECT students with marks above 80 returns only students who satisfy both conditions. EXCEPT (called MINUS in Oracle) returns rows from the first query that do not appear in the second. For example, IT students EXCEPT students with marks below 70 returns IT students who scored 70 or above. Both queries in a set operation must return the same number of columns with compatible data types.",
                5
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit2Topics = [
    introToSQLAndDDL,
    dmlCommands,
    aggregateFunctionsAndGroupBy,
    joinsAndSubqueries,
    viewsIndexesAndSetOps,
];