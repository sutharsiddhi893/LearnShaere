/* =========================================================
   BCA • SEMESTER 1
   Programming Fundamentals Using C   (US01MABCA01)
========================================================= */

import { defineSubject, createUnit } from "../../../helpers";

import {
  unit1Topics,
  unit2Topics,
  unit3Topics,
  unit4Topics,
} from "./programming-fundamentals-using-c/index";

export const programmingFundamentalsUsingC = defineSubject(
  "US01MABCA01",
  "Programming Fundamentals Using C",

  [
    createUnit(
      "bca-c-unit-1",
      "Unit 1",
      "Concept of Algorithm, Flowchart and Languages",
      { topics: unit1Topics }
    ),
    createUnit(
      "bca-c-unit-2",
      "Unit 2",
      "Basics of Programming",
      { topics: unit2Topics }
    ),
    createUnit(
      "bca-c-unit-3",
      "Unit 3",
      "Decision Making, Loops and Arrays",
      { topics: unit3Topics }
    ),
    createUnit(
      "bca-c-unit-4",
      "Unit 4",
      "Strings and Library Functions",
      { topics: unit4Topics }
    ),
  ],

  {
    code: "US01MABCA01",
    documentationId: "programming-in-c",
    hasContent: true,
    contentComplete: true,
  }
);