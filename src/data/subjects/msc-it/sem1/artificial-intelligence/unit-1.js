/* =========================================================
   MSc-IT • SEM 1 • Artificial Intelligence
   UNIT 1 — Artificial Intelligence and Knowledge Based Systems
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
   TOPIC 1 — Introduction to Artificial Intelligence
========================================================= */

const introToAI = createTopic(
    "introduction-to-artificial-intelligence",
    "Introduction to Artificial Intelligence",

    [
        definition(
            "Artificial Intelligence (AI)",
            "The branch of computer science concerned with building intelligent machines and software systems that can perform tasks that typically require human intelligence, such as reasoning, learning, problem solving, perception and language understanding."
        ),

        text(
            "The term Artificial Intelligence was coined by John McCarthy in 1956 at the Dartmouth Conference, which is considered the birth of AI as an academic discipline. Since then, AI has evolved from simple rule-based systems to sophisticated machine learning models that power search engines, virtual assistants, self-driving cars and medical diagnosis systems."
        ),

        heading("Definitions of AI"),

        table(
            ["Source", "Definition"],
            [
                ["John McCarthy", "The science and engineering of making intelligent machines."],
                ["Elaine Rich & Kevin Knight", "The study of how to make computers do things at which, at the moment, people are better."],
                ["Stuart Russell & Peter Norvig", "The study of agents that receive percepts from the environment and perform actions."],
                ["Encyclopaedia Britannica", "The ability of a digital computer or computer-controlled robot to perform tasks commonly associated with intelligent beings."],
            ]
        ),

        heading("Goals of AI"),

        list([
            "To create systems that can think and act like humans.",
            "To create systems that can think and act rationally.",
            "To understand the nature of intelligence and replicate it computationally.",
            "To automate tasks that require human cognitive abilities.",
            "To build systems that can learn from experience and improve over time.",
            "To solve complex problems that are impractical for humans to solve manually.",
        ]),

        heading("Categories of AI"),

        table(
            ["Category", "Description", "Example"],
            [
                ["Narrow AI (Weak AI)", "Designed for a specific task", "Siri, Alexa, Chess engines"],
                ["General AI (Strong AI)", "Can perform any intellectual task a human can", "Does not exist yet"],
                ["Super AI", "Surpasses human intelligence in all aspects", "Theoretical / Science fiction"],
            ]
        ),

        heading("Approaches to AI"),

        table(
            ["Approach", "Focus", "Example"],
            [
                ["Thinking Humanly", "Cognitive modelling — simulate human thought", "Cognitive science models"],
                ["Acting Humanly", "Turing Test — behave indistinguishably from a human", "Chatbots, conversational agents"],
                ["Thinking Rationally", "Laws of thought — use logic and reasoning", "Logic-based AI, theorem provers"],
                ["Acting Rationally", "Rational agents — take the best action to achieve goals", "Autonomous robots, game-playing AI"],
            ]
        ),

        heading("The Turing Test"),

        definition(
            "Turing Test",
            "A test proposed by Alan Turing in 1950 to determine whether a machine can exhibit intelligent behaviour indistinguishable from a human. A human evaluator converses with both a human and a machine via text. If the evaluator cannot reliably tell which is the machine, the machine is said to have passed the test."
        ),

        heading("Applications of AI"),

        table(
            ["Domain", "Application", "Example"],
            [
                ["Healthcare", "Medical diagnosis, drug discovery", "IBM Watson, radiology AI"],
                ["Finance", "Fraud detection, algorithmic trading", "Credit scoring models"],
                ["Transportation", "Self-driving cars, route optimisation", "Tesla Autopilot, Google Maps"],
                ["Education", "Personalised learning, grading", "Adaptive learning platforms"],
                ["Manufacturing", "Quality control, predictive maintenance", "Computer vision inspection"],
                ["Entertainment", "Recommendation systems, game AI", "Netflix, Spotify, chess engines"],
                ["Natural Language", "Translation, summarisation, chatbots", "ChatGPT, Google Translate"],
                ["Security", "Face recognition, anomaly detection", "Surveillance systems"],
            ]
        ),

        heading("Branches of AI"),

        list([
            "Machine Learning — systems that learn from data without explicit programming.",
            "Deep Learning — neural networks with many layers for complex pattern recognition.",
            "Natural Language Processing (NLP) — understanding and generating human language.",
            "Computer Vision — interpreting and understanding visual information.",
            "Robotics — designing and controlling physical robots.",
            "Expert Systems — rule-based systems that emulate human expert decision-making.",
            "Fuzzy Logic — reasoning with approximate rather than precise values.",
            "Genetic Algorithms — optimisation inspired by natural evolution.",
        ]),

        keyPoints([
            "AI is the science of building intelligent machines that can perform tasks requiring human intelligence.",
            "The term was coined by John McCarthy in 1956 at the Dartmouth Conference.",
            "AI can be categorised as Narrow AI, General AI or Super AI.",
            "The Turing Test evaluates whether a machine can behave indistinguishably from a human.",
            "AI has applications in healthcare, finance, transportation, education and many other domains.",
        ]),
    ],

    {
        summary:
            "Understand the definition, goals, categories, approaches and applications of Artificial Intelligence.",
        minutes: 11,
        tags: ["ai", "introduction", "turing-test", "important"],

        mcqs: [
            mcq(
                "Who coined the term 'Artificial Intelligence'?",
                ["Alan Turing", "John McCarthy", "Marvin Minsky", "Herbert Simon"],
                1,
                "John McCarthy coined the term AI in 1956 at the Dartmouth Conference."
            ),
            mcq(
                "The Turing Test was proposed by:",
                ["John McCarthy", "Alan Turing", "Noam Chomsky", "Claude Shannon"],
                1,
                "Alan Turing proposed the Turing Test in 1950."
            ),
            mcq(
                "Siri and Alexa are examples of:",
                ["General AI", "Super AI", "Narrow AI", "Strong AI"],
                2,
                "Siri and Alexa are Narrow AI — designed for specific tasks like voice assistance."
            ),
            mcq(
                "Which AI approach focuses on building rational agents?",
                ["Thinking Humanly", "Acting Humanly", "Thinking Rationally", "Acting Rationally"],
                3,
                "Acting Rationally focuses on building agents that take the best action to achieve goals."
            ),
            mcq(
                "Which of the following is NOT a branch of AI?",
                ["Machine Learning", "Natural Language Processing", "Compiler Design", "Computer Vision"],
                2,
                "Compiler Design is a branch of systems programming, not AI."
            ),
            mcq(
                "The Dartmouth Conference, considered the birth of AI, was held in:",
                ["1940", "1950", "1956", "1969"],
                2,
                "The Dartmouth Conference was held in 1956."
            ),
        ],

        questions: [
            qa(
                "Define Artificial Intelligence and explain its goals.",
                "Artificial Intelligence is the branch of computer science concerned with building intelligent machines and software systems that can perform tasks typically requiring human intelligence. John McCarthy defined it as the science and engineering of making intelligent machines. The goals of AI include creating systems that can think and act like humans, creating systems that can think and act rationally, understanding the nature of intelligence and replicating it computationally, automating tasks that require human cognitive abilities, building systems that learn from experience and improve over time, and solving complex problems that are impractical for humans to solve manually.",
                5
            ),
            qa(
                "Explain the four approaches to AI with examples.",
                "The four approaches to AI are based on two dimensions: thinking versus acting, and humanly versus rationally. Thinking Humanly focuses on cognitive modelling to simulate how humans think, such as cognitive science models of memory and reasoning. Acting Humanly focuses on the Turing Test approach where a machine behaves indistinguishably from a human, such as chatbots and conversational agents. Thinking Rationally uses the laws of thought approach with formal logic and reasoning, such as logic-based AI and theorem provers. Acting Rationally focuses on building rational agents that take the best action to achieve their goals, such as autonomous robots and game-playing AI.",
                5
            ),
            qa(
                "List and explain any five applications of AI.",
                "In healthcare, AI is used for medical diagnosis and drug discovery, for example IBM Watson analyses patient data to suggest treatments. In finance, AI detects fraudulent transactions and powers algorithmic trading systems that analyse market data in milliseconds. In transportation, self-driving cars like Tesla Autopilot use computer vision and sensor fusion to navigate roads, while Google Maps uses AI for route optimisation. In natural language processing, systems like ChatGPT and Google Translate can understand, generate and translate human language. In entertainment, recommendation systems used by Netflix and Spotify analyse user behaviour to suggest personalised content.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — History and Evolution of AI
========================================================= */

const historyOfAI = createTopic(
    "history-and-evolution-of-ai",
    "History and Evolution of AI",

    [
        text(
            "The history of AI spans over seven decades, marked by periods of great optimism, significant breakthroughs, disappointing setbacks and remarkable revivals. Understanding this history helps appreciate the current state of AI and the challenges that remain."
        ),

        heading("Timeline of AI Milestones"),

        table(
            ["Year", "Milestone", "Significance"],
            [
                ["1943", "McCulloch & Pitts neuron model", "First mathematical model of a neural network"],
                ["1950", "Alan Turing publishes 'Computing Machinery and Intelligence'", "Proposed the Turing Test"],
                ["1956", "Dartmouth Conference", "Birth of AI as an academic discipline; term 'AI' coined by McCarthy"],
                ["1958", "Perceptron by Frank Rosenblatt", "First trainable neural network"],
                ["1966", "ELIZA by Joseph Weizenbaum", "First natural language chatbot"],
                ["1969", "Minsky & Papert's 'Perceptrons' book", "Highlighted limitations of perceptrons; AI winter begins"],
                ["1970s", "Expert systems emerge", "MYCIN, DENDRAL — rule-based AI for medicine and chemistry"],
                ["1980s", "AI boom with expert systems", "Commercial success; Japan's Fifth Generation project"],
                ["1986", "Backpropagation algorithm popularised", "Revival of neural networks"],
                ["1997", "Deep Blue defeats Garry Kasparov", "First time a computer beat a world chess champion"],
                ["2006", "Deep Learning revolution begins", "Hinton's work on deep belief networks"],
                ["2011", "IBM Watson wins Jeopardy!", "Demonstrated NLP and knowledge representation"],
                ["2012", "AlexNet wins ImageNet", "Deep learning dominates computer vision"],
                ["2016", "AlphaGo defeats Lee Sedol", "AI masters the game of Go"],
                ["2017", "Transformer architecture", "Foundation for modern NLP (BERT, GPT)"],
                ["2022", "ChatGPT released", "Large language models enter mainstream"],
            ]
        ),

        heading("AI Winters"),

        definition(
            "AI Winter",
            "A period of reduced funding, interest and progress in AI research, typically caused by overpromising and underdelivering on AI capabilities."
        ),

        table(
            ["AI Winter", "Period", "Cause"],
            [
                ["First AI Winter", "1974–1980", "Minsky & Papert's criticism of perceptrons; Lighthill report in the UK"],
                ["Second AI Winter", "1987–1993", "Collapse of the expert systems market; failure of Fifth Generation project"],
            ]
        ),

        heading("Key Figures in AI History"),

        table(
            ["Person", "Contribution"],
            [
                ["Alan Turing", "Turing Test, Turing machine, foundational theory of computation"],
                ["John McCarthy", "Coined 'AI', created Lisp programming language, organised Dartmouth Conference"],
                ["Marvin Minsky", "Co-founder of MIT AI Lab, co-authored 'Perceptrons'"],
                ["Herbert Simon & Allen Newell", "Created Logic Theorist and General Problem Solver"],
                ["Frank Rosenblatt", "Invented the Perceptron"],
                ["Geoffrey Hinton", "Pioneer of deep learning and backpropagation"],
                ["Yann LeCun", "Developed convolutional neural networks (CNNs)"],
                ["Yoshua Bengio", "Contributions to deep learning and neural language models"],
            ]
        ),

        note(
            "Geoffrey Hinton, Yann LeCun and Yoshua Bengio are known as the 'Godfathers of Deep Learning' and jointly won the Turing Award in 2018 for their contributions to deep learning.",
            "exam",
            "Frequently Asked"
        ),

        heading("Evolution of AI Paradigms"),

        table(
            ["Era", "Dominant Paradigm", "Key Techniques"],
            [
                ["1950s–1960s", "Symbolic AI / Good Old-Fashioned AI (GOFAI)", "Logic, search, problem solving"],
                ["1970s–1980s", "Knowledge-Based Systems", "Expert systems, rule-based reasoning"],
                ["1980s–1990s", "Connectionism Revival", "Neural networks, backpropagation"],
                ["2000s", "Statistical AI / Machine Learning", "SVMs, decision trees, Bayesian networks"],
                ["2010s–Present", "Deep Learning", "CNNs, RNNs, Transformers, GANs"],
            ]
        ),

        keyPoints([
            "AI was born at the Dartmouth Conference in 1956, organised by John McCarthy.",
            "AI has experienced two 'winters' (1974–80 and 1987–93) due to overpromising and underdelivering.",
            "Deep Blue (1997) and AlphaGo (2016) were landmark achievements in game-playing AI.",
            "The deep learning revolution began around 2006 and accelerated after AlexNet in 2012.",
            "Hinton, LeCun and Bengio are the 'Godfathers of Deep Learning' (Turing Award 2018).",
        ]),
    ],

    {
        summary:
            "Trace the history of AI from the Dartmouth Conference through AI winters to the deep learning revolution.",
        minutes: 10,
        tags: ["ai", "history", "milestones", "ai-winter"],

        mcqs: [
            mcq(
                "The first AI chatbot ELIZA was created in:",
                ["1950", "1956", "1966", "1974"],
                2,
                "ELIZA was created by Joseph Weizenbaum at MIT in 1966."
            ),
            mcq(
                "An 'AI Winter' refers to:",
                ["A season when AI research stops", "A period of reduced funding and interest in AI", "A cooling system for AI hardware", "A type of AI algorithm"],
                1,
                "An AI Winter is a period of reduced funding, interest and progress in AI research."
            ),
            mcq(
                "Deep Blue defeated Garry Kasparov in:",
                ["1990", "1995", "1997", "2000"],
                2,
                "IBM's Deep Blue defeated world chess champion Garry Kasparov in 1997."
            ),
            mcq(
                "The 'Godfathers of Deep Learning' won the Turing Award in:",
                ["2012", "2016", "2018", "2020"],
                2,
                "Hinton, LeCun and Bengio won the Turing Award in 2018."
            ),
            mcq(
                "AlphaGo, which defeated Lee Sedol, was developed by:",
                ["IBM", "Microsoft", "DeepMind (Google)", "OpenAI"],
                2,
                "AlphaGo was developed by DeepMind, a subsidiary of Google."
            ),
        ],

        questions: [
            qa(
                "Explain the concept of AI Winters and their causes.",
                "An AI Winter is a period of reduced funding, interest and progress in artificial intelligence research, typically caused by overpromising capabilities that could not be delivered. The first AI Winter (1974–1980) was triggered by Minsky and Papert's book 'Perceptrons' which highlighted the limitations of single-layer neural networks, and the Lighthill report in the UK which criticised AI's lack of practical results. The second AI Winter (1987–1993) was caused by the collapse of the commercial expert systems market, the failure of Japan's Fifth Generation Computer project and the realisation that expert systems were expensive to maintain and brittle. Both winters led to significant funding cuts and reduced academic interest.",
                5
            ),
            qa(
                "Describe the evolution of AI paradigms from the 1950s to the present.",
                "In the 1950s and 1960s, Symbolic AI or Good Old-Fashioned AI (GOFAI) dominated, using logic, search algorithms and problem-solving techniques. The 1970s and 1980s saw the rise of Knowledge-Based Systems, particularly expert systems like MYCIN that used rule-based reasoning. The late 1980s and 1990s brought a revival of Connectionism with neural networks and the backpropagation algorithm. The 2000s shifted to Statistical AI and Machine Learning with techniques like SVMs, decision trees and Bayesian networks. From the 2010s to the present, Deep Learning has dominated with architectures like CNNs, RNNs, Transformers and GANs, powering breakthroughs in computer vision, NLP and game playing.",
                5
            ),
            qa(
                "List five key milestones in AI history with their significance.",
                "The Dartmouth Conference in 1956 is considered the birth of AI as an academic discipline, where John McCarthy coined the term. ELIZA in 1966 was the first natural language chatbot, demonstrating that machines could simulate conversation. Deep Blue defeating Kasparov in 1997 was the first time a computer beat a reigning world chess champion, showing AI's potential in complex strategic games. AlexNet winning ImageNet in 2012 demonstrated that deep learning could dramatically outperform traditional computer vision methods, igniting the deep learning revolution. AlphaGo defeating Lee Sedol in 2016 showed that AI could master games with enormous search spaces that were previously thought to require human intuition.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — Knowledge Representation
========================================================= */

const knowledgeRepresentation = createTopic(
    "knowledge-representation",
    "Knowledge Representation",

    [
        definition(
            "Knowledge Representation (KR)",
            "The area of AI concerned with how to represent information about the world in a form that a computer system can use to solve complex tasks. It involves choosing data structures and formalisms to encode knowledge so that it can be reasoned about efficiently."
        ),

        text(
            "Knowledge is the foundation of intelligent behaviour. An AI system needs knowledge about the world to make decisions, solve problems and draw conclusions. Knowledge representation determines how this knowledge is structured, stored and manipulated within the system."
        ),

        heading("Types of Knowledge"),

        table(
            ["Type", "Description", "Example"],
            [
                ["Declarative", "Facts and statements about the world", "The sky is blue. Water boils at 100°C."],
                ["Procedural", "How to do something; step-by-step instructions", "How to drive a car, how to sort a list"],
                ["Heuristic", "Rules of thumb based on experience", "If the sky is dark, it will probably rain"],
                ["Structural", "Relationships between objects and concepts", "A car has an engine, wheels and a body"],
                ["Meta-knowledge", "Knowledge about knowledge", "Knowing that expert systems use rules"],
            ]
        ),

        heading("Requirements of a Good KR System"),

        list([
            "Representational Adequacy — ability to represent all kinds of knowledge needed.",
            "Inferential Adequacy — ability to manipulate the knowledge to derive new knowledge.",
            "Inferential Efficiency — ability to direct inference mechanisms towards productive paths.",
            "Acquisitional Efficiency — ability to acquire new knowledge easily.",
        ]),

        heading("Knowledge Representation Techniques"),

        table(
            ["Technique", "Description", "Example"],
            [
                ["Logical Representation", "Uses formal logic (propositional, predicate) to represent facts and rules", "∀x (Student(x) → HasID(x))"],
                ["Semantic Networks", "Graph-based representation with nodes (concepts) and edges (relationships)", "Bird → is-a → Animal"],
                ["Frames", "Structured data records with slots and values representing stereotypical situations", "Frame: Student {name, age, course}"],
                ["Production Rules", "IF-THEN rules that encode expert knowledge", "IF fever AND cough THEN flu"],
                ["Ontologies", "Formal specification of concepts, properties and relationships in a domain", "Medical ontology with diseases and symptoms"],
            ]
        ),

        heading("1. Logical Representation"),

        heading("Propositional Logic"),

        definition(
            "Propositional Logic",
            "A branch of logic that deals with propositions (statements that are either true or false) and logical connectives such as AND, OR, NOT, IMPLIES and IF AND ONLY IF."
        ),

        table(
            ["Connective", "Symbol", "Meaning", "Example"],
            [
                ["AND (Conjunction)", "∧", "Both are true", "P ∧ Q"],
                ["OR (Disjunction)", "∨", "At least one is true", "P ∨ Q"],
                ["NOT (Negation)", "¬", "Opposite truth value", "¬P"],
                ["IMPLIES (Conditional)", "→", "If P then Q", "P → Q"],
                ["IFF (Biconditional)", "↔", "P if and only if Q", "P ↔ Q"],
            ]
        ),

        heading("Predicate Logic (First-Order Logic)"),

        definition(
            "Predicate Logic",
            "An extension of propositional logic that introduces predicates, variables, functions and quantifiers (∀ for 'for all', ∃ for 'there exists'), allowing more expressive knowledge representation."
        ),

        code(
            `Examples of Predicate Logic:

1. "All students have an ID"
   ∀x (Student(x) → HasID(x))

2. "Some students are intelligent"
   ∃x (Student(x) ∧ Intelligent(x))

3. "Rahul is a student"
   Student(Rahul)

4. "Every person has a mother"
   ∀x (Person(x) → ∃y (Mother(y, x)))`,
            "text",
            "Predicate logic examples"
        ),

        heading("2. Semantic Networks"),

        definition(
            "Semantic Network",
            "A knowledge representation technique that uses a graph structure where nodes represent concepts or objects and labelled edges represent relationships between them."
        ),

        code(
            `Semantic Network Example:

    [Animal]
     /    \\
  is-a    is-a
   /        \\
[Bird]    [Fish]
  |          |
has         has
  |          |
[Wings]   [Gills]
  |
can
  |
[Fly]

Relationships:
- Bird is-a Animal
- Fish is-a Animal
- Bird has Wings
- Fish has Gills
- Bird can Fly`,
            "text",
            "Semantic network diagram"
        ),

        heading("3. Frames"),

        definition(
            "Frame",
            "A data structure for representing stereotypical knowledge about a concept or situation. A frame consists of slots (attributes) and fillers (values), and can inherit properties from parent frames."
        ),

        code(
            `Frame: Student
  Slot: Name        → Value: Rahul
  Slot: Age         → Value: 22
  Slot: Course      → Value: MSc IT
  Slot: University  → Value: Gujarat University
  Slot: GPA         → Value: 8.5
  Slot: Status      → Default: Active

Frame: MSc-Student (inherits from Student)
  Slot: Specialisation → Value: IT
  Slot: Thesis         → Value: Pending
  Slot: Semester       → Value: 1`,
            "text",
            "Frame representation"
        ),

        heading("4. Production Rules"),

        definition(
            "Production Rule",
            "A knowledge representation format using IF-THEN (condition-action) rules. The IF part (antecedent) specifies the condition, and the THEN part (consequent) specifies the action or conclusion."
        ),

        code(
            `Rule 1: IF patient has fever AND patient has cough
        THEN patient may have flu (confidence: 0.7)

Rule 2: IF patient has fever AND patient has rash
        THEN patient may have measles (confidence: 0.8)

Rule 3: IF temperature > 103 AND patient has headache
        THEN recommend immediate consultation`,
            "text",
            "Production rules for medical diagnosis"
        ),

        heading("Comparison of KR Techniques"),

        table(
            ["Technique", "Expressiveness", "Ease of Use", "Inference", "Best For"],
            [
                ["Propositional Logic", "Low", "Easy", "Truth tables, resolution", "Simple facts"],
                ["Predicate Logic", "High", "Moderate", "Resolution, unification", "Complex relationships"],
                ["Semantic Networks", "Moderate", "Easy (visual)", "Inheritance, traversal", "Hierarchical concepts"],
                ["Frames", "Moderate", "Moderate", "Default reasoning, inheritance", "Structured objects"],
                ["Production Rules", "Moderate", "Easy", "Forward/backward chaining", "Expert systems"],
            ]
        ),

        keyPoints([
            "Knowledge representation encodes world knowledge in a form that AI systems can reason about.",
            "Types of knowledge include declarative, procedural, heuristic, structural and meta-knowledge.",
            "Major KR techniques are logic, semantic networks, frames, production rules and ontologies.",
            "Predicate logic is more expressive than propositional logic due to quantifiers and variables.",
            "Semantic networks use graphs; frames use slot-filler structures with inheritance.",
        ]),
    ],

    {
        summary:
            "Learn knowledge representation techniques including propositional and predicate logic, semantic networks, frames and production rules.",
        minutes: 13,
        tags: ["ai", "knowledge-representation", "logic", "semantic-networks", "important"],

        mcqs: [
            mcq(
                "Knowledge Representation is concerned with:",
                ["Storing data in databases", "Representing information so a computer can reason about it", "Compressing files", "Displaying graphics"],
                1,
                "KR focuses on encoding knowledge in a form that AI systems can use for reasoning."
            ),
            mcq(
                "Which quantifier means 'for all' in predicate logic?",
                ["∃", "∀", "→", "¬"],
                1,
                "The universal quantifier ∀ means 'for all' or 'for every'."
            ),
            mcq(
                "A semantic network represents knowledge using:",
                ["Tables", "IF-THEN rules", "Nodes and labelled edges in a graph", "Arrays"],
                2,
                "Semantic networks use a graph with nodes for concepts and labelled edges for relationships."
            ),
            mcq(
                "In a frame, a slot represents:",
                ["A relationship between frames", "An attribute or property", "A logical connective", "A quantifier"],
                1,
                "Slots in a frame represent attributes or properties of the concept being described."
            ),
            mcq(
                "The IF part of a production rule is called the:",
                ["Consequent", "Antecedent", "Conclusion", "Action"],
                1,
                "The IF part (condition) is called the antecedent; the THEN part is the consequent."
            ),
            mcq(
                "Which KR technique supports inheritance?",
                ["Propositional logic only", "Semantic networks and frames", "Production rules only", "None of the above"],
                1,
                "Both semantic networks and frames support inheritance of properties from parent to child."
            ),
        ],

        questions: [
            qa(
                "Explain the different types of knowledge with examples.",
                "Declarative knowledge consists of facts and statements about the world, such as 'Water boils at 100°C' or 'Delhi is the capital of India'. Procedural knowledge describes how to do something, such as the steps to drive a car or the algorithm to sort a list. Heuristic knowledge consists of rules of thumb based on experience, such as 'If the sky is dark, it will probably rain'. Structural knowledge describes relationships between objects and concepts, such as 'A car has an engine, wheels and a body'. Meta-knowledge is knowledge about knowledge, such as knowing that expert systems use production rules for reasoning.",
                5
            ),
            qa(
                "Compare propositional logic and predicate logic.",
                "Propositional logic deals with simple propositions that are either true or false, combined using logical connectives like AND, OR, NOT and IMPLIES. For example, P ∧ Q means both P and Q are true. It cannot represent relationships between objects or generalise over individuals. Predicate logic (first-order logic) extends propositional logic by introducing predicates that take arguments, variables, functions and quantifiers. The universal quantifier ∀ means 'for all' and the existential quantifier ∃ means 'there exists'. For example, ∀x(Student(x) → HasID(x)) means all students have an ID. Predicate logic is far more expressive and can represent complex relationships, but reasoning in predicate logic is computationally harder than in propositional logic.",
                5
            ),
            qa(
                "Explain semantic networks and frames as knowledge representation techniques.",
                "A semantic network is a graph-based representation where nodes represent concepts or objects and labelled edges represent relationships between them. For example, a node 'Bird' connected to 'Animal' by an 'is-a' edge represents that a bird is a type of animal. Semantic networks support inheritance, meaning a bird inherits properties of animals. A frame is a structured data record that represents stereotypical knowledge about a concept using slots (attributes) and fillers (values). For example, a Student frame might have slots for Name, Age and Course. Frames also support inheritance, so an MSc-Student frame can inherit slots from a Student frame and add specialised slots like Thesis and Specialisation.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — Knowledge-Based Systems and Expert Systems
========================================================= */

const knowledgeBasedSystems = createTopic(
    "knowledge-based-systems-and-expert-systems",
    "Knowledge-Based Systems and Expert Systems",

    [
        definition(
            "Knowledge-Based System (KBS)",
            "A computer system that uses a knowledge base of facts and rules, along with an inference engine, to solve complex problems in a specific domain by emulating the decision-making ability of a human expert."
        ),

        definition(
            "Expert System",
            "A type of knowledge-based system that captures the expertise of human specialists in a specific domain and uses it to provide advice, make decisions or solve problems at an expert level."
        ),

        text(
            "Expert systems were among the first commercially successful applications of AI, emerging in the 1970s and peaking in the 1980s. They demonstrated that AI could deliver practical value in domains like medical diagnosis, chemical analysis, financial planning and equipment troubleshooting."
        ),

        heading("Components of an Expert System"),

        table(
            ["Component", "Purpose"],
            [
                ["Knowledge Base", "Stores domain-specific facts and rules provided by human experts"],
                ["Inference Engine", "Applies logical rules to the knowledge base to deduce new information or reach conclusions"],
                ["User Interface", "Allows users to interact with the system, ask questions and receive explanations"],
                ["Explanation Facility", "Explains how and why the system reached a particular conclusion"],
                ["Knowledge Acquisition Module", "Tools for acquiring and updating knowledge from experts"],
                ["Working Memory", "Stores the current problem data and intermediate results during reasoning"],
            ]
        ),

        code(
            `Architecture of an Expert System:

┌─────────────────────────────────────────┐
│            USER INTERFACE               │
│   (Questions, Answers, Explanations)    │
└──────────────┬──────────────────────────┘
               │
┌──────────────▼──────────────────────────┐
│          INFERENCE ENGINE               │
│   (Forward / Backward Chaining)         │
└───────┬──────────────────┬──────────────┘
        │                  │
┌───────▼───────┐  ┌───────▼───────────┐
│  KNOWLEDGE    │  │   WORKING         │
│  BASE         │  │   MEMORY          │
│  (Rules &     │  │  (Current Facts   │
│   Facts)      │  │   & Data)         │
└───────────────┘  └───────────────────┘
        │
┌───────▼───────────────────────────────┐
│   KNOWLEDGE ACQUISITION MODULE        │
│   (Expert → Knowledge Engineer)       │
└───────────────────────────────────────┘`,
            "text",
            "Expert system architecture"
        ),

        heading("Inference Engine Strategies"),

        table(
            ["Strategy", "Direction", "How It Works", "Best For"],
            [
                ["Forward Chaining", "Data-driven (bottom-up)", "Starts with known facts, applies rules to derive new facts until a goal is reached", "Monitoring, planning, interpretation"],
                ["Backward Chaining", "Goal-driven (top-down)", "Starts with a hypothesis (goal), works backward to find supporting facts", "Diagnosis, classification"],
            ]
        ),

        heading("Forward Chaining Example"),

        code(
            `Rules:
  R1: IF animal has hair THEN animal is a mammal
  R2: IF animal gives milk THEN animal is a mammal
  R3: IF animal is a mammal AND animal has hooves THEN animal is an ungulate
  R4: IF animal is an ungulate AND animal has black stripes THEN animal is a zebra

Known Facts:
  - Animal has hair
  - Animal has hooves
  - Animal has black stripes

Forward Chaining Process:
  Step 1: R1 fires → "animal is a mammal" (new fact)
  Step 2: R3 fires → "animal is an ungulate" (new fact)
  Step 3: R4 fires → "animal is a zebra" (conclusion)`,
            "text",
            "Forward chaining example"
        ),

        heading("Backward Chaining Example"),

        code(
            `Goal: Is the animal a zebra?

Backward Chaining Process:
  Step 1: To prove "zebra", need R4: ungulate AND black stripes
  Step 2: Black stripes? → Yes (known fact) ✓
  Step 3: To prove "ungulate", need R3: mammal AND hooves
  Step 4: Hooves? → Yes (known fact) ✓
  Step 5: To prove "mammal", need R1: has hair OR R2: gives milk
  Step 6: Has hair? → Yes (known fact) ✓
  Conclusion: The animal IS a zebra ✓`,
            "text",
            "Backward chaining example"
        ),

        heading("Famous Expert Systems"),

        table(
            ["System", "Domain", "Developer", "Year"],
            [
                ["DENDRAL", "Chemical analysis (molecular structure)", "Stanford University", "1965"],
                ["MYCIN", "Medical diagnosis (blood infections)", "Stanford University", "1976"],
                ["PROSPECTOR", "Mineral exploration", "SRI International", "1979"],
                ["XCON (R1)", "Computer configuration", "DEC / Carnegie Mellon", "1980"],
                ["CADUCEUS", "Internal medicine diagnosis", "University of Pittsburgh", "1984"],
            ]
        ),

        heading("Advantages of Expert Systems"),

        list([
            "Preserve expert knowledge even when the expert leaves the organisation.",
            "Provide consistent, reliable and unbiased advice.",
            "Available 24/7 without fatigue or distraction.",
            "Can explain their reasoning through the explanation facility.",
            "Reduce the cost of expert consultation for routine problems.",
            "Can be used for training new personnel in a domain.",
        ]),

        heading("Limitations of Expert Systems"),

        list([
            "Knowledge acquisition bottleneck — extracting knowledge from experts is slow and difficult.",
            "Brittle — they fail gracefully only within their narrow domain.",
            "Cannot learn from experience; knowledge must be manually updated.",
            "Expensive to develop and maintain.",
            "Lack common sense reasoning.",
            "Cannot handle uncertainty well without extensions like fuzzy logic or probability.",
        ]),

        note(
            "The knowledge acquisition bottleneck was the single biggest challenge for expert systems. It refers to the difficulty, time and cost of extracting knowledge from human experts and encoding it into rules that the system can use.",
            "exam",
            "Frequently Asked"
        ),

        keyPoints([
            "An expert system has a knowledge base, inference engine, user interface and explanation facility.",
            "Forward chaining is data-driven (starts from facts); backward chaining is goal-driven (starts from hypothesis).",
            "MYCIN and DENDRAL were pioneering expert systems in medicine and chemistry.",
            "Expert systems preserve expert knowledge and provide consistent, explainable advice.",
            "The knowledge acquisition bottleneck is the main challenge in building expert systems.",
        ]),
    ],

    {
        summary:
            "Understand the architecture of expert systems, forward and backward chaining inference, and the advantages and limitations of knowledge-based systems.",
        minutes: 12,
        tags: ["ai", "expert-systems", "knowledge-based", "inference", "important"],

        mcqs: [
            mcq(
                "The component of an expert system that applies rules to derive conclusions is the:",
                ["Knowledge base", "Inference engine", "User interface", "Working memory"],
                1,
                "The inference engine applies logical rules to the knowledge base to deduce new information."
            ),
            mcq(
                "Forward chaining is:",
                ["Goal-driven", "Data-driven", "Random", "User-driven"],
                1,
                "Forward chaining is data-driven — it starts with known facts and applies rules to derive new facts."
            ),
            mcq(
                "MYCIN was an expert system for:",
                ["Chemical analysis", "Computer configuration", "Medical diagnosis of blood infections", "Mineral exploration"],
                2,
                "MYCIN was developed at Stanford for diagnosing bacterial blood infections."
            ),
            mcq(
                "The 'knowledge acquisition bottleneck' refers to:",
                ["Slow computer processing", "Difficulty in extracting knowledge from human experts", "Limited memory", "Network bandwidth"],
                1,
                "It refers to the difficulty, time and cost of extracting and encoding expert knowledge into rules."
            ),
            mcq(
                "Backward chaining starts with:",
                ["Known facts", "A hypothesis or goal", "Random data", "User input only"],
                1,
                "Backward chaining is goal-driven — it starts with a hypothesis and works backward to find supporting facts."
            ),
        ],

        questions: [
            qa(
                "Explain the components of an expert system.",
                "An expert system consists of six main components. The knowledge base stores domain-specific facts and rules provided by human experts. The inference engine applies logical rules to the knowledge base and working memory to deduce new information or reach conclusions, using strategies like forward or backward chaining. The user interface allows users to interact with the system by asking questions and receiving answers and explanations. The explanation facility explains how and why the system reached a particular conclusion, which builds user trust. The knowledge acquisition module provides tools for acquiring and updating knowledge from domain experts. The working memory stores the current problem data and intermediate results during the reasoning process.",
                5
            ),
            qa(
                "Differentiate between forward chaining and backward chaining with examples.",
                "Forward chaining is a data-driven approach that starts with known facts and applies rules to derive new facts until a goal is reached. For example, if we know an animal has hair, rule R1 fires to conclude it is a mammal, then rule R3 fires if it also has hooves to conclude it is an ungulate, and so on until a final conclusion is reached. It is best for monitoring, planning and interpretation tasks. Backward chaining is a goal-driven approach that starts with a hypothesis and works backward to find supporting facts. For example, to prove an animal is a zebra, the system checks what conditions are needed (ungulate and black stripes), then recursively checks what is needed to prove ungulate (mammal and hooves), until all conditions are verified against known facts. It is best for diagnosis and classification.",
                5
            ),
            qa(
                "Explain the advantages and limitations of expert systems.",
                "The advantages include preserving expert knowledge even when experts leave, providing consistent and unbiased advice, being available 24/7 without fatigue, explaining their reasoning through the explanation facility, reducing the cost of expert consultation and serving as training tools for new personnel. The limitations include the knowledge acquisition bottleneck, which makes extracting knowledge from experts slow and expensive. Expert systems are brittle and fail outside their narrow domain. They cannot learn from experience and require manual knowledge updates. They are expensive to develop and maintain, lack common sense reasoning, and cannot handle uncertainty well without extensions like fuzzy logic or probabilistic reasoning.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 5 — Reasoning and Inference in AI
========================================================= */

const reasoningAndInference = createTopic(
    "reasoning-and-inference-in-ai",
    "Reasoning and Inference in AI",

    [
        definition(
            "Reasoning",
            "The process of drawing logical conclusions and making predictions from available knowledge, facts and beliefs. In AI, reasoning enables a system to derive new information from existing knowledge."
        ),

        definition(
            "Inference",
            "The process of deriving logical conclusions from premises known or assumed to be true. Inference is the mechanism by which an AI system applies rules and knowledge to reach conclusions."
        ),

        heading("Types of Reasoning"),

        table(
            ["Type", "Description", "Direction", "Certainty", "Example"],
            [
                ["Deductive", "Derives specific conclusions from general rules", "General → Specific", "Certain (if premises are true)", "All men are mortal. Socrates is a man. → Socrates is mortal."],
                ["Inductive", "Derives general rules from specific observations", "Specific → General", "Probable (not certain)", "Every swan I've seen is white. → All swans are white."],
                ["Abductive", "Finds the most likely explanation for an observation", "Observation → Best explanation", "Plausible (best guess)", "The grass is wet. → It probably rained."],
                ["Analogical", "Draws conclusions based on similarity between situations", "Similar → Similar", "Probable", "This patient's symptoms are like a previous flu case. → Likely flu."],
                ["Common Sense", "Uses everyday knowledge and experience", "Varies", "Usually correct", "If you drop a glass, it will probably break."],
                ["Monotonic", "Adding new knowledge never invalidates old conclusions", "—", "Certain", "Mathematical proofs"],
                ["Non-Monotonic", "New knowledge can invalidate previous conclusions", "—", "Revisable", "Birds fly. Tweety is a bird. → Tweety flies. But Tweety is a penguin. → Tweety does not fly."],
            ]
        ),

        heading("Deductive Reasoning in Detail"),

        text(
            "Deductive reasoning is the most rigorous form of reasoning. If the premises are true and the logic is valid, the conclusion is guaranteed to be true. It is the foundation of mathematical proofs and formal logic in AI."
        ),

        code(
            `Example of Deductive Reasoning:

Premise 1: All MSc IT students study Python.
Premise 2: Rahul is an MSc IT student.
Conclusion: Rahul studies Python.

This is valid because the conclusion necessarily follows from the premises.
If both premises are true, the conclusion MUST be true.`,
            "text",
            "Deductive reasoning"
        ),

        heading("Inductive Reasoning in Detail"),

        code(
            `Example of Inductive Reasoning:

Observation 1: Student A studied hard and got good marks.
Observation 2: Student B studied hard and got good marks.
Observation 3: Student C studied hard and got good marks.
Generalisation: Students who study hard get good marks.

This is probable but not certain — a student might study hard
and still get poor marks due to other factors.`,
            "text",
            "Inductive reasoning"
        ),

        heading("Abductive Reasoning in Detail"),

        code(
            `Example of Abductive Reasoning:

Observation: The patient has fever, cough and body ache.
Known rule: Flu causes fever, cough and body ache.
Best explanation: The patient probably has flu.

This is the most likely explanation but not certain —
other diseases could cause the same symptoms.`,
            "text",
            "Abductive reasoning"
        ),

        note(
            "Medical diagnosis is a classic example of abductive reasoning. Doctors observe symptoms and infer the most likely disease, even though multiple diseases could explain the same symptoms.",
            "tip",
            "Real-World Application"
        ),

        heading("Monotonic versus Non-Monotonic Reasoning"),

        table(
            ["Aspect", "Monotonic", "Non-Monotonic"],
            [
                ["New knowledge", "Never invalidates old conclusions", "Can invalidate old conclusions"],
                ["Certainty", "Absolute", "Tentative / Revisable"],
                ["Example domain", "Mathematics, formal logic", "Common sense, medical diagnosis"],
                ["Example", "2+2=4 is always true", "Birds fly, but penguins are birds that don't fly"],
                ["Used in", "Theorem provers", "Expert systems, real-world AI"],
            ]
        ),

        heading("Inference Methods in AI"),

        table(
            ["Method", "Description", "Used In"],
            [
                ["Modus Ponens", "If P → Q and P is true, then Q is true", "Rule-based systems"],
                ["Modus Tollens", "If P → Q and Q is false, then P is false", "Logical reasoning"],
                ["Resolution", "A refutation-based method for proving theorems in logic", "Automated theorem proving"],
                ["Unification", "Finding substitutions that make two expressions identical", "Predicate logic, Prolog"],
                ["Forward Chaining", "Data-driven inference from facts to conclusions", "Production systems"],
                ["Backward Chaining", "Goal-driven inference from hypothesis to facts", "Diagnostic systems"],
            ]
        ),

        heading("Modus Ponens and Modus Tollens"),

        code(
            `Modus Ponens:
  Premise 1: IF it rains THEN the ground is wet.  (P → Q)
  Premise 2: It is raining.                        (P)
  Conclusion: The ground is wet.                   (Q)

Modus Tollens:
  Premise 1: IF it rains THEN the ground is wet.  (P → Q)
  Premise 2: The ground is NOT wet.               (¬Q)
  Conclusion: It is NOT raining.                  (¬P)`,
            "text",
            "Modus Ponens and Modus Tollens"
        ),

        heading("Resolution"),

        definition(
            "Resolution",
            "A rule of inference used in automated theorem proving. It works by refutation: to prove a statement, you assume its negation and try to derive a contradiction (empty clause)."
        ),

        code(
            `Resolution Example:

Clauses:
  C1: P ∨ Q      (P or Q is true)
  C2: ¬P ∨ R     (Not P or R is true)

Resolving on P:
  C3: Q ∨ R      (Q or R is true)

If we also have:
  C4: ¬Q         (Q is false)

Resolving C3 and C4 on Q:
  C5: R          (R must be true)`,
            "text",
            "Resolution in propositional logic"
        ),

        keyPoints([
            "Deductive reasoning goes from general to specific with certainty; inductive goes from specific to general with probability.",
            "Abductive reasoning finds the best explanation for an observation.",
            "Non-monotonic reasoning allows conclusions to be revised when new information arrives.",
            "Modus Ponens: If P→Q and P, then Q. Modus Tollens: If P→Q and ¬Q, then ¬P.",
            "Resolution is a refutation-based inference method used in automated theorem proving.",
        ]),
    ],

    {
        summary:
            "Master types of reasoning (deductive, inductive, abductive), monotonic vs non-monotonic reasoning, and inference methods like Modus Ponens and resolution.",
        minutes: 12,
        tags: ["ai", "reasoning", "inference", "deductive", "inductive", "important"],

        mcqs: [
            mcq(
                "Deductive reasoning goes from:",
                ["Specific to general", "General to specific", "Observation to hypothesis", "Effect to cause"],
                1,
                "Deductive reasoning derives specific conclusions from general rules or premises."
            ),
            mcq(
                "Abductive reasoning is best described as:",
                ["Deriving certain conclusions from rules", "Finding the most likely explanation for an observation", "Generalising from examples", "Mathematical proof"],
                1,
                "Abductive reasoning infers the best or most likely explanation for an observation."
            ),
            mcq(
                "In non-monotonic reasoning:",
                ["Conclusions are permanent", "New knowledge can invalidate previous conclusions", "Only mathematical proofs are used", "Reasoning is always certain"],
                1,
                "Non-monotonic reasoning allows conclusions to be revised when new information is added."
            ),
            mcq(
                "Modus Ponens states that if P → Q and P is true, then:",
                ["P is false", "Q is false", "Q is true", "Nothing can be concluded"],
                2,
                "Modus Ponens: given P → Q and P, we can conclude Q."
            ),
            mcq(
                "Resolution works by:",
                ["Direct proof", "Refutation (proof by contradiction)", "Induction", "Analogy"],
                1,
                "Resolution proves a statement by assuming its negation and deriving a contradiction."
            ),
            mcq(
                "'All swans I have seen are white, therefore all swans are white' is an example of:",
                ["Deductive reasoning", "Inductive reasoning", "Abductive reasoning", "Analogical reasoning"],
                1,
                "This generalises from specific observations to a general rule, which is inductive reasoning."
            ),
        ],

        questions: [
            qa(
                "Explain deductive, inductive and abductive reasoning with examples.",
                "Deductive reasoning derives specific conclusions from general rules with certainty. For example, all MSc IT students study Python, Rahul is an MSc IT student, therefore Rahul studies Python. If the premises are true, the conclusion must be true. Inductive reasoning derives general rules from specific observations with probability. For example, student A studied hard and got good marks, student B studied hard and got good marks, therefore students who study hard get good marks. This is probable but not certain. Abductive reasoning finds the most likely explanation for an observation. For example, a patient has fever, cough and body ache, and since flu causes these symptoms, the best explanation is that the patient has flu. This is plausible but not certain because other diseases could cause the same symptoms.",
                5
            ),
            qa(
                "Differentiate between monotonic and non-monotonic reasoning.",
                "In monotonic reasoning, adding new knowledge never invalidates previously derived conclusions. Once a conclusion is proven, it remains true regardless of any new information. Mathematical proofs are monotonic: once 2+2=4 is proven, no new information can change this. In non-monotonic reasoning, new knowledge can invalidate or revise previous conclusions. For example, we know birds fly and Tweety is a bird, so we conclude Tweety flies. But if we later learn Tweety is a penguin, we must revise our conclusion to Tweety does not fly. Non-monotonic reasoning is essential for real-world AI because it deals with incomplete and changing information, common sense reasoning and default assumptions.",
                5
            ),
            qa(
                "Explain Modus Ponens and Modus Tollens with examples.",
                "Modus Ponens is a rule of inference that states: if P implies Q, and P is true, then Q must be true. For example, if it rains then the ground is wet (P → Q), and it is raining (P), therefore the ground is wet (Q). Modus Tollens states: if P implies Q, and Q is false, then P must be false. For example, if it rains then the ground is wet (P → Q), and the ground is not wet (¬Q), therefore it is not raining (¬P). Both are valid forms of deductive reasoning and are fundamental inference rules used in rule-based AI systems and logical reasoning.",
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
    historyOfAI,
    knowledgeRepresentation,
    knowledgeBasedSystems,
    reasoningAndInference,
];