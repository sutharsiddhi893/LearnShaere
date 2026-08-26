import { createSubject, createUnits } from "../../../helpers";

const cyberSecurity = createSubject(
    "P2S02NCINT04",
    "Cyber Security",
    createUnits("mscit-sem2-cyber-security-unit", [
        "Introduction to Cybercrime",
        "Tools and Methods Used in Cybercrime",
        "Cryptography",
        "Computer Forensics and Forensics of Hand-Held Devices",
    ])
);

export default cyberSecurity;