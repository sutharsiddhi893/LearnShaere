import { createSubject, createUnits } from "../../../helpers";

const databaseManagementSystems = createSubject(
    "P2S01NCINT02",
    "Database Management Systems",
    createUnits("mscit-database-management-unit", [
        "Introduction",
        "Structured Query Language (SQL)",
        "SQL and PL/SQL",
        "Advanced PL/SQL",
    ])
);

export default databaseManagementSystems;