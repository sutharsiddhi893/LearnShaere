/* =========================================================
   BCA • SEMESTER 4
   Database Management Systems - II Lab   (US04MIBCA05)
========================================================= */

import { defineSubject, createUnit } from "../../../helpers";
import { buildEditorPath } from "../../../shared";

const CODE = "US04MIBCA05";

export const databaseManagementSystems2Lab = defineSubject(
  CODE,
  "Database Management Systems - II Lab",

  [
    createUnit(
      "bca-dbms-2-lab-1",
      "SQL Lab",
      "Practical Based on Database Management Systems - II",
      buildEditorPath("sql", "bca", CODE, 1)
    ),
  ],

  {
    code: CODE,
    type: "lab",
  }
);