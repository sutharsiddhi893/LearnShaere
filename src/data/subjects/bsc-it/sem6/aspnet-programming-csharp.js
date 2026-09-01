/* =========================================================
   B.Sc IT • SEMESTER 6
   ASP .Net Programming with C#   (US06MABIT01)
========================================================= */

import { defineSubject, createUnits } from "../../../helpers";

export const aspNetProgrammingCSharp = defineSubject(
    "US06MABIT01",
    "ASP .Net Programming with C#",

    createUnits("bscit-aspnet-unit", [
        "Introduction To ASP.NET",
        "Information Passing, Standard Controls and Master Page",
        "State Management, Validation and Login Controls",
        "ADO.NET and Data Controls",
    ]),

    {
        code: "US06MABIT01",
    }
);