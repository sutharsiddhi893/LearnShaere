/* =========================================================
   BCA • SEMESTER 4
   Software Project Management   (US04CBCA04)
========================================================= */

import { defineSubject, createUnit } from "../../../helpers";

import {
  unit1Topics,
  unit2Topics,
} from "./software-project-management/index";

export const softwareProjectManagement = defineSubject(
  "US04CBCA04",
  "Software Project Management",

  [
    createUnit(
      "bca-spm-unit-1",
      "Unit 1",
      "Introduction, Planning and Estimation",
      { topics: unit1Topics }
    ),
    createUnit(
      "bca-spm-unit-2",
      "Unit 2",
      "Team Management, Quality, Configuration and Agile",
      { topics: unit2Topics }
    ),
  ],

  {
    code: "US04CBCA04",
    documentationId: "software-project-management",
    hasContent: true,
    contentComplete: true,
  }
);