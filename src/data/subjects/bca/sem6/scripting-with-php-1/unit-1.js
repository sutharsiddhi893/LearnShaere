/* =========================================================
   BCA • SEM 6 • Scripting with PHP - I
   UNIT 1 — PHP Fundamentals, Server-Side Architecture, Forms & Functions
========================================================= */

import {
  createTopic,
  heading,
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
   TOPIC 1 — PHP Architecture and Server-Side Execution
========================================================= */

const phpArchitecture = createTopic(
    "php-architecture-and-server-side-execution",
    "PHP Architecture and Server-Side Execution",

    [
        definition(
            "PHP (PHP: Hypertext Preprocessor)",
            "PHP is an open-source, interpreted, server-side scripting language designed primarily for web development. It embeds directly into HTML and is executed on the server before sending pure HTML to the client's browser."
        ),

        definition(
            "Server-Side Scripting",
            "Server-side scripting refers to the execution of code on the web server (Apache, Nginx) to generate dynamic HTML content before it reaches the client's browser, unlike client-side scripting (JavaScript) which runs in the browser."
        ),

        heading("PHP Request Lifecycle"),

        steps([
            "The user types a URL (e.g., http://localhost/index.php) into the browser and submits the request.",
            "The browser sends an HTTP Request to the web server (Apache / Nginx) listening on port 80/443.",
            "The web server recognizes the .php extension and passes the file to the PHP Interpreter (Zend Engine).",
            "The PHP Interpreter parses, executes the embedded PHP code, interacts with databases or file systems, and produces pure HTML output.",
            "The server sends the generated HTML (and optionally CSS/JS assets) back to the browser via HTTP Response.",
            "The browser renders the final HTML and displays the page to the user. The original PHP source code is never exposed or visible to the end user.",
        ]),

        heading("PHP Engine Components (Zend Engine)"),

        table(
            ["Component", "Function"],
            [
                ["Lexer (Tokenizer)", "Breaks PHP source code into tokens (keywords, variables, operators)"],
                ["Parser", "Converts token stream into an intermediate Abstract Syntax Tree (AST)"],
                ["Compiler", "Converts AST into Zend OPcodes (bytecode instructions)"],
                ["Executor", "Runs the OPcodes and interacts with server resources (database, file I/O)"],
                ["Output Buffer", "Collects generated HTML and sends it through the server response pipeline"],
            ]
        ),

        heading("Client-Side vs Server-Side Execution"),

        table(
            ["Criteria", "Client-Side (JavaScript)", "Server-Side (PHP)"],
            [
                ["Execution Location", "Inside user's web browser", "On the web server"],
                ["Source Code Visibility", "Fully visible to users (View Source)", "Hidden; only output HTML reaches browser"],
                ["Database Access", "Not directly possible (requires APIs)", "Direct database connectivity (MySQL, PostgreSQL)"],
                ["File System Access", "Restricted (sandboxed)", "Full server file read/write access"],
                ["Security Risk", "Lower direct server risk", "Requires strict validation to prevent SQL Injection / XSS"],
            ]
        ),

        heading("Basic PHP Syntax and Embedding in HTML"),

        code(
            `<!DOCTYPE html>
<html>
<head>
  <title>PHP Server Execution</title>
</head>
<body>
  <h1>Welcome to Server-Side PHP</h1>

  <?php
    // PHP Code Block embedded inside HTML
    $serverName = "Apache";
    $phpVersion = phpversion();
    echo "<p>Web Server: " . $serverName . "</p>";
    echo "<p>PHP Version Running: " . $phpVersion . "</p>";
  ?>

</body>
</html>`,
            "php",
            "Embedded PHP Syntax"
        ),

        note(
            "Every PHP script must begin with <?php and close with ?> if embedded in HTML. Short tags (<? ... ?>) are deprecated in modern PHP and should not be used in production.",
            "warning",
            "PHP Tags"
        ),

        keyPoints([
            "PHP runs exclusively on the server; browsers receive only processed HTML output.",
            "The PHP Interpreter (Zend Engine) executes code through Lexer, Parser, Compiler, and Executor stages.",
            "PHP files are executed by the server (Apache / Nginx) through modules (mod_php, PHP-FPM).",
            "Source code is never visible to end users, providing security for business logic.",
            "PHP generates dynamic content by interacting with databases and file systems before sending responses.",
        ]),
  ],

{
    summary:
    "Understand PHP server-side architecture, request lifecycle, Zend Engine components, and basic embedded PHP syntax.",
        minutes: 12,
            tags: ["php", "server-side", "zend-engine", "architecture", "important"],

                mcqs: [
                    mcq(
                        "Where does PHP code execute?",
                        ["In the user's browser", "On the web server before HTML is sent", "Inside a database", "In the email server"],
                        1,
                        "PHP is a server-side language executed by the web server before HTML reaches the user."
                    ),
                    mcq(
                        "Which engine is the core execution component of PHP?",
                        ["V8 Engine", "Zend Engine", "SpiderMonkey", "Chakra"],
                        1,
                        "The Zend Engine is the core interpreter, compiler, and execution engine of PHP."
                    ),
                    mcq(
                        "What happens to the original PHP source code when a user requests a .php file?",
                        ["It is downloaded to the browser", "It is interpreted and hidden; only HTML output reaches the browser", "It is encrypted by the server", "It is converted to JavaScript"],
                        1,
                        "The server processes PHP source and sends only the generated HTML output to the browser."
                    ),
                    mcq(
                        "Which tag should be used to start a PHP code block inside HTML?",
                        ["<?php ?>", "<? ?> (short tags)", "<script>", "<php>"],
                        0,
                        "Always start PHP blocks with <?php and close with ?>."
                    ),
                ],

                    questions: [
                        qa(
                            "What is Server-Side Scripting? Explain the complete PHP request lifecycle step by step.",
                            "Server-Side Scripting is a technique where scripts (like PHP) are executed on the server to dynamically generate HTML pages before sending them to the client's browser. The PHP request lifecycle: (1) The user enters a URL or submits a form. (2) The browser sends an HTTP Request to the server (Apache/Nginx). (3) The server identifies the .php file and passes it to the PHP Interpreter (Zend Engine). (4) The interpreter parses the PHP code, executes database/file operations, and produces HTML. (5) The server sends the pure HTML response to the browser. (6) The browser renders the final output. The original PHP code remains hidden from the user.",
                            4
                        ),
                        qa(
                            "Differentiate between Client-Side and Server-Side scripting with examples.",
                            "Client-Side scripting (e.g., JavaScript, HTML5) runs in the browser after downloading the page; it handles UI validation, animations, and DOM updates. Users can view all source code. It cannot directly access the server database or file system. Server-Side scripting (e.g., PHP, Python) runs on the server; it handles secure database queries (MySQL), file uploads, authentication, and business logic. Users never see the source code, only the generated HTML. PHP can securely validate login credentials against a database before allowing access.",
                            4
                        ),
                    ],
  }
);

/* =========================================================
   TOPIC 2 — PHP Variables, Data Types & Operators
========================================================= */

const variablesDataTypes = createTopic(
    "php-variables-data-types-and-operators",
    "PHP Variables, Data Types & Operators",

    [
        definition(
            "PHP Variable",
            "A PHP variable is a named container used to store data values. Variables in PHP begin with the $ symbol followed by the variable name and do not require explicit type declaration (loosely typed language)."
        ),

        heading("PHP Data Types Overview"),

        table(
            ["Data Type Category", "Examples", "Notes"],
            [
                ["String", "'Hello', \"World\"", "Text enclosed in single or double quotes"],
                ["Integer", "100, -50, 0", "Whole numbers without decimals"],
                ["Float (Double)", "10.5, -3.14, 2.0", "Numbers with decimal points"],
                ["Boolean", "true, false", "Logical values (case-insensitive in PHP)"],
                ["Array", "['a', 'b', 'c']", "Ordered map of key-value pairs"],
                ["Object", "new Student()", "Instance of a user-defined class"],
                ["NULL", "null", "Variable with no value assigned"],
                ["Resource", "mysql_connect()", "Special type for external resources (database connections, file handles)"],
            ]
        ),

        code(
            `<?php
  // Variable declaration (no explicit type required)
  $studentName = "Amit Patel";
  $studentAge = 21;
  $cgpa = 8.75;
  $isEnrolled = true;

  // Type Juggling Example (PHP converts types automatically during operations)
  $mixedAddition = "100" + 50; // String "100" converted to int 100; result is 150
  echo $mixedAddition;

  // Print types and values
  echo "<br>Type of name: " . gettype($studentName); // string
  echo "<br>Type of age: " . gettype($studentAge);   // integer
?>`,
            "php",
            "PHP Variables and Type Juggling"
        ),

        heading("Variable Scope in PHP"),

        table(
            ["Scope Type", "Declaration / Access", "Lifetime"],
            [
                ["Local", "Inside a function; accessible only within that function", "Exists only during function execution"],
                ["Global", "Outside any function; accessible globally unless overridden", "Exists throughout script execution"],
                ["Static", "Declared inside a function using 'static'; retains value between function calls", "Persists across function executions until script ends"],
                ["Superglobal", "Built-in arrays: $_GET, $_POST, $_SESSION, $_COOKIE, $_SERVER, $_FILES", "Always available in any scope"],
            ]
        ),

        code(
            `<?php
  // Global Scope
  $globalVar = "Global Value";

  function testScope() {
    // This creates a new local variable, does NOT modify global $globalVar
    $localVar = "Local Value";
    echo $localVar; // Works

    // To access global variables inside a function, use 'global' keyword or $GLOBALS array
    global $globalVar;
    echo "<br>" . $globalVar;
  }
  testScope();
?>`,
            "php",
            "Variable Scope Example"
        ),

        heading("PHP Operators and Expressions"),

        table(
            ["Operator Category", "Symbols / Example", "Behavior"],
            [
                ["Arithmetic", "+, -, *, /, %, **", "+ adds, % returns remainder, ** calculates exponent"],
                ["Assignment", "=, +=, -=, *=, /=", "Updates variable values efficiently"],
                ["Comparison", "== (equal), === (identical value + type), !=, <>, >, <", "=== checks both value and data type"],
                ["Logical", "&& (AND), || (OR), ! (NOT)", "Combines boolean expressions"],
                ["String Concatenation", ".", "Concatenates two strings (e.g., 'Hello' . 'World')"],
                ["Conditional (Ternary)", "? :", "Shorthand if-else: $grade = ($marks >= 40) ? 'Pass' : 'Fail';"],
            ]
        ),

        note(
            "Always use === (identical comparison) instead of == (equality comparison) when comparing strings or integers to avoid unexpected type juggling (e.g., '0' == false evaluates to true, but '0' === false is false).",
            "tip",
            "Strict Comparison"
        ),

        keyPoints([
            "PHP variables start with $; no need for explicit type declaration.",
            "PHP is loosely typed; variables can change data types during execution (type juggling).",
            "Superglobal arrays ($_GET, $_POST, $_SESSION, $_COOKIE) are always available globally.",
            "The === operator compares both value and data type (strict comparison).",
            "String concatenation uses the period . operator, not + (which converts strings to numbers).",
        ]),
  ],

{
    summary:
    "Explore PHP variables, loose typing, data types, variable scopes (local/global/static), and operator categories (arithmetic, comparison, logical, ternary).",
        minutes: 13,
            tags: ["php", "variables", "data-types", "scope", "operators", "important"],

                mcqs: [
                    mcq(
                        "In PHP, which symbol must begin every variable name?",
                        ["%", "@", "#", "$"],
                        3,
                        "Every PHP variable name must start with the dollar sign ($)."
                    ),
                    mcq(
                        "What is the result of: $x = '20'; $y = 5; echo $x + $y; ?",
                        ["Error", "20", "25", "205"],
                        2,
                        "PHP converts the string '20' to integer 20 and performs arithmetic addition: result = 25."
                    ),
                    mcq(
                        "Which comparison operator checks both value equality AND the same data type?",
                        ["==", "=", "===", "!="],
                        2,
                        "The === (identical) operator checks if both value and type match."
                    ),
                    mcq(
                        "Which of the following is a PHP Superglobal array used to access form data submitted via POST?",
                        ["$_GET", "$_SESSION", "$_POST", "$_COOKIE"],
                        2,
                        "$_POST is the superglobal array containing data sent via HTTP POST method from forms."
                    ),
                ],

                    questions: [
                        qa(
                            "Explain the concept of Variable Scope in PHP and differentiate Local, Global, and Static scopes with code examples.",
                            "Variable Scope defines where a variable can be accessed within a script. (1) Local Scope: Variables declared inside a function are accessible only within that function (e.g., function calc() { $local = 10; }). (2) Global Scope: Variables declared outside any function are accessible globally, but functions must declare 'global $var' or use $GLOBALS array to access them (e.g., $g = 'hello'; function show() { global $g; echo $g; }). (3) Static Scope: Variables declared inside a function with the 'static' keyword retain their value across multiple function calls (e.g., function counter() { static $count = 0; $count++; echo $count; }).",
                            4
                        ),
                        qa(
                            "What is Type Juggling in PHP? Provide an example of loose typing and the risks involved.",
                            "Type Juggling is PHP's automatic conversion of data types based on the operation context. Example: $num = '100'; $sum = $num + 50; // PHP converts '100' string to integer 100; result is 150. Risk: Loose typing can lead to logical errors if strings that look numeric but contain hidden characters are used in arithmetic. Example: $val = '10'; $val = $val + 'abc'; // PHP converts 'abc' to 0 silently; $val becomes 10, which may hide errors and produce unexpected results. Best practice: Use strict comparison (===) and explicit type casting when needed.",
                            4
                        ),
                    ],
  }
);

/* =========================================================
   TOPIC 3 — Control Structures, Arrays & String Handling
========================================================= */

const controlStructuresArrays = createTopic(
    "control-structures-arrays-and-string-handling",
    "Control Structures, Arrays & String Handling",

    [
        definition(
            "Control Structure",
            "A control structure is a logical block that directs the execution flow of a PHP script based on conditions (if/else/switch) or repetition (loops)."
        ),

        heading("Conditional Statements in PHP"),

        code(
            `<?php
  $marks = 68;

  if ($marks >= 75) {
      echo "Grade: A (Distinction)";
  } elseif ($marks >= 60) {
      echo "Grade: B (First Class)";
  } elseif ($marks >= 40) {
      echo "Grade: C (Pass)";
  } else {
      echo "Grade: F (Fail)";
  }

  // Ternary Operator
  $status = ($marks >= 40) ? "Passed" : "Failed";
  echo "<br>Result: " . $status;
?>`,
            "php",
            "Conditional Control Flow"
        ),

        heading("PHP Looping Constructs"),

        table(
            ["Loop Type", "Syntax / Usage", "When to Use"],
            [
                ["while", "while (condition) { ... }", "When number of iterations is unknown"],
                ["do...while", "do { ... } while (condition);", "When loop body must run at least once"],
                ["for", "for ($i = 0; $i < 10; $i++) { ... }", "When iterations are fixed and countable"],
                ["foreach", "foreach ($array as $key => $value) { ... }", "Iterating through arrays and objects easily"],
            ]
        ),

        code(
            `<?php
  // foreach with associative array
  $student = [
      "roll" => 101,
      "name" => "Amit Patel",
      "course" => "BCA",
      "cgpa" => 8.9
  ];

  foreach ($student as $key => $value) {
      echo "<p><strong>" . ucfirst($key) . ":</strong> " . $value . "</p>";
  }
?>`,
            "php",
            "foreach Loop Example"
        ),

        heading("PHP Arrays: Indexed, Associative & Multidimensional"),

        table(
            ["Array Type", "Declaration Example", "Key Type"],
            [
                ["Indexed Array", "$fruits = ['Apple', 'Mango', 'Orange'];", "Numeric index (0, 1, 2...)"],
                ["Associative Array", "$marks = ['Amit' => 85, 'Riya' => 92];", "Custom string or number keys"],
                ["Multidimensional", "$students = [['name'=>'Amit', 'marks'=>85], ...];", "Array of arrays for complex data"],
            ]
        ),

        code(
            `<?php
  // Multidimensional Array
  $students = [
      ["roll" => 101, "name" => "Amit", "marks" => [88, 92, 85]],
      ["roll" => 102, "name" => "Priya", "marks" => [78, 82, 80]]
  ];

  // Access nested elements
  echo $students[0]["name"]; // Amit
  echo $students[1]["marks"][2]; // 80

  // Array Functions
  echo "Total Students: " . count($students);
  echo "Average Marks: " . (array_sum($students[0]["marks"]) / count($students[0]["marks"]),;
?>`,
            "php",
            "Multidimensional Arrays and Functions"
        ),

        heading("Common PHP String Functions"),

        table(
            ["Function", "Purpose", "Example"],
            [
                ["strlen()", "Returns the length of a string", "strlen('PHP') => 3"],
                ["strtolower() / strtoupper()", "Converts case", "strtolower('HELLO') => hello"],
                ["str_replace()", "Replaces occurrences of a substring", "str_replace('old', 'new', $text)"],
                ["substr()", "Extracts part of a string by position", "substr('Hello', 1, 3) => ell"],
                ["trim()", "Removes whitespace from beginning/end", "trim('  hello  ') => hello"],
                ["explode() / implode()", "Splits / Joins arrays using a delimiter", "explode(',', 'a,b,c') => array"],
            ]
        ),

        keyPoints([
            "PHP supports if, elseif, else, and ternary operators for conditional logic.",
            "foreach loops are specifically designed for iterating over arrays and objects cleanly.",
            "Indexed arrays use numeric keys; associative arrays use named keys.",
            "Multidimensional arrays represent complex structured data (e.g., student records).",
            "String functions like strlen(), str_replace(), and trim() are essential for data processing and validation.",
        ]),
  ],

{
    summary:
    "Master PHP control structures (if/while/for/foreach), array types (indexed, associative, multidimensional), and string manipulation functions.",
        minutes: 13,
            tags: ["php", "loops", "arrays", "strings", "controls", "important"],

                mcqs: [
                    mcq(
                        "Which PHP loop is best suited for iterating through associative arrays?",
                        ["while", "do-while", "for", "foreach"],
                        3,
                        "The foreach loop is specifically designed for iterating over arrays and objects cleanly."
                    ),
                    mcq(
                        "Which function splits a PHP string into an array using a delimiter?",
                        ["join()", "explode()", "substr()", "str_split()"],
                        1,
                        "explode() splits a string by a delimiter; implode() joins array elements into a string."
                    ),
                    mcq(
                        "In PHP, what is the result of $a = [1, 2]; echo $a[1]; ?",
                        ["1", "2", "Error", "0"],
                        1,
                        "Indexed arrays start at index 0, so $a[1] returns the second element: 2."
                    ),
                    mcq(
                        "Which PHP control structure executes at least once regardless of the condition?",
                        ["if", "while", "do...while", "switch"],
                        2,
                        "The do...while loop executes its body first and checks the condition afterward."
                    ),
                ],

                    questions: [
                        qa(
                            "Compare while, do-while, for, and foreach loops in PHP with appropriate use cases.",
                            "while loop: Executes as long as the condition is true; best when iterations are unknown (e.g., reading lines until end-of-file). do-while loop: Executes the body at least once before checking the condition; best for menus requiring at least one display. for loop: Uses initialization, condition, and increment expressions; best for fixed iterations (e.g., printing 1 to 10). foreach loop: Designed specifically for arrays; automatically iterates through each element; best for processing student records or database results without tracking index variables manually.",
                            4
                        ),
                        qa(
                            "Explain Associative Arrays in PHP. How are they different from Indexed Arrays?",
                            "Indexed Arrays in PHP store elements with automatic integer keys (starting at 0), similar to lists in other languages. Associative Arrays store elements using user-defined string or named keys, allowing meaningful data access (e.g., $student['name'], $student['course']). Associative arrays are highly useful for representing database records and form data where keys represent field names rather than sequential numbers.",
                            4
                        ),
                    ],
  }
);

/* =========================================================
   TOPIC 4 — Functions, Forms & Basic Input Validation
========================================================= */

const functionsFormsValidation = createTopic(
    "functions-forms-and-basic-input-validation",
    "Functions, Forms & Basic Input Validation",

    [
        definition(
            "PHP Function",
            "A user-defined or built-in reusable block of code in PHP that accepts input parameters (arguments), performs operations, and optionally returns output."
        ),

        heading("Defining User-Defined Functions and Passing Arguments"),

        code(
            `<?php
  // Function with default parameter values
  function calculateGrade($marks, $maxMarks = 100) {
      $percentage = ($marks / $maxMarks) * 100;
      $grade = "";

      if ($percentage >= 75) {
          $grade = "Distinction";
      } elseif ($percentage >= 60) {
          $grade = "First Class";
      } elseif ($percentage >= 40) {
          $grade = "Pass";
      } else {
          $grade = "Fail";
      }

      return [
          "percentage" => $percentage,
          "grade" => $grade,
          "marks" => $marks
      ];
  }

  // Calling the function and accessing the return array
  $result = calculateGrade(72); // Uses default maxMarks = 100
  echo "<p>Marks: " . $result["marks"] . ", Grade: " . $result["grade"] . "</p>";
?>`,
            "php",
            "Custom Function Example"
        ),

        heading("Built-in PHP String and Math Functions"),

        table(
            ["Function", "Purpose", "Example Output"],
            [
                ["str_word_count()", "Counts words in a string", "str_word_count('Hello World') => 2"],
                ["number_format()", "Formats numeric values with thousands separators and decimals", "number_format(1234.567, 2) => '1,234.57'"],
                ["strlen() / mb_strlen()", "Returns string length (bytes / multibyte)", "strlen('AB') => 2"],
                ["date() / time()", "Returns current formatted date / Unix timestamp", "date('d-M-Y H:i') => '15-Jan-2025 09:30'"],
            ]
        ),

        heading("HTML Forms and PHP Superglobals ($_GET / $_POST)"),

        code(
            `<!-- HTML Form using POST Method -->
<form action="process.php" method="POST">
  <label for="studentName">Student Name:</label>
  <input type="text" id="studentName" name="studentName" required>

  <label for="course">Select Course:</label>
  <select id="course" name="course">
    <option value="BCA">BCA</option>
    <option value="MCA">MCA</option>
    <option value="BTech">B.Tech</option>
  </select>

  <button type="submit">Submit Registration</button>
</form>`,
            "html",
            "HTML Registration Form"
        ),

        code(
            `<?php
// process.php: Handling POST data securely
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Trim whitespace and sanitize input before processing
    $studentName = trim($_POST["studentName"]);
    $course = trim($_POST["course"]);

    // Basic Validation Checks
    if (empty($studentName), {
        echo "<p style='color:red;'>Error: Student name cannot be empty.</p>";
    } else if (strlen($studentName) > 50) {
        echo "<p style='color:red;'>Error: Name exceeds 50 characters.</p>";
    } else {
        // Escape HTML entities before displaying (Prevents XSS)
        $safeName = htmlspecialchars($studentName, ENT_QUOTES, "UTF-8");
        $safeCourse = htmlspecialchars($course, ENT_QUOTES, "UTF-8");

        echo "<p>Registration Confirmed!</p>";
        echo "<p><strong>Student:</strong> " . $safeName . "</p>";
        echo "<p><strong>Course:</strong> " . $safeCourse . "</p>";
    }
}
?>`,
            "php",
            "PHP Form Processing and Basic Validation"
        ),

        note(
            "Always validate user input on the server side. Client-side validation (JavaScript) improves usability but can be bypassed easily by disabling JavaScript or modifying HTTP requests.",
            "warning",
            "Server-Side Validation"
        ),

        keyPoints([
            "Functions use the 'function' keyword followed by the function name and parentheses for parameters.",
            "Default parameter values are assigned using the = operator inside function definitions.",
            "Built-in string functions handle formatting, word counting, and multibyte support.",
            "Always sanitize user input using trim(), htmlspecialchars(), and server-side validation.",
            "Superglobal arrays ($_GET, $_POST) capture form data submitted by the client.",
        ]),
  ],

{
    summary:
    "Learn PHP user-defined functions (parameters, return arrays, default values), built-in string/math functions, HTML forms, superglobals ($_GET/$_POST), and basic input validation.",
        minutes: 13,
            tags: ["php", "functions", "forms", "post", "get", "validation", "important"],

                mcqs: [
                    mcq(
                        "Which superglobal array in PHP captures data submitted via an HTML form method='POST'?",
                        ["$_GET", "$_REQUEST", "$_POST", "$_SESSION"],
                        2,
                        "The $_POST array contains data submitted via HTTP POST method from forms."
                    ),
                    mcq(
                        "Which PHP function converts special HTML characters into entities to prevent XSS attacks?",
                        ["htmlentities()", "htmlspecialchars()", "strip_tags()", "addslashes()"],
                        1,
                        "htmlspecialchars() converts special characters like < and > to safe HTML entities."
                    ),
                    mcq(
                        "What is the purpose of trim() in PHP form processing?",
                        ["To split a string", "To remove whitespace from the beginning and end of a string", "To replace spaces", "To count words"],
                        1,
                        "trim() removes leading and trailing whitespace from user input strings."
                    ),
                    mcq(
                        "In PHP, which syntax defines a function with a default argument value?",
                        ["function name(arg=default) {}", "def name(arg=default):", "function name(arg) default=val", "name(arg, default) => {...}"],
                        0,
                        "PHP uses function name($param = 'default') syntax for default parameter values."
                    ),
                ],

                    questions: [
                        qa(
                            "Write a PHP function that calculates the average of three numbers and returns the result, including a default value for the third number.",
                            "function calculateAverage($a, $b, $c = 0) { return ($a + $b + $c) / 3; } // Example usage: echo calculateAverage(80, 90); // Uses default $c = 0; result = 56.67. If third argument is provided: echo calculateAverage(70, 80, 85); // result = 78.33.",
                            4
                        ),
                        qa(
                            "Explain basic form handling in PHP. Differentiate between $_GET and $_POST methods with security considerations.",
                            "HTML forms submit data using GET (appends data to URL, visible, limited size) or POST (sends data in HTTP body, hidden from URL, supports larger payloads, preferred for sensitive data). PHP captures GET data in $_GET and POST data in $_POST. GET is suitable for search queries or filtering; POST is required for login forms, file uploads, and database modifications. Security: Never trust user input; always use trim(), htmlspecialchars(), and server-side validation to prevent injection and XSS attacks.",
                            4
                        ),
                    ],
  }
);

/* =========================================================
   TOPIC 5 — Sessions, Cookies & Basic Security Concepts
========================================================= */

const sessionsCookiesSecurity = createTopic(
    "sessions-cookies-and-basic-security-concepts",
    "Sessions, Cookies & Basic Security Concepts",

    [
        definition(
            "PHP Session",
            "A session is a mechanism in PHP that allows persistent data storage across multiple web pages for a single user. A unique session ID is generated, stored in a cookie, and associated with server-side session files or database records."
        ),

        definition(
            "Cookie",
            "A cookie is a small text file stored on the client's browser that sends data back to the server with each HTTP request, allowing the server to identify the user and maintain session state or preferences."
        ),

        heading("Starting and Managing Sessions in PHP"),

        code(
            `<?php
  // Start or resume a session (must be called before any HTML output)
  session_start();

  // Storing values in the session array
  $_SESSION["userName"] = "Amit Patel";
  $_SESSION["userRole"] = "Student";

  // Retrieving session data
  echo "Welcome back, " . $_SESSION["userName"];
  echo " (Role: " . $_SESSION["userRole"] . ")";

  // Destroying a session completely (for logout)
  if (isset($_GET["logout"]), {
      session_unset();     // Clear session variables
      session_destroy();   // Destroy session file on server
      echo "<p>Session destroyed successfully.</p>";
  }
?>`,
            "php",
            "PHP Session Management Example"
        ),

        heading("Cookie Operations in PHP"),

        table(
            ["Cookie Operation", "PHP Function / Syntax", "Notes"],
            [
                ["Set Cookie", "setcookie(name, value, expire, path);", "expire is Unix timestamp; 0 deletes cookie"],
                ["Retrieve Cookie", "$_COOKIE['cookie_name']", "Superglobal array always available after cookie is set"],
                ["Check Cookie Exists", "isset($_COOKIE['cookie_name'])", "Always verify existence before accessing"],
                ["Delete Cookie", "setcookie('name', '', time() - 3600);", "Set expiration time in the past to force deletion"],
            ]
        ),

        code(
            `<?php
  // Set a persistent cookie (valid for 1 hour)
  setcookie("username", "Amit", time() + 3600, "/");

  // Read cookie value safely
  if (isset($_COOKIE["username"]), {
      echo "Cookie Value: " . htmlspecialchars($_COOKIE["username"]);
  } else {
      echo "Cookie not set yet.";
  }

  // Delete cookie by setting expiration in the past
  setcookie("username", "", time() - 3600, "/");
?>`,
            "php",
            "Cookie Handling Example"
        ),

        heading("Security Concepts: SQL Injection & XSS Prevention"),

        table(
            ["Security Threat", "Attack Description", "PHP Prevention Technique"],
            [
                ["SQL Injection", "Attacker inserts malicious SQL via input fields to read/modify database data", "Use Prepared Statements with PDO / MySQLi; parameterized queries"],
                ["Cross-Site Scripting (XSS)", "Injects malicious JavaScript into pages viewed by other users", "Use htmlspecialchars(), strip_tags(), output escaping"],
                ["Session Fixation", "Attacker forces user to use known session ID", "Regenerate session ID using session_regenerate_id(true)"],
                ["Password Storage", "Storing passwords in plain text exposes user credentials", "Use password_hash() and password_verify() with bcrypt algorithm"],
            ]
        ),

        heading("Prepared Statements with PDO (SQL Injection Prevention)"),

        code(
            `<?php
  // Secure database interaction using PDO Prepared Statements
  $dsn = "mysql:host=localhost;dbname=college; charset=utf8mb4";
  $username = "root";
  $password = "";

  try {
      $pdo = new PDO($dsn, $username, $password);
      $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

      $stmt = $pdo->prepare("SELECT * FROM students WHERE roll = :rollNo");
      $stmt->execute(["rollNo" => $_POST["rollInput"]]);
      $student = $stmt->fetch(PDO::FETCH_ASSOC);

      echo "Student Found: " . htmlspecialchars($student["name"]);
  } catch (PDOException $e) {
      echo "Database connection failed: " . $e->getMessage();
  }
?>`,
            "php",
            "PDO Prepared Statement Security"
        ),

        heading("Password Hashing Best Practice"),

        code(
            `<?php
  // Secure Password Hashing
  $userPassword = "Secret123";
  $hashedPassword = password_hash($userPassword, PASSWORD_BCRYPT);

  // Storing $hashedPassword in database...

  // Verifying Login Password
  $enteredPassword = $_POST["password"];
  if (password_verify($enteredPassword, $hashedPassword), {
      echo "Login successful!";
  } else {
      echo "Invalid credentials.";
  }
?>`,
            "php",
            "Password Hashing Example"
        ),

        keyPoints([
            "session_start() must be called before any HTML output to avoid header errors.",
            "Cookies are stored in the browser; session files are stored securely on the server.",
            "Always sanitize all user input; never trust data from $_GET, $_POST, or $_COOKIE.",
            "Prepared statements (PDO / MySQLi) prevent SQL Injection by separating query logic from data.",
            "password_hash() uses a strong one-way hashing algorithm (bcrypt) for secure password storage.",
        ]),
  ],

{
    summary:
    "Learn PHP session and cookie management, security fundamentals (SQL Injection prevention with PDO, XSS prevention with htmlspecialchars(), password hashing with password_hash(), and session regeneration.",
        minutes: 14,
            tags: ["php", "sessions", "cookies", "security", "sql-injection", "prepared-statements", "xss", "important"],

                mcqs: [
                    mcq(
                        "Which PHP function starts or resumes a server-side session?",
                        ["cookie_start()", "session_start()", "session_begin()", "start_session()"],
                        1,
                        "session_start() creates or resumes a session and must be called before any output.",
                    ),
                    mcq(
                        "Which PHP function securely hashes a password using the bcrypt algorithm?",
                        ["hash_password()", "md5()", "sha1()", "password_hash()"],
                        3,
                        "password_hash() uses the bcrypt algorithm by default for strong one-way hashing."
                    ),
                    mcq(
                        "How can a PHP developer prevent SQL Injection attacks?",
                        ["Use addslashes() only", "Always use Prepared Statements / Parameterized Queries", "Hide the database", "Use base64 encoding"],
                        1,
                        "Prepared Statements separate SQL commands from user input, preventing injection attacks."
                    ),
                    mcq(
                        "Which PHP superglobal contains cookie data sent from the browser?",
                        ["$_GET", "$_SESSION", "$_COOKIE", "$_SERVER"],
                        2,
                        "The $_COOKIE superglobal array stores all cookie values sent by the client's browser."
                    ),
                ],

                    questions: [
                        qa(
                            "Differentiate between PHP Sessions and Cookies with respect to storage location, security, and lifetime.",
                            "Sessions: Data is stored on the server (in temporary files or database). A session ID cookie is stored in the browser to link requests. Sessions are more secure because sensitive data never reaches the browser. Session data persists until the session expires or is destroyed. Cookies: Data is stored directly in the user's browser in small text files. Cookies can be accessed and modified by the user or malicious scripts. Cookies persist based on the expiration time set; they can last for minutes or years. Cookies are suitable for user preferences (language selection), not for sensitive authentication tokens (unless HttpOnly and Secure flags are used).",
                            4
                        ),
                        qa(
                            "What is SQL Injection? How does using PDO Prepared Statements prevent it? Provide code.",
                            "SQL Injection occurs when an attacker inserts malicious SQL fragments into input fields that are then executed by the database. Example danger: $query = 'SELECT * FROM users WHERE name = \"' . $_POST[\"user\"] . '\"'; If attacker inputs ' OR '1'='1, the query returns all users. PDO Prepared Statements prevent this by sending the SQL query structure and data separately to the database. The database compiles the query structure before inserting parameter values, making it impossible for user input to alter the query logic. Example: $stmt = $pdo->prepare('SELECT * FROM students WHERE roll = ?'); $stmt->execute([$_POST['roll']]);",
                            4
                        ),
                    ],
  }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit1Topics = [
    phpArchitecture,
    variablesDataTypes,
    controlStructuresArrays,
    functionsFormsValidation,
    sessionsCookiesSecurity,
];
