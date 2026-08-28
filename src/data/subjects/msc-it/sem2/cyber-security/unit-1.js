/* =========================================================
   MSc-IT • SEM 2 • Cyber Security
   UNIT 1 — Introduction to Cybercrime
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
   TOPIC 1 — Introduction to Cybercrime
========================================================= */

const introductionToCybercrime = createTopic(
    "introduction-to-cybercrime",
    "Introduction to Cybercrime",

    [
        definition(
            "Cybercrime",
            "Cybercrime is any illegal activity where a computer, network, digital device or the internet is used as a tool, target or place of crime."
        ),

        text(
            "Cybercrime has increased because people, businesses and governments now depend heavily on computers, smartphones, cloud services, online banking, e-commerce and social media. Criminals use digital systems to steal money, data, identity, intellectual property or to disrupt services."
        ),

        heading("Computer as Tool, Target and Place of Crime"),

        table(
            ["Role of Computer", "Meaning", "Example"],
            [
                ["Tool", "Computer is used to commit the crime", "Sending phishing emails"],
                ["Target", "Computer or network is attacked", "Ransomware encrypting a server"],
                ["Place / Medium", "Internet platform is used for crime", "Online harassment on social media"],
            ]
        ),

        heading("Cybercrime vs Traditional Crime"),

        table(
            ["Aspect", "Traditional Crime", "Cybercrime"],
            [
                ["Location", "Usually physical place", "Can happen across countries"],
                ["Evidence", "Physical evidence", "Digital logs, files, metadata"],
                ["Speed", "Limited by physical action", "Can happen instantly at scale"],
                ["Identity", "Criminal may be physically visible", "Criminal may hide using fake accounts or proxies"],
                ["Victims", "Usually local", "Can be global"],
                ["Investigation", "Physical investigation", "Digital forensics and cyber law needed"],
            ]
        ),

        heading("Why Cybercrime is Difficult to Control"),

        list([
            "Attackers can operate from another country.",
            "Digital evidence can be deleted or modified quickly.",
            "Criminals can hide identity using fake accounts and anonymising tools.",
            "Technology changes rapidly.",
            "Many users have poor cyber awareness.",
            "One attack can affect thousands or millions of victims.",
            "Legal jurisdiction becomes complex in cross-border cases.",
        ]),

        heading("Common Examples of Cybercrime"),

        table(
            ["Cybercrime", "Meaning"],
            [
                ["Hacking", "Unauthorised access to a computer or network"],
                ["Phishing", "Tricking users into revealing passwords or financial details"],
                ["Identity theft", "Stealing and misusing someone's personal information"],
                ["Cyberstalking", "Repeated online harassment or monitoring"],
                ["Ransomware", "Malware that locks files and demands payment"],
                ["Online financial fraud", "Cheating users through fake transactions or websites"],
                ["Data breach", "Unauthorised exposure of sensitive information"],
            ]
        ),

        heading("Impact of Cybercrime"),

        table(
            ["Victim", "Possible Impact"],
            [
                ["Individuals", "Financial loss, identity theft, privacy loss, emotional stress"],
                ["Businesses", "Data loss, reputation damage, legal penalties, downtime"],
                ["Government", "National security risk, service disruption, loss of public trust"],
                ["Society", "Misinformation, cyberbullying, digital insecurity"],
            ]
        ),

        heading("Cyber Security"),

        definition(
            "Cyber Security",
            "Cyber security is the practice of protecting systems, networks, devices, programs and data from digital attacks, unauthorised access, damage or theft."
        ),

        text(
            "Cyber security aims to reduce cybercrime risk by using technical controls, policies, user awareness, legal measures and incident response. It includes prevention, detection, response and recovery."
        ),

        heading("CIA Triad"),

        table(
            ["Principle", "Meaning", "Example Control"],
            [
                ["Confidentiality", "Only authorised users can access information", "Encryption, access control"],
                ["Integrity", "Information remains accurate and unmodified", "Hashing, digital signatures"],
                ["Availability", "Systems and data are accessible when needed", "Backups, redundancy, DDoS protection"],
            ]
        ),

        note(
            "Cybercrime is not limited to expert hackers. Many attacks succeed because of weak passwords, social engineering, lack of updates and careless sharing of personal information.",
            "warning",
            "Important"
        ),

        keyPoints([
            "Cybercrime involves illegal use of computers, networks or the internet.",
            "A computer can be the tool, target or medium of cybercrime.",
            "Cybercrime is often cross-border, fast and difficult to investigate.",
            "Common cybercrimes include hacking, phishing, ransomware, identity theft and online fraud.",
            "Cyber security protects confidentiality, integrity and availability of digital systems.",
        ]),
    ],

    {
        summary:
            "Understand the meaning of cybercrime, computer as tool/target/medium, cybercrime vs traditional crime, impact and CIA triad basics.",
        minutes: 12,
        tags: ["cyber-security", "cybercrime", "introduction", "cia-triad", "important"],

        mcqs: [
            mcq(
                "Cybercrime is best defined as:",
                ["Any illegal activity involving computers, networks or the internet", "Only physical theft of computers", "Only writing software", "Only hardware repair"],
                0,
                "Cybercrime includes illegal acts where digital systems are used as tool, target or medium."
            ),
            mcq(
                "When a computer system is attacked directly, the computer is considered the:",
                ["Tool", "Target", "Witness", "Backup"],
                1,
                "If the computer or network is attacked, it is the target of the crime."
            ),
            mcq(
                "Phishing is an example of:",
                ["Tricking users to reveal sensitive information", "Repairing a computer", "Encrypting files for backup", "Normal login"],
                0,
                "Phishing uses deception to steal passwords, OTPs or financial details."
            ),
            mcq(
                "The CIA triad stands for:",
                ["Confidentiality, Integrity, Availability", "Cyber, Internet, Antivirus", "Code, Input, Algorithm", "Control, Identity, Access"],
                0,
                "The three core goals of cyber security are confidentiality, integrity and availability."
            ),
            mcq(
                "Which cyber security principle ensures data is not modified without permission?",
                ["Availability", "Integrity", "Speed", "Compression"],
                1,
                "Integrity ensures data remains accurate and trustworthy."
            ),
            mcq(
                "Cybercrime investigation is difficult because:",
                ["It is always local", "Attackers may operate across borders and hide identity", "Digital evidence never changes", "No laws exist anywhere"],
                1,
                "Cross-border attacks, anonymity and fragile digital evidence make cybercrime difficult to investigate."
            ),
        ],

        questions: [
            qa(
                "Define cybercrime. Explain how a computer can be a tool, target and medium of cybercrime.",
                "Cybercrime is any illegal activity where a computer, network, digital device or the internet is involved. A computer can act as a tool when it is used to commit a crime, such as sending phishing emails or creating fake websites. It can be a target when the system itself is attacked, such as hacking into a server, installing ransomware or stealing data from a database. It can also be the medium or place of crime when online platforms are used for illegal activities, such as cyberstalking, online fraud or spreading illegal content. Thus, cybercrime covers a wide range of digital offences.",
                5
            ),
            qa(
                "Differentiate between traditional crime and cybercrime.",
                "Traditional crime usually occurs in a physical location and often involves physical evidence such as fingerprints, weapons or documents. Cybercrime occurs through computers, networks and the internet, and evidence is digital, such as logs, emails, files, IP addresses and metadata. Traditional crime is often local, while cybercrime can be committed from one country against victims in another. Cybercrime can happen very quickly and at large scale, affecting thousands of victims at once. Criminals may hide behind fake identities, proxies or compromised accounts. Therefore, cybercrime investigation requires technical knowledge, digital forensics and cyber laws.",
                5
            ),
            qa(
                "Explain the CIA triad in cyber security.",
                "The CIA triad is a basic model of cyber security consisting of confidentiality, integrity and availability. Confidentiality means information should be accessible only to authorised users. It is protected using access control, passwords, encryption and permissions. Integrity means data should remain accurate, complete and unchanged unless modified by authorised users. It is protected using hashing, digital signatures and audit logs. Availability means systems and data should be available when needed. It is protected using backups, redundancy, fault tolerance and DDoS protection. A secure system should balance all three principles.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — Types and Categories of Cybercrime
========================================================= */

const typesAndCategoriesOfCybercrime = createTopic(
    "types-and-categories-of-cybercrime",
    "Types and Categories of Cybercrime",

    [
        text(
            "Cybercrime can be classified in different ways based on the victim, target, method and motive. Understanding categories helps in prevention, investigation and legal handling."
        ),

        heading("Broad Categories of Cybercrime"),

        table(
            ["Category", "Meaning", "Examples"],
            [
                ["Against individuals", "Targets a person", "Identity theft, cyberstalking, online harassment"],
                ["Against property", "Targets digital assets or systems", "Data theft, ransomware, intellectual property theft"],
                ["Against organisations", "Targets businesses or institutions", "Data breach, DDoS, insider attack"],
                ["Against government", "Targets public systems or national security", "Cyber terrorism, espionage"],
                ["Against society", "Harms public order or social trust", "Fake news, illegal content distribution"],
            ]
        ),

        heading("Cybercrime Against Individuals"),

        table(
            ["Crime", "Description"],
            [
                ["Identity theft", "Stealing personal information and using it fraudulently"],
                ["Cyberstalking", "Repeated unwanted online monitoring or harassment"],
                ["Cyberbullying", "Using digital platforms to threaten, shame or harass someone"],
                ["Email spoofing", "Sending emails with forged sender identity"],
                ["Online defamation", "Publishing false harmful information about a person"],
                ["Financial fraud", "Stealing money through digital deception"],
            ]
        ),

        heading("Cybercrime Against Property"),

        text(
            "Digital property includes data, software, accounts, intellectual property, websites, servers and digital wallets. Attacks against property aim to steal, damage, lock or misuse these assets."
        ),

        list([
            "Ransomware attack on company data.",
            "Unauthorised copying of software or source code.",
            "Theft of confidential business documents.",
            "Website defacement.",
            "Credit card information theft.",
            "Cryptocurrency wallet theft.",
        ]),

        heading("Cybercrime Against Organisations"),

        table(
            ["Crime", "Impact"],
            [
                ["Data breach", "Loss of customer data and reputation"],
                ["DDoS attack", "Website or service becomes unavailable"],
                ["Insider threat", "Employee misuses access"],
                ["Business email compromise", "Fake invoice or payment redirection"],
                ["Industrial espionage", "Stealing trade secrets"],
            ]
        ),

        heading("Cybercrime Against Government and Nation"),

        definition(
            "Cyber Terrorism",
            "Cyber terrorism refers to politically or ideologically motivated cyber attacks intended to create fear, disrupt critical services or harm national security."
        ),

        definition(
            "Cyber Warfare",
            "Cyber warfare involves hostile cyber actions by or against nation-states, often targeting critical infrastructure, military systems or government networks."
        ),

        table(
            ["Threat", "Example"],
            [
                ["Cyber espionage", "Stealing classified government information"],
                ["Critical infrastructure attack", "Attacking power grids or transport systems"],
                ["Government website defacement", "Changing public website content illegally"],
                ["Disinformation campaign", "Spreading fake news to influence society"],
                ["Election interference", "Attacking election systems or public trust"],
            ]
        ),

        heading("Financial Cybercrime"),

        list([
            "Online banking fraud.",
            "UPI/QR code fraud.",
            "Credit card fraud.",
            "Fake investment schemes.",
            "Lottery or prize scams.",
            "Fake shopping websites.",
            "Business email compromise.",
        ]),

        heading("Cyber Harassment and Social Media Crimes"),

        table(
            ["Crime", "Meaning"],
            [
                ["Cyberbullying", "Harassing or humiliating someone online"],
                ["Cyberstalking", "Repeated unwanted tracking or messaging"],
                ["Doxxing", "Publishing private information without consent"],
                ["Impersonation", "Creating fake account in someone's name"],
                ["Online grooming", "Manipulating minors through online communication"],
            ]
        ),

        note(
            "Many cybercrimes overlap. For example, phishing may lead to identity theft, financial fraud and data breach. Classification is useful, but real incidents often involve multiple crimes.",
            "tip",
            "Classification Note"
        ),

        keyPoints([
            "Cybercrime may target individuals, property, organisations, government or society.",
            "Identity theft, cyberstalking and cyberbullying affect individuals.",
            "Ransomware, data theft and website defacement affect digital property.",
            "Data breaches, DDoS and insider threats affect organisations.",
            "Cyber terrorism and cyber warfare can affect national security.",
        ]),
    ],

    {
        summary:
            "Learn major categories of cybercrime including crimes against individuals, property, organisations, government and society.",
        minutes: 13,
        tags: ["cyber-security", "types-of-cybercrime", "identity-theft", "cyber-terrorism"],

        mcqs: [
            mcq(
                "Identity theft is a cybercrime mainly against:",
                ["Individual", "Compiler", "Router only", "Operating system kernel only"],
                0,
                "Identity theft targets personal information of individuals."
            ),
            mcq(
                "A DDoS attack mainly affects:",
                ["Availability of service", "Screen brightness", "Keyboard layout", "File extension"],
                0,
                "DDoS floods a service so legitimate users cannot access it."
            ),
            mcq(
                "Cyberstalking means:",
                ["Repeated unwanted online monitoring or harassment", "Normal software update", "Backing up files", "Encrypting own data"],
                0,
                "Cyberstalking involves persistent unwanted online tracking or harassment."
            ),
            mcq(
                "Cyber terrorism is usually:",
                ["Politically or ideologically motivated cyber attack", "Only a classroom project", "Normal password change", "Legal data backup"],
                0,
                "Cyber terrorism aims to create fear or disrupt critical services."
            ),
            mcq(
                "Business email compromise is commonly related to:",
                ["Fraudulent payments or fake invoices", "Image editing", "Printer cleaning", "Normal browsing"],
                0,
                "BEC attacks trick organisations into sending money or information."
            ),
            mcq(
                "Website defacement means:",
                ["Unauthorised modification of website content", "Improving website design legally", "Opening a browser", "Compressing images"],
                0,
                "Website defacement changes a website without permission."
            ),
        ],

        questions: [
            qa(
                "Classify cybercrime based on victims and give examples.",
                "Cybercrime can be classified based on the victim or target. Crimes against individuals include identity theft, cyberstalking, cyberbullying, online defamation and financial fraud. Crimes against property include ransomware, data theft, software piracy and website defacement. Crimes against organisations include data breaches, DDoS attacks, insider threats, business email compromise and industrial espionage. Crimes against government include cyber espionage, attacks on critical infrastructure and government website defacement. Crimes against society include fake news, illegal content distribution and activities that disturb public order. Many real cyber incidents may belong to more than one category.",
                5
            ),
            qa(
                "Explain cybercrime against individuals with examples.",
                "Cybercrime against individuals directly targets a person. Identity theft occurs when personal data such as Aadhaar details, bank information, passwords or email accounts are stolen and misused. Cyberstalking is repeated unwanted online tracking, messaging or harassment. Cyberbullying involves threatening, insulting or humiliating someone through digital platforms. Online financial fraud tricks users into sending money or revealing OTPs. Impersonation involves creating fake profiles in someone's name. Such crimes can cause financial loss, privacy violation, emotional distress and reputation damage. Prevention includes privacy awareness, strong passwords, MFA and careful sharing of personal information.",
                5
            ),
            qa(
                "What are cyber terrorism and cyber warfare?",
                "Cyber terrorism refers to politically or ideologically motivated cyber attacks intended to create fear, disrupt public services or threaten national security. Examples include attacks on transport systems, hospitals, government portals or power infrastructure. Cyber warfare refers to hostile cyber operations involving nation-states or state-supported groups. It may include espionage, sabotage, attacks on military networks, disruption of communication systems or disinformation campaigns. Both are serious because they can affect critical infrastructure and public safety. They require strong national cyber defence, incident response, international cooperation and legal frameworks.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — Cybercriminals, Motives and Targets
========================================================= */

const cybercriminalsAndMotives = createTopic(
    "cybercriminals-motives-and-targets",
    "Cybercriminals, Motives and Targets",

    [
        text(
            "Cybercriminals are not all the same. They may be individuals, organised groups, insiders, hacktivists or state-sponsored actors. Their motives may include money, revenge, ideology, curiosity, fame or espionage."
        ),

        heading("Who is a Cybercriminal?"),

        definition(
            "Cybercriminal",
            "A cybercriminal is a person or group that uses computers, networks or digital technologies to perform illegal activities."
        ),

        heading("Types of Cybercriminals"),

        table(
            ["Type", "Description", "Typical Motive"],
            [
                ["Script kiddies", "Low-skill attackers using ready-made tools", "Curiosity, fame"],
                ["Black-hat hackers", "Skilled attackers who break laws for personal gain or damage", "Money, power, challenge"],
                ["Insiders", "Employees or trusted users misusing access", "Revenge, money, negligence"],
                ["Organised cybercrime groups", "Professional criminal groups", "Financial gain"],
                ["Hacktivists", "Attackers motivated by political/social causes", "Ideology, protest"],
                ["State-sponsored actors", "Groups supported by governments", "Espionage, warfare"],
                ["Cyber terrorists", "Groups aiming to create fear or disruption", "Ideology, terror"],
            ]
        ),

        heading("Ethical Hacker vs Malicious Hacker"),

        table(
            ["Aspect", "Ethical Hacker", "Malicious Hacker"],
            [
                ["Permission", "Works with legal authorisation", "Acts without permission"],
                ["Purpose", "Find and fix weaknesses", "Steal, damage or misuse"],
                ["Reporting", "Reports vulnerabilities responsibly", "Exploits or sells vulnerabilities"],
                ["Legality", "Legal when authorised", "Illegal"],
                ["Example", "Penetration tester", "Data thief"],
            ]
        ),

        heading("Common Motives Behind Cybercrime"),

        list([
            "Financial gain through fraud, ransom or theft.",
            "Stealing confidential data or intellectual property.",
            "Revenge against employer, person or organisation.",
            "Political or ideological activism.",
            "Espionage for business or national interest.",
            "Fame, challenge or curiosity.",
            "Disruption of services.",
            "Harassment or personal harm.",
        ]),

        heading("Common Targets"),

        table(
            ["Target", "Why It Is Attacked"],
            [
                ["Individuals", "Weak passwords, personal data, financial accounts"],
                ["Banks and finance", "Direct monetary value"],
                ["Hospitals", "Sensitive medical data and critical availability"],
                ["Educational institutions", "Large user base and research data"],
                ["E-commerce platforms", "Payment details and customer data"],
                ["Government agencies", "Confidential data and public services"],
                ["Small businesses", "Often weaker security controls"],
            ]
        ),

        heading("Attack Surface"),

        definition(
            "Attack Surface",
            "Attack surface is the total set of points where an attacker could try to enter, exploit or extract data from a system."
        ),

        table(
            ["Attack Surface Area", "Example"],
            [
                ["User accounts", "Weak passwords, reused passwords"],
                ["Email", "Phishing attachments or links"],
                ["Web applications", "SQL injection, XSS"],
                ["Network services", "Open ports, vulnerable services"],
                ["Mobile devices", "Malicious apps, lost phones"],
                ["Cloud storage", "Misconfigured public buckets"],
                ["People", "Social engineering and manipulation"],
            ]
        ),

        heading("Insider Threat"),

        definition(
            "Insider Threat",
            "An insider threat is a security risk caused by someone within an organisation, such as an employee, contractor or partner, who has authorised access."
        ),

        table(
            ["Type of Insider", "Description"],
            [
                ["Malicious insider", "Intentionally steals or damages data"],
                ["Negligent insider", "Accidentally causes risk through carelessness"],
                ["Compromised insider", "User account is taken over by attacker"],
            ]
        ),

        heading("Reducing Risk from Cybercriminals"),

        list([
            "Use strong authentication and multi-factor authentication.",
            "Apply least privilege access.",
            "Monitor logs and unusual behaviour.",
            "Train users against phishing and social engineering.",
            "Patch systems regularly.",
            "Segment networks and protect sensitive data.",
            "Perform background checks for sensitive roles.",
            "Have incident response and reporting procedures.",
        ], true),

        note(
            "Not every hacker is a criminal. Ethical hackers and security researchers improve security when they work with permission and follow responsible disclosure.",
            "tip",
            "Ethics"
        ),

        keyPoints([
            "Cybercriminals may be individuals, insiders, organised groups or state-sponsored actors.",
            "Motives include money, revenge, ideology, espionage, fame and disruption.",
            "Ethical hacking is legal only with permission.",
            "Attack surface includes all possible entry points into a system.",
            "Insider threats can be malicious, negligent or compromised.",
            "Least privilege and monitoring help reduce risk.",
        ]),
    ],

    {
        summary:
            "Understand types of cybercriminals, motives, common targets, attack surface, insider threats and ethical hacking distinction.",
        minutes: 13,
        tags: ["cyber-security", "cybercriminals", "motives", "insider-threat", "ethical-hacking"],

        mcqs: [
            mcq(
                "A cybercriminal is:",
                ["A person/group using digital technology for illegal activity", "Only a computer repair person", "Only a teacher", "Only a network cable"],
                0,
                "Cybercriminals use computers, networks or internet systems for illegal acts."
            ),
            mcq(
                "An ethical hacker must have:",
                ["Legal permission", "No permission", "Only fake accounts", "Only social media followers"],
                0,
                "Ethical hacking is legal only when authorised."
            ),
            mcq(
                "A malicious employee stealing company data is an example of:",
                ["Insider threat", "Normal backup", "Open-source development", "Software update"],
                0,
                "An insider threat comes from someone with internal access."
            ),
            mcq(
                "Hacktivists are usually motivated by:",
                ["Political or social ideology", "Only disk cleaning", "Weather prediction", "Normal accounting"],
                0,
                "Hacktivism is driven by ideology, protest or political motives."
            ),
            mcq(
                "Attack surface means:",
                ["All possible points an attacker may exploit", "Only monitor size", "Only keyboard keys", "Only installed fonts"],
                0,
                "Attack surface includes accounts, applications, networks, people and devices that may be attacked."
            ),
            mcq(
                "Least privilege means:",
                ["Give users only the access they need", "Give everyone admin access", "Disable all passwords", "Share root password"],
                0,
                "Least privilege reduces damage by limiting access rights."
            ),
        ],

        questions: [
            qa(
                "Explain different types of cybercriminals.",
                "Cybercriminals may be classified based on skill, motive and organisation. Script kiddies are low-skill attackers who use ready-made tools, often for curiosity or fame. Black-hat hackers are skilled attackers who break laws for financial gain, damage or personal benefit. Insiders are employees or trusted users who misuse authorised access intentionally or accidentally. Organised cybercrime groups operate professionally for money through fraud, ransomware or data theft. Hacktivists attack for political or social causes. State-sponsored actors are supported by governments for espionage or warfare. Cyber terrorists aim to create fear and disrupt critical systems.",
                5
            ),
            qa(
                "Differentiate between ethical hackers and malicious hackers.",
                "Ethical hackers work with legal permission from the system owner. Their purpose is to identify security weaknesses and help fix them. They follow rules of engagement, avoid unnecessary damage and report vulnerabilities responsibly. Malicious hackers act without permission and may steal data, damage systems, demand ransom or sell vulnerabilities. Ethical hacking is legal when authorised, while malicious hacking is illegal. For example, a penetration tester hired by a company is an ethical hacker, whereas someone breaking into the same company without permission to steal customer data is a malicious hacker.",
                5
            ),
            qa(
                "What is an insider threat? Explain its types and prevention.",
                "An insider threat is a security risk caused by someone within an organisation who has authorised access, such as an employee, contractor or partner. A malicious insider intentionally steals data or damages systems. A negligent insider accidentally creates risk by clicking phishing links, misconfiguring systems or sharing passwords. A compromised insider is a legitimate user's account taken over by an attacker. Prevention includes least privilege access, multi-factor authentication, employee awareness training, monitoring logs, separation of duties, periodic access reviews, data loss prevention and quick removal of access when employees leave.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — Cyber Law and IT Act Overview
========================================================= */

const cyberLawAndItAct = createTopic(
    "cyber-law-and-it-act-overview",
    "Cyber Law and IT Act Overview",

    [
        definition(
            "Cyber Law",
            "Cyber law is the branch of law that deals with legal issues related to computers, internet, digital communication, electronic records, cybercrime and digital transactions."
        ),

        text(
            "Cyber law provides legal recognition to electronic documents and digital signatures, defines cyber offences, prescribes penalties and supports investigation of cybercrime. In India, the Information Technology Act, 2000 is the primary law for cyber activities."
        ),

        heading("Need for Cyber Law"),

        list([
            "To recognise electronic records and digital signatures.",
            "To regulate online transactions and e-commerce.",
            "To define cyber offences and penalties.",
            "To protect privacy and sensitive data.",
            "To support investigation of cybercrime.",
            "To create legal responsibility for intermediaries and organisations.",
            "To build trust in digital governance and online business.",
        ]),

        heading("Information Technology Act, 2000"),

        definition(
            "Information Technology Act, 2000",
            "The Information Technology Act, 2000 is India's primary cyber law that provides legal recognition to electronic records, digital signatures and deals with cyber offences and penalties."
        ),

        heading("Important Areas Covered by IT Act"),

        table(
            ["Area", "Meaning"],
            [
                ["Electronic records", "Legal validity of digital documents"],
                ["Digital signatures", "Authentication of electronic records"],
                ["Cyber offences", "Defines offences such as unauthorised access and data theft"],
                ["Penalties and compensation", "Punishment or compensation for cyber violations"],
                ["Intermediary liability", "Responsibilities of platforms and service providers"],
                ["Government powers", "Certain powers for interception, blocking and monitoring as per law"],
            ]
        ),

        heading("Selected Cyber Offences under Indian Cyber Law"),

        table(
            ["Offence", "General Meaning"],
            [
                ["Unauthorised access", "Accessing systems without permission"],
                ["Data theft", "Copying or stealing data illegally"],
                ["Identity theft", "Misusing another person's digital identity"],
                ["Cheating by impersonation", "Pretending to be someone else online for fraud"],
                ["Violation of privacy", "Capturing or sharing private information illegally"],
                ["Publishing illegal content", "Sharing prohibited or harmful digital content"],
            ]
        ),

        note(
            "This topic gives an educational overview, not legal advice. Exact sections, punishments and procedures can change and should be checked from official legal sources.",
            "warning",
            "Legal Note"
        ),

        heading("Digital Signature and Electronic Signature"),

        definition(
            "Digital Signature",
            "A digital signature is a cryptographic method used to verify the authenticity and integrity of an electronic document or message."
        ),

        table(
            ["Term", "Meaning"],
            [
                ["Electronic record", "Information stored or transmitted in digital form"],
                ["Digital signature", "Cryptographic signature based on public key technology"],
                ["Electronic signature", "Broader term for electronic authentication methods"],
                ["Certifying Authority", "Trusted authority that issues digital signature certificates"],
            ]
        ),

        heading("Cybercrime Reporting in India"),

        text(
            "Cybercrime should be reported quickly because digital evidence may disappear or criminals may continue targeting victims. In India, cybercrime can be reported through the National Cyber Crime Reporting Portal and local police/cyber cells."
        ),

        steps([
            "Preserve evidence such as screenshots, emails, messages, URLs and transaction IDs.",
            "Do not delete suspicious messages or accounts immediately.",
            "Report financial fraud quickly to bank/payment provider and cybercrime helpline/portal.",
            "File complaint through official cybercrime reporting portal or nearest police station.",
            "Cooperate with investigating authorities and provide accurate information.",
        ]),

        heading("Cyber Ethics"),

        definition(
            "Cyber Ethics",
            "Cyber ethics refers to responsible and lawful behaviour while using computers, networks, internet resources and digital information."
        ),

        list([
            "Do not access systems without permission.",
            "Do not copy, leak or misuse data.",
            "Respect privacy and intellectual property.",
            "Use licensed or authorised software.",
            "Report vulnerabilities responsibly.",
            "Do not spread misinformation or harmful content.",
            "Follow organisational security policies.",
        ], true),

        keyPoints([
            "Cyber law handles legal issues related to computers and the internet.",
            "The IT Act, 2000 is India's main cyber law.",
            "It gives legal recognition to electronic records and digital signatures.",
            "Cyber offences include unauthorised access, identity theft, data theft and online impersonation.",
            "Cybercrime should be reported quickly with preserved evidence.",
            "Cyber ethics means responsible, legal and respectful digital behaviour.",
        ]),
    ],

    {
        summary:
            "Learn the need for cyber law, IT Act overview, electronic records, digital signatures, cyber offences, reporting and cyber ethics.",
        minutes: 13,
        tags: ["cyber-security", "cyber-law", "it-act", "digital-signature", "cyber-ethics"],

        mcqs: [
            mcq(
                "Cyber law deals with:",
                ["Legal issues related to computers and internet", "Only agriculture", "Only mechanical machines", "Only sports rules"],
                0,
                "Cyber law covers digital records, cybercrime, online transactions and internet-related legal issues."
            ),
            mcq(
                "India's primary cyber law is:",
                ["Information Technology Act, 2000", "Forest Act only", "Motor Vehicles Act only", "Companies Act only"],
                0,
                "The IT Act, 2000 is India's main law dealing with cyber activities."
            ),
            mcq(
                "A digital signature is used to verify:",
                ["Authenticity and integrity of electronic records", "Screen colour", "Keyboard speed", "Printer ink"],
                0,
                "Digital signatures verify who signed and whether data was altered."
            ),
            mcq(
                "Unauthorised access means:",
                ["Accessing a system without permission", "Logging into own account", "Updating antivirus", "Using licensed software"],
                0,
                "Unauthorised access is accessing systems or data without legal permission."
            ),
            mcq(
                "When reporting cybercrime, evidence should be:",
                ["Preserved", "Deleted immediately", "Edited heavily", "Shared publicly first"],
                0,
                "Screenshots, logs, URLs and transaction details should be preserved."
            ),
            mcq(
                "Cyber ethics includes:",
                ["Respecting privacy and using systems legally", "Stealing passwords", "Spreading malware", "Accessing accounts without permission"],
                0,
                "Cyber ethics means responsible and lawful digital behaviour."
            ),
        ],

        questions: [
            qa(
                "What is cyber law? Why is it needed?",
                "Cyber law is the branch of law that deals with legal issues related to computers, the internet, electronic records, digital communication, online transactions and cybercrime. It is needed because digital activities require legal recognition and regulation. Cyber law gives validity to electronic records and digital signatures, defines cyber offences, prescribes penalties, protects users from online fraud and supports cybercrime investigation. It also helps regulate e-commerce, digital governance, intermediary responsibilities and data protection. Without cyber law, it would be difficult to punish cybercriminals and build trust in digital transactions.",
                5
            ),
            qa(
                "Give an overview of the Information Technology Act, 2000.",
                "The Information Technology Act, 2000 is India's primary cyber law. It provides legal recognition to electronic records and digital signatures, enabling online transactions and e-governance. It defines various cyber offences and penalties related to unauthorised access, data theft, identity theft, cheating by impersonation, privacy violation and publishing prohibited content. It also deals with intermediary liability and certain government powers related to cyber security. The Act has been amended to address new technological and cybercrime challenges. It forms the legal foundation for handling cyber activities and cyber offences in India.",
                5
            ),
            qa(
                "Explain cyber ethics and responsible internet use.",
                "Cyber ethics refers to responsible, legal and respectful behaviour while using computers, networks and the internet. It includes not accessing systems without permission, not stealing or leaking data, respecting privacy, using licensed software, avoiding plagiarism, reporting vulnerabilities responsibly and not spreading harmful or false content. Responsible internet use also includes protecting passwords, enabling multi-factor authentication, verifying information before sharing, respecting others online and following organisational policies. Cyber ethics is important because technology can affect individuals, organisations and society. Ethical behaviour reduces cybercrime and builds trust in digital environments.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 5 — Cyber Safety and Prevention Basics
========================================================= */

const cyberSafetyAndPreventionBasics = createTopic(
    "cyber-safety-and-prevention-basics",
    "Cyber Safety and Prevention Basics",

    [
        text(
            "Cyber safety means using digital devices, internet services and online platforms in a secure and responsible way. Many cybercrimes can be prevented through awareness, good habits and basic security controls."
        ),

        heading("Cyber Hygiene"),

        definition(
            "Cyber Hygiene",
            "Cyber hygiene refers to regular practices and habits that keep digital devices, accounts and data safe from cyber threats."
        ),

        heading("Strong Password Practices"),

        list([
            "Use long and unique passwords for every account.",
            "Avoid using name, date of birth, mobile number or common words.",
            "Use a password manager to store complex passwords safely.",
            "Do not reuse passwords across websites.",
            "Change passwords immediately if a breach is suspected.",
            "Never share passwords through email, chat or phone.",
        ], true),

        heading("Multi-Factor Authentication"),

        definition(
            "Multi-Factor Authentication",
            "Multi-factor authentication, or MFA, adds an extra verification step besides password, such as OTP, authenticator app, hardware key or biometric."
        ),

        table(
            ["Factor Type", "Meaning", "Example"],
            [
                ["Something you know", "Secret known to user", "Password, PIN"],
                ["Something you have", "Physical/digital item", "Phone OTP, hardware token"],
                ["Something you are", "Biometric characteristic", "Fingerprint, face recognition"],
            ]
        ),

        heading("Safe Browsing and Email Practices"),

        list([
            "Check website URL carefully before entering passwords.",
            "Use HTTPS websites, especially for login and payments.",
            "Do not click suspicious links or attachments.",
            "Verify sender email address and domain.",
            "Do not share OTP, PIN, CVV or passwords.",
            "Avoid downloading software from unknown websites.",
            "Log out from shared computers.",
            "Do not trust urgent threats or offers that sound too good to be true.",
        ], true),

        heading("Device Security"),

        table(
            ["Practice", "Purpose"],
            [
                ["Keep OS and apps updated", "Fix known vulnerabilities"],
                ["Use antivirus/endpoint protection", "Detect malware"],
                ["Enable screen lock", "Prevent physical misuse"],
                ["Encrypt device storage", "Protect data if device is lost"],
                ["Use trusted Wi-Fi", "Avoid interception and fake hotspots"],
                ["Backup important data", "Recover from ransomware or device failure"],
            ]
        ),

        heading("Social Media Safety"),

        list([
            "Limit public sharing of personal information.",
            "Use privacy settings.",
            "Do not accept unknown friend requests blindly.",
            "Be careful with location sharing.",
            "Report harassment, impersonation or abusive content.",
            "Think before posting; deleted content may still be saved by others.",
        ]),

        heading("Recognising Phishing Red Flags"),

        table(
            ["Red Flag", "Example"],
            [
                ["Urgency", "Your account will close in 10 minutes"],
                ["Fear", "Police case will be filed unless you pay"],
                ["Too good to be true", "You won a lottery without participating"],
                ["Suspicious link", "bank-login.example.xyz"],
                ["Request for secrets", "Send OTP/CVV/password"],
                ["Poor grammar or unusual sender", "Unexpected email from unknown domain"],
            ]
        ),

        heading("Backup Strategy"),

        definition(
            "Backup",
            "A backup is a separate copy of important data that can be used to restore information after deletion, corruption, ransomware or device failure."
        ),

        text(
            "A useful rule is the 3-2-1 backup strategy: keep 3 copies of important data, on 2 different types of storage, with 1 copy offline or offsite."
        ),

        heading("If You Become a Victim"),

        steps([
            "Stay calm and disconnect affected device from the internet if malware is suspected.",
            "Do not pay or communicate further with scammers without guidance.",
            "Change passwords from a clean trusted device.",
            "Contact bank/payment provider immediately for financial fraud.",
            "Preserve evidence such as screenshots, messages, URLs and transaction IDs.",
            "Report to official cybercrime portal, cyber cell or police.",
            "Inform affected contacts if your account was misused.",
        ]),

        note(
            "No bank, government officer or legitimate company will ask for your password, OTP, PIN or CVV. These must never be shared with anyone.",
            "warning",
            "Golden Rule"
        ),

        keyPoints([
            "Cyber hygiene means safe digital habits and regular security practices.",
            "Use strong unique passwords and enable MFA.",
            "Never share OTP, PIN, CVV or passwords.",
            "Keep devices updated and backed up.",
            "Be alert to phishing signs such as urgency, fear and suspicious links.",
            "Preserve evidence and report cybercrime quickly.",
        ]),
    ],

    {
        summary:
            "Learn basic cyber safety: strong passwords, MFA, safe browsing, device security, phishing red flags, backups and reporting steps.",
        minutes: 13,
        tags: ["cyber-security", "cyber-safety", "cyber-hygiene", "phishing-prevention", "mfa"],

        mcqs: [
            mcq(
                "Cyber hygiene means:",
                ["Regular safe practices for protecting digital devices and accounts", "Cleaning monitor with water", "Deleting all files", "Sharing passwords"],
                0,
                "Cyber hygiene means habits that keep systems, data and accounts safe."
            ),
            mcq(
                "A strong password should be:",
                ["Long, unique and hard to guess", "Your name only", "123456", "Same for all websites"],
                0,
                "Strong passwords are long, unique and not based on personal information."
            ),
            mcq(
                "MFA adds:",
                ["An extra verification factor besides password", "More screen brightness", "A new keyboard", "Only faster internet"],
                0,
                "MFA improves security by requiring another factor such as OTP or biometric."
            ),
            mcq(
                "Which information should never be shared?",
                ["OTP, PIN, CVV or password", "Public weather report", "Public website URL", "College name only"],
                0,
                "Sensitive authentication and payment secrets must never be shared."
            ),
            mcq(
                "The 3-2-1 backup rule means:",
                ["3 copies, 2 storage types, 1 offline/offsite copy", "3 passwords only", "2 emails and 1 phone", "1 copy only"],
                0,
                "3-2-1 is a common reliable backup strategy."
            ),
            mcq(
                "A common phishing red flag is:",
                ["Urgent request to share OTP", "Correct official app update", "Normal HTTPS lock only", "Known contact verified in person"],
                0,
                "Phishing often creates urgency and asks for secrets."
            ),
        ],

        questions: [
            qa(
                "What is cyber hygiene? List important cyber hygiene practices.",
                "Cyber hygiene refers to regular habits and practices that protect digital devices, accounts and data from cyber threats. Important practices include using strong and unique passwords, enabling multi-factor authentication, keeping operating systems and applications updated, using antivirus or endpoint protection, avoiding suspicious links and attachments, not sharing OTPs or passwords, using secure Wi-Fi, locking devices, taking regular backups and reviewing account activity. Cyber hygiene also includes limiting personal information shared online and reporting suspicious activity quickly. These practices reduce the risk of phishing, malware, identity theft and financial fraud.",
                5
            ),
            qa(
                "Explain password safety and multi-factor authentication.",
                "Password safety means using long, unique and hard-to-guess passwords for every account. Users should avoid names, birth dates, phone numbers and common passwords. Passwords should not be reused across websites because if one site is breached, attackers may try the same password elsewhere. A password manager can help store complex passwords. Multi-factor authentication adds an extra layer of security besides the password. It may use OTP, authenticator app, hardware token or biometric. Even if a password is stolen, MFA can prevent unauthorised login. Users should never share OTPs, PINs, CVVs or passwords.",
                5
            ),
            qa(
                "What should a user do after becoming a victim of cybercrime?",
                "If a user becomes a victim of cybercrime, they should stay calm and preserve evidence such as screenshots, emails, messages, URLs, phone numbers and transaction IDs. If malware is suspected, the device may be disconnected from the internet. Passwords should be changed from a clean trusted device. For financial fraud, the bank or payment provider should be contacted immediately to block accounts or cards. The incident should be reported through the official cybercrime portal, local cyber cell or police station. The victim should avoid further communication with scammers and inform contacts if their account was misused.",
                5
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit1Topics = [
    introductionToCybercrime,
    typesAndCategoriesOfCybercrime,
    cybercriminalsAndMotives,
    cyberLawAndItAct,
    cyberSafetyAndPreventionBasics,
];