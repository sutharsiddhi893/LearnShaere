/* =========================================================
   B.Sc IT • SEMESTER 4
   Practical based on US04MABIT01 and US04MABIT02   (US04MABIT03)
========================================================= */

import { defineSubject, createUnit } from "../../../helpers";

export const javaDsaLab = defineSubject(
    "US04MABIT03",
    "Practical based on Java and Data Structures",

    [
        createUnit(
            "bscit-java-lab",
            "PART-A : Practical based on OOP using Java",
            "Hands-on exercises for Classes, Inheritance, Interfaces, Exception Handling, Streams, and Multithreading",
            "/editor/java?course=bsc-it&subject=US04MABIT03&part=A"
        ),
        createUnit(
            "bscit-dsa-lab",
            "PART-B : Practical based on Data Structures and Algorithms",
            "Hands-on implementation of Stacks, Queues, Trees, Linked Lists, Sorting, and Searching",
            "/editor/c?course=bsc-it&subject=US04MABIT03&part=B"
        ),
    ],

    {
        code: "US04MABIT03",
        type: "lab",
    }
);