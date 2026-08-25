/* =========================================================
   BCA � SEM 2 � Web Application Development - II
   UNIT 2 � React Basics, Node.js and Full Stack Web Development
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
   TOPIC 1 � Introduction to React
========================================================= */

const introductionToReact = createTopic(
    "introduction-to-react",
    "Introduction to React",

    [
        definition(
            "React",
            "An open source JavaScript library developed by Facebook in 2013 for building user interfaces, especially single page applications, using a component based approach."
        ),

        heading("Why React?"),

        list([
            "Component based: UI is built from small, reusable pieces.",
            "Declarative: you describe what the UI should look like, not how to change it.",
            "Virtual DOM: React updates only the parts of the page that changed.",
            "One way data flow: data flows from parent to child through props.",
            "Large ecosystem and community.",
            "Can be used for web, mobile (React Native) and desktop (Electron).",
        ]),

        heading("Setting Up a React Project"),

        table(
            ["Tool", "Command", "Description"],
            [
                ["Create React App", "npx create-react-app myapp", "Official starter"],
                ["Vite", "npm create vite@latest myapp -- --template react", "Fast modern bundler"],
                ["Next.js", "npx create-next-app@latest myapp", "Full stack framework"],
            ]
        ),

        heading("JSX"),

        definition(
            "JSX",
            "JavaScript XML, a syntax extension that lets you write HTML like code inside JavaScript. It is transformed into React.createElement calls at build time."
        ),

        code(
            `const element = <h1>Hello, React!</h1>;

const item = (
  <ul>
    <li>Apple</li>
    <li>Mango</li>
  </ul>
);
`,
            "jsx",
            "JSX examples"
        ),

        note(
            "JSX is not HTML. It must return a single parent element, class is written as className, and JavaScript expressions are written inside curly braces.",
            "warning",
            "JSX vs HTML"
        ),

        heading("Components"),

        definition(
            "Component",
            "A reusable, self contained piece of UI. Components can be functions (functional components) or classes (class components, now rarely used)."
        ),

        code(
            `function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Amit" />
      <Welcome name="Riya" />
    </div>
  );
}

export default App;
`,
            "jsx",
            "Functional component"
        ),

        heading("Props and State"),

        table(
            ["Concept", "Description", "Mutable?"],
            [
                ["Props", "Inputs passed from parent to child", "Read only"],
                ["State", "Data owned and managed by the component", "Yes, via setter"],
            ]
        ),

        heading("useState Hook"),

        code(
            `import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
`,
            "jsx",
            "useState example"
        ),

        heading("Lists and Keys"),

        code(
            `const fruits = ['Apple', 'Mango', 'Banana'];

function FruitList() {
  return (
    <ul>
      {fruits.map((f, i) => (
        <li key={i}>{f}</li>
      ),}
    </ul>
  );
}
`,
            "jsx",
            "Rendering a list"
        ),

        heading("Event Handling"),

        code(
            `function Form() {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Hello, ' + name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button>Submit</button>
    </form>
  );
}
`,
            "jsx",
            "Form with event handling"
        ),

        heading("Conditional Rendering"),

        code(
            `function Greeting({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please log in</h1>}
    </div>
  );
}
`,
            "jsx",
            "Conditional rendering with ternary"
        ),

        keyPoints([
            "React is a library, not a framework.",
            "JSX lets you write HTML inside JavaScript.",
            "Functional components are the modern way to write components.",
            "useState adds local state to a function component.",
            "Props are read only, state is mutable through setters.",
        ]),
    ],

{
    summary:
    "Understand React, JSX, components, props, state, lists, events and conditional rendering.",
        minutes: 12,
            tags: ["react", "jsx", "components", "state", "important"],

                mcqs: [
                    mcq(
                        "React was developed by:",
                        ["Google", "Facebook", "Microsoft", "Twitter"],
                        1,
                        "React was created by Facebook in 2013."
                    ),
                    mcq(
                        "JSX is transformed into:",
                        ["HTML", "React.createElement calls", "XML", "JSON"],
                        1,
                        "Babel transforms JSX into React.createElement calls."
                    ),
                    mcq(
                        "Which is true about props?",
                        ["Mutable", "Read only", "Private to child", "Only strings"],
                        1,
                        "Props are read only inputs from parent to child."
                    ),
                    mcq(
                        "useState returns:",
                        ["Just the value", "Value and a setter", "Just a setter", "An object"],
                        1,
                        "useState returns the current value and a function to update it."
                    ),
                    mcq(
                        "Key prop is used for:",
                        ["Styling", "Identifying list items", "Hiding elements", "Routing"],
                        1,
                        "Keys help React identify which list items changed."
                    ),
                    mcq(
                        "Which is used to update state?",
                        ["Direct assignment: count = 5", "setCount(5)", "count = setCount(5)", "useState.assign"],
                        1,
                        "Always use the setter function returned by useState."
                    ),
                ],

                    questions: [
                        qa(
                            "What is React? Why is it popular?",
                            "React is an open source JavaScript library developed by Facebook for building user interfaces, especially single page applications. It is popular because it uses a component based architecture that promotes reusability, a virtual DOM that makes updates fast, declarative syntax that makes code easier to read, and one way data flow that makes apps easier to debug. It also has a huge ecosystem and community.",
                            4
                        ),
                        qa(
                            "Explain JSX with its features.",
                            "JSX is a syntax extension to JavaScript that allows writing HTML like code inside JavaScript. It is not understood by browsers directly and is transformed by a compiler such as Babel into React.createElement calls. JSX must return a single parent element, uses className instead of class, and allows embedding any JavaScript expression inside curly braces. It makes React components much easier to read and write.",
                            4
                        ),
                        qa(
                            "Differentiate between props and state.",
                            "Props are inputs passed from a parent component to a child component. They are read only inside the child; the child cannot change them. State is data that belongs to the component itself and can change over time, usually as a result of user interaction or network responses. State is updated using the setter function returned by useState, which triggers a re render. Together, props and state form the data model of a React application.",
                            4
                        ),
                        qa(
                            "Explain useState with an example.",
                            "useState is a React hook that adds local state to a function component. It takes the initial value and returns a pair: the current value and a setter function to update it. For example, const [count, setCount] = useState(0) creates a state variable count initialised to 0. Calling setCount(count + 1) updates the value and re renders the component. The setter can also accept a function that receives the previous value, which is safer when updates depend on the old value.",
                            4
                        ),
                    ],
  }
);

/* =========================================================
   TOPIC 2 � React Hooks and Router
========================================================= */

const reactHooks = createTopic(
    "react-hooks-and-router",
    "React Hooks and Router",

    [
        heading("Common Built in Hooks"),

        table(
            ["Hook", "Purpose"],
            [
                ["useState", "Add state to a function component"],
                ["useEffect", "Run side effects after render"],
                ["useContext", "Consume a React context"],
                ["useRef", "Hold a mutable value or a reference to a DOM element"],
                ["useMemo", "Memoise an expensive computed value"],
                ["useCallback", "Memoise a function reference"],
                ["useReducer", "Manage complex state with a reducer function"],
            ]
        ),

        heading("useEffect Hook"),

        definition(
            "useEffect",
            "A hook that runs side effects such as data fetching, subscriptions or manual DOM changes after the component renders."
        ),

        code(
            `import { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json(),
      .then(data => setUsers(data),;
  }, []);  // empty array means run once

  return (
    <ul>
      {users.map(u => <li key={u.id}>{u.name}</li>)}
    </ul>
  );
}
`,
            "jsx",
            "useEffect with fetch"
        ),

        heading("Cleanup Function in useEffect"),

        code(
            `useEffect(() => {
  const id = setInterval(() => {
    console.log('tick');
  }, 1000);

  return () => clearInterval(id);   // cleanup
}, []);
`,
            "jsx",
            "Effect with cleanup"
        ),

        heading("useContext"),

        code(
            `const ThemeContext = React.createContext('light');

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  const theme = useContext(ThemeContext);
  return <div className={theme}>Theme is {theme}</div>;
}
`,
            "jsx",
            "useContext example"
        ),

        heading("useRef"),

        list([
            "Holds a mutable value across renders without triggering a re render.",
            "Used to access DOM elements directly.",
            "Example: const inputRef = useRef(null); inputRef.current.focus();",
        ]),

        heading("Custom Hooks"),

        text(
            "A custom hook is a JavaScript function whose name starts with use and that may call other hooks. It allows reusing stateful logic between components."
        ),

        code(
            `function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return width;
}
`,
            "javascript",
            "Custom hook for window width"
        ),

        heading("React Router"),

        definition(
            "React Router",
            "The standard routing library for React. It maps URL paths to components, enabling navigation between pages in a single page application."
        ),

        code(
            `import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/"       element={<Home />} />
        <Route path="/about"  element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*"       element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
`,
            "jsx",
            "React Router v6 setup"
        ),

        heading("Route Parameters"),

        code(
            `import { useParams } from 'react-router-dom';

function User() {
  const { id } = useParams();
  return <h1>User ID: {id}</h1>;
}

<Route path="/user/:id" element={<User />} />
`,
            "jsx",
            "Route parameters"
        ),

        keyPoints([
            "useEffect runs after render and is used for side effects.",
            "Empty dependency array means effect runs only once.",
            "useContext avoids prop drilling.",
            "useRef holds mutable values without re render.",
            "React Router provides client side navigation.",
        ]),
    ],

    {
        summary:
    "Learn the most important React hooks and how to set up routing for a single page application.",
        minutes: 12,
            tags: ["react", "hooks", "router", "useEffect", "important"],

                mcqs: [
                    mcq(
                        "useEffect is used for:",
                        ["Styling", "Side effects", "Routing", "State only"],
                        1,
                        "useEffect runs side effects after render."
                    ),
                    mcq(
                        "useEffect with empty array runs:",
                        ["Every render", "Only once", "Twice", "Never"],
                        1,
                        "Empty dependency array means run once after first render."
                    ),
                    mcq(
                        "useRef is used to:",
                        ["Update state", "Hold a mutable value", "Make API calls", "Add styles"],
                        1,
                        "useRef holds a mutable value across renders without re render."
                    ),
                    mcq(
                        "Which is used for routing in React?",
                        ["react-router-dom", "react-router", "next/router", "express"],
                        0,
                        "react-router-dom is the standard routing library."
                    ),
                    mcq(
                        "useContext avoids:",
                        ["Re render", "Prop drilling", "Routing", "Styling"],
                        1,
                        "useContext avoids passing props through many levels."
                    ),
                    mcq(
                        "Cleanup function in useEffect is returned:",
                        ["From the component", "From the effect", "From JSX", "Never"],
                        1,
                        "The cleanup function is returned by the effect itself."
                    ),
                ],

                    questions: [
                        qa(
                            "Explain useEffect with its dependency array.",
                            "useEffect is a hook that runs side effects after render. The first argument is the effect function, and the second is the dependency array. If the array is empty, the effect runs only once after the first render. If the array contains values, the effect runs whenever any of those values change. The effect can return a cleanup function that runs before the next effect or before the component unmounts, which is used for clearing timers, event listeners and subscriptions.",
                            4
                        ),
                        qa(
                            "What is a custom hook? Give an example.",
                            "A custom hook is a JavaScript function whose name starts with use and that may call other React hooks. It allows extracting and reusing stateful logic between multiple components. For example, a useWindowWidth hook can be created to track the current width of the window. Inside the function, useState holds the width and useEffect adds a resize event listener. The hook can be reused in any component that needs to react to the window size.",
                            4
                        ),
                        qa(
                            "Explain React Router with an example.",
                            "React Router is the standard library for client side routing in React applications. The BrowserRouter component wraps the application. Inside it, the Routes component holds Route children. Each Route maps a path to a component, for example path='/' to Home and path='/about' to About. The Link component is used for navigation without a full page reload. URL parameters can be read using the useParams hook.",
                            4
                        ),
                        qa(
                            "Differentiate between useRef and useState.",
                            "useState returns a value and a setter; updating the value triggers a re render of the component. useRef returns an object with a mutable current property; changing it does not trigger a re render. useState is used for data that affects what the user sees, such as form inputs and counters. useRef is used for values that should persist between renders without affecting the UI, such as timers, previous values and direct references to DOM elements.",
                            4
                        ),
                    ],
  }
);

/* =========================================================
   TOPIC 3 � Introduction to Node.js
========================================================= */

const nodejs = createTopic(
    "introduction-to-nodejs",
    "Introduction to Node.js",

    [
        definition(
            "Node.js",
            "An open source, cross platform JavaScript runtime built on Chrome's V8 engine that allows JavaScript to be executed outside the browser, mainly on the server."
        ),

        heading("Features of Node.js"),

        list([
            "Asynchronous and event driven.",
            "Very fast because of V8 engine.",
            "Single threaded but highly scalable.",
            "NPM (Node Package Manager) with millions of packages.",
            "Same language (JavaScript) for both client and server.",
        ]),

        heading("Installing Node.js"),

        code(
            `# Check versions
node -v
npm -v

# Run a script
node app.js

# Initialise a project
npm init -y

# Install a package
npm install express
`,
            "bash",
            "Basic Node.js commands"
        ),

        heading("Node.js Architecture"),

        code(
            `JavaScript code
      ?
Node.js APIs
      ?
  libuv (event loop, thread pool)
      ?
  Operating System
`,
            "text",
            "Node.js architecture"
        ),

        note(
            "Node.js is single threaded for JavaScript code, but heavy I/O is delegated to libuv which uses a thread pool in the background. This is why Node handles thousands of concurrent connections efficiently.",
            "tip",
            "Threading Model"
        ),

        heading("Modules in Node.js"),

        table(
            ["Type", "Syntax", "Description"],
            [
                ["Core", "require('fs')", "Built into Node"],
                ["Local", "require('./math')", "Your own files"],
                ["Third party", "require('express')", "Installed via npm"],
                ["ES modules", "import x from 'x'", "Modern syntax"],
            ]
        ),

        code(
            `// math.js
function add(a, b) { return a + b; }
module.exports = { add };

// app.js
const { add } = require('./math');
console.log(add(2, 3),;  // 5
`,
            "javascript",
            "CommonJS module"
        ),

        heading("Creating a Web Server"),

        code(
            `const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from Node.js');
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
`,
            "javascript",
            "Node HTTP server"
        ),

        heading("NPM"),

        definition(
            "NPM",
            "Node Package Manager, the default package manager for Node.js. It hosts the largest ecosystem of open source libraries in the world."
        ),

        list([
            "npm init creates package.json.",
            "npm install <pkg> installs a package and adds it to dependencies.",
            "npm install --save-dev <pkg> installs as a dev dependency.",
            "package.json lists all dependencies and scripts.",
            "package-lock.json locks the exact version tree.",
        ]),

        heading("File System Module (fs)"),

        code(
            `const fs = require('fs');

// Read a file
fs.readFile('data.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

// Write a file
fs.writeFile('out.txt', 'Hello', err => {
  if (err) throw err;
  console.log('Saved');
});
`,
            "javascript",
            "fs module"
        ),

        heading("Event Emitter"),

        code(
            `const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('greet', name => {
  console.log('Hello, ' + name);
});

emitter.emit('greet', 'Amit');
`,
            "javascript",
            "Event emitter"
        ),

        keyPoints([
            "Node.js runs JavaScript on the server using the V8 engine.",
            "It is single threaded but uses an event driven non blocking model.",
            "NPM is the default package manager.",
            "Core modules include http, fs, path and events.",
            "CommonJS uses require and module.exports.",
        ]),
    ],

    {
        summary:
    "Understand Node.js architecture, modules, npm, file system and basic HTTP server.",
        minutes: 11,
            tags: ["nodejs", "npm", "modules", "server", "important"],

                mcqs: [
                    mcq(
                        "Node.js is built on which engine?",
                        ["SpiderMonkey", "V8", "Chakra", "Nashorn"],
                        1,
                        "Node.js uses the V8 engine from Google Chrome."
                    ),
                    mcq(
                        "Which command installs an npm package?",
                        ["node install", "npm add", "npm install", "pkg install"],
                        2,
                        "npm install <package> installs a package locally."
                    ),
                    mcq(
                        "Node.js is:",
                        ["Multi threaded", "Single threaded with event loop", "Pure blocking", "Only for browsers"],
                        1,
                        "Node is single threaded but uses an event loop for concurrency."
                    ),
                    mcq(
                        "CommonJS exports use:",
                        ["export default", "module.exports", "return", "export const"],
                        1,
                        "CommonJS uses module.exports to expose values."
                    ),
                    mcq(
                        "Which is a core module of Node?",
                        ["express", "react", "fs", "axios"],
                        2,
                        "fs (file system) is a core module bundled with Node."
                    ),
                    mcq(
                        "The package.json file contains:",
                        ["Only source code", "Dependencies and scripts", "CSS", "Images"],
                        1,
                        "package.json lists dependencies, scripts and project metadata."
                    ),
                ],

                    questions: [
                        qa(
                            "What is Node.js? Why is it used?",
                            "Node.js is an open source, cross platform JavaScript runtime built on the V8 engine of Chrome. It allows JavaScript to run outside the browser, mainly on the server. It is used because it is fast, asynchronous, event driven and single threaded, allowing it to handle thousands of concurrent connections efficiently. It also has NPM, the largest package manager, and lets developers use the same language on both the client and the server.",
                            4
                        ),
                        qa(
                            "Explain the Node.js event loop.",
                            "The event loop is the heart of Node.js. When a request comes in, it is processed asynchronously. If a long running task such as a database call is needed, Node registers a callback and continues to process other requests. When the task finishes, the callback is placed in the event queue. The event loop continuously checks the call stack and, when empty, takes the next callback from the queue and executes it. This allows Node to handle many requests without blocking.",
                            4
                        ),
                        qa(
                            "What is NPM? List its common commands.",
                            "NPM is the default package manager for Node.js and the largest software registry in the world. Common commands are npm init to create a package.json file, npm install to install all dependencies listed in package.json, npm install <package> to install a specific package, npm uninstall <package> to remove it, and npm start to run the start script defined in package.json.",
                            4
                        ),
                        qa(
                            "How do you create a simple HTTP server in Node.js?",
                            "Import the http core module using require('http'). Call http.createServer with a callback that takes request and response objects. Inside the callback, set the response headers using res.writeHead and end the response using res.end with the body. Finally call server.listen with a port number and a callback that runs when the server is ready. The server can then be accessed at http://localhost:PORT.",
                            4
                        ),
                    ],
  }
);

/* =========================================================
   TOPIC 4 � Express.js
========================================================= */

const express = createTopic(
    "expressjs",
    "Express.js",

    [
        definition(
            "Express.js",
            "A minimal and flexible Node.js web application framework that provides a robust set of features for building web and API servers, including routing, middleware and template engines."
        ),

        heading("Why Express?"),

        list([
            "Lightweight and unopinionated.",
            "Powerful routing with HTTP methods and parameters.",
            "Middleware based request processing.",
            "Easy integration with databases and templating engines.",
            "Huge community and ecosystem.",
        ]),

        heading("Hello World Server"),

        code(
            `const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Express');
});

app.listen(3000, () => {
  console.log('Server on http://localhost:3000');
});
`,
            "javascript",
            "Express hello world"
        ),

        heading("Routing"),

        code(
            `app.get('/users',        getAllUsers);
app.get('/users/:id',    getUserById);
app.post('/users',       createUser);
app.put('/users/:id',    updateUser);
app.delete('/users/:id', deleteUser);
`,
            "javascript",
            "RESTful routes"
        ),

        heading("Request and Response"),

        table(
            ["Object", "Common Members"],
            [
                ["req.params", "URL parameters like :id"],
                ["req.query", "Query string like ?sort=name"],
                ["req.body", "POST body (needs body parser)"],
                ["req.headers", "HTTP headers"],
                ["res.send(body)", "Send response (auto sets Content-Type)"],
                ["res.json(obj)", "Send JSON response"],
                ["res.status(code)", "Set status code"],
                ["res.redirect(url)", "Redirect the client"],
            ]
        ),

        heading("Middleware"),

        definition(
            "Middleware",
            "A function that has access to the request, response and the next function in the request response cycle. It can modify the request or response, end the request or call the next middleware."
        ),

        code(
            `// logger middleware
app.use((req, res, next) => {
  console.log(req.method, req.url, new Date(),;
  next();
});

// JSON body parser
app.use(express.json(),;

// Custom check
app.use('/admin', (req, res, next) => {
  if (!req.headers['x-admin']) {
    return res.status(403).send('Forbidden');
  }
  next();
});
`,
            "javascript",
            "Middleware examples"
        ),

        heading("Serving Static Files"),

        code(
            `app.use(express.static('public'),;

// Now files inside the 'public' folder are served
// at the root URL. For example, public/index.html
// is available at http://localhost:3000/
`,
            "javascript",
            "Static files"
        ),

        heading("Template Engines"),

        list([
            "EJS, Pug and Handlebars are popular template engines.",
            "Used to render dynamic HTML with data from the server.",
            "Set the view engine: app.set('view engine', 'ejs');",
        ]),

        code(
            `app.set('view engine', 'ejs');

app.get('/hello/:name', (req, res) => {
  res.render('hello', { name: req.params.name });
});
`,
            "javascript",
            "EJS template"
        ),

        heading("Error Handling"),

        code(
            `// 404 handler (must be after all routes)
app.use((req, res) => {
  res.status(404).send('Page not found');
});

// Error handler (4 args)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
`,
            "javascript",
            "Error handling"
        ),

        heading("REST API Example with Express"),

        code(
            `let users = [];

app.get('/api/users', (req, res) => res.json(users),;

app.post('/api/users', (req, res) => {
  const user = { id: Date.now(), ...req.body };
  users.push(user);
  res.status(201).json(user);
});

app.get('/api/users/:id', (req, res) => {
  const u = users.find(x => x.id == req.params.id);
  if (!u) return res.status(404).json({ error: 'Not found' });
  res.json(u);
});
`,
            "javascript",
            "REST API"
        ),

        keyPoints([
            "Express is the most popular Node.js web framework.",
            "Routing is defined using app.get, app.post etc.",
            "Middleware functions process the request pipeline.",
            "express.static serves files from a directory.",
            "Template engines render dynamic HTML.",
        ]),
    ],

    {
        summary:
    "Learn Express routing, middleware, static files, templates and how to build a simple REST API.",
        minutes: 12,
            tags: ["express", "middleware", "routing", "rest", "important"],

                mcqs: [
                    mcq(
                        "Express.js is a:",
                        ["Database", "Web framework for Node", "Browser", "CSS library"],
                        1,
                        "Express is a minimal web framework for Node.js."
                    ),
                    mcq(
                        "Which method is used to handle GET requests?",
                        ["app.get", "app.post", "app.fetch", "app.use"],
                        0,
                        "app.get registers a handler for HTTP GET."
                    ),
                    mcq(
                        "Middleware functions receive:",
                        ["Only req", "req and res", "req, res, next", "Only next"],
                        2,
                        "Middleware signature is (req, res, next)."
                    ),
                    mcq(
                        "req.params contains:",
                        ["Query string", "URL parameters", "Body", "Headers"],
                        1,
                        "req.params holds URL parameters like :id."
                    ),
                    mcq(
                        "express.json is used to:",
                        ["Send JSON", "Parse JSON body", "Render JSON", "Validate JSON"],
                        1,
                        "express.json parses JSON request bodies."
                    ),
                    mcq(
                        "The error handler has how many arguments?",
                        ["2", "3", "4", "5"],
                        2,
                        "Error middleware is (err, req, res, next)."
                    ),
                ],

                    questions: [
                        qa(
                            "What is Express.js? Why is it used?",
                            "Express.js is a minimal and flexible web application framework for Node.js. It provides a thin layer of features on top of Node's http module, including powerful routing, middleware, template engines and easy static file serving. It is used because it is lightweight, unopinionated, widely adopted and makes it easy to build web servers and REST APIs in a few lines of code.",
                            4
                        ),
                        qa(
                            "Explain middleware in Express.",
                            "Middleware functions are the heart of Express. Each middleware has access to the request object, the response object and the next function. It can modify the request or response, end the request, or call next to pass control to the next middleware. Middleware can be applied globally using app.use or to a specific path such as app.use('/admin', logger). Examples include body parsers, authentication checks, loggers and error handlers.",
                            4
                        ),
                        qa(
                            "Differentiate between req.params and req.query.",
                            "req.params contains values from URL parameters defined in the route path, such as /users/:id, where the value of id is in req.params.id. req.query contains values from the query string of the URL, such as /search?q=phone, where q is accessed as req.query.q. Params are part of the path, while query is optional and used for filters, sorting and pagination.",
                            4
                        ),
                        qa(
                            "Explain the request response cycle in Express.",
                            "When a request comes in, Express builds a pipeline of middleware functions based on the URL and method. Each middleware receives the request, can inspect or modify it, and either sends a response or calls next to pass control. The cycle ends when a middleware sends a response or when an error is passed to the error handling middleware. The cycle is fully asynchronous, allowing long operations like database access to be performed without blocking.",
                            4
                        ),
                    ],
  }
);

/* =========================================================
   TOPIC 5 � MongoDB and Full Stack Development
========================================================= */

const mongodb = createTopic(
    "mongodb-and-fullstack",
    "MongoDB and Full Stack Development",

    [
        definition(
            "MongoDB",
            "An open source, document oriented NoSQL database that stores data in flexible, JSON like documents called BSON. It is widely used with Node.js in the MERN and MEAN stacks."
        ),

        heading("SQL versus NoSQL"),

        table(
            ["Basis", "SQL", "NoSQL (MongoDB)"],
            [
                ["Data model", "Tables with rows and columns", "Documents with fields"],
                ["Schema", "Fixed schema", "Dynamic, schema less"],
                ["Scaling", "Vertical (bigger server)", "Horizontal (more servers)"],
                ["Transactions", "Strong ACID", "Eventually consistent"],
                ["Query language", "SQL", "MongoDB Query Language"],
                ["Example", "MySQL, PostgreSQL", "MongoDB, CouchDB"],
            ]
        ),

        heading("Document Example"),

        code(
            `{
  "_id": ObjectId("5f0a..."),
  "name": "Amit",
  "age": 21,
  "skills": ["HTML", "CSS", "JS"],
  "address": {
    "city": "Surat",
    "pin": 395007
  },
  "joinedOn": ISODate("2024-07-15")
}
`,
            "json",
            "MongoDB document"
        ),

        heading("Basic CRUD Operations"),

        code(
            `// Insert
db.users.insertOne({ name: 'Amit', age: 21 });
db.users.insertMany([{...}, {...}]);

// Read
db.users.find();
db.users.find({ age: { $gt: 18 } });
db.users.findOne({ name: 'Amit' });

// Update
db.users.updateOne(
  { name: 'Amit' },
  { $set: { age: 22 } }
);

// Delete
db.users.deleteOne({ name: 'Amit' });
`,
            "javascript",
            "MongoDB CRUD"
        ),

        heading("Mongoose"),

        definition(
            "Mongoose",
            "An ODM (Object Data Modelling) library for MongoDB and Node.js. It provides a schema based solution to model application data, with built in type casting, validation and business logic hooks."
        ),

        code(
            `const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mydb');

const userSchema = new mongoose.Schema({
  name:  { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age:   { type: Number, min: 0 }
});

const User = mongoose.model('User', userSchema);

const u = new User({ name: 'Amit', email: 'a@b.com', age: 21 });
await u.save();
`,
            "javascript",
            "Mongoose schema and model"
        ),

        heading("MERN Stack"),

        definition(
            "MERN Stack",
            "A popular full stack JavaScript stack consisting of MongoDB (database), Express (backend framework), React (frontend library) and Node.js (server runtime)."
        ),

        list([
            "MongoDB stores the data in flexible documents.",
            "Express handles HTTP requests and routing on the server.",
            "React renders the user interface on the client.",
            "Node.js runs the server and integrates all the pieces.",
            "Data flows from React through fetch to Express, which queries MongoDB and returns JSON.",
        ]),

        heading("MVC Architecture"),

        table(
            ["Layer", "Responsibility", "Example"],
            [
                ["Model", "Data and business logic", "Mongoose models"],
                ["View", "UI presentation", "React components"],
                ["Controller", "Handles requests and updates model/view", "Express route handlers"],
            ]
        ),

        heading("Sample REST API with Express and MongoDB"),

        code(
            `app.post('/api/users', async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

app.get('/api/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});
`,
            "javascript",
            "REST API with Mongoose"
        ),

        heading("CORS in Full Stack Apps"),

        list([
            "React and Express run on different ports (e.g. 3000 and 5000).",
            "Browser blocks cross origin requests by default.",
            "Use the cors middleware: const cors = require('cors'); app.use(cors(),;",
            "In production, restrict to your own domain.",
        ]),

        heading("Deployment"),

        list([
            "Frontend: Vercel, Netlify, GitHub Pages.",
            "Backend: Render, Railway, Heroku, AWS.",
            "Database: MongoDB Atlas (cloud MongoDB).",
            "Use environment variables for secrets like DB URL.",
        ]),

        keyPoints([
            "MongoDB is a document oriented NoSQL database.",
            "Mongoose adds schema and validation to MongoDB.",
            "MERN is Mongo, Express, React, Node.",
            "MVC separates model, view and controller.",
            "Use CORS to allow cross origin requests in dev.",
        ]),
    ],

    {
        summary:
    "Understand MongoDB, Mongoose, the MERN stack, MVC architecture and the basics of full stack deployment.",
        minutes: 13,
            tags: ["mongodb", "mongoose", "mern", "mvc", "important"],

                mcqs: [
                    mcq(
                        "MongoDB stores data in:",
                        ["Tables", "Documents", "Rows", "Columns"],
                        1,
                        "MongoDB stores records as JSON like documents."
                    ),
                    mcq(
                        "Mongoose is a:",
                        ["Frontend library", "ODM for MongoDB", "Database", "Build tool"],
                        1,
                        "Mongoose is an ODM that adds schema and validation."
                    ),
                    mcq(
                        "MERN stands for:",
                        ["MySQL Express React Node", "MongoDB Express React Node", "MongoDB Ember React Node", "MariaDB Express React Node"],
                        1,
                        "MERN is Mongo, Express, React, Node."
                    ),
                    mcq(
                        "Which method finds all documents?",
                        ["find()", "findOne()", "findAll()", "select()"],
                        0,
                        "find() returns all matching documents as a cursor."
                    ),
                    mcq(
                        "MVC stands for:",
                        ["Model View Controller", "Module View Class", "Model Version Control", "Main View Component"],
                        0,
                        "MVC separates Model, View and Controller."
                    ),
                    mcq(
                        "MongoDB Atlas is:",
                        ["Local DB", "Cloud MongoDB", "Editor", "Frontend tool"],
                        1,
                        "MongoDB Atlas is the official cloud MongoDB service."
                    ),
                ],

                    questions: [
                        qa(
                            "Differentiate between SQL and NoSQL databases.",
                            "SQL databases like MySQL store data in tables with a fixed schema, support ACID transactions and scale vertically. NoSQL databases like MongoDB store data in flexible documents, allow dynamic schema, scale horizontally across many servers and are eventually consistent. SQL is best for structured data with complex joins, while NoSQL is best for large volumes of unstructured or semi structured data and for rapid development.",
                            4
                        ),
                        qa(
                            "Explain the MERN stack.",
                            "MERN stands for MongoDB, Express, React and Node.js. MongoDB is the NoSQL document database. Express is the web framework that handles HTTP requests on the server. React is the frontend library that builds the user interface. Node.js is the runtime that executes JavaScript on the server. Together they form a full stack JavaScript solution where the same language is used on both client and server, allowing rapid development and easy data exchange through JSON.",
                            4
                        ),
                        qa(
                            "What is Mongoose? Why is it used?",
                            "Mongoose is an Object Data Modelling (ODM) library for MongoDB and Node.js. It provides a schema based solution to model application data with built in type casting, validation, query building and business logic hooks. Without Mongoose, the developer must manually validate and structure documents, which becomes error prone in large applications. Mongoose models also give a clear structure for testing and documentation.",
                            4
                        ),
                        qa(
                            "Explain MVC architecture in a full stack app.",
                            "MVC stands for Model View Controller. The Model represents the data and business logic, usually implemented using Mongoose schemas in a Node backend. The View is the user interface, implemented with React components. The Controller handles HTTP requests, validates input, calls the appropriate model methods and returns the response. This separation makes the code easier to maintain, test and extend because each layer has a clear responsibility and can be modified independently.",
                            4
                        ),
                    ],
  }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit2Topics = [
    introductionToReact,
    reactHooks,
    nodejs,
    express,
    mongodb,
];
