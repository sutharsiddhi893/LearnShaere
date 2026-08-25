/* =========================================================
   LEARNSPHERE — COURSES DATABASE
========================================================= */

/* =========================================================
   HELPERS
========================================================= */

const SEMESTER_ROMAN = [
  "I",
  "II",
  "III",
  "IV",
  "V",
  "VI",
  "VII",
  "VIII",
];

const createUnit = (
  id,
  label,
  title,
  target = null
) => {
  const unit = {
    id,
    label,
    title,
  };

  /* A string target is an editor route. */

  if (typeof target === "string") {
    unit.editorPath = target;
  }

  /* An object target may contain path/editorPath. */

  if (
    target &&
    typeof target === "object" &&
    !Array.isArray(target)
  ) {
    Object.assign(unit, target);
  }

  return unit;
};

const createUnits = (
  prefix,
  titles,
  label = "Unit"
) =>
  titles.map((title, index) =>
    createUnit(
      `${prefix}-${index + 1}`,
      `${label} ${index + 1}`,
      title
    )
  );

const createSubject = (
  id,
  name,
  units = [],
  options = {}
) => ({
  id,
  name,
  ...options,
  units,
});

const createSemester = (
  number,
  title,
  description,
  subjects = []
) => ({
  number,
  title,
  description,
  subjects,
});

const createEmptySemesters = (
  total,
  programName
) =>
  Array.from({ length: total }, (_, index) => {
    const number = index + 1;
    const roman =
      SEMESTER_ROMAN[index] || String(number);

    return createSemester(
      number,
      `Semester ${roman}`,
      `${programName} Semester ${roman} curriculum. Subject details will be added soon.`,
      []
    );
  });

/* =========================================================
   DOCUMENTATION ROUTES
========================================================= */

const C_DOCUMENTATION_BASE =
  "/courses/bca/semester/1/subject/programming-in-c/topic";

/* =========================================================
   COURSES DATA
========================================================= */

export const coursesData = {
  /* =======================================================
     BCA
  ======================================================= */

  bca: {
    id: "bca",
    name: "Bachelor of Computer Applications",
    shortName: "BCA",
    level: "bachelor",
    description:
      "Build strong foundations in programming, software development, databases, web technologies, artificial intelligence, and computer science.",
    totalSemesters: 8,
    accent: "purple",

    semesters: [
      /* ===================================================
         BCA — SEMESTER I
      =================================================== */

      createSemester(
        1,
        "Semester I",
        "Programming, web development, office automation, communication, Indian knowledge systems, and computer organization.",
        [
          createSubject(
            "US01MABCA01",
            "Programming Fundamentals Using C",
            [
              createUnit(
                "bca-c-unit-1",
                "Unit 1",
                "Concept of Algorithm, Flowchart and Languages",
                {
                  path: `${C_DOCUMENTATION_BASE}/introduction-to-c`,
                }
              ),
              createUnit(
                "bca-c-unit-2",
                "Unit 2",
                "Basics of Programming",
                {
                  path: `${C_DOCUMENTATION_BASE}/operators-in-c`,
                }
              ),
              createUnit(
                "bca-c-unit-3",
                "Unit 3",
                "Decision Making, Loops and Arrays",
                {
                  path: `${C_DOCUMENTATION_BASE}/functions-in-c`,
                }
              ),
              createUnit(
                "bca-c-unit-4",
                "Unit 4",
                "Strings and Library Functions",
                {
                  path: `${C_DOCUMENTATION_BASE}/pointers-in-c`,
                }
              ),
            ],
            {
              code: "US01MABCA01",
              documentationId: "programming-in-c",
              path: `${C_DOCUMENTATION_BASE}/introduction-to-c`,
            }
          ),

          createSubject(
            "US01MABCA02",
            "Programming Fundamentals Using C Lab",
            [
              createUnit(
                "bca-c-lab-1",
                "Lab Session 1",
                "Practical Based on Unit 1 and Unit 2",
                "/editor/c?course=bca&subject=US01MABCA02&session=1"
              ),
              createUnit(
                "bca-c-lab-2",
                "Lab Session 2",
                "Practical Based on Unit 3 and Unit 4",
                "/editor/c?course=bca&subject=US01MABCA02&session=2"
              ),
            ],
            {
              type: "lab",
            }
          ),

          createSubject(
            "US01MIBCA03",
            "Web Application Development - I",
            createUnits("bca-web-1-unit", [
              "Web Page Designing - I",
              "Web Page Designing - II",
            ])
          ),

          createSubject(
            "US01MIBCA04",
            "Web Application Development - I Lab",
            [
              createUnit(
                "bca-web-1-lab-1",
                "Lab Session 1",
                "Practical Based on Web Application Development - I",
                "/editor/html?course=bca&subject=US01MIBCA04&session=1"
              ),
            ],
            {
              type: "lab",
            }
          ),

          createSubject(
            "US01IDBCA05",
            "Accounting and Office Automation",
            createUnits("bca-accounting-unit", [
              "Conceptual Framework of Accounting and Spreadsheets",
              "Word Processing and Presentation Tool",
            ])
          ),

          createSubject(
            "US01IDBCA06",
            "Office Automation Lab",
            [
              createUnit(
                "bca-office-lab-1",
                "Lab Session 1",
                "Practical Based on Office Applications"
              ),
            ],
            {
              type: "lab",
            }
          ),

          createSubject(
            "US01AEBCA07",
            "Communication Skills in English - I",
            createUnits("bca-communication-1-unit", [
              "Reading Skills, Listening and Feedback Skills, Forming Words",
              "Writing Skills and Speaking Skills",
            ])
          ),

          createSubject(
            "US01IKBCA08",
            "Indian Knowledge Systems",
            createUnits("bca-iks-1-unit", [
              "Spiritual Bharat and Introduction to Indian Knowledge Systems",
              "Contribution of Indian Knowledge Systems to the World",
            ])
          ),

          createSubject(
            "US01SEBCA09",
            "Fundamentals of Computer Organization",
            createUnits("bca-computer-organization-unit", [
              "Introduction to Computer Systems, Number Systems, Representation of Information and Processor Organization",
              "Memory Organization, Addressing Techniques and I/O Devices",
            ]),
            {
              wide: true,
            }
          ),
        ]
      ),

      /* ===================================================
         BCA — SEMESTER II
      =================================================== */

      createSemester(
        2,
        "Semester II",
        "Advanced C programming, web development, digital electronics, communication, environment studies, and IT fundamentals.",
        [
          createSubject(
            "US02MABCA01",
            "Advanced C Programming",
            createUnits("bca-advanced-c-unit", [
              "User-Defined Functions",
              "Structures, Unions and Command-Line Arguments",
              "Usage of Pointers",
              "Usage of File Handling",
            ])
          ),

          createSubject(
            "US02MABCA02",
            "Advanced C Programming Lab",
            [
              createUnit(
                "bca-advanced-c-lab-1",
                "Lab Session 1",
                "Practical Based on Unit 1 and Unit 2",
                "/editor/c?course=bca&subject=US02MABCA02&session=1"
              ),
              createUnit(
                "bca-advanced-c-lab-2",
                "Lab Session 2",
                "Practical Based on Unit 3 and Unit 4",
                "/editor/c?course=bca&subject=US02MABCA02&session=2"
              ),
            ],
            {
              type: "lab",
            }
          ),

          createSubject(
            "US02MIBCA03",
            "Web Application Development - II",
            createUnits("bca-web-2-unit", [
              "DHTML and Cascading Style Sheet",
              "Introduction to Scripting",
            ])
          ),

          createSubject(
            "US02MIBCA04",
            "Web Application Development - II Lab",
            [
              createUnit(
                "bca-web-2-lab-1",
                "Lab Session 1",
                "Practical Based on Web Application Development - II",
                "/editor/javascript?course=bca&subject=US02MIBCA04&session=1"
              ),
            ],
            {
              type: "lab",
            }
          ),

          createSubject(
            "US02IDBCA05",
            "Digital Electronics",
            createUnits("bca-digital-electronics-unit", [
              "Gates, Boolean Algebra and Basic Digital Logic Circuits",
              "Memory Elements",
            ])
          ),

          createSubject(
            "US02IDBCA06",
            "Digital Electronics Lab",
            [
              createUnit(
                "bca-digital-electronics-lab-1",
                "Lab Session 1",
                "Practical Based on Digital Electronics and Communication"
              ),
            ],
            {
              type: "lab",
            }
          ),

          createSubject(
            "US02AEBCA07",
            "Communication Skills in English - II",
            createUnits("bca-communication-2-unit", [
              "Oral Communication Skills and Job Skills",
              "Writing Skills and Individual Project",
            ])
          ),

          createSubject(
            "US02VABCA08",
            "Environment Studies",
            createUnits("bca-environment-unit", [
              "Introduction to Environmental Studies, Ecosystems and Natural Resources",
              "Biotic Interactions",
            ])
          ),

          createSubject(
            "US02SEBCA09",
            "Information Technology Fundamentals - II",
            createUnits("bca-it-fundamentals-2-unit", [
              "Internet Usage for E-learning",
              "Communication Technologies",
            ]),
            {
              wide: true,
            }
          ),
        ]
      ),

      /* ===================================================
         BCA — SEMESTER III
      =================================================== */

      createSemester(
        3,
        "Semester III",
        "Data structures, database management, JavaScript, discrete mathematics, e-commerce, and Indian Knowledge Systems.",
        [
          createSubject(
            "US03MABCA01",
            "Fundamentals of Data Structures",
            createUnits("bca-data-structures-unit", [
              "Introduction to Data Structures",
              "Stacks and Queues",
              "Introduction to Trees",
              "Linked Lists, Sorting and Searching Techniques",
            ])
          ),

          createSubject(
            "US03MABCA02",
            "Database Management Systems - I",
            createUnits("bca-dbms-1-unit", [
              "Introduction to DBMS and Relational Database Design",
              "Structured Query Language - I",
              "Structured Query Language - II",
              "Structured Query Language - III",
            ])
          ),

          createSubject(
            "US03MABCA03",
            "Practical Based on Data Structures and Database Management Systems - I",
            [
              createUnit(
                "bca-data-structures-practical",
                "Data Structure Lab",
                "Practical Based on Fundamentals of Data Structures",
                "/editor/c?course=bca&subject=US03MABCA03&session=data-structures"
              ),
              createUnit(
                "bca-dbms-1-practical",
                "Database Lab",
                "Practical Based on Database Management Systems - I",
                "/editor/sql?course=bca&subject=US03MABCA03&session=dbms"
              ),
            ],
            {
              type: "lab",
              wide: true,
            }
          ),

          createSubject(
            "US03IDBCA04",
            "Web Application Development - III",
            createUnits("bca-web-3-unit", [
              "Basics of JavaScript",
              "Advanced JavaScript - II",
            ])
          ),

          createSubject(
            "US03IDBCA05",
            "Web Application Development - III Lab",
            [
              createUnit(
                "bca-web-3-lab-1",
                "Lab Session 1",
                "Practical Based on Web Application Development - III",
                "/editor/javascript?course=bca&subject=US03IDBCA05&session=1"
              ),
            ],
            {
              type: "lab",
            }
          ),

          createSubject(
            "US03AEBCA06",
            "Discrete Mathematics",
            createUnits("bca-discrete-mathematics-unit", [
              "Vectors and Matrices",
              "Graph Theory",
            ])
          ),

          createSubject(
            "US03SEBCA07",
            "E-Commerce",
            createUnits("bca-ecommerce-unit", [
              "Introduction to E-Commerce",
              "Electronic Marketplaces and Customer Relationship Management",
            ])
          ),

          createSubject(
            "US03IKBCA01",
            "Dharmashastra (Aacharasamhita)",
            createUnits("bca-dharmashastra-unit", [
              "Etymology, Meaning, Characteristics and Importance of Dharma",
              "Forms of Dharma, Aacharndharma and Major Dharmashastras",
            ]),
            {
              electiveGroup: "IKS - Choose Any One",
            }
          ),

          createSubject(
            "US03IKBCA02",
            "Mimansa (Purva and Uttara)",
            createUnits("bca-mimansa-unit", [
              "Introduction to Mimansa Shastra and Purva Mimansa",
              "Uttara Mimansa and Shankaracharya's Contribution to Vedanta",
            ]),
            {
              electiveGroup: "IKS - Choose Any One",
            }
          ),

          createSubject(
            "US03IKBCA03",
            "Nirukta",
            createUnits("bca-nirukta-unit", [
              "Introduction to Vedanga, Nirukta, Yaska and Nighantu",
              "Nirvachana, Padachatushtaya, Shadbhavavikara and Devata-Vigyan",
            ]),
            {
              electiveGroup: "IKS - Choose Any One",
            }
          ),

          createSubject(
            "US03IKBCA04",
            "Nyaya Darshan",
            createUnits("bca-nyaya-unit", [
              "Akshapada Gautama and the Five Elements of Nyaya",
              "Nyaya-Vaisheshika, Nyaya Sutras and Sixteen Elements",
            ]),
            {
              electiveGroup: "IKS - Choose Any One",
            }
          ),

          createSubject(
            "US03IKBCA05",
            "Puran",
            createUnits("bca-puran-unit", [
              "Introduction to Puranas and Major Themes",
              "Social, Cultural and Ethical Implications of the Puranas",
            ]),
            {
              electiveGroup: "IKS - Choose Any One",
            }
          ),

          createSubject(
            "US03IKBCA06",
            "Shiksha",
            createUnits("bca-shiksha-unit", [
              "Shiksha as a Limb of the Veda",
              "Importance of Shiksha Granthas and Paniniya-Shiksha",
            ]),
            {
              electiveGroup: "IKS - Choose Any One",
            }
          ),

          createSubject(
            "US03IKBCA07",
            "व्याकरणम्",
            createUnits("bca-vyakaranam-unit", [
              "संस्कृत वर्णमाला, शब्दरूपम्, धातुरूपम् एवं सन्धिः",
              "समासः, विभक्तिः, वाच्यम्, प्रत्ययाः, अव्ययम् एवं उपसर्गाः",
            ]),
            {
              electiveGroup: "IKS - Choose Any One",
            }
          ),
        ]
      ),

      /* ===================================================
         BCA — SEMESTER IV
      =================================================== */

      createSemester(
        4,
        "Semester IV",
        "Java programming, operating systems, PL/SQL, project management, system analysis, and personality development.",
        [
          createSubject(
            "US04MABCA01",
            "Object Oriented Programming - I",
            createUnits("bca-oop-1-unit", [
              "Introduction to Java Programming",
              "Classes, Objects, Interfaces and Inheritance",
              "Exception Handling, I/O Management and Packages",
              "JDBC and Collection Framework",
            ])
          ),

          createSubject(
            "US04MABCA02",
            "Operating Systems",
            createUnits("bca-operating-systems-unit", [
              "Introduction and Scheduling",
              "Memory Management",
              "Process Synchronization, Deadlocks and Introduction to Linux",
              "Basic Linux Commands",
            ])
          ),

          createSubject(
            "US04MABCA03",
            "Practical Based on Java and Operating Systems",
            [
              createUnit(
                "bca-java-practical",
                "Java Lab",
                "Practical Based on Object Oriented Programming - I",
                "/editor/java?course=bca&subject=US04MABCA03&session=java"
              ),
              createUnit(
                "bca-linux-practical",
                "Linux Lab",
                "Practical Based on Linux Operating Systems",
                "/editor/bash?course=bca&subject=US04MABCA03&session=linux"
              ),
            ],
            {
              type: "lab",
              wide: true,
            }
          ),

          createSubject(
            "US04MIBCA04",
            "Database Management Systems - II",
            createUnits("bca-dbms-2-unit", [
              "Basics of PL/SQL and Cursors",
              "Exception Handling, Stored Subprograms, Database Triggers and Packages",
            ])
          ),

          createSubject(
            "US04MIBCA05",
            "Database Management Systems - II Lab",
            [
              createUnit(
                "bca-dbms-2-lab-1",
                "SQL Lab",
                "Practical Based on Database Management Systems - II",
                "/editor/sql?course=bca&subject=US04MIBCA05&session=1"
              ),
            ],
            {
              type: "lab",
            }
          ),

          createSubject(
            "US04AEBCA06",
            "Software Project Management",
            createUnits("bca-project-management-unit", [
              "Project Evaluation, Project Planning, Software Process, Process Models and Risk",
              "Activity Planning, Project Management and Control",
            ])
          ),

          createSubject(
            "US04SEBCA07",
            "System Analysis and Design",
            createUnits("bca-system-analysis-unit", [
              "Concepts of System and System Development Life Cycle",
              "Fact Finding Techniques, Input/Output Design and Data Flow Diagrams",
            ])
          ),

          createSubject(
            "US04VABCA08",
            "Integrated Personality Development",
            createUnits(
              "bca-ipdc-topic",
              [
                "Begin with the End in Mind",
                "Being Addiction-Free",
                "Case Study: Disaster Relief",
                "Teamwork and Harmony",
                "Present Scenario",
                "Leading Without Leading",
                "An Ideal Citizen - 1",
                "An Ideal Citizen - 2",
                "Timeless Wisdom for Daily Life",
                "Forgive and Forget",
                "Stress Management",
                "Better Health, Better Future",
                "Words of Wisdom",
                "Financial Planning",
                "Impact of Company",
              ],
              "Topic"
            ),
            {
              electiveGroup:
                "Value-Added Course - Choose Any One",
            }
          ),

          createSubject(
            "US04VABCA09",
            "Life Skills and Self Enhancement",
            createUnits("bca-life-skills-unit", [
              "Critical and Creative Thinking, Decision Making, Problem Solving and Communication Skills",
              "Time Management, Career Counselling and Interview Skills",
            ]),
            {
              electiveGroup:
                "Value-Added Course - Choose Any One",
            }
          ),
        ]
      ),

      /* ===================================================
         BCA — SEMESTER V
      =================================================== */

      createSemester(
        5,
        "Semester V",
        "Computer networks, Visual Basic .NET, Python programming, Java web development, and artificial intelligence.",
        [
          createSubject(
            "US05MABCA02",
            "Visual Programming",
            createUnits("bca-visual-programming-unit", [
              "Introduction to .NET Framework and VB.NET",
              "Fundamentals of VB.NET",
              "Developing Windows Forms and Exception Handling",
              "Database with ADO.NET",
            ])
          ),

          createSubject(
            "US05MABCA03",
            "Visual Programming Lab",
            [
              createUnit(
                "bca-visual-programming-lab-1",
                "Lab Session 1",
                "Practical Based on Programming Fundamentals Using Visual Basic .NET",
                "/editor/vbnet?course=bca&subject=US05MABCA03&session=1"
              ),
            ],
            {
              type: "lab",
            }
          ),

          createSubject(
            "US05MIBCA04",
            "Python Programming",
            createUnits("bca-python-unit", [
              "Basic Python",
              "Advanced Python",
            ])
          ),

          createSubject(
            "US05MIBCA05",
            "Python Programming Lab",
            [
              createUnit(
                "bca-python-lab-1",
                "Lab Session 1",
                "Practical Based on Programming Fundamentals of Python",
                "/editor/python?course=bca&subject=US05MIBCA05&session=1"
              ),
            ],
            {
              type: "lab",
            }
          ),

          createSubject(
            "US05MIBCA06",
            "Object Oriented Programming - II",
            createUnits("bca-oop-2-unit", [
              "Servlet and Multi-threading",
              "Java Server Pages (JSP)",
            ])
          ),

          createSubject(
            "US05MIBCA07",
            "Object Oriented Programming - II Lab",
            [
              createUnit(
                "bca-oop-2-lab-1",
                "Lab Session 1",
                "Practical Based on Programming Fundamentals Using Java",
                "/editor/java?course=bca&subject=US05MIBCA07&session=1"
              ),
            ],
            {
              type: "lab",
            }
          ),

          createSubject(
            "US05MABCA01",
            "Computer Networks",
            createUnits("bca-computer-networks-unit", [
              "Introduction",
              "Data Communication Fundamentals",
              "Layered Protocols and Satellite Communication",
              "Introduction to Wireless Networks and Networking Devices",
            ])
          ),

          createSubject(
            "US05SEBCA08",
            "Introduction to Artificial Intelligence",
            createUnits("bca-artificial-intelligence-unit", [
              "Artificial Intelligence and Search Algorithms",
              "Knowledge Based Systems",
            ])
          ),
        ]
      ),

      /* ===================================================
         BCA — SEMESTER VI
      =================================================== */

      createSemester(
        6,
        "Semester VI",
        "Software engineering, ASP.NET, PHP scripting, business communication, and internship project development.",
        [
          createSubject(
            "US06MABCA02",
            "Advanced Web Development Technology",
            createUnits("bca-advanced-web-unit", [
              "Introduction to ASP.NET",
              "Information Passing, Standard Controls and Master Page",
              "State Management, Validation and Login Controls",
              "ADO.NET and Data Controls",
            ])
          ),

          createSubject(
            "US06MABCA03",
            "Advanced Web Development Technology Lab",
            [
              createUnit(
                "bca-aspnet-lab-1",
                "Lab Session 1",
                "Practical Based on Programming Fundamentals Using ASP.NET",
                "/editor/aspnet?course=bca&subject=US06MABCA03&session=1"
              ),
            ],
            {
              type: "lab",
            }
          ),

          createSubject(
            "US06MIBCA04",
            "Scripting with PHP - I",
            createUnits("bca-php-1-unit", [
              "Introduction to PHP",
              "Programming in PHP",
            ])
          ),

          createSubject(
            "US06MIBCA05",
            "Scripting with PHP - I Lab",
            [
              createUnit(
                "bca-php-1-lab-1",
                "Lab Session 1",
                "Practical Based on PHP Scripting",
                "/editor/php?course=bca&subject=US06MIBCA05&session=1"
              ),
            ],
            {
              type: "lab",
            }
          ),

          createSubject(
            "US06MABCA01",
            "Software Engineering",
            createUnits("bca-software-engineering-unit", [
              "Introduction to Software and Software Engineering",
              "Requirement Specification and Software Project Planning",
              "Software Design",
              "Software Coding, Testing and Maintenance",
            ])
          ),

          createSubject(
            "US06AEBCA06",
            "Business Communication and Etiquettes",
            createUnits("bca-business-communication-unit", [
              "Business, Workplace, Telephone and Multicultural Etiquettes",
              "Business Letters, Sales, Inquiry, Order, Complaint and Adjustment Letters",
            ])
          ),

          createSubject(
            "US06SEBCA07",
            "Internship",
            [
              createUnit(
                "bca-internship-project",
                "Project",
                "In-house Project Development"
              ),
            ],
            {
              type: "lab",
              wide: true,
            }
          ),
        ]
      ),

      /* ===================================================
         BCA — SEMESTER VII
      =================================================== */

      createSemester(
        7,
        "Semester VII (Without Research)",
        "Generative AI, cyber security, advanced PHP development, practical learning, and on-job training.",
        [
          createSubject(
            "US07HMABCA01",
            "Basics of Generative AI",
            createUnits("bca-generative-ai-unit", [
              "Foundations of Generative AI and Transformer Models",
              "Open AI Ecosystems and Model Development",
              "Model Training, Optimization and Evaluation",
              "Intelligent AI System Design and Deployment",
            ])
          ),

          createSubject(
            "US07HMABCA03",
            "Basics of Generative AI Lab",
            [
              createUnit(
                "bca-generative-ai-lab-1",
                "Lab Session 1",
                "Practical Based on Basics of Generative AI",
                "/editor/python?course=bca&subject=US07HMABCA03&session=1"
              ),
            ],
            {
              type: "lab",
            }
          ),

          createSubject(
            "US07HMIBCA04",
            "Scripting with PHP - II",
            createUnits("bca-php-2-unit", [
              "Advanced PHP",
              "Database Programming and PHP",
            ])
          ),

          createSubject(
            "US07HMIBCA05",
            "Scripting with PHP - II Lab",
            [
              createUnit(
                "bca-php-2-lab-1",
                "Lab Session 1",
                "Practical Based on Advanced PHP",
                "/editor/php?course=bca&subject=US07HMIBCA05&session=1"
              ),
            ],
            {
              type: "lab",
            }
          ),

          createSubject(
            "US07HMABCA02",
            "Fundamentals of Cyber Security",
            createUnits("bca-cyber-security-unit", [
              "Introduction to Cyber Security",
              "Cyber-crime and Foundation of Cyber Law",
              "Social Media and Digital Payments",
              "Cryptography",
            ])
          ),

          createSubject(
            "US07HSEBCA06",
            "On Job Training",
            [
              createUnit(
                "bca-semester-7-training",
                "Training",
                "Practical Industry Experience Through Real-World Tasks and Projects"
              ),
            ],
            {
              type: "lab",
            }
          ),
        ]
      ),

      /* ===================================================
         BCA — SEMESTER VIII
      =================================================== */

      createSemester(
        8,
        "Semester VIII (Without Research)",
        "Machine learning, cloud computing, data analytics using R, practical learning, and on-job industry training.",
        [
          createSubject(
            "US08HMABCA01",
            "Basics of Machine Learning",
            createUnits("bca-machine-learning-unit", [
              "Introduction to Machine Learning",
              "Data Preparation, Modelling, Training and Evaluation",
              "Supervised Learning - Classification and Regression",
              "Unsupervised Learning",
            ])
          ),

          createSubject(
            "US08HMABCA03",
            "Basics of Machine Learning Lab",
            [
              createUnit(
                "bca-machine-learning-lab-1",
                "Lab Session 1",
                "Practical Based on Basics of Machine Learning",
                "/editor/python?course=bca&subject=US08HMABCA03&session=1"
              ),
            ],
            {
              type: "lab",
            }
          ),

          createSubject(
            "US08HMIBCA04",
            "Data Analytics Using R Language",
            createUnits("bca-r-analytics-unit", [
              "Introduction to Data Analytics and R Programming",
              "Data Structures and Basic Data Handling in R",
            ])
          ),

          createSubject(
            "US08HMIBCA05",
            "Data Analytics Using R Language Lab",
            [
              createUnit(
                "bca-r-analytics-lab-1",
                "R Lab",
                "Practical Based on Data Analytics Using R",
                "/editor/r?course=bca&subject=US08HMIBCA05&session=1"
              ),
            ],
            {
              type: "lab",
            }
          ),

          createSubject(
            "US08HMABCA02",
            "Cloud Computing",
            createUnits("bca-cloud-computing-unit", [
              "Introduction to Cloud Computing",
              "Cloud Service Models",
              "Risks and Security in Cloud",
              "Cloud Security",
            ])
          ),

          createSubject(
            "US08HSEBCA06",
            "On Job Training",
            [
              createUnit(
                "bca-semester-8-training",
                "Training",
                "Practical Industry Experience Through Real-World Tasks and Projects"
              ),
            ],
            {
              type: "lab",
            }
          ),
        ]
      ),
    ],
  },

  /* =======================================================
     B.SC IT
  ======================================================= */

  "bsc-it": {
    id: "bsc-it",
    name: "Bachelor of Science in Information Technology",
    shortName: "B.Sc IT",
    level: "bachelor",
    description:
      "A technology-focused program covering computing fundamentals, programming, information systems, and modern IT.",
    totalSemesters: 8,
    accent: "blue",

    semesters: [
      /* ===================================================
         B.SC IT — SEMESTER I
      =================================================== */

      createSemester(
        1,
        "Semester I",
        "C programming, web designing, office automation, communication skills, Indian knowledge systems, and computer organization.",
        [
          createSubject(
            "US01MABIT01",
            "Fundamentals of Programming Using C",
            createUnits("bscit-c-unit", [
              "Concept of Algorithm, Flowcharts and Languages",
              "Basics of Programming",
              "Decision Making, Loops and Arrays",
              "Strings and Library Functions",
            ])
          ),

          createSubject(
            "US01MABIT02",
            "Fundamentals of Programming Using C Lab",
            [
              createUnit(
                "bscit-c-lab-1",
                "Lab Session 1",
                "Practical Based on Unit 1 and Unit 2",
                "/editor/c?course=bsc-it&subject=US01MABIT02&session=1"
              ),
              createUnit(
                "bscit-c-lab-2",
                "Lab Session 2",
                "Practical Based on Unit 3 and Unit 4",
                "/editor/c?course=bsc-it&subject=US01MABIT02&session=2"
              ),
            ],
            {
              type: "lab",
            }
          ),

          createSubject(
            "US01MIBIT03",
            "Basics of Web Designing",
            createUnits("bscit-web-1-unit", [
              "Web Page Designing - I",
              "Web Page Designing - II",
            ])
          ),

          createSubject(
            "US01MIBIT04",
            "Basics of Web Designing Lab",
            [
              createUnit(
                "bscit-web-1-lab-1",
                "Lab Session 1",
                "Practical Based on Basics of Web Designing",
                "/editor/html?course=bsc-it&subject=US01MIBIT04&session=1"
              ),
            ],
            {
              type: "lab",
            }
          ),

          createSubject(
            "US01IDBIT05",
            "Office Automation Tools",
            createUnits("bscit-office-tools-unit", [
              "Word Processing and Presentation Tools",
              "Spreadsheets",
            ])
          ),

          createSubject(
            "US01IDBIT06",
            "Office Automation Tools Lab",
            [
              createUnit(
                "bscit-office-tools-lab-1",
                "Lab Session 1",
                "Practical Based on Office Applications"
              ),
            ],
            {
              type: "lab",
            }
          ),

          createSubject(
            "US01AEBIT07",
            "Communication Skills in English - I",
            createUnits("bscit-communication-1-unit", [
              "Reading Skills, Listening and Feedback Skills, Forming Words",
              "Writing Skills and Speaking Skills",
            ])
          ),

          createSubject(
            "US01IKBIT08",
            "Indian Knowledge Systems",
            createUnits("bscit-iks-1-unit", [
              "Spiritual Bharat and Introduction to Indian Knowledge Systems",
              "Contribution of Indian Knowledge Systems to the World",
            ])
          ),

          createSubject(
            "US01SEBIT09",
            "Fundamentals of Computer Organization and Architecture",
            createUnits("bscit-computer-organization-unit", [
              "Introduction to Computer Systems, Number Systems, Representation of Information and Processor Organization",
              "Memory Organization, Addressing Techniques and I/O Devices",
            ]),
            {
              wide: true,
            }
          ),
        ]
      ),

      /* ===================================================
         B.SC IT — SEMESTER II
      =================================================== */

      createSemester(
        2,
        "Semester II",
        "Advanced C programming, advanced web designing, digital electronics, communication skills, environmental studies, and IT fundamentals.",
        [
          createSubject(
            "US02MABIT01",
            "Advanced Programming Using C",
            createUnits("bscit-advanced-c-unit", [
              "User-Defined Functions",
              "Structures, Unions and Command-Line Arguments",
              "Usage of Pointers",
              "Usage of File Handling",
            ])
          ),

          createSubject(
            "US02MABIT02",
            "Advanced Programming Using C Lab",
            [
              createUnit(
                "bscit-advanced-c-lab-1",
                "Lab Session 1",
                "Practical Based on Unit 1 and Unit 2",
                "/editor/c?course=bsc-it&subject=US02MABIT02&session=1"
              ),
              createUnit(
                "bscit-advanced-c-lab-2",
                "Lab Session 2",
                "Practical Based on Unit 3 and Unit 4",
                "/editor/c?course=bsc-it&subject=US02MABIT02&session=2"
              ),
            ],
            {
              type: "lab",
            }
          ),

          createSubject(
            "US02MIBIT03",
            "Advanced Web Designing",
            createUnits("bscit-advanced-web-unit", [
              "DHTML and Cascading Style Sheet",
              "Introduction to Scripting",
            ])
          ),

          createSubject(
            "US02MIBIT04",
            "Advanced Web Designing Lab",
            [
              createUnit(
                "bscit-advanced-web-lab-1",
                "Lab Session 1",
                "Practical Based on Advanced Web Designing",
                "/editor/javascript?course=bsc-it&subject=US02MIBIT04&session=1"
              ),
            ],
            {
              type: "lab",
            }
          ),

          createSubject(
            "US02IDBIT05",
            "Digital Electronics",
            createUnits("bscit-digital-electronics-unit", [
              "Gates, Boolean Algebra and Basic Digital Logic Circuits",
              "Memory Elements",
            ])
          ),

          createSubject(
            "US02IDBIT06",
            "Digital Electronics Lab",
            [
              createUnit(
                "bscit-digital-electronics-lab-1",
                "Lab Session 1",
                "Practical Based on Digital Electronics and Communication"
              ),
            ],
            {
              type: "lab",
            }
          ),

          createSubject(
            "US02AEBIT07",
            "Communication Skills in English - II",
            createUnits("bscit-communication-2-unit", [
              "Oral Communication Skills and Job Skills",
              "Writing Skills and Individual Project",
            ])
          ),

          createSubject(
            "US02VABIT08",
            "Environmental Studies",
            createUnits("bscit-environment-unit", [
              "Introduction to Environmental Studies, Ecosystems and Natural Resources",
              "Biotic Interactions",
            ])
          ),

          createSubject(
            "US02SEBIT09",
            "Information Technology Fundamentals - II",
            createUnits("bscit-it-fundamentals-2-unit", [
              "Internet Usage for E-learning",
              "Communication Technologies",
            ]),
            {
              wide: true,
            }
          ),
        ]
      ),

      /* ===================================================
         B.SC IT — SEMESTER III
      =================================================== */

      createSemester(
        3,
        "Semester III",
        "Object-oriented programming using C++, database management, JavaScript, discrete mathematics, system analysis, and Indian Knowledge Systems.",
        [
          createSubject(
            "US03MABIT01",
            "Object Oriented Programming Using C++",
            createUnits("bscit-oop-cpp-unit", [
              "Object Oriented Programming Concepts and Introduction to C++",
              "Input/Output, Arrays and Working with Classes",
              "Functions, Function Overloading and Inheritance",
              "Operator Overloading",
            ])
          ),

          createSubject(
            "US03MABIT02",
            "Database Management Systems - I",
            createUnits("bscit-dbms-1-unit", [
              "Introduction to DBMS and Relational Database Design",
              "Structured Query Language - I",
              "Structured Query Language - II",
              "Structured Query Language - III",
            ])
          ),

          createSubject(
            "US03MABIT03",
            "Practical Based on Object Oriented Programming Using C++ and Database Management Systems - I",
            [
              createUnit(
                "bscit-cpp-practical",
                "C++ Lab",
                "Practical Based on Object Oriented Programming Using C++",
                "/editor/cpp?course=bsc-it&subject=US03MABIT03&session=cpp"
              ),
              createUnit(
                "bscit-dbms-1-practical",
                "Database Lab",
                "Practical Based on Database Management Systems - I",
                "/editor/sql?course=bsc-it&subject=US03MABIT03&session=dbms"
              ),
            ],
            {
              type: "lab",
              wide: true,
            }
          ),

          createSubject(
            "US03IDBIT04",
            "Introduction to Scripting Language",
            createUnits("bscit-scripting-unit", [
              "Basics of JavaScript",
              "Advanced JavaScript - II",
            ])
          ),

          createSubject(
            "US03IDBIT05",
            "Introduction to Scripting Language Lab",
            [
              createUnit(
                "bscit-scripting-lab-1",
                "Lab Session 1",
                "Practical Based on Introduction to Scripting Language",
                "/editor/javascript?course=bsc-it&subject=US03IDBIT05&session=1"
              ),
            ],
            {
              type: "lab",
            }
          ),

          createSubject(
            "US03AEBIT06",
            "Discrete Mathematics",
            createUnits("bscit-discrete-mathematics-unit", [
              "Vectors and Matrices",
              "Graph Theory",
            ])
          ),

          createSubject(
            "US03SEBIT07",
            "System Analysis and Design",
            createUnits("bscit-system-analysis-unit", [
              "Concepts of System and System Development Life Cycle",
              "Fact Finding Techniques, Input/Output Design and Data Flow Diagrams",
            ])
          ),

          createSubject(
            "UB03IKBIT08",
            "Ayurveda",
            createUnits("bscit-ayurveda-unit", [
              "Introduction to Ayurveda, Charak Samhita, Tridosha and Holistic Health Care",
              "Lifestyle Management and Health Care Through Ayurveda",
            ]),
            {
              electiveGroup:
                "Indian Knowledge Systems - Choose Any One",
            }
          ),

          createSubject(
            "US03IKBIT09",
            "Dharmashastra (Aacharasamhita)",
            createUnits("bscit-dharmashastra-unit", [
              "Etymology, Meaning, Characteristics and Importance of Dharma",
              "Forms of Dharma, Aacharndharma and Major Dharmashastras",
            ]),
            {
              electiveGroup:
                "Indian Knowledge Systems - Choose Any One",
            }
          ),
        ]
      ),

      /* ===================================================
         B.SC IT — SEMESTER IV
      =================================================== */

      createSemester(
        4,
        "Semester IV",
        "Java programming, data structures and algorithms, PL/SQL, software project management, e-commerce, and current trends in IT.",
        [
          createSubject(
            "US04MABIT01",
            "Object Oriented Programming Using Java",
            createUnits("bscit-java-unit", [
              "Introduction, Classes and Objects",
              "Interfaces and Inheritance",
              "Exception Handling and I/O Management",
              "Packages and Multithreading",
            ])
          ),

          createSubject(
            "US04MABIT02",
            "Introduction to Data Structures and Algorithms",
            createUnits("bscit-data-structures-unit", [
              "Introduction to Data Structures",
              "Stacks and Queues",
              "Introduction to Trees",
              "Linked Lists, Sorting and Searching Techniques",
            ])
          ),

          createSubject(
            "US04MABIT03",
            "Practical Based on Java and Data Structures and Algorithms",
            [
              createUnit(
                "bscit-java-practical",
                "Java Lab",
                "Practical Based on Object Oriented Programming Using Java",
                "/editor/java?course=bsc-it&subject=US04MABIT03&session=java"
              ),
              createUnit(
                "bscit-data-structures-practical",
                "Data Structure Lab",
                "Practical Based on Data Structures and Algorithms",
                "/editor/c?course=bsc-it&subject=US04MABIT03&session=data-structures"
              ),
            ],
            {
              type: "lab",
              wide: true,
            }
          ),

          createSubject(
            "US04MIBIT04",
            "Database Management System - II",
            createUnits("bscit-dbms-2-unit", [
              "Basics of PL/SQL and Cursors",
              "Exception Handling, Stored Subprograms, Database Triggers and Packages",
            ])
          ),

          createSubject(
            "US04MIBIT05",
            "Database Management Systems - II Lab",
            [
              createUnit(
                "bscit-dbms-2-lab-1",
                "SQL Lab",
                "Practical Based on Database Management Systems - II",
                "/editor/sql?course=bsc-it&subject=US04MIBIT05&session=1"
              ),
            ],
            {
              type: "lab",
            }
          ),

          createSubject(
            "US04AEBIT06",
            "Software Project Management",
            createUnits("bscit-project-management-unit", [
              "Project Evaluation, Project Planning, Software Process, Process Models and Risk",
              "Activity Planning, Project Management and Control",
            ])
          ),

          createSubject(
            "US04SEBIT07",
            "E-Commerce",
            createUnits("bscit-ecommerce-unit", [
              "Introduction to E-Commerce",
              "Electronic Marketplaces and Customer Relationship Management",
            ])
          ),

          createSubject(
            "US04VABIT08",
            "Current Trends in IT",
            createUnits("bscit-current-trends-unit", [
              "Search Engine Optimization",
              "Internet of Things and Cloud Computing",
            ]),
            {
              electiveGroup:
                "Value-Added Course - Choose Any One",
            }
          ),

          createSubject(
            "US04VABIT09",
            "Integrated Personality Development",
            createUnits(
              "bscit-ipdc-topic",
              [
                "Begin with the End in Mind",
                "Being Addiction-Free",
                "Case Study: Disaster Relief",
                "Teamwork and Harmony",
                "Present Scenario",
                "Leading Without Leading",
                "An Ideal Citizen - 1",
                "An Ideal Citizen - 2",
                "Timeless Wisdom for Daily Life",
                "Forgive and Forget",
                "Stress Management",
                "Better Health, Better Future",
                "Words of Wisdom",
                "Financial Planning",
                "Impact of Company",
              ],
              "Topic"
            ),
            {
              electiveGroup:
                "Value-Added Course - Choose Any One",
            }
          ),

          createSubject(
            "US04VABIT10",
            "NCC Army - II",
            createUnits("bscit-ncc-army-unit", [
              "Social Awareness, Community Development and Social Skills",
              "Hygiene, Sanitation, Yoga and Exercises",
            ]),
            {
              electiveGroup:
                "Value-Added Course - Choose Any One",
            }
          ),
        ]
      ),

      /* ===================================================
         B.SC IT — SEMESTER V
      =================================================== */

      createSemester(
        5,
        "Semester V",
        "Visual Basic .NET, operating systems, Linux shell scripting, PHP and MySQL, advanced Java programming, and software engineering.",
        [
          createSubject(
            "US05MABIT01",
            "Fundamentals of Visual Programming",
            createUnits("bscit-visual-programming-unit", [
              "Introduction to .NET Framework (4.5) and VB.NET",
              "Fundamentals of VB.NET",
              "Developing Windows Forms and Exception Handling",
              "Database with ADO.NET",
            ])
          ),

          createSubject(
            "US05MABIT02",
            "Operating Systems",
            createUnits("bscit-operating-systems-unit", [
              "Introduction and Scheduling",
              "Memory Management",
              "Process Synchronization, Deadlocks and Introduction to Linux",
              "Basic Linux Commands",
            ])
          ),

          createSubject(
            "US05MABIT03",
            "Practical Based on Visual Programming and Operating Systems",
            [
              createUnit(
                "bscit-vbnet-practical",
                "VB.NET Lab",
                "Practical Based on Visual Basic .NET",
                "/editor/vbnet?course=bsc-it&subject=US05MABIT03&session=vbnet"
              ),
              createUnit(
                "bscit-linux-practical",
                "Linux Lab",
                "Practical Based on Linux Shell Scripting",
                "/editor/bash?course=bsc-it&subject=US05MABIT03&session=linux"
              ),
            ],
            {
              type: "lab",
              wide: true,
            }
          ),

          createSubject(
            "US05MIBIT04",
            "Open Source Technology Using PHP",
            createUnits("bscit-php-unit", [
              "Introduction to PHP",
              "Working with MySQL",
            ])
          ),

          createSubject(
            "US05MIBIT05",
            "Open Source Technology Using PHP Lab",
            [
              createUnit(
                "bscit-php-lab-1",
                "PHP Lab",
                "Practical Based on PHP Scripting and MySQL Database Connectivity",
                "/editor/php?course=bsc-it&subject=US05MIBIT05&session=1"
              ),
            ],
            {
              type: "lab",
            }
          ),

          createSubject(
            "US05MIBIT06",
            "Advanced Java Programming",
            createUnits("bscit-advanced-java-unit", [
              "JDBC and Collection Framework",
              "Introduction to Servlet and Java Server Pages",
            ])
          ),

          createSubject(
            "US05MIBIT07",
            "Advanced Java Programming Lab",
            [
              createUnit(
                "bscit-advanced-java-lab-1",
                "Java Lab",
                "Practical Based on JDBC, Servlets and Java Server Pages",
                "/editor/java?course=bsc-it&subject=US05MIBIT07&session=1"
              ),
            ],
            {
              type: "lab",
            }
          ),

          createSubject(
            "US05SEBIT08",
            "Software Engineering Fundamentals",
            createUnits("bscit-software-engineering-unit", [
              "Introduction and Requirement Specification",
              "Software Design",
            ]),
            {
              wide: true,
            }
          ),
        ]
      ),

      /* ===================================================
         B.SC IT — SEMESTER VI
      =================================================== */

      createSemester(
        6,
        "Semester VI",
        "ASP.NET with C#, computer networks, Python programming, artificial intelligence, practical development, and internship.",
        [
          createSubject(
            "US06MABIT01",
            "ASP.NET Programming with C#",
            createUnits("bscit-aspnet-unit", [
              "Introduction to ASP.NET",
              "Information Passing, Standard Controls and Master Page",
              "State Management, Validation and Login Controls",
              "ADO.NET and Data Controls",
            ])
          ),

          createSubject(
            "US06MABIT03",
            "ASP.NET Programming with C# Lab",
            [
              createUnit(
                "bscit-aspnet-lab-1",
                "Lab Session 1",
                "Practical Based on Programming Fundamentals Using ASP.NET",
                "/editor/aspnet?course=bsc-it&subject=US06MABIT03&session=1"
              ),
            ],
            {
              type: "lab",
            }
          ),

          createSubject(
            "US06MIBIT04",
            "Programming in Python",
            createUnits("bscit-python-unit", [
              "Basic Python",
              "Functions, Exception Handling, Object-Oriented Programming and File Handling",
            ])
          ),

          createSubject(
            "US06MIBIT05",
            "Programming in Python Lab",
            [
              createUnit(
                "bscit-python-lab-1",
                "Lab Session 1",
                "Practical Based on Programming Fundamentals of Python",
                "/editor/python?course=bsc-it&subject=US06MIBIT05&session=1"
              ),
            ],
            {
              type: "lab",
            }
          ),

          createSubject(
            "US06MABIT02",
            "Computer Networks",
            createUnits("bscit-computer-networks-unit", [
              "Introduction to Computer Networks",
              "Data Communication Fundamentals",
              "Layered Protocols and Satellite Communication",
              "Introduction to Wireless Networks and Networking Devices",
            ])
          ),

          createSubject(
            "US06AEBIT06",
            "Introduction to Artificial Intelligence",
            createUnits("bscit-artificial-intelligence-unit", [
              "Artificial Intelligence and Search Algorithms",
              "Knowledge Based Systems",
            ])
          ),

          createSubject(
            "US06SEBIT07",
            "Internship",
            [
              createUnit(
                "bscit-semester-6-internship",
                "Project",
                "In-house Project Development"
              ),
            ],
            {
              type: "lab",
              wide: true,
            }
          ),
        ]
      ),

      /* ===================================================
         B.SC IT — SEMESTER VII
      =================================================== */

      createSemester(
        7,
        "Semester VII (Without Research)",
        "Machine learning, full-stack web application development, IoT fundamentals, practical development, and on-job training.",
        [
          createSubject(
            "US07HMABIT01",
            "Fundamentals of Machine Learning",
            createUnits("bscit-machine-learning-unit", [
              "Introduction to Machine Learning",
              "Data Preparation, Modelling, Training and Evaluation",
              "Supervised Learning - Classification and Regression",
              "Unsupervised Learning",
            ])
          ),

          createSubject(
            "US07HMABIT02",
            "Full Stack Web Application Development",
            createUnits("bscit-full-stack-unit", [
              "Basics of Web Development",
              "Introduction to Web Server and Node.js",
              "Database Management",
              "Fundamentals of React.js",
            ])
          ),

          createSubject(
            "US07HMABIT03",
            "Practical Based on Machine Learning and Full Stack Web Application Development",
            [
              createUnit(
                "bscit-machine-learning-practical",
                "Machine Learning Lab",
                "Practical Based on Machine Learning",
                "/editor/python?course=bsc-it&subject=US07HMABIT03&session=machine-learning"
              ),
              createUnit(
                "bscit-full-stack-practical",
                "Full Stack Lab",
                "Practical Based on Node.js and React",
                "/editor/javascript?course=bsc-it&subject=US07HMABIT03&session=full-stack"
              ),
            ],
            {
              type: "lab",
              wide: true,
            }
          ),

          createSubject(
            "US07HMIBIT04",
            "IoT Fundamentals",
            createUnits("bscit-iot-unit", [
              "Basics of IoT",
              "IoT Components and Interfacing",
            ])
          ),

          createSubject(
            "US07HMIBIT05",
            "IoT Fundamentals Lab",
            [
              createUnit(
                "bscit-iot-lab-1",
                "IoT Lab",
                "Practical Based on Programming Fundamentals of IoT",
                "/editor/arduino?course=bsc-it&subject=US07HMIBIT05&session=1"
              ),
            ],
            {
              type: "lab",
            }
          ),

          createSubject(
            "US07HSEBIT06",
            "On Job Training",
            [
              createUnit(
                "bscit-semester-7-training",
                "Training",
                "Practical Industry Experience Through Real-World Tasks and Projects"
              ),
            ],
            {
              type: "lab",
              wide: true,
            }
          ),
        ]
      ),

      /* ===================================================
         B.SC IT — SEMESTER VIII
      =================================================== */

      createSemester(
        8,
        "Semester VIII (Without Research)",
        "Mobile application development, network security, data analytics using R, practical development, and on-job industry training.",
        [
          createSubject(
            "US08HMABIT01",
            "Basics of Mobile Application Development",
            createUnits("bscit-mobile-development-unit", [
              "Introduction to Android",
              "Android Application Fundamentals",
              "User Interface Design",
              "Enhancing User Experience",
            ])
          ),

          createSubject(
            "US08HMABIT03",
            "Mobile Application Development Lab",
            [
              createUnit(
                "bscit-mobile-development-lab-1",
                "Android Lab",
                "Practical Based on Mobile Application Development Using Android Studio",
                "/editor/android?course=bsc-it&subject=US08HMABIT03&session=1"
              ),
            ],
            {
              type: "lab",
            }
          ),

          createSubject(
            "US08HMIBIT04",
            "Data Analytics Using R Language",
            createUnits("bscit-r-analytics-unit", [
              "Introduction to Data Analytics and R Programming",
              "Data Structures and Basic Data Handling in R",
            ])
          ),

          createSubject(
            "US08HMIBIT05",
            "Data Analytics Using R Language Lab",
            [
              createUnit(
                "bscit-r-analytics-lab-1",
                "R Lab",
                "Practical Based on Data Analytics Using R Language",
                "/editor/r?course=bsc-it&subject=US08HMIBIT05&session=1"
              ),
            ],
            {
              type: "lab",
            }
          ),

          createSubject(
            "US08HMABIT02",
            "Network Security",
            createUnits("bscit-network-security-unit", [
              "Introduction to Network Security",
              "Transport Level Security",
              "Wireless and Internet Security",
              "Advanced Security Concepts",
            ])
          ),

          createSubject(
            "US08HSEBIT06",
            "On Job Training",
            [
              createUnit(
                "bscit-semester-8-training",
                "Training",
                "Practical Industry Experience Through Real-World Tasks and Projects"
              ),
            ],
            {
              type: "lab",
            }
          ),
        ]
      ),
    ],
  },

  /* =======================================================
     B.TECH
  ======================================================= */

  btech: {
    id: "btech",
    name: "Bachelor of Technology",
    shortName: "B.Tech",
    level: "bachelor",
    description:
      "An engineering-focused undergraduate program covering programming, computer systems, software engineering, networking, cloud, artificial intelligence, and modern technologies.",
    totalSemesters: 8,
    accent: "orange",
    semesters: createEmptySemesters(8, "B.Tech"),
  },

  /* =======================================================
     MCA
  ======================================================= */

  mca: {
    id: "mca",
    name: "Master of Computer Applications",
    shortName: "MCA",
    level: "master",
    description:
      "An advanced postgraduate program focused on software architecture, full-stack engineering, data, cloud, and research.",
    totalSemesters: 4,
    accent: "cyan",

    semesters: [
/* ===================================================
   MCA — SEMESTER I
=================================================== */

createSemester(
  1,
  "Semester I",
  "Programming concepts, data structures, relational databases, internet and web designing, operating systems, software engineering, and practical training.",

  [
    /* ===============================================
       PROGRAMMING CONCEPTS AND DATA STRUCTURE
    =============================================== */

    createSubject(
      "MCA-101",
      "Programming Concepts and Data Structure",

      createUnits(
        "mca-sem1-programming-data-structure-unit",
        [
          "Introduction to Programming and C Language",
          "C Programming Concepts",
          "Introduction to Data Structures",
          "Sorting, Searching and Nonlinear Data Structures",
        ]
      ),

      {
        code: "MCA-101",
        credits: 4,
      }
    ),

    /* ===============================================
       RELATIONAL DATABASE MANAGEMENT SYSTEM
    =============================================== */

    createSubject(
      "MCA-102",
      "Relational Database Management System",

      createUnits(
        "mca-sem1-rdbms-unit",
        [
          "Fundamentals of Database Management System",
          "Relational Data Model and Introduction to Oracle Server",
          "Oracle Server and SQL",
          "Introduction to PL/SQL",
        ]
      ),

      {
        code: "MCA-102",
        credits: 4,
      }
    ),

    /* ===============================================
       INTERNET AND WEB DESIGNING
    =============================================== */

    createSubject(
      "MCA-103",
      "Internet and Web Designing",

      createUnits(
        "mca-sem1-internet-web-designing-unit",
        [
          "Fundamentals of Internet, Intranet and Extranet",
          "Developing Web Pages Using HTML",
          "Cascading Style Sheets",
          "Introduction to JavaScript",
        ]
      ),

      {
        code: "MCA-103",
        credits: 4,
      }
    ),

    /* ===============================================
       FUNDAMENTALS OF OPERATING SYSTEM
    =============================================== */

    createSubject(
      "MCA-104",
      "Fundamentals of Operating System",

      createUnits(
        "mca-sem1-operating-system-unit",
        [
          "Introduction to Operating Systems and Process Management",
          "Memory and File Management",
          "Introduction to Linux and Unix",
          "Process, File Management and Shell Programming in Linux and Unix",
        ]
      ),

      {
        code: "MCA-104",
        credits: 4,
      }
    ),

    /* ===============================================
       SOFTWARE ENGINEERING
    =============================================== */

    createSubject(
      "MCA-105",
      "Software Engineering",

      createUnits(
        "mca-sem1-software-engineering-unit",
        [
          "Introduction to Software Engineering and Process Models",
          "Software Measurement and Quality Assurance",
          "Software Requirements and Analysis Models",
          "Software Design and Testing",
        ]
      ),

      {
        code: "MCA-105",
        credits: 4,
      }
    ),

    /* ===============================================
       PRACTICALS
    =============================================== */

    createSubject(
      "MCA-106",
      "Practical Based on Programming, RDBMS and Web Designing",

      [
        createUnit(
          "mca-sem1-programming-practical",
          "C & Data Structure Lab",
          "Practical Based on Programming Concepts and Data Structure",
          "/editor/c?course=mca&subject=MCA-106&session=programming-data-structure"
        ),

        createUnit(
          "mca-sem1-rdbms-practical",
          "Database Lab",
          "Practical Based on Relational Database Management System",
          "/editor/sql?course=mca&subject=MCA-106&session=rdbms"
        ),

        createUnit(
          "mca-sem1-web-designing-practical",
          "Web Designing Lab",
          "Practical Based on Internet and Web Designing",
          "/editor/html?course=mca&subject=MCA-106&session=web-designing"
        ),
      ],

      {
        code: "MCA-106",
        credits: 4,
        type: "lab",
      }
    ),
  ]
),

/* ===================================================
   MCA — SEMESTER II
=================================================== */

createSemester(
  2,
  "Semester II",
  "Object-oriented Java programming, LAMP web development, object-oriented analysis and design using UML, computer networking, cloud computing, and practical training.",

  [
    /* ===============================================
       OBJECT ORIENTED CONCEPTS AND PROGRAMMING
    =============================================== */

    createSubject(
      "MCA-201",
      "Object Oriented Concepts and Programming",

      createUnits(
        "mca-sem2-java-unit",
        [
          "Basics of Classes, Objects and Methods in Java",
          "Packages, Interfaces and Exception Handling",
          "Multithreaded Programming",
          "Applet and Event Handling",
        ]
      ),

      {
        code: "MCA-201",
        credits: 4,
      }
    ),

    /* ===============================================
       WEB APPLICATION DEVELOPMENT — LAMP
    =============================================== */

    createSubject(
      "MCA-202",
      "Web Application Development - LAMP",

      createUnits(
        "mca-sem2-lamp-unit",
        [
          "Open Source and Linux Administration",
          "Database Management Using MySQL",
          "PHP Programming",
          "Processing Web Forms and Handling Databases in PHP",
        ]
      ),

      {
        code: "MCA-202",
        credits: 4,
      }
    ),

    /* ===============================================
       OBJECT ORIENTED ANALYSIS AND DESIGN USING UML
    =============================================== */

    createSubject(
      "MCA-203",
      "Object Oriented Analysis and Design Using UML",

      createUnits(
        "mca-sem2-uml-unit",
        [
          "Introduction to Object Oriented Analysis",
          "Introduction to Web Engineering",
          "Introduction to UML and Diagrams",
          "UML Interaction Diagrams",
        ]
      ),

      {
        code: "MCA-203",
        credits: 4,
      }
    ),

    /* ===============================================
       FUNDAMENTALS OF COMPUTER NETWORKING
    =============================================== */

    createSubject(
      "MCA-204",
      "Fundamentals of Computer Networking",

      createUnits(
        "mca-sem2-computer-networking-unit",
        [
          "Introduction to Computer Networks",
          "Networking Standards",
          "Transmission Media and TCP/IP",
          "Connectivity Devices, Network Topologies and Architectures",
        ]
      ),

      {
        code: "MCA-204",
        credits: 4,
      }
    ),

    /* ===============================================
       CLOUD INFRASTRUCTURE AND SERVICES
    =============================================== */

    createSubject(
      "MCA-205",
      "Cloud Infrastructure and Services",

      createUnits(
        "mca-sem2-cloud-unit",
        [
          "Introduction to Cloud Computing",
          "Cloud Computing Services",
          "Application Architecture for Cloud and Cloud Deployment Techniques",
          "Risks, Security, Consequences and Costs of Cloud Computing",
        ]
      ),

      {
        code: "MCA-205",
        credits: 4,
      }
    ),

    /* ===============================================
       PRACTICAL BASED ON MCA-201 AND MCA-202
    =============================================== */

    createSubject(
      "MCA-206",
      "Practical Based on Java and LAMP Web Development",

      [
        createUnit(
          "mca-sem2-java-practical",
          "Java Lab",
          "Practical Based on Object Oriented Concepts and Programming",
          "/editor/java?course=mca&subject=MCA-206&session=java"
        ),

        createUnit(
          "mca-sem2-lamp-practical",
          "PHP & MySQL Lab",
          "Practical Based on Web Application Development Using LAMP",
          "/editor/php?course=mca&subject=MCA-206&session=lamp"
        ),
      ],

      {
        code: "MCA-206",
        credits: 2,
        type: "lab",
        wide: true,
      }
    ),
  ]
),

/* ===================================================
   MCA — SEMESTER III
=================================================== */

createSemester(
  3,
  "Semester III",
  "C# and .NET development, Android mobile application development, advanced Java technology, cyber security, and practical training.",

  [
    /* ===============================================
       WEB DEVELOPMENT TOOLS
    =============================================== */

    createSubject(
      "MCA-301",
      "Web Development Tools",

      createUnits(
        "mca-sem3-web-development-tools-unit",
        [
          ".NET Architecture and Programming",
          "C# Control Structures, Properties, Delegates and Exception Handling",
          "Inheritance, Interfaces and Generics",
          "Threading, File Handling and C# Controls",
        ]
      ),

      {
        code: "MCA-301",
        credits: 4,
      }
    ),

    /* ===============================================
       MOBILE APPLICATION DEVELOPMENT
    =============================================== */

    createSubject(
      "MCA-302",
      "Mobile Application Development",

      createUnits(
        "mca-sem3-mobile-development-unit",
        [
          "Introduction to Mobile Computing",
          "Introduction to Android",
          "Android Activities and GUI Design Concepts",
          "Using Common Android APIs",
        ]
      ),

      {
        code: "MCA-302",
        credits: 4,
      }
    ),

    /* ===============================================
       OBJECT ORIENTED TECHNOLOGY
    =============================================== */

    createSubject(
      "MCA-303",
      "Object Oriented Technology",

      createUnits(
        "mca-sem3-object-oriented-technology-unit",
        [
          "Java Swing",
          "JDBC - Java Database Connectivity",
          "Java Network Programming",
          "Servlets and JSP",
        ]
      ),

      {
        code: "MCA-303",
        credits: 4,
      }
    ),

    /* ===============================================
       CYBER SECURITY
    =============================================== */

    createSubject(
      "MCA-304",
      "Cyber Security",

      createUnits(
        "mca-sem3-cyber-security-unit",
        [
          "Introduction to Cyber Security",
          "Network Defense Tools",
          "Web Application Security Tools",
          "Introduction to Cybercrime, Cyber Law and Investigation",
        ]
      ),

      {
        code: "MCA-304",
        credits: 4,
      }
    ),

    /* ===============================================
       PRACTICAL BASED ON
       MCA-301, MCA-202 AND MCA-303
    =============================================== */

    createSubject(
      "MCA-305",
      "Practical Based on Web Development Tools, LAMP and Object Oriented Technology",

      [
        createUnit(
          "mca-sem3-csharp-practical",
          "C# & .NET Lab",
          "Practical Based on Web Development Tools",
          "/editor/csharp?course=mca&subject=MCA-305&session=csharp-dotnet"
        ),

        createUnit(
          "mca-sem3-lamp-practical",
          "PHP & MySQL Lab",
          "Practical Based on Web Application Development Using LAMP",
          "/editor/php?course=mca&subject=MCA-305&session=lamp"
        ),

        createUnit(
          "mca-sem3-java-practical",
          "Advanced Java Lab",
          "Practical Based on Object Oriented Technology",
          "/editor/java?course=mca&subject=MCA-305&session=java"
        ),

        createUnit(
          "mca-sem3-android-practical",
          "Android Lab",
          "Practice Mobile Application Development Using Android",
          "/editor/android?course=mca&subject=MCA-305&session=android"
        ),
      ],

      {
        code: "MCA-305",
        credits: 4,
        type: "lab",
        wide: true,
      }
    ),
  ]
),

      createSemester(
        4,
        "Semester IV",
        "Research, industry project, dissertation, and placement preparation.",
        []
      ),
    ],
  },

/* =======================================================
   M.SC IT
======================================================= */

"msc-it": {
  id: "msc-it",
  name: "Master of Science in Information Technology",
  shortName: "M.Sc IT",
  level: "master",
  description:
    "An advanced postgraduate program covering programming, database systems, artificial intelligence, computer networks, data structures, modern technologies, and research.",
  totalSemesters: 4,
  accent: "indigo",

  semesters: [
    /* ===================================================
       M.SC IT — SEMESTER I
    =================================================== */

    createSemester(
      1,
      "Semester I",
      "Python programming, database management systems, artificial intelligence, computer networks, computer fundamentals, and practical training.",

      [
        /* ===============================================
           PYTHON PROGRAMMING
        =============================================== */

        createSubject(
          "P2S01NCINT01",
          "Python Programming",

          createUnits(
            "mscit-python-programming-unit",
            [
              "Introduction to Python",
              "Aggregate Data Types",
              "Composite Data Types, Functions and Exception Handling",
              "Additional Features of Python",
            ]
          )
        ),

        /* ===============================================
           DATABASE MANAGEMENT SYSTEMS
        =============================================== */

        createSubject(
          "P2S01NCINT02",
          "Database Management Systems",

          createUnits(
            "mscit-database-management-unit",
            [
              "Introduction",
              "Structured Query Language (SQL)",
              "SQL and PL/SQL",
              "Advanced PL/SQL",
            ]
          )
        ),

        /* ===============================================
           PRACTICALS - I
           PYTHON AND DBMS
        =============================================== */

        createSubject(
          "P2S01NCINT06",
          "Practicals - I",

          [
            createUnit(
              "mscit-python-practical",
              "Python Lab",
              "Practical Training and Hands-on Sessions on Python",
              "/editor/python?course=msc-it&subject=P2S01NCINT06&session=python"
            ),

            createUnit(
              "mscit-dbms-practical",
              "Database Lab",
              "Practical Training and Hands-on Sessions on DBMS",
              "/editor/sql?course=msc-it&subject=P2S01NCINT06&session=dbms"
            ),
          ],

          {
            type: "lab",
            wide: true,
          }
        ),

        /* ===============================================
           ARTIFICIAL INTELLIGENCE
        =============================================== */

        createSubject(
          "P2S01NCINT03",
          "Artificial Intelligence",

          createUnits(
            "mscit-artificial-intelligence-unit",
            [
              "Artificial Intelligence and Knowledge Based Systems",
              "Fuzzy Logic",
              "Connectionist Models",
              "Genetic Algorithms",
            ]
          )
        ),

        /* ===============================================
           COMPUTER NETWORKS
        =============================================== */

        createSubject(
          "P2S01NCINT04",
          "Computer Networks",

          createUnits(
            "mscit-computer-networks-unit",
            [
              "Introduction and Data Communication Fundamentals",
              "Layered Protocols",
              "Routing, Congestion Control and Internetworking",
              "Wireless Communication and Network Security",
            ]
          )
        ),

        /* ===============================================
           COMPUTER FUNDAMENTALS
        =============================================== */

        createSubject(
          "P2S01NCINT05",
          "Computer Fundamentals",

          createUnits(
            "mscit-computer-fundamentals-unit",
            [
              "Fundamentals of Computer Organization and Operating Systems",
              "Fundamentals of Data Structures",
            ]
          ),

          {
            wide: true,
          }
        ),
      ]
    ),

/* ===================================================
   M.SC IT — SEMESTER II
=================================================== */

createSemester(
  2,
  "Semester II",
  "Java programming, web technology, machine learning, cyber security, software engineering, and practical training.",

  [
    /* ===============================================
       OBJECT ORIENTED PROGRAMMING USING JAVA
    =============================================== */

    createSubject(
      "P2S02NCINT01",
      "Object Oriented Programming Using Java",

      createUnits(
        "mscit-sem2-java-unit",
        [
          "Introduction to Java and its Basic Concepts",
          "Introduction to Object-Oriented Programming",
          "More Features of the Java Platform",
          "Graphical Programming",
        ]
      )
    ),

    /* ===============================================
       WEB TECHNOLOGY
    =============================================== */

    createSubject(
      "P2S02NCINT02",
      "Web Technology",

      createUnits(
        "mscit-sem2-web-technology-unit",
        [
          "Fundamentals of Web Technology and Front-End Structure",
          "Client-Side Web Development",
          "Server-Side Web Scripting",
          "Advanced Server-Side Web Scripting",
        ]
      )
    ),

    /* ===============================================
       PRACTICALS - II
       JAVA AND WEB TECHNOLOGY
    =============================================== */

    createSubject(
      "P2S02NCINT06",
      "Practicals - II",

      [
        createUnit(
          "mscit-sem2-java-practical",
          "Java Lab",
          "Practical Training and Hands-on Sessions on Java",
          "/editor/java?course=msc-it&subject=P2S02NCINT06&session=java"
        ),

        createUnit(
          "mscit-sem2-web-practical",
          "Web Technology Lab",
          "Practical Training and Hands-on Sessions on Web Technology",
          "/editor/javascript?course=msc-it&subject=P2S02NCINT06&session=web-technology"
        ),
      ],

      {
        type: "lab",
        wide: true,
      }
    ),

    /* ===============================================
       MACHINE LEARNING
    =============================================== */

    createSubject(
      "P2S02NCINT03",
      "Machine Learning",

      createUnits(
        "mscit-sem2-machine-learning-unit",
        [
          "Introduction to Machine Learning and Python Foundations",
          "Data Preprocessing Techniques",
          "Supervised Learning Algorithms",
          "Unsupervised Learning and Advanced Techniques",
        ]
      )
    ),

    /* ===============================================
       CYBER SECURITY
    =============================================== */

    createSubject(
      "P2S02NCINT04",
      "Cyber Security",

      createUnits(
        "mscit-sem2-cyber-security-unit",
        [
          "Introduction to Cybercrime",
          "Tools and Methods Used in Cybercrime",
          "Cryptography",
          "Computer Forensics and Forensics of Hand-Held Devices",
        ]
      )
    ),

    /* ===============================================
       SOFTWARE ENGINEERING
    =============================================== */

    createSubject(
      "P2S02NCINT05",
      "Software Engineering",

      createUnits(
        "mscit-sem2-software-engineering-unit",
        [
          "Introduction to Software Engineering, SDLC, Process Models, SRS and Project Management",
          "Software Design, Coding and Testing",
        ]
      ),

      {
        wide: true,
      }
    ),
  ]
),

    /* ===================================================
       M.SC IT — SEMESTER III
    =================================================== */

    createSemester(
      3,
      "Semester III",
      "M.Sc IT Semester III curriculum. Subject details will be added soon.",
      []
    ),

    /* ===================================================
       M.SC IT — SEMESTER IV
    =================================================== */

    createSemester(
      4,
      "Semester IV",
      "M.Sc IT Semester IV curriculum. Subject details will be added soon.",
      []
    ),
  ],
},

  /* =======================================================
     M.TECH
  ======================================================= */

  mtech: {
    id: "mtech",
    name: "Master of Technology",
    shortName: "M.Tech",
    level: "master",
    description:
      "An advanced engineering postgraduate program focused on modern computing, system design, research, specialization, and industry projects.",
    totalSemesters: 4,
    accent: "rose",
    semesters: createEmptySemesters(
      4,
      "M.Tech"
    ),
  },
};

/* =========================================================
   AVAILABLE COURSES
========================================================= */

export const availableCourses = [
  /* Bachelor programs */

  {
    id: "bca",
    label: "BCA",
    name: "Bachelor of Computer Applications",
    level: "bachelor",
  },
  {
    id: "bsc-it",
    label: "B.Sc IT",
    name:
      "Bachelor of Science in Information Technology",
    level: "bachelor",
  },
  {
    id: "btech",
    label: "B.Tech",
    name: "Bachelor of Technology",
    level: "bachelor",
  },

  /* Master programs */

  {
    id: "mca",
    label: "MCA",
    name: "Master of Computer Applications",
    level: "master",
  },
  {
    id: "msc-it",
    label: "M.Sc IT",
    name:
      "Master of Science in Information Technology",
    level: "master",
  },
  {
    id: "mtech",
    label: "M.Tech",
    name: "Master of Technology",
    level: "master",
  },
];

/* =========================================================
   COURSE GROUPS
========================================================= */

export const courseGroups = [
  {
    id: "bachelor",
    title: "Bachelor's Programs",
    description:
      "Undergraduate degree programs",
    courses: availableCourses.filter(
      (course) =>
        course.level === "bachelor"
    ),
  },
  {
    id: "master",
    title: "Master's Programs",
    description:
      "Postgraduate degree programs",
    courses: availableCourses.filter(
      (course) =>
        course.level === "master"
    ),
  },
];