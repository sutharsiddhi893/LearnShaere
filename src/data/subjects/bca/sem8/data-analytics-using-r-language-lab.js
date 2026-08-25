/* =========================================================
   BCA • SEMESTER 8
   Data Analytics Using R Language Lab   (US08HMIBCA05)
========================================================= */

import { defineSubject, createUnit } from "../../../helpers";
import { buildEditorPath } from "../../../shared";

const CODE = "US08HMIBCA05";

export const dataAnalyticsUsingRLanguageLab = defineSubject(
  CODE,
  "Data Analytics Using R Language Lab",

  [
    createUnit(
      "bca-r-analytics-lab-1",
      "R Lab",
      "Practical Based on Data Analytics Using R",
      buildEditorPath("r", "bca", CODE, 1)
    ),
  ],

  {
    code: CODE,
    type: "lab",
  }
);