/* =========================================================
   B.Sc IT • SEMESTER 3
   Introduction to Scripting Language   (US03IDBIT04)
========================================================= */

import { defineSubject, createUnits } from "../../../helpers";

export const introductionToScriptingLanguage = defineSubject(
    "US03IDBIT04",
    "Introduction to Scripting Language",

    createUnits("bscit-scripting-unit", [
        "Basics of JavaScript",
        "Advanced JavaScript – II & DOM",
    ]),

    {
        code: "US03IDBIT04",
    }
);