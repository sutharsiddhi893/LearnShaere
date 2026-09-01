/* =========================================================
   B.Sc IT • SEMESTER 7
   Fundamentals of Machine Learning   (US07HMABIT01)
========================================================= */
import { defineSubject, createUnits } from "../../../helpers";

export const fundamentalsOfMachineLearning = defineSubject(
    "US07HMABIT01",
    "Fundamentals of Machine Learning",
    createUnits("bscit-ml-unit", [
        "Introduction to Machine Learning",
        "Data Preparation, Modelling, Training and Evaluation",
        "Supervised Learning (Classification and Regression)",
        "Unsupervised Learning"
    ]),
    { code: "US07HMABIT01" }
);