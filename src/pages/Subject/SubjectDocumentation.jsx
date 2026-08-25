/* =========================================================
   SUBJECT DOCUMENTATION PAGE
   Route: /courses/:courseId/semester/:semesterNumber
          /subject/:subjectId/topic/:topicId?
========================================================= */

import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import {
  getCourse,
  getSemester,
  getSubject,
  getSubjectOutline,
  getSubjectTopics,
  getTopic,
  getTopicNeighbours,
} from "../../data";

import DocumentationSidebar from "../../components/documentation/DocumentationSidebar/DocumentationSidebar";
import TopicRenderer from "../../components/documentation/TopicRenderer/TopicRenderer";
import TopicNavigation from "../../components/documentation/TopicNavigation/TopicNavigation";

import "./SubjectDocumentation.css";

const SubjectDocumentation = () => {
  const { courseId, semesterNumber, subjectId, topicId } = useParams();
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = React.useState(false);

  /* ---------------- DATA ---------------- */

  const course = getCourse(courseId);
  const semester = getSemester(courseId, semesterNumber);
  const subject = getSubject(courseId, semesterNumber, subjectId);

  const outline = React.useMemo(() => getSubjectOutline(subject), [subject]);
  const topics = React.useMemo(() => getSubjectTopics(subject), [subject]);

  const activeTopicId = topicId || topics[0]?.id || null;
  const topic = getTopic(subject, activeTopicId);
  const { previous, next } = getTopicNeighbours(subject, activeTopicId);

  /* ---------------- PATH BUILDER ---------------- */

  const buildPath = React.useCallback(
    (id) =>
      `/courses/${courseId}/semester/${semesterNumber}/subject/${subjectId}/topic/${id}`,
    [courseId, semesterNumber, subjectId]
  );

  /* ---------------- REDIRECT TO FIRST TOPIC ---------------- */

  React.useEffect(() => {
    if (!topicId && topics.length > 0) {
      navigate(buildPath(topics[0].id), { replace: true });
    }
  }, [topicId, topics, buildPath, navigate]);

  /* ---------------- SCROLL TO TOP ---------------- */

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false);
  }, [activeTopicId]);

  /* ---------------- NOT FOUND ---------------- */

  if (!course || !semester || !subject) {
    return (
      <div className="subject-doc__missing">
        <h2>Subject not found</h2>
        <p>The subject you are looking for does not exist.</p>
        <Link to="/" className="subject-doc__back">
          Go home
        </Link>
      </div>
    );
  }

  /* ---------------- RENDER ---------------- */

  return (
    <div className="subject-doc">
      {/* ---------------- BREADCRUMB ---------------- */}

      <div className="subject-doc__crumbs">
        <Link to="/">Home</Link>
        <span>/</span>
        <Link to={`/courses/${courseId}`}>{course.shortName}</Link>
        <span>/</span>
        <Link to={`/courses/${courseId}/semester/${semesterNumber}`}>
          {semester.title}
        </Link>
        <span>/</span>
        <strong>{subject.name}</strong>
      </div>

      {/* ---------------- MOBILE TOGGLE ---------------- */}

      <button
        type="button"
        className="subject-doc__menu-btn"
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? "Close contents" : "Contents"}
      </button>

      {/* ---------------- LAYOUT ---------------- */}

      <div className="subject-doc__layout">
        <div className={`subject-doc__aside ${menuOpen ? "is-open" : ""}`}>
          <DocumentationSidebar
            subject={subject}
            outline={outline}
            activeTopicId={activeTopicId}
            buildPath={buildPath}
            onNavigate={() => setMenuOpen(false)}
          />
        </div>

        <main className="subject-doc__main">
          <TopicRenderer topic={topic} />

          <TopicNavigation
            previous={previous}
            next={next}
            buildPath={buildPath}
          />
        </main>
      </div>
    </div>
  );
};

export default SubjectDocumentation;