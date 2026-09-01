/* =========================================================
   B.Sc IT • SEMESTER 5
   Operating Systems   (US05MABIT02)
========================================================= */

import { defineSubject, createUnits } from "../../../helpers";

export const operatingSystems = defineSubject(
    "US05MABIT02",
    "Operating Systems",

    createUnits("bscit-os-unit", [
        "Introduction and Scheduling",
        "Memory Management",
        "Process Synchronization, Deadlocks and Introduction to Linux",
        "Basic Linux commands",
    ]),

    {
        code: "US05MABIT02",
    }
);