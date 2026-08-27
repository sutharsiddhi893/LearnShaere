/* =========================================================
   BCA � SEM 2 � Advanced C Programming
   UNIT 2 � Structures, Unions, Bitwise Ops and Advanced Topics
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
  keyPoints,
  mcq,
  qa,
} from "../../../../helpers";

/* =========================================================
   TOPIC 1 � Structures, Unions and Enumerations
========================================================= */

const structuresUnions = createTopic(
    "structures-unions-and-enumerations",
    "Structures, Unions and Enumerations",

    [
        definition(
            "Structure",
            "A user defined data type in C that groups together variables of different types under a single name, used to represent a record such as a student or an employee."
        ),

        heading("Defining and Using a Structure"),

        code(
            `struct Student {
    int id;
    char name[30];
    float marks;
};

struct Student s1 = {101, "Amit", 89.5};
printf("%d %s %f\\n", s1.id, s1.name, s1.marks);
`,
            "c",
            "Structure basics"
        ),

        heading("Accessing Members"),

        table(
            ["Access", "Syntax", "Used When"],
            [
                ["Dot", "s.id", "Accessing through a structure variable"],
                ["Arrow", "p->id", "Accessing through a pointer to the structure"],
            ]
        ),

        code(
            `struct Student s = {1, "Riya", 90};
struct Student *p = &s;

printf("%d\\n", s.id);      // dot
printf("%d\\n", p->id);     // arrow (same as (*p).id)
`,
            "c",
            "Dot and arrow"
        ),

        heading("Array of Structures"),

        code(
            `struct Student batch[3] = {
    {1, "Amit", 80},
    {2, "Riya", 85},
    {3, "Jay",  90}
};

for (int i = 0; i < 3; i++) {
    printf("%d %s %f\\n", batch[i].id, batch[i].name, batch[i].marks);
}
`,
            "c",
            "Array of structures"
        ),

        heading("Nested Structures"),

        code(
            `struct Date {
    int day, month, year;
};

struct Employee {
    char name[30];
    struct Date joining;
};

struct Employee e = {"Amit", {15, 8, 2024}};
printf("%d-%d-%d\\n", e.joining.day, e.joining.month, e.joining.year);
`,
            "c",
            "Nested structure"
        ),

        heading("typedef"),

        code(
            `typedef struct {
    int id;
    char name[30];
} Student;

Student s = {1, "Amit"};
Student *p = &s;
`,
            "c",
            "typedef for cleaner code"
        ),

        heading("Passing Structures to Functions"),

        code(
            `void print(struct Student s) {
    printf("%d %s\\n", s.id, s.name);
}

void update(struct Student *p) {
    p->marks += 5;
}
`,
            "c",
            "Pass by value and by pointer"
        ),

        heading("Unions"),

        definition(
            "Union",
            "A user defined data type similar to a structure, but all members share the same memory. Only one member holds a meaningful value at any time. The size of a union is the size of its largest member."
        ),

        code(
            `union Data {
    int i;
    float f;
    char str[20];
};

union Data d;
d.i = 10;
printf("%d\\n", d.i);

d.f = 3.14;     // overwrites i
printf("%f\\n", d.f);
`,
            "c",
            "Union example"
        ),

        note(
            "Use a union when a value can be one of several types but never more than one at a time, such as the value of a variable that may be int, float or string depending on a tag. Use a structure when you need to store several different fields together.",
            "exam",
            "Frequently Asked"
        ),

        heading("Struct vs Union"),

        table(
            ["Basis", "Struct", "Union"],
            [
                ["Memory", "Sum of all member sizes", "Size of largest member"],
                ["Members", "All members have their own storage", "All members share storage"],
                ["Access", "Can read all members at once", "Only the last written member is valid"],
                ["Initialisation", "Initialise first member", "Initialise first member"],
                ["Use", "Group different fields", "Variant data type"],
            ]
        ),

        heading("Enumerations"),

        code(
            `enum Day { MON, TUE, WED, THU, FRI, SAT, SUN };
enum Day today = WED;

printf("%d\\n", today);   // 2 (counting from 0)
`,
            "c",
            "Enumeration"
        ),

        list([
            "By default the first name has value 0, the next 1, and so on.",
            "Values can be set explicitly: enum Color { RED = 1, GREEN, BLUE };",
            "Used for readable code instead of magic numbers.",
        ]),

        keyPoints([
            "Structure groups different types; union shares memory.",
            "Use . for variables and -> for pointers.",
            "typedef creates a new name for a type.",
            "Structures can be nested and arrayed.",
            "Unions are useful for variant data.",
        ]),
    ],

{
    summary:
    "Master structures, unions, enums, typedef, nested structures and passing structs to functions.",
        minutes: 14,
            tags: ["structure", "union", "enum", "typedef", "important"],

                mcqs: [
                    mcq(
                        "Arrow operator is used with:",
                        ["Structure variable", "Pointer to structure", "Array", "Union only"],
                        1,
                        "ptr->member is shorthand for (*ptr).member."
                    ),
                    mcq(
                        "A union's size equals:",
                        ["Sum of all members", "Largest member", "Smallest member", "Number of members"],
                        1,
                        "Union size is the size of its largest member."
                    ),
                    mcq(
                        "First member of an enum has value:",
                        ["1", "0", "-1", "Random"],
                        1,
                        "Default first value is 0; others increment by 1."
                    ),
                    mcq(
                        "typedef is used to:",
                        ["Define a function", "Create a new type name", "Loop", "Compare"],
                        1,
                        "typedef creates an alias for an existing type."
                    ),
                    mcq(
                        "Which is true about struct and union?",
                        ["Both have shared memory", "Struct has separate memory", "Union has separate memory", "Both are same"],
                        1,
                        "Struct members have separate memory; union members share memory."
                    ),
                    mcq(
                        "Structure is:",
                        ["Primitive type", "Derived type", "Pointer type", "Function"],
                        1,
                        "Structure is a user defined derived data type."
                    ),
                ],

    questions: [
        qa(
            "Differentiate between structure and union.",
            "A structure is a user defined data type whose members are stored in separate memory locations. The total size of a structure is the sum of the sizes of all its members, possibly with some padding. A union is also a user defined data type, but all members share the same memory, so its size is equal to the size of the largest member. Only one member of a union holds a meaningful value at a time. Use a structure when you need to store all fields together and a union when a value may be one of several types.",
            4
        ),
        qa(
            "Explain typedef with an example.",
            "typedef is a keyword that creates an alias or new name for an existing type. It does not create a new type; it just makes code easier to read. For example, typedef struct { int id; char name[30]; } Student; lets you declare variables as Student s instead of struct Student s. It is widely used for structures, function pointers and complex declarations to make the code cleaner.",
            4
        ),
        qa(
            "Explain nested structures with an example.",
            "A nested structure is a structure that contains another structure as a member. For example, an Employee structure can contain a Date structure for the joining date. The members of the inner structure are accessed through the dot operator as e.joining.day or through the arrow operator as p->joining.day. Nested structures are useful for representing hierarchical data such as students with addresses, employees with dates and so on.",
            4
        ),
        qa(
            "How are structures passed to functions in C?",
            "A structure can be passed to a function by value or by pointer. Passing by value copies the entire structure, which can be expensive for large structures. Passing by pointer passes only the address, which is faster and allows the function to modify the original. The dot operator is used inside the function on the local copy, while the arrow operator is used when the parameter is a pointer. In modern C code, large structures are always passed by pointer.",
            4
        ),
    ],
  }
);

/* =========================================================
   TOPIC 2 � Bitwise Operators
========================================================= */

const bitwise = createTopic(
    "bitwise-operators",
    "Bitwise Operators",

    [
        definition(
            "Bitwise Operator",
            "An operator that works on the individual bits of integer values, allowing efficient low level manipulation of data, often used in systems programming, embedded systems and graphics."
        ),

        heading("List of Bitwise Operators"),

        table(
            ["Operator", "Symbol", "Description", "Example (a=60, b=13)"],
            [
                ["AND", "&", "1 if both bits are 1", "60 & 13 = 12"],
                ["OR", "|", "1 if any bit is 1", "60 | 13 = 61"],
                ["XOR", "^", "1 if bits differ", "60 ^ 13 = 49"],
                ["NOT", "~", "Inverts all bits", "~60 = -61 (two's complement)"],
                ["Left shift", "<<", "Shift left by n, multiply by 2n", "60 << 2 = 240"],
                ["Right shift", ">>", "Shift right by n, divide by 2n", "60 >> 2 = 15"],
            ]
        ),

        code(
            `int a = 60;   // 0011 1100
int b = 13;   // 0000 1101

printf("%d\\n", a & b);   // 12  = 0000 1100
printf("%d\\n", a | b);   // 61  = 0011 1101
printf("%d\\n", a ^ b);   // 49  = 0011 0001
printf("%d\\n", a << 2);  // 240 = 1111 0000
printf("%d\\n", a >> 2);  // 15  = 0000 1111
printf("%d\\n", ~a);      // -61
`,
            "c",
            "Bitwise operators in C"
        ),

        heading("Bitwise AND, OR, XOR Truth Table"),

        table(
            ["A", "B", "A&B", "A|B", "A^B"],
            [
                ["0", "0", "0", "0", "0"],
                ["0", "1", "0", "1", "1"],
                ["1", "0", "0", "1", "1"],
                ["1", "1", "1", "1", "0"],
            ]
        ),

        note(
            "XOR is very useful. x ^ x = 0, x ^ 0 = x. So XOR is used to swap two variables without a temp, to find the unique element in an array where every other element appears twice, and to encode simple cryptography.",
            "tip",
            "XOR Tricks"
        ),


    code(
        `a = a ^ b;
b = a ^ b;
a = a ^ b;
// now a and b are swapped
`,
        "c",
        "XOR swap"
    ),

        heading("Bit Masking"),

        text(
            "Bit masking uses AND, OR and shifts to set, clear, toggle and test individual bits of a value. A mask is a pattern with 1s where the operation is desired and 0s elsewhere."
        ),

        code(
            `// Set the 3rd bit (bit index 2) of x
x = x | (1 << 2);

// Clear the 3rd bit
x = x & ~(1 << 2);

// Toggle the 5th bit
x = x ^ (1 << 4);

// Test if the 4th bit is set
if (x & (1 << 3), printf("Bit is 1");
`,
            "c",
            "Set, clear, toggle and test"
        ),

        heading("Bit Fields"),

        code(
            `struct Status {
    unsigned int active : 1;
    unsigned int mode   : 2;
    unsigned int error  : 3;
};

struct Status s = {1, 2, 5};
`,
            "c",
            "Bit fields in a structure"
        ),

        list([
            "Bit fields pack several small integers into one machine word.",
            "Useful in hardware registers, file formats and network protocols.",
            "Cannot take the address of a bit field.",
            "Order of allocation is implementation defined.",
        ]),

        heading("Practical Uses of Bitwise Operators"),

        list([
            "Testing, setting and clearing flags in operating systems.",
            "Fast multiplication and division by powers of two using shifts.",
            "Encoding and decoding network packets.",
            "Compression algorithms and cryptography.",
            "Graphics: setting and clearing individual pixels.",
        ]),

        keyPoints([
            "Bitwise operators work on bits of integers.",
            "AND for masking, OR for setting, XOR for toggling and swap.",
            "<< and >> multiply or divide by powers of two.",
            "Bit fields compactly store small integers in a struct.",
            "Use unsigned types to avoid surprises with sign extension.",
        ]),
    ],

            {
                summary:
                    "Master bitwise AND, OR, XOR, NOT and shifts, bit masking tricks, XOR swap and bit fields.",
                minutes: 11,
                tags: ["bitwise", "masking", "shift", "bit-field", "important"],

                mcqs: [
                    mcq(
                        "The bitwise AND of 1100 and 1010 is:",
                        ["1000", "1110", "0110", "1100"],
                        0,
                        "1 AND 1 = 1, others 0. 1100 AND 1010 = 1000."
                    ),
                    mcq(
                        "a << 2 is equivalent to:",
                        ["a / 2", "a * 4", "a + 2", "a * 2"],
                        1,
                        "Left shift by n multiplies by 2n. 2n=4."
                    ),
                    mcq(
                        "XOR of a number with itself is:",
                        ["a", "0", "1", "-a"],
                        1,
                        "a ^ a = 0 because every bit cancels."
                    ),
                    mcq(
                        "To set a bit, you use:",
                        ["AND", "OR", "XOR", "NOT"],
                        1,
                        "Bitwise OR with a mask sets the bit to 1."
                    ),
                    mcq(
                        "To clear a bit, you use:",
                        ["OR with 1", "AND with 0", "XOR with 0", "Shift left"],
                        1,
                        "AND with a 0 at the position clears the bit."
                    ),
                    mcq(
                        "Bit fields are declared inside:",
                        ["Array", "Structure", "Function", "Pointer"],
                        1,
                        "Bit fields are members of a structure with a width specified."
                    ),
                ],

                questions: [
                    qa(
                        "Explain the bitwise operators in C.",
                        "C provides six bitwise operators that work on the individual bits of integer values. AND (&) sets a bit to 1 only if both operands have 1. OR (|) sets a bit to 1 if any operand has 1. XOR (^) sets a bit to 1 if the operands differ. NOT (~) inverts all bits. Left shift (<<) moves bits towards higher positions, multiplying by 2n. Right shift (>>) moves bits towards lower positions, dividing by 2n. These are used in low level programming for masking, setting, clearing and testing individual bits.",
                        4
                    ),
                    qa(
                        "Explain bit masking with an example.",
                        "Bit masking is the technique of using AND, OR and shifts to manipulate specific bits of a value. A mask is a number with 1s at the bits of interest and 0s elsewhere. For example, to set the 3rd bit of x, compute x = x | (1 << 2). To clear it, compute x = x & ~(1 << 2). To toggle it, compute x = x ^ (1 << 2). To test if it is set, use (x & (1 << 2), != 0. These four operations cover most low level flag handling.",
                        4
                    ),
                    qa(
                        "Swap two integers without a temporary variable.",
                        "Use the XOR trick. The sequence a = a ^ b; b = a ^ b; a = a ^ b; swaps the values of a and b without using any extra variable. It works because a ^ b ^ b = a and a ^ a ^ b = b. The operations are constant time and use no extra memory. Care must be taken that a and b refer to distinct memory locations; using the trick on the same variable twice cancels it out.",
                        3
                    ),
                    qa(
                        "What are bit fields? Where are they used?",
                        "Bit fields are members of a structure whose width in bits is specified after a colon. They allow several small integer values to be packed into a single machine word. They are widely used in systems programming to map hardware registers and to decode file formats such as JPEG and network protocols such as IP. The compiler automatically packs the fields, but the order and padding are implementation defined, so portable code should not depend on the exact layout.",
                        4
                    ),
                ],
            }
        );

/* =========================================================
   TOPIC 3 � Recursion in Depth
========================================================= */

const recursion = createTopic(
    "recursion-in-depth",
    "Recursion in Depth",

    [
        definition(
            "Recursion",
            "A technique in which a function calls itself, either directly or indirectly, to solve a problem by reducing it to smaller instances of the same problem."
        ),

        heading("Two Parts of a Recursive Function"),

        list([
            "Base case � the condition under which the function stops calling itself.",
            "Recursive case � the function calls itself with a smaller input.",
        ]),

        code(
            `int factorial(int n) {
    if (n <= 1) return 1;        // base case
    return n * factorial(n - 1); // recursive case
}
`,
            "c",
            "Factorial"
        ),

        heading("Call Stack and Stack Frames"),

        text(
            "Each recursive call creates a new stack frame holding the parameters, local variables and the return address. When the base case is reached, the frames unwind and the partial results are combined to produce the final answer."
        ),

        code(
            `factorial(4)
= 4 * factorial(3)
= 4 * 3 * factorial(2)
= 4 * 3 * 2 * factorial(1)
= 4 * 3 * 2 * 1
= 24
`,
            "text",
            "Recursion trace"
        ),


    table(
        ["Problem", "Code"],
        [
            ["Factorial", "int f(int n) { return n <= 1 ? 1 : n * f(n-1); }"],
            ["Fibonacci", "int f(int n) { return n < 2 ? n : f(n-1) + f(n-2); }"],
            ["Power", "int p(int a,int b){ return b==0?1:a*p(a,b-1); }"],
            ["Sum of digits", "int s(int n){ return n==0?0:n%10+s(n/10); }"],
            ["Reverse number", "int r(int n,int rev){ return n==0?rev:r(n/10,rev*10+n%10); }"],
            ["Tower of Hanoi", "Move n-1 disks, move largest, move n-1"],
            ["Tree traversal", "inorder, preorder, postorder"],
            ["Quick sort", "Partition around pivot, recurse on halves"],
            ["Merge sort", "Divide, sort halves, merge"],
            ["DFS of graph", "Visit, recurse on unvisited neighbours"],
        ]
    ),

        heading("Fibonacci Using Recursion"),

        code(
            `int fib(int n) {
    if (n < 2) return n;
    return fib(n - 1) + fib(n - 2);
}
`,
            "c",
            "Naive Fibonacci"
        ),

        note(
            "Naive fib is O(2n) because of repeated subproblems. Use memoization or bottom up dynamic programming to compute Fibonacci in O(n) time and O(1) space.",
            "warning",
            "Exponential Cost"
        ),

        heading("Memoized Fibonacci"),

        code(
            `long long memo[100];

long long fib(int n) {
    if (n < 2) return n;
    if (memo[n] != 0) return memo[n];
    return memo[n] = fib(n - 1) + fib(n - 2);
}
`,
            "c",
            "Memoized Fibonacci"
        ),


definition(
    "Tail Recursion",
    "A special form in which the recursive call is the last operation of the function. Modern compilers can convert tail recursion into a loop, saving stack space."
),

    code(
        `// NOT tail recursive
int fact(int n) {
    if (n <= 1) return 1;
    return n * fact(n - 1);   // multiplication happens after call
}

// Tail recursive
int factTR(int n, int acc) {
    if (n <= 1) return acc;
    return factTR(n - 1, n * acc);
}
`,
        "c",
        "Tail recursion example"
    ),


table(
    ["Basis", "Recursion", "Iteration"],
    [
        ["Definition", "Function calls itself", "Loop repeats a block"],
        ["State", "Stored in call stack", "Stored in loop variables"],
        ["Memory", "More memory per call", "Less memory"],
        ["Speed", "Slower due to function call", "Usually faster"],
        ["Readability", "Cleaner for trees and divide and conquer", "Cleaner for simple counting"],
        ["Risk", "Stack overflow if too deep", "Infinite loop if no exit"],
    ]
),


code(
    `int isEven(int);
int isOdd(int);

int isEven(int n) {
    if (n == 0) return 1;
    return isOdd(n - 1);
}

int isOdd(int n) {
    if (n == 0) return 0;
    return isEven(n - 1);
}
`,
    "c",
    "Indirect recursion"
),

    keyPoints([
        "Every recursive function must have a base case.",
        "Each call creates a new stack frame.",
        "Memoization avoids recomputation in overlapping subproblems.",
        "Tail recursion can be optimised by the compiler.",
        "Recursion suits trees, graphs and divide and conquer.",
    ]),
  ],

        {
            summary:
                "Master recursion: base case, call stack, classic examples, memoization, tail recursion and recursion vs iteration.",
            minutes: 13,
            tags: ["recursion", "factorial", "fibonacci", "tail-recursion", "important"],

            mcqs: [
                mcq(
                    "A recursive function must have:",
                    ["A loop", "A base case", "Two parameters", "Global variables"],
                    1,
                    "Without a base case the recursion would never end."
                ),
                mcq(
                    "factorial(0) returns:",
                    ["0", "1", "Error", "Undefined"],
                    1,
                    "By definition 0! = 1."
                ),
                mcq(
                    "Time complexity of naive Fibonacci is:",
                    ["O(n)", "O(log n)", "O(2n)", "O(n�)"],
                    2,
                    "Each call produces two more, giving exponential time."
                ),
                mcq(
                    "Tail recursion can be optimised to:",
                    ["A loop", "A function", "A macro", "A class"],
                    0,
                    "Compilers convert tail recursion to a loop to save stack space."
                ),
                mcq(
                    "Recursion uses which data structure internally?",
                    ["Queue", "Stack", "Heap", "Array"],
                    1,
                    "Function calls use the call stack."
                ),
                mcq(
                    "In memoized Fibonacci, the array is used to:",
                    ["Sort values", "Cache results", "Store inputs", "Print output"],
                    1,
                    "Memoization caches the results of subproblems to avoid recomputation."
                ),
            ],

            questions: [
                qa(
                    "What is recursion? Give an example.",
                    "Recursion is a technique in which a function calls itself, directly or indirectly, to solve a problem by breaking it into smaller subproblems of the same form. A recursive function must always have a base case that stops the recursion. The classic example is factorial: factorial(n) = 1 if n is 0 or 1, otherwise factorial(n) = n � factorial(n-1). Each call creates a new stack frame, and when the base case is reached the frames unwind and combine to give the final answer.",
                    4
                ),
                qa(
                    "Explain memoization with Fibonacci as an example.",
                    "Memoization is the technique of storing the results of expensive function calls and returning the cached result when the same input occurs again. The naive recursive Fibonacci has exponential time complexity because it recomputes the same values many times. By using an array memo[] and storing the result of each fib(k) when it is first computed, every value is computed only once, giving O(n) time. The same idea applies to many dynamic programming problems such as longest common subsequence and knapsack.",
                    4
                ),
                qa(
                    "Differentiate between recursion and iteration.",
                    "Recursion uses function calls to repeat work and stores its state on the call stack, while iteration uses loops to repeat work and stores its state in loop variables. Recursion is more elegant for problems that have a natural recursive structure, such as trees, graphs and divide and conquer. Iteration is usually faster and uses less memory because there is no function call overhead. Recursion can lead to stack overflow if the depth is too large, while iteration can lead to an infinite loop if the termination condition is missing.",
                    4
                ),
                qa(
                    "What is tail recursion? Why is it important?",
                    "A function is tail recursive if the recursive call is the very last operation, with no pending computation after it. Many compilers optimise tail recursion by converting it into a loop, which avoids creating a new stack frame for every call. This means a tail recursive function can run in constant stack space regardless of the depth. For example, factTR(n, 1) computes factorial by passing the running product as an accumulator, so the call is the last step and is tail recursive.",
                    4
                ),
            ],
        }
    );

/* =========================================================
   TOPIC 4 � Storage Classes and Scope
========================================================= */

const storageClasses = createTopic(
    "storage-classes-and-scope",
    "Storage Classes and Scope",

    [
        definition(
            "Storage Class",
            "A keyword in C that determines the lifetime, visibility, default value and storage location of a variable. C provides four storage classes: auto, register, static and extern."
        ),

        heading("Summary of Storage Classes"),

        table(
            ["Class", "Keyword", "Storage", "Scope", "Lifetime", "Default Value"],
            [
                ["auto", "auto", "Stack", "Block", "Block", "Garbage"],
                ["register", "register", "CPU register", "Block", "Block", "Garbage"],
                ["static (local)", "static", "Data segment", "Block", "Program", "0"],
                ["static (global)", "static", "Data segment", "File", "Program", "0"],
                ["extern", "extern", "Data segment", "Program", "Program", "0"],
            ]
        ),

        heading("auto Variables"),

        list([
            "Default for local variables declared inside a function or block.",
            "Stored on the stack; created when the block is entered and destroyed on exit.",
            "Initial value is undefined; must be assigned before use.",
        ]),

        code(
            `void f() {
    int x = 10;     // auto by default
    auto int y = 20;
}
`,
            "c",
            "auto variables"
        ),

        heading("register Variables"),

        list([
            "A hint to the compiler to store the variable in a CPU register for fast access.",
            "Address of a register variable cannot be taken.",
            "Modern compilers ignore the hint if registers are full.",
        ]),

        heading("static Variables"),

        code(
            `void counter() {
    static int count = 0;
    count++;
    printf("%d\\n", count);
}

int main() {
    counter();  // 1
    counter();  // 2
    counter();  // 3
}
`,
            "c",
            "Static local variable"
        ),

        list([
            "A static local variable retains its value between function calls.",
            "Initialised only once, on the first call to the function.",
            "Default initial value is 0.",
        ]),

        heading("extern Variables"),

        code(
            `// file1.c
int count = 0;
void increment() { count++; }

// file2.c
extern int count;       // declaration, no definition
printf("%d\\n", count);  // accesses the same count
`,
            "c",
            "extern across files"
        ),

        list([
            "extern declares a variable that is defined in another file or elsewhere in the same file.",
            "No storage is allocated; the declaration only refers to the existing variable.",
            "Used to share global variables between translation units.",
        ]),

        note(
            "Use static for functions that should not be visible outside the file, and extern for functions whose prototype is included through a header. This is the basis of modular programming in C.",
            "tip",
            "Modular Programming"
        ),


    table(
        ["Scope", "Description"],
        [
            ["Block", "From the point of declaration to the end of the enclosing block"],
            ["Function", "Labels in a function"],
            ["File", "From declaration to end of the file (for global identifiers)"],
            ["Program", "Across files using extern"],
        ]
    ),


code(
    `int x = 10;          // global

void f() {
    int x = 20;         // local, hides global
    {
        int x = 30;     // block, hides both
        printf("%d\\n", x);   // 30
    }
    printf("%d\\n", x);       // 20
}

printf("%d\\n", x);           // 10
`,
    "c",
    "Scope and shadowing"
),

        keyPoints([
        "auto is the default for local variables.",
        "register requests a CPU register.",
        "static retains value between calls.",
        "extern shares data across files.",
        "Inner scope hides outer scope variables.",
    ]),
  ],

        {
            summary:
                "Master storage classes (auto, register, static, extern), scope rules and lifetime of variables.",
            minutes: 10,
            tags: ["storage-class", "scope", "static", "extern", "important"],

            mcqs: [
                mcq(
                    "Default storage class for a local variable is:",
                    ["auto", "register", "static", "extern"],
                    0,
                    "auto is the default for local variables."
                ),
                mcq(
                    "static local variable is initialised:",
                    ["Every call", "First call only", "Never", "At compile time"],
                    1,
                    "static locals are initialised only once, on the first call."
                ),
                mcq(
                    "extern is used to:",
                    ["Define a variable", "Declare a variable defined elsewhere", "Allocate memory", "End the program"],
                    1,
                    "extern declares without allocating storage."
                ),
                mcq(
                    "register variable:",
                    ["Has address", "Cannot take address", "Is global", "Is static"],
                    1,
                    "Address of a register variable cannot be taken."
                ),
                mcq(
                    "Default value of static int is:",
                    ["Garbage", "0", "1", "-1"],
                    1,
                    "Static variables are initialised to 0 by default."
                ),
                mcq(
                    "Scope of a block local variable is:",
                    ["Whole program", "File", "Block", "Function"],
                    2,
                    "A block local variable is visible from its declaration to the end of the block."
                ),
            ],

            questions: [
                qa(
                    "Explain the four storage classes in C.",
                    "The four storage classes are auto, register, static and extern. auto is the default for local variables; they live on the stack and have garbage value until initialised. register requests the compiler to keep the variable in a CPU register for fast access; their address cannot be taken. static local variables are stored in the data segment, retain their value between calls and are initialised to 0 by default. static global variables and functions are limited to the file in which they are defined. extern is used to declare a global variable or function that is defined in another file, so the same variable can be shared across the program.",
                    4
                ),
                qa(
                    "Differentiate between auto and static variables.",
                    "An auto variable is created on the stack every time its block is entered and destroyed when the block exits. Its value is lost between calls, and its initial value is undefined. A static local variable is stored in the data segment for the entire lifetime of the program. It is initialised only once, on the first call to the function, and its value persists between calls. Use auto for ordinary locals and static when you need to remember state across calls, such as a function call counter.",
                    4
                ),
                qa(
                    "What is the use of extern?",
                    "extern is used to declare a variable or function that is defined in another source file or elsewhere in the same file. It does not allocate storage; it only tells the compiler that the name refers to an existing object. This is the mechanism by which a large C program is split into multiple files. Each file provides the definition, and the other files include a header with the extern declaration so they can use the same variable or function.",
                    4
                ),
                qa(
                    "Explain scope and lifetime with an example.",
                    "Scope is the region of the program text where a name is visible. Lifetime is the period during execution when the storage exists. For example, an int x = 10; inside a function has block scope, visible only until the closing brace, and lifetime equal to the block. A static int y; inside the same function has block scope but program lifetime, so the storage is allocated once and persists between calls. A global int z; has file scope and program lifetime.",
                    4
                ),
            ],
        }
    );

/* =========================================================
   TOPIC 5 � Error Handling, Debugging and Multi-File Programs
========================================================= */

const errorHandling = createTopic(
    "error-handling-debugging-and-multifile",
    "Error Handling, Debugging and Multi-File Programs",

    [
        heading("Types of Errors"),

        table(
            ["Type", "When Detected", "Example"],
            [
                ["Compile time", "By the compiler", "Syntax error, type mismatch"],
                ["Link time", "By the linker", "Undefined function or variable"],
                ["Run time", "During execution", "Divide by zero, null pointer dereference"],
                ["Logical", "Wrong output but no crash", "Using wrong formula, off by one"],
            ]
        ),

        heading("errno and perror"),

        text(
            "errno is a global integer set by many library functions when an error occurs. The header errno.h declares it and defines the standard error codes. perror prints a user message followed by the textual description of the current errno value."
        ),

        code(
            `#include <stdio.h>
#include <errno.h>
#include <string.h>

FILE *fp = fopen("missing.txt", "r");
if (fp == NULL) {
    fprintf(stderr, "Error: %s\\n", strerror(errno),;
    perror("fopen failed");
    return 1;
}
`,
            "c",
            "errno and perror"
        ),


    code(
        `#include <assert.h>

int divide(int a, int b) {
    assert(b != 0);
    return a / b;
}
`,
        "c",
        "assert example"
    ),

        list([
            "assert checks a condition and aborts the program if false.",
            "Used during development to catch programmer mistakes.",
            "Compiled out if NDEBUG is defined before including assert.h.",
        ]),


code(
    `#include <signal.h>

void handler(int sig) {
    printf("Caught signal %d\\n", sig);
    exit(1);
}

int main() {
    signal(SIGINT, handler);
    while (1) {}   // infinite loop, press Ctrl+C
}
`,
    "c",
    "Signal handler for SIGINT"
),


list([
    "setjmp saves the current state of the program (stack and registers).",
    "longjmp jumps back to a previously saved state.",
    "Useful for non local exit from deep function calls.",
    "Should be used carefully; misuse can leak resources.",
]),


text(
    "Large C programs are split into multiple files. Each file is compiled separately and then linked together. Header files contain shared declarations and are included with #include."
),

    code(
        `// mathlib.h
#ifndef MATHLIB_H
#define MATHLIB_H
int add(int a, int b);
int sub(int a, int b);
#endif

// mathlib.c
int add(int a, int b) { return a + b; }
int sub(int a, int b) { return a - b; }

// main.c
#include <stdio.h>
#include "mathlib.h"

int main() {
    printf("%d %d\\n", add(3, 4), sub(7, 2),;
    return 0;
}
`,
        "c",
        "Multi-file program"
    ),

    note(
        "Header guards (#ifndef ... #define ... #endif) prevent the same header from being included multiple times, which would cause redefinition errors. Always use them in your own header files.",
        "tip",
        "Header Guards"
    ),


code(
    `# Preprocess
gcc -E main.c -o main.i

# Compile to assembly
gcc -S main.i -o main.s

# Assemble to object
gcc -c main.s -o main.o

# Link
gcc main.o mathlib.o -o app

# Or all in one
gcc main.c mathlib.c -o app
`,
    "bash",
    "Compilation steps"
),


code(
    `app: main.o mathlib.o
	gcc main.o mathlib.o -o app

main.o: main.c mathlib.h
	gcc -c main.c

mathlib.o: mathlib.c mathlib.h
	gcc -c mathlib.c

clean:
	rm -f *.o app
`,
    "makefile",
    "Simple Makefile"
),


list([
    "Use printf statements to trace values and control flow.",
    "Use a debugger like gdb to set breakpoints and inspect memory.",
    "Compile with -Wall -Wextra to catch warnings.",
    "Use static analysis tools like cppcheck and splint.",
    "Use valgrind to detect memory leaks and invalid accesses.",
]),

    keyPoints([
        "errno and perror report run time library errors.",
        "assert checks programmer assumptions during development.",
        "signal handles asynchronous events like Ctrl+C.",
        "Multi-file programs use headers, extern and the linker.",
        "Use a Makefile to compile only the files that have changed.",
        ]),
    ],

    {
        summary:
    "Master error handling with errno and assert, signal handling, multi-file programs, header guards and the compilation process.",
        minutes: 13,
            tags: ["error", "assert", "signal", "makefile", "important"],

                mcqs: [
                    mcq(
                        "errno is defined in:",
                        ["stdio.h", "errno.h", "stdlib.h", "assert.h"],
                        1,
                        "errno is declared in errno.h."
                    ),
                    mcq(
                        "perror prints:",
                        ["Only errno number", "Only user message", "User message and errno description", "Nothing"],
                        2,
                        "perror prints the user message followed by the errno description."
                    ),
                    mcq(
                        "assert is compiled out when:",
                        ["DEBUG is defined", "NDEBUG is defined", "Always", "Never"],
                        1,
                        "Defining NDEBUG disables assertions."
                    ),
                    mcq(
                        "signal(SIGINT, h) registers handler for:",
                        ["Termination", "Interrupt (Ctrl+C)", "Segfault", "Arithmetic error"],
                        1,
                        "SIGINT is sent when the user presses Ctrl+C."
                    ),
                    mcq(
                        "Header guard uses:",
                        ["#pragma once", "#ifndef ... #endif", "Both can work", "Neither"],
                        2,
                        "Either #ifndef/#define/#endif or #pragma once prevents multiple inclusion."
                    ),
                    mcq(
                        "Makefile rule format is:",
                        ["target: dependencies", "dependencies: target", "var = value", "if then else"],
                        0,
                        "A Makefile rule is 'target: dependencies' followed by commands."
                    ),
                ],

    questions: [
        qa(
            "Explain errno and perror in C.",
            "errno is a global integer variable defined in errno.h. Many library functions set errno to a non zero value when they fail. The header also defines symbolic constants like ENOENT, EACCES and EIO. perror takes a user supplied string, prints it to stderr followed by a colon and a textual description of the current errno value. Together they provide a portable way to report why a library call failed. The C string function strerror(errno) gives the description as a string for use in custom messages.",
            4
        ),
        qa(
            "Explain header guards and why they are needed.",
            "Header guards are preprocessor directives placed at the top and bottom of a header file. The pattern is #ifndef NAME, #define NAME, ... actual content ..., #endif. The first time the header is included, NAME is not defined, so the body is processed and NAME is defined. On any subsequent inclusion in the same translation unit, NAME is already defined and the body is skipped. This prevents redefinition errors that would otherwise occur if the same header is included in many source files. The alternative is the single line #pragma once supported by most modern compilers.",
            4
        ),
        qa(
            "Describe the compilation process in C.",
            "The compilation of a C program happens in four stages. Preprocessing handles directives like #include and #define, producing a translation unit. Compilation converts the translation unit into assembly code. Assembly converts the assembly code into an object file containing machine code and unresolved symbols. Linking combines the object file with object files of library functions and other source files, resolves the symbols and produces the final executable. In gcc these stages are invoked by -E, -S, -c and the default linking step respectively.",
            4
        ),
        qa(
            "Write a simple Makefile for a two file C program.",
            "A Makefile lists targets, their dependencies and the commands to build them. For a two file project with main.c, math.c and math.h, the Makefile declares app as the main target depending on main.o and math.o. The rule for app links the two object files into the executable. The rule for main.o compiles main.c using gcc -c. The rule for math.o compiles math.c similarly. A 'clean' target with no dependencies removes the object files and the executable so the project can be rebuilt from scratch. The 'make' command builds the first target, which is app by default.",
            4
        ),
    ],
  }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit2Topics = [
    structuresUnions,
    bitwise,
    recursion,
    storageClasses,
    errorHandling,
];


