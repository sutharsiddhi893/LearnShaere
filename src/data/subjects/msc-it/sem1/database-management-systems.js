import { defineSubject, createUnit } from "../../../helpers";
import { unit1Topics } from "./database-management-systems/unit-1";
import { unit2Topics } from "./database-management-systems/unit-2";
import { unit3Topics } from "./database-management-systems/unit-3";
import { unit4Topics } from "./database-management-systems/unit-4";

export const databaseManagementSystems = defineSubject(
    "P2S01NCINT02",
    "Database Management Systems",
    [
        createUnit(
            "mscit-database-management-unit-1",
            "Unit 1",
            "Introduction",
            { topics: unit1Topics }
        ),
        createUnit(
            "mscit-database-management-unit-2",
            "Unit 2",
            "Structured Query Language (SQL)",
            { topics: unit2Topics }
        ),
        createUnit(
            "mscit-database-management-unit-3",
            "Unit 3",
            "SQL and PL/SQL",
            { topics: unit3Topics }
        ),
        createUnit(
            "mscit-database-management-unit-4",
            "Unit 4",
            "Advanced PL/SQL",
            { topics: unit4Topics }
        ),
    ],
    {
        code: "P2S01NCINT02",
        documentationId: "database-management-systems",
        hasContent: true,
        contentComplete: true,
    }
);

export default databaseManagementSystems;