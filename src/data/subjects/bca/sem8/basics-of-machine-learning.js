/* =========================================================
   BCA • SEMESTER 8
   Basics of Machine Learning   (US08CBCA51)
========================================================= */

import { defineSubject, createUnit } from "../../../helpers";

import {
  unit1Topics,
  unit2Topics,
} from "./basics-of-machine-learning/index";

export const basicsOfMachineLearning = defineSubject(
  "US08CBCA51",
  "Basics of Machine Learning",

  [
    createUnit(
      "bca-ml-unit-1",
      "Unit 1",
      "ML Foundations, Supervised & Unsupervised Learning",
      { topics: unit1Topics }
    ),
    createUnit(
      "bca-ml-unit-2",
      "Unit 2",
      "Feature Engineering, Ensembles, Deep Learning, Tools & Ethics",
      { topics: unit2Topics }
    ),
  ],

  {
    code: "US08CBCA51",
    documentationId: "basics-of-machine-learning",
    hasContent: true,
    contentComplete: true,
  }
);