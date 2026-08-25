/* =========================================================
   BCA • SEMESTER 4 • VALUE-ADDED ELECTIVE
   Life Skills and Self Enhancement / Development
========================================================= */

import { defineSubject, createUnit } from "../../../../helpers";

import {
  unit1Topics,
  unit2Topics,
} from "../life-skills-and-self-development/index";

export const lifeSkillsAndSelfEnhancement = defineSubject(
  "US04CBCA54",
  "Life Skills and Self Enhancement",

  [
    createUnit(
      "bca-lssd-unit-1",
      "Unit 1",
      "Self-Mastery, Cognitive Agility & Emotional Resilience",
      { topics: unit1Topics }
    ),
    createUnit(
      "bca-lssd-unit-2",
      "Unit 2",
      "Interpersonal Dynamics, Leadership & Professional Excellence",
      { topics: unit2Topics }
    ),
  ],

  {
    code: "US04CBCA54",
    documentationId: "life-skills-and-self-development",
    hasContent: true,
    contentComplete: true,
  }
);

export const lifeSkillsAndSelfDevelopment = lifeSkillsAndSelfEnhancement;