/* =========================================================
   BCA • SEMESTER 6
   Scripting with PHP - I   (US06CBCA52)
========================================================= */

import { defineSubject, createUnit } from "../../../helpers";

import {
  unit1Topics,
  unit2Topics,
} from "./scripting-with-php-1/index";

export const scriptingWithPhp1 = defineSubject(
  "US06CBCA52",
  "Scripting with PHP - I",

  [
    createUnit(
      "bca-php-unit-1",
      "Unit 1",
      "PHP Fundamentals, Forms, Arrays & Control Structures",
      { topics: unit1Topics }
    ),
    createUnit(
      "bca-php-unit-2",
      "Unit 2",
      "File Handling, Database Integration, Security & Deployment",
      { topics: unit2Topics }
    ),
  ],

  {
    code: "US06CBCA52",
    documentationId: "scripting-with-php-1",
    hasContent: true,
    contentComplete: true,
  }
);