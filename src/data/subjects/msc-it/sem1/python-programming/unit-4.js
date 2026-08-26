/* =========================================================
   MSc-IT • SEM 1 • Python Programming
   UNIT 4 — Additional Features of Python
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
   TOPIC 1 — Object-Oriented Programming in Python
========================================================= */

const oopInPython = createTopic(
    "object-oriented-programming-in-python",
    "Object-Oriented Programming in Python",

    [
        definition(
            "Object-Oriented Programming (OOP)",
            "A programming paradigm that organises code into objects — self-contained units that bundle data (attributes) and behaviour (methods) together. Python supports all four pillars of OOP: encapsulation, abstraction, inheritance and polymorphism."
        ),

        text(
            "Everything in Python is an object — integers, strings, lists, functions and even classes themselves. OOP allows you to model real-world entities such as students, bank accounts or vehicles as software objects, making code more modular, reusable and easier to maintain."
        ),

        heading("Classes and Objects"),

        definition(
            "Class",
            "A blueprint or template that defines the attributes and methods that objects created from it will have."
        ),

        definition(
            "Object",
            "An instance of a class — a concrete entity created from the class blueprint with its own set of attribute values."
        ),

        code(
            `# Defining a class
class Student:
    # Class variable (shared by all instances)
    university = "Gujarat University"
    
    # Constructor (initialiser)
    def __init__(self, name, roll_no, course):
        # Instance variables (unique to each object)
        self.name = name
        self.roll_no = roll_no
        self.course = course
        self.marks = []
    
    # Instance method
    def add_marks(self, mark):
        self.marks.append(mark)
    
    def average(self):
        if not self.marks:
            return 0
        return sum(self.marks) / len(self.marks)
    
    # String representation
    def __str__(self):
        return f"{self.name} ({self.roll_no}) - {self.course}"

# Creating objects
s1 = Student("Rahul", "M001", "MSc IT")
s2 = Student("Priya", "M002", "MSc IT")

s1.add_marks(85)
s1.add_marks(92)
s2.add_marks(95)

print(s1)              # Rahul (M001) - MSc IT
print(s1.average())    # 88.5
print(s2.average())    # 95.0
print(s1.university)   # Gujarat University`,
            "python",
            "Class definition and object creation"
        ),

        heading("The self Parameter"),

        definition(
            "self",
            "A reference to the current instance of the class. It is the first parameter of every instance method and is used to access instance variables and other methods. Python passes it automatically when you call a method on an object."
        ),

        note(
            "The name 'self' is a convention, not a keyword. You could use any name, but using self is strongly recommended because every Python developer expects it. When you write s1.add_marks(85), Python internally calls Student.add_marks(s1, 85).",
            "tip",
            "Convention"
        ),

        heading("The __init__ Method"),

        definition(
            "__init__",
            "The constructor method that is automatically called when a new object is created. It initialises the object's attributes. The double underscores on both sides are called dunder (double underscore) methods."
        ),

        heading("Types of Variables and Methods"),

        table(
            ["Type", "Defined", "Accessed", "Shared?"],
            [
                ["Class variable", "Inside class, outside methods", "ClassName.var or self.var", "Yes — shared by all instances"],
                ["Instance variable", "Inside __init__ or methods using self", "self.var", "No — unique to each instance"],
                ["Instance method", "def method(self, ...)", "obj.method()", "Operates on instance data"],
                ["Class method", "@classmethod, def method(cls, ...)", "ClassName.method()", "Operates on class data"],
                ["Static method", "@staticmethod, def method(...)", "ClassName.method()", "No access to class or instance"],
            ]
        ),

        code(
            `class Employee:
    company = "TechCorp"  # Class variable
    count = 0             # Class variable
    
    def __init__(self, name, salary):
        self.name = name          # Instance variable
        self.salary = salary      # Instance variable
        Employee.count += 1
    
    @classmethod
    def get_company(cls):
        return cls.company
    
    @classmethod
    def from_string(cls, data):
        name, salary = data.split("-")
        return cls(name, int(salary))
    
    @staticmethod
    def is_valid_salary(salary):
        return salary > 0

# Usage
e1 = Employee("Rahul", 50000)
e2 = Employee.from_string("Priya-60000")

print(Employee.count)          # 2
print(Employee.get_company())  # TechCorp
print(Employee.is_valid_salary(50000))  # True`,
            "python",
            "Class methods and static methods"
        ),

        heading("Inheritance"),

        definition(
            "Inheritance",
            "A mechanism where a new class (child/derived) acquires the attributes and methods of an existing class (parent/base). It promotes code reuse and establishes an 'is-a' relationship."
        ),

        code(
            `# Parent class
class Animal:
    def __init__(self, name):
        self.name = name
    
    def speak(self):
        return f"{self.name} makes a sound"

# Child class
class Dog(Animal):
    def __init__(self, name, breed):
        super().__init__(name)  # Call parent constructor
        self.breed = breed
    
    def speak(self):  # Method overriding
        return f"{self.name} barks!"

class Cat(Animal):
    def speak(self):  # Method overriding
        return f"{self.name} meows!"

# Usage
d = Dog("Bruno", "Labrador")
c = Cat("Whiskers")
a = Animal("Generic")

print(d.speak())  # Bruno barks!
print(c.speak())  # Whiskers meows!
print(a.speak())  # Generic makes a sound
print(d.breed)    # Labrador

# Check inheritance
print(isinstance(d, Dog))     # True
print(isinstance(d, Animal))  # True
print(issubclass(Dog, Animal))  # True`,
            "python",
            "Inheritance and method overriding"
        ),

        heading("Multiple Inheritance and MRO"),

        code(
            `class A:
    def greet(self):
        return "Hello from A"

class B(A):
    def greet(self):
        return "Hello from B"

class C(A):
    def greet(self):
        return "Hello from C"

class D(B, C):
    pass

d = D()
print(d.greet())  # Hello from B

# Method Resolution Order
print(D.__mro__)
# (<class 'D'>, <class 'B'>, <class 'C'>, <class 'A'>, <class 'object'>)`,
            "python",
            "Multiple inheritance and MRO"
        ),

        note(
            "Python uses the C3 linearisation algorithm to determine the Method Resolution Order (MRO). You can view it using ClassName.__mro__ or ClassName.mro(). The super() function follows the MRO to find the next method in the chain.",
            "exam",
            "Frequently Asked"
        ),

        heading("Encapsulation and Access Modifiers"),

        table(
            ["Modifier", "Syntax", "Access", "Name Mangling?"],
            [
                ["Public", "self.name", "Accessible from anywhere", "No"],
                ["Protected", "self._name", "Convention: internal use only", "No"],
                ["Private", "self.__name", "Not directly accessible outside", "Yes"],
            ]
        ),

        code(
            `class BankAccount:
    def __init__(self, holder, balance):
        self.holder = holder        # Public
        self._bank = "SBI"         # Protected (convention)
        self.__balance = balance   # Private (name mangled)
    
    def get_balance(self):
        return self.__balance
    
    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount

acc = BankAccount("Rahul", 5000)
print(acc.holder)         # Rahul
print(acc._bank)          # SBI (accessible but discouraged)
print(acc.get_balance())  # 5000
# print(acc.__balance)    → AttributeError!
print(acc._BankAccount__balance)  # 5000 (name mangled access)`,
            "python",
            "Encapsulation with access modifiers"
        ),

        heading("Polymorphism"),

        definition(
            "Polymorphism",
            "The ability of different objects to respond to the same method call in their own way. In Python, polymorphism is achieved through method overriding and duck typing."
        ),

        code(
            `# Polymorphism through method overriding
def make_animal_speak(animal):
    print(animal.speak())

make_animal_speak(Dog("Bruno", "Lab"))  # Bruno barks!
make_animal_speak(Cat("Whiskers"))       # Whiskers meows!

# Duck typing — "If it walks like a duck and quacks like a duck"
class Duck:
    def quack(self):
        return "Quack!"

class Person:
    def quack(self):
        return "I'm imitating a duck!"

def make_it_quack(thing):
    print(thing.quack())

make_it_quack(Duck())    # Quack!
make_it_quack(Person())  # I'm imitating a duck!`,
            "python",
            "Polymorphism and duck typing"
        ),

        heading("Magic (Dunder) Methods"),

        table(
            ["Method", "Purpose", "Triggered By"],
            [
                ["__init__", "Constructor", "obj = ClassName()"],
                ["__str__", "Readable string representation", "print(obj), str(obj)"],
                ["__repr__", "Developer string representation", "repr(obj), console output"],
                ["__len__", "Length of object", "len(obj)"],
                ["__getitem__", "Index access", "obj[key]"],
                ["__add__", "Addition operator", "obj1 + obj2"],
                ["__eq__", "Equality comparison", "obj1 == obj2"],
                ["__lt__", "Less than comparison", "obj1 < obj2"],
            ]
        ),

        code(
            `class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    
    def __str__(self):
        return f"Vector({self.x}, {self.y})"
    
    def __add__(self, other):
        return Vector(self.x + other.x, self.y + other.y)
    
    def __eq__(self, other):
        return self.x == other.x and self.y == other.y
    
    def __len__(self):
        return int((self.x**2 + self.y**2)**0.5)

v1 = Vector(3, 4)
v2 = Vector(1, 2)

print(v1 + v2)   # Vector(4, 6)
print(v1 == v2)  # False
print(len(v1))   # 5`,
            "python",
            "Operator overloading with dunder methods"
        ),

        keyPoints([
            "A class is a blueprint; an object is an instance created from that blueprint.",
            "__init__ is the constructor; self refers to the current instance.",
            "Inheritance allows a child class to reuse and override parent class methods.",
            "Python supports multiple inheritance with C3 linearisation for MRO.",
            "Polymorphism allows different objects to respond to the same method call differently.",
        ]),
    ],

    {
        summary:
            "Master classes, objects, inheritance, encapsulation, polymorphism, class/static methods and magic methods in Python OOP.",
        minutes: 15,
        tags: ["python", "oop", "classes", "inheritance", "polymorphism", "important"],

        mcqs: [
            mcq(
                "What is the purpose of the __init__ method?",
                ["To delete an object", "To initialise an object's attributes", "To print an object", "To import a module"],
                1,
                "__init__ is the constructor that initialises attributes when a new object is created."
            ),
            mcq(
                "What does the self parameter refer to?",
                ["The class itself", "The current instance", "The parent class", "A global variable"],
                1,
                "self refers to the current instance of the class."
            ),
            mcq(
                "Which decorator is used to define a class method?",
                ["@staticmethod", "@classmethod", "@property", "@abstractmethod"],
                1,
                "The @classmethod decorator defines a method that receives the class as its first argument."
            ),
            mcq(
                "What does super().__init__() do in a child class?",
                ["Creates a new parent object", "Calls the parent class constructor", "Deletes the parent class", "Overrides the parent method"],
                1,
                "super().__init__() calls the parent class's constructor to initialise inherited attributes."
            ),
            mcq(
                "A variable prefixed with double underscore (__) is:",
                ["Public", "Protected", "Private (name mangled)", "Constant"],
                2,
                "Double underscore triggers name mangling, making the variable effectively private."
            ),
            mcq(
                "Python's approach to polymorphism where any object with the right method can be used is called:",
                ["Static typing", "Method overloading", "Duck typing", "Type casting"],
                2,
                "Duck typing means if an object has the required method, it can be used regardless of its class."
            ),
        ],

        questions: [
            qa(
                "Explain the four pillars of OOP with examples in Python.",
                "Encapsulation bundles data and methods together and restricts direct access using private attributes (self.__balance) with public getter methods. Abstraction hides complex implementation details and shows only the interface — a user calls account.deposit(500) without knowing the internal logic. Inheritance allows a child class to acquire attributes and methods from a parent class — class Dog(Animal) inherits the name attribute and can override the speak() method. Polymorphism allows different objects to respond to the same method call differently — both Dog and Cat objects can call speak() but produce different outputs.",
                5
            ),
            qa(
                "Differentiate between instance methods, class methods and static methods.",
                "An instance method takes self as its first parameter and can access and modify instance variables and class variables. It is called on an object: obj.method(). A class method takes cls as its first parameter, is decorated with @classmethod, and can access and modify class variables but not instance variables. It is called on the class: ClassName.method(). A static method takes neither self nor cls, is decorated with @staticmethod, and cannot access class or instance data. It behaves like a regular function but is placed inside the class for logical grouping. Class methods are often used as alternative constructors.",
                5
            ),
            qa(
                "What is multiple inheritance? Explain MRO with an example.",
                "Multiple inheritance occurs when a class inherits from more than one parent class. For example, class D(B, C) inherits from both B and C. If both B and C define the same method, Python uses the Method Resolution Order (MRO) to determine which one to call. Python uses the C3 linearisation algorithm. For class D(B, C) where both B and C inherit from A, the MRO is D → B → C → A → object. This can be viewed using D.__mro__. The super() function follows this order to find the next method in the chain.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — File Handling in Python
========================================================= */

const fileHandling = createTopic(
    "file-handling-in-python",
    "File Handling in Python",

    [
        definition(
            "File Handling",
            "The process of creating, reading, writing, updating and deleting files on the storage device using Python's built-in functions and methods."
        ),

        text(
            "Files provide persistent storage — data that survives after the program ends. Python makes file handling simple with the built-in open() function and the with statement, which ensures files are properly closed even if errors occur."
        ),

        heading("Opening and Closing Files"),

        table(
            ["Mode", "Meaning", "File Exists", "File Does Not Exist"],
            [
                ["'r'", "Read (default)", "Opens for reading", "Raises FileNotFoundError"],
                ["'w'", "Write", "Overwrites the file", "Creates a new file"],
                ["'a'", "Append", "Opens for appending", "Creates a new file"],
                ["'x'", "Exclusive creation", "Raises FileExistsError", "Creates a new file"],
                ["'b'", "Binary mode", "Used with r, w, a (e.g., 'rb')", "—"],
                ["'t'", "Text mode (default)", "Used with r, w, a", "—"],
                ["'+'", "Read and write", "Used with r, w, a (e.g., 'r+')", "—"],
            ]
        ),

        code(
            `# Open and close manually
f = open("example.txt", "w")
f.write("Hello, World!")
f.close()

# Better: use the with statement (auto-closes)
with open("example.txt", "r") as f:
    content = f.read()
    print(content)  # Hello, World!

# File is automatically closed after the with block
print(f.closed)  # True`,
            "python",
            "Opening and closing files"
        ),

        note(
            "Always use the with statement when working with files. It guarantees that the file is properly closed even if an exception occurs inside the block. Forgetting to close a file can lead to data loss or resource leaks.",
            "warning",
            "Best Practice"
        ),

        heading("Reading Files"),

        table(
            ["Method", "Returns", "Use Case"],
            [
                ["read()", "Entire file as one string", "Small files"],
                ["read(n)", "First n characters", "Reading in chunks"],
                ["readline()", "One line as a string", "Reading line by line"],
                ["readlines()", "All lines as a list of strings", "Processing all lines at once"],
                ["for line in file", "Iterates line by line", "Memory-efficient for large files"],
            ]
        ),

        code(
            `# Write sample data first
with open("students.txt", "w") as f:
    f.write("Rahul\\nPriya\\nAmit\\nSneha\\n")

# read() — entire file
with open("students.txt", "r") as f:
    print(f.read())

# readline() — one line at a time
with open("students.txt", "r") as f:
    print(f.readline())  # Rahul
    print(f.readline())  # Priya

# readlines() — list of lines
with open("students.txt", "r") as f:
    lines = f.readlines()
    print(lines)  # ['Rahul\\n', 'Priya\\n', 'Amit\\n', 'Sneha\\n']

# Iterating (most memory-efficient)
with open("students.txt", "r") as f:
    for line in f:
        print(line.strip())  # Removes trailing newline`,
            "python",
            "Different ways to read files"
        ),

        heading("Writing and Appending"),

        code(
            `# Write mode — overwrites existing content
with open("output.txt", "w") as f:
    f.write("Line 1\\n")
    f.write("Line 2\\n")
    f.writelines(["Line 3\\n", "Line 4\\n"])

# Append mode — adds to the end
with open("output.txt", "a") as f:
    f.write("Line 5\\n")

# Read to verify
with open("output.txt", "r") as f:
    print(f.read())
# Line 1
# Line 2
# Line 3
# Line 4
# Line 5`,
            "python",
            "Writing and appending to files"
        ),

        heading("Working with CSV Files"),

        code(
            `import csv

# Writing CSV
with open("data.csv", "w", newline="") as f:
    writer = csv.writer(f)
    writer.writerow(["Name", "Age", "Marks"])
    writer.writerow(["Rahul", 22, 85])
    writer.writerow(["Priya", 21, 92])

# Reading CSV
with open("data.csv", "r") as f:
    reader = csv.reader(f)
    for row in reader:
        print(row)
# ['Name', 'Age', 'Marks']
# ['Rahul', '22', '85']
# ['Priya', '21', '92']

# Using DictReader
with open("data.csv", "r") as f:
    reader = csv.DictReader(f)
    for row in reader:
        print(f"{row['Name']} scored {row['Marks']}")`,
            "python",
            "Working with CSV files"
        ),

        heading("Working with JSON Files"),

        code(
            `import json

# Writing JSON
data = {
    "name": "Rahul",
    "age": 22,
    "courses": ["Python", "DBMS", "AI"]
}

with open("data.json", "w") as f:
    json.dump(data, f, indent=2)

# Reading JSON
with open("data.json", "r") as f:
    loaded = json.load(f)
    print(loaded["name"])     # Rahul
    print(loaded["courses"])  # ['Python', 'DBMS', 'AI']`,
            "python",
            "Working with JSON files"
        ),

        heading("File Pointer Methods"),

        table(
            ["Method", "Purpose"],
            [
                ["tell()", "Returns the current position of the file pointer"],
                ["seek(offset)", "Moves the file pointer to the specified position"],
                ["seek(0)", "Moves to the beginning of the file"],
            ]
        ),

        heading("File and Directory Operations (os module)"),

        table(
            ["Operation", "Code"],
            [
                ["Check if file exists", "os.path.exists('file.txt')"],
                ["Get file size", "os.path.getsize('file.txt')"],
                ["Rename a file", "os.rename('old.txt', 'new.txt')"],
                ["Delete a file", "os.remove('file.txt')"],
                ["Create a directory", "os.mkdir('new_folder')"],
                ["List directory contents", "os.listdir('.')"],
                ["Get current directory", "os.getcwd()"],
                ["Change directory", "os.chdir('/path')"],
            ]
        ),

        keyPoints([
            "Always use the with statement to open files — it ensures proper closure.",
            "Read modes: read() for entire file, readline() for one line, readlines() for a list.",
            "Write mode ('w') overwrites; append mode ('a') adds to the end.",
            "The csv and json modules handle structured data files efficiently.",
            "The os module provides functions for file and directory operations.",
        ]),
    ],

    {
        summary:
            "Learn to read, write and append files using the with statement, and work with CSV, JSON and the os module.",
        minutes: 12,
        tags: ["python", "file-handling", "csv", "json", "important"],

        mcqs: [
            mcq(
                "Which mode overwrites an existing file?",
                ["'r'", "'a'", "'w'", "'x'"],
                2,
                "Write mode ('w') overwrites the file if it exists, or creates a new one."
            ),
            mcq(
                "What does the with statement ensure when working with files?",
                ["Faster reading", "The file is automatically closed", "The file is encrypted", "The file is compressed"],
                1,
                "The with statement guarantees the file is properly closed even if an exception occurs."
            ),
            mcq(
                "Which method reads the entire file as a single string?",
                ["readline()", "readlines()", "read()", "readall()"],
                2,
                "read() returns the entire file content as one string."
            ),
            mcq(
                "What does json.dump() do?",
                ["Reads JSON from a file", "Writes a Python object to a file as JSON", "Parses a JSON string", "Deletes a JSON file"],
                1,
                "json.dump() serialises a Python object and writes it to a file in JSON format."
            ),
            mcq(
                "What happens when you open a non-existent file in 'r' mode?",
                ["A new file is created", "Returns None", "Raises FileNotFoundError", "Returns an empty string"],
                2,
                "Read mode raises FileNotFoundError if the file does not exist."
            ),
        ],

        questions: [
            qa(
                "Explain the different file opening modes in Python.",
                "Python provides several file opening modes. The 'r' mode opens a file for reading and raises FileNotFoundError if the file does not exist. The 'w' mode opens for writing, overwriting any existing content, or creates a new file. The 'a' mode opens for appending, adding new content at the end without erasing existing data. The 'x' mode creates a new file exclusively and raises FileExistsError if the file already exists. The 'b' suffix opens in binary mode for non-text files like images. The '+' suffix allows both reading and writing. The default mode is 'rt' (read text).",
                5
            ),
            qa(
                "Why is the with statement preferred for file handling?",
                "The with statement is preferred because it guarantees that the file is properly closed after the block of code finishes executing, even if an exception occurs inside the block. Without the with statement, you must manually call f.close(), and if an error occurs before that line, the file remains open, potentially causing data loss or resource leaks. The with statement uses a context manager that automatically handles the setup and teardown of the file resource.",
                4
            ),
            qa(
                "How do you read and write CSV files in Python?",
                "To write a CSV file, import the csv module, open the file in write mode with newline='', create a csv.writer object, and use writerow() to write individual rows or writerows() for multiple rows. To read a CSV file, open it in read mode, create a csv.reader object, and iterate over it to get each row as a list. For more convenient access by column name, use csv.DictReader which returns each row as a dictionary with column headers as keys.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — Modules and Packages
========================================================= */

const modulesAndPackages = createTopic(
    "modules-and-packages",
    "Modules and Packages",

    [
        definition(
            "Module",
            "A Python file (.py) containing definitions of functions, classes and variables that can be imported and reused in other Python programs."
        ),

        definition(
            "Package",
            "A directory containing multiple modules and a special __init__.py file that tells Python to treat the directory as a package."
        ),

        text(
            "Modules and packages are the foundation of code organisation and reuse in Python. The Python Standard Library provides hundreds of built-in modules, and thousands more are available through PyPI (Python Package Index)."
        ),

        heading("Importing Modules"),

        table(
            ["Syntax", "Usage", "Example"],
            [
                ["import module", "module.function()", "import math; math.sqrt(16)"],
                ["import module as alias", "alias.function()", "import numpy as np; np.array()"],
                ["from module import func", "func()", "from math import sqrt; sqrt(16)"],
                ["from module import *", "func() (all public names)", "from math import *"],
            ]
        ),

        code(
            `# Method 1: Import entire module
import math
print(math.sqrt(16))     # 4.0
print(math.pi)           # 3.141592653589793

# Method 2: Import with alias
import datetime as dt
print(dt.datetime.now())

# Method 3: Import specific items
from os.path import exists, join
print(exists("test.txt"))

# Method 4: Import everything (not recommended)
from math import *
print(sqrt(25))  # 5.0`,
            "python",
            "Different ways to import modules"
        ),

        note(
            "Avoid using 'from module import *' in production code. It pollutes the namespace and makes it unclear where names come from, which can lead to naming conflicts and harder debugging.",
            "warning",
            "Best Practice"
        ),

        heading("Creating Your Own Module"),

        code(
            `# Save this as mymath.py
"""A simple math utilities module."""

def add(a, b):
    """Return the sum of a and b."""
    return a + b

def factorial(n):
    """Return the factorial of n."""
    if n <= 1:
        return 1
    return n * factorial(n - 1)

PI = 3.14159

# This block runs only when the file is executed directly
if __name__ == "__main__":
    print("Testing mymath module")
    print(add(3, 4))       # 7
    print(factorial(5))    # 120`,
            "python",
            "Creating a custom module (mymath.py)"
        ),

        code(
            `# In another file, use the module
import mymath

print(mymath.add(10, 20))     # 30
print(mymath.factorial(6))    # 720
print(mymath.PI)              # 3.14159`,
            "python",
            "Using the custom module"
        ),

        heading("The __name__ Variable"),

        definition(
            "__name__",
            "A special built-in variable that equals '__main__' when the script is run directly, and equals the module name when it is imported. Used to write test code that runs only when the file is executed directly."
        ),

        heading("Creating a Package"),

        code(
            `# Directory structure:
# mypackage/
#     __init__.py
#     arithmetic.py
#     geometry.py

# arithmetic.py
def add(a, b): return a + b
def subtract(a, b): return a - b

# geometry.py
def area_circle(r): return 3.14159 * r ** 2
def area_rect(l, b): return l * b

# __init__.py (can be empty or contain imports)
from .arithmetic import add, subtract
from .geometry import area_circle, area_rect

# Usage in another file:
from mypackage import add, area_circle
print(add(3, 4))         # 7
print(area_circle(5))    # 78.53975`,
            "python",
            "Creating and using a package"
        ),

        heading("Important Standard Library Modules"),

        table(
            ["Module", "Purpose", "Common Functions"],
            [
                ["math", "Mathematical functions", "sqrt(), ceil(), floor(), factorial(), pi"],
                ["os", "Operating system interface", "getcwd(), listdir(), mkdir(), remove()"],
                ["sys", "System-specific parameters", "argv, exit(), version"],
                ["datetime", "Date and time handling", "datetime.now(), timedelta, strftime()"],
                ["json", "JSON encoding and decoding", "dumps(), loads(), dump(), load()"],
                ["csv", "CSV file reading and writing", "reader(), writer(), DictReader()"],
                ["re", "Regular expressions", "match(), search(), findall(), sub()"],
                ["random", "Random number generation", "randint(), choice(), shuffle(), random()"],
                ["collections", "Specialised containers", "Counter, defaultdict, namedtuple, deque"],
                ["itertools", "Iterator building blocks", "chain, combinations, permutations"],
            ]
        ),

        heading("Installing Third-Party Packages"),

        code(
            `# Install a package
pip install requests

# Install specific version
pip install requests==2.31.0

# Save dependencies
pip freeze > requirements.txt

# Install from requirements
pip install -r requirements.txt

# List installed packages
pip list`,
            "bash",
            "Managing third-party packages with pip"
        ),

        keyPoints([
            "A module is a .py file; a package is a directory with __init__.py.",
            "Use import module or from module import function to reuse code.",
            "The if __name__ == '__main__' block runs only when the file is executed directly.",
            "Python's standard library provides hundreds of useful modules out of the box.",
            "pip installs third-party packages from the Python Package Index (PyPI).",
        ]),
    ],

    {
        summary:
            "Learn to create and import modules and packages, understand __name__, and explore important standard library modules.",
        minutes: 11,
        tags: ["python", "modules", "packages", "import", "important"],

        mcqs: [
            mcq(
                "What does 'import math as m' allow you to do?",
                ["Import only the math function", "Use m.sqrt() instead of math.sqrt()", "Rename the math module permanently", "Delete the math module"],
                1,
                "The as keyword creates an alias, so you can use m.sqrt() instead of math.sqrt()."
            ),
            mcq(
                "What is __name__ equal to when a script is run directly?",
                ["The module name", "'__main__'", "None", "'__script__'"],
                1,
                "When a script is run directly, __name__ is set to '__main__'."
            ),
            mcq(
                "What file must a package directory contain?",
                ["main.py", "setup.py", "__init__.py", "config.py"],
                2,
                "A package directory must contain an __init__.py file for Python to recognise it as a package."
            ),
            mcq(
                "Which module provides regular expression support?",
                ["regex", "re", "regexp", "pattern"],
                1,
                "The re module provides regular expression operations in Python."
            ),
            mcq(
                "Why is 'from module import *' discouraged?",
                ["It is slower", "It pollutes the namespace", "It only imports functions", "It requires pip"],
                1,
                "Importing everything with * pollutes the namespace and can cause naming conflicts."
            ),
        ],

        questions: [
            qa(
                "Explain the different ways to import a module in Python.",
                "There are four main ways to import a module. First, import module imports the entire module and you access items using dot notation: import math; math.sqrt(16). Second, import module as alias creates a shorter name: import numpy as np; np.array(). Third, from module import function imports specific items directly: from math import sqrt; sqrt(16). Fourth, from module import * imports all public names into the current namespace, but this is discouraged because it pollutes the namespace and makes code harder to debug.",
                5
            ),
            qa(
                "What is the purpose of if __name__ == '__main__'? Explain with an example.",
                "The __name__ variable is a special built-in variable that Python sets automatically. When a Python file is run directly as a script, __name__ is set to '__main__'. When the file is imported as a module, __name__ is set to the module's name. The if __name__ == '__main__' block allows you to write test code or a main program that runs only when the file is executed directly, not when it is imported. For example, a module mymath.py can define functions and include test code inside this block. When another file imports mymath, the test code does not run, but when mymath.py is run directly, the tests execute.",
                5
            ),
            qa(
                "List five important standard library modules and their uses.",
                "The math module provides mathematical functions like sqrt(), ceil(), floor() and constants like pi. The os module provides operating system interface functions like getcwd(), listdir() and mkdir(). The datetime module handles dates and times with datetime.now() and timedelta. The json module encodes and decodes JSON data using dumps(), loads(), dump() and load(). The random module generates random numbers with randint(), choice() and shuffle(). These modules come built-in with Python and require no installation.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — Iterators and Generators
========================================================= */

const iteratorsAndGenerators = createTopic(
    "iterators-and-generators",
    "Iterators and Generators",

    [
        definition(
            "Iterable",
            "Any object that can return an iterator. Examples include lists, tuples, strings, dictionaries and sets. An iterable implements the __iter__() method."
        ),

        definition(
            "Iterator",
            "An object that produces values one at a time using the __next__() method. It maintains internal state to remember its position. An iterator implements both __iter__() and __next__() methods."
        ),

        text(
            "Iterators and generators are powerful tools for working with sequences of data in a memory-efficient way. Instead of loading an entire dataset into memory, they produce one item at a time, which is essential when dealing with large files, infinite sequences or streaming data."
        ),

        heading("How Iteration Works Internally"),

        code(
            `# What a for loop does behind the scenes
fruits = ["apple", "banana", "cherry"]

# Step 1: Get an iterator
it = iter(fruits)  # Calls fruits.__iter__()

# Step 2: Call next() repeatedly
print(next(it))  # apple   (calls it.__next__())
print(next(it))  # banana
print(next(it))  # cherry

# Step 3: StopIteration is raised when exhausted
# next(it)  → raises StopIteration

# The for loop handles all this automatically:
for fruit in fruits:
    print(fruit)`,
            "python",
            "How iteration works internally"
        ),

        heading("Creating a Custom Iterator"),

        code(
            `class CountDown:
    def __init__(self, start):
        self.current = start
    
    def __iter__(self):
        return self
    
    def __next__(self):
        if self.current <= 0:
            raise StopIteration
        value = self.current
        self.current -= 1
        return value

# Usage
for num in CountDown(5):
    print(num, end=" ")
# Output: 5 4 3 2 1`,
            "python",
            "Custom iterator class"
        ),

        heading("Generators"),

        definition(
            "Generator",
            "A special type of function that uses the yield keyword instead of return to produce a sequence of values one at a time. Each call to next() resumes execution from where it last yielded."
        ),

        code(
            `# Generator function
def countdown(n):
    while n > 0:
        yield n
        n -= 1

# Using the generator
for num in countdown(5):
    print(num, end=" ")
# Output: 5 4 3 2 1

# Manual iteration
gen = countdown(3)
print(next(gen))  # 3
print(next(gen))  # 2
print(next(gen))  # 1
# next(gen) → StopIteration`,
            "python",
            "Generator function with yield"
        ),

        heading("yield versus return"),

        table(
            ["Aspect", "return", "yield"],
            [
                ["Function type", "Regular function", "Generator function"],
                ["Execution", "Terminates the function", "Pauses the function"],
                ["State", "Local variables are destroyed", "Local variables are preserved"],
                ["Values", "Returns one value", "Can yield multiple values over time"],
                ["Memory", "Computes all values at once", "Computes one value at a time (lazy)"],
            ]
        ),

        heading("Generator Expressions"),

        definition(
            "Generator Expression",
            "A concise syntax for creating generators, similar to list comprehension but using parentheses instead of square brackets. Syntax: (expression for item in iterable if condition)."
        ),

        code(
            `# List comprehension — creates entire list in memory
squares_list = [x**2 for x in range(1000000)]  # Uses lots of memory

# Generator expression — produces values one at a time
squares_gen = (x**2 for x in range(1000000))   # Uses minimal memory

print(next(squares_gen))  # 0
print(next(squares_gen))  # 1
print(next(squares_gen))  # 4

# Common use: passing to functions that accept iterables
total = sum(x**2 for x in range(100))
print(total)  # 328350`,
            "python",
            "Generator expressions"
        ),

        heading("Practical Example: Reading Large Files"),

        code(
            `# Memory-efficient file reading with a generator
def read_large_file(filepath):
    with open(filepath, "r") as f:
        for line in f:
            yield line.strip()

# Process one line at a time — never loads entire file
for line in read_large_file("huge_log.txt"):
    if "ERROR" in line:
        print(line)`,
            "python",
            "Generator for memory-efficient file reading"
        ),

        heading("The yield from Statement"),

        code(
            `# yield from delegates to a sub-generator
def chain(*iterables):
    for it in iterables:
        yield from it

for item in chain([1, 2], [3, 4], [5]):
    print(item, end=" ")
# Output: 1 2 3 4 5`,
            "python",
            "yield from for sub-generators"
        ),

        note(
            "Generators can only be iterated once. After exhaustion, they produce no more values. If you need to iterate multiple times, create a new generator or use a list.",
            "warning",
            "Important"
        ),

        keyPoints([
            "An iterable has __iter__(); an iterator has both __iter__() and __next__().",
            "Generators use yield to produce values one at a time, preserving state between calls.",
            "Generator expressions (x**2 for x in range(n)) are memory-efficient alternatives to list comprehensions.",
            "Generators are ideal for processing large files, infinite sequences and streaming data.",
            "A generator can only be iterated once — after exhaustion, it must be recreated.",
        ]),
    ],

    {
        summary:
            "Understand the iterator protocol, create custom iterators and generators, and use generator expressions for memory efficiency.",
        minutes: 12,
        tags: ["python", "iterators", "generators", "yield", "important"],

        mcqs: [
            mcq(
                "What method must an iterator implement?",
                ["__iter__() only", "__next__() only", "Both __iter__() and __next__()", "__len__()"],
                2,
                "An iterator must implement both __iter__() and __next__() methods."
            ),
            mcq(
                "What exception is raised when an iterator is exhausted?",
                ["IndexError", "ValueError", "StopIteration", "EndOfIterator"],
                2,
                "StopIteration is raised when next() is called on an exhausted iterator."
            ),
            mcq(
                "What keyword turns a function into a generator?",
                ["return", "yield", "generate", "produce"],
                1,
                "The yield keyword turns a regular function into a generator function."
            ),
            mcq(
                "What is the main advantage of generators over lists?",
                ["Faster execution", "Memory efficiency", "Easier syntax", "Support indexing"],
                1,
                "Generators produce values one at a time, using minimal memory regardless of sequence size."
            ),
            mcq(
                "A generator expression uses which brackets?",
                ["[ ]", "{ }", "( )", "< >"],
                2,
                "Generator expressions use parentheses: (x**2 for x in range(10))."
            ),
        ],

        questions: [
            qa(
                "Differentiate between an iterable and an iterator.",
                "An iterable is any object that can return an iterator by implementing the __iter__() method. Examples include lists, tuples, strings, dictionaries and sets. An iterator is an object that produces values one at a time by implementing both __iter__() and __next__() methods. The __next__() method returns the next value and raises StopIteration when exhausted. Every iterator is an iterable, but not every iterable is an iterator. For example, a list is iterable but not an iterator — you must call iter(list) to get an iterator from it.",
                5
            ),
            qa(
                "What is a generator? How does yield differ from return?",
                "A generator is a special function that uses the yield keyword to produce a sequence of values one at a time. When yield is encountered, the function pauses and returns the yielded value, preserving all local variables and the execution state. When next() is called again, execution resumes from where it left off. In contrast, return terminates the function completely and destroys all local variables. A function with return produces one value and exits, while a generator with yield can produce many values over multiple calls. Generators are memory-efficient because they compute values lazily.",
                5
            ),
            qa(
                "Explain generator expressions and their advantage over list comprehensions.",
                "A generator expression has the same syntax as a list comprehension but uses parentheses instead of square brackets: (x**2 for x in range(1000000)). The key advantage is memory efficiency. A list comprehension [x**2 for x in range(1000000)] creates a list of one million elements in memory all at once. A generator expression produces values one at a time on demand, using minimal memory regardless of the sequence size. Generator expressions are ideal when passing to functions like sum(), min() or max() that consume iterables: sum(x**2 for x in range(100)).",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 5 — Decorators and Regular Expressions
========================================================= */

const decoratorsAndRegex = createTopic(
    "decorators-and-regular-expressions",
    "Decorators and Regular Expressions",

    [
        heading("Part A: Decorators"),

        definition(
            "Decorator",
            "A function that takes another function as an argument, extends or modifies its behaviour, and returns a new function — all without modifying the original function's source code. Applied using the @decorator_name syntax."
        ),

        text(
            "Decorators are a powerful feature built on Python's support for first-class functions and closures. They are widely used in frameworks like Flask and Django for routing, authentication, logging and caching."
        ),

        heading("Understanding Closures"),

        definition(
            "Closure",
            "A nested function that captures and remembers variables from its enclosing scope even after the outer function has finished executing."
        ),

        code(
            `def outer(msg):
    def inner():
        print(f"Message: {msg}")
    return inner

greet = outer("Hello")
greet()  # Message: Hello
# 'msg' is remembered even though outer() has finished`,
            "python",
            "Closure example"
        ),

        heading("Creating a Simple Decorator"),

        code(
            `# Decorator function
def my_decorator(func):
    def wrapper(*args, **kwargs):
        print("Before function call")
        result = func(*args, **kwargs)
        print("After function call")
        return result
    return wrapper

# Applying the decorator
@my_decorator
def say_hello(name):
    print(f"Hello, {name}!")

say_hello("Rahul")
# Output:
# Before function call
# Hello, Rahul!
# After function call`,
            "python",
            "Simple decorator"
        ),

        heading("Practical Decorators"),

        code(
            `import time
from functools import wraps

# 1. Timer decorator
def timer(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"{func.__name__} took {end - start:.4f} seconds")
        return result
    return wrapper

@timer
def slow_function():
    time.sleep(1)
    return "Done"

slow_function()  # slow_function took 1.0012 seconds

# 2. Logging decorator
def log(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        print(f"Calling {func.__name__} with args={args}")
        result = func(*args, **kwargs)
        print(f"{func.__name__} returned {result}")
        return result
    return wrapper

@log
def add(a, b):
    return a + b

add(3, 4)
# Calling add with args=(3, 4)
# add returned 7`,
            "python",
            "Practical decorator examples"
        ),

        note(
            "Always use @wraps(func) from functools inside your decorator's wrapper function. It preserves the original function's name, docstring and other metadata. Without it, func.__name__ would show 'wrapper' instead of the original name.",
            "tip",
            "Best Practice"
        ),

        heading("Part B: Regular Expressions"),

        definition(
            "Regular Expression (Regex)",
            "A sequence of characters that defines a search pattern for matching, searching and manipulating text. Python provides regex support through the built-in re module."
        ),

        heading("Common Regex Patterns"),

        table(
            ["Pattern", "Matches", "Example"],
            [
                ["\\\\d", "Any digit (0-9)", "'\\\\d+' matches '123'"],
                ["\\\\D", "Any non-digit", "'\\\\D+' matches 'abc'"],
                ["\\\\w", "Word character (letter, digit, underscore)", "'\\\\w+' matches 'hello_42'"],
                ["\\\\W", "Non-word character", "'\\\\W' matches '@'"],
                ["\\\\s", "Whitespace (space, tab, newline)", "'\\\\s+' matches '   '"],
                ["\\\\S", "Non-whitespace", "'\\\\S+' matches 'hello'"],
                [".", "Any character except newline", "'a.b' matches 'acb'"],
                ["^", "Start of string", "'^Hello' matches 'Hello world'"],
                ["$", "End of string", "'world$' matches 'Hello world'"],
                ["*", "0 or more occurrences", "'ab*' matches 'a', 'ab', 'abb'"],
                ["+", "1 or more occurrences", "'ab+' matches 'ab', 'abb'"],
                ["?", "0 or 1 occurrence", "'ab?' matches 'a', 'ab'"],
                ["{n}", "Exactly n occurrences", "'\\\\d{3}' matches '123'"],
                ["[abc]", "Any one of a, b or c", "'[aeiou]' matches vowels"],
                ["[^abc]", "Any character except a, b, c", "'[^0-9]' matches non-digits"],
            ]
        ),

        heading("re Module Functions"),

        table(
            ["Function", "Purpose", "Returns"],
            [
                ["re.match(pattern, string)", "Match at the beginning of string", "Match object or None"],
                ["re.search(pattern, string)", "Search anywhere in string", "Match object or None"],
                ["re.findall(pattern, string)", "Find all non-overlapping matches", "List of strings"],
                ["re.finditer(pattern, string)", "Find all matches as iterator", "Iterator of Match objects"],
                ["re.sub(pattern, repl, string)", "Replace matches with repl", "New string"],
                ["re.split(pattern, string)", "Split string by pattern", "List of strings"],
            ]
        ),

        code(
            `import re

text = "Contact: rahul@email.com or priya@test.org. Call 9876543210."

# findall — extract all emails
emails = re.findall(r'[\\w.]+@[\\w.]+', text)
print(emails)  # ['rahul@email.com', 'priya@test.org']

# search — find first phone number
phone = re.search(r'\\d{10}', text)
if phone:
    print(f"Phone: {phone.group()}")  # Phone: 9876543210

# match — check from beginning
print(re.match(r'Contact', text))   # Match object
print(re.match(r'Call', text))      # None (not at beginning)

# sub — replace digits with X
cleaned = re.sub(r'\\d', 'X', text)
print(cleaned)
# Contact: rahul@email.com or priya@test.org. Call XXXXXXXXXX.

# split — split by non-word characters
words = re.split(r'\\W+', "Hello, World! Python is great.")
print(words)  # ['Hello', 'World', 'Python', 'is', 'great', '']`,
            "python",
            "Regular expression examples"
        ),

        heading("Practical Regex Examples"),

        code(
            `import re

# Validate email
def is_valid_email(email):
    pattern = r'^[\\w.+-]+@[\\w-]+\\.[\\w.]+$'
    return bool(re.match(pattern, email))

print(is_valid_email("rahul@email.com"))  # True
print(is_valid_email("invalid@.com"))     # False

# Validate Indian phone number
def is_valid_phone(phone):
    pattern = r'^[6-9]\\d{9}$'
    return bool(re.match(pattern, phone))

print(is_valid_phone("9876543210"))  # True
print(is_valid_phone("1234567890"))  # False

# Extract all URLs from text
text = "Visit https://python.org or http://example.com today"
urls = re.findall(r'https?://[\\w.]+', text)
print(urls)  # ['https://python.org', 'http://example.com']`,
            "python",
            "Practical regex validation"
        ),

        keyPoints([
            "Decorators extend function behaviour without modifying the original code.",
            "Use @wraps(func) from functools to preserve the original function's metadata.",
            "Regular expressions use patterns like \\d, \\w, \\s to match text.",
            "re.findall() returns all matches as a list; re.search() returns the first match.",
            "re.sub() replaces matched patterns and is useful for text cleaning.",
        ]),
    ],

    {
        summary:
            "Learn decorators for extending function behaviour and regular expressions for powerful text pattern matching and validation.",
        minutes: 13,
        tags: ["python", "decorators", "regex", "important"],

        mcqs: [
            mcq(
                "What symbol is used to apply a decorator?",
                ["#", "$", "@", "&"],
                2,
                "The @ symbol is used to apply a decorator: @decorator_name."
            ),
            mcq(
                "What does @wraps(func) do inside a decorator?",
                ["Speeds up the function", "Preserves the original function's metadata", "Caches the result", "Adds type checking"],
                1,
                "@wraps(func) preserves the original function's name, docstring and other attributes."
            ),
            mcq(
                "Which regex pattern matches any digit?",
                ["\\\\w", "\\\\d", "\\\\s", "\\\\D"],
                1,
                "\\d matches any single digit from 0 to 9."
            ),
            mcq(
                "What does re.findall() return?",
                ["A single Match object", "A list of all matching strings", "True or False", "A new string"],
                1,
                "re.findall() returns a list of all non-overlapping matches as strings."
            ),
            mcq(
                "What does re.sub(r'\\\\d', 'X', 'abc123') return?",
                ["'abc123'", "'abcXXX'", "'XXX'", "'abc'"],
                1,
                "re.sub replaces each digit with 'X', giving 'abcXXX'."
            ),
            mcq(
                "A closure is:",
                ["A way to close a file", "A nested function that remembers its enclosing scope", "A type of decorator", "A regex pattern"],
                1,
                "A closure is a nested function that captures variables from its enclosing scope."
            ),
        ],

        questions: [
            qa(
                "What is a decorator? Explain with a practical example.",
                "A decorator is a function that takes another function as an argument, extends its behaviour and returns a new function without modifying the original. It is applied using the @decorator_name syntax. For example, a timer decorator can measure how long a function takes to execute. The decorator defines a wrapper function that records the start time, calls the original function, records the end time, prints the elapsed time and returns the result. Applying @timer above any function automatically adds timing behaviour. The @wraps(func) decorator from functools should be used inside the wrapper to preserve the original function's name and docstring.",
                5
            ),
            qa(
                "Explain the difference between re.match(), re.search() and re.findall().",
                "re.match() checks for a match only at the beginning of the string. For example, re.match(r'Hello', 'Hello World') succeeds but re.match(r'World', 'Hello World') returns None because 'World' is not at the start. re.search() scans the entire string and returns the first match found anywhere. For example, re.search(r'World', 'Hello World') succeeds. re.findall() finds all non-overlapping matches in the string and returns them as a list. For example, re.findall(r'\\d+', 'I have 3 cats and 5 dogs') returns ['3', '5']. Use match() for prefix checking, search() for finding one occurrence and findall() for extracting all occurrences.",
                5
            ),
            qa(
                "Write a Python function using regex to validate an Indian mobile number.",
                "Import the re module and define a function is_valid_phone(phone). The pattern for an Indian mobile number is r'^[6-9]\\d{9}$'. The ^ anchors to the start, [6-9] ensures the first digit is 6, 7, 8 or 9, \\d{9} matches exactly 9 more digits, and $ anchors to the end. The function returns bool(re.match(pattern, phone)). Testing with '9876543210' returns True, while '1234567890' returns False because it starts with 1, and '98765' returns False because it has fewer than 10 digits.",
                4
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit4Topics = [
    oopInPython,
    fileHandling,
    modulesAndPackages,
    iteratorsAndGenerators,
    decoratorsAndRegex,
];