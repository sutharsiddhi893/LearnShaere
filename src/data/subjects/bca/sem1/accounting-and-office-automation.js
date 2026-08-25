/* =========================================================
   BCA • SEMESTER 1
   Accounting and Office Automation   (US01IDBCA05)
========================================================= */

import { defineSubject, createUnit } from "../../../helpers";

import {
  unit1Topics,
  unit2Topics,
} from "./accounting-and-office-automation/index";

export const accountingAndOfficeAutomation = defineSubject(
  "US01IDBCA05",
  "Accounting and Office Automation",

  [
    createUnit(
      "bca-accounting-unit-1",
      "Unit 1",
      "Conceptual Framework of Accounting and Spreadsheets",
      { topics: unit1Topics }
    ),
    createUnit(
      "bca-accounting-unit-2",
      "Unit 2",
      "Word Processing and Presentation Tool",
      { topics: unit2Topics }
    ),
  ],

  {
    code: "US01IDBCA05",
    documentationId: "accounting-office-automation",
    hasContent: true,
    contentComplete: true,
  }
);