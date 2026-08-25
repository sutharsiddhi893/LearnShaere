/* =========================================================
   BCA • SEMESTER 7
   Scripting with PHP - II   (US07CBCA54)
========================================================= */

import { defineSubject, createUnit } from "../../../helpers";

import {
  unit1Topics,
  unit2Topics,
} from "./scripting-with-php-2/index";

export const scriptingWithPhp2 = defineSubject(
  "US07CBCA54",
  "Scripting with PHP - II",

  [
    createUnit(
      "bca-php2-unit-1",
      "Unit 1",
      "Advanced OOP, MVC, Namespaces, Composer & REST APIs",
      { topics: unit1Topics }
    ),
    createUnit(
      "bca-php2-unit-2",
      "Unit 2",
      "Advanced Security, Capstone Integration & Professional Practice",
      { topics: unit2Topics }
    ),
  ],

  {
    code: "US07CBCA54",
    documentationId: "scripting-with-php-2",
    hasContent: true,
    contentComplete: true,
  }
);