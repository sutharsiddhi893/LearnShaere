/* =========================================================
   LEARNSPHERE — SHARED HELPERS
   Factory functions for courses, semesters, subjects,
   units, topics and content blocks.
========================================================= */

/* =========================================================
   CONSTANTS
========================================================= */

export const SEMESTER_ROMAN = [
  "I",
  "II",
  "III",
  "IV",
  "V",
  "VI",
  "VII",
  "VIII",
];

/* =========================================================
   UNITS
========================================================= */

/**
 * createUnit
 * @param {string} id      unique unit id
 * @param {string} label   "Unit 1" / "Lab Session 1" / "Topic 1"
 * @param {string} title   unit heading
 * @param {string|object} target
 *        string → editorPath
 *        object → { path, topics, ... }
 */
export const createUnit = (id, label, title, target = null) => {
  const unit = { id, label, title };

  /* A string target is an editor route. */
  if (typeof target === "string") {
    unit.editorPath = target;
  }

  /* An object target may contain path / topics / anything else. */
  if (target && typeof target === "object" && !Array.isArray(target)) {
    Object.assign(unit, target);
  }

  return unit;
};

/**
 * createUnits — bulk create units from an array of titles.
 */
export const createUnits = (prefix, titles, label = "Unit") =>
  titles.map((title, index) =>
    createUnit(`${prefix}-${index + 1}`, `${label} ${index + 1}`, title)
  );

/**
 * attachTopics — returns a copy of the unit with topics added.
 */
export const attachTopics = (unit, topics = []) => ({
  ...unit,
  topics,
});

/**
 * withContent — attach topics to units by index.
 * withContent(units, { 0: unit1Topics, 1: unit2Topics })
 */
export const withContent = (units, contentByIndex = {}) =>
  units.map((unit, index) =>
    contentByIndex[index] ? attachTopics(unit, contentByIndex[index]) : unit
  );

/* =========================================================
   SUBJECTS
========================================================= */

/**
 * createSubject
 * @param {string} id       subject code, e.g. "US01MABCA01"
 * @param {string} name     full subject name
 * @param {Array}  units
 * @param {Object} options  { code, type, wide, electiveGroup,
 *                            credits, documentationId, path,
 *                            hasContent }
 */
export const createSubject = (id, name, units = [], options = {}) => ({
  id,
  name,
  ...options,
  units,
});

/** Alias used inside /subjects/** — reads like a declaration. */
export const defineSubject = createSubject;

/* =========================================================
   SEMESTERS
========================================================= */

export const createSemester = (number, title, description, subjects = []) => ({
  number,
  title,
  description,
  subjects,
});

export const createEmptySemesters = (total, programName) =>
  Array.from({ length: total }, (_, index) => {
    const number = index + 1;
    const roman = SEMESTER_ROMAN[index] || String(number);

    return createSemester(
      number,
      `Semester ${roman}`,
      `${programName} Semester ${roman} curriculum. Subject details will be added soon.`,
      []
    );
  });

/* =========================================================
   CONTENT BLOCKS
========================================================= */

export const heading = (text, level = 2) => ({
  type: "heading",
  level,
  text,
});

export const text = (value) => ({
  type: "text",
  value,
});

export const list = (items, ordered = false) => ({
  type: "list",
  ordered,
  items,
});

export const code = (value, language = "c", caption = null) => ({
  type: "code",
  language,
  caption,
  value,
});

export const output = (value) => ({
  type: "output",
  value,
});

export const table = (headers, rows, caption = null) => ({
  type: "table",
  caption,
  headers,
  rows,
});

/** variant: "info" | "tip" | "warning" | "exam" */
export const note = (value, variant = "info", title = null) => ({
  type: "note",
  variant,
  title,
  value,
});

export const definition = (term, meaning) => ({
  type: "definition",
  term,
  meaning,
});

export const steps = (items) => ({
  type: "steps",
  items,
});

export const image = (src, alt, caption = null) => ({
  type: "image",
  src,
  alt,
  caption,
});

export const keyPoints = (items) => ({
  type: "keyPoints",
  items,
});

export const divider = () => ({
  type: "divider",
});

/* =========================================================
   ASSESSMENT
========================================================= */

export const mcq = (question, options, answerIndex, explanation = null) => ({
  type: "mcq",
  question,
  options,
  answerIndex,
  explanation,
});

export const qa = (question, answer, marks = null) => ({
  type: "qa",
  question,
  answer,
  marks,
});

/* =========================================================
   TOPICS
========================================================= */

/**
 * createTopic
 * @param {string} id      url slug
 * @param {string} title   page heading
 * @param {Array}  blocks  content blocks
 * @param {Object} options { summary, minutes, tags, mcqs, questions }
 */
export const createTopic = (id, title, blocks = [], options = {}) => ({
  id,
  title,
  ...options,
  blocks,
});
