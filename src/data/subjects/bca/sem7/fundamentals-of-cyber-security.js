/* =========================================================
   BCA • SEMESTER 7
   Fundamentals of Cyber Security   (US07CBCA53)
========================================================= */

import { defineSubject, createUnit } from "../../../helpers";

import {
  unit1Topics,
  unit2Topics,
} from "./fundamentals-of-cyber-security/index";

export const fundamentalsOfCyberSecurity = defineSubject(
  "US07CBCA53",
  "Fundamentals of Cyber Security",

  [
    createUnit(
      "bca-cyber-unit-1",
      "Unit 1",
      "Foundations, Threats, Network Security & Cryptography",
      { topics: unit1Topics }
    ),
    createUnit(
      "bca-cyber-unit-2",
      "Unit 2",
      "Incident Response, Web Security, Tools, Ethics & Emerging Trends",
      { topics: unit2Topics }
    ),
  ],

  {
    code: "US07CBCA53",
    documentationId: "fundamentals-of-cyber-security",
    hasContent: true,
    contentComplete: true,
  }
);