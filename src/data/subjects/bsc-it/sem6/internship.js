/* =========================================================
   B.Sc IT • SEMESTER 6
   Internship   (US06SEBIT07)
========================================================= */

import { defineSubject, createUnit } from "../../../helpers";

export const internship = defineSubject(
    "US06SEBIT07",
    "Internship",

    [
        createUnit(
            "bscit-internship-project",
            "In-house Project Development",
            "Project-based learning for developing software applications that solve real-life problems."
        ),
    ],

    {
        code: "US06SEBIT07",
        type: "project",
        wide: true,
    }
);