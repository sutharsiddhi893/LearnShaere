/* =========================================================
   BCA • SEMESTER 3 • IKS
   Vyakaranam   (US03IKBCA_VYAKARANAM)
========================================================= */

import { defineSubject, createUnit } from "../../../../helpers";
import { unit1Topics, unit2Topics } from "./vyakaranam/index";

export const vyakaranam = defineSubject(
  "US03IKBCA_VYAKARANAM", // replace with exact official code if you have it
  "Vyakaranam",

  [
    createUnit(
      "bca-vyakaranam-unit-1",
      "Unit 1",
      "Meaning, Panini and Foundations of Sanskrit Grammar",
      { topics: unit1Topics }
    ),
    createUnit(
      "bca-vyakaranam-unit-2",
      "Unit 2",
      "Karaka, Samasa, Philosophy of Language and Modern Relevance",
      { topics: unit2Topics }
    ),
  ],

  {
    code: "US03IKBCA_VYAKARANAM",
    documentationId: "vyakaranam",
    hasContent: true,
    contentComplete: true,
    electiveGroup: "iks",
  }
);