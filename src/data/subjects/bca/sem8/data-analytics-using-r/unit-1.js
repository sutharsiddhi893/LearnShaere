/* =========================================================
   BCA � SEM 8 � Data Analytics Using R Language
   UNIT 1 � R Fundamentals, Data Structures, Wrangling & Visualization
========================================================= */

import {
  createTopic,
  heading,
  list,
  code,
  table,
  note,
  definition,
  keyPoints,
  mcq,
  qa,
} from "../../../../helpers";

/* =========================================================
   TOPIC 1 � Introduction to R & RStudio
========================================================= */

const introToR = createTopic(
    "introduction-to-r-and-rstudio",
    "Introduction to R & RStudio",

    [
        definition(
            "R",
            "R is a free, open-source programming language and environment designed specifically for statistical computing, data analysis, and visualization, created by Ross Ihaka and Robert Gentleman at the University of Auckland in 1993."
        ),

        definition(
            "RStudio",
            "RStudio (now Posit) is the standard Integrated Development Environment for R, providing a script editor, console, environment viewer, and plotting pane in one interface."
        ),

        heading("Why R for Analytics"),

        list([
            "Built BY statisticians FOR statistics � every test you'll study is one function away.",
            "Free and open source � no licenses, huge community.",
            "15,000+ packages on CRAN covering every analysis imaginable.",
            "ggplot2 � arguably the best visualization system in any language.",
            "Industry standard in pharma, biostatistics, research, banking, and data journalism.",
        ]),

        heading("R vs Python for Analytics"),

        table(
            ["Criteria", "R", "Python"],
            [
                ["Born for", "Statistics & data analysis", "General-purpose programming"],
                ["Visualization", "ggplot2 � best-in-class", "Matplotlib/Seaborn � good"],
                ["Statistics depth", "Unmatched (every test exists)", "Solid via libraries"],
                ["ML/deep learning", "Good (caret/tidymodels)", "Stronger ecosystem"],
                ["Learning curve", "Unusual syntax initially", "Familiar syntax"],
                ["Used heavily in", "Research, pharma, biostatistics", "Tech, AI, production systems"],
            ]
        ),

        note(
            "It's not R vs Python � top analysts know BOTH. R for exploration/statistics, Python for production/ML. Learning one makes the second far easier.",
            "tip",
            "Not a War"
        ),

        heading("The RStudio Layout"),

        code(
            `+-----------------------------------------+
�              �   Environment / History  �
�   Script     +--------------------------�
�   Editor     �                          �
�   (write     �   Plots / Packages /     �
�    code)     �   Help / Viewer          �
+-----------------------------------------�
�   Console (run code, see results)       �
+-----------------------------------------+`,
            "text",
            "Four-pane workspace"
        ),

        heading("First Code � Syntax Essentials"),

        code(
            `# Assignment: <- is the R way (Alt + - shortcut)
x <- 42
name <- "BCA Student"

# Everything is a vector at heart
scores <- c(78, 85, 92, 66, 88)

# Instant statistics!
mean(scores)      # 81.8
median(scores)   # 85
sd(scores)       # 10.5...

# Comments use #
# Printing happens automatically in console
scores * 2       # vectorized � no loops needed`,
            "r",
            "Your first R lines"
        ),

        heading("Packages � R's Superpower"),

        code(
            `install.packages("dplyr")   # once, downloads from CRAN
library(dplyr)             # every session, loads it

# The tidyverse: a bundle of the
# essential analytics packages
install.packages("tidyverse")
library(tidyverse)`,
            "r",
            "Installing and loading packages"
        ),

        heading("Getting Help"),

        code(
            `?mean            # help page for a function
??regression     # search all help for a keyword
help.search("anova")

# Built-in datasets for practice
data()                       # list all
head(iris)                   # first 6 rows of famous iris data
summary(mtcars$mpg)          # instant stats`,
            "r",
            "Help functions and built-in datasets"
        ),

        keyPoints([
            "R was created by Ihaka & Gentleman (1993) for statistical computing.",
            "RStudio is the standard IDE: editor + console + environment + plots.",
            "R is vectorized � operations apply to whole vectors without loops.",
            "CRAN hosts 15,000+ packages; install.packages() then library().",
            "Built-in datasets (iris, mtcars) are perfect practice grounds.",
        ]),
    ],

    {
        summary:
            "Understand R's purpose, RStudio's layout, basic vectorized syntax, package management, and help system.",
        minutes: 11,
        tags: ["r", "rstudio", "introduction", "packages", "important"],

        mcqs: [
            mcq(
                "R was created by:",
                ["Ross Ihaka and Robert Gentleman", "Guido van Rossum", "John Chambers only", "Hadley Wickham"],
                0,
                "Ihaka and Gentleman created R at the University of Auckland in 1993."
            ),
            mcq(
                "The standard function to LOAD an installed package in every session is:",
                ["install.packages()", "library()", "require.install()", "import()"],
                1,
                "install.packages() downloads once; library() loads it each session."
            ),
            mcq(
                "What does the expression c(1, 2, 3) * 2 return in R?",
                ["An error", "c(2, 4, 6) � vectorized operation", "3", "c(1, 2, 3)"],
                1,
                "R vectorizes: the operation applies element-wise automatically."
            ),
            mcq(
                "Which command shows the first 6 rows of the iris dataset?",
                ["iris.all()", "head(iris)", "top(iris)", "print(iris, 6)"],
                1,
                "head() previews the beginning; tail() shows the end."
            ),
        ],

        questions: [
            qa(
                "What is R? Explain its key features that make it suitable for data analytics.",
                "R is a free, open-source language and environment created by Ross Ihaka and Robert Gentleman (1993, University of Auckland) specifically for statistical computing and graphics. Key features: (1) Statistical DNA � it was built by statisticians, so every statistical test, distribution, and model is available as a ready function; (2) Vectorized operations � calculations apply to entire datasets without writing loops; (3) 15,000+ CRAN packages extending R into every domain; (4) ggplot2, a grammar-of-graphics visualization system widely considered the best plotting engine anywhere; (5) Reproducible research via R Markdown, mixing code, results, and narrative in one document; (6) Completely free and open source with a massive community. These traits make R the default choice in pharmaceuticals, biostatistics, academia, banking research, and data journalism.",
                4
            ),
            qa(
                "Describe the RStudio interface and the difference between the script editor and the console.",
                "RStudio organizes work into four panes. Top-left: the Script Editor � where you write and save reusable .R files; code is sent to run with Ctrl+Enter and persists across sessions, forming the permanent record of an analysis. Bottom-left: the Console � an interactive command line where commands execute immediately and results print; ideal for quick experiments, but commands are lost when the session ends. Top-right: Environment/History pane � lists every created variable, its structure, and command history. Bottom-right: the multi-tab pane � Plots (rendered graphics), Packages (installer/loader), Help (documentation), and Viewer (HTML outputs). Professional workflow: explore interactively in the console, then promote working commands into scripts � ensuring every analysis is reproducible rather than a lost sequence of clicks.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 � Data Types & Data Structures in R
========================================================= */

const dataStructures = createTopic(
    "data-types-and-data-structures-in-r",
    "Data Types & Data Structures in R",

    [
        definition(
            "Data Structure",
            "A data structure in R is a way of organizing data in memory � R provides vectors, lists, matrices, arrays, factors, and data frames, each suited to different shapes of data."
        ),

        heading("Basic Data Types"),

        code(
            `class(42)        # "numeric"
class(4.5)       # "numeric"
class(4L)        # "integer"  (L suffix)
class("BCA")     # "character"
class(TRUE)      # "logical"
class(2 + 3i)    # "complex"`,
            "r",
            "The atomic types"
        ),

        heading("1. Vectors � The Atom of R"),

        code(
            `# All elements must be ONE type (coercion otherwise!)
scores <- c(78, 85, 92, 66)
names  <- c("Amit", "Neha", "Karan", "Riya")

# Indexing starts at 1 (not 0!)
scores[1]          # 78
scores[c(1, 3)]    # 78, 92
scores[-2]         # all EXCEPT 2nd
names[scores > 80] # names where condition TRUE

# Named vectors
marks <- c(Amit = 78, Neha = 85)
marks["Neha"]      # 85`,
            "r",
            "Vector creation and indexing"
        ),

        note(
            "The classic Python-to-R shock: R indexes from 1, not 0. scores[1] is the FIRST element, and scores[0] returns an empty vector.",
            "warning",
            "1-Based Indexing"
        ),

        heading("2. Lists � Containers of Anything"),

        code(
            `student <- list(
    name  = "Rahul",
    marks = c(88, 76, 91),
    passed = TRUE
)

student$name          # "Rahul"
student$marks[2]      # 76
student[["marks"]]    # same via [[ ]]
# [ ] returns a sub-list; [[ ]] / $ digs INSIDE`,
            "r",
            "Lists hold mixed types"
        ),

        heading("3. Matrices � 2D, One Type"),

        code(
            `m <- matrix(1:6, nrow = 2, ncol = 3)
#      [,1] [,2] [,3]
# [1,]    1    3    5
# [2,]    2    4    6

m[1, 2]     # row 1, col 2 ? 3
m[, 3]      # entire column 3
t(m)        # transpose
m %*% t(m)  # matrix multiplication`,
            "r",
            "Matrix operations"
        ),

        heading("4. Factors � Categorical Data"),

        code(
            `blood <- factor(c("A", "B", "O", "A", "B"),
# Levels: A B O   ? stored as integers
#         1  2  3   with labels!

table(blood)          # frequency counts
# A B O
# 2 2 1

# ORDERED factor (ordinal)
temp <- factor(c("Low","High","Medium"),
               levels = c("Low","Medium","High"),
               ordered = TRUE)
temp[1] < temp[2]     # TRUE � meaningful order`,
            "r",
            "Categories with memory"
        ),

        heading("5. Data Frames � The Analytics Workhorse"),

        definition(
            "Data Frame",
            "A data frame is R's spreadsheet-like structure: rows of observations, columns of variables, where each column may hold a DIFFERENT data type � the structure every real dataset loads into."
        ),

        code(
            `students <- data.frame(
    roll = 1:4,
    name = c("Amit", "Neha", "Karan", "Riya"),
    marks = c(78, 92, 66, 88),
    stream = factor(c("BCA","BCA","BBA","BCA"),
)

str(students)        # structure � first command on ANY data
# 4 obs. of 4 variables

students$marks               # one column as vector
students[2, ]                # row 2
students[students$marks > 80, ]   # conditional row filter
students[, "name"]           # column by name

nrow(students)   # 4 rows
ncol(students)   # 4 columns
names(students)  # column names`,
            "r",
            "Creating and slicing data frames"
        ),

        heading("Structure Comparison"),

        table(
            ["Structure", "Dimensions", "Mixed Types?", "Use For"],
            [
                ["Vector", "1D", "No", "Single variable's values"],
                ["List", "1D", "Yes", "Grouped unrelated objects"],
                ["Matrix", "2D", "No", "Numeric grids, math"],
                ["Factor", "1D", "No (levels)", "Categorical variables"],
                ["Data frame", "2D", "Yes (per column)", "Real datasets!"],
            ]
        ),

        keyPoints([
            "Atomic types: numeric, integer, character, logical, complex.",
            "Vectors hold one type; index from 1; -i excludes.",
            "Lists hold anything; $ or [[ ]] access contents.",
            "Factors encode categories as integer levels (+ optional ordering).",
            "Data frames = spreadsheets: different types per column; str() first!",
        ]),
  ],

{
    summary:
    "Master R's building blocks: vectors, lists, matrices, factors, and data frames � with indexing rules and type systems.",
        minutes: 13,
            tags: ["vectors", "lists", "factors", "data-frames", "data-structures", "important"],

                mcqs: [
                    mcq(
                        "Which R structure allows DIFFERENT data types in different columns?",
                        ["Matrix", "Vector", "Data frame", "Array"],
                        2,
                        "Data frames mix types per column � matrices and vectors cannot."
                    ),
                    mcq(
                        "What does c(10, 20, 30)[2] return in R?",
                        ["10", "20", "30", "Error"],
                        1,
                        "R is 1-indexed: position 2 is the second element, 20."
                    ),
                    mcq(
                        "A factor in R internally stores categories as:",
                        ["Text strings", "Integer codes with level labels", "Lists", "Matrices"],
                        1,
                        "Factors map each value to an integer level � memory-efficient categories."
                    ),
                    mcq(
                        "The first command you should run on any newly loaded data frame is:",
                        ["plot(df)", "str(df)", "rm(df)", "install.packages(df)"],
                        1,
                        "str() reveals types, dimensions, and sample values instantly."
                    ),
                ],

                    questions: [
                        qa(
                            "Explain the five main data structures in R with one use case each.",
                            "(1) Vector: 1-D container of ONE type � a single variable like marks <- c(78, 85, 92); supports vectorized math and logical filtering. (2) List: 1-D container of ANYTHING mixed � student <- list(name='Rahul', marks=c(88,76), passed=TRUE) groups unrelated objects, returned by many statistical functions. (3) Matrix: 2-D grid of one type � storing a correlation matrix or transition grid; supports algebra like t() and %*%. (4) Factor: categorical encoder � blood types, gender, city stored as integer levels behind labels; table(factor) gives instant frequencies; ordered factors add meaningful comparison (Low < High). (5) Data frame: the analytics workhorse � 2-D like a spreadsheet where each column carries its own type (numeric marks, character names, factor streams); every read.csv() produces one, and virtually all analysis operates on data frames.",
                            4
                        ),
                        qa(
                            "Differentiate a vector, list, and data frame. Why is the data frame central to analytics in R?",
                            "Vector: homogeneous 1-D � every element must be the same type; assigning c(1, 'a') silently coerces everything to character. List: heterogeneous 1-D � elements may be any type or structure (numbers, strings, vectors, even other lists), accessed via $name or [[index]]. Data frame: a special list of equal-length vectors presented as a 2-D table � so columns may differ in type but rows stay aligned like a spreadsheet. The data frame is central because REAL data is rectangular and mixed: read.csv() loads CSVs directly into data frames; dplyr verbs, ggplot2 aesthetics, lm(), t.test() � essentially every analytical function � accepts a data frame and a column reference. Master subsetting (df[rows, cols], df$col, df[df$col > 80, ]) and you can explore any dataset in R.",
                            4
                        ),
                    ],
  }
);

/* =========================================================
   TOPIC 3 � Data Import, Cleaning & dplyr Wrangling
========================================================= */

const dplyrWrangling = createTopic(
    "data-import-cleaning-and-dplyr",
    "Data Import, Cleaning & dplyr Wrangling",

    [
        definition(
            "Data Wrangling",
            "Data wrangling (munging) is the process of importing, cleaning, transforming, and reshaping raw data into a tidy, analysis-ready form � typically 70-80% of an analyst's time."
        ),

        heading("Importing Data"),

        code(
            `# CSV (most common)
df <- read.csv("students.csv")

# Tidyverse faster version
library(readr)
df <- read_csv("students.csv")

# Excel
library(readxl)
df <- read_excel("marks.xlsx", sheet = 1)

# Built-in for practice
data(mtcars); df <- mtcars`,
            "r",
            "Reading files into data frames"
        ),

        heading("First-Look Toolkit"),

        code(
            `str(df)          # structure: types + sample values
head(df, 10)     # first 10 rows
summary(df)      # per-column statistics
dim(df)          # rows � columns
names(df)        # column names
any(is.na(df),   # any missing values?
colSums(is.na(df),  # missing count per column`,
            "r",
            "Inspect before touching"
        ),

        heading("Cleaning Common Problems"),

        code(
            `# 1. Missing values
sum(is.na(df$marks),          # count NA
df <- df[!is.na(df$marks), ]  # drop rows with NA marks
df$marks[is.na(df$marks)] <- median(df$marks, na.rm = TRUE)

# 2. Fix column types
df$roll   <- as.integer(df$roll)
df$stream <- as.factor(df$stream)

# 3. Duplicates
sum(duplicated(df),
df <- distinct(df)

# 4. Text cleanup
df$name <- trimws(df$name)            # strip spaces
df$name <- tolower(df$name)`,
            "r",
            "The cleaning checklist"
        ),

        heading("dplyr � The Grammar of Data Manipulation"),

        definition(
            "dplyr",
            "dplyr is the tidyverse package providing five intuitive verbs � filter, select, mutate, arrange, summarise � that together cover nearly all data transformation needs, chainable with the pipe operator %>%."
        ),

        table(
            ["Verb", "Purpose", "SQL Analogy"],
            [
                ["filter()", "Pick ROWS by condition", "WHERE"],
                ["select()", "Pick COLUMNS", "SELECT"],
                ["mutate()", "Create/transform columns", "computed column"],
                ["arrange()", "Sort rows", "ORDER BY"],
                ["group_by() + summarise()", "Aggregate per group", "GROUP BY"],
            ]
        ),

        heading("The Pipe Operator %>/%|%"),

        code(
            `# The pipe sends data INTO the next function:
result <- df %>%
  filter(marks > 60) %>%
  group_by(stream) %>%
  summarise(
    avg = mean(marks),
    n   = n()
  ) %>%
  arrange(desc(avg),

# Reads top-to-bottom like a recipe:
# "take df, THEN filter, THEN group, THEN summarize, THEN sort"`,
            "r",
            "Readable pipelines"
        ),

        heading("The Five Verbs in Action"),

        code(
            `library(dplyr)

# 1. filter � rows
toppers <- students %>% filter(marks >= 85, stream == "BCA")

# 2. select � columns
lean <- students %>% select(name, marks)

# 3. mutate � new columns
students <- students %>% mutate(
    grade   = ifelse(marks >= 75, "Distinction", "Pass"),
    z_score = scale(marks)
)

# 4. arrange � sort
students %>% arrange(desc(marks),

# 5. group_by + summarise � the analytics workhorse
students %>%
  group_by(stream) %>%
  summarise(
    count    = n(),
    avg      = mean(marks),
    max_mark = max(marks),
    .groups  = "drop"
  )`,
            "r",
            "All five verbs demonstrated"
        ),

        heading("Other Tidy Data Tools"),

        list([
            "tidyr::pivot_longer() � wide ? long (untidy to tidy).",
            "tidyr::pivot_wider() � long ? wide.",
            "left_join(df1, df2, by = \"id\") � merge tables like SQL JOIN.",
            "ifelse() / case_when() � conditional columns.",
        ]),

        note(
            "Analyst's truth: wrangling is 80% of the project. The analysis question is often settled the moment the data finally becomes tidy.",
            "info",
            "The 80% Rule"
        ),

        keyPoints([
            "read_csv/read_excel import; str() + summary() inspect immediately.",
            "Clean: handle NA, fix types, deduplicate, trim text.",
            "dplyr five verbs: filter, select, mutate, arrange, summarise.",
            "The pipe %>% chains steps into readable pipelines.",
            "group_by() + summarise() = SQL's GROUP BY for analytics.",
        ]),
  ],

{
    summary:
    "Import and clean data, then master dplyr's five verbs and the pipe operator to build readable analysis pipelines.",
        minutes: 13,
            tags: ["dplyr", "tidyverse", "data-cleaning", "pipe", "wrangling", "important"],

                mcqs: [
                    mcq(
                        "Which dplyr verb picks ROWS matching a condition?",
                        ["select()", "filter()", "mutate()", "arrange()"],
                        1,
                        "filter() keeps rows (WHERE); select() picks columns."
                    ),
                    mcq(
                        "The pipe operator %>% does what?",
                        ["Multiplies columns", "Sends the left-hand result into the next function", "Imports packages", "Plots data"],
                        1,
                        "df %>% f() is equivalent to f(df) � enabling readable chains."
                    ),
                    mcq(
                        "To compute average marks PER STREAM, you combine:",
                        ["arrange + select", "group_by + summarise", "filter + mutate", "str + summary"],
                        1,
                        "group_by(stream) then summarise(avg = mean(marks), � SQL's GROUP BY."
                    ),
                    mcq(
                        "median(df$x, na.rm = TRUE) � why the na.rm argument?",
                        ["Speeds up calculation", "Excludes missing values from the computation", "Removes the column", "Rounds results"],
                        1,
                        "Without na.rm=TRUE, any NA makes the result NA."
                    ),
                ],

                    questions: [
                        qa(
                            "Explain dplyr's five main verbs with examples.",
                            "(1) filter() � selects ROWS meeting conditions: students %>% filter(marks >= 85, stream == 'BCA') keeps only distinction BCA students (SQL WHERE). (2) select() � picks COLUMNS: select(name, marks) keeps a lean table (SQL SELECT). (3) mutate() � creates or transforms columns: mutate(grade = ifelse(marks >= 75, 'Distinction', 'Pass'), adds a derived variable while keeping originals. (4) arrange() � sorts rows: arrange(desc(marks), ranks toppers first (ORDER BY). (5) summarise() � collapses many rows into one statistic: summarise(avg = mean(marks),; combined with group_by() it produces per-group statistics � group_by(stream) %>% summarise(avg = mean(marks), n = n(), gives each stream's average and count, exactly like GROUP BY in SQL. Chained with pipes, these five verbs express nearly every data transformation an analyst performs.",
                            4
                        ),
                        qa(
                            "Describe a complete data-cleaning workflow for a freshly imported CSV in R.",
                            "(1) Inspect first: str(df) reveals column types and hidden problems (marks imported as character means stray text!); summary(df) exposes impossible values; colSums(is.na(df), counts missingness; duplicated(df) detects repeats. (2) Handle missing values: for critical fields drop rows � df <- df[!is.na(df$marks), ]; for others impute � df$age[is.na(df$age)] <- median(df$age, na.rm = TRUE); ALWAYS pass na.rm = TRUE in statistics. (3) Fix types: as.numeric(), as.integer(), as.factor() convert misread columns; dates need as.Date(col, format='%d-%m-%Y'). (4) Deduplicate: df <- distinct(df). (5) Normalize text: trimws(), tolower(), and recode inconsistent spellings ('BCA ' vs 'bca') � often via recode() or case_when(). (6) Sanity-check ranges: filter(df, marks < 0 | marks > 100) finds impossible values for review. (7) Document every step in a script so the cleaning is reproducible � cleaning decisions ARE analysis decisions.",
                            4
                        ),
                    ],
  }
);

/* =========================================================
   TOPIC 4 � Data Visualization with ggplot2
========================================================= */

const ggplotVisualization = createTopic(
    "data-visualization-with-ggplot2",
    "Data Visualization with ggplot2",

    [
        definition(
            "ggplot2",
            "ggplot2 is R's visualization package implementing the 'Grammar of Graphics' � building plots from layers: data, aesthetic mappings, geometric objects, scales, and themes."
        ),

        heading("The Grammar Template"),

        code(
            `ggplot(data = df,            # 1. DATA
       aes(x = stream,            # 2. AESTHETICS
           y = marks,
           fill = stream), +
    geom_col() +                  # 3. GEOMETRY (bars)
    labs(title = "Marks by Stream",
         x = "Stream", y = "Marks") +
    theme_minimal()               # 4. THEME

# Every ggplot = data + aes + geom(s)
# Layers added with +  (never %>%!)`,
            "r",
            "The universal recipe"
        ),

        heading("Choosing the Right Geometry"),

        table(
            ["Question", "Geom", "Example"],
            [
                ["Distribution of one numeric?", "geom_histogram / geom_density", "How are marks spread?"],
                ["Compare groups?", "geom_col / geom_boxplot", "BCA vs BBA averages"],
                ["Relationship of 2 numerics?", "geom_point", "Hours vs marks"],
                ["Trend over time?", "geom_line", "Monthly sales"],
                ["Counts of categories?", "geom_bar", "Students per stream"],
            ]
        ),

        heading("Core Plots in Practice"),

        code(
            `library(ggplot2)

# 1. Scatter � relationship
ggplot(students, aes(x = hours, y = marks), +
    geom_point(color = "steelblue", size = 3) +
    geom_smooth(method = "lm")     # adds regression line

# 2. Histogram � distribution shape
ggplot(students, aes(x = marks), +
    geom_histogram(binwidth = 5, fill = "tomato")

# 3. Boxplot � group compare + outliers
ggplot(students, aes(x = stream, y = marks, fill = stream), +
    geom_boxplot()

# 4. Bar � counts/means per category
ggplot(students, aes(x = stream), +
    geom_bar(fill = "seagreen")

# 5. Facets � small multiples!
ggplot(students, aes(x = marks), +
    geom_histogram() +
    facet_wrap(~stream)            # one panel per stream`,
            "r",
            "The analyst's five charts"
        ),

        heading("Reading a Boxplot"),

        code(
            `        +-- max (within whiskers)
        �
     ---�  ? Q3 (75th percentile)
      � �
 med -�  ? median (50th)
      � �
     ---�  ? Q1 (25th percentile)
        �
        +-- min
  ?        ? outlier (beyond 1.5�IQR)

Box = middle 50% (IQR); line = median;
whiskers = normal range; dots = outliers.`,
            "text",
            "Boxplot anatomy"
        ),

        heading("Customization Layers"),

        code(
            `ggplot(students, aes(x = hours, y = marks, color = stream), +
    geom_point(size = 3) +
    labs(
        title    = "Study Hours vs Marks",
        subtitle = "Semester 8 results",
        x = "Hours studied", y = "Marks",
        caption = "Source: college DB"
    ) +
    scale_color_brewer(palette = "Set2") +
    theme_minimal(base_size = 14) +
    theme(legend.position = "bottom")

# Save any plot
ggsave("chart.png", width = 8, height = 5, dpi = 300)`,
            "r",
            "Polishing for reports"
        ),

        note(
            "Golden rule of EDA visualization: ONE question per plot. If your chart needs three titles to explain, it's three charts wearing a trench coat.",
            "tip",
            "One Question Per Plot"
        ),

        keyPoints([
            "ggplot2 builds plots in layers: data ? aes ? geom + labels + theme.",
            "Match geom to question: histogram=distribution, point=relationship, box=groups.",
            "facet_wrap() splits into small multiples by a category.",
            "Boxplots show median, IQR, whiskers, and outliers at a glance.",
            "ggsave() exports publication-quality images.",
        ]),
  ],

{
    summary:
    "Build layered graphics with ggplot2: the grammar template, essential geoms, facets, boxplot reading, and report-ready styling.",
        minutes: 13,
            tags: ["ggplot2", "visualization", "plots", "eda", "grammar-of-graphics", "important"],

                mcqs: [
                    mcq(
                        "In ggplot2, aes() defines:",
                        ["The plot title", "Aesthetic mappings � which columns map to x, y, color", "The file name", "The theme colors"],
                        1,
                        "aes() connects data columns to visual properties."
                    ),
                    mcq(
                        "To visualize the RELATIONSHIP between two numeric variables, use:",
                        ["geom_bar()", "geom_histogram()", "geom_point()", "geom_boxplot()"],
                        2,
                        "geom_point() creates a scatter plot; pairs naturally with geom_smooth()."
                    ),
                    mcq(
                        "In a boxplot, the box itself spans:",
                        ["Min to max", "Q1 to Q3 � the interquartile range (middle 50%)", "Mean � 2sd", "Only the median"],
                        1,
                        "The box is the IQR; the center line is the median; dots are outliers."
                    ),
                    mcq(
                        "Layers in ggplot2 are combined using:",
                        ["%>% (the pipe)", "+ (the plus operator)", "&", "c()"],
                        1,
                        "ggplot layers stack with +, while dplyr chains use %>%. Classic exam trap!"
                    ),
                ],

                    questions: [
                        qa(
                            "Explain the Grammar of Graphics concept behind ggplot2 with the layering template.",
                            "The Grammar of Graphics (Leland Wilkinson) treats plots as compositions of independent, stackable components rather than monolithic chart types. ggplot2 (Hadley Wickham) implements this: every plot begins ggplot(data, aes(...), declaring the DATA and AESTHETIC MAPPINGS � which columns drive x-position, y-position, color, size. GEOMS then add geometry layers � geom_point() renders each row as a dot, geom_smooth() overlays a trend line, geom_histogram() bins a variable � and multiple geoms can stack on the same mapping. Further layers refine: scales control axes/colors (scale_color_brewer), facets split panels by category (facet_wrap(~stream), labs() adds titles/labels, and themes style non-data ink (theme_minimal). Because layers are additive, complex charts evolve from simple ones � start with ggplot(df, aes(x,y), + geom_point(), then keep adding + layers until the plot answers its question precisely.",
                            4
                        ),
                        qa(
                            "A lecturer wants to compare marks distributions across four streams. Which plot do you recommend and why? Include the R code.",
                            "A boxplot is ideal � specifically ggplot(students, aes(x = stream, y = marks, fill = stream), + geom_boxplot(). Reasons: (1) Side-by-side boxes let the eye compare MEDIANS directly � the central line of each box; (2) the IQR boxes show spread � which stream is consistent vs volatile; (3) whiskers plus outlier dots expose extreme students that a mean-based bar chart would silently absorb; (4) it handles skew visibly � a lopsided box signals non-normal marks. Enhancement for presentations: overlay raw points with geom_jitter(alpha = 0.3) to show actual data behind the summary, and add stat_summary(fun = mean) to mark means as diamonds where they diverge from medians. A grouped histogram via facet_wrap(~stream) is the alternative when distribution SHAPE (multimodality) matters more than comparison of summaries.",
                            4
                        ),
                    ],
  }
);

/* =========================================================
   TOPIC 5 � Exploratory Data Analysis (EDA) Workflow
========================================================= */

const edaWorkflow = createTopic(
    "exploratory-data-analysis-workflow",
    "Exploratory Data Analysis (EDA) Workflow",

    [
        definition(
            "Exploratory Data Analysis",
            "EDA, coined by John Tukey, is the systematic first investigation of a dataset � summarizing its main characteristics, often visually � before formal modeling, to discover patterns, spot anomalies, and generate hypotheses."
        ),

        heading("The EDA Question Set"),

        code(
            `For EVERY dataset, interrogate:
1. How big?          ? dim(), nrow()
2. What types?       ? str()
3. Summary stats     ? summary()
4. What's missing?   ? colSums(is.na(),
5. Duplicates?       ? sum(duplicated(),
6. Distributions?    ? histograms
7. Relationships?    ? scatter, cor()
8. Group differences?? boxplots by category`,
            "text",
            "The interrogation checklist"
        ),

        heading("Complete EDA on mtcars"),

        code(
            `library(tidyverse)

# -- 1. STRUCTURE ----------------------------
str(mtcars)       # 32 obs, 11 numeric vars
head(mtcars)

# -- 2. UNIVARIATE (one variable) ------------
summary(mtcars$mpg)
# Min 10.4 | Median 19.2 | Max 33.9

sd(mtcars$mpg)                  # spread
hist(mtcars$mpg)                # right-skewed!

# -- 3. BIVARIATE (two variables) ------------
# numeric vs numeric
ggplot(mtcars, aes(wt, mpg), +
    geom_point() +
    geom_smooth(method = "lm")
# heavier car ? lower mileage (negative trend)

cor(mtcars$wt, mtcars$mpg)      # � -0.87 strong!

# numeric vs categorical
ggplot(mtcars, aes(factor(cyl), mpg, fill = factor(cyl),) +
    geom_boxplot()              # 8-cyl cars drink fuel

# -- 4. MULTIVARIATE (3+ variables) ----------
ggplot(mtcars, aes(wt, mpg,
                   color = factor(cyl),
                   size  = hp), +
    geom_point()                # cyl encodes color!
# Pattern: weight AND cylinders both drive mpg

# -- 5. ALL PAIRS AT ONCE --------------------
pairs(mtcars[, 1:6])            # scatterplot matrix
cor(mtcars)                     # full correlation matrix`,
            "r",
            "A full EDA in 30 lines"
        ),

        heading("Correlation Matrix Heatmap"),

        code(
            `library(reshape2)

cormat <- round(cor(mtcars), 2)
melted <- melt(cormat)

ggplot(melted, aes(Var1, Var2, fill = value), +
    geom_tile() +
    scale_fill_gradient2(low = "red",
                         mid = "white",
                         high = "blue",
                         midpoint = 0) +
    geom_text(aes(label = value), size = 3)`,
            "r",
            "Every relationship in one picture"
        ),

        heading("Spotting Outliers"),

        code(
            `# Z-score method: beyond �3 standard deviations
z <- scale(students$marks)
students[abs(z) > 3, ]        # show outliers

# IQR method (boxplot logic)
iqr_rule <- quantile(students$marks, c(.25, .75),
lower <- iqr_rule[1] - 1.5 * IQR(students$marks)
upper <- iqr_rule[2] + 1.5 * IQR(students$marks)
students[students$marks < lower | students$marks > upper, ]

# Always ask: error, or genuine extreme?`,
            "r",
            "Two standard detection methods"
        ),

        heading("EDA Deliverables"),

        list([
            "A clean, documented dataset (script = reproducible).",
            "5-10 headline charts answering business questions.",
            "A findings list: distributions, relationships, anomalies.",
            "Hypotheses to test formally (Unit 2's job!).",
        ]),

        note(
            "Tukey's wisdom: 'Far better an approximate answer to the RIGHT question than an exact answer to the WRONG question.' EDA finds the right questions.",
            "info",
            "Why EDA Comes First"
        ),

        keyPoints([
            "EDA interrogates structure, missingness, distributions, and relationships.",
            "Univariate ? bivariate ? multivariate, escalating complexity.",
            "cor() quantifies relationships; pairs() shows all at once.",
            "Detect outliers via z-scores (�3) or IQR fences (1.5�IQR).",
            "EDA output: clean data + charts + hypotheses for formal testing.",
        ]),
  ],

{
    summary:
    "Execute a complete EDA: structure checks, univariate/bivariate/multivariate exploration, correlation heatmaps, and outlier detection.",
        minutes: 13,
            tags: ["eda", "exploration", "correlation", "outliers", "tukey", "important"],

                mcqs: [
                    mcq(
                        "EDA was coined by which statistician?",
                        ["Ronald Fisher", "John Tukey", "Karl Pearson", "Hadley Wickham"],
                        1,
                        "Tukey's 1977 book 'Exploratory Data Analysis' defined the field."
                    ),
                    mcq(
                        "Using the IQR rule, an outlier lies beyond:",
                        ["Mean � 2 SD", "Q1 - 1.5�IQR or Q3 + 1.5�IQR", "Median � IQR", "Min/Max"],
                        1,
                        "The 1.5�IQR fences define boxplot whiskers; dots beyond are outliers."
                    ),
                    mcq(
                        "cor(mtcars$wt, mtcars$mpg) � -0.87 indicates:",
                        ["No relationship", "Strong NEGATIVE linear relationship", "Weak positive relationship", "Causation"],
                        1,
                        "Near -1 = strong inverse linearity � heavier cars, lower mileage."
                    ),
                    mcq(
                        "pairs(mtcars[, 1:5]) produces:",
                        ["Five histograms", "A scatterplot matrix of all variable pairs", "Boxplots", "A regression model"],
                        1,
                        "pairs() draws every pairwise scatter � the EDA overview tool."
                    ),
                ],

                    questions: [
                        qa(
                            "What is Exploratory Data Analysis? Outline the stages of a complete EDA workflow.",
                            "EDA � coined by John Tukey (1977) � is the disciplined first look at data: summarizing structure and distributions, mostly visually, BEFORE any formal modeling, to find patterns, anomalies, and generate testable hypotheses. Workflow stages: (1) Structure � str(), dim(), head(): dimensions, types, sample values; (2) Quality � colSums(is.na(), for missingness, duplicated() for repeats; (3) Univariate � summary(), sd(), histograms per numeric, bar charts per category: center, spread, skew; (4) Bivariate � scatter + cor() for numeric pairs, boxplots by category for group comparisons; (5) Multivariate � color/size encodings and facet grids revealing interactions (e.g., wt-mpg relationship differing by cylinder count); (6) Outliers � z-scores or IQR fences, each investigated: error or genuine extreme?; (7) Synthesis � documented script, headline charts, and a hypothesis list feeding formal statistical testing. EDA's product is not conclusions but WELL-FOUNDED questions.",
                            4
                        ),
                        qa(
                            "During EDA you find one student with marks = 980 among values of 40-100. Explain how to detect and handle such outliers in R.",
                            "Detection: (1) Visualization first � boxplot(students$marks) instantly flags the point as a dot beyond the whisker; (2) Z-score � z <- scale(students$marks); students[abs(z) > 3, ] flags values beyond 3 standard deviations � 980 would have |z| � 8+; (3) IQR fences � lower <- Q1 - 1.5�IQR, upper <- Q3 + 1.5�IQR; any value outside is an outlier. Handling � the decision requires judgment, not just code: (a) If it's a DATA-ENTRY error (980 instead of 98, verifiable against source records), CORRECT it � students$marks[students$marks == 980] <- 98; (b) If unexplainable and unfixable, EXCLUDE with documentation � df <- df[df$marks <= 100, ] � noting the removal in comments; (c) If it's a GENUINE extreme (a real topper scoring 100 while others cluster at 60), KEEP it � it's the signal, not noise; optionally use robust statistics (median, IQR) so it doesn't distort summaries. Never delete outliers silently: every exclusion changes results and must be justified in your report.",
                            4
                        ),
                    ],
  }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit1Topics = [
    introToR,
    dataStructures,
    dplyrWrangling,
    ggplotVisualization,
    edaWorkflow,
];
