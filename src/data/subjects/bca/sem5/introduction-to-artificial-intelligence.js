/* =========================================================
   BCA • SEMESTER 5
   Introduction to Artificial Intelligence   (US05CBCA51)
========================================================= */

import { defineSubject, createUnit } from "../../../helpers";

import {
  unit1Topics,
  unit2Topics,
} from "./introduction-to-artificial-intelligence/index";

export const introductionToArtificialIntelligence = defineSubject(
  "US05CBCA51",
  "Introduction to Artificial Intelligence",

  [
    createUnit(
      "bca-ai-unit-1",
      "Unit 1",
      "Fundamentals of AI, Agents and Search Strategies",
      { topics: unit1Topics }
    ),
    createUnit(
      "bca-ai-unit-2",
      "Unit 2",
      "Knowledge Representation, Machine Learning, Expert Systems & NLP",
      { topics: unit2Topics }
    ),
  ],

  {
    code: "US05CBCA51",
    documentationId: "introduction-to-artificial-intelligence",
    hasContent: true,
    contentComplete: true,
  }
);