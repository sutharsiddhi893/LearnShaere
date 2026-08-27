/* =========================================================
   BCA • SEM 8 • Cloud Computing
   UNIT 1 — Cloud Foundations, Service Models, Virtualization & AWS Core
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
  keyPoints,
  mcq,
  qa,
} from "../../../../helpers";

/* =========================================================
   TOPIC 1 — Introduction to Cloud Computing
========================================================= */

const introToCloud = createTopic(
    "introduction-to-cloud-computing",
    "Introduction to Cloud Computing",

    [
        definition(
            "Cloud Computing",
            "Cloud computing is the on-demand delivery of IT resources — servers, storage, databases, networking, software — over the internet with pay-as-you-go pricing, without buying or maintaining physical hardware."
        ),

        text(
            "NIST (National Institute of Standards and Technology) defines cloud computing as 'a model for enabling ubiquitous, convenient, on-demand network access to a shared pool of configurable computing resources that can be rapidly provisioned with minimal management effort or service provider interaction.'"
        ),

        heading("The Analogy — Electricity Grid"),

        code(
            `Before power grids: every factory ran its OWN
generator → huge cost, maintenance, capacity guesswork.

After grids: plug in, pay for what you use.
Nobody owns a generator today.

Cloud = computing became a UTILITY.
You don't build a power plant to charge your phone.`,
            "text",
            "Why 'cloud' changed everything"
        ),

        heading("5 Essential Characteristics (NIST)"),

        table(
            ["Characteristic", "Meaning"],
            [
                ["On-Demand Self-Service", "Provision servers yourself via console/API — no human tickets"],
                ["Broad Network Access", "Available over the internet from any device"],
                ["Resource Pooling", "Provider's hardware is shared across customers (multi-tenancy)"],
                ["Rapid Elasticity", "Scale up for traffic spikes, scale down after — automatically"],
                ["Measured Service", "Pay-per-use billing, like an electricity meter"],
            ]
        ),

        heading("Traditional IT vs Cloud"),

        table(
            ["Criteria", "Traditional (On-Premise)", "Cloud"],
            [
                ["Upfront cost", "Buy servers: lakhs of rupees", "Zero — pay hourly"],
                ["Provisioning time", "Weeks (procurement, racking)", "Minutes (a few clicks)"],
                ["Scaling", "Buy more hardware, guess capacity", "Elastic — auto scale"],
                ["Maintenance", "Your team: power, cooling, hardware", "Provider handles it"],
                ["Wasted capacity", "Servers idle at 15% utilization", "Release what you don't use"],
                ["Global reach", "Build data centers per region", "Deploy to 30+ regions instantly"],
            ]
        ),

        heading("Brief History"),

        table(
            ["Era", "Milestone"],
            [
                ["1960s", "John McCarthy predicts 'computing as a public utility'"],
                ["2002", "Amazon launches AWS (initially internal infrastructure)"],
                ["2006", "EC2 & S3 launch — modern cloud is born"],
                ["2008", "Google App Engine; Microsoft Azure announces"],
                ["2010s", "OpenStack, Kubernetes (2014), cloud-first becomes default"],
                ["Today", "90%+ of enterprises use multi-cloud; AI runs on cloud GPUs"],
            ]
        ),

        heading("The Major Providers"),

        table(
            ["Provider", "Flagship Services", "Known For"],
            [
                ["AWS (Amazon)", "EC2, S3, Lambda", "Largest market share (~31%), widest catalog"],
                ["Microsoft Azure", "Virtual Machines, Azure AD", "Enterprise + Office integration"],
                ["Google Cloud (GCP)", "BigQuery, GKE", "Data/AI/ML strength, Kubernetes origin"],
                ["Others", "OCI, IBM Cloud, Alibaba", "Niche and regional plays"],
            ]
        ),

        note(
            "Cloud does NOT mean 'no servers exist' — it means SOMEONE ELSE'S servers, rented by the hour, managed at planetary scale. The servers are very real, in massive data centers.",
            "info",
            "Demystifying the Cloud"
        ),

        keyPoints([
            "Cloud = on-demand IT resources over the internet, pay-as-you-go.",
            "NIST's 5 characteristics: on-demand, broad access, pooling, elasticity, measured.",
            "Cloud converts CapEx (buying hardware) into OpEx (renting usage).",
            "AWS launched EC2/S3 in 2006 — the start of the modern cloud era.",
            "Big three: AWS (~31%), Azure, Google Cloud.",
        ]),
    ],

    {
        summary:
            "Understand cloud computing, NIST's five characteristics, traditional IT vs cloud economics, history, and major providers.",
        minutes: 12,
        tags: ["cloud", "introduction", "nist", "characteristics", "important"],

        mcqs: [
            mcq(
                "Which NIST characteristic lets customers provision servers without human interaction with the provider?",
                ["Resource pooling", "On-demand self-service", "Measured service", "Broad network access"],
                1,
                "Self-service means a few clicks/API calls provision resources instantly."
            ),
            mcq(
                "Which service pair, launched in 2006, marks the birth of the modern cloud?",
                ["Azure VM & Blob", "EC2 & S3", "BigQuery & GKE", "Lambda & DynamoDB"],
                1,
                "Amazon EC2 (compute) and S3 (storage) launched in 2006."
            ),
            mcq(
                "Cloud computing primarily converts which cost type?",
                ["OpEx into CapEx", "CapEx into OpEx — buying hardware becomes renting usage", "Fixed to fixed", "No costs change"],
                1,
                "No upfront hardware purchase; you pay per hour/GB used."
            ),
            mcq(
                "Resource pooling implies:",
                ["Each customer gets dedicated data centers", "Provider hardware is shared across multiple customers (multi-tenancy)", "Resources are unlimited", "Only CPUs are shared"],
                1,
                "Multi-tenancy drives cloud's economics — hardware shared securely."
            ),
        ],

        questions: [
            qa(
                "Define cloud computing and explain NIST's five essential characteristics.",
                "NIST defines cloud computing as a model for enabling ubiquitous, convenient, on-demand network access to a shared pool of configurable computing resources (servers, storage, applications) that can be rapidly provisioned with minimal management effort. The five essential characteristics: (1) On-Demand Self-Service — customers provision compute and storage themselves via web console or API, without raising tickets to humans. (2) Broad Network Access — resources are reachable over the standard internet from laptops, phones, and tablets. (3) Resource Pooling — the provider's physical hardware serves multiple customers (multi-tenancy), with resources dynamically assigned per demand. (4) Rapid Elasticity — capacity scales out during traffic spikes and scales back afterward, appearing unlimited to the customer. (5) Measured Service — usage is metered like electricity; you pay exactly for compute-hours, GB-stored, and data transferred, with transparent billing dashboards.",
                4
            ),
            qa(
                "Compare traditional on-premise IT with cloud computing across cost, speed, and scaling, with an example.",
                "Cost: on-premise requires heavy capital expenditure — buying servers, racks, UPS, cooling, and a data center room — lakhs spent BEFORE the first user arrives; cloud has zero upfront cost: an EC2 instance costs a few rupees per hour (operational expenditure). Speed: procuring on-premise hardware takes weeks (quotations, delivery, racking, OS install); a cloud server is provisioned in 2-3 minutes via console or API. Scaling: on-premise forces capacity guessing — buy for peak Diwali traffic and watch servers sit 85% idle the rest of the year; cloud elastically auto-scales: 5 servers normally, 50 during the sale, back to 5 after, billed accordingly. Example: a startup launching an e-commerce app can go live on cloud in a day with ₹500, whereas the equivalent on-premise setup would cost ₹10+ lakhs and months of setup — and couldn't shrink if the idea fails.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — Service Models: IaaS, PaaS, SaaS & Serverless
========================================================= */

const serviceModels = createTopic(
    "service-models-iaas-paas-saas-serverless",
    "Service Models: IaaS, PaaS, SaaS & Serverless",

    [
        definition(
            "Service Model",
            "A cloud service model defines HOW MUCH of the technology stack the provider manages versus what you manage — from raw infrastructure to complete applications."
        ),

        heading("The Responsibility Stack"),

        code(
            `ON-PREMISE      IAAS            PAAS            SAAS
─────────────   ─────────────   ─────────────   ─────────────
Applications    Applications    Applications    ✅ PROVIDER
Data           Data           Data           ✅ PROVIDER
Runtime        Runtime        ✅ PROVIDER     ✅ PROVIDER
Middleware     Middleware     ✅ PROVIDER     ✅ PROVIDER
OS             OS             ✅ PROVIDER     ✅ PROVIDER
Virtualization ✅ PROVIDER    ✅ PROVIDER     ✅ PROVIDER
Servers        ✅ PROVIDER    ✅ PROVIDER     ✅ PROVIDER
Storage        ✅ PROVIDER    ✅ PROVIDER     ✅ PROVIDER
Networking     ✅ PROVIDER    ✅ PROVIDER     ✅ PROVIDER

More you manage ←—————————→ less you manage`,
            "text",
            "Who manages what"
        ),

        heading("1. IaaS — Infrastructure as a Service"),

        text(
            "Raw building blocks: virtual machines, storage, networks. YOU install and manage the OS, runtime, and applications — maximum control, maximum responsibility."
        ),

        list([
            "Examples: AWS EC2, Azure Virtual Machines, GCP Compute Engine.",
            "Use when: full OS control needed, legacy apps lift-and-shift, custom stacks.",
            "You manage: OS patching, security hardening, runtime, apps.",
        ]),

        heading("2. PaaS — Platform as a Service"),

        text(
            "A ready platform: just bring code, the provider runs everything below it — OS, runtime, patching, scaling. Focus purely on building."
        ),

        list([
            "Examples: Heroku, Google App Engine, Azure App Service, Railway/Render.",
            "Use when: web apps/APIs where you don't want server admin.",
            "You manage: only your code and data.",
        ]),

        heading("3. SaaS — Software as a Service"),

        text(
            "Complete finished software over the internet. No installs, no servers, just login and use — the provider handles absolutely everything."
        ),

        list([
            "Examples: Gmail, Google Docs, Zoom, Salesforce, Microsoft 365, Canva.",
            "Use when: standard business software needs.",
            "You manage: nothing technical — just your users and their data.",
        ]),

        heading("4. FaaS — Serverless / Functions"),

        definition(
            "Serverless",
            "Serverless (Function as a Service) runs your code as small event-triggered functions — the provider manages everything AND you pay only while code executes, with zero idle cost. (Servers still exist — you just never see them.)"
        ),

        code(
            `# AWS Lambda: code runs on events, billed per 100ms of execution
def handler(event, context):
    return {"statusCode": 200,
            "body": "Order processed!"}

# Triggered by: S3 upload, API call, DB change, cron...
# No server running between requests → ₹0 idle cost`,
            "python",
            "Lambda function anatomy"
        ),

        heading("Pizza-as-a-Service Analogy"),

        table(
            ["Model", "Pizza Analogy"],
            [
                ["On-Premise", "Make pizza at home from scratch — grow wheat!"],
                ["IaaS", "Buy base & toppings (Delivered); you bake at home"],
                ["PaaS", "Order pizza delivered — you provide table & drinks"],
                ["SaaS", "Dine out at the pizza restaurant — everything served"],
            ]
        ),

        heading("Comparison Summary"),

        table(
            ["Criteria", "IaaS", "PaaS", "SaaS", "Serverless"],
            [
                ["You manage", "OS upward", "Code only", "Nothing", "Function code"],
                ["Control", "Highest", "Medium", "None", "Low"],
                ["Billing", "Per hour (running)", "Per hour/instance", "Per user/month", "Per invocation/ms"],
                ["Scaling", "Manual/auto-config", "Automatic", "Provider", "Automatic, instant"],
                ["Example", "EC2", "Heroku", "Gmail", "AWS Lambda"],
            ]
        ),

        note(
            "The trade-off triangle: Control ↔ Convenience ↔ Management burden. IaaS gives control but costs you DevOps time; SaaS gives zero management but zero control. Choose per workload, not per fashion.",
            "tip",
            "Choosing a Model"
        ),

        keyPoints([
            "Service models differ by how much of the stack the provider manages.",
            "IaaS: provider manages hardware; you manage OS+ (EC2).",
            "PaaS: provider manages up to runtime; you bring code (Heroku).",
            "SaaS: complete software, login and use (Gmail, Zoom).",
            "Serverless: event-driven functions, per-invocation billing, zero idle cost.",
        ]),
    ],

    {
        summary:
            "Master the four service models — IaaS, PaaS, SaaS, and Serverless — with the responsibility stack, examples, and selection criteria.",
        minutes: 13,
        tags: ["iaas", "paas", "saas", "serverless", "service-models", "important"],

        mcqs: [
            mcq(
                "In which service model do YOU patch and manage the operating system?",
                ["SaaS", "PaaS", "IaaS", "FaaS"],
                2,
                "IaaS provides raw VMs — OS installation, patching, and hardening are yours."
            ),
            mcq(
                "Gmail and Zoom are examples of:",
                ["IaaS", "PaaS", "SaaS", "On-premise"],
                2,
                "Complete software delivered over the internet = SaaS."
            ),
            mcq(
                "Serverless billing charges you for:",
                ["Reserved servers per month", "Execution time and invocations only", "Fixed annual license", "Nothing"],
                1,
                "Per-invocation, per-millisecond — zero cost while idle."
            ),
            mcq(
                "Heroku, where you 'just push code', is a classic:",
                ["IaaS", "PaaS", "SaaS", "Private cloud"],
                1,
                "PaaS manages OS, runtime, and scaling — you deploy only application code."
            ),
        ],

        questions: [
            qa(
                "Differentiate IaaS, PaaS, and SaaS with examples and what the customer manages in each.",
                "The models differ by the division of responsibility. IaaS (EC2, Azure VMs): the provider supplies virtualized hardware — servers, storage, networking — while the customer installs and manages EVERYTHING above: operating system, patches, runtime, middleware, and applications. It offers maximum control (root access, custom OS) at maximum management effort. PaaS (Heroku, Google App Engine): the provider additionally manages OS, runtime, patching, and scaling; the customer brings ONLY application code and data — ideal for developers who want to build, not administer. SaaS (Gmail, Zoom, Salesforce): the provider delivers the complete finished application; the customer merely logs in and uses it, controlling nothing technical — only users and business configuration. Moving from IaaS → PaaS → SaaS, your control decreases and convenience increases proportionally.",
                4
            ),
            qa(
                "What is serverless computing? How does it differ from running a VM-based application, and when would you choose it?",
                "Serverless (FaaS) executes small units of code — functions — in response to events (HTTP request, file upload, database change), with the provider transparently handling servers, scaling, and availability. Differences from VMs: (1) Billing — a VM (IaaS) bills per hour whether idle or busy; serverless bills per invocation and per millisecond of execution, costing literally zero between requests. (2) Scaling — VMs need manual/auto-scaling groups configured; serverless scales instantly from 0 to thousands of concurrent executions. (3) State — VMs are long-running and stateful; functions are short-lived, stateless, and must finish quickly (15-min Lambda limit). (4) Operations — VMs need patching and monitoring; functions need none. Choose serverless for event-driven, bursty, short tasks: image processing on upload, webhook handling, scheduled reports. Choose VMs/containers for long-running processes, WebSocket servers, stateful systems, or code needing specific OS-level control.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — Deployment Models: Public, Private, Hybrid, Community
========================================================= */

const deploymentModels = createTopic(
    "deployment-models-public-private-hybrid-community",
    "Deployment Models: Public, Private, Hybrid, Community",

    [
        definition(
            "Deployment Model",
            "A cloud deployment model describes WHO owns and operates the cloud infrastructure, and WHO is allowed to use it — the general public, one organization, or a closed community."
        ),

        heading("1. Public Cloud"),

        list([
            "Infrastructure owned by a provider (AWS, Azure, GCP) and shared by the general public.",
            "Multi-tenant — thousands of customers share the same physical hardware securely.",
            "Pros: lowest cost, massive scale, pay-as-you-go, instant global regions.",
            "Cons: less control over infrastructure; compliance/data-location concerns for some industries.",
            "Use case: startups, web apps, e-commerce, anything internet-facing.",
        ]),

        heading("2. Private Cloud"),

        list([
            "Infrastructure dedicated to ONE organization — hosted on-premise or by a third party.",
            "Single-tenant — no sharing with outsiders.",
            "Pros: full control, maximum security/compliance, customizable.",
            "Cons: huge cost, your team maintains it, limited elasticity.",
            "Use case: banks, defense, government, hospitals with strict data rules.",
            "Technologies: OpenStack, VMware, Azure Stack.",
        ]),

        heading("3. Hybrid Cloud"),

        code(
            `            ┌──────────────────┐
 PUBLIC     │  Sensitive DB,   │   PRIVATE
 CLOUD  ◄───┤  patient records ├───►  CLOUD
 web app,   │  core banking    │    (on-premise
 marketing, └──────────────────┘     data center)
 analytics

Best of both: elastic public for bursts,
private for what regulations demand.`,
            "text",
            "Mixing both worlds"
        ),

        list([
            "Combines public + private with orchestration between them.",
            "Cloud bursting: run on private, burst to public during peaks.",
            "Pros: flexibility, compliance + scale, gradual migration path.",
            "Cons: complex networking and integration skill needed.",
        ]),

        heading("4. Community Cloud"),

        list([
            "Shared by several organizations with COMMON concerns (security, compliance, mission).",
            "Examples: government departments sharing one GovCloud; hospitals in a health network.",
            "Cost split among members; policies match community needs.",
        ]),

        heading("Comparison"),

        table(
            ["Criteria", "Public", "Private", "Hybrid", "Community"],
            [
                ["Tenancy", "Many customers", "One organization", "Both", "A defined group"],
                ["Cost", "Lowest (shared)", "Highest (dedicated)", "Medium", "Split among members"],
                ["Control", "Low", "Full", "Selective", "Group-defined"],
                ["Scalability", "Massive", "Limited by hardware", "Burst to public", "Medium"],
                ["Example user", "Startup, e-commerce", "Bank, defense", "Enterprise w/ legacy + web", "Govt agencies"],
            ]
        ),

        note(
            "Reality check: over 85% of enterprises run HYBRID or MULTI-CLOUD strategies. Pure private clouds are shrinking; pure public is default for new builds; the art is orchestrating across them.",
            "info",
            "Industry Reality"
        ),

        heading("Multi-Cloud vs Hybrid"),

        table(
            ["Term", "Meaning"],
            [
                ["Hybrid Cloud", "Private (on-prem/owned) + public cloud combined"],
                ["Multi-Cloud", "Using MULTIPLE public providers (AWS + Azure) — avoids vendor lock-in"],
            ]
        ),

        keyPoints([
            "Deployment model = who owns and who can use the infrastructure.",
            "Public: shared, cheapest, massive scale (AWS, Azure, GCP).",
            "Private: dedicated to one org — control and compliance at high cost.",
            "Hybrid: private + public orchestrated; bursting for peaks.",
            "Community: shared by orgs with common compliance needs (GovCloud).",
            "Multi-cloud = multiple public providers; hybrid = private + public.",
        ]),
    ],

    {
        summary:
            "Compare the four deployment models — public, private, hybrid, community — plus multi-cloud vs hybrid, with use cases and tradeoffs.",
        minutes: 12,
        tags: ["public-cloud", "private-cloud", "hybrid", "community-cloud", "deployment-models", "important"],

        mcqs: [
            mcq(
                "A bank keeps customer records on its own data center but runs its website on AWS. This is:",
                ["Public cloud", "Private cloud", "Hybrid cloud", "Community cloud"],
                2,
                "Private (owned data center) + public (AWS) orchestrated = hybrid."
            ),
            mcq(
                "In a public cloud, the same physical server may serve multiple customers. This is called:",
                ["Single tenancy", "Multi-tenancy", "Virtual bare metal", "Colocation"],
                1,
                "Multi-tenancy — securely partitioned sharing — powers public cloud economics."
            ),
            mcq(
                "Using BOTH AWS and Azure simultaneously is called:",
                ["Hybrid cloud", "Multi-cloud", "Community cloud", "Edge computing"],
                1,
                "Multi-cloud = multiple public providers (redundancy, avoids lock-in)."
            ),
            mcq(
                "Which deployment model is typically chosen by defense/government for maximum control?",
                ["Public", "Private", "Hybrid", "SaaS"],
                1,
                "Private cloud dedicates infrastructure to one organization."
            ),
        ],

        questions: [
            qa(
                "Explain the four cloud deployment models with one suitable example each.",
                "(1) Public Cloud: infrastructure owned by a provider and shared by the general public through multi-tenancy — example: a startup hosting its e-commerce site on AWS EC2/S3, enjoying planetary scale and pay-per-hour costs. (2) Private Cloud: infrastructure operated solely for ONE organization, either on-premise or hosted — example: a nationalized bank running its core banking system on its own VMware/OpenStack data center to satisfy RBI data-residency and security mandates. (3) Hybrid Cloud: private + public clouds connected with orchestration — example: an insurance company keeping claims data on-premise (compliance) while running customer-facing portals and analytics on Azure, bursting to public capacity during renewal-season spikes ('cloud bursting'). (4) Community Cloud: infrastructure shared by organizations with common requirements — example: multiple state government departments using one shared GovCloud with common security clearances, splitting costs while meeting identical policy needs.",
                4
            ),
            qa(
                "Differentiate hybrid cloud from multi-cloud. Why do large enterprises increasingly adopt both?",
                "Hybrid cloud combines PRIVATE infrastructure (owned on-premise or dedicated) with PUBLIC cloud, orchestrated so workloads and data flow between them — its driver is balancing compliance/control with elastic scale. Multi-cloud means using MULTIPLE PUBLIC providers simultaneously — e.g., AWS for compute and GCP for data analytics — its drivers are avoiding vendor lock-in, picking best-of-breed services per domain, and geopolitical/redundancy requirements. Enterprises adopt both because no single strategy covers all workloads: a bank might run core systems on-premise (private), customer apps on AWS, analytics on GCP (multi-cloud), connected as one hybrid estate. Benefits: negotiating leverage over providers, resilience against single-provider outages, regulatory flexibility — at the cost of significant integration, networking, and skills complexity.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — Virtualization, Hypervisors & Containers
========================================================= */

const virtualizationContainers = createTopic(
    "virtualization-hypervisors-and-containers",
    "Virtualization, Hypervisors & Containers",

    [
        definition(
            "Virtualization",
            "Virtualization is the technology of creating multiple simulated environments (virtual machines) from one physical hardware system, using software called a hypervisor."
        ),

        text(
            "Virtualization is THE foundational technology of cloud computing — it's what lets a provider carve one ₹40-lakh physical server into 40 rentable virtual machines."
        ),

        heading("The Hypervisor"),

        definition(
            "Hypervisor",
            "A hypervisor (Virtual Machine Monitor) is software that creates, runs, and isolates virtual machines, allocating CPU, RAM, and disk among them."
        ),

        table(
            ["Type", "Runs On", "Examples", "Use"],
            [
                ["Type 1 (Bare-Metal)", "Directly on hardware", "VMware ESXi, Xen, Hyper-V, KVM", "Data centers / cloud providers"],
                ["Type 2 (Hosted)", "On top of a host OS", "VirtualBox, VMware Workstation", "Desktops, learning, testing"],
            ]
        ),

        code(
            `TYPE 1 (bare-metal)              TYPE 2 (hosted)
┌──────────────────────┐      ┌──────────────────────┐
│ VM1   VM2   VM3      │      │ App  App   App       │
├──────────────────────┤      ├──────────────────────┤
│    HYPERVISOR        │      │ VM1  │ VM2  │ VMware │
├──────────────────────┤      ├──────┴──────┴────────┤
│   PHYSICAL HARDWARE  │      │   HOST OS (Windows)  │
└──────────────────────┘      ├──────────────────────┤
                              │   PHYSICAL HARDWARE  │
                              └──────────────────────┘`,
            "text",
            "Type 1 vs Type 2 architecture"
        ),

        heading("Virtual Machines vs Containers"),

        table(
            ["Criteria", "Virtual Machine", "Container"],
            [
                ["Virtualizes", "Entire hardware — full OS per VM", "Only the OS — shares host kernel"],
                ["Size", "GBs (OS included)", "MBs (app + deps only)"],
                ["Boot time", "Minutes", "Seconds/milliseconds"],
                ["Isolation", "Very strong (hardware-level)", "Process-level (good, weaker)"],
                ["Density", "Few per host", "Hundreds per host"],
                ["Technology", "Hypervisor (KVM, ESXi)", "Container engine (Docker)"],
            ]
        ),

        heading("How Docker Containers Work"),

        code(
            `# Dockerfile — recipe for a container image
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
EXPOSE 3000
CMD ["npm", "start"]

# Build once, run ANYWHERE:
docker build -t my-app .
docker run -p 3000:3000 my-app`,
            "docker",
            "Container image recipe"
        ),

        list([
            "Image — a lightweight, immutable package of app + dependencies.",
            "Container — a running instance of an image.",
            "Registry — Docker Hub / ECR stores and distributes images.",
            "'Build once, run anywhere' — solves 'works on my machine' forever.",
        ]),

        heading("Kubernetes — Container Orchestration"),

        definition(
            "Kubernetes (K8s)",
            "Kubernetes is an open-source container orchestration platform that automates deployment, scaling, healing, and networking of containers across clusters of machines."
        ),

        code(
            `What K8s handles automatically:
• A container crashed?      → restarts it
• Traffic doubled?          → scales pods up
• Node died?                → reschedules pods elsewhere
• New version?              → rolling update, zero downtime
• Rollback?                 → one command`,
            "text",
            "Why orchestration matters"
        ),

        heading("The Modern Stack"),

        code(
            `Physical Server
  └── Hypervisor            (virtualization)
       └── Virtual Machine
            └── Container Engine (Docker)
                 └── Containers
                      └── Kubernetes      (orchestration)
                           └── your microservices`,
            "text",
            "Layers of abstraction"
        ),

        note(
            "Rule of thumb: VMs for strong isolation/multiple OS types; containers for fast, dense, portable app delivery. Cloud providers run containers INSIDE VMs — getting both.",
            "tip",
            "VM or Container?"
        ),

        keyPoints([
            "Virtualization carves one physical server into many VMs — cloud's foundation.",
            "Type 1 hypervisors (ESXi, KVM) run bare-metal; Type 2 (VirtualBox) run on a host OS.",
            "VMs virtualize hardware (GBs, minutes); containers virtualize the OS (MBs, seconds).",
            "Docker images package app + deps — build once, run anywhere.",
            "Kubernetes orchestrates: scaling, self-healing, rolling updates.",
        ]),
  ],

{
    summary:
    "Learn virtualization and hypervisor types, VM vs container tradeoffs, Docker images/containers, and Kubernetes orchestration.",
        minutes: 14,
            tags: ["virtualization", "hypervisor", "docker", "containers", "kubernetes", "important"],

                mcqs: [
                    mcq(
                        "Which hypervisor type runs DIRECTLY on physical hardware (used by cloud providers)?",
                        ["Type 2 (hosted)", "Type 1 (bare-metal)", "Hosted hypervisor", "Desktop virtualization"],
                        1,
                        "Type 1 — ESXi, KVM, Xen — runs without a host OS beneath it."
                    ),
                    mcq(
                        "Containers differ from VMs primarily because they:",
                        ["Include a full guest OS", "Share the host OS kernel — MBs in size, boot in seconds", "Need no CPU", "Cannot run Linux"],
                        1,
                        "OS-level virtualization skips the guest OS entirely."
                    ),
                    mcq(
                        "A Docker IMAGE is best described as:",
                        ["A running process", "An immutable package of app + dependencies", "A hypervisor", "A virtual disk of Windows"],
                        1,
                        "Images are blueprints; containers are their running instances."
                    ),
                    mcq(
                        "Kubernetes primarily provides:",
                        ["Photo editing", "Container orchestration — deployment, scaling, self-healing", "Email hosting", "SQL queries"],
                        1,
                        "K8s automates container lifecycle across machine clusters."
                    ),
                ],

                    questions: [
                        qa(
                            "Differentiate Type 1 and Type 2 hypervisors with examples and typical usage.",
                            "Type 1 (bare-metal) hypervisors install and run DIRECTLY on physical hardware, with guest VMs above them — no host operating system layer. Examples: VMware ESXi, Microsoft Hyper-V, Xen, and Linux KVM. This direct hardware access yields maximum performance and efficiency, which is why every major cloud provider (AWS runs a Xen/KVM descendant, Azure uses Hyper-V) uses Type 1 in data centers. Type 2 (hosted) hypervisors run as an APPLICATION on top of a normal host OS like Windows or macOS — examples: Oracle VirtualBox, VMware Workstation. The extra host-OS layer costs performance, but setup is trivial and it can use the desktop's devices — perfect for students, testing, and labs (running a Linux VM on your Windows laptop for practice). Exam-ready one-liner: Type 1 = hypervisor IS the OS on hardware (production); Type 2 = hypervisor is an app ON an OS (learning).",
                            4
                        ),
                        qa(
                            "Compare virtual machines and containers across size, speed, and isolation. Why does cloud infrastructure use both together?",
                            "Size: VMs package an entire guest operating system, weighing gigabytes; containers package only the application and its libraries, weighing megabytes — a Node app image might be 150 MB versus an 8 GB Ubuntu VM. Speed: VMs boot in minutes (full OS initialization); containers start in seconds or milliseconds because they share the host kernel and skip boot entirely. Isolation: VMs isolate at the hardware level via the hypervisor — a compromised VM cannot touch neighbors — the gold standard; containers isolate at the OS process level (namespaces, cgroups) — strong but a kernel vulnerability affects all containers on the host. Cloud uses both nested: providers run your containers inside firecracker/microVMs — AWS Fargate and Lambda use Firecracker, giving container-speed with VM-grade isolation. Practically: VMs for multi-OS workloads and hard security boundaries; containers for microservice density and portability.",
                            4
                        ),
                    ],
  }
);

/* =========================================================
   TOPIC 5 — AWS Core Services: EC2, S3, VPC, IAM, RDS
========================================================= */

const awsCoreServices = createTopic(
    "aws-core-services-ec2-s3-vpc-iam-rds",
    "AWS Core Services: EC2, S3, VPC, IAM, RDS",

    [
        definition(
            "AWS",
            "Amazon Web Services is the world's largest cloud platform (launched 2006), offering 200+ services from compute and storage to AI, operating in 30+ geographic regions globally."
        ),

        heading("The Global Infrastructure"),

        code(
            `REGION          e.g., Mumbai (ap-south-1)
 └── AVAILABILITY ZONES (AZ) — isolated data centers
      ├── AZ-a   (separate power/network)
      ├── AZ-b
      └── AZ-c

EDGE LOCATIONS    400+ CDN points for low-latency
                  content delivery (CloudFront)`,
            "text",
            "Regions → AZs → Edge locations"
        ),

        note(
            "Deploy across multiple AZs: if one data center fails (power/fire), your app keeps running from another. This is how cloud achieves legendary uptime.",
            "tip",
            "High Availability Rule"
        ),

        heading("1. EC2 — Elastic Compute Cloud (Servers)"),

        code(
            `Launch an instance:
  AMI (OS image: Amazon Linux / Ubuntu)
  Instance type:
    t3.micro  → 2 vCPU, 1 GB   (free tier)
    c5.xlarge → compute-heavy
    m5.large  → general purpose
    g5.xlarge → GPU (ML workloads)
  Key pair (SSH login)
  Security group (firewall rules)

Storage: EBS volumes (like virtual hard disks)`,
            "text",
            "Anatomy of an EC2 launch"
        ),

        heading("2. S3 — Simple Storage Service (Object Storage)"),

        code(
            `S3 = unlimited objects in BUCKETS
Bucket name must be globally unique:
  bca-student-portal-2025

Every object gets a URL:
  https://bca-student-portal-2025.s3.amazonaws.com/logo.png

Storage classes (cost ↓, retrieval slower ↓):
  STANDARD      → frequent access
  STANDARD-IA   → infrequent
  GLACIER       → archive, minutes-hours retrieval
  DEEP_ARCHIVE  → cheapest, 12-hour retrieval`,
            "text",
            "Buckets, objects, and classes"
        ),

        list([
            "Durability: 11 nines (99.999999999%) — objects replicated across AZs.",
            "Use for: images, backups, static website hosting, data lakes, logs.",
            "Object storage ≠ file system — no folders really, just key names.",
        ]),

        heading("3. VPC — Virtual Private Cloud (Your Private Network)"),

        code(
            `VPC 10.0.0.0/16  (your private network in AWS)
 ├── Public Subnet  10.0.1.0/24  → load balancer, web server
 │      │ (Internet Gateway attached)
 └── Private Subnet 10.0.2.0/24 → database (NO internet!)

Security Group   = instance-level firewall (allow :80, :443)
NACL             = subnet-level firewall (allow/deny rules)`,
            "text",
            "Public/private subnet design"
        ),

        heading("4. IAM — Identity & Access Management"),

        code(
            `IAM controls WHO can do WHAT on WHICH resource.

User      → one person (e.g., developer-rahul)
Group     → collection of users (e.g., dev-team)
Role      → temporary credentials for SERVICES
Policy    → JSON permission document

{
  "Effect": "Allow",
  "Action": ["s3:GetObject"],
  "Resource": "arn:aws:s3:::bca-portal/*"
}

Golden rule: LEAST PRIVILEGE — grant only
what's needed, nothing more.`,
            "json",
            "Policies enforce least privilege"
        ),

        heading("5. RDS — Managed Databases"),

        list([
            "RDS = relational databases (MySQL, PostgreSQL, MariaDB) managed by AWS.",
            "Provider handles: backups, patching, failover, read replicas.",
            "Alternative: DynamoDB — serverless NoSQL for key-value at any scale.",
        ]),

        heading("A Typical 3-Tier App on AWS"),

        code(
            `Users → Route 53 (DNS)
      → CloudFront (CDN)
        → Load Balancer (public subnet)
          → EC2 / ECS app servers (private subnet)
            → RDS MySQL (private subnet, multi-AZ)
Static assets → S3 bucket + CloudFront
Everything inside your VPC 🔒`,
            "text",
            "How the pieces fit"
        ),

        keyPoints([
            "Regions contain AZs (isolated data centers); deploy across AZs for HA.",
            "EC2 = virtual servers; t3.micro is free-tier eligible.",
            "S3 = unlimited object storage with classes from Standard to Glacier.",
            "VPC = your private network; public subnets face internet, private hold DBs.",
            "IAM users/roles/policies enforce least privilege.",
            "RDS = managed relational DB; DynamoDB = serverless NoSQL.",
        ]),
  ],

{
    summary:
    "Tour AWS fundamentals: global infrastructure (Regions/AZs), EC2 compute, S3 storage classes, VPC networking, IAM policies, and RDS.",
        minutes: 14,
            tags: ["aws", "ec2", "s3", "vpc", "iam", "rds", "important"],

                mcqs: [
                    mcq(
                        "An Availability Zone (AZ) is:",
                        ["A country", "One or more isolated data centers within a region", "A firewall rule", "An S3 folder"],
                        1,
                        "AZs have separate power/network — deploying across them gives HA."
                    ),
                    mcq(
                        "Which S3 storage class is cheapest for 12-hour-retrieval archives?",
                        ["STANDARD", "STANDARD-IA", "GLACIER DEEP ARCHIVE", "One Zone-IA"],
                        2,
                        "Deep Archive offers the lowest cost with ~12-hour retrieval time."
                    ),
                    mcq(
                        "Databases should be placed in:",
                        ["Public subnets with open internet", "Private subnets inside the VPC", "S3 buckets", "IAM groups"],
                        1,
                        "Private subnets keep data stores unreachable from the internet."
                    ),
                    mcq(
                        "The IAM principle of granting only necessary permissions is called:",
                        ["Root access", "Least privilege", "Shared responsibility", "Multi-tenancy"],
                        1,
                        "Policies should allow only the exact actions a role requires."
                    ),
                ],

                    questions: [
                        qa(
                            "Explain AWS global infrastructure: regions, availability zones, and edge locations, and how they enable high availability.",
                            "AWS organizes the world into REGIONS — fully independent geographic clusters like Mumbai (ap-south-1), Virginia, Frankfurt — each isolated for fault tolerance and data-residency compliance. Inside each region are AVAILABILITY ZONES: one or more discrete data centers with redundant power, networking, and connectivity, physically separated (km apart) so fires, floods, or fiber cuts in one AZ never affect another, yet linked by high-speed private fiber for synchronous replication. Deploying an application across 2-3 AZs — app servers in each, RDS in multi-AZ mode — means an entire data-center failure causes mere seconds of failover, not an outage: this is the architecture behind 99.99% availability. EDGE LOCATIONS (400+, separate from regions) are small CDN points-of-presence serving cached CloudFront content milliseconds from users worldwide. Choosing a region involves latency-to-users, cost differences, and legal data-location rules.",
                            4
                        ),
                        qa(
                            "Describe EC2, S3, and IAM, including how they work together in a typical web application.",
                            "EC2 (Elastic Compute Cloud) provides resizable virtual servers: you choose an AMI (OS image), an instance type (t3.micro for testing to GPU instances for ML), a key pair for SSH, and a security group acting as the firewall — then pay per second while it runs. S3 (Simple Storage Service) provides unlimited object storage in globally-named buckets with 11-nines durability; lifecycle policies automatically transition objects through storage classes (Standard → IA → Glacier) as they age. IAM (Identity and Access Management) governs identity: users and groups for people, roles for services, all constrained by JSON policies following least privilege — e.g., an EC2 instance assumes a role permitting only s3:GetObject on one bucket. Together in a web app: an IAM-authenticated EC2 app server (inside a VPC's public subnet, behind a load balancer) serves users while reading images from S3; CloudFront's edge locations cache those images globally; audit trails in CloudTrail record every IAM action.",
                            4
                        ),
                    ],
  }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit1Topics = [
    introToCloud,
    serviceModels,
    deploymentModels,
    virtualizationContainers,
    awsCoreServices,
];