/* =========================================================
   B.Sc IT • SEMESTER 6
   Practical based on US06MIBIT04   (US06MIBIT05)

   The supplied syllabus displays US05MIBIT05, likely a typo.
========================================================= */

import { defineSubject, createUnit } from "../../../helpers";

export const pythonLab = defineSubject(
    "US06MIBIT05",
    "Practical based on Programming in Python",

    [
        createUnit(
            "bscit-python-lab-1",
            "Lab Session 1",
            "Practical based on Python fundamentals, data types, functions, exception handling, OOP, and file handling.",
            "/editor/python?course=bsc-it&subject=US06MIBIT05"
        ),
    ],

    {
        code: "US06MIBIT05",
        type: "lab",
    }
);