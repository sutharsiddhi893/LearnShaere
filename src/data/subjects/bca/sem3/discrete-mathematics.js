/* =========================================================
   BCA • SEMESTER 3
   Discrete Mathematics   (US03CBCA53)
========================================================= */

import { defineSubject, createUnit, attachTopics } from "../../../helpers";

import {
  unit1Topics,
  unit2Topics,
} from "./discrete-mathematics/index";

export const discreteMathematics = defineSubject(
  "discrete-mathematics", // stable route ID; supplied code is preserved below
  "Discrete Mathematics",

  [
    attachTopics(
      createUnit(
        "bca-discrete-math-unit-1",
        "Unit 1",
        "Vectors and Matrices"
      ),
      unit1Topics
    ),
    attachTopics(
      createUnit(
        "bca-discrete-math-unit-2",
        "Unit 2",
        "Graph Theory"
      ),
      unit2Topics
    ),
  ],

  {
    code: "US03CBCA53",
    documentationId: "discrete-mathematics",
    hasContent: true,
    contentComplete: true,
  }
);
