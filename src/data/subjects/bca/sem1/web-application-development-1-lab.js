/* =========================================================
   BCA • SEMESTER 1
   Web Application Development - I Lab   (US01MIBCA04)
========================================================= */

import { defineSubject, createUnit } from "../../../helpers";
import { buildEditorPath } from "../../../shared";

const CODE = "US01MIBCA04";

export const webApplicationDevelopment1Lab = defineSubject(
  CODE,
  "Web Application Development - I Lab",

  [
    createUnit(
      "bca-web-1-lab-1",
      "Lab Session 1",
      "Practical Based on Web Application Development - I",
      buildEditorPath("html", "bca", CODE, 1)
    ),
  ],

  {
    code: CODE,
    type: "lab",
  }
);