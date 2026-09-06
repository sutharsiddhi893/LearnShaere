/* =========================================================
   B.Sc IT • SEM 3 • Object Oriented Programming using C++
   UNIT 3 — Functions, Function Overloading, and Inheritance
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
   TOPIC 1 — Functions in C++
========================================================= */

const functionsInCpp = createTopic(
    "functions-in-cpp",
    "Functions in C++",

    [
        definition(
            "Function",
            "A function is a self-contained block of code that performs a specific task. It helps in modular programming, code reusability, and easier debugging."
        ),

        heading("Function Components"),

        code(
            `// 1. Function Declaration (Prototype)
return_type function_name(parameter_list);

// 2. Function Definition
return_type function_name(parameter_list) {
    // body of the function
    return value; // if not void
}

// 3. Function Call
function_name(arguments);`,
            "cpp",
            "Function Syntax"
        ),

        heading("Example: Simple Function"),

        code(
            `#include <iostream>
using namespace std;

// Declaration
int add(int a, int b);

int main() {
    int result = add(10, 20); // Call
    cout << "Sum: " << result;
    return 0;
}

// Definition
int add(int a, int b) {
    return a + b;
}`,
            "cpp",
            "Simple Function"
        ),

        heading("Library vs User-Defined Functions"),

        table(
            ["Library Functions", "User-Defined Functions"],
            [
                ["Predefined in C++ standard library", "Written by the programmer"],
                ["Included via header files (e.g., <cmath>)", "Defined within the program"],
                ["Examples: sqrt(), strlen(), pow()", "Examples: add(), display(), calculateSalary()"],
                ["Ready to use", "Need to be defined before use"],
            ]
        ),

        heading("Default Arguments"),

        text(
            "In C++, we can provide default values for function parameters. If the caller does not supply a value, the default value is used. Default arguments must be the rightmost parameters."
        ),

        code(
            `#include <iostream>
using namespace std;

// Function with default arguments
void showInfo(string name, int age = 18, string city = "Anand") {
    cout << name << ", " << age << ", " << city << endl;
}

int main() {
    showInfo("Amit");                   // Uses defaults for age and city
    showInfo("Riya", 20);              // Uses default for city
    showInfo("John", 25, "Vadodara");  // No defaults used
    return 0;
}`,
            "cpp",
            "Default Arguments"
        ),

        output(
            `Amit, 18, Anand
Riya, 20, Anand
John, 25, Vadodara`
        ),

        heading("Call by Value vs Call by Reference"),

        table(
            ["Feature", "Call by Value", "Call by Reference"],
            [
                ["Data Passed", "A copy of the value", "The address (reference) of the variable"],
                ["Original Data", "Not affected", "Can be modified"],
                ["Memory Usage", "More (creates copy)", "Less (uses original)"],
                ["Syntax", "void func(int x)", "void func(int &x) or void func(int *x)"],
                ["Use Case", "When you don't want changes", "When changes should reflect back"],
            ]
        ),

        code(
            `#include <iostream>
using namespace std;

// Call by Value
void changeValue(int x) {
    x = 100;
}

// Call by Reference
void changeReference(int &x) {
    x = 100;
}

int main() {
    int num = 10;

    changeValue(num);
    cout << "After Value call: " << num << endl; // 10

    changeReference(num);
    cout << "After Ref call: " << num << endl;   // 100

    return 0;
}`,
            "cpp",
            "Call by Value vs Reference"
        ),

        output(
            `After Value call: 10
After Ref call: 100`
        ),

        heading("Inline Functions"),

        definition(
            "Inline Function",
            "An inline function is a function that is expanded in line when it is called, rather than performing a jump. It reduces function call overhead but should be used only for small functions."
        ),

        code(
            `#include <iostream>
using namespace std;

inline int square(int x) {
    return x * x;
}

int main() {
    cout << "Square: " << square(5); // Expands to: cout << "Square: " << (5*5);
    return 0;
}`,
            "cpp",
            "Inline Function"
        ),

        note(
            "The compiler may ignore the 'inline' request if the function is too complex (e.g., contains loops or recursion). Inline is just a suggestion to the compiler.",
            "tip",
            "Compiler Behavior"
        ),

        keyPoints([
            "Functions promote code reusability and modularity.",
            "Default arguments must be the rightmost parameters.",
            "Call by reference allows functions to modify original values.",
            "Inline functions reduce call overhead but increase code size.",
        ]),
    ],

    {
        summary: "Master C++ functions: declaration, definition, default arguments, call by value/reference, and inline functions.",
        minutes: 15,
        tags: ["cpp", "functions", "default-arguments", "call-by-reference", "inline"],

        mcqs: [
            mcq(
                "Which call passes the actual memory address to a function?",
                ["Call by Value", "Call by Reference", "Call by Copy", "Call by Function"],
                1,
                "Call by Reference passes the address (or reference) of the variable."
            ),
            mcq(
                "Default arguments must be:",
                ["Leftmost parameters", "Rightmost parameters", "Middle parameters", "Any position"],
                1,
                "In C++, default values must be assigned from right to left."
            ),
            mcq(
                "The 'inline' keyword is a ___ to the compiler.",
                ["Command", "Request/Suggestion", "Requirement", "Warning"],
                1,
                "The compiler may or may not honor the inline request."
            ),
        ],

        questions: [
            qa(
                "Differentiate between Call by Value and Call by Reference in C++.",
                "Call by Value: When a function is called, a copy of the actual argument's value is passed to the function's formal parameter. Any changes made to the parameter inside the function do NOT affect the original argument. Example: 'void func(int x)'. Call by Reference: Instead of a copy, the memory address (or a reference) of the actual argument is passed. Changes made to the parameter inside the function DIRECTLY affect the original argument. It is more memory-efficient and useful when we need to return multiple values or modify the original variable. Example: 'void func(int &x)' using reference or 'void func(int *x)' using pointer.",
                5
            ),
            qa(
                "What are inline functions? What are their advantages and disadvantages?",
                "An inline function is a function defined with the 'inline' keyword. Instead of performing a normal function call (jump), the compiler tries to replace the function call with the actual code of the function body at the call site. Advantages: 1) Reduces function call overhead (saves time). 2) Faster execution for small functions. 3) Improves performance in loops. Disadvantages: 1) Increases the size of the executable (code bloat). 2) Not suitable for large functions or those with loops/recursion. 3) The compiler may ignore the inline request. It should only be used for small, frequently called functions.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — Function Overloading & Friend Functions
========================================================= */

const overloadingAndFriend = createTopic(
    "function-overloading-and-friend",
    "Function Overloading and Friend Functions",

    [
        heading("Function Overloading"),

        definition(
            "Function Overloading",
            "Function Overloading allows multiple functions to have the same name but with different parameter lists (different number, type, or order of parameters). It is a form of compile-time polymorphism."
        ),

        heading("Rules for Function Overloading"),

        list([
            "Functions must have the same name.",
            "The number of parameters must be different, OR",
            "The type of parameters must be different, OR",
            "The order of parameters must be different.",
            "Return type alone is NOT sufficient for overloading.",
        ]),

        code(
            `#include <iostream>
using namespace std;

// 1. Different number of arguments
int add(int a, int b) {
    return a + b;
}

int add(int a, int b, int c) {
    return a + b + c;
}

// 2. Different types of arguments
float add(float a, float b) {
    return a + b;
}

// 3. Different order of arguments
void display(int a, char b) {
    cout << "Int, Char: " << a << ", " << b << endl;
}

void display(char b, int a) {
    cout << "Char, Int: " << b << ", " << a << endl;
}

int main() {
    cout << add(5, 10) << endl;       // int, int
    cout << add(5, 10, 15) << endl;   // int, int, int
    cout << add(2.5f, 3.5f) << endl;  // float, float
    display(10, 'A');
    display('B', 20);
    return 0;
}`,
            "cpp",
            "Function Overloading Example"
        ),

        output(
            `15
30
6
Int, Char: 10, A
Char, Int: B, 20`
        ),

        heading("Advantages of Overloading"),

        list([
            "Improves code readability (same name for similar tasks).",
            "Reduces the need for different function names.",
            "Supports compile-time polymorphism.",
            "Makes code more intuitive to use.",
        ]),

        heading("Friend Functions"),

        definition(
            "Friend Function",
            "A friend function is a non-member function that has access to the private and protected members of a class. It is declared inside the class using the 'friend' keyword but defined outside like a normal function."
        ),

        heading("Characteristics of Friend Functions"),

        list([
            "It is NOT a member of the class.",
            "It has access to private and protected members.",
            "It is called like a normal function (not through an object).",
            "It is declared inside the class with the 'friend' keyword.",
            "It does not have a 'this' pointer.",
            "It cannot be inherited.",
        ]),

        code(
            `#include <iostream>
using namespace std;

class Box {
private:
    int length;

public:
    Box(int l) {
        length = l;
    }

    // Friend function declaration
    friend void printLength(Box b);
};

// Friend function definition (outside class, no scope resolution)
void printLength(Box b) {
    // Can access private member 'length'
    cout << "Length of Box: " << b.length << endl;
}

int main() {
    Box b1(50);
    printLength(b1); // Called as a normal function
    return 0;
}`,
            "cpp",
            "Friend Function Example"
        ),

        heading("Friend Class"),

        text(
            "Similarly, an entire class can be declared as a friend of another class. All member functions of the friend class can then access the private members of the original class."
        ),

        code(
            `class Engine {
    // Details...
};

class Car {
private:
    int speed;
public:
    friend class Mechanic; // Mechanic can access private members
};

class Mechanic {
public:
    void repair(Car c) {
        // Can access c.speed even though it's private
    }
};`,
            "cpp",
            "Friend Class"
        ),

        note(
            "Friend functions violate the principle of Encapsulation. Use them sparingly, only when necessary (e.g., for operator overloading or when two classes must work closely together).",
            "warning",
            "Design Consideration"
        ),

        keyPoints([
            "Function overloading requires different parameter lists.",
            "Return type alone cannot overload a function.",
            "Friend functions can access private/protected members.",
            "Friend functions are not called via objects; they are standalone.",
            "Overuse of friend functions breaks encapsulation.",
        ]),
    ],

    {
        summary: "Understand function overloading (compile-time polymorphism) and friend functions/classes that can bypass access restrictions.",
        minutes: 12,
        tags: ["cpp", "overloading", "polymorphism", "friend", "encapsulation"],

        mcqs: [
            mcq(
                "Which of the following is NOT valid criterion for function overloading?",
                ["Different number of arguments", "Different types of arguments", "Different return type only", "Different order of arguments"],
                2,
                "Return type alone cannot differentiate overloaded functions."
            ),
            mcq(
                "A friend function can access:",
                ["Only public members", "Only protected members", "Only private members", "All (private, protected, public) members"],
                3,
                "Friend functions have full access to all members of the class."
            ),
            mcq(
                "Function overloading is an example of:",
                ["Runtime Polymorphism", "Compile-time Polymorphism", "Inheritance", "Encapsulation"],
                1,
                "Overloading is resolved at compile time."
            ),
        ],

        questions: [
            qa(
                "What is Function Overloading? Explain with a suitable C++ program.",
                "Function Overloading is a feature in C++ where two or more functions can have the same name but different parameters. The compiler decides which function to call based on the number, type, or sequence of arguments at compile time. This is a form of static (compile-time) polymorphism. Example: 'int add(int a, int b) { return a+b; }' and 'float add(float a, float b) { return a+b; }' are overloaded functions. When we call 'add(2, 3)', the integer version is called; when we call 'add(2.5, 3.5)', the float version is called. This improves code readability by allowing us to use the same name for similar operations on different data types.",
                5
            ),
            qa(
                "What are Friend Functions? Explain their need and characteristics.",
                "A Friend Function is a function that is not a member of a class but has the privilege to access the private and protected members of that class. It is declared inside the class using the 'friend' keyword. Need: 1) When we need to operate on objects of two different classes that share data. 2) For operator overloading involving different types (e.g., int + Object). 3) To provide non-member interface functions. Characteristics: 1) Not a member of the class. 2) Called like a normal function without an object. 3) No 'this' pointer. 4) Cannot be inherited. 5) Access rights don't work in reverse (class members can't access friend's private data). It should be used carefully as it can break encapsulation.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — Inheritance: Introduction and Types
========================================================= */

const inheritanceIntro = createTopic(
    "inheritance-introduction",
    "Inheritance: Introduction and Types",

    [
        definition(
            "Inheritance",
            "Inheritance is the process by which a new class (derived/child class) is created from an existing class (base/parent class). The derived class inherits all the properties and behaviors of the base class and can also have its own additional features."
        ),

        heading("Why Inheritance?"),

        list([
            "**Reusability:** Reuse existing code without rewriting.",
            "**Extensibility:** Add new features to existing classes.",
            "**Data Hiding:** Base class can decide what to keep private.",
            "**Overriding:** Redefine base class functions in derived class.",
        ]),

        heading("Syntax of Inheritance"),

        code(
            `class BaseClass {
    // members
};

class DerivedClass : access_specifier BaseClass {
    // additional members
};`,
            "cpp",
            "Inheritance Syntax"
        ),

        heading("Modes of Inheritance (Access Specifiers)"),

        table(
            ["Mode", "Base's public becomes", "Base's protected becomes", "Base's private becomes"],
            [
                ["public", "public in derived", "protected in derived", "Not accessible"],
                ["protected", "protected in derived", "protected in derived", "Not accessible"],
                ["private", "private in derived", "private in derived", "Not accessible"],
            ]
        ),

        heading("Types of Inheritance"),

        heading("1. Single Inheritance"),

        text("One derived class inherits from one base class."),

        code(
            `class Animal { 
public: 
    void eat() { cout << "Eating..."; } 
};

class Dog : public Animal { 
public: 
    void bark() { cout << "Barking..."; } 
};

int main() {
    Dog d;
    d.eat();  // Inherited from Animal
    d.bark(); // Own method
}`,
            "cpp",
            "Single Inheritance"
        ),

        heading("2. Multilevel Inheritance"),

        text("A derived class is created from another derived class (chain of inheritance)."),

        code(
            `class Grandfather {
public: 
    void property() { cout << "Property inherited"; }
};

class Father : public Grandfather {
public: 
    void business() { cout << "Business inherited"; }
};

class Son : public Father {
public: 
    void showAll() { 
        property(); 
        business(); 
    }
};`,
            "cpp",
            "Multilevel Inheritance"
        ),

        heading("3. Multiple Inheritance"),

        text("A derived class inherits from more than one base class."),

        code(
            `class Father {
public: 
    void skill1() { cout << "Coding"; }
};

class Mother {
public: 
    void skill2() { cout << "Cooking"; }
};

class Child : public Father, public Mother {
public: 
    void showSkills() { 
        skill1(); 
        skill2(); 
    }
};`,
            "cpp",
            "Multiple Inheritance"
        ),

        heading("4. Hierarchical Inheritance"),

        text("Multiple derived classes inherit from a single base class."),

        code(
            `class Vehicle {
public: 
    void start() { cout << "Vehicle Started"; }
};

class Car : public Vehicle { /* ... */ };
class Bike : public Vehicle { /* ... */ };
class Truck : public Vehicle { /* ... */ };`,
            "cpp",
            "Hierarchical Inheritance"
        ),

        heading("5. Hybrid Inheritance"),

        text("A combination of two or more types of inheritance (e.g., Hierarchical + Multiple). This can lead to the 'Diamond Problem' which is solved using Virtual Inheritance."),

        heading("Constructor and Destructor Invocation Order"),

        list([
            "When an object of a derived class is created, the base class constructor is called FIRST, then the derived class constructor.",
            "When the object is destroyed, the derived class destructor is called FIRST, then the base class destructor.",
            "The order is: Constructor -> Top-Down, Destructor -> Bottom-Up.",
        ]),

        code(
            `class Base {
public:
    Base() { cout << "Base Constructor" << endl; }
    ~Base() { cout << "Base Destructor" << endl; }
};

class Derived : public Base {
public:
    Derived() { cout << "Derived Constructor" << endl; }
    ~Derived() { cout << "Derived Destructor" << endl; }
};

int main() {
    Derived d;
    return 0;
}`,
            "cpp",
            "Constructor/Destructor Order"
        ),

        output(
            `Base Constructor
Derived Constructor
Derived Destructor
Base Destructor`
        ),

        note(
            "The Diamond Problem: In hybrid/multiple inheritance, if two parent classes inherit from the same grandparent, the child class gets duplicate copies of grandparent's members. This is solved using 'virtual' inheritance.",
            "warning",
            "Diamond Problem"
        ),

        keyPoints([
            "Inheritance promotes code reusability.",
            "Public inheritance is most common (preserves access).",
            "Constructors are called top-down; Destructors are called bottom-up.",
            "Private members of base class are NEVER inherited.",
            "5 types: Single, Multilevel, Multiple, Hierarchical, Hybrid.",
        ]),
    ],

    {
        summary: "Master inheritance in C++: syntax, modes (public/private/protected), and 5 types (Single, Multilevel, Multiple, Hierarchical, Hybrid).",
        minutes: 15,
        tags: ["cpp", "inheritance", "oop", "base-class", "derived-class", "important"],

        mcqs: [
            mcq(
                "In which order are constructors called in inheritance?",
                ["Derived first, then Base", "Base first, then Derived", "Only Derived", "Both simultaneously"],
                1,
                "Base class constructor is called first, then the derived class."
            ),
            mcq(
                "Which type of inheritance involves one base class and multiple derived classes?",
                ["Single", "Multilevel", "Multiple", "Hierarchical"],
                3,
                "Hierarchical inheritance has multiple children from one parent."
            ),
            mcq(
                "The Diamond Problem occurs in which type of inheritance?",
                ["Single", "Multilevel", "Multiple/Hybrid", "Hierarchical"],
                2,
                "The Diamond Problem arises in multiple/hybrid inheritance."
            ),
            mcq(
                "Which members of the base class are NEVER inherited?",
                ["public", "protected", "private", "All are inherited"],
                2,
                "Private members are never inherited by derived classes."
            ),
        ],

        questions: [
            qa(
                "What is Inheritance? Explain its different types with diagrams/examples.",
                "Inheritance is an OOP feature where a new class (derived/child) acquires the properties and behaviors of an existing class (base/parent). It promotes code reusability. Types are: 1) Single Inheritance: One derived class from one base (A -> B). 2) Multilevel Inheritance: A chain of inheritance (A -> B -> C). 3) Multiple Inheritance: One derived class from multiple base classes (A, B -> C). 4) Hierarchical Inheritance: Multiple derived classes from one base class (A -> B, A -> C). 5) Hybrid Inheritance: A combination of two or more of the above types. C++ supports all these types, unlike Java which does not support multiple inheritance directly.",
                5
            ),
            qa(
                "Explain the modes of inheritance (public, private, protected) in C++.",
                "The mode of inheritance decides the access level of base class members in the derived class. 1) Public Inheritance: The most common mode. Public members of base remain public in derived. Protected members remain protected. Private members are not accessible. 2) Protected Inheritance: Both public and protected members of base become protected in derived. This is useful when you want to hide the base class from the outside world but still allow further inheritance. 3) Private Inheritance: Both public and protected members of base become private in derived. This is used to implement 'has-a' relationship instead of 'is-a'. Private members of base are never inherited in any mode.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — Virtual Functions and Runtime Polymorphism
========================================================= */

const virtualFunctions = createTopic(
    "virtual-functions-polymorphism",
    "Virtual Functions and Runtime Polymorphism",

    [
        heading("Function Overriding"),

        definition(
            "Function Overriding",
            "When a derived class defines a function with the same name and signature as a function in the base class, it is called function overriding. The derived class's version replaces the base class's version for objects of the derived class."
        ),

        code(
            `class Animal {
public:
    void sound() { cout << "Animal makes sound"; }
};

class Dog : public Animal {
public:
    void sound() { cout << "Dog barks"; } // Overrides
};

int main() {
    Dog d;
    d.sound();  // Output: Dog barks
    d.Animal::sound(); // Explicit call to base version
}`,
            "cpp",
            "Function Overriding"
        ),

        heading("The Problem with Static Binding"),

        text(
            "When we use a base class pointer to point to a derived class object, and call an overridden function, C++ uses the base class version by default (static binding). This is often not what we want."
        ),

        code(
            `Animal *ptr;
Dog d;
ptr = &d;
ptr->sound(); // Calls Animal::sound() instead of Dog::sound() - WRONG!`,
            "cpp",
            "Problem with base pointer"
        ),

        heading("Virtual Functions - The Solution"),

        definition(
            "Virtual Function",
            "A virtual function is a member function declared with the 'virtual' keyword in the base class. When overridden in the derived class, C++ ensures that the correct function is called based on the type of object (not the type of pointer) at runtime. This is called Dynamic Binding or Runtime Polymorphism."
        ),

        code(
            `#include <iostream>
using namespace std;

class Animal {
public:
    // Declared as virtual
    virtual void sound() {
        cout << "Animal makes sound" << endl;
    }
};

class Dog : public Animal {
public:
    void sound() override { // 'override' keyword (C++11) is good practice
        cout << "Dog barks" << endl;
    }
};

class Cat : public Animal {
public:
    void sound() override {
        cout << "Cat meows" << endl;
    }
};

int main() {
    Animal *ptr;
    Dog d;
    Cat c;

    ptr = &d;
    ptr->sound();  // Output: Dog barks (Runtime Polymorphism)

    ptr = &c;
    ptr->sound();  // Output: Cat meows

    return 0;
}`,
            "cpp",
            "Virtual Functions"
        ),

        output(
            `Dog barks
Cat meows`
        ),

        heading("Pure Virtual Functions and Abstract Classes"),

        definition(
            "Pure Virtual Function",
            "A pure virtual function is a virtual function that has no implementation in the base class. It is declared by assigning 0. Any class containing a pure virtual function is called an Abstract Class."
        ),

        text(
            "Abstract classes cannot be instantiated. They are used only as base classes to force derived classes to provide implementation."
        ),

        code(
            `class Shape {
public:
    // Pure virtual function
    virtual double area() = 0;
    
    virtual void display() {
        cout << "This is a shape.";
    }
};

class Circle : public Shape {
private:
    double radius;
public:
    Circle(double r) : radius(r) {}
    
    // Must implement the pure virtual function
    double area() override {
        return 3.14 * radius * radius;
    }
};

int main() {
    // Shape s; // ERROR: Cannot instantiate abstract class
    Shape *s = new Circle(5.0);
    cout << "Area: " << s->area();
    delete s;
    return 0;
}`,
            "cpp",
            "Pure Virtual Function"
        ),

        heading("Rules for Virtual Functions"),

        list([
            "Virtual functions must be members of a class.",
            "They cannot be static.",
            "They can be a friend of another class.",
            "They are accessed using an object pointer or reference.",
            "The prototype of virtual functions should be the same in base and derived class.",
            "A class can have a virtual destructor but not a virtual constructor.",
        ]),

        note(
            "Always declare destructors as 'virtual' in base classes if the class is intended to be inherited. This ensures that when you delete a derived object through a base pointer, the derived class's destructor is called first, preventing memory leaks.",
            "warning",
            "Virtual Destructor"
        ),

        keyPoints([
            "Virtual functions enable Runtime Polymorphism.",
            "Static Binding: Compile-time decision. Dynamic Binding: Runtime decision.",
            "Pure virtual functions have no body: 'virtual void func() = 0;'",
            "A class with a pure virtual function is an Abstract Class.",
            "Abstract classes cannot be instantiated.",
        ]),
    ],

    {
        summary: "Understand Runtime Polymorphism through Virtual Functions, Pure Virtual Functions, and Abstract Classes in C++.",
        minutes: 15,
        tags: ["cpp", "virtual", "polymorphism", "abstract-class", "override", "important"],

        mcqs: [
            mcq(
                "Which keyword is used to declare a virtual function?",
                ["dynamic", "override", "virtual", "polymorphic"],
                2,
                "The 'virtual' keyword is used in the base class."
            ),
            mcq(
                "A class containing at least one pure virtual function is called:",
                ["Base Class", "Derived Class", "Abstract Class", "Static Class"],
                2,
                "It is called an Abstract Class."
            ),
            mcq(
                "A pure virtual function is declared as:",
                ["virtual void f();", "virtual void f() = 0;", "void f() = 0;", "pure virtual void f();"],
                1,
                "Pure virtual functions are assigned 0 in declaration."
            ),
            mcq(
                "Runtime polymorphism is achieved through:",
                ["Function Overloading", "Operator Overloading", "Virtual Functions", "Templates"],
                2,
                "Virtual functions enable runtime (dynamic) polymorphism."
            ),
        ],

        questions: [
            qa(
                "What is a Virtual Function? Explain with an example how it achieves Runtime Polymorphism.",
                "A Virtual Function is a member function in the base class declared with the 'virtual' keyword and can be overridden in derived classes. When a base class pointer or reference is used to point to a derived class object, calling a virtual function invokes the derived class's version, not the base class's version. This binding happens at runtime (Dynamic Binding), enabling Runtime Polymorphism. Example: 'class Animal { public: virtual void sound() { cout << \"Animal\"; } }; class Dog : public Animal { public: void sound() override { cout << \"Bark\"; } }; Animal *p = new Dog(); p->sound();' will output 'Bark' because of virtual function mechanism (using VTable internally).",
                5
            ),
            qa(
                "What is an Abstract Class? Why do we need it?",
                "An Abstract Class is a class that contains at least one Pure Virtual Function (declared as 'virtual void func() = 0;'). Key characteristics: 1) It cannot be instantiated (you cannot create objects of it). 2) It is designed to be a base class. 3) Any derived class must provide implementation for all pure virtual functions; otherwise, it also becomes abstract. Need: 1) To provide a common interface for a group of related classes. 2) To force derived classes to implement certain methods (design contract). 3) To achieve full abstraction. Example: 'Shape' with pure virtual 'area()' forces 'Circle', 'Rectangle', 'Triangle' to implement their own area calculation.",
                5
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit3Topics = [
    functionsInCpp,
    overloadingAndFriend,
    inheritanceIntro,
    virtualFunctions,
];
