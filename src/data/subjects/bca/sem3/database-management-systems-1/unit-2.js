/* =========================================================
   BCA � SEM 3 � Database Management Systems
   UNIT 2 � Normalization, Transactions, Concurrency and Security
========================================================= */

import {
  createTopic,
  heading,
  list,
  code,
  table,
  note,
  definition,
  keyPoints,
  mcq,
  qa,
} from "../../../../helpers";

/* =========================================================
   TOPIC 1 � Functional Dependencies and Normalization
========================================================= */

const normalization = createTopic(
    "normalization",
    "Functional Dependencies and Normalization",

    [
        definition(
            "Functional Dependency",
            "A relationship between two sets of attributes in a relation, in which the value of one set (the determinant) uniquely determines the value of the other set (the dependent). Notation: A ? B means A functionally determines B."
        ),

        heading("Examples of Functional Dependencies"),

        code(
            `roll  ?  name        -- roll number determines name
roll  ?  age          -- roll number determines age
dept_id ? dept_name   -- department id determines name
course_id ? title     -- course id determines title
roll, course_id ? grade  -- both determine grade
`,
            "text",
            "FD examples"
        ),

        heading("Properties of Functional Dependencies"),

    list([
        "Reflexive: if B is a subset of A, then A ? B.",
        "Augmentation: if A ? B, then A, C ? B, C.",
        "Transitive: if A ? B and B ? C, then A ? C.",
        "Union: if A ? B and A ? C, then A ? B, C.",
        "Decomposition: if A ? B, C, then A ? B and A ? C.",
    ]),


definition(
    "Normalisation",
    "A step by step process of reorganising the tables in a database to reduce redundancy, avoid anomalies and ensure data integrity, by applying a series of rules called normal forms."
),


list([
    "Insert anomaly: cannot insert a fact about one entity without inserting a fact about another.",
    "Update anomaly: the same data is stored in many rows, so updating one and missing others causes inconsistency.",
    "Delete anomaly: deleting a row removes some information that we wanted to keep.",
]),

    heading("First Normal Form (1NF)"),

list([
    "Each cell must contain a single atomic value.",
    "No repeating groups of columns such as phone1, phone2, phone3.",
    "Each row must be unique.",
    "Example: split a single column 'phones' into a separate row for each phone number.",
]),

    heading("Second Normal Form (2NF)"),

list([
    "Must be in 1NF.",
    "No partial dependency: no non key attribute should depend on only part of a composite primary key.",
    "Example: in a table with (roll, course_id, grade, name), name depends only on roll, not on the full key. So move name to a Student table.",
]),

    heading("Third Normal Form (3NF)"),

list([
    "Must be in 2NF.",
    "No transitive dependency: no non key attribute should depend on another non key attribute.",
    "Example: in a Student table, dept_id determines dept_name. So move dept_name to a Department table.",
]),

    note(
        "Boyce Codd Normal Form, or BCNF, is a stricter version of 3NF. It requires that every determinant must be a candidate key. In practice, 3NF is usually enough for most practical databases.",
        "tip",
        "BCNF"
    ),


table(
    ["Form", "Rule"],
    [
        ["1NF", "Atomic values, no repeating groups"],
        ["2NF", "1NF + no partial dependency"],
        ["3NF", "2NF + no transitive dependency"],
        ["BCNF", "3NF + every determinant is a candidate key"],
        ["4NF", "BCNF + no multi valued dependency"],
        ["5NF", "4NF + no join dependency"],
    ]
),


list([
    "Sometimes we deliberately denormalise for performance.",
    "Reading from many joined tables is slow for big queries.",
    "A controlled amount of redundancy is acceptable in data warehouses.",
    "The choice is always a trade off between redundancy and performance.",
]),

    keyPoints([
        "FD: A ? B means A uniquely determines B.",
        "Normalisation reduces redundancy and anomalies.",
        "1NF: atomic values. 2NF: no partial dependency. 3NF: no transitive dependency.",
        "BCNF is stricter than 3NF.",
        "Denormalisation is sometimes done for performance.",
        ]),
    ],

    {
        summary:
    "Master functional dependencies, the three main normal forms, BCNF, anomalies and the need for denormalisation.",
        minutes: 12,
            tags: ["normalization", "fd", "1nf", "3nf", "important"],

                mcqs: [
                    mcq(
                        "In A ? B, A is the:",
                        ["Dependent", "Determinant", "Key", "Attribute"],
                        1,
                        "A is the determinant; it determines the value of B."
                    ),
                    mcq(
                        "1NF requires:",
                        ["No partial dependency", "Atomic values", "No transitive dependency", "No multi valued"],
                        1,
                        "1NF requires that every cell contain a single atomic value."
                    ),
                    mcq(
                        "2NF eliminates:",
                        ["Atomic values", "Partial dependency", "Transitive dependency", "Multi valued"],
                        1,
                        "2NF removes partial dependency on a composite key."
                    ),
                    mcq(
                        "3NF eliminates:",
                        ["Partial dependency", "Transitive dependency", "Multi valued", "Atomic"],
                        1,
                        "3NF removes transitive dependency through non key attributes."
                    ),
                    mcq(
                        "Insert anomaly means:",
                        ["Cannot delete a row", "Cannot insert without extra data", "Cannot update", "No primary key"],
                        1,
                        "Insert anomaly is when inserting requires unrelated data."
                    ),
                    mcq(
                        "BCNF stands for:",
                        ["Basic Codd Normal Form", "Boyce Codd Normal Form", "Binary Codd Normal Form", "Best Codd Normal Form"],
                        1,
                        "BCNF is Boyce Codd Normal Form, named after Raymond Boyce and Edgar Codd."
                    ),
                ],

                    questions: [
                        qa(
                            "Explain the concept of functional dependency with examples.",
                            "A functional dependency, or FD, is a constraint between two sets of attributes in a relation. It states that if two rows have the same value for the determinant, they must have the same value for the dependent. It is written as A ? B, read as A functionally determines B. For example, in a Student table, roll ? name means that knowing the roll number uniquely determines the name. Similarly, dept_id ? dept_name in a Department table. Functional dependencies are used to derive the keys of a relation, to detect anomalies, and to apply the rules of normalisation. They are the foundation of good database design.",
                            4
                        ),
                        qa(
                            "Explain 1NF, 2NF and 3NF with examples.",
                            "The first normal form requires that every cell contain a single atomic value and that there be no repeating groups. For example, a Student table should not have a single column 'phones' that holds several numbers; instead, each phone number should be a separate row in a related table. The second normal form requires 1NF plus no partial dependency, meaning no non key attribute should depend on only part of a composite primary key. For example, in an Enrolment table with (roll, course_id, grade, name), name depends only on roll, not on the full key, so name should be moved to a Student table. The third normal form requires 2NF plus no transitive dependency, meaning no non key attribute should depend on another non key attribute. For example, in a Student table, dept_id determines dept_name, so dept_name should be moved to a Department table.",
                            4
                        ),
                        qa(
                            "Differentiate between 3NF and BCNF.",
                            "Both 3NF and BCNF aim to remove anomalies due to functional dependencies, but BCNF is stricter. 3NF allows a non key attribute to be transitively dependent on a key through another non key attribute, as long as the second non key is a candidate key. BCNF requires that every determinant of a functional dependency must be a candidate key, not just a super key. In practice, most tables in 3NF are also in BCNF, but in rare cases a table in 3NF may still have an anomaly that BCNF would fix. BCNF is recommended for designs where the integrity of the data is more important than minor performance gains from keeping some redundancy.",
                            4
                        ),
                        qa(
                            "What is denormalisation? When is it useful?",
                            "Denormalisation is the deliberate introduction of redundancy into a relational design, in order to improve the performance of read heavy queries. It is the opposite of normalisation. In a fully normalised database, reading a fact often requires joining many tables, which can be slow when the tables are very large. Denormalisation adds some redundant columns, such as storing the customer name in the Orders table even though it could be fetched from the Customers table, so that the query is faster. It is widely used in data warehouses and reporting systems, where reads are many and writes are few. The trade off is that updates must be done in multiple places, so the application must enforce the consistency.",
                            4
                        ),
                    ],
  }
);

/* =========================================================
   TOPIC 2 � Transactions and ACID Properties
========================================================= */

const transactions = createTopic(
    "transactions",
    "Transactions and ACID Properties",

    [
        definition(
            "Transaction",
            "A logical unit of work that consists of one or more database operations, which must be executed together or not at all. Example: transfer of money from account A to account B."
        ),


    table(
        ["Property", "Meaning", "Example"],
        [
            ["Atomicity", "All or nothing", "Either both debit and credit happen, or none does"],
            ["Consistency", "Database moves from one valid state to another", "Total money before = total money after"],
            ["Isolation", "Concurrent transactions do not interfere", "Each transaction sees a consistent snapshot"],
            ["Durability", "Once committed, change survives crashes", "Data is written to disk and logged"],
        ]
    ),

        note(
            "The four ACID properties are guaranteed by the DBMS through locking, logging and recovery mechanisms. Without them, a transfer of money could be lost if the system crashes between the debit and the credit.",
            "exam",
            "Frequently Asked"
        ),


list([
    "Active: the transaction is executing.",
    "Partially committed: all operations have executed but the commit is not yet written.",
    "Committed: changes are permanently saved.",
    "Failed: a normal execution can no longer proceed.",
    "Aborted: the transaction has been rolled back and the database is restored to its previous state.",
]),


code(
    `BEGIN TRANSACTION;       -- or START TRANSACTION

UPDATE Account SET balance = balance - 1000
  WHERE acc_no = 101;

UPDATE Account SET balance = balance + 1000
  WHERE acc_no = 102;

COMMIT;                    -- save changes

-- or

ROLLBACK;                  -- undo changes
`,
    "sql",
    "Transfer money in a transaction"
),


code(
    `BEGIN;
INSERT INTO T1 VALUES (1);
SAVEPOINT sp1;
INSERT INTO T1 VALUES (2);
ROLLBACK TO sp1;   -- undoes only the second insert
COMMIT;
`,
    "sql",
    "Using savepoint"
),


list([
    "Dirty read: a transaction reads data written by another uncommitted transaction.",
    "Non repeatable read: a row is read twice and the value has changed.",
    "Phantom read: a query is run twice and the set of rows has changed.",
    "Lost update: two transactions update the same row and only one update survives.",
]),


table(
    ["Level", "Dirty Read", "Non Repeatable", "Phantom"],
    [
        ["Read Uncommitted", "Yes", "Yes", "Yes"],
        ["Read Committed", "No", "Yes", "Yes"],
        ["Repeatable Read", "No", "No", "Yes"],
        ["Serializable", "No", "No", "No"],
    ]
),

    keyPoints([
        "Transaction is a logical unit of work, all or nothing.",
        "ACID: Atomicity, Consistency, Isolation, Durability.",
        "COMMIT saves; ROLLBACK undoes; SAVEPOINT marks a point.",
        "Concurrency problems: dirty read, non repeatable, phantom, lost update.",
        "Isolation levels control how much transactions see of each other.",
        ]),
    ],

    {
        summary:
    "Master the concept of transaction, the ACID properties, transaction commands, savepoints, concurrent problems and isolation levels.",
        minutes: 12,
            tags: ["transaction", "acid", "commit", "rollback", "important"],

                mcqs: [
                    mcq(
                        "ACID stands for:",
                        ["Atomicity Consistency Isolation Durability", "Atomicity Concurrency Indexing Durability", "Atomicity Consistency Integrity Durability", "Atomicity Concurrency Isolation Data"],
                        0,
                        "ACID is Atomicity, Consistency, Isolation, Durability."
                    ),
                    mcq(
                        "COMMIT:",
                        ["Undoes the transaction", "Saves the transaction", "Reads data", "Locks the table"],
                        1,
                        "COMMIT makes all changes of the transaction permanent."
                    ),
                    mcq(
                        "ROLLBACK:",
                        ["Saves changes", "Undoes changes", "Locks the table", "Commits"],
                        1,
                        "ROLLBACK undoes the changes of the transaction."
                    ),
                    mcq(
                        "Dirty read is reading:",
                        ["Committed data", "Uncommitted data", "Old data", "Phantom data"],
                        1,
                        "Dirty read reads data written by an uncommitted transaction."
                    ),
                    mcq(
                        "Highest isolation level:",
                        ["Read Uncommitted", "Read Committed", "Repeatable Read", "Serializable"],
                        3,
                        "Serializable is the highest, no anomalies."
                    ),
                    mcq(
                        "SAVEPOINT is used for:",
                        ["Saving to disk", "Partial rollback", "Logging", "Locking"],
                        1,
                        "SAVEPOINT allows partial rollback within a transaction."
                    ),
                ],

                    questions: [
                        qa(
                            "Explain the ACID properties of a transaction with an example.",
                            "The ACID properties are the four guarantees that a DBMS provides for every transaction. Atomicity means the transaction is all or nothing; either every operation succeeds or none takes effect, so a partial failure does not leave the database in an inconsistent state. Consistency means the database moves from one valid state to another, so all rules and constraints remain satisfied. Isolation means concurrent transactions do not interfere with each other; their intermediate states are invisible to one another. Durability means once a transaction is committed, its effects survive any subsequent crash or power failure, because the data is written to disk and a log is kept. For example, when transferring Rs 1000 from account A to account B, atomicity ensures both debit and credit happen, consistency keeps the total money unchanged, isolation prevents another transaction from seeing the partial update, and durability guarantees that the transfer survives a crash.",
                            4
                        ),
                        qa(
                            "Explain the concurrent execution problems in DBMS.",
                            "When two or more transactions run at the same time, several problems can occur if the isolation is not sufficient. In a dirty read, a transaction reads data written by another transaction that has not yet committed, so the read may be based on a value that will be rolled back. In a non repeatable read, a transaction reads the same row twice and gets different values because another transaction has updated it in between. In a phantom read, a transaction runs a query twice that returns a set of rows, and the set is different the second time because another transaction has inserted or deleted matching rows. In a lost update, two transactions read and update the same row, and only one of the updates is preserved. The DBMS prevents these by using locks and isolation levels.",
                            4
                        ),
                        qa(
                            "Differentiate between the four SQL isolation levels.",
                            "SQL defines four standard isolation levels, each offering more protection but at a lower concurrency. Read Uncommitted allows a transaction to see changes made by other uncommitted transactions; it permits dirty reads, non repeatable reads and phantom reads, and is rarely used. Read Committed allows a transaction to see only committed changes, so dirty reads are prevented but non repeatable and phantom reads are still possible; this is the default in many databases. Repeatable Read ensures that if a row is read twice in the same transaction, the value is the same, so non repeatable reads are prevented, but phantom reads can still occur. Serializable is the highest level: it prevents all three anomalies by ensuring that the concurrent execution has the same effect as if the transactions were run one after the other. The choice is a trade off between consistency and performance.",
                            4
                        ),
                        qa(
                            "What is a savepoint? When is it useful?",
                            "A savepoint is a marker within a transaction that allows partial rollback. If a transaction has several steps and one of them fails, the application can roll back only to the savepoint before the failed step, keeping the earlier work, instead of rolling back the whole transaction. For example, in a transaction that inserts into three tables, the application can set a savepoint after the first two inserts, and if the third fails, roll back to the savepoint and commit the first two. Savepoints are useful for long transactions with several independent parts, and they are also used in nested procedures and exception handling blocks.",
                            4
                        ),
                    ],
  }
);

/* =========================================================
   TOPIC 3 � Concurrency Control
========================================================= */

const concurrency = createTopic(
    "concurrency-control",
    "Concurrency Control",

    [
        definition(
            "Concurrency Control",
            "The set of techniques used by a DBMS to ensure that concurrent transactions execute without interfering with each other, while still achieving good performance."
        ),


    list([
        "Many users must be able to use the database at the same time.",
        "Each transaction must see a consistent view of the data.",
        "The final result must be the same as if the transactions were run one after another.",
        "This is called serializability.",
    ]),


list([
    "Lock: a variable associated with a data item, indicating whether a transaction is allowed to read or write it.",
    "Shared lock (S): allows reading, multiple transactions can hold it.",
    "Exclusive lock (X): allows reading and writing, only one transaction at a time.",
    "Lock compatibility: S and S can be held together; S and X or X and X cannot.",
]),

    heading("Two Phase Locking (2PL)"),

definition(
    "Two Phase Locking",
    "A concurrency control protocol in which every transaction has a growing phase, during which it acquires locks, and a shrinking phase, during which it releases locks. 2PL guarantees serializability."
),

    list([
        "Phase 1, growing: the transaction may acquire locks but cannot release any.",
        "Phase 2, shrinking: the transaction may release locks but cannot acquire new ones.",
        "All locks are released when the transaction commits or aborts.",
        "Prevents many anomalies but can cause deadlock.",
    ]),


definition(
    "Deadlock",
    "A situation in which two or more transactions are each waiting for a lock held by another, so none can proceed."
),

    code(
        `T1: holds lock on row A, waits for row B
T2: holds lock on row B, waits for row A
Both are stuck forever.
`,
        "text",
        "Classic deadlock"
    ),

    list([
        "Prevention: design transactions to lock in a fixed order.",
        "Detection: the DBMS builds a wait for graph and aborts one transaction to break the cycle.",
        "Avoidance: use timestamps or priorities to decide who waits and who proceeds.",
        "Recovery: the aborted transaction is rolled back and may be restarted.",
    ]),

    note(
        "A wait for graph has a node for each transaction and a directed edge from T1 to T2 if T1 is waiting for a lock held by T2. If there is a cycle, there is a deadlock.",
        "tip",
        "Wait for Graph"
    ),


list([
    "Each transaction is given a unique timestamp when it starts.",
    "Each data item has a read timestamp and a write timestamp.",
    "If a transaction tries to read or write a data item whose timestamp is later than its own, the transaction is aborted and restarted with a new timestamp.",
    "Ensures serializability without using locks.",
]),


list([
    "Assumes conflicts are rare.",
    "Three phases: read, validate, write.",
    "Read: transaction reads data and keeps a local copy.",
    "Validate: before commit, check whether any other transaction has changed the data.",
    "Write: if validation succeeds, write the local copy to the database; otherwise restart.",
]),

    heading("Multiversion Concurrency Control (MVCC)"),

list([
    "When a row is updated, the old version is kept alongside the new one.",
    "Readers see the version that was current when their transaction started.",
    "Writers do not block readers and vice versa, so concurrency is high.",
    "Used by PostgreSQL, MySQL InnoDB, Oracle and many other modern DBMS.",
]),

    keyPoints([
        "Lock based: shared for read, exclusive for write.",
        "2PL guarantees serializability but can deadlock.",
        "Deadlock can be prevented, detected or avoided.",
        "Timestamp ordering and MVCC are lock free alternatives.",
        "MVCC is the most widely used modern approach.",
        ]),
    ],

    {
        summary:
    "Master concurrency control techniques: locks, 2PL, deadlock, timestamp ordering, optimistic control and MVCC.",
        minutes: 12,
            tags: ["concurrency", "lock", "2pl", "deadlock", "important"],

                mcqs: [
                    mcq(
                        "Shared lock allows:",
                        ["Writing only", "Reading only", "Reading and writing", "Nothing"],
                        1,
                        "Shared lock allows reading, multiple transactions can hold it."
                    ),
                    mcq(
                        "Exclusive lock allows:",
                        ["Reading only", "Writing only", "Reading and writing", "Nothing"],
                        2,
                        "Exclusive lock allows both reading and writing."
                    ),
                    mcq(
                        "2PL has:",
                        ["1 phase", "2 phases", "3 phases", "4 phases"],
                        1,
                        "2PL has a growing phase and a shrinking phase."
                    ),
                    mcq(
                        "Deadlock is when:",
                        ["Two transactions succeed", "Two transactions wait on each other", "One transaction is slow", "A transaction is aborted"],
                        1,
                        "Deadlock is when each transaction waits for a lock held by the other."
                    ),
                    mcq(
                        "MVCC stands for:",
                        ["Multi Version Concurrency Control", "Main Version Common Control", "Multi View Concurrent Code", "Memory Version Control"],
                        0,
                        "MVCC is Multi Version Concurrency Control, used by most modern DBMS."
                    ),
                    mcq(
                        "Timestamp ordering avoids:",
                        ["Locks", "Deadlock", "Starvation", "Loss"],
                        1,
                        "Timestamp ordering avoids deadlock by using timestamps instead of locks."
                    ),
                ],

                    questions: [
                        qa(
                            "Explain the two phase locking protocol.",
                            "Two Phase Locking, or 2PL, is a concurrency control protocol that guarantees serializability. It has two phases. In the growing phase, the transaction may acquire locks on data items but cannot release any. In the shrinking phase, the transaction may release locks but cannot acquire any new ones. All locks held by the transaction are released only when the transaction commits or aborts. By requiring that all locks be acquired before any are released, 2PL prevents the kind of interleaving that leads to anomalies, and is provably equivalent to some serial order of the transactions. The drawback is that it can cause deadlocks, which the DBMS must detect and resolve by aborting one of the transactions.",
                            4
                        ),
                        qa(
                            "What is a deadlock? How can it be handled?",
                            "A deadlock is a situation in which two or more transactions are each waiting for a lock held by another, so none of them can proceed. For example, T1 holds lock A and waits for lock B, while T2 holds lock B and waits for lock A. Deadlock can be handled in four ways. Prevention: design transactions so they always lock in a fixed order. Avoidance: use a protocol such as wait die or wound wait that decides which transaction should wait and which should be aborted. Detection: the DBMS builds a wait for graph and aborts a transaction to break the cycle. Recovery: the aborted transaction is rolled back and may be restarted. Most production DBMS use detection, with a short lock timeout as a backup.",
                            4
                        ),
                        qa(
                            "Differentiate between lock based and timestamp based concurrency control.",
                            "Lock based concurrency control uses locks on data items to prevent conflicts. The most common protocol is two phase locking, which guarantees serializability but can cause deadlocks. Timestamp based concurrency control does not use locks; instead, each transaction is given a unique timestamp, and the rules ensure that the equivalent serial order is the order of the timestamps. The advantage of timestamp ordering is that there are no deadlocks; the disadvantage is that some transactions may be aborted even when they would have been fine under locking. In practice, modern DBMS use a mix of both, often combined with multi version concurrency control, which keeps old versions of rows so readers never block writers and vice versa.",
                            4
                        ),
                        qa(
                            "Explain multi version concurrency control (MVCC).",
                            "Multi Version Concurrency Control, or MVCC, is a technique in which every update to a row creates a new version of that row, while the old version is kept. Readers see the version of the row that was current when their transaction started, and writers create a new version without disturbing the readers. This means that readers and writers do not block each other, which gives very high concurrency. MVCC is used by PostgreSQL, MySQL InnoDB, Oracle and many other modern DBMS. The trade off is that the database has to store multiple versions of each row and periodically clean up the old ones through a process called vacuum or purge. Despite the overhead, MVCC is the most popular concurrency control technique in modern databases.",
                            4
                        ),
                    ],
  }
);

/* =========================================================
   TOPIC 4 � Database Security
========================================================= */

const dbSecurity = createTopic(
    "database-security",
    "Database Security",

    [
        definition(
            "Database Security",
            "The set of measures, controls and procedures that protect a database from unauthorised access, modification, destruction or disclosure."
        ),


    list([
        "Databases hold the most valuable data of any organisation.",
        "A breach can leak millions of personal records, leading to fines and loss of trust.",
        "Regulations such as GDPR and DPDP Act impose heavy penalties.",
        "Insider threats are a real risk.",
    ]),


list([
    "SQL injection: malicious code inserted into a query.",
    "Privilege abuse: a user with too much access misuses it.",
    "Malware: viruses, ransomware that encrypt the database.",
    "Weak or stolen passwords.",
    "Unencrypted backups.",
    "Insider attack: malicious or careless employee.",
    "Misconfigured database exposed on the internet.",
]),


list([
    "Authentication: who the user is, by password, OTP, fingerprint.",
    "Authorisation: what the user is allowed to do, by granting roles and privileges.",
    "Encryption: at rest and in transit.",
    "Audit: log every access, login, query and change.",
    "Backups: regular, encrypted, stored off site, tested.",
    "Updates: keep the DBMS and OS patched.",
    "Network: firewall, VPN, private subnet.",
    "Least privilege: give each user only the minimum access needed.",
]),


code(
    `GRANT SELECT, INSERT ON Student TO amit;
GRANT ALL PRIVILEGES ON Student TO teacher;
REVOKE INSERT ON Student FROM amit;
`,
    "sql",
    "GRANT and REVOKE"
),


definition(
    "Role",
    "A named collection of privileges that can be granted to many users, making security management easier and less error prone."
),

    code(
        `CREATE ROLE clerk;
GRANT SELECT, INSERT ON Orders TO clerk;
GRANT clerk TO priya;
`,
        "sql",
        "Creating and using a role"
    ),


list([
    "Create a view that exposes only selected columns or rows.",
    "Grant access to the view, not the underlying table.",
    "Users can read what they are allowed to read, but nothing more.",
    "Common pattern in multi tenant applications.",
]),


table(
    ["Where", "Method", "Use"],
    [
        ["In transit", "TLS or SSL", "Protect data over the network"],
        ["At rest", "AES, transparent data encryption", "Protect data on disk"],
        ["Column level", "Custom or library", "Protect sensitive columns like Aadhar"],
        ["Application", "Hash for passwords, encrypt sensitive fields", "Never store plain passwords"],
    ]
),


list([
    "Use parameterised queries or prepared statements.",
    "Never concatenate user input into SQL.",
    "Validate and sanitise input on the server.",
    "Use stored procedures with parameters.",
    "Limit database user privileges.",
    "Hide database error messages from the user.",
]),


list([
    "Log every login and logout.",
    "Log every privileged action such as GRANT, DROP, ALTER.",
    "Log changes to sensitive tables.",
    "Store logs securely and review them regularly.",
    "Helps in compliance, forensics and detecting attacks.",
]),

    keyPoints([
        "Database security protects against unauthorised access.",
        "Use GRANT, REVOKE and roles for authorisation.",
        "Encrypt data at rest and in transit.",
        "Use parameterised queries to prevent SQL injection.",
        "Maintain audit trails for compliance and forensics.",
        ]),
    ],

    {
        summary:
    "Master database security threats, GRANT and REVOKE, roles, views for security, encryption, SQL injection prevention and audit trails.",
        minutes: 11,
            tags: ["security", "grant", "sql-injection", "audit", "important"],

                mcqs: [
                    mcq(
                        "GRANT is used to:",
                        ["Take back privilege", "Give privilege", "Delete table", "Create user"],
                        1,
                        "GRANT gives a privilege to a user."
                    ),
                    mcq(
                        "REVOKE:",
                        ["Gives privilege", "Takes back privilege", "Creates role", "Drops table"],
                        1,
                        "REVOKE takes back a previously granted privilege."
                    ),
                    mcq(
                        "SQL injection is prevented by:",
                        ["Concatenating input", "Parameterised queries", "Larger queries", "Faster queries"],
                        1,
                        "Parameterised queries or prepared statements prevent SQL injection."
                    ),
                    mcq(
                        "TDE stands for:",
                        ["Total Data Encryption", "Transparent Data Encryption", "Trusted Data Engine", "Time Data Encryption"],
                        1,
                        "TDE is Transparent Data Encryption used in many DBMS."
                    ),
                    mcq(
                        "Audit trail is used for:",
                        ["Speeding up queries", "Logging and compliance", "Adding data", "Removing data"],
                        1,
                        "Audit trails log actions for compliance and forensics."
                    ),
                    mcq(
                        "Least privilege means:",
                        ["Maximum access", "Minimum access needed", "No access", "Random access"],
                        1,
                        "Give each user only the minimum access needed to do their job."
                    ),
                ],

                    questions: [
                        qa(
                            "Explain the threats to a database.",
                            "Databases face a variety of threats. SQL injection is one of the most common, where the attacker inserts malicious SQL into an input field and gains access to data or even control of the server. Privilege abuse occurs when a user with too much access misuses it, intentionally or by mistake. Malware such as ransomware can encrypt or destroy data, demanding a ransom for the key. Weak or stolen passwords are a frequent cause of breaches, especially when the same password is reused across systems. Unencrypted backups, if stolen, expose all the data. Insider attacks by disgruntled or careless employees are a major risk. Misconfigured databases exposed on the internet, such as MongoDB without authentication, have led to massive leaks. Defending against all of these requires a layered approach to security.",
                            4
                        ),
                        qa(
                            "Differentiate between authentication and authorisation.",
                            "Authentication is the process of verifying who the user is, by checking a password, an OTP, a fingerprint or a face. Authorisation is the process of deciding what the user is allowed to do once they are authenticated. In a database, authentication is done by the DBMS using a username and password, often combined with multi factor authentication for sensitive accounts. Authorisation is done by granting and revoking privileges, usually through roles. For example, a clerk may be authenticated but is only authorised to SELECT and INSERT in the Orders table, not to DROP it. Authentication answers the question 'who are you', while authorisation answers 'what can you do'. Both are essential for security.",
                            4
                        ),
                        qa(
                            "Explain SQL injection with an example and its prevention.",
                            "SQL injection is an attack in which malicious SQL code is inserted into an input field, which is then concatenated into a query and executed. For example, a login form might build the query as 'SELECT * FROM users WHERE name = '' + name + ' AND password = '' + pass + '''. If the attacker enters ' OR '1'='1' as the name, the query becomes 'SELECT * FROM users WHERE name = '' OR '1'='1' AND password = ''', which always returns true and logs the attacker in. The standard prevention is to use parameterised queries or prepared statements, where the SQL is fixed and the user input is passed as a parameter that the DBMS treats as data, never as code. Other measures are input validation, escaping, hiding database errors and applying the principle of least privilege to the database user used by the application.",
                            4
                        ),
                        qa(
                            "What are roles and how do they help in database security?",
                            "A role is a named collection of privileges that can be granted to many users. For example, an 'accountant' role may include SELECT on the Invoices table and UPDATE on the Payments table. By granting the role to every accountant, the database administrator does not have to grant each privilege to each user individually. When a privilege changes, it is changed once in the role, and all users of the role inherit the change. Roles can also be granted to other roles, building a hierarchy. They support the principle of least privilege, because each user is given only the role that matches their job. Roles are essential in any database with more than a handful of users, and they are supported by every major DBMS.",
                            4
                        ),
                    ],
  }
);

/* =========================================================
   TOPIC 5 � NoSQL Databases and Modern Trends
========================================================= */

const nosql = createTopic(
    "nosql-and-modern-trends",
    "NoSQL Databases and Modern Trends",

    [
        definition(
            "NoSQL Database",
            "A database that does not use the relational model and SQL, and which is designed for the scale, flexibility and speed of modern applications. Common types are document, key value, column family and graph databases."
        ),


    list([
        "Schema flexibility: store documents with different fields.",
        "Horizontal scaling: add more servers easily.",
        "High performance for simple read write patterns.",
        "Natural fit for object oriented and JSON data.",
        "Large volumes of unstructured or semi structured data.",
    ]),


table(
    ["Type", "Example", "Use"],
    [
        ["Document", "MongoDB, CouchDB", "Product catalogue, user profiles, content management"],
        ["Key value", "Redis, DynamoDB", "Caching, session storage, leaderboards"],
        ["Column family", "Cassandra, HBase", "Time series, write heavy logs"],
        ["Graph", "Neo4j, JanusGraph", "Social networks, recommendations, fraud detection"],
        ["Search engine", "Elasticsearch, Solr", "Full text search, log analytics"],
        ["Time series", "InfluxDB, TimescaleDB", "IoT, monitoring, metrics"],
        ["Wide column", "BigTable, ScyllaDB", "Same as column family"],
    ]
),


code(
    `// Insert a document
db.users.insertOne({
  name: "Amit",
  age: 21,
  skills: ["JS", "React", "Node"]
});

// Query
db.users.find({ age: { $gt: 18 } });
db.users.find().sort({ name: 1 });
db.users.updateOne(
  { name: "Amit" },
  { $set: { age: 22 } }
);
db.users.deleteOne({ name: "Amit" });
`,
    "javascript",
    "MongoDB basics"
),


definition(
    "CAP Theorem",
    "A distributed database can deliver at most two of the three properties: Consistency, Availability and Partition tolerance. Since network partitions are inevitable, the choice is between consistency and availability."
),

    list([
        "CP: consistency + partition tolerance, e.g. MongoDB, HBase.",
        "AP: availability + partition tolerance, e.g. Cassandra, DynamoDB.",
        "CA: not really possible in a distributed system.",
    ]),


list([
    "NewSQL databases aim to give the scalability of NoSQL with the consistency of RDBMS.",
    "Examples: Google Spanner, CockroachDB, TiDB, MemSQL.",
    "They scale horizontally and use SQL.",
    "Used by large internet companies for global transactions.",
]),


list([
    "Database as a Service (DBaaS): AWS RDS, Azure SQL, Google Cloud SQL.",
    "Fully managed: automated backup, patching, scaling.",
    "Serverless: pay per query, e.g. AWS Aurora Serverless.",
    "Multi region: global replication with low latency.",
]),


list([
    "AI assisted query optimisation and schema design.",
    "Serverless and pay per use databases.",
    "Multi model: one engine that supports relational, document, graph.",
    "Stronger consistency with distributed SQL.",
    "Privacy by design, encrypted by default.",
    "Vector databases for AI and similarity search, e.g. Pinecone, Weaviate, Milvus.",
    "Database observability: dashboards, alerts, query analytics.",
]),


table(
    ["Use SQL", "Use NoSQL"],
    [
        ["Structured data, fixed schema", "Schema free or evolving"],
        ["Strict ACID transactions", ["Eventual consistency is fine"]],
        ["Complex queries and joins", "Simple read write at huge scale"],
        ["Reporting and BI", "Real time, mobile, IoT"],
        ["Banking, ERP, CRM", "Social, gaming, IoT, content"],
    ]
),

    keyPoints([
        "NoSQL means not only SQL; many modern systems are hybrid.",
        "Types: document, key value, column family, graph.",
        "CAP theorem: at most two of consistency, availability, partition tolerance.",
        "NewSQL combines SQL and horizontal scaling.",
        "Choose SQL for complex queries and strict consistency; NoSQL for scale and flexibility.",
        ]),
    ],

    {
        summary:
    "Survey NoSQL databases, types, MongoDB basics, CAP theorem, NewSQL, cloud databases, vector databases and when to choose SQL vs NoSQL.",
        minutes: 12,
            tags: ["nosql", "mongodb", "cap", "newsql", "important"],

                mcqs: [
                    mcq(
                        "MongoDB is a:",
                        ["Relational database", "Document database", "Graph database", "Key value database"],
                        1,
                        "MongoDB is the most popular document database."
                    ),
                    mcq(
                        "CAP theorem has:",
                        ["2 properties", "3 properties", "4 properties", "5 properties"],
                        1,
                        "CAP has Consistency, Availability and Partition tolerance."
                    ),
                    mcq(
                        "Redis is best known as a:",
                        ["Document DB", "Key value store", "Graph DB", "Column DB"],
                        1,
                        "Redis is a popular in memory key value store."
                    ),
                    mcq(
                        "CAP says you can have at most:",
                        ["1", "2", "3", "4"],
                        1,
                        "A distributed system can deliver at most two of the three."
                    ),
                    mcq(
                        "Neo4j is a:",
                        ["Document DB", "Graph database", "Column DB", "Key value DB"],
                        1,
                        "Neo4j is a popular graph database."
                    ),
                    mcq(
                        "Vector databases are used for:",
                        ["Transactions", "AI and similarity search", "Reporting", "Backups"],
                        1,
                        "Vector databases store embeddings for AI and similarity search."
                    ),
                ],

    questions: [
        qa(
            "Differentiate between SQL and NoSQL databases.",
            "SQL databases, or RDBMS, store data in tables with a fixed schema, support ACID transactions and use the powerful SQL query language. They are best for structured data with clear relationships and for use cases such as banking, ERP and reporting, where consistency and complex queries are essential. NoSQL databases store data in flexible formats such as documents, key value pairs, columns or graphs, with a dynamic schema. They scale horizontally across many servers and are designed for very large volumes of unstructured or semi structured data and for use cases such as social media, mobile apps, IoT and real time analytics, where scale and speed matter more than strict consistency. The choice depends on the data model, the scale and the consistency requirements of the application.",
            4
        ),
        qa(
            "Explain the CAP theorem with examples.",
            "The CAP theorem, proposed by Eric Brewer, states that a distributed database can deliver at most two of the three properties: Consistency, Availability and Partition tolerance. Consistency means every read sees the latest write. Availability means every request receives a response. Partition tolerance means the system continues to work even when network between nodes is broken. Since partitions are inevitable in a real distributed system, the choice is between consistency and availability. A CP system, such as MongoDB by default or HBase, prefers consistency and will return an error if it cannot guarantee the latest data. An AP system, such as Cassandra or DynamoDB, prefers availability and may return slightly stale data but never an error. A CA system is not really possible in a distributed setting, because the network can always fail.",
            4
        ),
        qa(
            "What is NewSQL? How is it different from NoSQL?",
            "NewSQL is a class of modern databases that combines the scalability of NoSQL with the strong consistency and SQL interface of traditional RDBMS. Examples are Google Spanner, CockroachDB, TiDB and MemSQL. They use a distributed architecture that automatically shards data across many servers, while still supporting ACID transactions and the SQL language. They are designed for large internet companies that need to scale globally without giving up the consistency that their business requires, such as financial services, e-commerce and gaming. The trade off is that NewSQL systems are more complex to operate than traditional RDBMS, and may have higher latency for simple queries because of the coordination across nodes.",
            4
        ),
        qa(
            "Briefly explain the main types of NoSQL databases.",
            "There are four main types of NoSQL databases. Document databases such as MongoDB and CouchDB store data in flexible, JSON like documents, each with its own set of fields. They are best for product catalogues, user profiles and content management. Key value stores such as Redis and DynamoDB store simple key to value pairs and are extremely fast, used for caching, session storage and leaderboards. Column family databases such as Cassandra and HBase store data in column families and excel at write heavy workloads over time series and logs. Graph databases such as Neo4j and JanusGraph store nodes and edges and are designed for highly connected data such as social networks, recommendations and fraud detection. Each type is optimised for a different access pattern, and a real application may use more than one type, called polyglot persistence.",
            4
        ),
    ],
  }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit2Topics = [
    normalization,
    transactions,
    concurrency,
    dbSecurity,
    nosql,
];


