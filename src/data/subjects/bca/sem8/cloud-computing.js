/* =========================================================
   BCA • SEMESTER 8
   Cloud Computing   (US08CBCA52)
========================================================= */

import { defineSubject, createUnit } from "../../../helpers";

import {
  unit1Topics,
  unit2Topics,
} from "./cloud-computing/index";

export const cloudComputing = defineSubject(
  "US08CBCA52",
  "Cloud Computing",

  [
    createUnit(
      "bca-cloud-unit-1",
      "Unit 1",
      "Cloud Foundations, Service Models, Virtualization & AWS Core",
      { topics: unit1Topics }
    ),
    createUnit(
      "bca-cloud-unit-2",
      "Unit 2",
      "Cloud Security, Serverless/Microservices, Pricing, DevOps & Careers",
      { topics: unit2Topics }
    ),
  ],

  {
    code: "US08CBCA52",
    documentationId: "cloud-computing",
    hasContent: true,
    contentComplete: true,
  }
);