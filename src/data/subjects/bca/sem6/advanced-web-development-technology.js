/* =========================================================
   BCA • SEMESTER 6
   Advanced Web Development Technology   (US06CBCA51)
========================================================= */

import { defineSubject, createUnit } from "../../../helpers";

import {
  unit1Topics,
  unit2Topics,
} from "./advanced-web-development-technology/index";

export const advancedWebDevelopmentTechnology = defineSubject(
  "US06CBCA51",
  "Advanced Web Development Technology",

  [
    createUnit(
      "bca-awdt-unit-1",
      "Unit 1",
      "Modern React.js, Hooks, Routing & Next.js Architecture",
      { topics: unit1Topics }
    ),
    createUnit(
      "bca-awdt-unit-2",
      "Unit 2",
      "Full-Stack Architecture, Redux, GraphQL, Security & Deployment",
      { topics: unit2Topics }
    ),
  ],

  {
    code: "US06CBCA51",
    documentationId: "advanced-web-development-technology",
    hasContent: true,
    contentComplete: true,
  }
);