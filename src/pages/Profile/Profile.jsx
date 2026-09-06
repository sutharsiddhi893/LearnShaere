import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "./Profile.css";

export default function ProfilePage() {
  const [learningData, setLearningData] = useState({
    completedTopics: [],
    quizzes: [],
    bookmarks: [],
    exploredCourses: [],
    recentLearning: [],
    streak: 0,
  });

  useEffect(() => {
    const loadProfileData = () => {
      const data = {
        completedTopics: JSON.parse(
          localStorage.getItem("completedTopics") || "[]"
        ),
        quizzes: JSON.parse(
          localStorage.getItem("quizHistory") || "[]"
        ),
        bookmarks: JSON.parse(
          localStorage.getItem("bookmarks") || "[]"
        ),
        exploredCourses: JSON.parse(
          localStorage.getItem("exploredCourses") || "[]"
        ),
        recentLearning: JSON.parse(
          localStorage.getItem("recentLearning") || "[]"
        ),
        streak: Number(localStorage.getItem("learningStreak") || 0),
      };

      setLearningData(data);
    };

    loadProfileData();

    // Updates profile when localStorage changes in another tab
    window.addEventListener("storage", loadProfileData);

    return () => {
      window.removeEventListener("storage", loadProfileData);
    };
  }, []);

  const passedQuizzes = useMemo(() => {
    return learningData.quizzes.filter(
      (quiz) => quiz.passed === true || quiz.score >= 50
    );
  }, [learningData.quizzes]);

  const stats = [
    {
      label: "Courses explored",
      value: learningData.exploredCourses.length,
    },
    {
      label: "Topics completed",
      value: learningData.completedTopics.length,
    },
    {
      label: "Quizzes passed",
      value: passedQuizzes.length,
    },
    {
      label: "Bookmarks saved",
      value: learningData.bookmarks.length,
    },
  ];

  const totalActivities =
    learningData.completedTopics.length +
    passedQuizzes.length +
    learningData.bookmarks.length;

  const achievements = [];

  if (learningData.streak >= 3) {
    achievements.push(`${learningData.streak} day learning streak`);
  }

  if (learningData.completedTopics.length >= 5) {
    achievements.push("Completed 5+ learning topics");
  }

  if (learningData.completedTopics.length >= 20) {
    achievements.push("Learning Explorer");
  }

  if (passedQuizzes.length >= 5) {
    achievements.push("Quiz Performer");
  }

  if (learningData.bookmarks.length >= 5) {
    achievements.push("Active Resource Collector");
  }

  const continueLearning = learningData.recentLearning[0];

  return (
    <main className="profile-page">
      {/* HERO */}
      <section className="profile-hero">
        <div className="profile-avatar">SL</div>

        <div className="profile-info">
          <p className="section-eyebrow">Student Profile</p>

          <h1>Shreya Lal</h1>

          <p>
            BCA • Semester 3 • Focused on programming, placements
            and continuous learning.
          </p>

          <span className="activity-status">
            {totalActivities > 0
              ? `${totalActivities} learning activities`
              : "Start learning to build your profile"}
          </span>
        </div>
      </section>

      {/* STATS */}
      <section className="profile-card">
        <div className="section-heading">
          <div>
            <p className="section-eyebrow">Your progress</p>
            <h2>Learning snapshot</h2>
          </div>

          <Link to="/dashboard">View dashboard</Link>
        </div>

        <div className="profile-stats">
          {stats.map((stat) => (
            <div className="stat-box" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="profile-grid">
        {/* CURRENTLY LEARNING */}
        <div className="profile-card">
          <h2>Continue learning</h2>

          {continueLearning ? (
            <div className="learning-item">
              <span className="learning-label">
                Last activity
              </span>

              <h3>
                {continueLearning.title ||
                  continueLearning.topic ||
                  "Learning topic"}
              </h3>

              {continueLearning.course && (
                <p>{continueLearning.course}</p>
              )}

              <Link
                className="primary-profile-link"
                to={continueLearning.path || "/courses"}
              >
                Continue learning →
              </Link>
            </div>
          ) : (
            <div className="empty-profile-state">
              <p>You haven't started a learning topic yet.</p>
              <Link to="/courses">Explore courses →</Link>
            </div>
          )}
        </div>

        {/* ACHIEVEMENTS */}
        <div className="profile-card">
          <h2>Achievements</h2>

          {achievements.length > 0 ? (
            <ul className="profile-list">
              {achievements.map((achievement) => (
                <li key={achievement}>
                  <span className="achievement-icon">✓</span>
                  {achievement}
                </li>
              ))}
            </ul>
          ) : (
            <div className="empty-profile-state">
              <p>
                Complete topics and quizzes to unlock achievements.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* RECENT LEARNING */}
      <section className="profile-card">
        <h2>Recently learned</h2>

        {learningData.recentLearning.length > 0 ? (
          <div className="recent-learning-list">
            {learningData.recentLearning
              .slice(0, 5)
              .map((item, index) => (
                <Link
                  to={item.path || "/courses"}
                  className="recent-learning-item"
                  key={item.id || index}
                >
                  <div>
                    <strong>
                      {item.title ||
                        item.topic ||
                        "Learning topic"}
                    </strong>

                    <span>
                      {item.course || "Course content"}
                    </span>
                  </div>

                  <span>→</span>
                </Link>
              ))}
          </div>
        ) : (
          <div className="empty-profile-state">
            <p>Your recently viewed learning topics will appear here.</p>
          </div>
        )}
      </section>

      {/* QUICK ACCESS */}
      <section className="profile-card profile-actions-card">
        <h2>Quick access</h2>

        <div className="profile-actions">
          <Link to="/bookmarks">
            <span>🔖</span>
            <div>
              <strong>Bookmarks</strong>
              <small>{learningData.bookmarks.length} saved</small>
            </div>
          </Link>

          <Link to="/quizzes">
            <span>✓</span>
            <div>
              <strong>Quiz history</strong>
              <small>{passedQuizzes.length} passed</small>
            </div>
          </Link>

          <Link to="/courses">
            <span>▶</span>
            <div>
              <strong>Continue learning</strong>
              <small>Open your courses</small>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}