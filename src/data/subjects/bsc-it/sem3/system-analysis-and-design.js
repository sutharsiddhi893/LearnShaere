/* =========================================================
   B.Sc IT • SEMESTER 3
   System Analysis and Design   (US03SEBIT07)
========================================================= */

import { defineSubject, createUnits } from "../../../helpers";

export const systemAnalysisAndDesign = defineSubject(
    "US03SEBIT07",
    "System Analysis and Design",

    createUnits("bscit-sad-unit", [
        "Concepts of System and System Development Life Cycle (SDLC)",
        "Fact Finding Techniques, Input/Output Design and DFDs",
    ]),

    {
        code: "US03SEBIT07",
        wide: true,
    }
);