/* =========================================================
   BCA • SEMESTER 6
   Scripting with PHP - I Lab   (US06MIBCA05)
========================================================= */

import { defineSubject, createUnit } from "../../../helpers";
import { buildEditorPath } from "../../../shared";

const CODE = "US06MIBCA05";

export const scriptingWithPhp1Lab = defineSubject(
  CODE,
  "Scripting with PHP - I Lab",

  [
    createUnit(
      "bca-php-1-lab-1",
      "Lab Session 1",
      "Practical Based on PHP Scripting",
      buildEditorPath("php", "bca", CODE, 1)
    ),
  ],

  {
    code: CODE,
    type: "lab",
  }
);