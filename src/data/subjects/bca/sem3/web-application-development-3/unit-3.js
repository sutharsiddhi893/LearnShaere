/* =========================================================
   BCA • SEM 3 • Web Application Development - III
   UNIT 3 — Asynchronous JavaScript, Fetch and JSON
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
   TOPIC 1 — Why JS is Asynchronous
========================================================= */

const asyncIntro = createTopic(
    "asynchronous-javascript",
    "Why JavaScript is Asynchronous",

    [
        definition(
            "Asynchronous code",
            "Code that starts a slow task (timer, network, file) and continues running other work. When the task finishes, a callback, promise or await continues from there."
        ),

        text(
            "JavaScript in the browser has one main thread. If you wait for a 2-second network call by blocking, the page freezes: no clicks, no typing. Timers and fetch are therefore asynchronous."
        ),

        heading("Timers"),

        code(
            `console.log("A");

setTimeout(() => {
  console.log("B — after 1 second");
}, 1000);

console.log("C");
// Order: A, C, then B`,
            "javascript",
            "setTimeout is non-blocking"
        ),

        table(
            ["API", "Meaning"],
            [
                ["setTimeout(fn, ms)", "Run fn once after ms milliseconds"],
                ["setInterval(fn, ms)", "Run fn repeatedly every ms"],
                ["clearTimeout(id) / clearInterval(id)", "Cancel a timer"],
            ]
        ),

        heading("Callback hell (why we moved on)"),

        code(
            `// Hard to read when many steps nest
loadUser(id, (user) => {
  loadPosts(user.id, (posts) => {
    loadComments(posts[0].id, (comments) => {
      render(comments);
    });
  });
});`,
            "javascript",
            "Nested callbacks"
        ),

        keyPoints([
            "The main thread must stay free so the UI can respond.",
            "setTimeout does not pause the rest of the script.",
            "Deeply nested callbacks are hard to maintain; Promises and async/await fix that.",
        ]),
    ],

    {
        summary:
            "Understand the single thread, timers, and why callbacks become hard to manage.",
        minutes: 9,
        tags: ["async", "timers", "javascript"],

        mcqs: [
            mcq(
                "What is printed first after console.log('A'); setTimeout(() => console.log('B'), 0); console.log('C');",
                ["B then A then C", "A then B then C", "A then C then B", "B then C then A"],
                2,
                "The timeout callback runs after the current script finishes, even if the delay is 0."
            ),
            mcq(
                "setInterval(fn, 1000) runs fn:",
                ["Once after 1 second", "Every 1 second until cleared", "Only when the tab is closed", "Synchronously in a loop"],
                1,
                "It repeats until clearInterval is called."
            ),
        ],

        questions: [
            qa(
                "Why must long tasks in the browser be asynchronous?",
                "The browser uses one main JavaScript thread for running scripts and updating the UI. A long blocking wait would freeze clicks and painting. Asynchronous APIs start the wait and return immediately, then run a callback or resume an async function when the result is ready.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — Promises and async / await
========================================================= */

const promisesAsync = createTopic(
    "promises-async-await",
    "Promises and async / await",

    [
        definition(
            "Promise",
            "An object that represents a value that will be available later. It is pending, then either fulfilled (resolved) or rejected."
        ),

        code(
            `const wait = (ms) =>
  new Promise((resolve) => setTimeout(resolve, ms),;

wait(500)
  .then(() => console.log("done"),
  .catch((err) => console.error(err),
  .finally(() => console.log("always runs"),;`,
            "javascript",
            "then / catch / finally"
        ),

        heading("async / await"),

        text(
            "An async function always returns a Promise. await pauses that function (not the whole page) until the Promise settles."
        ),

        code(
            `async function load() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
    if (!res.ok) throw new Error("HTTP " + res.status);
    const user = await res.json();
    console.log(user.name);
  } catch (err) {
    console.error("Failed:", err.message);
  }
}

load();`,
            "javascript",
            "async/await with try/catch"
        ),

        table(
            ["Style", "Notes"],
            [
                [".then()", "Chaining; can get nested if not careful"],
                ["async/await", "Reads like synchronous code; use try/catch"],
                ["Promise.all", "Wait for many tasks in parallel"],
                ["Promise.race", "Use the first one that finishes"],
            ]
        ),

        code(
            `const [users, posts] = await Promise.all([
  fetch("/api/users").then((r) => r.json(),
  fetch("/api/posts").then((r) => r.json(),
]);`,
            "javascript",
            "Parallel requests"
        ),

        keyPoints([
            "Promises have three states: pending, fulfilled, rejected.",
            "await only works inside async functions (or at the top level of a module).",
            "Always handle errors with catch or try/catch.",
            "Promise.all runs independent requests together.",
        ]),
    ],

    {
        summary:
            "Use Promises and async/await, handle errors, and run independent requests in parallel.",
        minutes: 12,
        tags: ["promises", "async-await", "javascript", "important"],

        mcqs: [
            mcq(
                "An async function always returns:",
                ["undefined", "A Promise", "A string", "A thread"],
                1,
                "Even if you return a plain value, it is wrapped in a Promise."
            ),
            mcq(
                "Promise.all rejects when:",
                ["Any input promise rejects", "All succeed", "The first one succeeds", "The timer ends"],
                0,
                "One rejection rejects the whole all() unless you handle each item."
            ),
        ],

        questions: [
            qa(
                "Explain Promise states and how async/await uses them.",
                "A Promise starts pending. If the work succeeds it is fulfilled with a value; if it fails it is rejected with a reason. await pauses the async function until the Promise is no longer pending, then returns the value or throws, which try/catch can handle. The rest of the page stays responsive.",
                4
            ),
            qa(
                "When would you use Promise.all?",
                "When several independent async tasks can run at the same time, such as fetching users and posts together. Promise.all waits until every promise fulfills and returns an array of results. If any request fails, the combined promise rejects.",
                3
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — JSON
========================================================= */

const jsonTopic = createTopic(
    "json",
    "JSON",

    [
        definition(
            "JSON (JavaScript Object Notation)",
            "A text format for data exchange. It looks like a subset of JavaScript object syntax and is the usual format for REST APIs."
        ),

        heading("JSON vs JavaScript object"),

        table(
            ["JSON", "JavaScript object"],
            [
                ["Keys must be in double quotes", "Keys may be unquoted if valid names"],
                ["No functions, no undefined, no comments", "Can hold methods and any type"],
                ["A string you send over the network", "A live value in memory"],
            ]
        ),

        code(
            `const student = { roll: 101, name: "Amit", active: true };

const text = JSON.stringify(student, null, 2);
// '{"roll":101,"name":"Amit","active":true}'

const back = JSON.parse(text);
console.log(back.name); // Amit

try {
  JSON.parse("{ bad }");
} catch (e) {
  console.log("Invalid JSON");
}`,
            "javascript",
            "stringify and parse"
        ),

        output(
            `{
  "roll": 101,
  "name": "Amit",
  "active": true
}`
        ),

        keyPoints([
            "JSON.stringify turns a value into a string for storage or HTTP.",
            "JSON.parse turns a string back into a value; wrap it in try/catch.",
            "Valid JSON uses double quotes and cannot contain functions.",
        ]),
    ],

    {
        summary: "Read and write JSON with JSON.parse and JSON.stringify.",
        minutes: 8,
        tags: ["json", "javascript", "important"],

        mcqs: [
            mcq(
                "JSON.parse is used to:",
                ["Turn an object into a string", "Turn a JSON string into a value", "Send a form", "Create a cookie"],
                1,
                "parse deserialises text into objects/arrays."
            ),
            mcq(
                "Which is valid JSON?",
                ["{name: 'Amit'}", "{\"name\":\"Amit\"}", "{name:Amit}", "{'name':'Amit'}"],
                1,
                "JSON requires double-quoted keys and strings."
            ),
        ],

        questions: [
            qa(
                "Differentiate between a JavaScript object and a JSON string. How do you convert between them?",
                "A JavaScript object lives in memory and can hold methods. JSON is a text format used to send or store data. JSON.stringify(obj) produces a string. JSON.parse(text) rebuilds the value. Invalid text throws, so parse should sit in try/catch.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — Fetch API and AJAX
========================================================= */

const fetchApi = createTopic(
    "fetch-api-and-ajax",
    "Fetch API and AJAX",

    [
        definition(
            "AJAX",
            "Asynchronous JavaScript and XML. Historically used XMLHttpRequest and often XML; today we use the Fetch API and JSON, but the idea is the same: update part of a page without a full reload."
        ),

        heading("GET request"),

        code(
            `async function loadUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) throw new Error("Failed: " + res.status);
  const users = await res.json();

  const ul = document.querySelector("#users");
  ul.innerHTML = "";
  users.forEach((u) => {
    const li = document.createElement("li");
    li.textContent = \`\${u.name} — \${u.email}\`;
    ul.append(li);
  });
}`,
            "javascript",
            "GET + render list"
        ),

        heading("POST request"),

        code(
            `async function createPost(title, body) {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, body, userId: 1 }),
  });
  const created = await res.json();
  return created;
}`,
            "javascript",
            "POST JSON"
        ),

        heading("Fetch vs old XMLHttpRequest"),

        table(
            ["Point", "XMLHttpRequest", "fetch"],
            [
                ["Style", "Callbacks / events", "Promises / async-await"],
                ["Readable", "Verbose", "Short"],
                ["JSON", "responseText + JSON.parse", "res.json()"],
                ["HTTP errors", "Must check status", "Must still check res.ok (fetch only rejects on network failure)"],
            ]
        ),

        note(
            "fetch does not throw on 404 or 500. It only rejects on network failure. Always check res.ok or res.status.",
            "warning",
            "Exam favourite"
        ),

        heading("Loading and error UI"),

        steps([
            "Show a \"Loading…\" message",
            "await fetch and res.json()",
            "On success, render the data",
            "On failure, show a friendly error",
            "Clear the loading state in finally",
        ]),

        keyPoints([
            "AJAX / fetch updates the page without reloading.",
            "GET reads data; POST/PUT/PATCH/DELETE change data.",
            "Send JSON with Content-Type application/json and JSON.stringify.",
            "Check res.ok; fetch success does not mean HTTP success.",
        ]),
    ],

    {
        summary:
            "Call REST APIs with fetch, send JSON, handle HTTP errors, and update the DOM without reload.",
        minutes: 13,
        tags: ["fetch", "ajax", "api", "javascript", "important"],

        mcqs: [
            mcq(
                "fetch rejects the promise when:",
                ["The status is 404", "The status is 500", "The network request fails", "JSON is large"],
                2,
                "HTTP error statuses still resolve; you must check res.ok."
            ),
            mcq(
                "To send a JS object as JSON you should:",
                [
                    "Pass the object as body directly",
                    "JSON.stringify the object and set Content-Type to application/json",
                    "Use innerHTML",
                    "Put it in the URL only",
                ],
                1,
                "The body must be a string; the header tells the server it is JSON."
            ),
        ],

        questions: [
            qa(
                "What is AJAX? How does the Fetch API implement it?",
                "AJAX means talking to a server in the background and updating part of the page without a full reload. The Fetch API returns a Promise for an HTTP response. You await fetch(url), check res.ok, await res.json(), then change the DOM. That is modern AJAX using JSON instead of XML.",
                4
            ),
            qa(
                "Write the steps of a GET request that lists users in a ul.",
                "Select the ul and show Loading. await fetch(url). If !res.ok, throw. await res.json() to get an array. Clear the ul. For each user, create an li, set textContent to name and email, append it. In catch, show an error message. In finally, hide Loading.",
                5
            ),
        ],
    }
);

export const unit3Topics = [
    asyncIntro,
    promisesAsync,
    jsonTopic,
    fetchApi,
];
