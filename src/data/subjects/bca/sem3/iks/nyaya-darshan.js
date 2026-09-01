/* =========================================================
   BCA • SEMESTER 3 • IKS
   Nyaya Darshan   (US03IKBCA_NYAYA)
========================================================= */

import { defineSubject, createUnit } from "../../../../helpers";
import { unit1Topics, unit2Topics } from "./nyaya-darshan/index";

export const nyayaDarshan = defineSubject(
  "US03IKBCA_NYAYA",
  "Nyaya Darshan",

  [
    createUnit(
      "bca-nyaya-unit-1",
      "Unit 1",
      "Introduction to Nyaya Darshan and the Four Pramanas",
      { topics: unit1Topics }
    ),
    createUnit(
      "bca-nyaya-unit-2",
      "Unit 2",
      "5-Membered Syllogism, Fallacies, and Relevance to Computer Science",
      { topics: unit2Topics }
    ),
  ],

  {
    code: "US03IKBCA_NYAYA",
    documentationId: "nyaya-darshan",
    hasContent: true,
    contentComplete: true,
    electiveGroup: "iks",
  }
);