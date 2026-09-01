/* =========================================================
   B.Sc IT • SEMESTER 6
   Programming in Python   (US06MIBIT04)
========================================================= */

import { defineSubject, createUnits } from "../../../helpers";

export const programmingInPython = defineSubject(
    "US06MIBIT04",
    "Programming in Python",

    createUnits("bscit-python-unit", [
        "Basic Python",
        "Functions, Exception Handling, OOPs, File Handling and GUI Overview",
    ]),

    {
        code: "US06MIBIT04",
    }
);