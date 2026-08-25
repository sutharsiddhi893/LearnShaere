/* =========================================================
   BCA • SEMESTER 7
   Basics of Generative AI   (US07CBCA52)
========================================================= */

import { defineSubject, createUnit } from "../../../helpers";

import {
  unit1Topics,
  unit2Topics,
} from "./basics-of-generative-ai/index";

export const basicsOfGenerativeAi = defineSubject(
  "US07CBCA52",
  "Basics of Generative AI",

  [
    createUnit(
      "bca-genai-unit-1",
      "Unit 1",
      "Foundations, Architectures & LLM Fundamentals",
      { topics: unit1Topics }
    ),
    createUnit(
      "bca-genai-unit-2",
      "Unit 2",
      "Adaptation, Multimodal AI, Ethics, Tools & Practice",
      { topics: unit2Topics }
    ),
  ],

  {
    code: "US07CBCA52",
    documentationId: "basics-of-generative-ai",
    hasContent: true,
    contentComplete: true,
  }
);

export const basicsOfGenerativeAI = basicsOfGenerativeAi;