/* =========================================================
   B.Sc IT • SEMESTER 6
   Practical based on US06MABIT01   (US06MABIT03)
========================================================= */

import { defineSubject, createUnit } from "../../../helpers";

export const aspNetLab = defineSubject(
    "US06MABIT03",
    "Practical based on ASP .Net Programming with C#",

    [
        createUnit(
            "bscit-aspnet-lab-1",
            "Lab Session 1",
            "Practical based on ASP.NET Web Forms, C#, state management, validation, login controls, ADO.NET, and data controls.",
            "/editor/csharp?course=bsc-it&subject=US06MABIT03"
        ),
    ],

    {
        code: "US06MABIT03",
        type: "lab",
    }
);