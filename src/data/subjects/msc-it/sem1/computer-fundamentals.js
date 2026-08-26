import { defineSubject, createUnit } from "../../../helpers";
import { unit1Topics } from "./computer-fundamentals/unit-1";
import { unit2Topics } from "./computer-fundamentals/unit-2";

export const computerFundamentals = defineSubject(
    "P2S01NCINT05",
    "Computer Fundamentals",
    [
        createUnit(
            "mscit-computer-fundamentals-unit-1",
            "Unit 1",
            "Fundamentals of Computer Organization and Operating Systems",
            { topics: unit1Topics }
        ),
        createUnit(
            "mscit-computer-fundamentals-unit-2",
            "Unit 2",
            "Fundamentals of Data Structures",
            { topics: unit2Topics }
        ),
    ],
    {
        code: "P2S01NCINT05",
        documentationId: "computer-fundamentals",
        wide: true,
        hasContent: true,
        contentComplete: true,
    }
);

export default computerFundamentals;