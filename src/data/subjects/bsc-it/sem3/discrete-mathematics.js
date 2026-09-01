/* =========================================================
   B.Sc IT • SEMESTER 3
   Discrete Mathematics   (US03AEBIT06)
========================================================= */

import { defineSubject, createUnits } from "../../../helpers";

export const discreteMathematics = defineSubject(
    "US03AEBIT06",
    "Discrete Mathematics",

    createUnits("bscit-discrete-math-unit", [
        "Vectors and Matrices",
        "Graph Theory",
    ]),

    {
        code: "US03AEBIT06",
    }
);