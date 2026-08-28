import { unit1Topics } from "./unit-1";
import { unit2Topics } from "./unit-2";
import { unit3Topics } from "./unit-3";
import { unit4Topics } from "./unit-4";

export const cyberSecurity = {
    id: "cyber-security",
    name: "Cyber Security",
    semester: 2,
    units: [
        {
            id: "unit-1",
            title: "Introduction to Cybercrime",
            topics: unit1Topics,
        },
        {
            id: "unit-2",
            title: "Tools and Methods Used in Cybercrime",
            topics: unit2Topics,
        },
        {
            id: "unit-3",
            title: "Cryptography",
            topics: unit3Topics,
        },
        {
            id: "unit-4",
            title: "Computer Forensics and Forensics of Hand-Held Devices",
            topics: unit4Topics,
        },
    ],
};

export { unit1Topics, unit2Topics, unit3Topics, unit4Topics };