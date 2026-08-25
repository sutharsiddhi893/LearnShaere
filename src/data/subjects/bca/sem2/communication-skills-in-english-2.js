/* =========================================================
   BCA • SEMESTER 2
   Communication Skills in English - II   (US01AEBCA15)
========================================================= */

import { defineSubject, createUnit } from "../../../helpers";

import {
  unit1Topics,
  unit2Topics,
} from "./communication-skills-in-english-2/index";

export const communicationSkillsInEnglish2 = defineSubject(
  "US01AEBCA15",
  "Communication Skills in English - II",

  [
    createUnit(
      "bca-cse2-unit-1",
      "Unit 1",
      "Advanced Writing Skills and Professional Communication",
      { topics: unit1Topics }
    ),
    createUnit(
      "bca-cse2-unit-2",
      "Unit 2",
      "Literature, Public Speaking and Cross Cultural Skills",
      { topics: unit2Topics }
    ),
  ],

  {
    code: "US01AEBCA15",
    documentationId: "cse2",
    hasContent: true,
    contentComplete: true,
  }
);