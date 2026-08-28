/* =========================================================
   MSc-IT • SEM 2 • Machine Learning
   UNIT 4 — Unsupervised Learning and Advanced Techniques
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
   TOPIC 1 — Clustering Algorithms
========================================================= */

const clusteringAlgorithms = createTopic(
    "clustering-algorithms",
    "Clustering Algorithms",

    [
        definition(
            "Clustering",
            "Clustering is an unsupervised learning technique used to group similar data points together without using predefined class labels."
        ),

        text(
            "In clustering, the dataset has input features but no target label. The algorithm tries to discover natural groups in the data. For example, customers can be grouped based on spending behaviour, age and purchase frequency."
        ),

        heading("Applications of Clustering"),

        list([
            "Customer segmentation in marketing.",
            "Grouping similar documents or news articles.",
            "Image segmentation.",
            "Anomaly or fraud detection.",
            "Social network community detection.",
            "Grouping students based on learning behaviour.",
        ]),

        heading("K-Means Clustering"),

        definition(
            "K-Means",
            "K-Means is an unsupervised clustering algorithm that divides data into K clusters by assigning points to the nearest centroid and repeatedly updating centroids."
        ),

        heading("How K-Means Works"),

        steps([
            "Choose the number of clusters K.",
            "Randomly initialise K centroids.",
            "Assign each data point to the nearest centroid.",
            "Recalculate each centroid as the mean of assigned points.",
            "Repeat assignment and centroid update until clusters stop changing.",
        ]),

        code(
            `from sklearn.datasets import make_blobs
from sklearn.cluster import KMeans
import matplotlib.pyplot as plt

X, y_true = make_blobs(
    n_samples=200,
    centers=3,
    cluster_std=0.8,
    random_state=42
)

model = KMeans(n_clusters=3, random_state=42, n_init=10)
labels = model.fit_predict(X)

plt.scatter(X[:, 0], X[:, 1], c=labels, cmap="viridis")
plt.scatter(
    model.cluster_centers_[:, 0],
    model.cluster_centers_[:, 1],
    c="red",
    marker="X",
    s=200
)
plt.title("K-Means Clustering")
plt.show()`,
            "python",
            "K-Means clustering"
        ),

        heading("Choosing K — Elbow Method"),

        definition(
            "Elbow Method",
            "The elbow method helps choose K by plotting the within-cluster sum of squares for different K values and selecting the point where improvement starts decreasing sharply."
        ),

        code(
            `from sklearn.cluster import KMeans
import matplotlib.pyplot as plt

inertia_values = []

for k in range(1, 11):
    model = KMeans(n_clusters=k, random_state=42, n_init=10)
    model.fit(X)
    inertia_values.append(model.inertia_)

plt.plot(range(1, 11), inertia_values, marker="o")
plt.xlabel("Number of clusters K")
plt.ylabel("Inertia")
plt.title("Elbow Method")
plt.show()`,
            "python",
            "Elbow method"
        ),

        heading("Silhouette Score"),

        definition(
            "Silhouette Score",
            "Silhouette score measures how well each point fits inside its assigned cluster compared with other clusters. It ranges from -1 to +1; higher values indicate better clustering."
        ),

        code(
            `from sklearn.metrics import silhouette_score
from sklearn.cluster import KMeans

model = KMeans(n_clusters=3, random_state=42, n_init=10)
labels = model.fit_predict(X)

score = silhouette_score(X, labels)
print("Silhouette Score:", score)`,
            "python",
            "Silhouette score"
        ),

        heading("Hierarchical Clustering"),

        definition(
            "Hierarchical Clustering",
            "Hierarchical clustering creates a tree-like structure of clusters, either by merging small clusters into larger ones or splitting large clusters into smaller ones."
        ),

        table(
            ["Type", "Description"],
            [
                ["Agglomerative", "Bottom-up approach; starts with each point as its own cluster and merges them"],
                ["Divisive", "Top-down approach; starts with one large cluster and splits it"],
            ]
        ),

        heading("DBSCAN"),

        definition(
            "DBSCAN",
            "DBSCAN is a density-based clustering algorithm that groups closely packed points and marks points in low-density regions as noise or outliers."
        ),

        table(
            ["Algorithm", "Main Idea", "Advantages", "Limitations"],
            [
                ["K-Means", "Centroid-based clustering", "Simple and fast", "Must choose K; assumes spherical clusters"],
                ["Hierarchical", "Builds cluster tree", "Dendrogram is interpretable", "Can be slow for large datasets"],
                ["DBSCAN", "Density-based clustering", "Finds arbitrary shapes; detects noise", "Sensitive to eps and min_samples"],
            ]
        ),

        note(
            "K-Means is sensitive to feature scale. Always scale numerical features before clustering if features have different units or ranges.",
            "warning",
            "Scaling Important"
        ),

        keyPoints([
            "Clustering groups similar data without labels.",
            "K-Means requires choosing the number of clusters K.",
            "The elbow method and silhouette score help evaluate cluster quality.",
            "Hierarchical clustering forms a tree of clusters.",
            "DBSCAN finds dense regions and can detect outliers.",
            "Feature scaling is important for distance-based clustering.",
        ]),
    ],

    {
        summary:
            "Learn clustering, K-Means, elbow method, silhouette score, hierarchical clustering and DBSCAN.",
        minutes: 14,
        tags: ["machine-learning", "unsupervised", "clustering", "k-means", "dbscan"],

        mcqs: [
            mcq(
                "Clustering is mainly used to:",
                ["Group similar data points without labels", "Predict continuous values only", "Encrypt datasets", "Compile Python"],
                0,
                "Clustering is an unsupervised method that groups similar records."
            ),
            mcq(
                "K-Means requires the user to specify:",
                ["Number of clusters K", "HTML page size", "Database password", "Target class always"],
                0,
                "K-Means needs the number of clusters before training."
            ),
            mcq(
                "In K-Means, a centroid represents:",
                ["Centre of a cluster", "Missing value", "Final class label only", "Database index"],
                0,
                "A centroid is the mean position of points assigned to a cluster."
            ),
            mcq(
                "The elbow method is used to choose:",
                ["K in K-Means", "Learning rate in all models", "CSV file path", "Python version"],
                0,
                "The elbow method helps select a reasonable number of clusters."
            ),
            mcq(
                "DBSCAN is based on:",
                ["Density of points", "Linear regression equation", "Decision tree entropy only", "Sigmoid function"],
                0,
                "DBSCAN groups dense regions and marks sparse points as noise."
            ),
            mcq(
                "A high silhouette score generally indicates:",
                ["Better clustering", "More missing values", "No clusters", "Wrong encoding always"],
                0,
                "Higher silhouette score means points fit well in their clusters."
            ),
        ],

        questions: [
            qa(
                "What is clustering? Explain its applications.",
                "Clustering is an unsupervised learning technique that groups similar data points together without using predefined labels. The algorithm analyses input features and discovers natural patterns or groups. It is useful when the target class is unknown. Applications include customer segmentation, grouping similar documents, image segmentation, fraud or anomaly detection, grouping students based on behaviour, and social network community detection. For example, an e-commerce company can cluster customers into budget buyers, premium buyers and occasional buyers based on purchase amount, frequency and product categories.",
                5
            ),
            qa(
                "Explain the K-Means clustering algorithm.",
                "K-Means is a centroid-based clustering algorithm. First, the user chooses the number of clusters K. The algorithm randomly initialises K centroids. Each data point is assigned to the nearest centroid using a distance measure such as Euclidean distance. Then each centroid is recalculated as the mean of all points assigned to that cluster. This process repeats until assignments stop changing or the maximum number of iterations is reached. K-Means is simple and fast, but it requires choosing K, is sensitive to outliers and feature scaling, and works best when clusters are roughly spherical.",
                5
            ),
            qa(
                "Compare K-Means, hierarchical clustering and DBSCAN.",
                "K-Means divides data into a predefined number of clusters using centroids. It is fast and simple but requires K and works best for spherical clusters. Hierarchical clustering builds a tree-like structure of clusters called a dendrogram. Agglomerative hierarchical clustering starts with each point as a separate cluster and merges them step by step. It is interpretable but can be slow for large datasets. DBSCAN is density-based; it groups points in dense regions and marks isolated points as noise. It can find arbitrary-shaped clusters and detect outliers, but its performance depends on eps and min_samples.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — Dimensionality Reduction
========================================================= */

const dimensionalityReduction = createTopic(
    "dimensionality-reduction",
    "Dimensionality Reduction",

    [
        definition(
            "Dimensionality Reduction",
            "Dimensionality reduction is the process of reducing the number of input features while preserving as much important information as possible."
        ),

        text(
            "Datasets with many features can be difficult to visualise, slow to train and prone to overfitting. Dimensionality reduction helps simplify data, remove redundancy and improve computational efficiency."
        ),

        heading("Why Dimensionality Reduction is Needed"),

        list([
            "To reduce training time.",
            "To remove redundant or correlated features.",
            "To reduce overfitting.",
            "To visualise high-dimensional data in 2D or 3D.",
            "To reduce storage and memory requirements.",
            "To reduce noise in the dataset.",
        ]),

        heading("Curse of Dimensionality"),

        definition(
            "Curse of Dimensionality",
            "The curse of dimensionality refers to problems that occur when data has too many features, making data sparse and distance-based learning less reliable."
        ),

        table(
            ["Problem", "Effect"],
            [
                ["Too many features", "Model becomes complex"],
                ["Sparse data", "Distances become less meaningful"],
                ["More computation", "Training becomes slower"],
                ["Noise features", "Model may overfit"],
                ["Hard visualisation", "Humans cannot directly visualise high dimensions"],
            ]
        ),

        heading("Feature Selection vs Feature Extraction"),

        table(
            ["Aspect", "Feature Selection", "Feature Extraction"],
            [
                ["Meaning", "Selects a subset of original features", "Creates new transformed features"],
                ["Original features retained?", "Yes", "No, transformed features are used"],
                ["Interpretability", "Higher", "Lower"],
                ["Example", "Select top 10 features", "PCA creates principal components"],
            ]
        ),

        heading("Principal Component Analysis"),

        definition(
            "Principal Component Analysis",
            "Principal Component Analysis, or PCA, is a dimensionality reduction technique that transforms correlated features into new uncorrelated features called principal components."
        ),

        text(
            "PCA finds directions of maximum variance in the data. The first principal component captures the most variance, the second captures the next highest variance, and so on. PCA is commonly used for compression, noise reduction and visualisation."
        ),

        heading("PCA with scikit-learn"),

        code(
            `from sklearn.datasets import load_iris
from sklearn.preprocessing import StandardScaler
from sklearn.decomposition import PCA
import matplotlib.pyplot as plt

iris = load_iris()
X = iris.data
y = iris.target

X_scaled = StandardScaler().fit_transform(X)

pca = PCA(n_components=2)
X_pca = pca.fit_transform(X_scaled)

print("Explained variance ratio:", pca.explained_variance_ratio_)

plt.scatter(X_pca[:, 0], X_pca[:, 1], c=y, cmap="viridis")
plt.xlabel("Principal Component 1")
plt.ylabel("Principal Component 2")
plt.title("PCA on Iris Dataset")
plt.show()`,
            "python",
            "PCA example"
        ),

        heading("Explained Variance"),

        definition(
            "Explained Variance",
            "Explained variance tells how much information or variance from the original data is captured by each principal component."
        ),

        code(
            `from sklearn.decomposition import PCA

pca = PCA()
pca.fit(X_scaled)

print(pca.explained_variance_ratio_)
print(pca.explained_variance_ratio_.cumsum())`,
            "python",
            "Cumulative explained variance"
        ),

        heading("t-SNE and UMAP Overview"),

        table(
            ["Technique", "Purpose", "Notes"],
            [
                ["PCA", "Linear dimensionality reduction", "Fast, interpretable, preserves global variance"],
                ["t-SNE", "Visualise high-dimensional data in 2D/3D", "Good local clusters; slower; mainly visualisation"],
                ["UMAP", "Visualise or reduce dimensions", "Often faster than t-SNE; preserves local/global structure better"],
            ]
        ),

        note(
            "PCA is affected by feature scale. Standardise features before applying PCA when variables have different units.",
            "warning",
            "Scaling Required"
        ),

        keyPoints([
            "Dimensionality reduction reduces the number of features.",
            "It helps speed, visualisation and overfitting control.",
            "Feature selection keeps original features; feature extraction creates new features.",
            "PCA creates principal components that capture maximum variance.",
            "Explained variance shows information retained by components.",
            "t-SNE and UMAP are mainly used for visualising high-dimensional data.",
        ]),
    ],

    {
        summary:
            "Learn dimensionality reduction, curse of dimensionality, PCA, explained variance, t-SNE and UMAP overview.",
        minutes: 13,
        tags: ["machine-learning", "pca", "dimensionality-reduction", "feature-extraction"],

        mcqs: [
            mcq(
                "Dimensionality reduction means:",
                ["Reducing number of features", "Increasing duplicate rows", "Deleting target always", "Encrypting columns"],
                0,
                "Dimensionality reduction reduces feature count while preserving useful information."
            ),
            mcq(
                "The curse of dimensionality occurs when:",
                ["Data has too many features", "Data has no columns", "Only one row exists", "Model has no input"],
                0,
                "Too many dimensions can make data sparse and modelling difficult."
            ),
            mcq(
                "PCA stands for:",
                ["Principal Component Analysis", "Primary Code Algorithm", "Python Classification API", "Pattern Cluster Association"],
                0,
                "PCA means Principal Component Analysis."
            ),
            mcq(
                "PCA creates:",
                ["Principal components", "HTML components", "Database views", "Missing values"],
                0,
                "PCA transforms original features into principal components."
            ),
            mcq(
                "Explained variance shows:",
                ["Information captured by components", "Number of deleted rows", "Password strength", "CSV file encoding"],
                0,
                "Explained variance ratio tells how much variance each component preserves."
            ),
            mcq(
                "Before PCA, features should often be:",
                ["Standardised", "Converted to passwords", "Deleted completely", "Sorted alphabetically only"],
                0,
                "PCA is scale-sensitive, so standardisation is usually recommended."
            ),
        ],

        questions: [
            qa(
                "What is dimensionality reduction? Why is it useful?",
                "Dimensionality reduction is the process of reducing the number of input features while preserving important information. It is useful because high-dimensional datasets can be slow to train, difficult to visualise and more likely to overfit. Too many irrelevant or redundant features can confuse a model and increase computation. Dimensionality reduction can remove noise, reduce memory usage and make data easier to understand. It is commonly used before visualisation, clustering and some supervised learning tasks. Methods include feature selection, which keeps original features, and feature extraction, such as PCA, which creates new transformed features.",
                5
            ),
            qa(
                "Explain PCA and principal components.",
                "Principal Component Analysis, or PCA, is a dimensionality reduction technique that transforms original features into new uncorrelated features called principal components. These components are ordered by the amount of variance they capture. The first principal component captures the maximum variance in the data, the second captures the next highest variance while being uncorrelated with the first, and so on. By keeping only the first few components, we can reduce dimensionality while retaining most information. PCA is useful for visualisation, compression and noise reduction. Since PCA is affected by scale, features should usually be standardised first.",
                5
            ),
            qa(
                "Differentiate between feature selection and feature extraction.",
                "Feature selection chooses a subset of the original features and removes irrelevant, redundant or noisy features. The selected features remain understandable because they are part of the original dataset. Examples include correlation-based selection, chi-square selection and tree-based feature importance. Feature extraction creates new transformed features from the original data. PCA is a common feature extraction method that creates principal components. Feature extraction may preserve more information in fewer dimensions but is usually less interpretable because the new features are combinations of original variables. Feature selection is preferred when interpretability is important.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — Association Rule Mining
========================================================= */

const associationRuleMining = createTopic(
    "association-rule-mining",
    "Association Rule Mining",

    [
        definition(
            "Association Rule Mining",
            "Association rule mining is an unsupervised technique used to discover relationships or patterns among items in large datasets."
        ),

        text(
            "Association rules are commonly used in market basket analysis. For example, if many customers who buy bread also buy butter, the rule can be written as: Bread → Butter."
        ),

        heading("Market Basket Analysis"),

        definition(
            "Market Basket Analysis",
            "Market basket analysis studies customer purchase transactions to find items that are frequently bought together."
        ),

        table(
            ["Transaction", "Items Purchased"],
            [
                ["T1", "Bread, Butter, Milk"],
                ["T2", "Bread, Butter"],
                ["T3", "Bread, Jam"],
                ["T4", "Milk, Butter"],
                ["T5", "Bread, Butter, Jam"],
            ]
        ),

        heading("Association Rule Format"),

        code(
            `Rule:
A → B

Meaning:
If item A is bought, item B is likely to be bought.

Example:
Bread → Butter`,
            "text",
            "Association rule"
        ),

        heading("Important Measures"),

        definition(
            "Support",
            "Support measures how frequently an itemset appears in the dataset."
        ),

        definition(
            "Confidence",
            "Confidence measures how often the rule is true when the antecedent occurs."
        ),

        definition(
            "Lift",
            "Lift measures how much more likely the consequent is purchased when the antecedent is purchased compared to random chance."
        ),

        table(
            ["Measure", "Formula", "Meaning"],
            [
                ["Support(A)", "Transactions containing A / Total transactions", "Popularity of itemset"],
                ["Confidence(A → B)", "Support(A and B) / Support(A)", "Reliability of rule"],
                ["Lift(A → B)", "Confidence(A → B) / Support(B)", "Strength beyond chance"],
            ]
        ),

        heading("Interpreting Lift"),

        table(
            ["Lift Value", "Meaning"],
            [
                ["Lift > 1", "A and B occur together more than expected"],
                ["Lift = 1", "A and B are independent"],
                ["Lift < 1", "A and B occur together less than expected"],
            ]
        ),

        heading("Apriori Algorithm"),

        definition(
            "Apriori Algorithm",
            "Apriori is an association rule mining algorithm that finds frequent itemsets using the principle that all subsets of a frequent itemset must also be frequent."
        ),

        heading("How Apriori Works"),

        steps([
            "Set minimum support and confidence thresholds.",
            "Find frequent 1-itemsets.",
            "Generate candidate 2-itemsets from frequent 1-itemsets.",
            "Remove candidates below minimum support.",
            "Repeat for larger itemsets.",
            "Generate association rules from frequent itemsets.",
            "Keep rules that satisfy minimum confidence and lift requirements.",
        ]),

        heading("Apriori Example with mlxtend"),

        code(
            `import pandas as pd
from mlxtend.frequent_patterns import apriori, association_rules

df = pd.DataFrame({
    "Bread": [1, 1, 1, 0, 1],
    "Butter": [1, 1, 0, 1, 1],
    "Milk": [1, 0, 0, 1, 0],
    "Jam": [0, 0, 1, 0, 1],
})

frequent_itemsets = apriori(
    df,
    min_support=0.4,
    use_colnames=True
)

rules = association_rules(
    frequent_itemsets,
    metric="confidence",
    min_threshold=0.6
)

print(frequent_itemsets)
print(rules[["antecedents", "consequents", "support", "confidence", "lift"]])`,
            "python",
            "Association rules using Apriori"
        ),

        heading("Applications"),

        list([
            "Product recommendation in supermarkets and e-commerce.",
            "Store shelf arrangement.",
            "Cross-selling and bundle offers.",
            "Web usage pattern mining.",
            "Medical symptom relationship analysis.",
            "Fraud pattern discovery.",
        ]),

        note(
            "High confidence alone can be misleading if the consequent item is already very common. Lift helps check whether the association is actually stronger than random chance.",
            "warning",
            "Confidence vs Lift"
        ),

        keyPoints([
            "Association rule mining discovers item relationships.",
            "Market basket analysis finds products bought together.",
            "Rules are written as antecedent → consequent.",
            "Support measures frequency; confidence measures rule reliability.",
            "Lift measures strength beyond random chance.",
            "Apriori finds frequent itemsets and generates rules.",
        ]),
    ],

    {
        summary:
            "Learn association rules, market basket analysis, support, confidence, lift and Apriori algorithm.",
        minutes: 13,
        tags: ["machine-learning", "association-rules", "apriori", "market-basket-analysis"],

        mcqs: [
            mcq(
                "Association rule mining is commonly used for:",
                ["Market basket analysis", "Password hashing", "Image compression only", "Operating system scheduling"],
                0,
                "Association rules are widely used to find items bought together."
            ),
            mcq(
                "A rule Bread → Butter means:",
                ["Buying bread is associated with buying butter", "Bread causes butter always", "Butter is deleted", "Bread is a target variable only"],
                0,
                "The rule indicates that butter is likely when bread is bought."
            ),
            mcq(
                "Support measures:",
                ["How frequently an itemset appears", "Model training speed", "Number of features only", "Accuracy of regression"],
                0,
                "Support is the frequency of an itemset in transactions."
            ),
            mcq(
                "Confidence of A → B measures:",
                ["How often B occurs when A occurs", "Only number of rows", "Feature scaling", "Outlier distance"],
                0,
                "Confidence measures reliability of the rule."
            ),
            mcq(
                "Lift greater than 1 means:",
                ["Positive association", "No relationship", "Negative association", "Missing values only"],
                0,
                "Lift > 1 means items occur together more than expected by chance."
            ),
            mcq(
                "Apriori is used to find:",
                ["Frequent itemsets", "Linear regression coefficients", "Neural network weights only", "Database passwords"],
                0,
                "Apriori finds frequent itemsets and generates association rules."
            ),
        ],

        questions: [
            qa(
                "What is association rule mining? Explain with an example.",
                "Association rule mining is an unsupervised learning technique used to discover relationships between items in large datasets. It is commonly used in market basket analysis to find products that are frequently bought together. A rule is written as A → B, meaning that when A occurs, B is likely to occur. For example, Bread → Butter means customers who buy bread often also buy butter. Retailers can use this information for product placement, bundle offers and recommendation systems. Association rules are evaluated using support, confidence and lift.",
                5
            ),
            qa(
                "Explain support, confidence and lift.",
                "Support measures how frequently an itemset appears in the dataset. For example, support of Bread and Butter is the fraction of transactions containing both. Confidence measures how often a rule is true when the antecedent occurs. For rule Bread → Butter, confidence is the fraction of bread transactions that also contain butter. Lift compares confidence with the normal frequency of the consequent. If lift is greater than 1, the items are positively associated; if lift equals 1, they are independent; if lift is less than 1, they occur together less than expected. Lift is useful because confidence alone can be misleading.",
                5
            ),
            qa(
                "Explain the Apriori algorithm.",
                "Apriori is an algorithm for association rule mining. It finds frequent itemsets using the principle that if an itemset is frequent, all of its subsets must also be frequent. First, minimum support and confidence thresholds are selected. The algorithm finds frequent 1-itemsets, then generates candidate 2-itemsets, removes candidates below minimum support, and repeats this process for larger itemsets. After frequent itemsets are found, association rules are generated and filtered using confidence and lift. Apriori is simple and interpretable but can be slow for very large datasets with many items.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — Anomaly Detection and Recommendation Systems
========================================================= */

const anomalyDetectionAndRecommendationSystems = createTopic(
    "anomaly-detection-and-recommendation-systems",
    "Anomaly Detection and Recommendation Systems",

    [
        heading("Anomaly Detection"),

        definition(
            "Anomaly Detection",
            "Anomaly detection is the process of identifying data points or patterns that differ significantly from normal behaviour."
        ),

        text(
            "Anomalies are also called outliers, novelties or exceptions. They may represent errors, fraud, attacks, rare events or unusual but important behaviour."
        ),

        heading("Applications of Anomaly Detection"),

        list([
            "Credit card fraud detection.",
            "Network intrusion detection.",
            "Machine failure detection in IoT.",
            "Medical abnormality detection.",
            "Suspicious login detection.",
            "Quality control in manufacturing.",
        ]),

        heading("Types of Anomalies"),

        table(
            ["Type", "Meaning", "Example"],
            [
                ["Point anomaly", "Single point is unusual", "Transaction of ₹5,00,000 when usual amount is ₹500"],
                ["Contextual anomaly", "Unusual only in a specific context", "High electricity use at midnight"],
                ["Collective anomaly", "Group of points is unusual together", "Repeated small failed logins"],
            ]
        ),

        heading("Common Anomaly Detection Methods"),

        table(
            ["Method", "Idea"],
            [
                ["Statistical methods", "Flag values far from mean or outside IQR"],
                ["Z-score", "Detect values many standard deviations away from mean"],
                ["Isolation Forest", "Anomalies are easier to isolate using random splits"],
                ["One-Class SVM", "Learns boundary around normal data"],
                ["DBSCAN", "Marks sparse points as noise"],
            ]
        ),

        heading("Isolation Forest Example"),

        code(
            `from sklearn.ensemble import IsolationForest
import numpy as np

X = np.array([
    [10], [12], [11], [13], [12],
    [100]   # anomaly
])

model = IsolationForest(contamination=0.15, random_state=42)
labels = model.fit_predict(X)

# 1 = normal, -1 = anomaly
print(labels)`,
            "python",
            "Isolation Forest"
        ),

        heading("Recommendation Systems"),

        definition(
            "Recommendation System",
            "A recommendation system suggests relevant items to users based on user preferences, item similarity, behaviour or popularity."
        ),

        text(
            "Recommendation systems are used by platforms such as Amazon, Netflix, YouTube, Spotify and online learning apps to suggest products, movies, videos, songs or courses."
        ),

        heading("Types of Recommendation Systems"),

        table(
            ["Type", "How It Works", "Example"],
            [
                ["Popularity-based", "Recommends most popular items", "Trending videos"],
                ["Content-based filtering", "Recommends items similar to what user liked", "More movies of same genre"],
                ["Collaborative filtering", "Uses behaviour of similar users", "Users like you also watched"],
                ["Hybrid systems", "Combines multiple methods", "Netflix-style recommendation"],
            ]
        ),

        heading("Content-Based Filtering"),

        text(
            "Content-based filtering uses item features. If a user likes action movies starring a particular actor, the system recommends similar action movies. It depends on item metadata and user profile."
        ),

        heading("Collaborative Filtering"),

        text(
            "Collaborative filtering uses user-item interactions such as ratings, clicks, views or purchases. It does not require item details; it learns from behaviour patterns."
        ),

        table(
            ["Approach", "Meaning"],
            [
                ["User-user collaborative filtering", "Find users similar to the current user"],
                ["Item-item collaborative filtering", "Find items similar to items the user liked"],
                ["Matrix factorisation", "Learns hidden user and item factors from interaction matrix"],
            ]
        ),

        heading("Recommendation Challenges"),

        list([
            "Cold start problem for new users or new items.",
            "Data sparsity because users interact with only a few items.",
            "Popularity bias where already popular items get recommended more.",
            "Scalability for millions of users and items.",
            "Privacy concerns from user behaviour tracking.",
        ], true),

        note(
            "Recommendation systems should not only optimise clicks. They should also consider diversity, fairness, user satisfaction and privacy.",
            "warning",
            "Responsible Recommendation"
        ),

        keyPoints([
            "Anomaly detection identifies unusual patterns or rare events.",
            "Anomalies can be point, contextual or collective.",
            "Isolation Forest, One-Class SVM and DBSCAN can be used for anomaly detection.",
            "Recommendation systems suggest relevant items to users.",
            "Content-based filtering uses item features.",
            "Collaborative filtering uses user-item interaction patterns.",
        ]),
    ],

    {
        summary:
            "Learn anomaly detection methods and recommendation system approaches such as content-based and collaborative filtering.",
        minutes: 13,
        tags: ["machine-learning", "anomaly-detection", "recommendation-system", "isolation-forest"],

        mcqs: [
            mcq(
                "Anomaly detection identifies:",
                ["Unusual data points or patterns", "Only normal rows", "HTML tags", "Database schemas"],
                0,
                "Anomaly detection finds behaviour that differs from normal patterns."
            ),
            mcq(
                "Isolation Forest is used for:",
                ["Anomaly detection", "Linear regression only", "Data visualisation only", "Association rules"],
                0,
                "Isolation Forest isolates anomalies using random splits."
            ),
            mcq(
                "In Isolation Forest, label -1 usually means:",
                ["Anomaly", "Normal point", "Missing column", "Training row only"],
                0,
                "scikit-learn IsolationForest predicts -1 for anomaly and 1 for normal."
            ),
            mcq(
                "A recommendation system is used to:",
                ["Suggest relevant items to users", "Delete features", "Scale data only", "Calculate entropy only"],
                0,
                "Recommendation systems suggest products, movies, videos and similar items."
            ),
            mcq(
                "Content-based filtering recommends using:",
                ["Item features", "Only random choices", "Only operating system data", "No user history"],
                0,
                "Content-based systems recommend items similar in features to liked items."
            ),
            mcq(
                "Collaborative filtering mainly uses:",
                ["User-item interactions", "Only item colour", "Only missing values", "Database backup logs"],
                0,
                "Collaborative filtering learns from ratings, clicks, views or purchases."
            ),
        ],

        questions: [
            qa(
                "What is anomaly detection? Give examples.",
                "Anomaly detection is the process of identifying data points or patterns that are significantly different from normal behaviour. These unusual points may indicate errors, fraud, attacks or rare events. Examples include detecting credit card fraud, identifying network intrusions, finding abnormal medical test results, detecting machine failure in sensors, and spotting suspicious login attempts. Anomalies may be point anomalies, such as one very large transaction; contextual anomalies, such as high electricity usage at an unusual time; or collective anomalies, such as many failed login attempts in a short period.",
                5
            ),
            qa(
                "Explain common methods of anomaly detection.",
                "Common anomaly detection methods include statistical methods, Z-score, IQR-based detection, Isolation Forest, One-Class SVM and DBSCAN. Statistical methods flag values far from the mean or outside normal ranges. Z-score identifies values many standard deviations away from the mean. IQR detects points outside quartile-based limits. Isolation Forest isolates anomalies quickly because unusual points require fewer random splits. One-Class SVM learns a boundary around normal data and flags points outside it. DBSCAN can identify points in low-density regions as noise. The best method depends on data type, dimensionality and whether labelled anomalies are available.",
                5
            ),
            qa(
                "Differentiate between content-based and collaborative filtering.",
                "Content-based filtering recommends items similar to those a user has liked in the past, using item features such as genre, keywords, price, author or category. For example, if a user likes action movies, the system recommends similar action movies. Collaborative filtering uses user-item interaction data such as ratings, clicks or purchases. It recommends items based on behaviour of similar users or similarity between items. For example, users who watched movie A also watched movie B. Content-based filtering needs good item metadata, while collaborative filtering needs enough user interaction data and may suffer from the cold start problem.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 5 — Advanced ML Concepts and Model Deployment
========================================================= */

const advancedMlConceptsAndDeployment = createTopic(
    "advanced-ml-concepts-and-model-deployment",
    "Advanced ML Concepts and Model Deployment",

    [
        heading("Ensemble Learning"),

        definition(
            "Ensemble Learning",
            "Ensemble learning combines multiple models to produce a stronger and more stable prediction than a single model."
        ),

        table(
            ["Technique", "Idea", "Example"],
            [
                ["Bagging", "Train models independently on random samples and combine results", "Random Forest"],
                ["Boosting", "Train models sequentially where each model corrects previous errors", "AdaBoost, Gradient Boosting, XGBoost"],
                ["Stacking", "Train multiple models and use another model to combine their outputs", "Meta-model ensemble"],
            ]
        ),

        heading("Boosting"),

        definition(
            "Boosting",
            "Boosting is an ensemble technique that builds models sequentially, giving more attention to examples that previous models predicted incorrectly."
        ),

        text(
            "Boosting often gives high accuracy but can be more sensitive to noise and hyperparameters. Popular boosting algorithms include AdaBoost, Gradient Boosting, XGBoost, LightGBM and CatBoost."
        ),

        heading("Cross-Validation and Model Selection"),

        text(
            "Advanced ML work requires reliable model selection. Cross-validation helps compare algorithms and hyperparameters more fairly than a single train-test split."
        ),

        code(
            `from sklearn.model_selection import cross_val_score
from sklearn.ensemble import RandomForestClassifier

model = RandomForestClassifier(random_state=42)

scores = cross_val_score(model, X, y, cv=5, scoring="accuracy")

print(scores)
print("Average accuracy:", scores.mean())`,
            "python",
            "Cross-validation for model selection"
        ),

        heading("Saving and Loading Models"),

        definition(
            "Model Persistence",
            "Model persistence means saving a trained model to disk so it can be loaded later for prediction without retraining."
        ),

        code(
            `import joblib
from sklearn.pipeline import Pipeline

# Save trained model or full pipeline
joblib.dump(model, "ml_model.joblib")

# Load model later
loaded_model = joblib.load("ml_model.joblib")

prediction = loaded_model.predict(new_data)
print(prediction)`,
            "python",
            "Saving and loading model"
        ),

        note(
            "Save the complete pipeline, not only the model. If preprocessing such as scaling or encoding is not saved, predictions in production may be wrong.",
            "warning",
            "Deployment Tip"
        ),

        heading("Basic Model Deployment Workflow"),

        steps([
            "Train and evaluate the model.",
            "Save the trained model or pipeline using joblib or pickle.",
            "Create an API using Flask, FastAPI or Django.",
            "Load the saved model when the application starts.",
            "Receive input data from the client.",
            "Apply the same preprocessing used during training.",
            "Generate prediction using the model.",
            "Return prediction as JSON response.",
            "Monitor predictions, errors and data drift.",
        ]),

        heading("Simple Flask Prediction API"),

        code(
            `from flask import Flask, request, jsonify
import joblib
import pandas as pd

app = Flask(__name__)

model = joblib.load("student_pass_model.joblib")

@app.post("/predict")
def predict():
    data = request.get_json()
    df = pd.DataFrame([data])

    prediction = model.predict(df)[0]

    return jsonify({
        "prediction": int(prediction)
    })

if __name__ == "__main__":
    app.run(debug=True)`,
            "python",
            "Simple ML deployment API"
        ),

        heading("Model Monitoring"),

        definition(
            "Data Drift",
            "Data drift occurs when the statistical properties of real-world input data change over time, reducing model performance."
        ),

        table(
            ["Monitoring Area", "What to Check"],
            [
                ["Input data", "Missing values, invalid ranges, changed distributions"],
                ["Predictions", "Class distribution and unusual outputs"],
                ["Performance", "Accuracy, precision, recall, RMSE when labels are available"],
                ["Latency", "Prediction response time"],
                ["Errors", "API failures and model exceptions"],
                ["Drift", "Change between training data and live data"],
            ]
        ),

        heading("Ethics and Responsible ML"),

        table(
            ["Concern", "Meaning", "Example"],
            [
                ["Bias", "Model treats groups unfairly due to biased data", "Loan approval unfair to one group"],
                ["Fairness", "Predictions should not discriminate", "Equal opportunity in hiring model"],
                ["Privacy", "Protect personal data", "Do not expose medical records"],
                ["Explainability", "Ability to understand model decisions", "Why was loan rejected?"],
                ["Accountability", "Humans responsible for model use", "Review high-risk predictions"],
            ]
        ),

        heading("Production Checklist for ML Models"),

        list([
            "Use the same preprocessing in training and production.",
            "Save and version the complete pipeline.",
            "Validate API input before prediction.",
            "Handle missing and invalid values safely.",
            "Log predictions and errors without leaking sensitive data.",
            "Monitor model performance and data drift.",
            "Retrain model when performance drops.",
            "Check model for bias and unfair outcomes.",
        ], true),

        keyPoints([
            "Ensemble learning combines multiple models.",
            "Bagging reduces variance; boosting improves weak models sequentially.",
            "Models can be saved using joblib or pickle.",
            "Deployment commonly exposes predictions through an API.",
            "Production models require monitoring for errors, performance and drift.",
            "Responsible ML requires attention to bias, fairness, privacy and explainability.",
        ]),
    ],

    {
        summary:
            "Learn ensemble concepts, boosting, model persistence, API deployment, monitoring, data drift and responsible ML.",
        minutes: 14,
        tags: ["machine-learning", "deployment", "ensemble", "boosting", "responsible-ml"],

        mcqs: [
            mcq(
                "Ensemble learning means:",
                ["Combining multiple models", "Deleting all models", "Using no data", "Only plotting graphs"],
                0,
                "Ensemble learning combines several models to improve predictions."
            ),
            mcq(
                "Random Forest is an example of:",
                ["Bagging", "Boosting only", "Association rule mining", "PCA"],
                0,
                "Random Forest uses bagging with multiple decision trees."
            ),
            mcq(
                "Boosting trains models:",
                ["Sequentially to correct previous errors", "Only randomly without labels", "Only once without data", "By deleting features"],
                0,
                "Boosting builds models step by step, focusing on earlier mistakes."
            ),
            mcq(
                "joblib.dump() is used to:",
                ["Save trained models or pipelines", "Draw heatmaps", "Remove duplicates only", "Create labels"],
                0,
                "joblib.dump saves Python ML objects such as scikit-learn models."
            ),
            mcq(
                "Data drift means:",
                ["Live data distribution changes over time", "Data is encrypted", "Model is always perfect", "CSV file is deleted"],
                0,
                "Data drift occurs when production data differs from training data."
            ),
            mcq(
                "Responsible ML includes:",
                ["Fairness, privacy and explainability", "Only higher accuracy", "Ignoring bias", "Removing monitoring"],
                0,
                "Responsible ML considers ethical and social impacts, not only accuracy."
            ),
        ],

        questions: [
            qa(
                "What is ensemble learning? Explain bagging and boosting.",
                "Ensemble learning combines multiple models to produce a stronger and more reliable model than a single model. Bagging, or Bootstrap Aggregating, trains models independently on different random samples of the dataset and combines their predictions. Random Forest is a common bagging method and helps reduce variance and overfitting. Boosting trains models sequentially, where each new model focuses more on examples that previous models predicted incorrectly. Examples include AdaBoost, Gradient Boosting, XGBoost, LightGBM and CatBoost. Bagging is mainly used to reduce variance, while boosting is often used to improve predictive accuracy.",
                5
            ),
            qa(
                "Describe the basic workflow for deploying a Machine Learning model.",
                "A basic deployment workflow starts by training and evaluating the model on proper data. The complete preprocessing pipeline and model are saved using joblib or pickle. Then an API is created using Flask, FastAPI or Django. When the application starts, it loads the saved model. The API receives input data, validates it, converts it into the expected format, applies the same preprocessing used during training, and generates a prediction. The prediction is returned as JSON. After deployment, the system should log errors, monitor prediction quality and response time, detect data drift, and retrain the model when performance drops.",
                5
            ),
            qa(
                "Explain data drift and responsible Machine Learning.",
                "Data drift occurs when the statistical properties of live input data change over time compared with training data. For example, customer behaviour, prices or fraud patterns may change, causing model performance to decrease. Monitoring is needed to detect drift and retrain the model when necessary. Responsible Machine Learning means building and using models ethically. It includes fairness, avoiding discrimination, protecting privacy, explaining important decisions, and maintaining human accountability. A model should not be judged only by accuracy; its social impact, bias, security and reliability must also be considered, especially in areas like healthcare, finance and hiring.",
                5
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit4Topics = [
    clusteringAlgorithms,
    dimensionalityReduction,
    associationRuleMining,
    anomalyDetectionAndRecommendationSystems,
    advancedMlConceptsAndDeployment,
];