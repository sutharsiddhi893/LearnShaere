/* =========================================================
   MSc-IT • SEM 1 • Artificial Intelligence
   UNIT 3 — Connectionist Models
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
   TOPIC 1 — Introduction to Connectionist Models
========================================================= */

const introToConnectionistModels = createTopic(
    "introduction-to-connectionist-models",
    "Introduction to Connectionist Models",

    [
        definition(
            "Connectionist Model",
            "A computational model inspired by the structure and function of the human brain, consisting of a large number of simple processing units (neurons) connected by weighted links. Also known as Artificial Neural Networks (ANNs) or Parallel Distributed Processing (PDP) models."
        ),

        text(
            "Connectionist models represent a fundamentally different approach to AI compared to symbolic AI. Instead of manipulating symbols and rules, connectionist models learn patterns from data through the adjustment of connection weights. This approach is inspired by the biological neural network of the human brain, which consists of approximately 86 billion neurons interconnected by trillions of synapses."
        ),

        heading("Biological Neuron versus Artificial Neuron"),

        table(
            ["Component", "Biological Neuron", "Artificial Neuron"],
            [
                ["Input", "Dendrites receive signals", "Input values (x₁, x₂, ..., xₙ)"],
                ["Connection", "Synapses with varying strength", "Weights (w₁, w₂, ..., wₙ)"],
                ["Processing", "Cell body sums signals", "Weighted sum: Σ(wᵢ × xᵢ) + bias"],
                ["Activation", "Fires if threshold exceeded", "Activation function f(sum)"],
                ["Output", "Axon transmits signal", "Output value y = f(Σwᵢxᵢ + b)"],
            ]
        ),

        code(
            `Biological Neuron:

  Dendrites → Cell Body (Soma) → Axon → Synapse → Next Neuron
  (Inputs)    (Summation)       (Output)  (Connection)

Artificial Neuron:

  x₁ ── w₁ ──┐
  x₂ ── w₂ ──┤
  x₃ ── w₃ ──┼──→ [ Σ wᵢxᵢ + b ] ──→ [ f(·) ] ──→ y
  ...        │     (Weighted Sum)    (Activation)  (Output)
  xₙ ── wₙ ──┘
       b ────┘
       (Bias)`,
            "text",
            "Biological vs artificial neuron"
        ),

        heading("Key Characteristics of Connectionist Models"),

        list([
            "Parallel Processing — many neurons operate simultaneously.",
            "Distributed Representation — knowledge is stored across many connections, not in one location.",
            "Learning from Data — weights are adjusted through training rather than being programmed manually.",
            "Fault Tolerance — the network can still function even if some neurons or connections fail.",
            "Generalisation — trained networks can handle previously unseen inputs.",
            "Non-linearity — activation functions allow networks to model complex non-linear relationships.",
        ]),

        heading("History of Neural Networks"),

        table(
            ["Year", "Milestone", "Significance"],
            [
                ["1943", "McCulloch-Pitts neuron model", "First mathematical model of a neuron"],
                ["1949", "Hebb's learning rule", "\"Neurons that fire together wire together\""],
                ["1958", "Rosenblatt's Perceptron", "First trainable neural network"],
                ["1960", "ADALINE by Widrow & Hoff", "Adaptive linear neuron with LMS learning"],
                ["1969", "Minsky & Papert's 'Perceptrons'", "Proved XOR cannot be solved by single-layer perceptron"],
                ["1986", "Backpropagation popularised", "Rumelhart, Hinton & Williams solved multi-layer training"],
                ["1989", "Universal Approximation Theorem", "Proved MLPs can approximate any continuous function"],
                ["2012", "AlexNet wins ImageNet", "Deep learning revolution begins"],
            ]
        ),

        heading("Types of Neural Networks"),

        table(
            ["Type", "Structure", "Data Flow", "Use Case"],
            [
                ["Feedforward", "Layers with no cycles", "Input → Output (one direction)", "Classification, regression"],
                ["Recurrent (RNN)", "Connections form cycles", "Output feeds back as input", "Sequences, time series, NLP"],
                ["Convolutional (CNN)", "Convolutional + pooling layers", "Feedforward with shared weights", "Image recognition"],
                ["Autoencoder", "Encoder-decoder structure", "Input → compressed → reconstructed", "Dimensionality reduction"],
                ["GAN", "Generator + Discriminator", "Adversarial training", "Image generation"],
                ["Radial Basis Function", "RBF hidden layer", "Feedforward", "Function approximation"],
            ]
        ),

        heading("Components of a Neural Network"),

        table(
            ["Component", "Purpose"],
            [
                ["Input Layer", "Receives the raw input features"],
                ["Hidden Layer(s)", "Performs intermediate computations and feature extraction"],
                ["Output Layer", "Produces the final prediction or classification"],
                ["Weights", "Connection strengths that are learned during training"],
                ["Bias", "An adjustable offset added to the weighted sum"],
                ["Activation Function", "Introduces non-linearity into the output of a neuron"],
                ["Loss Function", "Measures how far the prediction is from the actual value"],
                ["Optimiser", "Algorithm that adjusts weights to minimise the loss"],
            ]
        ),

        note(
            "The term 'deep learning' refers to neural networks with many hidden layers (typically more than two). The 'deep' in deep learning refers to the depth (number of layers) of the network.",
            "tip",
            "Terminology"
        ),

        keyPoints([
            "Connectionist models are inspired by the biological brain and consist of interconnected artificial neurons.",
            "An artificial neuron computes a weighted sum of inputs, adds a bias and applies an activation function.",
            "Key characteristics include parallel processing, distributed representation, learning from data and fault tolerance.",
            "Neural network types include feedforward, recurrent, convolutional, autoencoder and GAN.",
            "A network has input, hidden and output layers with weights, biases and activation functions.",
        ]),
    ],

    {
        summary:
            "Understand connectionist models, the biological inspiration, artificial neuron structure, history and types of neural networks.",
        minutes: 12,
        tags: ["ai", "neural-networks", "connectionist", "perceptron", "important"],

        mcqs: [
            mcq(
                "Connectionist models are also known as:",
                ["Expert systems", "Artificial Neural Networks", "Fuzzy systems", "Genetic algorithms"],
                1,
                "Connectionist models are also called Artificial Neural Networks (ANNs)."
            ),
            mcq(
                "The McCulloch-Pitts neuron model was proposed in:",
                ["1958", "1943", "1969", "1986"],
                1,
                "McCulloch and Pitts proposed their mathematical neuron model in 1943."
            ),
            mcq(
                "In an artificial neuron, the weighted sum is passed through:",
                ["A loss function", "An activation function", "A convolution filter", "A genetic operator"],
                1,
                "The activation function introduces non-linearity by transforming the weighted sum."
            ),
            mcq(
                "Which type of neural network is best suited for image recognition?",
                ["RNN", "CNN", "Autoencoder", "GAN"],
                1,
                "Convolutional Neural Networks (CNNs) are specifically designed for image recognition."
            ),
            mcq(
                "Hebb's learning rule states:",
                ["Weights decrease with use", "Neurons that fire together wire together", "Only output neurons learn", "Learning requires a teacher"],
                1,
                "Hebb's rule states that connections strengthen when both neurons are active simultaneously."
            ),
            mcq(
                "The 'deep' in deep learning refers to:",
                ["The complexity of data", "The number of hidden layers", "The training time", "The size of the dataset"],
                1,
                "'Deep' refers to the depth of the network, meaning many hidden layers."
            ),
        ],

        questions: [
            qa(
                "Compare a biological neuron with an artificial neuron.",
                "A biological neuron receives signals through dendrites, processes them in the cell body (soma), and transmits output through the axon to other neurons via synapses of varying strength. An artificial neuron mirrors this structure: it receives input values (x₁, x₂, ..., xₙ) analogous to dendrites, multiplies each by a weight (w₁, w₂, ..., wₙ) analogous to synaptic strength, computes a weighted sum plus a bias analogous to the cell body's summation, applies an activation function analogous to the firing threshold, and produces an output analogous to the axon signal. The key difference is that biological neurons are far more complex, involving chemical and electrical processes, while artificial neurons are simplified mathematical models.",
                5
            ),
            qa(
                "Explain the key characteristics of connectionist models.",
                "Connectionist models exhibit parallel processing, meaning many neurons operate simultaneously rather than sequentially. They use distributed representation, where knowledge is stored across many connection weights rather than in a single location, providing fault tolerance — the network can still function even if some neurons or connections fail. They learn from data by adjusting weights through training algorithms rather than being manually programmed with rules. They can generalise, meaning a trained network can handle previously unseen inputs by recognising patterns similar to those in the training data. They support non-linearity through activation functions, allowing them to model complex relationships that linear models cannot capture.",
                5
            ),
            qa(
                "List and briefly explain four types of neural networks.",
                "Feedforward neural networks have layers arranged sequentially with no cycles; data flows in one direction from input to output. They are used for classification and regression tasks. Recurrent Neural Networks (RNNs) have connections that form cycles, allowing output to feed back as input, giving them memory of previous inputs. They are used for sequential data like time series and natural language. Convolutional Neural Networks (CNNs) use convolutional and pooling layers with shared weights to automatically extract spatial features from images. They are the dominant architecture for image recognition. Generative Adversarial Networks (GANs) consist of a generator that creates synthetic data and a discriminator that tries to distinguish real from fake data, trained adversarially. They are used for image generation and data augmentation.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — The Perceptron and Learning Rules
========================================================= */

const perceptronAndLearningRules = createTopic(
    "the-perceptron-and-learning-rules",
    "The Perceptron and Learning Rules",

    [
        definition(
            "Perceptron",
            "The simplest type of artificial neural network, invented by Frank Rosenblatt in 1958. It consists of a single neuron that takes multiple inputs, computes a weighted sum, applies a step activation function and produces a binary output (0 or 1). It is a linear binary classifier."
        ),

        text(
            "The perceptron was a groundbreaking invention because it was the first neural network model that could learn from data. Rosenblatt demonstrated that the perceptron could learn to classify patterns by adjusting its weights using a simple learning rule. However, its limitation to linearly separable problems was famously exposed by Minsky and Papert in 1969."
        ),

        heading("Perceptron Architecture"),

        code(
            `Perceptron Structure:

  x₁ ── w₁ ──┐
  x₂ ── w₂ ──┤
  x₃ ── w₃ ──┼──→ [ z = Σwᵢxᵢ + b ] ──→ [ Step(z) ] ──→ y (0 or 1)
  ...        │
  xₙ ── wₙ ──┘
       b ────┘

  Step function:
    y = 1  if z ≥ 0
    y = 0  if z < 0`,
            "text",
            "Perceptron architecture"
        ),

        heading("Perceptron Computation"),

        code(
            `Mathematical Formula:

  z = w₁x₁ + w₂x₂ + ... + wₙxₙ + b
  z = Σ(wᵢ × xᵢ) + b

  Output:
  y = 1  if z ≥ 0  (neuron fires)
  y = 0  if z < 0  (neuron does not fire)

Example:
  Inputs: x₁ = 0.5, x₂ = 0.8
  Weights: w₁ = 0.4, w₂ = 0.6
  Bias: b = -0.5

  z = (0.4 × 0.5) + (0.6 × 0.8) + (-0.5)
  z = 0.2 + 0.48 - 0.5
  z = 0.18

  Since z ≥ 0, output y = 1`,
            "text",
            "Perceptron computation example"
        ),

        heading("Perceptron Learning Rule"),

        definition(
            "Perceptron Learning Rule",
            "A supervised learning algorithm that adjusts the weights of a perceptron based on the error between the predicted output and the desired (target) output. It is guaranteed to converge if the data is linearly separable."
        ),

        steps([
            "Initialise all weights and bias to small random values (or zero)",
            "For each training example, compute the output y using the current weights",
            "Compare the output y with the target t",
            "If y ≠ t, update weights: wᵢ(new) = wᵢ(old) + η × (t - y) × xᵢ",
            "Update bias: b(new) = b(old) + η × (t - y)",
            "Repeat steps 2-5 for all examples until no errors occur or max epochs reached",
        ]),

        code(
            `Weight Update Formula:

  wᵢ(new) = wᵢ(old) + η × (t - y) × xᵢ
  b(new)  = b(old)  + η × (t - y)

  Where:
    η = learning rate (small positive number, e.g., 0.1)
    t = target (desired) output
    y = actual (predicted) output
    xᵢ = input value

Example:
  Input: x = [0.5, 0.8], Target: t = 1
  Current weights: w = [0.4, 0.6], b = -0.5
  Predicted: y = 1 (from previous calculation)
  Error: t - y = 1 - 1 = 0
  No update needed (correct prediction!)

  If predicted y = 0 but target t = 1:
  Error: t - y = 1 - 0 = 1
  w₁(new) = 0.4 + 0.1 × 1 × 0.5 = 0.45
  w₂(new) = 0.6 + 0.1 × 1 × 0.8 = 0.68
  b(new)  = -0.5 + 0.1 × 1 = -0.4`,
            "text",
            "Perceptron learning rule"
        ),

        heading("The Learning Rate (η)"),

        table(
            ["Learning Rate", "Effect"],
            [
                ["Too small (e.g., 0.001)", "Very slow convergence, may take too many epochs"],
                ["Appropriate (e.g., 0.01–0.1)", "Steady convergence to the solution"],
                ["Too large (e.g., 1.0)", "Overshooting, oscillation, may never converge"],
            ]
        ),

        heading("Linear Separability"),

        definition(
            "Linearly Separable",
            "A classification problem is linearly separable if the classes can be perfectly separated by a single straight line (in 2D), a plane (in 3D) or a hyperplane (in higher dimensions)."
        ),

        heading("The XOR Problem"),

        text(
            "The XOR (exclusive OR) function is the classic example of a problem that is NOT linearly separable. Minsky and Papert proved in 1969 that a single-layer perceptron cannot solve XOR, which contributed to the first AI winter."
        ),

        table(
            ["x₁", "x₂", "XOR Output", "Linearly Separable?"],
            [
                ["0", "0", "0", "—"],
                ["0", "1", "1", "—"],
                ["1", "0", "1", "—"],
                ["1", "1", "0", "No — no single straight line can separate the 0s from the 1s"],
            ]
        ),

        code(
            `XOR Truth Table plotted in 2D:

  x₂
  1 |  ●(0,1)=1     ○(1,1)=0
    |
  0 |  ○(0,0)=0     ●(1,0)=1
    +------------------------
    0              1   x₁

  ● = Class 1, ○ = Class 0
  No single straight line can separate ● from ○
  → XOR is NOT linearly separable
  → Single-layer perceptron CANNOT solve XOR`,
            "text",
            "XOR is not linearly separable"
        ),

        note(
            "The XOR problem was solved by adding hidden layers to create a Multi-Layer Perceptron (MLP). This was the key motivation for developing the backpropagation algorithm to train multi-layer networks.",
            "exam",
            "Frequently Asked"
        ),

        heading("Perceptron Convergence Theorem"),

        definition(
            "Perceptron Convergence Theorem",
            "A theorem stating that if a set of training examples is linearly separable, the perceptron learning algorithm will converge to a correct set of weights in a finite number of steps."
        ),

        keyPoints([
            "The perceptron is a single-neuron binary classifier invented by Rosenblatt in 1958.",
            "It computes a weighted sum plus bias and applies a step function to produce 0 or 1.",
            "The perceptron learning rule adjusts weights: wᵢ(new) = wᵢ(old) + η(t-y)xᵢ.",
            "A single-layer perceptron can only solve linearly separable problems.",
            "The XOR problem is not linearly separable and cannot be solved by a single perceptron.",
        ]),
    ],

    {
        summary:
            "Master the perceptron architecture, learning rule, linear separability and the XOR limitation.",
        minutes: 12,
        tags: ["ai", "perceptron", "learning-rule", "xor", "linearly-separable", "important"],

        mcqs: [
            mcq(
                "The perceptron was invented by:",
                ["Alan Turing", "Frank Rosenblatt", "Geoffrey Hinton", "Marvin Minsky"],
                1,
                "Frank Rosenblatt invented the perceptron in 1958."
            ),
            mcq(
                "The perceptron uses which activation function?",
                ["Sigmoid", "ReLU", "Step function", "Tanh"],
                2,
                "The classic perceptron uses a step (threshold) function producing binary 0 or 1."
            ),
            mcq(
                "In the perceptron learning rule, η represents:",
                ["Error", "Weight", "Learning rate", "Bias"],
                2,
                "η (eta) is the learning rate that controls the step size of weight updates."
            ),
            mcq(
                "A single-layer perceptron CANNOT solve:",
                ["AND function", "OR function", "XOR function", "NOT function"],
                2,
                "XOR is not linearly separable, so a single-layer perceptron cannot solve it."
            ),
            mcq(
                "The perceptron convergence theorem states that the perceptron will converge if:",
                ["The data is non-linear", "The data is linearly separable", "The learning rate is 1.0", "There are hidden layers"],
                1,
                "The theorem guarantees convergence only when the training data is linearly separable."
            ),
        ],

        questions: [
            qa(
                "Explain the perceptron architecture and its computation.",
                "The perceptron is the simplest neural network, consisting of a single neuron. It takes multiple inputs x₁, x₂, ..., xₙ, each multiplied by a corresponding weight w₁, w₂, ..., wₙ. A bias b is added to the weighted sum to compute z = Σ(wᵢ × xᵢ) + b. This sum is passed through a step activation function that outputs 1 if z ≥ 0 and 0 if z < 0. For example, with inputs [0.5, 0.8], weights [0.4, 0.6] and bias -0.5, the weighted sum is (0.4×0.5) + (0.6×0.8) + (-0.5) = 0.18. Since 0.18 ≥ 0, the output is 1. The perceptron acts as a linear binary classifier, separating inputs into two classes using a hyperplane.",
                5
            ),
            qa(
                "Explain the perceptron learning rule with the weight update formula.",
                "The perceptron learning rule is a supervised learning algorithm. For each training example, the perceptron computes its output y and compares it with the target t. If the prediction is wrong, the weights are updated using the formula wᵢ(new) = wᵢ(old) + η × (t - y) × xᵢ, where η is the learning rate. The bias is updated as b(new) = b(old) + η × (t - y). If the prediction is correct (t = y), the error is zero and no update occurs. If the perceptron predicts 0 but the target is 1, the weights increase to make the neuron more likely to fire. If it predicts 1 but the target is 0, the weights decrease. The perceptron convergence theorem guarantees that this process will find correct weights in finite steps if the data is linearly separable.",
                5
            ),
            qa(
                "What is the XOR problem and why is it significant in neural network history?",
                "The XOR (exclusive OR) function outputs 1 only when inputs differ: XOR(0,0)=0, XOR(0,1)=1, XOR(1,0)=1, XOR(1,1)=0. When plotted in 2D, the class-1 points (0,1) and (1,0) are diagonally opposite, and no single straight line can separate them from the class-0 points (0,0) and (1,1). This means XOR is not linearly separable. In 1969, Minsky and Papert proved mathematically that a single-layer perceptron cannot solve XOR. This revelation exposed a fundamental limitation of perceptrons and contributed to the first AI winter, as funding and interest in neural networks declined. The problem was eventually solved by using multi-layer perceptrons with hidden layers, trained using the backpropagation algorithm.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — Multi-Layer Perceptron and Backpropagation
========================================================= */

const mlpAndBackpropagation = createTopic(
    "multi-layer-perceptron-and-backpropagation",
    "Multi-Layer Perceptron and Backpropagation",

    [
        definition(
            "Multi-Layer Perceptron (MLP)",
            "A feedforward neural network with one or more hidden layers between the input and output layers. Each neuron in a layer is connected to every neuron in the next layer (fully connected). MLPs can solve non-linearly separable problems like XOR."
        ),

        text(
            "The addition of hidden layers gives MLPs the ability to learn complex, non-linear decision boundaries. The Universal Approximation Theorem (1989) proved that an MLP with just one hidden layer and a sufficient number of neurons can approximate any continuous function to arbitrary accuracy."
        ),

        heading("MLP Architecture"),

        code(
            `MLP with one hidden layer:

  Input Layer    Hidden Layer    Output Layer
  (3 neurons)    (4 neurons)     (1 neuron)

  x₁ ──→  ○ ──→
  x₂ ──→  ○ ──→   ○ ──→  ○ ──→  y
  x₃ ──→  ○ ──→   ○
            ○

  Every input connects to every hidden neuron.
  Every hidden neuron connects to the output neuron.
  Total weights: (3×4) + (4×1) = 16
  Total biases: 4 + 1 = 5`,
            "text",
            "MLP architecture"
        ),

        heading("Why Hidden Layers?"),

        table(
            ["Network Type", "Hidden Layers", "Decision Boundary", "Can Solve XOR?"],
            [
                ["Single-layer perceptron", "0", "Linear (straight line)", "No"],
                ["MLP with 1 hidden layer", "1", "Non-linear (curved)", "Yes"],
                ["Deep network", "2 or more", "Highly complex", "Yes"],
            ]
        ),

        heading("The Backpropagation Algorithm"),

        definition(
            "Backpropagation (Backward Propagation of Errors)",
            "A supervised learning algorithm for training multi-layer neural networks. It computes the gradient of the loss function with respect to each weight by applying the chain rule of calculus, propagating the error backward from the output layer to the input layer."
        ),

        text(
            "Backpropagation was popularised by Rumelhart, Hinton and Williams in 1986. It solved the key problem that had stalled neural network research: how to train the weights of hidden layers, since there are no target values for hidden neurons."
        ),

        heading("Steps of Backpropagation"),

        steps([
            "Forward Pass — propagate inputs through the network to compute outputs",
            "Compute Loss — measure the error between predicted output and target using a loss function",
            "Backward Pass — compute the gradient of the loss with respect to each weight using the chain rule",
            "Weight Update — adjust each weight in the direction that reduces the loss: w = w - η × ∂Loss/∂w",
            "Repeat — iterate over the training data for multiple epochs until the loss converges",
        ]),

        heading("Forward Pass"),

        code(
            `For each layer l:

  z⁽ˡ⁾ = W⁽ˡ⁾ · a⁽ˡ⁻¹⁾ + b⁽ˡ⁾    (weighted sum)
  a⁽ˡ⁾ = f(z⁽ˡ⁾)                  (activation)

  Where:
    a⁽⁰⁾ = input x
    W⁽ˡ⁾ = weight matrix of layer l
    b⁽ˡ⁾ = bias vector of layer l
    f = activation function (e.g., sigmoid)
    a⁽ˡ⁾ = output (activation) of layer l

  Example (single hidden layer):
    Hidden: z⁽¹⁾ = W⁽¹⁾·x + b⁽¹⁾,  a⁽¹⁾ = sigmoid(z⁽¹⁾)
    Output: z⁽²⁾ = W⁽²⁾·a⁽¹⁾ + b⁽²⁾,  ŷ = sigmoid(z⁽²⁾)`,
            "text",
            "Forward pass computation"
        ),

        heading("Loss Function"),

        table(
            ["Loss Function", "Formula", "Use Case"],
            [
                ["Mean Squared Error (MSE)", "(1/n) Σ(tᵢ - ŷᵢ)²", "Regression"],
                ["Binary Cross-Entropy", "-[t·log(ŷ) + (1-t)·log(1-ŷ)]", "Binary classification"],
                ["Categorical Cross-Entropy", "-Σ tᵢ·log(ŷᵢ)", "Multi-class classification"],
            ]
        ),

        heading("Backward Pass (Chain Rule)"),

        code(
            `The chain rule of calculus:

  ∂Loss/∂w = ∂Loss/∂ŷ × ∂ŷ/∂z × ∂z/∂w

  For output layer:
    δ⁽ᴸ⁾ = (ŷ - t) × f'(z⁽ᴸ⁾)        (output error)
    ∂Loss/∂W⁽ᴸ⁾ = δ⁽ᴸ⁾ · a⁽ᴸ⁻¹⁾ᵀ    (gradient)

  For hidden layer l:
    δ⁽ˡ⁾ = (W⁽ˡ⁺¹⁾ᵀ · δ⁽ˡ⁺¹⁾) × f'(z⁽ˡ⁾)  (backpropagated error)
    ∂Loss/∂W⁽ˡ⁾ = δ⁽ˡ⁾ · a⁽ˡ⁻¹⁾ᵀ           (gradient)

  Weight update:
    W⁽ˡ⁾ = W⁽ˡ⁾ - η × ∂Loss/∂W⁽ˡ⁾

  Where:
    δ = error signal (delta)
    f' = derivative of activation function
    η = learning rate`,
            "text",
            "Backpropagation chain rule"
        ),

        heading("Solving XOR with an MLP"),

        code(
            `MLP for XOR (2 inputs, 2 hidden neurons, 1 output):

  After training with backpropagation:

  Input   Hidden 1   Hidden 2   Output
  [0, 0] →  0.01      0.02    →  0.01 ≈ 0 ✓
  [0, 1] →  0.98      0.03    →  0.97 ≈ 1 ✓
  [1, 0] →  0.97      0.04    →  0.96 ≈ 1 ✓
  [1, 1] →  0.99      0.98    →  0.02 ≈ 0 ✓

  The hidden layer creates a non-linear transformation
  that makes the XOR problem linearly separable in
  the hidden space.`,
            "text",
            "MLP solving XOR"
        ),

        heading("Key Concepts in Training"),

        table(
            ["Concept", "Description"],
            [
                ["Epoch", "One complete pass through the entire training dataset"],
                ["Batch Size", "Number of examples processed before updating weights"],
                ["Mini-batch", "A small subset of the training data (e.g., 32, 64, 128)"],
                ["Learning Rate", "Step size for weight updates; too high causes divergence, too low causes slow convergence"],
                ["Gradient Descent", "Optimisation algorithm that moves weights in the direction of steepest descent of the loss"],
                ["Overfitting", "Model memorises training data but performs poorly on new data"],
                ["Underfitting", "Model is too simple to capture the patterns in the data"],
            ]
        ),

        note(
            "The backpropagation algorithm requires differentiable activation functions because it uses derivatives in the chain rule. This is why the step function used in the perceptron cannot be used in MLPs — it has a derivative of zero almost everywhere.",
            "warning",
            "Important"
        ),

        keyPoints([
            "An MLP has one or more hidden layers and can solve non-linearly separable problems like XOR.",
            "Backpropagation uses the chain rule to compute gradients and propagate errors backward.",
            "The forward pass computes outputs; the backward pass computes gradients for weight updates.",
            "The Universal Approximation Theorem states that one hidden layer can approximate any continuous function.",
            "Training involves epochs, learning rate, batch size and gradient descent optimisation.",
        ]),
    ],

    {
        summary:
            "Master the MLP architecture, the backpropagation algorithm, forward and backward passes, and training concepts.",
        minutes: 14,
        tags: ["ai", "mlp", "backpropagation", "gradient-descent", "xor", "important"],

        mcqs: [
            mcq(
                "An MLP differs from a single-layer perceptron by having:",
                ["More inputs", "One or more hidden layers", "A step activation function", "No weights"],
                1,
                "MLPs have one or more hidden layers that enable learning non-linear decision boundaries."
            ),
            mcq(
                "Backpropagation uses which mathematical rule to compute gradients?",
                ["Product rule", "Chain rule", "Quotient rule", "L'Hôpital's rule"],
                1,
                "Backpropagation applies the chain rule of calculus to propagate errors backward through layers."
            ),
            mcq(
                "Backpropagation was popularised in 1986 by:",
                ["Rosenblatt", "Minsky and Papert", "Rumelhart, Hinton and Williams", "McCulloch and Pitts"],
                2,
                "Rumelhart, Hinton and Williams popularised backpropagation in their 1986 paper."
            ),
            mcq(
                "The Universal Approximation Theorem states that an MLP with one hidden layer can:",
                ["Only solve linear problems", "Approximate any continuous function", "Only solve XOR", "Replace all AI algorithms"],
                1,
                "The theorem proves that one hidden layer with enough neurons can approximate any continuous function."
            ),
            mcq(
                "Why can't the step function be used in backpropagation?",
                ["It is too slow", "It is not differentiable (derivative is 0 almost everywhere)", "It produces negative values", "It requires too much memory"],
                1,
                "Backpropagation needs differentiable activation functions; the step function's derivative is zero almost everywhere."
            ),
        ],

        questions: [
            qa(
                "Explain the backpropagation algorithm step by step.",
                "Backpropagation trains multi-layer neural networks in four main steps. First, the forward pass propagates inputs through the network layer by layer, computing the weighted sum z = W·a + b and applying the activation function a = f(z) at each layer to produce the final output ŷ. Second, the loss is computed by comparing ŷ with the target t using a loss function like Mean Squared Error. Third, the backward pass computes the gradient of the loss with respect to each weight using the chain rule of calculus. The error signal δ is computed at the output layer and propagated backward through hidden layers: δ⁽ˡ⁾ = (W⁽ˡ⁺¹⁾ᵀ · δ⁽ˡ⁺¹⁾) × f'(z⁽ˡ⁾). Fourth, weights are updated using gradient descent: W = W - η × ∂Loss/∂W. This process repeats for multiple epochs until the loss converges.",
                5
            ),
            qa(
                "How does an MLP solve the XOR problem that a single perceptron cannot?",
                "A single perceptron can only create linear decision boundaries, and XOR is not linearly separable — no single straight line can separate the 1-outputs from the 0-outputs. An MLP with at least one hidden layer solves this by creating a non-linear transformation of the input space. The hidden neurons learn to represent intermediate features that make the problem linearly separable in the hidden space. For example, one hidden neuron might learn to detect 'at least one input is 1' (OR-like) and another might learn 'not both inputs are 1' (NAND-like). The output neuron then combines these hidden representations with an AND-like operation to produce the XOR result. Backpropagation trains all these weights simultaneously.",
                5
            ),
            qa(
                "Explain the concepts of epoch, learning rate, overfitting and underfitting.",
                "An epoch is one complete pass through the entire training dataset. Training typically requires many epochs for the network to learn. The learning rate (η) controls the step size of weight updates during gradient descent. If it is too high, the optimisation overshoots the minimum and may diverge; if too low, convergence is extremely slow. Overfitting occurs when the model memorises the training data including noise, performing well on training data but poorly on new unseen data. It is caused by a model that is too complex relative to the data. Underfitting occurs when the model is too simple to capture the underlying patterns, performing poorly on both training and test data. Techniques like regularisation, dropout and early stopping help prevent overfitting.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — Activation Functions
========================================================= */

const activationFunctions = createTopic(
    "activation-functions",
    "Activation Functions",

    [
        definition(
            "Activation Function",
            "A mathematical function applied to the weighted sum of inputs at a neuron to determine its output. Activation functions introduce non-linearity into the network, enabling it to learn complex patterns that linear models cannot capture."
        ),

        text(
            "Without activation functions, a neural network — no matter how many layers it has — would behave as a single linear transformation. The composition of linear functions is still linear. Activation functions break this linearity, allowing deep networks to approximate arbitrarily complex functions."
        ),

        heading("Common Activation Functions"),

        heading("1. Step Function (Threshold)"),

        code(
            `f(z) = 1  if z ≥ 0
f(z) = 0  if z < 0

  f(z)
  1 |___________
    |
  0 |___________
    0          z

  Used in: Perceptron
  Differentiable: No
  Range: {0, 1}`,
            "text",
            "Step function"
        ),

        heading("2. Sigmoid (Logistic) Function"),

        code(
            `f(z) = 1 / (1 + e^(-z))

  f(z)
  1 |      .-'''''
    |    .'
  0.5|---'--------  (crossover at z=0)
    | .'
  0 |.'
    +------------
    0          z

  Used in: Output layer for binary classification
  Differentiable: Yes, f'(z) = f(z)(1 - f(z))
  Range: (0, 1)
  Problem: Vanishing gradient for large |z|`,
            "text",
            "Sigmoid function"
        ),

        heading("3. Tanh (Hyperbolic Tangent)"),

        code(
            `f(z) = (e^z - e^(-z)) / (e^z + e^(-z))
     = 2·sigmoid(2z) - 1

  f(z)
  1 |      .-'''''
    |    .'
  0 |---'--------  (centred at 0)
    | .'
 -1 |.'
    +------------
    0          z

  Used in: Hidden layers
  Differentiable: Yes, f'(z) = 1 - f(z)²
  Range: (-1, 1)
  Advantage over sigmoid: Zero-centred output`,
            "text",
            "Tanh function"
        ),

        heading("4. ReLU (Rectified Linear Unit)"),

        code(
            `f(z) = max(0, z)

  f(z)
    |        /
    |       /
    |      /
  0 |_____/
    +------------
    0          z

  Used in: Hidden layers (most popular in deep learning)
  Differentiable: Yes (except at z=0), f'(z) = 1 if z>0, 0 if z≤0
  Range: [0, ∞)
  Advantage: Fast computation, reduces vanishing gradient
  Problem: Dying ReLU — neurons can get stuck outputting 0`,
            "text",
            "ReLU function"
        ),

        heading("5. Leaky ReLU"),

        code(
            `f(z) = z      if z > 0
f(z) = αz     if z ≤ 0   (α is small, e.g., 0.01)

  Solves the dying ReLU problem by allowing a small
  gradient when z < 0 instead of zero.`,
            "text",
            "Leaky ReLU"
        ),

        heading("6. Softmax"),

        code(
            `f(zᵢ) = e^(zᵢ) / Σⱼ e^(zⱼ)

  Converts a vector of raw scores into a probability distribution
  where all outputs sum to 1.

  Example: z = [2.0, 1.0, 0.1]
  softmax = [0.659, 0.242, 0.099]
  (Sum = 1.0)

  Used in: Output layer for multi-class classification`,
            "text",
            "Softmax function"
        ),

        heading("Comparison Table"),

        table(
            ["Function", "Formula", "Range", "Differentiable?", "Best For", "Key Issue"],
            [
                ["Step", "1 if z≥0, else 0", "{0, 1}", "No", "Perceptron", "Not differentiable"],
                ["Sigmoid", "1/(1+e⁻ᶻ)", "(0, 1)", "Yes", "Binary classification output", "Vanishing gradient"],
                ["Tanh", "(eᶻ-e⁻ᶻ)/(eᶻ+e⁻ᶻ)", "(-1, 1)", "Yes", "Hidden layers", "Vanishing gradient"],
                ["ReLU", "max(0, z)", "[0, ∞)", "Yes", "Hidden layers (default)", "Dying ReLU"],
                ["Leaky ReLU", "z if z>0, αz else", "(-∞, ∞)", "Yes", "Hidden layers", "Small negative slope"],
                ["Softmax", "eᶻⁱ/Σeᶻʲ", "(0, 1), sums to 1", "Yes", "Multi-class output", "Computationally expensive"],
            ]
        ),

        heading("The Vanishing Gradient Problem"),

        definition(
            "Vanishing Gradient",
            "A problem during backpropagation where gradients become extremely small as they propagate backward through many layers, causing earlier layers to learn very slowly or stop learning entirely. It is particularly severe with sigmoid and tanh activation functions."
        ),

        text(
            "The sigmoid function's derivative is at most 0.25 (at z=0) and approaches 0 for large positive or negative z. When many such small derivatives are multiplied together through the chain rule across multiple layers, the gradient shrinks exponentially, effectively stopping learning in early layers."
        ),

        note(
            "ReLU largely solved the vanishing gradient problem for deep networks because its gradient is exactly 1 for all positive inputs. This is one of the main reasons ReLU became the default activation function for hidden layers in deep learning.",
            "exam",
            "Frequently Asked"
        ),

        heading("Choosing Activation Functions"),

        table(
            ["Layer", "Recommended Activation", "Reason"],
            [
                ["Hidden layers", "ReLU (or Leaky ReLU)", "Fast, reduces vanishing gradient"],
                ["Binary classification output", "Sigmoid", "Output in (0,1) interpretable as probability"],
                ["Multi-class classification output", "Softmax", "Outputs sum to 1, interpretable as class probabilities"],
                ["Regression output", "Linear (no activation)", "Output can be any real number"],
            ]
        ),

        keyPoints([
            "Activation functions introduce non-linearity, enabling networks to learn complex patterns.",
            "Sigmoid outputs (0,1) and is used for binary classification but suffers from vanishing gradients.",
            "ReLU (max(0,z)) is the most popular hidden layer activation due to speed and reduced vanishing gradient.",
            "Softmax converts raw scores into a probability distribution for multi-class classification.",
            "The vanishing gradient problem slows learning in deep networks with sigmoid/tanh activations.",
        ]),
    ],

    {
        summary:
            "Master all major activation functions: step, sigmoid, tanh, ReLU, leaky ReLU and softmax, and understand the vanishing gradient problem.",
        minutes: 12,
        tags: ["ai", "activation-functions", "relu", "sigmoid", "softmax", "important"],

        mcqs: [
            mcq(
                "Without activation functions, a multi-layer neural network would behave as:",
                ["A non-linear model", "A single linear transformation", "A decision tree", "A fuzzy system"],
                1,
                "The composition of linear functions is still linear, so without activation functions the network is equivalent to a single linear transformation."
            ),
            mcq(
                "The ReLU function is defined as:",
                ["1/(1+e⁻ᶻ)", "max(0, z)", "tanh(z)", "eᶻ/Σeᶻ"],
                1,
                "ReLU (Rectified Linear Unit) outputs z if z > 0, and 0 otherwise: max(0, z)."
            ),
            mcq(
                "The vanishing gradient problem is most severe with:",
                ["ReLU", "Linear", "Sigmoid and tanh", "Softmax"],
                2,
                "Sigmoid and tanh have derivatives that approach 0 for extreme inputs, causing gradients to vanish across layers."
            ),
            mcq(
                "Softmax is typically used in the:",
                ["Input layer", "Hidden layers", "Output layer for multi-class classification", "Output layer for regression"],
                2,
                "Softmax converts outputs into a probability distribution summing to 1, ideal for multi-class classification."
            ),
            mcq(
                "The range of the sigmoid function is:",
                ["(-1, 1)", "(0, 1)", "[0, ∞)", "(-∞, ∞)"],
                1,
                "The sigmoid function maps any real number to the open interval (0, 1)."
            ),
            mcq(
                "Leaky ReLU solves which problem of ReLU?",
                ["Vanishing gradient", "Dying ReLU", "Overfitting", "Slow computation"],
                1,
                "Leaky ReLU allows a small gradient for negative inputs, preventing neurons from permanently outputting 0 (dying)."
            ),
        ],

        questions: [
            qa(
                "Why are activation functions necessary in neural networks?",
                "Activation functions are necessary because they introduce non-linearity into the network. Without activation functions, each layer would compute only a linear transformation (weighted sum plus bias), and the composition of multiple linear transformations is still a single linear transformation. This means a network with 100 layers and no activation functions would be mathematically equivalent to a single-layer linear model, unable to learn complex non-linear patterns. Activation functions like ReLU, sigmoid and tanh break this linearity, allowing deep networks to approximate arbitrarily complex functions as guaranteed by the Universal Approximation Theorem.",
                5
            ),
            qa(
                "Compare sigmoid, tanh and ReLU activation functions.",
                "The sigmoid function f(z) = 1/(1+e⁻ᶻ) maps inputs to the range (0,1), making it suitable for binary classification output layers where the output can be interpreted as a probability. However, it suffers from the vanishing gradient problem because its derivative is at most 0.25 and approaches 0 for extreme inputs. The tanh function maps inputs to (-1,1) and is zero-centred, which makes optimisation easier than sigmoid, but it also suffers from vanishing gradients. ReLU f(z) = max(0,z) outputs 0 for negative inputs and z for positive inputs. It is computationally simple, has a gradient of exactly 1 for positive inputs (reducing vanishing gradients), and is the default choice for hidden layers. Its main drawback is the dying ReLU problem where neurons can get permanently stuck outputting 0.",
                5
            ),
            qa(
                "What is the vanishing gradient problem and how does ReLU help?",
                "The vanishing gradient problem occurs during backpropagation in deep networks when gradients become extremely small as they propagate backward through many layers. This happens because the chain rule multiplies derivatives at each layer, and if activation functions like sigmoid have small derivatives (at most 0.25), the product shrinks exponentially with depth. As a result, early layers receive negligible gradient signals and learn very slowly or stop learning entirely. ReLU helps because its derivative is exactly 1 for all positive inputs, so gradients pass through ReLU neurons unchanged. This means the gradient does not shrink as it passes through layers with positive activations, allowing effective training of very deep networks. This property made ReLU the default activation function for hidden layers in modern deep learning.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 5 — Applications and Advanced Architectures
========================================================= */

const applicationsAndAdvancedArchitectures = createTopic(
    "applications-and-advanced-architectures",
    "Applications and Advanced Architectures",

    [
        text(
            "Neural networks have evolved far beyond the simple perceptron and MLP. Modern architectures are designed for specific types of data and tasks, achieving remarkable results in image recognition, natural language processing, speech recognition, game playing and many other domains."
        ),

        heading("Convolutional Neural Networks (CNNs)"),

        definition(
            "CNN",
            "A type of neural network specifically designed for processing grid-like data such as images. CNNs use convolutional layers to automatically learn spatial features (edges, textures, shapes) and pooling layers to reduce dimensionality."
        ),

        heading("Key Components of a CNN"),

        table(
            ["Layer Type", "Purpose", "Key Parameters"],
            [
                ["Convolutional Layer", "Extracts features using learnable filters (kernels)", "Filter size, stride, padding, number of filters"],
                ["Pooling Layer", "Reduces spatial dimensions (downsampling)", "Pool size, stride (max pooling or average pooling)"],
                ["Fully Connected Layer", "Combines features for classification", "Number of neurons"],
                ["Activation (ReLU)", "Introduces non-linearity after convolution", "—"],
                ["Softmax Output", "Produces class probabilities", "Number of classes"],
            ]
        ),

        code(
            `CNN Architecture for Image Classification:

  Input Image (224×224×3)
       ↓
  [Conv + ReLU] → Feature Maps
       ↓
  [Max Pooling] → Reduced Feature Maps
       ↓
  [Conv + ReLU] → Deeper Features
       ↓
  [Max Pooling] → Further Reduced
       ↓
  [Flatten]
       ↓
  [Fully Connected + ReLU]
       ↓
  [Softmax] → Class Probabilities

  Famous CNNs: LeNet (1998), AlexNet (2012), VGGNet (2014),
               GoogLeNet (2014), ResNet (2015)`,
            "text",
            "CNN architecture"
        ),

        heading("Recurrent Neural Networks (RNNs)"),

        definition(
            "RNN",
            "A type of neural network designed for sequential data where the order of inputs matters. RNNs have recurrent connections that maintain a hidden state, allowing them to remember information from previous time steps."
        ),

        table(
            ["Variant", "Key Feature", "Use Case"],
            [
                ["Vanilla RNN", "Simple recurrent connections", "Simple sequence tasks"],
                ["LSTM (Long Short-Term Memory)", "Gates control information flow; solves vanishing gradient", "Language modelling, translation"],
                ["GRU (Gated Recurrent Unit)", "Simplified LSTM with fewer gates", "Similar to LSTM, faster to train"],
                ["Bidirectional RNN", "Processes sequence in both directions", "Named entity recognition"],
            ]
        ),

        heading("Applications of Neural Networks"),

        table(
            ["Domain", "Application", "Architecture", "Example"],
            [
                ["Computer Vision", "Image classification", "CNN", "Identifying objects in photos"],
                ["Computer Vision", "Object detection", "CNN (YOLO, SSD)", "Detecting pedestrians in self-driving cars"],
                ["NLP", "Machine translation", "RNN/Transformer", "Google Translate"],
                ["NLP", "Text generation", "Transformer (GPT)", "ChatGPT"],
                ["NLP", "Sentiment analysis", "RNN/CNN/Transformer", "Analysing product reviews"],
                ["Speech", "Speech recognition", "RNN/CNN", "Siri, Alexa"],
                ["Healthcare", "Medical image analysis", "CNN", "Detecting tumours in X-rays"],
                ["Finance", "Fraud detection", "MLP/Autoencoder", "Credit card fraud detection"],
                ["Gaming", "Game playing", "Deep RL", "AlphaGo, AlphaZero"],
                ["Robotics", "Navigation", "CNN + RL", "Autonomous robots"],
            ]
        ),

        heading("Training Challenges and Solutions"),

        table(
            ["Challenge", "Description", "Solution"],
            [
                ["Overfitting", "Model memorises training data", "Dropout, regularisation, early stopping, data augmentation"],
                ["Vanishing Gradient", "Gradients shrink in deep networks", "ReLU, batch normalisation, LSTM, residual connections"],
                ["Exploding Gradient", "Gradients grow uncontrollably", "Gradient clipping, weight initialisation"],
                ["Slow Training", "Large datasets and deep models", "GPU/TPU acceleration, mini-batch SGD, optimisers (Adam)"],
                ["Data Scarcity", "Not enough labelled data", "Transfer learning, data augmentation, semi-supervised learning"],
            ]
        ),

        heading("Dropout"),

        definition(
            "Dropout",
            "A regularisation technique where randomly selected neurons are ignored (set to zero) during training with a specified probability. This prevents the network from relying too heavily on any single neuron and reduces overfitting."
        ),

        heading("Transfer Learning"),

        definition(
            "Transfer Learning",
            "A technique where a model trained on one task is reused as the starting point for a model on a different but related task. For example, a CNN trained on ImageNet can be fine-tuned for medical image classification with a small dataset."
        ),

        note(
            "Transfer learning has been one of the most impactful techniques in practical deep learning. It allows practitioners to achieve excellent results with small datasets by leveraging models pre-trained on massive datasets like ImageNet (14 million images).",
            "tip",
            "Practical Tip"
        ),

        keyPoints([
            "CNNs use convolutional and pooling layers to automatically learn spatial features from images.",
            "RNNs process sequential data with recurrent connections; LSTM and GRU solve the vanishing gradient in RNNs.",
            "Neural networks are applied in computer vision, NLP, speech, healthcare, finance and gaming.",
            "Overfitting is combated with dropout, regularisation and early stopping.",
            "Transfer learning reuses pre-trained models for new tasks, reducing data requirements.",
        ]),
    ],

    {
        summary:
            "Explore CNNs for images, RNNs for sequences, real-world applications, and training techniques like dropout and transfer learning.",
        minutes: 12,
        tags: ["ai", "cnn", "rnn", "lstm", "applications", "transfer-learning", "important"],

        mcqs: [
            mcq(
                "CNNs are primarily designed for:",
                ["Sequential data", "Grid-like data such as images", "Tabular data", "Graph data"],
                1,
                "CNNs are specifically designed for grid-like data such as images using convolutional layers."
            ),
            mcq(
                "LSTM solves which problem of vanilla RNNs?",
                ["Overfitting", "Vanishing gradient", "Slow training", "Large model size"],
                1,
                "LSTM uses gates to control information flow, solving the vanishing gradient problem in long sequences."
            ),
            mcq(
                "Dropout is a technique used to:",
                ["Speed up training", "Reduce overfitting", "Increase model size", "Initialise weights"],
                1,
                "Dropout randomly deactivates neurons during training to prevent over-reliance on specific neurons."
            ),
            mcq(
                "Transfer learning involves:",
                ["Transferring data between databases", "Reusing a pre-trained model for a new task", "Moving a model to a different server", "Converting between frameworks"],
                1,
                "Transfer learning reuses a model trained on one task as a starting point for a related task."
            ),
            mcq(
                "Which architecture won the ImageNet competition in 2012, igniting the deep learning revolution?",
                ["LeNet", "ResNet", "AlexNet", "VGGNet"],
                2,
                "AlexNet won ImageNet 2012 by a large margin, demonstrating the power of deep CNNs."
            ),
            mcq(
                "The pooling layer in a CNN is used to:",
                ["Add more features", "Reduce spatial dimensions", "Increase resolution", "Apply activation"],
                1,
                "Pooling (e.g., max pooling) reduces the spatial dimensions of feature maps, reducing computation."
            ),
        ],

        questions: [
            qa(
                "Explain the architecture and key components of a CNN.",
                "A Convolutional Neural Network is designed for processing grid-like data such as images. It consists of several types of layers. Convolutional layers apply learnable filters (kernels) that slide over the input image to extract features like edges, textures and shapes. Each filter produces a feature map. ReLU activation is applied after convolution to introduce non-linearity. Pooling layers (typically max pooling) reduce the spatial dimensions of feature maps by taking the maximum value in small windows, reducing computation and providing translation invariance. After several convolution-pooling blocks, the feature maps are flattened and passed to fully connected layers that combine the features for classification. The final layer uses softmax to produce class probabilities. Famous CNN architectures include LeNet, AlexNet, VGGNet and ResNet.",
                5
            ),
            qa(
                "What is an RNN? How do LSTM and GRU improve upon vanilla RNNs?",
                "A Recurrent Neural Network is designed for sequential data where order matters, such as text, speech or time series. It has recurrent connections that maintain a hidden state, allowing information from previous time steps to influence the current output. However, vanilla RNNs suffer from the vanishing gradient problem, making it difficult to learn long-range dependencies. LSTM (Long Short-Term Memory) solves this by introducing three gates: the forget gate decides what information to discard, the input gate decides what new information to store, and the output gate decides what to output. These gates allow LSTM to selectively remember or forget information over long sequences. GRU (Gated Recurrent Unit) is a simplified version with two gates (reset and update) that achieves similar performance with fewer parameters and faster training.",
                5
            ),
            qa(
                "Explain five applications of neural networks in different domains.",
                "In computer vision, CNNs are used for image classification, such as identifying objects in photographs, and object detection in self-driving cars using architectures like YOLO. In natural language processing, Transformer-based models like GPT power text generation systems like ChatGPT, while RNNs and Transformers are used for machine translation in systems like Google Translate. In healthcare, CNNs analyse medical images such as X-rays and MRIs to detect tumours and other abnormalities with accuracy matching or exceeding human radiologists. In finance, MLPs and autoencoders detect fraudulent credit card transactions by learning patterns of normal behaviour and flagging anomalies. In gaming, deep reinforcement learning combining CNNs with RL has produced systems like AlphaGo that defeated world champions in complex strategy games.",
                5
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit3Topics = [
    introToConnectionistModels,
    perceptronAndLearningRules,
    mlpAndBackpropagation,
    activationFunctions,
    applicationsAndAdvancedArchitectures,
];