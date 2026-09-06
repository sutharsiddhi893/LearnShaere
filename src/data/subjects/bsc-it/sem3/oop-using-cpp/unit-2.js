/* =========================================================
   B.Sc IT • SEM 3 • Object Oriented Programming using C++
   UNIT 2 — Input/Output, Arrays, and Working with Classes
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
   TOPIC 1 — Basic I/O and Manipulators
========================================================= */

const basicIO = createTopic(
    "basic-io-and-manipulators",
    "Basic I/O and Manipulators in C++",

    [
        text(
            "C++ uses stream-based I/O. A stream is a sequence of bytes flowing from a source (input) or to a destination (output). The <iostream> library provides objects to manage these streams."
        ),

        heading("Standard I/O Streams"),

        table(
            ["Stream", "Type", "Purpose"],
            [
                ["cin", "Input", "Standard input (usually keyboard)"],
                ["cout", "Output", "Standard output (usually screen)"],
                ["cerr", "Output", "Standard error output (unbuffered)"],
                ["clog", "Output", "Standard logging output (buffered)"],
            ]
        ),

        heading("Insertion and Extraction Operators"),

        code(
            `#include <iostream>
using namespace std;

int main() {
    int age;
    string name;

    // Extraction operator >> reads from input
    cout << "Enter your name: ";
    cin >> name;
    
    cout << "Enter your age: ";
    cin >> age;

    // Insertion operator << writes to output
    cout << "Hello " << name << ", you are " << age << " years old." << endl;
    
    return 0;
}`,
            "cpp",
            "cin and cout example"
        ),

        heading("I/O Manipulators"),

        definition(
            "Manipulator",
            "Manipulators are helper functions that modify the format of input/output streams. They are defined in the <iomanip> header file (mostly)."
        ),

        table(
            ["Manipulator", "Header", "Purpose"],
            [
                ["endl", "<iostream>", "Inserts newline and flushes buffer"],
                ["setw(n)", "<iomanip>", "Sets the width of the next output field to n"],
                ["setprecision(n)", "<iomanip>", "Sets the total number of significant digits"],
                ["fixed", "<iostream>", "Displays floating-point numbers in fixed notation"],
                ["scientific", "<iostream>", "Displays numbers in scientific notation"],
                ["setfill(c)", "<iomanip>", "Sets the fill character for padding"],
                ["left / right", "<iostream>", "Aligns output to the left or right"],
                ["hex / oct / dec", "<iostream>", "Displays integers in hexadecimal/octal/decimal"],
            ]
        ),

        heading("Manipulator Example"),

        code(
            `#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    double pi = 3.14159265;
    
    cout << "Default: " << pi << endl;
    cout << "Precision 3: " << setprecision(3) << pi << endl;
    cout << "Fixed 4: " << fixed << setprecision(4) << pi << endl;

    cout << setw(10) << "Name" << setw(10) << "Marks" << endl;
    cout << setw(10) << "Amit" << setw(10) << 85 << endl;
    cout << setw(10) << "Riya" << setw(10) << 92 << endl;

    cout << setfill('*') << setw(15) << "END" << endl;

    return 0;
}`,
            "cpp",
            "Formatting output with manipulators"
        ),

        output(
            `Default: 3.14159
Precision 3: 3.14
Fixed 4: 3.1416
      Name     Marks
      Amit        85
      Riya        92
************END`
        ),

        keyPoints([
            "cin uses >> (extraction), cout uses << (insertion).",
            "Manipulators format the output for better readability.",
            "setw() only affects the next output element.",
            "fixed and setprecision() are used together for decimal formatting.",
        ]),
    ],

    {
        summary: "Master C++ stream-based I/O using cin, cout, and formatting manipulators like setw, setprecision, and fixed.",
        minutes: 10,
        tags: ["cpp", "io", "cin", "cout", "manipulators"],

        mcqs: [
            mcq(
                "Which manipulator sets the width of the output field?",
                ["setwidth()", "setw()", "width()", "size()"],
                1,
                "setw(n) sets the field width to n."
            ),
            mcq(
                "The extraction operator (>>) is used with:",
                ["cout", "cin", "cerr", "clog"],
                1,
                "cin uses >> to extract input from the stream."
            ),
        ],

        questions: [
            qa(
                "What are I/O manipulators? Explain any four with examples.",
                "I/O manipulators are helper functions that modify the format of input/output streams in C++. They are found in <iomanip> and <iostream> headers. Four common manipulators are: 1) endl: Inserts a newline character and flushes the output buffer (e.g., cout << 'Hi' << endl;). 2) setw(n): Sets the minimum width for the next output field (e.g., cout << setw(10) << 'Name';). 3) setprecision(n): Controls the number of digits displayed for floating-point numbers (e.g., cout << setprecision(4) << 3.14159;). 4) setfill(c): Sets the fill character used when the output is smaller than the field width (e.g., cout << setfill('*') << setw(5) << 1;).",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — Arrays in C++
========================================================= */

const arraysInCpp = createTopic(
    "arrays-in-cpp",
    "Arrays in C++",

    [
        definition(
            "Array",
            "An array is a collection of items of the same data type stored at contiguous memory locations. Array elements are accessed using indices, starting from 0."
        ),

        heading("Declaring and Initializing Arrays"),

        code(
            `// Declaration
int marks[5];

// Declaration with Initialization
int numbers[5] = {10, 20, 30, 40, 50};

// Size inferred by compiler
int scores[] = {85, 90, 95};

// Partial Initialization (rest filled with 0)
int arr[5] = {1, 2}; // {1, 2, 0, 0, 0}

// Character Array (String)
char name[] = "Hello";`,
            "cpp",
            "Array Declaration Syntax"
        ),

        heading("Accessing Array Elements"),

        code(
            `#include <iostream>
using namespace std;

int main() {
    int marks[5] = {85, 90, 78, 92, 88};
    int total = 0;

    for (int i = 0; i < 5; i++) {
        cout << "Marks " << i+1 << ": " << marks[i] << endl;
        total += marks[i];
    }

    cout << "Average: " << total / 5.0 << endl;
    return 0;
}`,
            "cpp",
            "Iterating through an array"
        ),

        heading("Two-Dimensional Arrays (Matrix)"),

        text(
            "A 2D array is an array of arrays, often used to represent matrices or tables."
        ),

        code(
            `#include <iostream>
using namespace std;

int main() {
    // 3x3 Matrix
    int matrix[3][3] = {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9}
    };

    // Displaying the matrix
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            cout << matrix[i][j] << "\\t";
        }
        cout << endl;
    }
    return 0;
}`,
            "cpp",
            "2D Array Example"
        ),

        output(
            `1       2       3
4       5       6
7       8       9`
        ),

        heading("Multi-Dimensional Arrays"),

        text(
            "C++ supports arrays with more than two dimensions, though they are rarely used in practice. Syntax: `dataType arrayName[size1][size2][size3];`"
        ),

        heading("Advantages and Disadvantages"),

        table(
            ["Advantages", "Disadvantages"],
            [
                ["Easy access to elements via index", "Fixed size (cannot grow dynamically)"],
                ["Efficient memory usage (contiguous)", "Insertion and deletion are costly"],
                ["Useful for storing homogeneous data", "Wastage of memory if not fully used"],
                ["Faster iteration due to cache locality", "No bounds checking in C++"],
            ]
        ),

        note(
            "C++ does NOT perform automatic bounds checking on arrays. Accessing an index out of range (e.g., arr[10] on a 5-element array) leads to undefined behavior. Always check your indices manually! Modern C++ recommends using 'std::vector' or 'std::array' for safety.",
            "warning",
            "Critical Warning"
        ),

        keyPoints([
            "Array indices start from 0.",
            "All elements in an array must be of the same data type.",
            "2D arrays are represented as rows and columns.",
            "Arrays are stored in contiguous memory locations.",
        ]),
    ],

    {
        summary: "Learn to declare, initialize, and manipulate 1D and 2D arrays in C++, along with their advantages and limitations.",
        minutes: 12,
        tags: ["cpp", "arrays", "1d-array", "2d-array", "matrix", "data-structures"],

        mcqs: [
            mcq(
                "What is the index of the first element in a C++ array?",
                ["1", "0", "-1", "Depends on declaration"],
                1,
                "C++ arrays are 0-indexed."
            ),
            mcq(
                "How is a 3x3 matrix declared in C++?",
                ["int mat[9];", "int mat(3,3);", "int mat[3][3];", "int mat{3}{3};"],
                2,
                "Use square brackets for each dimension: [3][3]."
            ),
            mcq(
                "What happens if you access an array index that is out of bounds in C++?",
                ["Compilation Error", "Runtime Error always", "Undefined Behavior", "Returns 0"],
                2,
                "C++ does not check bounds; it results in undefined behavior."
            ),
        ],

        questions: [
            qa(
                "What is an Array? Explain the different types of arrays in C++ with examples.",
                "An Array is a collection of elements of the same data type stored in contiguous memory locations, accessed via indices starting from 0. Types include: 1) One-Dimensional (1D) Array: A linear list, e.g., 'int marks[5] = {10, 20, 30, 40, 50};'. 2) Two-Dimensional (2D) Array: Represents a matrix or table, e.g., 'int matrix[3][3];' which has 3 rows and 3 columns. 3) Multi-Dimensional Array: Arrays with more than two dimensions, e.g., 'int cube[3][3][3];'. 4) Character Array: Used to store strings, e.g., 'char name[] = \"Hello\";'. Arrays are useful for grouping related data but have a fixed size once declared.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — Strings in C++
========================================================= */

const stringsInCpp = createTopic(
    "strings-in-cpp",
    "Strings in C++",

    [
        text(
            "C++ supports two types of strings: C-style character arrays (inherited from C) and the modern C++ 'string' class (from the <string> header)."
        ),

        heading("1. C-Style Strings (Character Arrays)"),

        text(
            "A C-style string is an array of characters terminated by a null character '\\0'. This null character marks the end of the string."
        ),

        code(
            `#include <iostream>
#include <cstring> // For strlen, strcpy, strcat, strcmp
using namespace std;

int main() {
    char str1[10] = "Hello";
    char str2[10] = "World";
    char str3[20];

    cout << "Length of str1: " << strlen(str1) << endl;
    
    strcpy(str3, str1);  // Copy str1 to str3
    cout << "Copied: " << str3 << endl;
    
    strcat(str3, str2);  // Concatenate str2 to str3
    cout << "Concatenated: " << str3 << endl;
    
    if (strcmp(str1, str2) == 0) {
        cout << "Equal";
    } else {
        cout << "Not Equal";
    }
    
    return 0;
}`,
            "cpp",
            "C-Style String Manipulation"
        ),

        heading("2. C++ String Class (Modern & Safer)"),

        text(
            "The C++ Standard Library provides a 'string' class in the <string> header. It is safer, easier to use, and can grow dynamically."
        ),

        code(
            `#include <iostream>
#include <string>
using namespace std;

int main() {
    string s1 = "Hello";
    string s2 = "World";
    string s3;

    // Length
    cout << "Length: " << s1.length() << endl;  // or s1.size()
    
    // Concatenation using +
    s3 = s1 + " " + s2;
    cout << "Concatenated: " << s3 << endl;
    
    // Comparison using ==
    if (s1 == s2) {
        cout << "Equal";
    } else {
        cout << "Not Equal" << endl;
    }
    
    // Accessing characters
    cout << "First char: " << s1[0] << endl;
    cout << "First char (safe): " << s1.at(0) << endl;
    
    // Substring
    cout << "Substring: " << s3.substr(6, 5) << endl; // World
    
    // Find
    cout << "Position of 'World': " << s3.find("World") << endl;
    
    return 0;
}`,
            "cpp",
            "Modern C++ String Class"
        ),

        heading("Comparison: C-Style vs C++ String"),

        table(
            ["Feature", "C-Style String (char[])", "C++ String Class"],
            [
                ["Header", "<cstring>", "<string>"],
                ["Size", "Fixed at declaration", "Dynamic (grows automatically)"],
                ["Null Terminator", "Required (\\0)", "Handled automatically"],
                ["Concatenation", "strcat()", "+ operator"],
                ["Comparison", "strcmp()", "==, !=, <, > operators"],
                ["Safety", "Prone to buffer overflow", "Safer, bounds-aware"],
                ["Ease of Use", "Complex, error-prone", "Easy and intuitive"],
            ]
        ),

        keyPoints([
            "C-style strings end with a null character '\\0'.",
            "The C++ string class is preferred in modern C++ for safety.",
            "String class supports operators like +, ==, and [].",
            "Common methods: length(), substr(), find(), append().",
        ]),
    ],

    {
        summary: "Understand string handling in C++ using both traditional C-style character arrays and the modern std::string class.",
        minutes: 12,
        tags: ["cpp", "strings", "string-class", "char-array", "cstring"],

        mcqs: [
            mcq(
                "Which character marks the end of a C-style string?",
                ["\\n", "\\0", "\\r", "EOF"],
                1,
                "The null character '\\0' terminates a C-style string."
            ),
            mcq(
                "Which header file is required for the C++ string class?",
                ["<cstring>", "<string.h>", "<string>", "<iostream>"],
                2,
                "The modern C++ string class is in the <string> header."
            ),
            mcq(
                "Which function is used to find the length of a C++ string object?",
                ["strlen()", "size()", "count()", "getSize()"],
                1,
                "The string class uses .length() or .size() methods."
            ),
        ],

        questions: [
            qa(
                "Compare and contrast C-style strings with the C++ string class.",
                "C-style strings are character arrays terminated by the null character '\\0'. They require the <cstring> header and use functions like strlen(), strcpy(), and strcmp() for manipulation. They have a fixed size, are prone to buffer overflows, and are harder to use safely. The C++ string class (in <string> header) is a modern alternative. It manages memory dynamically, so it can grow or shrink as needed. It supports operators like '+' for concatenation, '==' for comparison, and '[]' for element access, making it much more intuitive. It is safer and preferred in modern C++ programming.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — Classes and Objects
========================================================= */

const classesAndObjects = createTopic(
    "classes-and-objects",
    "Classes and Objects in C++",

    [
        definition(
            "Class",
            "A class is a user-defined data type that holds its own data members (variables) and member functions (methods) which can be accessed and used by creating an instance (object) of that class."
        ),

        heading("Syntax of a Class"),

        code(
            `class ClassName {
   access_specifier:  // public, private, protected
      data_type variable_name;
      return_type function_name(parameters) {
         // function body
      }
};`,
            "cpp",
            "General Class Syntax"
        ),

        heading("Access Specifiers"),

        table(
            ["Specifier", "Access Level"],
            [
                ["private", "Members accessible only within the class (Default)"],
                ["public", "Members accessible from anywhere in the program"],
                ["protected", "Members accessible within the class and its derived classes"],
            ]
        ),

        heading("Complete Class Example"),

        code(
            `#include <iostream>
#include <string>
using namespace std;

class Student {
private:
    // Data Members (Attributes)
    int rollNo;
    string name;
    float marks;

public:
    // Member Function to set data
    void setData(int r, string n, float m) {
        rollNo = r;
        name = n;
        marks = m;
    }

    // Member Function to display data
    void display() {
        cout << "Roll No: " << rollNo << endl;
        cout << "Name: " << name << endl;
        cout << "Marks: " << marks << endl;
    }
};

int main() {
    // Creating Objects
    Student s1, s2;

    // Calling member functions via objects
    s1.setData(101, "Amit", 85.5);
    s2.setData(102, "Riya", 92.0);

    cout << "--- Student 1 ---" << endl;
    s1.display();

    cout << "--- Student 2 ---" << endl;
    s2.display();

    return 0;
}`,
            "cpp",
            "Complete Class and Object Example"
        ),

        output(
            `--- Student 1 ---
Roll No: 101
Name: Amit
Marks: 85.5
--- Student 2 ---
Roll No: 102
Name: Riya
Marks: 92`
        ),

        heading("Defining Member Functions Outside the Class"),

        text(
            "For better readability, especially in large classes, member functions are often declared inside the class but defined outside using the scope resolution operator (::)."
        ),

        code(
            `class Rectangle {
private:
    int length, width;
public:
    void setDimensions(int l, int w);
    int calculateArea();
};

// Definition outside the class
void Rectangle::setDimensions(int l, int w) {
    length = l;
    width = w;
}

int Rectangle::calculateArea() {
    return length * width;
}`,
            "cpp",
            "Member functions outside class"
        ),

        heading("Working with Objects"),

        list([
            "**Constant Objects:** Cannot modify data members. Declared with 'const' keyword. Example: `const Student s1;`",
            "**Nameless Objects:** Created without a name, used temporarily. Example: `Student().display();`",
            "**Live Objects:** Objects that persist during the execution of the program.",
            "**Array of Objects:** A collection of multiple objects. Example: `Student students[5];`",
        ]),

        code(
            `#include <iostream>
using namespace std;

class Book {
public:
    string title;
    void display() {
        cout << "Title: " << title << endl;
    }
};

int main() {
    // Array of Objects
    Book library[3];
    
    library[0].title = "C++ Primer";
    library[1].title = "Effective C++";
    library[2].title = "The C++ Language";

    for (int i = 0; i < 3; i++) {
        library[i].display();
    }
    return 0;
}`,
            "cpp",
            "Array of Objects"
        ),

        note(
            "By default, all members of a class are 'private'. This is a key difference from 'struct', where members are 'public' by default.",
            "tip",
            "Class vs Struct"
        ),

        keyPoints([
            "Class is a blueprint; Object is the instance.",
            "Data members are declared 'private' for encapsulation.",
            "Member functions provide the interface to access data.",
            "Objects communicate by calling each other's member functions.",
        ]),
    ],

    {
        summary: "Learn to define classes, create objects, use access specifiers (public, private, protected), and work with arrays of objects in C++.",
        minutes: 15,
        tags: ["cpp", "class", "object", "access-specifier", "member-function", "important"],

        mcqs: [
            mcq(
                "What is the default access specifier for members of a class in C++?",
                ["public", "private", "protected", "None"],
                1,
                "By default, class members are private."
            ),
            mcq(
                "Which operator is used to define a member function outside the class?",
                [":", "::", "->", "."],
                1,
                "The scope resolution operator '::' is used."
            ),
            mcq(
                "How do you access a public member function 'display()' of an object 'obj'?",
                ["obj::display()", "obj->display()", "obj.display()", "obj:display()"],
                2,
                "The dot operator '.' is used to access members of an object."
            ),
        ],

        questions: [
            qa(
                "Explain Classes and Objects with a suitable C++ example.",
                "A Class is a user-defined data type that acts as a blueprint. It combines data members (variables) and member functions (methods). An Object is an instance of a class. Example: 'class Car { public: string brand; void display() { cout << brand; } };' defines a class Car. To use it: 'Car myCar; myCar.brand = \"BMW\"; myCar.display();' creates an object 'myCar' and calls its function. Classes support access specifiers: 'private' (accessible only inside class), 'public' (accessible everywhere), and 'protected' (accessible in derived classes). This structure enables encapsulation and modular programming.",
                5
            ),
            qa(
                "What are Access Specifiers? Explain the three types in C++.",
                "Access Specifiers in C++ define the accessibility or visibility of class members (data and functions). There are three types: 1) private: Members declared as private are accessible only within the same class. They cannot be accessed from outside the class or by derived classes. This is the default access specifier. 2) public: Members declared as public are accessible from anywhere in the program where the object is visible. They form the interface of the class. 3) protected: Members declared as protected are accessible within the class and by classes derived from it (inheritance), but not from outside. This is crucial for controlled inheritance.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 5 — Constructors and Destructors
========================================================= */

const constructorsDestructors = createTopic(
    "constructors-and-destructors",
    "Constructors and Destructors",

    [
        definition(
            "Constructor",
            "A constructor is a special member function that is automatically called when an object of a class is created. Its name is the same as the class name, and it has no return type (not even void). It is used to initialize the object's data members."
        ),

        heading("Characteristics of a Constructor"),

        list([
            "Name must be the same as the class name.",
            "It has no return type.",
            "It is called automatically when an object is created.",
            "It can be overloaded (multiple constructors with different parameters).",
            "It cannot be virtual, but destructors can be.",
            "It is typically declared in the 'public' section.",
        ]),

        heading("Types of Constructors"),

        heading("1. Default Constructor"),

        text(
            "A constructor that takes no arguments. If you don't define any constructor, the compiler provides a default one."
        ),

        code(
            `class Box {
public:
    int length;
    // Default Constructor
    Box() {
        length = 10;
        cout << "Default Constructor called" << endl;
    }
};

int main() {
    Box b1; // Default constructor called automatically
    cout << "Length: " << b1.length;
}`,
            "cpp",
            "Default Constructor"
        ),

        heading("2. Parameterized Constructor"),

        text(
            "A constructor that accepts arguments to initialize the object with specific values."
        ),

        code(
            `class Box {
public:
    int length, width;
    // Parameterized Constructor
    Box(int l, int w) {
        length = l;
        width = w;
    }
};

int main() {
    Box b1(10, 20); // Passing arguments
    cout << "Area: " << b1.length * b1.width;
}`,
            "cpp",
            "Parameterized Constructor"
        ),

        heading("3. Copy Constructor"),

        text(
            "A copy constructor creates a new object as a copy of an existing object. It takes a reference to an object of the same class as an argument."
        ),

        code(
            `#include <iostream>
using namespace std;

class Box {
public:
    int length;
    
    Box(int l) { length = l; }  // Parameterized
    
    // Copy Constructor
    Box(const Box &b) {
        length = b.length;
        cout << "Copy Constructor called" << endl;
    }
};

int main() {
    Box b1(50);
    Box b2 = b1;  // Copy constructor is called here
    // Or: Box b2(b1);
    
    cout << "b1 length: " << b1.length << endl;
    cout << "b2 length: " << b2.length << endl;
    return 0;
}`,
            "cpp",
            "Copy Constructor"
        ),

        heading("4. Constructor Overloading"),

        text(
            "A class can have multiple constructors with different parameter lists. This is called constructor overloading and is a form of compile-time polymorphism."
        ),

        code(
            `class Complex {
public:
    int real, imag;
    
    Complex() {                       // 1. Default
        real = 0; imag = 0;
    }
    Complex(int r) {                  // 2. One argument
        real = r; imag = 0;
    }
    Complex(int r, int i) {           // 3. Two arguments
        real = r; imag = i;
    }
};

int main() {
    Complex c1;        // Calls default
    Complex c2(5);     // Calls one-arg
    Complex c3(5, 10); // Calls two-arg
}`,
            "cpp",
            "Constructor Overloading"
        ),

        heading("Destructor"),

        definition(
            "Destructor",
            "A destructor is a special member function that is called automatically when an object is destroyed (goes out of scope). It is used to free resources allocated by the object. Its name is the class name preceded by a tilde (~)."
        ),

        list([
            "Name is same as class name, prefixed with ~.",
            "Takes no arguments and has no return type.",
            "Cannot be overloaded (only one destructor per class).",
            "Called automatically at the end of an object's lifetime.",
            "Used to release memory and close files/connections.",
        ]),

        code(
            `#include <iostream>
using namespace std;

class Demo {
public:
    Demo() {
        cout << "Constructor called" << endl;
    }
    
    ~Demo() {  // Destructor
        cout << "Destructor called" << endl;
    }
};

int main() {
    cout << "Main starts" << endl;
    Demo d1; // Constructor called
    {
        Demo d2; // Constructor called
    } // d2 goes out of scope, Destructor called for d2
    cout << "Main ends" << endl;
    return 0;
} // d1 goes out of scope, Destructor called for d1`,
            "cpp",
            "Destructor Example"
        ),

        output(
            `Main starts
Constructor called
Constructor called
Destructor called
Main ends
Destructor called`
        ),

        note(
            "If you use dynamic memory allocation (using 'new') inside a constructor, you MUST release that memory (using 'delete') inside the destructor to prevent memory leaks.",
            "warning",
            "Memory Management"
        ),

        keyPoints([
            "Constructors initialize; Destructors clean up.",
            "Constructor name = Class name; no return type.",
            "Destructor name = ~Class name; no arguments.",
            "Constructors can be overloaded; Destructors cannot.",
        ]),
    ],

    {
        summary: "Master constructors (default, parameterized, copy, overloaded) and destructors for object initialization and cleanup in C++.",
        minutes: 15,
        tags: ["cpp", "constructor", "destructor", "copy-constructor", "oop", "important"],

        mcqs: [
            mcq(
                "What is the return type of a constructor?",
                ["int", "void", "The class type", "No return type"],
                3,
                "Constructors have no return type, not even void."
            ),
            mcq(
                "Which constructor is called when an object is initialized with another object of the same class?",
                ["Default", "Parameterized", "Copy", "Overloaded"],
                2,
                "A Copy Constructor initializes an object using another object."
            ),
            mcq(
                "What symbol is used to declare a destructor?",
                ["!", "~", "@", "#"],
                1,
                "The tilde symbol '~' is used before the class name."
            ),
            mcq(
                "Can a destructor be overloaded?",
                ["Yes", "No", "Only in derived classes", "Only with parameters"],
                1,
                "Destructors cannot be overloaded as they take no arguments."
            ),
        ],

        questions: [
            qa(
                "What is a Constructor? Explain its types with examples.",
                "A Constructor is a special member function that is automatically invoked when an object is created. It has the same name as the class and no return type. Its purpose is to initialize data members. Types include: 1) Default Constructor: Takes no arguments, e.g., 'Box() { length = 0; }'. 2) Parameterized Constructor: Accepts arguments to initialize with specific values, e.g., 'Box(int l) { length = l; }'. 3) Copy Constructor: Creates a new object as a copy of an existing one, taking a reference as an argument, e.g., 'Box(const Box &b) { length = b.length; }'. 4) Overloaded Constructors: A class can have multiple constructors with different parameter lists.",
                5
            ),
            qa(
                "Explain Destructors in C++. Why are they needed?",
                "A Destructor is a special member function that is called automatically when an object is destroyed (i.e., goes out of scope or is deleted). It has the same name as the class, preceded by a tilde (~), and takes no arguments/returns nothing. Destructors are needed for cleanup activities: releasing dynamically allocated memory (using 'delete'), closing open files, disconnecting from databases, or releasing system resources. This prevents memory leaks and resource exhaustion. Unlike constructors, only one destructor is allowed per class (it cannot be overloaded).",
                5
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit2Topics = [
    basicIO,
    arraysInCpp,
    stringsInCpp,
    classesAndObjects,
    constructorsDestructors,
];
