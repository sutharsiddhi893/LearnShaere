/* =========================================================
   BCA • SEMESTER 1
   Programming Fundamentals Using C Lab   (US01MABCA02)
========================================================= */

import { defineSubject, createUnit } from "../../../helpers";
import { buildEditorPath } from "../../../shared";

const CODE = "US01MABCA02";

export const programmingFundamentalsUsingCLab = defineSubject(
  CODE,
  "Programming Fundamentals Using C Lab",

  [
    createUnit(
      "bca-c-lab-1",
      "Lab Session 1",
      "Practical Based on Unit 1 and Unit 2",
      buildEditorPath("c", "bca", CODE, 1)
    ),
    createUnit(
      "bca-c-lab-2",
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