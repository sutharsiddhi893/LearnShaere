/* =========================================================
   TOPIC RENDERER
   Renders one documentation topic page.
========================================================= */

import React from "react";
import Block from "../blocks";
import McqBlock from "../McqBlock/McqBlock";
import QuestionBank from "../QuestionBank/QuestionBank";
import "./TopicRenderer.css";

const TopicRenderer = ({ topic }) => {
    if (!topic) {
        return (
            <div className="topic-empty">
                <h2>Content coming soon</h2>
                <p>Documentation for this topic has not been added yet.</p>
            </div>
        );
    }

    return (
        <article className="topic">
            {/* ---------------- HEADER ---------------- */}

            <header className="topic__header">
                {topic.unitLabel && (
                    <span className="topic__unit">
                        {topic.unitLabel} • {topic.unitTitle}
                    </span>
                )}

                <h1 className="topic__title">{topic.title}</h1>

                {topic.summary && <p className="topic__summary">{topic.summary}</p>}

                <div className="topic__meta">
                    {topic.minutes && (
                        <span className="topic__chip">{topic.minutes} min read</span>
                    )}

                    {(topic.tags || []).map((tag) => (
                        <span key={tag} className="topic__chip topic__chip--tag">
                            {tag}
                        </span>
                    ))}
                </div>
            </header>

            {/* ---------------- BLOCKS ---------------- */}

            <section className="topic__body">
                {(topic.blocks || []).map((block, index) => (
                    <Block key={index} block={block} />
                ))}
            </section>

            {/* ---------------- MCQ ---------------- */}

            {topic.mcqs?.length > 0 && (
                <section className="topic__section">
                    <h2 className="topic__section-title">
                        Practice Questions
                        <span className="topic__count">{topic.mcqs.length}</span>
                    </h2>

                    {topic.mcqs.map((question, index) => (
                        <McqBlock key={index} question={question} index={index} />
                    ))}
                </section>
            )}

            {/* ---------------- QUESTION BANK ---------------- */}

            {topic.questions?.length > 0 && (
                <section className="topic__section">
                    <h2 className="topic__section-title">
                        Exam Questions
                        <span className="topic__count">{topic.questions.length}</span>
                    </h2>

                    <QuestionBank questions={topic.questions} />
                </section>
            )}
        </article>
    );
};

export default TopicRenderer;