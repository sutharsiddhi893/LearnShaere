import { createSubject, createUnits } from "../../../helpers";

const machineLearning = createSubject(
    "P2S02NCINT03",
    "Machine Learning",
    createUnits("mscit-sem2-machine-learning-unit", [
        "Introduction to Machine Learning and Python Foundations",
        "Data Preprocessing Techniques",
        "Supervised Learning Algorithms",
        "Unsupervised Learning and Advanced Techniques",
    ])
);

export default machineLearning;