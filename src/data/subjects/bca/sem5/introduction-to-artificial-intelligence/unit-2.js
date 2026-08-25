/* =========================================================
   BCA • SEM 5 • Introduction to Artificial Intelligence
   UNIT 2 — Knowledge Representation, Machine Learning, Expert Systems & NLP
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
   TOPIC 1 — Knowledge Representation and Logic
========================================================= */

const knowledgeRepresentation = createTopic(
    "knowledge-representation-and-logic",
    "Knowledge Representation and Logic",

    [
        definition(
            "Knowledge Representation (KR)",
            "Knowledge Representation is the study of how an AI system can represent real-world facts, rules and relationships in a formal symbolic format so that automated inference engines can deduce new knowledge."
        ),

        heading("Propositional Logic (PL)"),

        text(
            "Propositional logic deals with declarative statements (propositions) that are either TRUE or FALSE, connected by logical operators."
        ),

        table(
            ["Operator", "Name", "Symbol", "Meaning"],
            [
                ["Conjunction", "AND", "∧", "True if both propositions are true"],
                ["Disjunction", "OR", "∨", "True if at least one proposition is true"],
                ["Negation", "NOT", "¬ or ~", "Reverses truth value"],
                ["Implication", "IF...THEN", "→", "False only if antecedent is True and consequent is False"],
                ["Biconditional", "IF AND ONLY IF", "↔", "True if both propositions have matching truth values"],
            ]
        ),

        heading("First-Order Predicate Logic (FOPL / FOL)"),

        definition(
            "First-Order Logic",
            "An expressive formal logic system extending propositional logic by representing objects, properties (predicates), functions and quantifiers."
        ),

        table(
            ["Concept", "Syntax", "Example"],
            [
                ["Constants", "Names of objects", "John, Apple, India"],
                ["Variables", "Placeholders", "x, y, z"],
                ["Predicates", "Relationships / properties", "Brother(John, Bob), IsStudent(x)"],
                ["Universal Quantifier (∀)", "For all instances", "∀x (Human(x) → Mortal(x),"],
                ["Existential Quantifier (∃)", "There exists at least one", "∃x (Student(x) ∧ ScoredA(x),"],
            ]
        ),

        heading("Inference Rules in Knowledge Bases"),

        list([
            "Modus Ponens — Given P → Q and P, infer Q.",
            "Modus Tollens — Given P → Q and ¬Q, infer ¬P.",
            "Resolution Principle — A refutation-complete rule that simplifies pairs of clauses: (A ∨ B) ∧ (¬B ∨ C) ⊢ (A ∨ C).",
            "Unification — Algorithm that matches two first-order expressions by finding variable substitutions.",
            "Forward Chaining — Data-driven inference starting from known facts to derive goals.",
            "Backward Chaining — Goal-driven inference working backward from hypothesis to find supporting facts.",
        ]),

        code(
            `% Example Knowledge Base in First-Order Logic
% 1. All humans are mortal: ∀x Human(x) -> Mortal(x)
% 2. Socrates is a human: Human(Socrates)
% 3. By Modus Ponens: Mortal(Socrates)`,
            "text",
            "FOL Inference Example"
        ),

        keyPoints([
            "Knowledge bases store representations of domain facts and rules.",
            "Propositional logic lacks quantifiers; First-Order Logic adds objects, relations, ∀ and ∃.",
            "Modus Ponens derives Q from P → Q and P.",
            "Resolution refutation is the foundation of automated theorem provers and Prolog.",
            "Forward chaining is data-driven; backward chaining is goal-driven.",
        ]),
    ],

    {
        summary:
            "Explore Knowledge Representation, Propositional Logic, First-Order Predicate Logic, quantifiers, resolution and inference rules.",
        minutes: 13,
        tags: ["knowledge-representation", "logic", "fopl", "inference", "important"],

        mcqs: [
            mcq(
                "Which quantifier represents 'for all' in First-Order Logic?",
                ["∃", "∀", "∈", "∧"],
                1,
                "The universal quantifier ∀ stands for 'for all'."
            ),
            mcq(
                "Modus Ponens states that from P → Q and P, we can infer:",
                ["¬P", "¬Q", "Q", "P ∧ Q"],
                2,
                "Modus Ponens is the rule: from P → Q and P, infer Q."
            ),
            mcq(
                "Which inference technique starts from known facts and applies rules to extract new facts?",
                ["Backward Chaining", "Forward Chaining", "Alpha-Beta Pruning", "Heuristic Search"],
                1,
                "Forward chaining is data-driven, starting from known facts to reach a conclusion."
            ),
            mcq(
                "What is the limitation of Propositional Logic compared to First-Order Logic?",
                ["Cannot represent truth values", "Cannot represent objects, properties and quantifiers", "Too complex to compute", "Does not support AND/OR"],
                1,
                "Propositional logic cannot express relations, variables or quantifiers."
            ),
        ],

        questions: [
            qa(
                "Differentiate between Propositional Logic and First-Order Predicate Logic (FOPL).",
                "Propositional Logic (PL) works with atomic propositions connected by logical operators (AND, OR, NOT, IMPLIES). Each proposition represents a complete truth fact (e.g., P = 'It is raining'). However, PL cannot describe individual objects, properties or generalisations across populations. First-Order Predicate Logic (FOPL) is more expressive: it introduces constants (objects like John), predicates (relations like IsStudent(John), functions, and quantifiers (∀ for universal quantification and ∃ for existential quantification). This allows FOPL to model statements like 'All humans are mortal' (∀x Human(x) → Mortal(x),.",
                4
            ),
            qa(
                "Explain Forward Chaining and Backward Chaining with examples.",
                "Forward Chaining is a data-driven inference technique. It starts with atomic facts in the Knowledge Base and continuously applies inference rules (like Modus Ponens) to derive new facts until the goal is reached. It is well-suited for monitoring and control systems. Backward Chaining is a goal-driven inference technique. It begins with the target hypothesis/goal and searches backward for rules that conclude the goal, verifying whether supporting premise conditions are satisfied by existing facts. It is widely used in diagnostic expert systems.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — Structured Knowledge Representation
========================================================= */

const structuredKnowledge = createTopic(
    "structured-knowledge-representation",
    "Structured Knowledge Representation",

    [
        definition(
            "Structured Knowledge Representation",
            "Techniques used to organise complex knowledge networks hierarchically through graphical structures, frames, concepts and semantic linkages."
        ),

        heading("Four Major Structured Schemes"),

        table(
            ["Scheme", "Structure", "Key Feature"],
            [
                ["Semantic Networks", "Directed graph of nodes (concepts) and edges (relations)", "Inheritance via IS-A and HAS-A relationships"],
                ["Frames", "Record-like data structures with named slots and default values", "Object-oriented grouping with procedural attachments"],
                ["Conceptual Dependency (CD)", "Decomposition of sentences into universal primitive actions", "Standardised semantic representation independent of phrasing"],
                ["Scripts", "Pre-structured sequences of stereotypical events in a context", "Describes expected event flows (e.g., Restaurant script)"],
            ]
        ),

        heading("Semantic Networks Example"),

        code(
            `[Bird] ------(has-part)-----> [Wings]
  ^
  | (is-a)
  |
[Sparrow] --(color)---------> [Brown]`,
            "text",
            "Semantic Network Graph"
        ),

        heading("Frame Representation"),

        code(
            `Frame Name: Student
- Name: String
- Course: Default = "BCA"
- Semester: Integer (Range 1-6)
- College: String
- CalculateFees: [Procedural attachment / Method]`,
            "text",
            "Frame Structure with Slots and Facets"
        ),

        heading("Conceptual Dependency (CD) Primitive Actions"),

        table(
            ["Primitive Action", "Meaning", "Example"],
            [
                ["ATRANS", "Transfer of an abstract relationship / ownership", "Giving money, buying a car"],
                ["PTRANS", "Transfer of physical location of an object", "Walking to college, driving home"],
                ["MTRANS", "Transfer of mental information", "Telling a story, reading a book"],
                ["MBUILD", "Building new information in mind", "Deciding, solving a calculation"],
                ["INGEST", "Taking in food or liquid by an organism", "Eating an apple, drinking water"],
                ["EXPEL", "Forcing something out from the body", "Sweating, spitting"],
            ]
        ),

        heading("Scripts and Their Components"),

        list([
            "Entry Conditions — Conditions that must be true to enter the script (e.g., Customer is hungry, has money).",
            "Props — Objects used in the scenario (e.g., Tables, menu card, bill, food).",
            "Roles — People involved in the scenario (e.g., Customer, waiter, chef, cashier).",
            "Tracks — Specific variations of the script (e.g., Fast food vs Fine dining).",
            "Scenes — Sequential narrative blocks (Entering, Ordering, Eating, Paying, Exiting).",
        ]),

        keyPoints([
            "Semantic Networks use labeled graphs with IS-A and HAS-A inheritance links.",
            "Frames use slots, facets, default values and attached procedures.",
            "Conceptual Dependency (Roger Schank) decomposes semantics into primitive actions (ATRANS, PTRANS).",
            "Scripts represent standard, sequential, situational event chains.",
            "These structures form the basis for ontologies, knowledge graphs and NLP understanding.",
        ]),
    ],

    {
        summary:
            "Learn structured knowledge models: Semantic Networks, Frames, Roger Schank's Conceptual Dependency primitives, and Scripts.",
        minutes: 12,
        tags: ["semantic-networks", "frames", "conceptual-dependency", "scripts", "important"],

        mcqs: [
            mcq(
                "Which relationship in Semantic Networks enables property inheritance?",
                ["IS-A", "LOVES", "NEAR", "AFTER"],
                0,
                "IS-A links establish hierarchical inheritance from superclasses to subclasses."
            ),
            mcq(
                "In Frame systems, individual attributes are stored in:",
                ["Slots", "Graphs", "Pointers", "Arrays"],
                0,
                "Frames consist of slots that hold specific attributes, values, or methods."
            ),
            mcq(
                "In Conceptual Dependency, the primitive action for transferring physical location is:",
                ["ATRANS", "PTRANS", "MTRANS", "MBUILD"],
                1,
                "PTRANS represents the physical transfer of location of an object."
            ),
            mcq(
                "Who proposed the Conceptual Dependency theory?",
                ["Alan Turing", "Roger Schank", "Marvin Minsky", "John McCarthy"],
                1,
                "Roger Schank formulated Conceptual Dependency theory for NLP semantic representation."
            ),
        ],

        questions: [
            qa(
                "What are Semantic Networks? Explain inheritance using IS-A and HAS-A links.",
                "A Semantic Network is a knowledge representation model that represents knowledge as a directed graph. Nodes represent objects, concepts or situations, while edges represent relationships between them. Inheritance is achieved through two primary links: (1) 'IS-A' links create class-subclass or class-instance hierarchies (e.g., 'Sparrow IS-A Bird'). Properties defined on general superclasses automatically inherit down to subclasses. (2) 'HAS-A' links define attribute or part-whole relationships (e.g., 'Bird HAS-A Wings').",
                4
            ),
            qa(
                "Explain Scripts and their major structural components with an example.",
                "A Script is a structured knowledge representation designed by Roger Schank for describing stereotypical sequences of events in everyday situations. Its components include: (1) Props: Physical objects used (e.g., menu, food, money). (2) Roles: Participants (e.g., customer, waiter, cashier). (3) Entry Conditions: Prerequisites (e.g., customer is hungry). (4) Results: Post-conditions (e.g., customer is full, has less money). (5) Scenes: Chronological event sequences (Entering, Ordering, Eating, Paying, Leaving). Scripts allow AI to fill in missing details during story comprehension.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — Introduction to Machine Learning & Neural Networks
========================================================= */

const machineLearningIntro = createTopic(
    "introduction-to-machine-learning",
    "Introduction to Machine Learning & Neural Networks",

    [
        definition(
            "Machine Learning (ML)",
            "Machine Learning is a subset of AI where computer algorithms learn patterns and rules directly from training data to make predictions or decisions without being explicitly programmed."
        ),

        heading("Three Primary Learning Paradigms"),

        table(
            ["Paradigm", "Data Type", "Feedback / Mechanism", "Common Algorithms"],
            [
                ["Supervised Learning", "Labeled training data (Features + Target)", "Direct error feedback between predicted and true label", "Linear Regression, Decision Trees, SVM, KNN, Naive Bayes"],
                ["Unsupervised Learning", "Unlabeled data (Features only)", "Discovers hidden clusters, distributions or structures", "K-Means, Hierarchical Clustering, PCA, Apriori"],
                ["Reinforcement Learning", "Environment states and actions", "Reward / Penalty signals for trial-and-error actions", "Q-Learning, Deep Q-Networks (DQN), Policy Gradient"],
            ]
        ),

        heading("Artificial Neural Networks (ANN)"),

        definition(
            "Artificial Neural Network",
            "A computational model inspired by the biological neural network of the human brain, composed of interconnected processing units called artificial neurons (perceptrons)."
        ),

        heading("The Perceptron Model"),

        code(
            `// Perceptron Output Computation:
y = Activation_Function( Σ (w_i * x_i) + b )

Inputs (x1, x2, ..., xn) --[ Weights w1, w2, ..., wn ]--> [ Summation Σ + Bias b ]
                                                                |
                                                      [ Activation Function f ]
                                                                |
                                                         Output (y)`,
            "text",
            "Perceptron Architecture"
        ),

        heading("Common Activation Functions"),

        table(
            ["Function", "Formula", "Output Range", "Usage"],
            [
                ["Sigmoid", "1 / (1 + e^(-z),", "(0, 1)", "Binary classification, probability outputs"],
                ["ReLU (Rectified Linear Unit)", "max(0, z)", "[0, ∞)", "Default choice in deep hidden layers"],
                ["Softmax", "e^(z_i) / Σ e^(z_j)", "(0, 1) (sum=1)", "Multi-class classification output layer"],
                ["Tanh", "(e^z - e^(-z), / (e^z + e^(-z),", "(-1, 1)", "Zero-centered hidden representations"],
            ]
        ),

        heading("Basic Machine Learning Workflow in Python (scikit-learn)"),

        code(
            `from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import accuracy_score

# 1. Load dataset
data = load_iris()
X, y = data.data, data.target

# 2. Split into Train & Test sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# 3. Initialise and train classifier
clf = DecisionTreeClassifier(max_depth=3)
clf.fit(X_train, y_train)

# 4. Make predictions and evaluate
y_pred = clf.predict(X_test)
print(f"Model Accuracy: {accuracy_score(y_test, y_pred) * 100:.2f}%")`,
            "python",
            "Supervised ML with Scikit-Learn"
        ),

        keyPoints([
            "Supervised learning trains on labeled data; unsupervised discovers clusters in unlabeled data.",
            "Reinforcement learning learns optimal policies using reward/penalty signals.",
            "A perceptron computes a weighted sum of inputs plus bias and applies an activation function.",
            "ReLU is the most popular activation function for deep neural networks.",
            "Backpropagation with Gradient Descent is the standard training algorithm for multi-layer neural networks.",
        ]),
    ],

    {
        summary:
            "Learn machine learning fundamentals: Supervised, Unsupervised, Reinforcement Learning, Artificial Neural Networks and Perceptrons.",
        minutes: 14,
        tags: ["machine-learning", "neural-networks", "supervised-learning", "deep-learning", "important"],

        mcqs: [
            mcq(
                "Which learning paradigm uses reward and penalty feedback?",
                ["Supervised Learning", "Unsupervised Learning", "Reinforcement Learning", "Semi-supervised"],
                2,
                "Reinforcement learning trains agents via reward and punishment signals."
            ),
            mcq(
                "What is the mathematical output of the ReLU activation function for an input of -4?",
                ["-4", "0", "1", "0.5"],
                1,
                "ReLU = max(0, x), so for x = -4, max(0, -4) = 0."
            ),
            mcq(
                "Which of the following is an Unsupervised Learning algorithm?",
                ["Linear Regression", "K-Means Clustering", "Support Vector Machine", "Logistic Regression"],
                1,
                "K-Means clusters unlabeled data points without ground-truth targets."
            ),
            mcq(
                "In neural networks, what is the purpose of the activation function?",
                ["Increases dataset size", "Introduces non-linearity into the network", "Normalises weights to zero", "Deletes redundant nodes"],
                1,
                "Activation functions introduce non-linearities, allowing networks to learn complex functions."
            ),
        ],

        questions: [
            qa(
                "Explain the differences between Supervised, Unsupervised and Reinforcement Learning.",
                "Supervised Learning trains on labeled datasets containing feature inputs and ground-truth targets. The algorithm learns a mapping function to predict output labels for unseen data (e.g., classification, regression). Unsupervised Learning works on unlabeled data without teacher guidance; it discovers inherent structures, groupings or patterns (e.g., customer segmentation via K-Means). Reinforcement Learning involves an autonomous agent interacting with an environment. It learns through trial-and-error, choosing actions to maximise cumulative numerical reward signals over time (e.g., game playing, robotics).",
                4
            ),
            qa(
                "What is an Artificial Neuron (Perceptron)? Explain its mathematical components.",
                "An Artificial Neuron (Perceptron) is the fundamental building block of Artificial Neural Networks. It comprises four key components: (1) Inputs (x1, x2, ... xn): Numerical feature values. (2) Synaptic Weights (w1, w2, ... wn): Parameters determining the importance of each input. (3) Bias (b): An adjustable offset allowing the threshold to shift. (4) Summation and Activation Function: The neuron computes net input z = Σ(wi · xi) + b and passes z through an activation function f(z) (such as Sigmoid, ReLU or Step) to produce the final output y = f(z).",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — Expert Systems and Fuzzy Logic
========================================================= */

const expertSystemsFuzzy = createTopic(
    "expert-systems-and-fuzzy-logic",
    "Expert Systems and Fuzzy Logic",

    [
        definition(
            "Expert System (ES)",
            "An Expert System is an AI software program that uses knowledge and inference procedures to solve complex problems that normally require human expert expertise in a specific domain."
        ),

        heading("Architecture of an Expert System"),

        table(
            ["Component", "Function"],
            [
                ["Knowledge Base", "Stores domain-specific facts and IF-THEN production rules obtained from human experts"],
                ["Inference Engine", "Applies logical reasoning rules to the knowledge base to deduce solutions"],
                ["Working Memory", "Holds current facts, inputs and state of the active session"],
                ["Explanation Facility", "Explains to the user HOW and WHY a specific conclusion was reached"],
                ["User Interface", "Enables non-expert users to query the system and input parameters"],
                ["Knowledge Acquisition Facility", "Allows knowledge engineers to update rules and expand the knowledge base"],
            ]
        ),

        heading("Famous Classic Expert Systems"),

        list([
            "MYCIN — Medical diagnostic system for identifying bacterial blood infections and prescribing antibiotics.",
            "DENDRAL — Chemical analysis system for identifying unknown molecular structures via mass spectrometry.",
            "PROSPECTOR — Geological exploration system for mineral deposits.",
            "R1 / XCON — Configured VAX computer systems at Digital Equipment Corporation.",
        ]),

        heading("Fuzzy Logic"),

        definition(
            "Fuzzy Logic",
            "Proposed by Lotfi Zadeh in 1965, Fuzzy Logic is a form of many-valued logic that deals with approximate reasoning rather than fixed and exact values (degrees of truth between 0 and 1)."
        ),

        heading("Crisp Sets vs Fuzzy Sets"),

        table(
            ["Feature", "Crisp (Classical) Set", "Fuzzy Set"],
            [
                ["Membership values", "Binary: Only {0, 1} (True or False)", "Continuous interval: [0, 1]"],
                ["Boundaries", "Strict and sharp", "Gradual and vague"],
                ["Example", "Person is tall if height >= 6.0 ft (1 or 0)", "Height 5.9 ft has degree of membership μ = 0.85 in 'Tall'"],
            ]
        ),

        heading("Fuzzy Inference System (FIS) Architecture"),

        steps([
            "Fuzzification — Converts crisp numeric input values into fuzzy linguistic terms (e.g., Speed = 75 km/h -> Fast with μ=0.8).",
            "Rule Evaluation — Applies fuzzy IF-THEN rules from the rule base (using fuzzy AND: min, fuzzy OR: max).",
            "Aggregation — Combines the output fuzzy sets of all fired rules into a single fuzzy distribution.",
            "Defuzzification — Converts the aggregated fuzzy result back into a single crisp output value (e.g., Centroid method).",
        ]),

        note(
            "Fuzzy logic is widely used in embedded control systems: washing machines, automatic braking (ABS), camera autofocus, air conditioners and elevator controllers.",
            "tip",
            "Everyday Applications"
        ),

        keyPoints([
            "Expert systems separate domain knowledge (Knowledge Base) from reasoning logic (Inference Engine).",
            "MYCIN and DENDRAL are pioneering examples of rule-based expert systems.",
            "Fuzzy logic handles vagueness and imprecise real-world concepts by using truth values in [0, 1].",
            "A Fuzzy Inference System consists of Fuzzification, Rule Base, Aggregation and Defuzzification.",
            "Defuzzification commonly uses the Centroid (Center of Gravity) method.",
        ]),
    ],

    {
        summary:
            "Understand Expert System architecture, MYCIN/DENDRAL, Lotfi Zadeh's Fuzzy Logic, membership functions and fuzzy controllers.",
        minutes: 13,
        tags: ["expert-systems", "fuzzy-logic", "mycin", "rule-based-systems", "important"],

        mcqs: [
            mcq(
                "Who introduced Fuzzy Logic in 1965?",
                ["John McCarthy", "Lotfi Zadeh", "Alan Turing", "Edward Feigenbaum"],
                1,
                "Lotfi Zadeh introduced fuzzy sets and fuzzy logic in 1965."
            ),
            mcq(
                "Which expert system was developed for diagnosing bacterial blood infections?",
                ["DENDRAL", "MYCIN", "PROSPECTOR", "DEEP BLUE"],
                1,
                "MYCIN was developed at Stanford for bacterial infection diagnosis."
            ),
            mcq(
                "What is the range of membership values in a Fuzzy Set?",
                ["{0, 1}", "[0, 1]", "[-1, 1]", "[0, 100]"],
                1,
                "Fuzzy membership values range continuously between 0 and 1 inclusive."
            ),
            mcq(
                "The process of converting fuzzy output into a crisp numeric value is called:",
                ["Fuzzification", "Defuzzification", "Inference", "Unification"],
                1,
                "Defuzzification converts the aggregated fuzzy set into a crisp output."
            ),
        ],

        questions: [
            qa(
                "Explain the complete architecture of an Expert System with a block diagram description.",
                "An Expert System consists of six major modules: (1) Knowledge Base: Repository of domain-specific facts and heuristics represented as IF-THEN rules. (2) Working Memory: Stores the current input data and state of active problem solving. (3) Inference Engine: The reasoning core that executes forward or backward chaining to draw conclusions. (4) Explanation Facility: Explains to users the reasoning path (WHY a question is asked, HOW a conclusion was reached). (5) User Interface: Provides dialogue interaction for non-expert end users. (6) Knowledge Acquisition Module: Helps knowledge engineers encode new domain expertise into the system.",
                4
            ),
            qa(
                "What is Fuzzy Logic? Explain the steps of a Fuzzy Inference System (FIS).",
                "Fuzzy Logic is an extension of Boolean logic that accommodates partial truth, where membership degrees range between 0 and 1. A Fuzzy Inference System executes four steps: (1) Fuzzification: Transforms crisp input readings into linguistic variables (e.g., Temperature = 'Hot') using membership functions. (2) Rule Evaluation: Evaluates fuzzy IF-THEN rules using fuzzy operators (AND=min, OR=max) to determine rule firing strength. (3) Aggregation: Merges the truncated output fuzzy sets from all fired rules. (4) Defuzzification: Converts the final fuzzy region into a single actionable crisp control output (commonly via Centroid / Centre of Gravity calculation).",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 5 — Natural Language Processing, Ethics & Modern AI
========================================================= */

const nlpAndModernAI = createTopic(
    "nlp-and-modern-ai-applications",
    "Natural Language Processing, Ethics & Modern AI",

    [
        definition(
            "Natural Language Processing (NLP)",
            "Natural Language Processing is a subdiscipline of AI that enables computers to understand, interpret, process and generate human languages meaningfully."
        ),

        heading("Phases / Pipeline in NLP"),

        table(
            ["Phase", "Goal", "Example / Task"],
            [
                ["1. Morphological Analysis", "Breaking text into tokens, stems and roots", "Tokenization, Stemming ('running' -> 'run'), Lemmatization"],
                ["2. Syntactic Analysis (Parsing)", "Checking grammatical structure using parse trees", "Context-Free Grammars (Subject + Verb + Object)"],
                ["3. Semantic Analysis", "Extracting literal meaning of phrases and sentences", "Resolving Word Sense Ambiguity ('bank' as riverbank vs financial institution)"],
                ["4. Pragmatic Analysis", "Understanding context and real-world conversational intent", "'Can you pass the salt?' is a polite request, not a query of physical ability"],
                ["5. Discourse Integration", "Interpreting meaning across multiple sentences", "Anaphora resolution ('Rahul called Amit. He was happy.')"],
            ]
        ),

        heading("NLP Tasks and Modern Deep Learning Models"),

        list([
            "Sentiment Analysis — Classifying text as positive, negative or neutral.",
            "Machine Translation — Google Translate, sequence-to-sequence models.",
            "Large Language Models (LLMs) — Transformer-based architectures (GPT-4, Gemini, Claude, LLaMA) using self-attention mechanisms.",
            "Named Entity Recognition (NER) — Identifying names, organisations and locations.",
            "Speech-to-Text & Text-to-Speech (STT / TTS) — Voice computing and transcription.",
        ]),

        heading("Computer Vision Fundamentals"),

        text(
            "Computer Vision enables machines to extract, process and understand information from digital images and videos. Key tasks include Image Classification, Object Detection (YOLO, Faster R-CNN), and Image Segmentation using Convolutional Neural Networks (CNNs)."
        ),

        heading("Ethical Considerations and Risks in AI"),

        table(
            ["Ethical Issue", "Risk", "Mitigation Strategy"],
            [
                ["Algorithmic Bias", "Discriminatory outcomes in hiring or judicial systems", "Diverse datasets, fairness auditing"],
                ["Privacy Concerns", "Mass surveillance and unauthorised data scraping", "Data protection laws (GDPR), federated learning"],
                ["Job Displacement", "Automation replacing clerical and manual jobs", "Workforce reskilling and augmentation"],
                ["Deepfakes & Misinformation", "Synthetic media generating fake news and fraud", "Digital watermarking and cryptographic verification"],
                ["Autonomous Weaponry", "AI-controlled weapons without human oversight", "International treaties and human-in-the-loop policies"],
            ]
        ),

        note(
            "Modern AI development emphasizes Responsible AI: systems that are Transparent, Fair, Accountable, Privacy-preserving and Explainable (XAI).",
            "info",
            "Responsible AI"
        ),

        keyPoints([
            "NLP pipeline comprises Morphological, Syntactic, Semantic, Pragmatic and Discourse phases.",
            "Transformers and Self-Attention mechanisms underpin modern Large Language Models (LLMs).",
            "Computer Vision utilizes CNNs for image classification and object detection.",
            "AI ethics addresses algorithmic bias, deepfakes, privacy violations and employment impacts.",
            "Explainable AI (XAI) ensures machine decisions are interpretable by human stakeholders.",
        ]),
    ],

    {
        summary:
            "Learn NLP pipeline phases, modern LLM concepts, Computer Vision basics, and the ethical/societal implications of AI.",
        minutes: 13,
        tags: ["nlp", "transformers", "computer-vision", "ai-ethics", "llm", "important"],

        mcqs: [
            mcq(
                "Which NLP phase checks if a sentence conforms to formal grammar rules?",
                ["Morphological Analysis", "Syntactic Analysis (Parsing)", "Pragmatic Analysis", "Stemming"],
                1,
                "Syntactic analysis checks grammatical structure using formal grammar rules and parse trees."
            ),
            mcq(
                "Which neural network architecture is standard for image processing and computer vision?",
                ["Recurrent Neural Network (RNN)", "Convolutional Neural Network (CNN)", "Multilayer Perceptron", "Radial Basis Function"],
                1,
                "CNNs (Convolutional Neural Networks) are the foundation of computer vision."
            ),
            mcq(
                "Modern Large Language Models like GPT-4 are based on which core architecture?",
                ["Transformer with Self-Attention", "Decision Trees", "Expert Systems", "K-Means"],
                0,
                "Transformers with self-attention mechanisms are the foundation of modern LLMs."
            ),
            mcq(
                "The problem where an AI model reproduces societal prejudices present in its training data is called:",
                ["Underfitting", "Algorithmic Bias", "Overfitting", "Data Augmentation"],
                1,
                "Algorithmic bias occurs when training data prejudices lead to unfair model predictions."
            ),
        ],

        questions: [
            qa(
                "Explain the five major stages of Natural Language Processing (NLP).",
                "The NLP processing pipeline comprises five distinct stages: (1) Morphological / Lexical Analysis: Tokenises text into words, identifies prefixes/suffixes, and applies stemming or lemmatisation. (2) Syntactic Analysis (Parsing): Validates grammatical sentence structure and constructs parse trees following context-free grammar. (3) Semantic Analysis: Determines literal dictionary meaning and resolves semantic ambiguity. (4) Pragmatic Analysis: Interprets speaker intent and context-dependent meanings beyond literal words. (5) Discourse Integration: Interprets meaning across sequences of multiple sentences (e.g., resolving pronoun references).",
                4
            ),
            qa(
                "What are the major ethical challenges posed by modern Artificial Intelligence?",
                "Modern AI presents several ethical challenges: (1) Bias and Discrimination: Models trained on historical data can perpetuate racial, gender or economic bias in hiring, banking and law enforcement. (2) Privacy and Surveillance: Extensive data collection for model training compromises individual privacy rights. (3) Deepfakes and Misinformation: Generative models can manufacture realistic fake audio/video used for fraud and propaganda. (4) Accountability and Transparency (Black Box Problem): High-stakes medical or legal decisions made by deep networks are difficult to audit. (5) Economic Disruption: Rapid automation can displace workers, requiring proactive workforce reskilling.",
                4
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit2Topics = [
    knowledgeRepresentation,
    structuredKnowledge,
    machineLearningIntro,
    expertSystemsFuzzy,
    nlpAndModernAI,
];
