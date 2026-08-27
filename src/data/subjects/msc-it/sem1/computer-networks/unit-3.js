/* =========================================================
   MSc-IT • SEM 1 • Computer Networks
   UNIT 3 — Routing, Congestion Control and Internetworking
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
   TOPIC 1 — Introduction to Routing
========================================================= */

const introToRouting = createTopic(
    "introduction-to-routing",
    "Introduction to Routing",

    [
        definition(
            "Routing",
            "The process of determining the best path for data packets to travel from a source to a destination across an interconnected network. Routing is performed by routers at the Network layer (Layer 3) of the OSI model."
        ),

        text(
            "In a large network like the Internet, there are often multiple possible paths between any two hosts. Routing algorithms and protocols work together to determine the optimal path based on metrics such as hop count, bandwidth, delay, cost or reliability. The router maintains a routing table that maps destination networks to the best next-hop router or interface."
        ),

        heading("Key Routing Concepts"),

        table(
            ["Concept", "Definition"],
            [
                ["Routing Table", "A data structure in a router that maps destination networks to next-hop addresses and outgoing interfaces"],
                ["Next Hop", "The IP address of the next router to which a packet should be forwarded"],
                ["Metric", "A numerical value used to compare routes; lower is usually better (e.g., hop count, cost, delay)"],
                ["Default Route", "A catch-all route (0.0.0.0/0) used when no specific route matches the destination"],
                ["Static Route", "A route manually configured by a network administrator"],
                ["Dynamic Route", "A route learned automatically through a routing protocol"],
                ["Convergence", "The time it takes for all routers to agree on the best paths after a topology change"],
                ["Administrative Distance", "A value indicating the trustworthiness of a routing source; lower is more trusted"],
            ]
        ),

        heading("Routing Table Example"),

        code(
            `Routing Table of Router R1:

  Destination Network   Next Hop      Interface   Metric   Source
  ───────────────────   ──────────    ─────────   ──────   ──────
  192.168.1.0/24        Directly      eth0        0        Connected
  192.168.2.0/24        10.0.0.2      eth1        1        OSPF
  192.168.3.0/24        10.0.0.3      eth1        2        OSPF
  10.0.0.0/8            Directly      eth1        0        Connected
  0.0.0.0/0             10.0.0.1      eth1        0        Static (default)

  When a packet arrives for 192.168.2.55:
  → Matches 192.168.2.0/24
  → Forward to next hop 10.0.0.2 via interface eth1`,
            "text",
            "Routing table example"
        ),

        heading("Static versus Dynamic Routing"),

        table(
            ["Aspect", "Static Routing", "Dynamic Routing"],
            [
                ["Configuration", "Manually configured by administrator", "Automatically learned via routing protocols"],
                ["Adaptability", "Does not adapt to topology changes", "Automatically adapts to changes"],
                ["Overhead", "No protocol overhead", "Consumes bandwidth and CPU for protocol messages"],
                ["Scalability", "Poor — impractical for large networks", "Excellent — designed for large networks"],
                ["Security", "More secure (no protocol messages to intercept)", "Less secure (protocol messages can be spoofed)"],
                ["Convergence", "Not applicable (manual updates)", "Automatic but takes time"],
                ["Use case", "Small networks, stub networks, default routes", "Medium to large networks, the Internet"],
            ]
        ),

        heading("Types of Routing"),

        table(
            ["Type", "Description", "Examples"],
            [
                ["Unicast Routing", "One-to-one communication; packet sent to a single destination", "Normal web browsing, email"],
                ["Multicast Routing", "One-to-many communication; packet sent to a group of interested receivers", "Video streaming, IPTV"],
                ["Broadcast Routing", "One-to-all communication; packet sent to all nodes in a network", "ARP requests, DHCP discover"],
                ["Anycast Routing", "One-to-nearest; packet sent to the nearest member of a group", "DNS root servers, CDN"],
            ]
        ),

        heading("Requirements of a Good Routing Algorithm"),

        list([
            "Correctness — must deliver packets to the correct destination.",
            "Simplicity — should be easy to implement and maintain.",
            "Robustness — must handle hardware failures, topology changes and traffic surges.",
            "Stability — should converge to a stable state and not oscillate.",
            "Fairness — should treat all sources and destinations equitably.",
            "Optimality — should choose the best path according to the chosen metric.",
            "Efficiency — should minimise overhead in terms of bandwidth, CPU and memory.",
        ]),

        heading("Classification of Routing Algorithms"),

        code(
            `Routing Algorithms
  ├── Static (Non-Adaptive)
  │   └── Routes are pre-computed and do not change
  │
  └── Dynamic (Adaptive)
      ├── Distance Vector
      │   └── RIP, IGRP, EIGRP
      ├── Link State
      │   └── OSPF, IS-IS
      └── Path Vector
          └── BGP`,
            "text",
            "Classification of routing algorithms"
        ),

        note(
            "The Internet uses a hierarchical routing architecture. Within an autonomous system (AS), Interior Gateway Protocols (IGPs) like OSPF and RIP are used. Between autonomous systems, the Exterior Gateway Protocol BGP is used. This hierarchy is essential for the Internet's scalability.",
            "exam",
            "Frequently Asked"
        ),

        keyPoints([
            "Routing determines the best path for packets from source to destination across a network.",
            "A routing table maps destination networks to next-hop addresses and outgoing interfaces.",
            "Static routes are manually configured; dynamic routes are learned through routing protocols.",
            "Good routing algorithms must be correct, robust, stable, fair, optimal and efficient.",
            "Dynamic routing algorithms are classified as Distance Vector, Link State or Path Vector.",
        ]),
    ],

    {
        summary:
            "Understand routing fundamentals, routing tables, static vs dynamic routing, types of routing and classification of routing algorithms.",
        minutes: 12,
        tags: ["networks", "routing", "routing-table", "static", "dynamic", "important"],

        mcqs: [
            mcq(
                "Routing is performed at which OSI layer?",
                ["Layer 1", "Layer 2", "Layer 3", "Layer 4"],
                2,
                "Routing is performed at the Network layer (Layer 3) by routers."
            ),
            mcq(
                "The next hop in a routing table refers to:",
                ["The final destination", "The next router to forward the packet to", "The source address", "The MAC address"],
                1,
                "The next hop is the IP address of the next router along the path to the destination."
            ),
            mcq(
                "A default route is represented as:",
                ["255.255.255.255", "127.0.0.1", "0.0.0.0/0", "192.168.0.0/16"],
                2,
                "The default route 0.0.0.0/0 matches any destination when no specific route exists."
            ),
            mcq(
                "Which is an advantage of dynamic routing over static routing?",
                ["No protocol overhead", "More secure", "Automatically adapts to topology changes", "Simpler to configure"],
                2,
                "Dynamic routing automatically adapts to network topology changes without manual intervention."
            ),
            mcq(
                "BGP is an example of which type of routing algorithm?",
                ["Distance Vector", "Link State", "Path Vector", "Static"],
                2,
                "BGP (Border Gateway Protocol) is a Path Vector routing protocol used between autonomous systems."
            ),
        ],

        questions: [
            qa(
                "What is a routing table? Explain its contents with an example.",
                "A routing table is a data structure maintained by a router that maps destination networks to the best next-hop address and outgoing interface. Each entry typically contains the destination network address with its subnet mask (e.g., 192.168.2.0/24), the next-hop IP address (the next router to forward to, e.g., 10.0.0.2), the outgoing interface (e.g., eth1), the metric (a cost value where lower is better, e.g., 2), and the source of the route (how it was learned, e.g., OSPF, static or connected). When a packet arrives, the router performs a longest-prefix match against the routing table to find the most specific matching entry and forwards the packet accordingly. A default route (0.0.0.0/0) acts as a catch-all for destinations with no specific match.",
                5
            ),
            qa(
                "Compare static and dynamic routing.",
                "Static routing involves manually configuring routes by a network administrator. It has no protocol overhead, is more secure since no routing messages are exchanged, and is predictable. However, it does not adapt to topology changes, is impractical for large networks and requires manual updates when the network changes. Dynamic routing uses routing protocols like OSPF or RIP to automatically learn and update routes. It adapts automatically to topology changes, scales well to large networks and reduces administrative burden. However, it consumes bandwidth and CPU for protocol messages, is less secure since protocol messages can be spoofed, and requires time to converge after changes. Static routing is best for small networks and default routes, while dynamic routing is essential for medium to large networks and the Internet.",
                5
            ),
            qa(
                "What are the requirements of a good routing algorithm?",
                "A good routing algorithm must satisfy several requirements. Correctness means it must deliver packets to the correct destination without errors. Simplicity means it should be easy to implement, understand and maintain. Robustness means it must handle hardware failures, topology changes and traffic surges gracefully without crashing. Stability means it should converge to a consistent state and not oscillate between different paths. Fairness means it should treat all sources and destinations equitably without starving any node. Optimality means it should choose the best path according to the chosen metric such as shortest path or lowest cost. Efficiency means it should minimise overhead in terms of bandwidth consumption, CPU usage and memory requirements. These requirements often conflict, and routing algorithm design involves trade-offs between them.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — Distance Vector Routing
========================================================= */

const distanceVectorRouting = createTopic(
    "distance-vector-routing",
    "Distance Vector Routing",

    [
        definition(
            "Distance Vector Routing",
            "A dynamic routing algorithm where each router maintains a table (vector) of the shortest distance to every destination and the next hop to reach it. Routers periodically share their entire routing table with their immediate neighbours. Based on the Bellman-Ford algorithm."
        ),

        text(
            "In distance vector routing, each router knows only the distance (metric) and direction (next hop) to each destination. It does not know the complete path or the network topology. Routers learn about distant networks indirectly through their neighbours' advertisements, which is why it is sometimes called 'routing by rumour'."
        ),

        heading("How Distance Vector Works"),

        steps([
            "Each router initialises its routing table with directly connected networks (distance = 0 or 1).",
            "Periodically (e.g., every 30 seconds in RIP), each router sends its entire routing table to all its immediate neighbours.",
            "When a router receives a neighbour's table, it updates its own table using the Bellman-Ford equation: D(x,y) = min over all neighbours v of [c(x,v) + D(v,y)], where c(x,v) is the cost to neighbour v and D(v,y) is the neighbour's distance to destination y.",
            "If a shorter path is discovered, the routing table is updated with the new distance and next hop.",
            "Steps 2-4 repeat until all routers converge (no more updates).",
        ]),

        heading("Bellman-Ford Equation"),

        definition(
            "Bellman-Ford Equation",
            "The mathematical foundation of distance vector routing: Dₓ(y) = minᵥ { c(x,v) + Dᵥ(y) }, meaning the shortest distance from node x to destination y is the minimum over all neighbours v of the cost to reach v plus v's distance to y."
        ),

        heading("Example: Distance Vector Convergence"),

        code(
            `Network: A ——— B ——— C
         (1)     (2)
  Cost: A-B = 1, B-C = 2

  Initial Tables:
  ┌───┬───┬───┬───┐   ┌───┬───┬───┬───┐   ┌───┬───┬───┬───┐
  │ A │Dst│Dst│Nxt│   │ B │Dst│Dst│Nxt│   │ C │Dst│Dst│Nxt│
  ├───┼───┼───┼───┤   ├───┼───┼───┼───┤   ├───┼───┼───┼───┤
  │ A │ 0 │ — │ A │   │ A │ 1 │ A │ A │   │ A │ ∞ │ — │ — │
  │ B │ 1 │ B │ B │   │ B │ 0 │ — │ B │   │ B │ 2 │ B │ B │
  │ C │ ∞ │ — │ — │   │ C │ 2 │ C │ C │   │ C │ 0 │ — │ C │
  └───┴───┴───┴───┘   └───┴───┴───┴───┘   └───┴───┴───┴───┘

  After A and B exchange tables:
  A learns: to reach C via B = cost(A,B) + B's cost to C = 1 + 2 = 3
  A updates: C → distance 3, next hop B

  After B and C exchange tables:
  C learns: to reach A via B = cost(C,B) + B's cost to A = 2 + 1 = 3
  C updates: A → distance 3, next hop B

  Final Converged Tables:
  A: B=1(via B), C=3(via B)
  B: A=1(via A), C=2(via C)
  C: A=3(via B), B=2(via B)`,
            "text",
            "Distance vector convergence example"
        ),

        heading("The Count-to-Infinity Problem"),

        definition(
            "Count-to-Infinity Problem",
            "A fundamental problem in distance vector routing where routers slowly increment their distance to an unreachable destination towards infinity, causing routing loops and slow convergence when a link fails."
        ),

        code(
            `Scenario: A ——— B ——— C
  Link B-C breaks.

  B immediately sets cost to C = ∞.
  But before B can tell A, A sends its table saying "I can reach C in 3 hops via B."
  B thinks: "Oh, A can reach C in 3, so I can reach C via A in 3+1=4."
  B updates: C = 4 via A.
  A receives B's update: "B says C is 4, so I can reach C via B in 4+1=5."
  A updates: C = 5 via B.
  B receives: "A says C is 5, so I can reach C via A in 5+1=6."
  ... This continues until both reach ∞ (16 in RIP).

  This is a routing loop: A sends to B, B sends to A, neither can reach C.`,
            "text",
            "Count-to-infinity problem"
        ),

        heading("Solutions to Count-to-Infinity"),

        table(
            ["Solution", "How It Works", "Limitation"],
            [
                ["Split Horizon", "Do not advertise a route back to the neighbour from whom you learned it", "Does not solve all loop scenarios"],
                ["Split Horizon with Poison Reverse", "Advertise the route back with distance = ∞", "Increases routing table size"],
                ["Route Poisoning", "When a link fails, advertise the route with distance = ∞ immediately", "Generates extra traffic"],
                ["Triggered Updates", "Send updates immediately when a change occurs, don't wait for the timer", "Can cause update storms"],
                ["Maximum Hop Count", "Define a maximum distance (e.g., 16 in RIP = infinity)", "Limits network diameter"],
            ]
        ),

        heading("RIP (Routing Information Protocol)"),

        definition(
            "RIP",
            "A distance vector routing protocol that uses hop count as its metric. RIP version 1 (RIPv1) is classful; RIPv2 supports classless addressing (CIDR). Maximum hop count is 15; 16 means unreachable."
        ),

        table(
            ["Feature", "RIPv1", "RIPv2"],
            [
                ["Type", "Distance Vector", "Distance Vector"],
                ["Metric", "Hop count", "Hop count"],
                ["Max hops", "15", "15"],
                ["Classful/Classless", "Classful (no subnet mask)", "Classless (includes subnet mask)"],
                ["Authentication", "None", "MD5 authentication"],
                ["Updates", "Broadcast (255.255.255.255)", "Multicast (224.0.0.9)"],
                ["Update interval", "30 seconds", "30 seconds"],
            ]
        ),

        heading("Advantages and Disadvantages of Distance Vector"),

        table(
            ["Advantages", "Disadvantages"],
            [
                ["Simple to implement and configure", "Slow convergence"],
                ["Low memory requirements", "Count-to-infinity problem"],
                ["Less CPU intensive", "Routing loops possible"],
                ["Works well for small networks", "Sends entire table periodically (bandwidth waste)"],
                ["", "Does not know full topology ('routing by rumour')"],
            ]
        ),

        note(
            "RIP is rarely used in modern production networks due to its slow convergence and 15-hop limit. It has been largely replaced by OSPF (link state) for interior routing. However, RIP is still important to understand as the foundation of distance vector routing.",
            "tip",
            "Practical Note"
        ),

        keyPoints([
            "Distance vector routing uses the Bellman-Ford algorithm; each router shares its table with neighbours.",
            "Routers know only the distance and direction (next hop) to each destination, not the full path.",
            "The count-to-infinity problem causes slow convergence and routing loops when links fail.",
            "Split horizon, poison reverse and triggered updates help mitigate the count-to-infinity problem.",
            "RIP is a distance vector protocol with a maximum hop count of 15 and 30-second update intervals.",
        ]),
    ],

    {
        summary:
            "Master distance vector routing, the Bellman-Ford equation, count-to-infinity problem, solutions and the RIP protocol.",
        minutes: 13,
        tags: ["networks", "distance-vector", "bellman-ford", "rip", "count-to-infinity", "important"],

        mcqs: [
            mcq(
                "Distance vector routing is based on which algorithm?",
                ["Dijkstra's algorithm", "Bellman-Ford algorithm", "A* algorithm", "Floyd-Warshall algorithm"],
                1,
                "Distance vector routing is based on the Bellman-Ford algorithm."
            ),
            mcq(
                "In distance vector routing, each router shares its routing table with:",
                ["All routers in the network", "Only its immediate neighbours", "A central server", "Random routers"],
                1,
                "Each router periodically sends its entire routing table to its immediate neighbours only."
            ),
            mcq(
                "The count-to-infinity problem occurs when:",
                ["A new router is added", "A link fails and routers slowly increment distances", "The network converges", "A new route is discovered"],
                1,
                "Count-to-infinity occurs when a link fails and routers slowly increment the distance to the unreachable destination."
            ),
            mcq(
                "Split horizon prevents routing loops by:",
                ["Using a maximum hop count", "Not advertising a route back to the neighbour it was learned from", "Sending triggered updates", "Encrypting routing messages"],
                1,
                "Split horizon prevents a router from advertising a route back to the neighbour from whom it learned that route."
            ),
            mcq(
                "In RIP, the maximum hop count is:",
                ["10", "15", "16", "255"],
                1,
                "RIP's maximum hop count is 15; a hop count of 16 means the destination is unreachable."
            ),
            mcq(
                "RIP sends its routing updates every:",
                ["10 seconds", "30 seconds", "60 seconds", "90 seconds"],
                1,
                "RIP sends periodic routing updates every 30 seconds."
            ),
        ],

        questions: [
            qa(
                "Explain how distance vector routing works with the Bellman-Ford equation.",
                "In distance vector routing, each router maintains a table of the shortest distance to every destination and the next hop to reach it. Periodically, each router sends its entire routing table to its immediate neighbours. When a router receives a neighbour's table, it updates its own using the Bellman-Ford equation: Dₓ(y) = minᵥ { c(x,v) + Dᵥ(y) }, meaning the shortest distance from router x to destination y is the minimum over all neighbours v of the cost to reach v plus v's reported distance to y. For example, if router A's neighbour B reports it can reach destination C with cost 2, and the cost from A to B is 1, then A's cost to C via B is 1+2=3. If this is less than A's current cost to C, A updates its table. This process repeats until all routers converge and no more updates are needed.",
                5
            ),
            qa(
                "What is the count-to-infinity problem? Explain with an example.",
                "The count-to-infinity problem is a fundamental issue in distance vector routing where routers slowly increment their distance to an unreachable destination towards infinity after a link failure, creating routing loops. For example, in a network A-B-C where B-C breaks, B correctly sets its distance to C as infinity. However, before B can inform A, A sends its table saying it can reach C in 3 hops via B. B now thinks it can reach C via A in 4 hops and updates its table. A then receives B's update and thinks C is 5 hops away via B. This ping-pong continues with distances incrementing by 1 each exchange until both reach the maximum value (16 in RIP, representing infinity). During this time, packets destined for C loop between A and B, wasting bandwidth.",
                5
            ),
            qa(
                "Explain three solutions to the count-to-infinity problem.",
                "Split horizon prevents a router from advertising a route back to the neighbour from whom it learned that route. If A learned about C via B, A will not tell B about its route to C, preventing B from incorrectly thinking it can reach C through A. Split horizon with poison reverse goes further by advertising the route back to the source neighbour but with a distance of infinity, explicitly telling that neighbour 'do not use me to reach this destination'. Route poisoning immediately advertises a failed route with a distance of infinity rather than waiting for the periodic update timer, allowing other routers to learn about the failure quickly. Triggered updates complement this by sending an immediate update whenever a route changes rather than waiting for the next periodic update, speeding up convergence.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — Link State Routing
========================================================= */

const linkStateRouting = createTopic(
    "link-state-routing",
    "Link State Routing",

    [
        definition(
            "Link State Routing",
            "A dynamic routing algorithm where each router discovers its neighbours, measures the cost to each neighbour, and floods this link state information to all routers in the network. Every router then independently builds a complete map of the network topology and runs Dijkstra's shortest path algorithm to compute the best paths."
        ),

        text(
            "Unlike distance vector routing where routers only know distance and direction, link state routing gives every router a complete picture of the network topology. This eliminates the count-to-infinity problem and provides faster convergence, but requires more memory and CPU to store the topology and run Dijkstra's algorithm."
        ),

        heading("How Link State Routing Works"),

        steps([
            "Neighbour Discovery — Each router discovers its directly connected neighbours using Hello packets.",
            "Link Cost Measurement — Each router measures the cost (delay, bandwidth, etc.) to each neighbour.",
            "Link State Packet (LSP) Creation — Each router creates an LSP containing its ID, neighbours and link costs.",
            "Flooding — Each router floods its LSP to all other routers in the network using reliable flooding.",
            "Topology Database — Every router collects all LSPs and builds an identical link state database (complete network map).",
            "Shortest Path Computation — Each router independently runs Dijkstra's algorithm on the topology database to compute shortest paths to all destinations.",
            "Routing Table Construction — The shortest paths are used to populate the routing table.",
        ]),

        heading("Dijkstra's Algorithm"),

        definition(
            "Dijkstra's Algorithm",
            "A greedy algorithm that finds the shortest path from a source node to all other nodes in a graph with non-negative edge weights. It maintains a set of permanently labelled nodes (shortest path confirmed) and tentatively labelled nodes (shortest path under evaluation)."
        ),

        code(
            `Dijkstra's Algorithm Steps:

  1. Set distance to source = 0, all others = ∞
  2. Mark source as current node
  3. For each unvisited neighbour of current node:
     - Calculate tentative distance = current distance + edge cost
     - If tentative distance < stored distance, update stored distance
  4. Mark current node as visited (permanently labelled)
  5. Select the unvisited node with the smallest distance as new current
  6. Repeat steps 3-5 until all nodes are visited

Example Network:
       2
   A ───── B
   │ ╲     │
  5│  1╲   │3
   │    ╲  │
   D ───── C
       4

Dijkstra from A:
  Step | Visited | A  | B  | C  | D
  ─────┼─────────┼────┼────┼────┼────
  Init | {A}     | 0  | 2  | 1  | 5
  1    | {A,C}   | 0  | 2  | 1* | 5
  2    | {A,C,B} | 0  | 2* | 1  | 5
  3    | {A,C,B,D}| 0 | 2  | 1  | 5*

  Shortest paths from A: B=2, C=1, D=5
  (* = selected as minimum in that step)`,
            "text",
            "Dijkstra's algorithm example"
        ),

        heading("Flooding of Link State Packets"),

        text(
            "Each router floods its LSP to all other routers reliably. When a router receives an LSP, it checks the sequence number. If it is new, the router stores it and forwards it to all neighbours except the one it came from. If it is old or duplicate, it is discarded. Sequence numbers and ageing prevent infinite flooding."
        ),

        heading("OSPF (Open Shortest Path First)"),

        definition(
            "OSPF",
            "The most widely used link state routing protocol for Interior Gateway Routing within an autonomous system. OSPF uses Dijkstra's algorithm, supports classless addressing, authentication and hierarchical routing through areas."
        ),

        table(
            ["Feature", "OSPF"],
            [
                ["Type", "Link State"],
                ["Algorithm", "Dijkstra's Shortest Path First (SPF)"],
                ["Metric", "Cost (based on bandwidth: Cost = Reference Bandwidth / Link Bandwidth)"],
                ["Convergence", "Fast (triggered updates, no periodic full table exchange)"],
                ["Scalability", "Excellent (hierarchical areas)"],
                ["Authentication", "MD5 or SHA"],
                ["VLSM/CIDR", "Supported"],
                ["Hello Interval", "10 seconds (broadcast), 30 seconds (NBMA)"],
                ["Dead Interval", "4 × Hello interval"],
                ["Protocol Number", "89 (encapsulated directly in IP)"],
            ]
        ),

        heading("OSPF Areas and Hierarchy"),

        code(
            `OSPF Hierarchical Design:

  ┌─────────────────────────────────────┐
  │          Backbone Area (Area 0)     │
  │   ┌─────┐    ┌─────┐    ┌─────┐   │
  │   │ ABR │────│ ABR │────│ ABR │   │
  │   └──┬──┘    └──┬──┘    └──┬──┘   │
  └──────┼──────────┼──────────┼──────┘
         │          │          │
  ┌──────┴──┐ ┌────┴────┐ ┌──┴──────┐
  │ Area 1  │ │ Area 2  │ │ Area 3  │
  │(Stub)   │ │(Regular)│ │(NSSA)   │
  └─────────┘ └─────────┘ └─────────┘

  ABR = Area Border Router
  All areas must connect to Area 0 (backbone).`,
            "text",
            "OSPF area hierarchy"
        ),

        heading("OSPF Router Types"),

        table(
            ["Router Type", "Description"],
            [
                ["Internal Router", "All interfaces in the same area"],
                ["Area Border Router (ABR)", "Connects one or more areas to the backbone (Area 0)"],
                ["Autonomous System Boundary Router (ASBR)", "Connects the OSPF domain to external networks (other AS)"],
                ["Backbone Router", "Has at least one interface in Area 0"],
            ]
        ),

        heading("Link State versus Distance Vector"),

        table(
            ["Aspect", "Distance Vector", "Link State"],
            [
                ["Knowledge", "Distance and direction only", "Complete topology map"],
                ["Algorithm", "Bellman-Ford", "Dijkstra's SPF"],
                ["Updates", "Periodic full table to neighbours", "Triggered LSPs flooded to all routers"],
                ["Convergence", "Slow (count-to-infinity)", "Fast"],
                ["Memory", "Low (routing table only)", "High (topology database)"],
                ["CPU", "Low", "Higher (runs Dijkstra)"],
                ["Bandwidth", "Periodic full table exchange", "LSP flooding only on changes"],
                ["Routing loops", "Possible (count-to-infinity)", "Not possible (each router has full topology)"],
                ["Protocol examples", "RIP, IGRP", "OSPF, IS-IS"],
                ["Scalability", "Small to medium networks", "Large networks"],
            ]
        ),

        note(
            "OSPF is the dominant Interior Gateway Protocol (IGP) in enterprise networks and ISP networks. Its hierarchical area design allows it to scale to very large networks by limiting the scope of LSP flooding and Dijkstra computation to individual areas.",
            "exam",
            "Frequently Asked"
        ),

        keyPoints([
            "Link state routing gives every router a complete map of the network topology.",
            "Each router floods Link State Packets (LSPs) and runs Dijkstra's algorithm independently.",
            "Dijkstra's algorithm finds the shortest path from a source to all other nodes.",
            "OSPF is the most widely used link state protocol with hierarchical areas and fast convergence.",
            "Link state routing converges faster and avoids routing loops compared to distance vector.",
        ]),
    ],

    {
        summary:
            "Master link state routing, Dijkstra's algorithm, LSP flooding, OSPF protocol with areas and router types, and compare with distance vector.",
        minutes: 14,
        tags: ["networks", "link-state", "dijkstra", "ospf", "important"],

        mcqs: [
            mcq(
                "Link state routing uses which algorithm to compute shortest paths?",
                ["Bellman-Ford", "Dijkstra's", "Floyd-Warshall", "A*"],
                1,
                "Link state routing uses Dijkstra's Shortest Path First (SPF) algorithm."
            ),
            mcq(
                "In link state routing, each router floods its link state information to:",
                ["Only its neighbours", "A central server", "All routers in the network", "Random routers"],
                2,
                "Each router floods its LSP to all routers in the network so every router builds the same topology map."
            ),
            mcq(
                "OSPF uses which metric?",
                ["Hop count", "Cost (based on bandwidth)", "Delay only", "Reliability"],
                1,
                "OSPF uses cost as its metric, calculated as Reference Bandwidth / Link Bandwidth."
            ),
            mcq(
                "In OSPF, all areas must connect to:",
                ["Area 1", "Area 0 (backbone)", "Any area", "The ASBR"],
                1,
                "All OSPF areas must connect to the backbone area (Area 0)."
            ),
            mcq(
                "Which is an advantage of link state over distance vector routing?",
                ["Lower memory usage", "Faster convergence and no routing loops", "Simpler to implement", "Less CPU usage"],
                1,
                "Link state routing converges faster and avoids routing loops because every router has the full topology."
            ),
            mcq(
                "An OSPF Area Border Router (ABR) connects:",
                ["Two external networks", "One or more areas to the backbone (Area 0)", "A host to a switch", "Two different protocols"],
                1,
                "An ABR has interfaces in multiple areas, including the backbone Area 0."
            ),
        ],

        questions: [
            qa(
                "Explain the steps of link state routing.",
                "Link state routing involves several steps. First, each router discovers its directly connected neighbours by exchanging Hello packets. Second, each router measures the cost to each neighbour based on metrics like bandwidth or delay. Third, each router creates a Link State Packet (LSP) containing its router ID, list of neighbours and the cost to each. Fourth, each router floods its LSP reliably to all other routers in the network using sequence numbers to prevent duplicates and infinite loops. Fifth, every router collects all LSPs and builds an identical link state database representing the complete network topology. Sixth, each router independently runs Dijkstra's shortest path algorithm on this database to compute the shortest path to every destination. Finally, the results are used to populate the routing table with next-hop information.",
                5
            ),
            qa(
                "Explain Dijkstra's algorithm with an example.",
                "Dijkstra's algorithm finds the shortest path from a source node to all other nodes in a graph with non-negative edge weights. It starts by setting the source distance to 0 and all other distances to infinity. In each iteration, it selects the unvisited node with the smallest tentative distance, marks it as permanently visited, and updates the tentative distances of its unvisited neighbours. For example, in a network with A-B=2, A-C=1, A-D=5, B-C=3, C-D=4, starting from A: initially A=0, B=2, C=1, D=5. Select C (minimum=1), update B=min(2, 1+3)=2 and D=min(5, 1+4)=5. Select B (minimum=2), update D=min(5, 2+3)=5. Select D (minimum=5). Final shortest paths: A→B=2, A→C=1, A→D=5.",
                5
            ),
            qa(
                "Compare link state and distance vector routing.",
                "In distance vector routing, each router knows only the distance and direction (next hop) to each destination and shares its entire routing table periodically with immediate neighbours using the Bellman-Ford algorithm. It is simple and uses less memory but suffers from slow convergence and the count-to-infinity problem that can cause routing loops. In link state routing, each router floods its link state information to all routers, giving every router a complete topology map. Each router independently runs Dijkstra's algorithm to compute shortest paths. This provides fast convergence and eliminates routing loops but requires more memory for the topology database and more CPU for Dijkstra's computation. Distance vector protocols include RIP and IGRP, while link state protocols include OSPF and IS-IS. Link state scales better for large networks.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — Congestion Control
========================================================= */

const congestionControl = createTopic(
    "congestion-control",
    "Congestion Control",

    [
        definition(
            "Congestion",
            "A condition in a network where the demand for resources (bandwidth, buffer space, processing power) exceeds the available capacity, leading to increased delay, packet loss and degraded throughput."
        ),

        definition(
            "Congestion Control",
            "A set of mechanisms that prevent or alleviate network congestion by regulating the rate at which senders inject data into the network."
        ),

        text(
            "Congestion is different from flow control. Flow control is an end-to-end mechanism between a sender and receiver to prevent the sender from overwhelming the receiver. Congestion control is a network-wide mechanism to prevent the sender from overwhelming the network itself."
        ),

        heading("Causes of Congestion"),

        list([
            "Too many senders transmitting simultaneously.",
            "Insufficient bandwidth on a link.",
            "Insufficient buffer space in routers.",
            "Slow processor in routers unable to forward packets fast enough.",
            "Retransmissions due to packet loss further increase traffic (congestion collapse).",
        ]),

        heading("Effects of Congestion"),

        table(
            ["Effect", "Description"],
            [
                ["Increased delay", "Packets queue in router buffers, increasing end-to-end delay"],
                ["Packet loss", "Router buffers overflow and packets are dropped"],
                ["Reduced throughput", "Goodput (useful data delivered) decreases despite high offered load"],
                ["Congestion collapse", "Extreme case where most network capacity is consumed by retransmissions"],
            ]
        ),

        code(
            `Throughput vs Offered Load:

  Throughput
      ↑
  Max ┤        ╭──────────── Ideal (no congestion)
      │      ╱
      │    ╱  ╭─────── Actual (with congestion)
      │  ╱  ╱
      │╱  ╱
      │ ╱     ╲  ← Congestion collapse
      │╱       ╲
      ┼──────────────────→ Offered Load
           ↑
      Network capacity

  Beyond capacity, throughput drops because retransmissions
  consume bandwidth that could carry new data.`,
            "text",
            "Congestion collapse"
        ),

        heading("Congestion Control Approaches"),

        table(
            ["Approach", "Description", "Example"],
            [
                ["Open-Loop (Prevention)", "Prevent congestion before it occurs through design", "Traffic shaping, admission control, policing"],
                ["Closed-Loop (Recovery)", "Detect congestion and react to reduce it", "TCP congestion control, backpressure, choke packets"],
            ]
        ),

        heading("TCP Congestion Control"),

        text(
            "TCP uses a closed-loop congestion control mechanism where the sender adjusts its transmission rate based on network feedback (packet loss or delay). The key variable is the congestion window (cwnd), which limits how much data the sender can inject into the network."
        ),

        heading("TCP Congestion Control Phases"),

        table(
            ["Phase", "Behaviour", "When"],
            [
                ["Slow Start", "cwnd doubles every RTT (exponential growth)", "Connection start or after timeout"],
                ["Congestion Avoidance", "cwnd increases by 1 MSS per RTT (linear growth)", "After cwnd reaches ssthresh"],
                ["Fast Retransmit", "Retransmit lost segment after 3 duplicate ACKs", "3 duplicate ACKs received"],
                ["Fast Recovery", "Set ssthresh = cwnd/2, cwnd = ssthresh + 3, then linear growth", "After fast retransmit"],
                ["Timeout", "Set ssthresh = cwnd/2, cwnd = 1 MSS, restart slow start", "RTO timer expires (severe congestion)"],
            ]
        ),

        code(
            `TCP Congestion Window Evolution:

  cwnd
  (MSS)
    ↑
  32│         ╱ ← Congestion Avoidance (linear)
    │       ╱
  16│─────╱ ← ssthresh
    │   ╱
   8│ ╱  ← Slow Start (exponential)
    │╱
   4│╱
   2│
   1│
    ┼────────────────────────→ Time (RTTs)
         ↑
      Loss detected
      → ssthresh = cwnd/2
      → Restart slow start or fast recovery`,
            "text",
            "TCP congestion window evolution"
        ),

        heading("Slow Start and Congestion Avoidance"),

        definition(
            "Slow Start",
            "Despite its name, slow start grows the congestion window exponentially. It starts with cwnd = 1 MSS and doubles every RTT (1, 2, 4, 8, 16, ...) until it reaches the slow start threshold (ssthresh) or a loss is detected."
        ),

        definition(
            "Congestion Avoidance",
            "Once cwnd reaches ssthresh, TCP switches to congestion avoidance where cwnd increases linearly by 1 MSS per RTT. This cautious growth probes for available bandwidth without causing congestion."
        ),

        heading("Other Congestion Control Mechanisms"),

        table(
            ["Mechanism", "Layer", "Description"],
            [
                ["Traffic Shaping", "Network", "Smooths out bursty traffic to a regulated rate (leaky bucket, token bucket)"],
                ["Admission Control", "Network", "Refuses new connections if the network cannot handle them"],
                ["RED (Random Early Detection)", "Network", "Routers drop packets probabilistically before the buffer is full to signal congestion early"],
                ["ECN (Explicit Congestion Notification)", "Network/Transport", "Routers mark packets instead of dropping them to signal congestion"],
                ["Backpressure", "Data Link", "A congested node tells its upstream neighbour to slow down"],
                ["Choke Packets", "Network", "Router sends a choke packet to the sender telling it to reduce its rate"],
            ]
        ),

        heading("Leaky Bucket and Token Bucket"),

        table(
            ["Aspect", "Leaky Bucket", "Token Bucket"],
            [
                ["Analogy", "Bucket with a hole; water flows out at constant rate", "Bucket filled with tokens at constant rate"],
                ["Output rate", "Constant (fixed rate)", "Can burst up to bucket capacity"],
                ["Burst handling", "Bursts are smoothed out", "Bursts are allowed if tokens are available"],
                ["Use case", "Traffic shaping (enforce constant rate)", "Traffic policing (allow controlled bursts)"],
            ]
        ),

        note(
            "TCP congestion control is one of the most important mechanisms keeping the Internet functional. Without it, the Internet would suffer from congestion collapse where retransmissions consume all available bandwidth and useful throughput drops to near zero.",
            "exam",
            "Frequently Asked"
        ),

        keyPoints([
            "Congestion occurs when network demand exceeds capacity, causing delay, packet loss and reduced throughput.",
            "TCP congestion control uses a congestion window (cwnd) that adjusts based on network feedback.",
            "Slow start grows cwnd exponentially; congestion avoidance grows it linearly.",
            "Three duplicate ACKs trigger fast retransmit; a timeout triggers slow start restart.",
            "Traffic shaping mechanisms like leaky bucket and token bucket regulate traffic at the network level.",
        ]),
    ],

    {
        summary:
            "Learn congestion causes and effects, TCP congestion control phases (slow start, congestion avoidance, fast retransmit), and traffic shaping mechanisms.",
        minutes: 13,
        tags: ["networks", "congestion-control", "tcp", "slow-start", "token-bucket", "important"],

        mcqs: [
            mcq(
                "Congestion control is different from flow control because congestion control:",
                ["Prevents the sender from overwhelming the receiver", "Prevents the sender from overwhelming the network", "Only works at the Data Link layer", "Uses a sliding window"],
                1,
                "Congestion control prevents overwhelming the network, while flow control prevents overwhelming the receiver."
            ),
            mcq(
                "In TCP slow start, the congestion window grows:",
                ["Linearly", "Exponentially", "Remains constant", "Decreases"],
                1,
                "Slow start doubles the congestion window every RTT, which is exponential growth."
            ),
            mcq(
                "TCP triggers fast retransmit when it receives:",
                ["1 duplicate ACK", "2 duplicate ACKs", "3 duplicate ACKs", "A timeout"],
                2,
                "Three duplicate ACKs indicate a likely lost segment, triggering fast retransmit."
            ),
            mcq(
                "When a TCP timeout occurs, the congestion window is reset to:",
                ["Half its current value", "1 MSS", "The ssthresh value", "0"],
                1,
                "On timeout, cwnd is reset to 1 MSS and slow start begins again."
            ),
            mcq(
                "The token bucket algorithm allows:",
                ["Only constant-rate output", "Controlled bursts up to the bucket capacity", "No traffic at all", "Unlimited bursts"],
                1,
                "The token bucket allows bursts of traffic up to the number of accumulated tokens."
            ),
            mcq(
                "RED (Random Early Detection) works by:",
                ["Dropping all packets when the buffer is full", "Dropping packets probabilistically before the buffer is full", "Increasing bandwidth", "Sending choke packets"],
                1,
                "RED drops packets probabilistically before the buffer fills completely to signal congestion early."
            ),
        ],

        questions: [
            qa(
                "Explain the phases of TCP congestion control.",
                "TCP congestion control operates in several phases. Slow start begins with a congestion window (cwnd) of 1 MSS and doubles it every RTT (1, 2, 4, 8, 16...) — this is exponential growth despite the name 'slow'. When cwnd reaches the slow start threshold (ssthresh), TCP switches to congestion avoidance where cwnd increases linearly by 1 MSS per RTT, cautiously probing for available bandwidth. If three duplicate ACKs are received, TCP performs fast retransmit (immediately retransmits the lost segment) and enters fast recovery, setting ssthresh to cwnd/2 and cwnd to ssthresh + 3, then continuing with linear growth. If a timeout occurs (more severe congestion), TCP sets ssthresh to cwnd/2, resets cwnd to 1 MSS and restarts slow start from the beginning.",
                5
            ),
            qa(
                "What causes congestion in a network and what are its effects?",
                "Congestion is caused when the demand for network resources exceeds available capacity. Specific causes include too many senders transmitting simultaneously, insufficient bandwidth on a link, insufficient buffer space in routers, slow router processors unable to forward packets fast enough, and retransmissions due to packet loss that further increase traffic. The effects include increased end-to-end delay as packets queue in router buffers, packet loss when buffers overflow, reduced throughput as useful data delivery decreases despite high offered load, and in extreme cases congestion collapse where most network capacity is consumed by retransmissions and useful throughput drops to near zero.",
                5
            ),
            qa(
                "Compare the leaky bucket and token bucket traffic shaping algorithms.",
                "The leaky bucket algorithm is analogous to a bucket with a hole at the bottom. Incoming traffic (water) may arrive in bursts, but it flows out at a constant fixed rate regardless of the input rate. If the bucket overflows, excess packets are discarded. This enforces a strict constant output rate and smooths out all bursts, making it suitable for traffic shaping where a guaranteed constant rate is needed. The token bucket algorithm fills a bucket with tokens at a constant rate. To send a packet, the sender must remove a token from the bucket. If tokens are available, packets can be sent immediately, allowing bursts up to the bucket's capacity. If the bucket is empty, the sender must wait for new tokens. This allows controlled bursts while maintaining an average rate, making it suitable for traffic policing where some burstiness is acceptable.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 5 — Internetworking and BGP
========================================================= */

const internetworkingAndBGP = createTopic(
    "internetworking-and-bgp",
    "Internetworking and BGP",

    [
        definition(
            "Internetworking",
            "The practice of connecting multiple distinct networks together to form a larger network (an internetwork or internet). The Internet is the largest example of an internetwork, connecting billions of devices across thousands of autonomous systems worldwide."
        ),

        text(
            "Internetworking requires devices and protocols that can bridge different network technologies and administrative domains. Routers connect different networks at the Network layer, while gateways can translate between entirely different protocol suites. The key challenge is scalability — the Internet must route packets among hundreds of thousands of networks efficiently."
        ),

        heading("Autonomous Systems (AS)"),

        definition(
            "Autonomous System (AS)",
            "A collection of networks and routers under a single administrative domain that shares a common routing policy. Each AS is assigned a unique AS Number (ASN). The Internet is composed of thousands of interconnected ASes."
        ),

        code(
            `Internet Structure:

  ┌──────────┐     ┌──────────┐     ┌──────────┐
  │  AS 100  │─────│  AS 200  │─────│  AS 300  │
  │ (ISP A)  │     │ (ISP B)  │     │(University)│
  └────┬─────┘     └────┬─────┘     └────┬─────┘
       │                │                │
  ┌────┴─────┐     ┌────┴─────┐     ┌────┴─────┐
  │  AS 101  │     │  AS 201  │     │  AS 301  │
  │(Company) │     │ (ISP C)  │     │(Campus)  │
  └──────────┘     └──────────┘     └──────────┘

  Within each AS: IGP (OSPF, RIP)
  Between ASes: EGP (BGP)`,
            "text",
            "Autonomous Systems on the Internet"
        ),

        heading("IGP versus EGP"),

        table(
            ["Aspect", "IGP (Interior Gateway Protocol)", "EGP (Exterior Gateway Protocol)"],
            [
                ["Scope", "Within a single AS", "Between different ASes"],
                ["Goal", "Find the best/shortest path", "Find a reachable path with policy control"],
                ["Protocols", "OSPF, RIP, EIGRP, IS-IS", "BGP"],
                ["Metric", "Cost, hop count, bandwidth", "Path attributes and policies"],
                ["Convergence", "Fast", "Slower (by design, for stability)"],
                ["Scale", "Hundreds to thousands of routers", "Tens of thousands of ASes"],
            ]
        ),

        heading("BGP (Border Gateway Protocol)"),

        definition(
            "BGP",
            "The Exterior Gateway Protocol that routes traffic between autonomous systems on the Internet. BGP is a path vector protocol that makes routing decisions based on paths, network policies and rule sets rather than simple metrics. It is the protocol that holds the Internet together."
        ),

        table(
            ["Feature", "BGP"],
            [
                ["Type", "Path Vector (advanced distance vector)"],
                ["Scope", "Inter-AS routing (between autonomous systems)"],
                ["Version", "BGP-4 (supports CIDR and route aggregation)"],
                ["Transport", "Uses TCP port 179 for reliable communication"],
                ["Metric", "Path attributes (AS_PATH, LOCAL_PREF, MED, etc.)"],
                ["Convergence", "Slow (designed for stability over speed)"],
                ["Scale", "Handles ~900,000+ routes in the global routing table"],
            ]
        ),

        heading("BGP Path Attributes"),

        table(
            ["Attribute", "Type", "Purpose"],
            [
                ["AS_PATH", "Well-known mandatory", "List of ASes the route has traversed; used for loop prevention and path selection"],
                ["NEXT_HOP", "Well-known mandatory", "IP address of the next-hop router to reach the destination"],
                ["ORIGIN", "Well-known mandatory", "How the route was learned (IGP, EGP, incomplete)"],
                ["LOCAL_PREF", "Well-known discretionary", "Preference within an AS; higher is preferred"],
                ["MED (Multi-Exit Discriminator)", "Optional non-transitive", "Suggests preferred entry point to a neighbouring AS; lower is preferred"],
                ["COMMUNITY", "Optional transitive", "Groups destinations for applying common policies"],
            ]
        ),

        heading("BGP Path Selection"),

        text(
            "When BGP receives multiple paths to the same destination, it selects the best path using the following decision process (in order):"
        ),

        steps([
            "Highest LOCAL_PREF (local preference within the AS)",
            "Shortest AS_PATH (fewest AS hops)",
            "Lowest ORIGIN type (IGP < EGP < Incomplete)",
            "Lowest MED (Multi-Exit Discriminator)",
            "Prefer eBGP over iBGP paths",
            "Lowest IGP metric to the BGP next hop",
            "Lowest router ID (tie-breaker)",
        ]),

        heading("eBGP versus iBGP"),

        table(
            ["Aspect", "eBGP (External BGP)", "iBGP (Internal BGP)"],
            [
                ["Peers", "Routers in different ASes", "Routers in the same AS"],
                ["AS_PATH", "Prepends own AS number", "Does not modify AS_PATH"],
                ["Next Hop", "Changed to self", "Not changed by default"],
                ["Default AD", "20", "200"],
                ["Route propagation", "Advertises to all peers", "Does not re-advertise to iBGP peers (full mesh required)"],
            ]
        ),

        heading("Network Address Translation (NAT)"),

        definition(
            "NAT",
            "A technique that translates private IP addresses to public IP addresses (and vice versa) at a router, allowing multiple devices on a private network to share a single public IP address for Internet access."
        ),

        table(
            ["NAT Type", "Description"],
            [
                ["Static NAT", "One-to-one mapping of private to public IP (permanent)"],
                ["Dynamic NAT", "Pool of public IPs assigned dynamically to private IPs"],
                ["PAT (NAT Overload)", "Many private IPs share one public IP using different port numbers"],
            ]
        ),

        code(
            `PAT Example:
  Internal Network: 192.168.1.0/24
  Public IP: 203.0.113.1

  Internal Host         NAT Router (Public)
  192.168.1.10:5000  →  203.0.113.1:10001
  192.168.1.11:5000  →  203.0.113.1:10002
  192.168.1.12:8080  →  203.0.113.1:10003

  All internal hosts share one public IP,
  distinguished by unique port numbers.`,
            "text",
            "PAT (NAT Overload) example"
        ),

        note(
            "BGP is the most critical routing protocol on the Internet. Without BGP, autonomous systems would not be able to exchange routing information, and the Internet as we know it would not function. BGP's policy-based routing allows ISPs and organisations to control traffic flow based on business relationships and agreements.",
            "exam",
            "Frequently Asked"
        ),

        keyPoints([
            "Internetworking connects multiple networks; the Internet is the largest internetwork.",
            "An Autonomous System (AS) is a network under single administrative control with a unique ASN.",
            "IGPs (OSPF, RIP) route within an AS; BGP routes between ASes.",
            "BGP is a path vector protocol that selects routes based on path attributes and policies.",
            "NAT allows multiple private IP devices to share a single public IP for Internet access.",
        ]),
    ],

    {
        summary:
            "Understand internetworking, autonomous systems, BGP protocol with path attributes and selection, eBGP vs iBGP, and NAT.",
        minutes: 13,
        tags: ["networks", "bgp", "internetworking", "autonomous-system", "nat", "important"],

        mcqs: [
            mcq(
                "An Autonomous System (AS) is:",
                ["A single router", "A collection of networks under one administrative domain", "A type of cable", "A network protocol"],
                1,
                "An AS is a collection of networks and routers under a single administrative domain with a common routing policy."
            ),
            mcq(
                "BGP is used for routing:",
                ["Within a LAN", "Within an autonomous system", "Between autonomous systems", "Between two hosts"],
                2,
                "BGP is an Exterior Gateway Protocol used for routing between different autonomous systems."
            ),
            mcq(
                "BGP uses which transport protocol?",
                ["UDP", "TCP", "ICMP", "ARP"],
                1,
                "BGP uses TCP port 179 for reliable communication between BGP peers."
            ),
            mcq(
                "The AS_PATH attribute in BGP is used for:",
                ["Encryption", "Loop prevention and path selection", "Authentication", "Compression"],
                1,
                "AS_PATH lists the ASes a route has traversed, preventing loops and helping select the shortest path."
            ),
            mcq(
                "PAT (NAT Overload) allows:",
                ["One-to-one IP mapping", "Many private IPs to share one public IP using port numbers", "No translation", "Only IPv6 addresses"],
                1,
                "PAT maps many private IP addresses to a single public IP using unique port numbers."
            ),
            mcq(
                "IGP protocols include:",
                ["BGP only", "OSPF, RIP, EIGRP", "HTTP, FTP", "DNS, DHCP"],
                1,
                "OSPF, RIP and EIGRP are Interior Gateway Protocols used within an autonomous system."
            ),
        ],

        questions: [
            qa(
                "What is an Autonomous System? Explain the difference between IGP and EGP.",
                "An Autonomous System (AS) is a collection of networks and routers under a single administrative domain that shares a common routing policy. Each AS is assigned a unique AS Number (ASN). An Interior Gateway Protocol (IGP) is used for routing within a single AS. IGPs like OSPF and RIP focus on finding the best or shortest path using metrics like cost or hop count, and they converge quickly. An Exterior Gateway Protocol (EGP) is used for routing between different ASes. BGP is the only EGP in use today. BGP focuses on finding a reachable path with policy control rather than the shortest path, uses path attributes and policies for route selection, and converges more slowly by design for stability. The Internet consists of thousands of interconnected ASes using IGP internally and BGP externally.",
                5
            ),
            qa(
                "Explain BGP and its path selection process.",
                "BGP (Border Gateway Protocol) is the path vector protocol that routes traffic between autonomous systems on the Internet. It uses TCP port 179 for reliable communication and maintains a routing table with over 900,000 routes. BGP makes routing decisions based on path attributes rather than simple metrics. When multiple paths to the same destination exist, BGP selects the best path using a decision process: first, the highest LOCAL_PREF (local preference within the AS); second, the shortest AS_PATH (fewest AS hops); third, the lowest ORIGIN type (IGP preferred over EGP over incomplete); fourth, the lowest MED (Multi-Exit Discriminator); fifth, eBGP paths are preferred over iBGP paths; sixth, the lowest IGP metric to the BGP next hop; and finally, the lowest router ID as a tie-breaker. This policy-based approach allows ISPs to control traffic flow based on business relationships.",
                5
            ),
            qa(
                "What is NAT? Explain its types with examples.",
                "Network Address Translation (NAT) translates private IP addresses to public IP addresses at a router, allowing multiple devices on a private network to share public IP addresses for Internet access. Static NAT creates a permanent one-to-one mapping between a private IP and a public IP, useful for servers that need a consistent public address. For example, 192.168.1.10 is always mapped to 203.0.113.5. Dynamic NAT uses a pool of public IP addresses and assigns them dynamically to private IPs as needed. When a device initiates a connection, it gets the next available public IP from the pool. PAT (Port Address Translation or NAT Overload) allows many private IPs to share a single public IP by using different port numbers. For example, 192.168.1.10:5000 maps to 203.0.113.1:10001 and 192.168.1.11:5000 maps to 203.0.113.1:10002. PAT is the most common form used in home and office routers.",
                5
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit3Topics = [
    introToRouting,
    distanceVectorRouting,
    linkStateRouting,
    congestionControl,
    internetworkingAndBGP,
];
