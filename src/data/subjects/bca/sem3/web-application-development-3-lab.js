/* =========================================================
   BCA • SEMESTER 3
   Web Application Development - III Lab   (US03IDBCA05)
========================================================= */

import { defineSubject, createUnit } from "../../../helpers";
import { buildEditorPath } from "../../../shared";

const CODE = "US03IDBCA05";

export const webApplicationDevelopment3Lab = defineSubject(
  CODE,
  "Web Application Development - III Lab",

  [
    createUnit(
      "bca-web-3-lab-1",
      "Lab Session 1",
      "Practical Based on Web Application Development - III",
      buildEditorPath("javascript", "bca", CODE, 1)
    ),
  ],

  {
    code: CODE,
    type: "lab",
  }
);