/* =========================================================
   BCA • SEMESTER 3
   Fundamentals of Data Structure   (US03CBCA53)
========================================================= */

import { defineSubject, createUnit } from "../../../helpers";

import {
  unit1Topics,
  unit2Topics,
} from "./fundamentals-of-data-structure/index";

export const fundamentalsOfDataStructure = defineSubject(
  "US03CBCA53",
  "Fundamentals of Data Structure",

  [
    createUnit(
      "bca-fds-unit-1",
      "Unit 1",
      "Introduction, Arrays, Stacks and Queues",
      { topics: unit1Topics }
    ),
    createUnit(
      "bca-fds-unit-2",
      "Unit 2",
      "Linked Lists, Trees, Graphs, Searching and Sorting",
      { topics: unit2Topics }
    ),
  ],

  {
    code: "US03CBCA53",
    documentationId: "fundamentals-of-data-structure",
    hasContent: true,
    contentComplete: true,
  }
);