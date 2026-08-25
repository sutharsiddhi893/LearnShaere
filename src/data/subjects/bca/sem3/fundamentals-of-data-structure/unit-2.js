/* =========================================================
   BCA • SEM 3 • Fundamentals of Data Structure
   UNIT 2 — Linked Lists, Trees, Graphs, Searching and Sorting
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
   TOPIC 1 — Linked List
========================================================= */

const linkedList = createTopic(
    "linked-list",
    "Linked List",

    [
        definition(
            "Linked List",
            "A linked list is a linear data structure in which elements are stored in nodes, and each node contains data and a pointer to the next node. Nodes are not stored in contiguous memory."
        ),

        heading("Structure of a Node"),

        code(
            `struct Node {
    int data;
    struct Node *next;
};`,
            "c",
            "Node structure"
        ),

        heading("Types of Linked Lists"),

        table(
            ["Type", "Description"],
            [
                ["Singly Linked List", "Each node points to the next node only"],
                ["Doubly Linked List", "Each node has pointers to both next and previous"],
                ["Circular Linked List", "Last node points back to the first node"],
                ["Circular Doubly Linked List", "Doubly linked with circular connection"],
            ]
        ),

        heading("Singly Linked List Operations"),

        heading("Insertion at Beginning"),

        code(
            `void insertBegin(struct Node **head, int val) {
    struct Node *newNode = malloc(sizeof(struct Node),;
    newNode->data = val;
    newNode->next = *head;
    *head = newNode;
}`,
            "c",
            "Insert at beginning"
        ),

        heading("Insertion at End"),

        code(
            `void insertEnd(struct Node **head, int val) {
    struct Node *newNode = malloc(sizeof(struct Node),;
    newNode->data = val;
    newNode->next = NULL;
    
    if (*head == NULL) {
        *head = newNode;
        return;
    }
    
    struct Node *temp = *head;
    while (temp->next != NULL)
        temp = temp->next;
    temp->next = newNode;
}`,
            "c",
            "Insert at end"
        ),

        heading("Deletion"),

        code(
            `void deleteNode(struct Node **head, int val) {
    struct Node *temp = *head, *prev = NULL;
    
    if (temp != NULL && temp->data == val) {
        *head = temp->next;
        free(temp);
        return;
    }
    
    while (temp != NULL && temp->data != val) {
        prev = temp;
        temp = temp->next;
    }
    
    if (temp == NULL) return;
    prev->next = temp->next;
    free(temp);
}`,
            "c",
            "Delete a node"
        ),

        heading("Traversal"),

        code(
            `void traverse(struct Node *head) {
    struct Node *temp = head;
    while (temp != NULL) {
        printf("%d -> ", temp->data);
        temp = temp->next;
    }
    printf("NULL\\n");
}`,
            "c",
            "Traverse linked list"
        ),

        heading("Doubly Linked List Node"),

        code(
            `struct Node {
    int data;
    struct Node *prev;
    struct Node *next;
};`,
            "c",
            "Doubly linked list node"
        ),

        heading("Array vs Linked List"),

        table(
            ["Basis", "Array", "Linked List"],
            [
                ["Memory", "Contiguous", "Non-contiguous"],
                ["Size", "Fixed", "Dynamic"],
                ["Access", "O(1) random access", "O(n) sequential access"],
                ["Insertion/Deletion", "O(n) due to shifting", "O(1) with pointer"],
                ["Memory overhead", "Low", "Extra memory for pointers"],
                ["Cache friendly", "Yes", "No"],
            ]
        ),

        heading("Advantages and Disadvantages"),

        table(
            ["Advantages", "Disadvantages"],
            [
                ["Dynamic size", "Extra memory for pointers"],
                ["Efficient insertion/deletion", "No random access"],
                ["No memory wastage", "Slower traversal"],
                ["Easy to grow and shrink", "Complex implementation"],
            ]
        ),

        heading("Applications"),

        list([
            "Implementation of stacks and queues.",
            "Dynamic memory allocation.",
            "Undo functionality in editors.",
            "Music/video playlists (doubly linked).",
            "Browser history navigation.",
            "Graph representation using adjacency lists.",
            "Hash tables with chaining.",
        ]),

        note(
            "Linked lists provide dynamic size and efficient insertion/deletion but sacrifice random access. Use them when the number of elements is unpredictable or frequent modifications are needed.",
            "tip",
            "When to Use"
        ),

        keyPoints([
            "Linked list stores nodes with data and pointer.",
            "Types: singly, doubly, circular linked lists.",
            "Insertion/deletion is O(1) at known position.",
            "Access is O(n) as it requires traversal.",
            "Used to implement dynamic data structures.",
        ]),
    ],

    {
        summary:
            "Learn linked lists, their types, operations, comparison with arrays and real-world applications.",
        minutes: 13,
        tags: ["linked-list", "singly", "doubly", "circular", "important"],

        mcqs: [
            mcq(
                "In a singly linked list, each node contains:",
                ["Data only", "Data and pointer to next", "Data and prev pointer", "Two pointers"],
                1,
                "Singly linked list node has data and next pointer."
            ),
            mcq(
                "Access time in linked list is:",
                ["O(1)", "O(n)", "O(log n)", "O(n²)"],
                1,
                "Access requires traversal, so O(n)."
            ),
            mcq(
                "In doubly linked list, each node has:",
                ["1 pointer", "2 pointers", "3 pointers", "No pointer"],
                1,
                "Doubly linked list nodes have next and prev pointers."
            ),
            mcq(
                "Which is dynamic in size?",
                ["Array", "Linked List", "Both", "None"],
                1,
                "Linked list can grow and shrink dynamically."
            ),
        ],

        questions: [
            qa(
                "What is a linked list? Explain its types.",
                "A linked list is a linear data structure where elements called nodes are stored non-contiguously. Each node contains data and one or more pointers linking it to other nodes. Types of linked lists include: singly linked list (each node points to next), doubly linked list (each node has next and previous pointers), circular linked list (last node points back to first), and circular doubly linked list (doubly linked with circular connection). Linked lists allow dynamic size and efficient insertion/deletion.",
                4
            ),
            qa(
                "Differentiate between array and linked list.",
                "Array stores elements in contiguous memory with fixed size, while linked list stores elements in non-contiguous memory with dynamic size. Array allows O(1) random access using indices, but linked list requires O(n) sequential access. Insertion and deletion in array take O(n) due to shifting, whereas in linked list they take O(1) at a known position. Array has low memory overhead but linked list needs extra memory for pointers. Arrays are cache-friendly but linked lists are not.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — Trees
========================================================= */

const trees = createTopic(
    "trees",
    "Trees",

    [
        definition(
            "Tree",
            "A tree is a non-linear hierarchical data structure consisting of nodes connected by edges, with one node designated as the root and no cycles."
        ),

        heading("Tree Terminology"),

        table(
            ["Term", "Description"],
            [
                ["Root", "Topmost node with no parent"],
                ["Parent", "Node with child nodes"],
                ["Child", "Node connected below another node"],
                ["Leaf", "Node with no children"],
                ["Sibling", "Nodes with the same parent"],
                ["Edge", "Connection between two nodes"],
                ["Path", "Sequence of nodes from one to another"],
                ["Depth", "Length of path from root to node"],
                ["Height", "Longest path from node to a leaf"],
                ["Level", "Depth + 1 of a node"],
                ["Degree", "Number of children of a node"],
            ]
        ),

        heading("Types of Trees"),

        list([
            "General Tree — Node can have any number of children.",
            "Binary Tree — Each node has at most 2 children.",
            "Binary Search Tree (BST) — Left < Root < Right.",
            "AVL Tree — Self-balancing binary search tree.",
            "Heap — Complete binary tree with heap property.",
            "B-Tree — Multi-way search tree used in databases.",
            "Trie — Tree for storing strings.",
        ]),

        heading("Binary Tree"),

        definition(
            "Binary Tree",
            "A binary tree is a tree data structure in which each node has at most two children, referred to as left child and right child."
        ),

        heading("Types of Binary Trees"),

        table(
            ["Type", "Description"],
            [
                ["Full Binary Tree", "Every node has 0 or 2 children"],
                ["Complete Binary Tree", "All levels filled except possibly last, left-aligned"],
                ["Perfect Binary Tree", "All internal nodes have 2 children and all leaves at same level"],
                ["Skewed Binary Tree", "All nodes have only one child (left or right)"],
                ["Balanced Binary Tree", "Height difference between subtrees ≤ 1"],
            ]
        ),

        heading("Binary Tree Node"),

        code(
            `struct Node {
    int data;
    struct Node *left;
    struct Node *right;
};

struct Node* createNode(int val) {
    struct Node *node = malloc(sizeof(struct Node),;
    node->data = val;
    node->left = node->right = NULL;
    return node;
}`,
            "c",
            "Binary tree node"
        ),

        heading("Binary Search Tree (BST)"),

        definition(
            "BST",
            "A binary search tree is a binary tree in which for each node, all elements in the left subtree are smaller and all elements in the right subtree are greater."
        ),

        code(
            `struct Node* insert(struct Node *root, int val) {
    if (root == NULL)
        return createNode(val);
    
    if (val < root->data)
        root->left = insert(root->left, val);
    else if (val > root->data)
        root->right = insert(root->right, val);
    
    return root;
}

struct Node* search(struct Node *root, int val) {
    if (root == NULL || root->data == val)
        return root;
    
    if (val < root->data)
        return search(root->left, val);
    return search(root->right, val);
}`,
            "c",
            "BST insert and search"
        ),

        heading("Tree Traversals"),

        table(
            ["Traversal", "Order", "Use"],
            [
                ["Inorder", "Left → Root → Right", "Sorted output in BST"],
                ["Preorder", "Root → Left → Right", "Prefix expression, copy tree"],
                ["Postorder", "Left → Right → Root", "Postfix expression, delete tree"],
                ["Level Order", "Level by level (BFS)", "Print tree by levels"],
            ]
        ),

        code(
            `void inorder(struct Node *root) {
    if (root == NULL) return;
    inorder(root->left);
    printf("%d ", root->data);
    inorder(root->right);
}

void preorder(struct Node *root) {
    if (root == NULL) return;
    printf("%d ", root->data);
    preorder(root->left);
    preorder(root->right);
}

void postorder(struct Node *root) {
    if (root == NULL) return;
    postorder(root->left);
    postorder(root->right);
    printf("%d ", root->data);
}`,
            "c",
            "Tree traversal functions"
        ),

        heading("Traversal Example"),

        text(
            "For the tree with root 1, left child 2, right child 3, and 2 having children 4 and 5:"
        ),

        list([
            "Inorder: 4 2 5 1 3",
            "Preorder: 1 2 4 5 3",
            "Postorder: 4 5 2 3 1",
            "Level Order: 1 2 3 4 5",
        ]),

        heading("Applications of Trees"),

        list([
            "File system directory structure.",
            "Database indexing (B-Trees, B+ Trees).",
            "Expression parsing (expression trees).",
            "Decision making (decision trees).",
            "Routing algorithms in networks.",
            "Compilers (syntax trees).",
            "Auto-complete features (Trie).",
            "Priority queues (Heaps).",
        ]),

        note(
            "Inorder traversal of a Binary Search Tree always gives elements in sorted order. This property is useful for sorting and range queries.",
            "tip",
            "BST Property"
        ),

        keyPoints([
            "Tree is a hierarchical non-linear structure.",
            "Binary tree has at most 2 children per node.",
            "BST maintains ordered structure for fast search.",
            "Three main traversals: inorder, preorder, postorder.",
            "Trees are used in databases, compilers and file systems.",
        ]),
    ],

    {
        summary:
            "Learn trees, terminology, binary trees, BST, traversal techniques and real-world applications.",
        minutes: 14,
        tags: ["tree", "binary-tree", "bst", "traversal", "important"],

        mcqs: [
            mcq(
                "Which traversal gives sorted order in BST?",
                ["Preorder", "Inorder", "Postorder", "Level Order"],
                1,
                "Inorder traversal of BST gives sorted output."
            ),
            mcq(
                "Maximum children in binary tree:",
                ["1", "2", "3", "Unlimited"],
                1,
                "Binary tree allows at most 2 children."
            ),
            mcq(
                "In BST, left child is:",
                ["Greater than parent", "Smaller than parent", "Equal to parent", "Null"],
                1,
                "In BST, left child is smaller than parent."
            ),
            mcq(
                "Which traversal is used to delete a tree?",
                ["Preorder", "Inorder", "Postorder", "Level Order"],
                2,
                "Postorder deletes children before parent."
            ),
        ],

        questions: [
            qa(
                "Explain tree terminology.",
                "Tree terminology includes: Root (topmost node), Parent (node with children), Child (node below parent), Leaf (node with no children), Sibling (nodes with same parent), Edge (connection between nodes), Path (sequence of nodes), Depth (distance from root), Height (longest path to leaf), Level (depth + 1) and Degree (number of children of a node). These terms describe the structure and relationships in a tree.",
                4
            ),
            qa(
                "Explain tree traversal techniques with example.",
                "Tree traversal is the process of visiting each node in a tree. Three main depth-first traversals are: Inorder (Left-Root-Right), Preorder (Root-Left-Right) and Postorder (Left-Right-Root). Level Order traversal visits nodes level by level using BFS. For a tree with root 1, left child 2 (with children 4 and 5) and right child 3: Inorder gives 4 2 5 1 3, Preorder gives 1 2 4 5 3, Postorder gives 4 5 2 3 1 and Level Order gives 1 2 3 4 5. Inorder is used for sorted output in BST, Preorder for copying trees and Postorder for deletion.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — Graphs
========================================================= */

const graphs = createTopic(
    "graphs",
    "Graphs",

    [
        definition(
            "Graph",
            "A graph is a non-linear data structure consisting of a set of vertices (nodes) and a set of edges (connections) between them."
        ),

        heading("Graph Terminology"),

        table(
            ["Term", "Description"],
            [
                ["Vertex", "Node in the graph"],
                ["Edge", "Connection between two vertices"],
                ["Adjacent", "Two vertices connected by an edge"],
                ["Degree", "Number of edges connected to a vertex"],
                ["Path", "Sequence of vertices connected by edges"],
                ["Cycle", "Path that starts and ends at same vertex"],
                ["Connected Graph", "Path exists between every pair of vertices"],
                ["Weight", "Value assigned to an edge"],
            ]
        ),

        heading("Types of Graphs"),

        table(
            ["Type", "Description"],
            [
                ["Directed Graph (Digraph)", "Edges have direction"],
                ["Undirected Graph", "Edges have no direction"],
                ["Weighted Graph", "Edges have weights/costs"],
                ["Unweighted Graph", "Edges have no weights"],
                ["Cyclic Graph", "Contains at least one cycle"],
                ["Acyclic Graph", "Contains no cycles"],
                ["Complete Graph", "Every pair of vertices is connected"],
                ["Sparse Graph", "Few edges"],
                ["Dense Graph", "Many edges"],
            ]
        ),

        heading("Graph Representation"),

        heading("1. Adjacency Matrix"),

        text(
            "A 2D array of size V × V where matrix[i][j] = 1 if edge exists between vertex i and j, else 0. For weighted graphs, store the weight instead."
        ),

        code(
            `int graph[5][5] = {
    {0, 1, 1, 0, 0},
    {1, 0, 1, 1, 0},
    {1, 1, 0, 0, 1},
    {0, 1, 0, 0, 1},
    {0, 0, 1, 1, 0}
};`,
            "c",
            "Adjacency matrix"
        ),

        heading("2. Adjacency List"),

        text(
            "Each vertex maintains a list of its adjacent vertices. It saves space for sparse graphs."
        ),

        code(
            `struct Node {
    int vertex;
    struct Node *next;
};

struct Graph {
    int numVertices;
    struct Node **adjLists;
};`,
            "c",
            "Adjacency list structure"
        ),

        heading("Adjacency Matrix vs List"),

        table(
            ["Basis", "Matrix", "List"],
            [
                ["Space", "O(V²)", "O(V + E)"],
                ["Edge lookup", "O(1)", "O(V)"],
                ["Add edge", "O(1)", "O(1)"],
                ["Best for", "Dense graphs", "Sparse graphs"],
            ]
        ),

        heading("Graph Traversal"),

        heading("1. Breadth First Search (BFS)"),

        definition(
            "BFS",
            "BFS visits vertices level by level starting from a source vertex, using a queue data structure."
        ),

        code(
            `void BFS(int start) {
    int visited[V] = {0};
    Queue q;
    enqueue(q, start);
    visited[start] = 1;
    
    while (!isEmpty(q), {
        int v = dequeue(q);
        printf("%d ", v);
        
        for (each neighbor u of v) {
            if (!visited[u]) {
                visited[u] = 1;
                enqueue(q, u);
            }
        }
    }
}`,
            "c",
            "BFS algorithm"
        ),

        heading("2. Depth First Search (DFS)"),

        definition(
            "DFS",
            "DFS explores as far as possible along each branch before backtracking, using a stack (or recursion)."
        ),

        code(
            `void DFS(int v, int visited[]) {
    visited[v] = 1;
    printf("%d ", v);
    
    for (each neighbor u of v) {
        if (!visited[u])
            DFS(u, visited);
    }
}`,
            "c",
            "DFS algorithm (recursive)"
        ),

        heading("BFS vs DFS"),

        table(
            ["Basis", "BFS", "DFS"],
            [
                ["Data Structure", "Queue", "Stack/Recursion"],
                ["Approach", "Level by level", "Depth wise"],
                ["Memory", "More (stores level)", "Less"],
                ["Use", "Shortest path", "Cycle detection, topological sort"],
                ["Completeness", "Complete", "Complete"],
            ]
        ),

        heading("Applications of Graphs"),

        list([
            "Social networks (friend connections).",
            "Web page linking and search engines.",
            "Google Maps and GPS navigation.",
            "Network routing protocols.",
            "Recommendation systems.",
            "Compiler dependency graphs.",
            "Circuit design.",
            "Airline route planning.",
        ]),

        note(
            "BFS is preferred for finding shortest paths in unweighted graphs. DFS is better for detecting cycles, topological sorting and connectivity problems.",
            "tip",
            "BFS vs DFS Usage"
        ),

        keyPoints([
            "Graph consists of vertices and edges.",
            "Can be directed/undirected and weighted/unweighted.",
            "Represented using adjacency matrix or adjacency list.",
            "BFS uses queue and explores level by level.",
            "DFS uses stack/recursion and explores depth-wise.",
        ]),
    ],

    {
        summary:
            "Learn graphs, terminology, types, representations and traversal techniques BFS and DFS.",
        minutes: 14,
        tags: ["graph", "bfs", "dfs", "adjacency", "important"],

        mcqs: [
            mcq(
                "BFS uses which data structure?",
                ["Stack", "Queue", "Tree", "Array"],
                1,
                "BFS uses a queue for level-order traversal."
            ),
            mcq(
                "DFS uses which data structure?",
                ["Queue", "Stack", "Array", "Heap"],
                1,
                "DFS uses stack (or recursion which uses stack)."
            ),
            mcq(
                "Adjacency matrix space complexity is:",
                ["O(V)", "O(E)", "O(V²)", "O(V+E)"],
                2,
                "Adjacency matrix is V × V, so O(V²)."
            ),
            mcq(
                "Which is better for sparse graphs?",
                ["Adjacency Matrix", "Adjacency List", "Both", "None"],
                1,
                "Adjacency list is space efficient for sparse graphs."
            ),
        ],

        questions: [
            qa(
                "Explain graph and its types.",
                "A graph is a non-linear data structure consisting of vertices (nodes) and edges (connections). Types of graphs include: directed graph (edges have direction), undirected graph (no direction), weighted graph (edges have weights), unweighted graph, cyclic graph (contains cycles), acyclic graph, connected graph (path exists between all vertices), complete graph (all vertices interconnected), sparse graph (few edges) and dense graph (many edges). Graphs are used to model networks, maps, social connections and dependencies.",
                4
            ),
            qa(
                "Differentiate between BFS and DFS.",
                "BFS (Breadth First Search) visits vertices level by level using a queue, while DFS (Depth First Search) explores as far as possible along a branch before backtracking, using a stack or recursion. BFS is used for finding the shortest path in unweighted graphs and level-order traversal. DFS is used for cycle detection, topological sorting, connectivity and path finding. BFS uses more memory because it stores all nodes at the current level, while DFS uses less memory. Both have O(V+E) time complexity.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — Searching Techniques
========================================================= */

const searching = createTopic(
    "searching-techniques",
    "Searching Techniques",

    [
        definition(
            "Searching",
            "Searching is the process of finding a particular element in a collection of data. The two most common searching techniques are linear search and binary search."
        ),

        heading("Linear Search"),

        definition(
            "Linear Search",
            "Linear search checks each element of the array sequentially until the desired element is found or the array ends."
        ),

        code(
            `int linearSearch(int arr[], int n, int key) {
    for (int i = 0; i < n; i++) {
        if (arr[i] == key)
            return i;
    }
    return -1;
}`,
            "c",
            "Linear search"
        ),

        heading("Linear Search Characteristics"),

        list([
            "Works on both sorted and unsorted arrays.",
            "Time Complexity: O(n) worst case, O(1) best case.",
            "Space Complexity: O(1).",
            "Simple to implement.",
            "Inefficient for large datasets.",
        ]),

        heading("Binary Search"),

        definition(
            "Binary Search",
            "Binary search finds an element in a sorted array by repeatedly dividing the search interval in half. It compares the target with the middle element."
        ),

        steps([
            "Set low = 0 and high = n - 1.",
            "Calculate mid = (low + high) / 2.",
            "If arr[mid] == key → return mid.",
            "If arr[mid] < key → search right half: low = mid + 1.",
            "If arr[mid] > key → search left half: high = mid - 1.",
            "Repeat until low > high; return -1 if not found.",
        ]),

        heading("Binary Search - Iterative"),

        code(
            `int binarySearch(int arr[], int n, int key) {
    int low = 0, high = n - 1;
    
    while (low <= high) {
        int mid = (low + high) / 2;
        
        if (arr[mid] == key)
            return mid;
        else if (arr[mid] < key)
            low = mid + 1;
        else
            high = mid - 1;
    }
    return -1;
}`,
            "c",
            "Binary search (iterative)"
        ),

        heading("Binary Search - Recursive"),

        code(
            `int binarySearch(int arr[], int low, int high, int key) {
    if (low > high) return -1;
    
    int mid = (low + high) / 2;
    
    if (arr[mid] == key)
        return mid;
    else if (arr[mid] < key)
        return binarySearch(arr, mid + 1, high, key);
    else
        return binarySearch(arr, low, mid - 1, key);
}`,
            "c",
            "Binary search (recursive)"
        ),

        heading("Binary Search Characteristics"),

        list([
            "Works only on sorted arrays.",
            "Time Complexity: O(log n).",
            "Space Complexity: O(1) iterative, O(log n) recursive.",
            "Much faster than linear search for large data.",
            "Requires random access, so not suitable for linked lists.",
        ]),

        heading("Linear vs Binary Search"),

        table(
            ["Basis", "Linear Search", "Binary Search"],
            [
                ["Array requirement", "Any array", "Sorted array only"],
                ["Time complexity", "O(n)", "O(log n)"],
                ["Approach", "Sequential", "Divide and conquer"],
                ["Data structure", "Any", "Array/BST"],
                ["Implementation", "Simple", "Slightly complex"],
                ["Efficiency", "Slow for large data", "Very fast"],
            ]
        ),

        heading("Example"),

        text(
            "For arr = [10, 20, 30, 40, 50, 60, 70] and key = 40:"
        ),

        steps([
            "low = 0, high = 6, mid = 3 → arr[3] = 40 = key.",
            "Element found at index 3.",
            "Binary search takes only 1 comparison, while linear search takes 4.",
        ]),

        note(
            "Binary search is extremely efficient with O(log n) complexity. For 1 million elements, it takes only around 20 comparisons compared to up to 1 million for linear search.",
            "tip",
            "Efficiency of Binary Search"
        ),

        keyPoints([
            "Linear search checks elements one by one.",
            "Binary search divides array into halves.",
            "Binary search requires a sorted array.",
            "Linear search: O(n); Binary search: O(log n).",
            "Binary search is much faster for large sorted data.",
        ]),
    ],

    {
        summary:
            "Learn linear and binary searching techniques with their implementations and complexity analysis.",
        minutes: 11,
        tags: ["search", "linear-search", "binary-search", "important"],

        mcqs: [
            mcq(
                "Time complexity of linear search is:",
                ["O(1)", "O(n)", "O(log n)", "O(n²)"],
                1,
                "Linear search takes O(n) in worst case."
            ),
            mcq(
                "Binary search requires:",
                ["Sorted array", "Unsorted array", "Linked list", "Tree"],
                0,
                "Binary search works on sorted arrays."
            ),
            mcq(
                "Time complexity of binary search is:",
                ["O(n)", "O(log n)", "O(n²)", "O(1)"],
                1,
                "Binary search takes O(log n) time."
            ),
            mcq(
                "Binary search uses which technique?",
                ["Brute force", "Divide and conquer", "Backtracking", "Dynamic programming"],
                1,
                "Binary search uses divide and conquer."
            ),
        ],

        questions: [
            qa(
                "Explain linear search with algorithm.",
                "Linear search sequentially checks each element of an array until the target element is found or the array ends. It works on both sorted and unsorted arrays. The algorithm starts from index 0 and compares each element with the target key. If a match is found, it returns the index; otherwise, it returns -1. Time complexity is O(n) in worst case and O(1) in best case. Space complexity is O(1). Linear search is simple but inefficient for large datasets.",
                4
            ),
            qa(
                "Explain binary search with example.",
                "Binary search finds an element in a sorted array by repeatedly dividing the search interval in half. It compares the target with the middle element: if equal, the search is successful; if the target is smaller, search continues in the left half; if larger, in the right half. For example, in arr = [10, 20, 30, 40, 50, 60, 70] searching for 40: mid = 3, arr[3] = 40 = key, found in one comparison. Binary search has O(log n) time complexity and requires a sorted array. It is much more efficient than linear search for large datasets.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 5 — Sorting Techniques
========================================================= */

const sorting = createTopic(
    "sorting-techniques",
    "Sorting Techniques",

    [
        definition(
            "Sorting",
            "Sorting is the process of arranging elements of a list or array in a particular order, either ascending or descending."
        ),

        heading("Importance of Sorting"),

        list([
            "Makes searching faster (binary search).",
            "Improves data presentation.",
            "Helps in efficient data processing.",
            "Required for many algorithms.",
            "Simplifies duplicate detection.",
        ]),

        heading("Types of Sorting Algorithms"),

        table(
            ["Algorithm", "Best", "Average", "Worst", "Space", "Stable"],
            [
                ["Bubble Sort", "O(n)", "O(n²)", "O(n²)", "O(1)", "Yes"],
                ["Selection Sort", "O(n²)", "O(n²)", "O(n²)", "O(1)", "No"],
                ["Insertion Sort", "O(n)", "O(n²)", "O(n²)", "O(1)", "Yes"],
                ["Merge Sort", "O(n log n)", "O(n log n)", "O(n log n)", "O(n)", "Yes"],
                ["Quick Sort", "O(n log n)", "O(n log n)", "O(n²)", "O(log n)", "No"],
                ["Heap Sort", "O(n log n)", "O(n log n)", "O(n log n)", "O(1)", "No"],
            ]
        ),

        heading("Bubble Sort"),

        definition(
            "Bubble Sort",
            "Bubble sort repeatedly compares adjacent elements and swaps them if they are in wrong order. Largest element bubbles up to the end in each pass."
        ),

        code(
            `void bubbleSort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}`,
            "c",
            "Bubble sort"
        ),

        heading("Bubble Sort Example"),

        text("For arr = [64, 25, 12, 22, 11]:"),

        list([
            "Pass 1: [25, 12, 22, 11, 64]",
            "Pass 2: [12, 22, 11, 25, 64]",
            "Pass 3: [12, 11, 22, 25, 64]",
            "Pass 4: [11, 12, 22, 25, 64]",
            "Sorted array: [11, 12, 22, 25, 64]",
        ]),

        heading("Selection Sort"),

        definition(
            "Selection Sort",
            "Selection sort finds the smallest element in the unsorted portion and swaps it with the first element of the unsorted portion."
        ),

        code(
            `void selectionSort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        int min = i;
        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[min])
                min = j;
        }
        int temp = arr[min];
        arr[min] = arr[i];
        arr[i] = temp;
    }
}`,
            "c",
            "Selection sort"
        ),

        heading("Insertion Sort"),

        definition(
            "Insertion Sort",
            "Insertion sort builds the sorted array one element at a time by picking each element and inserting it in its correct position."
        ),

        code(
            `void insertionSort(int arr[], int n) {
    for (int i = 1; i < n; i++) {
        int key = arr[i];
        int j = i - 1;
        
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}`,
            "c",
            "Insertion sort"
        ),

        heading("Merge Sort"),

        definition(
            "Merge Sort",
            "Merge sort is a divide-and-conquer algorithm that divides the array into halves, recursively sorts them and then merges the sorted halves."
        ),

        code(
            `void merge(int arr[], int l, int m, int r) {
    int n1 = m - l + 1, n2 = r - m;
    int L[n1], R[n2];
    
    for (int i = 0; i < n1; i++) L[i] = arr[l + i];
    for (int j = 0; j < n2; j++) R[j] = arr[m + 1 + j];
    
    int i = 0, j = 0, k = l;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) arr[k++] = L[i++];
        else arr[k++] = R[j++];
    }
    while (i < n1) arr[k++] = L[i++];
    while (j < n2) arr[k++] = R[j++];
}

void mergeSort(int arr[], int l, int r) {
    if (l < r) {
        int m = (l + r) / 2;
        mergeSort(arr, l, m);
        mergeSort(arr, m + 1, r);
        merge(arr, l, m, r);
    }
}`,
            "c",
            "Merge sort"
        ),

        heading("Merge Sort Steps"),

        steps([
            "Divide the array into two halves.",
            "Recursively sort the left half.",
            "Recursively sort the right half.",
            "Merge the two sorted halves into a single sorted array.",
            "Base case: array with one element is already sorted.",
        ]),

        heading("Quick Sort"),

        definition(
            "Quick Sort",
            "Quick sort picks a pivot element and partitions the array into two halves — elements smaller than pivot on the left, greater on the right — then recursively sorts them."
        ),

        code(
            `int partition(int arr[], int low, int high) {
    int pivot = arr[high];
    int i = low - 1;
    
    for (int j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    int temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;
    return i + 1;
}

void quickSort(int arr[], int low, int high) {
    if (low < high) {
        int p = partition(arr, low, high);
        quickSort(arr, low, p - 1);
        quickSort(arr, p + 1, high);
    }
}`,
            "c",
            "Quick sort"
        ),

        heading("Quick Sort Steps"),

        steps([
            "Choose a pivot element (usually first, last or middle).",
            "Partition the array so smaller elements come before pivot and larger after.",
            "Recursively apply quick sort to the left sub-array.",
            "Recursively apply quick sort to the right sub-array.",
            "Base case: sub-array with 0 or 1 element is already sorted.",
        ]),

        heading("Stable vs Unstable Sorting"),

        definition(
            "Stable Sorting",
            "A stable sorting algorithm preserves the relative order of equal elements. Examples: Bubble, Insertion, Merge Sort."
        ),

        definition(
            "Unstable Sorting",
            "An unstable sorting algorithm does not preserve the order of equal elements. Examples: Selection, Quick, Heap Sort."
        ),

        heading("In-Place vs Not In-Place"),

        table(
            ["Type", "Description", "Examples"],
            [
                ["In-Place", "Uses O(1) extra space", "Bubble, Selection, Insertion, Quick"],
                ["Not In-Place", "Uses O(n) extra space", "Merge Sort"],
            ]
        ),

        heading("Comparison of Sorting Algorithms"),

        table(
            ["Algorithm", "Approach", "Best Use Case"],
            [
                ["Bubble Sort", "Compare adjacent", "Small datasets, teaching"],
                ["Selection Sort", "Find minimum", "Small datasets, memory limited"],
                ["Insertion Sort", "Insert in position", "Nearly sorted data, small n"],
                ["Merge Sort", "Divide and conquer", "Large data, stability needed"],
                ["Quick Sort", "Partition around pivot", "General purpose, average case"],
                ["Heap Sort", "Heap data structure", "Guaranteed O(n log n)"],
            ]
        ),

        heading("Applications of Sorting"),

        list([
            "Database record management.",
            "Search optimization (binary search).",
            "Data analysis and statistics.",
            "Ranking systems (leaderboards).",
            "File organization in operating systems.",
            "Efficient duplicate removal.",
            "Preprocessing for other algorithms.",
            "Priority scheduling in OS.",
        ]),

        note(
            "Quick Sort is generally the fastest in practice but has O(n²) worst case. Merge Sort has guaranteed O(n log n) but uses O(n) extra space. Choose based on your data and constraints.",
            "tip",
            "Choosing Sorting Algorithm"
        ),

        keyPoints([
            "Sorting arranges data in ascending or descending order.",
            "Bubble, Selection, Insertion are simple O(n²) sorts.",
            "Merge Sort and Quick Sort are efficient O(n log n) sorts.",
            "Stable sorts preserve order of equal elements.",
            "Merge Sort uses extra space; Quick Sort is in-place.",
        ]),
    ],

    {
        summary:
            "Learn various sorting techniques: bubble, selection, insertion, merge and quick sort with their complexities.",
        minutes: 15,
        tags: ["sorting", "bubble", "merge", "quick", "important"],

        mcqs: [
            mcq(
                "Time complexity of bubble sort in worst case is:",
                ["O(n)", "O(n²)", "O(log n)", "O(n log n)"],
                1,
                "Bubble sort worst case is O(n²)."
            ),
            mcq(
                "Which sort uses divide and conquer?",
                ["Bubble", "Selection", "Merge", "Insertion"],
                2,
                "Merge sort uses divide and conquer approach."
            ),
            mcq(
                "Which is stable sort?",
                ["Quick", "Selection", "Merge", "Heap"],
                2,
                "Merge sort is stable."
            ),
            mcq(
                "Best case of Quick Sort is:",
                ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
                1,
                "Quick sort best case is O(n log n)."
            ),
        ],

        questions: [
            qa(
                "Explain bubble sort with algorithm.",
                "Bubble sort is a simple sorting algorithm that repeatedly compares adjacent elements and swaps them if they are in wrong order. In each pass, the largest unsorted element bubbles up to its correct position at the end. The algorithm uses two nested loops: outer loop runs n-1 times, inner loop performs comparisons and swaps. Time complexity is O(n²) in average and worst case, O(n) in best case (already sorted). Space complexity is O(1). It is stable but inefficient for large datasets.",
                4
            ),
            qa(
                "Compare merge sort and quick sort.",
                "Merge sort and quick sort are both divide-and-conquer sorting algorithms. Merge sort divides the array into halves, recursively sorts them and merges. Quick sort picks a pivot, partitions the array around it and recursively sorts partitions. Merge sort has guaranteed O(n log n) time complexity but requires O(n) extra space and is stable. Quick sort has O(n log n) average but O(n²) worst case time complexity, uses O(log n) space and is not stable. Quick sort is generally faster in practice due to better cache performance, while merge sort is preferred when stability and guaranteed performance are important.",
                4
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit2Topics = [
    linkedList,
    trees,
    graphs,
    searching,
    sorting,
];
