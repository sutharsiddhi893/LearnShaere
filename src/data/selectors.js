/* =========================================================
   LEARNSPHERE — DATA SELECTORS
   Lookup and derivation utilities used by pages.
========================================================= */

import { coursesData } from "./index";

/* =========================================================
   COURSE / SEMESTER / SUBJECT
========================================================= */

/** Get a course object by id. */
export const getCourse = (courseId) => coursesData[courseId] || null;

/** Get a semester by course id + semester number. */
export const getSemester = (courseId, semesterNumber) => {
  const course = getCourse(courseId);
  if (!course) return null;

  const targetSem = semesterNumber || 1;

  return (
    course.semesters.find(
      (semester) => String(semester.number) === String(targetSem)
    ) || course.semesters[0] || null
  );
};

/** Get a subject by course id + semester number + subject id. */
export const getSubject = (courseId, semesterNumber, subjectId) => {
  const semester = getSemester(courseId, semesterNumber);
  if (!semester) return null;

  return semester.subjects.find((subject) => subject.id === subjectId) || null;
};

/** Every subject of a course, flattened, with semester info attached. */
export const getAllSubjects = (courseId) => {
  const course = getCourse(courseId);
  if (!course) return [];

  return course.semesters.flatMap((semester) =>
    semester.subjects.map((subject) => ({
      ...subject,
      courseId,
      semesterNumber: semester.number,
      semesterTitle: semester.title,
    }))
  );
};

/** Find a subject anywhere in a course (no semester needed). */
export const findSubjectById = (courseId, subjectId) =>
  getAllSubjects(courseId).find((subject) => subject.id === subjectId) || null;

/** Find a subject by its documentationId. */
export const findSubjectByDocumentationId = (courseId, documentationId) =>
  getAllSubjects(courseId).find(
    (subject) => subject.documentationId === documentationId
  ) || null;

/** Only lab subjects of a course. */
export const getLabSubjects = (courseId) =>
  getAllSubjects(courseId).filter((subject) => subject.type === "lab");

/** Only theory subjects of a course. */
export const getTheorySubjects = (courseId) =>
  getAllSubjects(courseId).filter((subject) => subject.type !== "lab");

/** Group electives of a semester by their electiveGroup label. */
export const getElectiveGroups = (courseId, semesterNumber) => {
  const semester = getSemester(courseId, semesterNumber);
  if (!semester) return {};

  return semester.subjects.reduce((groups, subject) => {
    if (!subject.electiveGroup) return groups;

    groups[subject.electiveGroup] = groups[subject.electiveGroup] || [];
    groups[subject.electiveGroup].push(subject);

    return groups;
  }, {});
};

/** Subjects of a semester that are NOT electives. */
export const getCoreSubjects = (courseId, semesterNumber) => {
  const semester = getSemester(courseId, semesterNumber);
  if (!semester) return [];

  return semester.subjects.filter((subject) => !subject.electiveGroup);
};

/* =========================================================
   UNITS
========================================================= */

/** Flat list of every unit in a course — useful for search. */
export const getAllUnits = (courseId) =>
  getAllSubjects(courseId).flatMap((subject) =>
    subject.units.map((unit) => ({
      ...unit,
      courseId,
      semesterNumber: subject.semesterNumber,
      subjectId: subject.id,
      subjectName: subject.name,
      link: unit.path || unit.editorPath || null,
    }))
  );

/** Get one unit inside a subject. */
export const getUnit = (subject, unitId) =>
  subject?.units.find((unit) => unit.id === unitId) || null;

/* =========================================================
   TOPICS / CONTENT
========================================================= */

/** All topics of a subject, flattened, with unit info attached. */
export const getSubjectTopics = (subject) => {
  if (!subject) return [];

  return subject.units.flatMap((unit) =>
    (unit.topics || []).map((topic) => ({
      ...topic,
      unitId: unit.id,
      unitLabel: unit.label,
      unitTitle: unit.title,
    }))
  );
};

/** Find one topic inside a subject by its slug. */
export const getTopic = (subject, topicId) =>
  getSubjectTopics(subject).find((topic) => topic.id === topicId) || null;

/** Previous / next topic for footer navigation. */
export const getTopicNeighbours = (subject, topicId) => {
  const topics = getSubjectTopics(subject);
  const index = topics.findIndex((topic) => topic.id === topicId);

  return {
    previous: index > 0 ? topics[index - 1] : null,
    next: index >= 0 && index < topics.length - 1 ? topics[index + 1] : null,
  };
};

/** Sidebar structure: units with their topics. */
export const getSubjectOutline = (subject) => {
  if (!subject) return [];

  return subject.units.map((unit) => ({
    id: unit.id,
    label: unit.label,
    title: unit.title,
    topics: (unit.topics || []).map((topic) => ({
      id: topic.id,
      title: topic.title,
      minutes: topic.minutes || null,
    })),
  }));
};

/* =========================================================
   ASSESSMENT
========================================================= */

/** Every MCQ in a subject — feeds the Quizzes page. */
export const getSubjectMcqs = (subject) =>
  getSubjectTopics(subject).flatMap((topic) =>
    (topic.mcqs || []).map((question) => ({
      ...question,
      topicId: topic.id,
      topicTitle: topic.title,
      unitLabel: topic.unitLabel,
    }))
  );

/** Every long-answer question — feeds exam prep / PDF export. */
export const getSubjectQuestions = (subject) =>
  getSubjectTopics(subject).flatMap((topic) =>
    (topic.questions || []).map((question) => ({
      ...question,
      topicId: topic.id,
      topicTitle: topic.title,
      unitLabel: topic.unitLabel,
    }))
  );

/** Derive a revision cheatsheet directly from existing topic content.
 *
 * Every supported content block is read from the canonical topic data so the
 * resource page never needs a second cheatsheet database.
 */
export const getSubjectCheatsheet = (subject) =>
  getSubjectTopics(subject)
    .map((topic) => {
      const blocks = topic.blocks || [];
      const definitions = blocks
        .filter((block) => block.type === "definition")
        .map((block) => ({ term: block.term, meaning: block.meaning }));

      const keyPoints = blocks
        .filter((block) => block.type === "keyPoints")
        .flatMap((block) => block.items || []);

      const notes = blocks
        .filter((block) => block.type === "note")
        .map((block) => ({ title: block.title, value: block.value, variant: block.variant }));

      const codeExamples = blocks
        .filter((block) => block.type === "code")
        .map((block) => ({ language: block.language, caption: block.caption, value: block.value }));

      const quickFacts = blocks
        .filter((block) => ["heading", "text", "list", "steps", "output"].includes(block.type))
        .map((block) => {
          if (block.type === "heading") return { type: "heading", text: block.text };
          if (block.type === "text") return { type: "text", text: block.value };
          if (block.type === "output") return { type: "text", text: `Output: ${block.value}` };
          return {
            type: block.type === "steps" ? "steps" : "list",
            items: block.items || [],
          };
        });

      const tables = blocks
        .filter((block) => block.type === "table")
        .map((block) => ({
          caption: block.caption,
          headers: block.headers || [],
          rows: block.rows || [],
        }));

      return {
        id: topic.id,
        title: topic.title,
        summary: topic.summary || "",
        tags: topic.tags || [],
        definitions,
        keyPoints,
        notes,
        codeExamples,
        quickFacts,
        tables,
        hasRevisionContent: Boolean(
          topic.title ||
          topic.summary ||
          definitions.length ||
          keyPoints.length ||
          notes.length ||
          codeExamples.length ||
          quickFacts.length ||
          tables.length
        ),
      };
    })
    .filter((topic) => topic.hasRevisionContent);

/* =========================================================
   PROGRESS
========================================================= */

/** How many subjects of a course already have documentation. */
export const getContentProgress = (courseId) => {
  const subjects = getTheorySubjects(courseId);
  const total = subjects.length;
  const done = subjects.filter((subject) => subject.hasContent).length;

  return {
    done,
    total,
    percent: total ? Math.round((done / total) * 100) : 0,
  };
};

/* =========================================================
   SEARCH
========================================================= */

/** Simple global search across subjects, units and topics. */
export const searchCourse = (courseId, query) => {
  const q = String(query || "").trim().toLowerCase();
  if (!q) return { subjects: [], units: [], topics: [] };

  const subjects = getAllSubjects(courseId);

  const matchedSubjects = subjects.filter(
    (subject) =>
      subject.name.toLowerCase().includes(q) ||
      subject.id.toLowerCase().includes(q)
  );

  const matchedUnits = getAllUnits(courseId).filter((unit) =>
    unit.title.toLowerCase().includes(q)
  );

  const matchedTopics = subjects.flatMap((subject) =>
    getSubjectTopics(subject)
      .filter(
        (topic) =>
          topic.title.toLowerCase().includes(q) ||
          (topic.summary || "").toLowerCase().includes(q) ||
          (topic.tags || []).some((tag) => tag.toLowerCase().includes(q))
      )
      .map((topic) => ({
        ...topic,
        subjectId: subject.id,
        subjectName: subject.name,
        semesterNumber: subject.semesterNumber,
      }))
  );

  return {
    subjects: matchedSubjects,
    units: matchedUnits,
    topics: matchedTopics,
  };
};