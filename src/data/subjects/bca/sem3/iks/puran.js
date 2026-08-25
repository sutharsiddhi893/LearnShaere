/* =========================================================
   BCA • SEMESTER 3 • IKS ELECTIVE
   Puran   (US03IKBCA05)
========================================================= */

import { defineSubject, createUnits } from "../../../../helpers";
import { IKS_GROUP } from "./group";

export const puran = defineSubject(
  "US03IKBCA05",
  "Puran",

  createUnits("bca-puran-unit", [
    "Introduction to Puranas and Major Themes",
    "Social, Cultural and Ethical Implications of the Puranas",
  ]),

  {
    code: "US03IKBCA05",
    electiveGroup: IKS_GROUP,
  }
);