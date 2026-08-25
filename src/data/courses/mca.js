/* =========================================================
   COURSE — MCA
========================================================= */

import { createEmptySemesters } from "../helpers";

export const mca = {
  id: "mca",
  name: "Master of Computer Applications",
  shortName: "MCA",
  level: "master",
  description:
    "An advanced postgraduate program focused on software architecture, full-stack engineering, data, cloud, and research.",
  totalSemesters: 4,
  accent: "cyan",

  semesters: createEmptySemesters(4, "MCA"),
};