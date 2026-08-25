/* =========================================================
   COURSE — B.SC IT
========================================================= */

import { createEmptySemesters } from "../helpers";

export const bscIt = {
  id: "bsc-it",
  name: "Bachelor of Science in Information Technology",
  shortName: "B.Sc IT",
  level: "bachelor",
  description:
    "A technology-focused program covering computing fundamentals, programming, information systems, and modern IT.",
  totalSemesters: 8,
  accent: "blue",

  semesters: createEmptySemesters(8, "B.Sc IT"),
};