/* =========================================================
   B.Sc IT • SEMESTER 8
   On Job Training   (US08HSEBIT06)
========================================================= */
import { defineSubject, createUnit } from "../../../helpers";

export const onJobTraining = defineSubject(
    "US08HSEBIT06",
    "On Job Training",
    [
        createUnit("bscit-ojt-8", "Industry Project", "Practical experience in an industry by applying theoretical knowledge to real-world tasks.")
    ],
    { code: "US08HSEBIT06", type: "project", wide: true }
);