/* =========================================================
   BCA • SEMESTER 2
   Advanced C Programming Lab   (US02MABCA02)
========================================================= */

import { defineSubject, createUnit } from "../../../helpers";
import { buildEditorPath } from "../../../shared";

const CODE = "US02MABCA02";

export const advancedCProgrammingLab = defineSubject(
  CODE,
  "Advanced C Programming Lab",

  [
    createUnit(
      "bca-advanced-c-lab-1",
      "Lab Session 1",
      "Practical Based on Unit 1 and Unit 2",
      buildEditorPath("c", "bca", CODE, 1)
    ),
    createUnit(
      "bca-advanced-c-lab-2",
      "Lab Session 2",
      "Practical Based on Unit 3 and Unit 4",
      buildEditorPath("c", "bca", CODE, 2)
    ),
  ],

  {
    code: CODE,
    type: "lab",
  }
);