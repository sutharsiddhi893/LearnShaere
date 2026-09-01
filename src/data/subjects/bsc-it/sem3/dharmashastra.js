/* =========================================================
   B.Sc IT • SEMESTER 3
   Dharmashastra (Aacharasamhita)   (US03IKBIT09)
========================================================= */

import { defineSubject, createUnits } from "../../../helpers";

export const dharmashastra = defineSubject(
    "US03IKBIT09",
    "Dharmashastra (Aacharasamhita)",

    createUnits("bscit-dharmashastra-unit", [
        "Etymology, Meaning and Characteristics of Dharma",
        "Forms of Dharma, Aacharndharma and Major Dharmashastras",
    ]),

    {
        code: "US03IKBIT09",
    }
);