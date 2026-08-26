import { createSubject, createUnits } from "../../../helpers";

const softwareEngineering = createSubject(
    "P2S02NCINT05",
    "Software Engineering",
    createUnits("mscit-sem2-software-engineering-unit", [
        "Introduction to Software Engineering, SDLC, Process Models, SRS and Project Management",
        "Software Design, Coding and Testing",
    ]),
    { wide: true }
);

export default softwareEngineering;