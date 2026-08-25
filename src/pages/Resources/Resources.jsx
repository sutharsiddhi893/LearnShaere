import React from "react";
import { Link, useParams } from "react-router-dom";
import "./Resources.css";

const resourceCategories = [
  {
    slug: "all",
    title: "All resources",
    caption: "Everything you need for semester success",
    description: "Discover notes, previous papers, PDFs, question banks, and curated study guides in one place.",
    accent: "green",
    highlights: ["Live study collections", "Exam-first filters", "Ready for revision"],
    items: [
      {
        title: "Semester notes",
        description: "Concise chapter summaries and structured revision notes.",
        meta: "Updated weekly",
      },
      {
        title: "PDF notes",
        description: "Download-ready documents for offline study sessions.",
        meta: "Best for revision",
      },
      {
        title: "Previous papers",
        description: "Practice with actual exam papers and marking patterns.",
        meta: "Exam readiness",
      },
    ],
  },
  {
    slug: "previous-papers",
    title: "Previous year papers",
    caption: "Sharpen exam strategy",
    description: "Practice with subject-wise previous year papers and match your preparation to the way exams are actually framed.",
    accent: "violet",
    highlights: ["Year-wise sets", "Topic coverage", "Answer key ready"],
    items: [
      { title: "BCA semester 3 papers", description: "C, DBMS, OS, and web technology question sets.", meta: "12 papers" },
      { title: "MCA solved papers", description: "Advanced practical and theory question papers.", meta: "9 papers" },
      { title: "Mock revision packs", description: "Exam simulation with answer keys and short notes.", meta: "New this month" },
    ],
  },
  {
    slug: "question-bank",
    title: "Question bank",
    caption: "Practice the right questions",
    description: "Use curated question banks for easy revision and confident exam preparation.",
    accent: "blue",
    highlights: ["Topic wise", "Difficulty labels", "Short + long answer"],
    items: [
      { title: "Core theory questions", description: "High-frequency conceptual and short-answer prompts.", meta: "200+ questions" },
      { title: "Programming practice", description: "Coding and debugging problems with hints.", meta: "Focused labs" },
      { title: "Interview prep", description: "Frequently asked viva and technical interview questions.", meta: "Placement ready" },
    ],
  },
  {
    slug: "pdf-notes",
    title: "PDF notes",
    caption: "Study off the grid",
    description: "Download clean, print-friendly notes that integrate seamlessly with your study routine.",
    accent: "amber",
    highlights: ["Portable", "Searchable", "Print friendly"],
    items: [
      { title: "Data structures notes", description: "Algorithms, trees, graphs, and complexity summaries.", meta: "18 pages" },
      { title: "React essentials", description: "State, props, hooks, routing, and component design.", meta: "24 pages" },
      { title: "DBMS quick reference", description: "ER models, normalization, joins, and SQL queries.", meta: "16 pages" },
    ],
  },
  {
    slug: "syllabus",
    title: "Syllabus tracker",
    caption: "Stay aligned with courses",
    description: "Track weekly syllabus progress and ensure you never miss a milestone.",
    accent: "teal",
    highlights: ["Weekly checkpoints", "Semester mapping", "Progress view"],
    items: [
      { title: "Semester milestone map", description: "Plan your learning around each topic schedule.", meta: "6 semesters" },
      { title: "Assignment calendar", description: "Stay ahead of submissions and practical work.", meta: "2026 edition" },
      { title: "Study planner", description: "Build a daily and weekly revision plan.", meta: "Suggested routine" },
    ],
  },
];

export default function ResourcesPage() {
  const { resourceCategory } = useParams();
  const activeCategory = resourceCategories.find((entry) => entry.slug === resourceCategory) || resourceCategories[0];

  return (
    <div className="resources-page">
      <section className="resources-hero">
        <div className="resources-hero-content">
          <p className="section-eyebrow">Resources hub</p>
          <h1>Everything for structured learning and exam prep.</h1>
          <p>
            Access polished notes, downloadable PDFs, past question sets, and revision packs curated for modern college students.
          </p>
          <div className="resources-hero-actions">
            <Link to="/resources/pdf-notes" className="button-primary">
              Open PDF notes
            </Link>
            <Link to="/quizzes" className="button-secondary">
              Review quizzes
            </Link>
          </div>
        </div>

        <div className="resources-hero-stats" aria-label="Resource highlights">
          <div>
            <strong>120+</strong>
            <span>Ready-to-use materials</span>
          </div>
          <div>
            <strong>24/7</strong>
            <span>Revision support</span>
          </div>
          <div>
            <strong>100%</strong>
            <span>Student-focused layout</span>
          </div>
        </div>
      </section>

      <section className="resources-section">
        <div className="resources-nav">
          {resourceCategories.map((category) => (
            <Link
              key={category.slug}
              to={category.slug === "all" ? "/resources" : `/resources/${category.slug}`}
              className={`resource-pill ${activeCategory.slug === category.slug ? "resource-pill-active" : ""}`}
            >
              {category.title}
            </Link>
          ))}
        </div>

        <div className="resource-detail-card">
          <div className="resource-detail-copy">
            <p className="section-eyebrow">{activeCategory.caption}</p>
            <h2>{activeCategory.title}</h2>
            <p>{activeCategory.description}</p>
            <ul>
              {activeCategory.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>

          <div className="resource-detail-list">
            {activeCategory.items.map((item) => (
              <article key={item.title} className="resource-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span>{item.meta}</span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
