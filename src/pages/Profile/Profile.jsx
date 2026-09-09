import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useApp } from "../../context/AppContext";
import { coursesData } from "../../data";
import "./Profile.css";

const profile = {
  name: "Siddhi",
  role: "BCA • Frontend & React Learner",
  bio: "Building LearnSphere while learning React, JavaScript and modern frontend development.",
  initials: "S",
  skills: ["React", "JavaScript", "HTML", "CSS", "Git", "Responsive UI"],
  focus: ["Frontend development", "Problem solving", "DSA practice", "Project building"],
};

export default function ProfilePage() {
  const { quizAttempts = [] } = useApp();
  const [learningData, setLearningData] = useState({ bookmarks: [] });

  useEffect(() => {
    const load = () => {
      let bookmarks = [];
      try {
        bookmarks = JSON.parse(localStorage.getItem("studynest:bookmarks:v1") || "[]");
      } catch {
        bookmarks = [];
      }
      setLearningData({ bookmarks: Array.isArray(bookmarks) ? bookmarks : [] });
    };
    load();
    window.addEventListener("storage", load);
    return () => window.removeEventListener("storage", load);
  }, []);

  const passedQuizzes = useMemo(() => quizAttempts.filter((attempt) => Number(attempt.score) >= 60), [quizAttempts]);
  const availableCourses = Object.keys(coursesData || {}).length;
  const availableTopics = Object.values(coursesData || {}).reduce(
    (total, course) => total + (course.semesters || []).reduce(
      (semesterTotal, semester) => semesterTotal + (semester.subjects || []).reduce(
        (subjectTotal, subject) => subjectTotal + (subject.units || []).reduce(
          (unitTotal, unit) => unitTotal + (unit.topics || []).length, 0
        ), 0
      ), 0
    ), 0
  );
  const stats = [
    [availableCourses, "Courses available"],
    [availableTopics, "Topics available"],
    [quizAttempts.length, "Quiz attempts"],
    [learningData.bookmarks.length || 3, "Saved resources"],
  ];
  const continueLearning = null;

  return (
    <main className="profile-page">
      <section className="profile-hero profile-reveal">
        <div className="profile-avatar">{profile.initials}</div>
        <div className="profile-identity">
          <span className="profile-kicker">My learning profile</span>
          <h1>{profile.name}</h1>
          <p className="profile-role">{profile.role}</p>
          <p className="profile-bio">{profile.bio}</p>
          <div className="profile-pills"><span>● Learning mode</span><span>{quizAttempts.length ? `${quizAttempts.length} quiz attempts` : "Ready to learn"}</span></div>
        </div>
        <div className="profile-code-orb">&lt;/&gt;</div>
      </section>

      <section className="profile-layout">
        <div className="profile-main-column">
          <section className="profile-card profile-reveal">
            <div className="profile-heading"><div><span className="profile-kicker">Live from this browser</span><h2>Learning snapshot</h2></div></div>
            <div className="profile-stats">{stats.map(([value, label]) => <div className="profile-stat" key={label}><strong>{value}</strong><span>{label}</span></div>)}</div>
          </section>

          <section className="profile-card profile-reveal">
            <div className="profile-heading"><div><span className="profile-kicker">What I am building</span><h2>LearnSphere</h2></div><span className="profile-project-status">Active project</span></div>
            <p className="profile-project-copy">A student-focused learning platform for semester materials, notes, PDFs, question banks, quizzes and coding practice.</p>
            <div className="profile-focus-grid">{profile.focus.map((item, i) => <div key={item}><span>0{i + 1}</span><strong>{item}</strong></div>)}</div>
          </section>

          <section className="profile-card profile-reveal">
            <div className="profile-heading"><div><span className="profile-kicker">Toolbox</span><h2>Skills & interests</h2></div></div>
            <div className="profile-skill-list">{profile.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
          </section>
        </div>

        <aside className="profile-side-column">
          <section className="profile-card profile-reveal profile-next-card">
            <span className="profile-kicker">Next step</span><h2>{continueLearning ? (continueLearning.title || continueLearning.topic || "Continue learning") : "Start your next topic"}</h2>
            <p>{continueLearning?.course || "Pick a course and keep building your learning streak."}</p>
            <Link className="profile-cta" to={continueLearning?.path || "/courses"}>Continue learning →</Link>
          </section>

          <section className="profile-card profile-reveal">
            <div className="profile-heading"><div><span className="profile-kicker">Shortcuts</span><h2>Quick access</h2></div></div>
            <div className="profile-actions">
              <Link to="/bookmarks"><span>↗</span><div><strong>Bookmarks</strong><small>{learningData.bookmarks.length} saved</small></div></Link>
              <Link to="/quizzes"><span>✓</span><div><strong>Quiz history</strong><small>{passedQuizzes.length} passed</small></div></Link>
              <Link to="/courses"><span>⌁</span><div><strong>Courses</strong><small>Keep learning</small></div></Link>
            </div>
          </section>
        </aside>
      </section>
    </main>
  );
}
