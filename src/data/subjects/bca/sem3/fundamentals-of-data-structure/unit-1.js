/* =========================================================
   BCA • SEM 3 • Fundamentals of Data Structure
   UNIT 1 — Introduction, Arrays, Stacks and Queues
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
   TOPIC 1 — Introduction to Data Structures
========================================================= */

const introDataStructures = createTopic(
    "introduction-to-data-structures",
    "Introduction to Data Structures",

    [
        definition(
            "Data Structure",
            "A data structure is a particular way of organizing, managing and storing data in a computer so that it can be accessed and modified efficiently."
        ),

        text(
            "Data structures are the building blocks of efficient programs. Choosing the right data structure directly affects the performance, memory usage and simplicity of an algorithm."
        ),

        heading("Need for Data Structures"),

        list([
            "Efficient data storage and retrieval.",
            "Handling large amounts of data.",
            "Faster searching and sorting operations.",
            "Better memory management.",
            "Reusable and organized code.",
            "Supports efficient algorithm design.",
        ]),

        heading("Classification of Data Structures"),

        table(
            ["Category", "Type", "Examples"],
            [
                ["Primitive", "Basic data types", "int, float, char, boolean"],
                ["Non-Primitive Linear", "Sequential", "Array, Stack, Queue, Linked List"],
                ["Non-Primitive Non-Linear", "Hierarchical/Network", "Tree, Graph"],
                ["Static", "Fixed size", "Array"],
                ["Dynamic", "Size changes at runtime", "Linked List, Tree, Graph"],
            ]
        ),

        heading("Linear vs Non-Linear Data Structures"),

        table(
            ["Basis", "Linear", "Non-Linear"],
            [
                ["Arrangement", "Sequential", "Hierarchical/Network"],
                ["Traversal", "Single run covers all", "Multiple ways possible"],
                ["Memory", "Easy to implement", "Complex implementation"],
                ["Examples", "Array, Stack, Queue, Linked List", "Tree, Graph"],
                ["Levels", "Single level", "Multiple levels"],
            ]
        ),

        heading("Operations on Data Structures"),

        list([
            "Traversal — Visiting each element.",
            "Insertion — Adding a new element.",
            "Deletion — Removing an element.",
            "Searching — Finding an element.",
            "Sorting — Arranging in order.",
            "Merging — Combining two structures.",
        ]),

        heading("Algorithm and Complexity"),

        definition(
            "Algorithm",
            "An algorithm is a finite sequence of well-defined instructions used to solve a problem or perform a computation."
        ),

        definition(
            "Time Complexity",
            "Time complexity measures the amount of time an algorithm takes to run as a function of the input size."
        ),

        definition(
            "Space Complexity",
            "Space complexity measures the amount of memory an algorithm uses during its execution."
        ),

        heading("Asymptotic Notations"),

        table(
            ["Notation", "Meaning", "Represents"],
            [
                ["Big O (O)", "Upper bound", "Worst case"],
                ["Omega (Ω)", "Lower bound", "Best case"],
                ["Theta (Θ)", "Tight bound", "Average case"],
            ]
        ),

        heading("Common Time Complexities"),

        table(
            ["Complexity", "Name", "Example"],
            [
                ["O(1)", "Constant", "Accessing array element"],
                ["O(log n)", "Logarithmic", "Binary search"],
                ["O(n)", "Linear", "Linear search"],
                ["O(n log n)", "Log linear", "Merge sort"],
                ["O(n²)", "Quadratic", "Bubble sort"],
                ["O(2ⁿ)", "Exponential", "Recursive Fibonacci"],
            ]
        ),

        note(
            "Choosing the correct data structure and algorithm is the most important skill for writing efficient programs. Always analyze time and space complexity before implementation.",
            "tip",
            "Golden Rule"
        ),

        keyPoints([
            "Data structures organize data for efficient access.",
            "Primitive types are basic; non-primitive types are user-defined.",
            "Linear structures store data sequentially.",
            "Non-linear structures store data hierarchically.",
            "Big O notation describes worst-case running time.",
        ]),
    ],

    {
        summary:
            "Understand data structures, their classification, operations, algorithms and asymptotic complexity notations.",
        minutes: 12,
        tags: ["data-structure", "algorithm", "complexity", "important"],

        mcqs: [
            mcq(
                "Which of the following is a linear data structure?",
                ["Tree", "Graph", "Queue", "Heap"],
                2,
                "Queue is a linear data structure with sequential arrangement."
            ),
            mcq(
                "Big O notation represents:",
                ["Best case", "Worst case", "Average case", "No case"],
                1,
                "Big O represents the upper bound or worst-case complexity."
            ),
            mcq(
                "Which is a non-linear data structure?",
                ["Array", "Stack", "Tree", "Queue"],
                2,
                "Tree is a non-linear hierarchical data structure."
            ),
            mcq(
                "Time complexity of accessing array element is:",
                ["O(1)", "O(n)", "O(log n)", "O(n²)"],
                0,
                "Array element access is constant time O(1)."
            ),
        ],

        questions: [
            qa(
                "What is a data structure? Explain its types.",
                "A data structure is a way of organizing and storing data so that it can be used efficiently. Data structures are classified into primitive (int, float, char, boolean) and non-primitive types. Non-primitive types are further divided into linear structures such as arrays, stacks, queues and linked lists, and non-linear structures such as trees and graphs. Choosing the right data structure improves the performance of algorithms.",
                4
            ),
            qa(
                "Explain time complexity and space complexity.",
                "Time complexity measures the amount of time an algorithm takes to execute as a function of the input size. Space complexity measures the amount of memory required by the algorithm. Both are expressed using asymptotic notations such as Big O for worst case, Omega for best case and Theta for average case. Common time complexities include O(1), O(log n), O(n), O(n log n) and O(n²).",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — Arrays
========================================================= */

const arrays = createTopic(
    "arrays",
    "Arrays",

    [
        definition(
            "Array",
            "An array is a collection of elements of the same data type stored in contiguous memory locations and accessed using an index."
        ),

        heading("Characteristics of Arrays"),

        list([
            "Fixed size (in most languages).",
            "Homogeneous elements (same type).",
            "Contiguous memory allocation.",
            "Indexed access starting from 0.",
            "Random access in O(1) time.",
        ]),

        heading("Types of Arrays"),

        table(
            ["Type", "Description", "Example"],
            [
                ["One-Dimensional", "Linear list of elements", "int a[5]"],
                ["Two-Dimensional", "Matrix or table (rows × columns)", "int a[3][3]"],
                ["Multi-Dimensional", "Arrays with more than 2 dimensions", "int a[2][3][4]"],
            ]
        ),

        heading("Memory Representation"),

        text(
            "For a 1D array, the address of element at index i is calculated as: Address(a[i]) = Base_Address + (i × size_of_element)."
        ),

        code(
            `// One-dimensional array in C
int arr[5] = {10, 20, 30, 40, 50};

// Accessing elements
printf("%d", arr[0]);  // 10
printf("%d", arr[2]);  // 30`,
            "c",
            "1D array example"
        ),

        heading("Two-Dimensional Array"),

        code(
            `int matrix[3][3] = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};

// Access
printf("%d", matrix[1][2]);  // 6`,
            "c",
            "2D array example"
        ),

        text(
            "For a 2D array stored in row-major order: Address(a[i][j]) = Base + ((i × columns) + j) × size_of_element."
        ),

        heading("Operations on Arrays"),

        heading("1. Traversal"),

        code(
            `for (int i = 0; i < n; i++) {
    printf("%d ", arr[i]);
}`,
            "c",
            "Array traversal"
        ),

        heading("2. Insertion"),

        code(
            `// Insert element x at position pos
for (int i = n; i > pos; i--) {
    arr[i] = arr[i-1];
}
arr[pos] = x;
n++;`,
            "c",
            "Insertion in array"
        ),

        heading("3. Deletion"),

        code(
            `// Delete element at position pos
for (int i = pos; i < n-1; i++) {
    arr[i] = arr[i+1];
}
n--;`,
            "c",
            "Deletion from array"
        ),

        heading("4. Searching"),

        code(
            `// Linear Search
int search(int arr[], int n, int key) {
    for (int i = 0; i < n; i++) {
        if (arr[i] == key)
            return i;
    }
    return -1;
}`,
            "c",
            "Linear search"
        ),

        heading("Advantages and Disadvantages"),

        table(
            ["Advantages", "Disadvantages"],
            [
                ["Fast random access O(1)", "Fixed size in static arrays"],
                ["Simple and easy to use", "Insertion/deletion is O(n)"],
                ["Efficient memory usage", "Wastes memory if not full"],
                ["Cache-friendly", "Cannot grow dynamically"],
            ]
        ),

        note(
            "Insertion and deletion in an array are expensive because elements must be shifted. Use linked lists when frequent insertions or deletions are required.",
            "warning",
            "When to Avoid Arrays"
        ),

        keyPoints([
            "Array stores elements of the same type in contiguous memory.",
            "Array index starts from 0 in most languages.",
            "Access is O(1), but insertion and deletion are O(n).",
            "2D arrays are stored in row-major or column-major order.",
            "Arrays are the base for many other data structures.",
        ]),
    ],

    {
        summary:
            "Learn arrays, their types, memory representation, operations and time complexity.",
        minutes: 12,
        tags: ["array", "data-structure", "important"],

        mcqs: [
            mcq(
                "Array index in C starts from:",
                ["1", "0", "-1", "2"],
                1,
                "Array index starts from 0 in C and most languages."
            ),
            mcq(
                "Time complexity to access an element in array is:",
                ["O(n)", "O(1)", "O(log n)", "O(n²)"],
                1,
                "Array element access is O(1) because of random access."
            ),
            mcq(
                "Which operation is expensive in an array?",
                ["Access", "Insertion in middle", "Traversal", "Read"],
                1,
                "Insertion in the middle requires shifting elements."
            ),
            mcq(
                "Formula for address of a[i] in 1D array:",
                ["Base + i", "Base + (i × size)", "Base × i", "Base - i"],
                1,
                "Address = Base + (i × size_of_element)."
            ),
        ],

        questions: [
            qa(
                "What is an array? Explain its types and operations.",
                "An array is a collection of elements of the same data type stored in contiguous memory locations and accessed using indices. Arrays are of three types: one-dimensional (linear list), two-dimensional (matrix) and multi-dimensional. Common operations on arrays include traversal, insertion, deletion, searching, sorting and merging. Access is O(1) but insertion and deletion take O(n) time due to element shifting.",
                4
            ),
            qa(
                "Explain memory representation of one-dimensional and two-dimensional arrays.",
                "In a 1D array, elements are stored in contiguous memory. The address of element at index i is Base + (i × size_of_element). In a 2D array, elements are stored either in row-major order (row by row) or column-major order (column by column). For row-major: Address(a[i][j]) = Base + ((i × columns) + j) × size. For column-major: Address(a[i][j]) = Base + ((j × rows) + i) × size.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — Stack
========================================================= */

const stack = createTopic(
    "stack",
    "Stack",

    [
        definition(
            "Stack",
            "A stack is a linear data structure that follows the LIFO (Last In First Out) principle. Elements are inserted and removed from the same end called the top."
        ),

        heading("Characteristics of Stack"),

        list([
            "Follows LIFO order.",
            "Only one end (top) is used for operations.",
            "Insertion is called PUSH.",
            "Deletion is called POP.",
            "Can be implemented using arrays or linked lists.",
        ]),

        heading("Basic Operations"),

        table(
            ["Operation", "Description", "Complexity"],
            [
                ["push()", "Insert element on top", "O(1)"],
                ["pop()", "Remove element from top", "O(1)"],
                ["peek() / top()", "View top element", "O(1)"],
                ["isEmpty()", "Check if stack is empty", "O(1)"],
                ["isFull()", "Check if stack is full", "O(1)"],
            ]
        ),

        heading("Stack Implementation using Array"),

        code(
            `#define MAX 100

int stack[MAX];
int top = -1;

void push(int x) {
    if (top == MAX - 1) {
        printf("Stack Overflow\\n");
        return;
    }
    stack[++top] = x;
}

int pop() {
    if (top == -1) {
        printf("Stack Underflow\\n");
        return -1;
    }
    return stack[top--];
}

int peek() {
    if (top == -1) return -1;
    return stack[top];
}

int isEmpty() {
    return top == -1;
}`,
            "c",
            "Stack using array"
        ),

        heading("Stack Overflow and Underflow"),

        definition(
            "Stack Overflow",
            "Occurs when we try to push an element into a full stack."
        ),

        definition(
            "Stack Underflow",
            "Occurs when we try to pop an element from an empty stack."
        ),

        heading("Applications of Stack"),

        list([
            "Expression evaluation (infix, postfix, prefix).",
            "Expression conversion (infix to postfix/prefix).",
            "Function call and recursion management.",
            "Undo/Redo operations in editors.",
            "Browser back and forward navigation.",
            "Balanced parenthesis checking.",
            "Depth First Search (DFS) in graphs.",
            "Backtracking algorithms.",
        ]),

        heading("Infix, Prefix and Postfix"),

        table(
            ["Notation", "Format", "Example"],
            [
                ["Infix", "operand operator operand", "A + B"],
                ["Prefix (Polish)", "operator operand operand", "+ A B"],
                ["Postfix (Reverse Polish)", "operand operand operator", "A B +"],
            ]
        ),

        heading("Infix to Postfix Conversion Example"),

        text(
            "Convert: A + B * C → Result: A B C * +"
        ),

        steps([
            "Scan A → output: A",
            "Scan + → push to stack",
            "Scan B → output: A B",
            "Scan * → higher precedence than +, push to stack",
            "Scan C → output: A B C",
            "End of expression → pop operators: A B C * +",
        ]),

        heading("Postfix Evaluation Example"),

        text("Evaluate: 5 6 + 2 *"),

        steps([
            "Push 5, Push 6",
            "See + → pop 6 and 5, compute 5+6=11, push 11",
            "Push 2",
            "See * → pop 2 and 11, compute 11*2=22, push 22",
            "Result: 22",
        ]),

        note(
            "Postfix notation is preferred by computers because it does not need parentheses and can be evaluated using a single pass with a stack.",
            "tip",
            "Why Postfix?"
        ),

        keyPoints([
            "Stack follows LIFO order.",
            "Push and pop operations take O(1) time.",
            "Overflow occurs when stack is full; underflow when empty.",
            "Stack is used for expression evaluation and recursion.",
            "Postfix expressions are easier for computers to evaluate.",
        ]),
    ],

    {
        summary:
            "Learn stack data structure, its operations, implementation, applications and expression conversions.",
        minutes: 13,
        tags: ["stack", "lifo", "expression", "important"],

        mcqs: [
            mcq(
                "Stack follows which order?",
                ["FIFO", "LIFO", "Random", "Priority"],
                1,
                "Stack follows LIFO (Last In First Out) order."
            ),
            mcq(
                "Which operation inserts an element into stack?",
                ["pop", "push", "peek", "top"],
                1,
                "push() inserts an element into stack."
            ),
            mcq(
                "Postfix of A + B * C is:",
                ["ABC*+", "AB+C*", "A+BC*", "*+ABC"],
                0,
                "Multiplication has higher precedence, so postfix is A B C * +."
            ),
            mcq(
                "Which application uses stack?",
                ["Scheduling", "Recursion", "Printing", "Networking"],
                1,
                "Recursion uses stack to store function calls."
            ),
        ],

        questions: [
            qa(
                "What is a stack? Explain its operations and applications.",
                "A stack is a linear data structure that follows the LIFO principle where insertion and deletion occur at the same end called top. Its main operations are push (insert), pop (remove), peek (view top), isEmpty and isFull. All these operations take O(1) time. Applications of stack include expression evaluation, infix to postfix conversion, function call management, recursion, undo/redo operations, balanced parenthesis checking and backtracking algorithms.",
                4
            ),
            qa(
                "Convert the infix expression (A + B) * (C - D) to postfix.",
                "Scanning left to right: '(' pushed, A output, '+' pushed, B output, ')' pops until '(': output A B +. Then '*' pushed. '(' pushed, C output, '-' pushed, D output, ')' pops until '(': output C D -. End pops remaining: '*'. Final postfix expression: A B + C D - *.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — Queue
========================================================= */

const queue = createTopic(
    "queue",
    "Queue",

    [
        definition(
            "Queue",
            "A queue is a linear data structure that follows the FIFO (First In First Out) principle. Elements are inserted from one end called rear and removed from the other end called front."
        ),

        heading("Characteristics of Queue"),

        list([
            "Follows FIFO order.",
            "Uses two ends: front and rear.",
            "Insertion happens at rear (enqueue).",
            "Deletion happens at front (dequeue).",
            "Can be implemented using arrays or linked lists.",
        ]),

        heading("Basic Operations"),

        table(
            ["Operation", "Description", "Complexity"],
            [
                ["enqueue()", "Insert element at rear", "O(1)"],
                ["dequeue()", "Remove element from front", "O(1)"],
                ["front()", "View front element", "O(1)"],
                ["rear()", "View rear element", "O(1)"],
                ["isEmpty()", "Check if empty", "O(1)"],
                ["isFull()", "Check if full", "O(1)"],
            ]
        ),

        heading("Queue Implementation using Array"),

        code(
            `#define MAX 100

int queue[MAX];
int front = -1, rear = -1;

void enqueue(int x) {
    if (rear == MAX - 1) {
        printf("Queue Overflow\\n");
        return;
    }
    if (front == -1) front = 0;
    queue[++rear] = x;
}

int dequeue() {
    if (front == -1 || front > rear) {
        printf("Queue Underflow\\n");
        return -1;
    }
    return queue[front++];
}

int peek() {
    if (front == -1) return -1;
    return queue[front];
}`,
            "c",
            "Queue using array"
        ),

        heading("Types of Queue"),

        table(
            ["Type", "Description"],
            [
                ["Simple Queue", "Basic FIFO queue"],
                ["Circular Queue", "Last position connects to first position"],
                ["Priority Queue", "Elements dequeued based on priority"],
                ["Deque", "Insertion and deletion at both ends"],
            ]
        ),

        heading("Circular Queue"),

        definition(
            "Circular Queue",
            "A circular queue is a linear data structure in which the last position is connected back to the first position to make a circle, allowing efficient use of memory."
        ),

        code(
            `#define MAX 5

int cq[MAX];
int front = -1, rear = -1;

void enqueue(int x) {
    if ((rear + 1) % MAX == front) {
        printf("Queue Full\\n");
        return;
    }
    if (front == -1) front = 0;
    rear = (rear + 1) % MAX;
    cq[rear] = x;
}

int dequeue() {
    if (front == -1) {
        printf("Queue Empty\\n");
        return -1;
    }
    int x = cq[front];
    if (front == rear) {
        front = rear = -1;
    } else {
        front = (front + 1) % MAX;
    }
    return x;
}`,
            "c",
            "Circular queue implementation"
        ),

        heading("Priority Queue"),

        definition(
            "Priority Queue",
            "A priority queue is a special type of queue in which each element is associated with a priority, and elements are dequeued based on priority rather than order of insertion."
        ),

        heading("Deque (Double-Ended Queue)"),

        definition(
            "Deque",
            "A deque is a queue that allows insertion and deletion at both ends: front and rear."
        ),

        list([
            "Input-restricted deque: Insertion only at one end.",
            "Output-restricted deque: Deletion only at one end.",
        ]),

        heading("Applications of Queue"),

        list([
            "CPU scheduling and disk scheduling.",
            "Handling interrupts in operating systems.",
            "Print spooler queue.",
            "Breadth First Search (BFS) in graphs.",
            "Call center systems.",
            "Message queues in networking.",
            "Buffering in streaming services.",
            "Keyboard input handling.",
        ]),

        heading("Stack vs Queue"),

        table(
            ["Basis", "Stack", "Queue"],
            [
                ["Order", "LIFO", "FIFO"],
                ["Ends", "One (top)", "Two (front and rear)"],
                ["Insertion", "push at top", "enqueue at rear"],
                ["Deletion", "pop from top", "dequeue from front"],
                ["Applications", "Recursion, undo", "Scheduling, BFS"],
            ]
        ),

        note(
            "In a simple linear queue, once the rear reaches the end, we cannot insert new elements even if space is available at the front. Circular queue solves this problem.",
            "tip",
            "Why Circular Queue?"
        ),

        keyPoints([
            "Queue follows FIFO order.",
            "Enqueue adds to rear, dequeue removes from front.",
            "Circular queue reuses empty spaces efficiently.",
            "Priority queue serves elements based on priority.",
            "Deque allows insertion and deletion from both ends.",
        ]),
    ],

    {
        summary:
            "Learn queue data structure, its types, operations, circular and priority queues and applications.",
        minutes: 13,
        tags: ["queue", "fifo", "circular", "priority", "important"],

        mcqs: [
            mcq(
                "Queue follows which order?",
                ["LIFO", "FIFO", "Random", "Priority"],
                1,
                "Queue follows FIFO (First In First Out)."
            ),
            mcq(
                "In queue, insertion is done at:",
                ["Front", "Rear", "Middle", "Top"],
                1,
                "Insertion in queue happens at rear."
            ),
            mcq(
                "Which queue allows insertion/deletion at both ends?",
                ["Simple Queue", "Circular Queue", "Priority Queue", "Deque"],
                3,
                "Deque allows operations at both ends."
            ),
            mcq(
                "Which algorithm uses queue?",
                ["DFS", "BFS", "Quick Sort", "Recursion"],
                1,
                "BFS uses queue for level-order traversal."
            ),
        ],

        questions: [
            qa(
                "What is a queue? Explain its types and applications.",
                "A queue is a linear data structure that follows FIFO order where insertion happens at rear and deletion happens at front. Types of queue include simple queue, circular queue (last position connects to first), priority queue (elements served based on priority) and deque (insertion and deletion at both ends). Applications include CPU scheduling, disk scheduling, print spooling, BFS traversal, message queues and call handling systems.",
                4
            ),
            qa(
                "Differentiate between stack and queue.",
                "Stack follows LIFO principle while queue follows FIFO principle. Stack uses only one end called top for both insertion (push) and deletion (pop). Queue uses two ends: rear for insertion (enqueue) and front for deletion (dequeue). Stack is used in recursion, expression evaluation and undo operations, while queue is used in scheduling, BFS and buffering systems.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 5 — Recursion
========================================================= */

const recursion = createTopic(
    "recursion",
    "Recursion",

    [
        definition(
            "Recursion",
            "Recursion is a programming technique in which a function calls itself directly or indirectly to solve a smaller instance of the same problem."
        ),

        heading("Components of Recursion"),

        list([
            "Base Case — The condition that stops the recursion.",
            "Recursive Case — The part where the function calls itself.",
            "Stack Memory — Each recursive call is stored in the call stack.",
        ]),

        heading("How Recursion Works"),

        text(
            "Each recursive call is pushed onto the system stack. When the base case is reached, the function starts returning values and the stack unwinds."
        ),

        heading("Example 1: Factorial"),

        code(
            `int factorial(int n) {
    if (n == 0 || n == 1)   // base case
        return 1;
    return n * factorial(n - 1);   // recursive case
}

// factorial(5) = 5 * 4 * 3 * 2 * 1 = 120`,
            "c",
            "Factorial using recursion"
        ),

        heading("Example 2: Fibonacci Series"),

        code(
            `int fibonacci(int n) {
    if (n <= 1)
        return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Series: 0, 1, 1, 2, 3, 5, 8, 13...`,
            "c",
            "Fibonacci using recursion"
        ),

        heading("Example 3: Sum of N Natural Numbers"),

        code(
            `int sum(int n) {
    if (n == 0) return 0;
    return n + sum(n - 1);
}`,
            "c",
            "Sum of N numbers"
        ),

        heading("Types of Recursion"),

        table(
            ["Type", "Description", "Example"],
            [
                ["Direct", "Function calls itself directly", "fact() calls fact()"],
                ["Indirect", "Function A calls B, B calls A", "Mutual recursion"],
                ["Tail Recursion", "Recursive call is last statement", "Optimized by compiler"],
                ["Non-Tail Recursion", "Work done after recursive call", "factorial()"],
                ["Linear Recursion", "One recursive call per function", "factorial()"],
                ["Tree Recursion", "Multiple recursive calls", "fibonacci()"],
            ]
        ),

        heading("Recursion vs Iteration"),

        table(
            ["Basis", "Recursion", "Iteration"],
            [
                ["Definition", "Function calls itself", "Uses loops"],
                ["Memory", "Uses stack memory", "No extra stack"],
                ["Speed", "Slower due to overhead", "Faster"],
                ["Code", "Shorter and elegant", "Longer sometimes"],
                ["Termination", "Base case required", "Loop condition"],
                ["Use", "Trees, graphs, backtracking", "Simple counting"],
            ]
        ),

        heading("Tower of Hanoi"),

        definition(
            "Tower of Hanoi",
            "A classic recursion problem where n disks must be moved from source rod to destination rod using an auxiliary rod, following rules: only one disk moved at a time, and a larger disk cannot be placed on a smaller one."
        ),

        code(
            `void tower(int n, char from, char to, char via) {
    if (n == 1) {
        printf("Move disk 1 from %c to %c\\n", from, to);
        return;
    }
    tower(n - 1, from, via, to);
    printf("Move disk %d from %c to %c\\n", n, from, to);
    tower(n - 1, via, to, from);
}

// Call: tower(3, 'A', 'C', 'B');`,
            "c",
            "Tower of Hanoi"
        ),

        text(
            "For n disks, the minimum number of moves required is 2ⁿ - 1."
        ),

        heading("Advantages and Disadvantages"),

        table(
            ["Advantages", "Disadvantages"],
            [
                ["Cleaner and shorter code", "Higher memory usage"],
                ["Natural for tree/graph problems", "Slower due to function calls"],
                ["Easy to understand for divide-and-conquer", "Risk of stack overflow"],
                ["Reduces complexity in some algorithms", "Difficult to debug"],
            ]
        ),

        note(
            "Every recursive function MUST have a base case. Without it, the function will call itself infinitely and cause a stack overflow error.",
            "warning",
            "Base Case Rule"
        ),

        keyPoints([
            "Recursion is a function calling itself.",
            "It requires a base case to terminate.",
            "Uses call stack to store function calls.",
            "Useful for tree, graph and divide-and-conquer problems.",
            "Tower of Hanoi requires 2ⁿ - 1 moves for n disks.",
        ]),
    ],

    {
        summary:
            "Learn recursion, its types, examples like factorial, Fibonacci and Tower of Hanoi, and compare with iteration.",
        minutes: 12,
        tags: ["recursion", "factorial", "fibonacci", "hanoi", "important"],

        mcqs: [
            mcq(
                "What is required in a recursive function?",
                ["Loop", "Base case", "Array", "Pointer"],
                1,
                "A base case is required to terminate recursion."
            ),
            mcq(
                "Tower of Hanoi with n disks requires how many moves?",
                ["n", "2n", "2ⁿ - 1", "n²"],
                2,
                "Minimum moves = 2ⁿ - 1."
            ),
            mcq(
                "Which is an example of tree recursion?",
                ["Factorial", "Fibonacci", "Sum of N", "Print numbers"],
                1,
                "Fibonacci makes two recursive calls, so it's tree recursion."
            ),
            mcq(
                "Recursion uses which memory area?",
                ["Heap", "Stack", "Data", "Code"],
                1,
                "Recursive calls are stored on the stack."
            ),
        ],

        questions: [
            qa(
                "What is recursion? Explain with an example.",
                "Recursion is a programming technique in which a function calls itself to solve a smaller instance of the same problem. Every recursive function has two parts: a base case that stops the recursion, and a recursive case where the function calls itself. For example, factorial can be defined recursively as factorial(n) = n * factorial(n-1) with base case factorial(0) = 1. Recursion is elegant for problems like factorial, Fibonacci, tree traversal and Tower of Hanoi.",
                4
            ),
            qa(
                "Explain Tower of Hanoi problem.",
                "Tower of Hanoi is a classic recursion problem consisting of three rods and n disks of different sizes. The goal is to move all disks from source rod to destination rod using an auxiliary rod, following two rules: only one disk can be moved at a time, and a larger disk cannot be placed on a smaller one. The recursive solution moves n-1 disks from source to auxiliary, then the largest disk from source to destination, then n-1 disks from auxiliary to destination. Total moves required = 2ⁿ - 1.",
                4
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit1Topics = [
    introDataStructures,
    arrays,
    stack,
    queue,
    recursion,
];