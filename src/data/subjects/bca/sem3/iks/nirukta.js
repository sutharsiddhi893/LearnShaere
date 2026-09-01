/* =========================================================
   BCA • SEMESTER 3 • IKS
   Nirukta
========================================================= */

import { defineSubject, createUnit } from "../../../../helpers";
import { unit1Topics, unit2Topics } from "./nirukta/index";

export const nirukta = defineSubject(
  "US03IKBCA_NIRUKTA", // replace with exact code if available
  "Nirukta",
  [
    createUnit(
      "bca-nirukta-unit-1",
      "Unit 1",
      "Meaning, Scope and Foundations of Nirukta",
      { topics: unit1Topics }
    ),
    createUnit(
      "bca-nirukta-unit-2",
      "Unit 2",
      "Methods, Word Categories and Modern Relevance",
      { topics: unit2Topics }
    ),
  ],
  {
    code: "US03IKBCA_NIRUKTA",
    documentationId: "nirukta",
    hasContent: true,
    contentComplete: true,
    electiveGroup: "iks",
  }
);