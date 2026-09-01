/* =========================================================
   B.Sc IT • SEMESTER 5
   Software Engineering Fundamentals   (US05SEBIT08)
========================================================= */

import { defineSubject, createUnits } from "../../../helpers";

export const softwareEngineeringFundamentals = defineSubject(
    "US05SEBIT08",
    "Software Engineering Fundamentals",

    createUnits("bscit-se-unit", [
        "Introduction and Requirement Specification",
        "Software Design",
    ]),

    {
        code: "US05SEBIT08",
        wide: true,
    }
);