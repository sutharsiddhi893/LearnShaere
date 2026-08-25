/* =========================================================
   BCA • SEMESTER 2
   Web Application Development - II   (US01AEBCA13)
========================================================= */

import { defineSubject, createUnit } from "../../../helpers";

import {
  unit1Topics,
  unit2Topics,
} from "./web-application-development-2/index";

export const webApplicationDevelopment2 = defineSubject(
  "US01AEBCA13",
  "Web Application Development - II",

  [
    createUnit(
      "bca-wad2-unit-1",
      "Unit 1",
      "Advanced JavaScript, jQuery and AJAX",
      { topics: unit1Topics }
    ),
    createUnit(
      "bca-wad2-unit-2",
      "Unit 2",
      "React Basics, Node.js and Full Stack Web Development",
      { topics: unit2Topics }
    ),
  ],

  {
    code: "US01AEBCA13",
    documentationId: "wad2",
    hasContent: true,
    contentComplete: true,
  }
);