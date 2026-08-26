/* =========================================================
   MSc-IT • SEM 1 • Python Programming
   UNIT 1 — Introduction to Python
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
   TOPIC 1 — History and Features of Python
========================================================= */

const historyAndFeatures = createTopic(
    "history-and-features-of-python",
    "History and Features of Python",

    [
        definition(
            "Python",
            "A high-level, interpreted, general-purpose programming language that emphasises code readability and supports multiple programming paradigms including procedural, object-oriented and functional programming."
        ),

        text(
            "Python was created by Guido van Rossum at Centrum Wiskunde & Informatica (CWI) in the Netherlands. Development began in the late 1980s and the first version was released in 1991. The name Python was inspired by the British comedy group Monty Python's Flying Circus, not the snake."
        ),

        heading("Evolution of Python"),

        table(
            ["Version", "Year", "Key Milestone"],
            [
                ["Python 0.9", "1991", "First release with classes, functions and exception handling."],
                ["Python 1.0", "1994", "Added lambda, map, filter and reduce."],
                ["Python 2.0", "2000", "Introduced list comprehensions and garbage collection."],
                ["Python 2.7", "2010", "Last major release of the 2.x series."],
                ["Python 3.0", "2008", "Major redesign, not backward compatible with 2.x."],
                ["Python 3.6", "2016", "Introduced f-strings for string formatting."],
                ["Python 3.10", "2021", "Added structural pattern matching (match-case)."],
                ["Python 3.12", "2023", "Improved error messages and performance."],
            ]
        ),

        note(
            "Python 2 reached its official end of life on 1 January 2020. All new projects should use Python 3. The two versions are not backward compatible, meaning Python 2 code may not run on Python 3 without modification.",
            "warning",
            "Important"
        ),

        heading("Key Features of Python"),

        list([
            "Simple and readable syntax that resembles plain English.",
            "Interpreted language — code is executed line by line without a separate compilation step.",
            "Dynamically typed — variable types are determined at runtime, no need to declare them.",
            "Platform independent — runs on Windows, macOS, Linux and other operating systems.",
            "Extensive standard library — often described as 'batteries included'.",
            "Supports multiple paradigms: procedural, object-oriented and functional.",
            "Automatic memory management through garbage collection.",
            "Large and active community with thousands of third-party packages on PyPI.",
            "Free and open source under the Python Software Foundation License.",
            "Can be embedded in other applications and can call C/C++ libraries.",
        ]),

        heading("Python versus Other Languages"),

        table(
            ["Feature", "Python", "Java", "C++"],
            [
                ["Type system", "Dynamic", "Static", "Static"],
                ["Compilation", "Interpreted", "Compiled to bytecode", "Compiled to machine code"],
                ["Syntax", "Indentation-based", "Brace-based", "Brace-based"],
                ["Memory management", "Automatic (GC)", "Automatic (GC)", "Manual / Smart pointers"],
                ["Learning curve", "Easy", "Moderate", "Steep"],
                ["Speed", "Slower", "Fast", "Very fast"],
                ["Use cases", "Web, AI, data, scripting", "Enterprise, Android", "Systems, games, embedded"],
            ]
        ),

        heading("Applications of Python"),

        table(
            ["Domain", "Examples"],
            [
                ["Web Development", "Django, Flask, FastAPI"],
                ["Data Science and Analytics", "Pandas, NumPy, Matplotlib"],
                ["Machine Learning and AI", "TensorFlow, PyTorch, Scikit-learn"],
                ["Automation and Scripting", "Automating file operations, web scraping"],
                ["Scientific Computing", "SciPy, SymPy"],
                ["Desktop Applications", "Tkinter, PyQt"],
                ["Network Programming", "Socket programming, Paramiko"],
                ["Game Development", "Pygame"],
            ]
        ),

        keyPoints([
            "Python was created by Guido van Rossum and first released in 1991.",
            "Python 3 is the current standard; Python 2 reached end of life in 2020.",
            "Python is interpreted, dynamically typed and platform independent.",
            "Its extensive standard library and third-party ecosystem make it versatile.",
            "Python is widely used in web development, data science, AI and automation.",
        ]),
    ],

    {
        summary:
            "Understand the origin, evolution, key features and real-world applications of the Python programming language.",
        minutes: 10,
        tags: ["python", "introduction", "history", "important"],

        mcqs: [
            mcq(
                "Who created the Python programming language?",
                ["James Gosling", "Guido van Rossum", "Bjarne Stroustrup", "Dennis Ritchie"],
                1,
                "Python was created by Guido van Rossum at CWI in the Netherlands."
            ),
            mcq(
                "Python was named after:",
                ["A type of snake", "Monty Python's Flying Circus", "A Greek mythological figure", "A mathematical concept"],
                1,
                "The name was inspired by the British comedy group Monty Python's Flying Circus."
            ),
            mcq(
                "Python 2 reached its official end of life on:",
                ["1 January 2015", "1 January 2018", "1 January 2020", "1 January 2022"],
                2,
                "Python 2 officially reached end of life on 1 January 2020."
            ),
            mcq(
                "Python is described as 'batteries included' because:",
                ["It requires external batteries to run", "It has an extensive standard library", "It comes with hardware", "It is only for embedded systems"],
                1,
                "The phrase refers to Python's extensive standard library that covers many tasks out of the box."
            ),
            mcq(
                "Which of the following is NOT a feature of Python?",
                ["Dynamically typed", "Interpreted", "Compiled to machine code", "Platform independent"],
                2,
                "Python is interpreted, not compiled directly to machine code like C++."
            ),
            mcq(
                "F-strings for string formatting were introduced in Python:",
                ["2.7", "3.0", "3.6", "3.10"],
                2,
                "F-strings were introduced in Python 3.6."
            ),
        ],

        questions: [
            qa(
                "Explain the key features of Python that make it popular.",
                "Python is popular because of its simple and readable syntax that resembles plain English, making it easy to learn. It is an interpreted language, so code runs line by line without a separate compilation step. It is dynamically typed, meaning variable types are determined at runtime. Python is platform independent and runs on Windows, macOS and Linux. It has an extensive standard library described as 'batteries included', supports multiple programming paradigms including procedural, object-oriented and functional, provides automatic memory management through garbage collection, and has a large community with thousands of third-party packages.",
                5
            ),
            qa(
                "Compare Python with Java and C++ on at least five criteria.",
                "Python uses dynamic typing while Java and C++ use static typing. Python is interpreted whereas Java is compiled to bytecode and C++ is compiled to machine code. Python uses indentation for code blocks while Java and C++ use braces. Python has automatic garbage collection, Java also has automatic garbage collection, but C++ requires manual memory management or smart pointers. Python has an easier learning curve compared to the moderate curve of Java and the steep curve of C++. In terms of speed, Python is slower, Java is fast and C++ is very fast.",
                5
            ),
            qa(
                "List any five application domains of Python with examples of libraries used.",
                "In web development, Python uses frameworks like Django, Flask and FastAPI. In data science and analytics, libraries like Pandas, NumPy and Matplotlib are used. For machine learning and AI, TensorFlow, PyTorch and Scikit-learn are popular. In automation and scripting, Python is used for automating file operations and web scraping with libraries like BeautifulSoup. For scientific computing, SciPy and SymPy are widely used.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — Python Installation and Environment Setup
========================================================= */

const installationAndSetup = createTopic(
    "installation-and-environment-setup",
    "Python Installation and Environment Setup",

    [
        text(
            "Before writing Python programs, you need to install the Python interpreter on your computer and choose a suitable development environment. Python is available free of charge from the official website."
        ),

        heading("Installing Python"),

        steps([
            "Visit the official website at python.org and navigate to the Downloads section.",
            "Download the latest stable version of Python 3 for your operating system.",
            "Run the installer. On Windows, check the box 'Add Python to PATH' before clicking Install.",
            "On macOS, you can also install Python using Homebrew: brew install python.",
            "On Linux, Python is usually pre-installed. Update it using your package manager.",
            "Verify the installation by opening a terminal or command prompt and typing python --version.",
        ]),

        note(
            "On Windows, if you forget to check 'Add Python to PATH' during installation, you will need to add it manually through System Environment Variables, or the python command will not be recognised in the command prompt.",
            "warning",
            "Common Mistake"
        ),

        heading("The Python Interpreter"),

        definition(
            "Interpreter",
            "A program that reads and executes Python code line by line without producing a separate executable file."
        ),

        table(
            ["Mode", "How to Start", "Use Case"],
            [
                ["Interactive (REPL)", "Type python in terminal", "Quick testing and experimentation"],
                ["Script mode", "python filename.py", "Running complete programs saved in .py files"],
            ]
        ),

        heading("The REPL"),

        definition(
            "REPL",
            "Read-Evaluate-Print Loop — an interactive environment where you type a Python expression, the interpreter evaluates it, prints the result and waits for the next input."
        ),

        code(
            `$ python
Python 3.12.0 (main, Oct  2 2023, 00:00:00)
[GCC 13.2.1] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> 2 + 3
5
>>> print("Hello, World!")
Hello, World!
>>> exit()`,
            "text",
            "Using the Python REPL"
        ),

        heading("Integrated Development Environments (IDEs)"),

        table(
            ["IDE / Editor", "Type", "Key Features"],
            [
                ["IDLE", "Built-in with Python", "Simple, lightweight, good for beginners"],
                ["VS Code", "Free code editor", "Extensions, IntelliSense, integrated terminal"],
                ["PyCharm", "Full IDE (Community free)", "Powerful debugger, refactoring, Django support"],
                ["Jupyter Notebook", "Web-based", "Interactive cells, ideal for data science"],
                ["Spyder", "Free IDE", "Scientific computing, variable explorer"],
                ["Thonny", "Free IDE", "Designed for beginners, step-through debugger"],
            ]
        ),

        heading("Running a Python Script"),

        steps([
            "Open your text editor or IDE and create a new file.",
            "Write your Python code and save the file with a .py extension, for example hello.py.",
            "Open a terminal or command prompt.",
            "Navigate to the folder containing your file using the cd command.",
            "Type python hello.py and press Enter to execute the program.",
        ]),

        code(
            `# hello.py
print("Hello, World!")
name = input("What is your name? ")
print(f"Welcome to Python, {name}!")`,
            "python",
            "A simple Python script"
        ),

        output(
            `Hello, World!
What is your name? Rahul
Welcome to Python, Rahul!`
        ),

        heading("Virtual Environments"),

        definition(
            "Virtual Environment",
            "An isolated Python environment that allows you to install packages specific to a project without affecting the global Python installation."
        ),

        code(
            `# Create a virtual environment
python -m venv myenv

# Activate on Windows
myenv\\Scripts\\activate

# Activate on macOS/Linux
source myenv/bin/activate

# Install a package
pip install requests

# Deactivate
deactivate`,
            "bash",
            "Working with virtual environments"
        ),

        heading("pip — The Python Package Manager"),

        definition(
            "pip",
            "The standard package manager for Python used to install and manage third-party libraries from the Python Package Index (PyPI)."
        ),

        table(
            ["Command", "Purpose"],
            [
                ["pip install package_name", "Install a package"],
                ["pip install package==1.2.3", "Install a specific version"],
                ["pip uninstall package_name", "Remove a package"],
                ["pip list", "Show all installed packages"],
                ["pip freeze > requirements.txt", "Save installed packages to a file"],
                ["pip install -r requirements.txt", "Install packages from a requirements file"],
                ["pip install --upgrade package_name", "Upgrade a package to the latest version"],
            ]
        ),

        keyPoints([
            "Download Python from python.org and add it to PATH during installation.",
            "The REPL is useful for quick testing; script mode is for running saved programs.",
            "Popular IDEs include VS Code, PyCharm and Jupyter Notebook.",
            "Virtual environments isolate project dependencies from the global installation.",
            "pip is used to install, upgrade and manage third-party Python packages.",
        ]),
    ],

    {
        summary:
            "Install Python, set up an IDE, run scripts, and manage packages using pip and virtual environments.",
        minutes: 10,
        tags: ["python", "installation", "setup", "pip"],

        mcqs: [
            mcq(
                "REPL stands for:",
                ["Run-Execute-Print-Loop", "Read-Evaluate-Print-Loop", "Read-Execute-Process-Loop", "Run-Evaluate-Print-Load"],
                1,
                "REPL stands for Read-Evaluate-Print Loop."
            ),
            mcq(
                "Which IDE is built-in with Python?",
                ["VS Code", "PyCharm", "IDLE", "Jupyter"],
                2,
                "IDLE is the built-in IDE that comes with every Python installation."
            ),
            mcq(
                "A Python script file must have which extension?",
                [".python", ".pt", ".py", ".pn"],
                2,
                "Python script files use the .py extension."
            ),
            mcq(
                "Which command installs a Python package using pip?",
                ["pip get package", "pip add package", "pip install package", "pip download package"],
                2,
                "The correct command is pip install followed by the package name."
            ),
            mcq(
                "A virtual environment is used to:",
                ["Speed up Python execution", "Isolate project dependencies", "Compile Python to machine code", "Debug Python programs"],
                1,
                "Virtual environments isolate project-specific packages from the global Python installation."
            ),
        ],

        questions: [
            qa(
                "Explain the steps to install Python and verify the installation.",
                "First, visit python.org and download the latest stable version of Python 3 for your operating system. Run the installer and, on Windows, make sure to check the box 'Add Python to PATH' before clicking Install. On macOS you can use Homebrew with the command brew install python, and on Linux you can update Python through the package manager. After installation, open a terminal or command prompt and type python --version to verify that Python is installed correctly and the version number is displayed.",
                4
            ),
            qa(
                "What is a virtual environment and why is it useful?",
                "A virtual environment is an isolated Python environment that allows you to install packages specific to a project without affecting the global Python installation. It is useful because different projects may require different versions of the same package, and installing everything globally can lead to version conflicts. A virtual environment keeps each project's dependencies separate and makes it easy to reproduce the environment on another machine using a requirements.txt file.",
                4
            ),
            qa(
                "Explain the use of pip with at least five commands.",
                "pip is the standard package manager for Python. The command pip install package_name installs a package from PyPI. pip install package==1.2.3 installs a specific version. pip uninstall package_name removes a package. pip list shows all installed packages. pip freeze > requirements.txt saves the list of installed packages and their versions to a file, and pip install -r requirements.txt installs all packages listed in that file, which is useful for reproducing an environment.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — Basic Syntax, Variables and Data Types
========================================================= */

const basicSyntaxAndVariables = createTopic(
    "basic-syntax-variables-and-data-types",
    "Basic Syntax, Variables and Data Types",

    [
        text(
            "Python's syntax is designed to be clean and readable. Unlike languages such as C, C++ or Java, Python uses indentation to define code blocks instead of curly braces, and it does not require semicolons at the end of statements."
        ),

        heading("Indentation"),

        definition(
            "Indentation",
            "The use of leading whitespace (spaces or tabs) at the beginning of a line to define the structure and grouping of code blocks in Python."
        ),

        code(
            `# Correct indentation
if True:
    print("This is inside the if block")
    print("This is also inside")
print("This is outside the if block")

# Incorrect indentation — causes IndentationError
if True:
print("This will cause an error")`,
            "python",
            "Indentation defines code blocks"
        ),

        note(
            "PEP 8, the official Python style guide, recommends using 4 spaces per indentation level. Never mix tabs and spaces in the same file, as this will cause a TabError in Python 3.",
            "warning",
            "Style Rule"
        ),

        heading("Comments"),

        table(
            ["Type", "Syntax", "Example"],
            [
                ["Single-line comment", "# followed by text", "# This is a comment"],
                ["Multi-line comment", "Triple quotes ''' or \"\"\"", "''' This spans\\nmultiple lines '''"],
            ]
        ),

        code(
            `# This is a single-line comment
x = 10  # This is an inline comment

"""
This is a multi-line comment
or docstring. It can span
several lines.
"""`,
            "python",
            "Types of comments in Python"
        ),

        heading("Variables"),

        definition(
            "Variable",
            "A name that refers to a value stored in memory. In Python, variables are created the moment you assign a value to them — no explicit declaration is needed."
        ),

        code(
            `# Variable assignment
name = "Rahul"
age = 22
height = 5.8
is_student = True

# Multiple assignment
a, b, c = 1, 2, 3
x = y = z = 0

# Type checking
print(type(name))    # <class 'str'>
print(type(age))     # <class 'int'>
print(type(height))  # <class 'float'>`,
            "python",
            "Creating and checking variables"
        ),

        heading("Variable Naming Rules"),

        list([
            "Must begin with a letter (a-z, A-Z) or an underscore (_).",
            "Can contain letters, digits (0-9) and underscores.",
            "Cannot begin with a digit.",
            "Cannot be a Python reserved keyword (such as if, for, class, return).",
            "Python is case-sensitive: Name, name and NAME are three different variables.",
            "By convention, use snake_case for variable names: my_variable, student_age.",
        ]),

        heading("Reserved Keywords"),

        table(
            ["", "", "", "", ""],
            [
                ["False", "None", "True", "and", "as"],
                ["assert", "async", "await", "break", "class"],
                ["continue", "def", "del", "elif", "else"],
                ["except", "finally", "for", "from", "global"],
                ["if", "import", "in", "is", "lambda"],
                ["nonlocal", "not", "or", "pass", "raise"],
                ["return", "try", "while", "with", "yield"],
            ]
        ),

        heading("Built-in Data Types"),

        table(
            ["Category", "Type", "Example", "Mutable?"],
            [
                ["Numeric", "int", "42, -7, 0", "No (immutable)"],
                ["Numeric", "float", "3.14, -0.5", "No (immutable)"],
                ["Numeric", "complex", "3 + 4j", "No (immutable)"],
                ["Text", "str", "'hello', \"world\"", "No (immutable)"],
                ["Boolean", "bool", "True, False", "No (immutable)"],
                ["Sequence", "list", "[1, 2, 3]", "Yes"],
                ["Sequence", "tuple", "(1, 2, 3)", "No (immutable)"],
                ["Set", "set", "{1, 2, 3}", "Yes"],
                ["Mapping", "dict", "{'a': 1}", "Yes"],
                ["None", "NoneType", "None", "—"],
            ]
        ),

        heading("Type Conversion"),

        table(
            ["Function", "Converts To", "Example", "Result"],
            [
                ["int()", "Integer", "int('42')", "42"],
                ["float()", "Float", "float('3.14')", "3.14"],
                ["str()", "String", "str(100)", "'100'"],
                ["bool()", "Boolean", "bool(0)", "False"],
                ["list()", "List", "list('abc')", "['a', 'b', 'c']"],
                ["tuple()", "Tuple", "tuple([1, 2])", "(1, 2)"],
                ["set()", "Set", "set([1, 1, 2])", "{1, 2}"],
            ]
        ),

        note(
            "In Python, the values 0, 0.0, empty string '', empty list [], empty tuple (), empty dict {} and None all evaluate to False in a boolean context. Everything else evaluates to True.",
            "tip",
            "Truthy and Falsy"
        ),

        keyPoints([
            "Python uses indentation (4 spaces recommended) instead of braces for code blocks.",
            "Variables are created by assignment and do not need explicit type declaration.",
            "Variable names must start with a letter or underscore and cannot be keywords.",
            "Python has built-in types: int, float, str, bool, list, tuple, set, dict and NoneType.",
            "Type conversion functions like int(), float() and str() convert between types.",
        ]),
    ],

    {
        summary:
            "Learn Python's indentation rules, comments, variable naming conventions, built-in data types and type conversion.",
        minutes: 12,
        tags: ["python", "syntax", "variables", "data-types", "important"],

        mcqs: [
            mcq(
                "Python uses which of the following to define code blocks?",
                ["Curly braces {}", "Parentheses ()", "Indentation", "Square brackets []"],
                2,
                "Python uses indentation to define code blocks, unlike most other languages that use braces."
            ),
            mcq(
                "Which of the following is a valid Python variable name?",
                ["2name", "my-var", "_count", "class"],
                2,
                "_count is valid because it starts with an underscore. 2name starts with a digit, my-var contains a hyphen, and class is a reserved keyword."
            ),
            mcq(
                "What is the output of type(3.14)?",
                ["<class 'int'>", "<class 'float'>", "<class 'str'>", "<class 'double'>"],
                1,
                "3.14 is a floating-point number, so its type is float."
            ),
            mcq(
                "What does bool(0) return?",
                ["True", "False", "0", "None"],
                1,
                "Zero is a falsy value in Python, so bool(0) returns False."
            ),
            mcq(
                "How many spaces does PEP 8 recommend per indentation level?",
                ["2", "3", "4", "8"],
                2,
                "PEP 8 recommends 4 spaces per indentation level."
            ),
            mcq(
                "Which of the following is NOT a Python data type?",
                ["int", "float", "char", "bool"],
                2,
                "Python does not have a char type. Single characters are simply strings of length 1."
            ),
        ],

        questions: [
            qa(
                "Explain the rules for naming variables in Python.",
                "A variable name in Python must begin with a letter (a-z or A-Z) or an underscore. It can contain letters, digits and underscores after the first character. It cannot begin with a digit. It cannot be a Python reserved keyword such as if, for, class or return. Python is case-sensitive, so Name and name are different variables. By convention, variable names should use snake_case, such as student_age or total_marks.",
                4
            ),
            qa(
                "List the built-in data types in Python with one example of each.",
                "The numeric types are int (42), float (3.14) and complex (3+4j). The text type is str ('hello'). The boolean type is bool (True or False). The sequence types are list ([1, 2, 3]) and tuple ((1, 2, 3)). The set type is set ({1, 2, 3}). The mapping type is dict ({'a': 1}). The null type is NoneType (None). Among these, list, set and dict are mutable, while int, float, str, bool and tuple are immutable.",
                5
            ),
            qa(
                "What is type conversion? Explain with examples.",
                "Type conversion is the process of converting a value from one data type to another using built-in functions. The function int() converts to integer, for example int('42') gives 42. The function float() converts to float, for example float('3.14') gives 3.14. The function str() converts to string, for example str(100) gives '100'. The function bool() converts to boolean, for example bool(0) gives False. The function list() converts to list, for example list('abc') gives ['a', 'b', 'c'].",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — Operators in Python
========================================================= */

const operators = createTopic(
    "operators-in-python",
    "Operators in Python",

    [
        definition(
            "Operator",
            "A special symbol or keyword that performs an operation on one or more operands (values or variables) and produces a result."
        ),

        heading("Arithmetic Operators"),

        table(
            ["Operator", "Name", "Example", "Result"],
            [
                ["+", "Addition", "5 + 3", "8"],
                ["-", "Subtraction", "10 - 4", "6"],
                ["*", "Multiplication", "6 * 7", "42"],
                ["/", "Division", "15 / 4", "3.75"],
                ["//", "Floor Division", "15 // 4", "3"],
                ["%", "Modulus (Remainder)", "15 % 4", "3"],
                ["**", "Exponentiation", "2 ** 10", "1024"],
            ]
        ),

        note(
            "The / operator always returns a float, even if the result is a whole number (e.g., 10 / 2 gives 5.0). Use // for integer (floor) division, which truncates towards negative infinity.",
            "exam",
            "Frequently Asked"
        ),

        heading("Comparison (Relational) Operators"),

        table(
            ["Operator", "Meaning", "Example", "Result"],
            [
                ["==", "Equal to", "5 == 5", "True"],
                ["!=", "Not equal to", "5 != 3", "True"],
                [">", "Greater than", "10 > 5", "True"],
                ["<", "Less than", "3 < 8", "True"],
                [">=", "Greater than or equal to", "5 >= 5", "True"],
                ["<=", "Less than or equal to", "4 <= 3", "False"],
            ]
        ),

        heading("Logical Operators"),

        table(
            ["Operator", "Meaning", "Example", "Result"],
            [
                ["and", "True if both operands are true", "True and False", "False"],
                ["or", "True if at least one operand is true", "True or False", "True"],
                ["not", "Inverts the boolean value", "not True", "False"],
            ]
        ),

        code(
            `age = 22
has_id = True

if age >= 18 and has_id:
    print("Entry allowed")
else:
    print("Entry denied")

# Output: Entry allowed`,
            "python",
            "Using logical operators"
        ),

        heading("Assignment Operators"),

        table(
            ["Operator", "Equivalent To", "Example"],
            [
                ["=", "Assign", "x = 10"],
                ["+=", "x = x + y", "x += 5"],
                ["-=", "x = x - y", "x -= 3"],
                ["*=", "x = x * y", "x *= 2"],
                ["/=", "x = x / y", "x /= 4"],
                ["//=", "x = x // y", "x //= 3"],
                ["%=", "x = x % y", "x %= 2"],
                ["**=", "x = x ** y", "x **= 2"],
            ]
        ),

        heading("Identity and Membership Operators"),

        table(
            ["Operator", "Meaning", "Example", "Result"],
            [
                ["is", "True if both refer to the same object", "a is b", "Depends"],
                ["is not", "True if they refer to different objects", "a is not b", "Depends"],
                ["in", "True if value is found in the sequence", "'a' in 'apple'", "True"],
                ["not in", "True if value is not found", "'z' in 'apple'", "False"],
            ]
        ),

        code(
            `a = [1, 2, 3]
b = [1, 2, 3]
c = a

print(a == b)    # True  (same values)
print(a is b)    # False (different objects)
print(a is c)    # True  (same object)

print("Python" in "I love Python")  # True
print(5 not in [1, 2, 3])           # True`,
            "python",
            "Identity and membership operators"
        ),

        heading("Bitwise Operators"),

        table(
            ["Operator", "Name", "Example (5 and 3)", "Result"],
            [
                ["&", "AND", "5 & 3", "1"],
                ["|", "OR", "5 | 3", "7"],
                ["^", "XOR", "5 ^ 3", "6"],
                ["~", "NOT", "~5", "-6"],
                ["<<", "Left Shift", "5 << 1", "10"],
                [">>", "Right Shift", "5 >> 1", "2"],
            ]
        ),

        heading("Operator Precedence"),

        table(
            ["Priority", "Operators"],
            [
                ["Highest", "** (Exponentiation)"],
                ["", "~, +, - (Unary)"],
                ["", "*, /, //, % (Multiplicative)"],
                ["", "+, - (Additive)"],
                ["", "<<, >> (Shift)"],
                ["", "& (Bitwise AND)"],
                ["", "^ (Bitwise XOR)"],
                ["", "| (Bitwise OR)"],
                ["", "==, !=, <, >, <=, >= (Comparison)"],
                ["", "is, is not, in, not in (Identity/Membership)"],
                ["", "not (Logical NOT)"],
                ["", "and (Logical AND)"],
                ["Lowest", "or (Logical OR)"],
            ]
        ),

        keyPoints([
            "The / operator always returns a float; use // for integer division.",
            "Logical operators and, or and not work with boolean values.",
            "The is operator checks object identity, while == checks value equality.",
            "The in operator checks membership in sequences like strings, lists and tuples.",
            "Operator precedence determines the order of evaluation in complex expressions.",
        ]),
    ],

    {
        summary:
            "Master arithmetic, comparison, logical, assignment, identity, membership and bitwise operators along with precedence rules.",
        minutes: 11,
        tags: ["python", "operators", "important"],

        mcqs: [
            mcq(
                "What is the result of 15 // 4 in Python?",
                ["3.75", "3", "4", "3.0"],
                1,
                "The // operator performs floor division and returns the integer quotient, which is 3."
            ),
            mcq(
                "What does the ** operator do?",
                ["Multiplication", "Floor division", "Exponentiation", "Modulus"],
                2,
                "The ** operator raises the left operand to the power of the right operand."
            ),
            mcq(
                "What is the result of True and False?",
                ["True", "False", "None", "Error"],
                1,
                "The and operator returns True only if both operands are True."
            ),
            mcq(
                "The is operator checks:",
                ["Value equality", "Object identity", "Type equality", "String matching"],
                1,
                "The is operator checks whether two variables refer to the same object in memory."
            ),
            mcq(
                "What is the result of 5 & 3?",
                ["7", "1", "6", "15"],
                1,
                "5 in binary is 101 and 3 is 011. Bitwise AND gives 001, which is 1."
            ),
            mcq(
                "Which operator has the highest precedence?",
                ["*", "+", "**", "//"],
                2,
                "The exponentiation operator ** has the highest precedence among arithmetic operators."
            ),
        ],

        questions: [
            qa(
                "Explain the difference between / and // operators with examples.",
                "The / operator performs true division and always returns a float result, even when the operands are integers. For example, 15 / 4 gives 3.75 and 10 / 2 gives 5.0. The // operator performs floor division and returns the largest integer less than or equal to the result. For example, 15 // 4 gives 3 and 10 // 2 gives 5. The key difference is that / preserves the decimal part while // truncates it.",
                4
            ),
            qa(
                "Differentiate between == and is operators.",
                "The == operator checks whether two variables have the same value, while the is operator checks whether two variables refer to the exact same object in memory. For example, if a = [1, 2, 3] and b = [1, 2, 3], then a == b returns True because they have the same values, but a is b returns False because they are two separate list objects. However, if c = a, then a is c returns True because both refer to the same object.",
                4
            ),
            qa(
                "Explain the membership operators with examples.",
                "Python has two membership operators: in and not in. The in operator returns True if a value is found within a sequence such as a string, list or tuple. For example, 'a' in 'apple' returns True, and 5 in [1, 2, 3] returns False. The not in operator returns True if the value is not found in the sequence. For example, 'z' not in 'apple' returns True. These operators are very useful for checking the presence of elements without writing explicit loops.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 5 — Input, Output and Control Flow
========================================================= */

const inputOutputAndControlFlow = createTopic(
    "input-output-and-control-flow",
    "Input, Output and Control Flow",

    [
        heading("Output with print()"),

        definition(
            "print()",
            "A built-in function that displays the given object(s) to the standard output (console), followed by a newline by default."
        ),

        code(
            `# Basic print
print("Hello, World!")

# Multiple values
print("Name:", "Rahul", "Age:", 22)

# Separator and end
print("A", "B", "C", sep="-")      # A-B-C
print("Hello", end=" ")
print("World")                       # Hello World

# f-string formatting (Python 3.6+)
name = "Rahul"
marks = 85.5
print(f"{name} scored {marks} marks")

# .format() method
print("{} scored {} marks".format(name, marks))

# % formatting (older style)
print("%s scored %.1f marks" % (name, marks))`,
            "python",
            "Different ways to print output"
        ),

        heading("Input with input()"),

        definition(
            "input()",
            "A built-in function that reads a line of text from the user via the keyboard and returns it as a string."
        ),

        code(
            `# Basic input
name = input("Enter your name: ")
print(f"Hello, {name}!")

# input() always returns a string
age = input("Enter your age: ")
print(type(age))  # <class 'str'>

# Convert to integer
age = int(input("Enter your age: "))
print(f"Next year you will be {age + 1}")`,
            "python",
            "Reading user input"
        ),

        note(
            "The input() function always returns a string, even if the user types a number. You must explicitly convert it using int() or float() before performing arithmetic operations.",
            "warning",
            "Common Mistake"
        ),

        heading("Conditional Statements"),

        code(
            `# if-elif-else
marks = int(input("Enter marks: "))

if marks >= 90:
    grade = "A+"
elif marks >= 80:
    grade = "A"
elif marks >= 70:
    grade = "B"
elif marks >= 60:
    grade = "C"
else:
    grade = "F"

print(f"Your grade is {grade}")`,
            "python",
            "Grading program using if-elif-else"
        ),

        heading("The for Loop"),

        code(
            `# Iterating over a range
for i in range(5):
    print(i, end=" ")
# Output: 0 1 2 3 4

# range(start, stop, step)
for i in range(2, 10, 2):
    print(i, end=" ")
# Output: 2 4 6 8

# Iterating over a list
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)

# enumerate gives index and value
for index, fruit in enumerate(fruits):
    print(f"{index}: {fruit}")`,
            "python",
            "Using the for loop"
        ),

        heading("The while Loop"),

        code(
            `# Basic while loop
count = 1
while count <= 5:
    print(f"Count: {count}")
    count += 1

# Sum of digits
num = 1234
total = 0
while num > 0:
    total += num % 10
    num //= 10
print(f"Sum of digits: {total}")  # 10`,
            "python",
            "Using the while loop"
        ),

        heading("Loop Control Statements"),

        table(
            ["Statement", "Purpose", "Effect"],
            [
                ["break", "Exit the loop immediately", "Stops the loop and continues with the next statement after the loop"],
                ["continue", "Skip the rest of the current iteration", "Jumps back to the loop condition or next item"],
                ["pass", "Do nothing (placeholder)", "Used when a statement is syntactically required but no action is needed"],
            ]
        ),

        code(
            `# break example
for i in range(10):
    if i == 5:
        break
    print(i, end=" ")
# Output: 0 1 2 3 4

# continue example
for i in range(10):
    if i % 2 == 0:
        continue
    print(i, end=" ")
# Output: 1 3 5 7 9

# pass example
for i in range(5):
    pass  # TODO: implement later`,
            "python",
            "break, continue and pass"
        ),

        heading("The else Clause with Loops"),

        note(
            "In Python, both for and while loops can have an else clause. The else block executes only if the loop completes normally without encountering a break statement.",
            "exam",
            "Frequently Asked"
        ),

        code(
            `# Checking for prime
num = 7
for i in range(2, num):
    if num % i == 0:
        print(f"{num} is not prime")
        break
else:
    print(f"{num} is prime")
# Output: 7 is prime`,
            "python",
            "for-else construct"
        ),

        keyPoints([
            "print() displays output; use sep and end parameters to customise formatting.",
            "input() always returns a string — convert it with int() or float() for numbers.",
            "f-strings (f'...') are the most readable way to format strings in Python 3.6+.",
            "The for loop iterates over sequences; the while loop runs as long as a condition is true.",
            "break exits a loop, continue skips to the next iteration, and pass is a placeholder.",
        ]),
    ],

    {
        summary:
            "Master print and input functions, string formatting, and control flow using if-elif-else, for, while, break, continue and pass.",
        minutes: 12,
        tags: ["python", "input-output", "control-flow", "loops", "important"],

        mcqs: [
            mcq(
                "What does input() always return?",
                ["int", "float", "str", "Depends on what the user types"],
                2,
                "The input() function always returns a string regardless of what the user types."
            ),
            mcq(
                "What is the output of print('A', 'B', 'C', sep='-')?",
                ["A B C", "A-B-C", "ABC", "A, B, C"],
                1,
                "The sep parameter sets the separator between values, so the output is A-B-C."
            ),
            mcq(
                "Which statement is used to skip the current iteration of a loop?",
                ["break", "pass", "continue", "skip"],
                2,
                "The continue statement skips the rest of the current iteration and moves to the next."
            ),
            mcq(
                "What does range(2, 10, 2) generate?",
                ["2, 3, 4, 5, 6, 7, 8, 9", "2, 4, 6, 8", "2, 4, 6, 8, 10", "1, 3, 5, 7, 9"],
                1,
                "range(2, 10, 2) starts at 2, stops before 10, and steps by 2, giving 2, 4, 6, 8."
            ),
            mcq(
                "The else block of a for loop executes when:",
                ["The loop encounters a break", "The loop completes without a break", "The loop body is empty", "An exception occurs"],
                1,
                "The else block of a loop runs only if the loop finishes normally without hitting a break."
            ),
            mcq(
                "Which string formatting method was introduced in Python 3.6?",
                ["% formatting", ".format()", "f-strings", "Template strings"],
                2,
                "F-strings (formatted string literals) were introduced in Python 3.6."
            ),
        ],

        questions: [
            qa(
                "Explain the different ways to format strings in Python.",
                "Python provides three main ways to format strings. The oldest is the % operator, where %s is used for strings and %f for floats, for example '%s scored %.1f' % (name, marks). The .format() method uses curly braces as placeholders, for example '{} scored {} marks'.format(name, marks). The newest and most readable method is f-strings, introduced in Python 3.6, where an f prefix is added to the string and expressions are placed inside curly braces, for example f'{name} scored {marks} marks'. F-strings are preferred because they are concise and evaluated at runtime.",
                5
            ),
            qa(
                "Differentiate between break, continue and pass with examples.",
                "The break statement immediately exits the loop. For example, in a loop from 0 to 9, if break is executed when i equals 5, only 0 through 4 are printed. The continue statement skips the remaining code in the current iteration and jumps to the next iteration. For example, if continue is executed when i is even, only odd numbers are printed. The pass statement does nothing and is used as a placeholder when a statement is syntactically required but no action is needed, such as in an empty function or loop body that will be implemented later.",
                5
            ),
            qa(
                "Explain the for-else construct in Python with an example.",
                "In Python, a for loop can have an else clause that executes only if the loop completes all its iterations without encountering a break statement. For example, to check if 7 is prime, a for loop iterates from 2 to 6. If any number divides 7 evenly, a break is executed and the else block is skipped. Since no number divides 7, the loop completes normally and the else block executes, printing '7 is prime'. This construct is particularly useful for search operations where you need to know whether an item was found or not.",
                5
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit1Topics = [
    historyAndFeatures,
    installationAndSetup,
    basicSyntaxAndVariables,
    operators,
    inputOutputAndControlFlow,
];