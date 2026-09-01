/* =========================================================
   BCA • SEM 3 • Discrete Mathematics
   UNIT 2 — Graph Theory
========================================================= */

import {
    createTopic,
    heading,
    text,
    list,
    table,
    note,
    definition,
    keyPoints,
    mcq,
    qa,
    code,
} from "../../../../helpers";

/* =========================================================
   TOPIC 1 — Basic Concepts of Graph Theory
========================================================= */

const basicGraphConcepts = createTopic(
    "basic-graph-concepts",
    "Basic Concepts: Graphs, Multigraphs, and Degrees",

    [
        definition(
            "Graph (G)",
            "A graph is a mathematical structure consisting of a set of vertices (nodes) V and a set of edges (lines/links) E that connect pairs of vertices. Denoted as G = (V, E)."
        ),

        heading("Types of Graphs"),

        table(
            ["Graph Type", "Description"],
            [
                ["Simple Graph", "A graph with no loops (edge connecting a node to itself) and no multiple edges between the same pair of nodes."],
                ["Multigraph", "A graph that allows multiple edges (parallel edges) between the same pair of vertices, but no loops."],
                ["Pseudograph", "A graph that allows both multiple edges and loops."],
                ["Directed Graph (Digraph)", "A graph where edges have a specific direction (arrows pointing from one node to another)."],
            ]
        ),

        heading("Degree of a Vertex"),

        definition(
            "Degree (deg(v))",
            "The degree of a vertex in an undirected graph is the number of edges connected to it. A loop adds 2 to the degree of a vertex."
        ),

        list([
            "**Isolated Vertex:** A vertex with degree 0 (no edges).",
            "**Pendant Vertex:** A vertex with degree 1 (a leaf node).",
            "**The Handshaking Lemma:** The sum of degrees of all vertices in a graph is always TWICE the number of edges (Sum of deg(v) = 2|E|). Because every edge connects two vertices.",
        ]),

        keyPoints([
            "Graphs model relationships between objects.",
            "V = Vertices (nodes), E = Edges (connections).",
            "Degree is the number of connections a vertex has.",
            "The sum of all degrees is always an even number.",
        ]),
    ],

    {
        summary: "Understand what graphs are, the difference between simple and multigraphs, and how to calculate vertex degrees.",
        minutes: 10,
        tags: ["graph", "multigraph", "degree", "handshaking-lemma"],

        mcqs: [
            mcq(
                "A graph that contains multiple edges between the same pair of nodes but NO loops is called a:",
                ["Simple Graph", "Multigraph", "Pseudograph", "Directed Graph"],
                1,
                "A multigraph allows parallel edges but no loops."
            ),
            mcq(
                "If a graph has 5 edges, what is the sum of the degrees of all its vertices?",
                ["5", "10", "15", "Depends on the graph"],
                1,
                "By the Handshaking Lemma, Sum of degrees = 2 * Edges. 2 * 5 = 10."
            ),
        ],

        questions: [
            qa(
                "Define Simple Graph, Multigraph, and Pseudograph.",
                "1) Simple Graph: An undirected graph that has no loops (edges connecting a node to itself) and no multiple edges between any pair of nodes. 2) Multigraph: An undirected graph that allows multiple (parallel) edges between the same pair of vertices, but does not allow loops. 3) Pseudograph: An undirected graph that allows both multiple edges and self-loops. These classifications determine how complex the connections in the graph can be.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — Paths, Subgraphs, and Connectivity
========================================================= */

const pathsAndConnectivity = createTopic(
    "paths-subgraphs-connectivity",
    "Paths, Subgraphs, and Connected Components",

    [
        heading("Walks, Trails, Paths, and Circuits"),

        text(
            "In graph theory, navigating from one vertex to another has specific terminology:"
        ),

        table(
            ["Term", "Condition"],
            [
                ["Walk", "A sequence of vertices and edges. Vertices and edges can be repeated."],
                ["Trail", "A walk where NO EDGE is repeated (vertices can repeat)."],
                ["Path", "A walk where NO VERTEX is repeated (thus no edge is repeated)."],
                ["Circuit", "A closed trail (starts and ends at the same vertex)."],
                ["Cycle", "A closed path (starts and ends at same vertex, no other vertex repeated)."],
            ]
        ),

        heading("Subgraphs"),

        definition(
            "Subgraph",
            "A subgraph is a graph formed from a subset of vertices and a subset of edges of a larger graph."
        ),

        heading("Connected Graphs & Components"),

        list([
            "**Connected Graph:** An undirected graph is connected if there is a path between every pair of vertices. (You can walk from any node to any other).",
            "**Disconnected Graph:** A graph that is not connected. It consists of two or more separate pieces.",
            "**Connected Components:** The maximal connected subgraphs of a disconnected graph. (The separate 'islands' of the graph).",
        ]),

        heading("Cut Point (Articulation Point) and Bridge"),

        table(
            ["Concept", "Meaning", "Result of Removal"],
            [
                ["Cut Point (Articulation Point)", "A single vertex whose removal disconnects the graph (or increases the number of connected components).", "Graph breaks into pieces."],
                ["Bridge (Cut Edge)", "A single edge whose removal disconnects the graph.", "Graph breaks into pieces."],
            ]
        ),

        keyPoints([
            "Path: No repeated vertices.",
            "Connected graph: One single piece where everything is reachable.",
            "Cut point: A weak node that holds the graph together.",
            "Bridge: A weak edge that holds the graph together.",
        ]),
    ],

    {
        summary: "Learn how to navigate graphs (paths), identify subgraphs, understand connected components, and find critical nodes/edges (cut points and bridges).",
        minutes: 12,
        tags: ["path", "subgraph", "cut-point", "bridge", "connected"],

        mcqs: [
            mcq(
                "A sequence of vertices and edges where NO VERTEX is repeated is called a:",
                ["Walk", "Trail", "Path", "Circuit"],
                2,
                "A Path strictly has no repeated vertices."
            ),
            mcq(
                "Removing a 'bridge' from a connected graph will result in:",
                ["A complete graph", "A disconnected graph", "A multigraph", "A loop"],
                1,
                "A bridge is a critical edge that keeps the graph connected. Removing it disconnects the graph."
            ),
        ],

        questions: [
            qa(
                "What is the difference between a Path and a Trail in graph theory?",
                "A Walk is a general sequence of alternating vertices and edges. A Trail is a walk where no EDGE is repeated, but vertices can be visited more than once. A Path is a stricter walk where no VERTEX is repeated (which naturally means no edge is repeated either). So, all paths are trails, but not all trails are paths.",
                5
            ),
            qa(
                "Define Cut Point (Articulation Point) and Bridge (Cut Edge).",
                "A Cut Point is a specific vertex in a connected graph whose removal (along with all incident edges) disconnects the graph or increases the number of connected components. It represents a vulnerability in network design. A Bridge is an edge whose removal similarly disconnects the graph. Identifying cut points and bridges is crucial for analyzing the reliability and fault tolerance of networks.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — Special Graphs and Matrix Representation
========================================================= */

const specialGraphsAndMatrices = createTopic(
    "special-graphs-and-matrices",
    "Special Graphs and Matrix Representation",

    [
        heading("Special Types of Graphs"),

        table(
            ["Graph Type", "Notation", "Description"],
            [
                ["Complete Graph", "K_n", "Every vertex is directly connected to every other vertex by an edge. Edges = n(n-1)/2."],
                ["Regular Graph", "k-regular", "A graph where every vertex has the exact same degree 'k'."],
                ["Bipartite Graph", "K_m,n", "Vertices are divided into two disjoint sets. Edges only go between the sets, never within the same set."],
            ]
        ),

        note(
            "A Complete Bipartite Graph (K_m,n) connects every vertex in set 1 to every vertex in set 2. Total edges = m * n.",
            "tip",
            "Bipartite Facts"
        ),

        heading("Representing Graphs using Matrices"),

        text(
            "Computers cannot 'see' graph drawings. We must convert graphs into matrices so algorithms can process them."
        ),

        heading("1. Adjacency Matrix"),

        text(
            "An n×n square matrix where rows and columns represent vertices. An entry is '1' if there is an edge between the vertices, and '0' otherwise."
        ),

        code(
            `Graph with 3 nodes (A, B, C):
A is connected to B and C.
B is connected to A.
C is connected to A.

Adjacency Matrix:
    A  B  C
A [ 0  1  1 ]
B [ 1  0  0 ]
C [ 1  0  0 ]`,
            "text",
            "Adjacency Matrix Example"
        ),

        heading("2. Incidence Matrix"),

        text(
            "An n×m matrix where rows are vertices and columns are edges. An entry is '1' if the vertex is incident to (touches) the edge, and '0' otherwise."
        ),

        keyPoints([
            "Complete graphs (K_n) have maximum possible edges.",
            "Regular graphs have uniform degrees.",
            "Bipartite graphs have no edges inside their two separate sets.",
            "Adjacency matrices show node-to-node connections.",
        ]),
    ],

    {
        summary: "Identify special graphs (Complete, Regular, Bipartite) and learn how to represent graphs mathematically using Adjacency and Incidence matrices.",
        minutes: 12,
        tags: ["complete-graph", "bipartite", "adjacency-matrix", "graph-theory"],

        mcqs: [
            mcq(
                "In a Complete Graph (K_n) with 4 vertices, how many edges are there?",
                ["4", "6", "8", "12"],
                1,
                "Formula: n(n-1)/2. For n=4, 4(3)/2 = 12/2 = 6."
            ),
            mcq(
                "An Adjacency Matrix for an undirected graph without loops is always:",
                ["Asymmetric", "Symmetric with 0s on the main diagonal", "Filled with 1s", "A column matrix"],
                1,
                "Because if A connects to B, B connects to A. No loops means diagonal is 0."
            ),
        ],

        questions: [
            qa(
                "What is a Bipartite Graph? Explain with an example.",
                "A Bipartite graph is a graph whose vertices can be divided into two disjoint sets (say, U and V) such that every edge connects a vertex in U to a vertex in V. There are no edges connecting vertices within the same set. For example, if U contains 'Job Applicants' and V contains 'Job Roles', edges represent who applied for what role. No applicant is connected to another applicant.",
                5
            ),
            qa(
                "Differentiate between an Adjacency Matrix and an Incidence Matrix.",
                "Adjacency Matrix: It is a square (V × V) matrix where both rows and columns represent vertices. An entry is 1 if there is an edge between the two vertices, and 0 otherwise. It is best for dense graphs. Incidence Matrix: It is a (V × E) matrix where rows represent vertices and columns represent edges. An entry is 1 if the vertex touches the edge, and 0 otherwise. It clearly shows the relationship between nodes and specific edges.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — Planar Graphs, Euler's Formula & Graph Coloring
========================================================= */

const planarGraphsAndColoring = createTopic(
    "planar-graphs-euler-formula-coloring",
    "Planar Graphs, Euler's Formula, and Graph Coloring",

    [
        heading("Planar Graphs"),

        definition(
            "Planar Graph",
            "A graph is planar if it can be drawn on a flat 2D plane without any of its edges crossing over each other."
        ),

        list([
            "When drawn without crossings, a planar graph divides the plane into regions (or faces).",
            "The outer infinite area surrounding the graph is also counted as one region.",
        ]),

        heading("Euler's Formula for Planar Graphs"),

        text(
            "For any connected planar graph, there is a fundamental relationship between the number of Vertices (v), Edges (e), and Regions/Faces (r)."
        ),

        code(
            "v - e + r = 2\n\nWhere:\nv = number of vertices\ne = number of edges\nr = number of regions (faces)",
            "text",
            "Euler's Formula"
        ),

        text(
            "Example: A square graph has 4 vertices and 4 edges. It encloses 1 inner region and 1 outer region (total r = 2).\nFormula check: 4 - 4 + 2 = 2. It holds true!"
        ),

        heading("Graph Coloring"),

        definition(
            "Graph Coloring (Vertex Coloring)",
            "Graph coloring is the assignment of colors to the vertices of a graph such that no two adjacent vertices (connected by an edge) have the same color."
        ),

        list([
            "**Chromatic Number:** The minimum number of colors required to color a graph properly. Denoted by χ(G).",
            "Bipartite graphs always have a chromatic number of 2.",
            "Complete graphs K_n always have a chromatic number of 'n'.",
        ]),

        heading("Applications of Graph Coloring"),

        table(
            ["Application", "How it maps to Graph Coloring"],
            [
                ["Map Coloring", "Countries are vertices. Shared borders are edges. Colors differentiate countries."],
                ["Exam Scheduling", "Exams are vertices. Overlapping students are edges. Time slots are colors."],
                ["Frequency Assignment", "Towers are vertices. Interference zones are edges. Frequencies are colors."],
            ]
        ),

        keyPoints([
            "Planar graphs can be drawn without edge crossings.",
            "Euler's formula: v - e + r = 2.",
            "Graph coloring ensures no adjacent nodes share a color.",
            "Chromatic number is the absolute minimum colors needed.",
        ]),
    ],

    {
        summary: "Understand planar graphs, calculate regions using Euler's formula, and grasp the rules and applications of graph coloring.",
        minutes: 13,
        tags: ["planar", "euler-formula", "graph-coloring", "chromatic-number"],

        mcqs: [
            mcq(
                "A connected planar graph has 6 vertices and 8 edges. How many regions (faces) does it divide the plane into?",
                ["2", "3", "4", "6"],
                2,
                "Using Euler's Formula: v - e + r = 2 => 6 - 8 + r = 2 => -2 + r = 2 => r = 4."
            ),
            mcq(
                "What is the chromatic number of a bipartite graph?",
                ["1", "2", "3", "Depends on number of vertices"],
                1,
                "A bipartite graph can always be colored using exactly 2 colors."
            ),
        ],

        questions: [
            qa(
                "State and explain Euler's Formula for planar graphs.",
                "Euler's formula states a fundamental relationship for any connected planar graph (a graph drawn without edge crossings). The formula is: v - e + r = 2, where 'v' is the number of vertices, 'e' is the number of edges, and 'r' is the number of regions (faces) bounded by the edges, including the single infinite outer region. This formula proves that no matter how you draw a planar graph, this ratio remains constant.",
                4
            ),
            qa(
                "What is Graph Coloring? Define Chromatic Number and mention two real-world applications.",
                "Graph coloring (specifically vertex coloring) is the process of assigning colors to the vertices of a graph such that no two adjacent vertices share the same color. The Chromatic Number is the absolute minimum number of colors required to color the graph correctly. Real-world applications include: 1) Map Coloring: Coloring adjacent countries/states differently. 2) Exam Scheduling: Assigning time slots (colors) to exams (vertices) such that exams sharing common students (edges) do not occur at the same time.",
                5
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit2Topics = [
    basicGraphConcepts,
    pathsAndConnectivity,
    specialGraphsAndMatrices,
    planarGraphsAndColoring,
];