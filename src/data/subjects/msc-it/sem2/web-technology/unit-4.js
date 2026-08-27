/* =========================================================
   MSc-IT • SEM 2 • Web Technology
   UNIT 4 — Advanced Server-Side Web Scripting
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
   TOPIC 1 — Authentication and Authorization
========================================================= */

const authenticationAndAuthorization = createTopic(
    "authentication-and-authorization",
    "Authentication and Authorization",

    [
        definition(
            "Authentication",
            "The process of verifying who a user is — typically by checking credentials such as a username and password, a token, a biometric or a third-party identity provider. It answers the question: 'Who are you?'"
        ),

        definition(
            "Authorization",
            "The process of determining what an authenticated user is allowed to do — which resources they can access and which actions they can perform. It answers the question: 'What are you allowed to do?'"
        ),

        text(
            "Authentication and authorization are often confused but they are sequential and distinct. You first authenticate (prove identity) and then authorize (check permissions). A user can be authenticated but not authorized to delete a record. Security failures frequently mix these two up."
        ),

        heading("Authentication versus Authorization"),

        table(
            ["Aspect", "Authentication", "Authorization"],
            [
                ["Question", "Who are you?", "What can you do?"],
                ["When", "First (login)", "After authentication (every request)"],
                ["Examples", "Password, OTP, Google login, fingerprint", "Admin vs student roles, resource ownership"],
                ["Failure status", "401 Unauthorized", "403 Forbidden"],
                ["Stored as", "Session or token proving identity", "Roles, permissions, ACLs"],
            ]
        ),

        heading("Password Storage — Hashing"),

        definition(
            "Hashing",
            "A one-way cryptographic function that converts a password into a fixed-size string that cannot be reversed. The same password always produces the same hash (without salt); verification compares hashes, never the original password."
        ),

        code(
            `const bcrypt = require("bcrypt");

// Register — hash the password before saving
app.post("/register", async (req, res) => {
    const { email, password } = req.body;
    const saltRounds = 12;
    const hash = await bcrypt.hash(password, saltRounds);
    await User.create({ email, password: hash });  // store HASH, not plaintext
    res.status(201).json({ message: "Registered" });
});

// Login — compare plaintext with stored hash
app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ error: "Invalid credentials" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ error: "Invalid credentials" });

    // credentials OK — issue a session or token
    res.json({ message: "Logged in" });
});`,
            "javascript",
            "Hashing passwords with bcrypt"
        ),

        heading("Why bcrypt (not MD5 or SHA-256)?"),

        table(
            ["Algorithm", "Designed For", "Speed", "Salt", "Use for Passwords?"],
            [
                ["MD5 / SHA-1", "Checksums", "Very fast", "No (unless added)", "Never — broken / too fast"],
                ["SHA-256", "General hashing", "Fast", "No (unless added)", "No — too fast for brute force"],
                ["bcrypt", "Password hashing", "Intentionally slow", "Yes (built-in)", "Yes"],
                ["argon2", "Password hashing", "Configurable, memory-hard", "Yes", "Yes (winner of PHC)"],
            ]
        ),

        heading("Salting"),

        definition(
            "Salt",
            "A unique random value mixed into each password before hashing so that two users with the same password get different hashes, and precomputed rainbow tables become useless. bcrypt generates and stores the salt inside the hash string automatically."
        ),

        heading("Common Authentication Methods"),

        table(
            ["Method", "How It Works", "Pros", "Cons"],
            [
                ["Session + Cookie", "Server stores session; cookie holds session ID", "Easy to revoke, HttpOnly cookie", "Needs sticky sessions or shared store"],
                ["JWT (token)", "Server issues a signed token; client sends it each request", "Stateless, scales easily", "Hard to revoke before expiry"],
                ["API Key", "A long secret string identifying the client", "Simple for machine-to-machine", "If leaked, full access"],
                ["OAuth 2.0 / OIDC", "Delegate login to Google, GitHub, etc.", "No password to store, trusted UX", "More complex to implement"],
                ["MFA / OTP", "Password plus a second factor (app, SMS)", "Much stronger", "Extra user friction"],
            ]
        ),

        heading("Authorization Patterns"),

        table(
            ["Pattern", "Description", "Example"],
            [
                ["Role-Based (RBAC)", "Permissions grouped into roles assigned to users", "admin, editor, student"],
                ["Attribute-Based (ABAC)", "Rules on user/resource/environment attributes", "owner can edit own posts"],
                ["Access Control List (ACL)", "Per-resource list of who can do what", "file permissions"],
            ]
        ),

        code(
            `// Simple RBAC middleware
function authorize(...allowedRoles) {
    return (req, res, next) => {
        if (!req.user) return res.status(401).json({ error: "Unauthenticated" });
        if (!allowedRoles.includes(req.user.role)) {
            return res.status(403).json({ error: "Forbidden" });
        }
        next();
    };
}

app.delete("/students/:id", authenticate, authorize("admin"), async (req, res) => {
    await Student.findByIdAndDelete(req.params.id);
    res.status(204).send();
});`,
            "javascript",
            "Role-based authorization middleware"
        ),

        note(
            "Always return the same error for 'user not found' and 'wrong password' (e.g., 'Invalid credentials'). Different messages let attackers discover which emails are registered. Use 401 for unauthenticated and 403 for authenticated-but-forbidden — do not mix them.",
            "warning",
            "Security"
        ),

        keyPoints([
            "Authentication verifies identity (who); authorization verifies permissions (what).",
            "401 = not authenticated; 403 = authenticated but not allowed.",
            "Never store plaintext passwords — hash with bcrypt (slow, salted) and compare hashes.",
            "RBAC assigns roles (admin, student); middleware checks the role before sensitive routes.",
            "Same login error message for unknown user and wrong password to prevent email enumeration.",
        ]),
    ],

    {
        summary:
            "Understand authentication vs authorization, password hashing with bcrypt, salting, auth methods and RBAC middleware.",
        minutes: 12,
        tags: ["web", "authentication", "authorization", "bcrypt", "rbac", "important"],

        mcqs: [
            mcq(
                "Authentication answers the question:",
                ["What can you do?", "Who are you?", "Where are you?", "When did you log in?"],
                1,
                "Authentication verifies identity — who the user is."
            ),
            mcq(
                "A user is logged in but cannot delete a record. The correct status is:",
                ["401 Unauthorized", "403 Forbidden", "404 Not Found", "400 Bad Request"],
                1,
                "403 Forbidden means the user is authenticated but not permitted to perform the action."
            ),
            mcq(
                "Passwords should be stored using:",
                ["Plain text", "AES encryption", "bcrypt hashing", "Base64 encoding"],
                2,
                "bcrypt is a slow, salted, one-way hash designed for passwords."
            ),
            mcq(
                "A salt is used so that:",
                ["Passwords can be decrypted", "Two identical passwords produce different hashes", "Logins become faster", "Tokens last longer"],
                1,
                "A unique salt per password defeats rainbow tables and makes identical passwords hash differently."
            ),
            mcq(
                "RBAC stands for:",
                ["Random Byte Access Control", "Role-Based Access Control", "Request-Based Authentication Check", "Remote Backup Access Control"],
                1,
                "RBAC assigns permissions to roles, then roles to users."
            ),
            mcq(
                "On login, if the email is unknown you should return:",
                ["404 User not found", "The same error as a wrong password", "200 with empty body", "500"],
                1,
                "Returning a distinct 'user not found' lets attackers enumerate registered emails."
            ),
        ],

        questions: [
            qa(
                "Differentiate between authentication and authorization with HTTP status codes.",
                "Authentication is verifying who the user is, typically by checking a password, token or biometric. It happens at login and is proven on later requests by a session cookie or token. If authentication fails (missing or invalid credentials), the server returns 401 Unauthorized. Authorization happens after authentication and checks whether that user may perform a specific action on a specific resource. A student may be authenticated but not authorized to delete another student's record. If authorization fails, the server returns 403 Forbidden. Mixing these codes is a common mistake: 401 means 'I do not know who you are'; 403 means 'I know who you are, and you may not do this'. Middleware usually runs authenticate first, then authorize(roles).",
                5
            ),
            qa(
                "Explain how to store and verify passwords securely with bcrypt.",
                "Never store plaintext or reversible encryption of passwords. Use a password-hashing algorithm such as bcrypt (or argon2) that is intentionally slow and includes a unique salt. On registration, call bcrypt.hash(password, saltRounds) with a cost factor (e.g., 12) and store only the resulting hash string. bcrypt embeds the salt in the hash, so you do not store it separately. On login, load the user by email and call bcrypt.compare(plaintext, storedHash), which returns true if they match. Never log passwords. Use the same error message for unknown email and wrong password to prevent enumeration. Increase saltRounds over time as hardware gets faster. SHA-256 and MD5 are too fast and must not be used for passwords.",
                5
            ),
            qa(
                "What is RBAC? How would you implement it in Express?",
                "Role-Based Access Control groups permissions into named roles (admin, editor, student) and assigns roles to users. Checking a role is simpler than checking every permission. In Express, after authentication middleware attaches req.user (including req.user.role), an authorize middleware accepts allowed roles: function authorize(...roles) { return (req, res, next) => { if (!req.user) return res.status(401).json({ error: 'Unauthenticated' }); if (!roles.includes(req.user.role)) return res.status(403).json({ error: 'Forbidden' }); next(); }; }. You then protect routes: app.delete('/students/:id', authenticate, authorize('admin'), handler). Ownership checks (user can edit only their own profile) are a form of attribute-based control and are implemented by comparing req.user.id with the resource owner id inside the handler or another middleware.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — Sessions, Cookies and JWT
========================================================= */

const sessionsCookiesAndJwt = createTopic(
    "sessions-cookies-and-jwt",
    "Sessions, Cookies and JWT",

    [
        text(
            "HTTP is stateless — the server forgets each request after responding. To keep a user logged in, the client must send proof of identity on every request. The two dominant approaches are server-side sessions (identified by a cookie) and client-side tokens (typically JWT in a header or cookie)."
        ),

        heading("Cookies"),

        definition(
            "Cookie",
            "A small piece of data that the server sends to the browser with Set-Cookie, which the browser then includes automatically on later requests to the same site. Cookies are the standard way to send a session ID."
        ),

        heading("Important Cookie Attributes"),

        table(
            ["Attribute", "Purpose", "Recommended"],
            [
                ["HttpOnly", "JavaScript cannot read the cookie (mitigates XSS theft)", "Yes for session/token cookies"],
                ["Secure", "Cookie sent only over HTTPS", "Yes in production"],
                ["SameSite=Strict/Lax/None", "Controls whether the cookie is sent on cross-site requests (CSRF defence)", "Lax or Strict"],
                ["Path", "URL path prefix the cookie is sent for", "/ or a specific API path"],
                ["Max-Age / Expires", "Lifetime of the cookie", "Session cookie or a finite time"],
                ["Domain", "Which hosts receive the cookie", "Default: current host only"],
            ]
        ),

        heading("Server-Side Sessions"),

        definition(
            "Session",
            "Server-side storage of data about a logged-in user, keyed by a random session ID. The browser stores only the ID (in a cookie); the server looks up the full data (user id, role, cart) in memory, Redis or a database."
        ),

        code(
            `const session = require("express-session");
const RedisStore = require("connect-redis").default;

app.use(session({
    store: new RedisStore({ client: redisClient }),
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 1000 * 60 * 60 * 24,  // 1 day
    },
}));

app.post("/login", async (req, res) => {
    const user = await verifyCredentials(req.body);
    req.session.userId = user.id;
    req.session.role = user.role;
    res.json({ message: "Logged in" });
});

app.get("/me", (req, res) => {
    if (!req.session.userId) return res.status(401).json({ error: "Not logged in" });
    res.json({ id: req.session.userId, role: req.session.role });
});

app.post("/logout", (req, res) => {
    req.session.destroy(() => {
        res.clearCookie("connect.sid");
        res.json({ message: "Logged out" });
    });
});`,
            "javascript",
            "Express sessions"
        ),

        heading("JWT (JSON Web Token)"),

        definition(
            "JWT",
            "A compact, URL-safe token with three Base64url parts — header, payload and signature — separated by dots. The server signs the payload with a secret (HMAC) or private key (RSA/ECDSA). Anyone with the secret can verify that the payload was not tampered with."
        ),

        code(
            `JWT structure:  header.payload.signature

  Header:  { "alg": "HS256", "typ": "JWT" }
  Payload: { "sub": "42", "role": "admin", "exp": 1735689600 }
  Signature: HMACSHA256(base64(header) + "." + base64(payload), secret)

  Example token:
  eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI0MiIsInJvbGUiOiJhZG1pbiJ9.signature`,
            "text",
            "JWT anatomy"
        ),

        heading("Using JWT in Express"),

        code(
            `const jwt = require("jsonwebtoken");
const SECRET = process.env.JWT_SECRET;

// Issue a token after successful login
app.post("/login", async (req, res) => {
    const user = await verifyCredentials(req.body);
    const token = jwt.sign(
        { sub: user.id, role: user.role },
        SECRET,
        { expiresIn: "1h" }
    );
    res.json({ token });
});

// Middleware to protect routes
function authenticate(req, res, next) {
    const header = req.headers.authorization || "";
    const token = header.startsWith("Bearer ") ? header.slice(7) : null;
    if (!token) return res.status(401).json({ error: "No token" });

    try {
        req.user = jwt.verify(token, SECRET);  // throws if invalid or expired
        next();
    } catch (err) {
        return res.status(401).json({ error: "Invalid or expired token" });
    }
}

app.get("/profile", authenticate, (req, res) => {
    res.json({ id: req.user.sub, role: req.user.role });
});`,
            "javascript",
            "JWT issue and verify"
        ),

        heading("Sessions versus JWT"),

        table(
            ["Aspect", "Server Session + Cookie", "JWT"],
            [
                ["Where is state?", "Server (memory, Redis, DB)", "Inside the token (client stores it)"],
                ["Revocation", "Easy — delete the session", "Hard — wait for expiry or maintain a denylist"],
                ["Scaling", "Needs shared session store", "Stateless — any server can verify"],
                ["Size", "Cookie holds a small ID", "Token can grow with claims"],
                ["XSS risk", "HttpOnly cookie cannot be read by JS", "If stored in localStorage, JS can steal it"],
                ["CSRF risk", "Cookie sent automatically — needs SameSite / CSRF token", "Authorization header is not sent automatically"],
                ["Best for", "Traditional web apps (server-rendered)", "APIs, SPAs, mobile apps, microservices"],
            ]
        ),

        heading("Where to Store a JWT on the Client"),

        table(
            ["Storage", "XSS", "CSRF", "Recommendation"],
            [
                ["localStorage", "Vulnerable (any JS can read it)", "Safe (not sent automatically)", "Avoid for sensitive tokens"],
                ["Memory (JS variable)", "Safer (gone on refresh)", "Safe", "Good for short-lived tokens + refresh cookie"],
                ["HttpOnly Secure cookie", "Safe from JS", "Needs SameSite / CSRF protection", "Often the best compromise"],
            ]
        ),

        heading("Refresh Tokens"),

        text(
            "A common pattern is a short-lived access token (JWT, 5–15 minutes) plus a long-lived refresh token stored in an HttpOnly cookie. When the access token expires, the client calls /refresh; the server validates the refresh token and issues a new access token. Stolen access tokens expire quickly; stolen refresh tokens can be revoked in the database."
        ),

        note(
            "Never put passwords or overly sensitive data in a JWT payload — it is Base64-encoded, not encrypted, so anyone can decode it. The signature only proves integrity. Use HTTPS so the token cannot be stolen in transit. Keep JWT_SECRET in an environment variable.",
            "warning",
            "JWT Security"
        ),

        keyPoints([
            "Cookies can be HttpOnly, Secure and SameSite to reduce XSS and CSRF risk.",
            "Sessions store user data on the server; the cookie holds only a random session ID.",
            "A JWT is header.payload.signature; verify with jwt.verify and a secret.",
            "Sessions are easy to revoke; JWTs scale without a session store but are hard to revoke.",
            "Prefer HttpOnly cookies over localStorage for tokens; use short-lived access tokens plus refresh tokens.",
        ]),
    ],

    {
        summary:
            "Master cookies and their security attributes, server-side sessions, JWT structure and usage, and session vs JWT trade-offs.",
        minutes: 13,
        tags: ["web", "jwt", "sessions", "cookies", "csrf", "important"],

        mcqs: [
            mcq(
                "The HttpOnly cookie attribute means:",
                ["The cookie is sent only over HTTP, not HTTPS", "JavaScript cannot read the cookie", "The cookie never expires", "The cookie is not sent to the server"],
                1,
                "HttpOnly prevents document.cookie (and XSS) from reading the cookie; the browser still sends it to the server."
            ),
            mcq(
                "A JWT consists of how many parts?",
                ["2", "3", "4", "1"],
                1,
                "A JWT has three Base64url parts: header, payload and signature, separated by dots."
            ),
            mcq(
                "JWT payloads are:",
                ["Encrypted by default", "Base64-encoded (readable) and signed", "Impossible to decode", "Stored only on the server"],
                1,
                "The payload is encoded, not encrypted — anyone can decode it. The signature prevents tampering."
            ),
            mcq(
                "An advantage of sessions over JWTs is:",
                ["They are stateless", "They are easy to revoke immediately", "They work without cookies", "They are smaller"],
                1,
                "Deleting a server-side session logs the user out immediately; a JWT remains valid until it expires."
            ),
            mcq(
                "SameSite=Lax on a cookie helps prevent:",
                ["XSS", "CSRF", "SQL injection", "DDoS"],
                1,
                "SameSite restricts when the cookie is sent on cross-site requests, which is the core of CSRF."
            ),
            mcq(
                "Storing a JWT in localStorage is risky because of:",
                ["CSRF", "XSS (any script can read it)", "SQL injection", "Slow performance"],
                1,
                "localStorage is accessible to JavaScript, so an XSS attack can steal the token."
            ),
        ],

        questions: [
            qa(
                "Explain server-side sessions and the cookie attributes that protect them.",
                "A session stores user data on the server (memory, Redis or a database) keyed by a cryptographically random session ID. After login, the server sets a cookie containing only that ID. On later requests the browser sends the cookie, and the server looks up the session. The cookie should be HttpOnly so JavaScript cannot steal it via XSS, Secure so it is only sent over HTTPS, and SameSite=Lax or Strict to reduce CSRF. Set a finite Max-Age and a strong session secret. Logout destroys the session and clears the cookie. For multiple server instances, use a shared store like Redis so any instance can find the session. Sessions are easy to revoke and keep sensitive data off the client.",
                5
            ),
            qa(
                "What is a JWT? How do you issue and verify one in Express?",
                "A JSON Web Token has three Base64url parts: a header (algorithm), a payload (claims such as sub, role, exp) and a signature created with a secret or private key. After verifying credentials, the server calls jwt.sign({ sub: user.id, role: user.role }, SECRET, { expiresIn: '1h' }) and returns the token. The client sends it as Authorization: Bearer <token>. Middleware extracts the token, calls jwt.verify(token, SECRET), and on success attaches the decoded payload to req.user. If verification fails (bad signature or expired), it returns 401. The payload is not encrypted — do not put passwords in it. Keep JWT_SECRET in the environment. JWTs are stateless, which helps scaling, but revocation before expiry requires a denylist or short expiry plus refresh tokens.",
                5
            ),
            qa(
                "Compare sessions and JWTs. When would you choose each?",
                "Sessions keep state on the server and send only a session ID in an HttpOnly cookie. They are easy to revoke, keep data off the client, and suit traditional server-rendered apps. They need a shared session store to scale across multiple servers and cookies need CSRF protection. JWTs are self-contained and stateless — any server can verify the signature without a lookup. They suit APIs, SPAs, mobile apps and microservices. They are hard to revoke before expiry, can be stolen if stored in localStorage (XSS), and the payload is readable. A common hybrid is a short-lived JWT access token plus a refresh token in an HttpOnly cookie. Choose sessions for classic web apps where logout must be instant; choose JWTs when you need horizontal scale without sticky sessions.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — Security Middleware and Common Web Attacks
========================================================= */

const securityMiddlewareAndAttacks = createTopic(
    "security-middleware-and-common-web-attacks",
    "Security Middleware and Common Web Attacks",

    [
        heading("OWASP Top Risks (Selected)"),

        table(
            ["Attack", "What Happens", "Primary Defence"],
            [
                ["Injection (SQLi, NoSQLi, XSS)", "Untrusted data is executed as code or query", "Parameterise queries; encode output"],
                ["Broken Authentication", "Credentials or tokens are stolen or guessed", "bcrypt, MFA, HttpOnly cookies, rate limits"],
                ["XSS (Cross-Site Scripting)", "Attacker injects JS that runs in the victim's browser", "Encode output; CSP; avoid innerHTML"],
                ["CSRF (Cross-Site Request Forgery)", "Victim's browser sends an authenticated request the user did not intend", "SameSite cookies; CSRF tokens"],
                ["Security Misconfiguration", "Default passwords, stack traces, open CORS", "Helmet, least privilege, hide errors"],
                ["Sensitive Data Exposure", "Passwords, tokens or PII leak", "HTTPS, hashing, no secrets in Git"],
                ["Broken Access Control", "Users access others' data or admin actions", "Authz checks on every request"],
            ]
        ),

        heading("XSS (Cross-Site Scripting)"),

        definition(
            "XSS",
            "An attack where the attacker injects malicious JavaScript into a page that other users load. The script runs with the victim's privileges and can steal cookies, deface the page or perform actions as the user."
        ),

        table(
            ["Type", "Description", "Example"],
            [
                ["Stored XSS", "Payload saved on the server (comment, profile) and served to others", "Comment: <script>steal(document.cookie)</script>"],
                ["Reflected XSS", "Payload in the URL is echoed in the response", "/search?q=<script>..."],
                ["DOM-based XSS", "Client-side JS writes untrusted data into the DOM unsafely", "innerHTML = location.hash"],
            ]
        ),

        code(
            `// VULNERABLE
el.innerHTML = userComment;  // if comment contains <script>, it runs

// SAFE
el.textContent = userComment;  // treated as text, not HTML

// Content-Security-Policy header (helmet)
app.use(helmet.contentSecurityPolicy({
    directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'"],
    },
}));`,
            "javascript",
            "Preventing XSS"
        ),

        heading("CSRF (Cross-Site Request Forgery)"),

        definition(
            "CSRF",
            "An attack where a malicious site causes the victim's browser to send a request to a trusted site where the victim is logged in. The browser automatically includes cookies, so the request looks authenticated."
        ),

        code(
            `Attack sketch:
  1. Victim is logged into bank.com (session cookie set)
  2. Victim visits evil.com which contains:
     <form action="https://bank.com/transfer" method="POST">
       <input name="to" value="attacker">
       <input name="amount" value="1000">
     </form>
     <script>document.forms[0].submit();</script>
  3. Browser sends the POST with the session cookie
  4. Bank executes the transfer

Defences:
  - SameSite=Lax or Strict on the session cookie
  - CSRF token (random value in a hidden field, verified on the server)
  - For APIs: do not use cookies; require an Authorization header
  - Re-authenticate for sensitive actions (password change)`,
            "text",
            "CSRF attack and defences"
        ),

        heading("CORS (Cross-Origin Resource Sharing)"),

        definition(
            "CORS",
            "A browser security feature (and HTTP header protocol) that controls which origins may read responses from your API. By default, browsers block JS on origin A from reading responses from origin B unless B sends Access-Control-Allow-Origin."
        ),

        code(
            `const cors = require("cors");

// Reflect any origin — too open for credentialed APIs
app.use(cors());

// Allow only your front-end
app.use(cors({
    origin: "https://app.example.com",
    credentials: true,  // allow cookies
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
}));`,
            "javascript",
            "CORS configuration"
        ),

        heading("Helmet and Other Security Middleware"),

        table(
            ["Package", "Purpose"],
            [
                ["helmet", "Sets security HTTP headers (CSP, X-Frame-Options, HSTS, etc.)"],
                ["cors", "Configures Cross-Origin Resource Sharing"],
                ["express-rate-limit", "Limits requests per IP (brute-force defence)"],
                ["express-validator / Joi / zod", "Validates and sanitises input"],
                ["hpp", "Prevents HTTP parameter pollution"],
                ["cookie-parser", "Parses Cookie header (needed for signed cookies)"],
            ]
        ),

        code(
            `const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

app.use(helmet());

const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 5,
    message: { error: "Too many login attempts, try later" },
});
app.post("/login", loginLimiter, loginHandler);`,
            "javascript",
            "helmet and rate limiting"
        ),

        heading("HTTPS and Headers"),

        list([
            "Use HTTPS everywhere in production (TLS). Redirect HTTP to HTTPS.",
            "HSTS (Strict-Transport-Security) tells browsers to always use HTTPS.",
            "X-Content-Type-Options: nosniff prevents MIME sniffing.",
            "X-Frame-Options / CSP frame-ancestors prevent clickjacking.",
            "Do not send stack traces to clients in production.",
        ]),

        note(
            "CORS is a browser restriction, not a server firewall. A mobile app or curl can still call your API. CORS is not an authentication mechanism. Combine it with real auth (sessions/JWT) and never use origin: '*' together with credentials: true.",
            "warning",
            "CORS Myth"
        ),

        keyPoints([
            "XSS injects JS into pages; prevent it with textContent, encoding and Content-Security-Policy.",
            "CSRF uses the victim's cookies; prevent it with SameSite, CSRF tokens or Authorization headers.",
            "CORS controls which browser origins can read API responses; it is not authentication.",
            "helmet sets secure headers; rate-limit login routes; never leak stack traces.",
            "Use HTTPS and HSTS in production.",
        ]),
    ],

    {
        summary:
            "Learn XSS, CSRF, CORS, helmet, rate limiting and essential security headers for Express APIs.",
        minutes: 13,
        tags: ["web", "xss", "csrf", "cors", "helmet", "security", "important"],

        mcqs: [
            mcq(
                "XSS is primarily prevented by:",
                ["Using PUT instead of POST", "Encoding output / using textContent / CSP", "Disabling cookies", "Using MongoDB"],
                1,
                "Treat untrusted data as text, not HTML, and restrict script sources with CSP."
            ),
            mcq(
                "CSRF relies on the browser:",
                ["Executing stolen JavaScript", "Automatically sending cookies with cross-site requests", "Ignoring CORS", "Caching passwords"],
                1,
                "The browser attaches cookies to requests to the target site even if the request was triggered by another site."
            ),
            mcq(
                "helmet is used to:",
                ["Parse JSON", "Set security-related HTTP headers", "Connect to MongoDB", "Hash passwords"],
                1,
                "helmet configures headers such as CSP, HSTS and X-Frame-Options."
            ),
            mcq(
                "CORS origin: '*' with credentials: true is:",
                ["Recommended", "Invalid / insecure — browsers will reject it", "Required for JWT", "The Express default"],
                1,
                "The CORS spec forbids reflecting credentials with a wildcard origin."
            ),
            mcq(
                "Rate limiting login endpoints helps against:",
                ["XSS", "Brute-force password attacks", "CSRF", "Clickjacking"],
                1,
                "Limiting attempts per IP slows password guessing."
            ),
            mcq(
                "Stored XSS differs from reflected XSS because the payload is:",
                ["In the URL only", "Saved on the server and shown to other users", "Only in cookies", "Impossible to exploit"],
                1,
                "Stored XSS persists (e.g., in a comment) and runs for everyone who views it."
            ),
        ],

        questions: [
            qa(
                "Explain XSS and how to prevent it in a web application.",
                "Cross-Site Scripting occurs when untrusted data is inserted into a page as HTML or JavaScript and runs in other users' browsers. Stored XSS saves the payload (a comment or profile field) and serves it to every visitor. Reflected XSS echoes a URL parameter into the response. DOM-based XSS happens when client JavaScript writes untrusted data into the DOM unsafely, for example via innerHTML. Prevention: treat user data as text (textContent, templating auto-escape), never build HTML with string concatenation of user input, set a Content-Security-Policy that disallows inline scripts, use HttpOnly cookies so stolen document.cookie is useless for the session, and sanitise HTML if you must allow limited markup (a vetted library). Encoding on output is more reliable than trying to filter on input.",
                5
            ),
            qa(
                "Explain CSRF and its defences.",
                "CSRF tricks a logged-in user's browser into sending a request the user did not intend. Because cookies are sent automatically, the request appears authenticated. A typical attack is a hidden form on evil.com that POSTs to bank.com/transfer. Defences include SameSite=Lax or Strict on session cookies so they are not sent on most cross-site requests; synchroniser CSRF tokens (a random value in the form and in the session, checked on submit); requiring custom headers such as Authorization (which cross-site forms cannot set); and re-authentication for high-risk actions. APIs that use Bearer tokens in headers instead of cookies are not vulnerable to classic CSRF. Combine SameSite with tokens for defence in depth, and always use HTTPS.",
                5
            ),
            qa(
                "What is CORS? How should it be configured for a production API?",
                "CORS is a browser mechanism that blocks JavaScript on one origin from reading responses from another origin unless the server opts in with Access-Control-Allow-Origin. It does not block curl, Postman or mobile apps — it is not authentication. For production, allow only known front-end origins (https://app.example.com), not '*'. If the API uses cookies, set credentials: true and a specific origin (wildcards are forbidden with credentials). Restrict methods and headers to what the app actually uses. Preflight OPTIONS requests must receive the same CORS headers. Pair CORS with real authentication and never treat Origin as proof of identity because it can be spoofed by non-browser clients.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — File Uploads, Validation and Router Organisation
========================================================= */

const uploadsValidationAndStructure = createTopic(
    "file-uploads-validation-and-router-organisation",
    "File Uploads, Validation and Router Organisation",

    [
        heading("Input Validation"),

        text(
            "Never trust client input. Validate types, lengths, formats and business rules on the server even if the front-end already validates. Attackers can bypass the browser and send requests directly."
        ),

        code(
            `const { body, param, validationResult } = require("express-validator");

const studentRules = [
    body("name").trim().notEmpty().isLength({ max: 50 }).escape(),
    body("email").isEmail().normalizeEmail(),
    body("marks").optional().isInt({ min: 0, max: 100 }),
    param("id").isMongoId(),
];

app.post("/students", studentRules, (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    // req.body is now sanitised
});`,
            "javascript",
            "express-validator"
        ),

        heading("File Uploads with Multer"),

        definition(
            "Multer",
            "Express middleware for handling multipart/form-data, used for file uploads. It writes files to disk or memory and populates req.file / req.files."
        ),

        code(
            `const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: "uploads/",
    filename: (req, file, cb) => {
        const unique = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, unique + path.extname(file.originalname));
    },
});

const upload = multer({
    storage,
    limits: { fileSize: 2 * 1024 * 1024 },  // 2 MB
    fileFilter: (req, file, cb) => {
        const ok = ["image/jpeg", "image/png", "image/webp"].includes(file.mimetype);
        cb(ok ? null : new Error("Only images allowed"), ok);
    },
});

app.post("/avatar", authenticate, upload.single("avatar"), (req, res) => {
    if (!req.file) return res.status(400).json({ error: "No file" });
    res.json({ path: req.file.filename });
});`,
            "javascript",
            "Multer file upload"
        ),

        heading("File Upload Security"),

        list([
            "Limit file size to prevent disk exhaustion.",
            "Allow-list MIME types and extensions; do not trust the client-supplied type alone.",
            "Generate your own filenames — never use user filenames as-is (path traversal).",
            "Store uploads outside the web root or serve them through a vetted route.",
            "Scan or process images (strip EXIF, re-encode) when possible.",
            "Require authentication before accepting uploads.",
        ], true),

        heading("Organising an Express App"),

        code(
            `project/
├── src/
│   ├── app.js              ← express() + middleware, no listen()
│   ├── server.js           ← connect DB, app.listen()
│   ├── config/
│   │   └── db.js
│   ├── routes/
│   │   ├── index.js
│   │   ├── students.js
│   │   └── auth.js
│   ├── controllers/
│   │   └── studentController.js
│   ├── models/
│   │   └── Student.js
│   ├── middleware/
│   │   ├── authenticate.js
│   │   ├── authorize.js
│   │   └── errorHandler.js
│   └── validators/
│       └── studentValidator.js
├── uploads/
├── .env
├── package.json
└── package-lock.json`,
            "text",
            "Suggested project structure"
        ),

        heading("Express Router"),

        code(
            `// routes/students.js
const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/studentController");
const { authenticate, authorize } = require("../middleware/auth");

router.get("/", ctrl.list);
router.get("/:id", ctrl.getOne);
router.post("/", authenticate, authorize("admin"), ctrl.create);
router.patch("/:id", authenticate, ctrl.update);
router.delete("/:id", authenticate, authorize("admin"), ctrl.remove);

module.exports = router;

// app.js
const studentRouter = require("./routes/students");
app.use("/students", studentRouter);`,
            "javascript",
            "Express Router"
        ),

        heading("MVC-style Separation"),

        table(
            ["Layer", "Responsibility", "Example"],
            [
                ["Routes", "Map URL + method to controller; attach middleware", "router.post('/', auth, ctrl.create)"],
                ["Controllers", "Parse req, call model, send res", "create(req, res) { ... }"],
                ["Models", "Schema, DB queries, business rules on data", "Student.create()"],
                ["Middleware", "Cross-cutting: auth, logging, errors", "authenticate, errorHandler"],
                ["Validators", "Input rules", "body('email').isEmail()"],
            ]
        ),

        heading("404 and Error Handler Order"),

        code(
            `// After all routes
app.use((req, res) => {
    res.status(404).json({ error: "Route not found" });
});

// Last — four-argument error handler
app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = status === 500 && process.env.NODE_ENV === "production"
        ? "Internal server error"
        : err.message;
    res.status(status).json({ error: message });
});`,
            "javascript",
            "404 and error middleware"
        ),

        note(
            "Keep app.js free of listen() so you can require the app in tests without opening a port. server.js connects the database and calls listen. Controllers should not contain SQL/Mongoose queries mixed with response formatting if the project grows — extract a service layer.",
            "tip",
            "Testable Structure"
        ),

        keyPoints([
            "Validate every input on the server; sanitise strings that will be displayed.",
            "Multer handles multipart uploads; limit size, allow-list types and rename files.",
            "Split an Express app into routes, controllers, models and middleware.",
            "express.Router() mounts path prefixes like app.use('/students', studentRouter).",
            "Register 404 handler after routes and the 4-arg error handler last.",
        ]),
    ],

    {
        summary:
            "Learn input validation, secure file uploads with Multer, Express Router and a maintainable MVC-style project structure.",
        minutes: 12,
        tags: ["web", "multer", "validation", "router", "mvc", "important"],

        mcqs: [
            mcq(
                "User input should be validated:",
                ["Only in the browser", "Only in the database", "On the server, even if the client already validated", "Never — trust the client"],
                2,
                "Client validation is UX; attackers bypass it. The server is the real gate."
            ),
            mcq(
                "Multer is used for:",
                ["JWT signing", "Handling multipart file uploads", "Hashing passwords", "Serving static CSS"],
                1,
                "Multer parses multipart/form-data and exposes req.file."
            ),
            mcq(
                "For uploaded files you should:",
                ["Keep the original user filename", "Generate a new filename and allow-list types", "Store them as SQL", "Skip size limits"],
                1,
                "User filenames can contain ../ ; always rename and restrict types and size."
            ),
            mcq(
                "express.Router() is used to:",
                ["Replace middleware", "Split routes into modules with a path prefix", "Connect MongoDB", "Hash cookies"],
                1,
                "Routers group related routes and are mounted with app.use('/prefix', router)."
            ),
            mcq(
                "The error-handling middleware must be registered:",
                ["First", "Before routes", "Last, with four parameters", "Inside each controller"],
                2,
                "The (err, req, res, next) handler is registered after routes so next(err) can reach it."
            ),
        ],

        questions: [
            qa(
                "Why must the server validate input even if the front-end already does?",
                "Front-end validation improves user experience by giving instant feedback, but it is not a security control. Anyone can disable JavaScript, edit requests in DevTools, or call the API with curl. If the server trusts the client, attackers can send missing fields, wrong types, oversized strings, HTML/JS (XSS) or SQL fragments. Server validation enforces types, lengths, formats (email), ranges (marks 0–100) and business rules, then returns 400 with clear errors. Sanitise data that will be stored or displayed (trim, escape). Schema validation (Mongoose, Joi) adds a second layer. Never skip server checks because 'the form already validates'.",
                5
            ),
            qa(
                "Explain secure file upload handling with Multer.",
                "Multer is middleware that parses multipart/form-data and saves files to disk or memory, exposing them as req.file. For security: set limits.fileSize to cap disk use; use fileFilter to allow-list MIME types (and preferably verify magic bytes, not only the extension); generate a unique filename with a safe extension instead of using file.originalname, which may contain path traversal (../../etc/passwd); store files outside the public root or serve them through a controlled route; require authentication; and consider re-encoding images. Handle Multer errors (file too large, invalid type) in error middleware and return 400. Never execute or include uploaded files as code.",
                5
            ),
            qa(
                "Describe a clean Express project structure and the role of Router.",
                "A maintainable app separates concerns: server.js connects the database and listens; app.js creates the Express app and mounts middleware and routers (so tests can import the app without binding a port). routes/ maps HTTP methods and paths to controllers and attaches auth middleware. controllers/ read req, call models, and send res. models/ define schemas and queries. middleware/ holds authenticate, authorize and errorHandler. validators/ hold express-validator chains. express.Router() creates a mini-app for a resource; studentRouter defines GET / and POST / then app.use('/students', studentRouter) prefixes all of those paths. A 404 handler comes after all routes, and a four-argument error handler comes last.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 5 — Testing, Logging and Deployment
========================================================= */

const testingLoggingAndDeployment = createTopic(
    "testing-logging-and-deployment",
    "Testing, Logging and Deployment",

    [
        heading("Testing Express APIs"),

        definition(
            "HTTP API Test",
            "An automated test that sends HTTP requests to the application (often without binding a real port) and asserts status codes and response bodies. In Node.js this is commonly done with Jest (or Mocha) plus Supertest."
        ),

        code(
            `// app.js exports the Express app (no listen)
const request = require("supertest");
const app = require("../src/app");

describe("GET /students", () => {
    it("returns 200 and an array", async () => {
        const res = await request(app).get("/students");
        expect(res.status).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });
});

describe("POST /students", () => {
    it("rejects missing name", async () => {
        const res = await request(app)
            .post("/students")
            .send({ marks: 80 });
        expect(res.status).toBe(400);
    });
});`,
            "javascript",
            "Supertest example"
        ),

        heading("Types of Tests"),

        table(
            ["Type", "What It Tests", "Speed"],
            [
                ["Unit", "A single function in isolation (mocked dependencies)", "Fastest"],
                ["Integration", "Several layers together (route + DB)", "Medium"],
                ["End-to-end (E2E)", "The full system as a user would", "Slowest"],
            ]
        ),

        heading("Logging"),

        text(
            "console.log is fine while learning but production needs structured logs with levels, timestamps and request IDs. Popular loggers include pino (very fast) and winston. Log errors with stack traces internally; never send stacks to clients in production."
        ),

        code(
            `const pino = require("pino-http");
app.use(pino());

app.get("/boom", (req, res) => {
    req.log.info({ userId: req.user?.sub }, "hello");
    res.json({ ok: true });
});`,
            "javascript",
            "HTTP logging"
        ),

        heading("Process Managers and Clustering"),

        table(
            ["Tool", "Purpose"],
            [
                ["node server.js", "Fine for development; dies if the process crashes"],
                ["nodemon", "Restarts on file change (development only)"],
                ["PM2", "Keeps the process alive, logs, clustering, zero-downtime reload"],
                ["Node cluster module", "Fork workers to use all CPU cores"],
                ["Docker", "Package the app and runtime into a portable container"],
            ]
        ),

        heading("Environment-based Configuration"),

        code(
            `const PORT = process.env.PORT || 3000;
const isProd = process.env.NODE_ENV === "production";

if (isProd) {
    app.set("trust proxy", 1);  // behind Nginx / load balancer
}

app.listen(PORT);`,
            "javascript",
            "Production configuration"
        ),

        heading("Typical Production Stack"),

        code(
            `Internet
    │
    ▼
[ DNS ] → [ TLS termination / CDN ]
    │
    ▼
[ Nginx or cloud load balancer ]
    │  reverse proxy, gzip, static files
    ▼
[ Node.js (PM2 cluster)  × N ]
    │
    ▼
[ MongoDB / PostgreSQL ]   [ Redis (sessions, cache) ]`,
            "text",
            "Production architecture"
        ),

        heading("Deployment Checklist"),

        list([
            "NODE_ENV=production; secrets only in the platform's env vars, not in the image.",
            "HTTPS everywhere; redirect HTTP; enable HSTS.",
            "helmet, CORS allow-list, rate limits on auth routes.",
            "Do not run as root; use a non-privileged user in Docker.",
            "Health check endpoint (GET /health) for the load balancer.",
            "Graceful shutdown: stop accepting connections, finish in-flight requests, close DB pool on SIGTERM.",
            "Log to stdout; let the platform collect logs.",
            "npm ci in CI/CD (uses lockfile) rather than npm install.",
            "Pin Node version (.nvmrc or Docker FROM node:20-alpine).",
        ], true),

        heading("Graceful Shutdown"),

        code(
            `const server = app.listen(PORT);

function shutdown() {
    server.close(() => {
        mongoose.connection.close(false).then(() => process.exit(0));
    });
    setTimeout(() => process.exit(1), 10000);  // force after 10s
}

process.on("SIGTERM", shutdown);
process.on("SIGINT", shutdown);`,
            "javascript",
            "Graceful shutdown"
        ),

        heading("Putting It All Together — Request Lifecycle"),

        steps([
            "Client sends HTTPS request (cookie or Authorization header).",
            "Load balancer / Nginx terminates TLS and forwards to a Node process.",
            "helmet and CORS middleware run.",
            "express.json() or multer parses the body.",
            "Logger records method, URL and request id.",
            "authenticate / authorize middleware run.",
            "Validators check input.",
            "Controller calls the model / database with parameterised queries.",
            "Response sent with the correct status code.",
            "Error middleware catches any thrown error and returns a safe JSON body.",
        ]),

        note(
            "Twelve-Factor App ideas apply well to Node APIs: one codebase, explicit dependencies (package-lock), config in the environment, backing services as attached resources, logs as event streams, and disposability (fast start, graceful shutdown).",
            "tip",
            "Twelve-Factor"
        ),

        keyPoints([
            "Test APIs with Jest + Supertest against the exported app without listen().",
            "Use structured logging; hide stack traces from clients in production.",
            "PM2 or containers keep the process alive and use multiple cores.",
            "Production: HTTPS, env secrets, helmet, health checks, graceful SIGTERM shutdown.",
            "npm ci and a locked Node version make builds reproducible.",
        ]),
    ],

    {
        summary:
            "Learn API testing with Supertest, logging, process managers, production architecture, deployment checklist and graceful shutdown.",
        minutes: 12,
        tags: ["web", "testing", "deployment", "pm2", "production", "important"],

        mcqs: [
            mcq(
                "Supertest is used to:",
                ["Hash passwords", "Send HTTP requests to an Express app in tests", "Parse cookies", "Minify JavaScript"],
                1,
                "Supertest drives the Express app in-process so you can assert status codes and bodies."
            ),
            mcq(
                "NODE_ENV=production typically:",
                ["Enables nodemon", "Turns on extra debugging", "Enables production behaviour (less verbose errors, caches)", "Disables HTTPS"],
                2,
                "Many libraries (Express, Pug) change behaviour when NODE_ENV is production."
            ),
            mcq(
                "Graceful shutdown on SIGTERM should:",
                ["Call process.exit(0) immediately", "Stop accepting connections, finish requests, close the DB, then exit", "Ignore the signal", "Delete the database"],
                1,
                "The load balancer needs in-flight requests to complete and connections to close cleanly."
            ),
            mcq(
                "npm ci differs from npm install by:",
                ["Updating package.json", "Installing exactly from package-lock.json (clean, reproducible)", "Publishing the package", "Skipping devDependencies always"],
                1,
                "npm ci is designed for CI: it requires a lockfile and produces a deterministic tree."
            ),
            mcq(
                "A /health endpoint is used by:",
                ["Attackers", "Load balancers and orchestrators to see if the process is alive", "The browser cache", "DNS"],
                1,
                "Health checks determine whether to send traffic to an instance or restart it."
            ),
        ],

        questions: [
            qa(
                "How do you test an Express API without starting a live server?",
                "Export the Express app from app.js without calling listen(). In tests, import that app and use Supertest: request(app).get('/students').expect(200). Supertest injects HTTP requests in-process, so no port is bound and tests are fast and isolated. Use a separate test database or in-memory MongoDB, reset data in beforeEach, and set NODE_ENV=test. Assert status codes, headers and JSON bodies. Mock external services. Keep unit tests for pure functions and integration tests for routes plus the database. Because listen() lives in server.js, requiring app.js in Jest does not start the production server.",
                5
            ),
            qa(
                "Describe a typical production deployment for a Node.js API.",
                "The public entry is DNS and TLS, often at a CDN or load balancer. Nginx or a cloud LB terminates TLS, may serve static files, and reverse-proxies to Node. Several Node processes run under PM2 cluster mode or as multiple containers so all CPU cores are used and a crash is restarted. Configuration and secrets come from environment variables. Redis may hold sessions or cache; MongoDB or PostgreSQL holds data. The app exposes GET /health for the orchestrator. Logs go to stdout. On SIGTERM the process stops accepting connections, finishes in-flight requests, closes the DB pool and exits. Images are built with npm ci and a pinned Node version, run as a non-root user, with NODE_ENV=production.",
                5
            ),
            qa(
                "List eight items from a production checklist for a Node/Express API.",
                "Set NODE_ENV=production and load secrets from the platform environment, never from a committed .env in the image. Force HTTPS and HSTS. Use helmet, an explicit CORS allow-list, and rate limits on authentication routes. Do not run the process as root. Provide a /health endpoint. Implement graceful shutdown on SIGTERM. Log structured JSON to stdout without sending stack traces to clients. Use npm ci and pin the Node version for reproducible builds. Additional items: hashed passwords, parameterised queries, validated uploads, and keeping dependencies patched (npm audit).",
                4
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit4Topics = [
    authenticationAndAuthorization,
    sessionsCookiesAndJwt,
    securityMiddlewareAndAttacks,
    uploadsValidationAndStructure,
    testingLoggingAndDeployment,
];

export default unit4Topics;