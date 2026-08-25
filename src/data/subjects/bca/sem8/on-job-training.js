/* =========================================================
   BCA • SEMESTER 8
   On Job Training   (US08HSEBCA06)
========================================================= */

import { defineSubject, createUnit } from "../../../helpers";

import {
  unit1Topics,
  unit2Topics,
} from "./on-job-training/index";

export const onJobTraining = defineSubject(
  "US08HSEBCA06",
  "On Job Training",

  [
    createUnit(
      "bca-ojt8-unit-1",
      "Unit 1",
      "Ownership, Quality & Professional Depth",
      { topics: unit1Topics }
    ),
    createUnit(
      "bca-ojt8-unit-2",
      "Unit 2",
      "Final Semester Strategy & Career Launch",
      { topics: unit2Topics }
    ),
  ],

  {
    code: "US08HSEBCA06",
    type: "lab",
    documentationId: "on-job-training-sem8",
    hasContent: true,
    contentComplete: true,
  }
);