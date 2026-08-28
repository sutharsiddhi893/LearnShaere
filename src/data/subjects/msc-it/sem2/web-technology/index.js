import { unit1Topics } from "./unit-1";
import { unit2Topics } from "./unit-2";
import { unit3Topics } from "./unit-3";
import { unit4Topics } from "./unit-4";

const webTechnology = {
    id: "web-technology",
    name: "Web Technology",
    semester: 2,
    units: [
        {
            id: "unit-1",
            title: "Fundamentals and Front-End Structure",
            topics: unit1Topics,
        },
        {
            id: "unit-2",
            title: "Client-Side Web Development",
            topics: unit2Topics,
        },
        {
            id: "unit-3",
            title: "Server-Side Web Scripting",
            topics: unit3Topics,
        },
        {
            id: "unit-4",
            title: "Advanced Server-Side Web Scripting",
            topics: unit4Topics,
        },
    ],
};

export { unit1Topics, unit2Topics, unit3Topics, unit4Topics };

export default webTechnology;