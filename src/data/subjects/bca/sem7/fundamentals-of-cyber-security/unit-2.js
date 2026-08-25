/* =========================================================
   BCA • SEM 7 • Fundamentals of Cyber Security
   UNIT 2 — Incident Response, Web Security, Tools & Future Trends
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
   TOPIC 1 — Incident Response Lifecycle & Preparation
========================================================= */

const incidentResponseLifecycle = createTopic(
    "incident-response-lifecycle-and-preparation",
    "Incident Response Lifecycle & Preparation",

    [
        definition(
            "Incident Response",
            "Incident Response is the structured methodology for identifying, containing, eradicating, recovering from, and learning from security incidents to minimize organizational impact and restore operations."
        ),

        heading("NIST SP 800-61 Incident Response Lifecycle"),

        steps([
            "Preparation — Develop policies, assemble response teams, deploy monitoring tools, and conduct training.",
            "Detection and Analysis — Monitor for indicators of compromise, validate alerts, classify severity, and document initial findings.",
            "Containment — Isolate affected systems (short-term containment) and apply temporary fixes (long-term containment) to prevent spread.",
            "Eradication — Remove malware, close exploited vulnerabilities, disable compromised accounts, and eliminate attacker access.",
            "Recovery — Restore systems from clean backups, verify functionality, and gradually return to normal operations.",
            "Post-Incident Activity — Conduct lessons-learned reviews, update policies, improve detection rules, and share intelligence."
        ]),

        heading("Preparation Components"),

        table(
            ["Component", "Purpose", "Example Action"],
            [
                ["Incident Response Plan (IRP)", "Documented procedures for response actions", "Define roles: Incident Commander, Technical Lead, Communications"],
                ["Response Team (CSIRT)", "Dedicated team with clear authority and skills", "Security analysts, system administrators, legal, PR"],
                ["Monitoring Tools", "Detect anomalies and generate alerts", "SIEM (Security Information and Event Management), IDS alerts"],
                ["Communication Plan", "Internal and external notification procedures", "Pre-drafted templates for customers, regulators, media"]
            ]
        ),

        heading("Incident Severity Classification"),

        table(
            ["Severity Level", "Criteria", "Response Time"],
            [
                ["Critical (P1)", "Active data breach, ransomware, complete service outage", "Immediate (minutes)"],
                ["High (P2)", "Significant vulnerability exploitation, partial data exposure", "Within 4 hours"],
                ["Medium (P3)", "Suspicious activity, unconfirmed compromise", "Within 24 hours"],
                ["Low (P4)", "Minor policy violation, informational event", "Within 72 hours"]
            ]
        ),

        note(
            "Preparation is the most critical phase. Organizations without a tested Incident Response Plan typically suffer greater damage and longer recovery times during real incidents.",
            "warning",
            "Preparation Priority"
        ),

        keyPoints([
            "Incident Response follows Preparation, Detection, Containment, Eradication, Recovery, and Post-Incident review.",
            "Preparation includes documented plans, trained teams, monitoring tools, and communication templates.",
            "Severity classification ensures appropriate resource allocation and response urgency.",
            "Post-incident reviews improve future defenses and close gaps identified during the event."
        ]),
  ],

{
    summary:
    "Understand the NIST Incident Response lifecycle phases, preparation components, severity classification, and the importance of post-incident improvement.",
        minutes: 12,
            tags: ["incident-response", "nist-sp-800-61", "csirt", "preparation", "post-incident", "important"],

                mcqs: [
                    mcq(
                        "According to NIST SP 800-61, which phase follows 'Containment'?",
                        ["Preparation", "Detection", "Eradication", "Recovery"],
                        2,
                        "After Containment comes Eradication (removing malware and vulnerabilities)."
                    ),
                    mcq(
                        "What is the primary purpose of the Post-Incident Activity phase?",
                        ["To delete all evidence", "To learn from the incident and improve future defenses", "To restart the server only", "To hide the incident from management"],
                        1,
                        "Post-Incident reviews document lessons learned and improve policies and detection."
                    ),
                    mcq(
                        "Which component defines the roles and authority of the response team?",
                        ["Monitoring Tools", "Incident Response Plan (IRP)", "Severity Classification only", "Backup Software"],
                        1,
                        "The IRP defines team roles, authority, and step-by-step response procedures."
                    ),
                    mcq(
                        "What severity level requires an immediate response (within minutes)?",
                        ["Low (P4)", "Medium (P3)", "High (P2)", "Critical (P1)"],
                        3,
                        "Critical (P1) includes active breaches and complete outages requiring immediate action."
                    ),
                ],

                    questions: [
                        qa(
                            "Describe the Incident Response lifecycle according to NIST SP 800-61.",
                            "The lifecycle includes: Preparation (policies, team, tools); Detection and Analysis (identify and classify); Containment (isolate systems); Eradication (remove malware, close vulnerabilities); Recovery (restore operations from clean backups); and Post-Incident Activity (document lessons, update defenses, share intelligence)."
                            ,
                            4
                        ),
                        qa(
                            "Why is the Preparation phase considered the most critical in Incident Response?",
                            "Without preparation, organizations react chaotically during incidents — lacking authority, tools, and communication plans. Preparation ensures rapid, coordinated action: roles are defined, detection systems are active, backups exist, and legal/compliance obligations are understood in advance. Organizations with tested plans recover faster and suffer less damage."
                            ,
                            4
                        ),
                    ],
  }
);

/* =========================================================
   TOPIC 2 — Security Awareness, Professional Ethics & Legal Compliance
========================================================= */

const securityAwarenessAndEthics = createTopic(
    "security-awareness-professional-ethics-legal-compliance",
    "Security Awareness, Professional Ethics & Legal Compliance",

    [
        heading("Security Awareness and Human Factors"),

        table(
            ["Practice", "Purpose", "Implementation"],
            [
                ["Regular Training", "Keep staff updated on threats and safe practices", "Quarterly workshops, simulated phishing campaigns"],
                ["Acceptable Use Policies", "Define permitted and prohibited resource use", "Written policies signed by all users"],
                ["Data Handling Procedures", "Ensure secure storage, transmission, and disposal of data", "Encryption for storage/transit; secure shredding for physical media"],
                ["Incident Reporting Culture", "Encourage reporting of suspicious activities without fear", "Anonymous reporting channels, whistleblower protection"]
            ]
        ),

        heading("Legal and Regulatory Frameworks in Cyber Security"),

        table(
            ["Regulation / Law", "Scope", "Key Requirement"],
            [
                ["GDPR (EU)", "Personal data of EU residents", "Data minimization, consent, breach notification within 72 hours, right to erasure"],
                ["HIPAA (U.S.)", "Healthcare information (PHI)", "Administrative, physical, and technical safeguards; audit controls"],
                ["PCI-DSS", "Payment card data", "Encryption, access controls, regular vulnerability scans"],
                ["SOX (U.S.)", "Financial reporting and internal controls", "Audit trails, data integrity controls, executive accountability"]
            ]
        ),

        heading("Professional Ethics in Cyber Security"),

        table(
            ["Ethical Obligation", "Application Example"],
            [
                ["Confidentiality", "Do not disclose sensitive findings or user data without authorization"],
                ["Integrity", "Report vulnerabilities honestly; do not manipulate audit results"],
                ["Competence", "Only perform assessments within your skill and legal authorization"],
                ["Responsibility", "Avoid actions that cause harm to systems or individuals"],
                ["Transparency", "Disclose conflicts of interest and limitations in assessments"]
            ]
        ),

        heading("Whistleblower Protection and Responsible Disclosure"),

        text(
            "Responsible disclosure involves reporting discovered vulnerabilities to the affected organization privately, allowing time for patching before public disclosure. Whistleblower protection ensures employees who report illegal or unethical security practices are protected from retaliation. Organizations should establish anonymous reporting channels and clear policies that encourage ethical reporting without punitive consequences."
        ),

        note(
            "Ethical security professionals recognize that technical skills must be paired with moral responsibility. Unauthorized access, even for testing purposes, without explicit authorization can result in serious legal consequences.",
            "tip",
            "Legal Authorization Required"
        ),

        keyPoints([
            "Security awareness training significantly reduces human-related vulnerabilities.",
            "Regulatory compliance (GDPR, HIPAA, PCI-DSS, SOX) requires specific security controls and breach reporting.",
            "Professional ethics demand confidentiality, integrity, competence, and responsible disclosure.",
            "Whistleblower protection and anonymous reporting channels support ethical organizational culture.",
        ]),
  ],

{
    summary:
    "Understand security awareness practices, professional ethics obligations, major regulatory frameworks (GDPR, HIPAA, PCI-DSS, SOX), and responsible disclosure requirements.",
        minutes: 12,
            tags: ["security-awareness", "ethics", "gdpr", "hipaa", "pci-dss", "responsible-disclosure", "important"],

                mcqs: [
                    mcq(
                        "Which regulation requires breach notification within 72 hours for EU residents' data?",
                        ["HIPAA", "PCI-DSS", "GDPR", "SOX"],
                        2,
                        "GDPR requires organizations to notify authorities of personal data breaches within 72 hours."
                    ),
                    mcq(
                        "What is Responsible Disclosure in vulnerability reporting?",
                        ["Publishing vulnerabilities immediately", "Privately reporting to the organization first, allowing time to patch", "Ignoring vulnerabilities", "Selling vulnerabilities publicly"],
                        1,
                        "Responsible disclosure gives organizations time to fix issues before public disclosure."
                    ),
                    mcq(
                        "Which professional ethical obligation requires reporting vulnerabilities honestly?",
                        ["Competence", "Integrity", "Confidentiality", "Responsibility"],
                        1,
                        "Integrity demands honest reporting of findings and avoidance of result manipulation."
                    ),
                    mcq(
                        "What is the purpose of Whistleblower Protection policies?",
                        ["To prevent reporting", "To protect employees who report unethical practices from retaliation", "To delete audit logs", "To hide security issues"],
                        1,
                        "Whistleblower protection encourages ethical reporting without fear of retaliation."
                    ),
                ],

                    questions: [
                        qa(
                            "Compare GDPR and HIPAA in terms of scope, key requirements, and penalties for non-compliance.",
                            "GDPR applies to personal data of EU residents regardless of location, requires consent for processing, mandates breach notification within 72 hours, and grants individuals rights to access and erasure. HIPAA applies specifically to Protected Health Information (PHI) in the U.S., requiring administrative, physical, and technical safeguards, audit controls, and business associate agreements. Both impose significant penalties for non-compliance, but GDPR applies broadly to any organization processing EU data, while HIPAA is sector-specific to healthcare."
                            ,
                            4
                        ),
                        qa(
                            "Why is Security Awareness Training critical, and how should it be implemented effectively?",
                            "Security awareness is critical because human error is a leading cause of breaches (phishing, weak passwords, accidental data exposure). Effective implementation includes regular interactive workshops (not just annual videos), simulated phishing campaigns to test and improve recognition skills, clear acceptable use policies, and positive reinforcement — employees should feel safe reporting mistakes without punitive consequences, which encourages faster incident detection and response."
                            ,
                            4
                        ),
                    ],
  }
);

/* =========================================================
   TOPIC 3 — Web Application Security (OWASP Top 10 Concepts)
========================================================= */

const webAppSecurity = createTopic(
    "web-application-security-owasp-top-10-concepts",
    "Web Application Security (OWASP Top 10 Concepts)",

    [
        heading("OWASP Top 10 Web Security Risks Overview"),

        text(
            "The Open Web Application Security Project (OWASP) publishes the OWASP Top 10 — a globally recognized awareness document for developers and security professionals highlighting the most critical web application security risks."
        ),

        heading("Key OWASP Top 10 Risks and Defenses"),

        table(
            ["Risk Category", "Attack Mechanism", "Defense Strategy"],
            [
                ["Broken Access Control", "Users access unauthorized functions or data by manipulating URLs or session tokens", "Implement server-side authorization checks for every request; deny by default"],
                ["Cryptographic Failures", "Sensitive data exposed through weak encryption, missing encryption, or improper key management", "Use TLS 1.3 for transmission; AES-256 for storage; secure key management"],
                ["Injection (SQL, NoSQL, Command, LDAP)", "Untrusted data sent to an interpreter as part of a command/query", "Use parameterized queries; validate and sanitize all inputs; avoid dynamic query construction"],
                ["Insecure Design", "Flaws in architecture and design patterns that create exploitable vulnerabilities", "Threat modeling during design; secure design patterns; defense-in-depth"],
                ["Security Misconfiguration", "Incorrectly configured permissions, default accounts, unnecessary features enabled", "Harden configurations; disable unnecessary services; implement secure defaults"],
                ["Vulnerable and Outdated Components", "Using libraries or frameworks with known vulnerabilities", "Regular dependency scanning; automated patch management; software composition analysis"],
                ["Identification and Authentication Failures", "Weak passwords, session management flaws, credential exposure", "Implement MFA; enforce strong password policies; secure session management"],
                ["Software and Data Integrity Failures", "Using untrusted updates or data without verification", "Verify digital signatures; use secure CI/CD pipelines; implement integrity monitoring"],
                ["Security Logging and Monitoring Failures", "Insufficient logging, missing alerts, or delayed detection of breaches", "Implement centralized logging; real-time monitoring; automated alerting; regular log review"],
                ["Server-Side Request Forgery (SSRF)", "Attackers coerce the server to make requests to internal resources or external malicious URLs", "Validate and sanitize URLs; restrict server capabilities; deny by default"]
            ]
        ),

        heading("Cross-Site Scripting (XSS) and Prevention"),

        definition(
            "Cross-Site Scripting (XSS)",
            "XSS is a vulnerability that occurs when an attacker injects malicious client-side scripts into web pages viewed by other users. These scripts can steal session cookies, redirect users, or perform actions on their behalf."
        ),

        code(
            `# Example Defense: Escaping user input before rendering
# (Conceptual example in Python-style pseudocode representing server-side logic)
user_input = "<script>alert('XSS')</script>"
safe_output = html_escape(user_input)  # Converts special chars to entities
# Result: &lt;script&gt;alert('XSS')&lt;/script&gt; — rendered harmlessly`,
            "python",
            "XSS Prevention Concept Example"
        ),

        heading("SQL Injection Prevention Principles"),

        list([
            "Always use parameterized queries (prepared statements) — never concatenate user input directly into SQL strings.",
            "Validate all user inputs against expected formats and reject unexpected data.",
            "Apply the principle of least privilege to database accounts (application accounts should have minimal permissions).",
            "Use stored procedures with parameter binding when appropriate.",
            "Regularly review database query logs for suspicious patterns."
        ]),

        note(
            "Many high-profile data breaches result from basic vulnerabilities in the OWASP Top 10. A security-first development culture — including code review, automated testing, and regular vulnerability assessments — significantly reduces risk.",
            "tip",
            "Proactive Security"
        ),

        keyPoints([
            "The OWASP Top 10 highlights the most critical web application security risks globally.",
            "Injection, access control failures, and cryptographic failures are consistently high-impact vulnerabilities.",
            "XSS prevention requires escaping all user-controlled output before rendering in HTML.",
            "SQL Injection is prevented exclusively through parameterized queries and input validation.",
            "Regular dependency scanning and patch management address vulnerable component risks."
        ]),
  ],

{
    summary:
    "Understand OWASP Top 10 risk categories, defense strategies for XSS and SQL Injection, and the importance of secure design, logging, and dependency management.",
        minutes: 14,
            tags: ["owasp", "xss", "sql-injection", "access-control", "security-logging", "important"],

                mcqs: [
                    mcq(
                        "Which OWASP Top 10 risk involves injecting malicious code through user input interpreted by a database or interpreter?",
                        ["Broken Access Control", "Cryptographic Failures", "Injection", "Insecure Design"],
                        2,
                        "Injection includes SQL, NoSQL, command, and LDAP injection through untrusted input."
                    ),
                    mcq(
                        "What is the primary defense against SQL Injection?",
                        ["Only strong passwords", "Parameterized queries (prepared statements)", "Only encryption", "Only firewalls"],
                        1,
                        "Parameterized queries separate SQL logic from user data, preventing injection."
                    ),
                    mcq(
                        "Which risk involves users accessing functions or data they should not have permission for?",
                        ["Broken Access Control", "Injection", "Insecure Design", "SSRF"],
                        0,
                        "Broken Access Control allows unauthorized access to resources or functions."
                    ),
                    mcq(
                        "Why is security logging important for incident response?",
                        ["To make websites faster", "To detect, investigate, and respond to security events quickly", "To store images", "To design interfaces"],
                        1,
                        "Comprehensive logging enables rapid detection, forensic analysis, and response to incidents."
                    ),
                ],

                    questions: [
                        qa(
                            "List and briefly explain the OWASP Top 10 categories and provide a defense for three of them.",
                            "The OWASP Top 10 includes: Broken Access Control (enforce server-side authorization), Cryptographic Failures (use TLS 1.3, AES-256), Injection (parameterized queries), Insecure Design (threat modeling), Security Misconfiguration (harden defaults), Vulnerable Components (dependency scanning), Authentication Failures (MFA, strong policies), Integrity Failures (verify signatures), Logging Failures (centralized monitoring), and SSRF (validate URLs, restrict server capabilities). Defenses: Access Control — deny by default; Injection — parameterized queries; Cryptographic Failures — enforce modern encryption standards."
                            ,
                            4
                        ),
                        qa(
                            "What is Cross-Site Scripting (XSS) and how is it prevented?",
                            "XSS injects malicious client-side scripts into pages viewed by other users. Prevention requires escaping all user-controlled output using functions like htmlspecialchars(), implementing Content Security Policy (CSP) headers, validating input formats, and avoiding direct insertion of user data into HTML without sanitization."
                            ,
                            4
                        ),
                    ],
  }
);

/* =========================================================
   TOPIC 4 — Security Tools, Frameworks & Professional Practice
========================================================= */

const securityToolsAndPractice = createTopic(
    "security-tools-frameworks-and-professional-practice",
    "Security Tools, Frameworks & Professional Practice",

    [
        definition(
            "Penetration Testing (Pen Testing)",
            "Penetration Testing is an authorized, simulated cyberattack against a system, network, or application to identify exploitable vulnerabilities before malicious actors discover them."
        ),

        heading("Common Security Tools and Their Purposes"),

        table(
            ["Tool / Framework", "Category", "Purpose / Function"],
            [
                ["Wireshark", "Network Analysis", "Capture and inspect network packets for anomalies"],
                ["Nmap", "Network Scanner", "Discover hosts, open ports, and services on networks"],
                ["Metasploit", "Penetration Testing", "Framework for developing and executing exploits"],
                ["Burp Suite", "Web Application Security", "Intercept, scan, and test web applications for vulnerabilities"],
                ["OWASP ZAP (Zed Attack Proxy)", "Web Security Testing", "Automated vulnerability scanning for web apps"],
                ["SIEM (Splunk, ELK)", "Security Monitoring", "Aggregate and analyze security logs for threat detection"]
            ]
        ),

        heading("Security Testing Methodologies"),

        table(
            ["Methodology", "Approach", "Best Use"],
            [
                ["Black Box", "Tester has no prior knowledge of the system", "Simulate real-world attacker perspective"],
                ["White Box", "Tester has full access to source code, architecture, and documentation", "Thorough code review and logic verification"],
                ["Gray Box", "Tester has partial knowledge (e.g., user credentials, architecture overview)", "Balance efficiency and realism"],
                ["Red Team vs Blue Team", "Red attacks; Blue defends and detects", "Comprehensive security posture assessment"]
            ]
        ),

        heading("Professional Practice: Continuous Monitoring and Improvement"),

        list([
            "Implement Security Information and Event Management (SIEM) systems for centralized monitoring.",
            "Conduct regular vulnerability assessments and penetration tests (quarterly or after major changes).",
            "Maintain up-to-date asset inventories and patch management schedules.",
            "Perform table-top exercises for incident response to test team readiness.",
            "Document all security policies, test results, and incident reports for audit and governance purposes."
        ]),

        note(
            "Professional security practice requires continuous vigilance. Threat landscapes evolve rapidly, and organizations must adopt a culture of continuous improvement rather than reactive fixes.",
            "tip",
            "Continuous Security Culture"
        ),

        keyPoints([
            "Security tools include network scanners (Nmap), packet analyzers (Wireshark), and web testing frameworks (Burp Suite).",
            "Penetration testing methodologies include Black Box, White Box, and Gray Box approaches.",
            "SIEM systems aggregate logs for real-time threat detection and forensic analysis.",
            "Regular vulnerability assessments and table-top exercises maintain readiness.",
        ]),
  ],

{
    summary:
    "Explore security tools (Wireshark, Nmap, Metasploit, Burp Suite), testing methodologies (Black/White/Gray Box), SIEM monitoring, and professional practices including continuous improvement.",
        minutes: 12,
            tags: ["security-tools", "penetration-testing", "siem", "burp-suite", "professional-practice", "important"],

                mcqs: [
                    mcq(
                        "What is the purpose of Nmap in network security?",
                        ["Encrypt data", "Scan networks to discover hosts, ports, and services", "Create websites", "Generate reports only"],
                        1,
                        "Nmap (Network Mapper) scans and maps network infrastructure."
                    ),
                    mcq(
                        "What is Black Box Penetration Testing?",
                        ["Testing with full source code access", "Testing with no prior system knowledge", "Only testing user interfaces", "Only testing backups"],
                        1,
                        "Black Box testing simulates an external attacker with no prior knowledge."
                    ),
                    mcq(
                        "What does a SIEM system do?",
                        ["Only encrypt files", "Aggregate and analyze security logs for threat detection", "Generate user reports only", "Only scan networks"],
                        1,
                        "SIEM (Security Information and Event Management) centralizes log analysis for threat detection."
                    ),
                    mcq(
                        "Why are table-top exercises important in incident response?",
                        ["To test server speed", "To practice and improve team readiness for real incidents", "Only to create documentation", "To delete data"],
                        1,
                        "Table-top exercises simulate incidents to identify gaps in plans and improve coordination."
                    ),
                ],

                    questions: [
                        qa(
                            "Compare Black Box and White Box Penetration Testing. When is each most appropriate?",
                            "Black Box testing provides the tester with no prior system knowledge, simulating an external attacker. It is best for evaluating how the system appears to real-world threats. White Box testing grants full access to source code, architecture, and documentation. It is best for thorough verification of internal logic, identifying vulnerabilities not visible externally, and ensuring compliance with secure coding standards."
                            ,
                            4
                        ),
                        qa(
                            "Why is continuous monitoring through SIEM critical for modern security operations?",
                            "SIEM systems aggregate logs from diverse sources (firewalls, servers, applications) to detect patterns that individual tools might miss. Real-time correlation enables rapid detection of complex, multi-stage attacks. Continuous monitoring also supports forensic investigation after incidents and demonstrates compliance with regulatory requirements that mandate audit trails."
                            ,
                            4
                        ),
                    ],
  }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit2Topics = [
    incidentResponseLifecycle,
    securityAwarenessAndEthics,
    webAppSecurity,
    securityToolsAndPractice,
];