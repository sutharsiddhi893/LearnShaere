import React from "react";
import { Link } from "react-router-dom";
import "./HelpCenter.css";

const helpTopics = [
  { title: "How do I find semester notes?", body: "Use the Courses section to choose your program and semester, then open the relevant subject page." },
  { title: "How do I practice coding?", body: "Visit the Programming Lab and select your preferred language for beginner, intermediate, or advanced challenges." },
  { title: "How do I save resources?", body: "Use the bookmark action on notes, labs, and placement content to build your personal library." },
];

export default function HelpCenterPage() {
  return (
    <div className="help-page">
      <section className="policy-card">
        <p className="section-eyebrow">Help center</p>
        <h1>Support for every step of your study journey.</h1>
        <p>Find quick answers, explore learning paths, and reach out if you need a hand.</p>
      </section>

      <section className="policy-card">
        <h2>Popular help topics</h2>
        <div className="help-list">
          {helpTopics.map((topic) => (
            <article key={topic.title} className="help-item">
              <h3>{topic.title}</h3>
              <p>{topic.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="policy-card">
        <h2>Need more help?</h2>
        <p>Contact the support team through <Link to="/contact">the contact page</Link>.</p>
      </section>
    </div>
  );
}
