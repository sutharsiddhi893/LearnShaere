/* =========================================================
   SHARED — PATH BUILDERS
========================================================= */

/* =========================================================
   EDITOR PATHS
========================================================= */

/**
 * buildEditorPath
 * @param {string} language  c | cpp | java | python | sql | php | html |
 *                           javascript | bash | vbnet | csharp | aspnet |
 *                           r | android | arduino
 * @param {string} courseId  bca | bsc-it | mca | msc-it
 * @param {string} subjectId subject code
 * @param {string|number} session
 */
export const buildEditorPath = (language, courseId, subjectId, session = 1) =>
  `/editor/${language}?course=${courseId}&subject=${subjectId}&session=${session}`;

/* =========================================================
   DOCUMENTATION PATHS
========================================================= */

/** /courses/bca/semester/1 */
export const buildSemesterPath = (courseId, semesterNumber) =>
  `/courses/${courseId}/semester/${semesterNumber}`;

/** /courses/bca/semester/1/subject/US01MABCA01 */
export const buildSubjectPath = (courseId, semesterNumber, subjectId) =>
  `/courses/${courseId}/semester/${semesterNumber}/subject/${subjectId}`;

/** /courses/bca/semester/1/subject/US01MABCA01/topic/algorithm */
export const buildTopicPath = (courseId, semesterNumber, subjectId, topicId) =>
  `${buildSubjectPath(courseId, semesterNumber, subjectId)}/topic/${topicId}`;

/**
 * buildDocPath
 * Legacy documentation route using documentationId.
 */
export const buildDocPath = (courseId, semesterNumber, documentationId, topicId) =>
  `/courses/${courseId}/semester/${semesterNumber}/subject/${documentationId}/topic/${topicId}`;

/* =========================================================
   LINK RESOLVER
========================================================= */

/**
 * resolveSubjectLink
 * Decides where a SubjectCard should navigate.
 *   lab subject    → first unit's editorPath
 *   theory subject → documentation page
 */
export const resolveSubjectLink = (subject, courseId, semesterNumber) => {
  if (!subject) return "#";

  if (subject.type === "lab") {
    return subject.units?.[0]?.editorPath || "#";
  }

  return buildSubjectPath(courseId, semesterNumber, subject.id);
};