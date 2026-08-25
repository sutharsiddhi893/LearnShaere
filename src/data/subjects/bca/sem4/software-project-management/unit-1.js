/* =========================================================
   BCA • SEM 4 • Software Project Management
   UNIT 1 — Introduction, Planning and Estimation
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
   TOPIC 1 — Introduction to Software Project Management
========================================================= */

const introSPM = createTopic(
    "introduction-to-software-project-management",
    "Introduction to Software Project Management",

    [
        definition(
            "Software Project Management (SPM)",
            "Software Project Management is the process of planning, organizing, staffing, monitoring, controlling and leading software projects to deliver quality software within scope, time and budget."
        ),

        definition(
            "Software Project",
            "A software project is a temporary endeavor to create a unique software product or service with defined start and end dates, scope, resources and objectives."
        ),

        heading("Characteristics of Software Projects"),

        list([
            "Invisibility — software cannot be seen or touched physically.",
            "Complexity — more complex than most other engineering projects.",
            "Conformity — must conform to changing organizational requirements.",
            "Flexibility — easy to change, which can be a curse.",
            "Uniqueness — every project has unique requirements.",
            "Temporary — has definite beginning and end.",
            "Goal-oriented — created to achieve specific objectives.",
        ]),

        heading("Software Project vs Other Projects"),

        table(
            ["Aspect", "Software Project", "Other Projects"],
            [
                ["Product", "Intangible", "Tangible"],
                ["Complexity", "Very high", "Moderate"],
                ["Change", "Frequent", "Rare after start"],
                ["Testing", "Continuous", "At specific stages"],
                ["Team", "Highly skilled", "Various skills"],
                ["Duration", "Weeks to years", "Days to years"],
            ]
        ),

        heading("Objectives of SPM"),

        list([
            "Deliver software on time.",
            "Complete within budget.",
            "Meet quality standards.",
            "Satisfy customer requirements.",
            "Manage risks effectively.",
            "Optimize resource utilization.",
            "Maintain team productivity.",
        ]),

        heading("Categories of Software Projects"),

        table(
            ["Category", "Description", "Example"],
            [
                ["Information Systems", "For internal business use", "ERP, HR system"],
                ["Embedded Systems", "Software in hardware devices", "Car ECU, IoT devices"],
                ["Real-time Systems", "Time-critical applications", "Air traffic control"],
                ["Distributed Systems", "Across networks", "Cloud applications"],
                ["Mobile Applications", "For smartphones", "Android/iOS apps"],
                ["Web Applications", "Runs on browsers", "E-commerce sites"],
                ["Games", "Entertainment software", "Video games"],
            ]
        ),

        heading("Project Management Activities"),

        table(
            ["Activity", "Description"],
            [
                ["Planning", "Define scope, schedule, resources"],
                ["Organizing", "Structure team and roles"],
                ["Staffing", "Recruit and assign people"],
                ["Directing", "Guide and motivate team"],
                ["Monitoring", "Track progress"],
                ["Controlling", "Take corrective actions"],
                ["Innovating", "Find creative solutions"],
                ["Representing", "Communicate with stakeholders"],
            ]
        ),

        heading("Project Management Framework"),

        text(
            "The project management framework consists of three key elements: Project Life Cycle, Project Management Process Groups, and Knowledge Areas."
        ),

        heading("Project Life Cycle Phases"),

        steps([
            "Initiation — Define project and get approval.",
            "Planning — Detailed planning of scope, cost, schedule.",
            "Execution — Perform planned work.",
            "Monitoring & Control — Track progress and manage changes.",
            "Closure — Formal completion and handover.",
        ]),

        heading("Stakeholders in Software Projects"),

        table(
            ["Stakeholder", "Interest"],
            [
                ["Customer/Client", "Software meeting their needs"],
                ["End Users", "Easy-to-use, useful software"],
                ["Project Manager", "Success of project"],
                ["Development Team", "Clear requirements, good tools"],
                ["Sponsor", "ROI, business value"],
                ["Vendors", "Contract fulfillment"],
                ["Government", "Regulatory compliance"],
            ]
        ),

        heading("Roles in Software Project Management"),

        table(
            ["Role", "Responsibility"],
            [
                ["Project Manager", "Overall project success"],
                ["Product Owner", "Product vision and requirements"],
                ["Scrum Master", "Facilitate Agile process"],
                ["Business Analyst", "Analyze business needs"],
                ["Technical Lead", "Technical decisions"],
                ["Developer", "Write code"],
                ["QA/Tester", "Ensure quality"],
                ["DevOps Engineer", "Deployment and operations"],
            ]
        ),

        heading("Skills Required for Project Manager"),

        list([
            "Leadership and team management.",
            "Communication and interpersonal skills.",
            "Planning and organization.",
            "Risk management.",
            "Problem-solving and decision-making.",
            "Technical knowledge.",
            "Negotiation skills.",
            "Time management.",
            "Financial management.",
            "Change management.",
        ]),

        heading("Challenges in Software Project Management"),

        list([
            "Requirement changes during development.",
            "Scope creep (uncontrolled expansion).",
            "Unrealistic deadlines.",
            "Budget overruns.",
            "Resource shortages.",
            "Communication gaps.",
            "Technology obsolescence.",
            "Team conflicts.",
            "Quality issues.",
            "Client dissatisfaction.",
        ]),

        heading("Triple Constraint (Iron Triangle)"),

        text(
            "The three primary constraints of any project are Scope, Time and Cost. Changing one affects the others."
        ),

        table(
            ["Constraint", "Description"],
            [
                ["Scope", "What work will be done"],
                ["Time", "How long it will take"],
                ["Cost", "How much it will cost"],
                ["Quality", "Standards to be met (center)"],
            ]
        ),

        note(
            "The success of a software project depends heavily on effective project management. Poor management is often cited as the leading cause of software project failures, more than technical issues.",
            "tip",
            "Importance of SPM"
        ),

        keyPoints([
            "SPM involves planning, organizing and controlling software projects.",
            "Software projects are unique due to intangibility and complexity.",
            "Main goals: on time, within budget, quality delivery.",
            "Project life cycle has 5 phases.",
            "Triple constraint: Scope, Time, Cost.",
            "Project manager needs technical and leadership skills.",
        ]),
    ],

    {
        summary:
            "Introduction to Software Project Management, its objectives, characteristics, stakeholders and challenges.",
        minutes: 12,
        tags: ["spm", "project-management", "software", "introduction", "important"],

        mcqs: [
            mcq(
                "Which is NOT a characteristic of software project?",
                ["Invisibility", "Complexity", "Physical", "Flexibility"],
                2,
                "Software is intangible (not physical)."
            ),
            mcq(
                "Triple constraint includes:",
                ["Scope, Team, Tools", "Scope, Time, Cost", "Time, Quality, People", "Cost, People, Risk"],
                1,
                "Triple constraint is Scope, Time and Cost."
            ),
            mcq(
                "First phase of project life cycle is:",
                ["Planning", "Initiation", "Execution", "Closure"],
                1,
                "Initiation is the first phase."
            ),
            mcq(
                "Who is responsible for overall project success?",
                ["Developer", "Tester", "Project Manager", "Client"],
                2,
                "Project Manager is responsible for overall success."
            ),
        ],

        questions: [
            qa(
                "What is Software Project Management? Explain its objectives.",
                "Software Project Management (SPM) is the process of planning, organizing, staffing, monitoring, controlling and leading software projects to deliver quality software within scope, time and budget. It applies management principles to software development activities. Main objectives include: (1) Deliver software on time within agreed schedule; (2) Complete within budgeted cost; (3) Meet quality standards and requirements; (4) Satisfy customer needs and expectations; (5) Manage and mitigate risks effectively; (6) Optimize utilization of human and technical resources; (7) Maintain team productivity and morale; (8) Ensure clear communication among stakeholders. SPM is crucial because software projects are complex, intangible and prone to changes. Poor management is the leading cause of software project failures.",
                4
            ),
            qa(
                "Explain the triple constraint in software project management.",
                "The triple constraint, also called the Iron Triangle, represents the three primary constraints that every project must balance: Scope, Time and Cost. Quality is often considered as the fourth element at the center. (1) Scope — defines what work will be done, features to be developed and deliverables; (2) Time — the schedule and deadlines for project completion; (3) Cost — budget allocated including labor, tools, infrastructure. These constraints are interconnected — changing one affects the others. For example, adding new features (increasing scope) will require more time and cost. Reducing budget may require reducing scope or extending time. Compressing schedule often needs more resources (increased cost) or reduced scope. The project manager's job is to balance these three constraints while maintaining quality standards. Effective management of the triple constraint is key to project success.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — Software Development Life Cycle Models
========================================================= */

const sdlcModels = createTopic(
    "sdlc-models",
    "Software Development Life Cycle (SDLC) Models",

    [
        definition(
            "SDLC",
            "Software Development Life Cycle (SDLC) is a structured process used by software development teams to design, develop and test high-quality software. It consists of a sequence of phases from planning to maintenance."
        ),

        heading("Phases of SDLC"),

        table(
            ["Phase", "Description", "Output"],
            [
                ["Requirement Analysis", "Gather and analyze requirements", "SRS document"],
                ["Design", "Design system architecture", "Design document"],
                ["Implementation", "Write code", "Source code"],
                ["Testing", "Verify software quality", "Test reports"],
                ["Deployment", "Release to users", "Working software"],
                ["Maintenance", "Fix bugs and updates", "Updated versions"],
            ]
        ),

        heading("Why SDLC?"),

        list([
            "Provides structured approach.",
            "Ensures quality software.",
            "Reduces project risks.",
            "Improves communication.",
            "Better resource management.",
            "Clear milestones and deliverables.",
            "Easier project tracking.",
        ]),

        heading("Popular SDLC Models"),

        text("Different projects require different SDLC models based on their requirements and constraints."),

        heading("1. Waterfall Model"),

        definition(
            "Waterfall Model",
            "The Waterfall Model is a linear sequential software development approach where each phase must be completed before the next begins. It flows downward like a waterfall."
        ),

        heading("Waterfall Phases"),

        steps([
            "Requirement Analysis and Documentation.",
            "System Design.",
            "Implementation (Coding).",
            "Integration and Testing.",
            "Deployment.",
            "Maintenance.",
        ]),

        heading("Advantages of Waterfall"),

        list([
            "Simple and easy to understand.",
            "Well-defined phases and deliverables.",
            "Easy to manage due to rigidity.",
            "Clear milestones.",
            "Good for small projects with clear requirements.",
            "Extensive documentation.",
        ]),

        heading("Disadvantages of Waterfall"),

        list([
            "No going back to previous phase.",
            "Difficult to accommodate changes.",
            "Working software available only at the end.",
            "High risk for complex projects.",
            "Poor for long, ongoing projects.",
            "Client sees software only at end.",
        ]),

        heading("When to Use Waterfall"),

        list([
            "Requirements are clear and stable.",
            "Technology is well understood.",
            "Small or short-duration projects.",
            "Team is experienced with the domain.",
        ]),

        heading("2. V-Model (Verification and Validation)"),

        definition(
            "V-Model",
            "The V-Model is an extension of Waterfall where each development phase has a corresponding testing phase. Testing activities are planned in parallel with development phases."
        ),

        text("The V-Model has development phases on the left side and corresponding testing phases on the right, forming a V-shape."),

        table(
            ["Development", "Testing"],
            [
                ["Requirements", "Acceptance Testing"],
                ["System Design", "System Testing"],
                ["Architecture Design", "Integration Testing"],
                ["Module Design", "Unit Testing"],
                ["Coding", ""],
            ]
        ),

        heading("Advantages of V-Model"),

        list([
            "Testing at every phase.",
            "Early defect detection.",
            "Better quality due to verification.",
            "Simple to use.",
            "Clear deliverables.",
        ]),

        heading("Disadvantages of V-Model"),

        list([
            "Rigid like Waterfall.",
            "Not suitable for complex projects.",
            "Difficult to handle changes.",
            "No working software until late.",
        ]),

        heading("3. Iterative Model"),

        definition(
            "Iterative Model",
            "The Iterative Model develops software through repeated cycles (iterations) and in smaller portions at a time. Each iteration produces a working version of the software."
        ),

        heading("Advantages of Iterative"),

        list([
            "Working software early.",
            "Easier to test and debug.",
            "Flexibility in changes.",
            "Better risk management.",
            "Customer feedback early.",
        ]),

        heading("Disadvantages of Iterative"),

        list([
            "More resources needed.",
            "Requires careful planning.",
            "Difficult architecture design.",
            "May become uncontrolled.",
        ]),

        heading("4. Spiral Model"),

        definition(
            "Spiral Model",
            "The Spiral Model combines iterative development with systematic risk analysis. Each spiral loop represents one phase of development with four quadrants: planning, risk analysis, engineering and evaluation."
        ),

        heading("Four Phases in Each Spiral"),

        steps([
            "Planning — Determine objectives, alternatives, constraints.",
            "Risk Analysis — Identify and resolve risks.",
            "Engineering — Develop and verify next-level product.",
            "Evaluation — Customer review of the current iteration.",
        ]),

        heading("Advantages of Spiral"),

        list([
            "Emphasis on risk management.",
            "Suitable for large, complex projects.",
            "Client involvement at every phase.",
            "Flexibility to accommodate changes.",
            "Realistic in handling risks.",
        ]),

        heading("Disadvantages of Spiral"),

        list([
            "Complex and expensive.",
            "Requires expertise in risk analysis.",
            "Not suitable for small projects.",
            "Success depends on risk analysis.",
        ]),

        heading("5. Prototype Model"),

        definition(
            "Prototype Model",
            "The Prototype Model creates a working prototype (initial version) of the software early to obtain user feedback before developing the actual product."
        ),

        heading("Prototype Model Steps"),

        steps([
            "Gather basic requirements.",
            "Build quick prototype.",
            "Get user feedback.",
            "Refine prototype based on feedback.",
            "Develop final product.",
        ]),

        heading("Advantages of Prototype"),

        list([
            "Early user involvement.",
            "Better requirement understanding.",
            "Reduced risk of failure.",
            "Missing features identified early.",
            "Better user acceptance.",
        ]),

        heading("Disadvantages of Prototype"),

        list([
            "Increased complexity.",
            "May lead to insufficient analysis.",
            "Time-consuming prototype building.",
            "Client may confuse prototype with final product.",
        ]),

        heading("6. Agile Model"),

        definition(
            "Agile Model",
            "The Agile Model is an iterative approach that emphasizes flexibility, customer collaboration and rapid delivery of working software in small increments called sprints (usually 2-4 weeks)."
        ),

        heading("Agile Principles"),

        list([
            "Customer satisfaction through early and continuous delivery.",
            "Welcome changing requirements.",
            "Deliver working software frequently.",
            "Business and developers work together.",
            "Build projects around motivated individuals.",
            "Face-to-face conversation is best.",
            "Working software is primary measure of progress.",
            "Sustainable development pace.",
            "Technical excellence and good design.",
            "Simplicity is essential.",
            "Self-organizing teams.",
            "Regular reflection and adjustment.",
        ]),

        heading("Popular Agile Frameworks"),

        table(
            ["Framework", "Description"],
            [
                ["Scrum", "Iterative approach with sprints"],
                ["Kanban", "Visual workflow management"],
                ["XP (Extreme Programming)", "Focus on code quality"],
                ["Lean", "Eliminate waste, deliver value"],
                ["SAFe", "Scaled Agile for enterprises"],
            ]
        ),

        heading("Advantages of Agile"),

        list([
            "Adaptable to changes.",
            "Continuous customer feedback.",
            "Working software delivered frequently.",
            "Better quality through continuous testing.",
            "Improved team collaboration.",
            "Reduced risk.",
        ]),

        heading("Disadvantages of Agile"),

        list([
            "Requires experienced team.",
            "Less documentation.",
            "Difficult to plan long-term.",
            "Requires active client participation.",
            "Not suitable for very large teams.",
        ]),

        heading("7. DevOps"),

        definition(
            "DevOps",
            "DevOps is a set of practices combining software development (Dev) and IT operations (Ops) to shorten development lifecycle and provide continuous delivery with high quality."
        ),

        heading("DevOps Practices"),

        list([
            "Continuous Integration (CI).",
            "Continuous Deployment (CD).",
            "Infrastructure as Code (IaC).",
            "Automated testing.",
            "Monitoring and logging.",
            "Collaboration between teams.",
        ]),

        heading("Comparison of SDLC Models"),

        table(
            ["Model", "Best For", "Flexibility", "Risk"],
            [
                ["Waterfall", "Simple, clear projects", "Low", "High"],
                ["V-Model", "Quality-critical projects", "Low", "Medium"],
                ["Iterative", "Medium projects", "Medium", "Medium"],
                ["Spiral", "Large, risky projects", "High", "Low"],
                ["Prototype", "Unclear requirements", "High", "Medium"],
                ["Agile", "Changing requirements", "Very High", "Low"],
            ]
        ),

        note(
            "There is no 'best' SDLC model. Choose the model that best fits your project's requirements, team capabilities, timeline and client expectations. Agile is popular for modern software development but may not suit every project.",
            "tip",
            "Model Selection"
        ),

        keyPoints([
            "SDLC provides structured approach to development.",
            "Waterfall is sequential and rigid.",
            "V-Model adds testing at each phase.",
            "Spiral emphasizes risk management.",
            "Agile focuses on iterative delivery.",
            "Choose model based on project needs.",
        ]),
    ],

    {
        summary:
            "Learn SDLC and various models: Waterfall, V-Model, Iterative, Spiral, Prototype, Agile and DevOps.",
        minutes: 15,
        tags: ["sdlc", "waterfall", "agile", "spiral", "models", "important"],

        mcqs: [
            mcq(
                "Which model is sequential?",
                ["Agile", "Waterfall", "Spiral", "Iterative"],
                1,
                "Waterfall is a sequential model."
            ),
            mcq(
                "Which model emphasizes risk analysis?",
                ["Waterfall", "V-Model", "Spiral", "Prototype"],
                2,
                "Spiral model emphasizes risk analysis."
            ),
            mcq(
                "Agile delivers software:",
                ["Once at end", "In sprints", "Never", "In one big release"],
                1,
                "Agile delivers in sprints (2-4 weeks)."
            ),
            mcq(
                "V-Model adds:",
                ["Iterations", "Testing phases", "Risk analysis", "Prototypes"],
                1,
                "V-Model adds corresponding testing phases."
            ),
        ],

        questions: [
            qa(
                "Compare Waterfall and Agile models.",
                "Waterfall and Agile are contrasting SDLC models. Waterfall is a sequential model where each phase (requirements, design, coding, testing, deployment) must be completed before the next begins. It works well for projects with clear, stable requirements but is rigid, doesn't accommodate changes well, and delivers working software only at the end. Documentation is extensive, and client involvement is limited to beginning and end. Agile is an iterative approach that delivers working software in small increments called sprints (2-4 weeks). It welcomes changes, involves the client throughout, and emphasizes collaboration over documentation. Agile is flexible, reduces risk through frequent feedback, but requires experienced teams and active client participation. Choose Waterfall for small, well-defined projects; choose Agile for projects with changing requirements or need for rapid delivery. Modern software development largely favors Agile approaches like Scrum and Kanban.",
                4
            ),
            qa(
                "Explain Spiral Model with its phases.",
                "The Spiral Model, developed by Barry Boehm in 1988, combines iterative development with systematic risk analysis. It is best suited for large, complex and high-risk projects. The model has four phases in each spiral loop: (1) Planning — Determine objectives, alternatives and constraints for the iteration. Requirements are gathered and analyzed. (2) Risk Analysis — Identify potential risks and develop strategies to resolve them. This is the distinguishing feature of Spiral. Prototypes may be built. (3) Engineering — Develop and verify the next-level product. This includes design, coding and testing. (4) Evaluation — Customer reviews the current iteration and provides feedback. Plans for the next iteration are made. The project spirals outward through repeated iterations, with each loop refining the product. Advantages include strong risk management, suitability for large projects, and flexibility. Disadvantages include complexity, high cost, and dependency on expertise in risk analysis. It's ideal for mission-critical software where risks are significant.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — Project Planning
========================================================= */

const projectPlanning = createTopic(
    "project-planning",
    "Project Planning",

    [
        definition(
            "Project Planning",
            "Project planning is the process of defining project goals, scope, resources, schedule, budget and risks to create a roadmap for successful project execution."
        ),

        heading("Importance of Project Planning"),

        list([
            "Sets clear direction and goals.",
            "Identifies required resources.",
            "Estimates time and cost accurately.",
            "Identifies risks early.",
            "Improves team coordination.",
            "Enables progress tracking.",
            "Reduces project failures.",
            "Ensures stakeholder alignment.",
        ]),

        heading("Project Planning Process"),

        steps([
            "Define project scope and objectives.",
            "Identify deliverables.",
            "Break down work (WBS).",
            "Estimate effort and duration.",
            "Identify dependencies.",
            "Allocate resources.",
            "Create schedule.",
            "Estimate costs and budget.",
            "Identify risks.",
            "Plan quality and communication.",
        ]),

        heading("Types of Project Plans"),

        table(
            ["Plan", "Purpose"],
            [
                ["Project Management Plan", "Overall project execution"],
                ["Quality Plan", "Quality standards and processes"],
                ["Risk Management Plan", "Risk identification and mitigation"],
                ["Configuration Plan", "Change management"],
                ["Staffing Plan", "Team composition"],
                ["Communication Plan", "Stakeholder communication"],
                ["Test Plan", "Testing strategy"],
            ]
        ),

        heading("Work Breakdown Structure (WBS)"),

        definition(
            "WBS",
            "Work Breakdown Structure is a hierarchical decomposition of project work into smaller, manageable components called work packages that can be assigned, estimated and tracked."
        ),

        heading("Benefits of WBS"),

        list([
            "Better understanding of project scope.",
            "Easier estimation of time and cost.",
            "Clear task assignment.",
            "Better progress tracking.",
            "Improved risk identification.",
            "Enhanced communication.",
        ]),

        heading("WBS Example — E-Commerce Website"),

        code(
            `1. E-Commerce Website
   1.1 Requirement Analysis
       1.1.1 Client meetings
       1.1.2 Requirement documentation
       1.1.3 SRS review
   1.2 Design
       1.2.1 Database design
       1.2.2 UI/UX design
       1.2.3 Architecture design
   1.3 Development
       1.3.1 Frontend development
           1.3.1.1 Homepage
           1.3.1.2 Product listing
           1.3.1.3 Cart & Checkout
       1.3.2 Backend development
           1.3.2.1 User authentication
           1.3.2.2 Product management
           1.3.2.3 Order processing
       1.3.3 Payment integration
   1.4 Testing
       1.4.1 Unit testing
       1.4.2 Integration testing
       1.4.3 User acceptance testing
   1.5 Deployment
       1.5.1 Server setup
       1.5.2 Application deployment
       1.5.3 Go-live`,
            "text",
            "WBS Example"
        ),

        heading("Scheduling Techniques"),

        heading("Gantt Chart"),

        definition(
            "Gantt Chart",
            "A Gantt Chart is a horizontal bar chart that visually represents a project schedule with tasks listed on the vertical axis and time on the horizontal axis."
        ),

        heading("Features of Gantt Chart"),

        list([
            "Shows tasks and their durations.",
            "Displays start and end dates.",
            "Shows task dependencies.",
            "Indicates milestones.",
            "Tracks progress visually.",
            "Easy to understand.",
        ]),

        text("Simple Gantt Chart Example:"),

        table(
            ["Task", "Week 1", "Week 2", "Week 3", "Week 4", "Week 5"],
            [
                ["Requirements", "████", "", "", "", ""],
                ["Design", "", "████", "", "", ""],
                ["Coding", "", "", "████", "████", ""],
                ["Testing", "", "", "", "██", "████"],
                ["Deployment", "", "", "", "", "██"],
            ]
        ),

        heading("PERT Chart (Program Evaluation Review Technique)"),

        definition(
            "PERT",
            "PERT is a scheduling technique that uses network diagrams to show task dependencies and calculates project duration using optimistic, pessimistic and most likely time estimates."
        ),

        heading("PERT Time Estimation"),

        text("PERT uses three time estimates for each task:"),

        list([
            "Optimistic Time (O) — Best case scenario.",
            "Pessimistic Time (P) — Worst case scenario.",
            "Most Likely Time (M) — Realistic estimate.",
        ]),

        text("Expected Time (TE) = (O + 4M + P) / 6"),

        text("Example: If O=4, M=6, P=8 days, then TE = (4 + 24 + 8)/6 = 6 days"),

        heading("CPM (Critical Path Method)"),

        definition(
            "CPM",
            "Critical Path Method is a scheduling technique that identifies the longest sequence of dependent tasks (critical path) that determines the minimum project duration."
        ),

        heading("CPM Terminology"),

        table(
            ["Term", "Meaning"],
            [
                ["Activity", "Task in project"],
                ["Event", "Start or end of activity"],
                ["Duration", "Time to complete activity"],
                ["Path", "Sequence of activities"],
                ["Critical Path", "Longest path (determines project duration)"],
                ["Slack/Float", "Time an activity can be delayed"],
            ]
        ),

        heading("CPM Calculations"),

        list([
            "Earliest Start (ES) — Earliest an activity can start.",
            "Earliest Finish (EF) — ES + Duration.",
            "Latest Start (LS) — Latest activity can start without delay.",
            "Latest Finish (LF) — LS + Duration.",
            "Total Float = LS - ES or LF - EF.",
            "Critical Path = Path with zero float.",
        ]),

        heading("PERT vs CPM"),

        table(
            ["Basis", "PERT", "CPM"],
            [
                ["Focus", "Time management", "Time-cost optimization"],
                ["Time estimates", "Three (O, M, P)", "One (deterministic)"],
                ["Use", "R&D, uncertain projects", "Construction, routine"],
                ["Nature", "Probabilistic", "Deterministic"],
                ["Activity", "Event-oriented", "Activity-oriented"],
            ]
        ),

        heading("Milestones"),

        definition(
            "Milestone",
            "A milestone is a significant point or event in a project that marks the completion of important deliverables or phases."
        ),

        heading("Example Milestones"),

        list([
            "Requirements approval.",
            "Design completion.",
            "Alpha release.",
            "Beta release.",
            "Final release.",
            "Client acceptance.",
        ]),

        heading("Resource Allocation"),

        text(
            "Resource allocation involves assigning available resources (people, equipment, tools) to project activities in the most efficient manner."
        ),

        heading("Types of Resources"),

        table(
            ["Type", "Examples"],
            [
                ["Human", "Developers, testers, managers"],
                ["Technical", "Hardware, software, tools"],
                ["Financial", "Budget, funds"],
                ["Time", "Available hours, deadlines"],
                ["Information", "Documentation, knowledge"],
            ]
        ),

        heading("Resource Leveling"),

        definition(
            "Resource Leveling",
            "Resource leveling is a technique used to resolve conflicts when demand for resources exceeds availability by adjusting the schedule or reassigning tasks."
        ),

        heading("Project Budget"),

        list([
            "Personnel costs (salaries).",
            "Hardware and software costs.",
            "Infrastructure costs.",
            "Training costs.",
            "Travel and communication.",
            "Overhead costs.",
            "Contingency reserve.",
        ]),

        note(
            "A good project plan is a living document — it should be reviewed and updated regularly throughout the project. No plan survives contact with reality unchanged, so build in flexibility.",
            "tip",
            "Plan is Dynamic"
        ),

        keyPoints([
            "Project planning creates roadmap for success.",
            "WBS decomposes project into manageable tasks.",
            "Gantt chart shows tasks on timeline.",
            "PERT handles uncertainty with 3 time estimates.",
            "CPM identifies critical path.",
            "Resource allocation optimizes usage.",
        ]),
    ],

    {
        summary:
            "Learn project planning, WBS, Gantt charts, PERT, CPM, milestones and resource allocation.",
        minutes: 14,
        tags: ["planning", "wbs", "gantt", "pert", "cpm", "important"],

        mcqs: [
            mcq(
                "WBS stands for:",
                ["Work Breakdown Structure", "Web Based System", "Work Bulk Structure", "Weekly Business Schedule"],
                0,
                "WBS is Work Breakdown Structure."
            ),
            mcq(
                "PERT uses how many time estimates?",
                ["1", "2", "3", "4"],
                2,
                "PERT uses 3 estimates: optimistic, most likely, pessimistic."
            ),
            mcq(
                "Critical path is:",
                ["Shortest path", "Longest path", "Middle path", "Fastest path"],
                1,
                "Critical path is the longest sequence of dependent tasks."
            ),
            mcq(
                "Which chart shows tasks vs time?",
                ["Gantt", "Pie", "Flow", "Network"],
                0,
                "Gantt chart shows tasks against time."
            ),
        ],

        questions: [
            qa(
                "What is Work Breakdown Structure? Explain its benefits.",
                "Work Breakdown Structure (WBS) is a hierarchical decomposition of project work into smaller, manageable components called work packages. It breaks down the total project scope into deliverable-oriented pieces at increasing levels of detail. The top level represents the final project deliverable, which is progressively decomposed into phases, activities, and finally tasks that can be assigned to individuals. Benefits include: (1) Better understanding of project scope by visualizing all work; (2) Easier estimation of time, cost and resources for each work package; (3) Clear task assignment to team members; (4) Better progress tracking against defined work packages; (5) Improved risk identification at task level; (6) Enhanced communication with stakeholders; (7) Basis for scheduling, budgeting and controlling; (8) Prevents missing important work. WBS is typically created using a top-down approach and follows the 100% rule — all work must be captured.",
                4
            ),
            qa(
                "Explain PERT and CPM with their differences.",
                "PERT (Program Evaluation Review Technique) and CPM (Critical Path Method) are network-based scheduling techniques. PERT is used for projects with uncertainty and uses three time estimates for each activity: optimistic (O), most likely (M) and pessimistic (P). Expected time = (O + 4M + P)/6. PERT is probabilistic and event-oriented, commonly used in R&D projects. CPM is used for projects with deterministic time estimates (single time value). It identifies the critical path — the longest sequence of dependent tasks that determines minimum project duration. Any delay in critical path activities delays the project. CPM is activity-oriented and used in construction and routine projects. Key differences: PERT focuses on time management with probability, while CPM focuses on time-cost optimization with certainty. PERT is best for uncertain projects; CPM is best for well-defined projects. Both use network diagrams to show task dependencies and both help in resource planning and progress monitoring.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — Cost Estimation
========================================================= */

const costEstimation = createTopic(
    "cost-estimation",
    "Cost Estimation",

    [
        definition(
            "Cost Estimation",
            "Cost estimation is the process of predicting the cost required to complete a software project including labor, resources, tools and other expenses. Accurate estimation is critical for budgeting and planning."
        ),

        heading("Importance of Cost Estimation"),

        list([
            "Determines project feasibility.",
            "Sets project budget.",
            "Helps in resource planning.",
            "Enables project bidding.",
            "Assists in decision-making.",
            "Provides basis for control.",
            "Improves client trust.",
        ]),

        heading("Types of Estimation"),

        table(
            ["Type", "Description", "When Used"],
            [
                ["Rough Order of Magnitude (ROM)", "±50% accuracy", "Initial concept"],
                ["Budgetary", "±25% accuracy", "Approval stage"],
                ["Definitive", "±10% accuracy", "Detailed planning"],
            ]
        ),

        heading("Categories of Cost"),

        table(
            ["Category", "Examples"],
            [
                ["Direct Costs", "Salaries, hardware, software"],
                ["Indirect Costs", "Overhead, admin, utilities"],
                ["Fixed Costs", "Licenses, equipment"],
                ["Variable Costs", "Hourly wages, per-use fees"],
                ["Sunk Costs", "Already spent, non-recoverable"],
            ]
        ),

        heading("Cost Estimation Techniques"),

        heading("1. Expert Judgment"),

        text(
            "Estimation based on experience and knowledge of experts. Simple but subjective."
        ),

        heading("2. Delphi Technique"),

        text(
            "Multiple experts provide anonymous estimates. Results are shared, and process is repeated until consensus is reached."
        ),

        heading("3. Analogy-based Estimation"),

        text(
            "Estimation based on similar past projects. Requires historical data."
        ),

        heading("4. Bottom-up Estimation"),

        text(
            "Estimate individual tasks (WBS) and aggregate to get total. More accurate but time-consuming."
        ),

        heading("5. Top-down Estimation"),

        text(
            "Overall project cost is estimated first, then divided among components. Faster but less accurate."
        ),

        heading("6. Parametric Modeling"),

        text(
            "Uses mathematical models based on project parameters (LOC, function points)."
        ),

        heading("Software Size Estimation"),

        heading("1. Lines of Code (LOC)"),

        definition(
            "LOC",
            "Lines of Code measures software size by counting the number of code lines. Includes only executable statements, not comments or blank lines."
        ),

        heading("Advantages of LOC"),

        list([
            "Simple and widely used.",
            "Easy to count with tools.",
            "Language-specific baselines available.",
        ]),

        heading("Disadvantages of LOC"),

        list([
            "Depends on programming language.",
            "Not available in early stages.",
            "Doesn't consider complexity.",
            "Discourages good coding practices.",
            "Different for different developers.",
        ]),

        heading("2. Function Point Analysis (FPA)"),

        definition(
            "Function Point",
            "Function Point is a measure of software size based on functionality provided to the user, independent of programming language."
        ),

        heading("Function Point Components"),

        table(
            ["Component", "Description"],
            [
                ["External Inputs (EI)", "Data from user (forms)"],
                ["External Outputs (EO)", "Data to user (reports)"],
                ["External Inquiries (EQ)", "Input-output pairs"],
                ["Internal Logical Files (ILF)", "Data stored internally"],
                ["External Interface Files (EIF)", "Data shared with other apps"],
            ]
        ),

        heading("Function Point Calculation"),

        steps([
            "Count each component (EI, EO, EQ, ILF, EIF).",
            "Assign complexity weight (Low, Average, High).",
            "Calculate Unadjusted Function Points (UFP).",
            "Determine 14 General System Characteristics (GSC).",
            "Calculate Value Adjustment Factor (VAF).",
            "Function Points (FP) = UFP × VAF.",
        ]),

        heading("Advantages of Function Points"),

        list([
            "Language independent.",
            "Available early in project.",
            "Based on user requirements.",
            "Better for management.",
        ]),

        heading("COCOMO Model"),

        definition(
            "COCOMO",
            "Constructive Cost Model (COCOMO) is a mathematical model developed by Barry Boehm to estimate effort, cost and schedule for software projects based on project size in KLOC (Kilo Lines of Code)."
        ),

        heading("Three Modes of COCOMO"),

        table(
            ["Mode", "Description", "Team Size", "Complexity"],
            [
                ["Organic", "Small, simple projects", "Small (< 50 KLOC)", "Low"],
                ["Semi-detached", "Medium projects", "Medium (50-300 KLOC)", "Medium"],
                ["Embedded", "Complex, hardware-related", "Large (> 300 KLOC)", "High"],
            ]
        ),

        heading("Basic COCOMO Formulas"),

        text("Effort (E) = a × (KLOC)^b person-months"),

        text("Time (D) = c × (E)^d months"),

        text("People (P) = E / D"),

        heading("COCOMO Constants"),

        table(
            ["Mode", "a", "b", "c", "d"],
            [
                ["Organic", "2.4", "1.05", "2.5", "0.38"],
                ["Semi-detached", "3.0", "1.12", "2.5", "0.35"],
                ["Embedded", "3.6", "1.20", "2.5", "0.32"],
            ]
        ),

        heading("COCOMO Example"),

        text("For an organic project of 20 KLOC:"),

        text("Effort E = 2.4 × (20)^1.05 = 2.4 × 22.9 = 55.0 person-months"),

        text("Time D = 2.5 × (55)^0.38 = 2.5 × 4.5 = 11.3 months"),

        text("People P = 55 / 11.3 = 4.9 ≈ 5 developers"),

        heading("Types of COCOMO"),

        table(
            ["Type", "Description"],
            [
                ["Basic COCOMO", "Simple, based on size only"],
                ["Intermediate COCOMO", "Adds cost drivers"],
                ["Detailed COCOMO", "Adds phase-wise estimation"],
            ]
        ),

        heading("COCOMO II"),

        text(
            "COCOMO II is an updated version that supports modern development approaches including reuse, off-the-shelf components and iterative development."
        ),

        heading("Cost Estimation Best Practices"),

        list([
            "Use multiple estimation techniques.",
            "Involve experts and team members.",
            "Base estimates on historical data.",
            "Consider all cost categories.",
            "Include contingency (10-20%).",
            "Document assumptions.",
            "Review and refine estimates.",
            "Track actuals vs estimates.",
            "Learn from past projects.",
            "Communicate uncertainty.",
        ]),

        heading("Common Estimation Mistakes"),

        list([
            "Optimistic estimates.",
            "Ignoring risks.",
            "Not considering all costs.",
            "Pressure from management.",
            "Insufficient breakdown.",
            "Ignoring complexity.",
            "Not updating estimates.",
            "Padding excessively.",
        ]),

        note(
            "Software estimation is more art than science. Even the best estimates can be off by 25-100%. Always include contingency and communicate uncertainty to stakeholders. Track actuals to improve future estimates.",
            "warning",
            "Estimation Reality"
        ),

        keyPoints([
            "Cost estimation predicts project expenses.",
            "LOC measures size in lines of code.",
            "Function Points measure functionality.",
            "COCOMO uses KLOC to estimate effort.",
            "Three COCOMO modes: Organic, Semi-detached, Embedded.",
            "Combine multiple techniques for accuracy.",
        ]),
    ],

    {
        summary:
            "Learn cost estimation techniques, LOC, Function Points, COCOMO model and best practices.",
        minutes: 14,
        tags: ["cost-estimation", "cocomo", "loc", "function-points", "important"],

        mcqs: [
            mcq(
                "COCOMO was developed by:",
                ["Boehm", "Deming", "Fowler", "Kruchten"],
                0,
                "COCOMO was developed by Barry Boehm."
            ),
            mcq(
                "Which is NOT a COCOMO mode?",
                ["Organic", "Semi-detached", "Embedded", "Complex"],
                3,
                "The three modes are Organic, Semi-detached and Embedded."
            ),
            mcq(
                "Function Point is:",
                ["Language dependent", "Language independent", "Only for Java", "Only for C++"],
                1,
                "Function points are language independent."
            ),
            mcq(
                "LOC stands for:",
                ["Language of Code", "Lines of Code", "Level of Complexity", "List of Components"],
                1,
                "LOC = Lines of Code."
            ),
        ],

        questions: [
            qa(
                "Explain COCOMO model with its modes.",
                "COCOMO (Constructive Cost Model) is a mathematical model developed by Barry Boehm in 1981 to estimate effort, time and people required for software projects. It is based on project size measured in KLOC (Kilo Lines of Code). COCOMO has three modes based on project complexity: (1) Organic Mode — small, simple projects with small teams (< 50 KLOC), stable environment, and experienced developers. Example: simple business applications. Formula: E = 2.4 × (KLOC)^1.05. (2) Semi-detached Mode — medium-sized projects with mixed experience teams (50-300 KLOC), moderate complexity. Example: interactive systems. Formula: E = 3.0 × (KLOC)^1.12. (3) Embedded Mode — large, complex projects with hardware-software integration (> 300 KLOC), high complexity, tight constraints. Example: real-time systems, air traffic control. Formula: E = 3.6 × (KLOC)^1.20. COCOMO has three types: Basic (size only), Intermediate (adds cost drivers), and Detailed (phase-wise estimation). COCOMO II is the modern version supporting reuse and iterative development.",
                4
            ),
            qa(
                "Explain Function Point Analysis.",
                "Function Point Analysis (FPA) is a method to measure software size based on functionality provided to the user, independent of programming language. It was developed by Allan Albrecht at IBM in 1979. FPA counts five components: (1) External Inputs (EI) — user data entered into system (forms, screens); (2) External Outputs (EO) — data sent to user (reports, messages); (3) External Inquiries (EQ) — input-output pairs like search queries; (4) Internal Logical Files (ILF) — data stored and maintained within the application; (5) External Interface Files (EIF) — data shared with other applications. Each component is assigned a complexity weight (Low, Average, High), and Unadjusted Function Points (UFP) are calculated. Then 14 General System Characteristics (GSC) are evaluated to compute Value Adjustment Factor (VAF), ranging from 0.65 to 1.35. Final Function Points = UFP × VAF. Advantages: language independent, available early in project, based on user perspective. Disadvantages: subjective weightings, requires training. FPA is widely used for management estimates and comparing productivity across projects.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 5 — Risk Management
========================================================= */

const riskManagement = createTopic(
    "risk-management",
    "Risk Management",

    [
        definition(
            "Risk",
            "A risk is an uncertain event or condition that, if it occurs, has a positive or negative effect on project objectives such as scope, schedule, cost or quality."
        ),

        definition(
            "Risk Management",
            "Risk management is the process of identifying, analyzing, prioritizing and responding to project risks to minimize their negative impact and maximize positive outcomes."
        ),

        heading("Importance of Risk Management"),

        list([
            "Reduces project failures.",
            "Improves decision-making.",
            "Enhances project success rate.",
            "Prevents cost overruns.",
            "Minimizes surprises.",
            "Builds stakeholder confidence.",
            "Improves resource allocation.",
            "Ensures business continuity.",
        ]),

        heading("Types of Risks in Software Projects"),

        table(
            ["Category", "Examples"],
            [
                ["Technical", "Technology changes, integration issues"],
                ["Project Management", "Poor planning, scope creep"],
                ["Organizational", "Reorganization, priorities change"],
                ["External", "Regulations, market changes"],
                ["Personnel", "Team turnover, skill gaps"],
                ["Requirements", "Unclear, changing requirements"],
                ["Quality", "Bugs, poor code quality"],
                ["Security", "Data breaches, cyber attacks"],
            ]
        ),

        heading("Risk Characteristics"),

        list([
            "Uncertainty — may or may not occur.",
            "Loss — has negative impact if occurs.",
            "Time — occurs at some future time.",
            "Choice — can be managed.",
        ]),

        heading("Risk Management Process"),

        steps([
            "Risk Identification — Find potential risks.",
            "Risk Analysis — Assess probability and impact.",
            "Risk Prioritization — Rank risks by importance.",
            "Risk Response Planning — Develop strategies.",
            "Risk Monitoring — Track risks throughout project.",
            "Risk Control — Take actions when risks occur.",
        ]),

        heading("1. Risk Identification"),

        text(
            "First step is to identify all possible risks. Techniques include:"
        ),

        list([
            "Brainstorming sessions.",
            "Checklists from past projects.",
            "SWOT analysis.",
            "Expert interviews.",
            "Documentation review.",
            "Delphi technique.",
            "Root cause analysis.",
        ]),

        heading("Common Software Project Risks"),

        table(
            ["Risk", "Description"],
            [
                ["Requirement Changes", "Frequent changes cause delays"],
                ["Technology Risk", "New/complex technology issues"],
                ["Schedule Slippage", "Missing deadlines"],
                ["Budget Overrun", "Exceeding budget"],
                ["Personnel Turnover", "Key members leaving"],
                ["Vendor Failure", "Third-party issues"],
                ["Scope Creep", "Uncontrolled scope expansion"],
                ["Poor Estimation", "Underestimated effort"],
            ]
        ),

        heading("2. Risk Analysis"),

        text(
            "Analyze identified risks based on probability and impact."
        ),

        heading("Qualitative Risk Analysis"),

        text(
            "Rates risks using descriptive scales like High/Medium/Low."
        ),

        heading("Quantitative Risk Analysis"),

        text(
            "Uses numerical values to assess risks."
        ),

        heading("Risk Exposure Formula"),

        text("Risk Exposure = Probability × Impact"),

        text("Example: If probability = 0.6 and impact = $10,000, then Risk Exposure = $6,000"),

        heading("Risk Matrix"),

        text("A risk matrix helps prioritize risks based on probability and impact."),

        table(
            ["Impact / Probability", "Low", "Medium", "High"],
            [
                ["High", "Medium", "High", "Critical"],
                ["Medium", "Low", "Medium", "High"],
                ["Low", "Low", "Low", "Medium"],
            ]
        ),

        heading("3. Risk Prioritization"),

        text(
            "Rank risks based on their exposure. Focus on high-priority risks first."
        ),

        heading("Risk Priority Levels"),

        table(
            ["Level", "Action Required"],
            [
                ["Critical", "Immediate action needed"],
                ["High", "Detailed plan required"],
                ["Medium", "Monitor closely"],
                ["Low", "Track occasionally"],
            ]
        ),

        heading("4. Risk Response Strategies"),

        heading("For Negative Risks (Threats)"),

        table(
            ["Strategy", "Description", "Example"],
            [
                ["Avoid", "Eliminate the risk", "Change project approach"],
                ["Transfer", "Shift to third party", "Insurance, outsourcing"],
                ["Mitigate", "Reduce probability/impact", "Additional testing"],
                ["Accept", "Live with the risk", "Contingency reserve"],
            ]
        ),

        heading("For Positive Risks (Opportunities)"),

        table(
            ["Strategy", "Description"],
            [
                ["Exploit", "Ensure opportunity happens"],
                ["Share", "Partner to capitalize"],
                ["Enhance", "Increase probability"],
                ["Accept", "Take advantage if occurs"],
            ]
        ),

        heading("Risk Register"),

        definition(
            "Risk Register",
            "A risk register is a document that lists all identified risks along with their analysis, response plans and status."
        ),

        heading("Risk Register Contents"),

        table(
            ["Field", "Description"],
            [
                ["Risk ID", "Unique identifier"],
                ["Description", "Details of the risk"],
                ["Category", "Type of risk"],
                ["Probability", "Likelihood of occurrence"],
                ["Impact", "Effect if occurs"],
                ["Risk Exposure", "Probability × Impact"],
                ["Response Strategy", "Plan to handle"],
                ["Owner", "Responsible person"],
                ["Status", "Current state"],
            ]
        ),

        heading("Example Risk Register"),

        table(
            ["ID", "Risk", "Prob", "Impact", "Strategy"],
            [
                ["R1", "Key developer leaves", "0.3", "High", "Cross-training"],
                ["R2", "Requirements change", "0.7", "Medium", "Agile approach"],
                ["R3", "Server downtime", "0.2", "High", "Redundancy"],
                ["R4", "Vendor delay", "0.4", "Medium", "Backup vendor"],
            ]
        ),

        heading("5. Risk Monitoring"),

        text(
            "Continuously track identified risks and watch for new ones throughout the project."
        ),

        list([
            "Regular risk review meetings.",
            "Update risk register.",
            "Track risk triggers.",
            "Monitor risk indicators.",
            "Review response effectiveness.",
            "Identify new risks.",
        ]),

        heading("6. Risk Control"),

        text(
            "Execute planned responses and take corrective actions when risks occur."
        ),

        heading("Contingency Planning"),

        definition(
            "Contingency Plan",
            "A contingency plan is a predefined action plan to execute if a specific risk occurs. It includes actions, resources and responsibilities."
        ),

        heading("Contingency Reserve"),

        text(
            "Extra budget and time set aside to handle risks. Typically 10-20% of total budget."
        ),

        heading("Risk Mitigation Techniques"),

        list([
            "Prototyping to reduce technology risk.",
            "Frequent testing to catch bugs early.",
            "Cross-training to reduce personnel risk.",
            "Multiple vendors to reduce vendor risk.",
            "Regular backups to prevent data loss.",
            "Insurance for major financial risks.",
            "Phased delivery to reduce implementation risk.",
            "Buffer time in schedule.",
        ]),

        heading("Common Mistakes in Risk Management"),

        list([
            "Not identifying risks systematically.",
            "Underestimating probability or impact.",
            "Ignoring low-probability high-impact risks.",
            "Not updating risk register.",
            "Blaming instead of managing.",
            "Insufficient contingency reserve.",
            "Poor communication about risks.",
            "Not learning from past projects.",
        ]),

        heading("Risk Communication"),

        list([
            "Report risks to stakeholders.",
            "Include in project status reports.",
            "Discuss in team meetings.",
            "Maintain transparency.",
            "Escalate critical risks quickly.",
            "Document lessons learned.",
        ]),

        note(
            "The best time to manage risk is at the beginning of a project. The cost of managing risk is significantly less than the cost of realized risks. Proactive risk management is far more effective than reactive crisis management.",
            "tip",
            "Proactive Approach"
        ),

        keyPoints([
            "Risk is an uncertain event affecting project.",
            "Risk management includes identification, analysis, response.",
            "Risk Exposure = Probability × Impact.",
            "Four responses: Avoid, Transfer, Mitigate, Accept.",
            "Risk register documents all risks.",
            "Contingency plans prepare for risk occurrence.",
        ]),
    ],

    {
        summary:
            "Learn risk management: identification, analysis, prioritization, response strategies and risk register.",
        minutes: 14,
        tags: ["risk", "risk-management", "mitigation", "contingency", "important"],

        mcqs: [
            mcq(
                "Risk Exposure =",
                ["Probability + Impact", "Probability × Impact", "Probability - Impact", "Impact / Probability"],
                1,
                "Risk Exposure = Probability × Impact."
            ),
            mcq(
                "Which is NOT a risk response for threats?",
                ["Avoid", "Transfer", "Exploit", "Mitigate"],
                2,
                "Exploit is for opportunities, not threats."
            ),
            mcq(
                "Risk register is:",
                ["Software tool", "Document of risks", "Backup plan", "Cost estimate"],
                1,
                "Risk register is a document listing risks."
            ),
            mcq(
                "Contingency reserve is:",
                ["Extra time only", "Extra budget only", "Extra budget/time for risks", "Team members"],
                2,
                "Contingency reserve includes budget and time for risks."
            ),
        ],

        questions: [
            qa(
                "Explain the risk management process.",
                "Risk management is the systematic process of dealing with project uncertainties. It has six main steps: (1) Risk Identification — using brainstorming, checklists, SWOT analysis, and expert interviews to find all possible risks (technical, personnel, schedule, budget, external); (2) Risk Analysis — assessing each risk's probability and impact using qualitative (High/Medium/Low) or quantitative methods; (3) Risk Prioritization — ranking risks using Risk Exposure (Probability × Impact) and risk matrix to focus on critical risks first; (4) Risk Response Planning — developing strategies for each risk: Avoid (eliminate), Transfer (insurance/outsource), Mitigate (reduce), or Accept (contingency); (5) Risk Monitoring — continuously tracking identified risks and watching for new ones through regular reviews; (6) Risk Control — executing planned responses when risks occur and taking corrective actions. All risks are documented in a Risk Register with details like ID, description, probability, impact, response strategy and owner. Proactive risk management prevents crises and improves project success rate.",
                4
            ),
            qa(
                "Explain risk response strategies with examples.",
                "Risk response strategies are actions taken to address identified risks. For negative risks (threats), there are four strategies: (1) Avoid — eliminate the risk by changing the project plan. Example: If new technology is risky, use proven technology instead. (2) Transfer — shift risk responsibility to a third party through insurance, contracts, or outsourcing. Example: Purchase cyber insurance to transfer data breach risk. (3) Mitigate — reduce probability or impact by taking proactive actions. Example: Additional testing to reduce defect risk, redundant servers to prevent downtime. (4) Accept — acknowledge risk and prepare contingency plans. Example: Set aside budget reserve for schedule delays. For positive risks (opportunities): (1) Exploit — ensure opportunity happens by taking action. Example: Assign best team to capitalize on early delivery bonus. (2) Share — partner with others to maximize opportunity. Example: Joint venture for large contract. (3) Enhance — increase probability of occurrence. Example: Extra training to boost quality. (4) Accept — take advantage if opportunity arises without proactive action. Choosing appropriate strategy depends on risk severity, cost of response, and organizational risk tolerance.",
                4
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit1Topics = [
    introSPM,
    sdlcModels,
    projectPlanning,
    costEstimation,
    riskManagement,
];