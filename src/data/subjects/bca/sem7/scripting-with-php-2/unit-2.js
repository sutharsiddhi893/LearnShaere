/* =========================================================
   BCA � SEM 7 � Scripting with PHP - II
   UNIT 2 � Advanced Database, REST Security, Capstone & Professional Practice
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
   TOPIC 1 � Advanced Database Integration: PDO Transactions & Repository Pattern
========================================================= */

const advancedDatabaseIntegration = createTopic(
    "advanced-database-integration-pdo-transactions-repository",
    "Advanced Database Integration: PDO Transactions & Repository Pattern",

    [
        definition(
            "PDO Transaction",
            "A transaction is a sequence of database operations that must all succeed or all fail together, ensuring atomicity and data consistency."
        ),

        heading("PDO Transaction Implementation"),

        code(
            `<?php
  try {
      $pdo->beginTransaction();

      $stmt = $pdo->prepare("INSERT INTO orders (user_id, total) VALUES (?, ?)");
      $stmt->execute([101, 250.00]);

      $stmt = $pdo->prepare("UPDATE inventory SET stock = stock - 1 WHERE product_id = ?");
      $stmt->execute([55]);

      $pdo->commit();
  } catch (Exception $e) {
      $pdo->rollBack();
      error_log("Transaction failed: " . $e->getMessage(),;
  }
?>`,
            "php",
            "PDO Transaction Example"
        ),

        heading("Repository Pattern for Clean Architecture"),

        table(
            ["Layer", "Responsibility", "Example Class"],
            [
                ["Model / Repository", "Encapsulates database queries; provides clean interface", "StudentRepository::findById(), getAll()"],
                ["Controller", "Handles HTTP requests; calls repository", "StudentController::showProfile()"],
                ["Database Connection", "Centralized PDO instance shared across repositories", "Config/Database.php singleton"]
            ]
        ),

        heading("Named Placeholders and Fetch Modes"),

        code(
            `<?php
  $stmt = $pdo->prepare("SELECT * FROM students WHERE roll = :roll AND course = :course");
  $stmt->execute([":roll" => 101, ":course" => "BCA"]);
  $results = $stmt->fetchAll(PDO::FETCH_ASSOC); // Associative array
  // PDO::FETCH_OBJ for objects; PDO::FETCH_CLASS for custom class instances
?>`,
            "php",
            "Named Placeholders Example"
        ),

        note(
            "Always use transactions for multi-table updates. Named placeholders improve readability over positional markers.",
            "tip",
            "Data Consistency"
        ),

        keyPoints([
            "PDO provides portable, object-oriented database access with exception handling.",
            "Transactions (beginTransaction, commit, rollBack) ensure atomic multi-step operations.",
            "Repository Pattern separates data access from controllers for maintainability.",
            "Named placeholders (:roll) improve query readability and maintainability."
        ]),
  ],

{
    summary: "Master PDO transactions, repository abstraction, named placeholders, and fetch modes for robust database integration.",
        minutes: 13,
            tags: ["pdo", "transactions", "repository-pattern", "named-placeholders", "database-abstraction", "important"],

                mcqs: [
                    mcq("What method begins a PDO transaction?", ["startTransaction()", "beginTransaction()", "openTransaction()", "initTransaction()"], 1, "PDO uses beginTransaction() to start atomic operations."),
                    mcq("Which fetch mode returns associative arrays?", ["PDO::FETCH_OBJ", "PDO::FETCH_ASSOC", "PDO::FETCH_CLASS", "PDO::FETCH_NUM"], 1, "FETCH_ASSOC returns arrays with column names as keys."),
                    mcq("What is the Repository Pattern's main benefit?", ["Faster database connections", "Separation of database logic from controllers for testability", "Only image storage", "Automatic HTML generation"], 1, "Repository Pattern improves maintainability and testability."),
                    mcq("Why use named placeholders (:roll) over positional (?)?", ["Only for INSERT", "Better readability and easier maintenance", "Faster execution always", "Required for SELECT only"], 1, "Named placeholders make queries more readable and maintainable.")
                ],

                    questions: [
                        qa("Why are database transactions critical, and how does PDO implement them?", "Transactions ensure that multi-step operations are atomic � either all succeed or none apply. PDO implements them with beginTransaction(), commit(), and rollBack() inside try-catch blocks. If any step fails, rollBack() prevents partial data corruption."),
                        qa("How does the Repository Pattern improve PHP application architecture?", "The Repository Pattern encapsulates all database queries in dedicated classes (e.g., StudentRepository). Controllers call repository methods rather than writing SQL directly. This improves readability, allows easy database switching, enables mocking for testing, and keeps controllers focused on request handling rather than data access logic.")
                    ],
  }
);

/* =========================================================
   TOPIC 2 � RESTful API Design, JWT & Advanced Security Patterns
========================================================= */

const restApiAdvancedSecurity = createTopic(
    "restful-api-design-jwt-advanced-security-patterns",
    "RESTful API Design, JWT & Advanced Security Patterns",

    [
        definition(
            "JWT (JSON Web Token)",
            "A compact, URL-safe token format for securely transmitting claims between parties, consisting of Header.Payload.Signature, used commonly for stateless authentication in REST APIs."
        ),

        heading("REST Endpoint Design and Security Patterns"),

        table(
            ["Method", "Action", "Example Endpoint", "Security Note"],
            [
                ["GET", "Read resource(s)", "/api/students", "Always sanitize output; prevent information disclosure"],
                ["POST", "Create resource", "/api/students", "Validate input; use parameterized queries; check CSRF"],
                ["PUT / PATCH", "Update resource", "/api/students/101", "Verify authorization; validate data integrity"],
                ["DELETE", "Remove resource", "/api/students/101", "Confirm user has permission; prevent accidental deletion"],
                ["JWT Auth", "Stateless authentication header", "Authorization: Bearer <token>", "Verify signature; check expiration; rotate secrets"]
            ]
        ),

        heading("CSRF Token Validation Pattern"),

        code(
            `<?php
  session_start();
  if (empty($_SESSION["csrf_token"]), {
      $_SESSION["csrf_token"] = bin2hex(random_bytes(32),;
  }

  // On submission:
  if ($_SERVER["REQUEST_METHOD"] == "POST") {
      if (!isset($_POST["csrf_token"]) || !hash_equals($_SESSION["csrf_token"], $_POST["csrf_token"]), {
          die("CSRF validation failed.");
      }
  }
?>`,
            "php",
            "CSRF Validation Pattern"
        ),

        heading("JWT Structure and Usage Concept"),

        text(
            "A JWT consists of three Base64-encoded segments separated by dots: Header (algorithm, type), Payload (claims like userId, role, exp), and Signature (HMAC of encoded header + payload with a secret key). The server verifies the signature without querying a session database, enabling stateless authentication."
        ),

        note(
            "Always use HTTPS for APIs to prevent token interception. Store JWT secrets securely (environment variables, not source code). Implement token expiration and refresh mechanisms.",
            "warning",
            "JWT Security Requirements"
        ),

        keyPoints([
            "REST APIs use stateless HTTP methods mapped to resource actions.",
            "JWT provides stateless authentication but requires HTTPS and secure secret management.",
            "CSRF validation is essential for all state-changing requests in session-based applications.",
            "Always sanitize inputs, use parameterized queries, and return proper HTTP status codes."
    ]),
  ],

{
    summary: "Learn REST endpoint design, JWT authentication concepts, CSRF patterns, and security best practices for API development.",
        minutes: 13,
            tags: ["rest-api", "jwt", "csrf", "json", "api-security", "stateless-auth", "important"],

                mcqs: [
                    mcq("What does JWT stand for?", ["Java Web Token", "JSON Web Token", "JavaScript Web Tool", "Joint Web Transfer"], 1, "JWT stands for JSON Web Token."),
                    mcq("Which header is used to send a JWT in a REST API request?", ["X-Token", "Cookie-Token", "Authorization: Bearer <token>", "Token-Header"], 2, "JWT is sent in the Authorization header with Bearer scheme."),
                    mcq("Why is CSRF token validation necessary for forms?", ["To speed up requests", "To verify requests come from legitimate user sessions", "To encrypt images", "To format output"], 1, "CSRF tokens verify that form submissions originate from authorized sessions."),
                    mcq("What is the purpose of HTTPS for API security?", ["To make URLs shorter", "To encrypt data in transit and prevent token interception", "Only for images", "To delete data"], 1, "HTTPS protects transmitted tokens and data from eavesdropping.")
                ],

                    questions: [
                        qa("Compare JWT-based stateless authentication with traditional session-based authentication.", "JWT stores authentication claims in a signed token sent with each request, eliminating server-side session storage (stateless, scalable). Traditional sessions store state server-side, linked to a session cookie. JWT is ideal for APIs and distributed systems; traditional sessions are simpler for monolithic web applications but require server storage."),
                        qa("What is CSRF and how does token validation prevent it?", "CSRF tricks an authenticated user's browser into submitting unauthorized requests to a trusted site. A CSRF token is a unique, random value stored in the session and embedded in forms. The server validates that the submitted token matches the session token, ensuring the request originated from a legitimate form served to the user, not a malicious external site.")
                    ],
  }
);

/* =========================================================
   TOPIC 3 � Capstone Integration, Deployment Security & Professional Practice
========================================================= */

const capstoneDeploymentSecurity = createTopic(
    "capstone-integration-deployment-security-best-practices",
    "Capstone Integration, Deployment Security & Professional Practice",

    [
        definition(
            "Capstone Integration",
            "The process of combining all learned concepts � OOP, MVC, REST APIs, database patterns, security measures � into a cohesive, deployable, and professionally documented application."
        ),

        heading("Deployment Security Checklist"),

        table(
            ["Practice", "Implementation", "Purpose"],
            [
                [".env Configuration", "Store credentials in .env; load with dotenv or native support", "Prevent credential exposure in version control"],
                ["Production Error Handling", "Set display_errors = Off; log errors privately", "Prevent sensitive information leakage"],
                ["File Upload Security", "Validate MIME type, size limit, generate unique filenames", "Prevent malicious file uploads"],
                [".htaccess Hardening", "Deny access to config files; disable directory browsing", "Reduce attack surface"],
                ["SSL Enforcement", "Redirect HTTP to HTTPS; enforce TLS 1.3", "Protect data in transit"]
            ]
        ),

        heading("Capstone Project Structure Example"),

        list([
            "/public � index.php, asset files (CSS, JS)",
            "/src/Controllers � Request handling and API endpoints",
            "/src/Models � Data access and repository classes",
            "/src/Views � HTML templates",
            "/config � Database settings (.env or protected config)",
            "/tests � Manual test scripts and test data",
            "/docs � Final report, presentation slides, user manual"
        ]),

        heading("Professional Best Practices and Future Growth"),

        table(
            ["Practice", "Why It Matters", "Next Step / Growth Path"],
            [
                ["Clean Code & Comments", "Readability, maintainability, evaluation clarity", "Contribute to open-source projects"],
                ["Version Control (Git)", "History tracking, collaboration, rollback capability", "Learn branching strategies (Git Flow)"],
                ["Security Awareness", "Prevents common vulnerabilities; demonstrates professionalism", "Study OWASP Top 10 and penetration testing basics"],
                ["Framework Mastery", "Industry standard development requires framework skills", "Learn Laravel or Symfony after core PHP mastery"],
                ["DevOps / CI-CD", "Professional deployment requires automation", "Learn Docker, GitHub Actions, basic cloud deployment"]
            ]
        ),

        note(
            "A capstone demonstrates professional capability: clean architecture, secure code, clear documentation, version control history, and the ability to explain design choices. These skills form the foundation for any modern software engineering role.",
            "info",
            "Professional Foundation"
        ),

        keyPoints([
            "A capstone integrates OOP, MVC, REST APIs, security, and database patterns into one project.",
            "Deployment requires .env security, production error handling, upload validation, and SSL enforcement.",
            "Documentation (README, user manual, presentation) is as important as working code for evaluation.",
            "Future growth includes framework mastery (Laravel), DevOps practices, and advanced security testing."
        ]),
  ],

{
    summary: "Integrate all PHP-II concepts into a professional capstone, apply deployment security practices, and understand the path toward framework mastery and DevOps.",
        minutes: 12,
            tags: ["capstone", "deployment", "security-hardening", "professional-practice", "future-growth", "important"],

                mcqs: [
                    mcq("Why is display_errors turned off in production?", ["To speed execution", "To prevent information leakage about system details", "To delete errors", "To format output"], 1, "Hidden errors prevent attackers from learning file paths and configurations."),
                    mcq("What does .env configuration protect?", ["Only images", "Sensitive credentials from being exposed in source control", "Only CSS files", "Only HTML"], 1, ".env files keep database passwords and secrets out of Git repositories."),
                    mcq("Which practice validates file uploads securely?", ["Only checking file size", "Checking MIME type, size, generating unique filenames", "Not checking uploads", "Only checking filename length"], 1, "Full validation includes MIME, size limits, and safe filename generation."),
                    mcq("What is the primary benefit of using Git version control for projects?", ["Only faster execution", "Complete change history, collaboration, and rollback capability", "Only image storage", "Only formatting"], 1, "Git provides a complete audit trail and enables safe collaboration.")
                ],

                    questions: [
                        qa("Describe the security measures required before deploying a PHP project to production.", "Measures include: using .env for credentials (not in source); setting display_errors = Off; using parameterized queries exclusively; implementing CSRF tokens; validating file uploads (MIME, size, unique names); using .htaccess to deny access to sensitive files; enforcing HTTPS with TLS; and maintaining session security (HttpOnly, Secure cookies, session regeneration after login)."),
                        qa("How does a well-documented capstone project demonstrate professional capability to evaluators or employers?", "A documented capstone shows the ability to design architecture (SRS, ER diagrams), implement securely (prepared statements, CSRF, validation), document clearly (README, user manual, presentation), and explain technical choices confidently. Version control history proves incremental, organized development. Together, these demonstrate readiness for professional software engineering roles.")
                    ],
  }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit2Topics = [
    advancedDatabaseIntegration,
    restApiAdvancedSecurity,
    capstoneDeploymentSecurity,
];
