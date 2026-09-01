/* =========================================================
   B.Sc IT • SEMESTER 6
   Computer Networks   (US06MABIT02)
========================================================= */

import { defineSubject, createUnits } from "../../../helpers";

export const computerNetworks = defineSubject(
    "US06MABIT02",
    "Computer Networks",

    createUnits("bscit-networks-unit", [
        "Introduction",
        "Data Communication Fundamentals",
        "Layered Protocols and Satellite Communication",
        "Introduction to Wireless Networks and Networking Devices",
    ]),

    {
        code: "US06MABIT02",
    }
);