/* =========================================================
   BCA • SEM 5 • Python Programming
   UNIT 2 — Object-Oriented Programming, File Handling, Exceptions & Data Science
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
   TOPIC 1 — Object-Oriented Programming in Python
========================================================= */

const oopPython = createTopic(
    "object-oriented-programming-python",
    "Object-Oriented Programming in Python",

    [
        definition(
            "Object-Oriented Programming (OOP)",
            "OOP is a programming paradigm based on the concept of 'objects', which contain data in the form of fields (attributes) and code in the form of procedures (methods)."
        ),

        heading("Classes, Objects & Constructors"),

        text(
            "In Python, a class is defined using the 'class' keyword. The '__init__' method serves as the constructor to initialise newly created objects, and 'self' refers to the current instance."
        ),

        code(
            `class Student:
    # Class Variable (Shared across all instances)
    college = "Gujarat University"

    def __init__(self, roll_no, name, marks):
        # Instance Variables (Unique to each instance)
        self.roll_no = roll_no
        self.name = name
        self.marks = marks

    def calculate_grade(self):
        return "Distinction" if self.marks >= 75 else "Pass"

# Instantiating objects
s1 = Student(101, "Rahul", 82)
s2 = Student(102, "Pooja", 68)

print(f"{s1.name} ({s1.college}) -> {s1.calculate_grade()}")`,
            "python",
            "Class and Constructor Example"
        ),

        heading("Encapsulation & Data Hiding"),

        table(
            ["Access Level", "Naming Convention", "Behavior"],
            [
                ["Public", "name", "Accessible from anywhere (inside and outside class)"],
                ["Protected", "_name", "Convention indicating internal use (accessible within class and subclasses)"],
                ["Private", "__name", "Name-mangled to _ClassName__name to prevent accidental outside access"],
            ]
        ),

        code(
            `class BankAccount:
    def __init__(self, owner, balance):
        self.owner = owner
        self.__balance = balance  # Private attribute

    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount

    def get_balance(self):
        return self.__balance

acc = BankAccount("Amit", 5000)
acc.deposit(1500)
print("Balance:", acc.get_balance(),
# print(acc.__balance) -> Raises AttributeError`,
            "python",
            "Encapsulation Example"
        ),

        heading("Inheritance & Method Resolution Order (MRO)"),

        list([
            "Single Inheritance — A child class inherits from one parent class.",
            "Multiple Inheritance — A child class inherits from multiple parent classes simultaneously.",
            "Multilevel Inheritance — A class inherits from a child class, forming a hierarchy.",
            "super() — Function used to call parent class constructors and methods.",
            "MRO (Method Resolution Order) — The linear order in which Python searches for attributes/methods, computed via the C3 Linearization algorithm.",
        ]),

        code(
            `class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

class Employee(Person):
    def __init__(self, name, age, emp_id, salary):
        super().__init__(name, age)  # Call parent constructor
        self.emp_id = emp_id
        self.salary = salary

emp = Employee("Karan", 28, "E105", 55000)
print(f"Employee: {emp.name}, Age: {emp.age}, Salary: {emp.salary}")
print("MRO:", Employee.mro(),`,
            "python",
            "Inheritance and super() Example"
        ),

        heading("Polymorphism: Duck Typing & Method Overriding"),

        code(
            `# Duck Typing: "If it walks like a duck and quacks like a duck, it's a duck"
class PDFReport:
    def generate(self):
        return "Generating PDF Report..."

class ExcelReport:
    def generate(self):
        return "Generating Excel Spreadsheet..."

def export_data(report_generator):
    print(report_generator.generate(),

export_data(PDFReport(),
export_data(ExcelReport(),`,
            "python",
            "Polymorphism via Duck Typing"
        ),

        keyPoints([
            "Classes encapsulate state (attributes) and behavior (methods).",
            "__init__() initialises object instances; 'self' points to the current instance.",
            "Private members use double underscores (__var) and undergo name mangling.",
            "super() calls base class methods and handles cooperative multiple inheritance.",
            "Python implements polymorphism through method overriding and duck typing.",
        ]),
    ],

    {
        summary:
            "Master OOP in Python: Classes, Objects, __init__, Encapsulation (Private/Protected), Inheritance, super(), MRO, and Polymorphism.",
        minutes: 13,
        tags: ["oop", "classes", "inheritance", "encapsulation", "polymorphism", "important"],

        mcqs: [
            mcq(
                "Which method acts as the object constructor in Python?",
                ["__construct__()", "__init__()", "__new__()", "__create__()"],
                1,
                "__init__() initialises attributes when a new class instance is created."
            ),
            mcq(
                "What does Python do to private attributes defined with double leading underscores (e.g., __balance)?",
                ["Deletes them from memory", "Applies Name Mangling to _ClassName__balance", "Makes them read-only", "Encrypts their value"],
                1,
                "Python applies name mangling, transforming __var to _ClassName__var."
            ),
            mcq(
                "Which built-in function returns the class inheritance search order?",
                ["Class.hierarchy()", "Class.mro()", "Class.order()", "Class.parents()"],
                1,
                "Class.mro() or Class.__mro__ returns the Method Resolution Order."
            ),
            mcq(
                "What does the 'self' parameter represent in instance methods?",
                ["The parent class", "The current class instance", "A global variable", "A keyword for static binding"],
                1,
                "'self' is a reference to the specific instance invoking the method."
            ),
        ],

        questions: [
            qa(
                "Explain Inheritance in Python. What is Method Resolution Order (MRO)?",
                "Inheritance allows a subclass to inherit attributes and methods from a superclass, enabling code reuse. Python supports Single, Multilevel, Multiple, and Hierarchical inheritance. When a subclass calls a method, Python determines which implementation to execute using the Method Resolution Order (MRO), a deterministic linear sequence constructed via the C3 Linearization algorithm. Developers can inspect MRO using ClassName.mro() or ClassName.__mro__. The super() function follows this MRO path to invoke parent methods seamlessly.",
                4
            ),
            qa(
                "How is Encapsulation achieved in Python? Explain Public, Protected, and Private members.",
                "Encapsulation binds data and methods within a single class while restricting direct external access. Python achieves this using naming conventions: (1) Public members (e.g., self.name) are accessible from anywhere. (2) Protected members (prefixed with a single underscore, e.g., self._age) signal to developers that the attribute is internal to the class and its subclasses. (3) Private members (prefixed with double underscores, e.g., self.__salary) are obscured via Name Mangling (rewritten internally as _ClassName__salary) to prevent accidental overwriting or outside access.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — Advanced Python: Dunder Methods, Generators & Decorators
========================================================= */

const advancedPythonOOP = createTopic(
    "advanced-python-dunder-generators-decorators",
    "Advanced Python: Dunder Methods, Generators & Decorators",

    [
        definition(
            "Dunder (Magic) Methods",
            "Special predefined methods surrounded by double underscores (e.g., __str__, __len__) that allow custom classes to hook into built-in Python operations, operator overloading, and language protocols."
        ),

        heading("Common Dunder Methods"),

        table(
            ["Dunder Method", "Triggered By", "Purpose"],
            [
                ["__str__(self)", "str(obj), print(obj)", "Returns human-readable string representation"],
                ["__repr__(self)", "repr(obj), interactive shell", "Returns unambiguous string representation for debugging"],
                ["__len__(self)", "len(obj)", "Returns collection length"],
                ["__add__(self, other)", "obj1 + obj2", "Overloads the addition (+) operator"],
                ["__eq__(self, other)", "obj1 == obj2", "Overloads the equality (==) operator"],
                ["__getitem__(self, key)", "obj[key]", "Enables index or key-based subscripting"],
            ]
        ),

        code(
            `class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __add__(self, other):
        return Vector(self.x + other.x, self.y + other.y)

    def __str__(self):
        return f"Vector({self.x}, {self.y})"

v1 = Vector(2, 4)
v2 = Vector(3, 1)
print(v1 + v2)  # Vector(5, 5)`,
            "python",
            "Operator Overloading with Dunder Methods"
        ),

        heading("Iterators and Generators"),

        definition(
            "Generator",
            "A generator is a special function that returns an iterator object producing a sequence of values lazily on-the-fly using the 'yield' statement instead of 'return'."
        ),

        code(
            `# Custom Generator for Fibonacci series
def fibonacci(limit):
    a, b = 0, 1
    while a < limit:
        yield a
        a, b = b, a + b

# Consuming generator lazily without loading everything into memory
for num in fibonacci(50):
    print(num, end=" ")
print()`,
            "python",
            "Generator with yield"
        ),

        heading("Decorators in Python"),

        definition(
            "Decorator",
            "A decorator is a design pattern that takes a function as an argument, extends or modifies its behavior without modifying its source code, and returns the modified function."
        ),

        code(
            `import time

# Decorator to measure execution time
def timer_decorator(func):
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"[{func.__name__}] Execution Time: {end - start:.6f}s")
        return result
    return wrapper

@timer_decorator
def compute_sum(n):
    return sum(i ** 2 for i in range(n),

print("Result:", compute_sum(100000),`,
            "python",
            "Custom Decorator Example"
        ),

        keyPoints([
            "Dunder methods allow custom classes to support built-in operators like +, ==, and len().",
            "Iterators implement __iter__() and __next__() methods.",
            "Generators use 'yield' to produce values lazily, saving significant memory for large datasets.",
            "Decorators use the @syntax to wrap and enhance function execution transparently.",
            "Context managers implement __enter__() and __exit__() for resource management.",
        ]),
    ],

    {
        summary:
            "Explore magic methods (__str__, __add__), custom iterators, memory-efficient generators with yield, and higher-order decorators.",
        minutes: 13,
        tags: ["dunder-methods", "generators", "yield", "decorators", "advanced-python", "important"],

        mcqs: [
            mcq(
                "Which keyword is used to pause a generator function and return a value to the caller?",
                ["return", "yield", "send", "pause"],
                1,
                "The 'yield' statement pauses execution and returns intermediate values lazily."
            ),
            mcq(
                "Which dunder method is invoked when the print() function is called on an object?",
                ["__repr__", "__str__", "__print__", "__display__"],
                1,
                "The __str__() method generates the human-readable string for print() and str()."
            ),
            mcq(
                "What is the primary advantage of a Generator over a standard List?",
                ["Faster sorting", "Memory efficiency via lazy evaluation", "Allows duplicate keys", "Thread-safety"],
                1,
                "Generators calculate values on demand, consuming minimal memory regardless of sequence size."
            ),
            mcq(
                "A Python decorator fundamentally works because:",
                ["Python is statically typed", "Functions are first-class citizens in Python", "Classes cannot have constructors", "Memory is unmanaged"],
                1,
                "In Python, functions can be passed as arguments, assigned to variables, and returned from functions."
            ),
        ],

        questions: [
            qa(
                "What are Generators in Python? Explain how they differ from regular functions using the 'yield' keyword.",
                "A generator is a function that returns an iterator object. Unlike regular functions that calculate all results and return them simultaneously terminating with 'return', a generator produces values lazily using 'yield'. When 'yield' is encountered, the generator's state, local variables, and execution pointer are frozen in memory, and the value is sent to the caller. When next() is called again, execution resumes immediately after the yield statement. Generators provide O(1) memory consumption for infinite or massive data sequences.",
                4
            ),
            qa(
                "Explain Decorators in Python. Write a decorator that logs function execution.",
                "A decorator is a higher-order function that takes another function as input, extends its behavior without modifying its source code, and returns a new callable wrapper function. It leverages Python's first-class functions and closures. Syntax uses the '@' symbol. Example: def logger(func): def wrapper(*args, **kwargs): print(f'Executing: {func.__name__}'); res = func(*args, **kwargs); print('Finished'); return res; return wrapper. Applying @logger above a function automatically wraps every call with logging statements.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — Exception Handling & File I/O (Text, CSV, JSON)
========================================================= */

const exceptionAndFiles = createTopic(
    "exception-handling-and-file-io",
    "Exception Handling & File I/O (Text, CSV, JSON)",

    [
        definition(
            "Exception Handling",
            "A mechanism in Python that allows programs to intercept and respond gracefully to runtime errors (exceptions) without crashing the application."
        ),

        heading("The try, except, else, and finally Blocks"),

        code(
            `try:
    num1 = int(input("Enter numerator: "),
    num2 = int(input("Enter denominator: "),
    result = num1 / num2

except ValueError:
    print("Error: Invalid numeric input entered.")
except ZeroDivisionError:
    print("Error: Division by zero is undefined.")
except Exception as e:
    print(f"Unexpected Error: {e}")
else:
    # Executes ONLY if no exceptions were raised
    print(f"Division Successful: {result:.2f}")
finally:
    # ALWAYS executes regardless of errors (Cleanup tasks)
    print("Operation completed.")`,
            "python",
            "Exception Handling Blocks"
        ),

        heading("Raising Custom Exceptions"),

        code(
            `class InvalidAgeError(Exception):
    """Custom exception raised for invalid age values."""
    def __init__(self, age, message="Age must be between 18 and 60"):
        self.age = age
        self.message = message
        super().__init__(self.message)

def verify_voter(age):
    if age < 18 or age > 60:
        raise InvalidAgeError(age)
    return "Eligible to Vote"

try:
    print(verify_voter(15),
except InvalidAgeError as err:
    print(f"Validation Failed: {err.message} (Given: {err.age})")`,
            "python",
            "Custom Exception Example"
        ),

        heading("File Handling in Python"),

        table(
            ["File Mode", "Description", "Behavior if File Exists"],
            [
                ["'r'", "Read-only (Default)", "Opens for reading; raises FileNotFoundError if missing"],
                ["'w'", "Write-only", "Overwrites existing content or creates a new file"],
                ["'a'", "Append", "Writes new data to the end without deleting existing content"],
                ["'r+'", "Read and Write", "Stream positioned at the beginning"],
                ["'b'", "Binary mode (e.g., 'rb', 'wb')", "Handles binary files like images, PDFs, or compiled data"],
            ]
        ),

        heading("Working with Text Files (with statement)"),

        code(
            `# Using 'with' automatically manages file opening and closing
with open("students.txt", "w", encoding="utf-8") as f:
    f.write("101, Amit, BCA\\n")
    f.write("102, Riya, MCA\\n")

# Reading from file
with open("students.txt", "r", encoding="utf-8") as f:
    for line in f:
        print(line.strip(),`,
            "python",
            "Text File Handling"
        ),

        heading("Working with CSV and JSON Files"),

        code(
            `import csv
import json

# 1. Writing and Reading CSV
data = [["ID", "Name", "Score"], [1, "Karan", 88], [2, "Neha", 94]]
with open("scores.csv", "w", newline="") as f:
    writer = csv.writer(f)
    writer.writerows(data)

# 2. Writing and Reading JSON
config = {"app": "StudentPortal", "version": 2.1, "debug": True}
with open("config.json", "w") as f:
    json.dump(config, f, indent=4)

with open("config.json", "r") as f:
    loaded_config = json.load(f)
    print("Loaded JSON App Name:", loaded_config["app"])`,
            "python",
            "CSV and JSON Operations"
        ),

        keyPoints([
            "Exception handling uses try, except, else, and finally.",
            "Custom exceptions inherit from the built-in Exception class.",
            "The 'with' statement ensures automatic file closure via context managers (__enter__ / __exit__).",
            "The csv module provides csv.writer and csv.DictReader.",
            "The json module uses json.dump()/json.load() for files, and json.dumps()/json.loads() for strings.",
        ]),
    ],

    {
        summary:
            "Learn robust exception handling, custom exceptions, file modes, context managers (with), text file I/O, CSV manipulation, and JSON parsing.",
        minutes: 13,
        tags: ["exceptions", "file-io", "csv", "json", "context-manager", "important"],

        mcqs: [
            mcq(
                "Which block in exception handling executes only if no exceptions were raised in the try block?",
                ["except", "finally", "else", "catch"],
                2,
                "The else block runs only if the try block executed cleanly without raising exceptions."
            ),
            mcq(
                "Why is the 'with open(...)' construct preferred for file operations?",
                ["It runs faster in CPython", "It automatically closes the file even if exceptions occur", "It allows binary encryption", "It deletes temporary files"],
                1,
                "The with statement ensures context management, guaranteeing the file is closed properly."
            ),
            mcq(
                "Which method converts a Python dictionary directly into a JSON formatted string?",
                ["json.dump()", "json.loads()", "json.dumps()", "json.encode()"],
                2,
                "json.dumps() serializes a Python object into a JSON formatted string."
            ),
            mcq(
                "Custom exception classes in Python should inherit from which base class?",
                ["BaseError", "Exception", "RuntimeWarning", "Object"],
                1,
                "User-defined custom exceptions inherit from the built-in Exception class."
            ),
        ],

        questions: [
            qa(
                "Explain the complete exception handling mechanism in Python with try, except, else, and finally.",
                "Python's exception handling consists of four coordinated blocks: (1) 'try': Encloses code that might potentially raise a runtime error. (2) 'except': Catches and handles specific exception types (e.g., FileNotFoundError, ZeroDivisionError). Multiple except blocks can be chained. (3) 'else': Executes optional code only if the try block completes without any exceptions being raised. (4) 'finally': Executes under all circumstances regardless of whether an exception occurred or was handled, making it ideal for cleanup actions like closing database connections or open file handles.",
                4
            ),
            qa(
                "Demonstrate how to read and write JSON data in Python using the 'json' module.",
                "The 'json' module handles data interchange between Python objects and JSON format: (1) json.dump(obj, file_handle): Serializes a Python dict/list directly into a JSON file (e.g., with open('data.json', 'w') as f: json.dump(data, f, indent=4),. (2) json.load(file_handle): Deserializes a JSON file back into a Python dictionary. (3) json.dumps(obj): Converts a Python object to an in-memory JSON string. (4) json.loads(json_str): Parses a JSON string back into a Python dictionary.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — Database Connectivity with SQLite & MySQL
========================================================= */

const databaseConnectivity = createTopic(
    "database-connectivity-sqlite-mysql",
    "Database Connectivity with SQLite & MySQL",

    [
        definition(
            "Python DB-API 2.0",
            "The standard database specification (PEP 249) that defines a consistent API across all database driver modules in Python, ensuring code portability across SQLite, MySQL, PostgreSQL, and Oracle."
        ),

        heading("Core DB-API Objects and Methods"),

        table(
            ["Object / Method", "Role", "Example"],
            [
                ["connect()", "Establishes connection to the database engine", "conn = sqlite3.connect('bca.db')"],
                ["cursor()", "Creates a cursor object to execute SQL commands", "cur = conn.cursor()"],
                ["cursor.execute(sql, params)", "Executes a single parameterized SQL query", "cur.execute('SELECT * FROM users WHERE id=?', (1,),"],
                ["cursor.executemany(sql, seq)", "Executes an SQL command against a sequence of rows", "cur.executemany('INSERT INTO ... VALUES (?,?)', rows)"],
                ["cursor.fetchone()", "Fetches the next single row of a query result", "row = cur.fetchone()"],
                ["cursor.fetchall()", "Fetches all remaining rows as a list of tuples", "rows = cur.fetchall()"],
                ["conn.commit()", "Persists all transaction changes to disk", "conn.commit()"],
                ["conn.rollback()", "Reverts all uncommitted changes in transaction", "conn.rollback()"],
            ]
        ),

        heading("Complete SQLite CRUD Example in Python"),

        code(
            `import sqlite3

# 1. Connect to local database (creates file if missing)
conn = sqlite3.connect("college.db")
cursor = conn.cursor()

# 2. Create Table
cursor.execute("""
CREATE TABLE IF NOT EXISTS students (
    roll_no INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    marks REAL
)
""")

# 3. Create (Insert parameterized records safely)
student_records = [
    (101, "Aakash", 85.5),
    (102, "Bhavna", 92.0),
    (103, "Chetan", 74.0)
]
cursor.executemany("INSERT OR REPLACE INTO students VALUES (?, ?, ?)", student_records)
conn.commit()

# 4. Read (Query records)
cursor.execute("SELECT * FROM students WHERE marks >= ?", (80.0,),
top_students = cursor.fetchall()
print("Top Students:")
for roll, name, mark in top_students:
    print(f"Roll: {roll} | Name: {name} | Marks: {mark}")

# 5. Update
cursor.execute("UPDATE students SET marks = ? WHERE roll_no = ?", (88.0, 101),
conn.commit()

# 6. Delete
cursor.execute("DELETE FROM students WHERE roll_no = ?", (103,),
conn.commit()

# Always close connections
conn.close()`,
            "python",
            "SQLite3 CRUD Operations"
        ),

        heading("Connecting to MySQL via mysql-connector-python"),

        code(
            `# Requires: pip install mysql-connector-python
import mysql.connector

try:
    db = mysql.connector.connect(
        host="localhost",
        user="root",
        password="password123",
        database="bca_db"
    )
    cursor = db.cursor()
    cursor.execute("SELECT DATABASE()")
    print("Connected to:", cursor.fetchone(),
    db.close()
except mysql.connector.Error as err:
    print("MySQL Error:", err)`,
            "python",
            "MySQL Connection Example"
        ),

        note(
            "Never construct SQL queries via direct string concatenation (e.g., f'SELECT * FROM users WHERE name={input}'). Always use parameterized queries (?, %s) to prevent SQL Injection attacks.",
            "warning",
            "SQL Injection Prevention"
        ),

        keyPoints([
            "Python DB-API (PEP 249) standardizes database interactions.",
            "sqlite3 is built into Python's standard library and requires no external server setup.",
            "Transactions require an explicit conn.commit() to save changes permanently.",
            "Parameterized queries with '?' or '%s' placeholders protect against SQL Injection.",
            "Cursor methods fetchone(), fetchall(), and fetchmany(n) retrieve queried result sets.",
        ]),
    ],

    {
        summary:
            "Master Python DB-API 2.0, SQLite3 integration, CRUD queries, transactions (commit/rollback), parameterized queries, and MySQL connectivity.",
        minutes: 13,
        tags: ["database", "sqlite3", "mysql", "sql", "db-api", "important"],

        mcqs: [
            mcq(
                "Which built-in module provides lightweight relational database functionality in Python?",
                ["pymysql", "sqlite3", "sqlalchemy", "psycopg2"],
                1,
                "sqlite3 is part of the standard library and manages embedded serverless databases."
            ),
            mcq(
                "Why are parameterized queries (?, %s) essential in database development?",
                ["They compress table data", "They prevent SQL Injection attacks", "They eliminate foreign keys", "They auto-commit transactions"],
                1,
                "Parameterized queries separate SQL logic from untrusted user inputs, preventing SQL injection."
            ),
            mcq(
                "Which method is called on the connection object to permanently save transaction changes?",
                ["conn.save()", "conn.commit()", "conn.flush()", "conn.persist()"],
                1,
                "conn.commit() persists transaction modifications to the database storage."
            ),
            mcq(
                "What does cursor.fetchall() return?",
                ["A single string", "A dictionary of tables", "A list of row tuples matching the query", "An integer count"],
                2,
                "fetchall() returns all remaining query rows as a list of tuples."
            ),
        ],

        questions: [
            qa(
                "What is the Python DB-API 2.0 (PEP 249)? Explain its core components.",
                "Python DB-API 2.0 is a standard specification designed to ensure consistency across all Python database interface modules (like sqlite3, psycopg2, mysql-connector). Key components include: (1) connect(): Function to establish connection objects. (2) Connection Object: Manages transactions with commit(), rollback(), and close(). (3) Cursor Object: Handles SQL query execution (execute(), executemany(), and result retrieval (fetchone(), fetchall(), fetchmany(),. This abstraction allows switching database backends with minimal code changes.",
                4
            ),
            qa(
                "Write a complete Python script using sqlite3 to create a table, insert records, and query data using parameterized statements.",
                "```python\nimport sqlite3\n\nconn = sqlite3.connect('test.db')\ncur = conn.cursor()\n\n# Create table\ncur.execute('CREATE TABLE IF NOT EXISTS items (id INT, name TEXT, price REAL)')\n\n# Parameterized Insert\ncur.execute('INSERT INTO items VALUES (?, ?, ?)', (1, 'Keyboard', 750.0),\nconn.commit()\n\n# Query\ncur.execute('SELECT * FROM items WHERE price > ?', (500.0,),\nfor row in cur.fetchall():\n    print(row)\n\nconn.close()\n```",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 5 — Scientific Computing & Data Analysis (NumPy, Pandas, Matplotlib)
========================================================= */

const dataScienceBasics = createTopic(
    "scientific-computing-numpy-pandas-matplotlib",
    "Scientific Computing & Data Analysis (NumPy, Pandas, Matplotlib)",

    [
        definition(
            "Python Data Science Stack",
            "The ecosystem of specialized libraries — primarily NumPy (numerical arrays), Pandas (data manipulation), and Matplotlib (data visualization) — that turns Python into a powerhouse for data analysis and scientific computing."
        ),

        heading("1. NumPy (Numerical Python)"),

        text(
            "NumPy provides the ndarray (N-dimensional array) object, which stores homogeneous data in contiguous memory blocks, enabling fast vectorised mathematical operations written in C."
        ),

        code(
            `import numpy as np

# Creating NumPy arrays
a = np.array([1, 2, 3, 4, 5])
b = np.array([10, 20, 30, 40, 50])

# Vectorised Arithmetic (No for-loops required)
print("Addition:", a + b)           # [11, 22, 33, 44, 55]
print("Multiplication:", a * 2)     # [ 2,  4,  6,  8, 10]

# 2D Array creation and aggregation
matrix = np.array([[1, 2, 3], [4, 5, 6]])
print("Mean:", np.mean(matrix),
print("Standard Deviation:", np.std(matrix),
print("Matrix Reshape (3x2):\\n", matrix.reshape(3, 2),`,
            "python",
            "NumPy Vectorization"
        ),

        heading("2. Pandas (Data Analysis & Manipulation)"),

        text(
            "Pandas provides two primary data structures: Series (1D labeled array) and DataFrame (2D tabular labeled data structure with columns of potentially different types)."
        ),

        code(
            `import pandas as pd

# Creating DataFrame from a dictionary
data = {
    "Name": ["Aakash", "Bhavna", "Chetan", "Deepa"],
    "Department": ["IT", "HR", "IT", "Finance"],
    "Salary": [65000, 52000, 72000, 58000],
    "Experience": [3, 2, 5, 4]
}
df = pd.DataFrame(data)

# Filtering and Aggregation
it_staff = df[df["Department"] == "IT"]
print("IT Employees:\\n", it_staff)

avg_salary_by_dept = df.groupby("Department")["Salary"].mean()
print("\\nAverage Salary by Dept:\\n", avg_salary_by_dept)

# Statistical Summary
print("\\nSummary Statistics:\\n", df.describe(),`,
            "python",
            "Pandas DataFrame Operations"
        ),

        heading("3. Matplotlib (Data Visualization)"),

        code(
            `import matplotlib.pyplot as plt

# Data points
semesters = ["Sem 1", "Sem 2", "Sem 3", "Sem 4", "Sem 5"]
spi_scores = [7.8, 8.2, 8.5, 8.9, 9.2]

# Generating a line plot
plt.figure(figsize=(8, 4),
plt.plot(semesters, spi_scores, marker='o', color='b', linestyle='--', linewidth=2)
plt.title("Academic Performance Growth")
plt.xlabel("BCA Semester")
plt.ylabel("SPI Score")
plt.grid(True)

# Save plot to image file
plt.savefig("academic_growth.png")
# plt.show()  # Display interactively`,
            "python",
            "Matplotlib Plotting"
        ),

        keyPoints([
            "NumPy arrays (ndarray) execute vectorised math operations much faster than Python lists.",
            "Pandas Series is 1-dimensional; DataFrame is a 2-dimensional tabular structure.",
            "Pandas handles missing data using dropna() and fillna(), and groups data using groupby().",
            "Matplotlib is the foundation for creating line, bar, scatter, and histogram charts.",
            "The NumPy + Pandas + Matplotlib stack powers modern machine learning pipelines.",
        ]),
    ],

    {
        summary:
            "Explore foundational data science tools: NumPy vectorised ndarrays, Pandas DataFrames/Series data manipulation, and Matplotlib plotting.",
        minutes: 14,
        tags: ["numpy", "pandas", "matplotlib", "data-science", "analytics", "important"],

        mcqs: [
            mcq(
                "Why are NumPy ndarrays faster than standard Python lists for numeric computations?",
                ["They use dynamic typing", "They store homogeneous data in contiguous memory with C-speed vectorization", "They do not allocate memory", "They are interpreted line-by-line"],
                1,
                "NumPy stores data in contiguous memory buffers executed via optimized compiled C routines."
            ),
            mcq(
                "In Pandas, a two-dimensional labeled tabular data structure with columns of different types is called a:",
                ["Series", "DataFrame", "Panel", "ndarray"],
                1,
                "A DataFrame is Pandas' primary 2D tabular data structure."
            ),
            mcq(
                "Which Pandas method generates summary statistics (mean, std, min, max) for numeric columns?",
                ["df.info()", "df.describe()", "df.summary()", "df.aggregate()"],
                1,
                "df.describe() outputs descriptive statistical summaries for numeric columns."
            ),
            mcq(
                "Which Matplotlib function renders and displays the created figure window?",
                ["plt.display()", "plt.render()", "plt.show()", "plt.draw()"],
                2,
                "plt.show() renders and displays the interactive plotting window."
            ),
        ],

        questions: [
            qa(
                "What is NumPy and why is it preferred over Python lists for numerical operations?",
                "NumPy (Numerical Python) is the foundational scientific computing library in Python. It is preferred over standard lists because: (1) Contiguous Memory: NumPy arrays (ndarrays) store elements of uniform data types in continuous memory blocks, avoiding Python's object pointer overhead. (2) Vectorization: Arithmetic operations apply directly across entire arrays without explicit for-loops. (3) Performance: Core array operations are implemented in optimized C/Fortran routines, achieving speeds orders of magnitude faster than standard lists.",
                4
            ),
            qa(
                "Explain the role of Pandas Series and DataFrames in data analysis with examples.",
                "Pandas provides two fundamental data structures: (1) Series: A one-dimensional labeled array capable of holding any data type (e.g., s = pd.Series([10, 20, 30], index=['a', 'b', 'c']),. (2) DataFrame: A two-dimensional, size-mutable tabular data structure with labeled axes (rows and columns). DataFrames provide powerful methods for reading CSV/SQL data (pd.read_csv(), handling missing values (dropna(), fillna(), filtering rows (df[df['age'] > 20]), and aggregating metrics (df.groupby('dept')['salary'].mean(),.",
                4
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit2Topics = [
    oopPython,
    advancedPythonOOP,
    exceptionAndFiles,
    databaseConnectivity,
    dataScienceBasics,
];
