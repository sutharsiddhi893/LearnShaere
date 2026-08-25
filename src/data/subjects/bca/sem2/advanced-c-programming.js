/* =========================================================
   BCA • SEMESTER 2
   Advanced C Programming   (US01AEBCA11)
========================================================= */

import { defineSubject, createUnit } from "../../../helpers";

import {
  unit1Topics,
  unit2Topics,
} from "./advanced-c-programming/index";

export const advancedCProgramming = defineSubject(
  "US01AEBCA11",
  "Advanced C Programming",

  [
    createUnit(
      "bca-acp-unit-1",
      "Unit 1",
      "Pointers, Dynamic Memory and Data Structures in C",
      { topics: unit1Topics }
    ),
    createUnit(
      "bca-acp-unit-2",
      "Unit 2",
      "Structures, Unions, Bitwise Ops and Advanced Topics",
      { topics: unit2Topics }
    ),
  ],

  {
    code: "US01AEBCA11",
    documentationId: "acp",
    hasContent: true,
    contentComplete: true,
  }
);