/* =========================================================
   BCA • SEMESTER 3 • IKS ELECTIVE
   व्याकरणम्   (US03IKBCA07)
========================================================= */

import { defineSubject, createUnits } from "../../../../helpers";
import { IKS_GROUP } from "./group";

export const vyakaranam = defineSubject(
  "US03IKBCA07",
  "व्याकरणम्",

  createUnits("bca-vyakaranam-unit", [
    "संस्कृत वर्णमाला, शब्दरूपम्, धातुरूपम् एवं सन्धिः",
    "समासः, विभक्तिः, वाच्यम्, प्रत्ययाः, अव्ययम् एवं उपसर्गाः",
  ]),

  {
    code: "US03IKBCA07",
    electiveGroup: IKS_GROUP,
  }
);