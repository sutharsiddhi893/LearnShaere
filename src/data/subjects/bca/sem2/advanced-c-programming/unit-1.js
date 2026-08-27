/* =========================================================
   BCA � SEM 2 � Advanced C Programming
   UNIT 1 � Pointers, Dynamic Memory and Data Structures in C
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
   TOPIC 1 � Pointers in Depth
========================================================= */

const pointersInDepth = createTopic(
    "pointers-in-depth",
    "Pointers in Depth",

    [
        definition(
            "Pointer",
            "A variable that stores the memory address of another variable. Pointers are one of the most powerful features of C and are used for dynamic memory, arrays, strings, functions and data structures."
        ),

        heading("Pointer Declaration and Initialisation"),

        code(
            `int a = 10;
int *p;        // declaration
p = &a;        // initialisation: p holds address of a

printf("%d\\n", a);     // 10 (value)
printf("%p\\n", &a);    // address of a
printf("%p\\n", p);     // same address
printf("%d\\n", *p);    // 10 (value at address)
`,
            "c",
            "Pointer basics"
        ),

        heading("Pointer Operators"),

        table(
            ["Operator", "Name", "Description", "Example"],
            [
                ["&", "Address of", "Returns the address of a variable", "&a"],
                ["*", "Dereference / Indirection", "Returns the value at the address", "*p"],
                ["->", "Arrow", "Accesses member through pointer", "ptr->name"],
                ["[]", "Subscript", "Pointer arithmetic on arrays", "p[i]"],
            ]
        ),

        heading("Pointer to Pointer"),

        code(
            `int a = 10;
int *p = &a;       // p points to a
int **pp = &p;     // pp points to p

printf("%d\\n", a);     // 10
printf("%d\\n", *p);    // 10
printf("%d\\n", **pp);  // 10
`,
            "c",
            "Pointer to pointer"
        ),

        heading("Pointer Arithmetic"),

        list([
            "Adding an integer to a pointer moves it by that many elements, not bytes.",
            "p + 1 advances by sizeof(type) bytes.",
            "Subtraction of two pointers gives the number of elements between them.",
            "Allowed operations are +, -, ++, -- and comparison.",
        ]),

        code(
            `int a[5] = {10, 20, 30, 40, 50};
int *p = a;       // points to a[0]

printf("%d\\n", *p);     // 10
printf("%d\\n", *(p+1),; // 20
printf("%d\\n", *(p+4),; // 50
p++;                     // now p points to a[1]
printf("%d\\n", *p);     // 20
`,
            "c",
            "Pointer arithmetic"
        ),

        heading("const with Pointers"),

        table(
            ["Declaration", "Meaning"],
            [
                ["const int *p", "Pointer to a constant integer. Value cannot change through p."],
                ["int *const p", "Constant pointer to integer. Pointer cannot move, but value can."],
                ["const int *const p", "Constant pointer to constant integer. Both fixed."],
            ]
        ),

        heading("Generic Pointer (void *)"),

        list([
            "A void * pointer can hold the address of any data type.",
            "It cannot be dereferenced directly; cast is required.",
            "Used in functions like malloc, memcpy and qsort.",
        ]),

        code(
            `int x = 10;
void *vp = &x;
printf("%d\\n", *(int*)vp);   // cast to int* before dereference
`,
            "c",
            "Void pointer"
        ),

        heading("NULL and Dangling Pointers"),

        definition(
            "NULL Pointer",
            "A pointer that does not point to any valid memory location. It is usually represented by 0 or the constant NULL defined in stddef.h."
        ),

        definition(
            "Dangling Pointer",
            "A pointer that still points to a memory location that has been freed or deallocated. Using it leads to undefined behaviour."
        ),

        note(
            "Always initialise pointers before use. Set freed pointers to NULL immediately after free. Avoid returning the address of a local variable from a function because the memory is deallocated when the function returns.",
            "warning",
            "Common Pitfall"
        ),

        heading("Function Pointers"),

        code(
            `int add(int a, int b) { return a + b; }
int sub(int a, int b) { return a - b; }

int main() {
  int (*fp)(int, int) = add;
  printf("%d\\n", fp(3, 4),;   // 7
  fp = sub;
  printf("%d\\n", fp(3, 4),;   // -1
  return 0;
}
`,
            "c",
            "Function pointer"
        ),

        keyPoints([
            "A pointer stores the address of another variable.",
            "* dereferences, & gives the address.",
            "Pointer arithmetic moves by sizeof(type) bytes.",
            "void * is a generic pointer.",
            "Function pointers allow passing functions as arguments.",
        ]),
    ],

{
    summary:
    "Master pointer basics, arithmetic, void and function pointers, const correctness and dangling pointers.",
        minutes: 14,
            tags: ["pointer", "address", "function-pointer", "important"],

                mcqs: [
                    mcq(
                        "The & operator is used to:",
                        ["Multiply", "Get address", "Dereference", "Compare"],
                        1,
                        "& gives the memory address of a variable."
                    ),
                    mcq(
                        "If p points to int and p++ is executed, p increases by:",
                        ["1 byte", "2 bytes", "4 bytes", "8 bytes"],
                        2,
                        "On 32-bit systems int is 4 bytes, so p++ moves by 4 bytes."
                    ),
                    mcq(
                        "void * is a:",
                        ["Null pointer", "Generic pointer", "Const pointer", "Function pointer"],
                        1,
                        "void * can hold the address of any type."
                    ),
                    mcq(
                        "NULL is defined in:",
                        ["stdio.h", "stdlib.h", "stddef.h", "string.h"],
                        2,
                        "NULL is defined in stddef.h and several other headers."
                    ),
                    mcq(
                        "A dangling pointer:",
                        ["Is always NULL", "Points to freed memory", "Is constant", "Is a function pointer"],
                        1,
                        "A dangling pointer references memory that has been freed."
                    ),
                    mcq(
                        "int (*fp)(int, int) is:",
                        ["Function returning pointer", "Pointer to function", "Array of functions", "Invalid syntax"],
                        1,
                        "It declares a pointer fp to a function taking two ints and returning int."
                    ),
                ],

                    questions: [
                        qa(
                            "Explain the concept of a pointer with an example.",
                            "A pointer is a variable that stores the memory address of another variable. It is declared using the * symbol and assigned the address of a variable using the & operator. For example, int a = 10; int *p = &a; declares a pointer p that points to a. The expression *p gives the value stored at the address held in p, which is 10. Pointers allow indirect manipulation of data and are essential for dynamic memory and efficient array handling.",
                            4
                        ),
                        qa(
                            "What is pointer arithmetic? Why is it useful?",
                            "Pointer arithmetic allows adding or subtracting integer values from a pointer. When 1 is added, the pointer advances by sizeof(type) bytes, not by a single byte. For example, if p is an int* on a system where int is 4 bytes, p+1 points to the next integer. This makes pointer arithmetic a fast and natural way to traverse arrays and to access consecutive memory locations.",
                            4
                        ),
                        qa(
                            "Differentiate between const int *p, int *const p and const int *const p.",
                            "In const int *p, the data pointed to is constant; the value cannot be changed through p, but p itself can be moved. In int *const p, the pointer itself is constant; p always points to the same location, but the value at that location can be changed. In const int *const p, both the pointer and the data are constant; neither can be changed. These help the compiler enforce immutability and improve code safety.",
                            4
                        ),
                        qa(
                            "What is a function pointer? Give an example.",
                            "A function pointer is a pointer that holds the address of a function. It allows passing functions as arguments, storing them in arrays and calling them dynamically. The declaration int (*fp)(int, int) declares a pointer to a function that takes two integers and returns an integer. It can be assigned the address of any compatible function, such as add or subtract, and then called using fp(3, 4). Function pointers are used in callback mechanisms, dispatch tables and implementing polymorphism in C.",
                            4
                        ),
                    ],
  }
);

/* =========================================================
   TOPIC 2 � Dynamic Memory Allocation
========================================================= */

const dynamicMemory = createTopic(
    "dynamic-memory-allocation",
    "Dynamic Memory Allocation",

    [
        definition(
            "Dynamic Memory Allocation",
            "The process of allocating memory at run time from the heap, allowing programs to create variables whose size is not known at compile time and to release them when no longer needed."
        ),

        heading("Memory Areas of a C Program"),

        table(
            ["Area", "Purpose"],
            [
                ["Stack", "Local variables, function parameters; auto allocation and deallocation"],
                ["Heap", "Dynamic memory allocated using malloc, calloc, realloc; manually freed"],
                ["Data segment", "Global and static variables"],
                ["Code segment", "Compiled machine instructions"],
                ["Text", "Read only string literals"],
            ]
        ),

        heading("Dynamic Memory Functions"),

        table(
            ["Function", "Header", "Purpose"],
            [
                ["malloc(n)", "stdlib.h", "Allocate n bytes, returns uninitialised memory"],
                ["calloc(c, s)", "stdlib.h", "Allocate c items of s bytes each, initialised to 0"],
                ["realloc(p, n)", "stdlib.h", "Resize the block pointed by p to n bytes"],
                ["free(p)", "stdlib.h", "Release memory back to the heap"],
            ]
        ),

        code(
            `int *p = (int*)malloc(5 * sizeof(int),;
if (p == NULL) {
    printf("Memory allocation failed");
    return 1;
}
for (int i = 0; i < 5; i++) p[i] = (i + 1) * 10;
for (int i = 0; i < 5; i++) printf("%d ", p[i]);
free(p);
p = NULL;     // good practice
`,
            "c",
            "malloc example"
        ),

        note(
            "malloc does NOT initialise memory. Its contents are unpredictable. Use calloc if you need zero initialised memory. Always check the returned pointer for NULL before use.",
            "warning",
            "Always Check NULL"
        ),

        heading("calloc vs malloc"),

        table(
            ["Basis", "malloc", "calloc"],
            [
                ["Arguments", "1 (total bytes)", "2 (count, size each)"],
                ["Initialisation", "Garbage", "Zero"],
                ["Speed", "Slightly faster", "Slightly slower"],
                ["Syntax", "malloc(n * sizeof(t),", "calloc(n, sizeof(t),"],
            ]
        ),

        heading("realloc"),

        code(
            `int *p = malloc(3 * sizeof(int),;
p[0] = 1; p[1] = 2; p[2] = 3;

p = realloc(p, 6 * sizeof(int),;
p[3] = 4; p[4] = 5; p[5] = 6;
`,
            "c",
            "realloc example"
        ),

        text(
            "realloc may move the block to a new location to get enough contiguous space. The old content is preserved up to the new size. If realloc fails, the original block remains valid and a new NULL pointer is returned, so always use a temporary pointer."
        ),

        heading("Memory Leaks"),

        definition(
            "Memory Leak",
            "A situation in which memory is allocated on the heap but never freed, causing the program to consume more and more memory over time."
        ),

        list([
            "Common cause: losing the only pointer to a block before freeing it.",
            "Avoid by freeing every allocation exactly once.",
            "Tools like Valgrind can detect leaks in programs.",
        ]),

        heading("Dynamic 1-D and 2-D Arrays"),

        code(
            `// 1-D
int n = 5;
int *a = calloc(n, sizeof(int),;

// 2-D using array of pointers
int rows = 3, cols = 4;
int **m = malloc(rows * sizeof(int*),;
for (int i = 0; i < rows; i++)
    m[i] = calloc(cols, sizeof(int),;

// free in reverse
for (int i = 0; i < rows; i++) free(m[i]);
free(m);
`,
            "c",
            "Dynamic 1-D and 2-D arrays"
        ),

        keyPoints([
            "malloc, calloc, realloc allocate from heap; free returns memory.",
            "malloc does not zero memory; calloc does.",
            "Always check the pointer for NULL after allocation.",
            "Match every malloc/calloc/realloc with exactly one free.",
            "Set pointer to NULL after free to avoid dangling pointer.",
        ]),
    ],

    {
        summary:
    "Master dynamic memory allocation using malloc, calloc, realloc and free with proper error handling.",
        minutes: 12,
            tags: ["dynamic-memory", "malloc", "calloc", "free", "important"],

                mcqs: [
                    mcq(
                        "malloc stands for:",
                        ["Memory allocate", "Memory allocation", "Manual allocate", "Mass allocate"],
                        1,
                        "malloc means memory allocation."
                    ),
                    mcq(
                        "Which function initialises memory to zero?",
                        ["malloc", "calloc", "realloc", "free"],
                        1,
                        "calloc sets all bytes to zero."
                    ),
                    mcq(
                        "Header file for dynamic memory functions:",
                        ["stdio.h", "string.h", "stdlib.h", "math.h"],
                        2,
                        "malloc, calloc, realloc and free are declared in stdlib.h."
                    ),
                    mcq(
                        "What happens if malloc fails?",
                        ["Returns 0", "Returns NULL", "Returns garbage", "Terminates program"],
                        1,
                        "malloc returns NULL on failure, which must be checked."
                    ),
                    mcq(
                        "realloc is used to:",
                        ["Allocate new memory", "Resize existing block", "Free memory", "Copy memory"],
                        1,
                        "realloc resizes a previously allocated block."
                    ),
                    mcq(
                        "Memory leak occurs when:",
                        ["free is called twice", "Allocated memory is not freed", "malloc fails", "Pointer is NULL"],
                        1,
                        "A memory leak is a block that is never freed."
                    ),
                ],

                    questions: [
                        qa(
                            "Differentiate between malloc and calloc.",
                            "malloc takes a single argument, the total number of bytes to allocate, and returns a pointer to the start of the block whose contents are uninitialised. calloc takes two arguments, the number of elements and the size of each, allocates the block and initialises every byte to zero. Use malloc when you will fill the memory yourself and want speed, and calloc when you need zero initialisation, for example for an array of counters.",
                            4
                        ),
                        qa(
                            "What is a memory leak? How can it be prevented?",
                            "A memory leak occurs when memory is allocated on the heap but is never freed, so the program uses more and more memory as it runs. Leaks are caused by losing the only pointer to a block before freeing it, or by forgetting to call free. They can be prevented by carefully matching every allocation with exactly one free, using tools like Valgrind to detect leaks during testing, and by setting pointers to NULL after freeing so that accidental reuse can be detected.",
                            4
                        ),
                        qa(
                            "Explain the use of realloc with an example.",
                            "realloc is used to change the size of a previously allocated memory block while preserving its existing content. For example, if a buffer of 3 integers needs to grow to 6, realloc(p, 6 * sizeof(int), is called, where p is the original pointer. If the new size fits at the same location, the block is simply extended. Otherwise realloc allocates a new block, copies the content, frees the old block and returns the new pointer. The old pointer must not be used after realloc.",
                            4
                        ),
                        qa(
                            "How do you allocate a dynamic 2-D array in C?",
                            "To allocate a 2-D array of rows x cols dynamically, first allocate an array of row pointers using malloc(rows * sizeof(int*),. Then for each row allocate a block of cols integers using calloc(cols, sizeof(int), and store it in the corresponding pointer. The elements can be accessed as m[i][j]. To free the array, first free each row using a loop and then free the array of pointers, in the reverse order of allocation.",
                            4
                        ),
                    ],
  }
);

/* =========================================================
   TOPIC 3 � File Handling in C
========================================================= */

const fileHandling = createTopic(
    "file-handling-in-c",
    "File Handling in C",

    [
        definition(
            "File",
            "A named collection of information stored on secondary storage such as a hard disk. C provides a rich set of library functions to create, read, write and update files through the FILE pointer."
        ),

        heading("File Pointer"),

        code(
            `FILE *fp;
fp = fopen("data.txt", "r");
if (fp == NULL) {
    printf("Cannot open file\\n");
    return 1;
}
// ... use fp
fclose(fp);
`,
            "c",
            "Opening a file"
        ),

        heading("File Opening Modes"),

        table(
            ["Mode", "Meaning", "File Must Exist?"],
            [
                ["r", "Open for reading", "Yes"],
                ["w", "Open for writing (truncate)", "No, created"],
                ["a", "Open for appending (write at end)", "No, created"],
                ["r+", "Open for reading and writing", "Yes"],
                ["w+", "Open for reading and writing (truncate)", "No, created"],
                ["a+", "Open for reading and appending", "No, created"],
                ["rb, wb, ab", "Same as r/w/a but in binary mode", "�"],
            ]
        ),

        heading("Character I/O Functions"),

        code(
            `// Write
fputc('A', fp);
fprintf(fp, "Hello %s, age %d\\n", name, age);

// Read
int ch;
while ((ch = fgetc(fp), != EOF) {
    putchar(ch);
}
`,
            "c",
            "Character I/O"
        ),

        heading("String I/O Functions"),

        code(
            `char buf[100];

// Write
fputs("Hello\\n", fp);
fprintf(fp, "Name: %s\\n", name);

// Read
fgets(buf, 100, fp);   // reads up to 99 chars or newline
`,
            "c",
            "String I/O"
        ),

        heading("Block I/O Functions"),

        code(
            `typedef struct {
    int id;
    char name[20];
    float marks;
} Student;

Student s = {1, "Amit", 89.5};
fwrite(&s, sizeof(Student), 1, fp);

Student t;
fread(&t, sizeof(Student), 1, fp);
`,
            "c",
            "Block I/O with structures"
        ),

        heading("Formatted I/O Functions"),

        code(
            `fprintf(fp, "%d %s %.2f\\n", id, name, marks);

int id; char name[20]; float marks;
fscanf(fp, "%d %s %f", &id, name, &marks);
`,
            "c",
            "Formatted I/O"
        ),

        heading("File Positioning"),

        table(
            ["Function", "Purpose"],
            [
                ["fseek(fp, offset, SEEK_SET)", "Move to absolute position from beginning"],
                ["fseek(fp, offset, SEEK_CUR)", "Move relative to current position"],
                ["fseek(fp, offset, SEEK_END)", "Move relative to end of file"],
                ["ftell(fp)", "Return current file position"],
                ["rewind(fp)", "Move to beginning of file"],
                ["feof(fp)", "Check end of file indicator"],
                ["ferror(fp)", "Check error indicator"],
            ]
        ),

        code(
            `fseek(fp, 0, SEEK_END);   // go to end
long size = ftell(fp);       // file size
rewind(fp);                  // back to start
`,
            "c",
            "File positioning"
        ),

        heading("Reading a Text File Line by Line"),

        code(
            `FILE *fp = fopen("data.txt", "r");
char line[200];
while (fgets(line, sizeof(line), fp) != NULL) {
    printf("%s", line);
}
fclose(fp);
`,
            "c",
            "Read a file line by line"
        ),

        heading("Writing a Text File"),

        code(
            `FILE *fp = fopen("out.txt", "w");
fprintf(fp, "Hello, World!\\n");
fprintf(fp, "Number: %d\\n", 42);
fclose(fp);
`,
            "c",
            "Write to a text file"
        ),

        note(
            "Always close the file with fclose after you are done. Not closing can lead to data loss because the output buffer may not be flushed. Use feof and ferror to check the reason for an abnormal end of read.",
            "tip",
            "Always Close Files"
        ),

        heading("Binary vs Text Mode"),

        list([
            "Text mode treats the file as a sequence of characters; newlines may be translated.",
            "Binary mode treats the file as a sequence of bytes with no translation.",
            "Use binary mode for storing structures, images and other non text data.",
            "Modes rb, wb, ab, rb+, wb+, ab+ are for binary files.",
        ]),

        keyPoints([
            "fopen opens a file and returns a FILE pointer.",
            "fclose closes the file and flushes the buffer.",
            "fprintf, fscanf, fputs, fgets, fputc, fgetc handle text.",
            "fread and fwrite handle binary blocks.",
            "fseek and ftell provide random access.",
        ]),
    ],

    {
        summary:
    "Master file handling in C: opening modes, character, string, block and formatted I/O, and file positioning.",
        minutes: 14,
            tags: ["file", "fopen", "fprintf", "fread", "important"],

                mcqs: [
                    mcq(
                        "Which function opens a file?",
                        ["fopen", "open", "fileopen", "openfile"],
                        0,
                        "fopen returns a FILE pointer to the opened file."
                    ),
                    mcq(
                        "Mode 'a' means:",
                        ["Append", "Absolute", "Access", "Add"],
                        0,
                        "Mode 'a' opens the file for appending at the end."
                    ),
                    mcq(
                        "EOF stands for:",
                        ["End Of File", "End Of Function", "End Of Format", "Equal Or Further"],
                        0,
                        "EOF is a macro indicating end of file."
                    ),
                    mcq(
                        "fread is used for:",
                        ["Reading a line", "Reading formatted text", "Reading binary blocks", "Reading characters"],
                        2,
                        "fread reads blocks of raw bytes."
                    ),
                    mcq(
                        "fseek returns to the beginning when called with:",
                        ["SEEK_START", "SEEK_SET, 0", "rewind", "frewind"],
                        1,
                        "fseek(fp, 0, SEEK_SET) moves to the beginning."
                    ),
                    mcq(
                        "What is the return type of fopen?",
                        ["int", "FILE *", "void", "char *"],
                        1,
                        "fopen returns a pointer to FILE on success, NULL on failure."
                    ),
                ],

                    questions: [
                        qa(
                            "Explain the file opening modes in C.",
                            "C provides several modes to open a file. r opens an existing file for reading only. w opens a file for writing; if the file exists its contents are discarded, otherwise a new file is created. a opens a file for writing at the end, preserving existing content. r+ opens for reading and writing without truncating. w+ opens for reading and writing, truncating the file. a+ opens for reading and writing, with all writes at the end. Adding b makes the mode binary, for example rb or wb.",
                            4
                        ),
                        qa(
                            "Differentiate between text and binary mode.",
                            "In text mode the file is treated as a sequence of characters. The C library may translate line endings to suit the operating system. In binary mode the file is treated as a sequence of raw bytes with no translation, so what is written is exactly what is read. Use text mode for human readable files like logs and CSV, and binary mode for storing structures, images, audio and other non text data where the byte layout must be preserved.",
                            4
                        ),
                        qa(
                            "Write a program to copy the contents of one file to another.",
                            "Open the source file in read mode and the destination file in write mode using fopen. Read the source character by character using fgetc and write each character to the destination using fputc. Continue until fgetc returns EOF. Finally close both files using fclose. The program handles files of any length because the operation is character by character. The same idea can be done with fread and fwrite using a buffer for speed.",
                            4
                        ),
                        qa(
                            "Explain fseek, ftell and rewind.",
                            "fseek moves the file position indicator to a given offset. The third argument is the reference point: SEEK_SET (beginning), SEEK_CUR (current position) or SEEK_END (end). ftell returns the current position as a long integer, useful to remember the position before a read so that the file can be restored later. rewind moves the position to the beginning of the file, equivalent to fseek(fp, 0, SEEK_SET) and also clears the error indicator.",
                            4
                        ),
                    ],
  }
);

/* =========================================================
   TOPIC 4 � The C Preprocessor
========================================================= */

const preprocessor = createTopic(
    "c-preprocessor",
    "The C Preprocessor",

    [
        definition(
            "C Preprocessor",
            "A tool that processes the source code before the compiler sees it. It handles directives that begin with #, performs file inclusion, macro substitution and conditional compilation."
        ),

        heading("Preprocessor Directives"),

        table(
            ["Directive", "Purpose"],
            [
                ["#include", "Include a header file"],
                ["#define", "Define a macro"],
                ["#undef", "Remove a macro definition"],
                ["#if, #ifdef, #ifndef", "Conditional compilation"],
                ["#else, #elif, #endif", "Branches of conditional compilation"],
                ["#error", "Print a compile time error"],
                ["#pragma", "Special implementation specific instructions"],
                ["#", "Null directive, does nothing"],
            ]
        ),

        heading("File Inclusion"),

        code(
            `#include <stdio.h>      // system header
#include "myheader.h"     // user header
`,
            "c",
            "File inclusion"
        ),

        note(
            "Angle brackets search the system include directories, while double quotes first search the current directory and then the system directories. Use angle brackets for standard library headers and double quotes for your own files.",
            "tip",
            "Search Path"
        ),

        heading("Object Like Macros"),

        code(
            `#define PI 3.14159
#define MAX 100
#define AUTHOR "Amit"

float area = PI * r * r;
int marks[MAX];
`,
            "c",
            "Object like macros"
        ),

        heading("Function Like Macros"),

        code(
            `#define SQUARE(x)  ((x) * (x),
#define MAX2(a, b) ((a) > (b) ? (a) : (b),
#define PRINT(msg) printf("LOG: %s\\n", msg)

int s = SQUARE(5);     // 25
int m = MAX2(3, 7);    // 7
`,
            "c",
            "Function like macros"
        ),

        note(
            "Always wrap macro arguments and the whole macro body in parentheses to avoid operator precedence bugs. For example, #define SQUARE(x) ((x) * (x), is safe, but #define SQUARE(x) x * x is not.",
            "warning",
            "Macro Pitfall"
        ),

        heading("Macros vs Functions"),

        table(
            ["Basis", "Macro", "Function"],
            [
                ["Compilation", "Expanded in place", "Compiled once, called each time"],
                ["Speed", "Faster (no call overhead)", "Slightly slower"],
                ["Type check", "No type checking", "Full type checking"],
                ["Debugging", "Harder to debug", "Easy to debug"],
                ["Side effects", "Arguments may be evaluated multiple times", "Evaluated once"],
                ["Code size", "May increase code size", "Smaller code"],
            ]
        ),

        heading("Conditional Compilation"),

        code(
            `#define DEBUG 1

#ifdef DEBUG
    printf("Debug: x = %d\\n", x);
#endif

#ifndef MAX
    #define MAX 100
#endif

#if MAX > 50
    printf("Big buffer\\n");
#else
    printf("Small buffer\\n");
#endif
`,
            "c",
            "Conditional compilation"
        ),

        heading("Predefined Macros"),

        table(
            ["Macro", "Description"],
            [
                ["__FILE__", "Name of the current source file"],
                ["__LINE__", "Current line number"],
                ["__DATE__", "Compilation date"],
                ["__TIME__", "Compilation time"],
                ["__func__", "Current function name (C99)"],
                ["__STDC__", "1 if compiler is standard C"],
            ]
        ),

        code(
            `printf("File: %s, Line: %d\\n", __FILE__, __LINE__);
printf("Compiled on %s at %s\\n", __DATE__, __TIME__);
`,
            "c",
            "Predefined macros"
        ),

        heading("Stringification and Token Pasting"),

        code(
            `#define STR(x) #x
#define CONCAT(a, b) a##b

printf("%s\\n", STR(Hello),;   // prints "Hello"
int CONCAT(var, 123) = 10;     // int var123 = 10;
`,
            "c",
            "Stringification and token pasting"
        ),

        keyPoints([
            "Preprocessor runs before the compiler.",
            "#include copies the file; #define substitutes macros.",
            "Always parenthesise macro arguments and the whole body.",
            "#ifdef is used for conditional compilation.",
            "Macros are faster but have no type checking.",
        ]),
    ],

    {
        summary:
    "Master the C preprocessor: file inclusion, object and function macros, conditional compilation and predefined macros.",
        minutes: 12,
            tags: ["preprocessor", "macros", "ifdef", "important"],

                mcqs: [
                    mcq(
                        "Preprocessor runs:",
                        ["During execution", "Before compilation", "After linking", "After compilation"],
                        1,
                        "Preprocessor runs on the source code before the compiler."
                    ),
                    mcq(
                        "#include is used for:",
                        ["Defining a macro", "Including a file", "Conditional code", "End of file"],
                        1,
                        "#include copies the contents of another file."
                    ),
                    mcq(
                        "#define PI 3.14 is:",
                        ["Function macro", "Object like macro", "Header guard", "Built in macro"],
                        1,
                        "PI is an object like macro because it takes no arguments."
                    ),
                    mcq(
                        "#ifdef checks if:",
                        ["A macro is defined", "A macro is undefined", "A header exists", "A function exists"],
                        0,
                        "#ifdef compiles the block if the macro is defined."
                    ),
                    mcq(
                        "The # operator in a macro:",
                        ["Token pasting", "Stringification", "Comment", "Include"],
                        1,
                        "The # operator converts the argument to a string."
                    ),
                    mcq(
                        "__LINE__ gives:",
                        ["File name", "Current line number", "Function name", "Date"],
                        1,
                        "__LINE__ expands to the current line number."
                    ),
                ],

                    questions: [
                        qa(
                            "Explain file inclusion and conditional compilation.",
                            "File inclusion is done with the #include directive. The preprocessor replaces the directive with the entire contents of the named file. Standard library headers are written in angle brackets, for example #include <stdio.h>, while your own headers are written in double quotes, for example #include 'my.h'. Conditional compilation is done with #ifdef, #ifndef, #if, #else, #elif and #endif. It allows different parts of the code to be compiled depending on whether a macro is defined, which is useful for portable code and for separate debug builds.",
                            4
                        ),
                        qa(
                            "Differentiate between macros and functions.",
                            "A macro is a textual substitution done by the preprocessor before compilation. A function is a named block of code compiled once and called by name. Macros are faster because there is no function call overhead, but they have no type checking, arguments can be evaluated multiple times leading to bugs, and the expanded code can be large. Functions are type safe, easier to debug and produce smaller code. Use functions for general logic and macros only for short, well tested substitutions.",
                            4
                        ),
                        qa(
                            "What is a macro? Explain object like and function like macros.",
                            "A macro is a name defined by #define that the preprocessor replaces with its body. An object like macro is a simple constant, such as #define PI 3.14, and is used wherever the name appears. A function like macro takes arguments, such as #define SQUARE(x) ((x)*(x), and is expanded with the arguments substituted in the body. Macros must be carefully parenthesised to avoid precedence bugs and should be used only when a function would be too slow.",
                            4
                        ),
                        qa(
                            "List the predefined macros in C.",
                            "C provides several predefined macros that give information about the compilation. __FILE__ expands to the name of the current source file. __LINE__ expands to the current line number. __DATE__ expands to the date of compilation. __TIME__ expands to the time of compilation. __func__ (C99) expands to the name of the current function. __STDC__ is 1 if the compiler conforms to the C standard. These are very useful for logging, debugging and writing portable code.",
                            4
                        ),
                    ],
  }
);

/* =========================================================
   TOPIC 5 � Command Line Arguments and Variable Arguments
========================================================= */

const commandLineArgs = createTopic(
    "command-line-arguments-and-variable-arguments",
    "Command Line Arguments and Variable Arguments",

    [
        definition(
            "Command Line Arguments",
            "Values passed to a program when it is executed from the command line or terminal. In C they are received through the parameters of main, traditionally called argc and argv."
        ),

        heading("argc and argv"),

        code(
            `#include <stdio.h>

int main(int argc, char *argv[]) {
    printf("Program: %s\\n", argv[0]);
    printf("Number of arguments: %d\\n", argc);

    for (int i = 1; i < argc; i++) {
        printf("argv[%d] = %s\\n", i, argv[i]);
    }
    return 0;
}
`,
            "c",
            "Command line arguments"
        ),

        heading("Execution Example"),

        code(
            `$ ./prog hello 42 india
Program: ./prog
Number of arguments: 4
argv[1] = hello
argv[2] = 42
argv[3] = india
`,
            "bash",
            "Running with arguments"
        ),

        note(
            "argv[0] is always the program name itself. argc is at least 1. argv[argc] is guaranteed to be NULL by the C standard. argv is an array of pointers to char, so each argument is a C string.",
            "tip",
            "argv Layout"
        ),

        heading("Converting Arguments to Numbers"),

        code(
            `#include <stdlib.h>

int main(int argc, char *argv[]) {
    if (argc < 3) {
        printf("Usage: %s num1 num2\\n", argv[0]);
        return 1;
    }
    int a = atoi(argv[1]);
    int b = atoi(argv[2]);
    printf("Sum = %d\\n", a + b);
    return 0;
}
`,
            "c",
            "atoi example"
        ),

        heading("Variable Arguments (stdarg.h)"),

        definition(
            "Variable Arguments",
            "A feature that allows a function to accept any number of arguments, similar to printf. The header stdarg.h provides the macros va_start, va_arg, va_end and the type va_list."
        ),

        code(
            `#include <stdio.h>
#include <stdarg.h>

int sum(int count, ...) {
    int total = 0;
    va_list args;
    va_start(args, count);

    for (int i = 0; i < count; i++) {
        total += va_arg(args, int);
    }

    va_end(args);
    return total;
}

int main() {
    printf("%d\\n", sum(4, 10, 20, 30, 40),;
    printf("%d\\n", sum(3, 5, 15, 25),;
    return 0;
}
`,
            "c",
            "Variable arguments function"
        ),

        heading("Macros in stdarg.h"),

        table(
            ["Macro", "Purpose"],
            [
                ["va_list", "Type that holds the argument list"],
                ["va_start(ap, last)", "Begin reading after the named parameter last"],
                ["va_arg(ap, type)", "Read next argument of given type"],
                ["va_end(ap)", "Clean up the argument list"],
                ["va_copy(dst, src)", "Copy one argument list into another (C99)"],
            ]
        ),

        note(
            "There must be at least one named parameter before the ..., usually a count, so the function knows how many arguments to read. The va_arg macro does not perform type checking, so passing the wrong type leads to undefined behaviour.",
            "warning",
            "Type Safety"
        ),

        heading("printf as a Variable Argument Function"),

        code(
            `int printf(const char *format, ...);

printf("Hello\\n");
printf("%d %s\\n", 42, "BCA");
printf("a=%d b=%d c=%d\\n", 1, 2, 3);
`,
            "c",
            "printf uses variable arguments"
        ),

        keyPoints([
            "argc is the count; argv is the array of argument strings.",
            "argv[0] is the program name; argv[argc] is NULL.",
            "atoi and atof convert string arguments to numbers.",
            "Variable arguments use stdarg.h with va_list, va_start, va_arg, va_end.",
            "There must be at least one named parameter before the ellipsis.",
        ]),
    ],

    {
        summary:
    "Master command line arguments with argc and argv, and variable arguments using stdarg.h.",
        minutes: 10,
            tags: ["argc-argv", "variable-arguments", "stdarg", "important"],

                mcqs: [
                    mcq(
                        "argc stands for:",
                        ["Argument count", "Argument character", "Argument class", "Argument code"],
                        0,
                        "argc is the number of command line arguments."
                    ),
                    mcq(
                        "argv[0] contains:",
                        ["First argument", "Program name", "Last argument", "NULL"],
                        1,
                        "argv[0] is always the program name."
                    ),
                    mcq(
                        "atoi converts string to:",
                        ["float", "int", "double", "char"],
                        1,
                        "atoi converts a string to an integer."
                    ),
                    mcq(
                        "Header for variable arguments:",
                        ["stdio.h", "stdarg.h", "stdlib.h", "string.h"],
                        1,
                        "stdarg.h provides va_list, va_start, va_arg and va_end."
                    ),
                    mcq(
                        "va_arg is used to:",
                        ["Start reading", "Read next argument", "End reading", "Count arguments"],
                        1,
                        "va_arg reads the next argument of the given type."
                    ),
                    mcq(
                        "printf uses which feature?",
                        ["Function pointer", "Variable arguments", "Macro", "Recursion"],
                        1,
                        "printf uses variable arguments through stdarg.h."
                    ),
                ],

                    questions: [
                        qa(
                            "Explain command line arguments in C.",
                            "Command line arguments are values passed to the program when it is started. They are received in the main function through the parameters argc and argv. argc is an integer giving the number of arguments, and argv is an array of strings, one per argument. By convention argv[0] is the program name itself, argv[1] is the first user argument, and argv[argc] is guaranteed to be a null pointer. Arguments are separated by spaces; to include spaces use quotes.",
                            4
                        ),
                        qa(
                            "Differentiate between argc and argv.",
                            "argc is an integer that gives the count of command line arguments, including the program name. Its value is at least 1. argv is an array of character pointers where each element points to a C string representation of an argument. argv[0] is the program name, and argv[1] to argv[argc-1] are the user supplied arguments. The last element argv[argc] is always NULL. Together they let a program read and process its command line input.",
                            4
                        ),
                        qa(
                            "Write a function that finds the average of a variable number of integers.",
                            "Use stdarg.h. The function takes the count as the first parameter and then a variable argument list. Declare a va_list, start it with va_start after the count, then loop count times calling va_arg(args, int) to get each integer, add it to a total, finally call va_end. Return total divided by count. The function works for any number of integer arguments, similar to how printf accepts any number of format arguments.",
                            4
                        ),
                        qa(
                            "What are the limitations of variable arguments?",
                            "Variable arguments in C are not type safe; the va_arg macro simply reads a value of the requested type from the stack, and the wrong type leads to undefined behaviour. There must be at least one named parameter before the ellipsis, and the caller must know the types of the variable arguments. Therefore variable arguments are best used in carefully designed library functions like printf where the format string itself describes the types of the remaining arguments.",
                            4
                        ),
                    ],
  }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit1Topics = [
    pointersInDepth,
    dynamicMemory,
    fileHandling,
    preprocessor,
    commandLineArgs,
];
