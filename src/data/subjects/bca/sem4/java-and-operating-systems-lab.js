/* =========================================================
   BCA • SEMESTER 4
   Practical Based on Java and Operating Systems   (US04MABCA03)
========================================================= */

import { defineSubject, createUnit } from "../../../helpers";
import { buildEditorPath } from "../../../shared";

const CODE = "US04MABCA03";

export const javaAndOperatingSystemsLab = defineSubject(
  CODE,
  "Practical Based on Java and Operating Systems",

  [
    createUnit(
      "bca-java-practical",
      "Java Lab",
      "Practical Based on Object Oriented Programming - I",
      buildEditorPath("java", "bca", CODE, "java")
    ),
    createUnit(
      "bca-linux-practical",
      "Linux Lab",
      "Practical Based on Linux Operating Systems",
      buildEditorPath("bash", "bca", CODE, "linux")
    ),
  ],

  {
    code: CODE,
    type: "lab",
    wide: true,
  }
);