/* =========================================================
   MSc-IT • SEM 2 • Cyber Security
   UNIT 4 — Computer Forensics and Forensics of Hand-Held Devices
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
   TOPIC 1 — Introduction to Computer Forensics
========================================================= */

const introductionToComputerForensics = createTopic(
    "introduction-to-computer-forensics",
    "Introduction to Computer Forensics",

    [
        definition(
            "Computer Forensics",
            "Computer forensics is the branch of digital forensics that deals with identifying, preserving, collecting, analysing and presenting evidence from computers and digital storage devices in a legally acceptable manner."
        ),

        text(
            "Computer forensics is used after cybercrimes, data breaches, insider misuse, financial fraud, unauthorised access, malware incidents and policy violations. The main goal is to find what happened, when it happened, how it happened, who may be responsible and what evidence supports the conclusion."
        ),

        heading("Digital Forensics vs Computer Forensics"),

        table(
            ["Aspect", "Digital Forensics", "Computer Forensics"],
            [
                ["Scope", "All digital devices and digital evidence", "Mainly computers, laptops, servers and storage media"],
                ["Devices", "Computers, mobiles, cloud, networks, IoT", "Hard disks, SSDs, OS logs, files"],
                ["Purpose", "Investigate digital incidents", "Investigate computer-based evidence"],
                ["Example", "Mobile chat + cloud logs + laptop image", "Recover deleted files from a laptop"],
            ]
        ),

        heading("Objectives of Computer Forensics"),

        list([
            "Identify possible sources of digital evidence.",
            "Preserve evidence without alteration.",
            "Recover deleted, hidden or damaged data where possible.",
            "Analyse user activity, logs, files and timelines.",
            "Determine cause and impact of an incident.",
            "Maintain chain of custody.",
            "Present findings clearly in reports or court.",
        ], true),

        heading("When Computer Forensics is Used"),

        table(
            ["Scenario", "Forensic Purpose"],
            [
                ["Data breach", "Find entry point, stolen data and affected systems"],
                ["Insider threat", "Analyse employee activity and data transfers"],
                ["Malware attack", "Identify infection source and affected files"],
                ["Financial fraud", "Recover transaction records and communication"],
                ["Unauthorised access", "Analyse logs, accounts and timestamps"],
                ["Harassment/cyberstalking", "Preserve messages, emails and metadata"],
            ]
        ),

        heading("Forensic Principles"),

        table(
            ["Principle", "Meaning"],
            [
                ["Preservation", "Evidence must be protected from modification"],
                ["Integrity", "Evidence authenticity must be verifiable"],
                ["Documentation", "Every action must be recorded"],
                ["Repeatability", "Another examiner should be able to verify the process"],
                ["Chain of custody", "Track who handled evidence and when"],
                ["Legal admissibility", "Evidence must be collected according to law"],
            ]
        ),

        heading("Volatile and Non-Volatile Data"),

        definition(
            "Volatile Data",
            "Volatile data is temporary data that is lost when a device is powered off, such as RAM contents, running processes and active network connections."
        ),

        definition(
            "Non-Volatile Data",
            "Non-volatile data remains stored even after power is removed, such as files on hard disks, SSDs, USB drives and memory cards."
        ),

        table(
            ["Type", "Examples", "Collection Priority"],
            [
                ["Volatile data", "RAM, running processes, logged-in users, network connections", "Collect first if system is live"],
                ["Non-volatile data", "Documents, logs, browser history, registry, disk image", "Collected through imaging/acquisition"],
            ]
        ),

        heading("Order of Volatility"),

        text(
            "The order of volatility means collecting the most temporary evidence first. If a computer is live, RAM and network connections may disappear quickly, so they are considered before normal disk files."
        ),

        steps([
            "CPU registers and cache.",
            "RAM and running processes.",
            "Network connections and routing information.",
            "Temporary files and swap/page files.",
            "Disk files and logs.",
            "Backups and archived media.",
        ]),

        note(
            "In forensics, the examiner should not work directly on the original evidence if avoidable. A forensic image should be created and analysis should be performed on a verified copy.",
            "warning",
            "Evidence Safety"
        ),

        keyPoints([
            "Computer forensics investigates evidence from computers and storage devices.",
            "Main goals include identification, preservation, analysis and presentation of evidence.",
            "Evidence integrity and documentation are essential.",
            "Volatile data disappears when power is removed; non-volatile data remains stored.",
            "Forensic analysis should be performed on verified copies, not directly on originals.",
        ]),
    ],

    {
        summary:
            "Understand computer forensics, objectives, forensic principles, volatile/non-volatile evidence and order of volatility.",
        minutes: 13,
        tags: ["cyber-security", "computer-forensics", "digital-evidence", "volatile-data", "important"],

        mcqs: [
            mcq(
                "Computer forensics mainly deals with:",
                ["Identifying, preserving, analysing and presenting computer-based evidence", "Designing video games", "Only changing passwords", "Only formatting computers"],
                0,
                "Computer forensics handles digital evidence from computers and storage media."
            ),
            mcq(
                "Volatile data is data that:",
                ["Is lost when power is removed", "Always stays permanently", "Is printed on paper", "Cannot be analysed"],
                0,
                "RAM contents and running processes are volatile because they may disappear after shutdown."
            ),
            mcq(
                "Non-volatile evidence includes:",
                ["Hard disk files", "CPU registers only", "RAM only", "Running processes only"],
                0,
                "Files stored on disks, SSDs and USB drives are non-volatile."
            ),
            mcq(
                "The main purpose of evidence preservation is to:",
                ["Prevent alteration or loss of evidence", "Make evidence colourful", "Delete old logs", "Compress all videos"],
                0,
                "Preservation protects evidence integrity."
            ),
            mcq(
                "Order of volatility tells investigators to collect:",
                ["Most temporary evidence first", "Only printed documents", "Only old backups", "Only public websites"],
                0,
                "The most volatile evidence, such as RAM, should be collected first when needed."
            ),
            mcq(
                "Forensic analysis should preferably be performed on:",
                ["A verified forensic copy/image", "The only original evidence directly", "A random unrelated disk", "A modified file"],
                0,
                "Working on a verified copy protects the original evidence."
            ),
        ],

        questions: [
            qa(
                "Define computer forensics and explain its objectives.",
                "Computer forensics is the process of identifying, preserving, collecting, analysing and presenting evidence from computers, laptops, servers and storage devices in a legally acceptable manner. Its objectives include discovering what happened during an incident, identifying possible sources of evidence, preserving data without alteration, recovering deleted or hidden files, analysing logs and timelines, determining the cause and impact of an incident, maintaining chain of custody and preparing clear reports for management, investigation or court. It is used in cybercrime, insider threats, malware attacks, data breaches, fraud and policy violations.",
                5
            ),
            qa(
                "Differentiate between volatile and non-volatile evidence.",
                "Volatile evidence is temporary data that may disappear when a device is powered off or when system state changes. Examples include RAM contents, running processes, logged-in users, open network connections and temporary session information. Non-volatile evidence remains stored even after power is removed. Examples include files on hard disks, SSDs, USB drives, logs, browser history, documents and registry data. Volatile data is usually collected first in a live investigation because it is more fragile. Non-volatile data is commonly collected through forensic imaging so that analysis can be performed on a copy.",
                5
            ),
            qa(
                "Explain important principles of computer forensics.",
                "Important principles of computer forensics include preservation, integrity, documentation, repeatability, chain of custody and legal admissibility. Preservation means protecting evidence from alteration or destruction. Integrity means proving that evidence has not changed, often using cryptographic hashes. Documentation means recording every action taken during collection and analysis. Repeatability means another examiner should be able to verify the procedure and results. Chain of custody tracks who handled evidence, when and why. Legal admissibility means evidence must be collected and handled according to applicable law and accepted procedures.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — Digital Evidence and Chain of Custody
========================================================= */

const digitalEvidenceAndChainOfCustody = createTopic(
    "digital-evidence-and-chain-of-custody",
    "Digital Evidence and Chain of Custody",

    [
        definition(
            "Digital Evidence",
            "Digital evidence is any information of probative value that is stored, transmitted or processed in digital form and can be used in an investigation."
        ),

        text(
            "Digital evidence is fragile. It can be modified, deleted, overwritten or corrupted easily. Therefore, investigators must follow proper procedures to preserve its authenticity and integrity."
        ),

        heading("Examples of Digital Evidence"),

        table(
            ["Evidence Type", "Examples"],
            [
                ["Files", "Documents, images, videos, spreadsheets, source code"],
                ["System logs", "Login logs, event logs, application logs"],
                ["Network evidence", "Firewall logs, proxy logs, packet captures"],
                ["Browser data", "History, cookies, cache, downloads"],
                ["Email evidence", "Emails, headers, attachments"],
                ["Metadata", "File timestamps, author, GPS data in images"],
                ["Mobile data", "Calls, SMS, chats, app data, location"],
                ["Cloud evidence", "Account activity, access logs, stored files"],
            ]
        ),

        heading("Characteristics of Digital Evidence"),

        table(
            ["Characteristic", "Meaning"],
            [
                ["Fragile", "Can be changed or deleted easily"],
                ["Hidden", "May be in deleted space, metadata or system files"],
                ["Duplicable", "Can be copied exactly if proper imaging is used"],
                ["Time-sensitive", "Logs and volatile data may disappear quickly"],
                ["Metadata-rich", "May contain timestamps, location and device details"],
                ["Requires tools", "Special tools may be needed for collection and analysis"],
            ]
        ),

        heading("Admissibility of Evidence"),

        text(
            "For digital evidence to be useful legally, it must be relevant, authentic, complete, reliable and collected using acceptable methods. Improper handling may make evidence inadmissible or reduce its value."
        ),

        table(
            ["Requirement", "Meaning"],
            [
                ["Relevance", "Evidence relates to the case"],
                ["Authenticity", "Evidence is what it claims to be"],
                ["Integrity", "Evidence has not been altered"],
                ["Reliability", "Collection and analysis methods are trustworthy"],
                ["Completeness", "Evidence gives a fair and complete picture"],
                ["Legality", "Evidence was collected according to law"],
            ]
        ),

        heading("Chain of Custody"),

        definition(
            "Chain of Custody",
            "Chain of custody is a documented record showing the collection, handling, transfer, storage and analysis of evidence from the time it is obtained until it is presented."
        ),

        heading("Chain of Custody Record Includes"),

        list([
            "Case number or evidence ID.",
            "Description of evidence item.",
            "Date, time and location of collection.",
            "Name and signature of person collecting evidence.",
            "Hash value of digital image or file.",
            "Every transfer of evidence with date/time.",
            "Purpose of transfer or access.",
            "Storage location and security controls.",
            "Final disposal or return details.",
        ], true),

        heading("Why Chain of Custody is Important"),

        table(
            ["Reason", "Explanation"],
            [
                ["Integrity", "Shows evidence was not tampered with"],
                ["Accountability", "Identifies who handled evidence"],
                ["Legal acceptance", "Supports admissibility in court"],
                ["Traceability", "Tracks movement and storage"],
                ["Reliability", "Builds confidence in investigation results"],
            ]
        ),

        heading("Hashing for Evidence Integrity"),

        definition(
            "Forensic Hash",
            "A forensic hash is a cryptographic digest calculated for evidence or its image to prove that the data has not changed."
        ),

        code(
            `Example concept:

Original disk image hash:
SHA-256: A1B2C3...

After analysis, hash is recalculated:
SHA-256: A1B2C3...

If hashes match:
Evidence/image has not changed.`,
            "text",
            "Hash verification concept"
        ),

        heading("Evidence Handling Best Practices"),

        steps([
            "Secure the scene and prevent unauthorised access.",
            "Photograph or document device condition and connections.",
            "Label each evidence item clearly.",
            "Use write blockers for storage media where applicable.",
            "Create forensic images and calculate hash values.",
            "Store originals securely in tamper-evident packaging.",
            "Analyse only verified copies whenever possible.",
            "Maintain complete chain of custody documentation.",
        ]),

        note(
            "A missing or broken chain of custody can create doubt about whether evidence was altered, planted or mishandled. Documentation is as important as technical analysis.",
            "warning",
            "Documentation Matters"
        ),

        keyPoints([
            "Digital evidence may include files, logs, emails, metadata, browser data, mobile and cloud data.",
            "Digital evidence is fragile and must be preserved carefully.",
            "Admissible evidence should be relevant, authentic, complete and reliable.",
            "Chain of custody records every handling and transfer of evidence.",
            "Hash values help prove integrity of digital evidence.",
            "Original evidence should be protected; analysis should use verified copies.",
        ]),
    ],

    {
        summary:
            "Learn digital evidence types, admissibility, chain of custody, forensic hashing and evidence handling best practices.",
        minutes: 13,
        tags: ["cyber-security", "digital-evidence", "chain-of-custody", "forensic-hash"],

        mcqs: [
            mcq(
                "Digital evidence is:",
                ["Information stored, processed or transmitted digitally that may be useful in investigation", "Only printed paper", "Only physical fingerprints", "Only monitor size"],
                0,
                "Digital evidence is data in digital form that has investigative value."
            ),
            mcq(
                "Chain of custody records:",
                ["Collection, handling, transfer and storage of evidence", "Only screen brightness", "Only internet speed", "Only keyboard input"],
                0,
                "Chain of custody documents the evidence life cycle."
            ),
            mcq(
                "A forensic hash is used to verify:",
                ["Integrity of evidence", "Colour of evidence", "Size of monitor", "Typing speed"],
                0,
                "Hashes prove whether data has changed."
            ),
            mcq(
                "Which is an example of digital evidence?",
                ["Browser history", "Water bottle only", "Chair only", "Blank wall"],
                0,
                "Browser history can reveal user activity and is digital evidence."
            ),
            mcq(
                "A write blocker is used to:",
                ["Prevent modification of storage media during acquisition", "Increase screen resolution", "Delete malware automatically", "Print documents"],
                0,
                "Write blockers help preserve original media integrity."
            ),
            mcq(
                "Broken chain of custody may:",
                ["Create doubt about evidence integrity", "Improve evidence quality", "Automatically prove guilt", "Make hashes unnecessary"],
                0,
                "Poor documentation can weaken evidence reliability."
            ),
        ],

        questions: [
            qa(
                "What is digital evidence? Give examples and characteristics.",
                "Digital evidence is information stored, transmitted or processed in digital form that can help prove or disprove facts in an investigation. Examples include documents, images, videos, emails, chat records, system logs, browser history, cookies, file metadata, firewall logs, mobile call records, SMS, app data and cloud access logs. Digital evidence is fragile because it can be modified, deleted or overwritten easily. It may be hidden in metadata, deleted areas or system files. It is duplicable through forensic imaging, time-sensitive because logs may rotate, and often requires specialised tools for proper collection and analysis.",
                5
            ),
            qa(
                "Explain chain of custody and its importance.",
                "Chain of custody is the documented record of evidence handling from collection to presentation. It records who collected the evidence, when and where it was collected, how it was stored, who accessed it, why it was transferred, hash values and final disposal or return. It is important because it proves that evidence was handled properly and was not altered, substituted or contaminated. It provides accountability and traceability. In legal proceedings, a proper chain of custody supports admissibility and reliability. A broken chain can create doubt and reduce the value of evidence.",
                5
            ),
            qa(
                "How is hashing used in digital forensics?",
                "Hashing is used in digital forensics to verify the integrity of evidence. A cryptographic hash such as SHA-256 is calculated for the original file, disk image or evidence copy. After copying, transferring or analysing the evidence, the hash is recalculated. If the original and later hash values match, it shows that the data has not changed. If the hash differs, the evidence may have been altered or corrupted. Hash values are recorded in documentation and chain of custody forms. Forensic hashing helps prove authenticity and supports legal acceptance of digital evidence.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — Forensic Investigation Process and Tools
========================================================= */

const forensicInvestigationProcessAndTools = createTopic(
    "forensic-investigation-process-and-tools",
    "Forensic Investigation Process and Tools",

    [
        text(
            "A forensic investigation must follow a structured process. Random or undocumented actions can damage evidence and weaken the case. The investigation process generally includes identification, preservation, acquisition, examination, analysis and reporting."
        ),

        heading("Forensic Investigation Process"),

        steps([
            "Identification — identify incident, evidence sources and scope.",
            "Preservation — protect evidence from alteration or loss.",
            "Acquisition — create forensic images or collect data safely.",
            "Examination — extract relevant data using forensic methods.",
            "Analysis — interpret evidence and reconstruct events.",
            "Documentation — record tools, methods, timestamps and findings.",
            "Reporting — present conclusions clearly and objectively.",
        ]),

        heading("Identification Phase"),

        table(
            ["Task", "Purpose"],
            [
                ["Define incident scope", "Understand what is being investigated"],
                ["Identify devices/accounts", "Locate possible evidence sources"],
                ["Record initial condition", "Document device state and environment"],
                ["Prioritise evidence", "Collect volatile or critical data first"],
                ["Obtain authorisation", "Ensure legal/organisational permission"],
            ]
        ),

        heading("Preservation and Acquisition"),

        definition(
            "Forensic Imaging",
            "Forensic imaging is the process of creating an exact bit-by-bit copy of digital storage media for analysis while preserving the original evidence."
        ),

        definition(
            "Write Blocker",
            "A write blocker is a hardware or software tool that prevents writing to evidence media during acquisition."
        ),

        table(
            ["Concept", "Meaning"],
            [
                ["Bit-by-bit copy", "Copies all sectors, including deleted/unallocated areas"],
                ["Logical copy", "Copies selected files/folders only"],
                ["Physical acquisition", "Captures entire storage media"],
                ["Hash verification", "Confirms image matches original"],
                ["Evidence seal", "Tamper-evident protection for original device/media"],
            ]
        ),

        heading("Examination and Analysis"),

        list([
            "Recover deleted files where possible.",
            "Analyse file system structure.",
            "Review operating system and application logs.",
            "Inspect browser history, downloads and cache.",
            "Analyse email headers and attachments.",
            "Create timeline of user and system activity.",
            "Look for malware traces or suspicious executables.",
            "Analyse metadata from documents and images.",
            "Correlate evidence from multiple sources.",
        ], true),

        heading("Timeline Analysis"),

        definition(
            "Timeline Analysis",
            "Timeline analysis is the process of arranging file, log and system events in chronological order to understand what happened during an incident."
        ),

        table(
            ["Timestamp Type", "Meaning"],
            [
                ["Created time", "When file was created"],
                ["Modified time", "When file content was changed"],
                ["Accessed time", "When file was accessed"],
                ["Deleted time", "When file was removed, if recoverable"],
                ["Log time", "Timestamp from system/application event logs"],
            ]
        ),

        heading("Common Forensic Tools"),

        table(
            ["Tool", "Use"],
            [
                ["Autopsy / Sleuth Kit", "Open-source disk forensic analysis"],
                ["FTK Imager", "Disk imaging and evidence preview"],
                ["EnCase", "Commercial forensic investigation platform"],
                ["X-Ways Forensics", "Disk and file system analysis"],
                ["Volatility", "Memory/RAM forensic analysis"],
                ["Wireshark", "Network packet analysis"],
                ["ExifTool", "Metadata extraction from files"],
                ["Hashing tools", "Generate MD5/SHA hashes for integrity checks"],
            ]
        ),

        heading("Memory Forensics"),

        definition(
            "Memory Forensics",
            "Memory forensics is the analysis of RAM dumps to identify running processes, network connections, malware traces, loaded modules and other live system artefacts."
        ),

        text(
            "Memory forensics is useful because some malware exists mainly in memory or hides from normal disk-based tools. RAM may contain encryption keys, command history, active processes and network sessions."
        ),

        heading("Forensic Report"),

        table(
            ["Report Section", "Content"],
            [
                ["Case details", "Case ID, investigator, dates, authority"],
                ["Evidence list", "Devices, images, hash values"],
                ["Tools and methods", "Tools used and procedures followed"],
                ["Findings", "Relevant facts discovered"],
                ["Timeline", "Chronological reconstruction"],
                ["Conclusion", "Objective interpretation of evidence"],
                ["Limitations", "What could not be confirmed"],
                ["Appendices", "Screenshots, logs, hash records"],
            ]
        ),

        note(
            "A forensic report should be objective. Investigators should report what the evidence shows and what cannot be proven, not personal assumptions.",
            "tip",
            "Reporting"
        ),

        keyPoints([
            "Forensic investigation follows identification, preservation, acquisition, examination, analysis and reporting.",
            "Forensic imaging creates a bit-by-bit copy for analysis.",
            "Write blockers help prevent changes to original evidence.",
            "Timeline analysis reconstructs events chronologically.",
            "Common tools include Autopsy, FTK Imager, EnCase, Volatility and Wireshark.",
            "Forensic reports must be clear, documented and objective.",
        ]),
    ],

    {
        summary:
            "Learn forensic process, imaging, write blockers, timeline analysis, memory forensics, tools and reporting.",
        minutes: 14,
        tags: ["cyber-security", "forensic-process", "forensic-tools", "forensic-imaging", "timeline"],

        mcqs: [
            mcq(
                "The first phase of a forensic investigation is usually:",
                ["Identification", "Publishing report", "Deleting evidence", "Formatting disk"],
                0,
                "Identification defines incident scope and possible evidence sources."
            ),
            mcq(
                "Forensic imaging means:",
                ["Creating an exact copy of storage media for analysis", "Editing original files", "Deleting browser history", "Compressing videos only"],
                0,
                "Forensic imaging creates a bit-by-bit copy of evidence media."
            ),
            mcq(
                "A write blocker prevents:",
                ["Writing/modifying evidence media", "Reading evidence", "Creating reports", "Taking notes"],
                0,
                "Write blockers prevent accidental or intentional changes to original media."
            ),
            mcq(
                "Timeline analysis arranges events by:",
                ["Time order", "File colour", "Monitor size", "Keyboard type"],
                0,
                "Timeline analysis reconstructs events chronologically."
            ),
            mcq(
                "Volatility is commonly used for:",
                ["Memory forensics", "Drawing diagrams only", "Password creation", "Printing reports"],
                0,
                "Volatility analyses RAM/memory dumps."
            ),
            mcq(
                "A forensic report should be:",
                ["Objective and evidence-based", "Based only on guesses", "Without tool details", "Intentionally incomplete"],
                0,
                "Reports should clearly present facts, methods and conclusions."
            ),
        ],

        questions: [
            qa(
                "Explain the phases of a forensic investigation.",
                "A forensic investigation generally includes identification, preservation, acquisition, examination, analysis, documentation and reporting. Identification defines the incident scope and possible evidence sources. Preservation protects evidence from alteration or loss. Acquisition collects evidence safely, often by creating forensic images and calculating hashes. Examination extracts relevant data such as files, logs, browser history and metadata. Analysis interprets the evidence and reconstructs events. Documentation records every action, tool and timestamp. Reporting presents findings, conclusions and limitations clearly. Following these phases helps maintain evidence integrity and legal reliability.",
                5
            ),
            qa(
                "What is forensic imaging? Why are write blockers used?",
                "Forensic imaging is the process of creating an exact bit-by-bit copy of digital storage media, including active files, deleted data areas, slack space and unallocated space where possible. Investigators analyse the image instead of the original evidence to prevent accidental changes. A write blocker is a hardware or software tool that allows reading from evidence media but prevents writing to it. This protects the original disk from modification during acquisition. After imaging, hash values are calculated for the original and image. Matching hashes prove that the forensic image is an accurate copy.",
                5
            ),
            qa(
                "Describe common forensic tools and their uses.",
                "Common forensic tools include Autopsy and Sleuth Kit for open-source disk and file system analysis, FTK Imager for creating disk images and previewing evidence, EnCase and X-Ways Forensics for professional forensic investigations, Volatility for memory forensics, Wireshark for analysing network packets, ExifTool for extracting metadata from images and documents, and hashing tools for calculating MD5 or SHA values. These tools help recover deleted files, analyse logs, build timelines, inspect browser activity, verify evidence integrity and prepare investigation findings. Tools must be used with proper authorisation and documentation.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — Mobile and Hand-Held Device Forensics
========================================================= */

const mobileAndHandHeldDeviceForensics = createTopic(
    "mobile-and-hand-held-device-forensics",
    "Mobile and Hand-Held Device Forensics",

    [
        definition(
            "Mobile Forensics",
            "Mobile forensics is the branch of digital forensics that deals with recovery, preservation, acquisition and analysis of evidence from smartphones, tablets, SIM cards, memory cards and other hand-held devices."
        ),

        text(
            "Mobile devices are important in investigations because they store communication, photos, videos, documents, app data, location history, call logs, messages, contacts and cloud account information. They are also carried everywhere, making them rich sources of behavioural evidence."
        ),

        heading("Hand-Held Devices in Forensics"),

        table(
            ["Device / Media", "Possible Evidence"],
            [
                ["Smartphone", "Calls, SMS, chats, photos, apps, location, browser data"],
                ["Tablet", "Documents, accounts, browsing, cloud apps"],
                ["SIM card", "Subscriber identity, contacts/SMS in some cases"],
                ["Memory card", "Photos, videos, documents, deleted files"],
                ["Smartwatch", "Health data, notifications, location, activity"],
                ["GPS device", "Routes, locations, timestamps"],
                ["Portable media player", "Files, connection history"],
            ]
        ),

        heading("Types of Mobile Evidence"),

        list([
            "Call logs and contact lists.",
            "SMS, MMS and messaging app chats.",
            "Photos, videos and audio recordings.",
            "Location data and GPS history.",
            "Browser history, cookies and downloads.",
            "Email accounts and attachments.",
            "App data from social media, banking, maps and cloud apps.",
            "Device identifiers such as IMEI and IMSI.",
            "Wi-Fi and Bluetooth connection history.",
            "Deleted data, if recoverable.",
        ], true),

        heading("Challenges in Mobile Forensics"),

        table(
            ["Challenge", "Explanation"],
            [
                ["Device lock/encryption", "Modern phones use strong encryption and screen locks"],
                ["Remote wipe risk", "Data may be erased remotely if connected"],
                ["Cloud synchronisation", "Data may be stored across cloud services"],
                ["Frequent OS updates", "Tool support changes often"],
                ["App encryption", "Apps may protect databases separately"],
                ["Battery dependency", "Device state can change if battery dies"],
                ["Legal/privacy issues", "Mobile devices contain large personal data"],
            ]
        ),

        heading("Preserving a Mobile Device"),

        steps([
            "Document device condition, screen state, time, network status and visible notifications.",
            "Prevent remote access or remote wipe according to approved procedure.",
            "Keep device powered if live data/access state must be preserved and authorised.",
            "Use airplane mode or Faraday isolation where appropriate and legally permitted.",
            "Avoid unnecessary interaction with the device.",
            "Package, label and document device transfer.",
            "Acquire data using approved forensic tools and methods.",
        ]),

        note(
            "Mobile preservation decisions depend on legal authority, device state and organisational procedure. Incorrect handling can lock the device, trigger encryption or allow remote wiping.",
            "warning",
            "Mobile Evidence Handling"
        ),

        heading("Mobile Acquisition Types"),

        table(
            ["Acquisition Type", "Meaning", "Data Coverage"],
            [
                ["Manual acquisition", "Examiner views and records data through device interface", "Limited; visible data only"],
                ["Logical acquisition", "Collects files and data accessible through OS/APIs", "Common user data and app data"],
                ["File system acquisition", "Copies file system structure", "More complete than logical"],
                ["Physical acquisition", "Bit-level copy of memory/storage where possible", "Most complete, but often restricted by encryption"],
                ["Cloud acquisition", "Collects synced data from cloud account with authority", "Cloud backups, emails, app data"],
            ]
        ),

        heading("SIM Card Forensics"),

        definition(
            "SIM Card",
            "A SIM card is a smart card used in mobile networks to store subscriber identity information and authenticate the user to the cellular network."
        ),

        table(
            ["SIM Artefact", "Meaning"],
            [
                ["IMSI", "International Mobile Subscriber Identity"],
                ["ICCID", "Unique SIM card identifier"],
                ["Contacts", "May be stored on SIM in some cases"],
                ["SMS", "May be stored on SIM in some older/limited cases"],
                ["Network information", "Operator and service-related data"],
            ]
        ),

        heading("Android and iOS Forensics Overview"),

        table(
            ["Aspect", "Android", "iOS"],
            [
                ["Ecosystem", "Many manufacturers and versions", "Controlled Apple ecosystem"],
                ["Storage", "App sandboxes, internal storage, SD card in some devices", "Strong sandboxing and encryption"],
                ["Backups", "Google/cloud and local possibilities", "iTunes/Finder/iCloud backups"],
                ["Challenges", "Fragmentation and app diversity", "Strong encryption and locked ecosystem"],
                ["Evidence", "Apps, messages, media, location, accounts", "Apps, messages, media, location, backups"],
            ]
        ),

        heading("Common Mobile Forensic Tools"),

        table(
            ["Tool", "Use"],
            [
                ["Cellebrite UFED", "Mobile extraction and analysis"],
                ["Magnet AXIOM", "Computer and mobile forensic analysis"],
                ["Oxygen Forensic Detective", "Mobile/cloud/app artefact analysis"],
                ["MSAB XRY", "Mobile device extraction"],
                ["Autopsy", "Can analyse some mobile images/files"],
                ["ADB", "Android debugging/backup support in authorised contexts"],
            ]
        ),

        keyPoints([
            "Mobile forensics investigates smartphones, tablets, SIMs, memory cards and hand-held devices.",
            "Mobile devices contain calls, messages, chats, media, app data and location evidence.",
            "Challenges include encryption, locks, remote wipe, cloud sync and privacy issues.",
            "Acquisition types include manual, logical, file system, physical and cloud acquisition.",
            "SIM cards may contain subscriber identifiers such as IMSI and ICCID.",
            "Mobile evidence must be preserved carefully to avoid data loss or alteration.",
        ]),
    ],

    {
        summary:
            "Learn mobile/hand-held device evidence, preservation, acquisition types, SIM forensics, Android/iOS overview and mobile forensic tools.",
        minutes: 14,
        tags: ["cyber-security", "mobile-forensics", "hand-held-devices", "sim-forensics", "android", "ios"],

        mcqs: [
            mcq(
                "Mobile forensics deals with evidence from:",
                ["Smartphones, tablets, SIM cards and hand-held devices", "Only paper files", "Only chairs", "Only monitors"],
                0,
                "Mobile forensics focuses on mobile and hand-held digital devices."
            ),
            mcq(
                "Which is common mobile evidence?",
                ["Call logs and chats", "Wooden table", "Printer paper only", "Wall paint"],
                0,
                "Call logs, chats, media and location data are common mobile evidence."
            ),
            mcq(
                "A major challenge in mobile forensics is:",
                ["Device encryption and screen locks", "Too much paper", "No apps exist", "No timestamps exist anywhere"],
                0,
                "Modern mobile encryption and locks make acquisition challenging."
            ),
            mcq(
                "Physical acquisition generally means:",
                ["Bit-level copy where possible", "Only taking a photo of the screen", "Only reading contacts manually", "Deleting all data"],
                0,
                "Physical acquisition attempts a low-level copy of device storage."
            ),
            mcq(
                "IMSI is related to:",
                ["Subscriber identity in mobile networks", "File compression", "Monitor size", "Antivirus update"],
                0,
                "IMSI identifies a mobile subscriber."
            ),
            mcq(
                "Faraday isolation is used to:",
                ["Reduce wireless communication with the device", "Increase battery life only", "Format memory card", "Print evidence"],
                0,
                "Faraday bags/isolators can block radio signals to prevent remote access."
            ),
        ],

        questions: [
            qa(
                "What is mobile forensics? Why are mobile devices important in investigations?",
                "Mobile forensics is the recovery, preservation, acquisition and analysis of evidence from smartphones, tablets, SIM cards, memory cards and other hand-held devices. Mobile devices are important because they contain rich personal and behavioural data, including call logs, contacts, SMS, chats, photos, videos, audio recordings, emails, browser history, app data, location history, Wi-Fi connections and cloud account information. Since people carry phones everywhere, they can help establish communication, movement, activity and timelines. Mobile evidence is useful in cybercrime, fraud, harassment, missing-person cases and insider investigations.",
                5
            ),
            qa(
                "Explain challenges in mobile device forensics.",
                "Mobile device forensics faces several challenges. Modern phones use strong encryption and screen locks, making access difficult without legal authority and proper methods. Devices may be remotely wiped if connected to a network. Cloud synchronisation means evidence may exist on both device and cloud accounts. Mobile operating systems and apps update frequently, so forensic tools must keep up. Apps may use separate encryption or protected databases. Battery loss can change device state or lock access. Mobile phones also contain large amounts of private information, so legal and privacy controls are very important.",
                5
            ),
            qa(
                "Differentiate between manual, logical, file system, physical and cloud acquisition.",
                "Manual acquisition involves viewing data through the device screen and recording it using notes, photos or screenshots; it is limited to visible data. Logical acquisition collects data available through the operating system or official APIs, such as contacts, messages and media. File system acquisition copies the file system structure and may recover more app data than logical methods. Physical acquisition attempts a bit-level copy of device storage, but modern encryption often restricts it. Cloud acquisition collects synced or backed-up data from cloud services with proper authorisation. The best method depends on device model, OS, lock state and legal permission.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 5 — Legal, Ethical and Reporting Aspects
========================================================= */

const legalEthicalAndReportingAspects = createTopic(
    "legal-ethical-and-reporting-aspects",
    "Legal, Ethical and Reporting Aspects",

    [
        text(
            "Digital forensic work is technical, but it is also legal and ethical. Evidence must be collected with proper authority, privacy must be respected and findings must be reported honestly."
        ),

        heading("Legal Considerations in Digital Forensics"),

        table(
            ["Consideration", "Meaning"],
            [
                ["Authorisation", "Investigator must have legal or organisational permission"],
                ["Search scope", "Only relevant devices/accounts/data should be examined"],
                ["Privacy", "Personal and unrelated data must be protected"],
                ["Jurisdiction", "Different regions may have different cyber laws"],
                ["Admissibility", "Evidence must be collected and handled properly"],
                ["Data protection", "Sensitive data must be stored and transferred securely"],
            ]
        ),

        heading("Ethical Principles for Forensic Investigators"),

        list([
            "Work only with proper authorisation.",
            "Do not exceed the approved scope of investigation.",
            "Preserve evidence integrity.",
            "Maintain confidentiality of case information.",
            "Avoid conflicts of interest.",
            "Report findings objectively, including limitations.",
            "Do not alter, fabricate or hide evidence.",
            "Respect privacy and data protection requirements.",
        ], true),

        heading("Forensic Readiness"),

        definition(
            "Forensic Readiness",
            "Forensic readiness is an organisation's ability to collect, preserve and use digital evidence effectively while minimising investigation cost and disruption."
        ),

        table(
            ["Readiness Measure", "Benefit"],
            [
                ["Centralised logging", "Easier incident reconstruction"],
                ["Time synchronisation", "Accurate timeline across systems"],
                ["Retention policies", "Logs available when needed"],
                ["Access control", "Protects evidence and systems"],
                ["Incident response plan", "Clear roles and procedures"],
                ["Asset inventory", "Know which systems may hold evidence"],
                ["Backup strategy", "Recovery and historical evidence"],
            ]
        ),

        heading("Documentation During Investigation"),

        list([
            "Case number and investigator details.",
            "Date, time and location of actions.",
            "Device description and serial numbers.",
            "Photographs or screenshots where appropriate.",
            "Tools used with versions.",
            "Hash values of evidence and images.",
            "Steps performed and results obtained.",
            "People who handled or accessed evidence.",
            "Any limitations, errors or unusual observations.",
        ], true),

        heading("Forensic Report Writing"),

        definition(
            "Forensic Report",
            "A forensic report is a formal document that explains the evidence examined, methods used, findings, conclusions and limitations of an investigation."
        ),

        table(
            ["Report Part", "Details"],
            [
                ["Executive summary", "Short overview for non-technical readers"],
                ["Scope and authority", "What was examined and under whose authorisation"],
                ["Evidence details", "Devices/files/images and hash values"],
                ["Methodology", "Tools, procedures and standards followed"],
                ["Findings", "Relevant evidence discovered"],
                ["Timeline", "Sequence of events"],
                ["Conclusion", "Evidence-based answer to investigation questions"],
                ["Limitations", "What could not be determined"],
                ["Appendix", "Logs, screenshots, technical details"],
            ]
        ),

        heading("Qualities of a Good Forensic Report"),

        list([
            "Clear and understandable language.",
            "Objective and evidence-based conclusions.",
            "Proper dates, times and timezone information.",
            "Screenshots, logs and hashes where needed.",
            "Separation of facts from opinions.",
            "Explanation of technical terms for non-technical readers.",
            "Complete enough for another expert to review.",
            "No unnecessary exposure of private information.",
        ]),

        heading("Expert Witness and Court Presentation"),

        text(
            "A forensic investigator may need to explain findings in court or disciplinary proceedings. They should explain methods, tools, evidence integrity and conclusions clearly. They should avoid exaggeration and should acknowledge uncertainty where evidence does not prove something fully."
        ),

        heading("Incident Reporting and Response Link"),

        steps([
            "Detect suspicious activity or receive complaint.",
            "Preserve immediate evidence and prevent further damage.",
            "Escalate to incident response/legal/management team.",
            "Collect evidence using approved forensic procedure.",
            "Analyse and document findings.",
            "Report results to authorised stakeholders.",
            "Support remediation, disciplinary or legal action.",
            "Update policies and controls to prevent recurrence.",
        ]),

        note(
            "Forensic investigators should never change evidence to make a case stronger. The duty of a forensic examiner is to truth and evidence, not to any desired outcome.",
            "warning",
            "Ethical Duty"
        ),

        keyPoints([
            "Forensic work requires proper authorisation and defined scope.",
            "Investigators must protect privacy and confidentiality.",
            "Forensic readiness helps organisations collect useful evidence quickly.",
            "Documentation should record actions, tools, timestamps, hashes and handlers.",
            "Forensic reports must be clear, objective and evidence-based.",
            "Ethical investigators report limitations and never alter or fabricate evidence.",
        ]),
    ],

    {
        summary:
            "Learn legal and ethical duties, forensic readiness, documentation, forensic report writing and court presentation basics.",
        minutes: 13,
        tags: ["cyber-security", "forensic-report", "legal", "ethics", "forensic-readiness"],

        mcqs: [
            mcq(
                "A forensic investigator should work only with:",
                ["Proper authorisation", "No permission", "Anonymous rumours only", "Deleted evidence only"],
                0,
                "Legal or organisational authorisation is required."
            ),
            mcq(
                "Forensic readiness means:",
                ["Ability to collect and preserve evidence effectively", "Deleting all logs", "Avoiding documentation", "Ignoring incidents"],
                0,
                "Forensic readiness prepares organisations for effective evidence handling."
            ),
            mcq(
                "A forensic report should be:",
                ["Clear, objective and evidence-based", "Full of unsupported guesses", "Without dates", "Without limitations"],
                0,
                "Reports must present evidence, methods and conclusions objectively."
            ),
            mcq(
                "Which should be included in forensic documentation?",
                ["Tools used, timestamps and hash values", "Only favourite colour", "Only screen wallpaper", "No details"],
                0,
                "Documentation records procedures, evidence details, tools and hashes."
            ),
            mcq(
                "An ethical forensic investigator should:",
                ["Report facts and limitations honestly", "Hide inconvenient evidence", "Modify logs", "Fabricate screenshots"],
                0,
                "Ethical reporting requires honesty and objectivity."
            ),
            mcq(
                "Time synchronisation helps forensic readiness by:",
                ["Creating accurate timelines across systems", "Deleting logs faster", "Changing evidence automatically", "Removing need for reports"],
                0,
                "Synchronized clocks make event correlation more reliable."
            ),
        ],

        questions: [
            qa(
                "Explain legal and ethical considerations in digital forensics.",
                "Digital forensic investigators must work with proper legal or organisational authorisation. They should follow the approved scope and examine only relevant devices, accounts and data. Privacy must be respected because digital devices may contain personal and unrelated information. Evidence must be collected using reliable methods so it remains admissible. Investigators must maintain confidentiality, avoid conflicts of interest, preserve evidence integrity and document all actions. Ethically, they must not alter, hide or fabricate evidence. Reports should be objective and should include limitations where facts cannot be fully proved.",
                5
            ),
            qa(
                "What is forensic readiness? Why is it important for organisations?",
                "Forensic readiness is an organisation's ability to collect, preserve and use digital evidence effectively when an incident occurs. It reduces investigation cost, improves response speed and increases the chance that evidence will be legally and technically useful. Forensic readiness includes centralised logging, secure log retention, time synchronisation, access control, asset inventory, incident response plans, backup strategies and trained personnel. Without readiness, logs may be missing, timestamps may not match, evidence may be overwritten and responsibilities may be unclear. Good readiness helps reconstruct incidents and supports legal, disciplinary or recovery actions.",
                5
            ),
            qa(
                "Describe the contents and qualities of a good forensic report.",
                "A good forensic report includes case details, scope and authority, evidence description, hash values, tools and versions used, methodology, findings, timeline, conclusions, limitations and appendices such as screenshots or logs. It should be clear enough for both technical and non-technical readers. It must separate facts from opinions and base conclusions only on evidence. Dates, times and time zones should be stated accurately. The report should be complete enough for another expert to review the work. It should also avoid unnecessary exposure of private information and honestly mention what could not be determined.",
                5
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit4Topics = [
    introductionToComputerForensics,
    digitalEvidenceAndChainOfCustody,
    forensicInvestigationProcessAndTools,
    mobileAndHandHeldDeviceForensics,
    legalEthicalAndReportingAspects,
];