import { defineSubject, createUnit } from "../../../helpers";
import { unit1Topics } from "./python-programming/unit-1";
import { unit2Topics } from "./python-programming/unit-2";
import { unit3Topics } from "./python-programming/unit-3";
import { unit4Topics } from "./python-programming/unit-4";

export const pythonProgramming = defineSubject(
    "P2S01NCINT01",
    "Python Programming",
    [
        createUnit(
            "mscit-python-programming-unit-1",
            "Unit 1",
            "Introduction to Python",
            { topics: unit1Topics }
        ),
        createUnit(
            "mscit-python-programming-unit-2",
            "Unit 2",
            "Aggregate Data Types",
            { topics: unit2Topics }
        ),
        createUnit(
            "mscit-python-programming-unit-3",
            "Unit 3",
            "Composite Data Types, Functions and Exception Handling",
            { topics: unit3Topics }
        ),
        createUnit(
            "mscit-python-programming-unit-4",
            "Unit 4",
            "Additional Features of Python",
            { topics: unit4Topics }
        ),
    ],
    {
        code: "P2S01NCINT01",
        documentationId: "python-programming",
        hasContent: true,
        contentComplete: true,
    }
);

export default pythonProgramming;