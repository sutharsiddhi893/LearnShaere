/* =========================================================
   BCA • SEMESTER 4
   Operating Systems   (US04MABCA02)
========================================================= */

import { defineSubject, createUnits } from "../../../helpers";

export const operatingSystems = defineSubject(
  "US04MABCA02",
  "Operating Systems",

  createUnits("bca-operating-systems-unit", [
    "Introduction and Scheduling",
    "Memory Management",
    "Process Synchronization, Deadlocks and Introduction to Linux",
    "Basic Linux Commands",
  ]),

  {
    code: "US04MABCA02",
  }
);