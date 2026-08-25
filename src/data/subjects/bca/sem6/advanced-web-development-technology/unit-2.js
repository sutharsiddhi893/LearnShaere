/* =========================================================
   BCA • SEM 6 • Advanced Web Development Technology
   UNIT 2 — Full-Stack Architecture, Redux, GraphQL, Security & Deployment
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
   TOPIC 1 — Global State Management with Redux Toolkit (RTK)
========================================================= */

const reduxToolkit = createTopic(
    "global-state-management-redux-toolkit",
    "Global State Management with Redux Toolkit (RTK)",

    [
        definition(
            "Redux",
            "Redux is a predictable state container for JavaScript applications based on the Flux architecture, holding the entire application state in a single immutable global store."
        ),

        definition(
            "Redux Toolkit (RTK)",
            "Redux Toolkit is the official, opinionated, batteries-included standard toolset for efficient Redux development that simplifies store setup, reduces boilerplate, and integrates Immer and Redux Thunk."
        ),

        heading("Core Principles of Redux"),

        list([
            "Single Source of Truth — The global state of the application is stored inside a single object tree within a single store.",
            "State is Read-Only — The only way to change state is to dispatch an Action describing what happened.",
            "Changes are Made with Pure Functions — Reducers are pure functions that take the previous state and an action, returning the new state without mutations.",
        ]),

        heading("Redux Data Flow Architecture"),

        code(
            `[ UI Component ] ---> ( Dispatches Action ) ---> [ Reducer Function ]
       ^                                                      |
       |                                           ( Updates State via Immer )
       |                                                      |
       +------------- [ Global Redux Store ] <----------------+`,
            "text",
            "Unidirectional Redux Data Flow"
        ),

        heading("Creating a Slice with Redux Toolkit (RTK)"),

        code(
            `// features/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [], totalAmount: 0 };

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Immer allows writing "mutating" syntax safely under the hood
    addItem: (state, action) => {
      state.items.push(action.payload);
      state.totalAmount += action.payload.price;
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
    clearCart: (state) => {
      state.items = [];
      state.totalAmount = 0;
    }
  }
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;`,
            "javascript",
            "Redux Toolkit Slice"
        ),

        heading("Configuring the Store & Consuming State in Components"),

        code(
            `// store.js
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

// Component consuming state with useSelector and useDispatch
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "./features/cartSlice";

export const ProductComponent = ({ product }) => {
  const dispatch = useDispatch();
  const cartCount = useSelector((state) => state.cart.items.length);

  return (
    <div>
      <p>Cart Items: {cartCount}</p>
      <button onClick={() => dispatch(addItem(product),}>Add to Cart</button>
    </div>
  );
};`,
            "javascript",
            "Configuring Store and React-Redux Hooks"
        ),

        heading("Context API vs Redux Toolkit"),

        table(
            ["Feature", "React Context API", "Redux Toolkit (RTK)"],
            [
                ["Setup Complexity", "Zero-install; built directly into React", "Requires installing @reduxjs/toolkit and react-redux"],
                ["Performance", "Can cause unnecessary re-renders in large trees", "Optimized selector subscriptions (useSelector)"],
                ["DevTools", "Basic React DevTools inspection", "Powerful Redux DevTools with time-travel debugging"],
                ["Middleware / Async", "Manual handling via useEffect", "Built-in createAsyncThunk and RTK Query"],
                ["Best Use Case", "Low-frequency updates (Theme, Auth, Language)", "Large, complex state with high-frequency updates (E-commerce, SaaS)"],
            ]
        ),

        keyPoints([
            "Redux enforces a predictable, unidirectional data flow architecture.",
            "Redux Toolkit eliminates legacy Redux boilerplate using createSlice and configureStore.",
            "Immer library inside RTK allows writing mutable code that translates to immutable updates.",
            "useSelector reads data from the store; useDispatch dispatches actions to trigger reducers.",
            "createAsyncThunk handles asynchronous API requests inside Redux workflows.",
        ]),
    ],

    {
        summary:
            "Master global state management with Redux Toolkit (RTK), createSlice, configureStore, useSelector, useDispatch, and Context vs Redux tradeoffs.",
        minutes: 13,
        tags: ["redux", "redux-toolkit", "rtk", "state-management", "immer", "important"],

        mcqs: [
            mcq(
                "Which hook is used to extract data from the Redux store state in a functional component?",
                ["useStore()", "useDispatch()", "useSelector()", "useContext()"],
                2,
                "useSelector extracts specific slices of data from the Redux store."
            ),
            mcq(
                "Which library is integrated into Redux Toolkit to allow safe 'mutating' code in reducers?",
                ["Axios", "Immer", "Lodash", "Babel"],
                1,
                "Immer detects mutations in draft state and produces clean immutable state trees."
            ),
            mcq(
                "What is the only way to trigger a state change in a Redux store?",
                ["Directly modifying store.state", "Calling dispatch(action)", "Modifying window.state", "Calling React.forceUpdate()"],
                1,
                "In Redux, dispatching an action is the only mechanism to trigger reducer updates."
            ),
            mcq(
                "Redux Toolkit's createSlice combines which two traditional Redux concepts into one?",
                ["Actions and Reducers", "Store and Component", "HTML and CSS", "Middleware and Routing"],
                0,
                "createSlice automatically generates action creators and action types corresponding to reducers."
            ),
        ],

        questions: [
            qa(
                "Explain the three core principles and unidirectional data flow of Redux.",
                "Redux operates on three core principles: (1) Single Source of Truth: The entire global application state is stored in a single object tree within one central store. (2) State is Read-Only: State cannot be modified directly; changes are requested by dispatching an Action containing a 'type' and 'payload'. (3) Changes via Pure Functions (Reducers): Reducers receive the previous state and dispatched action, returning a new immutable state object without side effects. Data flows unidirectionally: View Component -> Dispatches Action -> Reducer Processes -> Store Updates -> View Re-renders.",
                4
            ),
            qa(
                "Compare React's Context API with Redux Toolkit (RTK). When should each be chosen?",
                "React Context API is built into React and requires no extra dependencies, making it ideal for low-frequency global updates like theme toggling (Dark/Light mode), localization, or current authenticated user profile. However, whenever Context value changes, all consuming components re-render, which can create performance bottlenecks in complex apps. Redux Toolkit (RTK) is an external state management library built for high-scale enterprise apps with frequent state changes. It provides granular selector subscriptions (useSelector), middleware pipelines, time-travel debugging via Redux DevTools, and asynchronous thunk handling.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — RESTful APIs, Axios Interceptors & React Query
========================================================= */

const apiIntegration = createTopic(
    "rest-apis-axios-interceptors-react-query",
    "RESTful APIs, Axios Interceptors & React Query",

    [
        definition(
            "Axios",
            "Axios is a promise-based HTTP client for the browser and Node.js that provides automatic JSON data transformation, request/response interception, client-side protection against XSRF, and cancellation capabilities."
        ),

        heading("Configuring Global Axios Instances and Interceptors"),

        text(
            "Interceptors allow injecting headers (such as JWT Bearer tokens) into outgoing requests and catching global errors (such as 401 Unauthorized) across all API calls."
        ),

        code(
            `// api/axiosInstance.js
import axios from "axios";

const api = axios.create({
  baseURL: "https://api.example.com/v1",
  timeout: 10000,
  headers: { "Content-Type": "application/json" }
});

// Request Interceptor: Attach JWT Token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers.Authorization = \`Bearer \${token}\`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor: Global Error & Refresh Token Handling
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.warn("Session expired. Redirecting to login...");
      localStorage.removeItem("access_token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default api;`,
            "javascript",
            "Axios Instance with Interceptors"
        ),

        heading("Server State vs Client State"),

        table(
            ["Dimension", "Client State (UI)", "Server State (Cache)"],
            [
                ["Ownership", "Synchronous UI state owned by the client", "Asynchronous remote state owned by backend database"],
                ["Persistence", "Lost on page reload (unless saved to storage)", "Persisted in server database"],
                ["Challenges", "Component architecture and state passing", "Caching, deduping, background refetching, pagination"],
                ["Tooling", "Redux Toolkit, useState", "TanStack React Query, RTK Query, SWR"],
            ]
        ),

        heading("React Query (TanStack Query) for Server State"),

        code(
            `import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import api from "./api/axiosInstance";

// Fetching query with automatic caching and background revalidation
const UserList = () => {
  const queryClient = useQueryClient();

  const { data: users, isLoading, isError, error } = useQuery({
    queryKey: ["users"],
    queryFn: () => api.get("/users"),
    staleTime: 60 * 1000, // Data remains fresh for 1 minute
  });

  // Mutation for creating a user
  const createUserMutation = useMutation({
    mutationFn: (newUser) => api.post("/users", newUser),
    onSuccess: () => {
      // Invalidate and refetch users cache automatically
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  if (isLoading) return <p>Loading users...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <button onClick={() => createUserMutation.mutate({ name: "Karan Dave" })}>Add User</button>
      <ul>
        {users.map(u => <li key={u.id}>{u.name}</li>)}
      </ul>
    </div>
  );
};`,
            "javascript",
            "React Query (useQuery and useMutation)"
        ),

        keyPoints([
            "Axios provides automatic JSON parsing and robust request/response interceptors.",
            "Interceptors inject JWT tokens and handle expired sessions globally.",
            "React Query separates Server State (API cache) from Client UI State.",
            "React Query provides automatic caching, background revalidation, and mutation invalidation.",
            "staleTime controls how long cached data is considered fresh before refetching.",
        ]),
    ],

    {
        summary:
            "Learn REST API integration using Axios, global request/response interceptors, Server State management, and TanStack React Query (useQuery, useMutation).",
        minutes: 13,
        tags: ["rest-api", "axios", "interceptors", "react-query", "tanstack-query", "important"],

        mcqs: [
            mcq(
                "What is the primary function of an Axios Request Interceptor?",
                ["To compress images", "To inspect or modify requests (e.g., attach JWT auth headers) before they are sent", "To render HTML", "To compile JSX"],
                1,
                "Request interceptors modify outgoing configuration objects, such as attaching Bearer tokens."
            ),
            mcq(
                "Which hook in TanStack React Query is used to execute POST, PUT, or DELETE mutations?",
                ["useQuery", "useMutation", "useFetch", "useAction"],
                1,
                "useMutation is designed specifically for creating, updating, or deleting remote server data."
            ),
            mcq(
                "What does the 'staleTime' option in React Query configure?",
                ["Server timeout duration", "The duration data remains fresh before background refetching is required", "Database connection pool", "Cookie expiration"],
                1,
                "staleTime defines the duration until cached query data is considered stale."
            ),
            mcq(
                "Unlike native window.fetch, Axios automatically:",
                ["Transforms JSON data in request and response", "Bypasses CORS restrictions", "Requires manual stringify", "Cannot handle HTTP errors"],
                0,
                "Axios automatically serializes JavaScript objects to JSON and parses JSON responses."
            ),
        ],

        questions: [
            qa(
                "What are Axios Interceptors? Provide a practical implementation showing how to attach JWT tokens and catch 401 Unauthorized errors.",
                "Axios Interceptors are middleware functions that intercept HTTP requests before they are dispatched to the network and responses before they are handled by then/catch blocks. Practical implementation: (1) Request Interceptor: Reads the JWT token from localStorage and appends it as config.headers.Authorization = `Bearer ${token}`. (2) Response Interceptor: Validates response status codes; if an HTTP 401 Unauthorized status is intercepted, it clears stale tokens from storage and redirects the user to the /login route, preventing repetitive auth error handling across individual components.",
                4
            ),
            qa(
                "Why is TanStack React Query preferred over managing API data directly in useEffect and useState?",
                "Managing server data with useState and useEffect requires writing repetitive boilerplate for loading states, error handling, manual fetch triggers, and race-condition prevention. It also fails to provide caching. TanStack React Query treats server data as 'Server State', providing: (1) Automatic in-memory caching and deduplication of identical requests. (2) Background revalidation (refetching on window focus or network reconnect). (3) Declarative loading (isLoading), error (isError), and data variables. (4) Mutation lifecycle hooks (useMutation) that automatically invalidate cache queries (queryClient.invalidateQueries), keeping the UI synced with backend databases.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — GraphQL Architecture, Queries & Mutations
========================================================= */

const graphQLArchitecture = createTopic(
    "graphql-architecture-queries-and-mutations",
    "GraphQL Architecture, Queries & Mutations",

    [
        definition(
            "GraphQL",
            "GraphQL is an open-source data query and manipulation language for APIs, created by Meta in 2012, that allows clients to request exactly the data they need and nothing more."
        ),

        heading("REST vs GraphQL Comparison"),

        table(
            ["Feature", "RESTful API", "GraphQL API"],
            [
                ["Endpoint Architecture", "Multiple endpoints (/users, /posts, /comments)", "Single endpoint (typically /graphql)"],
                ["Data Fetching", "Often suffers from Over-fetching and Under-fetching", "Fetches exact requested fields with zero wasted bandwidth"],
                ["Network Roundtrips", "Requires multiple requests for relational data", "Retrieves complex nested relational data in a single request"],
                ["Schema & Typing", "Implicit; requires external Swagger/OpenAPI docs", "Strongly typed schema defined via Schema Definition Language (SDL)"],
                ["HTTP Method", "Uses GET, POST, PUT, DELETE, PATCH", "Operates primarily via HTTP POST requests"],
            ]
        ),

        heading("Over-fetching and Under-fetching Explained"),

        list([
            "Over-fetching — The server returns an entire user object (50 fields) when the client only needs the user's name.",
            "Under-fetching — An endpoint does not return enough data, forcing the client to make consecutive requests (e.g., fetching /users/1, then /users/1/orders, then /orders/5/items).",
        ]),

        heading("GraphQL Schema Definition Language (SDL)"),

        code(
            `# Schema Definition on Server
type Student {
  id: ID!
  name: String!
  email: String!
  courses: [Course!]!
}

type Course {
  id: ID!
  title: String!
  credits: Int!
}

# Root Query Type (Read)
type Query {
  getStudent(id: ID!): Student
  getAllStudents: [Student!]!
}

# Root Mutation Type (Write)
type Mutation {
  createStudent(name: String!, email: String!): Student!
  deleteStudent(id: ID!): Boolean!
}`,
            "graphql",
            "GraphQL SDL Schema"
        ),

        heading("Client Queries & Mutations with Apollo Client"),

        code(
            `import React from "react";
import { gql, useQuery, useMutation } from "@apollo/client";

// 1. Defining GraphQL Query requesting specific fields only
const GET_STUDENT_QUERY = gql\`
  query GetStudent($id: ID!) {
    getStudent(id: $id) {
      name
      email
      courses {
        title
      }
    }
  }
\`;

// 2. React Component using Apollo Client Hook
export const StudentProfile = ({ studentId }) => {
  const { loading, error, data } = useQuery(GET_STUDENT_QUERY, {
    variables: { id: studentId }
  });

  if (loading) return <p>Loading student profile...</p>;
  if (error) return <p>GraphQL Error: {error.message}</p>;

  const { name, email, courses } = data.getStudent;

  return (
    <div>
      <h2>{name} ({email})</h2>
      <h4>Enrolled Courses:</h4>
      <ul>{courses.map((c, i) => <li key={i}>{c.title}</li>)}</ul>
    </div>
  );
};`,
            "javascript",
            "Apollo Client useQuery Integration"
        ),

        keyPoints([
            "GraphQL eliminates over-fetching and under-fetching by allowing exact field selection.",
            "A GraphQL API operates over a single HTTP endpoint using POST requests.",
            "Queries read data; Mutations create, update, or delete data; Subscriptions stream real-time events.",
            "GraphQL Schemas use Schema Definition Language (SDL) with scalar and object types.",
            "Apollo Client manages GraphQL caching, querying, and mutations in React applications.",
        ]),
    ],

    {
        summary:
            "Explore GraphQL architecture, REST vs GraphQL tradeoffs, Schema Definition Language (SDL), Queries, Mutations, and Apollo Client React integration.",
        minutes: 13,
        tags: ["graphql", "apollo-client", "queries", "mutations", "api", "important"],

        mcqs: [
            mcq(
                "What is 'Over-fetching' in REST API architecture?",
                ["The server crashes from too many requests", "The endpoint returns more data fields than the client UI actually requires", "The client sends too many query parameters", "The database fails to index fields"],
                1,
                "Over-fetching occurs when an endpoint delivers superfluous data unneeded by the client."
            ),
            mcq(
                "Which GraphQL operation is used to modify (create, update, delete) server data?",
                ["Query", "Mutation", "Subscription", "Fragment"],
                1,
                "Mutations are explicitly used to perform write and modification operations in GraphQL."
            ),
            mcq(
                "How many HTTP endpoints does a typical GraphQL API expose to clients?",
                ["One endpoint for each model", "A single endpoint (e.g., /graphql)", "Two (one for Read, one for Write)", "None"],
                1,
                "GraphQL handles all queries, mutations, and requests through a single endpoint."
            ),
            mcq(
                "Which GraphQL feature enables real-time, bi-directional event updates over WebSockets?",
                ["Mutations", "Subscriptions", "Directives", "Introspection"],
                1,
                "Subscriptions maintain WebSocket connections to push real-time data from server to client."
            ),
        ],

        questions: [
            qa(
                "What is GraphQL? Contrast GraphQL with RESTful APIs across Endpoints, Over-fetching, and Type Safety.",
                "GraphQL is a declarative query language and runtime for APIs. Key contrasts with REST: (1) Endpoints: REST uses multiple resource-specific URLs (/users, /posts), whereas GraphQL exposes a single unified endpoint (/graphql). (2) Over-fetching & Under-fetching: REST endpoints return fixed data payloads often containing unused fields (over-fetching) or requiring multiple chained requests to fetch related entities (under-fetching). GraphQL lets clients request exact nested fields in a single query. (3) Type Safety: GraphQL schemas are strictly typed using Schema Definition Language (SDL), enabling automated documentation and validation.",
                4
            ),
            qa(
                "Explain the three major operations in GraphQL: Queries, Mutations, and Subscriptions.",
                "(1) Queries: Read-only operations used to fetch data from the server. Clients specify exact fields and nested relationships. (2) Mutations: Write operations used to insert, update, or delete server-side records and return the modified object in the same roundtrip. (3) Subscriptions: Event-driven operations that establish a persistent WebSocket connection between client and server, allowing the server to push real-time updates (e.g., chat messages, live notifications) whenever specific backend events occur.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — Web Security: OWASP, JWT, XSS, CSRF & CORS
========================================================= */

const webSecurity = createTopic(
    "web-application-security-owasp-jwt-cors",
    "Web Security: OWASP, JWT, XSS, CSRF & CORS",

    [
        definition(
            "Web Application Security",
            "The practice of protecting websites, web applications, and web services from malicious cyber threats, unauthorized data exposure, and application-layer vulnerabilities listed by OWASP."
        ),

        heading("Major Web Vulnerabilities and Defenses"),

        table(
            ["Vulnerability", "Attack Mechanism", "Prevention / Mitigation"],
            [
                ["Cross-Site Scripting (XSS)", "Attacker injects malicious client-side JavaScript into web pages viewed by other users", "Sanitize and escape user input (DOMPurify), use Content Security Policy (CSP), React JSX auto-escaping"],
                ["Cross-Site Request Forgery (CSRF)", "Tricks an authenticated user's browser into submitting unauthorized commands to a vulnerable site", "Use SameSite=Strict cookies, anti-CSRF challenge tokens, custom request headers"],
                ["SQL / NoSQL Injection", "Attacker injects malicious database query fragments via input fields", "Use Parameterized Queries, Prepared Statements, and ORMs/ODMs (Mongoose, Prisma)"],
                ["Broken Authentication", "Weak passwords, session hijacking, exposed tokens", "Bcrypt password hashing, multi-factor authentication (MFA), short-lived JWTs"],
                ["Sensitive Data Exposure", "Unencrypted network transmission of passwords/keys", "Enforce HTTPS (TLS 1.3), HSTS headers, encrypt data at rest"],
            ]
        ),

        heading("JSON Web Token (JWT) Architecture"),

        definition(
            "JSON Web Token (JWT)",
            "A compact, URL-safe, open standard (RFC 7519) for securely transmitting claims between parties as a digitally signed JSON object."
        ),

        code(
            `// Structure of a JWT: Header.Payload.Signature
// 1. Header: Algorithm & Token Type
{ "alg": "HS256", "typ": "JWT" }

// 2. Payload: Claims & User Identity
{ "userId": "101", "role": "admin", "exp": 1718000000 }

// 3. Signature: Cryptographic Hash
HMACSHA256(
  base64UrlEncode(header) + "." + base64UrlEncode(payload),
  secretOrPrivateKey
)`,
            "text",
            "JWT Anatomy"
        ),

        heading("Secure Token Storage: HttpOnly Cookies vs LocalStorage"),

        table(
            ["Storage Location", "Vulnerable to XSS?", "Vulnerable to CSRF?", "Recommendation"],
            [
                ["LocalStorage", "YES (JavaScript can read localStorage)", "NO (Not automatically attached to requests)", "Insecure for high-risk auth tokens"],
                ["HttpOnly Secure Cookie", "NO (Inaccessible to document.cookie)", "YES (Mitigated via SameSite=Strict/Lax)", "Industry standard for JWT access/refresh tokens"],
            ]
        ),

        heading("Cross-Origin Resource Sharing (CORS)"),

        text(
            "CORS is a browser security mechanism that uses HTTP headers to determine whether a web application running at one origin has permission to access resources from a server at a different origin (domain, protocol, or port)."
        ),

        code(
            `// Node.js Express CORS Configuration
const express = require("express");
const cors = require("cors");
const app = express();

const corsOptions = {
  origin: "https://myfrontend.com", // Allowed origin
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true // Allow sending cookies over cross-origin requests
};

app.use(cors(corsOptions),;`,
            "javascript",
            "Express CORS Configuration"
        ),

        keyPoints([
            "XSS injects client-side malicious scripts; mitigated by CSP and input sanitization.",
            "CSRF exploits browser cookie auto-attachment; mitigated by SameSite=Strict cookies and CSRF tokens.",
            "JWT consists of Header, Payload, and Signature, used for stateless authentication.",
            "HttpOnly cookies prevent JavaScript from accessing tokens, mitigating XSS token theft.",
            "CORS headers control cross-origin resource sharing between different domains.",
        ]),
    ],

    {
        summary:
            "Understand web security essentials: OWASP Top 10, XSS, CSRF, SQLi, JWT token anatomy, HttpOnly cookie security, and CORS configuration.",
        minutes: 13,
        tags: ["security", "owasp", "jwt", "xss", "csrf", "cors", "important"],

        mcqs: [
            mcq(
                "Which attack involves injecting malicious client-side JavaScript into a web page?",
                ["SQL Injection", "Cross-Site Scripting (XSS)", "Cross-Site Request Forgery (CSRF)", "DDoS"],
                1,
                "XSS (Cross-Site Scripting) injects malicious executable scripts into web pages."
            ),
            mcq(
                "Why are 'HttpOnly' cookies preferred over localStorage for storing JWT authentication tokens?",
                ["They load faster", "They cannot be accessed by client-side JavaScript, protecting against XSS token theft", "They bypass CORS", "They never expire"],
                1,
                "HttpOnly cookies block client-side JavaScript from reading tokens via document.cookie."
            ),
            mcq(
                "The three parts of a JSON Web Token (JWT) separated by dots are:",
                ["Name, Key, Value", "Header, Payload, Signature", "User, Password, Hash", "Protocol, Domain, Route"],
                1,
                "A JWT comprises three Base64URL-encoded segments: Header, Payload, and Signature."
            ),
            mcq(
                "Which HTTP cookie attribute prevents the browser from sending the cookie in cross-site requests, mitigating CSRF?",
                ["SameSite=Strict", "Secure=False", "Path=/", "Domain=All"],
                0,
                "SameSite=Strict ensures cookies are never sent in cross-site requests, mitigating CSRF."
            ),
        ],

        questions: [
            qa(
                "Explain Cross-Site Scripting (XSS) and Cross-Site Request Forgery (CSRF). How are both mitigated?",
                "Cross-Site Scripting (XSS) occurs when an attacker injects malicious client-side JavaScript into a web app. When victim browsers load the page, the script executes, stealing session tokens or manipulating the DOM. Mitigation: Sanitize all inputs, escape HTML (React JSX auto-escapes), and implement a Content Security Policy (CSP). Cross-Site Request Forgery (CSRF) tricks an authenticated user's browser into submitting unauthorized state-changing HTTP requests to a vulnerable application that trusts the user's stored cookies. Mitigation: Use SameSite=Strict or SameSite=Lax cookie flags, require custom HTTP request headers, and implement synchronized anti-CSRF challenge tokens.",
                4
            ),
            qa(
                "Explain the anatomy of a JSON Web Token (JWT) and describe the complete stateless authentication workflow.",
                "A JWT consists of three parts separated by dots: (1) Header: Specifies the token type (JWT) and signing algorithm (e.g., HS256). (2) Payload: Contains claims such as user ID, role, and expiry timestamp (exp). (3) Signature: Created by hashing the encoded header, payload, and a secret key to ensure tamper-proofing. Authentication Workflow: (1) User sends login credentials to the server. (2) Server validates credentials and signs a JWT, returning it in an HttpOnly cookie or response body. (3) Client stores token and sends it in the Authorization header (Bearer <token>) for subsequent requests. (4) Server verifies the cryptographic signature without querying session tables (stateless) and fulfills the request.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 5 — Progressive Web Apps (PWA), CI/CD & Cloud Deployment
========================================================= */

const pwaAndDeployment = createTopic(
    "pwa-cicd-and-cloud-deployment",
    "Progressive Web Apps (PWA), CI/CD & Cloud Deployment",

    [
        definition(
            "Progressive Web App (PWA)",
            "A progressive web application uses modern browser APIs, service workers, and a web app manifest to deliver native-app-like experiences, including offline capabilities, background sync, and push notifications."
        ),

        heading("Core Pillars of a PWA"),

        table(
            ["Pillar", "File / Technology", "Role"],
            [
                ["Service Worker", "service-worker.js", "Client-side proxy script intercepting network requests, enabling offline caching and background sync"],
                ["Web App Manifest", "manifest.json", "JSON file defining application icon, splash screen, display mode (standalone), and theme colors"],
                ["HTTPS Security", "TLS / SSL Certificate", "Mandatory requirement for Service Workers and modern browser device APIs"],
            ]
        ),

        heading("Service Worker Caching Strategies"),

        table(
            ["Strategy", "How It Operates", "Ideal Usage"],
            [
                ["Cache First (Falling back to Network)", "Serves asset from cache; queries network only on cache miss", "Static assets (images, CSS, fonts, compiled JS bundles)"],
                ["Network First (Falling back to Cache)", "Queries network; serves cached version if offline", "Dynamic data feeds, user profiles"],
                ["Stale-While-Revalidate", "Serves cached version instantly while fetching updated version in background", "News articles, product listings, frequently updated content"],
            ]
        ),

        heading("Containerization with Docker"),

        code(
            `# Multi-stage Dockerfile for Next.js / React
# Stage 1: Build the application
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Production runtime environment
FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000
CMD ["npm", "start"]`,
            "dockerfile",
            "Production Multi-Stage Dockerfile"
        ),

        heading("CI/CD Automation Pipeline (GitHub Actions)"),

        code(
            `# .github/workflows/deploy.yml
name: Build and Deploy Production Web App

on:
  push:
    branches: [ main ]

jobs:
  build-and-test:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Code
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: 'npm'

      - name: Install Dependencies
        run: npm ci

      - name: Run Linter & Tests
        run: |
          npm run lint
          npm test

      - name: Build Next.js Bundle
        run: npm run build`,
            "yaml",
            "GitHub Actions CI Workflow"
        ),

        heading("Modern Cloud Deployment Platforms"),

        table(
            ["Platform", "Architecture Type", "Best Suited For"],
            [
                ["Vercel", "Serverless Edge Network", "Next.js, React, Jamstack frontend applications"],
                ["AWS (ECS / S3 + CloudFront)", "Enterprise Cloud Infrastructure", "High-scale enterprise apps, microservices, container clusters"],
                ["Docker / Kubernetes", "Container Orchestration", "Microservices architecture across multi-cloud environments"],
            ]
        ),

        keyPoints([
            "PWAs use Service Workers, manifest.json, and HTTPS for offline capability.",
            "Caching strategies include Cache First, Network First, and Stale-While-Revalidate.",
            "Docker creates lightweight, portable, consistent production container images.",
            "CI/CD pipelines automate testing, linting, building, and deployment upon Git push.",
            "Vercel, Netlify, and AWS CloudFront provide edge-accelerated global web hosting.",
        ]),
    ],

    {
        summary:
            "Explore Progressive Web Apps (Service Workers, manifest.json), caching strategies, Docker containerization, CI/CD with GitHub Actions, and cloud deployment.",
        minutes: 13,
        tags: ["pwa", "service-worker", "docker", "ci-cd", "github-actions", "cloud-deployment", "important"],

        mcqs: [
            mcq(
                "Which JavaScript script runs in the background to intercept network requests and enable PWA offline caching?",
                ["Service Worker", "Web Socket", "Node Daemon", "Web Worker"],
                0,
                "Service Workers act as client-side network proxies that manage offline asset caching."
            ),
            mcq(
                "Which file provides metadata (app icon, splash screen, standalone display) for PWA installation on mobile devices?",
                ["package.json", "manifest.json", "robots.txt", "docker-compose.yml"],
                1,
                "manifest.json defines the app name, icons, theme colors, and installation display mode."
            ),
            mcq(
                "Which PWA caching strategy serves cached content immediately while fetching fresh data in the background?",
                ["Cache Only", "Network Only", "Stale-While-Revalidate", "Direct Load"],
                2,
                "Stale-While-Revalidate serves cached data instantly and asynchronously refreshes the cache from the network."
            ),
            mcq(
                "What is the main benefit of Multi-Stage builds in a Dockerfile?",
                ["Increases compile time", "Produces minimal, lightweight production container image sizes by discarding build tools", "Encrypts JavaScript code", "Bypasses npm installation"],
                1,
                "Multi-stage Docker builds separate build dependencies from the final lightweight production image."
            ),
        ],

        questions: [
            qa(
                "What is a Progressive Web App (PWA)? Explain the role of Service Workers and Manifest.json.",
                "A Progressive Web App (PWA) is a web application that uses modern browser APIs to deliver native app-like capabilities. Key components: (1) Service Worker: An event-driven JavaScript proxy running in a background thread independent of the web page. It intercepts network fetch requests, manages offline caching strategies (Cache First, Network First), and handles background synchronization and push notifications. (2) Web App Manifest (manifest.json): A JSON file that configures application installation parameters on mobile devices, including app name, icon resolutions, display orientation (standalone), splash screen, and theme background colors. (3) HTTPS: Mandated for secure operation.",
                4
            ),
            qa(
                "What is CI/CD? Explain how GitHub Actions automates testing and deployment workflows for modern web applications.",
                "CI/CD stands for Continuous Integration and Continuous Deployment. Continuous Integration (CI) automatically builds, lints, and executes test suites whenever developers commit code to shared repositories, catching bugs early. Continuous Deployment (CD) automatically packages validated builds into artifacts (e.g., Docker container images) and deploys them to staging or production cloud servers without manual intervention. In GitHub Actions, workflows are defined in YAML files (.github/workflows). When a developer pushes to the 'main' branch, GitHub Actions spins up an automated runner container, installs dependencies (npm ci), executes automated tests, and deploys the build to cloud platforms (like Vercel or AWS).",
                4
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit2Topics = [
    reduxToolkit,
    apiIntegration,
    graphQLArchitecture,
    webSecurity,
    pwaAndDeployment,
];
