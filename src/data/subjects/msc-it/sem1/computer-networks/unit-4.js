/* =========================================================
   MSc-IT • SEM 1 • Computer Networks
   UNIT 4 — Wireless Communication and Network Security
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
   TOPIC 1 — Introduction to Wireless Communication
========================================================= */

const introToWirelessCommunication = createTopic(
    "introduction-to-wireless-communication",
    "Introduction to Wireless Communication",

    [
        definition(
            "Wireless Communication",
            "The transfer of information between two or more points without the use of physical conductors (wires or cables). It uses electromagnetic waves such as radio waves, microwaves or infrared to carry signals through the air or vacuum."
        ),

        text(
            "Wireless communication has revolutionised how we connect, enabling mobile phones, Wi-Fi, Bluetooth, satellite communication, GPS and the Internet of Things (IoT). The wireless spectrum is a finite natural resource regulated by government agencies worldwide, and efficient use of this spectrum is one of the central challenges in wireless networking."
        ),

        heading("Electromagnetic Spectrum for Wireless"),

        table(
            ["Band", "Frequency Range", "Wavelength", "Applications"],
            [
                ["Radio (LF/MF/HF)", "3 KHz – 30 MHz", "10 km – 10 m", "AM/FM radio, maritime, aviation"],
                ["VHF/UHF", "30 MHz – 3 GHz", "10 m – 10 cm", "TV, FM radio, mobile phones, Wi-Fi, Bluetooth"],
                ["Microwave", "3 GHz – 300 GHz", "10 cm – 1 mm", "Satellite, 5G, radar, point-to-point links"],
                ["Infrared", "300 GHz – 400 THz", "1 mm – 780 nm", "TV remotes, IrDA, short-range data"],
                ["Visible Light", "400 – 790 THz", "780 – 380 nm", "Li-Fi, optical communication"],
            ]
        ),

        heading("Advantages of Wireless Communication"),

        list([
            "Mobility — users can communicate while moving.",
            "No physical infrastructure — eliminates the need for cables.",
            "Rapid deployment — networks can be set up quickly.",
            "Scalability — easy to add new devices.",
            "Cost-effective for difficult terrain — no need to lay cables across mountains or oceans.",
            "Enables IoT — billions of sensors and devices can connect wirelessly.",
        ]),

        heading("Challenges of Wireless Communication"),

        table(
            ["Challenge", "Description"],
            [
                ["Interference", "Signals from different sources can overlap and corrupt each other"],
                ["Attenuation", "Signal strength decreases with distance and obstacles"],
                ["Multipath Propagation", "Signals bounce off surfaces, arriving at different times and causing distortion"],
                ["Fading", "Signal strength varies over time due to environmental changes"],
                ["Security", "Wireless signals can be intercepted by anyone within range"],
                ["Limited Bandwidth", "The radio spectrum is finite and shared among many users"],
                ["Power Consumption", "Wireless devices need batteries, limiting transmission power"],
            ]
        ),

        heading("Wireless Transmission Techniques"),

        table(
            ["Technique", "Description", "Used In"],
            [
                ["FDMA", "Frequency Division Multiple Access — each user gets a different frequency band", "1G cellular, FM radio"],
                ["TDMA", "Time Division Multiple Access — each user gets a time slot on the same frequency", "2G GSM"],
                ["CDMA", "Code Division Multiple Access — each user gets a unique code; all share the same frequency and time", "3G cellular"],
                ["OFDMA", "Orthogonal FDMA — divides the channel into many orthogonal subcarriers", "4G LTE, Wi-Fi 6, 5G"],
            ]
        ),

        heading("Wireless Network Categories"),

        table(
            ["Category", "Range", "Data Rate", "Examples"],
            [
                ["WPAN (Wireless PAN)", "Up to 10 m", "1–50 Mbps", "Bluetooth, ZigBee, NFC"],
                ["WLAN (Wireless LAN)", "Up to 100 m", "Up to 9.6 Gbps", "Wi-Fi (IEEE 802.11)"],
                ["WMAN (Wireless MAN)", "Up to 50 km", "Up to 1 Gbps", "WiMAX (IEEE 802.16)"],
                ["WWAN (Wireless WAN)", "Nationwide / Global", "Up to 20 Gbps", "4G LTE, 5G cellular"],
                ["Satellite", "Global", "Up to 1 Gbps", "GPS, satellite Internet (Starlink)"],
            ]
        ),

        heading("Propagation Modes"),

        table(
            ["Mode", "Description", "Frequency", "Example"],
            [
                ["Ground Wave", "Follows the Earth's surface", "Below 2 MHz", "AM radio"],
                ["Sky Wave", "Reflects off the ionosphere", "2–30 MHz", "Shortwave radio"],
                ["Line of Sight (LOS)", "Travels in a straight line", "Above 30 MHz", "Wi-Fi, cellular, satellite"],
            ]
        ),

        note(
            "Most modern wireless systems (Wi-Fi, cellular, Bluetooth) operate above 30 MHz and require line-of-sight propagation. Obstacles like walls, buildings and trees attenuate and scatter these signals, which is why indoor Wi-Fi coverage is limited.",
            "tip",
            "Practical Note"
        ),

        keyPoints([
            "Wireless communication uses electromagnetic waves to transfer data without physical cables.",
            "Challenges include interference, attenuation, multipath propagation, fading and security.",
            "Multiple access techniques (FDMA, TDMA, CDMA, OFDMA) allow many users to share the spectrum.",
            "Wireless networks are categorised by range: WPAN, WLAN, WMAN, WWAN and satellite.",
            "Most modern wireless systems use line-of-sight propagation above 30 MHz.",
        ]),
    ],

    {
        summary:
            "Understand wireless communication fundamentals, the electromagnetic spectrum, challenges, multiple access techniques and wireless network categories.",
        minutes: 11,
        tags: ["networks", "wireless", "spectrum", "fdma", "tdma", "cdma", "important"],

        mcqs: [
            mcq(
                "Wi-Fi operates in which frequency band?",
                ["Below 2 MHz", "2–30 MHz", "VHF/UHF (2.4 GHz and 5 GHz)", "Infrared"],
                2,
                "Wi-Fi operates in the VHF/UHF band at 2.4 GHz and 5 GHz (and 6 GHz for Wi-Fi 6E)."
            ),
            mcq(
                "CDMA allows multiple users to share the same channel by:",
                ["Assigning different frequencies", "Assigning different time slots", "Assigning unique codes", "Assigning different antennas"],
                2,
                "CDMA assigns each user a unique spreading code; all users share the same frequency and time."
            ),
            mcq(
                "Multipath propagation causes:",
                ["Stronger signals", "Signal distortion due to signals arriving at different times", "Better security", "Increased bandwidth"],
                1,
                "Multipath causes signals to bounce off surfaces and arrive at different times, causing distortion."
            ),
            mcq(
                "Bluetooth is an example of:",
                ["WLAN", "WPAN", "WMAN", "WWAN"],
                1,
                "Bluetooth is a Wireless Personal Area Network (WPAN) technology with a range of about 10 metres."
            ),
            mcq(
                "4G LTE uses which multiple access technique?",
                ["FDMA", "TDMA", "CDMA", "OFDMA"],
                3,
                "4G LTE uses OFDMA (Orthogonal Frequency Division Multiple Access) for the downlink."
            ),
        ],

        questions: [
            qa(
                "Explain the challenges of wireless communication.",
                "Wireless communication faces several challenges. Interference occurs when signals from different sources overlap and corrupt each other, especially in crowded frequency bands. Attenuation means signal strength decreases with distance and when passing through obstacles like walls. Multipath propagation occurs when signals bounce off surfaces and arrive at the receiver at different times, causing distortion and inter-symbol interference. Fading refers to variations in signal strength over time due to environmental changes like weather or moving objects. Security is a major concern because wireless signals propagate through the air and can be intercepted by anyone within range. The radio spectrum is a finite resource shared among many users, limiting available bandwidth. Wireless devices also face power consumption constraints since they rely on batteries.",
                5
            ),
            qa(
                "Compare FDMA, TDMA, CDMA and OFDMA.",
                "FDMA (Frequency Division Multiple Access) assigns each user a different frequency band, like different radio stations. It is simple but wastes bandwidth due to guard bands and is used in 1G cellular. TDMA (Time Division Multiple Access) assigns each user a time slot on the same frequency, taking turns to transmit. It is more efficient than FDMA and was used in 2G GSM. CDMA (Code Division Multiple Access) assigns each user a unique spreading code, allowing all users to transmit simultaneously on the same frequency. The receiver uses the code to extract the desired signal. It was used in 3G cellular and offers good capacity and security. OFDMA (Orthogonal FDMA) divides the channel into many closely spaced orthogonal subcarriers, each assigned to different users. It is highly efficient and resistant to multipath interference, used in 4G LTE, Wi-Fi 6 and 5G.",
                5
            ),
            qa(
                "Classify wireless networks by range with examples.",
                "Wireless Personal Area Networks (WPANs) cover up to 10 metres and include Bluetooth for connecting peripherals, ZigBee for IoT sensors and NFC for contactless payments. Wireless Local Area Networks (WLANs) cover up to 100 metres and include Wi-Fi (IEEE 802.11) used in homes, offices and campuses, supporting speeds up to 9.6 Gbps with Wi-Fi 6. Wireless Metropolitan Area Networks (WMANs) cover up to 50 km and include WiMAX (IEEE 802.16) for city-wide broadband access. Wireless Wide Area Networks (WWANs) cover nationwide or global areas and include 4G LTE and 5G cellular networks providing mobile broadband. Satellite networks provide global coverage for GPS navigation, satellite television and Internet access through systems like Starlink.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — Wireless LAN (Wi-Fi / IEEE 802.11)
========================================================= */

const wirelessLAN = createTopic(
    "wireless-lan-wifi-ieee-80211",
    "Wireless LAN (Wi-Fi / IEEE 802.11)",

    [
        definition(
            "Wireless LAN (WLAN)",
            "A local area network that uses wireless communication (radio waves) to connect devices within a limited area such as a home, office or campus. The most common WLAN technology is Wi-Fi, based on the IEEE 802.11 family of standards."
        ),

        text(
            "Wi-Fi has become the dominant wireless networking technology, with billions of devices worldwide. It operates primarily in the unlicensed 2.4 GHz and 5 GHz frequency bands (and 6 GHz for Wi-Fi 6E/7), providing high-speed Internet access without cables."
        ),

        heading("IEEE 802.11 Standards Evolution"),

        table(
            ["Standard", "Year", "Frequency", "Max Speed", "Common Name", "Key Feature"],
            [
                ["802.11", "1997", "2.4 GHz", "2 Mbps", "—", "Original standard"],
                ["802.11b", "1999", "2.4 GHz", "11 Mbps", "Wi-Fi 1", "First widely adopted"],
                ["802.11a", "1999", "5 GHz", "54 Mbps", "Wi-Fi 2", "OFDM modulation"],
                ["802.11g", "2003", "2.4 GHz", "54 Mbps", "Wi-Fi 3", "OFDM in 2.4 GHz"],
                ["802.11n", "2009", "2.4/5 GHz", "600 Mbps", "Wi-Fi 4", "MIMO, channel bonding"],
                ["802.11ac", "2013", "5 GHz", "6.9 Gbps", "Wi-Fi 5", "MU-MIMO, wider channels"],
                ["802.11ax", "2019", "2.4/5/6 GHz", "9.6 Gbps", "Wi-Fi 6/6E", "OFDMA, TWT, BSS coloring"],
                ["802.11be", "2024", "2.4/5/6 GHz", "46 Gbps", "Wi-Fi 7", "MLO, 320 MHz channels"],
            ]
        ),

        heading("Wi-Fi Architecture"),

        table(
            ["Component", "Description"],
            [
                ["Station (STA)", "Any device with a Wi-Fi interface (laptop, phone, IoT device)"],
                ["Access Point (AP)", "A device that bridges wireless stations to a wired network"],
                ["Basic Service Set (BSS)", "A single AP and its associated stations"],
                ["Extended Service Set (ESS)", "Multiple BSSs connected by a distribution system (wired backbone)"],
                ["Distribution System (DS)", "The wired network connecting multiple APs"],
                ["SSID", "Service Set Identifier — the network name broadcast by the AP"],
            ]
        ),

        code(
            `Wi-Fi Architecture:

  ┌─────────── ESS ───────────────────┐
  │                                   │
  │  ┌── BSS 1 ──┐   ┌── BSS 2 ──┐  │
  │  │  [AP 1]   │   │  [AP 2]   │  │
  │  │  / | \\    │   │  / | \\    │  │
  │  │ STA STA   │   │ STA STA   │  │
  │  └────┬──────┘   └────┬──────┘  │
  │       │    DS (Wired)  │        │
  │       └───────┬────────┘        │
  │               │                 │
  │          [Switch/Router]        │
  │               │                 │
  └───────────────┼─────────────────┘
                  │
             [Internet]`,
            "text",
            "Wi-Fi architecture"
        ),

        heading("Wi-Fi Modes"),

        table(
            ["Mode", "Description", "Use Case"],
            [
                ["Infrastructure Mode", "Stations communicate through an Access Point", "Home/office Wi-Fi (most common)"],
                ["Ad-hoc Mode (IBSS)", "Stations communicate directly with each other without an AP", "Quick file sharing, emergency networks"],
                ["Mesh Mode", "Multiple APs cooperate to extend coverage seamlessly", "Large homes, campuses (e.g., Wi-Fi mesh systems)"],
            ]
        ),

        heading("CSMA/CA (Carrier Sense Multiple Access with Collision Avoidance)"),

        definition(
            "CSMA/CA",
            "The medium access control protocol used in Wi-Fi. Unlike wired Ethernet's CSMA/CD (Collision Detection), Wi-Fi uses Collision Avoidance because wireless stations cannot detect collisions while transmitting (they cannot listen and transmit simultaneously on the same frequency)."
        ),

        steps([
            "Listen — The station listens to the channel. If busy, it waits.",
            "DIFS Wait — If the channel is idle, the station waits for a DIFS (Distributed Inter-Frame Space) period.",
            "Backoff — The station picks a random backoff timer and counts down while the channel remains idle.",
            "Transmit — When the backoff timer reaches zero, the station transmits its frame.",
            "ACK — The receiver sends an ACK frame after a SIFS (Short Inter-Frame Space). If no ACK is received, the sender assumes a collision and retries with a larger backoff window.",
        ]),

        code(
            `CSMA/CA Process:

  Station A:  [Listen] → [DIFS] → [Backoff: 5 slots] → [TRANSMIT] → [Wait ACK] → ✓
  Station B:  [Listen: BUSY] → [Wait...] → [DIFS] → [Backoff: 3 slots] → [TRANSMIT]

  If no ACK received:
  Station A:  [No ACK] → [Double backoff window] → [Retry]`,
            "text",
            "CSMA/CA process"
        ),

        heading("Hidden Terminal Problem"),

        definition(
            "Hidden Terminal Problem",
            "A situation where two stations (A and C) are both within range of an Access Point (B) but cannot hear each other. Both may transmit simultaneously, causing a collision at B that neither A nor C can detect."
        ),

        heading("RTS/CTS Mechanism"),

        text(
            "To solve the hidden terminal problem, Wi-Fi uses an optional RTS/CTS (Request to Send / Clear to Send) handshake. Before transmitting data, a station sends a short RTS frame. The AP responds with a CTS frame that all nearby stations can hear, telling them to remain silent for the duration of the upcoming transmission."
        ),

        heading("2.4 GHz versus 5 GHz Wi-Fi"),

        table(
            ["Aspect", "2.4 GHz", "5 GHz"],
            [
                ["Range", "Longer (better wall penetration)", "Shorter (less wall penetration)"],
                ["Speed", "Lower (fewer channels, more interference)", "Higher (more channels, less interference)"],
                ["Channels", "3 non-overlapping (1, 6, 11)", "23+ non-overlapping"],
                ["Interference", "High (microwaves, Bluetooth, baby monitors)", "Low"],
                ["Best for", "Range, IoT devices", "Speed, streaming, gaming"],
            ]
        ),

        note(
            "Wi-Fi 6 (802.11ax) introduced OFDMA, which allows multiple devices to share a single channel simultaneously, dramatically improving efficiency in dense environments like stadiums and airports. Wi-Fi 7 (802.11be) adds Multi-Link Operation (MLO) allowing devices to use multiple bands simultaneously.",
            "tip",
            "Latest Standards"
        ),

        keyPoints([
            "Wi-Fi is based on the IEEE 802.11 family of standards, operating in 2.4 GHz, 5 GHz and 6 GHz bands.",
            "Wi-Fi uses CSMA/CA for medium access because wireless stations cannot detect collisions.",
            "The hidden terminal problem is mitigated using the RTS/CTS handshake mechanism.",
            "2.4 GHz offers longer range but more interference; 5 GHz offers higher speed with less interference.",
            "Wi-Fi 6 introduced OFDMA for efficient multi-user access; Wi-Fi 7 adds Multi-Link Operation.",
        ]),
    ],

    {
        summary:
            "Master Wi-Fi standards evolution, architecture, CSMA/CA, hidden terminal problem, RTS/CTS and frequency band comparison.",
        minutes: 13,
        tags: ["networks", "wifi", "802.11", "csma-ca", "hidden-terminal", "important"],

        mcqs: [
            mcq(
                "Wi-Fi is based on which IEEE standard?",
                ["802.3", "802.11", "802.15", "802.16"],
                1,
                "Wi-Fi is based on the IEEE 802.11 family of standards."
            ),
            mcq(
                "Wi-Fi uses which medium access control protocol?",
                ["CSMA/CD", "CSMA/CA", "Token Passing", "TDMA"],
                1,
                "Wi-Fi uses CSMA/CA (Collision Avoidance) because wireless stations cannot detect collisions."
            ),
            mcq(
                "The hidden terminal problem occurs when:",
                ["Two APs interfere with each other", "Two stations cannot hear each other but can both reach the AP", "A station is too far from the AP", "The channel is always busy"],
                1,
                "Hidden terminals are stations that cannot hear each other but both transmit to the same AP, causing collisions."
            ),
            mcq(
                "RTS/CTS is used to solve:",
                ["The exposed terminal problem", "The hidden terminal problem", "Attenuation", "Multipath fading"],
                1,
                "RTS/CTS (Request to Send / Clear to Send) mitigates the hidden terminal problem."
            ),
            mcq(
                "802.11ax is commonly known as:",
                ["Wi-Fi 4", "Wi-Fi 5", "Wi-Fi 6", "Wi-Fi 7"],
                2,
                "802.11ax is Wi-Fi 6, introduced in 2019 with OFDMA and improved multi-user efficiency."
            ),
            mcq(
                "The 5 GHz Wi-Fi band offers:",
                ["Longer range but lower speed", "Higher speed but shorter range", "More interference than 2.4 GHz", "Only 3 non-overlapping channels"],
                1,
                "5 GHz offers higher speeds and more channels but shorter range due to less wall penetration."
            ),
        ],

        questions: [
            qa(
                "Explain CSMA/CA and why Wi-Fi uses it instead of CSMA/CD.",
                "CSMA/CA (Carrier Sense Multiple Access with Collision Avoidance) is the medium access protocol used in Wi-Fi. Before transmitting, a station listens to the channel. If busy, it waits. If idle, it waits for a DIFS period, then picks a random backoff timer and counts down. When the timer reaches zero, it transmits. The receiver sends an ACK after a SIFS period. If no ACK is received, the sender assumes a collision and retries with a larger backoff window. Wi-Fi uses CA instead of CD (Collision Detection used in wired Ethernet) because wireless stations cannot transmit and listen simultaneously on the same frequency — they cannot detect collisions while transmitting. Additionally, the hidden terminal problem means a station may not even hear a collision occurring at the receiver. Therefore, Wi-Fi avoids collisions proactively rather than detecting them reactively.",
                5
            ),
            qa(
                "What is the hidden terminal problem? How does RTS/CTS solve it?",
                "The hidden terminal problem occurs when two wireless stations (A and C) are both within range of an Access Point (B) but are too far apart to hear each other. If both A and C transmit simultaneously, their signals collide at B, but neither A nor C can detect this collision because they cannot hear each other's transmissions. The RTS/CTS mechanism solves this by adding a handshake before data transmission. Station A sends a short RTS (Request to Send) frame to B. B responds with a CTS (Clear to Send) frame that is broadcast to all nearby stations, including C. When C hears the CTS, it knows that B is about to receive data and remains silent for the specified duration. This prevents C from transmitting and causing a collision at B.",
                5
            ),
            qa(
                "Compare 2.4 GHz and 5 GHz Wi-Fi bands.",
                "The 2.4 GHz band offers longer range and better wall penetration because lower frequency signals attenuate less through obstacles. However, it has only 3 non-overlapping channels (1, 6, 11) and suffers from high interference from microwaves, Bluetooth devices, baby monitors and neighbouring Wi-Fi networks. It provides lower maximum speeds. The 5 GHz band offers higher speeds due to wider channels and more available non-overlapping channels (23+), resulting in much less interference. However, its higher frequency signals attenuate more quickly through walls and obstacles, giving it shorter effective range. In practice, modern dual-band routers use 2.4 GHz for range-dependent devices like IoT sensors and 5 GHz for bandwidth-demanding applications like video streaming and gaming.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — Bluetooth and Cellular Networks
========================================================= */

const bluetoothAndCellular = createTopic(
    "bluetooth-and-cellular-networks",
    "Bluetooth and Cellular Networks",

    [
        heading("Bluetooth"),

        definition(
            "Bluetooth",
            "A short-range wireless technology standard (IEEE 802.15.1) designed for exchanging data between fixed and mobile devices over short distances (typically up to 10 metres) using UHF radio waves in the 2.4 GHz ISM band."
        ),

        table(
            ["Version", "Year", "Max Speed", "Range", "Key Feature"],
            [
                ["1.0", "1999", "1 Mbps", "10 m", "Initial release"],
                ["2.0 + EDR", "2004", "3 Mbps", "10 m", "Enhanced Data Rate"],
                ["3.0 + HS", "2009", "24 Mbps", "10 m", "High Speed (via Wi-Fi)"],
                ["4.0 (BLE)", "2010", "1 Mbps", "50 m", "Bluetooth Low Energy for IoT"],
                ["5.0", "2016", "2 Mbps (BLE)", "200 m", "4× range, 2× speed, 8× broadcast"],
                ["5.3", "2021", "2 Mbps (BLE)", "200 m", "Improved efficiency, channel classification"],
            ]
        ),

        heading("Bluetooth Architecture"),

        table(
            ["Concept", "Description"],
            [
                ["Piconet", "A small network of up to 8 active devices (1 master + 7 slaves)"],
                ["Master", "The device that controls the piconet, determines the hopping sequence"],
                ["Slave", "Devices that synchronise to the master's clock and hopping pattern"],
                ["Scatternet", "Multiple interconnected piconets where a device can be a slave in one and master in another"],
                ["FHSS", "Frequency Hopping Spread Spectrum — hops among 79 channels 1600 times/second"],
            ]
        ),

        code(
            `Bluetooth Piconet:

       [Slave 2]
           │
  [Slave 1]──[Master]──[Slave 3]
           │
       [Slave 4]

  Master controls timing and frequency hopping.
  Up to 7 active slaves per piconet.
  Devices hop among 79 channels at 1600 hops/sec.`,
            "text",
            "Bluetooth piconet"
        ),

        heading("Bluetooth Low Energy (BLE)"),

        text(
            "BLE (introduced in Bluetooth 4.0) is designed for IoT and wearable devices that need to transmit small amounts of data with minimal power consumption. BLE devices can run for months or years on a coin cell battery. It is widely used in fitness trackers, smart watches, beacons, medical sensors and smart home devices."
        ),

        heading("Cellular Networks"),

        definition(
            "Cellular Network",
            "A wireless communication network where the coverage area is divided into small geographical regions called cells, each served by a base station (cell tower). This allows frequency reuse across non-adjacent cells, enabling millions of simultaneous users."
        ),

        heading("Cellular Generations"),

        table(
            ["Generation", "Era", "Technology", "Max Speed", "Key Feature"],
            [
                ["1G", "1980s", "Analog (AMPS)", "2.4 Kbps", "Voice only, analog"],
                ["2G", "1990s", "Digital (GSM, CDMA)", "64 Kbps", "Digital voice, SMS, GPRS data"],
                ["3G", "2000s", "WCDMA, CDMA2000", "2 Mbps", "Mobile Internet, video calling"],
                ["4G LTE", "2010s", "OFDMA, MIMO", "1 Gbps", "Mobile broadband, HD streaming"],
                ["5G", "2020s", "mmWave, Massive MIMO", "20 Gbps", "Ultra-low latency, IoT, autonomous vehicles"],
            ]
        ),

        heading("Cellular Architecture"),

        code(
            `Cellular Network Architecture:

  ┌─────┐  ┌─────┐  ┌─────┐
  │Cell │  │Cell │  │Cell │   ← Each cell has a base station (eNodeB/gNB)
  │  A  │──│  B  │──│  C  │
  └──┬──┘  └──┬──┘  └──┬──┘
     │        │        │
  ┌──┴────────┴────────┴──┐
  │   Base Station        │
  │   Controller (BSC)    │
  └──────────┬────────────┘
             │
  ┌──────────┴────────────┐
  │   Mobile Switching    │
  │   Centre (MSC)        │
  └──────────┬────────────┘
             │
  ┌──────────┴────────────┐
  │   Core Network /      │
  │   Internet            │
  └───────────────────────┘`,
            "text",
            "Cellular network architecture"
        ),

        heading("Key Cellular Concepts"),

        table(
            ["Concept", "Description"],
            [
                ["Cell", "A geographical area served by one base station"],
                ["Frequency Reuse", "The same frequencies are reused in non-adjacent cells to increase capacity"],
                ["Handoff (Handover)", "The process of transferring an active call from one cell to another as the user moves"],
                ["Roaming", "Using a cellular network outside the home provider's coverage area"],
                ["Small Cells", "Low-power base stations (femtocells, picocells) for indoor/dense area coverage"],
            ]
        ),

        heading("5G Key Features"),

        table(
            ["Feature", "Specification", "Application"],
            [
                ["Enhanced Mobile Broadband (eMBB)", "Up to 20 Gbps", "4K/8K video, AR/VR"],
                ["Ultra-Reliable Low Latency (URLLC)", "< 1 ms latency", "Autonomous vehicles, remote surgery"],
                ["Massive Machine-Type Communication (mMTC)", "1 million devices/km²", "IoT, smart cities, sensors"],
                ["Frequency Bands", "Sub-6 GHz and mmWave (24-100 GHz)", "Coverage (sub-6) and speed (mmWave)"],
                ["Network Slicing", "Virtual networks on shared infrastructure", "Customised services per application"],
            ]
        ),

        note(
            "5G is not just about faster phones. Its three use cases (eMBB, URLLC, mMTC) are designed to transform industries: healthcare (remote surgery), transportation (autonomous vehicles), manufacturing (industrial IoT) and entertainment (immersive AR/VR).",
            "tip",
            "5G Vision"
        ),

        keyPoints([
            "Bluetooth is a short-range WPAN technology using frequency hopping in the 2.4 GHz band.",
            "A Bluetooth piconet has 1 master and up to 7 active slaves; multiple piconets form a scatternet.",
            "BLE (Bluetooth Low Energy) enables IoT devices to run for years on a coin cell battery.",
            "Cellular networks divide coverage into cells with frequency reuse to serve millions of users.",
            "5G offers three key capabilities: eMBB (speed), URLLC (low latency) and mMTC (massive IoT).",
        ]),
    ],

    {
        summary:
            "Learn Bluetooth architecture (piconet, scatternet, FHSS), BLE, cellular network generations and architecture, and 5G features.",
        minutes: 12,
        tags: ["networks", "bluetooth", "cellular", "5g", "lte", "important"],

        mcqs: [
            mcq(
                "A Bluetooth piconet can have up to how many active devices?",
                ["4", "8", "16", "32"],
                1,
                "A piconet has 1 master and up to 7 active slaves, for a total of 8 active devices."
            ),
            mcq(
                "Bluetooth uses which spread spectrum technique?",
                ["DSSS", "FHSS", "OFDM", "CDMA"],
                1,
                "Bluetooth uses Frequency Hopping Spread Spectrum (FHSS), hopping among 79 channels at 1600 hops/second."
            ),
            mcq(
                "Bluetooth Low Energy (BLE) was introduced in Bluetooth version:",
                ["2.0", "3.0", "4.0", "5.0"],
                2,
                "BLE was introduced in Bluetooth 4.0 in 2010, designed for low-power IoT applications."
            ),
            mcq(
                "The process of transferring a call from one cell to another is called:",
                ["Roaming", "Handoff (Handover)", "Frequency reuse", "Cell splitting"],
                1,
                "Handoff (or handover) transfers an active call to a new base station as the user moves between cells."
            ),
            mcq(
                "5G URLLC targets a latency of:",
                ["100 ms", "10 ms", "Less than 1 ms", "1 second"],
                2,
                "Ultra-Reliable Low Latency Communication (URLLC) targets less than 1 ms latency for applications like remote surgery."
            ),
            mcq(
                "4G LTE uses which multiple access technique?",
                ["TDMA", "CDMA", "OFDMA", "FDMA"],
                2,
                "4G LTE uses OFDMA (Orthogonal Frequency Division Multiple Access) for the downlink."
            ),
        ],

        questions: [
            qa(
                "Explain Bluetooth architecture including piconet and scatternet.",
                "Bluetooth networks are organised into piconets, each consisting of one master device and up to seven active slave devices. The master controls the piconet by determining the frequency hopping sequence and timing. All slaves synchronise to the master's clock. Bluetooth uses Frequency Hopping Spread Spectrum (FHSS), hopping among 79 channels in the 2.4 GHz band at a rate of 1600 hops per second, which provides resistance to interference. A scatternet is formed when multiple piconets are interconnected. A device can participate in multiple piconets simultaneously — it can be a slave in one piconet and a master in another, or a slave in multiple piconets. This allows Bluetooth networks to extend beyond the 8-device limit of a single piconet.",
                5
            ),
            qa(
                "Explain the concept of cellular networks and frequency reuse.",
                "A cellular network divides a geographical area into small regions called cells, each served by a base station (cell tower). The key innovation is frequency reuse: the same set of frequencies can be used in multiple cells as long as those cells are not adjacent, because the signal attenuates with distance and does not cause significant interference in distant cells. This allows the network to serve millions of users with a limited frequency spectrum. As a mobile user moves from one cell to another, the network performs a handoff (handover), seamlessly transferring the active call or data session to the new cell's base station. The cellular architecture includes base stations, base station controllers, mobile switching centres and the core network that connects to the Internet and telephone network.",
                5
            ),
            qa(
                "Explain the three key use cases of 5G.",
                "5G is designed around three key use cases. Enhanced Mobile Broadband (eMBB) provides peak data rates up to 20 Gbps for applications like 4K/8K video streaming, augmented reality and virtual reality, offering dramatically faster mobile Internet than 4G. Ultra-Reliable Low Latency Communication (URLLC) targets latencies below 1 millisecond with 99.999% reliability, enabling mission-critical applications like autonomous vehicle coordination, remote robotic surgery and industrial automation where even small delays can be dangerous. Massive Machine-Type Communication (mMTC) supports up to 1 million connected devices per square kilometre, enabling large-scale IoT deployments such as smart city sensors, agricultural monitoring, asset tracking and environmental sensing where devices transmit small amounts of data infrequently.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — Network Security Fundamentals and Cryptography
========================================================= */

const networkSecurityAndCryptography = createTopic(
    "network-security-fundamentals-and-cryptography",
    "Network Security Fundamentals and Cryptography",

    [
        definition(
            "Network Security",
            "The practice of protecting computer networks and their data from unauthorised access, misuse, modification, disruption or destruction. It encompasses policies, technologies and practices designed to secure network infrastructure and data in transit."
        ),

        heading("Security Goals (CIA Triad + More)"),

        table(
            ["Goal", "Definition", "Threat if Violated"],
            [
                ["Confidentiality", "Data is accessible only to authorised parties", "Eavesdropping, data breaches"],
                ["Integrity", "Data is not altered by unauthorised parties", "Tampering, data corruption"],
                ["Availability", "Data and services are accessible when needed", "Denial of Service (DoS) attacks"],
                ["Authentication", "Verifying the identity of users and systems", "Impersonation, spoofing"],
                ["Non-Repudiation", "A sender cannot deny having sent a message", "Sender denies sending a message"],
                ["Access Control", "Restricting access to resources based on policies", "Unauthorised access"],
            ]
        ),

        heading("Types of Network Attacks"),

        table(
            ["Attack Type", "Description", "Example"],
            [
                ["Passive Attack", "Attacker observes/intercepts data without modifying it", "Eavesdropping, traffic analysis"],
                ["Active Attack", "Attacker modifies, injects or disrupts data", "Man-in-the-middle, spoofing, DoS"],
                ["DoS (Denial of Service)", "Overwhelms a system with traffic to make it unavailable", "SYN flood, UDP flood"],
                ["DDoS", "DoS from many distributed sources", "Botnet attacks"],
                ["Man-in-the-Middle (MITM)", "Attacker intercepts and relays communication between two parties", "Wi-Fi eavesdropping, ARP spoofing"],
                ["Phishing", "Tricking users into revealing credentials via fake websites/emails", "Fake login pages"],
                ["Malware", "Malicious software (viruses, worms, trojans, ransomware)", "WannaCry ransomware"],
                ["SQL Injection", "Injecting malicious SQL code through input fields", "Database data theft"],
            ]
        ),

        heading("Cryptography"),

        definition(
            "Cryptography",
            "The science of securing communication by transforming readable data (plaintext) into an unreadable form (ciphertext) using mathematical algorithms and keys, and reversing the process for authorised recipients."
        ),

        heading("Types of Cryptography"),

        table(
            ["Type", "Keys", "Speed", "Use Case", "Examples"],
            [
                ["Symmetric (Secret Key)", "Same key for encryption and decryption", "Fast", "Bulk data encryption", "AES, DES, 3DES, RC4"],
                ["Asymmetric (Public Key)", "Different keys: public key (encrypt) and private key (decrypt)", "Slow", "Key exchange, digital signatures", "RSA, ECC, Diffie-Hellman"],
                ["Hash Functions", "No key (one-way function)", "Fast", "Data integrity, passwords", "SHA-256, SHA-3, MD5"],
            ]
        ),

        heading("Symmetric Encryption"),

        code(
            `Symmetric Encryption:

  Sender                              Receiver
  Plaintext → [Encrypt with Key K] → Ciphertext → [Decrypt with Key K] → Plaintext

  Same key K is used for both encryption and decryption.
  Challenge: How to securely share key K?

  AES (Advanced Encryption Standard):
  - Block cipher with 128-bit blocks
  - Key sizes: 128, 192 or 256 bits
  - Used in: Wi-Fi (WPA2/3), TLS, file encryption, VPNs
  - Considered secure and is the global standard`,
            "text",
            "Symmetric encryption"
        ),

        heading("Asymmetric Encryption"),

        code(
            `Asymmetric Encryption (Public Key Cryptography):

  Each user has a key pair:
  - Public Key: Shared with everyone (used to encrypt)
  - Private Key: Kept secret (used to decrypt)

  Confidentiality:
  Sender encrypts with Receiver's PUBLIC key
  → Only Receiver can decrypt with their PRIVATE key

  Digital Signature:
  Sender signs with their own PRIVATE key
  → Anyone can verify with Sender's PUBLIC key

  RSA Algorithm:
  - Based on the difficulty of factoring large prime numbers
  - Key sizes: 2048 or 4096 bits (recommended)
  - Used in: TLS/SSL, digital certificates, PGP`,
            "text",
            "Asymmetric encryption"
        ),

        heading("Hash Functions"),

        definition(
            "Hash Function",
            "A one-way mathematical function that takes input of any size and produces a fixed-size output (hash/digest). It is computationally infeasible to reverse (find the input from the hash) or find two different inputs with the same hash (collision)."
        ),

        table(
            ["Algorithm", "Output Size", "Status"],
            [
                ["MD5", "128 bits", "Broken — do not use for security"],
                ["SHA-1", "160 bits", "Deprecated — collisions found"],
                ["SHA-256", "256 bits", "Secure and widely used"],
                ["SHA-3", "224/256/384/512 bits", "Latest standard, secure"],
            ]
        ),

        heading("Digital Signatures"),

        code(
            `Digital Signature Process:

  Signing (Sender):
  1. Hash the message → digest
  2. Encrypt the digest with sender's PRIVATE key → signature
  3. Send message + signature

  Verification (Receiver):
  1. Hash the received message → digest1
  2. Decrypt the signature with sender's PUBLIC key → digest2
  3. If digest1 == digest2 → signature is valid

  Provides: Authentication, Integrity, Non-Repudiation`,
            "text",
            "Digital signature process"
        ),

        heading("Digital Certificates and PKI"),

        definition(
            "Digital Certificate",
            "An electronic document issued by a trusted Certificate Authority (CA) that binds a public key to an identity (person, organisation or website). It follows the X.509 standard."
        ),

        definition(
            "PKI (Public Key Infrastructure)",
            "A framework of hardware, software, policies and procedures for creating, managing, distributing, using, storing and revoking digital certificates and public keys."
        ),

        note(
            "When you visit an HTTPS website, your browser checks the site's digital certificate to verify that the public key belongs to the legitimate website and was issued by a trusted CA. This prevents man-in-the-middle attacks.",
            "exam",
            "Frequently Asked"
        ),

        keyPoints([
            "Security goals include confidentiality, integrity, availability, authentication and non-repudiation.",
            "Symmetric encryption uses one shared key (fast, e.g., AES); asymmetric uses a key pair (slower, e.g., RSA).",
            "Hash functions produce fixed-size digests for integrity verification (e.g., SHA-256).",
            "Digital signatures provide authentication, integrity and non-repudiation using asymmetric cryptography.",
            "Digital certificates bind public keys to identities, issued by trusted Certificate Authorities (CAs).",
        ]),
    ],

    {
        summary:
            "Learn network security goals, attack types, symmetric and asymmetric encryption, hash functions, digital signatures and PKI.",
        minutes: 14,
        tags: ["networks", "security", "cryptography", "encryption", "rsa", "aes", "important"],

        mcqs: [
            mcq(
                "The CIA triad stands for:",
                ["Control, Integrity, Authentication", "Confidentiality, Integrity, Availability", "Confidentiality, Identity, Access", "Control, Identity, Authentication"],
                1,
                "The CIA triad consists of Confidentiality, Integrity and Availability."
            ),
            mcq(
                "AES is an example of:",
                ["Asymmetric encryption", "Symmetric encryption", "Hash function", "Digital signature"],
                1,
                "AES (Advanced Encryption Standard) is a symmetric encryption algorithm."
            ),
            mcq(
                "In asymmetric encryption, the public key is used to:",
                ["Decrypt messages", "Encrypt messages", "Sign messages", "Hash messages"],
                1,
                "The public key encrypts messages that only the corresponding private key can decrypt."
            ),
            mcq(
                "A digital signature provides:",
                ["Confidentiality only", "Authentication, integrity and non-repudiation", "Availability", "Encryption"],
                1,
                "Digital signatures verify the sender's identity (authentication), ensure data wasn't altered (integrity) and prevent denial (non-repudiation)."
            ),
            mcq(
                "SHA-256 produces a hash of:",
                ["128 bits", "160 bits", "256 bits", "512 bits"],
                2,
                "SHA-256 produces a 256-bit (32-byte) hash digest."
            ),
            mcq(
                "A man-in-the-middle attack is a type of:",
                ["Passive attack", "Active attack", "Hash collision", "Brute force attack"],
                1,
                "MITM is an active attack where the attacker intercepts and potentially modifies communication."
            ),
        ],

        questions: [
            qa(
                "Explain the CIA triad and two additional security goals.",
                "The CIA triad consists of three fundamental security goals. Confidentiality ensures that data is accessible only to authorised parties, preventing eavesdropping and data breaches through encryption and access controls. Integrity ensures that data is not altered by unauthorised parties, preventing tampering through hash functions and digital signatures. Availability ensures that data and services are accessible when needed, preventing denial of service attacks through redundancy and load balancing. Two additional goals are authentication, which verifies the identity of users and systems through passwords, biometrics or digital certificates, preventing impersonation and spoofing. Non-repudiation ensures that a sender cannot deny having sent a message, achieved through digital signatures that provide cryptographic proof of the sender's identity and the message's integrity.",
                5
            ),
            qa(
                "Compare symmetric and asymmetric encryption.",
                "Symmetric encryption uses the same secret key for both encryption and decryption. It is fast and efficient for encrypting large amounts of data. Examples include AES, DES and 3DES. The main challenge is securely distributing the shared key to both parties without it being intercepted. Asymmetric encryption uses a pair of mathematically related keys: a public key (shared openly) for encryption and a private key (kept secret) for decryption. It is much slower than symmetric encryption due to complex mathematical operations. Examples include RSA and ECC. It solves the key distribution problem because the public key can be shared openly. In practice, both are used together: asymmetric encryption securely exchanges a symmetric session key, and then symmetric encryption handles the bulk data transfer. This hybrid approach is used in TLS/SSL.",
                5
            ),
            qa(
                "Explain how digital signatures work and what security properties they provide.",
                "A digital signature works in two phases. In the signing phase, the sender first hashes the message using a hash function like SHA-256 to produce a fixed-size digest. The sender then encrypts this digest with their own private key to create the digital signature. The message and signature are sent together. In the verification phase, the receiver independently hashes the received message to produce digest1. The receiver then decrypts the signature using the sender's public key to recover digest2. If digest1 equals digest2, the signature is valid. Digital signatures provide three security properties: authentication (only the holder of the private key could have created the signature, proving the sender's identity), integrity (any modification to the message would change the hash, causing verification to fail), and non-repudiation (the sender cannot deny having signed the message because only their private key could have produced the signature).",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 5 — Firewalls, SSL/TLS and Security Protocols
========================================================= */

const firewallsAndSecurityProtocols = createTopic(
    "firewalls-ssl-tls-and-security-protocols",
    "Firewalls, SSL/TLS and Security Protocols",

    [
        definition(
            "Firewall",
            "A network security device or software that monitors and controls incoming and outgoing network traffic based on predetermined security rules. It acts as a barrier between a trusted internal network and untrusted external networks (like the Internet)."
        ),

        heading("Types of Firewalls"),

        table(
            ["Type", "OSI Layer", "How It Works", "Advantage", "Disadvantage"],
            [
                ["Packet Filtering", "Layer 3-4", "Examines IP addresses, ports and protocols in packet headers", "Fast, simple, low cost", "Cannot inspect payload; vulnerable to spoofing"],
                ["Stateful Inspection", "Layer 3-4", "Tracks the state of active connections and makes decisions based on context", "More secure than packet filtering", "Higher resource usage"],
                ["Application-Level Gateway (Proxy)", "Layer 7", "Acts as an intermediary; inspects application-layer data", "Deep inspection, hides internal IPs", "Slow, high overhead"],
                ["Next-Generation Firewall (NGFW)", "Layer 3-7", "Combines traditional firewall with IPS, deep packet inspection, application awareness", "Comprehensive security", "Expensive, complex"],
            ]
        ),

        code(
            `Firewall Placement:

  Internet (Untrusted)
       │
  ┌────┴────┐
  │ Firewall│  ← Enforces security policies
  └────┬────┘
       │
  ┌────┴────────────────┐
  │  Internal Network   │  ← Trusted
  │  (LAN / Servers)    │
  └─────────────────────┘

  Firewall Rules Example:
  Rule 1: ALLOW TCP port 80 (HTTP) from any → Web Server
  Rule 2: ALLOW TCP port 443 (HTTPS) from any → Web Server
  Rule 3: ALLOW TCP port 22 (SSH) from 192.168.1.0/24 → Admin Server
  Rule 4: DENY ALL other traffic`,
            "text",
            "Firewall placement and rules"
        ),

        heading("Firewall Rule Processing"),

        text(
            "Firewall rules are processed in order from top to bottom. The first matching rule is applied. A default deny rule at the end blocks everything not explicitly allowed. This follows the principle of least privilege: only allow what is necessary and deny everything else."
        ),

        heading("SSL/TLS (Secure Sockets Layer / Transport Layer Security)"),

        definition(
            "SSL/TLS",
            "A cryptographic protocol that provides secure communication over a computer network. TLS is the successor to SSL and is used to secure web traffic (HTTPS), email, messaging and other applications. It provides encryption, authentication and data integrity."
        ),

        table(
            ["Version", "Year", "Status"],
            [
                ["SSL 2.0", "1995", "Deprecated (insecure)"],
                ["SSL 3.0", "1996", "Deprecated (POODLE vulnerability)"],
                ["TLS 1.0", "1999", "Deprecated"],
                ["TLS 1.1", "2006", "Deprecated"],
                ["TLS 1.2", "2008", "Widely used, secure"],
                ["TLS 1.3", "2018", "Latest, fastest, most secure"],
            ]
        ),

        heading("TLS Handshake (Simplified)"),

        code(
            `TLS 1.2 Handshake:

  Client                                    Server
    │                                         │
    │── ClientHello ──────────────────────────→ │  (Supported ciphers, random)
    │                                         │
    │←─ ServerHello ────────────────────────── │  (Chosen cipher, random)
    │←─ Certificate ────────────────────────── │  (Server's digital certificate)
    │←─ ServerKeyExchange ──────────────────── │  (Key exchange parameters)
    │←─ ServerHelloDone ────────────────────── │
    │                                         │
    │── ClientKeyExchange ────────────────────→ │  (Encrypted premaster secret)
    │── ChangeCipherSpec ─────────────────────→ │
    │── Finished ─────────────────────────────→ │
    │                                         │
    │←─ ChangeCipherSpec ───────────────────── │
    │←─ Finished ───────────────────────────── │
    │                                         │
    │═══ Encrypted Application Data ═══════════│

  Result: A shared symmetric session key is established.
  All subsequent data is encrypted with this key.`,
            "text",
            "TLS handshake"
        ),

        heading("What TLS Provides"),

        table(
            ["Property", "How TLS Achieves It"],
            [
                ["Confidentiality", "Symmetric encryption (AES) using a session key established during handshake"],
                ["Authentication", "Server presents a digital certificate verified by a trusted CA"],
                ["Integrity", "Message Authentication Codes (MACs) detect tampering"],
                ["Forward Secrecy", "Ephemeral key exchange (DHE/ECDHE) ensures past sessions cannot be decrypted even if the private key is later compromised"],
            ]
        ),

        heading("Other Security Protocols"),

        table(
            ["Protocol", "Purpose", "Layer"],
            [
                ["IPSec", "Secures IP communications (VPN); provides encryption and authentication at the Network layer", "Layer 3"],
                ["SSH (Secure Shell)", "Secure remote login and command execution; replaces Telnet", "Application"],
                ["S/MIME", "Secures email with encryption and digital signatures", "Application"],
                ["PGP/GPG", "Email and file encryption using a web of trust model", "Application"],
                ["WPA2/WPA3", "Wi-Fi security protocols; WPA3 uses SAE for stronger authentication", "Data Link"],
                ["802.1X", "Port-based network access control; authenticates devices before granting network access", "Data Link"],
            ]
        ),

        heading("IPSec Architecture"),

        table(
            ["Component", "Purpose"],
            [
                ["AH (Authentication Header)", "Provides data integrity and authentication (no encryption)"],
                ["ESP (Encapsulating Security Payload)", "Provides encryption, integrity and authentication"],
                ["IKE (Internet Key Exchange)", "Negotiates security associations and exchanges keys"],
                ["Transport Mode", "Encrypts only the payload (end-to-end between hosts)"],
                ["Tunnel Mode", "Encrypts the entire IP packet (used in VPNs between gateways)"],
            ]
        ),

        heading("Intrusion Detection and Prevention Systems"),

        table(
            ["System", "Function"],
            [
                ["IDS (Intrusion Detection System)", "Monitors network traffic and alerts on suspicious activity (passive)"],
                ["IPS (Intrusion Prevention System)", "Monitors and actively blocks detected threats (active)"],
                ["SIEM", "Security Information and Event Management — aggregates and correlates logs from multiple sources"],
            ]
        ),

        note(
            "TLS 1.3 significantly improved security and performance by reducing the handshake from 2 round trips to 1, removing support for weak ciphers, and making forward secrecy mandatory. All modern web browsers require TLS 1.2 or 1.3.",
            "exam",
            "Frequently Asked"
        ),

        keyPoints([
            "Firewalls filter traffic based on rules; types include packet filtering, stateful, proxy and NGFW.",
            "TLS secures web traffic (HTTPS) with encryption, authentication and integrity via a handshake.",
            "The TLS handshake establishes a shared symmetric session key using asymmetric key exchange.",
            "IPSec secures IP communications at Layer 3 and is widely used for VPNs.",
            "IDS detects threats passively; IPS actively blocks them; WPA3 secures Wi-Fi networks.",
        ]),
    ],

    {
        summary:
            "Master firewalls (types and rules), SSL/TLS handshake and security properties, IPSec, and other security protocols.",
        minutes: 13,
        tags: ["networks", "firewall", "tls", "ssl", "ipsec", "security", "important"],

        mcqs: [
            mcq(
                "A stateful firewall differs from a packet filtering firewall by:",
                ["Operating at Layer 7", "Tracking the state of active connections", "Being slower than a proxy", "Not using rules"],
                1,
                "A stateful firewall tracks connection state and makes decisions based on context, not just individual packet headers."
            ),
            mcq(
                "TLS is the successor to:",
                ["IPSec", "SSH", "SSL", "WPA"],
                2,
                "TLS (Transport Layer Security) is the successor to SSL (Secure Sockets Layer)."
            ),
            mcq(
                "The TLS handshake establishes:",
                ["A MAC address", "A shared symmetric session key", "A routing table", "A DNS record"],
                1,
                "The TLS handshake uses asymmetric cryptography to securely establish a shared symmetric session key."
            ),
            mcq(
                "IPSec operates at which OSI layer?",
                ["Layer 2", "Layer 3", "Layer 4", "Layer 7"],
                1,
                "IPSec operates at the Network layer (Layer 3), securing IP packets."
            ),
            mcq(
                "WPA3 improves Wi-Fi security by using:",
                ["WEP encryption", "SAE (Simultaneous Authentication of Equals)", "No encryption", "MD5 hashing"],
                1,
                "WPA3 uses SAE for stronger password-based authentication, resistant to offline dictionary attacks."
            ),
            mcq(
                "An IDS (Intrusion Detection System) is:",
                ["Active — it blocks threats", "Passive — it monitors and alerts", "A type of firewall", "An encryption protocol"],
                1,
                "An IDS passively monitors network traffic and generates alerts when suspicious activity is detected."
            ),
        ],

        questions: [
            qa(
                "Explain the different types of firewalls.",
                "A packet filtering firewall operates at Layers 3-4 and examines IP addresses, ports and protocols in packet headers against a set of rules. It is fast and simple but cannot inspect packet payloads and is vulnerable to IP spoofing. A stateful inspection firewall also operates at Layers 3-4 but tracks the state of active connections, understanding whether a packet is part of an established session or a new connection attempt, providing better security than simple packet filtering. An application-level gateway (proxy firewall) operates at Layer 7, acting as an intermediary between clients and servers. It inspects application-layer data, can filter content and hides internal IP addresses, but introduces significant latency and overhead. A Next-Generation Firewall (NGFW) combines traditional firewall capabilities with intrusion prevention, deep packet inspection, application awareness and identity-based policies, providing comprehensive security at Layers 3-7.",
                5
            ),
            qa(
                "Explain the TLS handshake and what security properties TLS provides.",
                "The TLS handshake establishes a secure connection between a client and server. The client sends a ClientHello with supported cipher suites and a random value. The server responds with ServerHello choosing a cipher, sends its digital certificate for authentication, and key exchange parameters. The client verifies the certificate with a trusted CA, generates a premaster secret, encrypts it with the server's public key and sends it. Both sides derive the same symmetric session key from the exchanged random values and premaster secret. They exchange Finished messages to confirm the handshake. All subsequent data is encrypted with this session key. TLS provides confidentiality through symmetric encryption (AES), authentication through digital certificates verified by CAs, integrity through Message Authentication Codes (MACs), and forward secrecy through ephemeral key exchange ensuring past sessions remain secure even if the private key is later compromised.",
                5
            ),
            qa(
                "Explain IPSec and its components.",
                "IPSec (Internet Protocol Security) is a suite of protocols that secures IP communications at the Network layer (Layer 3). It is widely used for Virtual Private Networks (VPNs). IPSec has three main components. The Authentication Header (AH) provides data integrity and authentication by adding a header with a hash-based message authentication code, but does not encrypt the data. The Encapsulating Security Payload (ESP) provides encryption, integrity and authentication, making it the more commonly used component. The Internet Key Exchange (IKE) protocol negotiates security associations and securely exchanges encryption keys between the communicating parties. IPSec operates in two modes: transport mode encrypts only the payload of the IP packet and is used for end-to-end communication between hosts, while tunnel mode encrypts the entire original IP packet and wraps it in a new IP header, used primarily for VPNs between security gateways.",
                5
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit4Topics = [
    introToWirelessCommunication,
    wirelessLAN,
    bluetoothAndCellular,
    networkSecurityAndCryptography,
    firewallsAndSecurityProtocols,
];