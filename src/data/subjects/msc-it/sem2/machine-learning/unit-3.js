/* =========================================================
   MSc-IT • SEM 2 • Machine Learning
   UNIT 3 — Supervised Learning Algorithms
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
   TOPIC 1 — Linear Regression
========================================================= */

const linearRegression = createTopic(
    "linear-regression",
    "Linear Regression",

    [
        definition(
            "Linear Regression",
            "Linear Regression is a supervised learning algorithm used for predicting a continuous numeric value by modelling a linear relationship between input features and the target variable."
        ),

        text(
            "Linear regression is one of the simplest and most important regression algorithms. It assumes that the target variable can be predicted as a weighted sum of input features. For example, house price may depend on area, number of rooms and location score."
        ),

        heading("Simple Linear Regression"),

        definition(
            "Simple Linear Regression",
            "Simple linear regression uses one input feature to predict one continuous target value."
        ),

        code(
            `Equation:
y = mX + c

Where:
y = predicted output
X = input feature
m = slope / coefficient
c = intercept`,
            "text",
            "Simple linear regression equation"
        ),

        heading("Multiple Linear Regression"),

        definition(
            "Multiple Linear Regression",
            "Multiple linear regression uses two or more input features to predict a continuous target value."
        ),

        code(
            `Equation:
y = b0 + b1X1 + b2X2 + b3X3 + ... + bnXn

Where:
b0 = intercept
b1, b2, ... bn = coefficients
X1, X2, ... Xn = input features`,
            "text",
            "Multiple linear regression equation"
        ),

        heading("Example Use Cases"),

        list([
            "Predicting house price from area, rooms and location.",
            "Predicting student marks from study hours and attendance.",
            "Predicting sales based on advertising budget.",
            "Predicting salary based on experience.",
            "Predicting temperature or demand forecasting.",
        ]),

        heading("Linear Regression with scikit-learn"),

        code(
            `import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score
import numpy as np

# Sample dataset
df = pd.DataFrame({
    "hours": [1, 2, 3, 4, 5, 6, 7, 8],
    "attendance": [50, 55, 60, 65, 70, 75, 80, 85],
    "marks": [35, 40, 50, 55, 65, 70, 78, 85]
})

X = df[["hours", "attendance"]]
y = df["marks"]

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.25, random_state=42
)

model = LinearRegression()
model.fit(X_train, y_train)

y_pred = model.predict(X_test)

print("Intercept:", model.intercept_)
print("Coefficients:", model.coef_)
print("MAE:", mean_absolute_error(y_test, y_pred))
print("RMSE:", np.sqrt(mean_squared_error(y_test, y_pred)))
print("R2:", r2_score(y_test, y_pred))`,
            "python",
            "Linear regression in Python"
        ),

        heading("Cost Function"),

        definition(
            "Cost Function",
            "A cost function measures how far the model predictions are from the actual values. Linear regression commonly minimises Mean Squared Error."
        ),

        table(
            ["Metric", "Full Form", "Meaning"],
            [
                ["MAE", "Mean Absolute Error", "Average absolute difference between actual and predicted values"],
                ["MSE", "Mean Squared Error", "Average squared difference; penalises large errors more"],
                ["RMSE", "Root Mean Squared Error", "Square root of MSE; error in original unit"],
                ["R²", "R-squared Score", "Proportion of variance explained by the model"],
            ]
        ),

        heading("Assumptions of Linear Regression"),

        list([
            "Linear relationship between features and target.",
            "Errors should be independent.",
            "Errors should have constant variance.",
            "Features should not be highly correlated with each other.",
            "Outliers should be handled because they can strongly affect the regression line.",
        ], true),

        heading("Advantages and Limitations"),

        table(
            ["Advantages", "Limitations"],
            [
                ["Simple and easy to understand", "Works poorly for non-linear relationships"],
                ["Fast to train", "Sensitive to outliers"],
                ["Coefficients are interpretable", "Assumes linearity"],
                ["Good baseline model", "Multicollinearity can affect coefficient interpretation"],
            ]
        ),

        note(
            "Linear regression predicts continuous values. Do not use it directly for classification problems such as spam/not spam. For classification, logistic regression is usually more appropriate.",
            "warning",
            "Exam Tip"
        ),

        keyPoints([
            "Linear regression is used for predicting continuous numeric values.",
            "Simple linear regression uses one feature; multiple linear regression uses many features.",
            "The model learns coefficients and an intercept.",
            "Common evaluation metrics are MAE, MSE, RMSE and R².",
            "Linear regression is simple and interpretable but sensitive to outliers and non-linear patterns.",
        ]),
    ],

    {
        summary:
            "Understand simple and multiple linear regression, regression equation, cost function, metrics and scikit-learn implementation.",
        minutes: 13,
        tags: ["machine-learning", "supervised", "linear-regression", "regression", "important"],

        mcqs: [
            mcq(
                "Linear regression is mainly used for:",
                ["Predicting continuous numeric values", "Clustering data", "Encrypting data", "Reducing image size"],
                0,
                "Linear regression predicts continuous outputs such as price, marks or salary."
            ),
            mcq(
                "In y = mX + c, c represents:",
                ["Feature", "Intercept", "Target", "Error only"],
                1,
                "c is the intercept, the predicted value when X is 0."
            ),
            mcq(
                "Multiple linear regression uses:",
                ["No input features", "Only one category", "Two or more input features", "Only images"],
                2,
                "Multiple linear regression predicts using more than one feature."
            ),
            mcq(
                "Which is a regression evaluation metric?",
                ["Accuracy", "Recall", "RMSE", "Confusion matrix"],
                2,
                "RMSE is used for regression error measurement."
            ),
            mcq(
                "R² score measures:",
                ["Number of classes", "Variance explained by the model", "Database size", "Training time only"],
                1,
                "R² indicates how much variation in the target is explained by the model."
            ),
            mcq(
                "Linear regression is sensitive to:",
                ["Outliers", "Only HTML tags", "Cookie expiry", "File extensions"],
                0,
                "Extreme values can strongly influence the regression line."
            ),
        ],

        questions: [
            qa(
                "Define linear regression and explain simple and multiple linear regression.",
                "Linear regression is a supervised learning algorithm used to predict a continuous numeric target variable. It models the relationship between input features and output using a straight-line equation. Simple linear regression uses one input feature and has the equation y = mX + c, where m is the slope and c is the intercept. Multiple linear regression uses more than one feature and has the equation y = b0 + b1X1 + b2X2 + ... + bnXn. For example, predicting marks using only study hours is simple linear regression, while predicting marks using study hours, attendance and previous score is multiple linear regression.",
                5
            ),
            qa(
                "Explain the common evaluation metrics used for regression.",
                "Regression models predict continuous numeric values, so their performance is measured using error-based metrics. Mean Absolute Error (MAE) is the average absolute difference between actual and predicted values. Mean Squared Error (MSE) is the average squared difference and penalises large errors more strongly. Root Mean Squared Error (RMSE) is the square root of MSE and is easier to interpret because it is in the original unit of the target. R² score measures the proportion of variance in the target explained by the model. Higher R² generally indicates a better fit, while lower MAE/RMSE indicates lower prediction error.",
                5
            ),
            qa(
                "Write the basic steps to build a linear regression model using scikit-learn.",
                "To build a linear regression model using scikit-learn, first load the dataset using pandas. Select input features X and target variable y. Split the dataset into training and testing sets using train_test_split. Create a LinearRegression object from sklearn.linear_model. Train the model using model.fit(X_train, y_train). Predict values for test data using model.predict(X_test). Finally, evaluate the model using metrics such as MAE, MSE, RMSE and R² score. The learned coefficients can be checked using model.coef_ and the intercept using model.intercept_.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — Logistic Regression
========================================================= */

const logisticRegression = createTopic(
    "logistic-regression",
    "Logistic Regression",

    [
        definition(
            "Logistic Regression",
            "Logistic Regression is a supervised learning algorithm used mainly for classification. It predicts the probability that an input belongs to a particular class."
        ),

        text(
            "Despite the word 'regression' in its name, logistic regression is mainly used for classification problems. It uses a sigmoid function to convert a linear combination of features into a probability between 0 and 1."
        ),

        heading("Why Not Linear Regression for Classification?"),

        text(
            "Linear regression can produce values below 0 or above 1, which are not valid probabilities. Logistic regression solves this by applying the sigmoid function and converting the output into a probability."
        ),

        heading("Sigmoid Function"),

        definition(
            "Sigmoid Function",
            "The sigmoid function maps any real number into a value between 0 and 1, making it suitable for probability prediction."
        ),

        code(
            `Sigmoid formula:
p = 1 / (1 + e^(-z))

Where:
z = b0 + b1X1 + b2X2 + ... + bnXn
p = predicted probability`,
            "text",
            "Sigmoid function"
        ),

        heading("Binary Classification"),

        text(
            "In binary classification, logistic regression predicts one of two possible classes. For example, if predicted probability is greater than or equal to 0.5, classify as 1; otherwise classify as 0."
        ),

        table(
            ["Problem", "Classes"],
            [
                ["Email spam detection", "Spam / Not spam"],
                ["Disease prediction", "Disease / No disease"],
                ["Student result", "Pass / Fail"],
                ["Customer churn", "Churn / No churn"],
            ]
        ),

        heading("Logistic Regression with scikit-learn"),

        code(
            `import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, confusion_matrix, classification_report

df = pd.DataFrame({
    "hours": [1, 2, 3, 4, 5, 6, 7, 8],
    "attendance": [40, 50, 55, 60, 70, 75, 80, 90],
    "passed": [0, 0, 0, 1, 1, 1, 1, 1]
})

X = df[["hours", "attendance"]]
y = df["passed"]

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.25, random_state=42
)

model = LogisticRegression()
model.fit(X_train, y_train)

y_pred = model.predict(X_test)

print("Accuracy:", accuracy_score(y_test, y_pred))
print(confusion_matrix(y_test, y_pred))
print(classification_report(y_test, y_pred))`,
            "python",
            "Logistic regression classification"
        ),

        heading("Classification Metrics"),

        table(
            ["Metric", "Meaning", "Important When"],
            [
                ["Accuracy", "Total correct predictions divided by total predictions", "Classes are balanced"],
                ["Precision", "Correct positive predictions divided by predicted positives", "False positives are costly"],
                ["Recall", "Correct positive predictions divided by actual positives", "False negatives are costly"],
                ["F1-score", "Harmonic mean of precision and recall", "Need balance between precision and recall"],
                ["Confusion Matrix", "Table of actual vs predicted classes", "Detailed error analysis"],
            ]
        ),

        heading("Confusion Matrix"),

        table(
            ["Term", "Meaning"],
            [
                ["True Positive (TP)", "Actual positive and predicted positive"],
                ["True Negative (TN)", "Actual negative and predicted negative"],
                ["False Positive (FP)", "Actual negative but predicted positive"],
                ["False Negative (FN)", "Actual positive but predicted negative"],
            ]
        ),

        heading("Multiclass Logistic Regression"),

        text(
            "Logistic regression can also be extended for multiclass classification using strategies such as one-vs-rest or multinomial logistic regression. Example: classifying iris flowers into three species."
        ),

        heading("Advantages and Limitations"),

        table(
            ["Advantages", "Limitations"],
            [
                ["Simple and interpretable", "Works best when classes are linearly separable"],
                ["Outputs probabilities", "May underperform on complex non-linear data"],
                ["Fast to train", "Sensitive to feature scaling in some cases"],
                ["Good baseline classifier", "Can be affected by outliers"],
            ]
        ),

        note(
            "For imbalanced datasets, accuracy can be misleading. If only 1% of patients have a disease, a model predicting 'no disease' for everyone can get 99% accuracy but is useless. Use precision, recall and F1-score.",
            "warning",
            "Metric Selection"
        ),

        keyPoints([
            "Logistic regression is used for classification, not normal regression.",
            "It uses the sigmoid function to output probabilities between 0 and 1.",
            "Binary logistic regression predicts two classes.",
            "Important metrics include accuracy, precision, recall, F1-score and confusion matrix.",
            "It is simple, fast and interpretable but may struggle with complex non-linear boundaries.",
        ]),
    ],

    {
        summary:
            "Learn logistic regression, sigmoid function, binary classification, confusion matrix and classification metrics.",
        minutes: 13,
        tags: ["machine-learning", "supervised", "logistic-regression", "classification"],

        mcqs: [
            mcq(
                "Logistic regression is mainly used for:",
                ["Classification", "Clustering", "Image compression", "Database backup"],
                0,
                "Logistic regression predicts class probabilities and is used for classification."
            ),
            mcq(
                "The sigmoid function outputs values between:",
                ["-1 and 1", "0 and 1", "0 and 100", "-100 and 100"],
                1,
                "Sigmoid maps any real number to a probability between 0 and 1."
            ),
            mcq(
                "In binary classification, there are:",
                ["Two classes", "No classes", "Only continuous outputs", "Infinite labels always"],
                0,
                "Binary classification predicts one of two classes."
            ),
            mcq(
                "A false positive means:",
                ["Actual positive and predicted positive", "Actual negative but predicted positive", "Actual positive but predicted negative", "Actual negative and predicted negative"],
                1,
                "False positive means the model incorrectly predicted the positive class."
            ),
            mcq(
                "Recall is especially important when:",
                ["False negatives are costly", "File size matters", "No target variable exists", "All values are strings"],
                0,
                "Recall is important when missing actual positives is dangerous, such as disease detection."
            ),
            mcq(
                "Accuracy may be misleading when:",
                ["Dataset is imbalanced", "Dataset has exactly two rows", "Python is used", "The model has coefficients"],
                0,
                "In imbalanced datasets, high accuracy can hide poor minority-class performance."
            ),
        ],

        questions: [
            qa(
                "What is logistic regression? Why is it used for classification?",
                "Logistic regression is a supervised learning algorithm used mainly for classification. It predicts the probability that an input belongs to a class. It first calculates a linear combination of input features and then applies the sigmoid function, which maps the result to a value between 0 and 1. This value can be interpreted as probability. For binary classification, if the probability is above a threshold such as 0.5, the model predicts class 1; otherwise it predicts class 0. It is used for problems such as spam detection, pass/fail prediction and disease prediction.",
                5
            ),
            qa(
                "Explain the confusion matrix terms TP, TN, FP and FN.",
                "A confusion matrix compares actual classes with predicted classes. True Positive (TP) means the actual class is positive and the model also predicted positive. True Negative (TN) means the actual class is negative and the model predicted negative. False Positive (FP) means the actual class is negative but the model incorrectly predicted positive. False Negative (FN) means the actual class is positive but the model incorrectly predicted negative. These values are used to calculate accuracy, precision, recall and F1-score. They help understand what type of mistakes the model is making.",
                5
            ),
            qa(
                "Differentiate between accuracy, precision, recall and F1-score.",
                "Accuracy is the proportion of total correct predictions among all predictions. It is useful when classes are balanced. Precision measures how many predicted positives are actually positive, so it is important when false positives are costly. Recall measures how many actual positives are correctly detected, so it is important when false negatives are costly, such as disease detection. F1-score is the harmonic mean of precision and recall and is useful when both false positives and false negatives matter. For imbalanced datasets, precision, recall and F1-score are often more informative than accuracy.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — K-Nearest Neighbours and Naive Bayes
========================================================= */

const knnAndNaiveBayes = createTopic(
    "knn-and-naive-bayes",
    "K-Nearest Neighbours and Naive Bayes",

    [
        heading("K-Nearest Neighbours"),

        definition(
            "K-Nearest Neighbours",
            "K-Nearest Neighbours, or KNN, is a supervised learning algorithm that classifies or predicts a value based on the nearest training examples in feature space."
        ),

        text(
            "KNN is called a lazy learning algorithm because it does not build an explicit model during training. It stores the training data and makes decisions at prediction time by looking at nearby examples."
        ),

        heading("How KNN Works"),

        steps([
            "Choose the value of K, such as 3 or 5.",
            "Calculate the distance between the new data point and all training points.",
            "Select the K nearest neighbours.",
            "For classification, choose the majority class among neighbours.",
            "For regression, take the average value of neighbours.",
        ]),

        heading("Common Distance Measures"),

        table(
            ["Distance", "Formula / Idea", "Use"],
            [
                ["Euclidean Distance", "Straight-line distance", "Most common for numeric data"],
                ["Manhattan Distance", "Sum of absolute differences", "Grid-like movement"],
                ["Minkowski Distance", "Generalised distance metric", "Flexible distance"],
                ["Hamming Distance", "Number of different positions", "Categorical/binary strings"],
            ]
        ),

        heading("KNN with scikit-learn"),

        code(
            `from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.neighbors import KNeighborsClassifier
from sklearn.pipeline import Pipeline
from sklearn.metrics import accuracy_score

iris = load_iris()
X = iris.data
y = iris.target

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

model = Pipeline([
    ("scaler", StandardScaler()),
    ("knn", KNeighborsClassifier(n_neighbors=3))
])

model.fit(X_train, y_train)
y_pred = model.predict(X_test)

print("Accuracy:", accuracy_score(y_test, y_pred))`,
            "python",
            "KNN classifier"
        ),

        heading("Choosing K"),

        table(
            ["K Value", "Effect"],
            [
                ["Very small K", "Sensitive to noise; may overfit"],
                ["Very large K", "Too smooth; may underfit"],
                ["Odd K for binary classification", "Helps avoid ties"],
                ["Best K", "Usually selected using validation or cross-validation"],
            ]
        ),

        note(
            "KNN is sensitive to feature scale. If salary ranges from 20,000 to 1,00,000 and age ranges from 18 to 60, salary may dominate distance. Use scaling before KNN.",
            "warning",
            "Scaling Required"
        ),

        heading("Naive Bayes"),

        definition(
            "Naive Bayes",
            "Naive Bayes is a probabilistic supervised learning algorithm based on Bayes' theorem. It assumes that features are conditionally independent given the class."
        ),

        text(
            "The word 'naive' means the algorithm makes a simplifying assumption that features are independent of each other. This assumption is often not fully true, but Naive Bayes can still work very well in practice, especially for text classification."
        ),

        heading("Bayes' Theorem"),

        code(
            `P(A|B) = P(B|A) × P(A) / P(B)

For classification:
P(Class|Features) ∝ P(Features|Class) × P(Class)`,
            "text",
            "Bayes theorem"
        ),

        heading("Types of Naive Bayes"),

        table(
            ["Type", "Best For", "Example"],
            [
                ["Gaussian Naive Bayes", "Continuous numeric features", "Iris classification"],
                ["Multinomial Naive Bayes", "Count-based features", "Text classification using word counts"],
                ["Bernoulli Naive Bayes", "Binary features", "Word present/absent"],
            ]
        ),

        heading("Naive Bayes with scikit-learn"),

        code(
            `from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.naive_bayes import GaussianNB
from sklearn.metrics import accuracy_score

iris = load_iris()
X = iris.data
y = iris.target

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

model = GaussianNB()
model.fit(X_train, y_train)

y_pred = model.predict(X_test)
print("Accuracy:", accuracy_score(y_test, y_pred))`,
            "python",
            "Gaussian Naive Bayes"
        ),

        heading("KNN vs Naive Bayes"),

        table(
            ["Aspect", "KNN", "Naive Bayes"],
            [
                ["Learning type", "Lazy learning", "Probabilistic learning"],
                ["Training speed", "Very fast", "Fast"],
                ["Prediction speed", "Can be slow for large data", "Very fast"],
                ["Scaling needed", "Yes, usually", "Not always"],
                ["Works well for", "Small/medium numeric datasets", "Text classification, spam filtering"],
                ["Main assumption", "Nearby points are similar", "Features are conditionally independent"],
            ]
        ),

        keyPoints([
            "KNN predicts using the majority class or average of nearest neighbours.",
            "KNN is simple but sensitive to feature scaling and choice of K.",
            "Small K can overfit; large K can underfit.",
            "Naive Bayes is based on Bayes' theorem.",
            "Naive Bayes assumes conditional independence between features.",
            "Naive Bayes is commonly used for spam and text classification.",
        ]),
    ],

    {
        summary:
            "Learn KNN, distance measures, choosing K, Naive Bayes, Bayes theorem and their scikit-learn implementations.",
        minutes: 14,
        tags: ["machine-learning", "knn", "naive-bayes", "classification", "supervised"],

        mcqs: [
            mcq(
                "KNN classifies a new point based on:",
                ["Nearest training examples", "Random labels", "Only target mean", "Database password"],
                0,
                "KNN uses the classes or values of the nearest neighbours."
            ),
            mcq(
                "KNN is called lazy because:",
                ["It stores data and works mainly at prediction time", "It cannot predict", "It deletes training data", "It is used only for images"],
                0,
                "KNN does not build a strong explicit model during training."
            ),
            mcq(
                "KNN is sensitive to:",
                ["Feature scaling", "HTML tags", "Cookie names", "File extension only"],
                0,
                "Distances are affected by the scale of features."
            ),
            mcq(
                "Naive Bayes is based on:",
                ["Bayes' theorem", "Gradient boosting only", "K-Means", "Linear equation only"],
                0,
                "Naive Bayes applies Bayes' theorem for classification."
            ),
            mcq(
                "Multinomial Naive Bayes is commonly used for:",
                ["Text classification", "Image resizing", "Sorting arrays", "Password hashing"],
                0,
                "It works well with count-based text features."
            ),
            mcq(
                "The naive assumption in Naive Bayes is that:",
                ["Features are conditionally independent", "There are no features", "All labels are continuous", "Training data is deleted"],
                0,
                "Naive Bayes assumes features are independent given the class."
            ),
        ],

        questions: [
            qa(
                "Explain the K-Nearest Neighbours algorithm.",
                "K-Nearest Neighbours is a supervised learning algorithm used for classification and regression. It stores the training data and, for a new point, calculates distances from that point to all training examples. It then selects the K closest examples. For classification, the predicted class is the majority class among these neighbours. For regression, the predicted value is usually the average of neighbour values. KNN is simple and easy to understand, but prediction can be slow for large datasets. It is sensitive to feature scaling because distance calculations can be dominated by features with large numeric ranges.",
                5
            ),
            qa(
                "How do you choose the value of K in KNN? What happens with small and large K?",
                "The value of K controls how many neighbours are considered for prediction. A very small K, such as K = 1, makes the model highly sensitive to noise and may cause overfitting because each prediction depends on a very small local region. A very large K makes the decision boundary too smooth and may cause underfitting because local patterns are ignored. For binary classification, odd values of K are often used to reduce ties. The best K is usually chosen using validation data or cross-validation by testing several values and selecting the one with best performance.",
                5
            ),
            qa(
                "Explain Naive Bayes and its common types.",
                "Naive Bayes is a probabilistic supervised learning algorithm based on Bayes' theorem. It calculates the probability of each class given the input features and predicts the class with the highest probability. It is called naive because it assumes that features are conditionally independent given the class. Common types include Gaussian Naive Bayes for continuous numeric features, Multinomial Naive Bayes for count-based features such as word counts, and Bernoulli Naive Bayes for binary features such as word present or absent. Naive Bayes is fast, simple and widely used in spam detection and text classification.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — Decision Trees and Random Forest
========================================================= */

const decisionTreesAndRandomForest = createTopic(
    "decision-trees-and-random-forest",
    "Decision Trees and Random Forest",

    [
        heading("Decision Tree"),

        definition(
            "Decision Tree",
            "A Decision Tree is a supervised learning algorithm that makes predictions by splitting data into branches based on feature conditions, forming a tree-like structure."
        ),

        text(
            "Decision trees can be used for both classification and regression. They are easy to understand because their logic resembles human decision-making: if condition is true, go left; otherwise go right."
        ),

        heading("Decision Tree Terminology"),

        table(
            ["Term", "Meaning"],
            [
                ["Root Node", "Top node containing the first split"],
                ["Internal Node", "A node that tests a feature condition"],
                ["Branch", "Result of a condition"],
                ["Leaf Node", "Final prediction node"],
                ["Splitting", "Dividing data based on a feature"],
                ["Pruning", "Removing unnecessary branches to reduce overfitting"],
            ]
        ),

        heading("Splitting Criteria"),

        definition(
            "Gini Index",
            "Gini Index measures impurity in a node. Lower Gini means the node contains mostly one class."
        ),

        definition(
            "Entropy",
            "Entropy measures disorder or impurity in a node. Lower entropy means the node is more pure."
        ),

        definition(
            "Information Gain",
            "Information Gain measures the reduction in entropy after splitting a dataset based on a feature."
        ),

        table(
            ["Criterion", "Used For", "Goal"],
            [
                ["Gini Index", "Classification trees", "Minimise impurity"],
                ["Entropy", "Classification trees", "Maximise information gain"],
                ["MSE / MAE", "Regression trees", "Minimise prediction error"],
            ]
        ),

        heading("Decision Tree with scikit-learn"),

        code(
            `from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import accuracy_score

iris = load_iris()
X = iris.data
y = iris.target

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

model = DecisionTreeClassifier(criterion="gini", max_depth=3, random_state=42)
model.fit(X_train, y_train)

y_pred = model.predict(X_test)
print("Accuracy:", accuracy_score(y_test, y_pred))`,
            "python",
            "Decision tree classifier"
        ),

        heading("Advantages and Limitations of Decision Trees"),

        table(
            ["Advantages", "Limitations"],
            [
                ["Easy to understand and visualise", "Can overfit easily"],
                ["Handles numerical and categorical features", "Small data changes can change tree structure"],
                ["Little feature scaling required", "Greedy splitting may not find global best tree"],
                ["Can model non-linear relationships", "Deep trees may be complex and unstable"],
            ]
        ),

        heading("Overfitting Control in Decision Trees"),

        list([
            "Limit max_depth.",
            "Set min_samples_split.",
            "Set min_samples_leaf.",
            "Use pruning.",
            "Use ensemble methods such as Random Forest.",
        ], true),

        heading("Random Forest"),

        definition(
            "Random Forest",
            "Random Forest is an ensemble learning algorithm that builds many decision trees and combines their predictions to improve accuracy and reduce overfitting."
        ),

        definition(
            "Ensemble Learning",
            "Ensemble learning combines multiple models to produce a stronger model than a single model."
        ),

        text(
            "Random Forest trains many decision trees using bootstrap samples of the data and random subsets of features. For classification, it uses majority voting. For regression, it averages predictions."
        ),

        heading("Bagging"),

        definition(
            "Bagging",
            "Bagging, or Bootstrap Aggregating, trains multiple models on different random samples of the dataset and combines their outputs to reduce variance."
        ),

        heading("Random Forest with scikit-learn"),

        code(
            `from sklearn.ensemble import RandomForestClassifier
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

iris = load_iris()
X = iris.data
y = iris.target

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

model = RandomForestClassifier(
    n_estimators=100,
    max_depth=None,
    random_state=42
)

model.fit(X_train, y_train)
y_pred = model.predict(X_test)

print("Accuracy:", accuracy_score(y_test, y_pred))`,
            "python",
            "Random forest classifier"
        ),

        heading("Decision Tree vs Random Forest"),

        table(
            ["Aspect", "Decision Tree", "Random Forest"],
            [
                ["Number of trees", "One", "Many"],
                ["Interpretability", "High", "Lower"],
                ["Overfitting risk", "High if deep", "Lower"],
                ["Accuracy", "Moderate", "Usually higher"],
                ["Training time", "Fast", "Slower"],
                ["Prediction method", "Single tree output", "Voting or averaging"],
            ]
        ),

        note(
            "Random Forest usually performs better than a single decision tree, but it is less interpretable. If explanation is important, a shallow decision tree may be preferred.",
            "tip",
            "Model Choice"
        ),

        keyPoints([
            "Decision trees split data using feature conditions.",
            "Gini index and entropy measure impurity for classification trees.",
            "Decision trees are interpretable but can overfit.",
            "Random Forest combines many decision trees using bagging.",
            "Random Forest reduces variance and usually improves performance.",
            "Feature scaling is usually not required for tree-based models.",
        ]),
    ],

    {
        summary:
            "Learn decision tree structure, Gini, entropy, information gain, pruning, Random Forest and ensemble learning.",
        minutes: 14,
        tags: ["machine-learning", "decision-tree", "random-forest", "ensemble", "supervised"],

        mcqs: [
            mcq(
                "A decision tree makes predictions using:",
                ["Feature-based splits and branches", "Only random guessing", "HTML tags", "Password hashes"],
                0,
                "Decision trees use conditions on features to reach a leaf prediction."
            ),
            mcq(
                "The final prediction node in a decision tree is called:",
                ["Root node", "Leaf node", "Database node", "Hidden node only"],
                1,
                "Leaf nodes contain final class or value predictions."
            ),
            mcq(
                "Gini index measures:",
                ["Node impurity", "File size", "Network speed", "Number of CPUs"],
                0,
                "Gini index measures how mixed the classes are in a node."
            ),
            mcq(
                "Pruning is used to:",
                ["Reduce overfitting by removing unnecessary branches", "Increase duplicate rows", "Encode text", "Scale values to 0"],
                0,
                "Pruning simplifies a tree to reduce overfitting."
            ),
            mcq(
                "Random Forest is an example of:",
                ["Ensemble learning", "Unsupervised clustering only", "HTML rendering", "Database normalisation"],
                0,
                "Random Forest combines many decision trees."
            ),
            mcq(
                "For classification, Random Forest usually combines trees by:",
                ["Majority voting", "Deleting all labels", "Taking only first row", "Sorting columns alphabetically"],
                0,
                "Classification forests use voting among trees."
            ),
        ],

        questions: [
            qa(
                "Explain the structure and working of a decision tree.",
                "A decision tree is a supervised learning algorithm that predicts by splitting data based on feature conditions. The top node is called the root node. Internal nodes test conditions such as marks <= 50 or age > 30. Branches represent the outcomes of those tests. Leaf nodes contain the final prediction, such as a class label or numeric value. During training, the algorithm selects splits that best separate the data according to criteria such as Gini index, entropy or information gain. During prediction, a new example follows the conditions from the root to a leaf, and the leaf gives the prediction.",
                5
            ),
            qa(
                "What are Gini index, entropy and information gain?",
                "Gini index and entropy are measures of impurity used in decision tree classification. A pure node contains mostly one class and has low impurity. Gini index measures the probability of incorrect classification if a random label is assigned according to class distribution. Entropy measures disorder or uncertainty in a node. Information gain measures how much entropy is reduced after splitting the data on a feature. A feature with high information gain creates purer child nodes and is preferred for splitting. These criteria help the decision tree choose useful questions at each node.",
                5
            ),
            qa(
                "Differentiate between decision tree and Random Forest.",
                "A decision tree is a single tree that splits data into branches and produces predictions at leaf nodes. It is easy to understand and visualise but can overfit if it grows too deep. Random Forest is an ensemble of many decision trees. It trains trees on different bootstrap samples and random subsets of features. For classification, it combines predictions using majority voting; for regression, it averages predictions. Random Forest usually gives better accuracy and lower overfitting than a single tree, but it is slower and less interpretable. Decision trees are preferred for explanation; Random Forest is preferred for performance.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 5 — Support Vector Machines and Model Tuning
========================================================= */

const supportVectorMachinesAndModelTuning = createTopic(
    "support-vector-machines-and-model-tuning",
    "Support Vector Machines and Model Tuning",

    [
        heading("Support Vector Machine"),

        definition(
            "Support Vector Machine",
            "Support Vector Machine, or SVM, is a supervised learning algorithm that finds the best decision boundary, called a hyperplane, to separate classes with the maximum margin."
        ),

        text(
            "SVM is mainly used for classification, but it can also be used for regression through Support Vector Regression. It works well for high-dimensional data and can handle non-linear boundaries using kernels."
        ),

        heading("Important SVM Terms"),

        table(
            ["Term", "Meaning"],
            [
                ["Hyperplane", "Decision boundary that separates classes"],
                ["Margin", "Distance between hyperplane and nearest data points"],
                ["Support Vectors", "Nearest data points that influence the hyperplane"],
                ["Kernel", "Function that transforms data to make separation easier"],
                ["C parameter", "Controls trade-off between margin size and classification errors"],
                ["Gamma", "Controls influence of individual training points in RBF kernel"],
            ]
        ),

        heading("Linear SVM Idea"),

        text(
            "In two-dimensional data, SVM tries to draw a line that separates classes. In higher-dimensional data, this boundary is called a hyperplane. The best hyperplane is the one with the maximum margin."
        ),

        heading("Kernel Trick"),

        definition(
            "Kernel Trick",
            "The kernel trick allows SVM to learn non-linear decision boundaries by computing relationships in a higher-dimensional space without explicitly transforming the data."
        ),

        table(
            ["Kernel", "Use"],
            [
                ["linear", "When data is approximately linearly separable"],
                ["poly", "Polynomial decision boundary"],
                ["rbf", "Radial Basis Function; common for non-linear data"],
                ["sigmoid", "Neural-network-like kernel, less commonly used"],
            ]
        ),

        heading("SVM with scikit-learn"),

        code(
            `from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.svm import SVC
from sklearn.metrics import accuracy_score

iris = load_iris()
X = iris.data
y = iris.target

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

model = Pipeline([
    ("scaler", StandardScaler()),
    ("svm", SVC(kernel="rbf", C=1.0, gamma="scale"))
])

model.fit(X_train, y_train)
y_pred = model.predict(X_test)

print("Accuracy:", accuracy_score(y_test, y_pred))`,
            "python",
            "SVM classifier"
        ),

        note(
            "SVM is sensitive to feature scaling. Always scale features before using SVM, especially with RBF or polynomial kernels.",
            "warning",
            "Scaling Required"
        ),

        heading("Advantages and Limitations of SVM"),

        table(
            ["Advantages", "Limitations"],
            [
                ["Works well in high-dimensional spaces", "Can be slow on very large datasets"],
                ["Effective with clear margins", "Requires scaling"],
                ["Kernels handle non-linear patterns", "Choosing kernel and parameters can be difficult"],
                ["Memory efficient using support vectors", "Less interpretable than simple models"],
            ]
        ),

        heading("Model Tuning"),

        definition(
            "Hyperparameter",
            "A hyperparameter is a setting chosen before training, such as K in KNN, max_depth in decision trees, n_estimators in Random Forest or C in SVM."
        ),

        text(
            "Model tuning means selecting good hyperparameter values to improve model performance. Unlike model parameters learned during training, hyperparameters are set by the user."
        ),

        heading("Parameters vs Hyperparameters"),

        table(
            ["Aspect", "Parameter", "Hyperparameter"],
            [
                ["Meaning", "Learned from data during training", "Set before training"],
                ["Example", "Linear regression coefficients", "K in KNN, max_depth, C"],
                ["Who sets it?", "Algorithm learns it", "User/search method chooses it"],
                ["Changed by fit()?", "Yes", "No, unless tuning/search is used"],
            ]
        ),

        heading("GridSearchCV"),

        definition(
            "GridSearchCV",
            "GridSearchCV is a scikit-learn tool that tests all combinations of specified hyperparameter values using cross-validation and selects the best combination."
        ),

        code(
            `from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split, GridSearchCV
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.svm import SVC

iris = load_iris()
X = iris.data
y = iris.target

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

pipe = Pipeline([
    ("scaler", StandardScaler()),
    ("svm", SVC())
])

param_grid = {
    "svm__kernel": ["linear", "rbf"],
    "svm__C": [0.1, 1, 10],
    "svm__gamma": ["scale", "auto"]
}

search = GridSearchCV(pipe, param_grid, cv=5, scoring="accuracy")
search.fit(X_train, y_train)

print("Best parameters:", search.best_params_)
print("Best CV score:", search.best_score_)
print("Test score:", search.score(X_test, y_test))`,
            "python",
            "Hyperparameter tuning with GridSearchCV"
        ),

        heading("RandomizedSearchCV"),

        text(
            "RandomizedSearchCV tests a fixed number of random hyperparameter combinations instead of trying every combination. It is useful when the search space is large."
        ),

        heading("Cross-Validation in Tuning"),

        definition(
            "Cross-Validation",
            "Cross-validation splits data into multiple folds and trains/tests the model multiple times to get a more reliable estimate of performance."
        ),

        steps([
            "Choose model and hyperparameter search space.",
            "Split training data into cross-validation folds.",
            "Train and validate model for each hyperparameter combination.",
            "Select the best hyperparameters based on validation score.",
            "Evaluate the final tuned model on the separate test set.",
        ]),

        note(
            "Do not tune hyperparameters using the test set repeatedly. The test set should be used only for final evaluation. Use cross-validation on training data for tuning.",
            "warning",
            "Test Set Misuse"
        ),

        keyPoints([
            "SVM finds a maximum-margin hyperplane for classification.",
            "Support vectors are the closest points that influence the decision boundary.",
            "Kernels allow SVM to handle non-linear data.",
            "SVM usually requires feature scaling.",
            "Hyperparameters are settings chosen before training.",
            "GridSearchCV and RandomizedSearchCV are used for hyperparameter tuning.",
            "Use cross-validation for tuning and keep the test set for final evaluation.",
        ]),
    ],

    {
        summary:
            "Learn SVM concepts, kernels, support vectors, hyperparameters, GridSearchCV, RandomizedSearchCV and cross-validation for tuning.",
        minutes: 14,
        tags: ["machine-learning", "svm", "model-tuning", "gridsearchcv", "cross-validation"],

        mcqs: [
            mcq(
                "SVM tries to find:",
                ["Maximum-margin hyperplane", "Only missing values", "Database schema", "HTML layout"],
                0,
                "SVM finds the decision boundary with maximum margin between classes."
            ),
            mcq(
                "Support vectors are:",
                ["Nearest points that influence the hyperplane", "All deleted rows", "Only target labels", "Python packages"],
                0,
                "Support vectors are critical boundary points near the hyperplane."
            ),
            mcq(
                "The kernel trick is used to:",
                ["Handle non-linear separation", "Remove all features", "Create CSV files", "Hash passwords"],
                0,
                "Kernels help SVM separate non-linear data in transformed feature space."
            ),
            mcq(
                "SVM generally requires:",
                ["Feature scaling", "No training data", "Only text files", "No labels"],
                0,
                "SVM is sensitive to feature scale."
            ),
            mcq(
                "A hyperparameter is:",
                ["A setting chosen before training", "A value always learned automatically", "Only a target label", "A missing value"],
                0,
                "Hyperparameters such as C, K and max_depth are selected before training."
            ),
            mcq(
                "GridSearchCV is used for:",
                ["Testing combinations of hyperparameters using cross-validation", "Drawing only histograms", "Deleting rows", "Reading HTML"],
                0,
                "GridSearchCV searches over specified hyperparameter combinations."
            ),
        ],

        questions: [
            qa(
                "Explain Support Vector Machine and its important terms.",
                "Support Vector Machine is a supervised learning algorithm mainly used for classification. It tries to find the best decision boundary, called a hyperplane, that separates classes with the maximum margin. The margin is the distance between the hyperplane and the nearest data points. These nearest data points are called support vectors because they influence the position of the hyperplane. SVM can use kernels such as linear, polynomial and RBF to handle non-linear data. The C hyperparameter controls the trade-off between a wide margin and classification errors. SVM works well in high-dimensional spaces but usually requires feature scaling.",
                5
            ),
            qa(
                "What is the kernel trick in SVM? Name common kernels.",
                "The kernel trick allows SVM to learn non-linear decision boundaries without explicitly transforming data into a higher-dimensional space. Instead of calculating transformed coordinates directly, the kernel function computes similarity between points as if they were in that higher-dimensional space. This makes SVM powerful for non-linear classification. Common kernels include the linear kernel for linearly separable data, polynomial kernel for polynomial boundaries, RBF kernel for flexible non-linear boundaries, and sigmoid kernel. RBF is commonly used when the relationship between features and classes is complex. The choice of kernel affects model performance and must often be tuned.",
                5
            ),
            qa(
                "Explain hyperparameter tuning using GridSearchCV.",
                "Hyperparameter tuning is the process of selecting good values for model settings chosen before training, such as K in KNN, max_depth in decision trees, n_estimators in Random Forest or C and gamma in SVM. GridSearchCV tests all combinations of specified hyperparameter values. For each combination, it uses cross-validation on the training data and calculates a validation score. The combination with the best average score is selected. After tuning, the final model is evaluated on the separate test set. The test set should not be used repeatedly for tuning because that causes overly optimistic performance estimates.",
                5
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit3Topics = [
    linearRegression,
    logisticRegression,
    knnAndNaiveBayes,
    decisionTreesAndRandomForest,
    supportVectorMachinesAndModelTuning,
];