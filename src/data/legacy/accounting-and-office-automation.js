import { defineSubject, createUnits } from "../helpers";

export const accountingAndOfficeAutomation = defineSubject({
  id: "US01IDBCA05",
  code: "US01IDBCA05",
  name: "Accounting and Office Automation",

  units: createUnits("bca-accounting-unit", [
    "Conceptual Framework of Accounting and Spreadsheets",
    "Word Processing and Presentation Tool",
  ]),
});