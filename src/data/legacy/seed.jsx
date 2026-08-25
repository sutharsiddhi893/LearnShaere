/**
 * Seed data used the first time the app loads (when localStorage is empty).
 */

export const seedCategories = [
    { id: "cat_web", name: "Web Development", slug: "web", icon: "fa-code" },
    { id: "cat_data", name: "Data Science", slug: "data", icon: "fa-chart-line" },
    { id: "cat_design", name: "Design & UX", slug: "design", icon: "fa-pen-nib" },
    { id: "cat_ai", name: "AI & Machine Learning", slug: "ai", icon: "fa-brain" },
];

export const seedCourses = [
    {
        id: "course_react_fundamentals",
        title: "React Fundamentals",
        subtitle: "Master modern React from components to hooks.",
        categoryId: "cat_web",
        level: "Beginner",
        duration: "6 hours",
        instructor: "Ada Chen",
        cover: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNzl8MHwxfHNlYXJjaHwyfHxhYnN0cmFjdCUyMGdlb21ldHJpYyUyMGFyY2hpdGVjdHVyZSUyMGRhcmt8ZW58MHx8fHwxNzg1MzkwNzQwfDA&ixlib=rb-4.1.0&q=85",
        description:
            "A hands-on introduction to building interactive user interfaces with React. Learn JSX, props, state, hooks, and how to structure real applications.",
        lessons: [
            {
                id: "lesson_react_1",
                title: "What is React?",
                content:
                    "React is a declarative JavaScript library for building user interfaces. Components let you split UI into independent, reusable pieces.",
                duration: "12 min",
            },
            {
                id: "lesson_react_2",
                title: "JSX & Components",
                content:
                    "JSX is a syntax extension that lets you write markup inside JavaScript. Components can be defined as functions that return JSX.",
                duration: "18 min",
            },
            {
                id: "lesson_react_3",
                title: "State & Hooks",
                content:
                    "The useState hook lets function components hold state. useEffect handles side-effects like data fetching and subscriptions.",
                duration: "22 min",
            },
        ],
    },
    {
        id: "course_python_data",
        title: "Python for Data Analysis",
        subtitle: "Wrangle, explore, and visualize data with Python.",
        categoryId: "cat_data",
        level: "Intermediate",
        duration: "8 hours",
        instructor: "Marcus Reed",
        cover: "https://images.pexels.com/photos/12623752/pexels-photo-12623752.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        description:
            "Learn to work with real datasets using Pandas, NumPy, and Matplotlib. Turn raw data into actionable insight through structured analysis workflows.",
        lessons: [
            {
                id: "lesson_py_1",
                title: "Pandas DataFrames",
                content:
                    "A DataFrame is a 2D labeled structure. It is the primary object you will work with for tabular data in Pandas.",
                duration: "20 min",
            },
            {
                id: "lesson_py_2",
                title: "Data Cleaning",
                content:
                    "Real world data is messy. You will learn to handle missing values, duplicates, type conversion, and outliers.",
                duration: "25 min",
            },
        ],
    },
    {
        id: "course_ui_principles",
        title: "UI Design Principles",
        subtitle: "The visual craft behind great interfaces.",
        categoryId: "cat_design",
        level: "Beginner",
        duration: "4 hours",
        instructor: "Lila Okafor",
        cover: "https://images.unsplash.com/photo-1472803828399-39d4ac53c6e5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNzl8MHwxfHNlYXJjaHwzfHxhYnN0cmFjdCUyMGdlb21ldHJpYyUyMGFyY2hpdGVjdHVyZSUyMGRhcmt8ZW58MHx8fHwxNzg1MzkwNzQwfDA&ixlib=rb-4.1.0&q=85",
        description:
            "Understand hierarchy, contrast, spacing, and typography. Learn to make interfaces that feel intentional — not accidental.",
        lessons: [
            {
                id: "lesson_ui_1",
                title: "Visual Hierarchy",
                content:
                    "Guide the eye by controlling size, weight, and color. The most important element must feel the most important.",
                duration: "15 min",
            },
            {
                id: "lesson_ui_2",
                title: "Typography Systems",
                content:
                    "Two typefaces are usually enough. Establish a scale, respect line-height, and let type do the heavy lifting.",
                duration: "18 min",
            },
        ],
    },
    {
        id: "course_ml_intro",
        title: "Introduction to Machine Learning",
        subtitle: "From linear regression to neural networks.",
        categoryId: "cat_ai",
        level: "Intermediate",
        duration: "10 hours",
        instructor: "Dr. Elena Voss",
        cover: "https://images.unsplash.com/photo-1535905313417-483b22cb9d03?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsaWJyYXJ5JTIwZGFya3xlbnwwfHx8fDE3ODUzOTA3NDB8MA&ixlib=rb-4.1.0&q=85",
        description:
            "A conceptual and practical tour of core ML algorithms. You will train, evaluate, and reason about supervised models.",
        lessons: [
            {
                id: "lesson_ml_1",
                title: "Supervised vs Unsupervised",
                content:
                    "Supervised learning uses labeled data. Unsupervised learning discovers structure in unlabeled data.",
                duration: "20 min",
            },
        ],
    },
];

export const seedQuizzes = [
    {
        id: "quiz_react_basics",
        title: "React Basics",
        description: "Test your understanding of core React concepts.",
        courseId: "course_react_fundamentals",
        questions: [
            {
                id: "q_r_1",
                text: "What does JSX stand for?",
                options: [
                    "JavaScript XML",
                    "Java Syntax Extension",
                    "JSON with X",
                    "JavaScript Xtreme",
                ],
                correctIndex: 0,
            },
            {
                id: "q_r_2",
                text: "Which hook is used to manage local state?",
                options: ["useEffect", "useState", "useMemo", "useRef"],
                correctIndex: 1,
            },
            {
                id: "q_r_3",
                text: "What is the correct way to pass data to a child component?",
                options: ["Via state", "Via props", "Via localStorage", "Via context only"],
                correctIndex: 1,
            },
        ],
    },
    {
        id: "quiz_python_data",
        title: "Python Data Analysis",
        description: "How well do you know Pandas and data cleaning?",
        courseId: "course_python_data",
        questions: [
            {
                id: "q_p_1",
                text: "Which structure is 2-dimensional and labeled in Pandas?",
                options: ["Series", "DataFrame", "Index", "Array"],
                correctIndex: 1,
            },
            {
                id: "q_p_2",
                text: "Which method drops missing values?",
                options: ["fillna()", "dropna()", "isnull()", "clean()"],
                correctIndex: 1,
            },
        ],
    },
    {
        id: "quiz_ui_design",
        title: "UI Design Foundations",
        description: "Prove your grasp of visual design fundamentals.",
        courseId: "course_ui_principles",
        questions: [
            {
                id: "q_u_1",
                text: "What is the primary goal of visual hierarchy?",
                options: [
                    "To make things look busy",
                    "To guide attention",
                    "To use more colors",
                    "To fit more content",
                ],
                correctIndex: 1,
            },
            {
                id: "q_u_2",
                text: "How many typefaces are usually enough for a design system?",
                options: ["One", "Two", "Four", "As many as possible"],
                correctIndex: 1,
            },
        ],
    },
];

export const SEED = {
    categories: seedCategories,
    courses: seedCourses,
    quizzes: seedQuizzes,
    semesters: [],
    questions: [],
};

