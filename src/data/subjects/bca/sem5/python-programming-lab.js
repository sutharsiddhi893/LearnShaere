/* =========================================================
   BCA • SEMESTER 5
   Python Programming Lab   (US05MIBCA05)
========================================================= */

import { defineSubject, createUnit } from "../../../helpers";
import { buildEditorPath } from "../../../shared";

const CODE = "US05MIBCA05";

export const pythonProgrammingLab = defineSubject(
  CODE,
  "Python Programming Lab",

  [
    createUnit(
      "bca-python-lab-1",
      "Lab Session 1",
      "Practical Based on Programming Fundamentals of Python",
      buildEditorPath("python", "bca", CODE, 1)
    ),
  ],

  {
    code: CODE,
    type: "lab",
  }
);