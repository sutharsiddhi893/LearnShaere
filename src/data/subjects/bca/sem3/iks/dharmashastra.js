/* =========================================================
   BCA • SEMESTER 3 • IKS
   Dharmashastra (Aacharasamhita)
========================================================= */

import { defineSubject, createUnit } from "../../../../helpers";

import {
  unit1Topics,
  unit2Topics,
} from "./dharmashastra/index";

export const dharmashastra = defineSubject(
  "US03IKBCA09",
  "Dharmashastra (Aacharasamhita)",

  [
    createUnit(
      "bca-dharmashastra-unit-1",
      "Unit 1",
      "Etymology, Meaning and Characteristics of Dharma",
      { topics: unit1Topics }
    ),
    createUnit(
      "bca-dharmashastra-unit-2",
      "Unit 2",
      "Forms of Dharma, Aacharndharma and Major Dharmashastras",
      { topics: unit2Topics }
    ),
  ],

  {
    code: "US03IKBCA09",
    documentationId: "dharmashastra",
    hasContent: true,
    contentComplete: true,
  }
);