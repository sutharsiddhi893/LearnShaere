/* =========================================================
   B.Sc IT • SEMESTER 4
   Database Management Systems – II LAB   (US04MIBIT05)
========================================================= */

import { defineSubject, createUnit } from "../../../helpers";

export const dbms2Lab = defineSubject(
    "US04MIBIT05",
    "Database Management Systems – II LAB",

    [
        createUnit(
            "bscit-dbms2-lab-1",
            "Lab Session 1",
            "Practical exercises on PL/SQL block structures, Cursors, Exception Handling, Stored Procedures, Functions, Triggers, and Packages",
            "/editor/sql?course=bsc-it&subject=US04MIBIT05"
        ),
    ],

    {
        code: "US04MIBIT05",
        type: "lab",
    }
);