/* =========================================================
   BCA • SEMESTER 6
   Business Communication and Etiquettes   (US06CBCA01)
========================================================= */

import { defineSubject, createUnit } from "../../../helpers";

import {
  unit1Topics,
  unit2Topics,
} from "./business-communication-etiquettes/index";

export const businessCommunicationAndEtiquettes = defineSubject(
  "US06CBCA01",
  "Business Communication and Etiquettes",

  [
    createUnit(
      "bca-bce-unit-1",
      "Unit 1",
      "Fundamentals of Business Communication",
      { topics: unit1Topics }
    ),
    createUnit(
      "bca-bce-unit-2",
      "Unit 2",
      "Business Etiquettes and Professional Skills",
      { topics: unit2Topics }
    ),
  ],

  {
    code: "US06CBCA01",
    documentationId: "business-communication-etiquettes",
    hasContent: true,
    contentComplete: true,
  }
);

export const businessCommunicationEtiquettes = businessCommunicationAndEtiquettes;