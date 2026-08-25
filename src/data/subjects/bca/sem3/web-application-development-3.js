/* =========================================================
   BCA • SEMESTER 3
   Web Application Development - III   (US03CBCA51)
   JavaScript / client-side  (not PHP)
========================================================= */

import { defineSubject, createUnit } from "../../../helpers";

import {
  unit1Topics,
  unit2Topics,
  unit3Topics,
  unit4Topics,
} from "./web-application-development-3/index";

export const webApplicationDevelopment3 = defineSubject(
  "US03CBCA51",
  "Web Application Development - III",

  [
    createUnit(
      "bca-wad-3-unit-1",
      "Unit 1",
      "JavaScript Fundamentals & ES6+",
      { topics: unit1Topics }
    ),
    createUnit(
      "bca-wad-3-unit-2",
      "Unit 2",
      "DOM, Events and Forms",
      { topics: unit2Topics }
    ),
    createUnit(
      "bca-wad-3-unit-3",
      "Unit 3",
      "Async JavaScript, Fetch and JSON",
      { topics: unit3Topics }
    ),
    createUnit(
      "bca-wad-3-unit-4",
      "Unit 4",
      "Storage, Modules, Classes and Mini Apps",
      { topics: unit4Topics }
    ),
  ],

  {
    code: "US03CBCA51",
    documentationId: "web-application-development-3",
    hasContent: true,
    contentComplete: true,
  }
);