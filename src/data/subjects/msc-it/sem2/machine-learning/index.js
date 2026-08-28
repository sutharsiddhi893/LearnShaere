import { unit1Topics } from "./unit-1";
import { unit2Topics } from "./unit-2";
import { unit3Topics } from "./unit-3";
import { unit4Topics } from "./unit-4";

export const machineLearning = {
    id: "machine-learning",
    name: "Machine Learning",
    semester: 2,
    units: [
        {
            id: "unit-1",
            title: "Introduction to Machine Learning and Python Foundations",
            topics: unit1Topics,
        },
        {
            id: "unit-2",
            title: "Data Preprocessing Techniques",
            topics: unit2Topics,
        },
        {
            id: "unit-3",
            title: "Supervised Learning Algorithms",
            topics: unit3Topics,
        },
        {
            id: "unit-4",
            title: "Unsupervised Learning and Advanced Techniques",
            topics: unit4Topics,
        },
    ],
};

export { unit1Topics, unit2Topics, unit3Topics, unit4Topics };