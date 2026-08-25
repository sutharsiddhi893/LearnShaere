import React from "react";
import { Link } from "react-router-dom";
import "./Profile.css";

const stats = [
  { label: "Courses explored", value: "6" },
  { label: "Topics completed", value: "24" },
  { label: "Quizzes passed", value: "12" },
  { label: "Bookmarks saved", value: "9" },
];

const achievements = ["Consistency streak: 8 days", "Top 15% quiz rank", "Completed React lab", "Placement prep starter"];

export default function ProfilePage() {
  return (
    <div className="profile-page">
      <section className="profile-hero">
        <div className="profile-avatar">SL</div>
        <div>
          <p className="section-eyebrow">Student profile</p>
          <h1>Shreya Lal</h1>
          <p>BCA • Semester 3 • Focused on programming, placements, and revision.</p>
        </div>
      </section>

      <section className="profile-grid">
        <div className="profile-card">
          <h2>Learning snapshot</h2>
          <div className="profile-stats">
            {stats.map((stat) => (
              <div key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="profile-card">
          <h2>Achievements</h2>
          <ul className="profile-list">
            {achievements.map((achievement) => (
              <li key={achievement}>{achievement}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="profile-card profile-actions-card">
        <h2>Quick access</h2>
        <div className="profile-actions">
          <Link to="/bookmarks">View bookmarks</Link>
          <Link to="/quizzes">Review quiz history</Link>
          <Link to="/courses/bca/semester/1">Continue learning</Link>
        </div>
      </section>
    </div>
  );
}
