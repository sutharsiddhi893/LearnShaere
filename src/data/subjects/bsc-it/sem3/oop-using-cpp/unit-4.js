/* =========================================================
   B.Sc IT • SEM 3 • Object Oriented Programming using C++
   UNIT 4 — Operator Overloading and Dynamic Memory
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
   TOPIC 1 — Introduction to Operator Overloading
========================================================= */

const operatorOverloadingIntro = createTopic(
    "operator-overloading-intro",
    "Introduction to Operator Overloading",

    [
        definition(
            "Operator Overloading",
            "Operator Overloading is a feature in C++ that allows programmers to redefine the way operators (+, -, *, etc.) work for user-defined data types (classes). It is a type of compile-time polymorphism."
        ),

        heading("Why Operator Overloading?"),

        text(
            "In C++, we can add two integers using '+'. But what if we want to add two objects of a 'Complex' class or two 'Time' objects? Operator overloading allows us to define custom behavior for operators, making our classes intuitive to use."
        ),

        code(
            `// Without overloading (not possible)
Complex c1(2, 3), c2(4, 5);
Complex c3 = c1 + c2;  // Error! + doesn't know how to add Complex

// With overloading
Complex c3 = c1 + c2;  // Now works! Calls our custom + function`,
            "cpp",
            "Motivation for Overloading"
        ),

        heading("Syntax of Operator Overloading"),

        code(
            `return_type operator symbol (arguments) {
    // function body
}

// Example
class ClassName {
public:
    ClassName operator+(const ClassName &obj) {
        // define + behavior
    }
};`,
            "cpp",
            "Operator Overloading Syntax"
        ),

        heading("Operators That CAN Be Overloaded"),

        table(
            ["Type", "Operators"],
            [
                ["Arithmetic", "+, -, *, /, %"],
                ["Relational", "==, !=, <, >, <=, >="],
                ["Logical", "&&, ||, !"],
                ["Assignment", "=, +=, -=, *=, /=, %="],
                ["Unary", "++, --, unary -, unary +"],
                ["Bitwise", "&, |, ^, ~, <<, >>"],
                ["Special", "[], (), ->, new, delete"],
            ]
        ),

        heading("Operators That CANNOT Be Overloaded"),

        table(
            ["Operator", "Reason"],
            [
                [". (Member Access)", "Direct member access must remain consistent"],
                [":: (Scope Resolution)", "Namespace/class access must not change"],
                [".* (Pointer to member)", "Pointer semantics must remain intact"],
                ["?: (Ternary/Conditional)", "It's not really an operator"],
                ["sizeof", "Size determination is compile-time"],
                ["typeid", "Type information must be intrinsic"],
            ]
        ),

        heading("Rules for Operator Overloading"),

        list([
            "Only existing operators can be overloaded. New ones cannot be created.",
            "The precedence and associativity of operators cannot be changed.",
            "The number of operands cannot be changed (binary stays binary, unary stays unary).",
            "At least one operand must be of a user-defined type.",
            "Cannot overload for built-in data types (like int + int).",
            "Some operators cannot be overloaded (as listed above).",
        ]),

        note(
            "Operator overloading should be used to make code more intuitive and readable. Don't overload operators in ways that violate their traditional meaning (e.g., don't make '+' do subtraction). This confuses users of your class.",
            "tip",
            "Best Practice"
        ),

        keyPoints([
            "Operator overloading gives new meaning to existing operators.",
            "It is a form of compile-time polymorphism.",
            "Cannot create new operators or change precedence.",
            "Must involve at least one user-defined type.",
        ]),
    ],

    {
        summary: "Understand what operator overloading is, why it's useful, and the rules and restrictions for overloading operators in C++.",
        minutes: 12,
        tags: ["cpp", "operator-overloading", "polymorphism", "oop"],

        mcqs: [
            mcq(
                "Which of the following operators CANNOT be overloaded in C++?",
                ["+", "==", "::", "[]"],
                2,
                "The scope resolution operator '::' cannot be overloaded."
            ),
            mcq(
                "Operator overloading is an example of:",
                ["Runtime Polymorphism", "Compile-time Polymorphism", "Inheritance", "Encapsulation"],
                1,
                "Overloading is resolved at compile time."
            ),
            mcq(
                "Which keyword is used for operator overloading?",
                ["overload", "operator", "overload_op", "op"],
                1,
                "The 'operator' keyword is used followed by the symbol."
            ),
        ],

        questions: [
            qa(
                "What is Operator Overloading? What are the rules for overloading operators?",
                "Operator Overloading is a feature in C++ that allows redefining the meaning of existing operators for user-defined types (classes). It provides a natural syntax for operations on custom objects. Rules: 1) Only existing operators can be overloaded; new operators cannot be created. 2) Precedence and associativity remain unchanged. 3) The number of operands (unary/binary) cannot be modified. 4) At least one operand must be of a user-defined type. 5) Certain operators cannot be overloaded: '::' (scope resolution), '.' (member access), '.*' (pointer to member), '?:' (ternary), 'sizeof', and 'typeid'. 6) Overloading should preserve the natural meaning of operators.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — Unary Operator Overloading
========================================================= */

const unaryOverloading = createTopic(
    "unary-operator-overloading",
    "Unary Operator Overloading",

    [
        definition(
            "Unary Operator",
            "A unary operator operates on a single operand. Examples include unary minus (-), increment (++), decrement (--), and logical NOT (!)."
        ),

        heading("Overloading Unary Minus (-)"),

        code(
            `#include <iostream>
using namespace std;

class Number {
private:
    int value;
public:
    Number(int v) : value(v) {}

    // Overload unary minus
    void operator-() {
        value = -value;
    }

    void display() {
        cout << "Value: " << value << endl;
    }
};

int main() {
    Number n(10);
    n.display();  // Value: 10
    
    -n;  // Calling overloaded operator
    n.display();  // Value: -10
    
    return 0;
}`,
            "cpp",
            "Unary Minus Overloading"
        ),

        heading("Overloading Increment (++) Operators"),

        text(
            "There are two forms: prefix (++obj) and postfix (obj++). We differentiate them using a dummy int parameter."
        ),

        code(
            `#include <iostream>
using namespace std;

class Counter {
private:
    int count;
public:
    Counter(int c = 0) : count(c) {}

    // Prefix increment: ++obj
    Counter operator++() {
        ++count;
        return *this;
    }

    // Postfix increment: obj++
    Counter operator++(int) { // 'int' is dummy parameter for postfix
        Counter temp = *this;
        count++;
        return temp;
    }

    void display() {
        cout << "Count: " << count << endl;
    }
};

int main() {
    Counter c(10);
    
    ++c;    // Prefix
    c.display();  // Count: 11
    
    c++;    // Postfix
    c.display();  // Count: 12
    
    Counter c2 = c++;  // Postfix returns old value
    c2.display();  // Count: 12 (old value)
    c.display();   // Count: 13 (new value)
    
    return 0;
}`,
            "cpp",
            "Prefix and Postfix Increment"
        ),

        output(
            `Count: 11
Count: 12
Count: 12
Count: 13`
        ),

        heading("Using Friend Function for Unary Operators"),

        code(
            `#include <iostream>
using namespace std;

class Number {
private:
    int value;
public:
    Number(int v) : value(v) {}
    
    // Friend function for unary minus
    friend Number operator-(Number n);
    
    void display() { cout << value << endl; }
};

Number operator-(Number n) {
    n.value = -n.value;
    return n;
}

int main() {
    Number n(25);
    Number n2 = -n;
    n2.display();  // -25
    n.display();   // 25 (unchanged)
    return 0;
}`,
            "cpp",
            "Unary Operator using Friend Function"
        ),

        keyPoints([
            "Unary operators work on a single operand.",
            "Postfix (obj++) uses a dummy 'int' parameter to differentiate from prefix.",
            "Prefix increments first, then returns the value.",
            "Postfix returns the old value, then increments.",
        ]),
    ],

    {
        summary: "Learn to overload unary operators (-, ++, --) in C++ with both member and friend function approaches, including prefix vs postfix.",
        minutes: 12,
        tags: ["cpp", "unary", "operator-overloading", "increment", "decrement"],

        mcqs: [
            mcq(
                "How do we differentiate between prefix and postfix increment overloading?",
                ["Using different function names", "Using a dummy 'int' parameter in postfix", "Using return type", "Cannot differentiate"],
                1,
                "Postfix uses a dummy 'int' parameter, e.g., operator++(int)."
            ),
            mcq(
                "A unary operator operates on:",
                ["Two operands", "One operand", "Three operands", "No operand"],
                1,
                "Unary operators work on a single operand."
            ),
        ],

        questions: [
            qa(
                "Explain how to overload the increment (++) operator for both prefix and postfix forms.",
                "In C++, both prefix (++obj) and postfix (obj++) increment operators can be overloaded, and they are differentiated by a dummy 'int' parameter in the postfix version. Prefix: 'Counter operator++() { ++count; return *this; }' - It increments first and returns the modified object. Postfix: 'Counter operator++(int) { Counter temp = *this; count++; return temp; }' - It saves the current state in a temporary object, increments the original, and returns the temporary (old state). The 'int' parameter is never used; it just tells the compiler this is the postfix version. This mimics the natural behavior of ++ on primitive types.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — Binary Operator Overloading
========================================================= */

const binaryOverloading = createTopic(
    "binary-operator-overloading",
    "Binary Operator Overloading",

    [
        definition(
            "Binary Operator",
            "A binary operator operates on two operands. Examples include +, -, *, /, ==, !=, etc."
        ),

        heading("Overloading Binary + Operator (Member Function)"),

        text(
            "When overloading a binary operator as a member function, the left operand is the object calling the function (invisible 'this'), and the right operand is passed as an argument."
        ),

        code(
            `#include <iostream>
using namespace std;

class Complex {
private:
    float real, imag;
public:
    Complex(float r = 0, float i = 0) : real(r), imag(i) {}

    // Overload + operator
    Complex operator+(const Complex &c) {
        Complex temp;
        temp.real = real + c.real;   // 'real' refers to 'this->real'
        temp.imag = imag + c.imag;
        return temp;
    }

    // Overload == operator
    bool operator==(const Complex &c) {
        return (real == c.real && imag == c.imag);
    }

    void display() {
        cout << real << " + " << imag << "i" << endl;
    }
};

int main() {
    Complex c1(3.5, 2.5);
    Complex c2(1.5, 4.5);
    Complex c3;

    c3 = c1 + c2;  // Calls c1.operator+(c2)
    c3.display();  // 5 + 7i

    if (c1 == c2) {
        cout << "Equal";
    } else {
        cout << "Not Equal";
    }

    return 0;
}`,
            "cpp",
            "Binary Operator Overloading (Member)"
        ),

        heading("Overloading Binary Operators Using Friend Function"),

        text(
            "Friend functions require BOTH operands as arguments, since they are not member functions and don't have a 'this' pointer."
        ),

        code(
            `#include <iostream>
using namespace std;

class Complex {
private:
    float real, imag;
public:
    Complex(float r = 0, float i = 0) : real(r), imag(i) {}

    // Friend function
    friend Complex operator+(const Complex &c1, const Complex &c2);
    
    // Also useful: overload + with an int
    friend Complex operator+(const Complex &c, int n);
    friend Complex operator+(int n, const Complex &c);

    void display() {
        cout << real << " + " << imag << "i" << endl;
    }
};

Complex operator+(const Complex &c1, const Complex &c2) {
    return Complex(c1.real + c2.real, c1.imag + c2.imag);
}

Complex operator+(const Complex &c, int n) {
    return Complex(c.real + n, c.imag);
}

Complex operator+(int n, const Complex &c) {
    return Complex(c.real + n, c.imag);
}

int main() {
    Complex c1(3, 4), c2(1, 2);
    Complex c3 = c1 + c2;     // Complex + Complex
    Complex c4 = c1 + 5;      // Complex + int
    Complex c5 = 10 + c2;     // int + Complex (only possible with friend!)
    
    c3.display();
    c4.display();
    c5.display();
    return 0;
}`,
            "cpp",
            "Binary Overloading with Friend"
        ),

        heading("Member Function vs Friend Function"),

        table(
            ["Aspect", "Member Function", "Friend Function"],
            [
                ["Arguments", "Takes n-1 arguments (this is left operand)", "Takes n arguments"],
                ["Left Operand", "Must be object of class", "Can be any type"],
                ["Best For", "op= (=, +=, ()...)", "When left operand may not be class"],
                ["Symmetry", "Not fully symmetric", "Fully symmetric (int + obj works)"],
            ]
        ),

        heading("Overloading Assignment (=) Operator"),

        text(
            "The assignment operator '=' is often overloaded to handle deep copying of dynamically allocated resources."
        ),

        code(
            `class MyClass {
private:
    int *data;
public:
    MyClass(int val) {
        data = new int(val);
    }
    
    // Overload = operator
    MyClass& operator=(const MyClass &other) {
        if (this != &other) {  // Self-assignment check
            delete data;         // Free existing memory
            data = new int(*other.data);  // Deep copy
        }
        return *this;
    }
    
    ~MyClass() { delete data; }
};`,
            "cpp",
            "Assignment Operator Overloading"
        ),

        note(
            "When overloading '=', always check for self-assignment (this != &other) and perform a deep copy if the class contains pointers. This prevents crashes and memory leaks.",
            "warning",
            "Rule of Three"
        ),

        keyPoints([
            "Binary operators require two operands.",
            "Member function form: left operand is 'this'.",
            "Friend function form: both operands passed as arguments.",
            "Use friend when the left operand might not be a class object.",
            "Always handle self-assignment in operator= overloading.",
        ]),
    ],

    {
        summary: "Master binary operator overloading (+, -, ==, =) using both member functions and friend functions in C++.",
        minutes: 15,
        tags: ["cpp", "binary", "operator-overloading", "friend", "assignment"],

        mcqs: [
            mcq(
                "When overloading a binary + as a member function, how many arguments does it take?",
                ["0", "1", "2", "3"],
                1,
                "As a member function, left operand is 'this', so only 1 argument is needed."
            ),
            mcq(
                "Which is TRUE about friend function overloading of binary operators?",
                ["Takes 1 argument", "Takes 2 arguments", "Cannot overload binary", "Same as member"],
                1,
                "Friend functions require both operands as explicit arguments."
            ),
        ],

        questions: [
            qa(
                "Explain binary operator overloading using both member function and friend function with examples.",
                "Binary operator overloading allows operators like +, -, *, == to work with class objects. Using Member Function: The left operand is the invoking object (this pointer), and the right operand is passed as an argument. Example: 'Complex operator+(const Complex &c) { return Complex(real + c.real, imag + c.imag); }'. Called as 'c1 + c2' which becomes 'c1.operator+(c2)'. Using Friend Function: Both operands are passed as arguments explicitly. Example: 'friend Complex operator+(const Complex &c1, const Complex &c2);'. This is useful when the left operand is not a class object, e.g., 'int + Complex' can only be achieved with friend functions because we cannot add a member function to the 'int' type.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — Dynamic Memory Allocation
========================================================= */

const dynamicMemory = createTopic(
    "dynamic-memory-allocation",
    "Dynamic Memory Allocation in C++",

    [
        definition(
            "Dynamic Memory Allocation",
            "Dynamic Memory Allocation is the process of allocating memory manually during runtime using the 'new' operator, as opposed to static allocation which happens at compile time. Memory is allocated on the heap."
        ),

        heading("Stack vs Heap"),

        table(
            ["Feature", "Stack Memory", "Heap Memory"],
            [
                ["Allocation", "Automatic (compile time)", "Manual (runtime)"],
                ["Speed", "Very fast", "Slower"],
                ["Size", "Limited (few MB)", "Large (system dependent)"],
                ["Lifetime", "Limited to scope", "Manually controlled"],
                ["Management", "Automatic cleanup", "Manual deallocation"],
                ["Access", "Direct variable access", "Access via pointer"],
            ]
        ),

        heading("The 'new' Operator"),

        text(
            "The 'new' operator allocates memory dynamically and returns a pointer to the allocated memory."
        ),

        code(
            `// Syntax
data_type *pointer_name = new data_type;
data_type *pointer_name = new data_type(initial_value);
data_type *pointer_name = new data_type[size];  // Array

// Examples
int *ptr = new int;           // Uninitialized
int *ptr2 = new int(10);      // Initialized to 10
int *arr = new int[5];        // Array of 5 integers

// For classes
Student *s = new Student("Amit", 20);  // Calls constructor`,
            "cpp",
            "Using new Operator"
        ),

        heading("The 'delete' Operator"),

        text(
            "The 'delete' operator releases the memory that was allocated using 'new'. Not deleting causes memory leaks."
        ),

        code(
            `// Syntax
delete pointer_name;        // For single variable
delete[] pointer_name;      // For array

// Examples
int *ptr = new int(10);
delete ptr;
ptr = nullptr;  // Good practice

int *arr = new int[5];
delete[] arr;   // Must use [] for arrays
arr = nullptr;`,
            "cpp",
            "Using delete Operator"
        ),

        heading("Complete Example"),

        code(
            `#include <iostream>
using namespace std;

class Student {
private:
    string name;
    int marks;
public:
    Student(string n, int m) {
        name = n;
        marks = m;
        cout << "Constructor called for " << name << endl;
    }
    
    ~Student() {
        cout << "Destructor called for " << name << endl;
    }
    
    void display() {
        cout << name << ": " << marks << endl;
    }
};

int main() {
    // Dynamic allocation of a single object
    Student *s1 = new Student("Amit", 85);
    s1->display();
    delete s1;
    
    // Dynamic allocation of an array of objects
    // Note: Cannot use parameterized constructor with new[]
    
    // Dynamic allocation of int array
    int size;
    cout << "Enter size: ";
    cin >> size;
    
    int *marks = new int[size];
    for (int i = 0; i < size; i++) {
        marks[i] = (i + 1) * 10;
    }
    
    for (int i = 0; i < size; i++) {
        cout << marks[i] << " ";
    }
    
    delete[] marks;  // Release array memory
    
    return 0;
}`,
            "cpp",
            "Complete Dynamic Memory Example"
        ),

        heading("Memory Leaks"),

        definition(
            "Memory Leak",
            "A memory leak occurs when memory is allocated dynamically but never released. Over time, this consumes all available memory and can crash the program or system."
        ),

        code(
            `void badFunction() {
    int *ptr = new int(10);  // Allocated
    // Missing delete ptr;
    // When function ends, ptr is destroyed but memory is not freed
}  // MEMORY LEAK!

void goodFunction() {
    int *ptr = new int(10);
    // ... use ptr
    delete ptr;
    ptr = nullptr;
}`,
            "cpp",
            "Memory Leak Example"
        ),

        heading("Best Practices"),

        list([
            "Every 'new' must be matched with 'delete'.",
            "Every 'new[]' must be matched with 'delete[]'.",
            "Set pointer to nullptr after delete to avoid dangling pointers.",
            "Use smart pointers (unique_ptr, shared_ptr) in modern C++.",
            "Prefer stack allocation over heap when possible.",
            "Always check if allocation succeeded (new can throw bad_alloc).",
        ]),

        heading("Modern C++: Smart Pointers"),

        code(
            `#include <memory>

// Automatic memory management
unique_ptr<int> ptr = make_unique<int>(10);
// No need to delete! Automatic cleanup when out of scope.

shared_ptr<Student> s = make_shared<Student>("Amit", 20);
// Reference counted; freed when last reference is gone.`,
            "cpp",
            "Smart Pointers (C++11+)"
        ),

        note(
            "In modern C++ (C++11 and later), prefer smart pointers (unique_ptr, shared_ptr) over raw 'new' and 'delete'. They handle memory management automatically and prevent memory leaks.",
            "tip",
            "Modern C++"
        ),

        keyPoints([
            "'new' allocates memory on heap; 'delete' frees it.",
            "Use 'new[]' with 'delete[]' for arrays.",
            "Every 'new' needs a corresponding 'delete' to prevent leaks.",
            "Modern C++ prefers smart pointers for automatic memory management.",
            "Set pointer to nullptr after delete to avoid dangling references.",
        ]),
    ],

    {
        summary: "Master dynamic memory allocation in C++ using new and delete operators, understand memory leaks, and learn best practices including smart pointers.",
        minutes: 15,
        tags: ["cpp", "dynamic-memory", "new", "delete", "heap", "memory-leak", "important"],

        mcqs: [
            mcq(
                "Which operator is used to allocate memory dynamically in C++?",
                ["malloc", "new", "alloc", "create"],
                1,
                "The 'new' operator is used in C++ for dynamic allocation."
            ),
            mcq(
                "What is the correct way to delete a dynamically allocated array?",
                ["delete ptr;", "delete[] ptr;", "delete *ptr;", "delete &ptr;"],
                1,
                "Arrays require delete[] to properly deallocate all elements."
            ),
            mcq(
                "Where is dynamically allocated memory stored?",
                ["Stack", "Heap", "Code Segment", "Data Segment"],
                1,
                "Dynamic memory is allocated from the heap."
            ),
            mcq(
                "What happens if you don't delete dynamically allocated memory?",
                ["Compilation Error", "Runtime Error", "Memory Leak", "Nothing"],
                2,
                "Not deleting causes a memory leak."
            ),
        ],

        questions: [
            qa(
                "Explain Dynamic Memory Allocation in C++ with 'new' and 'delete' operators.",
                "Dynamic Memory Allocation is the process of allocating memory during program execution (runtime) rather than at compile time. In C++, this is done using the 'new' operator, and memory is allocated on the heap. Syntax: 'int *ptr = new int;' allocates memory for one integer. 'int *arr = new int[10];' allocates memory for an array of 10 integers. The 'new' operator returns a pointer to the allocated memory. To free this memory, we use the 'delete' operator: 'delete ptr;' for single elements and 'delete[] arr;' for arrays. If we forget to delete, it causes a memory leak. Every 'new' must have a corresponding 'delete' to ensure proper memory management.",
                5
            ),
            qa(
                "What is a Memory Leak? How can it be prevented in C++?",
                "A Memory Leak occurs when a program allocates memory dynamically (using 'new') but fails to release it back to the system (using 'delete'). Over time, this leads to increased memory consumption, slower performance, and eventually can crash the program or system. Prevention: 1) Always pair every 'new' with a 'delete' (and 'new[]' with 'delete[]'). 2) Follow RAII (Resource Acquisition Is Initialization) principle - allocate in constructor, deallocate in destructor. 3) Use Smart Pointers (unique_ptr, shared_ptr) from C++11 which automatically manage memory. 4) Set pointers to nullptr after deletion. 5) Use tools like Valgrind or AddressSanitizer to detect leaks during testing. 6) Prefer stack allocation over heap when possible.",
                5
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit4Topics = [
    operatorOverloadingIntro,
    unaryOverloading,
    binaryOverloading,
    dynamicMemory,
];
