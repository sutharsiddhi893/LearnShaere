import { defineSubject, createUnit } from "../helpers";

export const officeAutomationLab = defineSubject({
  id: "US01IDBCA06",
  code: "US01IDBCA06",
  name: "Office Automation Lab",
  type: "lab",

  units: [
    createUnit("bca-office-lab-1", "Lab Session 1",
      "Practical Based on Office Applications"),
  ],
});