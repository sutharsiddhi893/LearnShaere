/* =========================================================
   B.Sc IT • SEM 3 • Object Oriented Programming using C++
   UNIT 1 — OOP Concepts and Introduction to C++
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
    keyPoints,
    mcq,
    qa,
} from "../../../../helpers";

/* =========================================================
   TOPIC 1 — Structured vs Object Oriented Programming
========================================================= */

const structuredVsOop = createTopic(
    "structured-vs-oop",
    "Structured vs Object Oriented Programming",

    [
        definition(
            "Programming Paradigm",
            "A programming paradigm is a fundamental style or approach of building the structure and elements of computer programs. Structured Programming (Procedural) and Object-Oriented Programming (OOP) are two dominant paradigms."
        ),

        heading("Structured Programming (Procedural)"),

        text(
            "Structured Programming, also known as Procedural Programming, focuses on breaking down a program into a set of functions or procedures. Data and functions are treated as separate entities. Languages like C, Pascal, and Fortran follow this paradigm."
        ),

        list([
            "Emphasis is on 'Doing things' (algorithms and logic).",
            "Data moves openly around the system from function to function.",
            "Functions transform data from one form to another.",
            "Employs a Top-Down approach in program design.",
            "Data is often exposed globally, making it less secure.",
        ]),

        heading("Object-Oriented Programming (OOP)"),

        text(
            "Object-Oriented Programming organizes software design around 'objects' rather than functions and logic. An object is a data field that has unique attributes (data) and behavior (functions). Languages like C++, Java, Python, and C# follow this paradigm."
        ),

        list([
            "Emphasis is on 'Data' rather than procedures.",
            "Programs are divided into objects that interact with each other.",
            "Data structures are designed to characterize objects.",
            "Functions that operate on the data are tied together within the object.",
            "Data is hidden and cannot be accessed by external functions (Encapsulation).",
            "Employs a Bottom-Up approach in program design.",
        ]),

        heading("Detailed Comparison: SP vs OOP"),

        table(
            ["Basis", "Structured Programming (C)", "Object-Oriented Programming (C++)"],
            [
                ["Focus", "Focus is on functions/procedures", "Focus is on data (objects)"],
                ["Approach", "Top-Down approach", "Bottom-Up approach"],
                ["Data Handling", "Data moves freely (Global data)", "Data is encapsulated (Hidden)"],
                ["Division", "Program divided into functions", "Program divided into objects"],
                ["Access Control", "No specific access modifiers", "Uses public, private, protected"],
                ["Inheritance", "Not supported", "Fully supported"],
                ["Data Security", "Less secure", "Highly secure due to encapsulation"],
                ["Overloading", "Not possible", "Function and Operator overloading possible"],
                ["Examples", "C, Pascal, FORTRAN", "C++, Java, Python, C#"],
            ]
        ),

        note(
            "C++ is often called a 'Hybrid Language' because it supports both procedural (like C) and object-oriented programming styles. This allows programmers to gradually transition from C to OOP.",
            "tip",
            "Fun Fact"
        ),

        keyPoints([
            "Structured programming focuses on 'How to do' (procedures).",
            "OOP focuses on 'What to do' (objects and their interactions).",
            "OOP provides better data security through encapsulation.",
            "C++ is a hybrid language supporting both paradigms.",
        ]),
    ],

    {
        summary: "Understand the fundamental differences between Structured Programming (C) and Object-Oriented Programming (C++), including their approaches, data handling, and security.",
        minutes: 12,
        tags: ["oop", "structured", "paradigm", "c++", "introduction"],

        mcqs: [
            mcq(
                "Which programming approach uses a Top-Down design methodology?",
                ["OOP", "Structured Programming", "Functional Programming", "Logical Programming"],
                1,
                "Structured Programming uses Top-Down, while OOP uses Bottom-Up."
            ),
            mcq(
                "In which paradigm is data hidden from external functions?",
                ["Procedural", "Structured", "Object-Oriented", "Modular"],
                2,
                "OOP hides data using encapsulation."
            ),
            mcq(
                "C++ is known as a:",
                ["Pure OOP Language", "Pure Procedural Language", "Hybrid Language", "Scripting Language"],
                2,
                "C++ supports both procedural and OOP features, making it hybrid."
            ),
        ],

        questions: [
            qa(
                "Differentiate between Procedure-Oriented Programming (POP) and Object-Oriented Programming (OOP).",
                "Procedure-Oriented Programming (POP) divides a program into a set of functions/procedures and follows a top-down approach. Data is treated as a separate entity from functions and often moves openly (globally) between them, making it less secure. Examples include C and Pascal. Object-Oriented Programming (OOP), on the other hand, divides a program into objects (which combine data and functions) and follows a bottom-up approach. Data is encapsulated within objects, protecting it from external access. OOP supports features like inheritance, polymorphism, and abstraction, which POP does not. Examples include C++ and Java.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — Basic Concepts of OOP
========================================================= */

const oopConcepts = createTopic(
    "basic-oop-concepts",
    "Basic Concepts of OOP",

    [
        text(
            "Object-Oriented Programming is built upon several core concepts that provide the foundation for its power and flexibility. Understanding these pillars is essential for writing effective C++ code."
        ),

        heading("1. Objects and Classes"),

        definition(
            "Class",
            "A class is a blueprint or template for creating objects. It defines the properties (data members) and behaviors (member functions) that its objects will have."
        ),

        definition(
            "Object",
            "An object is an instance of a class. It is a real-world entity that has state (attributes) and behavior (methods). If 'Car' is a class, then 'MyRedFerrari' is an object."
        ),

        heading("2. Data Abstraction"),

        definition(
            "Abstraction",
            "Abstraction refers to the act of representing essential features without including the background details. It focuses on 'what' an object does rather than 'how' it does it."
        ),

        text(
            "Example: When you drive a car, you know that pressing the accelerator increases speed. You don't need to know the internal mechanics of the engine. The car provides an abstract interface (steering, pedals) hiding the complex implementation."
        ),

        heading("3. Data Encapsulation"),

        definition(
            "Encapsulation",
            "Encapsulation is the wrapping up of data and functions into a single unit (called a class). It restricts direct access to some of an object's components, which is known as data hiding."
        ),

        text(
            "Encapsulation is achieved in C++ using access specifiers: 'private', 'public', and 'protected'. Data members are usually declared 'private' and accessed via 'public' member functions (getters/setters)."
        ),

        heading("4. Inheritance"),

        definition(
            "Inheritance",
            "Inheritance is the process by which one class (derived/child) acquires the properties and behaviors of another class (base/parent). It promotes reusability of code."
        ),

        text(
            "Example: A 'Dog' class can inherit properties from an 'Animal' class (like eating, sleeping) and add its own specific properties (like barking)."
        ),

        heading("5. Polymorphism"),

        definition(
            "Polymorphism",
            "Polymorphism means 'many forms'. It allows a single interface (function or operator) to behave differently based on the context or the type of data it is operating on."
        ),

        text(
            "In C++, polymorphism is achieved through Function Overloading, Operator Overloading (Compile-time), and Virtual Functions (Run-time)."
        ),

        heading("6. Dynamic Binding & Message Passing"),

        list([
            "**Dynamic Binding:** Linking a function call with the function definition at runtime. It is associated with polymorphism and inheritance (using virtual functions).",
            "**Message Passing:** Objects communicate with each other by sending and receiving information (calling member functions of other objects)."
        ]),

        table(
            ["Concept", "Real-World Analogy"],
            [
                ["Class", "Blueprint of a house"],
                ["Object", "The actual house built from the blueprint"],
                ["Encapsulation", "A capsule containing medicine (data) and its wrapper (functions)"],
                ["Inheritance", "A child inheriting features from parents"],
                ["Polymorphism", "A person acting as a father at home, an employee at work"],
                ["Abstraction", "An ATM machine hiding the internal banking process"],
            ]
        ),

        keyPoints([
            "Class is the blueprint; Object is the instance.",
            "Encapsulation binds data and code; Abstraction hides complexity.",
            "Inheritance allows code reusability by acquiring properties.",
            "Polymorphism allows one interface to have multiple implementations.",
        ]),
    ],

    {
        summary: "Deep dive into the six fundamental pillars of OOP: Class, Object, Abstraction, Encapsulation, Inheritance, and Polymorphism.",
        minutes: 15,
        tags: ["oop", "encapsulation", "inheritance", "polymorphism", "abstraction", "important"],

        mcqs: [
            mcq(
                "Wrapping up of data and functions into a single unit is called:",
                ["Inheritance", "Polymorphism", "Encapsulation", "Abstraction"],
                2,
                "Encapsulation binds data and functions together."
            ),
            mcq(
                "Which feature allows a derived class to acquire properties of a base class?",
                ["Abstraction", "Encapsulation", "Inheritance", "Polymorphism"],
                2,
                "Inheritance is the mechanism for acquiring properties."
            ),
            mcq(
                "Which OOP concept means 'many forms'?",
                ["Inheritance", "Polymorphism", "Abstraction", "Encapsulation"],
                1,
                "Polymorphism literally translates to 'many forms'."
            ),
            mcq(
                "An object is an ___ of a class.",
                ["Instance", "Copy", "Reference", "Pointer"],
                0,
                "An object is an instance created from a class blueprint."
            ),
        ],

        questions: [
            qa(
                "Explain the concepts of Encapsulation and Abstraction with examples.",
                "Encapsulation is the mechanism of bundling data (attributes) and methods (functions) that operate on the data into a single unit called a class. It hides the internal state of an object from the outside world (Data Hiding). For example, a 'BankAccount' class encapsulates 'balance' (data) and 'deposit()', 'withdraw()' (methods). The balance cannot be changed directly; only through methods. Abstraction is the concept of hiding complex implementation details and showing only the essential features of the object. For example, when you use a TV remote, you only interact with buttons (interface); you don't need to know the internal circuitry (implementation). Abstraction focuses on 'what' the object does, while Encapsulation focuses on 'how' it achieves it.",
                5
            ),
            qa(
                "Define Polymorphism. How is it implemented in C++?",
                "Polymorphism means 'many forms'. It allows objects of different classes to be treated as objects of a common base class, or allows a single function/operator to work in different ways depending on the input. In C++, polymorphism is implemented in two ways: 1) Compile-time Polymorphism (Static Binding): Achieved through Function Overloading (multiple functions with the same name but different parameters) and Operator Overloading (giving new meaning to existing operators). 2) Run-time Polymorphism (Dynamic Binding): Achieved through Virtual Functions and Inheritance. Here, the function to be called is determined at runtime based on the type of the object pointed to.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — Introduction to C++ (Structure & Data Types)
========================================================= */

const cppIntroduction = createTopic(
    "cpp-introduction-structure",
    "Introduction to C++: Structure and Data Types",

    [
        definition(
            "C++",
            "C++ is a general-purpose, high-performance, object-oriented programming language developed by Bjarne Stroustrup at Bell Labs in 1979. It was originally named 'C with Classes'."
        ),

        heading("Structure of a C++ Program"),

        code(
            `// 1. Preprocessor Directives (Include Section)
#include <iostream>

// 2. Namespace Declaration
using namespace std;

// 3. Global Declarations (Optional)
int globalVar = 100;

// 4. Class Declaration (Optional)
class MyClass {
    // ... members
};

// 5. Main Function - Entry point
int main() {
    // 6. Statements / Local Declarations
    cout << "Hello, C++ World!" << endl;
    
    // 7. Return Statement
    return 0;
}`,
            "cpp",
            "Standard Structure of a C++ Program"
        ),

        heading("Key Components Explained"),

        table(
            ["Component", "Purpose"],
            [
                ["#include <iostream>", "Preprocessor directive to include the input/output stream library."],
                ["using namespace std;", "Tells the compiler to use the standard namespace, so we can write 'cout' instead of 'std::cout'."],
                ["int main()", "The main function where program execution begins. Must return an integer."],
                ["cout <<", "Standard output stream operator used to print data to the console."],
                ["cin >>", "Standard input stream operator used to read data from the keyboard."],
                ["endl", "End Line manipulator; inserts a newline character and flushes the buffer."],
                ["return 0;", "Indicates successful program termination to the operating system."],
            ]
        ),

        heading("Data Types in C++"),

        text(
            "C++ provides a rich set of data types. They are broadly classified into three categories:"
        ),

        table(
            ["Category", "Data Types"],
            [
                ["Primitive/Built-in", "int, char, float, double, bool, void, wchar_t"],
                ["Derived", "Array, Pointer, Reference, Function"],
                ["User-Defined", "Class, Structure, Union, Enum, Typedef"],
            ]
        ),

        heading("Primitive Data Types Details"),

        table(
            ["Type", "Size (Typical)", "Range", "Example"],
            [
                ["int", "4 bytes", "-2,147,483,648 to 2,147,483,647", "int age = 20;"],
                ["short int", "2 bytes", "-32,768 to 32,767", "short x = 100;"],
                ["long int", "4 or 8 bytes", "Very large integers", "long y = 100000L;"],
                ["float", "4 bytes", "±3.4e ± 38 (7 digits)", "float pi = 3.14f;"],
                ["double", "8 bytes", "±1.7e ± 308 (15 digits)", "double e = 2.71828;"],
                ["char", "1 byte", "-128 to 127", "char grade = 'A';"],
                ["bool", "1 byte", "true or false", "bool isActive = true;"],
                ["void", "0 bytes", "No value", "void display();"],
            ]
        ),

        heading("Modifiers"),

        text(
            "Data types can be modified using: signed, unsigned, short, long. For example, 'unsigned int' can only store non-negative numbers, effectively doubling the positive range."
        ),

        heading("Operators in C++"),

        table(
            ["Category", "Operators"],
            [
                ["Arithmetic", "+, -, *, /, %"],
                ["Relational", "==, !=, >, <, >=, <="],
                ["Logical", "&&, ||, !"],
                ["Assignment", "=, +=, -=, *=, /=, %="],
                ["Bitwise", "&, |, ^, ~, <<, >>"],
                ["Unary", "++, --, unary +/-"],
                ["Special", "sizeof, ?: (ternary), , (comma), :: (scope)"],
            ]
        ),

        heading("Control Flow Statements"),

        code(
            `// If-Else
if (marks >= 40) {
    cout << "Pass";
} else {
    cout << "Fail";
}

// For Loop
for (int i = 0; i < 5; i++) {
    cout << i << " ";
}

// While Loop
int i = 0;
while (i < 5) {
    cout << i;
    i++;
}

// Switch Case
switch (grade) {
    case 'A': cout << "Excellent"; break;
    case 'B': cout << "Good"; break;
    default: cout << "Try Again";
}`,
            "cpp",
            "Control Flow in C++"
        ),

        note(
            "The 'std::endl' manipulator flushes the output buffer, which can slow down performance in loops. For better performance, use '\\n' (newline character) instead when you don't need to flush.",
            "tip",
            "Performance Tip"
        ),

        keyPoints([
            "Every C++ program must have a main() function.",
            "cout and cin are used for output and input operations.",
            "C++ has primitive, derived, and user-defined data types.",
            "Modifiers like 'unsigned' and 'long' extend the range of data types.",
        ]),
    ],

    {
        summary: "Master the structure of a C++ program, standard I/O (cin/cout), data types, operators, and control flow statements.",
        minutes: 15,
        tags: ["cpp", "syntax", "data-types", "operators", "control-flow", "important"],

        mcqs: [
            mcq(
                "Which header file is required for input/output operations in C++?",
                ["<stdio.h>", "<iostream>", "<conio.h>", "<string>"],
                1,
                "<iostream> provides cin and cout streams."
            ),
            mcq(
                "Which operator is used to insert data into the standard output stream (cout)?",
                [">>", "<<", "->", "::"],
                1,
                "The insertion operator '<<' is used with cout."
            ),
            mcq(
                "What is the typical size of an 'int' in C++?",
                ["1 byte", "2 bytes", "4 bytes", "8 bytes"],
                2,
                "Typically 4 bytes on modern 32/64-bit systems."
            ),
            mcq(
                "Which operator is used for scope resolution?",
                [".", "->", "::", ":"],
                2,
                "The scope resolution operator '::' is used to access global variables or class members."
            ),
        ],

        questions: [
            qa(
                "Explain the basic structure of a C++ program with an example.",
                "A basic C++ program consists of: 1) Preprocessor Directives (like #include <iostream>) which include necessary header files. 2) Namespace Declaration (like using namespace std;) to avoid writing std:: repeatedly. 3) Class or Function Declarations (optional). 4) The main() function, which is the entry point of execution. It must return an integer. 5) Statements inside main() including variable declarations, I/O operations (cout, cin), and logic. 6) A return statement (usually 'return 0;') to indicate successful execution. Example: #include<iostream>\\nusing namespace std;\\nint main() { cout << 'Hello'; return 0; }",
                5
            ),
            qa(
                "Describe the different categories of data types in C++.",
                "C++ data types are categorized into three groups: 1) Primitive/Built-in Types: These are predefined by the language. Examples include int (integers), float (floating-point), double (double precision), char (characters), bool (boolean), and void (no value). 2) Derived Data Types: These are derived from primitive types. Examples include Arrays (collection of similar elements), Pointers (memory addresses), References (aliases), and Functions. 3) User-Defined Data Types: These are defined by the programmer. Examples include Class (for objects), Structure (struct), Union, Enumeration (enum), and Typedef (aliases for existing types).",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — Header Files and Namespaces
========================================================= */

const headerFilesNamespaces = createTopic(
    "header-files-and-namespaces",
    "Header Files and Namespaces",

    [
        heading("Header Files (.h / .hpp)"),

        definition(
            "Header File",
            "A header file is a file containing C++ declarations and macro definitions that can be shared between multiple source files. They typically have a .h or .hpp extension."
        ),

        text(
            "Header files are included using the '#include' preprocessor directive. This directive tells the preprocessor to insert the contents of the header file into the source file before compilation."
        ),

        heading("Types of Include Directives"),

        table(
            ["Syntax", "Purpose", "Search Path"],
            [
                ["#include <iostream>", "Includes standard library headers", "Searches system directories"],
                ["#include \"myfile.h\"", "Includes user-defined headers", "Searches current directory first, then system"],
            ]
        ),

        heading("Common Standard Header Files"),

        table(
            ["Header File", "Purpose"],
            [
                ["<iostream>", "Standard Input/Output (cin, cout, cerr)"],
                ["<string>", "String class and manipulation"],
                ["<vector>", "Dynamic array (vector container)"],
                ["<cmath>", "Mathematical functions (sqrt, pow, sin)"],
                ["<iomanip>", "I/O manipulators (setw, setprecision, setfill)"],
                ["<cstdlib>", "General utilities (malloc, exit, rand)"],
                ["<fstream>", "File input/output operations"],
                ["<algorithm>", "Algorithms like sort, find, reverse"],
            ]
        ),

        heading("Namespaces"),

        definition(
            "Namespace",
            "A namespace is a declarative region that provides a scope to the identifiers (names of types, functions, variables) inside it. Namespaces are used to organize code into logical groups and to prevent name collisions."
        ),

        heading("The 'std' Namespace"),

        text(
            "All standard C++ library entities (like cout, cin, string, vector) are declared within the 'std' namespace. To use them, we have three options:"
        ),

        code(
            `// Option 1: Use the fully qualified name (Best practice for large projects)
#include <iostream>
int main() {
    std::cout << "Hello";
    return 0;
}

// Option 2: Using declaration (Only specific names)
#include <iostream>
using std::cout;
using std::endl;
int main() {
    cout << "Hello" << endl;
    return 0;
}

// Option 3: Using directive (Imports everything - Common in learning)
#include <iostream>
using namespace std;
int main() {
    cout << "Hello" << endl;
    return 0;
}`,
            "cpp",
            "Three ways to use the std namespace"
        ),

        heading("Creating User-Defined Namespaces"),

        code(
            `#include <iostream>
using namespace std;

// Define a namespace
namespace Math {
    int add(int a, int b) {
        return a + b;
    }
}

namespace Physics {
    int add(int a, int b) { // Same name, different namespace
        return a + b + 10; // Different logic
    }
}

int main() {
    // Access using scope resolution operator ::
    cout << Math::add(5, 3) << endl;
    cout << Physics::add(5, 3) << endl;
    return 0;
}`,
            "cpp",
            "User-Defined Namespaces"
        ),

        output(
            `8
18`
        ),

        note(
            "Avoid using 'using namespace std;' in header files. It can lead to name conflicts in large projects. In production code, it's better to use fully qualified names like 'std::cout'.",
            "warning",
            "Professional Tip"
        ),

        keyPoints([
            "Header files contain declarations and are included using #include.",
            "Use <> for standard libraries and \"\" for user-defined files.",
            "Namespaces prevent naming conflicts in large programs.",
            "'std' is the standard namespace containing all C++ library functions.",
            "The scope resolution operator :: is used to access namespace members.",
        ]),
    ],

    {
        summary: "Understand the usage of header files, preprocessor directives, and how namespaces (especially 'std') prevent naming conflicts in C++.",
        minutes: 10,
        tags: ["cpp", "header-files", "namespace", "preprocessor", "std"],

        mcqs: [
            mcq(
                "What is the purpose of a namespace in C++?",
                ["To speed up execution", "To prevent naming conflicts", "To allocate memory", "To create objects"],
                1,
                "Namespaces group identifiers to avoid name collisions."
            ),
            mcq(
                "Which header file is needed for using 'setw' and 'setprecision'?",
                ["<iostream>", "<string>", "<iomanip>", "<cmath>"],
                2,
                "<iomanip> contains I/O manipulators."
            ),
            mcq(
                "Which operator is used to access members of a namespace?",
                [".", "->", "::", ":"],
                2,
                "The scope resolution operator '::' is used."
            ),
        ],

        questions: [
            qa(
                "What are Namespaces? Explain their significance in C++ with an example.",
                "A namespace is a declarative region that provides scope to identifiers inside it, preventing naming conflicts. In large projects, multiple libraries might have functions with the same name (e.g., two libraries having a 'sort()' function). Namespaces solve this by qualifying names with the namespace they belong to. In C++, the standard library uses the 'std' namespace. For example, 'cout' is actually 'std::cout'. We can create our own namespaces: 'namespace MyLib { void print(); }' and access it as 'MyLib::print();'. This helps in organizing code logically and maintaining large codebases.",
                5
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit1Topics = [
    structuredVsOop,
    oopConcepts,
    cppIntroduction,
    headerFilesNamespaces,
];
