/* =========================================================
   BCA • SEM 5 • Python Programming
   UNIT 1 — Python Basics, Control Structures, Data Structures & Functions
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
    keyPoints,
    mcq,
    qa,
} from "../../../../helpers";

/* =========================================================
   TOPIC 1 — Python Fundamentals, Variables & Operators
========================================================= */

const pythonFundamentals = createTopic(
    "python-fundamentals-variables-operators",
    "Python Fundamentals, Variables & Operators",

    [
        definition(
            "Python",
            "Python is a high-level, interpreted, dynamically typed, and garbage-collected programming language created by Guido van Rossum and released in 1991, supporting procedural, object-oriented, and functional programming paradigms."
        ),

        heading("Key Features of Python"),

        list([
            "Simple, English-like syntax with clean indentation instead of braces.",
            "Dynamically typed — Variable types are determined at runtime without explicit declaration.",
            "Interpreted language — Code is translated line-by-line into bytecode executed by the Python Virtual Machine (PVM).",
            "Automatic memory management via reference counting and cyclic Garbage Collection.",
            "Rich standard library ('Batteries Included') and huge third-party package ecosystem (PyPI).",
            "Cross-platform compatibility (Windows, macOS, Linux, Unix).",
        ]),

        heading("Built-in Data Types"),

        table(
            ["Category", "Data Type", "Mutability", "Example"],
            [
                ["Numeric", "int, float, complex", "Immutable", "42, 3.1415, 2 + 3j"],
                ["Sequence", "str", "Immutable", "'Hello, BCA'"],
                ["Sequence", "list", "Mutable", "[10, 'Python', 3.5]"],
                ["Sequence", "tuple", "Immutable", "(10, 20, 30)"],
                ["Mapping", "dict", "Mutable", "{'id': 101, 'name': 'Rahul'}"],
                ["Set Types", "set, frozenset", "set (Mutable), frozenset (Immutable)", "{1, 2, 3}, frozenset([4, 5])"],
                ["Boolean", "bool", "Immutable", "True, False"],
                ["Binary", "bytes, bytearray", "bytes (Immutable), bytearray (Mutable)", "b'Hello'"],
                ["None Type", "NoneType", "Immutable", "None"],
            ]
        ),

        heading("Variables and Memory Model"),

        text(
            "In Python, variables do not store values directly; they are name references (pointers) bound to objects in memory. Everything in Python is an object."
        ),

        code(
            `# Variable assignment and dynamic typing
x = 100
print(type(x), id(x),  # <class 'int'>, memory address

x = "Now a String"
print(type(x), id(x),  # <class 'str'>, different memory address

# Multiple assignment
a, b, c = 1, 2.5, "BCA"
print(a, b, c)

# Swapping values without a temporary variable
a, b = b, a
print("Swapped:", a, b)`,
            "python",
            "Variables and Memory Allocation"
        ),

        heading("Python Operators"),

        table(
            ["Operator Category", "Symbols", "Description / Example"],
            [
                ["Arithmetic", "+, -, *, /, //, %, **", "// is floor division (7 // 2 = 3), ** is exponent (2 ** 3 = 8)"],
                ["Relational", "==, !=, >, <, >=, <=", "Compares values and evaluates to boolean True/False"],
                ["Logical", "and, or, not", "Combines boolean expressions with short-circuit evaluation"],
                ["Bitwise", "&, |, ^, ~, <<, >>", "Performs bit-level binary operations"],
                ["Assignment", "=, +=, -=, *=, /=, //=", "Assigns or updates variable values"],
                ["Identity", "is, is not", "Checks if two variables reference the exact same memory address"],
                ["Membership", "in, not in", "Checks if an element exists inside a sequence or collection"],
            ]
        ),

        heading("Type Casting and Console I/O"),

        code(
            `# User Input (always returns a string)
name = input("Enter your name: ")
marks = float(input("Enter marks: "),

# Formatted Output (f-strings introduced in Python 3.6)
print(f"Student: {name} | Marks: {marks:.2f} | Passed: {marks >= 40.0}")`,
            "python",
            "Input / Output Operations"
        ),

        note(
            "The '==' operator checks for value equality, whereas the 'is' operator checks for identity (same memory address). For example: [1, 2] == [1, 2] is True, but [1, 2] is [1, 2] is False.",
            "tip",
            "Equality vs Identity"
        ),

        keyPoints([
            "Python was created by Guido van Rossum and released in 1991.",
            "Variables are dynamic references bound to objects in heap memory.",
            "Python uses indentation (4 spaces standard) to define code blocks instead of braces.",
            "Immutable types include int, float, str, tuple, and frozenset.",
            "Floor division (//) truncates fractions; exponentiation uses (**).",
        ]),
    ],

    {
        summary:
            "Learn Python language features, data types, variable references, memory model, operators, and formatted console I/O.",
        minutes: 12,
        tags: ["python", "variables", "data-types", "operators", "basics", "important"],

        mcqs: [
            mcq(
                "Who created the Python programming language?",
                ["Dennis Ritchie", "Guido van Rossum", "James Gosling", "Bjarne Stroustrup"],
                1,
                "Guido van Rossum created Python and released it in 1991."
            ),
            mcq(
                "What is the output of 7 // 2 and 2 ** 3 in Python?",
                ["3.5 and 6", "3 and 8", "3.0 and 8", "4 and 6"],
                1,
                "// performs integer floor division (3) and ** performs exponentiation (8)."
            ),
            mcq(
                "Which of the following data types is mutable in Python?",
                ["tuple", "str", "list", "frozenset"],
                2,
                "Lists are mutable sequences that can be modified in-place."
            ),
            mcq(
                "Which operator checks whether two variables point to the exact same memory location?",
                ["==", "is", "in", "="],
                1,
                "The 'is' operator checks for memory identity using object IDs."
            ),
        ],

        questions: [
            qa(
                "What are the major features of Python? Explain why it is called a dynamically typed language.",
                "Python is an interpreted, high-level, multi-paradigm programming language. Key features include: clean indentation-based syntax, automatic garbage collection, dynamic typing, rich standard libraries, and portability. It is called dynamically typed because variable types are inferred and verified at runtime based on the assigned object value, rather than being explicitly declared during compilation (e.g., writing x = 10 followed by x = 'BCA' is valid).",
                4
            ),
            qa(
                "Explain the difference between mutable and immutable data types in Python with examples.",
                "Mutable objects can have their state or contents modified in-place after creation without changing their memory address (id). Examples include lists, dictionaries, sets, and bytearrays. Immutable objects cannot be modified after creation; any operation that appears to alter them actually creates a new object at a new memory location. Examples include integers, floats, strings, tuples, and frozensets.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — Control Flow, Loops & Comprehensions
========================================================= */

const controlFlowComprehensions = createTopic(
    "control-flow-loops-comprehensions",
    "Control Flow, Loops & Comprehensions",

    [
        definition(
            "Control Flow",
            "Control flow refers to the order in which individual statements, instructions, or function calls are executed or evaluated in a Python program based on conditions and loops."
        ),

        heading("Conditional Statements"),

        code(
            `score = int(input("Enter exam score: "),

if score >= 90:
    grade = 'A+'
elif score >= 75:
    grade = 'A'
elif score >= 60:
    grade = 'B'
elif score >= 40:
    grade = 'C'
else:
    grade = 'F'

print(f"Assigned Grade: {grade}")

# Ternary Conditional Operator (Conditional Expression)
status = "Passed" if score >= 40 else "Failed"
print("Result Status:", status)`,
            "python",
            "Conditionals and Ternary Operator"
        ),

        heading("Looping Constructs: while and for"),

        text(
            "Python provides two primary loops: 'while' (executes while a condition holds True) and 'for' (iterates directly over any iterable sequence like lists, strings, ranges, or dictionaries)."
        ),

        code(
            `# 1. While Loop
count = 1
while count <= 5:
    print(f"Count: {count}")
    count += 1

# 2. For Loop with range(start, stop, step)
for i in range(1, 10, 2):
    print(i, end=" ")  # Prints: 1 3 5 7 9
print()

# 3. Iterating with enumerate() and zip()
names = ["Amit", "Riya", "Karan"]
marks = [85, 92, 78]

for index, name in enumerate(names, start=1):
    print(f"{index}. {name}")

for name, mark in zip(names, marks):
    print(f"Student: {name} scored {mark}")`,
            "python",
            "For and While Loops"
        ),

        heading("Loop Control Statements & the for...else Clause"),

        table(
            ["Statement", "Purpose", "Behavior"],
            [
                ["break", "Terminates loop prematurely", "Jumps immediately to the code outside the loop"],
                ["continue", "Skips remainder of current iteration", "Jumps directly to the next loop cycle"],
                ["pass", "Null statement placeholder", "Used where syntactically code is required but no action is needed"],
                ["else (with loop)", "Runs when loop finishes naturally", "Executes only if the loop was NOT terminated by a break"],
            ]
        ),

        code(
            `# Prime number checker using for...else
num = 29
for i in range(2, int(num ** 0.5) + 1):
    if num % i == 0:
        print(f"{num} is not prime (divisible by {i})")
        break
else:
    print(f"{num} is a prime number!")`,
            "python",
            "for...else Loop Example"
        ),

        heading("Comprehensions in Python"),

        definition(
            "Comprehension",
            "A comprehension is a concise, expressive syntactic construct used to generate new collections (lists, dictionaries, sets, generators) by filtering and transforming existing iterables."
        ),

        code(
            `numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# List Comprehension: [expression for item in iterable if condition]
even_squares = [n ** 2 for n in numbers if n % 2 == 0]
print("Even Squares:", even_squares)  # [4, 16, 36, 64, 100]

# Set Comprehension: {expression for item in iterable}
unique_lengths = {len(word) for word in ["apple", "banana", "kiwi", "apple"]}
print("Unique Lengths:", unique_lengths)  # {4, 5, 6}

# Dictionary Comprehension: {key: value for item in iterable}
student_marks = {"Rahul": 85, "Pooja": 38, "Aakash": 92}
passed_students = {k: v for k, v in student_marks.items() if v >= 40}
print("Passed Students:", passed_students)`,
            "python",
            "List, Set, and Dict Comprehensions"
        ),

        keyPoints([
            "Python conditionals use if, elif, and else without parentheses or braces.",
            "Ternary operator syntax is: value_if_true if condition else value_if_false.",
            "The range(start, stop, step) generates arithmetic sequences up to stop-1.",
            "The loop else block executes only if the loop completes without hitting a break.",
            "Comprehensions provide a fast, memory-efficient way to construct collections.",
        ]),
    ],

    {
        summary:
            "Understand conditionals, while/for loops, enumerate, zip, loop control statements, for-else constructs, and list/dict comprehensions.",
        minutes: 13,
        tags: ["control-flow", "loops", "comprehensions", "range", "important"],

        mcqs: [
            mcq(
                "What is the output of list(range(2, 10, 3),?",
                ["[2, 5, 8]", "[2, 5, 8, 11]", "[3, 6, 9]", "[2, 4, 6, 8]"],
                0,
                "range(2, 10, 3) starts at 2, increments by 3, and stops before 10 -> [2, 5, 8]."
            ),
            mcq(
                "When does the 'else' block attached to a Python 'for' loop execute?",
                ["Whenever an error occurs", "When the loop completes normally without encountering a break", "After every iteration", "Only if the iterable is empty"],
                1,
                "A loop's else block executes only when the loop terminates without a break statement."
            ),
            mcq(
                "Which statement is used as an empty syntactic placeholder in Python?",
                ["null", "continue", "pass", "skip"],
                2,
                "pass is a null operation used as a syntactic placeholder."
            ),
            mcq(
                "What will [x for x in range(5) if x % 2 != 0] produce?",
                ["[0, 2, 4]", "[1, 3]", "[1, 3, 5]", "[2, 4]"],
                1,
                "The comprehension filters odd numbers under 5, resulting in [1, 3]."
            ),
        ],

        questions: [
            qa(
                "Explain the 'for...else' and 'while...else' loop constructs in Python with a code example.",
                "In Python, both for and while loops can have an optional 'else' clause. The code inside the else block executes if and only if the loop finishes all iterations naturally without being prematurely halted by a 'break' statement. If a break is executed, the else block is skipped. This is widely used for search algorithms (e.g., linear search or prime number checking) where the else block handles the scenario where the target element was not found.",
                4
            ),
            qa(
                "What are Comprehensions in Python? Explain List, Set, and Dictionary comprehensions with syntax.",
                "Comprehensions provide a concise way to create new collections from existing iterables. (1) List Comprehension: Syntax [expr for item in iterable if cond], e.g., [x**2 for x in range(5)] -> [0, 1, 4, 9, 16]. (2) Set Comprehension: Syntax {expr for item in iterable if cond}, producing unique items, e.g., {x % 3 for x in range(10)}. (3) Dictionary Comprehension: Syntax {k_expr: v_expr for item in iterable if cond}, e.g., {x: x**3 for x in range(4)} -> {0:0, 1:1, 2:8, 3:27}. Comprehensions are faster and more readable than manual append loops.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — Built-in Data Structures & String Manipulation
========================================================= */

const dataStructuresStrings = createTopic(
    "data-structures-and-strings",
    "Built-in Data Structures & String Manipulation",

    [
        definition(
            "Sequence",
            "A sequence is an ordered collection of items indexed by non-negative integers. Python built-in sequence types include Strings, Lists, and Tuples."
        ),

        heading("1. Lists (Mutable Ordered Sequences)"),

        code(
            `fruits = ["Apple", "Banana", "Cherry"]
fruits.append("Mango")           # Adds to end
fruits.insert(1, "Orange")       # Inserts at index 1
fruits.extend(["Grapes", "Kiwi"]) # Merges iterable
removed_item = fruits.pop()      # Removes and returns last item
fruits.remove("Banana")          # Removes first occurrence

# Slicing: list[start:stop:step]
print(fruits[1:4])               # Sublist from index 1 to 3
print(fruits[::-1])              # Reverses the list`,
            "python",
            "List Operations"
        ),

        heading("2. Tuples (Immutable Ordered Sequences)"),

        code(
            `# Tuple packing and unpacking
point = (10, 20, 30)
x, y, z = point                  # Unpacking
print(f"Coordinates: x={x}, y={y}, z={z}")

# Single element tuple requires a trailing comma
single = (42,)
print(type(single),              # <class 'tuple'>`,
            "python",
            "Tuple Packing and Unpacking"
        ),

        heading("3. Dictionaries (Key-Value Hash Maps)"),

        code(
            `student = {"id": 101, "name": "Neha", "course": "BCA"}

# Accessing and modifying
print(student.get("name"),       # Neha (Safe lookup, returns None if missing)
student["grade"] = "A"           # Insert new key-value pair
student["course"] = "MCA"        # Update existing key

# Dictionary iterations
for key, value in student.items():
    print(f"{key} -> {value}")`,
            "python",
            "Dictionary Operations"
        ),

        heading("4. Sets (Unordered Collections of Unique Elements)"),

        code(
            `setA = {1, 2, 3, 4, 5}
setB = {4, 5, 6, 7, 8}

print(setA | setB)   # Union: {1, 2, 3, 4, 5, 6, 7, 8}
print(setA & setB)   # Intersection: {4, 5}
print(setA - setB)   # Difference: {1, 2, 3}
print(setA ^ setB)   # Symmetric Difference: {1, 2, 3, 6, 7, 8}`,
            "python",
            "Set Algebra"
        ),

        heading("5. Advanced String Manipulation"),

        table(
            ["Method", "Description", "Example"],
            [
                ["s.strip()", "Removes leading/trailing whitespaces", "'  bca  '.strip() -> 'bca'"],
                ["s.split(sep)", "Splits string into a list of substrings", "'a,b,c'.split(',') -> ['a', 'b', 'c']"],
                ["sep.join(list)", "Joins list of strings into one string", "'-'.join(['01', '05', '2025']) -> '01-05-2025'"],
                ["s.replace(old, new)", "Replaces occurrences of substring", "'Java 8'.replace('Java', 'Python') -> 'Python 8'"],
                ["s.find(sub)", "Returns lowest index of substring (-1 if missing)", "'Python'.find('th') -> 2"],
                ["s.upper() / s.lower()", "Converts case", "'Bca'.lower() -> 'bca'"],
            ]
        ),

        keyPoints([
            "Lists are mutable; Tuples are immutable and hashable (can be dict keys).",
            "Dictionaries store associative key-value pairs with O(1) average lookup time.",
            "Sets store unique elements and support union (|), intersection (&), and difference (-).",
            "Strings are immutable sequences; methods like split() and join() create new string objects.",
            "Slicing [start:stop:step] works across strings, lists, and tuples.",
        ]),
    ],

    {
        summary:
            "Master Python built-in data structures: Lists, Tuples, Sets, Dictionaries, and comprehensive String manipulation methods.",
        minutes: 14,
        tags: ["lists", "tuples", "sets", "dictionaries", "strings", "important"],

        mcqs: [
            mcq(
                "Which of the following creates a valid single-element tuple?",
                ["t = (5)", "t = (5,)", "t = tuple(5)", "t = [5]"],
                1,
                "A single element tuple requires a trailing comma: (5,)."
            ),
            mcq(
                "What is the time complexity of looking up a key in a Python dictionary on average?",
                ["O(n)", "O(log n)", "O(1)", "O(n^2)"],
                2,
                "Python dictionaries are implemented using hash tables, offering O(1) average lookup."
            ),
            mcq(
                "What is the result of {1, 2, 3} & {2, 3, 4}?",
                ["{1, 4}", "{1, 2, 3, 4}", "{2, 3}", "{}"],
                2,
                "The & operator performs set intersection, returning common elements: {2, 3}."
            ),
            mcq(
                "Which string method converts a list of strings into a single delimited string?",
                ["split()", "join()", "concat()", "append()"],
                1,
                "The join() method concatenates elements of an iterable using a delimiter string."
            ),
        ],

        questions: [
            qa(
                "Compare Lists, Tuples, Sets, and Dictionaries in Python across Mutability, Ordering, and Duplicates.",
                "1. List: Ordered, Mutable, allows duplicate elements, indexed by integers (e.g., [1, 2, 2]). 2. Tuple: Ordered, Immutable, allows duplicate elements, indexed by integers (e.g., (1, 2, 2),. 3. Set: Unordered, Mutable (frozenset is immutable), does NOT allow duplicates, not indexed (e.g., {1, 2, 3}). 4. Dictionary: Ordered (since Python 3.7), Mutable, stores unique keys mapped to mutable values (e.g., {'a': 1, 'b': 2}).",
                4
            ),
            qa(
                "Explain string slicing and demonstrate five useful string methods in Python.",
                "String slicing extracts substrings using the syntax string[start:stop:step]. For example, 'PROGRAM'[0:4] yields 'PROG', and 'PYTHON'[::-1] yields 'NOHTYP'. Five essential string methods: (1) strip(): Removes leading and trailing whitespace (' hello '.strip() -> 'hello'). (2) split(): Splits a string by delimiter into a list ('a-b-c'.split('-') -> ['a','b','c']). (3) join(): Joins list elements into a string (','.join(['x','y']) -> 'x,y'). (4) replace(): Substitutes substrings ('cat'.replace('c','b') -> 'bat'). (5) find(): Locates index of a substring (-1 if not present).",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — Functions, Scopes & Functional Paradigms
========================================================= */

const functionsAndScopes = createTopic(
    "functions-scopes-functional-paradigms",
    "Functions, Scopes & Functional Paradigms",

    [
        definition(
            "Function",
            "A function is an organised, reusable block of code that takes inputs (arguments), executes a sequence of statements, and returns an output using the 'return' keyword."
        ),

        heading("Function Arguments in Python"),

        table(
            ["Argument Type", "Syntax / Pattern", "Usage"],
            [
                ["Positional Arguments", "def f(a, b):", "Matched left-to-right by position"],
                ["Default Arguments", "def f(a, b=10):", "Provides fallback values if not passed by caller"],
                ["Keyword Arguments", "f(b=20, a=10)", "Explicitly passed by parameter name, ignoring order"],
                ["Arbitrary Positional (*args)", "def f(*args):", "Packs extra positional arguments into a tuple"],
                ["Arbitrary Keyword (**kwargs)", "def f(**kwargs):", "Packs extra keyword arguments into a dictionary"],
            ]
        ),

        code(
            `def generate_invoice(customer, *items, discount=0.0, **metadata):
    total = sum(items) * (1 - discount)
    print(f"Invoice for: {customer}")
    print(f"Items Total after Discount: {total:.2f}")
    print("Metadata:", metadata)

generate_invoice("Amit", 500, 1200, 300, discount=0.10, store="Branch 1", cashier="Riya")`,
            "python",
            "*args and **kwargs Example"
        ),

        heading("Variable Scope & the LEGB Rule"),

        text(
            "Python resolves variable names using the LEGB lookup hierarchy: Local → Enclosing → Global → Built-in."
        ),

        list([
            "Local (L) — Names assigned inside the active function.",
            "Enclosing (E) — Names in the local scope of enclosing/nested functions.",
            "Global (G) — Names assigned at the top-level of the module or declared with 'global'.",
            "Built-in (B) — Pre-defined names in Python's built-in namespace (e.g., print, len, range).",
        ]),

        code(
            `x = "Global"

def outer():
    x = "Enclosing"
    def inner():
        nonlocal x   # Modifies the enclosing variable
        x = "Modified Enclosing"
        print("Inner:", x)
    inner()
    print("Outer:", x)

outer()
print("Top-level:", x)`,
            "python",
            "Scope and nonlocal keyword"
        ),

        heading("Lambda Expressions & Higher-Order Functions"),

        definition(
            "Lambda Function",
            "An anonymous, inline function defined with the 'lambda' keyword, restricted to a single expression: lambda arguments: expression."
        ),

        code(
            `from functools import reduce

numbers = [1, 2, 3, 4, 5, 6]

# 1. Lambda function
square = lambda x: x ** 2
print("Square of 7:", square(7),

# 2. map(function, iterable)
squares = list(map(lambda x: x ** 2, numbers),
print("Mapped Squares:", squares)

# 3. filter(function, iterable)
evens = list(filter(lambda x: x % 2 == 0, numbers),
print("Filtered Evens:", evens)

# 4. reduce(function, iterable)
sum_all = reduce(lambda acc, val: acc + val, numbers)
print("Reduced Sum:", sum_all)`,
            "python",
            "map, filter, and reduce"
        ),

        keyPoints([
            "Functions return None by default if no explicit return statement is given.",
            "*args captures positional parameters as a tuple; **kwargs captures keyword parameters as a dict.",
            "Scope resolution strictly adheres to the LEGB rule (Local, Enclosing, Global, Built-in).",
            "The 'global' keyword binds to module level; 'nonlocal' binds to the immediate enclosing scope.",
            "map(), filter(), and reduce() apply functional transformations over iterables.",
        ]),
    ],

    {
        summary:
            "Learn function parameters, *args, **kwargs, LEGB variable scoping, closures, lambda expressions, map, filter, and reduce.",
        minutes: 13,
        tags: ["functions", "args", "kwargs", "scope", "lambda", "map-filter", "important"],

        mcqs: [
            mcq(
                "What does *args receive inside a function definition?",
                ["A dictionary of keyword arguments", "A list of values", "A tuple of positional arguments", "A single string"],
                2,
                "*args packs extra positional arguments into a tuple."
            ),
            mcq(
                "What is the correct scope resolution order in Python?",
                ["Global -> Local -> Enclosing -> Built-in", "Local -> Enclosing -> Global -> Built-in", "Built-in -> Global -> Local", "Local -> Global -> Enclosing"],
                1,
                "Python resolves identifiers using LEGB: Local, Enclosing, Global, Built-in."
            ),
            mcq(
                "Which keyword is used to modify a variable in the outer enclosing function's scope?",
                ["global", "nonlocal", "outer", "super"],
                1,
                "The nonlocal keyword binds variables to the nearest enclosing scope."
            ),
            mcq(
                "What does list(filter(lambda x: x > 3, [1, 2, 3, 4, 5]), return?",
                ["[1, 2, 3]", "[4, 5]", "[True, True]", "[3, 4, 5]"],
                1,
                "filter retains only elements where the predicate evaluates to True -> [4, 5]."
            ),
        ],

        questions: [
            qa(
                "Explain *args and **kwargs in Python function definitions with code examples.",
                "*args and **kwargs allow functions to accept an arbitrary number of arguments. *args collects extra positional arguments into a tuple (e.g., def total(*args): return sum(args), allowing callers to pass any number of items like total(1, 2, 3, 4). **kwargs collects extra keyword arguments into a dictionary (e.g., def info(**kwargs): for k, v in kwargs.items(): print(k, v), allowing callers to pass key-value arguments like info(name='Amit', age=21). Together, they enable flexible and dynamic function interfaces.",
                4
            ),
            qa(
                "Explain the LEGB Rule for variable scope resolution and differentiate between 'global' and 'nonlocal'.",
                "The LEGB rule defines the hierarchy Python uses to search for variable names: 1. Local (L): Inside the current function. 2. Enclosing (E): Inside nested enclosing functions. 3. Global (G): Top-level module variables. 4. Built-in (B): Predefined Python identifiers (like len, print). The 'global' keyword informs Python that a variable refers to the module-level global namespace, allowing reassignment. The 'nonlocal' keyword is used inside nested functions to bind and modify variables in the nearest enclosing non-global scope.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 5 — Modules, Packages & Python Standard Library
========================================================= */

const modulesAndPackages = createTopic(
    "modules-packages-standard-library",
    "Modules, Packages & Python Standard Library",

    [
        definition(
            "Module",
            "A module is a single Python file containing executable code, functions, classes, and variables. A Package is a directory containing multiple modules and an __init__.py file."
        ),

        heading("Creating and Importing Modules"),

        code(
            `# mymath.py (Module file)
def add(a, b):
    return a + b

def multiply(a, b):
    return a * b

if __name__ == "__main__":
    # Runs only when executed directly, not when imported
    print("Testing mymath:", add(2, 3),`,
            "python",
            "Custom Module Definition"
        ),

        code(
            `# main.py (Importing the module)
import mymath
from mymath import add as custom_add

print(mymath.multiply(4, 5),
print(custom_add(10, 20),`,
            "python",
            "Import Syntax"
        ),

        heading("Python Package Architecture"),

        code(
            `my_package/
│
├── __init__.py          # Marks directory as a Python package
├── database/
│   ├── __init__.py
│   └── connection.py
└── utils/
    ├── __init__.py
    └── formatters.py`,
            "text",
            "Package Directory Hierarchy"
        ),

        heading("Essential Python Standard Library Modules"),

        table(
            ["Module", "Purpose", "Key Functions / Classes"],
            [
                ["math", "Mathematical calculations", "math.sqrt(), math.pow(), math.sin(), math.pi, math.ceil()"],
                ["random", "Pseudo-random number generation", "random.randint(a, b), random.choice(seq), random.shuffle(list)"],
                ["datetime", "Date and time manipulation", "datetime.now(), strftime(), strptime(), timedelta"],
                ["os", "Operating system interaction", "os.getcwd(), os.mkdir(), os.listdir(), os.path.exists()"],
                ["sys", "Python runtime environment", "sys.argv (CLI args), sys.path (module path), sys.exit()"],
                ["re", "Regular expression pattern matching", "re.match(), re.search(), re.findall(), re.sub()"],
            ]
        ),

        heading("Using Standard Library Examples"),

        code(
            `import math
import random
from datetime import datetime, timedelta
import re

# Math
print("Square root:", math.sqrt(144),  # 12.0

# Random
print("Roll Dice:", random.randint(1, 6),

# Datetime formatting
now = datetime.now()
print("Formatted Date:", now.strftime("%d-%B-%Y %H:%M:%S"),
future = now + timedelta(days=7)
print("Next Week:", future.strftime("%d-%m-%Y"),

# Regular Expression: Validate Email
email_pattern = r"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$"
test_email = "student@bca.edu"
if re.match(email_pattern, test_email):
    print("Valid Email Address")`,
            "python",
            "Standard Library Modules"
        ),

        note(
            "Always use virtual environments (python -m venv env) to isolate project dependencies and avoid global package version conflicts.",
            "tip",
            "Virtual Environments"
        ),

        keyPoints([
            "A module is a .py file; a package is a directory containing __init__.py.",
            "if __name__ == '__main__' ensures code executes only when run as a standalone script.",
            "math and random provide mathematical and pseudo-random functions.",
            "os and sys interact with the operating system and command-line arguments.",
            "re provides regular expression support for pattern searching and data validation.",
        ]),
    ],

    {
        summary:
            "Explore modules, package creation, __init__.py, __name__ guard, virtual environments, and core libraries: math, random, datetime, os, sys, and re.",
        minutes: 13,
        tags: ["modules", "packages", "standard-library", "math", "os", "sys", "datetime", "important"],

        mcqs: [
            mcq(
                "Which file must be present in a directory for Python to treat it as a Package?",
                ["__main__.py", "__init__.py", "__package__.py", "setup.py"],
                1,
                "__init__.py indicates that the directory should be treated as a Python package."
            ),
            mcq(
                "What does sys.argv contain?",
                ["System environmental variables", "List of command-line arguments passed to script", "Installed package paths", "Python version info"],
                1,
                "sys.argv is a list containing the command-line arguments passed to the script."
            ),
            mcq(
                "What is the purpose of the 'if __name__ == \"__main__\":' construct?",
                ["To import built-in libraries", "To prevent execution when the module is imported into another file", "To define class constructors", "To allocate dynamic memory"],
                1,
                "It prevents code inside the block from running when the file is imported as a module."
            ),
            mcq(
                "Which module is used in Python for regular expression parsing?",
                ["regex_engine", "re", "pyregex", "match"],
                1,
                "The built-in 're' module handles regular expressions in Python."
            ),
        ],

        questions: [
            qa(
                "What is a Python Module and a Package? How are they created and imported?",
                "A Module is a single Python file (.py) containing functions, classes, and variables (e.g., mymodule.py). It is imported using 'import mymodule' or 'from mymodule import my_func'. A Package is a directory containing multiple modules along with an '__init__.py' file that informs Python to treat the folder as a package. Packages allow hierarchical structuring of large codebases into subpackages (e.g., from package.subpackage import module).",
                4
            ),
            qa(
                "Explain the utility of the 'os', 'sys', and 'datetime' standard library modules with code snippets.",
                "(1) 'os' module: Enables interaction with the operating system, such as getting current directory (os.getcwd(), listing files (os.listdir(), or making directories (os.mkdir(),. (2) 'sys' module: Provides access to Python interpreter variables, such as command-line arguments (sys.argv) and program termination (sys.exit(),. (3) 'datetime' module: Supplies classes for date/time arithmetic, formatting dates into custom strings via strftime(), and computing offsets with timedelta.",
                4
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit1Topics = [
    pythonFundamentals,
    controlFlowComprehensions,
    dataStructuresStrings,
    functionsAndScopes,
    modulesAndPackages,
];
