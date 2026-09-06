import React from "react";
import { Link } from "react-router-dom";
import { useApp } from "../../context/AppContext";
import CourseCard from "../../components/CourseCard";
import SectionHeader from "../../components/SectionHeader";
import { Zap } from "lucide-react";
import "./Home.css";

const Home = () => {
  const { courses = [], categories = [], quizzes = [] } = useApp();

  const featuredCourses = courses.slice(0, 3);

  const getCategoryName = (categoryId) => {
    return categories.find((category) => category.id === categoryId)?.name || "General";
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="home-hero">
        <div className="home-container home-hero-layout">
          <div className="home-hero-content">
            <span className="home-hero-eyebrow">
              <span className="home-eyebrow-icon">
                <img src="/icon.png" alt="LearnSphere" />
              </span>
              Your complete college learning space
            </span>

            <h1 className="home-hero-title">
              Learn smarter.
              <span>Build skills.</span>
              Achieve more.
            </h1>

            <p className="home-hero-description">
              LearnSphere brings your courses, semester notes, quizzes,
              practical materials, coding practice, and placement preparation
              into one focused learning platform.
            </p>

            <div className="home-hero-actions">
              <Link
                to="/courses"
                className="home-button home-button-primary"
                data-testid="hero-cta-courses"
              >
                Explore Courses
                <span>→</span>
              </Link>

              <Link
                to="/quizzes"
                className="home-button home-button-secondary"
                data-testid="hero-cta-quizzes"
              >
                Take a Quiz
                <span>↗</span>
              </Link>
            </div>

            <div className="home-hero-trust-list">
              <span>
                <i></i>
                Semester-wise learning
              </span>

              <span>
                <i></i>
                Notes and study material
              </span>

              <span>
                <i></i>
                Free for students
              </span>
            </div>
          </div>

          <div className="home-hero-dashboard">
            <div className="home-dashboard-topbar">
              <div className="home-dashboard-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <span className="home-dashboard-title">LEARNING DASHBOARD</span>

              <span className="home-dashboard-status">
                <i></i>
                Live
              </span>
            </div>

            <div className="home-dashboard-body">
              <div className="home-dashboard-greeting">
                <span>Good to see you, Student</span>
                <h2>Continue your learning journey.</h2>
              </div>

              <div className="home-dashboard-progress-card">
                <div className="home-progress-card-top">
                  <div className="home-progress-icon">⌘</div>

                  <div>
                    <span>Currently learning</span>
                    <strong>Programming in C</strong>
                  </div>

                  <span className="home-progress-percent">18%</span>
                </div>

                <div className="home-progress-track">
                  <span></span>
                </div>

                <div className="home-progress-card-footer">
                  <span>2 of 12 chapters completed</span>
                  <Link to="/courses/bca/semester/1">
                    Continue
                    <span>→</span>
                  </Link>
                </div>
              </div>

              <div className="home-dashboard-mini-grid">
                <div className="home-mini-stat-card">
                  <span className="home-mini-stat-icon home-mini-stat-purple">
                    ◫
                  </span>
                  <div>
                    <strong>24</strong>
                    <span>Study Materials</span>
                  </div>
                </div>

                <div className="home-mini-stat-card">
                  <span className="home-mini-stat-icon home-mini-stat-cyan">
                    ✓
                  </span>
                  <div>
                    <strong>{quizzes.length}</strong>
                    <span>Available Quizzes</span>
                  </div>
                </div>
              </div>

              <div className="home-dashboard-task">
                <span className="home-task-check">✓</span>
                <div>
                  <strong>Daily learning goal</strong>
                  <small>Complete one topic and one quiz today.</small>
                </div>
                <span className="home-task-arrow">→</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access */}
      <section className="home-quick-access-section">
        <div className="home-container">
          <div className="home-quick-access-grid">
            <Link to="/courses/bca/semester/1" className="home-quick-access-card">
              <span className="home-quick-access-icon home-quick-icon-purple">
                <img src="/icon.png" alt="" />
              </span>
              <div>
                <strong>Courses & Semesters</strong>
                <span>Explore BCA, B.Sc IT, MCA and more</span>
              </div>
              <b>→</b>
            </Link>

            <Link to="/resources" className="home-quick-access-card">
              <span className="home-quick-access-icon home-quick-icon-cyan">
                ▤
              </span>
              <div>
                <strong>Study Resources</strong>
                <span>Notes, PDFs, papers and question banks</span>
              </div>
              <b>→</b>
            </Link>

            <Link to="/programming-lab" className="home-quick-access-card">
              <span className="home-quick-access-icon home-quick-icon-orange">
                &lt;/&gt;
              </span>
              <div>
                <strong>Programming Lab</strong>
                <span>Practice code and solve challenges</span>
              </div>
              <b>→</b>
            </Link>

            <Link to="/placement-hub" className="home-quick-access-card">
              <span className="home-quick-access-icon home-quick-icon-green">
                ↗
              </span>
              <div>
                <strong>Placement Hub</strong>
                <span>Prepare for internships and interviews</span>
              </div>
              <b>→</b>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="home-section">
        <div className="home-container">
          <div className="home-section-head">
            <SectionHeader
              eyebrow="Popular learning paths"
              title="Start with your academic course."
              description="Choose your program, select a semester, and access structured subjects, notes, quizzes, assignments, and practice materials."
            />

            <Link to="/coursesDetail" className="home-text-link">
              View all courses
              <span>→</span>
            </Link>
          </div>

          {featuredCourses.length > 0 ? (
            <div className="home-course-grid">
              {featuredCourses.map((course) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  categoryName={getCategoryName(course.categoryId)}
                />
              ))}
            </div>
          ) : (
            <div className="home-empty-card">
              <span>◫</span>
              <h3>Courses are being prepared</h3>
              <p>
                Your course catalog will appear here after course data is added.
              </p>
              <Link to="/courses">Open Courses</Link>
            </div>
          )}
        </div>
      </section>

      {/* Categories */}
      <section className="home-section home-category-section">
        <div className="home-container">
          <div className="home-section-head home-section-head-simple">
            <SectionHeader
              eyebrow="Explore by discipline"
              title="Find the right learning path."
              description="Browse courses based on your interests, academic subjects, and future career goals."
            />
          </div>

          <div className="home-category-grid">
            {categories.map((category) => {
              const courseCount = courses.filter(
                (course) => course.categoryId === category.id
              ).length;

              return (
                <Link
                  key={category.id}
                  to={`/courses?category=${category.slug}`}
                  className="home-category-card"
                  data-testid={`home-category-${category.slug}`}
                >
                  <span className="home-category-card-icon">
                    <img src="/icon.png" alt="" />
                  </span>

                  <div className="home-category-card-content">
                    <h3>{category.name}</h3>
                    <p>
                      {courseCount} {courseCount === 1 ? "course" : "courses"}{" "}
                      available
                    </p>
                  </div>

                  <span className="home-category-card-arrow">→</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quiz Call To Action */}
      <section className="home-section">
        <div className="home-container">
          <div className="home-quiz-banner">
            <div className="home-quiz-banner-content">
              <span className="home-hero-eyebrow">
                <span className="home-eyebrow-icon">?</span>
                Practice and improve
              </span>

              <h2>Test your knowledge with quick quizzes.</h2>

              <p>
                Practice subject-wise MCQs, check your answers instantly, and
                identify the topics that need more revision.
              </p>

              <div className="home-quiz-banner-stats">
                <div>
                  <strong>{quizzes.length}</strong>
                  <span>Quizzes Available</span>
                </div>

                <div>
                  <strong>Instant</strong>
                  <span>Answer Explanations</span>
                </div>

                <div>
                  <strong>Free</strong>
                  <span>Unlimited Attempts</span>
                </div>
              </div>
            </div>

            <div className="home-quiz-banner-action">
              <div className="home-quiz-circle">
                <span>?</span>
              </div>

              <Link to="/quizzes" className="home-button home-button-primary">
                Start a Quiz
                <span>→</span>
              </Link>
            </div>
            <Link
              to="/cheatsheet"
              className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-xl shadow-lg hover:scale-105 transition"
            >
              <Zap size={20} />
              Open Cheat Sheet
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;