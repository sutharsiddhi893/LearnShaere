import { unit1Topics } from "./unit-1";
import { unit2Topics } from "./unit-2";
import { unit3Topics } from "./unit-3";
import { unit4Topics } from "./unit-4";

const oopUsingJava = {
    id: "oop-using-java",
    name: "OOP Using Java",
    semester: 2,
    units: [
        {
            id: "unit-1",
            title: "Introduction to Java and Object-Oriented Programming",
            topics: unit1Topics,
        },
        {
            id: "unit-2",
            title: "Classes, Objects, Methods and Constructors",
            topics: unit2Topics,
        },
        {
            id: "unit-3",
            title: "Inheritance, Polymorphism, Interfaces and Packages",
            topics: unit3Topics,
        },
        {
            id: "unit-4",
            title: "Exception Handling, Multithreading, Collections and File Handling",
            topics: unit4Topics,
        },
    ],
};

export { unit1Topics, unit2Topics, unit3Topics, unit4Topics };

export default oopUsingJava;