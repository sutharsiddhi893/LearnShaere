/* =========================================================
   BCA • SEM 4 • DBMS - II
   UNIT 2 — Triggers, Transactions, Normalization and Advanced Topics
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
   TOPIC 1 — Triggers
========================================================= */

const triggers = createTopic(
    "triggers",
    "Triggers",

    [
        definition(
            "Trigger",
            "A trigger is a stored PL/SQL block that automatically executes (fires) in response to specific database events such as INSERT, UPDATE, DELETE or DDL operations."
        ),

        heading("Uses of Triggers"),

        list([
            "Enforce complex business rules.",
            "Maintain audit trails (logging changes).",
            "Automatically update related tables.",
            "Enforce referential integrity.",
            "Validate data before insertion.",
            "Generate derived column values.",
            "Prevent invalid operations.",
        ]),

        heading("Types of Triggers"),

        table(
            ["Classification", "Types"],
            [
                ["By Timing", "BEFORE, AFTER, INSTEAD OF"],
                ["By Event", "INSERT, UPDATE, DELETE"],
                ["By Level", "ROW-level, STATEMENT-level"],
                ["By Type", "DML, DDL, System triggers"],
            ]
        ),

        heading("Trigger Syntax"),

        code(
            `CREATE OR REPLACE TRIGGER trigger_name
{BEFORE | AFTER | INSTEAD OF} {INSERT | UPDATE | DELETE}
ON table_name
[FOR EACH ROW]
[WHEN (condition)]
DECLARE
    -- Variable declarations
BEGIN
    -- Trigger body
END;
/`,
            "sql",
            "Trigger syntax"
        ),

        heading("Simple Trigger Example"),

        code(
            `CREATE OR REPLACE TRIGGER emp_before_insert
BEFORE INSERT ON employees
FOR EACH ROW
BEGIN
    :NEW.created_date := SYSDATE;
    :NEW.created_by := USER;
END;
/`,
            "sql",
            "BEFORE INSERT trigger"
        ),

        heading(":NEW and :OLD Qualifiers"),

        table(
            ["Qualifier", "Description", "Available For"],
            [
                [":NEW", "New value being inserted/updated", "INSERT, UPDATE"],
                [":OLD", "Old value being deleted/updated", "UPDATE, DELETE"],
            ]
        ),

        heading("Audit Log Trigger"),

        code(
            `-- Create audit table
CREATE TABLE emp_audit (
    audit_id NUMBER PRIMARY KEY,
    emp_id NUMBER,
    old_salary NUMBER,
    new_salary NUMBER,
    changed_by VARCHAR2(30),
    changed_date DATE
);

-- Create trigger
CREATE OR REPLACE TRIGGER audit_salary_change
AFTER UPDATE OF salary ON employees
FOR EACH ROW
BEGIN
    INSERT INTO emp_audit VALUES(
        audit_seq.NEXTVAL,
        :OLD.id,
        :OLD.salary,
        :NEW.salary,
        USER,
        SYSDATE
    );
END;
/`,
            "sql",
            "Audit trigger example"
        ),

        heading("Row-Level vs Statement-Level"),

        table(
            ["Basis", "Row-Level", "Statement-Level"],
            [
                ["Keyword", "FOR EACH ROW", "(without FOR EACH ROW)"],
                ["Execution", "Once per affected row", "Once per statement"],
                [":NEW/:OLD", "Available", "Not available"],
                ["Use", "Row-specific logic", "Statement-level logic"],
            ]
        ),

        heading("Statement-Level Trigger"),

        code(
            `CREATE OR REPLACE TRIGGER log_deletion
AFTER DELETE ON employees
BEGIN
    INSERT INTO log_table VALUES(
        'Deletion occurred at ' || SYSDATE,
        USER
    );
END;
/`,
            "sql",
            "Statement-level trigger"
        ),

        heading("Conditional Predicates"),

        text(
            "In a single trigger for multiple events, you can check which event fired using INSERTING, UPDATING and DELETING predicates."
        ),

        code(
            `CREATE OR REPLACE TRIGGER emp_all_events
BEFORE INSERT OR UPDATE OR DELETE ON employees
FOR EACH ROW
BEGIN
    IF INSERTING THEN
        DBMS_OUTPUT.PUT_LINE('Inserting: ' || :NEW.name);
    ELSIF UPDATING THEN
        DBMS_OUTPUT.PUT_LINE('Updating: ' || :OLD.name);
    ELSIF DELETING THEN
        DBMS_OUTPUT.PUT_LINE('Deleting: ' || :OLD.name);
    END IF;
END;
/`,
            "sql",
            "Multi-event trigger"
        ),

        heading("INSTEAD OF Trigger"),

        text(
            "INSTEAD OF triggers are defined on views (usually complex views that cannot be directly updated) to execute custom logic instead of the DML."
        ),

        code(
            `CREATE OR REPLACE TRIGGER emp_view_insert
INSTEAD OF INSERT ON emp_view
FOR EACH ROW
BEGIN
    INSERT INTO employees(id, name) VALUES(:NEW.id, :NEW.name);
    INSERT INTO salaries(emp_id, amount) VALUES(:NEW.id, :NEW.salary);
END;
/`,
            "sql",
            "INSTEAD OF trigger"
        ),

        heading("Managing Triggers"),

        code(
            `-- Disable trigger
ALTER TRIGGER emp_before_insert DISABLE;

-- Enable trigger
ALTER TRIGGER emp_before_insert ENABLE;

-- Drop trigger
DROP TRIGGER emp_before_insert;

-- List triggers
SELECT trigger_name, table_name, status 
FROM user_triggers;`,
            "sql",
            "Trigger management"
        ),

        heading("Advantages and Disadvantages"),

        table(
            ["Advantages", "Disadvantages"],
            [
                ["Automatic enforcement of rules", "Hidden logic — hard to debug"],
                ["Centralized business logic", "Performance overhead"],
                ["Ensures data integrity", "Complex maintenance"],
                ["Audit and logging support", "Can create cascading effects"],
            ]
        ),

        note(
            "Use triggers carefully — too many triggers or complex trigger chains can lead to performance issues and difficult-to-debug applications. Prefer application-level logic for business rules when possible.",
            "warning",
            "Trigger Usage"
        ),

        keyPoints([
            "Triggers automatically execute on database events.",
            "Timing: BEFORE, AFTER, INSTEAD OF.",
            "Events: INSERT, UPDATE, DELETE.",
            ":NEW and :OLD access row values.",
            "Useful for auditing, validation and enforcement.",
        ]),
    ],

    {
        summary:
            "Learn database triggers — automatic PL/SQL blocks that fire on database events for enforcement, auditing and automation.",
        minutes: 13,
        tags: ["trigger", "plsql", "audit", "important"],

        mcqs: [
            mcq(
                "Triggers are executed:",
                ["Manually", "Automatically", "By schedule", "By user"],
                1,
                "Triggers execute automatically on events."
            ),
            mcq(
                ":NEW is available in which operations?",
                ["INSERT only", "DELETE only", "INSERT and UPDATE", "All"],
                2,
                ":NEW is available for INSERT and UPDATE."
            ),
            mcq(
                "FOR EACH ROW makes trigger:",
                ["Statement-level", "Row-level", "Package", "View"],
                1,
                "FOR EACH ROW creates row-level trigger."
            ),
            mcq(
                "INSTEAD OF triggers are used on:",
                ["Tables", "Views", "Indexes", "Sequences"],
                1,
                "INSTEAD OF triggers are for views."
            ),
        ],

        questions: [
            qa(
                "What is a trigger? Explain its types.",
                "A trigger is a stored PL/SQL block that automatically executes (fires) in response to specific database events like INSERT, UPDATE, DELETE or DDL operations. Triggers are classified in multiple ways: By timing — BEFORE (fires before event), AFTER (fires after event), INSTEAD OF (replaces event, used on views); By event — INSERT, UPDATE, DELETE; By level — ROW-level (executes for each affected row, uses FOR EACH ROW clause) or STATEMENT-level (executes once per statement); By type — DML triggers, DDL triggers and System triggers. Triggers are used for enforcing business rules, maintaining audit logs, ensuring data integrity and automating derived values.",
                4
            ),
            qa(
                "Explain :NEW and :OLD qualifiers with an audit trigger example.",
                ":NEW and :OLD are pseudo-record qualifiers used in row-level triggers to access column values. :NEW refers to the new value being inserted or updated (available for INSERT and UPDATE), while :OLD refers to the old value being updated or deleted (available for UPDATE and DELETE). Example: CREATE OR REPLACE TRIGGER audit_salary AFTER UPDATE OF salary ON employees FOR EACH ROW BEGIN INSERT INTO emp_audit VALUES(audit_seq.NEXTVAL, :OLD.id, :OLD.salary, :NEW.salary, USER, SYSDATE); END; This trigger logs every salary change with the old salary, new salary, user who made the change, and timestamp, providing a complete audit trail.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — Transactions and Concurrency Control
========================================================= */

const transactionsConcurrency = createTopic(
    "transactions-and-concurrency-control",
    "Transactions and Concurrency Control",

    [
        definition(
            "Transaction",
            "A transaction is a logical unit of work consisting of one or more SQL statements that must be executed as a single unit — either all succeed or all fail."
        ),

        heading("ACID Properties"),

        text(
            "Every transaction must follow the ACID properties to ensure database reliability."
        ),

        table(
            ["Property", "Description"],
            [
                ["Atomicity", "All or nothing — complete or rollback"],
                ["Consistency", "DB moves from one valid state to another"],
                ["Isolation", "Transactions don't interfere with each other"],
                ["Durability", "Committed changes are permanent"],
            ]
        ),

        heading("Transaction Control Language (TCL)"),

        table(
            ["Command", "Purpose"],
            [
                ["COMMIT", "Save changes permanently"],
                ["ROLLBACK", "Undo changes"],
                ["SAVEPOINT", "Set intermediate point"],
                ["ROLLBACK TO SAVEPOINT", "Rollback to a savepoint"],
                ["SET TRANSACTION", "Configure transaction properties"],
            ]
        ),

        heading("Transaction Example"),

        code(
            `BEGIN
    -- Start of transaction
    UPDATE accounts SET balance = balance - 1000 WHERE id = 1;
    UPDATE accounts SET balance = balance + 1000 WHERE id = 2;
    
    -- Check for issues
    IF SQL%ROWCOUNT = 0 THEN
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE('Transaction failed');
    ELSE
        COMMIT;
        DBMS_OUTPUT.PUT_LINE('Money transferred successfully');
    END IF;

EXCEPTION
    WHEN OTHERS THEN
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE('Error: ' || SQLERRM);
END;
/`,
            "sql",
            "Bank transfer transaction"
        ),

        heading("Savepoints"),

        code(
            `BEGIN
    INSERT INTO orders VALUES(1, 'Book');
    SAVEPOINT sp1;
    
    INSERT INTO orders VALUES(2, 'Pen');
    SAVEPOINT sp2;
    
    INSERT INTO orders VALUES(3, 'Bag');
    
    -- Rollback to sp1 (removes orders 2 and 3)
    ROLLBACK TO sp1;
    
    COMMIT;
END;
/`,
            "sql",
            "Savepoint example"
        ),

        heading("Concurrency Problems"),

        table(
            ["Problem", "Description"],
            [
                ["Dirty Read", "Reading uncommitted data"],
                ["Non-Repeatable Read", "Same row returns different values"],
                ["Phantom Read", "New rows appear in repeated query"],
                ["Lost Update", "One update overwrites another"],
            ]
        ),

        heading("Isolation Levels"),

        table(
            ["Level", "Prevents"],
            [
                ["READ UNCOMMITTED", "None"],
                ["READ COMMITTED", "Dirty read"],
                ["REPEATABLE READ", "Dirty + Non-repeatable read"],
                ["SERIALIZABLE", "All concurrency problems"],
            ]
        ),

        heading("Setting Isolation Level"),

        code(
            `SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;

-- Or
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;`,
            "sql",
            "Isolation level"
        ),

        heading("Locking"),

        definition(
            "Lock",
            "A lock is a mechanism used by the DBMS to control concurrent access to database objects, preventing conflicts between transactions."
        ),

        heading("Types of Locks"),

        table(
            ["Lock Type", "Description"],
            [
                ["Shared Lock (S)", "Multiple reads allowed; no writes"],
                ["Exclusive Lock (X)", "Only one transaction; no other access"],
                ["Row-level Lock", "Locks specific rows"],
                ["Table-level Lock", "Locks entire table"],
                ["Page-level Lock", "Locks memory pages"],
            ]
        ),

        heading("Lock Compatibility"),

        table(
            ["", "Shared", "Exclusive"],
            [
                ["Shared", "✓ Compatible", "✗ Not compatible"],
                ["Exclusive", "✗ Not compatible", "✗ Not compatible"],
            ]
        ),

        heading("Deadlock"),

        definition(
            "Deadlock",
            "A deadlock is a situation where two or more transactions are waiting for each other to release locks, causing all of them to wait indefinitely."
        ),

        heading("Deadlock Prevention"),

        list([
            "Access resources in the same order in all transactions.",
            "Use timeouts on locks.",
            "Keep transactions short.",
            "Use lower isolation levels when possible.",
            "Use SELECT FOR UPDATE with NOWAIT.",
            "Implement deadlock detection and rollback.",
        ]),

        heading("Explicit Locking"),

        code(
            `-- Row-level lock
SELECT * FROM employees
WHERE id = 101
FOR UPDATE;

-- Prevent waiting
SELECT * FROM employees
WHERE id = 101
FOR UPDATE NOWAIT;

-- Wait for specific time
SELECT * FROM employees
WHERE id = 101
FOR UPDATE WAIT 5;

-- Table lock
LOCK TABLE employees IN EXCLUSIVE MODE;`,
            "sql",
            "Explicit locking"
        ),

        heading("Two-Phase Locking (2PL)"),

        definition(
            "2PL",
            "Two-Phase Locking is a concurrency control protocol where transactions acquire all locks in the growing phase and release them in the shrinking phase, without acquiring new locks after any release."
        ),

        steps([
            "Growing Phase — Transaction acquires locks but does not release any.",
            "Shrinking Phase — Transaction releases locks but does not acquire new ones.",
            "Once a transaction releases a lock, it enters the shrinking phase.",
            "This ensures serializability of transactions.",
        ]),

        note(
            "The trade-off between concurrency and consistency is fundamental in databases. Higher isolation gives more consistency but reduces concurrency and performance.",
            "tip",
            "Concurrency Trade-off"
        ),

        keyPoints([
            "Transaction is a unit of work following ACID properties.",
            "COMMIT saves changes; ROLLBACK undoes them.",
            "Savepoints allow partial rollback.",
            "Isolation levels prevent concurrency problems.",
            "Locks control concurrent access to data.",
        ]),
    ],

    {
        summary:
            "Learn transactions, ACID properties, concurrency control, isolation levels, locking and deadlock handling.",
        minutes: 14,
        tags: ["transaction", "acid", "concurrency", "locking", "important"],

        mcqs: [
            mcq(
                "Which is NOT an ACID property?",
                ["Atomicity", "Consistency", "Isolation", "Efficiency"],
                3,
                "ACID stands for Atomicity, Consistency, Isolation, Durability."
            ),
            mcq(
                "COMMIT does what?",
                ["Undoes changes", "Saves changes permanently", "Creates lock", "Deletes rows"],
                1,
                "COMMIT saves changes permanently."
            ),
            mcq(
                "Highest isolation level is:",
                ["READ UNCOMMITTED", "READ COMMITTED", "REPEATABLE READ", "SERIALIZABLE"],
                3,
                "SERIALIZABLE is the highest isolation level."
            ),
            mcq(
                "Deadlock is:",
                ["Fast execution", "Two transactions waiting for each other", "A type of lock", "An error"],
                1,
                "Deadlock occurs when transactions wait for each other."
            ),
        ],

        questions: [
            qa(
                "Explain ACID properties of transactions.",
                "ACID properties ensure database reliability during transactions. (1) Atomicity — a transaction is 'all or nothing'; either all operations succeed and commit, or all fail and rollback, leaving the database unchanged. (2) Consistency — the database must move from one valid state to another; all integrity constraints must be maintained before and after transaction. (3) Isolation — concurrent transactions should not interfere with each other; each transaction should appear to execute in isolation. (4) Durability — once a transaction is committed, its changes are permanent and survive system failures. Together, these properties guarantee that transactions are reliable even under concurrent access and failures.",
                4
            ),
            qa(
                "What are concurrency problems? Explain isolation levels.",
                "Concurrency problems occur when multiple transactions access the same data simultaneously. Common problems are: Dirty Read (reading uncommitted data from another transaction), Non-Repeatable Read (same query returns different values within a transaction), Phantom Read (new rows appear in repeated queries) and Lost Update (one transaction's update overwrites another's). Isolation levels control how transactions are isolated: READ UNCOMMITTED (no protection), READ COMMITTED (prevents dirty read), REPEATABLE READ (prevents dirty and non-repeatable reads) and SERIALIZABLE (prevents all problems, highest isolation). Higher isolation reduces concurrency, so choose based on application needs.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — Normalization
========================================================= */

const normalization = createTopic(
    "normalization",
    "Normalization",

    [
        definition(
            "Normalization",
            "Normalization is the process of organizing data in a database to reduce redundancy, avoid anomalies and improve data integrity by breaking large tables into smaller, related ones."
        ),

        heading("Objectives of Normalization"),

        list([
            "Eliminate data redundancy.",
            "Prevent insertion, update and deletion anomalies.",
            "Ensure data integrity and consistency.",
            "Optimize storage.",
            "Simplify database maintenance.",
        ]),

        heading("Anomalies in Database"),

        table(
            ["Anomaly", "Description"],
            [
                ["Insertion", "Cannot insert data without other data"],
                ["Update", "Same data updated in multiple places"],
                ["Deletion", "Deleting data removes other important data"],
            ]
        ),

        heading("Functional Dependency"),

        definition(
            "Functional Dependency",
            "A functional dependency X → Y means that the value of Y is determined by the value of X. If two rows have the same X value, they must have the same Y value."
        ),

        text(
            "Example: emp_id → emp_name means knowing employee ID uniquely determines employee name."
        ),

        heading("Types of Functional Dependencies"),

        list([
            "Trivial — Y is subset of X (e.g., {A,B} → A).",
            "Non-Trivial — Y is not subset of X.",
            "Partial — Non-key attribute depends on part of composite key.",
            "Transitive — X→Y and Y→Z, so X→Z.",
            "Fully Functional — Depends on entire composite key.",
        ]),

        heading("Normal Forms"),

        table(
            ["Normal Form", "Rule"],
            [
                ["1NF", "Atomic values, no repeating groups"],
                ["2NF", "1NF + no partial dependency"],
                ["3NF", "2NF + no transitive dependency"],
                ["BCNF", "3NF + every determinant is candidate key"],
                ["4NF", "BCNF + no multi-valued dependency"],
                ["5NF", "4NF + no join dependency"],
            ]
        ),

        heading("First Normal Form (1NF)"),

        text(
            "A table is in 1NF if all attributes contain only atomic (indivisible) values and there are no repeating groups."
        ),

        text("Unnormalized table:"),

        table(
            ["StudentID", "Name", "Courses"],
            [
                ["1", "Amit", "Math, Science"],
                ["2", "Riya", "English, History"],
            ]
        ),

        text("After 1NF:"),

        table(
            ["StudentID", "Name", "Course"],
            [
                ["1", "Amit", "Math"],
                ["1", "Amit", "Science"],
                ["2", "Riya", "English"],
                ["2", "Riya", "History"],
            ]
        ),

        heading("Second Normal Form (2NF)"),

        text(
            "A table is in 2NF if it is in 1NF and every non-key attribute is fully dependent on the entire primary key (no partial dependency)."
        ),

        text("1NF table with partial dependency (composite key: StudentID + CourseID):"),

        table(
            ["StudentID", "CourseID", "StudentName", "CourseName", "Marks"],
            [
                ["1", "C1", "Amit", "Math", "80"],
                ["1", "C2", "Amit", "Science", "75"],
            ]
        ),

        text("After 2NF — split into three tables:"),

        list([
            "Students(StudentID, StudentName)",
            "Courses(CourseID, CourseName)",
            "Enrollment(StudentID, CourseID, Marks)",
        ]),

        heading("Third Normal Form (3NF)"),

        text(
            "A table is in 3NF if it is in 2NF and has no transitive dependency (non-key attribute should not depend on another non-key attribute)."
        ),

        text("2NF table with transitive dependency:"),

        table(
            ["EmpID", "Name", "DeptID", "DeptName"],
            [
                ["1", "Amit", "D1", "IT"],
                ["2", "Riya", "D2", "HR"],
            ]
        ),

        text("EmpID → DeptID → DeptName (transitive)"),

        text("After 3NF:"),

        list([
            "Employees(EmpID, Name, DeptID)",
            "Departments(DeptID, DeptName)",
        ]),

        heading("Boyce-Codd Normal Form (BCNF)"),

        text(
            "A table is in BCNF if for every functional dependency X → Y, X must be a super key. BCNF is stricter than 3NF."
        ),

        heading("Fourth Normal Form (4NF)"),

        text(
            "A table is in 4NF if it is in BCNF and has no multi-valued dependencies. A multi-valued dependency exists when one attribute determines multiple values of another attribute independently."
        ),

        heading("Fifth Normal Form (5NF)"),

        text(
            "A table is in 5NF if it is in 4NF and cannot be decomposed further without losing information (no join dependencies)."
        ),

        heading("Denormalization"),

        definition(
            "Denormalization",
            "Denormalization is the process of intentionally introducing redundancy in a normalized database to improve read performance, often used in data warehousing and reporting systems."
        ),

        heading("When to Denormalize"),

        list([
            "For read-heavy applications.",
            "In data warehousing (OLAP systems).",
            "For reporting and analytics.",
            "When performance is critical.",
            "When joins become too expensive.",
        ]),

        heading("Normalization vs Denormalization"),

        table(
            ["Basis", "Normalization", "Denormalization"],
            [
                ["Goal", "Reduce redundancy", "Improve read speed"],
                ["Redundancy", "Minimized", "Introduced"],
                ["Storage", "Less", "More"],
                ["Best for", "OLTP systems", "OLAP systems"],
                ["Joins", "Many", "Fewer"],
            ]
        ),

        note(
            "Most business applications need 3NF or BCNF. Higher normal forms (4NF, 5NF) are rarely needed in practice. Balance normalization with performance requirements.",
            "tip",
            "Practical Rule"
        ),

        keyPoints([
            "Normalization reduces redundancy and anomalies.",
            "1NF requires atomic values.",
            "2NF eliminates partial dependencies.",
            "3NF removes transitive dependencies.",
            "BCNF is stricter version of 3NF.",
            "Denormalization improves read performance.",
        ]),
    ],

    {
        summary:
            "Learn database normalization, normal forms (1NF to BCNF), functional dependencies and denormalization concepts.",
        minutes: 14,
        tags: ["normalization", "1nf", "2nf", "3nf", "bcnf", "important"],

        mcqs: [
            mcq(
                "1NF requires:",
                ["Atomic values", "No transitive dependency", "No partial dependency", "Super key"],
                0,
                "1NF requires atomic (indivisible) values."
            ),
            mcq(
                "2NF eliminates:",
                ["Multivalued dependency", "Partial dependency", "Transitive dependency", "Redundancy"],
                1,
                "2NF removes partial dependencies."
            ),
            mcq(
                "3NF eliminates:",
                ["Partial dependency", "Transitive dependency", "Multi-valued dependency", "Join dependency"],
                1,
                "3NF removes transitive dependencies."
            ),
            mcq(
                "BCNF requires that every determinant be:",
                ["Primary key", "Foreign key", "Super key", "Unique key"],
                2,
                "In BCNF, every determinant must be a super key."
            ),
        ],

        questions: [
            qa(
                "What is normalization? Explain 1NF, 2NF and 3NF with examples.",
                "Normalization is the process of organizing data in a database to reduce redundancy and avoid anomalies. First Normal Form (1NF): Every attribute must have atomic (indivisible) values with no repeating groups. Example: separating 'Math, Science' into individual rows. Second Normal Form (2NF): Must be in 1NF and every non-key attribute must fully depend on the entire primary key (no partial dependency). Example: splitting a table with composite key (StudentID, CourseID) into Students, Courses and Enrollment tables. Third Normal Form (3NF): Must be in 2NF and have no transitive dependencies (non-key should not depend on another non-key). Example: splitting Employees(EmpID, Name, DeptID, DeptName) into Employees(EmpID, Name, DeptID) and Departments(DeptID, DeptName) since DeptName transitively depends on EmpID through DeptID.",
                4
            ),
            qa(
                "Differentiate between normalization and denormalization.",
                "Normalization is the process of organizing data to reduce redundancy by dividing large tables into smaller related tables. It follows normal forms (1NF, 2NF, 3NF, BCNF) and eliminates insertion, update and deletion anomalies. It is best for OLTP systems that need frequent updates and inserts. Denormalization is the opposite process — intentionally introducing redundancy back into tables to improve read performance. It reduces the number of joins required and is best for OLAP systems, data warehouses, reporting and analytics where fast reads are critical. Normalization minimizes storage but requires more joins, while denormalization uses more storage but provides faster query performance. Real applications often use a balance of both depending on requirements.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — Backup, Recovery and Security
========================================================= */

const backupSecurity = createTopic(
    "backup-recovery-security",
    "Backup, Recovery and Security",

    [
        heading("Database Backup"),

        definition(
            "Backup",
            "Backup is the process of creating copies of database data so that it can be restored in case of data loss due to hardware failure, corruption, accidental deletion or disaster."
        ),

        heading("Types of Backup"),

        table(
            ["Type", "Description"],
            [
                ["Full Backup", "Complete backup of entire database"],
                ["Incremental Backup", "Only changes since last backup"],
                ["Differential Backup", "Changes since last full backup"],
                ["Cold Backup", "Database shut down during backup"],
                ["Hot Backup", "Database running during backup"],
                ["Logical Backup", "Export data using tools like exp/expdp"],
                ["Physical Backup", "Copy actual data files"],
            ]
        ),

        heading("Oracle Export/Import"),

        code(
            `-- Export a full database
expdp system/password FULL=Y DIRECTORY=dpump 
DUMPFILE=full.dmp LOGFILE=full.log

-- Export specific schema
expdp hr/hr SCHEMAS=hr DIRECTORY=dpump 
DUMPFILE=hr.dmp

-- Import
impdp system/password DIRECTORY=dpump 
DUMPFILE=full.dmp FULL=Y`,
            "bash",
            "Data pump export/import"
        ),

        heading("Recovery"),

        definition(
            "Recovery",
            "Recovery is the process of restoring the database to a consistent state after a failure using backup files and transaction logs."
        ),

        heading("Types of Failures"),

        table(
            ["Failure Type", "Description"],
            [
                ["Transaction Failure", "Transaction cannot complete"],
                ["System Failure", "OS or DBMS crash"],
                ["Media Failure", "Disk or storage failure"],
                ["Network Failure", "Loss of network connection"],
                ["User Error", "Accidental data deletion"],
            ]
        ),

        heading("Recovery Techniques"),

        list([
            "Log-based Recovery — Use transaction log to redo/undo.",
            "Shadow Paging — Maintain shadow copy of database.",
            "Checkpoint — Periodic snapshot for faster recovery.",
            "Rollback — Undo incomplete transactions.",
            "Roll Forward — Reapply committed transactions after restore.",
        ]),

        heading("Redo and Undo Logs"),

        table(
            ["Log Type", "Purpose"],
            [
                ["Redo Log", "Reapply committed transactions"],
                ["Undo Log", "Rollback uncommitted transactions"],
                ["Archive Log", "Historical log for point-in-time recovery"],
            ]
        ),

        heading("Database Security"),

        definition(
            "Database Security",
            "Database security involves measures to protect data from unauthorized access, modification, disclosure or destruction while ensuring availability to authorized users."
        ),

        heading("Security Threats"),

        list([
            "Unauthorized access to sensitive data.",
            "SQL injection attacks.",
            "Data theft and leakage.",
            "Denial of Service (DoS).",
            "Insider threats.",
            "Weak authentication.",
            "Malware and ransomware.",
        ]),

        heading("Security Measures"),

        table(
            ["Measure", "Description"],
            [
                ["Authentication", "Verify user identity (username/password)"],
                ["Authorization", "Grant appropriate access privileges"],
                ["Encryption", "Encode data at rest and in transit"],
                ["Auditing", "Track user activity"],
                ["Views", "Restrict data visibility"],
                ["Firewalls", "Control network access"],
                ["Backup", "Recovery from attacks"],
            ]
        ),

        heading("Data Control Language (DCL)"),

        heading("GRANT — Give Privileges"),

        code(
            `-- Grant specific privileges
GRANT SELECT, INSERT ON employees TO user1;

-- Grant all privileges
GRANT ALL ON employees TO user1;

-- Grant with option to grant others
GRANT SELECT ON employees TO user1 WITH GRANT OPTION;

-- Grant system privilege
GRANT CREATE TABLE TO user1;`,
            "sql",
            "GRANT statements"
        ),

        heading("REVOKE — Remove Privileges"),

        code(
            `-- Revoke specific privilege
REVOKE INSERT ON employees FROM user1;

-- Revoke all
REVOKE ALL ON employees FROM user1;`,
            "sql",
            "REVOKE statements"
        ),

        heading("Types of Privileges"),

        table(
            ["Type", "Examples"],
            [
                ["System Privilege", "CREATE TABLE, CREATE USER, CREATE VIEW"],
                ["Object Privilege", "SELECT, INSERT, UPDATE, DELETE, EXECUTE"],
                ["Role", "Group of privileges given to users"],
            ]
        ),

        heading("Roles"),

        code(
            `-- Create role
CREATE ROLE hr_manager;

-- Grant privileges to role
GRANT SELECT, INSERT, UPDATE ON employees TO hr_manager;

-- Grant role to user
GRANT hr_manager TO amit;

-- Revoke role
REVOKE hr_manager FROM amit;

-- Drop role
DROP ROLE hr_manager;`,
            "sql",
            "Role management"
        ),

        heading("SQL Injection Prevention"),

        list([
            "Use parameterized queries / prepared statements.",
            "Never concatenate user input into SQL.",
            "Validate and sanitize all inputs.",
            "Use stored procedures.",
            "Apply principle of least privilege.",
            "Use ORMs safely.",
            "Escape special characters.",
        ]),

        heading("Encryption"),

        code(
            `-- Encrypt column data (Oracle TDE example)
ALTER TABLE employees
MODIFY (salary NUMBER ENCRYPT);

-- Hashing passwords
UPDATE users
SET password = DBMS_CRYPTO.HASH(
    UTL_RAW.CAST_TO_RAW('password'),
    DBMS_CRYPTO.HASH_SH256
);`,
            "sql",
            "Encryption examples"
        ),

        heading("Auditing"),

        code(
            `-- Enable auditing
AUDIT SELECT, INSERT, UPDATE, DELETE 
ON employees 
BY ACCESS;

-- View audit logs
SELECT username, action_name, obj_name, timestamp
FROM dba_audit_trail;

-- Disable auditing
NOAUDIT ALL ON employees;`,
            "sql",
            "Auditing"
        ),

        note(
            "Never store passwords in plain text! Always use strong hashing algorithms like bcrypt, SHA-256 or Argon2 with salt.",
            "warning",
            "Security Best Practice"
        ),

        keyPoints([
            "Backups protect against data loss.",
            "Recovery restores database after failures.",
            "GRANT gives privileges; REVOKE removes them.",
            "Roles group privileges for easier management.",
            "Encryption protects data at rest and in transit.",
        ]),
    ],

    {
        summary:
            "Learn database backup, recovery techniques, security measures, GRANT/REVOKE and protection against threats.",
        minutes: 13,
        tags: ["backup", "recovery", "security", "grant", "revoke", "important"],

        mcqs: [
            mcq(
                "GRANT is used to:",
                ["Remove privileges", "Give privileges", "Create table", "Delete data"],
                1,
                "GRANT gives privileges to users."
            ),
            mcq(
                "Which backup captures only changes since last backup?",
                ["Full", "Incremental", "Differential", "Hot"],
                1,
                "Incremental backup captures changes since last backup."
            ),
            mcq(
                "A role is:",
                ["A user", "A group of privileges", "A table", "A view"],
                1,
                "A role is a group of privileges."
            ),
            mcq(
                "Which prevents SQL injection?",
                ["String concatenation", "Prepared statements", "Plain SQL", "GRANT ALL"],
                1,
                "Prepared statements prevent SQL injection."
            ),
        ],

        questions: [
            qa(
                "Explain types of database backup.",
                "Database backup is essential to protect against data loss. Types of backup include: (1) Full Backup — complete backup of the entire database at a point in time; comprehensive but time-consuming. (2) Incremental Backup — only captures changes since the last backup; fast but requires all previous backups for full restore. (3) Differential Backup — captures all changes since the last full backup; balances speed and completeness. (4) Cold Backup — database is shut down; simple but requires downtime. (5) Hot Backup — database remains running; no downtime but more complex. (6) Logical Backup — exports data using tools like expdp/impdp. (7) Physical Backup — copies actual data files. Most production systems combine full and incremental backups for optimal protection and recovery time.",
                4
            ),
            qa(
                "Explain GRANT, REVOKE and roles in database security.",
                "GRANT and REVOKE are Data Control Language (DCL) statements used to manage database security. GRANT gives specific privileges to users or roles. Example: GRANT SELECT, INSERT ON employees TO user1; gives user1 permission to read and insert. WITH GRANT OPTION allows the user to grant these privileges to others. REVOKE removes previously granted privileges. Example: REVOKE INSERT ON employees FROM user1; removes insert permission. Roles are groups of privileges that simplify security management. Instead of granting many privileges to each user, we create roles like hr_manager, grant privileges to the role, then assign the role to users. This makes security administration much easier for large systems with many users and privileges.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 5 — Advanced Database Concepts
========================================================= */

const advancedConcepts = createTopic(
    "advanced-database-concepts",
    "Advanced Database Concepts",

    [
        heading("Distributed Database"),

        definition(
            "Distributed Database",
            "A distributed database is a collection of multiple, logically interrelated databases distributed over a computer network, appearing to users as a single database."
        ),

        heading("Advantages"),

        list([
            "Improved performance through data locality.",
            "Increased availability and reliability.",
            "Scalability by adding more nodes.",
            "Modular growth.",
            "Better resource sharing.",
            "Fault tolerance.",
        ]),

        heading("Disadvantages"),

        list([
            "Complex design and management.",
            "Higher software cost.",
            "Security challenges.",
            "Difficult to maintain consistency.",
            "Complex query processing.",
        ]),

        heading("Data Warehousing"),

        definition(
            "Data Warehouse",
            "A data warehouse is a centralized repository that stores integrated data from multiple sources, optimized for analysis, reporting and decision-making."
        ),

        heading("OLTP vs OLAP"),

        table(
            ["Basis", "OLTP", "OLAP"],
            [
                ["Purpose", "Transaction processing", "Analysis and reporting"],
                ["Data", "Current, detailed", "Historical, summarized"],
                ["Users", "Many operators", "Few analysts"],
                ["Design", "Normalized", "Denormalized"],
                ["Queries", "Simple, frequent", "Complex, ad-hoc"],
                ["Example", "Bank transactions", "Sales analysis"],
            ]
        ),

        heading("Data Warehouse Architecture"),

        steps([
            "Data Sources — Various operational databases and external sources.",
            "ETL Process — Extract, Transform and Load data.",
            "Data Warehouse — Central repository.",
            "Data Marts — Subject-specific subsets.",
            "OLAP Server — For multidimensional analysis.",
            "Front-end Tools — Reporting and visualization.",
        ]),

        heading("Data Mining"),

        definition(
            "Data Mining",
            "Data mining is the process of discovering patterns, correlations, trends and useful information from large datasets using techniques from statistics, machine learning and database systems."
        ),

        heading("Data Mining Techniques"),

        table(
            ["Technique", "Description", "Example"],
            [
                ["Classification", "Assign data to categories", "Spam detection"],
                ["Clustering", "Group similar data", "Customer segmentation"],
                ["Association", "Find relationships", "Market basket analysis"],
                ["Regression", "Predict numerical values", "Sales forecasting"],
                ["Anomaly Detection", "Identify unusual data", "Fraud detection"],
            ]
        ),

        heading("NoSQL Databases"),

        definition(
            "NoSQL",
            "NoSQL (Not Only SQL) databases are non-relational databases designed for flexible schemas, horizontal scaling and handling large volumes of unstructured data."
        ),

        heading("Types of NoSQL Databases"),

        table(
            ["Type", "Description", "Examples"],
            [
                ["Document", "JSON-like documents", "MongoDB, CouchDB"],
                ["Key-Value", "Simple key-value pairs", "Redis, DynamoDB"],
                ["Column-Family", "Data in column families", "Cassandra, HBase"],
                ["Graph", "Nodes and relationships", "Neo4j, ArangoDB"],
            ]
        ),

        heading("SQL vs NoSQL"),

        table(
            ["Basis", "SQL (RDBMS)", "NoSQL"],
            [
                ["Structure", "Fixed schema, tables", "Flexible schema"],
                ["Scaling", "Vertical", "Horizontal"],
                ["Query", "SQL language", "Various query APIs"],
                ["ACID", "Fully supported", "Eventually consistent"],
                ["Best for", "Structured data", "Big data, real-time"],
                ["Examples", "Oracle, MySQL", "MongoDB, Redis"],
            ]
        ),

        heading("MongoDB Example"),

        code(
            `// Insert document
db.students.insertOne({
    name: "Amit",
    age: 20,
    course: "BCA",
    skills: ["JavaScript", "SQL"]
});

// Find documents
db.students.find({ course: "BCA" });

// Update
db.students.updateOne(
    { name: "Amit" },
    { $set: { age: 21 } }
);

// Delete
db.students.deleteOne({ name: "Amit" });`,
            "javascript",
            "MongoDB operations"
        ),

        heading("Big Data"),

        definition(
            "Big Data",
            "Big Data refers to extremely large and complex datasets that traditional data processing tools cannot handle efficiently. It is characterized by the 5 V's."
        ),

        heading("5 V's of Big Data"),

        table(
            ["V", "Meaning"],
            [
                ["Volume", "Huge amount of data"],
                ["Velocity", "Speed of data generation"],
                ["Variety", "Different types of data"],
                ["Veracity", "Uncertainty and quality"],
                ["Value", "Insights and benefits"],
            ]
        ),

        heading("Big Data Technologies"),

        list([
            "Hadoop — Distributed storage and processing.",
            "Spark — Fast in-memory processing.",
            "Hive — SQL-like queries on Hadoop.",
            "Kafka — Real-time data streaming.",
            "Cassandra — Distributed NoSQL database.",
            "MongoDB — Document database.",
            "Elasticsearch — Search and analytics.",
        ]),

        heading("Cloud Databases"),

        definition(
            "Cloud Database",
            "A cloud database is a database that runs on a cloud computing platform, providing scalability, availability and reduced management overhead."
        ),

        heading("Popular Cloud Databases"),

        table(
            ["Provider", "Services"],
            [
                ["Amazon AWS", "RDS, DynamoDB, Aurora, Redshift"],
                ["Google Cloud", "Cloud SQL, Firestore, BigQuery"],
                ["Microsoft Azure", "SQL Database, Cosmos DB"],
                ["MongoDB Atlas", "MongoDB as a service"],
                ["Oracle Cloud", "Autonomous Database"],
            ]
        ),

        heading("Database as a Service (DBaaS)"),

        list([
            "No hardware to manage.",
            "Automatic backups and updates.",
            "Scalability on demand.",
            "Pay-as-you-go pricing.",
            "High availability.",
            "Global distribution.",
            "Built-in security.",
        ]),

        heading("Object-Oriented Database"),

        definition(
            "OODB",
            "An Object-Oriented Database stores data as objects (like in object-oriented programming) with attributes and methods, supporting inheritance, encapsulation and polymorphism."
        ),

        heading("XML Databases"),

        text(
            "XML databases store, manage and query data in XML format. Native XML databases like BaseX and eXist-db use XML as the primary data model."
        ),

        heading("Modern Trends"),

        list([
            "NewSQL — Combines SQL with NoSQL scalability.",
            "In-memory databases (Redis, MemSQL).",
            "Blockchain databases (immutable ledgers).",
            "AI/ML integration in databases.",
            "Serverless databases.",
            "Time-series databases (InfluxDB).",
            "Multi-model databases.",
        ]),

        note(
            "The future of databases is polyglot persistence — using multiple database types in a single application, choosing the right database for each specific need.",
            "tip",
            "Modern Approach"
        ),

        keyPoints([
            "Distributed databases spread data across networks.",
            "Data warehouses store integrated data for analysis.",
            "OLTP handles transactions; OLAP handles analytics.",
            "NoSQL databases offer flexible schemas.",
            "Big Data is characterized by 5 V's.",
            "Cloud databases reduce management overhead.",
        ]),
    ],

    {
        summary:
            "Explore advanced concepts: distributed databases, data warehousing, NoSQL, Big Data, cloud databases and modern trends.",
        minutes: 14,
        tags: ["distributed", "nosql", "bigdata", "cloud", "warehouse", "important"],

        mcqs: [
            mcq(
                "OLAP is used for:",
                ["Transactions", "Analysis", "Backup", "Security"],
                1,
                "OLAP is for analytical processing."
            ),
            mcq(
                "MongoDB is which type of database?",
                ["Relational", "Document", "Graph", "Key-value"],
                1,
                "MongoDB is a document-based NoSQL database."
            ),
            mcq(
                "Which is NOT a V of Big Data?",
                ["Volume", "Velocity", "Verification", "Variety"],
                2,
                "The 5 V's are Volume, Velocity, Variety, Veracity, Value."
            ),
            mcq(
                "NoSQL databases typically scale:",
                ["Vertically", "Horizontally", "Not at all", "Only in cloud"],
                1,
                "NoSQL databases scale horizontally."
            ),
        ],

        questions: [
            qa(
                "Differentiate between OLTP and OLAP systems.",
                "OLTP (Online Transaction Processing) and OLAP (Online Analytical Processing) serve different purposes. OLTP handles day-to-day transactions like banking, e-commerce and inventory management. It has many concurrent users, uses normalized schemas, contains current detailed data, and executes simple, frequent queries with fast response times. OLAP is designed for analysis and decision-making. It has fewer users (analysts, executives), uses denormalized schemas (star/snowflake), contains historical summarized data, and executes complex ad-hoc queries. Example: OLTP records individual bank transactions; OLAP analyzes monthly transaction trends across regions. OLTP focuses on transaction speed, while OLAP focuses on query complexity and analytical depth.",
                4
            ),
            qa(
                "What is NoSQL? Explain its types with examples.",
                "NoSQL (Not Only SQL) refers to non-relational databases designed for flexible schemas, horizontal scaling and handling large volumes of unstructured or semi-structured data. It emerged to handle Big Data and modern web applications where traditional RDBMS fell short. Four main types are: (1) Document databases (MongoDB, CouchDB) — store data as JSON-like documents, ideal for content management and catalogs; (2) Key-Value stores (Redis, DynamoDB) — simple key-value pairs, perfect for caching and session storage; (3) Column-Family databases (Cassandra, HBase) — store data in column families, great for time-series and IoT; (4) Graph databases (Neo4j) — nodes and relationships, ideal for social networks and recommendation engines. NoSQL databases prioritize scalability and flexibility over strict ACID compliance.",
                4
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit2Topics = [
    triggers,
    transactionsConcurrency,
    normalization,
    backupSecurity,
    advancedConcepts,
];