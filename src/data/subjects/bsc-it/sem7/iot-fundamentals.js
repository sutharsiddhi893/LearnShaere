/* =========================================================
   B.Sc IT • SEMESTER 7
   IoT Fundamentals   (US07HMIBIT04)
========================================================= */
import { defineSubject, createUnits } from "../../../helpers";

export const iotFundamentals = defineSubject(
    "US07HMIBIT04",
    "IoT Fundamentals",
    createUnits("bscit-iot-unit", [
        "Basics of IoT (Architecture, Stack, Challenges)",
        "IoT Components and Interfacing (Sensors & Arduino)"
    ]),
    { code: "US07HMIBIT04" }
);