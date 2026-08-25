import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

const VALUES = [
  {
    number: "01",
    icon: "logo",
    title: "Student-first learning",
    text: "LearnSphere is designed around the real academic journey: course, semester, subject, topic, revision, and practice.",
  },
  {
    number: "02",
    icon: "▤",
    title: "Useful study materials",
    text: "We organize notes, important questions, assignments, practical files, quizzes, and revision resources in one clear place.",
  },
  {
    number: "03",
    icon: "⌘",
    title: "Skills beyond the syllabus",
    text: "Programming practice, interview preparation, placement resources, and project ideas help students prepare for their next step.",
  },
];

const PLATFORM_FEATURES = [
  "Semester-wise subject organization",
  "Topic notes and documentation-style materials",
  "Important questions and revision support",
  "Interactive quizzes with instant feedback",
  "Programming lab and coding challenges",
  "Placement and interview preparation resources",
];

export default function About() {
  return (
    <div className="about-page" data-testid="about-page">

      {/* Hero */}
      <section className="about-hero">
        <div className="about-container">

          <div className="about-breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <span>About LearnSphere</span>
          </div>

          <div className="about-hero-layout">

            <div className="about-hero-content">
              <span className="about-eyebrow">
                <span className="about-eyebrow-icon">
                  <img src="/icon.png" alt="" />
                </span>
                  About LearnSphere
              </span>
              <h1>
                A better learning space
                <span> for college students.</span>
              </h1>

              <p>
                LearnSphere is a student-focused learning platform built to make
                academic content easier to explore, understand, practice, and
                revise. It brings courses, semesters, subjects, notes, quizzes,
                programming practice, and placement preparation together.
              </p>

              <div className="about-hero-actions">
                <Link to="/courses" className="about-primary-button">
                  Explore Courses
                  <span>→</span>
                </Link>

                <Link to="/contact" className="about-secondary-button">
                  Contact Us
                  <span>↗</span>
                </Link>
              </div>
            </div>

            <div className="about-hero-visual" aria-hidden="true">
              <div className="about-visual-window">

                <div className="about-visual-topbar">
                  <div>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <small>LEARNING PATH</small>
                </div>

                <div className="about-visual-body">

                  <div className="about-visual-heading">
                    <span>YOUR JOURNEY</span>
                    <strong>Learn one step at a time.</strong>
                  </div>

                  <div className="about-visual-path">

                    <div className="about-visual-path-item about-path-active">
                      <span>01</span>

                      <div>
                        <strong>Choose a Course</strong>
                        <small>Select your academic program</small>
                      </div>

                      <b>✓</b>
                    </div>

                    <div className="about-visual-path-line"></div>

                    <div className="about-visual-path-item about-path-active">
                      <span>02</span>

                      <div>
                        <strong>Explore Semesters</strong>
                        <small>Follow your curriculum structure</small>
                      </div>

                      <b>✓</b>
                    </div>

                    <div className="about-visual-path-line"></div>

                    <div className="about-visual-path-item">
                      <span>03</span>

                      <div>
                        <strong>Master Subjects</strong>
                        <small>Study notes, quizzes and practice</small>
                      </div>

                      <b>→</b>
                    </div>

                  </div>

                  <div className="about-visual-progress">
                    <div>
                      <span>Learning progress</span>
                      <strong>Build your momentum</strong>
                    </div>

                    <div className="about-visual-progress-track">
                      <span></span>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="about-mission-section">
        <div className="about-container about-mission-layout">

          <div className="about-section-heading">
            <span className="about-section-eyebrow">Our mission</span>
            <h2>
              Make learning structured, accessible, and practical.
            </h2>
          </div>

          <div className="about-mission-content">
            <p>
              College students often use many different sources for notes,
              videos, previous papers, coding practice, and interview
              preparation. LearnSphere is built to reduce that confusion with a
              single organized learning environment.
            </p>

            <p>
              Our goal is not only to help students complete a syllabus. We
              want to help students understand concepts, build confidence, and
              develop skills they can use in exams, projects, internships, and
              careers.
            </p>
          </div>

        </div>
      </section>

      {/* Values */}
      <section className="about-values-section">
        <div className="about-container">

          <div className="about-section-header">

            <div className="about-section-heading">
              <span className="about-section-eyebrow">
                What we believe
              </span>

              <h2>
                Built around how students actually learn.
              </h2>
            </div>

            <p>
              Every LearnSphere feature is designed to support focused study,
              regular practice, and steady progress.
            </p>

          </div>

          <div className="about-values-grid">

            {VALUES.map((value) => (
              <article
                className="about-value-card"
                key={value.number}
              >

                <div className="about-value-card-top">

                  <span className="about-value-number">
                    {value.number}
                  </span>

                  <span className="about-value-icon">
                    {value.icon === "logo" ? (
                      <img
                        src="/icon.png"
                        alt="LearnSphere"
                      />
                    ) : (
                      value.icon
                    )}
                  </span>

                </div>

                <h3>{value.title}</h3>
                <p>{value.text}</p>

              </article>
            ))}

          </div>
        </div>
      </section>

      {/* Platform section */}
      <section className="about-platform-section">
        <div className="about-container about-platform-layout">

          <div className="about-platform-card">

            <span className="about-platform-card-label">
              LEARNING ECOSYSTEM
            </span>

            <h2>
              Everything needed for a stronger study routine.
            </h2>

            <div className="about-platform-list">

              {PLATFORM_FEATURES.map((feature) => (
                <div
                  className="about-platform-list-item"
                  key={feature}
                >
                  <span>✓</span>
                  <p>{feature}</p>
                </div>
              ))}

            </div>

            <Link
              to="/resources"
              className="about-platform-link"
            >
              Explore Study Resources
              <span>→</span>
            </Link>

          </div>

          <div className="about-platform-side">

            <div className="about-side-stat-card">
              <span className="about-side-stat-icon about-stat-purple">
                ◫
              </span>

              <div>
                <strong>Course to Topic</strong>

                <p>
                  Navigate naturally from your program to semesters, subjects,
                  and detailed material.
                </p>
              </div>
            </div>

            <div className="about-side-stat-card">
              <span className="about-side-stat-icon about-stat-cyan">
                ?
              </span>

              <div>
                <strong>Learn and Test</strong>

                <p>
                  Use quizzes and practice questions to check understanding
                  after every topic.
                </p>
              </div>
            </div>

            <div className="about-side-stat-card">
              <span className="about-side-stat-icon about-stat-green">
                ⌘
              </span>

              <div>
                <strong>Practice Real Skills</strong>

                <p>
                  Use the programming lab to write code, solve challenges, and
                  build confidence.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta-section">
        <div className="about-container">

          <div className="about-cta-card">

            <div>
              <span className="about-eyebrow">
                <span>✦</span>
                Start your journey
              </span>

              <h2>
                Your next study session can start now.
              </h2>

              <p>
                Choose a course, open a semester, and begin learning with
                structured subjects and study materials.
              </p>
            </div>

            <div className="about-cta-actions">

              <Link
                to="/courses"
                className="about-primary-button"
              >
                Browse Courses
                <span>→</span>
              </Link>

              <Link
                to="/programming-lab/javascript"
                className="about-secondary-button"
              >
                Open Programming Lab
                <span>⌘</span>
              </Link>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}