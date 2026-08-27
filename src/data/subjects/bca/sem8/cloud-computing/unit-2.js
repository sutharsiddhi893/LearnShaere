/* =========================================================
   BCA • SEM 8 • Cloud Computing
   UNIT 2 — Cloud Security, Serverless/Microservices, Pricing, DevOps & Careers
========================================================= */

import {
  createTopic,
  heading,
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
   TOPIC 1 — Cloud Security & The Shared Responsibility Model
========================================================= */

const cloudSecurity = createTopic(
    "cloud-security-and-shared-responsibility",
    "Cloud Security & The Shared Responsibility Model",

    [
        definition(
            "Shared Responsibility Model",
            "The shared responsibility model divides security duties between cloud provider and customer: the provider secures the cloud infrastructure itself ('security OF the cloud'), while the customer secures everything they put in it ('security IN the cloud')."
        ),

        heading("Who Is Responsible for What"),

        code(
            `        SECURITY OF THE CLOUD (Provider)
┌──────────────────────────────────────────┐
│ Hardware, data centers, hypervisors,      │
│ physical security, network infrastructure │
└──────────────────────────────────────────┘
        SECURITY IN THE CLOUD (You!)
┌──────────────────────────────────────────┐
│ Data, IAM users/policies, OS patching    │
│ (IaaS), app config, encryption choices,  │
│ firewall (security groups) rules         │
└──────────────────────────────────────────┘

SaaS: provider handles almost everything
IaaS: YOU handle OS upward — the model shifts
      with the service model!`,
            "text",
            "The dividing line"
        ),

        note(
            "The most dangerous cloud misconception: 'We moved to AWS, so AWS secures our data.' AWS secures its data centers — NOT your passwords, buckets, or IAM policies. Most breaches are customer-side misconfigurations.",
            "warning",
            "Reality of Cloud Breaches"
        ),

        heading("The Classic Failure: Public S3 Buckets"),

        code(
            `# Misconfiguration that leaked millions of records
Bucket policy: "Principal": "*"   ← ANYONE on earth
                "Action": "s3:GetObject"

Real incidents: Accenture, Verizon, Pentagon
folders exposed via one wrong setting.

# Fix: private by default, grant access
# only to specific IAM roles/users.`,
            "json",
            "One line = one data breach"
        ),

        heading("IAM Best Practices"),

        list([
            "NEVER use the root account for daily work — create IAM users/roles.",
            "Enable MFA (multi-factor authentication) on every identity.",
            "Least privilege policies — allow only exact required actions.",
            "Rotate access keys; prefer roles over long-lived keys.",
            "Audit with CloudTrail logs — every API call is recorded.",
        ]),

        heading("Data Encryption Everywhere"),

        table(
            ["State", "Meaning", "Mechanism"],
            [
                ["At Rest", "Data sitting on disk/S3/DB", "AES-256; KMS-managed keys; EBS/S3/RDS encryption"],
                ["In Transit", "Data moving over networks", "TLS 1.3 (HTTPS); VPC endpoints keep traffic inside AWS"],
            ]
        ),

        heading("Network Security Layers"),

        code(
            `Internet
   │
   ├─ WAF (Web App Firewall)     → blocks SQLi/XSS at edge
   ├─ CloudFront + Shield        → DDoS absorption
   ▼
Load Balancer (public subnet)
   │
   ├─ Security Group (stateful) → instance firewall
   ▼
App servers (private subnet possible)
   │
   ├─ NACL (stateless)          → subnet firewall
   ▼
Database (private subnet, no internet) 🔒`,
            "text",
            "Defense in depth on AWS"
        ),

        heading("Compliance Certifications"),

        list([
            "ISO 27001 — information security management.",
            "SOC 2 — controls for service organizations.",
            "PCI DSS — payment card data.",
            "HIPAA — US healthcare data.",
            "GDPR/DPDP alignment — personal data handling.",
        ]),

        keyPoints([
            "Provider secures OF the cloud; you secure IN the cloud.",
            "Responsibility shifts with service model: IaaS = you patch the OS.",
            "Top breach cause: customer misconfiguration (public buckets, open SGs).",
            "IAM golden rules: no root daily use, MFA everywhere, least privilege.",
            "Encrypt at rest (AES-256/KMS) and in transit (TLS 1.3).",
        ]),
    ],

    {
        summary:
            "Master cloud security: the shared responsibility model, IAM best practices, encryption states, network defense layers, and compliance.",
        minutes: 13,
        tags: ["security", "shared-responsibility", "iam", "encryption", "compliance", "important"],

        mcqs: [
            mcq(
                "Under shared responsibility, patching the OS of an EC2 instance is:",
                ["AWS's job", "The CUSTOMER's job (IaaS responsibility)", "Automatic always", "Nobody's job"],
                1,
                "IaaS hands you the VM — OS patching and hardening belong to you."
            ),
            mcq(
                "The most common cause of cloud data breaches is:",
                ["AWS data center fires", "Customer misconfiguration (public buckets, weak IAM)", "Cosmic rays", "Inevitable hardware failure"],
                1,
                "Provider-side failures are rare; one-line customer misconfigurations dominate."
            ),
            mcq(
                "Encrypting data 'at rest' means protecting it:",
                ["While downloading", "While stored on disk/S3/database", "Only in RAM", "Never — impossible"],
                1,
                "AES-256 with KMS keys protects stored data; TLS covers transit."
            ),
            mcq(
                "Which practice must NEVER be done with the AWS root account?",
                ["Enable MFA", "Daily development and operations", "Billing management", "Closing the account"],
                1,
                "Root is for break-glass tasks only; create IAM identities for work."
            ),
        ],

        questions: [
            qa(
                "Explain the Shared Responsibility Model with SaaS vs IaaS examples.",
                "The model splits security: the provider is always responsible for securing the cloud's foundation — data centers, hardware, network, and hypervisors — while the customer is responsible for securing everything they configure and store. The dividing line MOVES with the service model. SaaS (Gmail): the provider manages nearly everything — OS, patches, apps — the customer only manages user accounts, passwords, and data sharing settings; a breach from weak passwords is the customer's issue. IaaS (EC2): AWS secures the physical host and hypervisor, but the customer handles EVERYTHING above: OS installation and patching, firewall (security group) rules, application security, identity management, and data encryption. The practical consequence: moving from on-premise to IaaS does NOT eliminate your security work — it relocates it. Most headline cloud breaches (public S3 buckets, stolen access keys) are customer-side failures within THEIR half of the model.",
                4
            ),
            qa(
                "List and explain five IAM security best practices every cloud user must follow.",
                "(1) Never use the root account for daily work — root has unrestricted power and its compromise is catastrophic; create IAM users/roles with limited permissions and keep root MFA-protected for emergencies. (2) Enable MFA on all identities — a stolen password alone then cannot log in; this blocks the vast majority of account-takeover attacks. (3) Apply least-privilege policies — each user/role gets JSON policies granting exactly the actions on exactly the resources needed (s3:GetObject on one bucket, never s3:* on *). (4) Prefer roles over long-lived access keys — roles issue temporary credentials that auto-expire; hardcoded permanent keys leaked into GitHub are a leading breach vector. (5) Audit everything with CloudTrail — every API call is logged; periodic reviews of 'who did what' catch rogue permissions and anomalous activity early. Bonus: use IAM Access Analyzer to detect unintended external exposure automatically.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — Microservices, Serverless Architecture & API Gateway
========================================================= */

const microservicesServerless = createTopic(
    "microservices-serverless-and-api-gateway",
    "Microservices, Serverless Architecture & API Gateway",

    [
        definition(
            "Microservices",
            "Microservices is an architectural style that structures an application as a collection of small, independent services — each owning one business capability, deployable and scaling on its own."
        ),

        heading("Monolith vs Microservices"),

        code(
            `MONOLITH                    MICROSERVICES
┌─────────────────┐         ┌────┐ ┌────┐ ┌────┐
│  ALL code in    │         │Auth│ │Cart│ │Pay │
│  ONE deployable │   vs    └────┘ └────┘ └────┘
│  Auth+Cart+Pay  │          each: own DB, own
│  +UI  together  │          deploy, own scaling
└─────────────────┘
Change 1 line =                 Fix payment bug =
redeploy EVERYTHING            deploy Pay service only`,
            "text",
            "One unit vs many services"
        ),

        table(
            ["Criteria", "Monolith", "Microservices"],
            [
                ["Deploy", "Everything at once", "Each service independently"],
                ["Scaling", "Scale whole app", "Scale only the hot service"],
                ["Failure", "One bug can crash all", "Payment down ≠ catalog down"],
                ["Tech", "One stack forced", "Each service picks its stack"],
                ["Complexity", "Simple at start", "Needs orchestration, networking"],
            ]
        ),

        note(
            "Don't start with microservices! A monolith is correct until team size and deployment pain demand splitting. 'Monolith first, split on real pain' — even Amazon evolved this way.",
            "tip",
            "Architecture Maturity"
        ),

        heading("Serverless Microservices on AWS"),

        code(
            `Client/App
   │
API Gateway        ← one front door, routing,
   │                  auth, throttling, rate limits
   ├──► Lambda: /orders      (Node.js)
   ├──► Lambda: /payments    (Python)
   └──► Lambda: /notify      (sends email/SMS)
            │
        DynamoDB  ← serverless NoSQL
            │
        SNS/SQS   ← events & queues

ZERO servers managed. Scale per function.
Pay per request.`,
            "text",
            "A complete serverless backend"
        ),

        heading("API Gateway"),

        list([
            "Single entry point: api.example.com/orders, /payments.",
            "Handles: authentication (Cognito/JWT), throttling, CORS, caching.",
            "Maps HTTP routes to Lambda functions or containers.",
            "Generates SDKs and API documentation automatically.",
        ]),

        heading("Event-Driven Patterns"),

        table(
            ["Service", "Role"],
            [
                ["SNS (Pub/Sub)", "Broadcast events to many subscribers"],
                ["SQS (Queue)", "Buffer tasks — decouple producers/consumers, retry failures"],
                ["EventBridge", "Route events by rules across services"],
                ["Step Functions", "Orchestrate multi-step workflows with state"],
            ]
        ),

        code(
            `Order flow (event-driven):
API Gateway → Lambda(order) → DynamoDB
                  └─ event → SNS ─┬→ Lambda: send email
                                  └→ SQS → Lambda: update inventory

If inventory service is DOWN, messages
WAIT in the queue — nothing is lost.`,
            "text",
            "Queues absorb failures"
        ),

        heading("Serverless Trade-offs"),

        table(
            ["Pros", "Cons"],
            [
                ["Zero server ops, zero idle cost", "Cold starts (first-request latency)"],
                ["Auto-scales instantly to any load", "15-min execution limit"],
                ["Built-in HA across AZs", "Vendor lock-in deepens"],
                ["Perfect for spiky/event workloads", "Long-running/stateful apps fit poorly"],
            ]
        ),

        keyPoints([
            "Microservices = independent services per business capability.",
            "Trade monolith simplicity for deploy/scaling/failure isolation.",
            "API Gateway fronts Lambdas: routing, auth, throttling.",
            "SQS queues decouple services and absorb downstream failures.",
            "Serverless: zero ops + per-request billing, but cold starts + limits.",
        ]),
  ],

{
    summary:
    "Design modern backends: microservices vs monolith tradeoffs, API Gateway, Lambda-based serverless architecture, and event-driven queues.",
        minutes: 13,
            tags: ["microservices", "serverless", "api-gateway", "lambda", "sqs", "architecture", "important"],

                mcqs: [
                    mcq(
                        "In microservices, fixing a payment bug requires:",
                        ["Redeploying the whole application", "Deploying only the payment service", "Restarting the database", "Rewriting the UI"],
                        1,
                        "Independent deployability is microservices' core benefit."
                    ),
                    mcq(
                        "API Gateway's role in serverless architecture is:",
                        ["Storing data", "Single managed entry point — routing, auth, throttling", "Compiling code", "Physical firewall"],
                        1,
                        "Gateway fronts functions and enforces cross-cutting concerns."
                    ),
                    mcq(
                        "A 'cold start' in serverless refers to:",
                        ["Server freezing", "Latency when a function runs for the first time after idle", "Database corruption", "Billing error"],
                        1,
                        "The provider spins up a fresh container — milliseconds of delay."
                    ),
                    mcq(
                        "SQS queues improve resilience because:",
                        ["They delete failed messages", "Consumers can be down while messages safely wait and retry", "They remove the need for APIs", "They encrypt Lambda"],
                        1,
                        "Queues decouple producers from consumers, absorbing outages."
                    ),
                ],

                    questions: [
                        qa(
                            "Compare monolithic and microservices architectures. When should a team choose each?",
                            "A monolith packages the entire application — UI, business logic, data access — into ONE deployable unit: simplest to develop, test, and run early on; but a single bug can crash everything, scaling means replicating the whole app, one-line changes require full redeployment, and the team collides on a shared codebase. Microservices decompose the system into independent services — Auth, Cart, Payments — each owning its code, database, deployment, and scaling: failures stay isolated (payment outage ≠ catalog outage), hot services scale individually, teams own services autonomously, and each may pick its ideal tech stack — purchased at the price of distributed-systems complexity: network latency, inter-service security, orchestration, and eventual consistency. Choose monolith for new/small products and teams under ~15 engineers — velocity is king. Split into microservices when deployment collisions, independent scaling needs, or team boundaries create real pain. Most successful systems began as well-structured monoliths.",
                            4
                        ),
                        qa(
                            "Describe a complete serverless order-processing system on AWS using API Gateway, Lambda, DynamoDB, SNS, and SQS.",
                            "Flow: (1) A mobile app POSTs an order to API Gateway — which validates, throttles (rate limits), and authenticates via Cognito-issued JWT tokens. (2) Gateway routes to the createOrder Lambda (Node.js), which writes the order to DynamoDB — a serverless NoSQL table scaling to any load with single-digit-ms latency. (3) Lambda publishes an OrderCreated event to SNS (pub/sub), fanning out to multiple subscribers in parallel. (4) One subscriber Lambda sends confirmation email/SMS. (5) Another writes to an SQS queue consumed by an inventory-update Lambda — if that service is DOWN, messages persist in the queue (up to 14 days) and process on recovery; failed processing retries automatically with dead-letter queues capturing poison messages. (6) Step Functions can orchestrate multi-step flows (charge → reserve → ship) with visual state. Benefits: zero servers, per-invocation billing, auto-scaling from 10 to 10,000 orders/hour — trade-offs: occasional cold starts and per-function size limits.",
                            4
                        ),
                    ],
  }
);

/* =========================================================
   TOPIC 3 — Cloud Pricing, TCO & Migration Strategies
========================================================= */

const pricingMigration = createTopic(
    "cloud-pricing-tco-and-migration-strategies",
    "Cloud Pricing, TCO & Migration Strategies",

    [
        definition(
            "TCO",
            "Total Cost of Ownership is the complete cost of a system over its lifetime — hardware, software, power, cooling, staff, and downtime — used to compare on-premise versus cloud objectively."
        ),

        heading("Cloud Pricing Fundamentals"),

        table(
            ["Model", "You Pay For", "Best For"],
            [
                ["On-Demand", "Per second/hour, no commitment", "Spiky, unpredictable workloads"],
                ["Reserved (1-3 yr)", "Upfront commitment → up to 72% off", "Steady, known workloads"],
                ["Spot", "Spare capacity, up to 90% off — can be reclaimed", "Fault-tolerant: batch, CI, ML training"],
                ["Savings Plans", "Commit to $/hour spend → discounts", "Flexible steady usage"],
            ]
        ),

        code(
            `t3.medium (4 GB) Mumbai, approx:
  On-Demand   ≈ ₹5/hour
  1-yr Reserved ≈ ₹2.2/hour   (−58%)
  Spot         ≈ ₹1.5/hour    (−70%, interruptible)

Same server — 3x price range based
purely on COMMITMENT and flexibility.`,
            "text",
            "Why commitment is cheaper"
        ),

        heading("The Free Tier (Student Gold)"),

        list([
            "EC2: 750 hrs/month t2.micro/t3.micro for 12 months.",
            "S3: 5 GB standard storage.",
            "RDS: 750 hrs db.t2.micro.",
            "Lambda: 1M requests + 400,000 GB-sec EVERY month, forever.",
            "Perfect for BCA projects — a full-stack app costs ₹0.",
        ]),

        heading("TCO — The Hidden On-Premise Costs"),

        code(
            `On-premise 'server ₹4 lakh' actually costs:
  Hardware           ₹4,00,000
  Power + cooling     ₹60,000/yr
  Admin staff        ₹6,00,000/yr
  Failures/downtime  unpredictable
  Idle capacity      ~70% wasted

Cloud equivalent: hourly billing,
zero admin, pay ONLY for used %`,
            "text",
            "TCO looks beyond sticker price"
        ),

        heading("The 6 R's of Cloud Migration"),

        table(
            ["Strategy", "Meaning", "When"],
            [
                ["Rehost ('Lift & Shift')", "Move VMs as-is to cloud", "Fastest; legacy apps unchanged"],
                ["Replatform ('Lift & Reshape')", "Minor optimizations — managed DB, containers", "Some cloud benefits, low risk"],
                ["Refactor/Re-architect", "Rebuild as cloud-native microservices", "Max value, max effort"],
                ["Repurchase", "Drop custom app → buy SaaS", "CRM/HR → Salesforce instead"],
                ["Retire", "Decommission useless systems", "Studies find ~10% can just die"],
                ["Retain", "Keep on-premise (compliance/latency)", "Not everything belongs in cloud"],
            ]
        ),

        heading("Cost Optimization Practices"),

        steps([
            "Right-size instances — match type to actual CPU/RAM usage (CloudWatch data).",
            "Buy Savings Plans/Reserved for steady 24×7 workloads.",
            "Auto-stop dev/test instances at night and weekends.",
            "Use Spot for CI pipelines and batch jobs.",
            "Set Budgets & billing alarms — surprise ₹80,000 bills are real.",
            "Delete orphaned EBS volumes, old snapshots, unattached Elastic IPs.",
        ]),

        note(
            "The #1 beginner cloud mistake: launching resources, forgetting them, and discovering the bill a month later. Set a billing alarm on DAY ONE — even at ₹100.",
            "warning",
            "Bill Shock Prevention"
        ),

        keyPoints([
            "Pricing models: On-Demand (flexible), Reserved (−72%), Spot (−90%, interruptible).",
            "Free tier: 750 EC2 hrs + 1M Lambda requests — enough for any student project.",
            "TCO includes power, cooling, staff, downtime — not just hardware price.",
            "6 R's: Rehost, Replatform, Refactor, Repurchase, Retire, Retain.",
            "Right-size + budgets + auto-stop = cost discipline.",
        ]),
  ],

{
    summary:
    "Control cloud economics: pricing models (On-Demand/Reserved/Spot), free tier, TCO analysis, the 6 R's of migration, and cost optimization.",
        minutes: 12,
            tags: ["pricing", "tco", "migration", "cost-optimization", "free-tier", "important"],

                mcqs: [
                    mcq(
                        "Which pricing model gives up to 90% discount but can be interrupted anytime?",
                        ["On-Demand", "Reserved", "Spot", "Free tier"],
                        2,
                        "Spot uses provider spare capacity — reclaimable with 2-min notice."
                    ),
                    mcq(
                        "Lifting existing VMs to the cloud unchanged is the ______ migration strategy.",
                        ["Refactor", "Rehost (Lift & Shift)", "Repurchase", "Retain"],
                        1,
                        "Rehost moves machines as-is — fastest path, least cloud-native."
                    ),
                    mcq(
                        "TCO analysis is important because it counts:",
                        ["Only hardware price", "All lifetime costs: power, cooling, staff, downtime", "Only cloud bills", "Marketing costs"],
                        1,
                        "Sticker price hides most of on-premise ownership cost."
                    ),
                    mcq(
                        "The recommended FIRST action for every new cloud account is:",
                        ["Launch 10 EC2 instances", "Set a billing alarm/budget", "Buy 3-year reservations", "Delete the root account"],
                        1,
                        "Billing alarms catch runaway costs before they grow."
                    ),
                ],

                    questions: [
                        qa(
                            "Compare On-Demand, Reserved, and Spot pricing with appropriate workload examples.",
                            "On-Demand: pay per second/hour with zero commitment — full price (≈₹5/hr for t3.medium) for total flexibility; right for unpredictable or short-lived workloads like a product launch with unknown traffic, dev experiments, and disaster-recovery standby that must start instantly. Reserved (1-3 year commitment): pre-commit to capacity for up to 72% discount — right for steady 24×7 workloads like production databases and always-on APIs; the commitment matches predictable baseline load. Spot: bid on providers' spare capacity for up to 90% off, but AWS can reclaim the instance with a 2-minute warning — right for interruption-tolerant workloads: CI/CD build fleets (a restarted build is cheap), batch video processing, big-data analysis, and ML training with checkpointing. A mature setup combines all three: Reserved for baseline, On-Demand for spikes beyond it, Spot for anything retryable — cutting total compute spend by half or more.",
                            4
                        ),
                        qa(
                            "Explain the 6 R's of cloud migration with one example each.",
                            "(1) Rehost (Lift & Shift): move the VM as-is to EC2 — an old HR portal migrated image-for-image over a weekend, no code changes, instant data-center exit. (2) Replatform (Lift & Reshape): small optimizations en route — the same portal, but its MySQL moves to RDS-managed and the app containerizes on ECS, gaining automated backups without rewriting. (3) Refactor/Re-architect: rebuild cloud-native — decomposing a monolithic booking engine into Lambda-based microservices with DynamoDB, gaining elastic scale for flash sales at significant engineering cost. (4) Repurchase: drop self-built software for SaaS — retiring the internal expense-report tool and buying FreshBooks/QuickBooks subscriptions. (5) Retire: audit reveals a legacy attendance system nobody uses since the app launched — decommission it entirely (typically ~10% of the estate). (6) Retain: keep the patient-records system on-premise where regulation demands physical control or latency to lab hardware matters — revisit next year.",
                            4
                        ),
                    ],
  }
);

/* =========================================================
   TOPIC 4 — DevOps, CI/CD & Infrastructure as Code
========================================================= */

const devopsCICD = createTopic(
    "devops-cicd-and-infrastructure-as-code",
    "DevOps, CI/CD & Infrastructure as Code",

    [
        definition(
            "DevOps",
            "DevOps is a culture and set of practices that unifies software development (Dev) and IT operations (Ops), emphasizing automation, collaboration, and rapid, reliable delivery."
        ),

        heading("The Problem DevOps Solves"),

        code(
            `BEFORE:  Dev team finishes → throws code OVER THE WALL
         → Ops deploys manually → 'WORKS ON MY MACHINE!'
         → deployments = fear, Friday-night outages

AFTER DevOps:
  shared ownership + automation
  → deploy 50 times/day, each one boring ✅`,
            "text",
            "Wall demolition"
        ),

        heading("The CI/CD Pipeline"),

        code(
            `git push
  │
  ▼
[CI] Continuous Integration
  ├── automated tests
  ├── lint / code quality
  ├── build artifact / Docker image
  └── push to registry
  │
  ▼
[CD] Continuous Delivery/Deployment
  ├── deploy to staging automatically
  ├── integration tests
  └── production:
       Delivery → one-click approval
       Deployment → fully automatic
  │
  ▼
Monitor → feedback → improve (loop forever)`,
            "text",
            "From push to production"
        ),

        heading("A Real CI/CD Config (GitHub Actions)"),

        code(
            `# .github/workflows/deploy.yml
name: Deploy to AWS

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Install & Test
        run: |
          npm ci
          npm test

      - name: Build Docker image
        run: docker build -t myapp:\${{ github.sha }} .

      - name: Deploy
        run: ./deploy.sh   # push to ECR → update ECS`,
            "yaml",
            "Push to main = tested, built, deployed"
        ),

        heading("Infrastructure as Code (IaC)"),

        definition(
            "Infrastructure as Code",
            "IaC defines and provisions infrastructure (servers, networks, databases) through machine-readable code files instead of manual console clicks — enabling version control, review, and repeatable environments."
        ),

        code(
            `# Terraform example — one file = one whole network+server
resource "aws_instance" "app" {
  ami           = "ami-0e472ba40eb1c8c20"
  instance_type = "t3.micro"

  tags = { Name = "bca-app-server" }
}

# terraform plan  → preview changes
# terraform apply → create for real
# Same file builds identical dev AND prod`,
            "hcl",
            "Terraform — infrastructure in code"
        ),

        list([
            "Declarative tools: Terraform (multi-cloud), CloudFormation (AWS-native).",
            "Benefits: repeatable, reviewable, versioned, no click-drift, disposable envs.",
            "Immutable infrastructure: replace servers, never patch-in-place.",
        ]),

        heading("Monitoring & Observability"),

        table(
            ["Concern", "Tool / Service", "Question Answered"],
            [
                ["Metrics", "CloudWatch, Grafana", "Is CPU/memory/latency healthy?"],
                ["Logs", "CloudWatch Logs, ELK", "What exactly happened?"],
                ["Traces", "X-Ray, Jaeger", "Where in the request path is it slow?"],
                ["Alarms", "SNS alerts", "Who gets paged when things break?"],
            ]
        ),

        heading("Core DevOps Practices"),

        list([
            "Small, frequent merges — avoid month-long branches.",
            "Everything automated: tests, builds, deployments, infra.",
            "DORA metrics: deployment frequency, lead time, MTTR, change-failure rate.",
            "Blameless postmortems — learn from failures, don't punish.",
        ]),

        note(
            "Cloud + DevOps are inseparable: cloud gives APIs for everything, and IaC/CI-CD exploit those APIs to make infrastructure as agile as code.",
            "info",
            "Why Cloud Enables DevOps"
        ),

        keyPoints([
            "DevOps merges Dev + Ops culture: automation, shared ownership, fast safe delivery.",
            "CI: every push is auto-tested and built; CD: deploys flow to staging/production.",
            "GitHub Actions / Jenkins automate the pipeline on git push.",
            "IaC (Terraform) makes infrastructure versioned, reviewable, repeatable.",
            "Monitor with metrics, logs, traces, alarms — then iterate.",
        ]),
  ],

{
    summary:
    "Understand DevOps culture, CI/CD pipelines with GitHub Actions, Infrastructure as Code with Terraform, and monitoring practices.",
        minutes: 13,
            tags: ["devops", "ci-cd", "github-actions", "terraform", "iac", "monitoring", "important"],

                mcqs: [
                    mcq(
                        "Continuous Integration primarily means:",
                        ["Manual monthly releases", "Every push auto-tested and built, catching breakage early", "One giant yearly merge", "Only ops team deploys"],
                        1,
                        "CI integrates code constantly — tests run on every commit."
                    ),
                    mcq(
                        "Terraform is used for:",
                        ["Writing unit tests", "Provisioning cloud infrastructure from code files", "Designing UIs", "Email automation"],
                        1,
                        "IaC: describe servers/networks in HCL; apply creates them via APIs."
                    ),
                    mcq(
                        "Continuous DEPLOYMENT differs from Continuous DELIVERY because:",
                        ["It's slower", "Every passing build deploys to production with NO manual approval", "It skips testing", "It needs no cloud"],
                        1,
                        "Delivery stops at one-click release; deployment is fully automatic."
                    ),
                    mcq(
                        "Which DORA-style metric measures how quickly service is restored after failure?",
                        ["Deployment frequency", "Lead time", "MTTR (mean time to restore)", "Code coverage"],
                        2,
                        "MTTR captures recovery speed — a core reliability signal."
                    ),
                ],

                    questions: [
                        qa(
                            "Explain the CI/CD pipeline stages from git push to production, including what automation happens at each stage.",
                            "(1) Trigger: a developer pushes/merges code to the repository. (2) Continuous Integration begins: the pipeline automatically checks out code, installs dependencies, runs linters (code style) and the full unit/integration test suite — a failing test BLOCKS the pipeline, keeping main always releasable. (3) Build: the application is compiled/packaged — typically into a Docker image — tagged with the commit SHA and pushed to a registry (ECR/Docker Hub); artifacts are immutable and traceable. (4) Continuous Delivery stage: the image auto-deploys to a STAGING environment where smoke/integration tests run against real infrastructure. (5) Release: with Continuous Delivery, a human approves the production promotion with one click; with Continuous Deployment, passing staging promotes automatically — both frequently use blue-green or rolling strategies for zero downtime, with instant rollback to the previous image on alarms. (6) Post-deploy: monitoring (metrics, logs, traces) feeds alerts and dashboards, closing the loop. Net effect: releases become frequent, boring, and reversible — the opposite of Friday-night fear.",
                            4
                        ),
                        qa(
                            "What is Infrastructure as Code? Why is it superior to manually configuring cloud resources via the console?",
                            "IaC defines infrastructure — VPCs, subnets, EC2 instances, databases, IAM roles — in declarative code files (Terraform HCL, CloudFormation YAML) that tools translate into API calls provisioning everything. Superiority over console-clicking: (1) Repeatability — the same file builds IDENTICAL dev, staging, and prod environments; clicks inevitably drift. (2) Version control — infra changes go through Git: diffed, code-reviewed, revertible, with full history of who changed what. (3) Speed & scale — spin up an entire 15-resource environment in minutes; destroy it just as fast (disposable environments for testing). (4) Documentation — the repo IS living, always-accurate infrastructure documentation. (5) Disaster recovery — rebuild a whole region by re-running code, not tribal memory. (6) No snowflakes — servers are replaced from code (immutable) rather than hand-patched, eliminating configuration drift. Manual clicking doesn't scale beyond one person's memory; IaC scales infrastructure the way Git scaled source code.",
                            4
                        ),
                    ],
  }
);

/* =========================================================
   TOPIC 5 — Cloud Careers, Certifications & Future Trends
========================================================= */

const cloudCareers = createTopic(
    "cloud-careers-certifications-and-future-trends",
    "Cloud Careers, Certifications & Future Trends",

    [
        definition(
            "Cloud Career",
            "Cloud careers are roles building, operating, or securing cloud-based systems — spanning developers, DevOps engineers, architects, and security specialists."
        ),

        heading("The Career Ladder"),

        code(
            `BCA Graduate
 └─► Cloud/DevOps Support (L1)          3-6 LPA
      └─► Cloud Engineer / DevOps        6-14 LPA
           └─► Senior / SRE             14-25 LPA
                └─► Cloud Architect     25-50+ LPA
                     └─► Principal / CTO-track

Parallel: Cloud Security Engineer,
          FinOps (cost optimization),
          Platform Engineer`,
            "text",
            "Growth path"
        ),

        heading("Roles & Skills"),

        table(
            ["Role", "Core Skills", "Day-to-Day"],
            [
                ["Cloud Engineer", "Linux, networking, AWS/Azure core, scripting", "Build & maintain infra, IaC"],
                ["DevOps Engineer", "CI/CD, Docker, K8s, Terraform, monitoring", "Automate build→deploy pipelines"],
                ["Cloud Architect", "Design patterns, cost, security, multi-cloud", "Design systems with business"],
                ["Cloud Security Eng.", "IAM, encryption, compliance, threat modeling", "Secure & audit cloud estates"],
                ["SRE", "Coding + ops + reliability engineering, SLOs", "Keep systems up; automate toil"],
                ["FinOps Analyst", "Pricing models, tagging, analytics", "Optimize spend across accounts"],
            ]
        ),

        heading("Certification Ladder (AWS Track)"),

        table(
            ["Level", "Certification", "Target"],
            [
                ["Foundational", "AWS Cloud Practitioner", "Students — vocabulary + core services"],
                ["Associate", "Solutions Architect Associate", "The career-launching cert"],
                ["Associate", "Developer / SysOps Associate", "Specialize per role"],
                ["Professional", "Architect / DevOps Pro", "Senior engineers"],
                ["Specialty", "Security / ML / Database", "Niche expertise"],
            ]
        ),

        note(
            "Certifications open interview doors; PROJECTS win the job. The winning BCA combo: 1 foundational cert + 3 deployed projects (with IaC + CI/CD) + Linux/scripting fluency.",
            "tip",
            "Student Strategy"
        ),

        heading("The Student Portfolio Plan"),

        steps([
            "Project 1 — Static website: S3 + CloudFront + custom domain (₹0).",
            "Project 2 — Full-stack app: EC2/ECS + RDS + VPC, deployed via Terraform.",
            "Project 3 — Serverless API: API Gateway + Lambda + DynamoDB with GitHub Actions CI/CD.",
            "Document each with architecture diagrams + cost breakdowns in the README.",
        ]),

        heading("Future Trends"),

        table(
            ["Trend", "What It Means"],
            [
                ["Edge computing", "Processing near users — 5G, IoT, latency-critical apps"],
                ["AI/ML on cloud", "Training GPUs (like AWS Trainium) — AI runs IN the cloud"],
                ["Serverless-first", "Default architecture for new builds"],
                ["FinOps maturity", "Cost engineering as a first-class discipline"],
                ["Sovereign cloud", "Country-specific regions for data laws (India's push)"],
                ["Green cloud", "Carbon-aware computing, renewable-powered regions"],
            ]
        ),

        heading("Why Cloud Skills Are Future-Proof"),

        list([
            "Every company is a software company — and most software now runs on cloud.",
            "AI boom = cloud boom: model training and serving demand exploding.",
            "Cloud skills compound: Linux + networking + IaC transfer across ALL providers.",
            "India specifically: massive cloud adoption + data-center investments (Mumbai, Hyderabad).",
        ]),

        keyPoints([
            "Ladder: Support → Cloud/DevOps Engineer → SRE/Senior → Architect.",
            "Core skills: Linux, networking, one provider deeply, Docker/K8s, Terraform, CI/CD.",
            "Cert path: Cloud Practitioner → Solutions Architect Associate.",
            "Portfolio beats paper: 3 deployed projects with IaC and pipelines.",
            "Future: edge, AI-on-cloud, serverless-first, FinOps, sovereign cloud.",
        ]),
  ],

{
    summary:
    "Plan your cloud career: role ladder and skills, AWS certification path, student portfolio projects, and future industry trends.",
        minutes: 12,
            tags: ["careers", "certifications", "aws", "devops", "portfolio", "future-trends", "important"],

                mcqs: [
                    mcq(
                        "The recommended FIRST AWS certification for a BCA student is:",
                        ["Solutions Architect Professional", "Cloud Practitioner", "Security Specialty", "Advanced Networking"],
                        1,
                        "Practitioner covers vocabulary and core services — the perfect entry."
                    ),
                    mcq(
                        "A Cloud Architect's primary responsibility is:",
                        ["Writing CSS", "Designing overall system structure balancing cost, security, and scale", "Answering support tickets", "Recruiting developers"],
                        1,
                        "Architecture = cross-cutting design decisions across business needs."
                    ),
                    mcq(
                        "FinOps as a cloud discipline focuses on:",
                        ["Finance software only", "Optimizing and governing cloud SPEND", "Frontend performance", "Machine learning"],
                        1,
                        "FinOps brings financial accountability to variable cloud billing."
                    ),
                    mcq(
                        "Edge computing primarily reduces:",
                        ["Storage durability", "LATENCY by processing near the user", "Developer salaries", "Certificate costs"],
                        1,
                        "Closer compute = faster response for IoT/5G/real-time apps."
                    ),
                ],

                    questions: [
                        qa(
                            "Describe the career path from BCA graduate to Cloud Architect, with skills and certifications at each stage.",
                            "Stage 1 — Foundation (0-1 yr): master Linux administration, networking basics (TCP/IP, DNS, HTTP), one scripting language (Python/Bash), and cloud fundamentals; earn AWS Cloud Practitioner; land roles like cloud/technical support. Stage 2 — Cloud/DevOps Engineer (1-4 yrs): go deep on one provider (Solutions Architect Associate), learn Docker, Kubernetes, Terraform, and CI/CD (GitHub Actions); day job becomes building and automating infrastructure; salary band roughly 6-14 LPA. Stage 3 — Senior Engineer/SRE (4-7 yrs): own reliability — design SLOs, incident response, advanced networking, multi-account architectures; Professional-level certifications here; 14-25 LPA. Stage 4 — Cloud Architect (7+ yrs): the role shifts from building to DESIGNING — translating business requirements into secure, scalable, cost-optimized systems; balancing trade-offs across services, regions, and providers; continuous stakeholder communication; 25-50+ LPA. Throughout: every stage demands learning — cloud services evolve quarterly, and architects are paid for judgment built from hands-on years.",
                            4
                        ),
                        qa(
                            "Why are cloud skills considered future-proof, and which emerging trends should students track?",
                            "Future-proofing arguments: (1) Universality — virtually every new application is born cloud-native; banks, retailers, and governments are all mid-migration, ensuring decades of demand. (2) The AI explosion runs ON cloud infrastructure — model training (GPU fleets like Trainium) and serving scale only via cloud economics, coupling AI growth directly to cloud growth. (3) Skill transferability — Linux, networking, containers, and IaC concepts are provider-agnostic; AWS depth converts to Azure/GCP in weeks. (4) India-specific tailwind — massive data-center investments (Mumbai, Hyderabad regions) and data-localization laws create domestic demand. Trends to track: EDGE COMPUTING — processing at 5G/IoT proximity for latency-critical apps; SERVERLESS-FIRST — becoming the default architecture for new builds; FINOPS — cost engineering as a formal discipline as bills balloon; SOVEREIGN CLOUD — country-isolated regions driven by data laws (India's active push); GREEN CLOUD — carbon-aware workload scheduling; and AI-OPERATED CLOUD — services like auto-remediation and natural-language infrastructure management reshaping daily workflows.",
                            4
                        ),
                    ],
  }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit2Topics = [
    cloudSecurity,
    microservicesServerless,
    pricingMigration,
    devopsCICD,
    cloudCareers,
];