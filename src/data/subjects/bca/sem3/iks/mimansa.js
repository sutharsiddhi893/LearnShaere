/* =========================================================
   BCA • SEMESTER 3 • IKS ELECTIVE
   Mimansa (Purva and Uttara)   (US03IKBCA02)
========================================================= */

import { defineSubject, createUnits } from "../../../../helpers";
import { IKS_GROUP } from "./group";

export const mimansa = defineSubject(
  "US03IKBCA02",
  "Mimansa (Purva and Uttara)",

  createUnits("bca-mimansa-unit", [
    "Introduction to Mimansa Shastra and Purva Mimansa",
    "Uttara Mimansa and Shankaracharya's Contribution to Vedanta",
  ]),

  {
    code: "US03IKBCA02",
    electiveGroup: IKS_GROUP,
  }
);