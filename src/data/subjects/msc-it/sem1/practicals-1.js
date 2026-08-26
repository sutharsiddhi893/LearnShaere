import { createSubject, createUnit } from "../../../helpers";

export const practicalsI = createSubject(
    "P2S01NCINT06",
    "Practicals - I",
    [
        createUnit(
            "mscit-python-practical",
            "Python Lab",
            "Practical Training and Hands-on Sessions on Python",
            "/editor/python?course=msc-it&subject=P2S01NCINT06&session=python"
        ),
        createUnit(
            "mscit-dbms-practical",
            "Database Lab",
            "Practical Training and Hands-on Sessions on DBMS",
            "/editor/sql?course=msc-it&subject=P2S01NCINT06&session=dbms"
        ),
    ],
    { type: "lab", wide: true }
);

export const practicals1 = practicalsI;
export default practicalsI;