/* =========================================================
   BCA • SEMESTER 5
   Computer Networks   (US05CBCA01)
========================================================= */

import { defineSubject, createUnit } from "../../../helpers";

import {
  unit1Topics,
  unit2Topics,
} from "./computer-networks/index";

export const computerNetworks = defineSubject(
  "US05CBCA01",
  "Computer Networks",

  [
    createUnit(
      "bca-cn-unit-1",
      "Unit 1",
      "Network Fundamentals and Reference Models",
      { topics: unit1Topics }
    ),
    createUnit(
      "bca-cn-unit-2",
      "Unit 2",
      "Protocols, Addressing and Network Security",
      { topics: unit2Topics }
    ),
  ],

  {
    code: "US05CBCA01",
    documentationId: "computer-networks",
    hasContent: true,
    contentComplete: true,
  }
);