/* =========================================================
   BCA • SEMESTER 3 • IKS ELECTIVE
   Nyaya Darshan   (US03IKBCA04)
========================================================= */

import { defineSubject, createUnits } from "../../../../helpers";
import { IKS_GROUP } from "./group";

export const nyayaDarshan = defineSubject(
  "US03IKBCA04",
  "Nyaya Darshan",

  createUnits("bca-nyaya-unit", [
    "Akshapada Gautama and the Five Elements of Nyaya",
    "Nyaya-Vaisheshika, Nyaya Sutras and Sixteen Elements",
  ]),

  {
    code: "US03IKBCA04",
    electiveGroup: IKS_GROUP,
  }
);