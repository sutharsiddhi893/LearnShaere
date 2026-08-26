/* =========================================================
   MSc-IT • SEM 1 • Database Management Systems
   UNIT 4 — Advanced PL/SQL
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
   TOPIC 1 — Packages in PL/SQL
========================================================= */

const packagesInPLSQL = createTopic(
    "packages-in-plsql",
    "Packages in PL/SQL",

    [
        definition(
            "Package",
            "A named PL/SQL object that groups logically related procedures, functions, variables, constants, cursors, types and exceptions into a single unit. A package has two parts: a specification (interface) and a body (implementation)."
        ),

        text(
            "Packages are the foundation of modular programming in Oracle PL/SQL. They provide encapsulation, information hiding, improved performance and easier maintenance. The Oracle standard library itself is organised into packages such as DBMS_OUTPUT, UTL_FILE and DBMS_SQL."
        ),

        heading("Why Use Packages?"),

        list([
            "Modularity — group related functionality into a single named unit.",
            "Encapsulation — hide implementation details in the body; expose only the specification.",
            "Information Hiding — private variables and procedures are accessible only within the package.",
            "Performance — the entire package is loaded into memory on first call, so subsequent calls are faster.",
            "Persistence — package variables retain their values for the duration of a session.",
            "Overloading — multiple procedures or functions with the same name but different parameters.",
            "Easier Maintenance — change the body without affecting the specification or dependent code.",
        ]),

        heading("Package Specification"),

        definition(
            "Package Specification",
            "The public interface of a package. It declares the types, variables, constants, cursors, exceptions, procedures and functions that are visible to external callers. It does not contain any implementation code."
        ),

        code(
            `-- Package Specification
CREATE OR REPLACE PACKAGE Student_Pkg IS
    -- Public constants
    c_max_marks CONSTANT NUMBER := 100;

    -- Public types
    TYPE t_student_rec IS RECORD (
        roll_no  VARCHAR2(10),
        name     VARCHAR2(50),
        marks    NUMBER
    );

    -- Public cursor
    CURSOR c_top_students RETURN t_student_rec;

    -- Public procedures
    PROCEDURE Add_Student(
        p_roll   IN VARCHAR2,
        p_name   IN VARCHAR2,
        p_marks  IN NUMBER
    );

    PROCEDURE Update_Marks(
        p_roll   IN VARCHAR2,
        p_marks  IN NUMBER
    );

    -- Public functions
    FUNCTION Get_Avg_Marks(p_course VARCHAR2) RETURN NUMBER;
    FUNCTION Get_Student_Count RETURN NUMBER;
END Student_Pkg;
/`,
            "sql",
            "Package specification"
        ),

        heading("Package Body"),

        definition(
            "Package Body",
            "The implementation of the package. It contains the actual code for all procedures and functions declared in the specification, plus any private variables, cursors and subprograms that are not visible outside the package."
        ),

        code(
            `-- Package Body
CREATE OR REPLACE PACKAGE BODY Student_Pkg IS
    -- Private variable (not accessible outside the package)
    v_operation_count NUMBER := 0;

    -- Private procedure (not accessible outside)
    PROCEDURE Log_Operation(p_msg VARCHAR2) IS
    BEGIN
        v_operation_count := v_operation_count + 1;
        DBMS_OUTPUT.PUT_LINE('Log: ' || p_msg);
    END Log_Operation;

    -- Public cursor implementation
    CURSOR c_top_students RETURN t_student_rec IS
        SELECT Roll_No, Name, Marks
        FROM Student
        WHERE Marks >= 85;

    -- Public procedure implementations
    PROCEDURE Add_Student(
        p_roll   IN VARCHAR2,
        p_name   IN VARCHAR2,
        p_marks  IN NUMBER
    ) IS
    BEGIN
        IF p_marks < 0 OR p_marks > c_max_marks THEN
            RAISE_APPLICATION_ERROR(-20001, 'Marks must be 0-100');
        END IF;

        INSERT INTO Student (Roll_No, Name, Marks)
        VALUES (p_roll, p_name, p_marks);

        Log_Operation('Added student: ' || p_name);
        COMMIT;
    END Add_Student;

    PROCEDURE Update_Marks(
        p_roll   IN VARCHAR2,
        p_marks  IN NUMBER
    ) IS
    BEGIN
        UPDATE Student SET Marks = p_marks WHERE Roll_No = p_roll;

        IF SQL%NOTFOUND THEN
            RAISE_APPLICATION_ERROR(-20002, 'Student not found');
        END IF;

        Log_Operation('Updated marks for: ' || p_roll);
        COMMIT;
    END Update_Marks;

    -- Public function implementations
    FUNCTION Get_Avg_Marks(p_course VARCHAR2) RETURN NUMBER IS
        v_avg NUMBER;
    BEGIN
        SELECT AVG(Marks) INTO v_avg
        FROM Student WHERE Course = p_course;
        RETURN NVL(v_avg, 0);
    END Get_Avg_Marks;

    FUNCTION Get_Student_Count RETURN NUMBER IS
        v_count NUMBER;
    BEGIN
        SELECT COUNT(*) INTO v_count FROM Student;
        RETURN v_count;
    END Get_Student_Count;

END Student_Pkg;
/`,
            "sql",
            "Package body with private and public members"
        ),

        heading("Using a Package"),

        code(
            `-- Call package procedures and functions
BEGIN
    -- Add a student
    Student_Pkg.Add_Student('M020', 'Ravi', 88);

    -- Update marks
    Student_Pkg.Update_Marks('M020', 92);

    -- Call functions
    DBMS_OUTPUT.PUT_LINE('Average: ' || Student_Pkg.Get_Avg_Marks('MSc IT'));
    DBMS_OUTPUT.PUT_LINE('Total Students: ' || Student_Pkg.Get_Student_Count);

    -- Use the public cursor
    FOR rec IN Student_Pkg.c_top_students LOOP
        DBMS_OUTPUT.PUT_LINE(rec.Name || ': ' || rec.Marks);
    END LOOP;

    -- Access the public constant
    DBMS_OUTPUT.PUT_LINE('Max Marks: ' || Student_Pkg.c_max_marks);

    -- Log_Operation is PRIVATE — this would cause an error:
    -- Student_Pkg.Log_Operation('test');  → ERROR!
END;
/`,
            "sql",
            "Using package members"
        ),

        heading("Package Visibility Rules"),

        table(
            ["Declared In", "Accessible From", "Example"],
            [
                ["Specification", "Outside and inside the package", "Student_Pkg.Add_Student()"],
                ["Body (not in spec)", "Only inside the package body", "Log_Operation()"],
                ["Body variables", "Only inside the package body", "v_operation_count"],
            ]
        ),

        heading("Common Oracle Built-in Packages"),

        table(
            ["Package", "Purpose"],
            [
                ["DBMS_OUTPUT", "Display output to the console (PUT_LINE)"],
                ["UTL_FILE", "Read and write operating system files"],
                ["DBMS_SQL", "Execute dynamic SQL statements"],
                ["DBMS_RANDOM", "Generate random numbers and strings"],
                ["DBMS_UTILITY", "Various utility functions"],
                ["UTL_MAIL", "Send email from the database"],
                ["DBMS_SCHEDULER", "Schedule and manage jobs"],
                ["DBMS_METADATA", "Extract DDL for database objects"],
            ]
        ),

        heading("Managing Packages"),

        table(
            ["Command", "Purpose"],
            [
                ["CREATE OR REPLACE PACKAGE ...", "Create or update specification"],
                ["CREATE OR REPLACE PACKAGE BODY ...", "Create or update body"],
                ["DROP PACKAGE package_name", "Drop both spec and body"],
                ["DROP PACKAGE BODY package_name", "Drop only the body"],
                ["ALTER PACKAGE package_name COMPILE", "Recompile the package"],
                ["SELECT * FROM USER_OBJECTS WHERE OBJECT_TYPE = 'PACKAGE'", "List packages"],
            ]
        ),

        note(
            "You can drop and recreate a package body without affecting the specification or any code that depends on it. This is useful during development when you need to change implementation without breaking dependent programs.",
            "tip",
            "Development Tip"
        ),

        keyPoints([
            "A package has two parts: specification (public interface) and body (implementation).",
            "Members declared in the specification are public; those only in the body are private.",
            "Packages improve performance by loading all components into memory on first call.",
            "Package variables persist for the entire database session.",
            "Oracle provides many built-in packages like DBMS_OUTPUT, UTL_FILE and DBMS_SQL.",
        ]),
    ],

    {
        summary:
            "Learn package structure (spec and body), public versus private members, package advantages and common Oracle built-in packages.",
        minutes: 13,
        tags: ["plsql", "packages", "modularity", "important"],

        mcqs: [
            mcq(
                "A PL/SQL package consists of:",
                ["Only a body", "Only a specification", "A specification and a body", "A trigger and a cursor"],
                2,
                "A package has two parts: the specification (interface) and the body (implementation)."
            ),
            mcq(
                "Private members of a package are declared in:",
                ["The specification", "The body only", "Both spec and body", "A separate file"],
                1,
                "Private members are declared only in the package body and are not accessible from outside."
            ),
            mcq(
                "Package variables retain their values:",
                ["Forever", "For the duration of the session", "Until the database restarts", "For one transaction only"],
                1,
                "Package variables persist for the entire database session."
            ),
            mcq(
                "Which built-in package is used to display output to the console?",
                ["UTL_FILE", "DBMS_SQL", "DBMS_OUTPUT", "DBMS_RANDOM"],
                2,
                "DBMS_OUTPUT.PUT_LINE is used to display output to the console."
            ),
            mcq(
                "What happens when you DROP PACKAGE BODY?",
                ["Both spec and body are deleted", "Only the body is deleted; spec remains", "The package is disabled", "All dependent objects are dropped"],
                1,
                "DROP PACKAGE BODY removes only the body. The specification and dependent code remain intact."
            ),
        ],

        questions: [
            qa(
                "What is a package? Explain its two parts.",
                "A package is a named PL/SQL object that groups logically related procedures, functions, variables, constants, cursors and exceptions into a single unit. It has two parts. The package specification is the public interface that declares all types, variables, constants, cursors, procedures and functions that are visible to external callers. It contains no implementation code. The package body contains the actual implementation of all procedures and functions declared in the specification, plus any private variables, cursors and subprograms that are accessible only within the package body. This separation provides encapsulation and information hiding.",
                5
            ),
            qa(
                "Explain the advantages of using packages in PL/SQL.",
                "Packages provide modularity by grouping related functionality into a single named unit. They provide encapsulation and information hiding because private members declared only in the body are not accessible from outside. Performance is improved because the entire package is loaded into memory on the first call, making subsequent calls faster. Package variables persist for the duration of the session, allowing state to be maintained across calls. Packages support overloading, where multiple procedures or functions can have the same name but different parameter lists. Maintenance is easier because the body can be changed without affecting the specification or any dependent code.",
                5
            ),
            qa(
                "List five Oracle built-in packages and their purposes.",
                "DBMS_OUTPUT is used to display output to the console using PUT_LINE, essential for debugging. UTL_FILE provides the ability to read and write operating system files from PL/SQL. DBMS_SQL allows executing dynamic SQL statements that are constructed at runtime. DBMS_RANDOM generates random numbers and strings for testing and simulation. DBMS_SCHEDULER is used to create, manage and schedule database jobs for automated tasks. Other useful packages include UTL_MAIL for sending emails, DBMS_METADATA for extracting DDL and DBMS_UTILITY for various utility functions.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — Advanced Exception Handling
========================================================= */

const advancedExceptionHandling = createTopic(
    "advanced-exception-handling",
    "Advanced Exception Handling",

    [
        definition(
            "Exception",
            "A runtime error or warning condition that disrupts the normal flow of a PL/SQL program. Exception handling allows you to catch these errors and respond gracefully instead of letting the program crash."
        ),

        text(
            "PL/SQL provides a robust exception handling mechanism that allows you to separate error handling code from the main logic. Exceptions can be predefined by Oracle, defined by the programmer, or raised explicitly using the RAISE statement."
        ),

        heading("Types of Exceptions"),

        table(
            ["Type", "Defined By", "Raised By", "Examples"],
            [
                ["Predefined (Named)", "Oracle", "Automatically by the runtime", "NO_DATA_FOUND, TOO_MANY_ROWS, ZERO_DIVIDE"],
                ["Non-Predefined (Named)", "Programmer (linked to Oracle error)", "Automatically by the runtime", "Custom name for ORA-02292 (child record found)"],
                ["User-Defined", "Programmer", "Explicitly using RAISE", "Business rule violations"],
            ]
        ),

        heading("Common Predefined Exceptions"),

        table(
            ["Exception Name", "Oracle Error", "Raised When"],
            [
                ["NO_DATA_FOUND", "ORA-01403", "SELECT INTO returns no rows"],
                ["TOO_MANY_ROWS", "ORA-01422", "SELECT INTO returns more than one row"],
                ["ZERO_DIVIDE", "ORA-01476", "Division by zero"],
                ["DUP_VAL_ON_INDEX", "ORA-00001", "Unique constraint violated"],
                ["INVALID_NUMBER", "ORA-01722", "Conversion of string to number fails"],
                ["VALUE_ERROR", "ORA-06502", "Arithmetic, conversion or truncation error"],
                ["CURSOR_ALREADY_OPEN", "ORA-06511", "Trying to open an already open cursor"],
                ["INVALID_CURSOR", "ORA-01001", "Illegal cursor operation (e.g., fetch from closed cursor)"],
                ["LOGIN_DENIED", "ORA-01017", "Invalid username or password"],
                ["STORAGE_ERROR", "ORA-06500", "PL/SQL runs out of memory"],
                ["PROGRAM_ERROR", "ORA-06501", "Internal PL/SQL error"],
                ["OTHERS", "—", "Catches any exception not handled by specific handlers"],
            ]
        ),

        heading("Exception Handling Syntax"),

        code(
            `DECLARE
    v_name VARCHAR2(50);
BEGIN
    SELECT Name INTO v_name FROM Student WHERE Roll_No = 'M999';
    DBMS_OUTPUT.PUT_LINE('Name: ' || v_name);

EXCEPTION
    WHEN NO_DATA_FOUND THEN
        DBMS_OUTPUT.PUT_LINE('No student found with that roll number.');
    WHEN TOO_MANY_ROWS THEN
        DBMS_OUTPUT.PUT_LINE('Multiple students found. Use a cursor.');
    WHEN OTHERS THEN
        DBMS_OUTPUT.PUT_LINE('Unexpected error: ' || SQLCODE || ' - ' || SQLERRM);
END;
/`,
            "sql",
            "Exception handling structure"
        ),

        heading("SQLCODE and SQLERRM"),

        definition(
            "SQLCODE",
            "A function that returns the numeric error code of the most recently raised exception. Returns 0 if no error, 1 for user-defined exceptions, and a negative number for Oracle errors."
        ),

        definition(
            "SQLERRM",
            "A function that returns the text message associated with the most recently raised exception."
        ),

        code(
            `EXCEPTION
    WHEN OTHERS THEN
        DBMS_OUTPUT.PUT_LINE('Error Code: ' || SQLCODE);
        DBMS_OUTPUT.PUT_LINE('Error Message: ' || SQLERRM);
        -- Example output:
        -- Error Code: -1476
        -- Error Message: ORA-01476: divisor is equal to zero`,
            "sql",
            "Using SQLCODE and SQLERRM"
        ),

        heading("User-Defined Exceptions"),

        code(
            `DECLARE
    e_low_marks EXCEPTION;       -- Declare
    v_marks NUMBER := 35;
BEGIN
    IF v_marks < 40 THEN
        RAISE e_low_marks;       -- Raise explicitly
    END IF;

    DBMS_OUTPUT.PUT_LINE('Student passed');

EXCEPTION
    WHEN e_low_marks THEN        -- Handle
        DBMS_OUTPUT.PUT_LINE('Student failed: Marks below 40');
END;
/`,
            "sql",
            "User-defined exception"
        ),

        heading("RAISE_APPLICATION_ERROR"),

        definition(
            "RAISE_APPLICATION_ERROR",
            "A built-in procedure that raises a user-defined error with a custom error number (between -20000 and -20999) and a custom message. It stops execution and returns the error to the calling environment."
        ),

        code(
            `CREATE OR REPLACE PROCEDURE Set_Marks(
    p_roll  IN VARCHAR2,
    p_marks IN NUMBER
) IS
BEGIN
    IF p_marks < 0 THEN
        RAISE_APPLICATION_ERROR(-20001, 'Marks cannot be negative');
    ELSIF p_marks > 100 THEN
        RAISE_APPLICATION_ERROR(-20002, 'Marks cannot exceed 100');
    END IF;

    UPDATE Student SET Marks = p_marks WHERE Roll_No = p_roll;

    IF SQL%NOTFOUND THEN
        RAISE_APPLICATION_ERROR(-20003, 'Student not found: ' || p_roll);
    END IF;

    COMMIT;
END;
/`,
            "sql",
            "RAISE_APPLICATION_ERROR example"
        ),

        heading("Associating Exceptions with Oracle Error Codes"),

        code(
            `DECLARE
    e_child_record EXCEPTION;
    PRAGMA EXCEPTION_INIT(e_child_record, -2292);  -- ORA-02292
BEGIN
    DELETE FROM Department WHERE Dept_Id = 1;
EXCEPTION
    WHEN e_child_record THEN
        DBMS_OUTPUT.PUT_LINE('Cannot delete: Students exist in this department');
END;
/`,
            "sql",
            "PRAGMA EXCEPTION_INIT"
        ),

        heading("Exception Propagation"),

        text(
            "If an exception is raised in a block that has no handler for it, the exception propagates to the enclosing block. If no handler is found in any enclosing block, the exception is returned to the calling environment (host program or user)."
        ),

        code(
            `BEGIN
    -- Outer block
    BEGIN
        -- Inner block
        DECLARE
            v_result NUMBER;
        BEGIN
            v_result := 10 / 0;  -- Raises ZERO_DIVIDE
        EXCEPTION
            WHEN NO_DATA_FOUND THEN
                DBMS_OUTPUT.PUT_LINE('No data');
                -- ZERO_DIVIDE is NOT handled here → propagates up
        END;
    EXCEPTION
        WHEN ZERO_DIVIDE THEN
            DBMS_OUTPUT.PUT_LINE('Division by zero caught in outer block');
    END;
END;
/`,
            "sql",
            "Exception propagation"
        ),

        note(
            "Always include a WHEN OTHERS handler in your top-level blocks to catch unexpected errors. Log the SQLCODE and SQLERRM for debugging. Never use WHEN OTHERS without logging — it silently swallows errors and makes debugging extremely difficult.",
            "warning",
            "Best Practice"
        ),

        keyPoints([
            "Exceptions are of three types: predefined (Oracle), non-predefined (linked to Oracle errors) and user-defined.",
            "SQLCODE returns the error number; SQLERRM returns the error message.",
            "User-defined exceptions are declared, raised with RAISE, and handled in the EXCEPTION section.",
            "RAISE_APPLICATION_ERROR raises custom errors with codes between -20000 and -20999.",
            "PRAGMA EXCEPTION_INIT associates a user-defined exception name with an Oracle error number.",
        ]),
    ],

    {
        summary:
            "Master predefined, non-predefined and user-defined exceptions, RAISE_APPLICATION_ERROR, PRAGMA EXCEPTION_INIT and exception propagation.",
        minutes: 12,
        tags: ["plsql", "exceptions", "error-handling", "important"],

        mcqs: [
            mcq(
                "NO_DATA_FOUND is raised when:",
                ["A cursor is closed", "SELECT INTO returns no rows", "A table is dropped", "Division by zero occurs"],
                1,
                "NO_DATA_FOUND is raised when a SELECT INTO statement returns zero rows."
            ),
            mcq(
                "SQLCODE returns:",
                ["The error message text", "The numeric error code", "The line number", "The table name"],
                1,
                "SQLCODE returns the numeric error code of the most recently raised exception."
            ),
            mcq(
                "User-defined error codes must be between:",
                ["-1 and -999", "-20000 and -20999", "-10000 and -19999", "1 and 999"],
                1,
                "RAISE_APPLICATION_ERROR accepts error codes between -20000 and -20999."
            ),
            mcq(
                "PRAGMA EXCEPTION_INIT is used to:",
                ["Raise an exception", "Associate a user-defined exception with an Oracle error code", "Ignore an exception", "Log an exception"],
                1,
                "PRAGMA EXCEPTION_INIT links a user-defined exception name to a specific Oracle error number."
            ),
            mcq(
                "If an exception is not handled in the current block, it:",
                ["Is silently ignored", "Propagates to the enclosing block", "Crashes the database", "Is logged automatically"],
                1,
                "Unhandled exceptions propagate outward to enclosing blocks until a handler is found."
            ),
        ],

        questions: [
            qa(
                "Explain the three types of exceptions in PL/SQL with examples.",
                "Predefined exceptions are named by Oracle and raised automatically by the runtime when specific errors occur. Examples include NO_DATA_FOUND when SELECT INTO returns no rows, TOO_MANY_ROWS when it returns multiple rows, and ZERO_DIVIDE when division by zero is attempted. Non-predefined exceptions are given a name by the programmer and linked to an Oracle error code using PRAGMA EXCEPTION_INIT. For example, declaring e_child_record EXCEPTION and using PRAGMA EXCEPTION_INIT(e_child_record, -2292) allows you to handle the 'child record found' error by name. User-defined exceptions are declared by the programmer and raised explicitly using the RAISE statement when a business rule is violated, such as RAISE e_low_marks when marks fall below the passing threshold.",
                5
            ),
            qa(
                "What is RAISE_APPLICATION_ERROR? Explain with an example.",
                "RAISE_APPLICATION_ERROR is a built-in PL/SQL procedure that raises a user-defined error with a custom error number and message. The error number must be between -20000 and -20999. It immediately stops execution and returns the error to the calling environment. For example, in a procedure that sets student marks, you can write: IF p_marks < 0 THEN RAISE_APPLICATION_ERROR(-20001, 'Marks cannot be negative'); END IF. This is more informative than a generic Oracle error because the message clearly describes the business rule that was violated. The calling application receives both the error code and the message and can display it to the user.",
                5
            ),
            qa(
                "Explain exception propagation in PL/SQL.",
                "Exception propagation occurs when an exception is raised in a block that does not have a handler for it. The exception then moves outward to the enclosing block. If the enclosing block has a matching handler, it is executed. If not, the exception continues to propagate to the next outer block. If no handler is found in any enclosing block, the exception is returned to the calling environment, which typically terminates the program with an error. For example, if an inner block raises ZERO_DIVIDE but only handles NO_DATA_FOUND, the ZERO_DIVIDE exception propagates to the outer block. If the outer block has a WHEN ZERO_DIVIDE handler, it catches it. This mechanism allows centralised error handling in outer blocks.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — Collections in PL/SQL
========================================================= */

const collectionsInPLSQL = createTopic(
    "collections-in-plsql",
    "Collections in PL/SQL",

    [
        definition(
            "Collection",
            "A composite data type in PL/SQL that stores multiple elements of the same data type in a single variable. Collections are similar to arrays in other programming languages."
        ),

        text(
            "Collections allow you to store and manipulate groups of related data in memory. They are essential for bulk operations, caching lookup tables and passing multiple values between subprograms. PL/SQL provides three types of collections: Associative Arrays, Nested Tables and VARRAYs."
        ),

        heading("Types of Collections"),

        table(
            ["Feature", "Associative Array (Index-By Table)", "Nested Table", "VARRAY"],
            [
                ["Declaration", "TYPE t IS TABLE OF type INDEX BY key", "TYPE t IS TABLE OF type", "TYPE t IS VARRAY(n) OF type"],
                ["Index type", "Integer or VARCHAR2", "Integer (starts at 1)", "Integer (starts at 1)"],
                ["Size", "Unbounded", "Unbounded (can grow)", "Fixed maximum size"],
                ["Sparse?", "Yes (gaps allowed)", "Yes (after deletions)", "No (dense)"],
                ["Stored in DB?", "No (PL/SQL only)", "Yes (as column type)", "Yes (as column type)"],
                ["Initialised?", "Automatically empty", "Must use constructor", "Must use constructor"],
                ["Best for", "Lookup tables, caching", "Multi-valued columns", "Fixed-size lists"],
            ]
        ),

        heading("1. Associative Arrays (Index-By Tables)"),

        code(
            `DECLARE
    -- Declare an associative array indexed by integer
    TYPE t_marks IS TABLE OF NUMBER INDEX BY PLS_INTEGER;
    v_marks t_marks;

    -- Declare an associative array indexed by string
    TYPE t_phone IS TABLE OF VARCHAR2(15) INDEX BY VARCHAR2(50);
    v_phone t_phone;
BEGIN
    -- Populate integer-indexed array
    v_marks(1) := 85;
    v_marks(2) := 92;
    v_marks(5) := 78;  -- Sparse: 3 and 4 are skipped

    DBMS_OUTPUT.PUT_LINE('Marks 1: ' || v_marks(1));
    DBMS_OUTPUT.PUT_LINE('Marks 5: ' || v_marks(5));
    DBMS_OUTPUT.PUT_LINE('Count: ' || v_marks.COUNT);

    -- Populate string-indexed array
    v_phone('Rahul') := '9876543210';
    v_phone('Priya') := '9123456780';

    DBMS_OUTPUT.PUT_LINE('Rahul: ' || v_phone('Rahul'));

    -- Iterate using FIRST and NEXT
    DECLARE
        v_idx PLS_INTEGER;
    BEGIN
        v_idx := v_marks.FIRST;
        WHILE v_idx IS NOT NULL LOOP
            DBMS_OUTPUT.PUT_LINE('Index ' || v_idx || ': ' || v_marks(v_idx));
            v_idx := v_marks.NEXT(v_idx);
        END LOOP;
    END;
END;
/`,
            "sql",
            "Associative arrays"
        ),

        heading("2. Nested Tables"),

        code(
            `DECLARE
    TYPE t_names IS TABLE OF VARCHAR2(50);
    v_names t_names := t_names('Rahul', 'Priya', 'Amit');
BEGIN
    DBMS_OUTPUT.PUT_LINE('Count: ' || v_names.COUNT);
    DBMS_OUTPUT.PUT_LINE('First: ' || v_names(1));

    -- Add elements
    v_names.EXTEND;            -- Add one NULL element
    v_names(v_names.LAST) := 'Sneha';

    -- Delete an element (creates a gap)
    v_names.DELETE(2);         -- Removes 'Priya'

    DBMS_OUTPUT.PUT_LINE('Count after delete: ' || v_names.COUNT);

    -- Iterate safely
    FOR i IN v_names.FIRST..v_names.LAST LOOP
        IF v_names.EXISTS(i) THEN
            DBMS_OUTPUT.PUT_LINE(i || ': ' || v_names(i));
        END IF;
    END LOOP;
END;
/`,
            "sql",
            "Nested tables"
        ),

        heading("3. VARRAYs (Variable-Size Arrays)"),

        code(
            `DECLARE
    TYPE t_days IS VARRAY(7) OF VARCHAR2(10);
    v_days t_days := t_days('Mon', 'Tue', 'Wed');
BEGIN
    DBMS_OUTPUT.PUT_LINE('Count: ' || v_days.COUNT);
    DBMS_OUTPUT.PUT_LINE('Limit: ' || v_days.LIMIT);

    -- Add elements (up to the limit of 7)
    v_days.EXTEND;
    v_days(4) := 'Thu';

    -- Iterate
    FOR i IN 1..v_days.COUNT LOOP
        DBMS_OUTPUT.PUT_LINE(v_days(i));
    END LOOP;

    -- v_days.EXTEND(5); → ERROR! Would exceed LIMIT of 7
END;
/`,
            "sql",
            "VARRAY example"
        ),

        heading("Collection Methods"),

        table(
            ["Method", "Returns", "Description"],
            [
                ["COUNT", "Number", "Number of elements currently in the collection"],
                ["FIRST", "Index", "Index of the first element"],
                ["LAST", "Index", "Index of the last element"],
                ["NEXT(n)", "Index", "Index of the next element after n"],
                ["PRIOR(n)", "Index", "Index of the previous element before n"],
                ["EXISTS(n)", "BOOLEAN", "TRUE if element at index n exists"],
                ["EXTEND", "—", "Appends one NULL element (Nested Table / VARRAY)"],
                ["EXTEND(n)", "—", "Appends n NULL elements"],
                ["DELETE", "—", "Removes all elements"],
                ["DELETE(n)", "—", "Removes element at index n"],
                ["DELETE(m,n)", "—", "Removes elements from index m to n"],
                ["TRIM", "—", "Removes one element from the end"],
                ["TRIM(n)", "—", "Removes n elements from the end"],
                ["LIMIT", "Number", "Maximum size (VARRAY only; NULL for others)"],
            ]
        ),

        note(
            "Associative arrays do not need initialisation and are automatically empty. Nested tables and VARRAYs must be initialised using their constructor function before use, otherwise you get a COLLECTION_IS_NULL exception.",
            "warning",
            "Common Error"
        ),

        keyPoints([
            "PL/SQL has three collection types: Associative Arrays, Nested Tables and VARRAYs.",
            "Associative arrays can be indexed by integers or strings and are always sparse.",
            "Nested tables are unbounded and can be stored as database column types.",
            "VARRAYs have a fixed maximum size and are always dense.",
            "Collection methods like COUNT, FIRST, LAST, NEXT and EXISTS are used for safe iteration.",
        ]),
    ],

    {
        summary:
            "Learn the three PL/SQL collection types — Associative Arrays, Nested Tables and VARRAYs — along with their methods and use cases.",
        minutes: 12,
        tags: ["plsql", "collections", "arrays", "nested-tables", "varray", "important"],

        mcqs: [
            mcq(
                "Which collection type can be indexed by a string?",
                ["Nested Table", "VARRAY", "Associative Array", "All of the above"],
                2,
                "Only Associative Arrays can be indexed by VARCHAR2 strings."
            ),
            mcq(
                "A VARRAY has:",
                ["Unlimited size", "A fixed maximum size", "No index", "String keys"],
                1,
                "VARRAYs have a fixed maximum size specified at declaration."
            ),
            mcq(
                "Which collection type does NOT need initialisation?",
                ["Nested Table", "VARRAY", "Associative Array", "All need initialisation"],
                2,
                "Associative arrays are automatically empty and do not need a constructor."
            ),
            mcq(
                "The COUNT method returns:",
                ["Maximum capacity", "Number of elements currently in the collection", "The first index", "The last index"],
                1,
                "COUNT returns the number of elements currently stored in the collection."
            ),
            mcq(
                "Which collection types can be stored as a database column?",
                ["Associative Array only", "Nested Table and VARRAY", "All three types", "None"],
                1,
                "Nested Tables and VARRAYs can be used as column types in database tables."
            ),
        ],

        questions: [
            qa(
                "Compare the three types of PL/SQL collections.",
                "Associative arrays (index-by tables) can be indexed by integers or strings, have no size limit, are always sparse and cannot be stored as database columns. They are ideal for lookup tables and caching. Nested tables are indexed by integers starting at 1, have no fixed size limit, can become sparse after deletions, and can be stored as database column types. They are ideal for multi-valued columns. VARRAYs are indexed by integers starting at 1, have a fixed maximum size declared at creation, are always dense (no gaps), and can also be stored as database columns. They are ideal for fixed-size lists like days of the week.",
                5
            ),
            qa(
                "Explain five collection methods with examples.",
                "COUNT returns the number of elements: v_names.COUNT returns 3 if there are three elements. FIRST returns the index of the first element: v_names.FIRST returns 1. LAST returns the index of the last element: v_names.LAST returns the highest index. NEXT(n) returns the index of the next element after n, which is essential for iterating over sparse collections: v_idx := v_names.NEXT(v_idx). EXISTS(n) returns TRUE if an element exists at index n, preventing errors when accessing deleted elements: IF v_names.EXISTS(i) THEN DBMS_OUTPUT.PUT_LINE(v_names(i)). EXTEND appends NULL elements to nested tables and VARRAYs, and DELETE removes elements.",
                5
            ),
            qa(
                "Write a PL/SQL block using an associative array to store and display phone numbers.",
                "DECLARE TYPE t_phone IS TABLE OF VARCHAR2(15) INDEX BY VARCHAR2(50); v_phone t_phone; v_name VARCHAR2(50); BEGIN v_phone('Rahul') := '9876543210'; v_phone('Priya') := '9123456780'; v_phone('Amit') := '9988776655'; v_name := v_phone.FIRST; WHILE v_name IS NOT NULL LOOP DBMS_OUTPUT.PUT_LINE(v_name || ': ' || v_phone(v_name)); v_name := v_phone.NEXT(v_name); END LOOP; END; / This creates a string-indexed associative array, stores three phone numbers, and iterates using FIRST and NEXT to display all entries.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — Dynamic SQL
========================================================= */

const dynamicSQL = createTopic(
    "dynamic-sql",
    "Dynamic SQL",

    [
        definition(
            "Dynamic SQL",
            "SQL statements that are constructed and executed at runtime rather than being hardcoded at compile time. Dynamic SQL is used when the table name, column names, WHERE conditions or the entire query structure are not known until the program runs."
        ),

        text(
            "Static SQL is embedded directly in PL/SQL and is parsed and optimised at compile time. Dynamic SQL is built as a string at runtime and executed using EXECUTE IMMEDIATE or the DBMS_SQL package. It provides flexibility but requires careful handling to avoid SQL injection attacks."
        ),

        heading("When to Use Dynamic SQL"),

        list([
            "When the table or column names are determined at runtime.",
            "When the WHERE clause conditions are built dynamically based on user input.",
            "When executing DDL statements (CREATE, ALTER, DROP) from PL/SQL.",
            "When the number or types of bind variables are not known at compile time.",
            "When executing SQL statements that are stored in a table or configuration file.",
        ]),

        heading("EXECUTE IMMEDIATE"),

        definition(
            "EXECUTE IMMEDIATE",
            "A PL/SQL statement that parses and executes a dynamic SQL string immediately. It is the simplest and most commonly used method for dynamic SQL."
        ),

        code(
            `-- Dynamic DDL
BEGIN
    EXECUTE IMMEDIATE 'CREATE TABLE Temp_Table (Id NUMBER, Name VARCHAR2(50))';
    DBMS_OUTPUT.PUT_LINE('Table created');
END;
/

-- Dynamic DML with bind variables
DECLARE
    v_roll  VARCHAR2(10) := 'M099';
    v_name  VARCHAR2(50) := 'Dynamic Student';
    v_marks NUMBER := 88;
BEGIN
    EXECUTE IMMEDIATE
        'INSERT INTO Student (Roll_No, Name, Marks) VALUES (:1, :2, :3)'
        USING v_roll, v_name, v_marks;
    DBMS_OUTPUT.PUT_LINE('Row inserted');
    COMMIT;
END;
/`,
            "sql",
            "EXECUTE IMMEDIATE basics"
        ),

        heading("Dynamic SELECT with INTO"),

        code(
            `-- Single row dynamic query
DECLARE
    v_sql   VARCHAR2(200);
    v_name  VARCHAR2(50);
    v_marks NUMBER;
    v_roll  VARCHAR2(10) := 'M001';
BEGIN
    v_sql := 'SELECT Name, Marks FROM Student WHERE Roll_No = :roll';

    EXECUTE IMMEDIATE v_sql
        INTO v_name, v_marks
        USING v_roll;

    DBMS_OUTPUT.PUT_LINE(v_name || ' scored ' || v_marks);
END;
/`,
            "sql",
            "Dynamic SELECT INTO"
        ),

        heading("Dynamic SQL with Dynamic Table Name"),

        code(
            `-- Count rows in any table
DECLARE
    v_table_name VARCHAR2(30) := 'Student';
    v_count      NUMBER;
BEGIN
    EXECUTE IMMEDIATE 'SELECT COUNT(*) FROM ' || v_table_name
        INTO v_count;
    DBMS_OUTPUT.PUT_LINE(v_table_name || ' has ' || v_count || ' rows');
END;
/`,
            "sql",
            "Dynamic table name"
        ),

        heading("Bind Variables versus Concatenation"),

        table(
            ["Aspect", "Bind Variables (USING)", "String Concatenation"],
            [
                ["Syntax", "EXECUTE IMMEDIATE sql USING var", "EXECUTE IMMEDIATE '... ' || var"],
                ["Performance", "Better (parsed once, reused)", "Worse (parsed every time)"],
                ["SQL Injection", "Safe", "Vulnerable"],
                ["Use for", "Values (data)", "Object names (table, column)"],
                ["Example", "WHERE id = :1 USING v_id", "FROM ' || v_table_name"],
            ]
        ),

        note(
            "Always use bind variables (USING clause) for data values to prevent SQL injection and improve performance. Use concatenation only for object names like table and column names, which cannot be passed as bind variables.",
            "warning",
            "Security"
        ),

        heading("SQL Injection Example"),

        code(
            `-- DANGEROUS: Concatenation with user input
-- If user enters: ' OR 1=1 --
v_sql := 'SELECT * FROM Student WHERE Name = ''' || user_input || '''';
-- Becomes: SELECT * FROM Student WHERE Name = '' OR 1=1 --'
-- Returns ALL rows!

-- SAFE: Using bind variables
v_sql := 'SELECT * FROM Student WHERE Name = :name';
EXECUTE IMMEDIATE v_sql USING user_input;
-- The input is treated as a literal value, not as SQL code`,
            "sql",
            "SQL injection prevention"
        ),

        heading("DBMS_SQL Package"),

        definition(
            "DBMS_SQL",
            "An Oracle built-in package that provides a more flexible but complex API for executing dynamic SQL. It is useful when the number of columns or bind variables is not known at compile time."
        ),

        code(
            `DECLARE
    v_cursor  INTEGER;
    v_rows    INTEGER;
BEGIN
    v_cursor := DBMS_SQL.OPEN_CURSOR;

    DBMS_SQL.PARSE(v_cursor,
        'UPDATE Student SET Marks = Marks + 5 WHERE Course = :c',
        DBMS_SQL.NATIVE);

    DBMS_SQL.BIND_VARIABLE(v_cursor, ':c', 'MSc IT');

    v_rows := DBMS_SQL.EXECUTE(v_cursor);
    DBMS_OUTPUT.PUT_LINE(v_rows || ' rows updated');

    DBMS_SQL.CLOSE_CURSOR(v_cursor);
END;
/`,
            "sql",
            "DBMS_SQL example"
        ),

        heading("EXECUTE IMMEDIATE versus DBMS_SQL"),

        table(
            ["Aspect", "EXECUTE IMMEDIATE", "DBMS_SQL"],
            [
                ["Complexity", "Simple and concise", "Complex with many steps"],
                ["Flexibility", "Fixed number of columns and binds", "Dynamic number of columns and binds"],
                ["Performance", "Better for simple cases", "Better for repeated execution with different binds"],
                ["Use case", "Most dynamic SQL needs", "Unknown column count, bulk operations"],
                ["Steps", "One statement", "OPEN_CURSOR, PARSE, BIND, EXECUTE, CLOSE"],
            ]
        ),

        keyPoints([
            "Dynamic SQL is constructed as a string at runtime and executed using EXECUTE IMMEDIATE or DBMS_SQL.",
            "Use bind variables (USING) for data values to prevent SQL injection and improve performance.",
            "Use concatenation only for object names (tables, columns) that cannot be bind variables.",
            "EXECUTE IMMEDIATE is simpler and sufficient for most dynamic SQL needs.",
            "DBMS_SQL provides more flexibility for cases where the number of columns or binds is unknown.",
        ]),
    ],

    {
        summary:
            "Learn dynamic SQL with EXECUTE IMMEDIATE, bind variables, SQL injection prevention and the DBMS_SQL package.",
        minutes: 12,
        tags: ["plsql", "dynamic-sql", "execute-immediate", "security", "important"],

        mcqs: [
            mcq(
                "Dynamic SQL is:",
                ["SQL that runs faster", "SQL constructed and executed at runtime", "SQL that uses indexes", "SQL written in Java"],
                1,
                "Dynamic SQL is built as a string at runtime and executed dynamically."
            ),
            mcq(
                "Which statement is used to execute dynamic SQL in PL/SQL?",
                ["RUN SQL", "EXECUTE IMMEDIATE", "DYNAMIC RUN", "EXEC SQL"],
                1,
                "EXECUTE IMMEDIATE parses and executes a dynamic SQL string immediately."
            ),
            mcq(
                "Bind variables in dynamic SQL help prevent:",
                ["Memory leaks", "SQL injection", "Syntax errors", "Deadlocks"],
                1,
                "Bind variables treat user input as data values, not executable SQL, preventing injection."
            ),
            mcq(
                "When should you use string concatenation in dynamic SQL?",
                ["For all values", "For data values only", "For object names like table and column names", "Never"],
                2,
                "Concatenation is needed for object names (tables, columns) which cannot be bind variables."
            ),
            mcq(
                "DBMS_SQL is preferred over EXECUTE IMMEDIATE when:",
                ["The query is simple", "The number of columns is unknown at compile time", "You want shorter code", "You are doing DDL"],
                1,
                "DBMS_SQL handles cases where the number of columns or bind variables is not known until runtime."
            ),
        ],

        questions: [
            qa(
                "What is dynamic SQL? When is it needed?",
                "Dynamic SQL refers to SQL statements that are constructed as strings at runtime and executed using EXECUTE IMMEDIATE or the DBMS_SQL package, rather than being hardcoded at compile time. It is needed when the table or column names are determined at runtime, when WHERE clause conditions are built dynamically based on user input, when executing DDL statements like CREATE or DROP from PL/SQL, when the number or types of bind variables are not known at compile time, or when SQL statements are stored in configuration tables and loaded at runtime.",
                5
            ),
            qa(
                "Explain the difference between bind variables and string concatenation in dynamic SQL.",
                "Bind variables use the USING clause to pass values into the dynamic SQL string. For example, EXECUTE IMMEDIATE 'SELECT * FROM Student WHERE Name = :n' USING v_name. The database treats the value as data, not as SQL code, which prevents SQL injection and allows the database to reuse the parsed execution plan for better performance. String concatenation builds the SQL string by appending values directly: 'SELECT * FROM Student WHERE Name = ''' || v_name || '''' This is vulnerable to SQL injection because a malicious user can enter SQL code as input. Concatenation should only be used for object names like table and column names, which cannot be passed as bind variables.",
                5
            ),
            qa(
                "What is SQL injection and how can it be prevented in PL/SQL?",
                "SQL injection is a security vulnerability where an attacker enters malicious SQL code as input, which gets executed by the database. For example, if a login query uses concatenation: 'SELECT * FROM Users WHERE name = ''' || input || '''', an attacker entering ' OR 1=1 -- would make the query return all users. Prevention involves using bind variables with the USING clause in EXECUTE IMMEDIATE, which treats input as literal data values rather than executable SQL code. Additional measures include validating and sanitising all user input, using the least privilege principle for database accounts, and avoiding dynamic SQL when static SQL can accomplish the same task.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 5 — Records and Bulk Operations
========================================================= */

const recordsAndBulkOps = createTopic(
    "records-and-bulk-operations",
    "Records and Bulk Operations",

    [
        heading("Records in PL/SQL"),

        definition(
            "Record",
            "A composite data type that groups related fields of different data types into a single logical unit, similar to a row in a table or a struct in C."
        ),

        heading("Types of Records"),

        table(
            ["Type", "Defined By", "Syntax"],
            [
                ["Table-based (%ROWTYPE)", "Automatically from a table", "v_rec Student%ROWTYPE"],
                ["Cursor-based (%ROWTYPE)", "Automatically from a cursor", "v_rec c_students%ROWTYPE"],
                ["User-defined (RECORD)", "Manually by the programmer", "TYPE t_rec IS RECORD (...)"],
            ]
        ),

        code(
            `-- 1. Table-based record
DECLARE
    v_student Student%ROWTYPE;
BEGIN
    SELECT * INTO v_student FROM Student WHERE Roll_No = 'M001';
    DBMS_OUTPUT.PUT_LINE(v_student.Name || ': ' || v_student.Marks);
END;
/

-- 2. User-defined record
DECLARE
    TYPE t_result IS RECORD (
        student_name  VARCHAR2(50),
        course        VARCHAR2(30),
        total_marks   NUMBER,
        grade         VARCHAR2(5)
    );
    v_result t_result;
BEGIN
    v_result.student_name := 'Rahul';
    v_result.course := 'MSc IT';
    v_result.total_marks := 450;
    v_result.grade := 'A';
    DBMS_OUTPUT.PUT_LINE(v_result.student_name || ' - Grade: ' || v_result.grade);
END;
/`,
            "sql",
            "Record types"
        ),

        heading("Records with DML"),

        code(
            `-- INSERT using a record
DECLARE
    v_student Student%ROWTYPE;
BEGIN
    v_student.Roll_No := 'M050';
    v_student.Name := 'Vikram';
    v_student.Course := 'MSc IT';
    v_student.Marks := 88;

    INSERT INTO Student VALUES v_student;
    COMMIT;
END;
/

-- UPDATE using a record
DECLARE
    v_student Student%ROWTYPE;
BEGIN
    v_student.Roll_No := 'M050';
    v_student.Name := 'Vikram Updated';
    v_student.Course := 'MSc IT';
    v_student.Marks := 92;

    UPDATE Student SET ROW = v_student WHERE Roll_No = 'M050';
    COMMIT;
END;
/`,
            "sql",
            "Using records with INSERT and UPDATE"
        ),

        heading("Bulk Operations"),

        definition(
            "Bulk Operations",
            "PL/SQL features that process multiple rows at once instead of one row at a time, significantly improving performance by reducing context switches between the PL/SQL and SQL engines."
        ),

        text(
            "Every time PL/SQL executes a SQL statement, it switches context from the PL/SQL engine to the SQL engine. Processing rows one at a time in a loop causes many context switches. Bulk operations minimise these switches by processing many rows in a single operation."
        ),

        heading("BULK COLLECT"),

        definition(
            "BULK COLLECT",
            "A clause used with SELECT, FETCH or RETURNING to retrieve multiple rows into a collection in a single operation instead of fetching one row at a time."
        ),

        code(
            `-- BULK COLLECT with SELECT INTO
DECLARE
    TYPE t_names IS TABLE OF Student.Name%TYPE;
    v_names t_names;
BEGIN
    SELECT Name BULK COLLECT INTO v_names
    FROM Student
    WHERE Course = 'MSc IT';

    DBMS_OUTPUT.PUT_LINE('Found ' || v_names.COUNT || ' students');

    FOR i IN 1..v_names.COUNT LOOP
        DBMS_OUTPUT.PUT_LINE(v_names(i));
    END LOOP;
END;
/

-- BULK COLLECT with cursor FETCH
DECLARE
    CURSOR c_students IS SELECT Name, Marks FROM Student;
    TYPE t_students IS TABLE OF c_students%ROWTYPE;
    v_students t_students;
BEGIN
    OPEN c_students;
    FETCH c_students BULK COLLECT INTO v_students LIMIT 100;
    CLOSE c_students;

    FOR i IN 1..v_students.COUNT LOOP
        DBMS_OUTPUT.PUT_LINE(v_students(i).Name || ': ' || v_students(i).Marks);
    END LOOP;
END;
/`,
            "sql",
            "BULK COLLECT examples"
        ),

        note(
            "Use the LIMIT clause with BULK COLLECT when processing large tables to avoid consuming too much memory. A LIMIT of 100 to 1000 rows per fetch is a good practice.",
            "tip",
            "Memory Management"
        ),

        heading("FORALL"),

        definition(
            "FORALL",
            "A statement that sends multiple DML operations (INSERT, UPDATE, DELETE) to the SQL engine in a single batch, dramatically improving performance compared to a regular FOR loop."
        ),

        code(
            `-- FORALL INSERT
DECLARE
    TYPE t_rolls IS TABLE OF VARCHAR2(10);
    TYPE t_names IS TABLE OF VARCHAR2(50);
    TYPE t_marks IS TABLE OF NUMBER;

    v_rolls t_rolls := t_rolls('M101', 'M102', 'M103');
    v_names t_names := t_names('Student1', 'Student2', 'Student3');
    v_marks t_marks := t_marks(85, 90, 78);
BEGIN
    FORALL i IN 1..v_rolls.COUNT
        INSERT INTO Student (Roll_No, Name, Marks)
        VALUES (v_rolls(i), v_names(i), v_marks(i));

    DBMS_OUTPUT.PUT_LINE(SQL%ROWCOUNT || ' rows inserted');
    COMMIT;
END;
/

-- FORALL UPDATE
DECLARE
    TYPE t_rolls IS TABLE OF VARCHAR2(10);
    v_rolls t_rolls := t_rolls('M001', 'M002', 'M003');
BEGIN
    FORALL i IN 1..v_rolls.COUNT
        UPDATE Student SET Marks = Marks + 5
        WHERE Roll_No = v_rolls(i);

    DBMS_OUTPUT.PUT_LINE(SQL%ROWCOUNT || ' rows updated');
    COMMIT;
END;
/`,
            "sql",
            "FORALL examples"
        ),

        heading("FORALL versus FOR Loop"),

        table(
            ["Aspect", "FOR Loop with DML", "FORALL"],
            [
                ["Context switches", "One per iteration", "One for the entire batch"],
                ["Performance", "Slower", "Much faster (10x-100x)"],
                ["Syntax", "FOR i IN 1..n LOOP INSERT... END LOOP", "FORALL i IN 1..n INSERT..."],
                ["Can contain logic?", "Yes (IF, calculations)", "No — single DML statement only"],
                ["Error handling", "Stops on first error", "Can use SAVE EXCEPTIONS"],
            ]
        ),

        heading("SAVE EXCEPTIONS"),

        code(
            `-- FORALL with SAVE EXCEPTIONS continues past errors
DECLARE
    TYPE t_rolls IS TABLE OF VARCHAR2(10);
    v_rolls t_rolls := t_rolls('M001', 'INVALID', 'M003');
    e_bulk_errors EXCEPTION;
    PRAGMA EXCEPTION_INIT(e_bulk_errors, -24381);
BEGIN
    FORALL i IN 1..v_rolls.COUNT SAVE EXCEPTIONS
        UPDATE Student SET Marks = Marks + 5
        WHERE Roll_No = v_rolls(i);
EXCEPTION
    WHEN e_bulk_errors THEN
        DBMS_OUTPUT.PUT_LINE('Errors: ' || SQL%BULK_EXCEPTIONS.COUNT);
        FOR j IN 1..SQL%BULK_EXCEPTIONS.COUNT LOOP
            DBMS_OUTPUT.PUT_LINE(
                'Row ' || SQL%BULK_EXCEPTIONS(j).ERROR_INDEX ||
                ' Error: ' || SQL%BULK_EXCEPTIONS(j).ERROR_CODE
            );
        END LOOP;
END;
/`,
            "sql",
            "FORALL with SAVE EXCEPTIONS"
        ),

        heading("Performance Comparison"),

        table(
            ["Method", "10,000 Rows", "Context Switches"],
            [
                ["Row-by-row FOR loop", "~5-10 seconds", "10,000"],
                ["BULK COLLECT + FORALL", "~0.1-0.5 seconds", "1"],
            ]
        ),

        note(
            "Always prefer BULK COLLECT and FORALL over row-by-row processing when working with multiple rows. The performance improvement is dramatic, especially for large datasets. Use LIMIT with BULK COLLECT to control memory usage.",
            "exam",
            "Frequently Asked"
        ),

        keyPoints([
            "Records group related fields of different types into a single unit, similar to a table row.",
            "%ROWTYPE creates a record matching a table or cursor structure automatically.",
            "BULK COLLECT fetches multiple rows into a collection in one operation.",
            "FORALL sends multiple DML operations to the SQL engine in a single batch.",
            "BULK COLLECT + FORALL can be 10-100x faster than row-by-row processing.",
        ]),
    ],

    {
        summary:
            "Learn PL/SQL records, BULK COLLECT for fast fetching, FORALL for fast DML, and SAVE EXCEPTIONS for error handling in bulk operations.",
        minutes: 13,
        tags: ["plsql", "records", "bulk-collect", "forall", "performance", "important"],

        mcqs: [
            mcq(
                "A %ROWTYPE record matches:",
                ["A single column", "An entire table row structure", "A package", "A trigger"],
                1,
                "%ROWTYPE creates a record with fields matching every column in a table or cursor."
            ),
            mcq(
                "BULK COLLECT is used to:",
                ["Insert one row", "Fetch multiple rows into a collection at once", "Delete a table", "Create an index"],
                1,
                "BULK COLLECT retrieves multiple rows into a collection in a single operation."
            ),
            mcq(
                "FORALL improves performance by:",
                ["Using more memory", "Reducing context switches between PL/SQL and SQL engines", "Adding indexes", "Compressing data"],
                1,
                "FORALL sends all DML operations in a single batch, minimising context switches."
            ),
            mcq(
                "SAVE EXCEPTIONS in FORALL allows:",
                ["Rolling back all changes", "Continuing past errors and reporting them later", "Skipping the FORALL entirely", "Logging to a file"],
                1,
                "SAVE EXCEPTIONS allows FORALL to continue processing even when some rows cause errors."
            ),
            mcq(
                "Why should you use LIMIT with BULK COLLECT?",
                ["To speed up the query", "To control memory usage for large result sets", "To add a WHERE clause", "To sort the results"],
                1,
                "LIMIT restricts the number of rows fetched at once, preventing excessive memory consumption."
            ),
        ],

        questions: [
            qa(
                "Explain the three types of records in PL/SQL with examples.",
                "A table-based record uses %ROWTYPE to automatically match a table's structure. For example, v_student Student%ROWTYPE creates a record with fields for every column in the Student table, and you can populate it with SELECT * INTO v_student. A cursor-based record uses %ROWTYPE with a cursor. For example, if CURSOR c IS SELECT Name, Marks FROM Student, then v_rec c%ROWTYPE creates a record with just Name and Marks fields. A user-defined record is declared manually using the RECORD keyword: TYPE t_result IS RECORD (name VARCHAR2(50), grade VARCHAR2(5)). This allows you to define custom groupings of fields that may not correspond to any table.",
                5
            ),
            qa(
                "What are BULK COLLECT and FORALL? How do they improve performance?",
                "BULK COLLECT is a clause used with SELECT or FETCH to retrieve multiple rows into a collection in a single operation instead of fetching one row at a time. FORALL sends multiple INSERT, UPDATE or DELETE operations to the SQL engine in a single batch instead of executing them one by one in a loop. They improve performance dramatically by reducing context switches between the PL/SQL engine and the SQL engine. In a regular FOR loop, each iteration causes a context switch, so processing 10,000 rows means 10,000 switches. With BULK COLLECT and FORALL, the entire batch is processed with just one context switch, making it 10 to 100 times faster.",
                5
            ),
            qa(
                "Write a PL/SQL block using BULK COLLECT and FORALL to give 5 bonus marks to all MSc IT students.",
                "DECLARE TYPE t_rolls IS TABLE OF VARCHAR2(10); v_rolls t_rolls; BEGIN SELECT Roll_No BULK COLLECT INTO v_rolls FROM Student WHERE Course = 'MSc IT'; FORALL i IN 1..v_rolls.COUNT UPDATE Student SET Marks = Marks + 5 WHERE Roll_No = v_rolls(i); DBMS_OUTPUT.PUT_LINE(SQL%ROWCOUNT || ' students updated'); COMMIT; END; / This block first uses BULK COLLECT to fetch all MSc IT student roll numbers into a collection in one operation. Then FORALL sends all UPDATE statements to the SQL engine in a single batch, adding 5 marks to each student. SQL%ROWCOUNT reports the total number of rows updated.",
                5
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit4Topics = [
    packagesInPLSQL,
    advancedExceptionHandling,
    collectionsInPLSQL,
    dynamicSQL,
    recordsAndBulkOps,
];