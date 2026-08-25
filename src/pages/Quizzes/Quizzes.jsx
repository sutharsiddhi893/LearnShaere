import React from "react";
import { Link } from "react-router-dom";
import { useApp } from "../../context/AppContext";
import SectionHeader from "../../components/SectionHeader";
import Button from "../../components/Button";
import "./Quizzes.css";

const Quizzes = () => {
    const { quizzes, courses, quizAttempts } = useApp();

    const attemptsByQuiz = quizAttempts.reduce((acc, a) => {
        acc[a.quizId] = acc[a.quizId] || [];
        acc[a.quizId].push(a);
        return acc;
    }, {});

    const bestScore = (quizId) => {
        const list = attemptsByQuiz[quizId] || [];
        if (list.length === 0) return null;
        return Math.max(...list.map((a) => a.score));
    };

    const courseName = (courseId) => courses.find((c) => c.id === courseId)?.title;

    return (
        <div className="quizzes fade-up" data-testid="quizzes-page">
            <div className="container quizzes-header">
                <SectionHeader
                    eyebrow="Quiz library"
                    title="Test what you know — instantly."
                    description="Short, punchy multiple-choice quizzes. Track your best score locally and retake anytime."
                />
            </div>

            <div className="container quizzes-body">
                {quizzes.length === 0 ? (
                    <div className="quizzes-empty" data-testid="quizzes-empty">
                        <i className="fa-solid fa-clipboard-question"></i>
                        <h3>No quizzes yet.</h3>
                        <p>Come back soon — new quizzes are added regularly.</p>
                    </div>
                ) : (
                    <div className="quizzes-grid" data-testid="quizzes-grid">
                        {quizzes.map((q) => {
                            const best = bestScore(q.id);
                            const relatedCourse = courseName(q.courseId);
                            return (
                                <article
                                    key={q.id}
                                    className="quiz-card"
                                    data-testid={`quiz-card-${q.id}`}
                                >
                                    <div className="quiz-card-head">
                                        <span className="quiz-card-badge">
                                            <i className="fa-solid fa-list-check"></i>{" "}
                                            {q.questions.length} Qs
                                        </span>
                                        {best !== null && (
                                            <span className="quiz-card-best" data-testid={`quiz-best-${q.id}`}>
                                                Best: {best}%
                                            </span>
                                        )}
                                    </div>

                                    <h3 className="quiz-card-title">{q.title}</h3>
                                    <p className="quiz-card-description">{q.description}</p>

                                    {relatedCourse && (
                                        <div className="quiz-card-course">
                                            <i className="fa-solid fa-book"></i> {relatedCourse}
                                        </div>
                                    )}

                                    <div className="quiz-card-actions">
                                        <Button
                                            as={Link}
                                            to={`/quizzes/${q.id}`}
                                            disabled={q.questions.length === 0}
                                            data-testid={`quiz-start-${q.id}`}
                                        >
                                            {q.questions.length === 0 ? "No Questions" : "Start Test"}{" "}
                                            {q.questions.length > 0 && (
                                                <i className="fa-solid fa-arrow-right"></i>
                                            )}
                                        </Button>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Quizzes;
