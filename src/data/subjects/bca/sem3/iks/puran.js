/* =========================================================
   BCA • SEMESTER 3 • IKS
   Puran   (US03IKBCA_PURAN)
========================================================= */

import { defineSubject, createUnit } from "../../../../helpers";
import { unit1Topics, unit2Topics } from "./puran/index";

export const puran = defineSubject(
  "US03IKBCA_PURAN",
  "Puran",

  [
    createUnit(
      "bca-puran-unit-1",
      "Unit 1",
      "Introduction, Pancha Lakshana, and Scientific Insights in Puranas",
      { topics: unit1Topics }
    ),
    createUnit(
      "bca-puran-unit-2",
      "Unit 2",
      "Moral Values, Puranic Legends, and Modern Relevance",
      { topics: unit2Topics }
    ),
  ],

  {
    code: "US03IKBCA_PURAN",
    documentationId: "puran",
    hasContent: true,
    contentComplete: true,
    electiveGroup: "iks",
  }
);