import { createSubject, createUnit } from "../../../helpers";

const practicalsII = createSubject(
    "P2S02NCINT06",
    "Practicals - II",
    [
        createUnit(
            "mscit-sem2-java-practical",
            "Java Lab",
            "Practical Training and Hands-on Sessions on Java",
            "/editor/java?course=msc-it&subject=P2S02NCINT06&session=java"
        ),
        createUnit(
            "mscit-sem2-web-practical",
            "Web Technology Lab",
            "Practical Training and Hands-on Sessions on Web Technology",
            "/editor/javascript?course=msc-it&subject=P2S02NCINT06&session=web-technology"
        ),
    ],
    { type: "lab", wide: true }
);

export default practicalsII;