/* =========================================================
   BCA • SEM 4 • DBMS - II
   UNIT 1 — Advanced SQL, PL/SQL and Stored Procedures
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
   TOPIC 1 — Advanced SQL Queries
========================================================= */

const advancedSQL = createTopic(
    "advanced-sql-queries",
    "Advanced SQL Queries",

    [
        definition(
            "Advanced SQL",
            "Advanced SQL includes complex queries such as joins, subqueries, set operations, views, indexes and analytical functions used to work with large datasets efficiently."
        ),

        text(
            "While basic SQL handles simple SELECT, INSERT, UPDATE and DELETE operations, advanced SQL is essential for real-world applications where data comes from multiple tables and requires complex filtering, grouping and analysis."
        ),

        heading("SQL Joins"),

        definition(
            "Join",
            "A JOIN is used to combine rows from two or more tables based on a related column between them."
        ),

        heading("Types of Joins"),

        table(
            ["Join Type", "Description"],
            [
                ["INNER JOIN", "Returns matching rows from both tables"],
                ["LEFT JOIN", "Returns all rows from left table + matching from right"],
                ["RIGHT JOIN", "Returns all rows from right table + matching from left"],
                ["FULL OUTER JOIN", "Returns all rows from both tables"],
                ["CROSS JOIN", "Returns Cartesian product of both tables"],
                ["SELF JOIN", "Joins a table with itself"],
            ]
        ),

        heading("INNER JOIN Example"),

        code(
            `SELECT students.name, courses.course_name
FROM students
INNER JOIN courses
ON students.course_id = courses.id;`,
            "sql",
            "Inner join"
        ),

        heading("LEFT JOIN Example"),

        code(
            `SELECT employees.name, departments.dept_name
FROM employees
LEFT JOIN departments
ON employees.dept_id = departments.id;`,
            "sql",
            "Left join"
        ),

        heading("SELF JOIN Example"),

        code(
            `SELECT e1.name AS employee, e2.name AS manager
FROM employees e1
INNER JOIN employees e2
ON e1.manager_id = e2.id;`,
            "sql",
            "Self join"
        ),

        heading("Subqueries"),

        definition(
            "Subquery",
            "A subquery is a query nested inside another query. It is executed first, and its result is used by the outer query."
        ),

        heading("Types of Subqueries"),

        list([
            "Single-row subquery — Returns one row.",
            "Multi-row subquery — Returns multiple rows.",
            "Correlated subquery — Depends on outer query.",
            "Nested subquery — Subquery inside subquery.",
        ]),

        heading("Subquery Examples"),

        code(
            `-- Find students with marks above average
SELECT name, marks
FROM students
WHERE marks > (SELECT AVG(marks) FROM students);

-- Find employees in specific departments
SELECT name
FROM employees
WHERE dept_id IN (SELECT id FROM departments WHERE location = 'Mumbai');

-- Correlated subquery
SELECT e.name
FROM employees e
WHERE salary > (
    SELECT AVG(salary) 
    FROM employees 
    WHERE dept_id = e.dept_id
);`,
            "sql",
            "Subquery examples"
        ),

        heading("Set Operations"),

        table(
            ["Operator", "Description"],
            [
                ["UNION", "Combines results, removes duplicates"],
                ["UNION ALL", "Combines results, keeps duplicates"],
                ["INTERSECT", "Returns common rows"],
                ["MINUS / EXCEPT", "Returns rows from first not in second"],
            ]
        ),

        code(
            `-- UNION
SELECT city FROM customers
UNION
SELECT city FROM suppliers;

-- INTERSECT
SELECT product_id FROM orders_2024
INTERSECT
SELECT product_id FROM orders_2025;

-- MINUS
SELECT id FROM students
MINUS
SELECT student_id FROM enrollments;`,
            "sql",
            "Set operations"
        ),

        heading("Aggregate Functions"),

        table(
            ["Function", "Purpose"],
            [
                ["COUNT()", "Count rows"],
                ["SUM()", "Sum of values"],
                ["AVG()", "Average value"],
                ["MIN()", "Minimum value"],
                ["MAX()", "Maximum value"],
            ]
        ),

        code(
            `SELECT dept_id, 
       COUNT(*) AS total_employees,
       AVG(salary) AS avg_salary,
       MAX(salary) AS highest,
       MIN(salary) AS lowest
FROM employees
GROUP BY dept_id
HAVING COUNT(*) > 5
ORDER BY avg_salary DESC;`,
            "sql",
            "Aggregate with GROUP BY and HAVING"
        ),

        heading("GROUP BY vs HAVING vs WHERE"),

        table(
            ["Clause", "Purpose", "Used With"],
            [
                ["WHERE", "Filter rows before grouping", "Any query"],
                ["GROUP BY", "Group rows with same values", "Aggregate functions"],
                ["HAVING", "Filter groups after grouping", "GROUP BY"],
            ]
        ),

        note(
            "WHERE cannot use aggregate functions. Use HAVING to filter based on aggregate results (like AVG, SUM, COUNT).",
            "tip",
            "WHERE vs HAVING"
        ),

        keyPoints([
            "JOINs combine data from multiple tables.",
            "Subqueries execute nested queries.",
            "Set operations combine query results.",
            "Aggregate functions summarize data.",
            "GROUP BY groups rows, HAVING filters groups.",
        ]),
    ],

    {
        summary:
            "Learn advanced SQL including joins, subqueries, set operations and aggregate functions with GROUP BY and HAVING.",
        minutes: 14,
        tags: ["sql", "join", "subquery", "aggregate", "important"],

        mcqs: [
            mcq(
                "Which join returns all rows from both tables?",
                ["INNER JOIN", "LEFT JOIN", "FULL OUTER JOIN", "CROSS JOIN"],
                2,
                "FULL OUTER JOIN returns all rows from both tables."
            ),
            mcq(
                "Which clause filters rows after grouping?",
                ["WHERE", "GROUP BY", "HAVING", "ORDER BY"],
                2,
                "HAVING is used to filter after GROUP BY."
            ),
            mcq(
                "UNION operator:",
                ["Keeps duplicates", "Removes duplicates", "Sorts data", "Deletes rows"],
                1,
                "UNION removes duplicates. UNION ALL keeps them."
            ),
            mcq(
                "A subquery inside another query is called:",
                ["Join", "Nested query", "Trigger", "View"],
                1,
                "A query inside another is called nested/subquery."
            ),
        ],

        questions: [
            qa(
                "Explain different types of SQL joins with examples.",
                "SQL joins combine rows from multiple tables based on related columns. Types include: (1) INNER JOIN — returns only matching rows from both tables; (2) LEFT JOIN — returns all rows from left table plus matching from right, with NULL for non-matches; (3) RIGHT JOIN — opposite of LEFT JOIN; (4) FULL OUTER JOIN — returns all rows from both tables; (5) CROSS JOIN — Cartesian product of both tables; (6) SELF JOIN — joins a table with itself, useful for hierarchical data like employee-manager relationships. Example: SELECT s.name, c.course_name FROM students s INNER JOIN courses c ON s.course_id = c.id.",
                4
            ),
            qa(
                "Differentiate between WHERE and HAVING clauses.",
                "WHERE filters individual rows before grouping while HAVING filters groups after aggregation. WHERE cannot use aggregate functions like SUM, AVG, COUNT, but HAVING can. WHERE is applied before GROUP BY, and HAVING is applied after GROUP BY. Example: SELECT dept_id, COUNT(*) FROM employees WHERE salary > 20000 GROUP BY dept_id HAVING COUNT(*) > 5. Here WHERE filters employees with salary > 20000 first, then GROUP BY groups by department, and HAVING keeps only departments with more than 5 such employees.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — Views, Indexes and Sequences
========================================================= */

const viewsIndexes = createTopic(
    "views-indexes-sequences",
    "Views, Indexes and Sequences",

    [
        heading("Views"),

        definition(
            "View",
            "A view is a virtual table based on the result of an SQL query. It does not store data physically but provides a way to simplify complex queries and enhance security."
        ),

        heading("Advantages of Views"),

        list([
            "Simplify complex queries.",
            "Provide data security by hiding columns.",
            "Present data in different formats.",
            "Save storage by not duplicating data.",
            "Allow access control at row/column level.",
        ]),

        heading("Creating a View"),

        code(
            `CREATE VIEW student_summary AS
SELECT id, name, course, marks
FROM students
WHERE marks >= 60;

-- Using the view
SELECT * FROM student_summary;

-- Update view
CREATE OR REPLACE VIEW student_summary AS
SELECT id, name, course, marks, grade
FROM students
WHERE marks >= 60;

-- Drop view
DROP VIEW student_summary;`,
            "sql",
            "View operations"
        ),

        heading("Types of Views"),

        table(
            ["Type", "Description"],
            [
                ["Simple View", "Based on a single table, no functions"],
                ["Complex View", "Based on multiple tables with joins/functions"],
                ["Inline View", "Subquery in FROM clause"],
                ["Materialized View", "Stores data physically for faster access"],
            ]
        ),

        heading("Materialized View"),

        definition(
            "Materialized View",
            "A materialized view stores the query result physically on disk and needs to be refreshed to reflect changes in base tables."
        ),

        code(
            `CREATE MATERIALIZED VIEW sales_summary
AS
SELECT product_id, SUM(quantity) AS total_sold
FROM sales
GROUP BY product_id;

-- Refresh the view
REFRESH MATERIALIZED VIEW sales_summary;`,
            "sql",
            "Materialized view"
        ),

        heading("Indexes"),

        definition(
            "Index",
            "An index is a database object that improves the speed of data retrieval operations on a table by creating a quick lookup structure."
        ),

        heading("Why Use Indexes?"),

        list([
            "Speeds up SELECT queries.",
            "Improves search performance.",
            "Enforces uniqueness (unique index).",
            "Helps in sorting operations.",
            "Optimizes JOIN operations.",
        ]),

        heading("Creating Indexes"),

        code(
            `-- Single column index
CREATE INDEX idx_name ON students(name);

-- Multiple column index
CREATE INDEX idx_dept_salary ON employees(dept_id, salary);

-- Unique index
CREATE UNIQUE INDEX idx_email ON users(email);

-- Drop index
DROP INDEX idx_name;`,
            "sql",
            "Index operations"
        ),

        heading("Types of Indexes"),

        table(
            ["Type", "Description"],
            [
                ["Single-column Index", "Index on one column"],
                ["Composite Index", "Index on multiple columns"],
                ["Unique Index", "Ensures column values are unique"],
                ["Clustered Index", "Data physically sorted; one per table"],
                ["Non-clustered Index", "Separate structure with pointers"],
                ["Bitmap Index", "Efficient for low-cardinality columns"],
                ["B-Tree Index", "Default index type; balanced tree"],
            ]
        ),

        heading("Clustered vs Non-Clustered Index"),

        table(
            ["Basis", "Clustered", "Non-Clustered"],
            [
                ["Data storage", "Physically sorts data", "Separate structure"],
                ["Number", "One per table", "Many per table"],
                ["Speed", "Faster for range queries", "Faster for lookups"],
                ["Example", "Primary key by default", "Additional indexes"],
            ]
        ),

        note(
            "Indexes speed up SELECT but slow down INSERT, UPDATE and DELETE because the index also needs to be updated. Use them wisely on frequently searched columns.",
            "warning",
            "Trade-off with Indexes"
        ),

        heading("Sequences"),

        definition(
            "Sequence",
            "A sequence is a database object that generates a series of unique numeric values, commonly used for auto-generating primary keys."
        ),

        code(
            `-- Create sequence (Oracle)
CREATE SEQUENCE emp_seq
START WITH 1
INCREMENT BY 1
MAXVALUE 9999
NOCYCLE;

-- Use sequence
INSERT INTO employees(id, name)
VALUES (emp_seq.NEXTVAL, 'Riya');

-- Get current value
SELECT emp_seq.CURRVAL FROM DUAL;

-- Drop sequence
DROP SEQUENCE emp_seq;`,
            "sql",
            "Sequence operations"
        ),

        heading("Sequence Properties"),

        table(
            ["Property", "Description"],
            [
                ["START WITH", "Starting value"],
                ["INCREMENT BY", "Step value"],
                ["MAXVALUE", "Maximum value"],
                ["MINVALUE", "Minimum value"],
                ["CYCLE", "Restart after max"],
                ["NOCYCLE", "Stop after max"],
                ["CACHE", "Preallocate values"],
            ]
        ),

        heading("Synonyms"),

        definition(
            "Synonym",
            "A synonym is an alias for a database object like a table, view or sequence, providing an alternative name for easier reference."
        ),

        code(
            `-- Create synonym
CREATE SYNONYM emp FOR hr.employees;

-- Use synonym
SELECT * FROM emp;

-- Drop synonym
DROP SYNONYM emp;`,
            "sql",
            "Synonym operations"
        ),

        keyPoints([
            "Views are virtual tables that simplify complex queries.",
            "Materialized views store data physically for faster access.",
            "Indexes speed up data retrieval.",
            "Clustered indexes physically sort data; non-clustered use pointers.",
            "Sequences auto-generate unique numbers.",
        ]),
    ],

    {
        summary:
            "Learn views, indexes, sequences and synonyms — key database objects for performance and abstraction.",
        minutes: 12,
        tags: ["view", "index", "sequence", "synonym", "important"],

        mcqs: [
            mcq(
                "A view is:",
                ["A physical table", "A virtual table", "An index", "A trigger"],
                1,
                "A view is a virtual table based on a query."
            ),
            mcq(
                "Which index physically sorts data?",
                ["Non-clustered", "Clustered", "Bitmap", "Composite"],
                1,
                "Clustered index sorts data physically."
            ),
            mcq(
                "Sequence is used for:",
                ["Sorting", "Auto-numbering", "Searching", "Joining"],
                1,
                "Sequences generate auto-increment numbers."
            ),
            mcq(
                "Which is a drawback of indexes?",
                ["Slower SELECT", "Slower INSERT/UPDATE", "More storage", "Both B and C"],
                3,
                "Indexes slow write operations and use extra storage."
            ),
        ],

        questions: [
            qa(
                "What is a view? Explain its advantages.",
                "A view is a virtual table based on the result of an SQL query. Unlike regular tables, views do not store data physically — they are stored as query definitions and executed each time they are accessed. Advantages of views include: (1) Simplifying complex queries by hiding join logic; (2) Providing data security by exposing only specific columns/rows; (3) Presenting data in different formats for different users; (4) Saving storage since no data duplication; (5) Enabling access control. Example: CREATE VIEW student_summary AS SELECT id, name, course FROM students WHERE marks >= 60. Users can query this view like a normal table.",
                4
            ),
            qa(
                "Differentiate between clustered and non-clustered indexes.",
                "A clustered index physically sorts the table data based on the indexed column, so there can be only one clustered index per table. It is typically created on the primary key by default and is faster for range queries. A non-clustered index maintains a separate structure that stores the index key and pointers to the actual data rows, so a table can have multiple non-clustered indexes. Non-clustered indexes are faster for exact lookups but slightly slower than clustered for range scans. Both types improve SELECT performance but slow down INSERT, UPDATE and DELETE operations.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — PL/SQL Fundamentals
========================================================= */

const plsqlFundamentals = createTopic(
    "plsql-fundamentals",
    "PL/SQL Fundamentals",

    [
        definition(
            "PL/SQL",
            "PL/SQL (Procedural Language for SQL) is Oracle's procedural extension of SQL that combines SQL's data manipulation power with procedural programming features like variables, loops, conditions and functions."
        ),

        heading("Features of PL/SQL"),

        list([
            "Combines SQL with procedural programming.",
            "Block-structured language.",
            "Supports variables, constants, control structures.",
            "Provides error/exception handling.",
            "Supports stored procedures and functions.",
            "Improves performance by reducing network traffic.",
            "Portable across Oracle databases.",
        ]),

        heading("PL/SQL Block Structure"),

        code(
            `DECLARE
    -- Variable declarations
    v_name VARCHAR2(50);
    v_marks NUMBER;
BEGIN
    -- Executable statements
    v_name := 'Amit';
    v_marks := 85;
    
    DBMS_OUTPUT.PUT_LINE('Name: ' || v_name);
    DBMS_OUTPUT.PUT_LINE('Marks: ' || v_marks);

EXCEPTION
    -- Exception handling
    WHEN OTHERS THEN
        DBMS_OUTPUT.PUT_LINE('Error occurred');
END;
/`,
            "sql",
            "Basic PL/SQL block"
        ),

        heading("Types of Blocks"),

        table(
            ["Type", "Description"],
            [
                ["Anonymous Block", "Unnamed block, executed once"],
                ["Named Block", "Has a name; procedure or function"],
                ["Stored Procedure", "Named block stored in DB"],
                ["Function", "Returns a value"],
                ["Package", "Group of related procedures/functions"],
                ["Trigger", "Executes on database events"],
            ]
        ),

        heading("PL/SQL Data Types"),

        table(
            ["Type", "Example"],
            [
                ["NUMBER", "v_age NUMBER(3)"],
                ["VARCHAR2", "v_name VARCHAR2(50)"],
                ["CHAR", "v_grade CHAR(1)"],
                ["DATE", "v_dob DATE"],
                ["BOOLEAN", "v_status BOOLEAN"],
                ["%TYPE", "v_id employees.id%TYPE"],
                ["%ROWTYPE", "v_emp employees%ROWTYPE"],
            ]
        ),

        heading("Variables and Constants"),

        code(
            `DECLARE
    v_name VARCHAR2(50);           -- Variable
    v_age NUMBER := 20;            -- With initial value
    c_pi CONSTANT NUMBER := 3.14;  -- Constant
    v_emp_id employees.id%TYPE;    -- Anchored declaration
BEGIN
    v_name := 'Riya';
    DBMS_OUTPUT.PUT_LINE(v_name);
END;
/`,
            "sql",
            "Variables and constants"
        ),

        heading("Control Structures"),

        heading("IF-THEN-ELSE"),

        code(
            `DECLARE
    v_marks NUMBER := 75;
    v_grade CHAR(1);
BEGIN
    IF v_marks >= 90 THEN
        v_grade := 'A';
    ELSIF v_marks >= 75 THEN
        v_grade := 'B';
    ELSIF v_marks >= 60 THEN
        v_grade := 'C';
    ELSE
        v_grade := 'F';
    END IF;
    
    DBMS_OUTPUT.PUT_LINE('Grade: ' || v_grade);
END;
/`,
            "sql",
            "IF-ELSIF-ELSE"
        ),

        heading("CASE Statement"),

        code(
            `DECLARE
    v_day NUMBER := 3;
    v_name VARCHAR2(20);
BEGIN
    CASE v_day
        WHEN 1 THEN v_name := 'Monday';
        WHEN 2 THEN v_name := 'Tuesday';
        WHEN 3 THEN v_name := 'Wednesday';
        ELSE v_name := 'Other';
    END CASE;
    
    DBMS_OUTPUT.PUT_LINE(v_name);
END;
/`,
            "sql",
            "CASE statement"
        ),

        heading("Loops"),

        heading("Basic LOOP"),

        code(
            `DECLARE
    v_count NUMBER := 1;
BEGIN
    LOOP
        DBMS_OUTPUT.PUT_LINE('Count: ' || v_count);
        v_count := v_count + 1;
        EXIT WHEN v_count > 5;
    END LOOP;
END;
/`,
            "sql",
            "Basic loop"
        ),

        heading("WHILE Loop"),

        code(
            `DECLARE
    v_num NUMBER := 1;
BEGIN
    WHILE v_num <= 5 LOOP
        DBMS_OUTPUT.PUT_LINE('Number: ' || v_num);
        v_num := v_num + 1;
    END LOOP;
END;
/`,
            "sql",
            "WHILE loop"
        ),

        heading("FOR Loop"),

        code(
            `BEGIN
    FOR i IN 1..5 LOOP
        DBMS_OUTPUT.PUT_LINE('i = ' || i);
    END LOOP;
    
    -- Reverse loop
    FOR i IN REVERSE 1..5 LOOP
        DBMS_OUTPUT.PUT_LINE('i = ' || i);
    END LOOP;
END;
/`,
            "sql",
            "FOR loop"
        ),

        heading("Exception Handling"),

        code(
            `DECLARE
    v_result NUMBER;
BEGIN
    v_result := 10 / 0;
EXCEPTION
    WHEN ZERO_DIVIDE THEN
        DBMS_OUTPUT.PUT_LINE('Cannot divide by zero');
    WHEN NO_DATA_FOUND THEN
        DBMS_OUTPUT.PUT_LINE('No data found');
    WHEN OTHERS THEN
        DBMS_OUTPUT.PUT_LINE('Error: ' || SQLERRM);
END;
/`,
            "sql",
            "Exception handling"
        ),

        heading("Common Predefined Exceptions"),

        table(
            ["Exception", "When It Occurs"],
            [
                ["NO_DATA_FOUND", "SELECT INTO returns no rows"],
                ["TOO_MANY_ROWS", "SELECT INTO returns multiple rows"],
                ["ZERO_DIVIDE", "Division by zero"],
                ["INVALID_CURSOR", "Illegal cursor operation"],
                ["VALUE_ERROR", "Data conversion error"],
                ["DUP_VAL_ON_INDEX", "Duplicate value on unique constraint"],
            ]
        ),

        note(
            "PL/SQL blocks reduce network traffic by grouping multiple SQL statements into a single unit that runs on the database server.",
            "tip",
            "Performance Benefit"
        ),

        keyPoints([
            "PL/SQL extends SQL with procedural features.",
            "Block structure: DECLARE, BEGIN, EXCEPTION, END.",
            "Supports variables, constants, and %TYPE/%ROWTYPE.",
            "Provides IF, CASE, and LOOP control structures.",
            "Exception handling manages runtime errors.",
        ]),
    ],

    {
        summary:
            "Learn PL/SQL fundamentals including block structure, variables, control structures, loops and exception handling.",
        minutes: 14,
        tags: ["plsql", "oracle", "procedural", "important"],

        mcqs: [
            mcq(
                "PL/SQL stands for:",
                ["Programming Language SQL", "Procedural Language SQL", "Practical Logic SQL", "Portable Language SQL"],
                1,
                "PL/SQL is Procedural Language extension of SQL."
            ),
            mcq(
                "Which section handles errors in PL/SQL?",
                ["DECLARE", "BEGIN", "EXCEPTION", "END"],
                2,
                "EXCEPTION section handles errors."
            ),
            mcq(
                "%TYPE is used for:",
                ["Loop", "Anchored declaration", "Exception", "Trigger"],
                1,
                "%TYPE anchors variable to column type."
            ),
            mcq(
                "Which exception fires on division by zero?",
                ["NO_DATA_FOUND", "TOO_MANY_ROWS", "ZERO_DIVIDE", "VALUE_ERROR"],
                2,
                "ZERO_DIVIDE fires when dividing by zero."
            ),
        ],

        questions: [
            qa(
                "What is PL/SQL? Explain its block structure.",
                "PL/SQL (Procedural Language for SQL) is Oracle's procedural extension of SQL that combines SQL's data manipulation power with procedural programming features like variables, loops, conditions and exception handling. A PL/SQL block has four sections: (1) DECLARE — for declaring variables, constants and cursors (optional); (2) BEGIN — contains executable statements (mandatory); (3) EXCEPTION — handles runtime errors (optional); (4) END — marks the end of block (mandatory). PL/SQL blocks reduce network traffic by executing multiple SQL statements together on the server, and improve performance and code reusability.",
                4
            ),
            qa(
                "Explain exception handling in PL/SQL with example.",
                "Exception handling in PL/SQL is done in the EXCEPTION section of a block to manage runtime errors gracefully. Predefined exceptions include NO_DATA_FOUND (SELECT INTO returns no rows), TOO_MANY_ROWS (multiple rows returned), ZERO_DIVIDE (division by zero), VALUE_ERROR (data type mismatch) and DUP_VAL_ON_INDEX (duplicate on unique key). WHEN OTHERS catches all other exceptions. Example: BEGIN v_result := 10/0; EXCEPTION WHEN ZERO_DIVIDE THEN DBMS_OUTPUT.PUT_LINE('Cannot divide by zero'); WHEN OTHERS THEN DBMS_OUTPUT.PUT_LINE('Error: ' || SQLERRM); END; This prevents program crashes and provides meaningful error messages.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — Cursors in PL/SQL
========================================================= */

const cursors = createTopic(
    "cursors-in-plsql",
    "Cursors in PL/SQL",

    [
        definition(
            "Cursor",
            "A cursor is a pointer to a private SQL work area that holds the result of a query. It allows row-by-row processing of query results in PL/SQL."
        ),

        heading("Types of Cursors"),

        table(
            ["Type", "Description"],
            [
                ["Implicit Cursor", "Automatically created by Oracle for DML"],
                ["Explicit Cursor", "Defined by programmer for multi-row queries"],
            ]
        ),

        heading("Implicit Cursor"),

        text(
            "Implicit cursors are automatically created by Oracle for INSERT, UPDATE, DELETE and SELECT INTO statements. You can access their attributes without declaring them."
        ),

        code(
            `BEGIN
    UPDATE employees
    SET salary = salary * 1.1
    WHERE dept_id = 10;
    
    IF SQL%FOUND THEN
        DBMS_OUTPUT.PUT_LINE(SQL%ROWCOUNT || ' rows updated');
    ELSE
        DBMS_OUTPUT.PUT_LINE('No rows updated');
    END IF;
END;
/`,
            "sql",
            "Implicit cursor with attributes"
        ),

        heading("Implicit Cursor Attributes"),

        table(
            ["Attribute", "Description"],
            [
                ["SQL%FOUND", "TRUE if at least one row affected"],
                ["SQL%NOTFOUND", "TRUE if no rows affected"],
                ["SQL%ROWCOUNT", "Number of rows affected"],
                ["SQL%ISOPEN", "Always FALSE for implicit cursors"],
            ]
        ),

        heading("Explicit Cursor"),

        text(
            "Explicit cursors are declared by the programmer to handle multi-row queries. They require four steps: DECLARE, OPEN, FETCH, CLOSE."
        ),

        heading("Steps to Use Explicit Cursor"),

        steps([
            "DECLARE — Define the cursor with a SELECT query.",
            "OPEN — Execute the query and identify the result set.",
            "FETCH — Retrieve rows one by one.",
            "CLOSE — Release the cursor when done.",
        ]),

        heading("Explicit Cursor Example"),

        code(
            `DECLARE
    CURSOR emp_cursor IS
        SELECT id, name, salary FROM employees;
    
    v_id     employees.id%TYPE;
    v_name   employees.name%TYPE;
    v_salary employees.salary%TYPE;
BEGIN
    OPEN emp_cursor;
    
    LOOP
        FETCH emp_cursor INTO v_id, v_name, v_salary;
        EXIT WHEN emp_cursor%NOTFOUND;
        
        DBMS_OUTPUT.PUT_LINE(v_id || ' - ' || v_name || ' - ' || v_salary);
    END LOOP;
    
    CLOSE emp_cursor;
END;
/`,
            "sql",
            "Explicit cursor"
        ),

        heading("Explicit Cursor Attributes"),

        table(
            ["Attribute", "Description"],
            [
                ["%FOUND", "TRUE if last FETCH returned row"],
                ["%NOTFOUND", "TRUE if last FETCH returned no row"],
                ["%ROWCOUNT", "Number of rows fetched so far"],
                ["%ISOPEN", "TRUE if cursor is open"],
            ]
        ),

        heading("Cursor FOR Loop"),

        text(
            "A cursor FOR loop simplifies cursor usage by automatically opening, fetching and closing the cursor."
        ),

        code(
            `DECLARE
    CURSOR emp_cursor IS
        SELECT id, name, salary FROM employees;
BEGIN
    FOR emp_record IN emp_cursor LOOP
        DBMS_OUTPUT.PUT_LINE(
            emp_record.id || ' - ' || 
            emp_record.name || ' - ' || 
            emp_record.salary
        );
    END LOOP;
END;
/`,
            "sql",
            "Cursor FOR loop"
        ),

        heading("Parameterized Cursor"),

        code(
            `DECLARE
    CURSOR emp_cursor(p_dept_id NUMBER) IS
        SELECT id, name FROM employees
        WHERE dept_id = p_dept_id;
BEGIN
    FOR emp_rec IN emp_cursor(10) LOOP
        DBMS_OUTPUT.PUT_LINE(emp_rec.name);
    END LOOP;
END;
/`,
            "sql",
            "Parameterized cursor"
        ),

        heading("Cursor with FOR UPDATE"),

        text(
            "FOR UPDATE locks selected rows so they can be updated without interference from other users."
        ),

        code(
            `DECLARE
    CURSOR emp_cursor IS
        SELECT id, salary FROM employees
        WHERE dept_id = 10
        FOR UPDATE OF salary;
BEGIN
    FOR emp_rec IN emp_cursor LOOP
        UPDATE employees
        SET salary = salary * 1.1
        WHERE CURRENT OF emp_cursor;
    END LOOP;
    
    COMMIT;
END;
/`,
            "sql",
            "Cursor FOR UPDATE"
        ),

        heading("Implicit vs Explicit Cursor"),

        table(
            ["Basis", "Implicit", "Explicit"],
            [
                ["Declaration", "Not needed", "Required"],
                ["Control", "Automatic", "Manual"],
                ["Use", "DML and SELECT INTO", "Multi-row SELECT"],
                ["Attributes", "SQL%FOUND, etc.", "cursor_name%FOUND, etc."],
                ["Complexity", "Simple", "More flexible"],
            ]
        ),

        heading("Ref Cursor (Cursor Variable)"),

        definition(
            "Ref Cursor",
            "A ref cursor is a pointer to a query result that can be passed between procedures. It provides flexibility in returning result sets."
        ),

        code(
            `DECLARE
    TYPE ref_cur IS REF CURSOR;
    emp_cur ref_cur;
    v_name VARCHAR2(50);
BEGIN
    OPEN emp_cur FOR SELECT name FROM employees;
    
    LOOP
        FETCH emp_cur INTO v_name;
        EXIT WHEN emp_cur%NOTFOUND;
        DBMS_OUTPUT.PUT_LINE(v_name);
    END LOOP;
    
    CLOSE emp_cur;
END;
/`,
            "sql",
            "Ref cursor example"
        ),

        note(
            "Cursor FOR loops are recommended over manual OPEN-FETCH-CLOSE because they are cleaner and less error-prone. The cursor is automatically closed even if an exception occurs.",
            "tip",
            "Best Practice"
        ),

        keyPoints([
            "Cursors process query results row by row.",
            "Implicit cursors are auto-created for DML.",
            "Explicit cursors need DECLARE, OPEN, FETCH, CLOSE.",
            "Cursor FOR loops simplify cursor handling.",
            "Ref cursors can be passed between procedures.",
        ]),
    ],

    {
        summary:
            "Learn cursors in PL/SQL — implicit, explicit, parameterized, FOR UPDATE and ref cursors for row-by-row processing.",
        minutes: 13,
        tags: ["cursor", "plsql", "implicit", "explicit", "important"],

        mcqs: [
            mcq(
                "Which cursor is automatically created by Oracle?",
                ["Explicit", "Implicit", "Ref", "Parameterized"],
                1,
                "Implicit cursors are automatic."
            ),
            mcq(
                "Which attribute gives number of rows affected?",
                ["%FOUND", "%NOTFOUND", "%ROWCOUNT", "%ISOPEN"],
                2,
                "%ROWCOUNT gives number of rows."
            ),
            mcq(
                "Which is NOT a step for explicit cursor?",
                ["DECLARE", "OPEN", "REFRESH", "CLOSE"],
                2,
                "The steps are DECLARE, OPEN, FETCH, CLOSE."
            ),
            mcq(
                "Cursor FOR loop:",
                ["Requires manual OPEN and CLOSE", "Auto-manages cursor", "Cannot use variables", "Is deprecated"],
                1,
                "Cursor FOR loop auto-manages cursor operations."
            ),
        ],

        questions: [
            qa(
                "What is a cursor? Explain implicit and explicit cursors.",
                "A cursor is a pointer to a private SQL work area that holds the result of a query, allowing row-by-row processing. There are two types: (1) Implicit Cursor — automatically created by Oracle for DML statements (INSERT, UPDATE, DELETE) and SELECT INTO. Programmer doesn't need to declare or manage it. Its attributes are SQL%FOUND, SQL%NOTFOUND, SQL%ROWCOUNT. (2) Explicit Cursor — declared by the programmer to handle multi-row queries. It requires four steps: DECLARE (define cursor), OPEN (execute query), FETCH (retrieve rows one by one), CLOSE (release cursor). Explicit cursors give more control and flexibility.",
                4
            ),
            qa(
                "Explain cursor FOR loop with example.",
                "A cursor FOR loop is a shortcut that automatically opens, fetches and closes the cursor, eliminating the need for manual OPEN, FETCH, EXIT WHEN and CLOSE statements. It also implicitly declares a record variable of type cursor%ROWTYPE. Example: DECLARE CURSOR emp_cursor IS SELECT id, name, salary FROM employees; BEGIN FOR emp_record IN emp_cursor LOOP DBMS_OUTPUT.PUT_LINE(emp_record.id || ' ' || emp_record.name); END LOOP; END; This is cleaner, less error-prone, and automatically closes the cursor even if an exception occurs, making it the recommended approach.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 5 — Stored Procedures and Functions
========================================================= */

const proceduresFunctions = createTopic(
    "stored-procedures-and-functions",
    "Stored Procedures and Functions",

    [
        heading("Stored Procedures"),

        definition(
            "Stored Procedure",
            "A stored procedure is a named PL/SQL block that is compiled and stored in the database. It can be called and executed repeatedly, improving performance and code reusability."
        ),

        heading("Advantages of Stored Procedures"),

        list([
            "Improved performance (pre-compiled).",
            "Code reusability across applications.",
            "Reduced network traffic.",
            "Enhanced security through access control.",
            "Centralized business logic.",
            "Easier maintenance.",
        ]),

        heading("Syntax of Stored Procedure"),

        code(
            `CREATE OR REPLACE PROCEDURE procedure_name
    (parameter1 [IN|OUT|IN OUT] datatype,
     parameter2 [IN|OUT|IN OUT] datatype)
IS
    -- Variable declarations
BEGIN
    -- Executable statements
EXCEPTION
    -- Exception handling
END procedure_name;
/`,
            "sql",
            "Procedure syntax"
        ),

        heading("Parameter Modes"),

        table(
            ["Mode", "Description"],
            [
                ["IN", "Passes value in (default); read-only"],
                ["OUT", "Returns value out; write-only"],
                ["IN OUT", "Passes value in and returns modified"],
            ]
        ),

        heading("Procedure Example"),

        code(
            `-- Create procedure
CREATE OR REPLACE PROCEDURE add_employee
    (p_id IN NUMBER,
     p_name IN VARCHAR2,
     p_salary IN NUMBER)
IS
BEGIN
    INSERT INTO employees(id, name, salary)
    VALUES (p_id, p_name, p_salary);
    
    COMMIT;
    DBMS_OUTPUT.PUT_LINE('Employee added successfully');
EXCEPTION
    WHEN OTHERS THEN
        DBMS_OUTPUT.PUT_LINE('Error: ' || SQLERRM);
        ROLLBACK;
END add_employee;
/

-- Call the procedure
BEGIN
    add_employee(101, 'Riya', 45000);
END;
/

-- Or use EXEC
EXEC add_employee(102, 'Amit', 50000);`,
            "sql",
            "Procedure example"
        ),

        heading("Procedure with OUT Parameter"),

        code(
            `CREATE OR REPLACE PROCEDURE get_employee
    (p_id IN NUMBER,
     p_name OUT VARCHAR2,
     p_salary OUT NUMBER)
IS
BEGIN
    SELECT name, salary INTO p_name, p_salary
    FROM employees
    WHERE id = p_id;
EXCEPTION
    WHEN NO_DATA_FOUND THEN
        p_name := 'Not Found';
        p_salary := 0;
END;
/

-- Calling with OUT parameters
DECLARE
    v_name VARCHAR2(50);
    v_sal NUMBER;
BEGIN
    get_employee(101, v_name, v_sal);
    DBMS_OUTPUT.PUT_LINE(v_name || ' - ' || v_sal);
END;
/`,
            "sql",
            "Procedure with OUT parameter"
        ),

        heading("Functions"),

        definition(
            "Function",
            "A function is a named PL/SQL block that must return a value. It can be used in SQL statements like SELECT."
        ),

        heading("Function Syntax"),

        code(
            `CREATE OR REPLACE FUNCTION function_name
    (parameter1 datatype, parameter2 datatype)
RETURN datatype
IS
    -- Declarations
BEGIN
    -- Statements
    RETURN value;
END function_name;
/`,
            "sql",
            "Function syntax"
        ),

        heading("Function Example"),

        code(
            `-- Create function
CREATE OR REPLACE FUNCTION calculate_bonus
    (p_salary IN NUMBER)
RETURN NUMBER
IS
    v_bonus NUMBER;
BEGIN
    IF p_salary < 30000 THEN
        v_bonus := p_salary * 0.15;
    ELSIF p_salary < 60000 THEN
        v_bonus := p_salary * 0.10;
    ELSE
        v_bonus := p_salary * 0.05;
    END IF;
    
    RETURN v_bonus;
END calculate_bonus;
/

-- Call the function
DECLARE
    v_bonus NUMBER;
BEGIN
    v_bonus := calculate_bonus(45000);
    DBMS_OUTPUT.PUT_LINE('Bonus: ' || v_bonus);
END;
/

-- Use in SQL
SELECT name, salary, calculate_bonus(salary) AS bonus
FROM employees;`,
            "sql",
            "Function example"
        ),

        heading("Procedure vs Function"),

        table(
            ["Basis", "Procedure", "Function"],
            [
                ["Return", "May or may not return", "Must return a value"],
                ["Use in SELECT", "Cannot be used", "Can be used"],
                ["Call", "As statement", "As expression"],
                ["DML in body", "Allowed", "Restricted"],
                ["Purpose", "Perform actions", "Compute values"],
            ]
        ),

        heading("Packages"),

        definition(
            "Package",
            "A package is a schema object that groups logically related PL/SQL types, variables, procedures and functions into a single unit."
        ),

        heading("Package Structure"),

        text(
            "A package has two parts: Specification (interface) and Body (implementation)."
        ),

        code(
            `-- Package specification
CREATE OR REPLACE PACKAGE emp_pkg IS
    PROCEDURE add_emp(p_id NUMBER, p_name VARCHAR2);
    FUNCTION get_salary(p_id NUMBER) RETURN NUMBER;
END emp_pkg;
/

-- Package body
CREATE OR REPLACE PACKAGE BODY emp_pkg IS
    
    PROCEDURE add_emp(p_id NUMBER, p_name VARCHAR2) IS
    BEGIN
        INSERT INTO employees(id, name) VALUES (p_id, p_name);
        COMMIT;
    END add_emp;
    
    FUNCTION get_salary(p_id NUMBER) RETURN NUMBER IS
        v_sal NUMBER;
    BEGIN
        SELECT salary INTO v_sal FROM employees WHERE id = p_id;
        RETURN v_sal;
    END get_salary;

END emp_pkg;
/

-- Using package
BEGIN
    emp_pkg.add_emp(103, 'Neha');
    DBMS_OUTPUT.PUT_LINE(emp_pkg.get_salary(101),;
END;
/`,
            "sql",
            "Package example"
        ),

        heading("Advantages of Packages"),

        list([
            "Modularity — group related code together.",
            "Encapsulation — hide implementation details.",
            "Better performance — loaded once in memory.",
            "Overloading — same name, different parameters.",
            "Easier maintenance and reusability.",
        ]),

        heading("Dropping Procedures/Functions/Packages"),

        code(
            `DROP PROCEDURE add_employee;
DROP FUNCTION calculate_bonus;
DROP PACKAGE emp_pkg;`,
            "sql",
            "Drop objects"
        ),

        note(
            "Stored procedures and functions are precompiled and stored in the database, making them faster than sending SQL statements from client applications repeatedly.",
            "tip",
            "Performance"
        ),

        keyPoints([
            "Procedures perform actions; functions return values.",
            "Parameters can be IN, OUT or IN OUT.",
            "Functions can be used in SELECT statements.",
            "Packages group related procedures and functions.",
            "Precompiled objects improve performance.",
        ]),
    ],

    {
        summary:
            "Learn stored procedures, functions and packages — reusable PL/SQL objects for centralized business logic.",
        minutes: 14,
        tags: ["procedure", "function", "package", "plsql", "important"],

        mcqs: [
            mcq(
                "A function must:",
                ["Return a value", "Not return anything", "Have IN OUT", "Be a trigger"],
                0,
                "Functions must return a value."
            ),
            mcq(
                "Default parameter mode is:",
                ["OUT", "IN", "IN OUT", "None"],
                1,
                "Default mode is IN."
            ),
            mcq(
                "Which can be used in SELECT statement?",
                ["Procedure", "Function", "Package spec", "Both A and B"],
                1,
                "Only functions can be used in SELECT."
            ),
            mcq(
                "Package has how many parts?",
                ["1", "2", "3", "4"],
                1,
                "Package has specification and body — 2 parts."
            ),
        ],

        questions: [
            qa(
                "Differentiate between procedure and function in PL/SQL.",
                "A procedure and function are both named PL/SQL blocks stored in the database, but they differ in several ways. A procedure may or may not return values (through OUT parameters), while a function must return exactly one value using the RETURN statement. Procedures are called as statements using EXEC or in a BEGIN block, while functions can be used as expressions in SELECT statements and PL/SQL code. Procedures are typically used to perform actions (like INSERT, UPDATE), while functions are used to compute and return values. Procedures can freely use DML statements, but functions have restrictions when called from SQL. Both improve reusability and centralize business logic.",
                4
            ),
            qa(
                "What is a package? Explain its structure and advantages.",
                "A package is a database object that groups logically related PL/SQL types, variables, procedures and functions into a single unit. It has two parts: (1) Package Specification — the public interface declaring what is available to users; (2) Package Body — the private implementation containing actual code. Advantages include: modularity (related code grouped together), encapsulation (implementation hidden from users), better performance (loaded once in memory), overloading (same procedure name with different parameters), easier maintenance and improved security. Example: PACKAGE emp_pkg contains procedures like add_emp and functions like get_salary that can be called as emp_pkg.add_emp() from any PL/SQL block.",
                4
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit1Topics = [
    advancedSQL,
    viewsIndexes,
    plsqlFundamentals,
    cursors,
    proceduresFunctions,
];
