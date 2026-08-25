/* =========================================================
   BCA • SEMESTER 5
   Object Oriented Programming - II   (US05CBCA02)
========================================================= */

import { defineSubject, createUnit } from "../../../helpers";

import {
  unit1Topics,
  unit2Topics,
} from "./object-oriented-programming-2/index";

export const objectOrientedProgramming2 = defineSubject(
  "US05CBCA02",
  "Object Oriented Programming - II",

  [
    createUnit(
      "bca-oop2-unit-1",
      "Unit 1",
      "Advanced Java Concepts and Collections",
      { topics: unit1Topics }
    ),
    createUnit(
      "bca-oop2-unit-2",
      "Unit 2",
      "I/O, JDBC, GUI and Modern Java",
      { topics: unit2Topics }
    ),
  ],

  {
    code: "US05CBCA02",
    documentationId: "object-oriented-programming-2",
    hasContent: true,
    contentComplete: true,
  }
);