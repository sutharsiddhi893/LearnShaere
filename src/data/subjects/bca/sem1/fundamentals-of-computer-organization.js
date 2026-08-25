/* =========================================================
   BCA • SEMESTER 1
   Fundamentals of Computer Organization   (US01AEBCA08)
========================================================= */

import { defineSubject, createUnit } from "../../../helpers";

import {
  unit1Topics,
  unit2Topics,
} from "./fundamentals-of-computer-organization/index";

export const fundamentalsOfComputerOrganization = defineSubject(
  "US01AEBCA08",
  "Fundamentals of Computer Organization",

  [
    createUnit(
      "bca-fco-unit-1",
      "Unit 1",
      "Number Systems, Boolean Algebra and Logic Gates",
      { topics: unit1Topics }
    ),
    createUnit(
      "bca-fco-unit-2",
      "Unit 2",
      "Computer Organization, Memory and I/O",
      { topics: unit2Topics }
    ),
  ],

  {
    code: "US01AEBCA08",
    documentationId: "fco",
    hasContent: true,
    contentComplete: true,
  }
);