/* =========================================================
   BCA • SEMESTER 3 • IKS ELECTIVE
   Dharmashastra (Aacharasamhita)   (US03IKBCA01)
========================================================= */

import { defineSubject, createUnits } from "../../../../helpers";
import { IKS_GROUP } from "./group";

export const dharmashastra = defineSubject(
  "US03IKBCA01",
  "Dharmashastra (Aacharasamhita)",

  createUnits("bca-dharmashastra-unit", [
    "Etymology, Meaning, Characteristics and Importance of Dharma",
    "Forms of Dharma, Aacharndharma and Major Dharmashastras",
  ]),

  {
    code: "US03IKBCA01",
    electiveGroup: IKS_GROUP,
  }
);