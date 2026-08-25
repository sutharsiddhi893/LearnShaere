/* =========================================================
   BCA • SEM 8 • Basics of Machine Learning
   UNIT 1 — ML Foundations, Supervised & Unsupervised Learning
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
   TOPIC 1 — Introduction to Machine Learning
========================================================= */

const introToML = createTopic(
    "introduction-to-machine-learning",
    "Introduction to Machine Learning",

    [
        definition(
            "Machine Learning",
            "Machine Learning is a branch of Artificial Intelligence in which systems learn patterns from data to make predictions or decisions, without being explicitly programmed for every scenario."
        ),

        text(
            "Arthur Samuel (1959) defined ML as the 'field of study that gives computers the ability to learn without being explicitly programmed.' Tom Mitchell (1997) gave the formal definition: 'A computer program is said to learn from experience E with respect to task T and performance measure P, if its performance at T, as measured by P, improves with experience E.'"
        ),

        heading("AI vs ML vs Deep Learning"),

        code(
            `Artificial Intelligence  (1950s)   ← the big umbrella
   └── Machine Learning      (1980s)   ← learn from data
         └── Deep Learning   (2010s)   ← multi-layer neural nets`,
            "text",
            "Nested relationship"
        ),

        heading("Traditional Programming vs Machine Learning"),

        table(
            ["Criteria", "Traditional Programming", "Machine Learning"],
            [
                ["Input", "Data + Rules", "Data + Answers (labels)"],
                ["Output", "Answers", "Rules (the MODEL)"],
                ["Logic", "Humans write every rule", "System discovers rules from examples"],
                ["Example", "If marks > 40 then Pass (hardcoded)", "Model learns the pass pattern from 10,000 records"],
            ]
        ),

        heading("Types of Machine Learning"),

        table(
            ["Type", "Data Used", "Goal", "Example"],
            [
                ["Supervised Learning", "Labeled (X → y)", "Predict values/classes", "Spam detection, price prediction"],
                ["Unsupervised Learning", "Unlabeled (X only)", "Discover hidden structure", "Customer segmentation"],
                ["Reinforcement Learning", "Rewards from environment", "Learn best actions", "Game playing, robotics"],
                ["Semi-Supervised", "Small labeled + large unlabeled", "Leverage cheap data", "Medical imaging with few expert labels"],
            ]
        ),

        heading("The ML Workflow"),

        steps([
            "Define the problem — prediction? classification? clustering?",
            "Collect and explore the data (EDA).",
            "Preprocess — clean, handle missing values, encode, scale.",
            "Split — training / validation / test sets.",
            "Train candidate models on the training set.",
            "Evaluate on unseen test data with proper metrics.",
            "Tune hyperparameters and iterate.",
            "Deploy the model and monitor performance in production.",
        ]),

        heading("Real-World Applications"),

        table(
            ["Domain", "Application"],
            [
                ["E-commerce", "Product recommendations (Amazon, Flipkart)"],
                ["Finance", "Credit scoring, fraud detection"],
                ["Healthcare", "Disease diagnosis from scans"],
                ["Email", "Spam filtering"],
                ["Transport", "Fare prediction, route optimization"],
                ["Entertainment", "Netflix/Spotify recommendations"],
            ]
        ),

        note(
            "ML models learn from data — garbage in, garbage out (GIGO). A model trained on bad or biased data will make bad or biased decisions at scale.",
            "warning",
            "GIGO Principle"
        ),

        keyPoints([
            "ML = learning patterns from data instead of hand-coding rules.",
            "AI ⊃ ML ⊃ Deep Learning — nested, not parallel.",
            "Main types: supervised (labeled), unsupervised (unlabeled), reinforcement (rewards).",
            "Mitchell's E-T-P: Experience, Task, Performance improvement.",
            "Workflow: problem → data → preprocess → train → evaluate → tune → deploy.",
        ]),
    ],

    {
        summary:
            "Understand what Machine Learning is, its types, difference from traditional programming, workflow, and applications.",
        minutes: 12,
        tags: ["machine-learning", "introduction", "supervised", "unsupervised", "important"],

        mcqs: [
            mcq(
                "Tom Mitchell's formal definition of ML involves Experience (E), Task (T), and:",
                ["Time", "Performance measure (P)", "Probability", "Programming language"],
                1,
                "Performance P at task T must improve with experience E."
            ),
            mcq(
                "Which type of ML uses LABELED data for training?",
                ["Unsupervised", "Supervised", "Reinforcement", "Clustering"],
                1,
                "Supervised learning maps inputs X to known labels y."
            ),
            mcq(
                "In Machine Learning, the output of training is:",
                ["Data", "A model (learned rules)", "Labels", "A compiler"],
                1,
                "Traditional programming outputs answers; ML outputs the learned rules."
            ),
            mcq(
                "Deep Learning is best described as:",
                ["A rival of AI", "A subset of ML using multi-layer neural networks", "A database technology", "Unsupervised only"],
                1,
                "DL uses deep neural networks — it sits inside ML, inside AI."
            ),
        ],

        questions: [
            qa(
                "Define Machine Learning using Tom Mitchell's formal definition with an example.",
                "Tom Mitchell defined ML as: 'A computer program is said to learn from experience E with respect to some class of tasks T and performance measure P, if its performance at tasks in T, as measured by P, improves with experience E.' Example — email spam filter: Task T is classifying emails as spam/not-spam; Experience E is the database of thousands of already-labeled emails; Performance P is the percentage of new emails correctly classified. The program improves its accuracy P at task T as it processes more examples E — learning the spam patterns from data rather than relying on manually written keyword rules that spammers easily evade.",
                4
            ),
            qa(
                "Explain the types of Machine Learning with one example of each.",
                "(1) Supervised Learning: trains on labeled data (input-output pairs) to predict outputs for new inputs — e.g., predicting house prices from size/location, or classifying emails as spam. It splits into regression (continuous output) and classification (discrete categories). (2) Unsupervised Learning: works on unlabeled data to discover hidden structure — e.g., grouping customers into segments by purchasing behavior using K-Means clustering. (3) Reinforcement Learning: an agent learns by interacting with an environment, receiving rewards or penalties for actions — e.g., an RL agent learning to play chess by winning/losing games, or a robot learning to walk. (4) Semi-Supervised Learning: combines a small labeled set with a large unlabeled set — common in medical imaging where expert labeling is expensive.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — Regression: Linear, Multiple & Gradient Descent
========================================================= */

const regressionTopic = createTopic(
    "regression-linear-multiple-gradient-descent",
    "Regression: Linear, Multiple & Gradient Descent",

    [
        definition(
            "Regression",
            "Regression is a supervised learning technique that predicts a CONTINUOUS numeric value — prices, marks, temperature, demand — from input features."
        ),

        heading("Simple Linear Regression"),

        code(
            `ŷ = θ₀ + θ₁x

ŷ  → predicted output
x  → input feature (e.g., hours studied)
θ₀ → intercept (bias)
θ₁ → slope (weight of x)

Example: marks = 20 + 7 × hours
         4 hours → 20 + 7(4) = 48 marks`,
            "text",
            "The line of best fit"
        ),

        heading("The Cost Function (MSE)"),

        text(
            "Training means finding θ₀ and θ₁ that make the line fit the points best. 'Best' is measured by Mean Squared Error — the average of squared differences between actual and predicted values."
        ),

        code(
            `MSE = (1/n) Σ (yᵢ − ŷᵢ)²

Small MSE  → line passes close to all points
Large MSE  → poor fit`,
            "text",
            "Mean Squared Error"
        ),

        heading("Gradient Descent"),

        definition(
            "Gradient Descent",
            "Gradient Descent is an optimization algorithm that iteratively adjusts parameters in the direction that reduces the cost function — like walking downhill on the error surface until reaching the minimum."
        ),

        code(
            `repeat until convergence:
    θ = θ − α · (∂MSE/∂θ)

α (alpha) = learning rate — the step size
  too small  → painfully slow convergence
  too large  → overshoots and diverges

Partial derivative = the slope showing which
way is 'downhill' for each parameter.`,
            "text",
            "Update rule"
        ),

        heading("Multiple Linear Regression"),

        code(
            `ŷ = θ₀ + θ₁x₁ + θ₂x₂ + ... + θₙxₙ

House price = θ₀ + θ₁(area) + θ₂(bedrooms)
            + θ₃(age) + θ₄(distance_to_city)`,
            "text",
            "Many features, same idea"
        ),

        heading("Regression Evaluation Metrics"),

        table(
            ["Metric", "Formula Idea", "Interpretation"],
            [
                ["MAE", "Mean of |y − ŷ|", "Average error in original units"],
                ["MSE", "Mean of (y − ŷ)²", "Punishes large errors heavily"],
                ["RMSE", "√MSE", "Error back in original units"],
                ["R² Score", "1 − (SS_res / SS_tot)", "0 to 1 — fraction of variance explained"],
            ]
        ),

        heading("Linear Regression in Python"),

        code(
            `from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import r2_score, mean_absolute_error

# X: [[hours]], y: [marks]
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

model = LinearRegression()
model.fit(X_train, y_train)

y_pred = model.predict(X_test)

print("Slope:", model.coef_)          # θ₁
print("Intercept:", model.intercept_) # θ₀
print("R²:", r2_score(y_test, y_pred),
print("MAE:", mean_absolute_error(y_test, y_pred),`,
            "python",
            "scikit-learn linear regression"
        ),

        note(
            "Beware polynomial regression with very high degrees — the curve can pass through every training point yet fail completely on new data. That is overfitting.",
            "tip",
            "Overfitting Warning"
        ),

        keyPoints([
            "Regression predicts continuous values; classification predicts categories.",
            "Simple linear regression: ŷ = θ₀ + θ₁x — one feature.",
            "MSE is the standard cost function; lower is better.",
            "Gradient descent: θ = θ − α·∂cost/∂θ — learning rate α controls step size.",
            "R² measures explained variance: 1.0 perfect, 0.0 no better than predicting the mean.",
        ]),
    ],

    {
        summary:
            "Learn linear and multiple regression, MSE cost function, gradient descent optimization, and evaluation metrics (MAE/MSE/RMSE/R²).",
        minutes: 13,
        tags: ["regression", "linear-regression", "gradient-descent", "mse", "r-squared", "important"],

        mcqs: [
            mcq(
                "Predicting a house's exact price in rupees is a ______ problem.",
                ["Classification", "Regression", "Clustering", "Reinforcement"],
                1,
                "Continuous numeric output → regression."
            ),
            mcq(
                "In the update rule θ = θ − α·∂cost/∂θ, α is the:",
                ["Cost function", "Learning rate", "Prediction", "Label"],
                1,
                "α controls the step size of each downhill move."
            ),
            mcq(
                "An R² score of 0.85 means:",
                ["85% of predictions are wrong", "The model explains 85% of the variance in the target", "Accuracy is 85%", "The model has 85 features"],
                1,
                "R² is the fraction of target variance captured by the model."
            ),
            mcq(
                "Which metric is in the SAME units as the target variable?",
                ["MSE", "MAE and RMSE", "R²", "Log loss"],
                1,
                "MAE is mean absolute error; RMSE is square-root of MSE — both in original units."
            ),
        ],

        questions: [
            qa(
                "Explain Simple Linear Regression with its equation and how θ₀, θ₁ are learned.",
                "Simple linear regression models a straight-line relationship between one input x and output y: ŷ = θ₀ + θ₁x, where θ₀ is the intercept (predicted y when x = 0) and θ₁ is the slope (change in y per unit of x). Learning means choosing θ₀ and θ₁ so the line best fits the training points. 'Best' is defined by minimizing Mean Squared Error — the average squared vertical distance between each actual point and the line. The optimal values can be computed directly (the normal equation) or found iteratively by gradient descent, which repeatedly nudges each parameter downhill along the error surface using the derivative of MSE. Example: from data on study hours vs marks, the model may learn marks = 20 + 7×hours, then predict 48 marks for 4 hours of study.",
                4
            ),
            qa(
                "What is Gradient Descent? Explain the role of the learning rate and its failure modes.",
                "Gradient Descent is an iterative optimization algorithm that minimizes a cost function (like MSE). It computes the gradient — the partial derivative of cost with respect to each parameter — which points in the direction of steepest increase, then updates each parameter the OPPOSITE way: θ = θ − α·(∂cost/∂θ). Repeated steps walk downhill on the error surface until convergence. The learning rate α controls step size: if α is too small, training crawls — needing thousands of iterations for tiny progress; if α is too large, updates overshoot the minimum, the cost bounces higher each step, and training DIVERGES. A well-chosen α produces smooth, monotonic cost reduction. In practice we monitor the cost per iteration to diagnose both failure modes and adjust α accordingly.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — Classification: Logistic, KNN, Trees, SVM, Naive Bayes
========================================================= */

const classificationTopic = createTopic(
    "classification-logistic-knn-trees-svm-naive-bayes",
    "Classification: Logistic, KNN, Trees, SVM, Naive Bayes",

    [
        definition(
            "Classification",
            "Classification is a supervised learning task that predicts a discrete category — spam/not-spam, pass/fail, disease type — from input features."
        ),

        heading("1. Logistic Regression"),

        text(
            "Despite the name, logistic regression is a CLASSIFIER. It squeezes a linear combination through the sigmoid function to output a probability between 0 and 1."
        ),

        code(
            `z  = θ₀ + θ₁x₁ + ... + θₙxₙ
p  = σ(z) = 1 / (1 + e^(−z),     # probability of class 1

prediction = 1 if p ≥ 0.5, else 0`,
            "text",
            "Sigmoid squashes to probability"
        ),

        heading("2. K-Nearest Neighbors (KNN)"),

        steps([
            "Choose K (number of neighbors, e.g., 5).",
            "Find the K training points closest to the new sample (Euclidean distance).",
            "Assign the majority class among those neighbors.",
        ]),

        note(
            "KNN is a 'lazy learner' — no real training phase; it memorizes data and computes at prediction time. Small K → sensitive to noise (overfit); large K → oversmooths (underfit). Feature scaling is essential because distance calculations break when features have different ranges.",
            "tip",
            "KNN Notes"
        ),

        heading("3. Decision Trees"),

        code(
            `Is income > ₹50,000?
├── YES → Did they miss 3+ payments?
│         ├── YES → Risky
│         └── NO  → Safe
└── NO  → Safe`,
            "text",
            "Human-readable IF-ELSE rules"
        ),

        list([
            "Splitting criteria — Gini impurity or entropy/information gain choose the best question at each node.",
            "Advantage — interpretable, handles non-linear data, no scaling needed.",
            "Weakness — deep trees overfit badly (fixed by ensembles like Random Forest).",
        ]),

        heading("4. Support Vector Machine (SVM)"),

        text(
            "SVM finds the decision boundary (hyperplane) that separates classes with the MAXIMUM margin — the widest possible street between them. Kernel tricks (RBF, polynomial) let SVM separate data that isn't linearly separable by projecting it to higher dimensions."
        ),

        heading("5. Naive Bayes"),

        code(
            `Bayes theorem:  P(class | features) ∝ P(class) × P(features | class)

'Naive' assumption: features are independent given the class.

Loved for: text classification / spam filtering — fast,
works well with high-dimensional word-count data.`,
            "text",
            "Probability-based classification"
        ),

        heading("Algorithm Comparison"),

        table(
            ["Algorithm", "Strength", "Weakness"],
            [
                ["Logistic Regression", "Simple, fast, probabilistic output", "Only linear boundaries"],
                ["KNN", "No training, intuitive", "Slow at prediction, needs scaling"],
                ["Decision Tree", "Interpretable, non-linear", "Overfits when deep"],
                ["SVM", "Strong margins, kernels", "Slow on large data, needs scaling"],
                ["Naive Bayes", "Fast, great for text", "Independence assumption often false"],
            ]
        ),

        heading("Classification in Python"),

        code(
            `from sklearn.neighbors import KNeighborsClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)

knn = KNeighborsClassifier(n_neighbors=5)
knn.fit(X_train, y_train)

preds = knn.predict(X_test)
print("Accuracy:", accuracy_score(y_test, preds),`,
            "python",
            "KNN with scikit-learn"
        ),

        keyPoints([
            "Classification predicts categories; regression predicts numbers.",
            "Logistic regression outputs probability via the sigmoid function.",
            "KNN votes among the K closest points — requires feature scaling.",
            "Decision trees split by Gini/entropy; readable but overfit when deep.",
            "SVM maximizes margin; kernels handle non-linear boundaries.",
            "Naive Bayes assumes feature independence — the text-classification champion.",
        ]),
    ],

    {
        summary:
            "Compare the five core classifiers — logistic regression, KNN, decision trees, SVM, and Naive Bayes — with strengths and Python code.",
        minutes: 14,
        tags: ["classification", "logistic-regression", "knn", "decision-tree", "svm", "naive-bayes", "important"],

        mcqs: [
            mcq(
                "Logistic regression is used for:",
                ["Predicting prices", "Binary/multi-class classification", "Clustering", "Diminishing features"],
                1,
                "Despite the name, the sigmoid output makes it a classifier."
            ),
            mcq(
                "KNN with K=1 tends to:",
                ["Overfit (follow every noisy point)", "Underfit badly", "Be scale-invariant", "Train slowly"],
                0,
                "K=1 copies the single nearest neighbor — extremely sensitive to noise."
            ),
            mcq(
                "SVM chooses the hyperplane that:",
                ["Passes through the most points", "Maximizes the margin between classes", "Minimizes features", "Has the lowest K"],
                1,
                "Maximum-margin separation gives better generalization."
            ),
            mcq(
                "Naive Bayes earns its 'naive' title because it assumes:",
                ["Data is normally distributed", "Features are independent given the class", "Classes are equal-sized", "No missing values exist"],
                1,
                "The independence assumption is usually false yet works surprisingly well."
            ),
        ],

        questions: [
            qa(
                "Explain the K-Nearest Neighbors algorithm with steps and its limitations.",
                "KNN is an instance-based classifier with essentially no training phase — it stores the dataset. Prediction steps: (1) Choose K, the number of neighbors. (2) Compute the distance (usually Euclidean) from the new sample to every stored training point. (3) Select the K closest points. (4) Assign the class that appears most frequently among them (majority vote). Limitations: (a) Prediction is slow on large datasets because every query scans all points. (b) It REQUIRES feature scaling — a feature with a huge range dominates the distance calculation. (c) Sensitive to K: small K overfits noise, large K over-smooths boundaries. (d) Struggles in high dimensions where distances become less meaningful (curse of dimensionality).",
                4
            ),
            qa(
                "Compare Decision Trees and SVM. Why do single deep trees overfit and how is it fixed?",
                "Decision Trees learn a hierarchy of IF-ELSE questions, choosing each split to maximize purity (measured by Gini impurity or information gain/entropy). They handle non-linear patterns and categorical data naturally, need no scaling, and remain human-readable — valuable for explanations. SVM instead finds the separating hyperplane with the maximum margin between classes; kernel functions (RBF, polynomial) project data into higher dimensions to separate non-linear cases. A single tree grown without depth limits memorizes the training set — each leaf may hold one sample — achieving perfect training accuracy but poor generalization (overfitting). The fix is ensemble methods: Random Forests average many depth-limited, randomly-varied trees (bagging), while boosting builds trees sequentially correcting each other's errors — dramatically improving stability and accuracy over any single tree.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — Unsupervised Learning: Clustering, PCA & Association Rules
========================================================= */

const unsupervisedTopic = createTopic(
    "unsupervised-clustering-pca-association-rules",
    "Unsupervised Learning: Clustering, PCA & Association Rules",

    [
        definition(
            "Unsupervised Learning",
            "Unsupervised learning finds hidden structure in UNLABELED data — grouping similar items, reducing dimensions, or discovering co-occurrence patterns — without any target variable."
        ),

        heading("Clustering vs Classification"),

        table(
            ["Criteria", "Classification (Supervised)", "Clustering (Unsupervised)"],
            [
                ["Labels", "Known during training", "Unknown — groups are discovered"],
                ["Goal", "Predict a fixed category", "Reveal natural groupings"],
                ["Example", "Spam vs not-spam (labeled)", "Customer segments discovered from purchases"],
            ]
        ),

        heading("K-Means Clustering"),

        steps([
            "Choose K (number of clusters).",
            "Randomly initialize K centroids.",
            "Assign each point to its nearest centroid.",
            "Move each centroid to the mean of its assigned points.",
            "Repeat assignment + update until centroids stop moving (convergence).",
        ]),

        code(
            `from sklearn.cluster import KMeans

kmeans = KMeans(n_clusters=3, n_init=10, random_state=42)
labels  = kmeans.fit_predict(X)      # cluster number per point
centers = kmeans.cluster_centers_    # centroid coordinates`,
            "python",
            "K-Means in scikit-learn"
        ),

        heading("Choosing K — The Elbow Method"),

        code(
            `Plot WCSS (within-cluster sum of squares)
against K = 1, 2, 3, 4, 5, ...

WCSS always decreases as K grows, but the
curve bends like an elbow at the best K —
beyond it, extra clusters add little value.

     ○
    ○            ← steep drop (keep going)
      ○
        ○___○___○ ← elbow: diminishing returns
              ↑
        choose this K`,
            "text",
            "Elbow method intuition"
        ),

        heading("Other Clustering Approaches"),

        table(
            ["Method", "Idea", "Strength"],
            [
                ["Hierarchical", "Build a tree (dendrogram) of nested clusters", "No need to pre-set K"],
                ["DBSCAN", "Density-based — clusters are dense regions", "Finds arbitrary shapes; detects outliers"],
                ["K-Means", "Centroid-based partitioning", "Fast, scalable, simple"],
            ]
        ),

        heading("Dimensionality Reduction — PCA"),

        definition(
            "PCA (Principal Component Analysis)",
            "PCA transforms many correlated features into a smaller set of uncorrelated components that capture maximum variance — compressing data while losing minimal information."
        ),

        list([
            "Use case 1 — Visualization: project 50 features into 2D to plot.",
            "Use case 2 — Speed: fewer dimensions train models faster.",
            "Use case 3 — Noise reduction: drop low-variance directions.",
            "Requirement — standardize features before PCA.",
        ]),

        heading("Association Rules (Market Basket Analysis)"),

        code(
            `Rule: {bread, butter} → {jam}

Support    = P(bread AND butter AND jam)   # how frequent
Confidence = P(jam | bread AND butter)     # how reliable
Lift       = confidence / P(jam)           # >1 means genuine association

Lift > 1  → buying bread+butter genuinely
            boosts jam purchases
Lift ≈ 1  → items independent`,
            "text",
            "Apriori rule metrics"
        ),

        note(
            "Unsupervised results need HUMAN interpretation: K-Means will always produce K clusters even if no natural structure exists. Always validate clusters with domain knowledge.",
            "warning",
            "Interpretation Duty"
        ),

        keyPoints([
            "Unsupervised learning uses unlabeled data — no target variable.",
            "K-Means iterates assign → update centroids → converge.",
            "Elbow method picks K where WCSS improvement flattens.",
            "DBSCAN finds arbitrary shapes and outliers; hierarchical builds dendrograms.",
            "PCA compresses features by keeping maximum-variance directions.",
            "Association rules use support, confidence, and lift (>1 = real association).",
        ]),
    ],

    {
        summary:
            "Master unsupervised learning: K-Means and elbow method, hierarchical/DBSCAN clustering, PCA dimensionality reduction, and association rules.",
        minutes: 13,
        tags: ["unsupervised", "k-means", "clustering", "pca", "association-rules", "important"],

        mcqs: [
            mcq(
                "In K-Means, a centroid is:",
                ["A data point label", "The mean center of a cluster", "The number of clusters", "A distance metric"],
                1,
                "Each iteration moves centroids to the mean of their assigned points."
            ),
            mcq(
                "The elbow method helps determine:",
                ["The learning rate", "The optimal number of clusters K", "The train/test split", "Feature importance"],
                1,
                "Plot WCSS vs K and pick the bend where gains flatten."
            ),
            mcq(
                "Which clustering algorithm can find arbitrary-shaped clusters AND flag outliers?",
                ["K-Means", "DBSCAN", "Linear regression", "PCA"],
                1,
                "DBSCAN groups by density — sparse points become noise/outliers."
            ),
            mcq(
                "An association rule with Lift = 1 indicates:",
                ["Strong association", "Independence between items", "Perfect prediction", "Invalid rule"],
                1,
                "Lift 1 = co-occurrence is exactly chance; >1 means genuine boost."
            ),
        ],

        questions: [
            qa(
                "Explain the K-Means algorithm step by step, including how K is chosen.",
                "K-Means partitions n points into K clusters: (1) Choose K and randomly place K centroids. (2) Assignment step: each point joins its nearest centroid (Euclidean distance). (3) Update step: each centroid moves to the mean of all points assigned to it. (4) Repeat assignment and update until assignments stop changing (convergence). The algorithm minimizes WCSS — within-cluster sum of squared distances. K is chosen via the elbow method: run K-Means for K = 1..10, plot WCSS against K; the curve falls steeply then bends like an elbow — the K at the bend balances compactness against simplicity. Caveats: results depend on initial centroid placement (mitigated by n_init restarts), K-Means assumes roughly spherical, similarly-sized clusters, and it always outputs K clusters even on structureless data — so domain validation is essential.",
                4
            ),
            qa(
                "What is PCA? Give two practical uses and one preprocessing requirement.",
                "Principal Component Analysis is a dimensionality-reduction technique that rotates the feature space onto new axes — principal components — ordered by the variance they capture. The first component holds the direction of maximum variance; each subsequent one is perpendicular to the previous while holding the most remaining variance. Keeping just the top few components compresses data with minimal information loss. Two practical uses: (1) Visualization — projecting 30-feature breast-cancer data onto the first two components lets you SEE class separation in a 2D scatter plot; (2) Speed and noise reduction — feeding 10 components instead of 200 raw features into a model trains faster and often generalizes better by discarding noise-heavy low-variance directions. Preprocessing requirement: features MUST be standardized (zero mean, unit variance) first — otherwise features with large numeric ranges dominate the variance calculations and corrupt the components.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 5 — Model Evaluation, Overfitting & Bias-Variance
========================================================= */

const modelEvaluation = createTopic(
    "model-evaluation-overfitting-bias-variance",
    "Model Evaluation, Overfitting & Bias-Variance",

    [
        definition(
            "Model Evaluation",
            "Model evaluation is the process of measuring how well a trained model performs on data it has never seen — the only honest estimate of real-world performance."
        ),

        heading("Train / Test Split & Cross-Validation"),

        code(
            `Train/Test split (80/20):
├── Train (80%) → fit the model
└── Test  (20%) → judge it ONCE, at the end

5-Fold Cross-Validation:
split data into 5 parts; train on 4, validate on 1;
rotate 5 times; average the scores.
→ far more reliable, uses all data for both roles.`,
            "text",
            "Honest evaluation strategies"
        ),

        heading("The Confusion Matrix"),

        table(
            ["", "Predicted Positive", "Predicted Negative"],
            [
                ["Actually Positive", "TP (True Positive)", "FN (False Negative)"],
                ["Actually Negative", "FP (False Positive)", "TN (True Negative)"],
            ]
        ),

        heading("Core Metrics"),

        code(
            `Accuracy  = (TP + TN) / All            # overall correctness

Precision = TP / (TP + FP)          # of predicted positives,
                                    # how many were real?

Recall    = TP / (TP + FN)          # of actual positives,
                                    # how many did we catch?

F1 Score  = 2 × (P × R) / (P + R)   # harmonic mean balance`,
            "text",
            "Formulas that matter"
        ),

        heading("Worked Example — Cancer Screening"),

        code(
            `100 patients: 5 sick, 95 healthy. Model predicts ALL healthy.

Accuracy = 95/100 = 95%   ← looks great!
Recall   = 0/5   = 0%     ← missed every sick patient 💀

Lesson: on IMBALANCED data, accuracy lies.
Cancer detection → maximize RECALL.
Spam filtering   → protect PRECISION.`,
            "text",
            "Why one metric is never enough"
        ),

        heading("ROC Curve & AUC"),

        list([
            "ROC plots True Positive Rate vs False Positive Rate across all thresholds.",
            "AUC (Area Under Curve): 1.0 = perfect, 0.5 = coin flip.",
            "AUC compares classifiers independent of any chosen threshold.",
        ]),

        heading("Overfitting vs Underfitting"),

        table(
            ["Criteria", "Underfitting", "Overfitting"],
            [
                ["Training score", "Low", "Very high"],
                ["Test score", "Low", "Much lower than training"],
                ["Cause", "Model too simple", "Model memorizes noise"],
                ["Fix", "More features, complex model", "More data, regularization, simpler model"],
            ]
        ),

        heading("Bias-Variance Tradeoff"),

        code(
            `Underfit ←—————— SWEET SPOT ——————→ Overfit
High bias              balanced           high variance
Too rigid              good fit           memorizing noise

Fixes for overfitting:
• more training data
• regularization (penalize big weights)
• cross-validation for honest tuning
• simpler model / early stopping`,
            "text",
            "Finding the balance"
        ),

        note(
            "Never make decisions from the training score. A model scoring 99% on training data and 70% on test data has learned nothing general — it has memorized.",
            "warning",
            "Golden Evaluation Rule"
        ),

        keyPoints([
            "Evaluate ONLY on unseen test data; cross-validation averages multiple splits.",
            "Confusion matrix → precision, recall, F1, accuracy.",
            "Imbalanced data makes accuracy misleading — choose recall or precision by cost of errors.",
            "Overfitting: high train / low test; fix with data, regularization, simpler models.",
            "Bias-variance: underfit = high bias, overfit = high variance.",
        ]),
    ],

    {
        summary:
            "Evaluate models honestly: train/test splits, k-fold CV, confusion matrix, precision/recall/F1, ROC-AUC, overfitting, and bias-variance.",
        minutes: 13,
        tags: ["evaluation", "confusion-matrix", "precision", "recall", "overfitting", "cross-validation", "important"],

        mcqs: [
            mcq(
                "A model scores 99% on training data but 68% on test data. This is:",
                ["Underfitting", "Overfitting", "Perfect", "Data leakage into training"],
                1,
                "Memorizing training data — the classic overfitting signature."
            ),
            mcq(
                "Recall is defined as:",
                ["TP / (TP + FP)", "TP / (TP + FN)", "TN / All", "(TP + TN) / All"],
                1,
                "Recall catches what fraction of actual positives were found."
            ),
            mcq(
                "On a 95:5 imbalanced dataset, the most MISLEADING metric is:",
                ["Recall", "Precision", "Accuracy", "F1"],
                2,
                "Predicting the majority class yields 95% accuracy while catching nothing."
            ),
            mcq(
                "An AUC of 0.5 means the classifier performs:",
                ["Perfectly", "No better than random guessing", "Worse than random", "With 50% precision"],
                1,
                "AUC 0.5 = diagonal ROC curve = coin flip."
            ),
        ],

        questions: [
            qa(
                "Explain precision, recall, and F1-score with the cancer-screening example. When is each preferred?",
                "Precision = TP/(TP+FP) — of everything predicted positive, the fraction that truly was; it measures how trustworthy positive predictions are. Recall = TP/(TP+FN) — of all actual positives, the fraction the model caught; it measures completeness of detection. F1 is their harmonic mean, used when both matter. Cancer screening example: 100 patients, 5 sick, model predicts everyone healthy → accuracy 95% (misleading), recall 0/5 = 0% — every cancer missed. Preference rules: when FALSE NEGATIVES are deadly (cancer, fraud that must not slip through), maximize RECALL — accept some false alarms; when FALSE POSITIVES are costly (spam folder hiding a job offer, accusing an innocent customer of fraud), maximize PRECISION. When the balance genuinely matters, report F1 — the harmonic mean punishes sacrificing either side.",
                4
            ),
            qa(
                "Differentiate overfitting and underfitting, and describe four techniques to combat overfitting.",
                "Underfitting: the model is too simple to capture the underlying pattern — BOTH training and test scores are low (high bias). A straight line through curved data underfits. Overfitting: the model is too flexible and memorizes training noise — training score is near-perfect while test score collapses (high variance); a 20-degree polynomial through scattered points overfits. Four anti-overfitting techniques: (1) More training data — noise averages out and memorization becomes impossible. (2) Regularization (L1/Lasso, L2/Ridge) — penalize large weights, forcing smoother functions. (3) Simpler models / constraints — limit tree depth, reduce polynomial degree, prune. (4) Cross-validated hyperparameter tuning and early stopping — stop training when validation error stops improving. Diagnosis is simple: always compare training vs test scores — a large gap means overfitting.",
                4
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit1Topics = [
    introToML,
    regressionTopic,
    classificationTopic,
    unsupervisedTopic,
    modelEvaluation,
];
