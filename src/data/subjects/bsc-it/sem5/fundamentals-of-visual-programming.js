/* =========================================================
   B.Sc IT • SEMESTER 5
   Fundamentals of Visual Programming   (US05MABIT01)
========================================================= */

import { defineSubject, createUnits } from "../../../helpers";

export const fundamentalsOfVisualProgramming = defineSubject(
    "US05MABIT01",
    "Fundamentals of Visual Programming",

    createUnits("bscit-vbnet-unit", [
        "Introduction to .NET Framework (4.5) and VB.NET",
        "Fundamentals of VB.NET",
        "Developing Windows Forms, Exception Handling",
        "Database with ADO.NET",
    ]),

    {
        code: "US05MABIT01",
    }
);