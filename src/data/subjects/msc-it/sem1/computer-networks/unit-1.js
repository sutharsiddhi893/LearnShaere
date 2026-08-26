/* =========================================================
   MSc-IT • SEM 1 • Computer Networks
   UNIT 1 — Introduction and Data Communication Fundamentals
========================================================= */

import {
    createTopic,
    heading,
    text,
    list,
    code,
    output,
    table,
    note,
    definition,
    steps,
    keyPoints,
    mcq,
    qa,
} from "../../../../helpers";

/* =========================================================
   TOPIC 1 — Introduction to Computer Networks
========================================================= */

const introToComputerNetworks = createTopic(
    "introduction-to-computer-networks",
    "Introduction to Computer Networks",

    [
        definition(
            "Computer Network",
            "A collection of interconnected computing devices (nodes) that can communicate with each other to share resources, exchange data and provide services. The devices are connected by communication links using wired or wireless media."
        ),

        text(
            "Computer networks have transformed the way we communicate, work and access information. From the early ARPANET in 1969 to today's global Internet connecting billions of devices, networking technology has become the backbone of modern society, enabling everything from email and web browsing to cloud computing, IoT and real-time video conferencing."
        ),

        heading("Goals of Computer Networks"),

        list([
            "Resource Sharing — share hardware (printers, storage), software and data among users.",
            "Communication — enable fast and reliable exchange of information through email, messaging and video.",
            "Reliability — provide alternative paths and backup systems so that failure of one component does not halt operations.",
            "Cost Reduction — share expensive resources instead of providing one per user.",
            "Scalability — allow the network to grow by adding more devices without major redesign.",
            "Centralised Management — manage data, security and software updates from a central location.",
        ]),

        heading("Components of a Computer Network"),

        table(
            ["Component", "Description", "Examples"],
            [
                ["Nodes / Hosts", "Devices that send or receive data", "Computers, servers, smartphones, IoT devices"],
                ["Links", "Physical or wireless connections between nodes", "Ethernet cables, fibre optics, Wi-Fi"],
                ["Network Interface Card (NIC)", "Hardware that connects a device to the network", "Ethernet card, Wi-Fi adapter"],
                ["Switch", "Connects devices within a LAN and forwards frames based on MAC address", "24-port Ethernet switch"],
                ["Router", "Connects different networks and forwards packets based on IP address", "Home router, enterprise router"],
                ["Hub", "Broadcasts data to all connected devices (obsolete)", "Legacy Ethernet hub"],
                ["Modem", "Converts digital signals to analog and vice versa", "DSL modem, cable modem"],
                ["Access Point", "Provides wireless connectivity to a wired network", "Wi-Fi access point"],
            ]
        ),

        heading("Types of Networks by Geographical Scope"),

        table(
            ["Type", "Full Form", "Coverage", "Example"],
            [
                ["PAN", "Personal Area Network", "A few metres (personal workspace)", "Bluetooth between phone and earbuds"],
                ["LAN", "Local Area Network", "A building or campus", "Office network, college lab"],
                ["MAN", "Metropolitan Area Network", "A city", "Cable TV network, city-wide Wi-Fi"],
                ["WAN", "Wide Area Network", "A country or the world", "The Internet, corporate WAN"],
                ["SAN", "Storage Area Network", "Data centre", "Fibre Channel storage network"],
            ]
        ),

        heading("Network Architecture"),

        table(
            ["Architecture", "Description", "Example"],
            [
                ["Client-Server", "Dedicated servers provide services to client devices", "Web browsing, email, file servers"],
                ["Peer-to-Peer (P2P)", "All devices are equal; each can act as both client and server", "BitTorrent, blockchain networks"],
                ["Hybrid", "Combines client-server and P2P", "Enterprise networks with P2P file sharing"],
            ]
        ),

        heading("Client-Server versus Peer-to-Peer"),

        table(
            ["Aspect", "Client-Server", "Peer-to-Peer"],
            [
                ["Control", "Centralised (server manages resources)", "Decentralised (each peer manages its own)"],
                ["Security", "Easier to secure centrally", "Harder to secure individually"],
                ["Scalability", "Server can become a bottleneck", "Scales naturally as peers are added"],
                ["Cost", "Expensive servers required", "No dedicated server needed"],
                ["Reliability", "Server failure affects all clients", "No single point of failure"],
                ["Example", "HTTP web browsing", "BitTorrent file sharing"],
            ]
        ),

        heading("Brief History of Networking"),

        table(
            ["Year", "Milestone"],
            [
                ["1969", "ARPANET — first packet-switched network, precursor to the Internet"],
                ["1974", "TCP/IP protocol suite proposed by Vint Cerf and Bob Kahn"],
                ["1983", "ARPANET adopts TCP/IP — birth of the modern Internet"],
                ["1989", "Tim Berners-Lee invents the World Wide Web at CERN"],
                ["1991", "First web browser and web server released"],
                ["1990s", "Commercial Internet expands; Ethernet and Wi-Fi emerge"],
                ["2000s", "Broadband, mobile networks (3G), cloud computing"],
                ["2010s", "4G/LTE, IoT, SDN, 5G development"],
                ["2020s", "5G deployment, edge computing, Wi-Fi 6/7"],
            ]
        ),

        keyPoints([
            "A computer network is a collection of interconnected devices that share resources and data.",
            "Key components include nodes, links, NICs, switches, routers and access points.",
            "Networks are classified by scope: PAN, LAN, MAN, WAN and SAN.",
            "Client-server uses centralised servers; P2P treats all devices as equals.",
            "The Internet evolved from ARPANET (1969) and adopted TCP/IP in 1983.",
        ]),
    ],

    {
        summary:
            "Understand what a computer network is, its goals, components, types by scope, architectures and brief history.",
        minutes: 11,
        tags: ["networks", "introduction", "lan", "wan", "client-server", "important"],

        mcqs: [
            mcq(
                "A LAN covers:",
                ["A country", "A city", "A building or campus", "A few metres"],
                2,
                "A Local Area Network (LAN) covers a limited area such as a building or campus."
            ),
            mcq(
                "Which device forwards packets between different networks based on IP address?",
                ["Switch", "Hub", "Router", "NIC"],
                2,
                "A router connects different networks and forwards packets based on IP addresses."
            ),
            mcq(
                "ARPANET, the precursor to the Internet, was established in:",
                ["1959", "1969", "1979", "1989"],
                1,
                "ARPANET was established in 1969 by the US Department of Defense."
            ),
            mcq(
                "In a peer-to-peer network:",
                ["A central server controls all resources", "All devices are equal and can act as both client and server", "Only one device can send data", "It covers a wide geographical area"],
                1,
                "In P2P, all devices (peers) are equal and can both provide and consume resources."
            ),
            mcq(
                "TCP/IP was adopted by ARPANET in:",
                ["1969", "1974", "1983", "1991"],
                2,
                "ARPANET adopted TCP/IP in 1983, marking the birth of the modern Internet."
            ),
            mcq(
                "A Bluetooth connection between a phone and earbuds is an example of:",
                ["LAN", "MAN", "PAN", "WAN"],
                2,
                "A Personal Area Network (PAN) covers a few metres, such as Bluetooth connections."
            ),
        ],

        questions: [
            qa(
                "Define a computer network and explain its goals.",
                "A computer network is a collection of interconnected computing devices (nodes) that can communicate with each other to share resources, exchange data and provide services, connected by wired or wireless communication links. The goals include resource sharing (hardware, software and data), enabling fast and reliable communication through email, messaging and video, providing reliability through alternative paths and backup systems, reducing costs by sharing expensive resources, allowing scalability by adding devices without major redesign, and enabling centralised management of data, security and software updates.",
                5
            ),
            qa(
                "Compare client-server and peer-to-peer network architectures.",
                "In a client-server architecture, dedicated servers provide services to client devices. It offers centralised control making security and management easier, but the server can become a bottleneck and represents a single point of failure. It requires expensive server hardware. Examples include web browsing and email. In a peer-to-peer architecture, all devices are equal and each can act as both client and server. It is decentralised, scales naturally as peers are added, has no single point of failure and requires no dedicated server. However, it is harder to secure and manage because each peer is independently controlled. Examples include BitTorrent and blockchain networks.",
                5
            ),
            qa(
                "Classify networks by geographical scope with examples.",
                "A Personal Area Network (PAN) covers a few metres, such as a Bluetooth connection between a phone and wireless earbuds. A Local Area Network (LAN) covers a building or campus, such as an office network or college computer lab using Ethernet or Wi-Fi. A Metropolitan Area Network (MAN) covers a city, such as a cable TV network or city-wide Wi-Fi system. A Wide Area Network (WAN) covers a country or the entire world, with the Internet being the largest example. A Storage Area Network (SAN) is a specialised high-speed network within a data centre that provides access to consolidated block-level storage using technologies like Fibre Channel.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — Data Communication Fundamentals
========================================================= */

const dataCommunicationFundamentals = createTopic(
    "data-communication-fundamentals",
    "Data Communication Fundamentals",

    [
        definition(
            "Data Communication",
            "The process of exchanging data (information) between two or more devices through some form of transmission medium. For data communication to occur, the devices must be part of a communication system made up of a combination of hardware and software."
        ),

        heading("Components of a Data Communication System"),

        table(
            ["Component", "Role", "Example"],
            [
                ["Message", "The data or information to be communicated", "Text, image, audio, video, file"],
                ["Sender (Transmitter)", "The device that sends the message", "Computer, phone, sensor"],
                ["Receiver", "The device that receives the message", "Computer, phone, display"],
                ["Medium (Channel)", "The physical path through which the message travels", "Copper wire, fibre optic, air (wireless)"],
                ["Protocol", "A set of rules governing data communication", "TCP/IP, HTTP, FTP"],
            ]
        ),

        code(
            `Data Communication System:

  Sender → [Encoder] → Transmission Medium → [Decoder] → Receiver
    |           |              |                  |           |
  Computer   Modem       Cable / Air           Modem      Computer
              |              |                  |
         [Noise/Interference may affect signal]

  Protocol governs the rules at both ends.`,
            "text",
            "Data communication system model"
        ),

        heading("Data Flow (Transmission Modes)"),

        table(
            ["Mode", "Direction", "Simultaneous?", "Example"],
            [
                ["Simplex", "One direction only", "No", "TV broadcast, keyboard to computer"],
                ["Half-Duplex", "Both directions, but one at a time", "No", "Walkie-talkie, CB radio"],
                ["Full-Duplex", "Both directions simultaneously", "Yes", "Telephone, video call"],
            ]
        ),

        code(
            `Simplex:
  Sender ──────→ Receiver  (one way only)
  Example: TV broadcast

Half-Duplex:
  Sender ←─────→ Receiver  (one at a time)
  Example: Walkie-talkie ("Over")

Full-Duplex:
  Sender ←══════→ Receiver  (both ways at once)
  Example: Phone call`,
            "text",
            "Transmission modes"
        ),

        heading("Types of Signals"),

        table(
            ["Aspect", "Analog Signal", "Digital Signal"],
            [
                ["Representation", "Continuous wave", "Discrete values (0s and 1s)"],
                ["Values", "Infinite values within a range", "Finite set of values (usually 2)"],
                ["Example", "Human voice, radio waves", "Computer data, CD audio"],
                ["Noise effect", "Degrades quality gradually", "Can be detected and corrected"],
                ["Transmission", "Analog medium (telephone lines)", "Digital medium (Ethernet, fibre)"],
            ]
        ),

        heading("Data Rate and Bandwidth"),

        definition(
            "Bandwidth",
            "The range of frequencies that a communication channel can carry, measured in Hertz (Hz). In digital communications, it is often used loosely to mean the maximum data rate of a channel, measured in bits per second (bps)."
        ),

        definition(
            "Data Rate (Bit Rate)",
            "The number of bits transmitted per second over a communication channel, measured in bits per second (bps), Kbps, Mbps, Gbps or Tbps."
        ),

        table(
            ["Unit", "Value", "Example"],
            [
                ["bps", "Bits per second", "Old modems (56 Kbps)"],
                ["Kbps", "Kilobits per second (10³)", "Audio streaming (128 Kbps)"],
                ["Mbps", "Megabits per second (10⁶)", "Wi-Fi (100–600 Mbps)"],
                ["Gbps", "Gigabits per second (10⁹)", "Fibre optic (1–10 Gbps)"],
                ["Tbps", "Terabits per second (10¹²)", "Backbone links"],
            ]
        ),

        heading("Nyquist and Shannon Theorems"),

        definition(
            "Nyquist Theorem",
            "For a noiseless channel, the maximum data rate is: C = 2 × B × log₂(L), where B is bandwidth in Hz and L is the number of signal levels."
        ),

        definition(
            "Shannon's Theorem",
            "For a noisy channel, the maximum data rate (channel capacity) is: C = B × log₂(1 + SNR), where B is bandwidth in Hz and SNR is the signal-to-noise ratio."
        ),

        code(
            `Nyquist Example:
  Bandwidth B = 3000 Hz, Signal levels L = 2
  C = 2 × 3000 × log₂(2) = 6000 bps

Shannon Example:
  Bandwidth B = 3000 Hz, SNR = 1000
  C = 3000 × log₂(1 + 1000)
  C = 3000 × log₂(1001)
  C = 3000 × 9.97 ≈ 29,900 bps ≈ 30 Kbps`,
            "text",
            "Nyquist and Shannon examples"
        ),

        heading("Impairments in Transmission"),

        table(
            ["Impairment", "Cause", "Effect"],
            [
                ["Attenuation", "Signal loses energy over distance", "Signal becomes weaker"],
                ["Distortion", "Different frequencies travel at different speeds", "Signal shape changes"],
                ["Noise", "External electromagnetic interference", "Unwanted signals corrupt data"],
                ["Jitter", "Variation in packet arrival time", "Degraded audio/video quality"],
            ]
        ),

        note(
            "Attenuation is measured in decibels (dB). A loss of 3 dB means the signal power is halved. Amplifiers (for analog) and repeaters (for digital) are used to combat attenuation over long distances.",
            "tip",
            "Signal Loss"
        ),

        keyPoints([
            "A data communication system has five components: message, sender, receiver, medium and protocol.",
            "Transmission modes: simplex (one way), half-duplex (one at a time), full-duplex (simultaneous).",
            "Analog signals are continuous; digital signals use discrete values (0s and 1s).",
            "Nyquist theorem gives max data rate for noiseless channels; Shannon's for noisy channels.",
            "Transmission impairments include attenuation, distortion, noise and jitter.",
        ]),
    ],

    {
        summary:
            "Learn the components of data communication, transmission modes, signal types, data rate, bandwidth and channel capacity theorems.",
        minutes: 12,
        tags: ["networks", "data-communication", "bandwidth", "nyquist", "shannon", "important"],

        mcqs: [
            mcq(
                "In simplex transmission mode, data flows:",
                ["In both directions simultaneously", "In both directions but one at a time", "In one direction only", "In a circular path"],
                2,
                "Simplex mode allows data flow in only one direction, like a TV broadcast."
            ),
            mcq(
                "A walkie-talkie is an example of:",
                ["Simplex", "Half-duplex", "Full-duplex", "Multiplex"],
                1,
                "A walkie-talkie allows communication in both directions but only one at a time (half-duplex)."
            ),
            mcq(
                "Shannon's theorem calculates the maximum data rate for:",
                ["A noiseless channel", "A noisy channel", "A wireless channel only", "A fibre optic channel only"],
                1,
                "Shannon's theorem gives the channel capacity for a noisy channel: C = B × log₂(1 + SNR)."
            ),
            mcq(
                "Attenuation refers to:",
                ["Signal amplification", "Loss of signal strength over distance", "Signal distortion", "Noise addition"],
                1,
                "Attenuation is the loss of signal energy as it travels through a medium."
            ),
            mcq(
                "Digital signals represent data as:",
                ["Continuous waves", "Discrete values (0s and 1s)", "Analog frequencies", "Light pulses only"],
                1,
                "Digital signals use discrete values, typically binary 0s and 1s."
            ),
        ],

        questions: [
            qa(
                "Explain the five components of a data communication system.",
                "A data communication system consists of five components. The message is the data or information to be communicated, which can be text, images, audio, video or files. The sender (transmitter) is the device that sends the message, such as a computer or phone. The receiver is the device that receives the message, such as another computer or a display. The medium (channel) is the physical path through which the message travels, such as copper wire, fibre optic cable or wireless air. The protocol is a set of rules that governs the communication, ensuring that both sender and receiver understand each other, such as TCP/IP or HTTP.",
                5
            ),
            qa(
                "Differentiate between simplex, half-duplex and full-duplex transmission modes.",
                "Simplex mode allows data to flow in only one direction. The sender can only send and the receiver can only receive. Examples include TV broadcasting and a keyboard sending data to a computer. Half-duplex mode allows data to flow in both directions but not simultaneously — only one device can transmit at a time. An example is a walkie-talkie where users must say 'over' to switch directions. Full-duplex mode allows data to flow in both directions simultaneously. Both devices can send and receive at the same time. Examples include a telephone conversation and video calls. Full-duplex requires either two separate channels or a technique to separate the two directions on the same channel.",
                5
            ),
            qa(
                "State and explain Nyquist and Shannon theorems.",
                "Nyquist theorem applies to a noiseless channel and states that the maximum data rate is C = 2 × B × log₂(L), where B is the bandwidth in Hz and L is the number of signal levels. For example, a channel with 3000 Hz bandwidth and 2 signal levels can carry at most 6000 bps. Shannon's theorem applies to a noisy channel and states that the maximum data rate (channel capacity) is C = B × log₂(1 + SNR), where SNR is the signal-to-noise ratio. For example, a 3000 Hz channel with SNR of 1000 has a capacity of approximately 30 Kbps. Shannon's theorem sets the theoretical upper limit — no encoding scheme can exceed this rate regardless of how sophisticated it is.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — Network Topologies
========================================================= */

const networkTopologies = createTopic(
    "network-topologies",
    "Network Topologies",

    [
        definition(
            "Network Topology",
            "The physical or logical arrangement of nodes and links in a network. It defines how devices are connected and how data flows between them."
        ),

        heading("Types of Topologies"),

        heading("1. Bus Topology"),

        code(
            `  ┌────┐   ┌────┐   ┌────┐   ┌────┐   ┌────┐
  │ PC │   │ PC │   │ PC │   │ PC │   │ PC │
  └─┬──┘   └─┬──┘   └─┬──┘   └─┬──┘   └─┬──┘
    │        │        │        │        │
  ══╪════════╪════════╪════════╪════════╪══
       Main Bus Cable (Backbone)
    [Term]                            [Term]`,
            "text",
            "Bus topology"
        ),

        table(
            ["Aspect", "Description"],
            [
                ["Structure", "All devices share a single communication cable (bus/backbone)"],
                ["Terminators", "Required at both ends to prevent signal reflection"],
                ["Data flow", "Data sent by one device is received by all; only the intended recipient accepts it"],
                ["Advantage", "Simple, inexpensive, easy to install for small networks"],
                ["Disadvantage", "Single point of failure (bus cable break stops entire network), collisions, difficult to troubleshoot"],
            ]
        ),

        heading("2. Star Topology"),

        code(
            `       ┌────┐
       │ PC │
       └─┬──┘
         │
  ┌────┐ │  ┌────┐
  │ PC ├─┼──┤ PC │
  └────┘ │  └────┘
         │
    ┌────┴────┐
    │  Switch │  ← Central device
    │  / Hub  │
    └────┬────┘
         │
  ┌────┐ │  ┌────┐
  │ PC ├─┼──┤ PC │
  └────┘ │  └────┘
         │
       ┌─┴──┐
       │ PC │
       └────┘`,
            "text",
            "Star topology"
        ),

        table(
            ["Aspect", "Description"],
            [
                ["Structure", "All devices connect to a central device (switch or hub)"],
                ["Data flow", "Data passes through the central device to reach the destination"],
                ["Advantage", "Easy to install and manage, failure of one cable affects only one device, easy to troubleshoot"],
                ["Disadvantage", "Central device is a single point of failure, requires more cable than bus"],
                ["Popularity", "Most common topology in modern LANs"],
            ]
        ),

        heading("3. Ring Topology"),

        code(
            `    ┌────┐ ──→ ┌────┐
    │ PC │      │ PC │
    └────┘      └────┘
      ↑           ↓
    ┌────┐      ┌────┐
    │ PC │      │ PC │
    └────┘ ←── └────┘

  Data travels in one direction around the ring.`,
            "text",
            "Ring topology"
        ),

        table(
            ["Aspect", "Description"],
            [
                ["Structure", "Devices are connected in a closed loop; each connects to exactly two neighbours"],
                ["Data flow", "Data travels in one direction (unidirectional) passing through each node"],
                ["Token Passing", "A token circulates; only the node holding the token can transmit"],
                ["Advantage", "Orderly access (no collisions), equal access for all nodes"],
                ["Disadvantage", "Failure of one node or link breaks the entire ring, adding/removing nodes disrupts the ring"],
            ]
        ),

        heading("4. Mesh Topology"),

        code(
            `    ┌────┐───────┌────┐
    │ PC │╲     ╱│ PC │
    └────┘ ╲   ╱ └────┘
      │  ╲  ╳  ╱  │
      │   ╳   ╳   │
      │  ╱ ╲ ╱ ╲  │
    ┌────┘   ╳   └────┐
    │ PC │╱     ╲│ PC │
    └────┘───────└────┘

  Full mesh: Every device connects to every other device.`,
            "text",
            "Mesh topology"
        ),

        table(
            ["Aspect", "Description"],
            [
                ["Structure", "Every device has a dedicated link to every other device (full mesh)"],
                ["Number of links", "n(n-1)/2 for n devices"],
                ["Advantage", "Maximum reliability and redundancy, no single point of failure, privacy (dedicated links)"],
                ["Disadvantage", "Very expensive (many cables and ports), complex installation and maintenance"],
                ["Use case", "Critical infrastructure, military, backbone networks"],
            ]
        ),

        heading("5. Tree Topology"),

        table(
            ["Aspect", "Description"],
            [
                ["Structure", "Hierarchical; a root node connects to branches that further branch out"],
                ["Also called", "Hierarchical topology or extended star"],
                ["Advantage", "Scalable, easy to manage in hierarchical organisations"],
                ["Disadvantage", "Root node failure affects the entire network"],
            ]
        ),

        heading("6. Hybrid Topology"),

        definition(
            "Hybrid Topology",
            "A combination of two or more different topologies. For example, a network might use star topology within each department and bus topology to connect departments."
        ),

        heading("Comparison of Topologies"),

        table(
            ["Topology", "Cost", "Reliability", "Scalability", "Troubleshooting", "Cable Required"],
            [
                ["Bus", "Low", "Low", "Limited", "Difficult", "Least"],
                ["Star", "Moderate", "Moderate", "Good", "Easy", "Moderate"],
                ["Ring", "Moderate", "Low", "Limited", "Moderate", "Moderate"],
                ["Mesh", "Very High", "Very High", "Good", "Difficult", "Most"],
                ["Tree", "Moderate-High", "Moderate", "Very Good", "Moderate", "Moderate-High"],
            ]
        ),

        note(
            "Star topology is by far the most widely used in modern LANs because of its simplicity, ease of management and the fact that a single cable failure only affects one device. Ethernet switches serve as the central device.",
            "exam",
            "Frequently Asked"
        ),

        keyPoints([
            "Network topology defines the physical or logical arrangement of nodes and links.",
            "Bus uses a single backbone cable; star connects all devices to a central switch.",
            "Ring uses token passing for orderly access; mesh provides maximum redundancy.",
            "Star is the most common topology in modern LANs due to easy management.",
            "Full mesh requires n(n-1)/2 links for n devices, making it expensive but highly reliable.",
        ]),
    ],

    {
        summary:
            "Learn all network topologies: bus, star, ring, mesh, tree and hybrid, with their advantages, disadvantages and comparisons.",
        minutes: 11,
        tags: ["networks", "topology", "star", "bus", "mesh", "ring", "important"],

        mcqs: [
            mcq(
                "In which topology do all devices connect to a central device?",
                ["Bus", "Ring", "Star", "Mesh"],
                2,
                "In star topology, all devices connect to a central switch or hub."
            ),
            mcq(
                "The number of links in a full mesh with n devices is:",
                ["n", "n²", "n(n-1)/2", "2n"],
                2,
                "A full mesh requires n(n-1)/2 dedicated links for n devices."
            ),
            mcq(
                "Which topology uses token passing to control access?",
                ["Bus", "Star", "Ring", "Mesh"],
                2,
                "Ring topology uses token passing where only the node holding the token can transmit."
            ),
            mcq(
                "The most commonly used topology in modern LANs is:",
                ["Bus", "Ring", "Star", "Mesh"],
                2,
                "Star topology is the most common in modern LANs using Ethernet switches."
            ),
            mcq(
                "A hybrid topology is:",
                ["A ring with extra links", "A combination of two or more topologies", "A wireless-only topology", "A bus with terminators"],
                1,
                "Hybrid topology combines two or more different topologies in a single network."
            ),
        ],

        questions: [
            qa(
                "Compare bus and star topologies.",
                "In bus topology, all devices share a single communication cable called the backbone or bus. Data sent by one device is received by all, and only the intended recipient accepts it. It is simple and inexpensive but has a critical single point of failure — if the bus cable breaks, the entire network goes down. Troubleshooting is difficult and collisions are common. In star topology, all devices connect to a central device such as a switch. Data passes through the central device to reach its destination. Star is more reliable because a cable failure affects only one device, it is easy to troubleshoot and manage, and it is the most widely used topology in modern LANs. Its main disadvantage is that the central device is a single point of failure and it requires more cable than bus.",
                5
            ),
            qa(
                "Explain mesh topology with its advantages and disadvantages.",
                "In a full mesh topology, every device has a dedicated point-to-point link to every other device. For n devices, this requires n(n-1)/2 links. The main advantages are maximum reliability and redundancy because there are multiple paths between any two devices, meaning no single point of failure. Each link is dedicated, providing privacy and security. The disadvantages are very high cost due to the large number of cables and network ports required, complex installation and maintenance, and scalability issues as adding a new device requires links to all existing devices. Mesh topology is used in critical infrastructure like military networks and Internet backbone connections where reliability is paramount.",
                5
            ),
            qa(
                "Explain ring topology and the concept of token passing.",
                "In ring topology, devices are connected in a closed loop where each device connects to exactly two neighbours. Data travels in one direction (unidirectional) around the ring, passing through each intermediate node until it reaches the destination. To prevent collisions, ring networks use token passing: a special frame called a token circulates around the ring. A device that wants to transmit must wait until it receives the token, then it attaches its data to the token and sends it. The data travels around the ring until the destination copies it and the sender removes it, releasing the token for the next device. This ensures orderly access with no collisions. However, failure of any single node or link breaks the entire ring.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — Transmission Media
========================================================= */

const transmissionMedia = createTopic(
    "transmission-media",
    "Transmission Media",

    [
        definition(
            "Transmission Medium",
            "The physical path or channel through which data is transmitted from sender to receiver. It can be guided (wired) where signals travel along a physical conductor, or unguided (wireless) where signals propagate through the air or vacuum."
        ),

        heading("Classification of Transmission Media"),

        code(
            `Transmission Media
  ├── Guided (Wired)
  │   ├── Twisted Pair Cable
  │   │   ├── UTP (Unshielded Twisted Pair)
  │   │   └── STP (Shielded Twisted Pair)
  │   ├── Coaxial Cable
  │   └── Fibre Optic Cable
  │       ├── Single-Mode
  │       └── Multi-Mode
  │
  └── Unguided (Wireless)
      ├── Radio Waves
      ├── Microwaves
      └── Infrared`,
            "text",
            "Classification of transmission media"
        ),

        heading("1. Twisted Pair Cable"),

        definition(
            "Twisted Pair",
            "A cable consisting of two insulated copper wires twisted around each other. The twisting reduces electromagnetic interference (EMI) and crosstalk between adjacent pairs."
        ),

        table(
            ["Type", "Shielding", "Use", "Speed", "Example"],
            [
                ["UTP", "No shielding", "Most LANs, telephone", "Up to 10 Gbps (Cat 6a)", "Cat 5e, Cat 6, Cat 6a"],
                ["STP", "Metal foil/braid shield", "Industrial, high-EMI environments", "Up to 10 Gbps", "IBM Type 1"],
            ]
        ),

        table(
            ["Category", "Bandwidth", "Max Speed", "Max Distance", "Common Use"],
            [
                ["Cat 5", "100 MHz", "100 Mbps", "100 m", "Older Ethernet (Fast Ethernet)"],
                ["Cat 5e", "100 MHz", "1 Gbps", "100 m", "Gigabit Ethernet"],
                ["Cat 6", "250 MHz", "1 Gbps (10 Gbps up to 55m)", "100 m", "Gigabit / 10G Ethernet"],
                ["Cat 6a", "500 MHz", "10 Gbps", "100 m", "10G Ethernet"],
                ["Cat 7", "600 MHz", "10 Gbps", "100 m", "Data centres"],
                ["Cat 8", "2000 MHz", "40 Gbps", "30 m", "Data centres"],
            ]
        ),

        heading("2. Coaxial Cable"),

        definition(
            "Coaxial Cable",
            "A cable with a central copper conductor surrounded by insulation, a metallic shield and an outer jacket. It provides better shielding and higher bandwidth than twisted pair."
        ),

        table(
            ["Aspect", "Description"],
            [
                ["Structure", "Inner conductor → insulation → metallic shield → outer jacket"],
                ["Types", "Thinnet (10Base2, 185m) and Thicknet (10Base5, 500m)"],
                ["Speed", "Up to 10 Mbps (legacy Ethernet), higher for cable TV/broadband"],
                ["Use", "Cable TV, broadband Internet, older Ethernet LANs"],
                ["Advantage", "Better shielding than UTP, higher bandwidth"],
                ["Disadvantage", "Thicker, harder to install, more expensive than UTP"],
            ]
        ),

        heading("3. Fibre Optic Cable"),

        definition(
            "Fibre Optic Cable",
            "A cable that transmits data as pulses of light through thin strands of glass or plastic. It offers the highest bandwidth, longest distances and immunity to electromagnetic interference."
        ),

        table(
            ["Type", "Core Size", "Light Source", "Distance", "Speed", "Cost", "Use"],
            [
                ["Single-Mode", "8-10 μm", "Laser", "Up to 100 km", "10-100+ Gbps", "Expensive", "Long-haul, backbone"],
                ["Multi-Mode", "50-62.5 μm", "LED", "Up to 2 km", "1-10 Gbps", "Less expensive", "LANs, data centres"],
            ]
        ),

        heading("Comparison of Guided Media"),

        table(
            ["Feature", "Twisted Pair (UTP)", "Coaxial", "Fibre Optic"],
            [
                ["Speed", "Up to 10 Gbps", "Up to 10 Mbps (legacy)", "Up to 100+ Gbps"],
                ["Distance", "100 m", "185-500 m", "2-100 km"],
                ["EMI Immunity", "Low", "Moderate", "Complete (immune)"],
                ["Cost", "Lowest", "Moderate", "Highest"],
                ["Installation", "Easy", "Moderate", "Difficult (requires expertise)"],
                ["Security", "Low (can be tapped)", "Moderate", "High (difficult to tap)"],
                ["Weight", "Light", "Heavy", "Very light"],
            ]
        ),

        heading("Unguided (Wireless) Media"),

        table(
            ["Type", "Frequency Range", "Characteristics", "Applications"],
            [
                ["Radio Waves", "3 KHz – 1 GHz", "Omnidirectional, passes through walls", "AM/FM radio, Wi-Fi, Bluetooth, TV"],
                ["Microwaves", "1 GHz – 300 GHz", "Directional (line of sight), high bandwidth", "Satellite, cellular (4G/5G), point-to-point links"],
                ["Infrared", "300 GHz – 400 THz", "Short range, cannot pass through walls", "TV remote, IrDA, short-range data transfer"],
            ]
        ),

        note(
            "Fibre optic cable is the preferred medium for high-speed backbone networks because it offers the highest bandwidth, longest transmission distances and complete immunity to electromagnetic interference. However, it is more expensive and requires specialised equipment for installation and repair.",
            "exam",
            "Frequently Asked"
        ),

        keyPoints([
            "Transmission media are classified as guided (wired) or unguided (wireless).",
            "Twisted pair (UTP) is the most common LAN cable; Cat 5e supports 1 Gbps, Cat 6a supports 10 Gbps.",
            "Fibre optic cable transmits light, offering the highest bandwidth and immunity to EMI.",
            "Single-mode fibre uses laser for long distances; multi-mode uses LED for shorter distances.",
            "Wireless media include radio waves (Wi-Fi), microwaves (satellite, 5G) and infrared (remotes).",
        ]),
    ],

    {
        summary:
            "Learn guided media (twisted pair, coaxial, fibre optic) and unguided media (radio, microwave, infrared) with comparisons.",
        minutes: 11,
        tags: ["networks", "transmission-media", "fibre-optic", "twisted-pair", "wireless", "important"],

        mcqs: [
            mcq(
                "UTP stands for:",
                ["Universal Transfer Protocol", "Unshielded Twisted Pair", "Ultra Thin Pair", "Unified Transmission Path"],
                1,
                "UTP stands for Unshielded Twisted Pair, the most common LAN cable."
            ),
            mcq(
                "Cat 6a cable supports a maximum speed of:",
                ["100 Mbps", "1 Gbps", "10 Gbps", "40 Gbps"],
                2,
                "Cat 6a supports 10 Gbps over 100 metres."
            ),
            mcq(
                "Which transmission medium is immune to electromagnetic interference?",
                ["UTP", "Coaxial", "Fibre optic", "Radio waves"],
                2,
                "Fibre optic uses light instead of electrical signals, making it immune to EMI."
            ),
            mcq(
                "Single-mode fibre optic cable uses which light source?",
                ["LED", "Laser", "Infrared bulb", "Fluorescent"],
                1,
                "Single-mode fibre uses a laser light source for long-distance transmission."
            ),
            mcq(
                "Wi-Fi operates in which frequency range?",
                ["Infrared", "Microwave", "Radio waves", "Visible light"],
                2,
                "Wi-Fi operates in the radio wave frequency range (2.4 GHz and 5 GHz bands)."
            ),
        ],

        questions: [
            qa(
                "Compare twisted pair, coaxial and fibre optic cables.",
                "Twisted pair (UTP) is the most common and least expensive cable used in LANs, supporting speeds up to 10 Gbps over 100 metres with Cat 6a. It has low EMI immunity and is easy to install. Coaxial cable has a central conductor with metallic shielding, offering better EMI protection and higher bandwidth than UTP, but it is thicker, heavier and harder to install. It was used in older Ethernet and is still used for cable TV and broadband. Fibre optic cable transmits data as light pulses through glass or plastic strands, offering the highest bandwidth (100+ Gbps), longest distances (up to 100 km for single-mode), complete immunity to EMI and high security. However, it is the most expensive and requires specialised installation equipment.",
                5
            ),
            qa(
                "Explain the difference between single-mode and multi-mode fibre optic cable.",
                "Single-mode fibre has a very small core diameter of 8-10 micrometres and uses a laser as the light source. The small core allows only one mode (path) of light to propagate, eliminating modal dispersion and enabling transmission over very long distances up to 100 km at speeds of 10-100+ Gbps. It is used for long-haul telecommunications and backbone networks but is more expensive. Multi-mode fibre has a larger core of 50-62.5 micrometres and uses an LED light source. Multiple modes of light can propagate, causing modal dispersion that limits the distance to about 2 km. It supports speeds of 1-10 Gbps and is less expensive, making it suitable for LANs and data centres.",
                5
            ),
            qa(
                "Describe the three types of wireless transmission media.",
                "Radio waves operate in the 3 KHz to 1 GHz frequency range, are omnidirectional, can pass through walls and are used for AM/FM radio, Wi-Fi, Bluetooth and television broadcasting. Microwaves operate from 1 GHz to 300 GHz, are directional requiring line-of-sight between transmitter and receiver, offer high bandwidth and are used for satellite communication, cellular networks (4G/5G) and point-to-point wireless links. Infrared operates from 300 GHz to 400 THz, has very short range, cannot pass through walls or solid objects and is used for TV remote controls, IrDA data transfer between devices and short-range communication. Each type has different propagation characteristics suited to different applications.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 5 — Data Encoding and Multiplexing
========================================================= */

const dataEncodingAndMultiplexing = createTopic(
    "data-encoding-and-multiplexing",
    "Data Encoding and Multiplexing",

    [
        heading("Data Encoding"),

        definition(
            "Data Encoding",
            "The process of converting digital data (0s and 1s) into signals suitable for transmission over a communication medium. Different encoding schemes have different characteristics in terms of bandwidth, synchronisation, error detection and DC component."
        ),

        heading("Line Coding Schemes"),

        table(
            ["Scheme", "Description", "Advantage", "Disadvantage"],
            [
                ["Unipolar (NRZ)", "1 = positive voltage, 0 = zero voltage", "Simple", "DC component, no synchronisation"],
                ["NRZ-L (Non-Return to Zero Level)", "1 = high, 0 = low (or vice versa)", "Simple, efficient bandwidth", "DC component, baseline wandering"],
                ["NRZ-I (Non-Return to Zero Inverted)", "Transition at beginning = 1, no transition = 0", "No DC for long 1s", "DC for long 0s"],
                ["Manchester", "Transition in middle of each bit: high-to-low = 0, low-to-high = 1", "Self-clocking, no DC component", "Requires double the bandwidth"],
                ["Differential Manchester", "Transition in middle always; transition at start = 0, no transition = 1", "Self-clocking, no DC, good noise immunity", "Double bandwidth"],
                ["AMI (Alternate Mark Inversion)", "0 = zero voltage, 1 = alternating positive/negative", "No DC component", "Long strings of 0s cause sync loss"],
            ]
        ),

        code(
            `Data: 1  0  1  1  0  0  1

NRZ-L:   ┌──┐  ┌──┐┌──┐  ┌──┐
         │  │  │  ││  │  │  │
         │  └──┘  └┘  └──┘  └──
         High=1, Low=0

Manchester: Each bit has a mid-bit transition
  0 = High-to-Low transition
  1 = Low-to-High transition

  Bit:   1     0     1     1     0     0     1
       ┌─┐   ┌─┐   ┌─┐   ┌─┐   ┌─┐   ┌─┐   ┌─┐
       │ │   │ │   │ │   │ │   │ │   │ │   │ │
       └─┘   └─┘   └─┘   └─┘   └─┘   └─┘   └─┘
       ↑     ↓     ↑     ↑     ↓     ↓     ↑
       L→H   H→L   L→H   L→H   H→L   H→L   L→H`,
            "text",
            "Line coding examples"
        ),

        note(
            "Manchester encoding is used in classic Ethernet (10 Mbps) because it is self-clocking — the mid-bit transition allows the receiver to synchronise its clock with the sender. However, it requires twice the bandwidth of NRZ schemes.",
            "tip",
            "Ethernet Encoding"
        ),

        heading("Block Coding"),

        definition(
            "Block Coding",
            "A technique that adds redundancy to data by replacing each m-bit data group with an n-bit code group (where n > m). This provides error detection and improves synchronisation."
        ),

        table(
            ["Scheme", "Ratio", "Use"],
            [
                ["4B/5B", "4 data bits → 5 code bits", "100 Mbps Ethernet (Fast Ethernet)"],
                ["8B/10B", "8 data bits → 10 code bits", "Gigabit Ethernet, USB 3.0, Fibre Channel"],
                ["64B/66B", "64 data bits → 66 code bits", "10 Gbps Ethernet"],
            ]
        ),

        heading("Multiplexing"),

        definition(
            "Multiplexing",
            "A technique that combines multiple signals into a single signal for transmission over a shared medium. At the receiving end, demultiplexing separates the combined signal back into individual signals. This allows efficient use of expensive communication links."
        ),

        code(
            `Multiplexing:

  Input 1 ──→ ┐
  Input 2 ──→ ├──→ [MUX] ──── Shared Link ──── [DEMUX] ──→ Output 1
  Input 3 ──→ ┤                                              Output 2
  Input 4 ──→ ┘                                              Output 3
                                                             Output 4`,
            "text",
            "Multiplexing concept"
        ),

        heading("Types of Multiplexing"),

        table(
            ["Type", "Full Form", "How It Works", "Used In"],
            [
                ["FDM", "Frequency Division Multiplexing", "Each signal gets a different frequency band", "Radio, TV, cable broadband"],
                ["TDM", "Time Division Multiplexing", "Each signal gets a time slot in a repeating frame", "Telephone networks (T1/E1), SONET"],
                ["WDM", "Wavelength Division Multiplexing", "Each signal gets a different light wavelength", "Fibre optic networks"],
                ["CDM", "Code Division Multiplexing", "Each signal gets a unique code; all share same frequency and time", "3G cellular (CDMA)"],
            ]
        ),

        heading("FDM versus TDM"),

        table(
            ["Aspect", "FDM", "TDM"],
            [
                ["Division", "By frequency", "By time"],
                ["Signal type", "Analog", "Digital"],
                ["Guard", "Guard bands between frequencies", "Guard times between slots"],
                ["Efficiency", "Less efficient (guard bands waste bandwidth)", "More efficient"],
                ["Example", "FM radio stations", "T1 line (24 voice channels)"],
            ]
        ),

        heading("WDM (Wavelength Division Multiplexing)",

            text(
                "WDM is essentially FDM applied to fibre optic cables. Different data streams are carried on different wavelengths (colours) of light through the same fibre. Dense WDM (DWDM) can carry 80+ channels on a single fibre, each at 10-100 Gbps, achieving total capacities of multiple Tbps."
            ),

            keyPoints([
                "Line coding converts digital data into transmittable signals: NRZ, Manchester and AMI are common schemes.",
                "Manchester encoding is self-clocking with no DC component but requires double bandwidth.",
                "Block coding (4B/5B, 8B/10B) adds redundancy for error detection and synchronisation.",
                "Multiplexing combines multiple signals onto a shared medium: FDM, TDM, WDM and CDM.",
                "WDM applies FDM to fibre optics, using different light wavelengths for different channels.",
            ]),
  ],

    {
        summary:
            "Learn line coding schemes (NRZ, Manchester, AMI), block coding and multiplexing techniques (FDM, TDM, WDM, CDM).",
        minutes: 12,
        tags: ["networks", "encoding", "multiplexing", "manchester", "fdm", "tdm", "important"],

        mcqs: [
            mcq(
                "Manchester encoding has a transition at:",
                ["The beginning of each bit only", "The end of each bit only", "The middle of each bit", "Random positions"],
                2,
                "Manchester encoding has a guaranteed transition at the middle of every bit period."
            ),
            mcq(
                "Manchester encoding is used in:",
                ["Gigabit Ethernet", "Classic 10 Mbps Ethernet", "Wi-Fi", "Bluetooth"],
                1,
                "Classic 10 Mbps Ethernet uses Manchester encoding for its self-clocking property."
            ),
            mcq(
                "FDM divides the channel by:",
                ["Time", "Frequency", "Code", "Wavelength"],
                1,
                "Frequency Division Multiplexing assigns each signal a different frequency band."
            ),
            mcq(
                "WDM is used in:",
                ["Copper cables", "Fibre optic cables", "Radio transmission", "Satellite links"],
                1,
                "Wavelength Division Multiplexing is used in fibre optic networks to carry multiple light wavelengths."
            ),
            mcq(
                "8B/10B block coding is used in:",
                ["10 Mbps Ethernet", "Gigabit Ethernet", "AM radio", "Bluetooth"],
                1,
                "8B/10B coding is used in Gigabit Ethernet, USB 3.0 and Fibre Channel."
            ),
            mcq(
                "TDM is primarily used for:",
                ["Analog signals", "Digital signals", "Light signals", "Radio signals"],
                1,
                "Time Division Multiplexing is used for digital signals, assigning time slots to each channel."
            ),
        ],

        questions: [
            qa(
                "Compare NRZ-L and Manchester encoding schemes.",
                "NRZ-L (Non-Return to Zero Level) represents a 1 as a high voltage and a 0 as a low voltage (or vice versa) and maintains that level for the entire bit duration. It is simple and uses bandwidth efficiently but suffers from a DC component and baseline wandering during long sequences of identical bits, and it has no built-in synchronisation mechanism. Manchester encoding has a guaranteed transition at the middle of every bit period: a high-to-low transition represents 0 and a low-to-high transition represents 1. This makes it self-clocking because the receiver can synchronise its clock using the mid-bit transitions. It also has no DC component. However, Manchester encoding requires twice the bandwidth of NRZ because of the additional transitions. Manchester is used in classic 10 Mbps Ethernet.",
                5
            ),
            qa(
                "Explain the four types of multiplexing.",
                "Frequency Division Multiplexing (FDM) assigns each signal a different frequency band within the channel's total bandwidth, with guard bands between them to prevent interference. It is used for analog signals in radio, TV and cable broadband. Time Division Multiplexing (TDM) assigns each signal a specific time slot in a repeating frame, allowing multiple digital signals to share the same channel by taking turns. It is used in telephone networks like T1 lines. Wavelength Division Multiplexing (WDM) is FDM applied to fibre optics, where each signal is carried on a different wavelength (colour) of light through the same fibre. Dense WDM can carry 80+ channels. Code Division Multiplexing (CDM) assigns each signal a unique spreading code, allowing all signals to share the same frequency and time simultaneously. It is used in 3G cellular networks (CDMA).",
                5
            ),
            qa(
                "What is block coding? Explain 4B/5B and 8B/10B.",
                "Block coding is a technique that adds redundancy to data by replacing each group of m data bits with a larger group of n code bits (where n > m). This provides error detection capability and ensures sufficient bit transitions for clock synchronisation. In 4B/5B coding, every 4 data bits are mapped to a 5-bit code. The 5-bit codes are chosen to avoid long sequences of zeros, ensuring enough transitions for synchronisation. It is used in 100 Mbps Fast Ethernet and adds 25% overhead. In 8B/10B coding, every 8 data bits are mapped to a 10-bit code, adding 20% overhead. It provides DC balance (equal numbers of 0s and 1s over time), error detection and guaranteed transitions. It is used in Gigabit Ethernet, USB 3.0 and Fibre Channel.",
                4
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit1Topics = [
    introToComputerNetworks,
    dataCommunicationFundamentals,
    networkTopologies,
    transmissionMedia,
    dataEncodingAndMultiplexing,
];