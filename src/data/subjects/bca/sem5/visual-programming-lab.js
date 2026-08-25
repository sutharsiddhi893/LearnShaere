/* =========================================================
   BCA • SEMESTER 5
   Visual Programming Lab   (US05MABCA03)
========================================================= */

import { defineSubject, createUnit } from "../../../helpers";
import { buildEditorPath } from "../../../shared";

const CODE = "US05MABCA03";

export const visualProgrammingLab = defineSubject(
  CODE,
  "Visual Programming Lab",

  [
    createUnit(
      "bca-visual-programming-lab-1",
      "Lab Session 1",
      "Practical Based on Programming Fundamentals Using Visual Basic .NET",
      buildEditorPath("vbnet", "bca", CODE, 1)
    ),
  ],

  {
    code: CODE,
    type: "lab",
  }
);