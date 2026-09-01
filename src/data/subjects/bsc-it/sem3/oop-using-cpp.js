/* =========================================================
   B.Sc IT • SEMESTER 3
   Object Oriented Programming using C++   (US03MABIT01)
========================================================= */

import { defineSubject, createUnit } from "../../../helpers";

import {
    unit1Topics,
    unit2Topics,
    unit3Topics,
    unit4Topics,
} from "./oop-using-cpp/index";

export const oopUsingCpp = defineSubject(
    "US03MABIT01",
    "Object Oriented Programming using C++",

    [
        createUnit(
            "bscit-oop-cpp-unit-1",
            "Unit 1",
            "OOP Concepts and Introduction to C++",
            { topics: unit1Topics }
        ),
        createUnit(
            "bscit-oop-cpp-unit-2",
            "Unit 2",
            "Input/Output, Arrays, and Working with Classes",
            { topics: unit2Topics }
        ),
        createUnit(
            "bscit-oop-cpp-unit-3",
            "Unit 3",
            "Functions, Function Overloading, and Inheritance",
            { topics: unit3Topics }
        ),
        createUnit(
            "bscit-oop-cpp-unit-4",
            "Unit 4",
            "Operator Overloading and Dynamic Memory",
            { topics: unit4Topics }
        ),
    ],

    {
        code: "US03MABIT01",
        documentationId: "oop-using-cpp",
        hasContent: true,
        contentComplete: true,
    }
);