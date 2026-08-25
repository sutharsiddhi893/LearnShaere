/* =========================================================
   BCA • SEMESTER 6
   Internship   (US06SEBCA07)
========================================================= */

import { defineSubject, createUnit } from "../../../helpers";

import {
  unit1Topics,
  unit2Topics,
} from "./internship/index";

export const internship = defineSubject(
  "US06SEBCA07",
  "Internship",

  [
    createUnit(
      "bca-internship-unit-1",
      "Unit 1",
      "Internship Foundations & Professional Practice",
      { topics: unit1Topics }
    ),
    createUnit(
      "bca-internship-unit-2",
      "Unit 2",
      "Project Development, Presentation & Career Transition",
      { topics: unit2Topics }
    ),
  ],

  {
    code: "US06SEBCA07",
    type: "lab",
    wide: true,
    documentationId: "internship",
    hasContent: true,
    contentComplete: true,
  }
);