import { createSubject, createUnits } from "../../../helpers";

const webTechnology = createSubject(
    "P2S02NCINT02",
    "Web Technology",
    createUnits("mscit-sem2-web-technology-unit", [
        "Fundamentals of Web Technology and Front-End Structure",
        "Client-Side Web Development",
        "Server-Side Web Scripting",
        "Advanced Server-Side Web Scripting",
    ])
);

export default webTechnology;