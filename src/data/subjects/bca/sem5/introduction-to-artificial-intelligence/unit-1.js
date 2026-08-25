/* =========================================================
   BCA • SEM 5 • Introduction to Artificial Intelligence
   UNIT 1 — Fundamentals of AI, Agents and Search Strategies
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
   TOPIC 1 — Introduction to Artificial Intelligence
========================================================= */

const introToAI = createTopic(
    "intro-to-artificial-intelligence",
    "Introduction to Artificial Intelligence",

    [
        definition(
            "Artificial Intelligence (AI)",
            "Artificial Intelligence is a branch of Computer Science dedicated to creating systems capable of performing tasks that typically require human intelligence, such as visual perception, speech recognition, decision-making, learning and problem solving."
        ),

        text(
            "The term 'Artificial Intelligence' was coined by John McCarthy in 1956 during the Dartmouth Conference, widely considered the birthplace of AI as an academic discipline."
        ),

        heading("Four Approaches to AI"),

        table(
            ["Approach", "Focus", "Key Principle"],
            [
                ["Thinking Humanly", "Cognitive modelling", "Simulating human thought processes using cognitive science"],
                ["Acting Humanly", "Turing Test approach", "Acting in ways indistinguishable from human behaviour"],
                ["Thinking Rationally", "Laws of thought", "Using formal logic and deductive reasoning"],
                ["Acting Rationally", "Rational agents", "Maximising expected goal achievement based on current knowledge"],
            ]
        ),

        heading("The Turing Test"),

        definition(
            "Turing Test",
            "Proposed by Alan Turing in 1950 (The Imitation Game), the Turing test determines whether a machine can exhibit intelligent behaviour indistinguishable from that of a human through natural language dialogue."
        ),

        steps([
            "A human interrogator communicates via text with two hidden entities: a human and a machine.",
            "The interrogator asks questions to determine which entity is the machine.",
            "If the interrogator cannot reliably tell the machine from the human, the machine passes the test.",
        ]),

        heading("Branches and Subfields of AI"),

        list([
            "Machine Learning (ML) — Algorithms that learn patterns from data.",
            "Deep Learning (DL) — Multi-layered neural networks inspired by the human brain.",
            "Natural Language Processing (NLP) — Understanding and generating human language.",
            "Computer Vision (CV) — Extracting information from digital images and videos.",
            "Robotics — Combining AI with physical hardware for autonomous tasks.",
            "Expert Systems — Emulating human expert decision-making in specific domains.",
        ]),

        heading("AI Applications Across Domains"),

        table(
            ["Domain", "Real-World Application"],
            [
                ["Healthcare", "Disease diagnosis, drug discovery, medical imaging"],
                ["Finance", "Algorithmic trading, fraud detection, credit scoring"],
                ["Automotive", "Autonomous vehicles (Tesla, Waymo), driver-assist systems"],
                ["E-Commerce", "Product recommendation engines (Amazon, Netflix)"],
                ["Virtual Assistants", "Siri, Google Assistant, Alexa, ChatGPT"],
            ]
        ),

        note(
            "AI is categorised into Weak/Narrow AI (designed for a specific task, e.g., AlphaGo) and Strong/General AI (AGI, capable of general human-level cognitive tasks across all domains). All current systems are Narrow AI.",
            "info",
            "Narrow vs General AI"
        ),

        keyPoints([
            "AI was officially founded by John McCarthy in 1956.",
            "The Turing Test measures whether a computer can imitate human conversational intelligence.",
            "Modern AI primarily follows the rational agent approach.",
            "Current real-world AI systems fall under Narrow AI (Weak AI).",
            "Major subfields include ML, Deep Learning, NLP, Robotics and Computer Vision.",
        ]),
    ],

    {
        summary:
            "Understand AI foundations, definitions, the Turing Test, major subfields and real-world industrial applications.",
        minutes: 12,
        tags: ["ai", "turing-test", "machine-learning", "foundations", "important"],

        mcqs: [
            mcq(
                "Who is considered the 'Father of Artificial Intelligence'?",
                ["Alan Turing", "John McCarthy", "Marvin Minsky", "Geoffrey Hinton"],
                1,
                "John McCarthy coined the term in 1956 and organised the Dartmouth conference."
            ),
            mcq(
                "The Turing Test was introduced in which year?",
                ["1945", "1950", "1956", "1965"],
                1,
                "Alan Turing proposed the test in his 1950 paper 'Computing Machinery and Intelligence'."
            ),
            mcq(
                "Which type of AI represents today's existing systems like ChatGPT and Siri?",
                ["Narrow AI (Weak AI)", "General AI (AGI)", "Super AI", "Strong AI"],
                0,
                "All modern operational AI systems are Narrow AI designed for specific tasks."
            ),
            mcq(
                "Which subfield of AI focuses on enabling computers to understand human language?",
                ["Computer Vision", "Natural Language Processing", "Robotics", "Reinforcement Learning"],
                1,
                "NLP deals with the interaction between computers and human natural languages."
            ),
        ],

        questions: [
            qa(
                "What is Artificial Intelligence? Explain its four major approaches.",
                "Artificial Intelligence is the branch of computer science focused on creating machines capable of mimicking human intelligence. The four major approaches are: (1) Thinking Humanly: Understanding and modelling human cognition using cognitive science. (2) Acting Humanly: The Turing Test approach, where a machine acts indistinguishably from a human. (3) Thinking Rationally: Using formal logic to ensure the machine arrives at irrefutable conclusions. (4) Acting Rationally: Creating rational agents that act to achieve the best expected outcome given their knowledge and perception.",
                4
            ),
            qa(
                "Explain the Turing Test with its components and limitations.",
                "The Turing Test, proposed by Alan Turing in 1950, tests machine intelligence through text-based natural language communication. An interrogator questions both a machine and a human. If the interrogator cannot distinguish the machine from the human, the machine passes. To pass, a machine needs Natural Language Processing, Knowledge Representation, Automated Reasoning and Machine Learning. Limitations include: it tests behaviour rather than true consciousness, human interrogators can be tricked by simple Eliza-like chatbots, and intelligent non-human capabilities (like complex calculations) are ignored.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — Intelligent Agents and Environments
========================================================= */

const intelligentAgents = createTopic(
    "intelligent-agents-and-environments",
    "Intelligent Agents and Environments",

    [
        definition(
            "Agent",
            "An agent is anything that perceives its environment through sensors and acts upon that environment through actuators."
        ),

        definition(
            "Rational Agent",
            "A rational agent is an agent that selects an action expected to maximise its performance measure, based on the percept sequence received so far and its built-in knowledge."
        ),

        heading("Agent Architecture"),

        code(
            `// High-level Agent Structure
Agent = Architecture + Program

Sensors    --> [ Percepts ]
                  |
           [ Agent Program ]  -->  Decision based on Knowledge & Logic
                  |
Actuators  --> [ Actions ]`,
            "text",
            "Agent cycle diagram"
        ),

        heading("PEAS Framework"),

        definition(
            "PEAS",
            "PEAS stands for Performance Measure, Environment, Actuators, and Sensors. It is used to specify the complete task environment for an agent."
        ),

        table(
            ["Agent Type", "Performance Measure", "Environment", "Actuators", "Sensors"],
            [
                ["Automated Taxi", "Safety, speed, comfort, trip profit", "Roads, traffic, pedestrians, weather", "Steering, accelerator, brakes, horn", "Cameras, LiDAR, GPS, speedometer"],
                ["Medical Diagnostic", "Healthy patient, reduced cost, accuracy", "Patient, hospital staff, symptoms", "Display screens, diagnosis reports", "Keyboard input of symptoms, lab tests"],
                ["Vacuum Cleaner", "Cleanliness, battery efficiency, time", "Floor, obstacles, dirt", "Wheels, brush, suction motor", "Dirt sensor, bump sensor, infrared"],
                ["Part-Picking Robot", "Percentage of parts sorted correctly", "Conveyor belt, bins, parts", "Jointed arm, gripper", "Camera, touch sensor"],
            ]
        ),

        heading("Types of Agent Environments"),

        table(
            ["Environment Property", "Description", "Example"],
            [
                ["Fully vs Partially Observable", "Whether sensors capture complete state of environment", "Chess (Fully) vs Poker (Partially)"],
                ["Deterministic vs Stochastic", "Next state determined completely by current state & action", "Crossword (Deterministic) vs Driving (Stochastic)"],
                ["Episodic vs Sequential", "Current action does not affect future decisions", "Defect classification (Episodic) vs Chess (Sequential)"],
                ["Static vs Dynamic", "Environment changes while agent is deliberating", "Crossword (Static) vs Taxi driving (Dynamic)"],
                ["Discrete vs Continuous", "Finite number of distinct states, percepts and actions", "Chess (Discrete) vs Autonomous Driving (Continuous)"],
                ["Single vs Multi-Agent", "Whether other agents operate in the environment", "Solitaire (Single) vs Football (Multi-agent)"],
            ]
        ),

        heading("Types of Agent Programs"),

        list([
            "Simple Reflex Agents — Selects actions based only on current percept (Condition-Action rules).",
            "Model-Based Reflex Agents — Maintains internal state to track unobserved aspects of the world.",
            "Goal-Based Agents — Acts to achieve explicit goal states.",
            "Utility-Based Agents — Uses a utility function to evaluate the quality and happiness of goal states.",
            "Learning Agents — Divides into learning element, performance element, critic and problem generator to improve over time.",
        ]),

        note(
            "Rationality is not omniscience. Omniscience knows the actual outcome of actions in advance. Rationality maximises expected outcome based on available perception and knowledge.",
            "tip",
            "Rationality vs Omniscience"
        ),

        keyPoints([
            "An agent interacts with its environment via sensors and actuators.",
            "PEAS defines Performance Measure, Environment, Actuators and Sensors.",
            "Environments can be static/dynamic, discrete/continuous, deterministic/stochastic.",
            "Agents range from Simple Reflex to Learning Agents.",
            "A rational agent acts to maximise its expected performance measure.",
        ]),
    ],

    {
        summary:
            "Learn agent architectures, the PEAS specification framework, environmental characteristics, and the five major agent types.",
        minutes: 13,
        tags: ["agents", "peas", "environment", "rationality", "important"],

        mcqs: [
            mcq(
                "In the PEAS framework, 'E' stands for:",
                ["Energy", "Environment", "Evaluation", "Effort"],
                1,
                "PEAS stands for Performance measure, Environment, Actuators, Sensors."
            ),
            mcq(
                "Which type of agent uses condition-action rules based only on the current percept?",
                ["Goal-based agent", "Model-based agent", "Simple reflex agent", "Utility-based agent"],
                2,
                "Simple reflex agents select actions based solely on the current percept."
            ),
            mcq(
                "Chess is an example of which type of environment?",
                ["Continuous & Dynamic", "Discrete & Fully Observable", "Partially Observable", "Stochastic"],
                1,
                "Chess has a finite distinct set of states and the entire board is visible."
            ),
            mcq(
                "Which agent component determines how performance should be modified to improve over time?",
                ["Critic", "Learning element", "Problem generator", "Performance element"],
                1,
                "The learning element makes improvements based on feedback from the critic."
            ),
        ],

        questions: [
            qa(
                "What is the PEAS framework? Write the PEAS specification for an Automated Driving Car.",
                "The PEAS framework is used to systematically specify an agent's task environment: (P) Performance Measure: Safety, trip duration, passenger comfort, legal compliance and fuel efficiency. (E) Environment: City roads, highways, traffic lights, pedestrians, weather conditions and other vehicles. (A) Actuators: Steering wheel, acceleration pedal, brake assembly, turn signals and horn. (S) Sensors: High-resolution video cameras, LiDAR, radar, ultrasonic proximity sensors, GPS and speedometer.",
                4
            ),
            qa(
                "Explain the difference between Simple Reflex, Goal-Based and Utility-Based agents.",
                "Simple Reflex Agents choose actions based purely on the current percept using IF-THEN condition-action rules without memory. Goal-Based Agents maintain internal world models and use explicit goal descriptions to evaluate if a potential action leads to a desired goal state. Utility-Based Agents go a step further: when multiple paths lead to a goal, they use a real-valued utility function to measure the 'desirability' or efficiency of each outcome, choosing the optimal path.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — Problem Solving and Uninformed Search
========================================================= */

const uninformedSearch = createTopic(
    "problem-solving-uninformed-search",
    "Problem Solving and Uninformed Search",

    [
        definition(
            "State Space Search",
            "A problem-solving process that formalises a problem as a search space consisting of an initial state, a set of actions (transition model), goal states, and path costs."
        ),

        heading("Components of a Well-Defined Problem"),

        list([
            "Initial State — The starting state of the agent (e.g., in(Arad),.",
            "Actions / State Space — All legal moves available at a given state.",
            "Transition Model — Returns the state resulting from doing action a in state s: RESULT(s, a).",
            "Goal Test — Determines if a given state is a goal state.",
            "Path Cost — Function assigning a numeric cost to a path, denoted as step cost c(s, a, s').",
        ]),

        heading("Uninformed (Blind) Search Algorithms"),

        text(
            "Uninformed search strategies have no information about the distance from the current state to the goal; they only know how to generate successors and recognise a goal state."
        ),

        table(
            ["Algorithm", "Data Structure", "Time Complexity", "Space Complexity", "Optimal?", "Complete?"],
            [
                ["Breadth-First Search (BFS)", "FIFO Queue", "O(b^d)", "O(b^d)", "Yes (if cost=1)", "Yes"],
                ["Depth-First Search (DFS)", "LIFO Stack", "O(b^m)", "O(b·m)", "No", "No (in infinite graphs)"],
                ["Uniform Cost Search (UCS)", "Priority Queue", "O(b^(1 + ⌊C*/ε⌋),", "O(b^(1 + ⌊C*/ε⌋),", "Yes", "Yes"],
                ["Depth-Limited Search (DLS)", "Recursive Stack", "O(b^l)", "O(b·l)", "No", "No (if l < d)"],
                ["Iterative Deepening DFS (IDDFS)", "Stack with loop", "O(b^d)", "O(b·d)", "Yes (if cost=1)", "Yes"],
            ]
        ),

        heading("Breadth-First Search (BFS) in Python"),

        code(
            `from collections import deque

def bfs(graph, start_node, goal_node):
    visited = set()
    queue = deque([[start_node]])

    while queue:
        path = queue.popleft()
        node = path[-1]

        if node == goal_node:
            return path  # Shortest path found

        if node not in visited:
            visited.add(node)
            for neighbor in graph.get(node, []):
                new_path = list(path)
                new_path.append(neighbor)
                queue.append(new_path)

    return None

graph = {
    'A': ['B', 'C'],
    'B': ['D', 'E'],
    'C': ['F'],
    'D': [], 'E': ['F'], 'F': []
}

print("BFS Path:", bfs(graph, 'A', 'F'),`,
            "python",
            "Breadth-First Search Implementation"
        ),

        heading("Depth-First Search (DFS) in Python"),

        code(
            `def dfs(graph, start_node, goal_node, visited=None, path=None):
    if visited is None:
        visited = set()
    if path is None:
        path = [start_node]

    if start_node == goal_node:
        return path

    visited.add(start_node)

    for neighbor in graph.get(start_node, []):
        if neighbor not in visited:
            result = dfs(graph, neighbor, goal_node, visited, path + [neighbor])
            if result is not None:
                return result

    return None`,
            "python",
            "Recursive Depth-First Search Implementation"
        ),

        note(
            "Iterative Deepening Search (IDDFS) combines the linear space complexity of DFS with the completeness and optimality of BFS.",
            "tip",
            "Best Blind Search Choice"
        ),

        keyPoints([
            "State space is defined by initial state, actions, transition model, goal test, and path cost.",
            "BFS uses a FIFO queue and finds the shallowest goal state.",
            "DFS uses a LIFO stack with low memory usage O(b·m), but can get stuck in infinite paths.",
            "Uniform Cost Search expands the node with the lowest path cost g(n).",
            "IDDFS is optimal, complete, and has linear space complexity O(b·d).",
        ]),
    ],

    {
        summary:
            "Formulate search problems and compare blind search strategies: BFS, DFS, UCS, DLS and Iterative Deepening.",
        minutes: 14,
        tags: ["search", "bfs", "dfs", "uninformed-search", "algorithms", "important"],

        mcqs: [
            mcq(
                "Which data structure is fundamentally used to implement Breadth-First Search?",
                ["Stack", "FIFO Queue", "Priority Queue", "Binary Search Tree"],
                1,
                "BFS explores level-by-level using a First-In-First-Out (FIFO) queue."
            ),
            mcq(
                "What is the space complexity of Depth-First Search where b is branching factor and m is max depth?",
                ["O(b^m)", "O(b · m)", "O(m^b)", "O(b + m)"],
                1,
                "DFS requires only storing the single current path from root to leaf: O(b · m)."
            ),
            mcq(
                "Uniform Cost Search expands the node having:",
                ["Lowest heuristic value h(n)", "Lowest accumulated path cost g(n)", "Highest depth", "Random priority"],
                1,
                "UCS prioritises nodes with the lowest path cost g(n) from the root."
            ),
            mcq(
                "Iterative Deepening DFS combines the advantages of:",
                ["BFS space and DFS time", "BFS optimality & completeness and DFS space efficiency", "A* search and Greedy search", "Heuristics and Blind search"],
                1,
                "IDDFS combines BFS optimality with DFS O(b·d) space complexity."
            ),
        ],

        questions: [
            qa(
                "Compare Breadth-First Search (BFS) and Depth-First Search (DFS) across key performance metrics.",
                "BFS expands nodes level by level using a FIFO queue. Its time complexity is O(b^d) and space complexity is O(b^d) where b is branching factor and d is goal depth. It is complete and optimal for uniform step costs, but suffers from massive memory consumption. DFS explores deeply down a branch using a LIFO stack. Its time complexity is O(b^m) and space complexity is O(b·m) where m is maximum tree depth. It is memory efficient, but is neither complete in infinite trees nor optimal.",
                4
            ),
            qa(
                "What is Uniform Cost Search (UCS)? Explain its working mechanism.",
                "Uniform Cost Search (UCS) is an uninformed search algorithm used when step costs vary. Instead of expanding the shallowest node (like BFS), UCS expands the node n with the lowest path cost g(n) from the start state. It maintains a priority queue of unvisited nodes ordered by g(n). When a node is expanded, path costs to its children are calculated as g(child) = g(parent) + step_cost. UCS is complete and optimal provided step costs exceed a small positive constant ε > 0. It is equivalent to Dijkstra's algorithm.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — Informed (Heuristic) Search and A* Algorithm
========================================================= */

const informedSearch = createTopic(
    "informed-heuristic-search-a-star",
    "Informed (Heuristic) Search and A* Algorithm",

    [
        definition(
            "Heuristic Function h(n)",
            "A heuristic function h(n) estimates the cheapest path cost from the current state n to the nearest goal state. It incorporates problem-specific knowledge to guide search efficiently."
        ),

        heading("Evaluation Function f(n)"),

        text(
            "Informed search algorithms use an evaluation function f(n) to rank nodes in the priority queue and decide which state to explore next."
        ),

        table(
            ["Algorithm", "Evaluation Function f(n)", "Properties"],
            [
                ["Greedy Best-First Search", "f(n) = h(n)", "Fast, but incomplete and not optimal"],
                ["A* Search", "f(n) = g(n) + h(n)", "Optimal & Complete if heuristic is admissible and consistent"],
            ]
        ),

        heading("Properties of Heuristics"),

        list([
            "Admissible Heuristic — A heuristic that never overestimates the true cost to reach the goal: 0 ≤ h(n) ≤ h*(n) where h*(n) is the true optimal cost.",
            "Consistent (Monotonic) Heuristic — For every node n and every successor n' generated by action a: h(n) ≤ c(n, a, n') + h(n') (Satisfies triangle inequality).",
            "Dominance — If h2(n) ≥ h1(n) for all n, h2 dominates h1 and will expand fewer or equal nodes during A* search.",
        ]),

        heading("Classic Heuristics for the 8-Puzzle Problem"),

        table(
            ["Heuristic", "Definition", "Admissible?"],
            [
                ["h1 (Misplaced Tiles)", "Number of tiles that are not in their target goal position", "Yes (each tile must move at least once)"],
                ["h2 (Manhattan Distance)", "Sum of horizontal and vertical distances of tiles from goal positions: |x1 - x2| + |y1 - y2|", "Yes (moves are purely horizontal/vertical)"],
            ]
        ),

        heading("A* Algorithm Implementation in Python"),

        code(
            `import heapq

def a_star(graph, start, goal, heuristics):
    # Priority queue stores tuples: (f_score, current_node, path, g_cost)
    frontier = []
    heapq.heappush(frontier, (heuristics[start], start, [start], 0),
    visited = {}

    while frontier:
        f_cost, current, path, g_cost = heapq.heappop(frontier)

        if current == goal:
            return path, g_cost

        if current in visited and visited[current] <= g_cost:
            continue
        visited[current] = g_cost

        for neighbor, step_cost in graph.get(current, []):
            new_g = g_cost + step_cost
            new_f = new_g + heuristics.get(neighbor, 0)
            heapq.heappush(frontier, (new_f, neighbor, path + [neighbor], new_g),

    return None, float("inf")

# Graph with (neighbor, cost)
graph = {
    'S': [('A', 1), ('B', 4)],
    'A': [('B', 2), ('C', 5), ('G', 12)],
    'B': [('C', 2)],
    'C': [('G', 3)],
    'G': []
}
heuristics = {'S': 7, 'A': 6, 'B': 4, 'C': 2, 'G': 0}

path, cost = a_star(graph, 'S', 'G', heuristics)
print(f"Optimal Path: {path} with cost {cost}")`,
            "python",
            "A* Search Algorithm"
        ),

        heading("Memory-Bounded Heuristic Search"),

        list([
            "IDA* (Iterative Deepening A*) — Uses f-cost limits instead of depth limits; solves memory constraints.",
            "RBFS (Recursive Best-First Search) — Linear space recursive algorithm that mimics best-first search.",
            "SMA* (Simplified Memory-Bounded A*) — Utilises all available system memory and drops worst leaf nodes when full.",
        ]),

        keyPoints([
            "Greedy Best-First expands nodes with lowest h(n); it is not guaranteed to find optimal paths.",
            "A* evaluates f(n) = g(n) + h(n), combining past cost g(n) with estimated future cost h(n).",
            "A* is tree-optimal with admissible heuristics, and graph-optimal with consistent heuristics.",
            "Manhattan distance is an admissible heuristic for grid and sliding-tile problems.",
            "IDA* and SMA* manage A*'s exponential memory bottleneck.",
        ]),
    ],

    {
        summary:
            "Master informed search, heuristics, admissibility, consistency, Greedy Best-First Search and the A* Algorithm.",
        minutes: 14,
        tags: ["heuristic", "a-star", "greedy-search", "informed-search", "important"],

        mcqs: [
            mcq(
                "In A* search, what does the evaluation function f(n) represent?",
                ["f(n) = g(n) - h(n)", "f(n) = g(n) + h(n)", "f(n) = h(n)", "f(n) = g(n) * h(n)"],
                1,
                "A* uses f(n) = g(n) + h(n) where g(n) is path cost from start and h(n) is heuristic."
            ),
            mcq(
                "A heuristic function is said to be admissible if it:",
                ["Always overestimates the true cost", "Never overestimates the true cost to reach the goal", "Equals zero everywhere", "Is strictly non-linear"],
                1,
                "Admissibility requires 0 <= h(n) <= h*(n) so the true cost is never overestimated."
            ),
            mcq(
                "Which heuristic for the 8-puzzle computes the sum of absolute coordinate offsets?",
                ["Euclidean Distance", "Manhattan Distance", "Misplaced Tiles", "Hamming Distance"],
                1,
                "Manhattan distance calculates |x1 - x2| + |y1 - y2| for each misplaced tile."
            ),
            mcq(
                "Greedy Best-First Search evaluates nodes using:",
                ["f(n) = g(n)", "f(n) = h(n)", "f(n) = g(n) + h(n)", "f(n) = depth(n)"],
                1,
                "Greedy Best-First considers only h(n), the estimated cost to reach the goal."
            ),
        ],

        questions: [
            qa(
                "Explain the A* algorithm. Why is it guaranteed to be optimal?",
                "A* search evaluates nodes by f(n) = g(n) + h(n), where g(n) is the exact cost from the start node to n, and h(n) is the estimated cost from n to the goal. A* maintains a priority queue of nodes ordered by f(n). It is guaranteed to be optimal because: (1) In tree search, h(n) must be admissible (never overestimating true cost), ensuring no suboptimal goal node is expanded before an optimal one. (2) In graph search, h(n) must be consistent (satisfying the triangle inequality), guaranteeing that the first time a state is expanded, the path found is optimal.",
                4
            ),
            qa(
                "What is the difference between Admissible and Consistent heuristics?",
                "An admissible heuristic never overestimates the actual minimal cost to achieve a goal state from node n (0 ≤ h(n) ≤ h*(n),. A consistent (or monotonic) heuristic requires that for every node n and every successor n' generated by action a, h(n) ≤ c(n, a, n') + h(n'). This means the estimated cost cannot decrease faster than the step cost along any edge. Every consistent heuristic is admissible, but not all admissible heuristics are consistent. Consistency guarantees optimality in graph search without reopening closed nodes.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 5 — Adversarial Search and Game Playing
========================================================= */

const adversarialSearch = createTopic(
    "adversarial-search-game-playing",
    "Adversarial Search and Game Playing",

    [
        definition(
            "Adversarial Search",
            "A competitive search environment where two or more opposing agents with conflicting goals try to maximise their own utility while anticipating opponent moves."
        ),

        heading("Game Characteristics in AI"),

        list([
            "Two-player, zero-sum games (One player's gain equals the opponent's exact loss).",
            "Deterministic and discrete rules (e.g., Chess, Checkers, Tic-Tac-Toe, Go).",
            "Perfect information (Both players have complete visibility of the game board).",
        ]),

        heading("The Minimax Algorithm"),

        text(
            "Minimax computes the optimal move for player MAX, assuming player MIN plays optimally to minimise MAX's score."
        ),

        code(
            `function MINIMAX(node, depth, isMaximizingPlayer):
    if depth == 0 or node is terminal:
        return EVALUATION(node)

    if isMaximizingPlayer:
        maxEval = -INFINITY
        for each child of node:
            eval = MINIMAX(child, depth - 1, FALSE)
            maxEval = MAX(maxEval, eval)
        return maxEval
    else:
        minEval = +INFINITY
        for each child of node:
            eval = MINIMAX(child, depth - 1, TRUE)
            minEval = MIN(minEval, eval)
        return minEval`,
            "javascript",
            "Minimax Pseudocode"
        ),

        heading("Alpha-Beta (α-β) Pruning"),

        definition(
            "Alpha-Beta Pruning",
            "An optimisation technique for Minimax that eliminates branches in the search tree that cannot possibly influence the final decision, without altering the optimal outcome."
        ),

        table(
            ["Parameter", "Meaning", "Initial Value"],
            [
                ["Alpha (α)", "The best (highest) value MAX can guarantee so far", "-Infinity (-∞)"],
                ["Beta (β)", "The best (lowest) value MIN can guarantee so far", "+Infinity (+∞)"],
            ]
        ),

        note(
            "Pruning condition: Whenever α ≥ β, the current branch is pruned because MIN will never allow a state worse for itself, or MAX already has a superior alternative.",
            "warning",
            "Pruning Rule"
        ),

        heading("Minimax with Alpha-Beta Pruning in Python"),

        code(
            `def alphabeta(depth, node_index, is_max, scores, alpha, beta):
    # Terminal leaf node
    if depth == 3:
        return scores[node_index]

    if is_max:
        best = float("-inf")
        for i in range(2):
            val = alphabeta(depth + 1, node_index * 2 + i, False, scores, alpha, beta)
            best = max(best, val)
            alpha = max(alpha, best)
            if beta <= alpha:
                break  # Beta cutoff (Prune)
        return best
    else:
        best = float("inf")
        for i in range(2):
            val = alphabeta(depth + 1, node_index * 2 + i, True, scores, alpha, beta)
            best = min(best, val)
            beta = min(beta, best)
            if beta <= alpha:
                break  # Alpha cutoff (Prune)
        return best

# Leaf node utility values for a tree of depth 3
leaf_scores = [3, 5, 6, 9, 1, 2, 0, -1]
optimal_val = alphabeta(0, 0, True, leaf_scores, float("-inf"), float("inf"),
print("Optimal Game Value:", optimal_val)`,
            "python",
            "Alpha-Beta Implementation"
        ),

        heading("Evaluation Functions for Real-Time Games"),

        text(
            "In games with high branching factors (like Chess with ~10^120 states), search trees cannot reach terminal leaves. A cutoff test stops search at depth d and evaluates board state using a heuristic evaluation function based on material weight, king safety and board control."
        ),

        keyPoints([
            "Minimax assumes both MAX and MIN play with perfect rationality.",
            "Minimax has time complexity O(b^m) and space complexity O(b·m).",
            "Alpha-Beta pruning reduces effective branching factor to O(b^(m/2), under perfect move ordering.",
            "Alpha (α) tracks MAX's lower bound; Beta (β) tracks MIN's upper bound.",
            "Evaluation functions estimate board strength when full tree search is intractable.",
        ]),
    ],

    {
        summary:
            "Understand game theory in AI, zero-sum games, the Minimax search strategy, Alpha-Beta pruning, and heuristic board evaluation.",
        minutes: 13,
        tags: ["minimax", "alpha-beta-pruning", "game-theory", "adversarial-search", "important"],

        mcqs: [
            mcq(
                "In a zero-sum two-player game, what is the goal of player MIN?",
                ["Maximise MAX's payoff", "Minimise MAX's utility outcome", "Equalise both scores", "Randomise moves"],
                1,
                "Player MIN always selects moves that minimise the value for player MAX."
            ),
            mcq(
                "In Alpha-Beta pruning, a cutoff occurs when:",
                ["alpha == 0", "alpha >= beta", "beta > alpha", "alpha == -infinity"],
                1,
                "When alpha >= beta, the branch is pruned as it cannot affect the final decision."
            ),
            mcq(
                "With optimal move ordering, Alpha-Beta pruning reduces Minimax time complexity to:",
                ["O(b)", "O(b^(m/2),", "O(m^2)", "O(log b)"],
                1,
                "Ideal move ordering cuts the search depth exponent in half to O(b^(m/2),."
            ),
            mcq(
                "Alpha represents the:",
                ["Worst value for MAX", "Best (highest-value) choice found so far for MAX", "Best value for MIN", "Random threshold"],
                1,
                "Alpha tracks the highest score guaranteed for the MAX player so far."
            ),
        ],

        questions: [
            qa(
                "Explain the working of the Minimax algorithm with a game tree diagram description.",
                "The Minimax algorithm is a recursive decision strategy for zero-sum two-player deterministic games. The tree consists of alternating layers: MAX nodes (where the AI wants to maximise score) and MIN nodes (where the opponent wants to minimise AI's score). Leaf nodes contain utility values computed by an evaluation function. Values are backed up from leaves to root: at a MIN node, the parent takes the minimum of child values; at a MAX node, the parent takes the maximum of child values. The root node selects the move leading to the highest backed-up value.",
                4
            ),
            qa(
                "What is Alpha-Beta pruning? Explain α and β cutoffs.",
                "Alpha-Beta pruning is an optimisation technique for Minimax that discards branches that cannot influence the final decision. Alpha (α) is the best value MAX can guarantee so far (initially -∞). Beta (β) is the best value MIN can guarantee so far (initially +∞). During traversal: (1) Beta Cutoff (at MAX nodes): If MAX finds a move yielding value ≥ β, search stops on that node because the parent MIN node already has a lower alternative. (2) Alpha Cutoff (at MIN nodes): If MIN finds a move yielding value ≤ α, search stops because the parent MAX node already has a higher alternative.",
                4
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit1Topics = [
    introToAI,
    intelligentAgents,
    uninformedSearch,
    informedSearch,
    adversarialSearch,
];
