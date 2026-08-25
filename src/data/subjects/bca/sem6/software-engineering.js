/* =========================================================
   BCA • SEMESTER 5
   Software Engineering   (US05CBCA51)
========================================================= */

import { defineSubject, createUnit } from "../../../helpers";

import {
  unit1Topics,
  unit2Topics,
} from "./software-engineering/index";

export const softwareEngineering = defineSubject(
  "US05CBCA51",
  "Software Engineering",

  [
    createUnit(
      "bca-se-unit-1",
      "Unit 1",
      "Software Process, Models and Requirements",
      { topics: unit1Topics }
    ),
    createUnit(
      "bca-se-unit-2",
      "Unit 2",
      "Software Design, Testing, Quality and Maintenance",
      { topics: unit2Topics }
    ),
  ],

  {
    code: "US05CBCA51",
    documentationId: "software-engineering",
    hasContent: true,
    contentComplete: true,
  }
);