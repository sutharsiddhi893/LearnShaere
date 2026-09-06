import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { availableCourses, coursesData } from "../../data";
import "./Courses.css";

const Courses = () => {
  const [query, setQuery] = useState("");
  const [level, setLevel] = useState("all");

  const courses = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return availableCourses.filter((course) => {
      const source = coursesData[course.id];
      const matchesLevel = level === "all" || course.level === level;
      const matchesQuery = !normalized || [course.name, course.label, source.description]
        .join(" ").toLowerCase().includes(normalized);
      return matchesLevel && matchesQuery;
    });
  }, [level, query]);

  return (
    <main className="courses">
      <section className="courses-header container">
        <p className="section-eyebrow">Academic library</p>
        <h1>Choose your programme</h1>
        <p>Browse supplied course material by semester, subject, unit, and topic.</p>
      </section>

      <section className="courses-toolbar container" aria-label="Course filters">
        <label className="courses-search">
          <span className="visually-hidden">Search programmes</span>
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search programmes" />
        </label>
        <div className="courses-filter" role="group" aria-label="Programme level">
          {[['all', 'All'], ['bachelor', "Bachelor's"], ['master', "Master's"]].map(([value, label]) => (
            <button key={value} type="button" className={`courses-filter-btn ${level === value ? "is-active" : ""}`} onClick={() => setLevel(value)}>
              {label}
            </button>
          ))}
        </div>
      </section>

      <section className="courses-body container">
        <div className="courses-grid">
          {courses.map((course) => {
            const source = coursesData[course.id];
            const subjectCount = source.semesters.reduce((total, semester) => total + semester.subjects.length, 0);
            const hasMaterial = subjectCount > 0;
            return (
              <article className={`programme-card ${hasMaterial ? "" : "programme-card--soon"}`} key={course.id}>
                <p className="programme-card__level">{course.level === "bachelor" ? "Undergraduate" : "Postgraduate"}</p>
                <h2>{course.label}</h2>
                <p>{source.description}</p>
                <div className="programme-card__facts">
                  <span>{source.semesters.length} semesters</span>
                  <span>{subjectCount} subjects</span>
                </div>
                {hasMaterial ? <Link to={`/courses/${course.id}/semester/1`}>Explore course <span aria-hidden="true">→</span></Link> : <span className="programme-card__soon">Coming soon</span>}
              </article>
            );
          })}
        </div>
        {courses.length === 0 && <div className="courses-empty"><h2>No programmes found</h2><p>Try a different search term.</p></div>}
      </section>
    </main>
  );
};

export default Courses;
