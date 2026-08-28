/* =========================================================
   MSc-IT • SEM 2 • Machine Learning
   UNIT 1 — Introduction to Machine Learning and Python Foundations
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
   TOPIC 1 — Introduction to Machine Learning
========================================================= */

const introductionToMachineLearning = createTopic(
    "introduction-to-machine-learning",
    "Introduction to Machine Learning",

    [
        definition(
            "Machine Learning",
            "Machine Learning is a branch of Artificial Intelligence that enables computers to learn patterns from data and make predictions or decisions without being explicitly programmed for every rule."
        ),

        text(
            "Traditional programming depends on manually written rules. Machine Learning depends on examples. Instead of writing exact rules for detecting spam emails, we provide many spam and non-spam emails to an algorithm, and it learns patterns such as suspicious words, sender behaviour and links."
        ),

        heading("Traditional Programming vs Machine Learning"),

        table(
            ["Aspect", "Traditional Programming", "Machine Learning"],
            [
                ["Input", "Data + rules", "Data + answers/examples"],
                ["Output", "Answer", "Learned model/rules"],
                ["Logic", "Written manually by programmer", "Learned automatically from data"],
                ["Best for", "Fixed, well-defined problems", "Pattern-based and uncertain problems"],
                ["Example", "Calculate tax using formula", "Predict house price from past sales"],
            ]
        ),

        heading("Basic Machine Learning Terminology"),

        table(
            ["Term", "Meaning", "Example"],
            [
                ["Dataset", "Collection of records used for learning", "Student marks table"],
                ["Feature", "Input variable used for prediction", "Hours studied, attendance"],
                ["Label / Target", "Output variable to predict", "Pass/fail, price"],
                ["Model", "Learned mathematical pattern", "Linear regression model"],
                ["Training", "Process of learning from data", "Fitting model on examples"],
                ["Prediction", "Using model on new data", "Predicting marks of a student"],
            ]
        ),

        heading("Examples of Machine Learning Applications"),

        list([
            "Email spam detection.",
            "Movie and product recommendation systems.",
            "Face recognition and image classification.",
            "Voice assistants and speech recognition.",
            "Credit card fraud detection.",
            "Medical diagnosis support.",
            "Stock price and sales forecasting.",
            "Self-driving vehicle perception.",
        ]),

        heading("Relationship between AI, ML and Deep Learning"),

        text(
            "Artificial Intelligence is the broad field of making machines behave intelligently. Machine Learning is a subset of AI where machines learn from data. Deep Learning is a subset of ML that uses multi-layer neural networks and is especially powerful for images, speech and large-scale natural language processing."
        ),

        table(
            ["Field", "Description", "Example"],
            [
                ["AI", "Broad goal of intelligent machines", "Chess-playing program"],
                ["ML", "Learning patterns from data", "Spam classifier"],
                ["Deep Learning", "Neural-network-based ML", "Face recognition using CNN"],
                ["Data Science", "Extracting insight from data using statistics, ML and visualisation", "Customer churn analysis"],
            ]
        ),

        heading("General ML Workflow"),

        steps([
            "Understand the problem and define the objective.",
            "Collect relevant data.",
            "Clean and preprocess the data.",
            "Split data into training and testing sets.",
            "Choose an appropriate algorithm.",
            "Train the model on training data.",
            "Evaluate the model on test data.",
            "Tune parameters and improve performance.",
            "Deploy the model for real-world use.",
            "Monitor the model because data patterns may change over time.",
        ]),

        note(
            "Machine Learning does not magically create intelligence. A model is only as good as the data, features, assumptions and evaluation used to build it. Poor or biased data often produces poor or biased predictions.",
            "warning",
            "Important"
        ),

        keyPoints([
            "Machine Learning allows systems to learn from examples instead of fixed rules.",
            "Features are inputs; labels/targets are outputs to be predicted.",
            "A model is the learned pattern obtained after training.",
            "AI is broader than ML; Deep Learning is a subset of ML.",
            "The ML workflow includes data collection, preprocessing, training, evaluation and deployment.",
        ]),
    ],

    {
        summary:
            "Understand what Machine Learning is, how it differs from traditional programming, basic ML terminology and the general ML workflow.",
        minutes: 12,
        tags: ["machine-learning", "ai", "introduction", "features", "model", "important"],

        mcqs: [
            mcq(
                "Machine Learning mainly enables computers to:",
                ["Store large files", "Learn patterns from data", "Execute only fixed rules", "Design hardware"],
                1,
                "Machine Learning systems learn patterns from data and use those patterns for prediction or decision-making."
            ),
            mcq(
                "In ML, a feature means:",
                ["The output to predict", "An input variable used by the model", "A programming language", "A database table"],
                1,
                "Features are input variables such as age, marks, salary or hours studied."
            ),
            mcq(
                "The label or target is:",
                ["The value to be predicted", "The training algorithm", "The CPU speed", "The file name"],
                0,
                "The target/label is the output variable, such as pass/fail or house price."
            ),
            mcq(
                "Deep Learning is a subset of:",
                ["Database Management", "Machine Learning", "Operating Systems", "Networking"],
                1,
                "Deep Learning is a subfield of ML based mainly on neural networks."
            ),
            mcq(
                "A trained ML model is used to:",
                ["Delete old data", "Make predictions on new data", "Compile Python", "Create RAM"],
                1,
                "After training, the learned model can be used to predict outcomes for unseen data."
            ),
            mcq(
                "Which step usually comes before model training?",
                ["Deployment", "Data preprocessing", "Model monitoring", "User logout"],
                1,
                "Data must be cleaned, transformed and split before training."
            ),
        ],

        questions: [
            qa(
                "Define Machine Learning and explain how it differs from traditional programming.",
                "Machine Learning is a branch of Artificial Intelligence where a computer learns patterns from data and uses those patterns to make predictions or decisions. In traditional programming, the programmer writes explicit rules and the computer applies those rules to input data to produce output. In Machine Learning, the system is given data and examples of correct answers, and the algorithm learns the rules automatically. For example, instead of manually writing all rules for spam detection, we train a model using many spam and non-spam emails. ML is useful when rules are complex, changing or difficult to write manually.",
                5
            ),
            qa(
                "Explain the basic terms: dataset, feature, label, model, training and prediction.",
                "A dataset is a collection of records used for analysis or learning. A feature is an input variable used by the model, such as hours studied or attendance. A label or target is the output variable to be predicted, such as pass/fail or final marks. A model is the learned mathematical representation of patterns in the data. Training is the process of fitting the model on known examples. Prediction is the use of the trained model on new, unseen data. For example, in house-price prediction, area, location and number of rooms are features, price is the target, and the trained model predicts the price of a new house.",
                5
            ),
            qa(
                "Describe the general workflow of a Machine Learning project.",
                "A typical Machine Learning project starts by understanding the problem and defining the objective. Next, relevant data is collected from files, databases, APIs or sensors. The data is cleaned by handling missing values, outliers and inconsistent formats. Features are selected or engineered, categorical values are encoded, and numerical values may be scaled. The dataset is split into training and testing sets. An algorithm is selected and trained on the training data. The model is evaluated on test data using suitable metrics. If performance is poor, preprocessing, features or hyperparameters are improved. Finally, the model is deployed and monitored because real-world data may change over time.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — Types of Machine Learning
========================================================= */

const typesOfMachineLearning = createTopic(
    "types-of-machine-learning",
    "Types of Machine Learning",

    [
        text(
            "Machine Learning is commonly divided into supervised learning, unsupervised learning, semi-supervised learning and reinforcement learning. The type depends mainly on whether labelled output data is available and what kind of task must be solved."
        ),

        heading("Supervised Learning"),

        definition(
            "Supervised Learning",
            "A type of Machine Learning where the model is trained using labelled data. Each training example contains input features and the correct output label."
        ),

        text(
            "Supervised learning is like learning with a teacher. The model sees many examples with correct answers and learns a mapping from inputs to outputs."
        ),

        table(
            ["Task", "Meaning", "Example Algorithms", "Example Use"],
            [
                ["Classification", "Predict a category/class", "Logistic Regression, KNN, Decision Tree, SVM", "Spam or not spam"],
                ["Regression", "Predict a continuous numeric value", "Linear Regression, Decision Tree Regressor", "House price prediction"],
            ]
        ),

        heading("Classification vs Regression"),

        table(
            ["Aspect", "Classification", "Regression"],
            [
                ["Output", "Category/class", "Continuous number"],
                ["Examples", "Pass/fail, spam/not spam", "Price, salary, temperature"],
                ["Common metrics", "Accuracy, precision, recall, F1", "MAE, MSE, RMSE, R²"],
                ["Algorithm example", "Logistic Regression", "Linear Regression"],
            ]
        ),

        heading("Unsupervised Learning"),

        definition(
            "Unsupervised Learning",
            "A type of Machine Learning where the model is trained on data without labelled outputs. The goal is to discover hidden patterns, groups or structures."
        ),

        table(
            ["Task", "Meaning", "Example Algorithm", "Example Use"],
            [
                ["Clustering", "Group similar records", "K-Means, Hierarchical Clustering", "Customer segmentation"],
                ["Dimensionality Reduction", "Reduce number of features while preserving information", "PCA", "Visualising high-dimensional data"],
                ["Association Rule Mining", "Find item relationships", "Apriori", "Market basket analysis"],
            ]
        ),

        heading("Reinforcement Learning"),

        definition(
            "Reinforcement Learning",
            "A learning method where an agent interacts with an environment and learns actions by receiving rewards or penalties."
        ),

        text(
            "In reinforcement learning, there is no fixed labelled answer for each input. The agent learns by trial and error. Examples include game-playing agents, robot navigation and self-driving decision systems."
        ),

        table(
            ["Term", "Meaning", "Example"],
            [
                ["Agent", "Learner or decision maker", "Robot"],
                ["Environment", "World in which agent acts", "Room or road"],
                ["Action", "Choice made by agent", "Move left, brake"],
                ["Reward", "Feedback signal", "+10 for success, -5 for crash"],
                ["Policy", "Strategy for choosing actions", "Best move rule"],
            ]
        ),

        heading("Semi-supervised Learning"),

        definition(
            "Semi-supervised Learning",
            "A learning approach that uses a small amount of labelled data together with a large amount of unlabelled data."
        ),

        text(
            "Semi-supervised learning is useful because labelled data is often expensive to create, while unlabelled data is easier to collect. For example, labelling medical images needs experts, but collecting images is easier."
        ),

        heading("Choosing the Type of ML"),

        table(
            ["Situation", "Suitable ML Type"],
            [
                ["Data has input and known output labels", "Supervised Learning"],
                ["Need to predict a category", "Classification"],
                ["Need to predict a number", "Regression"],
                ["Data has no labels and groups are required", "Unsupervised Learning / Clustering"],
                ["Agent learns through reward and penalty", "Reinforcement Learning"],
                ["Small labelled + large unlabelled data", "Semi-supervised Learning"],
            ]
        ),

        note(
            "Do not confuse logistic regression with regression tasks. Despite its name, logistic regression is mainly used for classification.",
            "tip",
            "Exam Tip"
        ),

        keyPoints([
            "Supervised learning uses labelled data.",
            "Classification predicts categories; regression predicts numeric values.",
            "Unsupervised learning discovers hidden patterns without labels.",
            "Clustering groups similar data points.",
            "Reinforcement learning uses rewards and penalties to learn actions.",
        ]),
    ],

    {
        summary:
            "Learn the major types of Machine Learning: supervised, unsupervised, semi-supervised and reinforcement learning.",
        minutes: 13,
        tags: ["machine-learning", "supervised", "unsupervised", "classification", "regression"],

        mcqs: [
            mcq(
                "Supervised learning requires:",
                ["Only unlabelled data", "Labelled training data", "No data", "Only rewards"],
                1,
                "Supervised learning uses examples containing inputs and correct output labels."
            ),
            mcq(
                "Predicting whether an email is spam is a:",
                ["Regression problem", "Classification problem", "Clustering problem", "Dimensionality reduction problem"],
                1,
                "Spam/not spam is a category, so it is classification."
            ),
            mcq(
                "Predicting house price is usually a:",
                ["Classification problem", "Regression problem", "Clustering problem", "Reinforcement learning problem"],
                1,
                "House price is a continuous numeric value, so it is regression."
            ),
            mcq(
                "K-Means is mainly used for:",
                ["Clustering", "Password hashing", "Sorting", "Web routing"],
                0,
                "K-Means is an unsupervised clustering algorithm."
            ),
            mcq(
                "In reinforcement learning, the learner is called:",
                ["Router", "Agent", "Compiler", "Validator"],
                1,
                "The agent interacts with the environment and learns from rewards."
            ),
            mcq(
                "Semi-supervised learning uses:",
                ["Only labelled data", "Only rewards", "A small labelled set and a large unlabelled set", "No input data"],
                2,
                "Semi-supervised learning combines limited labelled data with more unlabelled data."
            ),
        ],

        questions: [
            qa(
                "Differentiate between supervised and unsupervised learning.",
                "Supervised learning uses labelled data, meaning each training example has input features and a correct output label. The model learns to map inputs to outputs. It is used for classification, such as spam detection, and regression, such as price prediction. Unsupervised learning uses data without output labels. The model tries to discover hidden structure or patterns by itself. Common unsupervised tasks include clustering customers into groups and reducing dimensions using PCA. In short, supervised learning learns from examples with answers, while unsupervised learning finds patterns without given answers.",
                5
            ),
            qa(
                "Explain classification and regression with examples.",
                "Classification and regression are two main supervised learning tasks. Classification predicts a discrete category or class. Examples include predicting whether an email is spam or not spam, whether a student passes or fails, or whether a tumour is benign or malignant. Regression predicts a continuous numeric value. Examples include predicting house price, temperature, salary or sales amount. Classification is evaluated using metrics such as accuracy, precision, recall and F1-score. Regression is evaluated using metrics such as MAE, MSE, RMSE and R². The key difference is that classification outputs labels, while regression outputs numbers.",
                5
            ),
            qa(
                "What is reinforcement learning? Explain its main components.",
                "Reinforcement learning is a type of Machine Learning where an agent learns by interacting with an environment and receiving rewards or penalties. The agent observes the state of the environment, takes an action, and receives feedback in the form of a reward. Over time, it learns a policy, which is a strategy for choosing actions that maximise long-term reward. The main components are agent, environment, state, action, reward and policy. Examples include a robot learning to move, a game-playing AI learning moves, or a self-driving car making driving decisions. It differs from supervised learning because there are no direct correct labels for every action.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — Python Foundations for Machine Learning
========================================================= */

const pythonFoundationsForMachineLearning = createTopic(
    "python-foundations-for-machine-learning",
    "Python Foundations for Machine Learning",

    [
        text(
            "Python is widely used in Machine Learning because it is simple, readable and has powerful libraries such as NumPy, pandas, Matplotlib, seaborn and scikit-learn. ML work in Python usually involves loading data, cleaning it, analysing it and training models."
        ),

        heading("Why Python for ML?"),

        list([
            "Simple syntax and easy readability.",
            "Large ecosystem of ML and data science libraries.",
            "Strong community support.",
            "Works well with notebooks such as Jupyter and Google Colab.",
            "Supports fast numerical computation through NumPy.",
            "Provides ready-made ML algorithms through scikit-learn.",
        ]),

        heading("Python Data Structures Used in ML"),

        table(
            ["Structure", "Description", "Example Use"],
            [
                ["List", "Ordered mutable collection", "Store marks or names"],
                ["Tuple", "Ordered immutable collection", "Fixed coordinate pair"],
                ["Dictionary", "Key-value collection", "Column name to value mapping"],
                ["Set", "Unordered unique values", "Unique categories"],
                ["NumPy array", "Fast numerical array", "Matrix operations"],
                ["pandas DataFrame", "Tabular data structure", "CSV dataset"],
            ]
        ),

        code(
            `# Basic Python structures
marks = [70, 85, 90]
student = {"name": "Asha", "marks": 85, "passed": True}

average = sum(marks) / len(marks)

print(student["name"])
print(average)`,
            "python",
            "Python lists and dictionaries"
        ),

        output(`Asha
81.66666666666667`),

        heading("Functions and List Comprehension"),

        code(
            `def square(x):
    return x * x

numbers = [1, 2, 3, 4, 5]
squares = [square(n) for n in numbers if n % 2 == 0]

print(squares)`,
            "python",
            "Function and list comprehension"
        ),

        output(`[4, 16]`),

        heading("NumPy Basics"),

        definition(
            "NumPy",
            "A Python library for fast numerical computing. It provides the ndarray object, vectorised operations, mathematical functions and linear algebra utilities."
        ),

        code(
            `import numpy as np

x = np.array([1, 2, 3])
y = np.array([10, 20, 30])

print(x + y)
print(x * 2)
print(np.mean(y))
print(np.shape(y))`,
            "python",
            "NumPy array operations"
        ),

        output(`[11 22 33]
[2 4 6]
20.0
(3,)`),

        heading("pandas Basics"),

        definition(
            "pandas",
            "A Python library used for data analysis and manipulation. Its main structures are Series and DataFrame."
        ),

        code(
            `import pandas as pd

data = {
    "name": ["Asha", "Ravi", "Meena"],
    "marks": [85, 67, 92],
    "city": ["Pune", "Mumbai", "Pune"]
}

df = pd.DataFrame(data)

print(df.head())
print(df["marks"].mean())
print(df[df["city"] == "Pune"])`,
            "python",
            "pandas DataFrame"
        ),

        heading("Reading a CSV Dataset"),

        code(
            `import pandas as pd

df = pd.read_csv("students.csv")

print(df.shape)       # rows and columns
print(df.columns)     # column names
print(df.info())      # data types and missing values
print(df.describe())  # numeric summary`,
            "python",
            "Loading and inspecting data"
        ),

        heading("Matplotlib Quick Example"),

        code(
            `import matplotlib.pyplot as plt

marks = [70, 80, 65, 90, 85]
plt.plot(marks)
plt.title("Student Marks")
plt.xlabel("Student")
plt.ylabel("Marks")
plt.show()`,
            "python",
            "Simple line plot"
        ),

        note(
            "For Machine Learning, do not try to write every algorithm manually at first. First become comfortable with NumPy arrays, pandas DataFrames, data cleaning and scikit-learn's fit-predict workflow.",
            "tip",
            "Practical Tip"
        ),

        keyPoints([
            "Python is popular in ML because of simple syntax and strong libraries.",
            "NumPy provides fast arrays and vectorised numerical operations.",
            "pandas provides DataFrames for tabular data manipulation.",
            "Matplotlib and seaborn are used for visualisation.",
            "scikit-learn provides ready-to-use ML algorithms and preprocessing tools.",
        ]),
    ],

    {
        summary:
            "Revise Python essentials for ML including data structures, functions, NumPy, pandas and basic visualisation.",
        minutes: 14,
        tags: ["machine-learning", "python", "numpy", "pandas", "matplotlib"],

        mcqs: [
            mcq(
                "NumPy is mainly used for:",
                ["Web routing", "Fast numerical array operations", "Password encryption", "HTML styling"],
                1,
                "NumPy provides ndarray and fast numerical operations."
            ),
            mcq(
                "The main tabular data structure in pandas is:",
                ["ArrayList", "DataFrame", "HashMap", "Socket"],
                1,
                "A pandas DataFrame stores data in rows and columns."
            ),
            mcq(
                "Which function reads a CSV file in pandas?",
                ["pd.open_csv()", "pd.read_csv()", "pd.load_table()", "pd.csv_reader()"],
                1,
                "pd.read_csv() loads a CSV file into a DataFrame."
            ),
            mcq(
                "Vectorised operations in NumPy are preferred because they are:",
                ["Usually faster and cleaner than manual loops", "Always less accurate", "Only for strings", "Used only in HTML"],
                0,
                "NumPy performs operations efficiently on whole arrays."
            ),
            mcq(
                "df.head() is used to:",
                ["Delete rows", "Display first few rows", "Train a model", "Create a chart"],
                1,
                "head() shows the first few rows of a DataFrame."
            ),
            mcq(
                "Matplotlib is commonly used for:",
                ["Data visualisation", "Database indexing", "File compression", "Network routing"],
                0,
                "Matplotlib is a Python plotting library."
            ),
        ],

        questions: [
            qa(
                "Why is Python widely used for Machine Learning?",
                "Python is widely used for Machine Learning because it has simple and readable syntax, making it suitable for both beginners and professionals. It has a large ecosystem of libraries: NumPy for numerical arrays, pandas for data manipulation, Matplotlib and seaborn for visualisation, and scikit-learn for ML algorithms. Python also supports Jupyter Notebook and Google Colab, which are convenient for experiments. Its community support is strong, so documentation, tutorials and examples are easily available. Python can also integrate with deep learning libraries such as TensorFlow and PyTorch.",
                5
            ),
            qa(
                "Explain the role of NumPy and pandas in Machine Learning.",
                "NumPy is used for fast numerical computation. It provides the ndarray data structure and supports vectorised operations, matrix multiplication, mathematical functions and linear algebra. Many ML algorithms internally depend on NumPy arrays. pandas is used for data manipulation and analysis. Its DataFrame structure represents tabular data with rows and columns. pandas can read CSV, Excel and SQL data, handle missing values, filter rows, group data and compute summaries. In a typical ML project, pandas is used to load and clean data, and NumPy is used for efficient numerical processing.",
                5
            ),
            qa(
                "Write and explain a basic Python workflow for loading a dataset.",
                "A basic workflow starts by importing pandas, then reading the dataset using pd.read_csv('file.csv'). After loading, df.shape gives the number of rows and columns, df.head() displays the first few records, df.info() shows column data types and missing values, and df.describe() gives statistical summaries of numeric columns. The programmer may check missing values using df.isnull().sum(), select features and target columns, and then convert data into arrays for model training. This workflow helps understand the structure and quality of the dataset before applying Machine Learning.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — Data Preprocessing and Feature Preparation
========================================================= */

const dataPreprocessingAndFeaturePreparation = createTopic(
    "data-preprocessing-and-feature-preparation",
    "Data Preprocessing and Feature Preparation",

    [
        text(
            "Data preprocessing is one of the most important parts of Machine Learning. Real-world data is often incomplete, noisy, inconsistent, duplicated or in the wrong format. A good model requires clean and meaningful input data."
        ),

        heading("Why Data Preprocessing is Needed"),

        list([
            "Datasets may contain missing values.",
            "Numeric columns may contain invalid text values.",
            "Categorical values must be converted into numbers.",
            "Features may have different scales.",
            "Duplicate or noisy records may reduce model quality.",
            "Outliers may affect algorithms such as linear regression.",
            "Training and testing data must be separated to estimate real performance.",
        ]),

        heading("Common Preprocessing Tasks"),

        table(
            ["Task", "Purpose", "Example"],
            [
                ["Handling missing values", "Fill or remove incomplete data", "Replace missing age with median"],
                ["Encoding categorical data", "Convert categories into numbers", "Male/Female to 0/1"],
                ["Feature scaling", "Bring numeric features to comparable scale", "StandardScaler"],
                ["Outlier handling", "Reduce effect of extreme values", "Cap unusually high salary"],
                ["Train-test split", "Evaluate model on unseen data", "80% train, 20% test"],
                ["Feature selection", "Keep useful columns", "Remove ID column"],
            ]
        ),

        heading("Handling Missing Values"),

        code(
            `import pandas as pd

df = pd.DataFrame({
    "age": [20, None, 22, 25],
    "marks": [80, 75, None, 90]
})

# Fill missing values with median
df["age"] = df["age"].fillna(df["age"].median())
df["marks"] = df["marks"].fillna(df["marks"].median())

print(df)`,
            "python",
            "Filling missing values"
        ),

        heading("Encoding Categorical Variables"),

        definition(
            "Categorical Variable",
            "A variable that contains categories or labels instead of numerical values, such as city, gender, department or product type."
        ),

        code(
            `import pandas as pd

df = pd.DataFrame({
    "city": ["Pune", "Mumbai", "Pune", "Delhi"]
})

encoded = pd.get_dummies(df, columns=["city"])
print(encoded)`,
            "python",
            "One-hot encoding with pandas"
        ),

        heading("Label Encoding vs One-Hot Encoding"),

        table(
            ["Encoding", "How It Works", "Best For", "Risk"],
            [
                ["Label Encoding", "Assigns integer to each category", "Ordinal categories like low/medium/high", "May create false order"],
                ["One-Hot Encoding", "Creates binary column for each category", "Nominal categories like city", "Can increase columns"],
            ]
        ),

        heading("Feature Scaling"),

        definition(
            "Feature Scaling",
            "The process of transforming numeric features so they are on similar scales. It is important for distance-based and gradient-based algorithms."
        ),

        table(
            ["Scaler", "Formula / Idea", "Use"],
            [
                ["Min-Max Scaling", "Transforms values to range 0 to 1", "When fixed range is useful"],
                ["Standardisation", "Mean 0 and standard deviation 1", "Common default for many ML algorithms"],
                ["Robust Scaling", "Uses median and IQR", "Useful when outliers exist"],
            ]
        ),

        code(
            `from sklearn.preprocessing import StandardScaler

X = [[20, 50000], [25, 60000], [30, 80000]]

scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

print(X_scaled)`,
            "python",
            "Standardising features"
        ),

        heading("Train-Test Split"),

        code(
            `from sklearn.model_selection import train_test_split

X = df[["hours_studied", "attendance"]]
y = df["passed"]

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

print(X_train.shape)
print(X_test.shape)`,
            "python",
            "Splitting data"
        ),

        note(
            "Fit preprocessing tools such as StandardScaler only on training data, then transform test data using the same fitted scaler. Fitting on the full dataset before splitting causes data leakage.",
            "warning",
            "Data Leakage"
        ),

        keyPoints([
            "Real-world data must be cleaned before model training.",
            "Missing values can be removed or filled using mean, median, mode or domain rules.",
            "Categorical values must be converted into numeric form.",
            "Scaling is important for algorithms such as KNN, SVM and neural networks.",
            "Train-test split helps estimate performance on unseen data.",
            "Avoid data leakage by fitting preprocessing only on training data.",
        ]),
    ],

    {
        summary:
            "Learn key preprocessing steps: missing values, categorical encoding, scaling, outliers and train-test split.",
        minutes: 14,
        tags: ["machine-learning", "preprocessing", "encoding", "scaling", "train-test-split"],

        mcqs: [
            mcq(
                "Data preprocessing is needed because real-world data is often:",
                ["Always perfect", "Incomplete, noisy or inconsistent", "Only numeric", "Already trained"],
                1,
                "Real-world datasets commonly contain missing, noisy or inconsistent values."
            ),
            mcq(
                "One-hot encoding is used to:",
                ["Delete missing rows", "Convert categories into binary columns", "Scale numbers to 0", "Split data"],
                1,
                "One-hot encoding creates separate 0/1 columns for categories."
            ),
            mcq(
                "StandardScaler transforms data to have:",
                ["Mean 0 and standard deviation 1", "Only positive values", "All values equal", "Only strings"],
                0,
                "Standardisation centres data around 0 with unit standard deviation."
            ),
            mcq(
                "Train-test split is used to:",
                ["Evaluate model on unseen data", "Encrypt the dataset", "Make all values categorical", "Remove Python errors"],
                0,
                "Testing on unseen data gives a better estimate of generalisation."
            ),
            mcq(
                "Fitting a scaler before train-test split can cause:",
                ["Data leakage", "Better security", "Lower memory always", "No effect ever"],
                0,
                "Information from test data leaks into training preprocessing if fitted before splitting."
            ),
            mcq(
                "Median is often preferred over mean for missing values when:",
                ["There are strong outliers", "All values are text", "Data has no numbers", "The column is an ID"],
                0,
                "Median is less affected by extreme outliers than mean."
            ),
        ],

        questions: [
            qa(
                "What is data preprocessing? Why is it important in Machine Learning?",
                "Data preprocessing is the process of cleaning, transforming and preparing raw data before feeding it to a Machine Learning algorithm. It is important because real-world data often contains missing values, wrong formats, duplicate records, outliers, inconsistent categories and different feature scales. Poor-quality data can lead to poor-quality models, even if the algorithm is powerful. Preprocessing includes handling missing values, encoding categorical variables, scaling features, removing irrelevant columns, dealing with outliers and splitting the dataset into training and testing sets. Good preprocessing improves accuracy, reliability and generalisation of ML models.",
                5
            ),
            qa(
                "Explain different methods for handling missing values.",
                "Missing values can be handled in several ways. If only a few records are missing and they are not important, rows can be removed. If a column has too many missing values, the column may be dropped. Numeric missing values can be filled using mean, median or a fixed value; median is preferred when outliers exist. Categorical missing values can be filled using mode or a category such as 'Unknown'. In time-series data, forward fill or backward fill may be used. The choice depends on the data and business meaning. Missing values should be handled carefully because wrong imputation can introduce bias.",
                5
            ),
            qa(
                "Differentiate between label encoding and one-hot encoding.",
                "Label encoding converts each category into an integer, for example low = 0, medium = 1 and high = 2. It is suitable for ordinal categories where order is meaningful. However, for nominal categories such as city names, label encoding may create a false numerical order. One-hot encoding creates a separate binary column for each category, such as city_Pune, city_Mumbai and city_Delhi. It is suitable for nominal categories because it does not imply order. The disadvantage is that it can increase the number of columns when there are many categories.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 5 — Model Training, Evaluation and First scikit-learn Model
========================================================= */

const modelTrainingEvaluationAndScikitLearn = createTopic(
    "model-training-evaluation-and-first-scikit-learn-model",
    "Model Training, Evaluation and First scikit-learn Model",

    [
        text(
            "After preprocessing data, the next step is to train a model and evaluate its performance. Evaluation is necessary because a model that performs well on training data may fail on new unseen data."
        ),

        heading("Training and Testing"),

        definition(
            "Training Set",
            "The portion of data used by the algorithm to learn patterns."
        ),

        definition(
            "Test Set",
            "The portion of data kept separate and used only for evaluating how well the trained model performs on unseen examples."
        ),

        heading("Overfitting and Underfitting"),

        table(
            ["Concept", "Meaning", "Symptoms"],
            [
                ["Underfitting", "Model is too simple and fails to learn patterns", "Poor training and poor test performance"],
                ["Good Fit", "Model learns useful patterns and generalises well", "Good training and good test performance"],
                ["Overfitting", "Model memorises training data and noise", "Very high training performance but poor test performance"],
            ]
        ),

        heading("Bias and Variance"),

        table(
            ["Term", "Meaning", "Related Problem"],
            [
                ["Bias", "Error due to overly simple assumptions", "High bias causes underfitting"],
                ["Variance", "Error due to sensitivity to training data", "High variance causes overfitting"],
                ["Bias-Variance Trade-off", "Balance between simplicity and flexibility", "Goal is good generalisation"],
            ]
        ),

        heading("Classification Metrics"),

        table(
            ["Metric", "Meaning", "Useful When"],
            [
                ["Accuracy", "Correct predictions / total predictions", "Classes are balanced"],
                ["Precision", "Of predicted positives, how many are truly positive", "False positives are costly"],
                ["Recall", "Of actual positives, how many were found", "False negatives are costly"],
                ["F1-score", "Harmonic mean of precision and recall", "Need balance between precision and recall"],
                ["Confusion Matrix", "Table of actual vs predicted classes", "Detailed classification analysis"],
            ]
        ),

        heading("Regression Metrics"),

        table(
            ["Metric", "Meaning"],
            [
                ["MAE", "Mean Absolute Error; average absolute difference"],
                ["MSE", "Mean Squared Error; average squared difference"],
                ["RMSE", "Square root of MSE; error in original unit"],
                ["R² Score", "Proportion of variance explained by model"],
            ]
        ),

        heading("scikit-learn fit-predict Pattern"),

        definition(
            "scikit-learn",
            "A popular Python library that provides simple and consistent tools for Machine Learning, including preprocessing, model training, evaluation and model selection."
        ),

        code(
            `# Basic classification example using scikit-learn

from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier
from sklearn.metrics import accuracy_score, confusion_matrix

# Load dataset
iris = load_iris()
X = iris.data
y = iris.target

# Split data
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Create and train model
model = KNeighborsClassifier(n_neighbors=3)
model.fit(X_train, y_train)

# Predict
y_pred = model.predict(X_test)

# Evaluate
print("Accuracy:", accuracy_score(y_test, y_pred))
print(confusion_matrix(y_test, y_pred))`,
            "python",
            "First scikit-learn model"
        ),

        heading("The fit(), predict() and score() Methods"),

        table(
            ["Method", "Purpose"],
            [
                ["fit(X_train, y_train)", "Train the model using training features and labels"],
                ["predict(X_test)", "Generate predictions for unseen data"],
                ["score(X_test, y_test)", "Return default performance score"],
                ["fit_transform()", "Fit a transformer and transform data"],
                ["transform()", "Apply an already fitted transformer"],
            ]
        ),

        heading("Cross-Validation"),

        definition(
            "Cross-Validation",
            "A model evaluation technique where data is divided into multiple folds. The model is trained and tested multiple times using different folds, producing a more reliable performance estimate."
        ),

        code(
            `from sklearn.model_selection import cross_val_score
from sklearn.neighbors import KNeighborsClassifier
from sklearn.datasets import load_iris

iris = load_iris()
X = iris.data
y = iris.target

model = KNeighborsClassifier(n_neighbors=3)
scores = cross_val_score(model, X, y, cv=5)

print(scores)
print("Average accuracy:", scores.mean())`,
            "python",
            "Cross-validation"
        ),

        note(
            "High accuracy is not always enough. If a disease dataset has 99% healthy people and 1% sick people, a model that always predicts healthy gets 99% accuracy but is medically useless. Use precision, recall and F1-score for imbalanced classification.",
            "warning",
            "Metric Selection"
        ),

        keyPoints([
            "Training data is used to learn; test data is used to evaluate unseen performance.",
            "Underfitting means the model is too simple; overfitting means it memorises training data.",
            "Classification metrics include accuracy, precision, recall, F1 and confusion matrix.",
            "Regression metrics include MAE, MSE, RMSE and R².",
            "scikit-learn follows a consistent fit(), predict() and evaluate workflow.",
            "Cross-validation gives a more reliable estimate than a single train-test split.",
        ]),
    ],

    {
        summary:
            "Learn training/testing, overfitting, underfitting, evaluation metrics and the basic scikit-learn fit-predict workflow.",
        minutes: 12,
        tags: ["machine-learning", "scikit-learn", "evaluation", "overfitting", "metrics"],

        mcqs: [
            mcq(
                "The test set is used for:",
                ["Training the model repeatedly", "Evaluating performance on unseen data", "Storing Python code", "Deleting features"],
                1,
                "The test set is kept separate to estimate performance on new data."
            ),
            mcq(
                "Overfitting occurs when a model:",
                ["Is too simple", "Memorises training data and performs poorly on new data", "Has no features", "Cannot be trained"],
                1,
                "Overfitting means excellent training performance but poor generalisation."
            ),
            mcq(
                "Underfitting usually means:",
                ["Model is too simple to capture patterns", "Model has memorised noise", "Model has perfect accuracy", "Model is deployed"],
                0,
                "Underfitting happens when the model cannot learn the real relationship."
            ),
            mcq(
                "Precision is important when:",
                ["False positives are costly", "Only file size matters", "There are no classes", "Regression is impossible"],
                0,
                "Precision measures correctness among predicted positives."
            ),
            mcq(
                "Which is a regression metric?",
                ["F1-score", "Recall", "RMSE", "Confusion matrix"],
                2,
                "RMSE is commonly used to evaluate regression models."
            ),
            mcq(
                "In scikit-learn, model.fit() is used to:",
                ["Train the model", "Draw a graph", "Delete missing values", "Read a CSV file"],
                0,
                "fit() trains the model using training data."
            ),
        ],

        questions: [
            qa(
                "Explain overfitting and underfitting with examples.",
                "Underfitting occurs when a model is too simple to learn the real pattern in data. It performs poorly on both training and test data. For example, using a straight line to model a highly curved relationship may underfit. Overfitting occurs when a model is too complex and memorises training data, including noise. It performs very well on training data but poorly on unseen test data. For example, a very deep decision tree may memorise every training record. A good model balances bias and variance and performs well on both training and test data.",
                5
            ),
            qa(
                "Differentiate between classification and regression evaluation metrics.",
                "Classification metrics evaluate models that predict categories. Accuracy measures the proportion of correct predictions. Precision measures how many predicted positives are actually positive. Recall measures how many actual positives were correctly found. F1-score balances precision and recall. A confusion matrix shows actual versus predicted class counts. Regression metrics evaluate models that predict continuous numbers. MAE measures average absolute error, MSE measures average squared error, RMSE is the square root of MSE in the original unit, and R² measures how much variance is explained by the model. The metric must be chosen according to the problem.",
                5
            ),
            qa(
                "Describe the basic scikit-learn workflow for training a model.",
                "The basic scikit-learn workflow starts with loading or preparing data into features X and target y. The data is split into training and testing sets using train_test_split. A model object is created, such as KNeighborsClassifier or LinearRegression. The model is trained using model.fit(X_train, y_train). Predictions are made using model.predict(X_test). The predictions are compared with y_test using suitable metrics such as accuracy for classification or RMSE for regression. If performance is not satisfactory, preprocessing, feature selection or hyperparameters are adjusted. This fit-predict-evaluate pattern is consistent across most scikit-learn models.",
                5
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit1Topics = [
    introductionToMachineLearning,
    typesOfMachineLearning,
    pythonFoundationsForMachineLearning,
    dataPreprocessingAndFeaturePreparation,
    modelTrainingEvaluationAndScikitLearn,
];