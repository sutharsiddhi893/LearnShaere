/* =========================================================
   MSc-IT • SEM 1 • Computer Networks
   UNIT 2 — Layered Protocols
========================================================= */

import {
  createTopic,
  heading,
  text,
  list,
  code,
  table,
  note,
  definition,
  steps,
  keyPoints,
  mcq,
  qa,
} from "../../../../helpers";

/* =========================================================
   TOPIC 1 — Introduction to Layered Architecture
========================================================= */

const introToLayeredArchitecture = createTopic(
    "introduction-to-layered-architecture",
    "Introduction to Layered Architecture",

    [
        definition(
            "Layered Architecture",
            "A design approach in which the complex task of network communication is divided into a hierarchy of layers, where each layer performs a specific set of functions and provides services to the layer above it while using the services of the layer below it."
        ),

        text(
            "Network communication is an enormously complex task involving hardware, software, encoding, addressing, routing, error handling and application logic. To manage this complexity, network designers use a layered approach where each layer has a well-defined responsibility. This modular design makes networks easier to understand, implement, troubleshoot and evolve."
        ),

        heading("Why Layering?"),

        list([
            "Modularity — each layer can be designed, implemented and tested independently.",
            "Abstraction — layers hide implementation details from other layers.",
            "Interoperability — different vendors can implement different layers as long as they follow the standard interfaces.",
            "Ease of Maintenance — changes in one layer do not affect other layers.",
            "Simplified Troubleshooting — problems can be isolated to a specific layer.",
            "Standardisation — promotes industry-wide standards and compatibility.",
        ]),

        heading("Key Concepts in Layering"),

        table(
            ["Concept", "Definition"],
            [
                ["Layer", "A level in the hierarchy that performs a specific set of functions"],
                ["Protocol", "A set of rules governing communication between peer entities at the same layer on different machines"],
                ["Interface", "The boundary between adjacent layers defining what services the lower layer provides to the upper layer"],
                ["Service", "A set of operations that a layer provides to the layer above it"],
                ["Service Access Point (SAP)", "The point where a layer provides services to the layer above (e.g., port number, socket)"],
                ["PDU (Protocol Data Unit)", "The unit of data exchanged between peer entities at a given layer"],
                ["Encapsulation", "The process of adding headers (and sometimes trailers) at each layer as data moves down the stack"],
                ["Decapsulation", "The process of removing headers at each layer as data moves up the stack"],
            ]
        ),

        heading("Encapsulation and Decapsulation"),

        code(
            `Encapsulation (Sender — data moves DOWN):

  Application:  [Data]
  Transport:    [TCP Header | Data]                  → Segment
  Network:      [IP Header | TCP Header | Data]      → Packet
  Data Link:    [Frame Header | IP Header | TCP Header | Data | Frame Trailer] → Frame
  Physical:     Bits (0s and 1s on the wire)

Decapsulation (Receiver — data moves UP):

  Physical:     Receives bits
  Data Link:    Removes frame header/trailer → extracts packet
  Network:      Removes IP header → extracts segment
  Transport:    Removes TCP header → extracts data
  Application:  Receives original data`,
            "text",
            "Encapsulation and decapsulation"
        ),

        heading("PDU Names at Each Layer"),

        table(
            ["Layer", "PDU Name"],
            [
                ["Application", "Message / Data"],
                ["Transport", "Segment (TCP) / Datagram (UDP)"],
                ["Network", "Packet / Datagram"],
                ["Data Link", "Frame"],
                ["Physical", "Bits"],
            ]
        ),

        heading("Peer-to-Peer Communication"),

        text(
            "Although data physically travels down through the layers on the sender and up through the layers on the receiver, conceptually each layer communicates with its peer layer on the other machine using the protocol defined for that layer. This is called peer-to-peer or virtual communication."
        ),

        code(
            `Peer-to-Peer Communication:

  Sender                          Receiver
  ┌──────────┐                   ┌──────────┐
  │ App      │ ←─── Protocol ──→ │ App      │
  ├──────────┤                   ├──────────┤
  │ Transport│ ←─── Protocol ──→ │ Transport│
  ├──────────┤                   ├──────────┤
  │ Network  │ ←─── Protocol ──→ │ Network  │
  ├──────────┤                   ├──────────┤
  │ Data Link│ ←─── Protocol ──→ │ Data Link│
  ├──────────┤                   ├──────────┤
  │ Physical │ ═══ Physical ════ │ Physical │
  └──────────┘    Medium         └──────────┘

  Arrows show virtual (logical) communication.
  Only the physical layer communicates physically.`,
            "text",
            "Peer-to-peer communication"
        ),

        note(
            "The two most important layered models are the OSI Reference Model (7 layers, theoretical) and the TCP/IP Model (4 or 5 layers, practical). Both use the same fundamental principles of layering, encapsulation and peer-to-peer communication.",
            "exam",
            "Frequently Asked"
        ),

        keyPoints([
            "Layered architecture divides network communication into manageable, independent layers.",
            "Each layer provides services to the layer above and uses services from the layer below.",
            "Encapsulation adds headers at each layer going down; decapsulation removes them going up.",
            "PDU names: Message (Application), Segment (Transport), Packet (Network), Frame (Data Link), Bits (Physical).",
            "Peer-to-peer communication is virtual — only the physical layer communicates physically.",
        ]),
    ],

    {
        summary:
            "Understand why networks use layered architecture, key concepts like encapsulation, PDUs, protocols and peer-to-peer communication.",
        minutes: 11,
        tags: ["networks", "layered-architecture", "encapsulation", "pdu", "important"],

        mcqs: [
            mcq(
                "The process of adding headers at each layer as data moves down is called:",
                ["Decapsulation", "Multiplexing", "Encapsulation", "Segmentation"],
                2,
                "Encapsulation adds layer-specific headers (and trailers) as data descends the protocol stack."
            ),
            mcq(
                "The PDU at the Transport layer is called a:",
                ["Frame", "Packet", "Segment", "Bit"],
                2,
                "The Transport layer PDU is called a segment (TCP) or datagram (UDP)."
            ),
            mcq(
                "A protocol defines rules for communication between:",
                ["Adjacent layers on the same machine", "Peer entities at the same layer on different machines", "Hardware components", "Applications only"],
                1,
                "A protocol governs communication between peer entities at the same layer on different machines."
            ),
            mcq(
                "The PDU at the Data Link layer is called a:",
                ["Segment", "Packet", "Frame", "Message"],
                2,
                "The Data Link layer PDU is called a frame."
            ),
            mcq(
                "Peer-to-peer communication in a layered model is:",
                ["Physical", "Virtual (logical)", "Only at the Physical layer", "Not used"],
                1,
                "Peer-to-peer communication is virtual — data physically travels down and up the stack."
            ),
        ],

        questions: [
            qa(
                "Explain the advantages of using a layered architecture in computer networks.",
                "Layered architecture offers several advantages. Modularity allows each layer to be designed, implemented and tested independently without affecting other layers. Abstraction hides implementation details so that upper layers do not need to know how lower layers work. Interoperability is achieved because different vendors can implement different layers as long as they follow standard interfaces and protocols. Maintenance is easier because changes or upgrades in one layer do not require changes in other layers. Troubleshooting is simplified because problems can be isolated to a specific layer. Standardisation promotes industry-wide compatibility and allows diverse systems to communicate.",
                5
            ),
            qa(
                "Explain encapsulation and decapsulation with PDU names.",
                "Encapsulation occurs at the sender as data moves down the protocol stack. The application layer produces a message. The transport layer adds a TCP or UDP header to create a segment. The network layer adds an IP header to create a packet. The data link layer adds a frame header and trailer to create a frame. The physical layer converts the frame into bits for transmission. Decapsulation occurs at the receiver as data moves up the stack. The physical layer receives bits. The data link layer removes the frame header and trailer to extract the packet. The network layer removes the IP header to extract the segment. The transport layer removes the TCP header to extract the original message, which is delivered to the application layer.",
                5
            ),
            qa(
                "What is peer-to-peer communication in a layered model?",
                "Peer-to-peer communication refers to the logical (virtual) communication between corresponding layers on the sender and receiver machines. Although data physically travels down through all layers on the sender, across the physical medium, and up through all layers on the receiver, conceptually each layer communicates directly with its peer layer on the other machine using the protocol defined for that layer. For example, the transport layer on the sender logically communicates with the transport layer on the receiver using TCP, even though the data physically passes through the network, data link and physical layers in between. Only the physical layer has actual physical communication across the medium.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — The OSI Reference Model
========================================================= */

const osiReferenceModel = createTopic(
    "the-osi-reference-model",
    "The OSI Reference Model",

    [
        definition(
            "OSI Model (Open Systems Interconnection)",
            "A conceptual 7-layer framework developed by the International Organization for Standardization (ISO) in 1984 that standardises the functions of a telecommunication or computing system. It serves as a universal reference for understanding and designing network architectures."
        ),

        text(
            "The OSI model is a theoretical framework — it was never fully implemented as a protocol suite. However, it remains the most widely taught and referenced model for understanding network communication. Every networking professional uses OSI layer numbers to describe where protocols and devices operate."
        ),

        heading("The Seven Layers"),

        code(
            `OSI Reference Model (7 Layers):

  ┌─────────────────────────────┐
  │  7. Application Layer       │  ← User interface, network services
  ├─────────────────────────────┤
  │  6. Presentation Layer      │  ← Translation, encryption, compression
  ├─────────────────────────────┤
  │  5. Session Layer           │  ← Session management, synchronisation
  ├─────────────────────────────┤
  │  4. Transport Layer         │  ← End-to-end delivery, reliability
  ├─────────────────────────────┤
  │  3. Network Layer           │  ← Routing, logical addressing (IP)
  ├─────────────────────────────┤
  │  2. Data Link Layer         │  ← Framing, MAC addressing, error detection
  ├─────────────────────────────┤
  │  1. Physical Layer          │  ← Bits, cables, signals, connectors
  └─────────────────────────────┘`,
            "text",
            "OSI 7-layer model"
        ),

        heading("Layer-by-Layer Description"),

        heading("Layer 1: Physical Layer"),

        table(
            ["Aspect", "Description"],
            [
                ["Function", "Transmits raw bits over a physical medium"],
                ["Concerns", "Voltage levels, timing, data rates, connectors, cable types, pin layouts"],
                ["PDU", "Bits"],
                ["Devices", "Hub, repeater, cables, connectors"],
                ["Protocols", "Ethernet (physical), USB, Bluetooth (physical), RS-232"],
            ]
        ),

        heading("Layer 2: Data Link Layer"),

        table(
            ["Aspect", "Description"],
            [
                ["Function", "Provides reliable node-to-node data transfer; framing, physical addressing, error detection, flow control, access control"],
                ["Sublayers", "LLC (Logical Link Control) and MAC (Media Access Control)"],
                ["PDU", "Frame"],
                ["Address", "MAC address (48-bit, e.g., AA:BB:CC:DD:EE:FF)"],
                ["Devices", "Switch, bridge, NIC"],
                ["Protocols", "Ethernet (IEEE 802.3), Wi-Fi (IEEE 802.11), PPP, HDLC"],
            ]
        ),

        heading("Layer 3: Network Layer"),

        table(
            ["Aspect", "Description"],
            [
                ["Function", "Provides logical addressing, routing and path determination across multiple networks"],
                ["PDU", "Packet"],
                ["Address", "IP address (IPv4: 32-bit, IPv6: 128-bit)"],
                ["Devices", "Router, Layer 3 switch"],
                ["Protocols", "IP, ICMP, ARP, OSPF, BGP, RIP"],
            ]
        ),

        heading("Layer 4: Transport Layer"),

        table(
            ["Aspect", "Description"],
            [
                ["Function", "Provides end-to-end communication, segmentation, flow control, error recovery and reliability"],
                ["PDU", "Segment (TCP) or Datagram (UDP)"],
                ["Address", "Port number (16-bit, e.g., 80 for HTTP, 443 for HTTPS)"],
                ["Protocols", "TCP (reliable, connection-oriented), UDP (unreliable, connectionless)"],
                ["Key features", "TCP: sequencing, acknowledgement, retransmission; UDP: fast, minimal overhead"],
            ]
        ),

        heading("Layer 5: Session Layer"),

        table(
            ["Aspect", "Description"],
            [
                ["Function", "Establishes, manages and terminates sessions (connections) between applications"],
                ["Features", "Session establishment, maintenance, termination, synchronisation, dialog control"],
                ["Protocols", "NetBIOS, RPC, PPTP, SIP"],
            ]
        ),

        heading("Layer 6: Presentation Layer"),

        table(
            ["Aspect", "Description"],
            [
                ["Function", "Translates data between the application and network formats; handles encryption, compression and data representation"],
                ["Features", "Data translation (ASCII ↔ EBCDIC), encryption/decryption, compression/decompression"],
                ["Protocols", "SSL/TLS (encryption), JPEG, GIF, MPEG (formats), ASCII, Unicode"],
            ]
        ),

        heading("Layer 7: Application Layer"),

        table(
            ["Aspect", "Description"],
            [
                ["Function", "Provides network services directly to end-user applications"],
                ["Features", "User interface to the network, file transfer, email, web browsing"],
                ["Protocols", "HTTP, HTTPS, FTP, SMTP, POP3, IMAP, DNS, DHCP, SSH, Telnet"],
            ]
        ),

        heading("Mnemonic to Remember OSI Layers"),

        table(
            ["Direction", "Mnemonic", "Layers"],
            [
                ["Bottom-Up (1→7)", "Please Do Not Throw Sausage Pizza Away", "Physical, Data Link, Network, Transport, Session, Presentation, Application"],
                ["Top-Down (7→1)", "All People Seem To Need Data Processing", "Application, Presentation, Session, Transport, Network, Data Link, Physical"],
            ]
        ),

        note(
            "The OSI model is a reference model, not an implementation. The real-world Internet uses the TCP/IP model. However, the OSI model is invaluable for understanding, teaching and troubleshooting networks. When someone says 'Layer 2 issue', every network engineer knows it involves switches, MAC addresses or framing.",
            "tip",
            "Practical Note"
        ),

        keyPoints([
            "The OSI model has 7 layers: Physical, Data Link, Network, Transport, Session, Presentation, Application.",
            "Each layer has specific functions, PDUs, addresses and associated protocols.",
            "Physical layer deals with bits; Data Link with frames and MAC addresses; Network with packets and IP addresses.",
            "Transport layer provides end-to-end communication using TCP (reliable) or UDP (fast).",
            "The OSI model is a theoretical reference; the real Internet uses TCP/IP.",
        ]),
    ],

    {
        summary:
            "Master all 7 layers of the OSI Reference Model with their functions, PDUs, addresses, devices and protocols.",
        minutes: 14,
        tags: ["networks", "osi-model", "7-layers", "important"],

        mcqs: [
            mcq(
                "The OSI model was developed by:",
                ["IEEE", "ISO", "IETF", "ITU"],
                1,
                "The OSI model was developed by the International Organization for Standardization (ISO)."
            ),
            mcq(
                "How many layers does the OSI model have?",
                ["4", "5", "6", "7"],
                3,
                "The OSI model has 7 layers."
            ),
            mcq(
                "The PDU at the Network layer is called a:",
                ["Frame", "Segment", "Packet", "Bit"],
                2,
                "The Network layer PDU is called a packet."
            ),
            mcq(
                "MAC addressing operates at which OSI layer?",
                ["Physical", "Data Link", "Network", "Transport"],
                1,
                "MAC (Media Access Control) addressing operates at the Data Link layer (Layer 2)."
            ),
            mcq(
                "Which layer is responsible for encryption and data format translation?",
                ["Application", "Presentation", "Session", "Transport"],
                1,
                "The Presentation layer handles encryption, compression and data format translation."
            ),
            mcq(
                "A router operates at which OSI layer?",
                ["Layer 1", "Layer 2", "Layer 3", "Layer 4"],
                2,
                "A router operates at the Network layer (Layer 3) using IP addresses for routing."
            ),
        ],

        questions: [
            qa(
                "List all seven layers of the OSI model with their primary functions.",
                "Layer 1 (Physical) transmits raw bits over a physical medium, dealing with voltage levels, cables and connectors. Layer 2 (Data Link) provides reliable node-to-node transfer with framing, MAC addressing and error detection. Layer 3 (Network) handles logical addressing (IP), routing and path determination across multiple networks. Layer 4 (Transport) provides end-to-end communication with segmentation, flow control and reliability using TCP or UDP. Layer 5 (Session) establishes, manages and terminates sessions between applications. Layer 6 (Presentation) translates data formats, handles encryption and compression. Layer 7 (Application) provides network services directly to end-user applications such as HTTP, FTP and email.",
                5
            ),
            qa(
                "Explain the difference between the Data Link layer and the Network layer.",
                "The Data Link layer (Layer 2) provides node-to-node (hop-to-hop) communication within the same network. It uses MAC addresses (48-bit physical addresses) to identify devices on a local network, encapsulates data into frames, and handles error detection and media access control. Switches and bridges operate at this layer. The Network layer (Layer 3) provides end-to-end communication across multiple interconnected networks. It uses logical IP addresses (32-bit IPv4 or 128-bit IPv6) to identify devices globally, encapsulates data into packets, and handles routing and path determination. Routers operate at this layer. In summary, Layer 2 handles local delivery within a LAN while Layer 3 handles global delivery across the Internet.",
                5
            ),
            qa(
                "What are the functions of the Transport layer? Compare TCP and UDP.",
                "The Transport layer (Layer 4) provides end-to-end communication between processes on different hosts. It segments application data into manageable units, provides flow control to prevent overwhelming the receiver, and offers error recovery. TCP (Transmission Control Protocol) is connection-oriented and reliable — it establishes a connection using a three-way handshake, provides sequencing, acknowledgement, retransmission of lost segments and flow control. It is used for web browsing (HTTP), email and file transfer where data integrity is critical. UDP (User Datagram Protocol) is connectionless and unreliable — it sends datagrams without establishing a connection, with no guarantees of delivery, ordering or retransmission. It is faster with less overhead and is used for real-time applications like video streaming, VoIP and DNS queries where speed matters more than reliability.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — The TCP/IP Model
========================================================= */

const tcpipModel = createTopic(
    "the-tcpip-model",
    "The TCP/IP Model",

    [
        definition(
            "TCP/IP Model",
            "A practical 4-layer (or 5-layer) protocol suite that forms the foundation of the Internet. Developed by the US Department of Defense in the 1970s, it predates the OSI model and is the actual protocol stack used in real-world networking."
        ),

        text(
            "While the OSI model is a theoretical reference, the TCP/IP model is the protocol suite that actually powers the Internet. Every device connected to the Internet uses TCP/IP. The model is named after its two most important protocols: TCP (Transmission Control Protocol) and IP (Internet Protocol)."
        ),

        heading("TCP/IP Layers"),

        code(
            `TCP/IP Model (4 Layers):

  ┌─────────────────────────────┐
  │  4. Application Layer       │  ← HTTP, FTP, SMTP, DNS, SSH
  ├─────────────────────────────┤
  │  3. Transport Layer         │  ← TCP, UDP
  ├─────────────────────────────┤
  │  2. Internet Layer          │  ← IP, ICMP, ARP
  ├─────────────────────────────┤
  │  1. Network Access Layer    │  ← Ethernet, Wi-Fi, PPP
  └─────────────────────────────┘

5-Layer Hybrid Model (commonly taught):

  ┌─────────────────────────────┐
  │  5. Application Layer       │
  ├─────────────────────────────┤
  │  4. Transport Layer         │
  ├─────────────────────────────┤
  │  3. Network Layer           │
  ├─────────────────────────────┤
  │  2. Data Link Layer         │
  ├─────────────────────────────┤
  │  1. Physical Layer          │
  └─────────────────────────────┘`,
            "text",
            "TCP/IP model layers"
        ),

        heading("Layer-by-Layer Description"),

        heading("1. Network Access Layer (Link Layer)"),

        table(
            ["Aspect", "Description"],
            [
                ["Function", "Handles the physical transmission of data on the network medium; combines OSI Physical and Data Link layers"],
                ["Protocols", "Ethernet (IEEE 802.3), Wi-Fi (IEEE 802.11), PPP, ARP"],
                ["Addressing", "MAC address"],
                ["Devices", "NIC, switch, hub, cables"],
            ]
        ),

        heading("2. Internet Layer"),

        table(
            ["Aspect", "Description"],
            [
                ["Function", "Handles logical addressing, routing and packet forwarding across multiple networks; equivalent to OSI Network layer"],
                ["Key Protocol", "IP (Internet Protocol) — IPv4 and IPv6"],
                ["Supporting Protocols", "ICMP (error messages), ARP (IP to MAC resolution), IGMP (multicast)"],
                ["Addressing", "IP address"],
                ["Devices", "Router"],
            ]
        ),

        heading("3. Transport Layer"),

        table(
            ["Aspect", "Description"],
            [
                ["Function", "Provides end-to-end communication between processes; same as OSI Transport layer"],
                ["Protocols", "TCP (reliable, connection-oriented) and UDP (unreliable, connectionless)"],
                ["Addressing", "Port numbers"],
                ["TCP Features", "Three-way handshake, sequencing, acknowledgement, retransmission, flow control"],
                ["UDP Features", "No connection setup, no guarantees, minimal overhead, fast"],
            ]
        ),

        heading("4. Application Layer"),

        table(
            ["Aspect", "Description"],
            [
                ["Function", "Combines the functions of OSI Application, Presentation and Session layers; provides network services to applications"],
                ["Protocols", "HTTP, HTTPS, FTP, SMTP, POP3, IMAP, DNS, DHCP, SSH, Telnet, SNMP"],
                ["Addressing", "URLs, domain names, email addresses"],
            ]
        ),

        heading("Important TCP/IP Protocols"),

        table(
            ["Protocol", "Layer", "Port", "Purpose"],
            [
                ["HTTP", "Application", "80", "Web page transfer"],
                ["HTTPS", "Application", "443", "Secure web page transfer (encrypted)"],
                ["FTP", "Application", "20/21", "File transfer"],
                ["SMTP", "Application", "25", "Sending email"],
                ["POP3", "Application", "110", "Receiving email"],
                ["IMAP", "Application", "143", "Receiving email (server-side storage)"],
                ["DNS", "Application", "53", "Domain name to IP address resolution"],
                ["DHCP", "Application", "67/68", "Automatic IP address assignment"],
                ["SSH", "Application", "22", "Secure remote login"],
                ["Telnet", "Application", "23", "Remote login (unencrypted)"],
                ["TCP", "Transport", "—", "Reliable, connection-oriented transport"],
                ["UDP", "Transport", "—", "Unreliable, connectionless transport"],
                ["IP", "Internet", "—", "Logical addressing and routing"],
                ["ICMP", "Internet", "—", "Error reporting and diagnostics (ping)"],
                ["ARP", "Network Access", "—", "Maps IP address to MAC address"],
            ]
        ),

        heading("TCP Three-Way Handshake"),

        code(
            `TCP Connection Establishment (Three-Way Handshake):

  Client                              Server
    │                                   │
    │──── SYN (seq=x) ────────────────→ │   Step 1: Client requests connection
    │                                   │
    │←─── SYN-ACK (seq=y, ack=x+1) ─── │   Step 2: Server acknowledges and requests
    │                                   │
    │──── ACK (ack=y+1) ──────────────→ │   Step 3: Client acknowledges
    │                                   │
    │═══ Connection Established ═══════ │
    │                                   │
    │──── Data ────────────────────────→ │
    │←─── Data ──────────────────────── │

  TCP Connection Termination (Four-Way Handshake):
    Client sends FIN → Server ACKs → Server sends FIN → Client ACKs`,
            "text",
            "TCP three-way handshake"
        ),

        note(
            "The TCP three-way handshake (SYN, SYN-ACK, ACK) establishes a reliable connection before data transfer begins. This is why TCP is called connection-oriented. UDP skips this entirely, which makes it faster but unreliable.",
            "exam",
            "Frequently Asked"
        ),

        heading("IPv4 versus IPv6"),

        table(
            ["Feature", "IPv4", "IPv6"],
            [
                ["Address length", "32 bits", "128 bits"],
                ["Address format", "Dotted decimal (192.168.1.1)", "Hexadecimal (2001:0db8::1)"],
                ["Total addresses", "~4.3 billion", "~3.4 × 10³⁸ (virtually unlimited)"],
                ["Header size", "20-60 bytes", "40 bytes (fixed)"],
                ["NAT", "Commonly used", "Not needed"],
                ["Security", "Optional (IPSec add-on)", "Built-in IPSec"],
                ["Checksum", "In header", "Removed (handled by upper layers)"],
            ]
        ),

        keyPoints([
            "The TCP/IP model has 4 layers: Network Access, Internet, Transport and Application.",
            "TCP/IP is the actual protocol suite powering the Internet; OSI is a theoretical reference.",
            "TCP provides reliable, connection-oriented communication with a three-way handshake.",
            "UDP provides fast, connectionless communication without delivery guarantees.",
            "IPv4 uses 32-bit addresses (~4.3 billion); IPv6 uses 128-bit addresses (virtually unlimited).",
        ]),
    ],

    {
        summary:
            "Master the TCP/IP model layers, key protocols with port numbers, TCP three-way handshake and IPv4 vs IPv6.",
        minutes: 13,
        tags: ["networks", "tcpip", "tcp", "udp", "ipv4", "ipv6", "important"],

        mcqs: [
            mcq(
                "The TCP/IP model has how many layers?",
                ["3", "4", "5", "7"],
                1,
                "The standard TCP/IP model has 4 layers: Network Access, Internet, Transport, Application."
            ),
            mcq(
                "HTTP operates on port:",
                ["21", "25", "80", "443"],
                2,
                "HTTP uses port 80 by default. HTTPS uses port 443."
            ),
            mcq(
                "The TCP three-way handshake sequence is:",
                ["ACK, SYN, FIN", "SYN, SYN-ACK, ACK", "SYN, ACK, FIN", "FIN, ACK, SYN"],
                1,
                "The three-way handshake is SYN (client), SYN-ACK (server), ACK (client)."
            ),
            mcq(
                "IPv6 addresses are how many bits long?",
                ["32", "48", "64", "128"],
                3,
                "IPv6 uses 128-bit addresses compared to IPv4's 32-bit addresses."
            ),
            mcq(
                "DNS operates on port:",
                ["25", "53", "80", "110"],
                1,
                "DNS (Domain Name System) uses port 53."
            ),
            mcq(
                "Which protocol maps IP addresses to MAC addresses?",
                ["DNS", "DHCP", "ARP", "ICMP"],
                2,
                "ARP (Address Resolution Protocol) maps IP addresses to MAC addresses on a local network."
            ),
        ],

        questions: [
            qa(
                "Explain the four layers of the TCP/IP model with their functions.",
                "The Network Access layer (Layer 1) combines the OSI Physical and Data Link layers, handling the physical transmission of data on the network medium using protocols like Ethernet and Wi-Fi with MAC addressing. The Internet layer (Layer 2) handles logical addressing and routing across multiple networks using IP, ICMP and ARP, equivalent to the OSI Network layer. The Transport layer (Layer 3) provides end-to-end communication between processes using TCP for reliable, connection-oriented communication or UDP for fast, connectionless communication, using port numbers for addressing. The Application layer (Layer 4) combines the OSI Application, Presentation and Session layers, providing network services directly to applications using protocols like HTTP, FTP, SMTP, DNS and SSH.",
                5
            ),
            qa(
                "Explain the TCP three-way handshake and why TCP is called connection-oriented.",
                "TCP is called connection-oriented because it establishes a formal connection before any data is transferred using a three-way handshake. In step 1, the client sends a SYN (synchronise) segment with an initial sequence number to the server, requesting a connection. In step 2, the server responds with a SYN-ACK segment, acknowledging the client's sequence number and sending its own sequence number. In step 3, the client sends an ACK segment acknowledging the server's sequence number. After this three-step exchange, the connection is established and both sides can send data reliably. This handshake ensures both parties are ready, agree on initial sequence numbers and can track all subsequent data. Connection termination uses a four-way handshake with FIN and ACK segments.",
                5
            ),
            qa(
                "Compare IPv4 and IPv6.",
                "IPv4 uses 32-bit addresses in dotted decimal format (e.g., 192.168.1.1), providing approximately 4.3 billion unique addresses, which has led to address exhaustion requiring workarounds like NAT. IPv6 uses 128-bit addresses in hexadecimal format (e.g., 2001:0db8::1), providing approximately 3.4 × 10³⁸ addresses, which is virtually unlimited. IPv4 headers are variable length (20-60 bytes) with a header checksum, while IPv6 has a fixed 40-byte header without a checksum (handled by upper layers). IPv4 commonly requires NAT to share addresses, while IPv6's vast address space eliminates the need for NAT. IPv6 has built-in IPSec security, while IPv4's IPSec is an optional add-on. IPv6 also simplifies routing with its streamlined header format.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — Comparison of OSI and TCP/IP Models
========================================================= */

const osiVsTcpIp = createTopic(
    "comparison-of-osi-and-tcpip-models",
    "Comparison of OSI and TCP/IP Models",

    [
        text(
            "Both the OSI and TCP/IP models use a layered approach to network communication, but they differ in the number of layers, their development history, their purpose and their practical usage. Understanding both models and their relationship is fundamental to networking."
        ),

        heading("Side-by-Side Comparison"),

        code(
            `  OSI Model (7 Layers)          TCP/IP Model (4 Layers)

  ┌───────────────────┐
  │ 7. Application    │ ──┐
  ├───────────────────┤   │
  │ 6. Presentation   │ ──┼──→ ┌───────────────────┐
  ├───────────────────┤   │    │ 4. Application    │
  │ 5. Session        │ ──┘    ├───────────────────┤
  ├───────────────────┤        │ 3. Transport      │
  │ 4. Transport      │ ─────→ ├───────────────────┤
  ├───────────────────┤        │ 2. Internet       │
  │ 3. Network        │ ─────→ ├───────────────────┤
  ├───────────────────┤   ┌──→ │ 1. Network Access │
  │ 2. Data Link      │ ──┤    └───────────────────┘
  ├───────────────────┤   │
  │ 1. Physical       │ ──┘
  └───────────────────┘`,
            "text",
            "OSI vs TCP/IP layer mapping"
        ),

        heading("Detailed Comparison Table"),

        table(
            ["Aspect", "OSI Model", "TCP/IP Model"],
            [
                ["Full form", "Open Systems Interconnection", "Transmission Control Protocol / Internet Protocol"],
                ["Developed by", "ISO (International Organization for Standardization)", "US Department of Defense (DoD)"],
                ["Year", "1984", "1970s (predates OSI)"],
                ["Number of layers", "7", "4 (or 5 in hybrid model)"],
                ["Purpose", "Theoretical reference model", "Practical protocol suite"],
                ["Approach", "Model first, protocols later", "Protocols first, model derived from them"],
                ["Implementation", "Never fully implemented", "Fully implemented — powers the Internet"],
                ["Session & Presentation", "Separate layers (5 and 6)", "Combined into Application layer"],
                ["Data Link & Physical", "Separate layers (1 and 2)", "Combined into Network Access layer"],
                ["Transport layer", "Connection-oriented only (originally)", "Both connection-oriented (TCP) and connectionless (UDP)"],
                ["Protocols", "Protocol-independent model", "Protocol-dependent model"],
                ["Usage", "Teaching, reference, troubleshooting", "Actual Internet communication"],
            ]
        ),

        heading("Similarities"),

        list([
            "Both use a layered architecture to divide network functions.",
            "Both have a Transport layer that provides end-to-end communication.",
            "Both have a Network/Internet layer that handles routing and logical addressing.",
            "Both use encapsulation and decapsulation as data moves through layers.",
            "Both support peer-to-peer (virtual) communication between corresponding layers.",
            "Both assume packet-switched networks rather than circuit-switched.",
        ]),

        heading("Key Differences Explained"),

        heading("1. Model First versus Protocols First"),

        text(
            "The OSI model was designed as a theoretical framework first, and then protocols were developed to fit the model. The TCP/IP model was derived from existing protocols that were already working on the ARPANET. This is why TCP/IP protocols fit their model perfectly, while some OSI protocols felt forced into the 7-layer structure."
        ),

        heading("2. Session and Presentation Layers"),

        text(
            "The OSI model has separate Session and Presentation layers. In practice, these functions are rarely implemented as separate layers. The TCP/IP model combines them into the Application layer, which is more practical. For example, SSL/TLS encryption (a Presentation layer function in OSI) is implemented within application protocols like HTTPS in TCP/IP."
        ),

        heading("3. Connection-Oriented versus Connectionless"),

        table(
            ["Layer", "OSI Model", "TCP/IP Model"],
            [
                ["Transport", "Originally only connection-oriented", "Both TCP (connection-oriented) and UDP (connectionless)"],
                ["Network", "Both connection-oriented and connectionless", "Connectionless only (IP)"],
            ]
        ),

        heading("OSI Layer to Protocol Mapping"),

        table(
            ["OSI Layer", "Common Protocols"],
            [
                ["Application (7)", "HTTP, FTP, SMTP, DNS, DHCP, SSH"],
                ["Presentation (6)", "SSL/TLS, JPEG, MPEG, ASCII, Unicode"],
                ["Session (5)", "NetBIOS, RPC, SIP, PPTP"],
                ["Transport (4)", "TCP, UDP"],
                ["Network (3)", "IP, ICMP, ARP, OSPF, BGP"],
                ["Data Link (2)", "Ethernet, Wi-Fi, PPP, HDLC"],
                ["Physical (1)", "Ethernet cables, fibre, RS-232, USB"],
            ]
        ),

        heading("Devices and Their OSI Layers"),

        table(
            ["Device", "OSI Layer", "Function"],
            [
                ["Hub", "Layer 1 (Physical)", "Broadcasts bits to all ports"],
                ["Repeater", "Layer 1 (Physical)", "Amplifies/regenerates signals"],
                ["Switch", "Layer 2 (Data Link)", "Forwards frames based on MAC address"],
                ["Bridge", "Layer 2 (Data Link)", "Connects two LAN segments"],
                ["Router", "Layer 3 (Network)", "Routes packets based on IP address"],
                ["Firewall", "Layer 3-7", "Filters traffic based on rules"],
                ["Gateway", "Layer 7 (Application)", "Translates between different protocol suites"],
            ]
        ),

        note(
            "In interviews and exams, the most commonly asked comparison points are: number of layers (7 vs 4), theoretical vs practical, who developed each (ISO vs DoD), and how Session/Presentation layers are handled (separate in OSI, merged in TCP/IP).",
            "exam",
            "Frequently Asked"
        ),

        keyPoints([
            "OSI has 7 layers (theoretical reference); TCP/IP has 4 layers (practical implementation).",
            "OSI was developed by ISO in 1984; TCP/IP was developed by DoD in the 1970s.",
            "OSI's Session and Presentation layers are merged into TCP/IP's Application layer.",
            "OSI's Physical and Data Link layers are merged into TCP/IP's Network Access layer.",
            "Both models use layered architecture, encapsulation and peer-to-peer communication.",
        ]),
    ],

    {
        summary:
            "Compare the OSI and TCP/IP models across all dimensions: layers, history, purpose, approach and practical usage.",
        minutes: 12,
        tags: ["networks", "osi", "tcpip", "comparison", "important"],

        mcqs: [
            mcq(
                "The OSI model was developed by:",
                ["DoD", "ISO", "IEEE", "IETF"],
                1,
                "The OSI model was developed by the International Organization for Standardization (ISO)."
            ),
            mcq(
                "In the TCP/IP model, the OSI Session and Presentation layers are merged into:",
                ["Transport layer", "Internet layer", "Application layer", "Network Access layer"],
                2,
                "TCP/IP combines OSI's Session, Presentation and Application layers into a single Application layer."
            ),
            mcq(
                "Which model was developed first?",
                ["OSI", "TCP/IP", "Both at the same time", "Neither"],
                1,
                "TCP/IP was developed in the 1970s, predating the OSI model (1984)."
            ),
            mcq(
                "A switch operates at which OSI layer?",
                ["Layer 1", "Layer 2", "Layer 3", "Layer 4"],
                1,
                "A switch operates at the Data Link layer (Layer 2) using MAC addresses."
            ),
            mcq(
                "The TCP/IP model is:",
                ["A theoretical reference model", "A practical protocol suite that powers the Internet", "A 7-layer model", "Developed by ISO"],
                1,
                "TCP/IP is the practical protocol suite that actually powers the Internet."
            ),
        ],

        questions: [
            qa(
                "Compare the OSI and TCP/IP models on at least five criteria.",
                "First, the OSI model has 7 layers while TCP/IP has 4 layers. Second, OSI was developed by ISO in 1984 as a theoretical reference model, while TCP/IP was developed by the US DoD in the 1970s as a practical protocol suite. Third, OSI was designed model-first with protocols developed later to fit, while TCP/IP was derived from already-working protocols. Fourth, OSI has separate Session and Presentation layers, while TCP/IP merges these with the Application layer into a single Application layer. Fifth, OSI's Physical and Data Link layers are separate, while TCP/IP combines them into the Network Access layer. Additionally, OSI was never fully implemented as a protocol suite, while TCP/IP is fully implemented and powers the entire Internet.",
                5
            ),
            qa(
                "What are the similarities between the OSI and TCP/IP models?",
                "Both models use a layered architecture to divide the complex task of network communication into manageable, independent layers. Both have a Transport layer that provides end-to-end communication between processes on different hosts. Both have a Network/Internet layer that handles logical addressing and routing across multiple networks. Both use encapsulation (adding headers going down) and decapsulation (removing headers going up) as data moves through the layers. Both support peer-to-peer virtual communication between corresponding layers on different machines. Both assume packet-switched networks rather than circuit-switched networks.",
                5
            ),
            qa(
                "Map common networking devices to their OSI layers.",
                "A hub operates at Layer 1 (Physical) and simply broadcasts incoming bits to all ports without any intelligence. A repeater also operates at Layer 1, amplifying or regenerating signals to extend cable distance. A switch operates at Layer 2 (Data Link) and forwards frames based on MAC addresses, learning which devices are on which ports. A bridge also operates at Layer 2, connecting two LAN segments. A router operates at Layer 3 (Network) and routes packets between different networks based on IP addresses. A firewall can operate at Layers 3 through 7, filtering traffic based on IP addresses, ports or application content. A gateway operates at Layer 7 (Application) and translates between entirely different protocol suites.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 5 — Key Protocols: DNS, DHCP, ARP and ICMP
========================================================= */

const keyProtocols = createTopic(
    "key-protocols-dns-dhcp-arp-and-icmp",
    "Key Protocols: DNS, DHCP, ARP and ICMP",

    [
        text(
            "DNS, DHCP, ARP and ICMP are four fundamental protocols that make the Internet work behind the scenes. Every time you browse a website, connect to a network or diagnose a connection problem, one or more of these protocols is at work."
        ),

        heading("1. DNS (Domain Name System)"),

        definition(
            "DNS",
            "A hierarchical, distributed naming system that translates human-readable domain names (e.g., www.google.com) into machine-readable IP addresses (e.g., 142.250.80.4). DNS operates at the Application layer using UDP port 53 (and TCP for large responses)."
        ),

        heading("Why DNS is Needed"),

        text(
            "Humans find it easy to remember names like 'www.google.com' but computers communicate using IP addresses like '142.250.80.4'. DNS acts as the Internet's phone book, translating between the two."
        ),

        heading("DNS Hierarchy"),

        code(
            `DNS Hierarchy:

  Root Servers (.)
  ├── .com
  │   ├── google.com
  │   │   ├── www.google.com → 142.250.80.4
  │   │   └── mail.google.com → 142.250.80.5
  │   └── amazon.com
  ├── .org
  │   └── wikipedia.org
  ├── .edu
  │   └── mit.edu
  └── .in
      └── gujaratuniversity.ac.in`,
            "text",
            "DNS hierarchy"
        ),

        heading("DNS Resolution Process"),

        steps([
            "User types www.example.com in the browser.",
            "The browser checks its local DNS cache.",
            "If not cached, the OS checks its hosts file and DNS cache.",
            "If still not found, a query is sent to the configured DNS resolver (usually the ISP's DNS server).",
            "The resolver queries the Root server, which refers it to the .com TLD server.",
            "The TLD server refers it to the authoritative DNS server for example.com.",
            "The authoritative server returns the IP address for www.example.com.",
            "The resolver caches the result and returns it to the browser.",
            "The browser uses the IP address to establish a TCP connection to the web server.",
        ]),

        heading("DNS Record Types"),

        table(
            ["Record Type", "Purpose", "Example"],
            [
                ["A", "Maps a domain name to an IPv4 address", "example.com → 93.184.216.34"],
                ["AAAA", "Maps a domain name to an IPv6 address", "example.com → 2606:2800:220:1:248:1893:25c8:1946"],
                ["CNAME", "Canonical name (alias)", "www.example.com → example.com"],
                ["MX", "Mail exchange server", "example.com → mail.example.com"],
                ["NS", "Name server for a domain", "example.com → ns1.example.com"],
                ["TXT", "Text records (SPF, DKIM, verification)", "v=spf1 include:_spf.google.com ~all"],
                ["PTR", "Reverse DNS (IP to domain)", "93.184.216.34 → example.com"],
            ]
        ),

        heading("2. DHCP (Dynamic Host Configuration Protocol)"),

        definition(
            "DHCP",
            "A network management protocol that automatically assigns IP addresses and other network configuration parameters (subnet mask, default gateway, DNS server) to devices when they join a network. It operates at the Application layer using UDP ports 67 (server) and 68 (client)."
        ),

        heading("DHCP Process (DORA)"),

        table(
            ["Step", "Name", "Direction", "Description"],
            [
                ["1", "Discover", "Client → Broadcast", "Client broadcasts a DHCPDISCOVER message to find a DHCP server"],
                ["2", "Offer", "Server → Client", "DHCP server responds with a DHCPOFFER containing an available IP address"],
                ["3", "Request", "Client → Server", "Client sends a DHCPREQUEST to accept the offered IP address"],
                ["4", "Acknowledge", "Server → Client", "Server sends a DHCPACK confirming the lease and providing configuration"],
            ]
        ),

        code(
            `DHCP DORA Process:

  Client                              DHCP Server
    │                                    │
    │── DHCPDISCOVER (broadcast) ──────→ │  "I need an IP!"
    │                                    │
    │←─ DHCPOFFER ────────────────────── │  "Here's 192.168.1.100"
    │                                    │
    │── DHCPREQUEST ───────────────────→ │  "I'll take 192.168.1.100"
    │                                    │
    │←─ DHCPACK ─────────────────────── │  "Confirmed! Lease for 24 hours"
    │                                    │
    │  IP: 192.168.1.100                 │
    │  Subnet: 255.255.255.0             │
    │  Gateway: 192.168.1.1              │
    │  DNS: 8.8.8.8                      │`,
            "text",
            "DHCP DORA process"
        ),

        heading("3. ARP (Address Resolution Protocol)"),

        definition(
            "ARP",
            "A protocol that maps a known IP address to its corresponding MAC (hardware) address on a local network. It operates at the boundary between the Network and Data Link layers."
        ),

        code(
            `ARP Process:

  Host A (IP: 192.168.1.10) wants to send data to Host B (IP: 192.168.1.20)

  Step 1: Host A checks its ARP cache for 192.168.1.20's MAC address.
  Step 2: If not found, Host A broadcasts an ARP Request:
          "Who has 192.168.1.20? Tell 192.168.1.10"
  Step 3: Host B receives the request and replies with ARP Reply:
          "192.168.1.20 is at AA:BB:CC:DD:EE:FF"
  Step 4: Host A caches the mapping and sends the frame to AA:BB:CC:DD:EE:FF.`,
            "text",
            "ARP process"
        ),

        heading("4. ICMP (Internet Control Message Protocol)"),

        definition(
            "ICMP",
            "A protocol used by network devices to send error messages and operational information. It is used by diagnostic tools like ping and traceroute. ICMP operates at the Network layer (encapsulated in IP packets)."
        ),

        table(
            ["ICMP Message", "Purpose", "Used By"],
            [
                ["Echo Request", "Tests reachability of a host", "ping"],
                ["Echo Reply", "Response to Echo Request", "ping"],
                ["Destination Unreachable", "Packet could not be delivered", "Error reporting"],
                ["Time Exceeded", "TTL expired (packet looped too long)", "traceroute"],
                ["Redirect", "Suggests a better route", "Router optimisation"],
            ]
        ),

        code(
            `$ ping www.google.com
  PING www.google.com (142.250.80.4): 56 data bytes
  64 bytes from 142.250.80.4: icmp_seq=0 ttl=117 time=12.3 ms
  64 bytes from 142.250.80.4: icmp_seq=1 ttl=117 time=11.8 ms
  64 bytes from 142.250.80.4: icmp_seq=2 ttl=117 time=12.1 ms

  --- www.google.com ping statistics ---
  3 packets transmitted, 3 received, 0% packet loss
  round-trip min/avg/max = 11.8/12.1/12.3 ms`,
            "text",
            "ping output using ICMP"
        ),

        heading("How These Protocols Work Together"),

        code(
            `When you type www.example.com in your browser:

  1. DHCP (already done): Your device got an IP address when it joined the network.
  2. DNS: Your browser asks a DNS server to resolve www.example.com → 93.184.216.34
  3. ARP: Your device broadcasts ARP to find the MAC address of the default gateway.
  4. TCP: Your browser establishes a TCP connection (three-way handshake) to 93.184.216.34:80
  5. HTTP: Your browser sends an HTTP GET request for the web page.
  6. ICMP: If anything goes wrong (e.g., host unreachable), ICMP reports the error.`,
            "text",
            "How DNS, DHCP, ARP and ICMP work together"
        ),

        keyPoints([
            "DNS translates domain names to IP addresses using a hierarchical distributed system.",
            "DHCP automatically assigns IP addresses using the DORA process (Discover, Offer, Request, Acknowledge).",
            "ARP maps IP addresses to MAC addresses on a local network using broadcast requests.",
            "ICMP provides error reporting and diagnostics; ping uses ICMP Echo Request/Reply.",
            "These four protocols work together every time you browse the web.",
        ]),
    ],

    {
        summary:
            "Master DNS (name resolution), DHCP (automatic IP assignment), ARP (IP to MAC mapping) and ICMP (error reporting and ping).",
        minutes: 13,
        tags: ["networks", "dns", "dhcp", "arp", "icmp", "protocols", "important"],

        mcqs: [
            mcq(
                "DNS translates:",
                ["MAC addresses to IP addresses", "Domain names to IP addresses", "IP addresses to MAC addresses", "URLs to MAC addresses"],
                1,
                "DNS translates human-readable domain names into machine-readable IP addresses."
            ),
            mcq(
                "The DHCP process is known by the acronym:",
                ["SARA", "DORA", "ARPA", "DORA"],
                1,
                "DORA stands for Discover, Offer, Request, Acknowledge."
            ),
            mcq(
                "ARP is used to:",
                ["Translate domain names to IP addresses", "Assign IP addresses dynamically", "Map IP addresses to MAC addresses", "Send error messages"],
                2,
                "ARP maps a known IP address to its corresponding MAC address on a local network."
            ),
            mcq(
                "The ping command uses which protocol?",
                ["TCP", "UDP", "ICMP", "ARP"],
                2,
                "ping uses ICMP Echo Request and Echo Reply messages to test reachability."
            ),
            mcq(
                "DNS operates on port:",
                ["25", "53", "80", "67"],
                1,
                "DNS uses UDP port 53 (and TCP port 53 for large responses)."
            ),
            mcq(
                "An MX record in DNS specifies:",
                ["The IPv4 address of a domain", "The mail exchange server for a domain", "An alias for a domain", "The name server"],
                1,
                "MX (Mail Exchange) records specify the mail server responsible for receiving email for a domain."
            ),
        ],

        questions: [
            qa(
                "Explain the DNS resolution process step by step.",
                "When a user types www.example.com in a browser, the browser first checks its local DNS cache. If the IP address is not cached, the operating system checks its hosts file and DNS cache. If still not found, a query is sent to the configured DNS resolver, typically the ISP's DNS server. The resolver queries a root server, which directs it to the appropriate TLD server (e.g., .com). The TLD server directs the resolver to the authoritative DNS server for example.com. The authoritative server returns the IP address for www.example.com. The resolver caches this result and returns it to the browser, which then uses the IP address to establish a TCP connection to the web server. This hierarchical process ensures scalability and distributed management of the global namespace.",
                5
            ),
            qa(
                "Explain the DHCP DORA process.",
                "DHCP uses a four-step process known as DORA. In the Discover step, a client that has just joined the network broadcasts a DHCPDISCOVER message to find any available DHCP server. In the Offer step, one or more DHCP servers respond with a DHCPOFFER message containing an available IP address, subnet mask, default gateway and DNS server information. In the Request step, the client selects one offer and broadcasts a DHCPREQUEST message to accept it, informing all other servers that their offers were declined. In the Acknowledge step, the selected server sends a DHCPACK message confirming the lease and providing the final configuration parameters. The client then configures its network interface with the assigned IP address and parameters. The lease has a time limit after which the client must renew it.",
                5
            ),
            qa(
                "Explain how DNS, DHCP, ARP and ICMP work together when browsing a website.",
                "When you connect to a network, DHCP automatically assigns your device an IP address, subnet mask, default gateway and DNS server address through the DORA process. When you type a URL like www.example.com, DNS resolves the domain name to an IP address (e.g., 93.184.216.34) by querying the DNS hierarchy. Before your device can send packets to the Internet, it needs the MAC address of the default gateway, which it obtains using ARP by broadcasting an ARP request and receiving an ARP reply with the gateway's MAC address. Your browser then establishes a TCP connection and sends an HTTP request to the web server. If any network problem occurs during this process, such as the destination being unreachable, ICMP sends error messages back to the source. The ping command also uses ICMP to test connectivity.",
                5
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit2Topics = [
    introToLayeredArchitecture,
    osiReferenceModel,
    tcpipModel,
    osiVsTcpIp,
    keyProtocols,
];