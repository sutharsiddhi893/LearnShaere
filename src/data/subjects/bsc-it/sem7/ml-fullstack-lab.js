/* =========================================================
   B.Sc IT • SEMESTER 7
   Practical based on ML and Full Stack   (US07HMABIT03)
========================================================= */
import { defineSubject, createUnit } from "../../../helpers";

export const mlFullstackLab = defineSubject(
    "US07HMABIT03",
    "Practical based on Machine Learning and Full Stack",
    [
        createUnit("bscit-ml-lab", "Part-1: Machine Learning Practical", "Data preprocessing, visualization, and ML algorithms implementation.", "/editor/python?course=bsc-it&subject=US07HMABIT03&part=1"),
        createUnit("bscit-fullstack-lab", "Part-2: Node.js and React Practical", "Server-side apps, MongoDB operations, and Full Stack integration.", "/editor/javascript?course=bsc-it&subject=US07HMABIT03&part=2")
    ],
    { code: "US07HMABIT03", type: "lab" }
);