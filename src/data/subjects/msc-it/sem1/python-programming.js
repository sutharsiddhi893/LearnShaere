import { createSubject, createUnits } from "../../../helpers";

const pythonProgramming = createSubject(
    "P2S01NCINT01",
    "Python Programming",
    createUnits("mscit-python-programming-unit", [
        "Introduction to Python",
        "Aggregate Data Types",
        "Composite Data Types, Functions and Exception Handling",
        "Additional Features of Python",
    ])
);

export default pythonProgramming;