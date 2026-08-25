import { defineSubject, createUnits } from "../helpers";

export const webApplicationDevelopment1 = defineSubject({
  id: "US01MIBCA03",
  code: "US01MIBCA03",
  name: "Web Application Development - I",

  units: createUnits("bca-web-1-unit", [
    "Web Page Designing - I",
    "Web Page Designing - II",
  ]),
});