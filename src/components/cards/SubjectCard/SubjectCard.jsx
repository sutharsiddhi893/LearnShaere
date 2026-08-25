/* =========================================================
   SUBJECT CARD
========================================================= */

import React from "react";
import { Link, useParams } from "react-router-dom";
import { resolveSubjectLink } from "../../../data";
import "./SubjectCard.css";

const SubjectCard = ({
  subject,
  courseId: courseIdProp,
  semesterNumber: semesterNumberProp,
}) => {
  const params = useParams();

  /* Props win; fall back to the URL. */
  const courseId = courseIdProp || params.courseId;
  const semesterNumber = semesterNumberProp || params.semesterNumber;

  if (!subject) return null;

  const isLab = subject.type === "lab";
  const to = resolveSubjectLink(subject, courseId, semesterNumber);

  const unitCount = subject.units.length;
  const unitWord = isLab
    ? unitCount === 1
      ? "Session"
      : "Sessions"
    : unitCount === 1
      ? "Unit"
      : "Units";

  const ctaText = isLab
    ? "Open Editor"
    : subject.hasContent
      ? "Read Notes"
      : "View Syllabus";

  return (
    <Link
      to={to}
      className={[
        "subject-card",
        isLab ? "is-lab" : "",
        subject.wide ? "is-wide" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {/* ---------------- TOP ---------------- */}

      <div className="subject-card__top">
        <span className="subject-card__code">{subject.code || subject.id}</span>

        <div className="subject-card__badges">
          {isLab && <span className="subject-card__badge is-lab">Lab</span>}

          {subject.hasContent && (
            <span className="subject-card__badge is-notes">Notes</span>
          )}

          {subject.electiveGroup && (
            <span className="subject-card__badge is-elective">Elective</span>
          )}
        </div>
      </div>

      {/* ---------------- NAME ---------------- */}

      <h3 className="subject-card__name">{subject.name}</h3>

      {/* ---------------- UNITS PREVIEW ---------------- */}

      <ul className="subject-card__units">
        {subject.units.slice(0, 3).map((unit) => (
          <li key={unit.id}>
            <span className="subject-card__unit-label">{unit.label}</span>
            <span className="subject-card__unit-title">{unit.title}</span>
          </li>
        ))}

        {unitCount > 3 && (
          <li className="subject-card__more">+{unitCount - 3} more</li>
        )}
      </ul>

      {/* ---------------- FOOTER ---------------- */}

      <div className="subject-card__footer">
        <span className="subject-card__count">
          {unitCount} {unitWord}
        </span>

        <span className="subject-card__cta">
          {ctaText}
          <span className="subject-card__arrow">→</span>
        </span>
      </div>
    </Link>
  );
};

export default SubjectCard;