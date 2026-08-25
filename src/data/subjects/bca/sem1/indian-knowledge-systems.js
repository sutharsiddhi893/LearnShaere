/* =========================================================
   BCA • SEMESTER 1
   Indian Knowledge Systems   (US01AEBCA09)
========================================================= */

import { defineSubject, createUnit } from "../../../helpers";

import {
  unit1Topics,
  unit2Topics,
} from "./indian-knowledge-systems/index";

export const indianKnowledgeSystems = defineSubject(
  "US01AEBCA09",
  "Indian Knowledge Systems",

  [
    createUnit(
      "bca-iks-unit-1",
      "Unit 1",
      "Foundations: Philosophy, Yoga and Ayurveda",
      { topics: unit1Topics }
    ),
    createUnit(
      "bca-iks-unit-2",
      "Unit 2",
      "Indian Contributions: Mathematics, Astronomy, Science and Arts",
      { topics: unit2Topics }
    ),
  ],

  {
    code: "US01AEBCA09",
    documentationId: "iks",
    hasContent: true,
    contentComplete: true,
  }
);