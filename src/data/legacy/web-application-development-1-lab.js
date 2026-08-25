import { defineSubject, createUnit } from "../helpers";
import { buildEditorPath } from "../shared";

export const webApplicationDevelopment1Lab = defineSubject({
  id: "US01MIBCA04",
  code: "US01MIBCA04",
  name: "Web Application Development - I Lab",
  type: "lab",

  units: [
    createUnit(
      "bca-web-1-lab-1",
      "Lab Session 1",
      "Practical Based on Web Application Development - I",
      buildEditorPath("html", "bca", "US01MIBCA04", 1)
    ),
  ],
});