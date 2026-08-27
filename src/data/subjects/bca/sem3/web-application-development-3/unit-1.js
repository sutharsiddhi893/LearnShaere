/* =========================================================
   BCA • SEM 3 • Web Application Development - III
   UNIT 1 — JavaScript Fundamentals & ES6+
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
   TOPIC 1 — How JavaScript Runs in the Browser
========================================================= */

const jsInBrowser = createTopic(
    "javascript-in-the-browser",
    "How JavaScript Runs in the Browser",

    [
        definition(
            "JavaScript",
            "A high-level, interpreted language that runs in the browser and makes web pages interactive. The browser engine (V8 in Chrome, SpiderMonkey in Firefox) executes JS after the HTML is parsed."
        ),

        text(
            "HTML structures the page, CSS styles it, and JavaScript controls behaviour: clicks, form checks, API calls, and dynamic updates. Unlike PHP, JavaScript in this subject runs on the client (the user's browser), not on the server."
        ),

        heading("Adding JavaScript to a Page"),

        table(
            ["Method", "Example", "When to use"],
            [
                ["Inline", `<button onclick="alert('Hi')">Click</button>`, "Tiny demos only; avoid in real apps"],
                ["Internal", `<script>console.log('Hi');</script>`, "Small single-page examples"],
                ["External", `<script src="app.js"></script>`, "Best practice for real projects"],
            ]
        ),

        code(
            `<!-- index.html -->
<!DOCTYPE html>
<html>
<head>
  <title>WAD-III</title>
</head>
<body>
  <h1 id="title">Welcome</h1>
  <!-- defer waits for HTML to parse, then runs JS -->
  <script src="app.js" defer></script>
</body>
</html>`,
            "html",
            "Linking an external JS file"
        ),

        heading("Where the script tag should go"),

        list([
            "At the end of `<body>` so HTML exists before JS runs.",
            "Or in `<head>` with the `defer` attribute (recommended).",
            "`async` downloads in parallel and runs as soon as ready (order not guaranteed).",
        ]),

        note(
            "If you select an element before the HTML is parsed, you get null. Use defer, DOMContentLoaded, or place the script at the bottom of the body.",
            "warning",
            "Common Mistake"
        ),

        heading("Developer Tools"),

        steps([
            "Open the page in Chrome / Edge / Firefox",
            "Press F12 or right-click → Inspect",
            "Use Console to run JS and see errors",
            "Use Elements to inspect the DOM",
            "Use Network to watch fetch/XHR requests",
        ]),

        keyPoints([
            "JavaScript in this paper is client-side: it runs in the browser.",
            "Prefer an external .js file with defer.",
            "The Console is the first place to debug errors.",
            "HTML must exist before you query it with getElementById / querySelector.",
        ]),
    ],

    {
        summary:
            "Understand how the browser loads and runs JavaScript, script placement, defer vs async, and DevTools.",
        minutes: 9,
        tags: ["javascript", "browser", "script", "important"],

        mcqs: [
            mcq(
                "Where does client-side JavaScript execute?",
                ["On the web server", "In the database", "In the user's browser", "Only in Node.js"],
                2,
                "Client-side JS is executed by the browser engine."
            ),
            mcq(
                "Which attribute waits for HTML parsing to finish before running the script?",
                ["async", "defer", "type", "nomodule"],
                1,
                "defer downloads the file in parallel and runs it after the document is parsed."
            ),
            mcq(
                "What is the best way to include JS in a real project?",
                ["Inline onclick only", "A large <script> in the head without defer", "An external .js file", "Inside a CSS file"],
                2,
                "External files are cacheable, reusable and easier to maintain."
            ),
        ],

        questions: [
            qa(
                "Explain how a browser loads and runs an external JavaScript file.",
                "The browser parses HTML. When it finds <script src=\"app.js\" defer>, it downloads app.js in parallel. After the document is fully parsed, the engine executes the script. The script can then read the DOM, attach events and update the page. The user never sees the JS source as the page content; they see the resulting HTML/CSS.",
                4
            ),
            qa(
                "Differentiate between placing a script at the end of body, using defer, and using async.",
                "A script at the end of body runs after the HTML above it exists. defer also waits until parsing is done and preserves order of multiple deferred files. async downloads in parallel and runs as soon as the file is ready, so order is not guaranteed and the DOM may not be complete. Use defer for application code; async is mainly for independent third-party scripts.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — Variables, Types and Operators
========================================================= */

const variablesAndTypes = createTopic(
    "variables-types-operators",
    "Variables, Types and Operators",

    [
        heading("let, const and var"),

        table(
            ["Keyword", "Scope", "Reassign", "Hoisting behaviour"],
            [
                ["let", "Block { }", "Yes", "Temporal Dead Zone until declaration"],
                ["const", "Block { }", "No (binding is fixed)", "Same TDZ as let"],
                ["var", "Function / global", "Yes", "Hoisted and initialised as undefined"],
            ]
        ),

        code(
            `const course = "BCA";   // cannot reassign
let semester = 3;        // can reassign
semester = 4;

if (true) {
  let score = 90;
  var oldStyle = 80;
}
// score is not visible here
console.log(oldStyle);   // 80 — var leaks out of the block`,
            "javascript",
            "let vs const vs var"
        ),

        note(
            "Use const by default. Use let only when the value must change. Avoid var in modern code.",
            "tip",
            "Best Practice"
        ),

        heading("Data Types"),

        table(
            ["Kind", "Types", "Examples"],
            [
                ["Primitive", "string, number, boolean, null, undefined, symbol, bigint", `"BCA", 42, true, null`],
                ["Reference", "object, array, function, date", `{name:"Amit"}, [1,2,3]`],
            ]
        ),

        heading("typeof and equality"),

        code(
            `console.log(typeof "BCA");     // "string"
console.log(typeof 10);        // "number"
console.log(typeof true);      // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null);      // "object"  (historic bug)
console.log(typeof []);        // "object"
console.log(typeof {});        // "object"

console.log(5 == "5");   // true  — converts types
console.log(5 === "5");  // false — value AND type
console.log(0 == false); // true
console.log(0 === false);// false`,
            "javascript",
            "typeof and == vs ==="
        ),

        heading("Template literals and operators"),

        code(
            `const name = "Priya";
const marks = 88;
const msg = \`Student \${name} scored \${marks}%\`;

const a = 10, b = 3;
console.log(a + b, a - b, a * b, a / b, a % b, a ** b);

const eligible = marks >= 40 && name.length > 0;
const status = eligible ? "Pass" : "Fail";`,
            "javascript",
            "Template strings and operators"
        ),

        keyPoints([
            "Prefer const, then let. Do not use var in new code.",
            "=== compares value and type; always prefer it over ==.",
            "typeof null is \"object\" — a well-known language quirk.",
            "Template literals use backticks with dollar-brace interpolation.",
        ]),
    ],

    {
        summary:
            "Master let/const/var, primitive vs reference types, typeof, strict equality and template literals.",
        minutes: 11,
        tags: ["javascript", "variables", "types", "important"],

        mcqs: [
            mcq(
                "Which keyword creates a block-scoped variable that cannot be reassigned?",
                ["var", "let", "const", "static"],
                2,
                "const is block-scoped and the binding cannot be reassigned."
            ),
            mcq(
                "What does 10 === \"10\" evaluate to?",
                ["true", "false", "undefined", "NaN"],
                1,
                "=== requires the same type; number 10 is not string \"10\"."
            ),
            mcq(
                "typeof null returns:",
                ["null", "undefined", "object", "boolean"],
                2,
                "A historic bug: typeof null is \"object\"."
            ),
            mcq(
                "Template literals are written with:",
                ["Single quotes", "Double quotes", "Backticks", "Hash quotes"],
                2,
                "Backticks allow ${} interpolation."
            ),
        ],

        questions: [
            qa(
                "Differentiate between let, const and var.",
                "let and const are block-scoped; var is function-scoped. const cannot be reassigned after declaration, let can. var is hoisted and initialised as undefined, which causes bugs. Modern JavaScript uses const by default and let when the value must change.",
                4
            ),
            qa(
                "Why should === be preferred over ==? Give an example.",
                "== converts types before comparing, so 5 == \"5\" and 0 == false are true. === compares both value and type, so 5 === \"5\" is false. Strict equality avoids surprising conversions and is the safe default in all new code.",
                3
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — Functions, Scope, Closures and this
========================================================= */

const functionsScope = createTopic(
    "functions-scope-closures",
    "Functions, Scope, Closures and this",

    [
        heading("Function forms"),

        code(
            `// Function declaration (hoisted)
function add(a, b) {
  return a + b;
}

// Function expression
const multiply = function (a, b) {
  return a * b;
};

// Arrow function (ES6)
const square = (n) => n * n;
const greet = (name = "Guest") => \`Hello, \${name}\`;

console.log(add(2, 3),;      // 5
console.log(square(6),;      // 36
console.log(greet(),;        // Hello, Guest`,
            "javascript",
            "Declaration, expression and arrow functions"
        ),

        heading("Arrow vs regular functions"),

        table(
            ["Point", "Regular function", "Arrow function"],
            [
                ["this", "Depends on how it is called", "Taken from surrounding (lexical) scope"],
                ["arguments object", "Available", "Not available"],
                ["Used as constructor", "Yes (new Fn(),", "No"],
                ["Hoisting", "Declarations are hoisted", "Not hoisted"],
            ]
        ),

        heading("Scope and hoisting"),

        text(
            "Scope is where a name can be seen. JavaScript has global scope, function scope and block scope. Inner functions can read outer variables. That is the basis of a closure."
        ),

        heading("Closures"),

        definition(
            "Closure",
            "A function that remembers and can use variables from the outer function even after the outer function has finished running."
        ),

        code(
            `function makeCounter() {
  let count = 0;              // private variable
  return function () {
    count += 1;
    return count;
  };
}

const next = makeCounter();
console.log(next(),; // 1
console.log(next(),; // 2
console.log(next(),; // 3
// count cannot be changed from outside`,
            "javascript",
            "A closure that keeps private state"
        ),

        heading("this in short"),

        list([
            "In a method: this is the object before the dot.",
            "In a regular function called alone: this is undefined in strict mode (or window in sloppy mode).",
            "In an arrow function: this is inherited from the outer scope.",
            "Use addEventListener with a regular function if you need this to be the element, or use event.currentTarget.",
        ]),

        keyPoints([
            "Arrow functions are shorter and keep lexical this.",
            "A closure lets a function keep private data after the parent returns.",
            "Default parameters avoid undefined when an argument is omitted.",
            "Never rely on var hoisting; declare before use.",
        ]),
    ],

    {
        summary:
            "Write functions in all forms, understand scope and hoisting, and use closures and lexical this correctly.",
        minutes: 12,
        tags: ["functions", "closures", "this", "es6", "important"],

        mcqs: [
            mcq(
                "A closure is:",
                [
                    "A function without a name",
                    "A function that remembers outer variables after the outer function returns",
                    "A loop that never ends",
                    "A CSS feature",
                ],
                1,
                "Closures capture the surrounding lexical environment."
            ),
            mcq(
                "Arrow functions get this from:",
                ["The object that calls them", "The global object always", "The surrounding lexical scope", "The first argument"],
                2,
                "Arrow functions do not bind their own this."
            ),
            mcq(
                "Which function form is hoisted completely?",
                ["Arrow function", "Function expression", "Function declaration", "Class method only"],
                2,
                "Function declarations can be called before they appear in the file."
            ),
        ],

        questions: [
            qa(
                "What is a closure? Explain with a short example.",
                "A closure is an inner function that keeps access to variables of its outer function after that outer function has returned. Example: makeCounter creates count = 0 and returns a function that increments count. Each call to the returned function still sees the same count, so you get 1, then 2, then 3. The variable is private because nothing outside can touch it.",
                5
            ),
            qa(
                "Differentiate between a regular function and an arrow function.",
                "A regular function has its own this (set by the caller) and an arguments object, and can be used with new. An arrow function is shorter, has no own this (it uses the outer this), has no arguments object, and cannot be a constructor. Use arrows for callbacks and regular functions for object methods when you need this to be the object.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — Arrays, Objects and ES6 Features
========================================================= */

const arraysObjectsEs6 = createTopic(
    "arrays-objects-es6",
    "Arrays, Objects and ES6 Features",

    [
        heading("Arrays and useful methods"),

        code(
            `const marks = [70, 85, 90, 60];

marks.push(88);          // add at end
marks.pop();             // remove last
console.log(marks.length);
console.log(marks.includes(90),; // true

const plusFive = marks.map((m) => m + 5);
const passed = marks.filter((m) => m >= 40);
const total = marks.reduce((sum, m) => sum + m, 0);
const firstFail = marks.find((m) => m < 40);

marks.forEach((m, i) => console.log(i, m),;`,
            "javascript",
            "map, filter, reduce, find, forEach"
        ),

        heading("Objects"),

        code(
            `const student = {
  roll: 101,
  name: "Amit",
  course: "BCA",
  greet() {
    return \`Hi, I am \${this.name}\`;
  },
};

console.log(student.name);
console.log(student["course"]);
student.city = "Surat";
delete student.city;

console.log(Object.keys(student),;
console.log(Object.values(student),;`,
            "javascript",
            "Object literals and access"
        ),

        heading("Destructuring, spread and rest"),

        code(
            `const [first, second, ...restMarks] = [70, 85, 90, 60];
const { name, roll } = student;

const copy = { ...student, semester: 3 };
const merged = [...marks, 100];

function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4),; // 10`,
            "javascript",
            "Destructuring, spread and rest"
        ),

        heading("Optional chaining and nullish coalescing"),

        code(
            `const city = student.address?.city;     // undefined, no error
const displayName = student.nick ?? "No nickname";`,
            "javascript",
            "?. and ??"
        ),

        table(
            ["Feature", "Meaning"],
            [
                ["map", "Build a new array by transforming each item"],
                ["filter", "Build a new array of items that pass a test"],
                ["reduce", "Fold the array into a single value"],
                ["spread ...", "Copy or merge arrays/objects"],
                ["rest ...", "Collect remaining items into an array"],
                ["?.", "Read a nested property only if it exists"],
                ["??", "Use the right side only if the left is null or undefined"],
            ]
        ),

        keyPoints([
            "Prefer map/filter/reduce over manual index loops when transforming data.",
            "Objects store named data; arrays store ordered lists.",
            "Spread copies; rest collects.",
            "?. and ?? make missing data safer to handle.",
        ]),
    ],

    {
        summary:
            "Work with arrays and objects using ES6 methods: map, filter, reduce, destructuring, spread, rest, ?. and ??.",
        minutes: 12,
        tags: ["arrays", "objects", "es6", "important"],

        mcqs: [
            mcq(
                "Which method creates a new array of items that pass a test?",
                ["map", "filter", "reduce", "forEach"],
                1,
                "filter keeps items for which the callback returns true."
            ),
            mcq(
                "What does the spread operator ... do with an array?",
                ["Deletes it", "Sorts it", "Expands its items into another array or call", "Freezes it"],
                2,
                "Spread expands elements, commonly used to copy or merge."
            ),
            mcq(
                "student.address?.city does not throw when address is missing because of:",
                ["map", "Optional chaining", "Hoisting", "Strict mode"],
                1,
                "?. stops and returns undefined if the left part is nullish."
            ),
        ],

        questions: [
            qa(
                "Explain map, filter and reduce with one example each.",
                "map transforms every item: [1,2,3].map(n => n*2) gives [2,4,6]. filter keeps some items: marks.filter(m => m >= 40) keeps passing marks. reduce combines items into one value: marks.reduce((s,m) => s+m, 0) gives the total. None of them change the original array.",
                5
            ),
            qa(
                "What are destructuring, spread and rest? Give short examples.",
                "Destructuring unpacks values: const {name, roll} = student and const [a,b] = arr. Spread copies or merges: const copy = {...student} or const all = [...a, ...b]. Rest collects leftover items: function sum(...nums) or const [first, ...rest] = arr.",
                4
            ),
        ],
    }
);

export const unit1Topics = [
    jsInBrowser,
    variablesAndTypes,
    functionsScope,
    arraysObjectsEs6,
];
