/* =========================================================
   BCA • SEMESTER 7
   Scripting with PHP - II Lab   (US07HMIBCA05)
========================================================= */

import { defineSubject, createUnit } from "../../../helpers";
import { buildEditorPath } from "../../../shared";

const CODE = "US07HMIBCA05";

export const scriptingWithPhp2Lab = defineSubject(
  CODE,
  "Scripting with PHP - II Lab",

  [
    createUnit(
      "bca-php-2-lab-1",
      "Lab Session 1",
      "Practical Based on Advanced PHP",
      buildEditorPath("php", "bca", CODE, 1)
    ),
  ],

  {
    code: CODE,
    type: "lab",
  }
);