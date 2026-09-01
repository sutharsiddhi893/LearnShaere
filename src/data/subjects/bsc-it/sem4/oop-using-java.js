/* =========================================================
   B.Sc IT • SEMESTER 4
   Object Oriented Programming using Java   (US04MABIT01)
========================================================= */

import { defineSubject, createUnits } from "../../../helpers";

export const oopUsingJava = defineSubject(
    "US04MABIT01",
    "Object Oriented Programming using Java",

    createUnits("bscit-oop-java-unit", [
        "Introduction, Classes and Objects",
        "Interfaces and Inheritance",
        "Exception Handling, I/O Management",
        "Packages and Multithreading",
    ]),

    {
        code: "US04MABIT01",
    }
);