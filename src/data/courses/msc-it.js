/* =========================================================
   COURSE — M.SC IT
   Master of Science in Information Technology
   Semesters 1 & 2 migrated to /subjects/msc-it/**
========================================================= */

import { createSemester, createEmptySemesters } from "../helpers";

/* ---------------- SUBJECTS BY SEMESTER ---------------- */

import SEM1_SUBJECTS from "../subjects/msc-it/sem1";
import SEM2_SUBJECTS from "../subjects/msc-it/sem2";

/* =========================================================
   COURSE DEFINITION
========================================================= */

const emptySemesters = createEmptySemesters(4, "M.Sc IT");

export const mscIt = {
  id: "msc-it",
  name: "Master of Science in Information Technology",
  shortName: "M.Sc IT",
  level: "master",
  accent: "indigo",
  description:
    "An advanced postgraduate program covering programming, database systems, artificial intelligence, computer networks, data structures, modern technologies, and research.",
  totalSemesters: 4,

  semesters: [
    /* ===================================================
       SEMESTER I
    =================================================== */

    createSemester(
      1,
      "Semester I",
      "Python programming, database management systems, artificial intelligence, computer networks, computer fundamentals, and practical training.",
      SEM1_SUBJECTS
    ),

    /* ===================================================
       SEMESTER II
    =================================================== */

    createSemester(
      2,
      "Semester II",
      "Java programming, web technology, machine learning, cyber security, software engineering, and practical training.",
      SEM2_SUBJECTS
    ),

    /* ===================================================
       SEMESTERS III & IV (Coming Soon)
    =================================================== */

    emptySemesters[2],
    emptySemesters[3],
  ],
};

export default mscIt;