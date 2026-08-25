/* =========================================================
   BCA • SEMESTER 7
   On Job Training   (US07HSEBCA06)
========================================================= */

import { defineSubject, createUnit } from "../../../helpers";

import {
  unit1Topics,
  unit2Topics,
} from "./on-job-training/index";

export const onJobTraining = defineSubject(
  "US07HSEBCA06",
  "On Job Training",

  [
    createUnit(
      "bca-ojt-unit-1",
      "Unit 1",
      "Corporate Practice & Advanced Development Workflow",
      { topics: unit1Topics }
    ),
    createUnit(
      "bca-ojt-unit-2",
      "Unit 2",
      "OJT Evaluation, Interviews & Career Transition",
      { topics: unit2Topics }
    ),
  ],

  {
    code: "US07HSEBCA06",
    type: "lab",
    documentationId: "on-job-training",
    hasContent: true,
    contentComplete: true,
  }
);