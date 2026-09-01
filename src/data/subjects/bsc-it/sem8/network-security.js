/* =========================================================
   B.Sc IT • SEMESTER 8
   Network Security   (US08HMABIT02)
========================================================= */
import { defineSubject, createUnits } from "../../../helpers";

export const networkSecurity = defineSubject(
    "US08HMABIT02",
    "Network Security",
    createUnits("bscit-network-security-unit", [
        "Introduction to Network Security",
        "Transport Level Security",
        "Wireless and Internet Security",
        "Advanced Security Concepts"
    ]),
    { code: "US08HMABIT02" }
);