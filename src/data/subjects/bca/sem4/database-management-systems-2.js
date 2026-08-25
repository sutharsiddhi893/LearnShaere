/* =========================================================
   BCA • SEMESTER 4
   DBMS - II   (US04CBCA01)
========================================================= */

import { defineSubject, createUnit } from "../../../helpers";

import {
  unit1Topics,
  unit2Topics,
} from "./Database Management System - 2/index";

export const databaseManagementSystems2 = defineSubject(
  "US04CBCA01",
  "DBMS - II",

  [
    createUnit(
      "bca-dbms2-unit-1",
      "Unit 1",
      "Advanced SQL, PL/SQL and Stored Procedures",
      { topics: unit1Topics }
    ),
    createUnit(
      "bca-dbms2-unit-2",
      "Unit 2",
      "Triggers, Transactions, Normalization and Advanced Topics",
      { topics: unit2Topics }
    ),
  ],

  {
    code: "US04CBCA01",
    documentationId: "dbms-2",
    hasContent: true,
    contentComplete: true,
  }
);

export const dbms2 = databaseManagementSystems2;