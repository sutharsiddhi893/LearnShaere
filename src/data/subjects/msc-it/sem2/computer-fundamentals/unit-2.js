/* =========================================================
   MSc-IT • SEM 1 • Computer Fundamentals
   UNIT 2 — Fundamentals of Data Structures
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
   TOPIC 1 — Introduction to Data Structures and Arrays
========================================================= */

const introToDataStructuresAndArrays = createTopic(
    "introduction-to-data-structures-and-arrays",
    "Introduction to Data Structures and Arrays",

    [
        definition(
            "Data Structure",
            "A specialised format for organising, processing, retrieving and storing data. It defines how data is arranged in memory and the operations that can be performed on it efficiently."
        ),

        text(
            "Choosing the right data structure is one of the most important decisions in software development. The choice affects the efficiency of algorithms in terms of time and space. A well-chosen data structure can reduce an operation from hours to milliseconds."
        ),

        heading("Classification of Data Structures"),

        code(
            `Data Structures
  ├── Linear (elements arranged sequentially)
  │   ├── Arrays
  │   ├── Linked Lists
  │   ├── Stacks
  │   └── Queues
  │
  └── Non-Linear (elements arranged hierarchically or interconnected)
      ├── Trees
      │   ├── Binary Tree
      │   ├── Binary Search Tree (BST)
      │   ├── AVL Tree
      │   └── Heap
      └── Graphs
          ├── Directed / Undirected
          └── Weighted / Unweighted`,
            "text",
            "Classification of data structures"
        ),

        heading("Abstract Data Type (ADT)"),

        definition(
            "Abstract Data Type (ADT)",
            "A mathematical model that defines a data type by its behaviour (operations) rather than its implementation. An ADT specifies what operations can be performed but not how they are implemented."
        ),

        table(
            ["ADT", "Operations", "Example Implementations"],
            [
                ["List", "insert, delete, search, access by index", "Array, Linked List"],
                ["Stack", "push, pop, peek, isEmpty", "Array-based, Linked List-based"],
                ["Queue", "enqueue, dequeue, peek, isEmpty", "Array-based, Linked List-based"],
                ["Dictionary", "insert, delete, search by key", "Hash Table, BST"],
            ]
        ),

        heading("Arrays"),

        definition(
            "Array",
            "A linear data structure that stores a fixed-size collection of elements of the same data type in contiguous memory locations. Elements are accessed by their index (position)."
        ),

        code(
            `Array in Memory:

  Index:    0     1     2     3     4
  Value:  [ 10 |  20 |  30 |  40 |  50 ]
  Address: 1000  1004  1008  1012  1016  (assuming 4-byte integers)

  Address of A[i] = Base Address + i × Size of Element
  Address of A[3] = 1000 + 3 × 4 = 1012`,
            "text",
            "Array memory layout"
        ),

        heading("Array Operations and Time Complexity"),

        table(
            ["Operation", "Time Complexity", "Description"],
            [
                ["Access by index", "O(1)", "Direct calculation of memory address"],
                ["Search (unsorted)", "O(n)", "Must check each element"],
                ["Search (sorted, binary)", "O(log n)", "Divide and conquer"],
                ["Insert at end", "O(1)", "Place at next available position"],
                ["Insert at beginning", "O(n)", "Must shift all elements right"],
                ["Delete at end", "O(1)", "Remove last element"],
                ["Delete at beginning", "O(n)", "Must shift all elements left"],
            ]
        ),

        heading("Types of Arrays"),

        table(
            ["Type", "Description", "Example"],
            [
                ["1D Array", "Single row of elements", "int arr[5] = {1, 2, 3, 4, 5}"],
                ["2D Array", "Rows and columns (matrix)", "int matrix[3][3]"],
                ["Multi-dimensional", "3D or higher", "int cube[3][3][3]"],
                ["Dynamic Array", "Resizable array (grows as needed)", "ArrayList in Java, list in Python"],
            ]
        ),

        heading("Advantages and Disadvantages of Arrays"),

        table(
            ["Advantages", "Disadvantages"],
            [
                ["O(1) random access by index", "Fixed size (static arrays)"],
                ["Cache-friendly (contiguous memory)", "Insertion/deletion in middle is O(n)"],
                ["Simple to implement and use", "Memory wastage if allocated size > actual need"],
                ["Memory efficient (no extra pointers)", "All elements must be of the same type"],
            ]
        ),

        heading("2D Array Memory Representation"),

        table(
            ["Order", "Formula", "Description"],
            [
                ["Row-Major", "Address = Base + (i × cols + j) × size", "Rows stored one after another"],
                ["Column-Major", "Address = Base + (j × rows + i) × size", "Columns stored one after another"],
            ]
        ),

        note(
            "Arrays are the most fundamental data structure and form the building block for many other structures. Hash tables, heaps, and dynamic arrays are all built on top of arrays. Their O(1) random access makes them ideal for situations where you need fast indexed access.",
            "tip",
            "Foundation"
        ),

        keyPoints([
            "Data structures organise data for efficient storage, retrieval and manipulation.",
            "Linear structures (arrays, lists, stacks, queues) arrange elements sequentially.",
            "An array stores elements of the same type in contiguous memory with O(1) access by index.",
            "Insertion and deletion at the beginning or middle of an array is O(n) due to shifting.",
            "2D arrays can be stored in row-major or column-major order in memory.",
        ]),
    ],

    {
        summary:
            "Understand data structure classification, ADTs, and arrays including operations, complexity, types and memory representation.",
        minutes: 12,
        tags: ["data-structures", "arrays", "adt", "linear", "important"],

        mcqs: [
            mcq(
                "An array stores elements in:",
                ["Random memory locations", "Contiguous memory locations", "Linked memory locations", "Hierarchical memory"],
                1,
                "Array elements are stored in contiguous (adjacent) memory locations."
            ),
            mcq(
                "The time complexity of accessing an element by index in an array is:",
                ["O(n)", "O(log n)", "O(1)", "O(n²)"],
                2,
                "Array access by index is O(1) because the address is calculated directly."
            ),
            mcq(
                "Inserting an element at the beginning of an array takes:",
                ["O(1)", "O(log n)", "O(n)", "O(n²)"],
                2,
                "All existing elements must be shifted one position right, taking O(n) time."
            ),
            mcq(
                "An Abstract Data Type (ADT) defines:",
                ["The implementation details", "The behaviour and operations, not the implementation", "The hardware requirements", "The programming language"],
                1,
                "An ADT specifies what operations can be performed, not how they are implemented."
            ),
            mcq(
                "In row-major order, a 2D array stores:",
                ["Columns one after another", "Rows one after another", "Elements randomly", "Only the diagonal"],
                1,
                "Row-major order stores all elements of row 0, then row 1, and so on."
            ),
        ],

        questions: [
            qa(
                "Classify data structures and explain the difference between linear and non-linear structures.",
                "Data structures are classified into linear and non-linear types. Linear data structures arrange elements sequentially where each element has at most one predecessor and one successor. Examples include arrays, linked lists, stacks and queues. Traversal of a linear structure visits each element exactly once in a single run. Non-linear data structures arrange elements hierarchically or in an interconnected manner where an element can have multiple predecessors or successors. Examples include trees (hierarchical with parent-child relationships) and graphs (interconnected nodes with edges). Traversal of non-linear structures may require visiting elements multiple times or using specialised algorithms like BFS or DFS.",
                5
            ),
            qa(
                "What is an array? Explain its advantages and disadvantages.",
                "An array is a linear data structure that stores a fixed-size collection of elements of the same data type in contiguous memory locations. Elements are accessed by their index, and the memory address of any element can be calculated directly using the formula: Address = Base Address + index × element size. Advantages include O(1) random access by index, cache-friendly contiguous memory layout, simplicity and memory efficiency since no extra pointers are needed. Disadvantages include fixed size in static arrays which cannot grow or shrink, O(n) time for insertion and deletion at the beginning or middle due to element shifting, potential memory wastage if the allocated size exceeds actual needs, and the requirement that all elements be of the same data type.",
                5
            ),
            qa(
                "What is an Abstract Data Type (ADT)? Give examples.",
                "An Abstract Data Type is a mathematical model that defines a data type by its behaviour — the operations that can be performed on it and the semantics of those operations — without specifying how the operations are implemented. This separation of interface from implementation allows different implementations to be used interchangeably. For example, the List ADT defines operations like insert, delete, search and access by index, which can be implemented using either an array or a linked list. The Stack ADT defines push, pop, peek and isEmpty operations, which can be implemented using an array or a linked list. The Queue ADT defines enqueue, dequeue and peek, also implementable with arrays or linked lists.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — Linked Lists
========================================================= */

const linkedLists = createTopic(
    "linked-lists",
    "Linked Lists",

    [
        definition(
            "Linked List",
            "A linear data structure where elements (nodes) are stored in non-contiguous memory locations. Each node contains data and a pointer (reference) to the next node in the sequence. The last node points to NULL."
        ),

        text(
            "Unlike arrays, linked lists do not require contiguous memory. This makes insertion and deletion efficient because no elements need to be shifted. However, random access by index is not possible — you must traverse from the head to reach a specific position."
        ),

        heading("Node Structure"),

        code(
            `Node Structure:

  ┌──────┬──────┐
  │ Data │ Next │──→ (pointer to next node)
  └──────┴──────┘

  Example Linked List:

  Head
   ↓
  ┌────┬────┐   ┌────┬────┐   ┌────┬──────┐
  │ 10 │ ──→│   │ 20 │ ──→│   │ 30 │ NULL │
  └────┴────┘   └────┴────┘   └────┴──────┘`,
            "text",
            "Linked list node and structure"
        ),

        heading("Types of Linked Lists"),

        table(
            ["Type", "Description", "Structure"],
            [
                ["Singly Linked List", "Each node points to the next node only", "A → B → C → NULL"],
                ["Doubly Linked List", "Each node points to both next and previous nodes", "NULL ← A ↔ B ↔ C → NULL"],
                ["Circular Linked List", "Last node points back to the first node", "A → B → C → A"],
                ["Circular Doubly Linked", "Doubly linked with last node pointing to first", "A ↔ B ↔ C ↔ A"],
            ]
        ),

        heading("Singly Linked List Operations"),

        code(
            `Insert at Beginning (O(1)):
  new_node.next = head
  head = new_node

  Before: head → [10] → [20] → NULL
  Insert 5: head → [5] → [10] → [20] → NULL

  Insert at End (O(n)):
  Traverse to last node
  last_node.next = new_node
  new_node.next = NULL

  Before: head → [10] → [20] → NULL
  Insert 30: head → [10] → [20] → [30] → NULL

  Delete from Beginning (O(1)):
  head = head.next

  Before: head → [10] → [20] → [30] → NULL
  Delete: head → [20] → [30] → NULL`,
            "text",
            "Linked list operations"
        ),

        heading("Time Complexity Comparison"),

        table(
            ["Operation", "Array", "Singly Linked List", "Doubly Linked List"],
            [
                ["Access by index", "O(1)", "O(n)", "O(n)"],
                ["Search", "O(n)", "O(n)", "O(n)"],
                ["Insert at beginning", "O(n)", "O(1)", "O(1)"],
                ["Insert at end", "O(1)*", "O(n) / O(1)**", "O(1)"],
                ["Delete at beginning", "O(n)", "O(1)", "O(1)"],
                ["Delete at end", "O(1)*", "O(n)", "O(1)"],
                ["Insert/Delete at position", "O(n)", "O(n)", "O(n)"],
            ]
        ),

        text("* Amortised O(1) for dynamic arrays. ** O(1) if tail pointer is maintained."),

        heading("Doubly Linked List"),

        code(
            `Doubly Linked List Node:

  ┌──────┬──────┬──────┐
  │ Prev │ Data │ Next │
  └──────┴──────┴──────┘

  Structure:
  NULL ← [10] ↔ [20] ↔ [30] → NULL

  Advantages over singly linked list:
  - Can traverse in both directions
  - O(1) deletion of a given node (if you have the pointer)
  - O(1) insert/delete at both ends

  Disadvantage:
  - Extra memory for the prev pointer`,
            "text",
            "Doubly linked list"
        ),

        heading("Circular Linked List"),

        code(
            `Circular Singly Linked List:

  head → [10] → [20] → [30] ──┐
           ↑                    │
           └────────────────────┘

  No NULL pointer — last node points back to head.
  Useful for round-robin scheduling and circular buffers.`,
            "text",
            "Circular linked list"
        ),

        heading("Array versus Linked List"),

        table(
            ["Aspect", "Array", "Linked List"],
            [
                ["Memory", "Contiguous", "Non-contiguous"],
                ["Size", "Fixed (static) or dynamic", "Dynamic (grows/shrinks easily)"],
                ["Access", "O(1) random access", "O(n) sequential access only"],
                ["Insert/Delete at start", "O(n)", "O(1)"],
                ["Memory overhead", "None", "Extra pointer per node"],
                ["Cache performance", "Excellent (locality)", "Poor (scattered in memory)"],
                ["Implementation", "Simple", "More complex"],
            ]
        ),

        note(
            "Choose an array when you need fast random access and the size is known. Choose a linked list when you need frequent insertions and deletions at the beginning or middle, or when the size changes dynamically and unpredictably.",
            "tip",
            "When to Use What"
        ),

        keyPoints([
            "A linked list stores elements in non-contiguous nodes connected by pointers.",
            "Types include singly linked, doubly linked, circular and circular doubly linked.",
            "Insertion and deletion at the beginning of a linked list is O(1), unlike arrays.",
            "Random access by index is O(n) in linked lists versus O(1) in arrays.",
            "Doubly linked lists allow bidirectional traversal and O(1) deletion at both ends.",
        ]),
    ],

    {
        summary:
            "Master linked list types (singly, doubly, circular), operations, time complexity and comparison with arrays.",
        minutes: 12,
        tags: ["data-structures", "linked-list", "singly", "doubly", "circular", "important"],

        mcqs: [
            mcq(
                "In a singly linked list, each node contains:",
                ["Data only", "Data and a pointer to the next node", "Data and two pointers", "A pointer only"],
                1,
                "Each node in a singly linked list contains data and a pointer to the next node."
            ),
            mcq(
                "Inserting a node at the beginning of a singly linked list takes:",
                ["O(n)", "O(log n)", "O(1)", "O(n²)"],
                2,
                "Insertion at the beginning only requires updating the head pointer, which is O(1)."
            ),
            mcq(
                "A doubly linked list differs from a singly linked list by having:",
                ["No pointers", "A pointer to the previous node in addition to the next", "Fixed size", "Contiguous memory"],
                1,
                "Each node in a doubly linked list has both prev and next pointers."
            ),
            mcq(
                "In a circular linked list, the last node points to:",
                ["NULL", "The middle node", "The first node (head)", "Itself"],
                2,
                "The last node in a circular linked list points back to the first node."
            ),
            mcq(
                "Random access by index in a linked list takes:",
                ["O(1)", "O(log n)", "O(n)", "O(n²)"],
                2,
                "You must traverse from the head to the desired index, taking O(n) time."
            ),
        ],

        questions: [
            qa(
                "Explain the different types of linked lists.",
                "A singly linked list has nodes where each node contains data and a pointer to the next node. The last node points to NULL. Traversal is possible in one direction only, from head to tail. A doubly linked list adds a prev pointer to each node, allowing traversal in both directions. This enables O(1) deletion of a given node and O(1) operations at both ends, but requires extra memory for the prev pointer. A circular linked list connects the last node back to the first node instead of NULL, forming a loop. It is useful for round-robin scheduling and circular buffers. A circular doubly linked list combines both features, with bidirectional pointers and the last node connected back to the first.",
                5
            ),
            qa(
                "Compare arrays and linked lists.",
                "Arrays store elements in contiguous memory locations, providing O(1) random access by index but requiring O(n) time for insertion and deletion at the beginning or middle due to element shifting. Arrays have fixed size (static) or amortised O(1) append (dynamic), excellent cache performance due to spatial locality, and no memory overhead. Linked lists store elements in non-contiguous nodes connected by pointers, providing O(1) insertion and deletion at the beginning but O(n) access by index since traversal from the head is required. Linked lists grow and shrink dynamically without wasting memory, but have poor cache performance due to scattered memory layout and extra memory overhead for pointers. Choose arrays for fast random access and linked lists for frequent insertions and deletions.",
                5
            ),
            qa(
                "Explain how insertion at the beginning and end works in a singly linked list.",
                "To insert at the beginning of a singly linked list, create a new node, set its next pointer to the current head, and update the head to point to the new node. This takes O(1) time because it only involves changing two pointers regardless of the list size. For example, to insert 5 into head→[10]→[20]→NULL, set new_node.next = head (pointing to [10]) and head = new_node, resulting in head→[5]→[10]→[20]→NULL. To insert at the end, traverse the list from head until you reach the last node (whose next is NULL), then set last_node.next = new_node and new_node.next = NULL. This takes O(n) time because you must traverse the entire list. However, if a tail pointer is maintained that always points to the last node, insertion at the end becomes O(1).",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — Stacks and Queues
========================================================= */

const stacksAndQueues = createTopic(
    "stacks-and-queues",
    "Stacks and Queues",

    [
        heading("Stack"),

        definition(
            "Stack",
            "A linear data structure that follows the Last In First Out (LIFO) principle. The last element added is the first one to be removed. Operations are performed at one end called the top."
        ),

        code(
            `Stack (LIFO):

  Push 10 → Push 20 → Push 30

  ┌────┐
  │ 30 │ ← Top
  ├────┤
  │ 20 │
  ├────┤
  │ 10 │
  └────┘

  Pop → returns 30 (last in, first out)
  Pop → returns 20
  Pop → returns 10`,
            "text",
            "Stack LIFO concept"
        ),

        heading("Stack Operations"),

        table(
            ["Operation", "Description", "Time Complexity"],
            [
                ["push(x)", "Add element x to the top", "O(1)"],
                ["pop()", "Remove and return the top element", "O(1)"],
                ["peek() / top()", "Return the top element without removing it", "O(1)"],
                ["isEmpty()", "Check if the stack is empty", "O(1)"],
                ["isFull()", "Check if the stack is full (array implementation)", "O(1)"],
            ]
        ),

        heading("Stack Implementation"),

        table(
            ["Implementation", "How", "Advantage", "Disadvantage"],
            [
                ["Array-based", "Use an array and a top index", "Simple, fast", "Fixed size (overflow possible)"],
                ["Linked List-based", "Use a linked list with head as top", "Dynamic size", "Extra pointer overhead"],
            ]
        ),

        heading("Applications of Stack"),

        list([
            "Function call management (call stack) — stores return addresses and local variables.",
            "Expression evaluation — converting and evaluating infix, postfix and prefix expressions.",
            "Undo/Redo operations in text editors.",
            "Back button in web browsers (page history).",
            "Balanced parentheses checking.",
            "Depth-First Search (DFS) in graphs.",
            "Recursion implementation.",
        ]),

        heading("Infix to Postfix Conversion Using Stack"),

        code(
            `Infix: A + B * C
Postfix: A B C * +

Algorithm:
1. Scan the infix expression left to right.
2. If operand → add to output.
3. If operator → pop operators with higher/equal precedence from stack to output, then push current operator.
4. If '(' → push to stack.
5. If ')' → pop from stack to output until '(' is found.
6. After scanning, pop remaining operators from stack to output.

Example trace for A + B * C:
  A → output: A
  + → stack: [+]
  B → output: A B
  * → * has higher precedence than +, push: stack: [+, *]
  C → output: A B C
  End → pop all: output: A B C * +`,
            "text",
            "Infix to postfix conversion"
        ),

        heading("Queue"),

        definition(
            "Queue",
            "A linear data structure that follows the First In First Out (FIFO) principle. The first element added is the first one to be removed. Elements are added at the rear and removed from the front."
        ),

        code(
            `Queue (FIFO):

  Enqueue 10 → Enqueue 20 → Enqueue 30

  Front                    Rear
    ↓                       ↓
  ┌────┬────┬────┬────┬────┐
  │ 10 │ 20 │ 30 │    │    │
  └────┴────┴────┴────┴────┘

  Dequeue → returns 10 (first in, first out)
  Dequeue → returns 20`,
            "text",
            "Queue FIFO concept"
        ),

        heading("Queue Operations"),

        table(
            ["Operation", "Description", "Time Complexity"],
            [
                ["enqueue(x)", "Add element x to the rear", "O(1)"],
                ["dequeue()", "Remove and return the front element", "O(1)"],
                ["peek() / front()", "Return the front element without removing", "O(1)"],
                ["isEmpty()", "Check if the queue is empty", "O(1)"],
                ["isFull()", "Check if the queue is full (array implementation)", "O(1)"],
            ]
        ),

        heading("Types of Queues"),

        table(
            ["Type", "Description", "Use Case"],
            [
                ["Simple Queue", "Standard FIFO queue", "Print spooling, task scheduling"],
                ["Circular Queue", "Rear wraps around to the beginning when it reaches the end", "Efficient use of fixed-size array"],
                ["Priority Queue", "Elements are dequeued based on priority, not arrival order", "OS process scheduling, Dijkstra's algorithm"],
                ["Deque (Double-Ended Queue)", "Insert and delete at both front and rear", "Sliding window problems, undo-redo"],
            ]
        ),

        heading("Circular Queue"),

        code(
            `Circular Queue (array of size 5):

  After enqueue 10, 20, 30, 40, 50:
  Front=0, Rear=4
  [10 | 20 | 30 | 40 | 50]

  After dequeue (remove 10) and enqueue 60:
  Front=1, Rear=0 (wrapped around!)
  [60 | 20 | 30 | 40 | 50]
         ↑              ↑
       Front          Rear

  Without circular queue, position 0 would be wasted.
  Formula: Rear = (Rear + 1) % SIZE`,
            "text",
            "Circular queue"
        ),

        heading("Applications of Queue"),

        list([
            "CPU scheduling — processes waiting for CPU time.",
            "Print spooling — print jobs queued in order.",
            "Breadth-First Search (BFS) in graphs.",
            "Network packet buffering in routers.",
            "Call centre call holding.",
            "Level-order traversal of trees.",
        ]),

        heading("Stack versus Queue"),

        table(
            ["Aspect", "Stack", "Queue"],
            [
                ["Principle", "LIFO (Last In First Out)", "FIFO (First In First Out)"],
                ["Insert", "Push at top", "Enqueue at rear"],
                ["Delete", "Pop from top", "Dequeue from front"],
                ["Access end", "One end (top)", "Two ends (front and rear)"],
                ["Use case", "Recursion, undo, DFS", "Scheduling, BFS, buffering"],
            ]
        ),

        note(
            "Stacks and queues are fundamental data structures used extensively in algorithm design. DFS uses a stack (or recursion), while BFS uses a queue. Many complex problems can be solved elegantly using these simple structures.",
            "exam",
            "Frequently Asked"
        ),

        keyPoints([
            "A stack follows LIFO: push and pop at the top, all operations O(1).",
            "A queue follows FIFO: enqueue at rear, dequeue from front, all operations O(1).",
            "Stacks are used for function calls, expression evaluation, DFS and undo operations.",
            "Queues are used for CPU scheduling, BFS, print spooling and network buffering.",
            "Circular queues efficiently reuse array space; priority queues dequeue by priority.",
        ]),
    ],

    {
        summary:
            "Master stacks (LIFO) and queues (FIFO), their operations, implementations, types and applications.",
        minutes: 13,
        tags: ["data-structures", "stack", "queue", "lifo", "fifo", "important"],

        mcqs: [
            mcq(
                "A stack follows which principle?",
                ["FIFO", "LIFO", "Random", "Priority"],
                1,
                "A stack follows Last In First Out (LIFO) — the last element added is removed first."
            ),
            mcq(
                "The operation to add an element to a queue is called:",
                ["Push", "Pop", "Enqueue", "Insert"],
                2,
                "Enqueue adds an element to the rear of a queue."
            ),
            mcq(
                "Which data structure is used in BFS (Breadth-First Search)?",
                ["Stack", "Queue", "Array", "Tree"],
                1,
                "BFS uses a queue to explore nodes level by level."
            ),
            mcq(
                "A circular queue solves the problem of:",
                ["Overflow", "Wasted space in array-based queues", "Slow access", "Large memory usage"],
                1,
                "A circular queue wraps around to reuse empty positions at the beginning of the array."
            ),
            mcq(
                "Which data structure is used for function call management?",
                ["Queue", "Linked List", "Stack", "Array"],
                2,
                "The call stack uses a stack to manage function calls, return addresses and local variables."
            ),
            mcq(
                "In a priority queue, elements are dequeued based on:",
                ["Arrival order", "Priority", "Size", "Alphabetical order"],
                1,
                "A priority queue dequeues the element with the highest (or lowest) priority first."
            ),
        ],

        questions: [
            qa(
                "Explain the stack data structure with its operations and applications.",
                "A stack is a linear data structure that follows the Last In First Out (LIFO) principle. All operations are performed at one end called the top. The push operation adds an element to the top in O(1) time. The pop operation removes and returns the top element in O(1) time. The peek operation returns the top element without removing it. isEmpty checks if the stack is empty. Stacks have many applications: the call stack manages function calls by storing return addresses and local variables; expression evaluation uses stacks to convert and evaluate infix, postfix and prefix expressions; text editors use stacks for undo operations; web browsers use stacks for the back button history; and depth-first search (DFS) in graphs uses a stack to explore nodes.",
                5
            ),
            qa(
                "Explain the queue data structure and its types.",
                "A queue is a linear data structure that follows the First In First Out (FIFO) principle. Elements are added at the rear (enqueue) and removed from the front (dequeue), both in O(1) time. A simple queue is the standard FIFO structure. A circular queue connects the rear back to the beginning of the array when it reaches the end, using the formula rear = (rear + 1) % SIZE, which efficiently reuses empty positions that would otherwise be wasted. A priority queue dequeues elements based on their priority rather than arrival order, used in OS scheduling and Dijkstra's algorithm. A deque (double-ended queue) allows insertion and deletion at both the front and rear ends, useful for sliding window problems.",
                5
            ),
            qa(
                "Compare stack and queue with examples of their applications.",
                "A stack follows LIFO where the last element added is the first removed, with push and pop operations at the top. A queue follows FIFO where the first element added is the first removed, with enqueue at the rear and dequeue at the front. Stacks are used for recursion and function call management (the call stack), expression evaluation (converting infix to postfix), undo operations in editors, the back button in browsers and DFS in graphs. Queues are used for CPU process scheduling (ready queue), print spooling (print jobs in order), BFS in graphs (exploring level by level), network packet buffering in routers and level-order traversal of trees. The fundamental difference is that stacks reverse the order of processing while queues preserve it.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — Trees and Graphs
========================================================= */

const treesAndGraphs = createTopic(
    "trees-and-graphs",
    "Trees and Graphs",

    [
        heading("Trees"),

        definition(
            "Tree",
            "A non-linear, hierarchical data structure consisting of nodes connected by edges. A tree has a root node, and every node has zero or more child nodes. There is exactly one path between any two nodes."
        ),

        heading("Tree Terminology"),

        table(
            ["Term", "Definition"],
            [
                ["Root", "The topmost node with no parent"],
                ["Parent", "A node that has one or more children"],
                ["Child", "A node directly below another node"],
                ["Leaf (External node)", "A node with no children"],
                ["Internal node", "A node with at least one child"],
                ["Sibling", "Nodes that share the same parent"],
                ["Depth", "Number of edges from the root to a node"],
                ["Height", "Number of edges on the longest path from a node to a leaf"],
                ["Level", "Depth + 1 (root is at level 1)"],
                ["Subtree", "A node and all its descendants"],
            ]
        ),

        code(
            `Tree Example:

           A          ← Root (Level 1, Depth 0)
         / | \\
        B  C  D       ← Level 2
       / \\    |
      E   F   G       ← Level 3
     /
    H                 ← Level 4 (Leaf)

  Height of tree = 3 (A → B → E → H)
  Depth of H = 3
  Leaves: H, F, C, G
  Internal nodes: A, B, D, E
  Siblings: B, C, D (children of A)`,
            "text",
            "Tree terminology example"
        ),

        heading("Binary Tree"),

        definition(
            "Binary Tree",
            "A tree in which each node has at most two children, referred to as the left child and the right child."
        ),

        table(
            ["Type", "Description"],
            [
                ["Full Binary Tree", "Every node has 0 or 2 children"],
                ["Complete Binary Tree", "All levels are fully filled except possibly the last, which is filled left to right"],
                ["Perfect Binary Tree", "All internal nodes have 2 children and all leaves are at the same level"],
                ["Balanced Binary Tree", "The height difference between left and right subtrees of any node is at most 1"],
            ]
        ),

        heading("Binary Search Tree (BST)"),

        definition(
            "Binary Search Tree",
            "A binary tree where for every node: all values in the left subtree are less than the node's value, and all values in the right subtree are greater. This property enables efficient searching."
        ),

        code(
            `Binary Search Tree:

          50
         /  \\
       30    70
      / \\   / \\
    20  40 60  80

  Properties:
  - Left subtree of 50: {20, 30, 40} — all < 50 ✓
  - Right subtree of 50: {60, 70, 80} — all > 50 ✓
  - Search for 40: 50 → left(30) → right(40) → Found! (3 steps)
  - Search for 40 in unsorted list: up to n steps`,
            "text",
            "Binary Search Tree"
        ),

        heading("Tree Traversals"),

        table(
            ["Traversal", "Order", "Result for BST above", "Use Case"],
            [
                ["Inorder", "Left → Root → Right", "20 30 40 50 60 70 80 (sorted!)", "Sorted output of BST"],
                ["Preorder", "Root → Left → Right", "50 30 20 40 70 60 80", "Copy/serialise tree"],
                ["Postorder", "Left → Right → Root", "20 40 30 60 80 70 50", "Delete tree, expression evaluation"],
                ["Level-order", "Level by level (uses queue)", "50 30 70 20 40 60 80", "BFS, shortest path in tree"],
            ]
        ),

        heading("BST Time Complexity"),

        table(
            ["Operation", "Average Case", "Worst Case (Skewed)"],
            [
                ["Search", "O(log n)", "O(n)"],
                ["Insert", "O(log n)", "O(n)"],
                ["Delete", "O(log n)", "O(n)"],
            ]
        ),

        note(
            "A skewed BST (where every node has only one child) degenerates into a linked list with O(n) operations. Self-balancing trees like AVL trees and Red-Black trees guarantee O(log n) by automatically rebalancing after insertions and deletions.",
            "tip",
            "Balanced Trees"
        ),

        heading("Graphs"),

        definition(
            "Graph",
            "A non-linear data structure consisting of vertices (nodes) and edges (connections between nodes). Graphs model relationships between objects and are used in social networks, maps, the Internet and many other domains."
        ),

        heading("Types of Graphs"),

        table(
            ["Type", "Description", "Example"],
            [
                ["Undirected", "Edges have no direction (A—B means A to B and B to A)", "Friendship network"],
                ["Directed (Digraph)", "Edges have direction (A→B does not imply B→A)", "Web page links, Twitter follows"],
                ["Weighted", "Edges have associated costs/weights", "Road maps (distance), network (latency)"],
                ["Unweighted", "All edges are equal", "Social connections"],
                ["Cyclic", "Contains at least one cycle", "Most real-world networks"],
                ["Acyclic", "Contains no cycles", "Family tree, DAG (Directed Acyclic Graph)"],
            ]
        ),

        heading("Graph Representation"),

        table(
            ["Method", "Description", "Space", "Edge Lookup", "Best For"],
            [
                ["Adjacency Matrix", "2D array where matrix[i][j] = 1 if edge exists", "O(V²)", "O(1)", "Dense graphs"],
                ["Adjacency List", "Array of lists; each vertex stores its neighbours", "O(V + E)", "O(degree)", "Sparse graphs"],
            ]
        ),

        code(
            `Graph: A — B — C
              |   |
              D — E

  Adjacency Matrix:
      A  B  C  D  E
  A [ 0  1  0  1  0 ]
  B [ 1  0  1  1  0 ]
  C [ 0  1  0  0  1 ]
  D [ 1  1  0  0  1 ]
  E [ 0  0  1  1  0 ]

  Adjacency List:
  A → [B, D]
  B → [A, C, D]
  C → [B, E]
  D → [A, B, E]
  E → [C, D]`,
            "text",
            "Graph representations"
        ),

        heading("Graph Traversal Algorithms"),

        table(
            ["Algorithm", "Data Structure", "Strategy", "Use Case"],
            [
                ["BFS (Breadth-First Search)", "Queue", "Explore level by level", "Shortest path (unweighted), level-order"],
                ["DFS (Depth-First Search)", "Stack / Recursion", "Explore as deep as possible first", "Cycle detection, topological sort, maze solving"],
            ]
        ),

        keyPoints([
            "A tree is a hierarchical structure with a root, parent-child relationships and no cycles.",
            "A BST enables O(log n) search, insert and delete by maintaining sorted order.",
            "Tree traversals: inorder (sorted for BST), preorder, postorder and level-order.",
            "A graph consists of vertices and edges; it can be directed/undirected and weighted/unweighted.",
            "BFS uses a queue for level-by-level exploration; DFS uses a stack for deep exploration.",
        ]),
    ],

    {
        summary:
            "Learn trees (binary tree, BST, traversals) and graphs (types, representations, BFS and DFS).",
        minutes: 14,
        tags: ["data-structures", "trees", "bst", "graphs", "bfs", "dfs", "important"],

        mcqs: [
            mcq(
                "In a Binary Search Tree, the left subtree contains values that are:",
                ["Greater than the root", "Less than the root", "Equal to the root", "Random"],
                1,
                "In a BST, all values in the left subtree are less than the node's value."
            ),
            mcq(
                "Inorder traversal of a BST produces:",
                ["Random order", "Reverse sorted order", "Sorted (ascending) order", "Level order"],
                2,
                "Inorder traversal (Left → Root → Right) of a BST produces elements in sorted ascending order."
            ),
            mcq(
                "A graph with edges that have direction is called:",
                ["Undirected graph", "Weighted graph", "Directed graph (digraph)", "Cyclic graph"],
                2,
                "A directed graph (digraph) has edges with a specific direction from one vertex to another."
            ),
            mcq(
                "BFS uses which data structure?",
                ["Stack", "Queue", "Array", "Tree"],
                1,
                "BFS uses a queue to explore vertices level by level."
            ),
            mcq(
                "An adjacency matrix for a graph with V vertices requires space:",
                ["O(V)", "O(V + E)", "O(V²)", "O(E²)"],
                2,
                "An adjacency matrix is a V × V 2D array, requiring O(V²) space."
            ),
            mcq(
                "A leaf node in a tree is a node with:",
                ["Two children", "One child", "No children", "The maximum value"],
                2,
                "A leaf node (external node) has no children."
            ),
        ],

        questions: [
            qa(
                "Explain Binary Search Tree (BST) and its time complexity.",
                "A Binary Search Tree is a binary tree where for every node, all values in the left subtree are less than the node's value and all values in the right subtree are greater. This ordering property enables efficient operations. To search for a value, start at the root and compare: if the target is less, go left; if greater, go right; if equal, found. This eliminates half the remaining nodes at each step, giving O(log n) average time for search, insert and delete. However, in the worst case when the tree becomes skewed (every node has only one child, resembling a linked list), all operations degrade to O(n). Self-balancing trees like AVL trees and Red-Black trees prevent this by automatically rebalancing after modifications, guaranteeing O(log n) worst-case performance.",
                5
            ),
            qa(
                "Explain the four tree traversal methods with an example.",
                "Given a BST with root 50, left child 30 (with children 20 and 40) and right child 70 (with children 60 and 80). Inorder traversal visits Left → Root → Right, producing 20 30 40 50 60 70 80, which is the sorted order for a BST. Preorder traversal visits Root → Left → Right, producing 50 30 20 40 70 60 80, useful for copying or serialising a tree. Postorder traversal visits Left → Right → Root, producing 20 40 30 60 80 70 50, useful for deleting a tree (children before parent) and expression evaluation. Level-order traversal visits nodes level by level using a queue, producing 50 30 70 20 40 60 80, which is equivalent to BFS.",
                5
            ),
            qa(
                "Compare BFS and DFS for graph traversal.",
                "BFS (Breadth-First Search) uses a queue and explores the graph level by level, visiting all neighbours of the current vertex before moving to the next level. It finds the shortest path in unweighted graphs and is used for level-order traversal and finding connected components. DFS (Depth-First Search) uses a stack (or recursion) and explores as deep as possible along each branch before backtracking. It is used for cycle detection, topological sorting, maze solving and finding connected components. BFS guarantees the shortest path in unweighted graphs but may use more memory for wide graphs. DFS uses less memory for deep graphs but does not guarantee the shortest path. Both have O(V + E) time complexity where V is vertices and E is edges.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 5 — Sorting and Searching Algorithms
========================================================= */

const sortingAndSearchingAlgorithms = createTopic(
    "sorting-and-searching-algorithms",
    "Sorting and Searching Algorithms",

    [
        heading("Sorting Algorithms"),

        definition(
            "Sorting",
            "The process of arranging elements in a specific order (ascending or descending). Sorting is one of the most fundamental operations in computer science and is a prerequisite for efficient searching and many other algorithms."
        ),

        heading("1. Bubble Sort"),

        code(
            `Algorithm: Repeatedly compare adjacent elements and swap if out of order.

  Pass 1: [5, 3, 8, 1, 2]
          [3, 5, 8, 1, 2]  (5>3, swap)
          [3, 5, 8, 1, 2]  (5<8, no swap)
          [3, 5, 1, 8, 2]  (8>1, swap)
          [3, 5, 1, 2, 8]  (8>2, swap)  ← 8 bubbled to end

  Pass 2: [3, 1, 2, 5, 8]  ← 5 bubbled to position
  Pass 3: [1, 2, 3, 5, 8]  ← sorted!

  Time: O(n²) worst/average, O(n) best (already sorted with flag)
  Space: O(1)
  Stable: Yes`,
            "text",
            "Bubble sort"
        ),

        heading("2. Selection Sort"),

        code(
            `Algorithm: Find the minimum element and place it at the beginning. Repeat.

  [5, 3, 8, 1, 2]
  Min=1, swap with 5: [1, 3, 8, 5, 2]
  Min=2, swap with 3: [1, 2, 8, 5, 3]
  Min=3, swap with 8: [1, 2, 3, 5, 8]
  Min=5, already in place: [1, 2, 3, 5, 8]

  Time: O(n²) all cases
  Space: O(1)
  Stable: No`,
            "text",
            "Selection sort"
        ),

        heading("3. Insertion Sort"),

        code(
            `Algorithm: Build sorted portion one element at a time by inserting each element into its correct position.

  [5, 3, 8, 1, 2]
  [5 | 3, 8, 1, 2]  → insert 3: [3, 5 | 8, 1, 2]
  [3, 5 | 8, 1, 2]  → insert 8: [3, 5, 8 | 1, 2]
  [3, 5, 8 | 1, 2]  → insert 1: [1, 3, 5, 8 | 2]
  [1, 3, 5, 8 | 2]  → insert 2: [1, 2, 3, 5, 8]

  Time: O(n²) worst/average, O(n) best (already sorted)
  Space: O(1)
  Stable: Yes
  Best for: Small or nearly sorted arrays`,
            "text",
            "Insertion sort"
        ),

        heading("4. Merge Sort"),

        code(
            `Algorithm: Divide array in half, recursively sort each half, merge sorted halves.

  [5, 3, 8, 1, 2, 7, 4, 6]
  Divide: [5, 3, 8, 1] | [2, 7, 4, 6]
  Divide: [5, 3] [8, 1] | [2, 7] [4, 6]
  Divide: [5][3] [8][1] | [2][7] [4][6]
  Merge:  [3, 5] [1, 8] | [2, 7] [4, 6]
  Merge:  [1, 3, 5, 8]  | [2, 4, 6, 7]
  Merge:  [1, 2, 3, 4, 5, 6, 7, 8]

  Time: O(n log n) all cases
  Space: O(n)
  Stable: Yes`,
            "text",
            "Merge sort"
        ),

        heading("5. Quick Sort"),

        code(
            `Algorithm: Choose a pivot, partition array into elements < pivot and > pivot, recursively sort.

  [5, 3, 8, 1, 2, 7, 4, 6]  Pivot = 5
  Partition: [3, 1, 2, 4] | 5 | [8, 7, 6]
  Sort left: [1, 2, 3, 4]
  Sort right: [6, 7, 8]
  Result: [1, 2, 3, 4, 5, 6, 7, 8]

  Time: O(n log n) average, O(n²) worst (bad pivot)
  Space: O(log n)
  Stable: No
  Fastest in practice for most inputs`,
            "text",
            "Quick sort"
        ),

        heading("Sorting Algorithm Comparison"),

        table(
            ["Algorithm", "Best", "Average", "Worst", "Space", "Stable?"],
            [
                ["Bubble Sort", "O(n)", "O(n²)", "O(n²)", "O(1)", "Yes"],
                ["Selection Sort", "O(n²)", "O(n²)", "O(n²)", "O(1)", "No"],
                ["Insertion Sort", "O(n)", "O(n²)", "O(n²)", "O(1)", "Yes"],
                ["Merge Sort", "O(n log n)", "O(n log n)", "O(n log n)", "O(n)", "Yes"],
                ["Quick Sort", "O(n log n)", "O(n log n)", "O(n²)", "O(log n)", "No"],
            ]
        ),

        heading("Searching Algorithms"),

        heading("1. Linear Search"),

        code(
            `Algorithm: Check each element one by one from start to end.

  Array: [5, 3, 8, 1, 2]  Search for 8
  Check 5 → No
  Check 3 → No
  Check 8 → Yes! Found at index 2

  Time: O(n) worst/average, O(1) best
  Works on: Sorted or unsorted arrays`,
            "text",
            "Linear search"
        ),

        heading("2. Binary Search"),

        definition(
            "Binary Search",
            "An efficient search algorithm that works on sorted arrays. It repeatedly divides the search interval in half by comparing the target with the middle element."
        ),

        code(
            `Algorithm: Compare target with middle element. If equal, found.
  If target < middle, search left half. If target > middle, search right half.

  Array: [1, 3, 5, 7, 9, 11, 13, 15]  Search for 7
  Step 1: mid = 7 (index 3) → 7 == 7 → Found!

  Array: [1, 3, 5, 7, 9, 11, 13, 15]  Search for 11
  Step 1: mid = 7 (index 3) → 11 > 7 → search right [9, 11, 13, 15]
  Step 2: mid = 11 (index 5) → 11 == 11 → Found!

  Time: O(log n) worst/average, O(1) best
  Requires: Sorted array`,
            "text",
            "Binary search"
        ),

        heading("Searching Comparison"),

        table(
            ["Algorithm", "Best", "Average", "Worst", "Requires Sorted?"],
            [
                ["Linear Search", "O(1)", "O(n)", "O(n)", "No"],
                ["Binary Search", "O(1)", "O(log n)", "O(log n)", "Yes"],
            ]
        ),

        note(
            "Binary search is dramatically faster than linear search for large datasets. Searching 1 billion elements takes at most ~30 comparisons with binary search versus up to 1 billion with linear search. However, binary search requires the data to be sorted first.",
            "exam",
            "Frequently Asked"
        ),

        keyPoints([
            "Bubble, selection and insertion sort are O(n²) — simple but slow for large data.",
            "Merge sort guarantees O(n log n) in all cases but uses O(n) extra space.",
            "Quick sort is O(n log n) average and fastest in practice but O(n²) worst case.",
            "Linear search is O(n) and works on any array; binary search is O(log n) but requires sorted data.",
            "Stable sorting algorithms preserve the relative order of equal elements.",
        ]),
    ],

    {
        summary:
            "Master sorting algorithms (bubble, selection, insertion, merge, quick) and searching algorithms (linear, binary) with their complexities.",
        minutes: 13,
        tags: ["data-structures", "sorting", "searching", "binary-search", "merge-sort", "quick-sort", "important"],

        mcqs: [
            mcq(
                "The worst-case time complexity of Quick Sort is:",
                ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
                2,
                "Quick sort's worst case is O(n²) when the pivot is always the smallest or largest element."
            ),
            mcq(
                "Merge Sort has a time complexity of:",
                ["O(n) best, O(n²) worst", "O(n log n) in all cases", "O(n²) in all cases", "O(log n)"],
                1,
                "Merge sort guarantees O(n log n) time complexity in best, average and worst cases."
            ),
            mcq(
                "Binary search requires the array to be:",
                ["Unsorted", "Sorted", "Linked", "Small"],
                1,
                "Binary search only works on sorted arrays because it relies on comparing with the middle element."
            ),
            mcq(
                "The time complexity of binary search is:",
                ["O(n)", "O(n²)", "O(log n)", "O(1)"],
                2,
                "Binary search halves the search space each step, giving O(log n) time complexity."
            ),
            mcq(
                "Which sorting algorithm is stable and has O(n) best-case time?",
                ["Selection Sort", "Quick Sort", "Insertion Sort", "Merge Sort"],
                2,
                "Insertion sort is stable and achieves O(n) when the array is already sorted."
            ),
            mcq(
                "A stable sorting algorithm:",
                ["Uses less memory", "Preserves the relative order of equal elements", "Always runs in O(n log n)", "Works only on sorted data"],
                1,
                "A stable sort maintains the original relative order of elements with equal keys."
            ),
        ],

        questions: [
            qa(
                "Compare merge sort and quick sort.",
                "Merge sort divides the array into two halves, recursively sorts each half and merges them. It guarantees O(n log n) time complexity in all cases (best, average and worst) because the division is always in half and merging takes O(n). However, it requires O(n) extra space for the merge operation and is stable. Quick sort chooses a pivot element, partitions the array into elements less than and greater than the pivot, and recursively sorts the partitions. It has O(n log n) average time complexity and is the fastest in practice due to good cache performance and low constant factors. However, its worst case is O(n²) when the pivot is poorly chosen (e.g., always the smallest element), and it is not stable. Quick sort uses O(log n) stack space. In practice, quick sort is preferred for general-purpose sorting, while merge sort is used when guaranteed O(n log n) and stability are required.",
                5
            ),
            qa(
                "Explain binary search with an example and compare it with linear search.",
                "Binary search works on sorted arrays by repeatedly dividing the search interval in half. For example, to search for 11 in [1, 3, 5, 7, 9, 11, 13, 15]: compare 11 with the middle element 7, since 11 > 7 search the right half [9, 11, 13, 15], compare 11 with middle element 11, found at index 5. This took only 2 comparisons. Binary search has O(log n) time complexity because it eliminates half the remaining elements each step. Linear search checks each element sequentially from the beginning, taking O(n) time in the worst case. For 1 billion elements, binary search needs at most about 30 comparisons while linear search could need 1 billion. However, binary search requires the array to be sorted first, while linear search works on any array.",
                5
            ),
            qa(
                "Explain bubble sort and insertion sort. When is insertion sort preferred?",
                "Bubble sort repeatedly passes through the array, comparing adjacent elements and swapping them if they are in the wrong order. After each pass, the largest unsorted element 'bubbles' to its correct position at the end. It takes O(n²) time in the worst and average cases, and O(n) in the best case (already sorted) if a flag is used to detect no swaps. It is stable and uses O(1) space. Insertion sort builds the sorted portion one element at a time by taking each element and inserting it into its correct position among the already sorted elements, shifting larger elements to the right. It also takes O(n²) worst and average case but O(n) best case when the array is already sorted. Insertion sort is preferred for small arrays (typically fewer than 10-20 elements) and nearly sorted arrays because it is adaptive — its performance improves significantly when the input is partially sorted. Many efficient sorting algorithms like Timsort use insertion sort as a subroutine for small subarrays.",
                5
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit2Topics = [
    introToDataStructuresAndArrays,
    linkedLists,
    stacksAndQueues,
    treesAndGraphs,
    sortingAndSearchingAlgorithms,
];