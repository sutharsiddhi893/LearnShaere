/* =========================================================
   MSc-IT • SEM 1 • Artificial Intelligence
   UNIT 4 — Genetic Algorithms
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
   TOPIC 1 — Introduction to Genetic Algorithms
========================================================= */

const introToGeneticAlgorithms = createTopic(
    "introduction-to-genetic-algorithms",
    "Introduction to Genetic Algorithms",

    [
        definition(
            "Genetic Algorithm (GA)",
            "A search and optimisation technique inspired by the process of natural selection and genetics. GAs use biologically inspired operators such as selection, crossover (recombination) and mutation to evolve a population of candidate solutions towards better solutions over successive generations."
        ),

        text(
            "Genetic Algorithms were developed by John Holland in the 1960s and 1970s at the University of Michigan. Holland's seminal book 'Adaptation in Natural and Artificial Systems' (1975) laid the theoretical foundation. GAs belong to the larger class of Evolutionary Algorithms (EAs) and are particularly effective for complex optimisation problems where traditional methods struggle."
        ),

        heading("Biological Inspiration"),

        table(
            ["Biological Concept", "GA Equivalent"],
            [
                ["Chromosome", "A candidate solution (encoded as a string)"],
                ["Gene", "A single element or parameter of the solution"],
                ["Allele", "The value of a gene"],
                ["Population", "A set of candidate solutions"],
                ["Fitness", "A measure of how good a solution is"],
                ["Natural Selection", "Selecting fitter individuals for reproduction"],
                ["Crossover (Mating)", "Combining parts of two parent solutions"],
                ["Mutation", "Randomly altering a gene to maintain diversity"],
                ["Generation", "One iteration of the algorithm"],
                ["Evolution", "Improvement of solutions over generations"],
            ]
        ),

        heading("Why Use Genetic Algorithms?"),

        list([
            "They can search large, complex and multi-modal search spaces effectively.",
            "They do not require gradient information or derivatives of the objective function.",
            "They work with discrete, continuous and mixed variable types.",
            "They are less likely to get trapped in local optima compared to gradient-based methods.",
            "They can handle noisy, non-differentiable or discontinuous objective functions.",
            "They are inherently parallel — the population can be evaluated simultaneously.",
            "They provide a set of good solutions, not just a single optimum.",
        ]),

        heading("Basic GA Workflow"),

        steps([
            "Initialisation — Generate a random initial population of candidate solutions",
            "Fitness Evaluation — Evaluate each individual using a fitness function",
            "Selection — Select fitter individuals as parents for reproduction",
            "Crossover — Combine pairs of parents to produce offspring",
            "Mutation — Randomly alter some genes in the offspring",
            "Replacement — Form the new population from offspring (and possibly some parents)",
            "Termination Check — If stopping criterion is met, return the best solution; otherwise go to step 2",
        ]),

        code(
            `Genetic Algorithm Pseudocode:

  1.  t ← 0
  2.  Initialise population P(t) randomly
  3.  Evaluate fitness of each individual in P(t)
  4.  WHILE termination condition not met DO
  5.      Select parents from P(t) based on fitness
  6.      Apply crossover to produce offspring C(t)
  7.      Apply mutation to C(t)
  8.      Evaluate fitness of C(t)
  9.      Replace P(t) with C(t) to form P(t+1)
  10.     t ← t + 1
  11. END WHILE
  12. Return the best individual found`,
            "text",
            "GA pseudocode"
        ),

        heading("Key Terminology"),

        table(
            ["Term", "Meaning"],
            [
                ["Individual / Chromosome", "One candidate solution in the population"],
                ["Population", "The entire set of individuals in one generation"],
                ["Population Size", "Number of individuals in the population (typically 50–500)"],
                ["Generation", "One complete iteration of selection, crossover and mutation"],
                ["Fitness Function", "A function that scores how good a solution is"],
                ["Search Space", "The set of all possible solutions"],
                ["Genotype", "The encoded representation of a solution"],
                ["Phenotype", "The actual solution decoded from the genotype"],
            ]
        ),

        heading("Applications of Genetic Algorithms"),

        table(
            ["Domain", "Application"],
            [
                ["Engineering", "Structural design, aerodynamic shape optimisation"],
                ["Scheduling", "Timetabling, job shop scheduling, crew scheduling"],
                ["Machine Learning", "Feature selection, hyperparameter tuning, neural network architecture search"],
                ["Robotics", "Path planning, gait optimisation, control parameter tuning"],
                ["Finance", "Portfolio optimisation, trading strategy design"],
                ["Bioinformatics", "Protein folding, gene expression analysis, drug design"],
                ["Game Design", "Evolving game strategies, procedural content generation"],
                ["Telecommunications", "Network design, routing optimisation"],
            ]
        ),

        heading("GA versus Traditional Optimisation"),

        table(
            ["Aspect", "Traditional Methods", "Genetic Algorithm"],
            [
                ["Search strategy", "Point-based (single solution)", "Population-based (many solutions)"],
                ["Gradient required?", "Yes (for gradient descent)", "No"],
                ["Local optima", "Often trapped", "Less likely due to diversity"],
                ["Search space", "Continuous, smooth", "Discrete, continuous, mixed"],
                ["Deterministic?", "Usually yes", "Stochastic (random elements)"],
                ["Result", "Single optimum", "Set of good solutions"],
                ["Speed", "Fast for simple problems", "Slower but robust for complex problems"],
            ]
        ),

        note(
            "GAs are not guaranteed to find the global optimum. They are heuristic search methods that trade guaranteed optimality for the ability to handle complex, poorly understood search spaces where traditional methods fail.",
            "tip",
            "Important"
        ),

        keyPoints([
            "Genetic Algorithms are optimisation techniques inspired by natural selection and genetics.",
            "They work with a population of candidate solutions that evolve over generations.",
            "The main operators are selection, crossover and mutation.",
            "GAs do not require gradient information and can handle complex, non-linear search spaces.",
            "Applications include scheduling, engineering design, machine learning and bioinformatics.",
        ]),
    ],

    {
        summary:
            "Understand the biological inspiration, workflow, terminology, applications and advantages of Genetic Algorithms.",
        minutes: 12,
        tags: ["ai", "genetic-algorithms", "evolutionary", "optimisation", "important"],

        mcqs: [
            mcq(
                "Genetic Algorithms were developed by:",
                ["Alan Turing", "John Holland", "Geoffrey Hinton", "Lotfi Zadeh"],
                1,
                "John Holland developed Genetic Algorithms in the 1960s and 1970s at the University of Michigan."
            ),
            mcq(
                "In a GA, a candidate solution is called a:",
                ["Neuron", "Chromosome / Individual", "Weight", "Rule"],
                1,
                "Each candidate solution in a GA is called a chromosome or individual."
            ),
            mcq(
                "Which of the following is NOT a GA operator?",
                ["Selection", "Crossover", "Backpropagation", "Mutation"],
                2,
                "Backpropagation is a neural network training algorithm, not a GA operator."
            ),
            mcq(
                "GAs are particularly useful when:",
                ["The objective function is differentiable", "The search space is small and simple", "The search space is large, complex and poorly understood", "Gradient information is available"],
                2,
                "GAs excel in large, complex search spaces where traditional gradient-based methods struggle."
            ),
            mcq(
                "The fitness function in a GA:",
                ["Encodes the solution", "Measures how good a solution is", "Mutates genes", "Selects parents"],
                1,
                "The fitness function evaluates and scores the quality of each candidate solution."
            ),
            mcq(
                "GAs are a type of:",
                ["Supervised learning", "Evolutionary Algorithm", "Fuzzy system", "Expert system"],
                1,
                "GAs belong to the class of Evolutionary Algorithms inspired by biological evolution."
            ),
        ],

        questions: [
            qa(
                "What is a Genetic Algorithm? Explain its biological inspiration.",
                "A Genetic Algorithm is a search and optimisation technique inspired by natural selection and genetics. It was developed by John Holland in the 1960s. In biology, organisms with favourable traits are more likely to survive and reproduce, passing their genes to the next generation. Over time, the population evolves towards better adaptation. GAs mirror this process: candidate solutions (chromosomes) are evaluated by a fitness function (survival of the fittest), the best solutions are selected as parents (natural selection), pairs of parents are combined through crossover (mating) to produce offspring, and random mutations introduce diversity. Over successive generations, the population evolves towards better solutions.",
                5
            ),
            qa(
                "Explain the basic workflow of a Genetic Algorithm.",
                "A GA starts by initialising a random population of candidate solutions. Each individual is evaluated using a fitness function that measures solution quality. The algorithm then enters a loop. In each generation, fitter individuals are selected as parents using a selection method. Pairs of parents undergo crossover to produce offspring by combining parts of their genetic material. Mutation randomly alters some genes in the offspring to maintain genetic diversity. The offspring form the new population, replacing some or all of the previous generation. This cycle repeats until a termination condition is met, such as reaching a maximum number of generations, achieving a satisfactory fitness level, or observing no improvement over several generations. The best individual found is returned as the solution.",
                5
            ),
            qa(
                "Compare Genetic Algorithms with traditional optimisation methods.",
                "Traditional optimisation methods like gradient descent work with a single solution point and require the objective function to be differentiable. They move in the direction of steepest descent and often get trapped in local optima. GAs work with a population of solutions simultaneously, do not require gradient information, and use stochastic operators (selection, crossover, mutation) that help escape local optima. Traditional methods are faster for simple, smooth, continuous problems, while GAs are more robust for complex, non-linear, discrete or multi-modal search spaces. GAs provide a set of good solutions rather than a single optimum, and they can handle noisy or discontinuous objective functions that would defeat gradient-based methods.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — Encoding and Fitness Function
========================================================= */

const encodingAndFitness = createTopic(
    "encoding-and-fitness-function",
    "Encoding and Fitness Function",

    [
        definition(
            "Encoding",
            "The process of representing a candidate solution as a data structure (chromosome) that the genetic algorithm can manipulate. The choice of encoding is critical because it determines how crossover and mutation operators work and how effectively the GA can explore the search space."
        ),

        text(
            "Before a GA can solve a problem, the solutions must be encoded into a format that the algorithm can process. The encoding defines the genotype (internal representation), which is decoded into the phenotype (actual solution) for evaluation."
        ),

        heading("Types of Encoding"),

        heading("1. Binary Encoding"),

        definition(
            "Binary Encoding",
            "The most common and traditional encoding where each chromosome is a string of bits (0s and 1s). Each bit or group of bits represents a gene."
        ),

        code(
            `Example: Optimising a function f(x) where x ∈ [0, 31]

  Encoding: 5-bit binary string
  Chromosome: 1 0 1 1 0
  Decoded: 1×16 + 0×8 + 1×4 + 1×2 + 0×1 = 22

  Population example:
    Individual 1: 1 0 1 1 0 → x = 22
    Individual 2: 0 1 1 0 1 → x = 13
    Individual 3: 1 1 1 0 0 → x = 28

  Advantages: Simple, works well with standard crossover/mutation
  Disadvantages: Not natural for some problems, Hamming cliffs`,
            "text",
            "Binary encoding example"
        ),

        heading("2. Real-Valued (Continuous) Encoding"),

        definition(
            "Real-Valued Encoding",
            "Each gene is a real number. This is natural for optimisation problems with continuous parameters."
        ),

        code(
            `Example: Optimising weights of a neural network

  Chromosome: [0.45, -1.23, 0.78, 3.14, -0.56]
  Each gene is a weight value directly.

  Advantages: Natural for continuous problems, no decoding needed
  Disadvantages: Requires specialised crossover/mutation operators`,
            "text",
            "Real-valued encoding"
        ),

        heading("3. Permutation Encoding"),

        definition(
            "Permutation Encoding",
            "Each chromosome is a permutation (ordering) of a set of items. Used for ordering and scheduling problems."
        ),

        code(
            `Example: Travelling Salesman Problem (TSP) with 5 cities

  Chromosome: [3, 1, 4, 5, 2]
  Meaning: Visit city 3 → city 1 → city 4 → city 5 → city 2

  Advantages: Natural for ordering problems
  Disadvantages: Standard crossover may produce invalid permutations`,
            "text",
            "Permutation encoding"
        ),

        heading("4. Tree Encoding"),

        definition(
            "Tree Encoding",
            "Each chromosome is a tree structure. Used in Genetic Programming (GP) to evolve computer programs or mathematical expressions."
        ),

        code(
            `Example: Evolving a mathematical expression

  Tree for: (x + 3) * (y - 1)

        *
       / \\
      +   -
     / \\ / \\
    x  3 y  1

  Advantages: Natural for evolving programs and expressions
  Disadvantages: Complex crossover and mutation operators`,
            "text",
            "Tree encoding"
        ),

        heading("Comparison of Encoding Types"),

        table(
            ["Encoding", "Representation", "Best For", "Example"],
            [
                ["Binary", "String of 0s and 1s", "Discrete and combinatorial problems", "Knapsack, feature selection"],
                ["Real-Valued", "Array of real numbers", "Continuous parameter optimisation", "Neural network weights, engineering design"],
                ["Permutation", "Ordered list of integers", "Ordering and scheduling", "TSP, job scheduling"],
                ["Tree", "Tree structure", "Program and expression evolution", "Genetic programming, symbolic regression"],
            ]
        ),

        heading("Fitness Function"),

        definition(
            "Fitness Function",
            "A function that evaluates the quality of a candidate solution and assigns it a numerical fitness score. The fitness function guides the evolutionary search by determining which individuals are more likely to survive and reproduce. It is problem-specific and is often the most critical component of a GA."
        ),

        heading("Designing a Fitness Function"),

        list([
            "It must accurately reflect the objective of the problem.",
            "It should be computationally efficient since it is called many times.",
            "It should provide a smooth gradient of fitness values to guide the search.",
            "For minimisation problems, convert to maximisation: fitness = 1 / (1 + cost) or fitness = max_cost - cost.",
            "It should penalise infeasible solutions (constraint handling).",
        ]),

        heading("Fitness Function Examples"),

        code(
            `Example 1: Maximise f(x) = x² where x ∈ [0, 31]
  Chromosome: 10110 → x = 22
  Fitness = 22² = 484

Example 2: Minimise travel distance in TSP
  Chromosome: [3, 1, 4, 5, 2]
  Cost = d(3,1) + d(1,4) + d(4,5) + d(5,2) + d(2,3) = 120
  Fitness = 1 / 120 = 0.00833 (higher is better)

Example 3: Knapsack Problem
  Maximise value of items without exceeding weight capacity.
  Fitness = total value if weight ≤ capacity, else 0 (penalty)`,
            "text",
            "Fitness function examples"
        ),

        heading("Fitness Scaling"),

        definition(
            "Fitness Scaling",
            "A technique that adjusts raw fitness values to prevent premature convergence (when one super-fit individual dominates selection) or stagnation (when all individuals have similar fitness)."
        ),

        table(
            ["Method", "Description"],
            [
                ["Linear Scaling", "f_scaled = a × f_raw + b (adjusts to maintain selection pressure)"],
                ["Sigma Scaling", "f_scaled = f_raw - (f_mean - c × σ) (adjusts based on population statistics)"],
                ["Rank-Based", "Individuals are ranked and fitness is assigned based on rank, not raw value"],
                ["Tournament Selection", "Avoids scaling by comparing small random groups directly"],
            ]
        ),

        note(
            "The fitness function is often the most problem-specific and hardest part to design in a GA. A poorly designed fitness function can lead to premature convergence, slow search or solutions that optimise the wrong objective.",
            "warning",
            "Critical Design Choice"
        ),

        keyPoints([
            "Encoding converts a solution into a chromosome format: binary, real-valued, permutation or tree.",
            "Binary encoding is the most traditional; real-valued is natural for continuous problems.",
            "Permutation encoding is used for ordering problems like TSP and scheduling.",
            "The fitness function evaluates solution quality and guides the evolutionary search.",
            "Fitness scaling prevents premature convergence by adjusting selection pressure.",
        ]),
    ],

    {
        summary:
            "Learn encoding types (binary, real-valued, permutation, tree) and how to design effective fitness functions with scaling techniques.",
        minutes: 12,
        tags: ["ai", "genetic-algorithms", "encoding", "fitness-function", "important"],

        mcqs: [
            mcq(
                "The most traditional encoding in GAs is:",
                ["Real-valued", "Permutation", "Binary", "Tree"],
                2,
                "Binary encoding, using strings of 0s and 1s, is the most traditional and common encoding."
            ),
            mcq(
                "Permutation encoding is best suited for:",
                ["Continuous optimisation", "Ordering problems like TSP", "Program evolution", "Binary classification"],
                1,
                "Permutation encoding represents orderings and is ideal for problems like the Travelling Salesman Problem."
            ),
            mcq(
                "Tree encoding is used in:",
                ["Standard GAs", "Genetic Programming", "Fuzzy systems", "Neural networks"],
                1,
                "Tree encoding is used in Genetic Programming to evolve programs and mathematical expressions."
            ),
            mcq(
                "The fitness function in a GA is:",
                ["The same for all problems", "Problem-specific and evaluates solution quality", "Used only for mutation", "A type of encoding"],
                1,
                "The fitness function is problem-specific and measures how good each candidate solution is."
            ),
            mcq(
                "For a minimisation problem, fitness can be computed as:",
                ["fitness = cost", "fitness = 1 / (1 + cost)", "fitness = cost²", "fitness = -cost always"],
                1,
                "Converting minimisation to maximisation: fitness = 1/(1+cost) ensures higher fitness for lower cost."
            ),
        ],

        questions: [
            qa(
                "Explain the four types of encoding used in Genetic Algorithms.",
                "Binary encoding represents each chromosome as a string of 0s and 1s, where each bit or group of bits represents a gene. It is simple and works well with standard operators but may not be natural for all problems. Real-valued encoding uses an array of real numbers, where each gene directly represents a continuous parameter. It is natural for engineering design and neural network weight optimisation. Permutation encoding represents a chromosome as an ordered list of integers, ideal for ordering problems like the Travelling Salesman Problem where the chromosome [3,1,4,5,2] represents the order of visiting cities. Tree encoding represents a chromosome as a tree structure and is used in Genetic Programming to evolve computer programs or mathematical expressions.",
                5
            ),
            qa(
                "What is a fitness function? Explain its importance and design considerations.",
                "A fitness function is a problem-specific function that evaluates the quality of a candidate solution and assigns it a numerical score. It is the most critical component of a GA because it guides the entire evolutionary search by determining which individuals are selected for reproduction. Design considerations include: it must accurately reflect the problem's objective, it should be computationally efficient since it is called thousands of times, it should provide a smooth gradient of fitness values to guide the search effectively, for minimisation problems it must be converted to maximisation using formulas like fitness = 1/(1+cost), and it should handle constraints by penalising infeasible solutions. A poorly designed fitness function can lead to premature convergence or solutions that optimise the wrong objective.",
                5
            ),
            qa(
                "What is fitness scaling and why is it needed?",
                "Fitness scaling adjusts raw fitness values to maintain appropriate selection pressure throughout the GA run. It is needed for two reasons. First, early in the run, a single super-fit individual may dominate selection and cause premature convergence, where the population quickly becomes homogeneous around a suboptimal solution. Scaling reduces the dominance of such individuals. Second, later in the run, all individuals may have very similar fitness values, making selection nearly random and slowing progress. Scaling amplifies small differences to maintain selection pressure. Methods include linear scaling (f_scaled = a × f_raw + b), sigma scaling (adjusting based on population mean and standard deviation), and rank-based methods where fitness is assigned based on an individual's rank rather than its raw value.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — Selection Methods
========================================================= */

const selectionMethods = createTopic(
    "selection-methods",
    "Selection Methods",

    [
        definition(
            "Selection",
            "The process of choosing individuals from the current population to serve as parents for producing offspring. Selection is biased towards fitter individuals, implementing the principle of 'survival of the fittest', while maintaining enough diversity to avoid premature convergence."
        ),

        text(
            "Selection is the first genetic operator applied in each generation. It determines which individuals get to reproduce and pass their genetic material to the next generation. The balance between exploitation (selecting the best) and exploration (maintaining diversity) is crucial."
        ),

        heading("1. Roulette Wheel Selection (Fitness-Proportionate Selection)"),

        definition(
            "Roulette Wheel Selection",
            "A selection method where each individual is assigned a slice of a roulette wheel proportional to its fitness. A random spin of the wheel determines which individual is selected. Fitter individuals have larger slices and are more likely to be selected."
        ),

        code(
            `Example:
  Individual   Fitness   Selection Probability   Wheel Slice
  A            10        10/40 = 0.25            25%
  B            20        20/40 = 0.50            50%
  C            5         5/40  = 0.125           12.5%
  D            5         5/40  = 0.125           12.5%
  Total        40        1.0                     100%

  Roulette Wheel:
  |AAAA|BBBBBBBB|CC|DD|
  ↑ Random spin lands here → B is selected

  Probability of selection = Fitness(i) / Σ Fitness(all)

  Algorithm:
  1. Calculate total fitness of population
  2. Generate a random number r between 0 and total fitness
  3. Iterate through individuals, accumulating fitness
  4. Select the individual whose cumulative fitness exceeds r`,
            "text",
            "Roulette wheel selection"
        ),

        heading("2. Tournament Selection"),

        definition(
            "Tournament Selection",
            "A selection method where k individuals are randomly chosen from the population, and the one with the highest fitness among them is selected as a parent. The tournament size k controls selection pressure."
        ),

        code(
            `Example (Tournament size k = 3):
  Population: A(10), B(20), C(5), D(15), E(8)

  Tournament 1: Randomly pick {A, D, C}
    Fitnesses: A=10, D=15, C=5
    Winner: D (highest fitness = 15)

  Tournament 2: Randomly pick {B, E, A}
    Fitnesses: B=20, E=8, A=10
    Winner: B (highest fitness = 20)

  Parents selected: D and B

  Effect of tournament size k:
    k = 1 → Random selection (no pressure)
    k = 2 → Moderate pressure
    k = population size → Always select the best (maximum pressure)`,
            "text",
            "Tournament selection"
        ),

        heading("3. Rank-Based Selection"),

        definition(
            "Rank-Based Selection",
            "Individuals are sorted by fitness and assigned selection probabilities based on their rank rather than their raw fitness value. This prevents super-fit individuals from dominating early in the search."
        ),

        code(
            `Example:
  Individual   Fitness   Rank   Selection Probability
  B            20        1      Highest
  D            15        2      Second
  A            10        3      Third
  C            5         4      Fourth
  E            5         4      Fourth (tied)

  Probability is based on rank, not the actual fitness values.
  Even if B's fitness were 1000 instead of 20, its rank
  would still be 1, preventing it from dominating selection.`,
            "text",
            "Rank-based selection"
        ),

        heading("4. Elitism"),

        definition(
            "Elitism",
            "A strategy where the best individual(s) from the current generation are copied directly to the next generation without modification. This guarantees that the best solution found so far is never lost."
        ),

        note(
            "Elitism is almost always used in practice because it guarantees monotonic improvement — the best fitness in the population never decreases from one generation to the next. Typically, 1-5% of the population is preserved as elites.",
            "tip",
            "Best Practice"
        ),

        heading("5. Stochastic Universal Sampling (SUS)"),

        definition(
            "SUS",
            "An improvement over roulette wheel selection that uses multiple equally spaced pointers on the roulette wheel instead of spinning the wheel multiple times. It provides zero bias and minimum spread."
        ),

        heading("Comparison of Selection Methods"),

        table(
            ["Method", "Selection Pressure", "Diversity", "Computational Cost", "Common Use"],
            [
                ["Roulette Wheel", "Proportional to fitness", "Moderate", "O(n)", "Classic GAs"],
                ["Tournament", "Controlled by k", "Good", "O(k)", "Most popular in practice"],
                ["Rank-Based", "Controlled by ranking scheme", "Good", "O(n log n) for sorting", "When fitness varies widely"],
                ["Elitism", "Maximum (best always survives)", "Reduces diversity", "O(1)", "Used with other methods"],
                ["SUS", "Proportional to fitness", "Better than roulette", "O(n)", "When low bias is needed"],
            ]
        ),

        heading("Selection Pressure"),

        definition(
            "Selection Pressure",
            "The degree to which the selection method favours fitter individuals. High selection pressure leads to fast convergence but risks premature convergence. Low selection pressure maintains diversity but slows progress."
        ),

        table(
            ["Pressure Level", "Effect", "Risk"],
            [
                ["Too High", "Fast convergence", "Premature convergence to local optima"],
                ["Balanced", "Steady improvement with diversity", "Optimal trade-off"],
                ["Too Low", "Maintains diversity", "Slow convergence, almost random search"],
            ]
        ),

        keyPoints([
            "Selection chooses parents for reproduction, biased towards fitter individuals.",
            "Roulette wheel selection assigns probability proportional to fitness.",
            "Tournament selection picks the best from k randomly chosen individuals.",
            "Rank-based selection uses rank instead of raw fitness to prevent dominance.",
            "Elitism preserves the best individuals across generations to guarantee improvement.",
        ]),
    ],

    {
        summary:
            "Master selection methods: roulette wheel, tournament, rank-based, elitism and SUS, and understand selection pressure.",
        minutes: 12,
        tags: ["ai", "genetic-algorithms", "selection", "roulette-wheel", "tournament", "important"],

        mcqs: [
            mcq(
                "In roulette wheel selection, the probability of selecting an individual is:",
                ["Equal for all", "Proportional to its fitness", "Based on its rank", "Random"],
                1,
                "Each individual's probability is proportional to its fitness divided by the total fitness."
            ),
            mcq(
                "In tournament selection with k=1, the selection is equivalent to:",
                ["Elitism", "Random selection", "Roulette wheel", "Rank-based"],
                1,
                "With tournament size 1, a single random individual is chosen, making it pure random selection."
            ),
            mcq(
                "Elitism in a GA ensures that:",
                ["All individuals survive", "The best solution is never lost", "Mutation is disabled", "Crossover is skipped"],
                1,
                "Elitism copies the best individual(s) directly to the next generation, guaranteeing they are not lost."
            ),
            mcq(
                "Rank-based selection prevents:",
                ["Mutation", "Crossover", "Super-fit individuals from dominating selection", "Elitism"],
                2,
                "By using rank instead of raw fitness, even extremely fit individuals cannot dominate selection."
            ),
            mcq(
                "High selection pressure leads to:",
                ["Maximum diversity", "Fast but potentially premature convergence", "Random search", "Slow convergence"],
                1,
                "High pressure converges quickly but risks premature convergence to suboptimal solutions."
            ),
        ],

        questions: [
            qa(
                "Explain roulette wheel selection with an example.",
                "Roulette wheel selection assigns each individual a slice of a virtual roulette wheel proportional to its fitness. For example, if four individuals have fitness values A=10, B=20, C=5, D=5 (total=40), their selection probabilities are A=25%, B=50%, C=12.5%, D=12.5%. A random number between 0 and 40 is generated. If the number falls in B's range (10 to 30), B is selected. This means fitter individuals are more likely to be selected, but even less fit individuals have a chance. The advantage is simplicity and proportionality. The disadvantage is that a super-fit individual early in the run can dominate the wheel and cause premature convergence.",
                5
            ),
            qa(
                "Explain tournament selection and how tournament size affects selection pressure.",
                "Tournament selection randomly picks k individuals from the population and selects the one with the highest fitness among them as a parent. This process is repeated to select additional parents. The tournament size k controls selection pressure. When k=1, a single random individual is chosen, resulting in no selection pressure (pure random selection). When k=2, there is moderate pressure because the better of two random individuals is chosen. As k increases, selection pressure increases because the winner is chosen from a larger pool, making it more likely to be a very fit individual. When k equals the population size, the single best individual is always selected (maximum pressure). Tournament selection is the most popular method in practice because it is simple, efficient and the pressure is easily tunable.",
                5
            ),
            qa(
                "What is elitism and why is it important in GAs?",
                "Elitism is a strategy where the best individual or top few individuals from the current generation are copied directly into the next generation without undergoing crossover or mutation. This guarantees that the best solution found so far is never lost due to the stochastic nature of crossover and mutation. Elitism is important because it ensures monotonic improvement — the best fitness in the population never decreases from one generation to the next. Without elitism, there is a chance that the best individual could be destroyed by crossover or mutation and lost forever. In practice, 1-5% of the population is typically preserved as elites. However, too much elitism reduces diversity and can lead to premature convergence.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — Crossover and Mutation Operators
========================================================= */

const crossoverAndMutation = createTopic(
    "crossover-and-mutation-operators",
    "Crossover and Mutation Operators",

    [
        definition(
            "Crossover (Recombination)",
            "A genetic operator that combines the genetic material of two parent chromosomes to produce one or more offspring. Crossover is the primary mechanism for exploring the search space by combining good features from different parents."
        ),

        definition(
            "Mutation",
            "A genetic operator that randomly alters one or more genes in a chromosome. Mutation introduces new genetic material into the population, maintaining diversity and preventing premature convergence."
        ),

        heading("Crossover Operators for Binary Encoding"),

        heading("1. Single-Point Crossover"),

        code(
            `A random crossover point is chosen, and the segments
      after that point are swapped between two parents.

  Parent 1:  1 0 1 | 1 0 0 1
  Parent 2:  0 1 1 | 0 1 1 0
                  ↑ crossover point (after position 3)

  Offspring 1: 1 0 1 | 0 1 1 0
  Offspring 2: 0 1 1 | 1 0 0 1`,
            "text",
            "Single-point crossover"
        ),

        heading("2. Two-Point Crossover"),

        code(
            `Two random crossover points are chosen, and the
      segment between them is swapped.

  Parent 1:  1 0 | 1 1 0 | 0 1
  Parent 2:  0 1 | 0 0 1 | 1 0
                  ↑       ↑

  Offspring 1: 1 0 | 0 0 1 | 0 1
  Offspring 2: 0 1 | 1 1 0 | 1 0`,
            "text",
            "Two-point crossover"
        ),

        heading("3. Uniform Crossover"),

        code(
            `Each gene is independently chosen from either parent
      with equal probability (using a random mask).

  Parent 1:  1 0 1 1 0 0 1
  Parent 2:  0 1 0 0 1 1 0
  Mask:      P P P P P P P  (P1 or P2 randomly)
             1 2 1 2 2 1 2

  Offspring: 1 1 1 0 1 0 0`,
            "text",
            "Uniform crossover"
        ),

        heading("Crossover for Permutation Encoding"),

        heading("4. Order Crossover (OX)"),

        code(
            `Used for permutation encoding (e.g., TSP).
      Preserves relative order from one parent.

  Parent 1:  [3 1 | 4 5 2 | 6 7]
  Parent 2:  [5 2 | 1 6 3 | 7 4]
                   ↑       ↑

  Step 1: Copy segment from Parent 1: [_ _ | 4 5 2 | _ _]
  Step 2: Fill remaining from Parent 2 in order,
          skipping values already present:
          [1 6 | 4 5 2 | 7 3]

  Offspring: [1 6 4 5 2 7 3]  (valid permutation!)`,
            "text",
            "Order crossover for permutations"
        ),

        heading("Crossover for Real-Valued Encoding"),

        heading("5. Arithmetic Crossover"),

        code(
            `Offspring is a weighted average of parents.

  Parent 1: [0.4, 1.2, -0.5]
  Parent 2: [0.8, 0.6,  0.3]
  α = 0.5

  Offspring = α × P1 + (1-α) × P2
  = [0.5×0.4 + 0.5×0.8, 0.5×1.2 + 0.5×0.6, 0.5×(-0.5) + 0.5×0.3]
  = [0.6, 0.9, -0.1]`,
            "text",
            "Arithmetic crossover"
        ),

        heading("Crossover Probability"),

        definition(
            "Crossover Probability (pc)",
            "The probability that crossover will be applied to a pair of parents. Typically set between 0.6 and 0.9. If crossover is not applied, the parents are copied to the offspring unchanged."
        ),

        heading("Mutation Operators"),

        heading("1. Bit-Flip Mutation (Binary)"),

        code(
            `Each bit is flipped with a small probability (mutation rate).

  Original:  1 0 1 1 0 0 1
  Mutated:   1 0 1 0 0 0 1
                   ↑ (bit 4 flipped)

  Mutation rate: typically 0.001 to 0.01 per bit`,
            "text",
            "Bit-flip mutation"
        ),

        heading("2. Gaussian Mutation (Real-Valued)"),

        code(
            `A small random value drawn from a Gaussian distribution
      is added to each gene.

  Original:  [0.4, 1.2, -0.5]
  Gaussian noise: [0.02, -0.1, 0.05]
  Mutated:   [0.42, 1.1, -0.45]`,
            "text",
            "Gaussian mutation"
        ),

        heading("3. Swap Mutation (Permutation)"),

        code(
            `Two random positions are chosen and their values swapped.

  Original:  [3, 1, 4, 5, 2]
  Swap positions 2 and 4:
  Mutated:   [3, 5, 4, 1, 2]

  This always produces a valid permutation.`,
            "text",
            "Swap mutation for permutations"
        ),

        heading("Mutation Probability"),

        definition(
            "Mutation Rate (pm)",
            "The probability that a gene will be mutated. Typically set very low (0.001 to 0.01 per gene). Too high a mutation rate turns the GA into a random search; too low leads to loss of diversity."
        ),

        heading("Crossover versus Mutation"),

        table(
            ["Aspect", "Crossover", "Mutation"],
            [
                ["Purpose", "Combine good features from parents (exploitation)", "Introduce new genetic material (exploration)"],
                ["Probability", "High (0.6–0.9)", "Low (0.001–0.01 per gene)"],
                ["Effect", "Large changes by recombining building blocks", "Small random changes"],
                ["Role", "Primary search operator", "Background operator for diversity"],
                ["Without it", "No recombination, only mutation-based search", "Premature convergence, loss of diversity"],
            ]
        ),

        note(
            "Crossover and mutation work together: crossover exploits existing good solutions by combining them, while mutation explores new areas of the search space. The balance between exploitation (crossover) and exploration (mutation) is key to GA performance.",
            "exam",
            "Frequently Asked"
        ),

        keyPoints([
            "Crossover combines genetic material from two parents to produce offspring.",
            "Single-point, two-point and uniform crossover are used for binary encoding.",
            "Order crossover (OX) preserves valid permutations for ordering problems.",
            "Mutation introduces random changes to maintain diversity and prevent premature convergence.",
            "Crossover probability is high (0.6–0.9); mutation rate is low (0.001–0.01 per gene).",
        ]),
    ],

    {
        summary:
            "Master crossover operators (single-point, two-point, uniform, order, arithmetic) and mutation operators (bit-flip, Gaussian, swap) with their probabilities.",
        minutes: 13,
        tags: ["ai", "genetic-algorithms", "crossover", "mutation", "important"],

        mcqs: [
            mcq(
                "Crossover in a GA is primarily responsible for:",
                ["Introducing random diversity", "Combining good features from parents", "Evaluating fitness", "Selecting parents"],
                1,
                "Crossover combines genetic material from two parents to exploit good features."
            ),
            mcq(
                "In single-point crossover, the number of crossover points is:",
                ["0", "1", "2", "Random"],
                1,
                "Single-point crossover uses exactly one randomly chosen crossover point."
            ),
            mcq(
                "Order crossover (OX) is designed for:",
                ["Binary encoding", "Real-valued encoding", "Permutation encoding", "Tree encoding"],
                2,
                "OX is specifically designed for permutation encoding to produce valid permutations."
            ),
            mcq(
                "The typical mutation rate per gene is:",
                ["0.5 to 0.9", "0.1 to 0.3", "0.001 to 0.01", "1.0"],
                2,
                "Mutation rate is typically very low, between 0.001 and 0.01 per gene."
            ),
            mcq(
                "If the mutation rate is too high, the GA behaves like:",
                ["Hill climbing", "A random search", "Gradient descent", "An expert system"],
                1,
                "Excessive mutation destroys good solutions faster than they can be combined, turning the GA into a random search."
            ),
            mcq(
                "Swap mutation is used with which encoding?",
                ["Binary", "Real-valued", "Permutation", "Tree"],
                2,
                "Swap mutation exchanges two positions in a permutation, always producing a valid result."
            ),
        ],

        questions: [
            qa(
                "Explain single-point, two-point and uniform crossover with examples.",
                "Single-point crossover selects one random position and swaps the segments after that point between two parents. For example, parents 101|1001 and 011|0110 with crossover after position 3 produce offspring 101|0110 and 011|1001. Two-point crossover selects two random positions and swaps the segment between them. For parents 10|110|01 and 01|001|10, the middle segment is swapped to produce 10|001|01 and 01|110|10. Uniform crossover uses a random mask to independently choose each gene from either parent with equal probability. For parents 1011001 and 0100110 with mask P1,P2,P1,P2,P2,P1,P2, the offspring is 1110100. Single-point preserves large building blocks, two-point preserves middle segments, and uniform provides maximum mixing.",
                5
            ),
            qa(
                "What is the role of mutation in a GA? Explain bit-flip and swap mutation.",
                "Mutation randomly alters genes in a chromosome to introduce new genetic material into the population. Its primary role is to maintain genetic diversity and prevent premature convergence by exploring areas of the search space that crossover alone might not reach. Bit-flip mutation is used with binary encoding, where each bit is independently flipped (0→1 or 1→0) with a small probability, typically 0.001 to 0.01 per bit. For example, 1011001 might become 1010001 if bit 4 is flipped. Swap mutation is used with permutation encoding, where two random positions are chosen and their values are exchanged. For example, [3,1,4,5,2] becomes [3,5,4,1,2] after swapping positions 2 and 4. This always produces a valid permutation.",
                5
            ),
            qa(
                "Compare the roles of crossover and mutation in a GA.",
                "Crossover is the primary search operator responsible for exploitation — it combines good features (building blocks) from two parent solutions to create potentially better offspring. It operates with high probability (0.6–0.9) and makes large changes by recombining existing genetic material. Mutation is a background operator responsible for exploration — it introduces small random changes to individual genes, bringing new genetic material into the population. It operates with low probability (0.001–0.01 per gene) to avoid destroying good solutions. Without crossover, the GA would rely solely on mutation, making it essentially a random search. Without mutation, the population would lose diversity and converge prematurely to a local optimum. The balance between crossover (exploitation) and mutation (exploration) is critical for effective GA performance.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 5 — GA Parameters, Termination and Applications
========================================================= */

const gaParametersAndTermination = createTopic(
    "ga-parameters-termination-and-applications",
    "GA Parameters, Termination and Applications",

    [
        text(
            "The performance of a Genetic Algorithm depends heavily on the choice of its parameters. Tuning these parameters is often problem-specific and may require experimentation. Understanding termination criteria and practical applications completes the study of GAs."
        ),

        heading("Key GA Parameters"),

        table(
            ["Parameter", "Typical Range", "Effect of Too Low", "Effect of Too High"],
            [
                ["Population Size", "50–500", "Poor diversity, premature convergence", "Slow evaluation, high memory usage"],
                ["Crossover Probability (pc)", "0.6–0.9", "Slow exploration, too much copying", "Good solutions disrupted too often"],
                ["Mutation Rate (pm)", "0.001–0.01 per gene", "Loss of diversity, premature convergence", "Random search, good solutions destroyed"],
                ["Tournament Size (k)", "2–7", "Low selection pressure, slow convergence", "High pressure, premature convergence"],
                ["Number of Generations", "100–1000+", "May not converge", "Wasted computation after convergence"],
                ["Elitism Count", "1–5% of population", "Best solution may be lost", "Reduced diversity"],
            ]
        ),

        heading("Parameter Tuning Guidelines"),

        list([
            "Start with commonly used default values and adjust based on results.",
            "Population size should be large enough to maintain diversity but small enough for reasonable computation time.",
            "Crossover probability should be high (0.7–0.9) to encourage recombination.",
            "Mutation rate should be low (0.001–0.01) — the inverse of the chromosome length is a common starting point.",
            "Use elitism (1–5%) to guarantee the best solution is preserved.",
            "Tournament selection with k=3 to k=5 is a good default choice.",
            "Adaptive parameters that change during the run can improve performance.",
        ]),

        heading("Termination Criteria"),

        table(
            ["Criterion", "Description", "When to Use"],
            [
                ["Maximum Generations", "Stop after a fixed number of generations", "When computation time is limited"],
                ["Fitness Threshold", "Stop when a solution reaches a target fitness", "When the desired quality is known"],
                ["No Improvement", "Stop if the best fitness hasn't improved for N generations", "Most common practical criterion"],
                ["Convergence", "Stop when population diversity falls below a threshold", "When the population has converged"],
                ["Time Limit", "Stop after a maximum wall-clock time", "Real-time or deadline-constrained applications"],
                ["Combination", "Use multiple criteria (e.g., max generations OR no improvement)", "Robust approach for most problems"],
            ]
        ),

        code(
            `Common Termination Strategy:

  STOP IF:
    - Maximum generations reached (e.g., 500), OR
    - Best fitness hasn't improved for 50 generations, OR
    - Fitness reaches target value (e.g., 99% accuracy), OR
    - Time limit exceeded (e.g., 1 hour)

  This combination ensures the algorithm doesn't run
  forever while still giving it enough time to converge.`,
            "text",
            "Termination strategy"
        ),

        heading("Detailed Application: Travelling Salesman Problem"),

        definition(
            "TSP",
            "Given a list of cities and distances between them, find the shortest possible route that visits each city exactly once and returns to the starting city. TSP is NP-hard and is a classic benchmark for GAs."
        ),

        code(
            `GA for TSP:

  Encoding: Permutation [3, 1, 4, 5, 2]
  Fitness: 1 / total_distance (minimise distance → maximise fitness)
  Selection: Tournament (k=3)
  Crossover: Order Crossover (OX) to maintain valid permutations
  Mutation: Swap mutation (swap two cities)
  Elitism: Keep top 2 individuals

  Example run:
    Generation 1: Best distance = 520
    Generation 10: Best distance = 380
    Generation 50: Best distance = 290
    Generation 100: Best distance = 245
    Generation 200: Best distance = 230 (converged)`,
            "text",
            "GA applied to TSP"
        ),

        heading("Detailed Application: Feature Selection in ML"),

        code(
            `GA for Feature Selection:

  Problem: Select the best subset of features for a classifier.

  Encoding: Binary string of length n (number of features)
    1 = feature included, 0 = feature excluded
    Example: [1, 0, 1, 1, 0, 0, 1] means use features 1, 3, 4, 7

  Fitness: Classification accuracy using selected features
    (optionally penalise for using too many features)
    fitness = accuracy - λ × (number of selected features / total)

  Selection: Tournament
  Crossover: Uniform crossover
  Mutation: Bit-flip mutation

  Result: GA finds a small subset of features that achieves
  accuracy comparable to or better than using all features.`,
            "text",
            "GA for feature selection"
        ),

        heading("Advantages and Limitations of GAs"),

        table(
            ["Advantages", "Limitations"],
            [
                ["Can handle complex, non-linear search spaces", "No guarantee of finding the global optimum"],
                ["Do not require gradient information", "Computationally expensive (many fitness evaluations)"],
                ["Work with discrete, continuous and mixed variables", "Parameter tuning can be difficult"],
                ["Less likely to get trapped in local optima", "May converge prematurely without proper diversity"],
                ["Inherently parallel", "Not efficient for simple problems with known solutions"],
                ["Provide multiple good solutions", "Fitness function design is problem-specific and critical"],
                ["Robust to noisy objective functions", "Can be slow compared to specialised algorithms"],
            ]
        ),

        heading("GA Variants and Extensions"),

        table(
            ["Variant", "Key Feature"],
            [
                ["Genetic Programming (GP)", "Evolves computer programs represented as trees"],
                ["Evolution Strategies (ES)", "Focuses on real-valued optimisation with self-adaptive mutation"],
                ["Differential Evolution (DE)", "Uses vector differences for mutation; effective for continuous optimisation"],
                ["Memetic Algorithms", "Combines GA with local search (e.g., hill climbing) for refinement"],
                ["Multi-Objective GA (NSGA-II)", "Optimises multiple conflicting objectives simultaneously"],
                ["Parallel GAs", "Distributes the population across multiple processors"],
            ]
        ),

        note(
            "In practice, GAs are often combined with local search methods to form Memetic Algorithms. The GA provides global exploration while the local search refines individual solutions, often achieving better results than either method alone.",
            "tip",
            "Practical Tip"
        ),

        keyPoints([
            "Key GA parameters include population size, crossover probability, mutation rate and tournament size.",
            "Common termination criteria include maximum generations, fitness threshold and no improvement for N generations.",
            "GAs are applied to TSP, feature selection, scheduling, engineering design and many other domains.",
            "GAs are robust and versatile but computationally expensive and do not guarantee global optimality.",
            "Variants like Genetic Programming, Differential Evolution and Memetic Algorithms extend the basic GA.",
        ]),
    ],

    {
        summary:
            "Learn GA parameter tuning, termination criteria, detailed applications (TSP, feature selection), limitations and GA variants.",
        minutes: 12,
        tags: ["ai", "genetic-algorithms", "parameters", "termination", "tsp", "applications", "important"],

        mcqs: [
            mcq(
                "A common starting point for mutation rate is:",
                ["0.5", "0.1", "1 / chromosome length", "1.0"],
                2,
                "A common heuristic is to set the mutation rate to the inverse of the chromosome length."
            ),
            mcq(
                "Which termination criterion stops the GA when the best fitness hasn't improved for N generations?",
                ["Maximum generations", "Fitness threshold", "No improvement", "Time limit"],
                2,
                "The 'no improvement' criterion stops when the best fitness remains unchanged for N consecutive generations."
            ),
            mcq(
                "For the TSP, the appropriate encoding is:",
                ["Binary", "Real-valued", "Permutation", "Tree"],
                2,
                "TSP requires visiting cities in a specific order, making permutation encoding the natural choice."
            ),
            mcq(
                "Genetic Programming (GP) evolves:",
                ["Binary strings", "Neural network weights", "Computer programs represented as trees", "Fuzzy rules"],
                2,
                "GP evolves computer programs or mathematical expressions represented as tree structures."
            ),
            mcq(
                "A Memetic Algorithm combines a GA with:",
                ["Fuzzy logic", "Local search", "Neural networks", "Decision trees"],
                1,
                "Memetic Algorithms combine the global exploration of GAs with local search for refinement."
            ),
            mcq(
                "Which is a limitation of Genetic Algorithms?",
                ["They require gradient information", "They cannot handle discrete variables", "They do not guarantee finding the global optimum", "They only work for linear problems"],
                2,
                "GAs are heuristic methods and do not guarantee finding the globally optimal solution."
            ),
        ],

        questions: [
            qa(
                "Explain the key parameters of a GA and their effects.",
                "Population size determines the number of candidate solutions evaluated each generation. A small population (below 50) risks poor diversity and premature convergence, while a very large population (above 500) increases computation time. Crossover probability (typically 0.6–0.9) controls how often parents are recombined; too low slows exploration, too high disrupts good solutions. Mutation rate (typically 0.001–0.01 per gene) controls random changes; too low loses diversity, too high turns the GA into a random search. Tournament size (typically 2–7) controls selection pressure; larger tournaments increase pressure and speed convergence but risk premature convergence. Elitism count (1–5% of population) preserves the best solutions; too much elitism reduces diversity. These parameters interact and often require problem-specific tuning.",
                5
            ),
            qa(
                "Explain how a GA can be applied to the Travelling Salesman Problem.",
                "For TSP, each chromosome uses permutation encoding where the gene sequence represents the order of visiting cities, for example [3,1,4,5,2] means visit city 3 first, then 1, 4, 5 and 2. The fitness function computes the total distance of the route and converts it to a maximisation problem using fitness = 1/total_distance. Tournament selection with k=3 chooses parents. Order Crossover (OX) is used because standard crossover would produce invalid permutations with duplicate or missing cities; OX copies a segment from one parent and fills the remaining positions from the other parent in order, always producing a valid permutation. Swap mutation exchanges two random cities to maintain diversity. Elitism preserves the top 2 individuals. The GA evolves the population over hundreds of generations, progressively finding shorter routes.",
                5
            ),
            qa(
                "What are the advantages and limitations of Genetic Algorithms?",
                "The advantages include the ability to handle complex, non-linear, multi-modal search spaces where traditional methods fail. GAs do not require gradient information, making them applicable to discontinuous, noisy or non-differentiable objective functions. They work with discrete, continuous and mixed variable types. Their population-based approach makes them less likely to get trapped in local optima compared to point-based methods. They are inherently parallel and provide multiple good solutions rather than a single optimum. The limitations include no guarantee of finding the global optimum, high computational cost due to many fitness evaluations, difficulty in parameter tuning, risk of premature convergence without proper diversity maintenance, inefficiency for simple problems where specialised algorithms exist, and the challenge of designing a good fitness function for each specific problem.",
                5
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit4Topics = [
    introToGeneticAlgorithms,
    encodingAndFitness,
    selectionMethods,
    crossoverAndMutation,
    gaParametersAndTermination,
];