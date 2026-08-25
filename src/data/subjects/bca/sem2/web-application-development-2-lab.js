/* =========================================================
   BCA • SEMESTER 2
   Web Application Development - II Lab   (US02MIBCA04)
========================================================= */

import { defineSubject, createUnit } from "../../../helpers";
import { buildEditorPath } from "../../../shared";

const CODE = "US02MIBCA04";

export const webApplicationDevelopment2Lab = defineSubject(
  CODE,
  "Web Application Development - II Lab",

  [
    createUnit(
      "bca-web-2-lab-1",
      "Lab Session 1",
      "Practical Based on Web Application Development - II",
      buildEditorPath("javascript", "bca", CODE, 1)
    ),
  ],

  {
    code: CODE,
    type: "lab",
  }
);