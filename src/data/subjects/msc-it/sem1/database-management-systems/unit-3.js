/* =========================================================
   MSc-IT • SEM 1 • Database Management Systems
   UNIT 3 — SQL and PL/SQL
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
   TOPIC 1 — Introduction to PL/SQL
========================================================= */

const introToPLSQL = createTopic(
    "introduction-to-plsql",
    "Introduction to PL/SQL",

    [
        definition(
            "PL/SQL (Procedural Language / SQL)",
            "Oracle's procedural extension to SQL that combines the data manipulation power of SQL with the procedural constructs of programming languages such as variables, loops, conditions, exception handling and modular programming."
        ),

        text(
            "SQL alone is a declarative language — you tell the database what you want but not how to do it step by step. PL/SQL adds procedural capabilities, allowing you to write complex business logic, process data row by row, handle errors gracefully and create reusable program units stored inside the database."
        ),

        heading("Why PL/SQL?"),

        list([
            "SQL alone cannot handle complex procedural logic such as loops and conditions.",
            "PL/SQL allows you to process multiple SQL statements as a single block, reducing network traffic.",
            "It provides error handling through exception management.",
            "It supports modular programming with procedures, functions and packages.",
            "PL/SQL code is stored in the database, making it reusable and secure.",
            "It integrates tightly with Oracle SQL and can call SQL statements directly.",
        ]),

        heading("Features of PL/SQL"),

        table(
            ["Feature", "Description"],
            [
                ["Block Structure", "Code is organised into DECLARE, BEGIN, EXCEPTION and END blocks"],
                ["Variables and Constants", "Supports variables, constants and user-defined data types"],
                ["Control Structures", "IF-THEN-ELSE, CASE, FOR, WHILE, LOOP"],
                ["Cursors", "Allows row-by-row processing of query results"],
                ["Exception Handling", "Catches and handles runtime errors gracefully"],
                ["Modular Programming", "Procedures, functions, packages and triggers"],
                ["Portability", "PL/SQL code runs on any platform where Oracle runs"],
                ["Performance", "Entire blocks are sent to the engine at once, reducing network calls"],
            ]
        ),

        heading("PL/SQL Block Structure"),

        definition(
            "PL/SQL Block",
            "The basic unit of PL/SQL code. Every PL/SQL program is composed of one or more blocks. A block has three sections: DECLARE (optional), BEGIN (mandatory), EXCEPTION (optional), and END (mandatory)."
        ),

        code(
            `-- Anonymous Block (not stored in database)
DECLARE
    -- Variable declarations
    v_name   VARCHAR2(50) := 'Rahul';
    v_marks  NUMBER := 85;
BEGIN
    -- Executable statements
    DBMS_OUTPUT.PUT_LINE('Name: ' || v_name);
    DBMS_OUTPUT.PUT_LINE('Marks: ' || v_marks);

    IF v_marks >= 80 THEN
        DBMS_OUTPUT.PUT_LINE('Grade: A');
    ELSE
        DBMS_OUTPUT.PUT_LINE('Grade: B');
    END IF;
EXCEPTION
    -- Error handling
    WHEN OTHERS THEN
        DBMS_OUTPUT.PUT_LINE('An error occurred: ' || SQLERRM);
END;
/`,
            "sql",
            "Basic PL/SQL anonymous block"
        ),

        output(
            `Name: Rahul
Marks: 85
Grade: A`
        ),

        heading("Sections of a PL/SQL Block"),

        table(
            ["Section", "Keyword", "Required?", "Purpose"],
            [
                ["Declaration", "DECLARE", "No", "Declare variables, constants, cursors and exceptions"],
                ["Executable", "BEGIN ... END", "Yes", "Contains the main logic and SQL statements"],
                ["Exception", "EXCEPTION", "No", "Handles runtime errors"],
            ]
        ),

        heading("Types of PL/SQL Blocks"),

        table(
            ["Type", "Stored in DB?", "Has a Name?", "Example"],
            [
                ["Anonymous Block", "No", "No", "One-time scripts, testing"],
                ["Named Block", "Yes", "Yes", "Procedures, Functions, Packages, Triggers"],
            ]
        ),

        heading("PL/SQL versus SQL"),

        table(
            ["Aspect", "SQL", "PL/SQL"],
            [
                ["Type", "Declarative (non-procedural)", "Procedural"],
                ["Execution", "One statement at a time", "Entire block at once"],
                ["Variables", "Not supported", "Fully supported"],
                ["Control flow", "Not available", "IF, LOOP, WHILE, FOR"],
                ["Error handling", "Limited", "Robust exception handling"],
                ["Modularity", "Views only", "Procedures, functions, packages"],
                ["Network traffic", "One round trip per statement", "One round trip per block"],
                ["Use case", "Data definition and manipulation", "Business logic and complex processing"],
            ]
        ),

        note(
            "PL/SQL is specific to Oracle Database. Other database systems have their own procedural extensions: T-SQL for Microsoft SQL Server, PL/pgSQL for PostgreSQL, and MySQL has stored procedure syntax that is similar but different.",
            "tip",
            "Vendor Specific"
        ),

        keyPoints([
            "PL/SQL is Oracle's procedural extension to SQL, adding variables, loops and error handling.",
            "A PL/SQL block has three sections: DECLARE (optional), BEGIN (mandatory) and EXCEPTION (optional).",
            "Anonymous blocks are not stored; named blocks (procedures, functions) are stored in the database.",
            "PL/SQL reduces network traffic by sending entire blocks to the database engine at once.",
            "PL/SQL is Oracle-specific; other databases use T-SQL, PL/pgSQL or their own extensions.",
        ]),
    ],

    {
        summary:
            "Understand what PL/SQL is, its features, block structure, types of blocks, and how it differs from plain SQL.",
        minutes: 11,
        tags: ["plsql", "introduction", "block-structure", "important"],

        mcqs: [
            mcq(
                "PL/SQL stands for:",
                ["Programming Language / SQL", "Procedural Language / SQL", "Primary Language / SQL", "Portable Language / SQL"],
                1,
                "PL/SQL stands for Procedural Language / SQL."
            ),
            mcq(
                "Which section of a PL/SQL block is mandatory?",
                ["DECLARE", "BEGIN...END", "EXCEPTION", "All sections are mandatory"],
                1,
                "The executable section (BEGIN...END) is the only mandatory section of a PL/SQL block."
            ),
            mcq(
                "An anonymous block in PL/SQL is:",
                ["Stored in the database with a name", "Not stored and has no name", "A type of trigger", "A stored procedure"],
                1,
                "Anonymous blocks are not stored in the database and do not have a name."
            ),
            mcq(
                "PL/SQL reduces network traffic because:",
                ["It compresses data", "It sends entire blocks to the engine at once", "It uses a faster protocol", "It avoids SQL"],
                1,
                "PL/SQL sends an entire block of statements in one call, reducing the number of network round trips."
            ),
            mcq(
                "Which database uses T-SQL as its procedural extension?",
                ["Oracle", "MySQL", "Microsoft SQL Server", "PostgreSQL"],
                2,
                "T-SQL (Transact-SQL) is the procedural extension used by Microsoft SQL Server."
            ),
        ],

        questions: [
            qa(
                "What is PL/SQL? Explain its key features.",
                "PL/SQL is Oracle's procedural extension to SQL that combines the data manipulation power of SQL with procedural programming constructs. Its key features include block structure where code is organised into DECLARE, BEGIN, EXCEPTION and END sections. It supports variables, constants and user-defined data types. It provides control structures such as IF-THEN-ELSE, CASE, FOR, WHILE and LOOP. It supports cursors for row-by-row processing of query results. It has robust exception handling for catching and managing runtime errors. It supports modular programming through procedures, functions, packages and triggers. It also improves performance by sending entire blocks to the database engine in a single call.",
                5
            ),
            qa(
                "Explain the structure of a PL/SQL block with an example.",
                "A PL/SQL block has three sections. The DECLARE section is optional and is used to declare variables, constants, cursors and exceptions. The BEGIN...END section is mandatory and contains the executable statements including SQL queries and procedural logic. The EXCEPTION section is optional and handles runtime errors. For example, a block can declare a variable v_marks NUMBER := 85 in the DECLARE section, use an IF statement in the BEGIN section to check if marks are above 80 and print a grade, and include a WHEN OTHERS handler in the EXCEPTION section to catch any unexpected errors. The block ends with END; followed by a forward slash /.",
                5
            ),
            qa(
                "Differentiate between SQL and PL/SQL.",
                "SQL is a declarative language where you specify what data you want without describing the step-by-step process, while PL/SQL is a procedural language that adds programming constructs to SQL. SQL executes one statement at a time requiring a network round trip for each, while PL/SQL sends an entire block at once reducing network traffic. SQL does not support variables or control flow, while PL/SQL fully supports variables, constants, IF-ELSE conditions, loops and exception handling. SQL is limited to data definition and manipulation, while PL/SQL can implement complex business logic through procedures, functions, packages and triggers. SQL is a standard supported by all RDBMS, while PL/SQL is specific to Oracle.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — PL/SQL Variables, Data Types and Control Flow
========================================================= */

const plsqlVariablesAndControlFlow = createTopic(
    "plsql-variables-data-types-and-control-flow",
    "PL/SQL Variables, Data Types and Control Flow",

    [
        text(
            "PL/SQL supports a rich set of data types and control structures that allow you to write complex procedural logic inside the database. Understanding variables, data types and control flow is essential before moving on to cursors, procedures and triggers."
        ),

        heading("Variables and Constants"),

        definition(
            "Variable",
            "A named storage location in memory that holds a value which can change during program execution. Variables must be declared in the DECLARE section before they can be used."
        ),

        definition(
            "Constant",
            "A named storage location whose value is set at declaration and cannot be changed during execution. Declared using the CONSTANT keyword."
        ),

        code(
            `DECLARE
    -- Variable declarations
    v_name     VARCHAR2(50) := 'Rahul';
    v_age      NUMBER(3)    := 22;
    v_salary   NUMBER(10,2) := 50000.00;
    v_active   BOOLEAN      := TRUE;
    v_hire_date DATE        := SYSDATE;

    -- Constant declaration
    c_pi       CONSTANT NUMBER := 3.14159;
    c_company  CONSTANT VARCHAR2(30) := 'TechCorp';

    -- NOT NULL constraint on variable
    v_id       NUMBER NOT NULL := 1;
BEGIN
    DBMS_OUTPUT.PUT_LINE('Name: ' || v_name);
    DBMS_OUTPUT.PUT_LINE('Company: ' || c_company);
    -- c_pi := 3.14;  → ERROR! Cannot modify a constant
END;
/`,
            "sql",
            "Variable and constant declarations"
        ),

        heading("PL/SQL Data Types"),

        table(
            ["Category", "Data Type", "Description", "Example"],
            [
                ["Scalar", "NUMBER(p,s)", "Numeric with precision p and scale s", "NUMBER(10,2)"],
                ["Scalar", "VARCHAR2(n)", "Variable-length string up to n characters", "VARCHAR2(100)"],
                ["Scalar", "CHAR(n)", "Fixed-length string of n characters", "CHAR(10)"],
                ["Scalar", "DATE", "Date and time", "SYSDATE"],
                ["Scalar", "BOOLEAN", "TRUE, FALSE or NULL", "TRUE"],
                ["Scalar", "BINARY_INTEGER", "Signed integer (efficient for counters)", "42"],
                ["Composite", "RECORD", "Groups related fields of different types", "emp_rec.name"],
                ["Composite", "TABLE (Collection)", "Array-like structure of same-type elements", "emp_table(1)"],
                ["Reference", "%TYPE", "Inherits data type from a column or variable", "Student.Name%TYPE"],
                ["Reference", "%ROWTYPE", "Inherits structure of an entire table row", "Student%ROWTYPE"],
            ]
        ),

        heading("%TYPE and %ROWTYPE"),

        definition(
            "%TYPE",
            "An attribute that declares a variable with the same data type as a database column or another variable. It ensures that the variable type stays in sync with the column definition."
        ),

        definition(
            "%ROWTYPE",
            "An attribute that declares a record variable with the same structure as a database table row. Each column of the table becomes a field in the record."
        ),

        code(
            `DECLARE
    -- %TYPE: Variable matches the column's data type
    v_name  Student.Name%TYPE;
    v_marks Student.Marks%TYPE;

    -- %ROWTYPE: Record matches the entire table structure
    v_student Student%ROWTYPE;
BEGIN
    -- Fetch a single column
    SELECT Name INTO v_name FROM Student WHERE Roll_No = 'M001';
    DBMS_OUTPUT.PUT_LINE('Name: ' || v_name);

    -- Fetch an entire row
    SELECT * INTO v_student FROM Student WHERE Roll_No = 'M001';
    DBMS_OUTPUT.PUT_LINE('Name: ' || v_student.Name);
    DBMS_OUTPUT.PUT_LINE('Marks: ' || v_student.Marks);
END;
/`,
            "sql",
            "Using %TYPE and %ROWTYPE"
        ),

        note(
            "Using %TYPE and %ROWTYPE is a best practice because if the column's data type changes in the table definition, your PL/SQL code automatically adapts without modification.",
            "tip",
            "Best Practice"
        ),

        heading("Conditional Statements"),

        code(
            `-- IF-THEN-ELSIF-ELSE
DECLARE
    v_marks NUMBER := 75;
    v_grade VARCHAR2(5);
BEGIN
    IF v_marks >= 90 THEN
        v_grade := 'A+';
    ELSIF v_marks >= 80 THEN
        v_grade := 'A';
    ELSIF v_marks >= 70 THEN
        v_grade := 'B';
    ELSIF v_marks >= 60 THEN
        v_grade := 'C';
    ELSE
        v_grade := 'F';
    END IF;

    DBMS_OUTPUT.PUT_LINE('Grade: ' || v_grade);
END;
/

-- CASE Statement
DECLARE
    v_day NUMBER := 3;
    v_day_name VARCHAR2(10);
BEGIN
    CASE v_day
        WHEN 1 THEN v_day_name := 'Monday';
        WHEN 2 THEN v_day_name := 'Tuesday';
        WHEN 3 THEN v_day_name := 'Wednesday';
        ELSE v_day_name := 'Other';
    END CASE;

    DBMS_OUTPUT.PUT_LINE('Day: ' || v_day_name);
END;
/`,
            "sql",
            "IF-ELSIF-ELSE and CASE statements"
        ),

        heading("Loops"),

        code(
            `-- Simple LOOP (must have EXIT condition)
DECLARE
    v_counter NUMBER := 1;
BEGIN
    LOOP
        DBMS_OUTPUT.PUT_LINE('Count: ' || v_counter);
        v_counter := v_counter + 1;
        EXIT WHEN v_counter > 5;
    END LOOP;
END;
/

-- WHILE LOOP
DECLARE
    v_counter NUMBER := 1;
BEGIN
    WHILE v_counter <= 5 LOOP
        DBMS_OUTPUT.PUT_LINE('Count: ' || v_counter);
        v_counter := v_counter + 1;
    END LOOP;
END;
/

-- FOR LOOP (automatic counter)
BEGIN
    FOR i IN 1..5 LOOP
        DBMS_OUTPUT.PUT_LINE('Count: ' || i);
    END LOOP;

    -- Reverse FOR loop
    FOR i IN REVERSE 1..5 LOOP
        DBMS_OUTPUT.PUT_LINE('Reverse: ' || i);
    END LOOP;
END;
/`,
            "sql",
            "PL/SQL loop types"
        ),

        heading("Loop Comparison"),

        table(
            ["Loop Type", "Condition Check", "Counter", "Best For"],
            [
                ["Simple LOOP", "EXIT WHEN inside the loop", "Manual", "When exit condition is complex"],
                ["WHILE LOOP", "Before each iteration", "Manual", "When condition is checked before entry"],
                ["FOR LOOP", "Automatic (fixed range)", "Automatic", "When number of iterations is known"],
            ]
        ),

        heading("SELECT INTO"),

        definition(
            "SELECT INTO",
            "A PL/SQL statement that retrieves exactly one row from a table and stores the values into variables. If the query returns zero rows or more than one row, an exception is raised."
        ),

        code(
            `DECLARE
    v_name  VARCHAR2(50);
    v_marks NUMBER;
BEGIN
    SELECT Name, Marks
    INTO v_name, v_marks
    FROM Student
    WHERE Roll_No = 'M001';

    DBMS_OUTPUT.PUT_LINE(v_name || ' scored ' || v_marks);
EXCEPTION
    WHEN NO_DATA_FOUND THEN
        DBMS_OUTPUT.PUT_LINE('Student not found');
    WHEN TOO_MANY_ROWS THEN
        DBMS_OUTPUT.PUT_LINE('Query returned more than one row');
END;
/`,
            "sql",
            "SELECT INTO with exception handling"
        ),

        keyPoints([
            "Variables are declared in the DECLARE section with a data type and optional initial value.",
            "%TYPE inherits a column's data type; %ROWTYPE inherits an entire table row structure.",
            "PL/SQL supports IF-ELSIF-ELSE and CASE for conditional branching.",
            "Three loop types: simple LOOP with EXIT, WHILE LOOP and FOR LOOP with automatic counter.",
            "SELECT INTO retrieves exactly one row into variables; it raises exceptions for zero or multiple rows.",
        ]),
    ],

    {
        summary:
            "Learn PL/SQL variables, constants, data types including %TYPE and %ROWTYPE, and control flow with IF-ELSE, CASE and loops.",
        minutes: 12,
        tags: ["plsql", "variables", "data-types", "loops", "important"],

        mcqs: [
            mcq(
                "The %TYPE attribute is used to:",
                ["Define a new table", "Inherit the data type of a column or variable", "Create a cursor", "Handle exceptions"],
                1,
                "%TYPE declares a variable with the same data type as an existing column or variable."
            ),
            mcq(
                "What does %ROWTYPE do?",
                ["Returns the number of rows", "Declares a record matching a table's row structure", "Deletes a row", "Counts columns"],
                1,
                "%ROWTYPE declares a record variable with the same structure as an entire table row."
            ),
            mcq(
                "Which loop automatically manages the counter variable?",
                ["Simple LOOP", "WHILE LOOP", "FOR LOOP", "All of the above"],
                2,
                "The FOR loop automatically initialises, increments and checks the counter variable."
            ),
            mcq(
                "What exception is raised when SELECT INTO returns no rows?",
                ["TOO_MANY_ROWS", "NO_DATA_FOUND", "ZERO_ROWS", "NULL_VALUE"],
                1,
                "NO_DATA_FOUND is raised when a SELECT INTO statement returns zero rows."
            ),
            mcq(
                "A constant in PL/SQL is declared using:",
                ["FINAL keyword", "CONSTANT keyword", "FIXED keyword", "IMMUTABLE keyword"],
                1,
                "The CONSTANT keyword is used to declare a variable whose value cannot be changed."
            ),
        ],

        questions: [
            qa(
                "Explain %TYPE and %ROWTYPE with examples.",
                "The %TYPE attribute declares a variable with the same data type as a database column or another variable. For example, v_name Student.Name%TYPE declares v_name with the same data type as the Name column in the Student table. If the column type changes from VARCHAR2(50) to VARCHAR2(100), the variable automatically adapts. The %ROWTYPE attribute declares a record variable that matches the entire structure of a table row. For example, v_student Student%ROWTYPE creates a record with fields for every column in the Student table. You can access individual fields using dot notation: v_student.Name, v_student.Marks. Both attributes are best practices because they keep your code in sync with the database schema.",
                5
            ),
            qa(
                "Explain the three types of loops in PL/SQL with examples.",
                "The simple LOOP executes indefinitely until an EXIT or EXIT WHEN statement is encountered. For example, LOOP DBMS_OUTPUT.PUT_LINE(v_counter); v_counter := v_counter + 1; EXIT WHEN v_counter > 5; END LOOP. The WHILE LOOP checks the condition before each iteration and executes only while the condition is true. For example, WHILE v_counter <= 5 LOOP ... END LOOP. The FOR LOOP automatically manages a counter variable over a specified range and is the most concise. For example, FOR i IN 1..5 LOOP DBMS_OUTPUT.PUT_LINE(i); END LOOP. The FOR loop also supports REVERSE to count downward. Use FOR when the number of iterations is known, WHILE when the condition must be checked before entry, and simple LOOP when the exit condition is complex.",
                5
            ),
            qa(
                "What is SELECT INTO? What exceptions can it raise?",
                "SELECT INTO is a PL/SQL statement that retrieves exactly one row from a table and stores the column values into declared variables. For example, SELECT Name, Marks INTO v_name, v_marks FROM Student WHERE Roll_No = 'M001' fetches one student's data into two variables. It can raise two important exceptions. NO_DATA_FOUND is raised when the query returns zero rows, meaning no matching record was found. TOO_MANY_ROWS is raised when the query returns more than one row, because SELECT INTO can only handle a single row. Both exceptions should be handled in the EXCEPTION section to prevent the program from crashing.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — Cursors in PL/SQL
========================================================= */

const cursorsInPLSQL = createTopic(
    "cursors-in-plsql",
    "Cursors in PL/SQL",

    [
        definition(
            "Cursor",
            "A pointer to a private memory area (called the context area) that holds the result set of a SQL query. Cursors allow you to process query results row by row in PL/SQL."
        ),

        text(
            "When you execute a SQL statement, Oracle allocates a memory area called the context area. A cursor is a handle or pointer to this context area. While SELECT INTO works for single-row queries, cursors are essential when you need to process multiple rows one at a time."
        ),

        heading("Types of Cursors"),

        table(
            ["Type", "Declared By", "Control", "Use Case"],
            [
                ["Implicit Cursor", "Oracle automatically", "No manual control", "Single-row SELECT, INSERT, UPDATE, DELETE"],
                ["Explicit Cursor", "Programmer in DECLARE section", "Full manual control (OPEN, FETCH, CLOSE)", "Multi-row SELECT queries"],
            ]
        ),

        heading("Implicit Cursors"),

        definition(
            "Implicit Cursor",
            "A cursor that Oracle creates automatically every time a SQL statement (SELECT INTO, INSERT, UPDATE, DELETE) is executed. The programmer does not declare, open or close it."
        ),

        heading("Implicit Cursor Attributes"),

        table(
            ["Attribute", "Returns", "Description"],
            [
                ["SQL%FOUND", "BOOLEAN", "TRUE if the last SQL statement affected one or more rows"],
                ["SQL%NOTFOUND", "BOOLEAN", "TRUE if the last SQL statement affected zero rows"],
                ["SQL%ROWCOUNT", "INTEGER", "Number of rows affected by the last SQL statement"],
                ["SQL%ISOPEN", "BOOLEAN", "Always FALSE for implicit cursors (Oracle closes them automatically)"],
            ]
        ),

        code(
            `BEGIN
    UPDATE Student SET Marks = Marks + 5 WHERE Course = 'MSc IT';

    IF SQL%FOUND THEN
        DBMS_OUTPUT.PUT_LINE(SQL%ROWCOUNT || ' rows updated.');
    ELSE
        DBMS_OUTPUT.PUT_LINE('No rows were updated.');
    END IF;
END;
/`,
            "sql",
            "Implicit cursor attributes"
        ),

        heading("Explicit Cursors"),

        definition(
            "Explicit Cursor",
            "A cursor declared by the programmer in the DECLARE section for a SELECT query that returns multiple rows. The programmer has full control over opening, fetching and closing the cursor."
        ),

        heading("Explicit Cursor Lifecycle"),

        steps([
            "DECLARE — Define the cursor with a SELECT query in the DECLARE section",
            "OPEN — Execute the query and allocate the context area",
            "FETCH — Retrieve one row at a time from the result set into variables",
            "CLOSE — Release the context area and free memory",
        ]),

        code(
            `DECLARE
    -- Step 1: DECLARE the cursor
    CURSOR c_students IS
        SELECT Roll_No, Name, Marks FROM Student WHERE Course = 'MSc IT';

    -- Variables to hold fetched data
    v_roll   Student.Roll_No%TYPE;
    v_name   Student.Name%TYPE;
    v_marks  Student.Marks%TYPE;
BEGIN
    -- Step 2: OPEN the cursor
    OPEN c_students;

    -- Step 3: FETCH rows in a loop
    LOOP
        FETCH c_students INTO v_roll, v_name, v_marks;
        EXIT WHEN c_students%NOTFOUND;
        DBMS_OUTPUT.PUT_LINE(v_roll || ' | ' || v_name || ' | ' || v_marks);
    END LOOP;

    -- Step 4: CLOSE the cursor
    CLOSE c_students;
END;
/`,
            "sql",
            "Explicit cursor lifecycle"
        ),

        heading("Explicit Cursor Attributes"),

        table(
            ["Attribute", "Returns", "Description"],
            [
                ["cursor_name%FOUND", "BOOLEAN", "TRUE if the last FETCH returned a row"],
                ["cursor_name%NOTFOUND", "BOOLEAN", "TRUE if the last FETCH did not return a row"],
                ["cursor_name%ROWCOUNT", "INTEGER", "Number of rows fetched so far"],
                ["cursor_name%ISOPEN", "BOOLEAN", "TRUE if the cursor is currently open"],
            ]
        ),

        heading("Cursor FOR Loop (Simplified Syntax)"),

        text(
            "The cursor FOR loop is the most convenient way to process cursor results. It automatically declares a record variable, opens the cursor, fetches rows and closes the cursor when done."
        ),

        code(
            `-- Cursor FOR Loop — no need for OPEN, FETCH, CLOSE
DECLARE
    CURSOR c_students IS
        SELECT Name, Marks FROM Student WHERE Course = 'MSc IT';
BEGIN
    FOR rec IN c_students LOOP
        DBMS_OUTPUT.PUT_LINE(rec.Name || ' scored ' || rec.Marks);
    END LOOP;
    -- Cursor is automatically closed here
END;
/

-- Even shorter: inline cursor (no DECLARE needed)
BEGIN
    FOR rec IN (SELECT Name, Marks FROM Student WHERE Marks > 80) LOOP
        DBMS_OUTPUT.PUT_LINE(rec.Name || ': ' || rec.Marks);
    END LOOP;
END;
/`,
            "sql",
            "Cursor FOR loop"
        ),

        note(
            "The cursor FOR loop is the recommended approach for processing multi-row queries in PL/SQL. It eliminates the need for manual OPEN, FETCH and CLOSE, reducing the chance of errors such as forgetting to close a cursor.",
            "tip",
            "Best Practice"
        ),

        heading("Parameterised Cursors"),

        definition(
            "Parameterised Cursor",
            "An explicit cursor that accepts parameters, allowing the same cursor to be used with different filter values."
        ),

        code(
            `DECLARE
    CURSOR c_students(p_course VARCHAR2) IS
        SELECT Name, Marks FROM Student WHERE Course = p_course;
BEGIN
    DBMS_OUTPUT.PUT_LINE('--- MSc IT Students ---');
    FOR rec IN c_students('MSc IT') LOOP
        DBMS_OUTPUT.PUT_LINE(rec.Name || ': ' || rec.Marks);
    END LOOP;

    DBMS_OUTPUT.PUT_LINE('--- MSc CS Students ---');
    FOR rec IN c_students('MSc CS') LOOP
        DBMS_OUTPUT.PUT_LINE(rec.Name || ': ' || rec.Marks);
    END LOOP;
END;
/`,
            "sql",
            "Parameterised cursor"
        ),

        keyPoints([
            "A cursor is a pointer to the memory area holding a query's result set.",
            "Implicit cursors are created automatically by Oracle for every SQL statement.",
            "Explicit cursors are declared by the programmer and follow OPEN-FETCH-CLOSE lifecycle.",
            "The cursor FOR loop automatically handles OPEN, FETCH and CLOSE.",
            "Parameterised cursors accept arguments, making them reusable with different values.",
        ]),
    ],

    {
        summary:
            "Master implicit and explicit cursors, cursor attributes, the cursor FOR loop and parameterised cursors for row-by-row processing.",
        minutes: 12,
        tags: ["plsql", "cursors", "explicit-cursor", "implicit-cursor", "important"],

        mcqs: [
            mcq(
                "An implicit cursor is created by:",
                ["The programmer", "Oracle automatically", "The DBA", "A trigger"],
                1,
                "Oracle automatically creates an implicit cursor for every SQL statement executed."
            ),
            mcq(
                "What does SQL%ROWCOUNT return?",
                ["Total rows in the table", "Number of rows affected by the last SQL statement", "Number of columns", "Cursor position"],
                1,
                "SQL%ROWCOUNT returns the number of rows affected by the most recent SQL statement."
            ),
            mcq(
                "The correct order of explicit cursor operations is:",
                ["FETCH, OPEN, CLOSE", "OPEN, FETCH, CLOSE", "DECLARE, CLOSE, FETCH", "OPEN, CLOSE, FETCH"],
                1,
                "The lifecycle is DECLARE, OPEN, FETCH (in a loop), and CLOSE."
            ),
            mcq(
                "A cursor FOR loop automatically handles:",
                ["Only OPEN", "OPEN, FETCH and CLOSE", "Only FETCH and CLOSE", "Only DECLARE"],
                1,
                "The cursor FOR loop automatically opens the cursor, fetches rows and closes it when done."
            ),
            mcq(
                "cursor_name%NOTFOUND returns TRUE when:",
                ["The cursor is open", "The last FETCH returned a row", "The last FETCH did not return a row", "The cursor is closed"],
                2,
                "%NOTFOUND returns TRUE when the most recent FETCH did not retrieve a row."
            ),
        ],

        questions: [
            qa(
                "Differentiate between implicit and explicit cursors.",
                "An implicit cursor is created automatically by Oracle every time a SQL statement such as SELECT INTO, INSERT, UPDATE or DELETE is executed. The programmer has no manual control over it and cannot open, fetch or close it. Its attributes are accessed using the SQL% prefix, such as SQL%ROWCOUNT and SQL%FOUND. An explicit cursor is declared by the programmer in the DECLARE section for a SELECT query that returns multiple rows. The programmer has full control and must explicitly OPEN the cursor, FETCH rows one at a time in a loop, and CLOSE the cursor when done. Its attributes use the cursor name as prefix, such as c_students%NOTFOUND.",
                5
            ),
            qa(
                "Explain the lifecycle of an explicit cursor with an example.",
                "An explicit cursor follows four steps. First, DECLARE defines the cursor with a SELECT query in the DECLARE section: CURSOR c_students IS SELECT Name, Marks FROM Student. Second, OPEN executes the query and allocates the context area: OPEN c_students. Third, FETCH retrieves one row at a time into variables inside a loop: FETCH c_students INTO v_name, v_marks, with EXIT WHEN c_students%NOTFOUND to stop when no more rows exist. Fourth, CLOSE releases the memory: CLOSE c_students. The cursor FOR loop simplifies this by automatically handling OPEN, FETCH and CLOSE: FOR rec IN c_students LOOP ... END LOOP.",
                5
            ),
            qa(
                "What is a parameterised cursor? Give an example.",
                "A parameterised cursor is an explicit cursor that accepts parameters, allowing the same cursor definition to be reused with different filter values. For example, CURSOR c_students(p_course VARCHAR2) IS SELECT Name, Marks FROM Student WHERE Course = p_course defines a cursor that takes a course name as a parameter. It can be used as FOR rec IN c_students('MSc IT') LOOP to fetch IT students, and then reused as FOR rec IN c_students('MSc CS') LOOP to fetch CS students, without redefining the cursor. This makes the code more modular and reduces duplication.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — Stored Procedures and Functions
========================================================= */

const storedProceduresAndFunctions = createTopic(
    "stored-procedures-and-functions",
    "Stored Procedures and Functions",

    [
        definition(
            "Stored Procedure",
            "A named PL/SQL block that is stored in the database and can be called by name. It can accept parameters, perform operations and optionally return values through OUT parameters."
        ),

        definition(
            "Stored Function",
            "A named PL/SQL block stored in the database that must return exactly one value using the RETURN statement. It can be called from SQL expressions as well as PL/SQL blocks."
        ),

        heading("Procedure versus Function"),

        table(
            ["Aspect", "Procedure", "Function"],
            [
                ["Return value", "Optional (via OUT parameters)", "Mandatory (exactly one value via RETURN)"],
                ["Called from SQL?", "No (called with CALL or from PL/SQL)", "Yes (can be used in SELECT, WHERE, etc.)"],
                ["Keyword", "CREATE PROCEDURE", "CREATE FUNCTION ... RETURN datatype"],
                ["Use case", "Perform actions (INSERT, UPDATE, DELETE)", "Compute and return a value"],
                ["DML allowed?", "Yes", "Yes (but restricted if called from SQL)"],
                ["Example", "Update student marks", "Calculate student average"],
            ]
        ),

        heading("Creating a Stored Procedure"),

        code(
            `-- Create a procedure to add a new student
CREATE OR REPLACE PROCEDURE Add_Student (
    p_roll    IN  VARCHAR2,
    p_name    IN  VARCHAR2,
    p_course  IN  VARCHAR2,
    p_marks   IN  NUMBER,
    p_result  OUT VARCHAR2
)
IS
BEGIN
    INSERT INTO Student (Roll_No, Name, Course, Marks)
    VALUES (p_roll, p_name, p_course, p_marks);

    p_result := 'Student added successfully';
    COMMIT;
EXCEPTION
    WHEN DUP_VAL_ON_INDEX THEN
        p_result := 'Error: Roll number already exists';
        ROLLBACK;
    WHEN OTHERS THEN
        p_result := 'Error: ' || SQLERRM;
        ROLLBACK;
END Add_Student;
/`,
            "sql",
            "Creating a stored procedure"
        ),

        heading("Calling a Procedure"),

        code(
            `-- Call from PL/SQL block
DECLARE
    v_result VARCHAR2(100);
BEGIN
    Add_Student('M010', 'Vikram', 'MSc IT', 88, v_result);
    DBMS_OUTPUT.PUT_LINE(v_result);
END;
/

-- Call from SQL*Plus or SQL Developer
EXEC Add_Student('M011', 'Neha', 'MSc IT', 91, :result);`,
            "sql",
            "Calling a stored procedure"
        ),

        heading("Parameter Modes"),

        table(
            ["Mode", "Direction", "Purpose", "Default?"],
            [
                ["IN", "Caller → Procedure", "Passes a value into the procedure", "Yes (default)"],
                ["OUT", "Procedure → Caller", "Returns a value to the caller", "No"],
                ["IN OUT", "Both directions", "Passes a value in and returns a modified value", "No"],
            ]
        ),

        code(
            `-- IN OUT parameter example
CREATE OR REPLACE PROCEDURE Double_Value (
    p_num IN OUT NUMBER
)
IS
BEGIN
    p_num := p_num * 2;
END;
/

-- Calling it
DECLARE
    v_num NUMBER := 10;
BEGIN
    Double_Value(v_num);
    DBMS_OUTPUT.PUT_LINE('Doubled: ' || v_num);  -- 20
END;
/`,
            "sql",
            "IN OUT parameter example"
        ),

        heading("Creating a Stored Function"),

        code(
            `-- Create a function to calculate average marks for a course
CREATE OR REPLACE FUNCTION Get_Avg_Marks (
    p_course IN VARCHAR2
) RETURN NUMBER
IS
    v_avg NUMBER;
BEGIN
    SELECT AVG(Marks) INTO v_avg
    FROM Student
    WHERE Course = p_course;

    RETURN NVL(v_avg, 0);
EXCEPTION
    WHEN NO_DATA_FOUND THEN
        RETURN 0;
END Get_Avg_Marks;
/`,
            "sql",
            "Creating a stored function"
        ),

        heading("Calling a Function"),

        code(
            `-- Call from SQL query
SELECT Get_Avg_Marks('MSc IT') AS Average_Marks FROM DUAL;

-- Call from PL/SQL
DECLARE
    v_avg NUMBER;
BEGIN
    v_avg := Get_Avg_Marks('MSc IT');
    DBMS_OUTPUT.PUT_LINE('Average: ' || v_avg);
END;
/

-- Use in WHERE clause
SELECT Name, Marks FROM Student
WHERE Marks > Get_Avg_Marks('MSc IT');`,
            "sql",
            "Calling a stored function"
        ),

        heading("Managing Procedures and Functions"),

        table(
            ["Command", "Purpose"],
            [
                ["CREATE OR REPLACE PROCEDURE ...", "Create or update a procedure"],
                ["CREATE OR REPLACE FUNCTION ...", "Create or update a function"],
                ["DROP PROCEDURE procedure_name", "Delete a procedure"],
                ["DROP FUNCTION function_name", "Delete a function"],
                ["SHOW ERRORS", "Display compilation errors"],
                ["SELECT * FROM USER_OBJECTS WHERE OBJECT_TYPE = 'PROCEDURE'", "List all procedures"],
                ["SELECT * FROM USER_SOURCE WHERE NAME = 'ADD_STUDENT'", "View source code"],
            ]
        ),

        note(
            "Use CREATE OR REPLACE instead of just CREATE so that if the procedure or function already exists, it is replaced without needing to DROP it first. This preserves any grants that were given on the object.",
            "tip",
            "Best Practice"
        ),

        keyPoints([
            "A procedure performs actions and can return values through OUT parameters; a function must return exactly one value.",
            "Functions can be called from SQL queries; procedures cannot.",
            "Parameter modes: IN (input), OUT (output), IN OUT (both).",
            "Use CREATE OR REPLACE to avoid dropping and recreating stored program units.",
            "Procedures and functions are stored in the database and can be reused by multiple applications.",
        ]),
    ],

    {
        summary:
            "Learn to create, call and manage stored procedures and functions, understand parameter modes and know when to use each.",
        minutes: 13,
        tags: ["plsql", "procedures", "functions", "stored-programs", "important"],

        mcqs: [
            mcq(
                "A stored function must:",
                ["Accept at least one parameter", "Return exactly one value", "Be called using EXEC", "Not use SQL statements"],
                1,
                "A stored function must return exactly one value using the RETURN statement."
            ),
            mcq(
                "Which can be called directly from a SQL SELECT statement?",
                ["Procedure", "Function", "Trigger", "Anonymous block"],
                1,
                "Functions can be called from SQL queries; procedures cannot."
            ),
            mcq(
                "The default parameter mode in PL/SQL is:",
                ["OUT", "IN OUT", "IN", "RETURN"],
                2,
                "IN is the default parameter mode if no mode is specified."
            ),
            mcq(
                "What does CREATE OR REPLACE do?",
                ["Creates a new object or replaces it if it already exists", "Creates a backup", "Drops the object", "Renames the object"],
                0,
                "CREATE OR REPLACE creates the object if it does not exist, or replaces it if it does."
            ),
            mcq(
                "An OUT parameter is used to:",
                ["Pass a value into the procedure", "Return a value from the procedure to the caller", "Both pass in and return", "Declare a constant"],
                1,
                "OUT parameters return values from the procedure back to the calling program."
            ),
        ],

        questions: [
            qa(
                "Differentiate between a stored procedure and a stored function.",
                "A stored procedure is a named PL/SQL block that performs actions such as INSERT, UPDATE or DELETE and can optionally return values through OUT parameters. It is called using EXEC or from within a PL/SQL block and cannot be used directly in a SQL SELECT statement. A stored function is also a named PL/SQL block but must return exactly one value using the RETURN statement. It can be called from SQL queries such as SELECT Get_Avg_Marks('MSc IT') FROM DUAL, and can be used in WHERE clauses and expressions. Procedures are best for performing operations, while functions are best for computing and returning values.",
                5
            ),
            qa(
                "Explain the three parameter modes in PL/SQL with examples.",
                "The IN mode passes a value from the caller into the procedure or function. It is the default mode and the parameter acts as a constant inside the program unit. For example, p_name IN VARCHAR2 receives a name from the caller. The OUT mode returns a value from the procedure back to the caller. The parameter is uninitialised inside the procedure and the caller receives the value after execution. For example, p_result OUT VARCHAR2 returns a status message. The IN OUT mode serves both purposes — it passes a value in and returns a modified value. For example, a procedure Double_Value(p_num IN OUT NUMBER) receives a number, doubles it, and the caller sees the updated value.",
                5
            ),
            qa(
                "Write a PL/SQL function that returns the highest marks in a given course.",
                "CREATE OR REPLACE FUNCTION Get_Top_Marks(p_course IN VARCHAR2) RETURN NUMBER IS v_max NUMBER; BEGIN SELECT MAX(Marks) INTO v_max FROM Student WHERE Course = p_course; RETURN NVL(v_max, 0); EXCEPTION WHEN NO_DATA_FOUND THEN RETURN 0; END Get_Top_Marks; / This function takes a course name as input, queries the Student table for the maximum marks in that course, and returns the result. NVL handles the case where no students exist for the course by returning 0 instead of NULL. It can be called from SQL: SELECT Get_Top_Marks('MSc IT') FROM DUAL.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 5 — Triggers in PL/SQL
========================================================= */

const triggersInPLSQL = createTopic(
    "triggers-in-plsql",
    "Triggers in PL/SQL",

    [
        definition(
            "Trigger",
            "A named PL/SQL block that is stored in the database and automatically executed (fired) in response to a specific event such as INSERT, UPDATE or DELETE on a table. Triggers cannot be called directly."
        ),

        text(
            "Triggers are powerful tools for enforcing business rules, auditing changes, maintaining derived columns and implementing complex security policies. They fire automatically and transparently, ensuring that critical logic is never bypassed."
        ),

        heading("Trigger Events and Timing"),

        table(
            ["Aspect", "Options"],
            [
                ["Event", "INSERT, UPDATE, DELETE"],
                ["Timing", "BEFORE (before the event), AFTER (after the event)"],
                ["Level", "Row-level (fires for each row), Statement-level (fires once per statement)"],
                ["Scope", "Table triggers, View triggers (INSTEAD OF), Database/System triggers"],
            ]
        ),

        heading("Trigger Syntax"),

        code(
            `CREATE OR REPLACE TRIGGER trigger_name
{BEFORE | AFTER | INSTEAD OF}
{INSERT | UPDATE | DELETE} [OF column_name]
ON table_name
[FOR EACH ROW]
[WHEN (condition)]
DECLARE
    -- Variable declarations
BEGIN
    -- Trigger body
EXCEPTION
    -- Error handling
END;
/`,
            "sql",
            "General trigger syntax"
        ),

        heading("Row-Level versus Statement-Level Triggers"),

        table(
            ["Aspect", "Row-Level Trigger", "Statement-Level Trigger"],
            [
                ["Keyword", "FOR EACH ROW", "No FOR EACH ROW clause"],
                ["Fires", "Once for each affected row", "Once per SQL statement"],
                ["Access to :OLD and :NEW", "Yes", "No"],
                ["Use case", "Validate or modify individual rows", "Log that an operation occurred"],
                ["Example", "Check salary before each row update", "Log 'Update performed' once"],
            ]
        ),

        heading(":OLD and :NEW Pseudorecords"),

        definition(
            ":OLD and :NEW",
            "Pseudorecords available in row-level triggers. :OLD refers to the row's values before the operation, and :NEW refers to the values after the operation. They are available only in row-level triggers."
        ),

        table(
            ["Operation", ":OLD", ":NEW"],
            [
                ["INSERT", "NULL (no previous row)", "Contains the new values being inserted"],
                ["UPDATE", "Contains the values before update", "Contains the values after update"],
                ["DELETE", "Contains the values being deleted", "NULL (row will no longer exist)"],
            ]
        ),

        heading("Example: BEFORE INSERT Trigger"),

        code(
            `-- Automatically set a timestamp and validate marks
CREATE OR REPLACE TRIGGER trg_before_insert_student
BEFORE INSERT ON Student
FOR EACH ROW
BEGIN
    -- Validate marks
    IF :NEW.Marks < 0 OR :NEW.Marks > 100 THEN
        RAISE_APPLICATION_ERROR(-20001, 'Marks must be between 0 and 100');
    END IF;

    -- Auto-generate a log message
    DBMS_OUTPUT.PUT_LINE('Inserting: ' || :NEW.Name || ' with marks ' || :NEW.Marks);
END;
/`,
            "sql",
            "BEFORE INSERT trigger"
        ),

        heading("Example: AFTER UPDATE Trigger (Audit)"),

        code(
            `-- Create an audit table first
CREATE TABLE Student_Audit (
    Audit_Id    NUMBER GENERATED ALWAYS AS IDENTITY,
    Roll_No     VARCHAR2(10),
    Old_Marks   NUMBER,
    New_Marks   NUMBER,
    Changed_By  VARCHAR2(50),
    Changed_On  DATE
);

-- AFTER UPDATE trigger to log changes
CREATE OR REPLACE TRIGGER trg_after_update_marks
AFTER UPDATE OF Marks ON Student
FOR EACH ROW
BEGIN
    INSERT INTO Student_Audit (Roll_No, Old_Marks, New_Marks, Changed_By, Changed_On)
    VALUES (:OLD.Roll_No, :OLD.Marks, :NEW.Marks, USER, SYSDATE);
END;
/

-- Test it
UPDATE Student SET Marks = 95 WHERE Roll_No = 'M001';
-- The trigger automatically logs the old and new marks in Student_Audit`,
            "sql",
            "AFTER UPDATE audit trigger"
        ),

        heading("Example: BEFORE DELETE Trigger"),

        code(
            `-- Prevent deletion of students with marks above 90
CREATE OR REPLACE TRIGGER trg_before_delete_student
BEFORE DELETE ON Student
FOR EACH ROW
BEGIN
    IF :OLD.Marks > 90 THEN
        RAISE_APPLICATION_ERROR(-20002,
            'Cannot delete top-performing student: ' || :OLD.Name);
    END IF;
END;
/`,
            "sql",
            "BEFORE DELETE trigger"
        ),

        heading("INSTEAD OF Triggers"),

        definition(
            "INSTEAD OF Trigger",
            "A trigger defined on a view that fires instead of the actual INSERT, UPDATE or DELETE operation. It is used to make non-updatable views updatable by defining custom logic."
        ),

        code(
            `-- Create a view joining two tables
CREATE VIEW Student_Dept_View AS
SELECT S.Roll_No, S.Name, D.Dept_Name
FROM Student S JOIN Department D ON S.Dept_Id = D.Dept_Id;

-- INSTEAD OF trigger to allow inserts into the view
CREATE OR REPLACE TRIGGER trg_instead_of_insert
INSTEAD OF INSERT ON Student_Dept_View
FOR EACH ROW
DECLARE
    v_dept_id NUMBER;
BEGIN
    SELECT Dept_Id INTO v_dept_id
    FROM Department WHERE Dept_Name = :NEW.Dept_Name;

    INSERT INTO Student (Roll_No, Name, Dept_Id)
    VALUES (:NEW.Roll_No, :NEW.Name, v_dept_id);
END;
/`,
            "sql",
            "INSTEAD OF trigger on a view"
        ),

        heading("Managing Triggers"),

        table(
            ["Command", "Purpose"],
            [
                ["CREATE OR REPLACE TRIGGER ...", "Create or update a trigger"],
                ["DROP TRIGGER trigger_name", "Delete a trigger"],
                ["ALTER TRIGGER trigger_name DISABLE", "Temporarily disable a trigger"],
                ["ALTER TRIGGER trigger_name ENABLE", "Re-enable a disabled trigger"],
                ["ALTER TABLE table_name DISABLE ALL TRIGGERS", "Disable all triggers on a table"],
                ["ALTER TABLE table_name ENABLE ALL TRIGGERS", "Enable all triggers on a table"],
                ["SELECT * FROM USER_TRIGGERS", "List all triggers owned by the current user"],
            ]
        ),

        heading("Advantages and Disadvantages of Triggers"),

        table(
            ["Advantages", "Disadvantages"],
            [
                ["Enforce business rules automatically", "Hidden logic — developers may not know triggers exist"],
                ["Audit changes transparently", "Can cause performance overhead on high-volume tables"],
                ["Maintain derived or computed columns", "Difficult to debug because they fire implicitly"],
                ["Enforce complex security policies", "Cascading triggers can cause unexpected behaviour"],
                ["Cannot be bypassed by applications", "Overuse makes the system hard to maintain"],
            ]
        ),

        note(
            "Use triggers sparingly and only when the logic must be enforced regardless of which application accesses the database. For application-specific logic, stored procedures or application code are better choices because they are more visible and easier to debug.",
            "warning",
            "Best Practice"
        ),

        keyPoints([
            "A trigger fires automatically in response to INSERT, UPDATE or DELETE events on a table.",
            "Row-level triggers (FOR EACH ROW) fire once per row and can access :OLD and :NEW values.",
            "Statement-level triggers fire once per SQL statement and cannot access :OLD and :NEW.",
            "INSTEAD OF triggers are defined on views to make them updatable.",
            "Triggers are powerful for auditing and enforcing rules but should be used sparingly.",
        ]),
    ],

    {
        summary:
            "Master triggers: BEFORE/AFTER, row-level/statement-level, :OLD/:NEW pseudorecords, INSTEAD OF triggers and trigger management.",
        minutes: 13,
        tags: ["plsql", "triggers", "audit", "old-new", "important"],

        mcqs: [
            mcq(
                "A trigger is executed:",
                ["Manually by the user", "Automatically in response to a database event", "By a stored procedure only", "By a cron job"],
                1,
                "Triggers fire automatically when a specified event (INSERT, UPDATE, DELETE) occurs on a table."
            ),
            mcq(
                ":OLD and :NEW pseudorecords are available in:",
                ["Statement-level triggers only", "Row-level triggers only", "All triggers", "INSTEAD OF triggers only"],
                1,
                ":OLD and :NEW are available only in row-level triggers (FOR EACH ROW)."
            ),
            mcq(
                "During an INSERT operation, :OLD contains:",
                ["The new values", "The previous values", "NULL", "The primary key"],
                2,
                "During INSERT, there is no previous row, so :OLD is NULL."
            ),
            mcq(
                "An INSTEAD OF trigger is defined on:",
                ["A table", "A view", "A procedure", "A database"],
                1,
                "INSTEAD OF triggers are defined on views to make non-updatable views updatable."
            ),
            mcq(
                "Which command temporarily stops a trigger from firing?",
                ["DROP TRIGGER", "ALTER TRIGGER ... DISABLE", "DELETE TRIGGER", "REMOVE TRIGGER"],
                1,
                "ALTER TRIGGER trigger_name DISABLE temporarily disables a trigger without deleting it."
            ),
            mcq(
                "A BEFORE trigger fires:",
                ["After the DML operation completes", "Before the DML operation is executed", "Only on SELECT", "Once per session"],
                1,
                "A BEFORE trigger fires before the triggering DML operation is executed."
            ),
        ],

        questions: [
            qa(
                "What is a trigger? Explain the difference between row-level and statement-level triggers.",
                "A trigger is a named PL/SQL block stored in the database that fires automatically in response to a specific event such as INSERT, UPDATE or DELETE on a table. A row-level trigger, declared with FOR EACH ROW, fires once for every row affected by the triggering statement. It can access :OLD and :NEW pseudorecords to examine the row's values before and after the operation. For example, if an UPDATE affects 10 rows, a row-level trigger fires 10 times. A statement-level trigger, declared without FOR EACH ROW, fires only once per SQL statement regardless of how many rows are affected. It cannot access :OLD and :NEW. Statement-level triggers are used for tasks like logging that an operation occurred.",
                5
            ),
            qa(
                "Explain :OLD and :NEW pseudorecords with their values during INSERT, UPDATE and DELETE.",
                ":OLD and :NEW are pseudorecords available in row-level triggers that represent the row's values before and after the triggering operation. During an INSERT, :OLD is NULL because there is no previous row, and :NEW contains the values being inserted. During an UPDATE, :OLD contains the values before the update and :NEW contains the values after the update, allowing you to compare what changed. During a DELETE, :OLD contains the values of the row being deleted and :NEW is NULL because the row will no longer exist. For example, in an audit trigger on UPDATE, you can log :OLD.Marks and :NEW.Marks to track how marks changed.",
                5
            ),
            qa(
                "Write a trigger that prevents inserting a student with marks greater than 100.",
                "CREATE OR REPLACE TRIGGER trg_check_marks BEFORE INSERT ON Student FOR EACH ROW BEGIN IF :NEW.Marks > 100 THEN RAISE_APPLICATION_ERROR(-20001, 'Marks cannot exceed 100'); END IF; END; / This is a BEFORE INSERT row-level trigger that checks the :NEW.Marks value before each row is inserted. If the marks exceed 100, it raises a custom application error with code -20001 and a descriptive message, which prevents the INSERT from completing. The RAISE_APPLICATION_ERROR procedure is used to raise user-defined errors with error codes between -20000 and -20999.",
                5
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit3Topics = [
    introToPLSQL,
    plsqlVariablesAndControlFlow,
    cursorsInPLSQL,
    storedProceduresAndFunctions,
    triggersInPLSQL,
];