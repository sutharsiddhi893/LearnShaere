/* =========================================================
   B.Sc IT • SEMESTER 1
   Fundamentals of Computer Organization and Architecture  (US01SEBIT09)
========================================================= */

import { defineSubject, createUnits } from "../../../helpers";

export const computerOrgArchitecture = defineSubject(
    "US01SEBIT09",
    "Fundamentals of Computer Organization and Architecture",

    createUnits("bscit-computer-org-unit", [
        "Introduction to Computer Systems, Number Systems, Representation of Information and Processor Organization",
        "Memory Organization, Addressing Techniques and I/O Devices",
    ]),

    {
        code: "US01SEBIT09",
        wide: true,
    }
);