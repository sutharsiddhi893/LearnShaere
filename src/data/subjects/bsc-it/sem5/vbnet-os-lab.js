/* =========================================================
   B.Sc IT • SEMESTER 5
   Practical based on US05MABIT01 and US05MABIT02   (US05MABIT03)
========================================================= */

import { defineSubject, createUnit } from "../../../helpers";

export const vbnetOsLab = defineSubject(
    "US05MABIT03",
    "Practical based on VB.NET and Operating Systems",

    [
        createUnit(
            "bscit-vbnet-lab",
            "Part-1 : Practical Based on Visual Basic .NET",
            "Windows Forms apps, Exception Handling, and ADO.NET database programming",
            "/editor/vbnet?course=bsc-it&subject=US05MABIT03&part=1"
        ),
        createUnit(
            "bscit-linux-lab",
            "Part-2 : Practical based on Linux shell scripting",
            "Linux commands, file permissions, redirection, and shell script control structures",
            "/editor/bash?course=bsc-it&subject=US05MABIT03&part=2"
        ),
    ],

    {
        code: "US05MABIT03",
        type: "lab",
    }
);