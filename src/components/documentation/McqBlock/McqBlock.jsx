/* =========================================================
   MCQ BLOCK
   Interactive multiple choice question.
========================================================= */

import React from "react";
import "./McqBlock.css";

const LETTERS = ["A", "B", "C", "D", "E", "F"];

const McqBlock = ({ question, index }) => {
    const [selected, setSelected] = React.useState(null);
    const answered = selected !== null;
    const isCorrect = selected === question.answerIndex;

    const optionClass = (optionIndex) => {
        if (!answered) return "mcq__option";
        if (optionIndex === question.answerIndex) return "mcq__option is-correct";
        if (optionIndex === selected) return "mcq__option is-wrong";
        return "mcq__option is-dim";
    };

    return (
        <div className="mcq">
            <p className="mcq__question">
                <span className="mcq__index">Q{index + 1}</span>
                {question.question}
            </p>

            <div className="mcq__options">
                {question.options.map((option, optionIndex) => (
                    <button
                        key={optionIndex}
                        type="button"
                        className={optionClass(optionIndex)}
                        onClick={() => !answered && setSelected(optionIndex)}
                        disabled={answered}
                    >
                        <span className="mcq__letter">{LETTERS[optionIndex]}</span>
                        <span className="mcq__text">{option}</span>
                    </button>
                ))}
            </div>

            {answered && (
                <div className={`mcq__result ${isCorrect ? "is-correct" : "is-wrong"}`}>
                    <strong>{isCorrect ? "Correct" : "Incorrect"}</strong>
                    {question.explanation && <p>{question.explanation}</p>}

                    <button
                        type="button"
                        className="mcq__retry"
                        onClick={() => setSelected(null)}
                    >
                        Try again
                    </button>
                </div>
            )}
        </div>
    );
};

export default McqBlock;