/* =========================================================
   MSc-IT • SEM 1 • Python Programming
   UNIT 3 — Composite Data Types, Functions
            and Exception Handling
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
   TOPIC 1 — Composite and Nested Data Structures
========================================================= */

const compositeDataStructures = createTopic(
    "composite-and-nested-data-structures",
    "Composite and Nested Data Structures",

    [
        definition(
            "Composite Data Structure",
            "A data structure formed by combining two or more aggregate types such as lists, tuples, sets and dictionaries to model complex real-world data."
        ),

        text(
            "Real-world data is rarely flat. A student record may contain a name, a list of marks and a dictionary of personal details. Python allows you to nest aggregate types inside one another to any depth, creating powerful and flexible data models."
        ),

        heading("List of Lists (2D List / Matrix)"),

        code(
            `# Creating a 3x3 matrix
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

# Accessing elements
print(matrix[0])       # [1, 2, 3]  (first row)
print(matrix[1][2])    # 6          (row 1, col 2)

# Iterating over a 2D list
for row in matrix:
    for element in row:
        print(element, end=" ")
    print()
# Output:
# 1 2 3
# 4 5 6
# 7 8 9

# Creating with list comprehension
identity = [[1 if i == j else 0 for j in range(3)] for i in range(3)]
print(identity)
# [[1, 0, 0], [0, 1, 0], [0, 0, 1]]`,
            "python",
            "2D lists and matrices"
        ),

        heading("List of Dictionaries"),

        text(
            "This is one of the most common patterns in Python, used extensively when working with JSON data, API responses and database query results."
        ),

        code(
            `students = [
    {"name": "Rahul", "age": 22, "marks": [85, 90, 78]},
    {"name": "Priya", "age": 21, "marks": [92, 88, 95]},
    {"name": "Amit",  "age": 23, "marks": [70, 65, 80]},
]

# Access nested data
print(students[1]["name"])       # Priya
print(students[0]["marks"][2])   # 78

# Find the topper
topper = max(students, key=lambda s: sum(s["marks"]))
print(f"Topper: {topper['name']}")  # Topper: Priya

# Filter students with average above 80
for s in students:
    avg = sum(s["marks"]) / len(s["marks"])
    if avg > 80:
        print(f"{s['name']}: {avg:.1f}")
# Rahul: 84.3
# Priya: 91.7`,
            "python",
            "List of dictionaries"
        ),

        heading("Dictionary of Lists"),

        code(
            `# Grouping data by key
grades = {
    "sem1": [85, 90, 78, 88],
    "sem2": [92, 80, 85, 90],
    "sem3": [78, 88, 92, 85],
}

# Calculate average per semester
for sem, marks in grades.items():
    avg = sum(marks) / len(marks)
    print(f"{sem}: Average = {avg:.1f}")
# sem1: Average = 85.2
# sem2: Average = 86.8
# sem3: Average = 85.8

# Add a new semester
grades["sem4"] = [90, 95, 88, 92]`,
            "python",
            "Dictionary of lists"
        ),

        heading("Dictionary of Dictionaries"),

        code(
            `# Nested dictionary for a phone book
contacts = {
    "Rahul": {
        "phone": "9876543210",
        "email": "rahul@email.com",
        "city": "Surat"
    },
    "Priya": {
        "phone": "9123456780",
        "email": "priya@email.com",
        "city": "Ahmedabad"
    }
}

# Access
print(contacts["Rahul"]["phone"])  # 9876543210

# Safely access with get
print(contacts.get("Amit", {}).get("phone", "Not found"))
# Not found

# Add new contact
contacts["Amit"] = {"phone": "9988776655", "email": "amit@email.com", "city": "Vadodara"}`,
            "python",
            "Nested dictionaries"
        ),

        heading("Tuples in Lists and Dictionaries"),

        code(
            `# List of tuples (common for database records)
records = [
    (1, "Rahul", 85),
    (2, "Priya", 92),
    (3, "Amit", 78),
]

# Sort by marks (third element)
records.sort(key=lambda r: r[2], reverse=True)
for r in records:
    print(f"Rank: {r[0]}, Name: {r[1]}, Marks: {r[2]}")

# Dictionary with tuple keys (e.g., grid coordinates)
grid = {
    (0, 0): "Start",
    (0, 1): "Path",
    (1, 1): "End",
}
print(grid[(0, 0)])  # Start`,
            "python",
            "Tuples used in composite structures"
        ),

        heading("Deep Copy versus Shallow Copy"),

        definition(
            "Shallow Copy",
            "A copy that creates a new object but inserts references to the objects found in the original. Changes to nested mutable objects affect both copies."
        ),

        definition(
            "Deep Copy",
            "A copy that creates a new object and recursively copies all objects found in the original. Changes to nested objects do not affect the original."
        ),

        code(
            `import copy

original = [[1, 2], [3, 4]]

# Shallow copy
shallow = copy.copy(original)
shallow[0][0] = 99
print(original[0][0])  # 99 — original is affected!

# Deep copy
original = [[1, 2], [3, 4]]
deep = copy.deepcopy(original)
deep[0][0] = 99
print(original[0][0])  # 1 — original is NOT affected`,
            "python",
            "Shallow copy vs deep copy"
        ),

        note(
            "When working with nested mutable structures, always use copy.deepcopy() if you need a completely independent copy. A shallow copy or slicing (list[:]) only copies the outer level.",
            "warning",
            "Common Pitfall"
        ),

        keyPoints([
            "Composite structures combine lists, tuples, sets and dictionaries to model complex data.",
            "List of dictionaries is the most common pattern for JSON and API data.",
            "Access nested data using chained indexing: data[0]['key'][2].",
            "Tuples can be used as dictionary keys because they are immutable and hashable.",
            "Use copy.deepcopy() for fully independent copies of nested structures.",
        ]),
    ],

    {
        summary:
            "Learn to build and navigate composite data structures including 2D lists, lists of dictionaries, nested dictionaries and deep copying.",
        minutes: 12,
        tags: ["python", "composite", "nested", "data-structures", "important"],

        mcqs: [
            mcq(
                "How do you access the element 6 in matrix = [[1,2,3],[4,5,6],[7,8,9]]?",
                ["matrix[6]", "matrix[2][3]", "matrix[1][2]", "matrix[2][1]"],
                2,
                "Row index 1 gives [4,5,6] and column index 2 gives 6, so matrix[1][2]."
            ),
            mcq(
                "Which composite pattern is most common for JSON and API data?",
                ["List of tuples", "Dictionary of sets", "List of dictionaries", "Tuple of lists"],
                2,
                "JSON arrays of objects map naturally to a list of dictionaries in Python."
            ),
            mcq(
                "Why can tuples be used as dictionary keys but lists cannot?",
                ["Tuples are faster", "Tuples are immutable and hashable", "Lists are too large", "Python syntax does not allow it"],
                1,
                "Dictionary keys must be hashable, and only immutable types like tuples qualify."
            ),
            mcq(
                "What does copy.deepcopy() do?",
                ["Copies only the outer list", "Creates references to the same objects", "Recursively copies all nested objects", "Deletes the original"],
                2,
                "deepcopy() recursively copies every nested object, creating a fully independent copy."
            ),
            mcq(
                "What is the output of students[1]['name'] if students = [{'name':'Rahul'}, {'name':'Priya'}]?",
                ["'Rahul'", "'Priya'", "Error", "None"],
                1,
                "Index 1 gives the second dictionary, and ['name'] gives 'Priya'."
            ),
        ],

        questions: [
            qa(
                "What are composite data structures? Explain with three examples.",
                "Composite data structures are formed by combining two or more aggregate types to model complex data. A list of lists (2D list) represents a matrix, for example matrix = [[1,2,3],[4,5,6]], where matrix[1][2] accesses the element 6. A list of dictionaries represents a collection of records, for example students = [{'name':'Rahul','marks':85}, {'name':'Priya','marks':92}], where students[0]['name'] gives 'Rahul'. A dictionary of dictionaries represents nested mappings, for example contacts = {'Rahul':{'phone':'98765','city':'Surat'}}, where contacts['Rahul']['phone'] gives '98765'.",
                5
            ),
            qa(
                "Differentiate between shallow copy and deep copy with examples.",
                "A shallow copy creates a new outer object but inserts references to the same inner objects. For example, if original = [[1,2],[3,4]] and shallow = copy.copy(original), then modifying shallow[0][0] = 99 also changes original[0][0] to 99 because both share the same inner lists. A deep copy creates a new outer object and recursively copies all inner objects. If deep = copy.deepcopy(original), then modifying deep[0][0] = 99 does not affect original[0][0], which remains 1. Use deepcopy() when working with nested mutable structures.",
                5
            ),
            qa(
                "Write a Python program using a list of dictionaries to find the student with the highest average marks.",
                "Define a list of dictionaries where each dictionary has a 'name' key and a 'marks' key containing a list of integers. For example, students = [{'name':'Rahul','marks':[85,90,78]}, {'name':'Priya','marks':[92,88,95]}]. Use the max() function with a key parameter: topper = max(students, key=lambda s: sum(s['marks'])/len(s['marks'])). This computes the average for each student and returns the dictionary with the highest average. Finally, print topper['name'] to display the topper's name.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — Functions: Definition, Parameters and Return
========================================================= */

const functionsBasics = createTopic(
    "functions-definition-parameters-and-return",
    "Functions: Definition, Parameters and Return",

    [
        definition(
            "Function",
            "A named, reusable block of code that performs a specific task. Functions are defined using the def keyword and can accept parameters and return values."
        ),

        text(
            "Functions are the building blocks of modular programming. They allow you to write code once and use it many times, making programs shorter, easier to read, test and maintain. Python treats functions as first-class objects, meaning they can be assigned to variables, passed as arguments and returned from other functions."
        ),

        heading("Defining and Calling a Function"),

        code(
            `# Defining a function
def greet(name):
    """This function greets the person passed as a parameter."""
    return f"Hello, {name}! Welcome to MSc IT."

# Calling the function
message = greet("Rahul")
print(message)
# Output: Hello, Rahul! Welcome to MSc IT.

# Function without return (returns None)
def say_hello():
    print("Hello!")

result = say_hello()
print(result)  # None`,
            "python",
            "Basic function definition and call"
        ),

        heading("Docstrings"),

        definition(
            "Docstring",
            "A string literal placed as the first statement inside a function, class or module to document its purpose. Accessed using the __doc__ attribute or the help() function."
        ),

        code(
            `def calculate_average(marks):
    """
    Calculate the average of a list of marks.
    
    Parameters:
        marks (list): A list of numeric marks.
    
    Returns:
        float: The average of the marks.
    """
    return sum(marks) / len(marks)

print(calculate_average.__doc__)
help(calculate_average)`,
            "python",
            "Using docstrings"
        ),

        heading("Types of Parameters"),

        table(
            ["Type", "Syntax", "Description", "Example"],
            [
                ["Positional", "def f(a, b)", "Must be passed in order", "f(1, 2)"],
                ["Default", "def f(a, b=10)", "Has a default value if not provided", "f(1) → b is 10"],
                ["Keyword", "def f(a, b)", "Passed by name, order does not matter", "f(b=2, a=1)"],
                ["Variable positional", "def f(*args)", "Collects extra positional args as a tuple", "f(1, 2, 3) → args=(1,2,3)"],
                ["Variable keyword", "def f(**kwargs)", "Collects extra keyword args as a dict", "f(x=1, y=2) → kwargs={'x':1,'y':2}"],
            ]
        ),

        code(
            `# Positional and default parameters
def power(base, exp=2):
    return base ** exp

print(power(3))      # 9  (uses default exp=2)
print(power(3, 3))   # 27

# Keyword arguments
def student_info(name, age, course):
    print(f"{name}, {age}, {course}")

student_info(age=22, course="MSc IT", name="Rahul")
# Order does not matter with keyword arguments

# *args — variable positional arguments
def total(*numbers):
    return sum(numbers)

print(total(10, 20, 30))       # 60
print(total(1, 2, 3, 4, 5))    # 15

# **kwargs — variable keyword arguments
def print_details(**info):
    for key, value in info.items():
        print(f"{key}: {value}")

print_details(name="Rahul", age=22, city="Surat")
# name: Rahul
# age: 22
# city: Surat`,
            "python",
            "Types of function parameters"
        ),

        note(
            "When defining a function, the parameter order must be: positional, default, *args, **kwargs. For example: def f(a, b=10, *args, **kwargs) is correct. Any other order will cause a SyntaxError.",
            "warning",
            "Syntax Rule"
        ),

        heading("Returning Values"),

        code(
            `# Single return value
def square(x):
    return x ** 2

# Multiple return values (returns a tuple)
def min_max(numbers):
    return min(numbers), max(numbers)

smallest, largest = min_max([5, 2, 8, 1, 9])
print(smallest, largest)  # 1 9

# Returning different types based on condition
def check_number(n):
    if n > 0:
        return "Positive"
    elif n < 0:
        return "Negative"
    else:
        return 0

print(check_number(5))   # Positive
print(check_number(-3))  # Negative
print(check_number(0))   # 0`,
            "python",
            "Returning values from functions"
        ),

        heading("Scope of Variables"),

        definition(
            "Scope",
            "The region of a program where a variable is accessible. Python follows the LEGB rule: Local, Enclosing, Global, Built-in."
        ),

        table(
            ["Scope", "Description", "Example"],
            [
                ["Local (L)", "Inside the current function", "Variable defined inside def"],
                ["Enclosing (E)", "In the enclosing function (for nested functions)", "Variable in outer function"],
                ["Global (G)", "At the top level of the module", "Variable defined outside all functions"],
                ["Built-in (B)", "Python's built-in names", "print, len, range, int"],
            ]
        ),

        code(
            `x = "global"

def outer():
    x = "enclosing"
    
    def inner():
        x = "local"
        print(f"Inner: {x}")
    
    inner()
    print(f"Outer: {x}")

outer()
print(f"Module: {x}")

# Output:
# Inner: local
# Outer: enclosing
# Module: global`,
            "python",
            "LEGB scope resolution"
        ),

        code(
            `# Using global keyword
count = 0

def increment():
    global count
    count += 1

increment()
increment()
print(count)  # 2

# Using nonlocal keyword
def outer():
    x = 10
    def inner():
        nonlocal x
        x += 5
    inner()
    print(x)

outer()  # 15`,
            "python",
            "global and nonlocal keywords"
        ),

        keyPoints([
            "Functions are defined with def and can accept parameters and return values.",
            "Default parameters provide fallback values when arguments are not passed.",
            "*args collects extra positional arguments as a tuple; **kwargs collects keyword arguments as a dict.",
            "Python follows the LEGB rule for variable scope: Local, Enclosing, Global, Built-in.",
            "Use the global keyword to modify a global variable inside a function.",
        ]),
    ],

    {
        summary:
            "Learn to define functions with various parameter types, return values, understand scope rules and use global and nonlocal keywords.",
        minutes: 13,
        tags: ["python", "functions", "parameters", "scope", "important"],

        mcqs: [
            mcq(
                "What does a function return if there is no return statement?",
                ["0", "False", "None", "An empty string"],
                2,
                "A function without a return statement implicitly returns None."
            ),
            mcq(
                "What does *args collect?",
                ["Keyword arguments as a dictionary", "Extra positional arguments as a tuple", "All arguments as a list", "Default arguments"],
                1,
                "*args collects any extra positional arguments into a tuple."
            ),
            mcq(
                "What is the correct order of parameters in a function definition?",
                ["**kwargs, *args, default, positional", "positional, default, *args, **kwargs", "default, positional, *args, **kwargs", "*args, positional, default, **kwargs"],
                1,
                "The correct order is positional, default, *args, **kwargs."
            ),
            mcq(
                "What does LEGB stand for in Python scope resolution?",
                ["List, Element, Global, Built-in", "Local, Enclosing, Global, Built-in", "Local, External, General, Basic", "Loop, Enclosing, Global, Base"],
                1,
                "LEGB stands for Local, Enclosing, Global, Built-in."
            ),
            mcq(
                "What keyword is used to modify a global variable inside a function?",
                ["nonlocal", "global", "extern", "public"],
                1,
                "The global keyword allows a function to modify a variable defined at the module level."
            ),
            mcq(
                "What does def f(a, b=10) mean?",
                ["Both a and b are required", "b has a default value of 10 if not provided", "a has a default value of 10", "The function returns 10"],
                1,
                "b=10 means b is an optional parameter with a default value of 10."
            ),
        ],

        questions: [
            qa(
                "Explain the different types of function parameters in Python with examples.",
                "Python supports five types of parameters. Positional parameters must be passed in order: def f(a, b) called as f(1, 2). Default parameters have fallback values: def f(a, b=10) can be called as f(1) where b becomes 10. Keyword arguments are passed by name: f(b=2, a=1) where order does not matter. Variable positional parameters use *args to collect extra positional arguments as a tuple: def f(*args) called as f(1,2,3) gives args=(1,2,3). Variable keyword parameters use **kwargs to collect extra keyword arguments as a dictionary: def f(**kwargs) called as f(x=1,y=2) gives kwargs={'x':1,'y':2}.",
                5
            ),
            qa(
                "Explain the LEGB rule of variable scope with an example.",
                "The LEGB rule determines the order in which Python searches for a variable name. L stands for Local, the innermost scope inside the current function. E stands for Enclosing, the scope of any enclosing function in case of nested functions. G stands for Global, the top-level scope of the module. B stands for Built-in, Python's built-in names like print and len. For example, if x is defined at the module level as 'global', inside outer() as 'enclosing' and inside inner() as 'local', then printing x inside inner() gives 'local' because local scope is searched first.",
                5
            ),
            qa(
                "What is the difference between global and nonlocal keywords?",
                "The global keyword is used inside a function to indicate that a variable refers to the one defined at the module (global) level, allowing the function to modify it. For example, if count = 0 is defined globally, a function can use global count and then count += 1 to modify it. The nonlocal keyword is used inside a nested function to indicate that a variable refers to the one defined in the enclosing (outer) function, not the global scope. For example, if outer() defines x = 10, then inner() can use nonlocal x and x += 5 to modify the outer function's x. Without nonlocal, assigning to x inside inner() would create a new local variable.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — Lambda Functions and Higher-Order Functions
========================================================= */

const lambdaAndHigherOrder = createTopic(
    "lambda-functions-and-higher-order-functions",
    "Lambda Functions and Higher-Order Functions",

    [
        definition(
            "Lambda Function",
            "A small, anonymous function defined using the lambda keyword. It can take any number of arguments but can only have a single expression. Syntax: lambda arguments: expression."
        ),

        text(
            "Lambda functions are useful when you need a short function for a brief period, typically as an argument to higher-order functions like map(), filter() and sorted(). They are not a replacement for regular functions defined with def, but they make code more concise in specific situations."
        ),

        heading("Lambda Syntax and Examples"),

        code(
            `# Regular function
def square(x):
    return x ** 2

# Equivalent lambda
square_lambda = lambda x: x ** 2
print(square_lambda(5))  # 25

# Lambda with multiple arguments
add = lambda a, b: a + b
print(add(3, 4))  # 7

# Lambda with conditional expression
check = lambda x: "Even" if x % 2 == 0 else "Odd"
print(check(4))  # Even
print(check(7))  # Odd

# Lambda with no arguments
import datetime
now = lambda: datetime.datetime.now()
print(now())`,
            "python",
            "Lambda function examples"
        ),

        heading("map() Function"),

        definition(
            "map()",
            "A built-in function that applies a given function to every item in an iterable and returns a map object (which can be converted to a list). Syntax: map(function, iterable)."
        ),

        code(
            `# Double each number
nums = [1, 2, 3, 4, 5]
doubled = list(map(lambda x: x * 2, nums))
print(doubled)  # [2, 4, 6, 8, 10]

# Convert strings to uppercase
words = ["hello", "world", "python"]
upper = list(map(str.upper, words))
print(upper)  # ['HELLO', 'WORLD', 'PYTHON']

# Using a regular function with map
def square(x):
    return x ** 2

squares = list(map(square, [1, 2, 3, 4]))
print(squares)  # [1, 4, 9, 16]`,
            "python",
            "Using map()"
        ),

        heading("filter() Function"),

        definition(
            "filter()",
            "A built-in function that constructs an iterator from elements of an iterable for which a function returns True. Syntax: filter(function, iterable)."
        ),

        code(
            `# Filter even numbers
nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
evens = list(filter(lambda x: x % 2 == 0, nums))
print(evens)  # [2, 4, 6, 8, 10]

# Filter words longer than 4 characters
words = ["hi", "hello", "hey", "world", "ok"]
long_words = list(filter(lambda w: len(w) > 4, words))
print(long_words)  # ['hello', 'world']

# Filter truthy values
mixed = [0, 1, "", "hello", None, [], [1, 2]]
truthy = list(filter(None, mixed))
print(truthy)  # [1, 'hello', [1, 2]]`,
            "python",
            "Using filter()"
        ),

        heading("reduce() Function"),

        definition(
            "reduce()",
            "A function from the functools module that applies a function of two arguments cumulatively to the items of an iterable, reducing it to a single value."
        ),

        code(
            `from functools import reduce

# Sum of all elements
nums = [1, 2, 3, 4, 5]
total = reduce(lambda a, b: a + b, nums)
print(total)  # 15

# Product of all elements
product = reduce(lambda a, b: a * b, nums)
print(product)  # 120

# Find maximum
maximum = reduce(lambda a, b: a if a > b else b, nums)
print(maximum)  # 5`,
            "python",
            "Using reduce()"
        ),

        heading("sorted() with key"),

        code(
            `# Sort by absolute value
nums = [-5, 3, -1, 8, -2]
print(sorted(nums, key=lambda x: abs(x)))
# [-1, -2, 3, -5, 8]

# Sort list of tuples by second element
students = [("Rahul", 85), ("Priya", 92), ("Amit", 78)]
by_marks = sorted(students, key=lambda s: s[1], reverse=True)
print(by_marks)
# [('Priya', 92), ('Rahul', 85), ('Amit', 78)]

# Sort list of dictionaries
data = [{"name": "Rahul", "age": 22}, {"name": "Priya", "age": 21}]
by_age = sorted(data, key=lambda d: d["age"])
print(by_age)
# [{'name': 'Priya', 'age': 21}, {'name': 'Rahul', 'age': 22}]`,
            "python",
            "Sorting with lambda and key"
        ),

        heading("Higher-Order Functions"),

        definition(
            "Higher-Order Function",
            "A function that takes one or more functions as arguments or returns a function as its result. Examples include map(), filter(), reduce() and custom decorators."
        ),

        code(
            `# Function that returns a function
def multiplier(factor):
    def multiply(x):
        return x * factor
    return multiply

double = multiplier(2)
triple = multiplier(3)

print(double(5))  # 10
print(triple(5))  # 15

# Function that takes a function as argument
def apply_operation(func, value):
    return func(value)

print(apply_operation(lambda x: x**2, 4))  # 16
print(apply_operation(lambda x: x**0.5, 16))  # 4.0`,
            "python",
            "Higher-order functions"
        ),

        note(
            "Lambda functions are limited to a single expression. If you need multiple statements, loops or complex logic, use a regular function defined with def. Overusing lambdas can make code harder to read.",
            "tip",
            "Best Practice"
        ),

        keyPoints([
            "Lambda functions are anonymous, single-expression functions defined with the lambda keyword.",
            "map() applies a function to every element; filter() keeps elements where the function returns True.",
            "reduce() cumulatively applies a function to reduce an iterable to a single value.",
            "sorted() accepts a key parameter, often a lambda, for custom sorting.",
            "Higher-order functions either accept functions as arguments or return functions.",
        ]),
    ],

    {
        summary:
            "Master lambda functions and their use with map(), filter(), reduce() and sorted(), and understand higher-order functions.",
        minutes: 12,
        tags: ["python", "lambda", "map", "filter", "reduce", "important"],

        mcqs: [
            mcq(
                "What is the output of (lambda x, y: x + y)(3, 4)?",
                ["34", "7", "Error", "None"],
                1,
                "The lambda adds 3 and 4, returning 7."
            ),
            mcq(
                "What does map(lambda x: x*2, [1,2,3]) produce?",
                ["[1, 2, 3]", "[2, 4, 6]", "[1, 4, 9]", "6"],
                1,
                "map() applies the lambda to each element, doubling each: [2, 4, 6]."
            ),
            mcq(
                "What does filter(lambda x: x > 3, [1,2,3,4,5]) return?",
                ["[1, 2, 3]", "[4, 5]", "[True, True]", "2"],
                1,
                "filter() keeps only elements where the lambda returns True, giving [4, 5]."
            ),
            mcq(
                "Where is the reduce() function located?",
                ["Built-in", "math module", "functools module", "itertools module"],
                2,
                "reduce() is in the functools module and must be imported."
            ),
            mcq(
                "A higher-order function is one that:",
                ["Runs faster than normal", "Takes or returns a function", "Has more than 10 lines", "Uses recursion"],
                1,
                "A higher-order function either takes functions as arguments or returns a function."
            ),
        ],

        questions: [
            qa(
                "What is a lambda function? How does it differ from a regular function?",
                "A lambda function is a small, anonymous function defined using the lambda keyword with the syntax lambda arguments: expression. It differs from a regular function in several ways. A lambda can only contain a single expression and cannot have multiple statements, loops or complex logic. It has no name unless assigned to a variable. It does not use the def keyword or the return statement — the expression is automatically returned. Lambda functions are typically used for short, throwaway operations, especially as arguments to higher-order functions like map(), filter() and sorted(). Regular functions defined with def are preferred for complex, reusable logic.",
                5
            ),
            qa(
                "Explain map(), filter() and reduce() with examples.",
                "The map() function applies a given function to every element of an iterable. For example, list(map(lambda x: x*2, [1,2,3])) returns [2,4,6]. The filter() function keeps only those elements for which the function returns True. For example, list(filter(lambda x: x%2==0, [1,2,3,4,5])) returns [2,4]. The reduce() function from the functools module cumulatively applies a function of two arguments to reduce an iterable to a single value. For example, reduce(lambda a,b: a+b, [1,2,3,4,5]) returns 15 by computing ((((1+2)+3)+4)+5).",
                5
            ),
            qa(
                "What is a higher-order function? Give two examples.",
                "A higher-order function is a function that either takes one or more functions as arguments or returns a function as its result. The built-in map() function is a higher-order function because it takes a function as its first argument and applies it to each element of an iterable. Another example is a custom function like def multiplier(factor): return lambda x: x * factor, which returns a new function. Calling double = multiplier(2) creates a function that doubles its input, so double(5) returns 10. Python's ability to treat functions as first-class objects makes higher-order functions possible.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — Recursion
========================================================= */

const recursion = createTopic(
    "recursion",
    "Recursion",

    [
        definition(
            "Recursion",
            "A programming technique in which a function calls itself to solve a problem by breaking it down into smaller, simpler subproblems. Every recursive function must have a base case to stop the recursion and a recursive case that moves towards the base case."
        ),

        text(
            "Recursion is a powerful concept used in mathematics and computer science. Problems like factorial, Fibonacci series, tree traversal, binary search and the Tower of Hanoi have naturally recursive solutions. However, recursion must be used carefully because excessive depth can lead to a stack overflow."
        ),

        heading("Structure of a Recursive Function"),

        table(
            ["Component", "Purpose", "What Happens Without It"],
            [
                ["Base case", "The condition that stops the recursion", "Infinite recursion → RecursionError"],
                ["Recursive case", "The function calls itself with a simpler input", "The function never calls itself — not recursive"],
                ["Progress towards base", "Each call must move closer to the base case", "Infinite recursion even with a base case"],
            ]
        ),

        heading("Factorial Using Recursion"),

        definition(
            "Factorial",
            "The product of all positive integers up to n. Denoted as n! For example, 5! = 5 × 4 × 3 × 2 × 1 = 120. By definition, 0! = 1."
        ),

        code(
            `def factorial(n):
    # Base case
    if n == 0 or n == 1:
        return 1
    # Recursive case
    return n * factorial(n - 1)

print(factorial(5))  # 120
print(factorial(0))  # 1

# How it works for factorial(5):
# 5 * factorial(4)
# 5 * 4 * factorial(3)
# 5 * 4 * 3 * factorial(2)
# 5 * 4 * 3 * 2 * factorial(1)
# 5 * 4 * 3 * 2 * 1 = 120`,
            "python",
            "Factorial using recursion"
        ),

        heading("Fibonacci Series Using Recursion"),

        code(
            `def fibonacci(n):
    # Base cases
    if n <= 0:
        return 0
    elif n == 1:
        return 1
    # Recursive case
    return fibonacci(n - 1) + fibonacci(n - 2)

# Print first 10 Fibonacci numbers
for i in range(10):
    print(fibonacci(i), end=" ")
# Output: 0 1 1 2 3 5 8 13 21 34`,
            "python",
            "Fibonacci using recursion"
        ),

        note(
            "The naive recursive Fibonacci has exponential time complexity O(2^n) because it recalculates the same values many times. For large n, use memoisation or an iterative approach instead.",
            "warning",
            "Performance"
        ),

        heading("Sum of Digits Using Recursion"),

        code(
            `def sum_of_digits(n):
    if n == 0:
        return 0
    return (n % 10) + sum_of_digits(n // 10)

print(sum_of_digits(1234))  # 10  (1+2+3+4)
print(sum_of_digits(999))   # 27  (9+9+9)`,
            "python",
            "Sum of digits recursively"
        ),

        heading("Tower of Hanoi"),

        code(
            `def hanoi(n, source, target, auxiliary):
    if n == 1:
        print(f"Move disk 1 from {source} to {target}")
        return
    hanoi(n - 1, source, auxiliary, target)
    print(f"Move disk {n} from {source} to {target}")
    hanoi(n - 1, auxiliary, target, source)

hanoi(3, "A", "C", "B")
# Move disk 1 from A to C
# Move disk 2 from A to B
# Move disk 1 from C to B
# Move disk 3 from A to C
# Move disk 1 from B to A
# Move disk 2 from B to C
# Move disk 1 from A to C`,
            "python",
            "Tower of Hanoi"
        ),

        heading("Recursion Limit and Memoisation"),

        code(
            `import sys

# Check default recursion limit
print(sys.getrecursionlimit())  # Usually 1000

# Increase if needed (use cautiously)
sys.setrecursionlimit(2000)

# Memoisation to optimise recursive Fibonacci
def fib_memo(n, memo={}):
    if n in memo:
        return memo[n]
    if n <= 1:
        return n
    memo[n] = fib_memo(n - 1, memo) + fib_memo(n - 2, memo)
    return memo[n]

print(fib_memo(50))  # 12586269025 — instant!`,
            "python",
            "Recursion limit and memoisation"
        ),

        heading("Recursion versus Iteration"),

        table(
            ["Aspect", "Recursion", "Iteration"],
            [
                ["Code length", "Usually shorter and cleaner", "May require more lines"],
                ["Readability", "Elegant for naturally recursive problems", "Clear for simple loops"],
                ["Memory", "Uses call stack — can overflow", "Uses constant memory"],
                ["Speed", "Slower due to function call overhead", "Faster"],
                ["Debugging", "Harder to trace", "Easier to trace"],
                ["Best for", "Trees, graphs, divide and conquer", "Simple counting and accumulation"],
            ]
        ),

        keyPoints([
            "Every recursive function needs a base case and a recursive case that moves towards it.",
            "Factorial and Fibonacci are classic examples of recursive problems.",
            "Python's default recursion limit is 1000; exceeding it raises RecursionError.",
            "Memoisation stores previously computed results to avoid redundant calculations.",
            "Use recursion for naturally recursive problems; prefer iteration for simple loops.",
        ]),
    ],

    {
        summary:
            "Understand recursion with factorial, Fibonacci, Tower of Hanoi, and learn about recursion limits and memoisation.",
        minutes: 12,
        tags: ["python", "recursion", "factorial", "fibonacci", "important"],

        mcqs: [
            mcq(
                "What is the base case in a recursive factorial function?",
                ["n == 10", "n == 0 or n == 1", "n < 0", "n == n"],
                1,
                "The base case for factorial is n == 0 or n == 1, both returning 1."
            ),
            mcq(
                "What happens if a recursive function has no base case?",
                ["It returns 0", "It returns None", "It causes infinite recursion and RecursionError", "It runs once and stops"],
                2,
                "Without a base case, the function calls itself forever until Python raises a RecursionError."
            ),
            mcq(
                "What is Python's default recursion limit?",
                ["100", "500", "1000", "10000"],
                2,
                "Python's default recursion limit is typically 1000."
            ),
            mcq(
                "What is the time complexity of naive recursive Fibonacci?",
                ["O(n)", "O(n log n)", "O(2^n)", "O(n²)"],
                2,
                "Naive recursive Fibonacci has exponential O(2^n) time complexity due to redundant calculations."
            ),
            mcq(
                "What technique stores previously computed results to speed up recursion?",
                ["Iteration", "Memoisation", "Compilation", "Inlining"],
                1,
                "Memoisation caches previously computed results to avoid redundant recursive calls."
            ),
        ],

        questions: [
            qa(
                "What is recursion? Explain its components with an example.",
                "Recursion is a technique where a function calls itself to solve a problem by breaking it into smaller subproblems. Every recursive function has two components: a base case that stops the recursion, and a recursive case that calls the function with a simpler input. For example, in factorial(n), the base case is n == 0 or n == 1, which returns 1. The recursive case is return n * factorial(n-1), which multiplies n by the factorial of n-1. For factorial(5), the calls unfold as 5*factorial(4), then 5*4*factorial(3), and so on until factorial(1) returns 1, giving 5*4*3*2*1 = 120.",
                5
            ),
            qa(
                "Write a recursive function to compute the Fibonacci series and explain why memoisation is needed.",
                "The recursive Fibonacci function is: def fibonacci(n): if n <= 0: return 0; elif n == 1: return 1; else: return fibonacci(n-1) + fibonacci(n-2). This works correctly but has exponential O(2^n) time complexity because it recalculates the same values many times. For example, fibonacci(5) calls fibonacci(3) twice and fibonacci(2) three times. Memoisation solves this by storing previously computed results in a dictionary. When a value is needed, the function first checks the dictionary before making recursive calls, reducing the time complexity to O(n).",
                5
            ),
            qa(
                "Compare recursion and iteration.",
                "Recursion usually produces shorter and more elegant code, especially for naturally recursive problems like tree traversal and divide-and-conquer algorithms, but it uses the call stack for each function call, consuming more memory and risking a stack overflow for deep recursion. It is also slower due to function call overhead and harder to debug. Iteration uses loops and typically requires more lines of code, but it uses constant memory, runs faster, and is easier to trace and debug. Iteration is preferred for simple counting and accumulation tasks, while recursion is best for problems with a naturally recursive structure.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 5 — Exception Handling
========================================================= */

const exceptionHandling = createTopic(
    "exception-handling",
    "Exception Handling",

    [
        definition(
            "Exception",
            "An event that occurs during the execution of a program and disrupts the normal flow of instructions. In Python, exceptions are objects that represent errors."
        ),

        text(
            "No matter how carefully you write code, errors will occur — users enter invalid data, files go missing, networks fail. Exception handling allows your program to detect these errors, respond gracefully and continue running instead of crashing abruptly."
        ),

        heading("Types of Errors in Python"),

        table(
            ["Error Type", "When It Occurs", "Example"],
            [
                ["Syntax Error", "Before execution, when code violates grammar rules", "print('hello'  → missing )"],
                ["Runtime Error (Exception)", "During execution, when an operation cannot be performed", "10 / 0 → ZeroDivisionError"],
                ["Logical Error", "Program runs but produces wrong results", "Using + instead of * in a formula"],
            ]
        ),

        note(
            "Syntax errors are caught by the interpreter before the program runs and cannot be handled by try-except. Only runtime errors (exceptions) can be caught and handled.",
            "exam",
            "Frequently Asked"
        ),

        heading("The try-except Block"),

        code(
            `# Basic try-except
try:
    num = int(input("Enter a number: "))
    result = 10 / num
    print(f"Result: {result}")
except ValueError:
    print("Error: Please enter a valid integer.")
except ZeroDivisionError:
    print("Error: Cannot divide by zero.")`,
            "python",
            "Basic try-except"
        ),

        heading("try-except-else-finally"),

        table(
            ["Block", "When It Executes"],
            [
                ["try", "The code that might raise an exception"],
                ["except", "Only if an exception occurs in the try block"],
                ["else", "Only if NO exception occurs in the try block"],
                ["finally", "Always, regardless of whether an exception occurred or not"],
            ]
        ),

        code(
            `def divide(a, b):
    try:
        result = a / b
    except ZeroDivisionError:
        print("Error: Division by zero!")
        return None
    except TypeError:
        print("Error: Both arguments must be numbers!")
        return None
    else:
        print("Division successful!")
        return result
    finally:
        print("Execution of divide() complete.")

print(divide(10, 3))
# Division successful!
# Execution of divide() complete.
# 3.333...

print(divide(10, 0))
# Error: Division by zero!
# Execution of divide() complete.
# None`,
            "python",
            "Complete try-except-else-finally"
        ),

        heading("Catching Multiple Exceptions"),

        code(
            `# Method 1: Separate except blocks
try:
    x = int("abc")
except ValueError:
    print("Value error")
except TypeError:
    print("Type error")

# Method 2: Single except for multiple types
try:
    x = int("abc")
except (ValueError, TypeError) as e:
    print(f"Error: {e}")

# Method 3: Catch all exceptions (use sparingly)
try:
    risky_operation()
except Exception as e:
    print(f"Something went wrong: {e}")`,
            "python",
            "Catching multiple exceptions"
        ),

        note(
            "Avoid using a bare except: clause that catches everything including KeyboardInterrupt and SystemExit. Always catch Exception or specific exception types instead.",
            "warning",
            "Best Practice"
        ),

        heading("Common Built-in Exceptions"),

        table(
            ["Exception", "Raised When", "Example"],
            [
                ["SyntaxError", "Invalid Python syntax", "if True print('hi')"],
                ["TypeError", "Wrong type for an operation", "'2' + 2"],
                ["ValueError", "Right type but inappropriate value", "int('abc')"],
                ["IndexError", "List index out of range", "[1,2][5]"],
                ["KeyError", "Dictionary key not found", "{}['missing']"],
                ["FileNotFoundError", "File does not exist", "open('no_such_file.txt')"],
                ["ZeroDivisionError", "Division or modulo by zero", "10 / 0"],
                ["AttributeError", "Object has no such attribute", "'hello'.append(1)"],
                ["ImportError", "Module cannot be imported", "import nonexistent_module"],
                ["NameError", "Variable name not defined", "print(undefined_var)"],
                ["RecursionError", "Maximum recursion depth exceeded", "Infinite recursion"],
                ["MemoryError", "Not enough memory", "Creating a huge list"],
            ]
        ),

        heading("Raising Exceptions"),

        code(
            `# Using raise to trigger an exception manually
def set_age(age):
    if age < 0:
        raise ValueError("Age cannot be negative")
    if age > 150:
        raise ValueError("Age seems unrealistic")
    return age

try:
    set_age(-5)
except ValueError as e:
    print(e)  # Age cannot be negative`,
            "python",
            "Raising exceptions with raise"
        ),

        heading("Custom Exceptions"),

        code(
            `# Define a custom exception by inheriting from Exception
class InsufficientFundsError(Exception):
    def __init__(self, balance, amount):
        self.balance = balance
        self.amount = amount
        super().__init__(
            f"Cannot withdraw ₹{amount}. Balance is only ₹{balance}."
        )

class BankAccount:
    def __init__(self, balance):
        self.balance = balance
    
    def withdraw(self, amount):
        if amount > self.balance:
            raise InsufficientFundsError(self.balance, amount)
        self.balance -= amount
        return self.balance

# Usage
account = BankAccount(1000)
try:
    account.withdraw(1500)
except InsufficientFundsError as e:
    print(e)
    # Cannot withdraw ₹1500. Balance is only ₹1000.
    print(f"Short by: ₹{e.amount - e.balance}")
    # Short by: ₹500`,
            "python",
            "Creating custom exceptions"
        ),

        heading("Exception Hierarchy"),

        text(
            "All exceptions in Python inherit from the BaseException class. The Exception class is the base for most user-handled exceptions. Understanding the hierarchy helps you catch exceptions at the right level."
        ),

        table(
            ["Level", "Class", "Examples"],
            [
                ["Root", "BaseException", "All exceptions inherit from this"],
                ["System", "SystemExit, KeyboardInterrupt", "Raised by sys.exit() and Ctrl+C"],
                ["General", "Exception", "Base for most regular exceptions"],
                ["Specific", "ValueError, TypeError, KeyError", "Specific error conditions"],
            ]
        ),

        heading("Best Practices for Exception Handling"),

        list([
            "Catch specific exceptions rather than using a bare except.",
            "Keep the try block as small as possible — only wrap the risky code.",
            "Use else for code that should run only when no exception occurs.",
            "Use finally for cleanup operations like closing files or database connections.",
            "Provide meaningful error messages that help with debugging.",
            "Log exceptions for production applications using the logging module.",
            "Create custom exceptions for domain-specific error conditions.",
            "Never silently ignore exceptions with a bare except: pass.",
        ], true),

        keyPoints([
            "Exceptions are runtime errors that can be caught and handled using try-except.",
            "The else block runs only if no exception occurred; finally always runs.",
            "Catch specific exceptions rather than using a bare except clause.",
            "Use raise to manually trigger exceptions and create custom exception classes.",
            "The finally block is ideal for cleanup: closing files, releasing resources.",
        ]),
    ],

    {
        summary:
            "Master exception handling with try-except-else-finally, learn to raise and create custom exceptions, and follow best practices.",
        minutes: 13,
        tags: ["python", "exceptions", "error-handling", "important"],

        mcqs: [
            mcq(
                "Which block always executes regardless of whether an exception occurred?",
                ["try", "except", "else", "finally"],
                3,
                "The finally block always executes, whether an exception occurred or not."
            ),
            mcq(
                "The else block in try-except runs when:",
                ["An exception occurs", "No exception occurs", "Always", "Only with finally"],
                1,
                "The else block executes only if the try block completes without raising an exception."
            ),
            mcq(
                "Which keyword is used to manually trigger an exception?",
                ["throw", "raise", "except", "error"],
                1,
                "Python uses the raise keyword to manually trigger an exception."
            ),
            mcq(
                "What exception is raised when you access a missing dictionary key?",
                ["IndexError", "ValueError", "KeyError", "AttributeError"],
                2,
                "Accessing a dictionary with a key that does not exist raises a KeyError."
            ),
            mcq(
                "Custom exceptions should inherit from:",
                ["BaseException", "Exception", "Error", "RuntimeError"],
                1,
                "Custom exceptions should inherit from the Exception class."
            ),
            mcq(
                "Which of the following is NOT a good practice?",
                ["Catching specific exceptions", "Using finally for cleanup", "Using bare except: pass", "Providing meaningful error messages"],
                2,
                "Using a bare except: pass silently ignores all errors, making debugging very difficult."
            ),
        ],

        questions: [
            qa(
                "Explain the try-except-else-finally block with an example.",
                "The try block contains the code that might raise an exception. The except block handles specific exceptions if they occur. The else block runs only if no exception was raised in the try block. The finally block always executes regardless of whether an exception occurred. For example, in a division function, the try block performs a/b, the except ZeroDivisionError block prints an error message, the else block prints 'Division successful' and returns the result, and the finally block prints 'Execution complete'. If a=10 and b=3, the else and finally blocks both run. If b=0, the except and finally blocks run but else does not.",
                5
            ),
            qa(
                "How do you create a custom exception in Python? Give an example.",
                "A custom exception is created by defining a new class that inherits from the built-in Exception class. For example, class InsufficientFundsError(Exception): def __init__(self, balance, amount): self.balance = balance; self.amount = amount; super().__init__(f'Cannot withdraw {amount}. Balance is {balance}.'). This custom exception can then be raised using the raise keyword: if amount > balance: raise InsufficientFundsError(balance, amount). It can be caught like any other exception: except InsufficientFundsError as e: print(e). Custom exceptions make error handling more specific and meaningful for your application's domain.",
                5
            ),
            qa(
                "List five best practices for exception handling in Python.",
                "First, catch specific exceptions like ValueError or KeyError rather than using a bare except clause, which catches everything including system-level exceptions. Second, keep the try block as small as possible by wrapping only the code that might actually raise an exception. Third, use the else block for code that should run only when no exception occurs, keeping it separate from the try block. Fourth, use the finally block for cleanup operations such as closing files, releasing locks or closing database connections, because it always executes. Fifth, never silently ignore exceptions with except: pass — at minimum, log the error so it can be diagnosed later.",
                5
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit3Topics = [
    compositeDataStructures,
    functionsBasics,
    lambdaAndHigherOrder,
    recursion,
    exceptionHandling,
];