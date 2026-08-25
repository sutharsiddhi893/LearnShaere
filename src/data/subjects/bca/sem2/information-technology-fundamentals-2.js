/* =========================================================
   BCA • SEMESTER 2
   Information Technology Fundamentals - II   (US01AEBCA14)
========================================================= */

import { defineSubject, createUnit } from "../../../helpers";

import {
  unit1Topics,
  unit2Topics,
} from "./information-technology-fundamentals-2/index";

export const informationTechnologyFundamentals2 = defineSubject(
  "US01AEBCA14",
  "Information Technology Fundamentals - II",

  [
    createUnit(
      "bca-itf2-unit-1",
      "Unit 1",
      "Operating Systems, Networking and the Internet",
      { topics: unit1Topics }
    ),
    createUnit(
      "bca-itf2-unit-2",
      "Unit 2",
      "Database, Programming and IT Management",
      { topics: unit2Topics }
    ),
  ],

  {
    code: "US01AEBCA14",
    documentationId: "itf2",
    hasContent: true,
    contentComplete: true,
  }
);