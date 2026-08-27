/* =========================================================
   BCA � SEM 8 � Data Analytics Using R Language
   UNIT 2 � Statistics, Hypothesis Testing, Regression & Reporting
========================================================= */

import {
  createTopic,
  heading,
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
   TOPIC 1 � Descriptive Statistics in R
========================================================= */

const descriptiveStats = createTopic(
    "descriptive-statistics-in-r",
    "Descriptive Statistics in R",

    [
        definition(
            "Descriptive Statistics",
            "Descriptive statistics summarize and describe a dataset's main features � center, spread, and shape � without drawing conclusions beyond the data itself."
        ),

        heading("Measures of Central Tendency"),

        code(
            `marks <- c(45, 62, 78, 78, 85, 92, 99)

mean(marks)      # 76.9   ? sum � count
median(marks)    # 78     ? middle value
# No built-in mode! Table trick:
mode_val <- names(table(marks),[table(marks) == max(table(marks),]
mode_val         # "78"   ? most frequent

mean(marks, trim = 0.1)  # 78.3 trimmed mean �
                        # chops top/bottom 10%, resists outliers`,
            "r",
            "Center of the data"
        ),

        note(
            "Mean vs median: with outliers (salaries with one CEO), the median describes the 'typical' value. Mean chases the extreme; median ignores it. Skewed data ? report the median.",
            "tip",
            "Mean vs Median"
        ),

        heading("Measures of Dispersion"),

        code(
            `range(marks)            # 45 99 (min max)
diff(range(marks),      # 54 ? range width

var(marks)              # variance (avg squared deviation)
sd(marks)               # � 18.2 standard deviation
IQR(marks)              # 78 - 62 = 16 ? middle 50%
quantile(marks, c(.25, .5, .75),   # Q1, median, Q3

# CV: compare spread across DIFFERENT units
sd(marks) / mean(marks) * 100   # coefficient of variation`,
            "r",
            "Spread of the data"
        ),

        heading("The Empirical (68-95-99.7) Rule"),

        code(
            `For ~normal data:
mean � 1sd  ? �68% of values
mean � 2sd  ? �95%
mean � 3sd  ? �99.7%

marks: mean 76.9, sd 18.2
68% of students fall in 58.7 � 95.1`,
            "text",
            "Standard deviations as rulers"
        ),

        heading("Skewness & Kurtosis"),

        table(
            ["Shape", "Mean vs Median", "Tail"],
            [
                ["Symmetric", "Mean � Median", "Both equal"],
                ["Right-skewed (+)", "Mean > Median", "Long RIGHT tail (income data)"],
                ["Left-skewed (-)", "Mean < Median", "Long LEFT tail (easy exam marks)"],
            ]
        ),

        code(
            `library(e1071)
skewness(marks)    # > 0 right skew, < 0 left skew
kurtosis(marks)    # tail-heaviness vs normal

# Fastest skew check: histogram + boxplot
hist(mtcars$mpg)   # tail to the right ? skewness > 0
skewness(mtcars$mpg)   # confirms numerically`,
            "r",
            "Quantifying shape"
        ),

        heading("The 5-Number Summary & summary()"),

        code(
            `fivenum(mtcars$mpg)
# Min  Q1  Median  Q3  Max

summary(mtcars$mpg)
# Min 1st Qu. Median Mean 3rd Qu. Max
# 10.4  15.4   19.2  20.1  22.8  33.9
#        ? mean > median ? right skew detected!

# Whole data frame at once:
summary(students)`,
            "r",
            "R's instant reporting"
        ),

        heading("Descriptive by Group"),

        code(
            `library(dplyr)

students %>%
  group_by(stream) %>%
  summarise(
    n      = n(),
    mean   = mean(marks),
    median = median(marks),
    sd     = sd(marks),
    min    = min(marks),
    max    = max(marks)
  )
# A complete group profile in one block`,
            "r",
            "The analyst's summary table"
        ),

        keyPoints([
            "Center: mean (chases outliers), median (robust), mode.",
            "Spread: sd, variance, IQR, range; CV compares across units.",
            "68-95-99.7 rule links sd to normal distributions.",
            "Mean > median reveals right skew instantly.",
            "summary() delivers the 5-number view of everything at once.",
        ]),
  ],

{
    summary:
    "Compute and interpret central tendency, dispersion, the empirical rule, skewness, and grouped summaries in R.",
        minutes: 12,
            tags: ["descriptive-statistics", "mean", "median", "sd", "skewness", "important"],

                mcqs: [
                    mcq(
                        "For income data with a few billionaires, which measure best represents the 'typical' person?",
                        ["Mean", "Median", "Maximum", "Variance"],
                        1,
                        "Median resists extreme values; the mean gets dragged upward."
                    ),
                    mcq(
                        "If mean(marks) = 70 and sd(marks) = 5, roughly 95% of values lie between:",
                        ["65 and 75", "60 and 80", "55 and 85", "Cannot say"],
                        1,
                        "Empirical rule: mean � 2sd = 70 � 10 = [60, 80]."
                    ),
                    mcq(
                        "summary() shows Mean 25.1 > Median 19.2. The distribution is:",
                        ["Left-skewed", "Right-skewed (long right tail)", "Perfectly normal", "Bimodal"],
                        1,
                        "Mean exceeding median signals a right tail pulling it up."
                    ),
                    mcq(
                        "IQR(marks) returns:",
                        ["Max minus min", "Q3 minus Q1 � the middle 50% spread", "Variance", "Standard error"],
                        1,
                        "InterQuartile Range = Q3 - Q1; robust to outliers."
                    ),
                ],

                    questions: [
                        qa(
                            "Explain mean, median, and mode. When is the median preferred over the mean?",
                            "Mean: the arithmetic average � sum divided by count; it uses every value, making it ideal for symmetric data but VULNERABLE to outliers (one billionaire inflates a salary mean absurdly). Median: the middle value in sorted order; half the data lies below, half above � it counts positions, not magnitudes, so outliers barely move it. Mode: the most frequent value; the only central measure meaningful for categorical data (most-common blood group). Prefer the median whenever the distribution is skewed or outliers exist: income/wealth data (right-skewed), house prices, hospital stay lengths. Reporting both mean AND median is best practice � their divergence itself diagnoses skewness: mean > median means a right tail; mean < median a left tail. Example: c(30, 32, 35, 38, 500) ? mean 127 but median 35; only the median describes the typical value honestly.",
                            4
                        ),
                        qa(
                            "Define standard deviation and IQR. Why do analysts often report both?",
                            "Standard deviation measures the average distance of values from the mean (square-root of variance); it inherits the mean's outlier sensitivity � a single extreme inflates sd dramatically � but is mathematically central to normal distributions (68-95-99.7 rule) and every later statistical test. IQR = Q3 - Q1, the span of the middle 50% of sorted data; being positional, it is robust � outliers don't shift quartiles at all, which is why boxplots (whiskers at 1.5�IQR) use it for outlier detection. Analysts report both because they answer different questions with different trust models: sd answers 'typical deviation, assuming roughly symmetric data' and feeds inference; IQR answers 'spread of the central mass, no assumptions.' When sd >> IQR/1.35 (the normal-distribution equivalence), that gap itself proves heavy tails or outliers � the two numbers cross-diagnose the distribution's shape.",
                            4
                        ),
                    ],
  }
);

/* =========================================================
   TOPIC 2 � Probability & Distributions in R
========================================================= */

const probabilityDistributions = createTopic(
    "probability-and-distributions-in-r",
    "Probability & Distributions in R",

    [
        definition(
            "Probability Distribution",
            "A probability distribution describes how likely each possible outcome is � R provides d/p/q/r functions for every major distribution."
        ),

        heading("The dpqr Naming System"),

        table(
            ["Prefix", "Returns", "Question"],
            [
                ["d", "Density/height", "How likely at exactly x?"],
                ["p", "Cumulative probability", "P(X = x)?"],
                ["q", "Quantile (inverse of p)", "Which x has 95% below it?"],
                ["r", "Random sample", "Generate n random values"],
            ]
        ),

        code(
            `# dnorm: height of the normal curve at x
dnorm(0)                 # 0.3989 (peak at mean 0)

# pnorm: P(X = x)  � the workhorse!
pnorm(1.96)              # 0.975  ? the famous 95%!

# qnorm: which x cuts off 95% below?
qnorm(0.95)              # 1.645

# rnorm: simulate data
sim <- rnorm(1000, mean = 70, sd = 10)
hist(sim)                # bell shape emerges`,
            "r",
            "normal = the template for all four"
        ),

        heading("The Normal Distribution"),

        code(
            `# Standardizing (z-score): any normal ? standard normal
z <- (x - mean) / sd

# P(marks below 85), mean=70, sd=10:
pnorm(85, mean = 70, sd = 10)      # 0.9332 ? 93%

# P(between 60 and 80):
pnorm(80, 70, 10) - pnorm(60, 70, 10)   # � 0.6827 (the 68%!)

# Verify normality visually:
qqnorm(mtcars$mpg)
qqline(mtcars$mpg)   # points ~ line ? roughly normal

# Formal test:
shapiro.test(mtcars$mpg)   # p > 0.05 ? can't reject normality`,
            "r",
            "Working with the bell curve"
        ),

        heading("The Famous Critical Values"),

        code(
            `qnorm(0.975)     # 1.96  ? 95% two-tailed
qnorm(0.95)      # 1.645 ? 90% two-tailed / 95% one-tailed
qnorm(0.995)     # 2.576 ? 99% two-tailed

# These numbers power every confidence
# interval and hypothesis test in Unit 2.`,
            "r",
            "Memorize these three"
        ),

        heading("Other Key Distributions"),

        table(
            ["Distribution", "Use Case", "R Function"],
            [
                ["Binomial", "# successes in n trials (pass/fail counts)", "pbinom(7, 10, 0.8)"],
                ["Poisson", "Counts per interval (calls/hour)", "ppois(3, lambda = 2)"],
                ["Uniform", "All outcomes equally likely (dice)", "dunif(1:6, 1, 6)"],
                ["Exponential", "Waiting times between events", "pexp(1, rate = 0.5)"],
                ["t, chi-square, F", "Testing distributions (next topics)", "pt, pchisq, pf"],
            ]
        ),

        code(
            `# Binomial: probability = 8 of 10 students pass (p=0.7)?
1 - pbinom(7, size = 10, prob = 0.7)   # 0.1497

# Poisson: P(=2 calls) when avg is 3/hour?
ppois(2, lambda = 3)                    # 0.4232

# Law of Large Numbers � see it happen:
means <- cumsum(rnorm(10000), / (1:10000)
plot(means, type = "l")
abline(h = 0, col = "red")   # converges to true mean!`,
            "r",
            "Beyond the normal"
        ),

        note(
            "pnorm/qnorm answer real business questions: 'What fraction of students score below 60?' is one function call. Master p and q prefixes and half of statistics becomes arithmetic.",
            "tip",
            "The Power of p & q"
        ),

        keyPoints([
            "dpqr prefixes: density, probability, quantile, random.",
            "pnorm(1.96) = 0.975 � source of the 1.96 magic number.",
            "Z-score = (x - mean)/sd standardizes any normal.",
            "shapiro.test + qqnorm check normality before tests.",
            "Binomial counts trials; Poisson counts per interval.",
        ]),
  ],

{
    summary:
    "Use R's dpqr system for normal/binomial/Poisson distributions, compute probabilities, verify normality, and simulate data.",
        minutes: 13,
            tags: ["probability", "normal-distribution", "pnorm", "binomial", "distributions", "important"],

                mcqs: [
                    mcq(
                        "pnorm(1.96) returns approximately:",
                        ["0.05", "0.95", "0.975", "1.96"],
                        2,
                        "P(Z = 1.96) = 0.975 � leaving 2.5% in each tail = 95% central."
                    ),
                    mcq(
                        "The R prefix that GENERATES random values is:",
                        ["dnorm", "pnorm", "qnorm", "rnorm"],
                        3,
                        "r = random: rnorm(100) simulates 100 draws."
                    ),
                    mcq(
                        "P(a student scores below 60) with mean=70, sd=10 is computed by:",
                        ["dnorm(60, 70, 10)", "pnorm(60, 70, 10)", "qnorm(60, 70, 10)", "rnorm(60, 70, 10)"],
                        1,
                        "p = cumulative probability: P(X = 60)."
                    ),
                    mcq(
                        "Number of customer arrivals per hour is best modeled by:",
                        ["Normal distribution", "Binomial distribution", "Poisson distribution", "Uniform distribution"],
                        2,
                        "Poisson models counts of events per fixed interval."
                    ),
                ],

                    questions: [
                        qa(
                            "Explain R's dpqr system for distributions using the normal as example.",
                            "R gives every distribution four standardized prefixes. Taking the normal: dnorm(x) returns the DENSITY � curve height at x (dnorm(0) � 0.399, the peak); useful for plotting and likelihoods. pnorm(x) returns cumulative probability P(X = x): pnorm(1.96) = 0.975, the origin of the famous 95% interval; differences like pnorm(80,70,10) - pnorm(60,70,10) give interval probabilities (�68%). qnorm(p) is the inverse � the value cutting probability p below it: qnorm(0.95) = 1.645, qnorm(0.975) = 1.96 � critical values for tests. rnorm(n, mean, sd) generates n random draws: rnorm(1000, 70, 10) simulates 1000 students' marks for experiments and power analysis. The identical scheme extends everywhere � dbinom/pbinom/qbinom/rbinom, dpois/ppois, dt/pt � so learning four prefixes unlocks every distribution R offers.",
                            4
                        ),
                        qa(
                            "Marks are normally distributed with mean 70, sd 10. Using R, find (a) P(score below 50), (b) P(score between 60 and 85), (c) the cutoff for the top 5%.",
                            "(a) P(X < 50): pnorm(50, mean = 70, sd = 10) = pnorm(-2) � 0.0228 � about 2.3% of students fall below 50. (b) P(60 = X = 85): pnorm(85, 70, 10) - pnorm(60, 70, 10) = pnorm(1.5) - pnorm(-1) � 0.9332 - 0.1587 = 0.7745 � roughly 77.5% score in this band. (c) Top 5% cutoff: we need x with P(X = x) = 0.05, i.e., P(X = x) = 0.95, so qnorm(0.95, 70, 10) = 70 + 1.645�10 � 86.45 � students scoring above �86.4 form the top 5% (distinction cutoff). All three answer types flow from just two functions � pnorm for 'probability below a value', qnorm for 'value at a probability' � demonstrating why the dpqr system makes distribution questions mechanical.",
                            4
                        ),
                    ],
  }
);

/* =========================================================
   TOPIC 3 � Hypothesis Testing: t-test, Chi-Square & ANOVA
========================================================= */

const hypothesisTesting = createTopic(
    "hypothesis-testing-ttest-chisq-anova",
    "Hypothesis Testing: t-test, Chi-Square & ANOVA",

    [
        definition(
            "Hypothesis Testing",
            "Hypothesis testing is the formal procedure for deciding between a null hypothesis H0 (no effect/difference) and an alternative H1 using sample data, quantifying evidence via the p-value."
        ),

        heading("The Framework"),

        steps([
            "State H0 (no difference) and H1 (the claim).",
            "Choose a (significance level, usually 0.05).",
            "Select the right test (by data type + design).",
            "Compute the test statistic and p-value in R.",
            "Decide: p < a ? reject H0; p = a ? fail to reject.",
            "Interpret in CONTEXT � never just 'significant'.",
        ]),

        definition(
            "p-value",
            "The p-value is the probability of observing data this extreme (or more) IF H0 were true. Small p (typically < 0.05) means such data would be surprising under H0 � evidence against it."
        ),

        heading("Which Test? The Decision Map"),

        table(
            ["Comparison", "Data Type", "Test", "R Function"],
            [
                ["1 group vs known value", "Numeric", "One-sample t-test", "t.test(x, mu =)"],
                ["2 independent groups", "Numeric", "Independent t-test", "t.test(x, y)"],
                ["Before/after same people", "Numeric", "Paired t-test", "t.test(x, y, paired = TRUE)"],
                ["2 categorical variables", "Counts", "Chi-square", "chisq.test(table)"],
                ["3+ group means", "Numeric", "ANOVA", "aov(y ~ group)"],
            ]
        ),

        heading("1. t-tests � Comparing Means"),

        code(
            `# One-sample: is mean ? 70?
t.test(students$marks, mu = 70)
# t = 2.4, df = 29, p-value = 0.023
# p < 0.05 ? reject H0: mean differs from 70!

# Two independent groups: BCA vs BBA marks
t.test(marks ~ stream, data = students)
# formula syntax: numeric ~ group

# Paired: marks before/after coaching (same students)
t.test(after, before, paired = TRUE)

# Welch's (default) doesn't assume equal variances ?`,
            "r",
            "The three t-tests"
        ),

        code(
            `# Reading the output � know every line:
#
#        Welch Two Sample t-test
# t = 2.45, df = 27.8, p-value = 0.021
# 95 percent confidence interval:
#  1.2  13.6
# sample estimates: mean x = 78.4, mean y = 71.0
#
# p = 0.021 < 0.05 ? significant difference.
# CI [1.2, 13.6]: plausible true gap in marks.
# Report: "BCA students scored significantly
# higher (78.4 vs 71.0), t(27.8)=2.45, p=.021"`,
            "text",
            "Output anatomy"
        ),

        heading("2. Chi-Square � Categorical Association"),

        code(
            `# Is stream related to passing?
tbl <- table(students$stream, students$result)
tbl
#        Pass Fail
# BCA      30    5
# BBA      20   10

chisq.test(tbl)
# X-squared = 3.86, df = 1, p-value = 0.049
# p < 0.05 ? association between stream and result!

# Expected counts check (all should be =5):
chisq.test(tbl)$expected`,
            "r",
            "Association between categories"
        ),

        heading("3. ANOVA � 3+ Group Means"),

        code(
            `# Do marks differ across THREE streams?
model <- aov(marks ~ stream, data = students)
summary(model)
#              Df Sum Sq Mean Sq F value Pr(>F)
# stream        2    850     425    5.32  0.008
# Residuals    57   4556      80
#
# F = 5.32, p = 0.008 ? at least ONE pair differs

# WHICH pairs? Post-hoc Tukey:
TukeyHSD(model)
# BCA-BBA     p = 0.012  *
# BCA-MSc     p = 0.640
# BBA-MSc     p = 0.031  *`,
            "r",
            "ANOVA + post-hoc"
        ),

        note(
            "ANOVA tells you a difference EXISTS among groups; TukeyHSD tells you WHERE. Reporting ANOVA without post-hoc is announcing a race winner without naming who beat whom.",
            "warning",
            "Never Skip Post-Hoc"
        ),

        heading("Errors & Significance"),

        table(
            ["", "H0 true", "H0 false"],
            [
                ["Reject H0", "Type I error (a)", "? Power (1-�)"],
                ["Fail to reject", "? Correct", "Type II error (�)"],
            ]
        ),

        keyPoints([
            "p-value: probability of data this extreme IF H0 is true.",
            "p < 0.05 ? reject H0; report effect size and CI too.",
            "t-test: 1-sample, independent (Welch default), paired.",
            "chisq.test(table(x, y), tests categorical association.",
            "aov() + TukeyHSD(): does a difference exist, and where.",
        ]),
  ],

{
    summary:
    "Run the core inferential tests in R: one-sample/independent/paired t-tests, chi-square for categories, and ANOVA with Tukey post-hoc.",
        minutes: 14,
            tags: ["hypothesis-testing", "t-test", "chi-square", "anova", "p-value", "important"],

                mcqs: [
                    mcq(
                        "A p-value of 0.03 means:",
                        ["H0 is 3% likely true", "3% chance the result is random", "IF H0 were true, data this extreme occurs 3% of the time � evidence against H0", "97% confidence in H1"],
                        2,
                        "p-value is P(data | H0), never P(H0 | data)."
                    ),
                    mcq(
                        "Comparing pass/fail rates across THREE cities calls for:",
                        ["Paired t-test", "Chi-square test of independence", "ANOVA on city names", "Correlation"],
                        1,
                        "Two categorical variables (city � result) ? chisq.test()."
                    ),
                    mcq(
                        "ANOVA gives p = 0.004. The correct follow-up is:",
                        ["Stop � it's significant", "TukeyHSD() to find WHICH group pairs differ", "Run chi-square", "Compute the median"],
                        1,
                        "ANOVA detects 'some difference'; Tukey locates it."
                    ),
                    mcq(
                        "Testing the SAME students before and after training requires:",
                        ["Independent t-test", "Paired t-test", "One-sample t-test", "Chi-square"],
                        1,
                        "Repeated measures on one sample ? paired = TRUE."
                    ),
                ],

                    questions: [
                        qa(
                            "Explain hypothesis testing steps and interpret p = 0.021 from a two-group t-test correctly.",
                            "Steps: (1) Formulate H0 ('no difference between group means') and H1 ('a difference exists'); (2) set significance level a = 0.05; (3) verify assumptions (roughly numeric, independent groups � Welch's t-test by default handles unequal variances); (4) run t.test(marks ~ group, data = df); (5) compare p to a; (6) interpret in context. Interpretation of p = 0.021: IF the two streams truly had equal average marks (H0 true), the probability of observing a sample difference as large as ours is only 2.1%. Since that surprise is below our 5% threshold, we REJECT H0 and conclude the groups genuinely differ � always adding context: 'BCA students (M = 78.4) significantly outperformed BBA (M = 71.0), t(27.8) = 2.45, p = .021, 95% CI [1.2, 13.6].' Crucially, p = 0.021 does NOT mean H0 has 2.1% probability of being true, nor that the difference is large � significance ? importance; the CI and effect size carry that story.",
                            4
                        ),
                        qa(
                            "When do you use chi-square vs ANOVA? Show R code for each and the decision rule.",
                            "The choice depends on variable TYPES. Chi-square: BOTH variables categorical � comparing proportions/counts across categories. Example: 'Is passing associated with stream?' � tbl <- table(df$stream, df$result); chisq.test(tbl); with X� = 3.86, p = 0.049 < 0.05 we reject independence: stream and result are associated. Verify expected counts = 5 for validity. ANOVA: one NUMERIC outcome across THREE-OR-MORE groups. Example: 'Do average marks differ across BCA/BBA/MSc?' � summary(aov(marks ~ stream, data = df),; F = 5.32, p = 0.008 rejects equal means, and TukeyHSD() reveals BCA > BBA and BBA < MSc specifically while BCA � MSc. Rule of thumb: counts/proportions in a cross-table ? chi-square; comparing group MEANS of a measurement ? t-test (2 groups) or ANOVA (3+ groups with post-hoc)."
                        ),
                    ],
  }
);

/* =========================================================
   TOPIC 4 � Correlation & Linear Regression in R
========================================================= */

const correlationRegression = createTopic(
    "correlation-and-linear-regression-in-r",
    "Correlation & Linear Regression in R",

    [
        definition(
            "Correlation",
            "Correlation (Pearson's r) measures the strength and direction of a LINEAR relationship between two numeric variables, ranging from -1 (perfect negative) through 0 (none) to +1 (perfect positive)."
        ),

        heading("Computing Correlation"),

        code(
            `cor(mtcars$wt, mtcars$mpg)       # -0.868 strong negative

# Significance of correlation:
cor.test(mtcars$wt, mtcars$mpg)
# t = -9.56, p-value = 1.29e-10
# ? relationship is real, not luck

# All pairwise at once:
cor(mtcars[, c("mpg", "wt", "hp", "disp")])

# Visual ALWAYS accompanies r:
plot(mtcars$wt, mtcars$mpg)`,
            "r",
            "Quantifying relationships"
        ),

        table(
            ["|r| range", "Interpretation"],
            [
                ["0.9 � 1.0", "Very strong"],
                ["0.7 � 0.9", "Strong"],
                ["0.4 � 0.7", "Moderate"],
                ["0.1 � 0.4", "Weak"],
                ["0.0 � 0.1", "Negligible"],
            ]
        ),

        note(
            "Correlation ? causation! Ice cream sales correlate with drownings (summer drives both). r measures association only � causation needs experiments or causal designs.",
            "warning",
            "The Eternal Warning"
        ),

        heading("Simple Linear Regression"),

        definition(
            "Linear Regression",
            "Linear regression fits a straight line y = �0 + �1x that minimizes squared errors, modeling how a numeric outcome depends on one or more predictor variables."
        ),

        code(
            `model <- lm(mpg ~ wt, data = mtcars)

# THE most important R output to master:
summary(model)
#
# Coefficients:
#             Estimate  Pr(>|t|)
# (Intercept)   37.285   <2e-16  ***
# wt            -5.344   1.29e-10 ***
#
# Residual standard error: 3.05 (30 df)
# Multiple R-squared: 0.753

# The equation: mpg = 37.29 - 5.34 � wt
# Every extra 1000 lb ? 5.3 fewer miles/gallon`,
            "r",
            "Fitting and reading lm()"
        ),

        heading("Interpreting the Output"),

        table(
            ["Component", "Meaning"],
            [
                ["Estimate (�)", "Slope: change in y per unit x; intercept when x=0"],
                ["Pr(>|t|)", "Is this predictor significant? (< 0.05)"],
                ["R-squared", "Fraction of y's variance explained (0-1)"],
                ["Residual SE", "Typical prediction error, in y's units"],
                ["p-value (F-stat)", "Is the MODEL overall useful?"],
            ]
        ),

        heading("Prediction with the Model"),

        code(
            `# Predict for a new 3.0-ton car:
newcar <- data.frame(wt = 3.0)
predict(model, newcar)
#        1
#    21.25 mpg

# With confidence interval:
predict(model, newcar, interval = "confidence")
# fit   lwr   upr
# 21.3 19.9  22.6

# Visualization:
ggplot(mtcars, aes(wt, mpg), +
    geom_point() +
    geom_smooth(method = "lm") +
    labs(title = "Weight predicts Mileage (R� = 0.75)")`,
            "r",
            "From model to decision"
        ),

        heading("Multiple Regression"),

        code(
            `m2 <- lm(mpg ~ wt + hp + cyl, data = mtcars)
summary(m2)
# R-squared jumps 0.753 ? 0.827
# Each Estimate = effect HOLDING others constant

# Careful: wt & hp correlate (multicollinearity) �
# check with:
cor(mtcars$wt, mtcars$hp)   # 0.66 � moderate`,
            "r",
            "Adding predictors"
        ),

        heading("Regression Assumption Checks"),

        code(
            `par(mfrow = c(2, 2),
plot(model)
# 4 diagnostic plots:
# 1. Residuals vs Fitted ? should be patternless
# 2. Normal Q-Q         ? points on line
# 3. Scale-Location     ? even spread
# 4. Residuals vs Leverage ? no influential outliers`,
            "r",
            "Always plot(model)"
        ),

        keyPoints([
            "cor() gives r (-1 to +1); cor.test() adds significance.",
            "lm(y ~ x, data) fits regression; slope = effect per unit.",
            "R� = variance explained; 0.75 means 75%.",
            "predict() with new data turns models into decisions.",
            "Correlation ? causation; always run plot(model) diagnostics.",
        ]),
  ],

{
    summary:
    "Quantify relationships with cor/cor.test, fit and interpret lm() regression, predict new values, and check assumptions.",
        minutes: 13,
            tags: ["correlation", "regression", "lm", "r-squared", "prediction", "important"],

                mcqs: [
                    mcq(
                        "cor(x, y) = -0.87 indicates:",
                        ["Weak relationship", "Strong NEGATIVE linear relationship", "Causation of y by x", "A regression line"],
                        1,
                        "Near -1: strong inverse linearity � as x rises, y falls consistently."
                    ),
                    mcq(
                        "In lm(mpg ~ wt), the slope estimate -5.34 means:",
                        ["mpg is 5.34 on average", "Each unit of wt lowers predicted mpg by 5.34", "wt causes mpg", "R� is 5.34"],
                        1,
                        "Slope = predicted change in y per one-unit increase in x."
                    ),
                    mcq(
                        "An R� of 0.75 says:",
                        ["75% accuracy", "75% of mpg's variance is explained by the model", "The slope is 0.75", "p = 0.75"],
                        1,
                        "R� is explained variance � the model's account of y's variation."
                    ),
                    mcq(
                        "Which function predicts mpg for a NEW car's weight?",
                        ["coef(model)", "predict(model, newdata)", "summary(model)", "cor()"],
                        1,
                        "predict() applies the fitted equation to fresh data points."
                    ),
                ],

                    questions: [
                        qa(
                            "Explain Pearson correlation and interpret r = -0.87 between weight and mileage.",
                            "Pearson's correlation coefficient measures how tightly two numeric variables follow a straight-line relationship, bounded at -1 (perfect negative line), 0 (no linear association), and +1 (perfect positive). Its significance comes from cor.test(), which tests H0: true r = 0. For r = -0.87 between car weight and mileage: the sign tells DIRECTION � heavier cars achieve LOWER mileage; the magnitude (|r| > 0.7) tells STRENGTH � the points hug a descending line closely, making weight an excellent predictor of mileage; squaring gives r� = 0.75, meaning 75% of mileage variation tracks weight. Three cautions: (1) correlation detects only LINEAR patterns � a U-shaped relationship can hide behind r � 0; (2) outliers can fabricate or destroy r � always plot first; (3) it is association, not causation � although here physics strongly suggests the mechanism, statistics alone never establishes it.",
                            4
                        ),
                        qa(
                            "Fit and fully interpret a simple linear regression of mpg on wt, including prediction for wt = 3.0.",
                            "Fitting: model <- lm(mpg ~ wt, data = mtcars); summary(model) reports Intercept = 37.29 (p < 2e-16) and slope wt = -5.34 (p = 1.29e-10), yielding the equation mpg = 37.29 - 5.34�wt. Interpretation: the intercept is the theoretical mileage of a weightless car (extrapolation, but anchor of the line); the slope means each additional 1000-lb of weight reduces expected mileage by 5.34 mpg � both coefficients overwhelmingly significant. Model quality: R� = 0.753 � weight explains 75.3% of mileage variance; residual SE = 3.05 mpg � typical prediction error. Prediction: predict(model, data.frame(wt = 3.0), returns 21.25 mpg, with confidence interval via interval='confidence' showing the mean-response band [19.9, 22.6]. Diagnostics: plot(model) � residuals-vs-fitted shows no curved pattern, Q-Q roughly linear, so linearity and normality hold, making predictions trustworthy.",
                            4
                        ),
                    ],
  }
);

/* =========================================================
   TOPIC 5 � R Markdown Reporting & Analytics Careers
========================================================= */

const rMarkdownCareers = createTopic(
    "r-markdown-reporting-and-analytics-careers",
    "R Markdown Reporting & Analytics Careers",

    [
        definition(
            "R Markdown",
            "R Markdown is a file format that weaves together narrative text, R code, and its output (tables, plots) into one reproducible document � HTML, PDF, Word, slides, or dashboards."
        ),

        heading("Why Reproducible Reports Matter"),

        list([
            "One file = analysis + results + explanation � no copy-pasting screenshots.",
            "Rerun with new data ? the ENTIRE report updates automatically.",
            "Code visibility builds trust and catches errors.",
            "The industry-standard deliverable of every R analyst.",
        ]),

        heading("Anatomy of an R Markdown File"),

        code(
            `---
title: "Student Performance Analysis"
author: "Rahul � BCA Sem 8"
output: html_document
---

## Overview
This report analyses semester marks.

## Data
\`\`\`{r load}
library(tidyverse)
students <- read_csv("students.csv")
summary(students$marks)
\`\`\`

## Visualization
\`\`\`{r plot, echo=FALSE}
ggplot(students, aes(hours, marks), +
  geom_point() + geom_smooth(method = "lm")
\`\`\`

Knit button (Ctrl+Shift+K) ? complete HTML!`,
            "markdown",
            "YAML + text + code chunks"
        ),

        heading("Chunk Options That Matter"),

        table(
            ["Option", "Effect"],
            [
                ["echo=FALSE", "Hide code, show only output"],
                ["include=FALSE", "Run but show nothing"],
                ["warning=FALSE, message=FALSE", "Silence package chatter"],
                ["results='hide'", "Run code, hide printed output"],
                ["fig.width=8, fig.height=5", "Control plot size"],
            ]
        ),

        heading("Inline Code � Numbers That Never Go Stale"),

        code(
            `The average mark was \`r mean(students$marks)\`
and \`r sum(students$marks > 80)\` students
scored above 80.

# Knit substitutes LIVE values:
# "The average mark was 78.4 and 9
#  students scored above 80."
# Update data ? every sentence updates.`,
            "markdown",
            "Self-updating text"
        ),

        heading("The Typical Analysis Report"),

        steps([
            "Title, author, date (YAML header).",
            "Introduction � business question.  ",
            "Data � source, loading, str() snapshot.",
            "Cleaning � missing values, fixes (documented!).",
            "EDA � key plots with interpretation under EACH.",
            "Statistical tests � with hypotheses and p-values.",
            "Conclusions � answer the question, plain language.",
            "Appendix � full code.",
        ]),

        heading("Careers with R"),

        table(
            ["Role", "R Usage", "Add-on Skills"],
            [
                ["Data Analyst", "Reports, EDA, dashboards", "SQL, Excel, Power BI"],
                ["Business Analyst", "Segmentation, forecasting support", "Domain knowledge"],
                ["Biostatistician", "Clinical trials (R is THE standard)", "Statistics depth"],
                ["Data Scientist", "Modeling via tidymodels/caret", "Python, ML theory"],
                ["Research Analyst", "Academic/government studies", "Writing rigor"],
            ]
        ),

        note(
            "Your BCA portfolio piece: ONE polished R Markdown report � real dataset, EDA plots, a t-test, a regression, clean interpretation � outshines ten certificates. Knit it to HTML and host on GitHub Pages.",
            "tip",
            "Portfolio Gold"
        ),

        keyPoints([
            "R Markdown = text + code + output in ONE reproducible file.",
            "YAML header configures; chunks run code; knit renders everything.",
            "echo=FALSE hides code; inline r live-updates numbers in sentences.",
            "Report flow: question ? data ? EDA ? tests ? conclusions.",
            "R careers: analyst, biostatistician, data scientist � portfolio reports win interviews.",
        ]),
  ],

{
    summary:
    "Produce reproducible analysis reports with R Markdown (YAML, chunks, inline code) and map R-based analytics career paths.",
        minutes: 12,
            tags: ["r-markdown", "reporting", "reproducibility", "careers", "important"],

                mcqs: [
                    mcq(
                        "The primary benefit of R Markdown over copy-pasting results into Word is:",
                        ["Prettier fonts", "Full reproducibility � rerunning updates every number and chart", "Faster internet", "No coding needed"],
                        1,
                        "One source file regenerates the entire report on new data."
                    ),
                    mcq(
                        "Which chunk option hides the CODE but keeps its output?",
                        ["include=FALSE", "echo=FALSE", "eval=FALSE", "results='hide'"],
                        1,
                        "echo=FALSE runs and shows output; include=FALSE shows nothing."
                    ),
                    mcq(
                        "Inline code like `r mean(df$x)` inside a sentence:",
                        ["Prints as text", "Evaluates live during knit, embedding the current value", "Creates a plot", "Comments the line"],
                        1,
                        "Numbers in prose update automatically with the data."
                    ),
                    mcq(
                        "R is THE industry standard language in which field?",
                        ["Game development", "Clinical trials / biostatistics", "Mobile apps", "Operating systems"],
                        1,
                        "FDA submissions and pharma research run on R."
                    ),
                ],

                    questions: [
                        qa(
                            "What is R Markdown? Explain its structure and why reproducibility is its superpower.",
                            "R Markdown is a document format merging three things: a YAML metadata header (title, author, output format), prose written in Markdown, and executable R code chunks delimited by triple backticks. Pressing Knit executes every chunk top-to-bottom and weaves code outputs � tables, statistics, ggplots � inline with the narrative, exporting HTML/PDF/Word/slides. Its superpower is REPRODUCIBILITY: the report IS the analysis. When next month's data arrives, re-knitting regenerates every number, chart, and conclusion automatically � no stale screenshots, no transcription errors, no 'which version is final?' chaos. Inline code (r mean(df$x), embeds live values inside sentences, so prose can never contradict the data. For teams, the single .Rmd file doubles as documentation, audit trail, and communication � which is exactly why it's the standard deliverable for R analysts everywhere from banks to pharma labs.",
                            4
                        ),
                        qa(
                            "Design the structure of a professional R Markdown report analyzing whether coaching improves student marks.",
                            "(1) YAML header: title 'Effect of Coaching on Student Marks', author, date, html_document output. (2) Introduction: the business question � 'Do coached students score higher?' � and the approach (paired comparison, since we measure the same students pre/post). (3) Data: chunk loading read_csv with str() and summary() outputs shown, plus a note on collection. (4) Cleaning chunk (include=FALSE): NA handling, verified score ranges. (5) EDA: histogram of score differences; boxplot of before vs after (echo=FALSE, each plot followed by one interpretation sentence � 'the post-coaching box shifts visibly upward'). (6) Formal test: paired t-test chunk � t.test(after, before, paired = TRUE) � reporting t, df, p-value, and the 95% CI of the difference in prose via inline code. (7) Conclusion: plain-language answer with effect size ('coaching adds an estimated X marks, p = ...'), plus caveats (no control group � observational). (8) Appendix: full unfiltered code. Knit ? one HTML artifact answering the question end-to-end, reproducible by any colleague.",
                            4
                        ),
                    ],
  }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit2Topics = [
    descriptiveStats,
    probabilityDistributions,
    hypothesisTesting,
    correlationRegression,
    rMarkdownCareers,
];
