/* =========================================================
   BCA • SEMESTER 3 • IKS
   Shiksha   (US03IKBCA_SHIKSHA)
========================================================= */

import { defineSubject, createUnit } from "../../../../helpers";
import { unit1Topics, unit2Topics } from "./shiksha/index";

export const shiksha = defineSubject(
  "US03IKBCA_SHIKSHA",
  "Shiksha",

  [
    createUnit(
      "bca-shiksha-unit-1",
      "Unit 1",
      "Meaning, Scope, and Six Core Elements of Shiksha",
      { topics: unit1Topics }
    ),
    createUnit(
      "bca-shiksha-unit-2",
      "Unit 2",
      "Articulation Mechanics, Preservation Techniques, and Modern NLP",
      { topics: unit2Topics }
    ),
  ],

  {
    code: "US03IKBCA_SHIKSHA",
    documentationId: "shiksha",
    hasContent: true,
    contentComplete: true,
    electiveGroup: "iks",
  }
);