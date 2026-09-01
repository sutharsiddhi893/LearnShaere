/* =========================================================
   B.Sc IT • SEMESTER 3
   Ayurveda (IKS Course)   (UB03IKBIT08)
========================================================= */

import { defineSubject, createUnits } from "../../../helpers";

export const ayurveda = defineSubject(
    "UB03IKBIT08",
    "Ayurveda",

    createUnits("bscit-ayurveda-unit", [
        "Fundamentals of Ayurveda, Tridosha and Wholistic Health Care",
        "Life Style Management and Health Care through Ayurveda",
    ]),

    {
        code: "UB03IKBIT08",
    }
);