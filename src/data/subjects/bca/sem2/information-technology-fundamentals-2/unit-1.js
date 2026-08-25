/* =========================================================
   BCA � SEM 2 � Information Technology Fundamentals - II
   UNIT 1 � Operating Systems, Networking and the Internet
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
   TOPIC 1 � Operating Systems Revisited
========================================================= */

const operatingSystems = createTopic(
    "operating-systems-revisited",
    "Operating Systems Revisited",

    [
        definition(
            "Operating System",
            "A system software that acts as an interface between the user and the computer hardware, manages hardware and software resources, and provides common services for programs."
        ),

        heading("Functions of an Operating System"),

        list([
            "Process management � creating, scheduling and terminating processes.",
            "Memory management � allocating and deallocating RAM to processes.",
            "File system management � creating, deleting and organising files.",
            "Device management � controlling I/O devices through drivers.",
            "Security and protection � authentication, authorisation, firewall.",
            "User interface � command line or graphical interface.",
        ]),

        heading("Types of Operating Systems"),

        table(
            ["Type", "Examples", "Use"],
            [
                ["Batch", "Early mainframes", "Runs jobs in batches without user interaction"],
                ["Time sharing", "UNIX, Linux", "Many users share the CPU"],
                ["Real time", "RTOS, VxWorks", "Embedded systems with strict deadlines"],
                ["Network", "Windows Server, Linux", "Manages network resources"],
                ["Mobile", "Android, iOS", "Smartphones and tablets"],
                ["Single user single task", "MS DOS", "One user, one program at a time"],
                ["Single user multi task", "Windows, macOS", "One user, many programs"],
                ["Multi user", "UNIX, Linux", "Many users at the same time"],
            ]
        ),

        heading("Popular Operating Systems"),

        list([
            "Windows � most common desktop OS, made by Microsoft.",
            "macOS � made by Apple, used on Mac computers.",
            "Linux � open source, used in servers, Android and supercomputers.",
            "Android � Linux based, made by Google, used on most smartphones.",
            "iOS � made by Apple, used on iPhones and iPads.",
            "ChromeOS � made by Google, used in Chromebooks.",
        ]),

        note(
            "Linux powers more than 90% of the public cloud and almost all of the top 500 supercomputers. Android, the most popular mobile OS, is built on the Linux kernel.",
            "tip",
            "Linux Power"
        ),

        heading("Process and Thread"),

        definition(
            "Process",
            "An independent program in execution with its own memory space. A process contains the code, data and the state of the CPU."
        ),

        definition(
            "Thread",
            "A lightweight unit of execution within a process. Multiple threads share the same memory but have their own stack and registers."
        ),

        table(
            ["Basis", "Process", "Thread"],
            [
                ["Memory", "Separate", "Shared within process"],
                ["Creation", "Expensive", "Cheap"],
                ["Communication", "Through IPC", "Direct via shared memory"],
                ["Context switch", "Slower", "Faster"],
                ["Crash effect", "One process dies, others safe", "One thread dying can kill the process"],
            ]
        ),

        heading("File Systems"),

        list([
            "FAT32 � old, simple, supported everywhere, max file size 4 GB.",
            "NTFS � Windows default, supports permissions, encryption and large files.",
            "ext4 � Linux default, fast journaling file system.",
            "APFS � Apple file system, optimised for flash and SSDs.",
            "exFAT � modern, lightweight, used for cross platform pen drives.",
        ]),

        keyPoints([
            "OS is the interface between user and hardware.",
            "Functions include process, memory, file and device management.",
            "Linux is the most used OS in servers and mobile.",
            "Threads share memory; processes do not.",
            "NTFS, ext4 and APFS are common modern file systems.",
        ]),
    ],

{
    summary:
    "Understand operating systems, their types, popular examples, processes vs threads and file systems.",
        minutes: 10,
            tags: ["os", "process", "thread", "important"],

                mcqs: [
                    mcq(
                        "Android is based on:",
                        ["Windows", "Linux", "UNIX System V", "macOS"],
                        1,
                        "Android is built on the Linux kernel."
                    ),
                    mcq(
                        "Which is NOT a function of an OS?",
                        ["Process management", "Memory management", "Writing programs", "File management"],
                        2,
                        "Writing programs is the job of the developer, not the OS."
                    ),
                    mcq(
                        "Threads share:",
                        ["Different memory", "Same memory within a process", "Different files", "Different CPUs always"],
                        1,
                        "Threads of a process share the same memory."
                    ),
                    mcq(
                        "NTFS is the default file system of:",
                        ["Linux", "Windows", "macOS", "Android"],
                        1,
                        "NTFS is the default file system in modern Windows."
                    ),
                    mcq(
                        "ext4 is the default file system of:",
                        ["Windows", "macOS", "Linux", "Android"],
                        2,
                        "ext4 is the default file system of Linux."
                    ),
                    mcq(
                        "A real time OS is used in:",
                        ["Desktops", "Embedded systems", "Servers", "Phones only"],
                        1,
                        "RTOS is used in embedded systems with strict deadlines."
                    ),
                ],

                    questions: [
                        qa(
                            "Define an operating system and list its main functions.",
                            "An operating system is system software that acts as an interface between the user and the hardware. It manages all the resources of the computer and provides common services to application programs. Its main functions are process management, which creates and schedules processes; memory management, which allocates and reclaims RAM; file system management, which organises files and folders; device management, which controls I/O devices through drivers; security and protection through authentication and authorisation; and a user interface, which may be command line or graphical.",
                            4
                        ),
                        qa(
                            "Differentiate between a process and a thread.",
                            "A process is an independent program in execution with its own memory space, while a thread is a lightweight unit of execution within a process. Multiple threads of the same process share the same memory but have their own stack and registers. Processes are isolated from each other and need special techniques such as pipes or sockets to communicate, while threads communicate directly through shared variables. Creating a process is expensive because the whole memory is allocated, while creating a thread is cheap. A bug in one process cannot affect another, but a bug in one thread can crash the entire process.",
                            4
                        ),
                        qa(
                            "List the popular operating systems today.",
                            "The most popular operating systems today are Windows for personal computers, made by Microsoft; macOS for Mac computers, made by Apple; Linux, an open source OS widely used in servers, the cloud and supercomputers; Android, based on Linux, used on most smartphones; iOS, made by Apple, used on iPhones and iPads; and ChromeOS, made by Google, used in Chromebooks. Each has its own strengths and target audience, but Linux is by far the most widely deployed because it powers the cloud and the mobile market.",
                            4
                        ),
                        qa(
                            "What is a file system? Name three common file systems.",
                            "A file system is the part of the operating system that organises data on a storage device into files and folders and keeps track of their names, locations, sizes and permissions. Three common file systems are NTFS, used by Windows, which supports permissions, encryption and large files; ext4, used by Linux, which is fast and journaled; and APFS, used by Apple, which is optimised for flash and SSD storage. Older systems like FAT32 are still used for compatibility with small USB drives.",
                            4
                        ),
                    ],
  }
);

/* =========================================================
   TOPIC 2 � Computer Networks Basics
========================================================= */

const networksBasics = createTopic(
    "computer-networks-basics",
    "Computer Networks Basics",

    [
        definition(
            "Computer Network",
            "A group of two or more computers connected together to share data, hardware and software resources."
        ),


    list([
        "Resource sharing: printers, files, internet connection.",
        "Communication: email, chat, video calls.",
        "Centralised management: software updates, backups.",
        "Data sharing: common database for the whole organisation.",
        "Reliability: backup servers take over if one fails.",
    ]),


table(
    ["Type", "Full Form", "Range"],
    [
        ["PAN", "Personal Area Network", "A few meters, e.g. Bluetooth"],
        ["LAN", "Local Area Network", "Within a building or campus"],
        ["MAN", "Metropolitan Area Network", "Across a city"],
        ["WAN", "Wide Area Network", "Across a country or the world"],
        ["WLAN", "Wireless LAN", "Wi Fi within a building"],
        ["VPN", "Virtual Private Network", "Secure tunnel over a public network"],
    ]
),


table(
    ["Topology", "Layout", "Advantage", "Disadvantage"],
    [
        ["Bus", "All nodes share one cable", "Simple, cheap", "If cable breaks, whole network fails"],
        ["Star", "All nodes connect to a central hub", "Easy to add nodes", "Hub is single point of failure"],
        ["Ring", "Each node connects to two others in a circle", "Equal access", "One break can stop the network"],
        ["Mesh", "Each node connects to many others", "Very reliable", "Expensive and complex"],
        ["Tree", "Hierarchy of stars", "Scalable", "Root failure affects many"],
        ["Hybrid", "Combination of two or more", "Flexible", "Difficult to manage"],
    ]
),


table(
    ["Type", "Examples", "Property"],
    [
        ["Wired (Guided)", "Twisted pair, Coaxial, Fiber optic", "Fast, secure, not portable"],
        ["Wireless (Unguided)", "Radio, Microwave, Infrared, Satellite", "Portable, can be intercepted"],
    ]
),


table(
    ["Device", "Function"],
    [
        ["Hub", "Connects devices in a star, broadcasts to all"],
        ["Switch", "Connects devices, sends data only to the correct one using MAC address"],
        ["Router", "Connects different networks, uses IP address"],
        ["Modem", "Converts digital data to analog for telephone line and back"],
        ["Access Point", "Allows Wi Fi devices to join a wired network"],
        ["Firewall", "Filters traffic based on security rules"],
        ["Gateway", "Connects two networks using different protocols"],
    ]
),

    note(
        "A hub and a switch look similar, but a hub sends data to every connected device while a switch sends data only to the correct device. Switches have almost completely replaced hubs in modern networks.",
        "exam",
        "Frequently Asked"
    ),


table(
    ["OSI Layer", "Function", "TCP/IP Layer"],
    [
        ["7 Application", "User interface, HTTP, SMTP, FTP", "Application"],
        ["6 Presentation", "Encryption, compression, data format", "Application"],
        ["5 Session", "Establish, manage, end sessions", "Application"],
        ["4 Transport", "Reliable delivery, TCP, UDP, port numbers", "Transport"],
        ["3 Network", "Logical addressing, routing, IP", "Internet"],
        ["2 Data Link", "MAC addressing, frames, error detection", "Network Access"],
        ["1 Physical", "Bits on the wire, voltage, cable", "Network Access"],
    ]
),


definition(
    "IP Address",
    "A unique 32 bit (IPv4) or 128 bit (IPv6) number assigned to every device on a network. It is used to identify the device and to route data to it."
),

    list([
        "IPv4: 32 bits, written as four decimal numbers, e.g. 192.168.1.1.",
        "IPv6: 128 bits, written in hexadecimal, e.g. 2001:db8::1.",
        "Private IPs: 10.x.x.x, 172.16.x.x to 172.31.x.x, 192.168.x.x.",
        "Public IP: visible on the internet, assigned by ISP.",
        "Loopback: 127.0.0.1, refers to the same machine.",
    ]),

    keyPoints([
        "LAN is small, WAN is large, MAN is in between.",
        "Star is the most common modern topology.",
        "Switch is smarter than hub, router connects networks.",
        "OSI has 7 layers; TCP/IP has 4.",
        "IPv4 is 32 bit, IPv6 is 128 bit.",
        ]),
    ],

    {
        summary:
    "Master computer networks, types, topologies, devices, OSI/TCP/IP models and IP addressing.",
        minutes: 12,
            tags: ["network", "topology", "OSI", "IP", "important"],

                mcqs: [
                    mcq(
                        "LAN stands for:",
                        ["Large Area Network", "Local Area Network", "Long Access Network", "Local Address Node"],
                        1,
                        "LAN is Local Area Network, within a building or campus."
                    ),
                    mcq(
                        "Which device connects different networks?",
                        ["Hub", "Switch", "Router", "Repeater"],
                        2,
                        "A router connects networks using IP addresses."
                    ),
                    mcq(
                        "OSI model has how many layers?",
                        ["4", "5", "6", "7"],
                        3,
                        "The OSI model has 7 layers."
                    ),
                    mcq(
                        "TCP/IP has how many layers?",
                        ["4", "5", "6", "7"],
                        0,
                        "TCP/IP is usually described as having 4 layers."
                    ),
                    mcq(
                        "IPv4 address is:",
                        ["16 bit", "32 bit", "64 bit", "128 bit"],
                        1,
                        "IPv4 is a 32 bit address."
                    ),
                    mcq(
                        "The device that filters traffic is:",
                        ["Hub", "Switch", "Router", "Firewall"],
                        3,
                        "A firewall filters traffic based on security rules."
                    ),
                ],

                    questions: [
                        qa(
                            "Differentiate between LAN, MAN and WAN.",
                            "A LAN, or Local Area Network, covers a small area like a room, building or campus and is usually privately owned. A MAN, or Metropolitan Area Network, covers an entire city and is often built by a single organisation or a group. A WAN, or Wide Area Network, covers a large geographical area, even the whole world. The internet is the largest WAN. LANs offer the highest speed and lowest cost, while WANs are slower and more expensive because they use leased lines and satellite links.",
                            4
                        ),
                        qa(
                            "Differentiate between a hub and a switch.",
                            "A hub is a simple device that broadcasts any incoming data to every connected device, so all devices share the same bandwidth. A switch is smarter: it learns the MAC address of each connected device and forwards each packet only to the intended recipient, so each device gets its own dedicated bandwidth. Switches are far more efficient and secure, and have almost completely replaced hubs in modern networks. A hub works at the physical layer, while a switch works at the data link layer of the OSI model.",
                            4
                        ),
                        qa(
                            "Explain the OSI model with its layers.",
                            "The OSI model has 7 layers, from top to bottom. Application gives the user interface, such as HTTP and SMTP. Presentation handles encryption, compression and data format. Session establishes, manages and ends connections between applications. Transport provides reliable or unreliable delivery using TCP or UDP and uses port numbers. Network provides logical addressing and routing using IP. Data Link uses MAC addresses and frames and provides error detection. Physical transmits raw bits over the cable or wireless medium. Each layer provides services to the layer above it and uses services of the layer below it.",
                            4
                        ),
                        qa(
                            "What is an IP address? Differentiate between IPv4 and IPv6.",
                            "An IP address is a unique number assigned to every device on a network so that data can be routed to it. IPv4 is a 32 bit address written as four decimal numbers from 0 to 255, such as 192.168.1.1, giving about 4.3 billion unique addresses, which has been exhausted. IPv6 is a 128 bit address written in hexadecimal, separated by colons, such as 2001:db8::1, and provides an almost infinite number of unique addresses, along with built in security and better routing.",
                            4
                        ),
                    ],
  }
);

/* =========================================================
   TOPIC 3 � Internet and Web Services
========================================================= */

const internetWeb = createTopic(
    "internet-and-web-services",
    "Internet and Web Services",

    [
        definition(
            "Internet",
            "A global network of interconnected computer networks that use the standard Internet Protocol Suite (TCP/IP) to communicate between devices and networks around the world."
        ),


    list([
        "Email � electronic mail, using SMTP, POP3 and IMAP.",
        "WWW � World Wide Web, pages viewed in a browser using HTTP and HTTPS.",
        "FTP � File Transfer Protocol, to upload and download files.",
        "Telnet and SSH � remote login to another computer.",
        "DNS � Domain Name System, translates names to IP addresses.",
        "Chat and Instant Messaging � WhatsApp, Telegram, Slack.",
        "Video conferencing � Zoom, Google Meet, Microsoft Teams.",
        "Cloud storage � Google Drive, Dropbox, OneDrive.",
    ]),


definition(
    "Client Server Model",
    "A model in which a client program requests a service and a server program provides it. The client and the server communicate over a network, usually using TCP/IP."
),

    code(
        `Client                  Server
   |                        |
   |----- request --------->|
   |                        |
   |<---- response ---------|
   |                        |
`,
        "text",
        "Client server flow"
    ),

    heading("Domain Name System (DNS)"),

list([
    "Translates human friendly names like google.com to IP addresses like 142.250.190.78.",
    "Uses a hierarchy of root servers, TLD servers and authoritative servers.",
    "Top level domains: .com, .org, .net, .edu, .in, .uk.",
    "Country code TLDs: .in for India, .uk for United Kingdom.",
    "DNS lookup takes a few milliseconds and is cached at multiple levels.",
]),


list([
    "HTTP � HyperText Transfer Protocol, the foundation of the web.",
    "HTTPS � HTTP Secure, encrypts data using SSL or TLS.",
    "Methods: GET, POST, PUT, DELETE, PATCH.",
    "Status codes: 200 OK, 404 Not Found, 500 Server Error.",
    "Default port: HTTP 80, HTTPS 443.",
]),


definition(
    "World Wide Web",
    "An information system on the internet that allows documents and other resources to be accessed over HTTP. Invented by Tim Berners Lee in 1989 at CERN."
),

    list([
        "Web page � a single document on the web.",
        "Website � a collection of related web pages.",
        "Web browser � software to view web pages (Chrome, Firefox, Safari).",
        "Web server � software that serves web pages (Apache, Nginx, IIS).",
        "URL � Uniform Resource Locator, the address of a web resource.",
        "Search engine � indexes web pages and lets you search them (Google, Bing).",
    ]),


code(
    `https://www.example.com:443/path/page.html?query=value#section
+---+  +------------------------+ +---++---------++-----++-----+
scheme   domain          port      path    query   fragment
`,
    "text",
    "URL structure"
),


list([
    "Crawling � bots visit pages and follow links.",
    "Indexing � pages are stored in a huge database.",
    "Ranking � results are ordered by relevance and authority (PageRank).",
    "SEO � Search Engine Optimization, techniques to rank higher.",
    "Popular search engines: Google, Bing, Yahoo, DuckDuckGo.",
]),


definition(
    "Cloud Computing",
    "The delivery of computing services such as servers, storage, databases, networking, software and analytics over the internet, on a pay as you go basis."
),

    table(
        ["Service", "Full Form", "Examples"],
        [
            ["IaaS", "Infrastructure as a Service", "AWS EC2, Google Compute, Azure VM"],
            ["PaaS", "Platform as a Service", "Heroku, Google App Engine, Azure App Service"],
            ["SaaS", "Software as a Service", "Gmail, Office 365, Salesforce, Slack"],
        ]
    ),

    note(
        "Public cloud providers like AWS, Azure and Google Cloud run huge data centres all over the world. Most modern applications, including Netflix, Instagram and even this chat, are powered by cloud computing.",
        "tip",
        "Cloud Today"
    ),

    keyPoints([
        "Internet is a global network of networks using TCP/IP.",
        "DNS translates names to IP addresses.",
        "HTTP is the language of the web; HTTPS adds encryption.",
        "URL has scheme, domain, path, query and fragment.",
        "Cloud offers IaaS, PaaS and SaaS.",
        ]),
    ],

    {
        summary:
    "Master internet services, DNS, HTTP/HTTPS, the World Wide Web, search engines and cloud computing basics.",
        minutes: 11,
            tags: ["internet", "dns", "http", "cloud", "important"],

                mcqs: [
                    mcq(
                        "DNS translates:",
                        ["IP to MAC", "Domain to IP", "Port to IP", "Email to IP"],
                        1,
                        "DNS resolves a domain name to an IP address."
                    ),
                    mcq(
                        "HTTPS stands for:",
                        ["HyperText Transfer Protocol Secure", "High Tech Transfer Protocol", "Hyper Terminal Protocol Secure", "Host Transfer Protocol"],
                        0,
                        "HTTPS is HTTP over SSL or TLS."
                    ),
                    mcq(
                        "WWW was invented by:",
                        ["Bill Gates", "Tim Berners Lee", "Vint Cerf", "Steve Jobs"],
                        1,
                        "Tim Berners Lee invented the World Wide Web in 1989."
                    ),
                    mcq(
                        "Default port for HTTPS:",
                        ["80", "443", "21", "25"],
                        1,
                        "HTTPS uses port 443 by default."
                    ),
                    mcq(
                        "IaaS stands for:",
                        ["Internet as a Service", "Infrastructure as a Service", "Internet and Access Service", "Internal Architecture Service"],
                        1,
                        "IaaS provides virtualised computing resources over the internet."
                    ),
                    mcq(
                        "Gmail is an example of:",
                        ["IaaS", "PaaS", "SaaS", "DaaS"],
                        2,
                        "Gmail is a Software as a Service application."
                    ),
                ],

                    questions: [
                        qa(
                            "Explain the working of DNS.",
                            "When you type a domain name like example.com in the browser, the operating system first checks its local cache. If not found, it asks a recursive DNS resolver, usually provided by the ISP. The resolver checks its cache and if the answer is not there, it queries the root server, which points it to the appropriate TLD server such as .com. The TLD server returns the address of the authoritative name server for the domain, and that server returns the IP address. The IP is cached at multiple levels for future use and returned to the browser, which then makes an HTTP request to the IP.",
                            4
                        ),
                        qa(
                            "Differentiate between HTTP and HTTPS.",
                            "HTTP is the original protocol of the web, sending data in plain text. It is fast but anyone who intercepts the traffic can read it. HTTPS is HTTP over an encrypted channel using SSL or TLS. The connection is authenticated by a digital certificate issued by a trusted authority, and all data exchanged is encrypted, so it cannot be read by an attacker. Modern browsers mark HTTP sites as Not Secure, and most major sites use HTTPS by default. The default port for HTTP is 80 and for HTTPS is 443.",
                            4
                        ),
                        qa(
                            "Explain the three service models of cloud computing.",
                            "The three main service models are IaaS, PaaS and SaaS. IaaS, or Infrastructure as a Service, provides raw computing resources like virtual machines, storage and networks. The user manages the OS and applications. Examples are AWS EC2 and Google Compute Engine. PaaS, or Platform as a Service, provides a platform on which the user can develop and deploy applications without managing the underlying infrastructure. Examples are Heroku and Google App Engine. SaaS, or Software as a Service, delivers ready to use software over the internet, such as Gmail, Office 365 and Salesforce.",
                            4
                        ),
                        qa(
                            "What is a search engine? How does it work?",
                            "A search engine is a software system that searches the World Wide Web and returns relevant results for a query. Examples are Google, Bing and DuckDuckGo. It works in three main stages. Crawling uses bots called spiders to visit web pages, follow links and collect their content. Indexing stores the content in a huge database organised by keywords and topics. Ranking, when a user types a query, ranks the matching pages using algorithms like PageRank, which considers relevance, authority and freshness. The best results are shown on the first page.",
                            4
                        ),
                    ],
  }
);

/* =========================================================
   TOPIC 4 � Cyber Security Basics
========================================================= */

const cyberSecurity = createTopic(
    "cyber-security-basics",
    "Cyber Security Basics",

    [
        definition(
            "Cyber Security",
            "The practice of protecting systems, networks, programs, devices and data from digital attacks, unauthorised access, damage or theft."
        ),


    list([
        "Data breaches can leak millions of personal records.",
        "Ransomware can lock an organisation out of its own files.",
        "Phishing can steal passwords and credit card details.",
        "Attacks on critical infrastructure can disrupt hospitals, power and water.",
        "Cybercrime costs the world trillions of dollars every year.",
    ]),


table(
    ["Attack", "Description"],
    [
        ["Malware", "Malicious software such as virus, worm, trojan, ransomware"],
        ["Phishing", "Fake emails or sites that trick users into giving information"],
        ["Man in the middle", "Attacker secretly intercepts communication"],
        ["Denial of service", "Floods a server with traffic to make it unavailable"],
        ["SQL injection", "Inserts malicious SQL into a query to read or modify data"],
        ["Password attack", "Brute force, dictionary or credential stuffing"],
        ["Zero day", "Exploits an unknown vulnerability before a patch is released"],
        ["Insider threat", "Malicious or careless employee causes damage"],
    ]
),


table(
    ["Type", "Description"],
    [
        ["Virus", "Attaches to a file, spreads when the file is run"],
        ["Worm", "Spreads on its own over the network"],
        ["Trojan", "Looks legitimate, hides malicious code inside"],
        ["Spyware", "Secretly watches the user and sends data to attacker"],
        ["Ransomware", "Encrypts files and demands ransom for the key"],
        ["Adware", "Shows unwanted advertisements"],
        ["Rootkit", "Hides itself and other malware from the OS"],
        ["Keylogger", "Records every keystroke and sends it to attacker"],
    ]
),

    note(
        "The first computer virus, called Creeper, was written in 1971 and simply displayed the message 'I'm the creeper, catch me if you can!'. The first antivirus, Reaper, was created to remove it.",
        "exam",
        "Frequently Asked"
    ),


list([
    "Antivirus � detects and removes known malware.",
    "Firewall � blocks unauthorised traffic at the network boundary.",
    "IDS / IPS � Intrusion Detection or Prevention System.",
    "VPN � encrypts traffic on public networks.",
    "Password manager � generates and stores strong passwords.",
    "Multi factor authentication � adds a second factor beyond password.",
    "Encryption � protects data at rest and in transit.",
]),


list([
    "Use strong, unique passwords for every account.",
    "Enable two factor authentication on all important accounts.",
    "Keep the operating system, browser and apps up to date.",
    "Do not click on links or attachments in unexpected emails.",
    "Back up important data regularly to an external drive or cloud.",
    "Use a reputable antivirus and keep it updated.",
    "Be cautious on public Wi Fi; use a VPN.",
    "Lock your screen when you step away from your computer.",
]),


list([
    "Information Technology Act, 2000 � main cyber law in India.",
    "Sections 66, 66A to 69 deal with offences and penalties.",
    "Computer Emergency Response Team (CERT-In) is the national agency.",
    "GDPR in Europe protects personal data and privacy.",
    "Ethics: do not hack, do not spread rumours, respect privacy.",
]),

    keyPoints([
        "Cyber security protects systems, networks and data from attack.",
        "Phishing, malware and DoS are the most common attacks.",
        "Use strong passwords and enable two factor authentication.",
        "Keep software updated and back up data regularly.",
        "IT Act 2000 is the main cyber law in India.",
        ]),
    ],

    {
        summary:
    "Master cyber security threats, malware types, tools, user best practices and the IT Act.",
        minutes: 10,
            tags: ["security", "malware", "phishing", "important"],

                mcqs: [
                    mcq(
                        "Phishing is:",
                        ["A type of malware", "Fake emails or sites to steal data", "A firewall", "An OS"],
                        1,
                        "Phishing tricks users into giving up credentials or data."
                    ),
                    mcq(
                        "A virus is:",
                        ["Self spreading on network", "Attached to a file, needs host", "Encrypted file", "Hardware"],
                        1,
                        "A virus attaches to a file and spreads when the file is run."
                    ),
                    mcq(
                        "Ransomware:",
                        ["Steals data", "Encrypts files and asks for money", "Shows ads", "Spams email"],
                        1,
                        "Ransomware encrypts files and demands ransom for the key."
                    ),
                    mcq(
                        "A firewall:",
                        ["Encrypts data", "Filters network traffic", "Removes viruses", "Cools the CPU"],
                        1,
                        "A firewall filters traffic based on security rules."
                    ),
                    mcq(
                        "IT Act of India was passed in:",
                        ["1991", "2000", "2010", "2015"],
                        1,
                        "The Information Technology Act was passed in 2000."
                    ),
                    mcq(
                        "Two factor authentication requires:",
                        ["One password", "Password plus another factor", "Just a fingerprint", "Just a phone"],
                        1,
                        "2FA combines two different factors such as password and OTP."
                    ),
                ],

                    questions: [
                        qa(
                            "Differentiate between a virus and a worm.",
                            "A virus is a piece of malicious code that attaches itself to a legitimate file or program and spreads only when the infected file is run by the user. A worm is a self contained program that can spread on its own over a network without any user action. A virus needs a host file, while a worm does not. A worm typically infects many machines quickly, while a virus spreads more slowly but can do more damage to the host file. Both can carry a payload such as ransomware.",
                            4
                        ),
                        qa(
                            "Explain phishing with an example.",
                            "Phishing is a social engineering attack in which the attacker sends a fake email or creates a fake website that looks like a real one, to trick the user into entering their password, credit card or personal data. For example, an email appears to come from the bank and asks the user to click a link to verify their account. The link goes to a fake site that looks like the real bank. The user types their credentials, which are sent to the attacker. The remedy is to check the URL carefully, enable two factor authentication and never click suspicious links.",
                            4
                        ),
                        qa(
                            "What is two factor authentication? Why is it important?",
                            "Two factor authentication, or 2FA, is a security mechanism that requires the user to provide two different factors to log in, typically something they know (a password) and something they have (a phone or token). Even if the password is stolen, the attacker cannot log in without the second factor. 2FA drastically reduces the success of phishing and password breaches. It is now considered a basic security practice for email, banking and any sensitive account, and is enabled with a single tap in most modern services.",
                            4
                        ),
                        qa(
                            "Explain the IT Act 2000 of India.",
                            "The Information Technology Act 2000 is the primary law in India that deals with cybercrime, e-commerce, digital signatures and data protection. It gives legal recognition to electronic records and digital signatures, defines offences such as hacking, publishing obscene material and identity theft, and prescribes penalties up to several years of imprisonment. It also established the office of the Controller of Certifying Authorities and empowered the police to investigate cyber offences. The Act was amended in 2008 to add sections on data privacy, child pornography and terrorism.",
                            4
                        ),
                    ],
  }
);

/* =========================================================
   TOPIC 5 � Emerging Technologies
========================================================= */

const emergingTech = createTopic(
    "emerging-technologies",
    "Emerging Technologies",

    [
        definition(
            "Emerging Technology",
            "A technology that is currently being developed or will be developed over the next five to ten years and will significantly alter the way people live and work."
        ),

        heading("Artificial Intelligence (AI)"),

    definition(
        "Artificial Intelligence",
        "The ability of a computer or a robot to perform tasks that normally require human intelligence, such as learning, reasoning and problem solving."
    ),

        list([
            "Machine Learning � systems learn from data instead of being explicitly programmed.",
            "Deep Learning � uses neural networks with many layers for vision and speech.",
            "Natural Language Processing � understands and generates human language.",
            "Computer Vision � recognises objects and faces in images and video.",
            "Generative AI � creates new content such as text, images and code.",
        ]),

        heading("Internet of Things (IoT)"),

definition(
    "Internet of Things",
    "A network of physical objects, called things, embedded with sensors, software and connectivity that allows them to collect and exchange data over the internet."
),

    list([
        "Smart home: lights, fans, ACs controlled by phone.",
        "Wearables: smart watches, fitness bands.",
        "Smart city: traffic lights, parking, waste management.",
        "Industrial IoT: sensors on machines for predictive maintenance.",
        "Healthcare: remote patient monitoring.",
    ]),


definition(
    "Big Data",
    "Extremely large data sets that may be analysed computationally to reveal patterns, trends and associations, especially relating to human behaviour and interactions."
),

    list([
        "Three Vs: Volume, Velocity, Variety.",
        "Tools: Hadoop, Spark, NoSQL databases.",
        "Used in business intelligence, healthcare, finance and science.",
    ]),


definition(
    "Blockchain",
    "A distributed, decentralised ledger that records transactions across many computers in a way that cannot be changed retroactively without altering all subsequent blocks."
),

    list([
        "Each block contains a hash of the previous block, a timestamp and the transaction data.",
        "Used in cryptocurrencies such as Bitcoin and Ethereum.",
        "Used in supply chain, voting, identity and smart contracts.",
    ]),


list([
    "Cloud computing processes data in large remote data centres.",
    "Edge computing processes data close to where it is generated, for faster response.",
    "Used together in IoT to balance latency, bandwidth and cost.",
]),


list([
    "5G offers very high speed, low latency and massive device density.",
    "Enables self driving cars, remote surgery and smart cities.",
    "6G research is underway, aiming for even higher speed and AI integration.",
]),


list([
    "AR overlays digital information on the real world, e.g. Pokemon Go.",
    "VR creates a fully immersive digital world, e.g. games and training.",
    "MR mixes real and virtual objects in real time.",
    "Used in gaming, education, training and design.",
]),


definition(
    "Quantum Computing",
    "A type of computing that uses quantum bits or qubits, which can be 0, 1 or both at the same time, allowing certain problems to be solved much faster than classical computers."
),

    list([
        "Uses superposition and entanglement.",
        "Promises breakthroughs in cryptography, drug discovery and optimisation.",
        "Still in early stage; companies like IBM, Google and Microsoft are leading research.",
    ]),


list([
    "AI bias and fairness.",
    "Privacy in the age of surveillance.",
    "Job displacement due to automation.",
    "Misinformation and deepfakes.",
    "Energy and environmental impact.",
]),

    keyPoints([
        "AI, IoT, Big Data, Blockchain and 5G are the top emerging technologies.",
        "Big Data is defined by Volume, Velocity and Variety.",
        "Blockchain is a distributed, immutable ledger.",
        "Edge computing brings processing close to the data source.",
        "Ethics must guide the design and use of all emerging tech.",
        ]),
    ],

    {
        summary:
    "Survey the most important emerging technologies, their uses, opportunities and ethical concerns.",
        minutes: 11,
            tags: ["ai", "iot", "blockchain", "big-data", "important"],

                mcqs: [
                    mcq(
                        "The three Vs of Big Data are:",
                        ["Volume, Variety, Velocity", "Value, Vision, Voice", "Video, VR, Voice", "Variety, Vision, Value"],
                        0,
                        "The three Vs are Volume, Velocity and Variety."
                    ),
                    mcq(
                        "IoT stands for:",
                        ["Internet of Things", "Internet of Tools", "Interface of Technology", "Inline of Things"],
                        0,
                        "IoT is the Internet of Things."
                    ),
                    mcq(
                        "Bitcoin is based on:",
                        ["AI", "Blockchain", "Cloud", "5G"],
                        1,
                        "Bitcoin uses blockchain technology."
                    ),
                    mcq(
                        "A qubit is the unit of:",
                        ["Classical computing", "Quantum computing", "Neural network", "Database"],
                        1,
                        "Qubit is the basic unit of quantum information."
                    ),
                    mcq(
                        "AR stands for:",
                        ["Artificial Reality", "Augmented Reality", "Advanced Rendering", "Audio Reality"],
                        1,
                        "AR is Augmented Reality, overlaying digital content on the real world."
                    ),
                    mcq(
                        "5G mainly improves:",
                        ["Storage", "Speed, latency, density", "CPU", "Battery"],
                        1,
                        "5G offers higher speed, lower latency and more device density than 4G."
                    ),
                ],

                    questions: [
                        qa(
                            "Explain the three Vs of Big Data.",
                            "The three Vs describe the characteristics of Big Data. Volume refers to the huge size of the data, often in terabytes or petabytes, generated by social media, sensors and transactions. Velocity refers to the speed at which the data is generated and must be processed, often in real time. Variety refers to the different types of data, such as structured data in databases, semi structured data like JSON and XML, and unstructured data like text, images, audio and video. Together they make traditional databases and tools inadequate, leading to the rise of Hadoop, Spark and NoSQL systems.",
                            4
                        ),
                        qa(
                            "What is blockchain? How does it work?",
                            "Blockchain is a distributed, decentralised digital ledger that records transactions across many computers in a way that cannot be changed retroactively. Each block contains the transaction data, a timestamp and a cryptographic hash of the previous block, which links them together in a chain. Because every block contains the hash of the previous one, changing one block would require changing all the subsequent blocks, which is practically impossible. This makes the ledger tamper proof. Blockchain is the technology behind Bitcoin and Ethereum, and is being adopted in supply chain, voting and identity.",
                            4
                        ),
                        qa(
                            "Differentiate between cloud and edge computing.",
                            "Cloud computing processes data in large, centralised data centres, which provide massive storage and computing power but are far from the end user. This adds latency and uses bandwidth. Edge computing processes data close to where it is generated, such as in the device itself or in a nearby gateway, reducing latency and bandwidth use. Cloud is best for big analytics, AI training and long term storage, while edge is best for time critical IoT, self driving cars and AR. Modern systems often use both, sending only summary data to the cloud.",
                            4
                        ),
                        qa(
                            "What are the ethical concerns of emerging technologies?",
                            "Emerging technologies raise serious ethical concerns. AI can be biased if trained on biased data, leading to unfair decisions in hiring, lending and policing. IoT and surveillance can erode privacy, and big data analytics can predict and manipulate behaviour. Automation may displace many jobs, increasing inequality. Generative AI makes it easy to create deepfakes and misinformation, threatening trust. Quantum computing may break current encryption, putting data at risk. Designers, governments and citizens must work together to ensure that technology is used for the benefit of all.",
                            4
                        ),
                    ],
  }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit1Topics = [
    operatingSystems,
    networksBasics,
    internetWeb,
    cyberSecurity,
    emergingTech,
];


