/* =========================================================
   BCA � SEM 6 � Scripting with PHP - I
   UNIT 2 � File Handling, Database Integration, Security & Project Concepts
========================================================= */

import {
  createTopic,
  heading,
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
   TOPIC 1 � Functions, Forms & Basic Input Validation
========================================================= */

const functionsFormsValidation = createTopic(
    "functions-forms-and-basic-input-validation",
    "Functions, Forms & Basic Input Validation",

    [
        definition(
            "PHP Function",
            "A reusable block of PHP code that performs a specific task, accepts input parameters, executes logic, and optionally returns a result using the return keyword."
        ),

        heading("Defining User Functions with Default Arguments"),

        code(
            `<?php
  // Function with default parameter values and array return
  function calculateGrade($marks, $maxMarks = 100) {
      $percentage = ($marks / $maxMarks) * 100;
      $grade = "";

      if ($percentage >= 75) $grade = "Distinction";
      elseif ($percentage >= 60) $grade = "First Class";
      elseif ($percentage >= 40) $grade = "Pass";
      else $grade = "Fail";

      return ["marks" => $marks, "percentage" => $percentage, "grade" => $grade];
  }

  $res = calculateGrade(68); // Uses default maxMarks = 100
  echo "Grade: " . $res["grade"] . " (" . $res["percentage"] . "%)";
?>`,
            "php",
            "Custom Function with Default Arguments"
        ),

        heading("Built-in PHP String and Math Functions"),

        table(
            ["Function", "Purpose", "Example"],
            [
                ["strlen()", "Returns byte length of string", "strlen('PHP') => 3"],
                ["strtolower() / strtoupper()", "Case conversion", "strtoupper('hello') => HELLO"],
                ["str_replace()", "Replaces text occurrences", "str_replace('cat', 'dog', 'cat dog')"],
                ["substr()", "Extracts substring by position", "substr('Hello', 1, 3) => ell"],
                ["trim()", "Removes whitespace edges", "trim('  text  ') => text"],
                ["explode() / implode()", "Split / Join arrays via delimiter", "explode(',', 'a,b,c') => array"],
                ["date() / time()", "Date formatting / Unix timestamp", "date('d-M-Y') => 15-Jan-2025"],
            ]
        ),

        heading("HTML Forms Handling with $_POST and Basic Validation"),

        code(
            `<!-- Registration Form -->
<form action="process.php" method="POST">
  <label>Name:</label><input type="text" name="studentName" required>
  <label>Course:</label>
  <select name="course">
    <option value="BCA">BCA</option>
    <option value="MCA">MCA</option>
  </select>
  <button type="submit">Register</button>
</form>`,
            "html",
            "HTML Form Example"
        ),

        code(
            `<?php
  // process.php - Basic Input Validation
  if ($_SERVER["REQUEST_METHOD"] == "POST") {
      $name = trim($_POST["studentName"]);
      $course = trim($_POST["course"]);

      if (empty($name), {
          echo "<p style='color:red;'>Error: Name is required.</p>";
      } elseif (strlen($name) > 50) {
          echo "<p>Warning: Name exceeds 50 characters.</p>";
      } else {
          $safeName = htmlspecialchars($name, ENT_QUOTES, "UTF-8");
          $safeCourse = htmlspecialchars($course, ENT_QUOTES, "UTF-8");
          echo "<p>Registered: $safeName ($safeCourse)</p>";
      }
  }
?>`,
            "php",
            "Form Validation Example"
        ),

        note(
            "Client-side validation (JavaScript) improves user experience but is never sufficient for security. Always validate all input using server-side PHP logic.",
            "warning",
            "Server-Side Validation Mandatory"
        ),

        keyPoints([
            "Functions are defined using the 'function' keyword with optional default parameters.",
            "Built-in functions handle string formatting, case conversion, and array splitting efficiently.",
            "Always sanitize input with trim(), htmlspecialchars(), and length checks before processing or displaying.",
            "$_POST captures form data securely without exposing it in the URL.",
        ]),
  ],

{
    summary:
    "Learn user-defined functions (defaults, arrays), built-in string/math functions, HTML forms, superglobals ($_POST), and basic server-side validation.",
        minutes: 13,
            tags: ["php", "functions", "forms", "post", "validation", "important"],

                mcqs: [
                    mcq("Which superglobal captures HTTP POST form data in PHP?", ["$_GET", "$_POST", "$_SESSION", "$_REQUEST"], 1, "$_POST contains data submitted via HTML form POST method."),
                    mcq("Which function prevents XSS when displaying user input?", ["strip_tags()", "addslashes()", "htmlspecialchars()", "trim()"], 2, "htmlspecialchars() converts special characters to safe HTML entities."),
                    mcq("Which built-in function formats numbers with commas and decimal precision?", ["number_format()", "format_number()", "comma_format()", "number()"], 0, "number_format() formats numeric values with thousands separators."),
                    mcq("What does trim() remove from a string?", ["Middle spaces only", "Leading and trailing whitespace", "Special characters", "Numbers"], 1, "trim() removes whitespace from the beginning and end of strings."),
                ],
                    questions: [
                        qa("Write a PHP function that calculates student grades based on marks and returns an associative array.", "function calculateGrade($marks, $max = 100) { $pct = ($marks / $max) * 100; $grade = ($pct >= 75) ? 'Distinction' : (($pct >= 60) ? 'First Class' : (($pct >= 40) ? 'Pass' : 'Fail'),; return ['marks' => $marks, 'pct' => $pct, 'grade' => $grade]; }"),
                        qa("Differentiate between $_GET and $_POST methods in HTML form submission and explain when to use each.", "GET appends data to the URL (visible, bookmarkable, limited size ~2048 chars, faster) � suitable for search filters and navigation links. POST sends data in the HTTP request body (hidden, larger payloads, secure for passwords and file uploads) � required for login forms, database modifications, and file uploads. POST prevents sensitive data exposure in browser history and server logs."),
                    ],
  }
);

/* =========================================================
   TOPIC 2 � Sessions, Cookies & Basic Authentication Flow
========================================================= */

const sessionsCookiesAuth = createTopic(
    "sessions-cookies-and-basic-authentication-flow",
    "Sessions, Cookies & Basic Authentication Flow",

    [
        definition(
            "PHP Session",
            "A server-side mechanism in PHP that creates a unique session identifier (SID) for each user visit. Data is stored securely in temporary server files (session.save_path) and linked to the user through a session cookie."
        ),

        heading("Starting, Reading, Updating and Destroying Sessions"),

        code(
            `<?php
  session_start(); // MUST be first; no output before this call

  // Writing to the session superglobal array
  $_SESSION["userName"] = "Amit Patel";
  $_SESSION["userRole"] = "Student";
  $_SESSION["loginTime"] = time();

  // Reading session values safely
  if (isset($_SESSION["userName"]), {
      echo "Welcome, " . htmlspecialchars($_SESSION["userName"]);
  }

  // Destroy session (Logout)
  if (isset($_GET["action"]) && $_GET["action"] == "logout") {
      $_SESSION = array(); // Clear all session variables
      session_destroy();   // Delete session file on server
      echo "<p>Logged out successfully.</p>";
  }
?>`,
            "php",
            "Session Lifecycle Example"
        ),

        heading("Cookie Management in PHP"),

        table(
            ["Operation", "Syntax / Function", "Notes"],
            [
                ["Set", "setcookie(name, value, expire, path);", "expire uses Unix timestamp; 0 deletes cookie immediately"],
                ["Read", "$_COOKIE['name']", "Always check isset($_COOKIE['name']) before reading"],
                ["Update", "setcookie('name', 'new_value', time()+3600);", "Overwrites cookie value"],
                ["Delete", "setcookie('name', '', time() - 3600);", "Set expiry to past time"],
            ]
        ),

        code(
            `<?php
  // Setting a persistent cookie for 1 hour
  setcookie("preferredTheme", "dark", time() + 3600, "/");

  // Reading cookie
  if (isset($_COOKIE["preferredTheme"]), {
      echo "Theme Preference: " . htmlspecialchars($_COOKIE["preferredTheme"]);
  }

  // Deleting cookie
  setcookie("preferredTheme", "", time() - 3600, "/");
?>`,
            "php",
            "Cookie Operations"
        ),

        heading("Basic Login Authentication Flow with Sessions"),

        code(
            `<?php
  session_start();

  // Simulated user database (in real apps, query database)
  $validUser = ["username" => "admin", "password" => "hashed_value"];

  if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["login"]), {
      $user = trim($_POST["username"]);
      $pass = trim($_POST["password"]);

      // In production: verify against database using prepared statements and password_verify()
      if ($user === $validUser["username"] && $pass === "secret") {
          $_SESSION["authenticated"] = true;
          $_SESSION["username"] = $user;
          header("Location: dashboard.php"); // Redirect after login
          exit();
      } else {
          $error = "Invalid username or password.";
      }
  }

  // Checking authentication before displaying protected page content
  if (!isset($_SESSION["authenticated"]), {
      echo "<p>Access Denied. Please <a href='login.php'>login</a>.</p>";
  } else {
      echo "Welcome to dashboard, " . htmlspecialchars($_SESSION["username"]);
  }
?>`,
            "php",
            "Basic Login Session Flow"
        ),

        keyPoints([
            "session_start() must be the first call in the script; no output can precede it (headers already sent error).",
            "Sessions store data securely on the server; cookies store data on the client's browser.",
            "Always use session_regenerate_id(true) after successful login to prevent session fixation attacks.",
            "Cookies should use the HttpOnly, Secure, and SameSite flags for enhanced security in production environments (PHP 7.3+ setcookie syntax).",
        ]),
  ],

{
    summary:
    "Learn PHP session lifecycle management (start/read/update/destroy), cookie operations (set/read/delete), and basic session-based authentication flows with redirects.",
        minutes: 13,
            tags: ["php", "sessions", "cookies", "authentication", "session-fixation", "important"],

                mcqs: [
                    mcq("What does session_start() do in PHP?", ["Creates a new file only", "Starts/resumes a session and generates/regenerates session ID", "Deletes cookies", "Closes database connections"], 1, "session_start() creates or resumes server-side session storage linked to a session cookie."),
                    mcq("How do you delete a cookie in PHP?", ["delete_cookie('name')", "unset($_COOKIE['name'])", "setcookie('name', '', time()-3600)", "session_destroy()"], 2, "Set cookie expiry to the past using setcookie with a negative timestamp."),
                    mcq("What is the primary security risk of using cookies without HttpOnly flag?", ["Slow loading", "Client-side JavaScript can access the cookie, enabling XSS cookie theft", "Database corruption", "Memory leaks"], 1, "Without HttpOnly, document.cookie allows malicious scripts to steal session cookies."),
                    mcq("When must session_start() be called?", ["After HTML output begins", "Before any HTML output or whitespace in the PHP file", "At the end of the script", "Inside loops only"], 1, "session_start() sends HTTP headers; it must be called before any browser output."),
                ],
                    questions: [
                        qa("Compare Sessions and Cookies in PHP regarding storage location, security, lifetime, and typical use cases.", "Sessions store data on the server in temporary files linked by a session ID cookie on the browser. They are more secure (sensitive data never reaches the browser directly) and persist until session_destroy() is called or session expires. Cookies store data directly on the user's browser in small text files, are visible to users and scripts (unless HttpOnly is set), and persist until their set expiration time. Use sessions for authentication tokens and sensitive user data; use cookies for language preferences, theme settings, and tracking non-sensitive user choices."),
                        qa("How does PHP handle basic login authentication using sessions? Explain session regeneration.", "Basic login flow: (1) User submits username/password via POST form. (2) PHP validates credentials (using database queries with prepared statements and password_verify(),. (3) Upon success, PHP sets $_SESSION['authenticated'] = true and stores user identity. (4) session_regenerate_id(true) is called immediately after login to replace the old session ID with a new one, preventing session fixation attacks where attackers pre-set a known session ID. (5) The user is redirected to protected pages. (6) Protected pages check isset($_SESSION['authenticated']) before displaying content."),
                    ],
  }
);

/* =========================================================
   TOPIC 3 � File Handling, Uploads & Directory Operations
========================================================= */

const fileHandling = createTopic(
    "file-handling-uploads-and-directory-operations",
    "File Handling, Uploads & Directory Operations",

    [
        definition(
            "File I/O (Input/Output)",
            "In PHP, File I/O refers to reading data from and writing data to files on the server file system using built-in file functions such as fopen(), fwrite(), fread(), file_get_contents(), and file_put_contents()."
        ),

        definition(
            "File Upload",
            "File upload in PHP refers to receiving binary files (documents, images) from the client's browser through an HTML form (multipart/form-data encoding) and processing them securely on the server using the $_FILES superglobal array."
        ),

        heading("Reading and Writing Text Files in PHP"),

        code(
            `<?php
  // Writing to a text file using file_put_contents (atomic write)
  $data = "Student ID: 101\\nName: Amit Patel\\nCourse: BCA\\nCGPA: 8.75\\n";
  file_put_contents("student_record.txt", $data, FILE_APPEND | LOCK_EX);

  // Reading entire file content into an array (line by line)
  $lines = file("student_record.txt", FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
  foreach ($lines as $lineNumber => $lineContent) {
      echo "<p>Line " . ($lineNumber + 1) . ": " . htmlspecialchars($lineContent) . "</p>";
  }
?>`,
            "php",
            "File Read/Write Example"
        ),

        heading("File and Directory Function Reference"),

        table(
            ["Function", "Purpose", "Notes"],
            [
                ["file_exists()", "Checks if file/directory exists", "Returns true/false"],
                ["fopen() / fclose()", "Opens and closes file handles (r, w, a, r+)", "Always close handles to free resources"],
                ["fread() / fwrite()", "Reads/writes binary or text data by byte length", "Used for precise byte-level I/O"],
                ["is_dir() / is_file()", "Checks if path is directory or file", "Useful for path validation"],
                ["mkdir()", "Creates new directories", "Requires correct server permissions"],
                ["move_uploaded_file()", "Safely moves uploaded files to destination", "Must be used for all file uploads"],
            ]
        ),

        heading("Handling Secure File Uploads with Validation"),

        code(
            `<?php
  if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_FILES["studentDocument"]), {
      $file = $_FILES["studentDocument"];

      // Basic Security Checks
      $allowedTypes = ["application/pdf", "image/jpeg", "image/png"];
      $maxFileSize = 2 * 1024 * 1024; // 2MB

      if ($file["error"] === UPLOAD_ERR_OK) {
          if ($file["size"] > $maxFileSize) {
              echo "<p>Error: File exceeds 2MB limit.</p>";
          } elseif (!in_array($file["type"], $allowedTypes), {
              echo "<p>Error: Invalid file type.</p>";
          } else {
              // Generate safe unique filename to prevent overwriting
              $uploadDir = "uploads/";
              $newFileName = uniqid() . "_" . basename($file["name"]);
              $destinationPath = $uploadDir . $newFileName;

              if (move_uploaded_file($file["tmp_name"], $destinationPath), {
                  echo "<p>File uploaded successfully: " . htmlspecialchars($newFileName) . "</p>";
              } else {
                  echo "<p>Error: File could not be moved to server directory.</p>";
              }
          }
      } else {
          echo "<p>Upload error code: " . $file["error"] . "</p>";
      }
  }
?>`,
            "php",
            "Secure File Upload Handling"
        ),

        note(
            "Always restrict file types by MIME type (not just extension), enforce maximum file sizes, and store uploaded files outside the public web directory or deny direct execution with .htaccess rules.",
            "warning",
            "File Upload Security"
        ),

        keyPoints([
            "file_put_contents() writes data atomically; file_get_contents() reads file content easily.",
            "Always use move_uploaded_file() for file uploads; never trust $_FILES['name'] for filenames.",
            "Generate unique filenames using uniqid() or random strings to prevent directory overwrites.",
        "Validate MIME types, file size, and store uploads outside the public web root when possible.",
    ]),
  ],

{
    summary:
    "Master PHP file I/O (read/write), directory operations (mkdir/is_dir), secure file upload validation (MIME check, size check, unique filenames), and security best practices.",
        minutes: 12,
            tags: ["php", "file-handling", "upload", "security", "file-i-o", "important"],

                mcqs: [
                    mcq("Which superglobal contains metadata about uploaded files in PHP?", ["$_GET", "$_FILES", "$_SESSION", "$_SERVER"], 1, "$_FILES contains file upload metadata including name, tmp_name, size, type, and error codes."),
                    mcq("Which function safely moves an uploaded file from temporary storage to a destination directory?", ["copy()", "rename()", "move_uploaded_file()", "file_get_contents()"], 2, "move_uploaded_file() validates upload authenticity and moves files securely."),
                    mcq("What does uniqid() do in PHP?", ["Creates a unique random filename prefix", "Deletes old files", "Checks file permissions", "Encrypts files"], 0, "uniqid() generates a unique identifier string used for safe filenames."),
                    mcq("Which check prevents malicious file uploads by verifying the file's MIME type and size before storage?", ["Checking $_GET", "Checking $_FILES['size'] and $_FILES['type']", "Checking $_COOKIE", "Checking URL only"], 1, "Always verify $_FILES metadata (size, MIME type, error codes) before processing uploads."),
                ],
                    questions: [
                        qa("How does PHP handle file uploads securely? Describe the steps using $_FILES and move_uploaded_file().", "Steps: (1) HTML form must use enctype='multipart/form-data' and method='POST'. (2) PHP checks $_FILES for errors (UPLOAD_ERR_OK). (3) Validate MIME type via $_FILES['type'] and file size via $_FILES['size']. (4) Generate a unique filename using uniqid() to avoid conflicts. (5) Use move_uploaded_file($_FILES['tmp_name'], $destinationPath) (not copy(), to ensure the file was actually uploaded. (6) Store files outside the public web root or disable execution using server rules."),
                        qa("What are the key differences between file_get_contents() and fopen()/fread()?", "file_get_contents() is a high-level function that reads an entire file into a string with a single call, making it simple for small files. fopen() combined with fread() or fgets() provides low-level stream access, allowing precise control over how many bytes to read, reading line by line, and maintaining open file handles for large files. fopen() requires manual fclose(), whereas file_get_contents() manages resources automatically."),
                    ],
  }
);

/* =========================================================
   TOPIC 4 � MySQL Database Integration with PHP (MySQLi / PDO)
========================================================= */

const databaseIntegration = createTopic(
    "mysql-database-integration-with-php",
    "MySQL Database Integration with PHP (MySQLi / PDO)",

    [
        definition(
            "PDO (PHP Data Objects)",
            "PDO is a database access abstraction layer in PHP that provides a uniform interface for accessing multiple database systems (MySQL, PostgreSQL, SQLite, SQL Server) using object-oriented methods and parameterized queries."
        ),

        heading("Connecting to MySQL using PDO"),

        code(
            `<?php
  try {
      // Connection String (DSN: Data Source Name)
      $dsn = "mysql:host=localhost;dbname=college;charset=utf8mb4";
      $username = "root";
      $password = "";

      $pdo = new PDO($dsn, $username, $password);
      $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
      echo "Database connection established successfully.";
  } catch (PDOException $e) {
      echo "Connection failed: " . $e->getMessage();
  }
?>`,
            "php",
            "PDO Connection Example"
        ),

        heading("CRUD Operations with PDO Prepared Statements"),

        table(
            ["Operation", "PDO Method Pattern", "Security Benefit"],
            [
                ["Create", "$stmt = $pdo->prepare('INSERT ... VALUES (?, ?)'); $stmt->execute([val1, val2]);", "Prevents SQL Injection"],
                ["Read", "$stmt = $pdo->prepare('SELECT * FROM students WHERE roll = ?'); $stmt->execute([$roll]);", "Separates logic from data input"],
                ["Update", "$stmt = $pdo->prepare('UPDATE students SET marks = ? WHERE roll = ?');", "Safe parameter substitution"],
                ["Delete", "$stmt = $pdo->prepare('DELETE FROM students WHERE roll = ?'); $stmt->execute([$roll]);", "Prevents malicious query manipulation"],
            ]
        ),

        code(
            `<?php
  try {
      $dsn = "mysql:host=localhost;dbname=college;charset=utf8mb4";
      $pdo = new PDO($dsn, "root", "");
      $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

      // Insert student securely
      $stmt = $pdo->prepare("INSERT INTO students (roll, name, marks) VALUES (?, ?, ?)");
      $stmt->execute([105, "Neha Patel", 89.5]);

      // Fetch all students
      $stmt = $pdo->query("SELECT roll, name, marks FROM students");
      $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

      foreach ($results as $row) {
          echo "Roll: " . $row["roll"] . " | Name: " . htmlspecialchars($row["name"]) . " | Marks: " . $row["marks"] . "<br>";
      }
  } catch (PDOException $e) {
      echo "Database error: " . $e->getMessage();
  }
?>`,
            "php",
            "PDO CRUD Operations Example"
        ),

        heading("MySQLi (Improved MySQL) vs PDO Comparison"),

        table(
            ["Feature", "MySQLi (Procedural)", "PDO (Object-Oriented)"],
            [
                ["Database Support", "MySQL only", "Multiple (MySQL, PostgreSQL, SQLite, SQL Server)"],
                ["Prepared Statements", "Yes (MySQLi_STMT)", "Yes (PDOStatement)"],
                ["Error Handling", "mysqli_err()", "PDOException (try-catch)"],
                ["Portability", "Requires code changes for other DBs", "No code changes needed for supported DBs"],
                ["Programming Style", "Procedural or Object-Oriented", "Strictly Object-Oriented"],
            ]
        ),

        note(
            "Always use Prepared Statements (parameterized queries) for any user input that reaches the database. Never concatenate user input directly into SQL strings to prevent SQL Injection attacks.",
            "warning",
            "SQL Injection Prevention"
        ),

        keyPoints([
            "PDO provides a unified, portable database interface for multiple database systems.",
            "Prepared Statements separate SQL query logic from user data, preventing SQL Injection attacks completely.",
            "PDOException provides robust error handling via try-catch blocks for database failures.",
            "MySQLi works well for MySQL-only projects; PDO is preferred for portable, object-oriented applications.",
        ]),
  ],

{
    summary:
    "Master PHP database integration using PDO connection strings, prepared statement patterns for CRUD operations, and comparison with MySQLi approach.",
        minutes: 13,
            tags: ["php", "mysql", "pdo", "database", "crud", "prepared-statements", "important"],

                mcqs: [
                    mcq("Which PHP extension provides a portable, object-oriented database interface for multiple DB systems?", ["mysqli", "sqlite3", "PDO", "mysql"], 2, "PDO (PHP Data Objects) provides a portable interface for MySQL, PostgreSQL, SQLite, and SQL Server."),
                    mcq("Which statement prevents SQL Injection attacks?", ["Using htmlspecialchars()", "Using Prepared Statements with parameter binding", "Using trim()", "Using addslashes()"], 1, "Prepared Statements with parameterized queries eliminate SQL Injection risks."),
                    mcq("In PDO, which method prepares a SQL query before execution?", ["execute()", "prepare()", "query()", "run()"], 1, "prepare() creates a PDOStatement object ready for parameter binding."),
                    mcq("What is the purpose of PDO::ATTR_ERRMODE in PHP?", ["To set the database password", "To configure error reporting mode (e.g., ERRMODE_EXCEPTION)", "To close connections", "To format output"], 1, "PDO::ATTR_ERRMODE sets error handling behavior; ERRMODE_EXCEPTION throws PDOException errors."),
                ],
                    questions: [
                        qa("Compare PDO and MySQLi for PHP database connectivity. When should a developer choose PDO?", "MySQLi supports only MySQL databases and offers both procedural and object-oriented styles. PDO supports multiple database systems (MySQL, PostgreSQL, SQLite, SQL Server) using only object-oriented syntax, making it highly portable. Choose PDO for projects requiring database portability, strict OOP architecture, and robust exception handling (PDOException). Choose MySQLi for MySQL-only applications requiring procedural programming or slightly faster performance in specific legacy contexts."),
                        qa("Write a secure PDO query that selects a student by roll number using a prepared statement.", "$stmt = $pdo->prepare('SELECT name, marks FROM students WHERE roll = ?'); $stmt->execute([$_POST['roll']]); $student = $stmt->fetch(PDO::FETCH_ASSOC); // Uses parameterized binding; user input is never embedded in SQL text."),
                    ],
  }
);

/* =========================================================
   TOPIC 5 � Security Deep Dive, Deployment & Best Practices
========================================================= */

const securityDeployment = createTopic(
    "security-deep-dive-deployment-and-best-practices",
    "Security Deep Dive, Deployment & Best Practices",

    [
        definition(
            "Cross-Site Request Forgery (CSRF)",
            "CSRF is an attack that tricks an authenticated user into submitting an unintended request (e.g., changing a password, making a purchase) to a trusted web application where the user is already logged in, exploiting the browser's automatic cookie attachment behavior."
        ),

        definition(
            "Content Security Policy (CSP)",
            "CSP is an HTTP response header that allows web server administrators to declare which sources (scripts, styles, images) are trusted. It provides an additional security layer to mitigate XSS attacks by preventing unauthorized script execution."
        ),

        heading("Preventing CSRF with Token Validation"),

        code(
            `<?php
  // Login / Protected Page Workflow
  session_start();

  // 1. Generate a random CSRF token and store it in the session
  if (empty($_SESSION["csrf_token"]), {
      $_SESSION["csrf_token"] = bin2hex(random_bytes(32),;
  }

  // 2. On protected form display, include hidden token
  // <input type="hidden" name="csrf_token" value="<?php echo $_SESSION['csrf_token']; ?>">

  // 3. On form submission, validate token
  if ($_SERVER["REQUEST_METHOD"] == "POST") {
      if (!isset($_POST["csrf_token"]) || !hash_equals($_SESSION["csrf_token"], $_POST["csrf_token"]), {
          die("CSRF Token validation failed. Possible security attack detected.");
      }
      // Proceed with secure processing...
  }
?>`,
            "php",
            "CSRF Token Validation Example"
        ),

        heading("Cross-Site Scripting (XSS) Prevention Techniques"),

        table(
            ["XSS Type", "Attack Description", "PHP Mitigation Technique"],
            [
                ["Stored XSS", "Attacker saves malicious script in database; executed when other users view data", "Use htmlspecialchars() when displaying any database/user content"],
                ["Reflected XSS", "Script embedded in URL parameter; executed immediately in user's browser", "Escape all $_GET, $_POST, $_COOKIE outputs with htmlspecialchars()"],
                ["DOM-Based XSS", "JavaScript modifies DOM using attacker-controlled data", "Validate input; sanitize with DOMPurify if using frontend frameworks"],
            ]
        ),

        heading("Deployment Best Practices and .htaccess Security"),

        code(
            `# Example .htaccess rules for security and clean URLs
  # Deny direct access to sensitive files
  <Files ".env">
      Order allow,deny
      Deny from all
  </Files>

  # Prevent directory browsing
  Options -Indexes

  # Restrict direct PHP file execution in upload directories
  <FilesMatch "\\.(?i:php)$">
      Order allow,deny
      Deny from all
  </FilesMatch>`,
            "apache",
            ".htaccess Security Rules"
        ),

        heading("Production Security Checklist"),

        list([
            "Always disable display_errors in production (set display_errors = Off in php.ini).",
            "Use HTTPS (SSL/TLS certificates) for all data transmission to prevent man-in-the-middle attacks.",
            "Store session files outside the public web root or configure session.save_path to a secure directory.",
            "Regularly update PHP versions to receive security patches and avoid deprecated features.",
            "Implement rate limiting for login attempts to prevent brute-force authentication attacks.",
        ]),

        keyPoints([
            "CSRF tokens must be random, unique per session, and validated before processing state-changing requests.",
            "Always use htmlspecialchars() with ENT_QUOTES and UTF-8 when displaying any user-controlled data.",
            ".htaccess rules can deny access to configuration files and restrict execution in upload folders.",
            "In production, disable error display and log errors securely to private server logs only.",
            "Keep PHP, Apache/Nginx, and database systems updated with the latest security patches regularly.",
        ]),
    ],

    {
        summary:
    "Master advanced PHP security: CSRF token validation, XSS mitigation with htmlspecialchars(), CSP headers, .htaccess hardening, and production deployment best practices.",
        minutes: 12,
            tags: ["php", "security", "csrf", "xss", "csp", "deployment", "best-practices", "important"],

                mcqs: [
                    mcq("What is the purpose of a CSRF token in PHP security?", ["To encrypt database connections", "To validate that form submissions originate from authorized pages within the same session", "To speed up file uploads", "To format output strings"], 1, "CSRF tokens verify that POST requests come from legitimate forms served to the user, preventing forged cross-site requests."),
                    mcq("Which PHP function prevents Cross-Site Scripting (XSS) when displaying user-submitted data?", ["addslashes()", "htmlspecialchars()", "trim()", "strip_tags()"], 1, "htmlspecialchars() encodes special HTML characters (<, >, \") into safe entities, preventing script execution."),
                    mcq("Which .htaccess directive disables directory listing when no index file exists?", ["Options -Indexes", "Options +Indexes", "DirectoryIndex Off", "AllowOverride None"], 0, "Options -Indexes prevents browsers from listing directory contents publicly."),
                    mcq("What is the recommended practice for displaying PHP errors in production environments?", ["Enable display_errors = On for debugging", "Disable display_errors = Off and log errors privately", "Show full errors to all users", "Delete error log files"], 1, "In production, display_errors must be Off to prevent attackers from gathering system information from error messages."),
                ],
                    questions: [
                        qa("Explain CSRF attacks and how PHP applications prevent them using session tokens.", "Cross-Site Request Forgery (CSRF) exploits a user's authenticated session by tricking their browser into submitting unauthorized requests (e.g., changing account details) to a trusted site. PHP prevents CSRF by generating a unique random token stored in $_SESSION. Every protected form includes this token in a hidden input. When submitted, the server validates $_POST['csrf_token'] against $_SESSION['csrf_token'] using hash_equals(). If they do not match, the request is rejected immediately, blocking forged cross-site submissions."),
                        qa("What is XSS? Compare Stored XSS and Reflected XSS and describe PHP mitigation strategies.", "Cross-Site Scripting (XSS) injects malicious JavaScript into web pages viewed by other users. (1) Stored XSS: Malicious script is saved in the database (e.g., a malicious comment) and executed whenever any user views it. (2) Reflected XSS: Script is embedded in a URL parameter (e.g., search results) and executed immediately without database storage. Mitigation: Use htmlspecialchars($data, ENT_QUOTES, 'UTF-8') on all user-controlled output. Implement Content Security Policy (CSP) headers. Validate all inputs on the server side."),
                    ],
  }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit2Topics = [
    functionsFormsValidation,
    sessionsCookiesAuth,
    fileHandling,
    databaseIntegration,
    securityDeployment,
];
