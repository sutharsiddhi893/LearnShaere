/* =========================================================
   BCA • SEMESTER 1
   Communication Skills in English - I   (US01AEBCA07)
========================================================= */

import { defineSubject, createUnit } from "../../../helpers";

import {
  unit1Topics,
  unit2Topics,
} from "./communication-skills-in-english-1/index";

export const communicationSkillsInEnglish1 = defineSubject(
  "US01AEBCA07",
  "Communication Skills in English - I",

  [
    createUnit(
      "bca-communication-1-unit-1",
      "Unit 1",
      "Reading Skills, Listening and Feedback Skills, Forming Words",
      { topics: unit1Topics }
    ),
    createUnit(
      "bca-communication-1-unit-2",
      "Unit 2",
      "Writing Skills and Speaking Skills",
      { topics: unit2Topics }
    ),
  ],

  {
    code: "US01AEBCA07",
    documentationId: "communication-skills-1",
    hasContent: true,
    contentComplete: true,
  }
);