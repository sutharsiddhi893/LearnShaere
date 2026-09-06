import React, { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useApp } from "../../context/AppContext";
import { getCurriculumQuiz } from "../../data/quizCatalog";
import Button from "../../components/Button";
import "./QuizPlay.css";

const QuizPlay = () => {
    const { quizId } = useParams();
    const { recordAttempt } = useApp();

    const quiz = useMemo(() => getCurriculumQuiz(quizId), [quizId]);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [answers, setAnswers] = useState({}); // { questionId: selectedIndex }
    const [submitted, setSubmitted] = useState(false);
    const [result, setResult] = useState(null);

    if (!quiz) {
        return (
            <div className="container quiz-play-missing fade-up" data-testid="quiz-missing">
                <h1>Quiz not found</h1>
                <p>This quiz does not exist or has been removed.</p>
                <Button as={Link} to="/quizzes" variant="secondary" data-testid="quiz-missing-back">
                    <i className="fa-solid fa-arrow-left"></i> Back to quizzes
                </Button>
            </div>
        );
    }

    if (quiz.questions.length === 0) {
        return (
            <div className="container quiz-play-missing fade-up" data-testid="quiz-empty">
                <h1>{quiz.title}</h1>
                <p>This quiz has no questions yet.</p>
                <Button as={Link} to="/quizzes" variant="secondary" data-testid="quiz-empty-back">
                    <i className="fa-solid fa-arrow-left"></i> Back to quizzes
                </Button>
            </div>
        );
    }

    const total = quiz.questions.length;
    const current = quiz.questions[currentIndex];
    const isLast = currentIndex === total - 1;
    const answeredCount = Object.keys(answers).length;
    const progress = ((currentIndex + (submitted ? 1 : 0)) / total) * 100;

    const handleSelect = (optIndex) => {
        if (submitted) return;
        setAnswers((prev) => ({ ...prev, [current.id]: optIndex }));
    };

    const handleNext = () => {
        if (currentIndex < total - 1) setCurrentIndex((i) => i + 1);
    };

    const handlePrev = () => {
        if (currentIndex > 0) setCurrentIndex((i) => i - 1);
    };

    const handleSubmit = () => {
        let correct = 0;
        quiz.questions.forEach((q) => {
            if (answers[q.id] === q.correctIndex) correct += 1;
        });
        const score = Math.round((correct / total) * 100);
        const summary = { correct, total, score };
        setResult(summary);
        setSubmitted(true);
        recordAttempt({ quizId: quiz.id, ...summary });
    };

    const handleRestart = () => {
        setAnswers({});
        setCurrentIndex(0);
        setSubmitted(false);
        setResult(null);
    };

    /* ------------------------------- RESULT VIEW ------------------------------ */
    if (submitted && result) {
        const passed = result.score >= 60;
        return (
            <div className="quiz-play fade-up" data-testid="quiz-result">
                <div className="container quiz-play-inner">
                    <Link to="/quizzes" className="quiz-play-back" data-testid="quiz-result-back">
                        <i className="fa-solid fa-arrow-left"></i> Quiz library
                    </Link>

                    <div className={`quiz-result-card ${passed ? "is-pass" : "is-fail"}`}>
                        <span className="quiz-result-eyebrow">
                            {passed ? "Nicely done" : "Almost there"}
                        </span>
                        <h1 className="quiz-result-score" data-testid="quiz-result-score">
                            {result.score}%
                        </h1>
                        <p className="quiz-result-summary">
                            You answered{" "}
                            <strong>
                                {result.correct} / {result.total}
                            </strong>{" "}
                            questions correctly.
                        </p>

                        <div className="quiz-result-actions">
                            <Button onClick={handleRestart} data-testid="quiz-retake-btn">
                                <i className="fa-solid fa-rotate-right"></i> Retake Quiz
                            </Button>
                            <Button
                                as={Link}
                                to="/quizzes"
                                variant="secondary"
                                data-testid="quiz-back-to-list"
                            >
                                Back to Quizzes
                            </Button>
                        </div>
                    </div>

                    <div className="quiz-review">
                        <h2 className="quiz-review-title">Review your answers</h2>
                        {quiz.questions.map((q, i) => {
                            const selected = answers[q.id];
                            const isCorrect = selected === q.correctIndex;
                            return (
                                <article
                                    key={q.id}
                                    className={`quiz-review-item ${isCorrect ? "is-correct" : "is-wrong"}`}
                                    data-testid={`quiz-review-item-${q.id}`}
                                >
                                    <header>
                                        <span className="quiz-review-num">
                                            Q{String(i + 1).padStart(2, "0")}
                                        </span>
                                        <span
                                            className={`quiz-review-badge ${
                                                isCorrect ? "is-correct" : "is-wrong"
                                            }`}
                                        >
                                            <i
                                                className={`fa-solid ${
                                                    isCorrect ? "fa-check" : "fa-xmark"
                                                }`}
                                            ></i>{" "}
                                            {isCorrect ? "Correct" : "Wrong"}
                                        </span>
                                    </header>
                                    <p className="quiz-review-question">{q.text}</p>
                                    <ul className="quiz-review-options">
                                        {q.options.map((opt, idx) => {
                                            const isRight = idx === q.correctIndex;
                                            const isPicked = idx === selected;
                                            return (
                                                <li
                                                    key={idx}
                                                    className={`
                                                        ${isRight ? "is-right" : ""}
                                                        ${isPicked && !isRight ? "is-picked-wrong" : ""}
                                                    `.trim()}
                                                >
                                                    <span>{opt}</span>
                                                    {isRight && (
                                                        <i className="fa-solid fa-check"></i>
                                                    )}
                                                    {isPicked && !isRight && (
                                                        <i className="fa-solid fa-xmark"></i>
                                                    )}
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }

    /* -------------------------------- QUIZ VIEW ------------------------------- */
    const selectedIndex = answers[current.id];

    return (
        <div className="quiz-play fade-up" data-testid="quiz-play-page">
            <div className="container quiz-play-inner">
                <Link to="/quizzes" className="quiz-play-back" data-testid="quiz-play-back">
                    <i className="fa-solid fa-arrow-left"></i> Quiz library
                </Link>

                <header className="quiz-play-header">
                    <div>
                        <span className="quiz-play-eyebrow">Quiz</span>
                        <h1 className="quiz-play-title" data-testid="quiz-play-title">
                            {quiz.title}
                        </h1>
                    </div>
                    <div className="quiz-play-status" data-testid="quiz-play-progress-text">
                        Question <strong>{currentIndex + 1}</strong> of {total} · Answered{" "}
                        {answeredCount}/{total}
                    </div>
                </header>

                <div className="quiz-progress" aria-hidden="true">
                    <div
                        className="quiz-progress-bar"
                        style={{ width: `${progress}%` }}
                        data-testid="quiz-progress-bar"
                    />
                </div>

                <article className="quiz-question" data-testid={`quiz-question-${current.id}`}>
                    <span className="quiz-question-num">
                        Q{String(currentIndex + 1).padStart(2, "0")}
                    </span>
                    <h2 className="quiz-question-text">{current.text}</h2>

                    <ul className="quiz-options">
                        {current.options.map((opt, idx) => {
                            const isSelected = selectedIndex === idx;
                            return (
                                <li key={idx}>
                                    <button
                                        type="button"
                                        onClick={() => handleSelect(idx)}
                                        className={`quiz-option ${isSelected ? "is-selected" : ""}`}
                                        data-testid={`quiz-option-${current.id}-${idx}`}
                                        aria-pressed={isSelected}
                                    >
                                        <span className="quiz-option-marker">
                                            {String.fromCharCode(65 + idx)}
                                        </span>
                                        <span className="quiz-option-text">{opt}</span>
                                        {isSelected && (
                                            <i className="fa-solid fa-circle-check"></i>
                                        )}
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </article>

                <footer className="quiz-play-footer">
                    <Button
                        variant="secondary"
                        onClick={handlePrev}
                        disabled={currentIndex === 0}
                        data-testid="quiz-prev-btn"
                    >
                        <i className="fa-solid fa-arrow-left"></i> Previous
                    </Button>

                    {isLast ? (
                        <Button
                            onClick={handleSubmit}
                            disabled={answeredCount < total}
                            data-testid="quiz-submit-btn"
                        >
                            Submit Quiz <i className="fa-solid fa-flag-checkered"></i>
                        </Button>
                    ) : (
                        <Button
                            onClick={handleNext}
                            disabled={selectedIndex === undefined}
                            data-testid="quiz-next-btn"
                        >
                            Next <i className="fa-solid fa-arrow-right"></i>
                        </Button>
                    )}
                </footer>
            </div>
        </div>
    );
};

export default QuizPlay;
