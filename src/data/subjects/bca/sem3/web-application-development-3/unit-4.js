/* =========================================================
   BCA • SEM 3 • Web Application Development - III
   UNIT 4 — Storage, Modules, Classes and Mini Apps
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
   TOPIC 1 — Web Storage and Cookies (JS view)
========================================================= */

const webStorage = createTopic(
    "web-storage-and-cookies",
    "Web Storage and Cookies",

    [
        definition(
            "Web Storage",
            "Browser key/value storage available to JavaScript: localStorage persists until cleared; sessionStorage lasts for one tab session."
        ),

        heading("localStorage vs sessionStorage vs cookies"),

        table(
            ["Feature", "localStorage", "sessionStorage", "Cookie"],
            [
                ["Lifetime", "Until deleted", "Until tab closes", "Expires date / session"],
                ["Sent to server", "No", "No", "Yes, on every matching request"],
                ["Capacity", "About 5 MB", "About 5 MB", "About 4 KB"],
                ["API", "setItem / getItem", "Same", "document.cookie string"],
                ["Use", "Theme, saved notes, draft forms", "Wizard step, tab-only state", "Auth session id (server-set HttpOnly)"],
            ]
        ),

        code(
            `localStorage.setItem("theme", "dark");
const theme = localStorage.getItem("theme"); // "dark"
localStorage.removeItem("theme");
localStorage.clear();

const todos = [{ text: "Study JS", done: false }];
localStorage.setItem("todos", JSON.stringify(todos),;
const saved = JSON.parse(localStorage.getItem("todos") || "[]");`,
            "javascript",
            "Storing strings and JSON"
        ),

        note(
            "Storage only holds strings. Always JSON.stringify objects when saving and JSON.parse when reading. Guard parse with a fallback empty array.",
            "tip",
            "Pattern"
        ),

        heading("Simple theme toggle"),

        code(
            `const root = document.documentElement;
const savedTheme = localStorage.getItem("theme") || "light";
root.dataset.theme = savedTheme;

document.querySelector("#theme-btn").addEventListener("click", () => {
  const next = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = next;
  localStorage.setItem("theme", next);
});`,
            "javascript",
            "Remember the user's theme"
        ),

        keyPoints([
            "localStorage survives refresh and browser restart.",
            "sessionStorage is isolated per tab.",
            "Neither is sent automatically to the server (unlike cookies).",
            "Do not store passwords in Web Storage.",
        ]),
    ],

    {
        summary:
            "Use localStorage and sessionStorage, persist JSON, and know when cookies differ.",
        minutes: 10,
        tags: ["localStorage", "sessionStorage", "javascript", "important"],

        mcqs: [
            mcq(
                "Data in localStorage is:",
                ["Deleted when the tab closes", "Sent with every HTTP request", "Kept until the site or user clears it", "Only available on the server"],
                2,
                "localStorage is persistent client storage."
            ),
            mcq(
                "Why JSON.stringify before setItem of an array?",
                ["Arrays cannot be stored as strings otherwise", "It encrypts the data", "It compresses images", "It is required by CSS"],
                0,
                "Web Storage stores strings only."
            ),
        ],

        questions: [
            qa(
                "Differentiate between localStorage, sessionStorage and cookies.",
                "localStorage persists across sessions and is not sent to the server. sessionStorage lasts only while that tab is open. Cookies are small, can expire, and are sent with matching HTTP requests, so they are used for server session ids. Storage is simpler for purely client data such as theme or a todo list.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — ES Modules and Organising Code
========================================================= */

const modulesTopic = createTopic(
    "es-modules",
    "ES Modules and Organising Code",

    [
        definition(
            "ES Module",
            "A JavaScript file that export-s values and import-s them in another file. The browser loads modules only for scripts with type=\"module\"."
        ),

        code(
            `// math.js
export function add(a, b) {
  return a + b;
}
export const PI = 3.14;
export default function greet(name) {
  return \`Hello, \${name}\`;
}

// app.js
import greet, { add, PI } from "./math.js";
console.log(add(2, 3), PI, greet("BCA"),;`,
            "javascript",
            "export and import"
        ),

        code(
            `<script type="module" src="app.js"></script>`,
            "html",
            "Enable modules in the browser"
        ),

        list([
            "Modules are deferred by default (they wait for HTML).",
            "They run in strict mode.",
            "Paths are usually relative: `./utils.js`.",
            "Each module is evaluated once and then shared.",
        ]),

        keyPoints([
            "type=\"module\" is required in the browser.",
            "Named exports use { } ; default export does not.",
            "Modules keep global scope clean and files small.",
        ]),
    ],

    {
        summary: "Split a project into ES modules with import and export.",
        minutes: 8,
        tags: ["modules", "es6", "javascript"],

        mcqs: [
            mcq(
                "Browser modules require which script attribute?",
                ["defer", "async", "type=\"module\"", "nomodule"],
                2,
                "type=\"module\" turns on import/export."
            ),
            mcq(
                "import { add } from \"./math.js\" is a:",
                ["Default import", "Named import", "CommonJS require", "JSON import only"],
                1,
                "Curly braces import a named export."
            ),
        ],

        questions: [
            qa(
                "How do ES modules help organise a JavaScript project?",
                "Each file exports only what others need. app.js imports those functions instead of using globals. The browser loads dependencies in order, in strict mode, once per page. This keeps files small, avoids name clashes, and matches how modern tooling works.",
                3
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — Classes (OOP in JavaScript)
========================================================= */

const classesTopic = createTopic(
    "javascript-classes",
    "Classes (OOP in JavaScript)",

    [
        definition(
            "Class",
            "A template for objects. It groups data (fields) and behaviour (methods). Under the hood JavaScript still uses prototypes."
        ),

        code(
            `class Student {
  constructor(roll, name) {
    this.roll = roll;
    this.name = name;
    this.marks = [];
  }

  addMark(m) {
    this.marks.push(m);
  }

  get average() {
    if (this.marks.length === 0) return 0;
    return this.marks.reduce((s, m) => s + m, 0) / this.marks.length;
  }
}

class Monitor extends Student {
  constructor(roll, name, duty) {
    super(roll, name);
    this.duty = duty;
  }

  info() {
    return \`\${this.name} (\${this.duty}) avg=\${this.average}\`;
  }
}

const m = new Monitor(1, "Priya", "Attendance");
m.addMark(80);
m.addMark(90);
console.log(m.info(),;`,
            "javascript",
            "class, constructor, extends, super"
        ),

        table(
            ["Keyword", "Role"],
            [
                ["constructor", "Runs when you call new"],
                ["this", "The new object"],
                ["extends", "Inherit from another class"],
                ["super(...)", "Call the parent constructor or method"],
                ["get / set", "Computed properties"],
            ]
        ),

        keyPoints([
            "new ClassName() creates an instance.",
            "Child classes must call super() before using this.",
            "Classes are syntactic sugar over prototypes.",
        ]),
    ],

    {
        summary: "Define classes, constructors, inheritance with extends/super, and getters.",
        minutes: 10,
        tags: ["oop", "classes", "javascript"],

        mcqs: [
            mcq(
                "To create an object from a class you use:",
                ["ClassName.create()", "new ClassName()", "ClassName()", "import ClassName"],
                1,
                "The new operator runs the constructor."
            ),
            mcq(
                "A child constructor must call super() :",
                ["After using this", "Before using this", "Never", "Only in modules"],
                1,
                "The parent instance must exist first."
            ),
        ],

        questions: [
            qa(
                "Explain class, constructor and extends with a short example.",
                "A class names a type. constructor(roll, name) saves fields on this when you write new Student(1, \"Amit\"). extends makes Monitor a Student; super(roll, name) runs the parent constructor, then the child can add duty. Methods on the parent (addMark, average) are available on the child.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — Putting It Together (Mini Patterns)
========================================================= */

const miniApp = createTopic(
    "mini-app-patterns",
    "Putting It Together: Mini App Patterns",

    [
        text(
            "Exam and lab programs usually combine DOM, events, validation, fetch and storage. The pattern below is enough for a notes app, a student list, or a product catalogue."
        ),

        heading("Recommended flow"),

        steps([
            "Select elements once at the top of the file",
            "Keep data in an array of objects (the \"state\")",
            "render() clears the list and rebuilds it from state",
            "Events change state, save to localStorage, then render()",
            "fetch() loads initial data when the page opens",
        ]),

        code(
            `const form = document.querySelector("#note-form");
const input = document.querySelector("#note");
const list = document.querySelector("#notes");

let notes = JSON.parse(localStorage.getItem("notes") || "[]");

function save() {
  localStorage.setItem("notes", JSON.stringify(notes),;
}

function render() {
  list.innerHTML = "";
  notes.forEach((text, i) => {
    const li = document.createElement("li");
    li.textContent = text;
    const btn = document.createElement("button");
    btn.textContent = "Delete";
    btn.addEventListener("click", () => {
      notes.splice(i, 1);
      save();
      render();
    });
    li.append(" ", btn);
    list.append(li);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) return;
  notes.push(text);
  input.value = "";
  save();
  render();
});

render();`,
            "javascript",
            "State + render + localStorage"
        ),

        heading("Checklist before you submit a lab"),

        list([
            "No leftover console errors.",
            "Empty input is rejected.",
            "Page does not reload on submit.",
            "Refresh still shows saved data (if storage is required).",
            "Delete / edit actually updates the UI.",
        ]),

        keyPoints([
            "Keep one source of truth (an array) and a render() function.",
            "Never copy-paste listeners inside a loop without thinking about index/identity.",
            "persist with JSON + localStorage when the question asks for it.",
            "fetch fills state, then render(); do not mix HTML strings from the server blindly.",
        ]),
    ],

    {
        summary:
            "Combine DOM, events, state, localStorage and fetch into a small maintainable app.",
        minutes: 11,
        tags: ["project", "patterns", "javascript", "important"],

        mcqs: [
            mcq(
                "A good reason to keep an array of notes and a render() function is:",
                [
                    "The DOM cannot hold text",
                    "UI is rebuilt from one source of truth after every change",
                    "localStorage requires a function named render",
                    "fetch only works inside render",
                ],
                1,
                "State drives the view; you do not hunt for nodes to patch by hand."
            ),
        ],

        questions: [
            qa(
                "Describe how you would build a notes app that survives page refresh.",
                "Keep notes in an array. On load, JSON.parse localStorage (or []). render() draws the ul from that array. On submit, preventDefault, push the trimmed text, save with JSON.stringify, render again. Delete splices the item, saves and re-renders. The array is the single source of truth.",
                5
            ),
        ],
    }
);

export const unit4Topics = [
    webStorage,
    modulesTopic,
    classesTopic,
    miniApp,
];
