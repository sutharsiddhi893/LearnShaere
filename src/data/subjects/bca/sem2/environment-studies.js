/* =========================================================
   BCA • SEMESTER 2
   Environment Studies   (US01AEBCA16)
========================================================= */

import { defineSubject, createUnit } from "../../../helpers";

import {
  unit1Topics,
  unit2Topics,
} from "./environment-studies/index";

export const environmentStudies = defineSubject(
  "US01AEBCA16",
  "Environment Studies",

  [
    createUnit(
      "bca-evs-unit-1",
      "Unit 1",
      "Ecosystems, Biodiversity and Natural Resources",
      { topics: unit1Topics }
    ),
    createUnit(
      "bca-evs-unit-2",
      "Unit 2",
      "Social Issues, Sustainability and Human Responsibility",
      { topics: unit2Topics }
    ),
  ],

  {
    code: "US01AEBCA16",
    documentationId: "evs",
    hasContent: true,
    contentComplete: true,
  }
);