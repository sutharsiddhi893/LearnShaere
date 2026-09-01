/* =========================================================
   B.Sc IT • SEMESTER 3
   Dharmashastra (Aacharasamhita)   (US03IKBIT09)
========================================================= */

import { defineSubject, createUnit } from "../../../helpers";

// 🔑 BCA માંથી બનેલા Topics જ ડાયરેક્ટ અહીં લીંક કરી દો!
import {
    unit1Topics,
    unit2Topics,
} from "../../bca/sem3/iks/dharmashastra/index";

export const dharmashastra = defineSubject(
    "US03IKBIT09",
    "Dharmashastra (Aacharasamhita)",

    [
        createUnit(
            "bscit-dharmashastra-unit-1",
            "Unit 1",
            "Etymology, Meaning and Characteristics of Dharma",
            { topics: unit1Topics }
        ),
        createUnit(
            "bscit-dharmashastra-unit-2",
            "Unit 2",
            "Forms of Dharma, Aacharndharma and Major Dharmashastras",
            { topics: unit2Topics }
        ),
    ],

    {
        code: "US03IKBIT09",
        documentationId: "dharmashastra",
        hasContent: true,
        contentComplete: true,
    }
);