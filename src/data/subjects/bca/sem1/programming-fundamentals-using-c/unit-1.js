/* =========================================================
   BCA • SEM 1 • Programming Fundamentals Using C
   UNIT 1 — Concept of Algorithm, Flowchart and Languages
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
   TOPIC 1 — Introduction to Programming
========================================================= */

const introductionToProgramming = createTopic(
    "introduction-to-programming",
    "Introduction to Programming",

    [
        text(
            "A computer is an electronic machine that cannot think on its own. It only performs the tasks we instruct it to do. A set of such instructions, written in a language the computer understands, is called a program, and the process of writing it is called programming."
        ),

        definition(
            "Program",
            "A finite set of instructions given to a computer to perform a specific task."
        ),

        definition(
            "Programming Language",
            "A formal language with its own syntax and semantics, used to communicate instructions to a computer."
        ),

        definition(
            "Programmer",
            "A person who designs the logic and writes the instructions of a program."
        ),

        heading("The Basic Model of a Program"),

        text(
            "Every program, no matter how simple or complex, follows the same three-stage model."
        ),

        table(
            ["Stage", "Meaning", "Example"],
            [
                ["Input", "Data given to the program", "Read marks of a student"],
                ["Process", "Operations performed on the data", "Calculate the total and percentage"],
                ["Output", "Result produced by the program", "Display the percentage and grade"],
            ]
        ),

        heading("Why Do We Need Programming?"),

        list([
            "To automate repetitive and time-consuming tasks.",
            "To process large amounts of data quickly and accurately.",
            "To solve real-world problems using logic.",
            "To build software, websites, games, and mobile applications.",
            "To control hardware devices such as robots and embedded systems.",
        ]),

        heading("Characteristics of a Good Program"),

        table(
            ["Characteristic", "Meaning"],
            [
                ["Correctness", "Produces the expected output for all valid inputs."],
                ["Efficiency", "Uses minimum time and memory."],
                ["Readability", "Easy for another programmer to read and understand."],
                ["Portability", "Runs on different machines with little or no change."],
                ["Maintainability", "Easy to modify when requirements change."],
                ["Reliability", "Works consistently without failing unexpectedly."],
            ]
        ),

        heading("Steps in Program Development"),

        steps([
            "Problem definition — understand exactly what is required",
            "Problem analysis — identify inputs, outputs and processing",
            "Algorithm design — write the step-by-step logic",
            "Flowchart or pseudocode — represent the logic clearly",
            "Coding — convert the logic into a programming language",
            "Compilation and debugging — remove syntax and logical errors",
            "Testing — verify with different sets of input data",
            "Documentation and maintenance — record and update the program",
        ]),

        heading("Types of Errors in a Program"),

        table(
            ["Error Type", "When It Occurs", "Example"],
            [
                ["Syntax Error", "Rules of the language are broken", "Missing semicolon"],
                ["Logical Error", "Program runs but gives a wrong result", "Using + instead of *"],
                ["Runtime Error", "Occurs while the program is executing", "Division by zero"],
                ["Linker Error", "Function or file cannot be linked", "Misspelling main()"],
            ]
        ),

        note(
            "Writing code is only about 20 percent of programming. The remaining 80 percent is thinking about the logic before you type a single line.",
            "tip",
            "Remember"
        ),

        keyPoints([
            "A program is a set of instructions; programming is the process of writing them.",
            "Every program follows the Input, Process and Output model.",
            "Good programs are correct, efficient, readable, portable and maintainable.",
            "Errors are of four types: syntax, logical, runtime and linker.",
        ]),
    ],

    {
        summary:
            "Understand what a program is, why programming matters, the steps of program development, and the types of errors.",
        minutes: 9,
        tags: ["basics", "theory"],

        mcqs: [
            mcq(
                "A set of instructions given to a computer to perform a task is called:",
                ["Algorithm", "Program", "Flowchart", "Compiler"],
                1,
                "A program is the actual set of instructions written in a programming language."
            ),
            mcq(
                "Which of the following is NOT a characteristic of a good program?",
                ["Correctness", "Readability", "Complexity", "Portability"],
                2,
                "A good program should be simple and clear, not complex."
            ),
            mcq(
                "Division by zero during execution is an example of:",
                ["Syntax error", "Logical error", "Runtime error", "Linker error"],
                2,
                "Runtime errors occur while the program is executing."
            ),
            mcq(
                "Missing a semicolon at the end of a statement causes a:",
                ["Runtime error", "Syntax error", "Logical error", "Linker error"],
                1,
                "Breaking the grammar rules of the language causes a syntax error."
            ),
        ],

        questions: [
            qa(
                "Define a program and a programming language.",
                "A program is a finite set of instructions given to a computer to perform a specific task. A programming language is a formal language with defined syntax and semantics that is used to write those instructions.",
                2
            ),
            qa(
                "List and explain any four characteristics of a good program.",
                "Correctness means the program gives the right output for all valid inputs. Efficiency means it uses minimum time and memory. Readability means another programmer can easily understand it. Portability means it runs on different machines with little or no change.",
                4
            ),
            qa(
                "Explain the steps involved in program development.",
                "The steps are: problem definition to understand the requirement; problem analysis to identify input, output and processing; algorithm design to write the logic; flowchart or pseudocode to represent the logic; coding to convert logic into a language; compilation and debugging to remove errors; testing with different inputs; and finally documentation and maintenance.",
                5
            ),
            qa(
                "What are the different types of errors in a program?",
                "Syntax errors occur when the rules of the language are broken, such as a missing semicolon. Logical errors occur when the program runs but produces a wrong result. Runtime errors occur during execution, such as division by zero. Linker errors occur when a function or file cannot be linked, such as misspelling main.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — Algorithm
========================================================= */

const algorithm = createTopic(
    "algorithm",
    "Algorithm",

    [
        definition(
            "Algorithm",
            "A finite, step-by-step, unambiguous set of instructions to solve a particular problem."
        ),

        text(
            "The word algorithm is derived from the name of the Persian mathematician Al-Khwarizmi. Before writing a program in any language, we first design its logic as an algorithm. Since it is language-independent, the same algorithm can be implemented in C, Java, Python or any other language."
        ),

        heading("Characteristics of an Algorithm"),

        table(
            ["Property", "Description"],
            [
                ["Input", "Zero or more values are supplied externally."],
                ["Output", "At least one result must be produced."],
                ["Definiteness", "Every step must be clear and unambiguous."],
                ["Finiteness", "It must terminate after a finite number of steps."],
                ["Effectiveness", "Every step must be basic enough to be carried out."],
            ]
        ),

        note(
            "Remember the five properties with the phrase: Input, Output, Definiteness, Finiteness, Effectiveness. This is one of the most frequently asked questions in examinations.",
            "exam",
            "Frequently Asked"
        ),

        heading("Example 1 — Sum of Two Numbers"),

        steps([
            "Start",
            "Read two numbers A and B",
            "Compute SUM = A + B",
            "Display SUM",
            "Stop",
        ]),

        heading("Example 2 — Largest of Three Numbers"),

        steps([
            "Start",
            "Read three numbers A, B and C",
            "If A > B and A > C, then display A as the largest",
            "Else if B > C, then display B as the largest",
            "Else display C as the largest",
            "Stop",
        ]),

        heading("Example 3 — Factorial of a Number"),

        steps([
            "Start",
            "Read a number N",
            "Set FACT = 1 and I = 1",
            "Repeat while I <= N",
            "    Set FACT = FACT * I",
            "    Set I = I + 1",
            "Display FACT",
            "Stop",
        ]),

        heading("Example 4 — Check Whether a Number Is Prime"),

        steps([
            "Start",
            "Read a number N",
            "Set FLAG = 0 and I = 2",
            "Repeat while I <= N / 2",
            "    If N % I == 0, then set FLAG = 1 and exit the loop",
            "    Set I = I + 1",
            "If FLAG == 0, display 'Prime', otherwise display 'Not Prime'",
            "Stop",
        ]),

        heading("Advantages of an Algorithm"),

        list([
            "It is easy to understand because it uses simple English.",
            "It is independent of any programming language.",
            "Errors in logic can be found before coding begins.",
            "It acts as documentation for the program.",
            "It breaks a large problem into smaller manageable steps.",
        ]),

        heading("Disadvantages of an Algorithm"),

        list([
            "It is time-consuming to write for very large problems.",
            "Branching and looping are difficult to show clearly.",
            "There is no fixed standard for writing algorithms.",
        ]),

        note(
            "An algorithm must always terminate. A set of steps that runs forever is not an algorithm, it is simply a procedure.",
            "warning",
            "Important"
        ),

        keyPoints([
            "An algorithm is a finite, step-by-step solution to a problem.",
            "Its five properties are Input, Output, Definiteness, Finiteness and Effectiveness.",
            "It is written in plain English and is language-independent.",
            "It must always terminate after a finite number of steps.",
        ]),
    ],

    {
        summary:
            "Learn what an algorithm is, its five essential properties, worked examples, and its advantages and disadvantages.",
        minutes: 12,
        tags: ["algorithm", "logic", "important"],

        mcqs: [
            mcq(
                "Which property states that an algorithm must terminate after a finite number of steps?",
                ["Definiteness", "Finiteness", "Effectiveness", "Input"],
                1,
                "Finiteness ensures the algorithm ends after a limited number of steps."
            ),
            mcq(
                "An algorithm must produce at least how many outputs?",
                ["Zero", "One", "Two", "Any number"],
                1,
                "Every algorithm must produce at least one output."
            ),
            mcq(
                "Which property means that every step of an algorithm must be clear and unambiguous?",
                ["Finiteness", "Definiteness", "Input", "Output"],
                1,
                "Definiteness requires each step to have exactly one clear meaning."
            ),
            mcq(
                "The word algorithm is derived from the name of:",
                ["Charles Babbage", "Al-Khwarizmi", "Alan Turing", "John von Neumann"],
                1,
                "It comes from the Persian mathematician Al-Khwarizmi."
            ),
            mcq(
                "How many inputs can an algorithm have?",
                ["Exactly one", "At least one", "Zero or more", "At least two"],
                2,
                "An algorithm may take zero or more inputs."
            ),
        ],

        questions: [
            qa(
                "Define algorithm and explain its characteristics.",
                "An algorithm is a finite, step-by-step, unambiguous set of instructions to solve a problem. Its characteristics are: Input, meaning zero or more values are supplied; Output, meaning at least one result is produced; Definiteness, meaning each step is clear; Finiteness, meaning it terminates after a finite number of steps; and Effectiveness, meaning every step is basic enough to be carried out.",
                5
            ),
            qa(
                "Write an algorithm to find the largest of three numbers.",
                "Step 1: Start. Step 2: Read A, B and C. Step 3: If A > B and A > C then display A. Step 4: Else if B > C then display B. Step 5: Else display C. Step 6: Stop.",
                4
            ),
            qa(
                "Write an algorithm to find the factorial of a number.",
                "Step 1: Start. Step 2: Read N. Step 3: Set FACT = 1 and I = 1. Step 4: Repeat while I is less than or equal to N: set FACT = FACT * I and set I = I + 1. Step 5: Display FACT. Step 6: Stop.",
                4
            ),
            qa(
                "State the advantages and disadvantages of an algorithm.",
                "Advantages: it is easy to understand as it uses simple English, it is language-independent, logical errors can be detected before coding, and it serves as documentation. Disadvantages: it is time-consuming for large problems, branching and looping are difficult to represent, and there is no fixed standard for writing it.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — Flowchart
========================================================= */

const flowchart = createTopic(
    "flowchart",
    "Flowchart",

    [
        definition(
            "Flowchart",
            "A pictorial or graphical representation of an algorithm using standard symbols connected by arrows."
        ),

        text(
            "A flowchart shows the flow of control in a program visually. Because it uses pictures instead of words, the logic becomes much easier to follow, especially for beginners."
        ),

        heading("Standard Flowchart Symbols"),

        table(
            ["Symbol", "Name", "Purpose"],
            [
                ["Oval", "Terminal", "Shows the Start or Stop of the program."],
                ["Parallelogram", "Input / Output", "Reading input or displaying output."],
                ["Rectangle", "Process", "Calculation or assignment operation."],
                ["Diamond", "Decision", "A condition having Yes/No or True/False branches."],
                ["Arrow", "Flow Line", "Shows the direction of the flow of control."],
                ["Circle", "Connector", "Joins two separated parts of a flowchart."],
                ["Hexagon", "Preparation", "Initialisation of a loop counter."],
                ["Double Rectangle", "Predefined Process", "Represents a call to a function."],
            ]
        ),

        heading("Rules for Drawing a Flowchart"),

        list(
            [
                "A flowchart must have exactly one Start symbol and at least one Stop symbol.",
                "The flow normally moves from top to bottom and from left to right.",
                "Only one flow line should enter a process box.",
                "A decision box has one entry point and two exit points, Yes and No.",
                "Keep the text inside the symbols short, clear and meaningful.",
                "Use connectors to avoid long, crossing flow lines.",
                "Every symbol except Terminal must be connected on both sides.",
            ],
            true
        ),

        heading("Example 1 — Check Even or Odd"),

        steps([
            "Start",
            "Read number N",
            "Is N % 2 equal to 0 ?",
            "If Yes, display 'Even'",
            "If No, display 'Odd'",
            "Stop",
        ]),

        code(
            `#include <stdio.h>

int main()
{
    int n;

    printf("Enter a number: ");
    scanf("%d", &n);

    if (n % 2 == 0)
        printf("Even");
    else
        printf("Odd");

    return 0;
}`,
            "c",
            "The same logic written in C"
        ),

        output(`Enter a number: 7
Odd`),

        heading("Example 2 — Sum of First N Natural Numbers"),

        steps([
            "Start",
            "Read N",
            "Set SUM = 0 and I = 1",
            "Is I <= N ?",
            "If Yes: SUM = SUM + I, then I = I + 1, and repeat the check",
            "If No: display SUM",
            "Stop",
        ]),

        heading("Algorithm versus Flowchart"),

        table(
            ["Basis", "Algorithm", "Flowchart"],
            [
                ["Form", "Written as step-by-step English", "Drawn using graphical symbols"],
                ["Readability", "Slightly harder to visualise", "Very easy to visualise the logic"],
                ["Complex logic", "Easier to write and modify", "Becomes messy and very large"],
                ["Debugging", "Moderate", "Errors are easier to spot"],
                ["Space needed", "Less", "More"],
                ["Preparation time", "Less", "More"],
            ]
        ),

        heading("Advantages of a Flowchart"),

        list([
            "It gives a clear visual picture of the program logic.",
            "It helps in detecting logical errors easily.",
            "It serves as good documentation for the program.",
            "It makes communication between programmers simple.",
            "It acts as a guide during the coding stage.",
        ]),

        heading("Disadvantages of a Flowchart"),

        list([
            "It becomes complex and lengthy for large programs.",
            "Any modification may require redrawing the entire chart.",
            "There is no standard for the level of detail to be shown.",
            "Drawing takes more time than writing an algorithm.",
        ]),

        note(
            "Flowcharts are excellent for small programs. For very large programs they become difficult to manage, so pseudocode is usually preferred.",
            "info"
        ),

        keyPoints([
            "A flowchart is the graphical form of an algorithm.",
            "Oval means Start or Stop, Parallelogram means Input or Output, Rectangle means Process, and Diamond means Decision.",
            "There must be exactly one Start and at least one Stop.",
            "Flow normally moves from top to bottom and left to right.",
        ]),
    ],

    {
        summary:
            "Learn flowchart symbols, the rules for drawing them, worked examples, and how flowcharts differ from algorithms.",
        minutes: 11,
        tags: ["flowchart", "diagram", "important"],

        mcqs: [
            mcq(
                "Which symbol is used to represent a decision in a flowchart?",
                ["Rectangle", "Oval", "Diamond", "Parallelogram"],
                2,
                "The diamond symbol represents a decision with Yes and No branches."
            ),
            mcq(
                "The parallelogram symbol in a flowchart represents:",
                ["Process", "Input or Output", "Terminal", "Connector"],
                1,
                "A parallelogram is used for input and output operations."
            ),
            mcq(
                "How many Start symbols can a flowchart have?",
                ["Zero", "Exactly one", "Two", "Any number"],
                1,
                "A flowchart must have exactly one Start symbol."
            ),
            mcq(
                "Which symbol is used to join two separated parts of a flowchart?",
                ["Diamond", "Circle", "Hexagon", "Oval"],
                1,
                "The circle is used as a connector."
            ),
            mcq(
                "A decision box in a flowchart has:",
                ["One entry and one exit", "One entry and two exits", "Two entries and one exit", "Two entries and two exits"],
                1,
                "A decision box has one entry point and two exit points."
            ),
        ],

        questions: [
            qa(
                "What is a flowchart? Explain any four symbols used in it.",
                "A flowchart is a pictorial representation of an algorithm using standard symbols connected by arrows. The Oval represents Start or Stop, the Parallelogram represents Input or Output, the Rectangle represents a Process such as a calculation, and the Diamond represents a Decision having Yes and No branches.",
                4
            ),
            qa(
                "Differentiate between an algorithm and a flowchart.",
                "An algorithm is written as step-by-step instructions in simple English, whereas a flowchart is a graphical representation using standard symbols. Algorithms handle complex logic better and take less space and time, while flowcharts are easier to visualise but become messy and large for big programs.",
                4
            ),
            qa(
                "State the rules for drawing a flowchart.",
                "A flowchart must have exactly one Start and at least one Stop. The flow should move from top to bottom and left to right. Only one flow line should enter a process box. A decision box must have one entry and two exits. The text inside symbols should be short and clear, and connectors should be used to avoid crossing lines.",
                5
            ),
            qa(
                "Draw a flowchart to check whether a number is even or odd.",
                "Start, then read the number N in a parallelogram, then use a diamond to check whether N modulo 2 equals zero. If yes, display Even in a parallelogram; if no, display Odd. Both branches then meet at Stop.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — Pseudocode
========================================================= */

const pseudocode = createTopic(
    "pseudocode",
    "Pseudocode",

    [
        definition(
            "Pseudocode",
            "An informal, high-level description of an algorithm that uses the structure of a programming language but plain English words instead of actual syntax."
        ),

        text(
            "Pseudocode sits between an algorithm and real code. It is never compiled or executed; it is written only for humans so that the logic is easy to understand and easy to convert into any programming language."
        ),

        heading("Common Pseudocode Keywords"),

        table(
            ["Keyword", "Used For"],
            [
                ["BEGIN / END", "Start and end of the program"],
                ["READ / INPUT", "Taking input from the user"],
                ["PRINT / DISPLAY", "Showing output on the screen"],
                ["SET", "Assigning a value to a variable"],
                ["IF … ELSE … ENDIF", "Decision making"],
                ["WHILE … ENDWHILE", "Repetition until a condition fails"],
                ["FOR … ENDFOR", "Counted repetition"],
                ["REPEAT … UNTIL", "Repetition with the test at the end"],
            ]
        ),

        heading("Example 1 — Sum of First N Natural Numbers"),

        code(
            `BEGIN
    READ N
    SET SUM = 0
    SET I = 1

    WHILE I <= N
        SET SUM = SUM + I
        SET I = I + 1
    ENDWHILE

    PRINT SUM
END`,
            "text",
            "Pseudocode"
        ),

        heading("Example 2 — Largest of Two Numbers"),

        code(
            `BEGIN
    READ A, B

    IF A > B THEN
        PRINT "A is larger"
    ELSE
        PRINT "B is larger"
    ENDIF
END`,
            "text",
            "Pseudocode"
        ),

        heading("Example 3 — Multiplication Table"),

        code(
            `BEGIN
    READ N

    FOR I = 1 TO 10
        SET RESULT = N * I
        PRINT N, " x ", I, " = ", RESULT
    ENDFOR
END`,
            "text",
            "Pseudocode"
        ),

        heading("Advantages of Pseudocode"),

        list([
            "Easier to write and modify than a flowchart.",
            "Very close to actual code, so conversion is simple.",
            "Language-independent, so any language can be used later.",
            "Compact, which makes it suitable for large programs.",
            "Focuses on logic rather than on syntax.",
        ]),

        heading("Disadvantages of Pseudocode"),

        list([
            "There is no visual representation of the flow.",
            "There is no universally accepted standard.",
            "It is harder for a non-programmer to understand than a flowchart.",
        ]),

        heading("Algorithm, Flowchart and Pseudocode Compared"),

        table(
            ["Basis", "Algorithm", "Flowchart", "Pseudocode"],
            [
                ["Representation", "Steps in English", "Graphical symbols", "Code-like English"],
                ["Standard", "No", "Yes", "No"],
                ["Suitable for", "Any problem", "Small programs", "Large programs"],
                ["Closeness to code", "Low", "Low", "High"],
                ["Ease of drawing", "Easy", "Difficult", "Easy"],
            ]
        ),

        note(
            "Pseudocode has no fixed standard. Different books may write it slightly differently, and that is perfectly acceptable as long as the logic is clear and consistent.",
            "info"
        ),

        keyPoints([
            "Pseudocode combines the structure of code with plain English.",
            "It is never compiled or executed.",
            "It is preferred over flowcharts for large or complex programs.",
            "It is language-independent and easy to convert into real code.",
        ]),
    ],

    {
        summary:
            "Understand pseudocode, its keywords, worked examples, and how it compares with algorithms and flowcharts.",
        minutes: 8,
        tags: ["pseudocode", "logic"],

        mcqs: [
            mcq(
                "Pseudocode is:",
                [
                    "Executed directly by the computer",
                    "Compiled into machine code",
                    "Written only for human understanding",
                    "A type of flowchart",
                ],
                2,
                "Pseudocode is never executed; it is written for humans to understand the logic."
            ),
            mcq(
                "Which keyword is used in pseudocode to assign a value?",
                ["READ", "SET", "PRINT", "BEGIN"],
                1,
                "SET is used to assign a value to a variable."
            ),
            mcq(
                "For very large programs, which representation is most preferred?",
                ["Flowchart", "Pseudocode", "Both equally", "Neither"],
                1,
                "Pseudocode is compact and easier to manage for large programs."
            ),
        ],

        questions: [
            qa(
                "What is pseudocode? State its advantages.",
                "Pseudocode is an informal high-level description of an algorithm that uses programming structure with plain English words. Its advantages are that it is easy to write and modify, it is very close to actual code so conversion is simple, it is language-independent, and it is compact enough to be used for large programs.",
                4
            ),
            qa(
                "Write pseudocode to find the sum of the first N natural numbers.",
                "BEGIN. READ N. SET SUM = 0. SET I = 1. WHILE I is less than or equal to N: SET SUM = SUM + I and SET I = I + 1. ENDWHILE. PRINT SUM. END.",
                4
            ),
            qa(
                "Compare algorithm, flowchart and pseudocode.",
                "An algorithm represents logic as steps in English and is suitable for any problem. A flowchart represents logic graphically using standard symbols and is best for small programs. Pseudocode represents logic in a code-like English form, is closest to actual code, and is best suited for large programs.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 5 — Generations of Programming Languages
========================================================= */

const generationsOfLanguages = createTopic(
    "generations-of-programming-languages",
    "Generations of Programming Languages",

    [
        text(
            "Programming languages have evolved through five generations, moving gradually from machine-level binary codes towards languages that closely resemble natural human language."
        ),

        heading("The Five Generations"),

        table(
            ["Generation", "Name", "Description", "Example"],
            [
                ["1GL", "Machine Language", "Binary code of 0s and 1s directly understood by the CPU.", "10110000 01100001"],
                ["2GL", "Assembly Language", "Uses mnemonics such as ADD and MOV; needs an assembler.", "MOV AX, 5"],
                ["3GL", "High-Level Language", "English-like and machine independent; needs a compiler or interpreter.", "C, C++, Java"],
                ["4GL", "Very High-Level Language", "Focuses on what to do rather than how; used for databases and reports.", "SQL, MATLAB"],
                ["5GL", "Natural / AI Language", "Constraint and logic based; used in artificial intelligence.", "Prolog, Mercury"],
            ]
        ),

        heading("First Generation — Machine Language"),

        list([
            "Written entirely using binary digits 0 and 1.",
            "Directly understood by the processor, so no translator is needed.",
            "Execution is extremely fast.",
            "Very difficult to write, read and debug.",
            "Completely machine dependent.",
        ]),

        heading("Second Generation — Assembly Language"),

        list([
            "Uses symbolic names called mnemonics such as ADD, SUB and MOV.",
            "Requires an assembler to convert it into machine language.",
            "Easier than machine language but still machine dependent.",
            "Used for writing device drivers and embedded systems.",
        ]),

        code(
            `MOV AX, 5      ; move value 5 into register AX
MOV BX, 3      ; move value 3 into register BX
ADD AX, BX     ; add BX to AX`,
            "text",
            "Assembly language example"
        ),

        heading("Third Generation — High-Level Language"),

        list([
            "Uses English-like keywords such as if, else, while and for.",
            "Machine independent, so the same program runs on different machines.",
            "Requires a compiler or an interpreter.",
            "Easy to learn, write, read and maintain.",
        ]),

        heading("Fourth Generation — Very High-Level Language"),

        list([
            "Focuses on what result is needed rather than how to obtain it.",
            "Requires far fewer lines of code than a third generation language.",
            "Mainly used for database queries, report generation and analysis.",
        ]),

        code(
            `SELECT name, marks
FROM   students
WHERE  marks > 80;`,
            "sql",
            "SQL is a fourth generation language"
        ),

        heading("Fifth Generation — Natural and AI Languages"),

        list([
            "Based on constraints and logic rather than step-by-step instructions.",
            "The programmer states the problem and the system finds the solution.",
            "Used in artificial intelligence and expert systems.",
        ]),

        heading("Low-Level versus High-Level Languages"),

        table(
            ["Basis", "Low-Level Language", "High-Level Language"],
            [
                ["Understanding", "Machine friendly", "Programmer friendly"],
                ["Portability", "Machine dependent", "Machine independent"],
                ["Execution speed", "Very fast", "Comparatively slower"],
                ["Ease of learning", "Difficult", "Easy"],
                ["Memory efficiency", "Highly efficient", "Less efficient"],
                ["Translator used", "Assembler", "Compiler or Interpreter"],
                ["Debugging", "Very difficult", "Easy"],
                ["Example", "Machine, Assembly", "C, C++, Java, Python"],
            ]
        ),

        note(
            "C is called a middle-level language because it combines the readability of a high-level language with low-level features such as pointers and bit manipulation.",
            "exam",
            "Frequently Asked"
        ),

        keyPoints([
            "The order is 1GL Machine, 2GL Assembly, 3GL High-Level, 4GL Very High-Level and 5GL Artificial Intelligence.",
            "Low-level languages are fast but machine dependent.",
            "High-level languages are portable but comparatively slower.",
            "C is regarded as a middle-level language.",
        ]),
    ],

    {
        summary:
            "Trace the five generations of programming languages and compare low-level with high-level languages.",
        minutes: 10,
        tags: ["languages", "theory", "important"],

        mcqs: [
            mcq(
                "Which generation of language uses mnemonics such as MOV and ADD?",
                ["1GL", "2GL", "3GL", "4GL"],
                1,
                "Assembly language, the second generation, uses mnemonics."
            ),
            mcq(
                "C is considered a:",
                ["Low-level language", "Middle-level language", "Fourth generation language", "Natural language"],
                1,
                "C is called a middle-level language because it supports both high-level and low-level features."
            ),
            mcq(
                "SQL belongs to which generation?",
                ["2GL", "3GL", "4GL", "5GL"],
                2,
                "SQL is a fourth generation language that focuses on what to do rather than how."
            ),
            mcq(
                "Which language does not require any translator?",
                ["Assembly", "Machine", "C", "Java"],
                1,
                "Machine language is directly understood by the CPU, so no translator is needed."
            ),
            mcq(
                "Prolog is an example of a:",
                ["Third generation language", "Fourth generation language", "Fifth generation language", "Second generation language"],
                2,
                "Prolog is a fifth generation logic-based language used in artificial intelligence."
            ),
        ],

        questions: [
            qa(
                "Explain the generations of programming languages.",
                "The first generation is machine language, which uses binary understood directly by the CPU. The second generation is assembly language, which uses mnemonics and needs an assembler. The third generation consists of high-level languages such as C and Java, which are English-like and machine independent. The fourth generation consists of very high-level languages such as SQL that focus on what to do rather than how. The fifth generation consists of natural and logic-based languages such as Prolog, used in artificial intelligence.",
                5
            ),
            qa(
                "Differentiate between low-level and high-level languages.",
                "Low-level languages are machine friendly, machine dependent, execute very fast, are memory efficient and difficult to learn; they use an assembler. High-level languages are programmer friendly, machine independent, comparatively slower, less memory efficient and easy to learn; they use a compiler or an interpreter.",
                4
            ),
            qa(
                "Why is C called a middle-level language?",
                "C is called a middle-level language because it provides the readability and structure of a high-level language while also supporting low-level features such as pointers, bit manipulation and direct memory access, which are normally available only in assembly language.",
                3
            ),
        ],
    }
);

/* =========================================================
   TOPIC 6 — Compiler, Interpreter and Assembler
========================================================= */

const languageTranslators = createTopic(
    "compiler-interpreter-assembler",
    "Compiler, Interpreter and Assembler",

    [
        text(
            "A computer understands only machine language. Programs written in assembly or high-level languages must therefore be translated before they can run. The software that performs this translation is called a language translator."
        ),

        definition(
            "Language Translator",
            "System software that converts a program written in one language into an equivalent program in another language, usually machine language."
        ),

        heading("Types of Translators"),

        table(
            ["Translator", "Converts", "Working"],
            [
                ["Assembler", "Assembly to Machine code", "Translates mnemonics into binary."],
                ["Compiler", "High-level to Machine code", "Translates the entire program at once."],
                ["Interpreter", "High-level to Machine code", "Translates and executes line by line."],
            ]
        ),

        heading("Compiler versus Interpreter"),

        table(
            ["Basis", "Compiler", "Interpreter"],
            [
                ["Translation", "Whole program at once", "One line at a time"],
                ["Speed of execution", "Faster", "Slower"],
                ["Error reporting", "All errors listed after compilation", "Stops at the first error"],
                ["Object code", "Generates an object file", "Does not generate an object file"],
                ["Memory usage", "Requires more memory", "Requires less memory"],
                ["Debugging", "Comparatively harder", "Easier"],
                ["Example", "C, C++", "Python, JavaScript"],
            ]
        ),

        note(
            "Java uses both. The compiler converts source code into bytecode, and the Java Virtual Machine then interprets that bytecode at runtime.",
            "tip",
            "Special Case"
        ),

        heading("Stages of Compilation in C"),

        steps([
            "Preprocessing — expands #include and #define directives and removes comments",
            "Compilation — converts the preprocessed code into assembly code",
            "Assembly — converts assembly code into object code with a .obj or .o extension",
            "Linking — joins the object code with library functions to create the executable file",
        ]),

        code(
            `hello.c    →  Preprocessor  →  hello.i     (expanded source)
hello.i    →  Compiler      →  hello.s     (assembly code)
hello.s    →  Assembler     →  hello.o     (object code)
hello.o    →  Linker        →  hello.exe   (executable)`,
            "text",
            "The C compilation pipeline"
        ),

        heading("Other System Software"),

        table(
            ["Software", "Function"],
            [
                ["Preprocessor", "Processes directives that begin with a hash symbol before compilation."],
                ["Linker", "Combines object files and library functions into one executable."],
                ["Loader", "Loads the executable file from disk into main memory for execution."],
                ["Debugger", "Helps find and remove errors by executing the program step by step."],
            ]
        ),

        heading("A Complete Example"),

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

        text(
            "When this program is compiled, the preprocessor first replaces the #include line with the contents of stdio.h. The compiler then converts the code into assembly, the assembler produces object code, and finally the linker attaches the machine code of printf from the standard library to create the executable file."
        ),

        note(
            "A linker joins your object file with library files to produce an executable. A loader then loads that executable into memory so the CPU can run it. These two are often confused in examinations.",
            "warning",
            "Do Not Confuse"
        ),

        keyPoints([
            "An assembler translates assembly language into machine code.",
            "A compiler translates the whole program at once; an interpreter translates line by line.",
            "C compilation has four stages: preprocessing, compilation, assembly and linking.",
            "The linker creates the executable and the loader places it in memory.",
        ]),
    ],

    {
        summary:
            "Understand language translators, the difference between compiler and interpreter, and the four stages of compiling a C program.",
        minutes: 11,
        tags: ["compiler", "translator", "important"],

        mcqs: [
            mcq(
                "Which translator converts the entire program at once?",
                ["Interpreter", "Compiler", "Assembler", "Loader"],
                1,
                "A compiler translates the complete program in one go."
            ),
            mcq(
                "Which stage of compilation expands the #include directive?",
                ["Compilation", "Linking", "Preprocessing", "Assembly"],
                2,
                "The preprocessor handles directives such as #include and #define."
            ),
            mcq(
                "Which of the following joins object code with library functions?",
                ["Compiler", "Linker", "Loader", "Assembler"],
                1,
                "The linker combines object files and libraries to produce the executable."
            ),
            mcq(
                "Which translator stops execution at the first error it encounters?",
                ["Compiler", "Interpreter", "Assembler", "Linker"],
                1,
                "An interpreter stops as soon as it finds an error because it works line by line."
            ),
            mcq(
                "The software that loads an executable file into main memory is the:",
                ["Linker", "Loader", "Compiler", "Debugger"],
                1,
                "The loader loads the executable from disk into memory for execution."
            ),
            mcq(
                "Which file extension is produced after the assembly stage?",
                [".i", ".s", ".o", ".exe"],
                2,
                "The assembler produces object code with a .o or .obj extension."
            ),
        ],

        questions: [
            qa(
                "Differentiate between a compiler and an interpreter.",
                "A compiler translates the whole program at once, executes faster, reports all errors after compilation and generates an object file, but it requires more memory. An interpreter translates one line at a time, executes slower, stops at the first error and does not generate an object file, but it requires less memory. C uses a compiler whereas Python uses an interpreter.",
                4
            ),
            qa(
                "Explain the stages of compiling a C program.",
                "Preprocessing expands directives such as #include and #define and removes comments. Compilation converts the preprocessed code into assembly code. Assembly converts the assembly code into object code. Linking combines the object code with library functions to produce the final executable file.",
                4
            ),
            qa(
                "What is a language translator? Explain its types.",
                "A language translator is system software that converts a program written in one language into an equivalent program in another language. Its three types are the assembler, which converts assembly language to machine code; the compiler, which converts a high-level language to machine code all at once; and the interpreter, which converts and executes a high-level language line by line.",
                5
            ),
            qa(
                "Differentiate between a linker and a loader.",
                "A linker combines the object code of a program with the object code of library functions to produce a single executable file. A loader is the part of the operating system that loads this executable file from secondary storage into main memory so that the CPU can execute it.",
                3
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit1Topics = [
    introductionToProgramming,
    algorithm,
    flowchart,
    pseudocode,
    generationsOfLanguages,
    languageTranslators,
];