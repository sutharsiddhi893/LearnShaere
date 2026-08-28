/* =========================================================
   MSc-IT • SEM 2 • Cyber Security
   UNIT 2 — Tools and Methods Used in Cybercrime
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
   TOPIC 1 — Malware and Malicious Software
========================================================= */

const malwareAndMaliciousSoftware = createTopic(
    "malware-and-malicious-software",
    "Malware and Malicious Software",

    [
        definition(
            "Malware",
            "Malware, or malicious software, is any program or code intentionally designed to harm systems, steal data, disrupt operations, spy on users or gain unauthorised access."
        ),

        text(
            "Cybercriminals use malware to infect computers, servers, smartphones and networks. Malware may arrive through email attachments, pirated software, infected websites, USB drives, fake apps or software vulnerabilities."
        ),

        heading("Common Types of Malware"),

        table(
            ["Type", "Meaning", "Common Impact"],
            [
                ["Virus", "Malware that attaches to files/programs and spreads when executed", "File corruption, system damage"],
                ["Worm", "Self-replicating malware that spreads through networks", "Network slowdown, mass infection"],
                ["Trojan Horse", "Malware disguised as legitimate software", "Backdoor access, data theft"],
                ["Ransomware", "Encrypts files and demands payment", "Data loss, business disruption"],
                ["Spyware", "Secretly monitors user activity", "Privacy loss, credential theft"],
                ["Keylogger", "Records keystrokes", "Password and card data theft"],
                ["Rootkit", "Hides malicious activity with deep system access", "Stealthy control of system"],
                ["Adware", "Displays unwanted advertisements", "Annoyance, tracking, browser hijacking"],
            ]
        ),

        heading("Virus vs Worm vs Trojan"),

        table(
            ["Aspect", "Virus", "Worm", "Trojan"],
            [
                ["Spreading", "Needs host file and user execution", "Spreads automatically over network", "Tricks user into installing"],
                ["Host required?", "Yes", "No separate host file required", "Appears as legitimate software"],
                ["Main danger", "Damages or infects files", "Rapid network spread", "Backdoor/data theft"],
                ["Example delivery", "Infected document", "Network vulnerability", "Fake game/crack/app"],
            ]
        ),

        heading("Ransomware"),

        definition(
            "Ransomware",
            "Ransomware is malware that locks or encrypts files and demands payment, usually in cryptocurrency, for restoring access."
        ),

        steps([
            "Victim opens infected attachment, link or application.",
            "Malware executes and contacts attacker-controlled infrastructure.",
            "Important files are encrypted or system access is blocked.",
            "A ransom note demands payment for a decryption key.",
            "Victim faces data loss, downtime and possible data leak.",
        ]),

        heading("How Malware Commonly Enters Systems"),

        list([
            "Phishing emails with malicious attachments or links.",
            "Downloading cracked/pirated software.",
            "Installing apps from untrusted sources.",
            "Using infected USB drives.",
            "Visiting compromised websites.",
            "Unpatched operating systems and applications.",
            "Weak remote access passwords.",
            "Malicious advertisements or browser extensions.",
        ]),

        heading("Signs of Malware Infection"),

        table(
            ["Sign", "Possible Meaning"],
            [
                ["System becomes slow suddenly", "Background malicious activity"],
                ["Unexpected pop-ups", "Adware or browser hijacker"],
                ["Files renamed/encrypted", "Ransomware"],
                ["Unknown programs installed", "Trojan or bundled malware"],
                ["Antivirus disabled", "Malware trying to hide"],
                ["Unusual network traffic", "Data exfiltration or botnet activity"],
                ["Accounts accessed unexpectedly", "Credential theft"],
            ]
        ),

        heading("Malware Prevention"),

        list([
            "Keep operating system, browser and applications updated.",
            "Use trusted antivirus/endpoint protection.",
            "Do not open suspicious attachments or links.",
            "Download software only from official sources.",
            "Avoid pirated/cracked software.",
            "Use least privilege; avoid daily use of admin account.",
            "Take regular offline/offsite backups.",
            "Disable macros in documents unless required and trusted.",
            "Use application allow-listing in organisations.",
        ], true),

        note(
            "Paying ransomware does not guarantee file recovery and may encourage criminals. The best defence is prevention, patching, user awareness and reliable offline backups.",
            "warning",
            "Ransomware Defence"
        ),

        keyPoints([
            "Malware is malicious software designed to harm, spy, steal or disrupt.",
            "Viruses need host files; worms spread automatically; Trojans disguise themselves.",
            "Ransomware encrypts data and demands payment.",
            "Keyloggers steal typed passwords and sensitive data.",
            "Malware commonly spreads through phishing, pirated software, fake apps and unpatched systems.",
            "Updates, antivirus, safe browsing and backups reduce malware risk.",
        ]),
    ],

    {
        summary:
            "Learn malware types, ransomware, infection methods, warning signs and prevention practices.",
        minutes: 13,
        tags: ["cyber-security", "malware", "ransomware", "virus", "trojan", "important"],

        mcqs: [
            mcq(
                "Malware means:",
                ["Malicious software designed to harm or misuse systems", "Only legal antivirus", "Only system update", "Only backup software"],
                0,
                "Malware is software intentionally created for harmful or unauthorised activity."
            ),
            mcq(
                "A worm differs from a virus because a worm:",
                ["Can self-replicate over networks", "Always needs a host file", "Is always harmless", "Only displays ads"],
                0,
                "Worms can spread automatically through networks without attaching to a host file."
            ),
            mcq(
                "A Trojan horse is malware that:",
                ["Disguises itself as legitimate software", "Only repairs files", "Always encrypts backups", "Requires no user deception"],
                0,
                "Trojans trick users by appearing useful or legitimate."
            ),
            mcq(
                "Ransomware mainly:",
                ["Encrypts/locks files and demands payment", "Improves system speed", "Formats only printers", "Creates official backups"],
                0,
                "Ransomware blocks access to data and demands ransom."
            ),
            mcq(
                "A keylogger is used to:",
                ["Record keystrokes", "Clean keyboard dust", "Compress files", "Patch software"],
                0,
                "Keyloggers capture typed information such as passwords."
            ),
            mcq(
                "The best protection against ransomware data loss is:",
                ["Reliable offline/offsite backups", "Sharing passwords", "Disabling updates", "Installing pirated apps"],
                0,
                "Backups allow recovery even if ransomware encrypts primary files."
            ),
        ],

        questions: [
            qa(
                "Define malware and explain common types of malware.",
                "Malware is malicious software intentionally designed to damage systems, steal information, spy on users, disrupt services or gain unauthorised access. Common types include viruses, worms, Trojans, ransomware, spyware, keyloggers, rootkits and adware. A virus attaches to files and spreads when executed. A worm self-replicates across networks. A Trojan disguises itself as legitimate software. Ransomware encrypts files and demands payment. Spyware monitors user activity, while keyloggers record keystrokes. Rootkits hide malicious activity, and adware displays unwanted advertisements. Malware can seriously affect individuals and organisations through data loss, privacy violation and financial damage.",
                5
            ),
            qa(
                "Differentiate between virus, worm and Trojan horse.",
                "A virus is malware that attaches itself to a host file or program and spreads when the infected file is executed. It may corrupt files or damage systems. A worm is self-replicating malware that spreads automatically through networks, often exploiting vulnerabilities, and can cause large-scale infection and network slowdown. A Trojan horse appears to be useful or legitimate software but performs hidden malicious actions after installation, such as opening a backdoor or stealing data. The key difference is that a virus needs a host and user execution, a worm spreads automatically, and a Trojan relies on deception.",
                5
            ),
            qa(
                "Explain ransomware and its prevention.",
                "Ransomware is malware that locks a system or encrypts files and demands payment for restoring access. It commonly spreads through phishing emails, malicious attachments, fake software, compromised websites and unpatched systems. After infection, it may encrypt documents, databases and backups connected to the system. Prevention includes keeping systems updated, using antivirus or endpoint protection, avoiding suspicious links and attachments, disabling unnecessary macros, applying least privilege, securing remote access with strong passwords and MFA, and maintaining offline/offsite backups. Paying ransom does not guarantee recovery, so preparation and backup are the strongest defences.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — Phishing and Social Engineering
========================================================= */

const phishingAndSocialEngineering = createTopic(
    "phishing-and-social-engineering",
    "Phishing and Social Engineering",

    [
        definition(
            "Social Engineering",
            "Social engineering is the psychological manipulation of people into revealing confidential information, performing unsafe actions or bypassing security procedures."
        ),

        definition(
            "Phishing",
            "Phishing is a social engineering attack where attackers impersonate trusted entities through email, websites, messages or calls to steal credentials, OTPs, financial details or personal data."
        ),

        text(
            "Many cyber attacks succeed not because of advanced technical hacking, but because users are tricked into trusting a fake message, fake caller, fake website or fake identity."
        ),

        heading("Types of Phishing"),

        table(
            ["Type", "Meaning", "Example"],
            [
                ["Email phishing", "Mass emails pretending to be trusted organisations", "Fake bank login email"],
                ["Spear phishing", "Targeted phishing customised for a person/organisation", "Email to HR using employee details"],
                ["Whaling", "Phishing aimed at senior executives", "Fake CEO payment request"],
                ["Smishing", "Phishing through SMS/messages", "Fake parcel delivery link"],
                ["Vishing", "Voice-call phishing", "Caller pretending to be bank officer"],
                ["Clone phishing", "Copies a legitimate email but replaces link/attachment", "Modified invoice email"],
            ]
        ),

        heading("Common Social Engineering Techniques"),

        table(
            ["Technique", "Description"],
            [
                ["Pretexting", "Creating a false story or identity to gain trust"],
                ["Baiting", "Offering something attractive such as free software or prize"],
                ["Quid pro quo", "Offering help/service in exchange for information"],
                ["Tailgating", "Following authorised person into restricted area"],
                ["Impersonation", "Pretending to be trusted person or authority"],
                ["Scareware", "Showing fake warning to force user action"],
            ]
        ),

        heading("Phishing Red Flags"),

        list([
            "Urgent message demanding immediate action.",
            "Threat of account closure, police case or penalty.",
            "Unexpected attachment or link.",
            "Sender address slightly different from official domain.",
            "Poor grammar, spelling mistakes or unusual tone.",
            "Request for password, OTP, PIN, CVV or recovery code.",
            "Offer that sounds too good to be true.",
            "Shortened or suspicious URL.",
            "Mismatch between displayed link text and real destination.",
        ], true),

        heading("Phishing Attack Flow"),

        steps([
            "Attacker chooses a target and trusted identity to impersonate.",
            "A convincing message, call or fake website is prepared.",
            "Victim is pressured through fear, urgency, curiosity or reward.",
            "Victim clicks link, opens attachment or shares secret information.",
            "Attacker uses stolen data for fraud, account takeover or further attacks.",
        ]),

        heading("Safe Verification Practices"),

        table(
            ["Situation", "Safe Action"],
            [
                ["Bank message asks for OTP", "Do not share; contact bank through official number/app"],
                ["Email asks to reset password", "Open official website manually, not through email link"],
                ["Unknown attachment received", "Verify sender through another trusted channel"],
                ["CEO asks urgent payment", "Confirm through approved internal process"],
                ["Prize/lottery message", "Treat as suspicious if you did not participate"],
            ]
        ),

        heading("Organisational Defences"),

        list([
            "Security awareness training and phishing simulations.",
            "Multi-factor authentication.",
            "Email filtering and attachment scanning.",
            "Domain protection such as SPF, DKIM and DMARC.",
            "Clear payment approval workflows.",
            "Reporting button or process for suspicious emails.",
            "Least privilege access.",
            "Incident response plan for credential theft.",
        ]),

        note(
            "No legitimate bank, government office or support team should ask for your OTP, password, PIN or CVV. These secrets must never be shared, even if the caller sounds official.",
            "warning",
            "Golden Rule"
        ),

        keyPoints([
            "Social engineering manipulates people rather than only technology.",
            "Phishing impersonates trusted sources to steal sensitive data.",
            "Spear phishing is targeted; whaling targets senior executives.",
            "Smishing uses SMS; vishing uses voice calls.",
            "Urgency, fear, suspicious links and requests for OTPs are red flags.",
            "Verification through official channels and MFA reduce phishing impact.",
        ]),
    ],

    {
        summary:
            "Understand phishing, spear phishing, smishing, vishing, social engineering techniques, red flags and defensive practices.",
        minutes: 13,
        tags: ["cyber-security", "phishing", "social-engineering", "smishing", "vishing"],

        mcqs: [
            mcq(
                "Social engineering mainly attacks:",
                ["Human psychology and trust", "Only CPU fan", "Only monitor display", "Only legal documents"],
                0,
                "Social engineering manipulates people into unsafe actions."
            ),
            mcq(
                "Phishing attempts to:",
                ["Trick users into revealing sensitive information", "Improve password strength", "Install official updates only", "Create backups"],
                0,
                "Phishing impersonates trusted sources to steal secrets."
            ),
            mcq(
                "Spear phishing is:",
                ["Targeted phishing customised for a specific victim", "Fishing in water", "Only antivirus scanning", "Normal browsing"],
                0,
                "Spear phishing targets selected individuals or organisations with customised messages."
            ),
            mcq(
                "Smishing uses:",
                ["SMS or text messages", "Only satellite TV", "Only printers", "Only firewall logs"],
                0,
                "Smishing is phishing through SMS/messages."
            ),
            mcq(
                "Vishing uses:",
                ["Voice calls", "Only spreadsheets", "Only encrypted disks", "Only QR codes"],
                0,
                "Vishing is voice-call phishing."
            ),
            mcq(
                "A phishing red flag is:",
                ["Urgent request for OTP or password", "Official app opened manually", "Verified known website", "Normal software update from official store"],
                0,
                "Urgency and requests for secrets are common phishing signs."
            ),
        ],

        questions: [
            qa(
                "Define social engineering and explain common techniques.",
                "Social engineering is the manipulation of people into revealing confidential information, performing unsafe actions or bypassing security controls. It exploits human emotions such as fear, urgency, curiosity, greed and trust. Common techniques include phishing, where fake emails or websites steal credentials; pretexting, where an attacker creates a false story; baiting, where a free item or download is used as a trap; quid pro quo, where fake help is offered in exchange for information; tailgating, where an attacker follows an authorised person into a restricted area; and impersonation of trusted officials or employees.",
                5
            ),
            qa(
                "Explain phishing and its types.",
                "Phishing is a social engineering attack where attackers impersonate trusted organisations or people to steal passwords, OTPs, PINs, banking details or personal information. Email phishing sends mass fake emails, often pretending to be banks or delivery companies. Spear phishing is targeted and customised for a particular person or organisation. Whaling targets senior executives. Smishing uses SMS or messaging apps. Vishing uses phone calls where attackers pretend to be bank officers, police or support staff. Clone phishing copies a real email but replaces the link or attachment with a malicious one.",
                5
            ),
            qa(
                "How can individuals and organisations prevent phishing attacks?",
                "Individuals can prevent phishing by checking sender addresses, avoiding suspicious links and attachments, manually typing official website URLs, never sharing OTPs, passwords, PINs or CVVs, using multi-factor authentication and verifying urgent requests through trusted channels. Organisations should conduct security awareness training, run phishing simulations, use email filtering, scan attachments, implement MFA, apply SPF, DKIM and DMARC for email domain protection, enforce least privilege and create clear procedures for payment approvals. Suspicious emails should be reported quickly so security teams can block similar attacks and warn other users.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — Hacking Tools and Attack Techniques
========================================================= */

const hackingToolsAndAttackTechniques = createTopic(
    "hacking-tools-and-attack-techniques",
    "Hacking Tools and Attack Techniques",

    [
        text(
            "Cybercriminals use various tools and methods to discover weaknesses, steal information or gain unauthorised access. The same categories of tools may also be used legally by ethical hackers and security teams when they have permission."
        ),

        note(
            "This topic explains attack methods at a defensive and educational level. Tools must be used only on systems you own or are authorised to test. Unauthorised scanning, password attacks or exploitation is illegal.",
            "warning",
            "Legal and Ethical Use"
        ),

        heading("Reconnaissance"),

        definition(
            "Reconnaissance",
            "Reconnaissance is the process of collecting information about a target before an attack or security test."
        ),

        table(
            ["Recon Type", "Meaning", "Examples"],
            [
                ["Passive reconnaissance", "Collecting information without directly interacting with target systems", "Public websites, job posts, social media"],
                ["Active reconnaissance", "Directly interacting with target systems", "Authorised port scanning, service identification"],
            ]
        ),

        heading("Scanning and Enumeration"),

        definition(
            "Scanning",
            "Scanning is the process of identifying live hosts, open ports, running services and possible vulnerabilities in a network or system."
        ),

        definition(
            "Enumeration",
            "Enumeration is the process of extracting detailed information such as usernames, shares, services, versions or configurations from a target."
        ),

        table(
            ["Activity", "Purpose", "Defensive Use"],
            [
                ["Port scanning", "Find open network ports", "Close unnecessary services"],
                ["Service detection", "Identify running services and versions", "Patch vulnerable software"],
                ["Vulnerability scanning", "Find known weaknesses", "Prioritise fixes"],
                ["Configuration review", "Find insecure settings", "Harden systems"],
            ]
        ),

        heading("Password Attack Concepts"),

        table(
            ["Attack Type", "Meaning", "Defence"],
            [
                ["Brute force", "Trying many possible passwords", "Rate limits, MFA, account lockout"],
                ["Dictionary attack", "Trying common words/password lists", "Strong unique passwords"],
                ["Credential stuffing", "Trying leaked username/password pairs on other sites", "Do not reuse passwords; MFA"],
                ["Password spraying", "Trying few common passwords across many accounts", "Detect failed login patterns"],
                ["Shoulder surfing", "Observing password entry physically", "Privacy screens, awareness"],
            ]
        ),

        heading("Privilege Escalation"),

        definition(
            "Privilege Escalation",
            "Privilege escalation occurs when an attacker gains higher access rights than originally available, such as moving from normal user to administrator."
        ),

        table(
            ["Type", "Meaning", "Example Defence"],
            [
                ["Vertical privilege escalation", "Gain higher privilege level", "Patch systems; least privilege"],
                ["Horizontal privilege escalation", "Access another user's data at same privilege level", "Strong access control checks"],
            ]
        ),

        heading("Backdoors and Remote Access Trojans"),

        definition(
            "Backdoor",
            "A backdoor is a hidden method of bypassing normal authentication or security controls to access a system."
        ),

        definition(
            "Remote Access Trojan",
            "A Remote Access Trojan, or RAT, is malware that gives an attacker remote control over an infected system."
        ),

        heading("Packet Sniffing and Spoofing"),

        table(
            ["Technique", "Meaning", "Defence"],
            [
                ["Packet sniffing", "Capturing network traffic", "Use HTTPS, VPN, secure Wi-Fi"],
                ["IP spoofing", "Forging source IP address", "Ingress/egress filtering"],
                ["Email spoofing", "Forging sender address", "SPF, DKIM, DMARC"],
                ["ARP spoofing", "Tricking local network devices about MAC/IP mapping", "Network monitoring, static ARP for critical systems"],
                ["DNS spoofing", "Redirecting users to fake destinations", "DNSSEC, secure resolvers"],
            ]
        ),

        heading("Exploit and Vulnerability"),

        definition(
            "Vulnerability",
            "A vulnerability is a weakness in software, hardware, configuration or process that can be exploited."
        ),

        definition(
            "Exploit",
            "An exploit is code, technique or method that uses a vulnerability to cause unintended behaviour or gain unauthorised access."
        ),

        heading("Common Defensive Controls"),

        list([
            "Patch operating systems and applications regularly.",
            "Disable unnecessary services and close unused ports.",
            "Use firewalls and network segmentation.",
            "Apply least privilege access.",
            "Use MFA for important accounts.",
            "Monitor logs for suspicious scanning or login attempts.",
            "Use intrusion detection/prevention systems.",
            "Conduct authorised vulnerability assessments.",
            "Maintain asset inventory and secure configuration baselines.",
        ], true),

        keyPoints([
            "Reconnaissance collects target information before attack/testing.",
            "Scanning finds hosts, ports, services and vulnerabilities.",
            "Password attacks include brute force, dictionary attacks, spraying and credential stuffing.",
            "Privilege escalation increases attacker access rights.",
            "Sniffing captures traffic; spoofing forges identity or addressing information.",
            "The same tools may be legal or illegal depending on authorisation.",
        ]),
    ],

    {
        summary:
            "Learn reconnaissance, scanning, enumeration, password attack concepts, privilege escalation, sniffing, spoofing and defensive controls.",
        minutes: 13,
        tags: ["cyber-security", "hacking-methods", "reconnaissance", "password-attacks", "sniffing"],

        mcqs: [
            mcq(
                "Reconnaissance means:",
                ["Collecting information about a target", "Deleting backups", "Encrypting own files", "Normal typing"],
                0,
                "Reconnaissance is information gathering before an attack or security assessment."
            ),
            mcq(
                "Port scanning is used to identify:",
                ["Open network ports and services", "Screen colour", "Keyboard language", "File owner only"],
                0,
                "Port scanning identifies accessible ports/services."
            ),
            mcq(
                "Credential stuffing uses:",
                ["Leaked username/password pairs", "Only new strong passwords", "Only firewalls", "Only data backups"],
                0,
                "Credential stuffing tries breached credentials on other services."
            ),
            mcq(
                "Privilege escalation means:",
                ["Gaining higher or unauthorised access rights", "Reducing screen brightness", "Creating normal backup", "Installing legal patch only"],
                0,
                "Privilege escalation increases attacker permissions."
            ),
            mcq(
                "Packet sniffing means:",
                ["Capturing network traffic", "Cleaning network cables", "Compressing images", "Deleting logs always"],
                0,
                "Sniffing captures packets travelling over a network."
            ),
            mcq(
                "The best defence against password reuse attacks is:",
                ["Unique passwords and MFA", "Same password everywhere", "Disable updates", "Share OTPs"],
                0,
                "Unique passwords stop reuse damage; MFA adds protection."
            ),
        ],

        questions: [
            qa(
                "Explain reconnaissance, scanning and enumeration.",
                "Reconnaissance is the process of collecting information about a target before an attack or authorised security test. Passive reconnaissance uses public information such as websites, social media or public records without directly touching the target systems. Active reconnaissance directly interacts with systems, such as authorised scanning. Scanning identifies live hosts, open ports, running services and possible vulnerabilities. Enumeration goes deeper by extracting details such as service versions, usernames, network shares or configurations. Defensively, these activities help organisations understand their attack surface and fix exposed or vulnerable services.",
                5
            ),
            qa(
                "Explain common password attack techniques and their defences.",
                "Common password attacks include brute force, dictionary attacks, credential stuffing and password spraying. Brute force tries many possible password combinations. Dictionary attacks try common words or known weak passwords. Credential stuffing uses leaked username-password pairs from one breach to access other websites. Password spraying tries a few common passwords across many accounts to avoid lockouts. Defences include long unique passwords, password managers, multi-factor authentication, rate limiting, account lockout policies, monitoring failed login patterns and preventing password reuse. Users should never share passwords or OTPs.",
                5
            ),
            qa(
                "What are sniffing and spoofing? Explain with defences.",
                "Sniffing means capturing network traffic to read or analyse data moving across a network. If traffic is unencrypted, attackers may see usernames, messages or sensitive data. Defences include HTTPS, VPNs, secure Wi-Fi encryption and avoiding public insecure networks. Spoofing means forging identity or address information. Examples include email spoofing, IP spoofing, ARP spoofing and DNS spoofing. Defences include SPF, DKIM and DMARC for email, ingress/egress filtering for IP spoofing, network monitoring for ARP spoofing, DNSSEC and trusted DNS resolvers for DNS spoofing. Encryption and authentication reduce the impact of both.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — Web and Network-Based Attacks
========================================================= */

const webAndNetworkBasedAttacks = createTopic(
    "web-and-network-based-attacks",
    "Web and Network-Based Attacks",

    [
        text(
            "Web applications and networks are common cybercrime targets because they are exposed to users and often contain sensitive data. Weak validation, poor authentication, misconfiguration and unpatched systems create opportunities for attackers."
        ),

        heading("Web Application Attacks"),

        table(
            ["Attack", "Meaning", "Primary Defence"],
            [
                ["SQL Injection", "Malicious input changes database query behaviour", "Parameterized queries/prepared statements"],
                ["Cross-Site Scripting (XSS)", "Attacker injects script into web pages", "Output encoding, CSP, sanitisation"],
                ["Cross-Site Request Forgery (CSRF)", "Victim browser sends unwanted authenticated request", "SameSite cookies, CSRF tokens"],
                ["File Upload Attack", "Malicious file uploaded to server", "Allow-list types, rename, scan, store safely"],
                ["Broken Authentication", "Weak login/session handling", "MFA, secure sessions, rate limits"],
                ["Broken Access Control", "Users access unauthorised data/actions", "Server-side authorisation checks"],
            ]
        ),

        heading("SQL Injection"),

        definition(
            "SQL Injection",
            "SQL injection is an attack where untrusted input is inserted into a database query in a way that changes the intended query logic."
        ),

        code(
            `// Unsafe idea: user input is directly joined into query text
"SELECT * FROM users WHERE email = '" + userInput + "'"

// Safe idea: use parameterized query / prepared statement
"SELECT * FROM users WHERE email = ?"   // value is passed separately`,
            "text",
            "SQL injection prevention concept"
        ),

        heading("Cross-Site Scripting"),

        definition(
            "Cross-Site Scripting",
            "Cross-Site Scripting, or XSS, occurs when malicious script is injected into a page and executed in another user's browser."
        ),

        table(
            ["XSS Type", "Meaning"],
            [
                ["Stored XSS", "Payload is saved on server and shown to users"],
                ["Reflected XSS", "Payload comes from request and is reflected in response"],
                ["DOM-based XSS", "Client-side JavaScript writes unsafe data into DOM"],
            ]
        ),

        heading("Denial of Service and Distributed Denial of Service"),

        definition(
            "Denial of Service",
            "A Denial of Service, or DoS, attack attempts to make a system unavailable to legitimate users by exhausting resources."
        ),

        definition(
            "Distributed Denial of Service",
            "A Distributed Denial of Service, or DDoS, attack uses many compromised systems to flood a target with traffic or requests."
        ),

        table(
            ["Aspect", "DoS", "DDoS"],
            [
                ["Source", "Single or limited source", "Many distributed sources"],
                ["Scale", "Smaller", "Larger and harder to block"],
                ["Example", "One machine flooding a service", "Botnet flooding a website"],
                ["Defence", "Rate limits, firewall rules", "CDN, scrubbing, Anycast, DDoS protection"],
            ]
        ),

        heading("Man-in-the-Middle Attack"),

        definition(
            "Man-in-the-Middle Attack",
            "A Man-in-the-Middle, or MITM, attack occurs when an attacker secretly intercepts or alters communication between two parties."
        ),

        list([
            "Use HTTPS/TLS for web communication.",
            "Avoid entering sensitive data on public Wi-Fi without protection.",
            "Check certificate warnings carefully.",
            "Use VPN on untrusted networks when appropriate.",
            "Use secure Wi-Fi encryption and avoid fake hotspots.",
        ]),

        heading("Network-Based Attacks"),

        table(
            ["Attack", "Meaning", "Defence"],
            [
                ["Port scanning", "Finding open services", "Close unused ports; firewall"],
                ["Eavesdropping", "Listening to traffic", "Encryption"],
                ["Session hijacking", "Stealing or taking over a session", "Secure cookies, HTTPS, session rotation"],
                ["DNS poisoning", "Redirecting domain lookups", "DNSSEC, secure DNS"],
                ["ARP spoofing", "Local network traffic interception", "Network monitoring, segmentation"],
                ["DDoS", "Flooding service", "CDN, rate limiting, DDoS mitigation"],
            ]
        ),

        heading("Web Attack Prevention Checklist"),

        list([
            "Validate and sanitise all input on the server.",
            "Use prepared statements for database queries.",
            "Encode output to prevent XSS.",
            "Use secure authentication and session management.",
            "Apply authorisation checks on every sensitive action.",
            "Set secure cookie flags: HttpOnly, Secure and SameSite.",
            "Use CSRF tokens for cookie-based forms.",
            "Keep frameworks, libraries and servers updated.",
            "Disable verbose error messages in production.",
            "Use web application firewalls and monitoring where appropriate.",
        ], true),

        note(
            "Never rely only on client-side validation. Attackers can bypass browsers and send requests directly. Security checks must happen on the server.",
            "warning",
            "Server-Side Security"
        ),

        keyPoints([
            "SQL injection changes database query logic; prepared statements prevent it.",
            "XSS runs malicious scripts in a user's browser; output encoding helps prevent it.",
            "CSRF abuses automatically sent cookies; SameSite and CSRF tokens help.",
            "DoS/DDoS attacks target availability.",
            "MITM intercepts communication; HTTPS/TLS protects data in transit.",
            "Server-side validation, patching and monitoring are essential.",
        ]),
    ],

    {
        summary:
            "Learn SQL injection, XSS, CSRF, DoS/DDoS, MITM, network attacks and defensive best practices.",
        minutes: 13,
        tags: ["cyber-security", "web-attacks", "sql-injection", "xss", "ddos", "mitm"],

        mcqs: [
            mcq(
                "SQL injection is best prevented by:",
                ["Parameterized queries/prepared statements", "Sharing database password", "Disabling all backups", "Using weak validation only in browser"],
                0,
                "Prepared statements separate query logic from user data."
            ),
            mcq(
                "XSS executes malicious code in:",
                ["Victim's browser", "Only printer memory", "Only keyboard", "Only power cable"],
                0,
                "XSS injects scripts that run in users' browsers."
            ),
            mcq(
                "CSRF relies on:",
                ["Browser automatically sending cookies", "Only broken hard disks", "Only antivirus updates", "Only image compression"],
                0,
                "CSRF abuses authenticated cookies sent automatically by browsers."
            ),
            mcq(
                "DDoS uses:",
                ["Many distributed systems to flood a target", "Only one legal backup", "Only local text file", "Only encrypted email"],
                0,
                "DDoS attacks commonly use many compromised machines."
            ),
            mcq(
                "MITM attack means:",
                ["Attacker intercepts communication between parties", "User changes own password", "System performs backup", "Website loads CSS"],
                0,
                "Man-in-the-middle attacks intercept or alter communication."
            ),
            mcq(
                "HTTPS mainly protects against:",
                ["Eavesdropping and tampering in transit", "Weak business logic always", "All phishing automatically", "Poor user passwords always"],
                0,
                "HTTPS/TLS encrypts and authenticates communication in transit."
            ),
        ],

        questions: [
            qa(
                "Explain SQL injection and its prevention.",
                "SQL injection is a web application attack where untrusted input is inserted into a database query and changes its intended logic. It may allow attackers to bypass login, read confidential data, modify records or delete information. The main cause is building SQL queries by directly concatenating user input. Prevention includes using parameterized queries or prepared statements, validating input, applying least privilege to database accounts, using ORM safely, avoiding detailed database errors in responses and monitoring suspicious queries. Prepared statements are the most important defence because user input is treated as data, not executable SQL logic.",
                5
            ),
            qa(
                "Explain XSS and CSRF with defences.",
                "Cross-Site Scripting, or XSS, occurs when malicious JavaScript is injected into a web page and runs in another user's browser. It can steal data, perform actions or deface pages. Defences include output encoding, using safe DOM APIs, sanitising allowed HTML, Content Security Policy and HttpOnly cookies. Cross-Site Request Forgery, or CSRF, tricks a logged-in user's browser into sending an unwanted request to a trusted site. It works because cookies are sent automatically. Defences include SameSite cookies, CSRF tokens, re-authentication for sensitive actions and using Authorization headers for APIs.",
                5
            ),
            qa(
                "Differentiate between DoS and DDoS attacks.",
                "A Denial of Service, or DoS, attack attempts to make a system unavailable by exhausting resources such as bandwidth, CPU, memory or application capacity. It may come from a single source or limited sources. A Distributed Denial of Service, or DDoS, attack uses many compromised devices, often a botnet, to flood the target. DDoS is usually larger and harder to block because traffic comes from many locations. Defences include rate limiting, firewalls, CDN services, traffic scrubbing, Anycast networks, autoscaling, caching, and incident response plans. Both attacks primarily target availability.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 5 — Botnets, Spam and Cybercrime Operations
========================================================= */

const botnetsSpamAndCybercrimeOperations = createTopic(
    "botnets-spam-and-cybercrime-operations",
    "Botnets, Spam and Cybercrime Operations",

    [
        definition(
            "Botnet",
            "A botnet is a network of compromised devices controlled by an attacker, usually without the owners' knowledge."
        ),

        text(
            "Botnets may include computers, servers, routers, IoT cameras and smartphones. Attackers control them through command-and-control infrastructure and use them for DDoS, spam, credential attacks, malware distribution and cryptocurrency mining."
        ),

        heading("Botnet Components"),

        table(
            ["Component", "Meaning"],
            [
                ["Bot / Zombie", "Compromised device controlled by attacker"],
                ["Botmaster", "Person/group controlling the botnet"],
                ["Command and Control (C2)", "Communication channel used to send instructions"],
                ["Payload", "Malicious action performed by bots"],
                ["Infrastructure", "Servers/domains/services used to operate botnet"],
            ]
        ),

        heading("Botnet Uses"),

        list([
            "Distributed Denial of Service attacks.",
            "Sending spam emails.",
            "Credential stuffing and password spraying.",
            "Click fraud and ad fraud.",
            "Cryptocurrency mining without permission.",
            "Malware distribution.",
            "Proxying criminal traffic through victim devices.",
            "Data theft and surveillance.",
        ]),

        heading("Spam"),

        definition(
            "Spam",
            "Spam is unwanted, unsolicited bulk digital communication, usually email or messages, often used for advertising, scams, phishing or malware distribution."
        ),

        table(
            ["Spam Type", "Description"],
            [
                ["Email spam", "Bulk unsolicited emails"],
                ["SMS spam", "Unwanted promotional or scam messages"],
                ["Comment spam", "Automated spam in blogs/forums"],
                ["Social media spam", "Fake posts, links or direct messages"],
                ["Malware spam", "Messages carrying malicious links or attachments"],
            ]
        ),

        heading("Cybercrime-as-a-Service"),

        definition(
            "Cybercrime-as-a-Service",
            "Cybercrime-as-a-Service refers to criminal services, tools or infrastructure rented or sold to other criminals, lowering the skill needed to commit cybercrime."
        ),

        table(
            ["Service Type", "Meaning"],
            [
                ["Phishing kits", "Ready-made fake login page packages"],
                ["Malware rental", "Malware access sold or rented"],
                ["Botnet rental", "Use of botnets for DDoS or spam"],
                ["Stolen credentials", "Leaked usernames/passwords sold illegally"],
                ["Bulletproof hosting", "Hosting that ignores abuse complaints"],
                ["Ransomware-as-a-Service", "Ransomware operated through affiliate model"],
            ]
        ),

        heading("Money Mules"),

        definition(
            "Money Mule",
            "A money mule is a person who transfers illegally obtained money on behalf of criminals, knowingly or unknowingly, to hide the money trail."
        ),

        text(
            "Cybercriminals often recruit money mules through fake job offers, work-from-home scams, romance scams or commission-based transfer schemes."
        ),

        heading("Underground Economy"),

        table(
            ["Item/Service", "Criminal Use"],
            [
                ["Stolen cards", "Fraudulent purchases"],
                ["Credentials", "Account takeover"],
                ["Personal data", "Identity theft"],
                ["Fake documents", "Fraud verification"],
                ["Botnet access", "DDoS/spam"],
                ["Exploit information", "Targeting vulnerable systems"],
            ]
        ),

        heading("Detection and Defence"),

        list([
            "Use anti-spam filters and email authentication.",
            "Apply SPF, DKIM and DMARC to reduce email spoofing.",
            "Monitor unusual outbound traffic from devices.",
            "Secure routers and IoT devices with strong passwords and updates.",
            "Block known malicious domains and IPs using threat intelligence.",
            "Use endpoint detection and response tools.",
            "Educate users about fake jobs and money mule recruitment.",
            "Report spam, phishing and fraud quickly.",
        ], true),

        heading("Indicators of Compromised Devices in a Botnet"),

        table(
            ["Indicator", "Possible Explanation"],
            [
                ["High network usage when idle", "Bot communicating or attacking"],
                ["Device very slow", "Background malicious process"],
                ["Unknown processes/services", "Malware running"],
                ["Emails sent without user knowledge", "Spam bot activity"],
                ["Router settings changed", "Compromised network device"],
                ["Security tools disabled", "Malware hiding itself"],
            ]
        ),

        note(
            "Many botnets grow because users leave default passwords on routers, cameras and IoT devices. Change default credentials and update firmware.",
            "warning",
            "IoT Security"
        ),

        keyPoints([
            "A botnet is a network of compromised devices controlled by attackers.",
            "Botnets are used for DDoS, spam, credential attacks and malware distribution.",
            "Spam is unsolicited bulk communication and may carry scams or malware.",
            "Cybercrime-as-a-Service makes cybercrime easier for low-skill criminals.",
            "Money mules help criminals move illegal funds.",
            "Strong passwords, updates, monitoring and email authentication reduce risk.",
        ]),
    ],

    {
        summary:
            "Learn botnets, command-and-control, spam, cybercrime-as-a-service, money mules, underground economy and defensive measures.",
        minutes: 13,
        tags: ["cyber-security", "botnet", "spam", "cybercrime-as-a-service", "money-mule"],

        mcqs: [
            mcq(
                "A botnet is:",
                ["A network of compromised devices controlled by an attacker", "Only a legal backup network", "Only a printer queue", "Only a spreadsheet"],
                0,
                "Botnets contain infected devices controlled remotely."
            ),
            mcq(
                "A compromised device in a botnet is often called:",
                ["Zombie", "Firewall", "Certificate", "Monitor"],
                0,
                "Botnet-infected devices are commonly called bots or zombies."
            ),
            mcq(
                "C2 in botnet context means:",
                ["Command and Control", "Copy and Compress", "Code and Compile", "Click and Close"],
                0,
                "C2 is infrastructure used to control bots."
            ),
            mcq(
                "Spam is:",
                ["Unwanted unsolicited bulk communication", "Only encrypted backup", "Only legal certificate", "Only password manager"],
                0,
                "Spam refers to unsolicited bulk messages."
            ),
            mcq(
                "Cybercrime-as-a-Service means:",
                ["Criminal tools/services rented or sold to other criminals", "Government awareness training", "Legal cloud storage only", "Antivirus subscription only"],
                0,
                "CaaS lowers the skill needed by offering criminal tools/services."
            ),
            mcq(
                "A money mule is used to:",
                ["Transfer illegal funds for criminals", "Repair computers", "Create legal backups", "Design official websites"],
                0,
                "Money mules move criminal proceeds and hide the money trail."
            ),
        ],

        questions: [
            qa(
                "What is a botnet? Explain its components and uses.",
                "A botnet is a network of compromised devices controlled by an attacker without the owners' knowledge. Each infected device is called a bot or zombie. The person or group controlling the botnet is called the botmaster. Command-and-control, or C2, infrastructure is used to send instructions to bots. The payload is the malicious action performed. Botnets are used for DDoS attacks, spam distribution, malware spreading, credential stuffing, click fraud, cryptocurrency mining, proxying criminal traffic and data theft. Botnets can include computers, servers, routers, IoT cameras and smartphones.",
                5
            ),
            qa(
                "Explain spam and its role in cybercrime.",
                "Spam is unwanted and unsolicited bulk digital communication, usually sent through email, SMS, comments or social media messages. In cybercrime, spam is used to distribute phishing links, malware attachments, fake investment schemes, lottery scams, counterfeit products and fraudulent websites. Spam campaigns can reach millions of users at low cost, and even a small success rate can benefit criminals. Botnets are often used to send spam from compromised devices. Defences include spam filters, user awareness, email authentication methods such as SPF, DKIM and DMARC, blocking malicious links and reporting suspicious messages.",
                5
            ),
            qa(
                "What is Cybercrime-as-a-Service? Why is it dangerous?",
                "Cybercrime-as-a-Service is a criminal business model where tools, services or infrastructure for cybercrime are sold or rented to other criminals. Examples include phishing kits, ransomware-as-a-service, botnet rental, stolen credentials, malware rental and bulletproof hosting. It is dangerous because it allows even low-skill criminals to perform cyber attacks using ready-made tools. It also professionalises cybercrime, making attacks more scalable and frequent. Criminal groups can specialise in different services, such as stealing data, hosting malware or laundering money. This increases the overall cyber threat to individuals, businesses and governments.",
                5
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit2Topics = [
    malwareAndMaliciousSoftware,
    phishingAndSocialEngineering,
    hackingToolsAndAttackTechniques,
    webAndNetworkBasedAttacks,
    botnetsSpamAndCybercrimeOperations,
];