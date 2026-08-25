/* =========================================================
   BCA • SEMESTER 5
   Object Oriented Programming - II Lab   (US05MIBCA07)
========================================================= */

import { defineSubject, createUnit } from "../../../helpers";
import { buildEditorPath } from "../../../shared";

const CODE = "US05MIBCA07";

export const objectOrientedProgramming2Lab = defineSubject(
  CODE,
  "Object Oriented Programming - II Lab",

  [
    createUnit(
      "bca-oop-2-lab-1",
      "Lab Session 1",
      "Practical Based on Programming Fundamentals Using Java",
      buildEditorPath("java", "bca", CODE, 1)
    ),
  ],

  {
    code: CODE,
    type: "lab",
  }
);