/* =========================================================
   BCA • SEM 5 • Computer Networks
   UNIT 2 — Protocols, Addressing and Network Security
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
   TOPIC 1 — IP Addressing and Subnetting
========================================================= */

const ipAddressing = createTopic(
    "ip-addressing-and-subnetting",
    "IP Addressing and Subnetting",

    [
        definition(
            "IP Address",
            "An IP address is a unique numerical label assigned to each device connected to a network that uses the Internet Protocol for communication."
        ),

        heading("IPv4 vs IPv6"),

        table(
            ["Feature", "IPv4", "IPv6"],
            [
                ["Size", "32 bits", "128 bits"],
                ["Format", "Decimal (dotted)", "Hexadecimal (colon)"],
                ["Example", "192.168.1.1", "2001:0db8::7334"],
                ["Address space", "~4.3 billion", "340 undecillion"],
                ["Header size", "20-60 bytes", "40 bytes fixed"],
                ["Security", "Optional (IPSec)", "Built-in IPSec"],
                ["Configuration", "Manual/DHCP", "Auto-configuration"],
            ]
        ),

        heading("IPv4 Address Structure"),

        text(
            "IPv4 is a 32-bit address written in dotted decimal notation with four octets, each ranging from 0 to 255. Example: 192.168.1.10"
        ),

        code(
            `192  .  168  .  1  .  10
11000000.10101000.00000001.00001010
   8 bits   8 bits  8 bits  8 bits
Total: 32 bits`,
            "text",
            "IPv4 binary representation"
        ),

        heading("Classes of IPv4 Addresses"),

        table(
            ["Class", "Range", "Default Mask", "Use"],
            [
                ["A", "0.0.0.0 - 127.255.255.255", "255.0.0.0 (/8)", "Large networks"],
                ["B", "128.0.0.0 - 191.255.255.255", "255.255.0.0 (/16)", "Medium networks"],
                ["C", "192.0.0.0 - 223.255.255.255", "255.255.255.0 (/24)", "Small networks"],
                ["D", "224.0.0.0 - 239.255.255.255", "N/A", "Multicasting"],
                ["E", "240.0.0.0 - 255.255.255.255", "N/A", "Research/Reserved"],
            ]
        ),

        heading("Public vs Private IP"),

        table(
            ["Type", "Range", "Use"],
            [
                ["Private (Class A)", "10.0.0.0 - 10.255.255.255", "Internal networks"],
                ["Private (Class B)", "172.16.0.0 - 172.31.255.255", "Internal networks"],
                ["Private (Class C)", "192.168.0.0 - 192.168.255.255", "Home/office LAN"],
                ["Loopback", "127.0.0.1", "Local machine testing"],
                ["Public", "Assigned by ISP", "Internet communication"],
            ]
        ),

        heading("Subnetting"),

        definition(
            "Subnetting",
            "Subnetting is the process of dividing a large network into smaller sub-networks (subnets) to improve efficiency, security and address utilisation."
        ),

        heading("Subnet Mask"),

        text(
            "A subnet mask separates the network portion from the host portion of an IP address. In 192.168.1.10/24, the /24 means the first 24 bits are the network part, giving mask 255.255.255.0."
        ),

        heading("Subnetting Example"),

        code(
            `Network: 192.168.1.0/24
Subnet Mask: 255.255.255.0

Total addresses: 256
Usable hosts: 254 (2 reserved: network + broadcast)

Network address:   192.168.1.0
First usable IP:   192.168.1.1
Last usable IP:    192.168.1.254
Broadcast address: 192.168.1.255`,
            "text",
            "Class C subnet example"
        ),

        heading("CIDR Notation"),

        definition(
            "CIDR",
            "Classless Inter-Domain Routing uses a slash followed by the number of network bits, such as 192.168.1.0/24, instead of traditional class-based addressing."
        ),

        table(
            ["CIDR", "Subnet Mask", "Hosts"],
            [
                ["/24", "255.255.255.0", "254"],
                ["/25", "255.255.255.128", "126"],
                ["/26", "255.255.255.192", "62"],
                ["/27", "255.255.255.224", "30"],
                ["/28", "255.255.255.240", "14"],
                ["/29", "255.255.255.248", "6"],
                ["/30", "255.255.255.252", "2"],
            ]
        ),

        note(
            "127.0.0.1 is the loopback address used to test the local machine's network stack. Pinging 127.0.0.1 checks if TCP/IP is properly installed.",
            "tip",
            "Loopback"
        ),

        keyPoints([
            "IPv4 uses 32 bits and IPv6 uses 128 bits.",
            "IPv4 addresses are divided into classes A, B, C, D, E.",
            "Private IPs are used inside LANs and are not routed on the internet.",
            "Subnetting divides networks into smaller efficient subnets.",
            "CIDR notation replaces traditional class-based addressing.",
        ]),
    ],

    {
        summary:
            "Understand IP addressing (IPv4, IPv6), address classes, private/public IPs, subnetting and CIDR notation.",
        minutes: 13,
        tags: ["ip", "ipv4", "ipv6", "subnetting", "important"],

        mcqs: [
            mcq(
                "How many bits are in an IPv4 address?",
                ["16", "32", "64", "128"],
                1,
                "IPv4 uses 32-bit addresses."
            ),
            mcq(
                "Which class is used for multicasting?",
                ["A", "B", "C", "D"],
                3,
                "Class D is reserved for multicasting."
            ),
            mcq(
                "The loopback address is:",
                ["192.168.1.1", "127.0.0.1", "10.0.0.1", "255.255.255.255"],
                1,
                "127.0.0.1 is the loopback address."
            ),
            mcq(
                "How many usable hosts in /24 subnet?",
                ["256", "254", "128", "64"],
                1,
                "/24 provides 256 addresses minus 2 reserved = 254 usable hosts."
            ),
        ],

        questions: [
            qa(
                "Explain IPv4 address classes.",
                "IPv4 addresses are divided into five classes. Class A (0-127) uses 8 bits for network and 24 for host, supporting large networks with default mask 255.0.0.0. Class B (128-191) uses 16 bits each for network and host, for medium networks with mask 255.255.0.0. Class C (192-223) uses 24 bits for network and 8 for host, for small networks with mask 255.255.255.0. Class D (224-239) is reserved for multicasting. Class E (240-255) is reserved for research and future use.",
                4
            ),
            qa(
                "What is subnetting and why is it used?",
                "Subnetting is the process of dividing a large IP network into smaller sub-networks called subnets. It uses a subnet mask to separate network and host portions of an IP address. Subnetting improves address utilisation by reducing wasted IPs, enhances security by isolating segments, reduces broadcast traffic and simplifies management. For example, a /24 network can be divided into two /25 subnets, each with 126 usable hosts. CIDR notation (like /24, /26) is used to represent subnet masks efficiently.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — Routing and Switching
========================================================= */

const routingSwitching = createTopic(
    "routing-and-switching",
    "Routing and Switching",

    [
        definition(
            "Routing",
            "Routing is the process of selecting the best path for data packets to travel from source to destination across one or more networks."
        ),

        definition(
            "Switching",
            "Switching is the process of forwarding data frames from one device to another within the same network based on MAC addresses."
        ),

        heading("Types of Routing"),

        table(
            ["Type", "Description", "Use"],
            [
                ["Static Routing", "Manually configured routes", "Small stable networks"],
                ["Dynamic Routing", "Routes updated by protocols", "Large changing networks"],
                ["Default Routing", "Route used when no match found", "Gateway to internet"],
            ]
        ),

        heading("Routing Protocols"),

        table(
            ["Protocol", "Type", "Metric"],
            [
                ["RIP", "Distance Vector", "Hop count (max 15)"],
                ["OSPF", "Link State", "Cost (bandwidth)"],
                ["EIGRP", "Hybrid", "Composite metric"],
                ["BGP", "Path Vector", "AS path"],
            ]
        ),

        heading("Distance Vector vs Link State"),

        table(
            ["Basis", "Distance Vector", "Link State"],
            [
                ["Algorithm", "Bellman-Ford", "Dijkstra"],
                ["Updates", "Periodic to neighbors", "Triggered to all"],
                ["Convergence", "Slow", "Fast"],
                ["Bandwidth", "Uses more", "Efficient"],
                ["Example", "RIP", "OSPF"],
            ]
        ),

        heading("Switching Techniques"),

        table(
            ["Technique", "Description", "Example"],
            [
                ["Circuit Switching", "Dedicated path established", "Traditional telephone"],
                ["Packet Switching", "Data broken into packets", "Internet"],
                ["Message Switching", "Whole message stored and forwarded", "Old telegraph"],
            ]
        ),

        heading("Circuit vs Packet Switching"),

        table(
            ["Basis", "Circuit Switching", "Packet Switching"],
            [
                ["Path", "Dedicated", "Dynamic per packet"],
                ["Setup time", "Required", "Not required"],
                ["Reliability", "High", "Moderate"],
                ["Efficiency", "Low", "High"],
                ["Cost", "High", "Low"],
                ["Use", "Voice calls (old)", "Internet, data"],
            ]
        ),

        heading("Switch Working"),

        steps([
            "Device sends a frame with source and destination MAC.",
            "Switch reads the destination MAC address.",
            "Switch looks up its MAC address table.",
            "If MAC is found, frame is forwarded to that port only.",
            "If not found, switch broadcasts to all ports (except source).",
            "Reply updates the MAC address table.",
            "Future frames are forwarded directly.",
        ]),

        heading("Router Working"),

        steps([
            "Router receives an IP packet.",
            "Router reads the destination IP address.",
            "Router checks its routing table.",
            "Router selects the best path based on metrics.",
            "Packet is forwarded to the next hop.",
            "Process repeats at each router until destination is reached.",
            "TTL is decremented at each hop.",
        ]),

        note(
            "Modern networks use both switches (for LAN) and routers (for connecting to other networks and the internet). Layer 3 switches combine both functionalities.",
            "info",
            "Modern Networks"
        ),

        keyPoints([
            "Routing selects the best path across networks using IP.",
            "Switching forwards frames within a LAN using MAC.",
            "Static routing is manual, dynamic routing is automatic.",
            "RIP, OSPF, BGP are common routing protocols.",
            "Packet switching is more efficient than circuit switching.",
        ]),
    ],

    {
        summary:
            "Learn routing and switching, routing protocols (RIP, OSPF, BGP), and circuit vs packet switching techniques.",
        minutes: 12,
        tags: ["routing", "switching", "protocols", "important"],

        mcqs: [
            mcq(
                "Which protocol uses hop count as metric?",
                ["OSPF", "RIP", "BGP", "EIGRP"],
                1,
                "RIP uses hop count with maximum of 15."
            ),
            mcq(
                "Which switching is used on the internet?",
                ["Circuit", "Packet", "Message", "None"],
                1,
                "The internet uses packet switching."
            ),
            mcq(
                "Router works at which layer?",
                ["Physical", "Data Link", "Network", "Transport"],
                2,
                "Router operates at the Network layer."
            ),
            mcq(
                "OSPF is a:",
                ["Distance vector protocol", "Link state protocol", "Path vector protocol", "Application protocol"],
                1,
                "OSPF is a link state routing protocol."
            ),
        ],

        questions: [
            qa(
                "Explain the difference between routing and switching.",
                "Routing is the process of forwarding data packets between different networks using IP addresses, performed by routers at the Network layer. It selects the best path using routing protocols like RIP, OSPF or BGP. Switching is the process of forwarding data frames within the same network using MAC addresses, performed by switches at the Data Link layer. Switches maintain a MAC address table and forward frames to specific ports. Routing connects networks, while switching connects devices within a network.",
                4
            ),
            qa(
                "Compare circuit switching and packet switching.",
                "In circuit switching, a dedicated communication path is established between sender and receiver for the entire session, as in traditional telephone calls. It provides high reliability and quality but is inefficient because the path is reserved even when idle. In packet switching, data is broken into small packets that travel independently through the network, each possibly taking different paths. It is used on the internet and is more efficient because links are shared. Packet switching does not require setup time and adapts to network conditions.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — Application Layer Protocols
========================================================= */

const applicationProtocols = createTopic(
    "application-layer-protocols",
    "Application Layer Protocols",

    [
        definition(
            "Application Layer Protocol",
            "Application layer protocols define the rules for communication between network applications, providing services directly to end users."
        ),

        heading("Common Application Layer Protocols"),

        table(
            ["Protocol", "Full Form", "Port", "Use"],
            [
                ["HTTP", "HyperText Transfer Protocol", "80", "Web browsing"],
                ["HTTPS", "HTTP Secure", "443", "Secure web browsing"],
                ["FTP", "File Transfer Protocol", "20, 21", "File transfer"],
                ["SMTP", "Simple Mail Transfer Protocol", "25", "Sending email"],
                ["POP3", "Post Office Protocol v3", "110", "Receiving email"],
                ["IMAP", "Internet Message Access Protocol", "143", "Managing email"],
                ["DNS", "Domain Name System", "53", "Name to IP resolution"],
                ["DHCP", "Dynamic Host Config Protocol", "67, 68", "Auto IP assignment"],
                ["Telnet", "Terminal Network", "23", "Remote login (unsecure)"],
                ["SSH", "Secure Shell", "22", "Secure remote login"],
            ]
        ),

        heading("HTTP and HTTPS"),

        text(
            "HTTP is the foundation of the World Wide Web. It is a request-response protocol where the client (browser) sends requests and the server responds with HTML, images or data. HTTPS is HTTP over SSL/TLS, encrypting the communication for security."
        ),

        heading("HTTP Methods"),

        table(
            ["Method", "Purpose"],
            [
                ["GET", "Retrieve data"],
                ["POST", "Submit data"],
                ["PUT", "Update entire resource"],
                ["PATCH", "Partial update"],
                ["DELETE", "Remove resource"],
                ["HEAD", "Retrieve headers only"],
            ]
        ),

        heading("HTTP Status Codes"),

        table(
            ["Code", "Category", "Example"],
            [
                ["1xx", "Informational", "100 Continue"],
                ["2xx", "Success", "200 OK, 201 Created"],
                ["3xx", "Redirection", "301 Moved, 302 Found"],
                ["4xx", "Client Error", "404 Not Found, 403 Forbidden"],
                ["5xx", "Server Error", "500 Internal Server Error"],
            ]
        ),

        heading("DNS - Domain Name System"),

        definition(
            "DNS",
            "DNS translates human-readable domain names such as www.google.com into IP addresses such as 142.250.192.14 that computers use to identify each other."
        ),

        heading("DNS Resolution Process"),

        steps([
            "User types www.example.com in browser.",
            "Browser checks its cache for the IP.",
            "If not found, request is sent to local DNS resolver.",
            "Resolver queries the root DNS server.",
            "Root server directs to the TLD server (.com).",
            "TLD server directs to the authoritative server.",
            "Authoritative server returns the IP address.",
            "Browser connects to the server using the IP.",
        ]),

        heading("Email Protocols"),

        table(
            ["Protocol", "Purpose", "Direction"],
            [
                ["SMTP", "Sending email", "Client to server"],
                ["POP3", "Downloads and removes from server", "Server to client"],
                ["IMAP", "Reads emails while keeping on server", "Server to client"],
            ]
        ),

        heading("FTP - File Transfer Protocol"),

        list([
            "Used to upload and download files between client and server.",
            "Uses two connections: control (port 21) and data (port 20).",
            "Two modes: Active and Passive.",
            "Supports authentication with username and password.",
            "SFTP (Secure FTP) uses SSH for encryption.",
        ]),

        heading("DHCP - Dynamic Host Configuration Protocol"),

        text(
            "DHCP automatically assigns IP addresses and network configuration (subnet mask, gateway, DNS) to devices joining a network, eliminating manual configuration."
        ),

        steps([
            "DHCP Discover - Client broadcasts request.",
            "DHCP Offer - Server offers an IP address.",
            "DHCP Request - Client requests the offered IP.",
            "DHCP Acknowledge - Server confirms assignment.",
        ]),

        note(
            "The DORA process (Discover, Offer, Request, Acknowledge) is how DHCP assigns IP addresses to clients automatically.",
            "tip",
            "DORA Process"
        ),

        keyPoints([
            "HTTP/HTTPS is used for web communication.",
            "DNS resolves domain names to IP addresses.",
            "SMTP sends email; POP3 and IMAP receive.",
            "DHCP automatically assigns IPs using DORA process.",
            "SSH is secure; Telnet is not recommended.",
        ]),
    ],

    {
        summary:
            "Learn application layer protocols including HTTP, HTTPS, DNS, DHCP, SMTP, POP3, IMAP, FTP and SSH.",
        minutes: 13,
        tags: ["http", "dns", "dhcp", "protocols", "important"],

        mcqs: [
            mcq(
                "Which protocol is used for secure web browsing?",
                ["HTTP", "FTP", "HTTPS", "SMTP"],
                2,
                "HTTPS is HTTP with encryption via SSL/TLS."
            ),
            mcq(
                "DNS converts:",
                ["IP to MAC", "Domain to IP", "IP to domain", "URL to HTML"],
                1,
                "DNS resolves domain names to IP addresses."
            ),
            mcq(
                "SMTP is used for:",
                ["Receiving email", "Sending email", "File transfer", "Web browsing"],
                1,
                "SMTP is used to send emails."
            ),
            mcq(
                "DHCP uses which process?",
                ["ARP", "DORA", "SYN", "FIN"],
                1,
                "DHCP uses Discover-Offer-Request-Acknowledge (DORA)."
            ),
        ],

        questions: [
            qa(
                "Explain how DNS resolves a domain name to an IP address.",
                "When a user types a domain like www.example.com, the browser first checks its cache. If not found, the request goes to the local DNS resolver, usually provided by the ISP. The resolver contacts the root DNS server, which directs to the TLD server (.com). The TLD server directs to the authoritative name server for example.com, which returns the actual IP address. The resolver caches the result and returns it to the browser, which then connects to the web server. This hierarchical process happens in milliseconds.",
                4
            ),
            qa(
                "Explain email protocols SMTP, POP3 and IMAP.",
                "SMTP (Simple Mail Transfer Protocol) is used to send email from a client to a mail server or between mail servers. It uses port 25. POP3 (Post Office Protocol v3) downloads emails from the server to the client and typically removes them from the server; it uses port 110. IMAP (Internet Message Access Protocol) allows email management on the server, syncing across devices without deleting; it uses port 143. Today, IMAP is preferred over POP3 because it supports multiple devices and folder management.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — Network Security Fundamentals
========================================================= */

const networkSecurity = createTopic(
    "network-security-fundamentals",
    "Network Security Fundamentals",

    [
        definition(
            "Network Security",
            "Network security is the practice of protecting a computer network and its data from unauthorised access, misuse, modification or denial of service through hardware, software and policies."
        ),

        heading("CIA Triad"),

        table(
            ["Principle", "Meaning"],
            [
                ["Confidentiality", "Only authorised users access data"],
                ["Integrity", "Data is not altered without permission"],
                ["Availability", "Services are accessible when needed"],
            ]
        ),

        heading("Common Network Threats"),

        table(
            ["Threat", "Description"],
            [
                ["Virus", "Malicious program that spreads by attaching to files"],
                ["Worm", "Self-replicating program spreading through network"],
                ["Trojan", "Malicious code disguised as legitimate software"],
                ["Ransomware", "Encrypts data and demands payment"],
                ["Spyware", "Secretly collects user information"],
                ["Phishing", "Fake emails/websites to steal credentials"],
                ["DoS/DDoS", "Overloads server to make it unavailable"],
                ["Man-in-the-Middle", "Attacker intercepts communication"],
                ["SQL Injection", "Malicious SQL to attack database"],
                ["Brute Force", "Repeated login attempts to guess password"],
            ]
        ),

        heading("Security Mechanisms"),

        heading("Firewall"),

        definition(
            "Firewall",
            "A firewall is a network security device or software that monitors and controls incoming and outgoing traffic based on predefined security rules."
        ),

        list([
            "Blocks unauthorised access.",
            "Allows only trusted traffic.",
            "Types: Packet-filtering, Stateful, Proxy, Next-Gen.",
            "Can be hardware or software.",
        ]),

        heading("Encryption"),

        definition(
            "Encryption",
            "Encryption converts plain text data into unreadable cipher text using an algorithm and key, ensuring only authorised parties can read it."
        ),

        table(
            ["Type", "Description", "Example"],
            [
                ["Symmetric", "Same key for encryption and decryption", "AES, DES"],
                ["Asymmetric", "Public and private key pair", "RSA, ECC"],
                ["Hashing", "One-way conversion", "SHA-256, MD5"],
            ]
        ),

        heading("Authentication Methods"),

        list([
            "Password-based authentication.",
            "Two-Factor Authentication (2FA) using OTP.",
            "Biometric authentication (fingerprint, face).",
            "Digital certificates.",
            "Single Sign-On (SSO).",
            "Multi-Factor Authentication (MFA).",
        ]),

        heading("SSL / TLS"),

        text(
            "SSL (Secure Sockets Layer) and its successor TLS (Transport Layer Security) provide encryption for data transmitted between client and server. HTTPS uses TLS to secure web communication, protecting passwords, credit card details and personal information."
        ),

        heading("VPN - Virtual Private Network"),

        definition(
            "VPN",
            "A VPN creates a secure, encrypted tunnel over a public network like the internet, allowing users to access private resources safely."
        ),

        list([
            "Encrypts internet traffic.",
            "Hides real IP address.",
            "Enables secure remote work.",
            "Bypasses geo-restrictions.",
            "Common protocols: OpenVPN, IPSec, WireGuard.",
        ]),

        heading("Digital Signature"),

        text(
            "A digital signature verifies the authenticity and integrity of a digital message. The sender signs data with a private key, and the receiver verifies it with the sender's public key. It ensures non-repudiation."
        ),

        heading("Security Best Practices"),

        list([
            "Use strong, unique passwords.",
            "Enable two-factor authentication.",
            "Keep software and OS updated.",
            "Use firewalls and antivirus.",
            "Encrypt sensitive data.",
            "Regular backups of important data.",
            "Avoid clicking suspicious links.",
            "Use HTTPS websites only for sensitive info.",
            "Configure secure Wi-Fi with WPA3.",
            "Train users about phishing and social engineering.",
        ]),

        note(
            "The weakest link in network security is often the human user. No matter how strong the technology, social engineering can bypass it. Awareness training is essential.",
            "warning",
            "Human Factor"
        ),

        keyPoints([
            "CIA Triad: Confidentiality, Integrity, Availability.",
            "Firewall filters incoming and outgoing traffic.",
            "Encryption converts data into unreadable form.",
            "VPN creates a secure tunnel over public networks.",
            "Two-factor authentication greatly improves security.",
        ]),
    ],

    {
        summary:
            "Understand network security threats, CIA triad, firewalls, encryption, VPN, SSL/TLS and security best practices.",
        minutes: 12,
        tags: ["security", "encryption", "firewall", "vpn", "important"],

        mcqs: [
            mcq(
                "CIA in security stands for:",
                ["Central Intelligence Agency", "Confidentiality, Integrity, Availability", "Cipher, IP, Access", "Client, Internet, Access"],
                1,
                "CIA Triad is Confidentiality, Integrity and Availability."
            ),
            mcq(
                "Which attack overloads a server?",
                ["Phishing", "DoS", "Trojan", "Spyware"],
                1,
                "Denial of Service (DoS) attacks overload servers."
            ),
            mcq(
                "AES is an example of:",
                ["Asymmetric encryption", "Symmetric encryption", "Hashing", "Signature"],
                1,
                "AES is a symmetric encryption algorithm."
            ),
            mcq(
                "HTTPS uses which for security?",
                ["FTP", "TLS", "DHCP", "SMTP"],
                1,
                "HTTPS uses TLS (or SSL) for encryption."
            ),
        ],

        questions: [
            qa(
                "Explain the CIA triad of network security.",
                "The CIA triad is the foundation of network security. Confidentiality ensures that only authorised users can access sensitive information, achieved through encryption, passwords and access controls. Integrity ensures that data is not modified, altered or deleted by unauthorised parties, achieved using hashing and digital signatures. Availability ensures that authorised users can access services and data when needed, achieved through redundancy, backups and protection against DoS attacks. Together, these three principles form the core objectives of any security system.",
                4
            ),
            qa(
                "Explain firewall and its role in network security.",
                "A firewall is a network security device or software that monitors and controls incoming and outgoing traffic based on predefined security rules. It acts as a barrier between a trusted internal network and untrusted external networks like the internet. Firewalls block unauthorised access while allowing legitimate communication. Types include packet-filtering firewalls that check packet headers, stateful firewalls that track connections, proxy firewalls that act as intermediaries, and next-generation firewalls with deep inspection capabilities. Firewalls can be hardware, software or cloud-based, and are essential for protecting networks from threats.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 5 — Wireless Networks and Modern Trends
========================================================= */

const wirelessModern = createTopic(
    "wireless-networks-and-modern-trends",
    "Wireless Networks and Modern Trends",

    [
        definition(
            "Wireless Network",
            "A wireless network connects devices using radio waves or other wireless signals instead of physical cables, providing mobility and flexibility."
        ),

        heading("Types of Wireless Networks"),

        table(
            ["Type", "Coverage", "Example"],
            [
                ["WPAN", "Personal (10 m)", "Bluetooth, Zigbee"],
                ["WLAN", "Local (100 m)", "Wi-Fi"],
                ["WMAN", "Metropolitan", "WiMAX"],
                ["WWAN", "Wide (global)", "Cellular 4G, 5G"],
            ]
        ),

        heading("Wi-Fi Standards"),

        table(
            ["Standard", "Year", "Speed", "Frequency"],
            [
                ["802.11b", "1999", "11 Mbps", "2.4 GHz"],
                ["802.11g", "2003", "54 Mbps", "2.4 GHz"],
                ["802.11n (Wi-Fi 4)", "2009", "600 Mbps", "2.4/5 GHz"],
                ["802.11ac (Wi-Fi 5)", "2013", "3.5 Gbps", "5 GHz"],
                ["802.11ax (Wi-Fi 6)", "2019", "9.6 Gbps", "2.4/5/6 GHz"],
                ["802.11be (Wi-Fi 7)", "2024", "46 Gbps", "2.4/5/6 GHz"],
            ]
        ),

        heading("Wireless Security Protocols"),

        table(
            ["Protocol", "Year", "Security Level"],
            [
                ["WEP", "1997", "Weak, easily broken"],
                ["WPA", "2003", "Improved but outdated"],
                ["WPA2", "2004", "Strong, widely used"],
                ["WPA3", "2018", "Latest, most secure"],
            ]
        ),

        heading("Bluetooth"),

        list([
            "Short-range wireless technology (up to 10-100 m).",
            "Operates at 2.4 GHz.",
            "Used for headphones, keyboards, IoT devices.",
            "Bluetooth 5.x offers longer range and faster speed.",
            "Uses low power (BLE - Bluetooth Low Energy).",
        ]),

        heading("Cellular Networks"),

        table(
            ["Generation", "Speed", "Features"],
            [
                ["1G", "Analog voice", "Basic calling"],
                ["2G", "Up to 144 Kbps", "SMS, digital voice"],
                ["3G", "Up to 2 Mbps", "Mobile internet"],
                ["4G LTE", "Up to 1 Gbps", "HD video, gaming"],
                ["5G", "Up to 20 Gbps", "IoT, ultra-low latency"],
                ["6G (future)", "1 Tbps+", "AI, holographic"],
            ]
        ),

        heading("Modern Networking Trends"),

        heading("Cloud Computing"),

        text(
            "Cloud computing delivers computing services such as servers, storage, databases and software over the internet. Major providers include AWS, Azure, Google Cloud."
        ),

        heading("Internet of Things (IoT)"),

        text(
            "IoT connects everyday physical devices (sensors, appliances, wearables) to the internet, enabling data collection, automation and remote control. Applications include smart homes, smart cities, healthcare and agriculture."
        ),

        heading("Software Defined Networking (SDN)"),

        text(
            "SDN separates the control plane from the data plane, allowing networks to be managed programmatically through software. This enables dynamic, flexible and centralised network control."
        ),

        heading("Network Function Virtualization (NFV)"),

        text(
            "NFV replaces dedicated network hardware (firewalls, routers) with virtualised software running on standard servers, reducing cost and increasing flexibility."
        ),

        heading("5G Technology"),

        list([
            "Speed: up to 20 Gbps.",
            "Ultra-low latency (~1 ms).",
            "Massive device connectivity (IoT).",
            "Enables self-driving cars, AR/VR, smart cities.",
            "Uses mmWave and network slicing.",
        ]),

        heading("Edge Computing"),

        text(
            "Edge computing processes data closer to its source (at the edge of the network) rather than in centralised cloud data centers. This reduces latency and bandwidth use, essential for IoT and real-time applications."
        ),

        note(
            "5G and edge computing together enable applications like autonomous vehicles, remote surgery and real-time industrial automation that were previously impossible.",
            "info",
            "Future of Networks"
        ),

        keyPoints([
            "Wi-Fi standards have evolved from 802.11b to Wi-Fi 7.",
            "WPA3 is the latest and most secure Wi-Fi encryption.",
            "5G offers ultra-high speed and low latency.",
            "IoT connects billions of physical devices to the internet.",
            "SDN and NFV are revolutionising network management.",
        ]),
    ],

    {
        summary:
            "Learn wireless networks, Wi-Fi standards, cellular generations, and modern trends like 5G, IoT, SDN and cloud computing.",
        minutes: 12,
        tags: ["wireless", "wifi", "5g", "iot", "trends"],

        mcqs: [
            mcq(
                "Which is the most secure Wi-Fi protocol?",
                ["WEP", "WPA", "WPA2", "WPA3"],
                3,
                "WPA3 is the latest and most secure protocol."
            ),
            mcq(
                "5G offers ultra-low latency of approximately:",
                ["100 ms", "50 ms", "10 ms", "1 ms"],
                3,
                "5G provides latency around 1 millisecond."
            ),
            mcq(
                "IoT stands for:",
                ["Internet of Technology", "Internet of Things", "Internal Online Tech", "Interconnected Online Tools"],
                1,
                "IoT means Internet of Things."
            ),
            mcq(
                "Bluetooth operates at:",
                ["2.4 GHz", "5 GHz", "6 GHz", "60 GHz"],
                0,
                "Bluetooth operates at 2.4 GHz."
            ),
        ],

        questions: [
            qa(
                "Explain the evolution of cellular networks from 1G to 5G.",
                "Cellular networks have evolved dramatically. 1G in the 1980s provided basic analog voice calls. 2G in the 1990s introduced digital voice and SMS with speeds up to 144 Kbps. 3G in the 2000s enabled mobile internet with speeds up to 2 Mbps, allowing video calling and web browsing. 4G LTE offered speeds up to 1 Gbps, supporting HD video streaming, gaming and mobile apps. 5G, introduced around 2019, provides speeds up to 20 Gbps with ultra-low latency of about 1 ms, supporting IoT, autonomous vehicles, AR/VR and smart cities. Future 6G is expected to reach 1 Tbps with AI-driven capabilities.",
                4
            ),
            qa(
                "What is IoT? Explain its applications.",
                "The Internet of Things (IoT) refers to the network of physical devices embedded with sensors, software and connectivity that allows them to collect and exchange data over the internet. IoT devices include smart appliances, wearables, industrial sensors and vehicles. Applications include smart homes with voice assistants and connected appliances, smart cities with traffic and pollution monitoring, healthcare with remote patient monitoring and wearable health trackers, agriculture with soil and weather sensors, and industry with predictive maintenance and automation. IoT combined with 5G and edge computing is transforming many industries.",
                4
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit2Topics = [
    ipAddressing,
    routingSwitching,
    applicationProtocols,
    networkSecurity,
    wirelessModern,
];