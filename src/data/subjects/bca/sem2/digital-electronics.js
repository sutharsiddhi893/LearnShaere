/* =========================================================
   BCA • SEMESTER 2
   Digital Electronics   (US01AEBCA12)
========================================================= */

import { defineSubject, createUnit } from "../../../helpers";

import {
  unit1Topics,
  unit2Topics,
} from "./digital-electronics/index";

export const digitalElectronics = defineSubject(
  "US01AEBCA12",
  "Digital Electronics",

  [
    createUnit(
      "bca-de-unit-1",
      "Unit 1",
      "Number Systems, Logic Gates and Boolean Algebra",
      { topics: unit1Topics }
    ),
    createUnit(
      "bca-de-unit-2",
      "Unit 2",
      "Sequential Circuits, Flip Flops, Registers, Counters and Memories",
      { topics: unit2Topics }
    ),
  ],

  {
    code: "US01AEBCA12",
    documentationId: "de",
    hasContent: true,
    contentComplete: true,
  }
);