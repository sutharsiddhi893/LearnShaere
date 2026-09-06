/* =========================================================
   SEMESTER PAGE
   Route: /courses/:courseId/semester/:semesterNumber
========================================================= */

import React from "react";
import { useParams, Link } from "react-router-dom";

import {
  getCourse,
  getSemester,
  getCoreSubjects,
  getElectiveGroups,
} from "../../data";

import SubjectCard from "../../components/cards/SubjectCard/SubjectCard";
import "./Semester.css";

const Semester = () => {
  const { courseId, semesterNumber: paramSem } = useParams();
  const semesterNumber = paramSem || "1";

  const course = getCourse(courseId);
  const semester = getSemester(courseId, semesterNumber);

  /* ---------------- SCROLL TO TOP ---------------- */

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [courseId, semesterNumber]);

  /* ---------------- NOT FOUND ---------------- */

  if (!course || !semester) {
    return (
      <div className="semester__missing">
        <h2>Semester not found</h2>
        <p>The semester you are looking for does not exist.</p>
        <Link to="/" className="semester__back">
          Go home
        </Link>
      </div>
    );
  }

  /* ---------------- DATA ---------------- */

  const coreSubjects = getCoreSubjects(courseId, semesterNumber);
  const electiveGroups = getElectiveGroups(courseId, semesterNumber);

  const totalUnits = semester.subjects.reduce(
    (count, subject) => count + subject.units.length,
    0
  );

  const labCount = semester.subjects.filter(
    (subject) => subject.type === "lab"
  ).length;

  /* ---------------- SEMESTER SWITCHER ---------------- */

  const currentNumber = Number(semesterNumber);
  const previousSemester = currentNumber > 1 ? currentNumber - 1 : null;
  const nextSemester =
    currentNumber < course.totalSemesters ? currentNumber + 1 : null;

  /* ---------------- RENDER ---------------- */

  return (
    <div className="semester">
      {/* ---------------- BREADCRUMB ---------------- */}

      <div className="semester__crumbs">
        <Link to="/">Home</Link>
        <span>/</span>
        <Link to={`/courses/${courseId}`}>{course.shortName}</Link>
        <span>/</span>
        <strong>{semester.title}</strong>
      </div>

      {/* ---------------- HEADER ---------------- */}

      <header className="semester__header">
        <div className="semester__header-main">
          <span className="semester__eyebrow">{course.name}</span>
          <h1 className="semester__title">{semester.title}</h1>
          <p className="semester__desc">{semester.description}</p>
        </div>

        <div className="semester__stats">
          <div className="semester__stat">
            <strong>{semester.subjects.length}</strong>
            <span>Subjects</span>
          </div>

          <div className="semester__stat">
            <strong>{totalUnits}</strong>
            <span>Units</span>
          </div>

          <div className="semester__stat">
            <strong>{labCount}</strong>
            <span>Labs</span>
          </div>
        </div>
      </header>

      {/* ---------------- SEMESTER TABS ---------------- */}

      <nav className="semester__tabs">
        {course.semesters.map((item) => (
          <Link
            key={item.number}
            to={`/courses/${courseId}/semester/${item.number}`}
            className={`semester__tab ${item.number === currentNumber ? "is-active" : ""
              }`}
          >
            Sem {item.number}
          </Link>
        ))}
      </nav>

      {/* ---------------- CORE SUBJECTS ---------------- */}

      {coreSubjects.length > 0 && (
        <section className="semester__section">
          <h2 className="semester__section-title">
            Core Subjects
            <span className="semester__count">{coreSubjects.length}</span>
          </h2>

          <div className="semester__grid">
            {coreSubjects.map((subject) => (
              <SubjectCard
                key={subject.id}
                subject={subject}
                courseId={courseId}
                semesterNumber={semesterNumber}
              />
            ))}
          </div>
        </section>
      )}

      {/* ---------------- ELECTIVE GROUPS ---------------- */}

      {Object.entries(electiveGroups).map(([groupName, subjects]) => (
        <section key={groupName} className="semester__section">
          <h2 className="semester__section-title is-elective">
            {groupName}
            <span className="semester__count is-elective">
              {subjects.length}
            </span>
          </h2>

          <div className="semester__grid">
            {subjects.map((subject) => (
              <SubjectCard
                key={subject.id}
                subject={subject}
                courseId={courseId}
                semesterNumber={semesterNumber}
              />
            ))}
          </div>
        </section>
      ))}

      {/* ---------------- EMPTY ---------------- */}

      {semester.subjects.length === 0 && (
        <div className="semester__empty">
          <h3>Coming Soon</h3>
          <p>Subject details for this semester will be added shortly.</p>
        </div>
      )}

      {/* ---------------- PREV / NEXT ---------------- */}

      {(previousSemester || nextSemester) && (
        <nav className="semester__nav">
          {previousSemester ? (
            <Link
              to={`/courses/${courseId}/semester/${previousSemester}`}
              className="semester__nav-link is-prev"
            >
              <span className="semester__nav-dir">← Previous</span>
              <span className="semester__nav-title">
                Semester {previousSemester}
              </span>
            </Link>
          ) : (
            <span />
          )}

          {nextSemester && (
            <Link
              to={`/courses/${courseId}/semester/${nextSemester}`}
              className="semester__nav-link is-next"
            >
              <span className="semester__nav-dir">Next →</span>
              <span className="semester__nav-title">
                Semester {nextSemester}
              </span>
            </Link>
          )}
        </nav>
      )}
    </div>
  );
};

export default Semester;