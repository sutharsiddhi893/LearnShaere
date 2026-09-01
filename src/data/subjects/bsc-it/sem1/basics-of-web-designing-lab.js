/* =========================================================
   B.Sc IT • SEMESTER 1
   Basics of Web Designing   (US01MIBIT03)
========================================================= */

import { defineSubject, createUnit } from "../../../helpers";

import {
    unit1Topics,
    unit2Topics,
} from "./basics-of-web-designing/index";

export const basicsOfWebDesigning = defineSubject(
    "US01MIBIT03",
    "Basics of Web Designing",

    [
        createUnit(
            "bscit-web-design-unit-1",
            "Unit 1",
            "Web Page Designing - I",
            { topics: unit1Topics }
        ),
        createUnit(
            "bscit-web-design-unit-2",
            "Unit 2",
            "Web Page Designing - II",
            { topics: unit2Topics }
        ),
    ],

    {
        code: "US01MIBIT03",
        documentationId: "basics-of-web-designing",
        hasContent: true,
        contentComplete: true,
    }
);