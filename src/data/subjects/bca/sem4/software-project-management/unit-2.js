/* =========================================================
   BCA • SEM 4 • Software Project Management
   UNIT 2 — Team Management, Quality, Configuration and Agile
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
   TOPIC 1 — Team Management and Leadership
========================================================= */

const teamManagement = createTopic(
    "team-management-and-leadership",
    "Team Management and Leadership",

    [
        definition(
            "Team Management",
            "Team management is the ability of a manager or leader to lead a group of people to accomplish a task or common goal. It involves coordination, communication, motivation and conflict resolution."
        ),

        heading("Importance of Team Management"),

        list([
            "Achieves project objectives.",
            "Improves productivity.",
            "Enhances team morale.",
            "Reduces conflicts.",
            "Better decision-making.",
            "Higher employee retention.",
            "Improves communication.",
            "Encourages innovation.",
        ]),

        heading("Types of Software Teams"),

        table(
            ["Type", "Description"],
            [
                ["Democratic Team", "Everyone participates in decisions"],
                ["Chief Programmer Team", "Led by senior programmer"],
                ["Ego-less Team", "Shared responsibility, no ownership"],
                ["Scrum Team", "Self-organizing Agile team"],
                ["Cross-functional Team", "Various skills combined"],
                ["Virtual Team", "Distributed geographically"],
            ]
        ),

        heading("Team Structures"),

        heading("1. Chief Programmer Team"),

        text(
            "Led by a senior 'chief programmer' who makes all major decisions. Other members support with specialized roles."
        ),

        table(
            ["Role", "Responsibility"],
            [
                ["Chief Programmer", "Design and major coding"],
                ["Backup Programmer", "Assist chief programmer"],
                ["Librarian", "Maintain documentation"],
                ["Specialists", "Testing, tools, etc."],
            ]
        ),

        heading("2. Democratic Team"),

        text(
            "All team members participate equally in decision-making. No formal leader."
        ),

        heading("3. Modified Team Structure"),

        text(
            "Combines features of democratic and chief programmer teams. Team leader makes some decisions while others are made collectively."
        ),

        heading("Team Formation Stages (Tuckman's Model)"),

        steps([
            "Forming — Team members meet and learn about the project.",
            "Storming — Conflicts arise as members express opinions.",
            "Norming — Team establishes norms and roles.",
            "Performing — Team works efficiently toward goals.",
            "Adjourning — Project completion and team dispersal.",
        ]),

        heading("Team Roles"),

        table(
            ["Role", "Description"],
            [
                ["Project Manager", "Overall coordination"],
                ["Technical Lead", "Technical decisions"],
                ["Business Analyst", "Requirements analysis"],
                ["Developer", "Coding and implementation"],
                ["QA Engineer", "Testing and quality"],
                ["UI/UX Designer", "User interface design"],
                ["DevOps", "Deployment and operations"],
                ["Database Administrator", "Database management"],
            ]
        ),

        heading("Effective Team Characteristics"),

        list([
            "Clear common goals.",
            "Well-defined roles.",
            "Effective communication.",
            "Mutual trust and respect.",
            "Complementary skills.",
            "Collaborative environment.",
            "Regular feedback.",
            "Shared accountability.",
            "Continuous learning.",
            "Recognition and rewards.",
        ]),

        heading("Leadership Styles"),

        table(
            ["Style", "Description", "When to Use"],
            [
                ["Autocratic", "Leader decides alone", "Crisis situations"],
                ["Democratic", "Team participates", "Complex problems"],
                ["Laissez-faire", "Hands-off approach", "Expert teams"],
                ["Transformational", "Inspires and motivates", "Change initiatives"],
                ["Servant Leadership", "Leader serves team", "Agile teams"],
                ["Situational", "Adapts to situation", "Varied contexts"],
            ]
        ),

        heading("Qualities of a Good Leader"),

        list([
            "Vision and strategic thinking.",
            "Excellent communication.",
            "Integrity and honesty.",
            "Empathy and emotional intelligence.",
            "Decision-making ability.",
            "Delegation skills.",
            "Motivational skills.",
            "Adaptability.",
            "Technical competence.",
            "Conflict resolution.",
        ]),

        heading("Motivation Theories"),

        heading("Maslow's Hierarchy of Needs"),

        steps([
            "Physiological — Basic needs (food, shelter, salary).",
            "Safety — Job security, safe workplace.",
            "Social — Belongingness, teamwork.",
            "Esteem — Recognition, achievement.",
            "Self-actualization — Personal growth, creativity.",
        ]),

        heading("Herzberg's Two-Factor Theory"),

        table(
            ["Type", "Description", "Examples"],
            [
                ["Hygiene Factors", "Prevent dissatisfaction", "Salary, working conditions"],
                ["Motivators", "Create satisfaction", "Recognition, growth, achievement"],
            ]
        ),

        heading("McGregor's Theory X and Y"),

        table(
            ["Theory", "Assumption", "Management Style"],
            [
                ["Theory X", "People dislike work", "Authoritarian"],
                ["Theory Y", "People enjoy work", "Participative"],
            ]
        ),

        heading("Techniques to Motivate Team"),

        list([
            "Set clear goals and expectations.",
            "Recognize and reward good work.",
            "Provide learning opportunities.",
            "Offer career growth paths.",
            "Empower team members.",
            "Provide autonomy.",
            "Foster team spirit.",
            "Ensure work-life balance.",
            "Give constructive feedback.",
            "Create positive work environment.",
        ]),

        heading("Communication in Teams"),

        text(
            "Effective communication is critical for team success. Studies show that project managers spend 70-90% of their time communicating."
        ),

        heading("Types of Communication"),

        table(
            ["Type", "Description"],
            [
                ["Formal", "Official meetings, reports"],
                ["Informal", "Casual conversations"],
                ["Vertical", "Between levels (up/down)"],
                ["Horizontal", "Among peers"],
                ["Written", "Emails, documents"],
                ["Verbal", "Face-to-face, calls"],
                ["Non-verbal", "Body language, gestures"],
            ]
        ),

        heading("Communication Channels"),

        list([
            "Face-to-face meetings.",
            "Video conferencing.",
            "Phone calls.",
            "Emails.",
            "Instant messaging (Slack, Teams).",
            "Project management tools.",
            "Documentation.",
            "Reports and dashboards.",
        ]),

        heading("Barriers to Communication"),

        list([
            "Language differences.",
            "Cultural differences.",
            "Physical distance.",
            "Time zone differences.",
            "Poor listening skills.",
            "Ambiguous messages.",
            "Technical jargon.",
            "Emotional factors.",
            "Information overload.",
        ]),

        heading("Conflict Management"),

        definition(
            "Conflict",
            "Conflict is a disagreement or clash between team members due to different opinions, goals, values or interests."
        ),

        heading("Causes of Conflict"),

        list([
            "Personality differences.",
            "Resource competition.",
            "Communication breakdown.",
            "Unclear roles.",
            "Different priorities.",
            "Cultural differences.",
            "Work overload.",
            "Poor leadership.",
        ]),

        heading("Conflict Resolution Strategies"),

        table(
            ["Strategy", "Description", "When Used"],
            [
                ["Avoiding", "Ignore the conflict", "Minor issues"],
                ["Accommodating", "Give in to other party", "Preserve relationship"],
                ["Competing", "Assert your view", "Quick decisions needed"],
                ["Compromising", "Both give up something", "Time constraints"],
                ["Collaborating", "Win-win solution", "Important issues"],
            ]
        ),

        heading("Managing Remote/Virtual Teams"),

        list([
            "Use effective collaboration tools.",
            "Set clear communication norms.",
            "Schedule regular check-ins.",
            "Build trust through transparency.",
            "Respect time zones.",
            "Encourage informal interactions.",
            "Provide right technology.",
            "Focus on outcomes not activity.",
        ]),

        heading("Popular Team Collaboration Tools"),

        table(
            ["Tool", "Purpose"],
            [
                ["Slack, Teams", "Team communication"],
                ["Zoom, Google Meet", "Video conferencing"],
                ["Jira, Trello", "Project management"],
                ["GitHub, GitLab", "Code collaboration"],
                ["Confluence, Notion", "Documentation"],
                ["Miro, Figma", "Visual collaboration"],
                ["Google Workspace", "Document collaboration"],
            ]
        ),

        heading("Performance Management"),

        list([
            "Set SMART goals (Specific, Measurable, Achievable, Relevant, Time-bound).",
            "Regular one-on-one meetings.",
            "Provide continuous feedback.",
            "Conduct performance reviews.",
            "Recognize achievements.",
            "Address performance issues.",
            "Support skill development.",
            "Track key performance indicators (KPIs).",
        ]),

        note(
            "Great teams don't just happen — they are built through good leadership, clear communication and mutual trust. Invest time in team building, celebrate successes, and address issues quickly. Happy teams deliver better software.",
            "tip",
            "Team Building"
        ),

        keyPoints([
            "Effective teams have clear goals and roles.",
            "Team development goes through 5 stages.",
            "Different leadership styles suit different situations.",
            "Motivation drives performance and retention.",
            "Communication is critical for team success.",
            "Conflicts should be resolved constructively.",
        ]),
    ],

    {
        summary:
            "Learn team management, team structures, leadership styles, motivation, communication and conflict resolution.",
        minutes: 13,
        tags: ["team", "leadership", "motivation", "communication", "important"],

        mcqs: [
            mcq(
                "First stage of team formation is:",
                ["Storming", "Forming", "Norming", "Performing"],
                1,
                "Forming is the first stage in Tuckman's model."
            ),
            mcq(
                "Which leadership style suits Agile teams?",
                ["Autocratic", "Servant Leadership", "Laissez-faire", "Bureaucratic"],
                1,
                "Servant leadership works best for Agile teams."
            ),
            mcq(
                "Maslow's hierarchy has how many levels?",
                ["3", "4", "5", "6"],
                2,
                "Maslow's hierarchy has 5 levels."
            ),
            mcq(
                "SMART goals stand for:",
                ["Simple, Manageable, Attractive, Real, Timed", "Specific, Measurable, Achievable, Relevant, Time-bound", "Strong, Modern, Actual, Right, Ticked", "Static, Movable, Available, Ready, True"],
                1,
                "SMART = Specific, Measurable, Achievable, Relevant, Time-bound."
            ),
        ],

        questions: [
            qa(
                "Explain Tuckman's stages of team development.",
                "Bruce Tuckman proposed a model describing five stages of team development: (1) Forming — Team members meet and learn about each other and the project. Interactions are polite but superficial. Roles and responsibilities are unclear. Team members depend on leader for direction. (2) Storming — Conflicts arise as members express different opinions and compete for positions. Personality clashes occur, and team members may resist authority. This is a critical stage that must be navigated carefully. (3) Norming — Team establishes norms, agrees on processes and starts working together. Trust builds, roles become clear and members appreciate each other's strengths. (4) Performing — Team works efficiently as a well-oiled machine. High productivity, effective problem-solving and collaborative culture. This is the ideal state. (5) Adjourning — Also called mourning, this stage happens when the project ends and the team disbands. Members experience closure. Understanding these stages helps managers guide teams through development and recognize that team dynamics evolve over time.",
                4
            ),
            qa(
                "Explain motivation theories relevant to project management.",
                "Motivation is critical for team performance. Key theories include: (1) Maslow's Hierarchy of Needs — five levels: Physiological (salary, food), Safety (job security), Social (belongingness), Esteem (recognition), Self-actualization (growth). People move up as lower needs are satisfied. (2) Herzberg's Two-Factor Theory — divides factors into: Hygiene Factors (salary, working conditions) prevent dissatisfaction but don't motivate; Motivators (recognition, achievement, growth) create satisfaction and motivation. Absence of hygiene causes unhappiness, but their presence alone doesn't motivate. (3) McGregor's Theory X and Y — Theory X assumes people dislike work, need control and prefer direction (leads to authoritarian management); Theory Y assumes people enjoy work, are self-directed and seek responsibility (leads to participative management). Modern project managers should apply Theory Y and Herzberg's motivators — provide interesting work, recognition, growth opportunities, and empowerment. Regular feedback, career development, and celebrating achievements are practical applications. Motivated teams are more productive, creative and loyal.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — Software Quality Management
========================================================= */

const qualityManagement = createTopic(
    "software-quality-management",
    "Software Quality Management",

    [
        definition(
            "Software Quality",
            "Software quality is the degree to which a software product meets specified requirements, satisfies customer needs and adheres to quality standards. It includes functionality, reliability, usability, efficiency, maintainability and portability."
        ),

        definition(
            "Software Quality Management",
            "Software Quality Management (SQM) is a set of processes to ensure that software meets quality standards throughout its development life cycle. It includes quality planning, assurance and control."
        ),

        heading("Importance of Software Quality"),

        list([
            "Customer satisfaction.",
            "Reduced maintenance cost.",
            "Fewer defects and bugs.",
            "Better reliability.",
            "Enhanced reputation.",
            "Regulatory compliance.",
            "Competitive advantage.",
            "Increased revenue.",
        ]),

        heading("Software Quality Attributes"),

        heading("McCall's Quality Model"),

        text("McCall's model defines 11 quality factors grouped into three categories:"),

        table(
            ["Category", "Factors"],
            [
                ["Product Operation", "Correctness, Reliability, Efficiency, Integrity, Usability"],
                ["Product Revision", "Maintainability, Testability, Flexibility"],
                ["Product Transition", "Portability, Reusability, Interoperability"],
            ]
        ),

        heading("ISO 9126 Quality Model"),

        table(
            ["Attribute", "Description"],
            [
                ["Functionality", "Does the software do what it should?"],
                ["Reliability", "Does it work correctly under conditions?"],
                ["Usability", "Is it easy to use?"],
                ["Efficiency", "Does it perform well?"],
                ["Maintainability", "Is it easy to modify?"],
                ["Portability", "Can it run on different platforms?"],
            ]
        ),

        heading("Quality Management Processes"),

        heading("1. Quality Planning (QP)"),

        text(
            "Determining quality standards and how to achieve them. Documented in Quality Management Plan."
        ),

        list([
            "Define quality standards.",
            "Identify quality requirements.",
            "Plan quality activities.",
            "Assign responsibilities.",
            "Determine metrics.",
            "Plan reviews and audits.",
        ]),

        heading("2. Quality Assurance (QA)"),

        definition(
            "Quality Assurance",
            "Quality Assurance is a set of planned activities to ensure that software development processes are followed correctly to produce quality software. QA is process-oriented and preventive."
        ),

        heading("QA Activities"),

        list([
            "Process audits.",
            "Standards enforcement.",
            "Training team members.",
            "Reviews and inspections.",
            "Documentation review.",
            "Continuous improvement.",
        ]),

        heading("3. Quality Control (QC)"),

        definition(
            "Quality Control",
            "Quality Control involves activities to verify that the software product meets quality standards. QC is product-oriented and corrective."
        ),

        heading("QC Activities"),

        list([
            "Software testing.",
            "Defect identification.",
            "Root cause analysis.",
            "Verification of fixes.",
            "Measuring quality metrics.",
            "Reporting quality status.",
        ]),

        heading("QA vs QC"),

        table(
            ["Basis", "QA", "QC"],
            [
                ["Focus", "Process", "Product"],
                ["Approach", "Preventive", "Corrective"],
                ["Goal", "Prevent defects", "Find defects"],
                ["Timing", "Throughout SDLC", "After development"],
                ["Activities", "Reviews, audits", "Testing, inspection"],
                ["Responsibility", "Everyone", "Testing team"],
            ]
        ),

        heading("Software Testing"),

        definition(
            "Testing",
            "Software testing is the process of executing a program to find defects and verify that it meets requirements."
        ),

        heading("Types of Testing"),

        heading("Based on Execution"),

        table(
            ["Type", "Description"],
            [
                ["Static Testing", "Review without executing code"],
                ["Dynamic Testing", "Execute and verify software"],
            ]
        ),

        heading("Based on Knowledge"),

        table(
            ["Type", "Description"],
            [
                ["Black Box Testing", "Test functionality without knowing code"],
                ["White Box Testing", "Test with code knowledge"],
                ["Gray Box Testing", "Combination of both"],
            ]
        ),

        heading("Levels of Testing"),

        steps([
            "Unit Testing — Test individual components.",
            "Integration Testing — Test combined modules.",
            "System Testing — Test complete system.",
            "Acceptance Testing — Test by users/client.",
        ]),

        heading("Types of Testing"),

        table(
            ["Testing", "Purpose"],
            [
                ["Functional", "Verifies features work"],
                ["Non-functional", "Performance, security, usability"],
                ["Regression", "Ensures changes don't break existing"],
                ["Smoke", "Basic checks after new build"],
                ["Sanity", "Quick check on specific area"],
                ["Load", "System under expected load"],
                ["Stress", "System beyond limits"],
                ["Security", "Checks vulnerabilities"],
                ["Usability", "User-friendliness"],
                ["Compatibility", "Different browsers/devices"],
            ]
        ),

        heading("Testing Techniques"),

        heading("White Box Techniques"),

        list([
            "Statement Coverage.",
            "Branch Coverage.",
            "Path Coverage.",
            "Condition Coverage.",
            "Loop Testing.",
        ]),

        heading("Black Box Techniques"),

        list([
            "Equivalence Partitioning.",
            "Boundary Value Analysis.",
            "Decision Table Testing.",
            "State Transition Testing.",
            "Use Case Testing.",
        ]),

        heading("Reviews and Inspections"),

        table(
            ["Type", "Description"],
            [
                ["Walkthrough", "Author presents work informally"],
                ["Peer Review", "Colleagues review work"],
                ["Formal Inspection", "Structured review by team"],
                ["Code Review", "Review of source code"],
                ["Design Review", "Review of design documents"],
            ]
        ),

        heading("Quality Standards"),

        heading("ISO 9001"),

        text(
            "International standard for quality management systems. Focuses on continuous improvement and customer satisfaction."
        ),

        heading("CMMI (Capability Maturity Model Integration)"),

        definition(
            "CMMI",
            "CMMI is a process improvement framework that helps organizations improve their software development processes across five maturity levels."
        ),

        heading("CMMI Maturity Levels"),

        table(
            ["Level", "Name", "Description"],
            [
                ["1", "Initial", "Ad-hoc, chaotic"],
                ["2", "Managed", "Basic project management"],
                ["3", "Defined", "Standardized processes"],
                ["4", "Quantitatively Managed", "Measured and controlled"],
                ["5", "Optimizing", "Continuous improvement"],
            ]
        ),

        heading("Six Sigma"),

        text(
            "Data-driven approach to eliminate defects. Aims for 3.4 defects per million opportunities."
        ),

        heading("Six Sigma DMAIC"),

        steps([
            "Define — Define problem and goals.",
            "Measure — Collect data and measure.",
            "Analyze — Identify root causes.",
            "Improve — Implement solutions.",
            "Control — Monitor and sustain.",
        ]),

        heading("Software Metrics"),

        definition(
            "Software Metrics",
            "Software metrics are quantitative measures used to assess software quality, productivity, and progress."
        ),

        heading("Types of Metrics"),

        table(
            ["Type", "Examples"],
            [
                ["Product Metrics", "LOC, defect density, complexity"],
                ["Process Metrics", "Defect removal efficiency, cycle time"],
                ["Project Metrics", "Cost, schedule, effort"],
                ["Quality Metrics", "Defects, reliability, satisfaction"],
            ]
        ),

        heading("Key Quality Metrics"),

        table(
            ["Metric", "Formula"],
            [
                ["Defect Density", "Defects / KLOC"],
                ["Defect Removal Efficiency", "(Defects found / Total defects) × 100"],
                ["Test Coverage", "Tested code / Total code × 100"],
                ["Mean Time Between Failures (MTBF)", "Time between failures"],
                ["Customer Satisfaction", "Survey ratings"],
            ]
        ),

        heading("Cost of Quality"),

        table(
            ["Category", "Description"],
            [
                ["Prevention Cost", "Training, tools to prevent defects"],
                ["Appraisal Cost", "Testing, reviews, inspections"],
                ["Internal Failure Cost", "Fixing defects before release"],
                ["External Failure Cost", "Fixing defects after release"],
            ]
        ),

        text(
            "Total Cost of Quality = Prevention + Appraisal + Internal Failure + External Failure Costs"
        ),

        heading("Best Practices for Software Quality"),

        list([
            "Involve QA from beginning.",
            "Follow coding standards.",
            "Regular code reviews.",
            "Automate testing.",
            "Continuous integration.",
            "Document everything.",
            "Train team on quality.",
            "Measure quality metrics.",
            "Learn from defects.",
            "Focus on user experience.",
        ]),

        note(
            "Quality is not an act, it's a habit. Building quality into the process is far more effective and less expensive than trying to inspect it at the end. Every team member is responsible for quality.",
            "tip",
            "Quality Culture"
        ),

        keyPoints([
            "Quality is meeting requirements and customer needs.",
            "QA is process-oriented; QC is product-oriented.",
            "Testing at multiple levels ensures quality.",
            "CMMI has 5 maturity levels.",
            "Metrics help measure and improve quality.",
            "Cost of prevention is less than cost of failure.",
        ]),
    ],

    {
        summary:
            "Learn software quality management, QA vs QC, testing types, quality models, standards and metrics.",
        minutes: 14,
        tags: ["quality", "testing", "cmmi", "iso", "metrics", "important"],

        mcqs: [
            mcq(
                "QA is:",
                ["Product-oriented", "Process-oriented", "Only testing", "Same as QC"],
                1,
                "QA is process-oriented (preventive)."
            ),
            mcq(
                "CMMI has how many levels?",
                ["3", "4", "5", "6"],
                2,
                "CMMI has 5 maturity levels."
            ),
            mcq(
                "Which is white box testing technique?",
                ["Boundary Value", "Path Coverage", "Equivalence Partitioning", "Use Case"],
                1,
                "Path Coverage is white box technique."
            ),
            mcq(
                "Six Sigma aims for defects per million:",
                ["100", "3.4", "1000", "10"],
                1,
                "Six Sigma targets 3.4 defects per million."
            ),
        ],

        questions: [
            qa(
                "Differentiate between QA and QC.",
                "Quality Assurance (QA) and Quality Control (QC) are both parts of Software Quality Management but differ significantly. QA is process-oriented and focuses on preventing defects through proper processes and standards. It includes activities like process audits, standards enforcement, training, reviews and inspections. QA is proactive and applied throughout the SDLC. Everyone is responsible for QA. QC is product-oriented and focuses on identifying defects in the finished product. It includes activities like software testing, defect identification, root cause analysis and verification of fixes. QC is reactive and typically applied after development. Testing team is primarily responsible for QC. Key differences: QA prevents defects while QC detects them; QA improves processes while QC improves products; QA is done during development while QC is done after; QA uses tools like reviews and audits while QC uses tools like test cases and tools. Both are essential — QA ensures quality is built into the process, while QC verifies the final product meets quality standards.",
                4
            ),
            qa(
                "Explain CMMI and its maturity levels.",
                "Capability Maturity Model Integration (CMMI) is a process improvement framework developed by the Software Engineering Institute (SEI) at Carnegie Mellon University. It helps organizations improve their software development and other business processes across five maturity levels: (1) Level 1 - Initial — Processes are ad-hoc, unpredictable and chaotic. Success depends on individual heroics. Most organizations start here. (2) Level 2 - Managed — Basic project management processes are established. Projects are planned, executed and controlled. Similar projects can repeat success. (3) Level 3 - Defined — Standardized processes across the organization. Tailored to specific projects but based on organizational standards. Proactive quality management. (4) Level 4 - Quantitatively Managed — Processes are measured and controlled using quantitative data. Statistical techniques used to manage processes. Predictable performance. (5) Level 5 - Optimizing — Continuous process improvement through incremental and innovative changes. Focus on preventing defects rather than detecting them. Organizations climb these levels progressively to improve quality, productivity and predictability. CMMI certification is widely recognized and often required for government and enterprise contracts.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — Configuration Management
========================================================= */

const configurationManagement = createTopic(
    "configuration-management",
    "Configuration Management",

    [
        definition(
            "Software Configuration Management (SCM)",
            "Software Configuration Management is the discipline of managing changes to software artifacts throughout the development lifecycle. It ensures the integrity, traceability and consistency of software products."
        ),

        heading("Importance of SCM"),

        list([
            "Manages changes systematically.",
            "Maintains version history.",
            "Enables team collaboration.",
            "Prevents conflicts.",
            "Ensures traceability.",
            "Supports rollback.",
            "Compliance with standards.",
            "Better release management.",
        ]),

        heading("SCM Activities"),

        table(
            ["Activity", "Description"],
            [
                ["Identification", "Identify configuration items"],
                ["Version Control", "Track versions of artifacts"],
                ["Change Control", "Manage change requests"],
                ["Configuration Audit", "Verify integrity"],
                ["Status Accounting", "Track status of changes"],
                ["Release Management", "Manage releases"],
            ]
        ),

        heading("Configuration Items (CIs)"),

        definition(
            "Configuration Item",
            "A Configuration Item is any artifact that needs to be controlled including source code, documents, test cases, requirements and build files."
        ),

        heading("Common Configuration Items"),

        list([
            "Source code files.",
            "Requirements documents.",
            "Design documents.",
            "Test plans and cases.",
            "Executables and libraries.",
            "Database scripts.",
            "Configuration files.",
            "User manuals.",
            "Build scripts.",
            "Third-party libraries.",
        ]),

        heading("Version Control"),

        definition(
            "Version Control",
            "Version control is a system that records changes to files over time so that specific versions can be recalled later. It enables multiple people to work on same files simultaneously."
        ),

        heading("Benefits of Version Control"),

        list([
            "Track all changes.",
            "Rollback to previous versions.",
            "Compare changes.",
            "Branch for parallel development.",
            "Merge changes from multiple developers.",
            "Backup and recovery.",
            "Audit trail of who changed what.",
            "Enables collaboration.",
        ]),

        heading("Types of Version Control Systems"),

        table(
            ["Type", "Description", "Examples"],
            [
                ["Local", "On single computer", "RCS"],
                ["Centralized (CVCS)", "Single central server", "SVN, CVS"],
                ["Distributed (DVCS)", "Every user has complete repository", "Git, Mercurial"],
            ]
        ),

        heading("Git - Distributed Version Control"),

        definition(
            "Git",
            "Git is the most popular distributed version control system. It was created by Linus Torvalds in 2005 and is used by millions of developers worldwide."
        ),

        heading("Git Features"),

        list([
            "Distributed architecture.",
            "Fast and efficient.",
            "Branching and merging.",
            "Data integrity.",
            "Offline work.",
            "Free and open source.",
            "Wide industry adoption.",
        ]),

        heading("Basic Git Commands"),

        code(
            `# Initialize repository
git init

# Clone repository
git clone <url>

# Check status
git status

# Add files to staging
git add filename
git add .

# Commit changes
git commit -m "Commit message"

# Push to remote
git push origin main

# Pull from remote
git pull origin main

# View history
git log

# Create branch
git branch feature-1

# Switch branch
git checkout feature-1

# Create and switch
git checkout -b feature-2

# Merge branch
git merge feature-1

# View branches
git branch`,
            "bash",
            "Common Git commands"
        ),

        heading("Git Workflow"),

        steps([
            "Working Directory — Files being edited.",
            "Staging Area — Files ready to commit.",
            "Local Repository — Committed changes.",
            "Remote Repository — Shared server (GitHub/GitLab).",
        ]),

        heading("Branching Strategies"),

        heading("Git Flow"),

        text(
            "A popular branching model with dedicated branches for features, releases and hotfixes."
        ),

        table(
            ["Branch", "Purpose"],
            [
                ["main/master", "Production-ready code"],
                ["develop", "Integration branch"],
                ["feature/*", "New features"],
                ["release/*", "Release preparation"],
                ["hotfix/*", "Urgent production fixes"],
            ]
        ),

        heading("GitHub Flow"),

        text(
            "Simpler workflow with feature branches merged into main via pull requests."
        ),

        steps([
            "Create branch from main.",
            "Develop feature and commit.",
            "Open pull request.",
            "Discuss and review.",
            "Merge to main after approval.",
            "Deploy to production.",
        ]),

        heading("Popular Git Hosting Platforms"),

        table(
            ["Platform", "Description"],
            [
                ["GitHub", "Most popular; owned by Microsoft"],
                ["GitLab", "Complete DevOps platform"],
                ["Bitbucket", "By Atlassian, integrates with Jira"],
                ["Azure DevOps", "Microsoft's platform"],
                ["AWS CodeCommit", "Amazon's Git service"],
            ]
        ),

        heading("Change Management"),

        definition(
            "Change Management",
            "Change management is the process of managing changes to software products in a controlled manner, ensuring changes are properly evaluated, approved, implemented and tracked."
        ),

        heading("Change Management Process"),

        steps([
            "Change Request — Submit change request.",
            "Impact Analysis — Assess impact on scope, cost, schedule.",
            "Approval — Change Control Board (CCB) approves/rejects.",
            "Implementation — Make the change.",
            "Verification — Test the change.",
            "Closure — Update documentation and close request.",
        ]),

        heading("Change Control Board (CCB)"),

        text(
            "A group of stakeholders responsible for reviewing and approving proposed changes. Members typically include project manager, technical lead, business analyst and client representative."
        ),

        heading("Baseline"),

        definition(
            "Baseline",
            "A baseline is a formally approved version of a configuration item that serves as a reference for further development. Changes to baseline require formal change control."
        ),

        heading("Common Baselines"),

        table(
            ["Baseline", "Description"],
            [
                ["Functional", "Approved requirements"],
                ["Allocated", "Approved design"],
                ["Product", "Approved product for release"],
            ]
        ),

        heading("Release Management"),

        definition(
            "Release Management",
            "Release management is the process of planning, scheduling, controlling and deploying software releases to production environments."
        ),

        heading("Release Types"),

        table(
            ["Type", "Description"],
            [
                ["Major Release", "Significant changes, new features"],
                ["Minor Release", "Enhancements to existing features"],
                ["Patch/Bug Fix", "Bug fixes only"],
                ["Hotfix", "Urgent production fix"],
            ]
        ),

        heading("Versioning Schemes"),

        heading("Semantic Versioning (SemVer)"),

        text("Format: MAJOR.MINOR.PATCH (e.g., 2.5.1)"),

        table(
            ["Number", "When Increment"],
            [
                ["MAJOR", "Breaking changes"],
                ["MINOR", "New features (backward compatible)"],
                ["PATCH", "Bug fixes"],
            ]
        ),

        heading("Release Process"),

        steps([
            "Plan release scope and schedule.",
            "Freeze code (code freeze).",
            "Run full regression testing.",
            "Perform user acceptance testing.",
            "Create release notes.",
            "Deploy to production.",
            "Monitor and support.",
            "Post-release review.",
        ]),

        heading("Continuous Integration/Continuous Deployment (CI/CD)"),

        definition(
            "CI/CD",
            "CI/CD is a modern practice that automates the process of integrating code changes, testing them and deploying to production, enabling frequent and reliable releases."
        ),

        heading("Continuous Integration (CI)"),

        list([
            "Developers merge changes frequently.",
            "Automated build and test.",
            "Early detection of integration issues.",
            "Improves code quality.",
        ]),

        heading("Continuous Deployment (CD)"),

        list([
            "Automated deployment to production.",
            "Faster time to market.",
            "Reduced manual errors.",
            "Consistent deployment process.",
        ]),

        heading("Popular CI/CD Tools"),

        table(
            ["Tool", "Description"],
            [
                ["Jenkins", "Open source, widely used"],
                ["GitHub Actions", "Integrated with GitHub"],
                ["GitLab CI/CD", "Built into GitLab"],
                ["CircleCI", "Cloud-based CI/CD"],
                ["Travis CI", "Popular for open source"],
                ["Azure Pipelines", "Microsoft's CI/CD"],
                ["Bamboo", "By Atlassian"],
            ]
        ),

        heading("Configuration Management Tools"),

        table(
            ["Tool", "Purpose"],
            [
                ["Git", "Version control"],
                ["SVN", "Centralized version control"],
                ["Ansible", "Configuration automation"],
                ["Chef", "Infrastructure automation"],
                ["Puppet", "System configuration"],
                ["Docker", "Container management"],
                ["Kubernetes", "Container orchestration"],
            ]
        ),

        note(
            "Version control is not just for code — use it for documentation, configurations, scripts and even database schemas. Never work without version control on any serious project.",
            "tip",
            "Always Use Version Control"
        ),

        keyPoints([
            "SCM manages changes to software artifacts.",
            "Version control tracks file changes over time.",
            "Git is the most popular DVCS.",
            "Baselines are approved reference versions.",
            "Change control ensures managed changes.",
            "CI/CD automates integration and deployment.",
        ]),
    ],

    {
        summary:
            "Learn Software Configuration Management: version control, Git, change management, baselines, release management and CI/CD.",
        minutes: 14,
        tags: ["scm", "git", "version-control", "release", "ci-cd", "important"],

        mcqs: [
            mcq(
                "Git is:",
                ["Centralized VCS", "Distributed VCS", "Local VCS", "No VCS"],
                1,
                "Git is a distributed version control system."
            ),
            mcq(
                "Semantic versioning format:",
                ["X.Y", "MAJOR.MINOR.PATCH", "YYYY.MM.DD", "Version X"],
                1,
                "SemVer uses MAJOR.MINOR.PATCH."
            ),
            mcq(
                "Baseline is:",
                ["First version", "Approved reference version", "Latest version", "Test version"],
                1,
                "Baseline is a formally approved version."
            ),
            mcq(
                "CCB stands for:",
                ["Change Control Board", "Code Configuration Base", "Central Control Bureau", "Change Committee Board"],
                0,
                "CCB is Change Control Board."
            ),
        ],

        questions: [
            qa(
                "What is Software Configuration Management? Explain its activities.",
                "Software Configuration Management (SCM) is a discipline for managing changes to software artifacts throughout the development lifecycle. It ensures integrity, traceability and consistency of software products. Main activities include: (1) Configuration Identification — Identify items that need to be controlled (source code, documents, tests, build files); (2) Version Control — Track different versions of each configuration item using tools like Git or SVN; (3) Change Control — Manage change requests through formal process involving impact analysis, approval by Change Control Board (CCB), implementation and verification; (4) Configuration Audit — Verify that configuration items meet requirements and are properly identified; (5) Status Accounting — Track and report status of configuration items and change requests; (6) Release Management — Plan, schedule and deploy releases to production. SCM benefits include managed changes, version history, team collaboration, conflict prevention, traceability, ability to rollback, and support for compliance. Without SCM, projects face chaos, lost changes and difficulty coordinating team work.",
                4
            ),
            qa(
                "Explain Git and its basic commands.",
                "Git is the most popular distributed version control system, created by Linus Torvalds in 2005. Unlike centralized systems, every developer has a complete copy of the repository including full history. Git is fast, supports branching and merging efficiently, works offline, and ensures data integrity. Basic Git commands: git init — initialize new repository; git clone <url> — copy existing repository; git status — check current state; git add <file> or git add . — stage changes; git commit -m 'message' — commit staged changes with message; git push origin main — upload commits to remote; git pull origin main — download and merge remote changes; git log — view commit history; git branch <name> — create new branch; git checkout <branch> — switch branches; git checkout -b <name> — create and switch to new branch; git merge <branch> — combine branches. Git workflow involves: Working Directory (edit) → Staging Area (add) → Local Repository (commit) → Remote Repository (push). Popular Git hosting platforms include GitHub, GitLab and Bitbucket, which add features like pull requests, issues and CI/CD.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — Agile Methodologies and Scrum
========================================================= */

const agileScrum = createTopic(
    "agile-methodologies-and-scrum",
    "Agile Methodologies and Scrum",

    [
        definition(
            "Agile Methodology",
            "Agile is an iterative approach to software development that emphasizes flexibility, customer collaboration and rapid delivery of working software in small increments."
        ),

        heading("Agile Manifesto (2001)"),

        text("Four core values:"),

        list([
            "Individuals and interactions over processes and tools.",
            "Working software over comprehensive documentation.",
            "Customer collaboration over contract negotiation.",
            "Responding to change over following a plan.",
        ]),

        heading("12 Agile Principles"),

        list([
            "Customer satisfaction through early and continuous delivery.",
            "Welcome changing requirements, even late in development.",
            "Deliver working software frequently (weeks, not months).",
            "Business people and developers work together daily.",
            "Build projects around motivated individuals.",
            "Face-to-face conversation is the best communication.",
            "Working software is the primary measure of progress.",
            "Sustainable development pace.",
            "Continuous attention to technical excellence.",
            "Simplicity is essential.",
            "Self-organizing teams produce best designs.",
            "Regular reflection and adjustment.",
        ]),

        heading("Traditional vs Agile"),

        table(
            ["Aspect", "Traditional (Waterfall)", "Agile"],
            [
                ["Approach", "Sequential", "Iterative"],
                ["Planning", "Upfront", "Continuous"],
                ["Changes", "Difficult", "Welcome"],
                ["Delivery", "End of project", "Incremental"],
                ["Documentation", "Extensive", "Just enough"],
                ["Customer involvement", "Beginning and end", "Throughout"],
                ["Team", "Large, hierarchical", "Small, self-organizing"],
            ]
        ),

        heading("Agile Frameworks"),

        table(
            ["Framework", "Description"],
            [
                ["Scrum", "Iterative with sprints (most popular)"],
                ["Kanban", "Visual workflow management"],
                ["XP (Extreme Programming)", "Focus on code quality practices"],
                ["Lean", "Eliminate waste, deliver value"],
                ["SAFe", "Scaled Agile for enterprises"],
                ["Crystal", "Family of methodologies"],
                ["DSDM", "Dynamic Systems Development Method"],
            ]
        ),

        heading("Scrum Framework"),

        definition(
            "Scrum",
            "Scrum is the most popular Agile framework for managing complex projects. It uses fixed-length iterations called sprints (usually 2-4 weeks) to deliver working software incrementally."
        ),

        heading("Scrum Roles"),

        table(
            ["Role", "Responsibility"],
            [
                ["Product Owner", "Defines what to build (product backlog)"],
                ["Scrum Master", "Facilitates process, removes obstacles"],
                ["Development Team", "Builds the product (3-9 members)"],
            ]
        ),

        heading("Product Owner"),

        list([
            "Represents customer/business.",
            "Manages product backlog.",
            "Prioritizes features.",
            "Accepts or rejects work.",
            "Sets vision and roadmap.",
            "Available to answer questions.",
        ]),

        heading("Scrum Master"),

        list([
            "Servant leader for the team.",
            "Facilitates Scrum events.",
            "Removes impediments.",
            "Protects team from distractions.",
            "Coaches team on Scrum.",
            "Ensures Scrum is followed.",
        ]),

        heading("Development Team"),

        list([
            "Self-organizing.",
            "Cross-functional (all skills needed).",
            "3 to 9 members ideal.",
            "Commits to sprint goal.",
            "Delivers working software.",
            "Accountable for quality.",
        ]),

        heading("Scrum Events (Ceremonies)"),

        table(
            ["Event", "Duration", "Purpose"],
            [
                ["Sprint Planning", "2-4 hours", "Plan sprint work"],
                ["Daily Scrum (Standup)", "15 minutes", "Sync team daily"],
                ["Sprint Review", "1-2 hours", "Demo work to stakeholders"],
                ["Sprint Retrospective", "1-2 hours", "Improve process"],
                ["Sprint", "1-4 weeks", "Time-boxed iteration"],
            ]
        ),

        heading("Sprint Planning"),

        text(
            "Meeting at start of sprint to plan work. The team selects items from product backlog to complete in the sprint and creates sprint backlog."
        ),

        heading("Daily Scrum"),

        text(
            "15-minute daily meeting where team members answer three questions:"
        ),

        list([
            "What did I do yesterday?",
            "What will I do today?",
            "Are there any impediments?",
        ]),

        heading("Sprint Review"),

        text(
            "Meeting at end of sprint to demonstrate completed work to stakeholders and get feedback."
        ),

        heading("Sprint Retrospective"),

        text(
            "Team reflects on the sprint to identify what went well, what didn't and what to improve."
        ),

        heading("Scrum Artifacts"),

        table(
            ["Artifact", "Description"],
            [
                ["Product Backlog", "Prioritized list of all work"],
                ["Sprint Backlog", "Work committed for current sprint"],
                ["Increment", "Working product delivered each sprint"],
            ]
        ),

        heading("Product Backlog"),

        definition(
            "Product Backlog",
            "The Product Backlog is an ordered list of all features, requirements, enhancements and fixes needed for the product. It is continuously refined and prioritized by the Product Owner."
        ),

        heading("User Stories"),

        definition(
            "User Story",
            "A user story is a short description of a feature from the user's perspective. Format: 'As a [role], I want [feature] so that [benefit].'"
        ),

        text("Example: 'As a customer, I want to search products by category so that I can quickly find what I need.'"),

        heading("Story Points"),

        text(
            "Relative measure of effort required. Uses Fibonacci sequence (1, 2, 3, 5, 8, 13, 21). Larger stories should be broken down."
        ),

        heading("Definition of Done (DoD)"),

        text(
            "Team's agreement on what makes a story 'done'. Example: code written, tests passing, code reviewed, documentation updated, deployed to staging."
        ),

        heading("Velocity"),

        definition(
            "Velocity",
            "Velocity is the average number of story points a team completes per sprint. It helps in planning future sprints and forecasting delivery."
        ),

        heading("Kanban"),

        definition(
            "Kanban",
            "Kanban is an Agile framework focused on visualizing work, limiting work in progress (WIP) and maximizing flow. Unlike Scrum, it has no fixed iterations."
        ),

        heading("Kanban Principles"),

        list([
            "Visualize workflow (Kanban board).",
            "Limit work in progress (WIP).",
            "Manage flow.",
            "Make policies explicit.",
            "Implement feedback loops.",
            "Improve collaboratively.",
        ]),

        heading("Kanban Board"),

        text("Simple Kanban board with columns:"),

        table(
            ["To Do", "In Progress", "Testing", "Done"],
            [
                ["Task 1", "Task 3", "Task 5", "Task 7"],
                ["Task 2", "Task 4", "Task 6", "Task 8"],
            ]
        ),

        heading("Scrum vs Kanban"),

        table(
            ["Basis", "Scrum", "Kanban"],
            [
                ["Iterations", "Fixed sprints", "Continuous flow"],
                ["Roles", "Defined roles", "No specific roles"],
                ["Planning", "Sprint planning", "Just-in-time"],
                ["Metrics", "Velocity", "Cycle time, WIP"],
                ["Changes", "Not during sprint", "Anytime"],
                ["Board", "Reset each sprint", "Continuous"],
            ]
        ),

        heading("Extreme Programming (XP)"),

        definition(
            "XP",
            "Extreme Programming is an Agile methodology that emphasizes engineering practices for producing high-quality software. It advocates values like communication, simplicity, feedback, courage and respect."
        ),

        heading("XP Practices"),

        list([
            "Pair Programming — Two developers work together.",
            "Test-Driven Development (TDD).",
            "Continuous Integration.",
            "Small Releases.",
            "Refactoring — Improve code without changing behavior.",
            "Simple Design.",
            "Collective Code Ownership.",
            "Coding Standards.",
            "Sustainable Pace (40-hour week).",
            "On-site Customer.",
        ]),

        heading("Test-Driven Development (TDD)"),

        steps([
            "Write a test for new functionality.",
            "Run test (it should fail).",
            "Write minimum code to pass test.",
            "Run test (should pass).",
            "Refactor code.",
            "Repeat cycle.",
        ]),

        heading("Advantages of Agile"),

        list([
            "Faster time to market.",
            "Better quality through continuous testing.",
            "Higher customer satisfaction.",
            "Flexible and adaptive to changes.",
            "Reduced risk.",
            "Better team morale.",
            "Continuous improvement.",
            "Early ROI.",
        ]),

        heading("Challenges in Agile"),

        list([
            "Requires cultural change.",
            "Difficult for large teams.",
            "Less documentation can be issue.",
            "Requires experienced team.",
            "Client must be available.",
            "Difficult to estimate long-term.",
            "Not suitable for all projects.",
            "Distributed teams face challenges.",
        ]),

        heading("Popular Agile Tools"),

        table(
            ["Tool", "Purpose"],
            [
                ["Jira", "Most popular Agile tool"],
                ["Trello", "Simple Kanban boards"],
                ["Azure DevOps", "Microsoft's Agile suite"],
                ["Asana", "Project management"],
                ["Monday.com", "Work management"],
                ["Rally", "Enterprise Agile"],
                ["Pivotal Tracker", "Story-focused tool"],
            ]
        ),

        note(
            "Agile is a mindset, not just a set of practices. Simply following Scrum ceremonies without embracing Agile values leads to 'zombie Scrum' — going through the motions without real benefits. Culture and mindset are equally important.",
            "tip",
            "Agile Mindset"
        ),

        keyPoints([
            "Agile emphasizes flexibility and customer collaboration.",
            "Scrum is the most popular Agile framework.",
            "Sprints are time-boxed iterations (2-4 weeks).",
            "Product Owner, Scrum Master, Dev Team are Scrum roles.",
            "Kanban focuses on flow and limiting WIP.",
            "XP emphasizes engineering practices.",
        ]),
    ],

    {
        summary:
            "Learn Agile methodologies, Scrum framework, roles, events, artifacts, Kanban and XP.",
        minutes: 15,
        tags: ["agile", "scrum", "kanban", "xp", "sprint", "important"],

        mcqs: [
            mcq(
                "Scrum sprint typically lasts:",
                ["1 day", "2-4 weeks", "6 months", "1 year"],
                1,
                "Sprints usually last 2-4 weeks."
            ),
            mcq(
                "Who prioritizes product backlog?",
                ["Scrum Master", "Product Owner", "Developer", "Client"],
                1,
                "Product Owner prioritizes backlog."
            ),
            mcq(
                "Daily Scrum lasts:",
                ["5 minutes", "15 minutes", "30 minutes", "1 hour"],
                1,
                "Daily Scrum is 15 minutes."
            ),
            mcq(
                "TDD steps: Write test →",
                ["Write code → Refactor", "Deploy → Test", "Design → Code", "Plan → Build"],
                0,
                "TDD: Write test, write code, refactor."
            ),
        ],

        questions: [
            qa(
                "Explain Scrum framework with its roles and ceremonies.",
                "Scrum is the most popular Agile framework for managing complex projects using time-boxed iterations called sprints (2-4 weeks). Scrum has three roles: (1) Product Owner — Represents customer, manages and prioritizes product backlog, defines features, accepts work; (2) Scrum Master — Servant leader who facilitates the process, removes impediments, coaches team, ensures Scrum practices are followed; (3) Development Team — 3-9 self-organizing cross-functional members who build the product. Scrum has five events: (1) Sprint (1-4 weeks) — Time-boxed iteration to build product increment; (2) Sprint Planning (2-4 hours) — Team plans work for the sprint; (3) Daily Scrum (15 min) — Daily sync answering: what I did yesterday, what I'll do today, any impediments; (4) Sprint Review (1-2 hours) — Demo completed work to stakeholders; (5) Sprint Retrospective (1-2 hours) — Team reflects on how to improve. Three artifacts: Product Backlog (all requested work), Sprint Backlog (work for current sprint), Increment (working software). Scrum promotes transparency, inspection and adaptation for continuous improvement.",
                4
            ),
            qa(
                "Differentiate between Scrum and Kanban.",
                "Scrum and Kanban are both popular Agile frameworks but differ in approach. Scrum uses fixed-length iterations called sprints (typically 2-4 weeks) while Kanban uses continuous flow without fixed iterations. Scrum has defined roles (Product Owner, Scrum Master, Development Team) while Kanban has no specific roles. Scrum plans work in advance during Sprint Planning while Kanban uses just-in-time planning. Scrum measures velocity (story points per sprint) while Kanban measures cycle time and WIP (Work In Progress). In Scrum, changes are generally not allowed mid-sprint but in Kanban, priorities can change anytime. Scrum board is reset each sprint while Kanban board is continuous. Scrum has time-boxed ceremonies (Daily Scrum, Sprint Review, Retrospective) while Kanban has flexible meetings. Scrum works well for projects with defined scope and needing regular delivery; Kanban works better for maintenance work, continuous delivery and teams handling varied requests. Some teams combine both as 'Scrumban' — using Scrum's structure with Kanban's visualization and flow principles.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 5 — Project Monitoring, Control and Closure
========================================================= */

const projectMonitoringControl = createTopic(
    "project-monitoring-control-and-closure",
    "Project Monitoring, Control and Closure",

    [
        definition(
            "Project Monitoring and Control",
            "Project Monitoring and Control is the process of tracking, reviewing and regulating project progress and performance to identify variances from the plan and take corrective actions."
        ),

        heading("Purpose of Monitoring and Control"),

        list([
            "Track actual progress vs plan.",
            "Identify deviations early.",
            "Take timely corrective actions.",
            "Manage risks and issues.",
            "Communicate status to stakeholders.",
            "Ensure quality standards.",
            "Manage changes.",
            "Update project documents.",
        ]),

        heading("Monitoring Activities"),

        list([
            "Track schedule progress.",
            "Monitor budget/costs.",
            "Review scope and requirements.",
            "Check quality metrics.",
            "Assess team performance.",
            "Track risks and issues.",
            "Review deliverables.",
            "Monitor stakeholder satisfaction.",
        ]),

        heading("Key Performance Indicators (KPIs)"),

        table(
            ["KPI", "Description"],
            [
                ["Schedule Variance (SV)", "Difference from planned schedule"],
                ["Cost Variance (CV)", "Difference from budgeted cost"],
                ["Schedule Performance Index (SPI)", "Efficiency of schedule"],
                ["Cost Performance Index (CPI)", "Cost efficiency"],
                ["Defect Density", "Defects per KLOC"],
                ["Team Productivity", "Output per team member"],
                ["Customer Satisfaction", "Client feedback score"],
            ]
        ),

        heading("Earned Value Management (EVM)"),

        definition(
            "EVM",
            "Earned Value Management is a project performance measurement technique that integrates scope, schedule and cost to measure project progress and forecast final outcomes."
        ),

        heading("EVM Key Terms"),

        table(
            ["Term", "Description"],
            [
                ["Planned Value (PV)", "Budgeted cost of work scheduled"],
                ["Earned Value (EV)", "Budgeted cost of work performed"],
                ["Actual Cost (AC)", "Actual cost of work performed"],
                ["Budget at Completion (BAC)", "Total project budget"],
                ["Estimate at Completion (EAC)", "Forecasted total cost"],
            ]
        ),

        heading("EVM Formulas"),

        text("Schedule Variance (SV) = EV - PV"),

        text("Cost Variance (CV) = EV - AC"),

        text("Schedule Performance Index (SPI) = EV / PV"),

        text("Cost Performance Index (CPI) = EV / AC"),

        text("Estimate at Completion (EAC) = BAC / CPI"),

        heading("Interpretation"),

        table(
            ["Value", "Meaning"],
            [
                ["SV > 0", "Ahead of schedule"],
                ["SV = 0", "On schedule"],
                ["SV < 0", "Behind schedule"],
                ["CV > 0", "Under budget"],
                ["CV < 0", "Over budget"],
                ["SPI > 1", "Efficient scheduling"],
                ["CPI > 1", "Efficient cost management"],
            ]
        ),

        heading("EVM Example"),

        text("Project has BAC = $100,000, planned 50% complete by month 3 (PV = $50,000)."),

        text("Actual: 40% complete, AC = $45,000"),

        text("EV = 40% × $100,000 = $40,000"),

        text("SV = $40,000 - $50,000 = -$10,000 (behind schedule)"),

        text("CV = $40,000 - $45,000 = -$5,000 (over budget)"),

        text("SPI = 40,000/50,000 = 0.8 (80% efficient)"),

        text("CPI = 40,000/45,000 = 0.89 (89% efficient)"),

        text("EAC = 100,000 / 0.89 = $112,360 (forecast total cost)"),

        heading("Progress Reporting"),

        heading("Types of Reports"),

        table(
            ["Report", "Frequency", "Audience"],
            [
                ["Status Report", "Weekly/Bi-weekly", "Team, stakeholders"],
                ["Progress Report", "Monthly", "Management, sponsors"],
                ["Executive Summary", "Monthly/Quarterly", "Executives"],
                ["Dashboard", "Real-time", "All stakeholders"],
                ["Issue Log", "As needed", "Team, management"],
                ["Change Log", "As needed", "Change Control Board"],
            ]
        ),

        heading("Status Report Contents"),

        list([
            "Project overview.",
            "Progress summary.",
            "Completed tasks.",
            "Upcoming tasks.",
            "Issues and risks.",
            "Budget status.",
            "Schedule status.",
            "Next steps.",
        ]),

        heading("Meetings for Monitoring"),

        table(
            ["Meeting", "Frequency", "Purpose"],
            [
                ["Daily Standup", "Daily", "Team coordination"],
                ["Sprint Review", "End of sprint", "Demo work"],
                ["Weekly Status", "Weekly", "Team status"],
                ["Steering Committee", "Monthly", "Strategic decisions"],
                ["Client Meetings", "Bi-weekly", "Client updates"],
                ["Retrospective", "End of sprint", "Process improvement"],
            ]
        ),

        heading("Change Management"),

        heading("Change Control Process"),

        steps([
            "Change Request submitted.",
            "Impact analysis performed.",
            "Change Control Board reviews.",
            "Approval or rejection.",
            "If approved, implement change.",
            "Update project documents.",
            "Communicate to stakeholders.",
            "Close change request.",
        ]),

        heading("Scope Creep"),

        definition(
            "Scope Creep",
            "Scope creep is uncontrolled expansion of project scope without corresponding adjustments to time, cost or resources. It's a common cause of project failure."
        ),

        heading("Preventing Scope Creep"),

        list([
            "Clearly document requirements.",
            "Get sign-off on scope.",
            "Establish change control process.",
            "Say no to unauthorized changes.",
            "Communicate impact of changes.",
            "Regular scope reviews.",
            "Educate stakeholders.",
            "Track all changes.",
        ]),

        heading("Issue Management"),

        definition(
            "Issue",
            "An issue is a problem that has occurred and needs immediate attention. Unlike risks, issues are actual problems, not potential."
        ),

        heading("Issue Log"),

        table(
            ["Field", "Description"],
            [
                ["Issue ID", "Unique identifier"],
                ["Description", "Detailed description"],
                ["Priority", "High/Medium/Low"],
                ["Owner", "Responsible person"],
                ["Date Raised", "When identified"],
                ["Status", "Open/In Progress/Closed"],
                ["Resolution", "How resolved"],
            ]
        ),

        heading("Escalation Process"),

        steps([
            "Identify the issue.",
            "Team attempts resolution.",
            "If unresolved, escalate to team lead.",
            "If still unresolved, escalate to project manager.",
            "Critical issues escalated to management.",
            "Document resolution.",
        ]),

        heading("Project Closure"),

        definition(
            "Project Closure",
            "Project closure is the final phase of the project life cycle where all activities are completed, deliverables are handed over and the project is formally closed."
        ),

        heading("Closure Activities"),

        steps([
            "Complete all deliverables.",
            "Obtain formal acceptance.",
            "Release resources.",
            "Archive project documents.",
            "Conduct final review.",
            "Document lessons learned.",
            "Celebrate success.",
            "Close contracts.",
        ]),

        heading("Types of Closure"),

        table(
            ["Type", "Description"],
            [
                ["Successful", "All objectives met"],
                ["Failed", "Objectives not met"],
                ["Terminated", "Cancelled midway"],
                ["Aborted", "Discontinued due to issues"],
            ]
        ),

        heading("Final Acceptance"),

        list([
            "Delivered software meets requirements.",
            "All defects resolved.",
            "Documentation complete.",
            "Training provided.",
            "Support arrangements made.",
            "Client signs acceptance form.",
        ]),

        heading("Lessons Learned"),

        definition(
            "Lessons Learned",
            "Lessons learned are insights gained from a project — both positive and negative — that can be applied to future projects to improve performance."
        ),

        heading("Lessons Learned Session"),

        text("Team discusses:"),

        list([
            "What went well?",
            "What didn't go well?",
            "What would we do differently?",
            "What did we learn?",
            "Recommendations for future.",
        ]),

        heading("Post-Implementation Review"),

        list([
            "Assess whether objectives were met.",
            "Evaluate cost and schedule performance.",
            "Review quality and satisfaction.",
            "Analyze risks and issues.",
            "Document best practices.",
            "Identify improvement areas.",
        ]),

        heading("Project Archival"),

        text("Archive all project documents for future reference:"),

        list([
            "Project charter.",
            "Requirements documents.",
            "Design documents.",
            "Source code.",
            "Test cases and reports.",
            "Meeting minutes.",
            "Change requests.",
            "Risk register.",
            "Lessons learned.",
            "Final report.",
        ]),

        heading("Team Recognition"),

        list([
            "Celebrate project completion.",
            "Recognize individual contributions.",
            "Provide bonuses or awards.",
            "Write appreciation letters.",
            "Public acknowledgment.",
            "Career growth opportunities.",
        ]),

        heading("Handover Process"),

        steps([
            "Prepare handover documentation.",
            "Train the maintenance team.",
            "Transfer knowledge.",
            "Provide support plan.",
            "Ensure smooth transition.",
            "Get formal handover sign-off.",
        ]),

        heading("Key Success Factors"),

        list([
            "Clear objectives and scope.",
            "Strong project management.",
            "Skilled team.",
            "Effective communication.",
            "Stakeholder involvement.",
            "Risk management.",
            "Quality focus.",
            "Change management.",
            "Timely decisions.",
            "Continuous improvement.",
        ]),

        heading("Common Reasons for Project Failure"),

        list([
            "Poor requirements.",
            "Unrealistic deadlines.",
            "Insufficient resources.",
            "Poor communication.",
            "Scope creep.",
            "Lack of user involvement.",
            "Poor risk management.",
            "Technology issues.",
            "Team problems.",
            "Weak project management.",
        ]),

        note(
            "A project isn't truly finished until it's formally closed with lessons learned documented. These lessons are gold for future projects. Don't skip the closure phase, no matter how eager you are to move on to the next project.",
            "tip",
            "Importance of Closure"
        ),

        keyPoints([
            "Monitoring tracks actual vs planned progress.",
            "EVM integrates scope, schedule and cost.",
            "SPI and CPI measure performance efficiency.",
            "Change control manages scope changes.",
            "Project closure formalizes completion.",
            "Lessons learned improve future projects.",
        ]),
    ],

    {
        summary:
            "Learn project monitoring, control, EVM, change management, and formal project closure with lessons learned.",
        minutes: 14,
        tags: ["monitoring", "evm", "closure", "control", "important"],

        mcqs: [
            mcq(
                "EVM stands for:",
                ["Estimated Value Model", "Earned Value Management", "Effective Value Measure", "Executive Value Method"],
                1,
                "EVM is Earned Value Management."
            ),
            mcq(
                "SPI = 1.2 means:",
                ["Behind schedule", "On schedule", "Ahead of schedule", "Over budget"],
                2,
                "SPI > 1 means ahead of schedule."
            ),
            mcq(
                "Scope creep is:",
                ["Planned change", "Uncontrolled scope expansion", "Cost reduction", "Time reduction"],
                1,
                "Scope creep is uncontrolled expansion of scope."
            ),
            mcq(
                "Lessons learned are documented in:",
                ["Planning phase", "Execution phase", "Closure phase", "Initiation phase"],
                2,
                "Lessons learned are documented in closure phase."
            ),
        ],

        questions: [
            qa(
                "Explain Earned Value Management with example.",
                "Earned Value Management (EVM) is a project performance measurement technique that integrates scope, schedule and cost to measure progress and forecast outcomes. Key terms: Planned Value (PV) is budgeted cost of work scheduled; Earned Value (EV) is budgeted cost of work actually performed; Actual Cost (AC) is real cost incurred; Budget at Completion (BAC) is total project budget. Key formulas: Schedule Variance (SV) = EV - PV; Cost Variance (CV) = EV - AC; Schedule Performance Index (SPI) = EV/PV; Cost Performance Index (CPI) = EV/AC; Estimate at Completion (EAC) = BAC/CPI. Example: Project with BAC = $100,000, planned 50% complete by month 3 (PV = $50,000), actual 40% complete with AC = $45,000. EV = 40% × 100,000 = $40,000. SV = 40,000 - 50,000 = -$10,000 (behind schedule). CV = 40,000 - 45,000 = -$5,000 (over budget). SPI = 0.8 (80% efficient). CPI = 0.89. EAC = $112,360 (forecasted total). EVM provides objective measurements to identify problems early and take corrective action.",
                4
            ),
            qa(
                "Explain the project closure process.",
                "Project closure is the final phase where all project activities are completed, deliverables are handed over and the project is formally closed. Activities include: (1) Complete all deliverables — Ensure all planned work is finished; (2) Obtain formal acceptance — Get client sign-off on deliverables; (3) Release resources — Return team members, equipment and facilities; (4) Archive project documents — Store all documentation for future reference; (5) Conduct final review — Assess project performance against objectives; (6) Document lessons learned — Capture insights from what went well and what didn't for future projects; (7) Recognize team — Celebrate success and appreciate contributions; (8) Close contracts — Complete legal and financial obligations. Types of closure include: Successful (all objectives met), Failed (objectives not met), Terminated (cancelled midway), or Aborted (discontinued due to issues). A formal closure prevents open-ended projects, ensures knowledge transfer, and creates organizational learning. Skipping closure is a common mistake that loses valuable lessons and creates confusion. A good closure sets up future projects for success and provides closure for team members.",
                4
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit2Topics = [
    teamManagement,
    qualityManagement,
    configurationManagement,
    agileScrum,
    projectMonitoringControl,
];