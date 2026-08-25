/* =========================================================
   BCA • SEMESTER 3
   Database Management Systems   (US01AEBCA19)
========================================================= */

import { defineSubject, createUnit } from "../../../helpers";

import {
  unit1Topics,
  unit2Topics,
} from "./database-management-systems-1/index";

export const databaseManagementSystems1 = defineSubject(
  "US01AEBCA19",
  "Database Management Systems",

  [
    createUnit(
      "bca-dbms-unit-1",
      "Unit 1",
      "Database Concepts, ER Model and Relational Model",
      { topics: unit1Topics }
    ),
    createUnit(
      "bca-dbms-unit-2",
      "Unit 2",
      "Normalization, Transactions, Concurrency and Security",
      { topics: unit2Topics }
    ),
  ],

  {
    code: "US01AEBCA19",
    documentationId: "dbms",
    hasContent: true,
    contentComplete: true,
  }
);