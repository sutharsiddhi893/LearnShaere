/* =========================================================
   BCA • SEMESTER 3
   Indian Knowledge System (IKS)   (US03CBCA52)
========================================================= */

import { defineSubject, createUnit } from "../../../../helpers";

import {
  unit1Topics,
  unit2Topics,
} from "../indian-knowledge-system/index";

import { dharmashastra } from "./dharmashastra";
import { mimansa } from "./mimansa";
import { nirukta } from "./nirukta";
import { nyayaDarshan } from "./nyaya-darshan";
import { puran } from "./puran";
import { shiksha } from "./shiksha";
import { vyakaranam } from "./vyakaranam";

export { IKS_GROUP } from "./group";

export const indianKnowledgeSystem = defineSubject(
  "US03CBCA52",
  "Indian Knowledge System",

  [
    createUnit(
      "bca-iks-unit-1",
      "Unit 1",
      "Vedangas: Shiksha, Vyakaranam, Nirukta, Chandas, Jyotisha",
      { topics: unit1Topics }
    ),
    createUnit(
      "bca-iks-unit-2",
      "Unit 2",
      "Darshanas: Nyaya, Mimansa, Dharmashastra, Puranas and IKS Contributions",
      { topics: unit2Topics }
    ),
  ],

  {
    code: "US03CBCA52",
    documentationId: "indian-knowledge-system",
    hasContent: true,
    contentComplete: true,
  }
);

export {
  dharmashastra,
  mimansa,
  nirukta,
  nyayaDarshan,
  puran,
  shiksha,
  vyakaranam,
};

/** All IKS electives in display order */
export const iksElectives = [
  indianKnowledgeSystem,
  dharmashastra,
  mimansa,
  nirukta,
  nyayaDarshan,
  puran,
  shiksha,
  vyakaranam,
];