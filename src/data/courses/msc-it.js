// src/data/courses/msc-it.js
// M.Sc IT — Semester layout & course metadata

const mscItCourse = {
  id: "msc-it",
  name: "Master of Science in Information Technology",
  shortName: "M.Sc IT",
  level: "master",
  accent: "indigo",
  description:
    "An advanced postgraduate program covering programming, database systems, artificial intelligence, computer networks, data structures, modern technologies, and research.",
  totalSemesters: 4,

  semesters: [
    {
      id: 1,
      name: "Semester 1",
      description:
        "Python programming, database management systems, artificial intelligence, computer networks, computer fundamentals, and practical training.",
      subjects: [
        "python-programming",
        "database-management-systems",
        "artificial-intelligence",
        "computer-networks",
        "computer-fundamentals",
        "practicals-1",
      ],
    },
    {
      id: 2,
      name: "Semester 2",
      description:
        "Java programming, web technology, machine learning, cyber security, software engineering, and practical training.",
      subjects: [
        "oop-using-java",
        "web-technology",
        "machine-learning",
        "cyber-security",
        "software-engineering",
        "practicals-2",
      ],
    },
    {
      id: 3,
      name: "Semester 3",
      description: "M.Sc IT Semester III curriculum. Subject details will be added soon.",
      subjects: [],
    },
    {
      id: 4,
      name: "Semester 4",
      description: "M.Sc IT Semester IV curriculum. Subject details will be added soon.",
      subjects: [],
    },
  ],
};

export default mscItCourse;