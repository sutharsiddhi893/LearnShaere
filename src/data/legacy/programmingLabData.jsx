export const programmingLanguages = [
  {
    id: "html",
    name: "HTML",
    icon: "H",
    colorClass: "language-html",
    description: "Build the structure of modern web pages.",
    defaultCode: `<main class="welcome-card">
  <h1>Hello, Student!</h1>
  <p>Welcome to the Programming Lab.</p>
  <button>Start Learning</button>
</main>`,
    defaultOutput: "HTML preview is ready.",
    challenges: [
      "Create a profile card using heading, image, paragraph, and button.",
      "Build a semantic page using header, main, section, and footer.",
      "Create a student registration form with labels and inputs.",
    ],
  },
  {
    id: "css",
    name: "CSS",
    icon: "C",
    colorClass: "language-css",
    description: "Style beautiful, responsive, and accessible interfaces.",
    defaultCode: `.welcome-card {
  max-width: 420px;
  padding: 24px;
  border-radius: 16px;
  color: white;
  background: linear-gradient(135deg, #7a68f5, #24c6da);
}

.welcome-card button {
  padding: 10px 16px;
  border: 0;
  border-radius: 8px;
  cursor: pointer;
}`,
    defaultOutput: "CSS stylesheet is ready for preview.",
    challenges: [
      "Create a responsive card grid using CSS Grid.",
      "Build a dark mode button with hover effects.",
      "Create a navigation bar using Flexbox.",
    ],
  },
  {
    id: "javascript",
    name: "JavaScript",
    icon: "JS",
    colorClass: "language-javascript",
    description: "Add logic, interactivity, and dynamic behavior to websites.",
    defaultCode: `const studentName = "Alex";
const completedTopics = 12;

console.log("Welcome, " + studentName + "!");
console.log("Completed topics:", completedTopics);
console.log("Keep learning every day!");`,
    defaultOutput:
      "Welcome, Alex!\nCompleted topics: 12\nKeep learning every day!",
    challenges: [
      "Write a function that checks whether a number is even or odd.",
      "Create a function that calculates the average of three marks.",
      "Build a simple to-do list data structure using arrays.",
    ],
  },
  {
    id: "react",
    name: "React",
    icon: "R",
    colorClass: "language-react",
    description: "Build reusable and interactive user interfaces with components.",
    defaultCode: `import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  );
}`,
    defaultOutput: "React component syntax is ready.",
    challenges: [
      "Create a counter component using useState.",
      "Build a reusable CourseCard component.",
      "Create a searchable subject list using React Hooks.",
    ],
  },
  {
    id: "python",
    name: "Python",
    icon: "Py",
    colorClass: "language-python",
    description: "Learn simple, readable, and powerful programming with Python.",
    defaultCode: `student_name = "Alex"
marks = [78, 85, 92]

average = sum(marks) / len(marks)

print("Student:", student_name)
print("Average marks:", average)`,
    defaultOutput: "Student: Alex\nAverage marks: 85.0",
    challenges: [
      "Write a program to find the largest number in a list.",
      "Create a Python program to check palindrome strings.",
      "Build a simple student grade calculator.",
    ],
  },
  {
    id: "java",
    name: "Java",
    icon: "J",
    colorClass: "language-java",
    description: "Build secure, object-oriented, and enterprise-ready applications.",
    defaultCode: `public class Main {
  public static void main(String[] args) {
    String studentName = "Alex";

    System.out.println("Welcome, " + studentName);
    System.out.println("Java Programming Lab");
  }
}`,
    defaultOutput: "Welcome, Alex\nJava Programming Lab",
    challenges: [
      "Create a Student class with name and roll number.",
      "Write a Java program to reverse a string.",
      "Create a program using inheritance.",
    ],
  },
  {
    id: "c",
    name: "C",
    icon: "C",
    colorClass: "language-c",
    description: "Learn core programming concepts and system-level development.",
    defaultCode: `#include <stdio.h>

int main() {
  int marks = 85;

  printf("Student marks: %d", marks);

  return 0;
}`,
    defaultOutput: "Student marks: 85",
    challenges: [
      "Write a C program to find the factorial of a number.",
      "Create a program to swap two numbers.",
      "Write a program to find the largest of three numbers.",
    ],
  },
  {
    id: "cpp",
    name: "C++",
    icon: "C++",
    colorClass: "language-cpp",
    description: "Use object-oriented programming and high-performance C++ concepts.",
    defaultCode: `#include <iostream>
using namespace std;

int main() {
  string studentName = "Alex";

  cout << "Welcome, " << studentName;

  return 0;
}`,
    defaultOutput: "Welcome, Alex",
    challenges: [
      "Create a class for a student record.",
      "Write a C++ program using constructors.",
      "Implement a stack using arrays.",
    ],
  },
  {
    id: "sql",
    name: "SQL",
    icon: "SQL",
    colorClass: "language-sql",
    description: "Manage, query, and organize relational database data.",
    defaultCode: `SELECT
  student_name,
  course,
  marks
FROM students
WHERE marks >= 75
ORDER BY marks DESC;`,
    defaultOutput:
      "student_name | course | marks\n----------------------------\nAlex         | BCA    | 92\nSam          | BCA    | 85",
    challenges: [
      "Write a query to find students with marks greater than 80.",
      "Create a students table with proper columns.",
      "Write a JOIN query between students and courses tables.",
    ],
  },
];

export function getProgrammingLanguage(languageId) {
  return (
    programmingLanguages.find((language) => language.id === languageId) ||
    programmingLanguages[2]
  );
}