/* =========================================================
   COURSE — M.SC IT
========================================================= */

import { createEmptySemesters } from "../helpers";

export const mscIt = {
  id: "msc-it",
  name: "Master of Science in Information Technology",
  shortName: "M.Sc IT",
  level: "master",
  description:
    "An advanced postgraduate program covering programming, database systems, artificial intelligence, computer networks, data structures, modern technologies, and research.",
  totalSemesters: 4,
  accent: "indigo",

  semesters: createEmptySemesters(4, "M.Sc IT"),
};