import { defineSubject, createUnit } from "../../../helpers";
import { unit1Topics } from "./artificial-intelligence/unit-1";
import { unit2Topics } from "./artificial-intelligence/unit-2";
import { unit3Topics } from "./artificial-intelligence/unit-3";
import { unit4Topics } from "./artificial-intelligence/unit-4";

export const artificialIntelligence = defineSubject(
    "P2S01NCINT03",
    "Artificial Intelligence",
    [
        createUnit(
            "mscit-artificial-intelligence-unit-1",
            "Unit 1",
            "Artificial Intelligence and Knowledge Based Systems",
            { topics: unit1Topics }
        ),
        createUnit(
            "mscit-artificial-intelligence-unit-2",
            "Unit 2",
            "Fuzzy Logic",
            { topics: unit2Topics }
        ),
        createUnit(
            "mscit-artificial-intelligence-unit-3",
            "Unit 3",
            "Connectionist Models",
            { topics: unit3Topics }
        ),
        createUnit(
            "mscit-artificial-intelligence-unit-4",
            "Unit 4",
            "Genetic Algorithms",
            { topics: unit4Topics }
        ),
    ],
    {
        code: "P2S01NCINT03",
        documentationId: "artificial-intelligence",
        hasContent: true,
        contentComplete: true,
    }
);

export default artificialIntelligence;