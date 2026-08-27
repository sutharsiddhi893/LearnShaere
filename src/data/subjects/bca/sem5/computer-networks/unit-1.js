/* =========================================================
   BCA • SEM 5 • Computer Networks
   UNIT 1 — Network Fundamentals and Reference Models
========================================================= */

import {
  createTopic,
  heading,
  text,
  list,
  table,
  note,
  definition,
  keyPoints,
  mcq,
  qa,
} from "../../../../helpers";

/* =========================================================
   TOPIC 1 — Introduction to Computer Networks
========================================================= */

const introNetworks = createTopic(
    "introduction-to-computer-networks",
    "Introduction to Computer Networks",

    [
        definition(
            "Computer Network",
            "A computer network is a collection of two or more computing devices connected together through a communication medium to share data, resources and services."
        ),

        text(
            "Computer networks are the backbone of modern communication. They enable email, web browsing, video calls, file sharing, cloud computing, online banking and countless other services used every day."
        ),

        heading("Goals of Computer Networks"),

        list([
            "Resource sharing such as printers, files and applications.",
            "High reliability through data replication.",
            "Cost reduction by sharing expensive resources.",
            "Fast and efficient communication.",
            "Centralised management of data and users.",
            "Scalability to support growing users and devices.",
            "Access to remote information and services.",
        ]),

        heading("Applications of Computer Networks"),

        table(
            ["Area", "Applications"],
            [
                ["Business", "Email, ERP, file sharing, video conferencing"],
                ["Education", "E-learning, online exams, digital libraries"],
                ["Banking", "ATM, online banking, UPI, fund transfer"],
                ["Government", "E-governance, tax filing, digital records"],
                ["Entertainment", "OTT platforms, gaming, social media"],
                ["Healthcare", "Telemedicine, patient records, remote diagnosis"],
                ["IoT", "Smart homes, smart cities, wearable devices"],
            ]
        ),

        heading("Components of a Network"),

        table(
            ["Component", "Purpose"],
            [
                ["Sender", "Device that sends data"],
                ["Receiver", "Device that receives data"],
                ["Message", "Data being transmitted"],
                ["Medium", "Physical path such as cable or wireless"],
                ["Protocol", "Rules that govern communication"],
                ["NIC", "Network Interface Card to connect device"],
                ["Hub/Switch/Router", "Devices that forward data in the network"],
            ]
        ),

        heading("Types of Data Transmission"),

        table(
            ["Mode", "Description", "Example"],
            [
                ["Simplex", "One-way communication only", "Keyboard to CPU"],
                ["Half Duplex", "Both directions but one at a time", "Walkie-talkie"],
                ["Full Duplex", "Both directions simultaneously", "Telephone call"],
            ]
        ),

        note(
            "The internet is the largest computer network in the world, connecting billions of devices through standardised protocols such as TCP/IP.",
            "info",
            "Did You Know?"
        ),

        keyPoints([
            "A network shares data and resources between devices.",
            "Networks improve reliability, reduce cost and enable communication.",
            "Sender, receiver, medium, message and protocol are core components.",
            "Data can be transmitted in simplex, half duplex or full duplex mode.",
            "Internet is the largest network built on TCP/IP.",
        ]),
    ],

    {
        summary:
            "Understand computer networks, their goals, applications, components and data transmission modes.",
        minutes: 10,
        tags: ["networks", "introduction", "basics", "important"],

        mcqs: [
            mcq(
                "Which is NOT a goal of computer networks?",
                ["Resource sharing", "High reliability", "Data isolation", "Cost reduction"],
                2,
                "Networks aim to share data, not isolate it."
            ),
            mcq(
                "In which mode does communication happen in both directions simultaneously?",
                ["Simplex", "Half Duplex", "Full Duplex", "Multiplex"],
                2,
                "Full Duplex allows simultaneous two-way communication."
            ),
            mcq(
                "Which component defines communication rules?",
                ["Medium", "Protocol", "NIC", "Hub"],
                1,
                "Protocols define how devices communicate."
            ),
            mcq(
                "The largest network in the world is:",
                ["LAN", "MAN", "WAN", "Internet"],
                3,
                "The internet is the largest global network."
            ),
        ],

        questions: [
            qa(
                "Define a computer network and list its goals.",
                "A computer network is a collection of two or more computing devices connected through a communication medium to share data, resources and services. Its goals include resource sharing such as printers and files, high reliability through replication, cost reduction, fast communication, centralised management, scalability and access to remote information. Networks form the foundation of modern digital communication including internet, banking, education and entertainment.",
                4
            ),
            qa(
                "Explain the different modes of data transmission.",
                "Data transmission can happen in three modes. In simplex mode, data flows in only one direction such as from keyboard to CPU. In half duplex mode, data flows in both directions but only one at a time such as in walkie-talkies. In full duplex mode, data flows in both directions simultaneously such as in telephone calls. The choice depends on the requirement of the application and available bandwidth.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — Types of Networks and Topologies
========================================================= */

const networkTypesTopologies = createTopic(
    "types-of-networks-and-topologies",
    "Types of Networks and Topologies",

    [
        definition(
            "Network Type",
            "Networks are classified based on their geographical size, ownership and purpose into categories such as LAN, MAN, WAN and PAN."
        ),

        heading("Types of Networks"),

        table(
            ["Type", "Full Form", "Coverage", "Example"],
            [
                ["PAN", "Personal Area Network", "Within 10 meters", "Bluetooth, hotspot"],
                ["LAN", "Local Area Network", "Building or campus", "Office, college lab"],
                ["MAN", "Metropolitan Area Network", "City wide", "Cable TV network"],
                ["WAN", "Wide Area Network", "Country or worldwide", "Internet"],
                ["CAN", "Campus Area Network", "Multiple buildings", "University campus"],
                ["HAN", "Home Area Network", "Home only", "Home Wi-Fi"],
            ]
        ),

        heading("LAN vs WAN"),

        table(
            ["Basis", "LAN", "WAN"],
            [
                ["Coverage", "Small area", "Large area"],
                ["Speed", "High (100 Mbps - 10 Gbps)", "Lower (varies)"],
                ["Cost", "Low", "High"],
                ["Ownership", "Private", "Public or shared"],
                ["Media", "Ethernet, Wi-Fi", "Leased lines, satellite"],
                ["Example", "Office network", "Internet"],
            ]
        ),

        heading("Network Topology"),

        definition(
            "Network Topology",
            "Network topology is the physical or logical arrangement of nodes and connections in a network."
        ),

        heading("Types of Topologies"),

        table(
            ["Topology", "Description", "Advantage", "Disadvantage"],
            [
                ["Bus", "All devices on one cable", "Simple, cheap", "Cable failure stops all"],
                ["Star", "All devices connect to hub/switch", "Easy to manage", "Hub failure stops all"],
                ["Ring", "Devices connected in a circle", "Equal access", "One break affects all"],
                ["Mesh", "Every device connected to others", "Highly reliable", "Expensive, complex"],
                ["Tree", "Hierarchical structure", "Scalable", "Root failure critical"],
                ["Hybrid", "Combination of topologies", "Flexible", "Complex design"],
            ]
        ),

        heading("Bus Topology"),

        text(
            "In bus topology, all devices share a single common cable called the backbone. Data sent by one device travels along the bus and is received by the intended device. It is simple and cheap but a single cable failure brings down the entire network."
        ),

        heading("Star Topology"),

        text(
            "In star topology, all devices are connected to a central hub or switch. Communication passes through the central device. It is easy to install and manage, but failure of the central device disconnects the entire network. This is the most commonly used topology today."
        ),

        heading("Ring Topology"),

        text(
            "In ring topology, devices are connected in a closed loop. Data travels in one direction from device to device until it reaches the destination. It provides equal access but a single link failure can disrupt the whole network."
        ),

        heading("Mesh Topology"),

        text(
            "In mesh topology, every device is connected to every other device. It offers the highest reliability and fault tolerance because multiple paths exist. However, it is expensive and complex due to the large number of cables and ports required."
        ),

        note(
            "Star topology is the most widely used topology today because of its simplicity, easy troubleshooting and support for modern switches.",
            "tip",
            "Most Common"
        ),

        keyPoints([
            "PAN, LAN, MAN and WAN differ by coverage area.",
            "LAN is fast and private; WAN covers large distances.",
            "Topology defines the arrangement of network devices.",
            "Star topology is the most commonly used today.",
            "Mesh topology is the most reliable but most expensive.",
        ]),
    ],

    {
        summary:
            "Learn different types of networks (PAN, LAN, MAN, WAN) and network topologies with advantages and disadvantages.",
        minutes: 11,
        tags: ["lan", "wan", "topology", "networks", "important"],

        mcqs: [
            mcq(
                "Which network covers the largest area?",
                ["PAN", "LAN", "MAN", "WAN"],
                3,
                "WAN covers countries and continents."
            ),
            mcq(
                "In which topology are all devices connected to a central hub?",
                ["Bus", "Star", "Ring", "Mesh"],
                1,
                "Star topology uses a central hub or switch."
            ),
            mcq(
                "Which topology provides the highest reliability?",
                ["Bus", "Ring", "Star", "Mesh"],
                3,
                "Mesh topology has multiple redundant paths."
            ),
            mcq(
                "Bluetooth is an example of:",
                ["LAN", "MAN", "PAN", "WAN"],
                2,
                "Bluetooth forms a Personal Area Network."
            ),
        ],

        questions: [
            qa(
                "Explain different types of networks based on geographical area.",
                "Networks are classified by geographical coverage. PAN (Personal Area Network) covers a few meters using Bluetooth or hotspot. LAN (Local Area Network) covers a building or campus with high speed and low cost. MAN (Metropolitan Area Network) covers a city, such as cable TV networks. WAN (Wide Area Network) covers countries or continents; the internet is the largest WAN. Each type differs in speed, cost, ownership and media used.",
                4
            ),
            qa(
                "Compare star and mesh topology with their advantages and disadvantages.",
                "In star topology, all devices connect to a central hub or switch. It is easy to install, manage and troubleshoot, but failure of the central device disconnects the entire network. In mesh topology, every device is connected to every other device, offering the highest reliability and fault tolerance through redundant paths. However, mesh is expensive and complex due to the large number of cables and ports required. Star is used in offices, while mesh is used in critical networks such as military or backbone networks.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — OSI Reference Model
========================================================= */

const osiModel = createTopic(
    "osi-reference-model",
    "OSI Reference Model",

    [
        definition(
            "OSI Model",
            "The Open Systems Interconnection (OSI) model is a conceptual framework developed by ISO that standardises the functions of a network into seven layers."
        ),

        text(
            "The OSI model helps in understanding, designing and troubleshooting networks by dividing communication into seven independent layers, each with specific responsibilities."
        ),

        heading("Seven Layers of OSI Model"),

        table(
            ["Layer", "Name", "Function", "Example"],
            [
                ["7", "Application", "User interface, services", "HTTP, FTP, SMTP"],
                ["6", "Presentation", "Encryption, compression, translation", "JPEG, SSL, ASCII"],
                ["5", "Session", "Session establishment and control", "NetBIOS, RPC"],
                ["4", "Transport", "End-to-end reliable delivery", "TCP, UDP"],
                ["3", "Network", "Routing and logical addressing", "IP, ICMP"],
                ["2", "Data Link", "Framing, physical addressing (MAC)", "Ethernet, PPP"],
                ["1", "Physical", "Bits transmission on medium", "Cables, hubs, signals"],
            ]
        ),

        note(
            "Mnemonic to remember (top to bottom): All People Seem To Need Data Processing (Application, Presentation, Session, Transport, Network, Data Link, Physical).",
            "tip",
            "Memory Trick"
        ),

        heading("Physical Layer (Layer 1)"),

        list([
            "Transmits raw bits over a physical medium.",
            "Deals with cables, connectors, voltages and signalling.",
            "Defines transmission rate and mode (simplex, half duplex, full duplex).",
            "Devices: Hub, repeater, cables.",
        ]),

        heading("Data Link Layer (Layer 2)"),

        list([
            "Provides node-to-node data transfer.",
            "Handles framing, physical addressing (MAC) and error detection.",
            "Divided into LLC and MAC sublayers.",
            "Devices: Switch, bridge, NIC.",
        ]),

        heading("Network Layer (Layer 3)"),

        list([
            "Handles logical addressing using IP.",
            "Performs routing between different networks.",
            "Manages packet forwarding and fragmentation.",
            "Devices: Router.",
        ]),

        heading("Transport Layer (Layer 4)"),

        list([
            "Provides end-to-end delivery.",
            "TCP offers reliable, connection-oriented service.",
            "UDP offers fast, connectionless service.",
            "Handles segmentation, flow control and error recovery.",
        ]),

        heading("Session Layer (Layer 5)"),

        list([
            "Establishes, manages and terminates sessions between applications.",
            "Provides synchronisation and dialog control.",
            "Example protocols: NetBIOS, RPC, PPTP.",
        ]),

        heading("Presentation Layer (Layer 6)"),

        list([
            "Translates data formats between application and network.",
            "Performs encryption and decryption.",
            "Compresses and decompresses data.",
            "Example: JPEG, MPEG, SSL/TLS, ASCII.",
        ]),

        heading("Application Layer (Layer 7)"),

        list([
            "Provides network services directly to end users.",
            "Interfaces with software applications.",
            "Example protocols: HTTP, FTP, SMTP, DNS, Telnet.",
        ]),

        heading("Data Encapsulation in OSI"),

        table(
            ["Layer", "Data Unit (PDU)"],
            [
                ["Application, Presentation, Session", "Data"],
                ["Transport", "Segment"],
                ["Network", "Packet"],
                ["Data Link", "Frame"],
                ["Physical", "Bits"],
            ]
        ),

        keyPoints([
            "OSI is a 7-layer conceptual reference model by ISO.",
            "Each layer performs specific network functions.",
            "Physical layer deals with bits and cables.",
            "Transport layer ensures end-to-end delivery.",
            "Application layer interacts directly with users.",
        ]),
    ],

    {
        summary:
            "Learn the seven layers of the OSI reference model, their functions, examples and data encapsulation.",
        minutes: 13,
        tags: ["osi", "layers", "reference-model", "important"],

        mcqs: [
            mcq(
                "How many layers are in the OSI model?",
                ["5", "6", "7", "8"],
                2,
                "OSI has 7 layers."
            ),
            mcq(
                "Which layer handles routing?",
                ["Data Link", "Network", "Transport", "Session"],
                1,
                "The Network layer performs routing using IP addresses."
            ),
            mcq(
                "TCP and UDP work at which layer?",
                ["Network", "Transport", "Session", "Application"],
                1,
                "TCP and UDP are Transport layer protocols."
            ),
            mcq(
                "Which layer is responsible for encryption?",
                ["Session", "Presentation", "Application", "Transport"],
                1,
                "The Presentation layer handles encryption and translation."
            ),
        ],

        questions: [
            qa(
                "Explain the seven layers of the OSI model.",
                "The OSI model has seven layers. Layer 1, Physical, transmits raw bits over cables. Layer 2, Data Link, handles framing and MAC addressing. Layer 3, Network, performs routing using IP. Layer 4, Transport, ensures end-to-end delivery using TCP or UDP. Layer 5, Session, establishes and manages sessions. Layer 6, Presentation, handles encryption, compression and translation. Layer 7, Application, provides services to users through protocols like HTTP, FTP and SMTP. Each layer serves the layer above it and uses services of the layer below.",
                7
            ),
            qa(
                "What is data encapsulation in OSI model?",
                "Data encapsulation is the process where each layer adds its own header (and sometimes trailer) to the data as it moves down the OSI stack. At the Application, Presentation and Session layers, the unit is called Data. At Transport, it becomes a Segment. At Network, it becomes a Packet. At Data Link, it becomes a Frame. At Physical, it becomes Bits. On the receiving side, each layer removes its header in the reverse process called decapsulation. This layered approach ensures modularity and interoperability.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — TCP/IP Reference Model
========================================================= */

const tcpIpModel = createTopic(
    "tcp-ip-reference-model",
    "TCP/IP Reference Model",

    [
        definition(
            "TCP/IP Model",
            "The TCP/IP model is a four-layer networking model that forms the foundation of the internet, developed by the US Department of Defense (DoD)."
        ),

        text(
            "Unlike OSI which is theoretical, TCP/IP is a practical model implemented on the internet. It combines several OSI layers into fewer, more practical layers."
        ),

        heading("Four Layers of TCP/IP"),

        table(
            ["Layer", "Function", "Protocols"],
            [
                ["Application", "User services and applications", "HTTP, FTP, SMTP, DNS"],
                ["Transport", "End-to-end delivery", "TCP, UDP"],
                ["Internet", "Routing and addressing", "IP, ICMP, ARP"],
                ["Network Access", "Physical transmission", "Ethernet, Wi-Fi"],
            ]
        ),

        heading("Layer Descriptions"),

        heading("Network Access Layer"),

        list([
            "Combines OSI Physical and Data Link layers.",
            "Handles hardware addressing and physical transmission.",
            "Examples: Ethernet, Wi-Fi, PPP.",
        ]),

        heading("Internet Layer"),

        list([
            "Equivalent to OSI Network layer.",
            "Handles logical addressing and routing.",
            "Main protocol: IP (IPv4 and IPv6).",
            "Other protocols: ICMP, ARP, RARP.",
        ]),

        heading("Transport Layer"),

        list([
            "Provides end-to-end communication.",
            "TCP: connection-oriented, reliable.",
            "UDP: connectionless, faster but unreliable.",
            "Handles flow control and error recovery.",
        ]),

        heading("Application Layer"),

        list([
            "Combines OSI Application, Presentation and Session layers.",
            "Provides user-level services.",
            "Protocols: HTTP, HTTPS, FTP, SMTP, DNS, Telnet, SSH.",
        ]),

        heading("OSI vs TCP/IP Model"),

        table(
            ["Basis", "OSI Model", "TCP/IP Model"],
            [
                ["Layers", "7 layers", "4 layers"],
                ["Developed by", "ISO", "US DoD"],
                ["Nature", "Theoretical/reference", "Practical/implemented"],
                ["Approach", "Vertical", "Horizontal"],
                ["Protocol dependency", "Protocol independent", "Protocol dependent (TCP/IP)"],
                ["Usage", "Learning and design", "Actual internet"],
                ["Reliability", "Less reliable", "More reliable"],
            ]
        ),

        heading("TCP vs UDP"),

        table(
            ["Feature", "TCP", "UDP"],
            [
                ["Connection", "Connection-oriented", "Connectionless"],
                ["Reliability", "Reliable", "Unreliable"],
                ["Speed", "Slower", "Faster"],
                ["Ordering", "Ordered delivery", "No ordering"],
                ["Error checking", "Extensive", "Basic checksum"],
                ["Use", "Web, email, file transfer", "Video streaming, DNS, gaming"],
                ["Header size", "20-60 bytes", "8 bytes"],
            ]
        ),

        note(
            "TCP/IP is the actual model used on the internet, while OSI is a reference model used mainly for teaching and understanding.",
            "info",
            "Real World"
        ),

        keyPoints([
            "TCP/IP has 4 layers: Application, Transport, Internet, Network Access.",
            "TCP is reliable and connection-oriented.",
            "UDP is fast and connectionless.",
            "IP handles logical addressing and routing.",
            "TCP/IP is the practical model used on the internet.",
        ]),
    ],

    {
        summary:
            "Understand the TCP/IP reference model, its four layers, protocols and comparison with OSI model.",
        minutes: 12,
        tags: ["tcp-ip", "reference-model", "protocols", "important"],

        mcqs: [
            mcq(
                "How many layers are in the TCP/IP model?",
                ["3", "4", "5", "7"],
                1,
                "TCP/IP has 4 layers."
            ),
            mcq(
                "Which protocol is connectionless?",
                ["TCP", "UDP", "FTP", "HTTP"],
                1,
                "UDP is a connectionless protocol."
            ),
            mcq(
                "Which layer of TCP/IP handles routing?",
                ["Application", "Transport", "Internet", "Network Access"],
                2,
                "The Internet layer handles routing using IP."
            ),
            mcq(
                "Which is more reliable?",
                ["UDP", "TCP", "ICMP", "ARP"],
                1,
                "TCP provides reliable communication."
            ),
        ],

        questions: [
            qa(
                "Explain the four layers of the TCP/IP model.",
                "The TCP/IP model has four layers. The Network Access layer handles physical transmission and hardware addressing using Ethernet and Wi-Fi. The Internet layer performs logical addressing and routing using IP, ICMP and ARP. The Transport layer ensures end-to-end delivery using TCP (reliable) and UDP (fast). The Application layer provides user services through protocols like HTTP, FTP, SMTP and DNS. This model is the practical foundation of the internet.",
                4
            ),
            qa(
                "Compare TCP and UDP protocols.",
                "TCP (Transmission Control Protocol) is connection-oriented, reliable and ensures ordered delivery of data through acknowledgements and retransmissions. It has extensive error checking and larger header (20-60 bytes). It is used in web browsing, email and file transfer. UDP (User Datagram Protocol) is connectionless, unreliable and faster with minimal header (8 bytes) and basic error checking. It is used where speed matters more than reliability, such as video streaming, online gaming, DNS queries and VoIP calls.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 5 — Network Devices and Transmission Media
========================================================= */

const devicesMedia = createTopic(
    "network-devices-and-transmission-media",
    "Network Devices and Transmission Media",

    [
        definition(
            "Network Device",
            "A network device is a hardware component that connects computers and other devices to form a network and enables data communication."
        ),

        heading("Common Network Devices"),

        table(
            ["Device", "Layer", "Function"],
            [
                ["Hub", "Physical", "Broadcasts data to all ports"],
                ["Switch", "Data Link", "Forwards data to specific MAC address"],
                ["Router", "Network", "Routes data between different networks"],
                ["Bridge", "Data Link", "Connects two LAN segments"],
                ["Gateway", "All layers", "Connects different network architectures"],
                ["Repeater", "Physical", "Amplifies weak signals"],
                ["Modem", "Physical", "Converts digital to analog and vice versa"],
                ["NIC", "Physical/Data Link", "Connects device to network"],
                ["Access Point", "Data Link", "Provides wireless connectivity"],
            ]
        ),

        heading("Hub vs Switch vs Router"),

        table(
            ["Basis", "Hub", "Switch", "Router"],
            [
                ["Layer", "Physical", "Data Link", "Network"],
                ["Data unit", "Bits", "Frames", "Packets"],
                ["Addressing", "None", "MAC address", "IP address"],
                ["Transmission", "Broadcast", "Unicast (learned)", "Routed"],
                ["Collision", "Yes", "No", "No"],
                ["Cost", "Low", "Medium", "High"],
                ["Use", "Old networks", "LAN", "Internet routing"],
            ]
        ),

        heading("Transmission Media"),

        definition(
            "Transmission Media",
            "Transmission media is the physical path through which data travels from sender to receiver in a network."
        ),

        heading("Types of Transmission Media"),

        table(
            ["Type", "Category", "Example"],
            [
                ["Guided (Wired)", "Physical cables", "Twisted pair, Coaxial, Fiber optic"],
                ["Unguided (Wireless)", "No physical medium", "Radio, Microwave, Infrared, Satellite"],
            ]
        ),

        heading("Guided Media"),

        heading("Twisted Pair Cable"),

        list([
            "Two insulated copper wires twisted together.",
            "Types: UTP (Unshielded) and STP (Shielded).",
            "Used in LAN and telephone lines.",
            "Cheap and easy to install.",
            "Speed: up to 10 Gbps in Cat 6a/7.",
        ]),

        heading("Coaxial Cable"),

        list([
            "Central copper conductor surrounded by insulation and shielding.",
            "Better shielding than twisted pair.",
            "Used in cable TV and older LANs.",
            "Speed: up to 10 Mbps typically.",
        ]),

        heading("Fiber Optic Cable"),

        list([
            "Uses light to transmit data through glass or plastic fibers.",
            "Very high bandwidth and long distance.",
            "Immune to electromagnetic interference.",
            "Types: Single-mode and Multi-mode.",
            "Speed: up to 100 Gbps or more.",
            "Used in backbone networks and internet infrastructure.",
        ]),

        heading("Unguided Media"),

        table(
            ["Type", "Frequency", "Use"],
            [
                ["Radio waves", "3 KHz - 1 GHz", "FM radio, TV, mobile"],
                ["Microwaves", "1 GHz - 300 GHz", "Wi-Fi, cellular, satellite"],
                ["Infrared", "300 GHz - 400 THz", "Remote controls, short range"],
                ["Satellite", "Microwave range", "Long distance communication, GPS"],
            ]
        ),

        heading("Comparison of Cables"),

        table(
            ["Feature", "Twisted Pair", "Coaxial", "Fiber Optic"],
            [
                ["Cost", "Low", "Medium", "High"],
                ["Speed", "Medium", "Medium", "Very High"],
                ["Distance", "Short (100m)", "Medium", "Very Long"],
                ["Interference", "High", "Medium", "Very Low"],
                ["Installation", "Easy", "Medium", "Difficult"],
            ]
        ),

        note(
            "Fiber optic cables are the backbone of the modern internet due to their extremely high speed, long distance capability and immunity to electromagnetic interference.",
            "tip",
            "Modern Backbone"
        ),

        keyPoints([
            "Hub broadcasts, switch forwards intelligently, router connects networks.",
            "Twisted pair is cheap and common in LANs.",
            "Fiber optic offers highest speed and longest distance.",
            "Wireless media use radio, microwave, infrared or satellite.",
            "Choice of media depends on speed, cost and distance.",
        ]),
    ],

    {
        summary:
            "Learn network devices such as hub, switch, router and different types of transmission media including guided and unguided.",
        minutes: 12,
        tags: ["devices", "media", "cables", "wireless", "important"],

        mcqs: [
            mcq(
                "Which device works at the Network layer?",
                ["Hub", "Switch", "Router", "Repeater"],
                2,
                "Router operates at the Network layer."
            ),
            mcq(
                "Which cable offers the highest speed?",
                ["Twisted pair", "Coaxial", "Fiber optic", "Telephone wire"],
                2,
                "Fiber optic offers highest bandwidth and speed."
            ),
            mcq(
                "Which device broadcasts data to all ports?",
                ["Switch", "Router", "Hub", "Bridge"],
                2,
                "Hub broadcasts data to all connected ports."
            ),
            mcq(
                "Bluetooth uses which type of media?",
                ["Guided", "Unguided", "Coaxial", "Fiber"],
                1,
                "Bluetooth is wireless and uses unguided media."
            ),
        ],

        questions: [
            qa(
                "Differentiate between hub, switch and router.",
                "A hub operates at the Physical layer and broadcasts data to all connected ports, causing collisions and inefficiency. A switch operates at the Data Link layer and forwards data only to the specific device using MAC addresses, which reduces collisions and improves performance. A router operates at the Network layer and forwards data between different networks using IP addresses. Hubs are outdated, switches are used in LANs, and routers connect LANs to the internet.",
                4
            ),
            qa(
                "Explain guided and unguided transmission media with examples.",
                "Guided media use physical cables to transmit data. Twisted pair cable is cheap and used in LANs and telephones. Coaxial cable has better shielding and is used in cable TV. Fiber optic cable uses light for high-speed, long-distance transmission and is immune to interference. Unguided media transmit data without physical cables using electromagnetic waves. Examples include radio waves for FM and mobile, microwaves for Wi-Fi and cellular, infrared for remote controls, and satellites for global communication and GPS.",
                4
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit1Topics = [
    introNetworks,
    networkTypesTopologies,
    osiModel,
    tcpIpModel,
    devicesMedia,
];