import { createSubject, createUnits } from "../../../helpers";

const computerNetworks = createSubject(
    "P2S01NCINT04",
    "Computer Networks",
    createUnits("mscit-computer-networks-unit", [
        "Introduction and Data Communication Fundamentals",
        "Layered Protocols",
        "Routing, Congestion Control and Internetworking",
        "Wireless Communication and Network Security",
    ])
);

export default computerNetworks;