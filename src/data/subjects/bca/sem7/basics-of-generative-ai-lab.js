/* =========================================================
   BCA • SEMESTER 7
   Basics of Generative AI Lab   (US07HMABCA03)
========================================================= */

import { defineSubject, createUnit } from "../../../helpers";
import { buildEditorPath } from "../../../shared";

const CODE = "US07HMABCA03";

export const basicsOfGenerativeAiLab = defineSubject(
  CODE,
  "Basics of Generative AI Lab",

  [
    createUnit(
      "bca-generative-ai-lab-1",
      "Lab Session 1",
      "Practical Based on Basics of Generative AI",
      buildEditorPath("python", "bca", CODE, 1)
    ),
  ],

  {
    code: CODE,
    type: "lab",
  }
);