/* =========================================================
   BCA • SEMESTER 8
   Basics of Machine Learning Lab   (US08HMABCA03)
========================================================= */

import { defineSubject, createUnit } from "../../../helpers";
import { buildEditorPath } from "../../../shared";

const CODE = "US08HMABCA03";

export const basicsOfMachineLearningLab = defineSubject(
  CODE,
  "Basics of Machine Learning Lab",

  [
    createUnit(
      "bca-machine-learning-lab-1",
      "Lab Session 1",
      "Practical Based on Basics of Machine Learning",
      buildEditorPath("python", "bca", CODE, 1)
    ),
  ],

  {
    code: CODE,
    type: "lab",
  }
);