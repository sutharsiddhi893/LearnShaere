/* =========================================================
   QUESTION BANK
   Collapsible long-answer exam questions.
========================================================= */

import React from "react";
import "./QuestionBank.css";

const QuestionBank = ({ questions = [] }) => {
    const [openIndex, setOpenIndex] = React.useState(null);

    const toggle = (index) =>
        setOpenIndex((current) => (current === index ? null : index));

    return (
        <div className="qbank">
            {questions.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                    <div key={index} className={`qbank__item ${isOpen ? "is-open" : ""}`}>
                        <button
                            type="button"
                            className="qbank__head"
                            onClick={() => toggle(index)}
                        >
                            <span className="qbank__num">Q{index + 1}</span>
                            <span className="qbank__question">{item.question}</span>

                            {item.marks && (
                                <span className="qbank__marks">{item.marks} marks</span>
                            )}

                            <span className="qbank__arrow">{isOpen ? "−" : "+"}</span>
                        </button>

                        {isOpen && (
                            <div className="qbank__answer">
                                <span className="qbank__label">Answer</span>
                                <p>{item.answer}</p>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default QuestionBank;