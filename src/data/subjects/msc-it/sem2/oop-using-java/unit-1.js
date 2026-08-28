/* =========================================================
   MSc-IT • SEM 2 • Object Oriented Programming Using Java
   UNIT 1 — Introduction to Java and its Basic Concepts
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
   TOPIC 1 — History and Features of Java
========================================================= */

const historyAndFeaturesOfJava = createTopic(
    "history-and-features-of-java",
    "History and Features of Java",

    [
        definition(
            "Java",
            "A high-level, class-based, object-oriented programming language designed to have as few implementation dependencies as possible. It follows the principle of 'Write Once, Run Anywhere' (WORA), meaning compiled Java code can run on any platform that supports Java without recompilation."
        ),

        text(
            "Java was developed by James Gosling at Sun Microsystems (now part of Oracle Corporation) and released in 1995. Originally called 'Oak' after an oak tree outside Gosling's office, it was designed for interactive television but was too advanced for that industry. It was later renamed 'Java' (after Java coffee) and repurposed for the emerging World Wide Web."
        ),

        heading("History of Java"),

        table(
            ["Year", "Milestone"],
            [
                ["1991", "James Gosling starts the 'Green Project' at Sun Microsystems"],
                ["1992", "Oak language developed for embedded consumer electronics"],
                ["1994", "Oak renamed to Java; HotJava browser demonstrates web applets"],
                ["1995", "Java 1.0 officially released; Netscape integrates Java support"],
                ["1997", "Java 1.1 introduces inner classes, JavaBeans, JDBC, RMI"],
                ["1998", "J2SE 1.2 (Java 2) — Collections framework, Swing, JIT compiler"],
                ["2004", "J2SE 5.0 — Generics, annotations, autoboxing, enhanced for loop, enums"],
                ["2006", "Java becomes open source under GPL license"],
                ["2011", "Java 7 — try-with-resources, diamond operator, NIO.2"],
                ["2014", "Java 8 — Lambda expressions, Stream API, Optional, new Date/Time API"],
                ["2017", "Java 9 — Module system (Project Jigsaw), JShell REPL"],
                ["2018", "Java 10 — Local variable type inference (var keyword)"],
                ["2018", "Java 11 (LTS) — HTTP Client API, String enhancements"],
                ["2021", "Java 17 (LTS) — Sealed classes, pattern matching, records"],
                ["2023", "Java 21 (LTS) — Virtual threads, pattern matching for switch"],
            ]
        ),

        heading("Key Features of Java"),

        list([
            "Simple — Easy to learn; syntax based on C++ but without complex features like pointers and operator overloading.",
            "Object-Oriented — Everything in Java is an object (except primitive types). Supports encapsulation, inheritance, polymorphism and abstraction.",
            "Platform Independent — Compiled to bytecode that runs on any platform with a JVM (Write Once, Run Anywhere).",
            "Secure — No explicit pointers, runs inside a sandbox (JVM), bytecode verification, security manager.",
            "Robust — Strong memory management, automatic garbage collection, exception handling, strong type checking.",
            "Multithreaded — Built-in support for concurrent programming with threads.",
            "Distributed — Designed for distributed environments with RMI, sockets and HTTP support.",
            "High Performance — Just-In-Time (JIT) compiler converts bytecode to native machine code at runtime.",
            "Dynamic — Supports dynamic loading of classes, reflection and runtime type information.",
            "Architecture Neutral — Bytecode is not dependent on any specific hardware architecture.",
        ]),

        heading("Java versus C++"),

        table(
            ["Aspect", "Java", "C++"],
            [
                ["Platform", "Platform independent (bytecode + JVM)", "Platform dependent (compiled to machine code)"],
                ["Pointers", "No explicit pointers", "Full pointer support"],
                ["Memory Management", "Automatic garbage collection", "Manual (new/delete)"],
                ["Multiple Inheritance", "Not supported for classes (interfaces only)", "Supported"],
                ["Operator Overloading", "Not supported", "Supported"],
                ["Header Files", "No header files", "Uses header files"],
                ["Goto Statement", "Not supported", "Supported"],
                ["Compilation", "Compiled to bytecode, interpreted/JIT by JVM", "Compiled directly to machine code"],
                ["Performance", "Slightly slower (JVM overhead)", "Faster (native code)"],
                ["Use Case", "Enterprise, Android, web, cloud", "Systems, games, embedded, performance-critical"],
            ]
        ),

        heading("Java Editions"),

        table(
            ["Edition", "Full Name", "Purpose"],
            [
                ["Java SE", "Standard Edition", "Core Java for desktop and standalone applications"],
                ["Java EE (Jakarta EE)", "Enterprise Edition", "Server-side, web and enterprise applications"],
                ["Java ME", "Micro Edition", "Embedded and mobile devices (largely replaced by Android)"],
            ]
        ),

        note(
            "Java 8 was a landmark release that introduced lambda expressions and the Stream API, fundamentally changing how Java developers write code. Java 17 and Java 21 are Long-Term Support (LTS) releases recommended for production use.",
            "tip",
            "Important Versions"
        ),

        keyPoints([
            "Java was created by James Gosling at Sun Microsystems and released in 1995.",
            "Java follows 'Write Once, Run Anywhere' through bytecode and the JVM.",
            "Key features include OOP, platform independence, security, robustness and multithreading.",
            "Java differs from C++ by having no pointers, automatic garbage collection and no multiple class inheritance.",
            "Java 8 introduced lambda expressions; Java 17 and 21 are current LTS releases.",
        ]),
    ],

    {
        summary:
            "Understand Java's history, key features, comparison with C++ and the different Java editions.",
        minutes: 11,
        tags: ["java", "introduction", "history", "features", "important"],

        mcqs: [
            mcq(
                "Java was created by:",
                ["Bjarne Stroustrup", "James Gosling", "Guido van Rossum", "Dennis Ritchie"],
                1,
                "James Gosling created Java at Sun Microsystems."
            ),
            mcq(
                "Java was originally called:",
                ["Coffee", "Oak", "Green", "Duke"],
                1,
                "Java was originally named Oak after an oak tree outside Gosling's office."
            ),
            mcq(
                "'Write Once, Run Anywhere' is possible because of:",
                ["Java compiler", "JVM and bytecode", "Java IDE", "Java libraries"],
                1,
                "Java source code is compiled to platform-independent bytecode that runs on any JVM."
            ),
            mcq(
                "Which feature does Java NOT support?",
                ["Multithreading", "Garbage collection", "Multiple inheritance of classes", "Exception handling"],
                2,
                "Java does not support multiple inheritance of classes to avoid the diamond problem."
            ),
            mcq(
                "Java 8 introduced:",
                ["Module system", "Lambda expressions and Stream API", "Virtual threads", "Sealed classes"],
                1,
                "Java 8 (2014) introduced lambda expressions, the Stream API and the Optional class."
            ),
            mcq(
                "Java SE stands for:",
                ["Server Edition", "Standard Edition", "System Edition", "Secure Edition"],
                1,
                "Java SE stands for Java Standard Edition, the core Java platform."
            ),
        ],

        questions: [
            qa(
                "Explain the key features of Java.",
                "Java is simple with syntax based on C++ but without complex features like pointers and operator overloading. It is fully object-oriented, treating everything as an object and supporting encapsulation, inheritance, polymorphism and abstraction. Java is platform independent because source code is compiled to bytecode that runs on any platform with a Java Virtual Machine (JVM), enabling 'Write Once, Run Anywhere'. It is secure because it has no explicit pointers, runs inside a JVM sandbox, performs bytecode verification and has a security manager. Java is robust with automatic garbage collection, strong exception handling and compile-time type checking. It has built-in multithreading support for concurrent programming. Java is distributed, designed for network environments with RMI and socket support. It achieves high performance through Just-In-Time compilation that converts bytecode to native machine code at runtime.",
                5
            ),
            qa(
                "Compare Java and C++.",
                "Java is platform independent because it compiles to bytecode that runs on the JVM, while C++ compiles directly to platform-dependent machine code. Java does not support explicit pointers, eliminating pointer-related bugs and security vulnerabilities that are common in C++. Java has automatic garbage collection for memory management, while C++ requires manual memory management with new and delete operators, risking memory leaks. Java does not support multiple inheritance of classes to avoid the diamond problem, using interfaces instead, while C++ supports multiple inheritance. Java does not support operator overloading or goto statements, both of which are available in C++. Java has no header files, using packages and imports instead. C++ generally offers better raw performance due to direct machine code compilation, while Java has slight overhead from the JVM but offers better portability and safety.",
                5
            ),
            qa(
                "Trace the history of Java from its creation to the present.",
                "Java began in 1991 as the Green Project at Sun Microsystems led by James Gosling, initially developing the Oak language for embedded consumer electronics. In 1994, Oak was renamed Java and repurposed for the World Wide Web, with the HotJava browser demonstrating applets. Java 1.0 was officially released in 1995 and quickly gained popularity when Netscape integrated Java support. Java 2 (1998) introduced the Collections framework, Swing GUI and JIT compiler. Java 5 (2004) was a major release adding generics, annotations, autoboxing and the enhanced for loop. Java became open source in 2006. Java 8 (2014) was a landmark release introducing lambda expressions and the Stream API. Java 9 (2017) added the module system. Java 17 (2021) and Java 21 (2023) are the current Long-Term Support releases, adding sealed classes, pattern matching and virtual threads.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — Java Development Environment
========================================================= */

const javaDevelopmentEnvironment = createTopic(
    "java-development-environment",
    "Java Development Environment (JDK, JRE, JVM)",

    [
        text(
            "To develop and run Java programs, you need to understand three key components: the JDK (Java Development Kit), the JRE (Java Runtime Environment) and the JVM (Java Virtual Machine). These form a layered architecture where each component builds upon the one below it."
        ),

        heading("JDK, JRE and JVM Relationship"),

        code(
            `┌──────────────────────────────────────────┐
  │           JDK (Development Kit)         │
  │  ┌────────────────────────────────────┐ │
  │  │       JRE (Runtime Environment)   │ │
  │  │  ┌──────────────────────────────┐  │ │
  │  │  │   JVM (Virtual Machine)     │  │ │
  │  │  │  ┌────────────────────────┐  │  │ │
  │  │  │  │   Your Java Program   │  │  │ │
  │  │  │  │     (Bytecode)        │  │  │ │
  │  │  │  └────────────────────────┘  │  │ │
  │  │  └──────────────────────────────┘  │ │
  │  │  + Class Libraries (rt.jar)       │ │
  │  └────────────────────────────────────┘ │
  │  + Development Tools                   │
  │    (javac, javadoc, jar, jdb, jshell) │
  └──────────────────────────────────────────┘`,
            "text",
            "JDK, JRE and JVM relationship"
        ),

        heading("JVM (Java Virtual Machine)"),

        definition(
            "JVM",
            "An abstract computing machine that provides a runtime environment for executing Java bytecode. The JVM is platform-dependent — different JVM implementations exist for Windows, macOS, Linux, etc. — but it executes the same platform-independent bytecode on all platforms."
        ),

        heading("JVM Architecture"),

        table(
            ["Component", "Purpose"],
            [
                ["Class Loader", "Loads .class files (bytecode) into memory"],
                ["Method Area", "Stores class structures, method code, static variables"],
                ["Heap", "Runtime data area where objects are allocated; shared by all threads"],
                ["Stack", "Stores local variables, method call frames; one stack per thread"],
                ["PC Register", "Holds the address of the current instruction being executed"],
                ["Native Method Stack", "Supports native (non-Java) methods written in C/C++"],
                ["Execution Engine", "Executes bytecode using interpreter and JIT compiler"],
                ["Garbage Collector", "Automatically reclaims memory from unreachable objects"],
            ]
        ),

        code(
            `JVM Execution Process:

  .java file → [javac compiler] → .class file (bytecode)
                                        ↓
                                   [JVM]
                                   ├── Class Loader loads bytecode
                                   ├── Bytecode Verifier checks safety
                                   ├── Interpreter executes bytecode
                                   │   line by line
                                   └── JIT Compiler converts hot
                                       bytecode to native machine code
                                       for better performance`,
            "text",
            "JVM execution process"
        ),

        heading("JRE (Java Runtime Environment)"),

        definition(
            "JRE",
            "A software package that provides the JVM, core class libraries and other supporting files needed to run Java applications. The JRE does not include development tools like the compiler. Install the JRE if you only need to run Java programs, not develop them."
        ),

        heading("JDK (Java Development Kit)"),

        definition(
            "JDK",
            "A complete software development kit that includes the JRE plus development tools such as the Java compiler (javac), debugger (jdb), documentation generator (javadoc), archiver (jar) and the interactive shell (jshell). Install the JDK if you need to write and compile Java programs."
        ),

        heading("Important JDK Tools"),

        table(
            ["Tool", "Purpose", "Command Example"],
            [
                ["javac", "Java compiler — converts .java to .class (bytecode)", "javac HelloWorld.java"],
                ["java", "Java launcher — runs bytecode on the JVM", "java HelloWorld"],
                ["javadoc", "Generates API documentation from source code comments", "javadoc MyClass.java"],
                ["jar", "Packages classes and resources into a JAR archive", "jar cf myapp.jar *.class"],
                ["jdb", "Java debugger for finding and fixing bugs", "jdb MyClass"],
                ["jshell", "Interactive REPL for quick Java code testing (Java 9+)", "jshell"],
                ["javap", "Disassembles .class files to view bytecode", "javap MyClass"],
            ]
        ),

        heading("Java Compilation and Execution Process"),

        steps([
            "Write the source code in a .java file using a text editor or IDE.",
            "Compile the source code using the javac compiler: javac HelloWorld.java",
            "The compiler produces a .class file containing platform-independent bytecode.",
            "Run the program using the java launcher: java HelloWorld",
            "The JVM loads the bytecode, verifies it, and executes it using the interpreter and/or JIT compiler.",
        ]),

        code(
            `$ javac HelloWorld.java    ← Compiles to HelloWorld.class
  $ java HelloWorld          ← Runs the program on JVM
  Hello, World!`,
            "bash",
            "Compiling and running a Java program"
        ),

        note(
            "The JVM is platform-dependent (you need a different JVM for Windows, Mac and Linux), but the bytecode it executes is platform-independent. This is what makes Java 'Write Once, Run Anywhere'. The same .class file runs on any platform with a compatible JVM.",
            "exam",
            "Frequently Asked"
        ),

        keyPoints([
            "The JVM executes Java bytecode and is platform-dependent; bytecode is platform-independent.",
            "The JRE includes the JVM and class libraries needed to run Java programs.",
            "The JDK includes the JRE plus development tools like javac, jdb and javadoc.",
            "Java source code (.java) is compiled to bytecode (.class) by javac, then executed by the JVM.",
            "The JIT compiler improves performance by converting frequently executed bytecode to native machine code.",
        ]),
    ],

    {
        summary:
            "Understand the JDK, JRE and JVM architecture, their relationship, important tools and the Java compilation-execution process.",
        minutes: 11,
        tags: ["java", "jdk", "jre", "jvm", "bytecode", "important"],

        mcqs: [
            mcq(
                "The JVM is:",
                ["Platform independent", "Platform dependent", "A compiler", "An IDE"],
                1,
                "The JVM is platform-dependent — different implementations exist for each OS — but it executes platform-independent bytecode."
            ),
            mcq(
                "Java bytecode is:",
                ["Machine code for Intel processors", "Platform independent", "Platform dependent", "Source code"],
                1,
                "Java bytecode is platform-independent and can run on any JVM regardless of the underlying OS."
            ),
            mcq(
                "The JDK includes:",
                ["Only the JVM", "JRE plus development tools", "Only the compiler", "Only class libraries"],
                1,
                "The JDK includes the JRE (JVM + libraries) plus development tools like javac, jdb and javadoc."
            ),
            mcq(
                "The javac command is used to:",
                ["Run a Java program", "Compile Java source code to bytecode", "Debug a Java program", "Generate documentation"],
                1,
                "javac is the Java compiler that converts .java source files to .class bytecode files."
            ),
            mcq(
                "The JIT compiler in the JVM:",
                ["Compiles .java files to .class files", "Converts frequently executed bytecode to native machine code at runtime", "Checks bytecode for security", "Loads classes into memory"],
                1,
                "The JIT (Just-In-Time) compiler improves performance by converting hot bytecode to native machine code."
            ),
        ],

        questions: [
            qa(
                "Explain the relationship between JDK, JRE and JVM.",
                "The JVM (Java Virtual Machine) is the innermost component that provides a runtime environment for executing Java bytecode. It includes a class loader, memory areas (heap, stack, method area), an execution engine with interpreter and JIT compiler, and a garbage collector. The JVM is platform-dependent. The JRE (Java Runtime Environment) wraps the JVM and adds the core class libraries and supporting files needed to run Java applications. The JRE is sufficient for running Java programs but not for developing them. The JDK (Java Development Kit) is the outermost layer that includes the entire JRE plus development tools such as the javac compiler, jdb debugger, javadoc documentation generator, jar archiver and jshell REPL. The JDK is required for writing, compiling and debugging Java programs.",
                5
            ),
            qa(
                "Explain the Java compilation and execution process.",
                "The process begins with writing Java source code in a file with the .java extension. The source code is compiled using the javac compiler, which checks for syntax and semantic errors and produces a .class file containing platform-independent bytecode. This bytecode is not native machine code but an intermediate representation that the JVM can understand. To run the program, the java launcher starts the JVM, which loads the .class file using the class loader, verifies the bytecode for safety, and executes it. The execution engine first interprets the bytecode line by line. For frequently executed code (hot spots), the JIT compiler converts the bytecode to native machine code for the specific platform, significantly improving performance. The garbage collector automatically reclaims memory from objects that are no longer referenced.",
                5
            ),
            qa(
                "Why is Java called 'Write Once, Run Anywhere'?",
                "Java is called 'Write Once, Run Anywhere' (WORA) because Java source code is compiled by javac into platform-independent bytecode (.class files) rather than platform-specific machine code. This bytecode is a universal intermediate representation that any Java Virtual Machine (JVM) can understand and execute. While the JVM itself is platform-dependent (different implementations exist for Windows, macOS, Linux, etc.), every JVM can execute the same bytecode. Therefore, a Java program compiled on one platform can be run on any other platform that has a compatible JVM installed, without any need for recompilation. This contrasts with languages like C++ where the compiled machine code is specific to one platform and must be recompiled for each target platform.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — Java Program Structure and Basic Syntax
========================================================= */

const javaProgramStructure = createTopic(
    "java-program-structure-and-basic-syntax",
    "Java Program Structure and Basic Syntax",

    [
        text(
            "Every Java program is organised into classes, and every application must have at least one class with a main method that serves as the entry point. Understanding the basic structure and syntax is essential before diving into object-oriented concepts."
        ),

        heading("First Java Program"),

        code(
            `// HelloWorld.java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
            "java",
            "First Java program"
        ),

        output(
            `Hello, World!`
        ),

        heading("Line-by-Line Explanation"),

        table(
            ["Code", "Meaning"],
            [
                ["public", "Access modifier — the class is accessible from anywhere"],
                ["class", "Keyword to declare a class"],
                ["HelloWorld", "The class name (must match the filename: HelloWorld.java)"],
                ["{", "Opening brace — start of the class body"],
                ["public", "The main method is accessible from outside the class"],
                ["static", "The method belongs to the class, not to an object; can be called without creating an object"],
                ["void", "The method does not return any value"],
                ["main", "The method name; JVM looks for this exact name as the entry point"],
                ["String[] args", "Command-line arguments passed as an array of strings"],
                ["System.out.println()", "Prints text to the console followed by a newline"],
                [";", "Statement terminator — every statement in Java ends with a semicolon"],
                ["}", "Closing brace — end of the method/class body"],
            ]
        ),

        heading("Why public static void main(String[] args)?"),

        table(
            ["Keyword", "Why It's Needed"],
            [
                ["public", "The JVM must be able to call this method from outside the class"],
                ["static", "The JVM calls main before any object is created, so it must be a class method"],
                ["void", "The main method does not return a value to the JVM"],
                ["main", "This is the exact name the JVM searches for as the program entry point"],
                ["String[] args", "Allows passing command-line arguments to the program"],
            ]
        ),

        heading("Java Naming Conventions"),

        table(
            ["Element", "Convention", "Example"],
            [
                ["Class", "PascalCase (first letter of each word capitalised)", "StudentRecord, HelloWorld"],
                ["Method", "camelCase (first word lowercase, subsequent words capitalised)", "calculateTotal, getName"],
                ["Variable", "camelCase", "studentAge, totalMarks"],
                ["Constant", "UPPER_SNAKE_CASE", "MAX_SIZE, PI_VALUE"],
                ["Package", "all lowercase", "com.example.myapp"],
                ["File name", "Must match the public class name exactly", "HelloWorld.java for class HelloWorld"],
            ]
        ),

        heading("Java Tokens"),

        definition(
            "Token",
            "The smallest individual unit in a Java program. Java tokens include keywords, identifiers, literals, operators and separators."
        ),

        table(
            ["Token Type", "Description", "Examples"],
            [
                ["Keywords", "Reserved words with special meaning", "class, public, static, void, if, for, while, int, return"],
                ["Identifiers", "Names given to classes, methods, variables", "myVariable, Student, calculateSum"],
                ["Literals", "Fixed values that appear directly in code", "42, 3.14, 'A', \"Hello\", true, null"],
                ["Operators", "Symbols that perform operations", "+, -, *, /, ==, !=, &&, ||, ="],
                ["Separators", "Symbols that separate code elements", "(, ), {, }, [, ], ;, ,"],
            ]
        ),

        heading("Comments in Java"),

        table(
            ["Type", "Syntax", "Use"],
            [
                ["Single-line", "// comment", "Brief inline comments"],
                ["Multi-line", "/* comment */", "Longer comments spanning multiple lines"],
                ["Documentation", "/** comment */", "Javadoc comments for generating API documentation"],
            ]
        ),

        code(
            `// This is a single-line comment

/* This is a
   multi-line comment */

/**
 * This is a Javadoc comment.
 * @param name The name of the student
 * @return The greeting message
 */
public String greet(String name) {
    return "Hello, " + name;
}`,
            "java",
            "Types of comments in Java"
        ),

        heading("Java Packages and Imports"),

        definition(
            "Package",
            "A namespace that organises related classes and interfaces. Packages prevent naming conflicts and provide access control."
        ),

        code(
            `// Declaring a package
package com.example.student;

// Importing specific class
import java.util.Scanner;

// Importing all classes from a package
import java.util.*;

// Using imported class
Scanner sc = new Scanner(System.in);`,
            "java",
            "Packages and imports"
        ),

        note(
            "The filename must exactly match the public class name, including case. If your class is named HelloWorld, the file must be HelloWorld.java. A Java file can have only one public class.",
            "warning",
            "Important Rule"
        ),

        keyPoints([
            "Every Java application must have a class with a public static void main(String[] args) method.",
            "The main method is static because the JVM calls it before any object is created.",
            "Java follows naming conventions: PascalCase for classes, camelCase for methods and variables.",
            "Java tokens include keywords, identifiers, literals, operators and separators.",
            "The filename must match the public class name exactly.",
        ]),
    ],

    {
        summary:
            "Learn the structure of a Java program, the main method, naming conventions, tokens, comments and packages.",
        minutes: 11,
        tags: ["java", "syntax", "main-method", "tokens", "packages", "important"],

        mcqs: [
            mcq(
                "The entry point of a Java application is:",
                ["public void main()", "public static void main(String[] args)", "static void main()", "public int main()"],
                1,
                "The JVM looks for the exact signature public static void main(String[] args) as the entry point."
            ),
            mcq(
                "The main method is static because:",
                ["It returns no value", "It is called by the JVM before any object is created", "It is public", "It accepts arguments"],
                1,
                "The JVM calls main() without creating an object first, so it must be static (a class method)."
            ),
            mcq(
                "In Java, the filename must:",
                ["Be all lowercase", "Match the public class name exactly", "End with .txt", "Be different from the class name"],
                1,
                "The filename must exactly match the public class name, including case sensitivity."
            ),
            mcq(
                "Which naming convention is used for Java class names?",
                ["camelCase", "PascalCase", "snake_case", "UPPER_CASE"],
                1,
                "Java class names use PascalCase: first letter of each word capitalised (e.g., StudentRecord)."
            ),
            mcq(
                "A Javadoc comment starts with:",
                ["//", "/*", "/**", "#"],
                2,
                "Javadoc comments start with /** and are used to generate API documentation."
            ),
        ],

        questions: [
            qa(
                "Explain the significance of each keyword in 'public static void main(String[] args)'.",
                "The public access modifier means the method is accessible from outside the class, which is necessary because the JVM, which is external to the class, must be able to call it. The static keyword means the method belongs to the class itself rather than to any instance of the class. This is essential because the JVM calls main() before any object of the class is created. The void return type indicates that the method does not return any value to the caller. The name main is the exact method name that the JVM searches for as the program's entry point — any other name would not be recognised. The String[] args parameter is an array of strings that receives command-line arguments passed when the program is launched, allowing the program to accept input from the command line.",
                5
            ),
            qa(
                "Explain Java naming conventions with examples.",
                "Java follows specific naming conventions for different program elements. Class names use PascalCase where the first letter of each word is capitalised, such as StudentRecord or HelloWorld. Method names use camelCase where the first word starts with a lowercase letter and subsequent words are capitalised, such as calculateTotal or getStudentName. Variable names also use camelCase, such as studentAge or totalMarks. Constants use UPPER_SNAKE_CASE with all uppercase letters and underscores separating words, such as MAX_SIZE or PI_VALUE. Package names are all lowercase, such as com.example.myapp. The filename must exactly match the public class name, so a class named HelloWorld must be in a file named HelloWorld.java.",
                5
            ),
            qa(
                "What are Java tokens? Explain the different types.",
                "Tokens are the smallest individual units in a Java program. There are five types. Keywords are reserved words with predefined meanings that cannot be used as identifiers, such as class, public, static, void, if, for, while, int and return. Identifiers are names given by the programmer to classes, methods, variables and other elements, such as myVariable, Student or calculateSum. Literals are fixed values that appear directly in the source code, such as 42 (integer), 3.14 (floating-point), 'A' (character), \"Hello\" (string), true (boolean) and null. Operators are symbols that perform operations on operands, such as +, -, *, /, ==, !=, &&, || and =. Separators are symbols that separate or group code elements, such as parentheses (), braces {}, brackets [], semicolons ; and commas ,.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — Data Types, Variables and Operators in Java
========================================================= */

const dataTypesAndOperators = createTopic(
    "data-types-variables-and-operators-in-java",
    "Data Types, Variables and Operators in Java",

    [
        heading("Java Data Types"),

        text(
            "Java is a strongly typed language, meaning every variable must have a declared type. Java data types are divided into two categories: primitive types (built-in, store simple values) and reference types (store references to objects)."
        ),

        heading("Primitive Data Types"),

        table(
            ["Type", "Size", "Range", "Default Value", "Example"],
            [
                ["byte", "1 byte", "-128 to 127", "0", "byte b = 100;"],
                ["short", "2 bytes", "-32,768 to 32,767", "0", "short s = 10000;"],
                ["int", "4 bytes", "-2³¹ to 2³¹-1", "0", "int age = 22;"],
                ["long", "8 bytes", "-2⁶³ to 2⁶³-1", "0L", "long pop = 7000000000L;"],
                ["float", "4 bytes", "~±3.4 × 10³⁸", "0.0f", "float pi = 3.14f;"],
                ["double", "8 bytes", "~±1.7 × 10³⁰⁸", "0.0d", "double d = 3.14159;"],
                ["char", "2 bytes", "0 to 65,535 (Unicode)", "'\\u0000'", "char grade = 'A';"],
                ["boolean", "1 bit (JVM dependent)", "true or false", "false", "boolean flag = true;"],
            ]
        ),

        heading("Reference Data Types"),

        table(
            ["Type", "Description", "Example"],
            [
                ["String", "Sequence of characters (not a primitive)", "String name = \"Rahul\";"],
                ["Arrays", "Collection of elements of the same type", "int[] marks = {85, 90, 78};"],
                ["Classes", "User-defined types", "Student s = new Student();"],
                ["Interfaces", "Contract that classes implement", "Runnable r = new MyTask();"],
            ]
        ),

        note(
            "String in Java is NOT a primitive type — it is a class (reference type). However, Java provides special syntax for String literals (double quotes) and the + operator for concatenation, making it feel like a primitive.",
            "exam",
            "Frequently Asked"
        ),

        heading("Variables"),

        definition(
            "Variable",
            "A named storage location in memory that holds a value of a specific type. In Java, every variable must be declared with its type before use."
        ),

        code(
            `// Variable declaration and initialisation
int age = 22;
double salary = 50000.50;
boolean isStudent = true;
char grade = 'A';
String name = "Rahul";

// Multiple declarations
int x = 1, y = 2, z = 3;

// Constants (final keyword)
final double PI = 3.14159;
// PI = 3.14;  → ERROR! Cannot modify a final variable

// Type inference (Java 10+)
var count = 10;       // inferred as int
var message = "Hi";   // inferred as String`,
            "java",
            "Variable declarations in Java"
        ),

        heading("Types of Variables"),

        table(
            ["Type", "Declared In", "Scope", "Default Value", "Example"],
            [
                ["Local Variable", "Inside a method", "Method only", "None (must initialise)", "int x = 5; inside a method"],
                ["Instance Variable", "Inside a class, outside methods", "Entire class (per object)", "Default for type", "private int age;"],
                ["Class (Static) Variable", "Inside a class with static keyword", "Entire class (shared)", "Default for type", "static int count = 0;"],
            ]
        ),

        heading("Operators in Java"),

        heading("Arithmetic Operators"),

        table(
            ["Operator", "Name", "Example", "Result"],
            [
                ["+", "Addition", "5 + 3", "8"],
                ["-", "Subtraction", "10 - 4", "6"],
                ["*", "Multiplication", "6 * 7", "42"],
                ["/", "Division", "15 / 4", "3 (integer division)"],
                ["%", "Modulus (remainder)", "15 % 4", "3"],
                ["++", "Increment", "x++ or ++x", "Adds 1"],
                ["--", "Decrement", "x-- or --x", "Subtracts 1"],
            ]
        ),

        heading("Relational and Logical Operators"),

        table(
            ["Operator", "Name", "Example", "Result"],
            [
                ["==", "Equal to", "5 == 5", "true"],
                ["!=", "Not equal to", "5 != 3", "true"],
                [">, <, >=, <=", "Comparison", "10 > 5", "true"],
                ["&&", "Logical AND", "true && false", "false"],
                ["||", "Logical OR", "true || false", "true"],
                ["!", "Logical NOT", "!true", "false"],
            ]
        ),

        heading("Assignment and Bitwise Operators"),

        table(
            ["Operator", "Name", "Example"],
            [
                ["=", "Simple assignment", "x = 10"],
                ["+=, -=, *=, /=, %=", "Compound assignment", "x += 5 (x = x + 5)"],
                ["&", "Bitwise AND", "5 & 3 = 1"],
                ["|", "Bitwise OR", "5 | 3 = 7"],
                ["^", "Bitwise XOR", "5 ^ 3 = 6"],
                ["~", "Bitwise NOT", "~5 = -6"],
                ["<<", "Left shift", "5 << 1 = 10"],
                [">>", "Right shift", "5 >> 1 = 2"],
            ]
        ),

        heading("Ternary Operator"),

        code(
            `// Syntax: condition ? valueIfTrue : valueIfFalse
int age = 22;
String status = (age >= 18) ? "Adult" : "Minor";
System.out.println(status);  // Adult`,
            "java",
            "Ternary operator"
        ),

        heading("Type Casting"),

        table(
            ["Type", "Direction", "Syntax", "Example"],
            [
                ["Widening (Implicit)", "Smaller → Larger type (safe)", "Automatic", "int to double: double d = 5;"],
                ["Narrowing (Explicit)", "Larger → Smaller type (may lose data)", "(type) value", "double to int: int i = (int) 3.14; // i = 3"],
            ]
        ),

        code(
            `// Widening (automatic)
int num = 100;
double d = num;  // 100.0 — no data loss

// Narrowing (explicit cast required)
double pi = 3.14159;
int n = (int) pi;  // 3 — decimal part truncated

// char and int
char ch = 'A';
int ascii = ch;  // 65 (widening)
char back = (char) 66;  // 'B' (narrowing)`,
            "java",
            "Type casting examples"
        ),

        keyPoints([
            "Java has 8 primitive types: byte, short, int, long, float, double, char and boolean.",
            "String is a reference type (class), not a primitive, despite its special syntax.",
            "Variables must be declared with a type; local variables must be initialised before use.",
            "The final keyword makes a variable a constant whose value cannot be changed.",
            "Widening casts are automatic and safe; narrowing casts require explicit syntax and may lose data.",
        ]),
    ],

    {
        summary:
            "Master Java's primitive and reference data types, variable types, operators and type casting.",
        minutes: 12,
        tags: ["java", "data-types", "variables", "operators", "casting", "important"],

        mcqs: [
            mcq(
                "How many primitive data types does Java have?",
                ["4", "6", "8", "10"],
                2,
                "Java has 8 primitive types: byte, short, int, long, float, double, char and boolean."
            ),
            mcq(
                "String in Java is:",
                ["A primitive type", "A reference type (class)", "A keyword", "An operator"],
                1,
                "String is a class (reference type) in Java, not a primitive, despite its special syntax."
            ),
            mcq(
                "What is the result of 15 / 4 in Java?",
                ["3.75", "3", "4", "Error"],
                1,
                "Integer division in Java truncates the decimal part, so 15 / 4 = 3."
            ),
            mcq(
                "The final keyword in Java is used to:",
                ["Declare a method", "Make a variable constant", "End a loop", "Import a package"],
                1,
                "The final keyword makes a variable a constant whose value cannot be changed after initialisation."
            ),
            mcq(
                "Casting a double to an int is an example of:",
                ["Widening cast", "Narrowing cast", "Implicit cast", "Automatic cast"],
                1,
                "Converting from double (8 bytes) to int (4 bytes) is narrowing and requires an explicit cast."
            ),
            mcq(
                "The size of an int in Java is:",
                ["1 byte", "2 bytes", "4 bytes", "8 bytes"],
                2,
                "An int in Java is always 4 bytes (32 bits), regardless of the platform."
            ),
        ],

        questions: [
            qa(
                "List all eight primitive data types in Java with their sizes and ranges.",
                "Java has eight primitive data types. byte is 1 byte with range -128 to 127. short is 2 bytes with range -32,768 to 32,767. int is 4 bytes with range approximately -2.1 billion to 2.1 billion. long is 8 bytes with a very large range for big numbers. float is 4 bytes for single-precision floating-point numbers. double is 8 bytes for double-precision floating-point numbers and is the default for decimal literals. char is 2 bytes representing a single Unicode character with range 0 to 65,535. boolean represents true or false values. Unlike C/C++, the sizes of Java primitive types are fixed and do not vary across platforms, which contributes to Java's platform independence.",
                5
            ),
            qa(
                "Explain the different types of variables in Java.",
                "Java has three types of variables. Local variables are declared inside a method, constructor or block and are accessible only within that scope. They have no default value and must be explicitly initialised before use, otherwise the compiler raises an error. Instance variables are declared inside a class but outside any method, without the static keyword. Each object of the class has its own copy of instance variables. They are accessible throughout the class and are automatically initialised to default values (0 for numeric types, null for references, false for boolean). Class variables (static variables) are declared with the static keyword inside a class. There is only one copy shared by all objects of the class. They are also initialised to default values and are accessed using the class name.",
                5
            ),
            qa(
                "Explain type casting in Java with examples of widening and narrowing.",
                "Type casting in Java converts a value from one data type to another. Widening (implicit) casting converts a smaller type to a larger type and is done automatically by the compiler because there is no risk of data loss. For example, int num = 100; double d = num; automatically converts 100 to 100.0. The conversion order is byte → short → int → long → float → double. Narrowing (explicit) casting converts a larger type to a smaller type and requires an explicit cast because data may be lost. For example, double pi = 3.14159; int n = (int) pi; truncates the decimal part, giving n = 3. The programmer must use the syntax (type) value to perform narrowing casts. Narrowing from floating-point to integer always truncates the decimal portion rather than rounding.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 5 — Control Flow Statements in Java
========================================================= */

const controlFlowStatements = createTopic(
    "control-flow-statements-in-java",
    "Control Flow Statements in Java",

    [
        text(
            "Control flow statements determine the order in which statements are executed in a Java program. They include decision-making statements (if, switch), looping statements (for, while, do-while) and branching statements (break, continue, return)."
        ),

        heading("Decision-Making Statements"),

        heading("if-else"),

        code(
            `int marks = 75;

if (marks >= 90) {
    System.out.println("Grade: A+");
} else if (marks >= 80) {
    System.out.println("Grade: A");
} else if (marks >= 70) {
    System.out.println("Grade: B");
} else if (marks >= 60) {
    System.out.println("Grade: C");
} else {
    System.out.println("Grade: F");
}
// Output: Grade: B`,
            "java",
            "if-else if-else statement"
        ),

        heading("switch Statement"),

        code(
            `// Traditional switch
int day = 3;
switch (day) {
    case 1: System.out.println("Monday"); break;
    case 2: System.out.println("Tuesday"); break;
    case 3: System.out.println("Wednesday"); break;
    case 4: System.out.println("Thursday"); break;
    case 5: System.out.println("Friday"); break;
    default: System.out.println("Weekend");
}
// Output: Wednesday

// Enhanced switch (Java 14+)
String result = switch (day) {
    case 1 -> "Monday";
    case 2 -> "Tuesday";
    case 3 -> "Wednesday";
    default -> "Other";
};`,
            "java",
            "switch statement"
        ),

        note(
            "Without the break statement in a traditional switch, execution 'falls through' to the next case. This is a common source of bugs. The enhanced switch (Java 14+) with arrow syntax eliminates fall-through.",
            "warning",
            "Common Mistake"
        ),

        heading("Looping Statements"),

        heading("for Loop"),

        code(
            `// Basic for loop
for (int i = 1; i <= 5; i++) {
    System.out.print(i + " ");
}
// Output: 1 2 3 4 5

// Enhanced for loop (for-each)
int[] marks = {85, 90, 78, 92, 88};
for (int m : marks) {
    System.out.print(m + " ");
}
// Output: 85 90 78 92 88

// Nested for loop (multiplication table)
for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= 5; j++) {
        System.out.print(i * j + "\\t");
    }
    System.out.println();
}`,
            "java",
            "for loop variants"
        ),

        heading("while Loop"),

        code(
            `// while loop — condition checked BEFORE each iteration
int count = 1;
while (count <= 5) {
    System.out.print(count + " ");
    count++;
}
// Output: 1 2 3 4 5

// Sum of digits
int num = 1234, sum = 0;
while (num > 0) {
    sum += num % 10;
    num /= 10;
}
System.out.println("Sum of digits: " + sum);  // 10`,
            "java",
            "while loop"
        ),

        heading("do-while Loop"),

        code(
            `// do-while — condition checked AFTER each iteration
// Guarantees at least one execution
int n = 1;
do {
    System.out.print(n + " ");
    n++;
} while (n <= 5);
// Output: 1 2 3 4 5

// Menu-driven program (runs at least once)
int choice;
do {
    System.out.println("1. Add  2. Subtract  3. Exit");
    choice = sc.nextInt();
} while (choice != 3);`,
            "java",
            "do-while loop"
        ),

        heading("Loop Comparison"),

        table(
            ["Aspect", "for", "while", "do-while"],
            [
                ["Condition check", "Before each iteration", "Before each iteration", "After each iteration"],
                ["Minimum executions", "0", "0", "1"],
                ["Best for", "Known number of iterations", "Unknown iterations, condition-based", "At least one execution required"],
                ["Counter", "Built into syntax", "Must manage manually", "Must manage manually"],
            ]
        ),

        heading("Branching Statements"),

        table(
            ["Statement", "Purpose", "Used In"],
            [
                ["break", "Exits the innermost loop or switch immediately", "Loops, switch"],
                ["continue", "Skips the rest of the current iteration and jumps to the next", "Loops only"],
                ["return", "Exits the current method and optionally returns a value", "Methods"],
            ]
        ),

        code(
            `// break example
for (int i = 1; i <= 10; i++) {
    if (i == 6) break;
    System.out.print(i + " ");
}
// Output: 1 2 3 4 5

// continue example
for (int i = 1; i <= 10; i++) {
    if (i % 2 == 0) continue;
    System.out.print(i + " ");
}
// Output: 1 3 5 7 9

// Labeled break (breaks out of outer loop)
outer:
for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= 3; j++) {
        if (i == 2 && j == 2) break outer;
        System.out.print(i + "," + j + " ");
    }
}
// Output: 1,1 1,2 1,3 2,1`,
            "java",
            "break, continue and labeled break"
        ),

        heading("Input from User"),

        code(
            `import java.util.Scanner;

public class InputExample {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter your name: ");
        String name = sc.nextLine();

        System.out.print("Enter your age: ");
        int age = sc.nextInt();

        System.out.println("Hello " + name + ", you are " + age + " years old.");

        sc.close();
    }
}`,
            "java",
            "Reading user input with Scanner"
        ),

        keyPoints([
            "if-else provides conditional branching; switch selects among multiple discrete values.",
            "The for loop is best when the number of iterations is known; while checks the condition before each iteration.",
            "The do-while loop guarantees at least one execution because the condition is checked after.",
            "break exits a loop or switch; continue skips to the next iteration; return exits a method.",
            "The Scanner class is used to read user input from the console.",
        ]),
    ],

    {
        summary:
            "Master Java control flow: if-else, switch, for, while, do-while, break, continue and Scanner for input.",
        minutes: 12,
        tags: ["java", "control-flow", "loops", "if-else", "switch", "important"],

        mcqs: [
            mcq(
                "The do-while loop guarantees:",
                ["Zero executions", "At least one execution", "Exactly two executions", "Infinite execution"],
                1,
                "The do-while loop checks the condition after the loop body, guaranteeing at least one execution."
            ),
            mcq(
                "The break statement in a loop:",
                ["Skips the current iteration", "Exits the innermost loop immediately", "Restarts the loop", "Pauses execution"],
                1,
                "break immediately exits the innermost loop or switch statement."
            ),
            mcq(
                "Without a break in a switch case, Java will:",
                ["Throw an error", "Fall through to the next case", "Exit the switch", "Skip the case"],
                1,
                "Without break, execution falls through to subsequent cases until a break or the end of the switch is reached."
            ),
            mcq(
                "The enhanced for loop (for-each) is used to:",
                ["Iterate with an index", "Iterate over elements of an array or collection", "Create an infinite loop", "Count backwards"],
                1,
                "The enhanced for loop iterates over each element of an array or collection without using an index."
            ),
            mcq(
                "Which class is used to read user input from the console in Java?",
                ["BufferedReader", "Scanner", "InputStream", "Reader"],
                1,
                "The Scanner class from java.util is the most common way to read console input."
            ),
            mcq(
                "The continue statement:",
                ["Exits the loop", "Skips the rest of the current iteration", "Restarts the program", "Returns from the method"],
                1,
                "continue skips the remaining code in the current iteration and jumps to the next iteration of the loop."
            ),
        ],

        questions: [
            qa(
                "Compare for, while and do-while loops in Java.",
                "The for loop is best when the number of iterations is known in advance. It has built-in syntax for initialisation, condition and increment/decrement: for(int i=0; i<n; i++). The condition is checked before each iteration, so the loop body may execute zero times. The while loop checks the condition before each iteration and is best when the number of iterations is not known and depends on a condition: while(condition) { body }. Like for, it may execute zero times. The do-while loop checks the condition after executing the loop body, guaranteeing at least one execution: do { body } while(condition). This makes it ideal for menu-driven programs where the menu must be displayed at least once. All three loops support break to exit early and continue to skip to the next iteration.",
                5
            ),
            qa(
                "Explain the switch statement and the fall-through behaviour.",
                "The switch statement selects one of many code blocks to execute based on the value of an expression. The expression is compared against each case label, and execution begins at the matching case. In the traditional switch, if a case does not end with a break statement, execution falls through to the next case and continues until a break is encountered or the switch ends. For example, if case 2 has no break and case 3 follows, both case 2 and case 3 code will execute when the value is 2. This fall-through behaviour is a common source of bugs. The default case handles values that do not match any case. Java 14 introduced the enhanced switch with arrow syntax (case 1 -> action;) which eliminates fall-through and can be used as an expression that returns a value.",
                5
            ),
            qa(
                "Explain break, continue and labeled break with examples.",
                "The break statement immediately exits the innermost loop or switch. For example, in a loop searching for a value, break stops the loop as soon as the value is found. The continue statement skips the remaining code in the current iteration and jumps to the next iteration. For example, to print only odd numbers, if(i%2==0) continue; skips even numbers. A labeled break allows breaking out of an outer loop from within a nested loop. By placing a label before the outer loop (e.g., outer:), the statement break outer; inside the inner loop exits the outer loop entirely. Without the label, a regular break would only exit the inner loop. Labeled break is useful for breaking out of deeply nested loops when a specific condition is met.",
                4
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit1Topics = [
    historyAndFeaturesOfJava,
    javaDevelopmentEnvironment,
    javaProgramStructure,
    dataTypesAndOperators,
    controlFlowStatements,
];