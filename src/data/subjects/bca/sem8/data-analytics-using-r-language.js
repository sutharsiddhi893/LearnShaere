/* =========================================================
   BCA • SEMESTER 8
   Data Analytics Using R Language   (US08CBCA53)
========================================================= */

import { defineSubject, createUnit } from "../../../helpers";

import {
  unit1Topics,
  unit2Topics,
} from "./data-analytics-using-r/index";

export const dataAnalyticsUsingR = defineSubject(
  "US08CBCA53",
  "Data Analytics Using R Language",

  [
    createUnit(
      "bca-r-unit-1",
      "Unit 1",
      "R Fundamentals, Data Structures, Wrangling & Visualization",
      { topics: unit1Topics }
    ),
    createUnit(
      "bca-r-unit-2",
      "Unit 2",
      "Statistics, Hypothesis Testing, Regression & Reporting",
      { topics: unit2Topics }
    ),
  ],

  {
    code: "US08CBCA53",
    documentationId: "data-analytics-using-r",
    hasContent: true,
    contentComplete: true,
  }
);