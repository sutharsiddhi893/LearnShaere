/* =========================================================
   BCA • SEMESTER 3 • IKS
   Mimansa
========================================================= */

import { defineSubject, createUnit } from "../../../../helpers";

import { unit1Topics, unit2Topics } from "./mimansa/index";

export const mimansa = defineSubject(
  "US03IKBCA_MIMANSA", // replace with exact code if you have it
  "Mimansa",
  [
    createUnit(
      "bca-mimansa-unit-1",
      "Unit 1",
      "Introduction, Meaning and Core Concepts of Mimansa",
      { topics: unit1Topics }
    ),
    createUnit(
      "bca-mimansa-unit-2",
      "Unit 2",
      "Interpretation, Duty and Modern Relevance",
      { topics: unit2Topics }
    ),
  ],
  {
    code: "US03IKBCA_MIMANSA",
    documentationId: "mimansa",
    hasContent: true,
    contentComplete: true,
    electiveGroup: "iks",
  }
);