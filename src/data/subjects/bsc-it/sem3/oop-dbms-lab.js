/* =========================================================
   B.Sc IT • SEMESTER 3
   Practical based on US03MABIT01 and US03MABIT02   (US03MABIT03)
========================================================= */

import { defineSubject, createUnit } from "../../../helpers";

export const oopDbmsLab = defineSubject(
    "US03MABIT03",
    "Practical based on OOP C++ and DBMS - I",

    [
        createUnit(
            "bscit-oop-lab",
            "PART-A : Practical based on OOP using C++",
            "Hands-on exercises for Object Oriented Concepts, Classes, Functions, and Operator Overloading",
            "/editor/cpp?course=bsc-it&subject=US03MABIT03&part=A"
        ),
        createUnit(
            "bscit-dbms-lab",
            "PART-B : Practical based on DBMS - I",
            "Hands-on exercises for SQL Queries, DDL, DML, Constraints, Functions, Joins, and Database Objects",
            "/editor/sql?course=bsc-it&subject=US03MABIT03&part=B"
        ),
    ],

    {
        code: "US03MABIT03",
        type: "lab",
    }
);