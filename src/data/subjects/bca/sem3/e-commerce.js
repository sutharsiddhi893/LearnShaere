/* =========================================================
   BCA • SEMESTER 3
   E-Commerce   (US01AEBCA18)
========================================================= */

import { defineSubject, createUnit } from "../../../helpers";

import {
  unit1Topics,
  unit2Topics,
} from "./e-commerce/index";

export const eCommerce = defineSubject(
  "US01AEBCA18",
  "E-Commerce",

  [
    createUnit(
      "bca-ec-unit-1",
      "Unit 1",
      "Introduction to E-Commerce and Business Models",
      { topics: unit1Topics }
    ),
    createUnit(
      "bca-ec-unit-2",
      "Unit 2",
      "Security, Legal Issues, Strategy and Emerging Trends",
      { topics: unit2Topics }
    ),
  ],

  {
    code: "US01AEBCA18",
    documentationId: "ec",
    hasContent: true,
    contentComplete: true,
  }
);