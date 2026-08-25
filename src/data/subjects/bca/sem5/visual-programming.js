/* =========================================================
   BCA • SEMESTER 5
   Visual Programming   (US05CBCA54)
========================================================= */

import { defineSubject, createUnit } from "../../../helpers";

import {
  unit1Topics,
  unit2Topics,
} from "./visual-programming/index";

export const visualProgramming = defineSubject(
  "US05CBCA54",
  "Visual Programming",

  [
    createUnit(
      "bca-vp-unit-1",
      "Unit 1",
      "Introduction to .NET, C# Fundamentals, OOP & Windows Forms",
      { topics: unit1Topics }
    ),
    createUnit(
      "bca-vp-unit-2",
      "Unit 2",
      "Advanced Controls, Menus, Dialogs, MDI Applications & ADO.NET",
      { topics: unit2Topics }
    ),
  ],

  {
    code: "US05CBCA54",
    documentationId: "visual-programming",
    hasContent: true,
    contentComplete: true,
  }
);