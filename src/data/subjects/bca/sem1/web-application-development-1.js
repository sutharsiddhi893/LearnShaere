/* =========================================================
   BCA • SEMESTER 1
   Web Application Development - I   (US01MIBCA03)
========================================================= */

import { defineSubject, createUnit } from "../../../helpers";

import {
  unit1Topics,
  unit2Topics,
} from "./web-application-development-1/index";

export const webApplicationDevelopment1 = defineSubject(
  "US01MIBCA03",
  "Web Application Development - I",

  [
    createUnit(
      "bca-web-1-unit-1",
      "Unit 1",
      "Web Page Designing - I",
      { topics: unit1Topics }
    ),
    createUnit(
      "bca-web-1-unit-2",
      "Unit 2",
      "Web Page Designing - II",
      { topics: unit2Topics }
    ),
  ],

  {
    code: "US01MIBCA03",
    documentationId: "web-development-1",
    hasContent: true,
    contentComplete: true,
  }
);