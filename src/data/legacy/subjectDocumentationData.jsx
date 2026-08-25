/* ==================================================
   LEARNSPHERE — SUBJECT DOCUMENTATION DATABASE
   Subject: Programming in C (BCA Semester 1)
   Every topic = complete study material
   ================================================== */

const BASE = "/courses/bca/semester/1/subject/programming-in-c/topic";

export const subjectDocumentationData = {
  "programming-in-c": {
    id: "programming-in-c",
    courseId: "bca",
    semester: 1,
    name: "Programming in C",
    code: "BCA-102",
    description:
      "Learn programming fundamentals, logic building, C syntax, functions, arrays, pointers, and file handling.",
    difficulty: "Beginner",
    totalChapters: 12,
    estimatedTime: "32 Hours",
    progress: 18,

    units: [
      {
        id: "unit-1",
        title: "Introduction to C Programming",
        topics: [
          { id: "introduction-to-c", title: "Introduction to C" },
          { id: "structure-of-c-program", title: "Structure of a C Program" },
          { id: "tokens-and-keywords", title: "Tokens and Keywords" },
          { id: "data-types-and-variables", title: "Data Types and Variables" },
        ],
      },
      {
        id: "unit-2",
        title: "Operators and Control Statements",
        topics: [
          { id: "operators-in-c", title: "Operators in C" },
          { id: "conditional-statements", title: "Conditional Statements" },
          { id: "loops-in-c", title: "Loops in C" },
        ],
      },
      {
        id: "unit-3",
        title: "Functions and Arrays",
        topics: [
          { id: "functions-in-c", title: "Functions in C" },
          { id: "arrays-in-c", title: "Arrays in C" },
          { id: "strings-in-c", title: "Strings in C" },
        ],
      },
      {
        id: "unit-4",
        title: "Pointers and File Handling",
        topics: [
          { id: "pointers-in-c", title: "Pointers in C" },
          { id: "file-handling-in-c", title: "File Handling" },
        ],
      },
    ],

    topicContent: {
      /* ==================================================
         UNIT 1 — TOPIC 1
         ================================================== */
      "introduction-to-c": {
        title: "Introduction to C Programming",
        readingTime: "8 min read",
        difficulty: "Beginner",
        lastUpdated: "Updated recently",

        introduction:
          "C is a powerful general-purpose programming language. It is widely used for system software, embedded systems, operating systems, compilers, and performance-critical applications.",

        definition:
          "C is a structured, procedural, and middle-level programming language developed by Dennis Ritchie at Bell Laboratories in 1972.",

        learningObjectives: [
          "Understand what the C programming language is.",
          "Identify the major features of C.",
          "Learn where C is used in real-world software.",
          "Understand the basic workflow of writing and running a C program.",
        ],

        prerequisites: [
          "Basic computer knowledge",
          "Understanding of files and folders",
          "No previous programming experience is required",
        ],

        theory: [
          {
            heading: "Why Learn C?",
            content:
              "C is one of the best languages for understanding how programming actually works. It teaches memory, data types, control structures, functions, and logical thinking. After C, languages like C++, Java, and Python feel much easier because they share the same core concepts.",
          },
          {
            heading: "Major Features of C",
            content:
              "C is simple, fast, portable, and flexible. It gives direct memory access through pointers and works for both low-level system programming and high-level application development.",
          },
          {
            heading: "How a C Program Works",
            content:
              "You write code in a file with the .c extension. A compiler converts that source code into machine code, producing an executable file that the computer can run.",
          },
        ],

        flowSteps: [
          "Write source code in a .c file",
          "Compile the code using a C compiler",
          "Fix compilation errors if any",
          "Generate the executable file",
          "Run the executable and view the output",
        ],

        syntax: `#include <stdio.h>

int main() {
  // Your code goes here
  return 0;
}`,

        codeExample: `#include <stdio.h>

int main() {
  printf("Welcome to LearnSphere!");
  return 0;
}`,

        output: "Welcome to LearnSphere!",

        explanation: [
          "#include <stdio.h> includes the standard input-output library.",
          "int main() is the main function where program execution begins.",
          "printf() displays text on the screen.",
          "return 0; tells the system the program ended successfully.",
        ],

        advantages: [
          "Fast and efficient execution",
          "Portable across many platforms",
          "Excellent for system-level programming",
          "Strong foundation for learning other languages",
          "Large community and compiler support",
        ],

        disadvantages: [
          "Manual memory management can be hard for beginners",
          "No built-in object-oriented programming support",
          "Smaller standard library than modern languages",
          "Pointers can cause errors if used incorrectly",
        ],

        realWorldExamples: [
          "Operating systems and kernels",
          "Embedded systems and IoT devices",
          "Device drivers",
          "Game engines",
          "Database systems",
          "Compilers and interpreters",
        ],

        bestPractices: [
          "Use meaningful variable and function names.",
          "Write comments for complex logic.",
          "Always initialize variables before use.",
          "Keep functions short and focused.",
          "Compile frequently to catch errors early.",
        ],

        commonMistakes: [
          "Forgetting the semicolon at the end of a statement.",
          "Using variables before declaring them.",
          "Misspelling printf() or main().",
          "Forgetting to include the stdio.h header file.",
          "Ignoring compiler warnings.",
        ],

        summary:
          "C is a foundational programming language that teaches core software development concepts. Learning C helps students build logic, understand memory, and prepare for advanced languages.",

        practiceQuestions: [
          "What is the C programming language?",
          "Who developed C and when?",
          "Write the basic structure of a C program.",
          "What is the purpose of the main() function?",
          "What does return 0 mean in a C program?",
        ],

        importantQuestions: [
          "Explain the features of the C programming language.",
          "Describe the structure of a C program with an example.",
          "Explain the compilation process of a C program.",
          "Differentiate between a compiler and an interpreter.",
        ],

        relatedTopics: [
          { title: "Structure of a C Program", path: `${BASE}/structure-of-c-program` },
          { title: "Data Types and Variables", path: `${BASE}/data-types-and-variables` },
          { title: "Operators in C", path: `${BASE}/operators-in-c` },
        ],
      },

      /* ==================================================
         UNIT 1 — TOPIC 2
         ================================================== */
      "structure-of-c-program": {
        title: "Structure of a C Program",
        readingTime: "10 min read",
        difficulty: "Beginner",
        lastUpdated: "Updated recently",

        introduction:
          "Every C program follows a fixed, well-defined structure. Once you understand this structure, you can read and write any C program with confidence — from a small college practical to a large project.",

        definition:
          "The structure of a C program is the standard arrangement of its sections: documentation section, preprocessor directives, global declarations, the main() function, and user-defined functions.",

        learningObjectives: [
          "Identify each section of a C program.",
          "Understand the role of #include and header files.",
          "Write a complete, well-structured C program.",
          "Know the order in which sections appear in a program.",
        ],

        prerequisites: [
          "Completed: Introduction to C",
          "A text editor and C compiler installed",
        ],

        theory: [
          {
            heading: "The Six Sections",
            content:
              "A complete C program can have six sections: (1) Documentation — comments about the program, (2) Preprocessor — #include and #define lines, (3) Global Declaration — variables shared by all functions, (4) main() function — the entry point, (5) User-defined functions — your own reusable blocks, and (6) Comments — notes for humans, ignored by the compiler.",
          },
          {
            heading: "The main() Function",
            content:
              "main() is compulsory in every C program. Execution always starts from the first line inside main() and ends at its closing brace. Without main(), the compiler gives an error because it does not know where to begin.",
          },
          {
            heading: "Preprocessor Directives",
            content:
              "Lines starting with # are handled before compilation. #include <stdio.h> pastes the standard input-output declarations into your program so you can use printf() and scanf(). #define creates constants, for example #define PI 3.14.",
          },
        ],

        flowSteps: [
          "Documentation section — program name and purpose in comments",
          "Preprocessor section — #include and #define",
          "Global declarations — variables used everywhere",
          "main() function — program logic starts here",
          "User-defined functions — called from main() when needed",
        ],

        syntax: `// Documentation section
#include <stdio.h>     // Preprocessor
#define MAX 100        // Constant definition

int g = 10;            // Global declaration

int main() {           // main function
  // statements
  return 0;
}`,

        codeExample: `// Program: Student Welcome Card
// Author: LearnSphere Student
#include <stdio.h>

int main() {
  printf("--------------------------\n");
  printf("  LearnSphere Portal\n");
  printf("--------------------------\n");
  printf("Name   : Aarav Patel\n");
  printf("Course : BCA Semester 1\n");
  printf("Subject: Programming in C\n");
  return 0;
}`,

        output: `--------------------------
  LearnSphere Portal
--------------------------
Name   : Aarav Patel
Course : BCA Semester 1
Subject: Programming in C`,

        explanation: [
          "The first two lines are comments — they explain the program to humans.",
          "#include <stdio.h> gives access to printf().",
          "int main() starts the program body enclosed in { }.",
          "Each printf() prints one line; \\n moves the cursor to a new line.",
          "return 0; ends main() and reports success to the operating system.",
        ],

        advantages: [
          "A fixed structure makes programs easy to read",
          "Sections help teams divide work on big projects",
          "Comments make maintenance simple",
          "Preprocessor keeps code reusable and clean",
        ],

        disadvantages: [
          "Beginners must memorize the section order",
          "Missing a section like #include causes errors",
          "Braces { } mistakes break the whole program",
        ],

        realWorldExamples: [
          "College practical files follow this exact structure",
          "Open-source C projects separate sections into files",
          "Embedded firmware starts with the same skeleton",
          "Technical interviews ask you to write this structure",
        ],

        bestPractices: [
          "Always write a header comment with program name and date.",
          "Keep #include lines at the very top.",
          "Indent the code inside main() by 2 or 4 spaces.",
          "Close every opening brace immediately, then fill the body.",
        ],

        commonMistakes: [
          "Writing printf() before including stdio.h.",
          "Forgetting the closing brace of main().",
          "Placing main() inside another function.",
          "Missing semicolons after statements.",
        ],

        summary:
          "A C program is organized into fixed sections — documentation, preprocessor, global declarations, main(), and user functions. main() is compulsory because execution always begins there.",

        practiceQuestions: [
          "Draw and label the structure of a C program.",
          "Which section is compulsory in every C program?",
          "What is the purpose of the documentation section?",
          "What happens if main() is missing?",
          "What is the difference between #include and #define?",
        ],

        importantQuestions: [
          "Explain the structure of a C program with a neat diagram.",
          "Write a C program to print your name, course, and college using proper structure.",
          "Explain the role of the preprocessor section with examples.",
        ],

        relatedTopics: [
          { title: "Tokens and Keywords", path: `${BASE}/tokens-and-keywords` },
          { title: "Data Types and Variables", path: `${BASE}/data-types-and-variables` },
          { title: "Introduction to C", path: `${BASE}/introduction-to-c` },
        ],
      },

      /* ==================================================
         UNIT 1 — TOPIC 3
         ================================================== */
      "tokens-and-keywords": {
        title: "Tokens and Keywords",
        readingTime: "9 min read",
        difficulty: "Beginner",
        lastUpdated: "Updated recently",

        introduction:
          "Just like English sentences are made of words, a C program is made of tokens. Tokens are the smallest meaningful units the compiler understands. Learning them is the first step to reading C code fluently.",

        definition:
          "A token is the smallest individual unit of a C program. C has six types of tokens: keywords, identifiers, constants, strings, operators, and special symbols.",

        learningObjectives: [
          "Define what a token is with examples.",
          "List the six types of C tokens.",
          "Recall the 32 reserved keywords of C.",
          "Apply the rules for writing valid identifiers.",
        ],

        prerequisites: [
          "Completed: Structure of a C Program",
          "Basic English alphabet and numbers",
        ],

        theory: [
          {
            heading: "The Six Types of Tokens",
            content:
              "Keywords are reserved words with fixed meanings (int, if, return). Identifiers are names you give to variables and functions (marks, total). Constants are fixed values (10, 3.14, 'A'). Strings are text in double quotes (\"Hello\"). Operators perform actions (+, -, =). Special symbols include braces, semicolons, and parentheses.",
          },
          {
            heading: "The 32 Keywords of C",
            content:
              "C has exactly 32 keywords: auto, break, case, char, const, continue, default, do, double, else, enum, extern, float, for, goto, if, int, long, register, return, short, signed, sizeof, static, struct, switch, typedef, union, unsigned, void, volatile, while. You cannot use them as variable names.",
          },
          {
            heading: "Rules for Identifiers",
            content:
              "An identifier can contain letters, digits, and underscore. It must start with a letter or underscore — never a digit. It cannot be a keyword. C is case-sensitive, so marks and Marks are different names. Valid: total1, _sum. Invalid: 1total, int, my-name.",
          },
        ],

        flowSteps: [
          "Programmer writes source code",
          "Compiler scans the code character by character",
          "Scanner groups characters into tokens",
          "Each token is classified — keyword, identifier, constant…",
          "Parser checks tokens against C grammar rules",
        ],

        syntax: `int marks = 95;        // tokens: int, marks, =, 95, ;
printf("Pass");       // tokens: printf, (, "Pass", ), ;`,

        codeExample: `#include <stdio.h>

int main() {
  // 'int', 'return' are keywords
  // 'studentCount', 'passMark' are identifiers
  int studentCount = 60;
  int passMark = 35;

  printf("LearnSphere Class Report\n");
  printf("Students : %d\n", studentCount);
  printf("Pass mark: %d\n", passMark);
  return 0;
}`,

        output: `LearnSphere Class Report
Students : 60
Pass mark: 35`,

        explanation: [
          "int and return are keywords — reserved by the language.",
          "studentCount and passMark are identifiers — names chosen by us.",
          "60 and 35 are integer constants.",
          "\"LearnSphere Class Report\" is a string token.",
          "=, ( ), ; and { } are operator and special-symbol tokens.",
        ],

        advantages: [
          "Tokens make the compiler's job fast and precise",
          "Fixed keywords keep programs predictable",
          "Identifier rules prevent naming confusion",
          "Case-sensitivity allows more naming flexibility",
        ],

        disadvantages: [
          "Beginners often use keywords as variable names",
          "Case-sensitivity causes sneaky bugs (Sum vs sum)",
          "32 keywords must simply be memorized",
        ],

        realWorldExamples: [
          "Compilers like GCC tokenize every program you write",
          "Syntax highlighters in VS Code color tokens differently",
          "Exam papers ask you to classify given tokens",
        ],

        bestPractices: [
          "Use camelCase for variables: totalMarks, studentName.",
          "Never start a name with a digit.",
          "Choose descriptive names over a, b, x, y.",
          "Keep keywords in lowercase — INT is not int.",
        ],

        commonMistakes: [
          "Using a keyword like int or for as a variable name.",
          "Starting an identifier with a number (2ndMark).",
          "Using spaces or hyphens inside names (my mark).",
          "Assuming Main and main are the same.",
        ],

        summary:
          "Tokens are the building blocks of a C program — keywords, identifiers, constants, strings, operators, and special symbols. Keywords are reserved; identifiers follow strict naming rules.",

        practiceQuestions: [
          "Define token. How many types of tokens exist in C?",
          "Write any ten keywords of C.",
          "Which of these are invalid identifiers: 2abc, _sum, float, my-name?",
          "Is C case-sensitive? Explain with an example.",
          "Differentiate between a keyword and an identifier.",
        ],

        importantQuestions: [
          "Explain all types of tokens in C with examples.",
          "List the rules for writing identifiers and give valid and invalid examples.",
          "Write a short note on C keywords.",
        ],

        relatedTopics: [
          { title: "Data Types and Variables", path: `${BASE}/data-types-and-variables` },
          { title: "Operators in C", path: `${BASE}/operators-in-c` },
          { title: "Structure of a C Program", path: `${BASE}/structure-of-c-program` },
        ],
      },

      /* ==================================================
         UNIT 1 — TOPIC 4
         ================================================== */
      "data-types-and-variables": {
        title: "Data Types and Variables",
        readingTime: "14 min read",
        difficulty: "Beginner",
        lastUpdated: "Updated recently",

        introduction:
          "Programs exist to process data — marks, names, prices, temperatures. Data types tell C what kind of data a variable will hold, and variables are the named boxes where that data lives.",

        definition:
          "A data type defines the kind and size of data a variable can store. A variable is a named memory location whose value can change during program execution.",

        learningObjectives: [
          "List the primary data types of C with their sizes.",
          "Declare and initialize variables correctly.",
          "Use the right format specifier in printf() and scanf().",
          "Differentiate between variables and constants.",
        ],

        prerequisites: [
          "Completed: Tokens and Keywords",
          "Understanding of memory as storage",
        ],

        theory: [
          {
            heading: "Primary Data Types",
            content:
              "int stores whole numbers like 42 (usually 4 bytes, format %d). float stores decimals like 9.5 (4 bytes, %f). double stores bigger, more precise decimals (8 bytes, %lf). char stores a single character like 'A' (1 byte, %c). void means 'no type', used for functions that return nothing.",
          },
          {
            heading: "Declaring and Initializing Variables",
            content:
              "Declaration tells the compiler the name and type: int marks;. Initialization gives the first value: int marks = 95;. You can declare many variables of one type together: int a = 5, b = 10, c;. Uninitialized variables contain garbage values — always initialize.",
          },
          {
            heading: "Format Specifiers",
            content:
              "printf() and scanf() need format specifiers to know the data type: %d for int, %f for float, %lf for double, %c for char, %s for string. Using the wrong specifier prints garbage — %d with a float is a classic beginner bug.",
          },
        ],

        flowSteps: [
          "Choose the correct data type for your data",
          "Declare the variable with a meaningful name",
          "Initialize it with a starting value",
          "Read input with scanf() using the right specifier",
          "Process and print with printf()",
        ],

        syntax: `int age = 18;
float percentage = 91.5;
double pi = 3.1415926535;
char grade = 'A';`,

        codeExample: `#include <stdio.h>

int main() {
  int marks = 92;
  float percentage = 91.5;
  char grade = 'A';

  printf("--- LearnSphere Result Card ---\n");
  printf("Marks      : %d\n", marks);
  printf("Percentage : %.1f\n", percentage);
  printf("Grade      : %c\n", grade);
  return 0;
}`,

        output: `--- LearnSphere Result Card ---
Marks      : 92
Percentage : 91.5
Grade      : A`,

        explanation: [
          "int marks stores the whole number 92 — printed with %d.",
          "float percentage stores 91.5 — %.1f prints one decimal place.",
          "char grade stores the single character 'A' — printed with %c.",
          "Each \\n moves the output to the next line.",
        ],

        advantages: [
          "Strong typing catches many errors at compile time",
          "Small, fast set of types — easy to master",
          "Direct control over memory usage",
          "Predictable sizes help system programming",
        ],

        disadvantages: [
          "No built-in string type — strings are char arrays",
          "No true/false boolean in old C (use 0 and 1)",
          "Overflow happens silently if a value exceeds the type's range",
        ],

        realWorldExamples: [
          "Result systems store marks in int and percentage in float",
          "ATM software uses double for money calculations",
          "Sensor firmware reads temperatures into float variables",
          "Games keep scores in int and player initials in char",
        ],

        bestPractices: [
          "Always initialize variables when you declare them.",
          "Use int for counting, float/double for measurements.",
          "Match the format specifier exactly to the data type.",
          "Write constants in UPPERCASE: #define PASS_MARK 35.",
        ],

        commonMistakes: [
          "Printing a float with %d — output is garbage.",
          "Using a variable before giving it a value.",
          "Forgetting & in scanf: scanf(\"%d\", &marks).",
          "Confusing = (assignment) with == (comparison).",
        ],

        summary:
          "Data types (int, float, double, char, void) decide what a variable can store, and variables are named memory boxes. Correct format specifiers connect your data to printf() and scanf().",

        practiceQuestions: [
          "List the primary data types of C with their sizes.",
          "What is a variable? Write the rules for naming it.",
          "Differentiate between %d, %f, and %c.",
          "What is the difference between a variable and a constant?",
          "What value does an uninitialized variable contain?",
        ],

        importantQuestions: [
          "Explain C data types with their memory sizes and format specifiers.",
          "Write a C program to read and print a student's marks, percentage, and grade.",
          "Explain variable declaration vs initialization with examples.",
        ],

        relatedTopics: [
          { title: "Operators in C", path: `${BASE}/operators-in-c` },
          { title: "Tokens and Keywords", path: `${BASE}/tokens-and-keywords` },
          { title: "Conditional Statements", path: `${BASE}/conditional-statements` },
        ],
      },

      /* ==================================================
         UNIT 2 — TOPIC 5
         ================================================== */
      "operators-in-c": {
        title: "Operators in C",
        readingTime: "13 min read",
        difficulty: "Beginner",
        lastUpdated: "Updated recently",

        introduction:
          "Operators are the action symbols of C — they add numbers, compare values, combine conditions, and assign results. Almost every line of real code uses at least one operator.",

        definition:
          "An operator is a symbol that tells the compiler to perform a specific mathematical, relational, or logical operation on operands (values or variables).",

        learningObjectives: [
          "Classify C operators into their categories.",
          "Use arithmetic, relational, and logical operators in expressions.",
          "Apply increment/decrement and the ternary operator.",
          "Predict results using operator precedence.",
        ],

        prerequisites: [
          "Completed: Data Types and Variables",
          "Basic school mathematics",
        ],

        theory: [
          {
            heading: "Arithmetic and Assignment Operators",
            content:
              "Arithmetic: +, -, *, /, and % (modulus — gives the remainder, e.g. 17 % 5 = 2). Note: 17 / 5 with integers gives 3, not 3.4. Assignment: = stores a value, and shortcuts like +=, -=, *= combine action and storage: marks += 5 means marks = marks + 5.",
          },
          {
            heading: "Relational and Logical Operators",
            content:
              "Relational operators compare values and return 1 (true) or 0 (false): ==, !=, >, <, >=, <=. Logical operators combine conditions: && (AND — both must be true), || (OR — at least one true), ! (NOT — flips the result). Example: marks >= 35 && attendance >= 75.",
          },
          {
            heading: "Increment, Ternary, and sizeof",
            content:
              "++ increases by 1, -- decreases by 1; ++i updates before use (pre), i++ updates after use (post). The ternary operator ? : is a one-line if-else: result = (marks >= 35) ? \"Pass\" : \"Fail\";. sizeof(int) returns the bytes a type occupies.",
          },
        ],

        flowSteps: [
          "Identify what operation the problem needs",
          "Pick the operator category — arithmetic, relational, logical",
          "Write the expression with correct operands",
          "Check precedence — * and / run before + and -",
          "Use parentheses to force the order you want",
        ],

        syntax: `sum = a + b;              // arithmetic
isPass = marks >= 35;    // relational
ok = (m >= 35) && (a >= 75);  // logical
count++;                 // increment
max = (a > b) ? a : b;   // ternary`,

        codeExample: `#include <stdio.h>

int main() {
  int math = 80, science = 70, english = 90;
  int total = math + science + english;
  float percent = total / 3.0;

  printf("--- LearnSphere Score Tool ---\n");
  printf("Total      : %d / 300\n", total);
  printf("Percentage : %.1f\n", percent);
  printf("Passed all : %d\n",
         math >= 35 && science >= 35 && english >= 35);
  printf("Result     : %s\n",
         percent >= 40 ? "PASS" : "FAIL");
  return 0;
}`,

        output: `--- LearnSphere Score Tool ---
Total      : 240 / 300
Percentage : 80.0
Passed all : 1
Result     : PASS`,

        explanation: [
          "+ adds the three subject marks into total.",
          "total / 3.0 uses 3.0 (a float) so the division keeps decimals.",
          "&& checks that every subject is 35 or more — prints 1 for true.",
          "The ternary operator prints PASS when percentage is at least 40.",
        ],

        advantages: [
          "Rich operator set handles most logic in one line",
          "Shorthand operators (+=, ++) keep code short",
          "Ternary replaces simple if-else statements",
          "Modulus % solves remainder problems easily",
        ],

        disadvantages: [
          "Integer division surprises beginners (5 / 2 = 2)",
          "Precedence mistakes silently change answers",
          "= vs == confusion causes logical bugs",
          "Overusing ternary makes code hard to read",
        ],

        realWorldExamples: [
          "Billing apps use % for change and discount calculations",
          "Login systems use && to check username and password",
          "Game loops use ++ to count lives and levels",
          "Attendance systems use relational operators for 75% rules",
        ],

        bestPractices: [
          "Use parentheses even when you know the precedence.",
          "Divide by 3.0 (not 3) when you want a decimal result.",
          "Prefer one clear ternary over a nested one.",
          "Read ++i as 'update first' and i++ as 'use first'.",
        ],

        commonMistakes: [
          "Writing if (marks = 35) — assignment instead of comparison.",
          "Expecting 5 / 2 to give 2.5 with integers.",
          "Forgetting that % works only on integers.",
          "Mixing && and || without parentheses.",
        ],

        summary:
          "Operators perform actions on data: arithmetic (+, -, *, /, %), relational (==, >, <…), logical (&&, ||, !), assignment (=, +=), increment (++), ternary (?:), and sizeof. Precedence decides the order of evaluation.",

        practiceQuestions: [
          "What is an operator? List its categories.",
          "What is the output of 17 % 5 and 17 / 5 in C?",
          "Differentiate between = and ==.",
          "What is the difference between ++i and i++?",
          "Write the ternary equivalent of a simple if-else.",
        ],

        importantQuestions: [
          "Explain all categories of C operators with examples.",
          "Explain operator precedence and associativity with an example expression.",
          "Write a C program to find the largest of three numbers using the ternary operator.",
        ],

        relatedTopics: [
          { title: "Conditional Statements", path: `${BASE}/conditional-statements` },
          { title: "Loops in C", path: `${BASE}/loops-in-c` },
          { title: "Data Types and Variables", path: `${BASE}/data-types-and-variables` },
        ],
      },

      /* ==================================================
         UNIT 2 — TOPIC 6
         ================================================== */
      "conditional-statements": {
        title: "Conditional Statements (if, else, switch)",
        readingTime: "14 min read",
        difficulty: "Beginner",
        lastUpdated: "Updated recently",

        introduction:
          "Real programs make decisions — pass or fail, discount or no discount, admin or student. Conditional statements let your program choose which code to run based on a condition.",

        definition:
          "Conditional statements are control statements that execute a block of code only when a specified condition evaluates to true. C provides if, if-else, else-if ladder, nested if, and switch.",

        learningObjectives: [
          "Write programs using simple if and if-else.",
          "Build multi-way decisions with the else-if ladder.",
          "Use switch-case for menu-driven programs.",
          "Choose the right conditional for a given problem.",
        ],

        prerequisites: [
          "Completed: Operators in C (relational and logical)",
          "Understanding of true/false as 1/0",
        ],

        theory: [
          {
            heading: "if and if-else",
            content:
              "if runs its block only when the condition is true: if (marks >= 35) { ... }. if-else adds a fallback block that runs when the condition is false. Remember: C treats 0 as false and any non-zero value as true.",
          },
          {
            heading: "else-if Ladder and Nested if",
            content:
              "An else-if ladder tests conditions one by one from top to bottom and runs the first true block — perfect for grades (90+ A, 75+ B…). Nested if means an if inside another if, useful when one decision depends on another, like checking attendance only after checking marks.",
          },
          {
            heading: "switch-case",
            content:
              "switch checks one variable against fixed values called cases. Each case ends with break — without it, execution 'falls through' into the next case. default runs when no case matches. switch works with int and char values, making it ideal for menus: 1-Add, 2-View, 3-Exit.",
          },
        ],

        flowSteps: [
          "Read the input value",
          "Evaluate the condition (true or false)",
          "If true — run the if block",
          "If false — skip to else / next else-if",
          "Continue execution after the conditional block",
        ],

        syntax: `if (condition) {
  // runs when true
} else if (condition2) {
  // runs when condition2 is true
} else {
  // runs when nothing matched
}

switch (choice) {
  case 1: /* code */ break;
  default: /* code */
}`,

        codeExample: `#include <stdio.h>

int main() {
  int marks = 78;

  printf("--- LearnSphere Grade System ---\n");
  printf("Marks: %d\n", marks);

  if (marks >= 90) {
    printf("Grade: A+ (Outstanding!)\n");
  } else if (marks >= 75) {
    printf("Grade: A (Very Good!)\n");
  } else if (marks >= 60) {
    printf("Grade: B (Good)\n");
  } else if (marks >= 35) {
    printf("Grade: C (Pass)\n");
  } else {
    printf("Grade: F (Try again)\n");
  }
  return 0;
}`,

        output: `--- LearnSphere Grade System ---
Marks: 78
Grade: A (Very Good!)`,

        explanation: [
          "marks is 78, so the first condition (>= 90) is false.",
          "The second condition (>= 75) is true — its block runs.",
          "Once one block runs, the rest of the ladder is skipped.",
          "If all conditions were false, the final else would run.",
        ],

        advantages: [
          "Makes programs intelligent and interactive",
          "else-if ladder reads like plain English",
          "switch is faster and cleaner than long if chains for menus",
          "Nesting handles complex real-world decisions",
        ],

        disadvantages: [
          "Deep nesting becomes hard to read",
          "Missing break in switch causes fall-through bugs",
          "else-if ladders get slow with too many conditions",
          "switch cannot test ranges or floats",
        ],

        realWorldExamples: [
          "Result portals assign grades with else-if ladders",
          "ATM menus use switch-case (1-Withdraw, 2-Balance…)",
          "E-commerce applies coupons only if cart value qualifies",
          "Exam portals block submission if time is over",
        ],

        bestPractices: [
          "Always use braces { } even for a single statement.",
          "Order else-if conditions from highest to lowest range.",
          "Put break at the end of every switch case.",
          "Keep nesting to a maximum of two levels.",
        ],

        commonMistakes: [
          "Using = instead of == inside the condition.",
          "Putting a semicolon right after if (condition); — body never connects.",
          "Forgetting break in switch cases.",
          "Overlapping ranges in an else-if ladder.",
        ],

        summary:
          "Conditional statements control which code runs: if for single checks, if-else for two paths, else-if ladder for ranges, nested if for dependent checks, and switch for fixed menu choices.",

        practiceQuestions: [
          "Differentiate between if-else and switch-case.",
          "What is the purpose of break in a switch statement?",
          "What happens if you write a semicolon after if (condition)?",
          "When should you prefer an else-if ladder over nested if?",
          "Can switch work with float values? Why or why not?",
        ],

        importantQuestions: [
          "Explain if, if-else, else-if ladder, and nested if with examples.",
          "Write a C program to print grades for given marks using an else-if ladder.",
          "Write a menu-driven calculator program using switch-case.",
        ],

        relatedTopics: [
          { title: "Loops in C", path: `${BASE}/loops-in-c` },
          { title: "Operators in C", path: `${BASE}/operators-in-c` },
          { title: "Functions in C", path: `${BASE}/functions-in-c` },
        ],
      },

      /* ==================================================
         UNIT 2 — TOPIC 7
         ================================================== */
      "loops-in-c": {
        title: "Loops in C (for, while, do-while)",
        readingTime: "16 min read",
        difficulty: "Intermediate",
        lastUpdated: "Updated recently",

        introduction:
          "Printing a table, processing 60 students' marks, checking every record in a file — repetition is everywhere. Loops run a block of code again and again so you never copy-paste the same line 100 times.",

        definition:
          "A loop is a control statement that repeatedly executes a block of code as long as a given condition remains true. C provides three loops: for, while, and do-while.",

        learningObjectives: [
          "Write programs using for, while, and do-while loops.",
          "Choose the correct loop for a given situation.",
          "Control loops with break and continue.",
          "Trace a loop and predict its output and iteration count.",
        ],

        prerequisites: [
          "Completed: Conditional Statements",
          "Understanding of relational operators",
        ],

        theory: [
          {
            heading: "The for Loop",
            content:
              "for packs initialization, condition, and update in one line: for (int i = 1; i <= 10; i++). It is the best choice when you know exactly how many times to repeat — like printing a table from 1 to 10.",
          },
          {
            heading: "while and do-while",
            content:
              "while checks the condition first and runs only if it is true — best when repetitions are unknown (read until password is correct). do-while runs the body once, then checks the condition — guaranteeing at least one execution, perfect for menus that must show once.",
          },
          {
            heading: "break and continue",
            content:
              "break exits the loop immediately — used when the answer is found early. continue skips the rest of the current iteration and jumps to the next one — used to skip invalid data, like negative marks, without stopping the loop.",
          },
        ],

        flowSteps: [
          "Initialize the loop counter",
          "Check the condition — if false, exit",
          "Execute the loop body",
          "Update the counter (i++)",
          "Repeat from step 2 until condition fails",
        ],

        syntax: `for (int i = 1; i <= 5; i++) { /* code */ }

while (condition) { /* code */ }

do { /* runs at least once */ } while (condition);`,

        codeExample: `#include <stdio.h>

int main() {
  int n = 5;

  printf("--- LearnSphere Table Generator ---\n");
  for (int i = 1; i <= 10; i++) {
    printf("%d x %2d = %d\n", n, i, n * i);
  }
  return 0;
}`,

        output: `--- LearnSphere Table Generator ---
5 x  1 = 5
5 x  2 = 10
5 x  3 = 15
5 x  4 = 20
5 x  5 = 25
5 x  6 = 30
5 x  7 = 35
5 x  8 = 40
5 x  9 = 45
5 x 10 = 50`,

        explanation: [
          "int i = 1 initializes the counter once, at the start.",
          "i <= 10 is checked before every iteration.",
          "The body prints one line of the table.",
          "i++ increases the counter after each iteration.",
          "When i becomes 11, the condition fails and the loop stops.",
        ],

        advantages: [
          "Removes repetitive code completely",
          "Handles any amount of data with the same code",
          "for loop keeps all controls visible in one line",
          "break and continue give fine control",
        ],

        disadvantages: [
          "A wrong condition creates an infinite loop",
          "Off-by-one errors (<= vs <) are very common",
          "Nested loops are hard to trace for beginners",
          "Forgetting the update statement hangs the program",
        ],

        realWorldExamples: [
          "Printing multiplication tables and number patterns",
          "Processing every student's marks in a class",
          "Password retry systems (3 attempts)",
          "Games re-draw the screen inside a loop every frame",
        ],

        bestPractices: [
          "Use for when the count is known, while when it is not.",
          "Always make sure the condition will eventually become false.",
          "Keep loop bodies short — move big logic into functions.",
          "Name counters i, j, k only for small loops; else use meaningful names.",
        ],

        commonMistakes: [
          "Semicolon after for (...); — loop body runs only once.",
          "Forgetting i++ inside while loops — infinite loop.",
          "Using <= instead of < and reading one extra element.",
          "Modifying the loop counter inside the body by accident.",
        ],

        summary:
          "Loops repeat code: for (known counts), while (check first), do-while (run first, check later). break exits early and continue skips an iteration. Every loop needs initialization, a condition, and an update.",

        practiceQuestions: [
          "Differentiate between while and do-while loops.",
          "Write the three parts of a for loop statement.",
          "What is an infinite loop? Give one example.",
          "Differentiate between break and continue.",
          "How many times does for(i=0; i<5; i++) run?",
        ],

        importantQuestions: [
          "Explain for, while, and do-while loops with syntax and examples.",
          "Write a C program to print the factorial of a number using a loop.",
          "Write a C program to print the Fibonacci series up to n terms.",
          "Explain break and continue with a suitable program.",
        ],

        relatedTopics: [
          { title: "Conditional Statements", path: `${BASE}/conditional-statements` },
          { title: "Arrays in C", path: `${BASE}/arrays-in-c` },
          { title: "Functions in C", path: `${BASE}/functions-in-c` },
        ],
      },

      /* ==================================================
         UNIT 3 — TOPIC 8
         ================================================== */
      "functions-in-c": {
        title: "Functions in C",
        readingTime: "15 min read",
        difficulty: "Intermediate",
        lastUpdated: "Updated recently",

        introduction:
          "Imagine writing the same discount calculation in 20 places of a shopping app. Functions solve this — write the logic once, give it a name, and call it anywhere. They are the building blocks of clean, large programs.",

        definition:
          "A function is a self-contained block of code that performs a specific task. It is defined once and can be called (used) multiple times from anywhere in the program.",

        learningObjectives: [
          "Define a function with declaration, definition, and call.",
          "Pass arguments and receive return values.",
          "Identify the four types of functions.",
          "Differentiate between library and user-defined functions.",
        ],

        prerequisites: [
          "Completed: Loops in C",
          "Understanding of data types and return statement",
        ],

        theory: [
          {
            heading: "Declaration, Definition, Call",
            content:
              "A function has three parts. Declaration (prototype) tells the compiler the name, inputs, and output type before main: int add(int, int);. Definition contains the actual code. Call is where you use it: int result = add(5, 3);.",
          },
          {
            heading: "Arguments and Return Value",
            content:
              "Arguments are the inputs you pass inside parentheses. The return statement sends one value back to the caller. A function with void return type returns nothing — like a function that only prints a welcome banner.",
          },
          {
            heading: "The Four Types of Functions",
            content:
              "(1) No arguments, no return — void greet(). (2) Arguments, no return — void printSquare(int n). (3) No arguments, with return — int getChoice(). (4) Arguments with return — int add(int a, int b) — the most common and most useful type.",
          },
        ],

        flowSteps: [
          "Declare the function prototype above main()",
          "Call the function from main() with arguments",
          "Control jumps into the function definition",
          "The function executes and returns a value",
          "Control returns to the exact call point in main()",
        ],

        syntax: `returnType name(parameters) {
  // body
  return value;
}

// Example
int add(int a, int b) {
  return a + b;
}`,

        codeExample: `#include <stdio.h>

// Function declaration
float calculatePercentage(int total, int maxMarks);

int main() {
  int total = 450, maxMarks = 500;
  float result = calculatePercentage(total, maxMarks);

  printf("--- LearnSphere Percentage Calculator ---\n");
  printf("Total Marks : %d / %d\n", total, maxMarks);
  printf("Percentage  : %.2f%%\n", result);
  return 0;
}

// Function definition
float calculatePercentage(int total, int maxMarks) {
  return (total * 100.0) / maxMarks;
}`,

        output: `--- LearnSphere Percentage Calculator ---
Total Marks : 450 / 500
Percentage  : 90.00%`,

        explanation: [
          "The prototype on top tells main() that calculatePercentage exists.",
          "main() calls it with total = 450 and maxMarks = 500.",
          "Inside the function, (total * 100.0) / maxMarks computes 90.0.",
          "return sends 90.0 back, which gets stored in result.",
          "Using 100.0 (float) avoids integer division.",
        ],

        advantages: [
          "Write once, use many times — no duplication",
          "Big problems split into small, testable pieces",
          "Teams can work on different functions separately",
          "Debugging is faster — test each function alone",
          "Library functions like printf() save enormous effort",
        ],

        disadvantages: [
          "Function calls add slight execution overhead",
          "Too many small functions can confuse navigation",
          "Beginners mix up declaration and definition",
          "A function can return only one value directly",
        ],

        realWorldExamples: [
          "Banking apps have functions like deposit() and withdraw()",
          "Every printf() and scanf() you use is a library function",
          "Games split logic into movePlayer(), checkScore(), drawScreen()",
          "College projects are graded on proper function usage",
        ],

        bestPractices: [
          "Name functions as verbs: calculateTotal, printReport.",
          "One function = one job.",
          "Always write the prototype before main().",
          "Keep parameter lists short — three or fewer is ideal.",
        ],

        commonMistakes: [
          "Forgetting the return statement in a non-void function.",
          "Mismatch between prototype and definition parameters.",
          "Calling a function before declaring it.",
          "Trying to return multiple values with one return.",
        ],

        summary:
          "Functions are reusable named blocks of code with three parts — declaration, definition, and call. Arguments go in, one return value comes out. They keep large programs organized and testable.",

        practiceQuestions: [
          "What is a function? Write its three parts.",
          "List the four types of functions with examples.",
          "Differentiate between arguments and return value.",
          "What is a function prototype and why is it needed?",
          "Differentiate between library and user-defined functions.",
        ],

        importantQuestions: [
          "Explain function declaration, definition, and call with a program.",
          "Write a C program with a function to check whether a number is prime.",
          "Explain the four categories of functions with one example each.",
        ],

        relatedTopics: [
          { title: "Arrays in C", path: `${BASE}/arrays-in-c` },
          { title: "Loops in C", path: `${BASE}/loops-in-c` },
          { title: "Pointers in C", path: `${BASE}/pointers-in-c` },
        ],
      },

      /* ==================================================
         UNIT 3 — TOPIC 9
         ================================================== */
      "arrays-in-c": {
        title: "Arrays in C",
        readingTime: "15 min read",
        difficulty: "Intermediate",
        lastUpdated: "Updated recently",

        introduction:
          "Storing marks of 60 students needs 60 variables — impossible to manage. An array stores many values of the same type under one name, and a loop can process all of them in seconds.",

        definition:
          "An array is a collection of elements of the same data type, stored in contiguous (side-by-side) memory locations and accessed using a single name with an index number.",

        learningObjectives: [
          "Declare, initialize, and traverse one-dimensional arrays.",
          "Access elements safely using index numbers.",
          "Perform searching, summing, and finding maximum in arrays.",
          "Understand the basics of two-dimensional arrays.",
        ],

        prerequisites: [
          "Completed: Loops in C",
          "Understanding of int and float data types",
        ],

        theory: [
          {
            heading: "Declaration and Indexing",
            content:
              "int marks[5]; creates space for 5 integers. Indexes start at 0, so valid positions are marks[0] to marks[4]. marks[5] does not exist — accessing it is an out-of-bounds error that reads garbage memory without any warning.",
          },
          {
            heading: "Initialization and Traversal",
            content:
              "You can initialize at declaration: int marks[5] = {90, 85, 78, 92, 88};. A for loop from 0 to size-1 visits every element — this pattern is called traversal and appears in almost every array program you will ever write.",
          },
          {
            heading: "2D Arrays",
            content:
              "A two-dimensional array is a table of rows and columns: int matrix[3][3];. Use two nested loops to process it — the outer loop moves through rows, the inner through columns. Perfect for seating charts, game boards, and mark sheets of multiple subjects.",
          },
        ],

        flowSteps: [
          "Declare the array with a fixed size",
          "Fill elements using a loop or initializer list",
          "Traverse with for (i = 0; i < size; i++)",
          "Process each element — sum, compare, print",
          "Never access index >= size",
        ],

        syntax: `int marks[5];                    // declaration
int marks[5] = {90, 85, 78, 92, 88};  // with values
marks[0] = 95;                         // update first element

for (int i = 0; i < 5; i++) {
  printf("%d ", marks[i]);             // traversal
}`,

        codeExample: `#include <stdio.h>

int main() {
  int marks[5] = {90, 85, 78, 92, 88};
  int sum = 0, highest = marks[0];

  for (int i = 0; i < 5; i++) {
    sum += marks[i];
    if (marks[i] > highest) {
      highest = marks[i];
    }
  }

  printf("--- LearnSphere Class Analysis ---\n");
  printf("Students  : 5\n");
  printf("Average   : %.1f\n", sum / 5.0);
  printf("Highest   : %d\n", highest);
  return 0;
}`,

        output: `--- LearnSphere Class Analysis ---
Students  : 5
Average   : 86.6
Highest   : 92`,

        explanation: [
          "marks[5] stores five integers in one continuous block.",
          "The loop adds every element into sum with +=.",
          "Inside the same loop, if finds the highest mark.",
          "sum / 5.0 divides by a float to keep the decimal average.",
        ],

        advantages: [
          "One name manages thousands of values",
          "Loops process whole arrays in a few lines",
          "Contiguous memory makes access very fast",
          "Foundation for matrices, tables, and data structures",
        ],

        disadvantages: [
          "Size is fixed at declaration — cannot grow later",
          "No bounds checking — marks[100] compiles but crashes",
          "Inserting in the middle requires shifting elements",
          "All elements must share one data type",
        ],

        realWorldExamples: [
          "Mark sheets store every student's score in an array",
          "Voting machines count candidates using arrays",
          "Images are 2D arrays of pixel values",
          "Leaderboards sort score arrays in games",
        ],

        bestPractices: [
          "Store the size in a variable or #define instead of hardcoding.",
          "Loop from 0 to size - 1 — always.",
          "Initialize arrays to zero: int a[10] = {0};.",
          "Pass the array size to functions along with the array.",
        ],

        commonMistakes: [
          "Accessing index equal to size — off-by-one error.",
          "Forgetting that indexes start at 0, not 1.",
          "Using an uninitialized array element in calculations.",
          "Trying to assign one whole array to another with =.",
        ],

        summary:
          "Arrays store many same-type values under one name, accessed by zero-based indexes. Combined with loops, they power searching, summing, and finding maximums. 2D arrays extend the idea to rows and columns.",

        practiceQuestions: [
          "What is an array? How is it declared in C?",
          "Why does array indexing start from 0?",
          "What happens if you access marks[5] in int marks[5]?",
          "Write the syntax of a 2D array declaration.",
          "How do you find the largest element of an array?",
        ],

        importantQuestions: [
          "Explain one-dimensional arrays with a program to find sum and average.",
          "Write a C program to find the maximum and minimum element of an array.",
          "Explain 2D arrays with a matrix addition program.",
        ],

        relatedTopics: [
          { title: "Strings in C", path: `${BASE}/strings-in-c` },
          { title: "Loops in C", path: `${BASE}/loops-in-c` },
          { title: "Pointers in C", path: `${BASE}/pointers-in-c` },
        ],
      },

      /* ==================================================
         UNIT 3 — TOPIC 10
         ================================================== */
      "strings-in-c": {
        title: "Strings in C",
        readingTime: "13 min read",
        difficulty: "Intermediate",
        lastUpdated: "Updated recently",

        introduction:
          "Names, addresses, messages, passwords — real programs handle text everywhere. In C, a string is simply an array of characters ending with a special invisible marker.",

        definition:
          "A string in C is a one-dimensional array of characters terminated by a null character '\\0', which marks the end of the string in memory.",

        learningObjectives: [
          "Declare and initialize strings correctly.",
          "Read and print strings using scanf() and printf().",
          "Use string.h functions: strlen, strcpy, strcat, strcmp.",
          "Understand the role of the null terminator '\\0'.",
        ],

        prerequisites: [
          "Completed: Arrays in C",
          "Understanding of the char data type",
        ],

        theory: [
          {
            heading: "Strings Are Character Arrays",
            content:
              "char name[20] = \"Riya\"; stores 'R', 'i', 'y', 'a', and then '\\0' automatically. The null character is what tells printf() where the text ends. Without it, the program keeps reading memory and prints garbage.",
          },
          {
            heading: "Reading Strings",
            content:
              "scanf(\"%s\", name) reads one word — it stops at the first space. Notice there is no & with arrays, because the array name itself is an address. For full lines with spaces, advanced input like fgets() is used.",
          },
          {
            heading: "The string.h Library",
            content:
              "Include <string.h> to unlock ready-made tools: strlen(s) returns length, strcpy(dest, src) copies, strcat(a, b) joins two strings, and strcmp(a, b) compares them — returning 0 when both are exactly equal.",
          },
        ],

        flowSteps: [
          "Declare a char array with enough space",
          "Store text — the '\\0' is added automatically",
          "Process using loops or string.h functions",
          "Compare strings only with strcmp, never ==",
          "Print with the %s format specifier",
        ],

        syntax: `char city[20] = "Surat";
char name[30];

scanf("%s", name);        // no & needed
printf("%s", name);

strlen(name);             // length
strcpy(a, b);             // copy
strcat(a, b);             // join
strcmp(a, b);             // 0 means equal`,

        codeExample: `#include <stdio.h>
#include <string.h>

int main() {
  char first[20] = "Learn";
  char last[20] = "Sphere";
  char password[20] = "learnsphere123";

  strcat(first, last);   // join

  printf("--- LearnSphere String Tools ---\n");
  printf("Platform : %s\n", first);
  printf("Length   : %d letters\n", strlen(first));
  printf("Login    : %s\n",
         strcmp(password, "learnsphere123") == 0
           ? "Access Granted" : "Access Denied");
  return 0;
}`,

        output: `--- LearnSphere String Tools ---
Platform : LearnSphere
Length   : 11 letters
Login    : Access Granted`,

        explanation: [
          "strcat(first, last) joins the two words into \"LearnSphere\".",
          "strlen counts 11 characters — the '\\0' is not counted.",
          "strcmp returns 0 because both passwords match exactly.",
          "The ternary operator prints the login result based on that 0.",
        ],

        advantages: [
          "Simple syntax — just a char array",
          "string.h provides ready-made powerful functions",
          "Fast, direct memory-level text processing",
          "Same concept builds into C++ strings and Java later",
        ],

        disadvantages: [
          "No real string type — everything is manual arrays",
          "Buffer overflow if text exceeds the array size",
          "== compares addresses, not text — a famous trap",
          "No built-in safety; one missing '\\0' breaks output",
        ],

        realWorldExamples: [
          "Login systems compare passwords with strcmp",
          "Search bars scan name arrays for matches",
          "SMS and notification systems store messages as strings",
          "Student databases keep names in char arrays",
        ],

        bestPractices: [
          "Always leave one extra slot for '\\0' — name[21] for 20 letters.",
          "Use strcpy and strcmp instead of = and == for strings.",
          "Check array size before strcat to avoid overflow.",
          "Include <string.h> at the top whenever you handle text.",
        ],

        commonMistakes: [
          "Comparing strings with == instead of strcmp().",
          "Copying with dest = src instead of strcpy(dest, src).",
          "Using scanf(\"%s\", &name) — the & is wrong for arrays.",
          "Declaring exactly sized arrays and losing space for '\\0'.",
        ],

        summary:
          "A C string is a char array ending with '\\0'. Read with scanf %s, print with printf %s, and process with string.h functions — strlen, strcpy, strcat, strcmp. Never compare strings with ==.",

        practiceQuestions: [
          "How is a string stored in C memory?",
          "What is the role of the null character '\\0'?",
          "Why does scanf not need & for string input?",
          "What does strcmp return when two strings are equal?",
          "Differentiate between strcpy and strcat.",
        ],

        importantQuestions: [
          "Explain string handling functions strlen, strcpy, strcat, and strcmp with examples.",
          "Write a C program to check whether a string is a palindrome.",
          "Write a C program to count vowels in a given string.",
        ],

        relatedTopics: [
          { title: "Arrays in C", path: `${BASE}/arrays-in-c` },
          { title: "Pointers in C", path: `${BASE}/pointers-in-c` },
          { title: "Functions in C", path: `${BASE}/functions-in-c` },
        ],
      },

      /* ==================================================
         UNIT 4 — TOPIC 11
         ================================================== */
      "pointers-in-c": {
        title: "Pointers in C",
        readingTime: "18 min read",
        difficulty: "Advanced",
        lastUpdated: "Updated recently",

        introduction:
          "Pointers are C's superpower — and its most feared topic. A pointer does not store data; it stores the address of data. Master this one idea and file handling, dynamic memory, and data structures all become easy.",

        definition:
          "A pointer is a variable that stores the memory address of another variable. The & operator gives the address of a variable, and the * operator accesses the value stored at that address.",

        learningObjectives: [
          "Declare and initialize pointer variables.",
          "Use & (address-of) and * (dereference) operators.",
          "Modify a variable's value through its pointer.",
          "Apply pointers in functions — the swap technique.",
        ],

        prerequisites: [
          "Completed: Functions and Arrays",
          "Idea of memory as numbered storage boxes",
        ],

        theory: [
          {
            heading: "Address and Value",
            content:
              "Every variable lives at a memory address, like a house number. int marks = 90; stores 90 at some address, say 1000. &marks gives 1000. A pointer int *p = &marks; stores that 1000, and *p reads or changes the 90 living there.",
          },
          {
            heading: "Declaration and Dereferencing",
            content:
              "int *p; declares a pointer to an int. Writing *p is called dereferencing — it means 'go to the address and touch the value'. So *p = 95; actually changes marks to 95, even though we never wrote the name marks.",
          },
          {
            heading: "Why Functions Need Pointers",
            content:
              "C passes copies of values to functions, so a function cannot change your original variable. Pass the address instead — void swap(int *a, int *b) — and the function edits the original memory directly. This is called call by reference.",
          },
        ],

        flowSteps: [
          "Declare a normal variable — it gets an address",
          "Declare a pointer of the matching type",
          "Store the address: p = &marks",
          "Read or change the value through *p",
          "Use pointers in functions to edit originals",
        ],

        syntax: `int marks = 90;
int *p = &marks;   // p holds the address of marks

printf("%d", *p);  // prints 90 (dereference)
*p = 95;           // changes marks to 95`,

        codeExample: `#include <stdio.h>

void swap(int *a, int *b) {
  int temp = *a;
  *a = *b;
  *b = temp;
}

int main() {
  int learnScore = 40, sphereScore = 90;

  printf("--- LearnSphere Score Swap ---\n");
  printf("Before: %d and %d\n", learnScore, sphereScore);

  swap(&learnScore, &sphereScore);   // send addresses

  printf("After : %d and %d\n", learnScore, sphereScore);
  return 0;
}`,

        output: `--- LearnSphere Score Swap ---
Before: 40 and 90
After : 90 and 40`,

        explanation: [
          "main() sends the addresses of the two variables using &.",
          "Inside swap, a and b are pointers holding those addresses.",
          "*a and *b dereference them, so the swap edits original memory.",
          "Back in main(), the two values are genuinely exchanged.",
        ],

        advantages: [
          "Functions can modify original variables",
          "Enable dynamic memory (malloc) and data structures",
          "Fast array and string processing without copying",
          "Direct hardware and memory access for system code",
        ],

        disadvantages: [
          "Hardest topic for beginners to visualize",
          "Uninitialized pointers crash programs (wild pointers)",
          "Wrong dereferencing corrupts memory silently",
          "Debugging pointer errors takes experience",
        ],

        realWorldExamples: [
          "Linked lists, trees, and graphs are built with pointers",
          "malloc() returns pointers for runtime memory",
          "Operating system kernels pass pointers everywhere",
          "Game engines share huge data through pointers, not copies",
        ],

        bestPractices: [
          "Always initialize pointers — use NULL if no address yet.",
          "Match the pointer type to the variable type (int * for int).",
          "Read declarations aloud: 'p is a pointer to int'.",
          "Draw address boxes on paper when logic gets confusing.",
        ],

        commonMistakes: [
          "Using *p before p holds any address.",
          "Confusing *p (value) with p (address) in printf.",
          "Passing values to swap instead of addresses.",
          "Believing int *p, q; makes both pointers — q is a plain int.",
        ],

        summary:
          "Pointers store addresses: & takes an address, * touches the value at that address. Passing addresses to functions (call by reference) lets them modify original variables — the key to swap, dynamic memory, and data structures.",

        practiceQuestions: [
          "What is a pointer? How is it declared?",
          "Explain the & and * operators with examples.",
          "What is dereferencing?",
          "Why can a normal function not swap two variables?",
          "What is a NULL pointer?",
        ],

        importantQuestions: [
          "Explain pointers with a program to swap two numbers using call by reference.",
          "Explain pointer declaration, initialization, and dereferencing in detail.",
          "Write a note on pointers and their advantages in C.",
        ],

        relatedTopics: [
          { title: "File Handling", path: `${BASE}/file-handling-in-c` },
          { title: "Arrays in C", path: `${BASE}/arrays-in-c` },
          { title: "Functions in C", path: `${BASE}/functions-in-c` },
        ],
      },

      /* ==================================================
         UNIT 4 — TOPIC 12
         ================================================== */
      "file-handling-in-c": {
        title: "File Handling in C",
        readingTime: "15 min read",
        difficulty: "Advanced",
        lastUpdated: "Updated recently",

        introduction:
          "Variables forget everything when the program closes. Files remember forever. File handling lets your C programs save results, read records, and build real applications like student databases and report generators.",

        definition:
          "File handling in C is the process of creating, opening, reading, writing, and closing files stored on disk, using the FILE pointer and library functions like fopen(), fprintf(), fscanf(), and fclose().",

        learningObjectives: [
          "Open files in the correct mode: r, w, a.",
          "Write data into files with fprintf().",
          "Read data back using fscanf().",
          "Close files properly with fclose() and explain why it matters.",
        ],

        prerequisites: [
          "Completed: Pointers in C (FILE * is a pointer)",
          "Understanding of printf and scanf",
        ],

        theory: [
          {
            heading: "The FILE Pointer",
            content:
              "C connects to a disk file through a special pointer: FILE *fp;. fopen(\"data.txt\", \"w\") opens the file and returns the connection. Every read or write then happens through fp — never through the file name directly.",
          },
          {
            heading: "File Modes",
            content:
              "\"r\" opens for reading — the file must exist. \"w\" opens for writing — creates the file or erases old content. \"a\" appends — new data adds at the end without deleting old data. Choosing the wrong mode is the most common file-handling bug.",
          },
          {
            heading: "Write, Read, Close",
            content:
              "fprintf(fp, ...) works exactly like printf but writes into the file. fscanf(fp, ...) reads from the file like scanf reads from the keyboard. fclose(fp) saves everything and releases the file — skipping it can lose data.",
          },
        ],

        flowSteps: [
          "Declare a FILE pointer",
          "Open the file with fopen() in the correct mode",
          "Check fp != NULL to confirm the file opened",
          "Write or read using fprintf / fscanf",
          "Always finish with fclose(fp)",
        ],

        syntax: `FILE *fp;

fp = fopen("data.txt", "w");   // open for writing
fprintf(fp, "Hello File");
fclose(fp);

fp = fopen("data.txt", "r");   // open for reading
fscanf(fp, "%s", word);
fclose(fp);`,

        codeExample: `#include <stdio.h>

int main() {
  FILE *fp;

  // STEP 1: Write result to a file
  fp = fopen("learnsphere_result.txt", "w");
  fprintf(fp, "Student: Aarav\\n");
  fprintf(fp, "Subject: C Programming\\n");
  fprintf(fp, "Marks: 92\\n");
  fclose(fp);

  // STEP 2: Read it back
  char line[50];
  fp = fopen("learnsphere_result.txt", "r");

  printf("--- Saved File Content ---\n");
  while (fscanf(fp, "%[^\\n]\\n", line) != EOF) {
    printf("%s\n", line);
  }
  fclose(fp);
  return 0;
}`,

        output: `--- Saved File Content ---
Student: Aarav
Subject: C Programming
Marks: 92`,

        explanation: [
          "fopen with \"w\" creates learnsphere_result.txt for writing.",
          "fprintf writes three lines into the file, just like printf.",
          "fclose saves the file to disk safely.",
          "The file reopens in \"r\" mode, and the loop reads each line until EOF (End Of File).",
        ],

        advantages: [
          "Data survives after the program ends",
          "Handles large data that cannot fit in memory",
          "Same fprintf/fscanf style you already know",
          "Forms the base of databases and report systems",
        ],

        disadvantages: [
          "Forgetting fclose can corrupt or lock files",
          "Wrong mode can erase important data instantly",
          "Text files are slower than binary for big data",
          "Error handling (NULL checks) is easy to forget",
        ],

        realWorldExamples: [
          "Result systems save mark sheets to files",
          "Attendance apps append daily records in \"a\" mode",
          "Log files record every event of a server",
          "Billing software stores invoices as text files",
        ],

        bestPractices: [
          "Always check if (fp == NULL) after fopen.",
          "Match every fopen with exactly one fclose.",
          "Use \"a\" mode when old data must be preserved.",
          "Use clear file names with extensions, like result.txt.",
        ],

        commonMistakes: [
          "Opening a file in \"w\" mode and erasing old data by accident.",
          "Writing with printf instead of fprintf — output goes to screen.",
          "Forgetting fclose, causing incomplete saved data.",
          "Reading a file in \"r\" mode that does not exist yet.",
        ],

        summary:
          "File handling makes data permanent: open with fopen() in r/w/a mode, process with fprintf()/fscanf(), and finish with fclose(). The FILE pointer fp is the bridge between your program and the disk.",

        practiceQuestions: [
          "What is a FILE pointer?",
          "Differentiate between \"r\", \"w\", and \"a\" modes.",
          "Why is fclose() important?",
          "What does fopen return if the file cannot open?",
          "What is EOF?",
        ],

        importantQuestions: [
          "Explain file opening modes with a program to write and read a file.",
          "Write a C program to store and display student records using files.",
          "Explain fprintf, fscanf, fopen, and fclose with syntax and examples.",
        ],

        relatedTopics: [
          { title: "Pointers in C", path: `${BASE}/pointers-in-c` },
          { title: "Strings in C", path: `${BASE}/strings-in-c` },
          { title: "Introduction to C", path: `${BASE}/introduction-to-c` },
        ],
      },
    },
  },
};