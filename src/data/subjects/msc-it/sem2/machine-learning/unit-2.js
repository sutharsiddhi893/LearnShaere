/* =========================================================
   MSc-IT • SEM 2 • Machine Learning
   UNIT 2 — Data Preprocessing Techniques
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
   TOPIC 1 — Data Cleaning and Missing Value Handling
========================================================= */

const dataCleaningAndMissingValues = createTopic(
    "data-cleaning-and-missing-value-handling",
    "Data Cleaning and Missing Value Handling",

    [
        definition(
            "Data Cleaning",
            "Data cleaning is the process of detecting and correcting inaccurate, incomplete, inconsistent, duplicated or irrelevant data before analysis or model training."
        ),

        text(
            "Real-world datasets are rarely perfect. They may contain missing values, spelling mistakes, duplicate rows, incorrect data types, impossible values and inconsistent formats. If such data is directly given to a Machine Learning model, the model may learn wrong patterns and produce unreliable predictions."
        ),

        heading("Common Data Quality Problems"),

        table(
            ["Problem", "Meaning", "Example"],
            [
                ["Missing values", "Some values are not available", "Age column has NaN"],
                ["Duplicate records", "Same record appears more than once", "Same student entered twice"],
                ["Wrong data type", "Column stored in incorrect format", "Marks stored as text"],
                ["Inconsistent format", "Different representations of same value", "Male, M, male"],
                ["Outliers", "Extreme values far from normal range", "Age = 250"],
                ["Invalid values", "Values that violate rules", "Marks = 140 out of 100"],
            ]
        ),

        heading("Checking Missing Values in pandas"),

        code(
            `import pandas as pd

df = pd.DataFrame({
    "name": ["Asha", "Ravi", "Meena", "John"],
    "age": [20, None, 22, None],
    "marks": [85, 70, None, 90]
})

print(df.isnull())
print(df.isnull().sum())`,
            "python",
            "Detecting missing values"
        ),

        output(`    name    age  marks
0  False  False  False
1  False   True  False
2  False  False   True
3  False   True  False

name     0
age      2
marks    1
dtype: int64`),

        heading("Methods for Handling Missing Values"),

        table(
            ["Method", "Description", "Best Used When"],
            [
                ["Delete rows", "Remove records with missing values", "Very few rows are missing"],
                ["Delete columns", "Remove feature with too many missing values", "Column is mostly empty or not useful"],
                ["Mean imputation", "Fill with average value", "Numeric data without strong outliers"],
                ["Median imputation", "Fill with middle value", "Numeric data with outliers"],
                ["Mode imputation", "Fill with most frequent value", "Categorical data"],
                ["Constant value", "Fill with a fixed value like Unknown or 0", "Missing itself has meaning"],
            ]
        ),

        code(
            `import pandas as pd

df = pd.DataFrame({
    "age": [20, None, 22, 25, None],
    "city": ["Pune", "Mumbai", None, "Pune", "Delhi"],
    "marks": [80, 75, None, 90, 60]
})

df["age"] = df["age"].fillna(df["age"].median())
df["marks"] = df["marks"].fillna(df["marks"].mean())
df["city"] = df["city"].fillna(df["city"].mode()[0])

print(df)`,
            "python",
            "Filling missing values"
        ),

        heading("Using scikit-learn SimpleImputer"),

        code(
            `from sklearn.impute import SimpleImputer
import pandas as pd

df = pd.DataFrame({
    "age": [20, None, 22, 25],
    "marks": [80, 75, None, 90]
})

imputer = SimpleImputer(strategy="median")
filled = imputer.fit_transform(df)

print(filled)`,
            "python",
            "SimpleImputer"
        ),

        heading("Handling Duplicate Rows"),

        code(
            `import pandas as pd

df = pd.DataFrame({
    "name": ["Asha", "Ravi", "Asha"],
    "marks": [85, 70, 85]
})

print(df.duplicated())
df = df.drop_duplicates()

print(df)`,
            "python",
            "Removing duplicates"
        ),

        heading("Correcting Data Types"),

        code(
            `import pandas as pd

df = pd.DataFrame({
    "marks": ["80", "75", "90"],
    "date": ["2025-01-10", "2025-01-11", "2025-01-12"]
})

df["marks"] = pd.to_numeric(df["marks"])
df["date"] = pd.to_datetime(df["date"])

print(df.dtypes)`,
            "python",
            "Converting data types"
        ),

        note(
            "Never fill missing values using information from the test set. If you are using an imputer, fit it only on training data and then transform both training and test data. Otherwise, data leakage can occur.",
            "warning",
            "Data Leakage"
        ),

        keyPoints([
            "Data cleaning improves data quality before model training.",
            "Common issues include missing values, duplicates, wrong data types and invalid values.",
            "Missing numeric values can be filled using mean or median.",
            "Missing categorical values are often filled using mode or 'Unknown'.",
            "Duplicate rows should be detected and removed when they are not meaningful.",
            "Preprocessing tools must be fitted on training data only.",
        ]),
    ],

    {
        summary:
            "Learn how to detect and handle missing values, duplicates, invalid values and wrong data types using pandas and scikit-learn.",
        minutes: 13,
        tags: ["machine-learning", "data-cleaning", "missing-values", "pandas", "imputation"],

        mcqs: [
            mcq(
                "Data cleaning is performed mainly to:",
                ["Increase noise", "Improve quality of raw data before analysis", "Delete all features", "Avoid using Python"],
                1,
                "Data cleaning corrects incomplete, inconsistent or incorrect data before analysis or training."
            ),
            mcq(
                "Which pandas function checks missing values?",
                ["df.isnull()", "df.unique()", "df.train()", "df.encode()"],
                0,
                "df.isnull() returns True for missing values."
            ),
            mcq(
                "Median imputation is preferred over mean when:",
                ["Data contains strong outliers", "Data is only text", "There are no missing values", "The feature is a password"],
                0,
                "Median is less affected by extreme values than mean."
            ),
            mcq(
                "Mode imputation is commonly used for:",
                ["Categorical columns", "Image pixels only", "Neural network weights", "Deleting rows"],
                0,
                "Mode is the most frequent value, useful for categorical data."
            ),
            mcq(
                "drop_duplicates() is used to:",
                ["Remove repeated rows", "Remove all missing columns", "Train a classifier", "Scale data"],
                0,
                "drop_duplicates() removes duplicate records from a DataFrame."
            ),
            mcq(
                "SimpleImputer belongs to:",
                ["matplotlib", "sklearn.impute", "os module", "seaborn"],
                1,
                "SimpleImputer is available in sklearn.impute."
            ),
        ],

        questions: [
            qa(
                "What is data cleaning? Explain common data quality problems.",
                "Data cleaning is the process of identifying and correcting poor-quality data before analysis or Machine Learning. Common problems include missing values, duplicate rows, incorrect data types, inconsistent formats, outliers and invalid values. For example, a marks column may contain blank values, text instead of numbers, duplicate student records or impossible values such as 150 out of 100. These problems can mislead a model and reduce prediction accuracy. Data cleaning improves reliability by filling or removing missing values, correcting formats, removing duplicates and validating values according to business rules.",
                5
            ),
            qa(
                "Explain different techniques for handling missing values.",
                "Missing values can be handled using deletion or imputation. If very few rows have missing values, those rows can be removed. If a column has too many missing values and is not important, the column may be dropped. Numeric missing values can be filled using mean, median or a constant value. Mean is suitable when the data has no strong outliers, while median is better when outliers are present. Categorical values can be filled using mode or a category such as 'Unknown'. In scikit-learn, SimpleImputer can automate these strategies. The imputer should be fitted only on training data to prevent data leakage.",
                5
            ),
            qa(
                "Why should preprocessing be fitted only on training data?",
                "Preprocessing should be fitted only on training data because the test set must represent unseen future data. If we calculate mean, median, scaling parameters or category mappings using the full dataset before splitting, information from the test set indirectly enters the training process. This is called data leakage. It gives overly optimistic test performance because the model has indirectly seen information about the test data. The correct approach is to split data first, fit preprocessing tools such as imputers and scalers on X_train, then transform both X_train and X_test using those fitted tools.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — Exploratory Data Analysis and Data Visualisation
========================================================= */

const exploratoryDataAnalysis = createTopic(
    "exploratory-data-analysis-and-data-visualisation",
    "Exploratory Data Analysis and Data Visualisation",

    [
        definition(
            "Exploratory Data Analysis",
            "Exploratory Data Analysis, or EDA, is the process of understanding a dataset by summarising its structure, distributions, relationships, missing values and unusual patterns before modelling."
        ),

        text(
            "EDA helps answer important questions: How many rows and columns are present? Which columns are numerical or categorical? Are there missing values? Are classes balanced? Which features are correlated? Are there outliers? Good EDA often reveals what preprocessing and modelling steps are required."
        ),

        heading("Basic pandas EDA Commands"),

        table(
            ["Command", "Purpose"],
            [
                ["df.head()", "Shows first five rows"],
                ["df.tail()", "Shows last five rows"],
                ["df.shape", "Returns number of rows and columns"],
                ["df.info()", "Shows column data types and non-null counts"],
                ["df.describe()", "Statistical summary of numeric columns"],
                ["df.isnull().sum()", "Counts missing values per column"],
                ["df['col'].value_counts()", "Counts categories in a column"],
                ["df.corr()", "Computes correlation between numeric columns"],
            ]
        ),

        code(
            `import pandas as pd

df = pd.read_csv("students.csv")

print(df.shape)
print(df.head())
print(df.info())
print(df.describe())
print(df.isnull().sum())`,
            "python",
            "Basic EDA with pandas"
        ),

        heading("Understanding Numerical Columns"),

        text(
            "Numerical columns can be summarised using mean, median, minimum, maximum, standard deviation and percentiles. These statistics help detect scale differences, skewness and possible outliers."
        ),

        code(
            `print(df["marks"].mean())
print(df["marks"].median())
print(df["marks"].min())
print(df["marks"].max())
print(df["marks"].std())`,
            "python",
            "Numerical summary"
        ),

        heading("Understanding Categorical Columns"),

        code(
            `print(df["city"].value_counts())
print(df["department"].nunique())
print(df["department"].unique())`,
            "python",
            "Categorical summary"
        ),

        heading("Common Visualisations"),

        table(
            ["Plot", "Purpose", "Example Use"],
            [
                ["Histogram", "Shows distribution of one numeric feature", "Distribution of age"],
                ["Box plot", "Shows spread and outliers", "Outliers in salary"],
                ["Bar chart", "Compares category counts", "Students per city"],
                ["Scatter plot", "Shows relationship between two numeric variables", "Hours studied vs marks"],
                ["Heatmap", "Shows correlation matrix visually", "Feature correlation"],
                ["Pair plot", "Shows pairwise relationships", "EDA for small numeric dataset"],
            ]
        ),

        heading("Matplotlib and seaborn Examples"),

        code(
            `import matplotlib.pyplot as plt
import seaborn as sns

# Histogram
sns.histplot(df["marks"], kde=True)
plt.title("Distribution of Marks")
plt.show()

# Box plot
sns.boxplot(x=df["marks"])
plt.title("Box Plot of Marks")
plt.show()

# Scatter plot
sns.scatterplot(x="hours_studied", y="marks", data=df)
plt.title("Hours Studied vs Marks")
plt.show()`,
            "python",
            "Visualising data"
        ),

        heading("Correlation Heatmap"),

        code(
            `import seaborn as sns
import matplotlib.pyplot as plt

corr = df.corr(numeric_only=True)

sns.heatmap(corr, annot=True, cmap="coolwarm")
plt.title("Correlation Heatmap")
plt.show()`,
            "python",
            "Correlation heatmap"
        ),

        definition(
            "Correlation",
            "Correlation measures the strength and direction of a linear relationship between two numeric variables. It ranges from -1 to +1."
        ),

        table(
            ["Correlation Value", "Meaning"],
            [
                ["Close to +1", "Strong positive relationship"],
                ["Close to -1", "Strong negative relationship"],
                ["Close to 0", "Weak or no linear relationship"],
            ]
        ),

        note(
            "Correlation does not prove causation. If two variables move together, it does not always mean one causes the other. Domain knowledge is needed before drawing conclusions.",
            "warning",
            "Correlation vs Causation"
        ),

        keyPoints([
            "EDA helps understand data before preprocessing and modelling.",
            "df.info(), df.describe() and df.isnull().sum() are common first steps.",
            "Histograms show distribution; box plots reveal outliers.",
            "Scatter plots show relationships between two numeric variables.",
            "Correlation heatmaps help detect related numerical features.",
            "Correlation does not imply causation.",
        ]),
    ],

    {
        summary:
            "Learn EDA using pandas summaries and visualisations such as histograms, box plots, scatter plots and correlation heatmaps.",
        minutes: 13,
        tags: ["machine-learning", "eda", "visualisation", "pandas", "seaborn", "matplotlib"],

        mcqs: [
            mcq(
                "EDA stands for:",
                ["Error Detection Algorithm", "Exploratory Data Analysis", "Encoded Data Array", "External Database Access"],
                1,
                "EDA means Exploratory Data Analysis."
            ),
            mcq(
                "df.describe() is mainly used to:",
                ["Delete duplicate records", "Show statistical summary of numeric columns", "Train a model", "Encode labels"],
                1,
                "df.describe() gives count, mean, standard deviation, min, max and percentiles for numeric columns."
            ),
            mcq(
                "A box plot is useful for detecting:",
                ["Only passwords", "Outliers and spread", "Database indexes", "File extensions"],
                1,
                "Box plots show median, quartiles and possible outliers."
            ),
            mcq(
                "A scatter plot is used to show:",
                ["Relationship between two numeric variables", "Only missing values", "Source code errors", "CSV file size"],
                0,
                "Scatter plots show how two numeric variables vary together."
            ),
            mcq(
                "Correlation ranges from:",
                ["0 to 100", "-1 to +1", "1 to 10", "-100 to 0 only"],
                1,
                "Correlation coefficient lies between -1 and +1."
            ),
            mcq(
                "Correlation proves causation:",
                ["Always true", "Always false", "Only in pandas", "Only for strings"],
                1,
                "Correlation indicates association, not necessarily cause and effect."
            ),
        ],

        questions: [
            qa(
                "What is Exploratory Data Analysis? Why is it important?",
                "Exploratory Data Analysis is the process of examining and understanding a dataset before building a Machine Learning model. It includes checking rows and columns, data types, missing values, duplicates, distributions, category counts, outliers and relationships between variables. EDA is important because it reveals data quality issues and guides preprocessing decisions. For example, EDA may show that a feature has many missing values, a target class is imbalanced, or two features are strongly correlated. Without EDA, we may choose wrong preprocessing steps or misinterpret model results.",
                5
            ),
            qa(
                "List common pandas commands used in EDA and explain their use.",
                "Common pandas EDA commands include df.head() to display the first few rows, df.tail() to show the last rows, df.shape to get the number of rows and columns, df.info() to view data types and non-null counts, df.describe() to get statistical summaries of numeric columns, df.isnull().sum() to count missing values, value_counts() to count category frequencies, unique() and nunique() to inspect categorical values, and df.corr() to calculate correlation between numeric columns. These commands provide a quick understanding of dataset structure and quality.",
                5
            ),
            qa(
                "Explain the use of histograms, box plots, scatter plots and heatmaps in EDA.",
                "A histogram shows the distribution of a numeric variable and helps identify skewness, spread and common value ranges. A box plot shows median, quartiles and possible outliers, making it useful for detecting extreme values. A scatter plot shows the relationship between two numeric variables, such as hours studied and marks. A heatmap is often used to visualise a correlation matrix, showing which numeric features are positively or negatively related. These visualisations make patterns easier to understand than raw tables alone and help guide feature selection and preprocessing.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — Categorical Encoding and Feature Scaling
========================================================= */

const categoricalEncodingAndFeatureScaling = createTopic(
    "categorical-encoding-and-feature-scaling",
    "Categorical Encoding and Feature Scaling",

    [
        text(
            "Most Machine Learning algorithms require numerical input. Therefore, categorical values such as city, gender, grade or department must be converted into numeric form. Similarly, numeric features may need scaling so that one feature does not dominate another due to larger units."
        ),

        heading("Categorical Variables"),

        definition(
            "Categorical Variable",
            "A categorical variable contains labels or groups instead of continuous numerical values. Examples include gender, city, department, product category and education level."
        ),

        table(
            ["Type", "Meaning", "Example", "Suitable Encoding"],
            [
                ["Nominal", "Categories with no natural order", "City: Pune, Mumbai, Delhi", "One-hot encoding"],
                ["Ordinal", "Categories with meaningful order", "Low, Medium, High", "Ordinal / label encoding"],
                ["Binary", "Only two categories", "Yes/No", "0/1 encoding"],
            ]
        ),

        heading("Label Encoding"),

        definition(
            "Label Encoding",
            "Label encoding converts each category into an integer value. It is best suited for ordinal categories where the order is meaningful."
        ),

        code(
            `from sklearn.preprocessing import LabelEncoder

grades = ["low", "medium", "high", "medium"]

encoder = LabelEncoder()
encoded = encoder.fit_transform(grades)

print(encoded)
print(encoder.classes_)`,
            "python",
            "Label encoding"
        ),

        heading("Ordinal Encoding"),

        code(
            `from sklearn.preprocessing import OrdinalEncoder
import pandas as pd

df = pd.DataFrame({
    "level": ["low", "medium", "high", "medium"]
})

encoder = OrdinalEncoder(categories=[["low", "medium", "high"]])
df["level_encoded"] = encoder.fit_transform(df[["level"]])

print(df)`,
            "python",
            "Ordinal encoding with fixed order"
        ),

        heading("One-Hot Encoding"),

        definition(
            "One-Hot Encoding",
            "One-hot encoding converts each category into a separate binary column containing 0 or 1. It avoids creating a false numerical order between categories."
        ),

        code(
            `import pandas as pd

df = pd.DataFrame({
    "city": ["Pune", "Mumbai", "Delhi", "Pune"]
})

encoded = pd.get_dummies(df, columns=["city"], dtype=int)

print(encoded)`,
            "python",
            "One-hot encoding with pandas"
        ),

        heading("Encoding Comparison"),

        table(
            ["Encoding", "Advantage", "Disadvantage", "Best For"],
            [
                ["Label Encoding", "Simple and compact", "May create false order", "Ordinal data"],
                ["Ordinal Encoding", "Allows custom category order", "Wrong order harms model", "Ordered categories"],
                ["One-Hot Encoding", "No false order", "Increases columns", "Nominal categories"],
                ["Binary 0/1", "Very simple", "Only supports two categories", "Yes/No, True/False"],
            ]
        ),

        heading("Feature Scaling"),

        definition(
            "Feature Scaling",
            "Feature scaling transforms numeric variables to a similar range or distribution so that algorithms treat features more fairly."
        ),

        text(
            "Scaling is especially important for algorithms based on distance or gradient descent, such as KNN, K-Means, SVM, logistic regression and neural networks. Tree-based models such as decision trees and random forests are usually less sensitive to scaling."
        ),

        heading("Common Scaling Techniques"),

        table(
            ["Technique", "Formula / Idea", "Output", "Use"],
            [
                ["Min-Max Scaling", "(x - min) / (max - min)", "Usually 0 to 1", "When fixed range is needed"],
                ["Standardisation", "(x - mean) / std", "Mean 0, std 1", "Common default"],
                ["Robust Scaling", "Uses median and IQR", "Less affected by outliers", "When outliers exist"],
                ["MaxAbs Scaling", "Divides by maximum absolute value", "-1 to 1", "Sparse data"],
            ]
        ),

        code(
            `from sklearn.preprocessing import MinMaxScaler, StandardScaler, RobustScaler

X = [[20, 50000], [25, 60000], [30, 100000]]

minmax = MinMaxScaler()
standard = StandardScaler()
robust = RobustScaler()

print(minmax.fit_transform(X))
print(standard.fit_transform(X))
print(robust.fit_transform(X))`,
            "python",
            "Different scalers"
        ),

        heading("Correct Scaling Workflow"),

        steps([
            "Split the dataset into training and test sets.",
            "Fit the scaler only on X_train.",
            "Transform X_train using the fitted scaler.",
            "Transform X_test using the same fitted scaler.",
            "Train the model using scaled training data.",
            "Evaluate using scaled test data.",
        ]),

        note(
            "Do not use LabelEncoder blindly for city, country or product category. It may make the model think Mumbai > Delhi or Pune > Mumbai, which has no real meaning. Use one-hot encoding for nominal categories.",
            "warning",
            "Encoding Mistake"
        ),

        keyPoints([
            "Categorical variables must be converted into numeric form before modelling.",
            "Nominal categories usually need one-hot encoding.",
            "Ordinal categories can use ordered integer encoding.",
            "Feature scaling is important for distance-based and gradient-based algorithms.",
            "StandardScaler gives mean 0 and standard deviation 1.",
            "Fit encoders and scalers on training data only to avoid leakage.",
        ]),
    ],

    {
        summary:
            "Understand categorical encoding methods and feature scaling techniques such as MinMaxScaler, StandardScaler and RobustScaler.",
        minutes: 14,
        tags: ["machine-learning", "encoding", "scaling", "one-hot", "standardscaler"],

        mcqs: [
            mcq(
                "One-hot encoding is best suited for:",
                ["Nominal categories", "Only continuous numbers", "Removing duplicates", "Calculating accuracy"],
                0,
                "One-hot encoding is suitable for categories with no natural order."
            ),
            mcq(
                "Ordinal encoding is suitable when:",
                ["Categories have meaningful order", "There are no categories", "Data is image only", "The column is an ID"],
                0,
                "Ordinal encoding preserves ordered categories such as low, medium and high."
            ),
            mcq(
                "StandardScaler transforms data so that it has:",
                ["Mean 0 and standard deviation 1", "Only values 0 and 1", "No negative values", "Only integer labels"],
                0,
                "StandardScaler standardises features to zero mean and unit standard deviation."
            ),
            mcq(
                "MinMaxScaler usually transforms values into:",
                ["0 to 1 range", "Only negative values", "Text categories", "Random numbers"],
                0,
                "MinMaxScaler commonly scales data to the range 0 to 1."
            ),
            mcq(
                "Scaling is especially important for:",
                ["KNN and SVM", "HTML rendering", "File uploading", "SQL joins only"],
                0,
                "KNN and SVM are sensitive to feature scale."
            ),
            mcq(
                "A risk of label encoding nominal categories is:",
                ["It may create false order", "It always removes rows", "It cannot produce numbers", "It only works with images"],
                0,
                "Integer labels can incorrectly imply an order among unordered categories."
            ),
        ],

        questions: [
            qa(
                "Differentiate between nominal, ordinal and binary categorical variables.",
                "Nominal variables are categories with no natural order, such as city, colour or department. They are usually encoded using one-hot encoding because assigning numbers may create false order. Ordinal variables are categories with meaningful order, such as low, medium and high or poor, average and excellent. These can be encoded using ordinal encoding with a defined order. Binary variables have only two possible values, such as yes/no, true/false or male/female, and can be represented as 0 and 1. Choosing the correct encoding depends on the meaning of the categories.",
                5
            ),
            qa(
                "Explain label encoding and one-hot encoding with advantages and disadvantages.",
                "Label encoding converts categories into integer values, for example low = 0, medium = 1 and high = 2. It is simple and compact, but it can create a false order if used on nominal data such as city names. One-hot encoding creates separate binary columns for each category, such as city_Pune and city_Mumbai. It avoids false ordering and is suitable for nominal categories. However, it increases the number of columns, especially when a feature has many unique categories. Label encoding is best for ordinal data, while one-hot encoding is best for unordered categories.",
                5
            ),
            qa(
                "What is feature scaling? Explain Min-Max scaling, standardisation and robust scaling.",
                "Feature scaling transforms numeric features so that they are on comparable scales. It is important for distance-based and gradient-based algorithms such as KNN, SVM, K-Means, logistic regression and neural networks. Min-Max scaling transforms values into a fixed range, usually 0 to 1, using the minimum and maximum values. Standardisation transforms values to have mean 0 and standard deviation 1. It is a common default for many ML algorithms. Robust scaling uses median and interquartile range, so it is less affected by outliers. Scaling should be fitted on training data only and then applied to test data.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — Feature Engineering and Feature Selection
========================================================= */

const featureEngineeringAndFeatureSelection = createTopic(
    "feature-engineering-and-feature-selection",
    "Feature Engineering and Feature Selection",

    [
        definition(
            "Feature Engineering",
            "Feature engineering is the process of creating, transforming or combining input variables to make patterns easier for a Machine Learning model to learn."
        ),

        definition(
            "Feature Selection",
            "Feature selection is the process of choosing the most useful features and removing irrelevant, redundant or noisy features from the dataset."
        ),

        text(
            "In many ML projects, good features are more important than a complex algorithm. A simple model with meaningful features can outperform a complex model trained on poor features."
        ),

        heading("Why Feature Engineering is Important"),

        list([
            "It can improve model accuracy.",
            "It can make relationships clearer to the algorithm.",
            "It can reduce noise and irrelevant information.",
            "It can incorporate domain knowledge.",
            "It can help simple models perform better.",
        ]),

        heading("Common Feature Engineering Techniques"),

        table(
            ["Technique", "Meaning", "Example"],
            [
                ["Creating new features", "Derive useful variables from existing columns", "age from date_of_birth"],
                ["Combining features", "Merge multiple columns into one meaningful feature", "total_score = theory + practical"],
                ["Binning", "Convert numeric values into groups", "age_group: child/adult/senior"],
                ["Log transform", "Reduce skewness of numeric data", "log(income)"],
                ["Date features", "Extract parts from date/time", "month, day, weekday"],
                ["Text features", "Convert text to numeric features", "word count, TF-IDF"],
                ["Interaction features", "Represent relationship between features", "area × rooms"],
            ]
        ),

        code(
            `import pandas as pd

df = pd.DataFrame({
    "theory": [70, 80, 60],
    "practical": [20, 15, 25],
    "date_of_birth": ["2002-05-10", "2001-08-20", "2003-01-15"]
})

df["total_marks"] = df["theory"] + df["practical"]

df["date_of_birth"] = pd.to_datetime(df["date_of_birth"])
df["birth_year"] = df["date_of_birth"].dt.year

print(df)`,
            "python",
            "Creating new features"
        ),

        heading("Binning Example"),

        code(
            `import pandas as pd

df = pd.DataFrame({
    "age": [12, 18, 25, 45, 70]
})

df["age_group"] = pd.cut(
    df["age"],
    bins=[0, 17, 40, 60, 100],
    labels=["child", "young", "middle", "senior"]
)

print(df)`,
            "python",
            "Binning numerical values"
        ),

        heading("Feature Selection Methods"),

        table(
            ["Method", "Description", "Example"],
            [
                ["Filter methods", "Use statistical measures before model training", "Correlation, chi-square"],
                ["Wrapper methods", "Try feature subsets using model performance", "Recursive Feature Elimination"],
                ["Embedded methods", "Feature selection happens during model training", "Lasso, tree feature importance"],
                ["Domain-based selection", "Use expert/business knowledge", "Remove ID column"],
            ]
        ),

        heading("Removing Irrelevant Columns"),

        code(
            `# ID columns usually do not help prediction
X = df.drop(columns=["student_id", "name", "target"])
y = df["target"]`,
            "python",
            "Dropping irrelevant columns"
        ),

        heading("Correlation-Based Feature Selection"),

        code(
            `import pandas as pd

corr = df.corr(numeric_only=True)

# Correlation of features with target
print(corr["target"].sort_values(ascending=False))`,
            "python",
            "Feature correlation with target"
        ),

        heading("Feature Importance with Random Forest"),

        code(
            `from sklearn.ensemble import RandomForestClassifier
import pandas as pd

model = RandomForestClassifier(random_state=42)
model.fit(X_train, y_train)

importance = pd.Series(model.feature_importances_, index=X_train.columns)
print(importance.sort_values(ascending=False))`,
            "python",
            "Tree-based feature importance"
        ),

        heading("Dimensionality and Curse of Dimensionality"),

        definition(
            "Curse of Dimensionality",
            "The curse of dimensionality refers to problems that occur when a dataset has too many features. Data becomes sparse, distance measures become less meaningful and models may overfit."
        ),

        text(
            "Feature selection helps reduce dimensionality by removing unnecessary features. This can improve speed, reduce overfitting and make models easier to interpret."
        ),

        note(
            "Feature engineering must be based only on information available at prediction time. For example, using final exam result to predict whether a student will pass the final exam is data leakage.",
            "warning",
            "Feature Leakage"
        ),

        keyPoints([
            "Feature engineering creates better input variables from raw data.",
            "Examples include total marks, age from date of birth, date parts and binned groups.",
            "Feature selection removes irrelevant, redundant or noisy features.",
            "Filter, wrapper and embedded methods are common feature selection approaches.",
            "Too many features can cause overfitting and slower training.",
            "Avoid feature leakage by using only information available before prediction.",
        ]),
    ],

    {
        summary:
            "Learn feature engineering, feature selection, feature importance, binning, correlation and the curse of dimensionality.",
        minutes: 13,
        tags: ["machine-learning", "feature-engineering", "feature-selection", "dimensionality"],

        mcqs: [
            mcq(
                "Feature engineering means:",
                ["Creating or transforming features to improve learning", "Deleting the target variable always", "Only drawing graphs", "Encrypting data"],
                0,
                "Feature engineering creates meaningful variables that help the model learn better."
            ),
            mcq(
                "Feature selection is used to:",
                ["Choose useful features and remove irrelevant ones", "Add random noise", "Convert Python to Java", "Always increase columns"],
                0,
                "Feature selection keeps important predictors and removes unnecessary ones."
            ),
            mcq(
                "Creating total_score = theory + practical is an example of:",
                ["Feature engineering", "Model deployment", "Data deletion", "Cross-validation"],
                0,
                "A new feature is created by combining existing columns."
            ),
            mcq(
                "Recursive Feature Elimination is a:",
                ["Wrapper method", "Database method", "Plotting method", "Password method"],
                0,
                "RFE repeatedly evaluates feature subsets using a model."
            ),
            mcq(
                "Lasso is an example of:",
                ["Embedded feature selection", "HTML encoding", "Data duplication", "Manual sorting"],
                0,
                "Lasso can shrink some coefficients to zero during model training."
            ),
            mcq(
                "The curse of dimensionality occurs when:",
                ["Dataset has too many features", "Dataset has no rows", "Only one feature exists", "Labels are perfect"],
                0,
                "High-dimensional data can become sparse and difficult to model."
            ),
        ],

        questions: [
            qa(
                "What is feature engineering? Give examples.",
                "Feature engineering is the process of creating, transforming or combining variables to make useful patterns easier for a Machine Learning model to learn. Examples include calculating total_marks from theory and practical marks, extracting age from date of birth, extracting month or weekday from a date, converting income using log transformation, grouping age into age categories, creating word counts from text, or creating interaction features such as area multiplied by number of rooms. Good feature engineering uses domain knowledge and can significantly improve model performance, sometimes more than changing the algorithm.",
                5
            ),
            qa(
                "What is feature selection? Explain filter, wrapper and embedded methods.",
                "Feature selection is the process of selecting the most useful input variables and removing irrelevant, redundant or noisy features. Filter methods use statistical measures before model training, such as correlation, chi-square test or mutual information. They are fast and simple. Wrapper methods evaluate different subsets of features using a model, such as Recursive Feature Elimination. They can be accurate but are computationally expensive. Embedded methods perform feature selection as part of model training, such as Lasso regression or feature importance from tree-based models. Feature selection can reduce overfitting, speed training and improve interpretability.",
                5
            ),
            qa(
                "Explain the curse of dimensionality and how feature selection helps.",
                "The curse of dimensionality refers to problems that arise when a dataset has too many features. As dimensionality increases, data becomes sparse and distance-based calculations become less meaningful. Models may require much more data, training becomes slower and the risk of overfitting increases. Feature selection helps by removing irrelevant or redundant variables, keeping only useful predictors. This reduces complexity, improves model generalisation, makes training faster and improves interpretability. Dimensionality can also be reduced using techniques such as PCA, but feature selection is often easier to understand because it keeps original features.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 5 — Preprocessing Pipelines and Data Leakage Prevention
========================================================= */

const preprocessingPipelinesAndDataLeakage = createTopic(
    "preprocessing-pipelines-and-data-leakage-prevention",
    "Preprocessing Pipelines and Data Leakage Prevention",

    [
        definition(
            "Pipeline",
            "In scikit-learn, a pipeline is a sequence of preprocessing steps and a final estimator combined into one object. It ensures that transformations are applied in the correct order."
        ),

        definition(
            "Data Leakage",
            "Data leakage occurs when information from outside the training data is used during model training, causing unrealistically high evaluation performance."
        ),

        text(
            "Preprocessing pipelines make ML workflows cleaner, reusable and safer. They help avoid mistakes such as fitting a scaler or imputer on the full dataset before splitting into training and testing data."
        ),

        heading("Why Use Pipelines?"),

        list([
            "They combine preprocessing and model training into one workflow.",
            "They reduce repeated code.",
            "They help prevent data leakage during cross-validation.",
            "They make model deployment easier because preprocessing is saved with the model.",
            "They support grid search and hyperparameter tuning.",
            "They keep training and testing transformations consistent.",
        ]),

        heading("Data Leakage Examples"),

        table(
            ["Leakage Situation", "Why It Is Wrong"],
            [
                ["Scaling before train-test split", "Test set statistics influence training"],
                ["Imputing missing values using full dataset", "Test distribution leaks into train preprocessing"],
                ["Selecting features using entire dataset", "Target information from test set affects training"],
                ["Using future data", "Prediction uses information not available at prediction time"],
                ["Duplicate records across train and test", "Model may see same record during training and testing"],
            ]
        ),

        heading("Basic Pipeline Example"),

        code(
            `from sklearn.pipeline import Pipeline
from sklearn.impute import SimpleImputer
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression

pipe = Pipeline([
    ("imputer", SimpleImputer(strategy="median")),
    ("scaler", StandardScaler()),
    ("model", LogisticRegression())
])

pipe.fit(X_train, y_train)

accuracy = pipe.score(X_test, y_test)
print("Accuracy:", accuracy)`,
            "python",
            "scikit-learn Pipeline"
        ),

        heading("ColumnTransformer for Different Column Types"),

        definition(
            "ColumnTransformer",
            "ColumnTransformer applies different preprocessing steps to different columns, such as scaling numeric columns and one-hot encoding categorical columns."
        ),

        code(
            `from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import OneHotEncoder, StandardScaler
from sklearn.impute import SimpleImputer
from sklearn.linear_model import LogisticRegression

numeric_features = ["age", "salary"]
categorical_features = ["city", "gender"]

numeric_transformer = Pipeline([
    ("imputer", SimpleImputer(strategy="median")),
    ("scaler", StandardScaler())
])

categorical_transformer = Pipeline([
    ("imputer", SimpleImputer(strategy="most_frequent")),
    ("encoder", OneHotEncoder(handle_unknown="ignore"))
])

preprocessor = ColumnTransformer([
    ("num", numeric_transformer, numeric_features),
    ("cat", categorical_transformer, categorical_features)
])

model = Pipeline([
    ("preprocess", preprocessor),
    ("classifier", LogisticRegression())
])

model.fit(X_train, y_train)
print(model.score(X_test, y_test))`,
            "python",
            "ColumnTransformer with Pipeline"
        ),

        heading("Pipeline with Cross-Validation"),

        code(
            `from sklearn.model_selection import cross_val_score

scores = cross_val_score(model, X, y, cv=5)

print(scores)
print("Average:", scores.mean())`,
            "python",
            "Cross-validation with pipeline"
        ),

        heading("Saving a Complete Pipeline"),

        code(
            `import joblib

# Save trained pipeline
joblib.dump(model, "student_pass_model.joblib")

# Load later
loaded_model = joblib.load("student_pass_model.joblib")

prediction = loaded_model.predict(new_data)
print(prediction)`,
            "python",
            "Saving and loading pipeline"
        ),

        heading("Best Practices to Prevent Data Leakage"),

        steps([
            "Split data into train and test before fitting preprocessing steps.",
            "Fit imputers, scalers and encoders only on training data.",
            "Use pipelines during cross-validation.",
            "Do not use future information for current prediction.",
            "Remove duplicate rows before splitting, or split carefully by groups.",
            "Perform feature selection inside the pipeline when doing cross-validation.",
            "Keep preprocessing logic identical during training and deployment.",
        ]),

        note(
            "A model deployed without the exact same preprocessing used during training may produce wrong predictions. Saving the full pipeline solves this because preprocessing and the model are stored together.",
            "tip",
            "Deployment Tip"
        ),

        keyPoints([
            "Pipelines combine preprocessing and model training into one object.",
            "ColumnTransformer applies different transformations to different columns.",
            "Pipelines help prevent data leakage during train-test split and cross-validation.",
            "Data leakage gives unrealistically high test performance.",
            "Fit preprocessing steps only on training data.",
            "Save the complete pipeline for consistent deployment.",
        ]),
    ],

    {
        summary:
            "Learn scikit-learn pipelines, ColumnTransformer, cross-validation safety, model saving and data leakage prevention.",
        minutes: 13,
        tags: ["machine-learning", "pipeline", "columntransformer", "data-leakage", "joblib"],

        mcqs: [
            mcq(
                "A scikit-learn Pipeline is used to:",
                ["Combine preprocessing and model steps", "Create HTML pages", "Delete Python packages", "Only plot graphs"],
                0,
                "Pipeline chains preprocessing and estimator steps into a single workflow."
            ),
            mcq(
                "Data leakage causes:",
                ["Unrealistically high evaluation performance", "Better security always", "No model training", "Only missing values"],
                0,
                "Leakage allows test or future information to influence training, making performance look better than reality."
            ),
            mcq(
                "ColumnTransformer is used to:",
                ["Apply different preprocessing to different columns", "Compress CSV files", "Draw histograms only", "Start Jupyter"],
                0,
                "ColumnTransformer can scale numeric columns and encode categorical columns separately."
            ),
            mcq(
                "The correct workflow is:",
                ["Fit scaler on full data, then split", "Split first, fit scaler on training data only", "Use test data for training", "Ignore preprocessing"],
                1,
                "To avoid leakage, preprocessing tools are fitted only on training data."
            ),
            mcq(
                "OneHotEncoder(handle_unknown='ignore') helps when:",
                ["Test data has unseen categories", "All data is numeric", "There are no categories", "The model is deleted"],
                0,
                "It prevents errors when new categories appear during testing or prediction."
            ),
            mcq(
                "joblib.dump() is commonly used to:",
                ["Save trained models or pipelines", "Read HTML files", "Create missing values", "Calculate correlation only"],
                0,
                "joblib is commonly used to save and load scikit-learn models and pipelines."
            ),
        ],

        questions: [
            qa(
                "What is a scikit-learn Pipeline? Why is it useful?",
                "A scikit-learn Pipeline is an object that combines multiple preprocessing steps and a final model into a single workflow. For example, a pipeline may first impute missing values, then scale features, and finally train logistic regression. Pipelines are useful because they reduce repeated code, ensure transformations are applied in the correct order, and keep training and testing preprocessing consistent. They also help prevent data leakage during cross-validation because each fold fits preprocessing only on its training portion. Pipelines are also useful for deployment because the complete preprocessing and model workflow can be saved together.",
                5
            ),
            qa(
                "Explain data leakage with examples and prevention methods.",
                "Data leakage occurs when information not legitimately available during training is used to build the model, causing test performance to look better than real-world performance. Examples include scaling or imputing using the full dataset before train-test split, selecting features using the full dataset, using future data to predict past events, or having duplicate records in both train and test sets. Prevention methods include splitting data before fitting preprocessing, fitting imputers and scalers only on training data, using pipelines during cross-validation, removing duplicates carefully, and ensuring features contain only information available at prediction time.",
                5
            ),
            qa(
                "What is ColumnTransformer? Explain its use with numeric and categorical columns.",
                "ColumnTransformer is a scikit-learn tool that applies different preprocessing steps to different columns. This is useful because numeric and categorical features usually require different transformations. Numeric columns may need missing value imputation using median and scaling using StandardScaler. Categorical columns may need missing value imputation using most frequent value and encoding using OneHotEncoder. ColumnTransformer combines these transformations into one preprocessing object. It is commonly placed inside a Pipeline before the final estimator. This keeps preprocessing organised, prevents leakage, and ensures the same transformations are applied during training, testing and deployment.",
                5
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit2Topics = [
    dataCleaningAndMissingValues,
    exploratoryDataAnalysis,
    categoricalEncodingAndFeatureScaling,
    featureEngineeringAndFeatureSelection,
    preprocessingPipelinesAndDataLeakage,
];