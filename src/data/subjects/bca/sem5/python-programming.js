/* =========================================================
   BCA • SEMESTER 5
   Python Programming   (US05CBCA53)
========================================================= */

import { defineSubject, createUnit } from "../../../helpers";

import {
  unit1Topics,
  unit2Topics,
} from "./python-programming/index";

export const pythonProgramming = defineSubject(
  "US05CBCA53",
  "Python Programming",

  [
    createUnit(
      "bca-python-unit-1",
      "Unit 1",
      "Python Basics, Control Structures, Data Structures & Functions",
      { topics: unit1Topics }
    ),
    createUnit(
      "bca-python-unit-2",
      "Unit 2",
      "Object-Oriented Programming, File Handling, Exceptions & Data Science",
      { topics: unit2Topics }
    ),
  ],

  {
    code: "US05CBCA53",
    documentationId: "python-programming",
    hasContent: true,
    contentComplete: true,
  }
);