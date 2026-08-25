/* =========================================================
   BCA • SEM 7 • Fundamentals of Cyber Security
   UNIT 1 — Foundations, Threats, Network Security & Cryptography
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
   TOPIC 1 — Introduction to Cyber Security & CIA Triad
========================================================= */

const introToCyberSecurity = createTopic(
    "introduction-to-cyber-security-cia-triad",
    "Introduction to Cyber Security & CIA Triad",

    [
        definition(
            "Cyber Security",
            "Cyber Security is the practice of protecting systems, networks, programs, and data from digital attacks, unauthorized access, damage, or theft through the implementation of technologies, processes, and controls."
        ),

        definition(
            "CIA Triad",
            "The CIA Triad is a foundational model for information security consisting of three core principles: Confidentiality (preventing unauthorized disclosure), Integrity (preventing unauthorized modification), and Availability (ensuring authorized access when needed)."
        ),

        heading("The CIA Triad Explained"),

        table(
            ["Principle", "Definition", "Example Control / Threat"],
            [
                ["Confidentiality", "Ensuring information is accessible only to authorized users", "Encryption, Access Control, Data Classification; Threat: Eavesdropping, Data Breach"],
                ["Integrity", "Maintaining accuracy and completeness of data over its lifecycle", "Hashing, Digital Signatures, Checksums; Threat: Data Tampering, Man-in-the-Middle"],
                ["Availability", "Ensuring systems and data are accessible to authorized users when required", "Redundancy, Backup, DoS Protection; Threat: Denial of Service (DoS), Ransomware"]
            ]
        ),

        heading("Extended Security Principles (Beyond CIA)"),

        list([
            "Authentication — Verifying the identity of a user or system (e.g., passwords, biometrics, MFA).",
            "Non-Repudiation — Ensuring that an action or event cannot be denied by the party that performed it (e.g., digital signatures on contracts).",
            "Accountability — Tracing actions to specific users through audit logs and monitoring."
        ]),

        heading("Cyber Security Domains"),

        table(
            ["Domain", "Focus Area", "Key Activities"],
            [
                ["Network Security", "Protecting network infrastructure", "Firewalls, IDS/IPS, VPN configuration, traffic monitoring"],
                ["Application Security", "Securing software and applications", "Secure coding practices, penetration testing, patch management"],
                ["Information Security", "Protecting data at rest and in transit", "Encryption, access controls, data masking"],
                ["Operational Security", "Securing processes and procedures", "Incident response planning, business continuity, user training"],
                ["Disaster Recovery", "Restoring systems after incidents", "Backups, failover systems, recovery testing"]
            ]
        ),

        note(
            "The CIA Triad is not a hierarchy — all three principles must be balanced. Over-emphasizing one (e.g., extreme confidentiality with complex access barriers) can negatively impact others (e.g., availability).",
            "tip",
            "Balanced Security Design"
        ),

        keyPoints([
            "Cyber Security protects digital assets from attacks, damage, and unauthorized access.",
            "The CIA Triad (Confidentiality, Integrity, Availability) is the foundational security model.",
            "Additional principles include Authentication, Non-Repudiation, and Accountability.",
            "Security is organized into domains: Network, Application, Information, Operational, and Disaster Recovery.",
        ]),
  ],

{
    summary:
    "Understand Cyber Security fundamentals, the CIA Triad, extended principles, and the main security domains.",
        minutes: 12,
            tags: ["cyber-security", "cia-triad", "confidentiality", "integrity", "availability", "important"],

                mcqs: [
                    mcq(
                        "What does the 'C' in the CIA Triad stand for?",
                        ["Compliance", "Confidentiality", "Continuity", "Control"],
                        1,
                        "Confidentiality ensures information is accessible only to authorized users."
                    ),
                    mcq(
                        "Which principle ensures data is not altered without authorization?",
                        ["Confidentiality", "Availability", "Integrity", "Authentication"],
                        2,
                        "Integrity ensures data accuracy and prevents unauthorized modification."
                    ),
                    mcq(
                        "Which additional security principle prevents denial of an action performed?",
                        ["Authentication", "Non-Repudiation", "Accountability", "Authorization"],
                        1,
                        "Non-Repudiation ensures actions cannot be denied by the performing party."
                    ),
                    mcq(
                        "Which domain focuses on secure coding and penetration testing?",
                        ["Network Security", "Application Security", "Information Security", "Operational Security"],
                        1,
                        "Application Security focuses on securing software through coding practices and testing."
                    ),
                ],

                    questions: [
                        qa(
                            "Define the CIA Triad and explain each component with a real-world example.",
                            "Confidentiality ensures only authorized users access information — example: encrypting patient records in a hospital database so only doctors can view them. Integrity ensures data is not altered improperly — example: using digital signatures on financial transactions to detect tampering. Availability ensures systems are accessible when needed — example: maintaining backup servers so an e-commerce site remains online during peak sales."
                            ,
                            4
                        ),
                        qa(
                            "Why is balancing the CIA Triad important in security design? Provide an example of a conflict between principles.",
                            "Over-emphasizing one principle can compromise others. Example: Implementing extremely complex multi-factor authentication for every action maximizes Confidentiality but may reduce Availability (users cannot access systems quickly during emergencies) and user satisfaction. A balanced design applies appropriate controls for the risk level without creating excessive barriers."
                            ,
                            4
                        ),
                    ],
  }
);

/* =========================================================
   TOPIC 2 — Threats, Vulnerabilities, Attack Vectors & Social Engineering
========================================================= */

const threatsAndSocialEngineering = createTopic(
    "threats-vulnerabilities-attack-vectors-social-engineering",
    "Threats, Vulnerabilities, Attack Vectors & Social Engineering",

    [
        definition(
            "Threat",
            "A threat is any potential event or action, whether intentional or accidental, that could compromise the security of an information system."
        ),

        definition(
            "Vulnerability",
            "A vulnerability is a weakness in a system, process, or design that can be exploited by a threat actor to perform unauthorized actions, access, or damage."
        ),

        definition(
            "Attack Vector",
            "An attack vector is the path or method used by an attacker to exploit a vulnerability and deliver a malicious payload or action to a target system."
        ),

        heading("Common Types of Malware"),

        table(
            ["Malware Type", "Behavior", "Common Impact"],
            [
                ["Virus", "Self-replicating code that attaches to legitimate programs", "Corrupts files, spreads through shared media"],
                ["Worm", "Self-replicating malware that spreads across networks without user interaction", "Consumes bandwidth, delivers payloads remotely"],
                ["Trojan Horse", "Malicious software disguised as legitimate software", "Creates backdoors, steals data"],
                ["Ransomware", "Encrypts user files and demands payment for decryption", "Data loss, operational shutdown, financial damage"],
                ["Spyware", "Secretly monitors user activity and collects sensitive information", "Privacy violation, identity theft"],
                ["Rootkit", "Deep-level malware that hides its presence and provides privileged access", "Persistent hidden control of system"]
            ]
        ),

        heading("Social Engineering Techniques"),

        table(
            ["Technique", "Method", "Defense Strategy"],
            [
                ["Phishing", "Fraudulent emails/messages mimicking trusted sources to steal credentials", "Email filtering, user awareness training, verification of requests"],
                ["Spear Phishing", "Targeted phishing using personalized information about a specific victim", "Restrict information sharing, multi-layer verification"],
                ["Pretexting", "Creating a fabricated scenario to manipulate victims into providing information", "Verify identity through independent channels"],
                ["Baiting", "Offering something enticing (e.g., free USB drive with malware) to trick users", "Physical security controls, user education"],
                ["Tailgating", "Following an authorized person into a restricted physical area", "Access control systems, badge verification"]
            ]
        ),

        heading("Common Network Attack Types"),

        table(
            ["Attack", "Mechanism", "Defensive Control"],
            [
                ["Man-in-the-Middle (MITM)", "Interception of communication between two parties to steal or alter data", "Encryption (TLS/SSL), certificate validation, VPNs"],
                ["Denial of Service (DoS) / DDoS", "Overwhelming a system with traffic to make it unavailable", "Rate limiting, traffic filtering, load balancing, DDoS protection services"],
                ["DNS Spoofing / Cache Poisoning", "Manipulating DNS records to redirect users to malicious sites", "DNSSEC, regular cache clearing, secure DNS servers"],
                ["Packet Sniffing", "Capturing unencrypted network traffic to read sensitive data", "Encryption of all transmitted data, secure protocols"]
            ]
        ),

        note(
            "Social engineering exploits human psychology rather than technical vulnerabilities. Technical controls must always be paired with continuous user awareness and security culture training.",
            "warning",
            "Human Factor"
        ),

        keyPoints([
            "Threats are potential harmful events; vulnerabilities are weaknesses that threats exploit.",
            "Malware categories include viruses, worms, trojans, ransomware, spyware, and rootkits.",
            "Social engineering relies on deception rather than technical exploits; awareness is the primary defense.",
            "Network attacks such as MITM and DoS target communication channels and service availability.",
            "Defense requires both technical controls and human-centered security awareness."
        ]),
  ],

{
    summary:
    "Distinguish threats, vulnerabilities, and attack vectors; classify malware types; understand social engineering; and recognize network attacks and defenses.",
        minutes: 13,
            tags: ["threats", "vulnerabilities", "malware", "phishing", "social-engineering", "mitm", "ddos", "important"],

                mcqs: [
                    mcq(
                        "What is the difference between a Threat and a Vulnerability?",
                        ["They are the same", "A threat is a potential harmful event; a vulnerability is a weakness that can be exploited", "A vulnerability is always intentional", "A threat only applies to networks"],
                        1,
                        "A threat is the danger (intentional or accidental); a vulnerability is the weakness enabling it."
                    ),
                    mcq(
                        "Which malware spreads across networks without user interaction?",
                        ["Virus", "Worm", "Trojan", "Spyware"],
                        1,
                        "Worms self-replicate and spread across networks automatically."
                    ),
                    mcq(
                        "What is the goal of a Denial of Service (DoS) attack?",
                        ["Steal data", "Make a service unavailable by overwhelming it", "Encrypt files for ransom", "Install hidden software"],
                        1,
                        "DoS attacks aim to overwhelm systems and deny access to legitimate users."
                    ),
                    mcq(
                        "Which social engineering technique involves creating a false identity or scenario?",
                        ["Baiting", "Pretexting", "Tailgating", "Phishing"],
                        1,
                        "Pretexting uses fabricated scenarios or false identities to manipulate victims."
                    ),
                ],

                    questions: [
                        qa(
                            "Differentiate Virus, Worm, Trojan, and Ransomware with key characteristics.",
                            "Virus: Attaches to legitimate files and requires user action to spread. Worm: Self-replicates across networks without user interaction. Trojan: Disguises malicious code as legitimate software (often creates backdoors). Ransomware: Encrypts files and demands payment for decryption; primary impact is data availability and financial loss."
                            ,
                            4
                        ),
                        qa(
                            "What are the most effective defenses against Social Engineering attacks?",
                            "Effective defenses include continuous user awareness training, verification of requests through independent channels (not just the requesting message), implementing multi-factor authentication to reduce credential impact, applying the principle of least privilege, and fostering a culture where employees feel safe reporting suspicious activities without punishment."
                            ,
                            4
                        ),
                    ],
  }
);

/* =========================================================
   TOPIC 3 — Network Security Fundamentals
========================================================= */

const networkSecurityFundamentals = createTopic(
    "network-security-fundamentals",
    "Network Security Fundamentals",

    [
        definition(
            "Network Security",
            "Network Security consists of policies, technologies, and practices designed to protect the integrity, confidentiality, and availability of data and resources within a network infrastructure."
        ),

        heading("Key Network Security Components"),

        table(
            ["Component", "Function", "Example Technology"],
            [
                ["Firewall", "Filters incoming and outgoing network traffic based on security rules", "Next-Generation Firewall (NGFW)"],
                ["Intrusion Detection System (IDS)", "Monitors network traffic for suspicious patterns and alerts administrators", "Snort, Suricata"],
                ["Intrusion Prevention System (IPS)", "Actively blocks or prevents detected malicious traffic", "Integrated IPS modules in NGFW"],
                ["Virtual Private Network (VPN)", "Creates encrypted tunnels over public networks for secure remote access", "OpenVPN, IPsec"],
                ["Network Segmentation", "Divides network into isolated zones to limit attack spread", "VLANs, Subnetting, DMZ"]
            ]
        ),

        heading("Common Network Security Protocols"),

        table(
            ["Protocol", "Purpose", "Security Benefit"],
            [
                ["TLS / SSL (Transport Layer Security)", "Encrypts data transmitted over networks", "Prevents eavesdropping and MITM attacks"],
                ["IPsec (Internet Protocol Security)", "Provides secure IP communications through authentication and encryption", "Used in VPNs for secure remote connections"],
                ["SSH (Secure Shell)", "Provides encrypted remote administration of systems", "Replaces unencrypted protocols like Telnet"],
                ["DNSSEC (DNS Security Extensions)", "Authenticates DNS responses to prevent spoofing and cache poisoning", "Ensures users reach legitimate websites"]
            ]
        ),

        heading("Network Security Best Practices"),

        list([
            "Implement a Defense-in-Depth strategy with multiple overlapping security layers.",
            "Regularly update and patch network devices, operating systems, and firmware.",
            "Use network segmentation (VLANs, subnets) to isolate sensitive systems.",
            "Enforce strong encryption for all data in transit (TLS 1.3) and at rest (AES-256).",
            "Monitor network traffic continuously using IDS/IPS and Security Information and Event Management (SIEM) systems.",
            "Conduct periodic vulnerability scanning and penetration testing."
        ]),

        code(
            `# Conceptual Firewall Rule Example (Pseudocode / iptables-style)
# Allow established connections and loopback
ACCEPT  INPUT  -m state --state ESTABLISHED,RELATED
ACCEPT  INPUT  -i lo

# Allow internal network access to web server (port 443 HTTPS only)
ACCEPT  INPUT  -p tcp --dport 443 -s 192.168.1.0/24 -j ACCEPT

# Drop all other incoming traffic by default
DROP    INPUT  -p tcp --dport 22 -s 0.0.0.0/0 -j DROP`,
            "bash",
            "Conceptual Firewall Rule Structure"
        ),

        note(
            "No single security control is sufficient. A layered defense ensures that if one control fails, others can still protect critical assets.",
            "tip",
            "Defense in Depth"
        ),

        keyPoints([
            "Firewalls filter traffic based on predefined security rules; IPS actively blocks threats.",
            "VPNs encrypt remote connections over public networks using IPsec or TLS.",
            "Network segmentation (VLANs, subnets) limits the lateral movement of attackers.",
            "Encryption protocols (TLS, IPsec, SSH) protect data in transit from eavesdropping.",
            "Continuous monitoring and regular updates are essential for maintaining network security."
        ]),
  ],

{
    summary:
    "Understand network security components (firewalls, IDS/IPS, VPNs), key protocols (TLS, IPsec, SSH), and best practices including segmentation and defense-in-depth.",
        minutes: 13,
            tags: ["network-security", "firewall", "vpn", "ids-ips", "tls", "defense-in-depth", "important"],

                mcqs: [
                    mcq(
                        "What is the primary function of a Firewall?",
                        ["Encrypt data", "Filter network traffic based on security rules", "Generate reports", "Create backups"],
                        1,
                        "Firewalls filter traffic to enforce security policies and prevent unauthorized access."
                    ),
                    mcq(
                        "What is the difference between IDS and IPS?",
                        ["IDS detects and alerts; IPS detects and actively blocks threats", "IDS blocks; IPS only alerts", "IDS works on applications only", "IPS works only offline"],
                        0,
                        "IDS (Intrusion Detection System) alerts; IPS (Intrusion Prevention System) actively prevents."
                    ),
                    mcq(
                        "Which protocol provides encrypted remote system administration?",
                        ["FTP", "Telnet", "SSH", "SMTP"],
                        2,
                        "SSH (Secure Shell) provides encrypted remote command-line access."
                    ),
                    mcq(
                        "What is the purpose of Network Segmentation?",
                        ["To make networks faster", "To limit the spread of attacks by isolating zones", "To store files", "To generate reports"],
                        1,
                        "Segmentation isolates sensitive systems, reducing the impact of breaches."
                    ),
                ],

                    questions: [
                        qa(
                            "Differentiate between a Firewall and an Intrusion Prevention System (IPS).",
                            "A Firewall acts as a gatekeeper by filtering traffic based on rules (IP, port, protocol) but does not inspect the content for malicious payloads. An IPS examines the content of packets (deep packet inspection) to detect malicious patterns (signatures or anomalies) and actively blocks or drops malicious traffic in real-time. Firewalls enforce access policies; IPS enforces threat prevention."
                            ,
                            4
                        ),
                        qa(
                            "Explain Defense-in-Depth and why it is critical for network security.",
                            "Defense-in-Depth is a security strategy that uses multiple overlapping layers of protection (firewall, IDS, encryption, segmentation, user training). It is critical because no single control is perfect; if one layer is breached (e.g., firewall bypassed), other layers (IPS, encryption, access controls) can still prevent or contain the attack, reducing overall risk."
                            ,
                            4
                        ),
                    ],
  }
);

/* =========================================================
   TOPIC 4 — Cryptography, Encryption & Secure Protocols
========================================================= */

const cryptographyEncryption = createTopic(
    "cryptography-encryption-secure-protocols",
    "Cryptography, Encryption & Secure Protocols",

    [
        definition(
            "Cryptography",
            "Cryptography is the science of securing communication and data by transforming readable information (plaintext) into an unreadable form (ciphertext) using mathematical algorithms and keys, ensuring confidentiality, integrity, and authentication."
        ),

        heading("Symmetric vs Asymmetric Encryption"),

        table(
            ["Characteristic", "Symmetric Encryption", "Asymmetric Encryption (Public Key)"],
            [
                ["Key Usage", "Same key for encryption and decryption", "Public key for encryption; private key for decryption"],
                ["Performance", "Fast; suitable for large data volumes", "Slower; used for key exchange and digital signatures"],
                ["Examples", "AES (Advanced Encryption Standard)", "RSA, ECC (Elliptic Curve Cryptography)"],
                ["Key Management", "Requires secure key distribution", "Public keys can be distributed freely; private keys must be protected"]
            ]
        ),

        heading("Hashing and Digital Signatures"),

        definition(
            "Hash Function",
            "A hash function converts input data of arbitrary size into a fixed-size output (hash value or digest). It is one-way (irreversible) and designed so that any change in input produces a significantly different output."
        ),

        heading("Common Cryptographic Algorithms and Uses"),

        table(
            ["Algorithm / Standard", "Type", "Primary Use"],
            [
                ["AES-256", "Symmetric Encryption", "File encryption, secure data storage, VPN encryption"],
                ["RSA-2048/4096", "Asymmetric Encryption", "Key exchange, secure email (PGP), digital certificates"],
                ["SHA-256 / SHA-3", "Cryptographic Hash Function", "Data integrity verification, digital signatures, blockchain"],
                ["TLS 1.3", "Secure Protocol", "Encrypted web communication (HTTPS), email security"],
                ["ECDSA (Elliptic Curve Digital Signature Algorithm)", "Digital Signature", "Blockchain transactions, secure message authentication"]
            ]
        ),

        heading("Public Key Infrastructure (PKI) Basics"),

        steps([
            "Certificate Authority (CA) — Trusted entity that issues digital certificates binding public keys to identities.",
            "Certificate Request — User/organization generates a key pair and submits a Certificate Signing Request (CSR) to a CA.",
            "Certificate Issuance — CA verifies identity and issues a signed digital certificate containing the public key.",
            "Certificate Validation — Servers and clients verify the CA's digital signature and check certificate expiration/revocation lists (CRL/OCSP).",
            "Encrypted Communication — Parties use certificates to establish encrypted sessions (e.g., TLS handshake for HTTPS)."
        ]),

        note(
            "Asymmetric encryption solves the key distribution problem of symmetric systems, while symmetric encryption provides the performance needed for bulk data protection. Hybrid systems (like TLS) combine both: asymmetric for secure key exchange, symmetric for fast data encryption.",
            "tip",
            "Hybrid Cryptography"
        ),

        keyPoints([
            "Symmetric encryption uses a single key; asymmetric uses public/private key pairs.",
            "Hash functions provide one-way integrity verification (e.g., SHA-256).",
            "Digital signatures combine hashing with asymmetric encryption for authentication and non-repudiation.",
            "PKI enables trusted identity verification through Certificate Authorities.",
            "Modern protocols (TLS 1.3) combine asymmetric and symmetric techniques for optimal security and performance."
        ]),
  ],

{
    summary:
    "Understand symmetric and asymmetric encryption, hashing, digital signatures, PKI, and modern secure protocols like TLS.",
        minutes: 14,
            tags: ["cryptography", "encryption", "hashing", "digital-signature", "tls", "pki", "important"],

                mcqs: [
                    mcq(
                        "What is the primary difference between Symmetric and Asymmetric encryption?",
                        ["Symmetric uses two different keys; Asymmetric uses one", "Symmetric uses the same key; Asymmetric uses public/private key pairs", "Symmetric is faster for key exchange only", "Asymmetric is always faster"],
                        1,
                        "Symmetric encryption uses one shared key; asymmetric uses a public/private pair."
                    ),
                    mcq(
                        "What is a Hash Function primarily used for?",
                        ["Encrypting messages for decryption later", "Verifying data integrity with a one-way digest", "Generating random numbers", "Replacing encryption entirely"],
                        1,
                        "Hash functions create unique, irreversible fingerprints to verify data integrity."
                    ),
                    mcq(
                        "In PKI, what role does a Certificate Authority (CA) play?",
                        ["Encrypts all user data", "Issues and verifies digital certificates binding public keys to identities", "Only creates private keys", "Only manages passwords"],
                        1,
                        "A CA verifies identities and issues trusted digital certificates."
                    ),
                    mcq(
                        "Which cryptographic standard is commonly used for HTTPS (secure web browsing)?",
                        ["FTP", "SMTP", "TLS (Transport Layer Security)", "HTTP 1.0"],
                        2,
                        "TLS (and its predecessor SSL) encrypts web traffic for HTTPS."
                    ),
                ],

                    questions: [
                        qa(
                            "Compare Symmetric and Asymmetric Encryption in terms of keys, performance, and typical applications.",
                            "Symmetric encryption uses the same key for encryption and decryption (e.g., AES). It is very fast and ideal for encrypting large amounts of data (files, database storage). The challenge is securely sharing the key. Asymmetric encryption uses a public/private pair (e.g., RSA). The public key encrypts; the private key decrypts. It is slower but solves key distribution — anyone can encrypt with the public key, but only the private key holder can decrypt. It is used for digital signatures, secure email, and key exchange (TLS handshake)."
                            ,
                            4
                        ),
                        qa(
                            "Explain how a Digital Signature works and why it ensures Non-Repudiation.",
                            "A digital signature is created by hashing the message (producing a digest), then encrypting that digest with the sender's private key. The recipient decrypts the signature using the sender's public key to reveal the digest, then hashes the received message independently. If both digests match, the message is unaltered (integrity) and the sender is verified (authentication). Because only the private key holder could have created the valid signature, the sender cannot later deny sending it — this is Non-Repudiation."
                            ,
                            4
                        ),
                    ],
  }
);

/* =========================================================
   TOPIC 5 — Authentication, Access Control & Security Policies
========================================================= */

const authenticationAccessControl = createTopic(
    "authentication-access-control-security-policies",
    "Authentication, Access Control & Security Policies",

    [
        definition(
            "Authentication",
            "Authentication is the process of verifying that a user or system is who or what it claims to be, typically through credentials such as passwords, tokens, biometric data, or digital certificates."
        ),

        heading("Authentication Factors and Multi-Factor Authentication (MFA)"),

        table(
            ["Factor Category", "Examples", "Security Level"],
            [
                ["Something You Know (Knowledge)", "Passwords, PINs, security questions", "Low (vulnerable to guessing/phishing)"],
                ["Something You Have (Possession)", "Smart cards, mobile devices (OTP apps), security tokens", "Medium (requires physical access to steal)"],
                ["Something You Are (Inherence)", "Fingerprints, facial recognition, iris scans, voice", "High (difficult to replicate, but requires sensors)"]
            ]
        ),

        definition(
            "Multi-Factor Authentication (MFA)",
            "MFA requires users to present two or more independent authentication factors from different categories before granting access, significantly reducing the risk of credential compromise."
        ),

        heading("Access Control Models"),

        table(
            ["Model", "Mechanism", "Best Use Case"],
            [
                ["Discretionary Access Control (DAC)", "Resource owner decides who has access (e.g., file permissions)", "Personal devices, small workgroups"],
                ["Mandatory Access Control (MAC)", "Access is enforced by system-wide security policies based on security labels (e.g., Top Secret, Confidential)", "Government, military, high-security environments"],
                ["Role-Based Access Control (RBAC)", "Access is granted based on user roles (e.g., Manager, Employee, Admin)", "Enterprise applications, organizational structures"],
                ["Attribute-Based Access Control (ABAC)", "Access decisions based on dynamic attributes (user, resource, environment, time)", "Cloud environments, complex policy requirements"]
            ]
        ),

        heading("Security Policies and Best Practices"),

        list([
            "Principle of Least Privilege — Grant users only the minimum access necessary to perform their duties.",
            "Role-Based Access Assignment — Define roles clearly and assign permissions based on organizational structure.",
            "Regular Access Reviews — Conduct periodic audits to remove unnecessary or outdated access rights.",
            "Password Policies — Enforce minimum length, complexity, expiration, and prohibition of common passwords.",
            "Account Lockout — Temporarily disable accounts after multiple failed login attempts to prevent brute-force attacks."
        ]),

        heading("Common Authentication Threats and Defenses"),

        table(
            ["Threat", "Description", "Defense Strategy"],
            [
                ["Brute Force Attack", "Systematic trial of all possible password combinations", "Account lockout, rate limiting, strong password policies"],
                ["Credential Stuffing", "Using stolen username/password pairs from other breaches", "MFA, breach monitoring, unique passwords for each service"],
                ["Phishing", "Tricking users into revealing credentials through fake interfaces", "User training, anti-phishing filters, FIDO2/WebAuthn"],
                ["Pass-the-Hash", "Using captured password hashes to authenticate without the plaintext password", "Credential Guard, protected users, regular credential rotation"]
            ]
        ),

        note(
            "Strong authentication is not sufficient without proper authorization and access control policies. A system must verify identity (authentication) and enforce rules about what that identity is permitted to do (authorization) continuously.",
            "tip",
            "Authentication vs Authorization"
        ),

        keyPoints([
            "Authentication verifies identity; Authorization determines permitted actions.",
            "MFA combines knowledge, possession, and inherence factors to reduce risk.",
            "RBAC assigns permissions based on organizational roles rather than individual users.",
            "The Principle of Least Privilege limits potential damage from compromised accounts.",
            "Regular access reviews and strong password policies are essential maintenance practices."
        ]),
  ],

{
    summary:
    "Understand Authentication categories and MFA, compare Access Control Models (DAC, MAC, RBAC, ABAC), and apply security policies including Least Privilege and regular access reviews.",
        minutes: 13,
            tags: ["authentication", "access-control", "rbac", "mfa", "least-privilege", "security-policies", "important"],

                mcqs: [
                    mcq(
                        "Which authentication factor category includes fingerprints and facial recognition?",
                        ["Something You Know", "Something You Have", "Something You Are", "Something You Do"],
                        2,
                        "Inherence (biometrics) includes fingerprints, facial recognition, and iris scans."
                    ),
                    mcq(
                        "What is Multi-Factor Authentication (MFA)?",
                        ["Using only a password", "Requiring two or more independent authentication factors", "Using only biometric data", "Using only a smart card"],
                        1,
                        "MFA requires independent factors from different categories (e.g., password + mobile token)."
                    ),
                    mcq(
                        "Which access control model grants permissions based on organizational roles?",
                        ["DAC", "MAC", "RBAC", "ABAC"],
                        2,
                        "Role-Based Access Control (RBAC) assigns permissions based on user roles."
                    ),
                    mcq(
                        "What is the Principle of Least Privilege?",
                        ["Give all users full access", "Grant users only the minimum access needed for their duties", "Only allow managers to access data", "No access for anyone"],
                        1,
                        "Least Privilege minimizes damage by restricting access to only what is necessary."
                    ),
                ],

                    questions: [
                        qa(
                            "Differentiate between Authentication and Authorization, providing examples of each.",
                            "Authentication verifies identity — for example, logging in with a username and password (possibly plus an MFA token). Authorization determines what that authenticated user is permitted to do — for example, a standard employee can view reports but cannot delete them, while an administrator can modify system settings. A user can be successfully authenticated but denied authorization for a specific action."
                            ,
                            4
                        ),
                        qa(
                            "Compare RBAC and ABAC. In which scenario is ABAC more appropriate than RBAC?",
                            "RBAC assigns permissions based on predefined roles (e.g., 'Employee', 'Manager'). It is simple and works well for stable organizational structures. ABAC evaluates dynamic attributes (e.g., user department, time of day, resource classification, location) to make access decisions. ABAC is more appropriate in complex, dynamic environments — such as cloud services or multi-tenant platforms — where roles alone cannot capture the full context needed for access control decisions."
                            ,
                            4
                        ),
                    ],
  }
);

/* =========================================================
   TOPIC 5 — Incident Response, Security Awareness & Professional Practice
========================================================= */

const incidentResponseAwareness = createTopic(
    "incident-response-security-awareness-professional-practice",
    "Incident Response, Security Awareness & Professional Practice",

    [
        definition(
            "Incident Response",
            "Incident Response is a structured approach to identifying, containing, eradicating, recovering from, and learning from security incidents to minimize damage and restore normal operations quickly."
        ),

        heading("Incident Response Lifecycle (NIST SP 800-61)"),

        steps([
            "Preparation — Develop policies, train staff, establish response teams and tools.",
            "Detection and Analysis — Identify, validate, classify, and prioritize security events.",
            "Containment — Isolate affected systems to prevent further spread or damage.",
            "Eradication — Remove malware, close vulnerabilities, and eliminate attacker access.",
            "Recovery — Restore systems to normal operation and verify integrity.",
            "Post-Incident Activity — Conduct lessons learned, update policies, and improve defenses."
        ]),

        heading("Security Awareness and Professional Ethics"),

        table(
            ["Practice", "Purpose", "Implementation"],
            [
                ["Regular Training", "Keep staff updated on new threats and safe practices", "Quarterly workshops, simulated phishing campaigns"],
                ["Acceptable Use Policies", "Define permitted and prohibited uses of organizational resources", "Written policies signed by all employees"],
                ["Data Handling Procedures", "Ensure sensitive data is stored, transmitted, and disposed of securely", "Encryption for storage/transmission, secure shredding for physical media"],
                ["Ethical Disclosure", "Encourage reporting of vulnerabilities or incidents without fear of retaliation", "Whistleblower protection, anonymous reporting channels"]
            ]
        ),

        heading("Legal and Regulatory Considerations"),

        list([
            "Compliance with data protection laws (GDPR, national privacy acts) requires organizations to implement appropriate security measures and report breaches within defined timeframes.",
            "Audit trails and logging are legal requirements in many sectors (finance, healthcare) to support forensic investigation and accountability.",
            "Professional ethics demand that security practitioners respect user privacy, avoid unauthorized access, and maintain confidentiality of sensitive findings."
        ]),

        note(
            "Security is a continuous process, not a one-time project. Organizations must regularly review policies, test response plans, and update defenses based on the evolving threat landscape.",
            "warning",
            "Continuous Improvement"
        ),

        keyPoints([
            "Incident Response follows Preparation, Detection, Containment, Eradication, Recovery, and Post-Incident review.",
            "Security awareness training reduces human-related vulnerabilities significantly.",
            "Legal compliance requires breach reporting, secure data handling, and audit trails.",
            "Ethical practice demands confidentiality, responsible disclosure, and respect for privacy.",
        ]),
  ],

{
    summary:
    "Understand Incident Response lifecycle, security awareness practices, professional ethics, and legal/regulatory obligations in cyber security.",
        minutes: 12,
            tags: ["incident-response", "security-awareness", "ethics", "legal-compliance", "professional-practice", "important"],

                mcqs: [
                    mcq(
                        "According to the NIST Incident Response Lifecycle, what follows 'Containment'?",
                        ["Detection", "Preparation", "Eradication", "Recovery"],
                        2,
                        "After Containment comes Eradication (removing the threat) before Recovery."
                    ),
                    mcq(
                        "Why is Security Awareness Training important?",
                        ["To make users faster at typing", "To reduce human-related vulnerabilities and improve threat recognition", "Only for managers", "To delete files"],
                        1,
                        "Training reduces the risk of successful phishing and social engineering attacks."
                    ),
                    mcq(
                        "What is the purpose of an Incident Response Post-Incident Activity phase?",
                        ["To delete logs", "To learn from the incident and improve defenses", "To restart the server only", "To hide the incident"],
                        1,
                        "Post-Incident review updates policies and strengthens defenses to prevent recurrence."
                    ),
                    mcq(
                        "Which of the following is a professional ethical obligation in cyber security?",
                        ["Sharing user passwords", "Maintaining confidentiality and responsible disclosure", "Deleting audit logs", "Accessing data without permission"],
                        1,
                        "Ethical practice requires confidentiality, responsible disclosure, and respect for privacy."
                    ),
                ],

                    questions: [
                        qa(
                            "Describe the Incident Response lifecycle according to NIST SP 800-61.",
                            "The lifecycle includes: Preparation (policies, tools, team training); Detection and Analysis (identify and classify events); Containment (isolate affected systems); Eradication (remove malware and close vulnerabilities); Recovery (restore systems to normal); and Post-Incident Activity (document lessons learned, update policies, and improve defenses)."
                            ,
                            4
                        ),
                        qa(
                            "Why is Security Awareness considered a critical security control, and how can organizations implement it effectively?",
                            "Many breaches result from human error (phishing, weak passwords, accidental data exposure). Awareness training reduces these risks by teaching users to recognize threats, follow secure practices, and report suspicious activities. Effective implementation includes regular interactive workshops, simulated phishing campaigns, clear acceptable use policies, and positive reinforcement rather than punitive measures that discourage reporting."
                            ,
                            4
                        ),
                    ],
  }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit1Topics = [
    introToCyberSecurity,
    threatsAndSocialEngineering,
    networkSecurityFundamentals,
    cryptographyEncryption,
    authenticationAccessControl,
    incidentResponseAwareness,
];