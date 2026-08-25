/* =========================================================
   BCA • SEMESTER 3 • IKS ELECTIVE
   Nirukta   (US03IKBCA03)
========================================================= */

import { defineSubject, createUnits } from "../../../../helpers";
import { IKS_GROUP } from "./group";

export const nirukta = defineSubject(
  "US03IKBCA03",
  "Nirukta",

  createUnits("bca-nirukta-unit", [
    "Introduction to Vedanga, Nirukta, Yaska and Nighantu",
    "Nirvachana, Padachatushtaya, Shadbhavavikara and Devata-Vigyan",
  ]),

  {
    code: "US03IKBCA03",
    electiveGroup: IKS_GROUP,
  }
);