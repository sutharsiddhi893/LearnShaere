/* =========================================================
   B.Sc IT • SEMESTER 4
   Database Management System - II   (US04MIBIT04)
========================================================= */

import { defineSubject, createUnits } from "../../../helpers";

export const dbms2 = defineSubject(
    "US04MIBIT04",
    "Database Management System - II",

    createUnits("bscit-dbms-2-unit", [
        "Basics of PL/SQL and Cursors",
        "Exception Handling, Stored Subprograms, Database Triggers and Packages",
    ]),

    {
        code: "US04MIBIT04",
    }
);