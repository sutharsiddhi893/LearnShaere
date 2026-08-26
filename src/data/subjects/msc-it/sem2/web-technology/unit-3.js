/* =========================================================
   MSc-IT • SEM 2 • Web Technology
   UNIT 3 — Server-Side Web Scripting
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
   TOPIC 1 — Introduction to Server-Side Scripting and Node.js
========================================================= */

const introToServerSideAndNode = createTopic(
    "introduction-to-server-side-scripting-and-nodejs",
    "Introduction to Server-Side Scripting and Node.js",

    [
        definition(
            "Server-Side Scripting",
            "The process of running code on a web server to generate dynamic content, process form data, interact with databases and implement business logic before sending the result to the client's browser."
        ),

        text(
            "Unlike client-side JavaScript which runs in the browser and is visible to the user, server-side code runs on the server and is never sent to the client. This makes it suitable for tasks that require security, data persistence and access to server resources such as databases, file systems and third-party APIs."
        ),

        heading("Client-Side versus Server-Side"),

        table(
            ["Aspect", "Client-Side", "Server-Side"],
            [
                ["Runs on", "User's browser", "Web server"],
                ["Languages", "HTML, CSS, JavaScript", "Node.js, PHP, Python, Java, C#, Ruby"],
                ["Visible to user?", "Yes (view source, DevTools)", "No (code stays on the server)"],
                ["Purpose", "UI, interactivity, validation", "Business logic, database, authentication"],
                ["Security", "Can be modified by the user", "Protected; user cannot see or change it"],
                ["Database access", "No (would expose credentials)", "Yes"],
                ["SEO", "May need extra work (CSR)", "HTML is ready on first load (SSR)"],
            ]
        ),

        heading("What Can Server-Side Code Do?"),

        list([
            "Generate HTML dynamically based on user data, session state or database queries.",
            "Process form submissions (login, registration, file uploads).",
            "Authenticate users and manage sessions/tokens.",
            "Read from and write to databases.",
            "Call third-party APIs (payment gateways, email services, SMS).",
            "Serve files and handle routing (which URL maps to which logic).",
            "Implement business rules that must not be bypassed by the client.",
        ]),

        heading("Node.js"),

        definition(
            "Node.js",
            "An open-source, cross-platform JavaScript runtime built on Chrome's V8 engine that allows JavaScript to run on the server. Created by Ryan Dahl in 2009, Node.js uses an event-driven, non-blocking I/O model that makes it efficient for building scalable network applications."
        ),

        heading("Why Node.js?"),

        list([
            "Same language on client and server — JavaScript everywhere, reducing context switching.",
            "Non-blocking I/O — handles thousands of concurrent connections efficiently.",
            "Huge ecosystem — npm is the largest package registry in the world.",
            "Fast — V8 compiles JavaScript to native machine code.",
            "JSON-native — JavaScript objects map directly to JSON, the standard API data format.",
            "Great for real-time apps — chat, live dashboards, collaboration tools (Socket.io).",
            "Full-stack potential — one language for front-end, back-end and even mobile (React Native).",
        ]),

        heading("Node.js Architecture"),

        code(
            `Node.js Architecture:

  ┌─────────────────────────────────────────┐
  │         Your JavaScript Code            │
  ├─────────────────────────────────────────┤
  │         Node.js Bindings (C++)          │
  ├──────────────────┬──────────────────────┤
  │   V8 Engine      │   libuv              │
  │   (JavaScript    │   (Event loop,       │
  │    execution)    │    async I/O,        │
  │                  │    thread pool)      │
  └──────────────────┴──────────────────────┘
           │                    │
     Compiles JS          Handles file system,
     to machine code      network, timers, DNS

  Single-threaded event loop + thread pool for heavy I/O.`,
            "text",
            "Node.js architecture"
        ),

        heading("The Event Loop in Node.js"),

        text(
            "Node.js is single-threaded for JavaScript execution but uses libuv's thread pool for expensive I/O operations (file system, DNS, crypto). When you call fs.readFile(), Node.js offloads the work to a thread, continues executing other code, and runs your callback when the file is ready. This is why Node.js can handle many concurrent connections without creating a thread per request (unlike traditional models like Apache + PHP)."
        ),

        heading("Blocking versus Non-Blocking"),

        code(
            `// BLOCKING (synchronous) — the entire process waits
const fs = require("fs");
const data = fs.readFileSync("file.txt", "utf8");
console.log(data);
console.log("This waits until the file is read");

// NON-BLOCKING (asynchronous) — the process continues
fs.readFile("file.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
});
console.log("This runs immediately, before the file is read");`,
            "javascript",
            "Blocking vs non-blocking I/O"
        ),

        heading("Creating a Simple HTTP Server"),

        code(
            `// server.js
const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Hello from Node.js!</h1>");
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});`,
            "javascript",
            "Minimal Node.js HTTP server"
        ),

        heading("Node.js versus Traditional Server Models"),

        table(
            ["Aspect", "Traditional (Apache + PHP)", "Node.js"],
            [
                ["Concurrency model", "One thread/process per request", "Single-threaded event loop"],
                ["I/O", "Blocking (thread waits for DB/file)", "Non-blocking (callback when ready)"],
                ["Language", "Different on client and server", "JavaScript on both"],
                ["Best for", "CPU-heavy, traditional websites", "I/O-heavy, real-time, APIs"],
                ["Scaling", "Add more threads/processes", "Cluster module, load balancer"],
                ["CPU-heavy tasks", "Fine (each request has a thread)", "Can block the event loop — offload to workers"],
            ]
        ),

        note(
            "Node.js is excellent for I/O-bound workloads (APIs, chat, streaming) because it never sits idle waiting for the disk or network. It is a poor choice for CPU-bound workloads (image processing, heavy computation) because a long-running calculation blocks the single thread and stalls all other requests. For CPU work, use worker threads or a different language.",
            "exam",
            "Frequently Asked"
        ),

        keyPoints([
            "Server-side code runs on the server, is invisible to the client, and handles logic, databases and authentication.",
            "Node.js is a JavaScript runtime built on V8, created by Ryan Dahl in 2009.",
            "Node.js uses a single-threaded event loop with non-blocking I/O via libuv.",
            "Non-blocking I/O lets Node.js handle thousands of concurrent connections efficiently.",
            "Node.js is ideal for I/O-heavy apps (APIs, real-time); avoid it for CPU-heavy computation.",
        ]),
    ],

    {
        summary:
            "Understand server-side scripting, Node.js architecture, the event loop, blocking vs non-blocking I/O and when to use Node.js.",
        minutes: 12,
        tags: ["web", "nodejs", "server-side", "event-loop", "non-blocking", "important"],

        mcqs: [
            mcq(
                "Node.js was created by:",
                ["Brendan Eich", "Ryan Dahl", "Tim Berners-Lee", "Linus Torvalds"],
                1,
                "Ryan Dahl created Node.js in 2009."
            ),
            mcq(
                "Node.js is built on which JavaScript engine?",
                ["SpiderMonkey", "JavaScriptCore", "V8", "Chakra"],
                2,
                "Node.js is built on Chrome's V8 JavaScript engine."
            ),
            mcq(
                "Node.js handles concurrency using:",
                ["One thread per request", "A single-threaded event loop with non-blocking I/O", "Multiple processes only", "GPU computing"],
                1,
                "Node.js uses a single-threaded event loop and non-blocking I/O, not a thread per request."
            ),
            mcq(
                "fs.readFileSync is:",
                ["Non-blocking", "Blocking (synchronous)", "Asynchronous", "Deprecated"],
                1,
                "The Sync suffix means the method is blocking — it waits until the operation completes."
            ),
            mcq(
                "Node.js is a poor choice for:",
                ["REST APIs", "Chat applications", "CPU-heavy image processing", "Real-time dashboards"],
                2,
                "CPU-heavy tasks block the single thread and stall all other requests."
            ),
            mcq(
                "libuv in Node.js is responsible for:",
                ["Compiling JavaScript", "The event loop and async I/O", "The npm registry", "CSS rendering"],
                1,
                "libuv provides the event loop, the thread pool and asynchronous I/O bindings."
            ),
        ],

        questions: [
            qa(
                "What is Node.js? Explain its architecture.",
                "Node.js is an open-source, cross-platform JavaScript runtime created by Ryan Dahl in 2009 that allows JavaScript to run on the server. It is built on Chrome's V8 engine, which compiles JavaScript to native machine code. The architecture has three main layers. At the top is your JavaScript code. Below that are Node.js bindings written in C++ that connect JavaScript to system APIs. At the bottom are two key components: V8, which executes JavaScript, and libuv, which provides the event loop, a thread pool and asynchronous I/O for the file system, network and timers. JavaScript execution is single-threaded, but expensive I/O is offloaded to libuv's thread pool. When the I/O completes, the callback is queued and the event loop runs it when the call stack is empty. This model handles thousands of concurrent connections without creating a thread per request.",
                5
            ),
            qa(
                "Differentiate between blocking and non-blocking I/O in Node.js.",
                "Blocking (synchronous) I/O waits until the operation finishes before executing the next line. For example, fs.readFileSync('file.txt') reads the entire file and only then continues. During this wait, the single thread cannot handle any other requests, so the whole server is stalled. Non-blocking (asynchronous) I/O starts the operation and immediately continues with the next line. When the operation finishes, a callback, Promise or event is fired. For example, fs.readFile('file.txt', callback) returns immediately and runs the callback later. Node.js is designed around non-blocking I/O so that while one request is waiting for the database or disk, the event loop can process other requests. Always prefer async APIs in server code; use Sync methods only in startup scripts or CLIs where blocking is acceptable.",
                5
            ),
            qa(
                "When should you use Node.js and when should you avoid it?",
                "Use Node.js for I/O-bound, real-time and JSON-heavy applications: REST APIs, chat servers, live dashboards, streaming, SPAs' backends and microservices. Its non-blocking model shines when the server spends most of its time waiting on the network or disk rather than computing. The shared JavaScript language also simplifies full-stack development. Avoid Node.js for CPU-bound work such as image/video processing, machine learning inference, heavy encryption or complex numerical computation. Because JavaScript runs on a single thread, a long calculation blocks the event loop and delays every other request. For CPU work, offload to worker threads, a message queue, or a language better suited to computation such as Python, Go or Java.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — NPM and Node.js Modules
========================================================= */

const npmAndModules = createTopic(
    "npm-and-nodejs-modules",
    "NPM and Node.js Modules",

    [
        definition(
            "npm (Node Package Manager)",
            "The default package manager for Node.js and the largest software registry in the world. It is used to install, update, remove and share JavaScript packages (libraries and tools). npm comes bundled with Node.js."
        ),

        heading("package.json"),

        definition(
            "package.json",
            "A JSON file in the project root that describes the project: its name, version, scripts, dependencies and metadata. It is the manifest that npm uses to install the correct packages."
        ),

        code(
            `{
  "name": "my-api",
  "version": "1.0.0",
  "description": "A simple REST API",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "test": "jest"
  },
  "dependencies": {
    "express": "^4.18.2",
    "mongoose": "^8.0.0"
  },
  "devDependencies": {
    "nodemon": "^3.0.0",
    "jest": "^29.0.0"
  }
}`,
            "json",
            "Example package.json"
        ),

        heading("Common npm Commands"),

        table(
            ["Command", "Purpose"],
            [
                ["npm init -y", "Create a package.json with defaults"],
                ["npm install", "Install all packages listed in package.json"],
                ["npm install express", "Install a package and add it to dependencies"],
                ["npm install nodemon --save-dev", "Install as a development-only dependency"],
                ["npm install -g nodemon", "Install globally (available in any project)"],
                ["npm uninstall express", "Remove a package"],
                ["npm update", "Update packages to latest allowed versions"],
                ["npm run dev", "Run the 'dev' script from package.json"],
                ["npm list --depth=0", "List installed top-level packages"],
                ["npx nodemon server.js", "Run a package without installing it globally"],
            ]
        ),

        heading("dependencies versus devDependencies"),

        table(
            ["Type", "Installed When", "Examples", "Shipped to Production?"],
            [
                ["dependencies", "Always (npm install)", "express, mongoose, jsonwebtoken", "Yes"],
                ["devDependencies", "Always locally; skipped with --production", "nodemon, jest, eslint, prettier", "No"],
            ]
        ),

        heading("Semantic Versioning (SemVer)"],

    code(
        `Version format: MAJOR.MINOR.PATCH  (e.g., 4.18.2)

  MAJOR — breaking changes (4.x → 5.x)
  MINOR — new features, backward compatible (4.18 → 4.19)
  PATCH — bug fixes, backward compatible (4.18.2 → 4.18.3)

  Range prefixes in package.json:
  ^4.18.2  →  >=4.18.2 <5.0.0   (compatible with 4.x)
  ~4.18.2  →  >=4.18.2 <4.19.0  (compatible with 4.18.x)
  4.18.2   →  exactly 4.18.2
  *        →  any version (avoid in production)`,
        "text",
        "Semantic versioning"
    ),

    heading("Node.js Module Systems"),

    table(
        ["System", "Syntax", "File Extension", "Default in"],
        [
            ["CommonJS (CJS)", "require() / module.exports", ".js (default)", "Node.js historically"],
            ["ES Modules (ESM)", "import / export", ".mjs or \"type\": \"module\"", "Browsers and modern Node.js"],
        ]
    ),

    code(
        `// CommonJS — math.js
function add(a, b) { return a + b; }
module.exports = { add };
// or: exports.add = add;

// CommonJS — app.js
const { add } = require("./math");
const fs = require("fs");          // built-in
const express = require("express"); // npm package
console.log(add(2, 3));  // 5

// ES Modules — math.mjs (or package.json "type": "module")
export function add(a, b) { return a + b; }
export default function subtract(a, b) { return a - b; }

// ES Modules — app.mjs
import subtract, { add } from "./math.mjs";
import fs from "fs";`,
        "javascript",
        "CommonJS vs ES Modules"
    ),

    heading("Module Types in Node.js"),

    table(
        ["Type", "How to Load", "Examples"],
        [
            ["Core (built-in)", "require(\"fs\") — no install needed", "fs, http, path, os, crypto, url, events"],
            ["Local (your files)", "require(\"./math\") — relative path", "./utils.js, ../config.js"],
            ["Third-party (npm)", "require(\"express\") — from node_modules", "express, lodash, mongoose"],
        ]
    ),

    heading("Important Core Modules"),

    table(
        ["Module", "Purpose", "Example"],
        [
            ["fs", "File system operations", "fs.readFile, fs.writeFile, fs.promises"],
            ["http / https", "Create HTTP servers and make requests", "http.createServer()"],
            ["path", "Work with file and directory paths", "path.join(__dirname, 'data')"],
            ["os", "Operating system info", "os.cpus(), os.freemem()"],
            ["url", "Parse and construct URLs", "new URL(req.url, 'http://localhost')"],
            ["crypto", "Hashing, encryption, random bytes", "crypto.randomBytes(16)"],
            ["events", "EventEmitter for custom events", "emitter.on('data', handler)"],
            ["stream", "Streaming data (readable, writable, transform)", "fs.createReadStream()"],
        ]
    ),

    heading("The node_modules Folder and package-lock.json"),

    text(
        "When you run npm install, packages are downloaded into node_modules/. This folder can be huge and should never be committed to Git (add it to .gitignore). package-lock.json locks the exact versions of every package and nested dependency so that every developer and production server installs the identical tree. Always commit package-lock.json."
    ),

    note(
        "Never commit node_modules to version control. Always commit package.json and package-lock.json. Other developers (and CI/CD) run npm install to recreate the exact dependency tree. Use npx to run one-off CLI tools without a global install.",
        "tip",
        "Best Practice"
    ),

    keyPoints([
        "npm is Node.js's package manager; package.json is the project manifest.",
        "dependencies ship to production; devDependencies are for development only.",
        "SemVer uses MAJOR.MINOR.PATCH; ^ allows compatible minor/patch updates.",
        "CommonJS uses require/module.exports; ES Modules use import/export.",
        "Never commit node_modules; always commit package-lock.json.",
    ]),
  ],

{
    summary:
    "Master npm, package.json, semantic versioning, CommonJS vs ES Modules and Node.js core modules.",
        minutes: 12,
            tags: ["web", "npm", "modules", "package-json", "commonjs", "esm", "important"],

                mcqs: [
                    mcq(
                        "npm stands for:",
                        ["New Package Manager", "Node Package Manager", "Network Package Module", "Node Project Manager"],
                        1,
                        "npm stands for Node Package Manager."
                    ),
                    mcq(
                        "devDependencies are:",
                        ["Required in production", "Used only during development", "Installed globally", "Ignored by npm"],
                        1,
                        "devDependencies (test runners, linters, nodemon) are not needed in production."
                    ),
                    mcq(
                        "The caret (^) in \"express\": \"^4.18.2\" means:",
                        ["Exactly 4.18.2", ">=4.18.2 <5.0.0", "Any version", ">=4.18.2 <4.19.0"],
                        1,
                        "^ allows updates that do not change the leftmost non-zero number — here any 4.x >= 4.18.2."
                    ),
                    mcq(
                        "CommonJS uses which function to load a module?",
                        ["import", "require", "include", "load"],
                        1,
                        "CommonJS uses require() to load modules and module.exports to export them."
                    ),
                    mcq(
                        "Which file should you NOT commit to Git?",
                        ["package.json", "package-lock.json", "node_modules/", "README.md"],
                        2,
                        "node_modules/ is regenerated by npm install and should be in .gitignore."
                    ),
                    mcq(
                        "npx is used to:",
                        ["Publish a package", "Run a package without installing it globally", "Uninstall npm", "Create a lock file"],
                        1,
                        "npx executes a package's binary, downloading it temporarily if needed."
                    ),
                ],

                    questions: [
                        qa(
                            "Explain package.json and the difference between dependencies and devDependencies.",
                            "package.json is the manifest file in a Node.js project's root. It stores the project name, version, description, the main entry file, npm scripts (start, test, dev) and lists of packages. dependencies are packages required for the application to run in production, such as express and mongoose. They are installed with npm install <pkg> and are always included. devDependencies are packages needed only during development, such as nodemon, jest and eslint. They are installed with npm install <pkg> --save-dev. In production you can run npm install --production to skip devDependencies, reducing install size. Scripts in package.json are run with npm run <name>, for example npm run dev to start a development server with nodemon.",
                            5
                        ),
                        qa(
                            "Explain semantic versioning and the ^ and ~ prefixes.",
                            "Semantic Versioning (SemVer) uses the format MAJOR.MINOR.PATCH. A MAJOR bump (4 to 5) indicates breaking changes that may require code updates. A MINOR bump (4.18 to 4.19) adds features while remaining backward compatible. A PATCH bump (4.18.2 to 4.18.3) is a backward-compatible bug fix. In package.json, ^4.18.2 means install any version >= 4.18.2 that is still 4.x (less than 5.0.0). ~4.18.2 means only patch updates (>= 4.18.2 < 4.19.0). Pinning an exact version (4.18.2 without a prefix) installs only that version. The caret is the npm default and is appropriate for most libraries. package-lock.json then freezes the exact resolved versions so installs are reproducible.",
                            5
                        ),
                        qa(
                            "Compare CommonJS and ES Modules in Node.js.",
                            "CommonJS (CJS) is Node.js's original module system. You export with module.exports or exports and import with require(). It is synchronous, can be used anywhere in a file, and is the default for .js files unless configured otherwise. ES Modules (ESM) are the official JavaScript standard, using export and import statements. They are statically analysed (imports must be at the top level), support default and named exports, and work in both browsers and Node.js. In Node.js, ESM requires either a .mjs extension or \"type\": \"module\" in package.json. ESM is the future and is required for some modern packages; CJS remains widely used in existing codebases. Mixing them is possible but can be awkward — prefer one system per project.",
                            4
                        ),
                    ],
  }
);

/* =========================================================
   TOPIC 3 — Express.js Framework
========================================================= */

const expressJs = createTopic(
    "expressjs-framework",
    "Express.js Framework",

    [
        definition(
            "Express.js",
            "A fast, unopinionated, minimalist web framework for Node.js. It provides a thin layer of features for building web applications and APIs: routing, middleware, request/response helpers and template rendering. It is the de facto standard for Node.js web servers."
        ),

        text(
            "Writing a web server with the raw http module requires manually parsing URLs, methods and bodies. Express abstracts this into a clean API: you define routes, attach middleware and send responses with a few lines of code. Most Node.js web applications and many full-stack frameworks (NestJS, Sails) are built on Express."
        ),

        heading("Installing and Creating an App"),

        code(
            `npm init -y
npm install express

// app.js
const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Hello, Express!");
});

app.listen(PORT, () => {
    console.log(\`Server running on http://localhost:\${PORT}\`);
});`,
            "javascript",
            "Minimal Express app"
        ),

        heading("Request and Response Objects"),

        table(
            ["Object", "Useful Properties / Methods", "Purpose"],
            [
                ["req", "req.params, req.query, req.body, req.headers, req.method, req.url", "Incoming HTTP request"],
                ["res", "res.send(), res.json(), res.status(), res.redirect(), res.sendFile()", "Outgoing HTTP response"],
            ]
        ),

        code(
            `app.get("/hello", (req, res) => {
    res.send("Plain text or HTML");
});

app.get("/api/user", (req, res) => {
    res.json({ name: "Rahul", role: "student" });  // Content-Type: application/json
});

app.get("/error", (req, res) => {
    res.status(404).json({ error: "Not found" });
});

app.get("/go", (req, res) => {
    res.redirect("/hello");
});`,
            "javascript",
            "Response methods"
        ),

        heading("Routing"),

        definition(
            "Routing",
            "Determining how an application responds to a client request to a particular URL (path) and HTTP method. Express routes have the form app.METHOD(path, handler)."
        ),

        code(
            `// Basic routes
app.get("/users", (req, res) => { /* list users */ });
app.post("/users", (req, res) => { /* create user */ });
app.put("/users/:id", (req, res) => { /* replace user */ });
app.patch("/users/:id", (req, res) => { /* update user */ });
app.delete("/users/:id", (req, res) => { /* delete user */ });

// Route parameters
app.get("/users/:id", (req, res) => {
    const id = req.params.id;  // /users/42 → "42"
    res.json({ id });
});

// Query strings
// GET /search?q=java&page=2
app.get("/search", (req, res) => {
    const { q, page = 1 } = req.query;
    res.json({ q, page });
});

// Multiple parameters
app.get("/courses/:courseId/students/:studentId", (req, res) => {
    const { courseId, studentId } = req.params;
    res.json({ courseId, studentId });
});`,
            "javascript",
            "Express routing"
        ),

        heading("Middleware"),

        definition(
            "Middleware",
            "A function that has access to req, res and the next function in the request-response cycle. Middleware can execute code, modify req/res, end the cycle by sending a response, or call next() to pass control to the next middleware."
        ),

        code(
            `Middleware pipeline:

  Request → [logger] → [json parser] → [auth] → [route handler] → Response
                │            │            │
                └── next() ──┘── next() ──┘── next() or res.send()

// Custom logger middleware
app.use((req, res, next) => {
    console.log(\`\${req.method} \${req.url}\`);
    next();  // MUST call next() or the request hangs
});

// Built-in middleware
app.use(express.json());       // Parse JSON request bodies → req.body
app.use(express.urlencoded({ extended: true }));  // Parse form data
app.use(express.static("public"));  // Serve static files from /public

// Router-level middleware
const router = express.Router();
router.use(authMiddleware);
router.get("/profile", (req, res) => { /* ... */ });
app.use("/api", router);

// Error-handling middleware — 4 parameters
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Something went wrong" });
});`,
            "javascript",
            "Middleware"
        ),

        heading("Types of Middleware"],

    table(
        ["Type", "Applied With", "Example"],
        [
            ["Application-level", "app.use() / app.METHOD()", "Logger, CORS, body parser"],
            ["Router-level", "router.use()", "Auth for /api routes only"],
            ["Built-in", "express.json(), express.static()", "Body parsing, static files"],
            ["Third-party", "app.use(cors()), app.use(helmet())", "cors, helmet, morgan, cookie-parser"],
            ["Error-handling", "app.use((err, req, res, next) => {})", "Centralised error responses"],
        ]
    ),

    heading("Serving Static Files and Templates"),

    code(
        `// Static files (HTML, CSS, images) from the "public" folder
app.use(express.static("public"));
// GET /style.css  →  public/style.css
// GET /logo.png   →  public/logo.png

// Template engines (e.g., EJS)
app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/hello/:name", (req, res) => {
    res.render("hello", { name: req.params.name });
    // Renders views/hello.ejs with { name }
});`,
        "javascript",
        "Static files and templates"
    ),

    heading("A Complete Mini API"),

    code(
        `const express = require("express");
const app = express();
app.use(express.json());

const students = [
    { id: 1, name: "Rahul", marks: 85 },
    { id: 2, name: "Priya", marks: 92 },
];

app.get("/students", (req, res) => {
    res.json(students);
});

app.get("/students/:id", (req, res) => {
    const student = students.find(s => s.id === Number(req.params.id));
    if (!student) return res.status(404).json({ error: "Not found" });
    res.json(student);
});

app.post("/students", (req, res) => {
    const { name, marks } = req.body;
    if (!name) return res.status(400).json({ error: "Name required" });
    const student = { id: students.length + 1, name, marks };
    students.push(student);
    res.status(201).json(student);
});

app.listen(3000);`,
        "javascript",
        "Mini students API"
    ),

    note(
        "If a middleware does not call next() and does not send a response, the request hangs forever. This is one of the most common Express bugs. Error-handling middleware must have four parameters (err, req, res, next) so Express can identify it.",
        "warning",
        "Common Mistake"
    ),

    keyPoints([
        "Express is a minimal Node.js web framework providing routing, middleware and helpers.",
        "Routes map HTTP method + path to a handler: app.get('/users/:id', handler).",
        "req.params, req.query and req.body hold route params, query strings and JSON bodies.",
        "Middleware functions run in order; they must call next() or send a response.",
        "express.json() parses JSON bodies; express.static() serves files; error middleware has 4 args.",
    ]),
  ],

{
    summary:
    "Master Express.js: app setup, routing, request/response objects, middleware types and a complete mini API.",
        minutes: 14,
            tags: ["web", "express", "routing", "middleware", "rest", "important"],

                mcqs: [
                    mcq(
                        "Express.js is:",
                        ["A database", "A Node.js web framework", "A front-end library", "A CSS preprocessor"],
                        1,
                        "Express is a minimalist web framework for Node.js."
                    ),
                    mcq(
                        "Route parameters like /users/:id are accessed via:",
                        ["req.query", "req.params", "req.body", "req.headers"],
                        1,
                        "req.params contains values from the path, e.g. /users/42 → req.params.id === '42'."
                    ),
                    mcq(
                        "express.json() is middleware that:",
                        ["Serves static files", "Parses JSON request bodies into req.body", "Handles errors", "Sets up routing"],
                        1,
                        "express.json() parses incoming JSON and makes it available as req.body."
                    ),
                    mcq(
                        "If middleware neither calls next() nor sends a response:",
                        ["Express throws an error", "The request hangs indefinitely", "The next route runs anyway", "The server crashes"],
                        1,
                        "The request hangs because the cycle never completes."
                    ),
                    mcq(
                        "Error-handling middleware is identified by:",
                        ["Its name", "Having four parameters (err, req, res, next)", "Being last in the file", "Using app.error()"],
                        1,
                        "Express treats a function with four arguments as error-handling middleware."
                    ),
                    mcq(
                        "Query string ?q=java&page=2 is accessed via:",
                        ["req.params", "req.query", "req.body", "req.url only"],
                        1,
                        "req.query is an object of query-string key-value pairs: { q: 'java', page: '2' }."
                    ),
                ],

                    questions: [
                        qa(
                            "What is Express.js? Explain routing with examples of params and query strings.",
                            "Express.js is a fast, unopinionated, minimalist web framework for Node.js that simplifies building servers and APIs by providing routing, middleware and request/response helpers. Routing maps an HTTP method and a URL path to a handler function: app.get('/users', handler) responds to GET /users. Route parameters are dynamic segments prefixed with a colon: app.get('/users/:id', (req, res) => { const id = req.params.id; }). A request to /users/42 sets req.params.id to '42'. Query strings are the key-value pairs after ? in the URL. For GET /search?q=java&page=2, req.query equals { q: 'java', page: '2' }. You send responses with res.send() for text/HTML, res.json() for JSON and res.status(404).json(...) to set a status code. Together these let you build a complete REST API with a few lines per endpoint.",
                            5
                        ),
                        qa(
                            "Explain middleware in Express. What happens if next() is not called?",
                            "Middleware is a function with the signature (req, res, next) that runs during the request-response cycle. It can log, parse bodies, authenticate, modify req/res, end the cycle by sending a response, or pass control onward by calling next(). Middleware is registered with app.use() (all methods and paths, or a path prefix) or app.METHOD() (a specific method and path). They execute in the order they are registered, forming a pipeline: logger → JSON parser → auth → route handler. If a middleware neither calls next() nor sends a response, the request hangs forever because Express waits for the cycle to finish. This is a very common bug. Error-handling middleware has four parameters (err, req, res, next) and is typically registered last to catch errors from earlier layers.",
                            5
                        ),
                        qa(
                            "Write a brief Express API with GET and POST endpoints and explain each part.",
                            "A minimal API starts with const app = express(); and app.use(express.json()) so POST bodies are parsed into req.body. app.get('/students', (req, res) => res.json(students)) returns the full list. app.get('/students/:id', ...) finds one student by req.params.id and returns 404 if missing. app.post('/students', (req, res) => { const { name, marks } = req.body; ... students.push(student); res.status(201).json(student); }) creates a new record and returns 201 Created. Validation (if (!name) return res.status(400).json(...)) should happen before mutating data. app.listen(3000) starts the server. Each handler either sends a response or the request would hang. This pattern — parse, validate, mutate or read, respond with an appropriate status — is the core of REST APIs in Express.",
                            5
                        ),
                    ],
  }
);

/* =========================================================
   TOPIC 4 — REST APIs
========================================================= */

const restApis = createTopic(
    "rest-apis",
    "REST APIs",

    [
        definition(
            "REST (Representational State Transfer)",
            "An architectural style for designing networked applications, defined by Roy Fielding in 2000. A REST API (or RESTful API) uses HTTP methods and URLs to perform operations on resources, typically exchanging data as JSON."
        ),

        text(
            "REST is not a protocol or a library — it is a set of constraints. When an API follows these constraints, it is called RESTful. REST has become the dominant style for web APIs because it is simple, scalable and uses the same HTTP that browsers already speak."
        ),

        heading("REST Constraints"),

        table(
            ["Constraint", "Meaning"],
            [
                ["Client-Server", "UI (client) is separated from data storage (server); they evolve independently"],
                ["Stateless", "Each request contains all information needed; the server does not store client session state"],
                ["Cacheable", "Responses declare whether they can be cached to improve performance"],
                ["Uniform Interface", "Resources are identified by URLs; manipulated via representations (JSON); self-descriptive messages; HATEOAS"],
                ["Layered System", "Client cannot tell whether it is connected to the end server or an intermediary (proxy, CDN)"],
                ["Code on Demand (optional)", "Server can send executable code (e.g., JavaScript) to extend client functionality"],
            ]
        ),

        heading("Resources and URLs"],

    definition(
        "Resource",
        "Any information that can be named — a student, a collection of students, a document, an image. In REST, every resource has a unique URL (URI)."
    ),

    table(
        ["Operation", "HTTP Method", "URL", "Body", "Success Status"],
        [
            ["List all students", "GET", "/students", "—", "200 OK"],
            ["Get one student", "GET", "/students/42", "—", "200 OK"],
            ["Create a student", "POST", "/students", "{ name, marks }", "201 Created"],
            ["Replace a student", "PUT", "/students/42", "{ name, marks }", "200 OK"],
            ["Partial update", "PATCH", "/students/42", "{ marks: 90 }", "200 OK"],
            ["Delete a student", "DELETE", "/students/42", "—", "204 No Content"],
        ]
    ),

    heading("URL Design Rules"),

    list([
        "Use nouns, not verbs: /students not /getStudents.",
        "Use plural names: /students not /student.",
        "Use path parameters for identity: /students/42 not /students?id=42 (for a single resource).",
        "Use query parameters for filtering, sorting and pagination: /students?course=IT&sort=marks&page=2.",
        "Nest for relationships: /courses/3/students (students in course 3).",
        "Keep URLs lowercase, use hyphens not underscores: /course-modules.",
        "Do not include file extensions: /students not /students.json.",
    ]),

    heading("Request and Response JSON"),

    code(
        `POST /students
Content-Type: application/json

{
  "name": "Rahul",
  "course": "MSc IT",
  "marks": 85
}

← 201 Created
Location: /students/3
Content-Type: application/json

{
  "id": 3,
  "name": "Rahul",
  "course": "MSc IT",
  "marks": 85
}`,
        "text",
        "REST request and response"
    ),

    heading("HTTP Status Codes for APIs"],

        table(
            ["Code", "Meaning", "When to Use"],
            [
                ["200 OK", "Success", "GET, PUT, PATCH that return a body"],
                ["201 Created", "Resource created", "POST that created a new resource"],
                ["204 No Content", "Success, no body", "DELETE, or PUT with no return body"],
                ["400 Bad Request", "Client sent invalid data", "Validation errors, malformed JSON"],
                ["401 Unauthorized", "Not authenticated", "Missing or invalid token"],
                ["403 Forbidden", "Authenticated but not allowed", "User lacks permission"],
                ["404 Not Found", "Resource does not exist", "GET/PUT/DELETE of unknown ID"],
                ["409 Conflict", "Conflict with current state", "Duplicate email, version conflict"],
                ["422 Unprocessable Entity", "Valid JSON but semantic errors", "Business rule violations"],
                ["500 Internal Server Error", "Server bug", "Unhandled exceptions"],
            ]
        ),

        heading("Statelessness"],

            text(
                "A REST server does not store any client session between requests. If the client needs to be authenticated, it sends credentials (typically a token) with every request, usually in the Authorization header. This makes the server easier to scale horizontally — any server instance can handle any request because there is no in-memory session to stick to."
            ),

            heading("Idempotency Recap for REST"],

                table(
                    ["Method", "Idempotent?", "Safe?", "Notes"],
                    [
                        ["GET", "Yes", "Yes (read-only)", "Must not change server state"],
                        ["POST", "No", "No", "Each call may create a new resource"],
                        ["PUT", "Yes", "No", "Repeating the same PUT yields the same state"],
                        ["PATCH", "No (usually)", "No", "Depends on the patch semantics"],
                        ["DELETE", "Yes", "No", "Deleting an already-deleted resource is still 'gone'"],
                    ]
                ),

                heading("REST versus SOAP versus GraphQL (Brief)"],

                    table(
                        ["Aspect", "REST", "SOAP", "GraphQL"],
                        [
                            ["Style", "Architectural style over HTTP", "XML protocol with strict contract", "Query language for APIs"],
                            ["Data format", "Usually JSON", "XML only", "JSON"],
                            ["Endpoints", "Many (one per resource)", "One (the service URL)", "One (the /graphql endpoint)"],
                            ["Client control", "Server decides the shape", "Server decides the shape", "Client specifies exactly the fields it needs"],
                            ["Complexity", "Simple, widely known", "Heavy, enterprise", "Flexible, extra setup"],
                        ]
                    ),

                    heading("Express REST Example (CRUD)"],

                        code(
                            `const express = require("express");
const app = express();
app.use(express.json());

let students = [
    { id: 1, name: "Rahul", marks: 85 },
    { id: 2, name: "Priya", marks: 92 },
];

// GET /students
app.get("/students", (req, res) => res.json(students));

// GET /students/:id
app.get("/students/:id", (req, res) => {
    const s = students.find(s => s.id === Number(req.params.id));
    if (!s) return res.status(404).json({ error: "Student not found" });
    res.json(s);
});

// POST /students
app.post("/students", (req, res) => {
    const { name, marks } = req.body;
    if (!name) return res.status(400).json({ error: "Name is required" });
    const s = { id: Date.now(), name, marks };
    students.push(s);
    res.status(201).json(s);
});

// PUT /students/:id
app.put("/students/:id", (req, res) => {
    const index = students.findIndex(s => s.id === Number(req.params.id));
    if (index === -1) return res.status(404).json({ error: "Not found" });
    students[index] = { id: students[index].id, ...req.body };
    res.json(students[index]);
});

// DELETE /students/:id
app.delete("/students/:id", (req, res) => {
    const index = students.findIndex(s => s.id === Number(req.params.id));
    if (index === -1) return res.status(404).json({ error: "Not found" });
    students.splice(index, 1);
    res.status(204).send();
});

app.listen(3000);`,
                            "javascript",
                            "Full REST CRUD in Express"
                        ),

                        note(
                            "REST URLs should never contain verbs. The HTTP method is the verb; the URL is the noun. /students/42 with DELETE already means 'delete student 42' — you do not need /deleteStudent/42. Similarly, prefer 201 after POST and 204 after DELETE with no body.",
                            "exam",
                            "Frequently Asked"
                        ),

                        keyPoints([
                            "REST is an architectural style: client-server, stateless, cacheable, uniform interface.",
                            "Resources are nouns at URLs; HTTP methods are the verbs (GET, POST, PUT, PATCH, DELETE).",
                            "Use proper status codes: 200, 201, 204 for success; 400, 401, 403, 404 for client errors; 500 for server errors.",
                            "REST is stateless — every request carries its own authentication (e.g., a token).",
                            "Good URL design: plural nouns, no verbs, path for identity, query string for filters.",
                        ]),
  ],

{
    summary:
    "Master REST constraints, resource URL design, HTTP methods mapped to CRUD, status codes, statelessness and a full Express CRUD example.",
        minutes: 13,
            tags: ["web", "rest", "api", "http", "crud", "important"],

                mcqs: [
                    mcq(
                        "REST was defined by:",
                        ["Tim Berners-Lee", "Roy Fielding", "Ryan Dahl", "Brendan Eich"],
                        1,
                        "Roy Fielding defined REST in his 2000 doctoral dissertation."
                    ),
                    mcq(
                        "A RESTful API is stateless, meaning:",
                        ["It never stores data", "Each request contains all information; the server stores no client session", "It only uses GET", "It cannot use JSON"],
                        1,
                        "Statelessness means the server does not keep client session state between requests."
                    ),
                    mcq(
                        "The correct URL to get student 42 is:",
                        ["/getStudent/42", "/students/42", "/student?action=get&id=42", "/api/get-student-42"],
                        1,
                        "REST uses nouns and path parameters: GET /students/42."
                    ),
                    mcq(
                        "After successfully creating a resource with POST, the typical status is:",
                        ["200 OK", "201 Created", "204 No Content", "302 Found"],
                        1,
                        "201 Created indicates a new resource was created; often with a Location header."
                    ),
                    mcq(
                        "Which method is NOT idempotent?",
                        ["GET", "PUT", "POST", "DELETE"],
                        2,
                        "POST is not idempotent — two identical POSTs may create two resources."
                    ),
                    mcq(
                        "401 Unauthorized means:",
                        ["The resource does not exist", "The client is not authenticated", "The client is authenticated but forbidden", "The server crashed"],
                        1,
                        "401 means missing or invalid authentication. 403 means authenticated but not permitted."
                    ),
                ],

                    questions: [
                        qa(
                            "What is REST? Explain its main constraints.",
                            "REST (Representational State Transfer) is an architectural style for networked applications defined by Roy Fielding in 2000. A RESTful API exposes resources at URLs and manipulates them with standard HTTP methods, usually exchanging JSON. The main constraints are: Client-Server — the UI is separated from data storage so they can evolve independently. Stateless — each request contains all information needed; the server does not store client session. Cacheable — responses indicate whether they may be cached. Uniform Interface — resources have URLs, are manipulated via representations, messages are self-descriptive, and optionally HATEOAS. Layered System — intermediaries (proxies, CDNs) can sit between client and server transparently. Code on Demand is optional. These constraints make APIs scalable, simple and interoperable.",
                            5
                        ),
                        qa(
                            "Explain REST URL design and how HTTP methods map to CRUD operations.",
                            "REST URLs identify resources using plural nouns, not verbs: /students, /students/42, /courses/3/students. Path parameters identify a specific resource; query parameters filter, sort and paginate (/students?course=IT&page=2). CRUD maps to HTTP as follows: Create is POST /students with a JSON body, returning 201 Created. Read is GET /students (collection) or GET /students/42 (one item), returning 200 OK. Update is PUT /students/42 (full replace, idempotent) or PATCH /students/42 (partial, not necessarily idempotent), returning 200. Delete is DELETE /students/42, returning 204 No Content. The HTTP method is the verb; the URL should never contain verbs like /getStudents or /deleteStudent.",
                            5
                        ),
                        qa(
                            "Explain the important HTTP status codes used in REST APIs.",
                            "Success codes include 200 OK for successful GET/PUT/PATCH with a body, 201 Created for a successful POST that made a new resource (often with a Location header), and 204 No Content for a successful DELETE or a PUT that returns no body. Client error codes include 400 Bad Request for malformed JSON or failed validation, 401 Unauthorized for missing or invalid authentication, 403 Forbidden for an authenticated user who lacks permission, 404 Not Found when the resource ID does not exist, and 409 Conflict for duplicates or version clashes. 422 Unprocessable Entity is sometimes used for semantically invalid but well-formed data. 500 Internal Server Error indicates an unhandled server bug. Using accurate codes lets clients handle outcomes without parsing message strings.",
                            5
                        ),
                    ],
  }
);

/* =========================================================
   TOPIC 5 — Connecting to a Database from Node.js
========================================================= */

const nodeDatabase = createTopic(
    "connecting-to-a-database-from-nodejs",
    "Connecting to a Database from Node.js",

    [
        text(
            "Almost every real server-side application persists data in a database. From Node.js you can use relational databases (MySQL, PostgreSQL) via drivers or ORMs, or document databases (MongoDB) via the native driver or Mongoose. This topic covers the patterns you need: connecting, querying, preventing SQL injection and using environment variables for secrets."
        ),

        heading("Environment Variables"),

        definition(
            "Environment Variable",
            "A value stored outside the source code (in the OS environment or a .env file) used for configuration and secrets such as database passwords, API keys and ports. This keeps secrets out of Git."
        ),

        code(
            `// .env  (never commit this file)
PORT=3000
DATABASE_URL=mongodb://localhost:27017/mscit
JWT_SECRET=super-secret-key

// Load with the dotenv package
require("dotenv").config();

const port = process.env.PORT || 3000;
const dbUrl = process.env.DATABASE_URL;`,
            "javascript",
            "Environment variables with dotenv"
        ),

        heading("SQL Injection and Parameterised Queries"],

    definition(
        "SQL Injection",
        "An attack where the user sends malicious SQL as input that gets concatenated into a query, allowing them to read, modify or delete data. Always use parameterised queries (placeholders) instead of string concatenation."
    ),

    code(
        `// DANGEROUS — never concatenate user input
const id = req.params.id;  // user sends: 1 OR 1=1
const sql = "SELECT * FROM students WHERE id = " + id;
// Becomes: SELECT * FROM students WHERE id = 1 OR 1=1  → returns ALL rows

// SAFE — parameterised query (mysql2)
const [rows] = await db.execute(
    "SELECT * FROM students WHERE id = ?",
    [id]
);

// SAFE — named parameters (pg)
const result = await db.query(
    "SELECT * FROM students WHERE id = $1",
    [id]
);`,
        "javascript",
        "Preventing SQL injection"
    ),

    heading("Using MySQL with mysql2 (Promises)"],

        code(
            `const mysql = require("mysql2/promise");

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
});

// GET /students
app.get("/students", async (req, res) => {
    try {
        const [rows] = await pool.execute("SELECT * FROM students");
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: "Database error" });
    }
});

// POST /students
app.post("/students", async (req, res) => {
    const { name, marks } = req.body;
    try {
        const [result] = await pool.execute(
            "INSERT INTO students (name, marks) VALUES (?, ?)",
            [name, marks]
        );
        res.status(201).json({ id: result.insertId, name, marks });
    } catch (err) {
        res.status(500).json({ error: "Database error" });
    }
});`,
            "javascript",
            "MySQL with mysql2"
        ),

        heading("Using MongoDB with Mongoose"],

            definition(
                "Mongoose",
                "An Object Data Modeling (ODM) library for MongoDB and Node.js. It provides schemas, validation, middleware and a straightforward API for CRUD operations on documents."
            ),

            code(
                `const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL);

const studentSchema = new mongoose.Schema({
    name:  { type: String, required: true, trim: true },
    marks: { type: Number, min: 0, max: 100 },
    course: { type: String, default: "MSc IT" },
}, { timestamps: true });

const Student = mongoose.model("Student", studentSchema);

// GET /students
app.get("/students", async (req, res) => {
    const students = await Student.find();
    res.json(students);
});

// GET /students/:id
app.get("/students/:id", async (req, res) => {
    const student = await Student.findById(req.params.id);
    if (!student) return res.status(404).json({ error: "Not found" });
    res.json(student);
});

// POST /students
app.post("/students", async (req, res) => {
    try {
        const student = await Student.create(req.body);
        res.status(201).json(student);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// PATCH /students/:id
app.patch("/students/:id", async (req, res) => {
    const student = await Student.findByIdAndUpdate(
        req.params.id, req.body, { new: true, runValidators: true }
    );
    if (!student) return res.status(404).json({ error: "Not found" });
    res.json(student);
});

// DELETE /students/:id
app.delete("/students/:id", async (req, res) => {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) return res.status(404).json({ error: "Not found" });
    res.status(204).send();
});`,
                "javascript",
                "MongoDB with Mongoose"
            ),

            heading("SQL versus NoSQL from Node.js"],

                table(
                    ["Aspect", "SQL (MySQL / PostgreSQL)", "NoSQL (MongoDB)"],
                    [
                        ["Data model", "Tables, rows, columns, relations", "Collections of JSON-like documents"],
                        ["Schema", "Fixed, enforced by the database", "Flexible; Mongoose can enforce one"],
                        ["Joins", "Native JOIN", "Manual (populate in Mongoose) or denormalise"],
                        ["Node library", "mysql2, pg, Sequelize (ORM)", "mongodb, mongoose (ODM)"],
                        ["Best for", "Structured, relational data", "Flexible, document-shaped, rapid iteration"],
                    ]
                ),

                heading("Async Error Handling Pattern"],

                    code(
                        `// Wrapper to catch errors in async route handlers
const asyncHandler = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};

app.get("/students", asyncHandler(async (req, res) => {
    const students = await Student.find();
    res.json(students);
}));

// Central error middleware
app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.status || 500).json({ error: err.message });
});`,
                        "javascript",
                        "Async error handling"
                    ),

                    heading("Security Checklist for Server-Side Apps"],

                        list([
                            "Never commit .env or secrets; use environment variables.",
                            "Always use parameterised queries — never concatenate SQL.",
                            "Validate and sanitise all user input (express-validator, Joi, Mongoose schemas).",
                            "Hash passwords with bcrypt (never store plaintext).",
                            "Use HTTPS in production.",
                            "Set security headers with helmet.",
                            "Enable CORS only for trusted origins.",
                            "Rate-limit authentication endpoints to slow brute-force attacks.",
                        ], true),

                        note(
                            "A connection pool (mysql2.createPool, mongoose.connect) reuses database connections instead of opening a new one per request. This is essential for performance. Never create a new connection inside a route handler.",
                            "tip",
                            "Connection Pooling"
                        ),

                        keyPoints([
                            "Store secrets in environment variables (.env + dotenv); never commit them.",
                            "Always use parameterised queries to prevent SQL injection.",
                            "mysql2 (SQL) and mongoose (MongoDB) are the common Node.js database libraries.",
                            "Use a connection pool; wrap async routes so errors reach error middleware.",
                            "Validate input, hash passwords, use helmet and HTTPS in production.",
                        ]),
  ],

{
    summary:
    "Learn environment variables, SQL injection prevention, mysql2, Mongoose CRUD, SQL vs NoSQL and a security checklist.",
        minutes: 13,
            tags: ["web", "database", "mongoose", "mysql", "sql-injection", "security", "important"],

                mcqs: [
                    mcq(
                        "SQL injection is prevented by:",
                        ["Using GET instead of POST", "Parameterised queries (placeholders)", "Encrypting the database", "Using MongoDB only"],
                        1,
                        "Parameterised queries send SQL and data separately so input cannot change the query structure."
                    ),
                    mcq(
                        "The .env file should be:",
                        ["Committed to Git", "Listed in .gitignore and never committed", "Sent to the client", "Named package.json"],
                        1,
                        ".env contains secrets and must not be committed; .gitignore should include it."
                    ),
                    mcq(
                        "Mongoose is:",
                        ["A SQL database", "An ODM for MongoDB", "An Express middleware", "A front-end framework"],
                        1,
                        "Mongoose is an Object Data Modeling library for MongoDB in Node.js."
                    ),
                    mcq(
                        "A database connection pool is used to:",
                        ["Encrypt connections", "Reuse connections instead of opening one per request", "Backup the database", "Parse JSON"],
                        1,
                        "Pooling reuses a set of open connections, which is far faster than connecting per request."
                    ),
                    mcq(
                        "Passwords should be stored as:",
                        ["Plain text", "Encrypted (reversible)", "Hashed with bcrypt (one-way)", "In a cookie"],
                        2,
                        "Passwords must be hashed with a slow one-way function like bcrypt so they cannot be reversed."
                    ),
                ],

                    questions: [
                        qa(
                            "What is SQL injection and how do you prevent it in Node.js?",
                            "SQL injection is an attack where the user submits malicious SQL as input that is concatenated into a query string, changing the query's meaning. For example, concatenating req.params.id when the user sends '1 OR 1=1' produces SELECT * FROM students WHERE id = 1 OR 1=1, which returns every row. Attackers can also use this to dump tables, modify data or drop databases. Prevention is straightforward: never concatenate user input into SQL. Use parameterised queries where the SQL contains placeholders (?, $1) and the values are passed as a separate array. The driver sends them separately so the database treats values as data, not as SQL. mysql2 uses ? placeholders; pg uses $1, $2. ORMs and ODMs (Sequelize, Mongoose) parameterise by default if you use their APIs rather than raw concatenated strings.",
                            5
                        ),
                        qa(
                            "Explain how to perform CRUD operations with Mongoose.",
                            "First define a schema and compile a model: const studentSchema = new mongoose.Schema({ name: { type: String, required: true }, marks: Number }); const Student = mongoose.model('Student', studentSchema). Create: Student.create(req.body) or new Student(data).save(), which validates against the schema. Read: Student.find() for all documents, Student.findById(id) for one, Student.find({ course: 'IT' }) for filtered queries. Update: Student.findByIdAndUpdate(id, req.body, { new: true, runValidators: true }) returns the updated document when new: true. Delete: Student.findByIdAndDelete(id). All of these return Promises so you use async/await in Express handlers. If findById returns null, respond with 404. Schema validation errors should be caught and returned as 400. timestamps: true on the schema automatically adds createdAt and updatedAt.",
                            5
                        ),
                        qa(
                            "List five security practices for a Node.js/Express API.",
                            "First, never store secrets in source code; use environment variables loaded from a .env file that is gitignored. Second, always use parameterised queries or ODM APIs to prevent SQL/NoSQL injection. Third, hash passwords with bcrypt (or argon2) and never store or log plaintext passwords. Fourth, validate and sanitise all input with a library such as Joi or express-validator and with schema validation (Mongoose). Fifth, use helmet to set security HTTP headers, enable HTTPS in production, restrict CORS to trusted origins, and rate-limit login endpoints to slow brute-force attacks. Additionally, handle errors in a central middleware so stack traces are not leaked to clients in production, and keep dependencies updated to patch known vulnerabilities (npm audit).",
                            5
                        ),
                    ],
  }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit3Topics = [
    introToServerSideAndNode,
    npmAndModules,
    expressJs,
    restApis,
    nodeDatabase,
];