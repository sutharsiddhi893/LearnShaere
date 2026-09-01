/* =========================================================
   B.Sc IT • SEMESTER 4
   Introduction to Data Structures and Algorithms   (US04MABIT02)
========================================================= */

import { defineSubject, createUnits } from "../../../helpers";

export const dataStructuresAndAlgorithms = defineSubject(
    "US04MABIT02",
    "Introduction to Data Structures and Algorithms",

    createUnits("bscit-dsa-unit", [
        "Introduction to Data Structures",
        "Stack and Queues",
        "Introduction to Trees",
        "Linked Lists, Sorting and Searching techniques",
    ]),

    {
        code: "US04MABIT02",
    }
);