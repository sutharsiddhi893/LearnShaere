import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { readFromStorage, writeToStorage, generateId } from "../utils/storage";
import { seedCategories, seedCourses, seedQuizzes } from "../data/legacy/seed";

const STORAGE_KEYS = {
    categories: "sg.categories.v2",
    courses: "sg.courses.v2",
    quizzes: "sg.quizzes.v2",
    quizAttempts: "sg.attempts.v1",
};

const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
    const [categories, setCategories] = useState(() =>
        readFromStorage(STORAGE_KEYS.categories, seedCategories),
    );
    const [courses, setCourses] = useState(() =>
        readFromStorage(STORAGE_KEYS.courses, seedCourses),
    );
    const [quizzes, setQuizzes] = useState(() =>
        readFromStorage(STORAGE_KEYS.quizzes, seedQuizzes),
    );
    const [quizAttempts, setQuizAttempts] = useState(() =>
        readFromStorage(STORAGE_KEYS.quizAttempts, []),
    );

    useEffect(() => writeToStorage(STORAGE_KEYS.categories, categories), [categories]);
    useEffect(() => writeToStorage(STORAGE_KEYS.courses, courses), [courses]);
    useEffect(() => writeToStorage(STORAGE_KEYS.quizzes, quizzes), [quizzes]);
    useEffect(() => writeToStorage(STORAGE_KEYS.quizAttempts, quizAttempts), [quizAttempts]);

    /* ------------------------------- Categories ----------------------------- */
    const addCategory = ({ name, icon }) => {
        if (!name || !name.trim()) return null;
        const category = {
            id: generateId("cat"),
            name: name.trim(),
            slug: name.trim().toLowerCase().replace(/\s+/g, "-"),
            icon: icon || "fa-tag",
        };
        setCategories((prev) => [...prev, category]);
        return category;
    };

    /* --------------------------------- Courses ------------------------------ */
    const addCourse = (course) => {
        if (!course || !course.title || !course.categoryId) return null;
        const newCourse = {
            id: generateId("course"),
            title: course.title.trim(),
            subtitle: (course.subtitle || "").trim(),
            categoryId: course.categoryId,
            level: course.level || "Beginner",
            duration: course.duration || "—",
            instructor: (course.instructor || "Anonymous").trim(),
            cover: course.cover || "",
            description: (course.description || "").trim(),
            lessons: [],
        };
        setCourses((prev) => [...prev, newCourse]);
        return newCourse;
    };

    /* --------------------------------- Lessons ------------------------------ */
    const addLesson = (courseId, lesson) => {
        if (!courseId || !lesson || !lesson.title) return null;
        const newLesson = {
            id: generateId("lesson"),
            title: lesson.title.trim(),
            content: (lesson.content || "").trim(),
            duration: lesson.duration || "10 min",
        };
        setCourses((prev) =>
            prev.map((c) =>
                c.id === courseId ? { ...c, lessons: [...c.lessons, newLesson] } : c,
            ),
        );
        return newLesson;
    };

    /* --------------------------------- Quizzes ------------------------------ */
    const addQuiz = (quiz) => {
        if (!quiz || !quiz.title) return null;
        const newQuiz = {
            id: generateId("quiz"),
            title: quiz.title.trim(),
            description: (quiz.description || "").trim(),
            courseId: quiz.courseId || null,
            questions: [],
        };
        setQuizzes((prev) => [...prev, newQuiz]);
        return newQuiz;
    };

    const addQuestion = (quizId, question) => {
        if (!quizId || !question || !question.text) return null;
        const cleanOptions = (question.options || []).filter((o) => o && o.trim());
        if (cleanOptions.length < 2) return null;
        const correctIndex = Math.min(
            Math.max(0, Number(question.correctIndex) || 0),
            cleanOptions.length - 1,
        );
        const newQ = {
            id: generateId("q"),
            text: question.text.trim(),
            options: cleanOptions,
            correctIndex,
        };
        setQuizzes((prev) =>
            prev.map((q) => (q.id === quizId ? { ...q, questions: [...q.questions, newQ] } : q)),
        );
        return newQ;
    };

    /* ------------------------------- Attempts ------------------------------- */
    const recordAttempt = (attempt) => {
        setQuizAttempts((prev) => [
            { id: generateId("attempt"), createdAt: new Date().toISOString(), ...attempt },
            ...prev,
        ]);
    };

    const resetToSeed = () => {
        setCategories(seedCategories);
        setCourses(seedCourses);
        setQuizzes(seedQuizzes);
        setQuizAttempts([]);
    };

    const value = useMemo(
        () => ({
            categories,
            courses,
            quizzes,
            quizAttempts,
            addCategory,
            addCourse,
            addLesson,
            addQuiz,
            addQuestion,
            recordAttempt,
            resetToSeed,
        }),
        [categories, courses, quizzes, quizAttempts],
    );

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useApp = () => {
    const ctx = useContext(AppContext);
    if (!ctx) throw new Error("useApp must be used within AppProvider");
    return ctx;
};
