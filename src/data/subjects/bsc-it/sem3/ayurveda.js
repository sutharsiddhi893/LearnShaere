/* =========================================================
   B.Sc IT • SEMESTER 3
   Ayurveda   (UB03IKBIT08)
========================================================= */

import { defineSubject, createUnit } from "../../../helpers";

import {
    unit1Topics,
    unit2Topics,
} from "./ayurveda/index";

export const ayurveda = defineSubject(
    "UB03IKBIT08",
    "Ayurveda",

    [
        createUnit(
            "bscit-ayurveda-unit-1",
            "Unit 1",
            "Fundamentals of Ayurveda, Tridosha and Holistic Health Care",
            { topics: unit1Topics }
        ),
        createUnit(
            "bscit-ayurveda-unit-2",
            "Unit 2",
            "Lifestyle Management, Gunas and Contributions",
            { topics: unit2Topics }
        ),
    ],

    {
        code: "UB03IKBIT08",
        documentationId: "ayurveda",
        hasContent: true,
        contentComplete: true,
    }
);