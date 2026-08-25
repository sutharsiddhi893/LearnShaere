/* =========================================================
   BCA • SEM 4 • Object Oriented Programming - I (Java)
   UNIT 1 — Java Basics, OOP Concepts and Classes
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
   TOPIC 1 — Introduction to OOP and Java
========================================================= */

const introOOPJava = createTopic(
    "introduction-to-oop-and-java",
    "Introduction to OOP and Java",

    [
        definition(
            "Object-Oriented Programming",
            "Object-Oriented Programming (OOP) is a programming paradigm based on the concept of 'objects' that contain data (attributes) and code (methods). OOP focuses on modeling real-world entities."
        ),

        heading("Procedural vs Object-Oriented Programming"),

        table(
            ["Basis", "Procedural (POP)", "Object-Oriented (OOP)"],
            [
                ["Focus", "Functions and procedures", "Objects and classes"],
                ["Data Access", "Global data", "Encapsulated in objects"],
                ["Approach", "Top-down", "Bottom-up"],
                ["Security", "Less secure", "More secure"],
                ["Reusability", "Difficult", "Easy through inheritance"],
                ["Examples", "C, Pascal, FORTRAN", "Java, C++, Python"],
            ]
        ),

        heading("Core OOP Concepts"),

        table(
            ["Concept", "Description"],
            [
                ["Class", "Blueprint for creating objects"],
                ["Object", "Instance of a class"],
                ["Encapsulation", "Wrapping data and methods together"],
                ["Inheritance", "Deriving new class from existing"],
                ["Polymorphism", "Same interface, different behavior"],
                ["Abstraction", "Hiding complex details"],
            ]
        ),

        heading("Benefits of OOP"),

        list([
            "Code reusability through inheritance.",
            "Data security through encapsulation.",
            "Easy to maintain and modify.",
            "Models real-world entities naturally.",
            "Supports modular programming.",
            "Reduces code duplication.",
            "Better problem-solving approach.",
            "Easier debugging.",
        ]),

        heading("Introduction to Java"),

        definition(
            "Java",
            "Java is a high-level, class-based, object-oriented programming language designed to be platform-independent. It was developed by James Gosling at Sun Microsystems in 1995."
        ),

        heading("Features of Java"),

        table(
            ["Feature", "Description"],
            [
                ["Simple", "Easy to learn syntax based on C++"],
                ["Object-Oriented", "Everything is an object"],
                ["Platform Independent", "Write Once, Run Anywhere (WORA)"],
                ["Secure", "No pointers, memory management by JVM"],
                ["Robust", "Strong memory management and exception handling"],
                ["Multithreaded", "Supports concurrent programming"],
                ["Portable", "Bytecode runs on any JVM"],
                ["High Performance", "JIT compiler"],
                ["Distributed", "Built-in networking support"],
                ["Dynamic", "Loads classes on demand"],
            ]
        ),

        heading("Java Editions"),

        table(
            ["Edition", "Full Form", "Use"],
            [
                ["Java SE", "Standard Edition", "Desktop and general applications"],
                ["Java EE", "Enterprise Edition", "Web and enterprise applications"],
                ["Java ME", "Micro Edition", "Mobile and embedded devices"],
                ["JavaFX", "Rich UI Framework", "Rich internet applications"],
            ]
        ),

        heading("JVM, JRE and JDK"),

        table(
            ["Component", "Full Form", "Purpose"],
            [
                ["JVM", "Java Virtual Machine", "Executes bytecode"],
                ["JRE", "Java Runtime Environment", "JVM + libraries to run apps"],
                ["JDK", "Java Development Kit", "JRE + tools to develop apps"],
            ]
        ),

        text(
            "Relationship: JDK ⊃ JRE ⊃ JVM"
        ),

        heading("How Java Works"),

        steps([
            "Write source code in .java file.",
            "Compile using javac to create .class file (bytecode).",
            "JVM loads and executes bytecode.",
            "JIT compiler converts bytecode to machine code.",
            "Program executes on any platform with JVM.",
        ]),

        heading("First Java Program"),

        code(
            `// File: HelloWorld.java

public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
            "java",
            "Hello World program"
        ),

        heading("Compile and Run"),

        code(
            `# Compile
javac HelloWorld.java

# Run
java HelloWorld

# Output:
# Hello, World!`,
            "bash",
            "Compilation and execution"
        ),

        heading("Program Structure Explanation"),

        list([
            "public — Access modifier, class is accessible everywhere.",
            "class HelloWorld — Class declaration.",
            "public static void main — Entry point of program.",
            "String[] args — Command line arguments.",
            "System.out.println() — Prints to console.",
        ]),

        heading("Java Keywords"),

        text(
            "Java has 50+ reserved keywords like: class, public, private, static, void, int, if, else, for, while, return, new, this, super, extends, implements, try, catch, finally, throw, throws, package, import."
        ),

        heading("Java Naming Conventions"),

        table(
            ["Type", "Convention", "Example"],
            [
                ["Class", "PascalCase", "StudentDetails"],
                ["Method", "camelCase", "calculateTotal()"],
                ["Variable", "camelCase", "studentName"],
                ["Constant", "UPPERCASE_UNDERSCORE", "MAX_SIZE"],
                ["Package", "lowercase", "com.example.util"],
            ]
        ),

        note(
            "Java is one of the most popular programming languages in the world. It powers billions of devices from Android smartphones to enterprise servers, and understanding OOP is essential for modern software development.",
            "tip",
            "Why Java?"
        ),

        keyPoints([
            "OOP focuses on objects containing data and methods.",
            "Four pillars: Encapsulation, Inheritance, Polymorphism, Abstraction.",
            "Java is platform-independent through JVM.",
            "JDK contains JRE which contains JVM.",
            "Java uses .java source files compiled to .class bytecode.",
        ]),
    ],

    {
        summary:
            "Introduction to Object-Oriented Programming principles and Java language fundamentals including JVM architecture.",
        minutes: 12,
        tags: ["oop", "java", "jvm", "introduction", "important"],

        mcqs: [
            mcq(
                "Java is developed by:",
                ["Microsoft", "Sun Microsystems", "Apple", "Google"],
                1,
                "Java was developed by Sun Microsystems in 1995."
            ),
            mcq(
                "Which is NOT a pillar of OOP?",
                ["Encapsulation", "Inheritance", "Compilation", "Polymorphism"],
                2,
                "Compilation is not an OOP pillar. Abstraction is."
            ),
            mcq(
                "JDK contains:",
                ["Only JVM", "JRE and JVM", "JRE + development tools", "Only compiler"],
                2,
                "JDK contains JRE plus development tools."
            ),
            mcq(
                "Java's tagline is:",
                ["Fast Everywhere", "Write Once Run Anywhere", "Universal Code", "Portable Programs"],
                1,
                "Java's tagline is WORA (Write Once, Run Anywhere)."
            ),
        ],

        questions: [
            qa(
                "Explain OOP and its main concepts.",
                "Object-Oriented Programming (OOP) is a programming paradigm based on 'objects' that contain data (attributes) and code (methods). OOP models real-world entities as software objects. The four main concepts are: (1) Encapsulation — wrapping data and methods together in a single unit (class), hiding internal details; (2) Inheritance — deriving new classes from existing ones, promoting code reusability; (3) Polymorphism — same interface with different behavior, allowing methods to have multiple forms; (4) Abstraction — hiding complex implementation details and showing only essential features. OOP offers benefits like code reusability, data security, easier maintenance, and better real-world modeling compared to procedural programming.",
                4
            ),
            qa(
                "Differentiate between JDK, JRE and JVM.",
                "JDK, JRE and JVM are three fundamental components of Java. JVM (Java Virtual Machine) is an abstract machine that executes Java bytecode. It is platform-dependent but provides platform-independent execution of Java programs. JRE (Java Runtime Environment) is the software environment required to run Java applications. It contains the JVM plus core libraries and other files needed for execution. JDK (Java Development Kit) is the complete development environment for building Java applications. It contains the JRE plus development tools like compiler (javac), debugger (jdb), archiver (jar), and documentation tools. The relationship is: JDK ⊃ JRE ⊃ JVM. Developers need JDK, but end-users only need JRE to run Java programs.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — Java Data Types, Variables and Operators
========================================================= */

const javaDataTypes = createTopic(
    "java-data-types-and-operators",
    "Java Data Types, Variables and Operators",

    [
        heading("Java Data Types"),

        text(
            "Java data types are divided into two categories: Primitive and Non-Primitive (Reference) types."
        ),

        heading("Primitive Data Types"),

        table(
            ["Type", "Size", "Range", "Default"],
            [
                ["byte", "1 byte", "-128 to 127", "0"],
                ["short", "2 bytes", "-32,768 to 32,767", "0"],
                ["int", "4 bytes", "-2³¹ to 2³¹-1", "0"],
                ["long", "8 bytes", "-2⁶³ to 2⁶³-1", "0L"],
                ["float", "4 bytes", "±3.4×10³⁸", "0.0f"],
                ["double", "8 bytes", "±1.7×10³⁰⁸", "0.0d"],
                ["char", "2 bytes", "0 to 65,535 (Unicode)", "'\\u0000'"],
                ["boolean", "1 bit", "true or false", "false"],
            ]
        ),

        heading("Non-Primitive Data Types"),

        list([
            "String — Sequence of characters.",
            "Arrays — Collection of similar elements.",
            "Classes — Blueprint for objects.",
            "Interfaces — Abstract types.",
            "Objects — Instances of classes.",
        ]),

        heading("Variables in Java"),

        definition(
            "Variable",
            "A variable is a named memory location used to store data that can change during program execution."
        ),

        heading("Variable Declaration"),

        code(
            `// Syntax: dataType variableName = value;

int age = 20;
double salary = 50000.50;
char grade = 'A';
boolean isActive = true;
String name = "Amit";

// Multiple declaration
int x = 10, y = 20, z = 30;

// Constants
final double PI = 3.14159;`,
            "java",
            "Variable declaration"
        ),

        heading("Types of Variables"),

        table(
            ["Type", "Description", "Where Declared"],
            [
                ["Local", "Inside method or block", "Inside method"],
                ["Instance", "Inside class, outside methods", "Inside class"],
                ["Static", "Class-level variables", "Inside class with static"],
            ]
        ),

        code(
            `public class Student {
    // Instance variable
    int rollNo;
    String name;
    
    // Static variable (class variable)
    static String college = "ABC College";
    
    void display() {
        // Local variable
        int marks = 90;
        System.out.println(marks);
    }
}`,
            "java",
            "Variable types example"
        ),

        heading("Type Casting"),

        definition(
            "Type Casting",
            "Type casting is the process of converting one data type to another. Java supports two types: implicit (widening) and explicit (narrowing)."
        ),

        heading("Implicit Casting (Widening)"),

        code(
            `// Automatic conversion (small to large)
int num = 100;
long lnum = num;      // int to long
float fnum = lnum;    // long to float
double dnum = fnum;   // float to double

System.out.println(dnum);  // 100.0`,
            "java",
            "Widening conversion"
        ),

        heading("Explicit Casting (Narrowing)"),

        code(
            `// Manual conversion (large to small)
double d = 100.99;
int i = (int) d;     // double to int (data loss)

System.out.println(i);  // 100`,
            "java",
            "Narrowing conversion"
        ),

        heading("Operators in Java"),

        heading("Arithmetic Operators"),

        table(
            ["Operator", "Description", "Example"],
            [
                ["+", "Addition", "a + b"],
                ["-", "Subtraction", "a - b"],
                ["*", "Multiplication", "a * b"],
                ["/", "Division", "a / b"],
                ["%", "Modulus (remainder)", "a % b"],
            ]
        ),

        heading("Assignment Operators"),

        table(
            ["Operator", "Example", "Same As"],
            [
                ["=", "a = 5", "a = 5"],
                ["+=", "a += 5", "a = a + 5"],
                ["-=", "a -= 5", "a = a - 5"],
                ["*=", "a *= 5", "a = a * 5"],
                ["/=", "a /= 5", "a = a / 5"],
                ["%=", "a %= 5", "a = a % 5"],
            ]
        ),

        heading("Comparison Operators"),

        table(
            ["Operator", "Description"],
            [
                ["==", "Equal to"],
                ["!=", "Not equal to"],
                [">", "Greater than"],
                ["<", "Less than"],
                [">=", "Greater than or equal to"],
                ["<=", "Less than or equal to"],
            ]
        ),

        heading("Logical Operators"),

        table(
            ["Operator", "Description", "Example"],
            [
                ["&&", "Logical AND", "a && b"],
                ["||", "Logical OR", "a || b"],
                ["!", "Logical NOT", "!a"],
            ]
        ),

        heading("Bitwise Operators"),

        table(
            ["Operator", "Description"],
            [
                ["&", "Bitwise AND"],
                ["|", "Bitwise OR"],
                ["^", "Bitwise XOR"],
                ["~", "Bitwise Complement"],
                ["<<", "Left Shift"],
                [">>", "Right Shift"],
                [">>>", "Unsigned Right Shift"],
            ]
        ),

        heading("Unary Operators"),

        code(
            `int x = 5;

x++;    // Post-increment: x = 6
++x;    // Pre-increment: x = 7
x--;    // Post-decrement: x = 6
--x;    // Pre-decrement: x = 5

int y = -x;   // Unary minus`,
            "java",
            "Unary operators"
        ),

        heading("Ternary Operator"),

        code(
            `int age = 20;
String status = (age >= 18) ? "Adult" : "Minor";
System.out.println(status);  // Adult`,
            "java",
            "Ternary operator"
        ),

        heading("Control Statements"),

        heading("If-Else Statement"),

        code(
            `int marks = 85;

if (marks >= 90) {
    System.out.println("Grade A");
} else if (marks >= 75) {
    System.out.println("Grade B");
} else if (marks >= 60) {
    System.out.println("Grade C");
} else {
    System.out.println("Fail");
}`,
            "java",
            "If-else example"
        ),

        heading("Switch Statement"),

        code(
            `int day = 3;

switch (day) {
    case 1:
        System.out.println("Monday");
        break;
    case 2:
        System.out.println("Tuesday");
        break;
    case 3:
        System.out.println("Wednesday");
        break;
    default:
        System.out.println("Invalid day");
}`,
            "java",
            "Switch example"
        ),

        heading("Loops in Java"),

        heading("For Loop"),

        code(
            `// Print 1 to 5
for (int i = 1; i <= 5; i++) {
    System.out.println(i);
}

// Enhanced for-each loop
int[] numbers = {10, 20, 30, 40};
for (int num : numbers) {
    System.out.println(num);
}`,
            "java",
            "For loop"
        ),

        heading("While Loop"),

        code(
            `int i = 1;
while (i <= 5) {
    System.out.println(i);
    i++;
}`,
            "java",
            "While loop"
        ),

        heading("Do-While Loop"),

        code(
            `int i = 1;
do {
    System.out.println(i);
    i++;
} while (i <= 5);`,
            "java",
            "Do-while loop"
        ),

        heading("Break and Continue"),

        code(
            `// break - exits loop
for (int i = 1; i <= 10; i++) {
    if (i == 5) break;
    System.out.println(i);  // 1 2 3 4
}

// continue - skips iteration
for (int i = 1; i <= 5; i++) {
    if (i == 3) continue;
    System.out.println(i);  // 1 2 4 5
}`,
            "java",
            "break and continue"
        ),

        note(
            "In Java, always use meaningful variable names, follow naming conventions, and prefer 'int' over 'long' unless you need larger values. Use 'final' for constants.",
            "tip",
            "Best Practice"
        ),

        keyPoints([
            "Java has 8 primitive types and non-primitive types.",
            "Variables can be local, instance or static.",
            "Type casting can be implicit or explicit.",
            "Java has arithmetic, logical, bitwise operators.",
            "Control statements include if-else, switch and loops.",
        ]),
    ],

    {
        summary:
            "Learn Java data types, variables, type casting, operators and control flow statements with examples.",
        minutes: 13,
        tags: ["java", "datatypes", "operators", "loops", "important"],

        mcqs: [
            mcq(
                "Size of int in Java is:",
                ["2 bytes", "4 bytes", "8 bytes", "1 byte"],
                1,
                "int in Java is 4 bytes (32 bits)."
            ),
            mcq(
                "Which is NOT a primitive type in Java?",
                ["int", "String", "boolean", "double"],
                1,
                "String is a non-primitive (reference) type."
            ),
            mcq(
                "Ternary operator uses:",
                ["?", "?:", "!", "=="],
                1,
                "Ternary operator uses ? and :"
            ),
            mcq(
                "final keyword makes a variable:",
                ["Public", "Static", "Constant", "Private"],
                2,
                "final makes a variable constant (cannot be changed)."
            ),
        ],

        questions: [
            qa(
                "Explain primitive data types in Java with their sizes.",
                "Java has 8 primitive data types divided into four categories: (1) Integer types — byte (1 byte, -128 to 127), short (2 bytes, -32,768 to 32,767), int (4 bytes, -2³¹ to 2³¹-1) and long (8 bytes, -2⁶³ to 2⁶³-1); (2) Floating-point types — float (4 bytes, single precision) and double (8 bytes, double precision); (3) Character type — char (2 bytes, Unicode character); (4) Boolean type — boolean (1 bit, true or false). Primitive types are stored directly in memory (stack) and are more efficient than reference types. Java's fixed size for primitive types ensures platform independence — an int is always 4 bytes regardless of the operating system.",
                4
            ),
            qa(
                "Explain type casting in Java with examples.",
                "Type casting in Java is the process of converting one data type to another. There are two types: (1) Implicit Casting (Widening) — automatically done by Java when converting from smaller to larger data type. No data loss occurs. Order: byte → short → int → long → float → double. Example: int num = 100; double d = num; // Automatic conversion. (2) Explicit Casting (Narrowing) — manually done by programmer when converting from larger to smaller data type. May cause data loss. Syntax uses (dataType) before value. Example: double d = 100.99; int i = (int) d; // i = 100, decimal lost. Type casting is important when working with different data types or when receiving values from user input.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — Classes and Objects
========================================================= */

const classesObjects = createTopic(
    "classes-and-objects",
    "Classes and Objects",

    [
        definition(
            "Class",
            "A class is a blueprint or template for creating objects. It defines the properties (data) and behaviors (methods) that objects of the class will have."
        ),

        definition(
            "Object",
            "An object is an instance of a class. It has state (values of attributes) and behavior (methods)."
        ),

        heading("Class Syntax"),

        code(
            `class ClassName {
    // Fields (attributes)
    dataType field1;
    dataType field2;
    
    // Methods (behaviors)
    returnType methodName(parameters) {
        // method body
    }
}`,
            "java",
            "Class syntax"
        ),

        heading("Simple Class Example"),

        code(
            `class Student {
    // Fields
    int rollNo;
    String name;
    double marks;
    
    // Method
    void display() {
        System.out.println("Roll No: " + rollNo);
        System.out.println("Name: " + name);
        System.out.println("Marks: " + marks);
    }
}

public class Main {
    public static void main(String[] args) {
        // Create object
        Student s1 = new Student();
        
        // Access fields
        s1.rollNo = 101;
        s1.name = "Amit";
        s1.marks = 85.5;
        
        // Call method
        s1.display();
    }
}`,
            "java",
            "Class and object example"
        ),

        heading("Creating Objects"),

        text(
            "Objects are created using the 'new' keyword which allocates memory for the object."
        ),

        code(
            `// Syntax: ClassName objectName = new ClassName();

Student s1 = new Student();  // Object creation
Student s2 = new Student();  // Another object`,
            "java",
            "Object creation"
        ),

        heading("Methods in Java"),

        definition(
            "Method",
            "A method is a block of code that performs a specific task. Methods provide the behavior of objects."
        ),

        heading("Method Syntax"),

        code(
            `accessModifier returnType methodName(parameters) {
    // method body
    return value;  // if returnType is not void
}`,
            "java",
            "Method syntax"
        ),

        heading("Types of Methods"),

        table(
            ["Type", "Description"],
            [
                ["Instance Method", "Called on object; can access instance data"],
                ["Static Method", "Called on class; cannot access instance data"],
                ["Void Method", "Doesn't return value"],
                ["Return Method", "Returns a value"],
                ["Parameterized", "Takes parameters"],
                ["Non-parameterized", "No parameters"],
            ]
        ),

        heading("Method Examples"),

        code(
            `class Calculator {
    // Void method with parameters
    void greet(String name) {
        System.out.println("Hello, " + name);
    }
    
    // Method with return type
    int add(int a, int b) {
        return a + b;
    }
    
    // Static method
    static int square(int n) {
        return n * n;
    }
}

public class Main {
    public static void main(String[] args) {
        Calculator calc = new Calculator();
        
        calc.greet("Amit");           // Instance method call
        int sum = calc.add(10, 20);   // Returns 30
        System.out.println(sum);
        
        int sq = Calculator.square(5);  // Static method call
        System.out.println(sq);          // 25
    }
}`,
            "java",
            "Method examples"
        ),

        heading("Method Overloading"),

        definition(
            "Method Overloading",
            "Method overloading allows multiple methods with the same name in a class, but with different parameters (number, type or order)."
        ),

        code(
            `class Calculator {
    // Method 1: Two int parameters
    int add(int a, int b) {
        return a + b;
    }
    
    // Method 2: Three int parameters
    int add(int a, int b, int c) {
        return a + b + c;
    }
    
    // Method 3: Two double parameters
    double add(double a, double b) {
        return a + b;
    }
}

public class Main {
    public static void main(String[] args) {
        Calculator c = new Calculator();
        System.out.println(c.add(10, 20),;         // 30
        System.out.println(c.add(10, 20, 30),;     // 60
        System.out.println(c.add(10.5, 20.7),;     // 31.2
    }
}`,
            "java",
            "Method overloading"
        ),

        heading("Constructors"),

        definition(
            "Constructor",
            "A constructor is a special method that is automatically called when an object is created. It initializes the object's state."
        ),

        heading("Constructor Rules"),

        list([
            "Constructor name must be same as class name.",
            "No return type (not even void).",
            "Called automatically when object is created.",
            "Can be overloaded like methods.",
            "If not defined, Java provides default constructor.",
        ]),

        heading("Types of Constructors"),

        table(
            ["Type", "Description"],
            [
                ["Default", "Provided by Java if none defined"],
                ["No-argument", "User-defined without parameters"],
                ["Parameterized", "Takes parameters to initialize"],
                ["Copy", "Creates object from another object"],
            ]
        ),

        heading("Constructor Examples"),

        code(
            `class Student {
    int rollNo;
    String name;
    
    // Default (no-argument) constructor
    Student() {
        rollNo = 0;
        name = "Unknown";
    }
    
    // Parameterized constructor
    Student(int r, String n) {
        rollNo = r;
        name = n;
    }
    
    // Copy constructor
    Student(Student s) {
        rollNo = s.rollNo;
        name = s.name;
    }
    
    void display() {
        System.out.println(rollNo + " - " + name);
    }
}

public class Main {
    public static void main(String[] args) {
        Student s1 = new Student();              // Default
        Student s2 = new Student(101, "Amit");   // Parameterized
        Student s3 = new Student(s2);            // Copy
        
        s1.display();  // 0 - Unknown
        s2.display();  // 101 - Amit
        s3.display();  // 101 - Amit
    }
}`,
            "java",
            "Constructor types"
        ),

        heading("Constructor Overloading"),

        text(
            "Like methods, constructors can also be overloaded by having different parameter lists."
        ),

        heading("this Keyword"),

        definition(
            "this",
            "The 'this' keyword refers to the current object. It is used to distinguish between instance variables and parameters with the same name."
        ),

        code(
            `class Student {
    int rollNo;
    String name;
    
    Student(int rollNo, String name) {
        this.rollNo = rollNo;  // this.rollNo refers to instance variable
        this.name = name;      // rollNo refers to parameter
    }
    
    void display() {
        System.out.println(this.rollNo + " - " + this.name);
    }
}`,
            "java",
            "this keyword"
        ),

        heading("Uses of this Keyword"),

        list([
            "Refer to instance variables.",
            "Invoke current class method.",
            "Invoke current class constructor: this()",
            "Pass current object as parameter.",
            "Return current class instance.",
        ]),

        heading("static Keyword"),

        definition(
            "static",
            "The 'static' keyword is used for class-level members. Static variables and methods belong to the class, not to any specific object."
        ),

        heading("Static Variables"),

        code(
            `class Student {
    int rollNo;
    String name;
    static String college = "ABC College";  // Shared by all objects
    static int count = 0;
    
    Student(int r, String n) {
        rollNo = r;
        name = n;
        count++;  // Increment for each object
    }
    
    void display() {
        System.out.println(rollNo + " " + name + " " + college);
    }
}

public class Main {
    public static void main(String[] args) {
        Student s1 = new Student(1, "Amit");
        Student s2 = new Student(2, "Riya");
        
        s1.display();
        s2.display();
        
        System.out.println("Total students: " + Student.count);
    }
}`,
            "java",
            "Static variables"
        ),

        heading("Static Methods"),

        code(
            `class MathHelper {
    // Static method
    static int square(int n) {
        return n * n;
    }
    
    static int cube(int n) {
        return n * n * n;
    }
}

public class Main {
    public static void main(String[] args) {
        // Called on class, not object
        System.out.println(MathHelper.square(5),;  // 25
        System.out.println(MathHelper.cube(3),;    // 27
    }
}`,
            "java",
            "Static methods"
        ),

        heading("Instance vs Static Members"),

        table(
            ["Basis", "Instance", "Static"],
            [
                ["Association", "Belongs to object", "Belongs to class"],
                ["Memory", "Separate for each object", "One copy shared"],
                ["Access", "Through object", "Through class name"],
                ["Keyword", "None", "static"],
                ["Example", "obj.method()", "ClassName.method()"],
            ]
        ),

        note(
            "The main() method in Java is always static because it needs to be called by JVM without creating an object of the class.",
            "tip",
            "Why main is static"
        ),

        keyPoints([
            "Class is a blueprint; object is an instance.",
            "Methods provide behavior; can be overloaded.",
            "Constructors initialize objects; have same name as class.",
            "this keyword refers to current object.",
            "static members belong to class, not object.",
        ]),
    ],

    {
        summary:
            "Learn classes, objects, methods, constructors, method overloading and static members in Java.",
        minutes: 14,
        tags: ["class", "object", "method", "constructor", "static", "important"],

        mcqs: [
            mcq(
                "Which keyword creates an object?",
                ["class", "new", "this", "static"],
                1,
                "The 'new' keyword creates objects."
            ),
            mcq(
                "Constructor has:",
                ["void return type", "No return type", "int return type", "String return type"],
                1,
                "Constructors have no return type."
            ),
            mcq(
                "Method overloading is based on:",
                ["Method name", "Parameters", "Return type", "Access modifier"],
                1,
                "Overloading is based on different parameter lists."
            ),
            mcq(
                "Static members belong to:",
                ["Object", "Class", "Method", "Package"],
                1,
                "Static members belong to the class, not object."
            ),
        ],

        questions: [
            qa(
                "What is a class and object? Explain with example.",
                "A class is a blueprint or template for creating objects. It defines properties (fields/attributes) and behaviors (methods) that objects will have. An object is an instance of a class with actual values for the attributes. Example: class Student { int rollNo; String name; void display() { System.out.println(rollNo + ' ' + name); } } Here Student is a class defining what a student has (rollNo, name) and can do (display). To create objects: Student s1 = new Student(); s1.rollNo = 101; s1.name = 'Amit'; s1.display(); The 'new' keyword allocates memory and creates the object. Multiple objects can be created from same class, each with own values. Classes model real-world entities in software.",
                4
            ),
            qa(
                "Explain constructor and its types with example.",
                "A constructor is a special method automatically called when an object is created. Its name must match the class name and it has no return type. Constructors initialize object state. Types: (1) Default constructor — provided by Java if none defined; (2) No-argument constructor — user-defined without parameters; (3) Parameterized constructor — takes parameters to initialize fields; (4) Copy constructor — creates object from another object. Example: class Student { int id; String name; Student() { id=0; name='Unknown'; } Student(int i, String n) { this.id=i; this.name=n; } Student(Student s) { this.id=s.id; this.name=s.name; } } Constructors can be overloaded like methods. They ensure objects are properly initialized before use.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — Encapsulation and Access Modifiers
========================================================= */

const encapsulation = createTopic(
    "encapsulation-and-access-modifiers",
    "Encapsulation and Access Modifiers",

    [
        definition(
            "Encapsulation",
            "Encapsulation is the OOP principle of wrapping data (variables) and methods together in a single unit (class) and restricting direct access to some components. It provides data hiding and controlled access."
        ),

        heading("Benefits of Encapsulation"),

        list([
            "Data hiding — protect data from unauthorized access.",
            "Control over data — validate before setting.",
            "Increased flexibility — change implementation without affecting users.",
            "Better maintainability.",
            "Improved security.",
            "Modular code.",
        ]),

        heading("Access Modifiers"),

        definition(
            "Access Modifier",
            "Access modifiers are keywords used to set the accessibility (scope) of classes, methods, constructors and variables."
        ),

        heading("Types of Access Modifiers"),

        table(
            ["Modifier", "Class", "Package", "Subclass", "World"],
            [
                ["private", "✓", "✗", "✗", "✗"],
                ["default", "✓", "✓", "✗", "✗"],
                ["protected", "✓", "✓", "✓", "✗"],
                ["public", "✓", "✓", "✓", "✓"],
            ]
        ),

        heading("private Access Modifier"),

        text(
            "The private modifier makes members accessible only within the same class."
        ),

        code(
            `class Student {
    private int rollNo;
    private String name;
    
    // Access via public methods
    public void setRollNo(int rollNo) {
        this.rollNo = rollNo;
    }
    
    public int getRollNo() {
        return rollNo;
    }
}

public class Main {
    public static void main(String[] args) {
        Student s = new Student();
        // s.rollNo = 101;  // ERROR: private field
        s.setRollNo(101);   // OK: through method
        System.out.println(s.getRollNo(),;
    }
}`,
            "java",
            "private modifier"
        ),

        heading("default (Package-Private)"),

        text(
            "If no modifier is specified, it is default. Accessible only within the same package."
        ),

        code(
            `class Employee {  // No modifier = default
    String name;  // default access
    
    void display() {  // default method
        System.out.println(name);
    }
}`,
            "java",
            "Default access"
        ),

        heading("protected Access Modifier"),

        text(
            "protected members are accessible within the same package and by subclasses (even in different packages)."
        ),

        code(
            `class Animal {
    protected String name;
    
    protected void eat() {
        System.out.println(name + " is eating");
    }
}

class Dog extends Animal {
    void display() {
        name = "Buddy";   // Accessible in subclass
        eat();            // Accessible in subclass
    }
}`,
            "java",
            "protected modifier"
        ),

        heading("public Access Modifier"),

        text(
            "public members are accessible from anywhere in the program."
        ),

        code(
            `public class Calculator {
    public int result;
    
    public int add(int a, int b) {
        return a + b;
    }
}

// Accessible from any class
Calculator c = new Calculator();
c.result = 10;`,
            "java",
            "public modifier"
        ),

        heading("Implementing Encapsulation"),

        text(
            "Encapsulation is implemented by: (1) declaring fields as private, (2) providing public getter and setter methods to access them."
        ),

        code(
            `public class BankAccount {
    // Private fields
    private String accountNumber;
    private String holderName;
    private double balance;
    
    // Constructor
    public BankAccount(String accNo, String name, double bal) {
        this.accountNumber = accNo;
        this.holderName = name;
        this.balance = bal;
    }
    
    // Getters
    public String getAccountNumber() {
        return accountNumber;
    }
    
    public String getHolderName() {
        return holderName;
    }
    
    public double getBalance() {
        return balance;
    }
    
    // Setters with validation
    public void setHolderName(String name) {
        if (name != null && !name.isEmpty(), {
            this.holderName = name;
        }
    }
    
    // Method to deposit
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        }
    }
    
    // Method to withdraw
    public void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
        } else {
            System.out.println("Invalid amount or insufficient balance");
        }
    }
}

public class Main {
    public static void main(String[] args) {
        BankAccount acc = new BankAccount("ACC001", "Amit", 5000);
        
        acc.deposit(2000);
        System.out.println("Balance: " + acc.getBalance(),;  // 7000
        
        acc.withdraw(3000);
        System.out.println("Balance: " + acc.getBalance(),;  // 4000
        
        acc.withdraw(10000);  // Invalid
    }
}`,
            "java",
            "Encapsulation example"
        ),

        heading("Getter and Setter Methods"),

        table(
            ["Method", "Purpose", "Example"],
            [
                ["Getter", "Retrieve value of private field", "getName()"],
                ["Setter", "Modify value of private field", "setName(name)"],
            ]
        ),

        heading("JavaBeans Convention"),

        list([
            "Class must be serializable.",
            "Has public no-arg constructor.",
            "Private fields.",
            "Public getter and setter methods.",
            "Getters start with 'get' (or 'is' for boolean).",
            "Setters start with 'set'.",
        ]),

        heading("Packages in Java"),

        definition(
            "Package",
            "A package is a namespace that organizes related classes and interfaces. It helps in preventing name conflicts and controlling access."
        ),

        heading("Benefits of Packages"),

        list([
            "Better code organization.",
            "Avoid name conflicts.",
            "Provide access control.",
            "Easier to locate related classes.",
            "Support code reusability.",
        ]),

        heading("Types of Packages"),

        table(
            ["Type", "Description", "Example"],
            [
                ["Built-in", "Predefined Java packages", "java.util, java.io"],
                ["User-defined", "Created by programmer", "com.example.util"],
            ]
        ),

        heading("Common Built-in Packages"),

        table(
            ["Package", "Purpose"],
            [
                ["java.lang", "Fundamental classes (imported by default)"],
                ["java.util", "Collections, dates, etc."],
                ["java.io", "Input/Output operations"],
                ["java.net", "Networking"],
                ["java.awt", "GUI components"],
                ["java.sql", "Database connectivity"],
                ["javax.swing", "Advanced GUI"],
            ]
        ),

        heading("Creating a Package"),

        code(
            `// File: com/example/Student.java
package com.example;

public class Student {
    private String name;
    
    public Student(String name) {
        this.name = name;
    }
    
    public void display() {
        System.out.println("Name: " + name);
    }
}`,
            "java",
            "Creating package"
        ),

        heading("Using a Package"),

        code(
            `// File: Main.java
import com.example.Student;    // Import specific class
// import com.example.*;        // Import all classes

public class Main {
    public static void main(String[] args) {
        Student s = new Student("Amit");
        s.display();
    }
}`,
            "java",
            "Using package"
        ),

        heading("Compile and Run with Package"),

        code(
            `# Compile
javac -d . com/example/Student.java

# Compile main class
javac Main.java

# Run
java Main`,
            "bash",
            "Compilation with packages"
        ),

        heading("Static Import"),

        code(
            `// Import static members
import static java.lang.Math.*;

public class Main {
    public static void main(String[] args) {
        System.out.println(PI);           // Instead of Math.PI
        System.out.println(sqrt(25),;     // Instead of Math.sqrt(25)
    }
}`,
            "java",
            "Static import"
        ),

        note(
            "Always use encapsulation with proper access modifiers. Making fields private and providing controlled access through methods is a fundamental principle of good object-oriented design.",
            "tip",
            "OOP Best Practice"
        ),

        keyPoints([
            "Encapsulation wraps data and methods together.",
            "Access modifiers control visibility.",
            "private → class only, public → everywhere.",
            "Use getters/setters for controlled access.",
            "Packages organize related classes and provide namespaces.",
        ]),
    ],

    {
        summary:
            "Learn encapsulation, access modifiers, getters/setters and packages in Java.",
        minutes: 13,
        tags: ["encapsulation", "access-modifier", "package", "getter-setter", "important"],

        mcqs: [
            mcq(
                "Which modifier gives most restrictive access?",
                ["public", "private", "protected", "default"],
                1,
                "private is most restrictive - class only."
            ),
            mcq(
                "Getters and setters implement:",
                ["Inheritance", "Polymorphism", "Encapsulation", "Abstraction"],
                2,
                "Getters/setters implement encapsulation."
            ),
            mcq(
                "Default access is:",
                ["Same as public", "Same as private", "Package-private", "Same as protected"],
                2,
                "Default is package-private."
            ),
            mcq(
                "Which package is imported by default?",
                ["java.util", "java.lang", "java.io", "java.net"],
                1,
                "java.lang is imported by default."
            ),
        ],

        questions: [
            qa(
                "What is encapsulation? Explain with example.",
                "Encapsulation is the OOP principle of wrapping data (variables) and methods together in a single unit (class), while restricting direct access to some components. It provides data hiding and controlled access. Encapsulation is implemented by: (1) declaring fields as private; (2) providing public getter and setter methods. Example: class BankAccount { private double balance; public double getBalance() { return balance; } public void deposit(double amt) { if(amt > 0) balance += amt; } public void withdraw(double amt) { if(amt > 0 && amt <= balance) balance -= amt; } } Here balance is private (hidden) and can only be modified through methods that validate input. Benefits include: data security, controlled access, validation, easier maintenance, and flexibility to change internal implementation without affecting other classes.",
                4
            ),
            qa(
                "Explain access modifiers in Java.",
                "Access modifiers in Java control the visibility and accessibility of classes, methods, constructors and variables. Java has four access modifiers: (1) private — accessible only within the same class; most restrictive; used for data hiding. (2) default (no modifier) — accessible within the same package (package-private); used when classes work closely together. (3) protected — accessible within same package and by subclasses even in different packages; used for inheritance scenarios. (4) public — accessible from anywhere in the program; least restrictive; used for API methods. Access order from least to most restrictive: public > protected > default > private. Choose the most restrictive access level that meets your needs to promote encapsulation and hide implementation details.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 5 — Arrays and Strings
========================================================= */

const arraysStrings = createTopic(
    "arrays-and-strings",
    "Arrays and Strings",

    [
        heading("Arrays in Java"),

        definition(
            "Array",
            "An array is a container object that holds a fixed number of values of the same data type. Elements are stored in contiguous memory and accessed by index (starting from 0)."
        ),

        heading("Array Features"),

        list([
            "Fixed size (once declared).",
            "Same data type for all elements.",
            "Zero-based indexing.",
            "Stored in contiguous memory.",
            "Fast access using index O(1).",
            "Length property available.",
        ]),

        heading("Array Declaration"),

        code(
            `// Method 1: Declare then initialize
int[] numbers;
numbers = new int[5];

// Method 2: Declare and initialize
int[] marks = new int[5];

// Method 3: Declare with values
int[] scores = {85, 90, 78, 92, 88};

// Method 4: Using new with values
int[] ages = new int[]{20, 21, 22, 23, 24};`,
            "java",
            "Array declaration"
        ),

        heading("Accessing Array Elements"),

        code(
            `int[] arr = {10, 20, 30, 40, 50};

// Access elements
System.out.println(arr[0]);  // 10
System.out.println(arr[2]);  // 30
System.out.println(arr[4]);  // 50

// Modify elements
arr[1] = 25;

// Get length
System.out.println(arr.length);  // 5

// Iterate through array
for (int i = 0; i < arr.length; i++) {
    System.out.println(arr[i]);
}

// Enhanced for loop
for (int num : arr) {
    System.out.println(num);
}`,
            "java",
            "Array operations"
        ),

        heading("Array Operations"),

        heading("Finding Sum and Average"),

        code(
            `int[] marks = {85, 90, 78, 92, 88};
int sum = 0;

for (int mark : marks) {
    sum += mark;
}

double average = (double) sum / marks.length;

System.out.println("Sum: " + sum);            // 433
System.out.println("Average: " + average);    // 86.6`,
            "java",
            "Sum and average"
        ),

        heading("Finding Maximum and Minimum"),

        code(
            `int[] numbers = {23, 45, 12, 67, 34, 89, 15};

int max = numbers[0];
int min = numbers[0];

for (int num : numbers) {
    if (num > max) max = num;
    if (num < min) min = num;
}

System.out.println("Max: " + max);  // 89
System.out.println("Min: " + min);  // 12`,
            "java",
            "Max and min"
        ),

        heading("Searching in Array"),

        code(
            `int[] arr = {10, 20, 30, 40, 50};
int key = 30;
boolean found = false;
int position = -1;

for (int i = 0; i < arr.length; i++) {
    if (arr[i] == key) {
        found = true;
        position = i;
        break;
    }
}

if (found) {
    System.out.println("Found at index: " + position);
} else {
    System.out.println("Not found");
}`,
            "java",
            "Linear search"
        ),

        heading("Two-Dimensional Arrays"),

        definition(
            "2D Array",
            "A 2D array is an array of arrays. It represents a matrix with rows and columns. Elements are accessed using two indices."
        ),

        code(
            `// Declaration
int[][] matrix = new int[3][4];

// Declaration with values
int[][] data = {
    {1, 2, 3, 4},
    {5, 6, 7, 8},
    {9, 10, 11, 12}
};

// Access element
System.out.println(data[1][2]);  // 7

// Iterate 2D array
for (int i = 0; i < data.length; i++) {
    for (int j = 0; j < data[i].length; j++) {
        System.out.print(data[i][j] + " ");
    }
    System.out.println();
}

// Enhanced for loop
for (int[] row : data) {
    for (int val : row) {
        System.out.print(val + " ");
    }
    System.out.println();
}`,
            "java",
            "2D arrays"
        ),

        heading("Array of Objects"),

        code(
            `class Student {
    int rollNo;
    String name;
    
    Student(int r, String n) {
        rollNo = r;
        name = n;
    }
    
    void display() {
        System.out.println(rollNo + " - " + name);
    }
}

public class Main {
    public static void main(String[] args) {
        // Array of Student objects
        Student[] students = new Student[3];
        
        students[0] = new Student(101, "Amit");
        students[1] = new Student(102, "Riya");
        students[2] = new Student(103, "Neha");
        
        for (Student s : students) {
            s.display();
        }
    }
}`,
            "java",
            "Array of objects"
        ),

        heading("Strings in Java"),

        definition(
            "String",
            "A String in Java is a sequence of characters. Unlike primitive types, String is an object of the String class. Strings are immutable in Java."
        ),

        heading("Creating Strings"),

        code(
            `// Method 1: String literal (uses String pool)
String s1 = "Hello";

// Method 2: Using new keyword (creates new object)
String s2 = new String("World");

// Method 3: From char array
char[] chars = {'J', 'a', 'v', 'a'};
String s3 = new String(chars);

System.out.println(s1);  // Hello
System.out.println(s2);  // World
System.out.println(s3);  // Java`,
            "java",
            "String creation"
        ),

        heading("String Immutability"),

        text(
            "Once a String object is created, it cannot be changed. Any modification creates a new String object."
        ),

        code(
            `String s = "Hello";
s.concat(" World");  // Creates new string but doesn't assign
System.out.println(s);  // Hello (unchanged)

s = s.concat(" World");  // Now s is reassigned
System.out.println(s);  // Hello World`,
            "java",
            "String immutability"
        ),

        heading("Common String Methods"),

        table(
            ["Method", "Description", "Example"],
            [
                ["length()", "Returns length", "\"Hello\".length() → 5"],
                ["charAt(i)", "Character at index", "\"Hello\".charAt(1) → 'e'"],
                ["concat()", "Concatenate strings", "\"Hi\".concat(\"!\") → \"Hi!\""],
                ["equals()", "Check equality", "\"a\".equals(\"a\") → true"],
                ["equalsIgnoreCase()", "Ignore case comparison", "true/false"],
                ["compareTo()", "Compare strings", "Returns int"],
                ["toUpperCase()", "Convert to uppercase", "\"hi\" → \"HI\""],
                ["toLowerCase()", "Convert to lowercase", "\"HI\" → \"hi\""],
                ["trim()", "Remove whitespaces", "\" hi \" → \"hi\""],
                ["substring()", "Extract substring", "\"Hello\".substring(1,4) → \"ell\""],
                ["indexOf()", "Find character position", "\"Hello\".indexOf('l') → 2"],
                ["replace()", "Replace characters", "\"abc\".replace('a','x') → \"xbc\""],
                ["split()", "Split into array", "\"a,b,c\".split(\",\") → [\"a\",\"b\",\"c\"]"],
                ["contains()", "Check substring", "\"Hello\".contains(\"ell\") → true"],
            ]
        ),

        heading("String Method Examples"),

        code(
            `String str = "Hello World";

System.out.println(str.length(),;              // 11
System.out.println(str.charAt(0),;             // H
System.out.println(str.toUpperCase(),;         // HELLO WORLD
System.out.println(str.toLowerCase(),;         // hello world
System.out.println(str.substring(6),;          // World
System.out.println(str.substring(0, 5),;       // Hello
System.out.println(str.indexOf('W'),;          // 6
System.out.println(str.replace('l', 'L'),;     // HeLLo WorLd
System.out.println(str.contains("World"),;     // true

String s = "   trim me   ";
System.out.println(s.trim(),;  // "trim me"

String csv = "apple,banana,cherry";
String[] fruits = csv.split(",");
for (String fruit : fruits) {
    System.out.println(fruit);
}`,
            "java",
            "String methods"
        ),

        heading("String Comparison"),

        code(
            `String s1 = "Hello";
String s2 = "Hello";
String s3 = new String("Hello");

// == compares references
System.out.println(s1 == s2);        // true (same object in pool)
System.out.println(s1 == s3);        // false (different objects)

// equals() compares content
System.out.println(s1.equals(s2),;   // true
System.out.println(s1.equals(s3),;   // true

// equalsIgnoreCase()
System.out.println("HI".equalsIgnoreCase("hi"),;  // true`,
            "java",
            "String comparison"
        ),

        heading("StringBuffer and StringBuilder"),

        text(
            "Since String is immutable, use StringBuffer or StringBuilder for mutable strings."
        ),

        table(
            ["Basis", "String", "StringBuffer", "StringBuilder"],
            [
                ["Mutable", "No", "Yes", "Yes"],
                ["Thread-safe", "Yes", "Yes (synchronized)", "No"],
                ["Performance", "Slow for changes", "Slower than SB", "Fastest"],
                ["Use case", "Fixed text", "Multi-threaded", "Single-threaded"],
            ]
        ),

        code(
            `// StringBuilder example
StringBuilder sb = new StringBuilder("Hello");
sb.append(" World");
sb.insert(5, ",");
sb.replace(0, 5, "Hi");
sb.reverse();

System.out.println(sb);  // "dlroW ,iH"
System.out.println(sb.length(),;
System.out.println(sb.capacity(),;`,
            "java",
            "StringBuilder"
        ),

        heading("String Conversion"),

        code(
            `// String to int
String s = "123";
int n = Integer.parseInt(s);

// int to String
int num = 456;
String str = String.valueOf(num);
String str2 = Integer.toString(num);
String str3 = num + "";

// String to double
double d = Double.parseDouble("3.14");

// double to String
String dstr = String.valueOf(3.14);`,
            "java",
            "String conversions"
        ),

        note(
            "In Java, always use .equals() to compare String content and == only to check if two references point to the same object. This is a common source of bugs for beginners.",
            "warning",
            "String Comparison"
        ),

        keyPoints([
            "Arrays have fixed size and same data type elements.",
            "Array indexing starts from 0.",
            "Use .length to get array size.",
            "Strings are immutable objects.",
            "Use .equals() to compare String content.",
            "StringBuilder is faster for string manipulation.",
        ]),
    ],

    {
        summary:
            "Learn arrays, 2D arrays, arrays of objects, Strings, string methods and StringBuilder in Java.",
        minutes: 14,
        tags: ["array", "string", "stringbuilder", "immutable", "important"],

        mcqs: [
            mcq(
                "Array indexing in Java starts from:",
                ["0", "1", "-1", "Depends on size"],
                0,
                "Java array indexing starts from 0."
            ),
            mcq(
                "Which is used to get array length?",
                ["length()", ".length", "size()", "count()"],
                1,
                "Arrays use .length (property, not method)."
            ),
            mcq(
                "String in Java is:",
                ["Mutable", "Immutable", "Primitive", "Volatile"],
                1,
                "Strings are immutable in Java."
            ),
            mcq(
                "Which method compares String content?",
                ["==", "equals()", "compareTo()", "Both B and C"],
                3,
                "Both equals() and compareTo() compare content."
            ),
        ],

        questions: [
            qa(
                "What are arrays? Explain with example.",
                "An array is a container object that holds a fixed number of values of the same data type. Elements are stored in contiguous memory and accessed using indices starting from 0. Arrays are useful when you need to store multiple values of the same type. Declaration: int[] numbers = new int[5]; or int[] marks = {85, 90, 78, 92, 88};. Access: marks[0] returns 85, marks[2] returns 78. Modification: marks[1] = 95. Get length: marks.length returns 5. Iteration: for(int i=0; i<marks.length; i++) or enhanced for-each: for(int m : marks). Arrays are also available as 2D (matrices) using int[][] and can hold objects too. Advantages include fast access (O(1), but limitations include fixed size and same type requirement. For dynamic sizing, use ArrayList.",
                4
            ),
            qa(
                "Explain String and its immutability in Java with example.",
                "A String in Java is a sequence of characters stored as objects of the String class. Strings are immutable — once created, they cannot be modified. Any operation that appears to modify a String actually creates a new String object. Example: String s = 'Hello'; s.concat(' World'); System.out.println(s); // Still prints 'Hello' because concat() returns new String. To get modified version: s = s.concat(' World'). Immutability provides benefits: (1) Security — Strings used in file paths, network connections cannot be tampered with; (2) Thread-safety — multiple threads can share Strings without synchronization; (3) String pool optimization — identical string literals share memory; (4) Hash caching — String's hashCode can be cached. For mutable strings that need frequent modification, use StringBuilder (single-threaded) or StringBuffer (thread-safe).",
                4
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit1Topics = [
    introOOPJava,
    javaDataTypes,
    classesObjects,
    encapsulation,
    arraysStrings,
];
