/* =========================================================
   BCA • SEMESTER 4
   Integrated Personality Development and Life Skills -
   Self Enhancement   (US04CBCA53)
========================================================= */

import { defineSubject, createUnit } from "../../../../helpers";

import {
  unit1Topics,
  unit2Topics,
} from "../integrated-personality-development/index";

export const integratedPersonalityDevelopment = defineSubject(
  "US04CBCA53",
  "Integrated Personality Development and Life Skills - Self Enhancement",

  [
    createUnit(
      "bca-ipd-unit-1",
      "Unit 1",
      "Personality Development and Self Awareness",
      { topics: unit1Topics }
    ),
    createUnit(
      "bca-ipd-unit-2",
      "Unit 2",
      "Life Skills and Professional Development",
      { topics: unit2Topics }
    ),
  ],

  {
    code: "US04CBCA53",
    documentationId: "integrated-personality-development",
    hasContent: true,
    contentComplete: true,
  }
);