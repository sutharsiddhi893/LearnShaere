/* =========================================================
   COURSE — B.TECH
========================================================= */

import { createEmptySemesters } from "../helpers";

export const btech = {
  id: "btech",
  name: "Bachelor of Technology",
  shortName: "B.Tech",
  level: "bachelor",
  description:
    "An engineering-focused undergraduate program covering programming, computer systems, software engineering, networking, cloud, artificial intelligence, and modern technologies.",
  totalSemesters: 8,
  accent: "orange",

  semesters: createEmptySemesters(8, "B.Tech"),
};