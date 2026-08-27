/* =========================================================
   MSc-IT • SEM 2 • Web Technology
   UNIT 2 — Client-Side Web Development
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
  keyPoints,
  mcq,
  qa,
} from "../../../../helpers";

/* =========================================================
   TOPIC 1 — Introduction to JavaScript
========================================================= */

const introToJavaScript = createTopic(
    "introduction-to-javascript",
    "Introduction to JavaScript",

    [
        definition(
            "JavaScript",
            "A high-level, interpreted, dynamically typed programming language that enables interactive and dynamic behaviour on web pages. It is one of the three core web technologies alongside HTML (structure) and CSS (presentation). JavaScript runs in the browser (client-side) and can also run on servers via Node.js."
        ),

        text(
            "JavaScript was created by Brendan Eich at Netscape in 1995 in just 10 days. It was originally called Mocha, then LiveScript, and finally JavaScript — a marketing name chosen to capitalise on Java's popularity, even though the two languages are fundamentally different. In 1997, it was standardised as ECMAScript (ECMA-262) by Ecma International."
        ),

        heading("History of JavaScript / ECMAScript"),

        table(
            ["Year", "Version", "Key Features"],
            [
                ["1995", "JavaScript 1.0", "Created by Brendan Eich at Netscape"],
                ["1997", "ES1 (ECMAScript 1)", "First official standard"],
                ["1999", "ES3", "Regular expressions, try-catch, better strings"],
                ["2009", "ES5", "Strict mode, JSON, Array methods (forEach, map, filter)"],
                ["2015", "ES6 / ES2015", "let/const, arrow functions, classes, modules, promises, template literals"],
                ["2016+", "ES2016–ES2024", "Annual releases: async/await, optional chaining, nullish coalescing"],
            ]
        ),

        heading("JavaScript versus Java"),

        table(
            ["Aspect", "JavaScript", "Java"],
            [
                ["Typing", "Dynamic (types determined at runtime)", "Static (types declared at compile time)"],
                ["Compilation", "Interpreted / JIT compiled", "Compiled to bytecode, then JIT"],
                ["Paradigm", "Multi-paradigm (OOP, functional, procedural)", "Primarily class-based OOP"],
                ["Inheritance", "Prototypal", "Classical (class-based)"],
                ["Platform", "Browsers, Node.js", "JVM (any platform with JVM)"],
                ["File extension", ".js", ".java"],
                ["Creator", "Brendan Eich (Netscape)", "James Gosling (Sun)"],
            ]
        ),

        heading("Adding JavaScript to HTML"),

        table(
            ["Method", "Syntax", "Use Case"],
            [
                ["Inline", "onclick=\"alert('Hi')\" on an HTML element", "Simple, one-off actions (avoid for complex logic)"],
                ["Internal", "<script> ... </script> in HTML", "Page-specific scripts"],
                ["External", "<script src=\"app.js\"></script>", "Best practice — reusable, cacheable, separate concerns"],
            ]
        ),

        code(
            `<!-- External (recommended) — place before </body> -->
<script src="app.js"></script>

<!-- Internal -->
<script>
    console.log("Hello from internal script");
</script>

<!-- Modern: type="module" for ES modules -->
<script type="module" src="app.js"></script>

<!-- defer: download in parallel, execute after HTML is parsed -->
<script src="app.js" defer></script>

<!-- async: download in parallel, execute as soon as ready -->
<script src="analytics.js" async></script>`,
            "html",
            "Adding JavaScript to HTML"
        ),

        heading("script Loading: defer versus async"),

        table(
            ["Attribute", "Download", "Execution", "Use For"],
            [
                ["(none)", "Blocks HTML parsing", "Immediately when downloaded", "Legacy; avoid"],
                ["defer", "Parallel (non-blocking)", "After HTML is fully parsed, in order", "Scripts that need the DOM"],
                ["async", "Parallel (non-blocking)", "As soon as downloaded (order not guaranteed)", "Independent scripts (analytics)"],
            ]
        ),

        heading("JavaScript Output Methods"),

        code(
            `// Browser console (for debugging)
console.log("Hello");
console.warn("Warning");
console.error("Error");
console.table([{name: "Rahul", marks: 85}]);

// Alert dialog
alert("Welcome!");

// Write to the document (overwrites if used after load)
document.write("Hello");

// Change an element's content
document.getElementById("demo").innerHTML = "Hello";
document.getElementById("demo").textContent = "Hello";`,
            "javascript",
            "JavaScript output methods"
        ),

        heading("Comments"),

        code(
            `// Single-line comment

/* Multi-line
   comment */

/**
 * JSDoc comment
 * @param {string} name - The user's name
 * @returns {string} A greeting
 */`,
            "javascript",
            "JavaScript comments"
        ),

        heading("Where JavaScript Runs"),

        list([
            "Web browsers — Chrome (V8), Firefox (SpiderMonkey), Safari (JavaScriptCore).",
            "Node.js — server-side JavaScript runtime built on Chrome's V8 engine.",
            "Deno / Bun — modern JavaScript runtimes.",
            "Embedded — IoT devices, desktop apps (Electron), mobile apps (React Native).",
        ]),

        note(
            "JavaScript and Java are completely different languages despite the similar names. JavaScript was named for marketing purposes during the Java hype of the mid-1990s. Java is statically typed and compiled; JavaScript is dynamically typed and interpreted.",
            "exam",
            "Frequently Asked"
        ),

        keyPoints([
            "JavaScript was created by Brendan Eich in 1995 and standardised as ECMAScript.",
            "ES6 (2015) was a landmark release adding let/const, arrow functions, classes, modules and promises.",
            "JavaScript is dynamically typed and multi-paradigm; Java is statically typed and class-based.",
            "Use external .js files with defer for scripts that need the DOM.",
            "JavaScript runs in browsers, Node.js, Deno, Bun, Electron and React Native.",
        ]),
    ],

    {
        summary:
            "Understand JavaScript's history, comparison with Java, how to include it in HTML, script loading attributes and output methods.",
        minutes: 11,
        tags: ["web", "javascript", "ecmascript", "history", "important"],

        mcqs: [
            mcq(
                "JavaScript was created by:",
                ["James Gosling", "Brendan Eich", "Tim Berners-Lee", "Håkon Wium Lie"],
                1,
                "Brendan Eich created JavaScript at Netscape in 1995."
            ),
            mcq(
                "JavaScript was standardised as:",
                ["Java Standard", "ECMAScript", "JScript", "LiveScript"],
                1,
                "JavaScript was standardised by Ecma International as ECMAScript (ECMA-262)."
            ),
            mcq(
                "The defer attribute on a script tag:",
                ["Downloads and executes immediately", "Downloads in parallel and executes after HTML is parsed", "Prevents the script from running", "Makes the script asynchronous"],
                1,
                "defer downloads the script in parallel without blocking HTML parsing, then executes it in order after the HTML is fully parsed."
            ),
            mcq(
                "ES6 was released in:",
                ["2009", "2011", "2015", "2018"],
                2,
                "ES6 (ECMAScript 2015) was released in 2015."
            ),
            mcq(
                "JavaScript is:",
                ["Statically typed", "Dynamically typed", "Both", "Neither"],
                1,
                "JavaScript is dynamically typed — variable types are determined at runtime."
            ),
        ],

        questions: [
            qa(
                "Compare JavaScript and Java.",
                "Despite similar names, JavaScript and Java are fundamentally different. JavaScript is dynamically typed (types determined at runtime) while Java is statically typed (types declared at compile time). JavaScript is interpreted or JIT-compiled in the browser or Node.js, while Java is compiled to bytecode that runs on the JVM. JavaScript is multi-paradigm supporting object-oriented, functional and procedural styles with prototypal inheritance, while Java is primarily class-based OOP with classical inheritance. JavaScript was created by Brendan Eich at Netscape in 1995 for web browsers; Java was created by James Gosling at Sun Microsystems for general-purpose programming. The similar name was a marketing decision during Java's popularity in the mid-1990s.",
                5
            ),
            qa(
                "Explain the different ways to add JavaScript to an HTML page and the defer versus async attributes.",
                "JavaScript can be added inline using event attributes like onclick, internally using a <script> block in the HTML, or externally by linking a .js file with <script src=\"app.js\"></script>. External files are the best practice because they are reusable, cacheable and separate behaviour from structure. Without attributes, a script blocks HTML parsing until it downloads and executes. The defer attribute downloads the script in parallel (non-blocking) and executes it after the HTML is fully parsed, preserving the order of multiple deferred scripts. It is ideal for scripts that need the DOM. The async attribute also downloads in parallel but executes as soon as the download finishes, without guaranteeing order. It is suitable for independent scripts like analytics that do not depend on the DOM or other scripts.",
                5
            ),
            qa(
                "What is ECMAScript and why was ES6 significant?",
                "ECMAScript is the official standard (ECMA-262) for JavaScript, maintained by Ecma International. JavaScript is the most well-known implementation of ECMAScript. ES6, also called ES2015, was a landmark release in 2015 that transformed JavaScript into a modern language. It introduced let and const for block-scoped variables, arrow functions for concise function syntax, classes for a cleaner OOP syntax, modules (import/export) for code organisation, promises for asynchronous programming, template literals for string interpolation, destructuring, default parameters, the spread operator, Map and Set collections, and much more. Before ES6, JavaScript lacked many features that other modern languages had. ES6 closed that gap and subsequent annual releases (ES2016 onwards) have continued to add features like async/await, optional chaining and nullish coalescing.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — JavaScript Basics: Variables, Data Types and Operators
========================================================= */

const jsBasics = createTopic(
    "javascript-basics-variables-data-types-and-operators",
    "JavaScript Basics: Variables, Data Types and Operators",

    [
        heading("Declaring Variables"),

        table(
            ["Keyword", "Scope", "Reassignable?", "Hoisted?", "Use"],
            [
                ["var", "Function-scoped", "Yes", "Yes (undefined)", "Legacy; avoid in modern JS"],
                ["let", "Block-scoped", "Yes", "Yes (TDZ)", "Variables that change"],
                ["const", "Block-scoped", "No (binding)", "Yes (TDZ)", "Values that should not be reassigned"],
            ]
        ),

        code(
            `// var — function-scoped, can be redeclared
var x = 10;
var x = 20;  // OK with var

// let — block-scoped, cannot be redeclared
let y = 10;
// let y = 20;  → SyntaxError: already declared
y = 20;      // OK — reassignment allowed

// const — block-scoped, cannot be reassigned
const PI = 3.14159;
// PI = 3.14;  → TypeError: assignment to constant

// const with objects — the binding is constant, not the content
const student = { name: "Rahul" };
student.name = "Priya";  // OK — mutating the object
// student = {};         → TypeError — rebinding not allowed

// Block scope
if (true) {
    let a = 1;
    const b = 2;
    var c = 3;
}
// console.log(a); → ReferenceError (block-scoped)
// console.log(b); → ReferenceError (block-scoped)
console.log(c);    // 3 (function-scoped)`,
            "javascript",
            "var, let and const"
        ),

        heading("Temporal Dead Zone (TDZ)"],

    definition(
        "Temporal Dead Zone",
        "The period between entering a scope and the actual declaration of a let or const variable, during which accessing the variable throws a ReferenceError. Unlike var, let and const are not accessible before their declaration even though they are hoisted."
    ),

    heading("Data Types"),

    table(
        ["Category", "Type", "Example", "typeof result"],
        [
            ["Primitive", "Number", "42, 3.14, Infinity, NaN", "\"number\""],
            ["Primitive", "String", "\"hello\", 'world', `template`", "\"string\""],
            ["Primitive", "Boolean", "true, false", "\"boolean\""],
            ["Primitive", "Undefined", "undefined", "\"undefined\""],
            ["Primitive", "Null", "null", "\"object\" (historical bug)"],
            ["Primitive", "Symbol", "Symbol('id')", "\"symbol\""],
            ["Primitive", "BigInt", "9007199254740991n", "\"bigint\""],
            ["Reference", "Object", "{ name: \"Rahul\" }", "\"object\""],
            ["Reference", "Array", "[1, 2, 3]", "\"object\""],
            ["Reference", "Function", "function() {}", "\"function\""],
        ]
    ),

    code(
        `// typeof operator
console.log(typeof 42);          // "number"
console.log(typeof "hello");     // "string"
console.log(typeof true);        // "boolean"
console.log(typeof undefined);   // "undefined"
console.log(typeof null);        // "object"  ← known bug
console.log(typeof {});          // "object"
console.log(typeof []);          // "object"
console.log(typeof function(){}); // "function"

// Checking for array
console.log(Array.isArray([1, 2, 3]));  // true
console.log(Array.isArray({}));          // false

// Template literals (ES6)
const name = "Rahul";
const marks = 85;
console.log(\`\${name} scored \${marks} marks\`);  // Rahul scored 85 marks`,
        "javascript",
        "typeof and template literals"
    ),

    heading("Type Conversion"),

    code(
        `// String to Number
Number("42");      // 42
parseInt("42px");  // 42
parseFloat("3.14"); // 3.14
+"42";             // 42 (unary plus)

// Number to String
String(42);        // "42"
(42).toString();   // "42"
"" + 42;           // "42"

// To Boolean
Boolean(0);        // false
Boolean("");       // false
Boolean(null);     // false
Boolean(undefined); // false
Boolean(NaN);      // false
Boolean("hello");  // true
Boolean(42);       // true
!!value;           // shorthand double-negation to boolean`,
        "javascript",
        "Type conversion"
    ),

    heading("Falsy Values"),

    list([
        "false",
        "0 (and -0)",
        "0n (BigInt zero)",
        "\"\" (empty string)",
        "null",
        "undefined",
        "NaN",
    ]),

    heading("Operators"),

    table(
        ["Category", "Operators", "Notes"],
        [
            ["Arithmetic", "+, -, *, /, %, **", "** is exponentiation (ES6)"],
            ["Assignment", "=, +=, -=, *=, /=, %=, **=", "Compound assignment"],
            ["Comparison", "==, ===, !=, !==, >, <, >=, <=", "Always prefer === and !=="],
            ["Logical", "&&, ||, !", "Short-circuit evaluation"],
            ["Nullish", "??", "Returns right side only if left is null or undefined"],
            ["Optional chaining", "?.", "Safely access nested properties"],
            ["Ternary", "condition ? a : b", "Inline if-else"],
            ["Spread", "...", "Expand arrays/objects"],
        ]
    ),

    heading("== versus ==="),

    code(
        `// == (loose equality) — converts types before comparing
5 == "5";     // true  (string converted to number)
0 == false;   // true  (false converted to 0)
null == undefined;  // true

// === (strict equality) — no type conversion
5 === "5";    // false (different types)
0 === false;  // false
null === undefined;  // false
5 === 5;      // true

// ALWAYS use === and !== in modern JavaScript`,
        "javascript",
        "Loose vs strict equality"
    ),

    heading("Nullish Coalescing and Optional Chaining"),

    code(
        `// Nullish coalescing (??) — fallback only for null/undefined
const name = null ?? "Guest";     // "Guest"
const count = 0 ?? 10;            // 0  (0 is not nullish)
const count2 = 0 || 10;           // 10 (0 is falsy, || treats it as false)

// Optional chaining (?.) — safe property access
const user = { profile: { name: "Rahul" } };
console.log(user.profile?.name);     // "Rahul"
console.log(user.address?.city);     // undefined (no error!)
console.log(user.profile?.age ?? 18); // 18 (age is undefined)`,
        "javascript",
        "?? and ?. operators"
    ),

    note(
        "Always use === (strict equality) instead of == (loose equality). The == operator performs type coercion which leads to unexpected results like 0 == false being true. ESLint and all modern style guides enforce ===.",
        "warning",
        "Best Practice"
    ),

    keyPoints([
        "Use const by default, let when reassignment is needed, and avoid var.",
        "JavaScript has 7 primitive types plus objects (arrays and functions are objects).",
        "typeof null returns \"object\" — a historical bug; use Array.isArray() to check arrays.",
        "Always use === and !== for comparison to avoid type coercion surprises.",
        "?? provides fallbacks for null/undefined; ?. safely accesses nested properties.",
    ]),
  ],

{
    summary:
    "Master JavaScript variables (var/let/const), data types, type conversion, operators, == vs ===, and modern operators (??, ?.).",
        minutes: 13,
            tags: ["web", "javascript", "variables", "data-types", "operators", "important"],

                mcqs: [
                    mcq(
                        "Which keyword declares a block-scoped variable that cannot be reassigned?",
                        ["var", "let", "const", "static"],
                        2,
                        "const declares a block-scoped variable whose binding cannot be reassigned."
                    ),
                    mcq(
                        "typeof null returns:",
                        ["\"null\"", "\"undefined\"", "\"object\"", "\"boolean\""],
                        2,
                        "typeof null returns \"object\" due to a historical bug in JavaScript."
                    ),
                    mcq(
                        "5 == \"5\" evaluates to:",
                        ["true", "false", "undefined", "Error"],
                        0,
                        "== performs type coercion, converting the string \"5\" to the number 5, so they are equal."
                    ),
                    mcq(
                        "5 === \"5\" evaluates to:",
                        ["true", "false", "undefined", "Error"],
                        1,
                        "=== requires both value and type to match. Number 5 and string \"5\" have different types."
                    ),
                    mcq(
                        "Which of the following is NOT a falsy value?",
                        ["0", "\"\"", "\"false\"", "null"],
                        2,
                        "The string \"false\" is a non-empty string, which is truthy. false, 0, \"\", null, undefined and NaN are falsy."
                    ),
                    mcq(
                        "The ?? operator returns the right side when the left side is:",
                        ["Any falsy value", "null or undefined", "0 or empty string", "false"],
                        1,
                        "Nullish coalescing (??) only triggers for null or undefined, unlike || which triggers for any falsy value."
                    ),
                ],

                    questions: [
                        qa(
                            "Compare var, let and const in JavaScript.",
                            "var is function-scoped, can be redeclared and reassigned, and is hoisted with an initial value of undefined, meaning it can be accessed before its declaration (returning undefined). It is a legacy feature and should be avoided. let is block-scoped (limited to the nearest enclosing braces), can be reassigned but not redeclared in the same scope, and is hoisted but exists in a Temporal Dead Zone until its declaration is executed — accessing it before declaration throws a ReferenceError. const is also block-scoped and hoisted with a TDZ, but cannot be reassigned after initialisation. However, if the const value is an object or array, its contents can still be mutated. The modern best practice is to use const by default and let only when reassignment is needed.",
                            5
                        ),
                        qa(
                            "Explain == versus === and why === is preferred.",
                            "The == operator (loose equality) compares values after performing type coercion. If the types differ, JavaScript converts them to a common type before comparing. This leads to surprising results: 5 == \"5\" is true (string converted to number), 0 == false is true (false converted to 0), and null == undefined is true. The === operator (strict equality) compares both value and type without any conversion. 5 === \"5\" is false because number and string are different types. === is preferred because it is predictable, avoids hidden type conversions, and prevents bugs. All modern JavaScript style guides and linters (ESLint) enforce === and !==. The only common exception is checking for null or undefined together using == null, which is true for both null and undefined.",
                            5
                        ),
                        qa(
                            "What are falsy values in JavaScript? How does ?? differ from ||?",
                            "JavaScript has seven falsy values: false, 0, -0, 0n (BigInt zero), \"\" (empty string), null, undefined and NaN. Everything else is truthy, including \"false\", \"0\", [], {} and empty functions. The || (OR) operator returns the first truthy value, so 0 || 10 returns 10 because 0 is falsy. The ?? (nullish coalescing) operator returns the right side only if the left side is null or undefined, so 0 ?? 10 returns 0 because 0 is not nullish. This distinction is important when 0, empty string or false are valid values that should not be replaced by a default. Use ?? when you want a fallback only for missing values, and || when you want a fallback for any falsy value.",
                            4
                        ),
                    ],
  }
);

/* =========================================================
   TOPIC 3 — JavaScript Functions and Control Flow
========================================================= */

const jsFunctionsAndControlFlow = createTopic(
    "javascript-functions-and-control-flow",
    "JavaScript Functions and Control Flow",

    [
        heading("Functions"),

        definition(
            "Function",
            "A reusable block of code designed to perform a particular task. Functions in JavaScript are first-class objects — they can be assigned to variables, passed as arguments and returned from other functions."
        ),

        heading("Function Declaration versus Expression"),

        code(
            `// Function declaration — hoisted (can be called before it appears)
function greet(name) {
    return "Hello, " + name;
}
console.log(greet("Rahul"));  // Hello, Rahul

// Function expression — not hoisted
const greet2 = function(name) {
    return "Hello, " + name;
};

// Arrow function (ES6) — concise, no own 'this'
const greet3 = (name) => "Hello, " + name;
const add = (a, b) => a + b;
const square = x => x * x;  // single param: parentheses optional

// Arrow function with multiple statements
const process = (x) => {
    const result = x * 2;
    return result;
};`,
            "javascript",
            "Function types"
        ),

        heading("Arrow Functions versus Regular Functions"),

        table(
            ["Aspect", "Regular Function", "Arrow Function"],
            [
                ["this binding", "Dynamic (depends on how it's called)", "Lexical (inherits from enclosing scope)"],
                ["arguments object", "Yes", "No (use rest parameters)"],
                ["Can be used as constructor", "Yes (new MyFunc())", "No"],
                ["Hoisted", "Declarations are hoisted", "No (they are expressions)"],
                ["Syntax", "More verbose", "Concise"],
            ]
        ),

        heading("Default Parameters and Rest"),

        code(
            `// Default parameters (ES6)
function greet(name = "Guest") {
    return \`Hello, \${name}\`;
}
greet();         // "Hello, Guest"
greet("Priya");  // "Hello, Priya"

// Rest parameters — collect remaining args into an array
function sum(...numbers) {
    return numbers.reduce((total, n) => total + n, 0);
}
sum(1, 2, 3, 4);  // 10

// Combined
function createUser(name, age = 18, ...hobbies) {
    return { name, age, hobbies };
}
createUser("Rahul", 22, "coding", "reading");
// { name: "Rahul", age: 22, hobbies: ["coding", "reading"] }`,
            "javascript",
            "Default and rest parameters"
        ),

        heading("Callback Functions"),

        definition(
            "Callback",
            "A function passed as an argument to another function, to be executed later. Callbacks are the foundation of asynchronous JavaScript and array methods like map, filter and forEach."
        ),

        code(
            `// Callback example
function processData(data, callback) {
    const result = data.map(x => x * 2);
    callback(result);
}

processData([1, 2, 3], function(result) {
    console.log(result);  // [2, 4, 6]
});

// Array methods with callbacks
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(n => console.log(n));
const doubled = numbers.map(n => n * 2);       // [2, 4, 6, 8, 10]
const evens = numbers.filter(n => n % 2 === 0); // [2, 4]
const total = numbers.reduce((sum, n) => sum + n, 0); // 15
const found = numbers.find(n => n > 3);         // 4
const hasEven = numbers.some(n => n % 2 === 0); // true
const allPositive = numbers.every(n => n > 0);  // true`,
            "javascript",
            "Callbacks and array methods"
        ),

        heading("Control Flow"),

        code(
            `// if-else
const marks = 75;
if (marks >= 90) {
    grade = "A+";
} else if (marks >= 80) {
    grade = "A";
} else if (marks >= 70) {
    grade = "B";
} else {
    grade = "F";
}

// Ternary
const status = age >= 18 ? "Adult" : "Minor";

// switch
const day = 3;
switch (day) {
    case 1: console.log("Monday"); break;
    case 2: console.log("Tuesday"); break;
    case 3: console.log("Wednesday"); break;
    default: console.log("Other");
}

// for loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// for...of (values)
const fruits = ["apple", "banana", "cherry"];
for (const fruit of fruits) {
    console.log(fruit);
}

// for...in (keys)
const student = { name: "Rahul", marks: 85 };
for (const key in student) {
    console.log(key, student[key]);
}

// while
let count = 0;
while (count < 5) {
    count++;
}

// do-while
let n = 0;
do {
    n++;
} while (n < 5);`,
            "javascript",
            "Control flow statements"
        ),

        heading("Destructuring"),

        code(
            `// Array destructuring
const [first, second, ...rest] = [1, 2, 3, 4, 5];
// first=1, second=2, rest=[3,4,5]

// Swap variables
let a = 1, b = 2;
[a, b] = [b, a];  // a=2, b=1

// Object destructuring
const student = { name: "Rahul", age: 22, course: "MSc IT" };
const { name, age } = student;
// name="Rahul", age=22

// Rename and default
const { name: studentName, city = "Surat" } = student;
// studentName="Rahul", city="Surat"

// Nested
const { address: { street } } = { address: { street: "MG Road" } };`,
            "javascript",
            "Destructuring"
        ),

        heading("Spread Operator"),

        code(
            `// Copy array
const arr1 = [1, 2, 3];
const arr2 = [...arr1];  // [1, 2, 3] (shallow copy)

// Merge arrays
const merged = [...arr1, 4, 5];  // [1, 2, 3, 4, 5]

// Copy object
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };  // { a: 1, b: 2, c: 3 }

// Override properties
const updated = { ...obj1, b: 99 };  // { a: 1, b: 99 }`,
            "javascript",
            "Spread operator"
        ),

        keyPoints([
            "Function declarations are hoisted; function expressions and arrow functions are not.",
            "Arrow functions have lexical this (inherit from enclosing scope) and cannot be used as constructors.",
            "Callbacks are functions passed as arguments; array methods like map, filter and reduce use them.",
            "Destructuring extracts values from arrays and objects into individual variables.",
            "The spread operator (...) copies and merges arrays and objects.",
        ]),
    ],

    {
        summary:
            "Master JavaScript functions (declaration, expression, arrow), callbacks, array methods, control flow, destructuring and spread.",
        minutes: 13,
        tags: ["web", "javascript", "functions", "arrow", "callbacks", "destructuring", "important"],

        mcqs: [
            mcq(
                "Arrow functions differ from regular functions because they:",
                ["Are faster", "Have lexical this (inherit from enclosing scope)", "Can be used as constructors", "Are hoisted"],
                1,
                "Arrow functions inherit 'this' from their enclosing scope rather than having their own dynamic this binding."
            ),
            mcq(
                "Which array method creates a new array with transformed elements?",
                ["forEach", "filter", "map", "reduce"],
                2,
                "map() transforms each element and returns a new array of the same length."
            ),
            mcq(
                "The rest parameter (...numbers) in a function:",
                ["Spreads an array into arguments", "Collects remaining arguments into an array", "Copies an object", "Declares a constant"],
                1,
                "Rest parameters collect all remaining arguments into a real array."
            ),
            mcq(
                "for...of iterates over:",
                ["Object keys", "Iterable values (arrays, strings)", "Object values only via keys", "Function parameters"],
                1,
                "for...of iterates over the values of iterable objects like arrays and strings."
            ),
            mcq(
                "[a, b] = [b, a] is used to:",
                ["Create an array", "Swap two variables", "Merge arrays", "Filter an array"],
                1,
                "Array destructuring can swap two variables without a temporary variable."
            ),
        ],

        questions: [
            qa(
                "Compare function declarations, function expressions and arrow functions.",
                "A function declaration uses the function keyword followed by a name and is hoisted, meaning it can be called before it appears in the code. A function expression assigns an anonymous or named function to a variable and is not hoisted — it cannot be called before the assignment. An arrow function (ES6) uses the => syntax and is a concise function expression. Arrow functions have lexical this, meaning they inherit this from the enclosing scope rather than having their own this binding that depends on how they are called. They do not have their own arguments object (use rest parameters instead) and cannot be used as constructors with new. Arrow functions are ideal for callbacks and short functions; regular functions are needed when you need dynamic this, constructors or the arguments object.",
                5
            ),
            qa(
                "Explain map, filter and reduce with examples.",
                "These three array methods are the foundation of functional programming in JavaScript. map() transforms each element and returns a new array of the same length: [1,2,3].map(n => n * 2) returns [2,4,6]. filter() keeps only elements that pass a test and returns a new (possibly shorter) array: [1,2,3,4,5].filter(n => n % 2 === 0) returns [2,4]. reduce() accumulates array elements into a single value, taking a callback with an accumulator and current element, plus an initial value: [1,2,3,4].reduce((sum, n) => sum + n, 0) returns 10. These methods do not modify the original array (they are immutable operations) and can be chained: numbers.filter(n => n > 0).map(n => n * 2).reduce((sum, n) => sum + n, 0).",
                5
            ),
            qa(
                "Explain destructuring and the spread operator with examples.",
                "Destructuring extracts values from arrays or objects into individual variables. Array destructuring uses brackets: const [first, second, ...rest] = [1,2,3,4] assigns first=1, second=2, rest=[3,4]. It can also swap variables: [a,b] = [b,a]. Object destructuring uses braces: const {name, age} = {name: 'Rahul', age: 22} extracts those properties. You can rename: {name: studentName} and provide defaults: {city = 'Surat'}. The spread operator (...) expands an array or object. For arrays: const copy = [...arr] creates a shallow copy, and [...arr1, ...arr2] merges arrays. For objects: const copy = {...obj} copies properties, and {...obj, b: 99} copies and overrides. Spread is commonly used for immutable updates in React and functional programming.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — DOM Manipulation and Events
========================================================= */

const domAndEvents = createTopic(
    "dom-manipulation-and-events",
    "DOM Manipulation and Events",

    [
        definition(
            "DOM (Document Object Model)",
            "A programming interface that represents an HTML document as a tree of objects (nodes). JavaScript can use the DOM to read, modify, add and delete HTML elements, attributes and content dynamically."
        ),

        text(
            "When a browser loads an HTML page, it parses the HTML and builds the DOM tree. JavaScript can then access and manipulate this tree to create dynamic, interactive web pages. The DOM is the bridge between HTML and JavaScript."
        ),

        heading("DOM Tree Structure"),

        code(
            `HTML:                          DOM Tree:
<html>                          document
  <head>                          └── html
    <title>Page</title>                ├── head
  </head>                              │     └── title
  <body>                               │           └── "Page"
    <h1>Hello</h1>                     └── body
    <p>World</p>                             ├── h1
  </body>                                    │    └── "Hello"
</html>                                      └── p
                                                  └── "World"`,
            "text",
            "DOM tree"
        ),

        heading("Selecting Elements"),

        table(
            ["Method", "Returns", "Example"],
            [
                ["getElementById('id')", "Single element (or null)", "document.getElementById('header')"],
                ["getElementsByClassName('cls')", "HTMLCollection (live)", "document.getElementsByClassName('item')"],
                ["getElementsByTagName('tag')", "HTMLCollection (live)", "document.getElementsByTagName('p')"],
                ["querySelector('css')", "First matching element (or null)", "document.querySelector('.item')"],
                ["querySelectorAll('css')", "NodeList (static)", "document.querySelectorAll('div.card')"],
            ]
        ),

        code(
            `// querySelector / querySelectorAll use CSS selectors (preferred)
const header = document.querySelector("#header");
const items = document.querySelectorAll(".item");
const firstBtn = document.querySelector("button.primary");
const nested = document.querySelector("div.container > p");

// Iterate NodeList
items.forEach(item => {
    console.log(item.textContent);
});`,
            "javascript",
            "Selecting DOM elements"
        ),

        heading("Modifying Elements"),

        code(
            `const el = document.querySelector("#demo");

// Content
el.textContent = "Hello";           // Text only (safe, no HTML parsing)
el.innerHTML = "<strong>Hello</strong>"; // HTML (careful: XSS risk)
el.innerText = "Hello";             // Text, respects CSS visibility

// Attributes
el.setAttribute("class", "highlight");
el.getAttribute("href");
el.removeAttribute("disabled");
el.id = "newId";                    // Direct property access
el.className = "btn primary";

// Classes (preferred)
el.classList.add("active");
el.classList.remove("hidden");
el.classList.toggle("open");
el.classList.contains("active");    // true/false

// Styles
el.style.color = "red";
el.style.fontSize = "20px";         // camelCase for CSS properties
el.style.backgroundColor = "#f0f0f0";`,
            "javascript",
            "Modifying DOM elements"
        ),

        heading("Creating and Removing Elements"),

        code(
            `// Create
const div = document.createElement("div");
div.textContent = "New element";
div.classList.add("card");

// Insert
document.body.appendChild(div);                    // Add as last child
parent.insertBefore(div, referenceElement);        // Insert before
parent.insertAdjacentHTML("beforeend", "<p>Hi</p>"); // Parse HTML string

// Modern: append, prepend, before, after
parent.append(div);          // Add as last child (can take multiple args, strings)
parent.prepend(div);         // Add as first child
el.before(div);              // Insert before el
el.after(div);               // Insert after el

// Remove
el.remove();                 // Modern
parent.removeChild(el);      // Older method

// Clone
const copy = el.cloneNode(true);  // true = deep clone (with children)`,
            "javascript",
            "Creating and removing elements"
        ),

        heading("Events"),

        definition(
            "Event",
            "A signal that something has happened in the browser — a user action (click, keypress, submit), a browser action (load, resize) or a programmatic action. JavaScript can listen for events and execute code in response."
        ),

        heading("Adding Event Listeners"),

        code(
            `const btn = document.querySelector("#submitBtn");

// addEventListener (preferred)
btn.addEventListener("click", function(event) {
    console.log("Clicked!");
    console.log(event.target);     // The element that was clicked
    event.preventDefault();        // Prevent default behaviour
});

// Arrow function
btn.addEventListener("click", (e) => {
    console.log("Clicked via arrow function");
});

// Named function (can be removed later)
function handleClick(e) {
    console.log("Named handler");
}
btn.addEventListener("click", handleClick);
btn.removeEventListener("click", handleClick);

// Event object properties
btn.addEventListener("click", (e) => {
    e.preventDefault();    // Prevent form submit, link navigation
    e.stopPropagation();   // Stop event from bubbling up
    console.log(e.type);   // "click"
    console.log(e.target); // The element that triggered the event
    console.log(e.currentTarget); // The element the listener is attached to
});`,
            "javascript",
            "Event listeners"
        ),

        heading("Common Events"),

        table(
            ["Event", "Triggered When", "Element"],
            [
                ["click", "Mouse click", "Any"],
                ["dblclick", "Double click", "Any"],
                ["submit", "Form submission", "<form>"],
                ["input", "Value changes (every keystroke)", "<input>, <textarea>"],
                ["change", "Value committed (blur after change)", "<input>, <select>"],
                ["focus / blur", "Element gains/loses focus", "Form elements"],
                ["keydown / keyup", "Key pressed / released", "Document or focused element"],
                ["mouseover / mouseout", "Mouse enters / leaves", "Any"],
                ["load", "Resource finished loading", "window, img"],
                ["DOMContentLoaded", "HTML fully parsed (no wait for images)", "document"],
                ["resize", "Window resized", "window"],
                ["scroll", "Element scrolled", "window or scrollable element"],
            ]
        ),

        heading("Event Bubbling and Capturing"),

        definition(
            "Event Bubbling",
            "The default phase where an event starts at the target element and bubbles up through its ancestors (parent, grandparent, ..., document). This allows a parent to handle events from children."
        ),

        code(
            `Event flow (3 phases):
  1. Capturing (trickle down): window → document → ... → target
  2. Target: the event reaches the target element
  3. Bubbling (bubble up): target → ... → document → window

// Bubbling (default)
parent.addEventListener("click", () => console.log("parent"));
child.addEventListener("click", () => console.log("child"));
// Click child → logs: "child" then "parent"

// Capturing (third argument true)
parent.addEventListener("click", () => console.log("parent"), true);
// Click child → logs: "parent" then "child"

// Event delegation — listen on parent, handle child events
list.addEventListener("click", (e) => {
    if (e.target.matches("li")) {
        console.log("Clicked item:", e.target.textContent);
    }
});`,
            "javascript",
            "Event bubbling and delegation"
        ),

        heading("Form Handling Example"),

        code(
            `const form = document.querySelector("#registerForm");

form.addEventListener("submit", (e) => {
    e.preventDefault();  // Prevent page reload

    const name = form.elements.name.value.trim();
    const email = form.elements.email.value.trim();

    if (!name || !email) {
        showError("Please fill all fields");
        return;
    }

    if (!email.includes("@")) {
        showError("Invalid email");
        return;
    }

    console.log("Submitting:", { name, email });
    form.reset();
});

function showError(msg) {
    const errorEl = document.querySelector("#error");
    errorEl.textContent = msg;
    errorEl.style.display = "block";
}`,
            "javascript",
            "Form handling"
        ),

        note(
            "Always use addEventListener instead of inline onclick attributes or the onclick property. addEventListener allows multiple listeners on the same element, can be removed, and supports capturing. Also always use textContent instead of innerHTML when inserting user-provided text to prevent XSS attacks.",
            "warning",
            "Best Practice"
        ),

        keyPoints([
            "The DOM represents HTML as a tree of nodes that JavaScript can read and modify.",
            "querySelector/querySelectorAll use CSS selectors and are the preferred selection methods.",
            "textContent is safe for text; innerHTML parses HTML and has XSS risks.",
            "addEventListener is the standard way to handle events; always call preventDefault() on form submit.",
            "Event bubbling allows event delegation — one listener on a parent handles all child events.",
        ]),
    ],

    {
        summary:
            "Master DOM selection, modification, creation/removal of elements, event listeners, event bubbling and form handling.",
        minutes: 14,
        tags: ["web", "javascript", "dom", "events", "event-delegation", "important"],

        mcqs: [
            mcq(
                "document.querySelector('.item') returns:",
                ["All elements with class 'item'", "The first element with class 'item'", "An HTMLCollection", "A CSS rule"],
                1,
                "querySelector returns the first matching element or null if none is found."
            ),
            mcq(
                "Which property is safe for inserting user-provided text?",
                ["innerHTML", "textContent", "outerHTML", "insertAdjacentHTML"],
                1,
                "textContent inserts text without parsing HTML, preventing XSS attacks."
            ),
            mcq(
                "Event bubbling means the event:",
                ["Starts at the document and goes down to the target", "Starts at the target and goes up through ancestors", "Only fires on the target", "Is cancelled automatically"],
                1,
                "Bubbling is the default phase where the event propagates from the target up through its ancestors."
            ),
            mcq(
                "e.preventDefault() is commonly used to:",
                ["Stop bubbling", "Prevent form submission or link navigation", "Remove an event listener", "Create a new element"],
                1,
                "preventDefault() stops the browser's default action, such as form submission or following a link."
            ),
            mcq(
                "Event delegation involves:",
                ["Removing all event listeners", "Attaching one listener to a parent to handle child events", "Using inline onclick attributes", "Preventing all events"],
                1,
                "Event delegation uses bubbling: a single listener on a parent handles events from current and future children."
            ),
            mcq(
                "classList.toggle('active') will:",
                ["Always add the class", "Always remove the class", "Add the class if absent, remove it if present", "Throw an error"],
                2,
                "toggle adds the class if the element does not have it, and removes it if it does."
            ),
        ],

        questions: [
            qa(
                "Explain the DOM and how to select and modify elements.",
                "The Document Object Model (DOM) is a programming interface that represents an HTML document as a tree of nodes. When the browser parses HTML, it builds this tree, and JavaScript can access and modify it. To select elements, querySelector('css') returns the first match and querySelectorAll('css') returns all matches as a NodeList — these are preferred because they use CSS selector syntax. Older methods include getElementById, getElementsByClassName and getElementsByTagName. To modify content, textContent sets plain text (safe from XSS) while innerHTML parses HTML strings. Attributes are modified with setAttribute/getAttribute or direct properties like el.id. Classes are managed with classList.add(), .remove(), .toggle() and .contains(). Inline styles use el.style.propertyName in camelCase. New elements are created with createElement(), configured, and inserted with append(), prepend(), before() or after(). Elements are removed with el.remove().",
                5
            ),
            qa(
                "Explain event handling in JavaScript including addEventListener, preventDefault and event bubbling.",
                "Events are signals that something happened (click, submit, keydown). The standard way to handle them is addEventListener(type, handler), which attaches a function to be called when the event occurs. The handler receives an event object with properties like target (the element that triggered it), type and methods like preventDefault() which stops the browser's default action (e.g., form submission, link navigation) and stopPropagation() which stops the event from bubbling further. Event bubbling is the default phase where an event starts at the target element and propagates up through its ancestors. This enables event delegation: attaching one listener to a parent that handles events from all children, including those added later. This is more efficient than attaching listeners to each child individually.",
                5
            ),
            qa(
                "What is event delegation? Explain with an example.",
                "Event delegation is a technique that uses event bubbling to handle events from multiple child elements with a single listener on a parent. Instead of attaching a click listener to every <li> in a list, you attach one listener to the <ul>. When any <li> is clicked, the event bubbles up to the <ul>, and the handler uses e.target to identify which child was clicked. For example: list.addEventListener('click', (e) => { if (e.target.matches('li')) { console.log('Clicked:', e.target.textContent); } }). Benefits include better performance (one listener instead of many), automatic handling of dynamically added children (no need to attach new listeners) and simpler code. Event delegation is especially useful for lists, tables and any container with many similar interactive children.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 5 — ES6+ Features and Asynchronous JavaScript
========================================================= */

const es6AndAsync = createTopic(
    "es6-features-and-asynchronous-javascript",
    "ES6+ Features and Asynchronous JavaScript",

    [
        heading("ES6 Classes"),

        definition(
            "ES6 Class",
            "A syntactic sugar over JavaScript's prototypal inheritance that provides a cleaner, more familiar syntax for creating objects and implementing inheritance. Classes do not introduce a new object model — they are functions underneath."
        ),

        code(
            `class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    getGrade() {
        return this.marks >= 80 ? "A" : "B";
    }

    // Static method — called on the class, not instances
    static createAnonymous() {
        return new Student("Anonymous", 0);
    }
}

class MScStudent extends Student {
    constructor(name, marks, specialisation) {
        super(name, marks);  // Call parent constructor
        this.specialisation = specialisation;
    }

    getGrade() {
        return super.getGrade() + " (" + this.specialisation + ")";
    }
}

const s = new MScStudent("Rahul", 85, "IT");
console.log(s.getGrade());  // A (IT)`,
            "javascript",
            "ES6 classes"
        ),

        heading("Modules (import / export)"],

    code(
        `// math.js — named exports
export const PI = 3.14159;
export function add(a, b) { return a + b; }
export function multiply(a, b) { return a * b; }

// math.js — default export
export default function subtract(a, b) { return a - b; }

// main.js — importing
import subtract, { PI, add, multiply } from "./math.js";
import * as math from "./math.js";  // namespace import

console.log(add(2, 3));        // 5
console.log(math.multiply(2, 3)); // 6
console.log(subtract(5, 2));   // 3`,
        "javascript",
        "ES6 modules"
    ),

    heading("Asynchronous JavaScript"),

    definition(
        "Asynchronous Programming",
        "A programming model where operations that take time (network requests, file reading, timers) do not block the main thread. JavaScript is single-threaded, so async operations are essential for keeping the UI responsive."
    ),

    heading("The Event Loop"),

    code(
        `JavaScript Runtime:

  ┌─────────────┐     ┌──────────────┐     ┌─────────────┐
  │ Call Stack  │     │  Web APIs    │     │   Event     │
  │             │     │  (setTimeout,│     │   Loop      │
  │  main()     │     │   fetch,     │     │             │
  │  foo()      │     │   DOM events)│     │  Checks if  │
  │             │     │              │     │  stack is   │
  └─────────────┘     └──────┬───────┘     │  empty,     │
                             │             │  then moves │
                      ┌──────▼───────┐     │  callbacks  │
                      │ Callback     │     │  to stack   │
                      │ Queue        │◄────┘             │
                      └──────────────┘     └─────────────┘

  1. Sync code runs on the call stack
  2. Async operations go to Web APIs
  3. When complete, callbacks go to the callback queue
  4. Event loop moves callbacks to the stack when it's empty`,
        "text",
        "Event loop"
    ),

    heading("Callbacks, Promises and async/await"),

    code(
        `// 1. Callback (old way — can lead to callback hell)
function fetchUser(id, callback) {
    setTimeout(() => {
        callback({ id, name: "Rahul" });
    }, 1000);
}

fetchUser(1, (user) => {
    console.log(user.name);
    fetchPosts(user.id, (posts) => {
        console.log(posts);
        fetchComments(posts[0].id, (comments) => {
            console.log(comments);  // Nested deeply — callback hell
        });
    });
});

// 2. Promises (ES6)
function fetchUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id > 0) resolve({ id, name: "Rahul" });
            else reject(new Error("Invalid ID"));
        }, 1000);
    });
}

fetchUser(1)
    .then(user => {
        console.log(user.name);
        return fetchPosts(user.id);
    })
    .then(posts => console.log(posts))
    .catch(error => console.error(error));

// 3. async/await (ES2017) — cleanest
async function loadData() {
    try {
        const user = await fetchUser(1);
        const posts = await fetchPosts(user.id);
        console.log(user.name, posts);
    } catch (error) {
        console.error(error);
    }
}
loadData();`,
        "javascript",
        "Callbacks, Promises and async/await"
    ),

    heading("Promise Methods"),

    table(
        ["Method", "Description"],
        [
            ["Promise.resolve(value)", "Creates an already-resolved promise"],
            ["Promise.reject(error)", "Creates an already-rejected promise"],
            ["Promise.all(iterable)", "Resolves when ALL promises resolve; rejects if any rejects"],
            ["Promise.allSettled(iterable)", "Resolves when all promises settle (resolve or reject)"],
            ["Promise.race(iterable)", "Settles with the first promise that settles"],
            ["Promise.any(iterable)", "Resolves with the first fulfilled promise"],
        ]
    ),

    heading("Fetch API"),

    definition(
        "Fetch API",
        "A modern browser API for making HTTP requests. It returns a Promise and is the standard replacement for XMLHttpRequest (AJAX)."
    ),

    code(
        `// GET request
async function getUsers() {
    const response = await fetch("https://api.example.com/users");
    if (!response.ok) {
        throw new Error(\`HTTP error: \${response.status}\`);
    }
    const data = await response.json();
    return data;
}

// POST request
async function createUser(user) {
    const response = await fetch("https://api.example.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user)
    });
    return response.json();
}

// Using it
getUsers()
    .then(users => console.log(users))
    .catch(err => console.error(err));`,
        "javascript",
        "Fetch API"
    ),

    heading("JSON"),

    definition(
        "JSON (JavaScript Object Notation)",
        "A lightweight text format for exchanging data. It is language-independent but derived from JavaScript object syntax. JSON is the standard data format for REST APIs."
    ),

    code(
        `// JavaScript object → JSON string
const student = { name: "Rahul", marks: 85, active: true };
const json = JSON.stringify(student);
// '{"name":"Rahul","marks":85,"active":true}'

// JSON string → JavaScript object
const obj = JSON.parse(json);
console.log(obj.name);  // "Rahul"

// JSON rules:
// - Keys must be double-quoted strings
// - No functions, undefined, or comments
// - Values: string, number, boolean, null, array, object`,
        "javascript",
        "JSON.stringify and JSON.parse"
    ),

    heading("Error Handling in Async Code"),

    code(
        `async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(\`Status: \${response.status}\`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Failed to fetch:", error.message);
        return null;  // Or rethrow, or return a default
    }
}`,
        "javascript",
        "Async error handling"
    ),

    note(
        "async/await is syntactic sugar over Promises. An async function always returns a Promise. await pauses the function until the Promise settles, making asynchronous code look synchronous. Always wrap await in try-catch for error handling. Promise.all is useful when you have independent async operations that can run in parallel.",
        "exam",
        "Frequently Asked"
    ),

    keyPoints([
        "ES6 classes are syntactic sugar over prototypal inheritance with constructor, methods, static and extends.",
        "ES6 modules use import/export to organise code across files.",
        "JavaScript is single-threaded; the event loop handles async operations without blocking.",
        "Promises represent future values; async/await makes Promise-based code look synchronous.",
        "The Fetch API makes HTTP requests and returns Promises; JSON.stringify/parse convert between objects and JSON.",
    ]),
  ],

{
    summary:
    "Master ES6 classes, modules, the event loop, Promises, async/await, the Fetch API and JSON.",
        minutes: 14,
            tags: ["web", "javascript", "es6", "promises", "async-await", "fetch", "important"],

                mcqs: [
                    mcq(
                        "ES6 classes are:",
                        ["A new object model replacing prototypes", "Syntactic sugar over prototypal inheritance", "The same as Java classes", "Only available in Node.js"],
                        1,
                        "ES6 classes are syntactic sugar — underneath they still use JavaScript's prototypal inheritance."
                    ),
                    mcq(
                        "An async function always returns:",
                        ["undefined", "A Promise", "The awaited value directly", "null"],
                        1,
                        "An async function always returns a Promise, even if you return a non-Promise value."
                    ),
                    mcq(
                        "Promise.all() rejects when:",
                        ["All promises reject", "The first promise rejects", "All promises resolve", "Any promise is pending"],
                        1,
                        "Promise.all() rejects immediately when any of the input promises rejects (fail-fast)."
                    ),
                    mcq(
                        "JSON.stringify() converts:",
                        ["A JSON string to a JavaScript object", "A JavaScript object to a JSON string", "HTML to JSON", "A URL to JSON"],
                        1,
                        "JSON.stringify() serialises a JavaScript object into a JSON string."
                    ),
                    mcq(
                        "The Fetch API returns:",
                        ["JSON data directly", "A Promise that resolves to a Response object", "An XMLHttpRequest", "A string"],
                        1,
                        "fetch() returns a Promise that resolves to a Response object; you then call .json() or .text() on it."
                    ),
                    mcq(
                        "JavaScript is single-threaded, so async operations are handled by:",
                        ["Multiple CPU cores", "The event loop", "Web workers only", "The CSS engine"],
                        1,
                        "The event loop coordinates asynchronous operations, moving callbacks to the call stack when it is empty."
                    ),
                ],

                    questions: [
                        qa(
                            "Explain Promises and async/await with examples.",
                            "A Promise represents a value that may be available now, later or never. It is in one of three states: pending, fulfilled (resolved with a value) or rejected (failed with a reason). You create a Promise with new Promise((resolve, reject) => { ... }) and consume it with .then() for success and .catch() for errors. async/await is syntactic sugar over Promises that makes asynchronous code look synchronous. An async function always returns a Promise. Inside it, await pauses execution until the Promise settles and returns the resolved value. Errors are handled with try-catch around await. For example: async function load() { try { const user = await fetchUser(1); const posts = await fetchPosts(user.id); } catch (e) { console.error(e); } }. This is much cleaner than nested .then() chains or callback hell.",
                            5
                        ),
                        qa(
                            "Explain the JavaScript event loop.",
                            "JavaScript is single-threaded, meaning it has one call stack and can execute only one piece of code at a time. The event loop enables asynchronous behaviour without blocking. When synchronous code runs, it goes on the call stack. When an async operation is encountered (setTimeout, fetch, DOM events), it is handed to Web APIs provided by the browser. When the async operation completes, its callback is placed in the callback queue (or microtask queue for Promises). The event loop continuously checks if the call stack is empty; if it is, it dequeues the next callback and pushes it onto the stack for execution. This is why setTimeout(fn, 0) does not run immediately — fn waits until the current stack is clear. This model keeps the UI responsive because long-running I/O does not freeze the browser.",
                            5
                        ),
                        qa(
                            "How do you make HTTP requests with the Fetch API? Include error handling.",
                            "The Fetch API is the modern way to make HTTP requests. fetch(url) sends a GET request and returns a Promise that resolves to a Response object. You check response.ok (true for status 200-299) and then call response.json() (which also returns a Promise) to parse the body. For POST, pass a second argument with method, headers and body. Using async/await: async function getData(url) { try { const response = await fetch(url); if (!response.ok) throw new Error('HTTP ' + response.status); return await response.json(); } catch (error) { console.error('Fetch failed:', error.message); return null; } }. Note that fetch only rejects on network failure, not on HTTP error statuses like 404 or 500 — you must check response.ok yourself. JSON.stringify converts objects to JSON for the request body, and response.json() parses JSON responses back to objects.",
                            5
                        ),
                    ],
  }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit2Topics = [
    introToJavaScript,
    jsBasics,
    jsFunctionsAndControlFlow,
    domAndEvents,
    es6AndAsync,
];