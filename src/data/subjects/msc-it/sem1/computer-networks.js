import { defineSubject, createUnit } from "../../../helpers";
import { unit1Topics } from "./computer-networks/unit-1";
import { unit2Topics } from "./computer-networks/unit-2";
import { unit3Topics } from "./computer-networks/unit-3";
import { unit4Topics } from "./computer-networks/unit-4";

export const computerNetworks = defineSubject(
    "P2S01NCINT04",
    "Computer Networks",
    [
        createUnit(
            "mscit-computer-networks-unit-1",
            "Unit 1",
            "Introduction and Data Communication Fundamentals",
            { topics: unit1Topics }
        ),
        createUnit(
            "mscit-computer-networks-unit-2",
            "Unit 2",
            "Layered Protocols",
            { topics: unit2Topics }
        ),
        createUnit(
            "mscit-computer-networks-unit-3",
            "Unit 3",
            "Routing, Congestion Control and Internetworking",
            { topics: unit3Topics }
        ),
        createUnit(
            "mscit-computer-networks-unit-4",
            "Unit 4",
            "Wireless Communication and Network Security",
            { topics: unit4Topics }
        ),
    ],
    {
        code: "P2S01NCINT04",
        documentationId: "computer-networks",
        hasContent: true,
        contentComplete: true,
    }
);

export default computerNetworks;