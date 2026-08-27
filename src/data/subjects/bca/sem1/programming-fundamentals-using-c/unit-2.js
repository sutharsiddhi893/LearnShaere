/* =========================================================
   BCA • SEM 1 • Programming Fundamentals Using C
   UNIT 2 — Basics of Programming
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
   TOPIC 1 — Structure of a C Program
========================================================= */

const structureOfCProgram = createTopic(
    "structure-of-a-c-program",
    "Structure of a C Program",

    [
        text(
            "C was developed by Dennis Ritchie at Bell Laboratories in 1972. Every C program follows a fixed structure made up of six sections. Understanding this structure makes it easy to read and write any C program."
        ),

        heading("The Six Sections"),

        code(
            `/* 1. Documentation Section */
// Program : Display a message
// Author  : Student
// Date    : 01-01-2025

/* 2. Link Section */
#include <stdio.h>

/* 3. Definition Section */
#define PI 3.14

/* 4. Global Declaration Section */
int counter = 0;

/* 5. Main Function Section */
int main()
{
    /* Declaration part */
    int number;

    /* Executable part */
    number = 10;
    printf("Value is %d", number);

    return 0;
}

/* 6. Subprogram Section */
void display()
{
    printf("Hello");
}`,
            "c",
            "The six sections of a C program"
        ),

        heading("Purpose of Each Section"),

        table(
            ["Section", "Purpose"],
            [
                ["Documentation", "Comments describing the program, author and date."],
                ["Link", "Includes header files using the #include directive."],
                ["Definition", "Defines symbolic constants using the #define directive."],
                ["Global Declaration", "Declares variables accessible throughout the program."],
                ["main()", "Execution always begins here. This section is compulsory."],
                ["Subprogram", "Contains user-defined functions called from main()."],
            ]
        ),

        note(
            "Only the main() function is compulsory in a C program. All other sections are optional.",
            "exam",
            "Frequently Asked"
        ),

        heading("Comments in C"),

        table(
            ["Type", "Syntax", "Use"],
            [
                ["Single line", "// comment", "Short note on one line"],
                ["Multi line", "/* comment */", "Explanation spanning several lines"],
            ]
        ),

        text(
            "Comments are ignored by the compiler and are removed by the preprocessor. They exist only to help humans understand the code."
        ),

        heading("Common Header Files"),

        table(
            ["Header File", "Purpose", "Example Functions"],
            [
                ["stdio.h", "Standard input and output", "printf, scanf, getchar"],
                ["conio.h", "Console input and output", "clrscr, getch"],
                ["math.h", "Mathematical operations", "sqrt, pow, abs"],
                ["string.h", "String handling", "strlen, strcpy, strcmp"],
                ["stdlib.h", "General utilities", "malloc, free, exit"],
                ["ctype.h", "Character testing", "isalpha, isdigit, toupper"],
            ]
        ),

        heading("Your First C Program"),

        code(
            `#include <stdio.h>

int main()
{
    printf("Hello, World!");
    return 0;
}`,
            "c",
            "hello.c"
        ),

        output(`Hello, World!`),

        heading("Understanding the Program"),

        table(
            ["Line", "Meaning"],
            [
                ["#include <stdio.h>", "Tells the preprocessor to include the standard I/O header file."],
                ["int main()", "The starting point of execution; int means it returns an integer."],
                ["{ }", "Curly braces mark the beginning and end of a block."],
                ["printf(...)", "A library function that displays output on the screen."],
                ["return 0;", "Returns 0 to the operating system, indicating success."],
            ]
        ),

        note(
            "Every statement in C must end with a semicolon. Forgetting it is the most common syntax error made by beginners.",
            "warning",
            "Common Mistake"
        ),

        keyPoints([
            "A C program has six sections but only main() is compulsory.",
            "Execution always begins from the main() function.",
            "The #include directive is handled by the preprocessor before compilation.",
            "Every C statement must end with a semicolon.",
        ]),
    ],

    {
        summary:
            "Learn the six sections that make up every C program, comments, header files, and your first program.",
        minutes: 9,
        tags: ["c", "structure", "important"],

        mcqs: [
            mcq(
                "Execution of a C program begins from:",
                ["The first function", "main()", "The last function", "#include"],
                1,
                "Execution always begins from the main() function."
            ),
            mcq(
                "Which section is compulsory in a C program?",
                ["Documentation", "Definition", "main()", "Subprogram"],
                2,
                "Only main() is compulsory; all other sections are optional."
            ),
            mcq(
                "Which header file is required for the printf() function?",
                ["conio.h", "math.h", "stdio.h", "string.h"],
                2,
                "printf() is declared in stdio.h."
            ),
            mcq(
                "C language was developed by:",
                ["James Gosling", "Dennis Ritchie", "Bjarne Stroustrup", "Guido van Rossum"],
                1,
                "Dennis Ritchie developed C at Bell Laboratories in 1972."
            ),
            mcq(
                "Comments in a C program are removed by the:",
                ["Compiler", "Linker", "Preprocessor", "Loader"],
                2,
                "The preprocessor removes comments before compilation begins."
            ),
        ],

        questions: [
            qa(
                "Explain the structure of a C program.",
                "A C program contains six sections. The documentation section holds comments about the program. The link section includes header files using #include. The definition section defines symbolic constants using #define. The global declaration section declares variables used throughout the program. The main() function section is compulsory and is where execution begins. The subprogram section contains user-defined functions.",
                5
            ),
            qa(
                "What are header files? Give any four examples.",
                "Header files contain declarations of library functions and are included using the #include directive. Examples are stdio.h for standard input and output, math.h for mathematical functions, string.h for string handling, and stdlib.h for general utilities such as memory allocation.",
                4
            ),
            qa(
                "Write a program to display Hello World and explain each line.",
                "The program is: #include <stdio.h> then int main() then printf with the text Hello World then return 0. The first line includes the standard input output header file. The main function is the starting point of execution. The printf function displays the text on the screen. The return 0 statement indicates successful completion to the operating system.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — Character Set, Tokens and Keywords
========================================================= */

const characterSetAndTokens = createTopic(
    "character-set-tokens-and-keywords",
    "Character Set, Tokens and Keywords",

    [
        heading("The C Character Set"),

        text(
            "The character set of C is the collection of characters that are allowed to be used while writing a program."
        ),

        table(
            ["Type", "Characters"],
            [
                ["Letters", "Uppercase A to Z and lowercase a to z"],
                ["Digits", "0 to 9"],
                ["Special characters", ", . ; : ? ' \" ( ) [ ] { } < > + - * / % ! & | ^ ~ # _ @ $"],
                ["White spaces", "Blank space, horizontal tab, new line, carriage return"],
            ]
        ),

        definition(
            "Token",
            "The smallest individual unit in a C program that has a meaning to the compiler."
        ),

        heading("Six Types of Tokens"),

        table(
            ["Token", "Description", "Example"],
            [
                ["Keyword", "Reserved word with a fixed meaning", "int, float, if, while"],
                ["Identifier", "Name given by the programmer", "total, marks1, _count"],
                ["Constant", "A value that never changes", "10, 3.14, 'A'"],
                ["String", "Sequence of characters in double quotes", '"Hello"'],
                ["Operator", "Symbol that performs an operation", "+ - * / ="],
                ["Special symbol", "Punctuation used in the language", "; { } ( ) ,"],
            ]
        ),

        heading("Keywords in C"),

        text(
            "C has 32 keywords. They are reserved words with a fixed meaning and cannot be used as variable names. All keywords must be written in lowercase."
        ),

        code(
            `auto      break     case      char
const     continue  default   do
double    else      enum      extern
float     for       goto      if
int       long      register  return
short     signed    sizeof    static
struct    switch    typedef   union
unsigned  void      volatile  while`,
            "c",
            "The 32 keywords of C"
        ),

        heading("Identifiers"),

        definition(
            "Identifier",
            "A name given by the programmer to a variable, function, array or any other user-defined item."
        ),

        heading("Rules for Constructing Identifiers"),

        list(
            [
                "The first character must be a letter or an underscore.",
                "Only letters, digits and the underscore are allowed.",
                "Keywords cannot be used as identifiers.",
                "C is case sensitive, so Total and total are two different names.",
                "No blank spaces or special symbols are permitted.",
                "The name should be meaningful and describe its purpose.",
            ],
            true
        ),

        table(
            ["Identifier", "Valid?", "Reason"],
            [
                ["total_marks", "Valid", "Contains letters and an underscore."],
                ["_count", "Valid", "May begin with an underscore."],
                ["marks1", "Valid", "Digits are allowed after the first character."],
                ["2marks", "Invalid", "Cannot begin with a digit."],
                ["float", "Invalid", "It is a keyword."],
                ["my marks", "Invalid", "Blank space is not allowed."],
                ["total-marks", "Invalid", "The hyphen is not allowed."],
            ]
        ),

        heading("Constants"),

        text(
            "A constant is a value that does not change during the execution of a program."
        ),

        table(
            ["Type", "Description", "Example"],
            [
                ["Integer constant", "Whole number without a decimal point", "100, -25, 0"],
                ["Real constant", "Number with a decimal point", "3.14, -0.5"],
                ["Character constant", "A single character in single quotes", "'A', '9'"],
                ["String constant", "Characters in double quotes", '"Hello"'],
            ]
        ),

        heading("Two Ways to Define a Constant"),

        code(
            `/* Using the #define directive */
#define PI 3.14159

/* Using the const keyword */
const float pi = 3.14159;

int main()
{
    printf("%f", PI);
    return 0;
}`,
            "c",
            "Defining constants"
        ),

        note(
            "The #define directive is handled by the preprocessor and creates a symbolic constant, while const creates a read-only variable that occupies memory.",
            "tip"
        ),

        keyPoints([
            "Tokens are the smallest meaningful units of a C program.",
            "C has exactly 32 keywords, all written in lowercase.",
            "An identifier cannot begin with a digit and cannot be a keyword.",
            "C is case sensitive.",
        ]),
    ],

    {
        summary:
            "Understand the C character set, the six token types, keywords, identifier rules and constants.",
        minutes: 10,
        tags: ["c", "tokens", "important"],

        mcqs: [
            mcq(
                "How many keywords are there in standard C?",
                ["30", "32", "34", "36"],
                1,
                "Standard C has 32 keywords."
            ),
            mcq(
                "Which of the following is a valid identifier?",
                ["2total", "float", "_sum", "my sum"],
                2,
                "An identifier may start with an underscore."
            ),
            mcq(
                "Which of the following is NOT a token in C?",
                ["Keyword", "Identifier", "Comment", "Operator"],
                2,
                "Comments are removed by the preprocessor and are not tokens."
            ),
            mcq(
                "In C, the names Total and total are:",
                ["The same", "Different", "Invalid", "Keywords"],
                1,
                "C is case sensitive, so they are two different identifiers."
            ),
            mcq(
                "Which directive is used to define a symbolic constant?",
                ["#include", "#define", "const", "#constant"],
                1,
                "The #define directive creates a symbolic constant."
            ),
        ],

        questions: [
            qa(
                "What are tokens? List the types of tokens in C.",
                "A token is the smallest individual unit in a C program that is meaningful to the compiler. C has six types of tokens: keywords, identifiers, constants, strings, operators and special symbols.",
                4
            ),
            qa(
                "State the rules for constructing identifiers in C.",
                "The first character must be a letter or an underscore. Only letters, digits and the underscore are allowed. Keywords cannot be used as identifiers. C is case sensitive so uppercase and lowercase names differ. Blank spaces and special symbols are not permitted, and the name should be meaningful.",
                4
            ),
            qa(
                "What is a constant? Explain its types with examples.",
                "A constant is a value that does not change during program execution. Integer constants are whole numbers such as 100. Real constants contain a decimal point such as 3.14. Character constants are single characters in single quotes such as the letter A. String constants are sequences of characters in double quotes such as Hello.",
                4
            ),
            qa(
                "Differentiate between #define and const.",
                "The #define directive is processed by the preprocessor and simply replaces the symbol with its value before compilation; it does not occupy memory and has no data type. The const keyword creates a read-only variable that has a data type and occupies memory, and it is handled by the compiler.",
                3
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — Data Types and Variables
========================================================= */

const dataTypesAndVariables = createTopic(
    "data-types-and-variables",
    "Data Types and Variables",

    [
        definition(
            "Data Type",
            "A specification that tells the compiler what kind of data a variable will hold and how much memory to reserve for it."
        ),

        definition(
            "Variable",
            "A named memory location whose value can change during the execution of a program."
        ),

        heading("Classification of Data Types"),

        table(
            ["Category", "Types"],
            [
                ["Primary or Basic", "int, char, float, double, void"],
                ["Derived", "array, pointer, function"],
                ["User-defined", "structure, union, enum, typedef"],
            ]
        ),

        heading("Primary Data Types"),

        table(
            ["Data Type", "Size", "Range", "Format Specifier"],
            [
                ["char", "1 byte", "-128 to 127", "%c"],
                ["int", "2 or 4 bytes", "-32,768 to 32,767 for 2 bytes", "%d"],
                ["float", "4 bytes", "1.2E-38 to 3.4E+38", "%f"],
                ["double", "8 bytes", "2.3E-308 to 1.7E+308", "%lf"],
                ["void", "0 bytes", "No value", "None"],
            ]
        ),

        heading("Type Modifiers"),

        text(
            "Modifiers are keywords placed before a basic data type to change its size or the range of values it can store."
        ),

        table(
            ["Modifier", "Effect", "Example", "Size"],
            [
                ["short", "Reduces the size", "short int a;", "2 bytes"],
                ["long", "Increases the size", "long int b;", "4 or 8 bytes"],
                ["signed", "Allows negative values, the default", "signed int c;", "Same as int"],
                ["unsigned", "Allows only non-negative values", "unsigned int d;", "Same as int"],
            ]
        ),

        table(
            ["Declaration", "Size", "Range"],
            [
                ["short int", "2 bytes", "-32,768 to 32,767"],
                ["unsigned short int", "2 bytes", "0 to 65,535"],
                ["long int", "4 bytes", "-2,147,483,648 to 2,147,483,647"],
                ["unsigned long int", "4 bytes", "0 to 4,294,967,295"],
                ["unsigned char", "1 byte", "0 to 255"],
            ]
        ),

        heading("Declaring Variables"),

        code(
            `data_type variable_name;
data_type variable1, variable2, variable3;
data_type variable_name = value;`,
            "c",
            "Syntax"
        ),

        heading("Rules for Declaring Variables"),

        list(
            [
                "A variable must be declared before it is used.",
                "The variable name must follow the rules of identifiers.",
                "Several variables of the same type may be declared in one statement.",
                "A variable may be initialised at the time of declaration.",
                "Two variables in the same scope cannot have the same name.",
            ],
            true
        ),

        heading("A Complete Example"),

        code(
            `#include <stdio.h>

int main()
{
    int    rollNo   = 101;      /* integer     */
    float  marks    = 87.5;     /* real number */
    char   grade    = 'A';      /* character   */
    double average  = 82.3456;  /* long real   */

    printf("Roll No  : %d\\n", rollNo);
    printf("Marks    : %.2f\\n", marks);
    printf("Grade    : %c\\n", grade);
    printf("Average  : %.4lf\\n", average);

    return 0;
}`,
            "c",
            "Using different data types"
        ),

        output(`Roll No  : 101
Marks    : 87.50
Grade    : A
Average  : 82.3456`),

        heading("Finding the Size of a Data Type"),

        code(
            `#include <stdio.h>

int main()
{
    printf("char   : %d bytes\\n", sizeof(char),;
    printf("int    : %d bytes\\n", sizeof(int),;
    printf("float  : %d bytes\\n", sizeof(float),;
    printf("double : %d bytes\\n", sizeof(double),;

    return 0;
}`,
            "c",
            "Using the sizeof operator"
        ),

        output(`char   : 1 bytes
int    : 4 bytes
float  : 4 bytes
double : 8 bytes`),

        heading("Storage Classes"),

        table(
            ["Storage Class", "Storage", "Default Value", "Scope", "Lifetime"],
            [
                ["auto", "Memory", "Garbage", "Within the block", "Until the block ends"],
                ["register", "CPU register", "Garbage", "Within the block", "Until the block ends"],
                ["static", "Memory", "Zero", "Within the block", "Whole program"],
                ["extern", "Memory", "Zero", "Whole program", "Whole program"],
            ]
        ),

        note(
            "The size of an int is 2 bytes on old 16-bit compilers such as Turbo C and 4 bytes on modern 32-bit and 64-bit compilers. Always use sizeof(int) to check the actual size on your machine.",
            "tip"
        ),

        keyPoints([
            "Data types are classified as primary, derived and user-defined.",
            "int uses %d, float uses %f, char uses %c and double uses %lf.",
            "The modifiers short, long, signed and unsigned change size or range.",
            "The sizeof operator returns the size of a data type in bytes.",
        ]),
    ],

    {
        summary:
            "Learn C data types, their sizes and ranges, type modifiers, variable declaration and storage classes.",
        minutes: 12,
        tags: ["c", "data-types", "important"],

        mcqs: [
            mcq(
                "Which format specifier is used for a float?",
                ["%d", "%c", "%f", "%s"],
                2,
                "%f is used for float values."
            ),
            mcq(
                "What is the size of a char in C?",
                ["1 byte", "2 bytes", "4 bytes", "8 bytes"],
                0,
                "A char always occupies exactly 1 byte."
            ),
            mcq(
                "Which of these is a user-defined data type?",
                ["int", "array", "structure", "float"],
                2,
                "A structure is a user-defined data type."
            ),
            mcq(
                "The range of an unsigned char is:",
                ["-128 to 127", "0 to 255", "0 to 127", "-255 to 255"],
                1,
                "An unsigned char stores values from 0 to 255."
            ),
            mcq(
                "Which storage class has a default value of zero?",
                ["auto", "register", "static", "None"],
                2,
                "Static variables are initialised to zero by default."
            ),
            mcq(
                "The sizeof operator returns the size in:",
                ["Bits", "Bytes", "Words", "Kilobytes"],
                1,
                "The sizeof operator returns the size in bytes."
            ),
        ],

        questions: [
            qa(
                "Explain the primary data types in C with their size and range.",
                "The char type occupies 1 byte and stores values from -128 to 127. The int type occupies 2 or 4 bytes and stores whole numbers, with a range of -32,768 to 32,767 for 2 bytes. The float type occupies 4 bytes and stores real numbers up to about 3.4E+38. The double type occupies 8 bytes and stores larger real numbers. The void type has no value and is used for functions that return nothing.",
                5
            ),
            qa(
                "What are type modifiers? Explain with examples.",
                "Type modifiers are keywords that alter the size or range of basic data types. The short modifier reduces the size, long increases it, signed allows negative values and is the default, and unsigned allows only non-negative values. For example, unsigned int a; stores only non-negative integers, and long int b; stores a wider range of whole numbers.",
                4
            ),
            qa(
                "What is a variable? State the rules for declaring variables.",
                "A variable is a named memory location whose value can change during program execution. It must be declared before use, its name must follow identifier rules, several variables of the same type may be declared together, it may be initialised at declaration, and two variables in the same scope cannot share a name.",
                4
            ),
            qa(
                "Explain storage classes in C.",
                "The auto class stores variables in memory with a garbage default value and a scope limited to the block. The register class requests storage in a CPU register for faster access. The static class stores the variable in memory with a default value of zero and retains its value for the whole program. The extern class declares a variable that is defined elsewhere and is available throughout the program.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — Input and Output Functions
========================================================= */

const inputOutputFunctions = createTopic(
    "input-and-output-functions",
    "Input and Output Functions",

    [
        text(
            "C does not have built-in input and output statements. Instead it provides library functions declared in the header file stdio.h to read input from the keyboard and display output on the screen."
        ),

        heading("Classification of I/O Functions"),

        table(
            ["Category", "Functions", "Description"],
            [
                ["Formatted", "printf(), scanf()", "Use format specifiers and handle all data types."],
                ["Unformatted", "getchar(), putchar(), gets(), puts()", "Work only with characters and strings."],
            ]
        ),

        heading("The printf() Function"),

        code(
            `printf("format string", variable1, variable2, ...);`,
            "c",
            "Syntax"
        ),

        code(
            `#include <stdio.h>

int main()
{
    int   age    = 20;
    float height = 5.8;
    char  grade  = 'A';

    printf("Age    : %d\\n", age);
    printf("Height : %.1f\\n", height);
    printf("Grade  : %c\\n", grade);
    printf("All    : %d %.1f %c\\n", age, height, grade);

    return 0;
}`,
            "c",
            "Using printf()"
        ),

        output(`Age    : 20
Height : 5.8
Grade  : A
All    : 20 5.8 A`),

        heading("Format Specifiers"),

        table(
            ["Specifier", "Used For"],
            [
                ["%d or %i", "Integer"],
                ["%f", "Float"],
                ["%lf", "Double"],
                ["%c", "Single character"],
                ["%s", "String"],
                ["%u", "Unsigned integer"],
                ["%ld", "Long integer"],
                ["%o", "Octal number"],
                ["%x", "Hexadecimal number"],
                ["%e", "Scientific notation"],
                ["%%", "Prints a percent sign"],
            ]
        ),

        heading("The scanf() Function"),

        code(
            `scanf("format string", &variable1, &variable2, ...);`,
            "c",
            "Syntax"
        ),

        code(
            `#include <stdio.h>

int main()
{
    int   age;
    float height;

    printf("Enter your age    : ");
    scanf("%d", &age);

    printf("Enter your height : ");
    scanf("%f", &height);

    printf("Age = %d, Height = %.1f", age, height);

    return 0;
}`,
            "c",
            "Using scanf()"
        ),

        output(`Enter your age    : 20
Enter your height : 5.8
Age = 20, Height = 5.8`),

        note(
            "The scanf() function requires the address-of operator & before variable names. Forgetting it is the most common beginner error in C and usually causes the program to crash.",
            "warning",
            "Common Mistake"
        ),

        heading("Field Width Specification"),

        code(
            `printf("%5d", 42);      /* prints    42 with 3 leading spaces  */
printf("%-5d|", 42);    /* prints 42   | left aligned            */
printf("%8.2f", 3.14159); /* prints     3.14                     */
printf("%.3f", 3.14159);  /* prints 3.142                        */`,
            "c",
            "Controlling the width of output"
        ),

        heading("Unformatted I/O Functions"),

        table(
            ["Function", "Purpose"],
            [
                ["getchar()", "Reads a single character from the keyboard."],
                ["putchar()", "Displays a single character on the screen."],
                ["gets()", "Reads a string including spaces; considered unsafe."],
                ["puts()", "Displays a string and moves to a new line."],
                ["getch()", "Reads a character without echoing it on the screen."],
                ["getche()", "Reads a character and echoes it on the screen."],
            ]
        ),

        code(
            `#include <stdio.h>

int main()
{
    char name[30];
    char ch;

    printf("Enter your name : ");
    gets(name);

    printf("Enter a letter  : ");
    ch = getchar();

    puts("Your details are");
    puts(name);
    putchar(ch);

    return 0;
}`,
            "c",
            "Using unformatted functions"
        ),

        heading("Escape Sequences"),

        table(
            ["Sequence", "Meaning"],
            [
                ["\\n", "New line"],
                ["\\t", "Horizontal tab"],
                ["\\b", "Backspace"],
                ["\\r", "Carriage return"],
                ["\\\\", "Backslash"],
                ['\\"', "Double quote"],
                ["\\'", "Single quote"],
                ["\\0", "Null character"],
                ["\\a", "Alert or beep sound"],
            ]
        ),

        code(
            `#include <stdio.h>

int main()
{
    printf("Name\\tAge\\n");
    printf("Amit\\t20\\n");
    printf("Riya\\t19\\n");
    printf("She said \\"Hello\\"\\n");

    return 0;
}`,
            "c",
            "Using escape sequences"
        ),

        output(`Name	Age
Amit	20
Riya	19
She said "Hello"`),

        heading("printf() versus scanf()"),

        table(
            ["Basis", "printf()", "scanf()"],
            [
                ["Purpose", "Displays output", "Reads input"],
                ["Address operator", "Not required", "Required using &"],
                ["Return value", "Number of characters printed", "Number of items read successfully"],
                ["Header file", "stdio.h", "stdio.h"],
            ]
        ),

        keyPoints([
            "printf() and scanf() are formatted I/O functions declared in stdio.h.",
            "scanf() needs the & operator before variable names.",
            "Escape sequences begin with a backslash and control formatting.",
            "gets() and puts() work with strings, while getchar() and putchar() work with single characters.",
        ]),
    ],

    {
        summary:
            "Learn formatted and unformatted input and output functions, format specifiers and escape sequences.",
        minutes: 11,
        tags: ["c", "input-output", "important"],

        mcqs: [
            mcq(
                "Which operator is used with scanf() before a variable name?",
                ["*", "&", "#", "%"],
                1,
                "The address-of operator & is required by scanf()."
            ),
            mcq(
                "Which escape sequence inserts a tab space?",
                ["\\n", "\\t", "\\b", "\\r"],
                1,
                "The sequence \\t inserts a horizontal tab."
            ),
            mcq(
                "Which function reads a string including spaces?",
                ["scanf()", "getchar()", "gets()", "getch()"],
                2,
                "The gets() function reads an entire line including spaces."
            ),
            mcq(
                "Which format specifier is used for a double?",
                ["%d", "%f", "%lf", "%c"],
                2,
                "%lf is used for double values."
            ),
            mcq(
                "The printf() function returns:",
                ["Nothing", "The number of characters printed", "Zero always", "The number of variables"],
                1,
                "printf() returns the total number of characters printed."
            ),
            mcq(
                "Which function displays a string and then moves to a new line?",
                ["printf()", "putchar()", "puts()", "gets()"],
                2,
                "The puts() function automatically appends a newline."
            ),
        ],

        questions: [
            qa(
                "Differentiate between formatted and unformatted input output functions.",
                "Formatted functions such as printf() and scanf() use format specifiers and can handle all data types, giving control over how data is displayed or read. Unformatted functions such as getchar(), putchar(), gets() and puts() work only with characters and strings and do not use any format specifiers.",
                4
            ),
            qa(
                "Explain the printf() and scanf() functions with syntax and example.",
                "The printf() function displays formatted output and its syntax is printf with a format string followed by variables. The scanf() function reads formatted input and its syntax is scanf with a format string followed by the addresses of variables using the & operator. For example, printf with %d displays an integer while scanf with %d and &n reads an integer into the variable n.",
                5
            ),
            qa(
                "What are escape sequences? Explain any five.",
                "Escape sequences are special character combinations beginning with a backslash that control formatting. The sequence \\n moves to a new line, \\t inserts a horizontal tab, \\b moves the cursor one position back, \\\\ prints a backslash, and \\\" prints a double quote.",
                4
            ),
            qa(
                "List any five format specifiers used in C with their purpose.",
                "The specifier %d is used for integers, %f for float values, %lf for double values, %c for a single character, and %s for a string. Additionally %u is used for unsigned integers and %x for hexadecimal numbers.",
                4
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit2Topics = [
    structureOfCProgram,
    characterSetAndTokens,
    dataTypesAndVariables,
    inputOutputFunctions,
];
