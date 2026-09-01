/* =========================================================
   B.Sc IT • SEMESTER 7
   Full Stack Web Application Development   (US07HMABIT02)
========================================================= */
import { defineSubject, createUnits } from "../../../helpers";

export const fullStackWebDevelopment = defineSubject(
    "US07HMABIT02",
    "Full Stack Web Application Development",
    createUnits("bscit-fullstack-unit", [
        "Basics of Web Development (HTML5, CSS, JS, ES6)",
        "Introduction to Web Server & Node.js",
        "Database Management (MongoDB & Mongoose)",
        "Fundamentals of React.js"
    ]),
    { code: "US07HMABIT02" }
);