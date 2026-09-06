/* =========================================================
   MSc-IT • SEM 1 • Artificial Intelligence
   UNIT 2 — Fuzzy Logic
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
   TOPIC 1 — Introduction to Fuzzy Logic and Fuzzy Sets
========================================================= */

const introToFuzzyLogic = createTopic(
    "introduction-to-fuzzy-logic-and-fuzzy-sets",
    "Introduction to Fuzzy Logic and Fuzzy Sets",

    [
        definition(
            "Fuzzy Logic",
            "A form of many-valued logic that deals with reasoning that is approximate rather than fixed and exact. Unlike classical (Boolean) logic where variables are either true (1) or false (0), fuzzy logic allows variables to have a truth value anywhere between 0 and 1."
        ),

        definition(
            "Fuzzy Set",
            "A set whose elements have degrees of membership. In classical set theory, an element either belongs to a set (membership = 1) or does not belong (membership = 0). In a fuzzy set, an element can partially belong to a set with a membership value between 0 and 1."
        ),

        text(
            "Fuzzy logic was introduced by Lotfi A. Zadeh in 1965 at the University of California, Berkeley. Zadeh observed that human reasoning does not work in precise binary terms but rather in vague, imprecise terms like 'somewhat hot', 'fairly tall' or 'slightly expensive'. Fuzzy logic provides a mathematical framework to model and reason with such linguistic imprecision."
        ),

        heading("Why Fuzzy Logic?"),

        text(
            "The real world is full of ambiguity and imprecision. Classical logic and set theory are inadequate for handling concepts like 'warm', 'fast', 'old' or 'tall' because these concepts do not have sharp boundaries. Fuzzy logic bridges the gap between the precision of mathematics and the imprecision of human language and reasoning."
        ),

        list([
            "Human reasoning is inherently approximate, not binary.",
            "Many real-world concepts have vague boundaries (e.g., 'tall', 'hot', 'fast').",
            "Classical logic cannot model partial truth or degrees of membership.",
            "Fuzzy logic enables smooth, gradual transitions between categories.",
            "It is widely used in control systems, decision making and pattern recognition.",
        ]),

        heading("Crisp Set versus Fuzzy Set"),

        table(
            ["Aspect", "Crisp (Classical) Set", "Fuzzy Set"],
            [
                ["Membership", "Binary: 0 or 1", "Continuous: any value in [0, 1]"],
                ["Boundary", "Sharp and well-defined", "Gradual and vague"],
                ["Example", "Temperature > 30°C is 'hot'", "30°C is 'somewhat hot' with membership 0.6"],
                ["Logic", "Boolean (True / False)", "Multi-valued (degree of truth)"],
                ["Proposed by", "Georg Cantor (1874)", "Lotfi Zadeh (1965)"],
                ["Representation", "A = {x | x satisfies condition}", "A = {(x, μA(x)) | x ∈ X}"],
            ]
        ),

        heading("Example: Temperature Classification"),

        code(
            `Classical (Crisp) Approach:
  IF temperature >= 30 THEN "Hot"
  IF temperature < 30 THEN "Not Hot"

  Problem: 29.9°C is "Not Hot" and 30.0°C is "Hot"
  This sharp boundary is unrealistic.

Fuzzy Approach:
  Temperature 25°C → Cold: 0.0, Warm: 0.7, Hot: 0.2
  Temperature 30°C → Cold: 0.0, Warm: 0.4, Hot: 0.6
  Temperature 35°C → Cold: 0.0, Warm: 0.0, Hot: 1.0

  Smooth transitions between categories.
  A temperature can be "somewhat warm" and "slightly hot" at the same time.`,
            "text",
            "Crisp vs fuzzy temperature classification"
        ),

        heading("Membership Function"),

        definition(
            "Membership Function (μ)",
            "A function that defines how each element in the universe of discourse is mapped to a membership value between 0 and 1. It quantifies the degree to which an element belongs to a fuzzy set."
        ),

        code(
            `Notation:
  A fuzzy set A in universe X is defined as:
  A = {(x, μA(x)) | x ∈ X}

  where μA(x) is the membership function:
  μA : X → [0, 1]

  μA(x) = 1.0  → x fully belongs to A
  μA(x) = 0.0  → x does not belong to A at all
  μA(x) = 0.7  → x partially belongs to A with degree 0.7

Example:
  Fuzzy set "Tall" for heights in cm:
  μTall(150) = 0.0   (not tall at all)
  μTall(165) = 0.3   (somewhat tall)
  μTall(175) = 0.7   (fairly tall)
  μTall(185) = 1.0   (definitely tall)`,
            "text",
            "Membership function notation and example"
        ),

        heading("Key Terminology"),

        table(
            ["Term", "Meaning"],
            [
                ["Universe of Discourse (X)", "The complete range of all possible values for a variable"],
                ["Linguistic Variable", "A variable whose values are words (e.g., Temperature = {Cold, Warm, Hot})"],
                ["Linguistic Value / Term", "A specific word value (e.g., 'Warm' is a linguistic value of Temperature)"],
                ["Membership Degree", "The value μA(x) ∈ [0, 1] indicating degree of belonging"],
                ["Support", "The set of all x where μA(x) > 0"],
                ["Core", "The set of all x where μA(x) = 1"],
                ["Crossover Point", "The point where μA(x) = 0.5"],
                ["α-cut (Alpha-cut)", "The crisp set of all x where μA(x) ≥ α"],
            ]
        ),

        heading("Applications of Fuzzy Logic"),

        table(
            ["Domain", "Application", "Example"],
            [
                ["Consumer Electronics", "Automatic control", "Washing machines, air conditioners, cameras"],
                ["Automotive", "Vehicle control", "Anti-lock braking, automatic transmission"],
                ["Industrial", "Process control", "Cement kilns, chemical processes"],
                ["Medical", "Diagnosis and monitoring", "Anaesthesia control, blood pressure monitoring"],
                ["Finance", "Decision making", "Credit scoring, stock market analysis"],
                ["Robotics", "Navigation and control", "Obstacle avoidance, path planning"],
                ["Image Processing", "Enhancement and segmentation", "Edge detection, noise reduction"],
            ]
        ),

        note(
            "The first major commercial success of fuzzy logic was the Sendai Subway system in Japan (1987), which used fuzzy control for smooth acceleration and braking. Japanese companies like Matsushita (Panasonic) and Hitachi were early adopters of fuzzy logic in consumer products.",
            "tip",
            "Historical Note"
        ),

        keyPoints([
            "Fuzzy logic, introduced by Lotfi Zadeh in 1965, handles approximate reasoning with degrees of truth.",
            "A fuzzy set allows partial membership with values between 0 and 1, unlike crisp sets (0 or 1).",
            "The membership function μA(x) maps each element to its degree of membership in fuzzy set A.",
            "Fuzzy logic is ideal for modelling vague concepts like 'tall', 'hot', 'fast' and 'old'.",
            "Applications include consumer electronics, automotive control, industrial processes and medical systems.",
        ]),
    ],

    {
        summary:
            "Understand fuzzy logic, fuzzy sets, membership functions, key terminology and real-world applications.",
        minutes: 12,
        tags: ["ai", "fuzzy-logic", "fuzzy-sets", "membership-function", "important"],

        mcqs: [
            mcq(
                "Fuzzy logic was introduced by:",
                ["Alan Turing", "John McCarthy", "Lotfi Zadeh", "Claude Shannon"],
                2,
                "Lotfi A. Zadeh introduced fuzzy logic in 1965 at UC Berkeley."
            ),
            mcq(
                "In a fuzzy set, the membership value of an element can be:",
                ["Only 0 or 1", "Any integer", "Any real number between 0 and 1", "Only 0.5"],
                2,
                "Fuzzy set membership values range continuously from 0 to 1."
            ),
            mcq(
                "The core of a fuzzy set consists of all elements with membership:",
                ["Greater than 0", "Equal to 0.5", "Equal to 1", "Less than 1"],
                2,
                "The core is the set of all elements where the membership function equals 1."
            ),
            mcq(
                "A linguistic variable is:",
                ["A variable that stores text", "A variable whose values are words like 'hot' or 'cold'", "A programming language variable", "A Boolean variable"],
                1,
                "A linguistic variable takes words or phrases as values, such as Temperature = {Cold, Warm, Hot}."
            ),
            mcq(
                "The crossover point of a fuzzy set is where membership equals:",
                ["0", "0.5", "1", "0.75"],
                1,
                "The crossover point is where the membership function equals 0.5."
            ),
            mcq(
                "The first major commercial application of fuzzy logic was:",
                ["Siri", "The Sendai Subway system", "Deep Blue", "ChatGPT"],
                1,
                "The Sendai Subway in Japan (1987) used fuzzy control for smooth train operation."
            ),
        ],

        questions: [
            qa(
                "What is fuzzy logic? How does it differ from classical logic?",
                "Fuzzy logic is a form of many-valued logic introduced by Lotfi Zadeh in 1965 that deals with approximate reasoning rather than exact binary reasoning. In classical (Boolean) logic, a statement is either completely true (1) or completely false (0), and an element either belongs to a set or does not. In fuzzy logic, truth values and membership can range continuously between 0 and 1, allowing partial truth and partial membership. For example, in classical logic, 29°C might be classified as 'not hot', while in fuzzy logic, 29°C can be 'somewhat warm' with membership 0.6 and 'slightly hot' with membership 0.3 simultaneously. Fuzzy logic models the vagueness and imprecision inherent in human reasoning.",
                5
            ),
            qa(
                "Explain the concept of a fuzzy set with an example.",
                "A fuzzy set is a set whose elements have degrees of membership ranging from 0 to 1, unlike a classical set where membership is binary (0 or 1). It is defined as A = {(x, μA(x)) | x ∈ X}, where μA(x) is the membership function. For example, consider the fuzzy set 'Tall' for human heights. A person who is 150 cm tall might have μTall(150) = 0.0 (not tall at all), someone 165 cm might have μTall(165) = 0.3 (somewhat tall), someone 175 cm might have μTall(175) = 0.7 (fairly tall), and someone 185 cm might have μTall(185) = 1.0 (definitely tall). This gradual transition captures the vague nature of the concept 'tall' much better than a crisp boundary.",
                5
            ),
            qa(
                "Define the following terms: support, core, crossover point and alpha-cut.",
                "The support of a fuzzy set is the set of all elements in the universe where the membership value is greater than zero — it defines the range of elements that have any degree of membership. The core is the set of all elements where the membership value equals exactly 1 — these elements fully belong to the fuzzy set. The crossover point is the element where the membership value equals 0.5, representing the boundary between 'more in' and 'more out' of the set. An alpha-cut (α-cut) is a crisp set containing all elements whose membership value is greater than or equal to a specified threshold α. For example, the 0.7-cut of the 'Tall' fuzzy set includes only those heights with membership 0.7 or above.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — Membership Functions
========================================================= */

const membershipFunctions = createTopic(
    "membership-functions",
    "Membership Functions",

    [
        definition(
            "Membership Function",
            "A curve that defines how each point in the input space is mapped to a membership value between 0 and 1. The shape of the membership function determines how the fuzzy set represents a linguistic concept."
        ),

        text(
            "The choice of membership function shape is crucial in fuzzy system design. Different shapes capture different types of vagueness. The most commonly used shapes are triangular, trapezoidal, Gaussian and bell-shaped. The parameters of these functions are typically determined by domain experts or tuned through learning algorithms."
        ),

        heading("Common Membership Function Shapes"),

        heading("1. Triangular Membership Function"),

        definition(
            "Triangular MF",
            "The simplest membership function defined by three parameters (a, b, c) representing the left foot, peak and right foot of the triangle."
        ),

        code(
            `Triangular MF Formula:

         μ(x)
          1 |      /\
            |     /  \
            |    /    \
            |   /      \
          0 |--/--------\\---
            a  b    c   x

  μ(x) = 0           if x ≤ a
  μ(x) = (x-a)/(b-a) if a < x ≤ b
  μ(x) = (c-x)/(c-b) if b < x ≤ c
  μ(x) = 0           if x > c

  Parameters: a = left foot, b = peak, c = right foot

  Example: "Warm" temperature
  a = 20°C, b = 25°C, c = 30°C
  μWarm(22) = (22-20)/(25-20) = 0.4
  μWarm(25) = 1.0
  μWarm(28) = (30-28)/(30-25) = 0.4`,
            "text",
            "Triangular membership function"
        ),

        heading("2. Trapezoidal Membership Function"),

        definition(
            "Trapezoidal MF",
            "A membership function defined by four parameters (a, b, c, d) representing the left foot, left shoulder, right shoulder and right foot, forming a flat-topped trapezoid."
        ),

        code(
            `Trapezoidal MF Formula:

         μ(x)
          1 |    ______
            |   /      \
            |  /        \
            | /          \
          0 |/____________\\---
            a  b    c  d  x

  μ(x) = 0           if x ≤ a
  μ(x) = (x-a)/(b-a) if a < x ≤ b
  μ(x) = 1           if b < x ≤ c
  μ(x) = (d-x)/(d-c) if c < x ≤ d
  μ(x) = 0           if x > d

  Example: "Medium" speed
  a = 30, b = 40, c = 60, d = 70 km/h
  μMedium(35) = (35-30)/(40-30) = 0.5
  μMedium(50) = 1.0
  μMedium(65) = (70-65)/(70-60) = 0.5`,
            "text",
            "Trapezoidal membership function"
        ),

        heading("3. Gaussian Membership Function"),

        definition(
            "Gaussian MF",
            "A smooth, bell-shaped membership function defined by two parameters: the centre (c) and the width (σ, standard deviation)."
        ),

        code(
            `Gaussian MF Formula:

  μ(x) = e^(-(x-c)² / (2σ²))

         μ(x)
          1 |      .-''-.
            |    .'      '.
            |   /          \
            |  /            \
          0 |-/--------------\\--
                 c       x

  Parameters: c = centre, σ = spread (standard deviation)

  Example: "About 25°C"
  c = 25, σ = 3
  μ(25) = e^0 = 1.0
  μ(28) = e^(-9/18) = e^(-0.5) ≈ 0.607
  μ(31) = e^(-36/18) = e^(-2) ≈ 0.135`,
            "text",
            "Gaussian membership function"
        ),

        heading("4. Generalised Bell-Shaped Membership Function"),

        code(
            `Bell-Shaped MF Formula:

  μ(x) = 1 / (1 + |(x-c)/a|^(2b))

  Parameters:
    a = half-width of the curve
    b = controls the slope at the crossover points
    c = centre of the curve

  When b = 1, it becomes the Cauchy distribution.
  As b increases, the shape approaches a trapezoid.`,
            "text",
            "Bell-shaped membership function"
        ),

        heading("5. Sigmoid Membership Function"),

        code(
            `Sigmoid MF Formula:

  μ(x) = 1 / (1 + e^(-a(x-c)))

  Parameters:
    a = controls the slope (steepness)
    c = the crossover point (where μ = 0.5)

  Used for concepts like "tall" or "old" where membership
  increases monotonically from 0 to 1.`,
            "text",
            "Sigmoid membership function"
        ),

        heading("Comparison of Membership Functions"),

        table(
            ["MF Type", "Parameters", "Shape", "Smooth?", "Use Case"],
            [
                ["Triangular", "3 (a, b, c)", "Pointed triangle", "No (sharp peak)", "Simple, fast computation"],
                ["Trapezoidal", "4 (a, b, c, d)", "Flat-topped", "No (flat top)", "Concepts with a clear 'full membership' range"],
                ["Gaussian", "2 (c, σ)", "Smooth bell", "Yes", "Natural phenomena, smooth transitions"],
                ["Bell-shaped", "3 (a, b, c)", "Smooth bell", "Yes", "Adjustable smooth curves"],
                ["Sigmoid", "2 (a, c)", "S-curve", "Yes", "Monotonically increasing/decreasing concepts"],
            ]
        ),

        heading("Designing Membership Functions"),

        list([
            "Expert Knowledge — domain experts define the shapes and parameters based on experience.",
            "Data-Driven — parameters are learned from data using neural networks or optimisation algorithms.",
            "Uniform Partitioning — the universe is divided into equally spaced overlapping fuzzy sets.",
            "Heuristic — shapes are chosen based on the nature of the variable and computational requirements.",
        ]),

        note(
            "Triangular and trapezoidal membership functions are the most commonly used in practice because they are simple to define, computationally efficient and easy to interpret. Gaussian functions are preferred when smooth transitions are important, such as in neuro-fuzzy systems.",
            "tip",
            "Practical Choice"
        ),

        keyPoints([
            "Membership functions define how each input value maps to a degree of membership in [0, 1].",
            "Triangular MF uses 3 parameters (a, b, c) and is the simplest and most widely used.",
            "Trapezoidal MF uses 4 parameters and has a flat top for full membership over a range.",
            "Gaussian MF uses 2 parameters (centre and spread) and provides smooth transitions.",
            "The choice of MF shape depends on the application, domain knowledge and computational needs.",
        ]),
    ],

    {
        summary:
            "Learn the common membership function shapes: triangular, trapezoidal, Gaussian, bell-shaped and sigmoid, with their formulas and use cases.",
        minutes: 12,
        tags: ["ai", "fuzzy-logic", "membership-functions", "triangular", "gaussian", "important"],

        mcqs: [
            mcq(
                "A triangular membership function is defined by how many parameters?",
                ["2", "3", "4", "5"],
                1,
                "A triangular MF is defined by three parameters: left foot (a), peak (b) and right foot (c)."
            ),
            mcq(
                "Which membership function has a flat top where membership equals 1?",
                ["Triangular", "Gaussian", "Trapezoidal", "Sigmoid"],
                2,
                "The trapezoidal MF has a flat top between parameters b and c where membership is 1."
            ),
            mcq(
                "The Gaussian membership function is defined by:",
                ["Three parameters (a, b, c)", "Four parameters (a, b, c, d)", "Two parameters (centre and spread)", "One parameter (centre)"],
                2,
                "The Gaussian MF uses two parameters: centre (c) and spread/standard deviation (σ)."
            ),
            mcq(
                "Which MF is best for a concept like 'tall' that increases monotonically?",
                ["Triangular", "Trapezoidal", "Gaussian", "Sigmoid"],
                3,
                "The sigmoid MF is an S-curve that monotonically increases from 0 to 1."
            ),
            mcq(
                "The most commonly used membership functions in practice are:",
                ["Gaussian and sigmoid", "Triangular and trapezoidal", "Bell-shaped only", "Sigmoid only"],
                1,
                "Triangular and trapezoidal MFs are most common due to their simplicity and computational efficiency."
            ),
        ],

        questions: [
            qa(
                "Explain the triangular membership function with its formula and an example.",
                "The triangular membership function is the simplest and most widely used MF, defined by three parameters: a (left foot), b (peak) and c (right foot). The formula is: μ(x) = 0 if x ≤ a, μ(x) = (x-a)/(b-a) if a < x ≤ b, μ(x) = (c-x)/(c-b) if b < x ≤ c, and μ(x) = 0 if x > c. For example, to represent 'Warm' temperature with a=20, b=25, c=30: at 22°C, μ = (22-20)/(25-20) = 0.4; at 25°C, μ = 1.0 (peak); at 28°C, μ = (30-28)/(30-25) = 0.4. The triangular shape is computationally efficient and easy to interpret.",
                5
            ),
            qa(
                "Compare triangular, trapezoidal and Gaussian membership functions.",
                "The triangular MF uses three parameters (a, b, c) forming a pointed triangle. It is simple and fast to compute but has a sharp peak with no flat region of full membership. The trapezoidal MF uses four parameters (a, b, c, d) forming a flat-topped shape. It has a region between b and c where membership is exactly 1, making it suitable for concepts with a clear range of full membership. The Gaussian MF uses two parameters (centre c and spread σ) with the formula e^(-(x-c)²/(2σ²)). It provides a smooth, continuous curve without sharp edges, making it ideal for natural phenomena and neuro-fuzzy systems where differentiability is needed. Triangular and trapezoidal are preferred for simplicity; Gaussian is preferred for smoothness.",
                5
            ),
            qa(
                "What factors influence the choice of membership function shape?",
                "The choice depends on several factors. Domain expert knowledge is the primary factor — experts define shapes and parameters based on their understanding of the variable. The nature of the concept matters: concepts with sharp boundaries suit triangular MFs, concepts with a range of full membership suit trapezoidal MFs, and naturally distributed concepts suit Gaussian MFs. Computational efficiency is important in real-time systems, favouring triangular and trapezoidal MFs. Smoothness requirements in neuro-fuzzy systems favour Gaussian or bell-shaped MFs because they are differentiable. Data availability allows parameters to be learned from data using optimisation algorithms rather than defined manually.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — Fuzzy Set Operations
========================================================= */

const fuzzySetOperations = createTopic(
    "fuzzy-set-operations",
    "Fuzzy Set Operations",

    [
        text(
            "Just as classical sets have union, intersection and complement operations, fuzzy sets have corresponding operations. However, because membership values are continuous between 0 and 1, these operations are generalised using mathematical functions called t-norms, t-conorms and negation functions."
        ),

        heading("Classical versus Fuzzy Operations"),

        table(
            ["Operation", "Classical (Crisp)", "Fuzzy (Standard)"],
            [
                ["Union (OR)", "A ∪ B: max(μA, μB) → either 0 or 1", "μA∪B(x) = max(μA(x), μB(x))"],
                ["Intersection (AND)", "A ∩ B: min(μA, μB) → either 0 or 1", "μA∩B(x) = min(μA(x), μB(x))"],
                ["Complement (NOT)", "A': 1 - μA → either 0 or 1", "μA'(x) = 1 - μA(x)"],
            ]
        ),

        heading("Standard Fuzzy Operations (Zadeh Operators)"),

        definition(
            "Zadeh Operators",
            "The original fuzzy set operations proposed by Lotfi Zadeh: union uses max, intersection uses min, and complement uses 1 minus the membership value."
        ),

        code(
            `Example:
  Universe X = {x1, x2, x3, x4, x5}

  Fuzzy set A (Tall):
  A = {(x1, 0.2), (x2, 0.5), (x3, 0.8), (x4, 1.0), (x5, 0.9)}

  Fuzzy set B (Heavy):
  B = {(x1, 0.6), (x2, 0.4), (x3, 0.7), (x4, 0.3), (x5, 0.8)}

  UNION (A ∪ B) — max of each pair:
  A∪B = {(x1, 0.6), (x2, 0.5), (x3, 0.8), (x4, 1.0), (x5, 0.9)}

  INTERSECTION (A ∩ B) — min of each pair:
  A∩B = {(x1, 0.2), (x2, 0.4), (x3, 0.7), (x4, 0.3), (x5, 0.8)}

  COMPLEMENT (A') — 1 minus each value:
  A'  = {(x1, 0.8), (x2, 0.5), (x3, 0.2), (x4, 0.0), (x5, 0.1)}`,
            "text",
            "Standard fuzzy set operations example"
        ),

        heading("Properties of Standard Fuzzy Operations"),

        table(
            ["Property", "Formula", "Holds?"],
            [
                ["Commutativity", "A ∪ B = B ∪ A; A ∩ B = B ∩ A", "Yes"],
                ["Associativity", "(A ∪ B) ∪ C = A ∪ (B ∪ C)", "Yes"],
                ["Distributivity", "A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C)", "Yes"],
                ["De Morgan's Laws", "(A ∪ B)' = A' ∩ B'; (A ∩ B)' = A' ∪ B'", "Yes"],
                ["Idempotency", "A ∪ A = A; A ∩ A = A", "Yes"],
                ["Identity", "A ∪ ∅ = A; A ∩ X = A", "Yes"],
                ["Involution", "(A')' = A", "Yes"],
                ["Excluded Middle", "A ∪ A' = X", "No (not always 1)"],
                ["Contradiction", "A ∩ A' = ∅", "No (not always 0)"],
            ]
        ),

        note(
            "The law of excluded middle (A ∪ A' = X) and the law of contradiction (A ∩ A' = ∅) do NOT hold in fuzzy logic. For example, if μA(x) = 0.6, then μA'(x) = 0.4, and max(0.6, 0.4) = 0.6 ≠ 1. This is a fundamental difference from classical logic.",
            "exam",
            "Frequently Asked"
        ),

        heading("Alternative Fuzzy Operators"),

        text(
            "While Zadeh's min/max operators are the standard, other operators have been proposed for specific applications. These are generalised as t-norms (for intersection) and t-conorms or s-norms (for union)."
        ),

        heading("T-Norms (Intersection / AND Operators)"),

        table(
            ["T-Norm", "Formula", "Name"],
            [
                ["min(a, b)", "min(a, b)", "Zadeh (Standard)"],
                ["a × b", "a · b", "Algebraic Product"],
                ["max(0, a + b - 1)", "max(0, a + b - 1)", "Lukasiewicz (Bounded)"],
                ["a if b=1, b if a=1, else 0", "Drastic product", "Drastic"],
            ]
        ),

        heading("T-Conorms / S-Norms (Union / OR Operators)"),

        table(
            ["S-Norm", "Formula", "Name"],
            [
                ["max(a, b)", "max(a, b)", "Zadeh (Standard)"],
                ["a + b - a×b", "a + b - a·b", "Algebraic Sum (Probabilistic)"],
                ["min(1, a + b)", "min(1, a + b)", "Lukasiewicz (Bounded)"],
                ["b if a=0, a if b=0, else 1", "Drastic sum", "Drastic"],
            ]
        ),

        code(
            `Example with a = 0.6, b = 0.4:

  INTERSECTION (AND):
    Zadeh (min):        min(0.6, 0.4) = 0.4
    Algebraic Product:  0.6 × 0.4 = 0.24
    Lukasiewicz:        max(0, 0.6+0.4-1) = max(0, 0) = 0.0

  UNION (OR):
    Zadeh (max):        max(0.6, 0.4) = 0.6
    Algebraic Sum:      0.6 + 0.4 - 0.24 = 0.76
    Lukasiewicz:        min(1, 0.6+0.4) = min(1, 1.0) = 1.0`,
            "text",
            "Comparison of fuzzy operators"
        ),

        heading("Fuzzy Complement Operators"),

        table(
            ["Complement", "Formula", "Name"],
            [
                ["1 - a", "1 - a", "Standard (Zadeh)"],
                ["(1 - a^w)^(1/w)", "Sugeno class", "Sugeno"],
                ["(1-a)/(1+λa)", "λ > -1", "Yager"],
            ]
        ),

        heading("Linguistic Hedges"),

        definition(
            "Linguistic Hedge",
            "A modifier that changes the meaning of a fuzzy set by transforming its membership function. Common hedges include 'very', 'somewhat', 'more or less' and 'extremely'."
        ),

        table(
            ["Hedge", "Operation", "Formula", "Effect"],
            [
                ["Very", "Concentration", "μ²(x)", "Narrows the set (squaring reduces values < 1)"],
                ["Extremely", "Strong concentration", "μ³(x)", "Narrows even more"],
                ["Somewhat / More or less", "Dilation", "√μ(x) = μ^0.5(x)", "Widens the set (square root increases values < 1)"],
                ["Not", "Complement", "1 - μ(x)", "Inverts the membership"],
            ]
        ),

        code(
            `Example: Fuzzy set "Tall" with μTall(175) = 0.7

  "Very Tall":    μ²(175) = 0.7² = 0.49  (less membership)
  "Extremely Tall": μ³(175) = 0.7³ = 0.343 (even less)
  "Somewhat Tall": √0.7 = 0.837          (more membership)
  "Not Tall":     1 - 0.7 = 0.3          (inverted)`,
            "text",
            "Linguistic hedges example"
        ),

        keyPoints([
            "Standard fuzzy union uses max, intersection uses min, and complement uses 1 - μ(x).",
            "The laws of excluded middle and contradiction do NOT hold in fuzzy logic.",
            "T-norms generalise intersection; t-conorms (s-norms) generalise union.",
            "Algebraic product (a×b) and algebraic sum (a+b-a×b) are common alternative operators.",
            "Linguistic hedges like 'very' (squaring) and 'somewhat' (square root) modify fuzzy sets.",
        ]),
    ],

    {
        summary:
            "Master fuzzy set operations: union (max), intersection (min), complement, alternative t-norms and s-norms, and linguistic hedges.",
        minutes: 12,
        tags: ["ai", "fuzzy-logic", "fuzzy-operations", "t-norm", "hedges", "important"],

        mcqs: [
            mcq(
                "The standard fuzzy union operation uses:",
                ["min", "max", "average", "product"],
                1,
                "Standard fuzzy union (Zadeh) uses the max operator."
            ),
            mcq(
                "The standard fuzzy intersection operation uses:",
                ["max", "sum", "min", "average"],
                2,
                "Standard fuzzy intersection (Zadeh) uses the min operator."
            ),
            mcq(
                "In fuzzy logic, the law of excluded middle (A ∪ A' = X):",
                ["Always holds", "Never holds", "Does not always hold", "Holds only for crisp sets"],
                2,
                "The law of excluded middle does not always hold in fuzzy logic because max(μ, 1-μ) may not equal 1."
            ),
            mcq(
                "The linguistic hedge 'very' is implemented by:",
                ["Taking the square root of membership", "Squaring the membership value", "Doubling the membership", "Adding 0.5"],
                1,
                "'Very' is a concentration operator that squares the membership value, narrowing the fuzzy set."
            ),
            mcq(
                "The algebraic product t-norm computes intersection as:",
                ["min(a, b)", "max(a, b)", "a × b", "a + b - a×b"],
                2,
                "The algebraic product t-norm multiplies the membership values: a × b."
            ),
        ],

        questions: [
            qa(
                "Explain the standard fuzzy set operations with an example.",
                "The standard fuzzy set operations, proposed by Zadeh, are union, intersection and complement. Given fuzzy sets A = {(x1, 0.2), (x2, 0.5), (x3, 0.8)} and B = {(x1, 0.6), (x2, 0.4), (x3, 0.7)}, the union A∪B takes the maximum of corresponding membership values: {(x1, 0.6), (x2, 0.5), (x3, 0.8)}. The intersection A∩B takes the minimum: {(x1, 0.2), (x2, 0.4), (x3, 0.7)}. The complement A' subtracts each membership from 1: {(x1, 0.8), (x2, 0.5), (x3, 0.2)}. These operations satisfy commutativity, associativity, distributivity and De Morgan's laws, but unlike classical logic, the laws of excluded middle and contradiction do not always hold.",
                5
            ),
            qa(
                "What are t-norms and s-norms? Compare Zadeh and algebraic operators.",
                "T-norms are generalised intersection (AND) operators for fuzzy sets, and s-norms (t-conorms) are generalised union (OR) operators. The Zadeh operators use min for intersection and max for union. The algebraic operators use the product a×b for intersection and a+b-a×b for union. For example, with a=0.6 and b=0.4: Zadeh intersection gives min(0.6, 0.4) = 0.4, while algebraic product gives 0.6×0.4 = 0.24. Zadeh union gives max(0.6, 0.4) = 0.6, while algebraic sum gives 0.6+0.4-0.24 = 0.76. The algebraic product gives a lower intersection value and the algebraic sum gives a higher union value compared to Zadeh operators. The choice depends on the application's requirements.",
                5
            ),
            qa(
                "What are linguistic hedges? Explain with examples.",
                "Linguistic hedges are modifiers that change the meaning of a fuzzy set by transforming its membership function. The hedge 'very' is implemented by concentration, which squares the membership value: μ_very(x) = μ²(x). This narrows the fuzzy set because squaring a value between 0 and 1 makes it smaller. For example, if μTall(175) = 0.7, then μVeryTall(175) = 0.49. The hedge 'somewhat' or 'more or less' is implemented by dilation, which takes the square root: μ_somewhat(x) = √μ(x). This widens the fuzzy set because the square root of a value between 0 and 1 is larger. For example, μSomewhatTall(175) = √0.7 ≈ 0.837. The hedge 'extremely' cubes the membership: μ³(x), narrowing it even more.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — Fuzzy Relations and Composition
========================================================= */

const fuzzyRelationsAndComposition = createTopic(
    "fuzzy-relations-and-composition",
    "Fuzzy Relations and Composition",

    [
        definition(
            "Fuzzy Relation",
            "A generalisation of a classical relation that describes the degree of association between elements of two or more fuzzy sets. A fuzzy relation R from set X to set Y is a fuzzy set defined on the Cartesian product X × Y with a membership function μR(x, y) ∈ [0, 1]."
        ),

        text(
            "While a fuzzy set describes the degree to which an element belongs to a concept, a fuzzy relation describes the degree to which two elements are related. For example, the relation 'x is approximately equal to y' or 'city x is close to city y' can be modelled as fuzzy relations."
        ),

        heading("Representing Fuzzy Relations"),

        code(
            `Example: "x is close to y" for X = {1, 2, 3} and Y = {1, 2, 3}

  Fuzzy Relation R (closeness):

        y=1   y=2   y=3
  x=1 [ 1.0   0.8   0.3 ]
  x=2 [ 0.8   1.0   0.8 ]
  x=3 [ 0.3   0.8   1.0 ]

  μR(1,1) = 1.0  → 1 is completely close to 1
  μR(1,2) = 0.8  → 1 is quite close to 2
  μR(1,3) = 0.3  → 1 is slightly close to 3`,
            "text",
            "Fuzzy relation matrix"
        ),

        heading("Operations on Fuzzy Relations"),

        table(
            ["Operation", "Formula", "Description"],
            [
                ["Union", "μR∪S(x,y) = max(μR(x,y), μS(x,y))", "Element-wise maximum of two relation matrices"],
                ["Intersection", "μR∩S(x,y) = min(μR(x,y), μS(x,y))", "Element-wise minimum"],
                ["Complement", "μR'(x,y) = 1 - μR(x,y)", "Subtract each element from 1"],
            ]
        ),

        heading("Composition of Fuzzy Relations"),

        definition(
            "Fuzzy Composition",
            "An operation that combines two fuzzy relations to produce a new relation. If R is a relation from X to Y and S is a relation from Y to Z, then the composition R∘S is a relation from X to Z."
        ),

        heading("Max-Min Composition"),

        definition(
            "Max-Min Composition",
            "The most commonly used composition method. For relations R(X,Y) and S(Y,Z), the max-min composition T = R∘S is defined as: μT(x,z) = max over all y of [min(μR(x,y), μS(y,z))]."
        ),

        code(
            `Example:
  R (X to Y):          S (Y to Z):
       y1   y2              z1   z2
  x1 [ 0.7  0.5 ]     y1 [ 0.8  0.3 ]
  x2 [ 0.3  0.9 ]     y2 [ 0.4  0.6 ]

  Max-Min Composition T = R ∘ S:

  μT(x1,z1) = max(min(0.7,0.8), min(0.5,0.4))
            = max(0.7, 0.4) = 0.7

  μT(x1,z2) = max(min(0.7,0.3), min(0.5,0.6))
            = max(0.3, 0.5) = 0.5

  μT(x2,z1) = max(min(0.3,0.8), min(0.9,0.4))
            = max(0.3, 0.4) = 0.4

  μT(x2,z2) = max(min(0.3,0.3), min(0.9,0.6))
            = max(0.3, 0.6) = 0.6

  Result T:
       z1   z2
  x1 [ 0.7  0.5 ]
  x2 [ 0.4  0.6 ]`,
            "text",
            "Max-min composition example"
        ),

        heading("Max-Product Composition"),

        definition(
            "Max-Product Composition",
            "An alternative composition where min is replaced by algebraic product: μT(x,z) = max over all y of [μR(x,y) × μS(y,z)]."
        ),

        code(
            `Using the same R and S:

  μT(x1,z1) = max(0.7×0.8, 0.5×0.4)
            = max(0.56, 0.20) = 0.56

  μT(x1,z2) = max(0.7×0.3, 0.5×0.6)
            = max(0.21, 0.30) = 0.30

  μT(x2,z1) = max(0.3×0.8, 0.9×0.4)
            = max(0.24, 0.36) = 0.36

  μT(x2,z2) = max(0.3×0.3, 0.9×0.6)
            = max(0.09, 0.54) = 0.54`,
            "text",
            "Max-product composition example"
        ),

        heading("Comparison of Composition Methods"),

        table(
            ["Method", "Inner Operation", "Outer Operation", "Result Values"],
            [
                ["Max-Min", "min", "max", "Tends to preserve larger values"],
                ["Max-Product", "product (×)", "max", "Tends to produce smaller values"],
            ]
        ),

        note(
            "Max-min composition is the most widely used because it is simple, intuitive and preserves the properties of classical relation composition. It is the standard composition used in fuzzy inference systems.",
            "tip",
            "Standard Choice"
        ),

        keyPoints([
            "A fuzzy relation describes the degree of association between elements of two fuzzy sets.",
            "Fuzzy relations are represented as matrices with membership values in [0, 1].",
            "Max-min composition: μT(x,z) = max_y[min(μR(x,y), μS(y,z))].",
            "Max-product composition replaces min with multiplication.",
            "Max-min composition is the standard method used in fuzzy inference systems.",
        ]),
    ],

    {
        summary:
            "Learn fuzzy relations, their matrix representation, operations and composition methods (max-min and max-product).",
        minutes: 11,
        tags: ["ai", "fuzzy-logic", "fuzzy-relations", "composition", "important"],

        mcqs: [
            mcq(
                "A fuzzy relation from X to Y is defined on:",
                ["X only", "Y only", "The Cartesian product X × Y", "The union X ∪ Y"],
                2,
                "A fuzzy relation is a fuzzy set defined on the Cartesian product X × Y."
            ),
            mcq(
                "In max-min composition, the inner operation is:",
                ["max", "min", "product", "sum"],
                1,
                "Max-min composition uses min as the inner operation and max as the outer operation."
            ),
            mcq(
                "Max-product composition differs from max-min by replacing:",
                ["max with sum", "min with product", "max with product", "min with sum"],
                1,
                "Max-product replaces the min (inner) operation with algebraic multiplication."
            ),
            mcq(
                "The most commonly used fuzzy composition method is:",
                ["Max-product", "Min-max", "Max-min", "Min-product"],
                2,
                "Max-min composition is the standard and most widely used method."
            ),
            mcq(
                "A fuzzy relation matrix contains values in the range:",
                ["0 to 100", "-1 to 1", "0 to 1", "Any integer"],
                2,
                "Fuzzy relation membership values are always in the range [0, 1]."
            ),
        ],

        questions: [
            qa(
                "What is a fuzzy relation? How is it represented?",
                "A fuzzy relation is a generalisation of a classical relation that describes the degree of association between elements of two or more fuzzy sets. It is a fuzzy set defined on the Cartesian product X × Y with a membership function μR(x, y) that maps each pair (x, y) to a value in [0, 1]. A fuzzy relation is typically represented as a matrix where rows correspond to elements of X, columns correspond to elements of Y, and each cell contains the membership value μR(x, y). For example, a 'closeness' relation between cities might have μR(CityA, CityB) = 0.8 indicating that City A is quite close to City B.",
                5
            ),
            qa(
                "Explain max-min composition with an example.",
                "Max-min composition combines two fuzzy relations R(X,Y) and S(Y,Z) to produce a new relation T(X,Z). The formula is μT(x,z) = max over all y of [min(μR(x,y), μS(y,z))]. For each pair (x,z), we compute the minimum of μR(x,y) and μS(y,z) for every intermediate element y, then take the maximum of all these minimums. For example, if R has μR(x1,y1)=0.7 and μR(x1,y2)=0.5, and S has μS(y1,z1)=0.8 and μS(y2,z1)=0.4, then μT(x1,z1) = max(min(0.7,0.8), min(0.5,0.4)) = max(0.7, 0.4) = 0.7. This is analogous to matrix multiplication where multiplication is replaced by min and addition is replaced by max.",
                5
            ),
            qa(
                "Compare max-min and max-product composition.",
                "Both methods compose two fuzzy relations R(X,Y) and S(Y,Z) into T(X,Z) using max as the outer operation. The difference is in the inner operation. Max-min uses min: μT(x,z) = max_y[min(μR(x,y), μS(y,z))]. Max-product uses algebraic multiplication: μT(x,z) = max_y[μR(x,y) × μS(y,z)]. For example, with μR=0.7 and μS=0.8, min gives 0.7 while product gives 0.56. Max-product generally produces smaller values because multiplying two numbers in [0,1] gives a result smaller than or equal to either operand. Max-min is more commonly used because it is simpler, more intuitive and preserves the properties of classical relation composition.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 5 — Fuzzy Inference Systems
========================================================= */

const fuzzyInferenceSystems = createTopic(
    "fuzzy-inference-systems",
    "Fuzzy Inference Systems",

    [
        definition(
            "Fuzzy Inference System (FIS)",
            "A framework that uses fuzzy logic to map inputs to outputs through a process of fuzzification, rule evaluation, aggregation and defuzzification. It is the core mechanism of fuzzy control and decision-making systems."
        ),

        text(
            "Fuzzy inference systems are the practical engine of fuzzy logic. They take crisp (precise) inputs, convert them to fuzzy values, apply a set of IF-THEN rules to reason about the inputs, combine the results and convert the fuzzy output back to a crisp value that can be used for control or decision-making."
        ),

        heading("Architecture of a Fuzzy Inference System"),

        steps([
            "Fuzzification — Convert crisp input values into fuzzy membership degrees",
            "Rule Evaluation — Apply fuzzy rules (IF-THEN) to the fuzzified inputs",
            "Aggregation — Combine the outputs of all fired rules into a single fuzzy set",
            "Defuzzification — Convert the aggregated fuzzy output into a crisp value",
        ]),

        code(
            `FIS Architecture:

  Crisp Input → [FUZZIFICATION] → Fuzzy Inputs
                                       ↓
                              [RULE BASE]
                              (IF-THEN Rules)
                                       ↓
                              [INFERENCE ENGINE]
                              (Rule Evaluation)
                                       ↓
                              [AGGREGATION]
                              (Combine Rule Outputs)
                                       ↓
                              Fuzzy Output
                                       ↓
                            [DEFUZZIFICATION]
                                       ↓
                                 Crisp Output`,
            "text",
            "FIS architecture diagram"
        ),

        heading("Step 1: Fuzzification"),

        definition(
            "Fuzzification",
            "The process of converting a crisp (numerical) input value into degrees of membership in the relevant fuzzy sets using membership functions."
        ),

        code(
            `Example: Temperature control system
  Input: Current temperature = 27°C

  Fuzzy sets for Temperature: Cold, Warm, Hot

  Using triangular membership functions:
    μCold(27) = 0.0    (not cold at all)
    μWarm(27) = 0.6    (fairly warm)
    μHot(27)  = 0.4    (somewhat hot)

  The crisp input 27°C is now represented as fuzzy values.`,
            "text",
            "Fuzzification example"
        ),

        heading("Step 2: Rule Evaluation (Inference)"),

        text(
            "The rule base contains a set of IF-THEN rules provided by domain experts. Each rule is evaluated by computing the firing strength (degree to which the antecedent is satisfied) and applying it to the consequent."
        ),

        code(
            `Rule Base for an Air Conditioner:

  Rule 1: IF temperature is Cold THEN fan_speed is Low
  Rule 2: IF temperature is Warm THEN fan_speed is Medium
  Rule 3: IF temperature is Hot  THEN fan_speed is High

  Given: μCold(27) = 0.0, μWarm(27) = 0.6, μHot(27) = 0.4

  Rule Evaluation:
    Rule 1: Firing strength = 0.0 → Output: Low with degree 0.0 (not fired)
    Rule 2: Firing strength = 0.6 → Output: Medium with degree 0.6
    Rule 3: Firing strength = 0.4 → Output: High with degree 0.4`,
            "text",
            "Rule evaluation example"
        ),

        heading("Step 3: Aggregation"),

        definition(
            "Aggregation",
            "The process of combining the fuzzy output sets from all fired rules into a single aggregated fuzzy output set. The most common method is to take the maximum (union) of all rule outputs."
        ),

        heading("Step 4: Defuzzification"),

        definition(
            "Defuzzification",
            "The process of converting the aggregated fuzzy output set into a single crisp (numerical) value that can be used for control or decision-making."
        ),

        heading("Defuzzification Methods"),

        table(
            ["Method", "Formula / Description", "Advantage", "Disadvantage"],
            [
                ["Centroid (Centre of Gravity)", "x* = ∫x·μ(x)dx / ∫μ(x)dx", "Most accurate and widely used", "Computationally intensive"],
                ["Bisector", "Vertical line that divides the area into two equal halves", "Good balance", "May not be unique"],
                ["Mean of Maximum (MOM)", "Average of all x values where μ(x) is maximum", "Simple", "Ignores shape of the set"],
                ["Smallest of Maximum (SOM)", "Smallest x where μ(x) is maximum", "Simple", "Biased towards left"],
                ["Largest of Maximum (LOM)", "Largest x where μ(x) is maximum", "Simple", "Biased towards right"],
            ]
        ),

        code(
            `Centroid Method (most common):

  x* = Σ [x · μ(x)] / Σ μ(x)    (discrete version)

  Example: Aggregated fuzzy output for fan_speed
  Speed:  20   40   60   80   100
  μ:     0.0  0.6  0.4  0.4  0.0

  x* = (20×0 + 40×0.6 + 60×0.4 + 80×0.4 + 100×0)
       / (0 + 0.6 + 0.4 + 0.4 + 0)
     = (0 + 24 + 24 + 32 + 0) / 1.4
     = 80 / 1.4
     = 57.1

  Crisp output: Fan speed = 57.1 (Medium-High)`,
            "text",
            "Centroid defuzzification example"
        ),

        heading("Types of Fuzzy Inference Systems"),

        table(
            ["Aspect", "Mamdani FIS", "Sugeno (Takagi-Sugeno) FIS"],
            [
                ["Output", "Fuzzy sets", "Crisp values or linear functions"],
                ["Rule consequent", "IF x is A THEN y is B (fuzzy)", "IF x is A THEN y = f(x) (crisp/linear)"],
                ["Defuzzification", "Required (centroid, etc.)", "Weighted average (simpler)"],
                ["Interpretability", "High — rules are linguistic", "Lower — output is mathematical"],
                ["Computational cost", "Higher", "Lower"],
                ["Use case", "Expert systems, human-readable rules", "Control systems, optimisation, adaptive systems"],
                ["Example rule", "IF temp is Hot THEN fan is High", "IF temp is Hot THEN fan = 0.8×temp + 5"],
            ]
        ),

        heading("Mamdani FIS Example"),

        code(
            `Complete Mamdani Example: Air Conditioner

  Inputs: Temperature = 27°C
  Output: Fan Speed

  Step 1 — Fuzzification:
    μCold(27) = 0.0, μWarm(27) = 0.6, μHot(27) = 0.4

  Step 2 — Rule Evaluation:
    R1: IF Cold THEN Low     → strength 0.0
    R2: IF Warm THEN Medium  → strength 0.6
    R3: IF Hot  THEN High    → strength 0.4

  Step 3 — Aggregation:
    Combine clipped/scaled output fuzzy sets using max

  Step 4 — Defuzzification (Centroid):
    Crisp fan speed = 57.1 (out of 100)`,
            "text",
            "Complete Mamdani FIS walkthrough"
        ),

        note(
            "The Mamdani FIS is the most widely used type because its rules are expressed in natural language, making it easy for domain experts to define and understand. The Sugeno FIS is computationally more efficient and is preferred in adaptive and optimisation applications like ANFIS.",
            "exam",
            "Frequently Asked"
        ),

        keyPoints([
            "A FIS has four steps: fuzzification, rule evaluation, aggregation and defuzzification.",
            "Fuzzification converts crisp inputs to fuzzy membership degrees using membership functions.",
            "Rules are IF-THEN statements evaluated by computing firing strengths.",
            "Centroid (centre of gravity) is the most common defuzzification method.",
            "Mamdani FIS uses fuzzy output sets; Sugeno FIS uses crisp or linear output functions.",
        ]),
    ],

    {
        summary:
            "Master the four steps of fuzzy inference (fuzzification, rule evaluation, aggregation, defuzzification) and compare Mamdani and Sugeno FIS types.",
        minutes: 13,
        tags: ["ai", "fuzzy-logic", "fis", "mamdani", "sugeno", "defuzzification", "important"],

        mcqs: [
            mcq(
                "The first step in a fuzzy inference system is:",
                ["Defuzzification", "Aggregation", "Fuzzification", "Rule evaluation"],
                2,
                "Fuzzification is the first step, converting crisp inputs into fuzzy membership degrees."
            ),
            mcq(
                "Defuzzification is the process of:",
                ["Converting crisp input to fuzzy", "Converting fuzzy output to a crisp value", "Evaluating rules", "Combining rule outputs"],
                1,
                "Defuzzification converts the aggregated fuzzy output into a single crisp numerical value."
            ),
            mcq(
                "The most commonly used defuzzification method is:",
                ["Mean of Maximum", "Bisector", "Centroid (Centre of Gravity)", "Smallest of Maximum"],
                2,
                "The centroid method is the most accurate and widely used defuzzification technique."
            ),
            mcq(
                "In a Mamdani FIS, the rule consequent is:",
                ["A crisp number", "A linear function", "A fuzzy set", "A Boolean value"],
                2,
                "Mamdani rules have fuzzy set consequents: IF x is A THEN y is B."
            ),
            mcq(
                "The Sugeno FIS differs from Mamdani in that its output is:",
                ["A fuzzy set", "A crisp value or linear function", "Always zero", "A linguistic term"],
                1,
                "Sugeno FIS uses crisp values or linear functions as rule consequents."
            ),
            mcq(
                "Aggregation in a FIS combines:",
                ["Crisp inputs", "Membership functions", "Outputs of all fired rules", "Rule antecedents"],
                2,
                "Aggregation combines the fuzzy output sets from all fired rules into a single fuzzy set."
            ),
        ],

        questions: [
            qa(
                "Explain the four steps of a fuzzy inference system.",
                "The first step is fuzzification, which converts crisp numerical inputs into fuzzy membership degrees using membership functions. For example, a temperature of 27°C might be converted to μWarm(27)=0.6 and μHot(27)=0.4. The second step is rule evaluation, where each IF-THEN rule in the rule base is evaluated by computing its firing strength — the degree to which its antecedent is satisfied. For example, the rule 'IF temperature is Warm THEN fan is Medium' fires with strength 0.6. The third step is aggregation, which combines the fuzzy output sets from all fired rules into a single aggregated fuzzy output set, typically using the max operator. The fourth step is defuzzification, which converts the aggregated fuzzy output into a single crisp numerical value, most commonly using the centroid method.",
                5
            ),
            qa(
                "Compare Mamdani and Sugeno fuzzy inference systems.",
                "The Mamdani FIS uses fuzzy sets as rule consequents, such as 'IF temperature is Hot THEN fan_speed is High'. This makes rules highly interpretable because they are expressed in natural language. However, it requires defuzzification of the aggregated fuzzy output, which is computationally more expensive. The Sugeno (Takagi-Sugeno) FIS uses crisp values or linear functions as consequents, such as 'IF temperature is Hot THEN fan_speed = 0.8×temp + 5'. This makes defuzzification simpler (weighted average) and computationally more efficient, but the rules are less interpretable. Mamdani is preferred for expert systems where interpretability matters, while Sugeno is preferred for control systems, optimisation and adaptive neuro-fuzzy systems like ANFIS.",
                5
            ),
            qa(
                "Explain the centroid method of defuzzification with an example.",
                "The centroid method, also called centre of gravity, computes the crisp output as the centre of the area under the aggregated membership function. The formula is x* = ∫x·μ(x)dx / ∫μ(x)dx for continuous functions, or x* = Σ[x·μ(x)] / Σμ(x) for discrete values. For example, if the aggregated fuzzy output for fan speed has values: speed 20 with μ=0.0, speed 40 with μ=0.6, speed 60 with μ=0.4, speed 80 with μ=0.4 and speed 100 with μ=0.0, then x* = (20×0 + 40×0.6 + 60×0.4 + 80×0.4 + 100×0) / (0 + 0.6 + 0.4 + 0.4 + 0) = (0+24+24+32+0) / 1.4 = 80/1.4 = 57.1. The crisp output is a fan speed of 57.1. The centroid method is the most accurate and widely used because it considers the entire shape of the aggregated fuzzy set.",
                5
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit2Topics = [
    introToFuzzyLogic,
    membershipFunctions,
    fuzzySetOperations,
    fuzzyRelationsAndComposition,
    fuzzyInferenceSystems,
];
