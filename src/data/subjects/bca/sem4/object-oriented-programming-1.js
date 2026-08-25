/* =========================================================
   BCA • SEMESTER 4
   Object Oriented Programming - I (Java)   (US04CBCA03)
========================================================= */

import { defineSubject, createUnit } from "../../../helpers";

import {
  unit1Topics,
  unit2Topics,
} from "./object-oriented-programming-1/index";

export const objectOrientedProgramming1 = defineSubject(
  "US04CBCA03",
  "Object Oriented Programming - I",

  [
    createUnit(
      "bca-oop1-unit-1",
      "Unit 1",
      "Java Basics, OOP Concepts and Classes",
      { topics: unit1Topics }
    ),
    createUnit(
      "bca-oop1-unit-2",
      "Unit 2",
      "Inheritance, Polymorphism, Abstraction and Exceptions",
      { topics: unit2Topics }
    ),
  ],

  {
    code: "US04CBCA03",
    documentationId: "object-oriented-programming-1",
    hasContent: true,
    contentComplete: true,
  }
);