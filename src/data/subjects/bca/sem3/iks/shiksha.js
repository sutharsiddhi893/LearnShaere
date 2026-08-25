/* =========================================================
   BCA • SEMESTER 3 • IKS ELECTIVE
   Shiksha   (US03IKBCA06)
========================================================= */

import { defineSubject, createUnits } from "../../../../helpers";
import { IKS_GROUP } from "./group";

export const shiksha = defineSubject(
  "US03IKBCA06",
  "Shiksha",

  createUnits("bca-shiksha-unit", [
    "Shiksha as a Limb of the Veda",
    "Importance of Shiksha Granthas and Paniniya-Shiksha",
  ]),

  {
    code: "US03IKBCA06",
    electiveGroup: IKS_GROUP,
  }
);