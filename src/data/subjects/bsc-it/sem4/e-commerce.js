/* =========================================================
   B.Sc IT • SEMESTER 4
   E - Commerce   (US04SEBIT07)
========================================================= */

import { defineSubject, createUnits } from "../../../helpers";

export const eCommerce = defineSubject(
    "US04SEBIT07",
    "E - Commerce",

    createUnits("bscit-ecommerce-unit", [
        "Introduction To E-Commerce & Business Models",
        "Electronic Marketplaces & Customer Relationship Management (CRM)",
    ]),

    {
        code: "US04SEBIT07",
        wide: true,
    }
);