import { defineSubject, createUnits } from "../helpers";

export const fundamentalsOfComputerOrganization = defineSubject({
  id: "US01SEBCA09",
  code: "US01SEBCA09",
  name: "Fundamentals of Computer Organization",
  wide: true,

  units: createUnits("bca-computer-organization-unit", [
    "Introduction to Computer Systems, Number Systems, Representation of Information and Processor Organization",
    "Memory Organization, Addressing Techniques and I/O Devices",
  ]),
});