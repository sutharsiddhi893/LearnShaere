/* =========================================================
   BCA • SEMESTER 3
   Practical Based on Data Structures
   and Database Management Systems - I   (US03MABCA03)
========================================================= */

import { defineSubject, createUnit } from "../../../helpers";
import { buildEditorPath } from "../../../shared";

const CODE = "US03MABCA03";

export const dataStructuresAndDbmsLab = defineSubject(
  CODE,
  "Practical Based on Data Structures and Database Management Systems - I",

  [
    createUnit(
      "bca-data-structures-practical",
      "Data Structure Lab",
      "Practical Based on Fundamentals of Data Structures",
      buildEditorPath("c", "bca", CODE, "data-structures")
    ),
    createUnit(
      "bca-dbms-1-practical",
      "Database Lab",
      "Practical Based on Database Management Systems - I",
      buildEditorPath("sql", "bca", CODE, "dbms")
    ),
  ],

  {
    code: CODE,
    type: "lab",
    wide: true,
  }
);