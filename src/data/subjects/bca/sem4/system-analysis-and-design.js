/* =========================================================
   BCA • SEMESTER 4
   System Analysis and Design   (US04CBCA51)
========================================================= */

import { defineSubject, createUnit } from "../../../helpers";

import {
  unit1Topics,
  unit2Topics,
} from "./system-analysis-and-design/index";

export const systemAnalysisAndDesign = defineSubject(
  "US04CBCA51",
  "System Analysis and Design",

  [
    createUnit(
      "bca-sad-unit-1",
      "Unit 1",
      "System Concepts, SDLC and Requirements Analysis",
      { topics: unit1Topics }
    ),
    createUnit(
      "bca-sad-unit-2",
      "Unit 2",
      "System Design, Modeling, Testing and Implementation",
      { topics: unit2Topics }
    ),
  ],

  {
    code: "US04CBCA51",
    documentationId: "system-analysis-and-design",
    hasContent: true,
    contentComplete: true,
  }
);