/* =========================================================
   BCA • SEMESTER 6
   Advanced Web Development Technology Lab   (US06MABCA03)
========================================================= */

import { defineSubject, createUnit } from "../../../helpers";
import { buildEditorPath } from "../../../shared";

const CODE = "US06MABCA03";

export const advancedWebDevelopmentTechnologyLab = defineSubject(
  CODE,
  "Advanced Web Development Technology Lab",

  [
    createUnit(
      "bca-aspnet-lab-1",
      "Lab Session 1",
      "Practical Based on Programming Fundamentals Using ASP.NET",
      buildEditorPath("aspnet", "bca", CODE, 1)
    ),
  ],

  {
    code: CODE,
    type: "lab",
  }
);