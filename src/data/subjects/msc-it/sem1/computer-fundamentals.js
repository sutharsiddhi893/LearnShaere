import { createSubject, createUnits } from "../../../helpers";

const computerFundamentals = createSubject(
    "P2S01NCINT05",
    "Computer Fundamentals",
    createUnits("mscit-computer-fundamentals-unit", [
        "Fundamentals of Computer Organization and Operating Systems",
        "Fundamentals of Data Structures",
    ]),
    { wide: true }
);

export default computerFundamentals;