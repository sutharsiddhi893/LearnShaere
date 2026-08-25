import React from "react";
import { Link } from "react-router-dom";
import "./PlacementHub.css";

const focusAreas = [
  { title: "Aptitude", description: "Speed, accuracy, and confidence for quantitative rounds." },
  { title: "Reasoning", description: "Analytical and puzzle-based questions that sharpen decision making." },
  { title: "Resume review", description: "Craft clean, outcome-oriented resumes that stand out." },
  { title: "HR interview", description: "Learn how to answer common behavioral and situational questions." },
];

const roadmapSteps = [
  "Build a solid resume and LinkedIn profile.",
  "Practice aptitude and logical reasoning every week.",
  "Prepare stories and STAR answers for interviews.",
  "Create projects that show practical problem-solving.",
];

export default function PlacementHubPage() {
  return (
    <div className="placement-page">
      <section className="placement-hero">
        <div>
          <p className="section-eyebrow">Placement hub</p>
          <h1>Prepare for internships, interviews, and career opportunities.</h1>
          <p>
            LearnSphere gives you a focused preparation path for aptitude, interview prep, resume building, and company-specific question practice.
          </p>
          <div className="placement-hero-actions">
            <Link to="/resources/question-bank" className="button-primary">
              Explore question bank
            </Link>
            <Link to="/programming-lab/react" className="button-secondary">
              Strengthen coding skills
            </Link>
          </div>
        </div>

        <div className="placement-summary-card">
          <h2>Focused prep for 2026</h2>
          <ul>
            <li>Weekly aptitude drills</li>
            <li>Interview answer frameworks</li>
            <li>Resume building checklist</li>
            <li>Company-wise practice sets</li>
          </ul>
        </div>
      </section>

      <section className="placement-grid">
        <div className="placement-card">
          <h2>Core focus areas</h2>
          <div className="focus-list">
            {focusAreas.map((area) => (
              <article key={area.title} className="focus-item">
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="placement-card">
          <h2>Placement roadmap</h2>
          <ol className="roadmap-list">
            {roadmapSteps.map((step, index) => (
              <li key={step}>0{index + 1}. {step}</li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}
