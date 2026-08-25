/* =========================================================
   COURSE — M.TECH
========================================================= */

import { createEmptySemesters } from "../helpers";

export const mtech = {
  id: "mtech",
  name: "Master of Technology",
  shortName: "M.Tech",
  level: "master",
  description:
    "An advanced engineering postgraduate program focused on modern computing, system design, research, specialization, and industry projects.",
  totalSemesters: 4,
  accent: "rose",

  semesters: createEmptySemesters(4, "M.Tech"),
};