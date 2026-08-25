/* =========================================================
   BCA • SEM 2 • Web Application Development - II
   UNIT 1 — Advanced JavaScript, jQuery and AJAX
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
   TOPIC 1 — Advanced JavaScript Concepts
========================================================= */

const advancedJavaScript = createTopic(
    "advanced-javascript-concepts",
    "Advanced JavaScript Concepts",

    [
        definition(
            "Advanced JavaScript",
            "Modern JavaScript features that go beyond variables and loops, including ES6+ syntax, scope, hoisting, closures, prototypes and asynchronous programming."
        ),

        heading("ES6+ Features"),

        list([
            "let and const — block scoped variables.",
            "Arrow functions — shorter syntax for functions.",
            "Template literals — backticks for multi line strings and interpolation.",
            "Destructuring — extracting values from arrays or objects.",
            "Spread and rest operators — ... for array and object manipulation.",
            "Classes — syntactic sugar over prototype based inheritance.",
            "Modules — import and export for organising code.",
            "Promises and async/await for asynchronous programming.",
        ]),

        heading("Scope and Hoisting"),

        definition(
            "Scope",
            "The region of the code where a variable is accessible. JavaScript has global, function and block scope."
        ),

        definition(
            "Hoisting",
            "JavaScript moves declarations to the top of their scope before execution. var is hoisted and initialised with undefined; let and const are hoisted but in the temporal dead zone until declared."
        ),

        code(
            `console.log(a);  // undefined (var hoisted)
var a = 5;

console.log(b);  // ReferenceError
let b = 10;       // let not initialised until this line
`,
            "javascript",
            "Hoisting with var and let"
        ),

        heading("Closures"),

        definition(
            "Closure",
            "A function together with its surrounding lexical scope. A closure allows an inner function to access variables of its outer function even after the outer function has returned."
        ),

        code(
            `function outer() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}

const counter = outer();
console.log(counter(),;  // 1
console.log(counter(),;  // 2
console.log(counter(),;  // 3
`,
            "javascript",
            "Closure example"
        ),

        heading("Prototypes and Inheritance"),

        list([
            "Every JavaScript object has a hidden [[Prototype]] property.",
            "Objects inherit properties and methods from their prototype.",
            "ES6 classes are syntactic sugar over the prototype system.",
            "Use Object.create(proto) to create an object with a given prototype.",
        ]),

        code(
            `const animal = {
  speak() { return 'sound'; }
};

const dog = Object.create(animal);
dog.bark = function() { return 'woof'; };

console.log(dog.bark(),;   // woof
console.log(dog.speak(),;  // inherited: sound
`,
            "javascript",
            "Prototype inheritance"
        ),

        heading("this Keyword"),

        table(
            ["Context", "Value of this"],
            [
                ["Global", "window (or undefined in strict mode)"],
                ["Inside a function", "undefined in strict mode, window otherwise"],
                ["Method call", "Object owning the method"],
                ["Arrow function", "Lexical, inherits from enclosing scope"],
                ["Event handler", "Element that received the event"],
                ["call/apply/bind", "Explicitly set value"],
            ]
        ),

        heading("ES6 Classes"),

        code(
            `class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return this.name + ' makes a sound';
  }
}

class Dog extends Animal {
  speak() {
    return this.name + ' barks';
  }
}

const d = new Dog('Bruno');
console.log(d.speak(),;  // Bruno barks
`,
            "javascript",
            "Class and inheritance"
        ),

        note(
            "Classes in JavaScript are syntactic sugar over the prototype system. Under the hood, methods are added to the prototype object, not to each instance, which is memory efficient.",
            "tip",
            "Classes Internally"
        ),

        heading("Destructuring and Spread"),

        code(
            `const person = { name: 'Amit', age: 21 };
const { name, age } = person;
const arr = [1, 2, 3];
const [first, ...rest] = arr;

const merged = { ...person, city: 'Surat' };
const nums   = [...arr, 4, 5];
`,
            "javascript",
            "Destructuring and spread"
        ),

        keyPoints([
            "let and const are block scoped, var is function scoped.",
            "Closures allow inner functions to access outer variables.",
            "Prototypes form the base of inheritance in JavaScript.",
            "Arrow functions do not have their own this.",
            "Classes, modules and spread are part of ES6+.",
        ]),
    ],

    {
        summary:
            "Master scope, hoisting, closures, prototypes, classes and the this keyword in modern JavaScript.",
        minutes: 13,
        tags: ["javascript", "es6", "closure", "prototype", "important"],

        mcqs: [
            mcq(
                "Which keyword is block scoped?",
                ["var", "let", "function", "none"],
                1,
                "let and const are block scoped."
            ),
            mcq(
                "A closure is:",
                ["A function with no return", "A function plus its lexical scope", "An object property", "A class method"],
                1,
                "A closure pairs a function with its surrounding variables."
            ),
            mcq(
                "Which keyword does NOT have its own this?",
                ["function", "method", "arrow", "constructor"],
                2,
                "Arrow functions inherit this from the enclosing scope."
            ),
            mcq(
                "ES6 classes are based on:",
                ["Functions only", "Prototypes", "Arrays", "Promises"],
                1,
                "Classes are syntactic sugar over the prototype system."
            ),
            mcq(
                "Temporal dead zone applies to:",
                ["var", "let and const", "function", "all variables"],
                1,
                "let and const are in TDZ until their declaration is reached."
            ),
            mcq(
                "Which operator is used for spread?",
                ["...", "***", "&&&", "###"],
                0,
                "The three dots ... are used for spread and rest."
            ),
        ],

        questions: [
            qa(
                "Explain scope and hoisting in JavaScript.",
                "Scope is the region of code where a variable is accessible. JavaScript has global scope, function scope and block scope. Variables declared with var have function scope, while those declared with let and const have block scope. Hoisting is JavaScript's behaviour of moving declarations to the top of their scope before execution. var declarations are hoisted and initialised with undefined, so accessing them before declaration gives undefined. let and const are hoisted but remain in the temporal dead zone until the declaration line is executed, so accessing them earlier throws a ReferenceError.",
                4
            ),
            qa(
                "What is a closure? Give an example.",
                "A closure is a function together with references to its surrounding lexical scope. It allows an inner function to access variables of its outer function even after the outer function has finished executing. For example, the function outer defines a variable count and returns an inner function. Each call to the inner function increments count and returns the new value. The variable count is preserved in the closure, so successive calls to the returned function keep counting from where they left off.",
                4
            ),
            qa(
                "Explain prototype based inheritance in JavaScript.",
                "Every JavaScript object has an internal [[Prototype]] property that points to another object or null. When a property is accessed on an object and not found, JavaScript looks up the chain of prototypes until it finds the property or reaches the end. This is the basis of inheritance. Methods are usually defined on the prototype so that all instances share the same copy, saving memory. ES6 classes provide a cleaner syntax on top of this prototype system.",
                4
            ),
            qa(
                "Differentiate between arrow functions and regular functions.",
                "Arrow functions, introduced in ES6, have a shorter syntax using the => token. They do not have their own this, arguments, super or new.target; instead they inherit these from the enclosing lexical scope. They cannot be used as constructors and throw a TypeError if used with new. Regular functions have their own this, can be used as constructors, and have their own arguments object. Arrow functions are best for short callbacks and methods that should not rebind this.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — Asynchronous JavaScript
========================================================= */

const asyncJavaScript = createTopic(
    "asynchronous-javascript",
    "Asynchronous JavaScript",

    [
        definition(
            "Asynchronous JavaScript",
            "A style of programming in which long running tasks such as network requests do not block the main thread; the program continues to run and is notified when the task completes."
        ),

        heading("Single Threaded Nature of JavaScript"),

        text(
            "JavaScript runs on a single thread. To handle long operations without freezing the UI, it uses an event loop along with callback queue and microtask queue. Asynchronous APIs let the browser perform the work and call back when done."
        ),

        heading("Callbacks"),

        definition(
            "Callback",
            "A function passed as an argument to another function, to be executed when the operation completes."
        ),

        code(
            `setTimeout(() => {
  console.log('Hello after 1 second');
}, 1000);

document.getElementById('btn').addEventListener('click', function() {
  console.log('Button clicked');
});
`,
            "javascript",
            "Callback examples"
        ),

        note(
            "Deeply nested callbacks lead to callback hell or pyramid of doom. Promises and async/await provide cleaner ways to handle asynchronous code.",
            "warning",
            "Callback Hell"
        ),

        heading("Promises"),

        definition(
            "Promise",
            "An object representing the eventual completion or failure of an asynchronous operation. It has three states: pending, fulfilled and rejected."
        ),

        code(
            `const fetchData = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const ok = true;
      if (ok) resolve('Data loaded');
      else    reject('Network error');
    }, 1000);
  });

fetchData()
  .then(result => console.log(result),
  .catch(err   => console.error(err),;
`,
            "javascript",
            "Promise example"
        ),

        heading("Promise Methods"),

        table(
            ["Method", "Description"],
            [
                ["then(onFulfilled)", "Called when promise is resolved"],
                ["catch(onRejected)", "Called when promise is rejected"],
                ["finally(onSettled)", "Called regardless of resolve or reject"],
                ["Promise.all([p1,p2])", "Waits for all; rejects if any rejects"],
                ["Promise.race([p1,p2])", "Resolves or rejects with the first one to settle"],
                ["Promise.allSettled([...])", "Waits for all; never rejects"],
            ]
        ),

        heading("Async and Await"),

        code(
            `async function getUser(id) {
  try {
    const response = await fetch('/api/users/' + id);
    if (!response.ok) throw new Error('HTTP ' + response.status);
    const user = await response.json();
    return user;
  } catch (err) {
    console.error('Failed:', err);
  }
}

getUser(1).then(u => console.log(u),;
`,
            "javascript",
            "async/await with try/catch"
        ),

        heading("Fetch API"),

        code(
            `fetch('https://api.example.com/data')
  .then(res => res.json(),
  .then(data => console.log(data),
  .catch(err => console.error(err),;

// async version
async function load() {
  const res  = await fetch('https://api.example.com/data');
  const data = await res.json();
  console.log(data);
}
`,
            "javascript",
            "Fetch API"
        ),

        heading("Event Loop and Task Queues"),

        list([
            "Call stack: tracks currently executing functions.",
            "Web APIs: handle timers, fetch, DOM events.",
            "Microtask queue: holds promise callbacks (then, catch, await).",
            "Callback queue (macrotask): holds setTimeout, setInterval, I/O.",
            "Event loop: pushes the next task to the stack when the stack is empty, microtasks first.",
        ]),

        keyPoints([
            "JavaScript is single threaded but supports async through the event loop.",
            "A promise represents the eventual result of an async operation.",
            "async functions return a promise.",
            "await pauses the async function until the promise settles.",
            "Microtasks (promises) run before macrotasks (timers).",
        ]),
    ],

    {
        summary:
            "Learn callbacks, promises, async/await, fetch API and the event loop in JavaScript.",
        minutes: 12,
        tags: ["async", "promise", "fetch", "event-loop", "important"],

        mcqs: [
            mcq(
                "A promise has how many states?",
                ["2", "3", "4", "5"],
                1,
                "A promise is pending, fulfilled or rejected."
            ),
            mcq(
                "Which keyword makes a function return a promise?",
                ["await", "async", "yield", "defer"],
                1,
                "An async function always returns a promise."
            ),
            mcq(
                "Which runs first, a promise then or a setTimeout?",
                ["setTimeout", "promise then", "Depends on browser", "Both same time"],
                1,
                "Microtasks (promises) are executed before macrotasks (timers)."
            ),
            mcq(
                "Fetch API is used for:",
                ["Local storage", "HTTP requests", "DOM manipulation", "Drawing"],
                1,
                "fetch makes HTTP requests and returns a promise."
            ),
            mcq(
                "Callback hell is solved by:",
                ["Loops", "Promises / async await", "If else", "Switch"],
                1,
                "Promises and async/await flatten nested callbacks."
            ),
            mcq(
                "Promise.all rejects when:",
                ["First promise resolves", "Any one promise rejects", "All resolve", "Never"],
                1,
                "Promise.all rejects as soon as one of the input promises rejects."
            ),
        ],

        questions: [
            qa(
                "Explain promises in JavaScript.",
                "A promise is an object that represents the eventual completion or failure of an asynchronous operation. It has three states: pending when the operation is still running, fulfilled when it succeeds, and rejected when it fails. The then method is used to handle the success case, catch for the failure, and finally for cleanup. Promises flatten nested callbacks and make asynchronous code easier to read.",
                4
            ),
            qa(
                "Differentiate between async/await and promises.",
                "Promises use then and catch chains to handle asynchronous results. async/await is built on top of promises and provides a cleaner syntax that looks like synchronous code. An async function always returns a promise, and the await keyword pauses the execution of the function until the awaited promise settles. Errors are handled using try/catch blocks. async/await is preferred for complex flows because it avoids long then chains.",
                4
            ),
            qa(
                "What is the event loop in JavaScript?",
                "The event loop is the mechanism that handles asynchronous operations in JavaScript despite its single threaded execution. The call stack runs the current function. When an asynchronous API like setTimeout or fetch is called, the browser performs the work in the background. When the work finishes, the callback is placed in the task queue. The event loop constantly checks whether the call stack is empty and, if so, pushes the next task from the microtask queue first and then the callback queue.",
                4
            ),
            qa(
                "Explain the Fetch API with an example.",
                "The Fetch API provides a modern way to make HTTP requests from the browser. It returns a promise that resolves to the Response object. The json method on the response is used to parse the body as JSON. For example, fetch('https://api.example.com/data') makes a GET request. The result is then parsed as JSON and logged. Errors such as network failure are caught by the catch method. Fetch has largely replaced the older XMLHttpRequest object.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — jQuery
========================================================= */

const jquery = createTopic(
    "jquery",
    "jQuery",

    [
        definition(
            "jQuery",
            "A fast, small and feature rich JavaScript library released in 2006 that simplifies HTML document traversal, event handling, animation and AJAX interactions."
        ),

        heading("Why jQuery?"),

        list([
            "Simplifies DOM manipulation with the $ function.",
            "Handles cross browser issues that existed in older browsers.",
            "Easy AJAX calls with $.ajax, $.get and $.post.",
            "Built in animation methods like fadeIn, slideUp, animate.",
            "Large ecosystem of plugins.",
        ]),

        heading("Including jQuery"),

        code(
            `<!-- From a CDN -->
<script
  src="https://code.jquery.com/jquery-3.7.1.min.js">
</script>

<!-- After this, $ and jQuery are available globally -->
`,
            "html",
            "jQuery CDN include"
        ),

        heading("Document Ready"),

        code(
            `$(document).ready(function() {
  console.log('DOM is ready');
});

// Shorthand
$(function() {
  $('p').css('color', 'red');
});
`,
            "javascript",
            "Document ready handler"
        ),

        heading("jQuery Selectors"),

        table(
            ["Selector", "Description"],
            [
                ["$('p')", "All <p> elements"],
                ["$('#id')", "Element with given id"],
                ["$('.class')", "Elements with given class"],
                ["$('ul li')", "All li inside ul"],
                ["$(':input')", "All input elements"],
                ["$('p:first')", "First p element"],
                ["$('tr:odd')", "Odd numbered rows"],
            ]
        ),

        heading("DOM Manipulation"),

        code(
            `// Get or set text and HTML
$('#title').text('New Title');
$('#box').html('<b>Bold</b>');

// CSS
$('p').css({ color: 'blue', fontSize: '18px' });

// Attributes
$('img').attr('src', 'pic.jpg');
$('a').removeAttr('target');

// Class manipulation
$('#item').addClass('active');
$('#item').removeClass('active');
$('#item').toggleClass('active');
`,
            "javascript",
            "DOM manipulation with jQuery"
        ),

        heading("Event Handling"),

        code(
            `$('#btn').click(function() {
  alert('Button clicked');
});

$('#name').on('input', function() {
  console.log($(this).val(),;
});

$('#form').on('submit', function(e) {
  e.preventDefault();
  console.log('Form submitted');
});
`,
            "javascript",
            "jQuery event handling"
        ),

        heading("Effects and Animation"),

        code(
            `$('#box').hide();
$('#box').show();
$('#box').toggle();
$('#box').fadeIn(500);
$('#box').fadeOut(500);
$('#box').slideUp();
$('#box').slideDown();

$('#box').animate(
  { width: '300px', opacity: 0.5 },
  1000
);
`,
            "javascript",
            "jQuery effects"
        ),

        heading("jQuery AJAX"),

        code(
            `$.ajax({
  url: '/api/users',
  type: 'GET',
  dataType: 'json',
  success: function(data) { console.log(data); },
  error:   function(xhr)  { console.error(xhr); }
});

// Shorthand
$.get('/api/users', data => console.log(data),;
$.post('/api/users', { name: 'Amit' }, res => console.log(res),;
`,
            "javascript",
            "jQuery AJAX methods"
        ),

        note(
            "jQuery dominated web development for over a decade. Today, modern browsers and frameworks have replaced most of its use cases. However, jQuery is still common in legacy projects and many WordPress themes.",
            "tip",
            "jQuery Today"
        ),

        heading("Chaining"),

        list([
            "Most jQuery methods return the jQuery object, allowing method chaining.",
            "Example: $('p').css('color', 'red').slideUp(500).slideDown(500);",
            "Improves readability and avoids storing intermediate results.",
        ]),

        keyPoints([
            "jQuery simplifies DOM, events, effects and AJAX.",
            "$ is the alias for jQuery.",
            "$(document).ready runs when the DOM is ready.",
            ".on, .click, .change handle events.",
            "$.ajax, $.get, $.post make HTTP requests.",
        ]),
    ],

    {
        summary:
            "Learn jQuery selectors, DOM manipulation, events, effects, AJAX and method chaining.",
        minutes: 12,
        tags: ["jquery", "dom", "ajax", "effects", "important"],

        mcqs: [
            mcq(
                "The jQuery symbol is:",
                ["#", "$", "@", "&"],
                1,
                "$ is the alias for jQuery."
            ),
            mcq(
                "$(document).ready is used to:",
                ["Load CSS", "Run code when DOM is ready", "Send a request", "Define a class"],
                1,
                "It runs the code when the DOM is fully loaded."
            ),
            mcq(
                "Which jQuery method hides an element?",
                [".display", ".hide", ".invisible", ".remove"],
                1,
                ".hide() makes the element invisible."
            ),
            mcq(
                "$.get is used for:",
                ["POST request", "GET request", "PUT request", "DELETE request"],
                1,
                "$.get is a shorthand for an AJAX GET request."
            ),
            mcq(
                "Which is the correct jQuery selector for id='x'?",
                ["$('x')", "$('#x')", "$('.x')", "$(x)"],
                1,
                "Hash # denotes id, just like CSS."
            ),
            mcq(
                "Method chaining is possible because jQuery methods return:",
                ["DOM element", "jQuery object", "Array", "Promise"],
                1,
                "Most methods return the jQuery object, enabling chaining."
            ),
        ],

        questions: [
            qa(
                "What is jQuery? Why was it popular?",
                "jQuery is a fast, small JavaScript library released in 2006 that simplifies HTML document traversal and manipulation, event handling, animation and AJAX. It was popular because it greatly reduced the amount of code needed for common tasks, handled cross browser inconsistencies in older browsers, and provided a uniform API. Today most of its features are available natively in modern JavaScript, but jQuery is still common in legacy projects.",
                4
            ),
            qa(
                "Explain jQuery event handling with examples.",
                "jQuery provides simple methods for events. The click method runs a function when an element is clicked. The on method is more flexible and can handle multiple events and delegated events. For example, $('#btn').click(function() { alert('Clicked'); }) attaches a click handler. The on method supports event delegation using a second argument that acts as the container, which is useful for elements added dynamically.",
                4
            ),
            qa(
                "Explain jQuery AJAX methods.",
                "jQuery offers several AJAX methods. The low level $.ajax takes a configuration object with url, type, dataType, success and error. The shorthand $.get(url, callback) makes a GET request and $.post(url, data, callback) makes a POST request. Internally they all use the XMLHttpRequest object. jQuery AJAX returns a jqXHR object that implements the Promise interface, so then and catch can be used.",
                4
            ),
            qa(
                "Differentiate between .text() and .html() in jQuery.",
                "The .text() method returns the plain text content of the selected element with HTML tags stripped, while .html() returns the full HTML including tags. When used as a setter, .text('hello') sets the text and escapes any HTML, while .html('<b>hello</b>') sets the inner HTML and renders the tags. Use .text for safe user input and .html only when the source is trusted.",
                3
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — AJAX and JSON
========================================================= */

const ajaxJson = createTopic(
    "ajax-and-json",
    "AJAX and JSON",

    [
        definition(
            "AJAX",
            "Asynchronous JavaScript and XML, a technique for sending and receiving data from a server without refreshing the page, leading to faster and more interactive web applications."
        ),

        heading("How AJAX Works"),

        list([
            "JavaScript creates an XMLHttpRequest object.",
            "The object sends a request to the server in the background.",
            "The server processes the request and returns a response (XML, JSON, plain text or HTML).",
            "JavaScript updates the page using the response, without a full reload.",
        ]),

        heading("XMLHttpRequest (XHR) Object"),

        code(
            `const xhr = new XMLHttpRequest();
xhr.open('GET', '/api/data', true);
xhr.onload = function() {
  if (xhr.status === 200) {
    const data = JSON.parse(xhr.responseText);
    console.log(data);
  } else {
    console.error('Error:', xhr.status);
  }
};
xhr.onerror = function() { console.error('Network error'); };
xhr.send();
`,
            "javascript",
            "XMLHttpRequest GET example"
        ),

        heading("AJAX using Fetch API"),

        code(
            `fetch('/api/data')
  .then(res => {
    if (!res.ok) throw new Error('HTTP ' + res.status);
    return res.json();
  })
  .then(data => console.log(data),
  .catch(err => console.error(err),;
`,
            "javascript",
            "Fetch API with promise"
        ),

        heading("Synchronous vs Asynchronous Request"),

        table(
            ["Sync", "Async"],
            [
                ["Third parameter of open is false", "Third parameter is true (default)"],
                ["Page freezes until response", "Page remains responsive"],
                ["onreadystatechange used", "onload or .then used"],
                ["Rarely used today", "Standard practice"],
            ]
        ),

        heading("Ready States of XHR"),

        table(
            ["State", "Value", "Description"],
            [
                ["UNSENT", "0", "Request not initialised"],
                ["OPENED", "1", "open() called"],
                ["HEADERS_RECEIVED", "2", "Headers received"],
                ["LOADING", "3", "Response is downloading"],
                ["DONE", "4", "Response complete"],
            ]
        ),

        note(
            "Always check xhr.readyState === 4 and xhr.status === 200 before using the response. Also handle network errors through the onerror event or .catch in fetch.",
            "tip",
            "Safe AJAX"
        ),

        heading("JSON"),

        definition(
            "JSON",
            "JavaScript Object Notation, a lightweight text format for data exchange. It is easy for humans to read and write and easy for machines to parse."
        ),

        code(
            `{
  "name": "Amit",
  "age": 21,
  "skills": ["HTML", "CSS", "JS"],
  "address": {
    "city": "Surat",
    "pin": 395007
  },
  "isStudent": true,
  "graduationYear": null
}
`,
            "json",
            "Sample JSON object"
        ),

        heading("JSON Syntax Rules"),

        list([
            "Data is in name/value pairs.",
            "Data is separated by commas.",
            "Objects are enclosed in curly braces.",
            "Arrays are enclosed in square brackets.",
            "Strings must be in double quotes.",
            "JSON does NOT support comments or functions.",
        ]),

        heading("JSON Methods in JavaScript"),

        code(
            `const obj = { name: 'Amit', age: 21 };
const str = JSON.stringify(obj);
console.log(str);  // {"name":"Amit","age":21}

const back = JSON.parse(str);
console.log(back.name);  // Amit
`,
            "javascript",
            "JSON parse and stringify"
        ),

        heading("AJAX Applications"),

        list([
            "Live search suggestions as the user types.",
            "Form validation without page reload.",
            "Auto refresh of data such as scores and stock prices.",
            "Infinite scrolling on social media.",
            "Chat applications and notifications.",
        ]),

        heading("Same Origin Policy and CORS"),

        list([
            "By default, AJAX can only request the same domain, protocol and port.",
            "Cross Origin Resource Sharing (CORS) lets servers allow other domains.",
            "Server must send Access-Control-Allow-Origin header to permit requests.",
            "Without CORS, browsers block the request for security reasons.",
        ]),

        keyPoints([
            "AJAX allows data exchange without page reload.",
            "XHR is the classic API; Fetch is the modern alternative.",
            "Always check status and handle errors.",
            "JSON is the most common data format today.",
            "CORS is required to make AJAX calls to other domains.",
        ]),
    ],

    {
        summary:
            "Understand AJAX, XMLHttpRequest, Fetch API, JSON format and CORS.",
        minutes: 12,
        tags: ["ajax", "json", "fetch", "cors", "important"],

        mcqs: [
            mcq(
                "AJAX stands for:",
                ["Async JS And XML", "Active JS And XHTML", "Async JSON And XML", "Asynchronous Java And XML"],
                0,
                "AJAX = Asynchronous JavaScript and XML."
            ),
            mcq(
                "Which method parses a JSON string?",
                ["JSON.convert", "JSON.parse", "JSON.to", "parse.JSON"],
                1,
                "JSON.parse converts a JSON string to a JavaScript object."
            ),
            mcq(
                "Which is the modern alternative to XHR?",
                ["fetch", "$.get", "axios", "request"],
                0,
                "Fetch API is the modern way to make HTTP requests in browsers."
            ),
            mcq(
                "CORS is used to:",
                ["Compress responses", "Allow cross domain requests", "Encrypt data", "Cache responses"],
                1,
                "CORS allows servers to permit requests from other origins."
            ),
            mcq(
                "JSON keys must be in:",
                ["Single quotes", "Double quotes", "Backticks", "No quotes"],
                1,
                "JSON requires double quotes around keys and string values."
            ),
            mcq(
                "Ready state DONE of XHR has value:",
                ["1", "2", "3", "4"],
                3,
                "readyState 4 means the request is complete."
            ),
        ],

        questions: [
            qa(
                "Explain AJAX with its advantages.",
                "AJAX stands for Asynchronous JavaScript and XML. It is a technique for sending and receiving data from a server without reloading the whole page. The browser creates an XMLHttpRequest or fetch call, the server responds with data, and JavaScript updates only the required part of the page. Advantages are faster response, smoother user experience, less bandwidth and the ability to build highly interactive applications like live search, auto save and chat.",
                4
            ),
            qa(
                "Differentiate between XMLHttpRequest and Fetch.",
                "XMLHttpRequest is the original API for AJAX. It is event based and uses callbacks, which can lead to nested code. The Fetch API is the modern alternative that returns promises, making it easier to use with then and catch and with async/await. Fetch also has a simpler and more powerful API, supports streaming and integrates well with Service Workers. Both are still used today, but Fetch is preferred in new code.",
                4
            ),
            qa(
                "Explain JSON with its rules.",
                "JSON stands for JavaScript Object Notation. It is a lightweight text format for data interchange. The rules are: data is in name/value pairs, objects use curly braces, arrays use square brackets, strings must be in double quotes, and the syntax does not support comments or functions. JSON is widely used in REST APIs and is parsed and generated in JavaScript using JSON.parse and JSON.stringify.",
                4
            ),
            qa(
                "What is CORS and why is it needed?",
                "CORS, or Cross Origin Resource Sharing, is a mechanism that allows a web page to make requests to a different domain than the one that served the page. By default, browsers block such requests for security reasons. The server must explicitly allow them by sending headers like Access-Control-Allow-Origin. Without CORS, AJAX calls to a different API server would be blocked by the browser.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 5 — Bootstrap 5 and Responsive Web Design
========================================================= */

const bootstrap5 = createTopic(
    "bootstrap5-and-responsive-design",
    "Bootstrap 5 and Responsive Design",

    [
        definition(
            "Bootstrap",
            "An open source front end framework for building responsive, mobile first websites using HTML, CSS and JavaScript components."
        ),

        heading("Bootstrap 5 Features"),

        list([
            "No dependency on jQuery (unlike Bootstrap 3 and 4).",
            "Uses CSS custom properties for theming.",
            "Improved grid system based on flexbox.",
            "New utility classes for spacing, display and flex.",
            "Offcanvas component for sidebars.",
            "Improved form controls and accordion.",
        ]),

        heading("Including Bootstrap 5"),

        code(
            `<!-- CSS -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
/>

<!-- JS bundle (with Popper) -->
<script
  src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js">
</script>
`,
            "html",
            "Bootstrap 5 CDN links"
        ),

        heading("Grid System"),

        table(
            ["Class", "Breakpoint", "Width"],
            [
                ["col-", "< 576 px", "Extra small"],
                ["col-sm-", "= 576 px", "Small"],
                ["col-md-", "= 768 px", "Medium"],
                ["col-lg-", "= 992 px", "Large"],
                ["col-xl-", "= 1200 px", "Extra large"],
                ["col-xxl-", "= 1400 px", "Extra extra large"],
            ]
        ),

        code(
            `<div class="container">
  <div class="row">
    <div class="col-md-6">Left half on medium+</div>
    <div class="col-md-6">Right half on medium+</div>
  </div>
  <div class="row mt-3">
    <div class="col-lg-4">1/3 on large+</div>
    <div class="col-lg-4">1/3 on large+</div>
    <div class="col-lg-4">1/3 on large+</div>
  </div>
</div>
`,
            "html",
            "Bootstrap grid example"
        ),

        heading("Responsive Breakpoints"),

        list([
            "Bootstrap is mobile first: base styles target small screens.",
            "Use sm, md, lg, xl, xxl to override at larger screens.",
            "Use d-none d-md-block to hide on small and show on medium+.",
            "Use g-3 for gutters of 1rem between columns.",
        ]),

        heading("Common Bootstrap Components"),

        table(
            ["Component", "Class", "Use"],
            [
                ["Navbar", "navbar navbar-expand-lg", "Top navigation bar"],
                ["Card", "card", "Content box with header and body"],
                ["Button", "btn btn-primary", "Styled button"],
                ["Alert", "alert alert-success", "Notification message"],
                ["Modal", "modal", "Dialog box"],
                ["Form", "form-control", "Input fields"],
                ["Table", "table table-striped", "Styled table"],
                ["Carousel", "carousel slide", "Image slider"],
                ["Accordion", "accordion", "Collapsible sections"],
                ["Offcanvas", "offcanvas", "Sidebar drawer"],
            ]
        ),

        code(
            `<button class="btn btn-primary" type="button">
  Click me
</button>

<div class="card" style="width: 18rem;">
  <img src="pic.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Title</h5>
    <p class="card-text">Some text.</p>
    <a href="#" class="btn btn-primary">Go</a>
  </div>
</div>
`,
            "html",
            "Button and card"
        ),

        heading("Utility Classes"),

        list([
            "Spacing: m-2 (margin), p-2 (padding), mt-3 (top margin), px-4 (horizontal padding).",
            "Display: d-flex, d-grid, d-none, d-block, d-md-flex.",
            "Flexbox: justify-content-center, align-items-center, flex-column.",
            "Text: text-center, text-uppercase, fw-bold, text-primary.",
            "Background: bg-light, bg-dark, bg-success.",
            "Sizing: w-50, h-100, mw-auto.",
        ]),

        heading("Responsive Images and Embeds"),

        code(
            `<img src="pic.jpg" class="img-fluid rounded" alt="...">
<img src="pic.jpg" class="img-thumbnail" alt="...">

<div class="ratio ratio-16x9">
  <iframe src="https://youtube.com/embed/xyz"></iframe>
</div>
`,
            "html",
            "Responsive images and 16:9 video"
        ),

        heading("Bootstrap Forms"),

        code(
            `<form>
  <div class="mb-3">
    <label class="form-label">Email</label>
    <input type="email" class="form-control" required />
  </div>
  <div class="mb-3">
    <label class="form-label">Password</label>
    <input type="password" class="form-control" required />
  </div>
  <button class="btn btn-primary">Submit</button>
</form>
`,
            "html",
            "Bootstrap form"
        ),

        heading("Customising Bootstrap"),

        list([
            "Override Sass variables before importing Bootstrap.",
            "Use only the modules needed to keep the bundle small.",
            "Use utility classes first, custom CSS only when needed.",
        ]),

        keyPoints([
            "Bootstrap 5 does not require jQuery.",
            "Grid has 12 columns and 6 breakpoints.",
            "Use col-md-X, col-lg-X for responsive widths.",
            "Components include navbar, card, modal and carousel.",
            "Utility classes cover spacing, display, flex and text.",
        ]),
    ],

{
    summary:
    "Master Bootstrap 5 grid, components, utility classes and responsive design principles.",
        minutes: 13,
            tags: ["bootstrap", "responsive", "grid", "components", "important"],

                mcqs: [
                    mcq(
                        "Bootstrap 5 is based on which CSS technology?",
                        ["Float", "Flexbox", "Grid", "Table"],
                        1,
                        "Bootstrap 5 grid uses flexbox."
                    ),
                    mcq(
                        "Bootstrap 5 does NOT depend on:",
                        ["CSS", "JS", "jQuery", "HTML"],
                        2,
                        "Bootstrap 5 dropped the jQuery dependency."
                    ),
                    mcq(
                        "A 12 column row with 3 equal columns uses:",
                        ["col-2", "col-3", "col-4", "col-6"],
                        2,
                        "Three equal columns of 4 each fill 12 columns."
                    ),
                    mcq(
                        "Which class makes an image responsive?",
                        ["img-fluid", "img-responsive", "img-scale", "fluid-img"],
                        0,
                        "img-fluid makes the image scale with its parent."
                    ),
                    mcq(
                        "Breakpoint md in Bootstrap applies to width:",
                        ["= 576 px", "= 768 px", "= 992 px", "= 1200 px"],
                        1,
                        "md breakpoint is medium and starts at 768 px."
                    ),
                    mcq(
                        "Which class centres text?",
                        ["text-center", "centre", "align-middle", "text-md"],
                        0,
                        "text-center aligns text to the centre horizontally."
                    ),
                ],

                    questions: [
                        qa(
                            "Explain the Bootstrap 5 grid system.",
                            "The Bootstrap grid is based on a 12 column layout and is mobile first. The container holds rows, and each row contains up to 12 columns. The width of a column at different screen sizes is controlled by the prefixes col-, col-sm-, col-md-, col-lg-, col-xl- and col-xxl-. For example, col-md-6 means the column takes half the row width on medium screens and above. Rows are wrapped in a .container for fixed width or .container-fluid for full width.",
                            4
                        ),
                        qa(
                            "How is Bootstrap 5 different from Bootstrap 4?",
                            "Bootstrap 5 dropped the jQuery dependency and now uses vanilla JavaScript for its interactive components. It removed support for Internet Explorer and switched to CSS custom properties for theming. The grid is still 12 columns but uses flexbox throughout, and there are new utility classes for spacing, display and flex. Components like offcanvas, accordion and toasts have been added or improved.",
                            4
                        ),
                        qa(
                            "Explain utility classes in Bootstrap 5.",
                            "Utility classes are single purpose classes that apply one CSS property. For example, m-2 sets margin, p-3 sets padding, d-flex makes an element a flex container, text-center centres text, fw-bold makes text bold, and bg-light sets a light background. Utilities can be combined with breakpoint prefixes such as d-md-none to hide on medium and above, or px-lg-5 to add large horizontal padding only on large screens. They let developers build complex layouts without writing custom CSS.",
                            4
                        ),
                        qa(
                            "Differentiate between container and container-fluid.",
                            "container is a fixed width responsive container; its maximum width changes with the viewport but it does not span the full width. container-fluid is always 100 percent wide regardless of the screen size. Use container when the content should have a max width for readability, and container-fluid when the design needs to span the full width, such as full bleed banners or hero sections.",
                            3
                        ),
                    ],
  }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit1Topics = [
    advancedJavaScript,
    asyncJavaScript,
    jquery,
    ajaxJson,
    bootstrap5,
];
