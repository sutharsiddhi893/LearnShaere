import { defineSubject, createUnit } from "../helpers";
import { buildEditorPath } from "../shared";

const lab = (session) =>
  buildEditorPath("c", "bca", "US01MABCA02", session);

export const programmingFundamentalsUsingCLab = defineSubject({
  id: "US01MABCA02",
  code: "US01MABCA02",
  name: "Programming Fundamentals Using C Lab",
  type: "lab",

  units: [
    createUnit("bca-c-lab-1", "Lab Session 1",
      "Practical Based on Unit 1 and Unit 2", lab(1)),

    createUnit("bca-c-lab-2", "Lab Session 2",
      "Practical Based on Unit 3 and Unit 4", lab(2)),
  ],
});