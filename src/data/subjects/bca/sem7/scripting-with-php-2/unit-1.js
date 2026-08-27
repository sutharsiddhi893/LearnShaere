/* =========================================================
   BCA � SEM 7 � Scripting with PHP - II
   UNIT 1 � OOP in PHP, MVC, Composer, Error Handling & Namespaces
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
   TOPIC 1 � Object-Oriented PHP: Classes, Inheritance & Traits
========================================================= */

const oopPhpAdvanced = createTopic(
    "oop-php-advanced-classes-inheritance-traits",
    "Object-Oriented PHP: Classes, Inheritance & Traits",

    [
        definition(
            "Object-Oriented Programming in PHP",
            "PHP supports full OOP with classes, inheritance, interfaces, abstract classes, traits, and namespaces. This allows modular, reusable, and maintainable code structures essential for large-scale applications."
        ),

        heading("Class Declaration, Visibility, and Type Declarations"),

        code(
            `<?php
  declare(strict_types=1); // Enforce strict type checking

  class Student {
      // Visibility modifiers: public, protected, private
      public int $roll;
      protected string $name;
      private float $cgpa;

      public function __construct(int $roll, string $name, float $cgpa) {
          $this->roll = $roll;
          $this->name = $name;
          $this->cgpa = $cgpa;
      }

      public function getGrade(): string {
          return ($this->cgpa >= 7.5) ? "Distinction" : "Pass";
      }

      // Getter for private property (Encapsulation)
      public function getCgpa(): float {
          return $this->cgpa;
      }
  }

  $s = new Student(101, "Neha", 8.9);
  echo $s->getGrade(); // Distinction
?>`,
            "php",
            "Strict Types Class Example"
        ),

        heading("Inheritance and Method Overriding"),

        code(
            `<?php
  class Person {
      protected string $name;

      public function __construct(string $name) {
          $this->name = $name;
      }

      public function introduce(): string {
          return "Hello, I am " . $this->name;
      }
  }

  class Teacher extends Person {
      private string $subject;

      public function __construct(string $name, string $subject) {
          parent::__construct($name);
          $this->subject = $subject;
      }

      // Overriding parent method
      public function introduce(): string {
          return parent::introduce() . ". I teach " . $this->subject . ".";
      }
  }

  $t = new Teacher("Dr. Mehta", "Mathematics");
  echo $t->introduce();
?>`,
            "php",
            "Inheritance and Method Overriding"
        ),

        heading("Traits: Horizontal Code Reuse"),

        definition(
            "Trait",
            "A trait is a mechanism for code reuse in PHP that allows methods and properties to be shared across multiple independent class hierarchies, avoiding the limitations of single inheritance."
        ),

        code(
            `<?php
  trait Loggable {
      public function log(string $message): void {
          echo "[LOG] " . $message . "\\n";
      }
  }

  trait Timestampable {
      public function createdAt(): string {
          return date("Y-m-d H:i:s");
      }
  }

  class User {
      use Loggable, Timestampable;

      private string $email;

      public function __construct(string $email) {
          $this->email = $email;
          $this->log("User created at " . $this->createdAt(),;
      }
  }
?>`,
            "php",
            "Traits Usage Example"
        ),

        note(
            "PHP does not support multiple inheritance of classes. Traits solve this limitation by allowing common behavior to be mixed into multiple unrelated classes without duplicating code.",
            "tip",
            "Traits vs Inheritance"
        ),

        keyPoints([
            "PHP supports visibility modifiers (public, protected, private) and strict typing.",
            "Inheritance uses extends; parent constructor accessed via parent::.",
            "Traits (use TraitName) provide horizontal code reuse across classes.",
            "Encapsulation is enforced by controlling access to properties through getters/setters."
        ]),
    ],

    {
        summary:
            "Master advanced OOP in PHP: strict types, visibility, inheritance, method overriding, traits, and encapsulation patterns.",
        minutes: 13,
        tags: ["php", "oop", "inheritance", "traits", "encapsulation", "strict-types", "important"],

        mcqs: [
            mcq("What is the purpose of the 'trait' keyword mechanism in PHP?", ["Multiple inheritance of classes", "Reuse common methods across unrelated classes", "Replace interfaces", "Only for static methods"], 1, "Traits allow horizontal reuse without multiple inheritance limitations."),
            mcq("Which visibility modifier restricts access to the declaring class only?", ["public", "protected", "private", "global"], 2, "Private members are only accessible within the declaring class."),
            mcq("How do you call a parent method from an overriding child method?", ["super::method()", "parent::method()", "base::method()", "inherit::method()"], 1, "PHP uses parent::methodName() to invoke the parent version."),
            mcq("What does declare(strict_types=1); enforce?", ["Only string types", "Strict type checking for parameter and return types", "Only integer arithmetic", "Automatic error suppression"], 1, "Strict types enforce exact type matching without automatic type juggling.")
        ],

        questions: [
            qa("Compare Traits and Inheritance in PHP. When should each be used?", "Inheritance establishes an 'is-a' relationship (e.g., Teacher is a Person) and is vertical. Traits provide 'has-behavior' reuse (e.g., Loggable, Timestampable) across unrelated classes horizontally. Use inheritance for structural relationships; use traits to share common functionality without forcing artificial hierarchies."),
            qa("How does encapsulation improve security and maintainability in PHP applications?", "Encapsulation hides internal state and exposes only necessary interfaces (getters/setters). This prevents external code from corrupting data, allows validation logic within setters, and makes future changes to internal representation safe without affecting dependent code.")
        ],
    }
);

/* =========================================================
   TOPIC 2 � MVC Architecture, Namespaces & Composer
========================================================= */

const mvcNamespaceComposer = createTopic(
    "mvc-architecture-namespaces-composer",
    "MVC Architecture, Namespaces & Composer",

    [
        definition(
            "MVC (Model-View-Controller)",
            "MVC is a design pattern that separates an application into three components: Model (data/business logic), View (presentation layer), and Controller (request handling and coordination)."
        ),

        heading("Basic MVC Structure in PHP"),

        code(
            `// Example directory structure for a basic PHP MVC framework
/app
  /Controllers
      StudentController.php
  /Models
      Student.php
  /Views
      /students
          index.php
  /core
      Router.php
      Database.php`,
            "text",
            "MVC Folder Structure Example"
        ),

        heading("Namespaces and Autoloading with PSR-4"),

        definition(
            "Namespace",
            "A namespace in PHP is a hierarchical naming convention that prevents class name collisions by grouping related classes under a unique name, enabling organized, scalable codebases."
        ),

        definition(
            "Composer Autoload (PSR-4)",
            "PSR-4 is a PHP-FIG standard for autoloading classes based on namespace-to-file-path mapping, allowing automatic class loading without manual include statements."
        ),

        code(
            `<?php
  // File: src/Controllers/StudentController.php
  namespace App\\Controllers;

  use App\\Models\\Student;

  class StudentController {
      public function index(): void {
          $model = new Student();
          $students = $model->getAll();
          require "../Views/students/index.php";
      }
  }
?>`,
            "php",
            "Namespace and Controller Example"
        ),

        heading("Composer Dependency Management"),

        table(
            ["Composer Command / Feature", "Purpose"],
            [
                ["composer init", "Creates composer.json for project dependency tracking"],
                ["composer require vendor/package", "Installs a package and updates autoloader"],
                ["composer update", "Updates installed packages to latest allowed versions"],
                ["composer install", "Installs all dependencies defined in composer.json"],
                ["autoload_psr4", "Maps namespaces to file directories for automatic class loading"]
            ]
        ),

        note(
            "Using namespaces and Composer transforms PHP projects from simple script collections into professional, maintainable applications with dependency tracking and organized architecture.",
            "tip",
            "Professional Practice"
        ),

        keyPoints([
            "MVC separates concerns: Model (data), View (UI), Controller (logic/routing).",
            "Namespaces prevent class name collisions in large projects.",
            "PSR-4 autoloading eliminates manual include/require statements.",
            "Composer manages dependencies and generates optimized autoload files."
        ]),
    ],

    {
        summary:
            "Understand MVC architecture, namespace usage, PSR-4 autoloading, and Composer dependency management for professional PHP applications.",
        minutes: 13,
        tags: ["mvc", "namespaces", "composer", "autoloading", "psr-4", "framework-basics", "important"],

        mcqs: [
            mcq("What does MVC stand for?", ["Main View Component", "Model-View-Controller", "Memory View Cache", "Module Variable Control"], 1, "MVC separates data, interface, and control logic."),
            mcq("What is the purpose of namespaces in PHP?", ["To make code slower", "To prevent class name collisions", "Only for database connections", "Only for functions"], 1, "Namespaces group related classes under unique names to avoid conflicts."),
            mcq("What standard maps namespaces to file paths for autoloading?", ["PSR-1", "PSR-4", "PSR-3", "PSR-7"], 1, "PSR-4 defines namespace-to-directory mapping for autoloading."),
            mcq("What does 'composer install' do?", ["Deletes packages", "Reads composer.json and installs defined dependencies", "Creates namespaces only", "Only updates PHP version"], 1, "composer install reads the lock file/composer.json and installs all required packages.")
        ],

        questions: [
            qa("Explain the MVC pattern and describe the role of each component in a PHP web application.", "Model manages data and business logic (database queries, validation). View presents data to the user (HTML templates). Controller receives user input, interacts with the Model, and selects the appropriate View. This separation improves maintainability: changing the UI doesn't affect data logic, and changing data logic doesn't require UI rewrites."),
            qa("How do Namespaces and Composer Autoloading improve PHP project structure?", "Namespaces prevent naming conflicts when integrating third-party libraries. Composer's PSR-4 autoloading automatically loads class files based on namespace declarations, eliminating manual include/require statements. This allows developers to organize code into logical directories that mirror namespace hierarchies, making large projects readable and scalable.")
        ],
    }
);

/* =========================================================
   TOPIC 3 � Building RESTful APIs with PHP & Advanced Security
========================================================= */

const restApiAdvancedSecurity = createTopic(
    "restful-apis-advanced-security-php",
    "RESTful APIs with PHP & Advanced Security",

    [
        definition(
            "RESTful API",
            "A REST (Representational State Transfer) API is an architectural style for networked applications where resources are accessed and manipulated through standard HTTP methods (GET, POST, PUT, DELETE) using stateless communication."
        ),

        heading("REST API Design Principles in PHP"),

        table(
            ["HTTP Method", "Resource Action", "Example Endpoint"],
            [
                ["GET", "Retrieve resource(s)", "GET /api/students"],
                ["GET /:id", "Retrieve single resource", "GET /api/students/101"],
                ["POST", "Create new resource", "POST /api/students"],
                ["PUT / PATCH", "Update existing resource", "PUT /api/students/101"],
                ["DELETE", "Remove resource", "DELETE /api/students/101"]
            ]
        ),

        heading("Creating a Simple REST Endpoint with JSON Response"),

        code(
            `<?php
  // api/students.php - Simple REST endpoint example
  header('Content-Type: application/json');
  header('Access-Control-Allow-Origin: *'); // For CORS (use restrictively in production)

  require "../config/database.php";

  $method = $_SERVER["REQUEST_METHOD"];
  $id = isset($_GET["id"]) ? (int)$_GET["id"] : null;

  switch ($method) {
      case "GET":
          $stmt = $id ? $pdo->prepare("SELECT * FROM students WHERE roll = ?") : $pdo->query("SELECT * FROM students");
          if ($id) $stmt->execute([$id]);
          $data = $id ? $stmt->fetch(PDO::FETCH_ASSOC) : $stmt->fetchAll(PDO::FETCH_ASSOC);
          echo json_encode(["status" => "success", "data" => $data]);
          break;

      case "POST":
          $input = json_decode(file_get_contents("php://input"), true);
          $stmt = $pdo->prepare("INSERT INTO students (roll, name, marks) VALUES (?, ?, ?)");
          $stmt->execute([$input["roll"], $input["name"], $input["marks"]]);
          echo json_encode(["status" => "created", "message" => "Student added"]);
          break;

      default:
          http_response_code(405);
          echo json_encode(["status" => "error", "message" => "Method not allowed"]);
  }
?>`,
            "php",
            "REST API Endpoint Example"
        ),

        heading("Advanced Security in PHP: CSRF, JWT Basics & Input Sanitization"),

        table(
            ["Security Measure", "Implementation in PHP", "Purpose"],
            [
                ["CSRF Token Validation", "Generate session token; validate against POST data", "Prevent cross-site request forgery"],
                ["JWT (JSON Web Token)", "Create token with header.payload.signature; verify on protected routes", "Stateless authentication for APIs"],
                ["Input Sanitization", "filter_input(), htmlspecialchars(), trim(), type casting", "Prevent XSS and injection"],
                ["Rate Limiting", "Track requests per IP/session; block excessive attempts", "Prevent brute-force and DoS"]
            ]
        ),

        note(
            "REST APIs should always return proper HTTP status codes (200, 201, 400, 404, 401, 500) and structured JSON responses. Never expose database errors or internal paths in production responses.",
            "warning",
            "API Response Security"
        ),

        keyPoints([
            "REST APIs use stateless HTTP methods mapped to resource actions (GET, POST, PUT, DELETE).",
            "Always sanitize inputs, use parameterized queries, and return standardized JSON with correct status codes.",
            "Security measures include CSRF tokens, JWT for stateless auth, input filtering, and rate limiting.",
            "Never expose sensitive errors or internal paths in production API responses."
        ]),
    ],

    {
        summary:
            "Learn to design and implement RESTful APIs in PHP, use HTTP methods correctly, handle JSON input/output, and apply advanced security measures (CSRF, JWT, sanitization).",
        minutes: 13,
        tags: ["rest-api", "jwt", "csrf", "json", "http-methods", "api-security", "important"],

        mcqs: [
            mcq("Which HTTP method creates a new resource?", ["GET", "POST", "PUT", "DELETE"], 1, "POST is used to create new resources in REST conventions."),
            mcq("What is the purpose of parameterized queries in API database operations?", ["To make code shorter", "To prevent SQL Injection", "To format JSON", "To create tokens"], 1, "Parameterized queries separate SQL logic from user input to prevent injection."),
            mcq("What does a JWT (JSON Web Token) provide?", ["Image storage", "Stateless authentication using signed tokens", "Only encryption", "Only formatting"], 1, "JWT provides stateless authentication through signed tokens.")
        ],

        questions: [
            qa("Explain REST API design principles and how HTTP methods map to resource actions.", "REST uses stateless HTTP methods: GET retrieves resources; POST creates; PUT updates entirely; PATCH updates partially; DELETE removes. Endpoints represent resources (e.g., /api/students/101), not actions. Responses should be structured (JSON) with appropriate HTTP status codes."),
            qa("Compare CSRF token validation and JWT authentication. When is each used?", "CSRF tokens verify that form submissions come from legitimate pages served to the user, protecting session-based applications. JWT provides stateless authentication for APIs, allowing clients to include a signed token in headers rather than relying solely on session cookies. JWT is preferred for API and mobile applications; CSRF tokens are essential for traditional browser-based form submissions.")
        ],
    }
);

/* =========================================================
   TOPIC 4 � Advanced Database Integration: PDO, Transactions & Abstraction
========================================================= */

const advancedDatabaseIntegration = createTopic(
    "advanced-database-integration-pdo-transactions-abstraction",
    "Advanced Database Integration: PDO, Transactions & Abstraction",

    [
        definition(
            "PDO (PHP Data Objects)",
            "PDO is a database access abstraction layer providing a uniform interface for multiple database systems, supporting prepared statements, transactions, and object-oriented error handling."
        ),

        heading("Advanced PDO Patterns: Transactions and Prepared Statements"),

        text(
            "Transactions ensure that a series of database operations either all succeed or all fail (atomicity). This is critical for financial, inventory, or multi-table updates where partial execution would corrupt data."
        ),

        code(
            `<?php
  try {
      $pdo->beginTransaction();

      // Execute multiple operations
      $stmt = $pdo->prepare("INSERT INTO orders (user_id, total) VALUES (?, ?)");
      $stmt->execute([101, 250.00]);

      $stmt = $pdo->prepare("UPDATE inventory SET stock = stock - 1 WHERE product_id = ?");
      $stmt->execute([55]);

      // If both succeed, commit. Otherwise rollback.
      $pdo->commit();
  } catch (Exception $e) {
      $pdo->rollBack();
      error_log("Transaction failed: " . $e->getMessage(),;
  }
?>`,
            "php",
            "PDO Transaction Example"
        ),

        heading("Database Abstraction Pattern (Repository Pattern Basics)"),

        table(
            ["Layer", "Responsibility", "Example"],
            [
                ["Model / Repository", "Encapsulates database queries; provides clean data access interface", "StudentRepository::findById(), getAll()"],
                ["Controller", "Handles requests, calls repository, selects view", "StudentController::showProfile()"],
                ["Database Connection", "Centralized PDO instance shared across repositories", "config/Database.php providing singleton PDO"]
            ]
        ),

        heading("Prepared Statements Mastery: Named Placeholders"),

        code(
            `<?php
  // Named placeholders improve readability
  $stmt = $pdo->prepare("SELECT * FROM students WHERE roll = :roll AND course = :course");
  $stmt->execute([
      ":roll" => 101,
      ":course" => "BCA"
  ]);

  // Fetching with different modes
  $students = $stmt->fetchAll(PDO::FETCH_ASSOC); // Associative array
  // PDO::FETCH_OBJ for objects, PDO::FETCH_CLASS for class instances
?>`,
            "php",
            "Named Placeholders Example"
        ),

        note(
            "Always use transactions for multi-table updates to maintain database consistency. Always close database connections when no longer needed, though PDO handles garbage collection automatically when objects go out of scope.",
            "warning",
            "Data Consistency"
        ),

        keyPoints([
            "PDO provides a portable, object-oriented interface for database access with error handling via PDOException.",
            "Transactions (beginTransaction, commit, rollBack) ensure atomic multi-step operations.",
            "The Repository Pattern separates database logic from controllers, improving testability.",
            "Named placeholders (:roll) improve query readability over positional (?) placeholders.",
    ]),
  ],

{
    summary: "Master advanced PDO patterns including transactions, repository abstraction, named placeholders, and fetch modes for robust database integration.",
        minutes: 12,
            tags: ["pdo", "transactions", "repository-pattern", "prepared-statements", "database-abstraction", "important"],

                mcqs: [
                    mcq("What does beginTransaction(), commit(), and rollBack() manage?", ["File uploads", "Database transactions ensuring atomic operations", "CSS styling", "Image compression"], 1, "These manage database transactions for atomic multi-operation consistency."),
                    mcq("What is the benefit of using named placeholders (:name) over positional (?) in PDO?", ["Faster execution", "Improved code readability and easier maintenance", "Only required for SELECT", "Only for INSERT"], 1, "Named placeholders make queries more readable and easier to maintain."),
                    mcq("What is the Repository Pattern in database design?", ["A file storage method", "Encapsulating database queries in dedicated classes separate from controllers", "A type of encryption", "A CSS framework"], 1, "The Repository Pattern separates data access logic from application logic."),
                    mcq("Which PDO fetch mode returns results as associative arrays?", ["PDO::FETCH_OBJ", "PDO::FETCH_ASSOC", "PDO::FETCH_CLASS", "PDO::FETCH_BOTH"], 1, "FETCH_ASSOC returns associative arrays keyed by column names.")
                ],

                    questions: [
                        qa("Why are database transactions important, and how does PDO implement them?", "Transactions ensure that groups of database operations are atomic � either all succeed or none apply. This prevents data corruption in multi-step updates (e.g., deducting inventory and recording an order together). PDO implements this via beginTransaction(), commit(), and rollBack() within a try-catch block."),
                        qa("How does the Repository Pattern improve PHP application architecture?", "It separates database query logic from controllers into dedicated repository classes. Controllers call repository methods (e.g., findById(), getAll(), rather than writing SQL directly. This improves code readability, makes testing easier (repositories can be mocked), and allows changing database implementations without affecting business logic.")
                    ],
  }
);

/* =========================================================
   TOPIC 5 � Capstone Integration, Deployment, Security Hardening & Best Practices
========================================================= */

const capstoneDeploymentSecurity = createTopic(
    "capstone-integration-deployment-security-hardening",
    "Capstone Integration, Deployment, Security Hardening & Best Practices",

    [
        heading("Integrating All Components: Capstone Project Structure"),

        text(
            "A professional PHP capstone project integrates OOP classes, MVC routing, REST APIs, secure authentication (CSRF, JWT concepts), database transactions, file uploads, and clean code standards into a cohesive application."
        ),

        heading("Deployment Best Practices and Security Hardening"),

        table(
            ["Practice", "Implementation", "Purpose"],
            [
                ["Environment Variables", "Store credentials in .env files; load via dotenv library", "Prevent credential exposure in source control"],
                ["Error Handling in Production", "Set display_errors = Off; log to private file", "Prevent information leakage to attackers"],
                ["File Upload Security", "Validate MIME type, size, generate unique filenames; store outside public root when possible", "Prevent malicious uploads"],
                [".htaccess Hardening", "Deny access to sensitive files; disable directory browsing; restrict file execution", "Reduce server attack surface"],
                ["SSL/TLS Enforcement", "Redirect all HTTP traffic to HTTPS", "Protect data in transit from eavesdropping"]
            ]
        ),

        heading("Deployment and Maintenance Checklist"),

        list([
            "Verify .gitignore excludes .env, vendor/, config files with credentials.",
            "Confirm database uses parameterized queries exclusively; no raw concatenation.",
            "Verify CSRF tokens are implemented on all state-changing forms.",
            "Test file uploads with various file types; ensure MIME validation works.",
            "Set production error reporting to log only; test that errors are not displayed.",
            "Document installation steps in README.md: clone, install dependencies, configure database, access URL.",
        ]),

    heading("Future Learning Path After PHP - II"),

        table(
            ["Next Step", "Description", "Benefit"],
            [
                ["Laravel / Symfony Framework", "Learn a modern PHP framework for enterprise applications", "Rapid development, built-in security, ORM"],
                ["Advanced API Design (GraphQL, gRPC)", "Learn beyond REST for flexible data queries and high-performance services", "Scalable, efficient data retrieval"],
                ["DevOps / Docker / CI-CD", "Learn containerization and automated deployment pipelines", "Reproducible, portable, professional deployment"],
                ["Advanced Database Patterns", "Learn sharding, replication, and query optimization at scale", "High-performance data management"]
            ]
        ),

        note(
            "This capstone represents the transition from basic scripting to professional software engineering. Maintaining clean architecture, security awareness, and documentation habits ensures that the skills developed here apply to any modern web development role.",
            "info",
            "Professional Growth"
        ),

        keyPoints([
            "A capstone integrates OOP, MVC, REST APIs, security, and database patterns into one cohesive project.",
            "Deployment requires .env security, production error handling, upload validation, and SSL enforcement.",
            "Documentation and version control are as critical as working code for professional evaluation.",
            "Future growth includes framework mastery (Laravel), advanced API patterns, and DevOps practices."
        ]),
  ],

{
    summary:
    "Integrate all PHP-II concepts into a professional capstone, apply deployment and security hardening best practices, and understand the path toward framework mastery and DevOps.",
        minutes: 12,
            tags: ["capstone", "deployment", "security-hardening", "best-practices", "professional-growth", "important"],

                mcqs: [
                    mcq("Why should display_errors be turned off in production?", ["To make the site faster", "To prevent sensitive information leakage", "To delete errors", "To format output"], 1, "Hidden errors prevent attackers from learning system details."),
                    mcq("What is the purpose of storing credentials in .env files?", ["To make them visible", "To separate sensitive configuration from source code", "To delete them", "To format JSON"], 1, ".env files keep credentials out of version control and public code."),
                    mcq("Which practice validates file uploads securely?", ["Only checking file extension", "Checking MIME type, size, and generating unique filenames", "Only checking file size", "Not checking uploads"], 1, "MIME validation, size limits, and unique filenames prevent malicious uploads."),
                    mcq("What does the .htaccess rule 'Deny from all' for sensitive files achieve?", ["Speeds up the server", "Prevents direct web access to configuration files", "Creates backups", "Generates reports"], 1, "Deny rules block unauthorized access to sensitive server files.")
                ],

                    questions: [
                        qa("What security measures should be implemented before deploying a PHP project to production?", "Measures include: .env for credentials; display_errors = Off; parameterized queries exclusively; CSRF tokens on all forms; file upload validation (MIME, size, unique filenames); .htaccess rules denying access to sensitive files; SSL/HTTPS enforcement; and secure session management (HttpOnly, Secure cookies, session_regenerate_id after login)."),
                        qa("Explain the purpose of a capstone project in professional PHP development education.", "A capstone integrates all learned concepts (OOP, MVC, security, database, APIs) into a single working application. It demonstrates the ability to design architecture, implement features securely, document code, deploy properly, and present the project professionally � bridging academic learning and real-world software engineering practice.")
                    ],
  }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit1Topics = [
    oopPhpAdvanced,
    mvcNamespaceComposer,
    restApiAdvancedSecurity,
    advancedDatabaseIntegration,
    capstoneDeploymentSecurity,
];
