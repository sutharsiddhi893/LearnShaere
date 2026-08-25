/* =========================================================
   BCA • SEM 8 • Basics of Machine Learning
   UNIT 2 — Feature Engineering, Ensembles, Deep Learning, Tools & Ethics
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
   TOPIC 1 — Data Preprocessing & Feature Engineering
========================================================= */

const featureEngineering = createTopic(
    "data-preprocessing-and-feature-engineering",
    "Data Preprocessing & Feature Engineering",

    [
        definition(
            "Feature Engineering",
            "Feature engineering is the craft of transforming raw data into informative inputs — creating, selecting, and scaling features so that models can learn effectively."
        ),

        text(
            "Applied scientists estimate that data preparation consumes 70-80% of an ML project's time — and often decides success more than the choice of algorithm."
        ),

        heading("1. Handling Missing Values"),

        table(
            ["Strategy", "When to Use", "Risk"],
            [
                ["Delete rows", "Few missing, large dataset", "Loses information"],
                ["Mean / median impute", "Numeric, random gaps", "Distorts variance"],
                ["Mode impute", "Categorical columns", "Over-represents common class"],
                ["Model-based impute (KNN)", "Complex patterns", "Computation cost"],
            ]
        ),

        code(
            `import pandas as pd

df["age"] = df["age"].fillna(df["age"].median(),
df.dropna(subset=["target"], inplace=True)  # never keep missing labels`,
            "python",
            "Pandas missing value handling"
        ),

        heading("2. Encoding Categorical Data"),

        code(
            `# Label encoding: for ORDINAL categories
size: Small=0, Medium=1, Large=2

# One-hot encoding: for NOMINAL categories
city_Surat  city_Delhi
    1            0
    0            1

pd.get_dummies(df, columns=["city"], drop_first=True)`,
            "python",
            "Label vs one-hot"
        ),

        note(
            "Never label-encode nominal categories for distance/linear models — the model falsely learns Surat(2) > Delhi(1). One-hot avoids fake order.",
            "warning",
            "Encoding Trap"
        ),

        heading("3. Feature Scaling"),

        table(
            ["Method", "Formula", "Result", "Use When"],
            [
                ["Standardization (Z-score)", "(x − mean) / std", "Mean 0, std 1", "Default; PCA, SVM, linear models"],
                ["Normalization (Min-Max)", "(x − min) / (max − min)", "Range [0, 1]", "Neural nets, image pixels"],
            ]
        ),

        code(
            `from sklearn.preprocessing import StandardScaler

scaler = StandardScaler()
X_train = scaler.fit_transform(X_train)
X_test  = scaler.transform(X_test)   # transform ONLY —
                                     # test data uses TRAIN stats`,
            "python",
            "Fit on train, transform on test"
        ),

        heading("4. Outlier Treatment"),

        list([
            "Detect via boxplots, Z-score (|z| > 3), or IQR rule (outside Q1−1.5·IQR, Q3+1.5·IQR).",
            "Handle by capping (winsorizing), transformation (log), or removal when justified.",
        ]),

        heading("5. Feature Creation & Selection"),

        code(
            `# Creating features (domain thinking):
df["price_per_sqft"] = df["price"] / df["area"]
df["is_weekend"]     = df["day"].isin([5, 6]).astype(int)

# Selection: drop noise, keep signal
# • Filter: correlation with target
# • Wrapper: RFE (recursive feature elimination)
# • Embedded: Lasso / tree feature_importances_`,
            "python",
            "New features beat new algorithms"
        ),

        heading("6. Imbalanced Data"),

        list([
            "SMOTE — synthesize minority-class samples by interpolation.",
            "Class weights — penalize minority-class errors more.",
            "Choose the right metric (recall/AUC, never plain accuracy).",
        ]),

        keyPoints([
            "Data prep is ~70-80% of real ML work — garbage in, garbage out.",
            "Impute missing values; never train with missing labels.",
            "One-hot nominal categories; label-encode only ordinal ones.",
            "Standardize for SVM/PCA/linear; fit scaler on train only.",
            "SMOTE or class weights fix imbalance; evaluate with recall/AUC.",
        ]),
    ],

    {
        summary:
            "Prepare data like a pro: missing value imputation, categorical encoding, scaling, outlier treatment, feature creation, and imbalance handling.",
        minutes: 13,
        tags: ["preprocessing", "feature-engineering", "encoding", "scaling", "smote", "important"],

        mcqs: [
            mcq(
                "Which encoding suits NOMINAL categories like city names for a linear model?",
                ["Label encoding", "One-hot encoding", "No encoding needed", "Z-score"],
                1,
                "One-hot avoids inventing a false numeric order between cities."
            ),
            mcq(
                "The scaler must be fit on:",
                ["Test data", "Training data only — then reused to transform test", "All data combined", "New predictions only"],
                1,
                "Fitting on test data leaks information and inflates scores."
            ),
            mcq(
                "SMOTE handles imbalance by:",
                ["Deleting majority rows", "Synthesizing new minority-class samples", "Changing labels", "Scaling features"],
                1,
                "SMOTE interpolates between minority neighbors to create realistic new samples."
            ),
            mcq(
                "Standardization transforms features to:",
                ["Range [0,1]", "Mean 0 and standard deviation 1", "Positive values", "Integers"],
                1,
                "Z-score scaling: (x − mean)/std gives mean 0, std 1."
            ),
        ],

        questions: [
            qa(
                "Explain one-hot encoding vs label encoding, with the danger of misusing label encoding.",
                "Label encoding maps each category to an integer (Surat=0, Delhi=1, Mumbai=2) — compact, and correct for ORDINAL data where order is real (Small=0 < Medium=1 < Large=2). One-hot encoding creates one binary column per category (city_Surat, city_Delhi, city_Mumbai), each holding 0/1. The danger: applying label encoding to NOMINAL categories injects a fake numeric order — the model learns that Mumbai (2) is 'greater' than Delhi (1), and distance-based algorithms (KNN, SVM) treat Mumbai as 'farther' from Surat than Delhi, which is meaningless. One-hot columns are mutually independent, so no false relationships are introduced, at the cost of extra columns for high-cardinality features.",
                4
            ),
            qa(
                "Why must a scaler be fit only on training data? Describe the full preprocessing order.",
                "Fitting the scaler (computing mean and standard deviation) on the full dataset leaks TEST-set statistics into training — the model indirectly sees information about unseen data, producing optimistically biased evaluation that collapses in production. Correct order: (1) split into train/test FIRST; (2) fit the scaler on X_train only; (3) transform X_train with those learned statistics; (4) transform X_test using the SAME train-fitted scaler (never re-fit); (5) any new production data is transformed with the same stored scaler. The same rule applies to imputation values, encoders, and feature selection — everything that 'learns' from data must learn only from training data. This discipline, preventing data leakage, is what makes evaluation honest.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — Ensemble Learning: Bagging, Random Forest & Boosting
========================================================= */

const ensembleLearning = createTopic(
    "ensemble-learning-bagging-random-forest-boosting",
    "Ensemble Learning: Bagging, Random Forest & Boosting",

    [
        definition(
            "Ensemble Learning",
            "Ensemble learning combines predictions from MULTIPLE models to produce one superior prediction — like consulting a committee of experts instead of a single analyst."
        ),

        text(
            "The Condorcet jury theorem intuition: individual weak learners making independent errors can be collectively far more accurate than any single one — provided their errors are diverse."
        ),

        heading("1. Bagging (Bootstrap Aggregating)"),

        steps([
            "Create B random samples of the training data WITH replacement (bootstrap).",
            "Train one model (usually a deep decision tree) on each sample.",
            "Combine: average (regression) or majority-vote (classification).",
        ]),

        text(
            "Effect: variance drops dramatically — the individual trees' overfitting noise gets averaged away."
        ),

        heading("2. Random Forest = Bagging + Feature Randomness"),

        code(
            `At each tree split, only a RANDOM SUBSET of
features is considered (e.g., √p of p features).

Why? Plain bagged trees still correlate —
dominant features lead them down similar paths.
Feature randomness decorrelates trees →
stronger error cancellation.`,
            "text",
            "The extra ingredient"
        ),

        code(
            `from sklearn.ensemble import RandomForestClassifier

rf = RandomForestClassifier(
    n_estimators=200,     # number of trees
    max_depth=None,
    random_state=42,
)
rf.fit(X_train, y_train)
print(rf.predict(X_test),

# Bonus: feature importance for free
importances = rf.feature_importances_`,
            "python",
            "Random Forest in scikit-learn"
        ),

        heading("3. Boosting"),

        definition(
            "Boosting",
            "Boosting builds models SEQUENTIALLY — each new model focuses on the examples the previous ones got wrong, gradually turning weak learners into one strong learner."
        ),

        table(
            ["Variant", "Core Idea"],
            [
                ["AdaBoost", "Reweight misclassified samples; next learner prioritizes them"],
                ["Gradient Boosting", "Each new tree fits the RESIDUAL errors of the ensemble so far"],
                ["XGBoost / LightGBM", "Industrial-grade gradient boosting: regularization, speed, parallelism — Kaggle's favorite"],
            ]
        ),

        heading("Bagging vs Boosting"),

        table(
            ["Criteria", "Bagging (Random Forest)", "Boosting (XGBoost)"],
            [
                ["Training", "Parallel — independent trees", "Sequential — each fixes the last"],
                ["Targets", "Variance (overfitting)", "Bias (underfitting)"],
                ["Overfit risk", "Low", "Higher — needs careful tuning"],
                ["Sensitivity to noise", "Robust", "Can chase noisy outliers"],
                ["Typical accuracy", "Strong, stable", "Often best-in-class"],
            ]
        ),

        heading("4. Stacking & Voting"),

        list([
            "Voting — hard vote (majority of KNN + SVM + NB) or soft vote (average their probabilities).",
            "Stacking — train a meta-model on the base models' predictions to learn the optimal combination.",
        ]),

        note(
            "Rule of thumb: start with Random Forest for a robust baseline with zero tuning; graduate to XGBoost/LightGBM when squeezing the last few accuracy points justifies tuning effort.",
            "tip",
            "Practical Ladder"
        ),

        keyPoints([
            "Ensembles combine many models — diversity of errors is the magic.",
            "Bagging trains in parallel on bootstrap samples; kills variance.",
            "Random Forest adds random feature subsets per split to decorrelate trees.",
            "Boosting trains sequentially on previous errors; kills bias (XGBoost, LightGBM).",
            "Voting/stacking mix different algorithm families for extra gains.",
        ]),
    ],

    {
        summary:
            "Combine weak learners into strong ones: bagging, Random Forest mechanics, boosting family (AdaBoost/Gradient/XGBoost), and stacking.",
        minutes: 13,
        tags: ["ensemble", "random-forest", "boosting", "xgboost", "bagging", "important"],

        mcqs: [
            mcq(
                "Random Forest improves on plain bagging by also:",
                ["Deep-pruning every tree", "Considering a random feature subset at each split", "Boosting residuals", "Scaling features"],
                1,
                "Feature randomness decorrelates trees, strengthening the average."
            ),
            mcq(
                "Boosting primarily reduces:",
                ["Variance", "Bias", "Dimensionality", "Data size"],
                1,
                "Sequential error-correcting turns weak (biased) learners strong."
            ),
            mcq(
                "Which model family dominates Kaggle tabular competitions?",
                ["Single decision trees", "Logistic regression", "Gradient boosting (XGBoost/LightGBM)", "K-Means"],
                2,
                "Regularized gradient boosting is the tabular-data king."
            ),
            mcq(
                "Bagging samples are created:",
                ["Without replacement, sequentially", "With replacement (bootstrap), in parallel", "Only from test data", "By SMOTE"],
                1,
                "Bootstrap = sampling with replacement; trees train independently."
            ),
        ],

        questions: [
            qa(
                "Explain how Random Forest works, including both sources of randomness.",
                "Random Forest is an ensemble of decision trees built via bagging with an extra randomization. Source 1 — bootstrap sampling: each of the N trees trains on a random sample of the training data drawn WITH replacement, so each tree sees a slightly different dataset. Source 2 — feature randomness: at every split in every tree, only a random subset of features (commonly √p) is eligible, preventing dominant features from steering all trees identically. Predictions combine by majority vote (classification) or averaging (regression). The two randomnesses DECORRELATE the trees: individually each tree overfits its sample, but their errors are diverse and cancel in the aggregate — variance collapses while bias stays low. Bonus: averaging impurity reductions across trees yields built-in feature importances.",
                4
            ),
            qa(
                "Compare bagging and boosting across training style, the problem they solve, and overfitting risk.",
                "Training style: bagging trains models IN PARALLEL — each tree is independent, built on a bootstrap sample; boosting trains SEQUENTIALLY — each new model is deliberately targeted at what the current ensemble gets wrong (AdaBoost reweights misclassified samples; gradient boosting fits residual errors). Problem solved: bagging attacks VARIANCE — it stabilizes high-variance learners like deep decision trees by averaging away their individual overfitting; boosting attacks BIAS — it converts weak, underfit learners into a strong one through error-corrective iterations. Overfitting risk: bagging is naturally robust — more trees rarely hurt, and noise gets averaged out; boosting CAN overfit as iterations chase increasingly hard examples, including noisy outliers, so it needs careful control of learning rate, depth, and the number of estimators plus early stopping. Practice: random forest as untuned robust baseline; boosted trees (XGBoost/LightGBM) when tuned maximum accuracy matters.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — Neural Networks & Deep Learning Introduction
========================================================= */

const neuralNetworksIntro = createTopic(
    "neural-networks-and-deep-learning-introduction",
    "Neural Networks & Deep Learning Introduction",

    [
        definition(
            "Neural Network",
            "An artificial neural network is a model of interconnected neurons organized in layers, where each neuron computes a weighted sum of inputs plus bias, applies an activation function, and passes the result forward."
        ),

        heading("From Perceptron to MLP"),

        code(
            `Inputs      Hidden Layer       Output
 x₁ ──┐    ┌─► (h1) ─┐
 x₂ ──┼──► │  (h2)  │──► (ŷ)
 x₃ ──┘    └─► (h3) ─┘

 neuron output = f(w₁x₁ + w₂x₂ + w₃x₃ + b)

'Hidden' layers learn intermediate representations —
deep = many hidden layers.`,
            "text",
            "Multilayer perceptron (MLP)"
        ),

        heading("Activation Functions"),

        table(
            ["Function", "Range", "Used In"],
            [
                ["ReLU: max(0, z)", "[0, ∞)", "Hidden layers (default)"],
                ["Sigmoid: 1/(1+e⁻ᶻ)", "(0, 1)", "Binary output layer"],
                ["Softmax", "probabilities summing to 1", "Multi-class output layer"],
                ["Tanh", "(−1, 1)", "Older/zero-centered layers"],
            ]
        ),

        heading("Training: Forward Pass + Backpropagation"),

        steps([
            "Forward pass — input flows through layers to a prediction ŷ.",
            "Loss — measure error (e.g., cross-entropy for classification).",
            "Backpropagation — chain rule computes each weight's contribution to the error.",
            "Gradient descent — every weight updated: w = w − α·∂loss/∂w.",
            "Repeat for many epochs over mini-batches.",
        ]),

        heading("Deep Learning Architectures"),

        table(
            ["Architecture", "Domain", "Key Idea"],
            [
                ["CNN", "Images", "Convolution filters detect edges → textures → objects"],
                ["RNN / LSTM", "Sequences", "Hidden state carries memory across time steps"],
                ["Transformer", "Text / modern era", "Self-attention connects every token to every token"],
                ["Autoencoder", "Compression", "Bottleneck forces compact representation"],
            ]
        ),

        heading("Fighting Overfitting in Deep Nets"),

        list([
            "Dropout — randomly deactivate neurons during training, forcing redundancy.",
            "Early stopping — halt when validation loss starts rising.",
            "Data augmentation — flips, crops, rotations multiply training images.",
            "Batch normalization — stabilizes and speeds training.",
        ]),

        heading("Transfer Learning"),

        text(
            "Instead of training from scratch, download a pretrained model (e.g., ResNet trained on ImageNet's 1.4M images), freeze its general feature-detecting layers, and retrain only the final layers on YOUR small dataset — achieving strong results with hundreds, not millions, of examples. This is the practical face of deep learning for most applications."
        ),

        heading("Classical ML vs Deep Learning"),

        table(
            ["Criteria", "Classical ML", "Deep Learning"],
            [
                ["Data need", "Works with hundreds of rows", "Shines with millions of samples"],
                ["Features", "Hand-engineered", "Learned automatically"],
                ["Hardware", "CPU is fine", "GPU accelerates training"],
                ["Interpretability", "High (trees, coefficients)", "Low — black box"],
                ["Best for", "Tabular business data", "Images, audio, text"],
            ]
        ),

        note(
            "For BCA-scale tabular datasets, classical ML (Random Forest, XGBoost) almost always beats deep learning. Reach for deep nets when data is unstructured (images/text/audio) or massive.",
            "tip",
            "Choose the Right Tool"
        ),

        keyPoints([
            "Neurons compute weighted sums + bias through activations.",
            "MLP = input, hidden, output layers; deep = many hidden layers.",
            "Backpropagation + gradient descent trains all weights.",
            "CNN for images, RNN/LSTM for sequences, Transformer for language.",
            "Transfer learning reuses pretrained models — small data, big results.",
        ]),
    ],

    {
        summary:
            "Understand neural network structure, activations, backpropagation training, CNN/RNN/Transformer architectures, and classical ML vs DL tradeoffs.",
        minutes: 14,
        tags: ["neural-networks", "deep-learning", "backpropagation", "cnn", "transformer", "transfer-learning", "important"],

        mcqs: [
            mcq(
                "The default activation for HIDDEN layers in modern networks is:",
                ["Sigmoid", "ReLU", "Softmax", "Linear"],
                1,
                "ReLU is fast and avoids the vanishing gradient problem."
            ),
            mcq(
                "Backpropagation computes:",
                ["Predictions", "Gradients of loss w.r.t. every weight via the chain rule", "Cluster centers", "Feature importances"],
                1,
                "Gradients then drive gradient descent weight updates."
            ),
            mcq(
                "Which architecture is purpose-built for image data?",
                ["RNN", "CNN", "Decision tree", "PCA"],
                1,
                "Convolutional filters exploit spatial structure in images."
            ),
            mcq(
                "Transfer learning means:",
                ["Copying homework", "Reusing a pretrained model's layers and retraining only the final ones", "Training forever", "Skipping evaluation"],
                1,
                "Pretrained features + small custom head = strong results on small datasets."
            ),
        ],

        questions: [
            qa(
                "Explain the structure of a neural network and the backpropagation training loop.",
                "Structure: neurons are organized in layers — an input layer receiving features, one or more hidden layers, and an output layer. Every neuron computes z = w₁x₁ + w₂x₂ + ... + b, then applies an activation function (ReLU in hidden layers; sigmoid/softmax at the output) introducing the non-linearity that lets networks model complex patterns. Training loop: (1) Forward pass — a mini-batch flows through the network producing predictions. (2) Loss computation — cross-entropy (classification) or MSE (regression) measures error against true labels. (3) Backpropagation — applying the calculus chain rule backwards through layers, the algorithm computes the gradient of the loss with respect to EVERY weight. (4) Gradient descent update — each weight shifts opposite its gradient: w = w − α·∂L/∂w. (5) Repeat across epochs until validation loss converges — the network gradually reduces error.",
                4
            ),
            qa(
                "When should you choose deep learning over classical ML? Explain with transfer learning.",
                "Choose deep learning when: (1) Data is unstructured — images, audio, free text — where CNNs/Transformers learn features automatically that hand-engineering cannot match; (2) Datasets are massive — millions of samples — since deep nets are data-hungry; (3) The task matches famous architectures (object detection, speech recognition, translation). Choose classical ML (Random Forest, XGBoost, logistic regression) when data is tabular business data, samples are limited (hundreds to thousands), interpretability matters, or CPU-only budgets apply — on such problems tuned gradient boosting routinely beats neural nets. Transfer learning bridges the gap: take a ResNet pretrained on 1.4M ImageNet images, freeze its general visual feature layers, retrain only the classifier head on your few hundred labeled photos — achieving near state-of-the-art accuracy without massive data or compute, which is how most real-world DL deployments actually work.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — End-to-End ML Project with scikit-learn
========================================================= */

const sklearnProject = createTopic(
    "end-to-end-ml-project-with-scikit-learn",
    "End-to-End ML Project with scikit-learn",

    [
        definition(
            "scikit-learn",
            "scikit-learn is Python's standard machine learning library providing a uniform fit/predict API for preprocessing, regression, classification, clustering, and model selection."
        ),

        heading("The Python ML Stack"),

        table(
            ["Library", "Role"],
            [
                ["NumPy", "Fast numerical arrays — the substrate of everything"],
                ["Pandas", "DataFrames — loading, cleaning, exploration"],
                ["Matplotlib / Seaborn", "Visualization and EDA"],
                ["scikit-learn", "Models, preprocessing, metrics, splitting"],
                ["Joblib / Pickle", "Saving trained models to disk"],
            ]
        ),

        heading("The Sacred API Convention"),

        code(
            `Every sklearn estimator follows:
    model.fit(X_train, y_train)     → learn
    model.predict(X_test)           → infer
    model.score(X_test, y_test)     → quick evaluation

Same 3 lines for LinearRegression,
RandomForest, KMeans — swap freely.`,
            "text",
            "One interface to rule them all"
        ),

        heading("Complete Mini-Project: Student Pass Prediction"),

        code(
            `import pandas as pd
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import Pipeline
from sklearn.linear_model import LogisticRegression
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report
import joblib

# 1. LOAD & EXPLORE
df = pd.read_csv("students.csv")
print(df.info(), df.describe(),
print(df["result"].value_counts(normalize=True),   # check balance

# 2. PREP
df = df.dropna(subset=["result"])
df["attended_pct"] = df["attended_pct"].fillna(df["attended_pct"].median(),
df = pd.get_dummies(df, columns=["stream"], drop_first=True)

X = df.drop(columns=["result"])
y = df["result"]

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)

# 3. PIPELINE: scaling + model as ONE unit
#    (scaler fitted ONLY on training folds internally)
pipe = Pipeline([
    ("scaler", StandardScaler(),
    ("clf",    RandomForestClassifier(n_estimators=200, random_state=42),
])

# 4. CROSS-VALIDATE before final fit
scores = cross_val_score(pipe, X_train, y_train, cv=5, scoring="f1")
print(f"CV F1: {scores.mean():.3f} ± {scores.std():.3f}")

# 5. FINAL TRAIN + TEST
pipe.fit(X_train, y_train)
print(classification_report(y_test, pipe.predict(X_test),)

# 6. PERSIST the model for deployment
joblib.dump(pipe, "student_pass_model.joblib")`,
            "python",
            "Production-grade workflow in 40 lines"
        ),

        heading("Comparing Multiple Models"),

        code(
            `candidates = {
    "LogisticRegression": LogisticRegression(max_iter=1000),
    "RandomForest":       RandomForestClassifier(random_state=42),
    "KNN":                KNeighborsClassifier(),
}

for name, model in candidates.items():
    pipe = Pipeline([("scaler", StandardScaler(),
                     ("clf", model)])
    score = cross_val_score(pipe, X_train, y_train, cv=5).mean()
    print(f"{name:20s} {score:.3f}")`,
            "python",
            "Let the data pick the algorithm"
        ),

        heading("Serving a Saved Model (Flask Sketch)"),

        code(
            `import joblib
model = joblib.load("student_pass_model.joblib")

prediction = model.predict([[85, 12, 1, 0]])   # new student's features
probability = model.predict_proba([[85, 12, 1, 0]])`,
            "python",
            "Load once, predict often"
        ),

        heading("Common Rookie Mistakes"),

        list([
            "Fitting the scaler/encoders on the full dataset (leakage).",
            "Evaluating on training data (vanity metrics).",
            "Ignoring class imbalance and reporting raw accuracy.",
            "Forgetting stratify=y on splits with rare classes.",
            "Tuning hyperparameters against the TEST set — test is touched once, at the very end.",
        ]),

        keyPoints([
            "NumPy/Pandas prepare; scikit-learn models; joblib persists.",
            "Uniform API: fit → predict → score across all estimators.",
            "Pipelines bundle preprocessing + model — leakage-proof.",
            "Cross-validate candidates on train; touch test exactly once.",
            "Save trained pipelines with joblib for deployment.",
        ]),
    ],

    {
        summary:
            "Execute a complete ML project: load with pandas, Pipeline preprocessing with models, cross-validate candidates, evaluate once, and persist with joblib.",
        minutes: 13,
        tags: ["scikit-learn", "pipeline", "project", "cross-validation", "joblib", "important"],

        mcqs: [
            mcq(
                "The three sacred scikit-learn methods are:",
                ["load/save/close", "fit / predict / score", "train/test/deploy", "map/filter/reduce"],
                1,
                "Every estimator implements fit(X, y), predict(X), and score."
            ),
            mcq(
                "A Pipeline's main benefit is:",
                ["Faster internet", "Bundling preprocessing + model, fitting transforms only on training folds", "Prettier plots", "Bigger datasets"],
                1,
                "Pipelines prevent leakage — transforms learn within CV folds only."
            ),
            mcq(
                "How many times should the TEST set be used for decisions?",
                ["Repeatedly during tuning", "Exactly once, at the end", "Never", "Once per model"],
                1,
                "Repeated test peeking leaks information — hold it sacred."
            ),
            mcq(
                "The standard library for saving a trained model to disk is:",
                ["pickle only", "joblib (or pickle)", "matplotlib", "requests"],
                1,
                "joblib.dump/load persists fitted pipelines efficiently."
            ),
        ],

        questions: [
            qa(
                "Walk through the stages of an end-to-end scikit-learn project, naming the key function at each stage.",
                "(1) Load & explore: pd.read_csv, df.info/describe/value_counts to understand shape, missingness, and class balance. (2) Prepare: dropna for missing labels, fillna/median for features, pd.get_dummies for nominal encoding; separate X and y. (3) Split: train_test_split(test_size=0.2, stratify=y) — stratify keeps class proportions stable in both sets. (4) Pipeline: Pipeline([('scaler', StandardScaler(), ('clf', RandomForestClassifier(),]) bundles preprocessing and model so transforms learn only inside training folds — leakage-proof. (5) Model selection: cross_val_score(pipe, X_train, y_train, cv=5) across several candidate estimators; pick by mean validation score. (6) Final evaluation: fit on the full training set, then predict + classification_report on the untouched test set — the one honest look. (7) Persist: joblib.dump(pipe, 'model.joblib') for deployment, later loaded with joblib.load for serving predictions.",
                4
            ),
            qa(
                "Why is hyperparameter tuning performed against CROSS-VALIDATION rather than the test set?",
                "Hyperparameters (tree depth, K in KNN, learning rates) are choices made by observing performance. If those observations come from the test set, information about the test data leaks into model selection — you effectively fit your decisions to the test set, and its score becomes optimistically biased, no longer predicting real-world performance. Cross-validation solves this: the training set is split into K folds; each configuration trains on K−1 folds and validates on the held-out fold, averaging K honest scores — all without touching the test set. The best configuration is then refit on the full training set, and the test set is consulted exactly ONCE, at the very end, delivering an unbiased final estimate. Ignoring this discipline (test-set peeking) is one of the most common and damaging mistakes in applied ML.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 5 — ML Applications, Ethics & Careers
========================================================= */

const mlEthicsCareers = createTopic(
    "ml-applications-ethics-and-careers",
    "ML Applications, Ethics & Careers",

    [
        definition(
            "Responsible ML",
            "Responsible ML is the practice of building machine learning systems that are fair, transparent, private-preserving, and accountable for their real-world impact."
        ),

        heading("Flagship Applications"),

        table(
            ["System", "ML Inside", "You Experience It As"],
            [
                ["Netflix / Spotify", "Collaborative filtering recommenders", "'Because you watched...'"],
                ["UPI fraud checks", "Anomaly detection on transactions", "Blocked suspicious payment"],
                ["Face unlock", "CNN embeddings matching", "Instant phone access"],
                ["WhatsApp / Gmail", "Naive Bayes filtering", "Missing spam"],
                ["Google Translate", "Transformer sequence models", "Instant translation"],
                ["Crop advisory apps", "Image classification on leaf photos", "Disease detection"],
            ]
        ),

        heading("CRISP-DM Lifecycle"),

        code(
            `Business Understanding → Data Understanding
        ↑                        ↓
   Deployment ←← Modeling ←← Preparation
        ↑         (evaluate)        ↓
        └──── iterate forever ─────┘`,
            "text",
            "Industry-standard project cycle"
        ),

        heading("Ethical Challenges"),

        table(
            ["Issue", "What Goes Wrong", "Mitigation"],
            [
                ["Bias", "Hiring model trained on historical bias replicates it", "Audit data, fairness metrics, diverse teams"],
                ["Black-box decisions", "Loan rejected with no explanation", "Explainable AI (SHAP), interpretable models"],
                ["Privacy", "Models memorize training data", "Anonymization, federated learning"],
                ["Feedback loops", "Recommenders amplify extremes", "Diversity injection, human oversight"],
                ["Automation bias", "Humans over-trust model output", "Keep humans in the loop for high stakes"],
            ]
        ),

        heading("Correlation ≠ Causation"),

        code(
            `Ice cream sales correlate with drowning deaths.
Conclusion? Ban ice cream!

Hidden variable: SUMMER — both rise together.
ML finds correlations; domain experts must
interpret causes before acting.`,
            "text",
            "The classic trap"
        ),

        heading("Production Realities"),

        list([
            "Data drift — the world changes; models trained on 2023 data degrade by 2025.",
            "Monitoring — track prediction distributions; retrain when performance decays.",
            "The ML system is 5% model, 95% pipeline — data ingestion, serving, logging.",
        ]),

        heading("Career Paths"),

        table(
            ["Role", "Focus", "Core Skills"],
            [
                ["Data Analyst", "Answer business questions with data", "SQL, Excel, Python/R, dashboards"],
                ["Data Scientist", "Build & interpret models", "Statistics, ML, Python, storytelling"],
                ["ML Engineer", "Deploy & operate models at scale", "Software engineering, MLOps, cloud"],
                ["AI/LLM Engineer", "Build on pretrained foundation models", "Prompting, RAG, APIs"],
            ]
        ),

        note(
            "Your BCA advantage: strong programming + these ML fundamentals position you for Data Analyst → Data Scientist within 2-3 years. Add SQL mastery and 3 deployed portfolio projects — that combination gets interviews.",
            "tip",
            "Career Strategy"
        ),

        keyPoints([
            "ML powers recommendations, fraud detection, vision, and translation everywhere.",
            "CRISP-DM: business → data → prep → modeling → evaluation → deployment, iterating.",
            "Bias, opacity, and privacy are engineering responsibilities, not afterthoughts.",
            "Correlation ≠ causation — ML finds patterns; humans interpret them.",
            "Production ML = 5% modeling, 95% pipeline, monitoring, and retraining.",
        ]),
    ],

    {
        summary:
            "Survey real ML applications, the CRISP-DM lifecycle, ethical duties (bias, explainability, privacy), production drift, and career paths.",
        minutes: 12,
        tags: ["applications", "ethics", "crisp-dm", "careers", "responsible-ai", "important"],

        mcqs: [
            mcq(
                "A hiring model trained on 10 years of biased decisions will likely:",
                ["Fix the bias automatically", "Replicate and scale the bias", "Ignore historical data", "Become unbiased with more epochs"],
                1,
                "Models learn patterns in data — biased history produces biased predictions."
            ),
            mcq(
                "Ice cream sales correlate with drownings because of summer. This illustrates:",
                ["Causation", "A confounding (hidden) variable — correlation ≠ causation", "Overfitting", "Data leakage"],
                1,
                "Temperature drives both; never read causation from correlation."
            ),
            mcq(
                "In production, a model's accuracy slowly declines over months. This is called:",
                ["Overfitting", "Data/concept drift", "Bugging", "Regularization"],
                1,
                "The world changes; monitoring and retraining keep models healthy."
            ),
            mcq(
                "Which role focuses on DEPLOYING and OPERATING models rather than inventing them?",
                ["Data Analyst", "ML Engineer", "Product Manager", "Research Scientist"],
                1,
                "ML Engineers own the pipelines, serving, and monitoring — MLOps."
            ),
        ],

        questions: [
            qa(
                "Discuss three major ethical challenges in machine learning and their mitigations.",
                "(1) Bias and fairness: models trained on historically biased data (hiring, lending, policing) replicate and SCALE that bias with every automated decision — mitigated by auditing training data for representation, measuring fairness metrics across demographic groups, and involving diverse teams in problem definition. (2) Opacity (black-box problem): deep models cannot explain a rejected loan or diagnosis, blocking accountability required by law and ethics — mitigated by explainability tools like SHAP that attribute decisions to features, or by choosing interpretable models (trees, logistic regression) for high-stakes domains. (3) Privacy: models can memorize and leak training records, and inference on personal data happens without meaningful consent — mitigated by data minimization, anonymization, differential privacy, and federated learning that trains without centralizing raw data. Cross-cutting principle: humans must remain accountable — automation supports decisions; it must not launder responsibility.",
                4
            ),
            qa(
                "Explain why 'the model is only 5% of the system' in production ML.",
                "A Kaggle notebook ends at evaluation; a production system must continuously ingest, serve, and survive reality. The surrounding 95% includes: data pipelines that reliably collect and validate incoming data (schema checks, missing-value guards); feature engineering code shared EXACTLY between training and serving (training-serving skew causes silent failures); model serving infrastructure (APIs, latency budgets, scaling); monitoring that watches input distributions, prediction distributions, and delayed ground-truth metrics — because data drift and concept drift silently erode accuracy as the world changes; retraining pipelines triggered when monitors trip; and rollbacks plus A/B testing so a bad model never reaches everyone. This is why ML Engineers exist: the algorithm was solved in a notebook — the SYSTEM is the engineering achievement, and careers in MLOps grow precisely around that 95%.",
                4
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit2Topics = [
    featureEngineering,
    ensembleLearning,
    neuralNetworksIntro,
    sklearnProject,
    mlEthicsCareers,
];
