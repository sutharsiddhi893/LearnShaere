/* =========================================================
   BCA • SEM 6 • Advanced Web Development Technology
   UNIT 1 — Modern React.js, Hooks, Routing & Next.js Architecture
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
   TOPIC 1 — React.js Architecture, Virtual DOM & JSX
========================================================= */

const reactArchitecture = createTopic(
    "react-architecture-virtual-dom-and-jsx",
    "React.js Architecture, Virtual DOM & JSX",

    [
        definition(
            "React.js",
            "React.js is an open-source, component-based frontend JavaScript library developed by Meta (Facebook) for building dynamic, high-performance, single-page user interfaces (SPAs)."
        ),

        definition(
            "Virtual DOM (VDOM)",
            "The Virtual DOM is a lightweight, in-memory JavaScript object representation of the real DOM. React uses it to calculate differences (diffing) and update only modified elements in the actual browser DOM (reconciliation)."
        ),

        heading("Virtual DOM & Reconciliation Process"),

        steps([
            "State or Prop Change — A user interaction triggers a state update in a React component.",
            "Virtual DOM Tree Re-render — React renders a new Virtual DOM tree representing the updated UI.",
            "Diffing Algorithm — React compares the new Virtual DOM tree with the previous Virtual DOM snapshot (using O(n) heuristic diffing).",
            "Batch Updating (Reconciliation) — React calculates the minimal set of DOM operations needed and applies them directly to the real browser DOM in a single batch.",
        ]),

        heading("Real DOM vs Virtual DOM"),

        table(
            ["Criteria", "Real DOM", "Virtual DOM"],
            [
                ["Update Speed", "Slow; requires reflow and repaint of layout trees", "Extremely fast; updates in-memory JavaScript objects"],
                ["DOM Manipulation", "Expensive direct DOM node operations", "Calculates minimal batch patches before touching real DOM"],
                ["Memory Usage", "High memory overhead for large node trees", "Lightweight memory footprint"],
                ["Rendering Strategy", "Re-renders entire element subtrees", "Updates only dirty/modified elements"],
            ]
        ),

        heading("JavaScript XML (JSX)"),

        definition(
            "JSX",
            "JSX is a syntax extension for JavaScript that allows developers to write HTML-like markup directly inside JavaScript files. It is transpiled into React.createElement() function calls by compilers like Babel."
        ),

        code(
            `// JSX Code
const element = <h1 className="title">Welcome, {userName}!</h1>;

// Transpiled Native JavaScript (Babel Output)
const element = React.createElement(
  "h1",
  { className: "title" },
  "Welcome, ",
  userName,
  "!"
);`,
            "javascript",
            "JSX Transpilation Example"
        ),

        heading("Core Rules of JSX"),

        list([
            "Must return a single root element (or use React Fragments <>...</>).",
            "All tags must be explicitly self-closed (e.g., <img />, <input />, <br />).",
            "Attributes use camelCase (e.g., className instead of class, htmlFor instead of for, onClick instead of onclick).",
            "JavaScript expressions must be wrapped inside curly braces { ... }.",
        ]),

        note(
            "React is a library, not a full-blown framework like Angular. It focuses strictly on the View layer of MVC architecture, allowing developers complete freedom to choose routing, state management, and build tooling.",
            "tip",
            "Library vs Framework"
        ),

        keyPoints([
            "React was released by Jordan Walke (Meta) in 2013.",
            "The Virtual DOM prevents expensive browser reflow and repaint cycles.",
            "Reconciliation matches Virtual DOM snapshots using an O(n) diffing algorithm.",
            "JSX allows HTML structures in JS and compiles to React.createElement().",
            "React Fragments (<>...</>) group elements without adding extra nodes to the DOM.",
        ]),
    ],

    {
        summary:
            "Learn React.js architecture, Virtual DOM mechanics, the reconciliation process, JSX rules, and Babel transpilation.",
        minutes: 12,
        tags: ["react", "virtual-dom", "jsx", "reconciliation", "frontend", "important"],

        mcqs: [
            mcq(
                "Who created and open-sourced React.js at Meta in 2013?",
                ["Brendan Eich", "Jordan Walke", "Evan You", "Dan Abramov"],
                1,
                "Jordan Walke, a software engineer at Meta, created React.js."
            ),
            mcq(
                "What is the time complexity of React's heuristic Virtual DOM diffing algorithm?",
                ["O(n^3)", "O(n log n)", "O(n)", "O(1)"],
                2,
                "React uses a heuristic diffing algorithm with linear time complexity O(n)."
            ),
            mcq(
                "Why is 'className' used instead of 'class' in JSX?",
                ["Because JSX only supports uppercase", "Because 'class' is a reserved keyword in JavaScript", "Because HTML requires it", "Because of CSS specifications"],
                1,
                "'class' is a reserved keyword in JavaScript, so JSX uses 'className'."
            ),
            mcq(
                "What is the purpose of React Fragments (<React.Fragment> or <>...</>)?",
                ["To add extra CSS styling", "To group multiple elements without adding an extra node to the DOM", "To trigger re-rendering", "To bind Redux stores"],
                1,
                "Fragments group child elements without inserting redundant wrapping div tags into the DOM."
            ),
        ],

        questions: [
            qa(
                "What is the Virtual DOM? Explain the React Reconciliation process with a clear step-by-step diagram description.",
                "The Virtual DOM (VDOM) is an in-memory lightweight abstraction of the real browser DOM. React's reconciliation process works in four steps: (1) When state changes, React renders a brand-new Virtual DOM tree. (2) React's diffing algorithm compares the new Virtual DOM tree with the previous Virtual DOM snapshot. (3) React identifies exact node differences (changes in attributes, text, or children). (4) React batches these modifications and updates only the changed elements in the real browser DOM. This avoids full-page browser reflows and repaints, resulting in high rendering performance.",
                4
            ),
            qa(
                "What is JSX? Explain how JSX differs from standard HTML and how Babel compiles it.",
                "JSX (JavaScript XML) is a syntax extension for JavaScript that allows developers to write declarative HTML-like structures inside JavaScript files. Key differences from HTML include: (1) Uses camelCase for attributes (e.g., className, onClick). (2) Evaluates embedded JavaScript expressions inside curly braces {}. (3) Requires all tags to be self-closed (<img />). (4) Requires a single root element or Fragment. Babel compiles JSX elements into nested React.createElement(type, props, ...children) JavaScript calls at build time before browser execution.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — React Components, Props & Component Lifecycle
========================================================= */

const reactComponents = createTopic(
    "react-components-props-and-lifecycle",
    "React Components, Props & Component Lifecycle",

    [
        definition(
            "React Component",
            "A component is an independent, isolated, and reusable building block of a user interface that accepts inputs (props), manages internal state, and returns a JSX UI description."
        ),

        heading("Functional Components vs Class Components"),

        table(
            ["Feature", "Functional Components (Modern)", "Class Components (Legacy)"],
            [
                ["Syntax", "Plain JavaScript function returning JSX", "ES6 class extending React.Component"],
                ["State Management", "useState Hook", "this.state object and this.setState()"],
                ["Lifecycle Handling", "useEffect Hook", "Lifecycle methods (componentDidMount, etc.)"],
                ["'this' Keyword", "No 'this' keyword needed (avoids binding bugs)", "Requires explicit 'this' binding for handlers"],
                ["Performance", "Lighter memory footprint and faster execution", "Slightly higher overhead"],
            ]
        ),

        heading("Component Props (Properties)"),

        definition(
            "Props",
            "Props are read-only (immutable) inputs passed from a parent component to a child component, enabling unidirectional (top-down) data flow."
        ),

        code(
            `// Child Component with Destructured Props & Default Values
const UserCard = ({ name, role = "Student", score }) => {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>Role: {role}</p>
      <p>Score: {score}/100</p>
    </div>
  );
};

// Parent Component passing Props
const App = () => {
  return (
    <div className="container">
      <UserCard name="Amit Sharma" score={92} />
      <UserCard name="Priya Patel" role="Admin" score={98} />
    </div>
  );
};`,
            "javascript",
            "Props and Destructuring Example"
        ),

        heading("Component Lifecycle Phases"),

        table(
            ["Phase", "Class Method Equivalent", "Functional (Hook) Equivalent", "Purpose"],
            [
                ["Mounting", "componentDidMount()", "useEffect(() => {}, [])", "Runs once after initial DOM rendering (API calls, subscriptions)"],
                ["Updating", "componentDidUpdate()", "useEffect(() => {}, [deps])", "Runs after state/prop changes"],
                ["Unmounting", "componentWillUnmount()", "useEffect(() => { return () => cleanup; }, [])", "Cleanup (clearing timers, event listeners)"],
            ]
        ),

        heading("Conditional Rendering & List Rendering with Keys"),

        code(
            `const StudentList = ({ students, isLoggedIn }) => {
  if (!isLoggedIn) {
    return <p>Please log in to view the student directory.</p>;
  }

  return (
    <ul>
      {students.map((student) => (
        // Keys must be unique, stable identifiers
        <li key={student.id}>
          {student.name} — {student.grade}
        </li>
      ),}
    </ul>
  );
};`,
            "javascript",
            "Conditional Rendering and Keys"
        ),

        note(
            "Never use array indices as keys (key={index}) when list items can be reordered, inserted, or deleted. Use unique database IDs to avoid rendering and state bugs.",
            "warning",
            "Key Anti-Pattern"
        ),

        keyPoints([
            "Functional components with Hooks are the modern standard in React development.",
            "Props are immutable; state is mutable and private to a component.",
            "Data flows in a single direction: top-down from parent to child.",
            "Keys give elements a stable identity across re-renders for efficient diffing.",
            "Conditional rendering uses ternary operators (? :) or logical short-circuits (&&).",
        ]),
    ],

    {
        summary:
            "Understand functional vs class components, prop immutability, component lifecycle phases, conditional rendering, and list mapping with unique keys.",
        minutes: 13,
        tags: ["react", "components", "props", "lifecycle", "keys", "important"],

        mcqs: [
            mcq(
                "Props in React are:",
                ["Mutable inside the child", "Read-only and immutable", "Global state objects", "Stored in localStorage"],
                1,
                "Props are strictly read-only and cannot be modified by the receiving child component."
            ),
            mcq(
                "Why are 'keys' required when rendering lists in React?",
                ["To add CSS styles", "To help React identify which items have changed, been added, or removed", "To count list items", "To enable database queries"],
                1,
                "Keys provide stable identities for Virtual DOM diffing during dynamic list updates."
            ),
            mcq(
                "Which hook handles side effects across the Mounting, Updating, and Unmounting phases?",
                ["useState", "useEffect", "useMemo", "useCallback"],
                1,
                "useEffect manages all lifecycle side effects in functional components."
            ),
            mcq(
                "What data flow pattern does React enforce?",
                ["Bi-directional two-way binding", "Unidirectional (Top-Down) data flow", "Circular data binding", "Bottom-Up data flow"],
                1,
                "React enforces unidirectional top-down data flow from parent to child via props."
            ),
        ],

        questions: [
            qa(
                "Compare Functional Components with Class Components in React.",
                "Functional Components are plain JavaScript functions that take props as arguments and return JSX. With React 16.8+ Hooks, functional components support state (useState), lifecycle side effects (useEffect), and context (useContext) with less boilerplate and no 'this' binding complexities. Class Components are ES6 classes extending React.Component that manage state via this.state/this.setState and use explicit lifecycle methods (componentDidMount, componentDidUpdate, componentWillUnmount). Modern React development uses functional components exclusively.",
                4
            ),
            qa(
                "What is the significance of the 'key' prop when rendering lists in React? What problems occur when using array index as key?",
                "The 'key' prop is a special string attribute that gives list items a unique and stable identity during Virtual DOM diffing. React uses keys to match list elements between renders, determining whether an item should be created, updated, or removed. Using array indices (key={index}) causes bugs when items are added, removed, or sorted, because indices change, causing React to mismatch component states and re-render incorrectly. Stable, unique database IDs should always be used.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — React Hooks (useState, useEffect, useContext, useRef, useMemo, useCallback)
========================================================= */

const reactHooks = createTopic(
    "react-hooks-deep-dive",
    "React Hooks (useState, useEffect, useContext, useRef, useMemo, useCallback)",

    [
        definition(
            "React Hooks",
            "Introduced in React 16.8, Hooks are built-in functions that let functional components use state and other React features without writing class components."
        ),

        heading("Rules of Hooks"),

        list([
            "Only call Hooks at the top level — Do not call Hooks inside loops, conditions, or nested functions.",
            "Only call Hooks from React function components or custom Hooks — Do not call Hooks from regular JavaScript functions.",
        ]),

        heading("1. useState & useEffect"),

        code(
            `import React, { useState, useEffect } from "react";

const ProductCounter = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);

  // useEffect with dependencies: runs on mount and whenever 'count' changes
  useEffect(() => {
    document.title = \`Count: \${count}\`;

    const timer = setInterval(() => {
      console.log("Heartbeat tick");
    }, 5000);

    // Cleanup function: runs on unmount or before re-running effect
    return () => clearInterval(timer);
  }, [count]);

  return (
    <div>
      <p>Quantity: {count}</p>
      <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
    </div>
  );
};`,
            "javascript",
            "useState and useEffect with Cleanup"
        ),

        heading("2. useContext & useRef"),

        code(
            `import React, { useContext, useRef, createContext } from "react";

const ThemeContext = createContext("light");

const FocusInput = () => {
  const theme = useContext(ThemeContext);
  const inputRef = useRef(null); // Accessing DOM node directly

  const handleFocus = () => {
    inputRef.current.focus(); // Direct DOM manipulation
    inputRef.current.style.borderColor = "blue";
  };

  return (
    <div className={theme}>
      <input ref={inputRef} type="text" placeholder="Type here..." />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
};`,
            "javascript",
            "useContext and useRef Hooks"
        ),

        heading("3. Performance Optimization: useMemo & useCallback"),

        table(
            ["Hook", "What It Caches / Memoizes", "Primary Use Case"],
            [
                ["useMemo", "The calculated return value of an expensive function", "Prevents re-executing heavy calculations on every re-render"],
                ["useCallback", "The function definition instance itself", "Prevents recreating callback functions passed to memoized children"],
            ]
        ),

        code(
            `import React, { useState, useMemo, useCallback } from "react";

const CalculationComponent = ({ items }) => {
  const [count, setCount] = useState(0);

  // useMemo caches expensive computation result
  const totalSum = useMemo(() => {
    console.log("Computing sum...");
    return items.reduce((acc, curr) => acc + curr.price, 0);
  }, [items]);

  // useCallback caches function reference
  const handleItemClick = useCallback((id) => {
    console.log("Item clicked:", id);
  }, []);

  return (
    <div>
      <h3>Total: {totalSum}</h3>
      <button onClick={() => setCount(count + 1)}>Re-render ({count})</button>
    </div>
  );
};`,
            "javascript",
            "useMemo and useCallback Example"
        ),

        heading("Custom Hooks"),

        code(
            `// Custom Hook for Window Resizing
import { useState, useEffect } from "react";

export const useWindowSize = () => {
  const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const handleResize = () => setSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
};`,
            "javascript",
            "Custom Hook Pattern"
        ),

        keyPoints([
            "useState provides local state; updates using functional setters (setVal(prev => prev + 1),.",
            "useEffect handles data fetching, subscriptions, and DOM updates with cleanup functions.",
            "useRef persists values across renders without triggering a re-render and holds direct DOM references.",
            "useContext avoids prop drilling across deep component hierarchies.",
            "useMemo memoizes computed values; useCallback memoizes function instances.",
        ]),
    ],

    {
        summary:
            "Deep dive into React Hooks: Rules of Hooks, useState, useEffect, useContext, useRef, useMemo, useCallback, and creating Custom Hooks.",
        minutes: 14,
        tags: ["react-hooks", "usestate", "useeffect", "usecontext", "usememo", "usecallback", "important"],

        mcqs: [
            mcq(
                "What happens if you pass an empty dependency array ([]) to useEffect?",
                ["It runs on every re-render", "It runs only once after the initial mount", "It never runs", "It causes an infinite loop"],
                1,
                "An empty dependency array tells useEffect to execute only once after the component mounts."
            ),
            mcq(
                "Which hook persists mutable values across renders WITHOUT causing a re-render?",
                ["useState", "useRef", "useMemo", "useReducer"],
                1,
                "useRef holds mutable values in its .current property without triggering component re-renders."
            ),
            mcq(
                "What problem does the useContext hook solve?",
                ["Virtual DOM lag", "Prop Drilling through multiple intermediate components", "Slow network requests", "CSS specificity conflicts"],
                1,
                "useContext provides a way to share data globally across the component tree without prop drilling."
            ),
            mcq(
                "What is the difference between useMemo and useCallback?",
                ["useMemo caches a value; useCallback caches a function definition", "useMemo is for CSS; useCallback is for HTML", "useMemo only runs on unmount", "They are identical"],
                0,
                "useMemo returns a memoized value; useCallback returns a memoized function callback."
            ),
        ],

        questions: [
            qa(
                "Explain the useEffect Hook lifecycle behavior with different dependency array configurations.",
                "The useEffect hook handles side effects based on its second argument (the dependency array): (1) No dependency array (useEffect(fn),: Runs after the initial render and after every subsequent re-render. (2) Empty dependency array (useEffect(fn, []),: Runs only once after the initial mount (equivalent to componentDidMount). (3) Array with dependencies (useEffect(fn, [propA, stateB]),: Runs on mount and re-runs only when propA or stateB change. (4) Cleanup return function (useEffect(() => { return () => cleanup(); }, []),: Executes when the component unmounts or before re-running the effect, used for cleaning up timers, WebSockets, or event listeners.",
                4
            ),
            qa(
                "What is Prop Drilling? How do React Context and the useContext Hook eliminate it?",
                "Prop Drilling is the anti-pattern where props must be passed through multiple intermediate components that do not need the data themselves, purely to reach a deeply nested child component. React Context solves this by providing a shared global data layer. A context is created using React.createContext() and wrapped around the component tree using <Context.Provider value={data}>. Any child component at any depth can access the value directly using const value = useContext(Context), eliminating the need for intermediate props.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — Single Page Applications (SPA), React Router v6 & Forms
========================================================= */

const routingAndForms = createTopic(
    "spa-react-router-v6-and-forms",
    "Single Page Applications (SPA), React Router v6 & Forms",

    [
        definition(
            "Single Page Application (SPA)",
            "A Single Page Application is a web application that loads a single HTML document and dynamically updates the view in response to user navigation using client-side JavaScript, without requiring full page reloads from the server."
        ),

        heading("React Router v6 Architecture"),

        table(
            ["Component / Hook", "Purpose"],
            [
                ["BrowserRouter", "Top-level provider using the HTML5 History API (pushState, replaceState)"],
                ["Routes", "Container that matches the current URL path to child Route elements"],
                ["Route", "Defines the path and the corresponding JSX element to render"],
                ["Link / NavLink", "Accessible navigation element preventing page reloads; NavLink supports active styling"],
                ["useNavigate()", "Hook for programmatic navigation (e.g., navigating after form submission)"],
                ["useParams()", "Hook to extract dynamic URL parameters (e.g., /users/:id)"],
                ["useSearchParams()", "Hook to read and set URL query parameters (?search=react&page=2)"],
                ["Outlet", "Placeholder element inside a parent layout route that renders nested child routes"],
            ]
        ),

        heading("React Router v6 Implementation"),

        code(
            `import React from "react";
import { BrowserRouter, Routes, Route, Link, useParams, useNavigate, Outlet } from "react-router-dom";

// Layout with Outlet for nested views
const Layout = () => (
  <div>
    <nav>
      <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/students/101">Student 101</Link>
    </nav>
    <hr />
    <Outlet />
  </div>
);

const StudentDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h2>Student Details for ID: {id}</h2>
      <button onClick={() => navigate("/")}>Go to Home</button>
    </div>
  );
};

export const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<h2>Home Page</h2>} />
        <Route path="about" element={<h2>About Page</h2>} />
        <Route path="students/:id" element={<StudentDetail />} />
        <Route path="*" element={<h2>404 - Page Not Found</h2>} />
      </Route>
    </Routes>
  </BrowserRouter>
);`,
            "javascript",
            "React Router v6 Configuration"
        ),

        heading("Controlled vs Uncontrolled Form Components"),

        table(
            ["Criteria", "Controlled Component", "Uncontrolled Component"],
            [
                ["State Handler", "React component state (useState)", "Browser DOM directly"],
                ["Data Access", "Via value prop and onChange handler", "Via useRef() pointing to input DOM element"],
                ["Validation", "Instant real-time validation on every keystroke", "Validation checked upon form submission"],
                ["Recommended By", "Standard React best practice", "Useful for integrating third-party non-React libraries"],
            ]
        ),

        heading("Controlled Form with Validation"),

        code(
            `import React, { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({ username: "", email: "", course: "BCA" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }),;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents default browser page refresh
    if (formData.username.length < 3) {
      setError("Username must be at least 3 characters");
      return;
    }
    setError("");
    console.log("Form Submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <input name="username" value={formData.username} onChange={handleChange} placeholder="Username" />
      <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email" />
      <select name="course" value={formData.course} onChange={handleChange}>
        <option value="BCA">BCA</option>
        <option value="MCA">MCA</option>
      </select>
      <button type="submit">Register</button>
    </form>
  );
};`,
            "javascript",
            "Controlled Form Component"
        ),

        keyPoints([
            "SPAs load one HTML page and rewrite views dynamically without reloading.",
            "React Router v6 uses Routes, Route, Link, Outlet, useParams, and useNavigate.",
            "Controlled components store form state in React; uncontrolled components use DOM refs.",
            "e.preventDefault() prevents default HTML form submission page refreshes.",
            "Dynamic routing matches URL patterns like /users/:id via the useParams hook.",
        ]),
    ],

    {
        summary:
            "Learn Single Page Application concepts, React Router v6 declarative routing, dynamic parameters, nested layout outlets, and controlled forms.",
        minutes: 13,
        tags: ["spa", "react-router-v6", "routing", "forms", "controlled-components", "important"],

        mcqs: [
            mcq(
                "Which hook in React Router v6 extracts dynamic path variables like /students/:id?",
                ["useQuery()", "useParams()", "useRoute()", "useLocation()"],
                1,
                "useParams() returns an object of key/value pairs from dynamic route parameters."
            ),
            mcq(
                "What is the purpose of the <Outlet /> component in React Router v6?",
                ["To exit the application", "To render matched child route components inside parent layouts", "To trigger page refresh", "To connect to external APIs"],
                1,
                "<Outlet /> acts as a placeholder in a parent route layout to render child route components."
            ),
            mcq(
                "A form input whose value is bound to and controlled by React component state is called a:",
                ["Uncontrolled Component", "Controlled Component", "Dynamic Component", "Synthetic Component"],
                1,
                "Controlled components use React state to drive input value and onChange updates."
            ),
            mcq(
                "Which hook replaces useHistory for programmatic navigation in React Router v6?",
                ["useNavigate()", "usePush()", "useRedirect()", "useHref()"],
                0,
                "React Router v6 introduced useNavigate() to replace useHistory()."
            ),
        ],

        questions: [
            qa(
                "What is a Single Page Application (SPA)? How does client-side routing differ from traditional multi-page routing?",
                "A Single Page Application (SPA) serves a single HTML container page and updates content dynamically via client-side JavaScript as the user navigates. In traditional Multi-Page Applications (MPAs), every link click sends an HTTP request to the server, which renders and returns a full HTML page, causing browser screen flashes and re-downloading identical assets. In client-side routing (like React Router), the HTML5 History API intercepts URL changes, updates the browser address bar, and swaps components in the DOM instantly without server round-trips, delivering a faster, app-like user experience.",
                4
            ),
            qa(
                "Differentiate between Controlled and Uncontrolled components in React forms with code examples.",
                "In a Controlled Component, form input state is managed directly by React state via value and onChange handlers (e.g., <input value={name} onChange={e => setName(e.target.value)} />). Every keystroke triggers state updates, making real-time validation and conditional disabling easy. In an Uncontrolled Component, form data is handled directly by the browser DOM itself. Values are pulled on-demand using React refs (e.g., const inputRef = useRef(); <input ref={inputRef} />) without triggering re-renders on keystrokes. Controlled components are the recommended React standard.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 5 — Server-Side Rendering (SSR), SSG & Next.js Architecture
========================================================= */

const nextjsSSR = createTopic(
    "ssr-ssg-and-nextjs-architecture",
    "Server-Side Rendering (SSR), SSG & Next.js Architecture",

    [
        definition(
            "Next.js",
            "Next.js is a production-ready, full-stack React framework developed by Vercel that enables hybrid rendering strategies: Server-Side Rendering (SSR), Static Site Generation (SSG), Incremental Static Regeneration (ISR), and Client-Side Rendering (CSR)."
        ),

        heading("Rendering Strategies Comparison"),

        table(
            ["Rendering Method", "When HTML is Generated", "Performance / SEO", "Best Used For"],
            [
                ["Client-Side Rendering (CSR / React SPA)", "In user's browser using JavaScript bundle", "Slower initial paint; poor SEO out-of-the-box", "Private user dashboards, SaaS portals"],
                ["Static Site Generation (SSG)", "At build time on the server", "Blazing fast CDN delivery; optimal SEO", "Blogs, documentation, marketing landing pages"],
                ["Server-Side Rendering (SSR)", "On each incoming HTTP request at runtime", "Always up-to-date data; excellent SEO", "E-commerce product pages, news feeds, dynamic pricing"],
                ["Incremental Static Regeneration (ISR)", "Static generation updated in background via revalidate interval", "Fast CDN speed with fresh periodic data", "Large e-commerce catalogs with thousands of items"],
            ]
        ),

        heading("Next.js Data Fetching Functions (Pages Router)"),

        table(
            ["Function", "Rendering Type", "Execution Environment"],
            [
                ["getStaticProps", "SSG (Static Generation)", "Runs at build time on the server"],
                ["getStaticPaths", "SSG Dynamic Routes", "Generates dynamic HTML paths at build time (e.g., /posts/[id])"],
                ["getServerSideProps", "SSR (Server-Side Rendering)", "Runs on every request on the server"],
            ]
        ),

        heading("SSR Implementation in Next.js"),

        code(
            `// pages/products.js - Server-Side Rendered on each request
import React from "react";

export async function getServerSideProps(context) {
  // Fetch data directly from backend or database securely on the server
  const res = await fetch("https://api.example.com/products");
  const products = await res.json();

  return {
    props: {
      products, // Passed to component as props at runtime
    },
  };
}

const ProductCatalog = ({ products }) => {
  return (
    <div>
      <h1>Product Catalog (SSR)</h1>
      <ul>
        {products.map((item) => (
          <li key={item.id}>{item.title} — \${item.price}</li>
        ),}
      </ul>
    </div>
  );
};

export default ProductCatalog;`,
            "javascript",
            "Next.js getServerSideProps Example"
        ),

        heading("Next.js File-System Based Routing"),

        code(
            `pages/
├── index.js          --> /
├── about.js          --> /about
├── blog/
│   ├── index.js      --> /blog
│   └── [slug].js     --> /blog/:slug (Dynamic Route)
└── api/
    └── users.js      --> /api/users (Serverless API Route)`,
            "text",
            "File-System Routing Directory"
        ),

        keyPoints([
            "Next.js provides hybrid rendering: SSR, SSG, ISR, and CSR.",
            "SSG builds HTML once at compile time; SSR renders HTML on every client request.",
            "getServerSideProps runs exclusively on the server on each request.",
            "Next.js uses file-system routing where files inside pages/ become URL endpoints.",
            "API Routes (pages/api) allow building full-stack serverless Node.js backend endpoints.",
        ]),
    ],

    {
        summary:
            "Understand modern web rendering: CSR vs SSR vs SSG, Next.js architecture, getServerSideProps, getStaticProps, and file-system routing.",
        minutes: 13,
        tags: ["nextjs", "ssr", "ssg", "csr", "react", "seo", "important"],

        mcqs: [
            mcq(
                "Which rendering technique generates HTML pages at build time prior to deployment?",
                ["Client-Side Rendering (CSR)", "Static Site Generation (SSG)", "Server-Side Rendering (SSR)", "Dynamic Hydration"],
                1,
                "SSG (Static Site Generation) pre-renders all HTML pages during the application build phase."
            ),
            mcq(
                "Which Next.js function is used to fetch data on the server on EVERY incoming request?",
                ["getStaticProps", "getServerSideProps", "useEffect", "getInitialProps"],
                1,
                "getServerSideProps executes on the server on every request for real-time SSR."
            ),
            mcq(
                "Why is SSR better than CSR for public marketing websites?",
                ["It uses less CSS", "Search engines receive pre-rendered HTML, dramatically improving SEO and initial page paint", "It eliminates backend databases", "It uses only HTML4"],
                1,
                "SSR provides complete HTML directly to search crawlers, improving SEO indexing and First Contentful Paint."
            ),
            mcq(
                "How are dynamic routes represented in Next.js Pages router (e.g., post ID)?",
                ["pages/post-(id).js", "pages/post/[id].js", "pages/post/:id.js", "pages/post.id.js"],
                1,
                "Next.js denotes dynamic route parameters using brackets: [id].js."
            ),
        ],

        questions: [
            qa(
                "Differentiate between Client-Side Rendering (CSR), Server-Side Rendering (SSR), and Static Site Generation (SSG).",
                "(1) Client-Side Rendering (CSR): The server delivers a bare HTML shell and a large JS bundle. The browser executes JavaScript to construct the DOM. Fast subsequent navigation, but poor initial load speed and SEO challenges. (2) Server-Side Rendering (SSR): On every user request, the server fetches data, renders the full HTML page, and streams it to the browser. Ensures fresh data and great SEO, but increases server compute load. (3) Static Site Generation (SSG): HTML is pre-rendered at build time and served statically via global CDNs. Delivers fast speeds and SEO, ideal for blogs and documentation where data changes infrequently.",
                4
            ),
            qa(
                "Explain Next.js File-System Routing and API Routes with directory examples.",
                "Next.js uses zero-config file-system routing based on the 'pages' or 'app' folder structure: (1) pages/index.js maps to the root URL (/), pages/about.js maps to /about, and nested folders like pages/blog/index.js map to /blog. (2) Dynamic Routes: Files with square brackets like pages/products/[id].js match dynamic URLs like /products/101, accessible via useRouter().query.id. (3) API Routes: Any file in pages/api (e.g., pages/api/auth.js) becomes a serverless backend Node.js endpoint responding with JSON, enabling full-stack application development in a single codebase.",
                4
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit1Topics = [
    reactArchitecture,
    reactComponents,
    reactHooks,
    routingAndForms,
    nextjsSSR,
];
