import { unit1Topics } from "./unit-1";
import { unit2Topics } from "./unit-2";

export const softwareEngineering = {
    id: "software-engineering",
    name: "Software Engineering",
    semester: 2,
    units: [
        {
            id: "unit-1",
            title:
                "Introduction to Software Engineering, SDLC, Process Models, SRS and Project Management",
            topics: unit1Topics,
        },
        {
            id: "unit-2",
            title: "Software Design, Coding and Testing",
            topics: unit2Topics,
        },
    ],
};

export { unit1Topics, unit2Topics };