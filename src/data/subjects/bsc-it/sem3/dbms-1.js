/* =========================================================
   B.Sc IT • SEMESTER 3
   Database Management Systems - I   (US03MABIT02)
========================================================= */

import { defineSubject, createUnits } from "../../../helpers";

export const dbms1 = defineSubject(
    "US03MABIT02",
    "Database Management Systems - I",

    createUnits("bscit-dbms-1-unit", [
        "Introduction to DBMS and Relational Database Design",
        "Structured Query Language-1",
        "Structured Query Language-2",
        "Structured Query Language-3",
    ]),

    {
        code: "US03MABIT02",
    }
);