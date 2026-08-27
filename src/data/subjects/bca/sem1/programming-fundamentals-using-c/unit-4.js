/* =========================================================
   BCA • SEM 1 • Programming Fundamentals Using C
   UNIT 4 — Strings and Library Functions
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
   TOPIC 1 — Introduction to Strings
========================================================= */

const introductionToStrings = createTopic(
    "introduction-to-strings",
    "Introduction to Strings",

    [
        definition(
            "String",
            "A one dimensional array of characters terminated by the null character, written as backslash zero."
        ),

        text(
            "C does not have a separate string data type. A string is simply an array of characters where the last character is always the null terminator, which tells the compiler where the string ends."
        ),

        heading("Declaring a String"),

        code(
            `char name[20];              /* can hold 19 characters + null */
char city[10] = "Surat";
char code[4]  = {'A', 'B', 'C', '\\0'};`,
            "c",
            "Three ways to declare"
        ),

        heading("Memory Representation"),

        text('For the declaration char name[10] = "RAHUL", memory is arranged as follows.'),

        table(
            ["Index", "0", "1", "2", "3", "4", "5", "6 to 9"],
            [
                ["Character", "R", "A", "H", "U", "L", "\\0", "unused"],
            ]
        ),

        note(
            "A string of n characters requires n plus one bytes of memory because of the null terminator. Declaring char name[5] and storing RAHUL is an error because there is no room for the null character.",
            "exam",
            "Frequently Asked"
        ),

        heading("Rules for Strings"),

        list(
            [
                "A string constant is enclosed in double quotes while a character constant uses single quotes.",
                "The null character is added automatically when a string is initialised with double quotes.",
                "Always declare one extra byte for the null terminator.",
                "The name of the string is a pointer to its first character.",
                "A string cannot be assigned to another string using the equals operator.",
            ],
            true
        ),

        code(
            `char a = 'A';         /* character constant, 1 byte  */
char b[] = "A";       /* string constant, 2 bytes    */`,
            "c",
            "Character versus string"
        ),

        heading("A Simple String Program"),

        code(
            `#include <stdio.h>

int main()
{
    char name[20] = "LearnSphere";

    printf("Name is : %s\\n", name);
    printf("First letter : %c\\n", name[0]);
    printf("Third letter : %c\\n", name[2]);

    return 0;
}`,
            "c",
            "Accessing individual characters"
        ),

        output(`Name is : LearnSphere
First letter : L
Third letter : a`),

        keyPoints([
            "A string is a character array ending with the null character.",
            "Always declare one extra byte for the null terminator.",
            "String constants use double quotes; character constants use single quotes.",
            "The %s format specifier is used to read and print strings.",
        ]),
    ],

    {
        summary:
            "Understand how strings are declared, stored in memory, and how they differ from characters.",
        minutes: 7,
        tags: ["c", "strings", "important"],

        mcqs: [
            mcq(
                "A string in C is terminated by:",
                ["\\n", "\\0", "\\t", "EOF"],
                1,
                "Every C string ends with the null character backslash zero."
            ),
            mcq(
                "How many bytes are needed to store the string HELLO?",
                ["4", "5", "6", "7"],
                2,
                "Five characters plus one null terminator equals six bytes."
            ),
            mcq(
                "Which format specifier is used for a string?",
                ["%c", "%d", "%s", "%f"],
                2,
                "The %s specifier is used for strings."
            ),
            mcq(
                "The declaration char a = 'A' occupies how many bytes?",
                ["1", "2", "3", "4"],
                0,
                "A character constant occupies exactly one byte."
            ),
        ],

        questions: [
            qa(
                "What is a string in C? How is it stored in memory?",
                "A string in C is a one dimensional array of characters terminated by the null character. It is stored in contiguous memory locations where each character occupies one byte, and one additional byte is reserved at the end for the null terminator which marks the end of the string.",
                3
            ),
            qa(
                "Differentiate between a character constant and a string constant.",
                "A character constant is a single character enclosed in single quotes and occupies one byte, for example the letter A written as 'A'. A string constant is a sequence of characters enclosed in double quotes and occupies one byte more than the number of characters because of the null terminator, for example \"A\" occupies two bytes.",
                3
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — Reading and Writing Strings
========================================================= */

const readingWritingStrings = createTopic(
    "reading-and-writing-strings",
    "Reading and Writing Strings",

    [
        text(
            "C provides several functions to read strings from the keyboard and display them on the screen. Each has its own behaviour with regard to spaces."
        ),

        heading("Functions for String Input and Output"),

        table(
            ["Function", "Purpose", "Reads Spaces"],
            [
                ["scanf() with %s", "Reads a word", "No"],
                ["gets()", "Reads a full line", "Yes"],
                ["fgets()", "Reads a line with a size limit", "Yes"],
                ["printf() with %s", "Displays a string", "—"],
                ["puts()", "Displays a string and a newline", "—"],
            ]
        ),

        heading("Using scanf() and printf()"),

        code(
            `#include <stdio.h>

int main()
{
    char name[20];

    printf("Enter your name : ");
    scanf("%s", name);

    printf("Hello %s", name);

    return 0;
}`,
            "c",
            "Reading a single word"
        ),

        output(`Enter your name : Rahul Sharma
Hello Rahul`),

        note(
            "The scanf() function stops reading at the first white space, so only Rahul is stored. Also note that no ampersand is used before the array name because the name of an array is already an address.",
            "warning",
            "Important"
        ),

        heading("Using gets() and puts()"),

        code(
            `#include <stdio.h>

int main()
{
    char name[30];

    printf("Enter your full name : ");
    gets(name);

    printf("Hello ");
    puts(name);

    return 0;
}`,
            "c",
            "Reading a full line including spaces"
        ),

        output(`Enter your full name : Rahul Sharma
Hello Rahul Sharma`),

        heading("Using fgets() — the Safer Option"),

        code(
            `#include <stdio.h>

int main()
{
    char name[30];

    printf("Enter your full name : ");
    fgets(name, 30, stdin);

    printf("Hello %s", name);

    return 0;
}`,
            "c",
            "fgets prevents buffer overflow"
        ),

        note(
            "The gets() function is unsafe because it does not check the size of the array and can overwrite adjacent memory. Modern C standards have removed it, and fgets() should be used instead.",
            "tip",
            "Best Practice"
        ),

        heading("Reading a String Character by Character"),

        code(
            `#include <stdio.h>

int main()
{
    char str[50];
    int i = 0;
    char ch;

    printf("Enter text : ");

    while ((ch = getchar(), != '\\n')
    {
        str[i] = ch;
        i++;
    }

    str[i] = '\\0';

    printf("You typed : %s", str);

    return 0;
}`,
            "c",
            "Manual string input"
        ),

        heading("Comparison of Input Functions"),

        table(
            ["Basis", "scanf() with %s", "gets()", "fgets()"],
            [
                ["Reads spaces", "No", "Yes", "Yes"],
                ["Size checking", "No", "No", "Yes"],
                ["Safety", "Unsafe", "Very unsafe", "Safe"],
                ["Stores newline", "No", "No", "Yes"],
            ]
        ),

        keyPoints([
            "The scanf() function with %s stops reading at the first space.",
            "The gets() function reads an entire line including spaces but is unsafe.",
            "The fgets() function is the safe modern alternative to gets().",
            "The puts() function automatically prints a newline after the string.",
            "No ampersand is required before an array name in scanf().",
        ]),
    ],

    {
        summary:
            "Learn the different ways of reading and writing strings and understand which functions are safe to use.",
        minutes: 8,
        tags: ["c", "strings", "input-output"],

        mcqs: [
            mcq(
                "Which function reads a string including spaces?",
                ["scanf with %s", "gets()", "getchar()", "getch()"],
                1,
                "The gets() function reads an entire line including spaces."
            ),
            mcq(
                "Why is no ampersand used with scanf when reading a string?",
                [
                    "Because strings are constants",
                    "Because the array name is already an address",
                    "Because scanf does not need it",
                    "It is actually required",
                ],
                1,
                "The name of an array itself represents the address of its first element."
            ),
            mcq(
                "Which function automatically adds a newline after printing?",
                ["printf()", "putchar()", "puts()", "fputs()"],
                2,
                "The puts() function appends a newline character automatically."
            ),
            mcq(
                "Which is the safest function for reading a string?",
                ["gets()", "scanf()", "fgets()", "getchar()"],
                2,
                "The fgets() function limits the number of characters read and prevents overflow."
            ),
        ],

        questions: [
            qa(
                "Explain the different functions used for string input and output.",
                "The scanf() function with the %s specifier reads a single word and stops at the first white space. The gets() function reads an entire line including spaces but does not check the array size and is therefore unsafe. The fgets() function reads a line with a specified size limit and is the safe alternative. For output, printf() with %s displays a string while puts() displays a string and automatically moves to a new line.",
                5
            ),
            qa(
                "Why is gets() considered unsafe? What should be used instead?",
                "The gets() function is unsafe because it does not check the size of the destination array. If the user types more characters than the array can hold, the extra characters overwrite adjacent memory, which may crash the program or create a security vulnerability. The fgets() function should be used instead because it accepts a maximum size and never writes beyond it.",
                3
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — String Handling Functions
========================================================= */

const stringHandlingFunctions = createTopic(
    "string-handling-functions",
    "String Handling Functions",

    [
        text(
            "The header file string.h provides a set of ready made functions for performing common operations on strings such as finding the length, copying, joining and comparing."
        ),

        heading("Commonly Used Functions in string.h"),

        table(
            ["Function", "Purpose"],
            [
                ["strlen(s)", "Returns the number of characters in the string, excluding the null."],
                ["strcpy(s1, s2)", "Copies string s2 into string s1."],
                ["strncpy(s1, s2, n)", "Copies the first n characters of s2 into s1."],
                ["strcat(s1, s2)", "Appends string s2 to the end of string s1."],
                ["strncat(s1, s2, n)", "Appends the first n characters of s2 to s1."],
                ["strcmp(s1, s2)", "Compares two strings; returns 0 when they are equal."],
                ["strcmpi(s1, s2)", "Compares two strings ignoring case."],
                ["strrev(s)", "Reverses the given string."],
                ["strlwr(s)", "Converts the string to lowercase."],
                ["strupr(s)", "Converts the string to uppercase."],
            ]
        ),

        heading("1. strlen — Length of a String"),

        code(
            `#include <stdio.h>
#include <string.h>

int main()
{
    char str[] = "LearnSphere";

    printf("Length = %d", strlen(str),;

    return 0;
}`,
            "c",
            "Finding the length"
        ),

        output(`Length = 11`),

        note(
            "The strlen() function does not count the null terminator. So for the string HELLO, strlen returns 5 while sizeof returns 6.",
            "exam",
            "Frequently Asked"
        ),

        heading("2. strcpy — Copying a String"),

        code(
            `#include <stdio.h>
#include <string.h>

int main()
{
    char source[] = "Programming";
    char target[20];

    strcpy(target, source);

    printf("Target = %s", target);

    return 0;
}`,
            "c",
            "Copying one string into another"
        ),

        output(`Target = Programming`),

        heading("3. strcat — Joining Two Strings"),

        code(
            `#include <stdio.h>
#include <string.h>

int main()
{
    char first[30] = "Learn";
    char second[]  = "Sphere";

    strcat(first, second);

    printf("Result = %s", first);

    return 0;
}`,
            "c",
            "Concatenation"
        ),

        output(`Result = LearnSphere`),

        heading("4. strcmp — Comparing Two Strings"),

        table(
            ["Return Value", "Meaning"],
            [
                ["0", "Both strings are identical."],
                ["Positive", "The first string is greater than the second."],
                ["Negative", "The first string is smaller than the second."],
            ]
        ),

        code(
            `#include <stdio.h>
#include <string.h>

int main()
{
    char a[] = "apple";
    char b[] = "apple";
    char c[] = "banana";

    printf("%d\\n", strcmp(a, b),;
    printf("%d\\n", strcmp(a, c),;
    printf("%d\\n", strcmp(c, a),;

    return 0;
}`,
            "c",
            "String comparison"
        ),

        output(`0
-1
1`),

        heading("5. strrev, strlwr and strupr"),

        code(
            `#include <stdio.h>
#include <string.h>

int main()
{
    char s1[] = "Hello";
    char s2[] = "Hello";
    char s3[] = "Hello";

    printf("Reverse   : %s\\n", strrev(s1),;
    printf("Lowercase : %s\\n", strlwr(s2),;
    printf("Uppercase : %s\\n", strupr(s3),;

    return 0;
}`,
            "c",
            "Reversing and changing case"
        ),

        output(`Reverse   : olleH
Lowercase : hello
Uppercase : HELLO`),

        heading("Palindrome Check — A Complete Program"),

        code(
            `#include <stdio.h>
#include <string.h>

int main()
{
    char str[30], rev[30];

    printf("Enter a word : ");
    scanf("%s", str);

    strcpy(rev, str);
    strrev(rev);

    if (strcmp(str, rev) == 0)
        printf("Palindrome");
    else
        printf("Not a palindrome");

    return 0;
}`,
            "c",
            "Checking for a palindrome"
        ),

        output(`Enter a word : madam
Palindrome`),

        heading("Finding Length Without strlen"),

        code(
            `#include <stdio.h>

int main()
{
    char str[] = "Sphere";
    int i = 0;

    while (str[i] != '\\0')
        i++;

    printf("Length = %d", i);

    return 0;
}`,
            "c",
            "Manual length calculation"
        ),

        output(`Length = 6`),

        note(
            "The functions strrev, strlwr and strupr are not part of the ANSI C standard. They work in Turbo C and some compilers but may not be available in GCC. In such cases they must be written manually using loops.",
            "warning",
            "Compiler Note"
        ),

        keyPoints([
            "String functions are declared in the header file string.h.",
            "The strlen function does not count the null terminator.",
            "The strcmp function returns zero when two strings are identical.",
            "Strings cannot be copied using the equals operator; strcpy must be used.",
            "The functions strrev, strlwr and strupr are not standard in ANSI C.",
        ]),
    ],

    {
        summary:
            "Master the string handling functions of string.h with worked examples including a palindrome check.",
        minutes: 12,
        tags: ["c", "strings", "library", "important"],

        mcqs: [
            mcq(
                "Which header file must be included to use strlen()?",
                ["stdio.h", "string.h", "ctype.h", "stdlib.h"],
                1,
                "String handling functions are declared in string.h."
            ),
            mcq(
                "What does strlen(\"HELLO\") return?",
                ["4", "5", "6", "7"],
                1,
                "The strlen function counts characters but not the null terminator."
            ),
            mcq(
                "The strcmp() function returns zero when:",
                ["The first string is larger", "The second string is larger", "Both strings are equal", "An error occurs"],
                2,
                "A return value of zero means the two strings are identical."
            ),
            mcq(
                "Which function is used to join two strings?",
                ["strcpy()", "strcat()", "strcmp()", "strlen()"],
                1,
                "The strcat function appends the second string to the first."
            ),
            mcq(
                "Which of the following is NOT a standard ANSI C function?",
                ["strlen()", "strcpy()", "strrev()", "strcmp()"],
                2,
                "The strrev function is not part of the ANSI C standard."
            ),
        ],

        questions: [
            qa(
                "Explain any five string handling functions with syntax and example.",
                "The strlen function returns the number of characters in a string excluding the null terminator. The strcpy function copies the contents of the second string into the first. The strcat function appends the second string to the end of the first. The strcmp function compares two strings and returns zero when they are identical, a positive value when the first is greater and a negative value when it is smaller. The strrev function reverses the characters of a string.",
                5
            ),
            qa(
                "Write a program to check whether a string is a palindrome.",
                "Read a string from the user and copy it into a second array using strcpy. Reverse the copy using strrev. Then compare the original string with the reversed copy using strcmp. If strcmp returns zero, the string reads the same forwards and backwards and is therefore a palindrome; otherwise it is not.",
                5
            ),
            qa(
                "Differentiate between strlen and sizeof for a string.",
                "The strlen function is a library function that counts the number of characters in a string up to but not including the null terminator, so for HELLO it returns five. The sizeof operator returns the total memory allocated in bytes including the null terminator and any unused space, so for a char array of size ten it returns ten regardless of the text stored.",
                3
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — Mathematical Library Functions
========================================================= */

const mathematicalFunctions = createTopic(
    "mathematical-library-functions",
    "Mathematical Library Functions",

    [
        text(
            "The header file math.h provides functions for performing common mathematical calculations such as square roots, powers, and trigonometric operations."
        ),

        heading("Commonly Used Functions in math.h"),

        table(
            ["Function", "Purpose", "Example", "Result"],
            [
                ["sqrt(x)", "Square root of x", "sqrt(25)", "5.0"],
                ["pow(x, y)", "x raised to the power y", "pow(2, 3)", "8.0"],
                ["abs(x)", "Absolute value of an integer", "abs(-7)", "7"],
                ["fabs(x)", "Absolute value of a real number", "fabs(-7.5)", "7.5"],
                ["ceil(x)", "Rounds up to the next whole number", "ceil(4.2)", "5.0"],
                ["floor(x)", "Rounds down to the previous whole number", "floor(4.8)", "4.0"],
                ["round(x)", "Rounds to the nearest whole number", "round(4.5)", "5.0"],
                ["fmod(x, y)", "Remainder of a real division", "fmod(9.5, 2)", "1.5"],
                ["log(x)", "Natural logarithm of x", "log(2.718)", "1.0"],
                ["log10(x)", "Logarithm to base ten", "log10(100)", "2.0"],
                ["exp(x)", "e raised to the power x", "exp(1)", "2.718"],
                ["sin(x)", "Sine of x in radians", "sin(0)", "0.0"],
                ["cos(x)", "Cosine of x in radians", "cos(0)", "1.0"],
                ["tan(x)", "Tangent of x in radians", "tan(0)", "0.0"],
            ]
        ),

        heading("A Complete Example"),

        code(
            `#include <stdio.h>
#include <math.h>

int main()
{
    double x = 25.0, y = 4.7;

    printf("sqrt(25)    = %.2lf\\n", sqrt(x),;
    printf("pow(2, 5)   = %.2lf\\n", pow(2, 5),;
    printf("ceil(4.7)   = %.2lf\\n", ceil(y),;
    printf("floor(4.7)  = %.2lf\\n", floor(y),;
    printf("fabs(-4.7)  = %.2lf\\n", fabs(-y),;
    printf("log10(100)  = %.2lf\\n", log10(100),;

    return 0;
}`,
            "c",
            "Using math.h functions"
        ),

        output(`sqrt(25)    = 5.00
pow(2, 5)   = 32.00
ceil(4.7)   = 5.00
floor(4.7)  = 4.00
fabs(-4.7)  = 4.70
log10(100)  = 2.00`),

        heading("Practical Program — Roots of a Quadratic Equation"),

        code(
            `#include <stdio.h>
#include <math.h>

int main()
{
    float a, b, c, d, root1, root2;

    printf("Enter a, b and c : ");
    scanf("%f %f %f", &a, &b, &c);

    d = (b * b) - (4 * a * c);

    if (d > 0)
    {
        root1 = (-b + sqrt(d), / (2 * a);
        root2 = (-b - sqrt(d), / (2 * a);
        printf("Roots are %.2f and %.2f", root1, root2);
    }
    else if (d == 0)
    {
        root1 = -b / (2 * a);
        printf("Both roots are %.2f", root1);
    }
    else
    {
        printf("Roots are imaginary");
    }

    return 0;
}`,
            "c",
            "Quadratic equation solver"
        ),

        output(`Enter a, b and c : 1 -5 6
Roots are 3.00 and 2.00`),

        note(
            "On Linux and GCC, programs using math.h must be compiled with the flag -lm, for example gcc program.c -lm, otherwise the linker cannot find the mathematical functions.",
            "tip",
            "Compiler Note"
        ),

        heading("Difference Between abs, fabs, ceil and floor"),

        table(
            ["Function", "Input Type", "Returns", "Example"],
            [
                ["abs()", "int", "int", "abs(-9) gives 9"],
                ["fabs()", "double", "double", "fabs(-9.5) gives 9.5"],
                ["ceil()", "double", "double", "ceil(9.1) gives 10.0"],
                ["floor()", "double", "double", "floor(9.9) gives 9.0"],
            ]
        ),

        keyPoints([
            "Mathematical functions are declared in the header file math.h.",
            "The sqrt function returns the square root and pow raises a number to a power.",
            "The ceil function always rounds up and floor always rounds down.",
            "The abs function works with integers while fabs works with real numbers.",
            "Trigonometric functions expect the angle in radians, not degrees.",
        ]),
    ],

    {
        summary:
            "Learn the mathematical library functions of math.h and apply them to solve a quadratic equation.",
        minutes: 8,
        tags: ["c", "library", "math"],

        mcqs: [
            mcq(
                "Which header file is required for the sqrt() function?",
                ["stdio.h", "math.h", "stdlib.h", "string.h"],
                1,
                "Mathematical functions are declared in math.h."
            ),
            mcq(
                "What does ceil(4.2) return?",
                ["4.0", "4.2", "5.0", "4"],
                2,
                "The ceil function always rounds up to the next whole number."
            ),
            mcq(
                "What does pow(3, 2) return?",
                ["6", "9", "5", "8"],
                1,
                "The pow function raises three to the power two, which is nine."
            ),
            mcq(
                "Which function returns the absolute value of a real number?",
                ["abs()", "fabs()", "ceil()", "floor()"],
                1,
                "The fabs function works with double values."
            ),
            mcq(
                "Trigonometric functions in C expect the angle in:",
                ["Degrees", "Radians", "Gradians", "Any unit"],
                1,
                "Functions such as sin and cos expect the angle in radians."
            ),
        ],

        questions: [
            qa(
                "Explain any five mathematical library functions with examples.",
                "The sqrt function returns the square root of a number, so sqrt of twenty five gives five. The pow function raises a number to a power, so pow of two and three gives eight. The ceil function rounds a value up to the next whole number, so ceil of four point two gives five. The floor function rounds down, so floor of four point eight gives four. The fabs function returns the absolute value of a real number, so fabs of minus seven point five gives seven point five.",
                5
            ),
            qa(
                "Write a program to find the roots of a quadratic equation.",
                "Read the coefficients a, b and c from the user. Calculate the discriminant as b squared minus four times a times c. If the discriminant is greater than zero, calculate two distinct real roots using the quadratic formula with the sqrt function. If it equals zero, both roots are equal to minus b divided by two a. If it is less than zero, display that the roots are imaginary.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 5 — Character Handling Functions
========================================================= */

const characterFunctions = createTopic(
    "character-handling-functions",
    "Character Handling Functions",

    [
        text(
            "The header file ctype.h provides functions for testing and converting individual characters. These functions are very useful when validating user input."
        ),

        heading("Character Testing Functions"),

        table(
            ["Function", "Returns true when the character is"],
            [
                ["isalpha(c)", "A letter from A to Z or a to z"],
                ["isdigit(c)", "A digit from 0 to 9"],
                ["isalnum(c)", "A letter or a digit"],
                ["isupper(c)", "An uppercase letter"],
                ["islower(c)", "A lowercase letter"],
                ["isspace(c)", "A space, tab or newline"],
                ["ispunct(c)", "A punctuation mark"],
                ["isxdigit(c)", "A valid hexadecimal digit"],
            ]
        ),

        heading("Character Conversion Functions"),

        table(
            ["Function", "Purpose"],
            [
                ["toupper(c)", "Converts a lowercase letter to uppercase."],
                ["tolower(c)", "Converts an uppercase letter to lowercase."],
            ]
        ),

        heading("Example — Testing a Character"),

        code(
            `#include <stdio.h>
#include <ctype.h>

int main()
{
    char ch;

    printf("Enter a character : ");
    scanf(" %c", &ch);

    if (isalpha(ch),
        printf("It is a letter");
    else if (isdigit(ch),
        printf("It is a digit");
    else
        printf("It is a special character");

    return 0;
}`,
            "c",
            "Classifying a character"
        ),

        output(`Enter a character : 7
It is a digit`),

        heading("Example — Converting Case"),

        code(
            `#include <stdio.h>
#include <ctype.h>

int main()
{
    char ch = 'a';

    printf("Uppercase : %c\\n", toupper(ch),;
    printf("Lowercase : %c\\n", tolower('B'),;

    return 0;
}`,
            "c",
            "Case conversion"
        ),

        output(`Uppercase : A
Lowercase : b`),

        heading("Counting Vowels, Consonants and Digits"),

        code(
            `#include <stdio.h>
#include <ctype.h>
#include <string.h>

int main()
{
    char str[100];
    int i, vowels = 0, consonants = 0, digits = 0, spaces = 0;

    printf("Enter a sentence : ");
    gets(str);

    for (i = 0; i < strlen(str); i++)
    {
        char ch = tolower(str[i]);

        if (isalpha(ch),
        {
            if (ch == 'a' || ch == 'e' || ch == 'i' ||
                ch == 'o' || ch == 'u')
                vowels++;
            else
                consonants++;
        }
        else if (isdigit(ch),
            digits++;
        else if (isspace(ch),
            spaces++;
    }

    printf("Vowels     : %d\\n", vowels);
    printf("Consonants : %d\\n", consonants);
    printf("Digits     : %d\\n", digits);
    printf("Spaces     : %d\\n", spaces);

    return 0;
}`,
            "c",
            "A complete character analysis program"
        ),

        output(`Enter a sentence : Learn C in 2025
Vowels     : 4
Consonants : 5
Digits     : 4
Spaces     : 3`),

        heading("The ASCII Value of a Character"),

        text(
            "Every character in C is internally stored as an integer known as its ASCII value. This allows characters to be used in arithmetic operations."
        ),

        table(
            ["Characters", "ASCII Range"],
            [
                ["0 to 9", "48 to 57"],
                ["A to Z", "65 to 90"],
                ["a to z", "97 to 122"],
                ["Space", "32"],
            ]
        ),

        code(
            `#include <stdio.h>

int main()
{
    char ch = 'A';

    printf("Character  : %c\\n", ch);
    printf("ASCII value: %d\\n", ch);
    printf("Next char  : %c\\n", ch + 1);

    return 0;
}`,
            "c",
            "Characters as integers"
        ),

        output(`Character  : A
ASCII value: 65
Next char  : B`),

        note(
            "The difference between the ASCII value of an uppercase letter and its lowercase equivalent is always 32. This is why adding 32 converts uppercase to lowercase and subtracting 32 does the reverse.",
            "exam",
            "Frequently Asked"
        ),

        keyPoints([
            "Character functions are declared in the header file ctype.h.",
            "Testing functions such as isalpha and isdigit return non zero for true.",
            "The toupper and tolower functions convert the case of a letter.",
            "Every character is stored internally as its ASCII value.",
            "The difference between uppercase and lowercase ASCII values is 32.",
        ]),
    ],

    {
        summary:
            "Learn the character testing and conversion functions of ctype.h and understand ASCII values.",
        minutes: 9,
        tags: ["c", "library", "characters"],

        mcqs: [
            mcq(
                "Which header file contains the isalpha() function?",
                ["stdio.h", "string.h", "ctype.h", "math.h"],
                2,
                "Character handling functions are declared in ctype.h."
            ),
            mcq(
                "What is the ASCII value of the character A?",
                ["61", "65", "97", "48"],
                1,
                "The uppercase letter A has an ASCII value of 65."
            ),
            mcq(
                "The difference between the ASCII values of a and A is:",
                ["26", "32", "48", "65"],
                1,
                "Lowercase letters are always 32 greater than their uppercase equivalents."
            ),
            mcq(
                "Which function converts a lowercase letter to uppercase?",
                ["strupr()", "toupper()", "isupper()", "upper()"],
                1,
                "The toupper function converts a single character to uppercase."
            ),
            mcq(
                "Which function checks whether a character is a letter or a digit?",
                ["isalpha()", "isdigit()", "isalnum()", "isspace()"],
                2,
                "The isalnum function returns true for letters as well as digits."
            ),
        ],

        questions: [
            qa(
                "Explain any five character handling functions with examples.",
                "The isalpha function checks whether a character is a letter. The isdigit function checks whether it is a digit from zero to nine. The isupper function checks for an uppercase letter while islower checks for a lowercase letter. The toupper function converts a lowercase character to uppercase and tolower performs the reverse conversion. All of these are declared in the header file ctype.h.",
                5
            ),
            qa(
                "Write a program to count vowels, consonants and digits in a string.",
                "Read a sentence from the user using gets. Use a loop that runs through every character of the string using strlen to determine its length. Convert each character to lowercase using tolower. If the character is a letter, check whether it is a, e, i, o or u to increment the vowel counter, otherwise increment the consonant counter. If it is a digit increment the digit counter and if it is a space increment the space counter. Finally display all four counts.",
                5
            ),
            qa(
                "What is an ASCII value? Explain its importance in C.",
                "An ASCII value is the numeric code used internally to represent a character. Digits zero to nine occupy codes 48 to 57, uppercase letters A to Z occupy 65 to 90, and lowercase letters a to z occupy 97 to 122. This numeric representation allows characters to be compared and used in arithmetic, which is how case conversion and character sorting are implemented.",
                4
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit4Topics = [
    introductionToStrings,
    readingWritingStrings,
    stringHandlingFunctions,
    mathematicalFunctions,
    characterFunctions,
];
