/* =========================================================
   BCA • SEM 1 • Programming Fundamentals Using C
   UNIT 3 — Decision Making, Loops and Arrays
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
   TOPIC 1 — Operators in C
========================================================= */

const operatorsInC = createTopic(
    "operators-in-c",
    "Operators in C",

    [
        definition(
            "Operator",
            "A symbol that tells the compiler to perform a specific mathematical, relational or logical operation on one or more operands."
        ),

        definition(
            "Operand",
            "The value or variable on which an operator performs its operation."
        ),

        heading("Categories of Operators"),

        table(
            ["Category", "Operators", "Example"],
            [
                ["Arithmetic", "+  -  *  /  %", "a + b"],
                ["Relational", "<  >  <=  >=  ==  !=", "a > b"],
                ["Logical", "&&  ||  !", "a > 0 && b > 0"],
                ["Assignment", "=  +=  -=  *=  /=  %=", "a += 5"],
                ["Increment / Decrement", "++  --", "a++"],
                ["Bitwise", "&  |  ^  ~  <<  >>", "a & b"],
                ["Conditional or Ternary", "? :", "a > b ? a : b"],
                ["Special", "sizeof  &  *  ,", "sizeof(int)"],
            ]
        ),

        heading("Arithmetic Operators"),

        code(
            `#include <stdio.h>

int main()
{
    int a = 10, b = 3;

    printf("a + b  = %d\\n", a + b);
    printf("a - b  = %d\\n", a - b);
    printf("a * b  = %d\\n", a * b);
    printf("a / b  = %d\\n", a / b);
    printf("a %% b  = %d\\n", a % b);

    return 0;
}`,
            "c",
            "Arithmetic operations"
        ),

        output(`a + b  = 13
a - b  = 7
a * b  = 30
a / b  = 3
a % b  = 1`),

        note(
            "The modulus operator % works only with integers. Using it with a float or double causes a compilation error. Also note that 10 / 3 gives 3 and not 3.33 because both operands are integers.",
            "warning",
            "Important"
        ),

        heading("Relational Operators"),

        text(
            "Relational operators compare two values and always return either 1 for true or 0 for false."
        ),

        table(
            ["Operator", "Meaning", "Example with a = 10, b = 5", "Result"],
            [
                ["<", "Less than", "a < b", "0"],
                [">", "Greater than", "a > b", "1"],
                ["<=", "Less than or equal to", "a <= b", "0"],
                [">=", "Greater than or equal to", "a >= b", "1"],
                ["==", "Equal to", "a == b", "0"],
                ["!=", "Not equal to", "a != b", "1"],
            ]
        ),

        heading("Logical Operators"),

        table(
            ["Operator", "Name", "Description"],
            [
                ["&&", "Logical AND", "True only when both conditions are true."],
                ["||", "Logical OR", "True when at least one condition is true."],
                ["!", "Logical NOT", "Reverses the result of a condition."],
            ]
        ),

        code(
            `#include <stdio.h>

int main()
{
    int age = 22, marks = 75;

    if (age >= 18 && marks >= 60)
        printf("Eligible\\n");

    if (marks < 35 || age < 18)
        printf("Not eligible\\n");
    else
        printf("Passed\\n");

    return 0;
}`,
            "c",
            "Logical operators in action"
        ),

        output(`Eligible
Passed`),

        heading("Assignment Operators"),

        table(
            ["Operator", "Example", "Equivalent To"],
            [
                ["=", "a = 5", "a = 5"],
                ["+=", "a += 5", "a = a + 5"],
                ["-=", "a -= 5", "a = a - 5"],
                ["*=", "a *= 5", "a = a * 5"],
                ["/=", "a /= 5", "a = a / 5"],
                ["%=", "a %= 5", "a = a % 5"],
            ]
        ),

        heading("Increment and Decrement Operators"),

        text(
            "These are unary operators that increase or decrease the value of a variable by one. They can be used in prefix or postfix form."
        ),

        table(
            ["Form", "Syntax", "Working"],
            [
                ["Pre-increment", "++a", "First increment, then use the value."],
                ["Post-increment", "a++", "First use the value, then increment."],
                ["Pre-decrement", "--a", "First decrement, then use the value."],
                ["Post-decrement", "a--", "First use the value, then decrement."],
            ]
        ),

        code(
            `#include <stdio.h>

int main()
{
    int a = 5, b;

    b = ++a;                     /* a becomes 6, then b = 6 */
    printf("Pre  : a = %d, b = %d\\n", a, b);

    a = 5;
    b = a++;                     /* b = 5, then a becomes 6 */
    printf("Post : a = %d, b = %d\\n", a, b);

    return 0;
}`,
            "c",
            "Prefix versus postfix"
        ),

        output(`Pre  : a = 6, b = 6
Post : a = 6, b = 5`),

        note(
            "The difference between ++a and a++ is one of the most frequently asked questions in examinations. Remember: in prefix the value changes first, in postfix the value is used first.",
            "exam",
            "Frequently Asked"
        ),

        heading("Bitwise Operators"),

        table(
            ["Operator", "Name", "Description"],
            [
                ["&", "Bitwise AND", "Result bit is 1 only when both bits are 1."],
                ["|", "Bitwise OR", "Result bit is 1 when at least one bit is 1."],
                ["^", "Bitwise XOR", "Result bit is 1 when the bits are different."],
                ["~", "One's complement", "Inverts every bit."],
                ["<<", "Left shift", "Shifts bits left; equals multiplication by 2."],
                [">>", "Right shift", "Shifts bits right; equals division by 2."],
            ]
        ),

        code(
            `#include <stdio.h>

int main()
{
    int a = 12, b = 10;      /* 1100 and 1010 */

    printf("a & b  = %d\\n", a & b);    /* 1000 = 8  */
    printf("a | b  = %d\\n", a | b);    /* 1110 = 14 */
    printf("a ^ b  = %d\\n", a ^ b);    /* 0110 = 6  */
    printf("a << 1 = %d\\n", a << 1);   /* 11000 = 24 */
    printf("a >> 1 = %d\\n", a >> 1);   /* 110 = 6   */

    return 0;
}`,
            "c",
            "Bitwise operations"
        ),

        output(`a & b  = 8
a | b  = 14
a ^ b  = 6
a << 1 = 24
a >> 1 = 6`),

        heading("Conditional or Ternary Operator"),

        code(
            `condition ? expression_if_true : expression_if_false;`,
            "c",
            "Syntax"
        ),

        code(
            `#include <stdio.h>

int main()
{
    int a = 10, b = 20, max;

    max = (a > b) ? a : b;

    printf("Largest = %d", max);

    return 0;
}`,
            "c",
            "Finding the larger of two numbers"
        ),

        output(`Largest = 20`),

        heading("Operator Precedence and Associativity"),

        table(
            ["Priority", "Operators", "Associativity"],
            [
                ["1 Highest", "()  []  ->  .", "Left to right"],
                ["2", "!  ~  ++  --  sizeof", "Right to left"],
                ["3", "*  /  %", "Left to right"],
                ["4", "+  -", "Left to right"],
                ["5", "<<  >>", "Left to right"],
                ["6", "<  <=  >  >=", "Left to right"],
                ["7", "==  !=", "Left to right"],
                ["8", "&  ^  |", "Left to right"],
                ["9", "&&  ||", "Left to right"],
                ["10", "? :", "Right to left"],
                ["11 Lowest", "=  +=  -=  *=  /=", "Right to left"],
            ]
        ),

        code(
            `#include <stdio.h>

int main()
{
    int result;

    result = 10 + 5 * 2;       /* 5*2 first, then +10 */
    printf("%d\\n", result);

    result = (10 + 5) * 2;     /* brackets first */
    printf("%d\\n", result);

    return 0;
}`,
            "c",
            "Precedence in action"
        ),

        output(`20
30`),

        heading("Type Conversion"),

        table(
            ["Type", "Description", "Example"],
            [
                ["Implicit", "Done automatically by the compiler", "int converted to float"],
                ["Explicit or Type casting", "Done manually by the programmer", "(float) a / b"],
            ]
        ),

        code(
            `#include <stdio.h>

int main()
{
    int a = 10, b = 3;

    printf("Without cast : %d\\n", a / b);
    printf("With cast    : %.2f\\n", (float) a / b);

    return 0;
}`,
            "c",
            "Type casting"
        ),

        output(`Without cast : 3
With cast    : 3.33`),

        keyPoints([
            "C provides arithmetic, relational, logical, assignment, bitwise and conditional operators.",
            "Integer division discards the fractional part.",
            "The modulus operator cannot be used with float or double.",
            "In prefix the value changes first; in postfix the value is used first.",
            "Brackets have the highest precedence and assignment has the lowest.",
        ]),
    ],

    {
        summary:
            "Learn every category of operator in C, precedence and associativity, and type conversion.",
        minutes: 14,
        tags: ["c", "operators", "important"],

        mcqs: [
            mcq(
                "Which operator returns the remainder of a division?",
                ["/", "%", "*", "//"],
                1,
                "The modulus operator % returns the remainder."
            ),
            mcq(
                "What is the value of 10 / 3 in C when both are integers?",
                ["3.33", "3", "4", "0.33"],
                1,
                "Integer division discards the fractional part and gives 3."
            ),
            mcq(
                "If a = 5 and b = a++, what are the values of a and b?",
                ["a = 5, b = 5", "a = 6, b = 5", "a = 6, b = 6", "a = 5, b = 6"],
                1,
                "In post-increment, b receives 5 first and then a becomes 6."
            ),
            mcq(
                "The modulus operator % cannot be used with:",
                ["int", "char", "float", "long"],
                2,
                "The modulus operator works only with integer types."
            ),
            mcq(
                "Which operator has the highest precedence?",
                ["*", "+", "()", "="],
                2,
                "Parentheses have the highest precedence."
            ),
            mcq(
                "The expression a > b ? a : b uses which operator?",
                ["Logical", "Relational", "Conditional", "Bitwise"],
                2,
                "This is the conditional or ternary operator."
            ),
            mcq(
                "What is the result of 12 & 10?",
                ["2", "8", "14", "6"],
                1,
                "1100 AND 1010 gives 1000 which equals 8."
            ),
        ],

        questions: [
            qa(
                "Explain any five types of operators in C with examples.",
                "Arithmetic operators such as plus and multiply perform calculations. Relational operators such as greater than and equal to compare values and return one or zero. Logical operators AND, OR and NOT combine conditions. Assignment operators such as equals and plus equals store values. Increment and decrement operators change a value by one.",
                5
            ),
            qa(
                "Differentiate between pre-increment and post-increment with an example.",
                "In pre-increment written as ++a the value of a is increased first and then used in the expression. In post-increment written as a++ the current value of a is used first and then increased. For example if a is 5 then b = ++a gives b equal to 6 and a equal to 6, whereas b = a++ gives b equal to 5 and a equal to 6.",
                4
            ),
            qa(
                "What is the conditional operator? Explain with syntax and example.",
                "The conditional or ternary operator is the only operator in C that takes three operands. Its syntax is condition question mark expression one colon expression two. If the condition is true the first expression is evaluated, otherwise the second is evaluated. For example max equals a greater than b question mark a colon b assigns the larger of the two values to max.",
                4
            ),
            qa(
                "Explain type conversion in C.",
                "Type conversion is the process of converting a value from one data type to another. Implicit conversion is performed automatically by the compiler, for example when an integer is used in a float expression. Explicit conversion, also called type casting, is performed by the programmer by writing the target type in parentheses before the value, for example float a divided by b.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — Decision Making Statements
========================================================= */

const decisionMaking = createTopic(
    "decision-making-statements",
    "Decision Making Statements",

    [
        text(
            "By default a C program executes statements one after another from top to bottom. Decision making statements allow the program to choose a different path depending on whether a condition is true or false."
        ),

        heading("Types of Decision Making Statements"),

        list([
            "Simple if statement",
            "if else statement",
            "Nested if statement",
            "else if ladder",
            "switch case statement",
        ]),

        heading("1. Simple if Statement"),

        code(
            `if (condition)
{
    statements;
}`,
            "c",
            "Syntax"
        ),

        code(
            `#include <stdio.h>

int main()
{
    int marks;

    printf("Enter marks : ");
    scanf("%d", &marks);

    if (marks >= 35)
    {
        printf("Pass");
    }

    return 0;
}`,
            "c",
            "Simple if"
        ),

        output(`Enter marks : 60
Pass`),

        heading("2. if else Statement"),

        code(
            `if (condition)
{
    statements when true;
}
else
{
    statements when false;
}`,
            "c",
            "Syntax"
        ),

        code(
            `#include <stdio.h>

int main()
{
    int num;

    printf("Enter a number : ");
    scanf("%d", &num);

    if (num % 2 == 0)
        printf("Even number");
    else
        printf("Odd number");

    return 0;
}`,
            "c",
            "Checking even or odd"
        ),

        output(`Enter a number : 7
Odd number`),

        heading("3. Nested if Statement"),

        text(
            "When one if statement is written inside another if statement, it is called a nested if."
        ),

        code(
            `#include <stdio.h>

int main()
{
    int a, b, c;

    printf("Enter three numbers : ");
    scanf("%d %d %d", &a, &b, &c);

    if (a > b)
    {
        if (a > c)
            printf("%d is largest", a);
        else
            printf("%d is largest", c);
    }
    else
    {
        if (b > c)
            printf("%d is largest", b);
        else
            printf("%d is largest", c);
    }

    return 0;
}`,
            "c",
            "Largest of three numbers"
        ),

        output(`Enter three numbers : 15 42 28
42 is largest`),

        heading("4. else if Ladder"),

        text(
            "When several conditions must be tested one after another, the else if ladder is used. As soon as one condition is true, its block executes and the remaining conditions are skipped."
        ),

        code(
            `if (condition1)
    statement1;
else if (condition2)
    statement2;
else if (condition3)
    statement3;
else
    default statement;`,
            "c",
            "Syntax"
        ),

        code(
            `#include <stdio.h>

int main()
{
    int marks;

    printf("Enter marks : ");
    scanf("%d", &marks);

    if (marks >= 70)
        printf("Distinction");
    else if (marks >= 60)
        printf("First Class");
    else if (marks >= 50)
        printf("Second Class");
    else if (marks >= 35)
        printf("Pass Class");
    else
        printf("Fail");

    return 0;
}`,
            "c",
            "Grade calculation"
        ),

        output(`Enter marks : 65
First Class`),

        note(
            "Never write a single equals sign in a condition. Writing if (a = 5) assigns 5 to a and is always true, whereas if (a == 5) correctly compares a with 5.",
            "warning",
            "Common Mistake"
        ),

        heading("Comparison of Decision Statements"),

        table(
            ["Statement", "Number of Conditions", "Use"],
            [
                ["Simple if", "One", "Execute a block only when the condition is true."],
                ["if else", "One", "Choose between two alternatives."],
                ["Nested if", "Multiple", "A condition inside another condition."],
                ["else if ladder", "Multiple", "Test several conditions in sequence."],
                ["switch", "One expression", "Choose among many constant values."],
            ]
        ),

        keyPoints([
            "Decision making statements change the flow of a program based on conditions.",
            "A simple if executes a block only when the condition is true.",
            "The if else statement chooses between two paths.",
            "The else if ladder tests several conditions in order until one is true.",
            "Use == for comparison and = for assignment.",
        ]),
    ],

    {
        summary:
            "Learn simple if, if else, nested if and the else if ladder with worked examples.",
        minutes: 11,
        tags: ["c", "control-flow", "important"],

        mcqs: [
            mcq(
                "Which statement is used to choose between two alternatives?",
                ["if", "if else", "switch", "for"],
                1,
                "The if else statement selects one of two possible paths."
            ),
            mcq(
                "What does if (a = 5) do?",
                ["Compares a with 5", "Assigns 5 to a and is always true", "Causes a syntax error", "Does nothing"],
                1,
                "A single equals sign assigns the value, making the condition always true."
            ),
            mcq(
                "In an else if ladder, how many blocks can execute at most?",
                ["All of them", "Two", "One", "None"],
                2,
                "Only the first matching block executes; the rest are skipped."
            ),
            mcq(
                "An if statement written inside another if statement is called:",
                ["Chained if", "Nested if", "Compound if", "Multiple if"],
                1,
                "This structure is called a nested if statement."
            ),
        ],

        questions: [
            qa(
                "Explain the if else statement with syntax and example.",
                "The if else statement allows a program to choose between two alternatives. Its syntax is if followed by a condition in parentheses and a block of statements, then else followed by another block. If the condition is true the first block executes, otherwise the second block executes. For example, checking whether a number modulo two equals zero prints Even, otherwise it prints Odd.",
                4
            ),
            qa(
                "What is an else if ladder? Explain with an example.",
                "An else if ladder is used when several conditions must be tested one after another. The conditions are checked from top to bottom and as soon as one is found true, its block executes and all remaining conditions are skipped. If none is true, the final else block executes. A typical example is assigning a grade based on marks where different ranges produce Distinction, First Class, Second Class, Pass Class or Fail.",
                5
            ),
            qa(
                "Write a program to find the largest of three numbers using nested if.",
                "Read three numbers a, b and c. If a is greater than b then check whether a is greater than c; if yes print a is largest otherwise print c is largest. Else check whether b is greater than c; if yes print b is largest otherwise print c is largest.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — switch case Statement
========================================================= */

const switchStatement = createTopic(
    "switch-case-statement",
    "switch case Statement",

    [
        definition(
            "switch statement",
            "A multi-way decision statement that compares the value of an expression against a list of constant case values and executes the matching block."
        ),

        heading("Syntax"),

        code(
            `switch (expression)
{
    case constant1:
        statements;
        break;

    case constant2:
        statements;
        break;

    default:
        statements;
}`,
            "c",
            "Syntax of switch"
        ),

        heading("Rules of the switch Statement"),

        list(
            [
                "The expression must evaluate to an integer or a character value.",
                "Case labels must be constants and must be unique.",
                "Float values cannot be used as case labels.",
                "The break statement is required to exit the switch after a case.",
                "The default block is optional and may be placed anywhere.",
                "Multiple cases may share the same set of statements.",
            ],
            true
        ),

        heading("Example — Simple Calculator"),

        code(
            `#include <stdio.h>

int main()
{
    int a, b;
    char op;

    printf("Enter two numbers : ");
    scanf("%d %d", &a, &b);

    printf("Enter operator (+ - * /) : ");
    scanf(" %c", &op);

    switch (op)
    {
        case '+':
            printf("Result = %d", a + b);
            break;

        case '-':
            printf("Result = %d", a - b);
            break;

        case '*':
            printf("Result = %d", a * b);
            break;

        case '/':
            if (b != 0)
                printf("Result = %d", a / b);
            else
                printf("Cannot divide by zero");
            break;

        default:
            printf("Invalid operator");
    }

    return 0;
}`,
            "c",
            "Calculator using switch"
        ),

        output(`Enter two numbers : 12 4
Enter operator (+ - * /) : *
Result = 48`),

        heading("Example — Day of the Week"),

        code(
            `#include <stdio.h>

int main()
{
    int day;

    printf("Enter day number (1 to 7) : ");
    scanf("%d", &day);

    switch (day)
    {
        case 1: printf("Monday");    break;
        case 2: printf("Tuesday");   break;
        case 3: printf("Wednesday"); break;
        case 4: printf("Thursday");  break;
        case 5: printf("Friday");    break;
        case 6:
        case 7: printf("Weekend");   break;
        default: printf("Invalid day");
    }

    return 0;
}`,
            "c",
            "Cases 6 and 7 share the same block"
        ),

        output(`Enter day number (1 to 7) : 6
Weekend`),

        heading("Fall Through Behaviour"),

        text(
            "If the break statement is omitted, execution continues into the next case. This is called fall through and is sometimes used intentionally, as shown above where cases 6 and 7 both print Weekend."
        ),

        code(
            `#include <stdio.h>

int main()
{
    int n = 2;

    switch (n)
    {
        case 1: printf("One ");
        case 2: printf("Two ");
        case 3: printf("Three ");
        default: printf("Default");
    }

    return 0;
}`,
            "c",
            "Missing break causes fall through"
        ),

        output(`Two Three Default`),

        note(
            "Forgetting the break statement is the most common error when using switch. Unless fall through is intentional, always end every case with break.",
            "warning",
            "Common Mistake"
        ),

        heading("switch versus else if Ladder"),

        table(
            ["Basis", "switch", "else if ladder"],
            [
                ["Expression type", "Only int or char", "Any type including float"],
                ["Condition", "Equality comparison only", "Any relational or logical condition"],
                ["Speed", "Faster for many cases", "Slower as each condition is checked"],
                ["Readability", "Cleaner for many fixed values", "Better for ranges"],
                ["break required", "Yes", "No"],
                ["Nesting", "Possible but rarely used", "Very common"],
            ]
        ),

        keyPoints([
            "The switch statement selects one block from many based on a constant value.",
            "The expression must be of type int or char, never float.",
            "Case labels must be unique constants.",
            "Without break, execution falls through to the next case.",
            "The default block runs when no case matches.",
        ]),
    ],

    {
        summary:
            "Master the switch case statement, its rules, fall through behaviour and how it compares with the else if ladder.",
        minutes: 10,
        tags: ["c", "control-flow", "switch", "important"],

        mcqs: [
            mcq(
                "Which data type cannot be used in a switch expression?",
                ["int", "char", "float", "All can be used"],
                2,
                "Float values cannot be used in a switch expression."
            ),
            mcq(
                "What happens if the break statement is omitted in a case?",
                ["Compilation error", "The switch exits", "Execution falls through to the next case", "The default runs"],
                2,
                "Without break, execution continues into the following cases."
            ),
            mcq(
                "The default block in a switch statement is:",
                ["Compulsory", "Optional", "Allowed only at the end", "Allowed only at the start"],
                1,
                "The default block is optional and may be placed anywhere."
            ),
            mcq(
                "Case labels in a switch must be:",
                ["Variables", "Constants", "Expressions", "Functions"],
                1,
                "Case labels must be constant values and must be unique."
            ),
        ],

        questions: [
            qa(
                "Explain the switch statement with syntax and example.",
                "The switch statement is a multi-way decision statement that compares an expression against several constant case values. Its syntax begins with the keyword switch followed by an expression in parentheses, then a block containing case labels each followed by statements and a break, and optionally a default block. A common example is a calculator where the operator character selects the arithmetic operation to perform.",
                5
            ),
            qa(
                "State the rules of the switch statement.",
                "The expression must evaluate to an integer or character value. Case labels must be constants and must be unique. Float values cannot be used as case labels. The break statement is needed to exit the switch after a matching case. The default block is optional and may appear anywhere. Multiple cases may share the same statements.",
                4
            ),
            qa(
                "Differentiate between the switch statement and the else if ladder.",
                "The switch statement works only with integer or character expressions and performs equality comparison, while the else if ladder works with any data type and any relational or logical condition. Switch is faster when there are many fixed values, whereas the else if ladder is better for testing ranges. Switch requires break statements while the ladder does not.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — Looping Statements
========================================================= */

const loopingStatements = createTopic(
    "looping-statements",
    "Looping Statements",

    [
        definition(
            "Loop",
            "A control structure that repeats a block of statements as long as a given condition remains true."
        ),

        heading("Parts of a Loop"),

        table(
            ["Part", "Purpose"],
            [
                ["Initialisation", "Sets the starting value of the loop control variable."],
                ["Condition", "Decides whether the loop should continue."],
                ["Body", "The statements that are repeated."],
                ["Updation", "Increases or decreases the loop control variable."],
            ]
        ),

        heading("Types of Loops"),

        table(
            ["Loop", "Type", "Condition Checked"],
            [
                ["while", "Entry controlled", "Before executing the body"],
                ["do while", "Exit controlled", "After executing the body"],
                ["for", "Entry controlled", "Before executing the body"],
            ]
        ),

        heading("1. The while Loop"),

        code(
            `initialisation;

while (condition)
{
    body;
    updation;
}`,
            "c",
            "Syntax"
        ),

        code(
            `#include <stdio.h>

int main()
{
    int i = 1;

    while (i <= 5)
    {
        printf("%d ", i);
        i++;
    }

    return 0;
}`,
            "c",
            "Printing 1 to 5"
        ),

        output(`1 2 3 4 5`),

        heading("2. The do while Loop"),

        text(
            "In a do while loop the body executes first and the condition is tested afterwards. Therefore the body always executes at least once, even if the condition is false from the beginning."
        ),

        code(
            `initialisation;

do
{
    body;
    updation;
}
while (condition);`,
            "c",
            "Syntax"
        ),

        code(
            `#include <stdio.h>

int main()
{
    int i = 10;

    do
    {
        printf("Executed once\\n");
        i++;
    }
    while (i <= 5);

    return 0;
}`,
            "c",
            "The body runs even though the condition is false"
        ),

        output(`Executed once`),

        note(
            "Always place a semicolon after the closing bracket of the while condition in a do while loop. Omitting it causes a syntax error.",
            "warning",
            "Important"
        ),

        heading("3. The for Loop"),

        code(
            `for (initialisation; condition; updation)
{
    body;
}`,
            "c",
            "Syntax"
        ),

        code(
            `#include <stdio.h>

int main()
{
    int i;

    for (i = 1; i <= 5; i++)
    {
        printf("%d ", i);
    }

    return 0;
}`,
            "c",
            "The same output using for"
        ),

        output(`1 2 3 4 5`),

        heading("Practical Examples"),

        code(
            `#include <stdio.h>

int main()
{
    int n, i, sum = 0, fact = 1;

    printf("Enter a number : ");
    scanf("%d", &n);

    for (i = 1; i <= n; i++)
    {
        sum  = sum + i;
        fact = fact * i;
    }

    printf("Sum       = %d\\n", sum);
    printf("Factorial = %d\\n", fact);

    return 0;
}`,
            "c",
            "Sum and factorial"
        ),

        output(`Enter a number : 5
Sum       = 15
Factorial = 120`),

        code(
            `#include <stdio.h>

int main()
{
    int n, i;

    printf("Enter a number : ");
    scanf("%d", &n);

    for (i = 1; i <= 10; i++)
        printf("%d x %d = %d\\n", n, i, n * i);

    return 0;
}`,
            "c",
            "Multiplication table"
        ),

        output(`Enter a number : 3
3 x 1 = 3
3 x 2 = 6
3 x 3 = 9
3 x 4 = 12
3 x 5 = 15
3 x 6 = 18
3 x 7 = 21
3 x 8 = 24
3 x 9 = 27
3 x 10 = 30`),

        heading("Nested Loops"),

        text(
            "A loop written inside another loop is called a nested loop. The inner loop completes all its iterations for every single iteration of the outer loop."
        ),

        code(
            `#include <stdio.h>

int main()
{
    int i, j;

    for (i = 1; i <= 4; i++)
    {
        for (j = 1; j <= i; j++)
            printf("* ");

        printf("\\n");
    }

    return 0;
}`,
            "c",
            "Star pattern using nested loops"
        ),

        output(`* 
* * 
* * * 
* * * * `),

        heading("Comparison of the Three Loops"),

        table(
            ["Basis", "while", "do while", "for"],
            [
                ["Type", "Entry controlled", "Exit controlled", "Entry controlled"],
                ["Condition check", "Before the body", "After the body", "Before the body"],
                ["Minimum executions", "Zero", "One", "Zero"],
                ["Best used when", "Count is unknown", "Body must run at least once", "Count is known"],
                ["Semicolon at end", "No", "Yes", "No"],
            ]
        ),

        heading("Infinite Loops"),

        code(
            `while (1) { }          /* infinite while */

do { } while (1);       /* infinite do while */

for ( ; ; ) { }         /* infinite for */`,
            "c",
            "Three ways to write an infinite loop"
        ),

        keyPoints([
            "A loop repeats a block of statements while a condition remains true.",
            "The while and for loops are entry controlled; do while is exit controlled.",
            "A do while loop always executes its body at least once.",
            "Use for when the number of iterations is known and while when it is not.",
            "A do while loop must end with a semicolon.",
        ]),
    ],

    {
        summary:
            "Master the while, do while and for loops, nested loops and infinite loops with practical examples.",
        minutes: 13,
        tags: ["c", "loops", "important"],

        mcqs: [
            mcq(
                "Which loop is exit controlled?",
                ["while", "for", "do while", "None"],
                2,
                "The do while loop tests its condition after executing the body."
            ),
            mcq(
                "How many times does a do while loop execute at minimum?",
                ["Zero", "One", "Two", "Depends on the condition"],
                1,
                "The body of a do while loop always executes at least once."
            ),
            mcq(
                "Which loop is best when the number of iterations is known in advance?",
                ["while", "do while", "for", "goto"],
                2,
                "The for loop is designed for a known number of iterations."
            ),
            mcq(
                "Which of the following creates an infinite loop?",
                ["for (i = 0; i < 10; i++)", "while (0)", "for ( ; ; )", "do { } while (0);"],
                2,
                "An empty for loop with no condition runs forever."
            ),
            mcq(
                "A semicolon is required after the condition in which loop?",
                ["while", "for", "do while", "All of them"],
                2,
                "The do while loop requires a semicolon after the while condition."
            ),
        ],

        questions: [
            qa(
                "Explain the three types of loops in C with syntax.",
                "The while loop is entry controlled and its syntax is while followed by a condition in parentheses and a body. The do while loop is exit controlled, with the body written first followed by while and the condition ending in a semicolon. The for loop is entry controlled and combines initialisation, condition and updation in a single line separated by semicolons.",
                5
            ),
            qa(
                "Differentiate between the while loop and the do while loop.",
                "The while loop is entry controlled and checks the condition before executing the body, so the body may never execute if the condition is false initially. The do while loop is exit controlled and checks the condition after executing the body, so the body always executes at least once. Additionally the do while loop requires a semicolon after the closing while condition.",
                4
            ),
            qa(
                "Write a program to print the multiplication table of a number.",
                "Read a number n from the user. Use a for loop with a counter i running from one to ten. Inside the loop print n, the multiplication sign, i, an equals sign and the product of n and i, followed by a new line.",
                4
            ),
            qa(
                "What is a nested loop? Explain with an example.",
                "A nested loop is a loop written inside another loop. For every single iteration of the outer loop, the inner loop completes all of its iterations. A common example is printing a star pattern where the outer loop controls the number of rows and the inner loop controls the number of stars printed in each row.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 5 — Jump Statements
========================================================= */

const jumpStatements = createTopic(
    "break-continue-and-goto",
    "Jump Statements: break, continue and goto",

    [
        text(
            "Jump statements transfer control from one part of a program to another, breaking the normal sequential flow of execution."
        ),

        heading("Types of Jump Statements"),

        table(
            ["Statement", "Purpose"],
            [
                ["break", "Terminates the loop or switch immediately."],
                ["continue", "Skips the remaining statements and starts the next iteration."],
                ["goto", "Transfers control unconditionally to a labelled statement."],
                ["return", "Exits from a function and optionally returns a value."],
            ]
        ),

        heading("1. The break Statement"),

        code(
            `#include <stdio.h>

int main()
{
    int i;

    for (i = 1; i <= 10; i++)
    {
        if (i == 6)
            break;

        printf("%d ", i);
    }

    return 0;
}`,
            "c",
            "Loop stops when i reaches 6"
        ),

        output(`1 2 3 4 5`),

        heading("2. The continue Statement"),

        code(
            `#include <stdio.h>

int main()
{
    int i;

    for (i = 1; i <= 10; i++)
    {
        if (i % 2 == 0)
            continue;

        printf("%d ", i);
    }

    return 0;
}`,
            "c",
            "Skipping even numbers"
        ),

        output(`1 3 5 7 9`),

        heading("break versus continue"),

        table(
            ["Basis", "break", "continue"],
            [
                ["Action", "Terminates the loop completely", "Skips the current iteration only"],
                ["Control goes to", "The statement after the loop", "The condition or updation of the loop"],
                ["Used in", "Loops and switch", "Loops only"],
                ["Remaining iterations", "Cancelled", "Continue normally"],
            ]
        ),

        note(
            "The break statement can be used inside both loops and the switch statement, but the continue statement can be used only inside loops.",
            "exam",
            "Frequently Asked"
        ),

        heading("3. The goto Statement"),

        code(
            `goto label;
...
label:
    statements;`,
            "c",
            "Syntax"
        ),

        code(
            `#include <stdio.h>

int main()
{
    int i = 1;

start:
    printf("%d ", i);
    i++;

    if (i <= 5)
        goto start;

    return 0;
}`,
            "c",
            "Using goto to create a loop"
        ),

        output(`1 2 3 4 5`),

        note(
            "The use of goto is strongly discouraged in modern programming because it makes the flow of control difficult to follow and the program hard to debug. Loops and functions should be used instead.",
            "warning",
            "Avoid goto"
        ),

        heading("4. The return Statement"),

        code(
            `#include <stdio.h>

int square(int n)
{
    return n * n;
}

int main()
{
    printf("Square = %d", square(6),;
    return 0;
}`,
            "c",
            "Returning a value from a function"
        ),

        output(`Square = 36`),

        keyPoints([
            "The break statement immediately terminates a loop or switch.",
            "The continue statement skips the rest of the current iteration.",
            "break works in loops and switch; continue works only in loops.",
            "The goto statement should be avoided in modern programming.",
            "The return statement exits a function and may return a value.",
        ]),
    ],

    {
        summary:
            "Understand break, continue, goto and return, and how they alter the normal flow of a program.",
        minutes: 8,
        tags: ["c", "control-flow", "jump"],

        mcqs: [
            mcq(
                "Which statement terminates a loop immediately?",
                ["continue", "break", "goto", "return"],
                1,
                "The break statement exits the loop at once."
            ),
            mcq(
                "The continue statement can be used in:",
                ["Loops only", "switch only", "Both loops and switch", "Functions only"],
                0,
                "The continue statement is valid only inside loops."
            ),
            mcq(
                "In a for loop, after continue is executed, control passes to:",
                ["The statement after the loop", "The updation part", "The first statement of the body", "The main function"],
                1,
                "Control moves to the updation part and then the condition is tested again."
            ),
            mcq(
                "Which statement is discouraged in structured programming?",
                ["break", "continue", "goto", "return"],
                2,
                "The goto statement makes program flow difficult to follow."
            ),
        ],

        questions: [
            qa(
                "Differentiate between break and continue statements.",
                "The break statement terminates the loop completely and transfers control to the statement immediately after the loop, cancelling all remaining iterations. The continue statement skips only the remaining statements of the current iteration and transfers control to the condition or updation part so that the loop continues. The break statement can be used in both loops and switch, while continue can be used only in loops.",
                4
            ),
            qa(
                "What is the goto statement? Why is it discouraged?",
                "The goto statement transfers control unconditionally to a labelled statement elsewhere in the program. It is discouraged because it makes the flow of control difficult to trace, reduces readability, and makes the program hard to debug and maintain. Structured constructs such as loops and functions should be used instead.",
                3
            ),
        ],
    }
);

/* =========================================================
   TOPIC 6 — Arrays
========================================================= */

const arrays = createTopic(
    "arrays-in-c",
    "Arrays in C",

    [
        definition(
            "Array",
            "A collection of elements of the same data type stored in contiguous memory locations and referred to by a common name."
        ),

        text(
            "Instead of declaring fifty separate variables to store the marks of fifty students, we can declare a single array of size fifty. Each element is accessed using an index number."
        ),

        heading("Characteristics of an Array"),

        list([
            "All elements must be of the same data type.",
            "Elements are stored in continuous memory locations.",
            "The index always begins at zero.",
            "The size must be fixed at the time of declaration.",
            "Elements are accessed using the array name and an index.",
        ]),

        heading("Types of Arrays"),

        table(
            ["Type", "Description", "Example"],
            [
                ["One dimensional", "A simple list of elements", "int a[5];"],
                ["Two dimensional", "A table with rows and columns", "int b[3][4];"],
                ["Multi dimensional", "Three or more dimensions", "int c[2][3][4];"],
            ]
        ),

        heading("Declaring a One Dimensional Array"),

        code(
            `data_type array_name[size];

int   marks[5];
float price[10];
char  name[20];`,
            "c",
            "Syntax and examples"
        ),

        heading("Initialising an Array"),

        code(
            `int a[5] = {10, 20, 30, 40, 50};   /* full initialisation   */
int b[5] = {10, 20};               /* rest become zero      */
int c[]  = {10, 20, 30};           /* size taken as three   */
int d[5] = {0};                    /* all elements zero     */`,
            "c",
            "Different ways to initialise"
        ),

        heading("Memory Representation"),

        table(
            ["Index", "0", "1", "2", "3", "4"],
            [
                ["Value", "10", "20", "30", "40", "50"],
                ["Address", "1000", "1004", "1008", "1012", "1016"],
            ]
        ),

        note(
            "For an array of size n, the valid index range is 0 to n minus 1. Accessing a[5] in an array declared as a[5] is out of bounds and gives unpredictable results.",
            "warning",
            "Important"
        ),

        heading("Reading and Displaying an Array"),

        code(
            `#include <stdio.h>

int main()
{
    int a[5], i;

    printf("Enter 5 numbers : ");

    for (i = 0; i < 5; i++)
        scanf("%d", &a[i]);

    printf("You entered : ");

    for (i = 0; i < 5; i++)
        printf("%d ", a[i]);

    return 0;
}`,
            "c",
            "Input and output of an array"
        ),

        output(`Enter 5 numbers : 12 45 7 89 23
You entered : 12 45 7 89 23`),

        heading("Finding the Sum and Average"),

        code(
            `#include <stdio.h>

int main()
{
    int a[5], i, sum = 0;
    float avg;

    printf("Enter 5 numbers : ");

    for (i = 0; i < 5; i++)
    {
        scanf("%d", &a[i]);
        sum = sum + a[i];
    }

    avg = (float) sum / 5;

    printf("Sum     = %d\\n", sum);
    printf("Average = %.2f", avg);

    return 0;
}`,
            "c",
            "Sum and average of array elements"
        ),

        output(`Enter 5 numbers : 10 20 30 40 50
Sum     = 150
Average = 30.00`),

        heading("Finding the Largest Element"),

        code(
            `#include <stdio.h>

int main()
{
    int a[5], i, max;

    printf("Enter 5 numbers : ");

    for (i = 0; i < 5; i++)
        scanf("%d", &a[i]);

    max = a[0];

    for (i = 1; i < 5; i++)
    {
        if (a[i] > max)
            max = a[i];
    }

    printf("Largest = %d", max);

    return 0;
}`,
            "c",
            "Largest element in an array"
        ),

        output(`Enter 5 numbers : 12 45 7 89 23
Largest = 89`),

        heading("Advantages of Arrays"),

        list([
            "Many values can be stored under a single name.",
            "Elements can be accessed quickly using an index.",
            "Code becomes shorter because loops can process all elements.",
            "Useful for implementing other data structures such as stacks and queues.",
        ]),

        heading("Disadvantages of Arrays"),

        list([
            "The size must be fixed at compile time and cannot grow later.",
            "Memory may be wasted if fewer elements are used than declared.",
            "Insertion and deletion of elements is time consuming.",
            "All elements must be of the same data type.",
        ]),

        keyPoints([
            "An array stores multiple values of the same type under one name.",
            "Array indexing always begins at zero.",
            "The valid index range is 0 to size minus one.",
            "Arrays are stored in contiguous memory locations.",
            "The size of an array is fixed and cannot be changed at runtime.",
        ]),
    ],

    {
        summary:
            "Learn how to declare, initialise and process one dimensional arrays with practical programs.",
        minutes: 12,
        tags: ["c", "arrays", "important"],

        mcqs: [
            mcq(
                "The index of the first element of an array in C is:",
                ["1", "0", "-1", "Depends on the compiler"],
                1,
                "Array indexing in C always begins at zero."
            ),
            mcq(
                "For an array declared as int a[10], the valid index range is:",
                ["1 to 10", "0 to 10", "0 to 9", "1 to 9"],
                2,
                "The valid range is 0 to size minus one, which is 0 to 9."
            ),
            mcq(
                "In the declaration int a[5] = {1, 2}; the value of a[3] is:",
                ["Garbage", "0", "2", "Compilation error"],
                1,
                "Uninitialised elements of a partially initialised array become zero."
            ),
            mcq(
                "Array elements are stored in:",
                ["Random memory locations", "Contiguous memory locations", "Stack only", "Heap only"],
                1,
                "Array elements always occupy continuous memory locations."
            ),
            mcq(
                "Which of the following is a disadvantage of arrays?",
                ["Fast access", "Fixed size", "Single name for many values", "Easy to use with loops"],
                1,
                "The size of an array is fixed at compile time and cannot grow."
            ),
        ],

        questions: [
            qa(
                "What is an array? Explain its characteristics.",
                "An array is a collection of elements of the same data type stored in contiguous memory locations and referred to by a common name. Its characteristics are that all elements must be of the same type, they are stored continuously in memory, indexing begins at zero, the size must be fixed at declaration, and elements are accessed using the array name with an index.",
                4
            ),
            qa(
                "Explain the different ways of initialising an array with examples.",
                "An array may be fully initialised by listing all values in braces, for example int a of size five equal to ten, twenty, thirty, forty and fifty. It may be partially initialised where the remaining elements automatically become zero. The size may be omitted when an initialiser list is given, and the compiler determines it. Finally an array can be set entirely to zero by initialising it with a single zero.",
                4
            ),
            qa(
                "Write a program to find the largest element in an array.",
                "Declare an array and read its elements using a loop. Assign the first element to a variable named max. Then use a loop starting from the second element and compare each element with max; if the element is greater, assign it to max. After the loop, display the value of max as the largest element.",
                5
            ),
            qa(
                "State the advantages and disadvantages of arrays.",
                "Advantages are that many values can be stored under a single name, elements are accessed quickly using an index, code becomes shorter because loops can process all elements, and arrays help implement other data structures. Disadvantages are that the size is fixed at compile time, memory may be wasted, insertion and deletion are time consuming, and all elements must be of the same type.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 7 — Two Dimensional Arrays
========================================================= */

const twoDimensionalArrays = createTopic(
    "two-dimensional-arrays",
    "Two Dimensional Arrays",

    [
        definition(
            "Two dimensional array",
            "An array of arrays that stores data in the form of rows and columns, similar to a table or a matrix."
        ),

        heading("Declaration"),

        code(
            `data_type array_name[rows][columns];

int matrix[3][4];      /* 3 rows and 4 columns = 12 elements */`,
            "c",
            "Syntax"
        ),

        heading("Initialisation"),

        code(
            `/* Method 1 — row by row */
int a[2][3] = { {1, 2, 3}, {4, 5, 6} };

/* Method 2 — single list */
int b[2][3] = {1, 2, 3, 4, 5, 6};

/* Method 3 — rows omitted */
int c[][3] = { {1, 2, 3}, {4, 5, 6} };`,
            "c",
            "Three ways to initialise"
        ),

        heading("Memory Layout"),

        table(
            ["", "Column 0", "Column 1", "Column 2"],
            [
                ["Row 0", "a[0][0] = 1", "a[0][1] = 2", "a[0][2] = 3"],
                ["Row 1", "a[1][0] = 4", "a[1][1] = 5", "a[1][2] = 6"],
            ]
        ),

        text(
            "In C, a two dimensional array is stored in row major order, which means all elements of the first row are stored first, followed by all elements of the second row, and so on."
        ),

        heading("Reading and Displaying a Matrix"),

        code(
            `#include <stdio.h>

int main()
{
    int a[2][3], i, j;

    printf("Enter 6 elements :\\n");

    for (i = 0; i < 2; i++)
        for (j = 0; j < 3; j++)
            scanf("%d", &a[i][j]);

    printf("\\nMatrix is :\\n");

    for (i = 0; i < 2; i++)
    {
        for (j = 0; j < 3; j++)
            printf("%d\\t", a[i][j]);

        printf("\\n");
    }

    return 0;
}`,
            "c",
            "Input and output of a matrix"
        ),

        output(`Enter 6 elements :
1 2 3 4 5 6

Matrix is :
1	2	3	
4	5	6	`),

        heading("Addition of Two Matrices"),

        code(
            `#include <stdio.h>

int main()
{
    int a[2][2] = { {1, 2}, {3, 4} };
    int b[2][2] = { {5, 6}, {7, 8} };
    int c[2][2], i, j;

    for (i = 0; i < 2; i++)
        for (j = 0; j < 2; j++)
            c[i][j] = a[i][j] + b[i][j];

    printf("Sum of matrices :\\n");

    for (i = 0; i < 2; i++)
    {
        for (j = 0; j < 2; j++)
            printf("%d\\t", c[i][j]);

        printf("\\n");
    }

    return 0;
}`,
            "c",
            "Matrix addition"
        ),

        output(`Sum of matrices :
6	8	
10	12	`),

        heading("Transpose of a Matrix"),

        code(
            `#include <stdio.h>

int main()
{
    int a[2][3] = { {1, 2, 3}, {4, 5, 6} };
    int i, j;

    printf("Transpose :\\n");

    for (i = 0; i < 3; i++)
    {
        for (j = 0; j < 2; j++)
            printf("%d\\t", a[j][i]);

        printf("\\n");
    }

    return 0;
}`,
            "c",
            "Interchanging rows and columns"
        ),

        output(`Transpose :
1	4	
2	5	
3	6	`),

        note(
            "To process a two dimensional array, two nested loops are always required. The outer loop controls the rows and the inner loop controls the columns.",
            "tip"
        ),

        heading("One Dimensional versus Two Dimensional Arrays"),

        table(
            ["Basis", "One Dimensional", "Two Dimensional"],
            [
                ["Structure", "A single list", "Rows and columns"],
                ["Declaration", "int a[5];", "int a[3][4];"],
                ["Subscripts", "One", "Two"],
                ["Loops needed", "One", "Two nested loops"],
                ["Used for", "Lists such as marks", "Tables and matrices"],
            ]
        ),

        keyPoints([
            "A two dimensional array stores data in rows and columns.",
            "Total elements equal rows multiplied by columns.",
            "Elements are stored in row major order in C.",
            "Two nested loops are required to process a matrix.",
            "Both row and column indexes begin at zero.",
        ]),
    ],

    {
        summary:
            "Learn how to declare, initialise and process two dimensional arrays including matrix addition and transpose.",
        minutes: 10,
        tags: ["c", "arrays", "matrix"],

        mcqs: [
            mcq(
                "How many elements does the array int a[3][4] contain?",
                ["7", "12", "34", "16"],
                1,
                "The total is rows multiplied by columns, which is three times four equals twelve."
            ),
            mcq(
                "In C, a two dimensional array is stored in:",
                ["Column major order", "Row major order", "Random order", "Reverse order"],
                1,
                "C stores two dimensional arrays in row major order."
            ),
            mcq(
                "How many nested loops are needed to process a two dimensional array?",
                ["One", "Two", "Three", "Four"],
                1,
                "Two nested loops are required, one for rows and one for columns."
            ),
            mcq(
                "In the array int a[2][3], the element a[1][2] refers to:",
                ["Row 1 column 2", "Row 2 column 3", "Row 2 column 1", "Row 1 column 3"],
                0,
                "Indexing starts at zero, so a[1][2] is the second row and third column."
            ),
        ],

        questions: [
            qa(
                "What is a two dimensional array? Explain its declaration and initialisation.",
                "A two dimensional array is an array of arrays that stores data in the form of rows and columns like a table. It is declared by writing the data type, the array name, and two subscripts giving the number of rows and columns. It can be initialised row by row using nested braces, as a single continuous list of values, or by omitting the row size when an initialiser list is provided.",
                4
            ),
            qa(
                "Write a program to add two matrices.",
                "Declare two matrices with the same dimensions and a third matrix to hold the result. Use two nested loops where the outer loop runs over the rows and the inner loop runs over the columns. Inside the inner loop assign the sum of the corresponding elements of the first and second matrix to the result matrix. Finally display the result using another pair of nested loops.",
                5
            ),
            qa(
                "Differentiate between one dimensional and two dimensional arrays.",
                "A one dimensional array is a simple list of elements declared with a single subscript and processed using one loop, and it is used for lists such as marks. A two dimensional array stores data in rows and columns, is declared with two subscripts, requires two nested loops to process, and is used for tables and matrices.",
                4
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit3Topics = [
    operatorsInC,
    decisionMaking,
    switchStatement,
    loopingStatements,
    jumpStatements,
    arrays,
    twoDimensionalArrays,
];
